function MovieDetail({ pelicula, onBack }) {
  return (
    <div className="detail-container">
      <div className="detail-image">
        {pelicula.Poster !== "N/A" ? (
           <img src={pelicula.Poster} alt={pelicula.Title} />
        ) : (
           <div className="no-photo"><p>Sin imagen</p></div>
        )}
      </div>
      
      <div className="detail-info">
      <h2>{pelicula.Title}</h2>
      <p><strong>Tipo:</strong> {pelicula.Type}</p>
      <p><strong>Año:</strong> {pelicula.Year}</p>
      <p><strong>Genero:</strong> {pelicula.Genre}</p>
      <p><strong>Director:</strong> {pelicula.Director}</p>
      <p><strong>Actores:</strong> {pelicula.Actors}</p>
      <p><strong>Sinopsis:</strong> {pelicula.Plot}</p>
      <p><strong>Duracion:</strong> {pelicula.Runtime}</p>
      <p><strong>Idioma:</strong> {pelicula.Language}</p>
      <p><strong>Pais:</strong> {pelicula.Country}</p>
      <p><strong>IMDb:</strong> {pelicula.imdbRating}</p>
      
      <button onClick={onBack}>Volver</button>
      </div>
    </div>
  );
}

export default MovieDetail;