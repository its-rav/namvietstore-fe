import type { Story, StoryDefault } from "@ladle/react";
import React from "react";

import { ContactTable, type ContactTableItemType } from "@namviet-fe/core-ui";
import "@namviet-fe/core-ui/dist/style.css";

export default {
  title: "@nv-fe/core-ui/ContactTable",
} satisfies StoryDefault<typeof ContactTable>;

const contactTableItem: ContactTableItemType = {
  title: "THIẾT BỊ NHIỆT NAM VIỆT",
  subTitle: "CÔNG TY TNHH",
  description:
    "Công ty TNHH Thiết bị nhiệt Nam Việt GCNDKKD: 03456789 do Sở Kế hoạch và Đầu tư Thành phố Hồ Chí Minh cấp ngày 16/10/2018 ( Đăng ký thay đổi lần thứ 1 ngày 17/1/2023)",
  address:
    "Phòng 21 Lầu 14, Tháp 1, Toà nhà Saigon Centre, 65 Lê lợi, Phường Bến Nghé, Quận 1, Tp.HCM, Việt Nam",
  phone: "+ 84 7646578696",
  email: "thaiduong.huynh@gmail.com",
};

export const Default: Story = () => (
  <div style={{ padding: "20px", backgroundColor: "#002651" }}>
    <ContactTable contactTableItem={contactTableItem} />
  </div>
);
