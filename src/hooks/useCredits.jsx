import { useEffect, useState } from "react";
import instance from "../api/tmdb";

const useCredits = (movieId) => {
  const [movieCast, setMovieCast] = useState([]);
  const [movieCrew, setMovieCrew] = useState([]);

  useEffect(() => {
    const fetchMovieCredits = async () => {
      const {data} = await instance.get(`movie/${movieId}/credits`);
      setMovieCast(data.cast);
      setMovieCrew(data.crew);
    }
    fetchMovieCredits();
  }, [movieId])

  return {movieCast, movieCrew}
}

export default useCredits