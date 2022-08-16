import React from "react";

const TableRow = ({ driver }) => {
  const {
    position,
    points,
    Driver: { familyName, givenName, nationality },
    Constructors,
  } = driver;
  return (
    <tr>
      <td>{position}</td>
      <td>
        {givenName} {familyName}
      </td>
      <td>{nationality}</td>
      <td>{Constructors[0].name}</td>
      <td>{points}</td>
    </tr>
  );
};

export default TableRow;
