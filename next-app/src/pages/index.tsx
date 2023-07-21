import Image from "next/image";
import HomeLayout from "@/components/layouts/home-layout";
import { Button, DropdownButton, StatisticSection } from "@namviet-fe/core-ui";
export default function Home() {
  return (
    <HomeLayout>
      <Button variant="default" size="base" content="Đọc thêm" />
      <StatisticSection
        content={[
          {
            title: "mặt hàng",
            statistic: "500",
          },
          {
            title: "khách hàng hài lòng",
            statistic: "100",
          },
          {
            title: "dự án thành công",
            statistic: "200",
          },
          {
            title: "thành lập doanh nghiệp",
            statistic: "2010",
          },
        ]}
      />
    </HomeLayout>
  );
}
