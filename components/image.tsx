"use client";

import { useState } from "react";
import Image from "next/image";

type ImageCarouselProps = {
  images: string[];
  captions?: string[];
};

export default function ImageCarousel({ images, captions }: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const currentImage = images[index];
  const isGif = currentImage.toLowerCase().endsWith(".gif");

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

        <div className="relative h-full w-full max-w-4xl">
          {isGif ? (
            <img
              src={currentImage}
              alt={`Image ${index + 1}`}
              className="h-full w-full object-contain"
            />
          ) : (
            <Image
              src={currentImage}
              alt={`Image ${index + 1}`}
              fill
              className="object-contain"
              priority
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
    </div>
  );
}
