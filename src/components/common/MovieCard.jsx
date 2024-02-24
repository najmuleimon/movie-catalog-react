import { useContext, useEffect } from 'react';
import { WatchlistContext } from '../../providers/WatchlistProviders';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import placeholder from '../../assets/images/placeholder.jpg'

// eslint-disable-next-line react/prop-types
const MovieCard = ({data, genreList}) => {
  const {poster_path, genre_ids, title, id, vote_average} = data || {};
  const genre_names = [];
  const {addedWatchlist, setAddedWatchlist, addToWatchlist} = useContext(WatchlistContext);
  
  genre_ids.forEach(id => {
    // eslint-disable-next-line react/prop-types
    const foundItem = genreList.find(item => item.id === id);
    if (foundItem) {
      genre_names.push(foundItem);
    }
  });

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
  });
  }

  useEffect(() => {
    const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
    setAddedWatchlist(watchlist)
  }, [setAddedWatchlist])

  return (
    <div className='relative w-full'>
      <Link to={`/details/${id}`} onClick={handleClick} className="block max-h-[332px] h-full w-full rounded-md overflow-hidden group">
        {
          poster_path ? 
          <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="Cover" className='w-full h-full object-cover' />
          : <img src={placeholder} alt="placeholder" className='w-full h-full object-cover'/>
        }
        <span className='bg-primary py-1.5 px-4 text-sm text-white rounded inline-block absolute top-1/2 left-1/2 whitespace-nowrap -translate-x-1/2 -translate-y-1/2 transition-all duration-300 opacity-0 group-hover:opacity-100'>See Details</span>
      </Link>
      <span className='flex items-center justify-center h-9 w-9 border-2 border-primary text-white rounded-full text-sm font-semibold absolute top-4 left-4'>{vote_average.toFixed(1)}</span>
      <div className='mt-2'>
        <h3 className='text-base font-medium truncate text-white'>{title}</h3>
        <ul className='flex items-center flex-wrap gap-x-2 gap-y-1 mb-1'>
          {
            genre_names?.map(({id, name}) => (
              <li key={id} className='relative after:content-[","] last:after:hidden after:text-primary after:absolute after:-right-1 after:bottom-0'>
                <p className='text-sm flex flex-wrap gap-1 text-primary'>{name}</p>
              </li>
            ))
          }
        </ul>
        <button type='button' onClick={() => addToWatchlist(data)} disabled={addedWatchlist.find((item) => item.id === id)} className='group text-sm capitalize text-red-600 disabled:text-gray-500 disabled:border-gray-500 flex items-center pr-3 border border-red-600 rounded-full'>
          <span className='flex items-center justify-center h-8 w-8'>
            <FaHeart className='text-red-600 group-disabled:text-gray-500' />
          </span>
          add to watchlist
        </button>
      </div>
    </div>
  )
}

export default MovieCard