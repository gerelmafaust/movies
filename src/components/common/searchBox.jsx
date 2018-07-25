import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      type="search"
      value={value}
      onChange={e => onChange(e.currentTarget.value)}
    />
  );
};

export default SearchBox;
