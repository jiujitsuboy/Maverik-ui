import React, { useEffect, useState } from "react";
import api from "../api/axios";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    api
      .get(`/movies?page=${page}&size=10&sortBy=id`)
      .then((response) => {
        setMovies(response.data?.content || []);
        setTotalPages(response.data?.totalPages || 0);
      })
      .catch((error) => console.error("Error fetching movies", error));
  }, [page]);

  return (
    <div className="movie-list-container">
      <h2>Movies</h2>
      <Link to="/add">Add New Movie</Link>
      <div class="list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <div>
        <button onClick={() => setPage(page - 1)} disabled={page === 0}>
          Previous
        </button>
        <span> Page {page + 1} </span>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page + 1 === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MovieList;
