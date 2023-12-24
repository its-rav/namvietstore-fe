import React from 'react';
import ProductItem, { ProductItemType } from './ProductItem';
import Pagination, { PaginationType } from './Pagination';

type PagingComponentProps = {
  productItems: ProductItemType[];
  showLayoutList?: boolean;
  onClickItem?: (id: string) => void;
  paginationPage: PaginationType;
  handlePageClick?: (selectedItem: { selected: number }) => void;
  onClickPreviousButton?: (previousPage: number) => void;
  onClickNextButton?: (nextPage: number) => void;
  onChangePage?: React.ChangeEventHandler<HTMLSelectElement>;
};

const PagingComponent: React.FC<PagingComponentProps> = ({
  productItems,
  showLayoutList = false,
  onClickItem,
  paginationPage,
  handlePageClick,
  onClickPreviousButton,
  onClickNextButton,
  onChangePage,
}) => {
  return (
    <div>
      <div className='grid grid-cols-12 gap-3'>
        {productItems.map((item) => {
          return showLayoutList ? (
            <div key={item.productId} className='col-span-12'>
              <ProductItem
                productItem={item}
                showLayoutList={showLayoutList}
                onClick={onClickItem}
              />
            </div>
          ) : (
            <div key={item.productId} className='col-span-6 md:col-span-4'>
              <ProductItem
                productItem={item}
                showLayoutList={showLayoutList}
                onClick={onClickItem}
              />
            </div>
          );
        })}
      </div>
      <div className='my-[20px]'>
        {paginationPage.totalPages > 1 ? (
          <Pagination
            paginationPage={paginationPage}
            handlePageClick={handlePageClick}
            onClickPreviousButton={onClickPreviousButton}
            onClickNextButton={onClickNextButton}
            onChangePage={onChangePage}
          />
        ) : (
          <div>&ensp;</div>
        )}
      </div>
    </div>
  );
};

export default PagingComponent;
