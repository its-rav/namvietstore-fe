import React from 'react';

type IntroPanelCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const IntroPanelCard: React.FC<IntroPanelCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className='flex flex-col border border-[#85000033] max-w-xs h-[369px] bg-white p-5 space-y-4'>
      <div className='flex items-center mt-[20px] mb-[10px]'>
        <div className='w-9 mr-3'>{icon ? icon : <></>}</div>
        <h3 className='font-primary text-base font-bold '>{title}</h3>
      </div>
      <p className='font-primary text-base text-justify leading-[18px]'>{description}</p>
    </div>
  );
};

export default IntroPanelCard;
