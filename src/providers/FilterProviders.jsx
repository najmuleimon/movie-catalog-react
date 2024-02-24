import { createContext, useState } from 'react'

export const FilterContext = createContext(null);

// eslint-disable-next-line react/prop-types
const FilterProviders = ({children}) => {
    const [activeGenre, setActiveGenre] = useState([]);
    const [genreMovieList, setGenreMovieList] = useState([]);
    
    const filterInfo = {
        activeGenre,
setActiveGenre,
genreMovieList,
setGenreMovieList
    };
    return (
        <FilterContext.Provider value={filterInfo}>
            {children}
        </FilterContext.Provider>
    )
}

export default FilterProviders