import React from "react";

const Select = ({ name, label, options, error, ...rest }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} {...rest}>
        <option>Select...</option>
        {options.map(option => {
          return (
            <option key={option._id} value={option._id}>
              {option.name}
            </option>
          );
        })}
      </select>
      {error && <small>{error}</small>}
    </div>
  );
};

export default Select;
