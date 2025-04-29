import React, { useState, useEffect } from "react";
import api from "../api/axios";
import { useParams, useNavigate } from "react-router-dom";

const EditMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [error, setError] = useState("");
  
const navigate = useNavigate();

  useEffect(() => {
    api
      .get(`/movies/${id}`)
      .then((response) => setMovie(response.data))
      .catch((error) => console.error("Error fetching movie", error));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.put(`/movies/${id}`, movie);
      navigate("/");
    } catch (error) {
      setError("Error updating movie");
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Edit Movie</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={movie.title}
          onChange={handleChange}
        />
        <input
          type="number"
          name="year"
          value={movie.year}
          onChange={handleChange}
        />
        <input
          type="text"
          name="actor"
          value={movie.actor}
          onChange={handleChange}
        />
        <input
          type="text"
          name="director"
          value={movie.director}
          onChange={handleChange}
        />
        <input
          type="text"
          name="rating"
          value={movie.rating}
          onChange={handleChange}
        />
        <input
          type="text"
          name="posterUrl"
          value={movie.posterUrl}
          onChange={handleChange}
        />
        <button type="submit">Update Movie</button>
      </form>
    </div>
  );
};

export default EditMovie;
