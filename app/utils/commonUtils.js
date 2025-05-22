import { format, formatISO, fromUnixTime } from "date-fns";
import * as dateFnsTzRaw from "date-fns-tz";
const { toZonedTime, fromZonedTime } = dateFnsTzRaw.default ?? dateFnsTzRaw;
import { toast } from "react-toastify";
import {
  AcademicCapIcon,
  ClipboardDocumentListIcon,
  FlagIcon,
  RocketLaunchIcon,
  TrophyIcon,
  UsersIcon,
  BuildingLibraryIcon,
  MapPinIcon,
  HeartIcon,
  FireIcon,
  HomeIcon,
  PencilSquareIcon,
  SparklesIcon,
  ChatBubbleBottomCenterTextIcon,
  BoltIcon,
  BellAlertIcon,
  LockClosedIcon,
  EnvelopeIcon,
  BuildingOfficeIcon,
  Square2StackIcon,
  RectangleGroupIcon,
  ArchiveBoxIcon,
  ArrowPathIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";

export const sleep = async (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const handleErrors = (errorKey, errorMessage, setErrors) => {
  if (!errorKey || !errorKey.length) return;

  setErrors((cur) => {
    let next = { ...cur };
    if (!errorMessage || !errorMessage.length) {
      delete next[errorKey];
    } else {
      next[errorKey] = errorMessage;
    }
    return next;
  });
};

export const checkErrors = (res) => {
  if (!res) throw new Error("No response from server");
  if (res.error) throw new Error(res.error.message || res.error);
};

export const capitalize = (str) => {
  if (typeof str !== "string") return ""; // Return an empty string or some default value if not a string
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const capitalizeAndClean = (str, delimiter = "_") => {
  // Split the string by the delimiter, filter out empty strings resulting from consecutive delimiters
  return str
    .split(delimiter)
    .filter((word) => word) // This removes any empty strings caused by consecutive delimiters
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("")
    .replace(new RegExp(delimiter, "g"), ""); // Replace any remaining delimiters with empty string
};

const removeNonAlphanumericAndLeadingNumbers = (str) => {
  return str
    .replace(/[^a-zA-Z0-9]/g, "") // Remove all non-alphanumeric characters
    .replace(/^\d+/, ""); // Remove leading numeric characters
};

export const getDaysMinusTodayDate = (days = 0) => {
  return new Date().setDate(new Date().getDate() - days);
};

export const getLeadFormData = (lead) => {
  let data = [];

  for (let key of LEAD_FORM_KEYS) {
    if (lead[key]) {
      data.push({
        label: LEAD_FORM_KEY_LABEL_MAP[key],
        value: lead[key],
      });
    }
  }

  if (lead.type === "meta" && lead.subType === "whatsapp") {
    for (let key in lead.customData) {
      data.push({
        label: key,
        value: lead.customData[key],
      });
    }
  } else if (lead.customData && Object.keys(lead.customData).length) {
    for (let key of LEAD_FORM_CUSTOM_KEYS) {
      for (let customDataKey in lead.customData) {
        if (customDataKey.toLowerCase().includes(key)) {
          data.push({
            label: LEAD_FORM_CUSTOM_KEY_LABEL_MAP[key],
            value: lead.customData[customDataKey],
          });
        }
      }
    }
  }

  return data;
};

export const getLeadDataAtKey = (lead, key) => {
  if (!lead || !key) return "";

  if (key === "createdAt") {
    return format(lead["createdAt"], "do MMM yyyy");
  } else if (key === "status") {
    if (lead[key]) {
      return LEAD_STATUS_KEY_LABEL_MAP[lead[key]];
    } else return "Uncontacted";
  } else if (key === "erpProject") {
    return (lead.erpProject || {}).name || "";
  } else if (key === "salesPersonClientEmployee") {
    return ((lead.salesPersonClientEmployee || {}).name || {}).fullName || "";
  } else if (key === "followUp") {
    return lead.followUp ? format(lead.followUp, "do MMM yyyy") : "";
  } else if (key === "city") {
    return lead.city ? lead.city : "";
  } else if (key === "remarks") {
    return lead.remarks ? lead.remarks : "";
  } else if (key === "type") {
    return lead.type === "meta" ? "Meta" : "Google";
  } else if (key === "phone") {
    return `ph:${lead[key]}`;
  } else if (Object.keys(LEAD_EXPORT_CUSTOM_KEY_LABELS).includes(key)) {
    if (lead.customData && lead.customData.length) {
      const foundItem = lead.customData.find((el) => {
        let cleanedLabel = capitalizeAndClean(el.name);
        if (cleanedLabel && cleanedLabel.length) {
          cleanedLabel = removeNonAlphanumericAndLeadingNumbers(cleanedLabel);
        }

        if (
          cleanedLabel &&
          cleanedLabel.length &&
          el.values &&
          el.values.length &&
          el.values[0] &&
          el.values[0].length
        ) {
          return cleanedLabel.includes(LEAD_EXPORT_CUSTOM_KEY_LABELS[key]);
        }
      });

      if (foundItem && foundItem.values && foundItem.values[0]) {
        return foundItem.values[0].replace(/_/g, " ");
      }
      return "";
    } else if (lead.customData && Object.keys(lead.customData).length) {
      const foundkey = Object.keys(lead.customData).find((el) => {
        let cleanedLabel = capitalizeAndClean(el);
        if (cleanedLabel && cleanedLabel.length) {
          cleanedLabel = removeNonAlphanumericAndLeadingNumbers(cleanedLabel);
        }

        if (cleanedLabel && cleanedLabel.length && lead.customData[el]) {
          return cleanedLabel.includes(LEAD_EXPORT_CUSTOM_KEY_LABELS[key]);
        }

        return false;
      });

      if (foundkey && lead.customData[foundkey]) {
        return lead.customData[foundkey].replace(/_/g, " ");
      }

      return "";
    } else return "";
  }

  return lead[key];
};

export const downloadFile = ({ data, fileName, fileType }) => {
  // Create a blob with the data we want to download as a file
  const blob = new Blob([data], { type: fileType });
  // Create an anchor element and dispatch a click event on it
  // to trigger a download
  const a = document.createElement("a");
  a.download = fileName;
  a.href = window.URL.createObjectURL(blob);
  const clickEvt = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
  });
  a.dispatchEvent(clickEvt);
  a.remove();
};

export const offsetDateTimezone = (
  timestamp,
  sourceTimezone = "UTC",
  targetTimezone = "UTC"
) => {
  if (timestamp && timestamp.toString().length !== 10) {
    timestamp /= 1000;
  }
  // Convert the timestamp to a Date object
  let date = fromUnixTime(timestamp);

  // Convert the date to UTC from the source timezone
  let utcDate = fromZonedTime(date, sourceTimezone);

  // Adjust the date to the target timezone if necessary
  const zonedDate = toZonedTime(utcDate, targetTimezone);

  // Return the ISO formatted date string in the target timezone
  return zonedDate.getTime();
};

export const copyToClipboard = (text) => {
  try {
    if (!navigator || !navigator.clipboard) {
      throw new Error("Can't copy text. Try again.");
    }

    if (!text || !text.length) {
      throw new Error("No text to copy.");
    }

    navigator.clipboard.writeText(text);
  } catch (error) {
    toast(error.message);
  } finally {
    toast("Copied!");
  }
};

export const scrollToTop = (scrollRefClassName = "scroll-ref") => {
  if (typeof document !== "object") return;

  if (!scrollRefClassName.startsWith("."))
    scrollRefClassName = "." + scrollRefClassName;

  const scrollableElement = document.querySelector(scrollRefClassName);
  if (scrollableElement) {
    scrollableElement.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: For smooth scrolling
    });
  }
};

export const getWhatsappLink = (phone, text) => {
  phone = phone.replace(/\D/g, "");
  text = text ? encodeURIComponent(text) : null;

  let url = `https://wa.me/${phone}/?text=${text || ""}`;
  return url;
};

export const getArdeeResidencesIcon = (icon, classes) =>
  ({
    "map-pin": <MapPinIcon className={classes} strokeWidth={0.5} />,
    home: <HomeIcon className={classes} strokeWidth={0.5} />,
    "pencil-square": <PencilSquareIcon className={classes} strokeWidth={0.5} />,
    sparkles: <SparklesIcon className={classes} strokeWidth={0.5} />,
    "chat-bubble-bottom-center-text": (
      <ChatBubbleBottomCenterTextIcon className={classes} strokeWidth={0.5} />
    ),
    bolt: <BoltIcon className={classes} strokeWidth={0.5} />,
    "bell-concierge": <BellAlertIcon className={classes} strokeWidth={0.5} />,
    "lock-closed": <LockClosedIcon className={classes} strokeWidth={0.5} />,
    envelope: <EnvelopeIcon className={classes} strokeWidth={0.5} />,
  }[icon]);

export const getArdeeSportsClubGoaIcon = (icon, classes) =>
  ({
    "building-office": (
      <BuildingOfficeIcon className={classes} strokeWidth={0.5} />
    ),
    "squares-2x2": <Square2StackIcon className={classes} strokeWidth={0.5} />,
    "rectangle-group": (
      <RectangleGroupIcon className={classes} strokeWidth={0.5} />
    ),
    users: <UsersIcon className={classes} strokeWidth={0.5} />,
    heart: <HeartIcon className={classes} strokeWidth={0.5} />,
  }[icon]);

export const getTeamArdeeMastersIcon = (icon, classes) =>
  ({
    trophy: <TrophyIcon className={classes} strokeWidth={0.5} />,
    "academic-cap": <AcademicCapIcon className={classes} strokeWidth={0.5} />,
    "clipboard-list": (
      <ClipboardDocumentListIcon className={classes} strokeWidth={0.5} />
    ),
    flag: <FlagIcon className={classes} strokeWidth={0.5} />,
    users: <UsersIcon className={classes} strokeWidth={0.5} />,
    "rocket-launch": <RocketLaunchIcon className={classes} strokeWidth={0.5} />,
  }[icon]);

export const getArdeeRacquetClubIcon = (icon, classes) =>
  ({
    "building-library": (
      <BuildingLibraryIcon className={classes} strokeWidth={0.5} />
    ),
    users: <UsersIcon className={classes} strokeWidth={0.5} />,
    "map-pin": <MapPinIcon className={classes} strokeWidth={0.5} />,
    trophy: <TrophyIcon className={classes} strokeWidth={0.5} />,
    "rocket-launch": <RocketLaunchIcon className={classes} strokeWidth={0.5} />,
  }[icon]);

export const getArdeeSportsClubIcon = (icon, classes) =>
  ({
    "building-library": (
      <BuildingLibraryIcon className={classes} strokeWidth={0.5} />
    ),
    "map-pin": <MapPinIcon className={classes} strokeWidth={0.5} />,
    "clipboard-list": (
      <ClipboardDocumentListIcon className={classes} strokeWidth={0.5} />
    ),
    users: <UsersIcon className={classes} strokeWidth={0.5} />,
    heart: <HeartIcon className={classes} strokeWidth={0.5} />,
    fire: <FireIcon className={classes} strokeWidth={0.5} />,
  }[icon]);

export const getArdeeCcaIcon = (icon, classes) =>
  ({
    "lock-closed": <LockClosedIcon className={classes} strokeWidth={0.5} />,
    "archive-box": <ArchiveBoxIcon className={classes} strokeWidth={0.5} />,
    "arrow-path": <ArrowPathIcon className={classes} strokeWidth={0.5} />,
    "map-pin": <MapPinIcon className={classes} strokeWidth={0.5} />,
    eye: <EyeIcon className={classes} strokeWidth={0.5} />,
  }[icon]);
