import React from 'react';
import ReactPaginate from 'react-paginate';

export type PaginationType = {
  totalPages: number;
  currentPage: number;
};

type PaginationProps = {
  paginationPage: PaginationType;
  previousLabel?: string;
  nextLabel?: string;
  handlePageClick?: (page: number) => void;
};

const previousButton = (
  <button
    className='bg-white relative h-[30px] w-[30px] rounded-[2px] text-center align-middle  text-[#575757] transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
    type='button'
  >
    <span className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
      {`<`}
    </span>
  </button>
);

const nextButton = (
  <button
    className='bg-white relative h-[30px] w-[30px] rounded-[2px] text-center align-middle  text-[#575757] transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
    type='button'
  >
    <span className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
      {`>`}
    </span>
  </button>
);

const breakLabel = (
  <button
    className='bg-white relative h-[30px] w-[30px] rounded-[2px] text-center align-middle  text-[#575757] transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
    type='button'
  >
    <span className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
      ...
    </span>
  </button>
);

const Pagination: React.FC<PaginationProps> = ({
  paginationPage,
  previousLabel,
  nextLabel,
  handlePageClick,
}) => {
  const showNextButton =
    paginationPage.currentPage !== paginationPage.totalPages;
  const showPreviousButton = paginationPage.currentPage !== 1;

  return (
    <div className='flex justify-center'>
      <ReactPaginate
        forcePage={paginationPage.currentPage - 1}
        breakLabel={breakLabel}
        nextLabel={showNextButton ? nextButton : null}
        onPageChange={(selectedItem) => {
          handlePageClick?.(selectedItem.selected);
        }}
        pageRangeDisplayed={3}
        pageCount={paginationPage.totalPages}
        previousLabel={showPreviousButton ? previousButton : null}
        renderOnZeroPageCount={null}
        containerClassName='hidden md:flex gap-2 font-primary text-base font-medium'
        pageClassName='bg-white relative h-[30px] w-[30px] rounded-[2px] text-center align-middle text-[#575757] transition-all hover:bg-gray-900/10'
        pageLinkClassName='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
        activeClassName='!bg-[#850000] text-white shadow-md shadow-gray-900/10 transition-all focus:opacity-[0.85] focus:shadow-none hover:bg-red-900'
      />
      <div className='flex md:hidden gap-[5px] font-primary text-sm/4 font-normal'>
        <button
          disabled={!showPreviousButton}
          className='bg-[#850000] relative h-[36px] w-[60px] rounded-[2px] text-center align-middle  text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none'
          type='button'
          onClick={() => {
            handlePageClick?.(paginationPage.currentPage - 1);
          }}
        >
          <span className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
            {previousLabel}
          </span>
        </button>
        <div className='grid '>
          <select
            defaultValue={paginationPage.currentPage}
            onChange={(e) => {
              e.preventDefault();
              handlePageClick?.(parseInt(e.target.value));
            }}
            className='appearance-none row-start-1 col-start-1 bg-white px-[10px] border-[#575757] border-[1px] h-[36px] w-[60px] rounded-[2px]  text-[#575757] transition-all'
          >
            {Array.from(
              { length: paginationPage.totalPages },
              (_, i) => i + 1
            ).map((page: number) => {
              return (
                <option key={page} value={page}>
                  {page}
                </option>
              );
            })}
          </select>
          <svg
            className='row-start-1 col-start-1 justify-self-end self-center relative right-[10px]'
            width='9'
            height='6'
            viewBox='0 0 9 6'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M1.5 1.5L4.5 4.5L7.5 1.5'
              stroke='#575757'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
        <button
          disabled={!showNextButton}
          className='bg-[#850000] relative h-[36px] w-[60px] rounded-[2px] text-center align-middle  text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none'
          type='button'
          onClick={() => {
            handlePageClick?.(paginationPage.currentPage + 1);
          }}
        >
          <span className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
            {nextLabel}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
