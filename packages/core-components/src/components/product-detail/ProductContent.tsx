import React from 'react';

type ProductContentProps = {
  richText?: string;
};

const ProductContent: React.FC<ProductContentProps> = ({ richText }) => {
  return richText ? (
    <div
      dangerouslySetInnerHTML={{
        __html: richText,
      }}
    />
  ) : (
    <></>
  );
};

export default ProductContent;
