import { useEffect, useRef, useState } from "react";
import Button from "../button";
import "./styles.css";

export default function SideImageCard(props) {
  const {
    item,
    darkGradient = true,
    size = "cover",
    opaqueBg = false,
    hideLightGradient = false,
  } = props;

  // const { item, darkGradient } = props;

  const [isVisible, setIsVisible] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const [shouldAnimateContent, setShouldAnimateContent] = useState(false);
  const [height, setHeight] = useState(0);

  const domRef = useRef();
  const descriptionDivRef = useRef(null);

  useEffect(() => {
    if (descriptionDivRef.current) {
      setHeight(descriptionDivRef.current.offsetHeight + 90);
    }
  }, []); // Empty dependency array to run only on mount

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Set state to true when the div is fully in view
        setIsVisible(entry.isIntersecting && entry.intersectionRatio >= 0.7);
      },
      {
        threshold: [0.7], // Trigger callback when the entire div is in view
      }
    );
    if (domRef && domRef.current) {
      observer.observe(domRef.current);
    }
    return () => {
      if (domRef && domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isAnimated || !height) return;
    if (isVisible) {
      setIsAnimated(true);
      animateInContent();
    }
  }, [isVisible, height]);

  const animateInContent = () => {
    setTimeout(() => {
      setShouldAnimateContent(true);
    }, 1000);
  };

  return (
    <div
      ref={domRef}
      className={`rounded-xl min-h-[max(60vh,min(60vw,calc(100vh-200px)))] shadow-2xl mt-0 relative grayscale-card delay-200 ${
        isVisible ? "grayscale-card-hover" : ""
      }`}
      style={{
        backgroundColor: opaqueBg ? "rgba(80,80,80,1)" : "rgba(0,0,0,0)",
        backgroundImage: `url("/images/${item.image}${
          item.extension || ".png"
        }")`,
        // backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: size,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className={`p-3 min-h-[max(60vh,min(60vw,calc(100vh-200px)))] rounded-xl flex items-end backdrop-blur-md delay-200 ${
          isVisible ? "!backdrop-blur-0" : ""
        } transition-all duration-1000`}
      >
        {hideLightGradient ? (
          <></>
        ) : (
          <div className="absolute top-0 right-0 bottom-0 left-0 bg-color-gradient rounded-[0.75rem]"></div>
        )}
        <div
          className={`absolute right-0 -bottom-[1px] left-0 top-0 rounded-[0.75rem] ${
            darkGradient ? "bg-dark-gradient" : ""
          } `}
        ></div>
        <div
          className={`z-40 mt-20 mb-5 mx-5 lg:mx-10 flex flex-col w-full relative items-center`}
        >
          {item.label ? (
            <div
              className={`text-[min(min(5rem,15vw),7rem)] font-extrabold font-times text-white absolute bottom-0 transition-transform duration-200`}
              style={
                shouldAnimateContent
                  ? {
                      transform: `translateY(-${height}px)`,
                    }
                  : {}
              }
            >
              {item.label}
            </div>
          ) : (
            <></>
          )}
          {item.description ? (
            <div
              ref={descriptionDivRef}
              className={`mt-2 mb-5 text-zinc-400 text-[min(2rem,5vw)] font-light max-w-prose absolute bottom-0 transition-all delay-300 duration-300 -translate-y-[4.75rem] ${
                shouldAnimateContent && item.description
                  ? "opacity-100"
                  : "opacity-0"
              } text-center`}
            >
              {item.description}
            </div>
          ) : (
            <></>
          )}

          {item.hasAction ? (
            <div
              className={`flex mt-5 absolute bottom-0 transition-opacity delay-500 duration-500 ${
                shouldAnimateContent ? "opacity-100" : "opacity-0"
              }`}
            >
              <Button
                buttonText={"Know More"}
                containerClasses={"mt-0 mb-0"}
                classes={"px-7"}
              />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
