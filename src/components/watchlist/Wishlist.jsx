import { useContext, useEffect } from "react";
import WatchlistCard from "../common/WatchlistCard";
import { WatchlistContext } from "../../providers/WatchlistProviders";

const Wishlist = () => {
  const {addedWatchlist, setAddedWatchlist} = useContext(WatchlistContext);

  useEffect(() => {
    const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
    setAddedWatchlist(watchlist)
  }, [setAddedWatchlist])

  return (
    <section className="py-10 min-h-[calc(100vh-100px)]">
      <div className="container">
        <h2 className="text-4xl font-medium mb-4 text-white">Watchlist items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {
            addedWatchlist.length > 0 ? addedWatchlist.map((item) => <WatchlistCard key={item.id} data={item}/>)
            : <p className="text-base text-white">No Movies added to Watchlist!</p>
          }
        </div>
      </div>
    </section>
  )
}

export default Wishlist