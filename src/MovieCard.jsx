function MovieCard({ pelicula, onSelect }) {

  return (
    <div className="card" onClick={() => onSelect(pelicula.imdbID)}>
      
      {pelicula.Poster !== "N/A" ? ( //N/A es cuando la api no tiene foto
        <img src={pelicula.Poster} alt={pelicula.Title}/>
      ) : (
        <div className="no-photo">
          <p>Foto no disponible</p>
        </div>
      )}
      <h3>{pelicula.Title}</h3>
      <p>{pelicula.Year}</p>
    </div>
  );
}

export default MovieCard;