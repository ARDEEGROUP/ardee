import { ChevronDoubleUpIcon } from "@heroicons/react/20/solid";
import { useState, useEffect } from "react";

export default function ScrollToTop(props) {
  const { isVisible, scrollToTop } = props;

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 p-3 bg-gradient-to-br from-zinc-800 to-zinc-900 text-white rounded-full shadow-lg transition-opacity ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <ChevronDoubleUpIcon className="w-8 h-8 text-white" />
    </button>
  );
}
