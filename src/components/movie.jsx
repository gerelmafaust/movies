import React from "react";

const Movie = ({ movie, onDelete }) => {
  return (
    <tr>
      <td>{movie.title}</td>
      <td>{movie.genre.name}</td>
      <td>{movie.numberInStock}</td>
      <td>{movie.dailyRentalRate}</td>
      <td>lalalala</td>
      <td>
        <button onClick={onDelete}>Delete</button>
      </td>
    </tr>
  );
};

export default Movie;
