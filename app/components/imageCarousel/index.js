import React, { useState, useEffect, useCallback } from "react";
import SideImageCard from "../sideImageCard";
import SideImageBgCard from "../sideImageBgCard";

const ArrowButton = ({ direction, onClick }) => (
  <button
    className={`absolute top-1/2 ${
      direction === "left" ? "left-4" : "right-4"
    } transform -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-dark-gradient backdrop-blur-sm border border-gray-50 flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none`}
    onClick={onClick}
  >
    <svg
      className="w-6 h-6 text-white"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d={direction === "left" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
      />
    </svg>
  </button>
);

export default function ImageCarousel(props) {
  const {
    images,
    size = "cover",
    extension,
    showDarkGradient = false,
    hideArrows = false,
    opaqueBg = false,
    hideLightGradient = false,
  } = props;
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const totalImages = images.length;
  const extendedImages = [images[totalImages - 1], ...images, images[0]];

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
    setIsTransitioning(true);
  }, []);

  const nextSlide = useCallback(() => {
    goToSlide((currentIndex + 1) % (totalImages + 2));
  }, [currentIndex, totalImages, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentIndex - 1 + totalImages + 2) % (totalImages + 2));
  }, [currentIndex, totalImages, goToSlide]);
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        if (currentIndex === 0) {
          setCurrentIndex(totalImages);
        } else if (currentIndex === totalImages + 1) {
          setCurrentIndex(1);
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, isTransitioning, totalImages]);

  return (
    <div className="relative w-full rounded-lg overflow-hidden">
      <div
        className={`flex ${
          isTransitioning && images && images.length > 1
            ? "transition-transform duration-500"
            : ""
        } ease-in-out`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {extendedImages.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <SideImageBgCard
              darkGradient={showDarkGradient}
              item={{ image, extension }}
              size={size}
              opaqueBg={opaqueBg}
              hideLightGradient={hideLightGradient}
            />
          </div>
        ))}
      </div>
      {images && images.length > 1 && !hideArrows ? (
        <>
          <ArrowButton direction="left" onClick={prevSlide} />
          <ArrowButton direction="right" onClick={nextSlide} />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
