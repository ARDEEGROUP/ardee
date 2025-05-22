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
          <HomeSectionCard
            item={{
              ...PAGES[5],
              action: getActionForPageItem(PAGES[5]),
            }}
            index={3}
            classes={"!mt-0 !mb-0"}
          />
        </div>
      </div>
    </div>
  );
}
