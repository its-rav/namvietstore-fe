import type { Story, StoryDefault } from "@ladle/react";
import React from "react";

import { Contact, type ContactItemType } from "@namviet-fe/core-ui";
import "@namviet-fe/core-ui/dist/style.css";
import { TranslationDecorators } from "./decorators/TranslationDecorators";

export default {
  title: "@nv-fe/core-ui/Contact",
  decorators: [...TranslationDecorators],
} satisfies StoryDefault<typeof Contact>;

const contactItem: ContactItemType = {
  phones: ["0969615251", "0969615252"],
  faxes: ["0969615253"],
  addresses: [
    "Phòng 21 Lầu 14, Tháp 1, Lê Lợi, Phường Bến Thành, Quận 1, Saigon Centre, 65 Lê Lợi, Phường Bến Thành, Quận 1, Ho Chi Minh",
  ],
  taxCodes: ["0969615254"],
  emails: ["contact@abc.com"],
  websites: ["www.abc.com"],
};

export const Default: Story = () => (
  <div
    style={{
      width: "100%",
      padding: "20px",
      backgroundColor: "#E3E3E3",
    }}
  >
    <div style={{ backgroundColor: "white" }}>
      <Contact contactItem={contactItem} />
    </div>
  </div>
);
