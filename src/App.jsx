import React, {useState,useEffect} from "react";
import './App.css'
import api from './api.js';
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

const handleSearch = async (query) => {
    setLoading(true);
    setError(null);
    setMovieSeleccionada(null);
    try {
      const response = await api.get("/", { params: { s: query } });
      if (response.data.Response === "True") {
        setMovies(response.data.Search);
      } else {
        setMovies([]);
        setError("No se encontraron resultados.");
      }
    } catch (err) {
      setError("Error de conexión con la API.");
    } finally {
      setLoading(false);
    }
  };

 const handleSelect = async (id) => {
    setLoading(true);
    try {
      const response = await api.get("/", { params: { i: id, plot: "full" } });
      setMovieSeleccionada(response.data);
    } catch (err) {
      setError("No se pudo cargar el detalle.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Buscador de Películas</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {error && !loading && <ErrorMessage mensaje={error} />}

      {!loading && !error && (movieSeleccionada ? (
        <MovieDetail pelicula={movieSeleccionada} onBack={() => setMovieSeleccionada(null)} />
        ) : (
          <MoviesList movies={movies} onSelectMovie={handleSelect} />
        )
      )}
    </div>
  );
};

export default App;