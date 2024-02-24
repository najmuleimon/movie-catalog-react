import { createContext, useState } from "react";

export const WatchlistContext = createContext(null);

// eslint-disable-next-line react/prop-types
const WatchlistProviders = ({children}) => {
  const [addedWatchlist, setAddedWatchlist] = useState([]);

  const addToWatchlist = (data) => {
    let watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
    const updatedWatchlist = [...watchlist, data];
    localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
    setAddedWatchlist(updatedWatchlist)
  }

  const removeFromWatchlist = (data) => {
    let watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
    const updatedWatchlist = watchlist.filter(item => item.id !== data.id);
    localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
    setAddedWatchlist(updatedWatchlist);
  }

  const watchlistInfo = {
    addToWatchlist,
    removeFromWatchlist,
    addedWatchlist,
    setAddedWatchlist
  }

  return (
    <WatchlistContext.Provider value={watchlistInfo} >
      {children}
    </WatchlistContext.Provider>
  )
}

export default WatchlistProviders