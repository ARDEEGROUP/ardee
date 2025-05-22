import "./styles.css";

export default function Button(props) {
  const {
    loading = false,
    buttonText = "Continue",
    type = "button",
    showText = true,
    onClick,
    disabled = false,
    classes,
    containerClasses,
    buttonTextClasses,
    sm = false,
    md = false,
    lg = true,
    iconComponent,
    excludeDefaultStyles = false,
    noShadow = false,
  } = props;
  return (
    <div
      className={`flex flex-row my-5 ${
        containerClasses ? containerClasses : ""
      }`}
    >
      <button
      type={type}
        disabled={disabled || loading}
        className={`relative flex justify-center items-center ${
          !!iconComponent ? "pl-3 pr-1.5" : "px-3"
        } ${sm ? "py-1" : ""} ${md ? "py-2" : ""} ${
          lg && !sm && !md ? "py-3" : ""
        } ${
          classes && classes.includes("bg-") ? "" : "bg-transparent"
        } text-slate-100 flex-1 rounded-full ${noShadow ? "" : "shadow-lg"} ${
          excludeDefaultStyles
            ? ""
            : "transition-colors border border-solid border-white hover:bg-zinc-100 hover:text-zinc-900 active:bg-white active:text-zinc-950 focus:text-zinc-950 focus:bg-white"
        } disabled:opacity-50 uppercase font-normal text-md ${
          classes ? classes : ""
        }`}
        onClick={onClick}
      >
        <span className={`flex items-center ${loading ? "opacity-0" : ""}`}>
          {showText ? (
            <span className={`font-semibold ${buttonTextClasses ? buttonTextClasses : ""}`}>
              {buttonText}
            </span>
          ) : (
            ""
          )}
          {!!iconComponent && iconComponent()}
        </span>
        {loading ? (
          <span className="absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center bg-slate-50/30">
            <img src="/icons/loading-dark.gif" className="w-10 h-10" />
          </span>
        ) : (
          <></>
        )}
      </button>
    </div>
  );
}
