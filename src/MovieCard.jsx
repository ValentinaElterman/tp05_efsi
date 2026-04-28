function MovieCard({ pelicula, hola }) {
  return (
    <div onClick={() => hola(pelicula.imdbID)}>
      <img
        src={pelicula.Poster !== "N/A" ? pelicula.Poster : ""}
        //width="100"
      />
      <p>{pelicula.Title}</p>
      <p>{pelicula.Year}</p>
      <p>{pelicula.Type}</p>
    </div>
  );
}

export default MovieCard;