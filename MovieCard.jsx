import { Link } from "react-router-dom";
import '../styles/MovieCard.css';

const MovieCard = ({ movie }) => {
  if (!movie) return null; // safety check

  return (
    // Link to the movie details page using its IMDb ID
    <Link to={`/movie/${movie.imdbID}`} className="movie-card-link"> 
      <div className="movie-card">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/180x270?text=No+Image'}
          alt={movie.Title}
        />
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
