import React, {useState,useEffect} from "react";

function SearchBar({ onSearch }) {
  const [texto, setTexto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (texto.trim()) {
      onSearch(texto);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar película..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  );
}

export default SearchBar;