import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router';
import { WatchlistContext } from '../../providers/WatchlistProviders';
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import Overview from './Overview';
import Reviews from './Reviews';
import Cast from './Cast';
import Crew from './Crew';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const MovieDetails = ({movieDetails}) => {
  const {id, backdrop_path, imdb_id, genres, poster_path, title, tagline, overview, vote_average, vote_count} = movieDetails || {};
  const {movieId} = useParams();
  const [tab, setTab] = useState('overview');
  const tabItems = ['overview', 'reviews', 'cast', 'crew'];
  const {addedWatchlist, setAddedWatchlist, addToWatchlist, removeFromWatchlist} = useContext(WatchlistContext);

  useEffect(() => {
    const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
    setAddedWatchlist(watchlist)
  }, [setAddedWatchlist])

  return (
    <section className="bg-no-repeat bg-center bg-cover" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500${backdrop_path})` || ''}}>
      <div className="bg-black/80 py-10">
        <div className="container">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 sm:col-span-5 xl:col-span-4">
              <div className="w-full rounded-md overflow-hidden">
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="Cover" className='w-full' />
              </div>
            </div>
            <div className="col-span-12 sm:col-span-7 xl:col-span-8">
              <h2 className='text-4xl font-medium text-white'>{title}</h2>
              <h4 className='text-gray-400 text-lg py-2'>{tagline}</h4>
              <ul className='flex items-end flex-wrap gap-2'>
                {
                  genres?.map(({id, name}) => (
                    <li key={id}>
                      <span className="inline-block text-sm text-white border border-gray-700 px-3 py-1 rounded-full">{name}</span>
                    </li>
                  ))
                }
              </ul>
              <h4 className='text-white text-lg py-2'>IMDB Link: <Link to={`https://www.imdb.com/title/${imdb_id}`} className='text-primary'>IMDB</Link></h4>
              <p className="text-gray-400 text-base pb-6">{overview}</p>
              
              {
                addedWatchlist.find((item) => item.id === id) ?
                <button type='button' onClick={() => removeFromWatchlist(movieDetails)} className='uppercase text-base text-red-600 flex items-center gap-2'>
                  <span className='flex items-center justify-center h-9 w-9 border border-red-600 rounded-full'>
                    <IoClose className='text-red-600' />
                  </span>
                  Remove from watchlist
                </button> :
                <button type='button' onClick={() => addToWatchlist(movieDetails)} disabled={addedWatchlist.find((item) => item.id === id)} className='group uppercase text-base text-red-600 flex items-center gap-2 disabled:text-gray-500'>
                <span className='flex items-center justify-center h-9 w-9 border border-red-600 rounded-full group-disabled:border-gray-500'>
                  <FaHeart className='text-red-600 group-disabled:text-gray-500' />
                </span>
                ADD TO WATCHLIST
              </button>
              }
              <div className="border-y border-gray-500 flex items-center gap-3 max-w-80 my-10 py-2">
                <FaStar className='text-xl text-primary'/>
                <div>
                  <h4 className='text-white text-xl flex items-center'>{vote_average} <sub>/10</sub></h4>
                  <p className='text-base text-blue-300'>{vote_count} votes</p>
                </div>
              </div>
              <ul className='flex items-center flex-wrap gap-4 sm:gap-6 lg:gap-8 xl:gap-10 mb-6'>
                {
                  tabItems.map((item, i) => (
                    <li key={i}>
                      <button onClick={() => setTab(item)} className={`${tab === item ? 'border-primary text-primary' : 'border-transparent text-white'} border-b-2 text-base md:text-lg lg:text-xl xl:text-2xl font-medium capitalize`}>{item}</button>
                    </li>
                  ))
                }
              </ul>
              {
                tab === tabItems[0] && <Overview setTab={setTab} movieId={movieId} movieDetails={movieDetails}/> ||
                tab === tabItems[1] && <Reviews movieId={movieId}/> ||
                tab === tabItems[2] && <Cast movieId={movieId}/> ||
                tab === tabItems[3] && <Crew movieId={movieId}/>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MovieDetails