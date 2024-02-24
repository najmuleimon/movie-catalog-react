import { useEffect } from "react";
import SearchResult from "../components/search/SearchResult";

const Search = () => {
    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: 'instant',
      });
      }, []);

    return (
        <>
            <SearchResult/>
        </>
    )
}

export default Search