import moment from "moment/moment";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const ReviewCard = ({data}) => {
  const {author, author_details, created_at, content} = data || {};
  const [readMore, setReadMore] = useState(true);

  const readMoreText = () => {
    setReadMore(!readMore);
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="flex items-center justify-center h-10 w-10 rounded-md overflow-hidden border border-gray-800">
            {
              author_details?.avatar_path !== null ? 
              <img src={`https://image.tmdb.org/t/p/w500${author_details?.avatar_path}`} alt="" className="h-full w-full object-cover" />
              : <FaRegUser className="text-xl text-gray-500"/>
            }
          </span>
          <div>
            <h4 className="text-white text-base">{author}</h4>
            <p className="text-sm text-gray-400">{moment(created_at).format('MMMM DD YYYY')}, by {author}</p>
          </div>
        </div>
        {
          author_details?.rating && 
        <span className='flex items-center justify-center h-9 w-9 border-2 border-primary text-white rounded-full text-sm font-semibold'>{author_details?.rating}</span>
        }
      </div>
      <div className="rounded-md border border-gray-800 p-4 mt-4">
        <p className="text-gray-400 text-base">
          {content.length > 200 ? readMore ? content.slice(0, 200) + '...' : content.slice(0) : content} 
          {
            content.length > 200 && <span className="text-primary cursor-pointer" onClick={readMoreText}>
              {
                readMore ? ' Show More' : ' Show Less'
              }
            </span>
          }
        </p>
      </div>
    </div>
  )
}

export default ReviewCard