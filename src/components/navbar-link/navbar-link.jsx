import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiCloseFill } from "react-icons/ri";


const NavBarLink = ({ toggleFn, label, animate }) => (
  <li tabIndex="0" className="mr-4 lg:mr-6">
    <button onClick={toggleFn} className="flex items-center">
      { label }
      {animate ? <RiArrowDropDownLine className="text-3xl" /> : <RiCloseFill className="text-xl" />}
    </button>
  </li>
);

export default NavBarLink;
