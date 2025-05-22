import { useSelector } from "react-redux";
import { PAGES } from "../enums/constants";
import HomeSectionCard from "../components/homeSectionCard/index.grid";
import { useNavigate } from "@remix-run/react";

export const meta = () => {
  return [{ title: "The Ardee Group | Ideate. Plan. Execute." }];
};

export default function Grid() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const getActionForPageItem = (page) => {
    return () => {
      navigateToPage(page);
    };
  };

  const navigateToPage = (page) => {
    if (page.value === "residential" || "commercial") {
      return navigate(`/real-estate/${page.value}`);
    }

    return navigate(`/${page.value}`);
  };

  return (
    <div className="w-full container mx-auto p-2 md:p-3 lg:p-5 flex gap-y-4 flex-wrap mb-10">
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 grid-rows-1 w-full">
        <div className="col-span-1 row-span-1">
          <HomeSectionCard
            item={{ ...PAGES[0], action: getActionForPageItem(PAGES[0]) }}
            index={0}
            classes={"!mt-0"}
          />
        </div>
        <div className="col-span-1 row-span-1 grid gap-x-4 grid-cols-1 grid-rows-1">
          <div className="col-span-1 row-span-1 grid gap-4 grid-cols-2 grid-rows-1">
            <div className="cols-span-1 row-span-1">
              <HomeSectionCard
                item={{
                  ...PAGES[3],
                  // action: getActionForPageItem(PAGES[3]),
                  truncateDescription: true,
                }}
                index={3}
                classes={"min-h-[calc(calc((100vh-180px)/2-0.5rem))] !mt-0"}
                innerClasses={"px-1"}
                titleClasses={
                  "text-[min(min(2rem,5.5vw),2.5rem)] lg:text-[min(min(2.5rem,8.5vw),3rem)]"
                }
              />
            </div>
            <div className="cols-span-1 row-span-1">
              <HomeSectionCard
                item={{
                  ...PAGES[2],
                  // action: getActionForPageItem(PAGES[2]),
                  truncateDescription: true,
                }}
                index={2}
                classes={"min-h-[calc(calc((100vh-180px)/2-0.5rem))] !mt-0"}
                innerClasses={"px-1"}
                titleClasses={
                  "text-[min(min(1.5rem,6.5vw),2.5rem)] lg:text-[min(min(2.5rem,8.5vw),3rem)]"
                }
              />
            </div>
          </div>
          <div className="col-span-1 row-span-1">
            <HomeSectionCard
              item={{
                ...PAGES[4],
                // action: getActionForPageItem(PAGES[4]),
                truncateDescription: true,
              }}
              index={4}
              classes={"min-h-[calc(calc((100vh-180px)/2-0.5rem))] !mt-0"}
              titleClasses={"text-[min(min(2.5rem,8.5vw),3rem)]"}
            />
          </div>
        </div>
      </div>

      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 grid-rows-1 w-full">
        <div className="col-span-1 row-span-1 grid gap-x-4 grid-cols-1 grid-rows-1">
          <div className="col-span-1 row-span-1 grid gap-4 grid-cols-2 grid-rows-1">
            <div className="cols-span-1 row-span-1">
              <HomeSectionCard
                item={{
                  ...PAGES[5],
                  // action: getActionForPageItem(PAGES[5]),
                  truncateDescription: true,
                }}
                index={3}
                classes={"min-h-[calc(calc((100vh-180px)/2-0.5rem))] !mt-0"}
                innerClasses={"px-1"}
                titleClasses={
                  "text-[min(min(1.5rem,6.5vw),2.5rem)] lg:text-[min(min(2.5rem,8.5vw),3rem)]"
                }
              />
            </div>
            <div className="cols-span-1 row-span-1">
              <HomeSectionCard
                item={{
                  ...PAGES[6],
                  // action: getActionForPageItem(PAGES[6]),
                  truncateDescription: true,
                }}
                index={6}
                classes={"min-h-[calc(calc((100vh-180px)/2-0.5rem))] !mt-0"}
                innerClasses={"px-1"}
                titleClasses={
                  "text-[min(min(1.5rem,6.5vw),2.5rem)] lg:text-[min(min(2.5rem,8.5vw),3rem)]"
                }
              />
            </div>
          </div>
          <div className="col-span-1">
            <HomeSectionCard
              item={{
                ...PAGES[7],
                // action: getActionForPageItem(PAGES[7])
              }}
              index={7}
              classes={"min-h-[calc(calc((100vh-180px)/2-0.5rem))] !mt-0"}
              titleClasses={"text-[min(min(2.5rem,8.5vw),3rem)]"}
            />
          </div>
        </div>

        <div className="col-span-1 row-span-1">
          <HomeSectionCard
            item={{ ...PAGES[1], action: getActionForPageItem(PAGES[1]) }}
            index={1}
            classes={"!mt-0 !mb-0"}
          />
        </div>
      </div>

      {/* {PAGES.map((item, index) => (
        <div key={index} className="w-full lg:w-1/2 px-2 lg:px-5">
          <HomeSectionCard item={item} index={index} />
        </div>
      ))} */}

      <div className="h-20"></div>
    </div>
  );
}
