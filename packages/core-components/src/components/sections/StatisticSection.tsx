import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

export type StatisticItemType = {
  title: string;
  statistic: number;
};

export type StatisticSectionProps = {
  statisticItems: StatisticItemType[];
};

const StatisticSection: React.FC<StatisticSectionProps> = ({
  statisticItems,
}) => {
  return (
    <div className='grid grid-cols-2 md:flex md:flex-row w-full items-start md:items-center justify-between'>
      {statisticItems.map((item) => (
        <div
          key={item.title}
          className='flex flex-col my-5 mx-5 items-center text-white justify-center text-center relative'
        >
          <p className='text-2xl md:text-6xl font-bold flex relative'>
            {item.statistic}
            <span className='text-xl md:text-2xl absolute -right-8'>
              <AiOutlinePlus />
            </span>
          </p>
          <p className='text-base mt-4 font-semibold md:text-lg md:font-medium uppercase'>
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StatisticSection;
