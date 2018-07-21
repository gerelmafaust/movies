import React from "react";

const Header = ({ moviesCount }) => {
  return moviesCount > 0 ? (
    <h1>There are {moviesCount} movies</h1>
  ) : (
    <h1>There are no movies</h1>
  );
};

export default Header;
