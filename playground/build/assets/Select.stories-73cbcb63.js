import { R as o, a as c } from "./index-e3d0727e.js";
import { F as v, E as b, T as w } from "./core-ui.es-40c0b244.js";
var d = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  m = o.createContext && o.createContext(d),
  a =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (a =
          Object.assign ||
          function (e) {
            for (var t, n = 1, l = arguments.length; n < l; n++) {
              t = arguments[n];
              for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }),
        a.apply(this, arguments)
      );
    },
  L =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var l in e)
        Object.prototype.hasOwnProperty.call(e, l) &&
          t.indexOf(l) < 0 &&
          (n[l] = e[l]);
      if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var r = 0, l = Object.getOwnPropertySymbols(e); r < l.length; r++)
          t.indexOf(l[r]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, l[r]) &&
            (n[l[r]] = e[l[r]]);
      return n;
    };
function f(e) {
  return (
    e &&
    e.map(function (t, n) {
      return o.createElement(t.tag, a({ key: n }, t.attr), f(t.child));
    })
  );
}
function g(e) {
  return function (t) {
    return o.createElement(O, a({ attr: a({}, e.attr) }, t), f(e.child));
  };
}
function O(e) {
  var t = function (n) {
    var l = e.attr,
      r = e.size,
      s = e.title,
      y = L(e, ["attr", "size", "title"]),
      u = r || n.size || "1em",
      i;
    return (
      n.className && (i = n.className),
      e.className && (i = (i ? i + " " : "") + e.className),
      o.createElement(
        "svg",
        a(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          l,
          y,
          {
            className: i,
            style: a(a({ color: e.color || n.color }, n.style), e.style),
            height: u,
            width: u,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        s && o.createElement("title", null, s),
        e.children
      )
    );
  };
  return m !== void 0
    ? o.createElement(m.Consumer, null, function (n) {
        return t(n);
      })
    : t(d);
}
function p(e) {
  return g({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M32 0C14.3 0 0 14.3 0 32v464c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V32C64 14.3 49.7 0 32 0zm267.9 303.6c-57.2-15.1-111.7-28.8-203.9 11.1V384c185.7-92.2 221.7 53.3 397.5-23.1 11.4-5 18.5-16.5 18.5-28.8v-36c-43.6 17.3-80.2 24.1-112.1 24.1-37.4-.1-68.9-8.4-100-16.6zm0-96c-57.2-15.1-111.7-28.8-203.9 11.1v61.5c94.8-37.6 154.6-22.7 212.1-7.6 57.2 15.1 111.7 28.8 203.9-11.1V200c-43.6 17.3-80.2 24.1-112.1 24.1-37.4 0-68.9-8.3-100-16.5zm9.5-125.9c51.8 15.6 97.4 29 202.6-20.1V30.8c0-25.1-26.8-38.1-49.4-26.6C291.3 91.5 305.4-62.2 96 32.4v151.9c94.8-37.5 154.6-22.7 212.1-7.6 57.2 15 111.7 28.7 203.9-11.1V96.7c-53.6 23.5-93.3 31.4-126.1 31.4s-59-7.8-85.7-15.9c-4-1.2-8.1-2.4-12.1-3.5V75.5c7.2 2 14.3 4.1 21.3 6.2zM160 128.1c-8.8 0-16-7.1-16-16 0-8.8 7.2-16 16-16s16 7.1 16 16-7.2 16-16 16zm0-55.8c-8.8 0-16-7.1-16-16 0-8.8 7.2-16 16-16s16 7.1 16 16c0 8.8-7.2 16-16 16zm64 47.9c-8.8 0-16-7.1-16-16 0-8.8 7.2-16 16-16s16 7.1 16 16c0 8.8-7.2 16-16 16zm0-55.9c-8.8 0-16-7.1-16-16 0-8.8 7.2-16 16-16s16 7.1 16 16c0 8.8-7.2 16-16 16z",
        },
      },
    ],
  })(e);
}
function E(e) {
  return g({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M256 18v29h238V18H256zm-208 .002l-9.404 19.053-21.03 3.056 15.217 14.833L29.19 75.89l18.812-9.892 18.807 9.89-3.593-20.945L78.434 40.11l-21.032-3.055L48 18.002zm80 0l-9.404 19.053-21.032 3.056 15.217 14.833-3.59 20.946L128 65.997l18.807 9.89-3.592-20.945 15.217-14.832-21.03-3.055L128 18.002zm80 0l-9.404 19.053-21.032 3.056 15.217 14.833-3.59 20.946L208 65.997l18.807 9.89-3.592-20.945 15.217-14.832-21.03-3.055L208 18.002zm-39.404 54.385L159.19 91.44l-21.028 3.056 15.217 14.832-3.593 20.945 18.81-9.89 18.807 9.89-3.59-20.945 15.215-14.832-21.032-3.057-9.402-19.053zm-79.998 1.998L79.193 93.44l-21.03 3.056 15.218 14.832-3.593 20.945 18.81-9.89 18.807 9.89-3.59-20.945 15.215-14.832L98 93.44l-9.402-19.055zM256 81v30h238V81H256zM48 130.004l-9.404 19.053-21.03 3.056 15.217 14.832-3.592 20.946L48.003 178l18.807 9.89-3.593-20.945 15.217-14.832-21.032-3.056L48 130.004zm80 0l-9.404 19.053-21.032 3.056 15.217 14.832-3.59 20.946L128 178l18.807 9.89-3.592-20.945 15.217-14.832-21.03-3.056L128 130.004zm80 0l-9.404 19.053-21.032 3.056 15.217 14.832-3.59 20.946L208 178l18.807 9.89-3.592-20.945 15.217-14.832-21.03-3.056L208 130.004zM256 145v30h238v-30H256zM88.598 186.385l-9.405 19.054-21.03 3.056 15.218 14.832-3.593 20.945 18.81-9.89 18.807 9.89-3.59-20.945 15.215-14.832L98 205.44l-9.402-19.055zm79.998.002l-9.405 19.052-21.028 3.056 15.217 14.832-3.593 20.945 18.81-9.89 18.807 9.89-3.59-20.945 15.215-14.832-21.032-3.057-9.402-19.053zM256 209v30h238v-30H256zM18 273v30h476v-30H18zm0 64v30h476v-30H18zm0 64v30h476v-30H18zm0 64v29h476v-29H18z",
        },
      },
    ],
  })(e);
}
const T = { title: "@nv-fe/core-ui/buttons/Select" },
  h = ({ selected: e, options: t }) =>
    c("div", {
      style: { float: "right" },
      children: c(v, { selected: e, options: t }),
    });
h.defaultProps = {
  selected: "one",
  options: [
    { key: "one", label: "Option 1", icon: c(p, {}) },
    { key: "two", label: "Option 2", icon: c(E, {}) },
  ],
};
h.argTypes = {};
const z = ({ selected: e, options: t }) =>
  c("div", {
    style: { float: "right" },
    children: c(v, { selected: e, options: t }),
  });
z.defaultProps = {
  selected: "vn",
  options: [
    { key: "en", label: "English", icon: c(b, {}) },
    { key: "vn", label: "Tiếng Việt", icon: c(w, {}) },
  ],
};
z.argTypes = {};
typeof window < "u" &&
  window.document &&
  window.document.createElement &&
  document.documentElement.setAttribute("data-storyloaded", "");
export { h as Default, z as LanguageSelect, T as default };
