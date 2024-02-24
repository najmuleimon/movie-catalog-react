import { useEffect } from "react";
import Filter from "../components/home/Filter"
import MovieList from "../components/home/MovieList"

const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
  });
  }, []);

  return (
    <>
      <Filter/>
      <MovieList/>
    </>
  )
}

export default Home