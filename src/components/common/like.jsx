import React from "react";

const Like = props => {
  let string = props.like ? "Liked" : "like";

  return <button onClick={props.onClick}>{string}</button>;
};

export default Like;
