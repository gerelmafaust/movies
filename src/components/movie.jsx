import React from "react";
import Like from "./common/like";

const Movie = ({ movie, onDelete, onLike }) => {
  return (
    <tr>
      <td>{movie.title}</td>
      <td>{movie.genre.name}</td>
      <td>{movie.numberInStock}</td>
      <td>{movie.dailyRentalRate}</td>
      <td>
        <Like like={movie.like} onClick={onLike} />
      </td>
      <td>
        <button onClick={onDelete}>Delete</button>
      </td>
    </tr>
  );
};

export default Movie;
