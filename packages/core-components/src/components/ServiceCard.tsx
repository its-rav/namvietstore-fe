import React from 'react';

export type ServiceCardItemType = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type ServiceCardType = {
  serviceCardItem: ServiceCardItemType;
  titleClassName?: string;
  descriptionClassName?: string;
  className?: string;
};

const ServiceCard: React.FC<ServiceCardType> = ({
  serviceCardItem,
  titleClassName,
  descriptionClassName,
  className,
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-md space-y-3 border-2 md:text-base sm:text-xs border-gray-200 md:w-56 md:h-52 sm:w-40 sm:h-40 font-primary text-center px-2 py-2 bg-white ${className}`}
    >
      {serviceCardItem && (
        <>
          <div className='md:w-14 md:h-14 sm:w-10 sm:h-10'>
            {serviceCardItem.icon}
          </div>
          <p
            className={`mt-3 md:text-xl font-bold md:leading-6 sm:text-sm text-primary ${titleClassName}`}
          >
            {serviceCardItem.title}
          </p>
          <p className={`${descriptionClassName}`}>
            {serviceCardItem.description}
          </p>
        </>
      )}
    </div>
  );
};

export default ServiceCard;
