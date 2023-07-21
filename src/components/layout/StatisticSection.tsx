import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

export type ContentType = {
  title: string;
  statistic: string;
};

type StatisticSectionType = {
  content: ContentType[];
};

const StatisticSection: React.FC<StatisticSectionType> = ({ content }) => {
  return (
    <div className="flex items-center justify-center">
      {content.map((item) => (
        <div
          key={item.title}
          className="mr-4 w-64 items-center justify-center text-center text-white"
        >
          <p className="relative text-6xl font-bold leading-[64px]">
            {item.statistic}
            <span className="absolute top-0.5 inline-block text-4xl">
              <AiOutlinePlus />
            </span>
          </p>

          <p className="mt-4 text-lg font-medium uppercase leading-5">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StatisticSection;
