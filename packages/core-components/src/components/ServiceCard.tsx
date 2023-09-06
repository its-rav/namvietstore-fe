import React from 'react';

export type ServiceCardItemType = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type ServiceCardProps = {
  serviceCardItem: ServiceCardItemType;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ serviceCardItem }) => {
  return (
    <div className='flex flex-col items-center font-normal justify-center rounded-md border-2 border-gray-200 md:w-56 md:h-52 sm:w-40 sm:h-40 font-primary md:my-2 md:mx-2 text-center px-3 py-1 bg-white'>
      {serviceCardItem && (
        <>
          <div className='md:w-14 md:h-14 sm:w-10 sm:h-10'>
            {serviceCardItem.icon}
          </div>
          <p className='mt-3 h-6 md:text-xl font-bold md:leading-6 sm:text-base text-primary'>
            {serviceCardItem.title}
          </p>
          <p className='h-10 mt-4 md:text-base sm:text-sm'>
            {serviceCardItem.description}
          </p>
        </>
      )}
    </div>
  );
};

export default ServiceCard;
