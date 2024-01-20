import { BlueCheck, WhiteCheck } from '@/icons';
import React, {useState} from 'react';

type ProductItemProps = {
  id?: string;
  productName: string;
  productImage: string;
  productDescription: string;
};

export type ProductListProps = {
  products: Array<ProductItemProps>;
};

const ProductCollapse: React.FC<ProductItemProps> = ({ 
  productName, 
  productImage, 
  productDescription,
}) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  }
  return (
    <div>
      <button
        type="button"
        onClick={toggleCollapse}
        className={`flex border border-solid ${collapsed ? "bg-[#FFE1E1]" : "bg-[#002651]"} w-full h-[50px] items-center px-[20px]`}
      >
        <div className='mr-4'>
          {collapsed ? <BlueCheck className='w-5 h-5'/> : <WhiteCheck className='w-5 h-5'/>}
        </div>
        <p className={`${collapsed ? "bg-[#FFE1E1]" : "text-[#FFFFFF]"}`}>{productName}</p>
      </button>
      <div hidden={collapsed} >
        <div className='flex justify-center'>
            <img 
              className='flex w-[300px] h-[200px]'
              src={productImage} 
              alt={productName}
            />
          <p className='font-primary text-base text-justify'>
            {productDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

const ProductListCollapse: React.FC<ProductListProps> = ({
  products
}) => {
  return (
    <>
      <div className='mt-10px pl-[13px] mb-[16px] md:mb-[11px] border-l-[3px] border-primary text-md font-medium leading-[10px]'>
        <h1 className='text-md md:text-[18px] font-bold py-[10px] text-primary'>SẢN PHẨM</h1>
      </div>
      <div className='space-y-2'>
        {             
          products.map((product) => {
              return (
                <div key={product.id}>
                  <ProductCollapse 
                    productName={product.productName}
                    productImage={product.productImage}
                    productDescription={product.productDescription}
                  />
                </div>
              )
          })
        }
      </div>             
    </>
  );
};

export default ProductListCollapse;
