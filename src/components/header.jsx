import React from "react";

const Header = ({ moviesCount }) => {
  const message =
    moviesCount > 0 ? `There are ${moviesCount} movies` : `There are no movies`;

  return <h1 className="header">{message}</h1>;
};

export default Header;
