import {
  popup_styles_default
} from "./chunk.LGUV6XFR.js";
import {
  o
} from "./chunk.EKCRI76E.js";
import {
  ShoelaceElement,
  e,
  e2,
  i
} from "./chunk.7FMMWSAC.js";
import {
  x
} from "./chunk.MK2GV4O3.js";
import {
  __decorateClass,
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk.LKA3TPUC.js";

// node_modules/@floating-ui/core/dist/floating-ui.core.browser.min.mjs
function t(t3) {
  return t3.split("-")[1];
}
function e3(t3) {
  return "y" === t3 ? "height" : "width";
}
function n(t3) {
  return t3.split("-")[0];
}
function o2(t3) {
  return ["top", "bottom"].includes(n(t3)) ? "x" : "y";
}
function r(r4, i4, a3) {
  let { reference: l3, floating: s3 } = r4;
  const c3 = l3.x + l3.width / 2 - s3.width / 2, f3 = l3.y + l3.height / 2 - s3.height / 2, u3 = o2(i4), m3 = e3(u3), g3 = l3[m3] / 2 - s3[m3] / 2, d3 = "x" === u3;
  let p3;
  switch (n(i4)) {
    case "top":
      p3 = { x: c3, y: l3.y - s3.height };
      break;
    case "bottom":
      p3 = { x: c3, y: l3.y + l3.height };
      break;
    case "right":
      p3 = { x: l3.x + l3.width, y: f3 };
      break;
    case "left":
      p3 = { x: l3.x - s3.width, y: f3 };
      break;
    default:
      p3 = { x: l3.x, y: l3.y };
  }
  switch (t(i4)) {
    case "start":
      p3[u3] -= g3 * (a3 && d3 ? -1 : 1);
      break;
    case "end":
      p3[u3] += g3 * (a3 && d3 ? -1 : 1);
  }
  return p3;
}
var i2 = async (t3, e4, n3) => {
  const { placement: o5 = "bottom", strategy: i4 = "absolute", middleware: a3 = [], platform: l3 } = n3, s3 = a3.filter(Boolean), c3 = await (null == l3.isRTL ? void 0 : l3.isRTL(e4));
  let f3 = await l3.getElementRects({ reference: t3, floating: e4, strategy: i4 }), { x: u3, y: m3 } = r(f3, o5, c3), g3 = o5, d3 = {}, p3 = 0;
  for (let n4 = 0; n4 < s3.length; n4++) {
    const { name: a4, fn: h3 } = s3[n4], { x: y3, y: x4, data: w3, reset: v3 } = await h3({ x: u3, y: m3, initialPlacement: o5, placement: g3, strategy: i4, middlewareData: d3, rects: f3, platform: l3, elements: { reference: t3, floating: e4 } });
    u3 = null != y3 ? y3 : u3, m3 = null != x4 ? x4 : m3, d3 = __spreadProps(__spreadValues({}, d3), { [a4]: __spreadValues(__spreadValues({}, d3[a4]), w3) }), v3 && p3 <= 50 && (p3++, "object" == typeof v3 && (v3.placement && (g3 = v3.placement), v3.rects && (f3 = true === v3.rects ? await l3.getElementRects({ reference: t3, floating: e4, strategy: i4 }) : v3.rects), { x: u3, y: m3 } = r(f3, g3, c3)), n4 = -1);
  }
  return { x: u3, y: m3, placement: g3, strategy: i4, middlewareData: d3 };
};
function a(t3) {
  return "number" != typeof t3 ? function(t4) {
    return __spreadValues({ top: 0, right: 0, bottom: 0, left: 0 }, t4);
  }(t3) : { top: t3, right: t3, bottom: t3, left: t3 };
}
function l(t3) {
  return __spreadProps(__spreadValues({}, t3), { top: t3.y, left: t3.x, right: t3.x + t3.width, bottom: t3.y + t3.height });
}
async function s(t3, e4) {
  var n3;
  void 0 === e4 && (e4 = {});
  const { x: o5, y: r4, platform: i4, rects: s3, elements: c3, strategy: f3 } = t3, { boundary: u3 = "clippingAncestors", rootBoundary: m3 = "viewport", elementContext: g3 = "floating", altBoundary: d3 = false, padding: p3 = 0 } = e4, h3 = a(p3), y3 = c3[d3 ? "floating" === g3 ? "reference" : "floating" : g3], x4 = l(await i4.getClippingRect({ element: null == (n3 = await (null == i4.isElement ? void 0 : i4.isElement(y3))) || n3 ? y3 : y3.contextElement || await (null == i4.getDocumentElement ? void 0 : i4.getDocumentElement(c3.floating)), boundary: u3, rootBoundary: m3, strategy: f3 })), w3 = "floating" === g3 ? __spreadProps(__spreadValues({}, s3.floating), { x: o5, y: r4 }) : s3.reference, v3 = await (null == i4.getOffsetParent ? void 0 : i4.getOffsetParent(c3.floating)), b3 = await (null == i4.isElement ? void 0 : i4.isElement(v3)) && await (null == i4.getScale ? void 0 : i4.getScale(v3)) || { x: 1, y: 1 }, R2 = l(i4.convertOffsetParentRelativeRectToViewportRelativeRect ? await i4.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w3, offsetParent: v3, strategy: f3 }) : w3);
  return { top: (x4.top - R2.top + h3.top) / b3.y, bottom: (R2.bottom - x4.bottom + h3.bottom) / b3.y, left: (x4.left - R2.left + h3.left) / b3.x, right: (R2.right - x4.right + h3.right) / b3.x };
}
var c = Math.min;
var f = Math.max;
function u(t3, e4, n3) {
  return f(t3, c(e4, n3));
}
var m = (n3) => ({ name: "arrow", options: n3, async fn(r4) {
  const { element: i4, padding: l3 = 0 } = n3 || {}, { x: s3, y: c3, placement: f3, rects: m3, platform: g3 } = r4;
  if (null == i4)
    return {};
  const d3 = a(l3), p3 = { x: s3, y: c3 }, h3 = o2(f3), y3 = e3(h3), x4 = await g3.getDimensions(i4), w3 = "y" === h3 ? "top" : "left", v3 = "y" === h3 ? "bottom" : "right", b3 = m3.reference[y3] + m3.reference[h3] - p3[h3] - m3.floating[y3], R2 = p3[h3] - m3.reference[h3], A2 = await (null == g3.getOffsetParent ? void 0 : g3.getOffsetParent(i4));
  let P3 = A2 ? "y" === h3 ? A2.clientHeight || 0 : A2.clientWidth || 0 : 0;
  0 === P3 && (P3 = m3.floating[y3]);
  const T3 = b3 / 2 - R2 / 2, O3 = d3[w3], D3 = P3 - x4[y3] - d3[v3], E3 = P3 / 2 - x4[y3] / 2 + T3, L3 = u(O3, E3, D3), k2 = null != t(f3) && E3 != L3 && m3.reference[y3] / 2 - (E3 < O3 ? d3[w3] : d3[v3]) - x4[y3] / 2 < 0;
  return { [h3]: p3[h3] - (k2 ? E3 < O3 ? O3 - E3 : D3 - E3 : 0), data: { [h3]: L3, centerOffset: E3 - L3 } };
} });
var g = ["top", "right", "bottom", "left"];
var d = g.reduce((t3, e4) => t3.concat(e4, e4 + "-start", e4 + "-end"), []);
var p = { left: "right", right: "left", bottom: "top", top: "bottom" };
function h(t3) {
  return t3.replace(/left|right|bottom|top/g, (t4) => p[t4]);
}
function y(n3, r4, i4) {
  void 0 === i4 && (i4 = false);
  const a3 = t(n3), l3 = o2(n3), s3 = e3(l3);
  let c3 = "x" === l3 ? a3 === (i4 ? "end" : "start") ? "right" : "left" : "start" === a3 ? "bottom" : "top";
  return r4.reference[s3] > r4.floating[s3] && (c3 = h(c3)), { main: c3, cross: h(c3) };
}
var x2 = { start: "end", end: "start" };
function w(t3) {
  return t3.replace(/start|end/g, (t4) => x2[t4]);
}
var b = function(e4) {
  return void 0 === e4 && (e4 = {}), { name: "flip", options: e4, async fn(o5) {
    var r4;
    const { placement: i4, middlewareData: a3, rects: l3, initialPlacement: c3, platform: f3, elements: u3 } = o5, _a = e4, { mainAxis: m3 = true, crossAxis: g3 = true, fallbackPlacements: d3, fallbackStrategy: p3 = "bestFit", fallbackAxisSideDirection: x4 = "none", flipAlignment: v3 = true } = _a, b3 = __objRest(_a, ["mainAxis", "crossAxis", "fallbackPlacements", "fallbackStrategy", "fallbackAxisSideDirection", "flipAlignment"]), R2 = n(i4), A2 = n(c3) === c3, P3 = await (null == f3.isRTL ? void 0 : f3.isRTL(u3.floating)), T3 = d3 || (A2 || !v3 ? [h(c3)] : function(t3) {
      const e5 = h(t3);
      return [w(t3), e5, w(e5)];
    }(c3));
    d3 || "none" === x4 || T3.push(...function(e5, o6, r5, i5) {
      const a4 = t(e5);
      let l4 = function(t3, e6, n3) {
        const o7 = ["left", "right"], r6 = ["right", "left"], i6 = ["top", "bottom"], a5 = ["bottom", "top"];
        switch (t3) {
          case "top":
          case "bottom":
            return n3 ? e6 ? r6 : o7 : e6 ? o7 : r6;
          case "left":
          case "right":
            return e6 ? i6 : a5;
          default:
            return [];
        }
      }(n(e5), "start" === r5, i5);
      return a4 && (l4 = l4.map((t3) => t3 + "-" + a4), o6 && (l4 = l4.concat(l4.map(w)))), l4;
    }(c3, v3, x4, P3));
    const O3 = [c3, ...T3], D3 = await s(o5, b3), E3 = [];
    let L3 = (null == (r4 = a3.flip) ? void 0 : r4.overflows) || [];
    if (m3 && E3.push(D3[R2]), g3) {
      const { main: t3, cross: e5 } = y(i4, l3, P3);
      E3.push(D3[t3], D3[e5]);
    }
    if (L3 = [...L3, { placement: i4, overflows: E3 }], !E3.every((t3) => t3 <= 0)) {
      var k2, B;
      const t3 = ((null == (k2 = a3.flip) ? void 0 : k2.index) || 0) + 1, e5 = O3[t3];
      if (e5)
        return { data: { index: t3, overflows: L3 }, reset: { placement: e5 } };
      let n3 = null == (B = L3.filter((t4) => t4.overflows[0] <= 0).sort((t4, e6) => t4.overflows[1] - e6.overflows[1])[0]) ? void 0 : B.placement;
      if (!n3)
        switch (p3) {
          case "bestFit": {
            var C2;
            const t4 = null == (C2 = L3.map((t5) => [t5.placement, t5.overflows.filter((t6) => t6 > 0).reduce((t6, e6) => t6 + e6, 0)]).sort((t5, e6) => t5[1] - e6[1])[0]) ? void 0 : C2[0];
            t4 && (n3 = t4);
            break;
          }
          case "initialPlacement":
            n3 = c3;
        }
      if (i4 !== n3)
        return { reset: { placement: n3 } };
    }
    return {};
  } };
};
var O = function(e4) {
  return void 0 === e4 && (e4 = 0), { name: "offset", options: e4, async fn(r4) {
    const { x: i4, y: a3 } = r4, l3 = await async function(e5, r5) {
      const { placement: i5, platform: a4, elements: l4 } = e5, s3 = await (null == a4.isRTL ? void 0 : a4.isRTL(l4.floating)), c3 = n(i5), f3 = t(i5), u3 = "x" === o2(i5), m3 = ["left", "top"].includes(c3) ? -1 : 1, g3 = s3 && u3 ? -1 : 1, d3 = "function" == typeof r5 ? r5(e5) : r5;
      let { mainAxis: p3, crossAxis: h3, alignmentAxis: y3 } = "number" == typeof d3 ? { mainAxis: d3, crossAxis: 0, alignmentAxis: null } : __spreadValues({ mainAxis: 0, crossAxis: 0, alignmentAxis: null }, d3);
      return f3 && "number" == typeof y3 && (h3 = "end" === f3 ? -1 * y3 : y3), u3 ? { x: h3 * g3, y: p3 * m3 } : { x: p3 * m3, y: h3 * g3 };
    }(r4, e4);
    return { x: i4 + l3.x, y: a3 + l3.y, data: l3 };
  } };
};
function D(t3) {
  return "x" === t3 ? "y" : "x";
}
var E = function(t3) {
  return void 0 === t3 && (t3 = {}), { name: "shift", options: t3, async fn(e4) {
    const { x: r4, y: i4, placement: a3 } = e4, _a = t3, { mainAxis: l3 = true, crossAxis: c3 = false, limiter: f3 = { fn: (t4) => {
      let { x: e5, y: n3 } = t4;
      return { x: e5, y: n3 };
    } } } = _a, m3 = __objRest(_a, ["mainAxis", "crossAxis", "limiter"]), g3 = { x: r4, y: i4 }, d3 = await s(e4, m3), p3 = o2(n(a3)), h3 = D(p3);
    let y3 = g3[p3], x4 = g3[h3];
    if (l3) {
      const t4 = "y" === p3 ? "bottom" : "right";
      y3 = u(y3 + d3["y" === p3 ? "top" : "left"], y3, y3 - d3[t4]);
    }
    if (c3) {
      const t4 = "y" === h3 ? "bottom" : "right";
      x4 = u(x4 + d3["y" === h3 ? "top" : "left"], x4, x4 - d3[t4]);
    }
    const w3 = f3.fn(__spreadProps(__spreadValues({}, e4), { [p3]: y3, [h3]: x4 }));
    return __spreadProps(__spreadValues({}, w3), { data: { x: w3.x - r4, y: w3.y - i4 } });
  } };
};
var k = function(e4) {
  return void 0 === e4 && (e4 = {}), { name: "size", options: e4, async fn(r4) {
    const { placement: i4, rects: a3, platform: l3, elements: u3 } = r4, _a = e4, { apply: m3 = () => {
    } } = _a, g3 = __objRest(_a, ["apply"]), d3 = await s(r4, g3), p3 = n(i4), h3 = t(i4), y3 = "x" === o2(i4), { width: x4, height: w3 } = a3.floating;
    let v3, b3;
    "top" === p3 || "bottom" === p3 ? (v3 = p3, b3 = h3 === (await (null == l3.isRTL ? void 0 : l3.isRTL(u3.floating)) ? "start" : "end") ? "left" : "right") : (b3 = p3, v3 = "end" === h3 ? "top" : "bottom");
    const R2 = w3 - d3[v3], A2 = x4 - d3[b3];
    let P3 = R2, T3 = A2;
    if (y3 ? T3 = c(x4 - d3.right - d3.left, A2) : P3 = c(w3 - d3.bottom - d3.top, R2), !r4.middlewareData.shift && !h3) {
      const t3 = f(d3.left, 0), e5 = f(d3.right, 0), n3 = f(d3.top, 0), o5 = f(d3.bottom, 0);
      y3 ? T3 = x4 - 2 * (0 !== t3 || 0 !== e5 ? t3 + e5 : f(d3.left, d3.right)) : P3 = w3 - 2 * (0 !== n3 || 0 !== o5 ? n3 + o5 : f(d3.top, d3.bottom));
    }
    await m3(__spreadProps(__spreadValues({}, r4), { availableWidth: T3, availableHeight: P3 }));
    const O3 = await l3.getDimensions(u3.floating);
    return x4 !== O3.width || w3 !== O3.height ? { reset: { rects: true } } : {};
  } };
};

// node_modules/@floating-ui/dom/dist/floating-ui.dom.browser.min.mjs
function n2(t3) {
  var e4;
  return (null == (e4 = t3.ownerDocument) ? void 0 : e4.defaultView) || window;
}
function o3(t3) {
  return n2(t3).getComputedStyle(t3);
}
var i3 = Math.min;
var r2 = Math.max;
var l2 = Math.round;
function c2(t3) {
  const e4 = o3(t3);
  let n3 = parseFloat(e4.width), i4 = parseFloat(e4.height);
  const r4 = t3.offsetWidth, c3 = t3.offsetHeight, s3 = l2(n3) !== r4 || l2(i4) !== c3;
  return s3 && (n3 = r4, i4 = c3), { width: n3, height: i4, fallback: s3 };
}
function s2(t3) {
  return h2(t3) ? (t3.nodeName || "").toLowerCase() : "";
}
var f2;
function u2() {
  if (f2)
    return f2;
  const t3 = navigator.userAgentData;
  return t3 && Array.isArray(t3.brands) ? (f2 = t3.brands.map((t4) => t4.brand + "/" + t4.version).join(" "), f2) : navigator.userAgent;
}
function a2(t3) {
  return t3 instanceof n2(t3).HTMLElement;
}
function d2(t3) {
  return t3 instanceof n2(t3).Element;
}
function h2(t3) {
  return t3 instanceof n2(t3).Node;
}
function p2(t3) {
  if ("undefined" == typeof ShadowRoot)
    return false;
  return t3 instanceof n2(t3).ShadowRoot || t3 instanceof ShadowRoot;
}
function g2(t3) {
  const { overflow: e4, overflowX: n3, overflowY: i4, display: r4 } = o3(t3);
  return /auto|scroll|overlay|hidden|clip/.test(e4 + i4 + n3) && !["inline", "contents"].includes(r4);
}
function m2(t3) {
  return ["table", "td", "th"].includes(s2(t3));
}
function y2(t3) {
  const e4 = /firefox/i.test(u2()), n3 = o3(t3), i4 = n3.backdropFilter || n3.WebkitBackdropFilter;
  return "none" !== n3.transform || "none" !== n3.perspective || !!i4 && "none" !== i4 || e4 && "filter" === n3.willChange || e4 && !!n3.filter && "none" !== n3.filter || ["transform", "perspective"].some((t4) => n3.willChange.includes(t4)) || ["paint", "layout", "strict", "content"].some((t4) => {
    const e5 = n3.contain;
    return null != e5 && e5.includes(t4);
  });
}
function x3() {
  return /^((?!chrome|android).)*safari/i.test(u2());
}
function w2(t3) {
  return ["html", "body", "#document"].includes(s2(t3));
}
function v2(t3) {
  return d2(t3) ? t3 : t3.contextElement;
}
var b2 = { x: 1, y: 1 };
function L2(t3) {
  const e4 = v2(t3);
  if (!a2(e4))
    return b2;
  const n3 = e4.getBoundingClientRect(), { width: o5, height: i4, fallback: r4 } = c2(e4);
  let s3 = (r4 ? l2(n3.width) : n3.width) / o5, f3 = (r4 ? l2(n3.height) : n3.height) / i4;
  return s3 && Number.isFinite(s3) || (s3 = 1), f3 && Number.isFinite(f3) || (f3 = 1), { x: s3, y: f3 };
}
function E2(t3, e4, o5, i4) {
  var r4, l3;
  void 0 === e4 && (e4 = false), void 0 === o5 && (o5 = false);
  const c3 = t3.getBoundingClientRect(), s3 = v2(t3);
  let f3 = b2;
  e4 && (i4 ? d2(i4) && (f3 = L2(i4)) : f3 = L2(t3));
  const u3 = s3 ? n2(s3) : window, a3 = x3() && o5;
  let h3 = (c3.left + (a3 && (null == (r4 = u3.visualViewport) ? void 0 : r4.offsetLeft) || 0)) / f3.x, p3 = (c3.top + (a3 && (null == (l3 = u3.visualViewport) ? void 0 : l3.offsetTop) || 0)) / f3.y, g3 = c3.width / f3.x, m3 = c3.height / f3.y;
  if (s3) {
    const t4 = n2(s3), e5 = i4 && d2(i4) ? n2(i4) : i4;
    let o6 = t4.frameElement;
    for (; o6 && i4 && e5 !== t4; ) {
      const t5 = L2(o6), e6 = o6.getBoundingClientRect(), i5 = getComputedStyle(o6);
      e6.x += (o6.clientLeft + parseFloat(i5.paddingLeft)) * t5.x, e6.y += (o6.clientTop + parseFloat(i5.paddingTop)) * t5.y, h3 *= t5.x, p3 *= t5.y, g3 *= t5.x, m3 *= t5.y, h3 += e6.x, p3 += e6.y, o6 = n2(o6).frameElement;
    }
  }
  return { width: g3, height: m3, top: p3, right: h3 + g3, bottom: p3 + m3, left: h3, x: h3, y: p3 };
}
function R(t3) {
  return ((h2(t3) ? t3.ownerDocument : t3.document) || window.document).documentElement;
}
function T2(t3) {
  return d2(t3) ? { scrollLeft: t3.scrollLeft, scrollTop: t3.scrollTop } : { scrollLeft: t3.pageXOffset, scrollTop: t3.pageYOffset };
}
function C(t3) {
  return E2(R(t3)).left + T2(t3).scrollLeft;
}
function F(t3) {
  if ("html" === s2(t3))
    return t3;
  const e4 = t3.assignedSlot || t3.parentNode || p2(t3) && t3.host || R(t3);
  return p2(e4) ? e4.host : e4;
}
function W(t3) {
  const e4 = F(t3);
  return w2(e4) ? e4.ownerDocument.body : a2(e4) && g2(e4) ? e4 : W(e4);
}
function D2(t3, e4) {
  var o5;
  void 0 === e4 && (e4 = []);
  const i4 = W(t3), r4 = i4 === (null == (o5 = t3.ownerDocument) ? void 0 : o5.body), l3 = n2(i4);
  return r4 ? e4.concat(l3, l3.visualViewport || [], g2(i4) ? i4 : []) : e4.concat(i4, D2(i4));
}
function S(e4, i4, l3) {
  let c3;
  if ("viewport" === i4)
    c3 = function(t3, e5) {
      const o5 = n2(t3), i5 = R(t3), r4 = o5.visualViewport;
      let l4 = i5.clientWidth, c4 = i5.clientHeight, s4 = 0, f4 = 0;
      if (r4) {
        l4 = r4.width, c4 = r4.height;
        const t4 = x3();
        (!t4 || t4 && "fixed" === e5) && (s4 = r4.offsetLeft, f4 = r4.offsetTop);
      }
      return { width: l4, height: c4, x: s4, y: f4 };
    }(e4, l3);
  else if ("document" === i4)
    c3 = function(t3) {
      const e5 = R(t3), n3 = T2(t3), i5 = t3.ownerDocument.body, l4 = r2(e5.scrollWidth, e5.clientWidth, i5.scrollWidth, i5.clientWidth), c4 = r2(e5.scrollHeight, e5.clientHeight, i5.scrollHeight, i5.clientHeight);
      let s4 = -n3.scrollLeft + C(t3);
      const f4 = -n3.scrollTop;
      return "rtl" === o3(i5).direction && (s4 += r2(e5.clientWidth, i5.clientWidth) - l4), { width: l4, height: c4, x: s4, y: f4 };
    }(R(e4));
  else if (d2(i4))
    c3 = function(t3, e5) {
      const n3 = E2(t3, true, "fixed" === e5), o5 = n3.top + t3.clientTop, i5 = n3.left + t3.clientLeft, r4 = a2(t3) ? L2(t3) : { x: 1, y: 1 };
      return { width: t3.clientWidth * r4.x, height: t3.clientHeight * r4.y, x: i5 * r4.x, y: o5 * r4.y };
    }(i4, l3);
  else {
    const t3 = __spreadValues({}, i4);
    if (x3()) {
      var s3, f3;
      const o5 = n2(e4);
      t3.x -= (null == (s3 = o5.visualViewport) ? void 0 : s3.offsetLeft) || 0, t3.y -= (null == (f3 = o5.visualViewport) ? void 0 : f3.offsetTop) || 0;
    }
    c3 = t3;
  }
  return l(c3);
}
function A(t3, e4) {
  return a2(t3) && "fixed" !== o3(t3).position ? e4 ? e4(t3) : t3.offsetParent : null;
}
function H(t3, e4) {
  const i4 = n2(t3);
  let r4 = A(t3, e4);
  for (; r4 && m2(r4) && "static" === o3(r4).position; )
    r4 = A(r4, e4);
  return r4 && ("html" === s2(r4) || "body" === s2(r4) && "static" === o3(r4).position && !y2(r4)) ? i4 : r4 || function(t4) {
    let e5 = F(t4);
    for (; a2(e5) && !w2(e5); ) {
      if (y2(e5))
        return e5;
      e5 = F(e5);
    }
    return null;
  }(t3) || i4;
}
function V(t3, e4, n3) {
  const o5 = a2(e4), i4 = R(e4), r4 = E2(t3, true, "fixed" === n3, e4);
  let l3 = { scrollLeft: 0, scrollTop: 0 };
  const c3 = { x: 0, y: 0 };
  if (o5 || !o5 && "fixed" !== n3)
    if (("body" !== s2(e4) || g2(i4)) && (l3 = T2(e4)), a2(e4)) {
      const t4 = E2(e4, true);
      c3.x = t4.x + e4.clientLeft, c3.y = t4.y + e4.clientTop;
    } else
      i4 && (c3.x = C(i4));
  return { x: r4.left + l3.scrollLeft - c3.x, y: r4.top + l3.scrollTop - c3.y, width: r4.width, height: r4.height };
}
var O2 = { getClippingRect: function(t3) {
  let { element: e4, boundary: n3, rootBoundary: l3, strategy: c3 } = t3;
  const f3 = "clippingAncestors" === n3 ? function(t4, e5) {
    const n4 = e5.get(t4);
    if (n4)
      return n4;
    let i4 = D2(t4).filter((t5) => d2(t5) && "body" !== s2(t5)), r4 = null;
    const l4 = "fixed" === o3(t4).position;
    let c4 = l4 ? F(t4) : t4;
    for (; d2(c4) && !w2(c4); ) {
      const t5 = o3(c4), e6 = y2(c4);
      "fixed" === t5.position ? r4 = null : (l4 ? e6 || r4 : e6 || "static" !== t5.position || !r4 || !["absolute", "fixed"].includes(r4.position)) ? r4 = t5 : i4 = i4.filter((t6) => t6 !== c4), c4 = F(c4);
    }
    return e5.set(t4, i4), i4;
  }(e4, this._c) : [].concat(n3), u3 = [...f3, l3], a3 = u3[0], h3 = u3.reduce((t4, n4) => {
    const o5 = S(e4, n4, c3);
    return t4.top = r2(o5.top, t4.top), t4.right = i3(o5.right, t4.right), t4.bottom = i3(o5.bottom, t4.bottom), t4.left = r2(o5.left, t4.left), t4;
  }, S(e4, a3, c3));
  return { width: h3.right - h3.left, height: h3.bottom - h3.top, x: h3.left, y: h3.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(t3) {
  let { rect: e4, offsetParent: n3, strategy: o5 } = t3;
  const i4 = a2(n3), r4 = R(n3);
  if (n3 === r4)
    return e4;
  let l3 = { scrollLeft: 0, scrollTop: 0 }, c3 = { x: 1, y: 1 };
  const f3 = { x: 0, y: 0 };
  if ((i4 || !i4 && "fixed" !== o5) && (("body" !== s2(n3) || g2(r4)) && (l3 = T2(n3)), a2(n3))) {
    const t4 = E2(n3);
    c3 = L2(n3), f3.x = t4.x + n3.clientLeft, f3.y = t4.y + n3.clientTop;
  }
  return { width: e4.width * c3.x, height: e4.height * c3.y, x: e4.x * c3.x - l3.scrollLeft * c3.x + f3.x, y: e4.y * c3.y - l3.scrollTop * c3.y + f3.y };
}, isElement: d2, getDimensions: function(t3) {
  return a2(t3) ? c2(t3) : t3.getBoundingClientRect();
}, getOffsetParent: H, getDocumentElement: R, getScale: L2, async getElementRects(t3) {
  let { reference: e4, floating: n3, strategy: o5 } = t3;
  const i4 = this.getOffsetParent || H, r4 = this.getDimensions;
  return { reference: V(e4, await i4(n3), o5), floating: __spreadValues({ x: 0, y: 0 }, await r4(n3)) };
}, getClientRects: (t3) => Array.from(t3.getClientRects()), isRTL: (t3) => "rtl" === o3(t3).direction };
function P2(t3, e4, n3, o5) {
  void 0 === o5 && (o5 = {});
  const { ancestorScroll: i4 = true, ancestorResize: r4 = true, elementResize: l3 = true, animationFrame: c3 = false } = o5, s3 = i4 && !c3, f3 = s3 || r4 ? [...d2(t3) ? D2(t3) : t3.contextElement ? D2(t3.contextElement) : [], ...D2(e4)] : [];
  f3.forEach((t4) => {
    s3 && t4.addEventListener("scroll", n3, { passive: true }), r4 && t4.addEventListener("resize", n3);
  });
  let u3, a3 = null;
  if (l3) {
    let o6 = true;
    a3 = new ResizeObserver(() => {
      o6 || n3(), o6 = false;
    }), d2(t3) && !c3 && a3.observe(t3), d2(t3) || !t3.contextElement || c3 || a3.observe(t3.contextElement), a3.observe(e4);
  }
  let h3 = c3 ? E2(t3) : null;
  return c3 && function e5() {
    const o6 = E2(t3);
    !h3 || o6.x === h3.x && o6.y === h3.y && o6.width === h3.width && o6.height === h3.height || n3();
    h3 = o6, u3 = requestAnimationFrame(e5);
  }(), n3(), () => {
    var t4;
    f3.forEach((t5) => {
      s3 && t5.removeEventListener("scroll", n3), r4 && t5.removeEventListener("resize", n3);
    }), null == (t4 = a3) || t4.disconnect(), a3 = null, c3 && cancelAnimationFrame(u3);
  };
}
var z = (t3, n3, o5) => {
  const i4 = /* @__PURE__ */ new Map(), r4 = __spreadValues({ platform: O2 }, o5), l3 = __spreadProps(__spreadValues({}, r4.platform), { _c: i4 });
  return i2(t3, n3, __spreadProps(__spreadValues({}, r4), { platform: l3 }));
};

// node_modules/composed-offset-position/dist/composed-offset-position.browser.min.mjs
function t2(t3) {
  return r3(t3);
}
function o4(t3) {
  return t3.assignedSlot ? t3.assignedSlot : t3.parentNode instanceof ShadowRoot ? t3.parentNode.host : t3.parentNode;
}
function r3(t3) {
  for (let e4 = t3; e4; e4 = o4(e4))
    if (e4 instanceof Element && "none" === getComputedStyle(e4).display)
      return null;
  for (let e4 = o4(t3); e4; e4 = o4(e4)) {
    if (!(e4 instanceof Element))
      continue;
    const t4 = getComputedStyle(e4);
    if ("contents" !== t4.display) {
      if ("static" !== t4.position || "none" !== t4.filter)
        return e4;
      if ("BODY" === e4.tagName)
        return e4;
    }
  }
  return null;
}

// src/components/popup/popup.ts
var SlPopup = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.active = false;
    this.placement = "top";
    this.strategy = "absolute";
    this.distance = 0;
    this.skidding = 0;
    this.arrow = false;
    this.arrowPlacement = "anchor";
    this.arrowPadding = 10;
    this.flip = false;
    this.flipFallbackPlacements = "";
    this.flipFallbackStrategy = "best-fit";
    this.flipPadding = 0;
    this.shift = false;
    this.shiftPadding = 0;
    this.autoSizePadding = 0;
  }
  async connectedCallback() {
    super.connectedCallback();
    await this.updateComplete;
    this.start();
  }
  disconnectedCallback() {
    this.stop();
  }
  async updated(changedProps) {
    super.updated(changedProps);
    if (changedProps.has("active")) {
      if (this.active) {
        this.start();
      } else {
        this.stop();
      }
    }
    if (changedProps.has("anchor")) {
      this.handleAnchorChange();
    }
    if (this.active) {
      await this.updateComplete;
      this.reposition();
    }
  }
  async handleAnchorChange() {
    await this.stop();
    if (this.anchor && typeof this.anchor === "string") {
      const root = this.getRootNode();
      this.anchorEl = root.getElementById(this.anchor);
    } else if (this.anchor instanceof Element) {
      this.anchorEl = this.anchor;
    } else {
      this.anchorEl = this.querySelector('[slot="anchor"]');
    }
    if (this.anchorEl instanceof HTMLSlotElement) {
      this.anchorEl = this.anchorEl.assignedElements({ flatten: true })[0];
    }
    if (!this.anchorEl) {
      throw new Error(
        "Invalid anchor element: no anchor could be found using the anchor slot or the anchor attribute."
      );
    }
    this.start();
  }
  start() {
    if (!this.anchorEl) {
      return;
    }
    this.cleanup = P2(this.anchorEl, this.popup, () => {
      this.reposition();
    });
  }
  async stop() {
    return new Promise((resolve) => {
      if (this.cleanup) {
        this.cleanup();
        this.cleanup = void 0;
        this.removeAttribute("data-current-placement");
        this.style.removeProperty("--auto-size-available-width");
        this.style.removeProperty("--auto-size-available-height");
        requestAnimationFrame(() => resolve());
      } else {
        resolve();
      }
    });
  }
  /** Forces the popup to recalculate and reposition itself. */
  reposition() {
    if (!this.active || !this.anchorEl) {
      return;
    }
    const middleware = [
      // The offset middleware goes first
      O({ mainAxis: this.distance, crossAxis: this.skidding })
    ];
    if (this.sync) {
      middleware.push(
        k({
          apply: ({ rects }) => {
            const syncWidth = this.sync === "width" || this.sync === "both";
            const syncHeight = this.sync === "height" || this.sync === "both";
            this.popup.style.width = syncWidth ? `${rects.reference.width}px` : "";
            this.popup.style.height = syncHeight ? `${rects.reference.height}px` : "";
          }
        })
      );
    } else {
      this.popup.style.width = "";
      this.popup.style.height = "";
    }
    if (this.flip) {
      middleware.push(
        b({
          boundary: this.flipBoundary,
          // @ts-expect-error - We're converting a string attribute to an array here
          fallbackPlacements: this.flipFallbackPlacements,
          fallbackStrategy: this.flipFallbackStrategy === "best-fit" ? "bestFit" : "initialPlacement",
          padding: this.flipPadding
        })
      );
    }
    if (this.shift) {
      middleware.push(
        E({
          boundary: this.shiftBoundary,
          padding: this.shiftPadding
        })
      );
    }
    if (this.autoSize) {
      middleware.push(
        k({
          boundary: this.autoSizeBoundary,
          padding: this.autoSizePadding,
          apply: ({ availableWidth, availableHeight }) => {
            if (this.autoSize === "vertical" || this.autoSize === "both") {
              this.style.setProperty("--auto-size-available-height", `${availableHeight}px`);
            } else {
              this.style.removeProperty("--auto-size-available-height");
            }
            if (this.autoSize === "horizontal" || this.autoSize === "both") {
              this.style.setProperty("--auto-size-available-width", `${availableWidth}px`);
            } else {
              this.style.removeProperty("--auto-size-available-width");
            }
          }
        })
      );
    } else {
      this.style.removeProperty("--auto-size-available-width");
      this.style.removeProperty("--auto-size-available-height");
    }
    if (this.arrow) {
      middleware.push(
        m({
          element: this.arrowEl,
          padding: this.arrowPadding
        })
      );
    }
    const getOffsetParent = this.strategy === "absolute" ? (element) => O2.getOffsetParent(element, t2) : O2.getOffsetParent;
    z(this.anchorEl, this.popup, {
      placement: this.placement,
      middleware,
      strategy: this.strategy,
      platform: __spreadProps(__spreadValues({}, O2), {
        getOffsetParent
      })
    }).then(({ x: x4, y: y3, middlewareData, placement }) => {
      const isRtl = getComputedStyle(this).direction === "rtl";
      const staticSide = { top: "bottom", right: "left", bottom: "top", left: "right" }[placement.split("-")[0]];
      this.setAttribute("data-current-placement", placement);
      Object.assign(this.popup.style, {
        left: `${x4}px`,
        top: `${y3}px`
      });
      if (this.arrow) {
        const arrowX = middlewareData.arrow.x;
        const arrowY = middlewareData.arrow.y;
        let top = "";
        let right = "";
        let bottom = "";
        let left = "";
        if (this.arrowPlacement === "start") {
          const value = typeof arrowX === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
          top = typeof arrowY === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
          right = isRtl ? value : "";
          left = isRtl ? "" : value;
        } else if (this.arrowPlacement === "end") {
          const value = typeof arrowX === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
          right = isRtl ? "" : value;
          left = isRtl ? value : "";
          bottom = typeof arrowY === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
        } else if (this.arrowPlacement === "center") {
          left = typeof arrowX === "number" ? `calc(50% - var(--arrow-size-diagonal))` : "";
          top = typeof arrowY === "number" ? `calc(50% - var(--arrow-size-diagonal))` : "";
        } else {
          left = typeof arrowX === "number" ? `${arrowX}px` : "";
          top = typeof arrowY === "number" ? `${arrowY}px` : "";
        }
        Object.assign(this.arrowEl.style, {
          top,
          right,
          bottom,
          left,
          [staticSide]: "calc(var(--arrow-size-diagonal) * -1)"
        });
      }
    });
    this.emit("sl-reposition");
  }
  render() {
    return x`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <div
        part="popup"
        class=${o({
      popup: true,
      "popup--active": this.active,
      "popup--fixed": this.strategy === "fixed",
      "popup--has-arrow": this.arrow
    })}
      >
        <slot></slot>
        ${this.arrow ? x`<div part="arrow" class="popup__arrow" role="presentation"></div>` : ""}
      </div>
    `;
  }
};
SlPopup.styles = popup_styles_default;
__decorateClass([
  i(".popup")
], SlPopup.prototype, "popup", 2);
__decorateClass([
  i(".popup__arrow")
], SlPopup.prototype, "arrowEl", 2);
__decorateClass([
  e2()
], SlPopup.prototype, "anchor", 2);
__decorateClass([
  e2({ type: Boolean, reflect: true })
], SlPopup.prototype, "active", 2);
__decorateClass([
  e2({ reflect: true })
], SlPopup.prototype, "placement", 2);
__decorateClass([
  e2({ reflect: true })
], SlPopup.prototype, "strategy", 2);
__decorateClass([
  e2({ type: Number })
], SlPopup.prototype, "distance", 2);
__decorateClass([
  e2({ type: Number })
], SlPopup.prototype, "skidding", 2);
__decorateClass([
  e2({ type: Boolean })
], SlPopup.prototype, "arrow", 2);
__decorateClass([
  e2({ attribute: "arrow-placement" })
], SlPopup.prototype, "arrowPlacement", 2);
__decorateClass([
  e2({ attribute: "arrow-padding", type: Number })
], SlPopup.prototype, "arrowPadding", 2);
__decorateClass([
  e2({ type: Boolean })
], SlPopup.prototype, "flip", 2);
__decorateClass([
  e2({
    attribute: "flip-fallback-placements",
    converter: {
      fromAttribute: (value) => {
        return value.split(" ").map((p3) => p3.trim()).filter((p3) => p3 !== "");
      },
      toAttribute: (value) => {
        return value.join(" ");
      }
    }
  })
], SlPopup.prototype, "flipFallbackPlacements", 2);
__decorateClass([
  e2({ attribute: "flip-fallback-strategy" })
], SlPopup.prototype, "flipFallbackStrategy", 2);
__decorateClass([
  e2({ type: Object })
], SlPopup.prototype, "flipBoundary", 2);
__decorateClass([
  e2({ attribute: "flip-padding", type: Number })
], SlPopup.prototype, "flipPadding", 2);
__decorateClass([
  e2({ type: Boolean })
], SlPopup.prototype, "shift", 2);
__decorateClass([
  e2({ type: Object })
], SlPopup.prototype, "shiftBoundary", 2);
__decorateClass([
  e2({ attribute: "shift-padding", type: Number })
], SlPopup.prototype, "shiftPadding", 2);
__decorateClass([
  e2({ attribute: "auto-size" })
], SlPopup.prototype, "autoSize", 2);
__decorateClass([
  e2()
], SlPopup.prototype, "sync", 2);
__decorateClass([
  e2({ type: Object })
], SlPopup.prototype, "autoSizeBoundary", 2);
__decorateClass([
  e2({ attribute: "auto-size-padding", type: Number })
], SlPopup.prototype, "autoSizePadding", 2);
SlPopup = __decorateClass([
  e("sl-popup")
], SlPopup);

export {
  SlPopup
};
