import MovieCard from './MovieCard';
import '../styles/Home.css';

const MovieList = ({ movies }) => {
  // If there are no movies to display
  if (!movies || movies.length === 0) {
    return <p>No movies found</p>;
  }

  return (
    <div className="movie-list">
      {/* Loop through movies */}
      {movies.map((m) => (
        <MovieCard key={m.imdbID} movie={m} />
      ))}
    </div>
  );
};

export default MovieList;
