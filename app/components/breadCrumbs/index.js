import { useEffect, useMemo } from "react";
import "./styles.css";
import { ChevronDoubleRightIcon, HomeIcon } from "@heroicons/react/20/solid";
import { Link, useSearchParams } from "@remix-run/react";

export default function BreadCrumbs(props) {
  const { matches } = props;
  const [searchParams] = useSearchParams(new URLSearchParams());

  const filteredMatches = useMemo(() => {
    return matches
      .filter((match) => match.handle && match.handle.breadcrumb)
      .map((match) => {
        const params = { ...(match.params || {}) };

        if (searchParams && searchParams.size > 0) {
          searchParams.keys().forEach((key) => {
            params[key] = searchParams.get(key);
          });
        }

        return { ...match, params };
      });
  }, [matches]);

  return (
    <ol className=" h-16 flex flex-[1] justify-start items-center w-full max-w-[calc(100vw-100px)] overflow-x-auto hide-scrollbar">
      <div className="flex-none flex justify-start items-center">
        <Link
          to="/"
          className={`mx-2 my-3 px-2 flex flex-row justify-center items-center gap-1 py-1.5 text-slate-900 rounded-full bg-white shadow-lg hover:bg-blue-100 hover:text-blue-500 hover:shadow-lg ${
            filteredMatches && filteredMatches.length >= 1 ? "mr-2" : ""
          }`}
        >
          <HomeIcon className="w-4 h-4" />
          {filteredMatches && filteredMatches.length < 1 ? (
            <span className="text-xs font-semibold -mb-0.5">Home</span>
          ) : (
            <></>
          )}
        </Link>

        {filteredMatches && filteredMatches.length >= 1 ? (
          <ChevronDoubleRightIcon className="w-4 h-4 -mb-0.5 text-slate-400 lg:mx-1" />
        ) : (
          <></>
        )}
      </div>
      {filteredMatches.map((match, index) => (
        <li
          key={index}
          className="flex justify-start items-center whitespace-nowrap"
        >
          {match.handle.breadcrumb(match)}
          {index !== filteredMatches.length - 1 ? (
            <ChevronDoubleRightIcon className="w-4 h-4 -mb-0.5 text-slate-400 lg:mx-1" />
          ) : (
            <></>
          )}
        </li>
      ))}
    </ol>
  );
}
