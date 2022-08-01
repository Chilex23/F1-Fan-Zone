import React from "react";

const ConstructorRow = ({ team }) => {
    const { position, Constructor: { name }, points } = team; 
    return (
        <tr>
            <td>{ position }</td>
            <td>{ name }</td>
            <td>{ points }</td>
        </tr>
    );
};

export default ConstructorRow;