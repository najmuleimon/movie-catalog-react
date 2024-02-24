import { FaRegUser } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const CastCard = ({data}) => {
  const {original_name, character, profile_path, known_for_department, gender} = data || {};
  return (
    <div className="flex flex-col lg:flex-row items-start justify-between">
      <div className="flex items-start gap-4">
        <div className="h-12 w-12 rounded-md overflow-hidden flex items-center justify-center border border-gray-800">
          {
            profile_path !== null ?
            <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt="" className='w-full h-full object-cover' />
            : <FaRegUser className="text-xl text-gray-500"/>
          }
        </div>
        <div>
          <h5 className='text-base text-blue-300 hover:text-primary transition-all duration-300'>
            {original_name}
          </h5>
          <p className="text-base text-white">Department: {known_for_department}</p>
          <p className="text-base text-white">Gender: {gender === 1 ? 'Female' : gender === 2 ? 'Male' : 'Others'}</p>
        </div>
      </div>
      {
        character && 
      <p className='text-base text-gray-500'>... Character at {character}</p>
      }
    </div>
  )
}

export default CastCard