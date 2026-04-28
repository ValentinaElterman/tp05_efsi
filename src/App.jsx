import React, {useState,useEffect} from "react";
import './App.css'
import api from './api.js';
import MoviesList from "./MoviesList.jsx";
import SearchBar from "./SearchBar.jsx";
import MovieDetail from "./MovieDetail.jsx";
import MovieCard from "./MovieCard.jsx";
import Loader from "./Loader.jsx";
import ErrorMessafe from "./ErrorMessage.jsx";

function App() {
  const [movies, setMovies] = useState([]);
  const [MovieSeleccionada, setMovieSeleccionada] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
};

useEffect(() => {
  localStorage.setItem("peliculas", JSON.stringify(peliculas));
}, [peliculas]); // Se ejecuta cada vez que 'peliculas' se modifica
  
return (
    <>
      
    </>
  )
}

export default App

/*const handleSearch = async (query) => {
    setLoading(true);
    setError(null);
    setSelectedMovie(null); // Limpiamos detalle si estamos haciendo una nueva búsqueda

    try {
      const response = await api.get("/", { params: { s: query } });

      if (response.data.Response === "True") {
        setMovies(response.data.Search);
      } else {
        setMovies([]);
        setError("No se encontraron resultados para tu búsqueda.");
      }
    } catch (err) {
      setError("Hubo un error al conectar con la API. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  // 2. Obtener detalle de una película específica
  const handleSelectMovie = async (id) => {
    setLoading(true);
    setError(null);

    try {
      const response = await api.get("/", { params: { i: id, plot: "full" } });
      setSelectedMovie(response.data);
    } catch (err) {
      setError("No se pudo cargar el detalle de la película.");
    } finally {
      setLoading(false);
    }
  };

  // 3. Volver a la lista
  const handleBack = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="App">
      <h1>Buscador de Películas</h1>
      
      <SearchBar onSearch={handleSearch} />

      {loading && <Loader />}
      
      {error && !loading && <ErrorMessage mensaje={error} />}

      {!loading && !error && selectedMovie ? (
        <MovieDetail pelicula={selectedMovie} hola={handleBack} />
      ) : (
        !loading && !error && movies.length > 0 && (
          <MovieList peliculas={movies} hola={handleSelectMovie} />
        )
      )}
    </div>
  );
}

export default App;*/ 