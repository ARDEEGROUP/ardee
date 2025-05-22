import { useSelector } from "react-redux";
import { PAGES } from "../enums/constants";
import HomeSectionCard from "../components/homeSectionCard";

export const meta = () => {
  return [{ title: "The Ardee Group | Ideate. Plan. Execute." }];
};

export default function Index() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="w-full container mx-auto p-2 md:p-3 lg:p-5 flex gap-y-4 flex-wrap mb-10">
      {PAGES.map((item, index) => (
        <div key={index} className="w-full lg:w-1/2 px-2 lg:px-5">
          <HomeSectionCard item={item} index={index} />
        </div>
      ))}

      <div className="h-20"></div>
    </div>
  );
}
