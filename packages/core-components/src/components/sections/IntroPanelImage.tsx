import React from 'react';

type IntroPanelImageProps = {
  image: string;
};

const IntroPanelImage: React.FC<IntroPanelImageProps> = ({
  image
}) => {
  return (
    <div>
      <img 
        className='w-full h-[400px]'
        src={image}
      />
    </div>
  );
};

export default IntroPanelImage;
