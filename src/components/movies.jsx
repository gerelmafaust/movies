import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";
import Header from "./header";
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
      <React.Fragment>
        <Header numberOfMovies={this.state.movies.length} />
        <table>
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
      </React.Fragment>
    );
  }
}

export default Movies;
