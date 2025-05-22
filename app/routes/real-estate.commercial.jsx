import { useSelector } from "react-redux";
import {
  ARDEE_MALL_FEATURES,
  COMMERCIAL_HERO_BANNER,
  GOPALDAS_BUILDING_FEATURES,
  VIJAYA_BUILDING_FEATURES,
} from "../enums/constants";
import Button from "../components/button";
import HeroBannerCard from "../components/heroBannerCard";
import SideImageCard from "../components/sideImageCard";
import IconListItem from "../components/iconListItem";
import { useRef } from "react";
import SideImageBgCard from "../components/sideImageBgCard";
import ImageCarousel from "../components/imageCarousel";

export const meta = () => {
  return [
    { title: "The Ardee Group | Commercial" },
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

  const gopaldasBuildingImages = [
    "gopaldas-building/gopaldas-building-1",
    "gopaldas-building/gopaldas-building-2",
    "gopaldas-building/gopaldas-building-3",
    "gopaldas-building/gopaldas-building-4",
    "gopaldas-building/gopaldas-building-5",
    "gopaldas-building/gopaldas-building-6",
    "gopaldas-building/gopaldas-building-7",
  ];

  const vijayaBuildingImages = [
    "vijaya-building/vijaya-building-1",
    "vijaya-building/vijaya-building-2",
    "vijaya-building/vijaya-building-3",
    "vijaya-building/vijaya-building-4",
    "vijaya-building/vijaya-building-5",
  ];

  const ardeeMallImages = [
    "ardee-mall/ardee-mall-1",
    "ardee-mall/ardee-mall-2",
    "ardee-mall/ardee-mall-3",
    "ardee-mall/ardee-mall-4",
  ];

  return (
    <div className="w-full container mx-auto p-2 md:p-3 lg:p-5 mb-10">
      <div className="w-full">
        <HeroBannerCard
          item={{
            ...COMMERCIAL_HERO_BANNER,
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
            <SideImageBgCard item={{ image: "commercial" }} index={0} />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col lg:pl-16">
            <div className="text-[min(min(3rem,12vw),5rem)] leading-[min(min(3.2rem,12.4vw),5.2rem)] font-extrabold font-times text-white mt-10">
              Ardee Group
            </div>

            <div className="w-72 mt-2 mb-2 h-[2px] bg-gradient-to-r from-zinc-700/50 via-zinc-700/50 to-zinc-500/0 border-none" />

            <div className="mt-5 max-w-prose text-zinc-100 flex flex-col gap-y-4 text-xl">
              <p className="text-xl">
                has distinguished itself as{" "}
                <span className="text-zinc-500 font-semibold">
                  a premier developer in the commercial buildings sector
                </span>
                , offering innovative solutions that cater to the dynamic
                requirements of businesses.
              </p>

              <p className="text-xl">
                With a focus on quality, functionality, and strategic locations,
                <span className="text-zinc-500 font-semibold">
                  Ardee Group creates environments that foster productivity and
                  growth
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

      <div className="min-h-96 pt-20 pb-20 lg:px-10 relative">
        <div className="flex items-start flex-wrap w-full">
          <div className="px-5 lg:px-0 pb-10 lg:pb-0 bg-gradient-to-b from-zinc-400/0 via-zinc-950/70 to-zinc-950 rounded-b-xl lg:to-transparent lg:via-transparent order-2 lg:order-1 w-full lg:w-1/2 flex flex-col lg:pr-16 z-50">
            <div className="text-[min(min(3rem,12vw),5rem)] leading-[min(min(3.2rem,12.4vw),5.2rem)] font-extrabold font-times text-white mt-10 lg:ml-5">
              Gopaldas Building
            </div>

            <div className="w-72 mt-2 mb-2 h-[2px] bg-gradient-to-r from-zinc-700/50 via-zinc-700/50 to-zinc-500/0 border-none lg:ml-5" />

            <div className="mt-5 max-w-prose text-zinc-100 flex flex-col gap-y-4 text-xl">
              <p className="text-xl lg:ml-5 mb-5">
                The prestigious Gopaldas Bhawan stands as our initial flagship
                commercial property. Located on{" "}
                <span className="text-zinc-500 font-semibold">
                  Barakhamba Road, Connaught Place
                </span>
                , this property offers extensive facilities and a prime address
                for businesses.
              </p>

              {GOPALDAS_BUILDING_FEATURES.map((item, index) => (
                <div key={index} className="h-full">
                  <IconListItem item={item} />
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 w-full lg:w-1/2 sticky top-2 lg:top-14">
            {/* <SideImageBgCard item={{ image: "gopaldas-building" }} index={0} /> */}
            <div className="hidden lg:inline">
              <ImageCarousel
                images={gopaldasBuildingImages}
                extension={".jpg"}
                size={"contain"}
                opaqueBg={true}
                hideLightGradient={true}
              />
            </div>
            <div className="inline lg:hidden">
              <ImageCarousel
                images={gopaldasBuildingImages}
                extension={".jpg"}
                showDarkGradient={true}
                hideArrows={true}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-96 lg:pt-20 pb-20 lg:px-10 relative">
        <div className="flex items-start flex-wrap w-full">
          <div className="w-full lg:w-1/2 sticky top-2 lg:top-14">
            {/* <SideImageBgCard item={{ image: "vijaya-building" }} index={0} /> */}
            <div className="hidden lg:inline">
              <ImageCarousel
                images={vijayaBuildingImages}
                extension={".jpg"}
                size={"contain"}
                opaqueBg={true}
                hideLightGradient={true}
              />
            </div>
            <div className="inline lg:hidden">
              <ImageCarousel
                images={vijayaBuildingImages}
                extension={".jpg"}
                showDarkGradient={true}
                hideArrows={true}
              />
            </div>
          </div>

          <div className="px-5 lg:px-0 pb-10 lg:pb-0 bg-gradient-to-b from-zinc-400/0 via-zinc-950/70 to-zinc-950 rounded-b-xl lg:to-transparent lg:via-transparent w-full lg:w-1/2 flex flex-col lg:pl-10 z-50">
            <div className="text-[min(min(3rem,12vw),5rem)] leading-[min(min(3.2rem,12.4vw),5.2rem)] font-extrabold font-times text-white mt-10 lg:mx-5">
              Vijaya Building
            </div>

            <div className="w-72 mt-2 mb-2 h-[2px] bg-gradient-to-r from-zinc-700/50 via-zinc-700/50 to-zinc-500/0 border-none lg:ml-5" />

            <div className="mt-5 max-w-prose text-zinc-100 flex flex-col gap-y-4 text-xl">
              <p className="text-xl lg:ml-5 mb-5">
                Vijaya Building is a prime commercial office space located on{" "}
                <span className="text-zinc-500 font-semibold">
                  Barakhamba Road
                </span>
                , providing ideal accessibility and convenience for business
                operations.
              </p>

              {VIJAYA_BUILDING_FEATURES.map((item, index) => (
                <div key={index} className="h-full">
                  <IconListItem item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-96 lg:pt-20 lg:pb-20 lg:px-10 relative">
        <div className="flex items-start flex-wrap w-full">
          <div className="px-5 lg:px-0 pb-10 lg:pb-0 bg-gradient-to-b from-zinc-400/0 via-zinc-950/70 to-zinc-950 rounded-b-xl lg:to-transparent lg:via-transparent order-2 lg:order-1 w-full lg:w-1/2 flex flex-col lg:pr-16 z-50">
            <div className="text-[min(min(3rem,12vw),5rem)] leading-[min(min(3.2rem,12.4vw),5.2rem)] font-extrabold font-times text-white mt-10 lg:ml-5">
              Ardee Mall
            </div>

            <div className="w-72 mt-2 mb-2 h-[2px] bg-gradient-to-r from-zinc-700/50 via-zinc-700/50 to-zinc-500/0 border-none lg:ml-5" />

            <div className="mt-5 max-w-prose text-zinc-100 flex flex-col gap-y-4 text-xl">
              <p className="text-xl lg:ml-5 mb-5">
                Ardee Mall is the{" "}
                <span className="text-zinc-500 font-semibold">
                  retail revolution in Gurugram
                </span>
                , providing an all-inclusive shopping and leisure experience
                with an{" "}
                <span className="text-zinc-500 font-semibold">
                  exceptional mix of brands and amenities
                </span>
                .
              </p>

              {ARDEE_MALL_FEATURES.map((item, index) => (
                <div key={index} className="h-full">
                  <IconListItem item={item} />
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 w-full lg:w-1/2 sticky top-2 lg:top-14">
            {/* <SideImageBgCard item={{ image: "ardee-mall" }} index={0} /> */}
            <div className="hidden lg:inline">
              <ImageCarousel
                images={ardeeMallImages}
                extension={".jpg"}
                size={"contain"}
                opaqueBg={true}
                hideLightGradient={true}
              />
            </div>
            <div className="inline lg:hidden">
              <ImageCarousel
                images={ardeeMallImages}
                extension={".jpg"}
                showDarkGradient={true}
                hideArrows={true}
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="min-h-10 lg:px-10 relative bg-zinc-950"></div> */}
    </div>
  );
}
