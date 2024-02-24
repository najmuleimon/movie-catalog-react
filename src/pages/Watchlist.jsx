import { useEffect } from "react";
import Wishlist from "../components/watchlist/Wishlist";

const Watchlist = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
  });
  }, []);

  return (
    <>
      <Wishlist/>
    </>
  )
}

export default Watchlist