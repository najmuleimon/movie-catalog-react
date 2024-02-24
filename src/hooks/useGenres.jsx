import { useEffect, useState } from "react";
import instance from "../api/tmdb";

const useGenres = () => {
  const [genreList, setGenreList] = useState([]);

  useEffect(() => {
    const fetchGenre = async () => {
      const {data} = await instance.get('genre/movie/list');
      setGenreList(data.genres)
    }
    fetchGenre();
  }, []);

  return {
    genreList
  };
}

export default useGenres