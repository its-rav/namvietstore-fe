import type { Story, StoryDefault } from "@ladle/react";
import { type StatisticItemType, StatisticSection } from "@namviet-fe/core-ui";
import React from "react";
import "regenerator-runtime/runtime";

const statisticItems: StatisticItemType[] = [
  {
    title: "mặt hàng",
    statistic: 500,
  },
  {
    title: "khách hàng hài lòng",
    statistic: 100,
  },
  {
    title: "dự án thành công",
    statistic: 200,
  },
  {
    title: "thành lập doanh nghiệp",
    statistic: 2010,
  },
];

export default {
  title: "@nv-fe/core-ui/layout/StatisticSection",
} satisfies StoryDefault<typeof StatisticSection>;

export const Default: Story = () => (
  <div
    style={{
      width: "100%",
      backgroundColor: "black",
    }}
  >
    <StatisticSection statisticItems={statisticItems} />
  </div>
);
