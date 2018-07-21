import React, { Component } from "react";

import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import { paginate } from "../utils/paginate";

import Header from "./header";
import Filters from "./common/filters";
import Movie from "./movie";
import Pagination from "./common/pagination";

class Movies extends Component {
  state = {
    movies: getMovies(),
    genres: getGenres(),
    currentGenre: "lala",
    pageSize: 4,
    currentPage: 1
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

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    const { length: count } = this.state.movies;
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      currentFilter,
      genres: filters
    } = this.state;

    const movies = paginate(allMovies, currentPage, pageSize);

    return (
      <React.Fragment>
        <Header moviesCount={count} />
        <Filters filters={filters} currentFilter={currentFilter} />
        <table>
          <tbody>
            {movies.map(movie => {
              return (
                <Movie
                  key={movies.indexOf(movie)}
                  movie={movie}
                  onDelete={() => this.handleDelete(movie)}
                  onLike={() => this.handleLike(movie)}
                />
              );
            })}
          </tbody>
        </table>
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default Movies;
