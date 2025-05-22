import React, { useState, useEffect, useCallback } from "react";
import TeamGroupCard from "../teamGroupCard";
import DivCarouselIndicator from "../divCarouselIndicator";

const ArrowButton = ({ direction, onClick }) => (
  <button
    className={`absolute top-[40%] ${
      direction === "left" ? "left-2" : "right-2"
    } transform -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-dark-gradient backdrop-blur-sm border border-gray-50 flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none`}
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

export default function DivCarousel(props) {
  const {
    items,
    size = "cover",
    extension,
    showDarkGradient = false,
    hideArrows = false,
    opaqueBg = false,
    hideLightGradient = false,
  } = props;
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const itemCount = items.length;
  const extendedItems = [items[itemCount - 1], ...items, items[0]];

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
    setIsTransitioning(true);
  }, []);

  const nextSlide = useCallback(() => {
    goToSlide((currentIndex + 1) % (itemCount + 2));
  }, [currentIndex, itemCount, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentIndex - 1 + itemCount + 2) % (itemCount + 2));
  }, [currentIndex, itemCount, goToSlide]);
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        if (currentIndex === 0) {
          setCurrentIndex(itemCount);
        } else if (currentIndex === itemCount + 1) {
          setCurrentIndex(1);
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, isTransitioning, itemCount]);

  const slideToIndex = (index) => {
    console.log("Sliding to index", index);
  };

  return (
    <div className="relative w-full rounded-lg overflow-hidden">
      <div
        className={`flex ${
          isTransitioning && items && items.length > 1
            ? "transition-transform duration-500"
            : ""
        } ease-in-out`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {extendedItems.map((item, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <TeamGroupCard
              item={item}
              index={index}
              showImage={true}
              threshold={0.1}
              hoverDisabled={true}
            />
          </div>
        ))}
      </div>
      {items && items.length > 1 && !hideArrows ? (
        <>
          <ArrowButton direction="left" onClick={prevSlide} />
          <ArrowButton direction="right" onClick={nextSlide} />
        </>
      ) : (
        <></>
      )}

      <div className="mt-3">
        <DivCarouselIndicator
          currentIndex={currentIndex}
          itemCount={itemCount}
          interval={5000}
          onClick={slideToIndex}
        />
      </div>
    </div>
  );
}
