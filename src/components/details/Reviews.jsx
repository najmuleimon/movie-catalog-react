import { useEffect, useState } from "react";
import ReviewCard from "../common/ReviewCard"
import instance from "../../api/tmdb";

// eslint-disable-next-line react/prop-types
const Reviews = ({movieId}) => {
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    const fetchMovieReview = async () => {
      const {data} = await instance.get(`movie/${movieId}/reviews`);
      setMovieReviews(data.results);
    }
    fetchMovieReview();
  }, [movieId])

  return (
    <div className="space-y-6">
      {
        movieReviews?.length > 0 ? movieReviews.map((item) => <ReviewCard key={item.id} data={item}/>) : <p className="text-base text-white">No Reviews to show!</p>
      }
    </div>
  )
}

export default Reviews