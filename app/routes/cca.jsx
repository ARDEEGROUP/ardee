import { useSelector } from "react-redux";
import {
  ABOUT_HERO_BANNER,
  ARDEE_RACQUET_CLUB_FEATURES,
  ARDEE_RACQUET_CLUB_INSTAGRAM_LINK,
  ARDEE_RACQUET_CLUB_LINKEDIN_LINK,
  ARDEE_SPORTS_CLUB_FEATURES,
  ARDEE_SPORTS_CLUB_GOA_FEATURES,
  CCA_FEATURES,
  CCA_HERO_BANNER,
  LEADERSHIP_ENTITIES,
  NEWS_HERO_BANNER,
  SPORTS_HERO_BANNER,
  TEAM_ARDEE_MASTERS_FEATURES,
} from "../enums/constants";
import HeroBannerCard from "../components/heroBannerCard";
import SideImageCard from "../components/sideImageCard";
import TeamGroupCard from "../components/teamGroupCard";
import ImageCarousel from "../components/imageCarousel";
import { useRef } from "react";
import IconListItem from "../components/iconListItem";
import {
  getArdeeCcaIcon,
  getArdeeRacquetClubIcon,
  getArdeeSportsClubGoaIcon,
  getArdeeSportsClubIcon,
  getTeamArdeeMastersIcon,
} from "../utils/commonUtils";
import SideImageBgCard from "../components/sideImageBgCard";
import { MapPinIcon } from "@heroicons/react/24/outline";
import SocialLinks from "../components/socialLinks";

export const meta = () => {
  return [
    { title: "The Ardee Group | Centre for Culture and Arts" },
    {
      description:
        "Over 5 decades, the Ardee Group has been instrumental in shaping some of the most iconic structures in the Delhi-NCR region.",
    },
  ];
};

export default function CCA() {
  const { user } = useSelector((state) => state.auth);

  const ardeeMastersImages = [
    "sports/ardee-masters-1",
    "sports/ardee-masters-2",
    "sports/ardee-masters-3",
    "sports/ardee-masters-4",
    "sports/ardee-masters-5",
  ];

  const ccaImages = [
    "cca/cca-1",
  ];

  const firstSectionRef = useRef(null);

  const scrollToFirstSection = () => {
    firstSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const ccaHeroBanner = {
    ...CCA_HERO_BANNER,
    action: scrollToFirstSection,
    actionText: "Know More",
  };

  return (
    <div className="w-full container mx-auto p-2 md:p-3 lg:p-5 lg:mb-10 bg-zinc-950 lg:bg-transparent lg:rounded-b-xl">
      <div className="w-full">
        <HeroBannerCard item={ccaHeroBanner} index={0} />
      </div>

      <div
        ref={firstSectionRef}
        className="translate-y-48 lg:-translate-y-16 invisible lg:-mb-16"
      ></div>

      <div className="min-h-96 pt-20 lg:px-10 relative mt-16">
        <div className="flex items-start flex-wrap w-full">
          <div className="w-full lg:w-1/2 sticky top-2 lg:top-14">
            {/* <div className="p-2 bg-top-dark-gradient rounded-lg absolute top-2 right-2 z-[100]">
              <div
                className="w-20 h-20 rounded-lg"
                style={{
                  background: `url("${"/images/sports/ardee-racquet-club-logo-white.png"}")`,
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div> */}

            <div className="hidden lg:inline">
              <SideImageBgCard
                item={{image: ccaImages[0], extension: ".jpg"}}
                showDarkGradient={false}
              />
            </div>
            <div className="inline lg:hidden">
              <SideImageBgCard
                item={{image: ccaImages[0], extension: ".jpg"}}
                showDarkGradient={true}
                hideArrows={true}
              />
            </div>
          </div>

          <div className="px-5 pb-10 lg:pb-0 lg:px-0 bg-gradient-to-b from-zinc-400/0 via-zinc-950/70 to-zinc-950 rounded-b-xl lg:to-transparent lg:via-transparent w-full lg:w-1/2 flex flex-col lg:pl-10 z-50">
            {/* <div className="text-[min(min(3rem,12vw),5rem)] leading-[min(min(3.2rem,12.4vw),5.2rem)] font-extrabold font-times text-white mt-10 lg:ml-5">
              Centre for Culture and Arts
            </div> */}

            <div className="text-lg font-semibold text-zinc-200 lg:ml-5 mt-2 mb-2 flex items-center gap-x-2">
              <div className="flex items-center gap-x-2">
                <MapPinIcon className="w-5 h-5 text-zinc-300 drop-shadow-[0_0px_5px_rgba(255,255,255,0.85)]" />{" "}
                Lutyens' Delhi
              </div>
              {/* <span className="font-thin text-zinc-700"> | </span>{" "}
              <span className="text-zinc-300 font-normal">
                Launching Fall 2025
              </span> */}
            </div>

            <div className="w-72 mt-2 mb-2 h-[2px] bg-gradient-to-r from-zinc-700/50 via-zinc-700/50 to-zinc-500/0 border-none lg:ml-5" />

            {/* <SocialLinks
              containerClasses={"px-5 mt-2"}
              links={[
                { url: ARDEE_RACQUET_CLUB_INSTAGRAM_LINK, type: "instagram" },
                { url: ARDEE_RACQUET_CLUB_LINKEDIN_LINK, type: "linkedin" },
              ]}
            /> */}

            <div className="mt-5 max-w-prose text-zinc-100 flex flex-col gap-y-4 text-xl">
              {CCA_FEATURES.map((item, index) => (
                <div key={index} className="h-full">
                  <IconListItem item={item} iconGetter={getArdeeCcaIcon} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="min-h-96 lg:pt-10 lg:px-10 relative lg:mt-16">
        <div className="flex items-start flex-wrap w-full">
          <div className="px-5 pb-10 lg:pb-0 lg:px-0 bg-gradient-to-b from-zinc-400/0 via-zinc-950/70 to-zinc-950 rounded-b-xl lg:to-transparent lg:via-transparent order-2 lg:order-1 w-full lg:w-1/2 flex flex-col lg:pr-16 z-50">
            <div className="text-[min(min(3rem,12vw),5rem)] leading-[min(min(3.2rem,12.4vw),5.2rem)] font-extrabold font-times text-white mt-10 lg:ml-5">
              Ardee Racquet Club
            </div>

            <div className="text-lg font-semibold text-zinc-200 lg:ml-5 mt-2 mb-2 flex items-center gap-x-2">
              <div className="flex items-center gap-x-2">
                <MapPinIcon className="w-5 h-5 text-zinc-300 drop-shadow-[0_0px_5px_rgba(255,255,255,0.85)]" />{" "}
                Goa
              </div>
              {" "}
              <span className="font-thin text-zinc-700"> | </span>{" "}
              <span className="text-zinc-300 font-normal">
                Launching Fall 2025
              </span>
            </div>

            <div className="w-72 mt-2 mb-2 h-[2px] bg-gradient-to-r from-zinc-700/50 via-zinc-700/50 to-zinc-500/0 border-none lg:ml-5" />

            <SocialLinks
              containerClasses={"px-5 mt-2"}
              links={[
                { url: ARDEE_RACQUET_CLUB_INSTAGRAM_LINK, type: "instagram" },
                { url: ARDEE_RACQUET_CLUB_LINKEDIN_LINK, type: "linkedin" },
              ]}
            />

            <div className="mt-5 max-w-prose text-zinc-100 flex flex-col gap-y-4 text-xl">
              {ARDEE_RACQUET_CLUB_FEATURES.map((item, index) => (
                <div key={index} className="h-full">
                  <IconListItem
                    item={item}
                    iconGetter={getArdeeRacquetClubIcon}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 w-full lg:w-1/2 sticky top-2 lg:top-14">
            <div className="p-2 bg-top-dark-gradient rounded-lg absolute top-2 left-2 z-[100]">
              <div
                className="w-20 h-20 rounded-lg"
                style={{
                  background: `url("${"/images/sports/ardee-racquet-club-logo-white.png"}")`,
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>

            <div className="hidden lg:inline">
              <ImageCarousel
                images={racquetClubGoaImages}
                extension={".jpg"}
                showDarkGradient={false}
              />
            </div>
            <div className="inline lg:hidden">
              <ImageCarousel
                images={racquetClubGoaImages}
                extension={".jpg"}
                showDarkGradient={true}
                hideArrows={true}
              />
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="min-h-96 lg:pt-10 lg:px-10 relative lg:mt-16">
        <div className="flex items-start flex-wrap w-full">
          <div className="w-full lg:w-1/2 sticky top-2 lg:top-14">
            <div className="p-2 bg-top-dark-gradient rounded-lg absolute top-2 right-2 z-[100]">
              <div
                className="w-20 h-20 rounded-lg"
                style={{
                  background: `url("${"/images/sports/ardee-masters-logo-white.png"}")`,
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>

            <div className="hidden lg:inline">
              <ImageCarousel
                images={ardeeMastersImages}
                extension={".jpg"}
                showDarkGradient={false}
              />
            </div>
            <div className="inline lg:hidden">
              <ImageCarousel
                images={ardeeMastersImages}
                extension={".jpg"}
                showDarkGradient={true}
                hideArrows={true}
              />
            </div>
          </div>

          <div className="px-5 pb-10 lg:pb-0 lg:px-0 bg-gradient-to-b from-zinc-400/0 via-zinc-950/70 to-zinc-950 rounded-b-xl lg:to-transparent lg:via-transparent w-full lg:w-1/2 flex flex-col lg:pl-10 z-50">
            <div className="text-[min(min(3rem,12vw),5rem)] leading-[min(min(3.2rem,12.4vw),5.2rem)] font-extrabold font-times text-white mt-10 lg:mx-5">
              Team Ardee Masters
            </div>

            <div className="w-72 mt-2 mb-2 h-[2px] bg-gradient-to-r from-zinc-700/50 via-zinc-700/50 to-zinc-500/0 border-none lg:ml-5" />

            <SocialLinks
              containerClasses={"px-5 mt-2"}
              links={[
                { url: ARDEE_RACQUET_CLUB_INSTAGRAM_LINK, type: "instagram" },
                { url: ARDEE_RACQUET_CLUB_LINKEDIN_LINK, type: "linkedin" },
              ]}
            />

            <div className="mt-5 max-w-prose text-zinc-100 flex flex-col gap-y-4 text-xl">
              {TEAM_ARDEE_MASTERS_FEATURES.map((item, index) => (
                <div key={index} className="h-full">
                  <IconListItem
                    item={item}
                    iconGetter={getArdeeRacquetClubIcon}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}

    </div>
  );
}
