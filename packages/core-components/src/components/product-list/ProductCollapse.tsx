import { BlueCheck, WhiteCheck } from '@/icons';
import React, {useState} from 'react';

type ProductItemProps = {
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
  const [closeCollapse, setCloseCollapse] = useState(true);
  const [navColor, setNavColor] = useState('bg-[#FFE1E1]');
  const [nameColor, setNameColor] = useState('text-[#002651]');
  const toggleCollapse = () => {
    setCloseCollapse(!closeCollapse);
    if (closeCollapse) {
      setNavColor('bg-[#002651]');
      setNameColor('text-[#FFFFFF]');
    }
    else {
      setNameColor('text-[#002651]');
      setNavColor('bg-[#FFE1E1]');
    }
  }
  return (
    <div>
      <button
        type="button"
        onClick={toggleCollapse}
        className={`flex border border-solid ${navColor} w-full h-[50px] items-center px-[20px]`}
      >
        <div className='mr-4'>
          {closeCollapse ? <BlueCheck className='w-5 h-5'/> : <WhiteCheck className='w-5 h-5'/>}
        </div>
        <p className={`${nameColor}`}>{productName}</p>
      </button>
      <div
        id="demo" 
        hidden={closeCollapse}
      >
        <div className='flex justify-center md:flex-col'>
          <div className='flex justify-center'>
            <img 
              className='flex w-[900px] h-[100px] md:w-[300px] md:h-[200px]'
              src={productImage} 
              alt={productName}
            />
          </div>
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
          products.map((product, index) => {
              return (
                <div key={index}>
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
