import useCredits from "../../hooks/useCredits";

// eslint-disable-next-line react/prop-types
const Overview = ({movieDetails, movieId, setTab}) => {
  const {original_title, budget, release_date, spoken_languages, runtime, production_countries} = movieDetails || {};
  const {movieCast, movieCrew} = useCredits(movieId);

  return (
    <div className="divide-y divide-gray-700">
      <p className="text-lg text-white py-3">
        <span className="text-gray-400">Original Title:</span> {original_title}
      </p>
      <p className="text-lg text-white py-3">
        <span className="text-gray-400">Budget: ${budget}</span>
      </p>
      <p className="text-lg text-white py-3">
        <span className="text-gray-400">Spoken Language: </span>
        {
          spoken_languages?.map(({english_name}, i) => <span key={i} className="mr-2 relative after:content-[','] last:after:hidden after:text-primary after:absolute after:-right-1 after:bottom-0">{english_name}</span>)
        }
      </p>
      <p className="text-lg text-white py-3">
        <span className="text-gray-400">Cast: </span>
        {
          movieCast?.slice(0, 10).map(({name, credit_id}) => (
          <span key={credit_id} className="mr-2 relative after:content-[','] last:after:hidden after:text-white after:absolute after:-right-1 after:bottom-0">{name}</span>
          ))
        }
        <button type="button" className="cursor-pointer text-primary" onClick={() => setTab('cast')}>See More</button>
      </p>
      <p className="text-lg text-white py-3">
        <span className="text-gray-400">Crew: </span>
        {
          movieCrew?.slice(0, 10).map(({name, credit_id}) => (
          <span key={credit_id} className="mr-2 relative after:content-[','] last:after:hidden after:text-white after:absolute after:-right-1 after:bottom-0">{name}</span>
          ))
        }
        <button type="button" className="cursor-pointer text-primary" onClick={() => setTab('crew')}>See More</button>
      </p>
      <p className="text-lg text-white py-3">
        <span className="text-gray-400">Release Date:</span> {release_date}</p>
      <p className="text-lg text-white py-3">
        <span className="text-gray-400">Running time:</span> {runtime} Minutes</p>
      <p className="text-lg text-white py-3">
        <span className="text-gray-400">Production Country:</span>
        {
          production_countries?.map(({name}, i) => <span key={i} className="mr-2 relative after:content-[','] last:after:hidden after:text-white after:absolute after:-right-1 after:bottom-0">{name}</span>)
        }
      </p>
    </div>
  )
}

export default Overview