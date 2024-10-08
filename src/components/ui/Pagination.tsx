import React from 'react';

interface PaginationProps {
    totalPosts: number;
    postsPerPage: number;
    onPageChange: (page: number) => void;
    currentPage: number;
}

/**
 * Pagination component that displays the page numbers and triggers the parent component to
 * re render the pagination based on the page number clicked. The state of current page is
 * updated, triggering the useEffect hook in the parent component to re render the table.
 */
const Pagination = ({ totalPosts, postsPerPage, onPageChange, currentPage }: PaginationProps) => {
    const pageNumber = Math.ceil(totalPosts / postsPerPage);
    const paginationNumbers = [];

    for (let i = 1; i <= pageNumber; i++) {
        paginationNumbers.push(i);
    }

    // Parent page change component is triggered
    const handlePageChange = (pageNumber: number) => {
        onPageChange(pageNumber);
    };

    return (
        <div>
        <div className='flex justify-center items-center mb-4'>
            <div className="join">
                {paginationNumbers.map((pageNumber, index) => (
                    <input
                    key={1}
                    className="join-item btn btn-square"
                    type="radio"
                    name="options"
                    aria-label={`${pageNumber}`}
                    checked={currentPage === pageNumber}
                    onChange={() => handlePageChange(pageNumber)}
                />
                ))}
            </div>
        </div>
        </div>
    );
};

export default Pagination;