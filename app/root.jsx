import { cssBundleHref } from "@remix-run/css-bundle";
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "@remix-run/react";
import { Provider } from "react-redux";
import store from "./store";
import tailwindStyleStyles from "../tailwind.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import appStyles from "./styles/index.css";
import Layout from "./layout";
import Button from "./components/button";
import { useEffect, useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

export const links = () => [
  { rel: "stylesheet", href: cssBundleHref },
  { rel: "stylesheet", href: tailwindStyleStyles },
  { rel: "stylesheet", href: appStyles },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "true" },
  {
    href: "https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,200;6..12,300;6..12,400;6..12,500;6..12,600;6..12,700;6..12,800;6..12,900&display=swap",
    rel: "stylesheet",
  },
  {
    rel: "stylesheet",
    href: "https://unpkg.com/@themesberg/flowbite@1.1.0/dist/flowbite.min.css",
  },
  {
    rel: "icon",
    href: "/icons/logo-192x192.png",
    sizes: "192x192",
  },
  {
    rel: "icon",
    href: "/icons/logo-32x32.png",
    sizes: "32x32",
  },
];

export function ErrorBoundary() {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <html>
      <head>
        <title>Oops! Page Not Found</title>
        <Meta />
        <Links />
      </head>
      <body className="h-screen w-screen flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[16vw] font-black text-slate-600">Oops!</h1>

          <div className="-translate-y-[6vw] flex flex-col">
            <div className="bg-gradient-to-b from-slate-400 to-white p-[2px] rounded-xl ">
              <div className="flex items-center justify-center gap-3 bg-white shadow-xl rounded-xl py-3 px-5">
                {isRouteErrorResponse(error) ? (
                  <>
                    <div className="text-[2vw] font-semibold text-slate-300 flex items-center justify-center gap-2">
                      <div>{"{{"}</div>
                      <div className="text-[3vw] font-extrabold">
                        {error.status}
                      </div>
                      <div>{"}}"}</div>
                    </div>
                    <h1 className="text-[2vw] font-medium text-slate-500">
                      {error.statusText}
                    </h1>
                  </>
                ) : error instanceof Error ? (
                  <>
                    <h1 className="text-[2vw] font-medium text-slate-500">
                      {error.message}
                    </h1>
                  </>
                ) : (
                  <>
                    <h1 className="text-[2vw] font-medium text-slate-500">
                      {"Unknown Error"}
                    </h1>
                  </>
                )}
              </div>
            </div>

            <div className="flex items-center justify-center mt-[4vw]">
              <Button
                lg
                onClick={() => navigate("/")}
                buttonText={"Go Back Home"}
                containerClasses={"mt-0 mb-0"}
                classes={"px-5 py-3"}
                buttonTextClasses={"text-[1.5vw]"}
              />
            </div>
          </div>
        </div>

        <Scripts />
      </body>
    </html>
  );
}

function App() {
  const [showLoading, setShowLoading] = useState(true);
  const [startToHideLoading, setStartToHideLoading] = useState(false);
  const [showEnterButton, setShowEnterButton] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowEnterButton(true);
    }, 2000);
    setTimeout(() => {
      setStartToHideLoading(true);
    }, 15500);
    setTimeout(() => {
      setShowLoading(false);
      setTimeout(() => {
        setStartToHideLoading(false);
        setShowEnterButton(false);
      }, 500);
    }, 16000);
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="w-screen max-h-screen flex flex-col">
          {showLoading ? (
            <div
              className={`loading-overlay bg-black transition-opacity flex flex-col items-center justify-center gap-y-4 duration-500 ${
                startToHideLoading ? "opacity-0" : ""
              }`}
            >
              <img src="/logo-transparent.png" className={`loading-logo`} />

              <Button
                lg
                // onClick={() => navigate("/about-us")}
                onClick={() => {
                  if (!showLoading || startToHideLoading) return;
                  setStartToHideLoading(true);
                  setTimeout(() => {
                    setShowLoading(false);
                    setStartToHideLoading(false);
                  }, 500);
                }}
                buttonText={"Enter"}
                containerClasses={`mt-0 mb-0 transition-all duration-1000 opacity-0 ${
                  showEnterButton ? "opacity-100" : "opacity-0"
                } animate-bounce delay-[2000ms]`}
                classes={`!px-6 py-3`}
                buttonTextClasses={"text-base"}
                iconComponent={() => (
                  <ChevronRightIcon className="w-5 h-5 ml-1.5 -mr-0.5" />
                )}
              />
            </div>
          ) : (
            <Layout />
          )}
        </div>
        <ToastContainer />
        <Scripts />
        <ScrollRestoration />
        <LiveReload />
      </body>
    </html>
  );
}

const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWrapper;
