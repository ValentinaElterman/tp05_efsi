import MovieCard from "./MovieCard";

function MovieList({ peliculas, hola }) {
  if (peliculas.length === 0) {
    return <p>No hay resultados</p>;
  }

  return (
    <div>
      {peliculas.map((peliculA) => (
        <MovieCard
          key={peliculA.imdbID}
          pelicula={peliculA}
          hola={hola}
        />
      ))}
    </div>
  );
}

export default MovieList;

/*const MoviesList = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get('/movies')
        .then((response) => {
            setMovies(response.data);
            setLoading(false);
    })
    .catch((error) => {
        console.error('error al cargar las peliculas', error);
        setLoading(false);
    });
}, []);

if (loading) return <p>Cargando peliculas...</p>;

return(
    <div>
        <h2>Peliculas</h2>
        <ul>
            {peliculas.map((pelicula) => (
                <li key={pelicula.id}>
                <strong>{pelicula.name}</strong>
                </li>
            ))}
        </ul>
    </div>
);
}; */