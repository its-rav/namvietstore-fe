import React from 'react';

export type ServiceCardItemType = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type ServiceCardProps = {
  serviceCardItem: ServiceCardItemType;
  titleClassName?: string;
  descriptionClassName?: string;
  className?: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  serviceCardItem,
  titleClassName,
  descriptionClassName,
  className,
}) => {
  return (
    <div
      className={`flex flex-col items-center font-normal justify-center rounded-md space-y-3 border-2 md:text-base sm:text-xs border-gray-200 md:w-56 md:h-52 sm:w-36 sm:h-36 font-primary my-2 mx-2   text-center px-3 py-1 bg-white ${className}`}
    >
      {serviceCardItem && (
        <>
          <div className='md:w-14 md:h-14 sm:w-9 sm:h-9'>
            {serviceCardItem.icon}
          </div>
          <p
            className={`mt-3 h-6 md:text-xl font-bold md:leading-6 sm:text-sm text-primary ${titleClassName}`}
          >
            {serviceCardItem.title}
          </p>
          <p className={`${descriptionClassName} h-10 mt-2`}>
            {serviceCardItem.description}
          </p>
        </>
      )}
    </div>
  );
};

export default ServiceCard;
