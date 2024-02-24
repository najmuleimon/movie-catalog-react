import CastCard from '../common/CastCard';
import useCredits from '../../hooks/useCredits';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types
const Cast = ({movieId}) => {
  const {movieCast} = useCredits(movieId);
  const [itemOffset, setItemOffset] = useState(0);
  let itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = movieCast.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(movieCast.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % movieCast.length;
    setItemOffset(newOffset);
  };

  return (
    <div>
      <h4 className="text-base font-medium text-white border-b border-gray-700 mb-6">Cast</h4>
      <ul className='space-y-4'>
        {
          currentItems.map((item) => (
            <li key={item?.credit_id}>
              <CastCard data={item}/>
            </li>
          ))
        }
      </ul>

      <ReactPaginate
        breakLabel="..."
        nextLabel={<FaChevronRight className='text-gray-300'/>}
        activeClassName="active text-primary"
        className='flex items-center gap-2 text-gray-300 pagination text-sm sm:text-base mt-10 justify-end'
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel={<FaChevronLeft className='text-gray-300'/>}
        renderOnZeroPageCount={null}
      />
    </div>
  )
}

export default Cast