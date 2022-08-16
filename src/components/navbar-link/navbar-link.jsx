import React from "react";

const NavBarLink = ({ toggleFn, label }) => (
  <li tabIndex="0">
    <button onClick={toggleFn}>
      { label }
      <svg
        className="fill-current"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
      >
        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
      </svg>
    </button>
  </li>
);

export default NavBarLink;
