function dm(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const l of i.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
var $o =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Eo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Aa = { exports: {} },
  Ul,
  vc;
function fm() {
  if (vc) return Ul;
  vc = 1;
  var e = 1e3,
    t = e * 60,
    n = t * 60,
    r = n * 24,
    o = r * 7,
    i = r * 365.25;
  Ul = function (d, s) {
    s = s || {};
    var f = typeof d;
    if (f === "string" && d.length > 0) return l(d);
    if (f === "number" && isFinite(d)) return s.long ? a(d) : u(d);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" +
        JSON.stringify(d)
    );
  };
  function l(d) {
    if (((d = String(d)), !(d.length > 100))) {
      var s =
        /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
          d
        );
      if (s) {
        var f = parseFloat(s[1]),
          p = (s[2] || "ms").toLowerCase();
        switch (p) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return f * i;
          case "weeks":
          case "week":
          case "w":
            return f * o;
          case "days":
          case "day":
          case "d":
            return f * r;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return f * n;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return f * t;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return f * e;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return f;
          default:
            return;
        }
      }
    }
  }
  function u(d) {
    var s = Math.abs(d);
    return s >= r
      ? Math.round(d / r) + "d"
      : s >= n
      ? Math.round(d / n) + "h"
      : s >= t
      ? Math.round(d / t) + "m"
      : s >= e
      ? Math.round(d / e) + "s"
      : d + "ms";
  }
  function a(d) {
    var s = Math.abs(d);
    return s >= r
      ? c(d, s, r, "day")
      : s >= n
      ? c(d, s, n, "hour")
      : s >= t
      ? c(d, s, t, "minute")
      : s >= e
      ? c(d, s, e, "second")
      : d + " ms";
  }
  function c(d, s, f, p) {
    var v = s >= f * 1.5;
    return Math.round(d / f) + " " + p + (v ? "s" : "");
  }
  return Ul;
}
function pm(e) {
  (n.debug = n),
    (n.default = n),
    (n.coerce = a),
    (n.disable = i),
    (n.enable = o),
    (n.enabled = l),
    (n.humanize = fm()),
    (n.destroy = c),
    Object.keys(e).forEach((d) => {
      n[d] = e[d];
    }),
    (n.names = []),
    (n.skips = []),
    (n.formatters = {});
  function t(d) {
    let s = 0;
    for (let f = 0; f < d.length; f++)
      (s = (s << 5) - s + d.charCodeAt(f)), (s |= 0);
    return n.colors[Math.abs(s) % n.colors.length];
  }
  n.selectColor = t;
  function n(d) {
    let s,
      f = null,
      p,
      v;
    function g(...C) {
      if (!g.enabled) return;
      const y = g,
        h = Number(new Date()),
        w = h - (s || h);
      (y.diff = w),
        (y.prev = s),
        (y.curr = h),
        (s = h),
        (C[0] = n.coerce(C[0])),
        typeof C[0] != "string" && C.unshift("%O");
      let A = 0;
      (C[0] = C[0].replace(/%([a-zA-Z%])/g, (N, k) => {
        if (N === "%%") return "%";
        A++;
        const O = n.formatters[k];
        if (typeof O == "function") {
          const $ = C[A];
          (N = O.call(y, $)), C.splice(A, 1), A--;
        }
        return N;
      })),
        n.formatArgs.call(y, C),
        (y.log || n.log).apply(y, C);
    }
    return (
      (g.namespace = d),
      (g.useColors = n.useColors()),
      (g.color = n.selectColor(d)),
      (g.extend = r),
      (g.destroy = n.destroy),
      Object.defineProperty(g, "enabled", {
        enumerable: !0,
        configurable: !1,
        get: () =>
          f !== null
            ? f
            : (p !== n.namespaces && ((p = n.namespaces), (v = n.enabled(d))),
              v),
        set: (C) => {
          f = C;
        },
      }),
      typeof n.init == "function" && n.init(g),
      g
    );
  }
  function r(d, s) {
    const f = n(this.namespace + (typeof s > "u" ? ":" : s) + d);
    return (f.log = this.log), f;
  }
  function o(d) {
    n.save(d), (n.namespaces = d), (n.names = []), (n.skips = []);
    let s;
    const f = (typeof d == "string" ? d : "").split(/[\s,]+/),
      p = f.length;
    for (s = 0; s < p; s++)
      f[s] &&
        ((d = f[s].replace(/\*/g, ".*?")),
        d[0] === "-"
          ? n.skips.push(new RegExp("^" + d.slice(1) + "$"))
          : n.names.push(new RegExp("^" + d + "$")));
  }
  function i() {
    const d = [...n.names.map(u), ...n.skips.map(u).map((s) => "-" + s)].join(
      ","
    );
    return n.enable(""), d;
  }
  function l(d) {
    if (d[d.length - 1] === "*") return !0;
    let s, f;
    for (s = 0, f = n.skips.length; s < f; s++)
      if (n.skips[s].test(d)) return !1;
    for (s = 0, f = n.names.length; s < f; s++)
      if (n.names[s].test(d)) return !0;
    return !1;
  }
  function u(d) {
    return d
      .toString()
      .substring(2, d.toString().length - 2)
      .replace(/\.\*\?$/, "*");
  }
  function a(d) {
    return d instanceof Error ? d.stack || d.message : d;
  }
  function c() {
    console.warn(
      "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
    );
  }
  return n.enable(n.load()), n;
}
var hm = pm;
(function (e, t) {
  (t.formatArgs = r),
    (t.save = o),
    (t.load = i),
    (t.useColors = n),
    (t.storage = l()),
    (t.destroy = (() => {
      let a = !1;
      return () => {
        a ||
          ((a = !0),
          console.warn(
            "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
          ));
      };
    })()),
    (t.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33",
    ]);
  function n() {
    return typeof window < "u" &&
      window.process &&
      (window.process.type === "renderer" || window.process.__nwjs)
      ? !0
      : typeof navigator < "u" &&
        navigator.userAgent &&
        navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
      ? !1
      : (typeof document < "u" &&
          document.documentElement &&
          document.documentElement.style &&
          document.documentElement.style.WebkitAppearance) ||
        (typeof window < "u" &&
          window.console &&
          (window.console.firebug ||
            (window.console.exception && window.console.table))) ||
        (typeof navigator < "u" &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
          parseInt(RegExp.$1, 10) >= 31) ||
        (typeof navigator < "u" &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
  }
  function r(a) {
    if (
      ((a[0] =
        (this.useColors ? "%c" : "") +
        this.namespace +
        (this.useColors ? " %c" : " ") +
        a[0] +
        (this.useColors ? "%c " : " ") +
        "+" +
        e.exports.humanize(this.diff)),
      !this.useColors)
    )
      return;
    const c = "color: " + this.color;
    a.splice(1, 0, c, "color: inherit");
    let d = 0,
      s = 0;
    a[0].replace(/%[a-zA-Z%]/g, (f) => {
      f !== "%%" && (d++, f === "%c" && (s = d));
    }),
      a.splice(s, 0, c);
  }
  t.log = console.debug || console.log || (() => {});
  function o(a) {
    try {
      a ? t.storage.setItem("debug", a) : t.storage.removeItem("debug");
    } catch {}
  }
  function i() {
    let a;
    try {
      a = t.storage.getItem("debug");
    } catch {}
    return !a && typeof process < "u" && "env" in process && (a = {}.DEBUG), a;
  }
  function l() {
    try {
      return localStorage;
    } catch {}
  }
  e.exports = hm(t);
  const { formatters: u } = e.exports;
  u.j = function (a) {
    try {
      return JSON.stringify(a);
    } catch (c) {
      return "[UnexpectedJSONParseError]: " + c.message;
    }
  };
})(Aa, Aa.exports);
var gm = Aa.exports;
const mm = Eo(gm),
  bt = mm("ladle"),
  pf = "%[a-f0-9]{2}",
  Ec = new RegExp("(" + pf + ")|([^%]+?)", "gi"),
  wc = new RegExp("(" + pf + ")+", "gi");
function ba(e, t) {
  try {
    return [decodeURIComponent(e.join(""))];
  } catch {}
  if (e.length === 1) return e;
  t = t || 1;
  const n = e.slice(0, t),
    r = e.slice(t);
  return Array.prototype.concat.call([], ba(n), ba(r));
}
function ym(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    let t = e.match(Ec) || [];
    for (let n = 1; n < t.length; n++)
      (e = ba(t, n).join("")), (t = e.match(Ec) || []);
    return e;
  }
}
function vm(e) {
  const t = { "%FE%FF": "��", "%FF%FE": "��" };
  let n = wc.exec(e);
  for (; n; ) {
    try {
      t[n[0]] = decodeURIComponent(n[0]);
    } catch {
      const o = ym(n[0]);
      o !== n[0] && (t[n[0]] = o);
    }
    n = wc.exec(e);
  }
  t["%C2"] = "�";
  const r = Object.keys(t);
  for (const o of r) e = e.replace(new RegExp(o, "g"), t[o]);
  return e;
}
function Em(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Expected `encodedURI` to be of type `string`, got `" + typeof e + "`"
    );
  try {
    return decodeURIComponent(e);
  } catch {
    return vm(e);
  }
}
function hf(e, t) {
  if (!(typeof e == "string" && typeof t == "string"))
    throw new TypeError("Expected the arguments to be of type `string`");
  if (e === "" || t === "") return [];
  const n = e.indexOf(t);
  return n === -1 ? [] : [e.slice(0, n), e.slice(n + t.length)];
}
function wm(e, t) {
  const n = {};
  if (Array.isArray(t))
    for (const r of t) {
      const o = Object.getOwnPropertyDescriptor(e, r);
      o != null && o.enumerable && Object.defineProperty(n, r, o);
    }
  else
    for (const r of Reflect.ownKeys(e)) {
      const o = Object.getOwnPropertyDescriptor(e, r);
      if (o.enumerable) {
        const i = e[r];
        t(r, i, e) && Object.defineProperty(n, r, o);
      }
    }
  return n;
}
const Sm = (e) => e == null,
  Cm = (e) =>
    encodeURIComponent(e).replace(
      /[!'()*]/g,
      (t) => `%${t.charCodeAt(0).toString(16).toUpperCase()}`
    ),
  ka = Symbol("encodeFragmentIdentifier");
function _m(e) {
  switch (e.arrayFormat) {
    case "index":
      return (t) => (n, r) => {
        const o = n.length;
        return r === void 0 ||
          (e.skipNull && r === null) ||
          (e.skipEmptyString && r === "")
          ? n
          : r === null
          ? [...n, [Ce(t, e), "[", o, "]"].join("")]
          : [...n, [Ce(t, e), "[", Ce(o, e), "]=", Ce(r, e)].join("")];
      };
    case "bracket":
      return (t) => (n, r) =>
        r === void 0 ||
        (e.skipNull && r === null) ||
        (e.skipEmptyString && r === "")
          ? n
          : r === null
          ? [...n, [Ce(t, e), "[]"].join("")]
          : [...n, [Ce(t, e), "[]=", Ce(r, e)].join("")];
    case "colon-list-separator":
      return (t) => (n, r) =>
        r === void 0 ||
        (e.skipNull && r === null) ||
        (e.skipEmptyString && r === "")
          ? n
          : r === null
          ? [...n, [Ce(t, e), ":list="].join("")]
          : [...n, [Ce(t, e), ":list=", Ce(r, e)].join("")];
    case "comma":
    case "separator":
    case "bracket-separator": {
      const t = e.arrayFormat === "bracket-separator" ? "[]=" : "=";
      return (n) => (r, o) =>
        o === void 0 ||
        (e.skipNull && o === null) ||
        (e.skipEmptyString && o === "")
          ? r
          : ((o = o === null ? "" : o),
            r.length === 0
              ? [[Ce(n, e), t, Ce(o, e)].join("")]
              : [[r, Ce(o, e)].join(e.arrayFormatSeparator)]);
    }
    default:
      return (t) => (n, r) =>
        r === void 0 ||
        (e.skipNull && r === null) ||
        (e.skipEmptyString && r === "")
          ? n
          : r === null
          ? [...n, Ce(t, e)]
          : [...n, [Ce(t, e), "=", Ce(r, e)].join("")];
  }
}
function Am(e) {
  let t;
  switch (e.arrayFormat) {
    case "index":
      return (n, r, o) => {
        if (((t = /\[(\d*)]$/.exec(n)), (n = n.replace(/\[\d*]$/, "")), !t)) {
          o[n] = r;
          return;
        }
        o[n] === void 0 && (o[n] = {}), (o[n][t[1]] = r);
      };
    case "bracket":
      return (n, r, o) => {
        if (((t = /(\[])$/.exec(n)), (n = n.replace(/\[]$/, "")), !t)) {
          o[n] = r;
          return;
        }
        if (o[n] === void 0) {
          o[n] = [r];
          return;
        }
        o[n] = [...o[n], r];
      };
    case "colon-list-separator":
      return (n, r, o) => {
        if (((t = /(:list)$/.exec(n)), (n = n.replace(/:list$/, "")), !t)) {
          o[n] = r;
          return;
        }
        if (o[n] === void 0) {
          o[n] = [r];
          return;
        }
        o[n] = [...o[n], r];
      };
    case "comma":
    case "separator":
      return (n, r, o) => {
        const i = typeof r == "string" && r.includes(e.arrayFormatSeparator),
          l =
            typeof r == "string" &&
            !i &&
            Nt(r, e).includes(e.arrayFormatSeparator);
        r = l ? Nt(r, e) : r;
        const u =
          i || l
            ? r.split(e.arrayFormatSeparator).map((a) => Nt(a, e))
            : r === null
            ? r
            : Nt(r, e);
        o[n] = u;
      };
    case "bracket-separator":
      return (n, r, o) => {
        const i = /(\[])$/.test(n);
        if (((n = n.replace(/\[]$/, "")), !i)) {
          o[n] = r && Nt(r, e);
          return;
        }
        const l =
          r === null
            ? []
            : r.split(e.arrayFormatSeparator).map((u) => Nt(u, e));
        if (o[n] === void 0) {
          o[n] = l;
          return;
        }
        o[n] = [...o[n], ...l];
      };
    default:
      return (n, r, o) => {
        if (o[n] === void 0) {
          o[n] = r;
          return;
        }
        o[n] = [...[o[n]].flat(), r];
      };
  }
}
function gf(e) {
  if (typeof e != "string" || e.length !== 1)
    throw new TypeError("arrayFormatSeparator must be single character string");
}
function Ce(e, t) {
  return t.encode ? (t.strict ? Cm(e) : encodeURIComponent(e)) : e;
}
function Nt(e, t) {
  return t.decode ? Em(e) : e;
}
function mf(e) {
  return Array.isArray(e)
    ? e.sort()
    : typeof e == "object"
    ? mf(Object.keys(e))
        .sort((t, n) => Number(t) - Number(n))
        .map((t) => e[t])
    : e;
}
function yf(e) {
  const t = e.indexOf("#");
  return t !== -1 && (e = e.slice(0, t)), e;
}
function bm(e) {
  let t = "";
  const n = e.indexOf("#");
  return n !== -1 && (t = e.slice(n)), t;
}
function Sc(e, t) {
  return (
    t.parseNumbers &&
    !Number.isNaN(Number(e)) &&
    typeof e == "string" &&
    e.trim() !== ""
      ? (e = Number(e))
      : t.parseBooleans &&
        e !== null &&
        (e.toLowerCase() === "true" || e.toLowerCase() === "false") &&
        (e = e.toLowerCase() === "true"),
    e
  );
}
function ju(e) {
  e = yf(e);
  const t = e.indexOf("?");
  return t === -1 ? "" : e.slice(t + 1);
}
function Uu(e, t) {
  (t = {
    decode: !0,
    sort: !0,
    arrayFormat: "none",
    arrayFormatSeparator: ",",
    parseNumbers: !1,
    parseBooleans: !1,
    ...t,
  }),
    gf(t.arrayFormatSeparator);
  const n = Am(t),
    r = Object.create(null);
  if (typeof e != "string" || ((e = e.trim().replace(/^[?#&]/, "")), !e))
    return r;
  for (const o of e.split("&")) {
    if (o === "") continue;
    const i = t.decode ? o.replace(/\+/g, " ") : o;
    let [l, u] = hf(i, "=");
    l === void 0 && (l = i),
      (u =
        u === void 0
          ? null
          : ["comma", "separator", "bracket-separator"].includes(t.arrayFormat)
          ? u
          : Nt(u, t)),
      n(Nt(l, t), u, r);
  }
  for (const [o, i] of Object.entries(r))
    if (typeof i == "object" && i !== null)
      for (const [l, u] of Object.entries(i)) i[l] = Sc(u, t);
    else r[o] = Sc(i, t);
  return t.sort === !1
    ? r
    : (t.sort === !0
        ? Object.keys(r).sort()
        : Object.keys(r).sort(t.sort)
      ).reduce((o, i) => {
        const l = r[i];
        return (
          l && typeof l == "object" && !Array.isArray(l)
            ? (o[i] = mf(l))
            : (o[i] = l),
          o
        );
      }, Object.create(null));
}
function vf(e, t) {
  if (!e) return "";
  (t = {
    encode: !0,
    strict: !0,
    arrayFormat: "none",
    arrayFormatSeparator: ",",
    ...t,
  }),
    gf(t.arrayFormatSeparator);
  const n = (l) =>
      (t.skipNull && Sm(e[l])) || (t.skipEmptyString && e[l] === ""),
    r = _m(t),
    o = {};
  for (const [l, u] of Object.entries(e)) n(l) || (o[l] = u);
  const i = Object.keys(o);
  return (
    t.sort !== !1 && i.sort(t.sort),
    i
      .map((l) => {
        const u = e[l];
        return u === void 0
          ? ""
          : u === null
          ? Ce(l, t)
          : Array.isArray(u)
          ? u.length === 0 && t.arrayFormat === "bracket-separator"
            ? Ce(l, t) + "[]"
            : u.reduce(r(l), []).join("&")
          : Ce(l, t) + "=" + Ce(u, t);
      })
      .filter((l) => l.length > 0)
      .join("&")
  );
}
function Ef(e, t) {
  var o;
  t = { decode: !0, ...t };
  let [n, r] = hf(e, "#");
  return (
    n === void 0 && (n = e),
    {
      url:
        ((o = n == null ? void 0 : n.split("?")) == null ? void 0 : o[0]) ?? "",
      query: Uu(ju(e), t),
      ...(t && t.parseFragmentIdentifier && r
        ? { fragmentIdentifier: Nt(r, t) }
        : {}),
    }
  );
}
function wf(e, t) {
  t = { encode: !0, strict: !0, [ka]: !0, ...t };
  const n = yf(e.url).split("?")[0] || "",
    r = ju(e.url),
    o = { ...Uu(r, { sort: !1 }), ...e.query };
  let i = vf(o, t);
  i && (i = `?${i}`);
  let l = bm(e.url);
  if (e.fragmentIdentifier) {
    const u = new URL(n);
    (u.hash = e.fragmentIdentifier),
      (l = t[ka] ? u.hash : `#${e.fragmentIdentifier}`);
  }
  return `${n}${i}${l}`;
}
function Sf(e, t, n) {
  n = { parseFragmentIdentifier: !0, [ka]: !1, ...n };
  const { url: r, query: o, fragmentIdentifier: i } = Ef(e, n);
  return wf({ url: r, query: wm(o, t), fragmentIdentifier: i }, n);
}
function km(e, t, n) {
  const r = Array.isArray(t) ? (o) => !t.includes(o) : (o, i) => !t(o, i);
  return Sf(e, r, n);
}
const Ut = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        exclude: km,
        extract: ju,
        parse: Uu,
        parseUrl: Ef,
        pick: Sf,
        stringify: vf,
        stringifyUrl: wf,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  jn = "-",
  Cf = (e, t) => Ut.parse(e).story || t,
  Om = (e) => !!Ut.parse(e).story,
  _f = (e) =>
    typeof e != "string" ? "" : e.charAt(0).toUpperCase() + e.slice(1),
  Af = (e) =>
    e
      ? e
          .split(`${jn}${jn}`)
          .reverse()
          .map((t) => _f(t.replace(/-/g, " ")))
          .join(" - ")
      : "",
  Cc = (e, t, n) => {
    const r = [],
      o = (l, u, a, c) => {
        const d = u.shift();
        let s = !!n,
          f = [];
        a[0] === d && ((f = [...a.slice(1)]), (s = !0));
        const p = l.findIndex((v) => v.subId === d);
        d &&
          (p === -1 &&
            l.push({
              id: `${c}${d}`,
              subId: d,
              name: _f(d.replace(/-/g, " ")),
              isLinkable: u.length === 0,
              isExpanded: s,
              isFocused: !1,
              children: [],
            }),
          o(l[p > -1 ? p : l.length - 1].children, u, f, `${c}${d}--`));
      },
      i = t ? t.split(`${jn}${jn}`) : [];
    return (
      e.forEach((l) => {
        const u = l.split(`${jn}${jn}`);
        o(r, u, i, "");
      }),
      r
    );
  },
  Tm = (e, t) => {
    const n = e.split("--"),
      r = t.split("--"),
      o = Math.min(n.length, r.length);
    for (let i = 0; i < o; i++)
      if (n[i] !== r[i])
        return !n[i + 1] && r[i + 1]
          ? 1
          : (n[i + 1] && !r[i + 1]) || [n[i], r[i]].sort()[0] === n[i]
          ? -1
          : 1;
    return 0;
  },
  bf = (e, t) => {
    const n = e.sort(Tm);
    let r = [...n];
    Array.isArray(t) ? (r = t) : (r = t(n));
    const o = new Set();
    return (
      r.forEach((i) => {
        const l = i.toLowerCase();
        if (l.includes("*")) {
          const u = l.split("*")[0];
          n.forEach((a) => {
            a.startsWith(u) && o.add(a);
          });
        } else {
          if (!n.includes(l))
            throw new Error(
              `Story "${i}" does not exist in your storybook. Please check your storyOrder config.`
            );
          o.add(l);
        }
      }),
      [...o]
    );
  };
var bi = { exports: {} };
bi.exports;
(function (e, t) {
  var n = 200,
    r = "__lodash_hash_undefined__",
    o = 800,
    i = 16,
    l = 9007199254740991,
    u = "[object Arguments]",
    a = "[object Array]",
    c = "[object AsyncFunction]",
    d = "[object Boolean]",
    s = "[object Date]",
    f = "[object Error]",
    p = "[object Function]",
    v = "[object GeneratorFunction]",
    g = "[object Map]",
    C = "[object Number]",
    y = "[object Null]",
    h = "[object Object]",
    w = "[object Proxy]",
    A = "[object RegExp]",
    F = "[object Set]",
    N = "[object String]",
    k = "[object Undefined]",
    O = "[object WeakMap]",
    $ = "[object ArrayBuffer]",
    M = "[object DataView]",
    V = "[object Float32Array]",
    T = "[object Float64Array]",
    P = "[object Int8Array]",
    G = "[object Int16Array]",
    H = "[object Int32Array]",
    W = "[object Uint8Array]",
    Z = "[object Uint8ClampedArray]",
    R = "[object Uint16Array]",
    L = "[object Uint32Array]",
    B = /[\\^$.*+?()[\]{}|]/g,
    X = /^\[object .+?Constructor\]$/,
    q = /^(?:0|[1-9]\d*)$/,
    Q = {};
  (Q[V] = Q[T] = Q[P] = Q[G] = Q[H] = Q[W] = Q[Z] = Q[R] = Q[L] = !0),
    (Q[u] =
      Q[a] =
      Q[$] =
      Q[d] =
      Q[M] =
      Q[s] =
      Q[f] =
      Q[p] =
      Q[g] =
      Q[C] =
      Q[h] =
      Q[A] =
      Q[F] =
      Q[N] =
      Q[O] =
        !1);
  var le = typeof $o == "object" && $o && $o.Object === Object && $o,
    ut = typeof self == "object" && self && self.Object === Object && self,
    ue = le || ut || Function("return this")(),
    $e = t && !t.nodeType && t,
    wt = $e && !0 && e && !e.nodeType && e,
    Oo = wt && wt.exports === $e,
    _r = Oo && le.process,
    To = (function () {
      try {
        var m = wt && wt.require && wt.require("util").types;
        return m || (_r && _r.binding && _r.binding("util"));
      } catch {}
    })(),
    xo = To && To.isTypedArray;
  function xl(m, S, b) {
    switch (b.length) {
      case 0:
        return m.call(S);
      case 1:
        return m.call(S, b[0]);
      case 2:
        return m.call(S, b[0], b[1]);
      case 3:
        return m.call(S, b[0], b[1], b[2]);
    }
    return m.apply(S, b);
  }
  function Y(m, S) {
    for (var b = -1, U = Array(m); ++b < m; ) U[b] = S(b);
    return U;
  }
  function Fn(m) {
    return function (S) {
      return m(S);
    };
  }
  function Ro(m, S) {
    return m == null ? void 0 : m[S];
  }
  function Ar(m, S) {
    return function (b) {
      return m(S(b));
    };
  }
  var rg = Array.prototype,
    og = Function.prototype,
    Do = Object.prototype,
    Rl = ue["__core-js_shared__"],
    No = og.toString,
    xt = Do.hasOwnProperty,
    Ks = (function () {
      var m = /[^.]+$/.exec((Rl && Rl.keys && Rl.keys.IE_PROTO) || "");
      return m ? "Symbol(src)_1." + m : "";
    })(),
    ec = Do.toString,
    ig = No.call(Object),
    lg = RegExp(
      "^" +
        No.call(xt)
          .replace(B, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
    ),
    Fo = Oo ? ue.Buffer : void 0,
    tc = ue.Symbol,
    nc = ue.Uint8Array,
    rc = Fo ? Fo.allocUnsafe : void 0,
    oc = Ar(Object.getPrototypeOf, Object),
    ic = Object.create,
    ag = Do.propertyIsEnumerable,
    ug = rg.splice,
    pn = tc ? tc.toStringTag : void 0,
    Io = (function () {
      try {
        var m = Fl(Object, "defineProperty");
        return m({}, "", {}), m;
      } catch {}
    })(),
    sg = Fo ? Fo.isBuffer : void 0,
    lc = Math.max,
    cg = Date.now,
    ac = Fl(ue, "Map"),
    br = Fl(Object, "create"),
    dg = (function () {
      function m() {}
      return function (S) {
        if (!gn(S)) return {};
        if (ic) return ic(S);
        m.prototype = S;
        var b = new m();
        return (m.prototype = void 0), b;
      };
    })();
  function hn(m) {
    var S = -1,
      b = m == null ? 0 : m.length;
    for (this.clear(); ++S < b; ) {
      var U = m[S];
      this.set(U[0], U[1]);
    }
  }
  function fg() {
    (this.__data__ = br ? br(null) : {}), (this.size = 0);
  }
  function pg(m) {
    var S = this.has(m) && delete this.__data__[m];
    return (this.size -= S ? 1 : 0), S;
  }
  function hg(m) {
    var S = this.__data__;
    if (br) {
      var b = S[m];
      return b === r ? void 0 : b;
    }
    return xt.call(S, m) ? S[m] : void 0;
  }
  function gg(m) {
    var S = this.__data__;
    return br ? S[m] !== void 0 : xt.call(S, m);
  }
  function mg(m, S) {
    var b = this.__data__;
    return (
      (this.size += this.has(m) ? 0 : 1),
      (b[m] = br && S === void 0 ? r : S),
      this
    );
  }
  (hn.prototype.clear = fg),
    (hn.prototype.delete = pg),
    (hn.prototype.get = hg),
    (hn.prototype.has = gg),
    (hn.prototype.set = mg);
  function Rt(m) {
    var S = -1,
      b = m == null ? 0 : m.length;
    for (this.clear(); ++S < b; ) {
      var U = m[S];
      this.set(U[0], U[1]);
    }
  }
  function yg() {
    (this.__data__ = []), (this.size = 0);
  }
  function vg(m) {
    var S = this.__data__,
      b = Lo(S, m);
    if (b < 0) return !1;
    var U = S.length - 1;
    return b == U ? S.pop() : ug.call(S, b, 1), --this.size, !0;
  }
  function Eg(m) {
    var S = this.__data__,
      b = Lo(S, m);
    return b < 0 ? void 0 : S[b][1];
  }
  function wg(m) {
    return Lo(this.__data__, m) > -1;
  }
  function Sg(m, S) {
    var b = this.__data__,
      U = Lo(b, m);
    return U < 0 ? (++this.size, b.push([m, S])) : (b[U][1] = S), this;
  }
  (Rt.prototype.clear = yg),
    (Rt.prototype.delete = vg),
    (Rt.prototype.get = Eg),
    (Rt.prototype.has = wg),
    (Rt.prototype.set = Sg);
  function In(m) {
    var S = -1,
      b = m == null ? 0 : m.length;
    for (this.clear(); ++S < b; ) {
      var U = m[S];
      this.set(U[0], U[1]);
    }
  }
  function Cg() {
    (this.size = 0),
      (this.__data__ = {
        hash: new hn(),
        map: new (ac || Rt)(),
        string: new hn(),
      });
  }
  function _g(m) {
    var S = Po(this, m).delete(m);
    return (this.size -= S ? 1 : 0), S;
  }
  function Ag(m) {
    return Po(this, m).get(m);
  }
  function bg(m) {
    return Po(this, m).has(m);
  }
  function kg(m, S) {
    var b = Po(this, m),
      U = b.size;
    return b.set(m, S), (this.size += b.size == U ? 0 : 1), this;
  }
  (In.prototype.clear = Cg),
    (In.prototype.delete = _g),
    (In.prototype.get = Ag),
    (In.prototype.has = bg),
    (In.prototype.set = kg);
  function Ln(m) {
    var S = (this.__data__ = new Rt(m));
    this.size = S.size;
  }
  function Og() {
    (this.__data__ = new Rt()), (this.size = 0);
  }
  function Tg(m) {
    var S = this.__data__,
      b = S.delete(m);
    return (this.size = S.size), b;
  }
  function xg(m) {
    return this.__data__.get(m);
  }
  function Rg(m) {
    return this.__data__.has(m);
  }
  function Dg(m, S) {
    var b = this.__data__;
    if (b instanceof Rt) {
      var U = b.__data__;
      if (!ac || U.length < n - 1)
        return U.push([m, S]), (this.size = ++b.size), this;
      b = this.__data__ = new In(U);
    }
    return b.set(m, S), (this.size = b.size), this;
  }
  (Ln.prototype.clear = Og),
    (Ln.prototype.delete = Tg),
    (Ln.prototype.get = xg),
    (Ln.prototype.has = Rg),
    (Ln.prototype.set = Dg);
  function Ng(m, S) {
    var b = Bl(m),
      U = !b && Ll(m),
      te = !b && !U && fc(m),
      se = !b && !U && !te && hc(m),
      pe = b || U || te || se,
      ee = pe ? Y(m.length, String) : [],
      he = ee.length;
    for (var Ke in m)
      (S || xt.call(m, Ke)) &&
        !(
          pe &&
          (Ke == "length" ||
            (te && (Ke == "offset" || Ke == "parent")) ||
            (se &&
              (Ke == "buffer" || Ke == "byteLength" || Ke == "byteOffset")) ||
            cc(Ke, he))
        ) &&
        ee.push(Ke);
    return ee;
  }
  function Dl(m, S, b) {
    ((b !== void 0 && !Mo(m[S], b)) || (b === void 0 && !(S in m))) &&
      Nl(m, S, b);
  }
  function Fg(m, S, b) {
    var U = m[S];
    (!(xt.call(m, S) && Mo(U, b)) || (b === void 0 && !(S in m))) &&
      Nl(m, S, b);
  }
  function Lo(m, S) {
    for (var b = m.length; b--; ) if (Mo(m[b][0], S)) return b;
    return -1;
  }
  function Nl(m, S, b) {
    S == "__proto__" && Io
      ? Io(m, S, { configurable: !0, enumerable: !0, value: b, writable: !0 })
      : (m[S] = b);
  }
  var Ig = Yg();
  function Bo(m) {
    return m == null
      ? m === void 0
        ? k
        : y
      : pn && pn in Object(m)
      ? Xg(m)
      : em(m);
  }
  function uc(m) {
    return kr(m) && Bo(m) == u;
  }
  function Lg(m) {
    if (!gn(m) || Jg(m)) return !1;
    var S = Ml(m) ? lg : X;
    return S.test(om(m));
  }
  function Bg(m) {
    return kr(m) && pc(m.length) && !!Q[Bo(m)];
  }
  function Pg(m) {
    if (!gn(m)) return Kg(m);
    var S = dc(m),
      b = [];
    for (var U in m) (U == "constructor" && (S || !xt.call(m, U))) || b.push(U);
    return b;
  }
  function sc(m, S, b, U, te) {
    m !== S &&
      Ig(
        S,
        function (se, pe) {
          if ((te || (te = new Ln()), gn(se))) Mg(m, S, pe, b, sc, U, te);
          else {
            var ee = U ? U(Il(m, pe), se, pe + "", m, S, te) : void 0;
            ee === void 0 && (ee = se), Dl(m, pe, ee);
          }
        },
        gc
      );
  }
  function Mg(m, S, b, U, te, se, pe) {
    var ee = Il(m, b),
      he = Il(S, b),
      Ke = pe.get(he);
    if (Ke) {
      Dl(m, b, Ke);
      return;
    }
    var Ge = se ? se(ee, he, b + "", m, S, pe) : void 0,
      Or = Ge === void 0;
    if (Or) {
      var $l = Bl(he),
        jl = !$l && fc(he),
        yc = !$l && !jl && hc(he);
      (Ge = he),
        $l || jl || yc
          ? Bl(ee)
            ? (Ge = ee)
            : im(ee)
            ? (Ge = Vg(ee))
            : jl
            ? ((Or = !1), (Ge = Ug(he, !0)))
            : yc
            ? ((Or = !1), (Ge = Hg(he, !0)))
            : (Ge = [])
          : lm(he) || Ll(he)
          ? ((Ge = ee),
            Ll(ee) ? (Ge = am(ee)) : (!gn(ee) || Ml(ee)) && (Ge = Zg(he)))
          : (Or = !1);
    }
    Or && (pe.set(he, Ge), te(Ge, he, U, se, pe), pe.delete(he)), Dl(m, b, Ge);
  }
  function $g(m, S) {
    return nm(tm(m, S, mc), m + "");
  }
  var jg = Io
    ? function (m, S) {
        return Io(m, "toString", {
          configurable: !0,
          enumerable: !1,
          value: sm(S),
          writable: !0,
        });
      }
    : mc;
  function Ug(m, S) {
    if (S) return m.slice();
    var b = m.length,
      U = rc ? rc(b) : new m.constructor(b);
    return m.copy(U), U;
  }
  function zg(m) {
    var S = new m.constructor(m.byteLength);
    return new nc(S).set(new nc(m)), S;
  }
  function Hg(m, S) {
    var b = S ? zg(m.buffer) : m.buffer;
    return new m.constructor(b, m.byteOffset, m.length);
  }
  function Vg(m, S) {
    var b = -1,
      U = m.length;
    for (S || (S = Array(U)); ++b < U; ) S[b] = m[b];
    return S;
  }
  function Gg(m, S, b, U) {
    var te = !b;
    b || (b = {});
    for (var se = -1, pe = S.length; ++se < pe; ) {
      var ee = S[se],
        he = U ? U(b[ee], m[ee], ee, b, m) : void 0;
      he === void 0 && (he = m[ee]), te ? Nl(b, ee, he) : Fg(b, ee, he);
    }
    return b;
  }
  function Wg(m) {
    return $g(function (S, b) {
      var U = -1,
        te = b.length,
        se = te > 1 ? b[te - 1] : void 0,
        pe = te > 2 ? b[2] : void 0;
      for (
        se = m.length > 3 && typeof se == "function" ? (te--, se) : void 0,
          pe && Qg(b[0], b[1], pe) && ((se = te < 3 ? void 0 : se), (te = 1)),
          S = Object(S);
        ++U < te;

      ) {
        var ee = b[U];
        ee && m(S, ee, U, se);
      }
      return S;
    });
  }
  function Yg(m) {
    return function (S, b, U) {
      for (var te = -1, se = Object(S), pe = U(S), ee = pe.length; ee--; ) {
        var he = pe[m ? ee : ++te];
        if (b(se[he], he, se) === !1) break;
      }
      return S;
    };
  }
  function Po(m, S) {
    var b = m.__data__;
    return qg(S) ? b[typeof S == "string" ? "string" : "hash"] : b.map;
  }
  function Fl(m, S) {
    var b = Ro(m, S);
    return Lg(b) ? b : void 0;
  }
  function Xg(m) {
    var S = xt.call(m, pn),
      b = m[pn];
    try {
      m[pn] = void 0;
      var U = !0;
    } catch {}
    var te = ec.call(m);
    return U && (S ? (m[pn] = b) : delete m[pn]), te;
  }
  function Zg(m) {
    return typeof m.constructor == "function" && !dc(m) ? dg(oc(m)) : {};
  }
  function cc(m, S) {
    var b = typeof m;
    return (
      (S = S ?? l),
      !!S &&
        (b == "number" || (b != "symbol" && q.test(m))) &&
        m > -1 &&
        m % 1 == 0 &&
        m < S
    );
  }
  function Qg(m, S, b) {
    if (!gn(b)) return !1;
    var U = typeof S;
    return (U == "number" ? Pl(b) && cc(S, b.length) : U == "string" && S in b)
      ? Mo(b[S], m)
      : !1;
  }
  function qg(m) {
    var S = typeof m;
    return S == "string" || S == "number" || S == "symbol" || S == "boolean"
      ? m !== "__proto__"
      : m === null;
  }
  function Jg(m) {
    return !!Ks && Ks in m;
  }
  function dc(m) {
    var S = m && m.constructor,
      b = (typeof S == "function" && S.prototype) || Do;
    return m === b;
  }
  function Kg(m) {
    var S = [];
    if (m != null) for (var b in Object(m)) S.push(b);
    return S;
  }
  function em(m) {
    return ec.call(m);
  }
  function tm(m, S, b) {
    return (
      (S = lc(S === void 0 ? m.length - 1 : S, 0)),
      function () {
        for (
          var U = arguments, te = -1, se = lc(U.length - S, 0), pe = Array(se);
          ++te < se;

        )
          pe[te] = U[S + te];
        te = -1;
        for (var ee = Array(S + 1); ++te < S; ) ee[te] = U[te];
        return (ee[S] = b(pe)), xl(m, this, ee);
      }
    );
  }
  function Il(m, S) {
    if (!(S === "constructor" && typeof m[S] == "function") && S != "__proto__")
      return m[S];
  }
  var nm = rm(jg);
  function rm(m) {
    var S = 0,
      b = 0;
    return function () {
      var U = cg(),
        te = i - (U - b);
      if (((b = U), te > 0)) {
        if (++S >= o) return arguments[0];
      } else S = 0;
      return m.apply(void 0, arguments);
    };
  }
  function om(m) {
    if (m != null) {
      try {
        return No.call(m);
      } catch {}
      try {
        return m + "";
      } catch {}
    }
    return "";
  }
  function Mo(m, S) {
    return m === S || (m !== m && S !== S);
  }
  var Ll = uc(
      (function () {
        return arguments;
      })()
    )
      ? uc
      : function (m) {
          return kr(m) && xt.call(m, "callee") && !ag.call(m, "callee");
        },
    Bl = Array.isArray;
  function Pl(m) {
    return m != null && pc(m.length) && !Ml(m);
  }
  function im(m) {
    return kr(m) && Pl(m);
  }
  var fc = sg || cm;
  function Ml(m) {
    if (!gn(m)) return !1;
    var S = Bo(m);
    return S == p || S == v || S == c || S == w;
  }
  function pc(m) {
    return typeof m == "number" && m > -1 && m % 1 == 0 && m <= l;
  }
  function gn(m) {
    var S = typeof m;
    return m != null && (S == "object" || S == "function");
  }
  function kr(m) {
    return m != null && typeof m == "object";
  }
  function lm(m) {
    if (!kr(m) || Bo(m) != h) return !1;
    var S = oc(m);
    if (S === null) return !0;
    var b = xt.call(S, "constructor") && S.constructor;
    return typeof b == "function" && b instanceof b && No.call(b) == ig;
  }
  var hc = xo ? Fn(xo) : Bg;
  function am(m) {
    return Gg(m, gc(m));
  }
  function gc(m) {
    return Pl(m) ? Ng(m, !0) : Pg(m);
  }
  var um = Wg(function (m, S, b) {
    sc(m, S, b);
  });
  function sm(m) {
    return function () {
      return m;
    };
  }
  function mc(m) {
    return m;
  }
  function cm() {
    return !1;
  }
  e.exports = um;
})(bi, bi.exports);
var xm = bi.exports;
const Rm = Eo(xm),
  Dm = "modulepreload",
  Nm = function (e) {
    return "/" + e;
  },
  _c = {},
  at = function (t, n, r) {
    if (!n || n.length === 0) return t();
    const o = document.getElementsByTagName("link");
    return Promise.all(
      n.map((i) => {
        if (((i = Nm(i)), i in _c)) return;
        _c[i] = !0;
        const l = i.endsWith(".css"),
          u = l ? '[rel="stylesheet"]' : "";
        if (!!r)
          for (let d = o.length - 1; d >= 0; d--) {
            const s = o[d];
            if (s.href === i && (!l || s.rel === "stylesheet")) return;
          }
        else if (document.querySelector(`link[href="${i}"]${u}`)) return;
        const c = document.createElement("link");
        if (
          ((c.rel = l ? "stylesheet" : Dm),
          l || ((c.as = "script"), (c.crossOrigin = "")),
          (c.href = i),
          document.head.appendChild(c),
          l)
        )
          return new Promise((d, s) => {
            c.addEventListener("load", d),
              c.addEventListener("error", () =>
                s(new Error(`Unable to preload CSS for ${i}`))
              );
          });
      })
    ).then(() => t());
  };
var kf = { exports: {} },
  K = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wo = Symbol.for("react.element"),
  Fm = Symbol.for("react.portal"),
  Im = Symbol.for("react.fragment"),
  Lm = Symbol.for("react.strict_mode"),
  Bm = Symbol.for("react.profiler"),
  Pm = Symbol.for("react.provider"),
  Mm = Symbol.for("react.context"),
  $m = Symbol.for("react.forward_ref"),
  jm = Symbol.for("react.suspense"),
  Um = Symbol.for("react.memo"),
  zm = Symbol.for("react.lazy"),
  Ac = Symbol.iterator;
function Hm(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ac && e[Ac]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Of = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Tf = Object.assign,
  xf = {};
function Er(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = xf),
    (this.updater = n || Of);
}
Er.prototype.isReactComponent = {};
Er.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Er.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Rf() {}
Rf.prototype = Er.prototype;
function zu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = xf),
    (this.updater = n || Of);
}
var Hu = (zu.prototype = new Rf());
Hu.constructor = zu;
Tf(Hu, Er.prototype);
Hu.isPureReactComponent = !0;
var bc = Array.isArray,
  Df = Object.prototype.hasOwnProperty,
  Vu = { current: null },
  Nf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ff(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Df.call(t, r) && !Nf.hasOwnProperty(r) && (o[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) o.children = n;
  else if (1 < u) {
    for (var a = Array(u), c = 0; c < u; c++) a[c] = arguments[c + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) o[r] === void 0 && (o[r] = u[r]);
  return {
    $$typeof: wo,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: Vu.current,
  };
}
function Vm(e, t) {
  return {
    $$typeof: wo,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Gu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === wo;
}
function Gm(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var kc = /\/+/g;
function zl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Gm("" + e.key)
    : t.toString(36);
}
function ai(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (i) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case wo:
          case Fm:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (o = o(l)),
      (e = r === "" ? "." + zl(l, 0) : r),
      bc(o)
        ? ((n = ""),
          e != null && (n = e.replace(kc, "$&/") + "/"),
          ai(o, t, n, "", function (c) {
            return c;
          }))
        : o != null &&
          (Gu(o) &&
            (o = Vm(
              o,
              n +
                (!o.key || (l && l.key === o.key)
                  ? ""
                  : ("" + o.key).replace(kc, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), bc(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var a = r + zl(i, u);
      l += ai(i, t, n, a, o);
    }
  else if (((a = Hm(e)), typeof a == "function"))
    for (e = a.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (a = r + zl(i, u++)), (l += ai(i, t, n, a, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return l;
}
function jo(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    ai(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function Wm(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Pe = { current: null },
  ui = { transition: null },
  Ym = {
    ReactCurrentDispatcher: Pe,
    ReactCurrentBatchConfig: ui,
    ReactCurrentOwner: Vu,
  };
K.Children = {
  map: jo,
  forEach: function (e, t, n) {
    jo(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      jo(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      jo(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Gu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
K.Component = Er;
K.Fragment = Im;
K.Profiler = Bm;
K.PureComponent = zu;
K.StrictMode = Lm;
K.Suspense = jm;
K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ym;
K.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Tf({}, e.props),
    o = e.key,
    i = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (l = Vu.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (a in t)
      Df.call(t, a) &&
        !Nf.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    u = Array(a);
    for (var c = 0; c < a; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: wo, type: e.type, key: o, ref: i, props: r, _owner: l };
};
K.createContext = function (e) {
  return (
    (e = {
      $$typeof: Mm,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Pm, _context: e }),
    (e.Consumer = e)
  );
};
K.createElement = Ff;
K.createFactory = function (e) {
  var t = Ff.bind(null, e);
  return (t.type = e), t;
};
K.createRef = function () {
  return { current: null };
};
K.forwardRef = function (e) {
  return { $$typeof: $m, render: e };
};
K.isValidElement = Gu;
K.lazy = function (e) {
  return { $$typeof: zm, _payload: { _status: -1, _result: e }, _init: Wm };
};
K.memo = function (e, t) {
  return { $$typeof: Um, type: e, compare: t === void 0 ? null : t };
};
K.startTransition = function (e) {
  var t = ui.transition;
  ui.transition = {};
  try {
    e();
  } finally {
    ui.transition = t;
  }
};
K.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
K.useCallback = function (e, t) {
  return Pe.current.useCallback(e, t);
};
K.useContext = function (e) {
  return Pe.current.useContext(e);
};
K.useDebugValue = function () {};
K.useDeferredValue = function (e) {
  return Pe.current.useDeferredValue(e);
};
K.useEffect = function (e, t) {
  return Pe.current.useEffect(e, t);
};
K.useId = function () {
  return Pe.current.useId();
};
K.useImperativeHandle = function (e, t, n) {
  return Pe.current.useImperativeHandle(e, t, n);
};
K.useInsertionEffect = function (e, t) {
  return Pe.current.useInsertionEffect(e, t);
};
K.useLayoutEffect = function (e, t) {
  return Pe.current.useLayoutEffect(e, t);
};
K.useMemo = function (e, t) {
  return Pe.current.useMemo(e, t);
};
K.useReducer = function (e, t, n) {
  return Pe.current.useReducer(e, t, n);
};
K.useRef = function (e) {
  return Pe.current.useRef(e);
};
K.useState = function (e) {
  return Pe.current.useState(e);
};
K.useSyncExternalStore = function (e, t, n) {
  return Pe.current.useSyncExternalStore(e, t, n);
};
K.useTransition = function () {
  return Pe.current.useTransition();
};
K.version = "18.2.0";
kf.exports = K;
var _ = kf.exports;
const x = Eo(_);
var If = { exports: {} },
  al = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xm = _,
  Zm = Symbol.for("react.element"),
  Qm = Symbol.for("react.fragment"),
  qm = Object.prototype.hasOwnProperty,
  Jm = Xm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Km = { key: !0, ref: !0, __self: !0, __source: !0 };
function Lf(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) qm.call(t, r) && !Km.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Zm,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: Jm.current,
  };
}
al.Fragment = Qm;
al.jsx = Lf;
al.jsxs = Lf;
If.exports = al;
var Wu = If.exports;
const ki = Wu.Fragment,
  E = Wu.jsx,
  z = Wu.jsxs,
  Bf = _.createContext(void 0),
  Oc = Bf,
  Oa = () => _.useContext(Bf),
  ey = () =>
    z("svg", {
      width: 18,
      height: 18,
      viewBox: "0 0 24 24",
      strokeWidth: 2,
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        E("path", { d: "M0 0h24v24H0z", stroke: "none" }),
        E("path", { d: "M18 6L6 18M6 6l12 12" }),
      ],
    }),
  ty = () =>
    E("svg", {
      viewBox: "0 0 24 24",
      strokeWidth: 0.5,
      stroke: "currentColor",
      fill: "currentColor",
      width: 24,
      height: 24,
      children: E("path", {
        d: "M22 14H9V5a4 4 0 00-8 0v3a1 1 0 002 0V5a2 2 0 014 0v10a8 8 0 0016 0 1 1 0 00-1-1zm-7 7a6.01 6.01 0 01-5.917-5h11.834A6.01 6.01 0 0115 21z",
      }),
    }),
  ny = () =>
    z("svg", {
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      strokeWidth: 2,
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        E("path", { d: "M0 0h24v24H0z", stroke: "none" }),
        E("path", {
          d: "M16 4H9.5a3.5 3.5 0 000 7h.5M14 15V4M10 15V4M5 19h14M7 21l-2-2 2-2",
        }),
      ],
    }),
  ry = () => (
    _.useEffect(
      () => (
        document.documentElement.removeAttribute("data-storyloaded"),
        () => document.documentElement.setAttribute("data-storyloaded", "")
      ),
      []
    ),
    E("div", {
      className: "ladle-ring-wrapper",
      children: z("div", {
        className: "ladle-ring",
        children: [E("div", {}), E("div", {}), E("div", {}), E("div", {})],
      }),
    })
  ),
  oy = () =>
    z("svg", {
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      strokeWidth: 2,
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        E("path", { d: "M0 0h24v24H0z", stroke: "none" }),
        E("path", { d: "M16 4h4v4M14 10l6-6M8 20H4v-4M4 20l6-6" }),
      ],
    }),
  iy = () =>
    z("svg", {
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      strokeWidth: 2,
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        E("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
        E("path", {
          d: "M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7",
        }),
        E("path", {
          d: "M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3",
        }),
        E("line", { x1: 9.7, y1: 17, x2: 14.3, y2: 17 }),
      ],
    }),
  ly = () =>
    E("div", {
      style: { width: "10px", marginInlineEnd: "0.5em", flexShrink: 0 },
      children: E("svg", {
        fill: "currentColor",
        viewBox: "0 0 768 1024",
        children: E("path", {
          d: "M509 64l195 218v669q0 3-4 6t-9 3H77q-5 0-9-3t-4-6V73q0-3 4-6t9-3h432zm29-64H77Q45 0 22.5 21.5T0 73v878q0 30 22.5 51.5T77 1024h614q32 0 54.5-21.5T768 951V257zm-26 256V0h-64v256q0 26 19 45t45 19h253v-64H512z",
        }),
      }),
    }),
  ay = ({ rotate: e }) =>
    E("div", {
      "aria-hidden": !0,
      style: {
        width: "10px",
        marginInlineEnd: "0.4em",
        marginTop: "-0.1em",
        transform: e ? "rotate(-90deg)" : void 0,
      },
      children: E("svg", {
        fill: "currentColor",
        viewBox: "0 0 1024 574",
        children: E("path", {
          d: "M1015 10q-10-10-23-10t-23 10L512 492 55 10Q45 0 32 0T9 10Q0 20 0 34t9 24l480 506q10 10 23 10t23-10l480-506q9-10 9-24t-9-24z",
        }),
      }),
    }),
  uy = () =>
    z("svg", {
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      strokeWidth: 2,
      stroke: "currentColor",
      fill: "none",
      children: [
        E("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
        E("circle", { cx: 14, cy: 6, r: 2 }),
        E("line", { x1: 4, y1: 6, x2: 12, y2: 6 }),
        E("line", { x1: 16, y1: 6, x2: 20, y2: 6 }),
        E("circle", { cx: 8, cy: 12, r: 2 }),
        E("line", { x1: 4, y1: 12, x2: 6, y2: 12 }),
        E("line", { x1: 10, y1: 12, x2: 20, y2: 12 }),
        E("circle", { cx: 17, cy: 18, r: 2 }),
        E("line", { x1: 4, y1: 18, x2: 15, y2: 18 }),
        E("line", { x1: 19, y1: 18, x2: 20, y2: 18 }),
      ],
    }),
  sy = () =>
    z("svg", {
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      strokeWidth: 2,
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        E("path", { d: "M0 0h24v24H0z", stroke: "none" }),
        E("path", { d: "m7 8-4 4 4 4M17 8l4 4-4 4M14 4l-4 16" }),
      ],
    }),
  cy = () =>
    z("svg", {
      width: 24,
      height: 24,
      strokeWidth: 2,
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        E("path", { d: "M0 0h24v24H0z", stroke: "none" }),
        E("circle", { cx: 12, cy: 12, r: 9 }),
        E("path", { d: "m10 16.5 2-3 2 3m-2-3v-2l3-1m-6 0 3 1" }),
        E("circle", { cx: 12, cy: 7.5, r: 0.5, fill: "currentColor" }),
      ],
    }),
  dy = () =>
    z("svg", {
      width: 24,
      height: 24,
      strokeWidth: 2,
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        E("path", { d: "M0 0h24v24H0z", stroke: "none" }),
        E("rect", { x: 13, y: 8, width: 8, height: 12, rx: 1 }),
        E("path", {
          d: "M18 8V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h9M16 9h2",
        }),
      ],
    }),
  fy = () =>
    z("svg", {
      width: 24,
      height: 24,
      strokeWidth: 2,
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        E("path", { d: "M0 0h24v24H0z", stroke: "none" }),
        E("path", {
          d: "M18 8a3 3 0 0 1 0 6M10 8v11a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-5",
        }),
        E("path", {
          d: "M12 8h0l4.524-3.77A.9.9 0 0 1 18 4.922v12.156a.9.9 0 0 1-1.476.692L12 14H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h8",
        }),
      ],
    });
var Pf = { exports: {} },
  qe = {},
  Mf = { exports: {} },
  $f = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(R, L) {
    var B = R.length;
    R.push(L);
    e: for (; 0 < B; ) {
      var X = (B - 1) >>> 1,
        q = R[X];
      if (0 < o(q, L)) (R[X] = L), (R[B] = q), (B = X);
      else break e;
    }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function r(R) {
    if (R.length === 0) return null;
    var L = R[0],
      B = R.pop();
    if (B !== L) {
      R[0] = B;
      e: for (var X = 0, q = R.length, Q = q >>> 1; X < Q; ) {
        var le = 2 * (X + 1) - 1,
          ut = R[le],
          ue = le + 1,
          $e = R[ue];
        if (0 > o(ut, B))
          ue < q && 0 > o($e, ut)
            ? ((R[X] = $e), (R[ue] = B), (X = ue))
            : ((R[X] = ut), (R[le] = B), (X = le));
        else if (ue < q && 0 > o($e, B)) (R[X] = $e), (R[ue] = B), (X = ue);
        else break e;
      }
    }
    return L;
  }
  function o(R, L) {
    var B = R.sortIndex - L.sortIndex;
    return B !== 0 ? B : R.id - L.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var l = Date,
      u = l.now();
    e.unstable_now = function () {
      return l.now() - u;
    };
  }
  var a = [],
    c = [],
    d = 1,
    s = null,
    f = 3,
    p = !1,
    v = !1,
    g = !1,
    C = typeof setTimeout == "function" ? setTimeout : null,
    y = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function w(R) {
    for (var L = n(c); L !== null; ) {
      if (L.callback === null) r(c);
      else if (L.startTime <= R)
        r(c), (L.sortIndex = L.expirationTime), t(a, L);
      else break;
      L = n(c);
    }
  }
  function A(R) {
    if (((g = !1), w(R), !v))
      if (n(a) !== null) (v = !0), W(F);
      else {
        var L = n(c);
        L !== null && Z(A, L.startTime - R);
      }
  }
  function F(R, L) {
    (v = !1), g && ((g = !1), y(O), (O = -1)), (p = !0);
    var B = f;
    try {
      for (
        w(L), s = n(a);
        s !== null && (!(s.expirationTime > L) || (R && !V()));

      ) {
        var X = s.callback;
        if (typeof X == "function") {
          (s.callback = null), (f = s.priorityLevel);
          var q = X(s.expirationTime <= L);
          (L = e.unstable_now()),
            typeof q == "function" ? (s.callback = q) : s === n(a) && r(a),
            w(L);
        } else r(a);
        s = n(a);
      }
      if (s !== null) var Q = !0;
      else {
        var le = n(c);
        le !== null && Z(A, le.startTime - L), (Q = !1);
      }
      return Q;
    } finally {
      (s = null), (f = B), (p = !1);
    }
  }
  var N = !1,
    k = null,
    O = -1,
    $ = 5,
    M = -1;
  function V() {
    return !(e.unstable_now() - M < $);
  }
  function T() {
    if (k !== null) {
      var R = e.unstable_now();
      M = R;
      var L = !0;
      try {
        L = k(!0, R);
      } finally {
        L ? P() : ((N = !1), (k = null));
      }
    } else N = !1;
  }
  var P;
  if (typeof h == "function")
    P = function () {
      h(T);
    };
  else if (typeof MessageChannel < "u") {
    var G = new MessageChannel(),
      H = G.port2;
    (G.port1.onmessage = T),
      (P = function () {
        H.postMessage(null);
      });
  } else
    P = function () {
      C(T, 0);
    };
  function W(R) {
    (k = R), N || ((N = !0), P());
  }
  function Z(R, L) {
    O = C(function () {
      R(e.unstable_now());
    }, L);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (R) {
      R.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || p || ((v = !0), W(F));
    }),
    (e.unstable_forceFrameRate = function (R) {
      0 > R || 125 < R
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : ($ = 0 < R ? Math.floor(1e3 / R) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (R) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = f;
      }
      var B = f;
      f = L;
      try {
        return R();
      } finally {
        f = B;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (R, L) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var B = f;
      f = R;
      try {
        return L();
      } finally {
        f = B;
      }
    }),
    (e.unstable_scheduleCallback = function (R, L, B) {
      var X = e.unstable_now();
      switch (
        (typeof B == "object" && B !== null
          ? ((B = B.delay), (B = typeof B == "number" && 0 < B ? X + B : X))
          : (B = X),
        R)
      ) {
        case 1:
          var q = -1;
          break;
        case 2:
          q = 250;
          break;
        case 5:
          q = 1073741823;
          break;
        case 4:
          q = 1e4;
          break;
        default:
          q = 5e3;
      }
      return (
        (q = B + q),
        (R = {
          id: d++,
          callback: L,
          priorityLevel: R,
          startTime: B,
          expirationTime: q,
          sortIndex: -1,
        }),
        B > X
          ? ((R.sortIndex = B),
            t(c, R),
            n(a) === null &&
              R === n(c) &&
              (g ? (y(O), (O = -1)) : (g = !0), Z(A, B - X)))
          : ((R.sortIndex = q), t(a, R), v || p || ((v = !0), W(F))),
        R
      );
    }),
    (e.unstable_shouldYield = V),
    (e.unstable_wrapCallback = function (R) {
      var L = f;
      return function () {
        var B = f;
        f = L;
        try {
          return R.apply(this, arguments);
        } finally {
          f = B;
        }
      };
    });
})($f);
Mf.exports = $f;
var py = Mf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jf = _,
  Ze = py;
function I(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Uf = new Set(),
  Kr = {};
function Dn(e, t) {
  dr(e, t), dr(e + "Capture", t);
}
function dr(e, t) {
  for (Kr[e] = t, e = 0; e < t.length; e++) Uf.add(t[e]);
}
var Pt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ta = Object.prototype.hasOwnProperty,
  hy =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Tc = {},
  xc = {};
function gy(e) {
  return Ta.call(xc, e)
    ? !0
    : Ta.call(Tc, e)
    ? !1
    : hy.test(e)
    ? (xc[e] = !0)
    : ((Tc[e] = !0), !1);
}
function my(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function yy(e, t, n, r) {
  if (t === null || typeof t > "u" || my(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Me(e, t, n, r, o, i, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = l);
}
var Re = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Re[e] = new Me(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Re[t] = new Me(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Re[e] = new Me(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Re[e] = new Me(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Re[e] = new Me(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Re[e] = new Me(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Re[e] = new Me(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Re[e] = new Me(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Re[e] = new Me(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Yu = /[\-:]([a-z])/g;
function Xu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Yu, Xu);
    Re[t] = new Me(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Yu, Xu);
    Re[t] = new Me(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Yu, Xu);
  Re[t] = new Me(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Re[e] = new Me(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Re.xlinkHref = new Me(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Re[e] = new Me(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Zu(e, t, n, r) {
  var o = Re.hasOwnProperty(t) ? Re[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (yy(t, n, o, r) && (n = null),
    r || o === null
      ? gy(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var zt = jf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Uo = Symbol.for("react.element"),
  Un = Symbol.for("react.portal"),
  zn = Symbol.for("react.fragment"),
  Qu = Symbol.for("react.strict_mode"),
  xa = Symbol.for("react.profiler"),
  zf = Symbol.for("react.provider"),
  Hf = Symbol.for("react.context"),
  qu = Symbol.for("react.forward_ref"),
  Ra = Symbol.for("react.suspense"),
  Da = Symbol.for("react.suspense_list"),
  Ju = Symbol.for("react.memo"),
  Vt = Symbol.for("react.lazy"),
  Vf = Symbol.for("react.offscreen"),
  Rc = Symbol.iterator;
function Tr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Rc && e[Rc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ve = Object.assign,
  Hl;
function Mr(e) {
  if (Hl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Hl = (t && t[1]) || "";
    }
  return (
    `
` +
    Hl +
    e
  );
}
var Vl = !1;
function Gl(e, t) {
  if (!e || Vl) return "";
  Vl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var o = c.stack.split(`
`),
          i = r.stack.split(`
`),
          l = o.length - 1,
          u = i.length - 1;
        1 <= l && 0 <= u && o[l] !== i[u];

      )
        u--;
      for (; 1 <= l && 0 <= u; l--, u--)
        if (o[l] !== i[u]) {
          if (l !== 1 || u !== 1)
            do
              if ((l--, u--, 0 > u || o[l] !== i[u])) {
                var a =
                  `
` + o[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= l && 0 <= u);
          break;
        }
    }
  } finally {
    (Vl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Mr(e) : "";
}
function vy(e) {
  switch (e.tag) {
    case 5:
      return Mr(e.type);
    case 16:
      return Mr("Lazy");
    case 13:
      return Mr("Suspense");
    case 19:
      return Mr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Gl(e.type, !1)), e;
    case 11:
      return (e = Gl(e.type.render, !1)), e;
    case 1:
      return (e = Gl(e.type, !0)), e;
    default:
      return "";
  }
}
function Na(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case zn:
      return "Fragment";
    case Un:
      return "Portal";
    case xa:
      return "Profiler";
    case Qu:
      return "StrictMode";
    case Ra:
      return "Suspense";
    case Da:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Hf:
        return (e.displayName || "Context") + ".Consumer";
      case zf:
        return (e._context.displayName || "Context") + ".Provider";
      case qu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ju:
        return (
          (t = e.displayName || null), t !== null ? t : Na(e.type) || "Memo"
        );
      case Vt:
        (t = e._payload), (e = e._init);
        try {
          return Na(e(t));
        } catch {}
    }
  return null;
}
function Ey(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Na(t);
    case 8:
      return t === Qu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function ln(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Gf(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function wy(e) {
  var t = Gf(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (l) {
          (r = "" + l), i.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function zo(e) {
  e._valueTracker || (e._valueTracker = wy(e));
}
function Wf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Gf(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Oi(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Fa(e, t) {
  var n = t.checked;
  return ve({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Dc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = ln(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Yf(e, t) {
  (t = t.checked), t != null && Zu(e, "checked", t, !1);
}
function Ia(e, t) {
  Yf(e, t);
  var n = ln(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? La(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && La(e, t.type, ln(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Nc(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function La(e, t, n) {
  (t !== "number" || Oi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var $r = Array.isArray;
function er(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ln(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ba(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(I(91));
  return ve({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Fc(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(I(92));
      if ($r(n)) {
        if (1 < n.length) throw Error(I(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: ln(n) };
}
function Xf(e, t) {
  var n = ln(t.value),
    r = ln(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Ic(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Zf(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Pa(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Zf(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Ho,
  Qf = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Ho = Ho || document.createElement("div"),
          Ho.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ho.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function eo(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Hr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Sy = ["Webkit", "ms", "Moz", "O"];
Object.keys(Hr).forEach(function (e) {
  Sy.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Hr[t] = Hr[e]);
  });
});
function qf(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Hr.hasOwnProperty(e) && Hr[e])
    ? ("" + t).trim()
    : t + "px";
}
function Jf(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = qf(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Cy = ve(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Ma(e, t) {
  if (t) {
    if (Cy[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(I(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(I(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(I(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(I(62));
  }
}
function $a(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ja = null;
function Ku(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ua = null,
  tr = null,
  nr = null;
function Lc(e) {
  if ((e = _o(e))) {
    if (typeof Ua != "function") throw Error(I(280));
    var t = e.stateNode;
    t && ((t = fl(t)), Ua(e.stateNode, e.type, t));
  }
}
function Kf(e) {
  tr ? (nr ? nr.push(e) : (nr = [e])) : (tr = e);
}
function ep() {
  if (tr) {
    var e = tr,
      t = nr;
    if (((nr = tr = null), Lc(e), t)) for (e = 0; e < t.length; e++) Lc(t[e]);
  }
}
function tp(e, t) {
  return e(t);
}
function np() {}
var Wl = !1;
function rp(e, t, n) {
  if (Wl) return e(t, n);
  Wl = !0;
  try {
    return tp(e, t, n);
  } finally {
    (Wl = !1), (tr !== null || nr !== null) && (np(), ep());
  }
}
function to(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = fl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(I(231, t, typeof n));
  return n;
}
var za = !1;
if (Pt)
  try {
    var xr = {};
    Object.defineProperty(xr, "passive", {
      get: function () {
        za = !0;
      },
    }),
      window.addEventListener("test", xr, xr),
      window.removeEventListener("test", xr, xr);
  } catch {
    za = !1;
  }
function _y(e, t, n, r, o, i, l, u, a) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (d) {
    this.onError(d);
  }
}
var Vr = !1,
  Ti = null,
  xi = !1,
  Ha = null,
  Ay = {
    onError: function (e) {
      (Vr = !0), (Ti = e);
    },
  };
function by(e, t, n, r, o, i, l, u, a) {
  (Vr = !1), (Ti = null), _y.apply(Ay, arguments);
}
function ky(e, t, n, r, o, i, l, u, a) {
  if ((by.apply(this, arguments), Vr)) {
    if (Vr) {
      var c = Ti;
      (Vr = !1), (Ti = null);
    } else throw Error(I(198));
    xi || ((xi = !0), (Ha = c));
  }
}
function Nn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function op(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Bc(e) {
  if (Nn(e) !== e) throw Error(I(188));
}
function Oy(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Nn(e)), t === null)) throw Error(I(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Bc(o), e;
        if (i === r) return Bc(o), t;
        i = i.sibling;
      }
      throw Error(I(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var l = !1, u = o.child; u; ) {
        if (u === n) {
          (l = !0), (n = o), (r = i);
          break;
        }
        if (u === r) {
          (l = !0), (r = o), (n = i);
          break;
        }
        u = u.sibling;
      }
      if (!l) {
        for (u = i.child; u; ) {
          if (u === n) {
            (l = !0), (n = i), (r = o);
            break;
          }
          if (u === r) {
            (l = !0), (r = i), (n = o);
            break;
          }
          u = u.sibling;
        }
        if (!l) throw Error(I(189));
      }
    }
    if (n.alternate !== r) throw Error(I(190));
  }
  if (n.tag !== 3) throw Error(I(188));
  return n.stateNode.current === n ? e : t;
}
function ip(e) {
  return (e = Oy(e)), e !== null ? lp(e) : null;
}
function lp(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = lp(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ap = Ze.unstable_scheduleCallback,
  Pc = Ze.unstable_cancelCallback,
  Ty = Ze.unstable_shouldYield,
  xy = Ze.unstable_requestPaint,
  Se = Ze.unstable_now,
  Ry = Ze.unstable_getCurrentPriorityLevel,
  es = Ze.unstable_ImmediatePriority,
  up = Ze.unstable_UserBlockingPriority,
  Ri = Ze.unstable_NormalPriority,
  Dy = Ze.unstable_LowPriority,
  sp = Ze.unstable_IdlePriority,
  ul = null,
  kt = null;
function Ny(e) {
  if (kt && typeof kt.onCommitFiberRoot == "function")
    try {
      kt.onCommitFiberRoot(ul, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var mt = Math.clz32 ? Math.clz32 : Ly,
  Fy = Math.log,
  Iy = Math.LN2;
function Ly(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Fy(e) / Iy) | 0)) | 0;
}
var Vo = 64,
  Go = 4194304;
function jr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Di(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var u = l & ~o;
    u !== 0 ? (r = jr(u)) : ((i &= l), i !== 0 && (r = jr(i)));
  } else (l = n & ~o), l !== 0 ? (r = jr(l)) : i !== 0 && (r = jr(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - mt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function By(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Py(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var l = 31 - mt(i),
      u = 1 << l,
      a = o[l];
    a === -1
      ? (!(u & n) || u & r) && (o[l] = By(u, t))
      : a <= t && (e.expiredLanes |= u),
      (i &= ~u);
  }
}
function Va(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function cp() {
  var e = Vo;
  return (Vo <<= 1), !(Vo & 4194240) && (Vo = 64), e;
}
function Yl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function So(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - mt(t)),
    (e[t] = n);
}
function My(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - mt(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function ts(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - mt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var ae = 0;
function dp(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var fp,
  ns,
  pp,
  hp,
  gp,
  Ga = !1,
  Wo = [],
  qt = null,
  Jt = null,
  Kt = null,
  no = new Map(),
  ro = new Map(),
  Wt = [],
  $y =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Mc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      qt = null;
      break;
    case "dragenter":
    case "dragleave":
      Jt = null;
      break;
    case "mouseover":
    case "mouseout":
      Kt = null;
      break;
    case "pointerover":
    case "pointerout":
      no.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ro.delete(t.pointerId);
  }
}
function Rr(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = _o(t)), t !== null && ns(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function jy(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (qt = Rr(qt, e, t, n, r, o)), !0;
    case "dragenter":
      return (Jt = Rr(Jt, e, t, n, r, o)), !0;
    case "mouseover":
      return (Kt = Rr(Kt, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return no.set(i, Rr(no.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), ro.set(i, Rr(ro.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function mp(e) {
  var t = wn(e.target);
  if (t !== null) {
    var n = Nn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = op(n)), t !== null)) {
          (e.blockedOn = t),
            gp(e.priority, function () {
              pp(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function si(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Wa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ja = r), n.target.dispatchEvent(r), (ja = null);
    } else return (t = _o(n)), t !== null && ns(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function $c(e, t, n) {
  si(e) && n.delete(t);
}
function Uy() {
  (Ga = !1),
    qt !== null && si(qt) && (qt = null),
    Jt !== null && si(Jt) && (Jt = null),
    Kt !== null && si(Kt) && (Kt = null),
    no.forEach($c),
    ro.forEach($c);
}
function Dr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ga ||
      ((Ga = !0),
      Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority, Uy)));
}
function oo(e) {
  function t(o) {
    return Dr(o, e);
  }
  if (0 < Wo.length) {
    Dr(Wo[0], e);
    for (var n = 1; n < Wo.length; n++) {
      var r = Wo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    qt !== null && Dr(qt, e),
      Jt !== null && Dr(Jt, e),
      Kt !== null && Dr(Kt, e),
      no.forEach(t),
      ro.forEach(t),
      n = 0;
    n < Wt.length;
    n++
  )
    (r = Wt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Wt.length && ((n = Wt[0]), n.blockedOn === null); )
    mp(n), n.blockedOn === null && Wt.shift();
}
var rr = zt.ReactCurrentBatchConfig,
  Ni = !0;
function zy(e, t, n, r) {
  var o = ae,
    i = rr.transition;
  rr.transition = null;
  try {
    (ae = 1), rs(e, t, n, r);
  } finally {
    (ae = o), (rr.transition = i);
  }
}
function Hy(e, t, n, r) {
  var o = ae,
    i = rr.transition;
  rr.transition = null;
  try {
    (ae = 4), rs(e, t, n, r);
  } finally {
    (ae = o), (rr.transition = i);
  }
}
function rs(e, t, n, r) {
  if (Ni) {
    var o = Wa(e, t, n, r);
    if (o === null) ra(e, t, r, Fi, n), Mc(e, r);
    else if (jy(o, e, t, n, r)) r.stopPropagation();
    else if ((Mc(e, r), t & 4 && -1 < $y.indexOf(e))) {
      for (; o !== null; ) {
        var i = _o(o);
        if (
          (i !== null && fp(i),
          (i = Wa(e, t, n, r)),
          i === null && ra(e, t, r, Fi, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else ra(e, t, r, null, n);
  }
}
var Fi = null;
function Wa(e, t, n, r) {
  if (((Fi = null), (e = Ku(r)), (e = wn(e)), e !== null))
    if (((t = Nn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = op(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Fi = e), null;
}
function yp(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Ry()) {
        case es:
          return 1;
        case up:
          return 4;
        case Ri:
        case Dy:
          return 16;
        case sp:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Xt = null,
  os = null,
  ci = null;
function vp() {
  if (ci) return ci;
  var e,
    t = os,
    n = t.length,
    r,
    o = "value" in Xt ? Xt.value : Xt.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
  return (ci = o.slice(e, 1 < r ? 1 - r : void 0));
}
function di(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Yo() {
  return !0;
}
function jc() {
  return !1;
}
function Je(e) {
  function t(n, r, o, i, l) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = l),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Yo
        : jc),
      (this.isPropagationStopped = jc),
      this
    );
  }
  return (
    ve(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Yo));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Yo));
      },
      persist: function () {},
      isPersistent: Yo,
    }),
    t
  );
}
var wr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  is = Je(wr),
  Co = ve({}, wr, { view: 0, detail: 0 }),
  Vy = Je(Co),
  Xl,
  Zl,
  Nr,
  sl = ve({}, Co, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ls,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Nr &&
            (Nr && e.type === "mousemove"
              ? ((Xl = e.screenX - Nr.screenX), (Zl = e.screenY - Nr.screenY))
              : (Zl = Xl = 0),
            (Nr = e)),
          Xl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Zl;
    },
  }),
  Uc = Je(sl),
  Gy = ve({}, sl, { dataTransfer: 0 }),
  Wy = Je(Gy),
  Yy = ve({}, Co, { relatedTarget: 0 }),
  Ql = Je(Yy),
  Xy = ve({}, wr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Zy = Je(Xy),
  Qy = ve({}, wr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  qy = Je(Qy),
  Jy = ve({}, wr, { data: 0 }),
  zc = Je(Jy),
  Ky = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  ev = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  tv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function nv(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = tv[e]) ? !!t[e] : !1;
}
function ls() {
  return nv;
}
var rv = ve({}, Co, {
    key: function (e) {
      if (e.key) {
        var t = Ky[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = di(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? ev[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ls,
    charCode: function (e) {
      return e.type === "keypress" ? di(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? di(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  ov = Je(rv),
  iv = ve({}, sl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Hc = Je(iv),
  lv = ve({}, Co, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ls,
  }),
  av = Je(lv),
  uv = ve({}, wr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  sv = Je(uv),
  cv = ve({}, sl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  dv = Je(cv),
  fv = [9, 13, 27, 32],
  as = Pt && "CompositionEvent" in window,
  Gr = null;
Pt && "documentMode" in document && (Gr = document.documentMode);
var pv = Pt && "TextEvent" in window && !Gr,
  Ep = Pt && (!as || (Gr && 8 < Gr && 11 >= Gr)),
  Vc = String.fromCharCode(32),
  Gc = !1;
function wp(e, t) {
  switch (e) {
    case "keyup":
      return fv.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Sp(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Hn = !1;
function hv(e, t) {
  switch (e) {
    case "compositionend":
      return Sp(t);
    case "keypress":
      return t.which !== 32 ? null : ((Gc = !0), Vc);
    case "textInput":
      return (e = t.data), e === Vc && Gc ? null : e;
    default:
      return null;
  }
}
function gv(e, t) {
  if (Hn)
    return e === "compositionend" || (!as && wp(e, t))
      ? ((e = vp()), (ci = os = Xt = null), (Hn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Ep && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var mv = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Wc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!mv[e.type] : t === "textarea";
}
function Cp(e, t, n, r) {
  Kf(r),
    (t = Ii(t, "onChange")),
    0 < t.length &&
      ((n = new is("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Wr = null,
  io = null;
function yv(e) {
  Fp(e, 0);
}
function cl(e) {
  var t = Wn(e);
  if (Wf(t)) return e;
}
function vv(e, t) {
  if (e === "change") return t;
}
var _p = !1;
if (Pt) {
  var ql;
  if (Pt) {
    var Jl = "oninput" in document;
    if (!Jl) {
      var Yc = document.createElement("div");
      Yc.setAttribute("oninput", "return;"),
        (Jl = typeof Yc.oninput == "function");
    }
    ql = Jl;
  } else ql = !1;
  _p = ql && (!document.documentMode || 9 < document.documentMode);
}
function Xc() {
  Wr && (Wr.detachEvent("onpropertychange", Ap), (io = Wr = null));
}
function Ap(e) {
  if (e.propertyName === "value" && cl(io)) {
    var t = [];
    Cp(t, io, e, Ku(e)), rp(yv, t);
  }
}
function Ev(e, t, n) {
  e === "focusin"
    ? (Xc(), (Wr = t), (io = n), Wr.attachEvent("onpropertychange", Ap))
    : e === "focusout" && Xc();
}
function wv(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return cl(io);
}
function Sv(e, t) {
  if (e === "click") return cl(t);
}
function Cv(e, t) {
  if (e === "input" || e === "change") return cl(t);
}
function _v(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var vt = typeof Object.is == "function" ? Object.is : _v;
function lo(e, t) {
  if (vt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Ta.call(t, o) || !vt(e[o], t[o])) return !1;
  }
  return !0;
}
function Zc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Qc(e, t) {
  var n = Zc(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Zc(n);
  }
}
function bp(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? bp(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function kp() {
  for (var e = window, t = Oi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Oi(e.document);
  }
  return t;
}
function us(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Av(e) {
  var t = kp(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    bp(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && us(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Qc(n, i));
        var l = Qc(n, r);
        o &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var bv = Pt && "documentMode" in document && 11 >= document.documentMode,
  Vn = null,
  Ya = null,
  Yr = null,
  Xa = !1;
function qc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Xa ||
    Vn == null ||
    Vn !== Oi(r) ||
    ((r = Vn),
    "selectionStart" in r && us(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Yr && lo(Yr, r)) ||
      ((Yr = r),
      (r = Ii(Ya, "onSelect")),
      0 < r.length &&
        ((t = new is("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Vn))));
}
function Xo(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Gn = {
    animationend: Xo("Animation", "AnimationEnd"),
    animationiteration: Xo("Animation", "AnimationIteration"),
    animationstart: Xo("Animation", "AnimationStart"),
    transitionend: Xo("Transition", "TransitionEnd"),
  },
  Kl = {},
  Op = {};
Pt &&
  ((Op = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Gn.animationend.animation,
    delete Gn.animationiteration.animation,
    delete Gn.animationstart.animation),
  "TransitionEvent" in window || delete Gn.transitionend.transition);
function dl(e) {
  if (Kl[e]) return Kl[e];
  if (!Gn[e]) return e;
  var t = Gn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Op) return (Kl[e] = t[n]);
  return e;
}
var Tp = dl("animationend"),
  xp = dl("animationiteration"),
  Rp = dl("animationstart"),
  Dp = dl("transitionend"),
  Np = new Map(),
  Jc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function cn(e, t) {
  Np.set(e, t), Dn(t, [e]);
}
for (var ea = 0; ea < Jc.length; ea++) {
  var ta = Jc[ea],
    kv = ta.toLowerCase(),
    Ov = ta[0].toUpperCase() + ta.slice(1);
  cn(kv, "on" + Ov);
}
cn(Tp, "onAnimationEnd");
cn(xp, "onAnimationIteration");
cn(Rp, "onAnimationStart");
cn("dblclick", "onDoubleClick");
cn("focusin", "onFocus");
cn("focusout", "onBlur");
cn(Dp, "onTransitionEnd");
dr("onMouseEnter", ["mouseout", "mouseover"]);
dr("onMouseLeave", ["mouseout", "mouseover"]);
dr("onPointerEnter", ["pointerout", "pointerover"]);
dr("onPointerLeave", ["pointerout", "pointerover"]);
Dn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Dn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Dn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Dn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Dn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Dn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Ur =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Tv = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ur));
function Kc(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), ky(r, t, void 0, e), (e.currentTarget = null);
}
function Fp(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var u = r[l],
            a = u.instance,
            c = u.currentTarget;
          if (((u = u.listener), a !== i && o.isPropagationStopped())) break e;
          Kc(o, u, c), (i = a);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((u = r[l]),
            (a = u.instance),
            (c = u.currentTarget),
            (u = u.listener),
            a !== i && o.isPropagationStopped())
          )
            break e;
          Kc(o, u, c), (i = a);
        }
    }
  }
  if (xi) throw ((e = Ha), (xi = !1), (Ha = null), e);
}
function de(e, t) {
  var n = t[Ka];
  n === void 0 && (n = t[Ka] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Ip(t, e, 2, !1), n.add(r));
}
function na(e, t, n) {
  var r = 0;
  t && (r |= 4), Ip(n, e, r, t);
}
var Zo = "_reactListening" + Math.random().toString(36).slice(2);
function ao(e) {
  if (!e[Zo]) {
    (e[Zo] = !0),
      Uf.forEach(function (n) {
        n !== "selectionchange" && (Tv.has(n) || na(n, !1, e), na(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Zo] || ((t[Zo] = !0), na("selectionchange", !1, t));
  }
}
function Ip(e, t, n, r) {
  switch (yp(t)) {
    case 1:
      var o = zy;
      break;
    case 4:
      o = Hy;
      break;
    default:
      o = rs;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !za ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function ra(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var u = r.stateNode.containerInfo;
        if (u === o || (u.nodeType === 8 && u.parentNode === o)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var a = l.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = l.stateNode.containerInfo),
              a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return;
            l = l.return;
          }
        for (; u !== null; ) {
          if (((l = wn(u)), l === null)) return;
          if (((a = l.tag), a === 5 || a === 6)) {
            r = i = l;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  rp(function () {
    var c = i,
      d = Ku(n),
      s = [];
    e: {
      var f = Np.get(e);
      if (f !== void 0) {
        var p = is,
          v = e;
        switch (e) {
          case "keypress":
            if (di(n) === 0) break e;
          case "keydown":
          case "keyup":
            p = ov;
            break;
          case "focusin":
            (v = "focus"), (p = Ql);
            break;
          case "focusout":
            (v = "blur"), (p = Ql);
            break;
          case "beforeblur":
          case "afterblur":
            p = Ql;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            p = Uc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = Wy;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = av;
            break;
          case Tp:
          case xp:
          case Rp:
            p = Zy;
            break;
          case Dp:
            p = sv;
            break;
          case "scroll":
            p = Vy;
            break;
          case "wheel":
            p = dv;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = qy;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = Hc;
        }
        var g = (t & 4) !== 0,
          C = !g && e === "scroll",
          y = g ? (f !== null ? f + "Capture" : null) : f;
        g = [];
        for (var h = c, w; h !== null; ) {
          w = h;
          var A = w.stateNode;
          if (
            (w.tag === 5 &&
              A !== null &&
              ((w = A),
              y !== null && ((A = to(h, y)), A != null && g.push(uo(h, A, w)))),
            C)
          )
            break;
          h = h.return;
        }
        0 < g.length &&
          ((f = new p(f, v, null, n, d)), s.push({ event: f, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (p = e === "mouseout" || e === "pointerout"),
          f &&
            n !== ja &&
            (v = n.relatedTarget || n.fromElement) &&
            (wn(v) || v[Mt]))
        )
          break e;
        if (
          (p || f) &&
          ((f =
            d.window === d
              ? d
              : (f = d.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          p
            ? ((v = n.relatedTarget || n.toElement),
              (p = c),
              (v = v ? wn(v) : null),
              v !== null &&
                ((C = Nn(v)), v !== C || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((p = null), (v = c)),
          p !== v)
        ) {
          if (
            ((g = Uc),
            (A = "onMouseLeave"),
            (y = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = Hc),
              (A = "onPointerLeave"),
              (y = "onPointerEnter"),
              (h = "pointer")),
            (C = p == null ? f : Wn(p)),
            (w = v == null ? f : Wn(v)),
            (f = new g(A, h + "leave", p, n, d)),
            (f.target = C),
            (f.relatedTarget = w),
            (A = null),
            wn(d) === c &&
              ((g = new g(y, h + "enter", v, n, d)),
              (g.target = w),
              (g.relatedTarget = C),
              (A = g)),
            (C = A),
            p && v)
          )
            t: {
              for (g = p, y = v, h = 0, w = g; w; w = Bn(w)) h++;
              for (w = 0, A = y; A; A = Bn(A)) w++;
              for (; 0 < h - w; ) (g = Bn(g)), h--;
              for (; 0 < w - h; ) (y = Bn(y)), w--;
              for (; h--; ) {
                if (g === y || (y !== null && g === y.alternate)) break t;
                (g = Bn(g)), (y = Bn(y));
              }
              g = null;
            }
          else g = null;
          p !== null && ed(s, f, p, g, !1),
            v !== null && C !== null && ed(s, C, v, g, !0);
        }
      }
      e: {
        if (
          ((f = c ? Wn(c) : window),
          (p = f.nodeName && f.nodeName.toLowerCase()),
          p === "select" || (p === "input" && f.type === "file"))
        )
          var F = vv;
        else if (Wc(f))
          if (_p) F = Cv;
          else {
            F = wv;
            var N = Ev;
          }
        else
          (p = f.nodeName) &&
            p.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (F = Sv);
        if (F && (F = F(e, c))) {
          Cp(s, F, n, d);
          break e;
        }
        N && N(e, f, c),
          e === "focusout" &&
            (N = f._wrapperState) &&
            N.controlled &&
            f.type === "number" &&
            La(f, "number", f.value);
      }
      switch (((N = c ? Wn(c) : window), e)) {
        case "focusin":
          (Wc(N) || N.contentEditable === "true") &&
            ((Vn = N), (Ya = c), (Yr = null));
          break;
        case "focusout":
          Yr = Ya = Vn = null;
          break;
        case "mousedown":
          Xa = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Xa = !1), qc(s, n, d);
          break;
        case "selectionchange":
          if (bv) break;
        case "keydown":
        case "keyup":
          qc(s, n, d);
      }
      var k;
      if (as)
        e: {
          switch (e) {
            case "compositionstart":
              var O = "onCompositionStart";
              break e;
            case "compositionend":
              O = "onCompositionEnd";
              break e;
            case "compositionupdate":
              O = "onCompositionUpdate";
              break e;
          }
          O = void 0;
        }
      else
        Hn
          ? wp(e, n) && (O = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (O = "onCompositionStart");
      O &&
        (Ep &&
          n.locale !== "ko" &&
          (Hn || O !== "onCompositionStart"
            ? O === "onCompositionEnd" && Hn && (k = vp())
            : ((Xt = d),
              (os = "value" in Xt ? Xt.value : Xt.textContent),
              (Hn = !0))),
        (N = Ii(c, O)),
        0 < N.length &&
          ((O = new zc(O, e, null, n, d)),
          s.push({ event: O, listeners: N }),
          k ? (O.data = k) : ((k = Sp(n)), k !== null && (O.data = k)))),
        (k = pv ? hv(e, n) : gv(e, n)) &&
          ((c = Ii(c, "onBeforeInput")),
          0 < c.length &&
            ((d = new zc("onBeforeInput", "beforeinput", null, n, d)),
            s.push({ event: d, listeners: c }),
            (d.data = k)));
    }
    Fp(s, t);
  });
}
function uo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ii(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = to(e, n)),
      i != null && r.unshift(uo(e, i, o)),
      (i = to(e, t)),
      i != null && r.push(uo(e, i, o))),
      (e = e.return);
  }
  return r;
}
function Bn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ed(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var u = n,
      a = u.alternate,
      c = u.stateNode;
    if (a !== null && a === r) break;
    u.tag === 5 &&
      c !== null &&
      ((u = c),
      o
        ? ((a = to(n, i)), a != null && l.unshift(uo(n, a, u)))
        : o || ((a = to(n, i)), a != null && l.push(uo(n, a, u)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var xv = /\r\n?/g,
  Rv = /\u0000|\uFFFD/g;
function td(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      xv,
      `
`
    )
    .replace(Rv, "");
}
function Qo(e, t, n) {
  if (((t = td(t)), td(e) !== t && n)) throw Error(I(425));
}
function Li() {}
var Za = null,
  Qa = null;
function qa(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ja = typeof setTimeout == "function" ? setTimeout : void 0,
  Dv = typeof clearTimeout == "function" ? clearTimeout : void 0,
  nd = typeof Promise == "function" ? Promise : void 0,
  Nv =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof nd < "u"
      ? function (e) {
          return nd.resolve(null).then(e).catch(Fv);
        }
      : Ja;
function Fv(e) {
  setTimeout(function () {
    throw e;
  });
}
function oa(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), oo(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  oo(t);
}
function en(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function rd(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Sr = Math.random().toString(36).slice(2),
  At = "__reactFiber$" + Sr,
  so = "__reactProps$" + Sr,
  Mt = "__reactContainer$" + Sr,
  Ka = "__reactEvents$" + Sr,
  Iv = "__reactListeners$" + Sr,
  Lv = "__reactHandles$" + Sr;
function wn(e) {
  var t = e[At];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Mt] || n[At])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = rd(e); e !== null; ) {
          if ((n = e[At])) return n;
          e = rd(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function _o(e) {
  return (
    (e = e[At] || e[Mt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Wn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(I(33));
}
function fl(e) {
  return e[so] || null;
}
var eu = [],
  Yn = -1;
function dn(e) {
  return { current: e };
}
function fe(e) {
  0 > Yn || ((e.current = eu[Yn]), (eu[Yn] = null), Yn--);
}
function ce(e, t) {
  Yn++, (eu[Yn] = e.current), (e.current = t);
}
var an = {},
  Ie = dn(an),
  ze = dn(!1),
  kn = an;
function fr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return an;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function He(e) {
  return (e = e.childContextTypes), e != null;
}
function Bi() {
  fe(ze), fe(Ie);
}
function od(e, t, n) {
  if (Ie.current !== an) throw Error(I(168));
  ce(Ie, t), ce(ze, n);
}
function Lp(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(I(108, Ey(e) || "Unknown", o));
  return ve({}, n, r);
}
function Pi(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || an),
    (kn = Ie.current),
    ce(Ie, e),
    ce(ze, ze.current),
    !0
  );
}
function id(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(I(169));
  n
    ? ((e = Lp(e, t, kn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      fe(ze),
      fe(Ie),
      ce(Ie, e))
    : fe(ze),
    ce(ze, n);
}
var Ft = null,
  pl = !1,
  ia = !1;
function Bp(e) {
  Ft === null ? (Ft = [e]) : Ft.push(e);
}
function Bv(e) {
  (pl = !0), Bp(e);
}
function fn() {
  if (!ia && Ft !== null) {
    ia = !0;
    var e = 0,
      t = ae;
    try {
      var n = Ft;
      for (ae = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ft = null), (pl = !1);
    } catch (o) {
      throw (Ft !== null && (Ft = Ft.slice(e + 1)), ap(es, fn), o);
    } finally {
      (ae = t), (ia = !1);
    }
  }
  return null;
}
var Xn = [],
  Zn = 0,
  Mi = null,
  $i = 0,
  et = [],
  tt = 0,
  On = null,
  It = 1,
  Lt = "";
function mn(e, t) {
  (Xn[Zn++] = $i), (Xn[Zn++] = Mi), (Mi = e), ($i = t);
}
function Pp(e, t, n) {
  (et[tt++] = It), (et[tt++] = Lt), (et[tt++] = On), (On = e);
  var r = It;
  e = Lt;
  var o = 32 - mt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - mt(t) + o;
  if (30 < i) {
    var l = o - (o % 5);
    (i = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (o -= l),
      (It = (1 << (32 - mt(t) + o)) | (n << o) | r),
      (Lt = i + e);
  } else (It = (1 << i) | (n << o) | r), (Lt = e);
}
function ss(e) {
  e.return !== null && (mn(e, 1), Pp(e, 1, 0));
}
function cs(e) {
  for (; e === Mi; )
    (Mi = Xn[--Zn]), (Xn[Zn] = null), ($i = Xn[--Zn]), (Xn[Zn] = null);
  for (; e === On; )
    (On = et[--tt]),
      (et[tt] = null),
      (Lt = et[--tt]),
      (et[tt] = null),
      (It = et[--tt]),
      (et[tt] = null);
}
var Xe = null,
  Ye = null,
  ge = !1,
  pt = null;
function Mp(e, t) {
  var n = nt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ld(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Xe = e), (Ye = en(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Xe = e), (Ye = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = On !== null ? { id: It, overflow: Lt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = nt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Xe = e),
            (Ye = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function tu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function nu(e) {
  if (ge) {
    var t = Ye;
    if (t) {
      var n = t;
      if (!ld(e, t)) {
        if (tu(e)) throw Error(I(418));
        t = en(n.nextSibling);
        var r = Xe;
        t && ld(e, t)
          ? Mp(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ge = !1), (Xe = e));
      }
    } else {
      if (tu(e)) throw Error(I(418));
      (e.flags = (e.flags & -4097) | 2), (ge = !1), (Xe = e);
    }
  }
}
function ad(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Xe = e;
}
function qo(e) {
  if (e !== Xe) return !1;
  if (!ge) return ad(e), (ge = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !qa(e.type, e.memoizedProps))),
    t && (t = Ye))
  ) {
    if (tu(e)) throw ($p(), Error(I(418)));
    for (; t; ) Mp(e, t), (t = en(t.nextSibling));
  }
  if ((ad(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(I(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ye = en(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ye = null;
    }
  } else Ye = Xe ? en(e.stateNode.nextSibling) : null;
  return !0;
}
function $p() {
  for (var e = Ye; e; ) e = en(e.nextSibling);
}
function pr() {
  (Ye = Xe = null), (ge = !1);
}
function ds(e) {
  pt === null ? (pt = [e]) : pt.push(e);
}
var Pv = zt.ReactCurrentBatchConfig;
function dt(e, t) {
  if (e && e.defaultProps) {
    (t = ve({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var ji = dn(null),
  Ui = null,
  Qn = null,
  fs = null;
function ps() {
  fs = Qn = Ui = null;
}
function hs(e) {
  var t = ji.current;
  fe(ji), (e._currentValue = t);
}
function ru(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function or(e, t) {
  (Ui = e),
    (fs = Qn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ue = !0), (e.firstContext = null));
}
function it(e) {
  var t = e._currentValue;
  if (fs !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Qn === null)) {
      if (Ui === null) throw Error(I(308));
      (Qn = e), (Ui.dependencies = { lanes: 0, firstContext: e });
    } else Qn = Qn.next = e;
  return t;
}
var Sn = null;
function gs(e) {
  Sn === null ? (Sn = [e]) : Sn.push(e);
}
function jp(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), gs(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    $t(e, r)
  );
}
function $t(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Gt = !1;
function ms(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Up(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Bt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function tn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), oe & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      $t(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), gs(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    $t(e, n)
  );
}
function fi(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ts(e, n);
  }
}
function ud(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = l) : (i = i.next = l), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function zi(e, t, n, r) {
  var o = e.updateQueue;
  Gt = !1;
  var i = o.firstBaseUpdate,
    l = o.lastBaseUpdate,
    u = o.shared.pending;
  if (u !== null) {
    o.shared.pending = null;
    var a = u,
      c = a.next;
    (a.next = null), l === null ? (i = c) : (l.next = c), (l = a);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (u = d.lastBaseUpdate),
      u !== l &&
        (u === null ? (d.firstBaseUpdate = c) : (u.next = c),
        (d.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var s = o.baseState;
    (l = 0), (d = c = a = null), (u = i);
    do {
      var f = u.lane,
        p = u.eventTime;
      if ((r & f) === f) {
        d !== null &&
          (d = d.next =
            {
              eventTime: p,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var v = e,
            g = u;
          switch (((f = t), (p = n), g.tag)) {
            case 1:
              if (((v = g.payload), typeof v == "function")) {
                s = v.call(p, s, f);
                break e;
              }
              s = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = g.payload),
                (f = typeof v == "function" ? v.call(p, s, f) : v),
                f == null)
              )
                break e;
              s = ve({}, s, f);
              break e;
            case 2:
              Gt = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (f = o.effects),
          f === null ? (o.effects = [u]) : f.push(u));
      } else
        (p = {
          eventTime: p,
          lane: f,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          d === null ? ((c = d = p), (a = s)) : (d = d.next = p),
          (l |= f);
      if (((u = u.next), u === null)) {
        if (((u = o.shared.pending), u === null)) break;
        (f = u),
          (u = f.next),
          (f.next = null),
          (o.lastBaseUpdate = f),
          (o.shared.pending = null);
      }
    } while (1);
    if (
      (d === null && (a = s),
      (o.baseState = a),
      (o.firstBaseUpdate = c),
      (o.lastBaseUpdate = d),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (l |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (xn |= l), (e.lanes = l), (e.memoizedState = s);
  }
}
function sd(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(I(191, o));
        o.call(r);
      }
    }
}
var zp = new jf.Component().refs;
function ou(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ve({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var hl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Nn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Be(),
      o = rn(e),
      i = Bt(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = tn(e, i, o)),
      t !== null && (yt(t, e, o, r), fi(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Be(),
      o = rn(e),
      i = Bt(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = tn(e, i, o)),
      t !== null && (yt(t, e, o, r), fi(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Be(),
      r = rn(e),
      o = Bt(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = tn(e, o, r)),
      t !== null && (yt(t, e, r, n), fi(t, e, r));
  },
};
function cd(e, t, n, r, o, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !lo(n, r) || !lo(o, i)
      : !0
  );
}
function Hp(e, t, n) {
  var r = !1,
    o = an,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = it(i))
      : ((o = He(t) ? kn : Ie.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? fr(e, o) : an)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = hl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function dd(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && hl.enqueueReplaceState(t, t.state, null);
}
function iu(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = zp), ms(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = it(i))
    : ((i = He(t) ? kn : Ie.current), (o.context = fr(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (ou(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && hl.enqueueReplaceState(o, o.state, null),
      zi(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Fr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(I(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(I(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (l) {
            var u = o.refs;
            u === zp && (u = o.refs = {}),
              l === null ? delete u[i] : (u[i] = l);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(I(284));
    if (!n._owner) throw Error(I(290, e));
  }
  return e;
}
function Jo(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      I(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function fd(e) {
  var t = e._init;
  return t(e._payload);
}
function Vp(e) {
  function t(y, h) {
    if (e) {
      var w = y.deletions;
      w === null ? ((y.deletions = [h]), (y.flags |= 16)) : w.push(h);
    }
  }
  function n(y, h) {
    if (!e) return null;
    for (; h !== null; ) t(y, h), (h = h.sibling);
    return null;
  }
  function r(y, h) {
    for (y = new Map(); h !== null; )
      h.key !== null ? y.set(h.key, h) : y.set(h.index, h), (h = h.sibling);
    return y;
  }
  function o(y, h) {
    return (y = on(y, h)), (y.index = 0), (y.sibling = null), y;
  }
  function i(y, h, w) {
    return (
      (y.index = w),
      e
        ? ((w = y.alternate),
          w !== null
            ? ((w = w.index), w < h ? ((y.flags |= 2), h) : w)
            : ((y.flags |= 2), h))
        : ((y.flags |= 1048576), h)
    );
  }
  function l(y) {
    return e && y.alternate === null && (y.flags |= 2), y;
  }
  function u(y, h, w, A) {
    return h === null || h.tag !== 6
      ? ((h = fa(w, y.mode, A)), (h.return = y), h)
      : ((h = o(h, w)), (h.return = y), h);
  }
  function a(y, h, w, A) {
    var F = w.type;
    return F === zn
      ? d(y, h, w.props.children, A, w.key)
      : h !== null &&
        (h.elementType === F ||
          (typeof F == "object" &&
            F !== null &&
            F.$$typeof === Vt &&
            fd(F) === h.type))
      ? ((A = o(h, w.props)), (A.ref = Fr(y, h, w)), (A.return = y), A)
      : ((A = vi(w.type, w.key, w.props, null, y.mode, A)),
        (A.ref = Fr(y, h, w)),
        (A.return = y),
        A);
  }
  function c(y, h, w, A) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== w.containerInfo ||
      h.stateNode.implementation !== w.implementation
      ? ((h = pa(w, y.mode, A)), (h.return = y), h)
      : ((h = o(h, w.children || [])), (h.return = y), h);
  }
  function d(y, h, w, A, F) {
    return h === null || h.tag !== 7
      ? ((h = bn(w, y.mode, A, F)), (h.return = y), h)
      : ((h = o(h, w)), (h.return = y), h);
  }
  function s(y, h, w) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = fa("" + h, y.mode, w)), (h.return = y), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Uo:
          return (
            (w = vi(h.type, h.key, h.props, null, y.mode, w)),
            (w.ref = Fr(y, null, h)),
            (w.return = y),
            w
          );
        case Un:
          return (h = pa(h, y.mode, w)), (h.return = y), h;
        case Vt:
          var A = h._init;
          return s(y, A(h._payload), w);
      }
      if ($r(h) || Tr(h))
        return (h = bn(h, y.mode, w, null)), (h.return = y), h;
      Jo(y, h);
    }
    return null;
  }
  function f(y, h, w, A) {
    var F = h !== null ? h.key : null;
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return F !== null ? null : u(y, h, "" + w, A);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Uo:
          return w.key === F ? a(y, h, w, A) : null;
        case Un:
          return w.key === F ? c(y, h, w, A) : null;
        case Vt:
          return (F = w._init), f(y, h, F(w._payload), A);
      }
      if ($r(w) || Tr(w)) return F !== null ? null : d(y, h, w, A, null);
      Jo(y, w);
    }
    return null;
  }
  function p(y, h, w, A, F) {
    if ((typeof A == "string" && A !== "") || typeof A == "number")
      return (y = y.get(w) || null), u(h, y, "" + A, F);
    if (typeof A == "object" && A !== null) {
      switch (A.$$typeof) {
        case Uo:
          return (y = y.get(A.key === null ? w : A.key) || null), a(h, y, A, F);
        case Un:
          return (y = y.get(A.key === null ? w : A.key) || null), c(h, y, A, F);
        case Vt:
          var N = A._init;
          return p(y, h, w, N(A._payload), F);
      }
      if ($r(A) || Tr(A)) return (y = y.get(w) || null), d(h, y, A, F, null);
      Jo(h, A);
    }
    return null;
  }
  function v(y, h, w, A) {
    for (
      var F = null, N = null, k = h, O = (h = 0), $ = null;
      k !== null && O < w.length;
      O++
    ) {
      k.index > O ? (($ = k), (k = null)) : ($ = k.sibling);
      var M = f(y, k, w[O], A);
      if (M === null) {
        k === null && (k = $);
        break;
      }
      e && k && M.alternate === null && t(y, k),
        (h = i(M, h, O)),
        N === null ? (F = M) : (N.sibling = M),
        (N = M),
        (k = $);
    }
    if (O === w.length) return n(y, k), ge && mn(y, O), F;
    if (k === null) {
      for (; O < w.length; O++)
        (k = s(y, w[O], A)),
          k !== null &&
            ((h = i(k, h, O)), N === null ? (F = k) : (N.sibling = k), (N = k));
      return ge && mn(y, O), F;
    }
    for (k = r(y, k); O < w.length; O++)
      ($ = p(k, y, O, w[O], A)),
        $ !== null &&
          (e && $.alternate !== null && k.delete($.key === null ? O : $.key),
          (h = i($, h, O)),
          N === null ? (F = $) : (N.sibling = $),
          (N = $));
    return (
      e &&
        k.forEach(function (V) {
          return t(y, V);
        }),
      ge && mn(y, O),
      F
    );
  }
  function g(y, h, w, A) {
    var F = Tr(w);
    if (typeof F != "function") throw Error(I(150));
    if (((w = F.call(w)), w == null)) throw Error(I(151));
    for (
      var N = (F = null), k = h, O = (h = 0), $ = null, M = w.next();
      k !== null && !M.done;
      O++, M = w.next()
    ) {
      k.index > O ? (($ = k), (k = null)) : ($ = k.sibling);
      var V = f(y, k, M.value, A);
      if (V === null) {
        k === null && (k = $);
        break;
      }
      e && k && V.alternate === null && t(y, k),
        (h = i(V, h, O)),
        N === null ? (F = V) : (N.sibling = V),
        (N = V),
        (k = $);
    }
    if (M.done) return n(y, k), ge && mn(y, O), F;
    if (k === null) {
      for (; !M.done; O++, M = w.next())
        (M = s(y, M.value, A)),
          M !== null &&
            ((h = i(M, h, O)), N === null ? (F = M) : (N.sibling = M), (N = M));
      return ge && mn(y, O), F;
    }
    for (k = r(y, k); !M.done; O++, M = w.next())
      (M = p(k, y, O, M.value, A)),
        M !== null &&
          (e && M.alternate !== null && k.delete(M.key === null ? O : M.key),
          (h = i(M, h, O)),
          N === null ? (F = M) : (N.sibling = M),
          (N = M));
    return (
      e &&
        k.forEach(function (T) {
          return t(y, T);
        }),
      ge && mn(y, O),
      F
    );
  }
  function C(y, h, w, A) {
    if (
      (typeof w == "object" &&
        w !== null &&
        w.type === zn &&
        w.key === null &&
        (w = w.props.children),
      typeof w == "object" && w !== null)
    ) {
      switch (w.$$typeof) {
        case Uo:
          e: {
            for (var F = w.key, N = h; N !== null; ) {
              if (N.key === F) {
                if (((F = w.type), F === zn)) {
                  if (N.tag === 7) {
                    n(y, N.sibling),
                      (h = o(N, w.props.children)),
                      (h.return = y),
                      (y = h);
                    break e;
                  }
                } else if (
                  N.elementType === F ||
                  (typeof F == "object" &&
                    F !== null &&
                    F.$$typeof === Vt &&
                    fd(F) === N.type)
                ) {
                  n(y, N.sibling),
                    (h = o(N, w.props)),
                    (h.ref = Fr(y, N, w)),
                    (h.return = y),
                    (y = h);
                  break e;
                }
                n(y, N);
                break;
              } else t(y, N);
              N = N.sibling;
            }
            w.type === zn
              ? ((h = bn(w.props.children, y.mode, A, w.key)),
                (h.return = y),
                (y = h))
              : ((A = vi(w.type, w.key, w.props, null, y.mode, A)),
                (A.ref = Fr(y, h, w)),
                (A.return = y),
                (y = A));
          }
          return l(y);
        case Un:
          e: {
            for (N = w.key; h !== null; ) {
              if (h.key === N)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === w.containerInfo &&
                  h.stateNode.implementation === w.implementation
                ) {
                  n(y, h.sibling),
                    (h = o(h, w.children || [])),
                    (h.return = y),
                    (y = h);
                  break e;
                } else {
                  n(y, h);
                  break;
                }
              else t(y, h);
              h = h.sibling;
            }
            (h = pa(w, y.mode, A)), (h.return = y), (y = h);
          }
          return l(y);
        case Vt:
          return (N = w._init), C(y, h, N(w._payload), A);
      }
      if ($r(w)) return v(y, h, w, A);
      if (Tr(w)) return g(y, h, w, A);
      Jo(y, w);
    }
    return (typeof w == "string" && w !== "") || typeof w == "number"
      ? ((w = "" + w),
        h !== null && h.tag === 6
          ? (n(y, h.sibling), (h = o(h, w)), (h.return = y), (y = h))
          : (n(y, h), (h = fa(w, y.mode, A)), (h.return = y), (y = h)),
        l(y))
      : n(y, h);
  }
  return C;
}
var hr = Vp(!0),
  Gp = Vp(!1),
  Ao = {},
  Ot = dn(Ao),
  co = dn(Ao),
  fo = dn(Ao);
function Cn(e) {
  if (e === Ao) throw Error(I(174));
  return e;
}
function ys(e, t) {
  switch ((ce(fo, t), ce(co, e), ce(Ot, Ao), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Pa(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Pa(t, e));
  }
  fe(Ot), ce(Ot, t);
}
function gr() {
  fe(Ot), fe(co), fe(fo);
}
function Wp(e) {
  Cn(fo.current);
  var t = Cn(Ot.current),
    n = Pa(t, e.type);
  t !== n && (ce(co, e), ce(Ot, n));
}
function vs(e) {
  co.current === e && (fe(Ot), fe(co));
}
var me = dn(0);
function Hi(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var la = [];
function Es() {
  for (var e = 0; e < la.length; e++)
    la[e]._workInProgressVersionPrimary = null;
  la.length = 0;
}
var pi = zt.ReactCurrentDispatcher,
  aa = zt.ReactCurrentBatchConfig,
  Tn = 0,
  ye = null,
  Ae = null,
  ke = null,
  Vi = !1,
  Xr = !1,
  po = 0,
  Mv = 0;
function De() {
  throw Error(I(321));
}
function ws(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!vt(e[n], t[n])) return !1;
  return !0;
}
function Ss(e, t, n, r, o, i) {
  if (
    ((Tn = i),
    (ye = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (pi.current = e === null || e.memoizedState === null ? zv : Hv),
    (e = n(r, o)),
    Xr)
  ) {
    i = 0;
    do {
      if (((Xr = !1), (po = 0), 25 <= i)) throw Error(I(301));
      (i += 1),
        (ke = Ae = null),
        (t.updateQueue = null),
        (pi.current = Vv),
        (e = n(r, o));
    } while (Xr);
  }
  if (
    ((pi.current = Gi),
    (t = Ae !== null && Ae.next !== null),
    (Tn = 0),
    (ke = Ae = ye = null),
    (Vi = !1),
    t)
  )
    throw Error(I(300));
  return e;
}
function Cs() {
  var e = po !== 0;
  return (po = 0), e;
}
function _t() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ke === null ? (ye.memoizedState = ke = e) : (ke = ke.next = e), ke;
}
function lt() {
  if (Ae === null) {
    var e = ye.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ae.next;
  var t = ke === null ? ye.memoizedState : ke.next;
  if (t !== null) (ke = t), (Ae = e);
  else {
    if (e === null) throw Error(I(310));
    (Ae = e),
      (e = {
        memoizedState: Ae.memoizedState,
        baseState: Ae.baseState,
        baseQueue: Ae.baseQueue,
        queue: Ae.queue,
        next: null,
      }),
      ke === null ? (ye.memoizedState = ke = e) : (ke = ke.next = e);
  }
  return ke;
}
function ho(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ua(e) {
  var t = lt(),
    n = t.queue;
  if (n === null) throw Error(I(311));
  n.lastRenderedReducer = e;
  var r = Ae,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var l = o.next;
      (o.next = i.next), (i.next = l);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var u = (l = null),
      a = null,
      c = i;
    do {
      var d = c.lane;
      if ((Tn & d) === d)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var s = {
          lane: d,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        a === null ? ((u = a = s), (l = r)) : (a = a.next = s),
          (ye.lanes |= d),
          (xn |= d);
      }
      c = c.next;
    } while (c !== null && c !== i);
    a === null ? (l = r) : (a.next = u),
      vt(r, t.memoizedState) || (Ue = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (ye.lanes |= i), (xn |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function sa(e) {
  var t = lt(),
    n = t.queue;
  if (n === null) throw Error(I(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = (o = o.next);
    do (i = e(i, l.action)), (l = l.next);
    while (l !== o);
    vt(i, t.memoizedState) || (Ue = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Yp() {}
function Xp(e, t) {
  var n = ye,
    r = lt(),
    o = t(),
    i = !vt(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Ue = !0)),
    (r = r.queue),
    _s(qp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (ke !== null && ke.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      go(9, Qp.bind(null, n, r, o, t), void 0, null),
      Oe === null)
    )
      throw Error(I(349));
    Tn & 30 || Zp(n, t, o);
  }
  return o;
}
function Zp(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ye.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ye.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Qp(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Jp(t) && Kp(e);
}
function qp(e, t, n) {
  return n(function () {
    Jp(t) && Kp(e);
  });
}
function Jp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !vt(e, n);
  } catch {
    return !0;
  }
}
function Kp(e) {
  var t = $t(e, 1);
  t !== null && yt(t, e, 1, -1);
}
function pd(e) {
  var t = _t();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ho,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Uv.bind(null, ye, e)),
    [t.memoizedState, e]
  );
}
function go(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ye.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ye.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function eh() {
  return lt().memoizedState;
}
function hi(e, t, n, r) {
  var o = _t();
  (ye.flags |= e),
    (o.memoizedState = go(1 | t, n, void 0, r === void 0 ? null : r));
}
function gl(e, t, n, r) {
  var o = lt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Ae !== null) {
    var l = Ae.memoizedState;
    if (((i = l.destroy), r !== null && ws(r, l.deps))) {
      o.memoizedState = go(t, n, i, r);
      return;
    }
  }
  (ye.flags |= e), (o.memoizedState = go(1 | t, n, i, r));
}
function hd(e, t) {
  return hi(8390656, 8, e, t);
}
function _s(e, t) {
  return gl(2048, 8, e, t);
}
function th(e, t) {
  return gl(4, 2, e, t);
}
function nh(e, t) {
  return gl(4, 4, e, t);
}
function rh(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function oh(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), gl(4, 4, rh.bind(null, t, e), n)
  );
}
function As() {}
function ih(e, t) {
  var n = lt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ws(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function lh(e, t) {
  var n = lt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ws(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function ah(e, t, n) {
  return Tn & 21
    ? (vt(n, t) || ((n = cp()), (ye.lanes |= n), (xn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ue = !0)), (e.memoizedState = n));
}
function $v(e, t) {
  var n = ae;
  (ae = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = aa.transition;
  aa.transition = {};
  try {
    e(!1), t();
  } finally {
    (ae = n), (aa.transition = r);
  }
}
function uh() {
  return lt().memoizedState;
}
function jv(e, t, n) {
  var r = rn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    sh(e))
  )
    ch(t, n);
  else if (((n = jp(e, t, n, r)), n !== null)) {
    var o = Be();
    yt(n, e, r, o), dh(n, t, r);
  }
}
function Uv(e, t, n) {
  var r = rn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (sh(e)) ch(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var l = t.lastRenderedState,
          u = i(l, n);
        if (((o.hasEagerState = !0), (o.eagerState = u), vt(u, l))) {
          var a = t.interleaved;
          a === null
            ? ((o.next = o), gs(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = jp(e, t, o, r)),
      n !== null && ((o = Be()), yt(n, e, r, o), dh(n, t, r));
  }
}
function sh(e) {
  var t = e.alternate;
  return e === ye || (t !== null && t === ye);
}
function ch(e, t) {
  Xr = Vi = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function dh(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ts(e, n);
  }
}
var Gi = {
    readContext: it,
    useCallback: De,
    useContext: De,
    useEffect: De,
    useImperativeHandle: De,
    useInsertionEffect: De,
    useLayoutEffect: De,
    useMemo: De,
    useReducer: De,
    useRef: De,
    useState: De,
    useDebugValue: De,
    useDeferredValue: De,
    useTransition: De,
    useMutableSource: De,
    useSyncExternalStore: De,
    useId: De,
    unstable_isNewReconciler: !1,
  },
  zv = {
    readContext: it,
    useCallback: function (e, t) {
      return (_t().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: it,
    useEffect: hd,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        hi(4194308, 4, rh.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return hi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return hi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = _t();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = _t();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = jv.bind(null, ye, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = _t();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: pd,
    useDebugValue: As,
    useDeferredValue: function (e) {
      return (_t().memoizedState = e);
    },
    useTransition: function () {
      var e = pd(!1),
        t = e[0];
      return (e = $v.bind(null, e[1])), (_t().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ye,
        o = _t();
      if (ge) {
        if (n === void 0) throw Error(I(407));
        n = n();
      } else {
        if (((n = t()), Oe === null)) throw Error(I(349));
        Tn & 30 || Zp(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        hd(qp.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        go(9, Qp.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = _t(),
        t = Oe.identifierPrefix;
      if (ge) {
        var n = Lt,
          r = It;
        (n = (r & ~(1 << (32 - mt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = po++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Mv++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Hv = {
    readContext: it,
    useCallback: ih,
    useContext: it,
    useEffect: _s,
    useImperativeHandle: oh,
    useInsertionEffect: th,
    useLayoutEffect: nh,
    useMemo: lh,
    useReducer: ua,
    useRef: eh,
    useState: function () {
      return ua(ho);
    },
    useDebugValue: As,
    useDeferredValue: function (e) {
      var t = lt();
      return ah(t, Ae.memoizedState, e);
    },
    useTransition: function () {
      var e = ua(ho)[0],
        t = lt().memoizedState;
      return [e, t];
    },
    useMutableSource: Yp,
    useSyncExternalStore: Xp,
    useId: uh,
    unstable_isNewReconciler: !1,
  },
  Vv = {
    readContext: it,
    useCallback: ih,
    useContext: it,
    useEffect: _s,
    useImperativeHandle: oh,
    useInsertionEffect: th,
    useLayoutEffect: nh,
    useMemo: lh,
    useReducer: sa,
    useRef: eh,
    useState: function () {
      return sa(ho);
    },
    useDebugValue: As,
    useDeferredValue: function (e) {
      var t = lt();
      return Ae === null ? (t.memoizedState = e) : ah(t, Ae.memoizedState, e);
    },
    useTransition: function () {
      var e = sa(ho)[0],
        t = lt().memoizedState;
      return [e, t];
    },
    useMutableSource: Yp,
    useSyncExternalStore: Xp,
    useId: uh,
    unstable_isNewReconciler: !1,
  };
function mr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += vy(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function ca(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function lu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Gv = typeof WeakMap == "function" ? WeakMap : Map;
function fh(e, t, n) {
  (n = Bt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Yi || ((Yi = !0), (mu = r)), lu(e, t);
    }),
    n
  );
}
function ph(e, t, n) {
  (n = Bt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        lu(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        lu(e, t),
          typeof r != "function" &&
            (nn === null ? (nn = new Set([this])) : nn.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function gd(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Gv();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = i2.bind(null, e, t, n)), t.then(e, e));
}
function md(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function yd(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Bt(-1, 1)), (t.tag = 2), tn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Wv = zt.ReactCurrentOwner,
  Ue = !1;
function Le(e, t, n, r) {
  t.child = e === null ? Gp(t, null, n, r) : hr(t, e.child, n, r);
}
function vd(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    or(t, o),
    (r = Ss(e, t, n, r, i, o)),
    (n = Cs()),
    e !== null && !Ue
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        jt(e, t, o))
      : (ge && n && ss(t), (t.flags |= 1), Le(e, t, r, o), t.child)
  );
}
function Ed(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Ns(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), hh(e, t, i, r, o))
      : ((e = vi(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var l = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : lo), n(l, r) && e.ref === t.ref)
    )
      return jt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = on(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function hh(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (lo(i, r) && e.ref === t.ref)
      if (((Ue = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Ue = !0);
      else return (t.lanes = e.lanes), jt(e, t, o);
  }
  return au(e, t, n, r, o);
}
function gh(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ce(Jn, We),
        (We |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ce(Jn, We),
          (We |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        ce(Jn, We),
        (We |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ce(Jn, We),
      (We |= r);
  return Le(e, t, o, n), t.child;
}
function mh(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function au(e, t, n, r, o) {
  var i = He(n) ? kn : Ie.current;
  return (
    (i = fr(t, i)),
    or(t, o),
    (n = Ss(e, t, n, r, i, o)),
    (r = Cs()),
    e !== null && !Ue
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        jt(e, t, o))
      : (ge && r && ss(t), (t.flags |= 1), Le(e, t, n, o), t.child)
  );
}
function wd(e, t, n, r, o) {
  if (He(n)) {
    var i = !0;
    Pi(t);
  } else i = !1;
  if ((or(t, o), t.stateNode === null))
    gi(e, t), Hp(t, n, r), iu(t, n, r, o), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      u = t.memoizedProps;
    l.props = u;
    var a = l.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = it(c))
      : ((c = He(n) ? kn : Ie.current), (c = fr(t, c)));
    var d = n.getDerivedStateFromProps,
      s =
        typeof d == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    s ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((u !== r || a !== c) && dd(t, l, r, c)),
      (Gt = !1);
    var f = t.memoizedState;
    (l.state = f),
      zi(t, r, l, o),
      (a = t.memoizedState),
      u !== r || f !== a || ze.current || Gt
        ? (typeof d == "function" && (ou(t, n, d, r), (a = t.memoizedState)),
          (u = Gt || cd(t, n, u, r, f, a, c))
            ? (s ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (l.props = r),
          (l.state = a),
          (l.context = c),
          (r = u))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (l = t.stateNode),
      Up(e, t),
      (u = t.memoizedProps),
      (c = t.type === t.elementType ? u : dt(t.type, u)),
      (l.props = c),
      (s = t.pendingProps),
      (f = l.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = it(a))
        : ((a = He(n) ? kn : Ie.current), (a = fr(t, a)));
    var p = n.getDerivedStateFromProps;
    (d =
      typeof p == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((u !== s || f !== a) && dd(t, l, r, a)),
      (Gt = !1),
      (f = t.memoizedState),
      (l.state = f),
      zi(t, r, l, o);
    var v = t.memoizedState;
    u !== s || f !== v || ze.current || Gt
      ? (typeof p == "function" && (ou(t, n, p, r), (v = t.memoizedState)),
        (c = Gt || cd(t, n, c, r, f, v, a) || !1)
          ? (d ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, v, a),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, v, a)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (u === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (l.props = r),
        (l.state = v),
        (l.context = a),
        (r = c))
      : (typeof l.componentDidUpdate != "function" ||
          (u === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return uu(e, t, n, r, i, o);
}
function uu(e, t, n, r, o, i) {
  mh(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && id(t, n, !1), jt(e, t, i);
  (r = t.stateNode), (Wv.current = t);
  var u =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = hr(t, e.child, null, i)), (t.child = hr(t, null, u, i)))
      : Le(e, t, u, i),
    (t.memoizedState = r.state),
    o && id(t, n, !0),
    t.child
  );
}
function yh(e) {
  var t = e.stateNode;
  t.pendingContext
    ? od(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && od(e, t.context, !1),
    ys(e, t.containerInfo);
}
function Sd(e, t, n, r, o) {
  return pr(), ds(o), (t.flags |= 256), Le(e, t, n, r), t.child;
}
var su = { dehydrated: null, treeContext: null, retryLane: 0 };
function cu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function vh(e, t, n) {
  var r = t.pendingProps,
    o = me.current,
    i = !1,
    l = (t.flags & 128) !== 0,
    u;
  if (
    ((u = l) ||
      (u = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    u
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    ce(me, o & 1),
    e === null)
  )
    return (
      nu(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = l))
                : (i = vl(l, r, 0, null)),
              (e = bn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = cu(n)),
              (t.memoizedState = su),
              e)
            : bs(t, l))
    );
  if (((o = e.memoizedState), o !== null && ((u = o.dehydrated), u !== null)))
    return Yv(e, t, l, r, u, o, n);
  if (i) {
    (i = r.fallback), (l = t.mode), (o = e.child), (u = o.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = on(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      u !== null ? (i = on(u, i)) : ((i = bn(i, l, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? cu(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = su),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = on(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function bs(e, t) {
  return (
    (t = vl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ko(e, t, n, r) {
  return (
    r !== null && ds(r),
    hr(t, e.child, null, n),
    (e = bs(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Yv(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ca(Error(I(422)))), Ko(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = vl({ mode: "visible", children: r.children }, o, 0, null)),
        (i = bn(i, o, l, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && hr(t, e.child, null, l),
        (t.child.memoizedState = cu(l)),
        (t.memoizedState = su),
        i);
  if (!(t.mode & 1)) return Ko(e, t, l, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (i = Error(I(419))), (r = ca(i, r, void 0)), Ko(e, t, l, r);
  }
  if (((u = (l & e.childLanes) !== 0), Ue || u)) {
    if (((r = Oe), r !== null)) {
      switch (l & -l) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | l) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), $t(e, o), yt(r, e, o, -1));
    }
    return Ds(), (r = ca(Error(I(421)))), Ko(e, t, l, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = l2.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Ye = en(o.nextSibling)),
      (Xe = t),
      (ge = !0),
      (pt = null),
      e !== null &&
        ((et[tt++] = It),
        (et[tt++] = Lt),
        (et[tt++] = On),
        (It = e.id),
        (Lt = e.overflow),
        (On = t)),
      (t = bs(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Cd(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ru(e.return, t, n);
}
function da(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function Eh(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Le(e, t, r.children, n), (r = me.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Cd(e, n, t);
        else if (e.tag === 19) Cd(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ce(me, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Hi(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          da(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Hi(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        da(t, !0, n, null, i);
        break;
      case "together":
        da(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function gi(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function jt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (xn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(I(153));
  if (t.child !== null) {
    for (
      e = t.child, n = on(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = on(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Xv(e, t, n) {
  switch (t.tag) {
    case 3:
      yh(t), pr();
      break;
    case 5:
      Wp(t);
      break;
    case 1:
      He(t.type) && Pi(t);
      break;
    case 4:
      ys(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      ce(ji, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ce(me, me.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? vh(e, t, n)
          : (ce(me, me.current & 1),
            (e = jt(e, t, n)),
            e !== null ? e.sibling : null);
      ce(me, me.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Eh(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        ce(me, me.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), gh(e, t, n);
  }
  return jt(e, t, n);
}
var wh, du, Sh, Ch;
wh = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
du = function () {};
Sh = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Cn(Ot.current);
    var i = null;
    switch (n) {
      case "input":
        (o = Fa(e, o)), (r = Fa(e, r)), (i = []);
        break;
      case "select":
        (o = ve({}, o, { value: void 0 })),
          (r = ve({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = Ba(e, o)), (r = Ba(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Li);
    }
    Ma(n, r);
    var l;
    n = null;
    for (c in o)
      if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null)
        if (c === "style") {
          var u = o[c];
          for (l in u) u.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Kr.hasOwnProperty(c)
              ? i || (i = [])
              : (i = i || []).push(c, null));
    for (c in r) {
      var a = r[c];
      if (
        ((u = o != null ? o[c] : void 0),
        r.hasOwnProperty(c) && a !== u && (a != null || u != null))
      )
        if (c === "style")
          if (u) {
            for (l in u)
              !u.hasOwnProperty(l) ||
                (a && a.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in a)
              a.hasOwnProperty(l) &&
                u[l] !== a[l] &&
                (n || (n = {}), (n[l] = a[l]));
          } else n || (i || (i = []), i.push(c, n)), (n = a);
        else
          c === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (u = u ? u.__html : void 0),
              a != null && u !== a && (i = i || []).push(c, a))
            : c === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (i = i || []).push(c, "" + a)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Kr.hasOwnProperty(c)
                ? (a != null && c === "onScroll" && de("scroll", e),
                  i || u === a || (i = []))
                : (i = i || []).push(c, a));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Ch = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Ir(e, t) {
  if (!ge)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ne(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Zv(e, t, n) {
  var r = t.pendingProps;
  switch ((cs(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ne(t), null;
    case 1:
      return He(t.type) && Bi(), Ne(t), null;
    case 3:
      return (
        (r = t.stateNode),
        gr(),
        fe(ze),
        fe(Ie),
        Es(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (qo(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), pt !== null && (Eu(pt), (pt = null)))),
        du(e, t),
        Ne(t),
        null
      );
    case 5:
      vs(t);
      var o = Cn(fo.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Sh(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(I(166));
          return Ne(t), null;
        }
        if (((e = Cn(Ot.current)), qo(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[At] = t), (r[so] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              de("cancel", r), de("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              de("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Ur.length; o++) de(Ur[o], r);
              break;
            case "source":
              de("error", r);
              break;
            case "img":
            case "image":
            case "link":
              de("error", r), de("load", r);
              break;
            case "details":
              de("toggle", r);
              break;
            case "input":
              Dc(r, i), de("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                de("invalid", r);
              break;
            case "textarea":
              Fc(r, i), de("invalid", r);
          }
          Ma(n, i), (o = null);
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var u = i[l];
              l === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      Qo(r.textContent, u, e),
                    (o = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      Qo(r.textContent, u, e),
                    (o = ["children", "" + u]))
                : Kr.hasOwnProperty(l) &&
                  u != null &&
                  l === "onScroll" &&
                  de("scroll", r);
            }
          switch (n) {
            case "input":
              zo(r), Nc(r, i, !0);
              break;
            case "textarea":
              zo(r), Ic(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Li);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Zf(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === "select" &&
                    ((l = e),
                    r.multiple
                      ? (l.multiple = !0)
                      : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[At] = t),
            (e[so] = r),
            wh(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = $a(n, r)), n)) {
              case "dialog":
                de("cancel", e), de("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                de("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Ur.length; o++) de(Ur[o], e);
                o = r;
                break;
              case "source":
                de("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                de("error", e), de("load", e), (o = r);
                break;
              case "details":
                de("toggle", e), (o = r);
                break;
              case "input":
                Dc(e, r), (o = Fa(e, r)), de("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = ve({}, r, { value: void 0 })),
                  de("invalid", e);
                break;
              case "textarea":
                Fc(e, r), (o = Ba(e, r)), de("invalid", e);
                break;
              default:
                o = r;
            }
            Ma(n, o), (u = o);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var a = u[i];
                i === "style"
                  ? Jf(e, a)
                  : i === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Qf(e, a))
                  : i === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && eo(e, a)
                    : typeof a == "number" && eo(e, "" + a)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Kr.hasOwnProperty(i)
                      ? a != null && i === "onScroll" && de("scroll", e)
                      : a != null && Zu(e, i, a, l));
              }
            switch (n) {
              case "input":
                zo(e), Nc(e, r, !1);
                break;
              case "textarea":
                zo(e), Ic(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ln(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? er(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      er(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Li);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ne(t), null;
    case 6:
      if (e && t.stateNode != null) Ch(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(I(166));
        if (((n = Cn(fo.current)), Cn(Ot.current), qo(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[At] = t),
            (i = r.nodeValue !== n) && ((e = Xe), e !== null))
          )
            switch (e.tag) {
              case 3:
                Qo(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Qo(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[At] = t),
            (t.stateNode = r);
      }
      return Ne(t), null;
    case 13:
      if (
        (fe(me),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ge && Ye !== null && t.mode & 1 && !(t.flags & 128))
          $p(), pr(), (t.flags |= 98560), (i = !1);
        else if (((i = qo(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(I(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(I(317));
            i[At] = t;
          } else
            pr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ne(t), (i = !1);
        } else pt !== null && (Eu(pt), (pt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || me.current & 1 ? be === 0 && (be = 3) : Ds())),
          t.updateQueue !== null && (t.flags |= 4),
          Ne(t),
          null);
    case 4:
      return (
        gr(), du(e, t), e === null && ao(t.stateNode.containerInfo), Ne(t), null
      );
    case 10:
      return hs(t.type._context), Ne(t), null;
    case 17:
      return He(t.type) && Bi(), Ne(t), null;
    case 19:
      if ((fe(me), (i = t.memoizedState), i === null)) return Ne(t), null;
      if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (r) Ir(i, !1);
        else {
          if (be !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = Hi(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    Ir(i, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (l = i.alternate),
                    l === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = l.childLanes),
                        (i.lanes = l.lanes),
                        (i.child = l.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = l.memoizedProps),
                        (i.memoizedState = l.memoizedState),
                        (i.updateQueue = l.updateQueue),
                        (i.type = l.type),
                        (e = l.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ce(me, (me.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Se() > yr &&
            ((t.flags |= 128), (r = !0), Ir(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Hi(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Ir(i, !0),
              i.tail === null && i.tailMode === "hidden" && !l.alternate && !ge)
            )
              return Ne(t), null;
          } else
            2 * Se() - i.renderingStartTime > yr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Ir(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = i.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (i.last = l));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Se()),
          (t.sibling = null),
          (n = me.current),
          ce(me, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ne(t), null);
    case 22:
    case 23:
      return (
        Rs(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? We & 1073741824 && (Ne(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ne(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(I(156, t.tag));
}
function Qv(e, t) {
  switch ((cs(t), t.tag)) {
    case 1:
      return (
        He(t.type) && Bi(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        gr(),
        fe(ze),
        fe(Ie),
        Es(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return vs(t), null;
    case 13:
      if (
        (fe(me), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(I(340));
        pr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return fe(me), null;
    case 4:
      return gr(), null;
    case 10:
      return hs(t.type._context), null;
    case 22:
    case 23:
      return Rs(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ei = !1,
  Fe = !1,
  qv = typeof WeakSet == "function" ? WeakSet : Set,
  j = null;
function qn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Ee(e, t, r);
      }
    else n.current = null;
}
function fu(e, t, n) {
  try {
    n();
  } catch (r) {
    Ee(e, t, r);
  }
}
var _d = !1;
function Jv(e, t) {
  if (((Za = Ni), (e = kp()), us(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            u = -1,
            a = -1,
            c = 0,
            d = 0,
            s = e,
            f = null;
          t: for (;;) {
            for (
              var p;
              s !== n || (o !== 0 && s.nodeType !== 3) || (u = l + o),
                s !== i || (r !== 0 && s.nodeType !== 3) || (a = l + r),
                s.nodeType === 3 && (l += s.nodeValue.length),
                (p = s.firstChild) !== null;

            )
              (f = s), (s = p);
            for (;;) {
              if (s === e) break t;
              if (
                (f === n && ++c === o && (u = l),
                f === i && ++d === r && (a = l),
                (p = s.nextSibling) !== null)
              )
                break;
              (s = f), (f = s.parentNode);
            }
            s = p;
          }
          n = u === -1 || a === -1 ? null : { start: u, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Qa = { focusedElem: e, selectionRange: n }, Ni = !1, j = t; j !== null; )
    if (((t = j), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (j = e);
    else
      for (; j !== null; ) {
        t = j;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var g = v.memoizedProps,
                    C = v.memoizedState,
                    y = t.stateNode,
                    h = y.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : dt(t.type, g),
                      C
                    );
                  y.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var w = t.stateNode.containerInfo;
                w.nodeType === 1
                  ? (w.textContent = "")
                  : w.nodeType === 9 &&
                    w.documentElement &&
                    w.removeChild(w.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(I(163));
            }
        } catch (A) {
          Ee(t, t.return, A);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (j = e);
          break;
        }
        j = t.return;
      }
  return (v = _d), (_d = !1), v;
}
function Zr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && fu(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function ml(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function pu(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function _h(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), _h(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[At], delete t[so], delete t[Ka], delete t[Iv], delete t[Lv])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Ah(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ad(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ah(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function hu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Li));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (hu(e, t, n), e = e.sibling; e !== null; ) hu(e, t, n), (e = e.sibling);
}
function gu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (gu(e, t, n), e = e.sibling; e !== null; ) gu(e, t, n), (e = e.sibling);
}
var Te = null,
  ft = !1;
function Ht(e, t, n) {
  for (n = n.child; n !== null; ) bh(e, t, n), (n = n.sibling);
}
function bh(e, t, n) {
  if (kt && typeof kt.onCommitFiberUnmount == "function")
    try {
      kt.onCommitFiberUnmount(ul, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Fe || qn(n, t);
    case 6:
      var r = Te,
        o = ft;
      (Te = null),
        Ht(e, t, n),
        (Te = r),
        (ft = o),
        Te !== null &&
          (ft
            ? ((e = Te),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Te.removeChild(n.stateNode));
      break;
    case 18:
      Te !== null &&
        (ft
          ? ((e = Te),
            (n = n.stateNode),
            e.nodeType === 8
              ? oa(e.parentNode, n)
              : e.nodeType === 1 && oa(e, n),
            oo(e))
          : oa(Te, n.stateNode));
      break;
    case 4:
      (r = Te),
        (o = ft),
        (Te = n.stateNode.containerInfo),
        (ft = !0),
        Ht(e, t, n),
        (Te = r),
        (ft = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Fe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            l = i.destroy;
          (i = i.tag),
            l !== void 0 && (i & 2 || i & 4) && fu(n, t, l),
            (o = o.next);
        } while (o !== r);
      }
      Ht(e, t, n);
      break;
    case 1:
      if (
        !Fe &&
        (qn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          Ee(n, t, u);
        }
      Ht(e, t, n);
      break;
    case 21:
      Ht(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Fe = (r = Fe) || n.memoizedState !== null), Ht(e, t, n), (Fe = r))
        : Ht(e, t, n);
      break;
    default:
      Ht(e, t, n);
  }
}
function bd(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new qv()),
      t.forEach(function (r) {
        var o = a2.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function st(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          l = t,
          u = l;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (Te = u.stateNode), (ft = !1);
              break e;
            case 3:
              (Te = u.stateNode.containerInfo), (ft = !0);
              break e;
            case 4:
              (Te = u.stateNode.containerInfo), (ft = !0);
              break e;
          }
          u = u.return;
        }
        if (Te === null) throw Error(I(160));
        bh(i, l, o), (Te = null), (ft = !1);
        var a = o.alternate;
        a !== null && (a.return = null), (o.return = null);
      } catch (c) {
        Ee(o, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) kh(t, e), (t = t.sibling);
}
function kh(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((st(t, e), St(e), r & 4)) {
        try {
          Zr(3, e, e.return), ml(3, e);
        } catch (g) {
          Ee(e, e.return, g);
        }
        try {
          Zr(5, e, e.return);
        } catch (g) {
          Ee(e, e.return, g);
        }
      }
      break;
    case 1:
      st(t, e), St(e), r & 512 && n !== null && qn(n, n.return);
      break;
    case 5:
      if (
        (st(t, e),
        St(e),
        r & 512 && n !== null && qn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          eo(o, "");
        } catch (g) {
          Ee(e, e.return, g);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          l = n !== null ? n.memoizedProps : i,
          u = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            u === "input" && i.type === "radio" && i.name != null && Yf(o, i),
              $a(u, l);
            var c = $a(u, i);
            for (l = 0; l < a.length; l += 2) {
              var d = a[l],
                s = a[l + 1];
              d === "style"
                ? Jf(o, s)
                : d === "dangerouslySetInnerHTML"
                ? Qf(o, s)
                : d === "children"
                ? eo(o, s)
                : Zu(o, d, s, c);
            }
            switch (u) {
              case "input":
                Ia(o, i);
                break;
              case "textarea":
                Xf(o, i);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var p = i.value;
                p != null
                  ? er(o, !!i.multiple, p, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? er(o, !!i.multiple, i.defaultValue, !0)
                      : er(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[so] = i;
          } catch (g) {
            Ee(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((st(t, e), St(e), r & 4)) {
        if (e.stateNode === null) throw Error(I(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (g) {
          Ee(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (st(t, e), St(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          oo(t.containerInfo);
        } catch (g) {
          Ee(e, e.return, g);
        }
      break;
    case 4:
      st(t, e), St(e);
      break;
    case 13:
      st(t, e),
        St(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Ts = Se())),
        r & 4 && bd(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Fe = (c = Fe) || d), st(t, e), (Fe = c)) : st(t, e),
        St(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !d && e.mode & 1)
        )
          for (j = e, d = e.child; d !== null; ) {
            for (s = j = d; j !== null; ) {
              switch (((f = j), (p = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Zr(4, f, f.return);
                  break;
                case 1:
                  qn(f, f.return);
                  var v = f.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (g) {
                      Ee(r, n, g);
                    }
                  }
                  break;
                case 5:
                  qn(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Od(s);
                    continue;
                  }
              }
              p !== null ? ((p.return = f), (j = p)) : Od(s);
            }
            d = d.sibling;
          }
        e: for (d = null, s = e; ; ) {
          if (s.tag === 5) {
            if (d === null) {
              d = s;
              try {
                (o = s.stateNode),
                  c
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((u = s.stateNode),
                      (a = s.memoizedProps.style),
                      (l =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (u.style.display = qf("display", l)));
              } catch (g) {
                Ee(e, e.return, g);
              }
            }
          } else if (s.tag === 6) {
            if (d === null)
              try {
                s.stateNode.nodeValue = c ? "" : s.memoizedProps;
              } catch (g) {
                Ee(e, e.return, g);
              }
          } else if (
            ((s.tag !== 22 && s.tag !== 23) ||
              s.memoizedState === null ||
              s === e) &&
            s.child !== null
          ) {
            (s.child.return = s), (s = s.child);
            continue;
          }
          if (s === e) break e;
          for (; s.sibling === null; ) {
            if (s.return === null || s.return === e) break e;
            d === s && (d = null), (s = s.return);
          }
          d === s && (d = null), (s.sibling.return = s.return), (s = s.sibling);
        }
      }
      break;
    case 19:
      st(t, e), St(e), r & 4 && bd(e);
      break;
    case 21:
      break;
    default:
      st(t, e), St(e);
  }
}
function St(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ah(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(I(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (eo(o, ""), (r.flags &= -33));
          var i = Ad(e);
          gu(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            u = Ad(e);
          hu(e, u, l);
          break;
        default:
          throw Error(I(161));
      }
    } catch (a) {
      Ee(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Kv(e, t, n) {
  (j = e), Oh(e);
}
function Oh(e, t, n) {
  for (var r = (e.mode & 1) !== 0; j !== null; ) {
    var o = j,
      i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || ei;
      if (!l) {
        var u = o.alternate,
          a = (u !== null && u.memoizedState !== null) || Fe;
        u = ei;
        var c = Fe;
        if (((ei = l), (Fe = a) && !c))
          for (j = o; j !== null; )
            (l = j),
              (a = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? Td(o)
                : a !== null
                ? ((a.return = l), (j = a))
                : Td(o);
        for (; i !== null; ) (j = i), Oh(i), (i = i.sibling);
        (j = o), (ei = u), (Fe = c);
      }
      kd(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (j = i)) : kd(e);
  }
}
function kd(e) {
  for (; j !== null; ) {
    var t = j;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Fe || ml(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Fe)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : dt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && sd(t, i, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                sd(t, l, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var d = c.memoizedState;
                  if (d !== null) {
                    var s = d.dehydrated;
                    s !== null && oo(s);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(I(163));
          }
        Fe || (t.flags & 512 && pu(t));
      } catch (f) {
        Ee(t, t.return, f);
      }
    }
    if (t === e) {
      j = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (j = n);
      break;
    }
    j = t.return;
  }
}
function Od(e) {
  for (; j !== null; ) {
    var t = j;
    if (t === e) {
      j = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (j = n);
      break;
    }
    j = t.return;
  }
}
function Td(e) {
  for (; j !== null; ) {
    var t = j;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ml(4, t);
          } catch (a) {
            Ee(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Ee(t, o, a);
            }
          }
          var i = t.return;
          try {
            pu(t);
          } catch (a) {
            Ee(t, i, a);
          }
          break;
        case 5:
          var l = t.return;
          try {
            pu(t);
          } catch (a) {
            Ee(t, l, a);
          }
      }
    } catch (a) {
      Ee(t, t.return, a);
    }
    if (t === e) {
      j = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (j = u);
      break;
    }
    j = t.return;
  }
}
var e2 = Math.ceil,
  Wi = zt.ReactCurrentDispatcher,
  ks = zt.ReactCurrentOwner,
  ot = zt.ReactCurrentBatchConfig,
  oe = 0,
  Oe = null,
  _e = null,
  xe = 0,
  We = 0,
  Jn = dn(0),
  be = 0,
  mo = null,
  xn = 0,
  yl = 0,
  Os = 0,
  Qr = null,
  je = null,
  Ts = 0,
  yr = 1 / 0,
  Dt = null,
  Yi = !1,
  mu = null,
  nn = null,
  ti = !1,
  Zt = null,
  Xi = 0,
  qr = 0,
  yu = null,
  mi = -1,
  yi = 0;
function Be() {
  return oe & 6 ? Se() : mi !== -1 ? mi : (mi = Se());
}
function rn(e) {
  return e.mode & 1
    ? oe & 2 && xe !== 0
      ? xe & -xe
      : Pv.transition !== null
      ? (yi === 0 && (yi = cp()), yi)
      : ((e = ae),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : yp(e.type))),
        e)
    : 1;
}
function yt(e, t, n, r) {
  if (50 < qr) throw ((qr = 0), (yu = null), Error(I(185)));
  So(e, n, r),
    (!(oe & 2) || e !== Oe) &&
      (e === Oe && (!(oe & 2) && (yl |= n), be === 4 && Yt(e, xe)),
      Ve(e, r),
      n === 1 && oe === 0 && !(t.mode & 1) && ((yr = Se() + 500), pl && fn()));
}
function Ve(e, t) {
  var n = e.callbackNode;
  Py(e, t);
  var r = Di(e, e === Oe ? xe : 0);
  if (r === 0)
    n !== null && Pc(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Pc(n), t === 1))
      e.tag === 0 ? Bv(xd.bind(null, e)) : Bp(xd.bind(null, e)),
        Nv(function () {
          !(oe & 6) && fn();
        }),
        (n = null);
    else {
      switch (dp(r)) {
        case 1:
          n = es;
          break;
        case 4:
          n = up;
          break;
        case 16:
          n = Ri;
          break;
        case 536870912:
          n = sp;
          break;
        default:
          n = Ri;
      }
      n = Lh(n, Th.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Th(e, t) {
  if (((mi = -1), (yi = 0), oe & 6)) throw Error(I(327));
  var n = e.callbackNode;
  if (ir() && e.callbackNode !== n) return null;
  var r = Di(e, e === Oe ? xe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Zi(e, r);
  else {
    t = r;
    var o = oe;
    oe |= 2;
    var i = Rh();
    (Oe !== e || xe !== t) && ((Dt = null), (yr = Se() + 500), An(e, t));
    do
      try {
        r2();
        break;
      } catch (u) {
        xh(e, u);
      }
    while (1);
    ps(),
      (Wi.current = i),
      (oe = o),
      _e !== null ? (t = 0) : ((Oe = null), (xe = 0), (t = be));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Va(e)), o !== 0 && ((r = o), (t = vu(e, o)))), t === 1)
    )
      throw ((n = mo), An(e, 0), Yt(e, r), Ve(e, Se()), n);
    if (t === 6) Yt(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !t2(o) &&
          ((t = Zi(e, r)),
          t === 2 && ((i = Va(e)), i !== 0 && ((r = i), (t = vu(e, i)))),
          t === 1))
      )
        throw ((n = mo), An(e, 0), Yt(e, r), Ve(e, Se()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(I(345));
        case 2:
          yn(e, je, Dt);
          break;
        case 3:
          if (
            (Yt(e, r), (r & 130023424) === r && ((t = Ts + 500 - Se()), 10 < t))
          ) {
            if (Di(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Be(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Ja(yn.bind(null, e, je, Dt), t);
            break;
          }
          yn(e, je, Dt);
          break;
        case 4:
          if ((Yt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - mt(r);
            (i = 1 << l), (l = t[l]), l > o && (o = l), (r &= ~i);
          }
          if (
            ((r = o),
            (r = Se() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * e2(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ja(yn.bind(null, e, je, Dt), r);
            break;
          }
          yn(e, je, Dt);
          break;
        case 5:
          yn(e, je, Dt);
          break;
        default:
          throw Error(I(329));
      }
    }
  }
  return Ve(e, Se()), e.callbackNode === n ? Th.bind(null, e) : null;
}
function vu(e, t) {
  var n = Qr;
  return (
    e.current.memoizedState.isDehydrated && (An(e, t).flags |= 256),
    (e = Zi(e, t)),
    e !== 2 && ((t = je), (je = n), t !== null && Eu(t)),
    e
  );
}
function Eu(e) {
  je === null ? (je = e) : je.push.apply(je, e);
}
function t2(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!vt(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Yt(e, t) {
  for (
    t &= ~Os,
      t &= ~yl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - mt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function xd(e) {
  if (oe & 6) throw Error(I(327));
  ir();
  var t = Di(e, 0);
  if (!(t & 1)) return Ve(e, Se()), null;
  var n = Zi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Va(e);
    r !== 0 && ((t = r), (n = vu(e, r)));
  }
  if (n === 1) throw ((n = mo), An(e, 0), Yt(e, t), Ve(e, Se()), n);
  if (n === 6) throw Error(I(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    yn(e, je, Dt),
    Ve(e, Se()),
    null
  );
}
function xs(e, t) {
  var n = oe;
  oe |= 1;
  try {
    return e(t);
  } finally {
    (oe = n), oe === 0 && ((yr = Se() + 500), pl && fn());
  }
}
function Rn(e) {
  Zt !== null && Zt.tag === 0 && !(oe & 6) && ir();
  var t = oe;
  oe |= 1;
  var n = ot.transition,
    r = ae;
  try {
    if (((ot.transition = null), (ae = 1), e)) return e();
  } finally {
    (ae = r), (ot.transition = n), (oe = t), !(oe & 6) && fn();
  }
}
function Rs() {
  (We = Jn.current), fe(Jn);
}
function An(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Dv(n)), _e !== null))
    for (n = _e.return; n !== null; ) {
      var r = n;
      switch ((cs(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Bi();
          break;
        case 3:
          gr(), fe(ze), fe(Ie), Es();
          break;
        case 5:
          vs(r);
          break;
        case 4:
          gr();
          break;
        case 13:
          fe(me);
          break;
        case 19:
          fe(me);
          break;
        case 10:
          hs(r.type._context);
          break;
        case 22:
        case 23:
          Rs();
      }
      n = n.return;
    }
  if (
    ((Oe = e),
    (_e = e = on(e.current, null)),
    (xe = We = t),
    (be = 0),
    (mo = null),
    (Os = yl = xn = 0),
    (je = Qr = null),
    Sn !== null)
  ) {
    for (t = 0; t < Sn.length; t++)
      if (((n = Sn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var l = i.next;
          (i.next = o), (r.next = l);
        }
        n.pending = r;
      }
    Sn = null;
  }
  return e;
}
function xh(e, t) {
  do {
    var n = _e;
    try {
      if ((ps(), (pi.current = Gi), Vi)) {
        for (var r = ye.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Vi = !1;
      }
      if (
        ((Tn = 0),
        (ke = Ae = ye = null),
        (Xr = !1),
        (po = 0),
        (ks.current = null),
        n === null || n.return === null)
      ) {
        (be = 1), (mo = t), (_e = null);
        break;
      }
      e: {
        var i = e,
          l = n.return,
          u = n,
          a = t;
        if (
          ((t = xe),
          (u.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var c = a,
            d = u,
            s = d.tag;
          if (!(d.mode & 1) && (s === 0 || s === 11 || s === 15)) {
            var f = d.alternate;
            f
              ? ((d.updateQueue = f.updateQueue),
                (d.memoizedState = f.memoizedState),
                (d.lanes = f.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var p = md(l);
          if (p !== null) {
            (p.flags &= -257),
              yd(p, l, u, i, t),
              p.mode & 1 && gd(i, c, t),
              (t = p),
              (a = c);
            var v = t.updateQueue;
            if (v === null) {
              var g = new Set();
              g.add(a), (t.updateQueue = g);
            } else v.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              gd(i, c, t), Ds();
              break e;
            }
            a = Error(I(426));
          }
        } else if (ge && u.mode & 1) {
          var C = md(l);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256),
              yd(C, l, u, i, t),
              ds(mr(a, u));
            break e;
          }
        }
        (i = a = mr(a, u)),
          be !== 4 && (be = 2),
          Qr === null ? (Qr = [i]) : Qr.push(i),
          (i = l);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var y = fh(i, a, t);
              ud(i, y);
              break e;
            case 1:
              u = a;
              var h = i.type,
                w = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (w !== null &&
                    typeof w.componentDidCatch == "function" &&
                    (nn === null || !nn.has(w))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var A = ph(i, u, t);
                ud(i, A);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Nh(n);
    } catch (F) {
      (t = F), _e === n && n !== null && (_e = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Rh() {
  var e = Wi.current;
  return (Wi.current = Gi), e === null ? Gi : e;
}
function Ds() {
  (be === 0 || be === 3 || be === 2) && (be = 4),
    Oe === null || (!(xn & 268435455) && !(yl & 268435455)) || Yt(Oe, xe);
}
function Zi(e, t) {
  var n = oe;
  oe |= 2;
  var r = Rh();
  (Oe !== e || xe !== t) && ((Dt = null), An(e, t));
  do
    try {
      n2();
      break;
    } catch (o) {
      xh(e, o);
    }
  while (1);
  if ((ps(), (oe = n), (Wi.current = r), _e !== null)) throw Error(I(261));
  return (Oe = null), (xe = 0), be;
}
function n2() {
  for (; _e !== null; ) Dh(_e);
}
function r2() {
  for (; _e !== null && !Ty(); ) Dh(_e);
}
function Dh(e) {
  var t = Ih(e.alternate, e, We);
  (e.memoizedProps = e.pendingProps),
    t === null ? Nh(e) : (_e = t),
    (ks.current = null);
}
function Nh(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Qv(n, t)), n !== null)) {
        (n.flags &= 32767), (_e = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (be = 6), (_e = null);
        return;
      }
    } else if (((n = Zv(n, t, We)), n !== null)) {
      _e = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      _e = t;
      return;
    }
    _e = t = e;
  } while (t !== null);
  be === 0 && (be = 5);
}
function yn(e, t, n) {
  var r = ae,
    o = ot.transition;
  try {
    (ot.transition = null), (ae = 1), o2(e, t, n, r);
  } finally {
    (ot.transition = o), (ae = r);
  }
  return null;
}
function o2(e, t, n, r) {
  do ir();
  while (Zt !== null);
  if (oe & 6) throw Error(I(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(I(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (My(e, i),
    e === Oe && ((_e = Oe = null), (xe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ti ||
      ((ti = !0),
      Lh(Ri, function () {
        return ir(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = ot.transition), (ot.transition = null);
    var l = ae;
    ae = 1;
    var u = oe;
    (oe |= 4),
      (ks.current = null),
      Jv(e, n),
      kh(n, e),
      Av(Qa),
      (Ni = !!Za),
      (Qa = Za = null),
      (e.current = n),
      Kv(n),
      xy(),
      (oe = u),
      (ae = l),
      (ot.transition = i);
  } else e.current = n;
  if (
    (ti && ((ti = !1), (Zt = e), (Xi = o)),
    (i = e.pendingLanes),
    i === 0 && (nn = null),
    Ny(n.stateNode),
    Ve(e, Se()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Yi) throw ((Yi = !1), (e = mu), (mu = null), e);
  return (
    Xi & 1 && e.tag !== 0 && ir(),
    (i = e.pendingLanes),
    i & 1 ? (e === yu ? qr++ : ((qr = 0), (yu = e))) : (qr = 0),
    fn(),
    null
  );
}
function ir() {
  if (Zt !== null) {
    var e = dp(Xi),
      t = ot.transition,
      n = ae;
    try {
      if (((ot.transition = null), (ae = 16 > e ? 16 : e), Zt === null))
        var r = !1;
      else {
        if (((e = Zt), (Zt = null), (Xi = 0), oe & 6)) throw Error(I(331));
        var o = oe;
        for (oe |= 4, j = e.current; j !== null; ) {
          var i = j,
            l = i.child;
          if (j.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var c = u[a];
                for (j = c; j !== null; ) {
                  var d = j;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Zr(8, d, i);
                  }
                  var s = d.child;
                  if (s !== null) (s.return = d), (j = s);
                  else
                    for (; j !== null; ) {
                      d = j;
                      var f = d.sibling,
                        p = d.return;
                      if ((_h(d), d === c)) {
                        j = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = p), (j = f);
                        break;
                      }
                      j = p;
                    }
                }
              }
              var v = i.alternate;
              if (v !== null) {
                var g = v.child;
                if (g !== null) {
                  v.child = null;
                  do {
                    var C = g.sibling;
                    (g.sibling = null), (g = C);
                  } while (g !== null);
                }
              }
              j = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) (l.return = i), (j = l);
          else
            e: for (; j !== null; ) {
              if (((i = j), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Zr(9, i, i.return);
                }
              var y = i.sibling;
              if (y !== null) {
                (y.return = i.return), (j = y);
                break e;
              }
              j = i.return;
            }
        }
        var h = e.current;
        for (j = h; j !== null; ) {
          l = j;
          var w = l.child;
          if (l.subtreeFlags & 2064 && w !== null) (w.return = l), (j = w);
          else
            e: for (l = h; j !== null; ) {
              if (((u = j), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ml(9, u);
                  }
                } catch (F) {
                  Ee(u, u.return, F);
                }
              if (u === l) {
                j = null;
                break e;
              }
              var A = u.sibling;
              if (A !== null) {
                (A.return = u.return), (j = A);
                break e;
              }
              j = u.return;
            }
        }
        if (
          ((oe = o), fn(), kt && typeof kt.onPostCommitFiberRoot == "function")
        )
          try {
            kt.onPostCommitFiberRoot(ul, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ae = n), (ot.transition = t);
    }
  }
  return !1;
}
function Rd(e, t, n) {
  (t = mr(n, t)),
    (t = fh(e, t, 1)),
    (e = tn(e, t, 1)),
    (t = Be()),
    e !== null && (So(e, 1, t), Ve(e, t));
}
function Ee(e, t, n) {
  if (e.tag === 3) Rd(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Rd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (nn === null || !nn.has(r)))
        ) {
          (e = mr(n, e)),
            (e = ph(t, e, 1)),
            (t = tn(t, e, 1)),
            (e = Be()),
            t !== null && (So(t, 1, e), Ve(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function i2(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Be()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Oe === e &&
      (xe & n) === n &&
      (be === 4 || (be === 3 && (xe & 130023424) === xe && 500 > Se() - Ts)
        ? An(e, 0)
        : (Os |= n)),
    Ve(e, t);
}
function Fh(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Go), (Go <<= 1), !(Go & 130023424) && (Go = 4194304))
      : (t = 1));
  var n = Be();
  (e = $t(e, t)), e !== null && (So(e, t, n), Ve(e, n));
}
function l2(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Fh(e, n);
}
function a2(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(I(314));
  }
  r !== null && r.delete(t), Fh(e, n);
}
var Ih;
Ih = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ze.current) Ue = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ue = !1), Xv(e, t, n);
      Ue = !!(e.flags & 131072);
    }
  else (Ue = !1), ge && t.flags & 1048576 && Pp(t, $i, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      gi(e, t), (e = t.pendingProps);
      var o = fr(t, Ie.current);
      or(t, n), (o = Ss(null, t, r, e, o, n));
      var i = Cs();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            He(r) ? ((i = !0), Pi(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            ms(t),
            (o.updater = hl),
            (t.stateNode = o),
            (o._reactInternals = t),
            iu(t, r, e, n),
            (t = uu(null, t, r, !0, i, n)))
          : ((t.tag = 0), ge && i && ss(t), Le(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (gi(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = s2(r)),
          (e = dt(r, e)),
          o)
        ) {
          case 0:
            t = au(null, t, r, e, n);
            break e;
          case 1:
            t = wd(null, t, r, e, n);
            break e;
          case 11:
            t = vd(null, t, r, e, n);
            break e;
          case 14:
            t = Ed(null, t, r, dt(r.type, e), n);
            break e;
        }
        throw Error(I(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : dt(r, o)),
        au(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : dt(r, o)),
        wd(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((yh(t), e === null)) throw Error(I(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Up(e, t),
          zi(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = mr(Error(I(423)), t)), (t = Sd(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = mr(Error(I(424)), t)), (t = Sd(e, t, r, n, o));
            break e;
          } else
            for (
              Ye = en(t.stateNode.containerInfo.firstChild),
                Xe = t,
                ge = !0,
                pt = null,
                n = Gp(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((pr(), r === o)) {
            t = jt(e, t, n);
            break e;
          }
          Le(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Wp(t),
        e === null && nu(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = o.children),
        qa(r, o) ? (l = null) : i !== null && qa(r, i) && (t.flags |= 32),
        mh(e, t),
        Le(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && nu(t), null;
    case 13:
      return vh(e, t, n);
    case 4:
      return (
        ys(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = hr(t, null, r, n)) : Le(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : dt(r, o)),
        vd(e, t, r, o, n)
      );
    case 7:
      return Le(e, t, t.pendingProps, n), t.child;
    case 8:
      return Le(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Le(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (l = o.value),
          ce(ji, r._currentValue),
          (r._currentValue = l),
          i !== null)
        )
          if (vt(i.value, l)) {
            if (i.children === o.children && !ze.current) {
              t = jt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                l = i.child;
                for (var a = u.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      (a = Bt(-1, n & -n)), (a.tag = 2);
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var d = c.pending;
                        d === null
                          ? (a.next = a)
                          : ((a.next = d.next), (d.next = a)),
                          (c.pending = a);
                      }
                    }
                    (i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      ru(i.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((l = i.return), l === null)) throw Error(I(341));
                (l.lanes |= n),
                  (u = l.alternate),
                  u !== null && (u.lanes |= n),
                  ru(l, n, t),
                  (l = i.sibling);
              } else l = i.child;
              if (l !== null) l.return = i;
              else
                for (l = i; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((i = l.sibling), i !== null)) {
                    (i.return = l.return), (l = i);
                    break;
                  }
                  l = l.return;
                }
              i = l;
            }
        Le(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        or(t, n),
        (o = it(o)),
        (r = r(o)),
        (t.flags |= 1),
        Le(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = dt(r, t.pendingProps)),
        (o = dt(r.type, o)),
        Ed(e, t, r, o, n)
      );
    case 15:
      return hh(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : dt(r, o)),
        gi(e, t),
        (t.tag = 1),
        He(r) ? ((e = !0), Pi(t)) : (e = !1),
        or(t, n),
        Hp(t, r, o),
        iu(t, r, o, n),
        uu(null, t, r, !0, e, n)
      );
    case 19:
      return Eh(e, t, n);
    case 22:
      return gh(e, t, n);
  }
  throw Error(I(156, t.tag));
};
function Lh(e, t) {
  return ap(e, t);
}
function u2(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function nt(e, t, n, r) {
  return new u2(e, t, n, r);
}
function Ns(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function s2(e) {
  if (typeof e == "function") return Ns(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === qu)) return 11;
    if (e === Ju) return 14;
  }
  return 2;
}
function on(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = nt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function vi(e, t, n, r, o, i) {
  var l = 2;
  if (((r = e), typeof e == "function")) Ns(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case zn:
        return bn(n.children, o, i, t);
      case Qu:
        (l = 8), (o |= 8);
        break;
      case xa:
        return (
          (e = nt(12, n, t, o | 2)), (e.elementType = xa), (e.lanes = i), e
        );
      case Ra:
        return (e = nt(13, n, t, o)), (e.elementType = Ra), (e.lanes = i), e;
      case Da:
        return (e = nt(19, n, t, o)), (e.elementType = Da), (e.lanes = i), e;
      case Vf:
        return vl(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case zf:
              l = 10;
              break e;
            case Hf:
              l = 9;
              break e;
            case qu:
              l = 11;
              break e;
            case Ju:
              l = 14;
              break e;
            case Vt:
              (l = 16), (r = null);
              break e;
          }
        throw Error(I(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = nt(l, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function bn(e, t, n, r) {
  return (e = nt(7, e, r, t)), (e.lanes = n), e;
}
function vl(e, t, n, r) {
  return (
    (e = nt(22, e, r, t)),
    (e.elementType = Vf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function fa(e, t, n) {
  return (e = nt(6, e, null, t)), (e.lanes = n), e;
}
function pa(e, t, n) {
  return (
    (t = nt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function c2(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Yl(0)),
    (this.expirationTimes = Yl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Yl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Fs(e, t, n, r, o, i, l, u, a) {
  return (
    (e = new c2(e, t, n, u, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = nt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ms(i),
    e
  );
}
function d2(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Un,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Bh(e) {
  if (!e) return an;
  e = e._reactInternals;
  e: {
    if (Nn(e) !== e || e.tag !== 1) throw Error(I(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (He(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(I(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (He(n)) return Lp(e, n, t);
  }
  return t;
}
function Ph(e, t, n, r, o, i, l, u, a) {
  return (
    (e = Fs(n, r, !0, e, o, i, l, u, a)),
    (e.context = Bh(null)),
    (n = e.current),
    (r = Be()),
    (o = rn(n)),
    (i = Bt(r, o)),
    (i.callback = t ?? null),
    tn(n, i, o),
    (e.current.lanes = o),
    So(e, o, r),
    Ve(e, r),
    e
  );
}
function El(e, t, n, r) {
  var o = t.current,
    i = Be(),
    l = rn(o);
  return (
    (n = Bh(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Bt(i, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = tn(o, t, l)),
    e !== null && (yt(e, o, l, i), fi(e, o, l)),
    l
  );
}
function Qi(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Dd(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Is(e, t) {
  Dd(e, t), (e = e.alternate) && Dd(e, t);
}
function f2() {
  return null;
}
var Mh =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ls(e) {
  this._internalRoot = e;
}
wl.prototype.render = Ls.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(I(409));
  El(e, t, null, null);
};
wl.prototype.unmount = Ls.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Rn(function () {
      El(null, e, null, null);
    }),
      (t[Mt] = null);
  }
};
function wl(e) {
  this._internalRoot = e;
}
wl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = hp();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Wt.length && t !== 0 && t < Wt[n].priority; n++);
    Wt.splice(n, 0, e), n === 0 && mp(e);
  }
};
function Bs(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Sl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Nd() {}
function p2(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var c = Qi(l);
        i.call(c);
      };
    }
    var l = Ph(t, r, e, 0, null, !1, !1, "", Nd);
    return (
      (e._reactRootContainer = l),
      (e[Mt] = l.current),
      ao(e.nodeType === 8 ? e.parentNode : e),
      Rn(),
      l
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var c = Qi(a);
      u.call(c);
    };
  }
  var a = Fs(e, 0, !1, null, null, !1, !1, "", Nd);
  return (
    (e._reactRootContainer = a),
    (e[Mt] = a.current),
    ao(e.nodeType === 8 ? e.parentNode : e),
    Rn(function () {
      El(t, a, n, r);
    }),
    a
  );
}
function Cl(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var u = o;
      o = function () {
        var a = Qi(l);
        u.call(a);
      };
    }
    El(t, l, e, o);
  } else l = p2(n, t, e, o, r);
  return Qi(l);
}
fp = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = jr(t.pendingLanes);
        n !== 0 &&
          (ts(t, n | 1), Ve(t, Se()), !(oe & 6) && ((yr = Se() + 500), fn()));
      }
      break;
    case 13:
      Rn(function () {
        var r = $t(e, 1);
        if (r !== null) {
          var o = Be();
          yt(r, e, 1, o);
        }
      }),
        Is(e, 1);
  }
};
ns = function (e) {
  if (e.tag === 13) {
    var t = $t(e, 134217728);
    if (t !== null) {
      var n = Be();
      yt(t, e, 134217728, n);
    }
    Is(e, 134217728);
  }
};
pp = function (e) {
  if (e.tag === 13) {
    var t = rn(e),
      n = $t(e, t);
    if (n !== null) {
      var r = Be();
      yt(n, e, t, r);
    }
    Is(e, t);
  }
};
hp = function () {
  return ae;
};
gp = function (e, t) {
  var n = ae;
  try {
    return (ae = e), t();
  } finally {
    ae = n;
  }
};
Ua = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ia(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = fl(r);
            if (!o) throw Error(I(90));
            Wf(r), Ia(r, o);
          }
        }
      }
      break;
    case "textarea":
      Xf(e, n);
      break;
    case "select":
      (t = n.value), t != null && er(e, !!n.multiple, t, !1);
  }
};
tp = xs;
np = Rn;
var h2 = { usingClientEntryPoint: !1, Events: [_o, Wn, fl, Kf, ep, xs] },
  Lr = {
    findFiberByHostInstance: wn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  g2 = {
    bundleType: Lr.bundleType,
    version: Lr.version,
    rendererPackageName: Lr.rendererPackageName,
    rendererConfig: Lr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: zt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = ip(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Lr.findFiberByHostInstance || f2,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ni = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ni.isDisabled && ni.supportsFiber)
    try {
      (ul = ni.inject(g2)), (kt = ni);
    } catch {}
}
qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = h2;
qe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Bs(t)) throw Error(I(200));
  return d2(e, t, null, n);
};
qe.createRoot = function (e, t) {
  if (!Bs(e)) throw Error(I(299));
  var n = !1,
    r = "",
    o = Mh;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Fs(e, 1, !1, null, null, n, !1, r, o)),
    (e[Mt] = t.current),
    ao(e.nodeType === 8 ? e.parentNode : e),
    new Ls(t)
  );
};
qe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(I(188))
      : ((e = Object.keys(e).join(",")), Error(I(268, e)));
  return (e = ip(t)), (e = e === null ? null : e.stateNode), e;
};
qe.flushSync = function (e) {
  return Rn(e);
};
qe.hydrate = function (e, t, n) {
  if (!Sl(t)) throw Error(I(200));
  return Cl(null, e, t, !0, n);
};
qe.hydrateRoot = function (e, t, n) {
  if (!Bs(e)) throw Error(I(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    l = Mh;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = Ph(t, null, e, 1, n ?? null, o, !1, i, l)),
    (e[Mt] = t.current),
    ao(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new wl(t);
};
qe.render = function (e, t, n) {
  if (!Sl(t)) throw Error(I(200));
  return Cl(null, e, t, !1, n);
};
qe.unmountComponentAtNode = function (e) {
  if (!Sl(e)) throw Error(I(40));
  return e._reactRootContainer
    ? (Rn(function () {
        Cl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Mt] = null);
        });
      }),
      !0)
    : !1;
};
qe.unstable_batchedUpdates = xs;
qe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Sl(n)) throw Error(I(200));
  if (e == null || e._reactInternals === void 0) throw Error(I(38));
  return Cl(e, t, n, !1, r);
};
qe.version = "18.2.0-next-9e3b772b8-20220608";
function $h() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($h);
    } catch (e) {
      console.error(e);
    }
}
$h(), (Pf.exports = qe);
var _l = Pf.exports;
function wu() {
  return (
    (Tt =
      Object.assign ||
      function (e) {
        for (let t = 1; t < arguments.length; t++) {
          const n = arguments[t];
          for (const r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    Tt.apply(this, arguments)
  );
}
function Ps(e, t, n) {
  return (
    (n = {
      path: t,
      exports: {},
      require: function (r, o) {
        return m2(r, o ?? n.path);
      },
    }),
    e(n, n.exports),
    n.exports
  );
}
function m2() {
  throw new Error(
    "Dynamic requires are not currently supported by @rollup/plugin-commonjs"
  );
}
let lr;
typeof window < "u"
  ? (lr = window)
  : typeof self < "u"
  ? (lr = self)
  : (lr = {});
lr.setTimeout;
lr.clearTimeout;
function bo() {}
const Br = lr.performance || {};
Br.now || Br.mozNow || Br.msNow || Br.oNow || Br.webkitNow;
const y2 = function (e, t) {
    let n;
    const r = toObject(e);
    let o;
    for (let i = 1; i < arguments.length; i++) {
      n = Object(arguments[i]);
      for (const l in n) hasOwnProperty.call(n, l) && (r[l] = n[l]);
      if (getOwnPropertySymbols) {
        o = getOwnPropertySymbols(n);
        for (let l = 0; l < o.length; l++)
          propIsEnumerable.call(n, o[l]) && (r[o[l]] = n[o[l]]);
      }
    }
    return r;
  },
  v2 = Uh() ? _.useLayoutEffect : _.useEffect,
  Fd = {};
let jh = bo;
jh = function (t) {
  Fd[t] || (Fd[t] = !0);
};
function E2(e, t) {
  if (e != null)
    if (S2(e)) e(t);
    else
      try {
        e.current = t;
      } catch {
        throw new Error('Cannot assign value "' + t + '" to ref "' + e + '"');
      }
}
function Uh() {
  return !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  );
}
function Al(e) {
  return _.forwardRef(e);
}
function w2(e) {
  return Uh() ? (e ? e.ownerDocument : document) : null;
}
function S2(e) {
  return !!(e && {}.toString.call(e) == "[object Function]");
}
function C2(e) {
  return typeof e == "string";
}
let zh = bo;
zh = function (t) {
  const n = _.useRef(t);
  _.useEffect(
    function () {
      return void (n.current = t);
    },
    [t]
  ),
    _.useEffect(function () {
      return jh(n.current);
    }, []);
};
function _2() {
  const e = _.useState(Object.create(null)),
    t = e[1];
  return _.useCallback(function () {
    t(Object.create(null));
  }, []);
}
function A2() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return _.useMemo(function () {
    return t.every(function (r) {
      return r == null;
    })
      ? null
      : function (r) {
          t.forEach(function (o) {
            E2(o, r);
          });
        };
  }, [].concat(t));
}
function Ei(e, t) {
  return function (n) {
    if ((e && e(n), !n.defaultPrevented)) return t(n);
  };
}
const Hh = function (t) {
  const n = t.children,
    r = t.type,
    o = r === void 0 ? "reach-portal" : r,
    i = _.useRef(null),
    l = _.useRef(null),
    u = _2();
  return (
    v2(
      function () {
        if (!i.current) return;
        const a = i.current.ownerDocument;
        return (
          (l.current = a == null ? void 0 : a.createElement(o)),
          a.body.appendChild(l.current),
          u(),
          function () {
            l.current &&
              l.current.ownerDocument &&
              l.current.ownerDocument.body.removeChild(l.current);
          }
        );
      },
      [o, u]
    ),
    l.current
      ? _l.createPortal(n, l.current)
      : _.createElement("span", { ref: i })
  );
};
Hh.displayName = "Portal";
function b2(e, t) {
  if (e == null) return {};
  const n = {},
    r = Object.keys(e);
  let o, i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
const k2 = Ps(function (e, t) {
    (function () {
      const n = typeof Symbol == "function" && Symbol.for,
        r = n ? Symbol.for("react.element") : 60103,
        o = n ? Symbol.for("react.portal") : 60106,
        i = n ? Symbol.for("react.fragment") : 60107,
        l = n ? Symbol.for("react.strict_mode") : 60108,
        u = n ? Symbol.for("react.profiler") : 60114,
        a = n ? Symbol.for("react.provider") : 60109,
        c = n ? Symbol.for("react.context") : 60110,
        d = n ? Symbol.for("react.async_mode") : 60111,
        s = n ? Symbol.for("react.concurrent_mode") : 60111,
        f = n ? Symbol.for("react.forward_ref") : 60112,
        p = n ? Symbol.for("react.suspense") : 60113,
        v = n ? Symbol.for("react.suspense_list") : 60120,
        g = n ? Symbol.for("react.memo") : 60115,
        C = n ? Symbol.for("react.lazy") : 60116,
        y = n ? Symbol.for("react.block") : 60121,
        h = n ? Symbol.for("react.fundamental") : 60117,
        w = n ? Symbol.for("react.responder") : 60118,
        A = n ? Symbol.for("react.scope") : 60119;
      function F(Y) {
        return (
          typeof Y == "string" ||
          typeof Y == "function" ||
          Y === i ||
          Y === s ||
          Y === u ||
          Y === l ||
          Y === p ||
          Y === v ||
          (typeof Y == "object" &&
            Y !== null &&
            (Y.$$typeof === C ||
              Y.$$typeof === g ||
              Y.$$typeof === a ||
              Y.$$typeof === c ||
              Y.$$typeof === f ||
              Y.$$typeof === h ||
              Y.$$typeof === w ||
              Y.$$typeof === A ||
              Y.$$typeof === y))
        );
      }
      function N(Y) {
        if (typeof Y == "object" && Y !== null) {
          const Ar = Y.$$typeof;
          switch (Ar) {
            case r:
              var Fn = Y.type;
              switch (Fn) {
                case d:
                case s:
                case i:
                case u:
                case l:
                case p:
                  return Fn;
                default:
                  var Ro = Fn && Fn.$$typeof;
                  switch (Ro) {
                    case c:
                    case f:
                    case C:
                    case g:
                    case a:
                      return Ro;
                    default:
                      return Ar;
                  }
              }
            case o:
              return Ar;
          }
        }
      }
      const k = d,
        O = s,
        $ = c,
        M = a,
        V = r,
        T = f,
        P = i,
        G = C,
        H = g,
        W = o,
        Z = u,
        R = l,
        L = p;
      let B = !1;
      function X(Y) {
        return (
          B ||
            ((B = !0),
            console.warn(
              "The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API."
            )),
          q(Y) || N(Y) === d
        );
      }
      function q(Y) {
        return N(Y) === s;
      }
      function Q(Y) {
        return N(Y) === c;
      }
      function le(Y) {
        return N(Y) === a;
      }
      function ut(Y) {
        return typeof Y == "object" && Y !== null && Y.$$typeof === r;
      }
      function ue(Y) {
        return N(Y) === f;
      }
      function $e(Y) {
        return N(Y) === i;
      }
      function wt(Y) {
        return N(Y) === C;
      }
      function Oo(Y) {
        return N(Y) === g;
      }
      function _r(Y) {
        return N(Y) === o;
      }
      function To(Y) {
        return N(Y) === u;
      }
      function xo(Y) {
        return N(Y) === l;
      }
      function xl(Y) {
        return N(Y) === p;
      }
      (t.AsyncMode = k),
        (t.ConcurrentMode = O),
        (t.ContextConsumer = $),
        (t.ContextProvider = M),
        (t.Element = V),
        (t.ForwardRef = T),
        (t.Fragment = P),
        (t.Lazy = G),
        (t.Memo = H),
        (t.Portal = W),
        (t.Profiler = Z),
        (t.StrictMode = R),
        (t.Suspense = L),
        (t.isAsyncMode = X),
        (t.isConcurrentMode = q),
        (t.isContextConsumer = Q),
        (t.isContextProvider = le),
        (t.isElement = ut),
        (t.isForwardRef = ue),
        (t.isFragment = $e),
        (t.isLazy = wt),
        (t.isMemo = Oo),
        (t.isPortal = _r),
        (t.isProfiler = To),
        (t.isStrictMode = xo),
        (t.isSuspense = xl),
        (t.isValidElementType = F),
        (t.typeOf = N);
    })();
  }),
  Vh = Ps(function (e) {
    e.exports = k2;
  }),
  O2 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  vn = O2;
let Su = function () {};
{
  var T2 = vn,
    Cu = {},
    x2 = Function.call.bind(Object.prototype.hasOwnProperty);
  Su = function (e) {
    const t = "Warning: " + e;
    typeof console < "u" && console.error(t);
    try {
      throw new Error(t);
    } catch {}
  };
}
function Gh(e, t, n, r, o) {
  for (const l in e)
    if (x2(e, l)) {
      var i;
      try {
        if (typeof e[l] != "function") {
          const u = Error(
            (r || "React class") +
              ": " +
              n +
              " type `" +
              l +
              "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
              typeof e[l] +
              "`."
          );
          throw ((u.name = "Invariant Violation"), u);
        }
        i = e[l](t, l, r, n, null, T2);
      } catch (u) {
        i = u;
      }
      if (
        (i &&
          !(i instanceof Error) &&
          Su(
            (r || "React class") +
              ": type specification of " +
              n +
              " `" +
              l +
              "` is invalid; the type checker function must return `null` or an `Error` but returned a " +
              typeof i +
              ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ),
        i instanceof Error && !(i.message in Cu))
      ) {
        Cu[i.message] = !0;
        const u = o ? o() : "";
        Su("Failed " + n + " type: " + i.message + (u ?? ""));
      }
    }
}
Gh.resetWarningCache = function () {
  Cu = {};
};
const Id = Gh,
  R2 = Function.call.bind(Object.prototype.hasOwnProperty);
let $n = function () {};
$n = function (e) {
  const t = "Warning: " + e;
  typeof console < "u" && console.error(t);
  try {
    throw new Error(t);
  } catch {}
};
function ri() {
  return null;
}
const D2 = function (e, t) {
    const n = typeof Symbol == "function" && Symbol.iterator,
      r = "@@iterator";
    function o(T) {
      const P = T && ((n && T[n]) || T[r]);
      if (typeof P == "function") return P;
    }
    const i = "<<anonymous>>",
      l = {
        array: d("array"),
        bool: d("boolean"),
        func: d("function"),
        number: d("number"),
        object: d("object"),
        string: d("string"),
        symbol: d("symbol"),
        any: s(),
        arrayOf: f,
        element: p(),
        elementType: v(),
        instanceOf: g,
        node: w(),
        objectOf: y,
        oneOf: C,
        oneOfType: h,
        shape: A,
        exact: F,
      };
    function u(T, P) {
      return T === P ? T !== 0 || 1 / T === 1 / P : T !== T && P !== P;
    }
    function a(T) {
      (this.message = T), (this.stack = "");
    }
    a.prototype = Error.prototype;
    function c(T) {
      var P = {},
        G = 0;
      function H(Z, R, L, B, X, q, Q) {
        if (((B = B || i), (q = q || L), Q !== vn)) {
          if (t) {
            const le = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw ((le.name = "Invariant Violation"), le);
          } else if (typeof console < "u") {
            const le = B + ":" + L;
            !P[le] &&
              G < 3 &&
              ($n(
                "You are manually calling a React.PropTypes validation function for the `" +
                  q +
                  "` prop on `" +
                  B +
                  "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
              ),
              (P[le] = !0),
              G++);
          }
        }
        return R[L] == null
          ? Z
            ? R[L] === null
              ? new a(
                  "The " +
                    X +
                    " `" +
                    q +
                    "` is marked as required " +
                    ("in `" + B + "`, but its value is `null`.")
                )
              : new a(
                  "The " +
                    X +
                    " `" +
                    q +
                    "` is marked as required in " +
                    ("`" + B + "`, but its value is `undefined`.")
                )
            : null
          : T(R, L, B, X, q);
      }
      const W = H.bind(null, !1);
      return (W.isRequired = H.bind(null, !0)), W;
    }
    function d(T) {
      function P(G, H, W, Z, R, L) {
        const B = G[H];
        if (O(B) !== T) {
          const q = $(B);
          return new a(
            "Invalid " +
              Z +
              " `" +
              R +
              "` of type " +
              ("`" + q + "` supplied to `" + W + "`, expected ") +
              ("`" + T + "`.")
          );
        }
        return null;
      }
      return c(P);
    }
    function s() {
      return c(ri);
    }
    function f(T) {
      function P(G, H, W, Z, R) {
        if (typeof T != "function")
          return new a(
            "Property `" +
              R +
              "` of component `" +
              W +
              "` has invalid PropType notation inside arrayOf."
          );
        const L = G[H];
        if (!Array.isArray(L)) {
          const B = O(L);
          return new a(
            "Invalid " +
              Z +
              " `" +
              R +
              "` of type " +
              ("`" + B + "` supplied to `" + W + "`, expected an array.")
          );
        }
        for (let B = 0; B < L.length; B++) {
          const X = T(L, B, W, Z, R + "[" + B + "]", vn);
          if (X instanceof Error) return X;
        }
        return null;
      }
      return c(P);
    }
    function p() {
      function T(P, G, H, W, Z) {
        const R = P[G];
        if (!e(R)) {
          const L = O(R);
          return new a(
            "Invalid " +
              W +
              " `" +
              Z +
              "` of type " +
              ("`" +
                L +
                "` supplied to `" +
                H +
                "`, expected a single ReactElement.")
          );
        }
        return null;
      }
      return c(T);
    }
    function v() {
      function T(P, G, H, W, Z) {
        const R = P[G];
        if (!Vh.isValidElementType(R)) {
          const L = O(R);
          return new a(
            "Invalid " +
              W +
              " `" +
              Z +
              "` of type " +
              ("`" +
                L +
                "` supplied to `" +
                H +
                "`, expected a single ReactElement type.")
          );
        }
        return null;
      }
      return c(T);
    }
    function g(T) {
      function P(G, H, W, Z, R) {
        if (!(G[H] instanceof T)) {
          const L = T.name || i,
            B = V(G[H]);
          return new a(
            "Invalid " +
              Z +
              " `" +
              R +
              "` of type " +
              ("`" + B + "` supplied to `" + W + "`, expected ") +
              ("instance of `" + L + "`.")
          );
        }
        return null;
      }
      return c(P);
    }
    function C(T) {
      if (!Array.isArray(T))
        return (
          arguments.length > 1
            ? $n(
                "Invalid arguments supplied to oneOf, expected an array, got " +
                  arguments.length +
                  " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              )
            : $n("Invalid argument supplied to oneOf, expected an array."),
          ri
        );
      function P(G, H, W, Z, R) {
        const L = G[H];
        for (let X = 0; X < T.length; X++) if (u(L, T[X])) return null;
        const B = JSON.stringify(T, function (q, Q) {
          return $(Q) === "symbol" ? String(Q) : Q;
        });
        return new a(
          "Invalid " +
            Z +
            " `" +
            R +
            "` of value `" +
            String(L) +
            "` " +
            ("supplied to `" + W + "`, expected one of " + B + ".")
        );
      }
      return c(P);
    }
    function y(T) {
      function P(G, H, W, Z, R) {
        if (typeof T != "function")
          return new a(
            "Property `" +
              R +
              "` of component `" +
              W +
              "` has invalid PropType notation inside objectOf."
          );
        const L = G[H],
          B = O(L);
        if (B !== "object")
          return new a(
            "Invalid " +
              Z +
              " `" +
              R +
              "` of type " +
              ("`" + B + "` supplied to `" + W + "`, expected an object.")
          );
        for (const X in L)
          if (R2(L, X)) {
            const q = T(L, X, W, Z, R + "." + X, vn);
            if (q instanceof Error) return q;
          }
        return null;
      }
      return c(P);
    }
    function h(T) {
      if (!Array.isArray(T))
        return (
          $n(
            "Invalid argument supplied to oneOfType, expected an instance of array."
          ),
          ri
        );
      for (let G = 0; G < T.length; G++) {
        const H = T[G];
        if (typeof H != "function")
          return (
            $n(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " +
                M(H) +
                " at index " +
                G +
                "."
            ),
            ri
          );
      }
      function P(G, H, W, Z, R) {
        for (let L = 0; L < T.length; L++) {
          const B = T[L];
          if (B(G, H, W, Z, R, vn) == null) return null;
        }
        return new a(
          "Invalid " + Z + " `" + R + "` supplied to " + ("`" + W + "`.")
        );
      }
      return c(P);
    }
    function w() {
      function T(P, G, H, W, Z) {
        return N(P[G])
          ? null
          : new a(
              "Invalid " +
                W +
                " `" +
                Z +
                "` supplied to " +
                ("`" + H + "`, expected a ReactNode.")
            );
      }
      return c(T);
    }
    function A(T) {
      function P(G, H, W, Z, R) {
        const L = G[H],
          B = O(L);
        if (B !== "object")
          return new a(
            "Invalid " +
              Z +
              " `" +
              R +
              "` of type `" +
              B +
              "` " +
              ("supplied to `" + W + "`, expected `object`.")
          );
        for (const X in T) {
          const q = T[X];
          if (!q) continue;
          const Q = q(L, X, W, Z, R + "." + X, vn);
          if (Q) return Q;
        }
        return null;
      }
      return c(P);
    }
    function F(T) {
      function P(G, H, W, Z, R) {
        const L = G[H],
          B = O(L);
        if (B !== "object")
          return new a(
            "Invalid " +
              Z +
              " `" +
              R +
              "` of type `" +
              B +
              "` " +
              ("supplied to `" + W + "`, expected `object`.")
          );
        const X = y2({}, G[H], T);
        for (const q in X) {
          const Q = T[q];
          if (!Q)
            return new a(
              "Invalid " +
                Z +
                " `" +
                R +
                "` key `" +
                q +
                "` supplied to `" +
                W +
                "`.\nBad object: " +
                JSON.stringify(G[H], null, "  ") +
                `
Valid keys: ` +
                JSON.stringify(Object.keys(T), null, "  ")
            );
          const le = Q(L, q, W, Z, R + "." + q, vn);
          if (le) return le;
        }
        return null;
      }
      return c(P);
    }
    function N(T) {
      switch (typeof T) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !T;
        case "object":
          if (Array.isArray(T)) return T.every(N);
          if (T === null || e(T)) return !0;
          var P = o(T);
          if (P) {
            const G = P.call(T);
            let H;
            if (P !== T.entries) {
              for (; !(H = G.next()).done; ) if (!N(H.value)) return !1;
            } else
              for (; !(H = G.next()).done; ) {
                const W = H.value;
                if (W && !N(W[1])) return !1;
              }
          } else return !1;
          return !0;
        default:
          return !1;
      }
    }
    function k(T, P) {
      return T === "symbol"
        ? !0
        : P
        ? P["@@toStringTag"] === "Symbol" ||
          (typeof Symbol == "function" && P instanceof Symbol)
        : !1;
    }
    function O(T) {
      const P = typeof T;
      return Array.isArray(T)
        ? "array"
        : T instanceof RegExp
        ? "object"
        : k(P, T)
        ? "symbol"
        : P;
    }
    function $(T) {
      if (typeof T > "u" || T === null) return "" + T;
      const P = O(T);
      if (P === "object") {
        if (T instanceof Date) return "date";
        if (T instanceof RegExp) return "regexp";
      }
      return P;
    }
    function M(T) {
      const P = $(T);
      switch (P) {
        case "array":
        case "object":
          return "an " + P;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + P;
        default:
          return P;
      }
    }
    function V(T) {
      return !T.constructor || !T.constructor.name ? i : T.constructor.name;
    }
    return (
      (l.checkPropTypes = Id),
      (l.resetWarningCache = Id.resetWarningCache),
      (l.PropTypes = l),
      l
    );
  },
  ie = Ps(function (e) {
    {
      const t = Vh,
        n = !0;
      e.exports = D2(t.isElement, n);
    }
  }),
  _u = "data-focus-lock",
  Wh = "data-focus-lock-disabled",
  N2 = "data-no-focus-lock",
  F2 = "data-autofocus-inside";
function I2(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function L2(e, t) {
  var n = _.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          const o = n.value;
          o !== r && ((n.value = r), n.callback(r, o));
        },
      },
    };
  })[0];
  return (n.callback = t), n.facade;
}
function Yh(e, t) {
  return L2(t, function (n) {
    return e.forEach(function (r) {
      return I2(r, n);
    });
  });
}
const ha = {
  width: "1px",
  height: "0px",
  padding: 0,
  overflow: "hidden",
  position: "fixed",
  top: "1px",
  left: "1px",
};
ie.node;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var qi =
  function () {
    return (
      (qi =
        Object.assign ||
        function (t) {
          for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (const i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
          }
          return t;
        }),
      qi.apply(this, arguments)
    );
  };
function B2(e, t) {
  const n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
}
function Xh(e) {
  return e;
}
function Zh(e, t) {
  t === void 0 && (t = Xh);
  let n = [],
    r = !1;
  return {
    read: function () {
      if (r)
        throw new Error(
          "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
        );
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function (i) {
      const l = t(i, r);
      return (
        n.push(l),
        function () {
          n = n.filter(function (u) {
            return u !== l;
          });
        }
      );
    },
    assignSyncMedium: function (i) {
      for (r = !0; n.length; ) {
        const l = n;
        (n = []), l.forEach(i);
      }
      n = {
        push: function (l) {
          return i(l);
        },
        filter: function () {
          return n;
        },
      };
    },
    assignMedium: function (i) {
      r = !0;
      let l = [];
      if (n.length) {
        const c = n;
        (n = []), c.forEach(i), (l = n);
      }
      const u = function () {
          const c = l;
          (l = []), c.forEach(i);
        },
        a = function () {
          return Promise.resolve().then(u);
        };
      a(),
        (n = {
          push: function (c) {
            l.push(c), a();
          },
          filter: function (c) {
            return (l = l.filter(c)), n;
          },
        });
    },
  };
}
function Ms(e, t) {
  return t === void 0 && (t = Xh), Zh(e, t);
}
function Qh(e) {
  e === void 0 && (e = {});
  const t = Zh(null);
  return (t.options = qi({ async: !0, ssr: !1 }, e)), t;
}
const qh = function (e) {
  const t = e.sideCar,
    n = B2(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car"
    );
  const r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return _.createElement(r, qi({}, n));
};
qh.isSideCarExport = !0;
function P2(e, t) {
  return e.useMedium(t), qh;
}
const Jh = Ms({}, function (e) {
    const t = e.target,
      n = e.currentTarget;
    return { target: t, currentTarget: n };
  }),
  Kh = Ms(),
  M2 = Ms(),
  $2 = Qh({ async: !0 }),
  j2 = [],
  bl = _.forwardRef(function (t, n) {
    let r;
    const o = _.useState(),
      i = o[0],
      l = o[1],
      u = _.useRef(),
      a = _.useRef(!1),
      c = _.useRef(null),
      d = t.children,
      s = t.disabled,
      f = t.noFocusGuards,
      p = t.persistentFocus,
      v = t.crossFrame,
      g = t.autoFocus,
      C = t.allowTextSelection,
      y = t.group,
      h = t.className,
      w = t.whiteList,
      A = t.shards,
      F = A === void 0 ? j2 : A,
      N = t.as,
      k = N === void 0 ? "div" : N,
      O = t.lockProps,
      $ = O === void 0 ? {} : O,
      M = t.sideCar,
      V = t.returnFocus,
      T = t.onActivation,
      P = t.onDeactivation,
      G = _.useState({}),
      H = G[0],
      W = _.useCallback(
        function () {
          (c.current = c.current || (document && document.activeElement)),
            u.current && T && T(u.current),
            (a.current = !0);
        },
        [T]
      ),
      Z = _.useCallback(
        function () {
          (a.current = !1), P && P(u.current);
        },
        [P]
      ),
      R = _.useCallback(
        function (ue) {
          const $e = c.current;
          if (V && $e && $e.focus) {
            const wt = typeof V == "object" ? V : void 0;
            (c.current = null),
              ue
                ? Promise.resolve().then(function () {
                    return $e.focus(wt);
                  })
                : $e.focus(wt);
          }
        },
        [V]
      ),
      L = _.useCallback(function (ue) {
        a.current && Jh.useMedium(ue);
      }, []),
      B = Kh.useMedium,
      X = _.useCallback(function (ue) {
        u.current !== ue && ((u.current = ue), l(ue));
      }, []);
    typeof C < "u" &&
      console.warn(
        "React-Focus-Lock: allowTextSelection is deprecated and enabled by default"
      ),
      _.useEffect(function () {
        u.current ||
          console.error("FocusLock: could not obtain ref to internal node");
      }, []);
    const q = wu(((r = {}), (r[Wh] = s && "disabled"), (r[_u] = y), r), $),
      Q = f !== !0,
      le = Q && f !== "tail",
      ut = Yh([n, X]);
    return _.createElement(
      _.Fragment,
      null,
      Q && [
        _.createElement("div", {
          key: "guard-first",
          "data-focus-guard": !0,
          tabIndex: s ? -1 : 0,
          style: ha,
        }),
        _.createElement("div", {
          key: "guard-nearest",
          "data-focus-guard": !0,
          tabIndex: s ? -1 : 1,
          style: ha,
        }),
      ],
      !s &&
        _.createElement(M, {
          id: H,
          sideCar: $2,
          observed: i,
          disabled: s,
          persistentFocus: p,
          crossFrame: v,
          autoFocus: g,
          whiteList: w,
          shards: F,
          onActivation: W,
          onDeactivation: Z,
          returnFocus: R,
        }),
      _.createElement(
        k,
        wu({ ref: ut }, q, { className: h, onBlur: B, onFocus: L }),
        d
      ),
      le &&
        _.createElement("div", {
          "data-focus-guard": !0,
          tabIndex: s ? -1 : 0,
          style: ha,
        })
    );
  });
bl.propTypes = {
  children: ie.node,
  disabled: ie.bool,
  returnFocus: ie.oneOfType([ie.bool, ie.object]),
  noFocusGuards: ie.bool,
  allowTextSelection: ie.bool,
  autoFocus: ie.bool,
  persistentFocus: ie.bool,
  crossFrame: ie.bool,
  group: ie.string,
  className: ie.string,
  whiteList: ie.func,
  shards: ie.arrayOf(ie.any),
  as: ie.oneOfType([ie.string, ie.func, ie.object]),
  lockProps: ie.object,
  onActivation: ie.func,
  onDeactivation: ie.func,
  sideCar: ie.any.isRequired,
};
bl.defaultProps = {
  children: void 0,
  disabled: !1,
  returnFocus: !1,
  noFocusGuards: !1,
  autoFocus: !0,
  persistentFocus: !1,
  crossFrame: !0,
  allowTextSelection: void 0,
  group: void 0,
  className: void 0,
  whiteList: void 0,
  shards: void 0,
  as: "div",
  lockProps: {},
  onActivation: void 0,
  onDeactivation: void 0,
};
function Au(e, t) {
  return (
    (Au =
      Object.setPrototypeOf ||
      function (r, o) {
        return (r.__proto__ = o), r;
      }),
    Au(e, t)
  );
}
function U2(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Au(e, t);
}
function z2(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function H2(e, t) {
  {
    if (typeof e != "function")
      throw new Error("Expected reducePropsToState to be a function.");
    if (typeof t != "function")
      throw new Error("Expected handleStateChangeOnClient to be a function.");
  }
  function n(r) {
    return r.displayName || r.name || "Component";
  }
  return function (o) {
    if (typeof o != "function")
      throw new Error("Expected WrappedComponent to be a React component.");
    const i = [];
    let l;
    function u() {
      (l = e(
        i.map(function (c) {
          return c.props;
        })
      )),
        t(l);
    }
    const a = (function (c) {
      U2(d, c);
      function d() {
        return c.apply(this, arguments) || this;
      }
      d.peek = function () {
        return l;
      };
      const s = d.prototype;
      return (
        (s.componentDidMount = function () {
          i.push(this), u();
        }),
        (s.componentDidUpdate = function () {
          u();
        }),
        (s.componentWillUnmount = function () {
          const p = i.indexOf(this);
          i.splice(p, 1), u();
        }),
        (s.render = function () {
          return _.createElement(o, this.props);
        }),
        d
      );
    })(_.PureComponent);
    return z2(a, "displayName", "SideEffect(" + n(o) + ")"), a;
  };
}
const un = function (e) {
    const t = Array(e.length);
    for (let n = 0; n < e.length; ++n) t[n] = e[n];
    return t;
  },
  bu = function (e) {
    return Array.isArray(e) ? e : [e];
  },
  V2 = function (e) {
    const t = new Set(),
      n = e.length;
    for (let r = 0; r < n; r += 1)
      for (let o = r + 1; o < n; o += 1) {
        const i = e[r].compareDocumentPosition(e[o]);
        (i & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(o),
          (i & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r);
      }
    return e.filter(function (r, o) {
      return !t.has(o);
    });
  };
var e0 = function (e) {
  return e.parentNode ? e0(e.parentNode) : e;
};
const $s = function (e) {
    return bu(e)
      .filter(Boolean)
      .reduce(function (n, r) {
        const o = r.getAttribute(_u);
        return (
          n.push.apply(
            n,
            o
              ? V2(
                  un(
                    e0(r).querySelectorAll(
                      "[" + _u + '="' + o + '"]:not([' + Wh + '="disabled"])'
                    )
                  )
                )
              : [r]
          ),
          n
        );
      }, []);
  },
  G2 = function (e) {
    return !e || !e.getPropertyValue
      ? !1
      : e.getPropertyValue("display") === "none" ||
          e.getPropertyValue("visibility") === "hidden";
  };
var t0 = function (e) {
  return (
    !e ||
    e === document ||
    (e && e.nodeType === Node.DOCUMENT_NODE) ||
    (!G2(window.getComputedStyle(e, null)) &&
      t0(
        e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE
          ? e.parentNode.host
          : e.parentNode
      ))
  );
};
const W2 = function (e) {
    return !(
      (e.tagName === "INPUT" || e.tagName === "BUTTON") &&
      (e.type === "hidden" || e.disabled)
    );
  },
  js = function (e) {
    return !!(e && e.dataset && e.dataset.focusGuard);
  },
  Ji = function (e) {
    return !js(e);
  },
  Y2 = function (e) {
    return !!e;
  },
  X2 = function (e, t) {
    const n = e.tabIndex - t.tabIndex,
      r = e.index - t.index;
    if (n) {
      if (!e.tabIndex) return 1;
      if (!t.tabIndex) return -1;
    }
    return n || r;
  },
  n0 = function (e, t, n) {
    return un(e)
      .map(function (r, o) {
        return {
          node: r,
          index: o,
          tabIndex:
            n && r.tabIndex === -1
              ? (r.dataset || {}).focusGuard
                ? 0
                : -1
              : r.tabIndex,
        };
      })
      .filter(function (r) {
        return !t || r.tabIndex >= 0;
      })
      .sort(X2);
  },
  Z2 = [
    "button:enabled",
    "select:enabled",
    "textarea:enabled",
    "input:enabled",
    "a[href]",
    "area[href]",
    "summary",
    "iframe",
    "object",
    "embed",
    "audio[controls]",
    "video[controls]",
    "[tabindex]",
    "[contenteditable]",
    "[autofocus]",
  ],
  ku = Z2.join(","),
  Q2 = ku + ", [data-focus-guard]",
  Us = function (e, t) {
    return e.reduce(function (n, r) {
      return n.concat(
        un(r.querySelectorAll(t ? Q2 : ku)),
        r.parentNode
          ? un(r.parentNode.querySelectorAll(ku)).filter(function (o) {
              return o === r;
            })
          : []
      );
    }, []);
  },
  q2 = function (e) {
    const t = e.querySelectorAll("[" + F2 + "]");
    return un(t)
      .map(function (n) {
        return Us([n]);
      })
      .reduce(function (n, r) {
        return n.concat(r);
      }, []);
  },
  zs = function (e) {
    return un(e)
      .filter(function (t) {
        return t0(t);
      })
      .filter(function (t) {
        return W2(t);
      });
  },
  Ou = function (e, t) {
    return n0(zs(Us(e, t)), !0, t);
  },
  Ld = function (e) {
    return n0(zs(Us(e)), !1);
  },
  J2 = function (e) {
    return zs(q2(e));
  };
var Tu = function (e, t) {
  return (
    t === void 0 && (t = []), t.push(e), e.parentNode && Tu(e.parentNode, t), t
  );
};
const ga = function (e, t) {
    const n = Tu(e),
      r = Tu(t);
    for (let o = 0; o < n.length; o += 1) {
      const i = n[o];
      if (r.indexOf(i) >= 0) return i;
    }
    return !1;
  },
  r0 = function (e, t, n) {
    const r = bu(e),
      o = bu(t),
      i = r[0];
    let l = !1;
    return (
      o.filter(Boolean).forEach(function (u) {
        (l = ga(l || u, u) || l),
          n.filter(Boolean).forEach(function (a) {
            const c = ga(i, a);
            c && (!l || c.contains(l) ? (l = c) : (l = ga(c, l)));
          });
      }),
      l
    );
  },
  K2 = function (e) {
    return e.reduce(function (t, n) {
      return t.concat(J2(n));
    }, []);
  },
  e1 = function (e) {
    const t = $s(e).filter(Ji),
      n = r0(e, e, t),
      r = Ou([n], !0),
      o = Ou(t)
        .filter(function (i) {
          const l = i.node;
          return Ji(l);
        })
        .map(function (i) {
          return i.node;
        });
    return r.map(function (i) {
      const l = i.node,
        u = i.index;
      return { node: l, index: u, lockItem: o.indexOf(l) >= 0, guard: js(l) };
    });
  },
  t1 = function (e) {
    return e === document.activeElement;
  },
  n1 = function (e) {
    return !!un(e.querySelectorAll("iframe")).some(function (t) {
      return t1(t);
    });
  },
  o0 = function (e) {
    const t = document && document.activeElement;
    return !t || (t.dataset && t.dataset.focusGuard)
      ? !1
      : $s(e).reduce(function (n, r) {
          return n || r.contains(t) || n1(r);
        }, !1);
  },
  r1 = function () {
    return (
      document &&
      un(document.querySelectorAll("[" + N2 + "]")).some(function (e) {
        return e.contains(document.activeElement);
      })
    );
  },
  i0 = function (e) {
    return e.tagName === "INPUT" && e.type === "radio";
  },
  o1 = function (e, t) {
    return (
      t
        .filter(i0)
        .filter(function (n) {
          return n.name === e.name;
        })
        .filter(function (n) {
          return n.checked;
        })[0] || e
    );
  },
  Hs = function (e, t) {
    return i0(e) && e.name ? o1(e, t) : e;
  },
  i1 = function (e) {
    const t = new Set();
    return (
      e.forEach(function (n) {
        return t.add(Hs(n, e));
      }),
      e.filter(function (n) {
        return t.has(n);
      })
    );
  },
  Bd = function (e) {
    return e[0] && e.length > 1 ? Hs(e[0], e) : e[0];
  },
  Pd = function (e, t) {
    return e.length > 1 ? e.indexOf(Hs(e[t], e)) : t;
  },
  l0 = "NEW_FOCUS",
  l1 = function (e, t, n, r) {
    const o = e.length,
      i = e[0],
      l = e[o - 1],
      u = js(n);
    if (e.indexOf(n) >= 0) return;
    const a = t.indexOf(n),
      c = r ? t.indexOf(r) : a,
      d = r ? e.indexOf(r) : -1,
      s = a - c,
      f = t.indexOf(i),
      p = t.indexOf(l),
      v = i1(t),
      g = v.indexOf(n) - (r ? v.indexOf(r) : a),
      C = Pd(e, 0),
      y = Pd(e, o - 1);
    if (a === -1 || d === -1) return l0;
    if (!s && d >= 0) return d;
    if (a <= f && u && Math.abs(s) > 1) return y;
    if (a >= p && u && Math.abs(s) > 1) return C;
    if (s && Math.abs(g) > 1) return d;
    if (a <= f) return y;
    if (a > p) return C;
    if (s) return Math.abs(s) > 1 ? d : (o + d + s) % o;
  },
  a1 = function (e) {
    return function (t) {
      return (
        t.autofocus || (t.dataset && !!t.dataset.autofocus) || e.indexOf(t) >= 0
      );
    };
  },
  u1 = function (e, t) {
    const n = new Map();
    return (
      t.forEach(function (r) {
        return n.set(r.node, r);
      }),
      e
        .map(function (r) {
          return n.get(r);
        })
        .filter(Y2)
    );
  },
  s1 = function (e, t) {
    const n = document && document.activeElement,
      r = $s(e).filter(Ji),
      o = r0(n || e, e, r),
      i = Ld(r);
    let l = Ou(r).filter(function (s) {
      const f = s.node;
      return Ji(f);
    });
    if (!l[0] && ((l = i), !l[0])) return;
    const u = Ld([o]).map(function (s) {
        return s.node;
      }),
      a = u1(u, l),
      c = a.map(function (s) {
        return s.node;
      }),
      d = l1(c, u, n, t);
    if (d === l0) {
      const s = i
        .map(function (f) {
          return f.node;
        })
        .filter(a1(K2(r)));
      return { node: s && s.length ? Bd(s) : Bd(c) };
    }
    return d === void 0 ? d : a[d];
  },
  c1 = function (e) {
    e.focus(),
      "contentWindow" in e && e.contentWindow && e.contentWindow.focus();
  };
let ma = 0,
  ya = !1;
const a0 = function (e, t) {
  const n = s1(e, t);
  if (!ya && n) {
    if (ma > 2) {
      console.error(
        "FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"
      ),
        (ya = !0),
        setTimeout(function () {
          ya = !1;
        }, 1);
      return;
    }
    ma++, c1(n.node), ma--;
  }
};
function u0(e) {
  const t = window,
    n = t.setImmediate;
  typeof n < "u" ? n(e) : setTimeout(e, 1);
}
const d1 = function () {
    return document && document.activeElement === document.body;
  },
  f1 = function () {
    return d1() || r1();
  };
let ar = null,
  Kn = null,
  ur = null,
  yo = !1;
const p1 = function () {
    return !0;
  },
  h1 = function (t) {
    return (ar.whiteList || p1)(t);
  },
  g1 = function (t, n) {
    ur = { observerNode: t, portaledElement: n };
  },
  m1 = function (t) {
    return ur && ur.portaledElement === t;
  };
function Md(e, t, n, r) {
  let o = null,
    i = e;
  do {
    const l = r[i];
    if (l.guard) l.node.dataset.focusAutoGuard && (o = l);
    else if (l.lockItem) {
      if (i !== e) return;
      o = null;
    } else break;
  } while ((i += n) !== t);
  o && (o.node.tabIndex = 0);
}
const y1 = function (t) {
    return t && "current" in t ? t.current : t;
  },
  v1 = function (t) {
    return t ? !!yo : yo === "meanwhile";
  },
  Ki = function () {
    let t = !1;
    if (ar) {
      const n = ar,
        r = n.observed,
        o = n.persistentFocus,
        i = n.autoFocus,
        l = n.shards,
        u = n.crossFrame,
        a = r || (ur && ur.portaledElement),
        c = document && document.activeElement;
      if (a) {
        const d = [a].concat(l.map(y1).filter(Boolean));
        if (
          ((!c || h1(c)) &&
            (o || v1(u) || !f1() || (!Kn && i)) &&
            (a &&
              !(o0(d) || m1(c)) &&
              (document && !Kn && c && !i
                ? (c.blur && c.blur(), document.body.focus())
                : ((t = a0(d, Kn)), (ur = {}))),
            (yo = !1),
            (Kn = document && document.activeElement)),
          document)
        ) {
          const s = document && document.activeElement,
            f = e1(d),
            p = f
              .map(function (v) {
                return v.node;
              })
              .indexOf(s);
          p > -1 &&
            (f
              .filter(function (v) {
                const g = v.guard,
                  C = v.node;
                return g && C.dataset.focusAutoGuard;
              })
              .forEach(function (v) {
                return v.node.removeAttribute("tabIndex");
              }),
            Md(p, f.length, 1, f),
            Md(p, -1, -1, f));
        }
      }
    }
    return t;
  },
  s0 = function (t) {
    Ki() && t && (t.stopPropagation(), t.preventDefault());
  },
  Vs = function () {
    return u0(Ki);
  },
  E1 = function (t) {
    const n = t.target,
      r = t.currentTarget;
    r.contains(n) || g1(r, n);
  },
  w1 = function () {
    return null;
  };
ie.node.isRequired;
const c0 = function () {
    (yo = "just"),
      setTimeout(function () {
        yo = "meanwhile";
      }, 0);
  },
  S1 = function () {
    document.addEventListener("focusin", s0, !0),
      document.addEventListener("focusout", Vs),
      window.addEventListener("blur", c0);
  },
  C1 = function () {
    document.removeEventListener("focusin", s0, !0),
      document.removeEventListener("focusout", Vs),
      window.removeEventListener("blur", c0);
  };
function _1(e) {
  return e.filter(function (t) {
    return !t.disabled;
  });
}
function A1(e) {
  const t = e.slice(-1)[0];
  t && !ar && S1();
  const n = ar,
    r = n && t && t.id === n.id;
  (ar = t),
    n &&
      !r &&
      (n.onDeactivation(),
      e.filter(function (o) {
        return o.id === n.id;
      }).length || n.returnFocus(!t)),
    t
      ? ((Kn = null),
        (!r || n.observed !== t.observed) && t.onActivation(),
        Ki(),
        u0(Ki))
      : (C1(), (Kn = null));
}
Jh.assignSyncMedium(E1);
Kh.assignMedium(Vs);
M2.assignMedium(function (e) {
  return e({ moveFocusInside: a0, focusInside: o0 });
});
const b1 = H2(_1, A1)(w1),
  d0 = _.forwardRef(function (t, n) {
    return _.createElement(bl, wu({ sideCar: b1, ref: n }, t));
  }),
  f0 = bl.propTypes || {};
f0.sideCar;
const k1 = b2(f0, ["sideCar"]);
d0.propTypes = k1;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var sr =
  function () {
    return (
      (sr =
        Object.assign ||
        function (t) {
          for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (const i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
          }
          return t;
        }),
      sr.apply(this, arguments)
    );
  };
function O1(e, t) {
  const n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
}
const wi = "right-scroll-bar-position",
  Si = "width-before-scroll-bar",
  T1 = "with-scroll-bars-hidden",
  x1 = "--removed-body-scroll-bar-size",
  p0 = Qh(),
  va = function () {},
  kl = _.forwardRef(function (e, t) {
    const n = _.useRef(null),
      r = _.useState({
        onScrollCapture: va,
        onWheelCapture: va,
        onTouchMoveCapture: va,
      }),
      o = r[0],
      i = r[1],
      l = e.forwardProps,
      u = e.children,
      a = e.className,
      c = e.removeScrollBar,
      d = e.enabled,
      s = e.shards,
      f = e.sideCar,
      p = e.noIsolation,
      v = e.inert,
      g = e.allowPinchZoom,
      C = e.as,
      y = C === void 0 ? "div" : C,
      h = O1(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
      ]),
      w = f,
      A = Yh([n, t]),
      F = sr({}, h, o);
    return _.createElement(
      _.Fragment,
      null,
      d &&
        _.createElement(w, {
          sideCar: p0,
          removeScrollBar: c,
          shards: s,
          noIsolation: p,
          inert: v,
          setCallbacks: i,
          allowPinchZoom: !!g,
          lockRef: n,
        }),
      l
        ? _.cloneElement(_.Children.only(u), sr({}, F, { ref: A }))
        : _.createElement(y, sr({}, F, { className: a, ref: A }), u)
    );
  });
kl.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
kl.classNames = { fullWidth: Si, zeroRight: wi };
const R1 = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function D1() {
  if (!document) return null;
  const e = document.createElement("style");
  e.type = "text/css";
  const t = R1();
  return t && e.setAttribute("nonce", t), e;
}
function N1(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function F1(e) {
  (document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
const I1 = function () {
    let e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = D1()) && (N1(t, n), F1(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  L1 = function () {
    const e = I1();
    return function (t) {
      _.useEffect(function () {
        return (
          e.add(t),
          function () {
            e.remove();
          }
        );
      }, []);
    };
  },
  h0 = function () {
    const e = L1();
    return function (n) {
      const r = n.styles;
      return e(r), null;
    };
  },
  B1 = { left: 0, top: 0, right: 0, gap: 0 },
  Ea = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  P1 = function (e) {
    const t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [Ea(n), Ea(r), Ea(o)];
  },
  $d = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return B1;
    const t = P1(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  M1 = h0(),
  $1 = function (e, t, n, r) {
    const o = e.left,
      i = e.top,
      l = e.right,
      u = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .` +
        T1 +
        ` {
   overflow: hidden ` +
        r +
        `;
   padding-right: ` +
        u +
        "px " +
        r +
        `;
  }
  body {
    overflow: hidden ` +
        r +
        `;
    ` +
        [
          t && "position: relative " + r + ";",
          n === "margin" &&
            `
    padding-left: ` +
              o +
              `px;
    padding-top: ` +
              i +
              `px;
    padding-right: ` +
              l +
              `px;
    margin-left:0;
    margin-top:0;
    margin-right: ` +
              u +
              "px " +
              r +
              `;
    `,
          n === "padding" && "padding-right: " + u + "px " + r + ";",
        ]
          .filter(Boolean)
          .join("") +
        `
  }
  
  .` +
        wi +
        ` {
    right: ` +
        u +
        "px " +
        r +
        `;
  }
  
  .` +
        Si +
        ` {
    margin-right: ` +
        u +
        "px " +
        r +
        `;
  }
  
  .` +
        wi +
        " ." +
        wi +
        ` {
    right: 0 ` +
        r +
        `;
  }
  
  .` +
        Si +
        " ." +
        Si +
        ` {
    margin-right: 0 ` +
        r +
        `;
  }
  
  body {
    ` +
        x1 +
        ": " +
        u +
        `px;
  }
`
    );
  },
  j1 = function (e) {
    const t = _.useState($d(e.gapMode)),
      n = t[0],
      r = t[1];
    _.useEffect(
      function () {
        r($d(e.gapMode));
      },
      [e.gapMode]
    );
    const o = e.noRelative,
      i = e.noImportant,
      l = e.gapMode,
      u = l === void 0 ? "margin" : l;
    return _.createElement(M1, { styles: $1(n, !o, u, i ? "" : "!important") });
  },
  U1 = function (e) {
    const t = window.getComputedStyle(e);
    return (
      t.overflowY !== "hidden" &&
      !(t.overflowY === t.overflowX && t.overflowY === "visible")
    );
  },
  z1 = function (e) {
    const t = window.getComputedStyle(e);
    return (
      t.overflowX !== "hidden" &&
      !(t.overflowY === t.overflowX && t.overflowX === "visible")
    );
  },
  jd = function (e, t) {
    let n = t;
    do {
      if (g0(e, n)) {
        const o = m0(e, n),
          i = o[1],
          l = o[2];
        if (i > l) return !0;
      }
      n = n.parentNode;
    } while (n && n !== document.body);
    return !1;
  },
  H1 = function (e) {
    const t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  V1 = function (e) {
    const t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  };
var g0 = function (e, t) {
    return e === "v" ? U1(t) : z1(t);
  },
  m0 = function (e, t) {
    return e === "v" ? H1(t) : V1(t);
  };
const G1 = function (e, t, n, r, o) {
  const i = r;
  let l = n.target;
  const u = t.contains(l);
  let a = !1;
  const c = i > 0;
  let d = 0,
    s = 0;
  do {
    const f = m0(e, l),
      p = f[0],
      v = f[1],
      g = f[2],
      C = v - g - p;
    (p || C) && g0(e, l) && ((d += C), (s += p)), (l = l.parentNode);
  } while ((!u && l !== document.body) || (u && (t.contains(l) || t === l)));
  return (
    ((c && ((o && d === 0) || (!o && i > d))) ||
      (!c && ((o && s === 0) || (!o && -i > s)))) &&
      (a = !0),
    a
  );
};
let xu = !1;
if (typeof window < "u")
  try {
    const e = Object.defineProperty({}, "passive", {
      get: function () {
        return (xu = !0), !0;
      },
    });
    window.addEventListener("test", e, e),
      window.removeEventListener("test", e, e);
  } catch {
    xu = !1;
  }
const Pn = xu ? { passive: !1 } : !1,
  oi = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  Ud = function (e) {
    return [e.deltaX, e.deltaY];
  },
  zd = function (e) {
    return e && "current" in e ? e.current : e;
  },
  W1 = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  Y1 = function (e) {
    return (
      `
  .block-interactivity-` +
      e +
      ` {pointer-events: none;}
  .allow-interactivity-` +
      e +
      ` {pointer-events: all;}
`
    );
  };
let X1 = 0,
  Mn = [];
function Z1(e) {
  const t = _.useRef([]),
    n = _.useRef([0, 0]),
    r = _.useRef(),
    o = _.useState(X1++)[0],
    i = _.useState(function () {
      return h0();
    })[0],
    l = _.useRef(e);
  _.useEffect(
    function () {
      l.current = e;
    },
    [e]
  ),
    _.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-" + o);
          const g = [e.lockRef.current]
            .concat((e.shards || []).map(zd))
            .filter(Boolean);
          return (
            g.forEach(function (C) {
              return C.classList.add("allow-interactivity-" + o);
            }),
            function () {
              document.body.classList.remove("block-interactivity-" + o),
                g.forEach(function (C) {
                  return C.classList.remove("allow-interactivity-" + o);
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    );
  const u = _.useCallback(function (g, C) {
      if ("touches" in g && g.touches.length === 2)
        return !l.current.allowPinchZoom;
      const y = oi(g),
        h = n.current,
        w = "deltaX" in g ? g.deltaX : h[0] - y[0],
        A = "deltaY" in g ? g.deltaY : h[1] - y[1];
      let F;
      const N = g.target,
        k = Math.abs(w) > Math.abs(A) ? "h" : "v";
      let O = jd(k, N);
      if (!O) return !0;
      if ((O ? (F = k) : ((F = k === "v" ? "h" : "v"), (O = jd(k, N))), !O))
        return !1;
      if (
        (!r.current && "changedTouches" in g && (w || A) && (r.current = F), !F)
      )
        return !0;
      const $ = r.current || F;
      return G1($, C, g, $ === "h" ? w : A, !0);
    }, []),
    a = _.useCallback(function (g) {
      const C = g;
      if (!Mn.length || Mn[Mn.length - 1] !== i) return;
      const y = "deltaY" in C ? Ud(C) : oi(C),
        h = t.current.filter(function (w) {
          return w.name === C.type && w.target === C.target && W1(w.delta, y);
        })[0];
      if (h && h.should) {
        C.preventDefault();
        return;
      }
      if (!h) {
        const w = (l.current.shards || [])
          .map(zd)
          .filter(Boolean)
          .filter(function (F) {
            return F.contains(C.target);
          });
        (w.length > 0 ? u(C, w[0]) : !l.current.noIsolation) &&
          C.preventDefault();
      }
    }, []),
    c = _.useCallback(function (g, C, y, h) {
      const w = { name: g, delta: C, target: y, should: h };
      t.current.push(w),
        setTimeout(function () {
          t.current = t.current.filter(function (A) {
            return A !== w;
          });
        }, 1);
    }, []),
    d = _.useCallback(function (g) {
      (n.current = oi(g)), (r.current = void 0);
    }, []),
    s = _.useCallback(function (g) {
      c(g.type, Ud(g), g.target, u(g, e.lockRef.current));
    }, []),
    f = _.useCallback(function (g) {
      c(g.type, oi(g), g.target, u(g, e.lockRef.current));
    }, []);
  _.useEffect(function () {
    return (
      Mn.push(i),
      e.setCallbacks({
        onScrollCapture: s,
        onWheelCapture: s,
        onTouchMoveCapture: f,
      }),
      document.addEventListener("wheel", a, Pn),
      document.addEventListener("touchmove", a, Pn),
      document.addEventListener("touchstart", d, Pn),
      function () {
        (Mn = Mn.filter(function (g) {
          return g !== i;
        })),
          document.removeEventListener("wheel", a, Pn),
          document.removeEventListener("touchmove", a, Pn),
          document.removeEventListener("touchstart", d, Pn);
      }
    );
  }, []);
  const p = e.removeScrollBar,
    v = e.inert;
  return _.createElement(
    _.Fragment,
    null,
    v ? _.createElement(i, { styles: Y1(o) }) : null,
    p ? _.createElement(j1, { gapMode: "margin" }) : null
  );
}
const Q1 = P2(p0, Z1),
  y0 = _.forwardRef(function (e, t) {
    return _.createElement(kl, sr({}, e, { ref: t, sideCar: Q1 }));
  });
y0.classNames = kl.classNames;
function Tt() {
  return (
    (Tt =
      Object.assign ||
      function (e) {
        for (let t = 1; t < arguments.length; t++) {
          const n = arguments[t];
          for (const r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    Tt.apply(this, arguments)
  );
}
function Ol(e, t) {
  if (e == null) return {};
  const n = {},
    r = Object.keys(e);
  let o, i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
const v0 = {
    allowPinchZoom: ie.bool,
    dangerouslyBypassFocusLock: ie.bool,
    dangerouslyBypassScrollLock: ie.bool,
    initialFocusRef: function () {
      return null;
    },
    onDismiss: ie.func,
  },
  vo = Al(function (t, n) {
    const r = t.as,
      o = r === void 0 ? "div" : r,
      i = t.isOpen,
      l = i === void 0 ? !0 : i,
      u = Ol(t, ["as", "isOpen"]);
    return (
      zh("dialog"),
      _.useEffect(
        function () {
          l
            ? (window.__REACH_DISABLE_TOOLTIPS = !0)
            : window.requestAnimationFrame(function () {
                window.__REACH_DISABLE_TOOLTIPS = !1;
              });
        },
        [l]
      ),
      l
        ? _.createElement(
            Hh,
            { "data-reach-dialog-wrapper": "" },
            _.createElement(q1, Tt({ ref: n, as: o }, u))
          )
        : null
    );
  });
(vo.displayName = "DialogOverlay"),
  (vo.propTypes = Tt({}, v0, { isOpen: ie.bool }));
var q1 = Al(function (t, n) {
  const r = t.allowPinchZoom,
    o = t.as,
    i = o === void 0 ? "div" : o,
    l = t.dangerouslyBypassFocusLock,
    u = l === void 0 ? !1 : l,
    a = t.dangerouslyBypassScrollLock,
    c = a === void 0 ? !1 : a,
    d = t.initialFocusRef,
    s = t.onClick,
    f = t.onDismiss,
    p = f === void 0 ? bo : f,
    v = t.onKeyDown,
    g = t.onMouseDown,
    C = t.unstable_lockFocusAcrossFrames,
    y = C === void 0 ? !0 : C,
    h = Ol(t, [
      "allowPinchZoom",
      "as",
      "dangerouslyBypassFocusLock",
      "dangerouslyBypassScrollLock",
      "initialFocusRef",
      "onClick",
      "onDismiss",
      "onKeyDown",
      "onMouseDown",
      "unstable_lockFocusAcrossFrames",
    ]),
    w = _.useRef(null),
    A = _.useRef(null),
    F = A2(A, n),
    N = _.useCallback(
      function () {
        d && d.current && d.current.focus();
      },
      [d]
    );
  function k(M) {
    w.current === M.target && (M.stopPropagation(), p(M));
  }
  function O(M) {
    M.key === "Escape" && (M.stopPropagation(), p(M));
  }
  function $(M) {
    w.current = M.target;
  }
  return (
    _.useEffect(function () {
      return A.current ? J1(A.current) : void 0;
    }, []),
    _.createElement(
      d0,
      {
        autoFocus: !0,
        returnFocus: !0,
        onActivation: N,
        disabled: u,
        crossFrame: y,
      },
      _.createElement(
        y0,
        { allowPinchZoom: r, enabled: !c },
        _.createElement(
          i,
          Tt({}, h, {
            ref: F,
            "data-reach-dialog-overlay": "",
            onClick: Ei(s, k),
            onKeyDown: Ei(v, O),
            onMouseDown: Ei(g, $),
          })
        )
      )
    )
  );
});
(vo.displayName = "DialogOverlay"), (vo.propTypes = Tt({}, v0));
const Ru = Al(function (t, n) {
  const r = t.as,
    o = r === void 0 ? "div" : r,
    i = t.onClick;
  t.onKeyDown;
  const l = Ol(t, ["as", "onClick", "onKeyDown"]);
  return _.createElement(
    o,
    Tt({ "aria-modal": "true", role: "dialog", tabIndex: -1 }, l, {
      ref: n,
      "data-reach-dialog-content": "",
      onClick: Ei(i, function (u) {
        u.stopPropagation();
      }),
    })
  );
});
(Ru.displayName = "DialogContent"),
  (Ru.propTypes = { "aria-label": el, "aria-labelledby": el });
const Du = Al(function (t, n) {
  const r = t.allowPinchZoom,
    o = r === void 0 ? !1 : r,
    i = t.initialFocusRef,
    l = t.isOpen,
    u = t.onDismiss,
    a = u === void 0 ? bo : u,
    c = Ol(t, ["allowPinchZoom", "initialFocusRef", "isOpen", "onDismiss"]);
  return _.createElement(
    vo,
    { allowPinchZoom: o, initialFocusRef: i, isOpen: l, onDismiss: a },
    _.createElement(Ru, Tt({ ref: n }, c))
  );
});
(Du.displayName = "Dialog"),
  (Du.propTypes = {
    isOpen: ie.bool,
    onDismiss: ie.func,
    "aria-label": el,
    "aria-labelledby": el,
  });
function J1(e) {
  const t = [],
    n = [],
    r = w2(e);
  return e
    ? (Array.prototype.forEach.call(
        r.querySelectorAll("body > *"),
        function (o) {
          let i, l;
          const u =
            (i = e.parentNode) == null || (l = i.parentNode) == null
              ? void 0
              : l.parentNode;
          if (o === u) return;
          const a = o.getAttribute("aria-hidden");
          (a !== null && a !== "false") ||
            (t.push(a), n.push(o), o.setAttribute("aria-hidden", "true"));
        }
      ),
      function () {
        n.forEach(function (o, i) {
          const l = t[i];
          l === null
            ? o.removeAttribute("aria-hidden")
            : o.setAttribute("aria-hidden", l);
        });
      })
    : (console.warn(
        "A ref has not yet been attached to a dialog node when attempting to call `createAriaHider`."
      ),
      bo);
}
function el(e, t, n, r, o) {
  const i = `
See https://www.w3.org/TR/wai-aria/#aria-label for details.`;
  return !e["aria-label"] && !e["aria-labelledby"]
    ? new Error(
        "A <" +
          n +
          "> must have either an `aria-label` or `aria-labelledby` prop.\n      " +
          i
      )
    : e["aria-label"] && e["aria-labelledby"]
    ? new Error(
        "You provided both `aria-label` and `aria-labelledby` props to a <" +
          n +
          ">. If the a label for this component is visible on the screen, that label's component should be given a unique ID prop, and that ID should be passed as the `aria-labelledby` prop into <" +
          n +
          ">. If the label cannot be determined programmatically from the content of the element, an alternative label should be provided as the `aria-label` prop, which will be used as an `aria-label` on the HTML tag." +
          i
      )
    : e[t] != null && !C2(e[t])
    ? new Error(
        "Invalid prop `" +
          t +
          "` supplied to `" +
          n +
          "`. Expected `string`, received `" +
          (Array.isArray(o) ? "array" : typeof o) +
          "`."
      )
    : null;
}
const K1 = ({ children: e, onClick: t, style: n, ...r }) =>
    E("button", {
      className: "ladle-button",
      onClick: t,
      style: n,
      "aria-label": r["aria-label"],
      type: "button",
      children: e,
    }),
  cr = ({ children: e, href: t, style: n }) =>
    E("a", { className: "ladle-link", href: t, style: n, children: e }),
  vr = ({ children: e }) => E("code", { className: "ladle-code", children: e }),
  Cr = ({ children: e, close: t, isOpen: n, label: r, maxWidth: o = "40em" }) =>
    z(Du, {
      isOpen: n,
      onDismiss: () => t(),
      "aria-label": r || "Modal",
      "data-testid": "ladle-dialog",
      style: { maxWidth: o },
      children: [
        E("div", {
          style: { position: "absolute", insetInlineEnd: "-6px", top: "0px" },
          children: E(K1, {
            onClick: () => t(),
            "aria-label": "Close modal",
            style: {
              height: "36px",
              width: "36px",
              borderColor: "transparent",
              boxShadow: "none",
            },
            children: E(ey, {}),
          }),
        }),
        E("div", { className: "ladle-addon-modal-body", children: e }),
      ],
    });
var rt;
(function (e) {
  (e.Full = "full"),
    (e.Preview = "preview"),
    (e.SingleScroll = "single-scroll");
})(rt || (rt = {}));
var we;
(function (e) {
  (e.Light = "light"), (e.Dark = "dark"), (e.Auto = "auto");
})(we || (we = {}));
var J;
(function (e) {
  (e.Boolean = "boolean"),
    (e.String = "string"),
    (e.Number = "number"),
    (e.Complex = "complex"),
    (e.Function = "function"),
    (e.Radio = "radio"),
    (e.InlineRadio = "inline-radio"),
    (e.Select = "select"),
    (e.MultiSelect = "multi-select"),
    (e.Check = "check"),
    (e.InlineCheck = "inline-check"),
    (e.Action = "action"),
    (e.Range = "range"),
    (e.Background = "background");
})(J || (J = {}));
var ne;
(function (e) {
  (e.UpdateAll = "update-all"),
    (e.UpdateMode = "update-mode"),
    (e.UpdateAction = "update-action"),
    (e.UpdateRtl = "update-rtl"),
    (e.UpdateSource = "update-source"),
    (e.UpdateStory = "update-story"),
    (e.UpdateTheme = "update-theme"),
    (e.UpdateWidth = "update-width"),
    (e.UpdateControl = "update-control"),
    (e.UpdateControlIntialized = "update-control-initialized");
})(ne || (ne = {}));
const Hd = (e) => {
    switch (e) {
      case J.Boolean:
        return "checkbox";
      case J.Number:
        return "number";
      case J.Range:
        return "range";
      default:
        return "text";
    }
  },
  Vd = (e, t) => {
    switch (t) {
      case J.Boolean:
        return e.checked;
      case J.Number:
      case J.Range:
        return parseFloat(e.value);
      default:
        return e.value;
    }
  },
  tl = (e) => (e === "true" || e === "false" ? e !== "false" : e),
  E0 = (e, t) => {
    const n = Ut.parse(e),
      r = {};
    return Object.keys(t).length === 0
      ? t
      : (Object.keys(n).forEach((o) => {
          if (o.startsWith("arg-") && t[o.split("-")[1]]) {
            const l = o.split("-")[1],
              u = n[o],
              a = t[l].type;
            if (a !== J.Action) {
              let c = u;
              switch (a) {
                case J.String:
                  c = decodeURI(u);
                  break;
                case J.Boolean:
                  c = u === "true";
                  break;
                case J.Range:
                  c = parseFloat(u);
                  break;
                case J.Number:
                  c = parseInt(u, 10);
                  break;
                case J.Complex:
                  c = JSON.parse(decodeURI(u));
                  break;
                case J.Radio:
                case J.InlineRadio:
                case J.Select:
                case J.Background:
                  c = tl(decodeURI(u));
                  break;
                case J.InlineCheck:
                case J.MultiSelect:
                case J.Check:
                  c = tl(JSON.parse(decodeURI(u)));
                  break;
              }
              r[l] = {
                value: c,
                defaultValue: t[l].defaultValue,
                description: t[l].description,
                type: t[l].type,
              };
            }
          }
        }),
        r);
  },
  eE = ({ controlKey: e, globalState: t, dispatch: n }) => {
    const r = t.control[e],
      o = t.control[e].name || e;
    if (t.control[e].type === J.Action)
      return z("tr", {
        children: [E("td", { children: o }), E("td", { children: "action" })],
      });
    if (t.control[e].type === J.Function)
      return z("tr", {
        children: [E("td", { children: o }), E("td", { children: "function" })],
      });
    if (
      t.control[e].type === J.Radio ||
      t.control[e].type === J.InlineRadio ||
      (t.control[e].type === J.Background && t.control[e].options.length < 5)
    )
      return z("tr", {
        children: [
          E("td", { children: o }),
          E("td", {
            style:
              t.control[e].type === J.InlineRadio ? { display: "flex" } : {},
            children: (t.control[e].options || []).map((i) => {
              const l = t.control[e].value,
                a = (t.control[e].labels || {})[i] || i,
                c = l === i || l === String(i);
              return z(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    ...(t.control[e].type === J.InlineRadio
                      ? { paddingRight: "0.5em" }
                      : {}),
                  },
                  children: [
                    E("input", {
                      id: `${e}-${String(i)}`,
                      type: "radio",
                      name: e,
                      value: String(i),
                      onChange: () => {
                        n({
                          type: ne.UpdateControl,
                          value: {
                            ...t.control,
                            [e]: { ...t.control[e], value: tl(String(i)) },
                          },
                        });
                      },
                      checked: c,
                    }),
                    E("label", {
                      htmlFor: `${e}-${String(i)}`,
                      children: String(a),
                    }),
                  ],
                },
                `${String(i)}-${e}`
              );
            }),
          }),
        ],
      });
    if (
      t.control[e].type === J.Check ||
      t.control[e].type === J.InlineCheck ||
      t.control[e].type === J.MultiSelect
    )
      return z("tr", {
        children: [
          E("td", { children: o }),
          E("td", {
            style:
              t.control[e].type === J.InlineCheck ? { display: "flex" } : {},
            children: (t.control[e].options || []).map((i) => {
              const l = new Set(t.control[e].value),
                a = (t.control[e].labels || {})[i] || i;
              return z(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    ...(t.control[e].type === J.InlineCheck
                      ? { paddingRight: "0.5em" }
                      : {}),
                  },
                  children: [
                    E("input", {
                      id: `${e}-${String(i)}`,
                      type: "checkbox",
                      name: `${e}-${String(i)}`,
                      value: String(i),
                      checked: l.has(String(i)),
                      onChange: () => {
                        const c = String(i);
                        l.has(c) ? l.delete(c) : l.add(c),
                          n({
                            type: ne.UpdateControl,
                            value: {
                              ...t.control,
                              [e]: {
                                ...t.control[e],
                                value: l.size > 0 ? Array.from(l) : void 0,
                              },
                            },
                          });
                      },
                    }),
                    E("label", {
                      htmlFor: `${e}-${String(i)}`,
                      style: { marginLeft: "0.3em" },
                      children: String(a),
                    }),
                  ],
                },
                `${String(i)}-${e}`
              );
            }),
          }),
        ],
      });
    if (t.control[e].type === J.Select || t.control[e].type === J.Background)
      return z("tr", {
        children: [
          E("td", { children: E("label", { htmlFor: e, children: o }) }),
          E("td", {
            children: z("select", {
              id: e,
              value: String(t.control[e].value),
              onChange: (i) => {
                const l = t.control[e].labels || {},
                  u =
                    Object.keys(l).find((a) => l[a] === i.target.value) ||
                    i.target.value;
                n({
                  type: ne.UpdateControl,
                  value: {
                    ...t.control,
                    [e]: { ...t.control[e], value: tl(u) },
                  },
                });
              },
              children: [
                E("option", {
                  value: "undefined",
                  disabled: !0,
                  children: "Choose option...",
                }),
                (t.control[e].options || []).map((i) => {
                  const u = (t.control[e].labels || {})[i] || i;
                  return E("option", { children: String(u) }, `${i}-${e}`);
                }),
              ],
            }),
          }),
        ],
      });
    if (t.control[e].type === J.Complex) {
      let i = "";
      try {
        i = JSON.stringify(t.control[e].value);
      } catch {
        i = "Object/Array argument must be serializable.";
      }
      return z("tr", {
        children: [
          E("td", { children: E("label", { htmlFor: e, children: o }) }),
          E("td", {
            children: E("textarea", {
              id: e,
              defaultValue: i,
              onChange: (l) => {
                let u = t.control[e].value;
                try {
                  u = JSON.parse(l.target.value);
                } catch {}
                n({
                  type: ne.UpdateControl,
                  value: { ...t.control, [e]: { ...t.control[e], value: u } },
                });
              },
            }),
          }),
        ],
      });
    }
    if (r.type === J.Range) {
      const i = r.min ?? 0,
        l = r.max ?? 100;
      return z("tr", {
        children: [
          E("td", { children: E("label", { htmlFor: e, children: o }) }),
          z("td", {
            children: [
              i,
              E("input", {
                id: e,
                type: Hd(r.type),
                value: r.value,
                min: r.min,
                max: r.max,
                step: r.step,
                onChange: (u) =>
                  n({
                    type: ne.UpdateControl,
                    value: {
                      ...t.control,
                      [e]: { ...r, value: Vd(u.target, r.type) },
                    },
                  }),
              }),
              r.value,
              " / ",
              l,
            ],
          }),
        ],
      });
    }
    return z("tr", {
      children: [
        E("td", { children: E("label", { htmlFor: e, children: o }) }),
        E("td", {
          children: E("input", {
            id: e,
            type: Hd(t.control[e].type),
            value: t.control[e].value,
            checked:
              t.control[e].type === J.Boolean && t.control[e].value === !0,
            onChange: (i) =>
              n({
                type: ne.UpdateControl,
                value: {
                  ...t.control,
                  [e]: {
                    ...t.control[e],
                    value: Vd(i.target, t.control[e].type),
                  },
                },
              }),
          }),
        }),
      ],
    });
  },
  tE = ({ globalState: e, dispatch: t }) => {
    const [n, r] = _.useState(!1),
      o = "Explore different versions of this story through controls.",
      i = Object.keys(e.control).filter(
        (l) =>
          JSON.stringify(e.control[l].value) !==
          JSON.stringify(e.control[l].defaultValue)
      );
    return E("li", {
      children: z("button", {
        "aria-label": o,
        title: o,
        onClick: () => r(!0),
        className: n ? "ladle-active" : "",
        "data-testid": "addon-control",
        type: "button",
        children: [
          E(uy, {}),
          E("span", { className: "ladle-addon-tooltip", children: o }),
          E("label", { children: "Story Controls" }),
          i.length
            ? E("div", { className: "ladle-badge", children: i.length })
            : null,
          z(Cr, {
            isOpen: n,
            close: () => r(!1),
            label: "Toggle different controls to update the story.",
            children: [
              E("table", {
                className: "ladle-controls-table",
                children: E("tbody", {
                  children: Object.keys(e.control)
                    .sort()
                    .map((l) =>
                      E(eE, { globalState: e, dispatch: t, controlKey: l }, l)
                    ),
                }),
              }),
              E("button", {
                onClick: () => {
                  const l = {};
                  Object.keys(e.control).forEach((u) => {
                    l[u] = {
                      ...e.control[u],
                      value: e.control[u].defaultValue,
                    };
                  }),
                    t({ type: ne.UpdateControl, value: l });
                },
                type: "button",
                children: "Reset to defaults",
              }),
            ],
          }),
        ],
      }),
    });
  },
  Gd = [
    "select",
    "multi-select",
    "radio",
    "inline-radio",
    "background",
    "check",
    "inline-check",
    "range",
  ],
  nE = ({ component: e, args: t, argTypes: n }) => {
    const { globalState: r, dispatch: o } = Oa(),
      i = (a) => (c) => {
        o({ type: ne.UpdateAction, value: { name: a, event: c }, clear: !1 });
      };
    _.useEffect(() => {
      const a = {};
      let c = 0;
      if (
        (t &&
          Object.keys(t).forEach((d) => {
            const s = t[d];
            if (r.control[d])
              a[d] = {
                type: r.control[d].type,
                defaultValue: s,
                value: r.control[d].value,
                description: "",
              };
            else {
              let f = J.Complex;
              switch (typeof s) {
                case "function":
                  f = J.Function;
                  break;
                case "boolean":
                  f = J.Boolean;
                  break;
                case "number":
                  f = J.Number;
                  break;
                case "string":
                  f = J.String;
                  break;
              }
              a[d] = { type: f, defaultValue: s, value: s, description: "" };
            }
          }),
        n &&
          Object.keys(n).forEach((d) => {
            const s = n[d];
            if (s && s.action) {
              a[d] = {
                type: J.Action,
                defaultValue: i(d),
                value: i(d),
                description: "",
              };
              return;
            }
            if (!s.control || !s.control.type)
              throw new Error("argTypes should have control type specified");
            if (Gd.indexOf(s.control.type) === -1)
              throw new Error(
                `only ${Gd.join(
                  ", "
                )} argTypes are supported now. For strings, booleans and numbers use just args.`
              );
            if (s.control.type === "background" && (c++, c > 1))
              throw new Error(
                "There can be only single argType with the type background since it's used to change Ladle's background color."
              );
            (a[d] = {
              name: s.name,
              type: s.control.type,
              labels: s.control.labels,
              defaultValue: t[d] ? t[d] : s.defaultValue,
              options: s.options,
              value: t[d] ? t[d] : s.defaultValue,
              description: s.description || d,
              min: s.control.min,
              max: s.control.max,
              step: s.control.step,
            }),
              r.control[d] && (a[d].value = r.control[d].value);
          }),
        Object.keys(a).length)
      ) {
        const d = E0(location.search, a);
        Object.keys(d).forEach((s) => {
          a[s].value = d[s].value;
        }),
          Object.keys(a).some(
            (s) => !r.control[s] || a[s].value !== r.control[s].value
          ) && o({ type: ne.UpdateControl, value: a });
      } else
        r.controlInitialized ||
          o({ type: ne.UpdateControlIntialized, value: !0 });
    }, []);
    const l = (a, c) =>
        n && n[a] && n[a].mapping && n[a].mapping.hasOwnProperty(c)
          ? n[a].mapping[c]
          : c,
      u = {};
    return (
      Object.keys(r.control).forEach((a) => {
        Array.isArray(r.control[a].value)
          ? (u[a] = r.control[a].value.map((c) => l(a, c)))
          : (u[a] = l(a, r.control[a].value));
      }),
      r.controlInitialized ? _.createElement(e, u) : null
    );
  };
function Et(e, t) {
  let n = [],
    r = {};
  const o = {
    args: {
      ...mE,
      ...(e.default && e.default.args ? e.default.args : {}),
      ...(e[t].args ? e[t].args : {}),
    },
    argTypes: {
      ...yE,
      ...(e.default && e.default.argTypes ? e.default.argTypes : {}),
      ...(e[t].argTypes ? e[t].argTypes : {}),
    },
    component: e[t],
  };
  return (
    e[t] && Array.isArray(e[t].decorators) && (n = [...n, ...e[t].decorators]),
    e.default &&
      Array.isArray(e.default.decorators) &&
      (n = [...n, ...e.default.decorators]),
    (r = {
      ...(e.default && e.default.parameters ? e.default.parameters : {}),
      ...(e[t].parameters ? e[t].parameters : {}),
    }),
    function () {
      const { globalState: l } = Oa(),
        u = x.useMemo(
          () =>
            function () {
              return E(nE, { ...o });
            },
          []
        );
      if (n.length === 0) return E(u, {});
      const a = (d) =>
          x.useRef(() => {
            const s = Oa(),
              f = {};
            return (
              Object.keys(s.globalState.control).forEach(
                (p) => (f[p] = s.globalState.control[p].value)
              ),
              n[d](d === 0 ? u : a(d - 1), {
                ...s,
                parameters: r,
                argTypes: o.argTypes,
                args: f,
              })
            );
          }).current,
        c = a(n.length - 1);
      return l.controlInitialized ? E(c, {}) : E(u, {});
    }
  );
}
const rE = _.lazy(() =>
    at(
      () => import("./PostCard.stories-e4046238.js"),
      [
        "assets/PostCard.stories-e4046238.js",
        "assets/core-ui.es-40c0b244.js",
        "assets/core-ui-d12a84e1.css",
      ]
    ).then((e) => ({ default: Et(e, "Default") }))
  ),
  oE = _.lazy(() =>
    at(
      () => import("./ServiceCard.stories-bcface70.js"),
      [
        "assets/ServiceCard.stories-bcface70.js",
        "assets/core-ui.es-40c0b244.js",
        "assets/core-ui-d12a84e1.css",
      ]
    ).then((e) => ({ default: Et(e, "Default") }))
  ),
  iE = _.lazy(() =>
    at(
      () => import("./ServiceCard.stories-bcface70.js"),
      [
        "assets/ServiceCard.stories-bcface70.js",
        "assets/core-ui.es-40c0b244.js",
        "assets/core-ui-d12a84e1.css",
      ]
    ).then((e) => ({ default: Et(e, "NoContent") }))
  ),
  lE = _.lazy(() =>
    at(
      () => import("./Button.stories-f370eb09.js"),
      [
        "assets/Button.stories-f370eb09.js",
        "assets/core-ui.es-40c0b244.js",
        "assets/core-ui-d12a84e1.css",
      ]
    ).then((e) => ({ default: Et(e, "Default") }))
  ),
  aE = _.lazy(() =>
    at(
      () => import("./Button.stories-f370eb09.js"),
      [
        "assets/Button.stories-f370eb09.js",
        "assets/core-ui.es-40c0b244.js",
        "assets/core-ui-d12a84e1.css",
      ]
    ).then((e) => ({ default: Et(e, "Disabled") }))
  ),
  uE = _.lazy(() =>
    at(
      () => import("./Button.stories-f370eb09.js"),
      [
        "assets/Button.stories-f370eb09.js",
        "assets/core-ui.es-40c0b244.js",
        "assets/core-ui-d12a84e1.css",
      ]
    ).then((e) => ({ default: Et(e, "LeftIcon") }))
  ),
  sE = _.lazy(() =>
    at(
      () => import("./Button.stories-f370eb09.js"),
      [
        "assets/Button.stories-f370eb09.js",
        "assets/core-ui.es-40c0b244.js",
        "assets/core-ui-d12a84e1.css",
      ]
    ).then((e) => ({ default: Et(e, "Loading") }))
  ),
  cE = _.lazy(() =>
    at(
      () => import("./Button.stories-f370eb09.js"),
      [
        "assets/Button.stories-f370eb09.js",
        "assets/core-ui.es-40c0b244.js",
        "assets/core-ui-d12a84e1.css",
      ]
    ).then((e) => ({ default: Et(e, "NoIcon") }))
  ),
  dE = _.lazy(() =>
    at(
      () => import("./Select.stories-73cbcb63.js"),
      [
        "assets/Select.stories-73cbcb63.js",
        "assets/core-ui.es-40c0b244.js",
        "assets/core-ui-d12a84e1.css",
      ]
    ).then((e) => ({ default: Et(e, "Default") }))
  ),
  fE = _.lazy(() =>
    at(
      () => import("./Select.stories-73cbcb63.js"),
      [
        "assets/Select.stories-73cbcb63.js",
        "assets/core-ui.es-40c0b244.js",
        "assets/core-ui-d12a84e1.css",
      ]
    ).then((e) => ({ default: Et(e, "LanguageSelect") }))
  ),
  pE = _.lazy(() =>
    at(
      () => import("./StatisticSection.stories-6102e677.js"),
      [
        "assets/StatisticSection.stories-6102e677.js",
        "assets/core-ui.es-40c0b244.js",
        "assets/core-ui-d12a84e1.css",
      ]
    ).then((e) => ({ default: Et(e, "Default") }))
  );
let sn = {
    "-nv-fe--core-ui--postcard--default": {
      component: rE,
      locStart: 13,
      locEnd: 46,
      entry: "src/PostCard.stories.tsx",
    },
    "-nv-fe--core-ui--servicecard--default": {
      component: oE,
      locStart: 24,
      locEnd: 36,
      entry: "src/ServiceCard.stories.tsx",
    },
    "-nv-fe--core-ui--servicecard--no-content": {
      component: iE,
      locStart: 38,
      locEnd: 50,
      entry: "src/ServiceCard.stories.tsx",
    },
    "-nv-fe--core-ui--buttons--button--default": {
      component: lE,
      locStart: 13,
      locEnd: 15,
      entry: "src/buttons/Button.stories.tsx",
    },
    "-nv-fe--core-ui--buttons--button--disabled": {
      component: aE,
      locStart: 27,
      locEnd: 29,
      entry: "src/buttons/Button.stories.tsx",
    },
    "-nv-fe--core-ui--buttons--button--left-icon": {
      component: uE,
      locStart: 19,
      locEnd: 21,
      entry: "src/buttons/Button.stories.tsx",
    },
    "-nv-fe--core-ui--buttons--button--loading": {
      component: sE,
      locStart: 23,
      locEnd: 25,
      entry: "src/buttons/Button.stories.tsx",
    },
    "-nv-fe--core-ui--buttons--button--no-icon": {
      component: cE,
      locStart: 17,
      locEnd: 17,
      entry: "src/buttons/Button.stories.tsx",
    },
    "-nv-fe--core-ui--buttons--select--default": {
      component: dE,
      locStart: 16,
      locEnd: 20,
      entry: "src/buttons/Select.stories.tsx",
    },
    "-nv-fe--core-ui--buttons--select--language-select": {
      component: fE,
      locStart: 40,
      locEnd: 47,
      entry: "src/buttons/Select.stories.tsx",
    },
    "-nv-fe--core-ui--layout--statisticsection--default": {
      component: pE,
      locStart: 32,
      locEnd: 41,
      entry: "src/layout/StatisticSection.stories.tsx",
    },
  },
  ht = {
    stories: "src/**/*.stories.{js,jsx,ts,tsx}",
    addons: {
      width: {
        options: { xsmall: 320, small: 480, medium: 768, large: 1024 },
        enabled: !0,
        defaultValue: 0,
        defaultState: 0,
      },
      a11y: { enabled: !0 },
      action: { enabled: !1, defaultState: [] },
      control: { enabled: !0, defaultState: {} },
      ladle: { enabled: !0 },
      mode: { enabled: !0, defaultState: "full" },
      rtl: { enabled: !0, defaultState: !1 },
      source: { enabled: !0, defaultState: !1 },
      theme: { enabled: !0, defaultState: "black" },
    },
    i18n: {
      buildTooltip:
        '💡 Tip: Run "ladle preview" to check that the build works!',
    },
    storyOrder: "(stories) => stories",
  };
const hE = ({ children: e }) => _.createElement(_.Fragment, null, e),
  gE = ({ path: e }) =>
    _.createElement(
      "div",
      { style: { paddingTop: "2em" } },
      _.createElement("code", { className: "ladle-code" }, e)
    ),
  mE = {},
  yE = {};
let ct = {
    "89d08f9e":
      "import%20type%20%7B%20Story%2C%20StoryDefault%20%7D%20from%20%22%40ladle%2Freact%22%3B%0Aimport%20React%20from%20%22react%22%3B%0A%0Aimport%20%22regenerator-runtime%2Fruntime%22%3B%0Aimport%20%22%40namviet-fe%2Fcore-ui%2Fdist%2Fstyle.css%22%3B%0A%0Aimport%20%7B%20PostCard%20%7D%20from%20%22%40namviet-fe%2Fcore-ui%22%3B%0A%0Aexport%20default%20%7B%0A%20%20title%3A%20%22%40nv-fe%2Fcore-ui%2FPostCard%22%2C%0A%7D%20satisfies%20StoryDefault%3Ctypeof%20PostCard%3E%3B%0A%0Aexport%20const%20Default%3A%20Story%20%3D%20()%20%3D%3E%20(%0A%20%20%3Cdiv%0A%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20width%3A%20%22full%22%2C%0A%20%20%20%20%20%20backgroundColor%3A%20%22white%22%2C%0A%20%20%20%20%20%20padding%3A%20%2220px%22%2C%0A%20%20%20%20%20%20display%3A%20%22flex%22%2C%0A%20%20%20%20%7D%7D%0A%20%20%3E%0A%20%20%20%20%3Cdiv%20style%3D%7B%7B%20marginLeft%3A%20%2220px%22%2C%20marginRight%3A%20%2220px%22%20%7D%7D%3E%0A%20%20%20%20%20%20%3CPostCard%0A%20%20%20%20%20%20%20%20title%3D%22D%E1%BA%A7u%20%C4%91%E1%BB%91t%22%0A%20%20%20%20%20%20%20%20previewImage%3D%22https%3A%2F%2Fhips.hearstapps.com%2Fhmg-prod%2Fimages%2Fdog-puppy-on-garden-royalty-free-image-1586966191.jpg%3Fcrop%3D0.752xw%3A1.00xh%3B0.175xw%2C0%26resize%3D1200%3A*%22%0A%20%20%20%20%20%20%20%20description%3D%22Chuy%C3%AAn%20cung%20c%E1%BA%A5p%20c%C3%A1c%20%C4%91%E1%BA%A7u%20%C4%91%E1%BB%91t%20(Blowtherm%20-%20Italy%2C%20Hofamat%20-%20Germany%2C%20%E2%80%A6)%20v%C3%A0%20ph%E1%BB%A5%20t%C3%B9ng%20%C4%91%E1%BA%A7u%20%C4%91%E1%BB%91t%20c%C3%A1c%20lo%E1%BA%A1i.%20C%C3%A1c%20s%E1%BA%A3n%20ph%E1%BA%A9m%20%C4%91%C6%B0%E1%BB%A3c%20s%E1%BA%A3n%20xu%E1%BA%A5t%20v%E1%BB%9Bi%20c%C3%B4ng%20ngh%E1%BB%87%20ti%C3%AAn%20ti%E1%BA%BFn%20v%C3%A0%20%C4%91%C6%B0%E1%BB%A3c%20s%E1%BB%AD%20d%E1%BB%A5ng%20r%E1%BB%99ng%20r%C3%A3i%20trong%20c%C3%A1c%20ng%C3%A0nh%20c%C3%B4ng%20nghi%E1%BB%87p.%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%0A%20%20%20%20%3Cdiv%20style%3D%7B%7B%20marginLeft%3A%20%2220px%22%2C%20marginRight%3A%20%2220px%22%20%7D%7D%3E%0A%20%20%20%20%20%20%3CPostCard%0A%20%20%20%20%20%20%20%20title%3D%22D%E1%BA%A7u%20%C4%91%E1%BB%91t%22%0A%20%20%20%20%20%20%20%20previewImage%3D%22https%3A%2F%2Fhips.hearstapps.com%2Fhmg-prod%2Fimages%2Fdog-puppy-on-garden-royalty-free-image-1586966191.jpg%3Fcrop%3D0.752xw%3A1.00xh%3B0.175xw%2C0%26resize%3D1200%3A*%22%0A%20%20%20%20%20%20%20%20description%3D%22Chuy%C3%AAn%20cung%20c%E1%BA%A5p%20c%C3%A1c%20%C4%91%E1%BA%A7u%20%C4%91%E1%BB%91t%20(Blowtherm.%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%0A%20%20%20%20%3Cdiv%20style%3D%7B%7B%20marginLeft%3A%20%2220px%22%2C%20marginRight%3A%20%2220px%22%20%7D%7D%3E%0A%20%20%20%20%20%20%3CPostCard%0A%20%20%20%20%20%20%20%20title%3D%22D%E1%BA%A7u%20%C4%91%E1%BB%91t%22%0A%20%20%20%20%20%20%20%20previewImage%3D%22https%3A%2F%2Fhips.hearstapps.com%2Fhmg-prod%2Fimages%2Fdog-puppy-on-garden-royalty-free-image-1586966191.jpg%3Fcrop%3D0.752xw%3A1.00xh%3B0.175xw%2C0%26resize%3D1200%3A*%22%0A%20%20%20%20%20%20%20%20description%3D%22Chuy%C3%AAn%20cung%20c%E1%BA%A5p%20c%C3%A1c%20%C4%91%E1%BA%A7u%20%C4%91%E1%BB%91t%20(Blowtherm%20-%20Italy%2C%20Hofamat%20-%20Germany%2C%20%E2%80%A6)%20v%C3%A0%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%3C%2Fdiv%3E%0A)%3B%0A",
    "35f38bf7":
      "import%20type%20%7B%20Story%2C%20StoryDefault%20%7D%20from%20%22%40ladle%2Freact%22%3B%0A%0Aimport%20React%20from%20%22react%22%3B%0A%0Aimport%20%22regenerator-runtime%2Fruntime%22%3B%0Aimport%20%22%40namviet-fe%2Fcore-ui%2Fdist%2Fstyle.css%22%3B%0A%0Aimport%20%7B%0A%20%20ServiceCard%2C%0A%20%20type%20ServiceCardItemType%2C%0A%20%20ProductIcon%2C%0A%7D%20from%20%22%40namviet-fe%2Fcore-ui%22%3B%0A%0Aconst%20serviceCardItem%3A%20ServiceCardItemType%20%3D%20%7B%0A%20%20icon%3A%20%3CProductIcon%20%2F%3E%2C%0A%20%20title%3A%20%22S%E1%BA%A3n%20ph%E1%BA%A9m%22%2C%0A%20%20description%3A%20%22%C4%90%E1%BB%99i%20ng%C5%A9%20gi%C3%A0u%20kinh%20nghi%E1%BB%87m%2C%20c%C3%B3%20chuy%C3%AAn%20m%C3%B4n%22%2C%0A%7D%3B%0A%0Aexport%20default%20%7B%0A%20%20title%3A%20%22%40nv-fe%2Fcore-ui%2FServiceCard%22%2C%0A%7D%20satisfies%20StoryDefault%3Ctypeof%20ServiceCard%3E%3B%0A%0Aexport%20const%20Default%3A%20Story%20%3D%20()%20%3D%3E%20(%0A%20%20%3Cdiv%0A%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20width%3A%20%22100%25%22%2C%0A%20%20%20%20%20%20padding%3A%20%2220px%22%2C%0A%20%20%20%20%20%20backgroundColor%3A%20%22black%22%2C%0A%20%20%20%20%20%20display%3A%20%22flex%22%2C%0A%20%20%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20%7D%7D%0A%20%20%3E%0A%20%20%20%20%3CServiceCard%20serviceCardItem%3D%7BserviceCardItem%7D%20%2F%3E%7B%22%20%22%7D%0A%20%20%3C%2Fdiv%3E%0A)%3B%0A%0Aexport%20const%20NoContent%3A%20Story%20%3D%20()%20%3D%3E%20(%0A%20%20%3Cdiv%0A%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20width%3A%20%22100%25%22%2C%0A%20%20%20%20%20%20padding%3A%20%2220px%22%2C%0A%20%20%20%20%20%20backgroundColor%3A%20%22black%22%2C%0A%20%20%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20%20%20display%3A%20%22flex%22%2C%0A%20%20%20%20%7D%7D%0A%20%20%3E%0A%20%20%20%20%3CServiceCard%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A)%3B%0A",
    "04685cbb":
      "import%20React%20from%20%22react%22%3B%0A%0Aimport%20type%20%7B%20Story%2C%20StoryDefault%20%7D%20from%20%22%40ladle%2Freact%22%3B%0Aimport%20%7B%20WhitePlusIcon%20%7D%20from%20%22%40namviet-fe%2Fcore-ui%22%3B%0A%0Aimport%20%7B%20Button%2C%20type%20ButtonProps%20%7D%20from%20%22%40namviet-fe%2Fcore-ui%22%3B%0Aimport%20%22regenerator-runtime%2Fruntime%22%3B%0Aimport%20%22%40namviet-fe%2Fcore-ui%2Fdist%2Fstyle.css%22%3B%0Aexport%20default%20%7B%0A%20%20title%3A%20%22%40nv-fe%2Fcore-ui%2Fbuttons%2FButton%22%2C%0A%7D%20satisfies%20StoryDefault%3Ctypeof%20Button%3E%3B%0A%0Aexport%20const%20Default%3A%20Story%3CButtonProps%3E%20%3D%20()%20%3D%3E%20(%0A%20%20%3CButton%20rightIcon%3D%7B%3CWhitePlusIcon%20%2F%3E%7D%20children%3D%22%C4%90%E1%BB%8Dc%20th%C3%AAm%22%20%2F%3E%0A)%3B%0A%0Aexport%20const%20NoIcon%3A%20Story%3CButtonProps%3E%20%3D%20()%20%3D%3E%20%3CButton%20children%3D%22Submit%22%20%2F%3E%3B%0A%0Aexport%20const%20LeftIcon%3A%20Story%3CButtonProps%3E%20%3D%20()%20%3D%3E%20(%0A%20%20%3CButton%20leftIcon%3D%7B%3CWhitePlusIcon%20%2F%3E%7D%20children%3D%22%C4%90%E1%BB%8Dc%20th%C3%AAm%22%20%2F%3E%0A)%3B%0A%0Aexport%20const%20Loading%3A%20Story%3CButtonProps%3E%20%3D%20()%20%3D%3E%20(%0A%20%20%3CButton%20children%3D%22%C4%90%E1%BB%8Dc%20th%C3%AAm%22%20isLoading%3D%7Btrue%7D%20%2F%3E%0A)%3B%0A%0Aexport%20const%20Disabled%3A%20Story%3CButtonProps%3E%20%3D%20()%20%3D%3E%20(%0A%20%20%3CButton%20rightIcon%3D%7B%3CWhitePlusIcon%20%2F%3E%7D%20children%3D%22%C4%90%E1%BB%8Dc%20th%C3%AAm%22%20disabled%3D%7Btrue%7D%20%2F%3E%0A)%3B%0A",
    "7bdf0ffa":
      "import%20type%20%7B%20Story%2C%20StoryDefault%20%7D%20from%20%22%40ladle%2Freact%22%3B%0A%0Aimport%20React%20from%20%22react%22%3B%0Aimport%20%7B%20DropdownButton%2C%20type%20DropdownButtonProps%20%7D%20from%20%22%40namviet-fe%2Fcore-ui%22%3B%0Aimport%20%7B%20FaFlagUsa%20%7D%20from%20%22react-icons%2Ffa%22%3B%0Aimport%20%7B%20GiUsaFlag%20%7D%20from%20%22react-icons%2Fgi%22%3B%0A%0Aimport%20%22regenerator-runtime%2Fruntime%22%3B%0Aimport%20%22%40namviet-fe%2Fcore-ui%2Fdist%2Fstyle.css%22%3B%0Aimport%20%7B%20EnIcon%2C%20ViIcon%20%7D%20from%20%22%40namviet-fe%2Fcore-ui%22%3B%0A%0Aexport%20default%20%7B%0A%20%20title%3A%20%22%40nv-fe%2Fcore-ui%2Fbuttons%2FSelect%22%2C%0A%7D%20satisfies%20StoryDefault%3CDropdownButtonProps%3E%3B%0A%0Aexport%20const%20Default%3A%20Story%3CDropdownButtonProps%3E%20%3D%20(%7B%20selected%2C%20options%20%7D)%20%3D%3E%20(%0A%20%20%3Cdiv%20style%3D%7B%7B%20float%3A%20%22right%22%20%7D%7D%3E%0A%20%20%20%20%3CDropdownButton%20selected%3D%7Bselected%7D%20options%3D%7Boptions%7D%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A)%3B%0A%0ADefault.defaultProps%20%3D%20%7B%0A%20%20selected%3A%20%22one%22%2C%0A%20%20options%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20key%3A%20%22one%22%2C%0A%20%20%20%20%20%20label%3A%20%22Option%201%22%2C%0A%20%20%20%20%20%20icon%3A%20%3CFaFlagUsa%20%2F%3E%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20key%3A%20%22two%22%2C%0A%20%20%20%20%20%20label%3A%20%22Option%202%22%2C%0A%20%20%20%20%20%20icon%3A%20%3CGiUsaFlag%20%2F%3E%2C%0A%20%20%20%20%7D%2C%0A%20%20%5D%2C%0A%7D%3B%0A%0ADefault.argTypes%20%3D%20%7B%7D%3B%0A%0Aexport%20const%20LanguageSelect%3A%20Story%3CDropdownButtonProps%3E%20%3D%20(%7B%0A%20%20selected%2C%0A%20%20options%2C%0A%7D)%20%3D%3E%20(%0A%20%20%3Cdiv%20style%3D%7B%7B%20float%3A%20%22right%22%20%7D%7D%3E%0A%20%20%20%20%3CDropdownButton%20selected%3D%7Bselected%7D%20options%3D%7Boptions%7D%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A)%3B%0A%0ALanguageSelect.defaultProps%20%3D%20%7B%0A%20%20selected%3A%20%22vn%22%2C%0A%20%20options%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20key%3A%20%22en%22%2C%0A%20%20%20%20%20%20label%3A%20%22English%22%2C%0A%20%20%20%20%20%20icon%3A%20%3CEnIcon%20%2F%3E%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20key%3A%20%22vn%22%2C%0A%20%20%20%20%20%20label%3A%20%22Tie%CC%82%CC%81ng%20Vie%CC%A3%CC%82t%22%2C%0A%20%20%20%20%20%20icon%3A%20%3CViIcon%20%2F%3E%2C%0A%20%20%20%20%7D%2C%0A%20%20%5D%2C%0A%7D%3B%0A%0ALanguageSelect.argTypes%20%3D%20%7B%7D%3B%0A",
    "39e434e5":
      "import%20type%20%7B%20Story%2C%20StoryDefault%20%7D%20from%20%22%40ladle%2Freact%22%3B%0Aimport%20React%20from%20%22react%22%3B%0A%0Aimport%20%22regenerator-runtime%2Fruntime%22%3B%0Aimport%20%22%40namviet-fe%2Fcore-ui%2Fdist%2Fstyle.css%22%3B%0A%0Aimport%20%7B%20type%20StatisticItemsType%2C%20StatisticSection%20%7D%20from%20%22%40namviet-fe%2Fcore-ui%22%3B%0A%0Aconst%20statisticItems%3A%20StatisticItemsType%5B%5D%20%3D%20%5B%0A%20%20%7B%0A%20%20%20%20title%3A%20%22m%E1%BA%B7t%20h%C3%A0ng%22%2C%0A%20%20%20%20statistic%3A%20500%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20title%3A%20%22kh%C3%A1ch%20h%C3%A0ng%20h%C3%A0i%20l%C3%B2ng%22%2C%0A%20%20%20%20statistic%3A%20100%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20title%3A%20%22d%E1%BB%B1%20%C3%A1n%20th%C3%A0nh%20c%C3%B4ng%22%2C%0A%20%20%20%20statistic%3A%20200%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20title%3A%20%22th%C3%A0nh%20l%E1%BA%ADp%20doanh%20nghi%E1%BB%87p%22%2C%0A%20%20%20%20statistic%3A%202010%2C%0A%20%20%7D%2C%0A%5D%3B%0A%0Aexport%20default%20%7B%0A%20%20title%3A%20%22%40nv-fe%2Fcore-ui%2Flayout%2FStatisticSection%22%2C%0A%7D%20satisfies%20StoryDefault%3Ctypeof%20StatisticSection%3E%3B%0A%0Aexport%20const%20Default%3A%20Story%20%3D%20()%20%3D%3E%20(%0A%20%20%3Cdiv%0A%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20width%3A%20%22100%25%22%2C%0A%20%20%20%20%20%20backgroundColor%3A%20%22black%22%2C%0A%20%20%20%20%7D%7D%0A%20%20%3E%0A%20%20%20%20%3CStatisticSection%20statisticItems%3D%7BstatisticItems%7D%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A)%3B%0A",
    "6cee61c8":
      "import%20React%20from%20%22react%22%3B%0Aimport%20type%20%7B%20Story%2C%20StoryDefault%20%7D%20from%20%22%40ladle%2Freact%22%3B%0Aimport%20%7B%20WhitePlusIcon%20%7D%20from%20%22%40namviet-fe%2Fcore-ui%22%3B",
  },
  vE = {
    "-nv-fe--core-ui--postcard--default": ct["89d08f9e"],
    "-nv-fe--core-ui--servicecard--default": ct["35f38bf7"],
    "-nv-fe--core-ui--servicecard--no-content": ct["35f38bf7"],
    "-nv-fe--core-ui--buttons--button--default": ct["04685cbb"],
    "-nv-fe--core-ui--buttons--button--disabled": ct["04685cbb"],
    "-nv-fe--core-ui--buttons--button--left-icon": ct["04685cbb"],
    "-nv-fe--core-ui--buttons--button--loading": ct["04685cbb"],
    "-nv-fe--core-ui--buttons--button--no-icon": ct["04685cbb"],
    "-nv-fe--core-ui--buttons--select--default": ct["7bdf0ffa"],
    "-nv-fe--core-ui--buttons--select--language-select": ct["7bdf0ffa"],
    "-nv-fe--core-ui--layout--statisticsection--default": ct["39e434e5"],
  };
const w0 = {
  stories: "src/**/*.stories.{js,jsx,ts,tsx}",
  defaultStory: "",
  storyOrder: (e) => e,
  viteConfig: void 0,
  appendToHead: "",
  port: 61e3,
  previewPort: 8080,
  outDir: "build",
  base: void 0,
  onDevServerStart: () => {},
  i18n: {
    buildTooltip: '💡 Tip: Run "ladle preview" to check that the build works!',
  },
  addons: {
    control: { enabled: !0, defaultState: {} },
    theme: { enabled: !0, defaultState: "light" },
    mode: { enabled: !0, defaultState: "full" },
    rtl: { enabled: !0, defaultState: !1 },
    source: { enabled: !0, defaultState: !1 },
    a11y: { enabled: !0 },
    action: { enabled: !0, defaultState: [] },
    ladle: { enabled: !0 },
    width: {
      enabled: !0,
      options: { xsmall: 414, small: 640, medium: 768, large: 1024 },
      defaultState: 0,
    },
  },
};
Object.keys(ht).length === 0
  ? bt("No custom config found.")
  : (ht.storyOrder &&
      typeof ht.storyOrder == "string" &&
      (ht.storyOrder = new Function("return " + ht.storyOrder)()),
    bt("Custom config found:"),
    bt(ht));
var df, ff;
(ff = (df = ht == null ? void 0 : ht.addons) == null ? void 0 : df.width) !=
  null &&
  ff.options &&
  (w0.addons.width.options = {});
const re = Rm(w0, ht);
re.defaultStory === "" &&
  (re.defaultStory = bf(Object.keys(sn), re.storyOrder)[0]);
bt("Final config", re);
const S0 = (e) => {
    switch (Ut.parse(e).theme) {
      case we.Light:
        return we.Light;
      case we.Dark:
        return we.Dark;
      case we.Auto:
        return we.Auto;
      default:
        return "black";
    }
  },
  EE = ({ globalState: e, dispatch: t }) => {
    const n = "Switch to dark theme.",
      r = "Switch to light theme.";
    return E("li", {
      children: z("button", {
        "aria-label": e.theme === we.Light ? n : r,
        title: e.theme === we.Light ? n : r,
        onClick: () => {
          const o = e.theme === we.Light ? we.Dark : we.Light;
          document.documentElement.setAttribute("data-theme", o),
            t({ type: ne.UpdateTheme, value: o });
        },
        type: "button",
        children: [
          E(iy, {}),
          E("span", {
            className: "ladle-addon-tooltip",
            children: e.theme === we.Light ? n : r,
          }),
          z("label", {
            children: [
              "Switch to",
              " ",
              e.theme === we.Light ? we.Dark : we.Light,
              " ",
              "theme",
            ],
          }),
        ],
      }),
    });
  },
  C0 = Af(Cf(location.search, re.defaultStory));
bt(`Initial document.title: ${C0}`);
document.title = `${C0} | Ladle`;
const Nu = S0(location.search);
bt(`Initial theme state: ${Nu}`);
Nu === we.Auto
  ? window.matchMedia("(prefers-color-scheme: dark)").matches
    ? document.documentElement.setAttribute("data-theme", we.Dark)
    : document.documentElement.setAttribute("data-theme", we.Light)
  : document.documentElement.setAttribute("data-theme", Nu);
var nl = {},
  _0,
  rl,
  Wd = _l;
(rl = nl.createRoot = Wd.createRoot), (_0 = nl.hydrateRoot = Wd.hydrateRoot);
const wE = dm(
  {
    __proto__: null,
    get createRoot() {
      return rl;
    },
    default: nl,
    get hydrateRoot() {
      return _0;
    },
  },
  [nl]
);
var Gs = {},
  ko = {},
  A0 = { exports: {} },
  SE = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  CE = SE,
  _E = CE;
function b0() {}
function k0() {}
k0.resetWarningCache = b0;
var AE = function () {
  function e(r, o, i, l, u, a) {
    if (a !== _E) {
      var c = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((c.name = "Invariant Violation"), c);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: k0,
    resetWarningCache: b0,
  };
  return (n.PropTypes = n), n;
};
A0.exports = AE();
var O0 = A0.exports,
  gt = {};
Object.defineProperty(gt, "__esModule", { value: !0 });
gt.FrameContextConsumer =
  gt.FrameContextProvider =
  gt.useFrame =
  gt.FrameContext =
    void 0;
var bE = _,
  T0 = kE(bE);
function kE(e) {
  return e && e.__esModule ? e : { default: e };
}
var x0 = void 0,
  R0 = void 0;
typeof document < "u" && (x0 = document);
typeof window < "u" && (R0 = window);
var Ws = (gt.FrameContext = T0.default.createContext({
  document: x0,
  window: R0,
}));
gt.useFrame = function () {
  return T0.default.useContext(Ws);
};
var OE = Ws.Provider,
  TE = Ws.Consumer;
gt.FrameContextProvider = OE;
gt.FrameContextConsumer = TE;
var Ys = {};
Object.defineProperty(Ys, "__esModule", { value: !0 });
var xE = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var o = n[r];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(t, o.key, o);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  Fu = _;
D0(Fu);
var RE = O0,
  wa = D0(RE);
function D0(e) {
  return e && e.__esModule ? e : { default: e };
}
function DE(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function NE(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function FE(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var N0 = (function (e) {
  FE(t, e);
  function t() {
    return (
      DE(this, t),
      NE(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
    );
  }
  return (
    xE(t, [
      {
        key: "componentDidMount",
        value: function () {
          this.props.contentDidMount();
        },
      },
      {
        key: "componentDidUpdate",
        value: function () {
          this.props.contentDidUpdate();
        },
      },
      {
        key: "render",
        value: function () {
          return Fu.Children.only(this.props.children);
        },
      },
    ]),
    t
  );
})(Fu.Component);
N0.propTypes = {
  children: wa.default.element.isRequired,
  contentDidMount: wa.default.func.isRequired,
  contentDidUpdate: wa.default.func.isRequired,
};
Ys.default = N0;
Object.defineProperty(ko, "__esModule", { value: !0 });
ko.Frame = void 0;
var Iu =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  IE = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var o = n[r];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(t, o.key, o);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  F0 = _,
  En = Tl(F0),
  LE = _l,
  Yd = Tl(LE),
  BE = O0,
  Ct = Tl(BE),
  PE = gt,
  ME = Ys,
  $E = Tl(ME);
function Tl(e) {
  return e && e.__esModule ? e : { default: e };
}
function jE(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function UE(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function zE(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var Xs = (ko.Frame = (function (e) {
  zE(t, e);
  function t(n, r) {
    jE(this, t);
    var o = UE(
      this,
      (t.__proto__ || Object.getPrototypeOf(t)).call(this, n, r)
    );
    return (
      (o.setRef = function (i) {
        o.nodeRef.current = i;
        var l = o.props.forwardedRef;
        typeof l == "function" ? l(i) : l && (l.current = i);
      }),
      (o.handleLoad = function () {
        o.setState({ iframeLoaded: !0 });
      }),
      (o._isMounted = !1),
      (o.nodeRef = En.default.createRef()),
      (o.state = { iframeLoaded: !1 }),
      o
    );
  }
  return (
    IE(t, [
      {
        key: "componentDidMount",
        value: function () {
          this._isMounted = !0;
          var r = this.getDoc();
          r && r.readyState === "complete"
            ? this.forceUpdate()
            : this.nodeRef.current.addEventListener("load", this.handleLoad);
        },
      },
      {
        key: "componentWillUnmount",
        value: function () {
          (this._isMounted = !1),
            this.nodeRef.current.removeEventListener("load", this.handleLoad);
        },
      },
      {
        key: "getDoc",
        value: function () {
          return this.nodeRef.current
            ? this.nodeRef.current.contentDocument
            : null;
        },
      },
      {
        key: "getMountTarget",
        value: function () {
          var r = this.getDoc();
          return this.props.mountTarget
            ? r.querySelector(this.props.mountTarget)
            : r.body.children[0];
        },
      },
      {
        key: "renderFrameContents",
        value: function () {
          if (!this._isMounted) return null;
          var r = this.getDoc();
          if (!r) return null;
          var o = this.props.contentDidMount,
            i = this.props.contentDidUpdate,
            l = r.defaultView || r.parentView,
            u = En.default.createElement(
              $E.default,
              { contentDidMount: o, contentDidUpdate: i },
              En.default.createElement(
                PE.FrameContextProvider,
                { value: { document: r, window: l } },
                En.default.createElement(
                  "div",
                  { className: "frame-content" },
                  this.props.children
                )
              )
            ),
            a = this.getMountTarget();
          return [
            Yd.default.createPortal(this.props.head, this.getDoc().head),
            Yd.default.createPortal(u, a),
          ];
        },
      },
      {
        key: "render",
        value: function () {
          var r = Iu({}, this.props, {
            srcDoc: this.props.initialContent,
            children: void 0,
          });
          return (
            delete r.head,
            delete r.initialContent,
            delete r.mountTarget,
            delete r.contentDidMount,
            delete r.contentDidUpdate,
            delete r.forwardedRef,
            En.default.createElement(
              "iframe",
              Iu({}, r, { ref: this.setRef, onLoad: this.handleLoad }),
              this.state.iframeLoaded && this.renderFrameContents()
            )
          );
        },
      },
    ]),
    t
  );
})(F0.Component));
Xs.propTypes = {
  style: Ct.default.object,
  head: Ct.default.node,
  initialContent: Ct.default.string,
  mountTarget: Ct.default.string,
  contentDidMount: Ct.default.func,
  contentDidUpdate: Ct.default.func,
  children: Ct.default.oneOfType([
    Ct.default.element,
    Ct.default.arrayOf(Ct.default.element),
  ]),
};
Xs.defaultProps = {
  style: {},
  head: null,
  children: void 0,
  mountTarget: void 0,
  contentDidMount: function () {},
  contentDidUpdate: function () {},
  initialContent:
    '<!DOCTYPE html><html><head></head><body><div class="frame-root"></div></body></html>',
};
ko.default = En.default.forwardRef(function (e, t) {
  return En.default.createElement(Xs, Iu({}, e, { forwardedRef: t }));
});
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = ko;
  Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function () {
      return r(t).default;
    },
  });
  var n = gt;
  Object.defineProperty(e, "FrameContext", {
    enumerable: !0,
    get: function () {
      return n.FrameContext;
    },
  }),
    Object.defineProperty(e, "FrameContextConsumer", {
      enumerable: !0,
      get: function () {
        return n.FrameContextConsumer;
      },
    }),
    Object.defineProperty(e, "useFrame", {
      enumerable: !0,
      get: function () {
        return n.useFrame;
      },
    });
  function r(o) {
    return o && o.__esModule ? o : { default: o };
  }
})(Gs);
const HE = Eo(Gs),
  I0 = x.createContext({});
function VE(e) {
  const t = x.useContext(I0);
  return x.useMemo(
    () => (typeof e == "function" ? e(t) : { ...t, ...e }),
    [t, e]
  );
}
const GE = {};
function WE({ components: e, children: t, disableParentContext: n }) {
  let r;
  return (
    n ? (r = typeof e == "function" ? e({}) : e || GE) : (r = VE(e)),
    x.createElement(I0.Provider, { value: r }, t)
  );
}
class YE extends _.Component {
  constructor(t) {
    super(t), (this.state = { hasError: !1 });
  }
  static getDerivedStateFromError() {
    return { hasError: !0 };
  }
  componentDidCatch() {}
  render() {
    return this.state.hasError ? null : this.props.children;
  }
}
const XE = ({ activeStory: e }) =>
  z("div", {
    className: "ladle-error-content",
    children: [
      E("h1", { children: "Story not found" }),
      z("p", {
        children: [
          "The story id ",
          E(vr, { children: e }),
          " you are trying to open does not exist. Typo?",
        ],
      }),
      E("p", { children: E(cr, { href: "/", children: "Back to home" }) }),
      E("p", {
        children: E(cr, {
          href: "https://github.com/tajo/ladle",
          children: "GitHub",
        }),
      }),
      E("p", {
        children: E(cr, { href: "https://www.ladle.dev", children: "Docs" }),
      }),
    ],
  });
/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */ var Lu = (function () {
    var e = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
      t = 0,
      n = {},
      r = {
        util: {
          encode: function s(f) {
            return f instanceof o
              ? new o(f.type, s(f.content), f.alias)
              : Array.isArray(f)
              ? f.map(s)
              : f
                  .replace(/&/g, "&amp;")
                  .replace(/</g, "&lt;")
                  .replace(/\u00a0/g, " ");
          },
          type: function (s) {
            return Object.prototype.toString.call(s).slice(8, -1);
          },
          objId: function (s) {
            return (
              s.__id || Object.defineProperty(s, "__id", { value: ++t }), s.__id
            );
          },
          clone: function s(f, p) {
            p = p || {};
            var v, g;
            switch (r.util.type(f)) {
              case "Object":
                if (((g = r.util.objId(f)), p[g])) return p[g];
                (v = {}), (p[g] = v);
                for (var C in f) f.hasOwnProperty(C) && (v[C] = s(f[C], p));
                return v;
              case "Array":
                return (
                  (g = r.util.objId(f)),
                  p[g]
                    ? p[g]
                    : ((v = []),
                      (p[g] = v),
                      f.forEach(function (y, h) {
                        v[h] = s(y, p);
                      }),
                      v)
                );
              default:
                return f;
            }
          },
          getLanguage: function (s) {
            for (; s; ) {
              var f = e.exec(s.className);
              if (f) return f[1].toLowerCase();
              s = s.parentElement;
            }
            return "none";
          },
          setLanguage: function (s, f) {
            (s.className = s.className.replace(RegExp(e, "gi"), "")),
              s.classList.add("language-" + f);
          },
          isActive: function (s, f, p) {
            for (var v = "no-" + f; s; ) {
              var g = s.classList;
              if (g.contains(f)) return !0;
              if (g.contains(v)) return !1;
              s = s.parentElement;
            }
            return !!p;
          },
        },
        languages: {
          plain: n,
          plaintext: n,
          text: n,
          txt: n,
          extend: function (s, f) {
            var p = r.util.clone(r.languages[s]);
            for (var v in f) p[v] = f[v];
            return p;
          },
          insertBefore: function (s, f, p, v) {
            v = v || r.languages;
            var g = v[s],
              C = {};
            for (var y in g)
              if (g.hasOwnProperty(y)) {
                if (y == f)
                  for (var h in p) p.hasOwnProperty(h) && (C[h] = p[h]);
                p.hasOwnProperty(y) || (C[y] = g[y]);
              }
            var w = v[s];
            return (
              (v[s] = C),
              r.languages.DFS(r.languages, function (A, F) {
                F === w && A != s && (this[A] = C);
              }),
              C
            );
          },
          DFS: function s(f, p, v, g) {
            g = g || {};
            var C = r.util.objId;
            for (var y in f)
              if (f.hasOwnProperty(y)) {
                p.call(f, y, f[y], v || y);
                var h = f[y],
                  w = r.util.type(h);
                w === "Object" && !g[C(h)]
                  ? ((g[C(h)] = !0), s(h, p, null, g))
                  : w === "Array" &&
                    !g[C(h)] &&
                    ((g[C(h)] = !0), s(h, p, y, g));
              }
          },
        },
        plugins: {},
        highlight: function (s, f, p) {
          var v = { code: s, grammar: f, language: p };
          return (
            r.hooks.run("before-tokenize", v),
            (v.tokens = r.tokenize(v.code, v.grammar)),
            r.hooks.run("after-tokenize", v),
            o.stringify(r.util.encode(v.tokens), v.language)
          );
        },
        tokenize: function (s, f) {
          var p = f.rest;
          if (p) {
            for (var v in p) f[v] = p[v];
            delete f.rest;
          }
          var g = new u();
          return a(g, g.head, s), l(s, g, f, g.head, 0), d(g);
        },
        hooks: {
          all: {},
          add: function (s, f) {
            var p = r.hooks.all;
            (p[s] = p[s] || []), p[s].push(f);
          },
          run: function (s, f) {
            var p = r.hooks.all[s];
            if (!(!p || !p.length)) for (var v = 0, g; (g = p[v++]); ) g(f);
          },
        },
        Token: o,
      };
    function o(s, f, p, v) {
      (this.type = s),
        (this.content = f),
        (this.alias = p),
        (this.length = (v || "").length | 0);
    }
    o.stringify = function s(f, p) {
      if (typeof f == "string") return f;
      if (Array.isArray(f)) {
        var v = "";
        return (
          f.forEach(function (w) {
            v += s(w, p);
          }),
          v
        );
      }
      var g = {
          type: f.type,
          content: s(f.content, p),
          tag: "span",
          classes: ["token", f.type],
          attributes: {},
          language: p,
        },
        C = f.alias;
      C &&
        (Array.isArray(C)
          ? Array.prototype.push.apply(g.classes, C)
          : g.classes.push(C)),
        r.hooks.run("wrap", g);
      var y = "";
      for (var h in g.attributes)
        y +=
          " " +
          h +
          '="' +
          (g.attributes[h] || "").replace(/"/g, "&quot;") +
          '"';
      return (
        "<" +
        g.tag +
        ' class="' +
        g.classes.join(" ") +
        '"' +
        y +
        ">" +
        g.content +
        "</" +
        g.tag +
        ">"
      );
    };
    function i(s, f, p, v) {
      s.lastIndex = f;
      var g = s.exec(p);
      if (g && v && g[1]) {
        var C = g[1].length;
        (g.index += C), (g[0] = g[0].slice(C));
      }
      return g;
    }
    function l(s, f, p, v, g, C) {
      for (var y in p)
        if (!(!p.hasOwnProperty(y) || !p[y])) {
          var h = p[y];
          h = Array.isArray(h) ? h : [h];
          for (var w = 0; w < h.length; ++w) {
            if (C && C.cause == y + "," + w) return;
            var A = h[w],
              F = A.inside,
              N = !!A.lookbehind,
              k = !!A.greedy,
              O = A.alias;
            if (k && !A.pattern.global) {
              var $ = A.pattern.toString().match(/[imsuy]*$/)[0];
              A.pattern = RegExp(A.pattern.source, $ + "g");
            }
            for (
              var M = A.pattern || A, V = v.next, T = g;
              V !== f.tail && !(C && T >= C.reach);
              T += V.value.length, V = V.next
            ) {
              var P = V.value;
              if (f.length > s.length) return;
              if (!(P instanceof o)) {
                var G = 1,
                  H;
                if (k) {
                  if (((H = i(M, T, s, N)), !H || H.index >= s.length)) break;
                  var L = H.index,
                    W = H.index + H[0].length,
                    Z = T;
                  for (Z += V.value.length; L >= Z; )
                    (V = V.next), (Z += V.value.length);
                  if (((Z -= V.value.length), (T = Z), V.value instanceof o))
                    continue;
                  for (
                    var R = V;
                    R !== f.tail && (Z < W || typeof R.value == "string");
                    R = R.next
                  )
                    G++, (Z += R.value.length);
                  G--, (P = s.slice(T, Z)), (H.index -= T);
                } else if (((H = i(M, 0, P, N)), !H)) continue;
                var L = H.index,
                  B = H[0],
                  X = P.slice(0, L),
                  q = P.slice(L + B.length),
                  Q = T + P.length;
                C && Q > C.reach && (C.reach = Q);
                var le = V.prev;
                X && ((le = a(f, le, X)), (T += X.length)), c(f, le, G);
                var ut = new o(y, F ? r.tokenize(B, F) : B, O, B);
                if (((V = a(f, le, ut)), q && a(f, V, q), G > 1)) {
                  var ue = { cause: y + "," + w, reach: Q };
                  l(s, f, p, V.prev, T, ue),
                    C && ue.reach > C.reach && (C.reach = ue.reach);
                }
              }
            }
          }
        }
    }
    function u() {
      var s = { value: null, prev: null, next: null },
        f = { value: null, prev: s, next: null };
      (s.next = f), (this.head = s), (this.tail = f), (this.length = 0);
    }
    function a(s, f, p) {
      var v = f.next,
        g = { value: p, prev: f, next: v };
      return (f.next = g), (v.prev = g), s.length++, g;
    }
    function c(s, f, p) {
      for (var v = f.next, g = 0; g < p && v !== s.tail; g++) v = v.next;
      (f.next = v), (v.prev = f), (s.length -= g);
    }
    function d(s) {
      for (var f = [], p = s.head.next; p !== s.tail; )
        f.push(p.value), (p = p.next);
      return f;
    }
    return r;
  })(),
  D = Lu;
Lu.default = Lu;
D.languages.markup = {
  comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 },
  prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 },
  doctype: {
    pattern:
      /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
    greedy: !0,
    inside: {
      "internal-subset": {
        pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
        lookbehind: !0,
        greedy: !0,
        inside: null,
      },
      string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
      punctuation: /^<!|>$|[[\]]/,
      "doctype-tag": /^DOCTYPE/i,
      name: /[^\s<>'"]+/,
    },
  },
  cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 },
  tag: {
    pattern:
      /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
    greedy: !0,
    inside: {
      tag: {
        pattern: /^<\/?[^\s>\/]+/,
        inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
      },
      "special-attr": [],
      "attr-value": {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
        inside: {
          punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/],
        },
      },
      punctuation: /\/?>/,
      "attr-name": {
        pattern: /[^\s>\/]+/,
        inside: { namespace: /^[^\s>\/:]+:/ },
      },
    },
  },
  entity: [
    { pattern: /&[\da-z]{1,8};/i, alias: "named-entity" },
    /&#x?[\da-f]{1,8};/i,
  ],
};
D.languages.markup.tag.inside["attr-value"].inside.entity =
  D.languages.markup.entity;
D.languages.markup.doctype.inside["internal-subset"].inside =
  D.languages.markup;
D.hooks.add("wrap", function (e) {
  e.type === "entity" && (e.attributes.title = e.content.replace(/&amp;/, "&"));
});
Object.defineProperty(D.languages.markup.tag, "addInlined", {
  value: function (t, n) {
    var r = {};
    (r["language-" + n] = {
      pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
      lookbehind: !0,
      inside: D.languages[n],
    }),
      (r.cdata = /^<!\[CDATA\[|\]\]>$/i);
    var o = {
      "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: r },
    };
    o["language-" + n] = { pattern: /[\s\S]+/, inside: D.languages[n] };
    var i = {};
    (i[t] = {
      pattern: RegExp(
        /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
          /__/g,
          function () {
            return t;
          }
        ),
        "i"
      ),
      lookbehind: !0,
      greedy: !0,
      inside: o,
    }),
      D.languages.insertBefore("markup", "cdata", i);
  },
});
Object.defineProperty(D.languages.markup.tag, "addAttribute", {
  value: function (e, t) {
    D.languages.markup.tag.inside["special-attr"].push({
      pattern: RegExp(
        /(^|["'\s])/.source +
          "(?:" +
          e +
          ")" +
          /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
        "i"
      ),
      lookbehind: !0,
      inside: {
        "attr-name": /^[^\s=]+/,
        "attr-value": {
          pattern: /=[\s\S]+/,
          inside: {
            value: {
              pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
              lookbehind: !0,
              alias: [t, "language-" + t],
              inside: D.languages[t],
            },
            punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/],
          },
        },
      },
    });
  },
});
D.languages.html = D.languages.markup;
D.languages.mathml = D.languages.markup;
D.languages.svg = D.languages.markup;
D.languages.xml = D.languages.extend("markup", {});
D.languages.ssml = D.languages.xml;
D.languages.atom = D.languages.xml;
D.languages.rss = D.languages.xml;
(function (e) {
  var t =
      "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",
    n = {
      pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
      lookbehind: !0,
      alias: "punctuation",
      inside: null,
    },
    r = {
      bash: n,
      environment: { pattern: RegExp("\\$" + t), alias: "constant" },
      variable: [
        {
          pattern: /\$?\(\([\s\S]+?\)\)/,
          greedy: !0,
          inside: {
            variable: [
              { pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 },
              /^\$\(\(/,
            ],
            number:
              /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
            operator:
              /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
            punctuation: /\(\(?|\)\)?|,|;/,
          },
        },
        {
          pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
          greedy: !0,
          inside: { variable: /^\$\(|^`|\)$|`$/ },
        },
        {
          pattern: /\$\{[^}]+\}/,
          greedy: !0,
          inside: {
            operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
            punctuation: /[\[\]]/,
            environment: {
              pattern: RegExp("(\\{)" + t),
              lookbehind: !0,
              alias: "constant",
            },
          },
        },
        /\$(?:\w+|[#?*!@$])/,
      ],
      entity:
        /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/,
    };
  (e.languages.bash = {
    shebang: { pattern: /^#!\s*\/.*/, alias: "important" },
    comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: !0 },
    "function-name": [
      {
        pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
        lookbehind: !0,
        alias: "function",
      },
      { pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/, alias: "function" },
    ],
    "for-or-select": {
      pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
      alias: "variable",
      lookbehind: !0,
    },
    "assign-left": {
      pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
      inside: {
        environment: {
          pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + t),
          lookbehind: !0,
          alias: "constant",
        },
      },
      alias: "variable",
      lookbehind: !0,
    },
    string: [
      {
        pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
        lookbehind: !0,
        greedy: !0,
        inside: r,
      },
      {
        pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
        lookbehind: !0,
        greedy: !0,
        inside: { bash: n },
      },
      {
        pattern:
          /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
        lookbehind: !0,
        greedy: !0,
        inside: r,
      },
      { pattern: /(^|[^$\\])'[^']*'/, lookbehind: !0, greedy: !0 },
      {
        pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
        greedy: !0,
        inside: { entity: r.entity },
      },
    ],
    environment: { pattern: RegExp("\\$?" + t), alias: "constant" },
    variable: r.variable,
    function: {
      pattern:
        /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
      lookbehind: !0,
    },
    keyword: {
      pattern:
        /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
      lookbehind: !0,
    },
    builtin: {
      pattern:
        /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
      lookbehind: !0,
      alias: "class-name",
    },
    boolean: {
      pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
      lookbehind: !0,
    },
    "file-descriptor": { pattern: /\B&\d\b/, alias: "important" },
    operator: {
      pattern:
        /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
      inside: { "file-descriptor": { pattern: /^\d/, alias: "important" } },
    },
    punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
    number: { pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/, lookbehind: !0 },
  }),
    (n.inside = e.languages.bash);
  for (
    var o = [
        "comment",
        "function-name",
        "for-or-select",
        "assign-left",
        "string",
        "environment",
        "function",
        "keyword",
        "builtin",
        "boolean",
        "file-descriptor",
        "operator",
        "punctuation",
        "number",
      ],
      i = r.variable[1].inside,
      l = 0;
    l < o.length;
    l++
  )
    i[o[l]] = e.languages.bash[o[l]];
  e.languages.shell = e.languages.bash;
})(D);
D.languages.clike = {
  comment: [
    { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0, greedy: !0 },
    { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
  ],
  string: {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: !0,
  },
  "class-name": {
    pattern:
      /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
    lookbehind: !0,
    inside: { punctuation: /[.\\]/ },
  },
  keyword:
    /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
  boolean: /\b(?:false|true)\b/,
  function: /\b\w+(?=\()/,
  number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
  operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
  punctuation: /[{}[\];(),.:]/,
};
D.languages.c = D.languages.extend("clike", {
  comment: {
    pattern:
      /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: !0,
  },
  string: { pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/, greedy: !0 },
  "class-name": {
    pattern:
      /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
    lookbehind: !0,
  },
  keyword:
    /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
  function: /\b[a-z_]\w*(?=\s*\()/i,
  number:
    /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
  operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/,
});
D.languages.insertBefore("c", "string", {
  char: { pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/, greedy: !0 },
});
D.languages.insertBefore("c", "string", {
  macro: {
    pattern:
      /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
    lookbehind: !0,
    greedy: !0,
    alias: "property",
    inside: {
      string: [
        { pattern: /^(#\s*include\s*)<[^>]+>/, lookbehind: !0 },
        D.languages.c.string,
      ],
      char: D.languages.c.char,
      comment: D.languages.c.comment,
      "macro-name": [
        { pattern: /(^#\s*define\s+)\w+\b(?!\()/i, lookbehind: !0 },
        {
          pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
          lookbehind: !0,
          alias: "function",
        },
      ],
      directive: { pattern: /^(#\s*)[a-z]+/, lookbehind: !0, alias: "keyword" },
      "directive-hash": /^#/,
      punctuation: /##|\\(?=[\r\n])/,
      expression: { pattern: /\S[\s\S]*/, inside: D.languages.c },
    },
  },
});
D.languages.insertBefore("c", "function", {
  constant:
    /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/,
});
delete D.languages.c.boolean;
(function (e) {
  var t =
      /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,
    n = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(
      /<keyword>/g,
      function () {
        return t.source;
      }
    );
  (e.languages.cpp = e.languages.extend("c", {
    "class-name": [
      {
        pattern: RegExp(
          /(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(
            /<keyword>/g,
            function () {
              return t.source;
            }
          )
        ),
        lookbehind: !0,
      },
      /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
      /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
      /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/,
    ],
    keyword: t,
    number: {
      pattern:
        /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
      greedy: !0,
    },
    operator:
      />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
    boolean: /\b(?:false|true)\b/,
  })),
    e.languages.insertBefore("cpp", "string", {
      module: {
        pattern: RegExp(
          /(\b(?:import|module)\s+)/.source +
            "(?:" +
            /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source +
            "|" +
            /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(
              /<mod-name>/g,
              function () {
                return n;
              }
            ) +
            ")"
        ),
        lookbehind: !0,
        greedy: !0,
        inside: { string: /^[<"][\s\S]+/, operator: /:/, punctuation: /\./ },
      },
      "raw-string": {
        pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
        alias: "string",
        greedy: !0,
      },
    }),
    e.languages.insertBefore("cpp", "keyword", {
      "generic-function": {
        pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
        inside: {
          function: /^\w+/,
          generic: {
            pattern: /<[\s\S]+/,
            alias: "class-name",
            inside: e.languages.cpp,
          },
        },
      },
    }),
    e.languages.insertBefore("cpp", "operator", {
      "double-colon": { pattern: /::/, alias: "punctuation" },
    }),
    e.languages.insertBefore("cpp", "class-name", {
      "base-clause": {
        pattern:
          /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
        lookbehind: !0,
        greedy: !0,
        inside: e.languages.extend("cpp", {}),
      },
    }),
    e.languages.insertBefore(
      "inside",
      "double-colon",
      { "class-name": /\b[a-z_]\w*\b(?!\s*::)/i },
      e.languages.cpp["base-clause"]
    );
})(D);
(function (e) {
  var t =
    /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
  (e.languages.css = {
    comment: /\/\*[\s\S]*?\*\//,
    atrule: {
      pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
      inside: {
        rule: /^@[\w-]+/,
        "selector-function-argument": {
          pattern:
            /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
          lookbehind: !0,
          alias: "selector",
        },
        keyword: {
          pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
          lookbehind: !0,
        },
      },
    },
    url: {
      pattern: RegExp(
        "\\burl\\((?:" +
          t.source +
          "|" +
          /(?:[^\\\r\n()"']|\\[\s\S])*/.source +
          ")\\)",
        "i"
      ),
      greedy: !0,
      inside: {
        function: /^url/i,
        punctuation: /^\(|\)$/,
        string: { pattern: RegExp("^" + t.source + "$"), alias: "url" },
      },
    },
    selector: {
      pattern: RegExp(
        `(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` +
          t.source +
          ")*(?=\\s*\\{)"
      ),
      lookbehind: !0,
    },
    string: { pattern: t, greedy: !0 },
    property: {
      pattern:
        /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
      lookbehind: !0,
    },
    important: /!important\b/i,
    function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: !0 },
    punctuation: /[(){};:,]/,
  }),
    (e.languages.css.atrule.inside.rest = e.languages.css);
  var n = e.languages.markup;
  n && (n.tag.addInlined("style", "css"), n.tag.addAttribute("style", "css"));
})(D);
(function (e) {
  var t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    n;
  (e.languages.css.selector = {
    pattern: e.languages.css.selector.pattern,
    lookbehind: !0,
    inside: (n = {
      "pseudo-element":
        /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
      "pseudo-class": /:[-\w]+/,
      class: /\.[-\w]+/,
      id: /#[-\w]+/,
      attribute: {
        pattern: RegExp(`\\[(?:[^[\\]"']|` + t.source + ")*\\]"),
        greedy: !0,
        inside: {
          punctuation: /^\[|\]$/,
          "case-sensitivity": {
            pattern: /(\s)[si]$/i,
            lookbehind: !0,
            alias: "keyword",
          },
          namespace: {
            pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
            lookbehind: !0,
            inside: { punctuation: /\|$/ },
          },
          "attr-name": {
            pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,
            lookbehind: !0,
          },
          "attr-value": [
            t,
            {
              pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,
              lookbehind: !0,
            },
          ],
          operator: /[|~*^$]?=/,
        },
      },
      "n-th": [
        {
          pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
          lookbehind: !0,
          inside: { number: /[\dn]+/, operator: /[+-]/ },
        },
        { pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i, lookbehind: !0 },
      ],
      combinator: />|\+|~|\|\|/,
      punctuation: /[(),]/,
    }),
  }),
    (e.languages.css.atrule.inside["selector-function-argument"].inside = n),
    e.languages.insertBefore("css", "property", {
      variable: {
        pattern:
          /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
        lookbehind: !0,
      },
    });
  var r = { pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/, lookbehind: !0 },
    o = { pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/, lookbehind: !0 };
  e.languages.insertBefore("css", "function", {
    operator: { pattern: /(\s)[+\-*\/](?=\s)/, lookbehind: !0 },
    hexcode: { pattern: /\B#[\da-f]{3,8}\b/i, alias: "color" },
    color: [
      {
        pattern:
          /(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,
        lookbehind: !0,
      },
      {
        pattern:
          /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
        inside: {
          unit: r,
          number: o,
          function: /[\w-]+(?=\()/,
          punctuation: /[(),]/,
        },
      },
    ],
    entity: /\\[\da-f]{1,8}/i,
    unit: r,
    number: o,
  });
})(D);
D.languages.javascript = D.languages.extend("clike", {
  "class-name": [
    D.languages.clike["class-name"],
    {
      pattern:
        /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
      lookbehind: !0,
    },
  ],
  keyword: [
    { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
    {
      pattern:
        /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
      lookbehind: !0,
    },
  ],
  function:
    /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  number: {
    pattern: RegExp(
      /(^|[^\w$])/.source +
        "(?:" +
        (/NaN|Infinity/.source +
          "|" +
          /0[bB][01]+(?:_[01]+)*n?/.source +
          "|" +
          /0[oO][0-7]+(?:_[0-7]+)*n?/.source +
          "|" +
          /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
          "|" +
          /\d+(?:_\d+)*n/.source +
          "|" +
          /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/
            .source) +
        ")" +
        /(?![\w$])/.source
    ),
    lookbehind: !0,
  },
  operator:
    /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
});
D.languages.javascript["class-name"][0].pattern =
  /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
D.languages.insertBefore("javascript", "keyword", {
  regex: {
    pattern:
      /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
    lookbehind: !0,
    greedy: !0,
    inside: {
      "regex-source": {
        pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
        lookbehind: !0,
        alias: "language-regex",
        inside: D.languages.regex,
      },
      "regex-delimiter": /^\/|\/$/,
      "regex-flags": /^[a-z]+$/,
    },
  },
  "function-variable": {
    pattern:
      /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
    alias: "function",
  },
  parameter: [
    {
      pattern:
        /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
      lookbehind: !0,
      inside: D.languages.javascript,
    },
    {
      pattern:
        /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
      lookbehind: !0,
      inside: D.languages.javascript,
    },
    {
      pattern:
        /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
      lookbehind: !0,
      inside: D.languages.javascript,
    },
    {
      pattern:
        /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
      lookbehind: !0,
      inside: D.languages.javascript,
    },
  ],
  constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
});
D.languages.insertBefore("javascript", "string", {
  hashbang: { pattern: /^#!.*/, greedy: !0, alias: "comment" },
  "template-string": {
    pattern:
      /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
    greedy: !0,
    inside: {
      "template-punctuation": { pattern: /^`|`$/, alias: "string" },
      interpolation: {
        pattern:
          /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
        lookbehind: !0,
        inside: {
          "interpolation-punctuation": {
            pattern: /^\$\{|\}$/,
            alias: "punctuation",
          },
          rest: D.languages.javascript,
        },
      },
      string: /[\s\S]+/,
    },
  },
  "string-property": {
    pattern:
      /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
    lookbehind: !0,
    greedy: !0,
    alias: "property",
  },
});
D.languages.insertBefore("javascript", "operator", {
  "literal-property": {
    pattern:
      /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
    lookbehind: !0,
    alias: "property",
  },
});
D.languages.markup &&
  (D.languages.markup.tag.addInlined("script", "javascript"),
  D.languages.markup.tag.addAttribute(
    /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/
      .source,
    "javascript"
  ));
D.languages.js = D.languages.javascript;
(function (e) {
  var t = /#(?!\{).+/,
    n = { pattern: /#\{[^}]+\}/, alias: "variable" };
  (e.languages.coffeescript = e.languages.extend("javascript", {
    comment: t,
    string: [
      { pattern: /'(?:\\[\s\S]|[^\\'])*'/, greedy: !0 },
      {
        pattern: /"(?:\\[\s\S]|[^\\"])*"/,
        greedy: !0,
        inside: { interpolation: n },
      },
    ],
    keyword:
      /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
    "class-member": { pattern: /@(?!\d)\w+/, alias: "variable" },
  })),
    e.languages.insertBefore("coffeescript", "comment", {
      "multiline-comment": { pattern: /###[\s\S]+?###/, alias: "comment" },
      "block-regex": {
        pattern: /\/{3}[\s\S]*?\/{3}/,
        alias: "regex",
        inside: { comment: t, interpolation: n },
      },
    }),
    e.languages.insertBefore("coffeescript", "string", {
      "inline-javascript": {
        pattern: /`(?:\\[\s\S]|[^\\`])*`/,
        inside: {
          delimiter: { pattern: /^`|`$/, alias: "punctuation" },
          script: {
            pattern: /[\s\S]+/,
            alias: "language-javascript",
            inside: e.languages.javascript,
          },
        },
      },
      "multiline-string": [
        { pattern: /'''[\s\S]*?'''/, greedy: !0, alias: "string" },
        {
          pattern: /"""[\s\S]*?"""/,
          greedy: !0,
          alias: "string",
          inside: { interpolation: n },
        },
      ],
    }),
    e.languages.insertBefore("coffeescript", "keyword", {
      property: /(?!\d)\w+(?=\s*:(?!:))/,
    }),
    delete e.languages.coffeescript["template-string"],
    (e.languages.coffee = e.languages.coffeescript);
})(D);
(function (e) {
  var t = /[*&][^\s[\]{},]+/,
    n =
      /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
    r =
      "(?:" +
      n.source +
      "(?:[ 	]+" +
      t.source +
      ")?|" +
      t.source +
      "(?:[ 	]+" +
      n.source +
      ")?)",
    o =
      /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(
        /<PLAIN>/g,
        function () {
          return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/
            .source;
        }
      ),
    i = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
  function l(u, a) {
    a = (a || "").replace(/m/g, "") + "m";
    var c =
      /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source
        .replace(/<<prop>>/g, function () {
          return r;
        })
        .replace(/<<value>>/g, function () {
          return u;
        });
    return RegExp(c, a);
  }
  (e.languages.yaml = {
    scalar: {
      pattern: RegExp(
        /([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(
          /<<prop>>/g,
          function () {
            return r;
          }
        )
      ),
      lookbehind: !0,
      alias: "string",
    },
    comment: /#.*/,
    key: {
      pattern: RegExp(
        /((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source
          .replace(/<<prop>>/g, function () {
            return r;
          })
          .replace(/<<key>>/g, function () {
            return "(?:" + o + "|" + i + ")";
          })
      ),
      lookbehind: !0,
      greedy: !0,
      alias: "atrule",
    },
    directive: { pattern: /(^[ \t]*)%.+/m, lookbehind: !0, alias: "important" },
    datetime: {
      pattern: l(
        /\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/
          .source
      ),
      lookbehind: !0,
      alias: "number",
    },
    boolean: {
      pattern: l(/false|true/.source, "i"),
      lookbehind: !0,
      alias: "important",
    },
    null: {
      pattern: l(/null|~/.source, "i"),
      lookbehind: !0,
      alias: "important",
    },
    string: { pattern: l(i), lookbehind: !0, greedy: !0 },
    number: {
      pattern: l(
        /[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/
          .source,
        "i"
      ),
      lookbehind: !0,
    },
    tag: n,
    important: t,
    punctuation: /---|[:[\]{}\-,|>?]|\.\.\./,
  }),
    (e.languages.yml = e.languages.yaml);
})(D);
(function (e) {
  var t = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
  function n(d) {
    return (
      (d = d.replace(/<inner>/g, function () {
        return t;
      })),
      RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + d + ")")
    );
  }
  var r = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,
    o = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(
      /__/g,
      function () {
        return r;
      }
    ),
    i = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/
      .source;
  (e.languages.markdown = e.languages.extend("markup", {})),
    e.languages.insertBefore("markdown", "prolog", {
      "front-matter-block": {
        pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
        lookbehind: !0,
        greedy: !0,
        inside: {
          punctuation: /^---|---$/,
          "front-matter": {
            pattern: /\S+(?:\s+\S+)*/,
            alias: ["yaml", "language-yaml"],
            inside: e.languages.yaml,
          },
        },
      },
      blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: "punctuation" },
      table: {
        pattern: RegExp("^" + o + i + "(?:" + o + ")*", "m"),
        inside: {
          "table-data-rows": {
            pattern: RegExp("^(" + o + i + ")(?:" + o + ")*$"),
            lookbehind: !0,
            inside: {
              "table-data": {
                pattern: RegExp(r),
                inside: e.languages.markdown,
              },
              punctuation: /\|/,
            },
          },
          "table-line": {
            pattern: RegExp("^(" + o + ")" + i + "$"),
            lookbehind: !0,
            inside: { punctuation: /\||:?-{3,}:?/ },
          },
          "table-header-row": {
            pattern: RegExp("^" + o + "$"),
            inside: {
              "table-header": {
                pattern: RegExp(r),
                alias: "important",
                inside: e.languages.markdown,
              },
              punctuation: /\|/,
            },
          },
        },
      },
      code: [
        {
          pattern:
            /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
          lookbehind: !0,
          alias: "keyword",
        },
        {
          pattern: /^```[\s\S]*?^```$/m,
          greedy: !0,
          inside: {
            "code-block": {
              pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
              lookbehind: !0,
            },
            "code-language": { pattern: /^(```).+/, lookbehind: !0 },
            punctuation: /```/,
          },
        },
      ],
      title: [
        {
          pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
          alias: "important",
          inside: { punctuation: /==+$|--+$/ },
        },
        {
          pattern: /(^\s*)#.+/m,
          lookbehind: !0,
          alias: "important",
          inside: { punctuation: /^#+|#+$/ },
        },
      ],
      hr: {
        pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
        lookbehind: !0,
        alias: "punctuation",
      },
      list: {
        pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
        lookbehind: !0,
        alias: "punctuation",
      },
      "url-reference": {
        pattern:
          /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
        inside: {
          variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
          string:
            /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
          punctuation: /^[\[\]!:]|[<>]/,
        },
        alias: "url",
      },
      bold: {
        pattern: n(
          /\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/
            .source
        ),
        lookbehind: !0,
        greedy: !0,
        inside: {
          content: {
            pattern: /(^..)[\s\S]+(?=..$)/,
            lookbehind: !0,
            inside: {},
          },
          punctuation: /\*\*|__/,
        },
      },
      italic: {
        pattern: n(
          /\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/
            .source
        ),
        lookbehind: !0,
        greedy: !0,
        inside: {
          content: { pattern: /(^.)[\s\S]+(?=.$)/, lookbehind: !0, inside: {} },
          punctuation: /[*_]/,
        },
      },
      strike: {
        pattern: n(/(~~?)(?:(?!~)<inner>)+\2/.source),
        lookbehind: !0,
        greedy: !0,
        inside: {
          content: {
            pattern: /(^~~?)[\s\S]+(?=\1$)/,
            lookbehind: !0,
            inside: {},
          },
          punctuation: /~~?/,
        },
      },
      "code-snippet": {
        pattern:
          /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
        lookbehind: !0,
        greedy: !0,
        alias: ["code", "keyword"],
      },
      url: {
        pattern: n(
          /!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/
            .source
        ),
        lookbehind: !0,
        greedy: !0,
        inside: {
          operator: /^!/,
          content: { pattern: /(^\[)[^\]]+(?=\])/, lookbehind: !0, inside: {} },
          variable: { pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/, lookbehind: !0 },
          url: { pattern: /(^\]\()[^\s)]+/, lookbehind: !0 },
          string: {
            pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
            lookbehind: !0,
          },
        },
      },
    }),
    ["url", "bold", "italic", "strike"].forEach(function (d) {
      ["url", "bold", "italic", "strike", "code-snippet"].forEach(function (s) {
        d !== s &&
          (e.languages.markdown[d].inside.content.inside[s] =
            e.languages.markdown[s]);
      });
    }),
    e.hooks.add("after-tokenize", function (d) {
      if (d.language !== "markdown" && d.language !== "md") return;
      function s(f) {
        if (!(!f || typeof f == "string"))
          for (var p = 0, v = f.length; p < v; p++) {
            var g = f[p];
            if (g.type !== "code") {
              s(g.content);
              continue;
            }
            var C = g.content[1],
              y = g.content[3];
            if (
              C &&
              y &&
              C.type === "code-language" &&
              y.type === "code-block" &&
              typeof C.content == "string"
            ) {
              var h = C.content
                .replace(/\b#/g, "sharp")
                .replace(/\b\+\+/g, "pp");
              h = (/[a-z][\w-]*/i.exec(h) || [""])[0].toLowerCase();
              var w = "language-" + h;
              y.alias
                ? typeof y.alias == "string"
                  ? (y.alias = [y.alias, w])
                  : y.alias.push(w)
                : (y.alias = [w]);
            }
          }
      }
      s(d.tokens);
    }),
    e.hooks.add("wrap", function (d) {
      if (d.type === "code-block") {
        for (var s = "", f = 0, p = d.classes.length; f < p; f++) {
          var v = d.classes[f],
            g = /language-(.+)/.exec(v);
          if (g) {
            s = g[1];
            break;
          }
        }
        var C = e.languages[s];
        if (C) d.content = e.highlight(c(d.content), C, s);
        else if (s && s !== "none" && e.plugins.autoloader) {
          var y =
            "md-" +
            new Date().valueOf() +
            "-" +
            Math.floor(Math.random() * 1e16);
          (d.attributes.id = y),
            e.plugins.autoloader.loadLanguages(s, function () {
              var h = document.getElementById(y);
              h &&
                (h.innerHTML = e.highlight(h.textContent, e.languages[s], s));
            });
        }
      }
    });
  var l = RegExp(e.languages.markup.tag.pattern.source, "gi"),
    u = { amp: "&", lt: "<", gt: ">", quot: '"' },
    a = String.fromCodePoint || String.fromCharCode;
  function c(d) {
    var s = d.replace(l, "");
    return (
      (s = s.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function (f, p) {
        if (((p = p.toLowerCase()), p[0] === "#")) {
          var v;
          return (
            p[1] === "x"
              ? (v = parseInt(p.slice(2), 16))
              : (v = Number(p.slice(1))),
            a(v)
          );
        } else {
          var g = u[p];
          return g || f;
        }
      })),
      s
    );
  }
  e.languages.md = e.languages.markdown;
})(D);
D.languages.graphql = {
  comment: /#.*/,
  description: {
    pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
    greedy: !0,
    alias: "string",
    inside: {
      "language-markdown": {
        pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
        lookbehind: !0,
        inside: D.languages.markdown,
      },
    },
  },
  string: {
    pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
    greedy: !0,
  },
  number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  boolean: /\b(?:false|true)\b/,
  variable: /\$[a-z_]\w*/i,
  directive: { pattern: /@[a-z_]\w*/i, alias: "function" },
  "attr-name": {
    pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
    greedy: !0,
  },
  "atom-input": { pattern: /\b[A-Z]\w*Input\b/, alias: "class-name" },
  scalar: /\b(?:Boolean|Float|ID|Int|String)\b/,
  constant: /\b[A-Z][A-Z_\d]*\b/,
  "class-name": {
    pattern:
      /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
    lookbehind: !0,
  },
  fragment: {
    pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
    lookbehind: !0,
    alias: "function",
  },
  "definition-mutation": {
    pattern: /(\bmutation\s+)[a-zA-Z_]\w*/,
    lookbehind: !0,
    alias: "function",
  },
  "definition-query": {
    pattern: /(\bquery\s+)[a-zA-Z_]\w*/,
    lookbehind: !0,
    alias: "function",
  },
  keyword:
    /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
  operator: /[!=|&]|\.{3}/,
  "property-query": /\w+(?=\s*\()/,
  object: /\w+(?=\s*\{)/,
  punctuation: /[!(){}\[\]:=,]/,
  property: /\w+/,
};
D.hooks.add("after-tokenize", function (t) {
  if (t.language !== "graphql") return;
  var n = t.tokens.filter(function (g) {
      return (
        typeof g != "string" && g.type !== "comment" && g.type !== "scalar"
      );
    }),
    r = 0;
  function o(g) {
    return n[r + g];
  }
  function i(g, C) {
    C = C || 0;
    for (var y = 0; y < g.length; y++) {
      var h = o(y + C);
      if (!h || h.type !== g[y]) return !1;
    }
    return !0;
  }
  function l(g, C) {
    for (var y = 1, h = r; h < n.length; h++) {
      var w = n[h],
        A = w.content;
      if (w.type === "punctuation" && typeof A == "string") {
        if (g.test(A)) y++;
        else if (C.test(A) && (y--, y === 0)) return h;
      }
    }
    return -1;
  }
  function u(g, C) {
    var y = g.alias;
    y ? Array.isArray(y) || (g.alias = y = [y]) : (g.alias = y = []), y.push(C);
  }
  for (; r < n.length; ) {
    var a = n[r++];
    if (a.type === "keyword" && a.content === "mutation") {
      var c = [];
      if (i(["definition-mutation", "punctuation"]) && o(1).content === "(") {
        r += 2;
        var d = l(/^\($/, /^\)$/);
        if (d === -1) continue;
        for (; r < d; r++) {
          var s = o(0);
          s.type === "variable" && (u(s, "variable-input"), c.push(s.content));
        }
        r = d + 1;
      }
      if (
        i(["punctuation", "property-query"]) &&
        o(0).content === "{" &&
        (r++, u(o(0), "property-mutation"), c.length > 0)
      ) {
        var f = l(/^\{$/, /^\}$/);
        if (f === -1) continue;
        for (var p = r; p < f; p++) {
          var v = n[p];
          v.type === "variable" &&
            c.indexOf(v.content) >= 0 &&
            u(v, "variable-input");
        }
      }
    }
  }
});
D.languages.sql = {
  comment: {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
    lookbehind: !0,
  },
  variable: [
    { pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/, greedy: !0 },
    /@[\w.$]+/,
  ],
  string: {
    pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
    greedy: !0,
    lookbehind: !0,
  },
  identifier: {
    pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
    greedy: !0,
    lookbehind: !0,
    inside: { punctuation: /^`|`$/ },
  },
  function:
    /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
  keyword:
    /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
  boolean: /\b(?:FALSE|NULL|TRUE)\b/i,
  number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
  operator:
    /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
  punctuation: /[;[\]()`,.]/,
};
(function (e) {
  var t = e.languages.javascript["template-string"],
    n = t.pattern.source,
    r = t.inside.interpolation,
    o = r.inside["interpolation-punctuation"],
    i = r.pattern.source;
  function l(p, v) {
    if (e.languages[p])
      return {
        pattern: RegExp("((?:" + v + ")\\s*)" + n),
        lookbehind: !0,
        greedy: !0,
        inside: {
          "template-punctuation": { pattern: /^`|`$/, alias: "string" },
          "embedded-code": { pattern: /[\s\S]+/, alias: p },
        },
      };
  }
  e.languages.javascript["template-string"] = [
    l(
      "css",
      /\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/
        .source
    ),
    l("html", /\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),
    l("svg", /\bsvg/.source),
    l("markdown", /\b(?:markdown|md)/.source),
    l("graphql", /\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),
    l("sql", /\bsql/.source),
    t,
  ].filter(Boolean);
  function u(p, v) {
    return "___" + v.toUpperCase() + "_" + p + "___";
  }
  function a(p, v, g) {
    var C = { code: p, grammar: v, language: g };
    return (
      e.hooks.run("before-tokenize", C),
      (C.tokens = e.tokenize(C.code, C.grammar)),
      e.hooks.run("after-tokenize", C),
      C.tokens
    );
  }
  function c(p) {
    var v = {};
    v["interpolation-punctuation"] = o;
    var g = e.tokenize(p, v);
    if (g.length === 3) {
      var C = [1, 1];
      C.push.apply(C, a(g[1], e.languages.javascript, "javascript")),
        g.splice.apply(g, C);
    }
    return new e.Token("interpolation", g, r.alias, p);
  }
  function d(p, v, g) {
    var C = e.tokenize(p, {
        interpolation: { pattern: RegExp(i), lookbehind: !0 },
      }),
      y = 0,
      h = {},
      w = C.map(function (k) {
        if (typeof k == "string") return k;
        for (var O = k.content, $; p.indexOf(($ = u(y++, g))) !== -1; );
        return (h[$] = O), $;
      }).join(""),
      A = a(w, v, g),
      F = Object.keys(h);
    y = 0;
    function N(k) {
      for (var O = 0; O < k.length; O++) {
        if (y >= F.length) return;
        var $ = k[O];
        if (typeof $ == "string" || typeof $.content == "string") {
          var M = F[y],
            V = typeof $ == "string" ? $ : $.content,
            T = V.indexOf(M);
          if (T !== -1) {
            ++y;
            var P = V.substring(0, T),
              G = c(h[M]),
              H = V.substring(T + M.length),
              W = [];
            if ((P && W.push(P), W.push(G), H)) {
              var Z = [H];
              N(Z), W.push.apply(W, Z);
            }
            typeof $ == "string"
              ? (k.splice.apply(k, [O, 1].concat(W)), (O += W.length - 1))
              : ($.content = W);
          }
        } else {
          var R = $.content;
          Array.isArray(R) ? N(R) : N([R]);
        }
      }
    }
    return N(A), new e.Token(g, A, "language-" + g, p);
  }
  var s = { javascript: !0, js: !0, typescript: !0, ts: !0, jsx: !0, tsx: !0 };
  e.hooks.add("after-tokenize", function (p) {
    if (!(p.language in s)) return;
    function v(g) {
      for (var C = 0, y = g.length; C < y; C++) {
        var h = g[C];
        if (typeof h != "string") {
          var w = h.content;
          if (!Array.isArray(w)) {
            typeof w != "string" && v([w]);
            continue;
          }
          if (h.type === "template-string") {
            var A = w[1];
            if (
              w.length === 3 &&
              typeof A != "string" &&
              A.type === "embedded-code"
            ) {
              var F = f(A),
                N = A.alias,
                k = Array.isArray(N) ? N[0] : N,
                O = e.languages[k];
              if (!O) continue;
              w[1] = d(F, O, k);
            }
          } else v(w);
        }
      }
    }
    v(p.tokens);
  });
  function f(p) {
    return typeof p == "string"
      ? p
      : Array.isArray(p)
      ? p.map(f).join("")
      : f(p.content);
  }
})(D);
(function (e) {
  (e.languages.typescript = e.languages.extend("javascript", {
    "class-name": {
      pattern:
        /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
      lookbehind: !0,
      greedy: !0,
      inside: null,
    },
    builtin:
      /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/,
  })),
    e.languages.typescript.keyword.push(
      /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
      /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
      /\btype\b(?=\s*(?:[\{*]|$))/
    ),
    delete e.languages.typescript.parameter,
    delete e.languages.typescript["literal-property"];
  var t = e.languages.extend("typescript", {});
  delete t["class-name"],
    (e.languages.typescript["class-name"].inside = t),
    e.languages.insertBefore("typescript", "function", {
      decorator: {
        pattern: /@[$\w\xA0-\uFFFF]+/,
        inside: {
          at: { pattern: /^@/, alias: "operator" },
          function: /^[\s\S]+/,
        },
      },
      "generic-function": {
        pattern:
          /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
        greedy: !0,
        inside: {
          function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
          generic: { pattern: /<[\s\S]+/, alias: "class-name", inside: t },
        },
      },
    }),
    (e.languages.ts = e.languages.typescript);
})(D);
(function (e) {
  e.languages.insertBefore("javascript", "function-variable", {
    "method-variable": {
      pattern: RegExp(
        "(\\.\\s*)" + e.languages.javascript["function-variable"].pattern.source
      ),
      lookbehind: !0,
      alias: ["function-variable", "method", "function", "property-access"],
    },
  }),
    e.languages.insertBefore("javascript", "function", {
      method: {
        pattern: RegExp("(\\.\\s*)" + e.languages.javascript.function.source),
        lookbehind: !0,
        alias: ["function", "property-access"],
      },
    }),
    e.languages.insertBefore("javascript", "constant", {
      "known-class-name": [
        {
          pattern:
            /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
          alias: "class-name",
        },
        { pattern: /\b(?:[A-Z]\w*)Error\b/, alias: "class-name" },
      ],
    });
  function t(u, a) {
    return RegExp(
      u.replace(/<ID>/g, function () {
        return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source;
      }),
      a
    );
  }
  e.languages.insertBefore("javascript", "keyword", {
    imports: {
      pattern: t(
        /(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/
          .source
      ),
      lookbehind: !0,
      inside: e.languages.javascript,
    },
    exports: {
      pattern: t(
        /(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/
          .source
      ),
      lookbehind: !0,
      inside: e.languages.javascript,
    },
  }),
    e.languages.javascript.keyword.unshift(
      { pattern: /\b(?:as|default|export|from|import)\b/, alias: "module" },
      {
        pattern:
          /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
        alias: "control-flow",
      },
      { pattern: /\bnull\b/, alias: ["null", "nil"] },
      { pattern: /\bundefined\b/, alias: "nil" }
    ),
    e.languages.insertBefore("javascript", "operator", {
      spread: { pattern: /\.{3}/, alias: "operator" },
      arrow: { pattern: /=>/, alias: "operator" },
    }),
    e.languages.insertBefore("javascript", "punctuation", {
      "property-access": { pattern: t(/(\.\s*)#?<ID>/.source), lookbehind: !0 },
      "maybe-class-name": {
        pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
        lookbehind: !0,
      },
      dom: {
        pattern:
          /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
        alias: "variable",
      },
      console: { pattern: /\bconsole(?=\s*\.)/, alias: "class-name" },
    });
  for (
    var n = [
        "function",
        "function-variable",
        "method",
        "method-variable",
        "property-access",
      ],
      r = 0;
    r < n.length;
    r++
  ) {
    var o = n[r],
      i = e.languages.javascript[o];
    e.util.type(i) === "RegExp" &&
      (i = e.languages.javascript[o] = { pattern: i });
    var l = i.inside || {};
    (i.inside = l), (l["maybe-class-name"] = /^[A-Z][\s\S]*/);
  }
})(D);
(function (e) {
  var t = e.util.clone(e.languages.javascript),
    n = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,
    r = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,
    o = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
  function i(a, c) {
    return (
      (a = a
        .replace(/<S>/g, function () {
          return n;
        })
        .replace(/<BRACES>/g, function () {
          return r;
        })
        .replace(/<SPREAD>/g, function () {
          return o;
        })),
      RegExp(a, c)
    );
  }
  (o = i(o).source),
    (e.languages.jsx = e.languages.extend("markup", t)),
    (e.languages.jsx.tag.pattern = i(
      /<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/
        .source
    )),
    (e.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/),
    (e.languages.jsx.tag.inside["attr-value"].pattern =
      /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/),
    (e.languages.jsx.tag.inside.tag.inside["class-name"] =
      /^[A-Z]\w*(?:\.[A-Z]\w*)*$/),
    (e.languages.jsx.tag.inside.comment = t.comment),
    e.languages.insertBefore(
      "inside",
      "attr-name",
      { spread: { pattern: i(/<SPREAD>/.source), inside: e.languages.jsx } },
      e.languages.jsx.tag
    ),
    e.languages.insertBefore(
      "inside",
      "special-attr",
      {
        script: {
          pattern: i(/=<BRACES>/.source),
          alias: "language-javascript",
          inside: {
            "script-punctuation": { pattern: /^=(?=\{)/, alias: "punctuation" },
            rest: e.languages.jsx,
          },
        },
      },
      e.languages.jsx.tag
    );
  var l = function (a) {
      return a
        ? typeof a == "string"
          ? a
          : typeof a.content == "string"
          ? a.content
          : a.content.map(l).join("")
        : "";
    },
    u = function (a) {
      for (var c = [], d = 0; d < a.length; d++) {
        var s = a[d],
          f = !1;
        if (
          (typeof s != "string" &&
            (s.type === "tag" && s.content[0] && s.content[0].type === "tag"
              ? s.content[0].content[0].content === "</"
                ? c.length > 0 &&
                  c[c.length - 1].tagName === l(s.content[0].content[1]) &&
                  c.pop()
                : s.content[s.content.length - 1].content === "/>" ||
                  c.push({
                    tagName: l(s.content[0].content[1]),
                    openedBraces: 0,
                  })
              : c.length > 0 && s.type === "punctuation" && s.content === "{"
              ? c[c.length - 1].openedBraces++
              : c.length > 0 &&
                c[c.length - 1].openedBraces > 0 &&
                s.type === "punctuation" &&
                s.content === "}"
              ? c[c.length - 1].openedBraces--
              : (f = !0)),
          (f || typeof s == "string") &&
            c.length > 0 &&
            c[c.length - 1].openedBraces === 0)
        ) {
          var p = l(s);
          d < a.length - 1 &&
            (typeof a[d + 1] == "string" || a[d + 1].type === "plain-text") &&
            ((p += l(a[d + 1])), a.splice(d + 1, 1)),
            d > 0 &&
              (typeof a[d - 1] == "string" || a[d - 1].type === "plain-text") &&
              ((p = l(a[d - 1]) + p), a.splice(d - 1, 1), d--),
            (a[d] = new e.Token("plain-text", p, null, p));
        }
        s.content && typeof s.content != "string" && u(s.content);
      }
    };
  e.hooks.add("after-tokenize", function (a) {
    (a.language !== "jsx" && a.language !== "tsx") || u(a.tokens);
  });
})(D);
(function (e) {
  e.languages.diff = {
    coord: [/^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d.*$/m],
  };
  var t = {
    "deleted-sign": "-",
    "deleted-arrow": "<",
    "inserted-sign": "+",
    "inserted-arrow": ">",
    unchanged: " ",
    diff: "!",
  };
  Object.keys(t).forEach(function (n) {
    var r = t[n],
      o = [];
    /^\w+$/.test(n) || o.push(/\w+/.exec(n)[0]),
      n === "diff" && o.push("bold"),
      (e.languages.diff[n] = {
        pattern: RegExp(
          "^(?:[" +
            r +
            `].*(?:\r
?|
|(?![\\s\\S])))+`,
          "m"
        ),
        alias: o,
        inside: {
          line: { pattern: /(.)(?=[\s\S]).*(?:\r\n?|\n)?/, lookbehind: !0 },
          prefix: { pattern: /[\s\S]/, alias: /\w+/.exec(n)[0] },
        },
      });
  }),
    Object.defineProperty(e.languages.diff, "PREFIXES", { value: t });
})(D);
D.languages.git = {
  comment: /^#.*/m,
  deleted: /^[-–].*/m,
  inserted: /^\+.*/m,
  string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
  command: { pattern: /^.*\$ git .*$/m, inside: { parameter: /\s--?\w+/ } },
  coord: /^@@.*@@$/m,
  "commit-sha1": /^commit \w{40}$/m,
};
D.languages.go = D.languages.extend("clike", {
  string: {
    pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,
    lookbehind: !0,
    greedy: !0,
  },
  keyword:
    /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
  boolean: /\b(?:_|false|iota|nil|true)\b/,
  number: [
    /\b0(?:b[01_]+|o[0-7_]+)i?\b/i,
    /\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,
    /(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i,
  ],
  operator:
    /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
  builtin:
    /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/,
});
D.languages.insertBefore("go", "string", {
  char: { pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/, greedy: !0 },
});
delete D.languages.go["class-name"];
(function (e) {
  function t(n, r) {
    return "___" + n.toUpperCase() + r + "___";
  }
  Object.defineProperties((e.languages["markup-templating"] = {}), {
    buildPlaceholders: {
      value: function (n, r, o, i) {
        if (n.language === r) {
          var l = (n.tokenStack = []);
          (n.code = n.code.replace(o, function (u) {
            if (typeof i == "function" && !i(u)) return u;
            for (var a = l.length, c; n.code.indexOf((c = t(r, a))) !== -1; )
              ++a;
            return (l[a] = u), c;
          })),
            (n.grammar = e.languages.markup);
        }
      },
    },
    tokenizePlaceholders: {
      value: function (n, r) {
        if (n.language !== r || !n.tokenStack) return;
        n.grammar = e.languages[r];
        var o = 0,
          i = Object.keys(n.tokenStack);
        function l(u) {
          for (var a = 0; a < u.length && !(o >= i.length); a++) {
            var c = u[a];
            if (
              typeof c == "string" ||
              (c.content && typeof c.content == "string")
            ) {
              var d = i[o],
                s = n.tokenStack[d],
                f = typeof c == "string" ? c : c.content,
                p = t(r, d),
                v = f.indexOf(p);
              if (v > -1) {
                ++o;
                var g = f.substring(0, v),
                  C = new e.Token(
                    r,
                    e.tokenize(s, n.grammar),
                    "language-" + r,
                    s
                  ),
                  y = f.substring(v + p.length),
                  h = [];
                g && h.push.apply(h, l([g])),
                  h.push(C),
                  y && h.push.apply(h, l([y])),
                  typeof c == "string"
                    ? u.splice.apply(u, [a, 1].concat(h))
                    : (c.content = h);
              }
            } else c.content && l(c.content);
          }
          return u;
        }
        l(n.tokens);
      },
    },
  });
})(D);
(function (e) {
  (e.languages.handlebars = {
    comment: /\{\{![\s\S]*?\}\}/,
    delimiter: { pattern: /^\{\{\{?|\}\}\}?$/, alias: "punctuation" },
    string: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
    number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,
    boolean: /\b(?:false|true)\b/,
    block: {
      pattern: /^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/,
      lookbehind: !0,
      alias: "keyword",
    },
    brackets: {
      pattern: /\[[^\]]+\]/,
      inside: { punctuation: /\[|\]/, variable: /[\s\S]+/ },
    },
    punctuation: /[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,
    variable: /[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/,
  }),
    e.hooks.add("before-tokenize", function (t) {
      var n = /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g;
      e.languages["markup-templating"].buildPlaceholders(t, "handlebars", n);
    }),
    e.hooks.add("after-tokenize", function (t) {
      e.languages["markup-templating"].tokenizePlaceholders(t, "handlebars");
    }),
    (e.languages.hbs = e.languages.handlebars);
})(D);
D.languages.json = {
  property: {
    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
    lookbehind: !0,
    greedy: !0,
  },
  string: {
    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
    lookbehind: !0,
    greedy: !0,
  },
  comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 },
  number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  punctuation: /[{}[\],]/,
  operator: /:/,
  boolean: /\b(?:false|true)\b/,
  null: { pattern: /\bnull\b/, alias: "keyword" },
};
D.languages.webmanifest = D.languages.json;
D.languages.less = D.languages.extend("css", {
  comment: [/\/\*[\s\S]*?\*\//, { pattern: /(^|[^\\])\/\/.*/, lookbehind: !0 }],
  atrule: {
    pattern:
      /@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,
    inside: { punctuation: /[:()]/ },
  },
  selector: {
    pattern:
      /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,
    inside: { variable: /@+[\w-]+/ },
  },
  property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/,
  operator: /[+\-*\/]/,
});
D.languages.insertBefore("less", "property", {
  variable: [
    { pattern: /@[\w-]+\s*:/, inside: { punctuation: /:/ } },
    /@@?[\w-]+/,
  ],
  "mixin-usage": {
    pattern: /([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,
    lookbehind: !0,
    alias: "function",
  },
});
D.languages.makefile = {
  comment: {
    pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,
    lookbehind: !0,
  },
  string: {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: !0,
  },
  "builtin-target": {
    pattern: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
    alias: "builtin",
  },
  target: {
    pattern: /^(?:[^:=\s]|[ \t]+(?![\s:]))+(?=\s*:(?!=))/m,
    alias: "symbol",
    inside: { variable: /\$+(?:(?!\$)[^(){}:#=\s]+|(?=[({]))/ },
  },
  variable: /\$+(?:(?!\$)[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
  keyword:
    /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,
  function: {
    pattern:
      /(\()(?:abspath|addsuffix|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:list|s)?)(?=[ \t])/,
    lookbehind: !0,
  },
  operator: /(?:::|[?:+!])?=|[|@]/,
  punctuation: /[:;(){}]/,
};
D.languages.objectivec = D.languages.extend("c", {
  string: { pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/, greedy: !0 },
  keyword:
    /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
  operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/,
});
delete D.languages.objectivec["class-name"];
D.languages.objc = D.languages.objectivec;
D.languages.ocaml = {
  comment: { pattern: /\(\*[\s\S]*?\*\)/, greedy: !0 },
  char: { pattern: /'(?:[^\\\r\n']|\\(?:.|[ox]?[0-9a-f]{1,3}))'/i, greedy: !0 },
  string: [
    { pattern: /"(?:\\(?:[\s\S]|\r\n)|[^\\\r\n"])*"/, greedy: !0 },
    { pattern: /\{([a-z_]*)\|[\s\S]*?\|\1\}/, greedy: !0 },
  ],
  number: [
    /\b(?:0b[01][01_]*|0o[0-7][0-7_]*)\b/i,
    /\b0x[a-f0-9][a-f0-9_]*(?:\.[a-f0-9_]*)?(?:p[+-]?\d[\d_]*)?(?!\w)/i,
    /\b\d[\d_]*(?:\.[\d_]*)?(?:e[+-]?\d[\d_]*)?(?!\w)/i,
  ],
  directive: { pattern: /\B#\w+/, alias: "property" },
  label: { pattern: /\B~\w+/, alias: "property" },
  "type-variable": { pattern: /\B'\w+/, alias: "function" },
  variant: { pattern: /`\w+/, alias: "symbol" },
  keyword:
    /\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|nonrec|object|of|open|private|rec|sig|struct|then|to|try|type|val|value|virtual|when|where|while|with)\b/,
  boolean: /\b(?:false|true)\b/,
  "operator-like-punctuation": {
    pattern: /\[[<>|]|[>|]\]|\{<|>\}/,
    alias: "punctuation",
  },
  operator:
    /\.[.~]|:[=>]|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lsl|lsr|lxor|mod|or)\b/,
  punctuation: /;;|::|[(){}\[\].,:;#]|\b_\b/,
};
D.languages.python = {
  comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0, greedy: !0 },
  "string-interpolation": {
    pattern:
      /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
    greedy: !0,
    inside: {
      interpolation: {
        pattern:
          /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
        lookbehind: !0,
        inside: {
          "format-spec": { pattern: /(:)[^:(){}]+(?=\}$)/, lookbehind: !0 },
          "conversion-option": {
            pattern: /![sra](?=[:}]$)/,
            alias: "punctuation",
          },
          rest: null,
        },
      },
      string: /[\s\S]+/,
    },
  },
  "triple-quoted-string": {
    pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
    greedy: !0,
    alias: "string",
  },
  string: {
    pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
    greedy: !0,
  },
  function: {
    pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
    lookbehind: !0,
  },
  "class-name": { pattern: /(\bclass\s+)\w+/i, lookbehind: !0 },
  decorator: {
    pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
    lookbehind: !0,
    alias: ["annotation", "punctuation"],
    inside: { punctuation: /\./ },
  },
  keyword:
    /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
  builtin:
    /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
  boolean: /\b(?:False|None|True)\b/,
  number:
    /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
  operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
  punctuation: /[{}[\];(),.:]/,
};
D.languages.python["string-interpolation"].inside.interpolation.inside.rest =
  D.languages.python;
D.languages.py = D.languages.python;
D.languages.reason = D.languages.extend("clike", {
  string: { pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/, greedy: !0 },
  "class-name": /\b[A-Z]\w*/,
  keyword:
    /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
  operator:
    /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/,
});
D.languages.insertBefore("reason", "class-name", {
  char: {
    pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
    greedy: !0,
  },
  constructor: /\b[A-Z]\w*\b(?!\s*\.)/,
  label: { pattern: /\b[a-z]\w*(?=::)/, alias: "symbol" },
});
delete D.languages.reason.function;
(function (e) {
  (e.languages.sass = e.languages.extend("css", {
    comment: {
      pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,
      lookbehind: !0,
      greedy: !0,
    },
  })),
    e.languages.insertBefore("sass", "atrule", {
      "atrule-line": {
        pattern: /^(?:[ \t]*)[@+=].+/m,
        greedy: !0,
        inside: { atrule: /(?:@[\w-]+|[+=])/ },
      },
    }),
    delete e.languages.sass.atrule;
  var t = /\$[-\w]+|#\{\$[-\w]+\}/,
    n = [
      /[+*\/%]|[=!]=|<=?|>=?|\b(?:and|not|or)\b/,
      { pattern: /(\s)-(?=\s)/, lookbehind: !0 },
    ];
  e.languages.insertBefore("sass", "property", {
    "variable-line": {
      pattern: /^[ \t]*\$.+/m,
      greedy: !0,
      inside: { punctuation: /:/, variable: t, operator: n },
    },
    "property-line": {
      pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,
      greedy: !0,
      inside: {
        property: [
          /[^:\s]+(?=\s*:)/,
          { pattern: /(:)[^:\s]+/, lookbehind: !0 },
        ],
        punctuation: /:/,
        variable: t,
        operator: n,
        important: e.languages.sass.important,
      },
    },
  }),
    delete e.languages.sass.property,
    delete e.languages.sass.important,
    e.languages.insertBefore("sass", "punctuation", {
      selector: {
        pattern:
          /^([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/m,
        lookbehind: !0,
        greedy: !0,
      },
    });
})(D);
D.languages.scss = D.languages.extend("css", {
  comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/, lookbehind: !0 },
  atrule: {
    pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
    inside: { rule: /@[\w-]+/ },
  },
  url: /(?:[-a-z]+-)?url(?=\()/i,
  selector: {
    pattern:
      /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,
    inside: {
      parent: { pattern: /&/, alias: "important" },
      placeholder: /%[-\w]+/,
      variable: /\$[-\w]+|#\{\$[-\w]+\}/,
    },
  },
  property: {
    pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
    inside: { variable: /\$[-\w]+|#\{\$[-\w]+\}/ },
  },
});
D.languages.insertBefore("scss", "atrule", {
  keyword: [
    /@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,
    { pattern: /( )(?:from|through)(?= )/, lookbehind: !0 },
  ],
});
D.languages.insertBefore("scss", "important", {
  variable: /\$[-\w]+|#\{\$[-\w]+\}/,
});
D.languages.insertBefore("scss", "function", {
  "module-modifier": {
    pattern: /\b(?:as|hide|show|with)\b/i,
    alias: "keyword",
  },
  placeholder: { pattern: /%[-\w]+/, alias: "selector" },
  statement: { pattern: /\B!(?:default|optional)\b/i, alias: "keyword" },
  boolean: /\b(?:false|true)\b/,
  null: { pattern: /\bnull\b/, alias: "keyword" },
  operator: {
    pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,
    lookbehind: !0,
  },
});
D.languages.scss.atrule.inside.rest = D.languages.scss;
(function (e) {
  var t = { pattern: /(\b\d+)(?:%|[a-z]+)/, lookbehind: !0 },
    n = { pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/, lookbehind: !0 },
    r = {
      comment: {
        pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
        lookbehind: !0,
      },
      url: { pattern: /\burl\((["']?).*?\1\)/i, greedy: !0 },
      string: {
        pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
        greedy: !0,
      },
      interpolation: null,
      func: null,
      important: /\B!(?:important|optional)\b/i,
      keyword: {
        pattern: /(^|\s+)(?:(?:else|for|if|return|unless)(?=\s|$)|@[\w-]+)/,
        lookbehind: !0,
      },
      hexcode: /#[\da-f]{3,6}/i,
      color: [
        /\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i,
        {
          pattern:
            /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
          inside: {
            unit: t,
            number: n,
            function: /[\w-]+(?=\()/,
            punctuation: /[(),]/,
          },
        },
      ],
      entity: /\\[\da-f]{1,8}/i,
      unit: t,
      boolean: /\b(?:false|true)\b/,
      operator: [
        /~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.{2,3}|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/,
      ],
      number: n,
      punctuation: /[{}()\[\];:,]/,
    };
  (r.interpolation = {
    pattern: /\{[^\r\n}:]+\}/,
    alias: "variable",
    inside: {
      delimiter: { pattern: /^\{|\}$/, alias: "punctuation" },
      rest: r,
    },
  }),
    (r.func = {
      pattern: /[\w-]+\([^)]*\).*/,
      inside: { function: /^[^(]+/, rest: r },
    }),
    (e.languages.stylus = {
      "atrule-declaration": {
        pattern: /(^[ \t]*)@.+/m,
        lookbehind: !0,
        inside: { atrule: /^@[\w-]+/, rest: r },
      },
      "variable-declaration": {
        pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:\{[^{}]*\}|\S.*|$)/m,
        lookbehind: !0,
        inside: { variable: /^\S+/, rest: r },
      },
      statement: {
        pattern: /(^[ \t]*)(?:else|for|if|return|unless)[ \t].+/m,
        lookbehind: !0,
        inside: { keyword: /^\S+/, rest: r },
      },
      "property-declaration": {
        pattern:
          /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)(?!\s)[^{\r\n]*(?:;|[^{\r\n,]$(?!(?:\r?\n|\r)(?:\{|\2[ \t])))/m,
        lookbehind: !0,
        inside: {
          property: {
            pattern: /^[^\s:]+/,
            inside: { interpolation: r.interpolation },
          },
          rest: r,
        },
      },
      selector: {
        pattern:
          /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t])))/m,
        lookbehind: !0,
        inside: {
          interpolation: r.interpolation,
          comment: r.comment,
          punctuation: /[{},]/,
        },
      },
      func: r.func,
      string: r.string,
      comment: {
        pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
        lookbehind: !0,
        greedy: !0,
      },
      interpolation: r.interpolation,
      punctuation: /[{}()\[\];:.]/,
    });
})(D);
(function (e) {
  var t = e.util.clone(e.languages.typescript);
  (e.languages.tsx = e.languages.extend("jsx", t)),
    delete e.languages.tsx.parameter,
    delete e.languages.tsx["literal-property"];
  var n = e.languages.tsx.tag;
  (n.pattern = RegExp(
    /(^|[^\w$]|(?=<\/))/.source + "(?:" + n.pattern.source + ")",
    n.pattern.flags
  )),
    (n.lookbehind = !0);
})(D);
D.languages.wasm = {
  comment: [/\(;[\s\S]*?;\)/, { pattern: /;;.*/, greedy: !0 }],
  string: { pattern: /"(?:\\[\s\S]|[^"\\])*"/, greedy: !0 },
  keyword: [
    { pattern: /\b(?:align|offset)=/, inside: { operator: /=/ } },
    {
      pattern:
        /\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|neg?|nearest|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|sqrt|store(?:8|16|32)?|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,
      inside: { punctuation: /\./ },
    },
    /\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/,
  ],
  variable: /\$[\w!#$%&'*+\-./:<=>?@\\^`|~]+/,
  number:
    /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
  punctuation: /[()]/,
};
var ZE = {
  plain: { backgroundColor: "#2a2734", color: "#9a86fd" },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
      style: { color: "#6c6783" },
    },
    { types: ["namespace"], style: { opacity: 0.7 } },
    { types: ["tag", "operator", "number"], style: { color: "#e09142" } },
    { types: ["property", "function"], style: { color: "#9a86fd" } },
    { types: ["tag-id", "selector", "atrule-id"], style: { color: "#eeebff" } },
    { types: ["attr-name"], style: { color: "#c4b9fe" } },
    {
      types: [
        "boolean",
        "string",
        "entity",
        "url",
        "attr-value",
        "keyword",
        "control",
        "directive",
        "unit",
        "statement",
        "regex",
        "atrule",
        "placeholder",
        "variable",
      ],
      style: { color: "#ffcc99" },
    },
    { types: ["deleted"], style: { textDecorationLine: "line-through" } },
    { types: ["inserted"], style: { textDecorationLine: "underline" } },
    { types: ["italic"], style: { fontStyle: "italic" } },
    { types: ["important", "bold"], style: { fontWeight: "bold" } },
    { types: ["important"], style: { color: "#c4b9fe" } },
  ],
};
const QE = ZE;
var Xd = { Prism: D, theme: QE };
function Pr(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Qt() {
  return (
    (Qt =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    Qt.apply(this, arguments)
  );
}
var qE = /\r\n|\r|\n/,
  Zd = function (e) {
    e.length === 0
      ? e.push({
          types: ["plain"],
          content: `
`,
          empty: !0,
        })
      : e.length === 1 &&
        e[0].content === "" &&
        ((e[0].content = `
`),
        (e[0].empty = !0));
  },
  Qd = function (e, t) {
    var n = e.length;
    return n > 0 && e[n - 1] === t ? e : e.concat(t);
  },
  JE = function (e) {
    for (
      var t = [[]],
        n = [e],
        r = [0],
        o = [e.length],
        i = 0,
        l = 0,
        u = [],
        a = [u];
      l > -1;

    ) {
      for (; (i = r[l]++) < o[l]; ) {
        var c = void 0,
          d = t[l],
          s = n[l],
          f = s[i];
        if (
          (typeof f == "string"
            ? ((d = l > 0 ? d : ["plain"]), (c = f))
            : ((d = Qd(d, f.type)),
              f.alias && (d = Qd(d, f.alias)),
              (c = f.content)),
          typeof c != "string")
        ) {
          l++, t.push(d), n.push(c), r.push(0), o.push(c.length);
          continue;
        }
        var p = c.split(qE),
          v = p.length;
        u.push({ types: d, content: p[0] });
        for (var g = 1; g < v; g++)
          Zd(u), a.push((u = [])), u.push({ types: d, content: p[g] });
      }
      l--, t.pop(), n.pop(), r.pop(), o.pop();
    }
    return Zd(u), a;
  },
  KE = function (e, t) {
    var n = e.plain,
      r = Object.create(null),
      o = e.styles.reduce(function (i, l) {
        var u = l.languages,
          a = l.style;
        return (
          (u && !u.includes(t)) ||
            l.types.forEach(function (c) {
              var d = Qt({}, i[c], a);
              i[c] = d;
            }),
          i
        );
      }, r);
    return (o.root = n), (o.plain = Qt({}, n, { backgroundColor: null })), o;
  };
function qd(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) === -1 &&
      (n[r] = e[r]);
  return n;
}
var ew = (function (e) {
  function t() {
    for (var n = this, r = [], o = arguments.length; o--; ) r[o] = arguments[o];
    e.apply(this, r),
      Pr(this, "getThemeDict", function (i) {
        if (
          n.themeDict !== void 0 &&
          i.theme === n.prevTheme &&
          i.language === n.prevLanguage
        )
          return n.themeDict;
        (n.prevTheme = i.theme), (n.prevLanguage = i.language);
        var l = i.theme ? KE(i.theme, i.language) : void 0;
        return (n.themeDict = l);
      }),
      Pr(this, "getLineProps", function (i) {
        var l = i.key,
          u = i.className,
          a = i.style,
          c = qd(i, ["key", "className", "style", "line"]),
          d = c,
          s = Qt({}, d, {
            className: "token-line",
            style: void 0,
            key: void 0,
          }),
          f = n.getThemeDict(n.props);
        return (
          f !== void 0 && (s.style = f.plain),
          a !== void 0 &&
            (s.style = s.style !== void 0 ? Qt({}, s.style, a) : a),
          l !== void 0 && (s.key = l),
          u && (s.className += " " + u),
          s
        );
      }),
      Pr(this, "getStyleForToken", function (i) {
        var l = i.types,
          u = i.empty,
          a = l.length,
          c = n.getThemeDict(n.props);
        if (c !== void 0) {
          {
            if (a === 1 && l[0] === "plain")
              return u ? { display: "inline-block" } : void 0;
            if (a === 1 && !u) return c[l[0]];
          }
          var d = u ? { display: "inline-block" } : {},
            s = l.map(function (f) {
              return c[f];
            });
          return Object.assign.apply(Object, [d].concat(s));
        }
      }),
      Pr(this, "getTokenProps", function (i) {
        var l = i.key,
          u = i.className,
          a = i.style,
          c = i.token,
          d = qd(i, ["key", "className", "style", "token"]),
          s = d,
          f = Qt({}, s, {
            className: "token " + c.types.join(" "),
            children: c.content,
            style: n.getStyleForToken(c),
            key: void 0,
          });
        return (
          a !== void 0 &&
            (f.style = f.style !== void 0 ? Qt({}, f.style, a) : a),
          l !== void 0 && (f.key = l),
          u && (f.className += " " + u),
          f
        );
      }),
      Pr(this, "tokenize", function (i, l, u, a) {
        var c = { code: l, grammar: u, language: a, tokens: [] };
        i.hooks.run("before-tokenize", c);
        var d = (c.tokens = i.tokenize(c.code, c.grammar, c.language));
        return i.hooks.run("after-tokenize", c), d;
      });
  }
  return (
    e && (t.__proto__ = e),
    (t.prototype = Object.create(e && e.prototype)),
    (t.prototype.constructor = t),
    (t.prototype.render = function () {
      var r = this.props,
        o = r.Prism,
        i = r.language,
        l = r.code,
        u = r.children,
        a = this.getThemeDict(this.props),
        c = o.languages[i],
        d = c !== void 0 ? this.tokenize(o, l, c, i) : [l],
        s = JE(d);
      return u({
        tokens: s,
        className: "prism-code language-" + i,
        style: a !== void 0 ? a.root : {},
        getLineProps: this.getLineProps,
        getTokenProps: this.getTokenProps,
      });
    }),
    t
  );
})(_.Component);
const Jd = ew;
var tw = {
  plain: { color: "#393A34", backgroundColor: "#f6f8fa" },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: { color: "#999988", fontStyle: "italic" },
    },
    { types: ["namespace"], style: { opacity: 0.7 } },
    { types: ["string", "attr-value"], style: { color: "#e3116c" } },
    { types: ["punctuation", "operator"], style: { color: "#393A34" } },
    {
      types: [
        "entity",
        "url",
        "symbol",
        "number",
        "boolean",
        "variable",
        "constant",
        "property",
        "regex",
        "inserted",
      ],
      style: { color: "#36acaa" },
    },
    {
      types: ["atrule", "keyword", "attr-name", "selector"],
      style: { color: "#00a4db" },
    },
    { types: ["function", "deleted", "tag"], style: { color: "#d73a49" } },
    { types: ["function-variable"], style: { color: "#6f42c1" } },
    { types: ["tag", "selector", "keyword"], style: { color: "#00009f" } },
  ],
};
const ii = tw;
var nw = {
  plain: { color: "#d6deeb", backgroundColor: "#011627" },
  styles: [
    {
      types: ["changed"],
      style: { color: "rgb(162, 191, 252)", fontStyle: "italic" },
    },
    {
      types: ["deleted"],
      style: { color: "rgba(239, 83, 80, 0.56)", fontStyle: "italic" },
    },
    {
      types: ["inserted", "attr-name"],
      style: { color: "rgb(173, 219, 103)", fontStyle: "italic" },
    },
    {
      types: ["comment"],
      style: { color: "rgb(99, 119, 119)", fontStyle: "italic" },
    },
    { types: ["string", "url"], style: { color: "rgb(173, 219, 103)" } },
    { types: ["variable"], style: { color: "rgb(214, 222, 235)" } },
    { types: ["number"], style: { color: "rgb(247, 140, 108)" } },
    {
      types: ["builtin", "char", "constant", "function"],
      style: { color: "rgb(130, 170, 255)" },
    },
    { types: ["punctuation"], style: { color: "rgb(199, 146, 234)" } },
    {
      types: ["selector", "doctype"],
      style: { color: "rgb(199, 146, 234)", fontStyle: "italic" },
    },
    { types: ["class-name"], style: { color: "rgb(255, 203, 139)" } },
    {
      types: ["tag", "operator", "keyword"],
      style: { color: "rgb(127, 219, 202)" },
    },
    { types: ["boolean"], style: { color: "rgb(255, 88, 116)" } },
    { types: ["property"], style: { color: "rgb(128, 203, 196)" } },
    { types: ["namespace"], style: { color: "rgb(178, 204, 214)" } },
  ],
};
const li = nw,
  rw = (e) => {
    const t = Ut.parse(e).source;
    return t === "true"
      ? !0
      : t === "false"
      ? !1
      : re.addons.source.defaultState;
  },
  L0 = ({
    children: e,
    theme: t,
    language: n = "tsx",
    locStart: r,
    locEnd: o,
    className: i,
  }) => {
    const l = typeof r < "u" && typeof o < "u",
      u = /language-(\w+)/.exec(i || "");
    return u
      ? ((n = u[1]),
        E(Jd, {
          ...Xd,
          code: e.trim(),
          language: n,
          theme: {
            ...(t === "dark" ? li : ii),
            plain: {
              ...(t === "dark" ? li : ii).plain,
              backgroundColor: "var(--ladle-bg-color-secondary)",
            },
          },
          children: ({ className: a, style: c, tokens: d, getTokenProps: s }) =>
            E("div", {
              className: a,
              style: {
                ...c,
                textAlign: "left",
                margin: "0.5em 0 1em 0",
                padding: "1em",
              },
              children: d.map((f, p) =>
                E(
                  "div",
                  {
                    children: f.map((v, g) =>
                      E("span", { ...s({ token: v, key: g }) }, g)
                    ),
                  },
                  p
                )
              ),
            }),
        }))
      : l
      ? E(Jd, {
          ...Xd,
          code: e.trim(),
          language: n,
          theme: {
            ...(t === "dark" ? li : ii),
            plain: {
              ...(t === "dark" ? li : ii).plain,
              backgroundColor: "var(--ladle-bg-color-secondary)",
            },
          },
          children: ({
            className: a,
            style: c,
            tokens: d,
            getLineProps: s,
            getTokenProps: f,
          }) =>
            E("pre", {
              className: a,
              style: {
                ...c,
                textAlign: "left",
                margin: "0.5em 0 1em 0",
                padding: "1em 0",
                overflow: "auto",
                maxHeight: "50vh",
              },
              children: d.map((p, v) =>
                z(
                  "div",
                  {
                    id: `ladle_loc_${v + 1}`,
                    ...s({ line: p, key: v }),
                    style: { display: "table-row" },
                    children: [
                      E("span", {
                        className: "ladle-addon-source-lineno",
                        style:
                          v + 1 >= r && v + 1 <= o
                            ? {
                                backgroundColor: "var(--ladle-color-accent)",
                                color: "#FFF",
                              }
                            : void 0,
                        children: v + 1,
                      }),
                      E("div", {
                        style: { display: "table-cell", paddingLeft: "0.5em" },
                        children: p.map((g, C) =>
                          E("span", { ...f({ token: g, key: C }) }, C)
                        ),
                      }),
                    ],
                  },
                  v
                )
              ),
            }),
        })
      : E("code", { children: e });
  },
  ow = ({ globalState: e }) => {
    if (!sn[e.story]) return E(ki, { children: "There is no story loaded." });
    const { entry: t, locStart: n, locEnd: r } = sn[e.story];
    return (
      _.useEffect(() => {
        (window.location.hash = ""), (window.location.hash = `ladle_loc_${n}`);
      }, [n]),
      z(ki, {
        children: [
          E(gE, { path: t, locStart: n, locEnd: r }),
          E(L0, {
            theme: e.theme,
            language: "tsx",
            locEnd: r,
            locStart: n,
            children: decodeURIComponent(vE[e.story]),
          }),
        ],
      })
    );
  },
  iw = ({ globalState: e, dispatch: t }) => {
    const n = "Show the story source code.";
    return E("li", {
      children: z("button", {
        "aria-label": n,
        "data-testid": "addon-source",
        title: n,
        onClick: () => {
          t({ type: ne.UpdateSource, value: !e.source });
        },
        className: e.source ? "source-active" : "",
        type: "button",
        children: [
          E(sy, {}),
          E("span", { className: "ladle-addon-tooltip", children: n }),
          E("label", { children: "Story Source Code" }),
          E(Cr, {
            isOpen: e.source,
            close: () => t({ type: ne.UpdateSource, value: !1 }),
            label: "Dialog with the story source code.",
            children: E(ow, { globalState: e }),
          }),
        ],
      }),
    });
  },
  lw = ({ children: e, active: t, width: n, story: r, mode: o }) =>
    (!t && n === 0) || o === rt.Preview
      ? e
      : E(HE, {
          title: `Story ${r}`,
          initialContent:
            '<!DOCTYPE html><html><head><base target="_parent" /></head><body style="margin:0"><div id="root"></div></body></html>',
          mountTarget: "#root",
          className: "ladle-iframe",
          style: { width: n || "100%" },
          children: e,
        }),
  aw = ({ active: e, children: t, rtl: n, width: r }) => {
    const { window: o } = Gs.useFrame(),
      i = () => {
        o &&
          (o.document.documentElement.setAttribute("dir", n ? "rtl" : "ltr"),
          [...document.head.children].forEach((l) => {
            (l.tagName === "STYLE" ||
              (l.tagName === "LINK" &&
                (l.getAttribute("type") === "text/css" ||
                  l.getAttribute("rel") === "stylesheet"))) &&
              o.document.head.appendChild(l.cloneNode(!0));
          }));
      };
    return (
      _.useEffect(() => {
        if (e) {
          i();
          const l = new MutationObserver(() => i());
          return (
            document.documentElement.setAttribute("data-iframed", `${r}`),
            l.observe(document.head, {
              subtree: !0,
              characterData: !0,
              childList: !0,
            }),
            () => {
              l && l.disconnect();
            }
          );
        }
      }, [e, n]),
      t
    );
  },
  Kd = ({ globalState: e, dispatch: t }) => {
    var u;
    const n = sn[e.story],
      r = e.width,
      o = (u = n == null ? void 0 : n.meta) == null ? void 0 : u.meta,
      i = n && o ? o.iframed : !1;
    let l = n && o ? o.width : 0;
    return (
      Object.keys(re.addons.width.options).forEach((a) => {
        a === l && (l = re.addons.width.options[a]);
      }),
      _.useEffect(() => {
        if (l && l !== 0) {
          t({ type: ne.UpdateWidth, value: l });
          return;
        }
        re.addons.width.defaultState !== 0 &&
          t({ type: ne.UpdateWidth, value: re.addons.width.defaultState });
      }, [l, e.story]),
      _.useEffect(() => {
        e.mode !== rt.Preview && (i || r)
          ? document.documentElement.setAttribute("data-iframed", `${r}`)
          : document.documentElement.removeAttribute("data-iframed");
      }, [i, e.story, e.mode, e.width]),
      e.story
        ? E(YE, {
            children: E(_.Suspense, {
              fallback: E(ry, {}),
              children: E(lw, {
                active: i,
                story: e.story,
                width: r,
                mode: e.mode,
                children: E(aw, {
                  active: (i || r > 0) && e.mode !== rt.Preview,
                  rtl: e.rtl,
                  width: r,
                  children: E(WE, {
                    components: {
                      code: (a) => E(L0, { ...a, theme: e.theme }),
                    },
                    children: E(hE, {
                      config: re,
                      globalState: e,
                      dispatch: t,
                      storyMeta: o,
                      children: n
                        ? _.createElement(n.component)
                        : E(XE, { activeStory: e.story }),
                    }),
                  }),
                }),
              }),
            }),
          })
        : null
    );
  },
  uw = () =>
    z("div", {
      className: "ladle-error-content",
      children: [
        E("h1", { children: "No stories found" }),
        z("p", {
          children: [
            "The configured glob pattern for stories is: ",
            E(vr, { children: ht.stories }),
            ".",
          ],
        }),
        z("p", {
          children: [
            "It can be changed through the",
            " ",
            E(cr, {
              href: "https://www.ladle.dev/docs/config#story-filenames",
              children: "configuration file",
            }),
            " ",
            "or CLI flag ",
            E(vr, { children: "--stories=your-glob" }),
            ".",
          ],
        }),
        E("p", {
          children: E(cr, {
            href: "https://github.com/tajo/ladle",
            children: "GitHub",
          }),
        }),
        E("p", {
          children: E(cr, { href: "https://www.ladle.dev", children: "Docs" }),
        }),
      ],
    });
var B0 = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var r = [], o = 0; o < arguments.length; o++) {
        var i = arguments[o];
        if (i) {
          var l = typeof i;
          if (l === "string" || l === "number") r.push(i);
          else if (Array.isArray(i)) {
            if (i.length) {
              var u = n.apply(null, i);
              u && r.push(u);
            }
          } else if (l === "object") {
            if (
              i.toString !== Object.prototype.toString &&
              !i.toString.toString().includes("[native code]")
            ) {
              r.push(i.toString());
              continue;
            }
            for (var a in i) t.call(i, a) && i[a] && r.push(a);
          }
        }
      }
      return r.join(" ");
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(B0);
var sw = B0.exports;
const cw = Eo(sw);
function ol() {
  return (
    (ol = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ol.apply(this, arguments)
  );
}
var _n;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(_n || (_n = {}));
var ef = function (e) {
    return e;
  },
  tf = "beforeunload",
  dw = "popstate";
function fw(e) {
  e === void 0 && (e = {});
  var t = e,
    n = t.window,
    r = n === void 0 ? document.defaultView : n,
    o = r.history;
  function i() {
    var k = r.location,
      O = k.pathname,
      $ = k.search,
      M = k.hash,
      V = o.state || {};
    return [
      V.idx,
      ef({
        pathname: O,
        search: $,
        hash: M,
        state: V.usr || null,
        key: V.key || "default",
      }),
    ];
  }
  var l = null;
  function u() {
    if (l) p.call(l), (l = null);
    else {
      var k = _n.Pop,
        O = i(),
        $ = O[0],
        M = O[1];
      if (p.length) {
        if ($ != null) {
          var V = d - $;
          V &&
            ((l = {
              action: k,
              location: M,
              retry: function () {
                F(V * -1);
              },
            }),
            F(V));
        }
      } else h(k);
    }
  }
  r.addEventListener(dw, u);
  var a = _n.Pop,
    c = i(),
    d = c[0],
    s = c[1],
    f = rf(),
    p = rf();
  d == null && ((d = 0), o.replaceState(ol({}, o.state, { idx: d }), ""));
  function v(k) {
    return typeof k == "string" ? k : hw(k);
  }
  function g(k, O) {
    return (
      O === void 0 && (O = null),
      ef(
        ol(
          { pathname: s.pathname, hash: "", search: "" },
          typeof k == "string" ? gw(k) : k,
          { state: O, key: pw() }
        )
      )
    );
  }
  function C(k, O) {
    return [{ usr: k.state, key: k.key, idx: O }, v(k)];
  }
  function y(k, O, $) {
    return !p.length || (p.call({ action: k, location: O, retry: $ }), !1);
  }
  function h(k) {
    a = k;
    var O = i();
    (d = O[0]), (s = O[1]), f.call({ action: a, location: s });
  }
  function w(k, O) {
    var $ = _n.Push,
      M = g(k, O);
    function V() {
      w(k, O);
    }
    if (y($, M, V)) {
      var T = C(M, d + 1),
        P = T[0],
        G = T[1];
      try {
        o.pushState(P, "", G);
      } catch {
        r.location.assign(G);
      }
      h($);
    }
  }
  function A(k, O) {
    var $ = _n.Replace,
      M = g(k, O);
    function V() {
      A(k, O);
    }
    if (y($, M, V)) {
      var T = C(M, d),
        P = T[0],
        G = T[1];
      o.replaceState(P, "", G), h($);
    }
  }
  function F(k) {
    o.go(k);
  }
  var N = {
    get action() {
      return a;
    },
    get location() {
      return s;
    },
    createHref: v,
    push: w,
    replace: A,
    go: F,
    back: function () {
      F(-1);
    },
    forward: function () {
      F(1);
    },
    listen: function (O) {
      return f.push(O);
    },
    block: function (O) {
      var $ = p.push(O);
      return (
        p.length === 1 && r.addEventListener(tf, nf),
        function () {
          $(), p.length || r.removeEventListener(tf, nf);
        }
      );
    },
  };
  return N;
}
function nf(e) {
  e.preventDefault(), (e.returnValue = "");
}
function rf() {
  var e = [];
  return {
    get length() {
      return e.length;
    },
    push: function (n) {
      return (
        e.push(n),
        function () {
          e = e.filter(function (r) {
            return r !== n;
          });
        }
      );
    },
    call: function (n) {
      e.forEach(function (r) {
        return r && r(n);
      });
    },
  };
}
function pw() {
  return Math.random().toString(36).substr(2, 8);
}
function hw(e) {
  var t = e.pathname,
    n = t === void 0 ? "/" : t,
    r = e.search,
    o = r === void 0 ? "" : r,
    i = e.hash,
    l = i === void 0 ? "" : i;
  return (
    o && o !== "?" && (n += o.charAt(0) === "?" ? o : "?" + o),
    l && l !== "#" && (n += l.charAt(0) === "#" ? l : "#" + l),
    n
  );
}
function gw(e) {
  var t = {};
  if (e) {
    var n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    var r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
const P0 = fw(),
  M0 = (e) => {
    Object.keys(e).forEach((t) => {
      const n = e[t],
        r = re.addons[t] ? re.addons[t].defaultState : "$$LADLE_unknown";
      n === r && delete e[t];
    });
  },
  Sa = (e) => {
    if (!e.controlInitialized) return;
    const t = {
      mode: e.mode,
      rtl: e.rtl,
      source: e.source,
      story: e.story,
      theme: e.theme,
      width: e.width,
      control: e.control,
    };
    M0(t),
      location.search !== Ci(t) &&
        (bt(`Updating URL to ${Ci(t)}`), P0.push(Ci(t)));
  },
  Ci = (e) => {
    M0(e);
    const t = {};
    return (
      Object.keys(e).forEach((n) => {
        n === "control"
          ? Object.keys(e[n]).forEach((r) => {
              const o = e[n][r];
              if (o.type === J.Action) return;
              let i = o.value,
                l = !1;
              i = encodeURI(
                typeof o.value == "string" ? o.value : JSON.stringify(o.value)
              );
              try {
                (l =
                  JSON.stringify(o.value) === JSON.stringify(o.defaultValue)),
                  !l &&
                    JSON.stringify(i) !== JSON.stringify(o.defaultValue) &&
                    (t[`arg-${r}`] = i);
              } catch {}
            })
          : (t[n] = e[n]);
      }),
      `?${Ut.stringify(t)}`
    );
  },
  $0 = (e) =>
    e.isExpanded && e.children && e.children.length
      ? $0(e.children[e.children.length - 1])
      : e.id,
  j0 = (e, t, n) => {
    for (let r = 0; r < e.length; r++) {
      if (e[r].id === t) return n;
      if (e[r].isExpanded && e[r].children && e[r].children.length) {
        const o = j0(e[r].children, t, e[r].id);
        if (o) return o;
      }
    }
    return null;
  },
  U0 = (e, t, n) => {
    for (let r = 0; r < e.length; r++) {
      if (e[r].id === t) return r === 0 ? n : $0(e[r - 1]);
      if (e[r].isExpanded && e[r].children && e[r].children.length) {
        const o = U0(e[r].children, t, e[r].id);
        if (o) return o;
      }
    }
    return null;
  },
  z0 = (e, t) => {
    for (let n = 0; n < e.length; n++) {
      if (e[n].id === t) return e[n].children;
      const r = z0(e[n].children, t);
      if (r.length) return r;
    }
    return [];
  },
  H0 = (e, t) => (e[0].isLinkable ? e[0] : H0(e[0].children)),
  V0 = (e, t) => {
    for (let n = 0; n < e.length; n++) {
      if (
        e[n].id === t &&
        e[n].isExpanded &&
        e[n].children &&
        e[n].children.length
      )
        return e[n].children[0].id;
      if (e[n].isExpanded && e[n].children && e[n].children.length) {
        const r = V0(e[n].children, t);
        if (r) return r;
      }
    }
    return null;
  },
  G0 = (e, t, n) => {
    for (let r = 0; r < e.length; r++) {
      if (e[r].id === t)
        return e[r].isExpanded && e[r].children && e[r].children.length
          ? e[r].children[0].id
          : e[r + 1]
          ? e[r + 1].id
          : n;
      if (e[r].isExpanded && e[r].children && e[r].children.length) {
        const o = G0(e[r].children, t, e[r + 1] ? e[r + 1].id : n);
        if (o) return o;
      }
    }
    return null;
  },
  W0 = (e) => {
    const t = e[e.length - 1];
    return t.isExpanded && t.children && t.children.length
      ? W0(t.children)
      : t.id;
  },
  zr = (e, t) =>
    e.map((n, r) => {
      const o = { ...n };
      return (
        o.id === t.id && (o.isExpanded = !o.isExpanded),
        t.id === "+" && r === 0 && (o.isExpanded = !0),
        t.id === "-" && (o.isExpanded = !1),
        o.children &&
          o.children.length &&
          (o.children = zr(
            o.children,
            o.id === t.id ? { id: o.isExpanded ? "+" : "-" } : t
          )),
        o
      );
    }),
  mw = ({
    stories: e,
    story: t,
    updateStory: n,
    searchActive: r,
    searchRef: o,
    setTreeRootRef: i,
  }) => {
    const l = _.useRef({}),
      [u, a] = _.useState(Cc(e, t, r));
    _.useEffect(() => {
      a(Cc(e, t, r));
    }, [e.join(",")]);
    const [c, d] = _.useState(u.length ? u[0].id : null),
      s = (p) => {
        var v;
        p && l && l.current[p] && ((v = l.current[p]) == null || v.focus()),
          d(p || u[0].id),
          !p && o.current.focus();
      };
    return E("ul", {
      role: "tree",
      style: { marginInlineStart: "-6px" },
      ref: (p) => i(p),
      children: E(Y0, {
        tree: u,
        fullTree: u,
        story: t,
        updateStory: n,
        onItemClick: (p) => {
          const v = zr(u, p),
            g = H0(z0(v, p.id), p.id);
          g && t !== g.id && g.isExpanded && n(g.id), a(v);
        },
        selectedItemId: c,
        onKeyDownFn: (p, v) => {
          switch (p.key) {
            case "ArrowRight":
              p.preventDefault(),
                p.stopPropagation(),
                v.isExpanded ? s(V0(u, v.id)) : a(zr(u, v));
              break;
            case "ArrowLeft":
              p.preventDefault(),
                p.stopPropagation(),
                v.isExpanded ? a(zr(u, v)) : s(j0(u, v.id, null));
              break;
            case "ArrowUp":
              p.preventDefault(), p.stopPropagation(), s(U0(u, v.id, null));
              break;
            case "ArrowDown":
              p.preventDefault(), p.stopPropagation();
              const g = G0(u, v.id, null);
              g && s(g);
              break;
            case " ":
            case "Enter":
              p.target.href ||
                (p.preventDefault(), p.stopPropagation(), a(zr(u, v)));
              break;
            case "Home":
              p.preventDefault(), p.stopPropagation(), u.length && s(u[0].id);
              break;
            case "End":
              p.preventDefault(), p.stopPropagation(), s(W0(u));
              break;
          }
        },
        treeItemRefs: l,
      }),
    });
  },
  Y0 = ({
    tree: e,
    fullTree: t,
    story: n,
    updateStory: r,
    onItemClick: o,
    onKeyDownFn: i,
    selectedItemId: l,
    treeItemRefs: u,
  }) =>
    E(_.Fragment, {
      children: e.map((a) =>
        z(
          "li",
          {
            onKeyDown: (c) => i(c, a),
            "aria-expanded": a.isExpanded,
            title: a.name,
            tabIndex: a.id === l && !a.isLinkable ? 0 : -1,
            ref: a.isLinkable ? void 0 : (c) => (u.current[a.id] = c),
            role: "treeitem",
            className: cw({
              "ladle-linkable": a.isLinkable,
              "ladle-active": a.id === n,
            }),
            style: a.isLinkable ? {} : { marginTop: "0.5em" },
            children: [
              a.isLinkable
                ? z("div", {
                    style: { display: "flex" },
                    children: [
                      E(ly, {}),
                      E("a", {
                        tabIndex: a.id === l ? 0 : -1,
                        ref: (c) => (u.current[a.id] = c),
                        href: Ci({ story: a.id }),
                        onKeyDown: (c) => n !== a.id && i(c, a),
                        onClick: (c) => {
                          !c.ctrlKey &&
                            !c.metaKey &&
                            (c.preventDefault(), n !== a.id && r(a.id));
                        },
                        children: a.name,
                      }),
                    ],
                  })
                : z("div", {
                    style: { display: "flex", cursor: "pointer" },
                    title: a.name,
                    onClick: () => o(a),
                    children: [
                      E(ay, { rotate: !a.isExpanded }),
                      E("div", {
                        style: {
                          textOverflow: "ellipsis",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                        },
                        children: a.name,
                      }),
                    ],
                  }),
              Object.keys(a.children).length > 0 &&
                a.isExpanded &&
                E("ul", {
                  role: "group",
                  children: E(Y0, {
                    tree: a.children,
                    fullTree: t,
                    story: n,
                    updateStory: r,
                    selectedItemId: l,
                    onKeyDownFn: i,
                    onItemClick: o,
                    treeItemRefs: u,
                  }),
                }),
            ],
          },
          a.id
        )
      ),
    }),
  yw = ({ stories: e, story: t, updateStory: n }) => {
    const [r, o] = _.useState(""),
      i = _.useRef(null),
      l = _.useRef(null),
      u = (d) => {
        ((d.metaKey && d.key === "p") || d.key === "/") &&
          (["input", "textarea"].every(
            (s) => d.target.tagName.toLowerCase() !== s
          ) ||
            d.metaKey) &&
          (i.current.focus(), d.preventDefault());
      };
    _.useEffect(
      () => (
        document.addEventListener("keydown", u),
        () => {
          document.removeEventListener("keydown", u);
        }
      ),
      []
    );
    const a = r.toLocaleLowerCase().replace(new RegExp("\\s+", "g"), "-"),
      c = e.filter((d) => d.includes(a));
    return z("nav", {
      role: "navigation",
      className: "ladle-aside",
      children: [
        E("input", {
          placeholder: "Search",
          "aria-label": "Search stories",
          value: r,
          ref: i,
          onKeyDown: (d) => {
            d.key === "ArrowDown" && l.current.firstChild.focus();
          },
          onChange: (d) => o(d.target.value),
        }),
        E(mw, {
          searchRef: i,
          stories: c,
          story: t,
          updateStory: n,
          searchActive: r !== "",
          setTreeRootRef: (d) => (l.current = d),
        }),
      ],
    });
  },
  vw = (e) => {
    switch (Ut.parse(e).mode) {
      case rt.Full:
        return rt.Full;
      case rt.Preview:
        return rt.Preview;
      default:
        return re.addons.mode.defaultState;
    }
  },
  Ew = ({ dispatch: e }) => {
    const t = "Open fullscreen mode. It removes all other styles and wrappers.";
    return E("li", {
      children: z("button", {
        "aria-label": t,
        title: t,
        onClick: () => e({ type: ne.UpdateMode, value: rt.Preview }),
        type: "button",
        children: [
          E(oy, {}),
          E("span", { className: "ladle-addon-tooltip", children: t }),
          E("label", { children: "Open fullscreen mode" }),
        ],
      }),
    });
  };
var ww = Object.create,
  Zs = Object.defineProperty,
  Sw = Object.getOwnPropertyDescriptor,
  X0 = Object.getOwnPropertyNames,
  Cw = Object.getPrototypeOf,
  _w = Object.prototype.hasOwnProperty,
  Qs = (e, t) =>
    function () {
      return t || (0, e[X0(e)[0]])((t = { exports: {} }).exports, t), t.exports;
    },
  Aw = (e, t) => {
    for (var n in t) Zs(e, n, { get: t[n], enumerable: !0 });
  },
  bw = (e, t, n, r) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let o of X0(t))
        !_w.call(e, o) &&
          o !== n &&
          Zs(e, o, {
            get: () => t[o],
            enumerable: !(r = Sw(t, o)) || r.enumerable,
          });
    return e;
  },
  kw = (e, t, n) => (
    (n = e != null ? ww(Cw(e)) : {}),
    bw(
      t || !e || !e.__esModule
        ? Zs(n, "default", { value: e, enumerable: !0 })
        : n,
      e
    )
  ),
  Ow = Qs({
    "node_modules/is-object/index.js"(e, t) {
      t.exports = function (r) {
        return typeof r == "object" && r !== null;
      };
    },
  }),
  Tw = Qs({
    "node_modules/is-window/index.js"(e, t) {
      t.exports = function (n) {
        if (n == null) return !1;
        var r = Object(n);
        return r === r.window;
      };
    },
  }),
  xw = Qs({
    "node_modules/is-dom/index.js"(e, t) {
      var n = Ow(),
        r = Tw();
      function o(i) {
        return !n(i) || !r(window) || typeof window.Node != "function"
          ? !1
          : typeof i.nodeType == "number" && typeof i.nodeName == "string";
      }
      t.exports = o;
    },
  }),
  il = {};
Aw(il, { chromeDark: () => Z0, chromeLight: () => Q0 });
var Z0 = {
    BASE_FONT_FAMILY: "Menlo, monospace",
    BASE_FONT_SIZE: "11px",
    BASE_LINE_HEIGHT: 1.2,
    BASE_BACKGROUND_COLOR: "rgb(36, 36, 36)",
    BASE_COLOR: "rgb(213, 213, 213)",
    OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10,
    OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5,
    OBJECT_NAME_COLOR: "rgb(227, 110, 236)",
    OBJECT_VALUE_NULL_COLOR: "rgb(127, 127, 127)",
    OBJECT_VALUE_UNDEFINED_COLOR: "rgb(127, 127, 127)",
    OBJECT_VALUE_REGEXP_COLOR: "rgb(233, 63, 59)",
    OBJECT_VALUE_STRING_COLOR: "rgb(233, 63, 59)",
    OBJECT_VALUE_SYMBOL_COLOR: "rgb(233, 63, 59)",
    OBJECT_VALUE_NUMBER_COLOR: "hsl(252, 100%, 75%)",
    OBJECT_VALUE_BOOLEAN_COLOR: "hsl(252, 100%, 75%)",
    OBJECT_VALUE_FUNCTION_PREFIX_COLOR: "rgb(85, 106, 242)",
    HTML_TAG_COLOR: "rgb(93, 176, 215)",
    HTML_TAGNAME_COLOR: "rgb(93, 176, 215)",
    HTML_TAGNAME_TEXT_TRANSFORM: "lowercase",
    HTML_ATTRIBUTE_NAME_COLOR: "rgb(155, 187, 220)",
    HTML_ATTRIBUTE_VALUE_COLOR: "rgb(242, 151, 102)",
    HTML_COMMENT_COLOR: "rgb(137, 137, 137)",
    HTML_DOCTYPE_COLOR: "rgb(192, 192, 192)",
    ARROW_COLOR: "rgb(145, 145, 145)",
    ARROW_MARGIN_RIGHT: 3,
    ARROW_FONT_SIZE: 12,
    ARROW_ANIMATION_DURATION: "0",
    TREENODE_FONT_FAMILY: "Menlo, monospace",
    TREENODE_FONT_SIZE: "11px",
    TREENODE_LINE_HEIGHT: 1.2,
    TREENODE_PADDING_LEFT: 12,
    TABLE_BORDER_COLOR: "rgb(85, 85, 85)",
    TABLE_TH_BACKGROUND_COLOR: "rgb(44, 44, 44)",
    TABLE_TH_HOVER_COLOR: "rgb(48, 48, 48)",
    TABLE_SORT_ICON_COLOR: "black",
    TABLE_DATA_BACKGROUND_IMAGE:
      "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 50%, rgba(51, 139, 255, 0.0980392) 50%, rgba(51, 139, 255, 0.0980392))",
    TABLE_DATA_BACKGROUND_SIZE: "128px 32px",
  },
  Q0 = {
    BASE_FONT_FAMILY: "Menlo, monospace",
    BASE_FONT_SIZE: "11px",
    BASE_LINE_HEIGHT: 1.2,
    BASE_BACKGROUND_COLOR: "white",
    BASE_COLOR: "black",
    OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10,
    OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5,
    OBJECT_NAME_COLOR: "rgb(136, 19, 145)",
    OBJECT_VALUE_NULL_COLOR: "rgb(128, 128, 128)",
    OBJECT_VALUE_UNDEFINED_COLOR: "rgb(128, 128, 128)",
    OBJECT_VALUE_REGEXP_COLOR: "rgb(196, 26, 22)",
    OBJECT_VALUE_STRING_COLOR: "rgb(196, 26, 22)",
    OBJECT_VALUE_SYMBOL_COLOR: "rgb(196, 26, 22)",
    OBJECT_VALUE_NUMBER_COLOR: "rgb(28, 0, 207)",
    OBJECT_VALUE_BOOLEAN_COLOR: "rgb(28, 0, 207)",
    OBJECT_VALUE_FUNCTION_PREFIX_COLOR: "rgb(13, 34, 170)",
    HTML_TAG_COLOR: "rgb(168, 148, 166)",
    HTML_TAGNAME_COLOR: "rgb(136, 18, 128)",
    HTML_TAGNAME_TEXT_TRANSFORM: "lowercase",
    HTML_ATTRIBUTE_NAME_COLOR: "rgb(153, 69, 0)",
    HTML_ATTRIBUTE_VALUE_COLOR: "rgb(26, 26, 166)",
    HTML_COMMENT_COLOR: "rgb(35, 110, 37)",
    HTML_DOCTYPE_COLOR: "rgb(192, 192, 192)",
    ARROW_COLOR: "#6e6e6e",
    ARROW_MARGIN_RIGHT: 3,
    ARROW_FONT_SIZE: 12,
    ARROW_ANIMATION_DURATION: "0",
    TREENODE_FONT_FAMILY: "Menlo, monospace",
    TREENODE_FONT_SIZE: "11px",
    TREENODE_LINE_HEIGHT: 1.2,
    TREENODE_PADDING_LEFT: 12,
    TABLE_BORDER_COLOR: "#aaa",
    TABLE_TH_BACKGROUND_COLOR: "#eee",
    TABLE_TH_HOVER_COLOR: "hsla(0, 0%, 90%, 1)",
    TABLE_SORT_ICON_COLOR: "#6e6e6e",
    TABLE_DATA_BACKGROUND_IMAGE:
      "linear-gradient(to bottom, white, white 50%, rgb(234, 243, 255) 50%, rgb(234, 243, 255))",
    TABLE_DATA_BACKGROUND_SIZE: "128px 32px",
  },
  q0 = _.createContext([{}, () => {}]),
  Ca = {
    WebkitTouchCallout: "none",
    WebkitUserSelect: "none",
    KhtmlUserSelect: "none",
    MozUserSelect: "none",
    msUserSelect: "none",
    OUserSelect: "none",
    userSelect: "none",
  },
  _i = (e) => ({
    DOMNodePreview: {
      htmlOpenTag: {
        base: { color: e.HTML_TAG_COLOR },
        tagName: {
          color: e.HTML_TAGNAME_COLOR,
          textTransform: e.HTML_TAGNAME_TEXT_TRANSFORM,
        },
        htmlAttributeName: { color: e.HTML_ATTRIBUTE_NAME_COLOR },
        htmlAttributeValue: { color: e.HTML_ATTRIBUTE_VALUE_COLOR },
      },
      htmlCloseTag: {
        base: { color: e.HTML_TAG_COLOR },
        offsetLeft: { marginLeft: -e.TREENODE_PADDING_LEFT },
        tagName: {
          color: e.HTML_TAGNAME_COLOR,
          textTransform: e.HTML_TAGNAME_TEXT_TRANSFORM,
        },
      },
      htmlComment: { color: e.HTML_COMMENT_COLOR },
      htmlDoctype: { color: e.HTML_DOCTYPE_COLOR },
    },
    ObjectPreview: {
      objectDescription: { fontStyle: "italic" },
      preview: { fontStyle: "italic" },
      arrayMaxProperties: e.OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES,
      objectMaxProperties: e.OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES,
    },
    ObjectName: {
      base: { color: e.OBJECT_NAME_COLOR },
      dimmed: { opacity: 0.6 },
    },
    ObjectValue: {
      objectValueNull: { color: e.OBJECT_VALUE_NULL_COLOR },
      objectValueUndefined: { color: e.OBJECT_VALUE_UNDEFINED_COLOR },
      objectValueRegExp: { color: e.OBJECT_VALUE_REGEXP_COLOR },
      objectValueString: { color: e.OBJECT_VALUE_STRING_COLOR },
      objectValueSymbol: { color: e.OBJECT_VALUE_SYMBOL_COLOR },
      objectValueNumber: { color: e.OBJECT_VALUE_NUMBER_COLOR },
      objectValueBoolean: { color: e.OBJECT_VALUE_BOOLEAN_COLOR },
      objectValueFunctionPrefix: {
        color: e.OBJECT_VALUE_FUNCTION_PREFIX_COLOR,
        fontStyle: "italic",
      },
      objectValueFunctionName: { fontStyle: "italic" },
    },
    TreeView: {
      treeViewOutline: { padding: 0, margin: 0, listStyleType: "none" },
    },
    TreeNode: {
      treeNodeBase: {
        color: e.BASE_COLOR,
        backgroundColor: e.BASE_BACKGROUND_COLOR,
        lineHeight: e.TREENODE_LINE_HEIGHT,
        cursor: "default",
        boxSizing: "border-box",
        listStyle: "none",
        fontFamily: e.TREENODE_FONT_FAMILY,
        fontSize: e.TREENODE_FONT_SIZE,
      },
      treeNodePreviewContainer: {},
      treeNodePlaceholder: {
        whiteSpace: "pre",
        fontSize: e.ARROW_FONT_SIZE,
        marginRight: e.ARROW_MARGIN_RIGHT,
        ...Ca,
      },
      treeNodeArrow: {
        base: {
          color: e.ARROW_COLOR,
          display: "inline-block",
          fontSize: e.ARROW_FONT_SIZE,
          marginRight: e.ARROW_MARGIN_RIGHT,
          ...(parseFloat(e.ARROW_ANIMATION_DURATION) > 0
            ? { transition: `transform ${e.ARROW_ANIMATION_DURATION} ease 0s` }
            : {}),
          ...Ca,
        },
        expanded: {
          WebkitTransform: "rotateZ(90deg)",
          MozTransform: "rotateZ(90deg)",
          transform: "rotateZ(90deg)",
        },
        collapsed: {
          WebkitTransform: "rotateZ(0deg)",
          MozTransform: "rotateZ(0deg)",
          transform: "rotateZ(0deg)",
        },
      },
      treeNodeChildNodesContainer: {
        margin: 0,
        paddingLeft: e.TREENODE_PADDING_LEFT,
      },
    },
    TableInspector: {
      base: {
        color: e.BASE_COLOR,
        position: "relative",
        border: `1px solid ${e.TABLE_BORDER_COLOR}`,
        fontFamily: e.BASE_FONT_FAMILY,
        fontSize: e.BASE_FONT_SIZE,
        lineHeight: "120%",
        boxSizing: "border-box",
        cursor: "default",
      },
    },
    TableInspectorHeaderContainer: {
      base: { top: 0, height: "17px", left: 0, right: 0, overflowX: "hidden" },
      table: {
        tableLayout: "fixed",
        borderSpacing: 0,
        borderCollapse: "separate",
        height: "100%",
        width: "100%",
        margin: 0,
      },
    },
    TableInspectorDataContainer: {
      tr: { display: "table-row" },
      td: {
        boxSizing: "border-box",
        border: "none",
        height: "16px",
        verticalAlign: "top",
        padding: "1px 4px",
        WebkitUserSelect: "text",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden",
        lineHeight: "14px",
      },
      div: {
        position: "static",
        top: "17px",
        bottom: 0,
        overflowY: "overlay",
        transform: "translateZ(0)",
        left: 0,
        right: 0,
        overflowX: "hidden",
      },
      table: {
        positon: "static",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        borderTop: "0 none transparent",
        margin: 0,
        backgroundImage: e.TABLE_DATA_BACKGROUND_IMAGE,
        backgroundSize: e.TABLE_DATA_BACKGROUND_SIZE,
        tableLayout: "fixed",
        borderSpacing: 0,
        borderCollapse: "separate",
        width: "100%",
        fontSize: e.BASE_FONT_SIZE,
        lineHeight: "120%",
      },
    },
    TableInspectorTH: {
      base: {
        position: "relative",
        height: "auto",
        textAlign: "left",
        backgroundColor: e.TABLE_TH_BACKGROUND_COLOR,
        borderBottom: `1px solid ${e.TABLE_BORDER_COLOR}`,
        fontWeight: "normal",
        verticalAlign: "middle",
        padding: "0 4px",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden",
        lineHeight: "14px",
        ":hover": { backgroundColor: e.TABLE_TH_HOVER_COLOR },
      },
      div: {
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden",
        fontSize: e.BASE_FONT_SIZE,
        lineHeight: "120%",
      },
    },
    TableInspectorLeftBorder: {
      none: { borderLeft: "none" },
      solid: { borderLeft: `1px solid ${e.TABLE_BORDER_COLOR}` },
    },
    TableInspectorSortIcon: {
      display: "block",
      marginRight: 3,
      width: 8,
      height: 7,
      marginTop: -7,
      color: e.TABLE_SORT_ICON_COLOR,
      fontSize: 12,
      ...Ca,
    },
  }),
  Bu = "chromeLight",
  J0 = _.createContext(_i(il[Bu])),
  Qe = (e) => _.useContext(J0)[e],
  qs =
    (e) =>
    ({ theme: n = Bu, ...r }) => {
      const o = _.useMemo(() => {
        switch (Object.prototype.toString.call(n)) {
          case "[object String]":
            return _i(il[n]);
          case "[object Object]":
            return _i(n);
          default:
            return _i(il[Bu]);
        }
      }, [n]);
      return x.createElement(
        J0.Provider,
        { value: o },
        x.createElement(e, { ...r })
      );
    },
  Rw = ({ expanded: e, styles: t }) =>
    x.createElement(
      "span",
      { style: { ...t.base, ...(e ? t.expanded : t.collapsed) } },
      "▶"
    ),
  Dw = _.memo((e) => {
    e = {
      expanded: !0,
      nodeRenderer: ({ name: d }) => x.createElement("span", null, d),
      onClick: () => {},
      shouldShowArrow: !1,
      shouldShowPlaceholder: !0,
      ...e,
    };
    const {
        expanded: t,
        onClick: n,
        children: r,
        nodeRenderer: o,
        title: i,
        shouldShowArrow: l,
        shouldShowPlaceholder: u,
      } = e,
      a = Qe("TreeNode"),
      c = o;
    return x.createElement(
      "li",
      { "aria-expanded": t, role: "treeitem", style: a.treeNodeBase, title: i },
      x.createElement(
        "div",
        { style: a.treeNodePreviewContainer, onClick: n },
        l || _.Children.count(r) > 0
          ? x.createElement(Rw, { expanded: t, styles: a.treeNodeArrow })
          : u && x.createElement("span", { style: a.treeNodePlaceholder }, " "),
        x.createElement(c, { ...e })
      ),
      x.createElement(
        "ol",
        { role: "group", style: a.treeNodeChildNodesContainer },
        t ? r : void 0
      )
    );
  }),
  ll = "$",
  of = "*";
function Ai(e, t) {
  return !t(e).next().done;
}
var Nw = (e) =>
    Array.from({ length: e }, (t, n) =>
      [ll].concat(Array.from({ length: n }, () => "*")).join(".")
    ),
  Fw = (e, t, n, r, o) => {
    const i = []
        .concat(Nw(r))
        .concat(n)
        .filter((u) => typeof u == "string"),
      l = [];
    return (
      i.forEach((u) => {
        const a = u.split("."),
          c = (d, s, f) => {
            if (f === a.length) {
              l.push(s);
              return;
            }
            const p = a[f];
            if (f === 0) Ai(d, t) && (p === ll || p === of) && c(d, ll, f + 1);
            else if (p === of)
              for (const { name: v, data: g } of t(d))
                Ai(g, t) && c(g, `${s}.${v}`, f + 1);
            else {
              const v = d[p];
              Ai(v, t) && c(v, `${s}.${p}`, f + 1);
            }
          };
        c(e, "", 0);
      }),
      l.reduce((u, a) => ((u[a] = !0), u), { ...o })
    );
  },
  K0 = _.memo((e) => {
    const { data: t, dataIterator: n, path: r, depth: o, nodeRenderer: i } = e,
      [l, u] = _.useContext(q0),
      a = Ai(t, n),
      c = !!l[r],
      d = _.useCallback(() => a && u((s) => ({ ...s, [r]: !c })), [a, u, r, c]);
    return x.createElement(
      Dw,
      {
        expanded: c,
        onClick: d,
        shouldShowArrow: a,
        shouldShowPlaceholder: o > 0,
        nodeRenderer: i,
        ...e,
      },
      c
        ? [...n(t)].map(({ name: s, data: f, ...p }) =>
            x.createElement(K0, {
              name: s,
              data: f,
              depth: o + 1,
              path: `${r}.${s}`,
              key: s,
              dataIterator: n,
              nodeRenderer: i,
              ...p,
            })
          )
        : null
    );
  }),
  eg = _.memo(
    ({
      name: e,
      data: t,
      dataIterator: n,
      nodeRenderer: r,
      expandPaths: o,
      expandLevel: i,
    }) => {
      const l = Qe("TreeView"),
        u = _.useState({}),
        [, a] = u;
      return (
        _.useLayoutEffect(() => a((c) => Fw(t, n, o, i, c)), [t, n, o, i]),
        x.createElement(
          q0.Provider,
          { value: u },
          x.createElement(
            "ol",
            { role: "tree", style: l.treeViewOutline },
            x.createElement(K0, {
              name: e,
              data: t,
              dataIterator: n,
              depth: 0,
              path: ll,
              nodeRenderer: r,
            })
          )
        )
      );
    }
  ),
  Js = ({ name: e, dimmed: t = !1, styles: n = {} }) => {
    const r = Qe("ObjectName"),
      o = { ...r.base, ...(t ? r.dimmed : {}), ...n };
    return x.createElement("span", { style: o }, e);
  },
  Jr = ({ object: e, styles: t }) => {
    const n = Qe("ObjectValue"),
      r = (o) => ({ ...n[o], ...t });
    switch (typeof e) {
      case "bigint":
        return x.createElement(
          "span",
          { style: r("objectValueNumber") },
          String(e),
          "n"
        );
      case "number":
        return x.createElement(
          "span",
          { style: r("objectValueNumber") },
          String(e)
        );
      case "string":
        return x.createElement(
          "span",
          { style: r("objectValueString") },
          '"',
          e,
          '"'
        );
      case "boolean":
        return x.createElement(
          "span",
          { style: r("objectValueBoolean") },
          String(e)
        );
      case "undefined":
        return x.createElement(
          "span",
          { style: r("objectValueUndefined") },
          "undefined"
        );
      case "object":
        return e === null
          ? x.createElement("span", { style: r("objectValueNull") }, "null")
          : e instanceof Date
          ? x.createElement("span", null, e.toString())
          : e instanceof RegExp
          ? x.createElement(
              "span",
              { style: r("objectValueRegExp") },
              e.toString()
            )
          : Array.isArray(e)
          ? x.createElement("span", null, `Array(${e.length})`)
          : e.constructor
          ? typeof e.constructor.isBuffer == "function" &&
            e.constructor.isBuffer(e)
            ? x.createElement("span", null, `Buffer[${e.length}]`)
            : x.createElement("span", null, e.constructor.name)
          : x.createElement("span", null, "Object");
      case "function":
        return x.createElement(
          "span",
          null,
          x.createElement(
            "span",
            { style: r("objectValueFunctionPrefix") },
            "ƒ "
          ),
          x.createElement(
            "span",
            { style: r("objectValueFunctionName") },
            e.name,
            "()"
          )
        );
      case "symbol":
        return x.createElement(
          "span",
          { style: r("objectValueSymbol") },
          e.toString()
        );
      default:
        return x.createElement("span", null);
    }
  },
  tg = Object.prototype.hasOwnProperty,
  Iw = Object.prototype.propertyIsEnumerable;
function Pu(e, t) {
  const n = Object.getOwnPropertyDescriptor(e, t);
  if (n.get)
    try {
      return n.get();
    } catch {
      return n.get;
    }
  return e[t];
}
function lf(e, t) {
  return e.length === 0
    ? []
    : e.slice(1).reduce((n, r) => n.concat([t, r]), [e[0]]);
}
var Mu = ({ data: e }) => {
    const t = Qe("ObjectPreview"),
      n = e;
    if (
      typeof n != "object" ||
      n === null ||
      n instanceof Date ||
      n instanceof RegExp
    )
      return x.createElement(Jr, { object: n });
    if (Array.isArray(n)) {
      const r = t.arrayMaxProperties,
        o = n
          .slice(0, r)
          .map((l, u) => x.createElement(Jr, { key: u, object: l }));
      n.length > r && o.push(x.createElement("span", { key: "ellipsis" }, "…"));
      const i = n.length;
      return x.createElement(
        x.Fragment,
        null,
        x.createElement(
          "span",
          { style: t.objectDescription },
          i === 0 ? "" : `(${i}) `
        ),
        x.createElement("span", { style: t.preview }, "[", lf(o, ", "), "]")
      );
    } else {
      const r = t.objectMaxProperties,
        o = [];
      for (const l in n)
        if (tg.call(n, l)) {
          let u;
          o.length === r - 1 &&
            Object.keys(n).length > r &&
            (u = x.createElement("span", { key: "ellipsis" }, "…"));
          const a = Pu(n, l);
          if (
            (o.push(
              x.createElement(
                "span",
                { key: l },
                x.createElement(Js, { name: l || '""' }),
                ": ",
                x.createElement(Jr, { object: a }),
                u
              )
            ),
            u)
          )
            break;
        }
      const i = n.constructor ? n.constructor.name : "Object";
      return x.createElement(
        x.Fragment,
        null,
        x.createElement(
          "span",
          { style: t.objectDescription },
          i === "Object" ? "" : `${i} `
        ),
        x.createElement("span", { style: t.preview }, "{", lf(o, ", "), "}")
      );
    }
  },
  Lw = ({ name: e, data: t }) =>
    typeof e == "string"
      ? x.createElement(
          "span",
          null,
          x.createElement(Js, { name: e }),
          x.createElement("span", null, ": "),
          x.createElement(Mu, { data: t })
        )
      : x.createElement(Mu, { data: t }),
  Bw = ({ name: e, data: t, isNonenumerable: n = !1 }) => {
    const r = t;
    return x.createElement(
      "span",
      null,
      typeof e == "string"
        ? x.createElement(Js, { name: e, dimmed: n })
        : x.createElement(Mu, { data: e }),
      x.createElement("span", null, ": "),
      x.createElement(Jr, { object: r })
    );
  },
  Pw = (e, t) =>
    function* (r) {
      if (!((typeof r == "object" && r !== null) || typeof r == "function"))
        return;
      const i = Array.isArray(r);
      if (!i && r[Symbol.iterator]) {
        let l = 0;
        for (const u of r) {
          if (Array.isArray(u) && u.length === 2) {
            const [a, c] = u;
            yield { name: a, data: c };
          } else yield { name: l.toString(), data: u };
          l++;
        }
      } else {
        const l = Object.getOwnPropertyNames(r);
        t === !0 && !i ? l.sort() : typeof t == "function" && l.sort(t);
        for (const u of l)
          if (Iw.call(r, u)) {
            const a = Pu(r, u);
            yield { name: u || '""', data: a };
          } else if (e) {
            let a;
            try {
              a = Pu(r, u);
            } catch {}
            a !== void 0 && (yield { name: u, data: a, isNonenumerable: !0 });
          }
        e &&
          r !== Object.prototype &&
          (yield {
            name: "__proto__",
            data: Object.getPrototypeOf(r),
            isNonenumerable: !0,
          });
      }
    },
  Mw = ({ depth: e, name: t, data: n, isNonenumerable: r }) =>
    e === 0
      ? x.createElement(Lw, { name: t, data: n })
      : x.createElement(Bw, { name: t, data: n, isNonenumerable: r }),
  $w = ({
    showNonenumerable: e = !1,
    sortObjectKeys: t,
    nodeRenderer: n,
    ...r
  }) => {
    const o = Pw(e, t),
      i = n || Mw;
    return x.createElement(eg, { nodeRenderer: i, dataIterator: o, ...r });
  },
  jw = qs($w);
function Uw(e) {
  if (typeof e == "object") {
    let t = [];
    if (Array.isArray(e)) {
      const r = e.length;
      t = [...Array(r).keys()];
    } else e !== null && (t = Object.keys(e));
    const n = t.reduce((r, o) => {
      const i = e[o];
      return (
        typeof i == "object" &&
          i !== null &&
          Object.keys(i).reduce((u, a) => (u.includes(a) || u.push(a), u), r),
        r
      );
    }, []);
    return { rowHeaders: t, colHeaders: n };
  }
}
var zw = ({ rows: e, columns: t, rowsData: n }) => {
    const r = Qe("TableInspectorDataContainer"),
      o = Qe("TableInspectorLeftBorder");
    return x.createElement(
      "div",
      { style: r.div },
      x.createElement(
        "table",
        { style: r.table },
        x.createElement("colgroup", null),
        x.createElement(
          "tbody",
          null,
          e.map((i, l) =>
            x.createElement(
              "tr",
              { key: i, style: r.tr },
              x.createElement("td", { style: { ...r.td, ...o.none } }, i),
              t.map((u) => {
                const a = n[l];
                return typeof a == "object" && a !== null && tg.call(a, u)
                  ? x.createElement(
                      "td",
                      { key: u, style: { ...r.td, ...o.solid } },
                      x.createElement(Jr, { object: a[u] })
                    )
                  : x.createElement("td", {
                      key: u,
                      style: { ...r.td, ...o.solid },
                    });
              })
            )
          )
        )
      )
    );
  },
  Hw = (e) =>
    x.createElement(
      "div",
      {
        style: {
          position: "absolute",
          top: 1,
          right: 0,
          bottom: 1,
          display: "flex",
          alignItems: "center",
        },
      },
      e.children
    ),
  Vw = ({ sortAscending: e }) => {
    const t = Qe("TableInspectorSortIcon"),
      n = e ? "▲" : "▼";
    return x.createElement("div", { style: t }, n);
  },
  af = ({
    sortAscending: e = !1,
    sorted: t = !1,
    onClick: n = void 0,
    borderStyle: r = {},
    children: o,
    ...i
  }) => {
    const l = Qe("TableInspectorTH"),
      [u, a] = _.useState(!1),
      c = _.useCallback(() => a(!0), []),
      d = _.useCallback(() => a(!1), []);
    return x.createElement(
      "th",
      {
        ...i,
        style: { ...l.base, ...r, ...(u ? l.base[":hover"] : {}) },
        onMouseEnter: c,
        onMouseLeave: d,
        onClick: n,
      },
      x.createElement("div", { style: l.div }, o),
      t && x.createElement(Hw, null, x.createElement(Vw, { sortAscending: e }))
    );
  },
  Gw = ({
    indexColumnText: e = "(index)",
    columns: t = [],
    sorted: n,
    sortIndexColumn: r,
    sortColumn: o,
    sortAscending: i,
    onTHClick: l,
    onIndexTHClick: u,
  }) => {
    const a = Qe("TableInspectorHeaderContainer"),
      c = Qe("TableInspectorLeftBorder");
    return x.createElement(
      "div",
      { style: a.base },
      x.createElement(
        "table",
        { style: a.table },
        x.createElement(
          "tbody",
          null,
          x.createElement(
            "tr",
            null,
            x.createElement(
              af,
              {
                borderStyle: c.none,
                sorted: n && r,
                sortAscending: i,
                onClick: u,
              },
              e
            ),
            t.map((d) =>
              x.createElement(
                af,
                {
                  borderStyle: c.solid,
                  key: d,
                  sorted: n && o === d,
                  sortAscending: i,
                  onClick: l.bind(null, d),
                },
                d
              )
            )
          )
        )
      )
    );
  },
  Ww = ({ data: e, columns: t }) => {
    const n = Qe("TableInspector"),
      [{ sorted: r, sortIndexColumn: o, sortColumn: i, sortAscending: l }, u] =
        _.useState({
          sorted: !1,
          sortIndexColumn: !1,
          sortColumn: void 0,
          sortAscending: !1,
        }),
      a = _.useCallback(() => {
        u(({ sortIndexColumn: v, sortAscending: g }) => ({
          sorted: !0,
          sortIndexColumn: !0,
          sortColumn: void 0,
          sortAscending: v ? !g : !0,
        }));
      }, []),
      c = _.useCallback((v) => {
        u(({ sortColumn: g, sortAscending: C }) => ({
          sorted: !0,
          sortIndexColumn: !1,
          sortColumn: v,
          sortAscending: v === g ? !C : !0,
        }));
      }, []);
    if (typeof e != "object" || e === null) return x.createElement("div", null);
    let { rowHeaders: d, colHeaders: s } = Uw(e);
    t !== void 0 && (s = t);
    let f = d.map((v) => e[v]),
      p;
    if (
      (i !== void 0
        ? (p = f.map((v, g) =>
            typeof v == "object" && v !== null ? [v[i], g] : [void 0, g]
          ))
        : o && (p = d.map((v, g) => [d[g], g])),
      p !== void 0)
    ) {
      const v = (C, y) => (h, w) => {
          const A = C(h),
            F = C(w),
            N = typeof A,
            k = typeof F,
            O = (M, V) => (M < V ? -1 : M > V ? 1 : 0);
          let $;
          if (N === k) $ = O(A, F);
          else {
            const M = {
              string: 0,
              number: 1,
              object: 2,
              symbol: 3,
              boolean: 4,
              undefined: 5,
              function: 6,
            };
            $ = O(M[N], M[k]);
          }
          return y || ($ = -$), $;
        },
        g = p.sort(v((C) => C[0], l)).map((C) => C[1]);
      (d = g.map((C) => d[C])), (f = g.map((C) => f[C]));
    }
    return x.createElement(
      "div",
      { style: n.base },
      x.createElement(Gw, {
        columns: s,
        sorted: r,
        sortIndexColumn: o,
        sortColumn: i,
        sortAscending: l,
        onTHClick: c,
        onIndexTHClick: a,
      }),
      x.createElement(zw, { rows: d, columns: s, rowsData: f })
    );
  },
  Yw = qs(Ww),
  Xw = 80,
  ng = (e) =>
    e.childNodes.length === 0 ||
    (e.childNodes.length === 1 &&
      e.childNodes[0].nodeType === Node.TEXT_NODE &&
      e.textContent.length < Xw),
  Zw = ({ tagName: e, attributes: t, styles: n }) =>
    x.createElement(
      "span",
      { style: n.base },
      "<",
      x.createElement("span", { style: n.tagName }, e),
      (() => {
        if (t) {
          const r = [];
          for (let o = 0; o < t.length; o++) {
            const i = t[o];
            r.push(
              x.createElement(
                "span",
                { key: o },
                " ",
                x.createElement("span", { style: n.htmlAttributeName }, i.name),
                '="',
                x.createElement(
                  "span",
                  { style: n.htmlAttributeValue },
                  i.value
                ),
                '"'
              )
            );
          }
          return r;
        }
      })(),
      ">"
    ),
  uf = ({ tagName: e, isChildNode: t = !1, styles: n }) =>
    x.createElement(
      "span",
      { style: Object.assign({}, n.base, t && n.offsetLeft) },
      "</",
      x.createElement("span", { style: n.tagName }, e),
      ">"
    ),
  Qw = {
    1: "ELEMENT_NODE",
    3: "TEXT_NODE",
    7: "PROCESSING_INSTRUCTION_NODE",
    8: "COMMENT_NODE",
    9: "DOCUMENT_NODE",
    10: "DOCUMENT_TYPE_NODE",
    11: "DOCUMENT_FRAGMENT_NODE",
  },
  qw = ({ isCloseTag: e, data: t, expanded: n }) => {
    const r = Qe("DOMNodePreview");
    if (e)
      return x.createElement(uf, {
        styles: r.htmlCloseTag,
        isChildNode: !0,
        tagName: t.tagName,
      });
    switch (t.nodeType) {
      case Node.ELEMENT_NODE:
        return x.createElement(
          "span",
          null,
          x.createElement(Zw, {
            tagName: t.tagName,
            attributes: t.attributes,
            styles: r.htmlOpenTag,
          }),
          ng(t) ? t.textContent : !n && "…",
          !n &&
            x.createElement(uf, { tagName: t.tagName, styles: r.htmlCloseTag })
        );
      case Node.TEXT_NODE:
        return x.createElement("span", null, t.textContent);
      case Node.CDATA_SECTION_NODE:
        return x.createElement(
          "span",
          null,
          "<![CDATA[" + t.textContent + "]]>"
        );
      case Node.COMMENT_NODE:
        return x.createElement(
          "span",
          { style: r.htmlComment },
          "<!--",
          t.textContent,
          "-->"
        );
      case Node.PROCESSING_INSTRUCTION_NODE:
        return x.createElement("span", null, t.nodeName);
      case Node.DOCUMENT_TYPE_NODE:
        return x.createElement(
          "span",
          { style: r.htmlDoctype },
          "<!DOCTYPE ",
          t.name,
          t.publicId ? ` PUBLIC "${t.publicId}"` : "",
          !t.publicId && t.systemId ? " SYSTEM" : "",
          t.systemId ? ` "${t.systemId}"` : "",
          ">"
        );
      case Node.DOCUMENT_NODE:
        return x.createElement("span", null, t.nodeName);
      case Node.DOCUMENT_FRAGMENT_NODE:
        return x.createElement("span", null, t.nodeName);
      default:
        return x.createElement("span", null, Qw[t.nodeType]);
    }
  },
  Jw = function* (e) {
    if (e && e.childNodes) {
      if (ng(e)) return;
      for (let n = 0; n < e.childNodes.length; n++) {
        const r = e.childNodes[n];
        (r.nodeType === Node.TEXT_NODE && r.textContent.trim().length === 0) ||
          (yield { name: `${r.tagName}[${n}]`, data: r });
      }
      e.tagName &&
        (yield {
          name: "CLOSE_TAG",
          data: { tagName: e.tagName },
          isCloseTag: !0,
        });
    }
  },
  Kw = (e) => x.createElement(eg, { nodeRenderer: qw, dataIterator: Jw, ...e }),
  eS = qs(Kw),
  tS = kw(xw()),
  nS = ({ table: e = !1, data: t, ...n }) =>
    e
      ? x.createElement(Yw, { data: t, ...n })
      : (0, tS.default)(t)
      ? x.createElement(eS, { data: t, ...n })
      : x.createElement(jw, { data: t, ...n });
const rS = ({ dispatch: e, globalState: t }) => {
    const [n, r] = _.useState(!1),
      o = "Log of events triggered by user.";
    return E("li", {
      children: z("button", {
        "aria-label": o,
        title: o,
        onClick: () => r(!0),
        className: n ? "ladle-active" : "",
        "data-testid": "addon-action",
        type: "button",
        children: [
          E(fy, {}),
          E("span", { className: "ladle-addon-tooltip", children: o }),
          E("label", { children: "Actions" }),
          t.action.length
            ? E("div", { className: "ladle-badge", children: t.action.length })
            : null,
          z(Cr, {
            maxWidth: "60em",
            isOpen: n,
            close: () => r(!1),
            label: "Dialog with a log of events triggered by user.",
            children: [
              t.action.map((i, l) =>
                E(
                  nS,
                  {
                    table: !1,
                    sortObjectKeys: !0,
                    theme: {
                      ...(t.theme === we.Light ? Q0 : Z0),
                      BASE_BACKGROUND_COLOR: "var(--ladle-bg-color-secondary)",
                    },
                    showNonenumerable: !1,
                    name: i.name,
                    data: i.event,
                  },
                  l
                )
              ),
              E("button", {
                onClick: () => {
                  e({ type: ne.UpdateAction, clear: !0, value: void 0 });
                },
                type: "button",
                children: "Clear actions",
              }),
            ],
          }),
        ],
      }),
    });
  },
  oS = (e) => {
    const t = Ut.parse(e).rtl;
    return t === "true" ? !0 : t === "false" ? !1 : re.addons.rtl.defaultState;
  },
  iS = ({ dispatch: e, globalState: t }) => {
    const n = "Switch text direction to right to left.",
      r = "Switch text direction to left to right.";
    return E("li", {
      children: z("button", {
        "aria-label": t.rtl ? r : n,
        title: t.rtl ? r : n,
        className: t.rtl ? "ladle-active" : "",
        onClick: () => e({ type: ne.UpdateRtl, value: !t.rtl }),
        type: "button",
        children: [
          E(ny, {}),
          E("span", {
            className: "ladle-addon-tooltip",
            children: t.rtl ? r : n,
          }),
          E("label", { children: "Right to left" }),
        ],
      }),
    });
  },
  lS = () => {
    const [e, t] = _.useState(!1),
      n = "Get more information about Ladle.";
    return E("li", {
      children: z("button", {
        "aria-label": n,
        title: n,
        onClick: () => t(!0),
        className: e ? "ladle-active" : "",
        type: "button",
        children: [
          E(ty, {}),
          E("span", { className: "ladle-addon-tooltip", children: n }),
          E("label", { children: "About Ladle" }),
          z(Cr, {
            isOpen: e,
            close: () => t(!1),
            label: "Dialog with information about Ladle.",
            children: [
              E("p", {
                children:
                  "Ladle is a modern and fast playground for React components powered by Vite. For more information:",
              }),
              z("ul", {
                children: [
                  E("li", {
                    children: E("a", {
                      href: "https://www.ladle.dev/",
                      children: "Ladle.dev",
                    }),
                  }),
                  E("li", {
                    children: E("a", {
                      href: "https://github.com/tajo/ladle",
                      children: "GitHub",
                    }),
                  }),
                  E("li", {
                    children: E("a", {
                      href: "https://ladle.dev/new",
                      children: "StackBlitz",
                    }),
                  }),
                  E("li", {
                    children: E("a", {
                      href: "https://discord.gg/H6FSHjyW7e",
                      children: "Discord",
                    }),
                  }),
                ],
              }),
              E("p", { children: E("strong", { children: "Shortcuts" }) }),
              E("ul", {
                children: z("li", {
                  children: [
                    E(vr, { children: "/" }),
                    " or ",
                    E(vr, { children: "cmd+p" }),
                    " - search stories",
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    });
  },
  aS = async (e, t, n) => {
    const r = await at(() => import("./axe-a788c271.js").then((o) => o.a), []);
    try {
      const o = await r.default.run(document.getElementsByTagName("main"));
      e(o.violations), t(!0), n && n.setAttribute("aria-hidden", "true");
    } catch {}
  },
  uS = ({ violation: e }) => {
    const [t, n] = _.useState(!1);
    return z("li", {
      children: [
        e.help,
        " (",
        e.nodes.length,
        ").",
        " ",
        t
          ? z(ki, {
              children: [
                z("ul", {
                  children: [
                    z("li", { children: ["ID: ", e.id] }),
                    z("li", { children: ["Impact: ", e.impact] }),
                    z("li", { children: ["Description: ", e.description] }),
                    E("li", {
                      children: E("a", {
                        href: e.helpUrl,
                        children: "Documentation",
                      }),
                    }),
                  ],
                }),
                E("p", { children: "Violating nodes:" }),
                E("ul", {
                  children: e.nodes.map((r) =>
                    E("li", { children: E(vr, { children: r.html }) }, r.html)
                  ),
                }),
                E("p", {
                  children: E("a", {
                    href: "#",
                    onClick: () => n(!1),
                    children: "Hide details",
                  }),
                }),
              ],
            })
          : E("a", {
              href: "#",
              onClick: () => n(!0),
              children: "Show details",
            }),
      ],
    });
  },
  sS = ({ reportFinished: e, violations: t }) =>
    e
      ? t.length === 0
        ? z("p", {
            children: [
              "There are no ",
              E("a", {
                href: "https://github.com/dequelabs/axe-core",
                children: "axe",
              }),
              " ",
              "accessibility violations. Good job!",
            ],
          })
        : z(ki, {
            children: [
              z("h3", {
                children: [
                  "There are ",
                  t.length,
                  " ",
                  E("a", {
                    href: "https://github.com/dequelabs/axe-core",
                    children: "axe",
                  }),
                  " accessibility violations",
                ],
              }),
              E("ul", {
                children: t.map((n) => E(uS, { violation: n }, n.id)),
              }),
            ],
          })
      : E("p", { children: "Report is loading..." }),
  cS = () => {
    const [e, t] = _.useState(!1),
      [n, r] = _.useState(!1),
      [o, i] = _.useState([]);
    _.useEffect(() => {}, []);
    const l = "Show accessibility report.";
    return E("li", {
      children: z("button", {
        "aria-label": l,
        "data-testid": "addon-a11y",
        title: l,
        onClick: () => {
          aS(i, r, null).catch(console.error), setTimeout(() => t(!e), 100);
        },
        className: e ? "a11y-active" : "",
        type: "button",
        children: [
          E(cy, {}),
          E("span", { className: "ladle-addon-tooltip", children: l }),
          E("label", { children: "Accessibility report" }),
          o.length
            ? E("div", { className: "ladle-badge", children: o.length })
            : null,
          E(Cr, {
            isOpen: e,
            close: () => t(!1),
            label: "Dialog with the story accessibility report.",
            children: E(sS, { reportFinished: n, violations: o }),
          }),
        ],
      }),
    });
  },
  dS = (e) => {
    const t = Ut.parse(e).width;
    let n = 0;
    return (
      Object.keys(re.addons.width.options).forEach((r) => {
        (r === t || parseInt(t, 10) === re.addons.width.options[r]) &&
          (n = re.addons.width.options[r]);
      }),
      n !== 0 ? n : re.addons.width.defaultState
    );
  },
  fS = ({ globalState: e, dispatch: t }) => {
    const n = "Change the story viewport.",
      [r, o] = _.useState(!1),
      i = sn[e.story];
    let l = i && i.meta ? i.meta.meta.width : 0,
      u = re.addons.width.options;
    return (
      Object.keys(u).forEach((a) => {
        a === l && (l = u[a]);
      }),
      l && !Object.values(u).includes(l) && (u = { custom: l, ...u }),
      E("li", {
        children: z("button", {
          "aria-label": n,
          "data-testid": "addon-width",
          title: n,
          onClick: () => o(!0),
          className: r ? "width-active" : "",
          type: "button",
          children: [
            E(dy, {}),
            E("span", { className: "ladle-addon-tooltip", children: n }),
            E("label", { children: "Set story width" }),
            z(Cr, {
              isOpen: r,
              close: () => o(!1),
              label: "Dialog with the story width selector.",
              children: [
                E("p", { children: "Select story width" }),
                z("div", {
                  children: [
                    E("input", {
                      onChange: () => t({ type: ne.UpdateWidth, value: 0 }),
                      type: "radio",
                      id: "width-unset",
                      name: "width",
                      value: 0,
                      checked: e.width === 0,
                    }),
                    E("label", {
                      htmlFor: "width-unset",
                      style: { paddingLeft: "8px" },
                      children: "unset",
                    }),
                  ],
                }),
                Object.keys(u).map((a) =>
                  z(
                    "div",
                    {
                      children: [
                        E("input", {
                          onChange: () =>
                            t({ type: ne.UpdateWidth, value: u[a] }),
                          type: "radio",
                          id: `width-${a}`,
                          name: "width",
                          value: u[a],
                          checked: e.width === u[a],
                        }),
                        z("label", {
                          htmlFor: `width-${a}`,
                          style: { paddingLeft: "8px" },
                          children: [u[a], "px - ", a],
                        }),
                      ],
                    },
                    a
                  )
                ),
                E("p", {}),
              ],
            }),
          ],
        }),
      })
    );
  },
  pS = ({ globalState: e, dispatch: t }) =>
    Object.keys(re.addons).every((n) => re.addons[n].enabled === !1)
      ? null
      : E("header", {
          role: "banner",
          className: "ladle-addons",
          children: z("ul", {
            children: [
              re.addons.control.enabled &&
                Object.keys(e.control).length > 0 &&
                E(tE, { globalState: e, dispatch: t }),
              re.addons.theme.enabled && E(EE, { globalState: e, dispatch: t }),
              re.addons.mode.enabled && E(Ew, { globalState: e, dispatch: t }),
              re.addons.width.enabled && E(fS, { globalState: e, dispatch: t }),
              re.addons.rtl.enabled && E(iS, { globalState: e, dispatch: t }),
              re.addons.source.enabled &&
                E(iw, { globalState: e, dispatch: t }),
              re.addons.a11y.enabled && E(cS, {}),
              re.addons.ladle.enabled && E(lS, {}),
              re.addons.control.enabled &&
                e.action.length > 0 &&
                E(rS, { globalState: e, dispatch: t }),
            ],
          }),
        }),
  hS = (e, t) => {
    switch ((bt("Action dispatched", t), t.type)) {
      case ne.UpdateAll:
        return { ...e, ...t.value };
      case ne.UpdateMode:
        return { ...e, mode: t.value };
      case ne.UpdateAction:
        const n = { ...e };
        return (
          t.clear && (n.action = []),
          t.value ? { ...e, action: [...n.action, t.value] } : n
        );
      case ne.UpdateRtl:
        return { ...e, rtl: t.value };
      case ne.UpdateSource:
        return { ...e, source: t.value };
      case ne.UpdateStory:
        return {
          ...e,
          story: t.value,
          control: {},
          controlInitialized: !1,
          width: 0,
          action: [],
        };
      case ne.UpdateTheme:
        return { ...e, theme: t.value };
      case ne.UpdateWidth:
        return { ...e, width: t.value };
      case ne.UpdateControl:
        return { ...e, control: t.value, controlInitialized: !0 };
      case ne.UpdateControlIntialized:
        return { ...e, controlInitialized: t.value };
      default:
        return e;
    }
  },
  $u = bf(Object.keys(sn), re.storyOrder);
bt("Stories found", $u);
const _a = (e, t) => ({
    theme: S0(e),
    mode: vw(e),
    story: Cf(e, re.defaultStory),
    rtl: oS(e),
    source: rw(e),
    width: dS(e),
    control: E0(e, t ? t.control : {}),
    action: [],
    controlInitialized: !1,
  }),
  sf = () => {
    const e = _a(location.search),
      [t, n] = _.useReducer(hS, e),
      r = _.useRef({});
    let o = "";
    t.control &&
      Object.keys(t.control).forEach((l) => {
        t.control[l].type === "background" && (o = t.control[l].value || "");
      }),
      _.useEffect(() => {
        document.getElementsByClassName(
          "ladle-background"
        )[0].style.background = o;
      }, [o]),
      _.useEffect(() => {
        r.current = t;
      }),
      _.useEffect(() => {
        window.ladleDispatch = n;
      }, []);
    const i = r.current;
    return (
      _.useEffect(() => {
        var l, u;
        bt("Global state update", t),
          Om(location.search) || Sa(t),
          Sa(t),
          t.story !== i.story && (document.title = `${Af(t.story)} | Ladle`),
          t.theme !== i.theme &&
            document.documentElement.setAttribute("data-theme", t.theme),
          t.rtl !== i.rtl &&
            (t.rtl
              ? document.documentElement.setAttribute("dir", "rtl")
              : document.documentElement.removeAttribute("dir")),
          t.story && sn[t.story] && sn[t.story].entry.endsWith(".mdx")
            ? document.documentElement.setAttribute("data-mdx", "true")
            : document.documentElement.removeAttribute("data-mdx"),
          t.mode !== i.mode &&
            (document.documentElement.setAttribute("data-mode", t.mode),
            t.mode === rt.Preview
              ? (l = document.getElementById("ladle-root")) == null ||
                l.removeAttribute("class")
              : (u = document.getElementById("ladle-root")) == null ||
                u.setAttribute("class", "ladle-wrapper"));
      }, [t]),
      _.useEffect(() => {
        const l = P0.listen(({ location: u, action: a }) => {
          if (a === _n.Pop) {
            const c = {};
            Object.keys(t.control).forEach((s) => {
              const f = _a(u.search, t).control[s];
              c[s] = {
                ...t.control[s],
                value: f ? f.value : t.control[s].defaultValue,
              };
            });
            const d = _a(u.search, t);
            n({
              type: ne.UpdateAll,
              value: {
                ...d,
                control: c,
                controlInitialized: t.story === d.story,
              },
            });
          }
        });
        return () => l();
      }, [t]),
      t.mode === rt.Preview
        ? E(Oc.Provider, {
            value: { globalState: t, dispatch: n },
            children: E(Kd, { globalState: t, dispatch: n }),
          })
        : z(Oc.Provider, {
            value: { globalState: t, dispatch: n },
            children: [
              E("main", {
                className: "ladle-main",
                children:
                  $u.length > 0
                    ? E(Kd, { globalState: t, dispatch: n })
                    : E(uw, {}),
              }),
              E(yw, {
                stories: $u,
                story: t.story,
                updateStory: (l) => {
                  Sa({ ...t, story: l, control: {} }),
                    n({ type: ne.UpdateStory, value: l });
                },
              }),
              E(pS, { globalState: t, dispatch: n }),
            ],
          })
    );
  },
  cf = document.getElementById("ladle-root");
wE && rl ? rl(cf).render(E(sf, {})) : _l.render(E(sf, {}), cf);
export { x as R, E as a, $o as c, Eo as g, z as j, _ as r };
