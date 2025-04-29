import React from "react";
import { Link } from "react-router-dom";
import api from "../api/axios";

const MovieCard = ({ movie }) => {
  const handleDelete = async () => {
    try {
      await api.delete(`/movies/${movie.id}`);
      window.location.reload();
    } catch (error) {
      console.error("Error deleting movie", error);
    }
  };

  return (
    <div className="list-item">
      <h3>{movie.title}</h3>
      <p>{movie.year}</p>
      <Link to={`/edit/${movie.id}`}>Edit</Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default MovieCard;
