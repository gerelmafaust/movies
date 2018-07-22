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
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1
  };

  componentDidMount() {
    const genres = [{ name: "All genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

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

  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  render() {
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      genres: filters,
      selectedGenre
    } = this.state;

    const filteredMovies =
      selectedGenre && selectedGenre._id
        ? allMovies.filter(m => m.genre._id === selectedGenre._id)
        : allMovies;

    const count = filteredMovies.length;

    const movies = paginate(filteredMovies, currentPage, pageSize);

    console.log(movies);

    return (
      <React.Fragment>
        <Header moviesCount={count} />
        <Filters
          items={filters}
          selectedItem={selectedGenre}
          onItemSelect={this.handleGenreSelect}
        />
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
