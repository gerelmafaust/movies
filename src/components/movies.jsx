import React, { Component } from "react";

import { orderBy } from "lodash";

import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import { paginate } from "../utils/paginate";

import MoviesHeader from "./moviesHeader";
import Filters from "./common/filters";
import SearchBox from "./common/searchBox";
import MoviesTable from "./moviesTable";
import Pagination from "./common/pagination";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    searchQuery: "",
    selectedGenre: null,
    sortColum: {
      path: "title",
      order: "asc"
    }
  };

  componentDidMount() {
    const genres = [{ name: "All genres", _id: null }, ...getGenres()];
    this.setState({ movies: getMovies(), genres, selectedGenre: genres[0] });
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
    this.setState({ selectedGenre: genre, currentPage: 1, searchQuery: "" });
  };

  handleSort = sortColum => {
    this.setState({ sortColum });
  };

  handleSearch = value => {
    this.setState({ searchQuery: value, currentPage: 1 });
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  getPageData = () => {
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      selectedGenre,
      sortColum,
      searchQuery
    } = this.state;

    let filtered = allMovies;

    if (searchQuery) {
      filtered = allMovies.filter(m =>
        m.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else if (selectedGenre && selectedGenre._id)
      filtered = allMovies.filter(m => m.genre._id === selectedGenre._id);

    const sorted = orderBy(filtered, [sortColum.path], [sortColum.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
  };

  render() {
    const {
      pageSize,
      currentPage,
      genres,
      selectedGenre,
      sortColum,
      searchQuery
    } = this.state;

    const { totalCount, data } = this.getPageData();

    return (
      <React.Fragment>
        <MoviesHeader moviesCount={totalCount} history={this.props.history} />
        <Filters
          items={genres}
          selectedItem={selectedGenre}
          onItemSelect={this.handleGenreSelect}
        />
        <div>
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
          <MoviesTable
            movies={data}
            sortColum={sortColum}
            onDelete={this.handleDelete}
            onLike={this.handleLike}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
