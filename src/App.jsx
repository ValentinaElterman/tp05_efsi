import React, {useState} from "react";
import './App.css'
import MoviesList from "./MoviesList.jsx";
import SearchBar from "./SearchBar.jsx";
import MovieDetail from "./MovieDetail.jsx";
import Loader from "./Loader.jsx";
import ErrorMessage from "./ErrorMessage.jsx";

function App() {
  const [movies, setMovies] = useState([]);
  const [movieSeleccionada, setMovieSeleccionada] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

const handleResults = (results) => {
    setMovies(results || []);
    setMovieSeleccionada(null);
    setError(null);
  };

 const handleSelectMovie = (movieData) => {
    setMovieSeleccionada(movieData);
    setError(null);
  };

  return (
    <div className="App">
      <h1>Buscador de Peliculas</h1>
      <SearchBar onResults={handleResults} setLoading={setLoading} onError={setError} />
      {loading && <Loader />}
      {error && !loading && <ErrorMessage mensaje={error} />}

      {!loading && !error && (movieSeleccionada ? (
        <MovieDetail pelicula={movieSeleccionada} onBack={() => setMovieSeleccionada(null)} />
        ) : (
          <MoviesList movies={movies} onSelectMovie={handleSelectMovie} setLoading={setLoading} onError={setError} />
        )
      )}
    </div>
  );
};

export default App;