import React from 'react';

import { PaginationType } from './Pagination';
import PagingComponent from './PagingComponent';
import { ProductItemType } from './ProductItem';

type PagingListComponentProps = {
  productItems: ProductItemType[];
  paginationPage: PaginationType;
  previousLabel: string;
  nextLabel: string;
  onClickItem?: (id: string) => void;
  handlePageClick?: (page: number) => void;
};

const PagingListComponent: React.FC<PagingListComponentProps> = ({
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
      classItem={'flex flex-row'}
      classImg={'basis-2/5 object-contain'}
      classContent={'basis-3/5'}
      classPaging={'grid gap-3 grid-cols-1'}
      previousLabel={previousLabel}
      nextLabel={nextLabel}
    />
  );
};

export default PagingListComponent;
