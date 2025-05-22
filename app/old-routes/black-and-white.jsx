import { useSelector } from "react-redux";
import { PAGES } from "../enums/constants";
import HomeSectionCard from "../components/homeSectionCard/index.black.and.white";
import { useNavigate } from "@remix-run/react";

export const meta = () => {
  return [{ title: "The Ardee Group | Ideate. Plan. Execute." }];
};

export default function BlackAndWhite() {
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
    <div className="w-full container mx-auto p-2 md:p-3 lg:p-5 flex gap-y-4 flex-wrap my-10">
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 w-full">
        {PAGES.map((item, index) => (
          <div key={index} className="col-span-1 row-span-1">
            <HomeSectionCard
              item={{
                ...item,
                description: item.description
                  ? `${item.description.slice(0, 104)}...`
                  : item.description,
                action: getActionForPageItem(item),
              }}
              index={0}
              classes={"!mt-0"}
            />
          </div>
        ))}
      </div>

      <div className="h-20"></div>
    </div>
  );
}
