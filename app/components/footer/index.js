import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import "./styles.css";
import { useNavigate } from "@remix-run/react";
import { ARDEE_GROUP_INSTAGRAM_LINK, ARDEE_GROUP_LINKEDIN_LINK, CONTACT_LINKS, QUICK_LINKS } from "../../enums/constants";

export default function Footer(props) {
  const navigate = useNavigate();
  const {} = props;

  return (
    <div
      className={`bg-zinc-950 shadow-2xl w-full flex items-start justify-center`}
    >
      <div className="container mx-auto py-10 px-3 lg:px-2">
        <div className="flex flex-wrap items-start text-zinc-400 px-5">
          <div className="w-1/3 mt-10 mb-5 lg:text-center">
            <div className="text-white text-lg lg:text-xl font-semibold mb-2">
              Quick Links
            </div>

            <div className="w-16 mt-2 mb-5 h-[2px] bg-gradient-to-r from-zinc-500/0 via-zinc-700/50 to-zinc-500/0 border-none mr-auto lg:mx-auto" />

            <div>
              <div className="flex flex-col gap-y-2">
                {QUICK_LINKS.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      if (item.url) {
                        window.open(item.url, "_blank");
                      } else {
                        navigate(item.to);
                      }
                    }}
                    className="cursor-pointer"
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-1/3 mt-24 lg:mt-5 mb-5 lg:mb-10 text-center">
            <div className="flex items-center justify-center">
              {/* <div class="circle1"></div>
              <div class="circle2"></div>
              <div class="circle3"></div> */}
              <img
                src={"/icons/logo_full-transparent.png"}
                className="rounded-xl w-40 drop-shadow-dark"
              />
            </div>

            <div className="hidden lg:block max-w-[28rem] mt-2 mb-5 h-[2px] bg-gradient-to-r from-zinc-500/0 via-zinc-700/50 to-zinc-500/0 border-none mx-auto" />

            <div className="hidden lg:inline-block max-w-md text-base lg:text-lg mt-2 text-zinc-500 font-light">
              Over 5 decades, the Ardee Group has been instrumental in shaping
              some of the most iconic structures in the Delhi-NCR region.
            </div>
          </div>

          <div className="w-1/3 mt-10 mb-5 text-right lg:text-center">
            <div className="text-white text-lg lg:text-xl font-semibold mb-2">
              Get in Touch
            </div>

            <div className="w-16 mt-2 mb-5 h-[2px] bg-gradient-to-r from-zinc-500/0 via-zinc-700/50 to-zinc-500/0 border-none ml-auto lg:mx-auto" />

            <div>
              <div className="flex flex-col gap-y-2">
                {CONTACT_LINKS.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      if (item.url) {
                        window.open(item.url, "_blank");
                      } else {
                        navigate(item.to);
                      }
                    }}
                    className="cursor-pointer"
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            </div>

            <div className="text-white text-lg lg:text-xl font-semibold mt-16 mb-2">
              Socials
            </div>

            <div className="w-16 mt-2 mb-5 h-[2px] bg-gradient-to-r from-zinc-500/0 via-zinc-700/50 to-zinc-500/0 border-none ml-auto lg:mx-auto" />

            <div className="flex items-center justify-end lg:justify-center gap-4">
              <a
                href={ARDEE_GROUP_LINKEDIN_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zinc-700 rounded-lg flex items-center justify-center hover:bg-zinc-600 transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-zinc-400"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
              </a>
              <a
                href={ARDEE_GROUP_INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zinc-700 rounded-lg flex items-center justify-center hover:bg-zinc-600 transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-zinc-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full mt-10 mb-0 h-[2px] bg-gradient-to-r from-zinc-500/0 via-zinc-700/50 to-zinc-500/0 border-none" />

        <div className="flex items-center justify-between lg:justify-evenly gap-x-2 lg:gap-x-10 px-3 lg:px-0 mt-10 text-zinc-500 text-sm">
          <div>
            &copy; {new Date().getFullYear()} Ardee Group Pvt. Ltd.
            <br className="block lg:hidden mt-2" />
            All rights reserved.
          </div>
          <div className="cursor-pointer flex flex-col lg:flex-row items-end justify-center lg:justify-start lg:items-center gap-x-2 gap-y-1 lg:gap-y-0">
            <span
              onClick={() => {
                navigate("/terms-and-conditions");
              }}
            >
              Terms <span className="hidden lg:inline">& Conditions</span>
            </span>
            <span className="hidden lg:inline">•</span>
            <span onClick={() => navigate("/privacy-policy")}>
              Privacy Policy
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
