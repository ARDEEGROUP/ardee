import { useEffect, useRef, useState } from "react";
import "./styles.css";

export default function IconListItem(props) {
  const { item, iconGetter } = props;

  const [isVisible, setIsVisible] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const [shouldAnimateContent, setShouldAnimateContent] = useState(false);

  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Set state to true when the div is fully in view
        setIsVisible(entry.isIntersecting && entry.intersectionRatio >= 0.6);
      },
      {
        threshold: [0.6], // Trigger callback when the entire div is in view
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
    if (isAnimated) return;
    if (isVisible) {
      setIsAnimated(true);
      animateInContent();
    }
  }, [isVisible]);

  const animateInContent = () => {
    setTimeout(() => {
      setShouldAnimateContent(true);
    }, 200);
  };

  return (
    <div
      ref={domRef}
      className={`rounded-xl mt-0 h-full relative grayscale-card transition-all delay-100 cursor-default border-2 border-solid border-transparent hover:border-zinc-400/50 hover:bg-dark-gradient ${
        isVisible ? "grayscale-card-hover " : ""
      }`}
      style={{
        backgroundImage: `url("/images/${item.image}.png")`,
        // backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className={`lg:pl-0 lg:pr-3 pb-3 rounded-xl h-full`}>
        {/* <div className="lg:hidden absolute top-0 right-0 bottom-0 left-0 bg-light-gradient rounded-[0.75rem]"></div> */}
        {/* <div className="lg:hidden absolute right-0 -bottom-[1px] left-0 top-0 bg-dark-gradient rounded-[0.75rem]"></div> */}
        <div className="z-40 mt-10 mb-3 lg:mx-5 w-full flex items-start gap-5 h-full">
          <div
            className={`transition-all delay-100 duration-200 mt-0 justify-center flex flex-col self-stretch h-full ${
              shouldAnimateContent && item.icon ? "opacity-100" : "opacity-0"
            }`}
          >
            {item.icon && item.isHeroIcon && iconGetter ? (
              <div className="w-[3.75rem] h-[3.75rem] flex items-center justify-center">
                {iconGetter(
                  item.icon,
                  "w-[3rem] h-[3rem] text-zinc-300 drop-shadow-[0_0px_5px_rgba(255,255,255,0.85)]"
                )}
              </div>
            ) : (
              <img
                src={`/icons/${item.icon}.png`}
                className="w-[3.75rem] h-[3.75rem]"
              />
            )}
            <div className="w-5 h-full bg-red-300"></div>
          </div>
          <div className={`flex flex-col w-full pr-4 items-start`}>
            {item.label ? (
              <div
                className={`text-[min(1.75rem,5vw)] font-extrabold font-times text-white duration-200`}
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
            {item.subTitle ? (
              <div
                className={`mt-2 mb-2 text-zinc-100 text-base font-light uppercase max-w-prose transition-all delay-100 duration-200 ${
                  shouldAnimateContent && item.subTitle
                    ? "opacity-100"
                    : "opacity-0"
                } text-left`}
              >
                <span className="font-light text-zinc-300 lg:text-zinc-400">
                  {item.subTitle}
                </span>
              </div>
            ) : (
              <></>
            )}

            {item.description ? (
              <div
                className={`mt-2 mb-5 mr-5 text-zinc-100 text-base font-light max-w-prose transition-all delay-100 duration-200 ${
                  shouldAnimateContent && item.description
                    ? "opacity-100"
                    : "opacity-0"
                } text-left`}
              >
                <span className="font-semibold text-zinc-200 lg:text-zinc-300">
                  {item.description}
                </span>
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
