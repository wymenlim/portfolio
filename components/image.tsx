"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type ImageCarouselProps = {
  images: string[];
  captions?: string[];
};

const SLIDE_IMAGE_SIZES = "(max-width: 768px) calc(100vw - 5rem), 1152px";

function isVideoFile(src: string) {
  return /\.(mp4|webm|ogg|mov)$/i.test(src);
}

function isGifFile(src: string) {
  return src.toLowerCase().endsWith(".gif");
}

function preloadSlide(src: string) {
  if (typeof window === "undefined") {
    return;
  }

  if (isVideoFile(src)) {
    const video = document.createElement("video");
    video.preload = "metadata";
    video.src = src;
    video.load();
    return;
  }

  const image = new window.Image();
  image.decoding = "async";
  image.src = src;
}

export default function ImageCarousel({ images, captions }: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const currentImage = images[index];
  const isGif = isGifFile(currentImage);
  const isVideo = isVideoFile(currentImage);

  useEffect(() => {
    if (images.length < 2) {
      return;
    }

    const nextIndex = (index + 1) % images.length;
    const prevIndex = (index - 1 + images.length) % images.length;

    preloadSlide(images[nextIndex]);
    preloadSlide(images[prevIndex]);
  }, [images, index]);

  function next() {
    setIndex((i) => (i + 1) % images.length);
  }

  function prev() {
    setIndex((i) => (i - 1 + images.length) % images.length);
  }

  if (images.length === 0) {
    return null;
  }

  return (
    <div className="flex h-full w-full flex-col">
      {/* Image area with side controls */}
      <div className="flex min-h-0 flex-1 items-center justify-center overflow-hidden">
        <button
          onClick={prev}
          aria-label="Previous image"
          className="mr-4 inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 text-4xl text-white/80 shadow-lg transition hover:-translate-y-0.5 hover:text-white"
        >
          ‹
        </button>

        <div
          className="relative h-full w-full max-w-4xl"
          onClick={() => {
            if (!isVideo) {
              setIsExpanded(true);
            }
          }}
          role={isVideo ? undefined : "button"}
          tabIndex={isVideo ? -1 : 0}
          aria-label={isVideo ? "Media" : "Expand media"}
          onKeyDown={(event) => {
            if (!isVideo && (event.key === "Enter" || event.key === " ")) {
              setIsExpanded(true);
            }
          }}
        >
          {isVideo ? (
            <video
              src={currentImage}
              className="h-full w-full object-contain"
              controls
              playsInline
              preload="auto"
              aria-label={`Video ${index + 1}`}
            />
          ) : (
            <Image
              src={currentImage}
              alt={`Image ${index + 1}`}
              fill
              className="object-contain"
              sizes={SLIDE_IMAGE_SIZES}
              quality={80}
              unoptimized={isGif}
              priority={index === 0}
            />
          )}
        </div>

        <button
          onClick={next}
          aria-label="Next image"
          className="ml-4 inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 text-4xl text-white/80 shadow-lg transition hover:-translate-y-0.5 hover:text-white"
        >
          ›
        </button>
      </div>

      {captions?.[index] ? (
        <div className="px-4 pt-4 text-center text-sm text-white/70">
          {captions[index]}
        </div>
      ) : null}

      {/* Footer */}
      <div className="flex justify-center p-4 border-t">
        <span className="text-sm text-white/60">
          {index + 1} / {images.length}
        </span>
      </div>

      {isExpanded ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Expanded media"
          onClick={() => setIsExpanded(false)}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setIsExpanded(false);
            }
          }}
          tabIndex={-1}
        >
          <div
            className="relative h-full w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            {isVideo ? (
              <video
                src={currentImage}
                className="h-full w-full object-contain"
                controls
                playsInline
                preload="metadata"
                autoPlay
              />
            ) : (
              <Image
                src={currentImage}
                alt={`Image ${index + 1}`}
                fill
                className="object-contain"
                sizes={SLIDE_IMAGE_SIZES}
                quality={80}
                unoptimized={isGif}
                priority
              />
            )}
          </div>
          <button
            onClick={() => setIsExpanded(false)}
            className="absolute right-6 top-6 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-2xl text-white/60 shadow-lg transition hover:-translate-y-0.5 hover:text-white/80"
            aria-label="Close expanded view"
          >
            ×
          </button>
        </div>
      ) : null}
    </div>
  );
}
