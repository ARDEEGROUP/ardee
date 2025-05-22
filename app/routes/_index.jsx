import { useSelector } from "react-redux";
import { LEADERSHIP_ENTITIES, NEW_PAGES } from "../enums/constants";
import HomeSectionCard from "../components/homeSectionCard/index.grid.new.grid.latest";
import { useNavigate } from "@remix-run/react";
import SplitText from "../components/splitText";
import FadeContent from "../components/fadeContent";
import Threads from "../components/threads";
import Waves from "../components/waves";
import TeamGroupCard from "../components/teamGroupCard";
import Button from "../components/button";
import DivCarousel from "../components/divCarousel";

export const meta = () => {
  return [
    { title: "The Ardee Group | Ideate. Plan. Execute." },
    {
      description:
        "Over 5 decades, the Ardee Group has been instrumental in shaping some of the most iconic structures in the Delhi-NCR region.",
    },
  ];
};

export default function Index() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const getActionForPageItem = (page) => {
    return () => {
      navigateToPage(page);
    };
  };

  const navigateToPage = (page) => {
    // if (page.value === "residential" || "commercial") {
    //   return navigate(`/real-estate/${page.value}`);
    // }

    if (page.url && typeof window === "object") {
      return window.open(page.url, "_blank");
    }

    return navigate(`/${page.value}`);
  };

  return (
    <div className="w-full container mx-auto p-2 md:p-3 lg:p-5 flex gap-y-4 flex-wrap mb-10">
      <div className="flex min-h-[calc(calc(max(70vmin,calc(100vh-220px)))/1.5-0.5rem)] py-16 items-center justify-center w-full">
        <div className="flex flex-col items-center justify-center w-full">
          <SplitText
            text="Ideate. Plan. Execute."
            className="text-[clamp(0.5rem,7vw+0.5rem,4rem)] leading-[clamp(0.9rem,11vw+0.5rem,4.5rem)] whitespace-nowrap font-extrabold font-times text-white"
            delay={100}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
            fontClasses={"font-times"}
          />
          <div className="mt-2 max-w-[70ch] flex items-center justify-center">
            <FadeContent
              blur={true}
              duration={500}
              delay={1000}
              easing="ease-out"
              initialOpacity={0}
              className="flex items-center justify-center mt-3"
            >
              <SplitText
                text="For over five decades, The Ardee Group has been a driving force in real estate development, transforming landscapes and shaping the future of urban living. Founded in 1971 by Shri Ashok Varma, our journey has been defined by strategic foresight, meticulous planning, and unwavering execution."
                className="text-lg lg:text-xl font-semibold text-zinc-500 px-3 lg:px-0"
                delay={0}
                // animationDelay={"delay-1000"}
                animationFrom={{
                  opacity: 0,
                  transform: "translate3d(0,50px,0)",
                }}
                animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
              />
            </FadeContent>
          </div>

          <div className="mt-2 max-w-[70ch] flex items-center justify-center">
            <FadeContent
              blur={true}
              duration={500}
              delay={1300}
              easing="ease-out"
              initialOpacity={0}
              className="flex items-center justify-center mt-3"
            >
              <SplitText
                text="With a diversified portfolio across residential, commercial, and institutional projects, we are committed to creating spaces that inspire, endure, and add long-term value. Our developments are more than structures—they are symbols of progress, quality, and innovation."
                className="text-lg lg:text-xl font-semibold text-zinc-500 px-3 lg:px-0"
                delay={0}
                // animationDelay={"delay-1000"}
                animationFrom={{
                  opacity: 0,
                  transform: "translate3d(0,50px,0)",
                }}
                animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
              />
            </FadeContent>
          </div>

          <div className="mt-2 max-w-[70ch] flex items-center justify-center">
            <FadeContent
              blur={true}
              duration={500}
              delay={1500}
              easing="ease-out"
              initialOpacity={0}
              className="flex items-center justify-center mt-3"
            >
              <SplitText
                text="Guided by our core philosophy—Ideate. Plan. Execute.—we continue to set new benchmarks in urban excellence and sustainable growth."
                className="text-lg lg:text-xl font-semibold text-zinc-500 px-3 lg:px-0"
                delay={0}
                // animationDelay={"delay-1000"}
                animationFrom={{
                  opacity: 0,
                  transform: "translate3d(0,50px,0)",
                }}
                animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
              />
            </FadeContent>
          </div>

          <div className="mt-2 max-w-[70ch] flex items-center justify-center">
            <FadeContent
              blur={true}
              duration={500}
              delay={1600}
              easing="ease-out"
              initialOpacity={0}
              className="flex items-center justify-center mt-3"
            >
              <SplitText
                text="As we expand our footprint, we remain dedicated to delivering world-class developments, enhancing communities, and shaping the next era of real estate."
                className="text-lg lg:text-xl font-semibold text-zinc-500 px-3 lg:px-0"
                delay={0}
                // animationDelay={"delay-1000"}
                animationFrom={{
                  opacity: 0,
                  transform: "translate3d(0,50px,0)",
                }}
                animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
              />
            </FadeContent>
          </div>
        </div>
      </div>

      <FadeContent
        blur={true}
        duration={500}
        // delay={2500}
        easing="ease-out"
        initialOpacity={0}
        className="min-h-96 pb-20"
      >
        <div className="lg:flex lg:flex-row items-start w-full container mx-auto relative">
          <div className="w-full lg:w-2/6 flex flex-col px-5 lg:pl-0 lg:pr-16">
            <div className="text-[min(min(2rem,8.5vw),3.5rem)] font-extrabold font-times text-white lg:mt-10">
              Our Leadership
            </div>

            <div className="w-72 mt-2 mb-2 h-[2px] bg-gradient-to-r from-zinc-700/50 via-zinc-700/50 to-zinc-500/0 border-none" />

            <div className="mt-5 max-w-prose text-zinc-100 hidden lg:flex flex-col gap-y-4 text-xl">
              <p className="text-zinc-500">
                The Ardee Group's legacy is upheld by a visionary leadership
                team, committed to expanding its impact while honoring its
                founding values of excellence and innovation.
              </p>

              <div className="hidden lg:flex items-start justify-start mt-5">
                <Button
                  lg
                  onClick={() => navigate("/about-us")}
                  buttonText={"Know more about us"}
                  containerClasses={"mt-0 mb-0"}
                  classes={"px-6 py-3"}
                  buttonTextClasses={"text-base"}
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-4/6 mt-4 lg:mt-0 relative max-w-[100vw] overflow-hidden lg:overflow-visible lg:border-l border-solid border-l-zinc-700/50">
            <div
              className="grid grid-cols-1 lg:hidden gap-y-2 px-3 mb-5"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <DivCarousel items={LEADERSHIP_ENTITIES} />
              {/* {LEADERSHIP_ENTITIES.slice(0, 1).map((item, index) => (
                <div className="col-span-1 lg:flex-shrink-0 lg:w-[400px] lg:py-2.5 h-full">
                  <TeamGroupCard
                    item={item}
                    index={index}
                    showImage={true}
                    threshold={0.1}
                  />
                </div>
              ))} */}
            </div>

            <div
              className="hidden lg:flex lg:items-start lg:overflow-x-auto lg:gap-x-4 lg:-mr-14 lg:px-5"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {LEADERSHIP_ENTITIES.map((item, index) => (
                <div className="col-span-1 lg:flex-shrink-0 lg:w-[400px] lg:py-2.5 h-full">
                  <TeamGroupCard
                    item={item}
                    index={index}
                    showImage={true}
                    threshold={0.1}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 max-w-prose text-zinc-100 flex lg:hidden px-5 flex-col gap-y-4 text-lg">
            <p className="text-zinc-500">
              The Ardee Group's legacy is upheld by a visionary leadership team,
              committed to expanding its impact while honoring its founding
              values of excellence and innovation.
            </p>
          </div>

          <div className="flex lg:hidden items-start justify-start mt-6 px-5">
            <Button
              lg
              onClick={() => navigate("/about-us")}
              buttonText={"Know more about us"}
              containerClasses={"mt-0 mb-0"}
              classes={"px-6 py-3"}
              buttonTextClasses={"text-base"}
            />
          </div>
        </div>
      </FadeContent>

      <div className="flex items-center justify-center w-full">
        <SplitText
          text="Industries we work in"
          className="text-[min(min(1.5rem,6vw),2.5rem)] lg:text-[min(min(2rem,7vw),3rem)] leading-[min(min(1.7rem,6.25vw),2.8rem)] lg:leading-[min(min(2.2rem,7.25vw),3.2rem)] font-semibold text-zinc-700"
          delay={10}
          // animationDelay={"delay-200"}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
        />
      </div>

      <FadeContent
        blur={false}
        duration={500}
        delay={500}
        easing="ease-out"
        initialOpacity={0}
        className="grid gap-4 grid-cols-1 grid-rows-1 w-full"
      >
        <HomeSectionCard
          item={{ ...NEW_PAGES[0], action: getActionForPageItem(NEW_PAGES[0]) }}
          index={0}
          classes={"!mt-0"}
          titleClasses={
            "text-[min(min(3rem,12vw),5rem)] lg:text-[min(min(4rem,14vw),6rem)]"
          }
        />
      </FadeContent>

      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 grid-rows-1  w-full">
        <div className="lg:order-first order-last col-span-1 row-span-1 grid gap-x-4 gap-y-4 grid-cols-1 grid-rows-1">
          <FadeContent
            blur={false}
            duration={500}
            delay={500}
            easing="ease-out"
            initialOpacity={0}
            className="cols-span-1 row-span-1"
          >
            <HomeSectionCard
              item={{
                ...NEW_PAGES[1],
                action: getActionForPageItem(NEW_PAGES[1]),
                truncateDescription: true,
              }}
              index={1}
              classes={
                "!min-h-[calc(calc(max(70vmin,calc(100vh-220px)))/2-0.5rem)] !mt-0"
              }
              innerClasses={"px-1"}
              titleClasses={
                "text-[min(min(1.5rem,6.5vw),2.5rem)] lg:text-[min(min(2.5rem,8.5vw),3rem)]"
              }
            />
          </FadeContent>
          <FadeContent
            blur={false}
            duration={500}
            delay={500}
            easing="ease-out"
            initialOpacity={0}
            className="col-span-1"
          >
            <HomeSectionCard
              item={{
                ...NEW_PAGES[2],
                action: getActionForPageItem(NEW_PAGES[2]),
                truncateDescription: true,
              }}
              index={2}
              classes={
                "!min-h-[calc(calc(max(70vmin,calc(100vh-220px)))/2-0.5rem)] !mt-0"
              }
              innerClasses={"px-1"}
              titleClasses={
                "text-[min(min(1.5rem,6.5vw),2.5rem)] lg:text-[min(min(2.5rem,8.5vw),3rem)]"
              }
            />
          </FadeContent>
        </div>

        <FadeContent
          blur={false}
          duration={500}
          delay={500}
          easing="ease-out"
          initialOpacity={0}
          className="col-span-1 row-span-1"
        >
          <HomeSectionCard
            item={{
              ...NEW_PAGES[3],
              action: getActionForPageItem(NEW_PAGES[3]),
            }}
            index={3}
            classes={"!mt-0 !mb-0 lg:h-full"}
          />
        </FadeContent>
      </div>

      <FadeContent
        blur={false}
        duration={500}
        delay={500}
        easing="ease-out"
        initialOpacity={0}
        className="grid gap-4 grid-cols-1 grid-rows-1 w-full"
      >
        <HomeSectionCard
          item={{ ...NEW_PAGES[4], action: getActionForPageItem(NEW_PAGES[4]) }}
          index={4}
          classes={"!mt-0"}
          titleClasses={
            "text-[min(min(3rem,12vw),5rem)] lg:text-[min(min(4rem,14vw),6rem)]"
          }
        />
      </FadeContent>

      {/* {NEW_PAGES.map((item, index) => (
        <div key={index} className="w-full lg:w-1/2 px-2 lg:px-5">
          <HomeSectionCard item={item} index={index} />
        </div>
      ))} */}

      <div className="h-20"></div>
    </div>
  );
}
