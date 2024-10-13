"use client";

import { useCallback, useEffect, useState } from "react";
import { Icons } from "../fragments/icons";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";

const images = [
  "/jalan.jpg",
  "/white.png",
  "/user.png",
  "/user.png",
  "/user.png",
];

export default function MediaPost() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => goToNext(),
    onSwipedRight: () => goToPrevious(),
    trackMouse: true,
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [goToPrevious, goToNext]);

  return (
    <div className="mb-4">
      <div
        {...handlers}
        className="relative h-[400px] w-full border border-border overflow-hidden rounded-lg">
        <div
          className="absolute top-0 left-0 w-full h-full transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              className="absolute top-0 left-0 w-full h-full object-contain"
              width={500}
              height={500}
              style={{ left: `${index * 100}%` }}
            />
          ))}
        </div>
        <button
          onClick={goToPrevious}
          className="absolute p-2 shadow shadow-neutral/20 drop-shadow top-1/2 left-2 transform -translate-y-1/2 bg-transparent hover:bg-white/10 rounded-full border border-white/50">
          <Icons.back strokeWidth={1.25} className="text-white drop-shadow" />
        </button>
        <button
          onClick={goToNext}
          className="absolute p-2 shadow shadow-neutral/20 drop-shadow  top-1/2 right-2 transform -translate-y-1/2 bg-transparent hover:bg-white/10 rounded-full border border-white/50">
          <Icons.next strokeWidth={1.25} className="text-white drop-shadow" />
        </button>
      </div>
      <div className="flex justify-center -mt-6 z-10 relative">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full drop-shadow mx-1 focus:outline-none ${
              index === currentIndex ? "bg-white" : "bg-gray-300/50"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
