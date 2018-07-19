import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";
import Movie from "./movie";

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m !== movie);
    deleteMovie(movie._id);
    this.setState({ movies });
  };

  render() {
    return (
      <table width="100%">
        <tbody>
          {this.state.movies.map(movie => {
            return (
              <Movie
                key={this.state.movies.indexOf(movie)}
                movie={movie}
                onDelete={() => this.handleDelete(movie)}
              />
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default Movies;
