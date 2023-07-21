import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

export type ContentType = {
  title: string;
  statistic: number;
};

export type StatisticSectionProps = {
  statisticItems: ContentType[];
};

const StatisticSection: React.FC<StatisticSectionProps> = ({
  statisticItems,
}) => {
  return (
    <div className='flex flex-col md:flex-row w-full items-center justify-between'>
      {statisticItems.map((item) => (
        <div
          key={item.title}
          className=' flex flex-col my-5 mx-5 items-center text-white justify-center text-center relative'
        >
          <p className='text-6xl font-bold flex relative'>
            {item.statistic}
            <span className='text-2xl absolute -right-8'>
              <AiOutlinePlus />
            </span>
          </p>
          <p className='mt-4 text-lg font-medium uppercase'>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default StatisticSection;
