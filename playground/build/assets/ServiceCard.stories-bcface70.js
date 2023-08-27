import { j as n, a as e } from "./index-e3d0727e.js";
import { S as t, P as i } from "./core-ui.es-40c0b244.js";
const o = {
    icon: e(i, {}),
    title: "Sản phẩm",
    description: "Đội ngũ giàu kinh nghiệm, có chuyên môn",
  },
  r = { title: "@nv-fe/core-ui/ServiceCard" },
  s = () =>
    n("div", {
      style: {
        width: "100%",
        padding: "20px",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
      },
      children: [e(t, { serviceCardItem: o }), " "],
    }),
  a = () =>
    e("div", {
      style: {
        width: "100%",
        padding: "20px",
        backgroundColor: "black",
        justifyContent: "center",
        display: "flex",
      },
      children: e(t, {}),
    });
typeof window < "u" &&
  window.document &&
  window.document.createElement &&
  document.documentElement.setAttribute("data-storyloaded", "");
export { s as Default, a as NoContent, r as default };
