import MovieCard from "../common/MovieCard"
import useGenres from "../../hooks/useGenres";
import useMovies from "../../hooks/useMovies";
import { useContext } from "react";
import { FilterContext } from "../../providers/FilterProviders";

const MovieList = () => {
  const {movieList} = useMovies();
  const {genreList} = useGenres();
  const {genreMovieList} = useContext(FilterContext);

  return (
    <section className="py-10">
      <div className="container">
        <h2 className="text-4xl font-medium mb-4 text-white">Latest items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {
            genreMovieList.length > 0 ? genreMovieList.map((item) => <MovieCard key={item.id} data={item} genreList={genreList}/>) 
            : movieList.length > 0 ? movieList.map((item) => <MovieCard key={item.id} data={item} genreList={genreList}/>)
            : <p className="text-base text-white">No Movies!</p>
          }
        </div>
      </div>
    </section>
  )
}

export default MovieList