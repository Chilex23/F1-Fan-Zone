import React from "react";
import { Link } from "react-router-dom";

const DriverLink = ({ driverId, familyName, givenName, toggle }) => (
    <Link to={`/drivers_list/${driverId}`} onClick={toggle}>
        <div className="rounded-br-2xl border-b-2 border-r-2 border-gray-400 pb-3">
            <p className="text-white flex align-center">
                <span className="w-2 h-4 bg-red-500 mr-3">&nbsp;</span>
                {givenName} {familyName}
            </p>
        </div>
    </Link>
);

export default DriverLink;