import React, { Component } from "react";

const Like = props => {
  let string = props.like ? "Liked" : "like";

  return (
    <a href="#" onClick={props.onClick}>
      {string}
    </a>
  );
};

export default Like;
