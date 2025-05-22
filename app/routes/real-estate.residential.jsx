import { useSelector } from "react-redux";
import {
  ARDEE_CITY_FEATURES,
  ARDEE_RESIDENCES_FEATURES,
  GOLF_APARTMENTS_FEATURES,
  RESIDENTIAL_HERO_BANNER,
} from "../enums/constants";
import Button from "../components/button";
import HeroBannerCard from "../components/heroBannerCard";
import SideImageCard from "../components/sideImageCard";
import IconListItem from "../components/iconListItem";
import { useRef } from "react";
import SideImageBgCard from "../components/sideImageBgCard";
import { getArdeeResidencesIcon } from "../utils/commonUtils";
import { MapPinIcon } from "@heroicons/react/24/outline";
import ImageCarousel from "../components/imageCarousel";

export const meta = () => {
  return [
    { title: "The Ardee Group | Residential" },
    {
      description:
        "Over 5 decades, the Ardee Group has been instrumental in shaping some of the most iconic structures in the Delhi-NCR region.",
    },
  ];
};

export default function RealEstateCommercial() {
  const { user } = useSelector((state) => state.auth);

  const knowMoreTargetRef = useRef(null);
  const viewProjectsTargetRef = useRef(null);

  const ardeeCityImages = [
    "ardee-city/ardee-city-1",
    "ardee-city/ardee-city-2",
    "ardee-city/ardee-city-3",
    "ardee-city/ardee-city-4",
    "ardee-city/ardee-city-5",
  ];

  return (
    <div className="w-full container mx-auto p-2 md:p-3 lg:p-5 mb-10">
      <div className="w-full">
        <HeroBannerCard
          item={{
            ...RESIDENTIAL_HERO_BANNER,
            action: () => {
              if (knowMoreTargetRef && knowMoreTargetRef.current) {
                knowMoreTargetRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            },
          }}
          index={0}
        />
      </div>

      <div
        ref={knowMoreTargetRef}
        className="lg:pt-16 lg:-translate-y-16 invisible lg:-mb-16"
      ></div>

      <div className="min-h-96 py-20 px-5 lg:px-10">
        <div className="flex items-start flex-wrap w-full">
          <div className="w-full lg:w-1/2">
            <SideImageBgCard
              item={{ image: "residential-building" }}
              index={0}
            />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col lg:pl-16">
            <div className="text-[min(min(3rem,12vw),5rem)] leading-[min(min(3.2rem,12.4vw),5.2rem)] font-extrabold font-times text-white mt-10">
              At Ardee Group
            </div>

            <div className="w-72 mt-2 mb-2 h-[2px] bg-gradient-to-r from-zinc-700/50 via-zinc-700/50 to-zinc-500/0 border-none" />

            <div className="mt-5 max-w-prose text-zinc-100 flex flex-col gap-y-4 text-xl">
              <p className="text-xl">
                we craft exceptional{" "}
                <span className="text-zinc-500 font-semibold">
                  residential buildings
                </span>{" "}
                embodying our unwavering commitment to quality and innovation.
              </p>

              <p className="text-xl">
                With every project, we build not just structures, but{" "}
                <span className="text-zinc-500 font-semibold">
                  homes filled with conviction, care, and a promise for a better
                  living experience.
                </span>
              </p>

              <div className="mt-10 flex">
                <Button
                  buttonText={"View Projects"}
                  containerClasses={"flex lg:hidden mt-0 mb-0"}
                  classes={"px-10"}
                  buttonTextClasses={"text-base"}
                  onClick={() => {
                    if (
                      viewProjectsTargetRef &&
                      viewProjectsTargetRef.current
                    ) {
                      viewProjectsTargetRef.current.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}
                />

                <Button
                  buttonText={"View Projects"}
                  containerClasses={"hidden lg:flex mt-0 mb-0"}
                  classes={"px-10"}
                  buttonTextClasses={"text-base"}
                  onClick={() => {
                    if (
                      viewProjectsTargetRef &&
                      viewProjectsTargetRef.current
                    ) {
                      viewProjectsTargetRef.current.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={viewProjectsTargetRef}
        className="translate-y-48 lg:-translate-y-16 invisible lg:-mb-16"
      ></div>

      <div className="min-h-96 pt-20 lg:pb-20 lg:px-10 relative">
        <div className="flex items-start flex-wrap w-full">
          <div className="px-5 lg:px-0 bg-gradient-to-b from-zinc-400/0 via-zinc-950/70 to-zinc-950 rounded-b-xl lg:to-transparent lg:via-transparent order-2 lg:order-1 w-full lg:w-1/2 flex flex-col lg:pr-16 z-50">
            <div className="text-[min(min(3rem,12vw),5rem)] leading-[min(min(3.2rem,12.4vw),5.2rem)] font-extrabold font-times text-white mt-10 lg:ml-5">
              The Ardee Residences
            </div>

            <div className="text-lg font-semibold text-zinc-200 lg:ml-5 mt-2 mb-2 flex items-center gap-x-2">
              <div className="flex items-center gap-x-2">
                <MapPinIcon className="w-5 h-5 text-zinc-300 drop-shadow-[0_0px_5px_rgba(255,255,255,0.85)]" />{" "}
                Goa
              </div>{" "}
              <span className="font-thin text-zinc-700"> | </span>{" "}
              <span className="text-zinc-300 font-normal">
                Launching Fall 2025
              </span>
            </div>

            <div className="w-72 mt-2 mb-2 h-[2px] bg-gradient-to-r from-zinc-700/50 via-zinc-700/50 to-zinc-500/0 border-none lg:ml-5" />

            <a
              className="lg:ml-5 text-zinc-300 font-normal mt-1 pl-1"
              href="https://maps.app.goo.gl/cHjoWqHASjtqv24t6?g_st=iw"
              target="_blank"
            >
              View on map
            </a>

            <div className="mt-5 max-w-prose text-zinc-100 flex flex-col gap-y-4 text-xl">
              {ARDEE_RESIDENCES_FEATURES.map((item, index) => (
                <div key={index} className="h-full">
                  <IconListItem
                    item={item}
                    iconGetter={getArdeeResidencesIcon}
                  />
                </div>
              ))}
              <p className="text-zinc-300 font-lg mt-2 mb-5 text-right">
                Join the invitation list, email us at{" "}
                <a href="mailto:info@theardeegroup.com" className="text-white">
                  info@theardeegroup.com
                </a>
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2 w-full lg:w-1/2 sticky top-2 lg:top-14">
            <div className="p-2 rounded-lg absolute top-2 left-2 right-0 bottom-0 flex items-center justify-center z-[100]">
              <div
                className="w-48 h-48 rounded-lg"
                style={{
                  // background: `url("${"/images/coming-soon-2.png"}")`,
                  // backgroundPosition: "center",
                  // backgroundSize: "contain",
                  // backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>
            {/* <div className="p-2 bg-top-dark-gradient rounded-lg absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-[100]"></div> */}
            <div className="p-2 bg-top-dark-gradient rounded-lg absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-[100]"></div>
            <SideImageBgCard
              item={{ image: "bg-pattern" }}
              index={0}
              darkGradient={true}
              opaqueBg={true}
              hideLightGradient={false}
              blurBg={false}
            />
          </div>
        </div>
      </div>

      <div className="min-h-96 lg:pt-20 lg:pb-20 lg:px-10 relative">
        <div className="flex items-start flex-wrap w-full">
          <div className="w-full lg:w-1/2 sticky top-2 lg:top-14">
            {/* <SideImageBgCard item={{ image: "golf-apartments" }} index={0} /> */}

            <div className="hidden lg:inline">
              <SideImageBgCard
                item={{ image: "golf-apartments" }}
                index={0}
                size={"contain"}
                opaqueBg={true}
                hideLightGradient={true}
              />
            </div>
            <div className="inline lg:hidden">
              <SideImageBgCard
                item={{ image: "golf-apartments" }}
                index={0}
                opaqueBg={true}
                hideLightGradient={true}
              />
            </div>
          </div>

          <div className="px-5 lg:px-0 bg-gradient-to-b from-zinc-400/0 via-zinc-950/70 to-zinc-950 rounded-b-xl lg:to-transparent lg:via-transparent w-full lg:w-1/2 flex flex-col lg:pl-10 z-50">
            <div className="text-[min(min(3rem,12vw),5rem)] leading-[min(min(3.2rem,12.4vw),5.2rem)] font-extrabold font-times text-white mt-10 lg:mx-5">
              Golf Apartments
            </div>

            <div className="w-72 mt-2 mb-2 h-[2px] bg-gradient-to-r from-zinc-700/50 via-zinc-700/50 to-zinc-500/0 border-none lg:ml-5" />

            <div className="mt-5 max-w-prose text-zinc-100 flex flex-col gap-y-4 text-xl">
              {GOLF_APARTMENTS_FEATURES.map((item, index) => (
                <div key={index} className="h-full">
                  <IconListItem item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-96 pt-20 lg:pb-20 lg:px-10 relative">
        <div className="flex items-start flex-wrap w-full">
          <div className="px-5 lg:px-0 bg-gradient-to-b from-zinc-400/0 via-zinc-950/70 to-zinc-950 rounded-b-xl lg:to-transparent lg:via-transparent order-2 lg:order-1 w-full lg:w-1/2 flex flex-col lg:pr-16 z-50">
            <div className="text-[min(min(3rem,12vw),5rem)] leading-[min(min(3.2rem,12.4vw),5.2rem)] font-extrabold font-times text-white mt-10 lg:ml-5">
              Ardee City
            </div>

            <div className="w-72 mt-2 mb-2 h-[2px] bg-gradient-to-r from-zinc-700/50 via-zinc-700/50 to-zinc-500/0 border-none lg:ml-5" />

            <div className="mt-5 max-w-prose text-zinc-100 flex flex-col gap-y-4 text-xl">
              <p className="text-xl lg:ml-5 mb-5">
                Ardee Group is pleased to present{" "}
                <span className="text-zinc-500 font-semibold">Ardee City</span>{" "}
                in Sector 52, Gurugram, an established residential community
                that has made a noteworthy{" "}
                <span className="text-zinc-500 font-semibold">
                  impression on the real estate landscape of Delhi-NCR
                </span>
                .
              </p>

              {ARDEE_CITY_FEATURES.map((item, index) => (
                <div key={index} className="h-full">
                  <IconListItem item={item} />
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 w-full lg:w-1/2 sticky top-2 lg:top-14">
            {/* <SideImageBgCard item={{ image: "ardee-city" }} index={0} /> */}
            <div className="hidden lg:inline">
              <ImageCarousel
                images={ardeeCityImages}
                extension={".jpg"}
                size={"contain"}
                opaqueBg={true}
                hideLightGradient={true}
              />
            </div>
            <div className="inline lg:hidden">
              <ImageCarousel
                images={ardeeCityImages}
                extension={".jpg"}
                showDarkGradient={true}
                hideArrows={true}
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="min-h-96 py-20 lg:px-10 relative bg-zinc-950"></div> */}
    </div>
  );
}
