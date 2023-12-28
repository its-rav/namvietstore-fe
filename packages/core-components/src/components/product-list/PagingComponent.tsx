import React from 'react';

import Pagination, { PaginationType } from './Pagination';
import ProductItem, { ProductItemType } from './ProductItem';

export type PagingComponentProps = {
  productItems: ProductItemType[];
  onClickItem?: (id: string) => void;
  paginationPage: PaginationType;
  handlePageClick?: (page: number) => void;
  classItem?: string;
  classImg?: string;
  classContent?: string;
  classPaging?: string;
  previousLabel?: string;
  nextLabel?: string;
};

const PagingComponent: React.FC<PagingComponentProps> = ({
  productItems,
  onClickItem,
  paginationPage,
  handlePageClick,
  classItem = 'flex flex-col',
  classImg = 'basis-full object-contain',
  classContent = 'basis-full',
  classPaging = 'grid grid-cols-4 gap-3',
  previousLabel,
  nextLabel,
}) => {
  return (
    <div>
      <div className={classPaging}>
        {productItems.map((item) => {
          return (
            <ProductItem
              key={item.productId}
              productItem={item}
              onClick={onClickItem}
              classItem={classItem}
              classImg={classImg}
              classContent={classContent}
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
          <div>&ensp;</div>
        )}
      </div>
    </div>
  );
};

export default PagingComponent;
