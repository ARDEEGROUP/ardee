import { useEffect, useRef, useState } from "react";
import Button from "../button";
import "./styles.css";

export default function HomeSectionCard(props) {
  const {
    item,
    index,
    classes = "min-h-[400px] mt-10",
    innerClasses = "",
    titleClasses = "text-[min(min(3rem,12vw),5rem)]",
  } = props;

  const [isVisible, setIsVisible] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const [shouldAnimateContent, setShouldAnimateContent] = useState(false);
  const [height, setHeight] = useState(0);

  const domRef = useRef();
  const descriptionDivRef = useRef(null);

  useEffect(() => {
    if (!item) return;
    if (descriptionDivRef.current) {
      setHeight(
        descriptionDivRef.current.offsetHeight +
          (item.action
            ? item.truncateDescription
              ? 95
              : 100
            : item.truncateDescription
            ? 15
            : 20)
      );
    }
  }, [item]); // Empty dependency array to run only on mount

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

  const animateInContent = () => {
    setTimeout(() => {
      setShouldAnimateContent(true);
    }, 200);
  };

  const animateOutContent = () => {
    setTimeout(() => {
      setShouldAnimateContent(false);
    }, 200);
  };

  const onMouseEnter = (e) => {
    if (isAnimated || !height) return;
    setIsAnimated(true);
    animateInContent();
  };
  const onMouseLeave = (e) => {
    console.log("mouseLeave called");
    if (!isAnimated || !height) return;
    setIsAnimated(false);
    animateOutContent();
  };

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={domRef}
      className={`cursor-default rounded-2xl min-h-[400px] mt-10 ${classes} shadow-xl relative border border-solid border-white/20 hover:border-white hover:shadow-2xl grayscale-card delay-200 ${
        isVisible ? "grayscale-card-hover" : ""
      }`}
      style={{
        backgroundImage: `url("/images/${item.image}.png")`,
        // backgroundAttachment: "fixed",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <div
        className={`p-3 min-h-[400px] mt-10 ${classes} ${innerClasses} rounded-2xl flex items-end`}
      >
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-color-gradient rounded-[1rem]"></div>
        <div className="absolute right-0 bottom-0 left-0 top-0 bg-dark-gradient rounded-[1rem]"></div>
        <div className={`z-40 mt-20 mb-5 mx-5 flex flex-col w-full relative`}>
          <div
            className={`text-[calc(400px/6)] ${titleClasses} font-extrabold font-times text-white absolute bottom-0 transition-transform`}
            style={
              shouldAnimateContent
                ? {
                    transform: `translateY(-${height}px)`,
                    transitionDelay: "0s",
                    transitionDuration: "0.3s",
                  }
                : {
                    transitionDelay: "0.3s",
                    transitionDuration: "0.3s",
                  }
            }
          >
            {item.label}
          </div>
          <div
            ref={descriptionDivRef}
            className={`mt-2 mb-5 text-zinc-200 ${
              item.truncateDescription ? "text-sm" : "text-base"
            } font-semibold max-w-prose absolute bottom-0  ${
              item.action
                ? "transition-all -translate-y-[4.75rem]"
                : "transition-opacity"
            } ${
              shouldAnimateContent
                ? "opacity-100 delay-300 duration-300"
                : "opacity-0 delay-100 duration-200"
            } ${
              item.truncateDescription ? "truncate-3-lines !mb-3 !-mt-2" : ""
            } ${index % 2 === 0 ? "" : ""}`}
          >
            {item.description || "test description"}
          </div>

          {item.action ? (
            <div
              className={`flex mt-5 absolute bottom-0 transition-opacity ${
                shouldAnimateContent
                  ? "opacity-100 delay-500 duration-300"
                  : "opacity-0 delay-0 duration-200"
              }`}
            >
              <Button
                onClick={() => item.action()}
                buttonText={item.actionText || "Know More"}
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
