import React from 'react';

type ProductContentProps = {
  richText?: string;
};

const ProductContent: React.FC<ProductContentProps> = ({ richText }) => {
  return richText ? (
    <div>
      <div
        dangerouslySetInnerHTML={{
          __html: richText,
        }}
      />
    </div>
  ) : null;
};

export default ProductContent;
