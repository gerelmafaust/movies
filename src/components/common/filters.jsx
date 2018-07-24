import React from "react";

const Filters = ({
  items,
  textProperty,
  valueProperty,
  selectedItem,
  onItemSelect
}) => {
  return (
    <ul className="filters">
      {items.map(filter => {
        return (
          <li
            onClick={() => onItemSelect(filter)}
            key={filter[valueProperty]}
            className={selectedItem === filter ? "selected" : null}
          >
            {filter[textProperty]}
          </li>
        );
      })}
    </ul>
  );
};

Filters.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default Filters;
