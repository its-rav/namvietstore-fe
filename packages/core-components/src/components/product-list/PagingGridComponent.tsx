import React from 'react';

import { PaginationType } from './Pagination';
import PagingComponent from './PagingComponent';
import { ProductItemType } from './ProductItem';

type PagingGridComponentProps = {
  productItems: ProductItemType[];
  paginationPage: PaginationType;
  previousLabel: string;
  nextLabel: string;
  onClickItem?: (id: string) => void;
  handlePageClick?: (page: number) => void;
};

const PagingGridComponent: React.FC<PagingGridComponentProps> = ({
  productItems,
  paginationPage,
  previousLabel,
  nextLabel,
  onClickItem,
  handlePageClick,
}) => {
  return (
    <PagingComponent
      productItems={productItems}
      paginationPage={paginationPage}
      onClickItem={onClickItem}
      handlePageClick={handlePageClick}
      classItem={'flex flex-col'}
      classImg={'basis-full object-contain'}
      classContent={'basis-full'}
      classPaging={'grid gap-3 grid-cols-2 md:!grid-cols-3'}
      previousLabel={previousLabel}
      nextLabel={nextLabel}
    />
  );
};

export default PagingGridComponent;
