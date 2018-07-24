import React from "react";

const Input = ({ name, value, label, onChange, focus, error }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        autoFocus={focus}
        type="text"
        id={name}
        name={name}
        onChange={onChange}
        value={value}
      />
      {error && <small>{error}</small>}
    </div>
  );
};

Input.defaultProps = {
  focus: false
};

export default Input;
