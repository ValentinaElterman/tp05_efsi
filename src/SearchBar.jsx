import React, {useState,useEffect} from "react";

function SearchBar({ onSearch }) {
  const [texto, setTexto] = useState("");

  const envio = (e) => {
    e.preventDefault();
    if (texto.trim()) {
      onBuscar(texto);
    }
  };

  return (
    <form onSubmit={envio}>
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