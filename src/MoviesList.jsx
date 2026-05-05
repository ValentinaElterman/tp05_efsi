import MovieCard from "./MovieCard";

function MoviesList({ movies, onSelectMovie, setLoading, onError }) {
  if (!movies || movies.length === 0) return <p>No se encontraron resultados</p>;

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard 
          key={movie.imdbID} 
          pelicula={movie} 
          onSelect={onSelectMovie} 
          setLoading={setLoading}
          onError={onError}
        />
      ))}
    </div>
  );
}

export default MoviesList;