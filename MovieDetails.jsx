import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import '../styles/MovieDetails.css';


const MovieDetails = () => {
  const { id } = useParams(); // Get movie ID from the URL
  const [movie, setMovie] = useState(null); // to store movie data

  // Fetch movie details when the component mounts or when 'id' changes
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=4036de08`);
        const data = await res.json();
        if (data.Response === "True") {
          setMovie(data);
        } else {
          setMovie(null);
          console.log("Movie not found!");
        }
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };

    fetchMovie();
  }, [id]);

   if (!movie) return (
    <div className="movie-details-page">
      <div className="movie-details-container">
        <p>Loading movie details...</p>
      </div>
    </div>
  );

  return (
    <div className="movie-details-page">
      <div className="movie-details-container">
        <h1 className="title">{movie.Title} ({movie.Year})</h1>
        {movie.Poster && movie.Poster !== "N/A" && (
          <img src={movie.Poster} alt={`Poster for ${movie.Title}`} />
        )}
        {movie.Genre && <p><strong>Genre:</strong> {movie.Genre}</p>}
        {movie.Director && movie.Director !== "N/A" && (
          <p><strong>Director:</strong> {movie.Director}</p>
        )}
        {movie.Actors && <p><strong>Actors:</strong> {movie.Actors}</p>}
        {movie.Plot && <p><strong>Plot:</strong> {movie.Plot}</p>}
        {movie.imdbRating && <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>}
      </div>
    </div>
  );
};

export default MovieDetails;
