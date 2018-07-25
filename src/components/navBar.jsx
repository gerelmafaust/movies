import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Videoclub</Link>
      <NavLink activeClassName="selected" to="/movies">
        Movies
      </NavLink>
      <NavLink activeClassName="selected" to="/customers">
        Customers
      </NavLink>
      <NavLink activeClassName="selected" to="/rentals">
        Rentals
      </NavLink>
      <NavLink activeClassName="selected" to="/login">
        Login
      </NavLink>
      <NavLink activeClassName="selected" to="/register">
        Register
      </NavLink>
    </nav>
  );
};

export default NavBar;
