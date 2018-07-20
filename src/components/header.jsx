import React from "react";

const Header = ({ numberOfMovies }) => {
  return numberOfMovies > 0 ? (
    <h1>There are {numberOfMovies} movies</h1>
  ) : (
    <h1>There are no movies</h1>
  );
};

export default Header;
