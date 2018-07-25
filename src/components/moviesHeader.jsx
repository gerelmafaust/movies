import React, { Component } from "react";

class MoviesHeader extends Component {
  handleNewMovie = () => {
    this.props.history.push("/movies/new");
  };

  render() {
    const { moviesCount } = this.props;

    const message =
      moviesCount > 0
        ? `There are ${moviesCount} movies`
        : `There are no movies`;

    return (
      <h4 className="header">
        {message} <button onClick={this.handleNewMovie}>New movie</button>
      </h4>
    );
  }
}

export default MoviesHeader;
