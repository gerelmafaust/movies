import React, { Component } from "react";

const Like = props => {
  let string = "Like";
  if (props.like) string = "liked";

  return (
    <a href="#" onClick={props.onClick}>
      {string}
    </a>
  );
};

export default Like;
