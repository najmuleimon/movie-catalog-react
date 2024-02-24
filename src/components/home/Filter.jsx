import { useContext, useEffect, useState, useCallback } from "react";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import useGenres from "../../hooks/useGenres";
import instance from "../../api/tmdb";
import { FilterContext } from "../../providers/FilterProviders";

const Filter = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const {genreList} = useGenres();
  const {setActiveGenre, activeGenre, setGenreMovieList} = useContext(FilterContext);

  const handleGenreFilter = useCallback((e) => {
    const { value, checked } = e.target;
    if (checked) {
      setActiveGenre([...activeGenre, value]);
    } else {
      setActiveGenre(activeGenre.filter((e) => e !== value));
    }
  }, [activeGenre, setActiveGenre])
  
  useEffect(() => {
    const fetchGenreMovies = async () => {
      const {data} = await instance.get(`discover/movie?with_genres=${activeGenre}`);
      setGenreMovieList(data.results);
    }
    fetchGenreMovies();
  }, [activeGenre, handleGenreFilter, setGenreMovieList])


  return (
    <section className="pt-10">
      <div className="container">
        <h2 className="text-4xl font-medium mb-4 text-white">Search Movie</h2>
        <div className="flex flex-col sm:flex-row sm:items-end gap-2">
          <div>
            <p className="text-white text-base capitalize">from date: </p>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="text-white" />
          </div>
          <div>
            <p className="text-white text-base capitalize">to date:</p>
            <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} className="text-white" />
          </div>
          <Link to={`/search-result?start-date=${startDate}&end-date=${endDate}`} className="text-white px-4 leading-9 rounded-md bg-primary">Search</Link>
        </div>

        <ul className="flex items-center flex-wrap gap-2 mt-6">
          {
            genreList.map(({id, name}) => (
              <li key={id}>
                <label htmlFor={id} className="inline-block">
                  <input type="checkbox" value={id} id={id} onChange={(e) => handleGenreFilter(e)} className="opacity-0 absolute" />
                  <span className={`${activeGenre.includes(id.toString()) ? 'bg-primary border-primary' : 'border-gray-700 hover:text-primary hover:border-primary'} inline-block cursor-pointer px-3 py-1 text-white border rounded-full text-base transition-all duration-300`}>{name}</span>
                </label>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}

export default Filter