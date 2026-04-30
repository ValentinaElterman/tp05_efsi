import React, { useState, useEffect } from "react";
import api from "./api.js";

function SearchBar({ onResults, setLoading, onError }) {
  const [texto, setTexto] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      if (!texto.trim()) {
        onResults([]);
        return;
      }

      setLoading(true);
      onError(null);

      try {
        const response = await api.get("/", { params: { s: texto } });
        const data = response.data;

        if (data && data.Response === "True") {
          onResults(data.Search);
        } else {
          onResults([]);
          onError("No se encontraron resultados.");
        }
      } catch (err) {
        onResults([]);
        onError("Error de conexión con la API.");
      }

      setLoading(false);
    };

    const timeout = setTimeout(fetchMovies, 500); //si borramos esto se rompre todo xd

    return () => clearTimeout(timeout);
  }, [texto]);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Buscar película..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
    </form>
  );
}

export default SearchBar;