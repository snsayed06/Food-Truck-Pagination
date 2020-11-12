import React from "react";
import './Pagination.css';

const PaginationTest = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}) => {
  // Add Pagination pages
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
  <div>
      <div className='content'>
          <div className='horz-list'>
              <ul>               
                 <li className={currentPage === 1 ? 'disabled' : 'red'}
                     onClick={() => paginate(currentPage - 1)}>
                   Previous
                 </li>

                  {pageNumbers.map((number) => (
                 <li key={number}
                     className={currentPage === number ? 'active' : ''}
                     onClick={() => paginate(number)}>
                        {number}            
                 </li>
                  ))}

                 <li 
                 className={currentPage === Math.ceil(totalPosts / postsPerPage) ? 'disabled' : 'green'} 
                 onClick={() => paginate(currentPage + 1)} >
                   Next
                 </li>             
              </ul>
           </div>       
        </div>
   </div>
  );
};

export default PaginationTest;
