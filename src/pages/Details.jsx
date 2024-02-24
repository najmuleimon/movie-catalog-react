import { useEffect, useState } from "react"
import MovieDetails from "../components/details/MovieDetails"
import Related from "../components/details/Related"
import { useParams } from "react-router";
import instance from "../api/tmdb";

const Details = () => {
  const {movieId} = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    const fetchMovie = async () => {
      const {data} = await instance.get(`movie/${movieId}`);
      setMovieDetails(data);
    }
    fetchMovie();
  }, [movieId])

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
  });
  }, []);
  
  return (
    <>
      <MovieDetails movieDetails={movieDetails}/>
      <Related movieId={movieId}/>
    </>
  )
}

export default Details