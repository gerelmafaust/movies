import React from "react";

const Input = ({ name, label, focus, error, ...rest }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        autoFocus={focus ? focus : undefined}
        id={name}
        name={name}
        {...rest}
      />
      {error && <small>{error}</small>}
    </div>
  );
};

Input.defaultProps = {
  focus: false
};

export default Input;
