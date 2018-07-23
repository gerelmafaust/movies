import React from "react";

const Header = ({ moviesCount }) => {
  const message =
    moviesCount > 0 ? `There are ${moviesCount} movies` : `There are no movies`;

  return <h4 className="header">{message}</h4>;
};

export default Header;
