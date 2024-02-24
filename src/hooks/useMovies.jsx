import { useEffect, useState } from "react";
import instance from "../api/tmdb";

const useMovies = () => {
  const [movieList, setMovieList] = useState([]);
  let date = new Date();
  let oldDate = new Date();
  oldDate.setMonth(date.getMonth() - 2);
  const dateBefore = oldDate;

  useEffect(() => {
    const fetchMovies = async () => {
      const {data} = await instance.get(`discover/movie?primary_release_date.gte=${dateBefore}&primary_release_date.lte=${date}`);
      setMovieList(data.results);
    }
    fetchMovies();
  }, [])

  return {
    movieList
  }
}

export default useMovies