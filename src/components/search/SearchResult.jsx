import MovieCard from "../common/MovieCard";
import useGenres from "../../hooks/useGenres";
import { useEffect, useState } from "react";
import instance from "../../api/tmdb";
import { useSearchParams } from "react-router-dom";

const SearchResult = () => {
    const {genreList} = useGenres();
    const [filterMovies, setFilterMovies] = useState([]);
    const [URLSearchParams] = useSearchParams();
    let startDate = URLSearchParams.get("start-date");
    let endDate = URLSearchParams.get("end-date");

    useEffect(() => {
      const fetchFilterMovies = async () => {
        const {data} = await instance.get(`discover/movie?primary_release_date.gte=${startDate}&primary_release_date.lte=${endDate}`);
        setFilterMovies(data.results);
      }
      fetchFilterMovies();
    }, [startDate, endDate])

  return (
    <section className="py-10">
        <div className="container">
            <h2 className="text-4xl font-medium mb-4 text-white">Search Result</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {
                filterMovies.length > 0 ? filterMovies.map((item) => <MovieCard key={item.id} data={item} genreList={genreList}/>)
                : <p className="text-base text-white">No Movies Found!</p>
            }
            </div>
        </div>
    </section>
  )
}

export default SearchResult