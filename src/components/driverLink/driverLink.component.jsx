import React from "react";
import { Link } from "react-router-dom";

const DriverLink = ({ driverId, familyName, givenName, toggle }) => (
  <Link to={`/drivers/${driverId}`} onClick={toggle}>
    <div className="group rounded-br-2xl border-b-2 border-r-2 border-gray-400 pb-3 myLink">
      <p className="text-white flex align-center">
        <span className="w-2 h-4 bg-red-600 mr-3 group-hover:bg-white">
          &nbsp;
        </span>
        {givenName} {familyName}
      </p>
    </div>
  </Link>
);

export default DriverLink;
