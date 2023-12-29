import type { Story, StoryDefault } from '@ladle/react';
import { Pagination } from '@namviet-fe/core-ui';
import React from 'react';

import '@namviet-fe/core-ui/dist/style.css';

export default {
  title: '@nv-fe/core-ui/product-list/Pagination',
} satisfies StoryDefault<typeof Pagination>;

const handlePageClick = (page: number) => {
  console.log(`Page ${page}`);
};
//#F3F3F3 not found
export const Default: Story = () => (
  <div
    //p-[20px]  doesn't work
    className='w-screen bg-[#F3F3F3] p-[20px]'
    style={{ padding: '20px' }}
  >
    <div
      // mb-[50px] doesn't work
      className='mb-[50px]'
      style={{ margin: '50px' }}
    >
      <Pagination
        previousLabel={'Trước'}
        nextLabel={'Sau'}
        paginationPage={{ totalPages: 5, currentPage: 4 }}
        handlePageClick={handlePageClick}
      />
    </div>
    <div className='mb-[50px]' style={{ margin: '50px' }}>
      <Pagination
        previousLabel={'Previous'}
        nextLabel={'Next'}
        paginationPage={{ totalPages: 2, currentPage: 1 }}
        handlePageClick={handlePageClick}
      />
    </div>
    <div className='mb-[50px]' style={{ margin: '50px' }}>
      <Pagination
        previousLabel={'Trước'}
        nextLabel={'Sau'}
        paginationPage={{ totalPages: 100, currentPage: 100 }}
        handlePageClick={handlePageClick}
      />
    </div>
  </div>
);
