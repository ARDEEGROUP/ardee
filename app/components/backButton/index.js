import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import "./styles.css";
import { useNavigate } from "@remix-run/react";

export default function BackButton(props) {
  const navigate = useNavigate();
  const back = () => navigate(-1);
  const { containerClasses, classes, goBack = back } = props;
  return (
    <div className={`flex mb-5 ${containerClasses ? containerClasses : ""}`}>
      <button
        onClick={goBack}
        className={`flex justify-start items-center text-slate-600 bg-slate-200 rounded-xl pl-1 py-2 pr-2 ${
          classes ? classes : ""
        }`}
      >
        <ChevronLeftIcon className="w-5 h-5" />
        <p className="text-sm font-semibold">Back</p>
      </button>
    </div>
  );
}
