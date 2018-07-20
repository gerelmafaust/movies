import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Header from "./header";
import Movie from "./movie";

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m !== movie);
    this.setState({ movies });
  };

  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index].like = !movies[index].like;
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
                  onLike={() => this.handleLike(movie)}
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
