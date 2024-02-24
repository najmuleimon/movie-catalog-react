import { useEffect, useState } from "react";
import MovieCard from "../common/MovieCard"
import instance from "../../api/tmdb";
import useGenres from "../../hooks/useGenres";

// eslint-disable-next-line react/prop-types
const Related = ({movieId}) => {
  const [relatedMovies, setRelatedMovies] = useState([]);
  const {genreList} = useGenres();

  useEffect(() => {
    const fetchRelatedMovie = async () => {
      const {data} = await instance.get(`movie/${movieId}/similar`);
      setRelatedMovies(data.results);
    }
    fetchRelatedMovie();
  }, [movieId])

  // const result = [];

  // for (const obj of movieList) {
  //   let found = false;
  //   for (const itemId of obj.genre_ids) {
  //     for (const item of movieDetails.genres || []) {
  //         if (item.id === itemId) {
  //             found = true;
  //             break;
  //         }
  //     }
  //     if(found){
  //       break;
  //     }
  //   }
  //   if (found) result.push(obj);
  // }

  return (
    <section className="py-10">
      <div className="container">
        <h2 className="text-4xl font-medium mb-4 text-white">Related items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {
            relatedMovies.length > 0 ? relatedMovies.map((item) => <MovieCard key={item.id} data={item} genreList={genreList}/>)
            : <p className="text-gray-500 text-base">No Similar Items Found!</p>
          }
        </div>
      </div>
    </section>
  )
}

export default Related