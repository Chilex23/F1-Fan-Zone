import React from "react";

const TableRow = ({ driver }) => {
    const { position, points, Driver: { familyName, givenName }, Constructors: { name }, nationality } = driver; 
    return (
        <tr>
            <td>{ position }</td>
            <td>{ givenName } { familyName }</td>
            <td>{ nationality }</td>
            <td>{ name }</td>
            <td>{ points }</td>
        </tr>
    );
};

export default TableRow;