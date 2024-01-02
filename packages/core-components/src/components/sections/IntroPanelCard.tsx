import React, { SVGProps } from 'react';

type IntroPanelCardProps = {
  icon: string;
  title: string;
  description: string;
};

const IntroPanelCard: React.FC<IntroPanelCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className='flex flex-col border border-[#85000033] w-80 h-96 justify-center p-5 space-y-4'>
      <div className='flex items-center'>
        <div className='w-9 mr-3'>{icon}</div>
        <h3 className='font-primary text-base font-bold '>
          {title}
        </h3>
      </div>
      <p className='font-primary text-base text-justify'>
          {description}
        </p>
    </div>
  );
};

export default IntroPanelCard;
