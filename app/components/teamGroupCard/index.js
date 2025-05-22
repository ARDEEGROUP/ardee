import { useEffect, useRef, useState } from "react";
import Button from "../button";
import "./styles.css";

export default function TeamGroupCard(props) {
  const {
    item,
    showImage = false,
    threshold = 0.8,
    hoverDisabled = false,
  } = props;

  const [isVisible, setIsVisible] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const [shouldAnimateContent, setShouldAnimateContent] = useState(false);
  const [height, setHeight] = useState(0);

  const domRef = useRef();
  const descriptionDivRef = useRef(null);
  const designationDivRef = useRef(null);

  useEffect(() => {
    if (descriptionDivRef.current) {
      setHeight(descriptionDivRef.current.offsetHeight + 90);
    }
  }, []); // Empty dependency array to run only on mount

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Set state to true when the div is fully in view
        setIsVisible(
          entry.isIntersecting && entry.intersectionRatio >= threshold
        );
      },
      {
        threshold: [threshold], // Trigger callback when the entire div is in view
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
  }, [threshold]);

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
    }, 200);
  };

  return (
    <div
      ref={domRef}
      className={`rounded-xl h-full shadow-2xl mt-0 relative grayscale-card transition-all delay-200 cursor-default border-2 border-solid border-transparent ${
        hoverDisabled ? "" : "hover:border-zinc-400 hover:bg-dark-gradient"
      }`}
    >
      <div
        className={`rounded-xl h-full flex items-start backdrop-blur-md delay-200 ${
          isVisible ? "!backdrop-blur-0" : ""
        } transition-all duration-500`}
      >
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-light-gradient rounded-[0.75rem]"></div>
        <div className="absolute right-0 -bottom-[1px] left-0 top-0 bg-dark-gradient rounded-[0.75rem]"></div>
        <div
          className={`z-40 flex flex-col w-full relative items-center text-center`}
        >
          {item.image && showImage ? (
            <div className="relative h-[200px] w-full bg-dark-color-gradient rounded-t-[0.75rem] px-3 py-3">
              <img
                className="h-[200px] w-full object-contain object-center duration-200 rounded-xl"
                src={`/images/${item.image}.png`}
                style={
                  shouldAnimateContent
                    ? {
                        opacity: 1,
                        borderRadius: "12px",
                      }
                    : { opacity: 0, borderRadius: "12px" }
                }
              />
            </div>
          ) : (
            <></>
          )}
          <div className="p-5 lg:px-6 pt-7">
            <div
              className={`flex items-center justify-center gap-x-2 ${
                showImage ? "mt-2" : ""
              }`}
            >
              {item.label ? (
                <div
                  className={`text-[min(1.6rem,4.5vw)] font-extrabold font-times text-white duration-200`}
                  style={
                    shouldAnimateContent
                      ? {
                          opacity: 1,
                        }
                      : { opacity: 0 }
                  }
                >
                  {item.label}
                </div>
              ) : (
                <></>
              )}
              {item.label && item.linkedin ? (
                <div className="w-1 h-1 rounded-full bg-zinc-300 ml-1"></div>
              ) : (
                <></>
              )}

              {item.linkedin ? (
                <a
                  href={item.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-transparent rounded-lg flex items-center justify-center hover:bg-zinc-600 transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 lg:w-6 lg:h-6 text-white rounded-md"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                </a>
              ) : (
                <></>
              )}
            </div>
            <div className={`${item.image && showImage ? "min-h-[4.6rem]" : ""}`}>
              {item.designation ? (
                <div
                  ref={designationDivRef}
                  className={`mt-2 mb-2 text-zinc-100 text-base font-semibold max-w-[50ch] transition-all delay-200 duration-300 ${
                    shouldAnimateContent && item.description
                      ? "opacity-100"
                      : "opacity-0"
                  } text-center`}
                >
                  <span className="font-semibold text-zinc-500">
                    {item.designation}
                  </span>
                </div>
              ) : (
                <></>
              )}

              {item.description ? (
                <div
                  ref={descriptionDivRef}
                  className={`mt-2 mb-5 text-zinc-300 text-sm font-normal max-w-prose transition-all delay-200 duration-300 ${
                    shouldAnimateContent && item.description
                      ? "opacity-100"
                      : "opacity-0"
                  } text-center`}
                >
                  <span className="font-semibold">
                    {item.description}
                  </span>
                </div>
              ) : (
                <></>
              )}
            </div>

            {item.hasAction ? (
              <div
                className={`flex mt-5 transition-opacity delay-500 duration-500 ${
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
    </div>
  );
}
