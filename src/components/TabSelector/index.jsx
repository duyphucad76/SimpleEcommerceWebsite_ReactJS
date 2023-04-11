import * as React from "react";

export const TabSelector = ({ isActive, children, onClick }) => (
  <button
    className={`mr-8 group inline-flex items-center px-2 py-3 border-b-2 font-semibold text-xl leading-5 cursor-pointer whitespace-nowrap ${
      isActive
        ? "border-green-400 text-black focus:outline-none focus:text-green-400 focus:border-green-400"
        : "border-transparent text-gray-400 hover:text-black focus:text-gray-600 focus:border-gray-300"
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);
