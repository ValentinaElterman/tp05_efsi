import api from "./api.js";

function MovieCard({ pelicula, onSelect, setLoading, onError }) {
  const handleClick = async () => {
    setLoading(true);
    onError(null);
    try {
      const response = await api.get("/", { params: { i: pelicula.imdbID, plot: "full" } });
      const data = response.data;
      if (data) {
        onSelect(data);
      } 
    } catch (err) {
      onError("No se pudo cargar el detalle.");
    } 
    setLoading(false);
  };

  return (
    <div className="card" onClick={handleClick}>
      {pelicula.Poster !== "N/A" ? ( //N/A es el valor que devuelve la API cuando no hay poster disponible
        <img src={pelicula.Poster} alt={pelicula.Title}/>
      ) : (
        <div className="no-photo">
          <p>Foto no disponible</p>
        </div>
      )}
      <h3>{pelicula.Title}</h3>
      <p>{pelicula.Year}</p>
      <p>{pelicula.Type}</p>
    </div>
  );
}

export default MovieCard;