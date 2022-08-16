import React from "react";

const StandingsTab = ({ children, toggleFn, stand }) => (
  <div
    className={`${
      stand ? "border-red-600" : ""
    } border-t-4 border-r-4 rounded-tr-xl px-2 py-4 sm2:py-2 sm2:px-1 box-decoration-clone cursor-pointer lg:myLink lg:hover:text-white sm2:text-xs font-bold`}
    onClick={toggleFn}
  >
    {children}
  </div>
);

export default StandingsTab;