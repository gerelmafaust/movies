import React from "react";

const Like = ({ liked, onClick }) => {
  let string = liked ? "Liked" : "like";

  return <button onClick={onClick}>{string}</button>;
};

export default Like;
