import React, { Component } from "react";
import Table from "./common/table";
import Like from "./common/like";

class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: movie => (
        <Like liked={movie.like} onClick={() => this.props.onLike(movie)} />
      )
    },
    {
      key: "delete",
      content: movie => (
        <button onClick={() => this.props.onDelete(movie)}>Delete</button>
      )
    }
  ];

  render() {
    const { movies, sortColum, onSort } = this.props;

    return (
      <Table
        columns={this.columns}
        data={movies}
        sortColum={sortColum}
        onSort={onSort}
      />
    );
  }
}

export default MoviesTable;
