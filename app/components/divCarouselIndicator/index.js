import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

export default function DivCarouselIndicator({
  currentIndex,
  interval,
  itemCount,
  onClick,
}) {
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(0); // Use a ref to track progress accurately

  useEffect(() => {
    let animationFrameId;
    let startTime;

    const animateProgress = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const elapsedTime = timestamp - startTime;
      const newProgress = (elapsedTime / interval) * 100; // Calculate progress based on elapsed time

      if (newProgress < 100) {
        progressRef.current = newProgress; // Update the ref
        setProgress(newProgress);
        animationFrameId = requestAnimationFrame(animateProgress);
      } else {
          progressRef.current = 0
          setProgress(0)
      }
    };


    if (itemCount > 0) {
      animationFrameId = requestAnimationFrame(animateProgress);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      setProgress(0); // Reset Progress
      progressRef.current = 0; // Reset ref
    };
  }, [currentIndex, interval, itemCount]);

  const handleClick = (index) => {
    if (onClick) {
      onClick(index + 1);
    }
  };

  return (
    <div className="flex justify-center items-center gap-2 py-2">
      {Array.from({ length: itemCount }).map((_, i) => (
        <button
          key={i}
          className={`
            h-2.5 rounded-full transition-all duration-300 ease-in-out
            ${
              i + 1 === currentIndex
                ? "w-8 bg-zinc-500 relative overflow-hidden"
                : "w-2.5 bg-zinc-500"
            }
          `}
          onClick={() => handleClick(i)}
          aria-label={`Go to slide ${i + 1}`}
        >
          {i + 1 === currentIndex && (
            <div
              className="absolute top-0 left-0 h-full bg-white bg-opacity-80 rounded-full"
              style={{
                width: `${progress}%`,
                // Remove the transition from inline styles. Use CSS class instead.
              }}
            />
          )}
        </button>
      ))}
    </div>
  );
}