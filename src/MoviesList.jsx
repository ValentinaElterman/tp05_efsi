import MovieCard from "./MovieCard";

function MoviesList({ movies, onSelectMovie }) {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard 
          key={movie.imdbID} 
          pelicula={movie} 
          onSelect={onSelectMovie} 
        />
      ))}
    </div>
  );
}

export default MoviesList;