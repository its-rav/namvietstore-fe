import React from 'react';

import Pagination, { PaginationType } from './Pagination';
import ProductItem, { ProductItemType } from './ProductItem';

export type PagingComponentProps = {
  productItems: ProductItemType[];
  onClickItem?: (id: string) => void;
  paginationPage: PaginationType;
  handlePageClick?: (page: number) => void;
  layout?: 'list' | 'grid';
  previousLabel?: string;
  nextLabel?: string;
};

const PagingComponent: React.FC<PagingComponentProps> = ({
  productItems,
  onClickItem,
  paginationPage,
  handlePageClick,
  layout = 'list',
  previousLabel,
  nextLabel,
}) => {
  return (
    <>
      <div
        className={
          layout === 'list'
            ? 'grid gap-3 grid-cols-1'
            : 'grid gap-3 grid-cols-2 md:!grid-cols-4'
        }
      >
        {productItems.map((item) => {
          return (
            <ProductItem
              key={item.productId}
              productItem={item}
              onClick={onClickItem}
              classItem={layout === 'list' ? 'flex flex-row' : 'flex flex-col'}
              classImg={
                layout === 'list'
                  ? 'basis-2/5 object-contain'
                  : 'basis-full object-contain'
              }
              classContent={layout === 'list' ? 'basis-3/5' : 'basis-full'}
            />
          );
        })}
      </div>
      <div className='my-[20px]'>
        {paginationPage.totalPages > 1 ? (
          <Pagination
            previousLabel={previousLabel}
            nextLabel={nextLabel}
            paginationPage={paginationPage}
            handlePageClick={handlePageClick}
          />
        ) : (
          <>&ensp;</>
        )}
      </div>
    </>
  );
};

export default PagingComponent;
