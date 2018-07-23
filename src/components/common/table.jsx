import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ columns, sortColum, onSort, data }) => {
  return (
    <table>
      <TableHeader columns={columns} sortColum={sortColum} onSort={onSort} />
      <TableBody columns={columns} data={data} />
    </table>
  );
};

export default Table;
