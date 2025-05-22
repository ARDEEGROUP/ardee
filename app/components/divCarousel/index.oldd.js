import React, { useState, useEffect, useCallback, useRef } from "react";
import TeamGroupCard from "../teamGroupCard";

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
  const [isPaused, setIsPaused] = useState(false); // State to track if the carousel is paused
  const carouselRef = useRef(null); // Ref for the carousel container
  const touchStartX = useRef(0);  // Store the initial X position on touch start
  const touchMoveX = useRef(0);   // Keep track of X position during touch move
  const animationInterval = useRef(null); // Ref to hold the animation interval

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

  const startAnimation = useCallback(() => {
    animationInterval.current = setInterval(nextSlide, 5000);
  }, [nextSlide]);

  const stopAnimation = useCallback(() => {
    clearInterval(animationInterval.current);
  }, []);


  // useEffect for auto-scrolling (and pausing)
  useEffect(() => {
     if (!isPaused) {
        startAnimation();
     }
    return () => stopAnimation(); //Clear interval on unmount or if isPaused changes
  }, [isPaused, startAnimation, stopAnimation]);



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



  // --- Touch and Mouse Event Handlers ---
  const handleTouchStart = (e) => {
    stopAnimation();
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
    touchMoveX.current = e.touches[0].clientX; // Initialize touchMoveX
  };

  const handleTouchMove = (e) => {
     if(!isPaused) return; // prevent unnecessary calculations.
    touchMoveX.current = e.touches[0].clientX;
    const diffX = touchStartX.current - touchMoveX.current;

     // Optional: Add a small movement to the carousel during drag
    if (carouselRef.current) {
          carouselRef.current.style.transition = "none"; // Disable transitions
      carouselRef.current.style.transform = `translateX(calc(-${currentIndex * 100}% - ${diffX}px))`;
    }

  };

  const handleTouchEnd = () => {

      const diffX = touchStartX.current - touchMoveX.current;
    if (Math.abs(diffX) > 50) { // Threshold for swipe (adjust as needed)
      if (diffX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    } else {
        // If not a swipe, return to current slide position
        if(carouselRef.current){
             carouselRef.current.style.transition = "transform 0.5s ease-in-out";
          carouselRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    }

    // reset transition
     setTimeout(()=>{
         if(carouselRef.current){
              carouselRef.current.style.transition = "transform 0.5s ease-in-out";
         }
     },0);
    setIsPaused(false);
    startAnimation();   // Resume animation
  };


  const handleMouseDown = (e) => {
      e.preventDefault(); // prevent selecting text.
      stopAnimation();
      setIsPaused(true);
      touchStartX.current = e.clientX;
      touchMoveX.current = e.clientX;

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
  }

    const handleMouseMove = (e) => {
        if(!isPaused) return;
        touchMoveX.current = e.clientX;
        const diffX = touchStartX.current - touchMoveX.current;
        if (carouselRef.current) {
            carouselRef.current.style.transition = "none";
            carouselRef.current.style.transform = `translateX(calc(-${currentIndex * 100}% - ${diffX}px))`;
        }
    }

  const handleMouseUp = () => {
    const diffX = touchStartX.current - touchMoveX.current;

    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }else{
       if(carouselRef.current){
             carouselRef.current.style.transition = "transform 0.5s ease-in-out";
          carouselRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    }

     // reset transition
     setTimeout(()=>{
         if(carouselRef.current){
              carouselRef.current.style.transition = "transform 0.5s ease-in-out";
         }
     },0);


    setIsPaused(false);
    startAnimation();

    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  }



  return (
    <div
      className="relative w-full rounded-lg overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      ref={carouselRef}

    >
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
    </div>
  );
}