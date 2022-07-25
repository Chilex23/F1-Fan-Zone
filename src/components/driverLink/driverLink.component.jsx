import React from "react";

const DriverLink = ({ familyName, givenName}) => (
    <div>
        <div className="rounded-br-2xl border-b-2 border-r-2 border-gray-400 pb-3">
            <p className="text-white flex align-center">
                <span className="w-2 h-4 bg-red-500 mr-3">&nbsp;</span>
                {givenName} {familyName}
            </p>
        </div>
    </div>
);

export default DriverLink;