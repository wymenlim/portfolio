"use client";

import { useState } from "react";
import Image from "next/image";

type ImageCarouselProps = {
  images: string[];
};

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [index, setIndex] = useState(0);

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
      {/* Image area fills remaining space */}
      <div className="flex min-h-0 flex-1 items-center justify-center overflow-hidden">
        <div className="relative h-full w-full max-w-4xl">
          <Image
            src={images[index]}
            alt={`Image ${index + 1}`}
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-between p-4 border-t ">
        <button
          onClick={prev}
          aria-label="Previous image"
          className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 text-4xl text-white/80 shadow-lg transition hover:-translate-y-0.5 hover:text-white"
        >
          ‹
        </button>

        <span className="text-sm text-white/60">
          {index + 1} / {images.length}
        </span>

        <button
          onClick={next}
          aria-label="Next image"
          className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 text-4xl text-white/80 shadow-lg transition hover:-translate-y-0.5 hover:text-white"
        >
          ›
        </button>
      </div>
    </div>
  );
}
