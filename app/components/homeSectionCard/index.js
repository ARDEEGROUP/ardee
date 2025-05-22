import { useEffect, useRef, useState } from "react";
import Button from "../button";
import "./styles.css";

export default function HomeSectionCard(props) {
  const { item, index } = props;

  const [isVisible, setIsVisible] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const [shouldAnimateContent, setShouldAnimateContent] = useState(false);
  const [height, setHeight] = useState(0);

  const domRef = useRef();
  const descriptionDivRef = useRef(null);

  useEffect(() => {
    if (descriptionDivRef.current) {
      setHeight(descriptionDivRef.current.offsetHeight + 100);
    }
  }, []); // Empty dependency array to run only on mount

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Set state to true when the div is fully in view
        setIsVisible(entry.isIntersecting && entry.intersectionRatio >= 0.8);
      },
      {
        threshold: [0.8], // Trigger callback when the entire div is in view
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
      className={`rounded-xl min-h-[max(70vh,min(70vw,calc(100vh-100px-80px)))] shadow-2xl mt-10 relative grayscale-card delay-200 ${
        isVisible ? "grayscale-card-hover" : ""
      }`}
      style={{
        backgroundImage: `url("/images/${item.image}.png")`,
        // backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div
        className={`p-3 min-h-[max(70vh,min(70vw,calc(100vh-100px-80px)))] rounded-xl flex items-end backdrop-blur-md delay-200 ${
          isVisible ? "!backdrop-blur-0" : ""
        } transition-all duration-1000`}
      >
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-color-gradient rounded-[0.75rem]"></div>
        <div className="absolute right-0 -bottom-[1px] left-0 top-0 bg-dark-gradient rounded-[0.75rem]"></div>
        <div
          className={`z-40 mt-20 mb-5 mx-5 lg:mx-10 flex flex-col w-full relative ${
            index % 2 === 0 ? "" : ""
          }`}
        >
          <div
            className={`text-[min(min(3rem,12vw),5rem)] font-extrabold font-times text-white absolute bottom-0 transition-transform duration-200`}
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
          <div
            ref={descriptionDivRef}
            className={`mt-2 mb-5 text-zinc-200 text-base font-semibold max-w-prose absolute bottom-0 transition-all delay-300 duration-300 -translate-y-[4.75rem] ${
              shouldAnimateContent ? "opacity-100" : "opacity-0"
            } ${index % 2 === 0 ? "" : ""}`}
          >
            {item.description ||
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. he point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."}
          </div>

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
        </div>
      </div>
    </div>
  );
}
