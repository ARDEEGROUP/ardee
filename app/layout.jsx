import {
  Outlet,
  useLocation,
  useMatches,
  useNavigate,
  useNavigation,
} from "@remix-run/react";
import "react-toastify/dist/ReactToastify.css";
import { ROUTES } from "./enums/constants";
import { Bars3Icon } from "@heroicons/react/20/solid";
import Footer from "./components/footer";
import ScrollToTop from "./components/scrollToTop";
import { useEffect, useRef, useState } from "react";
import MobileSidebar from "./components/sidebar";
import Waves from "./components/waves";

const Layout = (props) => {
  const matches = useMatches();
  const navigate = useNavigate();
  const navigation = useNavigation();

  const scrollContainerRef = useRef(null);
  const location = useLocation();

  const [showLoading, setShowLoading] = useState(true);
  const [startToHideLoading, setStartToHideLoading] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showBackToTopButton, setShowBackToTopButton] = useState(false);
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStartToHideLoading(true);
    }, 1500);
    setTimeout(() => {
      setShowLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const container = scrollContainerRef.current;
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight;
      const clientHeight = container.clientHeight;

      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      setShowBackToTopButton(scrollTop > 300);
      setIsScrolledToBottom(scrollTop + clientHeight >= scrollHeight - 300);
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo(0, 0);
    }
  }, [location.pathname]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const scrollToTop = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const isRouteActive = (item, matches) => {
    if (item.to === "/") {
      if (matches.length === 2 && matches[1].pathname === "/") return true;
      return false;
    }
    if (matches.filter((el) => el.pathname === item.to).length) return true;
    return false;
  };

  return (
    <div className="flex h-screen w-screen">
      <div
        style={{
          width: "100%",
          height: "100vh",
          position: "absolute",
          left: 0,
          top: 0,
          zIndex: -1,
        }}
      >
        {/* <Threads
          amplitude={2}
          distance={0.8}
          enableMouseInteraction={false}
          color={[200, 50, 50]}
        /> */}
        <Waves
          lineColor="#3335"
          backgroundColor="rgba(50, 50, 50, 0)"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
        />
      </div>
      <div className="flex-[1]">
        {/* <div className="flex flex-row gap-1 lg:gap-2 justify-between items-center flex-1 w-100 h-16 nav-bg text-slate-900 bb-light-1 shadow-sm">
          <BreadCrumbs matches={matches} />
        </div> */}
        <div
          className={`transition-all duration-200 ${
            scrolled
              ? "bg-zinc-800/80 backdrop-blur-md shadow-2xl h-[80px]"
              : "h-[100px]"
          }  absolute z-[100] top-0 w-full flex items-center justify-center`}
        >
          <div className="container w-full flex items-center justify-between gap-x-4">
            <div className="hidden lg:flex flex-[1] items-center justify-evenly gap-x-2">
              {ROUTES.slice(0, 4).map((item, index) => (
                <div
                  onClick={() => {
                    if (item.url) {
                      window.open(item.url, "_blank");
                    } else {
                      navigate(item.to);
                    }
                  }}
                  key={index}
                  className={`nav-item ${
                    isRouteActive(item, matches) ? "nav-item-active" : ""
                  } text-zinc-100 font-normal px-3 text-base`}
                >
                  {item.label}
                </div>
              ))}
            </div>

            <div
              className={`mx-4 lg:mx-0 relative transition-all duration-200 ${
                scrolled
                  ? "scale-[0.725] -translate-x-3 lg:translate-x-0 pt-2 pb-1 rounded-b-none"
                  : "scale-[1] pb-2 pt-10 -mt-2 rounded-b-lg"
              } bg-black px-5 lg:px-10 shadow-[0px_0px_10px_10px_rgba(39_39_42_0.2)] cursor-pointer`}
              onClick={() => {
                navigate("/");
              }}
            >
              <img src={"/icons/logo_full.png"} className="h-[100px]" />
              <div
                className={`absolute top-0 left-0 w-[10px] h-full bg-gradient-to-r from-zinc-900 via-zinc-800/20 to-zinc-800/0 ${
                  scrolled ? "rounded-bl-none" : "rounded-bl-lg"
                }`}
              ></div>
              <div
                className={`absolute transition-all duration-200 ${
                  scrolled ? "top-0" : "top-[30px]"
                } left-0 w-full h-[10px] bg-gradient-to-b from-zinc-900 via-zinc-800/20 to-zinc-800/0`}
              ></div>
              <div
                className={`absolute bottom-0 right-0 w-full h-[10px] bg-gradient-to-t from-zinc-900 via-zinc-800/20 to-zinc-800/0 ${
                  scrolled ? "rounded-b-none" : "rounded-b-lg"
                }`}
              ></div>
              <div
                className={`absolute bottom-0 right-0 w-[10px] h-full bg-gradient-to-l from-zinc-900 via-zinc-800/20 to-zinc-800/0 ${
                  scrolled ? "rounded-br-none" : "rounded-br-lg"
                }`}
              ></div>
            </div>

            <div className="hidden lg:flex flex-[1] items-center justify-evenly gap-x-2">
              {ROUTES.slice(4).map((item, index) => (
                <div
                  onClick={() => {
                    navigate(item.to);
                  }}
                  key={index}
                  className={`nav-item ${
                    isRouteActive(item, matches) ? "nav-item-active" : ""
                  } text-zinc-100 font-normal px-3 text-base`}
                >
                  {item.label}
                </div>
              ))}
            </div>
            <div className="flex lg:hidden items-center justify-end mx-4">
              <Bars3Icon
                className="w-10 h-10 text-zinc-100 cursor-pointer"
                onClick={toggleSidebar}
              />
            </div>
          </div>
        </div>
        <div
          ref={scrollContainerRef}
          className="overflow-auto h-full max-w-screen-min-drawer pt-[80px]"
          style={{
            maxWidth: `calc(100vw)`,
          }}
        >
          <Outlet />
          <Footer />
        </div>
      </div>
      <ScrollToTop
        isVisible={showBackToTopButton && !isScrolledToBottom}
        scrollToTop={scrollToTop}
      />
      <MobileSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </div>
  );
};

export default Layout;
