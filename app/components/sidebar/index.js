import { useNavigate, useLocation } from "@remix-run/react";
import {
  XMarkIcon,
  HomeIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  NewspaperIcon,
  LinkIcon,
  PhoneIcon,
  AcademicCapIcon,
  PuzzlePieceIcon,
  UsersIcon,
  PaintBrushIcon,
} from "@heroicons/react/24/outline";
import { ROUTES } from "../../enums/constants";

export default function MobileSidebar({ isOpen, onClose }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (to) => {
    navigate(to);
    onClose();
  };

  const getIcon = (iconKey) => {
    switch (iconKey) {
      case "home":
        return <HomeIcon className="w-6 h-6" />;
      case "user-group":
        return <UserGroupIcon className="w-6 h-6" />;
      case "paint-brush":
        return <PaintBrushIcon className="w-6 h-6" />;
        case "users":
        return <UsersIcon className="w-6 h-6" />;
      case "building-office":
        return <BuildingOfficeIcon className="w-6 h-6" />;
      case "newspaper":
        return <NewspaperIcon className="w-6 h-6" />;
      case "phone":
        return <PhoneIcon className="w-6 h-6" />;
      case "academic-cap":
        return <AcademicCapIcon className="w-6 h-6" />;
      case "puzzle-piece":
        return <PuzzlePieceIcon className="w-6 h-6" />;
      default:
        return <LinkIcon className="w-6 h-6" />;
    }
  };
  return (
    <div
      className={`fixed inset-0 bg-zinc-800/80 backdrop-blur-md z-[200] transition-all duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div
        className={`fixed right-0 top-0 bottom-0 w-80 h-screen overflow-y-auto bg-gradient-to-b from-zinc-950 to-zinc-900 shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end p-4">
          <XMarkIcon
            className="w-8 h-8 text-zinc-100 cursor-pointer hover:text-zinc-300 transition-colors"
            onClick={onClose}
          />
        </div>
        <div className="flex justify-center mb-8 py-4">
          <img
            src="/icons/logo_full.png"
            alt="Ardee Group Logo"
            className="h-24 cursor-pointer hover:opacity-80 transition-opacity drop-shadow-[0px_0px_10px_rgba(0,0,0,1)] shadow-2xl rounded-2xl"
            onClick={() => handleNavigation("/")}
          />
        </div>
        <nav className="px-4 space-y-2 pb-10">
          {ROUTES.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                if (item.url) {
                  onClose();
                  window.open(item.url, "_blank");
                } else {
                  handleNavigation(item.to);
                }
              }}
              // onClick={() => handleNavigation(item.to)}
              className={`flex items-center space-x-3 nav-item text-zinc-100 font-normal py-3 px-4 text-lg rounded-lg transition-colors ${
                location.pathname === item.to
                  ? "bg-zinc-700 text-white"
                  : "hover:bg-zinc-700/50"
              }`}
            >
              {getIcon(item.iconKey)}
              <span>{item.label}</span>
            </div>
          ))}
        </nav>
        <div className="p-4 text-center text-zinc-400 text-sm">
          © 2024 Ardee Group. All rights reserved.
        </div>
      </div>
    </div>
  );
}
