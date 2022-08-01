import React from "react";
import findDriver from "../../utils/find-driver";

const TableRow = ({ driver }) => {
    const { POS, Name, Car, PTS, Country } = driver; 
    return (
        <tr>
            <td>{ POS }</td>
            <td>{ findDriver(Name).givenName } { findDriver(Name).familyName }</td>
            <td>{ Country }</td>
            <td>{ Car }</td>
            <td>{ PTS }</td>
        </tr>
    );
};

export default TableRow;