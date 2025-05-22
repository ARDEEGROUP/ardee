import { useSelector } from "react-redux";
import { ABOUT_HERO_BANNER, LEADERSHIP_ENTITIES } from "../enums/constants";
import HeroBannerCard from "../components/heroBannerCard";
import SideImageCard from "../components/sideImageCard";
import TeamGroupCard from "../components/teamGroupCard";
import { useRef } from "react";
import SideImageBgCard from "../components/sideImageBgCard";

export const meta = () => {
  return [
    { title: "The Ardee Group | About Us" },
    {
      description:
        "Over 5 decades, the Ardee Group has been instrumental in shaping some of the most iconic structures in the Delhi-NCR region.",
    },
  ];
};

export default function AboutUs() {
  const { user } = useSelector((state) => state.auth);
  const firstSectionRef = useRef(null);

  const scrollToFirstSection = () => {
    firstSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const aboutHeroBanner = {
    ...ABOUT_HERO_BANNER,
    action: scrollToFirstSection,
    actionText: "Learn More",
  };

  return (
    <div className="w-full container mx-auto p-2 md:p-3 lg:p-5 mb-10">
      <div className="w-full">
        <HeroBannerCard item={aboutHeroBanner} index={0} />
      </div>

      <div className="min-h-96 py-20 px-5 lg:px-10" ref={firstSectionRef}>
        <div className="flex items-start flex-wrap w-full">
          <div className="w-full lg:w-1/2 flex flex-col lg:pr-16">
            <div className="text-[min(min(3rem,12vw),5rem)] leading-[min(min(3.2rem,12.4vw),5.2rem)] font-extrabold font-times text-white mt-10">
              Our Story
            </div>

            <div className="w-72 mt-2 mb-2 h-[2px] bg-gradient-to-r from-zinc-700/50 via-zinc-700/50 to-zinc-500/0 border-none" />

            <div className="mt-5 max-w-prose text-zinc-100 flex flex-col gap-y-4 text-xl">
              <p className="text-zinc-500">
                The Ardee Group was founded in 1971 by the late Shri Ashok Varma
                with a dynamic vision to transform the skyline of Delhi.
              </p>

              <p className="text-xl">
                His pioneering spirit and commitment to excellence laid the
                foundation for a company that has grown to become one of the
                most trusted names in{" "}
                <span className="text-zinc-500 font-semibold">
                  Indian real estate
                </span>
                .
              </p>

              <p className="text-xl">
                His mission was simple yet ambitious. To shape modern urban
                landscapes and create spaces that inspire. Today, the{" "}
                <span className="text-zinc-500 font-semibold">Ardee Group</span>{" "}
                continues to build on its legacy, staying true to the founding
                vision of{" "}
                <span className="text-zinc-500 font-semibold">
                  architectural innovation
                </span>{" "}
                and{" "}
                <span className="text-zinc-500 font-semibold">
                  community-centric developments
                </span>
                .
              </p>
            </div>
          </div>

          <div className="w-full mt-10 lg:mt-0 lg:w-1/2">
            <SideImageBgCard item={{ image: "our-story" }} index={0} />
          </div>
        </div>
      </div>

      <div className="min-h-96 py-20 px-5 lg:px-10">
        <div className="flex items-start flex-wrap w-full">
          <div className="w-full order-2 lg:order-1 mt-10 lg:mt-0 lg:w-1/2">
            <SideImageBgCard item={{ image: "our-projects" }} index={0} />
          </div>

          <div className="w-full order-1 lg:order-2 lg:w-1/2 flex flex-col lg:pl-16">
            <div className="text-[min(min(3rem,12vw),5rem)] leading-[min(min(3.2rem,12.4vw),5.2rem)] font-extrabold font-times text-white mt-10">
              Our Projects
            </div>

            <div className="w-72 mt-2 mb-2 h-[2px] bg-gradient-to-r from-zinc-700/50 via-zinc-700/50 to-zinc-500/0 border-none" />

            <div className="mt-5 max-w-prose text-zinc-100 flex flex-col gap-y-4 text-xl">
              <p>
                Over the decades, the{" "}
                <span className="text-zinc-500 font-semibold">Ardee Group</span>{" "}
                has been instrumental in shaping some of the most iconic
                structures in the Delhi-NCR region.
              </p>

              <p className="text-xl">
                The landmark Gopaldas Bhawan in Connaught Place, New Delhi,
                stands as a testament to Shri Ashok Varma's visionary
                leadership. This was just the beginning.
              </p>

              <p className="text-xl">
                Other noteworthy projects by the{" "}
                <span className="text-zinc-500 font-semibold">Ardee Group</span>
                , such as the{" "}
                <span className="text-zinc-500 font-semibold">
                  Vijaya Building and Golf Apartments
                </span>
                , have become prominent addresses in their rights. More
                recently,{" "}
                <span className="text-zinc-500 font-semibold">
                  Ardee Mall and the expansive 200-acre township
                </span>{" "}
                of Ardee City in Gurugram have emerged as vibrant communities,
                now home to thousands of families, reflecting the group's
                commitment to quality and thoughtful urban planning.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-96 py-20 lg:pl-10">
        <div className="lg:flex lg:flex-row items-start w-full container mx-auto relative">
          <div className="w-full lg:w-2/3 flex flex-col px-5 lg:pl-0 lg:pr-16">
            <div className="text-[min(min(3rem,12vw),5rem)] leading-[min(min(3.2rem,12.4vw),5.2rem)] font-extrabold font-times text-white lg:mt-10">
              Our Leadership
            </div>

            <div className="w-72 mt-2 mb-2 h-[2px] bg-gradient-to-r from-zinc-700/50 via-zinc-700/50 to-zinc-500/0 border-none" />

            <div className="mt-5 max-w-prose text-zinc-100 flex flex-col gap-y-4 text-xl">
              <p className="text-zinc-500">
                The Ardee Group's legacy is upheld by a visionary leadership
                team, committed to expanding its impact while honoring its
                founding values of excellence and innovation.
              </p>

              <p className="text-xl">
                Together, this resilient team is committed to upholding the{" "}
                <span className="text-zinc-500 font-semibold">Ardee Group</span>
                's legacy of excellence while steering the company toward an
                even more promising future.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-3/5 mt-4 lg:mt-0 relative max-w-[100vw] overflow-hidden lg:overflow-visible lg:border-l border-solid border-l-zinc-700/50">
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-2 px-3 mt-10"
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

            <div
              className="hidden lg:flex lg:items-start lg:overflow-x-auto lg:gap-x-4 lg:-mr-24 lg:px-5"
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
        </div>
      </div>
    </div>
  );
}
