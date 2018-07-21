import React from "react";
import PropTypes from "prop-types";

const Filters = props => {
  const { filters, currentFilter } = props;

  const allFilters = [...filters];
  allFilters.unshift({ name: "All Genres" });

  return (
    <ul>
      {allFilters.map(filter => {
        return <li key={allFilters.indexOf(filter)}>{filter.name}</li>;
      })}
    </ul>
  );
};

export default Filters;
