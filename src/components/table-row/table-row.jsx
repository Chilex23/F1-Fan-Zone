import React from "react";

const TableRow = ({ driver }) => {
    const { POS, Name, Car, PTS, Country } = driver; 
    return (
        <tr>
            <td>{ POS }</td>
            <td>{ Name }</td>
            <td>{ Country }</td>
            <td>{ Car }</td>
            <td>{ PTS }</td>
        </tr>
    );
};

export default TableRow;