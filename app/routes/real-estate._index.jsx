import { useSelector } from "react-redux";
import {
  ARDEE_CITY_FEATURES,
  GOLF_APARTMENTS_FEATURES,
  PAGES,
  RESIDENTIAL_HERO_BANNER,
} from "../enums/constants";
import Button from "../components/button";
import HeroBannerCard from "../components/heroBannerCard";
import SideImageCard from "../components/sideImageCard";
import IconListItem from "../components/iconListItem";
import { useRef } from "react";
import { useNavigate } from "@remix-run/react";
import HomeSectionCard from "../components/homeSectionCard/index.grid.new.grid.latest";

export const meta = () => {
  return [
    { title: "The Ardee Group | Real Estate" },
    {
      description:
        "Over 5 decades, the Ardee Group has been instrumental in shaping some of the most iconic structures in the Delhi-NCR region.",
    },
  ];
};

export default function RealEstateIndex() {
  const navigate = useNavigate();

  const getActionForPageItem = (page) => {
    return () => {
      navigateToPage(page);
    };
  };

  const navigateToPage = (page) => {
    if (page.value === "hospitals" || page.value === "hotels") {
      return;
    }

    if (page.value === "residential" || page.value === "commercial") {
      return navigate(`/real-estate/${page.value}`);
    }

    return navigate(`/${page.value}`);
  };

  return (
    <div className="w-full container mx-auto p-2 md:p-3 lg:p-5 mb-10">
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 grid-rows-1 w-full">
        <div className="col-span-1 row-span-1">
          <HomeSectionCard
            item={{
              ...PAGES[0],
              action: getActionForPageItem(PAGES[0]),
            }}
            index={3}
            classes={"!mt-0 !mb-0"}
          />
        </div>

        <div className="col-span-1 row-span-1">
          <HomeSectionCard
            item={{
              ...PAGES[3],
              action: getActionForPageItem(PAGES[3]),
            }}
            index={3}
            classes={"!mt-0 !mb-0"}
          />
        </div>

        <div className="col-span-1 row-span-1">
          <HomeSectionCard
            item={{
              ...PAGES[2],
              action: getActionForPageItem(PAGES[2]),
            }}
            index={3}
            classes={"!mt-0 !mb-0"}
          />
        </div>

        <div className="col-span-1 row-span-1">
          <div className="md:h-fit h-[60vh] cursor-default min-h-[min(70vmin,calc(100vh-180px))] 
      rounded-xl overflow-hidden mt-10 !mt-0 !mb-0 shadow-2xl relative 
      border border-solid border-zinc-500/80 hover:border-white 
      hover:shadow-2xl grayscale-card delay-200 grayscale-card-hover">

      <div className="p-3 h-full min-h-[min(70vmin,calc(100vh-180px))] 
        rounded-xl flex items-end backdrop-blur-md 
        !backdrop-blur-0 transition-all duration-1000">

        {/* Image */}
        <div className="absolute top-0 right-0 h-[66%] left-0 
          rounded-[0.75rem] flex items-center w-full">
          <img 
            src="/images/hotel-3.png" 
            alt="Hotels"
            className="object-contain md:scale-100 scale-150"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-dark-gradient rounded-[0.75rem]" />

        {/* Content */}
        <div className="z-40 mt-20 mb-5 mx-5 flex flex-col w-full relative">

          <div className="text-[min(min(3rem,12vw),5rem)] 
            font-extrabold font-times text-white 
            absolute bottom-0 transition-transform">
            Hotels
          </div>

          <div className="mt-2 mb-5 text-zinc-200 drop-shadow-2xl 
            text-base font-semibold max-w-prose absolute bottom-0 
            transition-all -translate-y-[4.75rem] opacity-0 delay-100 duration-200">
            The Ardee Group has acquired prime land in the picturesque
            region of North Goa, marking its expansion into the hospitality sector.
          </div>

          {/* Anchor Button */}
          <div className="flex mt-5 absolute bottom-0 transition-opacity opacity-0 duration-200">
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex justify-center items-center 
                py-3 px-7 bg-transparent text-slate-100 
                rounded-full shadow-lg transition-colors 
                border border-white hover:bg-zinc-100 
                hover:text-zinc-900 active:bg-white 
                active:text-zinc-950 uppercase font-normal text-md"
            >
              <span className="font-semibold">Coming Soon</span>
            </a>
          </div>

        </div>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
}
