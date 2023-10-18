import movies from "../assets/data";
import MovieCard from "../components/MovieCard";

const MovieDatabase = () => {
  return (
    <section className="movie-gallery">
      {movies.map((item, index) => (
        <MovieCard key={index} movie={item} />
      ))}
    </section>
  );
};

export default MovieDatabase;
