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
      {/* ✅ INTERNAL CSS */}
    <style>{`
      @keyframes slide {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-100%);
        }
      }

      .animate-slide {
        animation: slide 18s linear infinite;
      }
    `}</style>
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
                Ardee Foundation, Golf Links Lane, New Delhi
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

  {/* Card 1 */}

    <div
      className="rounded-xl h-full relative border-2 border-transparent hover:border-zinc-400/50 hover:bg-dark-gradient transition-all duration-300 p-6"
      style={{
        backgroundImage: "url('/images/undefined.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="text-[min(1.75rem,5vw)] font-extrabold text-white">
        Ardee Foundation
      </div>

      <div className="mt-4 text-zinc-200 text-base font-light">
        Founded in 1997 by the late Shri Ashok Varma, Ardee Foundation advances excellence in education and the arts. Today, under the leadership of Shefali Varma—Chairperson of The Ardee Group and The Ardee Schools—the Foundation operates at the intersection of art, education, and legacy.
      </div>
    </div>
  


  {/* Card 2 */}
  <a
    href="/images/IAF.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="block border border-transparent hover:border-white hover:border-2 hover:border-solid  rounded-xl transition-all duration-300"
>
  <div
    className="rounded-xl h-full relative p-6"
    style={{
      backgroundImage: "url('/images/undefined.png')",
      backgroundPosition: "center",
      backgroundSize: "cover",
    }}
  >
    <div className="text-[min(1.75rem,5vw)] font-extrabold text-white">
      Kochi Muziris Biennale
    </div>
    <div className="mt-3 text-zinc-300 uppercase text-base">
      Shobha Broota : The Lightness of Being
    </div>
    <div className="mt-4 text-zinc-200 text-base font-semibold">
      December 2025 to March 2026
    </div>
  </div>
</a>

              
  {/* Card 3 */}
  <a
    href="/images/Kochi.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="block border border-transparent hover:border-white  hover:border-2 hover:border-solid rounded-xl transition-all duration-300"
  >
    <div
      className="rounded-xl h-full relative border-2 border-transparent hover:border-white hover:bg-dark-gradient transition-all duration-300 p-6"
      style={{
        backgroundImage: "url('/images/undefined.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="text-[min(1.75rem,5vw)] font-extrabold text-white">
        India Art Fair
      </div>

      <div className="mt-3 text-zinc-300 uppercase text-base">
        Manjit Bawa : An Enduring Legacy
      </div>

      <div className="mt-4 text-zinc-200 text-base font-semibold">
        5th - 8th Feb 2026
      </div>
    </div>
  </a>

   {/* Card 4 */}
  <a
    href="/images/Yamini.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="block border border-transparent hover:border-white hover:border-2 hover:border-solid rounded-xl transition-all duration-300"
  >
    <div
      className="rounded-xl h-full relative border-2 border-transparent hover:border-white hover:bg-dark-gradient transition-all duration-300 p-6"
      style={{
        backgroundImage: "url('/images/undefined.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="text-[min(1.75rem,5vw)] font-extrabold text-white">
        Yamini Mohan
      </div>

      <div className="mt-3 text-zinc-300 uppercase text-base">
        A Live Demonstration
      </div>

      <div className="mt-4 text-zinc-200 text-base font-semibold">
        7th Feb, 2026
      </div>
    </div>
  </a>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-10">
  {/* Title */}
  <h1 className="text-3xl font-bold text-center mb-10 text-white mt-10">
    Media Highlights
  </h1>

  {/* Boxes */}
  <div className="flex flex-col md:flex-row gap-6 justify-center flex-wrap">

     {/* Box */}
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full md:w-1/4">
      <a href="https://impulsemagazine.com/symposium/beyond-the-booth-india-art-fair-2026?fbclid=PAZnRzaAQFJ7tleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAacxWZUwmiQsBJpXL7UWROze41AAmd_kITt1Y2mpowCpqIzAs1noblnwLm3HSg_aem_qxeK3svPUDhuJ7vjquwNgg" target="_blank" rel="noopener noreferrer">
        <img
          src="images/imp.png"
          alt="Service five"
          className="w-full h-100 object-cover hover:scale-105 transition-transform duration-300"
        />
      </a>
      <div className="p-4 text-center font-semibold">
      Impluse Magazine
      </div>
    </div>
    {/* Box 1 */}
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full md:w-1/4">
      <a href="https://timesofindia.indiatimes.com/entertainment/events/ardee-foundation-unveils-ardee-legacy-awards-at-india-art-fair-2026/articleshow/127911430.cms" target="_blank" rel="noopener noreferrer">
        <img
          src="images/art-fair.png"
          alt="Service five"
          className="w-full h-100 object-cover hover:scale-105 transition-transform duration-300"
        />
      </a>
      <div className="p-4 text-center font-semibold">
      Times Entertainment 
      </div>
    </div>
    
    {/* Box 1 */}
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full md:w-1/4">
      <a href="https://mediaexpress24.com/news/shefali-varma-joins-kochi-biennale-foundation-advisory-council/" target="_blank" rel="noopener noreferrer">
        <img
          src="images/svv.png"
          alt="Service One"
          className="w-full h-100 object-cover hover:scale-105 transition-transform duration-300"
        />
      </a>
      <div className="p-4 text-center font-semibold">
      mediaexpress24
      </div>
    </div>

    {/* Box 2 */}
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full md:w-1/4">
      <a href="https://www.hindustantimes.com/htcity/htcity-delhi-junction/from-kochi-to-delhi-the-ardee-foundations-expanding-canvas-101761990415265.html" target="_blank" rel="noopener noreferrer">
        <img
          src="images/hindu.png"
          alt="Service Two"
          className="w-full h-100 object-cover hover:scale-105 transition-transform duration-300"
        />
      </a>
      <div className="p-4 text-center font-semibold">
         Hindustan Times
      </div>
    </div>

    {/* Box 3 */}
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full md:w-1/4">
      <a href="https://newsexperts.in/shefali-varma-extends-support-to-kochi-biennale-foundation-as-a-platinum-benefactor/" target="_blank" rel="noopener noreferrer">
        <img
          src="images/svnews.png"
          alt="Service Three"
          className="w-full h-100 object-cover hover:scale-105 transition-transform duration-300"
        />
      </a>
      <div className="p-4 text-center font-semibold">
       News Experts
    </div>
    </div>
  {/* Box 4 */}
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full md:w-1/4">
      <a href="https://www.businessdigestmagazine.org/index.php/general/item/6196-ardee-foundation-presents-shobha-broota-at-mocha-art-caf%C3%A9-for-kochi-muziris-biennale" target="_blank" rel="noopener noreferrer">
        <img
          src="images/shobha.png"
          alt="Service Three"
          className="w-full h-100 object-cover hover:scale-105 transition-transform duration-300"
        />
      </a>
      <div className="p-4 text-center font-semibold">
       Busniess Digest
    </div>
    </div>
    
  </div>
</div>

      <div className="w-full overflow-hidden mt-16">
  <div className="flex animate-slide gap-6">
    <img src="https://www.centreforcultureandart.com/images/two.png" className="w-1/3 flex-shrink-0" />
    <img src="https://www.centreforcultureandart.com/images/three.png" className="w-1/3 flex-shrink-0" />
    <img src="https://www.centreforcultureandart.com/images/rekha-shefali.png" className="w-1/3 flex-shrink-0" />
    <img src="https://www.centreforcultureandart.com/images/Shobha-Broota.png" className="w-1/3 flex-shrink-0" />
    <img src="https://www.centreforcultureandart.com/images/jatin-Das.png" className="w-1/3 flex-shrink-0" />
    <img src="https://www.centreforcultureandart.com/images/five.png" className="w-1/3 flex-shrink-0" />
    <img src="https://www.centreforcultureandart.com/images/sixth.png" className="w-1/3 flex-shrink-0" />
    <img src="https://www.centreforcultureandart.com/images/seven.png" className="w-1/3 flex-shrink-0" />
    <img src="https://www.centreforcultureandart.com/images/eight.png" className="w-1/3 flex-shrink-0" />
    <img src="https://www.centreforcultureandart.com/images/nine.png" className="w-1/3 flex-shrink-0" />
    <img src="https://www.centreforcultureandart.com/images/arpita.jpg" className="w-1/3 flex-shrink-0" />
    <img src="https://www.centreforcultureandart.com/images/param.jpg" className="w-1/3 flex-shrink-0" />
    <img src="https://www.centreforcultureandart.com/images/madh.jpg" className="w-1/3 flex-shrink-0" />
    <img src="https://www.centreforcultureandart.com/images/newone.jpg" className="w-1/3 flex-shrink-0" />
    <img src="https://www.centreforcultureandart.com/images/newtwo.jpg" className="w-1/3 flex-shrink-0" />
    <img src="https://www.centreforcultureandart.com/images/newthree.jpg" className="w-1/3 flex-shrink-0" />

    {/* duplicate images for smooth infinite loop */}
     <img src="https://www.centreforcultureandart.com/images/two.png" className="w-1/3 flex-shrink-0" />
    <img src="https://www.centreforcultureandart.com/images/three.png" className="w-1/3 flex-shrink-0" />
    <img src="https://www.centreforcultureandart.com/images/rekha-shefali.png" className="w-1/3 flex-shrink-0" />
    <img src="https://www.centreforcultureandart.com/images/Shobha-Broota.png" className="w-1/3 flex-shrink-0" />
    <img src="https://www.centreforcultureandart.com/images/jatin-Das.png" className="w-1/3 flex-shrink-0" />
    <img src="https://www.centreforcultureandart.com/images/five.png" className="w-1/3 flex-shrink-0" />
    <img src="https://www.centreforcultureandart.com/images/sixth.png" className="w-1/3 flex-shrink-0" />
    <img src="https://www.centreforcultureandart.com/images/seven.png" className="w-1/3 flex-shrink-0" />
    <img src="https://www.centreforcultureandart.com/images/eight.png" className="w-1/3 flex-shrink-0" />
    <img src="https://www.centreforcultureandart.com/images/nine.png" className="w-1/3 flex-shrink-0" />
    <img src="https://www.centreforcultureandart.com/images/arpita.jpg" className="w-1/3 flex-shrink-0" />
    <img src="https://www.centreforcultureandart.com/images/param.jpg" className="w-1/3 flex-shrink-0" />
    <img src="https://www.centreforcultureandart.com/images/madh.jpg" className="w-1/3 flex-shrink-0" />
    <img src="https://www.centreforcultureandart.com/images/newone.jpg" className="w-1/3 flex-shrink-0" />
    <img src="https://www.centreforcultureandart.com/images/newtwo.jpg" className="w-1/3 flex-shrink-0" />
    <img src="https://www.centreforcultureandart.com/images/newthree.jpg" className="w-1/3 flex-shrink-0" />
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
