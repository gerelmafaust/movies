import React, { Component } from "react";

class TableHeader extends Component {
  raiseSort = path => {
    const sortColum = { ...this.props.sortColum };

    if (sortColum.path === path) {
      sortColum.order = sortColum.order === "asc" ? "desc" : "asc";
    } else {
      sortColum.path = path;
      sortColum.order = "asc";
    }

    this.props.onSort(sortColum);
  };

  renderSort = column => {
    const { sortColum } = this.props;

    if (column.path !== sortColum.path) return null;
    if (sortColum.order === "asc") return "asc";
    return "desc";
  };

  render() {
    const { columns } = this.props;

    return (
      <thead>
        <tr>
          {columns.map(column => (
            <th
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.label} {this.renderSort(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
