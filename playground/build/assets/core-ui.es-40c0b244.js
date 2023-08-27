import { R as b, r as s } from "./index-e3d0727e.js";
var Nt = { exports: {} };
(function (e) {
  var t = (function (r) {
    var n = Object.prototype,
      o = n.hasOwnProperty,
      l =
        Object.defineProperty ||
        function (f, c, m) {
          f[c] = m.value;
        },
      a,
      i = typeof Symbol == "function" ? Symbol : {},
      u = i.iterator || "@@iterator",
      d = i.asyncIterator || "@@asyncIterator",
      p = i.toStringTag || "@@toStringTag";
    function v(f, c, m) {
      return (
        Object.defineProperty(f, c, {
          value: m,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        }),
        f[c]
      );
    }
    try {
      v({}, "");
    } catch {
      v = function (c, m, M) {
        return (c[m] = M);
      };
    }
    function y(f, c, m, M) {
      var E = c && c.prototype instanceof S ? c : S,
        I = Object.create(E.prototype),
        B = new re(M || []);
      return l(I, "_invoke", { value: te(f, m, B) }), I;
    }
    r.wrap = y;
    function w(f, c, m) {
      try {
        return { type: "normal", arg: f.call(c, m) };
      } catch (M) {
        return { type: "throw", arg: M };
      }
    }
    var h = "suspendedStart",
      A = "suspendedYield",
      x = "executing",
      N = "completed",
      g = {};
    function S() {}
    function P() {}
    function k() {}
    var z = {};
    v(z, u, function () {
      return this;
    });
    var D = Object.getPrototypeOf,
      Q = D && D(D(_([])));
    Q && Q !== n && o.call(Q, u) && (z = Q);
    var L = (k.prototype = S.prototype = Object.create(z));
    (P.prototype = k),
      l(L, "constructor", { value: k, configurable: !0 }),
      l(k, "constructor", { value: P, configurable: !0 }),
      (P.displayName = v(k, p, "GeneratorFunction"));
    function J(f) {
      ["next", "throw", "return"].forEach(function (c) {
        v(f, c, function (m) {
          return this._invoke(c, m);
        });
      });
    }
    (r.isGeneratorFunction = function (f) {
      var c = typeof f == "function" && f.constructor;
      return c
        ? c === P || (c.displayName || c.name) === "GeneratorFunction"
        : !1;
    }),
      (r.mark = function (f) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(f, k)
            : ((f.__proto__ = k), v(f, p, "GeneratorFunction")),
          (f.prototype = Object.create(L)),
          f
        );
      }),
      (r.awrap = function (f) {
        return { __await: f };
      });
    function C(f, c) {
      function m(I, B, H, q) {
        var G = w(f[I], f, B);
        if (G.type === "throw") q(G.arg);
        else {
          var Te = G.arg,
            he = Te.value;
          return he && typeof he == "object" && o.call(he, "__await")
            ? c.resolve(he.__await).then(
                function (le) {
                  m("next", le, H, q);
                },
                function (le) {
                  m("throw", le, H, q);
                }
              )
            : c.resolve(he).then(
                function (le) {
                  (Te.value = le), H(Te);
                },
                function (le) {
                  return m("throw", le, H, q);
                }
              );
        }
      }
      var M;
      function E(I, B) {
        function H() {
          return new c(function (q, G) {
            m(I, B, q, G);
          });
        }
        return (M = M ? M.then(H, H) : H());
      }
      l(this, "_invoke", { value: E });
    }
    J(C.prototype),
      v(C.prototype, d, function () {
        return this;
      }),
      (r.AsyncIterator = C),
      (r.async = function (f, c, m, M, E) {
        E === void 0 && (E = Promise);
        var I = new C(y(f, c, m, M), E);
        return r.isGeneratorFunction(c)
          ? I
          : I.next().then(function (B) {
              return B.done ? B.value : I.next();
            });
      });
    function te(f, c, m) {
      var M = h;
      return function (I, B) {
        if (M === x) throw new Error("Generator is already running");
        if (M === N) {
          if (I === "throw") throw B;
          return X();
        }
        for (m.method = I, m.arg = B; ; ) {
          var H = m.delegate;
          if (H) {
            var q = K(H, m);
            if (q) {
              if (q === g) continue;
              return q;
            }
          }
          if (m.method === "next") m.sent = m._sent = m.arg;
          else if (m.method === "throw") {
            if (M === h) throw ((M = N), m.arg);
            m.dispatchException(m.arg);
          } else m.method === "return" && m.abrupt("return", m.arg);
          M = x;
          var G = w(f, c, m);
          if (G.type === "normal") {
            if (((M = m.done ? N : A), G.arg === g)) continue;
            return { value: G.arg, done: m.done };
          } else
            G.type === "throw" &&
              ((M = N), (m.method = "throw"), (m.arg = G.arg));
        }
      };
    }
    function K(f, c) {
      var m = c.method,
        M = f.iterator[m];
      if (M === a)
        return (
          (c.delegate = null),
          (m === "throw" &&
            f.iterator.return &&
            ((c.method = "return"),
            (c.arg = a),
            K(f, c),
            c.method === "throw")) ||
            (m !== "return" &&
              ((c.method = "throw"),
              (c.arg = new TypeError(
                "The iterator does not provide a '" + m + "' method"
              )))),
          g
        );
      var E = w(M, f.iterator, c.arg);
      if (E.type === "throw")
        return (c.method = "throw"), (c.arg = E.arg), (c.delegate = null), g;
      var I = E.arg;
      if (!I)
        return (
          (c.method = "throw"),
          (c.arg = new TypeError("iterator result is not an object")),
          (c.delegate = null),
          g
        );
      if (I.done)
        (c[f.resultName] = I.value),
          (c.next = f.nextLoc),
          c.method !== "return" && ((c.method = "next"), (c.arg = a));
      else return I;
      return (c.delegate = null), g;
    }
    J(L),
      v(L, p, "Generator"),
      v(L, u, function () {
        return this;
      }),
      v(L, "toString", function () {
        return "[object Generator]";
      });
    function me(f) {
      var c = { tryLoc: f[0] };
      1 in f && (c.catchLoc = f[1]),
        2 in f && ((c.finallyLoc = f[2]), (c.afterLoc = f[3])),
        this.tryEntries.push(c);
    }
    function j(f) {
      var c = f.completion || {};
      (c.type = "normal"), delete c.arg, (f.completion = c);
    }
    function re(f) {
      (this.tryEntries = [{ tryLoc: "root" }]),
        f.forEach(me, this),
        this.reset(!0);
    }
    r.keys = function (f) {
      var c = Object(f),
        m = [];
      for (var M in c) m.push(M);
      return (
        m.reverse(),
        function E() {
          for (; m.length; ) {
            var I = m.pop();
            if (I in c) return (E.value = I), (E.done = !1), E;
          }
          return (E.done = !0), E;
        }
      );
    };
    function _(f) {
      if (f) {
        var c = f[u];
        if (c) return c.call(f);
        if (typeof f.next == "function") return f;
        if (!isNaN(f.length)) {
          var m = -1,
            M = function E() {
              for (; ++m < f.length; )
                if (o.call(f, m)) return (E.value = f[m]), (E.done = !1), E;
              return (E.value = a), (E.done = !0), E;
            };
          return (M.next = M);
        }
      }
      return { next: X };
    }
    r.values = _;
    function X() {
      return { value: a, done: !0 };
    }
    return (
      (re.prototype = {
        constructor: re,
        reset: function (f) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = a),
            (this.done = !1),
            (this.delegate = null),
            (this.method = "next"),
            (this.arg = a),
            this.tryEntries.forEach(j),
            !f)
          )
            for (var c in this)
              c.charAt(0) === "t" &&
                o.call(this, c) &&
                !isNaN(+c.slice(1)) &&
                (this[c] = a);
        },
        stop: function () {
          this.done = !0;
          var f = this.tryEntries[0],
            c = f.completion;
          if (c.type === "throw") throw c.arg;
          return this.rval;
        },
        dispatchException: function (f) {
          if (this.done) throw f;
          var c = this;
          function m(q, G) {
            return (
              (I.type = "throw"),
              (I.arg = f),
              (c.next = q),
              G && ((c.method = "next"), (c.arg = a)),
              !!G
            );
          }
          for (var M = this.tryEntries.length - 1; M >= 0; --M) {
            var E = this.tryEntries[M],
              I = E.completion;
            if (E.tryLoc === "root") return m("end");
            if (E.tryLoc <= this.prev) {
              var B = o.call(E, "catchLoc"),
                H = o.call(E, "finallyLoc");
              if (B && H) {
                if (this.prev < E.catchLoc) return m(E.catchLoc, !0);
                if (this.prev < E.finallyLoc) return m(E.finallyLoc);
              } else if (B) {
                if (this.prev < E.catchLoc) return m(E.catchLoc, !0);
              } else if (H) {
                if (this.prev < E.finallyLoc) return m(E.finallyLoc);
              } else throw new Error("try statement without catch or finally");
            }
          }
        },
        abrupt: function (f, c) {
          for (var m = this.tryEntries.length - 1; m >= 0; --m) {
            var M = this.tryEntries[m];
            if (
              M.tryLoc <= this.prev &&
              o.call(M, "finallyLoc") &&
              this.prev < M.finallyLoc
            ) {
              var E = M;
              break;
            }
          }
          E &&
            (f === "break" || f === "continue") &&
            E.tryLoc <= c &&
            c <= E.finallyLoc &&
            (E = null);
          var I = E ? E.completion : {};
          return (
            (I.type = f),
            (I.arg = c),
            E
              ? ((this.method = "next"), (this.next = E.finallyLoc), g)
              : this.complete(I)
          );
        },
        complete: function (f, c) {
          if (f.type === "throw") throw f.arg;
          return (
            f.type === "break" || f.type === "continue"
              ? (this.next = f.arg)
              : f.type === "return"
              ? ((this.rval = this.arg = f.arg),
                (this.method = "return"),
                (this.next = "end"))
              : f.type === "normal" && c && (this.next = c),
            g
          );
        },
        finish: function (f) {
          for (var c = this.tryEntries.length - 1; c >= 0; --c) {
            var m = this.tryEntries[c];
            if (m.finallyLoc === f)
              return this.complete(m.completion, m.afterLoc), j(m), g;
          }
        },
        catch: function (f) {
          for (var c = this.tryEntries.length - 1; c >= 0; --c) {
            var m = this.tryEntries[c];
            if (m.tryLoc === f) {
              var M = m.completion;
              if (M.type === "throw") {
                var E = M.arg;
                j(m);
              }
              return E;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function (f, c, m) {
          return (
            (this.delegate = { iterator: _(f), resultName: c, nextLoc: m }),
            this.method === "next" && (this.arg = a),
            g
          );
        },
      }),
      r
    );
  })(e.exports);
  try {
    regeneratorRuntime = t;
  } catch {
    typeof globalThis == "object"
      ? (globalThis.regeneratorRuntime = t)
      : Function("r", "regeneratorRuntime = r")(t);
  }
})(Nt);
var st = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Ve = b.createContext && b.createContext(st),
  ae =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (ae =
          Object.assign ||
          function (e) {
            for (var t, r = 1, n = arguments.length; r < n; r++) {
              t = arguments[r];
              for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            }
            return e;
          }),
        ae.apply(this, arguments)
      );
    },
  kt =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var r = {};
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) &&
          t.indexOf(n) < 0 &&
          (r[n] = e[n]);
      if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
          t.indexOf(n[o]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
            (r[n[o]] = e[n[o]]);
      return r;
    };
function ut(e) {
  return (
    e &&
    e.map(function (t, r) {
      return b.createElement(t.tag, ae({ key: r }, t.attr), ut(t.child));
    })
  );
}
function ze(e) {
  return function (t) {
    return b.createElement(It, ae({ attr: ae({}, e.attr) }, t), ut(e.child));
  };
}
function It(e) {
  var t = function (r) {
    var n = e.attr,
      o = e.size,
      l = e.title,
      a = kt(e, ["attr", "size", "title"]),
      i = o || r.size || "1em",
      u;
    return (
      r.className && (u = r.className),
      e.className && (u = (u ? u + " " : "") + e.className),
      b.createElement(
        "svg",
        ae(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          r.attr,
          n,
          a,
          {
            className: u,
            style: ae(ae({ color: e.color || r.color }, r.style), e.style),
            height: i,
            width: i,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        l && b.createElement("title", null, l),
        e.children
      )
    );
  };
  return Ve !== void 0
    ? b.createElement(Ve.Consumer, null, function (r) {
        return t(r);
      })
    : t(st);
}
function Pt(e) {
  return ze({
    tag: "svg",
    attr: { version: "1.1", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M16 8c-0.020-1.045-0.247-2.086-0.665-3.038-0.417-0.953-1.023-1.817-1.766-2.53s-1.624-1.278-2.578-1.651c-0.953-0.374-1.978-0.552-2.991-0.531-1.013 0.020-2.021 0.24-2.943 0.646-0.923 0.405-1.758 0.992-2.449 1.712s-1.237 1.574-1.597 2.497c-0.361 0.923-0.533 1.914-0.512 2.895 0.020 0.981 0.234 1.955 0.627 2.847 0.392 0.892 0.961 1.7 1.658 2.368s1.523 1.195 2.416 1.543c0.892 0.348 1.851 0.514 2.799 0.493 0.949-0.020 1.89-0.227 2.751-0.608 0.862-0.379 1.642-0.929 2.287-1.604s1.154-1.472 1.488-2.335c0.204-0.523 0.342-1.069 0.415-1.622 0.019 0.001 0.039 0.002 0.059 0.002 0.552 0 1-0.448 1-1 0-0.028-0.001-0.056-0.004-0.083h0.004zM14.411 10.655c-0.367 0.831-0.898 1.584-1.55 2.206s-1.422 1.112-2.254 1.434c-0.832 0.323-1.723 0.476-2.608 0.454-0.884-0.020-1.759-0.215-2.56-0.57-0.801-0.354-1.526-0.867-2.125-1.495s-1.071-1.371-1.38-2.173c-0.31-0.801-0.457-1.66-0.435-2.512s0.208-1.694 0.551-2.464c0.342-0.77 0.836-1.468 1.441-2.044s1.321-1.029 2.092-1.326c0.771-0.298 1.596-0.438 2.416-0.416s1.629 0.202 2.368 0.532c0.74 0.329 1.41 0.805 1.963 1.387s0.988 1.27 1.272 2.011c0.285 0.74 0.418 1.532 0.397 2.32h0.004c-0.002 0.027-0.004 0.055-0.004 0.083 0 0.516 0.39 0.94 0.892 0.994-0.097 0.544-0.258 1.075-0.481 1.578z",
        },
      },
    ],
  })(e);
}
function ct(e) {
  var t,
    r,
    n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = ct(e[t])) && (n && (n += " "), (n += r));
    else for (t in e) e[t] && (n && (n += " "), (n += t));
  return n;
}
function Tt() {
  for (var e, t, r = 0, n = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = ct(e)) && (n && (n += " "), (n += t));
  return n;
}
function St() {
  for (var e = 0, t, r, n = ""; e < arguments.length; )
    (t = arguments[e++]) && (r = dt(t)) && (n && (n += " "), (n += r));
  return n;
}
function dt(e) {
  if (typeof e == "string") return e;
  for (var t, r = "", n = 0; n < e.length; n++)
    e[n] && (t = dt(e[n])) && (r && (r += " "), (r += t));
  return r;
}
var Ce = "-";
function Rt(e) {
  var t = Ft(e),
    r = e.conflictingClassGroups,
    n = e.conflictingClassGroupModifiers,
    o = n === void 0 ? {} : n;
  function l(i) {
    var u = i.split(Ce);
    return u[0] === "" && u.length !== 1 && u.shift(), ft(u, t) || Ot(i);
  }
  function a(i, u) {
    var d = r[i] || [];
    return u && o[i] ? [].concat(d, o[i]) : d;
  }
  return { getClassGroupId: l, getConflictingClassGroupIds: a };
}
function ft(e, t) {
  var a;
  if (e.length === 0) return t.classGroupId;
  var r = e[0],
    n = t.nextPart.get(r),
    o = n ? ft(e.slice(1), n) : void 0;
  if (o) return o;
  if (t.validators.length !== 0) {
    var l = e.join(Ce);
    return (a = t.validators.find(function (i) {
      var u = i.validator;
      return u(l);
    })) == null
      ? void 0
      : a.classGroupId;
  }
}
var Je = /^\[(.+)\]$/;
function Ot(e) {
  if (Je.test(e)) {
    var t = Je.exec(e)[1],
      r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r) return "arbitrary.." + r;
  }
}
function Ft(e) {
  var t = e.theme,
    r = e.prefix,
    n = { nextPart: new Map(), validators: [] },
    o = Lt(Object.entries(e.classGroups), r);
  return (
    o.forEach(function (l) {
      var a = l[0],
        i = l[1];
      Le(i, n, a, t);
    }),
    n
  );
}
function Le(e, t, r, n) {
  e.forEach(function (o) {
    if (typeof o == "string") {
      var l = o === "" ? t : _e(t, o);
      l.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (Dt(o)) {
        Le(o(n), t, r, n);
        return;
      }
      t.validators.push({ validator: o, classGroupId: r });
      return;
    }
    Object.entries(o).forEach(function (a) {
      var i = a[0],
        u = a[1];
      Le(u, _e(t, i), r, n);
    });
  });
}
function _e(e, t) {
  var r = e;
  return (
    t.split(Ce).forEach(function (n) {
      r.nextPart.has(n) ||
        r.nextPart.set(n, { nextPart: new Map(), validators: [] }),
        (r = r.nextPart.get(n));
    }),
    r
  );
}
function Dt(e) {
  return e.isThemeGetter;
}
function Lt(e, t) {
  return t
    ? e.map(function (r) {
        var n = r[0],
          o = r[1],
          l = o.map(function (a) {
            return typeof a == "string"
              ? t + a
              : typeof a == "object"
              ? Object.fromEntries(
                  Object.entries(a).map(function (i) {
                    var u = i[0],
                      d = i[1];
                    return [t + u, d];
                  })
                )
              : a;
          });
        return [n, l];
      })
    : e;
}
function jt(e) {
  if (e < 1) return { get: function () {}, set: function () {} };
  var t = 0,
    r = new Map(),
    n = new Map();
  function o(l, a) {
    r.set(l, a), t++, t > e && ((t = 0), (n = r), (r = new Map()));
  }
  return {
    get: function (l) {
      var a = r.get(l);
      if (a !== void 0) return a;
      if ((a = n.get(l)) !== void 0) return o(l, a), a;
    },
    set: function (l, a) {
      r.has(l) ? r.set(l, a) : o(l, a);
    },
  };
}
var mt = "!";
function Bt(e) {
  var t = e.separator || ":",
    r = t.length === 1,
    n = t[0],
    o = t.length;
  return function (l) {
    for (var a = [], i = 0, u = 0, d, p = 0; p < l.length; p++) {
      var v = l[p];
      if (i === 0) {
        if (v === n && (r || l.slice(p, p + o) === t)) {
          a.push(l.slice(u, p)), (u = p + o);
          continue;
        }
        if (v === "/") {
          d = p;
          continue;
        }
      }
      v === "[" ? i++ : v === "]" && i--;
    }
    var y = a.length === 0 ? l : l.substring(u),
      w = y.startsWith(mt),
      h = w ? y.substring(1) : y,
      A = d && d > u ? d - u : void 0;
    return {
      modifiers: a,
      hasImportantModifier: w,
      baseClassName: h,
      maybePostfixModifierPosition: A,
    };
  };
}
function Ht(e) {
  if (e.length <= 1) return e;
  var t = [],
    r = [];
  return (
    e.forEach(function (n) {
      var o = n[0] === "[";
      o ? (t.push.apply(t, r.sort().concat([n])), (r = [])) : r.push(n);
    }),
    t.push.apply(t, r.sort()),
    t
  );
}
function Gt(e) {
  return { cache: jt(e.cacheSize), splitModifiers: Bt(e), ...Rt(e) };
}
var zt = /\s+/;
function Ct(e, t) {
  var r = t.splitModifiers,
    n = t.getClassGroupId,
    o = t.getConflictingClassGroupIds,
    l = new Set();
  return e
    .trim()
    .split(zt)
    .map(function (a) {
      var i = r(a),
        u = i.modifiers,
        d = i.hasImportantModifier,
        p = i.baseClassName,
        v = i.maybePostfixModifierPosition,
        y = n(v ? p.substring(0, v) : p),
        w = !!v;
      if (!y) {
        if (!v) return { isTailwindClass: !1, originalClassName: a };
        if (((y = n(p)), !y))
          return { isTailwindClass: !1, originalClassName: a };
        w = !1;
      }
      var h = Ht(u).join(":"),
        A = d ? h + mt : h;
      return {
        isTailwindClass: !0,
        modifierId: A,
        classGroupId: y,
        originalClassName: a,
        hasPostfixModifier: w,
      };
    })
    .reverse()
    .filter(function (a) {
      if (!a.isTailwindClass) return !0;
      var i = a.modifierId,
        u = a.classGroupId,
        d = a.hasPostfixModifier,
        p = i + u;
      return l.has(p)
        ? !1
        : (l.add(p),
          o(u, d).forEach(function (v) {
            return l.add(i + v);
          }),
          !0);
    })
    .reverse()
    .map(function (a) {
      return a.originalClassName;
    })
    .join(" ");
}
function Xt() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n,
    o,
    l,
    a = i;
  function i(d) {
    var p = t[0],
      v = t.slice(1),
      y = v.reduce(function (w, h) {
        return h(w);
      }, p());
    return (n = Gt(y)), (o = n.cache.get), (l = n.cache.set), (a = u), u(d);
  }
  function u(d) {
    var p = o(d);
    if (p) return p;
    var v = Ct(d, n);
    return l(d, v), v;
  }
  return function () {
    return a(St.apply(null, arguments));
  };
}
function T(e) {
  var t = function (r) {
    return r[e] || [];
  };
  return (t.isThemeGetter = !0), t;
}
var pt = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  Yt = /^\d+\/\d+$/,
  Ut = new Set(["px", "full", "screen"]),
  Qt = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  qt =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|^0$/,
  Kt = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function W(e) {
  return ue(e) || Ut.has(e) || Yt.test(e) || oe(e);
}
function oe(e) {
  return de(e, "length", $t);
}
function Wt(e) {
  return de(e, "size", vt);
}
function Zt(e) {
  return de(e, "position", vt);
}
function Vt(e) {
  return de(e, "url", er);
}
function we(e) {
  return de(e, "number", ue);
}
function ue(e) {
  return !Number.isNaN(Number(e));
}
function Jt(e) {
  return e.endsWith("%") && ue(e.slice(0, -1));
}
function ge(e) {
  return $e(e) || de(e, "number", $e);
}
function O(e) {
  return pt.test(e);
}
function be() {
  return !0;
}
function ne(e) {
  return Qt.test(e);
}
function _t(e) {
  return de(e, "", tr);
}
function de(e, t, r) {
  var n = pt.exec(e);
  return n ? (n[1] ? n[1] === t : r(n[2])) : !1;
}
function $t(e) {
  return qt.test(e);
}
function vt() {
  return !1;
}
function er(e) {
  return e.startsWith("url(");
}
function $e(e) {
  return Number.isInteger(Number(e));
}
function tr(e) {
  return Kt.test(e);
}
function rr() {
  var e = T("colors"),
    t = T("spacing"),
    r = T("blur"),
    n = T("brightness"),
    o = T("borderColor"),
    l = T("borderRadius"),
    a = T("borderSpacing"),
    i = T("borderWidth"),
    u = T("contrast"),
    d = T("grayscale"),
    p = T("hueRotate"),
    v = T("invert"),
    y = T("gap"),
    w = T("gradientColorStops"),
    h = T("gradientColorStopPositions"),
    A = T("inset"),
    x = T("margin"),
    N = T("opacity"),
    g = T("padding"),
    S = T("saturate"),
    P = T("scale"),
    k = T("sepia"),
    z = T("skew"),
    D = T("space"),
    Q = T("translate"),
    L = function () {
      return ["auto", "contain", "none"];
    },
    J = function () {
      return ["auto", "hidden", "clip", "visible", "scroll"];
    },
    C = function () {
      return ["auto", t];
    },
    te = function () {
      return ["", W];
    },
    K = function () {
      return ["auto", ue, O];
    },
    me = function () {
      return [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ];
    },
    j = function () {
      return ["solid", "dashed", "dotted", "double", "none"];
    },
    re = function () {
      return [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
        "plus-lighter",
      ];
    },
    _ = function () {
      return [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ];
    },
    X = function () {
      return ["", "0", O];
    },
    f = function () {
      return [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ];
    },
    c = function () {
      return [ue, we];
    },
    m = function () {
      return [ue, O];
    };
  return {
    cacheSize: 500,
    theme: {
      colors: [be],
      spacing: [W],
      blur: ["none", "", ne, oe],
      brightness: c(),
      borderColor: [e],
      borderRadius: ["none", "", "full", ne, oe],
      borderSpacing: [t],
      borderWidth: te(),
      contrast: c(),
      grayscale: X(),
      hueRotate: m(),
      invert: X(),
      gap: [t],
      gradientColorStops: [e],
      gradientColorStopPositions: [Jt, oe],
      inset: C(),
      margin: C(),
      opacity: c(),
      padding: [t],
      saturate: c(),
      scale: c(),
      sepia: X(),
      skew: m(),
      space: [t],
      translate: [t],
    },
    classGroups: {
      aspect: [{ aspect: ["auto", "square", "video", O] }],
      container: ["container"],
      columns: [{ columns: [ne] }],
      "break-after": [{ "break-after": f() }],
      "break-before": [{ "break-before": f() }],
      "break-inside": [
        { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
      ],
      "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
      box: [{ box: ["border", "content"] }],
      display: [
        "block",
        "inline-block",
        "inline",
        "flex",
        "inline-flex",
        "table",
        "inline-table",
        "table-caption",
        "table-cell",
        "table-column",
        "table-column-group",
        "table-footer-group",
        "table-header-group",
        "table-row-group",
        "table-row",
        "flow-root",
        "grid",
        "inline-grid",
        "contents",
        "list-item",
        "hidden",
      ],
      float: [{ float: ["right", "left", "none"] }],
      clear: [{ clear: ["left", "right", "both", "none"] }],
      isolation: ["isolate", "isolation-auto"],
      "object-fit": [
        { object: ["contain", "cover", "fill", "none", "scale-down"] },
      ],
      "object-position": [{ object: [].concat(me(), [O]) }],
      overflow: [{ overflow: J() }],
      "overflow-x": [{ "overflow-x": J() }],
      "overflow-y": [{ "overflow-y": J() }],
      overscroll: [{ overscroll: L() }],
      "overscroll-x": [{ "overscroll-x": L() }],
      "overscroll-y": [{ "overscroll-y": L() }],
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      inset: [{ inset: [A] }],
      "inset-x": [{ "inset-x": [A] }],
      "inset-y": [{ "inset-y": [A] }],
      start: [{ start: [A] }],
      end: [{ end: [A] }],
      top: [{ top: [A] }],
      right: [{ right: [A] }],
      bottom: [{ bottom: [A] }],
      left: [{ left: [A] }],
      visibility: ["visible", "invisible", "collapse"],
      z: [{ z: ["auto", ge] }],
      basis: [{ basis: C() }],
      "flex-direction": [
        { flex: ["row", "row-reverse", "col", "col-reverse"] },
      ],
      "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
      flex: [{ flex: ["1", "auto", "initial", "none", O] }],
      grow: [{ grow: X() }],
      shrink: [{ shrink: X() }],
      order: [{ order: ["first", "last", "none", ge] }],
      "grid-cols": [{ "grid-cols": [be] }],
      "col-start-end": [{ col: ["auto", { span: [ge] }, O] }],
      "col-start": [{ "col-start": K() }],
      "col-end": [{ "col-end": K() }],
      "grid-rows": [{ "grid-rows": [be] }],
      "row-start-end": [{ row: ["auto", { span: [ge] }, O] }],
      "row-start": [{ "row-start": K() }],
      "row-end": [{ "row-end": K() }],
      "grid-flow": [
        { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
      ],
      "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", O] }],
      "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", O] }],
      gap: [{ gap: [y] }],
      "gap-x": [{ "gap-x": [y] }],
      "gap-y": [{ "gap-y": [y] }],
      "justify-content": [{ justify: ["normal"].concat(_()) }],
      "justify-items": [
        { "justify-items": ["start", "end", "center", "stretch"] },
      ],
      "justify-self": [
        { "justify-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      "align-content": [{ content: ["normal"].concat(_(), ["baseline"]) }],
      "align-items": [
        { items: ["start", "end", "center", "baseline", "stretch"] },
      ],
      "align-self": [
        { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
      ],
      "place-content": [{ "place-content": [].concat(_(), ["baseline"]) }],
      "place-items": [
        { "place-items": ["start", "end", "center", "baseline", "stretch"] },
      ],
      "place-self": [
        { "place-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      p: [{ p: [g] }],
      px: [{ px: [g] }],
      py: [{ py: [g] }],
      ps: [{ ps: [g] }],
      pe: [{ pe: [g] }],
      pt: [{ pt: [g] }],
      pr: [{ pr: [g] }],
      pb: [{ pb: [g] }],
      pl: [{ pl: [g] }],
      m: [{ m: [x] }],
      mx: [{ mx: [x] }],
      my: [{ my: [x] }],
      ms: [{ ms: [x] }],
      me: [{ me: [x] }],
      mt: [{ mt: [x] }],
      mr: [{ mr: [x] }],
      mb: [{ mb: [x] }],
      ml: [{ ml: [x] }],
      "space-x": [{ "space-x": [D] }],
      "space-x-reverse": ["space-x-reverse"],
      "space-y": [{ "space-y": [D] }],
      "space-y-reverse": ["space-y-reverse"],
      w: [{ w: ["auto", "min", "max", "fit", t] }],
      "min-w": [{ "min-w": ["min", "max", "fit", W] }],
      "max-w": [
        {
          "max-w": [
            "0",
            "none",
            "full",
            "min",
            "max",
            "fit",
            "prose",
            { screen: [ne] },
            ne,
            oe,
          ],
        },
      ],
      h: [{ h: [t, "auto", "min", "max", "fit"] }],
      "min-h": [{ "min-h": ["min", "max", "fit", W] }],
      "max-h": [{ "max-h": [t, "min", "max", "fit"] }],
      "font-size": [{ text: ["base", ne, oe] }],
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      "font-style": ["italic", "not-italic"],
      "font-weight": [
        {
          font: [
            "thin",
            "extralight",
            "light",
            "normal",
            "medium",
            "semibold",
            "bold",
            "extrabold",
            "black",
            we,
          ],
        },
      ],
      "font-family": [{ font: [be] }],
      "fvn-normal": ["normal-nums"],
      "fvn-ordinal": ["ordinal"],
      "fvn-slashed-zero": ["slashed-zero"],
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      tracking: [
        {
          tracking: [
            "tighter",
            "tight",
            "normal",
            "wide",
            "wider",
            "widest",
            oe,
          ],
        },
      ],
      "line-clamp": [{ "line-clamp": ["none", ue, we] }],
      leading: [
        { leading: ["none", "tight", "snug", "normal", "relaxed", "loose", W] },
      ],
      "list-image": [{ "list-image": ["none", O] }],
      "list-style-type": [{ list: ["none", "disc", "decimal", O] }],
      "list-style-position": [{ list: ["inside", "outside"] }],
      "placeholder-color": [{ placeholder: [e] }],
      "placeholder-opacity": [{ "placeholder-opacity": [N] }],
      "text-alignment": [
        { text: ["left", "center", "right", "justify", "start", "end"] },
      ],
      "text-color": [{ text: [e] }],
      "text-opacity": [{ "text-opacity": [N] }],
      "text-decoration": [
        "underline",
        "overline",
        "line-through",
        "no-underline",
      ],
      "text-decoration-style": [{ decoration: [].concat(j(), ["wavy"]) }],
      "text-decoration-thickness": [{ decoration: ["auto", "from-font", W] }],
      "underline-offset": [{ "underline-offset": ["auto", W] }],
      "text-decoration-color": [{ decoration: [e] }],
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      indent: [{ indent: [t] }],
      "vertical-align": [
        {
          align: [
            "baseline",
            "top",
            "middle",
            "bottom",
            "text-top",
            "text-bottom",
            "sub",
            "super",
            oe,
          ],
        },
      ],
      whitespace: [
        {
          whitespace: [
            "normal",
            "nowrap",
            "pre",
            "pre-line",
            "pre-wrap",
            "break-spaces",
          ],
        },
      ],
      break: [{ break: ["normal", "words", "all", "keep"] }],
      hyphens: [{ hyphens: ["none", "manual", "auto"] }],
      content: [{ content: ["none", O] }],
      "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
      "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
      "bg-opacity": [{ "bg-opacity": [N] }],
      "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
      "bg-position": [{ bg: [].concat(me(), [Zt]) }],
      "bg-repeat": [
        { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
      ],
      "bg-size": [{ bg: ["auto", "cover", "contain", Wt] }],
      "bg-image": [
        {
          bg: [
            "none",
            { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
            Vt,
          ],
        },
      ],
      "bg-color": [{ bg: [e] }],
      "gradient-from-pos": [{ from: [h] }],
      "gradient-via-pos": [{ via: [h] }],
      "gradient-to-pos": [{ to: [h] }],
      "gradient-from": [{ from: [w] }],
      "gradient-via": [{ via: [w] }],
      "gradient-to": [{ to: [w] }],
      rounded: [{ rounded: [l] }],
      "rounded-s": [{ "rounded-s": [l] }],
      "rounded-e": [{ "rounded-e": [l] }],
      "rounded-t": [{ "rounded-t": [l] }],
      "rounded-r": [{ "rounded-r": [l] }],
      "rounded-b": [{ "rounded-b": [l] }],
      "rounded-l": [{ "rounded-l": [l] }],
      "rounded-ss": [{ "rounded-ss": [l] }],
      "rounded-se": [{ "rounded-se": [l] }],
      "rounded-ee": [{ "rounded-ee": [l] }],
      "rounded-es": [{ "rounded-es": [l] }],
      "rounded-tl": [{ "rounded-tl": [l] }],
      "rounded-tr": [{ "rounded-tr": [l] }],
      "rounded-br": [{ "rounded-br": [l] }],
      "rounded-bl": [{ "rounded-bl": [l] }],
      "border-w": [{ border: [i] }],
      "border-w-x": [{ "border-x": [i] }],
      "border-w-y": [{ "border-y": [i] }],
      "border-w-s": [{ "border-s": [i] }],
      "border-w-e": [{ "border-e": [i] }],
      "border-w-t": [{ "border-t": [i] }],
      "border-w-r": [{ "border-r": [i] }],
      "border-w-b": [{ "border-b": [i] }],
      "border-w-l": [{ "border-l": [i] }],
      "border-opacity": [{ "border-opacity": [N] }],
      "border-style": [{ border: [].concat(j(), ["hidden"]) }],
      "divide-x": [{ "divide-x": [i] }],
      "divide-x-reverse": ["divide-x-reverse"],
      "divide-y": [{ "divide-y": [i] }],
      "divide-y-reverse": ["divide-y-reverse"],
      "divide-opacity": [{ "divide-opacity": [N] }],
      "divide-style": [{ divide: j() }],
      "border-color": [{ border: [o] }],
      "border-color-x": [{ "border-x": [o] }],
      "border-color-y": [{ "border-y": [o] }],
      "border-color-t": [{ "border-t": [o] }],
      "border-color-r": [{ "border-r": [o] }],
      "border-color-b": [{ "border-b": [o] }],
      "border-color-l": [{ "border-l": [o] }],
      "divide-color": [{ divide: [o] }],
      "outline-style": [{ outline: [""].concat(j()) }],
      "outline-offset": [{ "outline-offset": [W] }],
      "outline-w": [{ outline: [W] }],
      "outline-color": [{ outline: [e] }],
      "ring-w": [{ ring: te() }],
      "ring-w-inset": ["ring-inset"],
      "ring-color": [{ ring: [e] }],
      "ring-opacity": [{ "ring-opacity": [N] }],
      "ring-offset-w": [{ "ring-offset": [W] }],
      "ring-offset-color": [{ "ring-offset": [e] }],
      shadow: [{ shadow: ["", "inner", "none", ne, _t] }],
      "shadow-color": [{ shadow: [be] }],
      opacity: [{ opacity: [N] }],
      "mix-blend": [{ "mix-blend": re() }],
      "bg-blend": [{ "bg-blend": re() }],
      filter: [{ filter: ["", "none"] }],
      blur: [{ blur: [r] }],
      brightness: [{ brightness: [n] }],
      contrast: [{ contrast: [u] }],
      "drop-shadow": [{ "drop-shadow": ["", "none", ne, O] }],
      grayscale: [{ grayscale: [d] }],
      "hue-rotate": [{ "hue-rotate": [p] }],
      invert: [{ invert: [v] }],
      saturate: [{ saturate: [S] }],
      sepia: [{ sepia: [k] }],
      "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
      "backdrop-blur": [{ "backdrop-blur": [r] }],
      "backdrop-brightness": [{ "backdrop-brightness": [n] }],
      "backdrop-contrast": [{ "backdrop-contrast": [u] }],
      "backdrop-grayscale": [{ "backdrop-grayscale": [d] }],
      "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [p] }],
      "backdrop-invert": [{ "backdrop-invert": [v] }],
      "backdrop-opacity": [{ "backdrop-opacity": [N] }],
      "backdrop-saturate": [{ "backdrop-saturate": [S] }],
      "backdrop-sepia": [{ "backdrop-sepia": [k] }],
      "border-collapse": [{ border: ["collapse", "separate"] }],
      "border-spacing": [{ "border-spacing": [a] }],
      "border-spacing-x": [{ "border-spacing-x": [a] }],
      "border-spacing-y": [{ "border-spacing-y": [a] }],
      "table-layout": [{ table: ["auto", "fixed"] }],
      caption: [{ caption: ["top", "bottom"] }],
      transition: [
        {
          transition: [
            "none",
            "all",
            "",
            "colors",
            "opacity",
            "shadow",
            "transform",
            O,
          ],
        },
      ],
      duration: [{ duration: m() }],
      ease: [{ ease: ["linear", "in", "out", "in-out", O] }],
      delay: [{ delay: m() }],
      animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", O] }],
      transform: [{ transform: ["", "gpu", "none"] }],
      scale: [{ scale: [P] }],
      "scale-x": [{ "scale-x": [P] }],
      "scale-y": [{ "scale-y": [P] }],
      rotate: [{ rotate: [ge, O] }],
      "translate-x": [{ "translate-x": [Q] }],
      "translate-y": [{ "translate-y": [Q] }],
      "skew-x": [{ "skew-x": [z] }],
      "skew-y": [{ "skew-y": [z] }],
      "transform-origin": [
        {
          origin: [
            "center",
            "top",
            "top-right",
            "right",
            "bottom-right",
            "bottom",
            "bottom-left",
            "left",
            "top-left",
            O,
          ],
        },
      ],
      accent: [{ accent: ["auto", e] }],
      appearance: ["appearance-none"],
      cursor: [
        {
          cursor: [
            "auto",
            "default",
            "pointer",
            "wait",
            "text",
            "move",
            "help",
            "not-allowed",
            "none",
            "context-menu",
            "progress",
            "cell",
            "crosshair",
            "vertical-text",
            "alias",
            "copy",
            "no-drop",
            "grab",
            "grabbing",
            "all-scroll",
            "col-resize",
            "row-resize",
            "n-resize",
            "e-resize",
            "s-resize",
            "w-resize",
            "ne-resize",
            "nw-resize",
            "se-resize",
            "sw-resize",
            "ew-resize",
            "ns-resize",
            "nesw-resize",
            "nwse-resize",
            "zoom-in",
            "zoom-out",
            O,
          ],
        },
      ],
      "caret-color": [{ caret: [e] }],
      "pointer-events": [{ "pointer-events": ["none", "auto"] }],
      resize: [{ resize: ["none", "y", "x", ""] }],
      "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
      "scroll-m": [{ "scroll-m": [t] }],
      "scroll-mx": [{ "scroll-mx": [t] }],
      "scroll-my": [{ "scroll-my": [t] }],
      "scroll-ms": [{ "scroll-ms": [t] }],
      "scroll-me": [{ "scroll-me": [t] }],
      "scroll-mt": [{ "scroll-mt": [t] }],
      "scroll-mr": [{ "scroll-mr": [t] }],
      "scroll-mb": [{ "scroll-mb": [t] }],
      "scroll-ml": [{ "scroll-ml": [t] }],
      "scroll-p": [{ "scroll-p": [t] }],
      "scroll-px": [{ "scroll-px": [t] }],
      "scroll-py": [{ "scroll-py": [t] }],
      "scroll-ps": [{ "scroll-ps": [t] }],
      "scroll-pe": [{ "scroll-pe": [t] }],
      "scroll-pt": [{ "scroll-pt": [t] }],
      "scroll-pr": [{ "scroll-pr": [t] }],
      "scroll-pb": [{ "scroll-pb": [t] }],
      "scroll-pl": [{ "scroll-pl": [t] }],
      "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
      "snap-stop": [{ snap: ["normal", "always"] }],
      "snap-type": [{ snap: ["none", "x", "y", "both"] }],
      "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
      touch: [
        {
          touch: [
            "auto",
            "none",
            "pinch-zoom",
            "manipulation",
            { pan: ["x", "left", "right", "y", "up", "down"] },
          ],
        },
      ],
      select: [{ select: ["none", "text", "all", "auto"] }],
      "will-change": [
        { "will-change": ["auto", "scroll", "contents", "transform", O] },
      ],
      fill: [{ fill: [e, "none"] }],
      "stroke-w": [{ stroke: [W, we] }],
      stroke: [{ stroke: [e, "none"] }],
      sr: ["sr-only", "not-sr-only"],
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: [
        "inset-x",
        "inset-y",
        "start",
        "end",
        "top",
        "right",
        "bottom",
        "left",
      ],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      "font-size": ["leading"],
      "fvn-normal": [
        "fvn-ordinal",
        "fvn-slashed-zero",
        "fvn-figure",
        "fvn-spacing",
        "fvn-fraction",
      ],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      rounded: [
        "rounded-s",
        "rounded-e",
        "rounded-t",
        "rounded-r",
        "rounded-b",
        "rounded-l",
        "rounded-ss",
        "rounded-se",
        "rounded-ee",
        "rounded-es",
        "rounded-tl",
        "rounded-tr",
        "rounded-br",
        "rounded-bl",
      ],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": [
        "border-w-s",
        "border-w-e",
        "border-w-t",
        "border-w-r",
        "border-w-b",
        "border-w-l",
      ],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": [
        "border-color-t",
        "border-color-r",
        "border-color-b",
        "border-color-l",
      ],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": [
        "scroll-mx",
        "scroll-my",
        "scroll-ms",
        "scroll-me",
        "scroll-mt",
        "scroll-mr",
        "scroll-mb",
        "scroll-ml",
      ],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": [
        "scroll-px",
        "scroll-py",
        "scroll-ps",
        "scroll-pe",
        "scroll-pt",
        "scroll-pr",
        "scroll-pb",
        "scroll-pl",
      ],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
    },
    conflictingClassGroupModifiers: { "font-size": ["leading"] },
  };
}
var nr = Xt(rr);
function ht(...e) {
  return nr(Tt(...e));
}
const or = s.forwardRef(
    (
      {
        children: e,
        className: t,
        disabled: r,
        isLoading: n,
        leftIcon: o,
        rightIcon: l,
        onClick: a,
        ...i
      },
      u
    ) => {
      const d = n || r;
      return s.createElement(
        "button",
        {
          ref: u,
          type: "button",
          disabled: d,
          className: ht(
            "flex items-center justify-evenly rounded-xs font-primary bg-primary hover:bg-primary-700 active:bg-primary-800 sm:font-light text-white sm:text-xs md:text-md md:h-10 md:w-28 sm:h-8 sm:w-20 text-justify md:font-normal disabled:cursor-not-allowed",
            n &&
              "relative text-transparent transition-none hover:text-transparent disabled:cursor-wait",
            t
          ),
          onClick: a,
          ...i,
        },
        n &&
          s.createElement(
            "div",
            {
              className:
                "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white",
            },
            s.createElement(Pt, { className: "animate-spin" })
          ),
        o &&
          s.createElement("div", { className: "md:w-5 md:5 sm:w-4 sm:4" }, o),
        s.createElement("div", null, e),
        l &&
          s.createElement(
            "div",
            { className: "md:w-5 md:h-5 sm:w-4 sm:h-4" },
            l
          )
      );
    }
  ),
  bn = (e) =>
    s.createElement(
      "svg",
      {
        viewBox: "0 0 37 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        ...e,
      },
      s.createElement("rect", {
        x: 0.292114,
        width: 35.7406,
        height: 17.3333,
        fill: "url(#enflag)",
      }),
      s.createElement(
        "defs",
        null,
        s.createElement(
          "pattern",
          {
            id: "enflag",
            patternContentUnits: "objectBoundingBox",
            width: 1,
            height: 1,
          },
          s.createElement("use", {
            xlinkHref: "#image0_7_5",
            transform: "matrix(0.002079 0 0 0.00428681 0 -0.136591)",
          })
        ),
        s.createElement("image", {
          id: "image0_7_5",
          width: 481,
          height: 297,
          xlinkHref:
            "data:image/png;base64,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",
        })
      )
    ),
  wn = (e) =>
    s.createElement(
      "svg",
      {
        viewBox: "0 0 80 80",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
      },
      s.createElement(
        "g",
        { id: "å¯¼èªå¾æ " },
        s.createElement(
          "g",
          { id: "ç¼ç»" },
          s.createElement("path", {
            id: "è·¯å¾",
            d: "M80 0H0V80H80V0Z",
            fill: "white",
            fillOpacity: 0.01,
          }),
          s.createElement("path", {
            id: "è·¯å¾_2",
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M73.3332 23.3332L39.9998 6.6665L6.6665 23.3332V56.6665L39.9998 73.3332L73.3332 56.6665V23.3332Z",
            stroke: "#850000",
            strokeWidth: 3.75,
            strokeLinejoin: "round",
          }),
          s.createElement("path", {
            id: "è·¯å¾_3",
            d: "M6.6665 23.3335L39.9998 40.0002",
            stroke: "#850000",
            strokeWidth: 3.75,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }),
          s.createElement("path", {
            id: "è·¯å¾_4",
            d: "M40 73.3333V40",
            stroke: "#850000",
            strokeWidth: 3.75,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }),
          s.createElement("path", {
            id: "è·¯å¾_5",
            d: "M73.3333 23.3335L40 40.0002",
            stroke: "#850000",
            strokeWidth: 3.75,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }),
          s.createElement("path", {
            id: "è·¯å¾_6",
            d: "M56.6668 15L23.3335 31.6667",
            stroke: "#850000",
            strokeWidth: 3.75,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          })
        )
      )
    ),
  yn = (e) =>
    s.createElement(
      "svg",
      {
        viewBox: "0 0 37 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        ...e,
      },
      s.createElement("rect", { width: 37, height: 18, fill: "#1E1E1E" }),
      s.createElement(
        "g",
        { clipPath: "url(#clip0_0_1)" },
        s.createElement("rect", {
          width: 1280,
          height: 3607.51,
          transform: "translate(-1027 -21)",
          fill: "#F8F8F8",
        }),
        s.createElement("rect", {
          width: 1280,
          height: 305,
          transform: "translate(-1027 -21)",
          fill: "white",
        }),
        s.createElement("rect", {
          x: -1027,
          y: -21,
          width: 1280,
          height: 60,
          fill: "#850000",
          fillOpacity: 0.9,
        }),
        s.createElement("rect", {
          x: -16,
          y: -11,
          width: 221.469,
          height: 40,
          rx: 20,
          fill: "white",
        }),
        s.createElement("rect", {
          x: 0.292114,
          width: 35.7406,
          height: 17.3333,
          fill: "url(#pattern0)",
        })
      ),
      s.createElement(
        "defs",
        null,
        s.createElement(
          "pattern",
          {
            id: "pattern0",
            patternContentUnits: "objectBoundingBox",
            width: 1,
            height: 1,
          },
          s.createElement("use", {
            xlinkHref: "#image0_0_1",
            transform: "matrix(0.00434783 0 0 0.00896503 0 -0.185824)",
          })
        ),
        s.createElement(
          "clipPath",
          { id: "clip0_0_1" },
          s.createElement("rect", {
            width: 1280,
            height: 3607.51,
            fill: "white",
            transform: "translate(-1027 -21)",
          })
        ),
        s.createElement("image", {
          id: "image0_0_1",
          width: 230,
          height: 153,
          xlinkHref:
            "data:image/png;base64,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",
        })
      )
    ),
  ar = (e) =>
    s.createElement(
      "svg",
      {
        viewBox: "0 0 12 12",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
      },
      s.createElement(
        "g",
        { id: "Dribbble-Light-Preview" },
        s.createElement(
          "g",
          { id: "icons" },
          s.createElement("path", {
            id: "plus-[#1512]",
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12 5.4V6.6H6.59999V12H5.40001V6.6H0V5.4H5.40001V0H6.59999V5.4H12Z",
            fill: "white",
          })
        )
      )
    ),
  An = ({
    className: e,
    previewImage: t,
    title: r,
    description: n,
    onClick: o,
  }) =>
    b.createElement(
      "div",
      { className: `flex flex-col md:w-80 sm:w-60 font-primary gap-3 ${e}` },
      b.createElement("img", {
        src: t,
        alt: r,
        className:
          "rounded-t-md object-cover md:h-52 sm:h-36 md:text-base sm:text-sm bg-gray-200",
      }),
      b.createElement(
        "div",
        { className: "w-full" },
        b.createElement(
          "h2",
          { className: "md:text-lg sm:text-base font-bold" },
          r
        ),
        b.createElement(
          "p",
          {
            className:
              "h-16 line-clamp-3 md:text-base sm:text-sm md:leading-snug sm:leading-normal font-normal",
          },
          n
        )
      ),
      b.createElement(or, {
        children: "Đọc thêm",
        rightIcon: b.createElement(ar, null),
        onClick: o,
      })
    ),
  En = ({
    serviceCardItem: e,
    titleClassName: t,
    descriptionClassName: r,
    className: n,
  }) =>
    b.createElement(
      "div",
      {
        className: `flex flex-col items-center justify-center rounded-md space-y-3 border-2 md:text-base sm:text-xs border-gray-200 md:w-56 md:h-52 sm:w-40 sm:h-40 font-primary text-center px-2 py-2 bg-white ${n}`,
      },
      e &&
        b.createElement(
          b.Fragment,
          null,
          b.createElement(
            "div",
            { className: "md:w-14 md:h-14 sm:w-10 sm:h-10" },
            e.icon
          ),
          b.createElement(
            "p",
            {
              className: `mt-3 md:text-xl font-bold md:leading-6 sm:text-sm text-primary ${t}`,
            },
            e.title
          ),
          b.createElement("p", { className: `${r}` }, e.description)
        )
    );
var ir = Object.defineProperty,
  lr = (e, t, r) =>
    t in e
      ? ir(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Se = (e, t, r) => (lr(e, typeof t != "symbol" ? t + "" : t, r), r);
let sr = class {
    constructor() {
      Se(this, "current", this.detect()),
        Se(this, "handoffState", "pending"),
        Se(this, "currentId", 0);
    }
    set(e) {
      this.current !== e &&
        ((this.handoffState = "pending"),
        (this.currentId = 0),
        (this.current = e));
    }
    reset() {
      this.set(this.detect());
    }
    nextId() {
      return ++this.currentId;
    }
    get isServer() {
      return this.current === "server";
    }
    get isClient() {
      return this.current === "client";
    }
    detect() {
      return typeof window > "u" || typeof document > "u" ? "server" : "client";
    }
    handoff() {
      this.handoffState === "pending" && (this.handoffState = "complete");
    }
    get isHandoffComplete() {
      return this.handoffState === "complete";
    }
  },
  ce = new sr(),
  V = (e, t) => {
    ce.isServer ? s.useEffect(e, t) : s.useLayoutEffect(e, t);
  };
function ie(e) {
  let t = s.useRef(e);
  return (
    V(() => {
      t.current = e;
    }, [e]),
    t
  );
}
function ur(e) {
  typeof queueMicrotask == "function"
    ? queueMicrotask(e)
    : Promise.resolve()
        .then(e)
        .catch((t) =>
          setTimeout(() => {
            throw t;
          })
        );
}
function ee() {
  let e = [],
    t = {
      addEventListener(r, n, o, l) {
        return (
          r.addEventListener(n, o, l),
          t.add(() => r.removeEventListener(n, o, l))
        );
      },
      requestAnimationFrame(...r) {
        let n = requestAnimationFrame(...r);
        return t.add(() => cancelAnimationFrame(n));
      },
      nextFrame(...r) {
        return t.requestAnimationFrame(() => t.requestAnimationFrame(...r));
      },
      setTimeout(...r) {
        let n = setTimeout(...r);
        return t.add(() => clearTimeout(n));
      },
      microTask(...r) {
        let n = { current: !0 };
        return (
          ur(() => {
            n.current && r[0]();
          }),
          t.add(() => {
            n.current = !1;
          })
        );
      },
      style(r, n, o) {
        let l = r.style.getPropertyValue(n);
        return (
          Object.assign(r.style, { [n]: o }),
          this.add(() => {
            Object.assign(r.style, { [n]: l });
          })
        );
      },
      group(r) {
        let n = ee();
        return r(n), this.add(() => n.dispose());
      },
      add(r) {
        return (
          e.push(r),
          () => {
            let n = e.indexOf(r);
            if (n >= 0) for (let o of e.splice(n, 1)) o();
          }
        );
      },
      dispose() {
        for (let r of e.splice(0)) r();
      },
    };
  return t;
}
function xe() {
  let [e] = s.useState(ee);
  return s.useEffect(() => () => e.dispose(), [e]), e;
}
let R = function (e) {
  let t = ie(e);
  return b.useCallback((...r) => t.current(...r), [t]);
};
function Xe() {
  let [e, t] = s.useState(ce.isHandoffComplete);
  return (
    e && ce.isHandoffComplete === !1 && t(!1),
    s.useEffect(() => {
      e !== !0 && t(!0);
    }, [e]),
    s.useEffect(() => ce.handoff(), []),
    e
  );
}
var et;
let Ye =
  (et = b.useId) != null
    ? et
    : function () {
        let e = Xe(),
          [t, r] = b.useState(e ? () => ce.nextId() : null);
        return (
          V(() => {
            t === null && r(ce.nextId());
          }, [t]),
          t != null ? "" + t : void 0
        );
      };
function U(e, t, ...r) {
  if (e in t) {
    let o = t[e];
    return typeof o == "function" ? o(...r) : o;
  }
  let n = new Error(
    `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(
      t
    )
      .map((o) => `"${o}"`)
      .join(", ")}.`
  );
  throw (Error.captureStackTrace && Error.captureStackTrace(n, U), n);
}
function Me(e) {
  return ce.isServer
    ? null
    : e instanceof Node
    ? e.ownerDocument
    : e != null && e.hasOwnProperty("current") && e.current instanceof Node
    ? e.current.ownerDocument
    : document;
}
let je = [
  "[contentEditable=true]",
  "[tabindex]",
  "a[href]",
  "area[href]",
  "button:not([disabled])",
  "iframe",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
]
  .map((e) => `${e}:not([tabindex='-1'])`)
  .join(",");
var Be = ((e) => (
    (e[(e.First = 1)] = "First"),
    (e[(e.Previous = 2)] = "Previous"),
    (e[(e.Next = 4)] = "Next"),
    (e[(e.Last = 8)] = "Last"),
    (e[(e.WrapAround = 16)] = "WrapAround"),
    (e[(e.NoScroll = 32)] = "NoScroll"),
    e
  ))(Be || {}),
  cr = ((e) => (
    (e[(e.Error = 0)] = "Error"),
    (e[(e.Overflow = 1)] = "Overflow"),
    (e[(e.Success = 2)] = "Success"),
    (e[(e.Underflow = 3)] = "Underflow"),
    e
  ))(cr || {}),
  dr = ((e) => (
    (e[(e.Previous = -1)] = "Previous"), (e[(e.Next = 1)] = "Next"), e
  ))(dr || {});
function gt(e = document.body) {
  return e == null
    ? []
    : Array.from(e.querySelectorAll(je)).sort((t, r) =>
        Math.sign(
          (t.tabIndex || Number.MAX_SAFE_INTEGER) -
            (r.tabIndex || Number.MAX_SAFE_INTEGER)
        )
      );
}
var Ue = ((e) => (
  (e[(e.Strict = 0)] = "Strict"), (e[(e.Loose = 1)] = "Loose"), e
))(Ue || {});
function Qe(e, t = 0) {
  var r;
  return e === ((r = Me(e)) == null ? void 0 : r.body)
    ? !1
    : U(t, {
        [0]() {
          return e.matches(je);
        },
        [1]() {
          let n = e;
          for (; n !== null; ) {
            if (n.matches(je)) return !0;
            n = n.parentElement;
          }
          return !1;
        },
      });
}
function bt(e) {
  let t = Me(e);
  ee().nextFrame(() => {
    t && !Qe(t.activeElement, 0) && mr(e);
  });
}
var fr = ((e) => (
  (e[(e.Keyboard = 0)] = "Keyboard"), (e[(e.Mouse = 1)] = "Mouse"), e
))(fr || {});
typeof window < "u" &&
  typeof document < "u" &&
  (document.addEventListener(
    "keydown",
    (e) => {
      e.metaKey ||
        e.altKey ||
        e.ctrlKey ||
        (document.documentElement.dataset.headlessuiFocusVisible = "");
    },
    !0
  ),
  document.addEventListener(
    "click",
    (e) => {
      e.detail === 1
        ? delete document.documentElement.dataset.headlessuiFocusVisible
        : e.detail === 0 &&
          (document.documentElement.dataset.headlessuiFocusVisible = "");
    },
    !0
  ));
function mr(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let pr = ["textarea", "input"].join(",");
function vr(e) {
  var t, r;
  return (r =
    (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, pr)) !=
    null
    ? r
    : !1;
}
function wt(e, t = (r) => r) {
  return e.slice().sort((r, n) => {
    let o = t(r),
      l = t(n);
    if (o === null || l === null) return 0;
    let a = o.compareDocumentPosition(l);
    return a & Node.DOCUMENT_POSITION_FOLLOWING
      ? -1
      : a & Node.DOCUMENT_POSITION_PRECEDING
      ? 1
      : 0;
  });
}
function hr(e, t) {
  return gr(gt(), t, { relativeTo: e });
}
function gr(
  e,
  t,
  { sorted: r = !0, relativeTo: n = null, skipElements: o = [] } = {}
) {
  let l = Array.isArray(e)
      ? e.length > 0
        ? e[0].ownerDocument
        : document
      : e.ownerDocument,
    a = Array.isArray(e) ? (r ? wt(e) : e) : gt(e);
  o.length > 0 && a.length > 1 && (a = a.filter((w) => !o.includes(w))),
    (n = n ?? l.activeElement);
  let i = (() => {
      if (t & 5) return 1;
      if (t & 10) return -1;
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
      );
    })(),
    u = (() => {
      if (t & 1) return 0;
      if (t & 2) return Math.max(0, a.indexOf(n)) - 1;
      if (t & 4) return Math.max(0, a.indexOf(n)) + 1;
      if (t & 8) return a.length - 1;
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
      );
    })(),
    d = t & 32 ? { preventScroll: !0 } : {},
    p = 0,
    v = a.length,
    y;
  do {
    if (p >= v || p + v <= 0) return 0;
    let w = u + p;
    if (t & 16) w = (w + v) % v;
    else {
      if (w < 0) return 3;
      if (w >= v) return 1;
    }
    (y = a[w]), y == null || y.focus(d), (p += i);
  } while (y !== l.activeElement);
  return t & 6 && vr(y) && y.select(), 2;
}
function tt(e, t, r) {
  let n = ie(t);
  s.useEffect(() => {
    function o(l) {
      n.current(l);
    }
    return (
      document.addEventListener(e, o, r),
      () => document.removeEventListener(e, o, r)
    );
  }, [e, r]);
}
function br(e, t, r) {
  let n = ie(t);
  s.useEffect(() => {
    function o(l) {
      n.current(l);
    }
    return (
      window.addEventListener(e, o, r),
      () => window.removeEventListener(e, o, r)
    );
  }, [e, r]);
}
function wr(e, t, r = !0) {
  let n = s.useRef(!1);
  s.useEffect(() => {
    requestAnimationFrame(() => {
      n.current = r;
    });
  }, [r]);
  function o(a, i) {
    if (!n.current || a.defaultPrevented) return;
    let u = i(a);
    if (u === null || !u.getRootNode().contains(u)) return;
    let d = (function p(v) {
      return typeof v == "function"
        ? p(v())
        : Array.isArray(v) || v instanceof Set
        ? v
        : [v];
    })(e);
    for (let p of d) {
      if (p === null) continue;
      let v = p instanceof HTMLElement ? p : p.current;
      if (
        (v != null && v.contains(u)) ||
        (a.composed && a.composedPath().includes(v))
      )
        return;
    }
    return !Qe(u, Ue.Loose) && u.tabIndex !== -1 && a.preventDefault(), t(a, u);
  }
  let l = s.useRef(null);
  tt(
    "mousedown",
    (a) => {
      var i, u;
      n.current &&
        (l.current =
          ((u = (i = a.composedPath) == null ? void 0 : i.call(a)) == null
            ? void 0
            : u[0]) || a.target);
    },
    !0
  ),
    tt(
      "click",
      (a) => {
        l.current && (o(a, () => l.current), (l.current = null));
      },
      !0
    ),
    br(
      "blur",
      (a) =>
        o(a, () =>
          window.document.activeElement instanceof HTMLIFrameElement
            ? window.document.activeElement
            : null
        ),
      !0
    );
}
function rt(e) {
  var t;
  if (e.type) return e.type;
  let r = (t = e.as) != null ? t : "button";
  if (typeof r == "string" && r.toLowerCase() === "button") return "button";
}
function yr(e, t) {
  let [r, n] = s.useState(() => rt(e));
  return (
    V(() => {
      n(rt(e));
    }, [e.type, e.as]),
    V(() => {
      r ||
        (t.current &&
          t.current instanceof HTMLButtonElement &&
          !t.current.hasAttribute("type") &&
          n("button"));
    }, [r, t]),
    r
  );
}
let Ar = Symbol();
function pe(...e) {
  let t = s.useRef(e);
  s.useEffect(() => {
    t.current = e;
  }, [e]);
  let r = R((n) => {
    for (let o of t.current)
      o != null && (typeof o == "function" ? o(n) : (o.current = n));
  });
  return e.every((n) => n == null || (n == null ? void 0 : n[Ar])) ? void 0 : r;
}
function Er({ container: e, accept: t, walk: r, enabled: n = !0 }) {
  let o = s.useRef(t),
    l = s.useRef(r);
  s.useEffect(() => {
    (o.current = t), (l.current = r);
  }, [t, r]),
    V(() => {
      if (!e || !n) return;
      let a = Me(e);
      if (!a) return;
      let i = o.current,
        u = l.current,
        d = Object.assign((v) => i(v), { acceptNode: i }),
        p = a.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, d, !1);
      for (; p.nextNode(); ) u(p.currentNode);
    }, [e, n, o, l]);
}
function xr(e) {
  throw new Error("Unexpected object: " + e);
}
var Z = ((e) => (
  (e[(e.First = 0)] = "First"),
  (e[(e.Previous = 1)] = "Previous"),
  (e[(e.Next = 2)] = "Next"),
  (e[(e.Last = 3)] = "Last"),
  (e[(e.Specific = 4)] = "Specific"),
  (e[(e.Nothing = 5)] = "Nothing"),
  e
))(Z || {});
function Mr(e, t) {
  let r = t.resolveItems();
  if (r.length <= 0) return null;
  let n = t.resolveActiveIndex(),
    o = n ?? -1,
    l = (() => {
      switch (e.focus) {
        case 0:
          return r.findIndex((a) => !t.resolveDisabled(a));
        case 1: {
          let a = r
            .slice()
            .reverse()
            .findIndex((i, u, d) =>
              o !== -1 && d.length - u - 1 >= o ? !1 : !t.resolveDisabled(i)
            );
          return a === -1 ? a : r.length - 1 - a;
        }
        case 2:
          return r.findIndex((a, i) => (i <= o ? !1 : !t.resolveDisabled(a)));
        case 3: {
          let a = r
            .slice()
            .reverse()
            .findIndex((i) => !t.resolveDisabled(i));
          return a === -1 ? a : r.length - 1 - a;
        }
        case 4:
          return r.findIndex((a) => t.resolveId(a) === e.id);
        case 5:
          return null;
        default:
          xr(e);
      }
    })();
  return l === -1 ? n : l;
}
function He(...e) {
  return e.filter(Boolean).join(" ");
}
var Ae = ((e) => (
    (e[(e.None = 0)] = "None"),
    (e[(e.RenderStrategy = 1)] = "RenderStrategy"),
    (e[(e.Static = 2)] = "Static"),
    e
  ))(Ae || {}),
  $ = ((e) => (
    (e[(e.Unmount = 0)] = "Unmount"), (e[(e.Hidden = 1)] = "Hidden"), e
  ))($ || {});
function ve({
  ourProps: e,
  theirProps: t,
  slot: r,
  defaultTag: n,
  features: o,
  visible: l = !0,
  name: a,
}) {
  let i = yt(t, e);
  if (l) return ye(i, r, n, a);
  let u = o ?? 0;
  if (u & 2) {
    let { static: d = !1, ...p } = i;
    if (d) return ye(p, r, n, a);
  }
  if (u & 1) {
    let { unmount: d = !0, ...p } = i;
    return U(d ? 0 : 1, {
      [0]() {
        return null;
      },
      [1]() {
        return ye({ ...p, hidden: !0, style: { display: "none" } }, r, n, a);
      },
    });
  }
  return ye(i, r, n, a);
}
function ye(e, t = {}, r, n) {
  let {
      as: o = r,
      children: l,
      refName: a = "ref",
      ...i
    } = Re(e, ["unmount", "static"]),
    u = e.ref !== void 0 ? { [a]: e.ref } : {},
    d = typeof l == "function" ? l(t) : l;
  "className" in i &&
    i.className &&
    typeof i.className == "function" &&
    (i.className = i.className(t));
  let p = {};
  if (t) {
    let v = !1,
      y = [];
    for (let [w, h] of Object.entries(t))
      typeof h == "boolean" && (v = !0), h === !0 && y.push(w);
    v && (p["data-headlessui-state"] = y.join(" "));
  }
  if (o === s.Fragment && Object.keys(nt(i)).length > 0) {
    if (!s.isValidElement(d) || (Array.isArray(d) && d.length > 1))
      throw new Error(
        [
          'Passing props on "Fragment"!',
          "",
          `The current component <${n} /> is rendering a "Fragment".`,
          "However we need to passthrough the following props:",
          Object.keys(i).map((h) => `  - ${h}`).join(`
`),
          "",
          "You can apply a few solutions:",
          [
            'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
            "Render a single element as the child so that we can forward the props onto that element.",
          ].map((h) => `  - ${h}`).join(`
`),
        ].join(`
`)
      );
    let v = d.props,
      y =
        typeof (v == null ? void 0 : v.className) == "function"
          ? (...h) => He(v == null ? void 0 : v.className(...h), i.className)
          : He(v == null ? void 0 : v.className, i.className),
      w = y ? { className: y } : {};
    return s.cloneElement(
      d,
      Object.assign(
        {},
        yt(d.props, nt(Re(i, ["ref"]))),
        p,
        u,
        Nr(d.ref, u.ref),
        w
      )
    );
  }
  return s.createElement(
    o,
    Object.assign(
      {},
      Re(i, ["ref"]),
      o !== s.Fragment && u,
      o !== s.Fragment && p
    ),
    d
  );
}
function Nr(...e) {
  return {
    ref: e.every((t) => t == null)
      ? void 0
      : (t) => {
          for (let r of e)
            r != null && (typeof r == "function" ? r(t) : (r.current = t));
        },
  };
}
function yt(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {},
    r = {};
  for (let n of e)
    for (let o in n)
      o.startsWith("on") && typeof n[o] == "function"
        ? (r[o] != null || (r[o] = []), r[o].push(n[o]))
        : (t[o] = n[o]);
  if (t.disabled || t["aria-disabled"])
    return Object.assign(
      t,
      Object.fromEntries(Object.keys(r).map((n) => [n, void 0]))
    );
  for (let n in r)
    Object.assign(t, {
      [n](o, ...l) {
        let a = r[n];
        for (let i of a) {
          if (
            (o instanceof Event ||
              (o == null ? void 0 : o.nativeEvent) instanceof Event) &&
            o.defaultPrevented
          )
            return;
          i(o, ...l);
        }
      },
    });
  return t;
}
function fe(e) {
  var t;
  return Object.assign(s.forwardRef(e), {
    displayName: (t = e.displayName) != null ? t : e.name,
  });
}
function nt(e) {
  let t = Object.assign({}, e);
  for (let r in t) t[r] === void 0 && delete t[r];
  return t;
}
function Re(e, t = []) {
  let r = Object.assign({}, e);
  for (let n of t) n in r && delete r[n];
  return r;
}
function kr(e) {
  let t = e.parentElement,
    r = null;
  for (; t && !(t instanceof HTMLFieldSetElement); )
    t instanceof HTMLLegendElement && (r = t), (t = t.parentElement);
  let n = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return n && Ir(r) ? !1 : n;
}
function Ir(e) {
  if (!e) return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement) return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
let qe = s.createContext(null);
qe.displayName = "OpenClosedContext";
var Y = ((e) => (
  (e[(e.Open = 1)] = "Open"),
  (e[(e.Closed = 2)] = "Closed"),
  (e[(e.Closing = 4)] = "Closing"),
  (e[(e.Opening = 8)] = "Opening"),
  e
))(Y || {});
function Ke() {
  return s.useContext(qe);
}
function At({ value: e, children: t }) {
  return b.createElement(qe.Provider, { value: e }, t);
}
var F = ((e) => (
  (e.Space = " "),
  (e.Enter = "Enter"),
  (e.Escape = "Escape"),
  (e.Backspace = "Backspace"),
  (e.Delete = "Delete"),
  (e.ArrowLeft = "ArrowLeft"),
  (e.ArrowUp = "ArrowUp"),
  (e.ArrowRight = "ArrowRight"),
  (e.ArrowDown = "ArrowDown"),
  (e.Home = "Home"),
  (e.End = "End"),
  (e.PageUp = "PageUp"),
  (e.PageDown = "PageDown"),
  (e.Tab = "Tab"),
  e
))(F || {});
function ot(e) {
  return [e.screenX, e.screenY];
}
function Pr() {
  let e = s.useRef([-1, -1]);
  return {
    wasMoved(t) {
      let r = ot(t);
      return e.current[0] === r[0] && e.current[1] === r[1]
        ? !1
        : ((e.current = r), !0);
    },
    update(t) {
      e.current = ot(t);
    },
  };
}
function We() {
  let e = s.useRef(!1);
  return (
    V(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    e
  );
}
function Tr(...e) {
  return s.useMemo(() => Me(...e), [...e]);
}
let at =
  /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function it(e) {
  var t, r;
  let n = (t = e.innerText) != null ? t : "",
    o = e.cloneNode(!0);
  if (!(o instanceof HTMLElement)) return n;
  let l = !1;
  for (let i of o.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    i.remove(), (l = !0);
  let a = l ? ((r = o.innerText) != null ? r : "") : n;
  return at.test(a) && (a = a.replace(at, "")), a;
}
function Sr(e) {
  let t = e.getAttribute("aria-label");
  if (typeof t == "string") return t.trim();
  let r = e.getAttribute("aria-labelledby");
  if (r) {
    let n = r
      .split(" ")
      .map((o) => {
        let l = document.getElementById(o);
        if (l) {
          let a = l.getAttribute("aria-label");
          return typeof a == "string" ? a.trim() : it(l).trim();
        }
        return null;
      })
      .filter(Boolean);
    if (n.length > 0) return n.join(", ");
  }
  return it(e).trim();
}
function Rr(e) {
  let t = s.useRef(""),
    r = s.useRef("");
  return R(() => {
    let n = e.current;
    if (!n) return "";
    let o = n.innerText;
    if (t.current === o) return r.current;
    let l = Sr(n).trim().toLowerCase();
    return (t.current = o), (r.current = l), l;
  });
}
var Or = ((e) => (
    (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
  ))(Or || {}),
  Fr = ((e) => (
    (e[(e.Pointer = 0)] = "Pointer"), (e[(e.Other = 1)] = "Other"), e
  ))(Fr || {}),
  Dr = ((e) => (
    (e[(e.OpenMenu = 0)] = "OpenMenu"),
    (e[(e.CloseMenu = 1)] = "CloseMenu"),
    (e[(e.GoToItem = 2)] = "GoToItem"),
    (e[(e.Search = 3)] = "Search"),
    (e[(e.ClearSearch = 4)] = "ClearSearch"),
    (e[(e.RegisterItem = 5)] = "RegisterItem"),
    (e[(e.UnregisterItem = 6)] = "UnregisterItem"),
    e
  ))(Dr || {});
function Oe(e, t = (r) => r) {
  let r = e.activeItemIndex !== null ? e.items[e.activeItemIndex] : null,
    n = wt(t(e.items.slice()), (l) => l.dataRef.current.domRef.current),
    o = r ? n.indexOf(r) : null;
  return o === -1 && (o = null), { items: n, activeItemIndex: o };
}
let Lr = {
    [1](e) {
      return e.menuState === 1
        ? e
        : { ...e, activeItemIndex: null, menuState: 1 };
    },
    [0](e) {
      return e.menuState === 0 ? e : { ...e, __demoMode: !1, menuState: 0 };
    },
    [2]: (e, t) => {
      var r;
      let n = Oe(e),
        o = Mr(t, {
          resolveItems: () => n.items,
          resolveActiveIndex: () => n.activeItemIndex,
          resolveId: (l) => l.id,
          resolveDisabled: (l) => l.dataRef.current.disabled,
        });
      return {
        ...e,
        ...n,
        searchQuery: "",
        activeItemIndex: o,
        activationTrigger: (r = t.trigger) != null ? r : 1,
      };
    },
    [3]: (e, t) => {
      let r = e.searchQuery !== "" ? 0 : 1,
        n = e.searchQuery + t.value.toLowerCase(),
        o = (
          e.activeItemIndex !== null
            ? e.items
                .slice(e.activeItemIndex + r)
                .concat(e.items.slice(0, e.activeItemIndex + r))
            : e.items
        ).find((a) => {
          var i;
          return (
            ((i = a.dataRef.current.textValue) == null
              ? void 0
              : i.startsWith(n)) && !a.dataRef.current.disabled
          );
        }),
        l = o ? e.items.indexOf(o) : -1;
      return l === -1 || l === e.activeItemIndex
        ? { ...e, searchQuery: n }
        : { ...e, searchQuery: n, activeItemIndex: l, activationTrigger: 1 };
    },
    [4](e) {
      return e.searchQuery === ""
        ? e
        : { ...e, searchQuery: "", searchActiveItemIndex: null };
    },
    [5]: (e, t) => {
      let r = Oe(e, (n) => [...n, { id: t.id, dataRef: t.dataRef }]);
      return { ...e, ...r };
    },
    [6]: (e, t) => {
      let r = Oe(e, (n) => {
        let o = n.findIndex((l) => l.id === t.id);
        return o !== -1 && n.splice(o, 1), n;
      });
      return { ...e, ...r, activationTrigger: 1 };
    },
  },
  Ze = s.createContext(null);
Ze.displayName = "MenuContext";
function Ne(e) {
  let t = s.useContext(Ze);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Menu /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(r, Ne), r);
  }
  return t;
}
function jr(e, t) {
  return U(t.type, Lr, e, t);
}
let Br = s.Fragment;
function Hr(e, t) {
  let { __demoMode: r = !1, ...n } = e,
    o = s.useReducer(jr, {
      __demoMode: r,
      menuState: r ? 0 : 1,
      buttonRef: s.createRef(),
      itemsRef: s.createRef(),
      items: [],
      searchQuery: "",
      activeItemIndex: null,
      activationTrigger: 1,
    }),
    [{ menuState: l, itemsRef: a, buttonRef: i }, u] = o,
    d = pe(t);
  wr(
    [i, a],
    (w, h) => {
      var A;
      u({ type: 1 }),
        Qe(h, Ue.Loose) ||
          (w.preventDefault(), (A = i.current) == null || A.focus());
    },
    l === 0
  );
  let p = R(() => {
      u({ type: 1 });
    }),
    v = s.useMemo(() => ({ open: l === 0, close: p }), [l, p]),
    y = { ref: d };
  return b.createElement(
    Ze.Provider,
    { value: o },
    b.createElement(
      At,
      { value: U(l, { [0]: Y.Open, [1]: Y.Closed }) },
      ve({ ourProps: y, theirProps: n, slot: v, defaultTag: Br, name: "Menu" })
    )
  );
}
let Gr = "button";
function zr(e, t) {
  var r;
  let n = Ye(),
    { id: o = `headlessui-menu-button-${n}`, ...l } = e,
    [a, i] = Ne("Menu.Button"),
    u = pe(a.buttonRef, t),
    d = xe(),
    p = R((A) => {
      switch (A.key) {
        case F.Space:
        case F.Enter:
        case F.ArrowDown:
          A.preventDefault(),
            A.stopPropagation(),
            i({ type: 0 }),
            d.nextFrame(() => i({ type: 2, focus: Z.First }));
          break;
        case F.ArrowUp:
          A.preventDefault(),
            A.stopPropagation(),
            i({ type: 0 }),
            d.nextFrame(() => i({ type: 2, focus: Z.Last }));
          break;
      }
    }),
    v = R((A) => {
      switch (A.key) {
        case F.Space:
          A.preventDefault();
          break;
      }
    }),
    y = R((A) => {
      if (kr(A.currentTarget)) return A.preventDefault();
      e.disabled ||
        (a.menuState === 0
          ? (i({ type: 1 }),
            d.nextFrame(() => {
              var x;
              return (x = a.buttonRef.current) == null
                ? void 0
                : x.focus({ preventScroll: !0 });
            }))
          : (A.preventDefault(), i({ type: 0 })));
    }),
    w = s.useMemo(() => ({ open: a.menuState === 0 }), [a]),
    h = {
      ref: u,
      id: o,
      type: yr(e, a.buttonRef),
      "aria-haspopup": "menu",
      "aria-controls": (r = a.itemsRef.current) == null ? void 0 : r.id,
      "aria-expanded": e.disabled ? void 0 : a.menuState === 0,
      onKeyDown: p,
      onKeyUp: v,
      onClick: y,
    };
  return ve({
    ourProps: h,
    theirProps: l,
    slot: w,
    defaultTag: Gr,
    name: "Menu.Button",
  });
}
let Cr = "div",
  Xr = Ae.RenderStrategy | Ae.Static;
function Yr(e, t) {
  var r, n;
  let o = Ye(),
    { id: l = `headlessui-menu-items-${o}`, ...a } = e,
    [i, u] = Ne("Menu.Items"),
    d = pe(i.itemsRef, t),
    p = Tr(i.itemsRef),
    v = xe(),
    y = Ke(),
    w = (() => (y !== null ? (y & Y.Open) === Y.Open : i.menuState === 0))();
  s.useEffect(() => {
    let g = i.itemsRef.current;
    g &&
      i.menuState === 0 &&
      g !== (p == null ? void 0 : p.activeElement) &&
      g.focus({ preventScroll: !0 });
  }, [i.menuState, i.itemsRef, p]),
    Er({
      container: i.itemsRef.current,
      enabled: i.menuState === 0,
      accept(g) {
        return g.getAttribute("role") === "menuitem"
          ? NodeFilter.FILTER_REJECT
          : g.hasAttribute("role")
          ? NodeFilter.FILTER_SKIP
          : NodeFilter.FILTER_ACCEPT;
      },
      walk(g) {
        g.setAttribute("role", "none");
      },
    });
  let h = R((g) => {
      var S, P;
      switch ((v.dispose(), g.key)) {
        case F.Space:
          if (i.searchQuery !== "")
            return (
              g.preventDefault(),
              g.stopPropagation(),
              u({ type: 3, value: g.key })
            );
        case F.Enter:
          if (
            (g.preventDefault(),
            g.stopPropagation(),
            u({ type: 1 }),
            i.activeItemIndex !== null)
          ) {
            let { dataRef: k } = i.items[i.activeItemIndex];
            (P = (S = k.current) == null ? void 0 : S.domRef.current) == null ||
              P.click();
          }
          bt(i.buttonRef.current);
          break;
        case F.ArrowDown:
          return (
            g.preventDefault(),
            g.stopPropagation(),
            u({ type: 2, focus: Z.Next })
          );
        case F.ArrowUp:
          return (
            g.preventDefault(),
            g.stopPropagation(),
            u({ type: 2, focus: Z.Previous })
          );
        case F.Home:
        case F.PageUp:
          return (
            g.preventDefault(),
            g.stopPropagation(),
            u({ type: 2, focus: Z.First })
          );
        case F.End:
        case F.PageDown:
          return (
            g.preventDefault(),
            g.stopPropagation(),
            u({ type: 2, focus: Z.Last })
          );
        case F.Escape:
          g.preventDefault(),
            g.stopPropagation(),
            u({ type: 1 }),
            ee().nextFrame(() => {
              var k;
              return (k = i.buttonRef.current) == null
                ? void 0
                : k.focus({ preventScroll: !0 });
            });
          break;
        case F.Tab:
          g.preventDefault(),
            g.stopPropagation(),
            u({ type: 1 }),
            ee().nextFrame(() => {
              hr(i.buttonRef.current, g.shiftKey ? Be.Previous : Be.Next);
            });
          break;
        default:
          g.key.length === 1 &&
            (u({ type: 3, value: g.key }),
            v.setTimeout(() => u({ type: 4 }), 350));
          break;
      }
    }),
    A = R((g) => {
      switch (g.key) {
        case F.Space:
          g.preventDefault();
          break;
      }
    }),
    x = s.useMemo(() => ({ open: i.menuState === 0 }), [i]),
    N = {
      "aria-activedescendant":
        i.activeItemIndex === null || (r = i.items[i.activeItemIndex]) == null
          ? void 0
          : r.id,
      "aria-labelledby": (n = i.buttonRef.current) == null ? void 0 : n.id,
      id: l,
      onKeyDown: h,
      onKeyUp: A,
      role: "menu",
      tabIndex: 0,
      ref: d,
    };
  return ve({
    ourProps: N,
    theirProps: a,
    slot: x,
    defaultTag: Cr,
    features: Xr,
    visible: w,
    name: "Menu.Items",
  });
}
let Ur = s.Fragment;
function Qr(e, t) {
  let r = Ye(),
    { id: n = `headlessui-menu-item-${r}`, disabled: o = !1, ...l } = e,
    [a, i] = Ne("Menu.Item"),
    u = a.activeItemIndex !== null ? a.items[a.activeItemIndex].id === n : !1,
    d = s.useRef(null),
    p = pe(t, d);
  V(() => {
    if (a.__demoMode || a.menuState !== 0 || !u || a.activationTrigger === 0)
      return;
    let k = ee();
    return (
      k.requestAnimationFrame(() => {
        var z, D;
        (D = (z = d.current) == null ? void 0 : z.scrollIntoView) == null ||
          D.call(z, { block: "nearest" });
      }),
      k.dispose
    );
  }, [a.__demoMode, d, u, a.menuState, a.activationTrigger, a.activeItemIndex]);
  let v = Rr(d),
    y = s.useRef({
      disabled: o,
      domRef: d,
      get textValue() {
        return v();
      },
    });
  V(() => {
    y.current.disabled = o;
  }, [y, o]),
    V(
      () => (i({ type: 5, id: n, dataRef: y }), () => i({ type: 6, id: n })),
      [y, n]
    );
  let w = R(() => {
      i({ type: 1 });
    }),
    h = R((k) => {
      if (o) return k.preventDefault();
      i({ type: 1 }), bt(a.buttonRef.current);
    }),
    A = R(() => {
      if (o) return i({ type: 2, focus: Z.Nothing });
      i({ type: 2, focus: Z.Specific, id: n });
    }),
    x = Pr(),
    N = R((k) => x.update(k)),
    g = R((k) => {
      x.wasMoved(k) &&
        (o || u || i({ type: 2, focus: Z.Specific, id: n, trigger: 0 }));
    }),
    S = R((k) => {
      x.wasMoved(k) && (o || (u && i({ type: 2, focus: Z.Nothing })));
    }),
    P = s.useMemo(() => ({ active: u, disabled: o, close: w }), [u, o, w]);
  return ve({
    ourProps: {
      id: n,
      ref: p,
      role: "menuitem",
      tabIndex: o === !0 ? void 0 : -1,
      "aria-disabled": o === !0 ? !0 : void 0,
      disabled: void 0,
      onClick: h,
      onFocus: A,
      onPointerEnter: N,
      onMouseEnter: N,
      onPointerMove: g,
      onMouseMove: g,
      onPointerLeave: S,
      onMouseLeave: S,
    },
    theirProps: l,
    slot: P,
    defaultTag: Ur,
    name: "Menu.Item",
  });
}
let qr = fe(Hr),
  Kr = fe(zr),
  Wr = fe(Yr),
  Zr = fe(Qr),
  Ee = Object.assign(qr, { Button: Kr, Items: Wr, Item: Zr });
function Vr(e = 0) {
  let [t, r] = s.useState(e),
    n = We(),
    o = s.useCallback(
      (u) => {
        n.current && r((d) => d | u);
      },
      [t, n]
    ),
    l = s.useCallback((u) => !!(t & u), [t]),
    a = s.useCallback(
      (u) => {
        n.current && r((d) => d & ~u);
      },
      [r, n]
    ),
    i = s.useCallback(
      (u) => {
        n.current && r((d) => d ^ u);
      },
      [r]
    );
  return { flags: t, addFlag: o, hasFlag: l, removeFlag: a, toggleFlag: i };
}
function Jr(e) {
  let t = { called: !1 };
  return (...r) => {
    if (!t.called) return (t.called = !0), e(...r);
  };
}
function Fe(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function De(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
function _r(e, t) {
  let r = ee();
  if (!e) return r.dispose;
  let { transitionDuration: n, transitionDelay: o } = getComputedStyle(e),
    [l, a] = [n, o].map((u) => {
      let [d = 0] = u
        .split(",")
        .filter(Boolean)
        .map((p) => (p.includes("ms") ? parseFloat(p) : parseFloat(p) * 1e3))
        .sort((p, v) => v - p);
      return d;
    }),
    i = l + a;
  if (i !== 0) {
    r.group((d) => {
      d.setTimeout(() => {
        t(), d.dispose();
      }, i),
        d.addEventListener(e, "transitionrun", (p) => {
          p.target === p.currentTarget && d.dispose();
        });
    });
    let u = r.addEventListener(e, "transitionend", (d) => {
      d.target === d.currentTarget && (t(), u());
    });
  } else t();
  return r.add(() => t()), r.dispose;
}
function $r(e, t, r, n) {
  let o = r ? "enter" : "leave",
    l = ee(),
    a = n !== void 0 ? Jr(n) : () => {};
  o === "enter" && (e.removeAttribute("hidden"), (e.style.display = ""));
  let i = U(o, { enter: () => t.enter, leave: () => t.leave }),
    u = U(o, { enter: () => t.enterTo, leave: () => t.leaveTo }),
    d = U(o, { enter: () => t.enterFrom, leave: () => t.leaveFrom });
  return (
    De(
      e,
      ...t.enter,
      ...t.enterTo,
      ...t.enterFrom,
      ...t.leave,
      ...t.leaveFrom,
      ...t.leaveTo,
      ...t.entered
    ),
    Fe(e, ...i, ...d),
    l.nextFrame(() => {
      De(e, ...d),
        Fe(e, ...u),
        _r(e, () => (De(e, ...i), Fe(e, ...t.entered), a()));
    }),
    l.dispose
  );
}
function en({ container: e, direction: t, classes: r, onStart: n, onStop: o }) {
  let l = We(),
    a = xe(),
    i = ie(t);
  V(() => {
    let u = ee();
    a.add(u.dispose);
    let d = e.current;
    if (d && i.current !== "idle" && l.current)
      return (
        u.dispose(),
        n.current(i.current),
        u.add(
          $r(d, r.current, i.current === "enter", () => {
            u.dispose(), o.current(i.current);
          })
        ),
        u.dispose
      );
  }, [t]);
}
function se(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let ke = s.createContext(null);
ke.displayName = "TransitionContext";
var tn = ((e) => ((e.Visible = "visible"), (e.Hidden = "hidden"), e))(tn || {});
function rn() {
  let e = s.useContext(ke);
  if (e === null)
    throw new Error(
      "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
    );
  return e;
}
function nn() {
  let e = s.useContext(Ie);
  if (e === null)
    throw new Error(
      "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
    );
  return e;
}
let Ie = s.createContext(null);
Ie.displayName = "NestingContext";
function Pe(e) {
  return "children" in e
    ? Pe(e.children)
    : e.current
        .filter(({ el: t }) => t.current !== null)
        .filter(({ state: t }) => t === "visible").length > 0;
}
function Et(e, t) {
  let r = ie(e),
    n = s.useRef([]),
    o = We(),
    l = xe(),
    a = R((w, h = $.Hidden) => {
      let A = n.current.findIndex(({ el: x }) => x === w);
      A !== -1 &&
        (U(h, {
          [$.Unmount]() {
            n.current.splice(A, 1);
          },
          [$.Hidden]() {
            n.current[A].state = "hidden";
          },
        }),
        l.microTask(() => {
          var x;
          !Pe(n) && o.current && ((x = r.current) == null || x.call(r));
        }));
    }),
    i = R((w) => {
      let h = n.current.find(({ el: A }) => A === w);
      return (
        h
          ? h.state !== "visible" && (h.state = "visible")
          : n.current.push({ el: w, state: "visible" }),
        () => a(w, $.Unmount)
      );
    }),
    u = s.useRef([]),
    d = s.useRef(Promise.resolve()),
    p = s.useRef({ enter: [], leave: [], idle: [] }),
    v = R((w, h, A) => {
      u.current.splice(0),
        t &&
          (t.chains.current[h] = t.chains.current[h].filter(([x]) => x !== w)),
        t == null ||
          t.chains.current[h].push([
            w,
            new Promise((x) => {
              u.current.push(x);
            }),
          ]),
        t == null ||
          t.chains.current[h].push([
            w,
            new Promise((x) => {
              Promise.all(p.current[h].map(([N, g]) => g)).then(() => x());
            }),
          ]),
        h === "enter"
          ? (d.current = d.current
              .then(() => (t == null ? void 0 : t.wait.current))
              .then(() => A(h)))
          : A(h);
    }),
    y = R((w, h, A) => {
      Promise.all(p.current[h].splice(0).map(([x, N]) => N))
        .then(() => {
          var x;
          (x = u.current.shift()) == null || x();
        })
        .then(() => A(h));
    });
  return s.useMemo(
    () => ({
      children: n,
      register: i,
      unregister: a,
      onStart: v,
      onStop: y,
      wait: d,
      chains: p,
    }),
    [i, a, n, v, y, p, d]
  );
}
function on() {}
let an = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function lt(e) {
  var t;
  let r = {};
  for (let n of an) r[n] = (t = e[n]) != null ? t : on;
  return r;
}
function ln(e) {
  let t = s.useRef(lt(e));
  return (
    s.useEffect(() => {
      t.current = lt(e);
    }, [e]),
    t
  );
}
let sn = "div",
  xt = Ae.RenderStrategy;
function un(e, t) {
  let {
      beforeEnter: r,
      afterEnter: n,
      beforeLeave: o,
      afterLeave: l,
      enter: a,
      enterFrom: i,
      enterTo: u,
      entered: d,
      leave: p,
      leaveFrom: v,
      leaveTo: y,
      ...w
    } = e,
    h = s.useRef(null),
    A = pe(h, t),
    x = w.unmount ? $.Unmount : $.Hidden,
    { show: N, appear: g, initial: S } = rn(),
    [P, k] = s.useState(N ? "visible" : "hidden"),
    z = nn(),
    { register: D, unregister: Q } = z,
    L = s.useRef(null);
  s.useEffect(() => D(h), [D, h]),
    s.useEffect(() => {
      if (x === $.Hidden && h.current) {
        if (N && P !== "visible") {
          k("visible");
          return;
        }
        return U(P, { hidden: () => Q(h), visible: () => D(h) });
      }
    }, [P, h, D, Q, N, x]);
  let J = ie({
      enter: se(a),
      enterFrom: se(i),
      enterTo: se(u),
      entered: se(d),
      leave: se(p),
      leaveFrom: se(v),
      leaveTo: se(y),
    }),
    C = ln({ beforeEnter: r, afterEnter: n, beforeLeave: o, afterLeave: l }),
    te = Xe();
  s.useEffect(() => {
    if (te && P === "visible" && h.current === null)
      throw new Error(
        "Did you forget to passthrough the `ref` to the actual DOM node?"
      );
  }, [h, P, te]);
  let K = S && !g,
    me = (() =>
      !te || K || L.current === N ? "idle" : N ? "enter" : "leave")(),
    j = Vr(0),
    re = R((m) =>
      U(m, {
        enter: () => {
          j.addFlag(Y.Opening), C.current.beforeEnter();
        },
        leave: () => {
          j.addFlag(Y.Closing), C.current.beforeLeave();
        },
        idle: () => {},
      })
    ),
    _ = R((m) =>
      U(m, {
        enter: () => {
          j.removeFlag(Y.Opening), C.current.afterEnter();
        },
        leave: () => {
          j.removeFlag(Y.Closing), C.current.afterLeave();
        },
        idle: () => {},
      })
    ),
    X = Et(() => {
      k("hidden"), Q(h);
    }, z);
  en({
    container: h,
    classes: J,
    direction: me,
    onStart: ie((m) => {
      X.onStart(h, m, re);
    }),
    onStop: ie((m) => {
      X.onStop(h, m, _), m === "leave" && !Pe(X) && (k("hidden"), Q(h));
    }),
  }),
    s.useEffect(() => {
      K && (x === $.Hidden ? (L.current = null) : (L.current = N));
    }, [N, K, P]);
  let f = w,
    c = { ref: A };
  return (
    g &&
      N &&
      S &&
      (f = {
        ...f,
        className: He(w.className, ...J.current.enter, ...J.current.enterFrom),
      }),
    b.createElement(
      Ie.Provider,
      { value: X },
      b.createElement(
        At,
        { value: U(P, { visible: Y.Open, hidden: Y.Closed }) | j.flags },
        ve({
          ourProps: c,
          theirProps: f,
          defaultTag: sn,
          features: xt,
          visible: P === "visible",
          name: "Transition.Child",
        })
      )
    )
  );
}
function cn(e, t) {
  let { show: r, appear: n = !1, unmount: o, ...l } = e,
    a = s.useRef(null),
    i = pe(a, t);
  Xe();
  let u = Ke();
  if (
    (r === void 0 && u !== null && (r = (u & Y.Open) === Y.Open),
    ![!0, !1].includes(r))
  )
    throw new Error(
      "A <Transition /> is used but it is missing a `show={true | false}` prop."
    );
  let [d, p] = s.useState(r ? "visible" : "hidden"),
    v = Et(() => {
      p("hidden");
    }),
    [y, w] = s.useState(!0),
    h = s.useRef([r]);
  V(() => {
    y !== !1 &&
      h.current[h.current.length - 1] !== r &&
      (h.current.push(r), w(!1));
  }, [h, r]);
  let A = s.useMemo(() => ({ show: r, appear: n, initial: y }), [r, n, y]);
  s.useEffect(() => {
    if (r) p("visible");
    else if (!Pe(v)) p("hidden");
    else {
      let S = a.current;
      if (!S) return;
      let P = S.getBoundingClientRect();
      P.x === 0 && P.y === 0 && P.width === 0 && P.height === 0 && p("hidden");
    }
  }, [r, v]);
  let x = { unmount: o },
    N = R(() => {
      var S;
      y && w(!1), (S = e.beforeEnter) == null || S.call(e);
    }),
    g = R(() => {
      var S;
      y && w(!1), (S = e.beforeLeave) == null || S.call(e);
    });
  return b.createElement(
    Ie.Provider,
    { value: v },
    b.createElement(
      ke.Provider,
      { value: A },
      ve({
        ourProps: {
          ...x,
          as: s.Fragment,
          children: b.createElement(Mt, {
            ref: i,
            ...x,
            ...l,
            beforeEnter: N,
            beforeLeave: g,
          }),
        },
        theirProps: {},
        defaultTag: s.Fragment,
        features: xt,
        visible: d === "visible",
        name: "Transition",
      })
    )
  );
}
function dn(e, t) {
  let r = s.useContext(ke) !== null,
    n = Ke() !== null;
  return b.createElement(
    b.Fragment,
    null,
    !r && n
      ? b.createElement(Ge, { ref: t, ...e })
      : b.createElement(Mt, { ref: t, ...e })
  );
}
let Ge = fe(cn),
  Mt = fe(un),
  fn = fe(dn),
  mn = Object.assign(Ge, { Child: fn, Root: Ge });
function pn(e) {
  return ze({
    tag: "svg",
    attr: { viewBox: "0 0 12 16" },
    child: [
      { tag: "path", attr: { fillRule: "evenodd", d: "M0 5l6 6 6-6H0z" } },
    ],
  })(e);
}
const vn = ({ options: e, defaultSelected: t, onChange: r }) => {
    const [n, o] = s.useState(t),
      l = (a) => {
        r(e[a]), o(a);
      };
    return (
      s.useEffect(() => {
        n && r(e[n]);
      }, [n]),
      b.createElement(
        mn,
        {
          as: s.Fragment,
          enter: "transition ease-out duration-100",
          enterFrom: "transform opacity-0 scale-95",
          enterTo: "transform opacity-100 scale-100",
          leave: "transition ease-in duration-75",
          leaveFrom: "transform opacity-100 scale-100",
          leaveTo: "transform opacity-0 scale-95",
        },
        b.createElement(
          Ee.Items,
          {
            className:
              "absolute right-0 z-10 sm:mt-1 lg:mt-2 w-56 origin-top-right divide-y divide-primary-100 rounded-md bg-white shadow-lg ring-1 ring-primary ring-opacity-5 focus:outline-none",
          },
          e.map(({ label: a, icon: i, key: u }, d) =>
            b.createElement(
              "div",
              { className: "py-1 justify-center items-center flex", key: u },
              b.createElement(
                Ee.Item,
                null,
                b.createElement(
                  "a",
                  {
                    onClick: () => l(d),
                    className: ht(
                      n === d ? "bg-grey-100 text-black-900" : "text-black-700",
                      "w-11/12 my-2 sm:px-4 sm:py-2 lg:px-5 lg:py-3 sm:test-sm md:text-md rounded-md lg:text-lg font-regular cursor-pointer hover:bg-primary-100 inline-flex items-center"
                    ),
                  },
                  b.createElement("div", { className: "w-9" }, i),
                  b.createElement("span", { className: "sm:ml-2 lg:ml-3" }, a)
                )
              )
            )
          )
        )
      )
    );
  },
  xn = b.forwardRef((e, t) => {
    const { options: r, selected: n } = e,
      o = r.find((p) => p.key === n),
      [l, a] = s.useState(o ?? r[0]),
      i = (p) => {
        a(p);
      },
      { icon: u, label: d } = l;
    return b.createElement(
      Ee,
      { as: "div", className: "relative font-primary inline-block text-left" },
      b.createElement(
        "div",
        null,
        b.createElement(
          Ee.Button,
          { ref: t, className: "h-max w-full" },
          b.createElement(
            "div",
            {
              className:
                "inline-flex items-center justify-center rounded bg-white sm:test-sm md:text-md lg:text-lg font-regular text-black shadow-sm ring-1 ring-inset ring-primary hover:bg-gray-50",
            },
            b.createElement(
              "div",
              {
                className:
                  "inline-flex items-center justify-between gap-x-4 sm:pl-4 sm:pr-3 sm:py-2 lg:pl-5 lg:pr-4 lg:py-3",
              },
              b.createElement("div", { className: "w-9" }, u),
              d ?? "Select"
            ),
            b.createElement("div", {
              className:
                "inline-block h-100 min-h-[1em] w-border-md self-stretch bg-primary opacity-100 dark",
            }),
            b.createElement(
              "div",
              { className: "sm:pr-4 sm:py-2 sm:pl-2 lg:pr-5 lg:py-3 lg:pl-3" },
              b.createElement(pn, { className: "fill-primary" })
            )
          )
        )
      ),
      b.createElement(vn, { options: r, defaultSelected: 0, onChange: i })
    );
  });
function hn(e) {
  return ze({
    tag: "svg",
    attr: {
      t: "1551322312294",
      style: "",
      viewBox: "0 0 1024 1024",
      version: "1.1",
    },
    child: [
      { tag: "defs", attr: {}, child: [] },
      {
        tag: "path",
        attr: {
          d: "M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z",
        },
      },
      {
        tag: "path",
        attr: {
          d: "M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z",
        },
      },
    ],
  })(e);
}
const Mn = ({ statisticItems: e }) =>
  b.createElement(
    "div",
    {
      className:
        "flex flex-col md:flex-row w-full items-center justify-between",
    },
    e.map((t) =>
      b.createElement(
        "div",
        {
          key: t.title,
          className:
            " flex flex-col my-5 mx-5 items-center text-white justify-center text-center relative",
        },
        b.createElement(
          "p",
          { className: "text-6xl font-bold flex relative" },
          t.statistic,
          b.createElement(
            "span",
            { className: "text-2xl absolute -right-8" },
            b.createElement(hn, null)
          )
        ),
        b.createElement(
          "p",
          { className: "mt-4 text-lg font-medium uppercase" },
          t.title
        )
      )
    )
  );
export {
  An as C,
  Mn as D,
  bn as E,
  xn as F,
  wn as P,
  En as S,
  yn as T,
  ar as c,
  or as u,
};
