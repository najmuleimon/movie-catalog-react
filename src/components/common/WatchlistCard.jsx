import { useContext } from "react";
import { WatchlistContext } from "../../providers/WatchlistProviders";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";

// eslint-disable-next-line react/prop-types
const WatchlistCard = ({data}) => {
  const {id, poster_path, title, vote_average} = data || {};
  const {removeFromWatchlist} = useContext(WatchlistContext);

  return (
    <div className='relative w-full'>
      <Link to={`/details/${id}`} className="block max-h-[332px] h-full w-full rounded-md overflow-hidden group">
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="Cover" className='w-full h-full object-cover' />
        <span className='bg-primary py-1.5 px-4 text-sm text-white rounded inline-block absolute top-1/2 left-1/2 whitespace-nowrap -translate-x-1/2 -translate-y-1/2 transition-all duration-300 opacity-0 group-hover:opacity-100'>See Details</span>
      </Link>
      <span className='flex items-center justify-center h-9 w-9 border-2 border-primary text-white rounded-full text-sm font-semibold absolute top-4 left-4'>{vote_average.toFixed(1)}</span>
      <div className='mt-2'>
        <h3 className='text-base font-medium truncate text-white pb-2'>{title}</h3>
        <button type='button' onClick={() => removeFromWatchlist(data)} className='group text-sm capitalize text-red-600 flex items-center pr-3 border border-red-600 rounded-full'>
          <span className='flex items-center justify-center h-8 w-8'>
            <IoClose className='text-red-600 text-xl' />
          </span>
          remove from watchlist
        </button>
      </div>
    </div>
  )
}

export default WatchlistCard