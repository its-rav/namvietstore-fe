import React from 'react';

export type FeaturesCardItemType = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type FeaturesCardProps = {
  featuresCardItem?: FeaturesCardItemType;
};

const FeaturesCard: React.FC<FeaturesCardProps> = ({ featuresCardItem }) => {
  return (
    <div className='flex flex-col items-center font-normal justify-center rounded-md border-2 border-gray-200 md:w-56 md:h-52 sm:w-44 sm:h-44 font-primary text-center px-3 py-1 bg-white'>
      {featuresCardItem && (
        <>
          <div className='md:w-14 md:h-14 sm:w-10 sm:h-10'>
            {featuresCardItem.icon}
          </div>
          <p className='mt-3 h-6 md:text-xl font-bold md:leading-6 sm:text-base text-primary'>
            {featuresCardItem.title}
          </p>
          <p className='h-10 mt-4 md:text-base sm:text-sm font-normal'>
            {featuresCardItem.description}
          </p>
        </>
      )}
    </div>
  );
};

export default FeaturesCard;
