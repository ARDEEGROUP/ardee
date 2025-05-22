import { useSelector } from "react-redux";
import {
  ABOUT_HERO_BANNER,
  LEADERSHIP_ENTITIES,
  NEWS_ARTICLES,
  NEWS_HERO_BANNER,
} from "../enums/constants";
import HeroBannerCard from "../components/heroBannerCard";
import SideImageCard from "../components/sideImageCard";
import TeamGroupCard from "../components/teamGroupCard";
import ImageCarousel from "../components/imageCarousel";
import { useRef } from "react";

export const meta = () => {
  return [
    { title: "The Ardee Group | News" },
    {
      description:
        "Over 5 decades, the Ardee Group has been instrumental in shaping some of the most iconic structures in the Delhi-NCR region.",
    },
  ];
};

export default function News() {
  const { user } = useSelector((state) => state.auth);
  const newsEducationImages = ["news-education-1", "news-education-2"];

  const firstSectionRef = useRef(null);

  const scrollToFirstSection = () => {
    firstSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const newsHeroBanner = {
    ...NEWS_HERO_BANNER,
    action: scrollToFirstSection,
    actionText: "Know More",
  };

  return (
    <div className="w-full container mx-auto p-2 md:p-3 lg:p-5 mb-10">
      <div className="w-full">
        <HeroBannerCard item={newsHeroBanner} index={0} />
      </div>

      <div
        ref={firstSectionRef}
        className="lg:pt-16 lg:-translate-y-16 invisible lg:-mb-16"
      ></div>

      {NEWS_ARTICLES.map((article, articleIndex) =>
        articleIndex % 2 === 0 ? (
          <div className="min-h-96 py-20 px-5 lg:px-10">
            <div className="flex items-start flex-wrap w-full">
              <div className="w-full order-2 lg:order-1 mt-10 lg:mt-0 lg:w-1/2">
                <ImageCarousel
                  images={article.images}
                  extension={".jpg"}
                  size={"contain"}
                  opaqueBg={true}
                  hideLightGradient={true}
                />
              </div>

              <div className="w-full order-1 lg:order-2 lg:w-1/2 flex flex-col lg:pl-16 mt-10">
                <div className="text-[min(min(2.5rem,10vw),4.5rem)] font-extrabold font-times text-white">
                  {article.title}
                </div>

                <div className="w-72 mt-2 mb-2 h-[2px] bg-gradient-to-r from-zinc-700/50 via-zinc-700/50 to-zinc-500/0 border-none" />

                {article.publishingHouse ? (
                  <>
                    <div className="text-[min(min(1rem,3vw),1.5rem)] font-normal text-zinc-500 mt-5">
                      Published by
                    </div>
                    <div className="text-[min(min(1.25rem,4.5vw),2.5rem)] font-semibold font-times text-zinc-300 mb-4">
                      {article.publishingHouse}
                    </div>
                  </>
                ) : (
                  <></>
                )}

                {article.magazineTitle ? (
                  <>
                    <div className="text-[min(min(1rem,3vw),1.5rem)] font-normal text-zinc-500 mt-5">
                      Magazine
                    </div>
                    <div className="text-[min(min(1.25rem,4.5vw),2.5rem)] font-semibold font-times text-zinc-300">
                      {article.magazineTitle}
                    </div>
                    {article.magazineSubTitle ? (
                      <div className="text-[min(min(1rem,3.5vw),1.75rem)] font-normal text-zinc-500 mb-4">
                        {article.magazineSubTitle}
                      </div>
                    ) : (
                      <></>
                    )}
                  </>
                ) : (
                  <></>
                )}

                {article.publishInfo || article.pageInfo ? (
                  <>
                    <div className="w-72 mt-2 mb-2 h-[2px] bg-gradient-to-r from-zinc-700/50 via-zinc-700/50 to-zinc-500/0 border-none" />

                    {article.publishInfo ? (
                      <div className="text-sm font-medium text-zinc-500 mb-2 mt-2">
                        <span>{article.publishInfo}</span>
                      </div>
                    ) : (
                      <></>
                    )}
                    {article.pageInfo ? (
                      <div className="text-sm font-medium text-zinc-500">
                        <span>{article.pageInfo}</span>
                      </div>
                    ) : (
                      <></>
                    )}
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="min-h-96 py-20 px-5 lg:px-10">
            <div className="flex items-start flex-wrap w-full">
              <div className="w-full lg:w-1/2 flex flex-col lg:pr-16 mt-10">
                <div className="text-[min(min(2.5rem,10vw),4.5rem)] font-extrabold font-times text-white">
                  {article.title}
                </div>

                <div className="w-72 mt-2 mb-2 h-[2px] bg-gradient-to-r from-zinc-700/50 via-zinc-700/50 to-zinc-500/0 border-none" />

                {article.publishingHouse ? (
                  <>
                    <div className="text-[min(min(1rem,3vw),1.5rem)] font-normal text-zinc-500 mt-5">
                      Published by
                    </div>
                    <div className="text-[min(min(1.25rem,4.5vw),2.5rem)] font-semibold font-times text-zinc-300 mb-4">
                      {article.publishingHouse}
                    </div>
                  </>
                ) : (
                  <></>
                )}

                {article.magazineTitle ? (
                  <>
                    <div className="text-[min(min(1rem,3vw),1.5rem)] font-normal text-zinc-500 mt-5">
                      Magazine
                    </div>
                    <div className="text-[min(min(1.25rem,4.5vw),2.5rem)] font-semibold font-times text-zinc-300">
                      {article.magazineTitle}
                    </div>
                    {article.magazineSubTitle ? (
                      <div className="text-[min(min(1rem,3.5vw),1.75rem)] font-normal text-zinc-500 mb-4">
                        {article.magazineSubTitle}
                      </div>
                    ) : (
                      <></>
                    )}
                  </>
                ) : (
                  <></>
                )}

                {article.publishInfo || article.pageInfo ? (
                  <>
                    <div className="w-72 mt-2 mb-2 h-[2px] bg-gradient-to-r from-zinc-700/50 via-zinc-700/50 to-zinc-500/0 border-none" />

                    {article.publishInfo ? (
                      <div className="text-sm font-medium text-zinc-500 mb-2 mt-2">
                        <span>{article.publishInfo}</span>
                      </div>
                    ) : (
                      <></>
                    )}
                    {article.pageInfo ? (
                      <div className="text-sm font-medium text-zinc-500">
                        <span>{article.pageInfo}</span>
                      </div>
                    ) : (
                      <></>
                    )}
                  </>
                ) : (
                  <></>
                )}
              </div>

              <div className="w-full order-2 lg:order-1 mt-10 lg:mt-0 lg:w-1/2">
                <ImageCarousel
                  images={article.images}
                  extension={".jpg"}
                  size={"contain"}
                  opaqueBg={true}
                  hideLightGradient={true}
                />
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
