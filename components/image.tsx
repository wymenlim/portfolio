"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getMLSlide } from "@/components/ml-slides";

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

function isHtmlFile(src: string) {
  return src.toLowerCase().endsWith(".html");
}

function preloadSlide(src: string) {
  if (typeof window === "undefined") {
    return;
  }

  if (isHtmlFile(src)) {
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
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const currentImage = images[index];
  const isGif = isGifFile(currentImage);
  const isVideo = isVideoFile(currentImage);
  const isHtml = isHtmlFile(currentImage);

  // Preload all slides on mount
  useEffect(() => {
    images.forEach((src, i) => {
      if (i !== 0) preloadSlide(src);
    });
  }, [images]);

  // Preload adjacent slides on navigation
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
            if (!isVideo && !isHtml) {
              setIsExpanded(true);
            }
          }}
          role={isVideo || isHtml ? undefined : "button"}
          tabIndex={isVideo || isHtml ? -1 : 0}
          aria-label={isVideo || isHtml ? "Media" : "Expand media"}
          onKeyDown={(event) => {
            if (!isVideo && !isHtml && (event.key === "Enter" || event.key === " ")) {
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
          ) : isHtml ? (
            (() => {
              const MLSlide = getMLSlide(currentImage);
              return MLSlide ? (
                <div className="h-full w-full rounded-lg border border-white/10 overflow-hidden">
                  <MLSlide />
                </div>
              ) : (
                <iframe
                  src={currentImage}
                  className="h-full w-full rounded-lg border border-white/10"
                  title={`HTML slide ${index + 1}`}
                />
              );
            })()
          ) : (
            <Image
              src={currentImage}
              alt={`Image ${index + 1}`}
              fill
              className={`object-contain transition-all duration-500 ${
                loadedImages.has(currentImage)
                  ? "scale-100 blur-0"
                  : "scale-105 blur-md"
              }`}
              sizes={SLIDE_IMAGE_SIZES}
              quality={80}
              unoptimized={isGif}
              priority={index === 0}
              onLoad={() =>
                setLoadedImages((prev) => new Set(prev).add(currentImage))
              }
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
                className={`object-contain transition-all duration-500 ${
                  loadedImages.has(currentImage)
                    ? "scale-100 blur-0"
                    : "scale-105 blur-md"
                }`}
                sizes={SLIDE_IMAGE_SIZES}
                quality={80}
                unoptimized={isGif}
                priority
                onLoad={() =>
                  setLoadedImages((prev) => new Set(prev).add(currentImage))
                }
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
