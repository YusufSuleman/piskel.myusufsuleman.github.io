!(function (a, b) {
  function c(a) {
    var b = (ja[a] = {});
    return (
      $.each(a.split(ba), function (a, c) {
        b[c] = !0;
      }),
      b
    );
  }
  function d(a, c, d) {
    if (d === b && 1 === a.nodeType) {
      var e = "data-" + c.replace(la, "-$1").toLowerCase();
      if ("string" == typeof (d = a.getAttribute(e))) {
        try {
          d = "true" === d || ("false" !== d && ("null" === d ? null : +d + "" === d ? +d : ka.test(d) ? $.parseJSON(d) : d));
        } catch (a) {}
        $.data(a, c, d);
      } else d = b;
    }
    return d;
  }
  function e(a) {
    var b;
    for (b in a) if (("data" !== b || !$.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
    return !0;
  }
  function f() {
    return !1;
  }
  function g() {
    return !0;
  }
  function h(a) {
    return !a || !a.parentNode || 11 === a.parentNode.nodeType;
  }
  function i(a, b) {
    do {
      a = a[b];
    } while (a && 1 !== a.nodeType);
    return a;
  }
  function j(a, b, c) {
    if (((b = b || 0), $.isFunction(b)))
      return $.grep(a, function (a, d) {
        return !!b.call(a, d, a) === c;
      });
    if (b.nodeType)
      return $.grep(a, function (a, d) {
        return (a === b) === c;
      });
    if ("string" == typeof b) {
      var d = $.grep(a, function (a) {
        return 1 === a.nodeType;
      });
      if (Ca.test(b)) return $.filter(b, d, !c);
      b = $.filter(b, d);
    }
    return $.grep(a, function (a, d) {
      return $.inArray(a, b) >= 0 === c;
    });
  }
  function k(a) {
    var b = Fa.split("|"),
      c = a.createDocumentFragment();
    if (c.createElement) for (; b.length; ) c.createElement(b.pop());
    return c;
  }
  function l(a, b) {
    return a.getElementsByTagName(b)[0] || a.appendChild(a.ownerDocument.createElement(b));
  }
  function m(a, b) {
    if (1 === b.nodeType && $.hasData(a)) {
      var c,
        d,
        e,
        f = $._data(a),
        g = $._data(b, f),
        h = f.events;
      if (h) {
        delete g.handle, (g.events = {});
        for (c in h) for (d = 0, e = h[c].length; d < e; d++) $.event.add(b, c, h[c][d]);
      }
      g.data && (g.data = $.extend({}, g.data));
    }
  }
  function n(a, b) {
    var c;
    1 === b.nodeType &&
      (b.clearAttributes && b.clearAttributes(),
      b.mergeAttributes && b.mergeAttributes(a),
      (c = b.nodeName.toLowerCase()),
      "object" === c
        ? (b.parentNode && (b.outerHTML = a.outerHTML), $.support.html5Clone && a.innerHTML && !$.trim(b.innerHTML) && (b.innerHTML = a.innerHTML))
        : "input" === c && Oa.test(a.type)
        ? ((b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value))
        : "option" === c
        ? (b.selected = a.defaultSelected)
        : "input" === c || "textarea" === c
        ? (b.defaultValue = a.defaultValue)
        : "script" === c && b.text !== a.text && (b.text = a.text),
      b.removeAttribute($.expando));
  }
  function o(a) {
    return void 0 !== a.getElementsByTagName ? a.getElementsByTagName("*") : void 0 !== a.querySelectorAll ? a.querySelectorAll("*") : [];
  }
  function p(a) {
    Oa.test(a.type) && (a.defaultChecked = a.checked);
  }
  function q(a, b) {
    if (b in a) return b;
    for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = gb.length; e--; ) if ((b = gb[e] + c) in a) return b;
    return d;
  }
  function r(a, b) {
    return (a = b || a), "none" === $.css(a, "display") || !$.contains(a.ownerDocument, a);
  }
  function s(a, b) {
    for (var c, d, e = [], f = 0, g = a.length; f < g; f++)
      (c = a[f]),
        c.style &&
          ((e[f] = $._data(c, "olddisplay")),
          b
            ? (e[f] || "none" !== c.style.display || (c.style.display = ""), "" === c.style.display && r(c) && (e[f] = $._data(c, "olddisplay", w(c.nodeName))))
            : ((d = Ua(c, "display")), e[f] || "none" === d || $._data(c, "olddisplay", d)));
    for (f = 0; f < g; f++) (c = a[f]), c.style && ((b && "none" !== c.style.display && "" !== c.style.display) || (c.style.display = b ? e[f] || "" : "none"));
    return a;
  }
  function t(a, b, c) {
    var d = _a.exec(b);
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
  }
  function u(a, b, c, d) {
    for (var e = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, f = 0; e < 4; e += 2)
      "margin" === c && (f += $.css(a, c + fb[e], !0)),
        d
          ? ("content" === c && (f -= parseFloat(Ua(a, "padding" + fb[e])) || 0), "margin" !== c && (f -= parseFloat(Ua(a, "border" + fb[e] + "Width")) || 0))
          : ((f += parseFloat(Ua(a, "padding" + fb[e])) || 0), "padding" !== c && (f += parseFloat(Ua(a, "border" + fb[e] + "Width")) || 0));
    return f;
  }
  function v(a, b, c) {
    var d = "width" === b ? a.offsetWidth : a.offsetHeight,
      e = !0,
      f = $.support.boxSizing && "border-box" === $.css(a, "boxSizing");
    if (d <= 0) {
      if (((d = Ua(a, b)), (d < 0 || null == d) && (d = a.style[b]), ab.test(d))) return d;
      (e = f && ($.support.boxSizingReliable || d === a.style[b])), (d = parseFloat(d) || 0);
    }
    return d + u(a, b, c || (f ? "border" : "content"), e) + "px";
  }
  function w(a) {
    if (cb[a]) return cb[a];
    var b = $("<" + a + ">").appendTo(P.body),
      c = b.css("display");
    return (
      b.remove(),
      ("none" !== c && "" !== c) ||
        ((Va = P.body.appendChild(Va || $.extend(P.createElement("iframe"), { frameBorder: 0, width: 0, height: 0 }))),
        (Wa && Va.createElement) || ((Wa = (Va.contentWindow || Va.contentDocument).document), Wa.write("<!doctype html><html><body>"), Wa.close()),
        (b = Wa.body.appendChild(Wa.createElement(a))),
        (c = Ua(b, "display")),
        P.body.removeChild(Va)),
      (cb[a] = c),
      c
    );
  }
  function x(a, b, c, d) {
    var e;
    if ($.isArray(b))
      $.each(b, function (b, e) {
        c || ib.test(a) ? d(a, e) : x(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
      });
    else if (c || "object" !== $.type(b)) d(a, b);
    else for (e in b) x(a + "[" + e + "]", b[e], c, d);
  }
  function y(a) {
    return function (b, c) {
      "string" != typeof b && ((c = b), (b = "*"));
      var d,
        e,
        f,
        g = b.toLowerCase().split(ba),
        h = 0,
        i = g.length;
      if ($.isFunction(c)) for (; h < i; h++) (d = g[h]), (f = /^\+/.test(d)), f && (d = d.substr(1) || "*"), (e = a[d] = a[d] || []), e[f ? "unshift" : "push"](c);
    };
  }
  function z(a, c, d, e, f, g) {
    (f = f || c.dataTypes[0]), (g = g || {}), (g[f] = !0);
    for (var h, i = a[f], j = 0, k = i ? i.length : 0, l = a === tb; j < k && (l || !h); j++) "string" == typeof (h = i[j](c, d, e)) && (!l || g[h] ? (h = b) : (c.dataTypes.unshift(h), (h = z(a, c, d, e, h, g))));
    return (!l && h) || g["*"] || (h = z(a, c, d, e, "*", g)), h;
  }
  function A(a, c) {
    var d,
      e,
      f = $.ajaxSettings.flatOptions || {};
    for (d in c) c[d] !== b && ((f[d] ? a : e || (e = {}))[d] = c[d]);
    e && $.extend(!0, a, e);
  }
  function B(a, c, d) {
    var e,
      f,
      g,
      h,
      i = a.contents,
      j = a.dataTypes,
      k = a.responseFields;
    for (f in k) f in d && (c[k[f]] = d[f]);
    for (; "*" === j[0]; ) j.shift(), e === b && (e = a.mimeType || c.getResponseHeader("content-type"));
    if (e)
      for (f in i)
        if (i[f] && i[f].test(e)) {
          j.unshift(f);
          break;
        }
    if (j[0] in d) g = j[0];
    else {
      for (f in d) {
        if (!j[0] || a.converters[f + " " + j[0]]) {
          g = f;
          break;
        }
        h || (h = f);
      }
      g = g || h;
    }
    if (g) return g !== j[0] && j.unshift(g), d[g];
  }
  function C(a, b) {
    var c,
      d,
      e,
      f,
      g = a.dataTypes.slice(),
      h = g[0],
      i = {},
      j = 0;
    if ((a.dataFilter && (b = a.dataFilter(b, a.dataType)), g[1])) for (c in a.converters) i[c.toLowerCase()] = a.converters[c];
    for (; (e = g[++j]); )
      if ("*" !== e) {
        if ("*" !== h && h !== e) {
          if (!(c = i[h + " " + e] || i["* " + e]))
            for (d in i)
              if (((f = d.split(" ")), f[1] === e && (c = i[h + " " + f[0]] || i["* " + f[0]]))) {
                !0 === c ? (c = i[d]) : !0 !== i[d] && ((e = f[0]), g.splice(j--, 0, e));
                break;
              }
          if (!0 !== c)
            if (c && a.throws) b = c(b);
            else
              try {
                b = c(b);
              } catch (a) {
                return { state: "parsererror", error: c ? a : "No conversion from " + h + " to " + e };
              }
        }
        h = e;
      }
    return { state: "success", data: b };
  }
  function D() {
    try {
      return new a.XMLHttpRequest();
    } catch (a) {}
  }
  function E() {
    try {
      return new a.ActiveXObject("Microsoft.XMLHTTP");
    } catch (a) {}
  }
  function F() {
    return (
      setTimeout(function () {
        Db = b;
      }, 0),
      (Db = $.now())
    );
  }
  function G(a, b) {
    $.each(b, function (b, c) {
      for (var d = (Jb[b] || []).concat(Jb["*"]), e = 0, f = d.length; e < f; e++) if (d[e].call(a, b, c)) return;
    });
  }
  function H(a, b, c) {
    var d,
      e = 0,
      f = Ib.length,
      g = $.Deferred().always(function () {
        delete h.elem;
      }),
      h = function () {
        for (var b = Db || F(), c = Math.max(0, i.startTime + i.duration - b), d = 1 - (c / i.duration || 0), e = 0, f = i.tweens.length; e < f; e++) i.tweens[e].run(d);
        return g.notifyWith(a, [i, d, c]), d < 1 && f ? c : (g.resolveWith(a, [i]), !1);
      },
      i = g.promise({
        elem: a,
        props: $.extend({}, b),
        opts: $.extend(!0, { specialEasing: {} }, c),
        originalProperties: b,
        originalOptions: c,
        startTime: Db || F(),
        duration: c.duration,
        tweens: [],
        createTween: function (b, c, d) {
          var e = $.Tween(a, i.opts, b, c, i.opts.specialEasing[b] || i.opts.easing);
          return i.tweens.push(e), e;
        },
        stop: function (b) {
          for (var c = 0, d = b ? i.tweens.length : 0; c < d; c++) i.tweens[c].run(1);
          return b ? g.resolveWith(a, [i, b]) : g.rejectWith(a, [i, b]), this;
        },
      }),
      j = i.props;
    for (I(j, i.opts.specialEasing); e < f; e++) if ((d = Ib[e].call(i, a, j, i.opts))) return d;
    return (
      G(i, j), $.isFunction(i.opts.start) && i.opts.start.call(a, i), $.fx.timer($.extend(h, { anim: i, queue: i.opts.queue, elem: a })), i.progress(i.opts.progress).done(i.opts.done, i.opts.complete).fail(i.opts.fail).always(i.opts.always)
    );
  }
  function I(a, b) {
    var c, d, e, f, g;
    for (c in a)
      if (((d = $.camelCase(c)), (e = b[d]), (f = a[c]), $.isArray(f) && ((e = f[1]), (f = a[c] = f[0])), c !== d && ((a[d] = f), delete a[c]), (g = $.cssHooks[d]) && "expand" in g)) {
        (f = g.expand(f)), delete a[d];
        for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
      } else b[d] = e;
  }
  function J(a, b, c) {
    var d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l = this,
      m = a.style,
      n = {},
      o = [],
      p = a.nodeType && r(a);
    c.queue ||
      ((j = $._queueHooks(a, "fx")),
      null == j.unqueued &&
        ((j.unqueued = 0),
        (k = j.empty.fire),
        (j.empty.fire = function () {
          j.unqueued || k();
        })),
      j.unqueued++,
      l.always(function () {
        l.always(function () {
          j.unqueued--, $.queue(a, "fx").length || j.empty.fire();
        });
      })),
      1 === a.nodeType &&
        ("height" in b || "width" in b) &&
        ((c.overflow = [m.overflow, m.overflowX, m.overflowY]),
        "inline" === $.css(a, "display") && "none" === $.css(a, "float") && ($.support.inlineBlockNeedsLayout && "inline" !== w(a.nodeName) ? (m.zoom = 1) : (m.display = "inline-block"))),
      c.overflow &&
        ((m.overflow = "hidden"),
        $.support.shrinkWrapBlocks ||
          l.done(function () {
            (m.overflow = c.overflow[0]), (m.overflowX = c.overflow[1]), (m.overflowY = c.overflow[2]);
          }));
    for (d in b)
      if (((f = b[d]), Fb.exec(f))) {
        if ((delete b[d], f === (p ? "hide" : "show"))) continue;
        o.push(d);
      }
    if ((g = o.length))
      for (
        h = $._data(a, "fxshow") || $._data(a, "fxshow", {}),
          p
            ? $(a).show()
            : l.done(function () {
                $(a).hide();
              }),
          l.done(function () {
            var b;
            $.removeData(a, "fxshow", !0);
            for (b in n) $.style(a, b, n[b]);
          }),
          d = 0;
        d < g;
        d++
      )
        (e = o[d]), (i = l.createTween(e, p ? h[e] : 0)), (n[e] = h[e] || $.style(a, e)), e in h || ((h[e] = i.start), p && ((i.end = i.start), (i.start = "width" === e || "height" === e ? 1 : 0)));
  }
  function K(a, b, c, d, e) {
    return new K.prototype.init(a, b, c, d, e);
  }
  function L(a, b) {
    for (var c, d = { height: a }, e = 0; e < 4; e += 2 - b) (c = fb[e]), (d["margin" + c] = d["padding" + c] = a);
    return b && (d.opacity = d.width = a), d;
  }
  function M(a) {
    return $.isWindow(a) ? a : 9 === a.nodeType && (a.defaultView || a.parentWindow);
  }
  var N,
    O,
    P = a.document,
    Q = a.location,
    R = a.navigator,
    S = a.jQuery,
    T = a.$,
    U = Array.prototype.push,
    V = Array.prototype.slice,
    W = Array.prototype.indexOf,
    X = Object.prototype.toString,
    Y = Object.prototype.hasOwnProperty,
    Z = String.prototype.trim,
    $ = function (a, b) {
      return new $.fn.init(a, b, N);
    },
    _ = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
    aa = /\S/,
    ba = /\s+/,
    ca = aa.test(" ") ? /^[\s\xA0]+|[\s\xA0]+$/g : /^\s+|\s+$/g,
    da = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
    ea = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    fa = /^[\],:{}\s]*$/,
    ga = function (a, b) {
      return (b + "").toUpperCase();
    },
    ha = function () {
      P.addEventListener ? (P.removeEventListener("DOMContentLoaded", ha, !1), $.ready()) : "complete" === P.readyState && (P.detachEvent("onreadystatechange", ha), $.ready());
    },
    ia = {};
  ($.fn = $.prototype = {
    constructor: $,
    init: function (a, c, d) {
      var e, f, g;
      if (!a) return this;
      if (a.nodeType) return (this.context = this[0] = a), (this.length = 1), this;
      if ("string" == typeof a) {
        if (!(e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : da.exec(a)) || (!e[1] && c)) return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a);
        if (e[1]) return (c = c instanceof $ ? c[0] : c), (g = c && c.nodeType ? c.ownerDocument || c : P), (a = $.parseHTML(e[1], g, !0)), ea.test(e[1]) && $.isPlainObject(c) && this.attr.call(a, c, !0), $.merge(this, a);
        if ((f = P.getElementById(e[2])) && f.parentNode) {
          if (f.id !== e[2]) return d.find(a);
          (this.length = 1), (this[0] = f);
        }
        return (this.context = P), (this.selector = a), this;
      }
      return $.isFunction(a) ? d.ready(a) : (a.selector !== b && ((this.selector = a.selector), (this.context = a.context)), $.makeArray(a, this));
    },
    selector: "",
    jquery: "1.8.0",
    length: 0,
    size: function () {
      return this.length;
    },
    toArray: function () {
      return V.call(this);
    },
    get: function (a) {
      return null == a ? this.toArray() : a < 0 ? this[this.length + a] : this[a];
    },
    pushStack: function (a, b, c) {
      var d = $.merge(this.constructor(), a);
      return (d.prevObject = this), (d.context = this.context), "find" === b ? (d.selector = this.selector + (this.selector ? " " : "") + c) : b && (d.selector = this.selector + "." + b + "(" + c + ")"), d;
    },
    each: function (a, b) {
      return $.each(this, a, b);
    },
    ready: function (a) {
      return $.ready.promise().done(a), this;
    },
    eq: function (a) {
      return (a = +a), -1 === a ? this.slice(a) : this.slice(a, a + 1);
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    slice: function () {
      return this.pushStack(V.apply(this, arguments), "slice", V.call(arguments).join(","));
    },
    map: function (a) {
      return this.pushStack(
        $.map(this, function (b, c) {
          return a.call(b, c, b);
        })
      );
    },
    end: function () {
      return this.prevObject || this.constructor(null);
    },
    push: U,
    sort: [].sort,
    splice: [].splice,
  }),
    ($.fn.init.prototype = $.fn),
    ($.extend = $.fn.extend = function () {
      var a,
        c,
        d,
        e,
        f,
        g,
        h = arguments[0] || {},
        i = 1,
        j = arguments.length,
        k = !1;
      for ("boolean" == typeof h && ((k = h), (h = arguments[1] || {}), (i = 2)), "object" == typeof h || $.isFunction(h) || (h = {}), j === i && ((h = this), --i); i < j; i++)
        if (null != (a = arguments[i]))
          for (c in a)
            (d = h[c]),
              (e = a[c]),
              h !== e && (k && e && ($.isPlainObject(e) || (f = $.isArray(e))) ? (f ? ((f = !1), (g = d && $.isArray(d) ? d : [])) : (g = d && $.isPlainObject(d) ? d : {}), (h[c] = $.extend(k, g, e))) : e !== b && (h[c] = e));
      return h;
    }),
    $.extend({
      noConflict: function (b) {
        return a.$ === $ && (a.$ = T), b && a.jQuery === $ && (a.jQuery = S), $;
      },
      isReady: !1,
      readyWait: 1,
      holdReady: function (a) {
        a ? $.readyWait++ : $.ready(!0);
      },
      ready: function (a) {
        if (!0 === a ? !--$.readyWait : !$.isReady) {
          if (!P.body) return setTimeout($.ready, 1);
          ($.isReady = !0), (!0 !== a && --$.readyWait > 0) || (O.resolveWith(P, [$]), $.fn.trigger && $(P).trigger("ready").off("ready"));
        }
      },
      isFunction: function (a) {
        return "function" === $.type(a);
      },
      isArray:
        Array.isArray ||
        function (a) {
          return "array" === $.type(a);
        },
      isWindow: function (a) {
        return null != a && a == a.window;
      },
      isNumeric: function (a) {
        return !isNaN(parseFloat(a)) && isFinite(a);
      },
      type: function (a) {
        return null == a ? String(a) : ia[X.call(a)] || "object";
      },
      isPlainObject: function (a) {
        if (!a || "object" !== $.type(a) || a.nodeType || $.isWindow(a)) return !1;
        try {
          if (a.constructor && !Y.call(a, "constructor") && !Y.call(a.constructor.prototype, "isPrototypeOf")) return !1;
        } catch (a) {
          return !1;
        }
        var c;
        for (c in a);
        return c === b || Y.call(a, c);
      },
      isEmptyObject: function (a) {
        var b;
        for (b in a) return !1;
        return !0;
      },
      error: function (a) {
        throw new Error(a);
      },
      parseHTML: function (a, b, c) {
        var d;
        return a && "string" == typeof a
          ? ("boolean" == typeof b && ((c = b), (b = 0)), (b = b || P), (d = ea.exec(a)) ? [b.createElement(d[1])] : ((d = $.buildFragment([a], b, c ? null : [])), $.merge([], (d.cacheable ? $.clone(d.fragment) : d.fragment).childNodes)))
          : null;
      },
      parseJSON: function (b) {
        return b && "string" == typeof b
          ? ((b = $.trim(b)),
            a.JSON && a.JSON.parse
              ? a.JSON.parse(b)
              : fa.test(
                  b
                    .replace(/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, "@")
                    .replace(/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g, "]")
                    .replace(/(?:^|:|,)(?:\s*\[)+/g, "")
                )
              ? new Function("return " + b)()
              : void $.error("Invalid JSON: " + b))
          : null;
      },
      parseXML: function (c) {
        var d, e;
        if (!c || "string" != typeof c) return null;
        try {
          a.DOMParser ? ((e = new DOMParser()), (d = e.parseFromString(c, "text/xml"))) : ((d = new ActiveXObject("Microsoft.XMLDOM")), (d.async = "false"), d.loadXML(c));
        } catch (a) {
          d = b;
        }
        return (d && d.documentElement && !d.getElementsByTagName("parsererror").length) || $.error("Invalid XML: " + c), d;
      },
      noop: function () {},
      globalEval: function (b) {
        b &&
          aa.test(b) &&
          (
            a.execScript ||
            function (b) {
              a.eval.call(a, b);
            }
          )(b);
      },
      camelCase: function (a) {
        return a.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, ga);
      },
      nodeName: function (a, b) {
        return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase();
      },
      each: function (a, c, d) {
        var e,
          f = 0,
          g = a.length,
          h = g === b || $.isFunction(a);
        if (d)
          if (h) {
            for (e in a) if (!1 === c.apply(a[e], d)) break;
          } else for (; f < g && !1 !== c.apply(a[f++], d); );
        else if (h) {
          for (e in a) if (!1 === c.call(a[e], e, a[e])) break;
        } else for (; f < g && !1 !== c.call(a[f], f, a[f++]); );
        return a;
      },
      trim: Z
        ? function (a) {
            return null == a ? "" : Z.call(a);
          }
        : function (a) {
            return null == a ? "" : a.toString().replace(ca, "");
          },
      makeArray: function (a, b) {
        var c,
          d = b || [];
        return null != a && ((c = $.type(a)), null == a.length || "string" === c || "function" === c || "regexp" === c || $.isWindow(a) ? U.call(d, a) : $.merge(d, a)), d;
      },
      inArray: function (a, b, c) {
        var d;
        if (b) {
          if (W) return W.call(b, a, c);
          for (d = b.length, c = c ? (c < 0 ? Math.max(0, d + c) : c) : 0; c < d; c++) if (c in b && b[c] === a) return c;
        }
        return -1;
      },
      merge: function (a, c) {
        var d = c.length,
          e = a.length,
          f = 0;
        if ("number" == typeof d) for (; f < d; f++) a[e++] = c[f];
        else for (; c[f] !== b; ) a[e++] = c[f++];
        return (a.length = e), a;
      },
      grep: function (a, b, c) {
        var d,
          e = [],
          f = 0,
          g = a.length;
        for (c = !!c; f < g; f++) (d = !!b(a[f], f)), c !== d && e.push(a[f]);
        return e;
      },
      map: function (a, c, d) {
        var e,
          f,
          g = [],
          h = 0,
          i = a.length;
        if (a instanceof $ || (i !== b && "number" == typeof i && ((i > 0 && a[0] && a[i - 1]) || 0 === i || $.isArray(a)))) for (; h < i; h++) null != (e = c(a[h], h, d)) && (g[g.length] = e);
        else for (f in a) null != (e = c(a[f], f, d)) && (g[g.length] = e);
        return g.concat.apply([], g);
      },
      guid: 1,
      proxy: function (a, c) {
        var d, e, f;
        return (
          "string" == typeof c && ((d = a[c]), (c = a), (a = d)),
          $.isFunction(a)
            ? ((e = V.call(arguments, 2)),
              (f = function () {
                return a.apply(c, e.concat(V.call(arguments)));
              }),
              (f.guid = a.guid = a.guid || f.guid || $.guid++),
              f)
            : b
        );
      },
      access: function (a, c, d, e, f, g, h) {
        var i,
          j = null == d,
          k = 0,
          l = a.length;
        if (d && "object" == typeof d) {
          for (k in d) $.access(a, c, k, d[k], 1, g, e);
          f = 1;
        } else if (e !== b) {
          if (
            ((i = h === b && $.isFunction(e)),
            j &&
              (i
                ? ((i = c),
                  (c = function (a, b, c) {
                    return i.call($(a), c);
                  }))
                : (c.call(a, e), (c = null))),
            c)
          )
            for (; k < l; k++) c(a[k], d, i ? e.call(a[k], k, c(a[k], d)) : e, h);
          f = 1;
        }
        return f ? a : j ? c.call(a) : l ? c(a[0], d) : g;
      },
      now: function () {
        return new Date().getTime();
      },
    }),
    ($.ready.promise = function (b) {
      if (!O)
        if (((O = $.Deferred()), "complete" === P.readyState || ("loading" !== P.readyState && P.addEventListener))) setTimeout($.ready, 1);
        else if (P.addEventListener) P.addEventListener("DOMContentLoaded", ha, !1), a.addEventListener("load", $.ready, !1);
        else {
          P.attachEvent("onreadystatechange", ha), a.attachEvent("onload", $.ready);
          var c = !1;
          try {
            c = null == a.frameElement && P.documentElement;
          } catch (a) {}
          c &&
            c.doScroll &&
            (function a() {
              if (!$.isReady) {
                try {
                  c.doScroll("left");
                } catch (b) {
                  return setTimeout(a, 50);
                }
                $.ready();
              }
            })();
        }
      return O.promise(b);
    }),
    $.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (a, b) {
      ia["[object " + b + "]"] = b.toLowerCase();
    }),
    (N = $(P));
  var ja = {};
  ($.Callbacks = function (a) {
    a = "string" == typeof a ? ja[a] || c(a) : $.extend({}, a);
    var d,
      e,
      f,
      g,
      h,
      i,
      j = [],
      k = !a.once && [],
      l = function (b) {
        for (d = a.memory && b, e = !0, i = g || 0, g = 0, h = j.length, f = !0; j && i < h; i++)
          if (!1 === j[i].apply(b[0], b[1]) && a.stopOnFalse) {
            d = !1;
            break;
          }
        (f = !1), j && (k ? k.length && l(k.shift()) : d ? (j = []) : m.disable());
      },
      m = {
        add: function () {
          if (j) {
            var b = j.length;
            !(function b(c) {
              $.each(c, function (c, d) {
                !$.isFunction(d) || (a.unique && m.has(d)) ? d && d.length && b(d) : j.push(d);
              });
            })(arguments),
              f ? (h = j.length) : d && ((g = b), l(d));
          }
          return this;
        },
        remove: function () {
          return (
            j &&
              $.each(arguments, function (a, b) {
                for (var c; (c = $.inArray(b, j, c)) > -1; ) j.splice(c, 1), f && (c <= h && h--, c <= i && i--);
              }),
            this
          );
        },
        has: function (a) {
          return $.inArray(a, j) > -1;
        },
        empty: function () {
          return (j = []), this;
        },
        disable: function () {
          return (j = k = d = b), this;
        },
        disabled: function () {
          return !j;
        },
        lock: function () {
          return (k = b), d || m.disable(), this;
        },
        locked: function () {
          return !k;
        },
        fireWith: function (a, b) {
          return (b = b || []), (b = [a, b.slice ? b.slice() : b]), !j || (e && !k) || (f ? k.push(b) : l(b)), this;
        },
        fire: function () {
          return m.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!e;
        },
      };
    return m;
  }),
    $.extend({
      Deferred: function (a) {
        var b = [
            ["resolve", "done", $.Callbacks("once memory"), "resolved"],
            ["reject", "fail", $.Callbacks("once memory"), "rejected"],
            ["notify", "progress", $.Callbacks("memory")],
          ],
          c = "pending",
          d = {
            state: function () {
              return c;
            },
            always: function () {
              return e.done(arguments).fail(arguments), this;
            },
            then: function () {
              var a = arguments;
              return $.Deferred(function (c) {
                $.each(b, function (b, d) {
                  var f = d[0],
                    g = a[b];
                  e[d[1]](
                    $.isFunction(g)
                      ? function () {
                          var a = g.apply(this, arguments);
                          a && $.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f + "With"](this === e ? c : this, [a]);
                        }
                      : c[f]
                  );
                }),
                  (a = null);
              }).promise();
            },
            promise: function (a) {
              return "object" == typeof a ? $.extend(a, d) : d;
            },
          },
          e = {};
        return (
          (d.pipe = d.then),
          $.each(b, function (a, f) {
            var g = f[2],
              h = f[3];
            (d[f[1]] = g.add),
              h &&
                g.add(
                  function () {
                    c = h;
                  },
                  b[1 ^ a][2].disable,
                  b[2][2].lock
                ),
              (e[f[0]] = g.fire),
              (e[f[0] + "With"] = g.fireWith);
          }),
          d.promise(e),
          a && a.call(e, e),
          e
        );
      },
      when: function (a) {
        var b,
          c,
          d,
          e = 0,
          f = V.call(arguments),
          g = f.length,
          h = 1 !== g || (a && $.isFunction(a.promise)) ? g : 0,
          i = 1 === h ? a : $.Deferred(),
          j = function (a, c, d) {
            return function (e) {
              (c[a] = this), (d[a] = arguments.length > 1 ? V.call(arguments) : e), d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d);
            };
          };
        if (g > 1) for (b = new Array(g), c = new Array(g), d = new Array(g); e < g; e++) f[e] && $.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
        return h || i.resolveWith(d, f), i.promise();
      },
    }),
    ($.support = (function () {
      var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m = P.createElement("div");
      if (
        (m.setAttribute("className", "t"),
        (m.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
        (c = m.getElementsByTagName("*")),
        (d = m.getElementsByTagName("a")[0]),
        (d.style.cssText = "top:1px;float:left;opacity:.5"),
        !c || !c.length || !d)
      )
        return {};
      (e = P.createElement("select")),
        (f = e.appendChild(P.createElement("option"))),
        (g = m.getElementsByTagName("input")[0]),
        (b = {
          leadingWhitespace: 3 === m.firstChild.nodeType,
          tbody: !m.getElementsByTagName("tbody").length,
          htmlSerialize: !!m.getElementsByTagName("link").length,
          style: /top/.test(d.getAttribute("style")),
          hrefNormalized: "/a" === d.getAttribute("href"),
          opacity: /^0.5/.test(d.style.opacity),
          cssFloat: !!d.style.cssFloat,
          checkOn: "on" === g.value,
          optSelected: f.selected,
          getSetAttribute: "t" !== m.className,
          enctype: !!P.createElement("form").enctype,
          html5Clone: "<:nav></:nav>" !== P.createElement("nav").cloneNode(!0).outerHTML,
          boxModel: "CSS1Compat" === P.compatMode,
          submitBubbles: !0,
          changeBubbles: !0,
          focusinBubbles: !1,
          deleteExpando: !0,
          noCloneEvent: !0,
          inlineBlockNeedsLayout: !1,
          shrinkWrapBlocks: !1,
          reliableMarginRight: !0,
          boxSizingReliable: !0,
          pixelPosition: !1,
        }),
        (g.checked = !0),
        (b.noCloneChecked = g.cloneNode(!0).checked),
        (e.disabled = !0),
        (b.optDisabled = !f.disabled);
      try {
        delete m.test;
      } catch (a) {
        b.deleteExpando = !1;
      }
      if (
        (!m.addEventListener &&
          m.attachEvent &&
          m.fireEvent &&
          (m.attachEvent(
            "onclick",
            (l = function () {
              b.noCloneEvent = !1;
            })
          ),
          m.cloneNode(!0).fireEvent("onclick"),
          m.detachEvent("onclick", l)),
        (g = P.createElement("input")),
        (g.value = "t"),
        g.setAttribute("type", "radio"),
        (b.radioValue = "t" === g.value),
        g.setAttribute("checked", "checked"),
        g.setAttribute("name", "t"),
        m.appendChild(g),
        (h = P.createDocumentFragment()),
        h.appendChild(m.lastChild),
        (b.checkClone = h.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (b.appendChecked = g.checked),
        h.removeChild(g),
        h.appendChild(m),
        m.attachEvent)
      )
        for (j in { submit: !0, change: !0, focusin: !0 }) (i = "on" + j), (k = i in m), k || (m.setAttribute(i, "return;"), (k = "function" == typeof m[i])), (b[j + "Bubbles"] = k);
      return (
        $(function () {
          var c,
            d,
            e,
            f,
            g = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
            h = P.getElementsByTagName("body")[0];
          h &&
            ((c = P.createElement("div")),
            (c.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px"),
            h.insertBefore(c, h.firstChild),
            (d = P.createElement("div")),
            c.appendChild(d),
            (d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
            (e = d.getElementsByTagName("td")),
            (e[0].style.cssText = "padding:0;margin:0;border:0;display:none"),
            (k = 0 === e[0].offsetHeight),
            (e[0].style.display = ""),
            (e[1].style.display = "none"),
            (b.reliableHiddenOffsets = k && 0 === e[0].offsetHeight),
            (d.innerHTML = ""),
            (d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;"),
            (b.boxSizing = 4 === d.offsetWidth),
            (b.doesNotIncludeMarginInBodyOffset = 1 !== h.offsetTop),
            a.getComputedStyle &&
              ((b.pixelPosition = "1%" !== (a.getComputedStyle(d, null) || {}).top),
              (b.boxSizingReliable = "4px" === (a.getComputedStyle(d, null) || { width: "4px" }).width),
              (f = P.createElement("div")),
              (f.style.cssText = d.style.cssText = g),
              (f.style.marginRight = f.style.width = "0"),
              (d.style.width = "1px"),
              d.appendChild(f),
              (b.reliableMarginRight = !parseFloat((a.getComputedStyle(f, null) || {}).marginRight))),
            void 0 !== d.style.zoom &&
              ((d.innerHTML = ""),
              (d.style.cssText = g + "width:1px;padding:1px;display:inline;zoom:1"),
              (b.inlineBlockNeedsLayout = 3 === d.offsetWidth),
              (d.style.display = "block"),
              (d.style.overflow = "visible"),
              (d.innerHTML = "<div></div>"),
              (d.firstChild.style.width = "5px"),
              (b.shrinkWrapBlocks = 3 !== d.offsetWidth),
              (c.style.zoom = 1)),
            h.removeChild(c),
            (c = d = e = f = null));
        }),
        h.removeChild(m),
        (c = d = e = f = g = h = m = null),
        b
      );
    })());
  var ka = /^(?:\{.*\}|\[.*\])$/,
    la = /([A-Z])/g;
  $.extend({
    cache: {},
    deletedIds: [],
    uuid: 0,
    expando: "jQuery" + ($.fn.jquery + Math.random()).replace(/\D/g, ""),
    noData: { embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0 },
    hasData: function (a) {
      return !!(a = a.nodeType ? $.cache[a[$.expando]] : a[$.expando]) && !e(a);
    },
    data: function (a, c, d, e) {
      if ($.acceptData(a)) {
        var f,
          g,
          h = $.expando,
          i = "string" == typeof c,
          j = a.nodeType,
          k = j ? $.cache : a,
          l = j ? a[h] : a[h] && h;
        if ((l && k[l] && (e || k[l].data)) || !i || d !== b)
          return (
            l || (j ? (a[h] = l = $.deletedIds.pop() || ++$.uuid) : (l = h)),
            k[l] || ((k[l] = {}), j || (k[l].toJSON = $.noop)),
            ("object" != typeof c && "function" != typeof c) || (e ? (k[l] = $.extend(k[l], c)) : (k[l].data = $.extend(k[l].data, c))),
            (f = k[l]),
            e || (f.data || (f.data = {}), (f = f.data)),
            d !== b && (f[$.camelCase(c)] = d),
            i ? null == (g = f[c]) && (g = f[$.camelCase(c)]) : (g = f),
            g
          );
      }
    },
    removeData: function (a, b, c) {
      if ($.acceptData(a)) {
        var d,
          f,
          g,
          h = a.nodeType,
          i = h ? $.cache : a,
          j = h ? a[$.expando] : $.expando;
        if (i[j]) {
          if (b && (d = c ? i[j] : i[j].data)) {
            $.isArray(b) || (b in d ? (b = [b]) : ((b = $.camelCase(b)), (b = b in d ? [b] : b.split(" "))));
            for (f = 0, g = b.length; f < g; f++) delete d[b[f]];
            if (!(c ? e : $.isEmptyObject)(d)) return;
          }
          (c || (delete i[j].data, e(i[j]))) && (h ? $.cleanData([a], !0) : $.support.deleteExpando || i != i.window ? delete i[j] : (i[j] = null));
        }
      }
    },
    _data: function (a, b, c) {
      return $.data(a, b, c, !0);
    },
    acceptData: function (a) {
      var b = a.nodeName && $.noData[a.nodeName.toLowerCase()];
      return !b || (!0 !== b && a.getAttribute("classid") === b);
    },
  }),
    $.fn.extend({
      data: function (a, c) {
        var e,
          f,
          g,
          h,
          i,
          j = this[0],
          k = 0,
          l = null;
        if (a === b) {
          if (this.length && ((l = $.data(j)), 1 === j.nodeType && !$._data(j, "parsedAttrs"))) {
            for (g = j.attributes, i = g.length; k < i; k++) (h = g[k].name), 0 === h.indexOf("data-") && ((h = $.camelCase(h.substring(5))), d(j, h, l[h]));
            $._data(j, "parsedAttrs", !0);
          }
          return l;
        }
        return "object" == typeof a
          ? this.each(function () {
              $.data(this, a);
            })
          : ((e = a.split(".", 2)),
            (e[1] = e[1] ? "." + e[1] : ""),
            (f = e[1] + "!"),
            $.access(
              this,
              function (c) {
                if (c === b) return (l = this.triggerHandler("getData" + f, [e[0]])), l === b && j && ((l = $.data(j, a)), (l = d(j, a, l))), l === b && e[1] ? this.data(e[0]) : l;
                (e[1] = c),
                  this.each(function () {
                    var b = $(this);
                    b.triggerHandler("setData" + f, e), $.data(this, a, c), b.triggerHandler("changeData" + f, e);
                  });
              },
              null,
              c,
              arguments.length > 1,
              null,
              !1
            ));
      },
      removeData: function (a) {
        return this.each(function () {
          $.removeData(this, a);
        });
      },
    }),
    $.extend({
      queue: function (a, b, c) {
        var d;
        if (a) return (b = (b || "fx") + "queue"), (d = $._data(a, b)), c && (!d || $.isArray(c) ? (d = $._data(a, b, $.makeArray(c))) : d.push(c)), d || [];
      },
      dequeue: function (a, b) {
        b = b || "fx";
        var c = $.queue(a, b),
          d = c.shift(),
          e = $._queueHooks(a, b),
          f = function () {
            $.dequeue(a, b);
          };
        "inprogress" === d && (d = c.shift()), d && ("fx" === b && c.unshift("inprogress"), delete e.stop, d.call(a, f, e)), !c.length && e && e.empty.fire();
      },
      _queueHooks: function (a, b) {
        var c = b + "queueHooks";
        return (
          $._data(a, c) ||
          $._data(a, c, {
            empty: $.Callbacks("once memory").add(function () {
              $.removeData(a, b + "queue", !0), $.removeData(a, c, !0);
            }),
          })
        );
      },
    }),
    $.fn.extend({
      queue: function (a, c) {
        var d = 2;
        return (
          "string" != typeof a && ((c = a), (a = "fx"), d--),
          arguments.length < d
            ? $.queue(this[0], a)
            : c === b
            ? this
            : this.each(function () {
                var b = $.queue(this, a, c);
                $._queueHooks(this, a), "fx" === a && "inprogress" !== b[0] && $.dequeue(this, a);
              })
        );
      },
      dequeue: function (a) {
        return this.each(function () {
          $.dequeue(this, a);
        });
      },
      delay: function (a, b) {
        return (
          (a = $.fx ? $.fx.speeds[a] || a : a),
          (b = b || "fx"),
          this.queue(b, function (b, c) {
            var d = setTimeout(b, a);
            c.stop = function () {
              clearTimeout(d);
            };
          })
        );
      },
      clearQueue: function (a) {
        return this.queue(a || "fx", []);
      },
      promise: function (a, c) {
        var d,
          e = 1,
          f = $.Deferred(),
          g = this,
          h = this.length,
          i = function () {
            --e || f.resolveWith(g, [g]);
          };
        for ("string" != typeof a && ((c = a), (a = b)), a = a || "fx"; h--; ) (d = $._data(g[h], a + "queueHooks")) && d.empty && (e++, d.empty.add(i));
        return i(), f.promise(c);
      },
    });
  var ma,
    na,
    oa,
    pa = /^(?:button|input)$/i,
    qa = /^(?:button|input|object|select|textarea)$/i,
    ra = /^a(?:rea|)$/i,
    sa = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
    ta = $.support.getSetAttribute;
  $.fn.extend({
    attr: function (a, b) {
      return $.access(this, $.attr, a, b, arguments.length > 1);
    },
    removeAttr: function (a) {
      return this.each(function () {
        $.removeAttr(this, a);
      });
    },
    prop: function (a, b) {
      return $.access(this, $.prop, a, b, arguments.length > 1);
    },
    removeProp: function (a) {
      return (
        (a = $.propFix[a] || a),
        this.each(function () {
          try {
            (this[a] = b), delete this[a];
          } catch (a) {}
        })
      );
    },
    addClass: function (a) {
      var b, c, d, e, f, g, h;
      if ($.isFunction(a))
        return this.each(function (b) {
          $(this).addClass(a.call(this, b, this.className));
        });
      if (a && "string" == typeof a)
        for (b = a.split(ba), c = 0, d = this.length; c < d; c++)
          if (((e = this[c]), 1 === e.nodeType))
            if (e.className || 1 !== b.length) {
              for (f = " " + e.className + " ", g = 0, h = b.length; g < h; g++) ~f.indexOf(" " + b[g] + " ") || (f += b[g] + " ");
              e.className = $.trim(f);
            } else e.className = a;
      return this;
    },
    removeClass: function (a) {
      var c, d, e, f, g, h, i;
      if ($.isFunction(a))
        return this.each(function (b) {
          $(this).removeClass(a.call(this, b, this.className));
        });
      if ((a && "string" == typeof a) || a === b)
        for (c = (a || "").split(ba), h = 0, i = this.length; h < i; h++)
          if (((e = this[h]), 1 === e.nodeType && e.className)) {
            for (d = (" " + e.className + " ").replace(/[\t\r\n]/g, " "), f = 0, g = c.length; f < g; f++) for (; d.indexOf(" " + c[f] + " ") > -1; ) d = d.replace(" " + c[f] + " ", " ");
            e.className = a ? $.trim(d) : "";
          }
      return this;
    },
    toggleClass: function (a, b) {
      var c = typeof a,
        d = "boolean" == typeof b;
      return $.isFunction(a)
        ? this.each(function (c) {
            $(this).toggleClass(a.call(this, c, this.className, b), b);
          })
        : this.each(function () {
            if ("string" === c) for (var e, f = 0, g = $(this), h = b, i = a.split(ba); (e = i[f++]); ) (h = d ? h : !g.hasClass(e)), g[h ? "addClass" : "removeClass"](e);
            else ("undefined" !== c && "boolean" !== c) || (this.className && $._data(this, "__className__", this.className), (this.className = this.className || !1 === a ? "" : $._data(this, "__className__") || ""));
          });
    },
    hasClass: function (a) {
      for (var b = " " + a + " ", c = 0, d = this.length; c < d; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(/[\t\r\n]/g, " ").indexOf(b) > -1) return !0;
      return !1;
    },
    val: function (a) {
      var c,
        d,
        e,
        f = this[0];
      {
        if (arguments.length)
          return (
            (e = $.isFunction(a)),
            this.each(function (d) {
              var f,
                g = $(this);
              1 === this.nodeType &&
                ((f = e ? a.call(this, d, g.val()) : a),
                null == f
                  ? (f = "")
                  : "number" == typeof f
                  ? (f += "")
                  : $.isArray(f) &&
                    (f = $.map(f, function (a) {
                      return null == a ? "" : a + "";
                    })),
                ((c = $.valHooks[this.type] || $.valHooks[this.nodeName.toLowerCase()]) && "set" in c && c.set(this, f, "value") !== b) || (this.value = f));
            })
          );
        if (f) return (c = $.valHooks[f.type] || $.valHooks[f.nodeName.toLowerCase()]) && "get" in c && (d = c.get(f, "value")) !== b ? d : ((d = f.value), "string" == typeof d ? d.replace(/\r/g, "") : null == d ? "" : d);
      }
    },
  }),
    $.extend({
      valHooks: {
        option: {
          get: function (a) {
            var b = a.attributes.value;
            return !b || b.specified ? a.value : a.text;
          },
        },
        select: {
          get: function (a) {
            var b,
              c,
              d,
              e,
              f = a.selectedIndex,
              g = [],
              h = a.options,
              i = "select-one" === a.type;
            if (f < 0) return null;
            for (c = i ? f : 0, d = i ? f + 1 : h.length; c < d; c++)
              if (((e = h[c]), e.selected && ($.support.optDisabled ? !e.disabled : null === e.getAttribute("disabled")) && (!e.parentNode.disabled || !$.nodeName(e.parentNode, "optgroup")))) {
                if (((b = $(e).val()), i)) return b;
                g.push(b);
              }
            return i && !g.length && h.length ? $(h[f]).val() : g;
          },
          set: function (a, b) {
            var c = $.makeArray(b);
            return (
              $(a)
                .find("option")
                .each(function () {
                  this.selected = $.inArray($(this).val(), c) >= 0;
                }),
              c.length || (a.selectedIndex = -1),
              c
            );
          },
        },
      },
      attrFn: {},
      attr: function (a, c, d, e) {
        var f,
          g,
          h,
          i = a.nodeType;
        if (a && 3 !== i && 8 !== i && 2 !== i)
          return e && $.isFunction($.fn[c])
            ? $(a)[c](d)
            : void 0 === a.getAttribute
            ? $.prop(a, c, d)
            : ((h = 1 !== i || !$.isXMLDoc(a)),
              h && ((c = c.toLowerCase()), (g = $.attrHooks[c] || (sa.test(c) ? na : ma))),
              d !== b
                ? null === d
                  ? void $.removeAttr(a, c)
                  : g && "set" in g && h && (f = g.set(a, d, c)) !== b
                  ? f
                  : (a.setAttribute(c, "" + d), d)
                : g && "get" in g && h && null !== (f = g.get(a, c))
                ? f
                : ((f = a.getAttribute(c)), null === f ? b : f));
      },
      removeAttr: function (a, b) {
        var c,
          d,
          e,
          f,
          g = 0;
        if (b && 1 === a.nodeType) for (d = b.split(ba); g < d.length; g++) (e = d[g]) && ((c = $.propFix[e] || e), (f = sa.test(e)), f || $.attr(a, e, ""), a.removeAttribute(ta ? e : c), f && c in a && (a[c] = !1));
      },
      attrHooks: {
        type: {
          set: function (a, b) {
            if (pa.test(a.nodeName) && a.parentNode) $.error("type property can't be changed");
            else if (!$.support.radioValue && "radio" === b && $.nodeName(a, "input")) {
              var c = a.value;
              return a.setAttribute("type", b), c && (a.value = c), b;
            }
          },
        },
        value: {
          get: function (a, b) {
            return ma && $.nodeName(a, "button") ? ma.get(a, b) : b in a ? a.value : null;
          },
          set: function (a, b, c) {
            if (ma && $.nodeName(a, "button")) return ma.set(a, b, c);
            a.value = b;
          },
        },
      },
      propFix: {
        tabindex: "tabIndex",
        readonly: "readOnly",
        for: "htmlFor",
        class: "className",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        cellpadding: "cellPadding",
        rowspan: "rowSpan",
        colspan: "colSpan",
        usemap: "useMap",
        frameborder: "frameBorder",
        contenteditable: "contentEditable",
      },
      prop: function (a, c, d) {
        var e,
          f,
          g,
          h = a.nodeType;
        if (a && 3 !== h && 8 !== h && 2 !== h)
          return (g = 1 !== h || !$.isXMLDoc(a)), g && ((c = $.propFix[c] || c), (f = $.propHooks[c])), d !== b ? (f && "set" in f && (e = f.set(a, d, c)) !== b ? e : (a[c] = d)) : f && "get" in f && null !== (e = f.get(a, c)) ? e : a[c];
      },
      propHooks: {
        tabIndex: {
          get: function (a) {
            var c = a.getAttributeNode("tabindex");
            return c && c.specified ? parseInt(c.value, 10) : qa.test(a.nodeName) || (ra.test(a.nodeName) && a.href) ? 0 : b;
          },
        },
      },
    }),
    (na = {
      get: function (a, c) {
        var d,
          e = $.prop(a, c);
        return !0 === e || ("boolean" != typeof e && (d = a.getAttributeNode(c)) && !1 !== d.nodeValue) ? c.toLowerCase() : b;
      },
      set: function (a, b, c) {
        var d;
        return !1 === b ? $.removeAttr(a, c) : ((d = $.propFix[c] || c), d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase())), c;
      },
    }),
    ta ||
      ((oa = { name: !0, id: !0, coords: !0 }),
      (ma = $.valHooks.button = {
        get: function (a, c) {
          var d;
          return (d = a.getAttributeNode(c)), d && (oa[c] ? "" !== d.value : d.specified) ? d.value : b;
        },
        set: function (a, b, c) {
          var d = a.getAttributeNode(c);
          return d || ((d = P.createAttribute(c)), a.setAttributeNode(d)), (d.value = b + "");
        },
      }),
      $.each(["width", "height"], function (a, b) {
        $.attrHooks[b] = $.extend($.attrHooks[b], {
          set: function (a, c) {
            if ("" === c) return a.setAttribute(b, "auto"), c;
          },
        });
      }),
      ($.attrHooks.contenteditable = {
        get: ma.get,
        set: function (a, b, c) {
          "" === b && (b = "false"), ma.set(a, b, c);
        },
      })),
    $.support.hrefNormalized ||
      $.each(["href", "src", "width", "height"], function (a, c) {
        $.attrHooks[c] = $.extend($.attrHooks[c], {
          get: function (a) {
            var d = a.getAttribute(c, 2);
            return null === d ? b : d;
          },
        });
      }),
    $.support.style ||
      ($.attrHooks.style = {
        get: function (a) {
          return a.style.cssText.toLowerCase() || b;
        },
        set: function (a, b) {
          return (a.style.cssText = "" + b);
        },
      }),
    $.support.optSelected ||
      ($.propHooks.selected = $.extend($.propHooks.selected, {
        get: function (a) {
          var b = a.parentNode;
          return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null;
        },
      })),
    $.support.enctype || ($.propFix.enctype = "encoding"),
    $.support.checkOn ||
      $.each(["radio", "checkbox"], function () {
        $.valHooks[this] = {
          get: function (a) {
            return null === a.getAttribute("value") ? "on" : a.value;
          },
        };
      }),
    $.each(["radio", "checkbox"], function () {
      $.valHooks[this] = $.extend($.valHooks[this], {
        set: function (a, b) {
          if ($.isArray(b)) return (a.checked = $.inArray($(a).val(), b) >= 0);
        },
      });
    });
  var ua = /^(?:textarea|input|select)$/i,
    va = /^([^\.]*|)(?:\.(.+)|)$/,
    wa = /^key/,
    xa = /^(?:mouse|contextmenu)|click/,
    ya = /^(?:focusinfocus|focusoutblur)$/,
    za = function (a) {
      return $.event.special.hover ? a : a.replace(/(?:^|\s)hover(\.\S+|)\b/, "mouseenter$1 mouseleave$1");
    };
  ($.event = {
    add: function (a, c, d, e, f) {
      var g, h, i, j, k, l, m, n, o, p, q;
      if (3 !== a.nodeType && 8 !== a.nodeType && c && d && (g = $._data(a))) {
        for (
          d.handler && ((o = d), (d = o.handler), (f = o.selector)),
            d.guid || (d.guid = $.guid++),
            i = g.events,
            i || (g.events = i = {}),
            h = g.handle,
            h ||
              ((g.handle = h = function (a) {
                return void 0 === $ || (a && $.event.triggered === a.type) ? b : $.event.dispatch.apply(h.elem, arguments);
              }),
              (h.elem = a)),
            c = $.trim(za(c)).split(" "),
            j = 0;
          j < c.length;
          j++
        )
          (k = va.exec(c[j]) || []),
            (l = k[1]),
            (m = (k[2] || "").split(".").sort()),
            (q = $.event.special[l] || {}),
            (l = (f ? q.delegateType : q.bindType) || l),
            (q = $.event.special[l] || {}),
            (n = $.extend({ type: l, origType: k[1], data: e, handler: d, guid: d.guid, selector: f, namespace: m.join(".") }, o)),
            (p = i[l]),
            p || ((p = i[l] = []), (p.delegateCount = 0), (q.setup && !1 !== q.setup.call(a, e, m, h)) || (a.addEventListener ? a.addEventListener(l, h, !1) : a.attachEvent && a.attachEvent("on" + l, h))),
            q.add && (q.add.call(a, n), n.handler.guid || (n.handler.guid = d.guid)),
            f ? p.splice(p.delegateCount++, 0, n) : p.push(n),
            ($.event.global[l] = !0);
        a = null;
      }
    },
    global: {},
    remove: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q = $.hasData(a) && $._data(a);
      if (q && (m = q.events)) {
        for (b = $.trim(za(b || "")).split(" "), f = 0; f < b.length; f++)
          if (((g = va.exec(b[f]) || []), (h = i = g[1]), (j = g[2]), h)) {
            for (n = $.event.special[h] || {}, h = (d ? n.delegateType : n.bindType) || h, o = m[h] || [], k = o.length, j = j ? new RegExp("(^|\\.)" + j.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null, l = 0; l < o.length; l++)
              (p = o[l]),
                (!e && i !== p.origType) ||
                  (c && c.guid !== p.guid) ||
                  (j && !j.test(p.namespace)) ||
                  (d && d !== p.selector && ("**" !== d || !p.selector)) ||
                  (o.splice(l--, 1), p.selector && o.delegateCount--, n.remove && n.remove.call(a, p));
            0 === o.length && k !== o.length && ((n.teardown && !1 !== n.teardown.call(a, j, q.handle)) || $.removeEvent(a, h, q.handle), delete m[h]);
          } else for (h in m) $.event.remove(a, h + b[f], c, d, !0);
        $.isEmptyObject(m) && (delete q.handle, $.removeData(a, "events", !0));
      }
    },
    customEvent: { getData: !0, setData: !0, changeData: !0 },
    trigger: function (c, d, e, f) {
      if (!e || (3 !== e.nodeType && 8 !== e.nodeType)) {
        var g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q = c.type || c,
          r = [];
        if (!ya.test(q + $.event.triggered) && (q.indexOf("!") >= 0 && ((q = q.slice(0, -1)), (h = !0)), q.indexOf(".") >= 0 && ((r = q.split(".")), (q = r.shift()), r.sort()), (e && !$.event.customEvent[q]) || $.event.global[q]))
          if (
            ((c = "object" == typeof c ? (c[$.expando] ? c : new $.Event(q, c)) : new $.Event(q)),
            (c.type = q),
            (c.isTrigger = !0),
            (c.exclusive = h),
            (c.namespace = r.join(".")),
            (c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
            (l = q.indexOf(":") < 0 ? "on" + q : ""),
            e)
          ) {
            if (((c.result = b), c.target || (c.target = e), (d = null != d ? $.makeArray(d) : []), d.unshift(c), (m = $.event.special[q] || {}), !m.trigger || !1 !== m.trigger.apply(e, d))) {
              if (((o = [[e, m.bindType || q]]), !f && !m.noBubble && !$.isWindow(e))) {
                for (p = m.delegateType || q, j = ya.test(p + q) ? e : e.parentNode, k = e; j; j = j.parentNode) o.push([j, p]), (k = j);
                k === (e.ownerDocument || P) && o.push([k.defaultView || k.parentWindow || a, p]);
              }
              for (i = 0; i < o.length && !c.isPropagationStopped(); i++)
                (j = o[i][0]), (c.type = o[i][1]), (n = ($._data(j, "events") || {})[c.type] && $._data(j, "handle")), n && n.apply(j, d), (n = l && j[l]) && $.acceptData(j) && !1 === n.apply(j, d) && c.preventDefault();
              return (
                (c.type = q),
                f ||
                  c.isDefaultPrevented() ||
                  (m._default && !1 !== m._default.apply(e.ownerDocument, d)) ||
                  ("click" === q && $.nodeName(e, "a")) ||
                  !$.acceptData(e) ||
                  (l && e[q] && (("focus" !== q && "blur" !== q) || 0 !== c.target.offsetWidth) && !$.isWindow(e) && ((k = e[l]), k && (e[l] = null), ($.event.triggered = q), e[q](), ($.event.triggered = b), k && (e[l] = k))),
                c.result
              );
            }
          } else {
            g = $.cache;
            for (i in g) g[i].events && g[i].events[q] && $.event.trigger(c, d, g[i].handle.elem, !0);
          }
      }
    },
    dispatch: function (c) {
      c = $.event.fix(c || a.event);
      var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n = ($._data(this, "events") || {})[c.type] || [],
        o = n.delegateCount,
        p = [].slice.call(arguments),
        q = !c.exclusive && !c.namespace,
        r = $.event.special[c.type] || {},
        s = [];
      if (((p[0] = c), (c.delegateTarget = this), !r.preDispatch || !1 !== r.preDispatch.call(this, c))) {
        if (o && (!c.button || "click" !== c.type))
          for (g = $(this), g.context = this, f = c.target; f != this; f = f.parentNode || this)
            if (!0 !== f.disabled || "click" !== c.type) {
              for (i = {}, k = [], g[0] = f, d = 0; d < o; d++) (l = n[d]), (m = l.selector), i[m] === b && (i[m] = g.is(m)), i[m] && k.push(l);
              k.length && s.push({ elem: f, matches: k });
            }
        for (n.length > o && s.push({ elem: this, matches: n.slice(o) }), d = 0; d < s.length && !c.isPropagationStopped(); d++)
          for (j = s[d], c.currentTarget = j.elem, e = 0; e < j.matches.length && !c.isImmediatePropagationStopped(); e++)
            (l = j.matches[e]),
              (q || (!c.namespace && !l.namespace) || (c.namespace_re && c.namespace_re.test(l.namespace))) &&
                ((c.data = l.data), (c.handleObj = l), (h = (($.event.special[l.origType] || {}).handle || l.handler).apply(j.elem, p)) !== b && ((c.result = h), !1 === h && (c.preventDefault(), c.stopPropagation())));
        return r.postDispatch && r.postDispatch.call(this, c), c.result;
      }
    },
    props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
      },
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function (a, c) {
        var d,
          e,
          f,
          g = c.button,
          h = c.fromElement;
        return (
          null == a.pageX &&
            null != c.clientX &&
            ((d = a.target.ownerDocument || P),
            (e = d.documentElement),
            (f = d.body),
            (a.pageX = c.clientX + ((e && e.scrollLeft) || (f && f.scrollLeft) || 0) - ((e && e.clientLeft) || (f && f.clientLeft) || 0)),
            (a.pageY = c.clientY + ((e && e.scrollTop) || (f && f.scrollTop) || 0) - ((e && e.clientTop) || (f && f.clientTop) || 0))),
          !a.relatedTarget && h && (a.relatedTarget = h === a.target ? c.toElement : h),
          a.which || g === b || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0),
          a
        );
      },
    },
    fix: function (a) {
      if (a[$.expando]) return a;
      var b,
        c,
        d = a,
        e = $.event.fixHooks[a.type] || {},
        f = e.props ? this.props.concat(e.props) : this.props;
      for (a = $.Event(d), b = f.length; b; ) (c = f[--b]), (a[c] = d[c]);
      return a.target || (a.target = d.srcElement || P), 3 === a.target.nodeType && (a.target = a.target.parentNode), (a.metaKey = !!a.metaKey), e.filter ? e.filter(a, d) : a;
    },
    special: {
      ready: { setup: $.bindReady },
      load: { noBubble: !0 },
      focus: { delegateType: "focusin" },
      blur: { delegateType: "focusout" },
      beforeunload: {
        setup: function (a, b, c) {
          $.isWindow(this) && (this.onbeforeunload = c);
        },
        teardown: function (a, b) {
          this.onbeforeunload === b && (this.onbeforeunload = null);
        },
      },
    },
    simulate: function (a, b, c, d) {
      var e = $.extend(new $.Event(), c, { type: a, isSimulated: !0, originalEvent: {} });
      d ? $.event.trigger(e, null, b) : $.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
    },
  }),
    ($.event.handle = $.event.dispatch),
    ($.removeEvent = P.removeEventListener
      ? function (a, b, c) {
          a.removeEventListener && a.removeEventListener(b, c, !1);
        }
      : function (a, b, c) {
          var d = "on" + b;
          a.detachEvent && (void 0 === a[d] && (a[d] = null), a.detachEvent(d, c));
        }),
    ($.Event = function (a, b) {
      if (!(this instanceof $.Event)) return new $.Event(a, b);
      a && a.type ? ((this.originalEvent = a), (this.type = a.type), (this.isDefaultPrevented = a.defaultPrevented || !1 === a.returnValue || (a.getPreventDefault && a.getPreventDefault()) ? g : f)) : (this.type = a),
        b && $.extend(this, b),
        (this.timeStamp = (a && a.timeStamp) || $.now()),
        (this[$.expando] = !0);
    }),
    ($.Event.prototype = {
      preventDefault: function () {
        this.isDefaultPrevented = g;
        var a = this.originalEvent;
        a && (a.preventDefault ? a.preventDefault() : (a.returnValue = !1));
      },
      stopPropagation: function () {
        this.isPropagationStopped = g;
        var a = this.originalEvent;
        a && (a.stopPropagation && a.stopPropagation(), (a.cancelBubble = !0));
      },
      stopImmediatePropagation: function () {
        (this.isImmediatePropagationStopped = g), this.stopPropagation();
      },
      isDefaultPrevented: f,
      isPropagationStopped: f,
      isImmediatePropagationStopped: f,
    }),
    $.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function (a, b) {
      $.event.special[a] = {
        delegateType: b,
        bindType: b,
        handle: function (a) {
          var c,
            d = this,
            e = a.relatedTarget,
            f = a.handleObj;
          f.selector;
          return (e && (e === d || $.contains(d, e))) || ((a.type = f.origType), (c = f.handler.apply(this, arguments)), (a.type = b)), c;
        },
      };
    }),
    $.support.submitBubbles ||
      ($.event.special.submit = {
        setup: function () {
          if ($.nodeName(this, "form")) return !1;
          $.event.add(this, "click._submit keypress._submit", function (a) {
            var c = a.target,
              d = $.nodeName(c, "input") || $.nodeName(c, "button") ? c.form : b;
            d &&
              !$._data(d, "_submit_attached") &&
              ($.event.add(d, "submit._submit", function (a) {
                a._submit_bubble = !0;
              }),
              $._data(d, "_submit_attached", !0));
          });
        },
        postDispatch: function (a) {
          a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && $.event.simulate("submit", this.parentNode, a, !0));
        },
        teardown: function () {
          if ($.nodeName(this, "form")) return !1;
          $.event.remove(this, "._submit");
        },
      }),
    $.support.changeBubbles ||
      ($.event.special.change = {
        setup: function () {
          if (ua.test(this.nodeName))
            return (
              ("checkbox" !== this.type && "radio" !== this.type) ||
                ($.event.add(this, "propertychange._change", function (a) {
                  "checked" === a.originalEvent.propertyName && (this._just_changed = !0);
                }),
                $.event.add(this, "click._change", function (a) {
                  this._just_changed && !a.isTrigger && (this._just_changed = !1), $.event.simulate("change", this, a, !0);
                })),
              !1
            );
          $.event.add(this, "beforeactivate._change", function (a) {
            var b = a.target;
            ua.test(b.nodeName) &&
              !$._data(b, "_change_attached") &&
              ($.event.add(b, "change._change", function (a) {
                !this.parentNode || a.isSimulated || a.isTrigger || $.event.simulate("change", this.parentNode, a, !0);
              }),
              $._data(b, "_change_attached", !0));
          });
        },
        handle: function (a) {
          var b = a.target;
          if (this !== b || a.isSimulated || a.isTrigger || ("radio" !== b.type && "checkbox" !== b.type)) return a.handleObj.handler.apply(this, arguments);
        },
        teardown: function () {
          return $.event.remove(this, "._change"), ua.test(this.nodeName);
        },
      }),
    $.support.focusinBubbles ||
      $.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
        var c = 0,
          d = function (a) {
            $.event.simulate(b, a.target, $.event.fix(a), !0);
          };
        $.event.special[b] = {
          setup: function () {
            0 == c++ && P.addEventListener(a, d, !0);
          },
          teardown: function () {
            0 == --c && P.removeEventListener(a, d, !0);
          },
        };
      }),
    $.fn.extend({
      on: function (a, c, d, e, g) {
        var h, i;
        if ("object" == typeof a) {
          "string" != typeof c && ((d = d || c), (c = b));
          for (i in a) this.on(i, c, d, a[i], g);
          return this;
        }
        if ((null == d && null == e ? ((e = c), (d = c = b)) : null == e && ("string" == typeof c ? ((e = d), (d = b)) : ((e = d), (d = c), (c = b))), !1 === e)) e = f;
        else if (!e) return this;
        return (
          1 === g &&
            ((h = e),
            (e = function (a) {
              return $().off(a), h.apply(this, arguments);
            }),
            (e.guid = h.guid || (h.guid = $.guid++))),
          this.each(function () {
            $.event.add(this, a, e, d, c);
          })
        );
      },
      one: function (a, b, c, d) {
        return this.on(a, b, c, d, 1);
      },
      off: function (a, c, d) {
        var e, g;
        if (a && a.preventDefault && a.handleObj) return (e = a.handleObj), $(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this;
        if ("object" == typeof a) {
          for (g in a) this.off(g, c, a[g]);
          return this;
        }
        return (
          (!1 !== c && "function" != typeof c) || ((d = c), (c = b)),
          !1 === d && (d = f),
          this.each(function () {
            $.event.remove(this, a, d, c);
          })
        );
      },
      bind: function (a, b, c) {
        return this.on(a, null, b, c);
      },
      unbind: function (a, b) {
        return this.off(a, null, b);
      },
      live: function (a, b, c) {
        return $(this.context).on(a, this.selector, b, c), this;
      },
      die: function (a, b) {
        return $(this.context).off(a, this.selector || "**", b), this;
      },
      delegate: function (a, b, c, d) {
        return this.on(b, a, c, d);
      },
      undelegate: function (a, b, c) {
        return 1 == arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
      },
      trigger: function (a, b) {
        return this.each(function () {
          $.event.trigger(a, b, this);
        });
      },
      triggerHandler: function (a, b) {
        if (this[0]) return $.event.trigger(a, b, this[0], !0);
      },
      toggle: function (a) {
        var b = arguments,
          c = a.guid || $.guid++,
          d = 0,
          e = function (c) {
            var e = ($._data(this, "lastToggle" + a.guid) || 0) % d;
            return $._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault(), b[e].apply(this, arguments) || !1;
          };
        for (e.guid = c; d < b.length; ) b[d++].guid = c;
        return this.click(e);
      },
      hover: function (a, b) {
        return this.mouseenter(a).mouseleave(b || a);
      },
    }),
    $.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (
      a,
      b
    ) {
      ($.fn[b] = function (a, c) {
        return null == c && ((c = a), (a = null)), arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
      }),
        wa.test(b) && ($.event.fixHooks[b] = $.event.keyHooks),
        xa.test(b) && ($.event.fixHooks[b] = $.event.mouseHooks);
    }),
    (function (a, b) {
      function c(a, b, c, d) {
        for (var e = 0, f = b.length; e < f; e++) ca(a, b[e], c, d);
      }
      function d(a, b, d, e, f, g) {
        var h,
          i = da.setFilters[b.toLowerCase()];
        return i || ca.error(b), (!a && (h = f)) || c(a || "*", e, (h = []), f), h.length > 0 ? i(h, d, g) : [];
      }
      function e(a, e, f, g, h) {
        for (
          var i,
            j,
            k,
            l,
            m,
            n,
            o,
            p,
            q = 0,
            r = h.length,
            s = P.POS,
            t = new RegExp("^" + s.source + "(?!" + x + ")", "i"),
            u = function () {
              for (var a = 1, c = arguments.length - 2; a < c; a++) arguments[a] === b && (i[a] = b);
            };
          q < r;
          q++
        ) {
          for (s.exec(""), a = h[q], l = [], k = 0, m = g; (i = s.exec(a)); )
            (p = s.lastIndex = i.index + i[0].length) > k &&
              ((o = a.slice(k, i.index)), (k = p), (n = [e]), G.test(o) && (m && (n = m), (m = g)), (j = M.test(o)) && (o = o.slice(0, -5).replace(G, "$&*")), i.length > 1 && i[0].replace(t, u), (m = d(o, i[1], i[2], n, m, j)));
          m ? ((l = l.concat(m)), (o = a.slice(k)) && ")" !== o ? (G.test(o) ? c(o, l, f, g) : ca(o, e, f, g ? g.concat(m) : m)) : v.apply(f, l)) : ca(a, e, f, g);
        }
        return 1 === r ? f : ca.uniqueSort(f);
      }
      function f(a, b, c) {
        for (var d, e, f, g = [], h = 0, i = I.exec(a), j = !i.pop() && !i.pop(), k = (j && a.match(H)) || [""], l = da.preFilter, m = da.filter, n = !c && b !== p; null != (e = k[h]) && j; h++)
          for (g.push((d = [])), n && (e = " " + e); e; ) {
            (j = !1), (i = G.exec(e)) && ((e = e.slice(i[0].length)), (j = d.push({ part: i.pop().replace(F, " "), captures: i })));
            for (f in m) !(i = P[f].exec(e)) || (l[f] && !(i = l[f](i, b, c))) || ((e = e.slice(i.shift().length)), (j = d.push({ part: f, captures: i })));
            if (!j) break;
          }
        return j || ca.error(a), g;
      }
      function g(a, b, c) {
        var d = b.dir,
          e = t++;
        return (
          a ||
            (a = function (a) {
              return a === c;
            }),
          b.first
            ? function (b, c) {
                for (; (b = b[d]); ) if (1 === b.nodeType) return a(b, c) && b;
              }
            : function (b, c) {
                for (var f, g = e + "." + l, h = g + "." + k; (b = b[d]); )
                  if (1 === b.nodeType) {
                    if ((f = b[w]) === h) return b.sizset;
                    if ("string" == typeof f && 0 === f.indexOf(g)) {
                      if (b.sizset) return b;
                    } else {
                      if (((b[w] = h), a(b, c))) return (b.sizset = !0), b;
                      b.sizset = !1;
                    }
                  }
              }
        );
      }
      function h(a, b) {
        return a
          ? function (c, d) {
              var e = b(c, d);
              return e && a(!0 === e ? c : e, d);
            }
          : b;
      }
      function i(a, b, c) {
        for (var d, e, f = 0; (d = a[f]); f++) da.relative[d.part] ? (e = g(e, da.relative[d.part], b)) : (d.captures.push(b, c), (e = h(e, da.filter[d.part].apply(null, d.captures))));
        return e;
      }
      function j(a) {
        return function (b, c) {
          for (var d, e = 0; (d = a[e]); e++) if (d(b, c)) return !0;
          return !1;
        };
      }
      var k,
        l,
        m,
        n,
        o,
        p = a.document,
        q = p.documentElement,
        r = !1,
        s = !0,
        t = 0,
        u = [].slice,
        v = [].push,
        w = ("sizcache" + Math.random()).replace(".", ""),
        x = "[\\x20\\t\\r\\n\\f]",
        y = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
        z = y.replace("w", "w#"),
        A = "\\[" + x + "*(" + y + ")" + x + "*(?:([*^$|!~]?=)" + x + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + z + ")|)|)" + x + "*\\]",
        B = ":(" + y + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|((?:[^,]|\\\\,|(?:,(?=[^\\[]*\\]))|(?:,(?=[^\\(]*\\))))*))\\)|)",
        C = ":(nth|eq|gt|lt|first|last|even|odd)(?:\\((\\d*)\\)|)(?=[^-]|$)",
        D = x + "*([\\x20\\t\\r\\n\\f>+~])" + x + "*",
        E = "(?=[^\\x20\\t\\r\\n\\f])(?:\\\\.|" + A + "|" + B.replace(2, 7) + "|[^\\\\(),])+",
        F = new RegExp("^" + x + "+|((?:^|[^\\\\])(?:\\\\.)*)" + x + "+$", "g"),
        G = new RegExp("^" + D),
        H = new RegExp(E + "?(?=" + x + "*,|$)", "g"),
        I = new RegExp("^(?:(?!,)(?:(?:^|,)" + x + "*" + E + ")*?|" + x + "*(.*?))(\\)|$)"),
        J = new RegExp(E.slice(19, -6) + "\\x20\\t\\r\\n\\f>+~])+|" + D, "g"),
        K = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
        L = /[\x20\t\r\n\f]*[+~]/,
        M = /:not\($/,
        N = /h\d/i,
        O = /input|select|textarea|button/i,
        P = {
          ID: new RegExp("^#(" + y + ")"),
          CLASS: new RegExp("^\\.(" + y + ")"),
          NAME: new RegExp("^\\[name=['\"]?(" + y + ")['\"]?\\]"),
          TAG: new RegExp("^(" + y.replace("[-", "[-\\*") + ")"),
          ATTR: new RegExp("^" + A),
          PSEUDO: new RegExp("^" + B),
          CHILD: new RegExp("^:(only|nth|last|first)-child(?:\\(" + x + "*(even|odd|(([+-]|)(\\d*)n|)" + x + "*(?:([+-]|)" + x + "*(\\d+)|))" + x + "*\\)|)", "i"),
          POS: new RegExp(C, "ig"),
          needsContext: new RegExp("^" + x + "*[>+~]|" + C, "i"),
        },
        Q = {},
        R = [],
        S = {},
        T = [],
        U = function (a) {
          return (a.sizzleFilter = !0), a;
        },
        V = function (a) {
          return function (b) {
            return "input" === b.nodeName.toLowerCase() && b.type === a;
          };
        },
        W = function (a) {
          return function (b) {
            var c = b.nodeName.toLowerCase();
            return ("input" === c || "button" === c) && b.type === a;
          };
        },
        X = function (a) {
          var b = !1,
            c = p.createElement("div");
          try {
            b = a(c);
          } catch (a) {}
          return (c = null), b;
        },
        Y = X(function (a) {
          a.innerHTML = "<select></select>";
          var b = typeof a.lastChild.getAttribute("multiple");
          return "boolean" !== b && "string" !== b;
        }),
        Z = X(function (a) {
          (a.id = w + 0), (a.innerHTML = "<a name='" + w + "'></a><div name='" + w + "'></div>"), q.insertBefore(a, q.firstChild);
          var b = p.getElementsByName && p.getElementsByName(w).length === 2 + p.getElementsByName(w + 0).length;
          return (o = !p.getElementById(w)), q.removeChild(a), b;
        }),
        _ = X(function (a) {
          return a.appendChild(p.createComment("")), 0 === a.getElementsByTagName("*").length;
        }),
        aa = X(function (a) {
          return (a.innerHTML = "<a href='#'></a>"), a.firstChild && void 0 !== a.firstChild.getAttribute && "#" === a.firstChild.getAttribute("href");
        }),
        ba = X(function (a) {
          return (
            (a.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>"), !(!a.getElementsByClassName || 0 === a.getElementsByClassName("e").length) && ((a.lastChild.className = "e"), 1 !== a.getElementsByClassName("e").length)
          );
        }),
        ca = function (a, b, c, d) {
          (c = c || []), (b = b || p);
          var e,
            f,
            g,
            h,
            i = b.nodeType;
          if (1 !== i && 9 !== i) return [];
          if (!a || "string" != typeof a) return c;
          if (!(g = ea(b)) && !d && (e = K.exec(a)))
            if ((h = e[1])) {
              if (9 === i) {
                if (!(f = b.getElementById(h)) || !f.parentNode) return c;
                if (f.id === h) return c.push(f), c;
              } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(h)) && fa(b, f) && f.id === h) return c.push(f), c;
            } else {
              if (e[2]) return v.apply(c, u.call(b.getElementsByTagName(a), 0)), c;
              if ((h = e[3]) && ba && b.getElementsByClassName) return v.apply(c, u.call(b.getElementsByClassName(h), 0)), c;
            }
          return ia(a, b, c, d, g);
        },
        da = (ca.selectors = {
          cacheLength: 50,
          match: P,
          order: ["ID", "TAG"],
          attrHandle: {},
          createPseudo: U,
          find: {
            ID: o
              ? function (a, b, c) {
                  if (void 0 !== b.getElementById && !c) {
                    var d = b.getElementById(a);
                    return d && d.parentNode ? [d] : [];
                  }
                }
              : function (a, c, d) {
                  if (void 0 !== c.getElementById && !d) {
                    var e = c.getElementById(a);
                    return e ? (e.id === a || (void 0 !== e.getAttributeNode && e.getAttributeNode("id").value === a) ? [e] : b) : [];
                  }
                },
            TAG: _
              ? function (a, b) {
                  if (void 0 !== b.getElementsByTagName) return b.getElementsByTagName(a);
                }
              : function (a, b) {
                  var c = b.getElementsByTagName(a);
                  if ("*" === a) {
                    for (var d, e = [], f = 0; (d = c[f]); f++) 1 === d.nodeType && e.push(d);
                    return e;
                  }
                  return c;
                },
          },
          relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
          preFilter: {
            ATTR: function (a) {
              return (a[1] = a[1].replace(/\\(?!\\)/g, "")), (a[3] = (a[4] || a[5] || "").replace(/\\(?!\\)/g, "")), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
            },
            CHILD: function (a) {
              return (
                (a[1] = a[1].toLowerCase()), "nth" === a[1] ? (a[2] || ca.error(a[0]), (a[3] = +(a[3] ? a[4] + (a[5] || 1) : 2 * ("even" === a[2] || "odd" === a[2]))), (a[4] = +(a[6] + a[7] || "odd" === a[2]))) : a[2] && ca.error(a[0]), a
              );
            },
            PSEUDO: function (a) {
              var b,
                c = a[4];
              return P.CHILD.test(a[0]) ? null : (c && (b = I.exec(c)) && b.pop() && ((a[0] = a[0].slice(0, b[0].length - c.length - 1)), (c = b[0].slice(0, -1))), a.splice(2, 3, c || a[3]), a);
            },
          },
          filter: {
            ID: o
              ? function (a) {
                  return (
                    (a = a.replace(/\\(?!\\)/g, "")),
                    function (b) {
                      return b.getAttribute("id") === a;
                    }
                  );
                }
              : function (a) {
                  return (
                    (a = a.replace(/\\(?!\\)/g, "")),
                    function (b) {
                      var c = void 0 !== b.getAttributeNode && b.getAttributeNode("id");
                      return c && c.value === a;
                    }
                  );
                },
            TAG: function (a) {
              return "*" === a
                ? function () {
                    return !0;
                  }
                : ((a = a.replace(/\\(?!\\)/g, "").toLowerCase()),
                  function (b) {
                    return b.nodeName && b.nodeName.toLowerCase() === a;
                  });
            },
            CLASS: function (a) {
              var b = Q[a];
              return (
                b || ((b = Q[a] = new RegExp("(^|" + x + ")" + a + "(" + x + "|$)")), R.push(a), R.length > da.cacheLength && delete Q[R.shift()]),
                function (a) {
                  return b.test(a.className || (void 0 !== a.getAttribute && a.getAttribute("class")) || "");
                }
              );
            },
            ATTR: function (a, b, c) {
              return b
                ? function (d) {
                    var e = ca.attr(d, a),
                      f = e + "";
                    if (null == e) return "!=" === b;
                    switch (b) {
                      case "=":
                        return f === c;
                      case "!=":
                        return f !== c;
                      case "^=":
                        return c && 0 === f.indexOf(c);
                      case "*=":
                        return c && f.indexOf(c) > -1;
                      case "$=":
                        return c && f.substr(f.length - c.length) === c;
                      case "~=":
                        return (" " + f + " ").indexOf(c) > -1;
                      case "|=":
                        return f === c || f.substr(0, c.length + 1) === c + "-";
                    }
                  }
                : function (b) {
                    return null != ca.attr(b, a);
                  };
            },
            CHILD: function (a, b, c, d) {
              if ("nth" === a) {
                var e = t++;
                return function (a) {
                  var b,
                    f,
                    g = 0,
                    h = a;
                  if (1 === c && 0 === d) return !0;
                  if ((b = a.parentNode) && (b[w] !== e || !a.sizset)) {
                    for (h = b.firstChild; h && (1 !== h.nodeType || ((h.sizset = ++g), h !== a)); h = h.nextSibling);
                    b[w] = e;
                  }
                  return (f = a.sizset - d), 0 === c ? 0 === f : f % c == 0 && f / c >= 0;
                };
              }
              return function (b) {
                var c = b;
                switch (a) {
                  case "only":
                  case "first":
                    for (; (c = c.previousSibling); ) if (1 === c.nodeType) return !1;
                    if ("first" === a) return !0;
                    c = b;
                  case "last":
                    for (; (c = c.nextSibling); ) if (1 === c.nodeType) return !1;
                    return !0;
                }
              };
            },
            PSEUDO: function (a, b, c, d) {
              var e = da.pseudos[a] || da.pseudos[a.toLowerCase()];
              return e || ca.error("unsupported pseudo: " + a), e.sizzleFilter ? e(b, c, d) : e;
            },
          },
          pseudos: {
            not: U(function (a, b, c) {
              var d = ha(a.replace(F, "$1"), b, c);
              return function (a) {
                return !d(a);
              };
            }),
            enabled: function (a) {
              return !1 === a.disabled;
            },
            disabled: function (a) {
              return !0 === a.disabled;
            },
            checked: function (a) {
              var b = a.nodeName.toLowerCase();
              return ("input" === b && !!a.checked) || ("option" === b && !!a.selected);
            },
            selected: function (a) {
              return a.parentNode && a.parentNode.selectedIndex, !0 === a.selected;
            },
            parent: function (a) {
              return !da.pseudos.empty(a);
            },
            empty: function (a) {
              var b;
              for (a = a.firstChild; a; ) {
                if (a.nodeName > "@" || 3 === (b = a.nodeType) || 4 === b) return !1;
                a = a.nextSibling;
              }
              return !0;
            },
            contains: U(function (a) {
              return function (b) {
                return (b.textContent || b.innerText || ga(b)).indexOf(a) > -1;
              };
            }),
            has: U(function (a) {
              return function (b) {
                return ca(a, b).length > 0;
              };
            }),
            header: function (a) {
              return N.test(a.nodeName);
            },
            text: function (a) {
              var b, c;
              return "input" === a.nodeName.toLowerCase() && "text" === (b = a.type) && (null == (c = a.getAttribute("type")) || c.toLowerCase() === b);
            },
            radio: V("radio"),
            checkbox: V("checkbox"),
            file: V("file"),
            password: V("password"),
            image: V("image"),
            submit: W("submit"),
            reset: W("reset"),
            button: function (a) {
              var b = a.nodeName.toLowerCase();
              return ("input" === b && "button" === a.type) || "button" === b;
            },
            input: function (a) {
              return O.test(a.nodeName);
            },
            focus: function (a) {
              var b = a.ownerDocument;
              return a === b.activeElement && (!b.hasFocus || b.hasFocus()) && !(!a.type && !a.href);
            },
            active: function (a) {
              return a === a.ownerDocument.activeElement;
            },
          },
          setFilters: {
            first: function (a, b, c) {
              return c ? a.slice(1) : [a[0]];
            },
            last: function (a, b, c) {
              var d = a.pop();
              return c ? a : [d];
            },
            even: function (a, b, c) {
              for (var d = [], e = c ? 1 : 0, f = a.length; e < f; e += 2) d.push(a[e]);
              return d;
            },
            odd: function (a, b, c) {
              for (var d = [], e = c ? 0 : 1, f = a.length; e < f; e += 2) d.push(a[e]);
              return d;
            },
            lt: function (a, b, c) {
              return c ? a.slice(+b) : a.slice(0, +b);
            },
            gt: function (a, b, c) {
              return c ? a.slice(0, +b + 1) : a.slice(+b + 1);
            },
            eq: function (a, b, c) {
              var d = a.splice(+b, 1);
              return c ? a : d;
            },
          },
        });
      (da.setFilters.nth = da.setFilters.eq),
        (da.filters = da.pseudos),
        aa ||
          (da.attrHandle = {
            href: function (a) {
              return a.getAttribute("href", 2);
            },
            type: function (a) {
              return a.getAttribute("type");
            },
          }),
        Z &&
          (da.order.push("NAME"),
          (da.find.NAME = function (a, b) {
            if (void 0 !== b.getElementsByName) return b.getElementsByName(a);
          })),
        ba &&
          (da.order.splice(1, 0, "CLASS"),
          (da.find.CLASS = function (a, b, c) {
            if (void 0 !== b.getElementsByClassName && !c) return b.getElementsByClassName(a);
          }));
      try {
        u.call(q.childNodes, 0)[0].nodeType;
      } catch (a) {
        u = function (a) {
          for (var b, c = []; (b = this[a]); a++) c.push(b);
          return c;
        };
      }
      var ea = (ca.isXML = function (a) {
          var b = a && (a.ownerDocument || a).documentElement;
          return !!b && "HTML" !== b.nodeName;
        }),
        fa = (ca.contains = q.compareDocumentPosition
          ? function (a, b) {
              return !!(16 & a.compareDocumentPosition(b));
            }
          : q.contains
          ? function (a, b) {
              var c = 9 === a.nodeType ? a.documentElement : a,
                d = b.parentNode;
              return a === d || !!(d && 1 === d.nodeType && c.contains && c.contains(d));
            }
          : function (a, b) {
              for (; (b = b.parentNode); ) if (b === a) return !0;
              return !1;
            }),
        ga = (ca.getText = function (a) {
          var b,
            c = "",
            d = 0,
            e = a.nodeType;
          if (e) {
            if (1 === e || 9 === e || 11 === e) {
              if ("string" == typeof a.textContent) return a.textContent;
              for (a = a.firstChild; a; a = a.nextSibling) c += ga(a);
            } else if (3 === e || 4 === e) return a.nodeValue;
          } else for (; (b = a[d]); d++) c += ga(b);
          return c;
        });
      (ca.attr = function (a, b) {
        var c,
          d = ea(a);
        return d || (b = b.toLowerCase()), da.attrHandle[b] ? da.attrHandle[b](a) : Y || d ? a.getAttribute(b) : ((c = a.getAttributeNode(b)), c ? ("boolean" == typeof a[b] ? (a[b] ? b : null) : c.specified ? c.value : null) : null);
      }),
        (ca.error = function (a) {
          throw new Error("Syntax error, unrecognized expression: " + a);
        }),
        [0, 0].sort(function () {
          return (s = 0);
        }),
        q.compareDocumentPosition
          ? (m = function (a, b) {
              return a === b ? ((r = !0), 0) : (a.compareDocumentPosition && b.compareDocumentPosition ? 4 & a.compareDocumentPosition(b) : a.compareDocumentPosition) ? -1 : 1;
            })
          : ((m = function (a, b) {
              if (a === b) return (r = !0), 0;
              if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
              var c,
                d,
                e = [],
                f = [],
                g = a.parentNode,
                h = b.parentNode,
                i = g;
              if (g === h) return n(a, b);
              if (!g) return -1;
              if (!h) return 1;
              for (; i; ) e.unshift(i), (i = i.parentNode);
              for (i = h; i; ) f.unshift(i), (i = i.parentNode);
              (c = e.length), (d = f.length);
              for (var j = 0; j < c && j < d; j++) if (e[j] !== f[j]) return n(e[j], f[j]);
              return j === c ? n(a, f[j], -1) : n(e[j], b, 1);
            }),
            (n = function (a, b, c) {
              if (a === b) return c;
              for (var d = a.nextSibling; d; ) {
                if (d === b) return -1;
                d = d.nextSibling;
              }
              return 1;
            })),
        (ca.uniqueSort = function (a) {
          var b,
            c = 1;
          if (m && ((r = s), a.sort(m), r)) for (; (b = a[c]); c++) b === a[c - 1] && a.splice(c--, 1);
          return a;
        });
      var ha = (ca.compile = function (a, b, c) {
        var d,
          e,
          g,
          h = S[a];
        if (h && h.context === b) return h;
        for (e = f(a, b, c), g = 0; (d = e[g]); g++) e[g] = i(d, b, c);
        return (h = S[a] = j(e)), (h.context = b), (h.runs = h.dirruns = 0), T.push(a), T.length > da.cacheLength && delete S[T.shift()], h;
      });
      (ca.matches = function (a, b) {
        return ca(a, null, null, b);
      }),
        (ca.matchesSelector = function (a, b) {
          return ca(b, null, null, [a]).length > 0;
        });
      var ia = function (a, b, c, d, f) {
        a = a.replace(F, "$1");
        var g,
          h,
          i,
          j,
          m,
          n,
          o,
          p,
          q,
          r = a.match(H),
          s = a.match(J),
          t = b.nodeType;
        if (P.POS.test(a)) return e(a, b, c, d, r);
        if (d) g = u.call(d, 0);
        else if (r && 1 === r.length) {
          if (s.length > 1 && 9 === t && !f && (r = P.ID.exec(s[0]))) {
            if (!(b = da.find.ID(r[1], b, f)[0])) return c;
            a = a.slice(s.shift().length);
          }
          for (p = ((r = L.exec(s[0])) && !r.index && b.parentNode) || b, q = s.pop(), n = q.split(":not")[0], i = 0, j = da.order.length; i < j; i++)
            if (((o = da.order[i]), (r = P[o].exec(n)))) {
              if (null == (g = da.find[o]((r[1] || "").replace(/\\(?!\\)/g, ""), p, f))) continue;
              n === q && ((a = a.slice(0, a.length - q.length) + n.replace(P[o], "")) || v.apply(c, u.call(g, 0)));
              break;
            }
        }
        if (a) for (h = ha(a, b, f), l = h.dirruns++, null == g && (g = da.find.TAG("*", (L.test(a) && b.parentNode) || b)), i = 0; (m = g[i]); i++) (k = h.runs++), h(m, b) && c.push(m);
        return c;
      };
      p.querySelectorAll &&
        (function () {
          var a,
            b = ia,
            c = [],
            d = [":active"],
            e = q.matchesSelector || q.mozMatchesSelector || q.webkitMatchesSelector || q.oMatchesSelector || q.msMatchesSelector;
          X(function (a) {
            (a.innerHTML = "<select><option selected></option></select>"),
              a.querySelectorAll("[selected]").length || c.push("\\[" + x + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),
              a.querySelectorAll(":checked").length || c.push(":checked");
          }),
            X(function (a) {
              (a.innerHTML = "<p test=''></p>"),
                a.querySelectorAll("[test^='']").length && c.push("[*^$]=" + x + "*(?:\"\"|'')"),
                (a.innerHTML = "<input type='hidden'>"),
                a.querySelectorAll(":enabled").length || c.push(":enabled", ":disabled");
            }),
            (c = c.length && new RegExp(c.join("|"))),
            (ia = function (a, d, e, f, g) {
              if (!(f || g || (c && c.test(a))))
                if (9 === d.nodeType)
                  try {
                    return v.apply(e, u.call(d.querySelectorAll(a), 0)), e;
                  } catch (a) {}
                else if (1 === d.nodeType && "object" !== d.nodeName.toLowerCase()) {
                  var h = d.getAttribute("id"),
                    i = h || w,
                    j = (L.test(a) && d.parentNode) || d;
                  h ? (i = i.replace(/'|\\/g, "\\$&")) : d.setAttribute("id", i);
                  try {
                    return v.apply(e, u.call(j.querySelectorAll(a.replace(H, "[id='" + i + "'] $&")), 0)), e;
                  } catch (a) {
                  } finally {
                    h || d.removeAttribute("id");
                  }
                }
              return b(a, d, e, f, g);
            }),
            e &&
              (X(function (b) {
                a = e.call(b, "div");
                try {
                  e.call(b, "[test!='']:sizzle"), d.push(da.match.PSEUDO);
                } catch (a) {}
              }),
              (d = new RegExp(d.join("|"))),
              (ca.matchesSelector = function (b, f) {
                if (((f = f.replace(/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, "='$1']")), !(ea(b) || d.test(f) || (c && c.test(f)))))
                  try {
                    var g = e.call(b, f);
                    if (g || a || (b.document && 11 !== b.document.nodeType)) return g;
                  } catch (a) {}
                return ca(f, null, null, [b]).length > 0;
              }));
        })(),
        (ca.attr = $.attr),
        ($.find = ca),
        ($.expr = ca.selectors),
        ($.expr[":"] = $.expr.pseudos),
        ($.unique = ca.uniqueSort),
        ($.text = ca.getText),
        ($.isXMLDoc = ca.isXML),
        ($.contains = ca.contains);
    })(a);
  var Aa = /Until$/,
    Ba = /^(?:parents|prev(?:Until|All))/,
    Ca = /^.[^:#\[\.,]*$/,
    Da = $.expr.match.needsContext,
    Ea = { children: !0, contents: !0, next: !0, prev: !0 };
  $.fn.extend({
    find: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h = this;
      if ("string" != typeof a)
        return $(a).filter(function () {
          for (b = 0, c = h.length; b < c; b++) if ($.contains(h[b], this)) return !0;
        });
      for (g = this.pushStack("", "find", a), b = 0, c = this.length; b < c; b++)
        if (((d = g.length), $.find(a, this[b], g), b > 0))
          for (e = d; e < g.length; e++)
            for (f = 0; f < d; f++)
              if (g[f] === g[e]) {
                g.splice(e--, 1);
                break;
              }
      return g;
    },
    has: function (a) {
      var b,
        c = $(a, this),
        d = c.length;
      return this.filter(function () {
        for (b = 0; b < d; b++) if ($.contains(this, c[b])) return !0;
      });
    },
    not: function (a) {
      return this.pushStack(j(this, a, !1), "not", a);
    },
    filter: function (a) {
      return this.pushStack(j(this, a, !0), "filter", a);
    },
    is: function (a) {
      return !!a && ("string" == typeof a ? (Da.test(a) ? $(a, this.context).index(this[0]) >= 0 : $.filter(a, this).length > 0) : this.filter(a).length > 0);
    },
    closest: function (a, b) {
      for (var c, d = 0, e = this.length, f = [], g = Da.test(a) || "string" != typeof a ? $(a, b || this.context) : 0; d < e; d++)
        for (c = this[d]; c && c.ownerDocument && c !== b && 11 !== c.nodeType; ) {
          if (g ? g.index(c) > -1 : $.find.matchesSelector(c, a)) {
            f.push(c);
            break;
          }
          c = c.parentNode;
        }
      return (f = f.length > 1 ? $.unique(f) : f), this.pushStack(f, "closest", a);
    },
    index: function (a) {
      return a ? ("string" == typeof a ? $.inArray(this[0], $(a)) : $.inArray(a.jquery ? a[0] : a, this)) : this[0] && this[0].parentNode ? this.prevAll().length : -1;
    },
    add: function (a, b) {
      var c = "string" == typeof a ? $(a, b) : $.makeArray(a && a.nodeType ? [a] : a),
        d = $.merge(this.get(), c);
      return this.pushStack(h(c[0]) || h(d[0]) ? d : $.unique(d));
    },
    addBack: function (a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    },
  }),
    ($.fn.andSelf = $.fn.addBack),
    $.each(
      {
        parent: function (a) {
          var b = a.parentNode;
          return b && 11 !== b.nodeType ? b : null;
        },
        parents: function (a) {
          return $.dir(a, "parentNode");
        },
        parentsUntil: function (a, b, c) {
          return $.dir(a, "parentNode", c);
        },
        next: function (a) {
          return i(a, "nextSibling");
        },
        prev: function (a) {
          return i(a, "previousSibling");
        },
        nextAll: function (a) {
          return $.dir(a, "nextSibling");
        },
        prevAll: function (a) {
          return $.dir(a, "previousSibling");
        },
        nextUntil: function (a, b, c) {
          return $.dir(a, "nextSibling", c);
        },
        prevUntil: function (a, b, c) {
          return $.dir(a, "previousSibling", c);
        },
        siblings: function (a) {
          return $.sibling((a.parentNode || {}).firstChild, a);
        },
        children: function (a) {
          return $.sibling(a.firstChild);
        },
        contents: function (a) {
          return $.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : $.merge([], a.childNodes);
        },
      },
      function (a, b) {
        $.fn[a] = function (c, d) {
          var e = $.map(this, b, c);
          return (
            Aa.test(a) || (d = c), d && "string" == typeof d && (e = $.filter(d, e)), (e = this.length > 1 && !Ea[a] ? $.unique(e) : e), this.length > 1 && Ba.test(a) && (e = e.reverse()), this.pushStack(e, a, V.call(arguments).join(","))
          );
        };
      }
    ),
    $.extend({
      filter: function (a, b, c) {
        return c && (a = ":not(" + a + ")"), 1 === b.length ? ($.find.matchesSelector(b[0], a) ? [b[0]] : []) : $.find.matches(a, b);
      },
      dir: function (a, c, d) {
        for (var e = [], f = a[c]; f && 9 !== f.nodeType && (d === b || 1 !== f.nodeType || !$(f).is(d)); ) 1 === f.nodeType && e.push(f), (f = f[c]);
        return e;
      },
      sibling: function (a, b) {
        for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
        return c;
      },
    });
  var Fa = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    Ga = /^\s+/,
    Ha = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Ia = /<([\w:]+)/,
    Ja = /<tbody/i,
    Ka = /<|&#?\w+;/,
    La = /<(?:script|style|link)/i,
    Ma = /<(?:script|object|embed|option|style)/i,
    Na = new RegExp("<(?:" + Fa + ")[\\s/>]", "i"),
    Oa = /^(?:checkbox|radio)$/,
    Pa = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Qa = /\/(java|ecma)script/i,
    Ra = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      area: [1, "<map>", "</map>"],
      _default: [0, "", ""],
    },
    Sa = k(P),
    Ta = Sa.appendChild(P.createElement("div"));
  (Ra.optgroup = Ra.option),
    (Ra.tbody = Ra.tfoot = Ra.colgroup = Ra.caption = Ra.thead),
    (Ra.th = Ra.td),
    $.support.htmlSerialize || (Ra._default = [1, "X<div>", "</div>"]),
    $.fn.extend({
      text: function (a) {
        return $.access(
          this,
          function (a) {
            return a === b ? $.text(this) : this.empty().append(((this[0] && this[0].ownerDocument) || P).createTextNode(a));
          },
          null,
          a,
          arguments.length
        );
      },
      wrapAll: function (a) {
        if ($.isFunction(a))
          return this.each(function (b) {
            $(this).wrapAll(a.call(this, b));
          });
        if (this[0]) {
          var b = $(a, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && b.insertBefore(this[0]),
            b
              .map(function () {
                for (var a = this; a.firstChild && 1 === a.firstChild.nodeType; ) a = a.firstChild;
                return a;
              })
              .append(this);
        }
        return this;
      },
      wrapInner: function (a) {
        return $.isFunction(a)
          ? this.each(function (b) {
              $(this).wrapInner(a.call(this, b));
            })
          : this.each(function () {
              var b = $(this),
                c = b.contents();
              c.length ? c.wrapAll(a) : b.append(a);
            });
      },
      wrap: function (a) {
        var b = $.isFunction(a);
        return this.each(function (c) {
          $(this).wrapAll(b ? a.call(this, c) : a);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            $.nodeName(this, "body") || $(this).replaceWith(this.childNodes);
          })
          .end();
      },
      append: function () {
        return this.domManip(arguments, !0, function (a) {
          (1 !== this.nodeType && 11 !== this.nodeType) || this.appendChild(a);
        });
      },
      prepend: function () {
        return this.domManip(arguments, !0, function (a) {
          (1 !== this.nodeType && 11 !== this.nodeType) || this.insertBefore(a, this.firstChild);
        });
      },
      before: function () {
        if (!h(this[0]))
          return this.domManip(arguments, !1, function (a) {
            this.parentNode.insertBefore(a, this);
          });
        if (arguments.length) {
          var a = $.clean(arguments);
          return this.pushStack($.merge(a, this), "before", this.selector);
        }
      },
      after: function () {
        if (!h(this[0]))
          return this.domManip(arguments, !1, function (a) {
            this.parentNode.insertBefore(a, this.nextSibling);
          });
        if (arguments.length) {
          var a = $.clean(arguments);
          return this.pushStack($.merge(this, a), "after", this.selector);
        }
      },
      remove: function (a, b) {
        for (var c, d = 0; null != (c = this[d]); d++) (a && !$.filter(a, [c]).length) || (b || 1 !== c.nodeType || ($.cleanData(c.getElementsByTagName("*")), $.cleanData([c])), c.parentNode && c.parentNode.removeChild(c));
        return this;
      },
      empty: function () {
        for (var a, b = 0; null != (a = this[b]); b++) for (1 === a.nodeType && $.cleanData(a.getElementsByTagName("*")); a.firstChild; ) a.removeChild(a.firstChild);
        return this;
      },
      clone: function (a, b) {
        return (
          (a = null != a && a),
          (b = null == b ? a : b),
          this.map(function () {
            return $.clone(this, a, b);
          })
        );
      },
      html: function (a) {
        return $.access(
          this,
          function (a) {
            var c = this[0] || {},
              d = 0,
              e = this.length;
            if (a === b) return 1 === c.nodeType ? c.innerHTML.replace(/ jQuery\d+="(?:null|\d+)"/g, "") : b;
            if ("string" == typeof a && !La.test(a) && ($.support.htmlSerialize || !Na.test(a)) && ($.support.leadingWhitespace || !Ga.test(a)) && !Ra[(Ia.exec(a) || ["", ""])[1].toLowerCase()]) {
              a = a.replace(Ha, "<$1></$2>");
              try {
                for (; d < e; d++) (c = this[d] || {}), 1 === c.nodeType && ($.cleanData(c.getElementsByTagName("*")), (c.innerHTML = a));
                c = 0;
              } catch (a) {}
            }
            c && this.empty().append(a);
          },
          null,
          a,
          arguments.length
        );
      },
      replaceWith: function (a) {
        return h(this[0])
          ? this.length
            ? this.pushStack($($.isFunction(a) ? a() : a), "replaceWith", a)
            : this
          : $.isFunction(a)
          ? this.each(function (b) {
              var c = $(this),
                d = c.html();
              c.replaceWith(a.call(this, b, d));
            })
          : ("string" != typeof a && (a = $(a).detach()),
            this.each(function () {
              var b = this.nextSibling,
                c = this.parentNode;
              $(this).remove(), b ? $(b).before(a) : $(c).append(a);
            }));
      },
      detach: function (a) {
        return this.remove(a, !0);
      },
      domManip: function (a, c, d) {
        a = [].concat.apply([], a);
        var e,
          f,
          g,
          h,
          i = 0,
          j = a[0],
          k = [],
          m = this.length;
        if (!$.support.checkClone && m > 1 && "string" == typeof j && Pa.test(j))
          return this.each(function () {
            $(this).domManip(a, c, d);
          });
        if ($.isFunction(j))
          return this.each(function (e) {
            var f = $(this);
            (a[0] = j.call(this, e, c ? f.html() : b)), f.domManip(a, c, d);
          });
        if (this[0]) {
          if (((e = $.buildFragment(a, this, k)), (g = e.fragment), (f = g.firstChild), 1 === g.childNodes.length && (g = f), f))
            for (c = c && $.nodeName(f, "tr"), h = e.cacheable || m - 1; i < m; i++) d.call(c && $.nodeName(this[i], "table") ? l(this[i], "tbody") : this[i], i === h ? g : $.clone(g, !0, !0));
          (g = f = null),
            k.length &&
              $.each(k, function (a, b) {
                b.src
                  ? $.ajax
                    ? $.ajax({ url: b.src, type: "GET", dataType: "script", async: !1, global: !1, throws: !0 })
                    : $.error("no ajax")
                  : $.globalEval((b.text || b.textContent || b.innerHTML || "").replace(/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g, "")),
                  b.parentNode && b.parentNode.removeChild(b);
              });
        }
        return this;
      },
    }),
    ($.buildFragment = function (a, c, d) {
      var e,
        f,
        g,
        h = a[0];
      return (
        (c = c || P),
        (c = (c[0] || c).ownerDocument || c[0] || c),
        void 0 === c.createDocumentFragment && (c = P),
        !(1 === a.length && "string" == typeof h && h.length < 512 && c === P && "<" === h.charAt(0)) ||
          Ma.test(h) ||
          (!$.support.checkClone && Pa.test(h)) ||
          (!$.support.html5Clone && Na.test(h)) ||
          ((f = !0), (e = $.fragments[h]), (g = e !== b)),
        e || ((e = c.createDocumentFragment()), $.clean(a, c, e, d), f && ($.fragments[h] = g && e)),
        { fragment: e, cacheable: f }
      );
    }),
    ($.fragments = {}),
    $.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
      $.fn[a] = function (c) {
        var d,
          e = 0,
          f = [],
          g = $(c),
          h = g.length,
          i = 1 === this.length && this[0].parentNode;
        if ((null == i || (i && 11 === i.nodeType && 1 === i.childNodes.length)) && 1 === h) return g[b](this[0]), this;
        for (; e < h; e++) (d = (e > 0 ? this.clone(!0) : this).get()), $(g[e])[b](d), (f = f.concat(d));
        return this.pushStack(f, a, g.selector);
      };
    }),
    $.extend({
      clone: function (a, b, c) {
        var d, e, f, g;
        if (
          ($.support.html5Clone || $.isXMLDoc(a) || !Na.test("<" + a.nodeName + ">") ? (g = a.cloneNode(!0)) : ((Ta.innerHTML = a.outerHTML), Ta.removeChild((g = Ta.firstChild))),
          !(($.support.noCloneEvent && $.support.noCloneChecked) || (1 !== a.nodeType && 11 !== a.nodeType) || $.isXMLDoc(a)))
        )
          for (n(a, g), d = o(a), e = o(g), f = 0; d[f]; ++f) e[f] && n(d[f], e[f]);
        if (b && (m(a, g), c)) for (d = o(a), e = o(g), f = 0; d[f]; ++f) m(d[f], e[f]);
        return (d = e = null), g;
      },
      clean: function (a, b, c, d) {
        var e,
          f,
          g,
          h,
          i,
          j,
          l,
          m,
          n,
          o,
          q,
          r = 0,
          s = [];
        for ((b && void 0 !== b.createDocumentFragment) || (b = P), f = b === P && Sa; null != (g = a[r]); r++)
          if (("number" == typeof g && (g += ""), g)) {
            if ("string" == typeof g)
              if (Ka.test(g)) {
                for (f = f || k(b), l = l || f.appendChild(b.createElement("div")), g = g.replace(Ha, "<$1></$2>"), h = (Ia.exec(g) || ["", ""])[1].toLowerCase(), i = Ra[h] || Ra._default, j = i[0], l.innerHTML = i[1] + g + i[2]; j--; )
                  l = l.lastChild;
                if (!$.support.tbody)
                  for (m = Ja.test(g), n = "table" !== h || m ? ("<table>" !== i[1] || m ? [] : l.childNodes) : l.firstChild && l.firstChild.childNodes, e = n.length - 1; e >= 0; --e)
                    $.nodeName(n[e], "tbody") && !n[e].childNodes.length && n[e].parentNode.removeChild(n[e]);
                !$.support.leadingWhitespace && Ga.test(g) && l.insertBefore(b.createTextNode(Ga.exec(g)[0]), l.firstChild), (g = l.childNodes), (l = f.lastChild);
              } else g = b.createTextNode(g);
            g.nodeType ? s.push(g) : (s = $.merge(s, g));
          }
        if ((l && (f.removeChild(l), (g = l = f = null)), !$.support.appendChecked)) for (r = 0; null != (g = s[r]); r++) $.nodeName(g, "input") ? p(g) : void 0 !== g.getElementsByTagName && $.grep(g.getElementsByTagName("input"), p);
        if (c)
          for (
            o = function (a) {
              if (!a.type || Qa.test(a.type)) return d ? d.push(a.parentNode ? a.parentNode.removeChild(a) : a) : c.appendChild(a);
            },
              r = 0;
            null != (g = s[r]);
            r++
          )
            ($.nodeName(g, "script") && o(g)) || (c.appendChild(g), void 0 !== g.getElementsByTagName && ((q = $.grep($.merge([], g.getElementsByTagName("script")), o)), s.splice.apply(s, [r + 1, 0].concat(q)), (r += q.length)));
        return s;
      },
      cleanData: function (a, b) {
        for (var c, d, e, f, g = 0, h = $.expando, i = $.cache, j = $.support.deleteExpando, k = $.event.special; null != (e = a[g]); g++)
          if ((b || $.acceptData(e)) && ((d = e[h]), (c = d && i[d]))) {
            if (c.events) for (f in c.events) k[f] ? $.event.remove(e, f) : $.removeEvent(e, f, c.handle);
            i[d] && (delete i[d], j ? delete e[h] : e.removeAttribute ? e.removeAttribute(h) : (e[h] = null), $.deletedIds.push(d));
          }
      },
    }),
    (function () {
      var a, b;
      ($.uaMatch = function (a) {
        a = a.toLowerCase();
        var b =
          /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || (a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)) || [];
        return { browser: b[1] || "", version: b[2] || "0" };
      }),
        (a = $.uaMatch(R.userAgent)),
        (b = {}),
        a.browser && ((b[a.browser] = !0), (b.version = a.version)),
        b.webkit && (b.safari = !0),
        ($.browser = b),
        ($.sub = function () {
          function a(b, c) {
            return new a.fn.init(b, c);
          }
          $.extend(!0, a, this),
            (a.superclass = this),
            (a.fn = a.prototype = this()),
            (a.fn.constructor = a),
            (a.sub = this.sub),
            (a.fn.init = function (c, d) {
              return d && d instanceof $ && !(d instanceof a) && (d = a(d)), $.fn.init.call(this, c, d, b);
            }),
            (a.fn.init.prototype = a.fn);
          var b = a(P);
          return a;
        });
    })();
  var Ua,
    Va,
    Wa,
    Xa = /alpha\([^)]*\)/i,
    Ya = /opacity=([^)]*)/,
    Za = /^(top|right|bottom|left)$/,
    $a = /^margin/,
    _a = new RegExp("^(" + _ + ")(.*)$", "i"),
    ab = new RegExp("^(" + _ + ")(?!px)[a-z%]+$", "i"),
    bb = new RegExp("^([-+])=(" + _ + ")", "i"),
    cb = {},
    db = { position: "absolute", visibility: "hidden", display: "block" },
    eb = { letterSpacing: 0, fontWeight: 400, lineHeight: 1 },
    fb = ["Top", "Right", "Bottom", "Left"],
    gb = ["Webkit", "O", "Moz", "ms"],
    hb = $.fn.toggle;
  $.fn.extend({
    css: function (a, c) {
      return $.access(
        this,
        function (a, c, d) {
          return d !== b ? $.style(a, c, d) : $.css(a, c);
        },
        a,
        c,
        arguments.length > 1
      );
    },
    show: function () {
      return s(this, !0);
    },
    hide: function () {
      return s(this);
    },
    toggle: function (a, b) {
      var c = "boolean" == typeof a;
      return $.isFunction(a) && $.isFunction(b)
        ? hb.apply(this, arguments)
        : this.each(function () {
            (c ? a : r(this)) ? $(this).show() : $(this).hide();
          });
    },
  }),
    $.extend({
      cssHooks: {
        opacity: {
          get: function (a, b) {
            if (b) {
              var c = Ua(a, "opacity");
              return "" === c ? "1" : c;
            }
          },
        },
      },
      cssNumber: { fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
      cssProps: { float: $.support.cssFloat ? "cssFloat" : "styleFloat" },
      style: function (a, c, d, e) {
        if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
          var f,
            g,
            h,
            i = $.camelCase(c),
            j = a.style;
          if (((c = $.cssProps[i] || ($.cssProps[i] = q(j, i))), (h = $.cssHooks[c] || $.cssHooks[i]), d === b)) return h && "get" in h && (f = h.get(a, !1, e)) !== b ? f : j[c];
          if (
            !((g = typeof d),
            "string" === g && (f = bb.exec(d)) && ((d = (f[1] + 1) * f[2] + parseFloat($.css(a, c))), (g = "number")),
            null == d || ("number" === g && isNaN(d)) || ("number" !== g || $.cssNumber[i] || (d += "px"), h && "set" in h && (d = h.set(a, d, e)) === b))
          )
            try {
              j[c] = d;
            } catch (a) {}
        }
      },
      css: function (a, c, d, e) {
        var f,
          g,
          h,
          i = $.camelCase(c);
        return (
          (c = $.cssProps[i] || ($.cssProps[i] = q(a.style, i))),
          (h = $.cssHooks[c] || $.cssHooks[i]),
          h && "get" in h && (f = h.get(a, !0, e)),
          f === b && (f = Ua(a, c)),
          "normal" === f && c in eb && (f = eb[c]),
          d || e !== b ? ((g = parseFloat(f)), d || $.isNumeric(g) ? g || 0 : f) : f
        );
      },
      swap: function (a, b, c) {
        var d,
          e,
          f = {};
        for (e in b) (f[e] = a.style[e]), (a.style[e] = b[e]);
        d = c.call(a);
        for (e in b) a.style[e] = f[e];
        return d;
      },
    }),
    a.getComputedStyle
      ? (Ua = function (a, b) {
          var c,
            d,
            e,
            f,
            g = getComputedStyle(a, null),
            h = a.style;
          return (
            g &&
              ((c = g[b]),
              "" !== c || $.contains(a.ownerDocument.documentElement, a) || (c = $.style(a, b)),
              ab.test(c) && $a.test(b) && ((d = h.width), (e = h.minWidth), (f = h.maxWidth), (h.minWidth = h.maxWidth = h.width = c), (c = g.width), (h.width = d), (h.minWidth = e), (h.maxWidth = f))),
            c
          );
        })
      : P.documentElement.currentStyle &&
        (Ua = function (a, b) {
          var c,
            d,
            e = a.currentStyle && a.currentStyle[b],
            f = a.style;
          return (
            null == e && f && f[b] && (e = f[b]),
            ab.test(e) &&
              !Za.test(b) &&
              ((c = f.left), (d = a.runtimeStyle && a.runtimeStyle.left), d && (a.runtimeStyle.left = a.currentStyle.left), (f.left = "fontSize" === b ? "1em" : e), (e = f.pixelLeft + "px"), (f.left = c), d && (a.runtimeStyle.left = d)),
            "" === e ? "auto" : e
          );
        }),
    $.each(["height", "width"], function (a, b) {
      $.cssHooks[b] = {
        get: function (a, c, d) {
          if (c)
            return 0 !== a.offsetWidth || "none" !== Ua(a, "display")
              ? v(a, b, d)
              : $.swap(a, db, function () {
                  return v(a, b, d);
                });
        },
        set: function (a, c, d) {
          return t(a, c, d ? u(a, b, d, $.support.boxSizing && "border-box" === $.css(a, "boxSizing")) : 0);
        },
      };
    }),
    $.support.opacity ||
      ($.cssHooks.opacity = {
        get: function (a, b) {
          return Ya.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : b ? "1" : "";
        },
        set: function (a, b) {
          var c = a.style,
            d = a.currentStyle,
            e = $.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
            f = (d && d.filter) || c.filter || "";
          (c.zoom = 1), (b >= 1 && "" === $.trim(f.replace(Xa, "")) && c.removeAttribute && (c.removeAttribute("filter"), d && !d.filter)) || (c.filter = Xa.test(f) ? f.replace(Xa, e) : f + " " + e);
        },
      }),
    $(function () {
      $.support.reliableMarginRight ||
        ($.cssHooks.marginRight = {
          get: function (a, b) {
            return $.swap(a, { display: "inline-block" }, function () {
              if (b) return Ua(a, "marginRight");
            });
          },
        }),
        !$.support.pixelPosition &&
          $.fn.position &&
          $.each(["top", "left"], function (a, b) {
            $.cssHooks[b] = {
              get: function (a, c) {
                if (c) {
                  var d = Ua(a, b);
                  return ab.test(d) ? $(a).position()[b] + "px" : d;
                }
              },
            };
          });
    }),
    $.expr &&
      $.expr.filters &&
      (($.expr.filters.hidden = function (a) {
        return (0 === a.offsetWidth && 0 === a.offsetHeight) || (!$.support.reliableHiddenOffsets && "none" === ((a.style && a.style.display) || Ua(a, "display")));
      }),
      ($.expr.filters.visible = function (a) {
        return !$.expr.filters.hidden(a);
      })),
    $.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
      ($.cssHooks[a + b] = {
        expand: function (c) {
          var d,
            e = "string" == typeof c ? c.split(" ") : [c],
            f = {};
          for (d = 0; d < 4; d++) f[a + fb[d] + b] = e[d] || e[d - 2] || e[0];
          return f;
        },
      }),
        $a.test(a) || ($.cssHooks[a + b].set = t);
    });
  var ib = /\[\]$/,
    jb = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
    kb = /^(?:select|textarea)/i;
  $.fn.extend({
    serialize: function () {
      return $.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        return this.elements ? $.makeArray(this.elements) : this;
      })
        .filter(function () {
          return this.name && !this.disabled && (this.checked || kb.test(this.nodeName) || jb.test(this.type));
        })
        .map(function (a, b) {
          var c = $(this).val();
          return null == c
            ? null
            : $.isArray(c)
            ? $.map(c, function (a, c) {
                return { name: b.name, value: a.replace(/\r?\n/g, "\r\n") };
              })
            : { name: b.name, value: c.replace(/\r?\n/g, "\r\n") };
        })
        .get();
    },
  }),
    ($.param = function (a, c) {
      var d,
        e = [],
        f = function (a, b) {
          (b = $.isFunction(b) ? b() : null == b ? "" : b), (e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b));
        };
      if ((c === b && (c = $.ajaxSettings && $.ajaxSettings.traditional), $.isArray(a) || (a.jquery && !$.isPlainObject(a))))
        $.each(a, function () {
          f(this.name, this.value);
        });
      else for (d in a) x(d, a[d], c, f);
      return e.join("&").replace(/%20/g, "+");
    });
  var lb,
    mb,
    nb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    ob = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
    pb = /^(?:GET|HEAD)$/,
    qb = /\?/,
    rb = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
    sb = $.fn.load,
    tb = {},
    ub = {},
    vb = ["*/"] + ["*"];
  try {
    lb = Q.href;
  } catch (a) {
    (lb = P.createElement("a")), (lb.href = ""), (lb = lb.href);
  }
  (mb = rb.exec(lb.toLowerCase()) || []),
    ($.fn.load = function (a, c, d) {
      if ("string" != typeof a && sb) return sb.apply(this, arguments);
      if (!this.length) return this;
      var e,
        f,
        g,
        h = this,
        i = a.indexOf(" ");
      return (
        i >= 0 && ((e = a.slice(i, a.length)), (a = a.slice(0, i))),
        $.isFunction(c) ? ((d = c), (c = b)) : "object" == typeof c && (f = "POST"),
        $.ajax({
          url: a,
          type: f,
          dataType: "html",
          data: c,
          complete: function (a, b) {
            d && h.each(d, g || [a.responseText, b, a]);
          },
        }).done(function (a) {
          (g = arguments),
            h.html(
              e
                ? $("<div>")
                    .append(a.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ""))
                    .find(e)
                : a
            );
        }),
        this
      );
    }),
    $.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) {
      $.fn[b] = function (a) {
        return this.on(b, a);
      };
    }),
    $.each(["get", "post"], function (a, c) {
      $[c] = function (a, d, e, f) {
        return $.isFunction(d) && ((f = f || e), (e = d), (d = b)), $.ajax({ type: c, url: a, data: d, success: e, dataType: f });
      };
    }),
    $.extend({
      getScript: function (a, c) {
        return $.get(a, b, c, "script");
      },
      getJSON: function (a, b, c) {
        return $.get(a, b, c, "json");
      },
      ajaxSetup: function (a, b) {
        return b ? A(a, $.ajaxSettings) : ((b = a), (a = $.ajaxSettings)), A(a, b), a;
      },
      ajaxSettings: {
        url: lb,
        isLocal: ob.test(mb[1]),
        global: !0,
        type: "GET",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        processData: !0,
        async: !0,
        accepts: { xml: "application/xml, text/xml", html: "text/html", text: "text/plain", json: "application/json, text/javascript", "*": vb },
        contents: { xml: /xml/, html: /html/, json: /json/ },
        responseFields: { xml: "responseXML", text: "responseText" },
        converters: { "* text": a.String, "text html": !0, "text json": $.parseJSON, "text xml": $.parseXML },
        flatOptions: { context: !0, url: !0 },
      },
      ajaxPrefilter: y(tb),
      ajaxTransport: y(ub),
      ajax: function (a, c) {
        function d(a, c, d, g) {
          var j,
            l,
            s,
            t,
            v,
            x = c;
          2 !== u &&
            ((u = 2),
            i && clearTimeout(i),
            (h = b),
            (f = g || ""),
            (w.readyState = a > 0 ? 4 : 0),
            d && (t = B(m, w, d)),
            (a >= 200 && a < 300) || 304 === a
              ? (m.ifModified && ((v = w.getResponseHeader("Last-Modified")), v && ($.lastModified[e] = v), (v = w.getResponseHeader("Etag")) && ($.etag[e] = v)),
                304 === a ? ((x = "notmodified"), (j = !0)) : ((j = C(m, t)), (x = j.state), (l = j.data), (s = j.error), (j = !s)))
              : ((s = x), (x && !a) || ((x = "error"), a < 0 && (a = 0))),
            (w.status = a),
            (w.statusText = "" + (c || x)),
            j ? p.resolveWith(n, [l, x, w]) : p.rejectWith(n, [w, x, s]),
            w.statusCode(r),
            (r = b),
            k && o.trigger("ajax" + (j ? "Success" : "Error"), [w, m, j ? l : s]),
            q.fireWith(n, [w, x]),
            k && (o.trigger("ajaxComplete", [w, m]), --$.active || $.event.trigger("ajaxStop")));
        }
        "object" == typeof a && ((c = a), (a = b)), (c = c || {});
        var e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m = $.ajaxSetup({}, c),
          n = m.context || m,
          o = n !== m && (n.nodeType || n instanceof $) ? $(n) : $.event,
          p = $.Deferred(),
          q = $.Callbacks("once memory"),
          r = m.statusCode || {},
          s = {},
          t = {},
          u = 0,
          v = "canceled",
          w = {
            readyState: 0,
            setRequestHeader: function (a, b) {
              if (!u) {
                var c = a.toLowerCase();
                (a = t[c] = t[c] || a), (s[a] = b);
              }
              return this;
            },
            getAllResponseHeaders: function () {
              return 2 === u ? f : null;
            },
            getResponseHeader: function (a) {
              var c;
              if (2 === u) {
                if (!g) for (g = {}; (c = nb.exec(f)); ) g[c[1].toLowerCase()] = c[2];
                c = g[a.toLowerCase()];
              }
              return c === b ? null : c;
            },
            overrideMimeType: function (a) {
              return u || (m.mimeType = a), this;
            },
            abort: function (a) {
              return (a = a || v), h && h.abort(a), d(0, a), this;
            },
          };
        if (
          (p.promise(w),
          (w.success = w.done),
          (w.error = w.fail),
          (w.complete = q.add),
          (w.statusCode = function (a) {
            if (a) {
              var b;
              if (u < 2) for (b in a) r[b] = [r[b], a[b]];
              else (b = a[w.status]), w.always(b);
            }
            return this;
          }),
          (m.url = ((a || m.url) + "").replace(/#.*$/, "").replace(/^\/\//, mb[1] + "//")),
          (m.dataTypes = $.trim(m.dataType || "*")
            .toLowerCase()
            .split(ba)),
          null == m.crossDomain && ((j = rb.exec(m.url.toLowerCase())), (m.crossDomain = !(!j || (j[1] == mb[1] && j[2] == mb[2] && (j[3] || ("http:" === j[1] ? 80 : 443)) == (mb[3] || ("http:" === mb[1] ? 80 : 443)))))),
          m.data && m.processData && "string" != typeof m.data && (m.data = $.param(m.data, m.traditional)),
          z(tb, m, c, w),
          2 === u)
        )
          return w;
        if (
          ((k = m.global),
          (m.type = m.type.toUpperCase()),
          (m.hasContent = !pb.test(m.type)),
          k && 0 == $.active++ && $.event.trigger("ajaxStart"),
          !m.hasContent && (m.data && ((m.url += (qb.test(m.url) ? "&" : "?") + m.data), delete m.data), (e = m.url), !1 === m.cache))
        ) {
          var x = $.now(),
            y = m.url.replace(/([?&])_=[^&]*/, "$1_=" + x);
          m.url = y + (y === m.url ? (qb.test(m.url) ? "&" : "?") + "_=" + x : "");
        }
        ((m.data && m.hasContent && !1 !== m.contentType) || c.contentType) && w.setRequestHeader("Content-Type", m.contentType),
          m.ifModified && ((e = e || m.url), $.lastModified[e] && w.setRequestHeader("If-Modified-Since", $.lastModified[e]), $.etag[e] && w.setRequestHeader("If-None-Match", $.etag[e])),
          w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + vb + "; q=0.01" : "") : m.accepts["*"]);
        for (l in m.headers) w.setRequestHeader(l, m.headers[l]);
        if (m.beforeSend && (!1 === m.beforeSend.call(n, w, m) || 2 === u)) return w.abort();
        v = "abort";
        for (l in { success: 1, error: 1, complete: 1 }) w[l](m[l]);
        if ((h = z(ub, m, c, w))) {
          (w.readyState = 1),
            k && o.trigger("ajaxSend", [w, m]),
            m.async &&
              m.timeout > 0 &&
              (i = setTimeout(function () {
                w.abort("timeout");
              }, m.timeout));
          try {
            (u = 1), h.send(s, d);
          } catch (a) {
            if (!(u < 2)) throw a;
            d(-1, a);
          }
        } else d(-1, "No Transport");
        return w;
      },
      active: 0,
      lastModified: {},
      etag: {},
    });
  var wb = [],
    xb = /\?/,
    yb = /(=)\?(?=&|$)|\?\?/,
    zb = $.now();
  $.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var a = wb.pop() || $.expando + "_" + zb++;
      return (this[a] = !0), a;
    },
  }),
    $.ajaxPrefilter("json jsonp", function (c, d, e) {
      var f,
        g,
        h,
        i = c.data,
        j = c.url,
        k = !1 !== c.jsonp,
        l = k && yb.test(j),
        m = k && !l && "string" == typeof i && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && yb.test(i);
      if ("jsonp" === c.dataTypes[0] || l || m)
        return (
          (f = c.jsonpCallback = $.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback),
          (g = a[f]),
          l ? (c.url = j.replace(yb, "$1" + f)) : m ? (c.data = i.replace(yb, "$1" + f)) : k && (c.url += (xb.test(j) ? "&" : "?") + c.jsonp + "=" + f),
          (c.converters["script json"] = function () {
            return h || $.error(f + " was not called"), h[0];
          }),
          (c.dataTypes[0] = "json"),
          (a[f] = function () {
            h = arguments;
          }),
          e.always(function () {
            (a[f] = g), c[f] && ((c.jsonpCallback = d.jsonpCallback), wb.push(f)), h && $.isFunction(g) && g(h[0]), (h = g = b);
          }),
          "script"
        );
    }),
    $.ajaxSetup({
      accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
      contents: { script: /javascript|ecmascript/ },
      converters: {
        "text script": function (a) {
          return $.globalEval(a), a;
        },
      },
    }),
    $.ajaxPrefilter("script", function (a) {
      a.cache === b && (a.cache = !1), a.crossDomain && ((a.type = "GET"), (a.global = !1));
    }),
    $.ajaxTransport("script", function (a) {
      if (a.crossDomain) {
        var c,
          d = P.head || P.getElementsByTagName("head")[0] || P.documentElement;
        return {
          send: function (e, f) {
            (c = P.createElement("script")),
              (c.async = "async"),
              a.scriptCharset && (c.charset = a.scriptCharset),
              (c.src = a.url),
              (c.onload = c.onreadystatechange = function (a, e) {
                (e || !c.readyState || /loaded|complete/.test(c.readyState)) && ((c.onload = c.onreadystatechange = null), d && c.parentNode && d.removeChild(c), (c = b), e || f(200, "success"));
              }),
              d.insertBefore(c, d.firstChild);
          },
          abort: function () {
            c && c.onload(0, 1);
          },
        };
      }
    });
  var Ab,
    Bb =
      !!a.ActiveXObject &&
      function () {
        for (var a in Ab) Ab[a](0, 1);
      },
    Cb = 0;
  ($.ajaxSettings.xhr = a.ActiveXObject
    ? function () {
        return (!this.isLocal && D()) || E();
      }
    : D),
    (function (a) {
      $.extend($.support, { ajax: !!a, cors: !!a && "withCredentials" in a });
    })($.ajaxSettings.xhr()),
    $.support.ajax &&
      $.ajaxTransport(function (c) {
        if (!c.crossDomain || $.support.cors) {
          var d;
          return {
            send: function (e, f) {
              var g,
                h,
                i = c.xhr();
              if ((c.username ? i.open(c.type, c.url, c.async, c.username, c.password) : i.open(c.type, c.url, c.async), c.xhrFields)) for (h in c.xhrFields) i[h] = c.xhrFields[h];
              c.mimeType && i.overrideMimeType && i.overrideMimeType(c.mimeType), c.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
              try {
                for (h in e) i.setRequestHeader(h, e[h]);
              } catch (a) {}
              i.send((c.hasContent && c.data) || null),
                (d = function (a, e) {
                  var h, j, k, l, m;
                  try {
                    if (d && (e || 4 === i.readyState))
                      if (((d = b), g && ((i.onreadystatechange = $.noop), Bb && delete Ab[g]), e)) 4 !== i.readyState && i.abort();
                      else {
                        (h = i.status), (k = i.getAllResponseHeaders()), (l = {}), (m = i.responseXML), m && m.documentElement && (l.xml = m);
                        try {
                          l.text = i.responseText;
                        } catch (a) {}
                        try {
                          j = i.statusText;
                        } catch (a) {
                          j = "";
                        }
                        h || !c.isLocal || c.crossDomain ? 1223 === h && (h = 204) : (h = l.text ? 200 : 404);
                      }
                  } catch (a) {
                    e || f(-1, a);
                  }
                  l && f(h, j, l, k);
                }),
                c.async ? (4 === i.readyState ? setTimeout(d, 0) : ((g = ++Cb), Bb && (Ab || ((Ab = {}), $(a).unload(Bb)), (Ab[g] = d)), (i.onreadystatechange = d))) : d();
            },
            abort: function () {
              d && d(0, 1);
            },
          };
        }
      });
  var Db,
    Eb,
    Fb = /^(?:toggle|show|hide)$/,
    Gb = new RegExp("^(?:([-+])=|)(" + _ + ")([a-z%]*)$", "i"),
    Hb = /queueHooks$/,
    Ib = [J],
    Jb = {
      "*": [
        function (a, b) {
          var c,
            d,
            e,
            f = this.createTween(a, b),
            g = Gb.exec(b),
            h = f.cur(),
            i = +h || 0,
            j = 1;
          if (g) {
            if (((c = +g[2]), "px" !== (d = g[3] || ($.cssNumber[a] ? "" : "px")) && i)) {
              i = $.css(f.elem, a, !0) || c || 1;
              do {
                (e = j = j || ".5"), (i /= j), $.style(f.elem, a, i + d), (j = f.cur() / h);
              } while (1 !== j && j !== e);
            }
            (f.unit = d), (f.start = i), (f.end = g[1] ? i + (g[1] + 1) * c : c);
          }
          return f;
        },
      ],
    };
  ($.Animation = $.extend(H, {
    tweener: function (a, b) {
      $.isFunction(a) ? ((b = a), (a = ["*"])) : (a = a.split(" "));
      for (var c, d = 0, e = a.length; d < e; d++) (c = a[d]), (Jb[c] = Jb[c] || []), Jb[c].unshift(b);
    },
    prefilter: function (a, b) {
      b ? Ib.unshift(a) : Ib.push(a);
    },
  })),
    ($.Tween = K),
    (K.prototype = {
      constructor: K,
      init: function (a, b, c, d, e, f) {
        (this.elem = a), (this.prop = c), (this.easing = e || "swing"), (this.options = b), (this.start = this.now = this.cur()), (this.end = d), (this.unit = f || ($.cssNumber[c] ? "" : "px"));
      },
      cur: function () {
        var a = K.propHooks[this.prop];
        return a && a.get ? a.get(this) : K.propHooks._default.get(this);
      },
      run: function (a) {
        var b,
          c = K.propHooks[this.prop];
        return (
          (this.pos = b = $.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration)),
          (this.now = (this.end - this.start) * b + this.start),
          this.options.step && this.options.step.call(this.elem, this.now, this),
          c && c.set ? c.set(this) : K.propHooks._default.set(this),
          this
        );
      },
    }),
    (K.prototype.init.prototype = K.prototype),
    (K.propHooks = {
      _default: {
        get: function (a) {
          var b;
          return null == a.elem[a.prop] || (a.elem.style && null != a.elem.style[a.prop]) ? ((b = $.css(a.elem, a.prop, !1, "")), b && "auto" !== b ? b : 0) : a.elem[a.prop];
        },
        set: function (a) {
          $.fx.step[a.prop] ? $.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[$.cssProps[a.prop]] || $.cssHooks[a.prop]) ? $.style(a.elem, a.prop, a.now + a.unit) : (a.elem[a.prop] = a.now);
        },
      },
    }),
    (K.propHooks.scrollTop = K.propHooks.scrollLeft = {
      set: function (a) {
        a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
      },
    }),
    $.each(["toggle", "show", "hide"], function (a, b) {
      var c = $.fn[b];
      $.fn[b] = function (d, e, f) {
        return null == d || "boolean" == typeof d || (!a && $.isFunction(d) && $.isFunction(e)) ? c.apply(this, arguments) : this.animate(L(b, !0), d, e, f);
      };
    }),
    $.fn.extend({
      fadeTo: function (a, b, c, d) {
        return this.filter(r).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
      },
      animate: function (a, b, c, d) {
        var e = $.isEmptyObject(a),
          f = $.speed(b, c, d),
          g = function () {
            var b = H(this, $.extend({}, a), f);
            e && b.stop(!0);
          };
        return e || !1 === f.queue ? this.each(g) : this.queue(f.queue, g);
      },
      stop: function (a, c, d) {
        var e = function (a) {
          var b = a.stop;
          delete a.stop, b(d);
        };
        return (
          "string" != typeof a && ((d = c), (c = a), (a = b)),
          c && !1 !== a && this.queue(a || "fx", []),
          this.each(function () {
            var b = !0,
              c = null != a && a + "queueHooks",
              f = $.timers,
              g = $._data(this);
            if (c) g[c] && g[c].stop && e(g[c]);
            else for (c in g) g[c] && g[c].stop && Hb.test(c) && e(g[c]);
            for (c = f.length; c--; ) f[c].elem !== this || (null != a && f[c].queue !== a) || (f[c].anim.stop(d), (b = !1), f.splice(c, 1));
            (!b && d) || $.dequeue(this, a);
          })
        );
      },
    }),
    $.each({ slideDown: L("show"), slideUp: L("hide"), slideToggle: L("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
      $.fn[a] = function (a, c, d) {
        return this.animate(b, a, c, d);
      };
    }),
    ($.speed = function (a, b, c) {
      var d = a && "object" == typeof a ? $.extend({}, a) : { complete: c || (!c && b) || ($.isFunction(a) && a), duration: a, easing: (c && b) || (b && !$.isFunction(b) && b) };
      return (
        (d.duration = $.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in $.fx.speeds ? $.fx.speeds[d.duration] : $.fx.speeds._default),
        (null != d.queue && !0 !== d.queue) || (d.queue = "fx"),
        (d.old = d.complete),
        (d.complete = function () {
          $.isFunction(d.old) && d.old.call(this), d.queue && $.dequeue(this, d.queue);
        }),
        d
      );
    }),
    ($.easing = {
      linear: function (a) {
        return a;
      },
      swing: function (a) {
        return 0.5 - Math.cos(a * Math.PI) / 2;
      },
    }),
    ($.timers = []),
    ($.fx = K.prototype.init),
    ($.fx.tick = function () {
      for (var a, b = $.timers, c = 0; c < b.length; c++) (a = b[c])() || b[c] !== a || b.splice(c--, 1);
      b.length || $.fx.stop();
    }),
    ($.fx.timer = function (a) {
      a() && $.timers.push(a) && !Eb && (Eb = setInterval($.fx.tick, $.fx.interval));
    }),
    ($.fx.interval = 13),
    ($.fx.stop = function () {
      clearInterval(Eb), (Eb = null);
    }),
    ($.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    ($.fx.step = {}),
    $.expr &&
      $.expr.filters &&
      ($.expr.filters.animated = function (a) {
        return $.grep($.timers, function (b) {
          return a === b.elem;
        }).length;
      });
  var Kb = /^(?:body|html)$/i;
  ($.fn.offset = function (a) {
    if (arguments.length)
      return a === b
        ? this
        : this.each(function (b) {
            $.offset.setOffset(this, a, b);
          });
    var c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m = this[0],
      n = m && m.ownerDocument;
    if (n)
      return (e = n.body) === m
        ? $.offset.bodyOffset(m)
        : ((d = n.documentElement),
          $.contains(d, m)
            ? ((c = m.getBoundingClientRect()),
              (f = M(n)),
              (g = d.clientTop || e.clientTop || 0),
              (h = d.clientLeft || e.clientLeft || 0),
              (i = f.pageYOffset || d.scrollTop),
              (j = f.pageXOffset || d.scrollLeft),
              (k = c.top + i - g),
              (l = c.left + j - h),
              { top: k, left: l })
            : { top: 0, left: 0 });
  }),
    ($.offset = {
      bodyOffset: function (a) {
        var b = a.offsetTop,
          c = a.offsetLeft;
        return $.support.doesNotIncludeMarginInBodyOffset && ((b += parseFloat($.css(a, "marginTop")) || 0), (c += parseFloat($.css(a, "marginLeft")) || 0)), { top: b, left: c };
      },
      setOffset: function (a, b, c) {
        var d = $.css(a, "position");
        "static" === d && (a.style.position = "relative");
        var e,
          f,
          g = $(a),
          h = g.offset(),
          i = $.css(a, "top"),
          j = $.css(a, "left"),
          k = ("absolute" === d || "fixed" === d) && $.inArray("auto", [i, j]) > -1,
          l = {},
          m = {};
        k ? ((m = g.position()), (e = m.top), (f = m.left)) : ((e = parseFloat(i) || 0), (f = parseFloat(j) || 0)),
          $.isFunction(b) && (b = b.call(a, c, h)),
          null != b.top && (l.top = b.top - h.top + e),
          null != b.left && (l.left = b.left - h.left + f),
          "using" in b ? b.using.call(a, l) : g.css(l);
      },
    }),
    $.fn.extend({
      position: function () {
        if (this[0]) {
          var a = this[0],
            b = this.offsetParent(),
            c = this.offset(),
            d = Kb.test(b[0].nodeName) ? { top: 0, left: 0 } : b.offset();
          return (
            (c.top -= parseFloat($.css(a, "marginTop")) || 0),
            (c.left -= parseFloat($.css(a, "marginLeft")) || 0),
            (d.top += parseFloat($.css(b[0], "borderTopWidth")) || 0),
            (d.left += parseFloat($.css(b[0], "borderLeftWidth")) || 0),
            { top: c.top - d.top, left: c.left - d.left }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (var a = this.offsetParent || P.body; a && !Kb.test(a.nodeName) && "static" === $.css(a, "position"); ) a = a.offsetParent;
          return a || P.body;
        });
      },
    }),
    $.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, c) {
      var d = /Y/.test(c);
      $.fn[a] = function (e) {
        return $.access(
          this,
          function (a, e, f) {
            var g = M(a);
            if (f === b) return g ? (c in g ? g[c] : g.document.documentElement[e]) : a[e];
            g ? g.scrollTo(d ? $(g).scrollLeft() : f, d ? f : $(g).scrollTop()) : (a[e] = f);
          },
          a,
          e,
          arguments.length,
          null
        );
      };
    }),
    $.each({ Height: "height", Width: "width" }, function (a, c) {
      $.each({ padding: "inner" + a, content: c, "": "outer" + a }, function (d, e) {
        $.fn[e] = function (e, f) {
          var g = arguments.length && (d || "boolean" != typeof e),
            h = d || (!0 === e || !0 === f ? "margin" : "border");
          return $.access(
            this,
            function (c, d, e) {
              var f;
              return $.isWindow(c)
                ? c.document.documentElement["client" + a]
                : 9 === c.nodeType
                ? ((f = c.documentElement), Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a]))
                : e === b
                ? $.css(c, d, e, h)
                : $.style(c, d, e, h);
            },
            c,
            g ? e : b,
            g
          );
        };
      });
    }),
    (a.jQuery = a.$ = $),
    "function" == typeof define &&
      define.amd &&
      define.amd.jQuery &&
      define("jquery", [], function () {
        return $;
      });
})(window),
  (function (a, b) {
    function c(b, c) {
      var e,
        f,
        g,
        h = b.nodeName.toLowerCase();
      return "area" === h
        ? ((e = b.parentNode), (f = e.name), !(!b.href || !f || "map" !== e.nodeName.toLowerCase()) && !!(g = a("img[usemap=#" + f + "]")[0]) && d(g))
        : (/input|select|textarea|button|object/.test(h) ? !b.disabled : "a" === h ? b.href || c : c) && d(b);
    }
    function d(b) {
      return (
        a.expr.filters.visible(b) &&
        !a(b)
          .parents()
          .addBack()
          .filter(function () {
            return "hidden" === a.css(this, "visibility");
          }).length
      );
    }
    var e = 0,
      f = /^ui-id-\d+$/;
    (a.ui = a.ui || {}),
      a.extend(a.ui, {
        version: "1.10.3",
        keyCode: {
          BACKSPACE: 8,
          COMMA: 188,
          DELETE: 46,
          DOWN: 40,
          END: 35,
          ENTER: 13,
          ESCAPE: 27,
          HOME: 36,
          LEFT: 37,
          NUMPAD_ADD: 107,
          NUMPAD_DECIMAL: 110,
          NUMPAD_DIVIDE: 111,
          NUMPAD_ENTER: 108,
          NUMPAD_MULTIPLY: 106,
          NUMPAD_SUBTRACT: 109,
          PAGE_DOWN: 34,
          PAGE_UP: 33,
          PERIOD: 190,
          RIGHT: 39,
          SPACE: 32,
          TAB: 9,
          UP: 38,
        },
      }),
      a.fn.extend({
        focus: (function (b) {
          return function (c, d) {
            return "number" == typeof c
              ? this.each(function () {
                  var b = this;
                  setTimeout(function () {
                    a(b).focus(), d && d.call(b);
                  }, c);
                })
              : b.apply(this, arguments);
          };
        })(a.fn.focus),
        scrollParent: function () {
          var b;
          return (
            (b =
              (a.ui.ie && /(static|relative)/.test(this.css("position"))) || /absolute/.test(this.css("position"))
                ? this.parents()
                    .filter(function () {
                      return /(relative|absolute|fixed)/.test(a.css(this, "position")) && /(auto|scroll)/.test(a.css(this, "overflow") + a.css(this, "overflow-y") + a.css(this, "overflow-x"));
                    })
                    .eq(0)
                : this.parents()
                    .filter(function () {
                      return /(auto|scroll)/.test(a.css(this, "overflow") + a.css(this, "overflow-y") + a.css(this, "overflow-x"));
                    })
                    .eq(0)),
            /fixed/.test(this.css("position")) || !b.length ? a(document) : b
          );
        },
        zIndex: function (b) {
          if (void 0 !== b) return this.css("zIndex", b);
          if (this.length)
            for (var c, d, e = a(this[0]); e.length && e[0] !== document; ) {
              if (("absolute" === (c = e.css("position")) || "relative" === c || "fixed" === c) && ((d = parseInt(e.css("zIndex"), 10)), !isNaN(d) && 0 !== d)) return d;
              e = e.parent();
            }
          return 0;
        },
        uniqueId: function () {
          return this.each(function () {
            this.id || (this.id = "ui-id-" + ++e);
          });
        },
        removeUniqueId: function () {
          return this.each(function () {
            f.test(this.id) && a(this).removeAttr("id");
          });
        },
      }),
      a.extend(a.expr[":"], {
        data: a.expr.createPseudo
          ? a.expr.createPseudo(function (b) {
              return function (c) {
                return !!a.data(c, b);
              };
            })
          : function (b, c, d) {
              return !!a.data(b, d[3]);
            },
        focusable: function (b) {
          return c(b, !isNaN(a.attr(b, "tabindex")));
        },
        tabbable: function (b) {
          var d = a.attr(b, "tabindex"),
            e = isNaN(d);
          return (e || d >= 0) && c(b, !e);
        },
      }),
      a("<a>").outerWidth(1).jquery ||
        a.each(["Width", "Height"], function (b, c) {
          function d(b, c, d, f) {
            return (
              a.each(e, function () {
                (c -= parseFloat(a.css(b, "padding" + this)) || 0), d && (c -= parseFloat(a.css(b, "border" + this + "Width")) || 0), f && (c -= parseFloat(a.css(b, "margin" + this)) || 0);
              }),
              c
            );
          }
          var e = "Width" === c ? ["Left", "Right"] : ["Top", "Bottom"],
            f = c.toLowerCase(),
            g = { innerWidth: a.fn.innerWidth, innerHeight: a.fn.innerHeight, outerWidth: a.fn.outerWidth, outerHeight: a.fn.outerHeight };
          (a.fn["inner" + c] = function (b) {
            return void 0 === b
              ? g["inner" + c].call(this)
              : this.each(function () {
                  a(this).css(f, d(this, b) + "px");
                });
          }),
            (a.fn["outer" + c] = function (b, e) {
              return "number" != typeof b
                ? g["outer" + c].call(this, b)
                : this.each(function () {
                    a(this).css(f, d(this, b, !0, e) + "px");
                  });
            });
        }),
      a.fn.addBack ||
        (a.fn.addBack = function (a) {
          return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
        }),
      a("<a>").data("a-b", "a").removeData("a-b").data("a-b") &&
        (a.fn.removeData = (function (b) {
          return function (c) {
            return arguments.length ? b.call(this, a.camelCase(c)) : b.call(this);
          };
        })(a.fn.removeData)),
      (a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())),
      (a.support.selectstart = "onselectstart" in document.createElement("div")),
      a.fn.extend({
        disableSelection: function () {
          return this.bind((a.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (a) {
            a.preventDefault();
          });
        },
        enableSelection: function () {
          return this.unbind(".ui-disableSelection");
        },
      }),
      a.extend(a.ui, {
        plugin: {
          add: function (b, c, d) {
            var e,
              f = a.ui[b].prototype;
            for (e in d) (f.plugins[e] = f.plugins[e] || []), f.plugins[e].push([c, d[e]]);
          },
          call: function (a, b, c) {
            var d,
              e = a.plugins[b];
            if (e && a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType) for (d = 0; d < e.length; d++) a.options[e[d][0]] && e[d][1].apply(a.element, c);
          },
        },
        hasScroll: function (b, c) {
          if ("hidden" === a(b).css("overflow")) return !1;
          var d = c && "left" === c ? "scrollLeft" : "scrollTop",
            e = !1;
          return b[d] > 0 || ((b[d] = 1), (e = b[d] > 0), (b[d] = 0), e);
        },
      });
  })(jQuery),
  (function (a, b) {
    var c = 0,
      d = Array.prototype.slice,
      e = a.cleanData;
    (a.cleanData = function (b) {
      for (var c, d = 0; null != (c = b[d]); d++)
        try {
          a(c).triggerHandler("remove");
        } catch (a) {}
      e(b);
    }),
      (a.widget = function (b, c, d) {
        var e,
          f,
          g,
          h,
          i = {},
          j = b.split(".")[0];
        (b = b.split(".")[1]),
          (e = j + "-" + b),
          d || ((d = c), (c = a.Widget)),
          (a.expr[":"][e.toLowerCase()] = function (b) {
            return !!a.data(b, e);
          }),
          (a[j] = a[j] || {}),
          (f = a[j][b]),
          (g = a[j][b] = function (a, b) {
            if (!this._createWidget) return new g(a, b);
            arguments.length && this._createWidget(a, b);
          }),
          a.extend(g, f, { version: d.version, _proto: a.extend({}, d), _childConstructors: [] }),
          (h = new c()),
          (h.options = a.widget.extend({}, h.options)),
          a.each(d, function (b, d) {
            if (!a.isFunction(d)) return void (i[b] = d);
            i[b] = (function () {
              var a = function () {
                  return c.prototype[b].apply(this, arguments);
                },
                e = function (a) {
                  return c.prototype[b].apply(this, a);
                };
              return function () {
                var b,
                  c = this._super,
                  f = this._superApply;
                return (this._super = a), (this._superApply = e), (b = d.apply(this, arguments)), (this._super = c), (this._superApply = f), b;
              };
            })();
          }),
          (g.prototype = a.widget.extend(h, { widgetEventPrefix: f ? h.widgetEventPrefix : b }, i, { constructor: g, namespace: j, widgetName: b, widgetFullName: e })),
          f
            ? (a.each(f._childConstructors, function (b, c) {
                var d = c.prototype;
                a.widget(d.namespace + "." + d.widgetName, g, c._proto);
              }),
              delete f._childConstructors)
            : c._childConstructors.push(g),
          a.widget.bridge(b, g);
      }),
      (a.widget.extend = function (b) {
        for (var c, e, f = d.call(arguments, 1), g = 0, h = f.length; g < h; g++)
          for (c in f[g]) (e = f[g][c]), f[g].hasOwnProperty(c) && void 0 !== e && (a.isPlainObject(e) ? (b[c] = a.isPlainObject(b[c]) ? a.widget.extend({}, b[c], e) : a.widget.extend({}, e)) : (b[c] = e));
        return b;
      }),
      (a.widget.bridge = function (b, c) {
        var e = c.prototype.widgetFullName || b;
        a.fn[b] = function (f) {
          var g = "string" == typeof f,
            h = d.call(arguments, 1),
            i = this;
          return (
            (f = !g && h.length ? a.widget.extend.apply(null, [f].concat(h)) : f),
            g
              ? this.each(function () {
                  var c,
                    d = a.data(this, e);
                  return d
                    ? a.isFunction(d[f]) && "_" !== f.charAt(0)
                      ? ((c = d[f].apply(d, h)), c !== d && void 0 !== c ? ((i = c && c.jquery ? i.pushStack(c.get()) : c), !1) : void 0)
                      : a.error("no such method '" + f + "' for " + b + " widget instance")
                    : a.error("cannot call methods on " + b + " prior to initialization; attempted to call method '" + f + "'");
                })
              : this.each(function () {
                  var b = a.data(this, e);
                  b ? b.option(f || {})._init() : a.data(this, e, new c(f, this));
                }),
            i
          );
        };
      }),
      (a.Widget = function () {}),
      (a.Widget._childConstructors = []),
      (a.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: { disabled: !1, create: null },
        _createWidget: function (b, d) {
          (d = a(d || this.defaultElement || this)[0]),
            (this.element = a(d)),
            (this.uuid = c++),
            (this.eventNamespace = "." + this.widgetName + this.uuid),
            (this.options = a.widget.extend({}, this.options, this._getCreateOptions(), b)),
            (this.bindings = a()),
            (this.hoverable = a()),
            (this.focusable = a()),
            d !== this &&
              (a.data(d, this.widgetFullName, this),
              this._on(!0, this.element, {
                remove: function (a) {
                  a.target === d && this.destroy();
                },
              }),
              (this.document = a(d.style ? d.ownerDocument : d.document || d)),
              (this.window = a(this.document[0].defaultView || this.document[0].parentWindow))),
            this._create(),
            this._trigger("create", null, this._getCreateEventData()),
            this._init();
        },
        _getCreateOptions: a.noop,
        _getCreateEventData: a.noop,
        _create: a.noop,
        _init: a.noop,
        destroy: function () {
          this._destroy(),
            this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)),
            this.widget()
              .unbind(this.eventNamespace)
              .removeAttr("aria-disabled")
              .removeClass(this.widgetFullName + "-disabled ui-state-disabled"),
            this.bindings.unbind(this.eventNamespace),
            this.hoverable.removeClass("ui-state-hover"),
            this.focusable.removeClass("ui-state-focus");
        },
        _destroy: a.noop,
        widget: function () {
          return this.element;
        },
        option: function (b, c) {
          var d,
            e,
            f,
            g = b;
          if (0 === arguments.length) return a.widget.extend({}, this.options);
          if ("string" == typeof b)
            if (((g = {}), (d = b.split(".")), (b = d.shift()), d.length)) {
              for (e = g[b] = a.widget.extend({}, this.options[b]), f = 0; f < d.length - 1; f++) (e[d[f]] = e[d[f]] || {}), (e = e[d[f]]);
              if (((b = d.pop()), void 0 === c)) return void 0 === e[b] ? null : e[b];
              e[b] = c;
            } else {
              if (void 0 === c) return void 0 === this.options[b] ? null : this.options[b];
              g[b] = c;
            }
          return this._setOptions(g), this;
        },
        _setOptions: function (a) {
          var b;
          for (b in a) this._setOption(b, a[b]);
          return this;
        },
        _setOption: function (a, b) {
          return (
            (this.options[a] = b),
            "disabled" === a &&
              (this.widget()
                .toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!b)
                .attr("aria-disabled", b),
              this.hoverable.removeClass("ui-state-hover"),
              this.focusable.removeClass("ui-state-focus")),
            this
          );
        },
        enable: function () {
          return this._setOption("disabled", !1);
        },
        disable: function () {
          return this._setOption("disabled", !0);
        },
        _on: function (b, c, d) {
          var e,
            f = this;
          "boolean" != typeof b && ((d = c), (c = b), (b = !1)),
            d ? ((c = e = a(c)), (this.bindings = this.bindings.add(c))) : ((d = c), (c = this.element), (e = this.widget())),
            a.each(d, function (d, g) {
              function h() {
                if (b || (!0 !== f.options.disabled && !a(this).hasClass("ui-state-disabled"))) return ("string" == typeof g ? f[g] : g).apply(f, arguments);
              }
              "string" != typeof g && (h.guid = g.guid = g.guid || h.guid || a.guid++);
              var i = d.match(/^(\w+)\s*(.*)$/),
                j = i[1] + f.eventNamespace,
                k = i[2];
              k ? e.delegate(k, j, h) : c.bind(j, h);
            });
        },
        _off: function (a, b) {
          (b = (b || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace), a.unbind(b).undelegate(b);
        },
        _delay: function (a, b) {
          function c() {
            return ("string" == typeof a ? d[a] : a).apply(d, arguments);
          }
          var d = this;
          return setTimeout(c, b || 0);
        },
        _hoverable: function (b) {
          (this.hoverable = this.hoverable.add(b)),
            this._on(b, {
              mouseenter: function (b) {
                a(b.currentTarget).addClass("ui-state-hover");
              },
              mouseleave: function (b) {
                a(b.currentTarget).removeClass("ui-state-hover");
              },
            });
        },
        _focusable: function (b) {
          (this.focusable = this.focusable.add(b)),
            this._on(b, {
              focusin: function (b) {
                a(b.currentTarget).addClass("ui-state-focus");
              },
              focusout: function (b) {
                a(b.currentTarget).removeClass("ui-state-focus");
              },
            });
        },
        _trigger: function (b, c, d) {
          var e,
            f,
            g = this.options[b];
          if (((d = d || {}), (c = a.Event(c)), (c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase()), (c.target = this.element[0]), (f = c.originalEvent))) for (e in f) e in c || (c[e] = f[e]);
          return this.element.trigger(c, d), !((a.isFunction(g) && !1 === g.apply(this.element[0], [c].concat(d))) || c.isDefaultPrevented());
        },
      }),
      a.each({ show: "fadeIn", hide: "fadeOut" }, function (b, c) {
        a.Widget.prototype["_" + b] = function (d, e, f) {
          "string" == typeof e && (e = { effect: e });
          var g,
            h = e ? (!0 === e || "number" == typeof e ? c : e.effect || c) : b;
          (e = e || {}),
            "number" == typeof e && (e = { duration: e }),
            (g = !a.isEmptyObject(e)),
            (e.complete = f),
            e.delay && d.delay(e.delay),
            g && a.effects && a.effects.effect[h]
              ? d[b](e)
              : h !== b && d[h]
              ? d[h](e.duration, e.easing, f)
              : d.queue(function (c) {
                  a(this)[b](), f && f.call(d[0]), c();
                });
        };
      });
  })(jQuery),
  (function (a, b) {
    var c = !1;
    a(document).mouseup(function () {
      c = !1;
    }),
      a.widget("ui.mouse", {
        version: "1.10.3",
        options: { cancel: "input,textarea,button,select,option", distance: 1, delay: 0 },
        _mouseInit: function () {
          var b = this;
          this.element
            .bind("mousedown." + this.widgetName, function (a) {
              return b._mouseDown(a);
            })
            .bind("click." + this.widgetName, function (c) {
              if (!0 === a.data(c.target, b.widgetName + ".preventClickEvent")) return a.removeData(c.target, b.widgetName + ".preventClickEvent"), c.stopImmediatePropagation(), !1;
            }),
            (this.started = !1);
        },
        _mouseDestroy: function () {
          this.element.unbind("." + this.widgetName),
            this._mouseMoveDelegate &&
              a(document)
                .unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
                .unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
        },
        _mouseDown: function (b) {
          if (!c) {
            this._mouseStarted && this._mouseUp(b), (this._mouseDownEvent = b);
            var d = this,
              e = 1 === b.which,
              f = !("string" != typeof this.options.cancel || !b.target.nodeName) && a(b.target).closest(this.options.cancel).length;
            return (
              !(e && !f && this._mouseCapture(b)) ||
              ((this.mouseDelayMet = !this.options.delay),
              this.mouseDelayMet ||
                (this._mouseDelayTimer = setTimeout(function () {
                  d.mouseDelayMet = !0;
                }, this.options.delay)),
              this._mouseDistanceMet(b) && this._mouseDelayMet(b) && ((this._mouseStarted = !1 !== this._mouseStart(b)), !this._mouseStarted)
                ? (b.preventDefault(), !0)
                : (!0 === a.data(b.target, this.widgetName + ".preventClickEvent") && a.removeData(b.target, this.widgetName + ".preventClickEvent"),
                  (this._mouseMoveDelegate = function (a) {
                    return d._mouseMove(a);
                  }),
                  (this._mouseUpDelegate = function (a) {
                    return d._mouseUp(a);
                  }),
                  a(document)
                    .bind("mousemove." + this.widgetName, this._mouseMoveDelegate)
                    .bind("mouseup." + this.widgetName, this._mouseUpDelegate),
                  b.preventDefault(),
                  (c = !0),
                  !0))
            );
          }
        },
        _mouseMove: function (b) {
          return a.ui.ie && (!document.documentMode || document.documentMode < 9) && !b.button
            ? this._mouseUp(b)
            : this._mouseStarted
            ? (this._mouseDrag(b), b.preventDefault())
            : (this._mouseDistanceMet(b) && this._mouseDelayMet(b) && ((this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, b)), this._mouseStarted ? this._mouseDrag(b) : this._mouseUp(b)), !this._mouseStarted);
        },
        _mouseUp: function (b) {
          return (
            a(document)
              .unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
              .unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
            this._mouseStarted && ((this._mouseStarted = !1), b.target === this._mouseDownEvent.target && a.data(b.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(b)),
            !1
          );
        },
        _mouseDistanceMet: function (a) {
          return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance;
        },
        _mouseDelayMet: function () {
          return this.mouseDelayMet;
        },
        _mouseStart: function () {},
        _mouseDrag: function () {},
        _mouseStop: function () {},
        _mouseCapture: function () {
          return !0;
        },
      });
  })(jQuery),
  (function (a, b) {
    function c(a, b, c) {
      return a > b && a < b + c;
    }
    function d(a) {
      return /left|right/.test(a.css("float")) || /inline|table-cell/.test(a.css("display"));
    }
    a.widget("ui.sortable", a.ui.mouse, {
      version: "1.10.3",
      widgetEventPrefix: "sort",
      ready: !1,
      options: {
        appendTo: "parent",
        axis: !1,
        connectWith: !1,
        containment: !1,
        cursor: "auto",
        cursorAt: !1,
        dropOnEmpty: !0,
        forcePlaceholderSize: !1,
        forceHelperSize: !1,
        grid: !1,
        handle: !1,
        helper: "original",
        items: "> *",
        opacity: !1,
        placeholder: !1,
        revert: !1,
        scroll: !0,
        scrollSensitivity: 20,
        scrollSpeed: 20,
        scope: "default",
        tolerance: "intersect",
        zIndex: 1e3,
        activate: null,
        beforeStop: null,
        change: null,
        deactivate: null,
        out: null,
        over: null,
        receive: null,
        remove: null,
        sort: null,
        start: null,
        stop: null,
        update: null,
      },
      _create: function () {
        var a = this.options;
        (this.containerCache = {}),
          this.element.addClass("ui-sortable"),
          this.refresh(),
          (this.floating = !!this.items.length && ("x" === a.axis || d(this.items[0].item))),
          (this.offset = this.element.offset()),
          this._mouseInit(),
          (this.ready = !0);
      },
      _destroy: function () {
        this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
        for (var a = this.items.length - 1; a >= 0; a--) this.items[a].item.removeData(this.widgetName + "-item");
        return this;
      },
      _setOption: function (b, c) {
        "disabled" === b ? ((this.options[b] = c), this.widget().toggleClass("ui-sortable-disabled", !!c)) : a.Widget.prototype._setOption.apply(this, arguments);
      },
      _mouseCapture: function (b, c) {
        var d = null,
          e = !1,
          f = this;
        return (
          !this.reverting &&
          !this.options.disabled &&
          "static" !== this.options.type &&
          (this._refreshItems(b),
          a(b.target)
            .parents()
            .each(function () {
              if (a.data(this, f.widgetName + "-item") === f) return (d = a(this)), !1;
            }),
          a.data(b.target, f.widgetName + "-item") === f && (d = a(b.target)),
          !!d &&
            !(
              this.options.handle &&
              !c &&
              (a(this.options.handle, d)
                .find("*")
                .addBack()
                .each(function () {
                  this === b.target && (e = !0);
                }),
              !e)
            ) &&
            ((this.currentItem = d), this._removeCurrentsFromItems(), !0))
        );
      },
      _mouseStart: function (b, c, d) {
        var e,
          f,
          g = this.options;
        if (
          ((this.currentContainer = this),
          this.refreshPositions(),
          (this.helper = this._createHelper(b)),
          this._cacheHelperProportions(),
          this._cacheMargins(),
          (this.scrollParent = this.helper.scrollParent()),
          (this.offset = this.currentItem.offset()),
          (this.offset = { top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left }),
          a.extend(this.offset, { click: { left: b.pageX - this.offset.left, top: b.pageY - this.offset.top }, parent: this._getParentOffset(), relative: this._getRelativeOffset() }),
          this.helper.css("position", "absolute"),
          (this.cssPosition = this.helper.css("position")),
          (this.originalPosition = this._generatePosition(b)),
          (this.originalPageX = b.pageX),
          (this.originalPageY = b.pageY),
          g.cursorAt && this._adjustOffsetFromHelper(g.cursorAt),
          (this.domPosition = { prev: this.currentItem.prev()[0], parent: this.currentItem.parent()[0] }),
          this.helper[0] !== this.currentItem[0] && this.currentItem.hide(),
          this._createPlaceholder(),
          g.containment && this._setContainment(),
          g.cursor &&
            "auto" !== g.cursor &&
            ((f = this.document.find("body")), (this.storedCursor = f.css("cursor")), f.css("cursor", g.cursor), (this.storedStylesheet = a("<style>*{ cursor: " + g.cursor + " !important; }</style>").appendTo(f))),
          g.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", g.opacity)),
          g.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", g.zIndex)),
          this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()),
          this._trigger("start", b, this._uiHash()),
          this._preserveHelperProportions || this._cacheHelperProportions(),
          !d)
        )
          for (e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("activate", b, this._uiHash(this));
        return a.ui.ddmanager && (a.ui.ddmanager.current = this), a.ui.ddmanager && !g.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), (this.dragging = !0), this.helper.addClass("ui-sortable-helper"), this._mouseDrag(b), !0;
      },
      _mouseDrag: function (b) {
        var c,
          d,
          e,
          f,
          g = this.options,
          h = !1;
        for (
          this.position = this._generatePosition(b),
            this.positionAbs = this._convertPositionTo("absolute"),
            this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs),
            this.options.scroll &&
              (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName
                ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - b.pageY < g.scrollSensitivity
                    ? (this.scrollParent[0].scrollTop = h = this.scrollParent[0].scrollTop + g.scrollSpeed)
                    : b.pageY - this.overflowOffset.top < g.scrollSensitivity && (this.scrollParent[0].scrollTop = h = this.scrollParent[0].scrollTop - g.scrollSpeed),
                  this.overflowOffset.left + this.scrollParent[0].offsetWidth - b.pageX < g.scrollSensitivity
                    ? (this.scrollParent[0].scrollLeft = h = this.scrollParent[0].scrollLeft + g.scrollSpeed)
                    : b.pageX - this.overflowOffset.left < g.scrollSensitivity && (this.scrollParent[0].scrollLeft = h = this.scrollParent[0].scrollLeft - g.scrollSpeed))
                : (b.pageY - a(document).scrollTop() < g.scrollSensitivity
                    ? (h = a(document).scrollTop(a(document).scrollTop() - g.scrollSpeed))
                    : a(window).height() - (b.pageY - a(document).scrollTop()) < g.scrollSensitivity && (h = a(document).scrollTop(a(document).scrollTop() + g.scrollSpeed)),
                  b.pageX - a(document).scrollLeft() < g.scrollSensitivity
                    ? (h = a(document).scrollLeft(a(document).scrollLeft() - g.scrollSpeed))
                    : a(window).width() - (b.pageX - a(document).scrollLeft()) < g.scrollSensitivity && (h = a(document).scrollLeft(a(document).scrollLeft() + g.scrollSpeed))),
              !1 !== h && a.ui.ddmanager && !g.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b)),
            this.positionAbs = this._convertPositionTo("absolute"),
            (this.options.axis && "y" === this.options.axis) || (this.helper[0].style.left = this.position.left + "px"),
            (this.options.axis && "x" === this.options.axis) || (this.helper[0].style.top = this.position.top + "px"),
            c = this.items.length - 1;
          c >= 0;
          c--
        )
          if (
            ((d = this.items[c]),
            (e = d.item[0]),
            (f = this._intersectsWithPointer(d)) &&
              d.instance === this.currentContainer &&
              !(e === this.currentItem[0] || this.placeholder[1 === f ? "next" : "prev"]()[0] === e || a.contains(this.placeholder[0], e) || ("semi-dynamic" === this.options.type && a.contains(this.element[0], e))))
          ) {
            if (((this.direction = 1 === f ? "down" : "up"), "pointer" !== this.options.tolerance && !this._intersectsWithSides(d))) break;
            this._rearrange(b, d), this._trigger("change", b, this._uiHash());
            break;
          }
        return this._contactContainers(b), a.ui.ddmanager && a.ui.ddmanager.drag(this, b), this._trigger("sort", b, this._uiHash()), (this.lastPositionAbs = this.positionAbs), !1;
      },
      _mouseStop: function (b, c) {
        if (b) {
          if ((a.ui.ddmanager && !this.options.dropBehaviour && a.ui.ddmanager.drop(this, b), this.options.revert)) {
            var d = this,
              e = this.placeholder.offset(),
              f = this.options.axis,
              g = {};
            (f && "x" !== f) || (g.left = e.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)),
              (f && "y" !== f) || (g.top = e.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)),
              (this.reverting = !0),
              a(this.helper).animate(g, parseInt(this.options.revert, 10) || 500, function () {
                d._clear(b);
              });
          } else this._clear(b, c);
          return !1;
        }
      },
      cancel: function () {
        if (this.dragging) {
          this._mouseUp({ target: null }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
          for (var b = this.containers.length - 1; b >= 0; b--)
            this.containers[b]._trigger("deactivate", null, this._uiHash(this)), this.containers[b].containerCache.over && (this.containers[b]._trigger("out", null, this._uiHash(this)), (this.containers[b].containerCache.over = 0));
        }
        return (
          this.placeholder &&
            (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
            "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(),
            a.extend(this, { helper: null, dragging: !1, reverting: !1, _noFinalSort: null }),
            this.domPosition.prev ? a(this.domPosition.prev).after(this.currentItem) : a(this.domPosition.parent).prepend(this.currentItem)),
          this
        );
      },
      serialize: function (b) {
        var c = this._getItemsAsjQuery(b && b.connected),
          d = [];
        return (
          (b = b || {}),
          a(c).each(function () {
            var c = (a(b.item || this).attr(b.attribute || "id") || "").match(b.expression || /(.+)[\-=_](.+)/);
            c && d.push((b.key || c[1] + "[]") + "=" + (b.key && b.expression ? c[1] : c[2]));
          }),
          !d.length && b.key && d.push(b.key + "="),
          d.join("&")
        );
      },
      toArray: function (b) {
        var c = this._getItemsAsjQuery(b && b.connected),
          d = [];
        return (
          (b = b || {}),
          c.each(function () {
            d.push(a(b.item || this).attr(b.attribute || "id") || "");
          }),
          d
        );
      },
      _intersectsWith: function (a) {
        var b = this.positionAbs.left,
          c = b + this.helperProportions.width,
          d = this.positionAbs.top,
          e = d + this.helperProportions.height,
          f = a.left,
          g = f + a.width,
          h = a.top,
          i = h + a.height,
          j = this.offset.click.top,
          k = this.offset.click.left,
          l = "x" === this.options.axis || (d + j > h && d + j < i),
          m = "y" === this.options.axis || (b + k > f && b + k < g),
          n = l && m;
        return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || ("pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > a[this.floating ? "width" : "height"])
          ? n
          : f < b + this.helperProportions.width / 2 && c - this.helperProportions.width / 2 < g && h < d + this.helperProportions.height / 2 && e - this.helperProportions.height / 2 < i;
      },
      _intersectsWithPointer: function (a) {
        var b = "x" === this.options.axis || c(this.positionAbs.top + this.offset.click.top, a.top, a.height),
          d = "y" === this.options.axis || c(this.positionAbs.left + this.offset.click.left, a.left, a.width),
          e = b && d,
          f = this._getDragVerticalDirection(),
          g = this._getDragHorizontalDirection();
        return !!e && (this.floating ? ((g && "right" === g) || "down" === f ? 2 : 1) : f && ("down" === f ? 2 : 1));
      },
      _intersectsWithSides: function (a) {
        var b = c(this.positionAbs.top + this.offset.click.top, a.top + a.height / 2, a.height),
          d = c(this.positionAbs.left + this.offset.click.left, a.left + a.width / 2, a.width),
          e = this._getDragVerticalDirection(),
          f = this._getDragHorizontalDirection();
        return this.floating && f ? ("right" === f && d) || ("left" === f && !d) : e && (("down" === e && b) || ("up" === e && !b));
      },
      _getDragVerticalDirection: function () {
        var a = this.positionAbs.top - this.lastPositionAbs.top;
        return 0 !== a && (a > 0 ? "down" : "up");
      },
      _getDragHorizontalDirection: function () {
        var a = this.positionAbs.left - this.lastPositionAbs.left;
        return 0 !== a && (a > 0 ? "right" : "left");
      },
      refresh: function (a) {
        return this._refreshItems(a), this.refreshPositions(), this;
      },
      _connectWith: function () {
        var a = this.options;
        return a.connectWith.constructor === String ? [a.connectWith] : a.connectWith;
      },
      _getItemsAsjQuery: function (b) {
        var c,
          d,
          e,
          f,
          g = [],
          h = [],
          i = this._connectWith();
        if (i && b)
          for (c = i.length - 1; c >= 0; c--)
            for (e = a(i[c]), d = e.length - 1; d >= 0; d--)
              (f = a.data(e[d], this.widgetFullName)) &&
                f !== this &&
                !f.options.disabled &&
                h.push([a.isFunction(f.options.items) ? f.options.items.call(f.element) : a(f.options.items, f.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), f]);
        for (
          h.push([
            a.isFunction(this.options.items) ? this.options.items.call(this.element, null, { options: this.options, item: this.currentItem }) : a(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),
            this,
          ]),
            c = h.length - 1;
          c >= 0;
          c--
        )
          h[c][0].each(function () {
            g.push(this);
          });
        return a(g);
      },
      _removeCurrentsFromItems: function () {
        var b = this.currentItem.find(":data(" + this.widgetName + "-item)");
        this.items = a.grep(this.items, function (a) {
          for (var c = 0; c < b.length; c++) if (b[c] === a.item[0]) return !1;
          return !0;
        });
      },
      _refreshItems: function (b) {
        (this.items = []), (this.containers = [this]);
        var c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = this.items,
          l = [[a.isFunction(this.options.items) ? this.options.items.call(this.element[0], b, { item: this.currentItem }) : a(this.options.items, this.element), this]],
          m = this._connectWith();
        if (m && this.ready)
          for (c = m.length - 1; c >= 0; c--)
            for (e = a(m[c]), d = e.length - 1; d >= 0; d--)
              (f = a.data(e[d], this.widgetFullName)) &&
                f !== this &&
                !f.options.disabled &&
                (l.push([a.isFunction(f.options.items) ? f.options.items.call(f.element[0], b, { item: this.currentItem }) : a(f.options.items, f.element), f]), this.containers.push(f));
        for (c = l.length - 1; c >= 0; c--) for (g = l[c][1], h = l[c][0], d = 0, j = h.length; d < j; d++) (i = a(h[d])), i.data(this.widgetName + "-item", g), k.push({ item: i, instance: g, width: 0, height: 0, left: 0, top: 0 });
      },
      refreshPositions: function (b) {
        this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
        var c, d, e, f;
        for (c = this.items.length - 1; c >= 0; c--)
          (d = this.items[c]),
            (d.instance !== this.currentContainer && this.currentContainer && d.item[0] !== this.currentItem[0]) ||
              ((e = this.options.toleranceElement ? a(this.options.toleranceElement, d.item) : d.item), b || ((d.width = e.outerWidth()), (d.height = e.outerHeight())), (f = e.offset()), (d.left = f.left), (d.top = f.top));
        if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
        else
          for (c = this.containers.length - 1; c >= 0; c--)
            (f = this.containers[c].element.offset()),
              (this.containers[c].containerCache.left = f.left),
              (this.containers[c].containerCache.top = f.top),
              (this.containers[c].containerCache.width = this.containers[c].element.outerWidth()),
              (this.containers[c].containerCache.height = this.containers[c].element.outerHeight());
        return this;
      },
      _createPlaceholder: function (b) {
        b = b || this;
        var c,
          d = b.options;
        (d.placeholder && d.placeholder.constructor !== String) ||
          ((c = d.placeholder),
          (d.placeholder = {
            element: function () {
              var d = b.currentItem[0].nodeName.toLowerCase(),
                e = a("<" + d + ">", b.document[0])
                  .addClass(c || b.currentItem[0].className + " ui-sortable-placeholder")
                  .removeClass("ui-sortable-helper");
              return (
                "tr" === d
                  ? b.currentItem.children().each(function () {
                      a("<td>&#160;</td>", b.document[0])
                        .attr("colspan", a(this).attr("colspan") || 1)
                        .appendTo(e);
                    })
                  : "img" === d && e.attr("src", b.currentItem.attr("src")),
                c || e.css("visibility", "hidden"),
                e
              );
            },
            update: function (a, e) {
              (c && !d.forcePlaceholderSize) ||
                (e.height() || e.height(b.currentItem.innerHeight() - parseInt(b.currentItem.css("paddingTop") || 0, 10) - parseInt(b.currentItem.css("paddingBottom") || 0, 10)),
                e.width() || e.width(b.currentItem.innerWidth() - parseInt(b.currentItem.css("paddingLeft") || 0, 10) - parseInt(b.currentItem.css("paddingRight") || 0, 10)));
            },
          })),
          (b.placeholder = a(d.placeholder.element.call(b.element, b.currentItem))),
          b.currentItem.after(b.placeholder),
          d.placeholder.update(b, b.placeholder);
      },
      _contactContainers: function (b) {
        var e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o = null,
          p = null;
        for (e = this.containers.length - 1; e >= 0; e--)
          if (!a.contains(this.currentItem[0], this.containers[e].element[0]))
            if (this._intersectsWith(this.containers[e].containerCache)) {
              if (o && a.contains(this.containers[e].element[0], o.element[0])) continue;
              (o = this.containers[e]), (p = e);
            } else this.containers[e].containerCache.over && (this.containers[e]._trigger("out", b, this._uiHash(this)), (this.containers[e].containerCache.over = 0));
        if (o)
          if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", b, this._uiHash(this)), (this.containers[p].containerCache.over = 1));
          else {
            for (g = 1e4, h = null, n = o.floating || d(this.currentItem), i = n ? "left" : "top", j = n ? "width" : "height", k = this.positionAbs[i] + this.offset.click[i], f = this.items.length - 1; f >= 0; f--)
              a.contains(this.containers[p].element[0], this.items[f].item[0]) &&
                this.items[f].item[0] !== this.currentItem[0] &&
                ((n && !c(this.positionAbs.top + this.offset.click.top, this.items[f].top, this.items[f].height)) ||
                  ((l = this.items[f].item.offset()[i]),
                  (m = !1),
                  Math.abs(l - k) > Math.abs(l + this.items[f][j] - k) && ((m = !0), (l += this.items[f][j])),
                  Math.abs(l - k) < g && ((g = Math.abs(l - k)), (h = this.items[f]), (this.direction = m ? "up" : "down"))));
            if (!h && !this.options.dropOnEmpty) return;
            if (this.currentContainer === this.containers[p]) return;
            h ? this._rearrange(b, h, null, !0) : this._rearrange(b, null, this.containers[p].element, !0),
              this._trigger("change", b, this._uiHash()),
              this.containers[p]._trigger("change", b, this._uiHash(this)),
              (this.currentContainer = this.containers[p]),
              this.options.placeholder.update(this.currentContainer, this.placeholder),
              this.containers[p]._trigger("over", b, this._uiHash(this)),
              (this.containers[p].containerCache.over = 1);
          }
      },
      _createHelper: function (b) {
        var c = this.options,
          d = a.isFunction(c.helper) ? a(c.helper.apply(this.element[0], [b, this.currentItem])) : "clone" === c.helper ? this.currentItem.clone() : this.currentItem;
        return (
          d.parents("body").length || a("parent" !== c.appendTo ? c.appendTo : this.currentItem[0].parentNode)[0].appendChild(d[0]),
          d[0] === this.currentItem[0] &&
            (this._storedCSS = {
              width: this.currentItem[0].style.width,
              height: this.currentItem[0].style.height,
              position: this.currentItem.css("position"),
              top: this.currentItem.css("top"),
              left: this.currentItem.css("left"),
            }),
          (d[0].style.width && !c.forceHelperSize) || d.width(this.currentItem.width()),
          (d[0].style.height && !c.forceHelperSize) || d.height(this.currentItem.height()),
          d
        );
      },
      _adjustOffsetFromHelper: function (b) {
        "string" == typeof b && (b = b.split(" ")),
          a.isArray(b) && (b = { left: +b[0], top: +b[1] || 0 }),
          "left" in b && (this.offset.click.left = b.left + this.margins.left),
          "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left),
          "top" in b && (this.offset.click.top = b.top + this.margins.top),
          "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top);
      },
      _getParentOffset: function () {
        this.offsetParent = this.helper.offsetParent();
        var b = this.offsetParent.offset();
        return (
          "absolute" === this.cssPosition && this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) && ((b.left += this.scrollParent.scrollLeft()), (b.top += this.scrollParent.scrollTop())),
          (this.offsetParent[0] === document.body || (this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && a.ui.ie)) && (b = { top: 0, left: 0 }),
          { top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) }
        );
      },
      _getRelativeOffset: function () {
        if ("relative" === this.cssPosition) {
          var a = this.currentItem.position();
          return { top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft() };
        }
        return { top: 0, left: 0 };
      },
      _cacheMargins: function () {
        this.margins = { left: parseInt(this.currentItem.css("marginLeft"), 10) || 0, top: parseInt(this.currentItem.css("marginTop"), 10) || 0 };
      },
      _cacheHelperProportions: function () {
        this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() };
      },
      _setContainment: function () {
        var b,
          c,
          d,
          e = this.options;
        "parent" === e.containment && (e.containment = this.helper[0].parentNode),
          ("document" !== e.containment && "window" !== e.containment) ||
            (this.containment = [
              0 - this.offset.relative.left - this.offset.parent.left,
              0 - this.offset.relative.top - this.offset.parent.top,
              a("document" === e.containment ? document : window).width() - this.helperProportions.width - this.margins.left,
              (a("document" === e.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top,
            ]),
          /^(document|window|parent)$/.test(e.containment) ||
            ((b = a(e.containment)[0]),
            (c = a(e.containment).offset()),
            (d = "hidden" !== a(b).css("overflow")),
            (this.containment = [
              c.left + (parseInt(a(b).css("borderLeftWidth"), 10) || 0) + (parseInt(a(b).css("paddingLeft"), 10) || 0) - this.margins.left,
              c.top + (parseInt(a(b).css("borderTopWidth"), 10) || 0) + (parseInt(a(b).css("paddingTop"), 10) || 0) - this.margins.top,
              c.left + (d ? Math.max(b.scrollWidth, b.offsetWidth) : b.offsetWidth) - (parseInt(a(b).css("borderLeftWidth"), 10) || 0) - (parseInt(a(b).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left,
              c.top + (d ? Math.max(b.scrollHeight, b.offsetHeight) : b.offsetHeight) - (parseInt(a(b).css("borderTopWidth"), 10) || 0) - (parseInt(a(b).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top,
            ]));
      },
      _convertPositionTo: function (b, c) {
        c || (c = this.position);
        var d = "absolute" === b ? 1 : -1,
          e = "absolute" !== this.cssPosition || (this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0])) ? this.scrollParent : this.offsetParent,
          f = /(html|body)/i.test(e[0].tagName);
        return {
          top: c.top + this.offset.relative.top * d + this.offset.parent.top * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : f ? 0 : e.scrollTop()) * d,
          left: c.left + this.offset.relative.left * d + this.offset.parent.left * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : f ? 0 : e.scrollLeft()) * d,
        };
      },
      _generatePosition: function (b) {
        var c,
          d,
          e = this.options,
          f = b.pageX,
          g = b.pageY,
          h = "absolute" !== this.cssPosition || (this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0])) ? this.scrollParent : this.offsetParent,
          i = /(html|body)/i.test(h[0].tagName);
        return (
          "relative" !== this.cssPosition || (this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0]) || (this.offset.relative = this._getRelativeOffset()),
          this.originalPosition &&
            (this.containment &&
              (b.pageX - this.offset.click.left < this.containment[0] && (f = this.containment[0] + this.offset.click.left),
              b.pageY - this.offset.click.top < this.containment[1] && (g = this.containment[1] + this.offset.click.top),
              b.pageX - this.offset.click.left > this.containment[2] && (f = this.containment[2] + this.offset.click.left),
              b.pageY - this.offset.click.top > this.containment[3] && (g = this.containment[3] + this.offset.click.top)),
            e.grid &&
              ((c = this.originalPageY + Math.round((g - this.originalPageY) / e.grid[1]) * e.grid[1]),
              (g = this.containment ? (c - this.offset.click.top >= this.containment[1] && c - this.offset.click.top <= this.containment[3] ? c : c - this.offset.click.top >= this.containment[1] ? c - e.grid[1] : c + e.grid[1]) : c),
              (d = this.originalPageX + Math.round((f - this.originalPageX) / e.grid[0]) * e.grid[0]),
              (f = this.containment ? (d - this.offset.click.left >= this.containment[0] && d - this.offset.click.left <= this.containment[2] ? d : d - this.offset.click.left >= this.containment[0] ? d - e.grid[0] : d + e.grid[0]) : d))),
          {
            top: g - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : i ? 0 : h.scrollTop()),
            left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : i ? 0 : h.scrollLeft()),
          }
        );
      },
      _rearrange: function (a, b, c, d) {
        c ? c[0].appendChild(this.placeholder[0]) : b.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? b.item[0] : b.item[0].nextSibling), (this.counter = this.counter ? ++this.counter : 1);
        var e = this.counter;
        this._delay(function () {
          e === this.counter && this.refreshPositions(!d);
        });
      },
      _clear: function (a, b) {
        this.reverting = !1;
        var c,
          d = [];
        if ((!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), (this._noFinalSort = null), this.helper[0] === this.currentItem[0])) {
          for (c in this._storedCSS) ("auto" !== this._storedCSS[c] && "static" !== this._storedCSS[c]) || (this._storedCSS[c] = "");
          this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
        } else this.currentItem.show();
        for (
          this.fromOutside &&
            !b &&
            d.push(function (a) {
              this._trigger("receive", a, this._uiHash(this.fromOutside));
            }),
            (!this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0]) ||
              b ||
              d.push(function (a) {
                this._trigger("update", a, this._uiHash());
              }),
            this !== this.currentContainer &&
              (b ||
                (d.push(function (a) {
                  this._trigger("remove", a, this._uiHash());
                }),
                d.push(
                  function (a) {
                    return function (b) {
                      a._trigger("receive", b, this._uiHash(this));
                    };
                  }.call(this, this.currentContainer)
                ),
                d.push(
                  function (a) {
                    return function (b) {
                      a._trigger("update", b, this._uiHash(this));
                    };
                  }.call(this, this.currentContainer)
                ))),
            c = this.containers.length - 1;
          c >= 0;
          c--
        )
          b ||
            d.push(
              function (a) {
                return function (b) {
                  a._trigger("deactivate", b, this._uiHash(this));
                };
              }.call(this, this.containers[c])
            ),
            this.containers[c].containerCache.over &&
              (d.push(
                function (a) {
                  return function (b) {
                    a._trigger("out", b, this._uiHash(this));
                  };
                }.call(this, this.containers[c])
              ),
              (this.containers[c].containerCache.over = 0));
        if (
          (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()),
          this._storedOpacity && this.helper.css("opacity", this._storedOpacity),
          this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex),
          (this.dragging = !1),
          this.cancelHelperRemoval)
        ) {
          if (!b) {
            for (this._trigger("beforeStop", a, this._uiHash()), c = 0; c < d.length; c++) d[c].call(this, a);
            this._trigger("stop", a, this._uiHash());
          }
          return (this.fromOutside = !1), !1;
        }
        if ((b || this._trigger("beforeStop", a, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), (this.helper = null), !b)) {
          for (c = 0; c < d.length; c++) d[c].call(this, a);
          this._trigger("stop", a, this._uiHash());
        }
        return (this.fromOutside = !1), !0;
      },
      _trigger: function () {
        !1 === a.Widget.prototype._trigger.apply(this, arguments) && this.cancel();
      },
      _uiHash: function (b) {
        var c = b || this;
        return { helper: c.helper, placeholder: c.placeholder || a([]), position: c.position, originalPosition: c.originalPosition, offset: c.positionAbs, item: c.currentItem, sender: b ? b.element : null };
      },
    });
  })(jQuery),
  (function (a) {
    var b = a({});
    (a.subscribe = function () {
      b.on.apply(b, arguments);
    }),
      (a.unsubscribe = function () {
        b.off.apply(b, arguments);
      }),
      (a.publish = function () {
        b.trigger.apply(b, arguments);
      });
  })(jQuery),
  (function (a) {
    "use strict";
    var b = function (a, b) {
      this.init("tooltip", a, b);
    };
    (b.prototype = {
      constructor: b,
      init: function (b, c, d) {
        var e, f;
        (this.type = b),
          (this.$element = a(c)),
          (this.options = this.getOptions(d)),
          (this.enabled = !0),
          "click" == this.options.trigger
            ? this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this))
            : "manual" != this.options.trigger &&
              ((e = "hover" == this.options.trigger ? "mouseenter" : "focus"),
              (f = "hover" == this.options.trigger ? "mouseleave" : "blur"),
              this.$element.on(e + "." + this.type, this.options.selector, a.proxy(this.enter, this)),
              this.$element.on(f + "." + this.type, this.options.selector, a.proxy(this.leave, this))),
          this.options.selector ? (this._options = a.extend({}, this.options, { trigger: "manual", selector: "" })) : this.fixTitle();
      },
      getOptions: function (b) {
        return (b = a.extend({}, a.fn[this.type].defaults, b, this.$element.data())), b.delay && "number" == typeof b.delay && (b.delay = { show: b.delay, hide: b.delay }), b;
      },
      enter: function (b) {
        var c = a(b.currentTarget)[this.type](this._options).data(this.type);
        if (!c.options.delay || !c.options.delay.show) return c.show();
        clearTimeout(this.timeout),
          (c.hoverState = "in"),
          (this.timeout = setTimeout(function () {
            "in" == c.hoverState && c.show();
          }, c.options.delay.show));
      },
      leave: function (b) {
        var c = a(b.currentTarget)[this.type](this._options).data(this.type);
        if ((this.timeout && clearTimeout(this.timeout), !c.options.delay || !c.options.delay.hide)) return c.hide();
        (c.hoverState = "out"),
          (this.timeout = setTimeout(function () {
            "out" == c.hoverState && c.hide();
          }, c.options.delay.hide));
      },
      show: function () {
        var a, b, c, d, e, f, g;
        if (this.hasContent() && this.enabled) {
          switch (
            ((a = this.tip()),
            this.setContent(),
            this.options.animation && a.addClass("fade"),
            (f = "function" == typeof this.options.placement ? this.options.placement.call(this, a[0], this.$element[0]) : this.options.placement),
            (b = /in/.test(f)),
            a
              .remove()
              .css({ top: 0, left: 0, display: "block" })
              .appendTo(b ? this.$element : document.body),
            (c = this.getPosition(b)),
            (d = a[0].offsetWidth),
            (e = a[0].offsetHeight),
            b ? f.split(" ")[1] : f)
          ) {
            case "bottom":
              g = { top: c.top + c.height, left: c.left + c.width / 2 - d / 2 };
              break;
            case "top":
              g = { top: c.top - e, left: c.left + c.width / 2 - d / 2 };
              break;
            case "left":
              g = { top: c.top + c.height / 2 - e / 2, left: c.left - d };
              break;
            case "right":
              g = { top: c.top + c.height / 2 - e / 2, left: c.left + c.width };
          }
          a.css(g).addClass(f).addClass("in");
        }
      },
      setContent: function () {
        var a = this.tip(),
          b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right");
      },
      hide: function () {
        var b = this.tip();
        return (
          b.removeClass("in"),
          a.support.transition && this.$tip.hasClass("fade")
            ? (function () {
                var c = setTimeout(function () {
                  b.off(a.support.transition.end).remove();
                }, 500);
                b.one(a.support.transition.end, function () {
                  clearTimeout(c), b.remove();
                });
              })()
            : b.remove(),
          this
        );
      },
      fixTitle: function () {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").removeAttr("title");
      },
      hasContent: function () {
        return this.getTitle();
      },
      getPosition: function (b) {
        return a.extend({}, b ? { top: 0, left: 0 } : this.$element.offset(), { width: this.$element[0].offsetWidth, height: this.$element[0].offsetHeight });
      },
      getTitle: function () {
        var a = this.$element,
          b = this.options;
        return a.attr("data-original-title") || ("function" == typeof b.title ? b.title.call(a[0]) : b.title);
      },
      tip: function () {
        return (this.$tip = this.$tip || a(this.options.template));
      },
      validate: function () {
        this.$element[0].parentNode || (this.hide(), (this.$element = null), (this.options = null));
      },
      enable: function () {
        this.enabled = !0;
      },
      disable: function () {
        this.enabled = !1;
      },
      toggleEnabled: function () {
        this.enabled = !this.enabled;
      },
      toggle: function () {
        this[this.tip().hasClass("in") ? "hide" : "show"]();
      },
      destroy: function () {
        this.hide()
          .$element.off("." + this.type)
          .removeData(this.type);
      },
    }),
      (a.fn.tooltip = function (c) {
        return this.each(function () {
          var d = a(this),
            e = d.data("tooltip"),
            f = "object" == typeof c && c;
          e || d.data("tooltip", (e = new b(this, f))), "string" == typeof c && e[c]();
        });
      }),
      (a.fn.tooltip.Constructor = b),
      (a.fn.tooltip.defaults = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover",
        title: "",
        delay: 0,
        html: !0,
      });
  })(window.jQuery);
var Constants = {
    DEFAULT: { HEIGHT: 32, WIDTH: 32, FPS: 12, LAYER_OPACITY: 0.2 },
    MODEL_VERSION: 2,
    MAX_HEIGHT: 1024,
    MAX_WIDTH: 1024,
    MAX_PALETTE_COLORS: 100,
    MAX_WORKER_COLORS: 256,
    PREVIEW_FILM_SIZE: 96,
    ANIMATED_PREVIEW_WIDTH: 200,
    DEFAULT_PEN_COLOR: "#000000",
    TRANSPARENT_COLOR: "rgba(0, 0, 0, 0)",
    SEAMLESS_MODE_OVERLAY_COLOR: "rgba(255, 255, 255, 0)",
    CURRENT_COLORS_PALETTE_ID: "__current-colors",
    SELECTION_TRANSPARENT_COLOR: "rgba(160, 215, 240, 0.6)",
    TOOL_HIGHLIGHT_COLOR_LIGHT: "rgba(255, 255, 255, 0.2)",
    TOOL_HIGHLIGHT_COLOR_DARK: "rgba(0, 0, 0, 0.2)",
    ZOOMED_OUT_BACKGROUND_COLOR: "#A0A0A0",
    LEFT_BUTTON: 0,
    MIDDLE_BUTTON: 1,
    RIGHT_BUTTON: 2,
    MOUSEMOVE_THROTTLING: 10,
    ABSTRACT_FUNCTION: function () {
      throw "abstract method should be implemented";
    },
    EMPTY_FUNCTION: function () {},
    DRAWING_TEST_FOLDER: "drawing",
    APPENGINE_SAVE_LIMIT: 1048576,
    APPENGINE_SAVE_URL: "save",
    IMAGE_SERVICE_UPLOAD_URL: "http://piskel-imgstore-b.appspot.com/__/upload",
    IMAGE_SERVICE_GET_URL: "http://piskel-imgstore-b.appspot.com/img/",
  },
  Events = {
    TOOL_SELECTED: "TOOL_SELECTED",
    SELECT_TOOL: "SELECT_TOOL",
    TOOL_RELEASED: "TOOL_RELEASED",
    TOOL_PRESSED: "TOOL_PRESSED",
    SELECT_PRIMARY_COLOR: "SELECT_PRIMARY_COLOR",
    SELECT_SECONDARY_COLOR: "SELECT_SECONDARY_COLOR",
    PRIMARY_COLOR_SELECTED: "PRIMARY_COLOR_SELECTED",
    SECONDARY_COLOR_SELECTED: "SECONDARY_COLOR_SELECTED",
    CURSOR_MOVED: "CURSOR_MOVED",
    DRAG_START: "DRAG_START",
    DRAG_END: "DRAG_END",
    DIALOG_SHOW: "DIALOG_SHOW",
    DIALOG_HIDE: "DIALOG_HIDE",
    PALETTE_LIST_UPDATED: "PALETTE_LIST_UPDATED",
    USER_SETTINGS_CHANGED: "USER_SETTINGS_CHANGED",
    SHORTCUTS_CHANGED: "SHORTCUTS_CHANGED",
    CLOSE_SETTINGS_DRAWER: "CLOSE_SETTINGS_DRAWER",
    PISKEL_RESET: "PISKEL_RESET",
    PISKEL_SAVE_STATE: "PISKEL_SAVE_STATE",
    PISKEL_DESCRIPTOR_UPDATED: "PISKEL_DESCRIPTOR_UPDATED",
    PISKEL_SAVED_STATUS_UPDATE: "PISKEL_SAVED_STATUS_UPDATE",
    HISTORY_STATE_SAVED: "HISTORY_STATE_SAVED",
    HISTORY_STATE_LOADED: "HISTORY_STATE_LOADED",
    PEN_SIZE_CHANGED: "PEN_SIZE_CHANGED",
    PISKEL_SAVED: "PISKEL_SAVED",
    BEFORE_SAVING_PISKEL: "BEFORE_SAVING_PISKEL",
    AFTER_SAVING_PISKEL: "AFTER_SAVING_PISKEL",
    FRAME_SIZE_CHANGED: "FRAME_SIZE_CHANGED",
    FPS_CHANGED: "FPS_CHANGED",
    SELECTION_CREATED: "SELECTION_CREATED",
    SELECTION_MOVE_REQUEST: "SELECTION_MOVE_REQUEST",
    SELECTION_DISMISSED: "SELECTION_DISMISSED",
    SELECTION_COPY: "SELECTION_COPY",
    SELECTION_CUT: "SELECTION_CUT",
    SELECTION_PASTE: "SELECTION_PASTE",
    SHOW_NOTIFICATION: "SHOW_NOTIFICATION",
    HIDE_NOTIFICATION: "HIDE_NOTIFICATION",
    SHOW_PROGRESS: "SHOW_PROGRESS",
    UPDATE_PROGRESS: "UPDATE_PROGRESS",
    HIDE_PROGRESS: "HIDE_PROGRESS",
    ZOOM_CHANGED: "ZOOM_CHANGED",
    EXPORT_SCALE_CHANGED: "EXPORT_SCALE_CHANGED",
    CURRENT_COLORS_UPDATED: "CURRENT_COLORS_UPDATED",
    PERFORMANCE_REPORT_CHANGED: "PERFORMANCE_REPORT_CHANGED",
    PISKEL_FILE_IMPORT_FAILED: "PISKEL_FILE_IMPORT_FAILED",
    MOUSE_EVENT: "MOUSE_EVENT",
    KEYBOARD_EVENT: "KEYBOARD_EVENT",
    TRANSFORMATION_EVENT: "TRANSFORMATION_EVENT",
    TEST_RECORD_END: "TEST_RECORD_END",
    TEST_CASE_END: "TEST_CASE_END",
    TEST_SUITE_END: "TEST_SUITE_END",
  };
(jQuery.namespace = function () {
  for (var a = arguments, b = null, c = 0; c < a.length; c++) {
    var d = a[c].split(".");
    b = window;
    for (var e = 0; e < d.length; e++) (b[d[e]] = b[d[e]] || {}), (b = b[d[e]]);
  }
  return b;
}),
  Function.prototype.bind ||
    (Function.prototype.bind = function (a) {
      if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
      var b = Array.prototype.slice.call(arguments, 1),
        c = this,
        d = function () {},
        e = function () {
          var e = b.concat(Array.prototype.slice.call(arguments));
          return c.apply(this instanceof d && a ? this : a, e);
        };
      return (d.prototype = this.prototype), (e.prototype = new d()), e;
    }),
  Uint32Array.prototype.fill ||
    (Uint32Array.prototype.fill = function (a, b, c) {
      (b = void 0 === b ? 0 : b), (c = void 0 === c ? this.length : c), b < 0 && (b = this.length + b), c < 0 && (c = this.length + c);
      for (var d = b; d < c; d++) this[d] = a;
    }),
  (function () {
    var a = $.namespace("pskl.utils");
    (a.rgbToHex = function (a, b, c) {
      return "#" + pskl.utils.componentToHex(a) + pskl.utils.componentToHex(b) + pskl.utils.componentToHex(c);
    }),
      (a.componentToHex = function (a) {
        var b = a.toString(16);
        return 1 == b.length ? "0" + b : b;
      });
    var b = {};
    (a.intToHex = function (c) {
      if (b[c]) return b[c];
      var d = a.rgbToHex(255 & c, (c >> 8) & 255, (c >> 16) & 255);
      return (b[c] = d), d;
    }),
      (a.normalize = function (a, b) {
        return void 0 === a || null === a ? b : a;
      }),
      (a.inherit = function (a, b) {
        (a.prototype = Object.create(b.prototype)), (a.prototype.constructor = a), (a.prototype.superclass = b.prototype);
      }),
      (a.wrap = function (a, b) {
        for (var c in b) "function" == typeof b[c] && void 0 === a[c] && (a[c] = b[c].bind(b));
      }),
      (a.hashCode = function (a) {
        var b = 0;
        if (0 === a.length) return b;
        for (var c, d = 0, e = a.length; d < e; d++) (c = a.charCodeAt(d)), (b = 31 * b + c), (b |= 0);
        return b;
      }),
      (a.copy = function (a) {
        return JSON.parse(JSON.stringify(a));
      });
    var c = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;" };
    a.escapeHtml = function (a) {
      return String(a).replace(/[&<>"'\/]/g, function (a) {
        return c[a];
      });
    };
    var d = {},
      e = {};
    (a.colorToInt = function (a) {
      if ("number" == typeof a) return a;
      if (void 0 !== d[a]) return d[a];
      var b = window.tinycolor(a);
      if (b && b.ok) {
        var c = b.toRgb(),
          f = Math.round(255 * c.a),
          g = ((f << 24) >>> 0) + (c.b << 16) + (c.g << 8) + c.r;
        return 0 === f && (g = 0), (d[a] = g), (e[g] = a), g;
      }
      var h = document.createElement("div");
      return (h.style.color = a), document.body.appendChild(h), (a = window.getComputedStyle(h).color), document.body.removeChild(h), pskl.utils.colorToInt(a);
    }),
      (a.intToColor = function (a) {
        if ("string" == typeof a) return a;
        if (void 0 !== e[a]) return e[a];
        var b = 255 & a,
          c = (a >> 8) & 255,
          f = (a >> 16) & 255,
          g = (((a >> 24) >>> 0) & 255) / 255,
          h = "rgba(" + b + "," + c + "," + f + "," + g + ")";
        return (d[h] = a), (e[a] = h), h;
      });
    var f = {};
    a.unescapeHtml = function (a) {
      return (
        Object.keys(c).forEach(function (b) {
          (f[b] = f[b] || new RegExp(c[b], "g")), (a = a.replace(f[b], b));
        }),
        a
      );
    };
  })(),
  (function () {
    var a = $.namespace("pskl.utils"),
      b = navigator.userAgent;
    a.UserAgent = {
      isIE: /MSIE/i.test(b),
      isIE11: /trident/i.test(b),
      isEdge: /edge\//i.test(b),
      isFirefox: /Firefox/i.test(b),
      isMac: /Mac/.test(b),
      isOpera: /OPR\//.test(b),
      hasChrome: /Chrome/i.test(b),
      hasSafari: /Safari\//.test(b),
    };
    (a.UserAgent.isChrome = a.UserAgent.hasChrome && !a.UserAgent.isOpera && !a.UserAgent.isEdge),
      (a.UserAgent.isSafari = a.UserAgent.hasSafari && !a.UserAgent.isOpera && !a.UserAgent.isEdge),
      (a.UserAgent.supportedUserAgents = ["isIE11", "isEdge", "isChrome", "isFirefox"]),
      (a.UserAgent.version = (function () {
        return pskl.utils.UserAgent.isIE
          ? parseInt(/MSIE\s?(\d+)/i.exec(b)[1], 10)
          : pskl.utils.UserAgent.isChrome
          ? parseInt(/Chrome\/(\d+)/i.exec(b)[1], 10)
          : pskl.utils.UserAgent.isFirefox
          ? parseInt(/Firefox\/(\d+)/i.exec(b)[1], 10)
          : void 0;
      })()),
      (a.UserAgent.isUnsupported = function () {
        return a.UserAgent.supportedUserAgents.every(function (b) {
          return !a.UserAgent[b];
        });
      }),
      (a.UserAgent.getDisplayName = function () {
        return a.UserAgent.isIE ? "Internet Explorer" : a.UserAgent.isChrome ? "Chrome" : a.UserAgent.isFirefox ? "Firefox" : a.UserAgent.isSafari ? "Safari" : a.UserAgent.isOpera ? "Opera" : b;
      });
  })(),
  (function () {
    $.namespace("pskl.utils").Array = {
      find: function (a, b) {
        var c = null;
        a = Array.isArray(a) ? a : [];
        var d = a.filter(b);
        return d.length && (c = d[0]), c;
      },
      chunk: function (a, b) {
        var c = [];
        (b = Math.min(b, a.length)), (b = Math.max(1, b));
        for (var d = Math.round(a.length / b), e = 0; e < b; e++) {
          var f = e == b - 1,
            g = f ? a.length : (e + 1) * d;
          c.push(a.slice(e * d, g));
        }
        return c;
      },
    };
  })(),
  (function () {
    var a,
      b = $.namespace("pskl.utils");
    Uint8Array &&
      (a = new Uint8Array([
        62,
        -1,
        -1,
        -1,
        63,
        52,
        53,
        54,
        55,
        56,
        57,
        58,
        59,
        60,
        61,
        -1,
        -1,
        -1,
        0,
        -1,
        -1,
        -1,
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        50,
        51,
      ])),
      (b.Base64 = {
        toText: function (a) {
          return window.atob(a.replace(/data\:.*?\;base64\,/, ""));
        },
        decode: function (b) {
          for (var c = 0, d = [0, 0], e = 0, f = 0, g = b.length, h = 0, i = new Uint8Array(((g / 4) * 3) | 0); g--; ) {
            var j = b.charCodeAt(h++),
              k = a[j - 43];
            255 !== k && void 0 !== k && ((d[1] = d[0]), (d[0] = j), (f = (f << 6) | k), 4 === ++e && ((i[c++] = f >>> 16), 61 !== d[1] && (i[c++] = f >>> 8), 61 !== d[0] && (i[c++] = f), (e = 0)));
          }
          return i.buffer;
        },
      });
  })(),
  (function () {
    var a = /\s*;\s*base64\s*(?:;|$)/i;
    $.namespace("pskl.utils").BlobUtils = {
      dataToBlob: function (b, c, d) {
        var e,
          f = b.indexOf(","),
          g = b.substring(f + 1),
          h = a.test(b.substring(0, f));
        if (Blob.fake) (e = new Blob()), (e.encoding = h ? "base64" : "URI"), (e.data = g), (e.size = g.length);
        else if (Uint8Array) {
          var i = h ? pskl.utils.Base64.decode(g) : decodeURIComponent(g);
          e = new Blob([i], { type: c });
        }
        d(e);
      },
      canvasToBlob: function (a, b, c) {
        if (((c = c || "image/png"), a.mozGetAsFile)) b(a.mozGetAsFile("canvas", c));
        else {
          var d = Array.prototype.slice.call(arguments, 2),
            e = a.toDataURL.apply(a, d);
          pskl.utils.BlobUtils.dataToBlob(e, c, b);
        }
      },
      stringToBlob: function (a, b, c) {
        (c = c || "text/plain"), pskl.utils.BlobUtils.dataToBlob("data:" + c + "," + a, c, b);
      },
    };
  })(),
  (function () {
    $.namespace("pskl.utils").CanvasUtils = {
      createCanvas: function (a, b, c) {
        var d = document.createElement("canvas");
        if ((d.setAttribute("width", a), d.setAttribute("height", b), "string" == typeof c && (c = [c]), Array.isArray(c))) for (var e = 0; e < c.length; e++) d.classList.add(c[e]);
        return d;
      },
      createFromImageData: function (a) {
        var b = pskl.utils.CanvasUtils.createCanvas(a.width, a.height);
        return b.getContext("2d").putImageData(a, 0, 0), b;
      },
      createFromImage: function (a) {
        var b = pskl.utils.CanvasUtils.createCanvas(a.width, a.height);
        return b.getContext("2d").drawImage(a, 0, 0), b;
      },
      createFramesFromImage: function (a, b, c, d, e, f, g) {
        for (var h = [], i = b, j = c, k = pskl.utils.CanvasUtils.createCanvas(d, e).toDataURL(); i + d <= a.width && j + e <= a.height; ) {
          var l = pskl.utils.CanvasUtils.createCanvas(d, e);
          l.getContext("2d").drawImage(a, i, j, d, e, 0, 0, d, e), (g && l.toDataURL() === k) || h.push(l), f ? (i += d) + d > a.width && ((i = b), (j += e)) : (j += e) + e > a.height && ((i += d), (j = c));
        }
        return h;
      },
      disableImageSmoothing: function (a) {
        pskl.utils.CanvasUtils.setImageSmoothing(a, !1);
      },
      enableImageSmoothing: function (a) {
        pskl.utils.CanvasUtils.setImageSmoothing(a, !0);
      },
      setImageSmoothing: function (a, b) {
        var c = a.getContext("2d");
        (c.imageSmoothingEnabled = b), (c.mozImageSmoothingEnabled = b), (c.oImageSmoothingEnabled = b), (c.webkitImageSmoothingEnabled = b), (c.msImageSmoothingEnabled = b);
      },
      clear: function (a) {
        a && a.getContext("2d").clearRect(0, 0, a.width, a.height);
      },
      clone: function (a) {
        var b = pskl.utils.CanvasUtils.createCanvas(a.width, a.height);
        return b.getContext("2d").drawImage(a, 0, 0), b;
      },
      getImageDataFromCanvas: function (a) {
        return a.getContext("2d").getImageData(0, 0, a.width, a.height).data;
      },
      getBase64FromCanvas: function (a, b) {
        b = b || "png";
        var c = a.toDataURL("image/" + b);
        return c.substr(c.indexOf(",") + 1);
      },
    };
  })(),
  (function () {
    $.namespace("pskl.utils").ColorUtils = {
      getUnusedColor: function (a) {
        a = a || [];
        var b = {};
        a.forEach(function (a) {
          b[a.toUpperCase()] = !0;
        });
        for (var c = { r: 255, g: 255, b: 0 }, d = null; ; ) {
          var e = window.tinycolor(c).toHexString().toUpperCase();
          if (!b[e]) {
            d = e;
            break;
          }
          var f = (c.r && "r") || (c.g && "g") || (c.b && "b");
          if (!f) break;
          c[f] = c[f] - 1;
        }
        return d;
      },
    };
  })(),
  (function () {
    var a = $.namespace("pskl.utils"),
      b = function (a) {
        return a < 10 ? "0" + a : "" + a;
      };
    a.DateUtils = {
      format: function (a, c) {
        return (a = new Date(a)), pskl.utils.Template.replace(c, { Y: a.getFullYear(), M: b(a.getMonth() + 1), D: b(a.getDate()), H: b(a.getHours()), m: b(a.getMinutes()), s: b(a.getSeconds()) });
      },
    };
  })(),
  (function () {
    var a = $.namespace("pskl.utils");
    a.Dom = {
      isParent: function (a, b, c) {
        if (a && b)
          for (c && (a = a.parentNode); a; ) {
            if (a === b) return !0;
            a = a.parentNode;
          }
        return !1;
      },
      getParentWithData: function (a, b) {
        for (; a; ) {
          if (a.dataset && void 0 !== a.dataset[b]) return a;
          a = a.parentNode;
        }
        return null;
      },
      getData: function (b, c) {
        var d = a.Dom.getParentWithData(b, c);
        if (null !== d) return d.dataset[c];
      },
      removeClass: function (a, b) {
        b = b || document;
        for (var c = b.querySelectorAll("." + a), d = 0; d < c.length; d++) c[d].classList.remove(a);
      },
    };
  })(),
  (function () {
    var a = $.namespace("pskl.utils");
    (a.Event = {}),
      (a.Event.addEventListener = function (a, b, c, d, e) {
        "string" == typeof a && (a = document.querySelector(a));
        var f = { el: a, type: b, callback: c, handler: e ? c.bind(d, e) : c.bind(d) };
        (d.__pskl_listeners = d.__pskl_listeners || []), d.__pskl_listeners.push(f), a.addEventListener(b, f.handler);
      }),
      (a.Event.removeEventListener = function (a, b, c, d) {
        if (d && d.__pskl_listeners)
          for (var e = d.__pskl_listeners, f = 0; f < e.length; f++) {
            var g = e[f];
            if (g.callback === c && g.el === a && g.type === b) {
              a.removeEventListener(b, e[f].handler), e.splice(f, 1);
              break;
            }
          }
      }),
      (a.Event.removeAllEventListeners = function (a) {
        if (a && a.__pskl_listeners) {
          for (var b = a.__pskl_listeners, c = 0; c < b.length; c++) {
            var d = b[c];
            d.el.removeEventListener(d.type, d.handler);
          }
          a.__pskl_listeners = [];
        }
      });
  })(),
  (function () {
    $.namespace("pskl.utils").Environment = {
      detectNodeWebkit: function () {
        var a = void 0 !== window.process && void 0 !== window.require,
          b = !1;
        if (a)
          try {
            b = void 0 !== window.require("nw.gui");
          } catch (a) {
            b = !1;
          }
        return b;
      },
      isIntegrationTest: function () {
        return -1 !== window.location.href.indexOf("integration-test");
      },
    };
  })(),
  (function () {
    $.namespace("pskl.utils").FunctionUtils = {
      memo: function (a, b, c) {
        return function () {
          var d = Array.prototype.join.call(arguments, "-");
          return b[d] || (b[d] = a.apply(c, arguments)), b[d];
        };
      },
      throttle: function (a, b) {
        var c, d;
        return function () {
          var e = Date.now();
          c && e < c + b
            ? (clearTimeout(d),
              (d = setTimeout(function () {
                (c = e), a();
              }, b)))
            : ((c = e), a());
        };
      },
    };
  })(),
  (function () {
    $.namespace("pskl.utils").Math = {
      minmax: function (a, b, c) {
        return Math.max(Math.min(a, c), b);
      },
      distance: function (a, b, c, d) {
        var e = Math.abs(b - a),
          f = Math.abs(d - c);
        return Math.sqrt(Math.pow(e, 2) + Math.pow(f, 2));
      },
    };
  })(),
  (function () {
    var a = $.namespace("pskl.utils"),
      b = function (a) {
        a.stopPropagation();
      };
    a.FileUtils = {
      readFile: function (a, b) {
        var c = new FileReader();
        c.addEventListener("loadend", function () {
          b(c.result);
        }),
          c.readAsDataURL(a);
      },
      readFileAsArrayBuffer: function (a, b) {
        var c = new FileReader();
        c.addEventListener("loadend", function () {
          b(c.result);
        }),
          c.readAsArrayBuffer(a);
      },
      readImageFile: function (b, c) {
        a.FileUtils.readFile(b, function (a) {
          var b = new Image();
          (b.onload = c.bind(null, b)), (b.src = a);
        });
      },
      downloadAsFile: function (a, c) {
        var d = window.saveAs || (navigator.msSaveBlob && navigator.msSaveBlob.bind(navigator));
        if (d) d(a, c);
        else {
          var e = document.createElement("a");
          (a = window.URL.createObjectURL(a)),
            e.setAttribute("href", a),
            e.setAttribute("download", c),
            document.body.appendChild(e),
            e.addEventListener("click", b),
            e.click(),
            e.removeEventListener("click", b),
            document.body.removeChild(e);
        }
      },
    };
  })(),
  (function () {
    var a = function (a, b) {
      var c = document.createElement("INPUT");
      return c.setAttribute("type", "file"), c.setAttribute("nwworkingdir", ""), a && c.setAttribute("nwsaveas", a), b && c.setAttribute("accept", b), c;
    };
    $.namespace("pskl.utils").FileUtilsDesktop = {
      chooseFilenameDialog: function (b, c) {
        var d = Q.defer(),
          e = a(b, c),
          f = function (a) {
            e.removeEventListener("change", f), document.removeEventListener("click", f), d.resolve(e.value);
          };
        return (
          window.setTimeout(function () {
            e.click(), e.addEventListener("change", f), document.addEventListener("mousedown", f);
          }, 50),
          d.promise
        );
      },
      saveToFile: function (a, b) {
        var c = Q.defer();
        return (
          window.require("fs").writeFile(b, a, function (a) {
            a ? c.reject("FileUtilsDesktop::savetoFile() - error saving file: " + b + " Error: " + a) : c.resolve();
          }),
          c.promise
        );
      },
      readFile: function (a) {
        var b = Q.defer();
        return (
          window.require("fs").readFile(a, "utf8", function (c, d) {
            c ? b.reject("FileUtilsDesktop::readFile() - error reading file: " + a + " Error: " + c) : b.resolve(d);
          }),
          b.promise
        );
      },
    };
  })(),
  (function () {
    var a = $.namespace("pskl.utils"),
      b = {},
      c = {};
    a.FrameUtils = {
      toImage: function (a, b, c) {
        (b = b || 1), (c = isNaN(c) ? 1 : c);
        var d = new pskl.rendering.CanvasRenderer(a, b);
        return d.drawTransparentAs(Constants.TRANSPARENT_COLOR), d.setOpacity(c), d.render();
      },
      drawToCanvas: function (a, d, e, f) {
        var g = d.getContext("2d");
        if (((f = isNaN(f) ? 1 : f), (g.globalAlpha = f), (e = e || Constants.TRANSPARENT_COLOR), a instanceof pskl.model.frame.RenderedFrame)) g.fillRect(e, 0, 0, a.getWidth(), a.getHeight()), g.drawImage(a.getRenderedFrame(), 0, 0);
        else {
          var h = a.getWidth(),
            i = a.getHeight(),
            j = a.pixels,
            k = pskl.utils.colorToInt(Constants.TRANSPARENT_COLOR),
            l = pskl.utils.colorToInt(e);
          if (l != k) {
            j = a.getPixels();
            for (var m = 0, n = j.length; m < n; m++) j[m] == k && (j[m] = l);
          }
          var o,
            p = h + "-" + i;
          o = c[p] ? c[p] : (c[p] = g.createImageData(h, i));
          var q = new Uint8ClampedArray(j.buffer);
          o.data.set(q);
          var r,
            s = h + "-" + i;
          b[s] ? (r = b[s]) : ((r = b[s] = pskl.utils.CanvasUtils.createCanvas(h, i)), (r.context = r.getContext("2d"))), r.context.putImageData(o, 0, 0), g.drawImage(r, 0, 0, h, i), (g.globalAlpha = 1);
        }
      },
      renderLine_: function (a, b, c, d, e) {
        a !== Constants.TRANSPARENT_COLOR && null !== a && ((e.fillStyle = a), e.fillRect(b, c, 1, d));
      },
      merge: function (a) {
        var b = null;
        if (a.length) {
          b = a[0].clone();
          for (var c = 1; c < a.length; c++) pskl.utils.FrameUtils.mergeFrames_(b, a[c]);
        }
        return b;
      },
      mergeFrames_: function (a, b) {
        for (var c = pskl.utils.colorToInt(Constants.TRANSPARENT_COLOR), d = 0, e = a.getWidth() * a.getHeight(); d < e; ++d) b.pixels[d] != c && a.pixels[d] != b.pixels[d] && (a.pixels[d] = b.pixels[d]);
      },
      addImageToFrame: function (a, b, c, d) {
        var e = pskl.utils.FrameUtils.createFromImage(b);
        (c -= Math.floor(e.width / 2)),
          (d -= Math.floor(e.height / 2)),
          (c = Math.max(0, c)),
          (d = Math.max(0, d)),
          e.width <= a.width && (c = Math.min(c, a.width - e.width)),
          e.height <= a.height && (d = Math.min(d, a.height - e.height)),
          e.forEachPixel(function (b, e, f) {
            b != pskl.utils.colorToInt(Constants.TRANSPARENT_COLOR) && a.setPixel(c + e, d + f, b);
          });
      },
      resize: function (a, b, c, d) {
        var e = pskl.utils.FrameUtils.toImage(a),
          f = pskl.utils.ImageResizer.resize(e, b, c, d);
        return pskl.utils.FrameUtils.createFromImage(f);
      },
      removeTransparency: function (a) {
        a.forEachPixel(function (b, c, d) {
          var e = ((b >> 24) >>> 0) & 255;
          if (e && 255 !== e) {
            var f = 255 * Math.round(e / 255),
              g = b - ((e << 24) >>> 0) + ((f << 24) >>> 0);
            a.setPixel(c, d, g);
          }
        });
      },
      createFromCanvas: function (a, b, c, d, e, f) {
        var g = a.getContext("2d").getImageData(b, c, d, e).data;
        return pskl.utils.FrameUtils.createFromImageData_(g, d, e, f);
      },
      createFromImageSrc: function (b, c, d) {
        var e = new Image();
        e.addEventListener("load", function b() {
          e.removeEventListener("load", b);
          var f = a.FrameUtils.createFromImage(e, c);
          d(f);
        }),
          (e.src = b);
      },
      createFromImage: function (a, b) {
        var c = a.width,
          d = a.height,
          e = pskl.utils.CanvasUtils.createCanvas(c, d),
          f = e.getContext("2d");
        f.drawImage(a, 0, 0, c, d, 0, 0, c, d);
        var g = f.getImageData(0, 0, c, d).data;
        return pskl.utils.FrameUtils.createFromImageData_(g, c, d, b);
      },
      createFromImageData_: function (a, b, c, d) {
        var e = new pskl.model.Frame(b, c);
        return (e.pixels = new Uint32Array(a.buffer)), d || pskl.utils.FrameUtils.removeTransparency(e), e;
      },
      createFramesFromSpritesheet: function (a, b) {
        for (var c = [], d = 0; d < b; d++) c.push([d]);
        return pskl.utils.FrameUtils.createFramesFromChunk(a, c).map(function (a) {
          return a.frame;
        });
      },
      createFramesFromChunk: function (a, b) {
        for (var c = a.width, d = a.height, e = c / b.length, f = d / b[0].length, g = pskl.utils.CanvasUtils.createCanvas(e, f), h = g.getContext("2d"), i = [], j = 0; j < b.length; j++)
          for (var k = b[j], l = 0; l < k.length; l++) {
            h.clearRect(0, 0, e, f), h.drawImage(a, e * j, f * l, e, f, 0, 0, e, f);
            var m = pskl.utils.FrameUtils.createFromCanvas(g, 0, 0, e, f);
            i.push({ index: b[j][l], frame: m });
          }
        return i;
      },
      toFrameGrid: function (a) {
        for (var b = [], c = a[0].length, d = a.length, e = 0; e < c; e++) {
          b[e] = [];
          for (var f = 0; f < d; f++) b[e][f] = a[f][e];
        }
        return b;
      },
    };
  })(),
  (function () {
    var a = $.namespace("pskl.utils");
    a.ImageResizer = {
      scale: function (b, c, d) {
        return a.ImageResizer.resize(b, b.width * c, b.height * c, d);
      },
      resize: function (a, b, c, d) {
        var e = pskl.utils.CanvasUtils.createCanvas(b, c),
          f = e.getContext("2d");
        return f.save(), d || pskl.utils.CanvasUtils.disableImageSmoothing(e), f.translate(e.width / 2, e.height / 2), f.scale(b / a.width, c / a.height), f.drawImage(a, -a.width / 2, -a.height / 2), f.restore(), e;
      },
    };
  })(),
  (function () {
    var a = $.namespace("pskl.utils");
    a.LayerUtils = {
      mergeLayers: function (a, b) {
        var c = a.getFrames(),
          d = b.getFrames(),
          e = [];
        return (
          c.forEach(function (a, b) {
            var c = d[b];
            e.push(pskl.utils.FrameUtils.merge([c, a]));
          }),
          pskl.model.Layer.fromFrames(a.getName(), e)
        );
      },
      getFrameHashAt: function (a, b) {
        var c = [];
        return (
          a.forEach(function (a) {
            var d = a.getFrameAt(b);
            return c.push(d.getHash()), c.push(a.getOpacity()), d;
          }),
          c.join("-")
        );
      },
      mergeFrameAt: function (a, b) {
        return a.some(function (a) {
          return a.isTransparent();
        })
          ? pskl.utils.LayerUtils.mergeTransparentFrameAt_(a, b)
          : pskl.utils.LayerUtils.mergeOpaqueFrameAt_(a, b);
      },
      mergeTransparentFrameAt_: function (a, b) {
        var c = pskl.utils.LayerUtils.getFrameHashAt(a, b),
          d = a[0].frames[0].getWidth(),
          e = a[0].frames[0].getHeight(),
          f = function () {
            return pskl.utils.LayerUtils.flattenFrameAt(a, b, !0);
          };
        return new pskl.model.frame.RenderedFrame(f, d, e, c);
      },
      mergeOpaqueFrameAt_: function (a, b) {
        var c = pskl.utils.LayerUtils.getFrameHashAt(a, b),
          d = a.map(function (a) {
            return a.getFrameAt(b);
          }),
          e = pskl.utils.FrameUtils.merge(d);
        return (e.id = c), (e.version = 0), e;
      },
      renderFrameAt: function (a, b, c) {
        var d = c ? a.getOpacity() : 1,
          e = a.getFrameAt(b);
        return pskl.utils.FrameUtils.toImage(e, 1, d);
      },
      flattenFrameAt: function (b, c, d) {
        var e = b[0].getFrameAt(c).getWidth(),
          f = b[0].getFrameAt(c).getHeight(),
          g = pskl.utils.CanvasUtils.createCanvas(e, f),
          h = g.getContext("2d");
        return (
          b.forEach(function (b) {
            var g = a.LayerUtils.renderFrameAt(b, c, d);
            h.drawImage(g, 0, 0, e, f, 0, 0, e, f);
          }),
          g
        );
      },
    };
  })(),
  (function () {
    var a = $.namespace("pskl.utils");
    a.MergeUtils = {
      merge: function (b, c, d) {
        (c.getWidth() > b.getWidth() || c.getHeight() > b.getHeight()) && "expand" === d.resize
          ? (b = pskl.utils.ResizeUtils.resizePiskel(b, { width: Math.max(b.getWidth(), c.getWidth()), height: Math.max(b.getHeight(), c.getHeight()), origin: d.origin, resizeContent: !1 }))
          : (c = pskl.utils.ResizeUtils.resizePiskel(c, { width: b.getWidth(), height: b.getHeight(), origin: d.origin, resizeContent: !1 }));
        var e = d.insertIndex;
        "insert" === d.insertMode && (e -= 1);
        for (var f = c.getFrameCount(), g = 0; g < f; g++) {
          var h = g + e;
          ("add" === d.insertMode || h >= b.getFrameCount()) && a.MergeUtils.addFrameToLayers_(b, h);
        }
        return (
          c.getLayers().forEach(function (c) {
            for (var d = c.getName() + " (imported)", f = new pskl.model.Layer(d), g = 0; g < b.getFrameCount(); g++) {
              var h = g - e,
                i = c.getFrameAt(h);
              i || (i = a.MergeUtils.createEmptyFrame_(b)), f.addFrame(i);
            }
            b.addLayer(f);
          }),
          b
        );
      },
      createEmptyFrame_: function (a) {
        return new pskl.model.Frame(a.getWidth(), a.getHeight());
      },
      addFrameToLayers_: function (b, c) {
        b.getLayers().forEach(function (d) {
          d.addFrameAt(a.MergeUtils.createEmptyFrame_(b), c);
        });
      },
    };
  })(),
  (function () {
    $.namespace("pskl").PixelUtils = {
      getRectanglePixels: function (a, b, c, d) {
        for (var e = this.getOrderedRectangleCoordinates(a, b, c, d), f = [], g = e.x0; g <= e.x1; g++) for (var h = e.y0; h <= e.y1; h++) f.push({ col: g, row: h });
        return f;
      },
      getOrderedRectangleCoordinates: function (a, b, c, d) {
        return { x0: Math.min(a, c), y0: Math.min(b, d), x1: Math.max(a, c), y1: Math.max(b, d) };
      },
      getSimilarConnectedPixelsFromFrame: function (a, b, c) {
        var d = a.getPixel(b, c);
        if (null === d) return [];
        var e = { col: b, row: c },
          f = {};
        return pskl.PixelUtils.visitConnectedPixels(e, a, function (b) {
          var c = b.col + "-" + b.row;
          return !f[c] && ((f[c] = !0), a.getPixel(b.col, b.row) == d);
        });
      },
      resizePixel: function (a, b, c) {
        for (var d = [], e = 0; e < c; e++) for (var f = 0; f < c; f++) d.push([a - Math.floor(c / 2) + f, b - Math.floor(c / 2) + e]);
        return d;
      },
      resizePixels: function (a, b) {
        return a.reduce(function (a, c) {
          return a.concat(pskl.PixelUtils.resizePixel(c.col, c.row, b));
        }, []);
      },
      paintSimilarConnectedPixelsFromFrame: function (a, b, c, d) {
        "string" == typeof d && (d = pskl.utils.colorToInt(d));
        var e;
        try {
          e = a.getPixel(b, c);
        } catch (a) {}
        if (null !== e && e != d) {
          var f = { col: b, row: c };
          return pskl.PixelUtils.visitConnectedPixels(f, a, function (b) {
            return a.getPixel(b.col, b.row) == e && (a.setPixel(b.col, b.row, d), !0);
          });
        }
      },
      visitConnectedPixels: function (a, b, c) {
        var d = (a.col, a.row, []),
          e = [],
          f = [-1, 0, 1, 0],
          g = [0, 1, 0, -1];
        d.push(a), e.push(a), c(a);
        for (var h = 0, i = b.getWidth() * b.getHeight(); d.length > 0; ) {
          h++;
          for (var j = d.pop(), k = 0; k < 4; k++) {
            var l = j.col + g[k],
              m = j.row + f[k];
            try {
              var n = { col: l, row: m };
              c(n) && (d.push(n), e.push(n));
            } catch (a) {}
          }
          if (h > 10 * i) {
            console.log("loop breaker called");
            break;
          }
        }
        return e;
      },
      calculateZoomForContainer: function (a, b, c) {
        return this.calculateZoom(a.height(), a.width(), b, c);
      },
      getLinePixels: function (a, b, c, d) {
        var e = [];
        (b = pskl.utils.normalize(b, 0)), (d = pskl.utils.normalize(d, 0));
        for (var f = Math.abs(b - a), g = Math.abs(d - c), h = a < b ? 1 : -1, i = c < d ? 1 : -1, j = f - g; e.push({ col: a, row: c }), a != b || c != d; ) {
          var k = 2 * j;
          k > -g && ((j -= g), (a += h)), k < f && ((j += f), (c += i));
        }
        return e;
      },
      getUniformLinePixels: function (a, b, c, d) {
        var e = [];
        (b = pskl.utils.normalize(b, 0)), (d = pskl.utils.normalize(d, 0));
        var f = Math.abs(b - a) + 1,
          g = Math.abs(d - c) + 1,
          h = a < b ? 1 : -1,
          i = c < d ? 1 : -1,
          j = Math.max(f, g) / Math.min(f, g),
          k = Math.round(j) || 0;
        k > Math.min(f, g) && (k = 1 / 0);
        for (var l = pskl.utils.Math.distance(a, b, c, d), m = a, n = c, o = 0; o++, e.push({ col: m, row: n }), !(pskl.utils.Math.distance(a, m, c, n) >= l); ) {
          var p = o % k == 0;
          (f >= g || p) && (m += h), (g >= f || p) && (n += i);
        }
        return e;
      },
    };
  })(),
  (function () {
    var a = $.namespace("pskl.utils");
    a.PiskelFileUtils = {
      FAILURE: { EMPTY: "No data found in piskel file", INVALID: "Invalid piskel file, contact us on twitter @piskelapp", DESERIALIZATION: "Piskel data deserialization failed" },
      loadFromFile: function (b, c, d) {
        pskl.utils.FileUtils.readFile(b, function (e) {
          var f = pskl.utils.Base64.toText(e);
          a.PiskelFileUtils.decodePiskelFile(
            f,
            function (a) {
              pskl.utils.Environment.detectNodeWebkit() && (a.savePath = b.path), c(a);
            },
            d
          );
        });
      },
      decodePiskelFile: function (b, c, d) {
        var e;
        if (0 === b.length) return void d(a.PiskelFileUtils.FAILURE.EMPTY);
        try {
          e = JSON.parse(b);
        } catch (b) {
          return void d(a.PiskelFileUtils.FAILURE.INVALID);
        }
        e.piskel;
        pskl.utils.serialization.Deserializer.deserialize(e, c, function () {
          d(a.PiskelFileUtils.FAILURE.DESERIALIZATION);
        });
      },
    };
  })(),
  (function () {
    var a = $.namespace("pskl.utils");
    a.ResizeUtils = {
      resizePiskel: function (b, c) {
        var d = b.getFPS(),
          e = b.getLayers().map(function (b) {
            return a.ResizeUtils.resizeLayer(b, c);
          }),
          f = pskl.model.Piskel.fromLayers(e, d, b.getDescriptor());
        return (f.savePath = b.savePath), f;
      },
      resizeLayer: function (b, c) {
        var d = b.getOpacity(),
          e = b.getFrames().map(function (b) {
            return a.ResizeUtils.resizeFrame(b, c);
          }),
          f = pskl.model.Layer.fromFrames(b.getName(), e);
        return f.setOpacity(d), f;
      },
      resizeFrame: function (b, c) {
        var d = c.width,
          e = c.height,
          f = c.origin;
        if (c.resizeContent) return pskl.utils.FrameUtils.resize(b, d, e, !1);
        var g = new pskl.model.Frame(d, e);
        return (
          b.forEachPixel(function (c, d, e) {
            var h = a.ResizeUtils.translateCoordinates(d, e, b, g, f);
            g.containsPixel(h.x, h.y) && g.setPixel(h.x, h.y, c);
          }),
          g
        );
      },
      translateCoordinates: function (b, c, d, e, f) {
        return { x: a.ResizeUtils.translateX(b, d.width, e.width, f), y: a.ResizeUtils.translateY(c, d.height, e.height, f) };
      },
      translateX: function (a, b, c, d) {
        return -1 != d.indexOf("LEFT") ? a : -1 != d.indexOf("RIGHT") ? a - (b - c) : a - Math.round((b - c) / 2);
      },
      translateY: function (a, b, c, d) {
        return -1 != d.indexOf("TOP") ? a : -1 != d.indexOf("BOTTOM") ? a - (b - c) : a - Math.round((b - c) / 2);
      },
    };
  })(),
  (function () {
    $.namespace("pskl.utils").StringUtils = {
      leftPad: function (a, b, c) {
        return (new Array(b).join(c) + a).slice(-b);
      },
      formatSize: function (a, b) {
        return a + "×" + b;
      },
    };
  })(),
  (function () {
    var a = $.namespace("pskl.utils"),
      b = {};
    a.Template = {
      get: function (a) {
        if (!b[a]) {
          var c = document.getElementById(a);
          c ? (b[a] = c.innerHTML) : console.error("Could not find template for id :", a);
        }
        return b[a];
      },
      getAsHTML: function (b) {
        var c = a.Template.get(b);
        if (c) return a.Template.createFromHTML(c);
      },
      createFromHTML: function (b) {
        var c = a.Template._getDummyEl();
        c.innerHTML = b;
        var d = c.children[0];
        return (c.innerHTML = ""), d;
      },
      replace: function (b, c) {
        for (var d in c)
          if (c.hasOwnProperty(d)) {
            var e = c[d];
            -1 !== d.indexOf(":") && (!0 === e ? (e = d.split(":")[1]) : !1 === e && (e = "")), /^!.*!$/.test(d) || (e = a.Template.sanitize(e)), (b = b.replace(new RegExp("\\{\\{" + d + "\\}\\}", "g"), e));
          }
        return b;
      },
      getAndReplace: function (a, b) {
        var c = "",
          d = pskl.utils.Template.get(a);
        return d && (c = pskl.utils.Template.replace(d, b)), c;
      },
      sanitize: function (b) {
        var c = a.Template._getDummyEl();
        c.textContent = b;
        var d = c.innerHTML;
        return (c.innerHTML = ""), d;
      },
      _getDummyEl: pskl.utils.UserAgent.isIE11
        ? function () {
            return document.createElement("div");
          }
        : function () {
            return a.Template._dummyEl || (a.Template._dummyEl = document.createElement("div")), a.Template._dummyEl;
          },
    };
  })(),
  (function () {
    var a = $.namespace("pskl.utils");
    (a.TooltipFormatter = {}),
      (a.TooltipFormatter.format = function (a, b, c) {
        var d = pskl.utils.Template.get("tooltip-container-template");
        return (b = b ? "(" + b.getDisplayKey() + ")" : ""), pskl.utils.Template.replace(d, { helptext: a, shortcut: b, "!descriptors!": this.formatDescriptors_(c) });
      }),
      (a.TooltipFormatter.formatDescriptors_ = function (a) {
        return (
          (a = a || []),
          a.reduce(
            function (a, b) {
              return (a += this.formatDescriptor_(b));
            }.bind(this),
            ""
          )
        );
      }),
      (a.TooltipFormatter.formatDescriptor_ = function (a) {
        var b;
        return (
          a.key
            ? ((b = pskl.utils.Template.get("tooltip-modifier-descriptor-template")), (a.key = a.key.toUpperCase()), pskl.utils.UserAgent.isMac && ((a.key = a.key.replace("CTRL", "CMD")), (a.key = a.key.replace("ALT", "OPTION"))))
            : (b = pskl.utils.Template.get("tooltip-simple-descriptor-template")),
          pskl.utils.Template.replace(b, a)
        );
      });
  })(),
  (function () {
    $.namespace("pskl").UserSettings = {
      GRID_WIDTH: "GRID_WIDTH",
      MAX_FPS: "MAX_FPS",
      DEFAULT_SIZE: "DEFAULT_SIZE",
      CANVAS_BACKGROUND: "CANVAS_BACKGROUND",
      SELECTED_PALETTE: "SELECTED_PALETTE",
      SEAMLESS_OPACITY: "SEAMLESS_OPACITY",
      SEAMLESS_MODE: "SEAMLESS_MODE",
      PREVIEW_SIZE: "PREVIEW_SIZE",
      ONION_SKIN: "ONION_SKIN",
      LAYER_PREVIEW: "LAYER_PREVIEW",
      LAYER_OPACITY: "LAYER_OPACITY",
      EXPORT_SCALE: "EXPORT_SCALE",
      EXPORT_TAB: "EXPORT_TAB",
      PEN_SIZE: "PEN_SIZE",
      RESIZE_SETTINGS: "RESIZE_SETTINGS",
      COLOR_FORMAT: "COLOR_FORMAT",
      KEY_TO_DEFAULT_VALUE_MAP_: {
        GRID_WIDTH: 0,
        MAX_FPS: 24,
        DEFAULT_SIZE: { width: Constants.DEFAULT.WIDTH, height: Constants.DEFAULT.HEIGHT },
        CANVAS_BACKGROUND: "lowcont-dark-canvas-background",
        SELECTED_PALETTE: Constants.CURRENT_COLORS_PALETTE_ID,
        SEAMLESS_OPACITY: 0.3,
        SEAMLESS_MODE: !1,
        PREVIEW_SIZE: "original",
        ONION_SKIN: !1,
        LAYER_OPACITY: 0.2,
        LAYER_PREVIEW: !0,
        EXPORT_SCALE: 1,
        EXPORT_TAB: "gif",
        PEN_SIZE: 1,
        RESIZE_SETTINGS: { maintainRatio: !0, resizeContent: !1, origin: "TOPLEFT" },
        COLOR_FORMAT: "hex",
      },
      cache_: {},
      get: function (a) {
        if ((this.checkKeyValidity_(a), !(a in this.cache_))) {
          var b = this.readFromLocalStorage_(a);
          this.cache_[a] = void 0 !== b && null !== b ? b : this.readFromDefaults_(a);
        }
        return this.cache_[a];
      },
      set: function (a, b) {
        this.checkKeyValidity_(a), (this.cache_[a] = b), this.writeToLocalStorage_(a, b), $.publish(Events.USER_SETTINGS_CHANGED, [a, b]);
      },
      readFromLocalStorage_: function (a) {
        var b = window.localStorage[a];
        return void 0 !== b && (b = JSON.parse(b)), b;
      },
      writeToLocalStorage_: function (a, b) {
        window.localStorage[a] = JSON.stringify(b);
      },
      readFromDefaults_: function (a) {
        return this.KEY_TO_DEFAULT_VALUE_MAP_[a];
      },
      checkKeyValidity_: function (a) {
        if (0 === a.indexOf(pskl.service.keyboard.Shortcut.USER_SETTINGS_PREFIX)) return !0;
        a in this.KEY_TO_DEFAULT_VALUE_MAP_ || console.error("UserSettings key <" + a + "> not found in supported keys.");
      },
    };
  })(),
  (function () {
    var a = function () {
      return Math.floor(65536 * (1 + Math.random()))
        .toString(16)
        .substring(1);
    };
    $.namespace("pskl.utils").Uuid = {
      generate: function () {
        return "ss-s-s-s-sss".replace(/s/g, function () {
          return a();
        });
      },
    };
  })(),
  (function () {
    var a = $.namespace("pskl.utils"),
      b = {};
    a.WorkerUtils = {
      createWorker: function (c, d) {
        return b[d] || (b[d] = a.WorkerUtils.createWorkerURL(c)), new Worker(b[d]);
      },
      createWorkerURL: function (a) {
        var b = [(a + "").replace(/function\s*\(\)\s*\{/, "").replace(/\}[^}]*$/, "")],
          c = new Blob(b, { type: "application/javascript" });
        return window.URL.createObjectURL(c);
      },
    };
  })(),
  (function () {
    var a = $.namespace("pskl.utils");
    a.Xhr = {
      get: function (b, c, d) {
        a.Xhr.xhr_(b, "GET", c, d).send();
      },
      post: function (b, c, d, e) {
        var f = a.Xhr.xhr_(b, "POST", d, e),
          g = new FormData();
        if ("object" == typeof c) for (var h in c) c.hasOwnProperty(h) && g.append(h, c[h]);
        f.send(g);
      },
      xhr_: function (a, b, c, d) {
        (c = c || function () {}), (d = d || function () {});
        var e = new XMLHttpRequest();
        return (
          e.open(b, a, !0),
          (e.onload = function (a) {
            200 == this.status ? c(this) : this.onerror(this, a);
          }),
          (e.onerror = function (a) {
            d(a, this);
          }),
          e
        );
      },
    };
  })(),
  (function () {
    var a = $.namespace("pskl.utils.serialization"),
      b = function (a) {
        return (
          a.length &&
          a.every(function (a) {
            return a.base64PNG && "data:," !== a.base64PNG;
          })
        );
      },
      c = function (a, b) {
        for (var c = [], d = 0; d < a; d++) c.push([d + b]);
        return c;
      };
    a.Serializer = {
      serialize: function (a) {
        var b = a.getLayers().map(function (a) {
          return pskl.utils.serialization.Serializer.serializeLayer(a);
        });
        return JSON.stringify({
          modelVersion: Constants.MODEL_VERSION,
          piskel: { name: a.getDescriptor().name, description: a.getDescriptor().description, fps: pskl.app.piskelController.getFPS(), height: a.getHeight(), width: a.getWidth(), layers: b },
        });
      },
      serializeLayer: function (d) {
        for (var e = d.getFrames(), f = { name: d.getName(), opacity: d.getOpacity(), frameCount: e.length }, g = []; !b(g); ) {
          if (g.length >= e.length) {
            g = [];
            break;
          }
          var h = pskl.utils.Array.chunk(e, g.length + 1);
          g = [];
          for (var i = 0, j = 0; j < h.length; j++) {
            var k = h[j];
            g.push({ layout: c(k.length, i), base64PNG: a.Serializer.serializeFramesToBase64(k) }), (i += k.length);
          }
        }
        return (f.chunks = g), JSON.stringify(f);
      },
      serializeFramesToBase64: function (a) {
        try {
          return new pskl.rendering.FramesheetRenderer(a).renderAsCanvas().toDataURL();
        } catch (a) {
          return "";
        }
      },
    };
  })(),
  (function () {
    var a = $.namespace("pskl.utils.serialization");
    (a.Deserializer = function (a, b) {
      (this.layersToLoad_ = 0), (this.data_ = a), (this.callback_ = b), (this.piskel_ = null), (this.layers_ = []);
    }),
      (a.Deserializer.deserialize = function (b, c, d) {
        try {
          var e;
          (e = b.modelVersion == Constants.MODEL_VERSION ? new a.Deserializer(b, c) : 1 == b.modelVersion ? new a.backward.Deserializer_v1(b, c) : new a.backward.Deserializer_v0(b, c)), e.deserialize();
        } catch (a) {
          console.error(a), "function" == typeof d && d(a);
        }
      }),
      (a.Deserializer.prototype.deserialize = function () {
        var a = this.data_,
          b = a.piskel,
          c = b.name || "Deserialized piskel",
          d = b.description || "",
          e = new pskl.model.piskel.Descriptor(c, d);
        (this.piskel_ = new pskl.model.Piskel(b.width, b.height, b.fps, e)), (this.layersToLoad_ = b.layers.length), b.layers.forEach(this.deserializeLayer.bind(this));
      }),
      (a.Deserializer.prototype.deserializeLayer = function (a, b) {
        var c = JSON.parse(a),
          d = new pskl.model.Layer(c.name);
        d.setOpacity(c.opacity), void 0 === c.chunks && c.base64PNG && this.normalizeLayerData_(c);
        var e = c.chunks,
          f = [];
        return (
          Q.all(
            e.map(function (a) {
              var b = Q.defer(),
                c = new Image();
              return (
                (c.onload = function () {
                  pskl.utils.FrameUtils.createFramesFromChunk(c, a.layout).forEach(function (a) {
                    f[a.index] = a.frame;
                  }),
                    b.resolve();
                }),
                (c.src = a.base64PNG),
                b.promise
              );
            })
          )
            .then(
              function () {
                f.forEach(d.addFrame.bind(d)), (this.layers_[b] = d), this.onLayerLoaded_();
              }.bind(this)
            )
            .catch(function (a) {
              console.error("Failed to deserialize layer"), console.error(a);
            }),
          d
        );
      }),
      (a.Deserializer.prototype.onLayerLoaded_ = function () {
        (this.layersToLoad_ = this.layersToLoad_ - 1),
          0 === this.layersToLoad_ &&
            (this.layers_.forEach(
              function (a) {
                this.piskel_.addLayer(a);
              }.bind(this)
            ),
            this.callback_(this.piskel_));
      }),
      (a.Deserializer.prototype.normalizeLayerData_ = function (a) {
        for (var b = [], c = 0; c < a.frameCount; c++) b.push([c]);
        a.chunks = [{ base64PNG: a.base64PNG, layout: b }];
      });
  })(),
  (function () {
    $.namespace("pskl.utils.serialization.arraybuffer").ArrayBufferDeserializer = {
      deserialize: function (a, b) {
        var c,
          d,
          e = a,
          f = new Uint8Array(e),
          g = new Uint16Array(f.buffer),
          h = (g[0], g[1]),
          i = g[2],
          j = g[3],
          k = g[4],
          l = g[5],
          m = g[6],
          n = "";
        for (c = 0; c < k; c++) n += String.fromCharCode(g[7 + c]);
        var o = "";
        for (c = 0; c < l; c++) o = String.fromCharCode(g[7 + k + c]);
        var p,
          q = 7 + k + l,
          r = [];
        for (c = 0; c < m; c++) {
          p = {};
          var s = g[q],
            t = g[q + 1] / 65535,
            u = g[q + 2],
            v = g[q + 3],
            w = g[q + 4],
            x = (w >>> 0) | ((v << 16) >>> 0),
            y = "";
          for (d = 0; d < s; d++) y += String.fromCharCode(g[q + 5 + d]);
          var z = "";
          for (d = 0; d < x; d++) z += String.fromCharCode(f[2 * (q + 5 + s) + d]);
          (z = "data:image/png;base64," + z), (q += Math.ceil(5 + s + x / 2)), (p.name = y), (p.opacity = t), (p.frameCount = u), (p.dataUri = z), r.push(p);
        }
        var A = new pskl.model.piskel.Descriptor(n, o),
          B = new pskl.model.Piskel(h, i, j, A),
          C = 0,
          D = function (a, b) {
            var c = new Image();
            (c.onload = function () {
              pskl.utils.FrameUtils.createFramesFromSpritesheet(this, a.frameCount).forEach(function (b) {
                a.model.addFrame(b);
              }),
                ++C == m && b(B);
            }),
              (c.src = a.dataUri);
          };
        for (c = 0; c < m; c++) {
          p = r[c];
          var E = new pskl.model.Layer(p.name);
          (p.model = E), E.setOpacity(p.opacity), B.addLayer(E), D.bind(this, p, b)();
        }
      },
    };
  })(),
  (function () {
    var a = $.namespace("pskl.utils.serialization.arraybuffer");
    a.ArrayBufferSerializer = {
      calculateRequiredBytes: function (a, b) {
        var c = (a.getWidth(), a.getHeight(), a.getDescriptor().name.length),
          d = a.getDescriptor().description.length,
          e = (a.getLayers().length, 0);
        (e += 8), (e += 4), (e += 2), (e += 2 * c), (e += 2 * d);
        for (var f = 0, g = a.getLayers(); f < g.length; f++) (e += 10), (e += 2 * g[f].name.length), (e += b[f].length) % 2 == 1 && e++;
        return e;
      },
      serialize: function (b) {
        var c,
          d,
          e,
          f,
          g,
          h = [];
        for (c = 0, e = b.getLayers(); c < e.length; c++) {
          (f = new pskl.rendering.FramesheetRenderer(e[c].getFrames()).renderAsCanvas().toDataURL().split(",")[1]), (g = f.length), h.push({ uri: f, length: g });
        }
        var i = a.ArrayBufferSerializer.calculateRequiredBytes(b, h),
          j = new ArrayBuffer(i),
          k = new Uint8Array(j),
          l = new Uint16Array(j),
          m = b.getWidth(),
          n = b.getHeight(),
          o = b.getDescriptor().name,
          p = o.length,
          q = b.getDescriptor().description,
          r = q.length;
        for (l[0] = Constants.MODEL_VERSION, l[1] = m, l[2] = n, l[3] = pskl.app.piskelController.getFPS(), l[4] = p, l[5] = r, l[6] = b.getLayers().length, c = 0; c < p; c++) l[7 + c] = o.charCodeAt(c);
        for (c = 0; c < r; c++) l[7 + p + c] = q.charCodeAt(c);
        var s = 7 + p + r;
        for (c = 0, e = b.getLayers(); c < e.length; c++) {
          var t = e[c],
            u = t.getFrames(),
            v = t.getName(),
            w = v.length,
            x = t.getOpacity(),
            y = u.length;
          for (f = h[c].uri, g = h[c].length, l[s] = w, l[s + 1] = Math.floor(65535 * x), l[s + 2] = y, l[s + 3] = ((4294901760 & g) >> 16) >>> 0, l[s + 4] = (65535 & g) >>> 0, d = 0; d < w; d++) l[s + 5 + d] = v.charCodeAt(d);
          for (d = 0; d < g; d++) k[2 * (s + 5 + w) + d] = f.charCodeAt(d);
          s += Math.ceil(5 + w + g / 2);
        }
        return j;
      },
    };
  })(),
  (function () {
    var a = $.namespace("pskl.utils.serialization.backward");
    (a.Deserializer_v0 = function (a, b) {
      (this.data_ = a), (this.callback_ = b);
    }),
      (a.Deserializer_v0.prototype.deserialize = function () {
        var a = this.data_,
          b = a.map(function (a) {
            return pskl.model.Frame.fromPixelGrid(a);
          }),
          c = new pskl.model.piskel.Descriptor("Deserialized piskel", ""),
          d = pskl.model.Layer.fromFrames("Layer 1", b);
        this.callback_(pskl.model.Piskel.fromLayers([d], Constants.DEFAULTS.FPS, c));
      });
  })(),
  (function () {
    var a = $.namespace("pskl.utils.serialization.backward");
    (a.Deserializer_v1 = function (a, b) {
      (this.callback_ = b), (this.data_ = a);
    }),
      (a.Deserializer_v1.prototype.deserialize = function () {
        var a = this.data_.piskel,
          b = new pskl.model.piskel.Descriptor("Deserialized piskel", ""),
          c = new pskl.model.Piskel(a.width, a.height, Constants.DEFAULTS.FPS, b);
        a.layers.forEach(
          function (a) {
            var b = this.deserializeLayer(a);
            c.addLayer(b);
          }.bind(this)
        ),
          this.callback_(c);
      }),
      (a.Deserializer_v1.prototype.deserializeLayer = function (a) {
        var b = JSON.parse(a),
          c = new pskl.model.Layer(b.name);
        return (
          b.frames.forEach(
            function (a) {
              var b = this.deserializeFrame(a);
              c.addFrame(b);
            }.bind(this)
          ),
          c
        );
      }),
      (a.Deserializer_v1.prototype.deserializeFrame = function (a) {
        var b = JSON.parse(a);
        return pskl.model.Frame.fromPixelGrid(b);
      });
  })(),
  (function () {
    var a = function () {
      (function (a) {
        function b(a, c) {
          if ({}.hasOwnProperty.call(b.cache, a)) return b.cache[a];
          var d = b.resolve(a);
          if (!d) throw new Error("Failed to resolve module " + a);
          var e = { id: a, require: b, filename: a, exports: {}, loaded: !1, parent: c, children: [] };
          c && c.children.push(e);
          var f = a.slice(0, a.lastIndexOf("/") + 1);
          return (b.cache[a] = e.exports), d.call(e.exports, e, e.exports, f, a), (e.loaded = !0), (b.cache[a] = e.exports);
        }
        (b.modules = {}),
          (b.cache = {}),
          (b.resolve = function (a) {
            return {}.hasOwnProperty.call(b.modules, a) ? b.modules[a] : void 0;
          }),
          (b.define = function (a, c) {
            b.modules[a] = c;
          }),
          b.define("/gif.worker.coffee", function (a, c, d, e) {
            var f, g;
            (f = b("/GIFEncoder.js", a)),
              (g = function (a) {
                var b, c, d, e;
                return (
                  (b = new f(a.width, a.height)),
                  0 === a.index ? b.writeHeader() : (b.firstFrame = !1),
                  b.setTransparent(a.transparent),
                  b.setRepeat(a.repeat),
                  b.setDelay(a.delay),
                  b.setQuality(a.quality),
                  b.setPreserveColors(a.preserveColors),
                  b.addFrame(a.data),
                  a.last && b.finish(),
                  (d = b.stream()),
                  (a.data = d.pages),
                  (a.cursor = d.cursor),
                  (a.pageSize = d.constructor.pageSize),
                  a.canTransfer
                    ? ((e = function (b) {
                        for (var d = 0, e = a.data.length; d < e; ++d) (c = a.data[d]), b.push(c.buffer);
                        return b;
                      }.call(this, [])),
                      self.postMessage(a, e))
                    : self.postMessage(a)
                );
              }),
              (self.onmessage = function (a) {
                return g(a.data);
              });
          }),
          b.define("/GIFEncoder.js", function (a, c, d, e) {
            function f() {
              (this.page = -1), (this.pages = []), this.newPage();
            }
            function g(a, b) {
              (this.width = ~~a),
                (this.height = ~~b),
                (this.transparent = null),
                (this.transIndex = 0),
                (this.repeat = -1),
                (this.delay = 0),
                (this.image = null),
                (this.pixels = null),
                (this.indexedPixels = null),
                (this.colorDepth = null),
                (this.colorTab = null),
                (this.usedEntry = new Array()),
                (this.palSize = 7),
                (this.dispose = -1),
                (this.firstFrame = !0),
                (this.sample = 10),
                (this.out = new f());
            }
            var h = b("/TypedNeuQuant.js", a),
              i = b("/SimpleQuant.js", a),
              j = b("/LZWEncoder.js", a);
            (f.pageSize = 4096), (f.charMap = {});
            for (var k = 0; k < 256; k++) f.charMap[k] = String.fromCharCode(k);
            (f.prototype.newPage = function () {
              (this.pages[++this.page] = new Uint8Array(f.pageSize)), (this.cursor = 0);
            }),
              (f.prototype.getData = function () {
                for (var a = "", b = 0; b < this.pages.length; b++) for (var c = 0; c < f.pageSize; c++) a += f.charMap[this.pages[b][c]];
                return a;
              }),
              (f.prototype.writeByte = function (a) {
                this.cursor >= f.pageSize && this.newPage(), (this.pages[this.page][this.cursor++] = a);
              }),
              (f.prototype.writeUTFBytes = function (a) {
                for (var b = a.length, c = 0; c < b; c++) this.writeByte(a.charCodeAt(c));
              }),
              (f.prototype.writeBytes = function (a, b, c) {
                for (var d = c || a.length, e = b || 0; e < d; e++) this.writeByte(a[e]);
              }),
              (g.prototype.setDelay = function (a) {
                this.delay = Math.round(a / 10);
              }),
              (g.prototype.setFrameRate = function (a) {
                this.delay = Math.round(100 / a);
              }),
              (g.prototype.setDispose = function (a) {
                a >= 0 && (this.dispose = a);
              }),
              (g.prototype.setRepeat = function (a) {
                this.repeat = a;
              }),
              (g.prototype.setTransparent = function (a) {
                this.transparent = a;
              }),
              (g.prototype.setPreserveColors = function (a) {
                this.preserveColors = a;
              }),
              (g.prototype.addFrame = function (a) {
                (this.image = a),
                  this.getImagePixels(),
                  this.analyzePixels(),
                  this.firstFrame && (this.writeLSD(), this.writePalette(), this.repeat >= 0 && this.writeNetscapeExt()),
                  this.writeGraphicCtrlExt(),
                  this.writeImageDesc(),
                  this.firstFrame || this.writePalette(),
                  this.writePixels(),
                  (this.firstFrame = !1);
              }),
              (g.prototype.finish = function () {
                this.out.writeByte(59);
              }),
              (g.prototype.setQuality = function (a) {
                a < 1 && (a = 1), (this.sample = a);
              }),
              (g.prototype.writeHeader = function () {
                this.out.writeUTFBytes("GIF89a");
              }),
              (g.prototype.analyzePixels = function () {
                var a = this.pixels.length,
                  b = a / 3;
                this.indexedPixels = new Uint8Array(b);
                var c;
                if (this.preserveColors) {
                  var d = this.toRGBComponents(this.transparent);
                  c = new i(this.pixels, this.sample, d);
                } else c = new h(this.pixels, this.sample);
                c.buildColormap(), (this.colorTab = c.getColormap());
                for (var e = 0, f = 0; f < b; f++) {
                  var g = c.lookupRGB(255 & this.pixels[e++], 255 & this.pixels[e++], 255 & this.pixels[e++]);
                  (this.usedEntry[g] = !0), (this.indexedPixels[f] = g);
                }
                (this.pixels = null), (this.colorDepth = 8), (this.palSize = 7), null !== this.transparent && (this.transIndex = this.findClosest(this.transparent));
              }),
              (g.prototype.toRGBComponents = function (a) {
                var b = null;
                return a && (b = { r: (16711680 & a) >> 16, g: (65280 & a) >> 8, b: 255 & a }), b;
              }),
              (g.prototype.findClosest = function (a) {
                if (null === this.colorTab) return -1;
                for (var b = (16711680 & a) >> 16, c = (65280 & a) >> 8, d = 255 & a, e = 0, f = 16777216, g = this.colorTab.length, h = 0; h < g; ) {
                  var i = b - (255 & this.colorTab[h++]),
                    j = c - (255 & this.colorTab[h++]),
                    k = d - (255 & this.colorTab[h]),
                    l = i * i + j * j + k * k,
                    m = parseInt(h / 3);
                  (this.preserveColors || this.usedEntry[m]) && l < f && ((f = l), (e = m)), h++;
                }
                return e;
              }),
              (g.prototype.getImagePixels = function () {
                var a = this.width,
                  b = this.height;
                this.pixels = new Uint8Array(a * b * 3);
                for (var c = this.image, d = 0, e = 0; e < b; e++)
                  for (var f = 0; f < a; f++) {
                    var g = e * a * 4 + 4 * f;
                    (this.pixels[d++] = c[g]), (this.pixels[d++] = c[g + 1]), (this.pixels[d++] = c[g + 2]);
                  }
              }),
              (g.prototype.writeGraphicCtrlExt = function () {
                this.out.writeByte(33), this.out.writeByte(249), this.out.writeByte(4);
                var a, b;
                null === this.transparent ? ((a = 0), (b = 0)) : ((a = 1), (b = 2)),
                  this.dispose >= 0 && (b = 7 & dispose),
                  (b <<= 2),
                  this.out.writeByte(0 | b | a),
                  this.writeShort(this.delay),
                  this.out.writeByte(this.transIndex),
                  this.out.writeByte(0);
              }),
              (g.prototype.writeImageDesc = function () {
                this.out.writeByte(44), this.writeShort(0), this.writeShort(0), this.writeShort(this.width), this.writeShort(this.height), this.firstFrame ? this.out.writeByte(0) : this.out.writeByte(128 | this.palSize);
              }),
              (g.prototype.writeLSD = function () {
                this.writeShort(this.width), this.writeShort(this.height), this.out.writeByte(240 | this.palSize), this.out.writeByte(0), this.out.writeByte(0);
              }),
              (g.prototype.writeNetscapeExt = function () {
                this.out.writeByte(33), this.out.writeByte(255), this.out.writeByte(11), this.out.writeUTFBytes("NETSCAPE2.0"), this.out.writeByte(3), this.out.writeByte(1), this.writeShort(this.repeat), this.out.writeByte(0);
              }),
              (g.prototype.writePalette = function () {
                this.out.writeBytes(this.colorTab);
                for (var a = 768 - this.colorTab.length, b = 0; b < a; b++) this.out.writeByte(0);
              }),
              (g.prototype.writeShort = function (a) {
                this.out.writeByte(255 & a), this.out.writeByte((a >> 8) & 255);
              }),
              (g.prototype.writePixels = function () {
                new j(this.width, this.height, this.indexedPixels, this.colorDepth).encode(this.out);
              }),
              (g.prototype.stream = function () {
                return this.out;
              }),
              (a.exports = g);
          }),
          b.define("/LZWEncoder.js", function (a, b, c, d) {
            function e(a, b, c, d) {
              function e(a, b) {
                (y[s++] = a), s >= 254 && n(b);
              }
              function j(a) {
                k(h), (C = v + 2), (D = !0), q(v, a);
              }
              function k(a) {
                for (var b = 0; b < a; ++b) z[b] = -1;
              }
              function l(a, b) {
                var c, d, e, i, l, m, n;
                for (u = a, D = !1, n_bits = u, t = o(n_bits), v = 1 << (a - 1), w = v + 1, C = v + 2, s = 0, i = p(), n = 0, c = h; c < 65536; c *= 2) ++n;
                (n = 8 - n), (m = h), k(m), q(v, b);
                a: for (; (d = p()) != f; )
                  if (((c = (d << g) + i), (e = (d << n) ^ i), z[e] !== c)) {
                    if (z[e] >= 0) {
                      (l = m - e), 0 === e && (l = 1);
                      do {
                        if (((e -= l) < 0 && (e += m), z[e] === c)) {
                          i = A[e];
                          continue a;
                        }
                      } while (z[e] >= 0);
                    }
                    q(i, b), (i = d), C < 1 << g ? ((A[e] = C++), (z[e] = c)) : j(b);
                  } else i = A[e];
                q(i, b), q(w, b);
              }
              function m(c) {
                c.writeByte(x), (remaining = a * b), (curPixel = 0), l(x + 1, c), c.writeByte(0);
              }
              function n(a) {
                s > 0 && (a.writeByte(s), a.writeBytes(y, 0, s), (s = 0));
              }
              function o(a) {
                return (1 << a) - 1;
              }
              function p() {
                return 0 === remaining ? f : (--remaining, 255 & c[curPixel++]);
              }
              function q(a, b) {
                for (r &= i[B], B > 0 ? (r |= a << B) : (r = a), B += n_bits; B >= 8; ) e(255 & r, b), (r >>= 8), (B -= 8);
                if (((C > t || D) && (D ? ((t = o((n_bits = u))), (D = !1)) : (++n_bits, (t = n_bits == g ? 1 << g : o(n_bits)))), a == w)) {
                  for (; B > 0; ) e(255 & r, b), (r >>= 8), (B -= 8);
                  n(b);
                }
              }
              var r,
                s,
                t,
                u,
                v,
                w,
                x = Math.max(2, d),
                y = new Uint8Array(256),
                z = new Int32Array(h),
                A = new Int32Array(h),
                B = 0,
                C = 0,
                D = !1;
              this.encode = m;
            }
            var f = -1,
              g = 12,
              h = 5003,
              i = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535];
            a.exports = e;
          }),
          b.define("/SimpleQuant.js", function (a, b, c, d) {
            function e(a, b, c) {
              return [a, b, c].join(".");
            }
            function f(a, b, c) {
              (this.pixels = a),
                (this.palette = []),
                (this.paletteIndex = {}),
                (this.getColormap = function () {
                  return this.palette;
                }),
                (this.buildColormap = function () {
                  for (var a = this.pixels.length / 3, b = 0, d = 0; d < a; d++) {
                    var e = this.pixels[b++],
                      f = this.pixels[b++],
                      g = this.pixels[b++];
                    this.addColorToPalette(e, f, g);
                  }
                  c && this.addColorToPalette(c.r, c.g, c.b);
                }),
                (this.addColorToPalette = function (a, b, c) {
                  var d = e(a, b, c);
                  this.paletteIndex.hasOwnProperty(d) || (this.palette.push(a), this.palette.push(b), this.palette.push(c), (this.paletteIndex[d] = this.palette.length / 3 - 1));
                }),
                (this.lookupRGB = function (a, b, c) {
                  return this.paletteIndex[e(a, b, c)];
                });
            }
            a.exports = f;
          }),
          b.define("/TypedNeuQuant.js", function (a, b, c, d) {
            function e(a, b) {
              function c() {
                (H = []), (I = new Int32Array(256)), (J = new Int32Array(g)), (K = new Int32Array(g)), (L = new Int32Array(g >> 3));
                var a, b;
                for (a = 0; a < g; a++) (b = (a << (i + 8)) / g), (H[a] = new Float64Array([b, b, b, 0])), (K[a] = k / g), (J[a] = 0);
              }
              function d() {
                for (var a = 0; a < g; a++) (H[a][0] >>= i), (H[a][1] >>= i), (H[a][2] >>= i), (H[a][3] = a);
              }
              function e(a, b, c, d, e) {
                (H[b][0] -= (a * (H[b][0] - c)) / u), (H[b][1] -= (a * (H[b][1] - d)) / u), (H[b][2] -= (a * (H[b][2] - e)) / u);
              }
              function p(a, b, c, d, e) {
                for (var f, h, i = Math.abs(b - a), j = Math.min(b + a, g), k = b + 1, l = b - 1, m = 1; k < j || l > i; )
                  (h = L[m++]),
                    k < j && ((f = H[k++]), (f[0] -= (h * (f[0] - c)) / w), (f[1] -= (h * (f[1] - d)) / w), (f[2] -= (h * (f[2] - e)) / w)),
                    l > i && ((f = H[l--]), (f[0] -= (h * (f[0] - c)) / w), (f[1] -= (h * (f[1] - d)) / w), (f[2] -= (h * (f[2] - e)) / w));
              }
              function r(a, b, c) {
                var d,
                  e,
                  f,
                  h,
                  k,
                  p = 2147483647,
                  q = p,
                  r = -1,
                  s = r;
                for (d = 0; d < g; d++)
                  (e = H[d]), (f = Math.abs(e[0] - a) + Math.abs(e[1] - b) + Math.abs(e[2] - c)), f < p && ((p = f), (r = d)), (h = f - (J[d] >> (j - i))), h < q && ((q = h), (s = d)), (k = K[d] >> m), (K[d] -= k), (J[d] += k << l);
                return (K[r] += n), (J[r] -= o), s;
              }
              function C() {
                var a,
                  b,
                  c,
                  d,
                  e,
                  f,
                  i = 0,
                  j = 0;
                for (a = 0; a < g; a++) {
                  for (c = H[a], e = a, f = c[1], b = a + 1; b < g; b++) (d = H[b]), d[1] < f && ((e = b), (f = d[1]));
                  if (((d = H[e]), a != e && ((b = d[0]), (d[0] = c[0]), (c[0] = b), (b = d[1]), (d[1] = c[1]), (c[1] = b), (b = d[2]), (d[2] = c[2]), (c[2] = b), (b = d[3]), (d[3] = c[3]), (c[3] = b)), f != i)) {
                    for (I[i] = (j + a) >> 1, b = i + 1; b < f; b++) I[b] = a;
                    (i = f), (j = a);
                  }
                }
                for (I[i] = (j + h) >> 1, b = i + 1; b < 256; b++) I[b] = h;
              }
              function D(a, b, c) {
                for (var d, e, f, h = 1e3, i = -1, j = I[b], k = j - 1; j < g || k >= 0; )
                  j < g && ((e = H[j]), (f = e[1] - b), f >= h ? (j = g) : (j++, f < 0 && (f = -f), (d = e[0] - a), d < 0 && (d = -d), (f += d) < h && ((d = e[2] - c), d < 0 && (d = -d), (f += d) < h && ((h = f), (i = e[3]))))),
                    k >= 0 && ((e = H[k]), (f = b - e[1]), f >= h ? (k = -1) : (k--, f < 0 && (f = -f), (d = e[0] - a), d < 0 && (d = -d), (f += d) < h && ((d = e[2] - c), d < 0 && (d = -d), (f += d) < h && ((h = f), (i = e[3])))));
                return i;
              }
              function E() {
                var c,
                  d = a.length,
                  g = 30 + (b - 1) / 3,
                  h = d / (3 * b),
                  j = ~~(h / f),
                  k = u,
                  l = s,
                  m = l >> q;
                for (m <= 1 && (m = 0), c = 0; c < m; c++) L[c] = k * (((m * m - c * c) * v) / (m * m));
                var n;
                d < B ? ((b = 1), (n = 3)) : (n = d % x != 0 ? 3 * x : d % y != 0 ? 3 * y : d % z != 0 ? 3 * z : 3 * A);
                var o,
                  w,
                  C,
                  D,
                  E = 0;
                for (c = 0; c < h; )
                  if (((o = (255 & a[E]) << i), (w = (255 & a[E + 1]) << i), (C = (255 & a[E + 2]) << i), (D = r(o, w, C)), e(k, D, o, w, C), 0 !== m && p(m, D, o, w, C), (E += n), E >= d && (E -= d), c++, 0 === j && (j = 1), c % j == 0))
                    for (k -= k / g, l -= l / t, m = l >> q, m <= 1 && (m = 0), D = 0; D < m; D++) L[D] = k * (((m * m - D * D) * v) / (m * m));
              }
              function F() {
                c(), E(), d(), C();
              }
              function G() {
                for (var a = [], b = [], c = 0; c < g; c++) b[H[c][3]] = c;
                for (var d = 0, e = 0; e < g; e++) {
                  var f = b[e];
                  (a[d++] = H[f][0]), (a[d++] = H[f][1]), (a[d++] = H[f][2]);
                }
                return a;
              }
              var H, I, J, K, L;
              (this.buildColormap = F), (this.getColormap = G), (this.lookupRGB = D);
            }
            var f = 100,
              g = 256,
              h = g - 1,
              i = 4,
              j = 16,
              k = 1 << j,
              l = 10,
              m = 10,
              n = k >> m,
              o = k << (l - m),
              p = g >> 3,
              q = 6,
              r = 1 << q,
              s = p * r,
              t = 30,
              u = 1024,
              v = 256,
              w = 1 << 18,
              x = 499,
              y = 491,
              z = 487,
              A = 503,
              B = 3 * A;
            a.exports = e;
          }),
          b("/gif.worker.coffee");
      }.call(this, this));
    };
    try {
      var b;
      if (pskl.utils.UserAgent.isIE11) (b = "js/lib/gif/gif.ie.worker.js"), window.pskl && window.pskl.appEngineToken_ && (b = "../" + b);
      else {
        var c = (a + "").replace(/function\s?\(\)\s?\{/, "").replace(/\}[^}]*$/, ""),
          d = [c],
          e = new Blob(d, { type: "application/javascript" });
        b = URL.createObjectURL(e);
      }
      window.GifWorkerURL = b;
    } catch (a) {
      console.error("Could not create worker", a.message);
    }
  })(),
  function (a) {
    function b(a, c) {
      if ({}.hasOwnProperty.call(b.cache, a)) return b.cache[a];
      var d = b.resolve(a);
      if (!d) throw new Error("Failed to resolve module " + a);
      var e = { id: a, require: b, filename: a, exports: {}, loaded: !1, parent: c, children: [] };
      c && c.children.push(e);
      var f = a.slice(0, a.lastIndexOf("/") + 1);
      return (b.cache[a] = e.exports), d.call(e.exports, e, e.exports, f, a), (e.loaded = !0), (b.cache[a] = e.exports);
    }
    (b.modules = {}),
      (b.cache = {}),
      (b.resolve = function (a) {
        return {}.hasOwnProperty.call(b.modules, a) ? b.modules[a] : void 0;
      }),
      (b.define = function (a, c) {
        b.modules[a] = c;
      });
    var c = (function (b) {
      return (
        (b = "/"),
        {
          title: "browser",
          version: "v0.8.19",
          browser: !0,
          env: {},
          argv: [],
          nextTick:
            a.setImmediate ||
            function (a) {
              setTimeout(a, 0);
            },
          cwd: function () {
            return b;
          },
          chdir: function (a) {
            b = a;
          },
        }
      );
    })();
    b.define("/gif.coffee", function (a, c, d, e) {
      function f(a, b) {
        return {}.hasOwnProperty.call(a, b);
      }
      function g(a, b) {
        for (var c = 0, d = b.length; c < d; ++c) if (c in b && b[c] === a) return !0;
        return !1;
      }
      function h(a, b) {
        function c() {
          this.constructor = a;
        }
        for (var d in b) f(b, d) && (a[d] = b[d]);
        return (c.prototype = b.prototype), (a.prototype = new c()), (a.__super__ = b.prototype), a;
      }
      var i, j, k, l, m;
      (k = b("events", a).EventEmitter),
        (i = b("/browser.coffee", a)),
        (m = (function (a) {
          function b(a) {
            var b, c;
            (this.running = !1), (this.options = {}), (this.frames = []), (this.freeWorkers = []), (this.activeWorkers = []), this.setOptions(a);
            for (b in j) (c = j[b]), null != this.options[b] ? this.options[b] : (this.options[b] = c);
          }
          return (
            h(b, a),
            (j = { workerScript: window.GifWorkerURL, workers: 2, repeat: 0, background: "#fff", quality: 10, width: null, height: null, transparent: null, preserveColors: !1 }),
            (l = { delay: 500, copy: !1 }),
            (b.prototype.setOption = function (a, b) {
              return (this.options[a] = b), null == this._canvas || ("width" !== a && "height" !== a) ? void 0 : (this._canvas[a] = b);
            }),
            (b.prototype.setOptions = function (a) {
              var b, c;
              return function (d) {
                for (b in a) f(a, b) && ((c = a[b]), d.push(this.setOption(b, c)));
                return d;
              }.call(this, []);
            }),
            (b.prototype.addFrame = function (a, b) {
              var c, d;
              null == b && (b = {}), (c = {}), (c.transparent = this.options.transparent);
              for (d in l) c[d] = b[d] || l[d];
              if ((null != this.options.width || this.setOption("width", a.width), null != this.options.height || this.setOption("height", a.height), "undefined" != typeof ImageData && null != ImageData && a instanceof ImageData))
                c.data = a.data;
              else if (
                ("undefined" != typeof CanvasRenderingContext2D && null != CanvasRenderingContext2D && a instanceof CanvasRenderingContext2D) ||
                ("undefined" != typeof WebGLRenderingContext && null != WebGLRenderingContext && a instanceof WebGLRenderingContext)
              )
                b.copy ? (c.data = this.getContextData(a)) : (c.context = a);
              else {
                if (null == a.childNodes) throw new Error("Invalid image");
                b.copy ? (c.data = this.getImageData(a)) : (c.image = a);
              }
              return this.frames.push(c);
            }),
            (b.prototype.render = function () {
              var a, b;
              if (this.running) throw new Error("Already running");
              if (null == this.options.width || null == this.options.height) throw new Error("Width and height must be set prior to rendering");
              (this.running = !0),
                (this.nextFrame = 0),
                (this.finishedFrames = 0),
                (this.imageParts = function (b) {
                  for (
                    var c = function () {
                        var a;
                        a = [];
                        for (var b = 0; 0 <= this.frames.length ? b < this.frames.length : b > this.frames.length; 0 <= this.frames.length ? ++b : --b) a.push(b);
                        return a;
                      }.apply(this, arguments),
                      d = 0,
                      e = c.length;
                    d < e;
                    ++d
                  )
                    (a = c[d]), b.push(null);
                  return b;
                }.call(this, [])),
                (b = this.spawnWorkers());
              for (
                var c = function () {
                    var a;
                    a = [];
                    for (var c = 0; 0 <= b ? c < b : c > b; 0 <= b ? ++c : --c) a.push(c);
                    return a;
                  }.apply(this, arguments),
                  d = 0,
                  e = c.length;
                d < e;
                ++d
              )
                (a = c[d]), this.renderNextFrame();
              return this.emit("start"), this.emit("progress", 0);
            }),
            (b.prototype.abort = function () {
              for (var a; ; ) {
                if (!(null != (a = this.activeWorkers.shift()))) break;
                console.log("killing active worker"), a.terminate();
              }
              return (this.running = !1), this.emit("abort");
            }),
            (b.prototype.spawnWorkers = function () {
              var a;
              return (
                (a = Math.min(this.options.workers, this.frames.length)),
                function () {
                  var b;
                  b = [];
                  for (var c = this.freeWorkers.length; this.freeWorkers.length <= a ? c < a : c > a; this.freeWorkers.length <= a ? ++c : --c) b.push(c);
                  return b;
                }
                  .apply(this, arguments)
                  .forEach(
                    (function (a) {
                      return function (b) {
                        var c;
                        return (
                          console.log("spawning worker " + b),
                          (c = new Worker(a.options.workerScript)),
                          (c.onmessage = (function (a) {
                            return function (b) {
                              return a.activeWorkers.splice(a.activeWorkers.indexOf(c), 1), a.freeWorkers.push(c), a.frameFinished(b.data);
                            };
                          })(a)),
                          a.freeWorkers.push(c)
                        );
                      };
                    })(this)
                  ),
                a
              );
            }),
            (b.prototype.frameFinished = function (a) {
              return (
                console.log("frame " + a.index + " finished - " + this.activeWorkers.length + " active"),
                this.finishedFrames++,
                this.emit("progress", this.finishedFrames / this.frames.length),
                (this.imageParts[a.index] = a),
                g(null, this.imageParts) ? this.renderNextFrame() : this.finishRendering()
              );
            }),
            (b.prototype.finishRendering = function () {
              var a, b, c, d, e, f, g;
              e = 0;
              for (var h = 0, i = this.imageParts.length; h < i; ++h) (b = this.imageParts[h]), (e += (b.data.length - 1) * b.pageSize + b.cursor);
              (e += b.pageSize - b.cursor), console.log("rendering finished - filesize " + Math.round(e / 1e3) + "kb"), (a = new Uint8Array(e)), (f = 0);
              for (var j = 0, k = this.imageParts.length; j < k; ++j) {
                b = this.imageParts[j];
                for (var l = 0, m = b.data.length; l < m; ++l) (g = b.data[l]), (c = l), a.set(g, f), c === b.data.length - 1 ? (f += b.cursor) : (f += b.pageSize);
              }
              return (d = new Blob([a], { type: "image/gif" })), this.emit("finished", d, a);
            }),
            (b.prototype.renderNextFrame = function () {
              var a, b, c;
              if (0 === this.freeWorkers.length) throw new Error("No free workers");
              return this.nextFrame >= this.frames.length
                ? void 0
                : ((a = this.frames[this.nextFrame++]), (c = this.freeWorkers.shift()), (b = this.getTask(a)), console.log("starting frame " + (b.index + 1) + " of " + this.frames.length), this.activeWorkers.push(c), c.postMessage(b));
            }),
            (b.prototype.getContextData = function (a) {
              return a.getImageData(0, 0, this.options.width, this.options.height).data;
            }),
            (b.prototype.getImageData = function (a) {
              var b;
              return (
                null != this._canvas || ((this._canvas = document.createElement("canvas")), (this._canvas.width = this.options.width), (this._canvas.height = this.options.height)),
                (b = this._canvas.getContext("2d")),
                (b.setFill = this.options.background),
                b.fillRect(0, 0, this.options.width, this.options.height),
                b.drawImage(a, 0, 0),
                this.getContextData(b)
              );
            }),
            (b.prototype.getTask = function (a) {
              var b, c;
              if (
                ((b = this.frames.indexOf(a)),
                (c = {
                  index: b,
                  last: b === this.frames.length - 1,
                  delay: a.delay,
                  transparent: a.transparent,
                  width: this.options.width,
                  height: this.options.height,
                  quality: this.options.quality,
                  preserveColors: this.options.preserveColors,
                  repeat: this.options.repeat,
                  canTransfer: "chrome" === i.name,
                }),
                null != a.data)
              )
                c.data = a.data;
              else if (null != a.context) c.data = this.getContextData(a.context);
              else {
                if (null == a.image) throw new Error("Invalid frame");
                c.data = this.getImageData(a.image);
              }
              return c;
            }),
            b
          );
        })(k)),
        (a.exports = m);
    }),
      b.define("/browser.coffee", function (a, b, c, d) {
        var e, f, g, h, i;
        (h = navigator.userAgent.toLowerCase()),
          (g = navigator.platform.toLowerCase()),
          (i = h.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/) || [null, "unknown", 0]),
          (f = "ie" === i[1] && document.documentMode),
          (e = {
            name: "version" === i[1] ? i[3] : i[1],
            version: f || parseFloat("opera" === i[1] && i[4] ? i[4] : i[2]),
            platform: { name: h.match(/ip(?:ad|od|hone)/) ? "ios" : (h.match(/(?:webos|android)/) || g.match(/mac|win|linux/) || ["other"])[0] },
          }),
          (e[e.name] = !0),
          (e[e.name + parseInt(e.version, 10)] = !0),
          (e.platform[e.platform.name] = !0),
          (a.exports = e);
      }),
      b.define("events", function (a, b, d, e) {
        c.EventEmitter || (c.EventEmitter = function () {});
        var f = (b.EventEmitter = c.EventEmitter),
          g =
            "function" == typeof Array.isArray
              ? Array.isArray
              : function (a) {
                  return "[object Array]" === Object.prototype.toString.call(a);
                };
        (f.prototype.setMaxListeners = function (a) {
          this._events || (this._events = {}), (this._events.maxListeners = a);
        }),
          (f.prototype.emit = function (a) {
            if ("error" === a && (!this._events || !this._events.error || (g(this._events.error) && !this._events.error.length))) throw arguments[1] instanceof Error ? arguments[1] : new Error("Uncaught, unspecified 'error' event.");
            if (!this._events) return !1;
            var b = this._events[a];
            if (!b) return !1;
            if ("function" != typeof b) {
              if (g(b)) {
                for (var c = Array.prototype.slice.call(arguments, 1), d = b.slice(), e = 0, f = d.length; e < f; e++) d[e].apply(this, c);
                return !0;
              }
              return !1;
            }
            switch (arguments.length) {
              case 1:
                b.call(this);
                break;
              case 2:
                b.call(this, arguments[1]);
                break;
              case 3:
                b.call(this, arguments[1], arguments[2]);
                break;
              default:
                var c = Array.prototype.slice.call(arguments, 1);
                b.apply(this, c);
            }
            return !0;
          }),
          (f.prototype.addListener = function (a, b) {
            if ("function" != typeof b) throw new Error("addListener only takes instances of Function");
            if ((this._events || (this._events = {}), this.emit("newListener", a, b), this._events[a]))
              if (g(this._events[a])) {
                if (!this._events[a].warned) {
                  var c;
                  (c = void 0 !== this._events.maxListeners ? this._events.maxListeners : 10) &&
                    c > 0 &&
                    this._events[a].length > c &&
                    ((this._events[a].warned = !0), console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[a].length), console.trace());
                }
                this._events[a].push(b);
              } else this._events[a] = [this._events[a], b];
            else this._events[a] = b;
            return this;
          }),
          (f.prototype.on = f.prototype.addListener),
          (f.prototype.once = function (a, b) {
            var c = this;
            return (
              c.on(a, function d() {
                c.removeListener(a, d), b.apply(this, arguments);
              }),
              this
            );
          }),
          (f.prototype.removeListener = function (a, b) {
            if ("function" != typeof b) throw new Error("removeListener only takes instances of Function");
            if (!this._events || !this._events[a]) return this;
            var c = this._events[a];
            if (g(c)) {
              var d = c.indexOf(b);
              if (d < 0) return this;
              c.splice(d, 1), 0 == c.length && delete this._events[a];
            } else this._events[a] === b && delete this._events[a];
            return this;
          }),
          (f.prototype.removeAllListeners = function (a) {
            return a && this._events && this._events[a] && (this._events[a] = null), this;
          }),
          (f.prototype.listeners = function (a) {
            return this._events || (this._events = {}), this._events[a] || (this._events[a] = []), g(this._events[a]) || (this._events[a] = [this._events[a]]), this._events[a];
          });
      }),
      (a.GIF = b("/gif.coffee"));
  }.call(this, this),
  (function (a) {
    "use strict";
    var b = function (a) {
      (this.data = a), (this.len = this.data.length), (this.pos = 0);
    };
    (b.prototype.readByte = function () {
      if (this.pos >= this.data.length) throw new Error("Attempted to read past end of stream.");
      return 255 & this.data.charCodeAt(this.pos++);
    }),
      (b.prototype.readBytes = function (a) {
        for (var b = [], c = 0; c < a; c++) b.push(this.readByte());
        return b;
      }),
      (b.prototype.read = function (a) {
        for (var b = "", c = 0; c < a; c++) b += String.fromCharCode(this.readByte());
        return b;
      }),
      (b.prototype.readUnsigned = function () {
        var a = this.readBytes(2);
        return (a[1] << 8) + a[0];
      }),
      ((a.SuperGIF = a.SuperGIF || {}).Stream = b);
  })(window),
  (function (a) {
    "use strict";
    var b = function (a) {
        return a.reduce(function (a, b) {
          return 2 * a + b;
        }, 0);
      },
      c = function (a) {
        for (var b = [], c = 7; c >= 0; c--) b.push(!!(a & (1 << c)));
        return b;
      },
      d = function (a) {
        (this.data = a),
          (this.len = this.data.length),
          (this.pos = 0),
          (this.readByte = function () {
            if (this.pos >= this.data.length) throw new Error("Attempted to read past end of stream.");
            return 255 & a.charCodeAt(this.pos++);
          }),
          (this.readBytes = function (a) {
            for (var b = [], c = 0; c < a; c++) b.push(this.readByte());
            return b;
          }),
          (this.read = function (a) {
            for (var b = "", c = 0; c < a; c++) b += String.fromCharCode(this.readByte());
            return b;
          }),
          (this.readUnsigned = function () {
            var a = this.readBytes(2);
            return (a[1] << 8) + a[0];
          });
      },
      e = function (a, b) {
        for (var c, d, e = 0, f = [], g = 1 << a, h = g + 1, i = a + 1, j = []; ; )
          if (
            ((d = c),
            (c = (function (a) {
              for (var c = 0, d = 0; d < a; d++) b.charCodeAt(e >> 3) & (1 << (7 & e)) && (c |= 1 << d), e++;
              return c;
            })(i)) !== g)
          ) {
            if (c === h) break;
            if (c < j.length) d !== g && j.push(j[d].concat(j[c][0]));
            else {
              if (c !== j.length) throw new Error("Invalid LZW code.");
              j.push(j[d].concat(j[d][0]));
            }
            f.push.apply(f, j[c]), j.length === 1 << i && i < 12 && i++;
          } else
            !(function () {
              (j = []), (i = a + 1);
              for (var b = 0; b < g; b++) j[b] = [b];
              (j[g] = []), (j[h] = null);
            })();
        return f;
      },
      f = function (a, d) {
        d || (d = {});
        var f = function (b) {
            for (var c = [], d = 0; d < b; d++) c.push(a.readBytes(3));
            return c;
          },
          g = function () {
            var b, c;
            c = "";
            do {
              (b = a.readByte()), (c += a.read(b));
            } while (0 !== b);
            return c;
          },
          h = function () {
            var e = {};
            if (((e.sig = a.read(3)), (e.ver = a.read(3)), "GIF" !== e.sig)) throw (d.onError(), new Error("Not a GIF file."));
            (e.width = a.readUnsigned()), (e.height = a.readUnsigned());
            var g = c(a.readByte());
            (e.gctFlag = g.shift()),
              (e.colorRes = b(g.splice(0, 3))),
              (e.sorted = g.shift()),
              (e.gctSize = b(g.splice(0, 3))),
              (e.bgColor = a.readByte()),
              (e.pixelAspectRatio = a.readByte()),
              e.gctFlag && (e.gct = f(1 << (e.gctSize + 1))),
              d.hdr && d.hdr(e);
          },
          i = function (e) {
            switch (((e.label = a.readByte()), e.label)) {
              case 249:
                (e.extType = "gce"),
                  (function (e) {
                    var f = (a.readByte(), c(a.readByte()));
                    (e.reserved = f.splice(0, 3)),
                      (e.disposalMethod = b(f.splice(0, 3))),
                      (e.userInput = f.shift()),
                      (e.transparencyGiven = f.shift()),
                      (e.delayTime = a.readUnsigned()),
                      (e.transparencyIndex = a.readByte()),
                      (e.terminator = a.readByte()),
                      d.gce && d.gce(e);
                  })(e);
                break;
              case 254:
                (e.extType = "com"),
                  (function (a) {
                    (a.comment = g()), d.com && d.com(a);
                  })(e);
                break;
              case 1:
                (e.extType = "pte"),
                  (function (b) {
                    a.readByte();
                    (b.ptHeader = a.readBytes(12)), (b.ptData = g()), d.pte && d.pte(b);
                  })(e);
                break;
              case 255:
                (e.extType = "app"),
                  (function (b) {
                    a.readByte();
                    switch (((b.identifier = a.read(8)), (b.authCode = a.read(3)), b.identifier)) {
                      case "NETSCAPE":
                        !(function (b) {
                          a.readByte();
                          (b.unknown = a.readByte()), (b.iterations = a.readUnsigned()), (b.terminator = a.readByte()), d.app && d.app.NETSCAPE && d.app.NETSCAPE(b);
                        })(b);
                        break;
                      default:
                        !(function (a) {
                          (a.appData = g()), d.app && d.app[a.identifier] && d.app[a.identifier](a);
                        })(b);
                    }
                  })(e);
                break;
              default:
                (e.extType = "unknown"),
                  (function (a) {
                    (a.data = g()), d.unknown && d.unknown(a);
                  })(e);
            }
          },
          j = function (h) {
            (h.leftPos = a.readUnsigned()), (h.topPos = a.readUnsigned()), (h.width = a.readUnsigned()), (h.height = a.readUnsigned());
            var i = c(a.readByte());
            (h.lctFlag = i.shift()), (h.interlaced = i.shift()), (h.sorted = i.shift()), (h.reserved = i.splice(0, 2)), (h.lctSize = b(i.splice(0, 3))), h.lctFlag && (h.lct = f(1 << (h.lctSize + 1))), (h.lzwMinCodeSize = a.readByte());
            var j = g();
            (h.pixels = e(h.lzwMinCodeSize, j)),
              h.interlaced &&
                (h.pixels = (function (a, b) {
                  for (var c = new Array(a.length), d = a.length / b, e = [0, 4, 2, 1], f = [8, 8, 4, 2], g = 0, h = 0; h < 4; h++)
                    for (var i = e[h]; i < d; i += f[h])
                      !(function (d, e) {
                        var f = a.slice(e * b, (e + 1) * b);
                        c.splice.apply(c, [d * b, b].concat(f));
                      })(i, g),
                        g++;
                  return c;
                })(h.pixels, h.width)),
              d.img && d.img(h);
          },
          k = function () {
            var b = {};
            switch (((b.sentinel = a.readByte()), String.fromCharCode(b.sentinel))) {
              case "!":
                (b.type = "ext"), i(b);
                break;
              case ",":
                (b.type = "img"), j(b);
                break;
              case ";":
                (b.type = "eof"), d.eof && d.eof(b);
                break;
              default:
                return d.onError(new Error("Unknown block: 0x" + b.sentinel.toString(16)));
            }
            "eof" !== b.type && setTimeout(k, 0);
          };
        !(function () {
          h(), setTimeout(k, 0);
        })();
      },
      g = function (b) {
        var c = { vp_l: 0, vp_t: 0, vp_w: null, vp_h: null, c_w: null, c_h: null };
        for (var e in b) c[e] = b[e];
        c.vp_w && c.vp_h && (c.is_vp = !0);
        var g,
          h,
          i = null,
          j = !1,
          k = null,
          l = null,
          m = null,
          n = 0,
          o = null,
          p = null,
          q = null,
          r = [],
          s = c.gif,
          t = function () {
            (k = null), (l = null), (o = m), (m = null), (p = null);
          },
          u = function () {
            try {
              f(g, B);
            } catch (a) {
              w("parse");
            }
          },
          v = function (a, b) {
            (F.width = a), (F.height = b), F.getContext("2d").setTransform(1, 0, 0, 1, 0, 0);
          },
          w = function (a) {
            (i = a), (h = { width: s.width, height: s.height }), (r = []);
          },
          x = function (a) {
            (h = a), v(h.width, h.height);
          },
          y = function (a) {
            z(), t(), (k = a.transparencyGiven ? a.transparencyIndex : null), (l = a.delayTime), (m = a.disposalMethod);
          },
          z = function () {
            p && r.push({ data: p.getImageData(0, 0, h.width, h.height), delay: l });
          },
          A = function (a) {
            p || (p = F.getContext("2d"));
            var b = r.length,
              c = a.lctFlag ? a.lct : h.gct;
            b > 0 && (3 === o ? p.putImageData(r[n].data, 0, 0) : (n = b - 1), 2 === o && p.clearRect(q.leftPos, q.topPos, q.width, q.height));
            var d = p.getImageData(a.leftPos, a.topPos, a.width, a.height),
              e = d.data;
            a.pixels.forEach(function (a, b) {
              a !== k && ((e[4 * b + 0] = c[a][0]), (e[4 * b + 1] = c[a][1]), (e[4 * b + 2] = c[a][2]), (e[4 * b + 3] = 255));
            }),
              p.putImageData(d, a.leftPos, a.topPos),
              (q = a);
          },
          B = {
            hdr: x,
            gce: y,
            img: A,
            eof: function (a) {
              z(), (j = !1), C && C();
            },
            onError: function (a) {
              E && E();
            },
          },
          C = !1,
          D = !1,
          E = !1,
          F = document.createElement("canvas");
        return {
          load: function (b) {
            if (((C = b.success), (D = b.step), (E = b.error), (j = !0), -1 !== s.src.indexOf("data:"))) {
              var c = s.src.substring(s.src.indexOf(",") + 1);
              (g = new d(a.atob(c))), u();
            } else {
              var e = new XMLHttpRequest();
              e.overrideMimeType("text/plain; charset=x-user-defined"),
                (e.onload = function (a) {
                  (g = new d(e.responseText)), setTimeout(u, 0);
                }),
                (e.onerror = function () {
                  w("xhr");
                }),
                e.open("GET", s.getAttribute("data-animated-src") || s.src, !0),
                e.send();
            }
          },
          getFrames: function () {
            return r;
          },
        };
      };
    a.SuperGif = g;
  })(window),
  (function (a) {
    "object" == typeof exports
      ? (module.exports = a())
      : "function" == typeof define && define.amd
      ? define(a)
      : "undefined" != typeof window
      ? (window.JSZip = a())
      : "undefined" != typeof global
      ? (global.JSZip = a())
      : "undefined" != typeof self && (self.JSZip = a());
  })(function () {
    return (function a(b, c, d) {
      function e(g, h) {
        if (!c[g]) {
          if (!b[g]) {
            var i = "function" == typeof require && require;
            if (!h && i) return i(g, !0);
            if (f) return f(g, !0);
            throw new Error("Cannot find module '" + g + "'");
          }
          var j = (c[g] = { exports: {} });
          b[g][0].call(
            j.exports,
            function (a) {
              var c = b[g][1][a];
              return e(c || a);
            },
            j,
            j.exports,
            a,
            b,
            c,
            d
          );
        }
        return c[g].exports;
      }
      for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
      return e;
    })(
      {
        1: [
          function (a, b, c) {
            "use strict";
            var d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            (c.encode = function (a) {
              for (var b, c, e, f, g, h, i, j = "", k = 0; k < a.length; )
                (b = a.charCodeAt(k++)),
                  (c = a.charCodeAt(k++)),
                  (e = a.charCodeAt(k++)),
                  (f = b >> 2),
                  (g = ((3 & b) << 4) | (c >> 4)),
                  (h = ((15 & c) << 2) | (e >> 6)),
                  (i = 63 & e),
                  isNaN(c) ? (h = i = 64) : isNaN(e) && (i = 64),
                  (j = j + d.charAt(f) + d.charAt(g) + d.charAt(h) + d.charAt(i));
              return j;
            }),
              (c.decode = function (a) {
                var b,
                  c,
                  e,
                  f,
                  g,
                  h,
                  i,
                  j = "",
                  k = 0;
                for (a = a.replace(/[^A-Za-z0-9\+\/\=]/g, ""); k < a.length; )
                  (f = d.indexOf(a.charAt(k++))),
                    (g = d.indexOf(a.charAt(k++))),
                    (h = d.indexOf(a.charAt(k++))),
                    (i = d.indexOf(a.charAt(k++))),
                    (b = (f << 2) | (g >> 4)),
                    (c = ((15 & g) << 4) | (h >> 2)),
                    (e = ((3 & h) << 6) | i),
                    (j += String.fromCharCode(b)),
                    64 != h && (j += String.fromCharCode(c)),
                    64 != i && (j += String.fromCharCode(e));
                return j;
              });
          },
          {},
        ],
        2: [
          function (a, b) {
            "use strict";
            function c() {
              (this.compressedSize = 0), (this.uncompressedSize = 0), (this.crc32 = 0), (this.compressionMethod = null), (this.compressedContent = null);
            }
            (c.prototype = {
              getContent: function () {
                return null;
              },
              getCompressedContent: function () {
                return null;
              },
            }),
              (b.exports = c);
          },
          {},
        ],
        3: [
          function (a, b, c) {
            "use strict";
            (c.STORE = {
              magic: "\0\0",
              compress: function (a) {
                return a;
              },
              uncompress: function (a) {
                return a;
              },
              compressInputType: null,
              uncompressInputType: null,
            }),
              (c.DEFLATE = a("./flate"));
          },
          { "./flate": 6 },
        ],
        4: [
          function (a, b) {
            "use strict";
            function c() {
              (this.data = null), (this.length = 0), (this.index = 0);
            }
            var d = a("./utils");
            (c.prototype = {
              checkOffset: function (a) {
                this.checkIndex(this.index + a);
              },
              checkIndex: function (a) {
                if (this.length < a || 0 > a) throw new Error("End of data reached (data length = " + this.length + ", asked index = " + a + "). Corrupted zip ?");
              },
              setIndex: function (a) {
                this.checkIndex(a), (this.index = a);
              },
              skip: function (a) {
                this.setIndex(this.index + a);
              },
              byteAt: function () {},
              readInt: function (a) {
                var b,
                  c = 0;
                for (this.checkOffset(a), b = this.index + a - 1; b >= this.index; b--) c = (c << 8) + this.byteAt(b);
                return (this.index += a), c;
              },
              readString: function (a) {
                return d.transformTo("string", this.readData(a));
              },
              readData: function () {},
              lastIndexOfSignature: function () {},
              readDate: function () {
                var a = this.readInt(4);
                return new Date(1980 + ((a >> 25) & 127), ((a >> 21) & 15) - 1, (a >> 16) & 31, (a >> 11) & 31, (a >> 5) & 63, (31 & a) << 1);
              },
            }),
              (b.exports = c);
          },
          { "./utils": 14 },
        ],
        5: [
          function (a, b, c) {
            "use strict";
            (c.base64 = !1), (c.binary = !1), (c.dir = !1), (c.date = null), (c.compression = null);
          },
          {},
        ],
        6: [
          function (a, b, c) {
            "use strict";
            var d = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array,
              e = a("zlibjs/bin/rawdeflate.min").Zlib,
              f = a("zlibjs/bin/rawinflate.min").Zlib;
            (c.uncompressInputType = d ? "uint8array" : "array"),
              (c.compressInputType = d ? "uint8array" : "array"),
              (c.magic = "\b\0"),
              (c.compress = function (a) {
                return new e.RawDeflate(a).compress();
              }),
              (c.uncompress = function (a) {
                return new f.RawInflate(a).decompress();
              });
          },
          { "zlibjs/bin/rawdeflate.min": 19, "zlibjs/bin/rawinflate.min": 20 },
        ],
        7: [
          function (a, b) {
            "use strict";
            function c(a, b) {
              return this instanceof c
                ? ((this.files = {}),
                  (this.root = ""),
                  a && this.load(a, b),
                  void (this.clone = function () {
                    var a = new c();
                    for (var b in this) "function" != typeof this[b] && (a[b] = this[b]);
                    return a;
                  }))
                : new c(a, b);
            }
            (c.prototype = a("./object")),
              (c.prototype.load = a("./load")),
              (c.support = a("./support")),
              (c.defaults = a("./defaults")),
              (c.utils = a("./utils")),
              (c.base64 = a("./base64")),
              (c.compressions = a("./compressions")),
              (b.exports = c);
          },
          { "./base64": 1, "./compressions": 3, "./defaults": 5, "./load": 8, "./object": 9, "./support": 12, "./utils": 14 },
        ],
        8: [
          function (a, b) {
            "use strict";
            var c = a("./base64"),
              d = a("./zipEntries");
            b.exports = function (a, b) {
              var e, f, g, h;
              for (b = b || {}, b.base64 && (a = c.decode(a)), f = new d(a, b), e = f.files, g = 0; g < e.length; g++) (h = e[g]), this.file(h.fileName, h.decompressed, { binary: !0, optimizedBinaryString: !0, date: h.date, dir: h.dir });
              return this;
            };
          },
          { "./base64": 1, "./zipEntries": 15 },
        ],
        9: [
          function (a, b) {
            "use strict";
            var c,
              d,
              e = a("./support"),
              f = a("./utils"),
              g = a("./signature"),
              h = a("./defaults"),
              i = a("./base64"),
              j = a("./compressions"),
              k = a("./compressedObject"),
              l = a("./nodeBuffer");
            e.uint8array && "function" == typeof TextEncoder && "function" == typeof TextDecoder && ((c = new TextEncoder("utf-8")), (d = new TextDecoder("utf-8")));
            var m = function (a) {
                if (a._data instanceof k && ((a._data = a._data.getContent()), (a.options.binary = !0), (a.options.base64 = !1), "uint8array" === f.getTypeOf(a._data))) {
                  var b = a._data;
                  (a._data = new Uint8Array(b.length)), 0 !== b.length && a._data.set(b, 0);
                }
                return a._data;
              },
              n = function (a) {
                var b = m(a);
                if ("string" === f.getTypeOf(b)) {
                  if (!a.options.binary) {
                    if (c) return c.encode(b);
                    if (e.nodebuffer) return l(b, "utf-8");
                  }
                  return a.asBinary();
                }
                return b;
              },
              o = function (a) {
                var b = m(this);
                return null === b || void 0 === b ? "" : (this.options.base64 && (b = i.decode(b)), (b = a && this.options.binary ? A.utf8decode(b) : f.transformTo("string", b)), a || this.options.binary || (b = A.utf8encode(b)), b);
              },
              p = function (a, b, c) {
                (this.name = a), (this._data = b), (this.options = c);
              };
            p.prototype = {
              asText: function () {
                return o.call(this, !0);
              },
              asBinary: function () {
                return o.call(this, !1);
              },
              asNodeBuffer: function () {
                var a = n(this);
                return f.transformTo("nodebuffer", a);
              },
              asUint8Array: function () {
                var a = n(this);
                return f.transformTo("uint8array", a);
              },
              asArrayBuffer: function () {
                return this.asUint8Array().buffer;
              },
            };
            var q = function (a, b) {
                var c,
                  d = "";
                for (c = 0; b > c; c++) (d += String.fromCharCode(255 & a)), (a >>>= 8);
                return d;
              },
              r = function () {
                var a,
                  b,
                  c = {};
                for (a = 0; a < arguments.length; a++) for (b in arguments[a]) arguments[a].hasOwnProperty(b) && void 0 === c[b] && (c[b] = arguments[a][b]);
                return c;
              },
              s = function (a) {
                return (
                  (a = a || {}), !0 !== a.base64 || (null !== a.binary && void 0 !== a.binary) || (a.binary = !0), (a = r(a, h)), (a.date = a.date || new Date()), null !== a.compression && (a.compression = a.compression.toUpperCase()), a
                );
              },
              t = function (a, b, c) {
                var d = u(a),
                  e = f.getTypeOf(b);
                if ((d && v.call(this, d), (c = s(c)), c.dir || null === b || void 0 === b)) (c.base64 = !1), (c.binary = !1), (b = null);
                else if ("string" === e) c.binary && !c.base64 && !0 !== c.optimizedBinaryString && (b = f.string2binary(b));
                else {
                  if (((c.base64 = !1), (c.binary = !0), !(e || b instanceof k))) throw new Error("The data of '" + a + "' is in an unsupported format !");
                  "arraybuffer" === e && (b = f.transformTo("uint8array", b));
                }
                var g = new p(a, b, c);
                return (this.files[a] = g), g;
              },
              u = function (a) {
                "/" == a.slice(-1) && (a = a.substring(0, a.length - 1));
                var b = a.lastIndexOf("/");
                return b > 0 ? a.substring(0, b) : "";
              },
              v = function (a) {
                return "/" != a.slice(-1) && (a += "/"), this.files[a] || t.call(this, a, null, { dir: !0 }), this.files[a];
              },
              w = function (a, b) {
                var c,
                  d = new k();
                return (
                  a._data instanceof k
                    ? ((d.uncompressedSize = a._data.uncompressedSize),
                      (d.crc32 = a._data.crc32),
                      0 === d.uncompressedSize || a.options.dir
                        ? ((b = j.STORE), (d.compressedContent = ""), (d.crc32 = 0))
                        : a._data.compressionMethod === b.magic
                        ? (d.compressedContent = a._data.getCompressedContent())
                        : ((c = a._data.getContent()), (d.compressedContent = b.compress(f.transformTo(b.compressInputType, c)))))
                    : ((c = n(a)), (!c || 0 === c.length || a.options.dir) && ((b = j.STORE), (c = "")), (d.uncompressedSize = c.length), (d.crc32 = this.crc32(c)), (d.compressedContent = b.compress(f.transformTo(b.compressInputType, c)))),
                  (d.compressedSize = d.compressedContent.length),
                  (d.compressionMethod = b.magic),
                  d
                );
              },
              x = function (a, b, c, d) {
                var e,
                  f,
                  h = (c.compressedContent, this.utf8encode(b.name)),
                  i = h !== b.name,
                  j = b.options,
                  k = "",
                  l = "";
                (e = j.date.getHours()),
                  (e <<= 6),
                  (e |= j.date.getMinutes()),
                  (e <<= 5),
                  (e |= j.date.getSeconds() / 2),
                  (f = j.date.getFullYear() - 1980),
                  (f <<= 4),
                  (f |= j.date.getMonth() + 1),
                  (f <<= 5),
                  (f |= j.date.getDate()),
                  i && ((l = q(1, 1) + q(this.crc32(h), 4) + h), (k += "up" + q(l.length, 2) + l));
                var m = "";
                return (
                  (m += "\n\0"),
                  (m += i ? "\0\b" : "\0\0"),
                  (m += c.compressionMethod),
                  (m += q(e, 2)),
                  (m += q(f, 2)),
                  (m += q(c.crc32, 4)),
                  (m += q(c.compressedSize, 4)),
                  (m += q(c.uncompressedSize, 4)),
                  (m += q(h.length, 2)),
                  (m += q(k.length, 2)),
                  { fileRecord: g.LOCAL_FILE_HEADER + m + h + k, dirRecord: g.CENTRAL_FILE_HEADER + "\0" + m + "\0\0\0\0\0\0" + (!0 === b.options.dir ? "\0\0\0" : "\0\0\0\0") + q(d, 4) + h + k, compressedObject: c }
                );
              },
              y = function () {
                this.data = [];
              };
            y.prototype = {
              append: function (a) {
                (a = f.transformTo("string", a)), this.data.push(a);
              },
              finalize: function () {
                return this.data.join("");
              },
            };
            var z = function (a) {
              (this.data = new Uint8Array(a)), (this.index = 0);
            };
            z.prototype = {
              append: function (a) {
                0 !== a.length && ((a = f.transformTo("uint8array", a)), this.data.set(a, this.index), (this.index += a.length));
              },
              finalize: function () {
                return this.data;
              },
            };
            var A = {
              load: function () {
                throw new Error("Load method is not defined. Is the file jszip-load.js included ?");
              },
              filter: function (a) {
                var b,
                  c,
                  d,
                  e,
                  f = [];
                for (b in this.files)
                  this.files.hasOwnProperty(b) && ((d = this.files[b]), (e = new p(d.name, d._data, r(d.options))), (c = b.slice(this.root.length, b.length)), b.slice(0, this.root.length) === this.root && a(c, e) && f.push(e));
                return f;
              },
              file: function (a, b, c) {
                if (1 === arguments.length) {
                  if (f.isRegExp(a)) {
                    var d = a;
                    return this.filter(function (a, b) {
                      return !b.options.dir && d.test(a);
                    });
                  }
                  return (
                    this.filter(function (b, c) {
                      return !c.options.dir && b === a;
                    })[0] || null
                  );
                }
                return (a = this.root + a), t.call(this, a, b, c), this;
              },
              folder: function (a) {
                if (!a) return this;
                if (f.isRegExp(a))
                  return this.filter(function (b, c) {
                    return c.options.dir && a.test(b);
                  });
                var b = this.root + a,
                  c = v.call(this, b),
                  d = this.clone();
                return (d.root = c.name), d;
              },
              remove: function (a) {
                a = this.root + a;
                var b = this.files[a];
                if ((b || ("/" != a.slice(-1) && (a += "/"), (b = this.files[a])), b))
                  if (b.options.dir)
                    for (
                      var c = this.filter(function (b, c) {
                          return c.name.slice(0, a.length) === a;
                        }),
                        d = 0;
                      d < c.length;
                      d++
                    )
                      delete this.files[c[d].name];
                  else delete this.files[a];
                return this;
              },
              generate: function (a) {
                (a = r(a || {}, { base64: !0, compression: "STORE", type: "base64" })), f.checkSupport(a.type);
                var b,
                  c,
                  d = [],
                  e = 0,
                  h = 0;
                for (var k in this.files)
                  if (this.files.hasOwnProperty(k)) {
                    var l = this.files[k],
                      m = l.options.compression || a.compression.toUpperCase(),
                      n = j[m];
                    if (!n) throw new Error(m + " is not a valid compression method !");
                    var o = w.call(this, l, n),
                      p = x.call(this, k, l, o, e);
                    (e += p.fileRecord.length + o.compressedSize), (h += p.dirRecord.length), d.push(p);
                  }
                var s = "";
                s = g.CENTRAL_DIRECTORY_END + "\0\0\0\0" + q(d.length, 2) + q(d.length, 2) + q(h, 4) + q(e, 4) + "\0\0";
                var t = a.type.toLowerCase();
                for (b = "uint8array" === t || "arraybuffer" === t || "blob" === t || "nodebuffer" === t ? new z(e + h + s.length) : new y(e + h + s.length), c = 0; c < d.length; c++)
                  b.append(d[c].fileRecord), b.append(d[c].compressedObject.compressedContent);
                for (c = 0; c < d.length; c++) b.append(d[c].dirRecord);
                b.append(s);
                var u = b.finalize();
                switch (a.type.toLowerCase()) {
                  case "uint8array":
                  case "arraybuffer":
                  case "nodebuffer":
                    return f.transformTo(a.type.toLowerCase(), u);
                  case "blob":
                    return f.arrayBuffer2Blob(f.transformTo("arraybuffer", u));
                  case "base64":
                    return a.base64 ? i.encode(u) : u;
                  default:
                    return u;
                }
              },
              crc32: function (a, b) {
                if (void 0 === a || !a.length) return 0;
                var c = "string" !== f.getTypeOf(a),
                  d = [
                    0,
                    1996959894,
                    3993919788,
                    2567524794,
                    124634137,
                    1886057615,
                    3915621685,
                    2657392035,
                    249268274,
                    2044508324,
                    3772115230,
                    2547177864,
                    162941995,
                    2125561021,
                    3887607047,
                    2428444049,
                    498536548,
                    1789927666,
                    4089016648,
                    2227061214,
                    450548861,
                    1843258603,
                    4107580753,
                    2211677639,
                    325883990,
                    1684777152,
                    4251122042,
                    2321926636,
                    335633487,
                    1661365465,
                    4195302755,
                    2366115317,
                    997073096,
                    1281953886,
                    3579855332,
                    2724688242,
                    1006888145,
                    1258607687,
                    3524101629,
                    2768942443,
                    901097722,
                    1119000684,
                    3686517206,
                    2898065728,
                    853044451,
                    1172266101,
                    3705015759,
                    2882616665,
                    651767980,
                    1373503546,
                    3369554304,
                    3218104598,
                    565507253,
                    1454621731,
                    3485111705,
                    3099436303,
                    671266974,
                    1594198024,
                    3322730930,
                    2970347812,
                    795835527,
                    1483230225,
                    3244367275,
                    3060149565,
                    1994146192,
                    31158534,
                    2563907772,
                    4023717930,
                    1907459465,
                    112637215,
                    2680153253,
                    3904427059,
                    2013776290,
                    251722036,
                    2517215374,
                    3775830040,
                    2137656763,
                    141376813,
                    2439277719,
                    3865271297,
                    1802195444,
                    476864866,
                    2238001368,
                    4066508878,
                    1812370925,
                    453092731,
                    2181625025,
                    4111451223,
                    1706088902,
                    314042704,
                    2344532202,
                    4240017532,
                    1658658271,
                    366619977,
                    2362670323,
                    4224994405,
                    1303535960,
                    984961486,
                    2747007092,
                    3569037538,
                    1256170817,
                    1037604311,
                    2765210733,
                    3554079995,
                    1131014506,
                    879679996,
                    2909243462,
                    3663771856,
                    1141124467,
                    855842277,
                    2852801631,
                    3708648649,
                    1342533948,
                    654459306,
                    3188396048,
                    3373015174,
                    1466479909,
                    544179635,
                    3110523913,
                    3462522015,
                    1591671054,
                    702138776,
                    2966460450,
                    3352799412,
                    1504918807,
                    783551873,
                    3082640443,
                    3233442989,
                    3988292384,
                    2596254646,
                    62317068,
                    1957810842,
                    3939845945,
                    2647816111,
                    81470997,
                    1943803523,
                    3814918930,
                    2489596804,
                    225274430,
                    2053790376,
                    3826175755,
                    2466906013,
                    167816743,
                    2097651377,
                    4027552580,
                    2265490386,
                    503444072,
                    1762050814,
                    4150417245,
                    2154129355,
                    426522225,
                    1852507879,
                    4275313526,
                    2312317920,
                    282753626,
                    1742555852,
                    4189708143,
                    2394877945,
                    397917763,
                    1622183637,
                    3604390888,
                    2714866558,
                    953729732,
                    1340076626,
                    3518719985,
                    2797360999,
                    1068828381,
                    1219638859,
                    3624741850,
                    2936675148,
                    906185462,
                    1090812512,
                    3747672003,
                    2825379669,
                    829329135,
                    1181335161,
                    3412177804,
                    3160834842,
                    628085408,
                    1382605366,
                    3423369109,
                    3138078467,
                    570562233,
                    1426400815,
                    3317316542,
                    2998733608,
                    733239954,
                    1555261956,
                    3268935591,
                    3050360625,
                    752459403,
                    1541320221,
                    2607071920,
                    3965973030,
                    1969922972,
                    40735498,
                    2617837225,
                    3943577151,
                    1913087877,
                    83908371,
                    2512341634,
                    3803740692,
                    2075208622,
                    213261112,
                    2463272603,
                    3855990285,
                    2094854071,
                    198958881,
                    2262029012,
                    4057260610,
                    1759359992,
                    534414190,
                    2176718541,
                    4139329115,
                    1873836001,
                    414664567,
                    2282248934,
                    4279200368,
                    1711684554,
                    285281116,
                    2405801727,
                    4167216745,
                    1634467795,
                    376229701,
                    2685067896,
                    3608007406,
                    1308918612,
                    956543938,
                    2808555105,
                    3495958263,
                    1231636301,
                    1047427035,
                    2932959818,
                    3654703836,
                    1088359270,
                    936918e3,
                    2847714899,
                    3736837829,
                    1202900863,
                    817233897,
                    3183342108,
                    3401237130,
                    1404277552,
                    615818150,
                    3134207493,
                    3453421203,
                    1423857449,
                    601450431,
                    3009837614,
                    3294710456,
                    1567103746,
                    711928724,
                    3020668471,
                    3272380065,
                    1510334235,
                    755167117,
                  ];
                void 0 === b && (b = 0);
                var e = 0,
                  g = 0,
                  h = 0;
                b ^= -1;
                for (var i = 0, j = a.length; j > i; i++) (h = c ? a[i] : a.charCodeAt(i)), (g = 255 & (b ^ h)), (e = d[g]), (b = (b >>> 8) ^ e);
                return -1 ^ b;
              },
              utf8encode: function (a) {
                if (c) {
                  var b = c.encode(a);
                  return f.transformTo("string", b);
                }
                if (e.nodebuffer) return f.transformTo("string", l(a, "utf-8"));
                for (var d = [], g = 0, h = 0; h < a.length; h++) {
                  var i = a.charCodeAt(h);
                  128 > i
                    ? (d[g++] = String.fromCharCode(i))
                    : i > 127 && 2048 > i
                    ? ((d[g++] = String.fromCharCode((i >> 6) | 192)), (d[g++] = String.fromCharCode((63 & i) | 128)))
                    : ((d[g++] = String.fromCharCode((i >> 12) | 224)), (d[g++] = String.fromCharCode(((i >> 6) & 63) | 128)), (d[g++] = String.fromCharCode((63 & i) | 128)));
                }
                return d.join("");
              },
              utf8decode: function (a) {
                var b = [],
                  c = 0,
                  g = f.getTypeOf(a),
                  h = "string" !== g,
                  i = 0,
                  j = 0,
                  k = 0,
                  l = 0;
                if (d) return d.decode(f.transformTo("uint8array", a));
                if (e.nodebuffer) return f.transformTo("nodebuffer", a).toString("utf-8");
                for (; i < a.length; )
                  (j = h ? a[i] : a.charCodeAt(i)),
                    128 > j
                      ? ((b[c++] = String.fromCharCode(j)), i++)
                      : j > 191 && 224 > j
                      ? ((k = h ? a[i + 1] : a.charCodeAt(i + 1)), (b[c++] = String.fromCharCode(((31 & j) << 6) | (63 & k))), (i += 2))
                      : ((k = h ? a[i + 1] : a.charCodeAt(i + 1)), (l = h ? a[i + 2] : a.charCodeAt(i + 2)), (b[c++] = String.fromCharCode(((15 & j) << 12) | ((63 & k) << 6) | (63 & l))), (i += 3));
                return b.join("");
              },
            };
            b.exports = A;
          },
          { "./base64": 1, "./compressedObject": 2, "./compressions": 3, "./defaults": 5, "./nodeBuffer": 17, "./signature": 10, "./support": 12, "./utils": 14 },
        ],
        10: [
          function (a, b, c) {
            "use strict";
            (c.LOCAL_FILE_HEADER = "PK"), (c.CENTRAL_FILE_HEADER = "PK"), (c.CENTRAL_DIRECTORY_END = "PK"), (c.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK"), (c.ZIP64_CENTRAL_DIRECTORY_END = "PK"), (c.DATA_DESCRIPTOR = "PK\b");
          },
          {},
        ],
        11: [
          function (a, b) {
            "use strict";
            function c(a, b) {
              (this.data = a), b || (this.data = e.string2binary(this.data)), (this.length = this.data.length), (this.index = 0);
            }
            var d = a("./dataReader"),
              e = a("./utils");
            (c.prototype = new d()),
              (c.prototype.byteAt = function (a) {
                return this.data.charCodeAt(a);
              }),
              (c.prototype.lastIndexOfSignature = function (a) {
                return this.data.lastIndexOf(a);
              }),
              (c.prototype.readData = function (a) {
                this.checkOffset(a);
                var b = this.data.slice(this.index, this.index + a);
                return (this.index += a), b;
              }),
              (b.exports = c);
          },
          { "./dataReader": 4, "./utils": 14 },
        ],
        12: [
          function (a, b, c) {
            var d = a("__browserify_process");
            if (
              ((c.base64 = !0),
              (c.array = !0),
              (c.string = !0),
              (c.arraybuffer = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array),
              (c.nodebuffer = !d.browser),
              (c.uint8array = "undefined" != typeof Uint8Array),
              "undefined" == typeof ArrayBuffer)
            )
              c.blob = !1;
            else {
              var e = new ArrayBuffer(0);
              try {
                c.blob = 0 === new Blob([e], { type: "application/zip" }).size;
              } catch (a) {
                try {
                  var f = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder,
                    g = new f();
                  g.append(e), (c.blob = 0 === g.getBlob("application/zip").size);
                } catch (a) {
                  c.blob = !1;
                }
              }
            }
          },
          { __browserify_process: 18 },
        ],
        13: [
          function (a, b) {
            "use strict";
            function c(a) {
              a && ((this.data = a), (this.length = this.data.length), (this.index = 0));
            }
            var d = a("./dataReader");
            (c.prototype = new d()),
              (c.prototype.byteAt = function (a) {
                return this.data[a];
              }),
              (c.prototype.lastIndexOfSignature = function (a) {
                for (var b = a.charCodeAt(0), c = a.charCodeAt(1), d = a.charCodeAt(2), e = a.charCodeAt(3), f = this.length - 4; f >= 0; --f)
                  if (this.data[f] === b && this.data[f + 1] === c && this.data[f + 2] === d && this.data[f + 3] === e) return f;
                return -1;
              }),
              (c.prototype.readData = function (a) {
                this.checkOffset(a);
                var b = this.data.subarray(this.index, this.index + a);
                return (this.index += a), b;
              }),
              (b.exports = c);
          },
          { "./dataReader": 4 },
        ],
        14: [
          function (a, b, c) {
            "use strict";
            function d(a) {
              return a;
            }
            function e(a, b) {
              for (var c = 0; c < a.length; ++c) b[c] = 255 & a.charCodeAt(c);
              return b;
            }
            function f(a) {
              var b = 65536,
                d = [],
                e = a.length,
                f = c.getTypeOf(a),
                g = 0,
                h = !0;
              try {
                switch (f) {
                  case "uint8array":
                    String.fromCharCode.apply(null, new Uint8Array(0));
                    break;
                  case "nodebuffer":
                    String.fromCharCode.apply(null, j(0));
                }
              } catch (a) {
                h = !1;
              }
              if (!h) {
                for (var i = "", k = 0; k < a.length; k++) i += String.fromCharCode(a[k]);
                return i;
              }
              for (; e > g && b > 1; )
                try {
                  d.push("array" === f || "nodebuffer" === f ? String.fromCharCode.apply(null, a.slice(g, Math.min(g + b, e))) : String.fromCharCode.apply(null, a.subarray(g, Math.min(g + b, e)))), (g += b);
                } catch (a) {
                  b = Math.floor(b / 2);
                }
              return d.join("");
            }
            function g(a, b) {
              for (var c = 0; c < a.length; c++) b[c] = a[c];
              return b;
            }
            var h = a("./support"),
              i = a("./compressions"),
              j = a("./nodeBuffer");
            (c.string2binary = function (a) {
              for (var b = "", c = 0; c < a.length; c++) b += String.fromCharCode(255 & a.charCodeAt(c));
              return b;
            }),
              (c.string2Uint8Array = function (a) {
                return c.transformTo("uint8array", a);
              }),
              (c.uint8Array2String = function (a) {
                return c.transformTo("string", a);
              }),
              (c.string2Blob = function (a) {
                var b = c.transformTo("arraybuffer", a);
                return c.arrayBuffer2Blob(b);
              }),
              (c.arrayBuffer2Blob = function (a) {
                c.checkSupport("blob");
                try {
                  return new Blob([a], { type: "application/zip" });
                } catch (c) {
                  try {
                    var b = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder,
                      d = new b();
                    return d.append(a), d.getBlob("application/zip");
                  } catch (a) {
                    throw new Error("Bug : can't construct the Blob.");
                  }
                }
              });
            var k = {};
            (k.string = {
              string: d,
              array: function (a) {
                return e(a, new Array(a.length));
              },
              arraybuffer: function (a) {
                return k.string.uint8array(a).buffer;
              },
              uint8array: function (a) {
                return e(a, new Uint8Array(a.length));
              },
              nodebuffer: function (a) {
                return e(a, j(a.length));
              },
            }),
              (k.array = {
                string: f,
                array: d,
                arraybuffer: function (a) {
                  return new Uint8Array(a).buffer;
                },
                uint8array: function (a) {
                  return new Uint8Array(a);
                },
                nodebuffer: function (a) {
                  return j(a);
                },
              }),
              (k.arraybuffer = {
                string: function (a) {
                  return f(new Uint8Array(a));
                },
                array: function (a) {
                  return g(new Uint8Array(a), new Array(a.byteLength));
                },
                arraybuffer: d,
                uint8array: function (a) {
                  return new Uint8Array(a);
                },
                nodebuffer: function (a) {
                  return j(new Uint8Array(a));
                },
              }),
              (k.uint8array = {
                string: f,
                array: function (a) {
                  return g(a, new Array(a.length));
                },
                arraybuffer: function (a) {
                  return a.buffer;
                },
                uint8array: d,
                nodebuffer: function (a) {
                  return j(a);
                },
              }),
              (k.nodebuffer = {
                string: f,
                array: function (a) {
                  return g(a, new Array(a.length));
                },
                arraybuffer: function (a) {
                  return k.nodebuffer.uint8array(a).buffer;
                },
                uint8array: function (a) {
                  return g(a, new Uint8Array(a.length));
                },
                nodebuffer: d,
              }),
              (c.transformTo = function (a, b) {
                if ((b || (b = ""), !a)) return b;
                c.checkSupport(a);
                var d = c.getTypeOf(b);
                return k[d][a](b);
              }),
              (c.getTypeOf = function (a) {
                return "string" == typeof a
                  ? "string"
                  : "[object Array]" === Object.prototype.toString.call(a)
                  ? "array"
                  : h.nodebuffer && j.test(a)
                  ? "nodebuffer"
                  : h.uint8array && a instanceof Uint8Array
                  ? "uint8array"
                  : h.arraybuffer && a instanceof ArrayBuffer
                  ? "arraybuffer"
                  : void 0;
              }),
              (c.checkSupport = function (a) {
                if (!h[a.toLowerCase()]) throw new Error(a + " is not supported by this browser");
              }),
              (c.MAX_VALUE_16BITS = 65535),
              (c.MAX_VALUE_32BITS = -1),
              (c.pretty = function (a) {
                var b,
                  c,
                  d = "";
                for (c = 0; c < (a || "").length; c++) (b = a.charCodeAt(c)), (d += "\\x" + (16 > b ? "0" : "") + b.toString(16).toUpperCase());
                return d;
              }),
              (c.findCompression = function (a) {
                for (var b in i) if (i.hasOwnProperty(b) && i[b].magic === a) return i[b];
                return null;
              }),
              (c.isRegExp = function (a) {
                return "[object RegExp]" === Object.prototype.toString.call(a);
              });
          },
          { "./compressions": 3, "./nodeBuffer": 17, "./support": 12 },
        ],
        15: [
          function (a, b) {
            "use strict";
            function c(a, b) {
              (this.files = []), (this.loadOptions = b), a && this.load(a);
            }
            var d = a("./stringReader"),
              e = a("./nodeBufferReader"),
              f = a("./uint8ArrayReader"),
              g = a("./utils"),
              h = a("./signature"),
              i = a("./zipEntry"),
              j = a("./support");
            (c.prototype = {
              checkSignature: function (a) {
                var b = this.reader.readString(4);
                if (b !== a) throw new Error("Corrupted zip or bug : unexpected signature (" + g.pretty(b) + ", expected " + g.pretty(a) + ")");
              },
              readBlockEndOfCentral: function () {
                (this.diskNumber = this.reader.readInt(2)),
                  (this.diskWithCentralDirStart = this.reader.readInt(2)),
                  (this.centralDirRecordsOnThisDisk = this.reader.readInt(2)),
                  (this.centralDirRecords = this.reader.readInt(2)),
                  (this.centralDirSize = this.reader.readInt(4)),
                  (this.centralDirOffset = this.reader.readInt(4)),
                  (this.zipCommentLength = this.reader.readInt(2)),
                  (this.zipComment = this.reader.readString(this.zipCommentLength));
              },
              readBlockZip64EndOfCentral: function () {
                (this.zip64EndOfCentralSize = this.reader.readInt(8)),
                  (this.versionMadeBy = this.reader.readString(2)),
                  (this.versionNeeded = this.reader.readInt(2)),
                  (this.diskNumber = this.reader.readInt(4)),
                  (this.diskWithCentralDirStart = this.reader.readInt(4)),
                  (this.centralDirRecordsOnThisDisk = this.reader.readInt(8)),
                  (this.centralDirRecords = this.reader.readInt(8)),
                  (this.centralDirSize = this.reader.readInt(8)),
                  (this.centralDirOffset = this.reader.readInt(8)),
                  (this.zip64ExtensibleData = {});
                for (var a, b, c, d = this.zip64EndOfCentralSize - 44; d > 0; ) (a = this.reader.readInt(2)), (b = this.reader.readInt(4)), (c = this.reader.readString(b)), (this.zip64ExtensibleData[a] = { id: a, length: b, value: c });
              },
              readBlockZip64EndOfCentralLocator: function () {
                if (((this.diskWithZip64CentralDirStart = this.reader.readInt(4)), (this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8)), (this.disksCount = this.reader.readInt(4)), this.disksCount > 1))
                  throw new Error("Multi-volumes zip are not supported");
              },
              readLocalFiles: function () {
                var a, b;
                for (a = 0; a < this.files.length; a++) (b = this.files[a]), this.reader.setIndex(b.localHeaderOffset), this.checkSignature(h.LOCAL_FILE_HEADER), b.readLocalPart(this.reader), b.handleUTF8();
              },
              readCentralDir: function () {
                var a;
                for (this.reader.setIndex(this.centralDirOffset); this.reader.readString(4) === h.CENTRAL_FILE_HEADER; ) (a = new i({ zip64: this.zip64 }, this.loadOptions)), a.readCentralPart(this.reader), this.files.push(a);
              },
              readEndOfCentral: function () {
                var a = this.reader.lastIndexOfSignature(h.CENTRAL_DIRECTORY_END);
                if (-1 === a) throw new Error("Corrupted zip : can't find end of central directory");
                if (
                  (this.reader.setIndex(a),
                  this.checkSignature(h.CENTRAL_DIRECTORY_END),
                  this.readBlockEndOfCentral(),
                  this.diskNumber === g.MAX_VALUE_16BITS ||
                    this.diskWithCentralDirStart === g.MAX_VALUE_16BITS ||
                    this.centralDirRecordsOnThisDisk === g.MAX_VALUE_16BITS ||
                    this.centralDirRecords === g.MAX_VALUE_16BITS ||
                    this.centralDirSize === g.MAX_VALUE_32BITS ||
                    this.centralDirOffset === g.MAX_VALUE_32BITS)
                ) {
                  if (((this.zip64 = !0), -1 === (a = this.reader.lastIndexOfSignature(h.ZIP64_CENTRAL_DIRECTORY_LOCATOR)))) throw new Error("Corrupted zip : can't find the ZIP64 end of central directory locator");
                  this.reader.setIndex(a),
                    this.checkSignature(h.ZIP64_CENTRAL_DIRECTORY_LOCATOR),
                    this.readBlockZip64EndOfCentralLocator(),
                    this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),
                    this.checkSignature(h.ZIP64_CENTRAL_DIRECTORY_END),
                    this.readBlockZip64EndOfCentral();
                }
              },
              prepareReader: function (a) {
                var b = g.getTypeOf(a);
                this.reader = "string" !== b || j.uint8array ? ("nodebuffer" === b ? new e(a) : new f(g.transformTo("uint8array", a))) : new d(a, this.loadOptions.optimizedBinaryString);
              },
              load: function (a) {
                this.prepareReader(a), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
              },
            }),
              (b.exports = c);
          },
          { "./nodeBufferReader": 17, "./signature": 10, "./stringReader": 11, "./support": 12, "./uint8ArrayReader": 13, "./utils": 14, "./zipEntry": 16 },
        ],
        16: [
          function (a, b) {
            "use strict";
            function c(a, b) {
              (this.options = a), (this.loadOptions = b);
            }
            var d = a("./stringReader"),
              e = a("./utils"),
              f = a("./compressedObject"),
              g = a("./object");
            (c.prototype = {
              isEncrypted: function () {
                return 1 == (1 & this.bitFlag);
              },
              useUTF8: function () {
                return 2048 == (2048 & this.bitFlag);
              },
              prepareCompressedContent: function (a, b, c) {
                return function () {
                  var d = a.index;
                  a.setIndex(b);
                  var e = a.readData(c);
                  return a.setIndex(d), e;
                };
              },
              prepareContent: function (a, b, c, d, f) {
                return function () {
                  var a = e.transformTo(d.uncompressInputType, this.getCompressedContent()),
                    b = d.uncompress(a);
                  if (b.length !== f) throw new Error("Bug : uncompressed data size mismatch");
                  return b;
                };
              },
              readLocalPart: function (a) {
                var b, c;
                if ((a.skip(22), (this.fileNameLength = a.readInt(2)), (c = a.readInt(2)), (this.fileName = a.readString(this.fileNameLength)), a.skip(c), -1 == this.compressedSize || -1 == this.uncompressedSize))
                  throw new Error("Bug or corrupted zip : didn't get enough informations from the central directory (compressedSize == -1 || uncompressedSize == -1)");
                if (null === (b = e.findCompression(this.compressionMethod))) throw new Error("Corrupted zip : compression " + e.pretty(this.compressionMethod) + " unknown (inner file : " + this.fileName + ")");
                if (
                  ((this.decompressed = new f()),
                  (this.decompressed.compressedSize = this.compressedSize),
                  (this.decompressed.uncompressedSize = this.uncompressedSize),
                  (this.decompressed.crc32 = this.crc32),
                  (this.decompressed.compressionMethod = this.compressionMethod),
                  (this.decompressed.getCompressedContent = this.prepareCompressedContent(a, a.index, this.compressedSize, b)),
                  (this.decompressed.getContent = this.prepareContent(a, a.index, this.compressedSize, b, this.uncompressedSize)),
                  this.loadOptions.checkCRC32 && ((this.decompressed = e.transformTo("string", this.decompressed.getContent())), g.crc32(this.decompressed) !== this.crc32))
                )
                  throw new Error("Corrupted zip : CRC32 mismatch");
              },
              readCentralPart: function (a) {
                if (
                  ((this.versionMadeBy = a.readString(2)),
                  (this.versionNeeded = a.readInt(2)),
                  (this.bitFlag = a.readInt(2)),
                  (this.compressionMethod = a.readString(2)),
                  (this.date = a.readDate()),
                  (this.crc32 = a.readInt(4)),
                  (this.compressedSize = a.readInt(4)),
                  (this.uncompressedSize = a.readInt(4)),
                  (this.fileNameLength = a.readInt(2)),
                  (this.extraFieldsLength = a.readInt(2)),
                  (this.fileCommentLength = a.readInt(2)),
                  (this.diskNumberStart = a.readInt(2)),
                  (this.internalFileAttributes = a.readInt(2)),
                  (this.externalFileAttributes = a.readInt(4)),
                  (this.localHeaderOffset = a.readInt(4)),
                  this.isEncrypted())
                )
                  throw new Error("Encrypted zip are not supported");
                (this.fileName = a.readString(this.fileNameLength)), this.readExtraFields(a), this.parseZIP64ExtraField(a), (this.fileComment = a.readString(this.fileCommentLength)), (this.dir = !!(16 & this.externalFileAttributes));
              },
              parseZIP64ExtraField: function () {
                if (this.extraFields[1]) {
                  var a = new d(this.extraFields[1].value);
                  this.uncompressedSize === e.MAX_VALUE_32BITS && (this.uncompressedSize = a.readInt(8)),
                    this.compressedSize === e.MAX_VALUE_32BITS && (this.compressedSize = a.readInt(8)),
                    this.localHeaderOffset === e.MAX_VALUE_32BITS && (this.localHeaderOffset = a.readInt(8)),
                    this.diskNumberStart === e.MAX_VALUE_32BITS && (this.diskNumberStart = a.readInt(4));
                }
              },
              readExtraFields: function (a) {
                var b,
                  c,
                  d,
                  e = a.index;
                for (this.extraFields = this.extraFields || {}; a.index < e + this.extraFieldsLength; ) (b = a.readInt(2)), (c = a.readInt(2)), (d = a.readString(c)), (this.extraFields[b] = { id: b, length: c, value: d });
              },
              handleUTF8: function () {
                if (this.useUTF8()) (this.fileName = g.utf8decode(this.fileName)), (this.fileComment = g.utf8decode(this.fileComment));
                else {
                  var a = this.findExtraFieldUnicodePath();
                  null !== a && (this.fileName = a);
                }
              },
              findExtraFieldUnicodePath: function () {
                var a = this.extraFields[28789];
                if (a) {
                  var b = new d(a.value);
                  return 1 !== b.readInt(1) ? null : g.crc32(this.fileName) !== b.readInt(4) ? null : g.utf8decode(b.readString(a.length - 5));
                }
                return null;
              },
            }),
              (b.exports = c);
          },
          { "./compressedObject": 2, "./object": 9, "./stringReader": 11, "./utils": 14 },
        ],
        17: [function () {}, {}],
        18: [
          function (a, b) {
            var c = (b.exports = {});
            (c.nextTick = (function () {
              var a = "undefined" != typeof window && window.setImmediate,
                b = "undefined" != typeof window && window.postMessage && window.addEventListener;
              if (a)
                return function (a) {
                  return window.setImmediate(a);
                };
              if (b) {
                var c = [];
                return (
                  window.addEventListener(
                    "message",
                    function (a) {
                      var b = a.source;
                      if ((b === window || null === b) && "process-tick" === a.data && (a.stopPropagation(), c.length > 0)) {
                        c.shift()();
                      }
                    },
                    !0
                  ),
                  function (a) {
                    c.push(a), window.postMessage("process-tick", "*");
                  }
                );
              }
              return function (a) {
                setTimeout(a, 0);
              };
            })()),
              (c.title = "browser"),
              (c.browser = !0),
              (c.env = {}),
              (c.argv = []),
              (c.binding = function () {
                throw new Error("process.binding is not supported");
              }),
              (c.cwd = function () {
                return "/";
              }),
              (c.chdir = function () {
                throw new Error("process.chdir is not supported");
              });
          },
          {},
        ],
        19: [
          function () {
            (function () {
              "use strict";
              function a(a, b) {
                var c = a.split("."),
                  d = n;
                !(c[0] in d) && d.execScript && d.execScript("var " + c[0]);
                for (var e; c.length && (e = c.shift()); ) c.length || b === l ? (d = d[e] ? d[e] : (d[e] = {})) : (d[e] = b);
              }
              function b(a, b) {
                if (((this.index = "number" == typeof b ? b : 0), (this.d = 0), (this.buffer = a instanceof (o ? Uint8Array : Array) ? a : new (o ? Uint8Array : Array)(32768)), 2 * this.buffer.length <= this.index))
                  throw Error("invalid index");
                this.buffer.length <= this.index && c(this);
              }
              function c(a) {
                var b,
                  c = a.buffer,
                  d = c.length,
                  e = new (o ? Uint8Array : Array)(d << 1);
                if (o) e.set(c);
                else for (b = 0; d > b; ++b) e[b] = c[b];
                return (a.buffer = e);
              }
              function d(a) {
                (this.buffer = new (o ? Uint16Array : Array)(2 * a)), (this.length = 0);
              }
              function e(a, b) {
                (this.e = w),
                  (this.f = 0),
                  (this.input = o && a instanceof Array ? new Uint8Array(a) : a),
                  (this.c = 0),
                  b &&
                    (b.lazy && (this.f = b.lazy),
                    "number" == typeof b.compressionType && (this.e = b.compressionType),
                    b.outputBuffer && (this.b = o && b.outputBuffer instanceof Array ? new Uint8Array(b.outputBuffer) : b.outputBuffer),
                    "number" == typeof b.outputIndex && (this.c = b.outputIndex)),
                  this.b || (this.b = new (o ? Uint8Array : Array)(32768));
              }
              function f(a, b) {
                (this.length = a), (this.g = b);
              }
              function g(a, b) {
                function c(a, b) {
                  var c,
                    d = a.g,
                    e = [],
                    f = 0;
                  (c = z[a.length]), (e[f++] = 65535 & c), (e[f++] = (c >> 16) & 255), (e[f++] = c >> 24);
                  var g;
                  switch (m) {
                    case 1 === d:
                      g = [0, d - 1, 0];
                      break;
                    case 2 === d:
                      g = [1, d - 2, 0];
                      break;
                    case 3 === d:
                      g = [2, d - 3, 0];
                      break;
                    case 4 === d:
                      g = [3, d - 4, 0];
                      break;
                    case 6 >= d:
                      g = [4, d - 5, 1];
                      break;
                    case 8 >= d:
                      g = [5, d - 7, 1];
                      break;
                    case 12 >= d:
                      g = [6, d - 9, 2];
                      break;
                    case 16 >= d:
                      g = [7, d - 13, 2];
                      break;
                    case 24 >= d:
                      g = [8, d - 17, 3];
                      break;
                    case 32 >= d:
                      g = [9, d - 25, 3];
                      break;
                    case 48 >= d:
                      g = [10, d - 33, 4];
                      break;
                    case 64 >= d:
                      g = [11, d - 49, 4];
                      break;
                    case 96 >= d:
                      g = [12, d - 65, 5];
                      break;
                    case 128 >= d:
                      g = [13, d - 97, 5];
                      break;
                    case 192 >= d:
                      g = [14, d - 129, 6];
                      break;
                    case 256 >= d:
                      g = [15, d - 193, 6];
                      break;
                    case 384 >= d:
                      g = [16, d - 257, 7];
                      break;
                    case 512 >= d:
                      g = [17, d - 385, 7];
                      break;
                    case 768 >= d:
                      g = [18, d - 513, 8];
                      break;
                    case 1024 >= d:
                      g = [19, d - 769, 8];
                      break;
                    case 1536 >= d:
                      g = [20, d - 1025, 9];
                      break;
                    case 2048 >= d:
                      g = [21, d - 1537, 9];
                      break;
                    case 3072 >= d:
                      g = [22, d - 2049, 10];
                      break;
                    case 4096 >= d:
                      g = [23, d - 3073, 10];
                      break;
                    case 6144 >= d:
                      g = [24, d - 4097, 11];
                      break;
                    case 8192 >= d:
                      g = [25, d - 6145, 11];
                      break;
                    case 12288 >= d:
                      g = [26, d - 8193, 12];
                      break;
                    case 16384 >= d:
                      g = [27, d - 12289, 12];
                      break;
                    case 24576 >= d:
                      g = [28, d - 16385, 13];
                      break;
                    case 32768 >= d:
                      g = [29, d - 24577, 13];
                      break;
                    default:
                      throw "invalid distance";
                  }
                  (c = g), (e[f++] = c[0]), (e[f++] = c[1]), (e[f++] = c[2]);
                  var h, i;
                  for (h = 0, i = e.length; i > h; ++h) r[s++] = e[h];
                  u[e[0]]++, v[e[3]]++, (t = a.length + b - 1), (n = null);
                }
                var d,
                  e,
                  f,
                  g,
                  i,
                  j,
                  k,
                  n,
                  p,
                  q = {},
                  r = o ? new Uint16Array(2 * b.length) : [],
                  s = 0,
                  t = 0,
                  u = new (o ? Uint32Array : Array)(286),
                  v = new (o ? Uint32Array : Array)(30),
                  w = a.f;
                if (!o) {
                  for (f = 0; 285 >= f; ) u[f++] = 0;
                  for (f = 0; 29 >= f; ) v[f++] = 0;
                }
                for (u[256] = 1, d = 0, e = b.length; e > d; ++d) {
                  for (f = i = 0, g = 3; g > f && d + f !== e; ++f) i = (i << 8) | b[d + f];
                  if ((q[i] === l && (q[i] = []), (j = q[i]), !(0 < t--))) {
                    for (; 0 < j.length && 32768 < d - j[0]; ) j.shift();
                    if (d + 3 >= e) {
                      for (n && c(n, -1), f = 0, g = e - d; g > f; ++f) (p = b[d + f]), (r[s++] = p), ++u[p];
                      break;
                    }
                    0 < j.length ? ((k = h(b, d, j)), n ? (n.length < k.length ? ((p = b[d - 1]), (r[s++] = p), ++u[p], c(k, 0)) : c(n, -1)) : k.length < w ? (n = k) : c(k, 0)) : n ? c(n, -1) : ((p = b[d]), (r[s++] = p), ++u[p]);
                  }
                  j.push(d);
                }
                return (r[s++] = 256), u[256]++, (a.j = u), (a.i = v), o ? r.subarray(0, s) : r;
              }
              function h(a, b, c) {
                var d,
                  e,
                  g,
                  h,
                  i,
                  j,
                  k = 0,
                  l = a.length;
                (h = 0), (j = c.length);
                a: for (; j > h; h++) {
                  if (((d = c[j - h - 1]), (g = 3), k > 3)) {
                    for (i = k; i > 3; i--) if (a[d + i - 1] !== a[b + i - 1]) continue a;
                    g = k;
                  }
                  for (; 258 > g && l > b + g && a[d + g] === a[b + g]; ) ++g;
                  if ((g > k && ((e = d), (k = g)), 258 === g)) break;
                }
                return new f(k, b - e);
              }
              function i(a, b) {
                var c,
                  e,
                  f,
                  g,
                  h,
                  i = a.length,
                  k = new d(572),
                  l = new (o ? Uint8Array : Array)(i);
                if (!o) for (g = 0; i > g; g++) l[g] = 0;
                for (g = 0; i > g; ++g) 0 < a[g] && k.push(g, a[g]);
                if (((c = Array(k.length / 2)), (e = new (o ? Uint32Array : Array)(k.length / 2)), 1 === c.length)) return (l[k.pop().index] = 1), l;
                for (g = 0, h = k.length / 2; h > g; ++g) (c[g] = k.pop()), (e[g] = c[g].value);
                for (f = j(e, e.length, b), g = 0, h = c.length; h > g; ++g) l[c[g].index] = f[g];
                return l;
              }
              function j(a, b, c) {
                function d(a) {
                  var c = n[a][p[a]];
                  c === b ? (d(a + 1), d(a + 1)) : --l[c], ++p[a];
                }
                var e,
                  f,
                  g,
                  h,
                  i,
                  j = new (o ? Uint16Array : Array)(c),
                  k = new (o ? Uint8Array : Array)(c),
                  l = new (o ? Uint8Array : Array)(b),
                  m = Array(c),
                  n = Array(c),
                  p = Array(c),
                  q = (1 << c) - b,
                  r = 1 << (c - 1);
                for (j[c - 1] = b, f = 0; c > f; ++f) r > q ? (k[f] = 0) : ((k[f] = 1), (q -= r)), (q <<= 1), (j[c - 2 - f] = ((j[c - 1 - f] / 2) | 0) + b);
                for (j[0] = k[0], m[0] = Array(j[0]), n[0] = Array(j[0]), f = 1; c > f; ++f) j[f] > 2 * j[f - 1] + k[f] && (j[f] = 2 * j[f - 1] + k[f]), (m[f] = Array(j[f])), (n[f] = Array(j[f]));
                for (e = 0; b > e; ++e) l[e] = c;
                for (g = 0; g < j[c - 1]; ++g) (m[c - 1][g] = a[g]), (n[c - 1][g] = g);
                for (e = 0; c > e; ++e) p[e] = 0;
                for (1 === k[c - 1] && (--l[0], ++p[c - 1]), f = c - 2; f >= 0; --f) {
                  for (h = e = 0, i = p[f + 1], g = 0; g < j[f]; g++) (h = m[f + 1][i] + m[f + 1][i + 1]), h > a[e] ? ((m[f][g] = h), (n[f][g] = b), (i += 2)) : ((m[f][g] = a[e]), (n[f][g] = e), ++e);
                  (p[f] = 0), 1 === k[f] && d(f);
                }
                return l;
              }
              function k(a) {
                var b,
                  c,
                  d,
                  e,
                  f = new (o ? Uint16Array : Array)(a.length),
                  g = [],
                  h = [],
                  i = 0;
                for (b = 0, c = a.length; c > b; b++) g[a[b]] = 1 + (0 | g[a[b]]);
                for (b = 1, c = 16; c >= b; b++) (h[b] = i), (i += 0 | g[b]), (i <<= 1);
                for (b = 0, c = a.length; c > b; b++) for (i = h[a[b]], h[a[b]] += 1, d = f[b] = 0, e = a[b]; e > d; d++) (f[b] = (f[b] << 1) | (1 & i)), (i >>>= 1);
                return f;
              }
              var l = void 0,
                m = !0,
                n = this,
                o = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array && "undefined" != typeof DataView;
              (b.prototype.a = function (a, b, d) {
                var e,
                  f = this.buffer,
                  g = this.index,
                  h = this.d,
                  i = f[g];
                if ((d && b > 1 && (a = b > 8 ? ((u[255 & a] << 24) | (u[(a >>> 8) & 255] << 16) | (u[(a >>> 16) & 255] << 8) | u[(a >>> 24) & 255]) >> (32 - b) : u[a] >> (8 - b)), 8 > b + h)) (i = (i << b) | a), (h += b);
                else for (e = 0; b > e; ++e) (i = (i << 1) | ((a >> (b - e - 1)) & 1)), 8 == ++h && ((h = 0), (f[g++] = u[i]), (i = 0), g === f.length && (f = c(this)));
                (f[g] = i), (this.buffer = f), (this.d = h), (this.index = g);
              }),
                (b.prototype.finish = function () {
                  var a,
                    b = this.buffer,
                    c = this.index;
                  return 0 < this.d && ((b[c] <<= 8 - this.d), (b[c] = u[b[c]]), c++), o ? (a = b.subarray(0, c)) : ((b.length = c), (a = b)), a;
                });
              var p,
                q = new (o ? Uint8Array : Array)(256);
              for (p = 0; 256 > p; ++p) {
                for (var r = p, s = r, t = 7, r = r >>> 1; r; r >>>= 1) (s <<= 1), (s |= 1 & r), --t;
                q[p] = ((s << t) & 255) >>> 0;
              }
              var u = q;
              (d.prototype.getParent = function (a) {
                return 2 * (((a - 2) / 4) | 0);
              }),
                (d.prototype.push = function (a, b) {
                  var c,
                    d,
                    e,
                    f = this.buffer;
                  for (c = this.length, f[this.length++] = b, f[this.length++] = a; c > 0 && ((d = this.getParent(c)), f[c] > f[d]); ) (e = f[c]), (f[c] = f[d]), (f[d] = e), (e = f[c + 1]), (f[c + 1] = f[d + 1]), (f[d + 1] = e), (c = d);
                  return this.length;
                }),
                (d.prototype.pop = function () {
                  var a,
                    b,
                    c,
                    d,
                    e,
                    f = this.buffer;
                  for (b = f[0], a = f[1], this.length -= 2, f[0] = f[this.length], f[1] = f[this.length + 1], e = 0; !((d = 2 * e + 2) >= this.length) && (d + 2 < this.length && f[d + 2] > f[d] && (d += 2), f[d] > f[e]); )
                    (c = f[e]), (f[e] = f[d]), (f[d] = c), (c = f[e + 1]), (f[e + 1] = f[d + 1]), (f[d + 1] = c), (e = d);
                  return { index: a, value: b, length: this.length };
                });
              var v,
                w = 2,
                x = [];
              for (v = 0; 288 > v; v++)
                switch (m) {
                  case 143 >= v:
                    x.push([v + 48, 8]);
                    break;
                  case 255 >= v:
                    x.push([v - 144 + 400, 9]);
                    break;
                  case 279 >= v:
                    x.push([v - 256 + 0, 7]);
                    break;
                  case 287 >= v:
                    x.push([v - 280 + 192, 8]);
                    break;
                  default:
                    throw "invalid literal: " + v;
                }
              e.prototype.h = function () {
                var a,
                  c,
                  d,
                  e,
                  f = this.input;
                switch (this.e) {
                  case 0:
                    for (d = 0, e = f.length; e > d; ) {
                      (c = o ? f.subarray(d, d + 65535) : f.slice(d, d + 65535)), (d += c.length);
                      var h = c,
                        j = d === e,
                        n = l,
                        p = l,
                        q = l,
                        r = l,
                        s = l,
                        t = this.b,
                        u = this.c;
                      if (o) {
                        for (t = new Uint8Array(this.b.buffer); t.length <= u + h.length + 5; ) t = new Uint8Array(t.length << 1);
                        t.set(this.b);
                      }
                      if (((n = j ? 1 : 0), (t[u++] = 0 | n), (p = h.length), (q = (65536 + ~p) & 65535), (t[u++] = 255 & p), (t[u++] = (p >>> 8) & 255), (t[u++] = 255 & q), (t[u++] = (q >>> 8) & 255), o))
                        t.set(h, u), (u += h.length), (t = t.subarray(0, u));
                      else {
                        for (r = 0, s = h.length; s > r; ++r) t[u++] = h[r];
                        t.length = u;
                      }
                      (this.c = u), (this.b = t);
                    }
                    break;
                  case 1:
                    var v = new b(o ? new Uint8Array(this.b.buffer) : this.b, this.c);
                    v.a(1, 1, m), v.a(1, 2, m);
                    var y,
                      z,
                      A,
                      B = g(this, f);
                    for (y = 0, z = B.length; z > y; y++)
                      if (((A = B[y]), b.prototype.a.apply(v, x[A]), A > 256)) v.a(B[++y], B[++y], m), v.a(B[++y], 5), v.a(B[++y], B[++y], m);
                      else if (256 === A) break;
                    (this.b = v.finish()), (this.c = this.b.length);
                    break;
                  case w:
                    var C,
                      D,
                      E,
                      F,
                      G,
                      H,
                      I,
                      J,
                      K,
                      L,
                      M,
                      N,
                      O,
                      P,
                      Q,
                      R = new b(o ? new Uint8Array(this.b.buffer) : this.b, this.c),
                      S = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
                      T = Array(19);
                    for (C = w, R.a(1, 1, m), R.a(C, 2, m), D = g(this, f), H = i(this.j, 15), I = k(H), J = i(this.i, 7), K = k(J), E = 286; E > 257 && 0 === H[E - 1]; E--);
                    for (F = 30; F > 1 && 0 === J[F - 1]; F--);
                    var U,
                      V,
                      W,
                      X,
                      Y,
                      Z,
                      $ = E,
                      _ = F,
                      aa = new (o ? Uint32Array : Array)($ + _),
                      ba = new (o ? Uint32Array : Array)(316),
                      ca = new (o ? Uint8Array : Array)(19);
                    for (U = V = 0; $ > U; U++) aa[V++] = H[U];
                    for (U = 0; _ > U; U++) aa[V++] = J[U];
                    if (!o) for (U = 0, X = ca.length; X > U; ++U) ca[U] = 0;
                    for (U = Y = 0, X = aa.length; X > U; U += V) {
                      for (V = 1; X > U + V && aa[U + V] === aa[U]; ++V);
                      if (((W = V), 0 === aa[U]))
                        if (3 > W) for (; 0 < W--; ) (ba[Y++] = 0), ca[0]++;
                        else for (; W > 0; ) (Z = 138 > W ? W : 138), Z > W - 3 && W > Z && (Z = W - 3), 10 >= Z ? ((ba[Y++] = 17), (ba[Y++] = Z - 3), ca[17]++) : ((ba[Y++] = 18), (ba[Y++] = Z - 11), ca[18]++), (W -= Z);
                      else if (((ba[Y++] = aa[U]), ca[aa[U]]++, 3 > --W)) for (; 0 < W--; ) (ba[Y++] = aa[U]), ca[aa[U]]++;
                      else for (; W > 0; ) (Z = 6 > W ? W : 6), Z > W - 3 && W > Z && (Z = W - 3), (ba[Y++] = 16), (ba[Y++] = Z - 3), ca[16]++, (W -= Z);
                    }
                    for (a = o ? ba.subarray(0, Y) : ba.slice(0, Y), L = i(ca, 7), P = 0; 19 > P; P++) T[P] = L[S[P]];
                    for (G = 19; G > 4 && 0 === T[G - 1]; G--);
                    for (M = k(L), R.a(E - 257, 5, m), R.a(F - 1, 5, m), R.a(G - 4, 4, m), P = 0; G > P; P++) R.a(T[P], 3, m);
                    for (P = 0, Q = a.length; Q > P; P++)
                      if (((N = a[P]), R.a(M[N], L[N], m), N >= 16)) {
                        switch ((P++, N)) {
                          case 16:
                            O = 2;
                            break;
                          case 17:
                            O = 3;
                            break;
                          case 18:
                            O = 7;
                            break;
                          default:
                            throw "invalid code: " + N;
                        }
                        R.a(a[P], O, m);
                      }
                    var da,
                      ea,
                      fa,
                      ga,
                      ha,
                      ia,
                      ja,
                      ka,
                      la = [I, H],
                      ma = [K, J];
                    for (ha = la[0], ia = la[1], ja = ma[0], ka = ma[1], da = 0, ea = D.length; ea > da; ++da)
                      if (((fa = D[da]), R.a(ha[fa], ia[fa], m), fa > 256)) R.a(D[++da], D[++da], m), (ga = D[++da]), R.a(ja[ga], ka[ga], m), R.a(D[++da], D[++da], m);
                      else if (256 === fa) break;
                    (this.b = R.finish()), (this.c = this.b.length);
                    break;
                  default:
                    throw "invalid compression type";
                }
                return this.b;
              };
              var y = (function () {
                  var a,
                    b,
                    c = [];
                  for (a = 3; 258 >= a; a++)
                    (b = (function (a) {
                      switch (m) {
                        case 3 === a:
                          return [257, a - 3, 0];
                        case 4 === a:
                          return [258, a - 4, 0];
                        case 5 === a:
                          return [259, a - 5, 0];
                        case 6 === a:
                          return [260, a - 6, 0];
                        case 7 === a:
                          return [261, a - 7, 0];
                        case 8 === a:
                          return [262, a - 8, 0];
                        case 9 === a:
                          return [263, a - 9, 0];
                        case 10 === a:
                          return [264, a - 10, 0];
                        case 12 >= a:
                          return [265, a - 11, 1];
                        case 14 >= a:
                          return [266, a - 13, 1];
                        case 16 >= a:
                          return [267, a - 15, 1];
                        case 18 >= a:
                          return [268, a - 17, 1];
                        case 22 >= a:
                          return [269, a - 19, 2];
                        case 26 >= a:
                          return [270, a - 23, 2];
                        case 30 >= a:
                          return [271, a - 27, 2];
                        case 34 >= a:
                          return [272, a - 31, 2];
                        case 42 >= a:
                          return [273, a - 35, 3];
                        case 50 >= a:
                          return [274, a - 43, 3];
                        case 58 >= a:
                          return [275, a - 51, 3];
                        case 66 >= a:
                          return [276, a - 59, 3];
                        case 82 >= a:
                          return [277, a - 67, 4];
                        case 98 >= a:
                          return [278, a - 83, 4];
                        case 114 >= a:
                          return [279, a - 99, 4];
                        case 130 >= a:
                          return [280, a - 115, 4];
                        case 162 >= a:
                          return [281, a - 131, 5];
                        case 194 >= a:
                          return [282, a - 163, 5];
                        case 226 >= a:
                          return [283, a - 195, 5];
                        case 257 >= a:
                          return [284, a - 227, 5];
                        case 258 === a:
                          return [285, a - 258, 0];
                        default:
                          throw "invalid length: " + a;
                      }
                    })(a)),
                      (c[a] = (b[2] << 24) | (b[1] << 16) | b[0]);
                  return c;
                })(),
                z = o ? new Uint32Array(y) : y;
              a("Zlib.RawDeflate", e), a("Zlib.RawDeflate.prototype.compress", e.prototype.h);
              var A,
                B,
                C,
                D,
                E = { NONE: 0, FIXED: 1, DYNAMIC: w };
              if (Object.keys) A = Object.keys(E);
              else for (B in ((A = []), (C = 0), E)) A[C++] = B;
              for (C = 0, D = A.length; D > C; ++C) (B = A[C]), a("Zlib.RawDeflate.CompressionType." + B, E[B]);
            }.call(this));
          },
          {},
        ],
        20: [
          function () {
            (function () {
              "use strict";
              function a(a, b) {
                var c = a.split("."),
                  d = g;
                !(c[0] in d) && d.execScript && d.execScript("var " + c[0]);
                for (var e; c.length && (e = c.shift()); ) c.length || void 0 === b ? (d = d[e] ? d[e] : (d[e] = {})) : (d[e] = b);
              }
              function b(a) {
                var b,
                  c,
                  d,
                  e,
                  f,
                  g,
                  i,
                  j,
                  k,
                  l,
                  m = a.length,
                  n = 0,
                  o = Number.POSITIVE_INFINITY;
                for (j = 0; m > j; ++j) a[j] > n && (n = a[j]), a[j] < o && (o = a[j]);
                for (b = 1 << n, c = new (h ? Uint32Array : Array)(b), d = 1, e = 0, f = 2; n >= d; ) {
                  for (j = 0; m > j; ++j)
                    if (a[j] === d) {
                      for (g = 0, i = e, k = 0; d > k; ++k) (g = (g << 1) | (1 & i)), (i >>= 1);
                      for (l = (d << 16) | j, k = g; b > k; k += f) c[k] = l;
                      ++e;
                    }
                  ++d, (e <<= 1), (f <<= 1);
                }
                return [c, n, o];
              }
              function c(a, b) {
                switch (
                  ((this.g = []),
                  (this.h = 32768),
                  (this.c = this.f = this.d = this.k = 0),
                  (this.input = h ? new Uint8Array(a) : a),
                  (this.l = !1),
                  (this.i = j),
                  (this.q = !1),
                  (b || !(b = {})) && (b.index && (this.d = b.index), b.bufferSize && (this.h = b.bufferSize), b.bufferType && (this.i = b.bufferType), b.resize && (this.q = b.resize)),
                  this.i)
                ) {
                  case i:
                    (this.a = 32768), (this.b = new (h ? Uint8Array : Array)(32768 + this.h + 258));
                    break;
                  case j:
                    (this.a = 0), (this.b = new (h ? Uint8Array : Array)(this.h)), (this.e = this.v), (this.m = this.s), (this.j = this.t);
                    break;
                  default:
                    throw Error("invalid inflate mode");
                }
              }
              function d(a, b) {
                for (var c, d = a.f, e = a.c, f = a.input, g = a.d, h = f.length; b > e; ) {
                  if (g >= h) throw Error("input buffer is broken");
                  (d |= f[g++] << e), (e += 8);
                }
                return (c = d & ((1 << b) - 1)), (a.f = d >>> b), (a.c = e - b), (a.d = g), c;
              }
              function e(a, b) {
                for (var c, d, e = a.f, f = a.c, g = a.input, h = a.d, i = g.length, j = b[0], k = b[1]; k > f && !(h >= i); ) (e |= g[h++] << f), (f += 8);
                return (c = j[e & ((1 << k) - 1)]), (d = c >>> 16), (a.f = e >> d), (a.c = f - d), (a.d = h), 65535 & c;
              }
              function f(a) {
                function c(a, b, c) {
                  var f,
                    g,
                    h,
                    i = this.p;
                  for (h = 0; a > h; )
                    switch ((f = e(this, b))) {
                      case 16:
                        for (g = 3 + d(this, 2); g--; ) c[h++] = i;
                        break;
                      case 17:
                        for (g = 3 + d(this, 3); g--; ) c[h++] = 0;
                        i = 0;
                        break;
                      case 18:
                        for (g = 11 + d(this, 7); g--; ) c[h++] = 0;
                        i = 0;
                        break;
                      default:
                        i = c[h++] = f;
                    }
                  return (this.p = i), c;
                }
                var f,
                  g,
                  i,
                  j,
                  k = d(a, 5) + 257,
                  l = d(a, 5) + 1,
                  m = d(a, 4) + 4,
                  o = new (h ? Uint8Array : Array)(n.length);
                for (j = 0; m > j; ++j) o[n[j]] = d(a, 3);
                if (!h) for (j = m, m = o.length; m > j; ++j) o[n[j]] = 0;
                (f = b(o)), (g = new (h ? Uint8Array : Array)(k)), (i = new (h ? Uint8Array : Array)(l)), (a.p = 0), a.j(b(c.call(a, k, f, g)), b(c.call(a, l, f, i)));
              }
              var g = this,
                h = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array && "undefined" != typeof DataView,
                i = 0,
                j = 1;
              c.prototype.u = function () {
                for (; !this.l; ) {
                  var a = d(this, 3);
                  switch ((1 & a && (this.l = !0), (a >>>= 1))) {
                    case 0:
                      var b = this.input,
                        c = this.d,
                        e = this.b,
                        g = this.a,
                        k = b.length,
                        l = void 0,
                        m = void 0,
                        n = e.length,
                        o = void 0;
                      if (((this.c = this.f = 0), c + 1 >= k)) throw Error("invalid uncompressed block header: LEN");
                      if (((l = b[c++] | (b[c++] << 8)), c + 1 >= k)) throw Error("invalid uncompressed block header: NLEN");
                      if (((m = b[c++] | (b[c++] << 8)), l === ~m)) throw Error("invalid uncompressed block header: length verify");
                      if (c + l > b.length) throw Error("input buffer is broken");
                      switch (this.i) {
                        case i:
                          for (; g + l > e.length; ) {
                            if (((o = n - g), (l -= o), h)) e.set(b.subarray(c, c + o), g), (g += o), (c += o);
                            else for (; o--; ) e[g++] = b[c++];
                            (this.a = g), (e = this.e()), (g = this.a);
                          }
                          break;
                        case j:
                          for (; g + l > e.length; ) e = this.e({ o: 2 });
                          break;
                        default:
                          throw Error("invalid inflate mode");
                      }
                      if (h) e.set(b.subarray(c, c + l), g), (g += l), (c += l);
                      else for (; l--; ) e[g++] = b[c++];
                      (this.d = c), (this.a = g), (this.b = e);
                      break;
                    case 1:
                      this.j(z, B);
                      break;
                    case 2:
                      f(this);
                      break;
                    default:
                      throw Error("unknown BTYPE: " + a);
                  }
                }
                return this.m();
              };
              var k,
                l,
                m = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
                n = h ? new Uint16Array(m) : m,
                o = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258],
                p = h ? new Uint16Array(o) : o,
                q = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0],
                r = h ? new Uint8Array(q) : q,
                s = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577],
                t = h ? new Uint16Array(s) : s,
                u = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
                v = h ? new Uint8Array(u) : u,
                w = new (h ? Uint8Array : Array)(288);
              for (k = 0, l = w.length; l > k; ++k) w[k] = 143 >= k ? 8 : 255 >= k ? 9 : 279 >= k ? 7 : 8;
              var x,
                y,
                z = b(w),
                A = new (h ? Uint8Array : Array)(30);
              for (x = 0, y = A.length; y > x; ++x) A[x] = 5;
              var B = b(A);
              (c.prototype.j = function (a, b) {
                var c = this.b,
                  f = this.a;
                this.n = a;
                for (var g, h, i, j, k = c.length - 258; 256 !== (g = e(this, a)); )
                  if (256 > g) f >= k && ((this.a = f), (c = this.e()), (f = this.a)), (c[f++] = g);
                  else for (h = g - 257, j = p[h], 0 < r[h] && (j += d(this, r[h])), g = e(this, b), i = t[g], 0 < v[g] && (i += d(this, v[g])), f >= k && ((this.a = f), (c = this.e()), (f = this.a)); j--; ) c[f] = c[f++ - i];
                for (; 8 <= this.c; ) (this.c -= 8), this.d--;
                this.a = f;
              }),
                (c.prototype.t = function (a, b) {
                  var c = this.b,
                    f = this.a;
                  this.n = a;
                  for (var g, h, i, j, k = c.length; 256 !== (g = e(this, a)); )
                    if (256 > g) f >= k && ((c = this.e()), (k = c.length)), (c[f++] = g);
                    else for (h = g - 257, j = p[h], 0 < r[h] && (j += d(this, r[h])), g = e(this, b), i = t[g], 0 < v[g] && (i += d(this, v[g])), f + j > k && ((c = this.e()), (k = c.length)); j--; ) c[f] = c[f++ - i];
                  for (; 8 <= this.c; ) (this.c -= 8), this.d--;
                  this.a = f;
                }),
                (c.prototype.e = function () {
                  var a,
                    b,
                    c = new (h ? Uint8Array : Array)(this.a - 32768),
                    d = this.a - 32768,
                    e = this.b;
                  if (h) c.set(e.subarray(32768, c.length));
                  else for (a = 0, b = c.length; b > a; ++a) c[a] = e[a + 32768];
                  if ((this.g.push(c), (this.k += c.length), h)) e.set(e.subarray(d, d + 32768));
                  else for (a = 0; 32768 > a; ++a) e[a] = e[d + a];
                  return (this.a = 32768), e;
                }),
                (c.prototype.v = function (a) {
                  var b,
                    c,
                    d,
                    e,
                    f = (this.input.length / this.d + 1) | 0,
                    g = this.input,
                    i = this.b;
                  return (
                    a && ("number" == typeof a.o && (f = a.o), "number" == typeof a.r && (f += a.r)),
                    2 > f ? ((c = (g.length - this.d) / this.n[2]), (e = ((c / 2) * 258) | 0), (d = e < i.length ? i.length + e : i.length << 1)) : (d = i.length * f),
                    h ? ((b = new Uint8Array(d)), b.set(i)) : (b = i),
                    (this.b = b)
                  );
                }),
                (c.prototype.m = function () {
                  var a,
                    b,
                    c,
                    d,
                    e,
                    f = 0,
                    g = this.b,
                    i = this.g,
                    j = new (h ? Uint8Array : Array)(this.k + (this.a - 32768));
                  if (0 === i.length) return h ? this.b.subarray(32768, this.a) : this.b.slice(32768, this.a);
                  for (b = 0, c = i.length; c > b; ++b) for (a = i[b], d = 0, e = a.length; e > d; ++d) j[f++] = a[d];
                  for (b = 32768, c = this.a; c > b; ++b) j[f++] = g[b];
                  return (this.g = []), (this.buffer = j);
                }),
                (c.prototype.s = function () {
                  var a,
                    b = this.a;
                  return h ? (this.q ? ((a = new Uint8Array(b)), a.set(this.b.subarray(0, b))) : (a = this.b.subarray(0, b))) : (this.b.length > b && (this.b.length = b), (a = this.b)), (this.buffer = a);
                }),
                a("Zlib.RawInflate", c),
                a("Zlib.RawInflate.prototype.decompress", c.prototype.u);
              var C,
                D,
                E,
                F,
                G = { ADAPTIVE: j, BLOCK: i };
              if (Object.keys) C = Object.keys(G);
              else for (D in ((C = []), (E = 0), G)) C[E++] = D;
              for (E = 0, F = C.length; F > E; ++E) (D = C[E]), a("Zlib.RawInflate.BufferType." + D, G[D]);
            }.call(this));
          },
          {},
        ],
      },
      {},
      [7]
    )(7);
  }),
  Element.prototype.scrollIntoViewIfNeeded ||
    (Element.prototype.scrollIntoViewIfNeeded = function (a) {
      a = 0 === arguments.length || !!a;
      var b = this.parentNode,
        c = window.getComputedStyle(b, null),
        d = parseInt(c.getPropertyValue("border-top-width")),
        e = parseInt(c.getPropertyValue("border-left-width")),
        f = this.offsetTop - b.offsetTop < b.scrollTop,
        g = this.offsetTop - b.offsetTop + this.clientHeight - d > b.scrollTop + b.clientHeight,
        h = this.offsetLeft - b.offsetLeft < b.scrollLeft,
        i = this.offsetLeft - b.offsetLeft + this.clientWidth - e > b.scrollLeft + b.clientWidth,
        j = f && !g;
      (f || g) && a && (b.scrollTop = this.offsetTop - b.offsetTop - b.clientHeight / 2 - d + this.clientHeight / 2),
        (h || i) && a && (b.scrollLeft = this.offsetLeft - b.offsetLeft - b.clientWidth / 2 - e + this.clientWidth / 2),
        (f || g || h || i) && !a && this.scrollIntoView(j);
    }),
  (function (a, b, c) {
    "use strict";
    function d() {
      function d(a, b) {
        (this.scrollLeft = a), (this.scrollTop = b);
      }
      function e(a) {
        return 0.5 * (1 - Math.cos(Math.PI * a));
      }
      function f(a) {
        if ("object" != typeof a || a.behavior === c || "auto" === a.behavior || "instant" === a.behavior) return !0;
        if ("object" == typeof a && "smooth" === a.behavior) return !1;
        throw new TypeError("behavior not valid");
      }
      function g(a) {
        do {
          a = a.parentNode;
        } while (a !== b.body && !(a.clientHeight < a.scrollHeight || a.clientWidth < a.scrollWidth));
        return a;
      }
      function h(b) {
        b.frame = a.requestAnimationFrame(h.bind(a, b));
        var c,
          d,
          f,
          g = m(),
          i = (g - b.startTime) / k;
        if (((i = i > 1 ? 1 : i), (c = e(i)), (d = b.startX + (b.x - b.startX) * c), (f = b.startY + (b.y - b.startY) * c), b.method.call(b.scrollable, d, f), d === b.x && f === b.y)) return void a.cancelAnimationFrame(b.frame);
      }
      function i(c, e, f) {
        var g,
          i,
          j,
          k,
          n = m();
        c === b.body ? ((g = a), (i = a.scrollX || a.pageXOffset), (j = a.scrollY || a.pageYOffset), (k = l.scroll)) : ((g = c), (i = c.scrollLeft), (j = c.scrollTop), (k = d)),
          h({ scrollable: g, method: k, startTime: n, startX: i, startY: j, x: e, y: f, frame: void 0 });
      }
      if (!("scrollBehavior" in b.documentElement.style)) {
        var j = a.HTMLElement || a.Element,
          k = 468,
          l = { scroll: a.scroll || a.scrollTo, scrollBy: a.scrollBy, scrollIntoView: j.prototype.scrollIntoView },
          m = a.performance && a.performance.now ? a.performance.now.bind(a.performance) : Date.now;
        (a.scroll = a.scrollTo = function () {
          if (f(arguments[0])) return void l.scroll.call(a, arguments[0].left || arguments[0], arguments[0].top || arguments[1]);
          i.call(a, b.body, ~~arguments[0].left, ~~arguments[0].top);
        }),
          (a.scrollBy = function () {
            if (f(arguments[0])) return void l.scrollBy.call(a, arguments[0].left || arguments[0], arguments[0].top || arguments[1]);
            i.call(a, b.body, ~~arguments[0].left + (a.scrollX || a.pageXOffset), ~~arguments[0].top + (a.scrollY || a.pageYOffset));
          }),
          (j.prototype.scrollIntoView = function () {
            if (f(arguments[0])) return void l.scrollIntoView.call(this, arguments[0] || !0);
            var c = g(this),
              d = c.getBoundingClientRect(),
              e = this.getBoundingClientRect();
            c !== b.body ? (i.call(this, c, c.scrollLeft + e.left - d.left, c.scrollTop + e.top - d.top), a.scrollBy({ left: d.left, top: d.top, behavior: "smooth" })) : a.scrollBy({ left: e.left, top: e.top, behavior: "smooth" });
          });
      }
    }
    "object" == typeof exports ? (module.exports = { polyfill: d }) : d();
  })(window, document),
  (function (a, b, c) {
    function d(a, b, c) {
      for (var d = [], e = 0; e < a.length; e++) {
        var f = t(a[e]),
          g = f.toHsl().l < 0.5 ? "sp-thumb-el sp-thumb-dark" : "sp-thumb-el sp-thumb-light";
        g += t.equals(b, a[e]) ? " sp-thumb-active" : "";
        var h = q ? "background-color:" + f.toRgbString() : "filter:" + f.toFilter();
        d.push('<span title="' + f.toRgbString() + '" data-color="' + f.toRgbString() + '" class="' + g + '"><span class="sp-thumb-inner" style="' + h + ';" /></span>');
      }
      return "<div class='sp-cf " + c + "'>" + d.join("") + "</div>";
    }
    function e() {
      for (var a = 0; a < o.length; a++) o[a] && o[a].hide();
    }
    function f(a, c) {
      var d = b.extend({}, n, a);
      return (d.callbacks = { move: k(d.move, c), change: k(d.change, c), show: k(d.show, c), hide: k(d.hide, c), beforeShow: k(d.beforeShow, c) }), d;
    }
    function g(g, i) {
      function k() {
        S.showPaletteOnly && (S.showPalette = !0),
          ta.toggleClass("sp-flat", T),
          ta.toggleClass("sp-input-disabled", !S.showInput),
          ta.toggleClass("sp-alpha-enabled", S.showAlpha),
          ta.toggleClass("sp-buttons-disabled", !S.showButtons),
          ta.toggleClass("sp-palette-disabled", !S.showPalette),
          ta.toggleClass("sp-palette-only", S.showPaletteOnly),
          ta.toggleClass("sp-initial-disabled", !S.showInitial),
          ta.addClass(S.className),
          N();
      }
      function n(c) {
        if (U) {
          var d = t(c).toRgbString();
          if (-1 === b.inArray(d, ma)) for (ma.push(d); ma.length > na; ) ma.shift();
          if (V && a.localStorage)
            try {
              a.localStorage[V] = ma.join(";");
            } catch (a) {}
        }
      }
      function u() {
        var a,
          b = [],
          c = ma,
          d = {};
        if (S.showPalette) {
          for (var e = 0; e < la.length; e++) for (var f = 0; f < la[e].length; f++) (a = t(la[e][f]).toRgbString()), (d[a] = !0);
          for (e = 0; e < c.length; e++) (a = t(c[e]).toRgbString()), d.hasOwnProperty(a) || (b.push(c[e]), (d[a] = !0));
        }
        return b.reverse().slice(0, S.maxSelectionSize);
      }
      function v() {
        var a = H(),
          c = b.map(la, function (b, c) {
            return d(b, a, "sp-palette-row sp-palette-row-" + c);
          });
        ma && c.push(d(u(), a, "sp-palette-row sp-palette-row-selection")), Ca.html(c.join(""));
      }
      function w() {
        if (S.showInitial) {
          var a = Ma,
            b = H();
          Da.html(d([a, b], b, "sp-palette-row-initial"));
        }
      }
      function x() {
        (_ <= 0 || $ <= 0 || ba <= 0) && N(), ta.addClass(oa), (pa = null);
      }
      function y() {
        ta.removeClass(oa);
      }
      function z() {
        var a = t(Ba.val());
        a.ok ? G(a) : Ba.addClass("sp-validation-error");
      }
      function A() {
        Z ? E() : B();
      }
      function B() {
        var c = b.Event("beforeShow.spectrum");
        if (Z) return void N();
        (Ma = H()),
          ra.trigger(c, [Ma]),
          !1 === X.beforeShow(Ma) ||
            c.isDefaultPrevented() ||
            (G(Ma),
            e(),
            (Z = !0),
            b(qa).bind("mousedown.spectrum", C),
            T || b(qa).bind("mouseup.spectrum", D),
            b(a).bind("resize.spectrum", Y),
            Ia.addClass("sp-active"),
            ta.removeClass("sp-hidden"),
            S.showPalette && v(),
            N(),
            K(),
            w(),
            X.show(Ma),
            ra.trigger("show.spectrum", [Ma]));
      }
      function C(a) {
        var c = b(a.target);
        !c.parents().is(ta) && !c.is(ta) && E(a);
      }
      function D(a) {
        !t.equals(H(), Ma) && (Pa && "cancel" !== a ? M(!0) : F());
      }
      function E(c) {
        (c && "click" == c.type && 2 == c.button) ||
          (Z &&
            !T &&
            ((Z = !1),
            b(qa).unbind("mousedown.spectrum", C),
            b(qa).unbind("mouseup.spectrum", D),
            b(a).unbind("resize.spectrum", Y),
            Ia.removeClass("sp-active"),
            ta.addClass("sp-hidden"),
            D(c),
            n(H()),
            X.hide(H()),
            ra.trigger("hide.spectrum", [H()])));
      }
      function F() {
        G(Ma, !0);
      }
      function G(a, b) {
        if (!t.equals(a, H())) {
          var c = t(a),
            d = c.toHsv();
          (ga = (d.h % 360) / 360), (ha = d.s), (ia = d.v), (ja = d.a), K(), c.ok && !b && (Oa = Na || c.format);
        }
      }
      function H(a) {
        return (a = a || {}), t.fromRatio({ h: ga, s: ha, v: ia, a: Math.round(100 * ja) / 100 }, { format: a.format || Oa });
      }
      function I() {
        return !Ba.hasClass("sp-validation-error");
      }
      function J() {
        K(), X.move(H()), ra.trigger("move.spectrum", [H()]);
      }
      function K() {
        Ba.removeClass("sp-validation-error"), L();
        var a = t.fromRatio({ h: ga, s: 1, v: 1 });
        ua.css("background-color", a.toHexString());
        var b = Oa;
        ja < 1 && (("hex" !== b && "hex3" !== b && "hex6" !== b && "name" !== b) || (b = "rgb"));
        var c = H({ format: b }),
          d = c.toHexString(),
          e = c.toRgbString();
        if ((q || 1 === c.alpha ? Ka.css("background-color", e) : (Ka.css("background-color", "transparent"), Ka.css("filter", c.toFilter())), S.showAlpha)) {
          var f = c.toRgb();
          f.a = 0;
          var g = t(f).toRgbString(),
            h = "linear-gradient(left, " + g + ", " + d + ")";
          p ? ya.css("filter", t(g).toFilter({ gradientType: 1 }, d)) : (ya.css("background", "-webkit-" + h), ya.css("background", "-moz-" + h), ya.css("background", "-ms-" + h), ya.css("background", h));
        }
        if (S.showInput) {
          var i = pskl.UserSettings.get(pskl.UserSettings.COLOR_FORMAT);
          Ba.val(c.toString(i));
        }
        S.showPalette && v(), w();
      }
      function L() {
        var a = ha,
          b = ia,
          c = a * $,
          d = _ - b * _;
        (c = Math.max(-aa / 2, Math.min($ - aa / 2, c - aa / 2))), (d = Math.max(-aa / 2, Math.min(_ - aa / 2, d - aa / 2))), va.css({ top: d, left: c });
        var e = ja * da;
        Aa.css({ left: e - ea / 2 });
        var f = ga * ba;
        xa.css({ top: f - fa / 2 });
      }
      function M(a) {
        var b = H();
        Ga && ra.val(b.toString(Oa));
        var c = !t.equals(b, Ma);
        (Ma = b), a && c && (X.change(b), ra.trigger("change", [b]));
      }
      function N() {
        ($ = ua.width()), (_ = ua.height()), (aa = va.height() + 4), (ca = wa.width()), (ba = wa.height()), (fa = xa.height() + 4), (da = za.width()), (ea = Aa.width()), T || (ta.css("position", "absolute"), ta.offset(h(ta, Ja))), L();
      }
      function O() {
        ra.show(), Ja.unbind("click.spectrum touchstart.spectrum"), ta.remove(), Ia.remove(), (o[Qa.id] = null);
      }
      function P(a, d) {
        return a === c ? b.extend({}, S) : d === c ? S[a] : ((S[a] = d), void k());
      }
      function Q() {
        (sa = !1), ra.attr("disabled", !1), Ja.removeClass("sp-disabled");
      }
      function R() {
        E(), (sa = !0), ra.attr("disabled", !0), Ja.addClass("sp-disabled");
      }
      var S = f(i, g),
        T = S.flat,
        U = S.showSelectionPalette,
        V = S.localStorageKey,
        W = S.theme,
        X = S.callbacks,
        Y = m(N, 10),
        Z = !1,
        $ = 0,
        _ = 0,
        aa = 0,
        ba = 0,
        ca = 0,
        da = 0,
        ea = 0,
        fa = 0,
        ga = 0,
        ha = 0,
        ia = 0,
        ja = 1,
        ka = S.palette.slice(0),
        la = b.isArray(ka[0]) ? ka : [ka],
        ma = S.selectionPalette.slice(0),
        na = S.maxSelectionSize,
        oa = "sp-dragging",
        pa = null,
        qa = g.ownerDocument,
        ra = (qa.body, b(g)),
        sa = !1,
        ta = b(s, qa).addClass(W),
        ua = ta.find(".sp-color"),
        va = ta.find(".sp-dragger"),
        wa = ta.find(".sp-hue"),
        xa = ta.find(".sp-slider"),
        ya = ta.find(".sp-alpha-inner"),
        za = ta.find(".sp-alpha"),
        Aa = ta.find(".sp-alpha-handle"),
        Ba = ta.find(".sp-input"),
        Ca = ta.find(".sp-palette"),
        Da = ta.find(".sp-initial"),
        Ea = ta.find(".sp-cancel"),
        Fa = ta.find(".sp-choose"),
        Ga = ra.is("input"),
        Ha = Ga && !T,
        Ia = Ha ? b(r).addClass(W).addClass(S.className) : b([]),
        Ja = Ha ? Ia : ra,
        Ka = Ia.find(".sp-preview-inner"),
        La = S.color || (Ga && ra.val()),
        Ma = !1,
        Na = S.preferredFormat,
        Oa = Na,
        Pa = !S.showButtons || S.clickoutFiresChange;
      !(function () {
        function c(a) {
          return a.data && a.data.ignore ? (G(b(this).data("color")), J()) : (G(b(this).data("color")), M(!0), J(), E()), !1;
        }
        if ((p && ta.find("*:not(input)").attr("unselectable", "on"), k(), Ha && ra.after(Ia).hide(), T)) ra.after(ta).hide();
        else {
          var d = "parent" === S.appendTo ? ra.parent() : b(S.appendTo);
          1 !== d.length && (d = b("body")), d.append(ta);
        }
        if (V && a.localStorage) {
          try {
            var e = a.localStorage[V].split(",#");
            e.length > 1 &&
              (delete a.localStorage[V],
              b.each(e, function (a, b) {
                n(b);
              }));
          } catch (a) {}
          try {
            ma = a.localStorage[V].split(";");
          } catch (a) {}
        }
        Ja.bind("click.spectrum touchstart.spectrum", function (a) {
          sa || A(), a.stopPropagation(), b(a.target).is("input") || a.preventDefault();
        }),
          (ra.is(":disabled") || !0 === S.disabled) && R(),
          ta.click(j),
          Ba.change(z),
          Ba.bind("paste", function () {
            setTimeout(z, 1);
          }),
          Ba.keydown(function (a) {
            13 == a.keyCode && z();
          }),
          Ea.text(S.cancelText),
          Ea.bind("click.spectrum", function (a) {
            a.stopPropagation(), a.preventDefault(), E("cancel");
          }),
          Fa.text(S.chooseText),
          Fa.bind("click.spectrum", function (a) {
            a.stopPropagation(), a.preventDefault(), I() && (M(!0), E());
          }),
          l(za, function (a, b, c) {
            (ja = a / da), c.shiftKey && (ja = Math.round(10 * ja) / 10), J();
          }),
          l(
            wa,
            function (a, b) {
              (ga = parseFloat(b / ba)), J();
            },
            x,
            y
          ),
          l(
            ua,
            function (a, b, c) {
              if (c.shiftKey) {
                if (!pa) {
                  var d = ha * $,
                    e = _ - ia * _,
                    f = Math.abs(a - d) > Math.abs(b - e);
                  pa = f ? "x" : "y";
                }
              } else pa = null;
              var g = !pa || "x" === pa,
                h = !pa || "y" === pa;
              g && (ha = parseFloat(a / $)), h && (ia = parseFloat((_ - b) / _)), J();
            },
            x,
            y
          ),
          La ? (G(La), K(), (Oa = Na || t(La).format), n(La)) : K(),
          T && B();
        var f = p ? "mousedown.spectrum" : "click.spectrum touchstart.spectrum";
        Ca.delegate(".sp-thumb-el", f, c), Da.delegate(".sp-thumb-el:nth-child(1)", f, { ignore: !0 }, c);
      })();
      var Qa = {
        show: B,
        hide: E,
        toggle: A,
        reflow: N,
        option: P,
        enable: Q,
        disable: R,
        set: function (a) {
          G(a), M();
        },
        get: H,
        destroy: O,
        container: ta,
      };
      return (Qa.id = o.push(Qa) - 1), Qa;
    }
    function h(a, c) {
      var d = a.outerWidth(),
        e = a.outerHeight(),
        f = c.outerHeight(),
        g = a[0].ownerDocument,
        h = g.documentElement,
        i = h.clientWidth + b(g).scrollLeft(),
        j = h.clientHeight + b(g).scrollTop(),
        k = c.offset();
      return (
        (k.top += f),
        Math.min(k.left, k.left + d > i && i > d) ? ((k.left -= Math.abs(k.left + d - i)), a.attr("data-x-position", "right")) : ((k.left -= 0), a.attr("data-x-position", "left")),
        Math.min(k.top, k.top + e > j && j > e) ? ((k.top -= Math.abs(e + f - 0)), a.attr("data-y-position", "top")) : ((k.top -= 0), a.attr("data-y-position", "bottom")),
        k
      );
    }
    function i() {}
    function j(a) {
      a.stopPropagation();
    }
    function k(a, b) {
      var c = Array.prototype.slice,
        d = c.call(arguments, 2);
      return function () {
        return a.apply(b, d.concat(c.call(arguments)));
      };
    }
    function l(c, d, e, f) {
      function g(a) {
        a.stopPropagation && a.stopPropagation(), a.preventDefault && a.preventDefault(), (a.returnValue = !1);
      }
      function h(a) {
        if (l) {
          if (p && document.documentMode < 9 && !a.button) return j();
          var b = a.originalEvent.touches,
            e = b ? b[0].pageX : a.pageX,
            f = b ? b[0].pageY : a.pageY,
            h = Math.max(0, Math.min(e - m.left, o)),
            i = Math.max(0, Math.min(f - m.top, n));
          q && g(a), d.apply(c, [h, i, a]);
        }
      }
      function i(a) {
        var d = a.which ? 3 == a.which : 2 == a.button;
        a.originalEvent.touches;
        d || l || (!1 !== e.apply(c, arguments) && ((l = !0), (n = b(c).height()), (o = b(c).width()), (m = b(c).offset()), b(k).bind(r), b(k.body).addClass("sp-dragging"), q || h(a), g(a)));
      }
      function j() {
        l && (b(k).unbind(r), b(k.body).removeClass("sp-dragging"), f.apply(c, arguments)), (l = !1);
      }
      (d = d || function () {}), (e = e || function () {}), (f = f || function () {});
      var k = c.ownerDocument || document,
        l = !1,
        m = {},
        n = 0,
        o = 0,
        q = "ontouchstart" in a,
        r = {};
      (r.selectstart = g), (r.dragstart = g), (r["touchmove mousemove"] = h), (r["touchend mouseup"] = j), b(c).bind("touchstart mousedown", i);
    }
    function m(a, b, c) {
      var d;
      return function () {
        var e = this,
          f = arguments,
          g = function () {
            (d = null), a.apply(e, f);
          };
        c && clearTimeout(d), (!c && d) || (d = setTimeout(g, b));
      };
    }
    var n = {
        beforeShow: i,
        move: i,
        change: i,
        show: i,
        hide: i,
        color: !1,
        flat: !1,
        showInput: !1,
        showButtons: !0,
        clickoutFiresChange: !1,
        showInitial: !1,
        showPalette: !1,
        showPaletteOnly: !1,
        showSelectionPalette: !0,
        localStorageKey: !1,
        appendTo: "body",
        maxSelectionSize: 7,
        cancelText: "cancel",
        chooseText: "choose",
        preferredFormat: !1,
        className: "",
        showAlpha: !1,
        theme: "sp-light",
        palette: ["fff", "000"],
        selectionPalette: [],
        disabled: !1,
      },
      o = [],
      p = !!/msie/i.exec(a.navigator.userAgent),
      q = (function () {
        function a(a, b) {
          return !!~("" + a).indexOf(b);
        }
        var b = document.createElement("div"),
          c = b.style;
        return (c.cssText = "background-color:rgba(0,0,0,.5)"), a(c.backgroundColor, "rgba") || a(c.backgroundColor, "hsla");
      })(),
      r = ["<div class='sp-replacer'>", "<div class='sp-preview'><div class='sp-preview-inner'></div></div>", "<div class='sp-dd'>&#9660;</div>", "</div>"].join(""),
      s = (function () {
        var a = "";
        if (p) for (var b = 1; b <= 6; b++) a += "<div class='sp-" + b + "'></div>";
        return [
          "<div class='sp-container sp-hidden'>",
          "<div class='sp-palette-container'>",
          "<div class='sp-palette sp-thumb sp-cf'></div>",
          "</div>",
          "<div class='sp-picker-container'>",
          "<div class='sp-top sp-cf'>",
          "<div class='sp-fill'></div>",
          "<div class='sp-top-inner'>",
          "<div class='sp-color'>",
          "<div class='sp-sat'>",
          "<div class='sp-val'>",
          "<div class='sp-dragger'></div>",
          "</div>",
          "</div>",
          "</div>",
          "<div class='sp-hue'>",
          "<div class='sp-slider'></div>",
          a,
          "</div>",
          "</div>",
          "<div class='sp-alpha'><div class='sp-alpha-inner'><div class='sp-alpha-handle'></div></div></div>",
          "</div>",
          "<div class='sp-input-container sp-cf'>",
          "<input class='sp-input' type='text' spellcheck='false'  />",
          "</div>",
          "<div class='sp-initial sp-thumb sp-cf'></div>",
          "<div class='sp-button-container sp-cf'>",
          "<a class='sp-cancel' href='#'></a>",
          "<button class='sp-choose'></button>",
          "</div>",
          "</div>",
          "</div>",
        ].join("");
      })();
    (b.fn.spectrum = function (a, c) {
      if ("string" == typeof a) {
        var d = this,
          e = Array.prototype.slice.call(arguments, 1);
        return (
          this.each(function () {
            var c = o[b(this).data("spectrum.id")];
            if (c) {
              var f = c[a];
              if (!f) throw new Error("Spectrum: no such method: '" + a + "'");
              "get" == a ? (d = c.get()) : "container" == a ? (d = c.container) : "option" == a ? (d = c.option.apply(c, e)) : "destroy" == a ? (c.destroy(), b(this).removeData("spectrum.id")) : f.apply(c, e);
            }
          }),
          d
        );
      }
      return this.spectrum("destroy").each(function () {
        var c = g(this, a);
        b(this).data("spectrum.id", c.id);
      });
    }),
      (b.fn.spectrum.load = !0),
      (b.fn.spectrum.loadOpts = {}),
      (b.fn.spectrum.draggable = l),
      (b.fn.spectrum.defaults = n),
      (b.spectrum = {}),
      (b.spectrum.localization = {}),
      (b.spectrum.palettes = {}),
      (b.fn.spectrum.processNativeColorInputs = function () {
        var a = b("<input type='color' value='!' />")[0];
        ("color" === a.type && "!" != a.value) || b("input[type=color]").spectrum({ preferredFormat: "hex6" });
      }),
      (function () {
        function b(a, d) {
          if (((a = a || ""), (d = d || {}), "object" == typeof a && a.hasOwnProperty("_tc_id"))) return a;
          var f = c(a),
            h = f.r,
            l = f.g,
            m = f.b,
            n = f.a,
            o = w(100 * n) / 100,
            q = d.format || f.format;
          return (
            h < 1 && (h = w(h)),
            l < 1 && (l = w(l)),
            m < 1 && (m = w(m)),
            {
              ok: f.ok,
              format: q,
              _tc_id: u++,
              alpha: n,
              getAlpha: function () {
                return n;
              },
              setAlpha: function (a) {
                (n = j(a)), (o = w(100 * n) / 100);
              },
              toHsv: function () {
                var a = g(h, l, m);
                return { h: 360 * a.h, s: a.s, v: a.v, a: n };
              },
              toHsvString: function () {
                var a = g(h, l, m),
                  b = w(360 * a.h),
                  c = w(100 * a.s),
                  d = w(100 * a.v);
                return 1 == n ? "hsv(" + b + ", " + c + "%, " + d + "%)" : "hsva(" + b + ", " + c + "%, " + d + "%, " + o + ")";
              },
              toHsl: function () {
                var a = e(h, l, m);
                return { h: 360 * a.h, s: a.s, l: a.l, a: n };
              },
              toHslString: function () {
                var a = e(h, l, m),
                  b = w(360 * a.h),
                  c = w(100 * a.s),
                  d = w(100 * a.l);
                return 1 == n ? "hsl(" + b + ", " + c + "%, " + d + "%)" : "hsla(" + b + ", " + c + "%, " + d + "%, " + o + ")";
              },
              toHex: function (a) {
                return i(h, l, m, a);
              },
              toHexString: function (a) {
                return "#" + i(h, l, m, a);
              },
              toRgb: function () {
                return { r: w(h), g: w(l), b: w(m), a: n };
              },
              toRgbString: function () {
                return 1 == n ? "rgb(" + w(h) + ", " + w(l) + ", " + w(m) + ")" : "rgba(" + w(h) + ", " + w(l) + ", " + w(m) + ", " + o + ")";
              },
              toPercentageRgb: function () {
                return { r: w(100 * k(h, 255)) + "%", g: w(100 * k(l, 255)) + "%", b: w(100 * k(m, 255)) + "%", a: n };
              },
              toPercentageRgbString: function () {
                return 1 == n ? "rgb(" + w(100 * k(h, 255)) + "%, " + w(100 * k(l, 255)) + "%, " + w(100 * k(m, 255)) + "%)" : "rgba(" + w(100 * k(h, 255)) + "%, " + w(100 * k(l, 255)) + "%, " + w(100 * k(m, 255)) + "%, " + o + ")";
              },
              toName: function () {
                return 0 === n ? "transparent" : B[i(h, l, m, !0)] || !1;
              },
              toFilter: function (a) {
                var c = i(h, l, m),
                  e = c,
                  f = Math.round(255 * parseFloat(n)).toString(16),
                  g = f,
                  j = d && d.gradientType ? "GradientType = 1, " : "";
                if (a) {
                  var k = b(a);
                  (e = k.toHex()), (g = Math.round(255 * parseFloat(k.alpha)).toString(16));
                }
                return "progid:DXImageTransform.Microsoft.gradient(" + j + "startColorstr=#" + p(f) + c + ",endColorstr=#" + p(g) + e + ")";
              },
              toString: function (a) {
                var b = !!a;
                a = a || this.format;
                var c = !1,
                  d = !b && n < 1 && n > 0,
                  e = d && ("hex" === a || "hex6" === a || "hex3" === a || "name" === a);
                return (
                  "rgb" === a && (c = this.toRgbString()),
                  "prgb" === a && (c = this.toPercentageRgbString()),
                  ("hex" !== a && "hex6" !== a) || (c = this.toHexString()),
                  "hex3" === a && (c = this.toHexString(!0)),
                  "name" === a && (c = this.toName()),
                  "hsl" === a && (c = this.toHslString()),
                  "hsv" === a && (c = this.toHsvString()),
                  e ? this.toRgbString() : c || this.toHexString()
                );
              },
            }
          );
        }
        function c(a) {
          var b = { r: 0, g: 0, b: 0 },
            c = 1,
            e = !1,
            g = !1;
          return (
            "string" == typeof a && (a = r(a)),
            "object" == typeof a &&
              (a.hasOwnProperty("r") && a.hasOwnProperty("g") && a.hasOwnProperty("b")
                ? ((b = d(a.r, a.g, a.b)), (e = !0), (g = "%" === String(a.r).substr(-1) ? "prgb" : "rgb"))
                : a.hasOwnProperty("h") && a.hasOwnProperty("s") && a.hasOwnProperty("v")
                ? ((a.s = q(a.s)), (a.v = q(a.v)), (b = h(a.h, a.s, a.v)), (e = !0), (g = "hsv"))
                : a.hasOwnProperty("h") && a.hasOwnProperty("s") && a.hasOwnProperty("l") && ((a.s = q(a.s)), (a.l = q(a.l)), (b = f(a.h, a.s, a.l)), (e = !0), (g = "hsl")),
              a.hasOwnProperty("a") && (c = a.a)),
            (c = j(c)),
            { ok: e, format: a.format || g, r: x(255, y(b.r, 0)), g: x(255, y(b.g, 0)), b: x(255, y(b.b, 0)), a: c }
          );
        }
        function d(a, b, c) {
          return { r: 255 * k(a, 255), g: 255 * k(b, 255), b: 255 * k(c, 255) };
        }
        function e(a, b, c) {
          (a = k(a, 255)), (b = k(b, 255)), (c = k(c, 255));
          var d,
            e,
            f = y(a, b, c),
            g = x(a, b, c),
            h = (f + g) / 2;
          if (f == g) d = e = 0;
          else {
            var i = f - g;
            switch (((e = h > 0.5 ? i / (2 - f - g) : i / (f + g)), f)) {
              case a:
                d = (b - c) / i + (b < c ? 6 : 0);
                break;
              case b:
                d = (c - a) / i + 2;
                break;
              case c:
                d = (a - b) / i + 4;
            }
            d /= 6;
          }
          return { h: d, s: e, l: h };
        }
        function f(a, b, c) {
          function d(a, b, c) {
            return c < 0 && (c += 1), c > 1 && (c -= 1), c < 1 / 6 ? a + 6 * (b - a) * c : c < 0.5 ? b : c < 2 / 3 ? a + (b - a) * (2 / 3 - c) * 6 : a;
          }
          var e, f, g;
          if (((a = k(a, 360)), (b = k(b, 100)), (c = k(c, 100)), 0 === b)) e = f = g = c;
          else {
            var h = c < 0.5 ? c * (1 + b) : c + b - c * b,
              i = 2 * c - h;
            (e = d(i, h, a + 1 / 3)), (f = d(i, h, a)), (g = d(i, h, a - 1 / 3));
          }
          return { r: 255 * e, g: 255 * f, b: 255 * g };
        }
        function g(a, b, c) {
          (a = k(a, 255)), (b = k(b, 255)), (c = k(c, 255));
          var d,
            e,
            f = y(a, b, c),
            g = x(a, b, c),
            h = f,
            i = f - g;
          if (((e = 0 === f ? 0 : i / f), f == g)) d = 0;
          else {
            switch (f) {
              case a:
                d = (b - c) / i + (b < c ? 6 : 0);
                break;
              case b:
                d = (c - a) / i + 2;
                break;
              case c:
                d = (a - b) / i + 4;
            }
            d /= 6;
          }
          return { h: d, s: e, v: h };
        }
        function h(a, b, c) {
          (a = 6 * k(a, 360)), (b = k(b, 100)), (c = k(c, 100));
          var d = v.floor(a),
            e = a - d,
            f = c * (1 - b),
            g = c * (1 - e * b),
            h = c * (1 - (1 - e) * b),
            i = d % 6;
          return { r: 255 * [c, g, f, f, h, c][i], g: 255 * [h, c, c, g, f, f][i], b: 255 * [f, f, h, c, c, g][i] };
        }
        function i(a, b, c, d) {
          var e = [p(w(a).toString(16)), p(w(b).toString(16)), p(w(c).toString(16))];
          return d && e[0].charAt(0) == e[0].charAt(1) && e[1].charAt(0) == e[1].charAt(1) && e[2].charAt(0) == e[2].charAt(1) ? e[0].charAt(0) + e[1].charAt(0) + e[2].charAt(0) : e.join("");
        }
        function j(a) {
          return (a = parseFloat(a)), (isNaN(a) || a < 0 || a > 1) && (a = 1), a;
        }
        function k(a, b) {
          n(a) && (a = "100%");
          var c = o(a);
          return (a = x(b, y(0, parseFloat(a)))), c && (a = parseInt(a * b, 10) / 100), v.abs(a - b) < 1e-6 ? 1 : (a % b) / parseFloat(b);
        }
        function l(a) {
          return x(1, y(0, a));
        }
        function m(a) {
          return parseInt(a, 16);
        }
        function n(a) {
          return "string" == typeof a && -1 != a.indexOf(".") && 1 === parseFloat(a);
        }
        function o(a) {
          return "string" == typeof a && -1 != a.indexOf("%");
        }
        function p(a) {
          return 1 == a.length ? "0" + a : "" + a;
        }
        function q(a) {
          return a <= 1 && (a = 100 * a + "%"), a;
        }
        function r(a) {
          a = a.replace(s, "").replace(t, "").toLowerCase();
          var b = !1;
          if (A[a]) (a = A[a]), (b = !0);
          else if ("transparent" == a) return { r: 0, g: 0, b: 0, a: 0, format: "name" };
          var c;
          return (c = C.rgb.exec(a))
            ? { r: c[1], g: c[2], b: c[3] }
            : (c = C.rgba.exec(a))
            ? { r: c[1], g: c[2], b: c[3], a: c[4] }
            : (c = C.hsl.exec(a))
            ? { h: c[1], s: c[2], l: c[3] }
            : (c = C.hsla.exec(a))
            ? { h: c[1], s: c[2], l: c[3], a: c[4] }
            : (c = C.hsv.exec(a))
            ? { h: c[1], s: c[2], v: c[3] }
            : (c = C.hex6.exec(a))
            ? { r: m(c[1]), g: m(c[2]), b: m(c[3]), format: b ? "name" : "hex" }
            : !!(c = C.hex3.exec(a)) && { r: m(c[1] + "" + c[1]), g: m(c[2] + "" + c[2]), b: m(c[3] + "" + c[3]), format: b ? "name" : "hex" };
        }
        var s = /^[\s,#]+/,
          t = /\s+$/,
          u = 0,
          v = Math,
          w = v.round,
          x = v.min,
          y = v.max,
          z = v.random;
        (b.fromRatio = function (a, c) {
          if ("object" == typeof a) {
            var d = {};
            for (var e in a) a.hasOwnProperty(e) && (d[e] = "a" === e ? a[e] : q(a[e]));
            a = d;
          }
          return b(a, c);
        }),
          (b.equals = function (a, c) {
            return !(!a || !c) && b(a).toRgbString() == b(c).toRgbString();
          }),
          (b.random = function () {
            return b.fromRatio({ r: z(), g: z(), b: z() });
          }),
          (b.desaturate = function (a, c) {
            c = 0 === c ? 0 : c || 10;
            var d = b(a).toHsl();
            return (d.s -= c / 100), (d.s = l(d.s)), b(d);
          }),
          (b.saturate = function (a, c) {
            c = 0 === c ? 0 : c || 10;
            var d = b(a).toHsl();
            return (d.s += c / 100), (d.s = l(d.s)), b(d);
          }),
          (b.greyscale = function (a) {
            return b.desaturate(a, 100);
          }),
          (b.lighten = function (a, c) {
            c = 0 === c ? 0 : c || 10;
            var d = b(a).toHsl();
            return (d.l += c / 100), (d.l = l(d.l)), b(d);
          }),
          (b.darken = function (a, c) {
            c = 0 === c ? 0 : c || 10;
            var d = b(a).toHsl();
            return (d.l -= c / 100), (d.l = l(d.l)), b(d);
          }),
          (b.complement = function (a) {
            var c = b(a).toHsl();
            return (c.h = (c.h + 180) % 360), b(c);
          }),
          (b.triad = function (a) {
            var c = b(a).toHsl(),
              d = c.h;
            return [b(a), b({ h: (d + 120) % 360, s: c.s, l: c.l }), b({ h: (d + 240) % 360, s: c.s, l: c.l })];
          }),
          (b.tetrad = function (a) {
            var c = b(a).toHsl(),
              d = c.h;
            return [b(a), b({ h: (d + 90) % 360, s: c.s, l: c.l }), b({ h: (d + 180) % 360, s: c.s, l: c.l }), b({ h: (d + 270) % 360, s: c.s, l: c.l })];
          }),
          (b.splitcomplement = function (a) {
            var c = b(a).toHsl(),
              d = c.h;
            return [b(a), b({ h: (d + 72) % 360, s: c.s, l: c.l }), b({ h: (d + 216) % 360, s: c.s, l: c.l })];
          }),
          (b.analogous = function (a, c, d) {
            (c = c || 6), (d = d || 30);
            var e = b(a).toHsl(),
              f = 360 / d,
              g = [b(a)];
            for (e.h = (e.h - ((f * c) >> 1) + 720) % 360; --c; ) (e.h = (e.h + f) % 360), g.push(b(e));
            return g;
          }),
          (b.monochromatic = function (a, c) {
            c = c || 6;
            for (var d = b(a).toHsv(), e = d.h, f = d.s, g = d.v, h = [], i = 1 / c; c--; ) h.push(b({ h: e, s: f, v: g })), (g = (g + i) % 1);
            return h;
          }),
          (b.readability = function (a, c) {
            var d = b(a).toRgb(),
              e = b(c).toRgb(),
              f = (299 * d.r + 587 * d.g + 114 * d.b) / 1e3,
              g = (299 * e.r + 587 * e.g + 114 * e.b) / 1e3,
              h = Math.max(d.r, e.r) - Math.min(d.r, e.r) + Math.max(d.g, e.g) - Math.min(d.g, e.g) + Math.max(d.b, e.b) - Math.min(d.b, e.b);
            return { brightness: Math.abs(f - g), color: h };
          }),
          (b.readable = function (a, c) {
            var d = b.readability(a, c);
            return d.brightness > 125 && d.color > 500;
          }),
          (b.mostReadable = function (a, c) {
            for (var d = null, e = 0, f = !1, g = 0; g < c.length; g++) {
              var h = b.readability(a, c[g]),
                i = h.brightness > 125 && h.color > 500,
                j = (h.brightness / 125) * 3 + h.color / 500;
              ((i && !f) || (i && f && j > e) || (!i && !f && j > e)) && ((f = i), (e = j), (d = b(c[g])));
            }
            return d;
          });
        var A = (b.names = {
            aliceblue: "f0f8ff",
            antiquewhite: "faebd7",
            aqua: "0ff",
            aquamarine: "7fffd4",
            azure: "f0ffff",
            beige: "f5f5dc",
            bisque: "ffe4c4",
            black: "000",
            blanchedalmond: "ffebcd",
            blue: "00f",
            blueviolet: "8a2be2",
            brown: "a52a2a",
            burlywood: "deb887",
            burntsienna: "ea7e5d",
            cadetblue: "5f9ea0",
            chartreuse: "7fff00",
            chocolate: "d2691e",
            coral: "ff7f50",
            cornflowerblue: "6495ed",
            cornsilk: "fff8dc",
            crimson: "dc143c",
            cyan: "0ff",
            darkblue: "00008b",
            darkcyan: "008b8b",
            darkgoldenrod: "b8860b",
            darkgray: "a9a9a9",
            darkgreen: "006400",
            darkgrey: "a9a9a9",
            darkkhaki: "bdb76b",
            darkmagenta: "8b008b",
            darkolivegreen: "556b2f",
            darkorange: "ff8c00",
            darkorchid: "9932cc",
            darkred: "8b0000",
            darksalmon: "e9967a",
            darkseagreen: "8fbc8f",
            darkslateblue: "483d8b",
            darkslategray: "2f4f4f",
            darkslategrey: "2f4f4f",
            darkturquoise: "00ced1",
            darkviolet: "9400d3",
            deeppink: "ff1493",
            deepskyblue: "00bfff",
            dimgray: "696969",
            dimgrey: "696969",
            dodgerblue: "1e90ff",
            firebrick: "b22222",
            floralwhite: "fffaf0",
            forestgreen: "228b22",
            fuchsia: "f0f",
            gainsboro: "dcdcdc",
            ghostwhite: "f8f8ff",
            gold: "ffd700",
            goldenrod: "daa520",
            gray: "808080",
            green: "008000",
            greenyellow: "adff2f",
            grey: "808080",
            honeydew: "f0fff0",
            hotpink: "ff69b4",
            indianred: "cd5c5c",
            indigo: "4b0082",
            ivory: "fffff0",
            khaki: "f0e68c",
            lavender: "e6e6fa",
            lavenderblush: "fff0f5",
            lawngreen: "7cfc00",
            lemonchiffon: "fffacd",
            lightblue: "add8e6",
            lightcoral: "f08080",
            lightcyan: "e0ffff",
            lightgoldenrodyellow: "fafad2",
            lightgray: "d3d3d3",
            lightgreen: "90ee90",
            lightgrey: "d3d3d3",
            lightpink: "ffb6c1",
            lightsalmon: "ffa07a",
            lightseagreen: "20b2aa",
            lightskyblue: "87cefa",
            lightslategray: "789",
            lightslategrey: "789",
            lightsteelblue: "b0c4de",
            lightyellow: "ffffe0",
            lime: "0f0",
            limegreen: "32cd32",
            linen: "faf0e6",
            magenta: "f0f",
            maroon: "800000",
            mediumaquamarine: "66cdaa",
            mediumblue: "0000cd",
            mediumorchid: "ba55d3",
            mediumpurple: "9370db",
            mediumseagreen: "3cb371",
            mediumslateblue: "7b68ee",
            mediumspringgreen: "00fa9a",
            mediumturquoise: "48d1cc",
            mediumvioletred: "c71585",
            midnightblue: "191970",
            mintcream: "f5fffa",
            mistyrose: "ffe4e1",
            moccasin: "ffe4b5",
            navajowhite: "ffdead",
            navy: "000080",
            oldlace: "fdf5e6",
            olive: "808000",
            olivedrab: "6b8e23",
            orange: "ffa500",
            orangered: "ff4500",
            orchid: "da70d6",
            palegoldenrod: "eee8aa",
            palegreen: "98fb98",
            paleturquoise: "afeeee",
            palevioletred: "db7093",
            papayawhip: "ffefd5",
            peachpuff: "ffdab9",
            peru: "cd853f",
            pink: "ffc0cb",
            plum: "dda0dd",
            powderblue: "b0e0e6",
            purple: "800080",
            red: "f00",
            rosybrown: "bc8f8f",
            royalblue: "4169e1",
            saddlebrown: "8b4513",
            salmon: "fa8072",
            sandybrown: "f4a460",
            seagreen: "2e8b57",
            seashell: "fff5ee",
            sienna: "a0522d",
            silver: "c0c0c0",
            skyblue: "87ceeb",
            slateblue: "6a5acd",
            slategray: "708090",
            slategrey: "708090",
            snow: "fffafa",
            springgreen: "00ff7f",
            steelblue: "4682b4",
            tan: "d2b48c",
            teal: "008080",
            thistle: "d8bfd8",
            tomato: "ff6347",
            turquoise: "40e0d0",
            violet: "ee82ee",
            wheat: "f5deb3",
            white: "fff",
            whitesmoke: "f5f5f5",
            yellow: "ff0",
            yellowgreen: "9acd32",
          }),
          B = (b.hexNames = (function (a) {
            var b = {};
            for (var c in a) a.hasOwnProperty(c) && (b[a[c]] = c);
            return b;
          })(A)),
          C = (function () {
            var a = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",
              b = "[\\s|\\(]+(" + a + ")[,|\\s]+(" + a + ")[,|\\s]+(" + a + ")\\s*\\)?",
              c = "[\\s|\\(]+(" + a + ")[,|\\s]+(" + a + ")[,|\\s]+(" + a + ")[,|\\s]+(" + a + ")\\s*\\)?";
            return {
              rgb: new RegExp("rgb" + b),
              rgba: new RegExp("rgba" + c),
              hsl: new RegExp("hsl" + b),
              hsla: new RegExp("hsla" + c),
              hsv: new RegExp("hsv" + b),
              hex3: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
              hex6: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            };
          })();
        a.tinycolor = b;
      })();
    var t = a.tinycolor;
    b(function () {
      b.fn.spectrum.load && b.fn.spectrum.processNativeColorInputs();
    });
  })(window, jQuery),
  (function (a) {
    "use strict";
    if ("function" == typeof bootstrap) bootstrap("promise", a);
    else if ("object" == typeof exports && "object" == typeof module) module.exports = a();
    else if ("function" == typeof define && define.amd) define(a);
    else if ("undefined" != typeof ses) {
      if (!ses.ok()) return;
      ses.makeQ = a;
    } else {
      if ("undefined" == typeof self) throw new Error("This environment was not anticipated by Q. Please file a bug.");
      self.Q = a();
    }
  })(function () {
    "use strict";
    function a(a) {
      return function () {
        return U.apply(a, arguments);
      };
    }
    function b(a) {
      return a === Object(a);
    }
    function c(a) {
      return "[object StopIteration]" === aa(a) || a instanceof Q;
    }
    function d(a, b) {
      if (O && b.stack && "object" == typeof a && null !== a && a.stack && -1 === a.stack.indexOf(ba)) {
        for (var c = [], d = b; d; d = d.source) d.stack && c.unshift(d.stack);
        c.unshift(a.stack);
        var f = c.join("\n" + ba + "\n");
        a.stack = e(f);
      }
    }
    function e(a) {
      for (var b = a.split("\n"), c = [], d = 0; d < b.length; ++d) {
        var e = b[d];
        h(e) || f(e) || !e || c.push(e);
      }
      return c.join("\n");
    }
    function f(a) {
      return -1 !== a.indexOf("(module.js:") || -1 !== a.indexOf("(node.js:");
    }
    function g(a) {
      var b = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(a);
      if (b) return [b[1], Number(b[2])];
      var c = /at ([^ ]+):(\d+):(?:\d+)$/.exec(a);
      if (c) return [c[1], Number(c[2])];
      var d = /.*@(.+):(\d+)$/.exec(a);
      return d ? [d[1], Number(d[2])] : void 0;
    }
    function h(a) {
      var b = g(a);
      if (!b) return !1;
      var c = b[0],
        d = b[1];
      return c === P && d >= R && d <= fa;
    }
    function i() {
      if (O)
        try {
          throw new Error();
        } catch (d) {
          var a = d.stack.split("\n"),
            b = a[0].indexOf("@") > 0 ? a[1] : a[2],
            c = g(b);
          if (!c) return;
          return (P = c[0]), c[1];
        }
    }
    function j(a) {
      return a instanceof n ? a : r(a) ? A(a) : z(a);
    }
    function k() {
      function a(a) {
        (b = a),
          (f.source = a),
          W(
            c,
            function (b, c) {
              j.nextTick(function () {
                a.promiseDispatch.apply(a, c);
              });
            },
            void 0
          ),
          (c = void 0),
          (d = void 0);
      }
      var b,
        c = [],
        d = [],
        e = Z(k.prototype),
        f = Z(n.prototype);
      if (
        ((f.promiseDispatch = function (a, e, f) {
          var g = V(arguments);
          c
            ? (c.push(g), "when" === e && f[1] && d.push(f[1]))
            : j.nextTick(function () {
                b.promiseDispatch.apply(b, g);
              });
        }),
        (f.valueOf = function () {
          if (c) return f;
          var a = p(b);
          return q(a) && (b = a), a;
        }),
        (f.inspect = function () {
          return b ? b.inspect() : { state: "pending" };
        }),
        j.longStackSupport && O)
      )
        try {
          throw new Error();
        } catch (a) {
          f.stack = a.stack.substring(a.stack.indexOf("\n") + 1);
        }
      return (
        (e.promise = f),
        (e.resolve = function (c) {
          b || a(j(c));
        }),
        (e.fulfill = function (c) {
          b || a(z(c));
        }),
        (e.reject = function (c) {
          b || a(y(c));
        }),
        (e.notify = function (a) {
          b ||
            W(
              d,
              function (b, c) {
                j.nextTick(function () {
                  c(a);
                });
              },
              void 0
            );
        }),
        e
      );
    }
    function l(a) {
      if ("function" != typeof a) throw new TypeError("resolver must be a function.");
      var b = k();
      try {
        a(b.resolve, b.reject, b.notify);
      } catch (a) {
        b.reject(a);
      }
      return b.promise;
    }
    function m(a) {
      return l(function (b, c) {
        for (var d = 0, e = a.length; d < e; d++) j(a[d]).then(b, c);
      });
    }
    function n(a, b, c) {
      void 0 === b &&
        (b = function (a) {
          return y(new Error("Promise does not support operation: " + a));
        }),
        void 0 === c &&
          (c = function () {
            return { state: "unknown" };
          });
      var d = Z(n.prototype);
      if (
        ((d.promiseDispatch = function (c, e, f) {
          var g;
          try {
            g = a[e] ? a[e].apply(d, f) : b.call(d, e, f);
          } catch (a) {
            g = y(a);
          }
          c && c(g);
        }),
        (d.inspect = c),
        c)
      ) {
        var e = c();
        "rejected" === e.state && (d.exception = e.reason),
          (d.valueOf = function () {
            var a = c();
            return "pending" === a.state || "rejected" === a.state ? d : a.value;
          });
      }
      return d;
    }
    function o(a, b, c, d) {
      return j(a).then(b, c, d);
    }
    function p(a) {
      if (q(a)) {
        var b = a.inspect();
        if ("fulfilled" === b.state) return b.value;
      }
      return a;
    }
    function q(a) {
      return a instanceof n;
    }
    function r(a) {
      return b(a) && "function" == typeof a.then;
    }
    function s(a) {
      return q(a) && "pending" === a.inspect().state;
    }
    function t(a) {
      return !q(a) || "fulfilled" === a.inspect().state;
    }
    function u(a) {
      return q(a) && "rejected" === a.inspect().state;
    }
    function v() {
      (ca.length = 0), (da.length = 0), ea || (ea = !0);
    }
    function w(a, b) {
      ea && (da.push(a), b && void 0 !== b.stack ? ca.push(b.stack) : ca.push("(no stack) " + b));
    }
    function x(a) {
      if (ea) {
        var b = X(da, a);
        -1 !== b && (da.splice(b, 1), ca.splice(b, 1));
      }
    }
    function y(a) {
      var b = n(
        {
          when: function (b) {
            return b && x(this), b ? b(a) : this;
          },
        },
        function () {
          return this;
        },
        function () {
          return { state: "rejected", reason: a };
        }
      );
      return w(b, a), b;
    }
    function z(a) {
      return n(
        {
          when: function () {
            return a;
          },
          get: function (b) {
            return a[b];
          },
          set: function (b, c) {
            a[b] = c;
          },
          delete: function (b) {
            delete a[b];
          },
          post: function (b, c) {
            return null === b || void 0 === b ? a.apply(void 0, c) : a[b].apply(a, c);
          },
          apply: function (b, c) {
            return a.apply(b, c);
          },
          keys: function () {
            return _(a);
          },
        },
        void 0,
        function () {
          return { state: "fulfilled", value: a };
        }
      );
    }
    function A(a) {
      var b = k();
      return (
        j.nextTick(function () {
          try {
            a.then(b.resolve, b.reject, b.notify);
          } catch (a) {
            b.reject(a);
          }
        }),
        b.promise
      );
    }
    function B(a) {
      return n(
        { isDef: function () {} },
        function (b, c) {
          return H(a, b, c);
        },
        function () {
          return j(a).inspect();
        }
      );
    }
    function C(a, b, c) {
      return j(a).spread(b, c);
    }
    function D(a) {
      return function () {
        function b(a, b) {
          var g;
          if ("undefined" == typeof StopIteration) {
            try {
              g = d[a](b);
            } catch (a) {
              return y(a);
            }
            return g.done ? j(g.value) : o(g.value, e, f);
          }
          try {
            g = d[a](b);
          } catch (a) {
            return c(a) ? j(a.value) : y(a);
          }
          return o(g, e, f);
        }
        var d = a.apply(this, arguments),
          e = b.bind(b, "next"),
          f = b.bind(b, "throw");
        return e();
      };
    }
    function E(a) {
      j.done(j.async(a)());
    }
    function F(a) {
      throw new Q(a);
    }
    function G(a) {
      return function () {
        return C([this, I(arguments)], function (b, c) {
          return a.apply(b, c);
        });
      };
    }
    function H(a, b, c) {
      return j(a).dispatch(b, c);
    }
    function I(a) {
      return o(a, function (a) {
        var b = 0,
          c = k();
        return (
          W(
            a,
            function (d, e, f) {
              var g;
              q(e) && "fulfilled" === (g = e.inspect()).state
                ? (a[f] = g.value)
                : (++b,
                  o(
                    e,
                    function (d) {
                      (a[f] = d), 0 == --b && c.resolve(a);
                    },
                    c.reject,
                    function (a) {
                      c.notify({ index: f, value: a });
                    }
                  ));
            },
            void 0
          ),
          0 === b && c.resolve(a),
          c.promise
        );
      });
    }
    function J(a) {
      if (0 === a.length) return j.resolve();
      var b = j.defer(),
        c = 0;
      return (
        W(
          a,
          function (d, e, f) {
            function g(a) {
              b.resolve(a);
            }
            function h() {
              0 === --c && b.reject(new Error("Can't get fulfillment value from any promise, all promises were rejected."));
            }
            function i(a) {
              b.notify({ index: f, value: a });
            }
            var j = a[f];
            c++, o(j, g, h, i);
          },
          void 0
        ),
        b.promise
      );
    }
    function K(a) {
      return o(a, function (a) {
        return (
          (a = Y(a, j)),
          o(
            I(
              Y(a, function (a) {
                return o(a, S, S);
              })
            ),
            function () {
              return a;
            }
          )
        );
      });
    }
    function L(a) {
      return j(a).allSettled();
    }
    function M(a, b) {
      return j(a).then(void 0, void 0, b);
    }
    function N(a, b) {
      return j(a).nodeify(b);
    }
    var O = !1;
    try {
      throw new Error();
    } catch (a) {
      O = !!a.stack;
    }
    var P,
      Q,
      R = i(),
      S = function () {},
      T = (function () {
        function a() {
          for (; b.next; ) {
            b = b.next;
            var c = b.task;
            b.task = void 0;
            var e = b.domain;
            e && ((b.domain = void 0), e.enter());
            try {
              c();
            } catch (b) {
              if (f) throw (e && e.exit(), setTimeout(a, 0), e && e.enter(), b);
              setTimeout(function () {
                throw b;
              }, 0);
            }
            e && e.exit();
          }
          d = !1;
        }
        var b = { task: void 0, next: null },
          c = b,
          d = !1,
          e = void 0,
          f = !1;
        if (
          ((T = function (a) {
            (c = c.next = { task: a, domain: f && process.domain, next: null }), d || ((d = !0), e());
          }),
          "undefined" != typeof process && process.nextTick)
        )
          (f = !0),
            (e = function () {
              process.nextTick(a);
            });
        else if ("function" == typeof setImmediate)
          e =
            "undefined" != typeof window
              ? setImmediate.bind(window, a)
              : function () {
                  setImmediate(a);
                };
        else if ("undefined" != typeof MessageChannel) {
          var g = new MessageChannel();
          g.port1.onmessage = function () {
            (e = h), (g.port1.onmessage = a), a();
          };
          var h = function () {
            g.port2.postMessage(0);
          };
          e = function () {
            setTimeout(a, 0), h();
          };
        } else
          e = function () {
            setTimeout(a, 0);
          };
        return T;
      })(),
      U = Function.call,
      V = a(Array.prototype.slice),
      W = a(
        Array.prototype.reduce ||
          function (a, b) {
            var c = 0,
              d = this.length;
            if (1 === arguments.length)
              for (;;) {
                if (c in this) {
                  b = this[c++];
                  break;
                }
                if (++c >= d) throw new TypeError();
              }
            for (; c < d; c++) c in this && (b = a(b, this[c], c));
            return b;
          }
      ),
      X = a(
        Array.prototype.indexOf ||
          function (a) {
            for (var b = 0; b < this.length; b++) if (this[b] === a) return b;
            return -1;
          }
      ),
      Y = a(
        Array.prototype.map ||
          function (a, b) {
            var c = this,
              d = [];
            return (
              W(
                c,
                function (e, f, g) {
                  d.push(a.call(b, f, g, c));
                },
                void 0
              ),
              d
            );
          }
      ),
      Z =
        Object.create ||
        function (a) {
          function b() {}
          return (b.prototype = a), new b();
        },
      $ = a(Object.prototype.hasOwnProperty),
      _ =
        Object.keys ||
        function (a) {
          var b = [];
          for (var c in a) $(a, c) && b.push(c);
          return b;
        },
      aa = a(Object.prototype.toString);
    Q =
      "undefined" != typeof ReturnValue
        ? ReturnValue
        : function (a) {
            this.value = a;
          };
    var ba = "From previous event:";
    (j.resolve = j),
      (j.nextTick = T),
      (j.longStackSupport = !1),
      "object" == typeof process && process && process.env && process.env.Q_DEBUG && (j.longStackSupport = !0),
      (j.defer = k),
      (k.prototype.makeNodeResolver = function () {
        var a = this;
        return function (b, c) {
          b ? a.reject(b) : arguments.length > 2 ? a.resolve(V(arguments, 1)) : a.resolve(c);
        };
      }),
      (j.Promise = l),
      (j.promise = l),
      (l.race = m),
      (l.all = I),
      (l.reject = y),
      (l.resolve = j),
      (j.passByCopy = function (a) {
        return a;
      }),
      (n.prototype.passByCopy = function () {
        return this;
      }),
      (j.join = function (a, b) {
        return j(a).join(b);
      }),
      (n.prototype.join = function (a) {
        return j([this, a]).spread(function (a, b) {
          if (a === b) return a;
          throw new Error("Can't join: not the same: " + a + " " + b);
        });
      }),
      (j.race = m),
      (n.prototype.race = function () {
        return this.then(j.race);
      }),
      (j.makePromise = n),
      (n.prototype.toString = function () {
        return "[object Promise]";
      }),
      (n.prototype.then = function (a, b, c) {
        function e(b) {
          try {
            return "function" == typeof a ? a(b) : b;
          } catch (a) {
            return y(a);
          }
        }
        function f(a) {
          if ("function" == typeof b) {
            d(a, h);
            try {
              return b(a);
            } catch (a) {
              return y(a);
            }
          }
          return y(a);
        }
        function g(a) {
          return "function" == typeof c ? c(a) : a;
        }
        var h = this,
          i = k(),
          l = !1;
        return (
          j.nextTick(function () {
            h.promiseDispatch(
              function (a) {
                l || ((l = !0), i.resolve(e(a)));
              },
              "when",
              [
                function (a) {
                  l || ((l = !0), i.resolve(f(a)));
                },
              ]
            );
          }),
          h.promiseDispatch(void 0, "when", [
            void 0,
            function (a) {
              var b,
                c = !1;
              try {
                b = g(a);
              } catch (a) {
                if (((c = !0), !j.onerror)) throw a;
                j.onerror(a);
              }
              c || i.notify(b);
            },
          ]),
          i.promise
        );
      }),
      (j.tap = function (a, b) {
        return j(a).tap(b);
      }),
      (n.prototype.tap = function (a) {
        return (
          (a = j(a)),
          this.then(function (b) {
            return a.fcall(b).thenResolve(b);
          })
        );
      }),
      (j.when = o),
      (n.prototype.thenResolve = function (a) {
        return this.then(function () {
          return a;
        });
      }),
      (j.thenResolve = function (a, b) {
        return j(a).thenResolve(b);
      }),
      (n.prototype.thenReject = function (a) {
        return this.then(function () {
          throw a;
        });
      }),
      (j.thenReject = function (a, b) {
        return j(a).thenReject(b);
      }),
      (j.nearer = p),
      (j.isPromise = q),
      (j.isPromiseAlike = r),
      (j.isPending = s),
      (n.prototype.isPending = function () {
        return "pending" === this.inspect().state;
      }),
      (j.isFulfilled = t),
      (n.prototype.isFulfilled = function () {
        return "fulfilled" === this.inspect().state;
      }),
      (j.isRejected = u),
      (n.prototype.isRejected = function () {
        return "rejected" === this.inspect().state;
      });
    var ca = [],
      da = [],
      ea = !0;
    (j.resetUnhandledRejections = v),
      (j.getUnhandledReasons = function () {
        return ca.slice();
      }),
      (j.stopUnhandledRejectionTracking = function () {
        v(), (ea = !1);
      }),
      v(),
      (j.reject = y),
      (j.fulfill = z),
      (j.master = B),
      (j.spread = C),
      (n.prototype.spread = function (a, b) {
        return this.all().then(function (b) {
          return a.apply(void 0, b);
        }, b);
      }),
      (j.async = D),
      (j.spawn = E),
      (j.return = F),
      (j.promised = G),
      (j.dispatch = H),
      (n.prototype.dispatch = function (a, b) {
        var c = this,
          d = k();
        return (
          j.nextTick(function () {
            c.promiseDispatch(d.resolve, a, b);
          }),
          d.promise
        );
      }),
      (j.get = function (a, b) {
        return j(a).dispatch("get", [b]);
      }),
      (n.prototype.get = function (a) {
        return this.dispatch("get", [a]);
      }),
      (j.set = function (a, b, c) {
        return j(a).dispatch("set", [b, c]);
      }),
      (n.prototype.set = function (a, b) {
        return this.dispatch("set", [a, b]);
      }),
      (j.del = j.delete = function (a, b) {
        return j(a).dispatch("delete", [b]);
      }),
      (n.prototype.del = n.prototype.delete = function (a) {
        return this.dispatch("delete", [a]);
      }),
      (j.mapply = j.post = function (a, b, c) {
        return j(a).dispatch("post", [b, c]);
      }),
      (n.prototype.mapply = n.prototype.post = function (a, b) {
        return this.dispatch("post", [a, b]);
      }),
      (j.send = j.mcall = j.invoke = function (a, b) {
        return j(a).dispatch("post", [b, V(arguments, 2)]);
      }),
      (n.prototype.send = n.prototype.mcall = n.prototype.invoke = function (a) {
        return this.dispatch("post", [a, V(arguments, 1)]);
      }),
      (j.fapply = function (a, b) {
        return j(a).dispatch("apply", [void 0, b]);
      }),
      (n.prototype.fapply = function (a) {
        return this.dispatch("apply", [void 0, a]);
      }),
      (j.try = j.fcall = function (a) {
        return j(a).dispatch("apply", [void 0, V(arguments, 1)]);
      }),
      (n.prototype.fcall = function () {
        return this.dispatch("apply", [void 0, V(arguments)]);
      }),
      (j.fbind = function (a) {
        var b = j(a),
          c = V(arguments, 1);
        return function () {
          return b.dispatch("apply", [this, c.concat(V(arguments))]);
        };
      }),
      (n.prototype.fbind = function () {
        var a = this,
          b = V(arguments);
        return function () {
          return a.dispatch("apply", [this, b.concat(V(arguments))]);
        };
      }),
      (j.keys = function (a) {
        return j(a).dispatch("keys", []);
      }),
      (n.prototype.keys = function () {
        return this.dispatch("keys", []);
      }),
      (j.all = I),
      (n.prototype.all = function () {
        return I(this);
      }),
      (j.any = J),
      (n.prototype.any = function () {
        return J(this);
      }),
      (j.allResolved = (function (a, b, c) {
        return function () {
          return "undefined" != typeof console && "function" == typeof console.warn && console.warn(b + " is deprecated, use " + c + " instead.", new Error("").stack), a.apply(a, arguments);
        };
      })(K, "allResolved", "allSettled")),
      (n.prototype.allResolved = function () {
        return K(this);
      }),
      (j.allSettled = L),
      (n.prototype.allSettled = function () {
        return this.then(function (a) {
          return I(
            Y(a, function (a) {
              function b() {
                return a.inspect();
              }
              return (a = j(a)), a.then(b, b);
            })
          );
        });
      }),
      (j.fail = j.catch = function (a, b) {
        return j(a).then(void 0, b);
      }),
      (n.prototype.fail = n.prototype.catch = function (a) {
        return this.then(void 0, a);
      }),
      (j.progress = M),
      (n.prototype.progress = function (a) {
        return this.then(void 0, void 0, a);
      }),
      (j.fin = j.finally = function (a, b) {
        return j(a).finally(b);
      }),
      (n.prototype.fin = n.prototype.finally = function (a) {
        return (
          (a = j(a)),
          this.then(
            function (b) {
              return a.fcall().then(function () {
                return b;
              });
            },
            function (b) {
              return a.fcall().then(function () {
                throw b;
              });
            }
          )
        );
      }),
      (j.done = function (a, b, c, d) {
        return j(a).done(b, c, d);
      }),
      (n.prototype.done = function (a, b, c) {
        var e = function (a) {
            j.nextTick(function () {
              if ((d(a, f), !j.onerror)) throw a;
              j.onerror(a);
            });
          },
          f = a || b || c ? this.then(a, b, c) : this;
        "object" == typeof process && process && process.domain && (e = process.domain.bind(e)), f.then(void 0, e);
      }),
      (j.timeout = function (a, b, c) {
        return j(a).timeout(b, c);
      }),
      (n.prototype.timeout = function (a, b) {
        var c = k(),
          d = setTimeout(function () {
            (b && "string" != typeof b) || ((b = new Error(b || "Timed out after " + a + " ms")), (b.code = "ETIMEDOUT")), c.reject(b);
          }, a);
        return (
          this.then(
            function (a) {
              clearTimeout(d), c.resolve(a);
            },
            function (a) {
              clearTimeout(d), c.reject(a);
            },
            c.notify
          ),
          c.promise
        );
      }),
      (j.delay = function (a, b) {
        return void 0 === b && ((b = a), (a = void 0)), j(a).delay(b);
      }),
      (n.prototype.delay = function (a) {
        return this.then(function (b) {
          var c = k();
          return (
            setTimeout(function () {
              c.resolve(b);
            }, a),
            c.promise
          );
        });
      }),
      (j.nfapply = function (a, b) {
        return j(a).nfapply(b);
      }),
      (n.prototype.nfapply = function (a) {
        var b = k(),
          c = V(a);
        return c.push(b.makeNodeResolver()), this.fapply(c).fail(b.reject), b.promise;
      }),
      (j.nfcall = function (a) {
        var b = V(arguments, 1);
        return j(a).nfapply(b);
      }),
      (n.prototype.nfcall = function () {
        var a = V(arguments),
          b = k();
        return a.push(b.makeNodeResolver()), this.fapply(a).fail(b.reject), b.promise;
      }),
      (j.nfbind = j.denodeify = function (a) {
        var b = V(arguments, 1);
        return function () {
          var c = b.concat(V(arguments)),
            d = k();
          return c.push(d.makeNodeResolver()), j(a).fapply(c).fail(d.reject), d.promise;
        };
      }),
      (n.prototype.nfbind = n.prototype.denodeify = function () {
        var a = V(arguments);
        return a.unshift(this), j.denodeify.apply(void 0, a);
      }),
      (j.nbind = function (a, b) {
        var c = V(arguments, 2);
        return function () {
          function d() {
            return a.apply(b, arguments);
          }
          var e = c.concat(V(arguments)),
            f = k();
          return e.push(f.makeNodeResolver()), j(d).fapply(e).fail(f.reject), f.promise;
        };
      }),
      (n.prototype.nbind = function () {
        var a = V(arguments, 0);
        return a.unshift(this), j.nbind.apply(void 0, a);
      }),
      (j.nmapply = j.npost = function (a, b, c) {
        return j(a).npost(b, c);
      }),
      (n.prototype.nmapply = n.prototype.npost = function (a, b) {
        var c = V(b || []),
          d = k();
        return c.push(d.makeNodeResolver()), this.dispatch("post", [a, c]).fail(d.reject), d.promise;
      }),
      (j.nsend = j.nmcall = j.ninvoke = function (a, b) {
        var c = V(arguments, 2),
          d = k();
        return c.push(d.makeNodeResolver()), j(a).dispatch("post", [b, c]).fail(d.reject), d.promise;
      }),
      (n.prototype.nsend = n.prototype.nmcall = n.prototype.ninvoke = function (a) {
        var b = V(arguments, 1),
          c = k();
        return b.push(c.makeNodeResolver()), this.dispatch("post", [a, b]).fail(c.reject), c.promise;
      }),
      (j.nodeify = N),
      (n.prototype.nodeify = function (a) {
        if (!a) return this;
        this.then(
          function (b) {
            j.nextTick(function () {
              a(null, b);
            });
          },
          function (b) {
            j.nextTick(function () {
              a(b);
            });
          }
        );
      });
    var fa = i();
    return j;
  }),
  (function () {
    var a = $.namespace("pskl.rendering");
    (a.DrawingLoop = function () {
      (this.requestAnimationFrame = this.getRequestAnimationFrameShim_()), (this.isRunning = !1), (this.previousTime = 0), (this.callbacks = []), (this.loop_ = this.loop_.bind(this));
    }),
      (a.DrawingLoop.prototype.addCallback = function (a, b, c) {
        var d = { fn: a, scope: b, args: c };
        return this.callbacks.push(d), d;
      }),
      (a.DrawingLoop.prototype.removeCallback = function (a) {
        var b = this.callbacks.indexOf(a);
        -1 != b && this.callbacks.splice(b, 1);
      }),
      (a.DrawingLoop.prototype.start = function () {
        (this.isRunning = !0), this.loop_();
      }),
      (a.DrawingLoop.prototype.loop_ = function () {
        var a = Date.now(),
          b = a - this.previousTime;
        this.executeCallbacks_(b), (this.previousTime = a), this.requestAnimationFrame.call(window, this.loop_);
      }),
      (a.DrawingLoop.prototype.executeCallbacks_ = function (a) {
        for (var b = 0; b < this.callbacks.length; b++) {
          var c = this.callbacks[b];
          c.fn.call(c.scope, a, c.args);
        }
      }),
      (a.DrawingLoop.prototype.stop = function () {
        this.isRunning = !1;
      }),
      (a.DrawingLoop.prototype.getRequestAnimationFrameShim_ = function () {
        return (
          window.requestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          function (a) {
            window.setTimeout(a, 1e3 / 60);
          }
        );
      });
  })(),
  (function () {
    var a = $.namespace("pskl.model"),
      b = 0;
    (a.Frame = function (c, d) {
      if (!c || !d) throw "Bad arguments in pskl.model.Frame constructor : " + c + ", " + d;
      (this.width = c), (this.height = d), (this.id = b++), (this.version = 0), (this.pixels = a.Frame.createEmptyPixelGrid_(c, d)), (this.stateIndex = 0);
    }),
      (a.Frame.fromPixelGrid = function (a, b, c) {
        if (a.length) {
          var d, e, f;
          if (a[0].length) {
            (d = a.length), (e = a[0].length), (f = []);
            for (var g = 0; g < e; g++) for (var h = 0; h < d; h++) "string" == typeof a[h][g] ? (f[g * d + h] = pskl.utils.colorToInt(a[h][g])) : (f[g * d + h] = a[h][g]);
          } else {
            if (!b || !c) throw "Bad arguments in pskl.model.frame.fromPixelGrid, missing width and height";
            (d = b), (e = c), (f = a);
          }
          var i = new pskl.model.Frame(d, e);
          return i.setPixels(f), i;
        }
        throw "Bad arguments in pskl.model.Frame.fromPixelGrid";
      });
    var c = {};
    (a.Frame.createEmptyPixelGrid_ = function (a, b) {
      var d,
        e = a + "-" + b;
      if (c[e]) d = c[e];
      else {
        d = c[e] = new Uint32Array(a * b);
        var f = pskl.utils.colorToInt(Constants.TRANSPARENT_COLOR);
        d.fill(f);
      }
      return new Uint32Array(d);
    }),
      (a.Frame.createEmptyFromFrame = function (b) {
        return new a.Frame(b.getWidth(), b.getHeight());
      }),
      (a.Frame.prototype.clone = function () {
        var b = new a.Frame(this.width, this.height);
        return b.setPixels(this.pixels), b;
      }),
      (a.Frame.prototype.getPixels = function () {
        return this.clonePixels_(this.pixels);
      }),
      (a.Frame.prototype.setPixels = function (a) {
        (this.pixels = this.clonePixels_(a)), this.version++;
      }),
      (a.Frame.prototype.clear = function () {
        (this.pixels = a.Frame.createEmptyPixelGrid_(this.getWidth(), this.getHeight())), this.version++;
      }),
      (a.Frame.prototype.clonePixels_ = function (a) {
        return new Uint32Array(a);
      }),
      (a.Frame.prototype.getHash = function () {
        return [this.id, this.version].join("-");
      }),
      (a.Frame.prototype.setPixel = function (a, b, c) {
        if (this.containsPixel(a, b)) {
          var d = b * this.width + a,
            e = this.pixels[d];
          (c = pskl.utils.colorToInt(c)), e !== c && ((this.pixels[d] = c || pskl.utils.colorToInt(Constants.TRANSPARENT_COLOR)), this.version++);
        }
      }),
      (a.Frame.prototype.getPixel = function (a, b) {
        return this.containsPixel(a, b) ? this.pixels[b * this.width + a] : null;
      }),
      (a.Frame.prototype.forEachPixel = function (a) {
        for (var b = this.getWidth(), c = this.getHeight(), d = b * c, e = 0; e < d; e++) a(this.pixels[e], e % b, Math.floor(e / b), this);
      }),
      (a.Frame.prototype.getWidth = function () {
        return this.width;
      }),
      (a.Frame.prototype.getHeight = function () {
        return this.height;
      }),
      (a.Frame.prototype.containsPixel = function (a, b) {
        return a >= 0 && b >= 0 && a < this.width && b < this.height;
      }),
      (a.Frame.prototype.isSameSize = function (a) {
        return this.getHeight() == a.getHeight() && this.getWidth() == a.getWidth();
      });
  })(),
  (function () {
    var a = $.namespace("pskl.model");
    (a.Layer = function (a) {
      if (!a) throw "Invalid arguments in Layer constructor : 'name' is mandatory";
      (this.name = a), (this.frames = []), (this.opacity = 1);
    }),
      (a.Layer.fromFrames = function (b, c) {
        var d = new a.Layer(b);
        return c.forEach(d.addFrame.bind(d)), d;
      }),
      (a.Layer.prototype.getName = function () {
        return this.name;
      }),
      (a.Layer.prototype.setName = function (a) {
        this.name = a;
      }),
      (a.Layer.prototype.getOpacity = function () {
        return this.opacity;
      }),
      (a.Layer.prototype.setOpacity = function (a) {
        "string" == typeof a && (a = parseFloat(a)), null === a || isNaN(a) || a < 0 || a > 1 || (this.opacity = +a.toFixed(3));
      }),
      (a.Layer.prototype.isTransparent = function () {
        return this.opacity < 1;
      }),
      (a.Layer.prototype.getFrames = function () {
        return this.frames;
      }),
      (a.Layer.prototype.getFrameAt = function (a) {
        return this.frames[a];
      }),
      (a.Layer.prototype.addFrame = function (a) {
        this.frames.push(a);
      }),
      (a.Layer.prototype.addFrameAt = function (a, b) {
        this.frames.splice(b, 0, a);
      }),
      (a.Layer.prototype.removeFrame = function (a) {
        var b = this.frames.indexOf(a);
        this.removeFrameAt(b);
      }),
      (a.Layer.prototype.removeFrameAt = function (a) {
        this.frames[a] ? this.frames.splice(a, 1) : console.error("Invalid index in removeFrameAt : %s (size : %s)", a, this.size());
      }),
      (a.Layer.prototype.moveFrame = function (a, b) {
        var c = this.frames.splice(a, 1)[0];
        this.frames.splice(b, 0, c);
      }),
      (a.Layer.prototype.swapFramesAt = function (a, b) {
        var c = this.frames[a],
          d = this.frames[b];
        c && d ? ((this.frames[b] = c), (this.frames[a] = d)) : console.error("Frame not found in moveFrameAt (from %s, to %s)", a, b);
      }),
      (a.Layer.prototype.duplicateFrame = function (a) {
        var b = this.frames.indexOf(a);
        this.duplicateFrameAt(b);
      }),
      (a.Layer.prototype.duplicateFrameAt = function (a) {
        var b = this.frames[a];
        if (b) {
          var c = b.clone();
          this.addFrameAt(c, a);
        } else console.error("Frame not found in duplicateFrameAt (at %s)", a);
      }),
      (a.Layer.prototype.size = function () {
        return this.frames.length;
      }),
      (a.Layer.prototype.getHash = function () {
        return this.frames
          .map(function (a) {
            return a.getHash();
          })
          .join("-");
      });
  })(),
  (function () {
    $.namespace("pskl.model.piskel").Descriptor = function (a, b, c) {
      (this.name = a), (this.description = b), (this.isPublic = c);
    };
  })(),
  (function () {
    var a = $.namespace("pskl.model.frame"),
      b = function (a) {
        return pskl.utils.FrameUtils.toImage(a);
      },
      c = function (a) {
        return a;
      };
    (a.CachedFrameProcessor = function () {
      (this.cache_ = {}), (this.cacheQueue_ = []), (this.frameProcessor = b), (this.outputCloner = c), (this.defaultNamespace = "__cache_default__");
    }),
      (a.CachedFrameProcessor.prototype.clear = function () {
        this.cache_ = {};
      }),
      (a.CachedFrameProcessor.prototype.setFrameProcessor = function (a) {
        this.frameProcessor = a;
      }),
      (a.CachedFrameProcessor.prototype.setOutputCloner = function (a) {
        this.outputCloner = a;
      }),
      (a.CachedFrameProcessor.prototype.get = function (a, b) {
        var c = null;
        (b = b || "__cache_default__"), this.cache_[b] || (this.cache_[b] = {});
        var d = this.cache_[b],
          e = a.getHash();
        if (d[e]) c = d[e];
        else if (((c = this.frameProcessor(a)), (d[e] = c), this.cacheQueue_.unshift([b, e]), this.cacheQueue_.length > 100)) {
          var f = this.cacheQueue_.pop();
          this.cache_[f[0]][f[1]] = null;
        }
        return c;
      });
  })(),
  (function () {
    var a = $.namespace("pskl.model.frame");
    (a.AsyncCachedFrameProcessor = function (b) {
      a.CachedFrameProcessor.call(this, b);
    }),
      pskl.utils.inherit(a.AsyncCachedFrameProcessor, a.CachedFrameProcessor),
      (a.AsyncCachedFrameProcessor.prototype.get = function (a, b) {
        var c = null;
        (b = b || this.defaultNamespace), this.cache_[b] || (this.cache_[b] = {});
        var d = Q.defer(),
          e = this.cache_[b],
          f = a.getHash();
        if (e[f]) c = e[f];
        else {
          var g = this.onProcessorComplete_.bind(this, d, e, f);
          this.frameProcessor(a, g);
        }
        return c && d.resolve(c), d.promise;
      }),
      (a.AsyncCachedFrameProcessor.prototype.onProcessorComplete_ = function (a, b, c, d) {
        (b[c] = d), a.resolve(d);
      });
  })(),
  (function () {
    var a = $.namespace("pskl.model.frame");
    (a.RenderedFrame = function (a, b, c, d) {
      (this.width = b), (this.height = c), (this.id = d), (this.renderFn = a);
    }),
      (a.RenderedFrame.prototype.getRenderedFrame = function () {
        return this.renderFn();
      }),
      (a.RenderedFrame.prototype.getHash = function () {
        return this.id;
      }),
      (a.RenderedFrame.prototype.getWidth = function () {
        return this.width;
      }),
      (a.RenderedFrame.prototype.getHeight = function () {
        return this.height;
      }),
      (a.RenderedFrame.prototype.getPixels = Constants.ABSTRACT_FUNCTION),
      (a.RenderedFrame.prototype.containsPixel = Constants.ABSTRACT_FUNCTION),
      (a.RenderedFrame.prototype.isSameSize = Constants.ABSTRACT_FUNCTION),
      (a.RenderedFrame.prototype.clone = Constants.ABSTRACT_FUNCTION),
      (a.RenderedFrame.prototype.setPixels = Constants.ABSTRACT_FUNCTION),
      (a.RenderedFrame.prototype.clear = Constants.ABSTRACT_FUNCTION),
      (a.RenderedFrame.prototype.setPixel = Constants.ABSTRACT_FUNCTION),
      (a.RenderedFrame.prototype.getPixel = Constants.ABSTRACT_FUNCTION),
      (a.RenderedFrame.prototype.forEachPixel = Constants.ABSTRACT_FUNCTION);
  })(),
  (function () {
    var a = $.namespace("pskl.model");
    (a.Palette = function (a, b, c) {
      (this.id = a), (this.name = b), (this.colors = c);
    }),
      (a.Palette.fromObject = function (b) {
        var c = b.colors.slice(0, b.colors.length);
        return new a.Palette(b.id, b.name, c);
      }),
      (a.Palette.prototype.getColors = function () {
        return this.colors;
      }),
      (a.Palette.prototype.setColors = function (a) {
        this.colors = a;
      }),
      (a.Palette.prototype.get = function (a) {
        return this.colors[a];
      }),
      (a.Palette.prototype.set = function (a, b) {
        this.colors[a] = b;
      }),
      (a.Palette.prototype.add = function (a) {
        this.colors.push(a);
      }),
      (a.Palette.prototype.size = function () {
        return this.colors.length;
      }),
      (a.Palette.prototype.removeAt = function (a) {
        this.colors.splice(a, 1);
      }),
      (a.Palette.prototype.move = function (a, b) {
        this.colors.splice(b, 0, this.colors.splice(a, 1)[0]);
      });
  })(),
  (function () {
    var a = $.namespace("pskl.model");
    (a.Piskel = function (a, b, c, d) {
      if (!(a && b && d)) throw "Missing arguments in Piskel constructor : " + Array.prototype.join.call(arguments, ",");
      (this.layers = []), (this.width = a), (this.height = b), (this.descriptor = d), (this.savePath = null), (this.fps = c);
    }),
      (a.Piskel.fromLayers = function (a, b, c) {
        var d = null;
        if (!(a.length > 0 && a[0].size() > 0)) throw "Piskel.fromLayers expects array of non empty pskl.model.Layer as first argument";
        var e = a[0].getFrameAt(0);
        return (d = new pskl.model.Piskel(e.getWidth(), e.getHeight(), b, c)), a.forEach(d.addLayer.bind(d)), d;
      }),
      (a.Piskel.prototype.getLayers = function () {
        return this.layers;
      }),
      (a.Piskel.prototype.getHeight = function () {
        return this.height;
      }),
      (a.Piskel.prototype.getWidth = function () {
        return this.width;
      }),
      (a.Piskel.prototype.getFPS = function () {
        return this.fps;
      }),
      (a.Piskel.prototype.getLayers = function () {
        return this.layers;
      }),
      (a.Piskel.prototype.getLayerAt = function (a) {
        return this.layers[a];
      }),
      (a.Piskel.prototype.getLayersByName = function (a) {
        return this.layers.filter(function (b) {
          return b.getName() == a;
        });
      }),
      (a.Piskel.prototype.getFrameCount = function () {
        return this.getLayerAt(0).size();
      }),
      (a.Piskel.prototype.addLayer = function (a) {
        this.layers.push(a);
      }),
      (a.Piskel.prototype.addLayerAt = function (a, b) {
        this.layers.splice(b, 0, a);
      }),
      (a.Piskel.prototype.moveLayerUp = function (a) {
        var b = this.layers.indexOf(a);
        b > -1 && b < this.layers.length - 1 && ((this.layers[b] = this.layers[b + 1]), (this.layers[b + 1] = a));
      }),
      (a.Piskel.prototype.moveLayerDown = function (a) {
        var b = this.layers.indexOf(a);
        b > 0 && ((this.layers[b] = this.layers[b - 1]), (this.layers[b - 1] = a));
      }),
      (a.Piskel.prototype.removeLayer = function (a) {
        var b = this.layers.indexOf(a);
        -1 != b && this.layers.splice(b, 1);
      }),
      (a.Piskel.prototype.removeLayerAt = function (a) {
        this.layers.splice(a, 1);
      }),
      (a.Piskel.prototype.getDescriptor = function () {
        return this.descriptor;
      }),
      (a.Piskel.prototype.setDescriptor = function (a) {
        (this.descriptor = a), $.publish(Events.PISKEL_DESCRIPTOR_UPDATED);
      }),
      (a.Piskel.prototype.setName = function (a) {
        (this.descriptor.name = a), $.publish(Events.PISKEL_DESCRIPTOR_UPDATED);
      }),
      (a.Piskel.prototype.getHash = function () {
        return this.layers
          .map(function (a) {
            return a.getHash();
          })
          .join("-");
      });
  })(),
  (function () {
    var a = $.namespace("pskl.selection"),
      b = { PASTE: "REPLAY_PASTE", ERASE: "REPLAY_ERASE" };
    (a.SelectionManager = function (a) {
      (this.piskelController = a), (this.currentSelection = null);
    }),
      (a.SelectionManager.prototype.init = function () {
        $.subscribe(Events.SELECTION_CREATED, $.proxy(this.onSelectionCreated_, this)),
          $.subscribe(Events.SELECTION_DISMISSED, $.proxy(this.onSelectionDismissed_, this)),
          $.subscribe(Events.SELECTION_MOVE_REQUEST, $.proxy(this.onSelectionMoved_, this)),
          $.subscribe(Events.SELECTION_COPY, this.copy.bind(this)),
          $.subscribe(Events.SELECTION_CUT, this.cut.bind(this)),
          $.subscribe(Events.SELECTION_PASTE, this.paste.bind(this));
        var a = pskl.service.keyboard.Shortcuts;
        pskl.app.shortcutService.registerShortcut(a.SELECTION.PASTE, this.paste.bind(this)),
          pskl.app.shortcutService.registerShortcut(a.SELECTION.CUT, this.cut.bind(this)),
          pskl.app.shortcutService.registerShortcut(a.SELECTION.COPY, this.copy.bind(this)),
          pskl.app.shortcutService.registerShortcut(a.SELECTION.DELETE, this.onDeleteShortcut_.bind(this)),
          pskl.app.shortcutService.registerShortcut(a.SELECTION.COMMIT, this.commit.bind(this)),
          $.subscribe(Events.TOOL_SELECTED, $.proxy(this.onToolSelected_, this));
      }),
      (a.SelectionManager.prototype.cleanSelection_ = function () {
        this.currentSelection && (this.currentSelection.reset(), (this.currentSelection = null));
      }),
      (a.SelectionManager.prototype.onToolSelected_ = function (a, b) {
        b instanceof pskl.tools.drawing.selection.BaseSelect || this.cleanSelection_();
      }),
      (a.SelectionManager.prototype.onSelectionDismissed_ = function (a) {
        this.cleanSelection_();
      }),
      (a.SelectionManager.prototype.onDeleteShortcut_ = function (a) {
        if (!this.currentSelection) return !0;
        this.erase();
      }),
      (a.SelectionManager.prototype.erase = function () {
        for (var a = this.currentSelection.pixels, c = this.piskelController.getCurrentFrame(), d = 0, e = a.length; d < e; d++) c.setPixel(a[d].col, a[d].row, Constants.TRANSPARENT_COLOR);
        $.publish(Events.PISKEL_SAVE_STATE, { type: pskl.service.HistoryService.REPLAY, scope: this, replay: { type: b.ERASE, pixels: JSON.parse(JSON.stringify(a.slice(0))) } });
      }),
      (a.SelectionManager.prototype.cut = function () {
        this.currentSelection && (this.currentSelection.fillSelectionFromFrame(this.piskelController.getCurrentFrame()), this.erase());
      }),
      (a.SelectionManager.prototype.paste = function () {
        if (!this.currentSelection || !this.currentSelection.hasPastedContent) {
          if (!window.localStorage.getItem("piskel.clipboard")) return;
          this.currentSelection = JSON.parse(window.localStorage.getItem("piskel.clipboard"));
        }
        var a = this.currentSelection.pixels,
          c = this.piskelController.getCurrentFrame();
        this.pastePixels_(c, a), $.publish(Events.PISKEL_SAVE_STATE, { type: pskl.service.HistoryService.REPLAY, scope: this, replay: { type: b.PASTE, pixels: JSON.parse(JSON.stringify(a.slice(0))) } });
      }),
      (a.SelectionManager.prototype.commit = function () {
        var a = pskl.app.drawingController.currentToolBehavior;
        if (a instanceof pskl.tools.drawing.selection.BaseSelect) {
          var b = pskl.app.drawingController.overlayFrame;
          a.commitSelection(b);
        }
      }),
      (a.SelectionManager.prototype.replay = function (a, c) {
        c.type === b.PASTE
          ? this.pastePixels_(a, c.pixels)
          : c.type === b.ERASE &&
            c.pixels.forEach(function (b) {
              a.setPixel(b.col, b.row, Constants.TRANSPARENT_COLOR);
            });
      }),
      (a.SelectionManager.prototype.pastePixels_ = function (a, b) {
        b.forEach(function (b) {
          b.color !== Constants.TRANSPARENT_COLOR && null !== b.color && a.setPixel(b.col, b.row, b.color);
        });
      }),
      (a.SelectionManager.prototype.copy = function () {
        this.currentSelection &&
          this.piskelController.getCurrentFrame() &&
          (this.currentSelection.fillSelectionFromFrame(this.piskelController.getCurrentFrame()), window.localStorage.setItem("piskel.clipboard", JSON.stringify(this.currentSelection)));
      }),
      (a.SelectionManager.prototype.onSelectionCreated_ = function (a, b) {
        b ? (this.currentSelection = b) : console.error("No selection provided to SelectionManager");
      }),
      (a.SelectionManager.prototype.onSelectionMoved_ = function (a, b, c) {
        this.currentSelection ? this.currentSelection.move(b, c) : console.error("Bad state: No currentSelection set when trying to move it in SelectionManager");
      });
  })(),
  (function () {
    var a = $.namespace("pskl.selection");
    (a.BaseSelection = function () {
      this.reset();
    }),
      (a.BaseSelection.prototype.reset = function () {
        (this.pixels = []), (this.hasPastedContent = !1);
      }),
      (a.BaseSelection.prototype.move = function (a, b) {
        for (var c = [], d = 0, e = this.pixels.length; d < e; d++) {
          var f = this.pixels[d];
          (f.col += a), (f.row += b), c.push(f);
        }
        this.pixels = c;
      }),
      (a.BaseSelection.prototype.fillSelectionFromFrame = function (a) {
        this.pixels.forEach(function (b) {
          var c = a.getPixel(b.col, b.row);
          b.color = c || Constants.TRANSPARENT_COLOR;
        }),
          (this.hasPastedContent = !0);
      });
  })(),
  (function () {
    var a = $.namespace("pskl.selection");
    (a.LassoSelection = function (a, b) {
      (this.pixelsMap = {}),
        a.forEach(
          function (a) {
            this.setPixelInMap_(a, 1);
          }.bind(this)
        ),
        (this.pixels = this.getLassoPixels_(b));
    }),
      pskl.utils.inherit(a.LassoSelection, a.BaseSelection),
      (a.LassoSelection.prototype.getLassoPixels_ = function (a) {
        var b = [];
        return (
          a.forEachPixel(
            function (c, d, e) {
              var f = { col: d, row: e };
              this.isInSelection_(f, a) && b.push(f);
            }.bind(this)
          ),
          b
        );
      }),
      (a.LassoSelection.prototype.isInSelection_ = function (a, b) {
        return this.getPixelInMap_(a) || this.visitPixel_(a, b), 1 == this.getPixelInMap_(a);
      }),
      (a.LassoSelection.prototype.visitPixel_ = function (a, b) {
        var c = !1;
        pskl.PixelUtils.visitConnectedPixels(
          a,
          b,
          function (a) {
            return !this.getPixelInMap_(a) && (b.containsPixel(a.col, a.row) ? (this.setPixelInMap_(a, 2), !0) : ((c = !0), !1));
          }.bind(this)
        ).forEach(
          function (a) {
            this.setPixelInMap_(a, c ? -1 : 1);
          }.bind(this)
        );
      }),
      (a.LassoSelection.prototype.setPixelInMap_ = function (a, b) {
        (this.pixelsMap[a.col] = this.pixelsMap[a.col] || {}), (this.pixelsMap[a.col][a.row] = b);
      }),
      (a.LassoSelection.prototype.getPixelInMap_ = function (a) {
        return this.pixelsMap[a.col] && this.pixelsMap[a.col][a.row];
      });
  })(),
  (function () {
    var a = $.namespace("pskl.selection");
    (a.RectangularSelection = function (a, b, c, d) {
      this.pixels = pskl.PixelUtils.getRectanglePixels(a, b, c, d);
    }),
      pskl.utils.inherit(a.RectangularSelection, a.BaseSelection);
  })(),
  (function () {
    var a = $.namespace("pskl.selection");
    (a.ShapeSelection = function (a) {
      this.pixels = a;
    }),
      pskl.utils.inherit(a.ShapeSelection, a.BaseSelection);
  })(),
  (function () {
    var a = $.namespace("pskl.rendering");
    (a.AbstractRenderer = function () {}),
      (a.AbstractRenderer.prototype.clear = Constants.ABSTRACT_FUNCTION),
      (a.AbstractRenderer.prototype.render = Constants.ABSTRACT_FUNCTION),
      (a.AbstractRenderer.prototype.getCoordinates = Constants.ABSTRACT_FUNCTION),
      (a.AbstractRenderer.prototype.setGridWidth = Constants.ABSTRACT_FUNCTION),
      (a.AbstractRenderer.prototype.getGridWidth = Constants.ABSTRACT_FUNCTION),
      (a.AbstractRenderer.prototype.setZoom = Constants.ABSTRACT_FUNCTION),
      (a.AbstractRenderer.prototype.getZoom = Constants.ABSTRACT_FUNCTION),
      (a.AbstractRenderer.prototype.setOffset = Constants.ABSTRACT_FUNCTION),
      (a.AbstractRenderer.prototype.getOffset = Constants.ABSTRACT_FUNCTION),
      (a.AbstractRenderer.prototype.setDisplaySize = Constants.ABSTRACT_FUNCTION),
      (a.AbstractRenderer.prototype.getDisplaySize = Constants.ABSTRACT_FUNCTION);
  })(),
  (function () {
    var a = $.namespace("pskl.rendering");
    (a.CompositeRenderer = function () {
      this.renderers = [];
    }),
      pskl.utils.inherit(pskl.rendering.CompositeRenderer, pskl.rendering.AbstractRenderer),
      (a.CompositeRenderer.prototype.add = function (a) {
        return this.renderers.push(a), this;
      }),
      (a.CompositeRenderer.prototype.clear = function () {
        this.renderers.forEach(function (a) {
          a.clear();
        });
      }),
      (a.CompositeRenderer.prototype.setZoom = function (a) {
        this.renderers.forEach(function (b) {
          b.setZoom(a);
        });
      }),
      (a.CompositeRenderer.prototype.getZoom = function () {
        return this.getSampleRenderer_().getZoom();
      }),
      (a.CompositeRenderer.prototype.setDisplaySize = function (a, b) {
        this.renderers.forEach(function (c) {
          c.setDisplaySize(a, b);
        });
      }),
      (a.CompositeRenderer.prototype.getDisplaySize = function () {
        return this.getSampleRenderer_().getDisplaySize();
      }),
      (a.CompositeRenderer.prototype.setOffset = function (a, b) {
        this.renderers.forEach(function (c) {
          c.setOffset(a, b);
        });
      }),
      (a.CompositeRenderer.prototype.getOffset = function () {
        return this.getSampleRenderer_().getOffset();
      }),
      (a.CompositeRenderer.prototype.setGridWidth = function (a) {
        this.renderers.forEach(function (b) {
          b.setGridWidth(a);
        });
      }),
      (a.CompositeRenderer.prototype.getGridWidth = function () {
        return this.getSampleRenderer_().getGridWidth();
      }),
      (a.CompositeRenderer.prototype.getSampleRenderer_ = function () {
        if (this.renderers.length > 0) return this.renderers[0];
        throw "Renderer manager is empty";
      });
  })(),
  (function () {
    var a = $.namespace("pskl.rendering.layer");
    (a.LayersRenderer = function (a, b, c) {
      pskl.rendering.CompositeRenderer.call(this),
        (this.piskelController = c),
        (this.belowRenderer = new pskl.rendering.frame.FrameRenderer(a, b, ["layers-canvas", "layers-below-canvas"])),
        (this.aboveRenderer = new pskl.rendering.frame.FrameRenderer(a, b, ["layers-canvas", "layers-above-canvas"])),
        this.add(this.belowRenderer),
        this.add(this.aboveRenderer),
        (this.serializedRendering = ""),
        (this.stylesheet_ = document.createElement("style")),
        document.head.appendChild(this.stylesheet_),
        this.updateLayersCanvasOpacity_(pskl.UserSettings.get(pskl.UserSettings.LAYER_OPACITY)),
        $.subscribe(Events.PISKEL_RESET, this.flush.bind(this)),
        $.subscribe(Events.USER_SETTINGS_CHANGED, $.proxy(this.onUserSettingsChange_, this));
    }),
      pskl.utils.inherit(pskl.rendering.layer.LayersRenderer, pskl.rendering.CompositeRenderer),
      (a.LayersRenderer.prototype.render = function () {
        var a = this.getOffset(),
          b = this.getDisplaySize(),
          c = this.piskelController.getLayers(),
          d = this.piskelController.getCurrentFrameIndex(),
          e = this.piskelController.getCurrentLayerIndex(),
          f = c.slice(0, e),
          g = c.slice(e + 1, c.length),
          h = [this.getZoom(), this.getGridWidth(), a.x, a.y, b.width, b.height, pskl.utils.LayerUtils.getFrameHashAt(f, d), pskl.utils.LayerUtils.getFrameHashAt(g, d), c.length].join("-");
        if (this.serializedRendering != h) {
          if (((this.serializedRendering = h), this.clear(), f.length > 0)) {
            var i = pskl.utils.LayerUtils.mergeFrameAt(f, d);
            this.belowRenderer.render(i);
          }
          if (g.length > 0) {
            var j = pskl.utils.LayerUtils.mergeFrameAt(g, d);
            this.aboveRenderer.render(j);
          }
        }
      }),
      (a.LayersRenderer.prototype.setDisplaySize = function (a, b) {
        var c = this.getDisplaySize();
        (c.width === a && c.height === b) || this.superclass.setDisplaySize.call(this, a, b);
      }),
      (a.LayersRenderer.prototype.onUserSettingsChange_ = function (a, b, c) {
        b == pskl.UserSettings.LAYER_OPACITY && this.updateLayersCanvasOpacity_(c);
      }),
      (a.LayersRenderer.prototype.updateLayersCanvasOpacity_ = function (a) {
        this.stylesheet_.innerHTML = ".layers-canvas { opacity : " + a + "}";
      }),
      (a.LayersRenderer.prototype.flush = function () {
        this.serializedRendering = "";
      });
  })(),
  (function () {
    var a = $.namespace("pskl.rendering.frame");
    (a.FrameRenderer = function (a, b, c) {
      if (((this.defaultRenderingOptions = { supportGridRendering: !1, zoom: 1 }), (b = $.extend(!0, {}, this.defaultRenderingOptions, b)), void 0 === a)) throw "Bad FrameRenderer initialization. <container> undefined.";
      if (isNaN(b.zoom)) throw "Bad FrameRenderer initialization. <zoom> not well defined.";
      (this.container = a),
        (this.zoom = b.zoom),
        (this.offset = { x: 0, y: 0 }),
        (this.margin = { x: 0, y: 0 }),
        (this.supportGridRendering = b.supportGridRendering),
        (this.classList = c || []),
        this.classList.push("canvas"),
        (this.canvas = null),
        (this.displayCanvas = null),
        this.setDisplaySize(b.width, b.height),
        this.setGridWidth(pskl.UserSettings.get(pskl.UserSettings.GRID_WIDTH)),
        $.subscribe(Events.USER_SETTINGS_CHANGED, this.onUserSettingsChange_.bind(this));
    }),
      pskl.utils.inherit(pskl.rendering.frame.FrameRenderer, pskl.rendering.AbstractRenderer),
      (a.FrameRenderer.prototype.render = function (a) {
        a && (this.clear(), this.renderFrame_(a));
      }),
      (a.FrameRenderer.prototype.clear = function () {
        pskl.utils.CanvasUtils.clear(this.canvas), pskl.utils.CanvasUtils.clear(this.displayCanvas);
      }),
      (a.FrameRenderer.prototype.setZoom = function (a) {
        var b = Math.min(this.displayWidth, this.displayHeight) / 10;
        if ((a = pskl.utils.Math.minmax(a, 1, b)) != this.zoom) {
          var c = this.offset.x + this.displayWidth / (2 * this.zoom),
            d = this.offset.y + this.displayHeight / (2 * this.zoom);
          (this.zoom = a), this.setOffset(c - this.displayWidth / (2 * this.zoom), d - this.displayHeight / (2 * this.zoom));
        }
      }),
      (a.FrameRenderer.prototype.getZoom = function () {
        return this.zoom;
      }),
      (a.FrameRenderer.prototype.setDisplaySize = function (a, b) {
        (this.displayWidth = a), (this.displayHeight = b), this.displayCanvas && ($(this.displayCanvas).remove(), (this.displayCanvas = null)), this.createDisplayCanvas_();
      }),
      (a.FrameRenderer.prototype.getDisplaySize = function () {
        return { height: this.displayHeight, width: this.displayWidth };
      }),
      (a.FrameRenderer.prototype.getOffset = function () {
        return { x: this.offset.x, y: this.offset.y };
      }),
      (a.FrameRenderer.prototype.setOffset = function (a, b) {
        var c = pskl.app.piskelController.getWidth(),
          d = pskl.app.piskelController.getHeight(),
          e = c - this.displayWidth / this.zoom;
        a = pskl.utils.Math.minmax(a, 0, e);
        var f = d - this.displayHeight / this.zoom;
        (b = pskl.utils.Math.minmax(b, 0, f)), (this.offset.x = a), (this.offset.y = b);
      }),
      (a.FrameRenderer.prototype.setGridWidth = function (a) {
        this.gridWidth_ = a;
      }),
      (a.FrameRenderer.prototype.getGridWidth = function () {
        return this.supportGridRendering ? this.gridWidth_ : 0;
      }),
      (a.FrameRenderer.prototype.computeGridWidthForDisplay_ = function () {
        for (var a = this.getGridWidth(); this.zoom < 6 * a; ) a--;
        return a;
      }),
      (a.FrameRenderer.prototype.updateMargins_ = function (a) {
        var b = this.displayWidth - this.zoom * a.getWidth();
        this.margin.x = Math.max(0, b) / 2;
        var c = this.displayHeight - this.zoom * a.getHeight();
        this.margin.y = Math.max(0, c) / 2;
      }),
      (a.FrameRenderer.prototype.createDisplayCanvas_ = function () {
        var a = this.displayHeight,
          b = this.displayWidth;
        (this.displayCanvas = pskl.utils.CanvasUtils.createCanvas(b, a, this.classList)), pskl.utils.CanvasUtils.disableImageSmoothing(this.displayCanvas), this.container.append(this.displayCanvas);
      }),
      (a.FrameRenderer.prototype.onUserSettingsChange_ = function (a, b, c) {
        b == pskl.UserSettings.GRID_WIDTH && this.setGridWidth(c);
      }),
      (a.FrameRenderer.prototype.getCoordinates = function (a, b) {
        var c = this.container.offset();
        (a -= c.left), (b -= c.top), (a -= this.margin.x), (b -= this.margin.y);
        var d = this.zoom;
        return (a += this.offset.x * d), (b += this.offset.y * d), { x: Math.floor(a / d), y: Math.floor(b / d) };
      }),
      (a.FrameRenderer.prototype.reverseCoordinates = function (a, b) {
        var c = this.zoom;
        (a *= c), (b *= c), (a -= this.offset.x * c), (b -= this.offset.y * c), (a += this.margin.x), (b += this.margin.y);
        var d = this.container.offset();
        return (a += d.left), (b += d.top), { x: a + c / 2, y: b + c / 2 };
      }),
      (a.FrameRenderer.prototype.renderFrame_ = function (a) {
        (this.canvas && a.getWidth() == this.canvas.width && a.getHeight() == this.canvas.height) || (this.canvas = pskl.utils.CanvasUtils.createCanvas(a.getWidth(), a.getHeight()));
        var b = this.canvas.width,
          c = this.canvas.height,
          d = this.zoom;
        pskl.utils.FrameUtils.drawToCanvas(a, this.canvas), this.updateMargins_(a);
        var e = this.displayCanvas.getContext("2d");
        e.save();
        var f = this.margin.x - this.offset.x * d,
          g = this.margin.y - this.offset.y * d;
        (f > 0 || g > 0) && ((e.fillStyle = Constants.ZOOMED_OUT_BACKGROUND_COLOR), e.fillRect(0, 0, this.displayCanvas.width - 1, this.displayCanvas.height - 1)),
          e.translate(f, g),
          e.scale(d, d),
          pskl.UserSettings.get("SEAMLESS_MODE") ? e.clearRect(-1 * b, -1 * c, 3 * b, 3 * c) : e.clearRect(0, 0, b, c),
          pskl.UserSettings.get("SEAMLESS_MODE") && this.drawTiledFrames_(e, this.canvas, b, c, 1),
          e.drawImage(this.canvas, 0, 0);
        var h = this.computeGridWidthForDisplay_();
        if (h > 0) {
          e.scale(1 / d, 1 / d);
          for (var i = 1; i < a.getWidth(); i++) e.clearRect(i * d - h / 2, 0, h, c * d);
          for (var j = 1; j < a.getHeight(); j++) e.clearRect(0, j * d - h / 2, b * d, h);
        }
        e.restore();
      }),
      (a.FrameRenderer.prototype.drawTiledFrames_ = function (a, b, c, d, e) {
        var f = pskl.UserSettings.get("SEAMLESS_OPACITY");
        (f = pskl.utils.Math.minmax(f, 0, 1)),
          (a.fillStyle = "rgba(255, 255, 255, " + f + ")"),
          [
            [0, -1],
            [0, 1],
            [-1, -1],
            [-1, 0],
            [-1, 1],
            [1, -1],
            [1, 0],
            [1, 1],
          ].forEach(function (f) {
            a.drawImage(b, f[0] * c * e, f[1] * d * e), a.fillRect(f[0] * c * e, f[1] * d * e, c * e, d * e);
          });
      });
  })(),
  (function () {
    var a = $.namespace("pskl.rendering");
    (a.OnionSkinRenderer = function (a, b) {
      pskl.rendering.CompositeRenderer.call(this), (this.piskelController = b), (this.renderer = a), this.add(this.renderer), (this.hash = "");
    }),
      (a.OnionSkinRenderer.createInContainer = function (b, c, d) {
        var e = new pskl.rendering.frame.FrameRenderer(b, c, ["onion-skin-canvas"]);
        return new a.OnionSkinRenderer(e, d);
      }),
      pskl.utils.inherit(pskl.rendering.OnionSkinRenderer, pskl.rendering.CompositeRenderer),
      (a.OnionSkinRenderer.prototype.render = function () {
        var a = this.getOnionFrames_(),
          b = this.computeHash_(a);
        if (this.hash != b && ((this.hash = b), this.clear(), a.length > 0)) {
          var c = pskl.utils.FrameUtils.merge(a);
          this.renderer.render(c);
        }
      }),
      (a.OnionSkinRenderer.prototype.getOnionFrames_ = function () {
        var a = [],
          b = this.piskelController.getCurrentFrameIndex(),
          c = this.piskelController.getCurrentLayer(),
          d = b - 1,
          e = c.getFrameAt(d);
        e && a.push(e);
        var f = b + 1,
          g = c.getFrameAt(f);
        return g && a.push(g), a;
      }),
      (a.OnionSkinRenderer.prototype.computeHash_ = function (a) {
        var b = this.getOffset(),
          c = this.getDisplaySize(),
          d = this.piskelController.getLayers();
        return [
          this.getZoom(),
          this.getGridWidth(),
          b.x,
          b.y,
          c.width,
          c.height,
          a
            .map(function (a) {
              return a.getHash();
            })
            .join("-"),
          d.length,
        ].join("-");
      }),
      (a.OnionSkinRenderer.prototype.setDisplaySize = function (a, b) {
        var c = this.getDisplaySize();
        (c.width === a && c.height === b) || this.superclass.setDisplaySize.call(this, a, b);
      }),
      (a.OnionSkinRenderer.prototype.flush = function () {
        this.hash = "";
      });
  })(),
  (function () {
    var a = $.namespace("pskl.rendering.frame");
    (a.BackgroundImageFrameRenderer = function (a, b) {
      (this.container = a), this.setZoom(b);
      var c = a.get(0),
        d = c.ownerDocument;
      (this.frameContainer = d.createElement("div")),
        this.frameContainer.classList.add("background-image-frame-container"),
        a.get(0).appendChild(this.frameContainer),
        (this.cachedFrameProcessor = new pskl.model.frame.CachedFrameProcessor()),
        this.cachedFrameProcessor.setFrameProcessor(this.frameToDataUrl_.bind(this));
    }),
      (a.BackgroundImageFrameRenderer.prototype.frameToDataUrl_ = function (a) {
        var b;
        return (b = a instanceof pskl.model.frame.RenderedFrame ? pskl.utils.ImageResizer.scale(a.getRenderedFrame(), this.zoom) : pskl.utils.FrameUtils.toImage(a, this.zoom)), b.toDataURL("image/png");
      }),
      (a.BackgroundImageFrameRenderer.prototype.render = function (a) {
        var b = this.cachedFrameProcessor.get(a, this.zoom);
        this.frameContainer.style.backgroundImage = "url(" + b + ")";
      }),
      (a.BackgroundImageFrameRenderer.prototype.show = function () {
        this.frameContainer && (this.frameContainer.style.display = "block");
      }),
      (a.BackgroundImageFrameRenderer.prototype.setZoom = function (a) {
        this.zoom = a;
      }),
      (a.BackgroundImageFrameRenderer.prototype.getZoom = function () {
        return this.zoom;
      }),
      (a.BackgroundImageFrameRenderer.prototype.setRepeated = function (a) {
        var b;
        (b = a ? "repeat" : "no-repeat"), (this.frameContainer.style.backgroundRepeat = b);
      });
  })(),
  (function () {
    var a = $.namespace("pskl.rendering.frame");
    (a.CachedFrameRenderer = function (a, b, c) {
      pskl.rendering.frame.FrameRenderer.call(this, a, b, c), (this.serializedFrame = "");
    }),
      pskl.utils.inherit(pskl.rendering.frame.CachedFrameRenderer, pskl.rendering.frame.FrameRenderer),
      (a.CachedFrameRenderer.prototype.setDisplaySize = function (a, b) {
        (this.displayWidth === a && this.displayHeight === b) || this.superclass.setDisplaySize.call(this, a, b);
      }),
      (a.CachedFrameRenderer.prototype.render = function (a) {
        var b = this.getOffset(),
          c = this.getDisplaySize(),
          d = [this.getZoom(), this.getGridWidth(), pskl.UserSettings.get("SEAMLESS_MODE"), pskl.UserSettings.get("SEAMLESS_OPACITY"), b.x, b.y, c.width, c.height, a.getHash()].join("-");
        this.serializedFrame != d && ((this.serializedFrame = d), this.superclass.render.call(this, a));
      });
  })(),
  (function () {
    var a = $.namespace("pskl.rendering");
    (a.CanvasRenderer = function (a, b) {
      (this.frame = a), (this.zoom = b), (this.opacity_ = 1), (this.transparentColor_ = "white");
    }),
      (a.CanvasRenderer.prototype.drawTransparentAs = function (a) {
        this.transparentColor_ = a;
      }),
      (a.CanvasRenderer.prototype.setOpacity = function (a) {
        this.opacity_ = a;
      }),
      (a.CanvasRenderer.prototype.render = function () {
        var a = this.createCanvas_();
        pskl.utils.FrameUtils.drawToCanvas(this.frame, a, this.transparentColor_, this.opacity_);
        var b = this.createCanvas_(this.zoom),
          c = b.getContext("2d");
        return pskl.utils.CanvasUtils.disableImageSmoothing(b), c.scale(this.zoom, this.zoom), c.drawImage(a, 0, 0), b;
      }),
      (a.CanvasRenderer.prototype.createCanvas_ = function (a) {
        a = a || 1;
        var b = this.frame.getWidth() * a,
          c = this.frame.getHeight() * a;
        return pskl.utils.CanvasUtils.createCanvas(b, c);
      });
  })(),
  (function () {
    var a = $.namespace("pskl.rendering");
    (a.FramesheetRenderer = function (a) {
      if (!(a.length > 0)) throw "FramesheetRenderer : Invalid argument : frames is empty";
      this.frames = a;
    }),
      (a.FramesheetRenderer.prototype.renderAsCanvas = function (a) {
        a = a || this.frames.length;
        for (var b = Math.ceil(this.frames.length / a), c = this.createCanvas_(a, b), d = 0; d < this.frames.length; d++) {
          var e = this.frames[d],
            f = (d % a) * e.getWidth(),
            g = Math.floor(d / a) * e.getHeight();
          this.drawFrameInCanvas_(e, c, f, g);
        }
        return c;
      }),
      (a.FramesheetRenderer.prototype.drawFrameInCanvas_ = function (a, b, c, d) {
        var e = b.getContext("2d"),
          f = e.createImageData(a.getWidth(), a.getHeight()),
          g = a.getPixels(),
          h = new Uint8ClampedArray(g.buffer);
        f.data.set(h), e.putImageData(f, c, d);
      }),
      (a.FramesheetRenderer.prototype.createCanvas_ = function (a, b) {
        var c = this.frames[0],
          d = a * c.getWidth(),
          e = b * c.getHeight();
        return pskl.utils.CanvasUtils.createCanvas(d, e);
      });
  })(),
  (function () {
    var a = $.namespace("pskl.rendering");
    (a.PiskelRenderer = function (a) {
      for (var b = [], c = 0; c < a.getFrameCount(); c++) b.push(a.renderFrameAt(c, !0));
      (this.piskelController = a), (this.frames = b);
    }),
      (a.PiskelRenderer.prototype.renderAsCanvas = function (a) {
        a = a || this.frames.length;
        for (var b = Math.ceil(this.frames.length / a), c = this.createCanvas_(a, b), d = 0; d < this.frames.length; d++) {
          var e = this.frames[d],
            f = (d % a) * this.piskelController.getWidth(),
            g = Math.floor(d / a) * this.piskelController.getHeight();
          this.drawFrameInCanvas_(e, c, f, g);
        }
        return c;
      }),
      (a.PiskelRenderer.prototype.drawFrameInCanvas_ = function (a, b, c, d) {
        b.getContext("2d").drawImage(a, c, d, a.width, a.height);
      }),
      (a.PiskelRenderer.prototype.createCanvas_ = function (a, b) {
        var c = a * this.piskelController.getWidth(),
          d = b * this.piskelController.getHeight();
        return pskl.utils.CanvasUtils.createCanvas(c, d);
      });
  })(),
  (function () {
    var a = $.namespace("pskl.controller.piskel");
    (a.PiskelController = function (a) {
      if (!a) throw "A piskel instance is mandatory for instanciating PiskelController";
      this.setPiskel(a);
    }),
      (a.PiskelController.prototype.setPiskel = function (a, b) {
        (this.piskel = a), b || ((this.currentLayerIndex = 0), (this.currentFrameIndex = 0)), (this.layerIdCounter = 1);
      }),
      (a.PiskelController.prototype.init = function () {}),
      (a.PiskelController.prototype.getHeight = function () {
        return this.piskel.getHeight();
      }),
      (a.PiskelController.prototype.getWidth = function () {
        return this.piskel.getWidth();
      }),
      (a.PiskelController.prototype.getFPS = function () {
        return this.piskel.fps;
      }),
      (a.PiskelController.prototype.setFPS = function (a) {
        "number" == typeof a && ((this.piskel.fps = a), $.publish(Events.FPS_CHANGED));
      }),
      (a.PiskelController.prototype.getLayers = function () {
        return this.piskel.getLayers();
      }),
      (a.PiskelController.prototype.getCurrentLayer = function () {
        return this.getLayerAt(this.currentLayerIndex);
      }),
      (a.PiskelController.prototype.getLayerAt = function (a) {
        return this.piskel.getLayerAt(a);
      }),
      (a.PiskelController.prototype.hasLayerAt = function (a) {
        return !!this.getLayerAt(a);
      }),
      (a.PiskelController.prototype.getLayerByIndex = function (a) {
        var b = this.getLayers();
        return b[a] ? b[a] : null;
      }),
      (a.PiskelController.prototype.getCurrentFrame = function () {
        return this.getCurrentLayer().getFrameAt(this.currentFrameIndex);
      }),
      (a.PiskelController.prototype.getCurrentLayerIndex = function () {
        return this.currentLayerIndex;
      }),
      (a.PiskelController.prototype.getCurrentFrameIndex = function () {
        return this.currentFrameIndex;
      }),
      (a.PiskelController.prototype.getPiskel = function () {
        return this.piskel;
      }),
      (a.PiskelController.prototype.isTransparent = function () {
        return this.getLayers().some(function (a) {
          return a.isTransparent();
        });
      }),
      (a.PiskelController.prototype.renderFrameAt = function (a, b) {
        return pskl.utils.LayerUtils.flattenFrameAt(this.getLayers(), a, b);
      }),
      (a.PiskelController.prototype.hasFrameAt = function (a) {
        return !!this.getCurrentLayer().getFrameAt(a);
      }),
      (a.PiskelController.prototype.addFrame = function () {
        this.addFrameAt(this.getFrameCount());
      }),
      (a.PiskelController.prototype.addFrameAtCurrentIndex = function () {
        this.addFrameAt(this.currentFrameIndex + 1);
      }),
      (a.PiskelController.prototype.addFrameAt = function (a) {
        this.getLayers().forEach(
          function (b) {
            b.addFrameAt(this.createEmptyFrame_(), a);
          }.bind(this)
        ),
          this.setCurrentFrameIndex(a);
      }),
      (a.PiskelController.prototype.createEmptyFrame_ = function () {
        var a = this.piskel.getWidth(),
          b = this.piskel.getHeight();
        return new pskl.model.Frame(a, b);
      }),
      (a.PiskelController.prototype.removeFrameAt = function (a) {
        this.getLayers().forEach(function (b) {
          b.removeFrameAt(a);
        }),
          this.currentFrameIndex >= a && this.currentFrameIndex > 0 && this.setCurrentFrameIndex(this.currentFrameIndex - 1);
      }),
      (a.PiskelController.prototype.duplicateCurrentFrame = function () {
        this.duplicateFrameAt(this.currentFrameIndex);
      }),
      (a.PiskelController.prototype.duplicateFrameAt = function (a) {
        this.getLayers().forEach(function (b) {
          b.duplicateFrameAt(a);
        }),
          this.setCurrentFrameIndex(a + 1);
      }),
      (a.PiskelController.prototype.moveFrame = function (a, b) {
        this.getLayers().forEach(function (c) {
          c.moveFrame(a, b);
        });
      }),
      (a.PiskelController.prototype.getFrameCount = function () {
        return this.piskel.getFrameCount();
      }),
      (a.PiskelController.prototype.setCurrentFrameIndex = function (a) {
        this.hasFrameAt(a) ? (this.currentFrameIndex = a) : window.console.error("Could not set current frame index to " + a);
      }),
      (a.PiskelController.prototype.selectNextFrame = function () {
        var a = this.currentFrameIndex + 1;
        a < this.getFrameCount() && this.setCurrentFrameIndex(a);
      }),
      (a.PiskelController.prototype.selectPreviousFrame = function () {
        var a = this.currentFrameIndex - 1;
        a >= 0 && this.setCurrentFrameIndex(a);
      }),
      (a.PiskelController.prototype.setCurrentLayerIndex = function (a) {
        this.hasLayerAt(a) ? (this.currentLayerIndex = a) : window.console.error("Could not set current layer index to " + a);
      }),
      (a.PiskelController.prototype.selectLayer = function (a) {
        var b = this.getLayers().indexOf(a);
        -1 != b && this.setCurrentLayerIndex(b);
      }),
      (a.PiskelController.prototype.renameLayerAt = function (a, b) {
        var c = this.getLayerByIndex(a);
        c && c.setName(b);
      }),
      (a.PiskelController.prototype.setLayerOpacityAt = function (a, b) {
        var c = this.getLayerByIndex(a);
        c && c.setOpacity(b);
      }),
      (a.PiskelController.prototype.mergeDownLayerAt = function (a) {
        var b = this.getLayerByIndex(a),
          c = this.getLayerByIndex(a - 1);
        if (b && c) {
          var d = pskl.utils.LayerUtils.mergeLayers(b, c);
          this.removeLayerAt(a), this.piskel.addLayerAt(d, a), this.removeLayerAt(a - 1), this.selectLayer(d);
        }
      }),
      (a.PiskelController.prototype.generateLayerName_ = function () {
        for (var a = "Layer " + this.layerIdCounter; this.hasLayerForName_(a); ) this.layerIdCounter++, (a = "Layer " + this.layerIdCounter);
        return a;
      }),
      (a.PiskelController.prototype.createLayer = function (a) {
        if ((a || (a = this.generateLayerName_()), this.hasLayerForName_(a))) throw "Layer name should be unique";
        for (var b = new pskl.model.Layer(a), c = 0; c < this.getFrameCount(); c++) b.addFrame(this.createEmptyFrame_());
        this.piskel.addLayer(b), this.setCurrentLayerIndex(this.piskel.getLayers().length - 1);
      }),
      (a.PiskelController.prototype.hasLayerForName_ = function (a) {
        return this.piskel.getLayersByName(a).length > 0;
      }),
      (a.PiskelController.prototype.moveLayerUp = function () {
        var a = this.getCurrentLayer();
        this.piskel.moveLayerUp(a), this.selectLayer(a);
      }),
      (a.PiskelController.prototype.moveLayerDown = function () {
        var a = this.getCurrentLayer();
        this.piskel.moveLayerDown(a), this.selectLayer(a);
      }),
      (a.PiskelController.prototype.removeCurrentLayer = function () {
        var a = this.getCurrentLayerIndex();
        this.removeLayerAt(a);
      }),
      (a.PiskelController.prototype.removeLayerAt = function (a) {
        if (this.hasLayerAt(a)) {
          var b = this.getLayerAt(a);
          this.piskel.removeLayer(b), this.getCurrentLayerIndex() === a && this.setCurrentLayerIndex(Math.max(0, a - 1));
        }
      }),
      (a.PiskelController.prototype.serialize = function () {
        return pskl.utils.serialization.Serializer.serialize(this.piskel);
      });
  })(),
  (function () {
    var a = $.namespace("pskl.controller.piskel");
    (a.PublicPiskelController = function (a) {
      (this.piskelController = a), pskl.utils.wrap(this, this.piskelController);
    }),
      (a.PublicPiskelController.prototype.init = function () {
        this.resetWrap_("setCurrentFrameIndex"),
          this.resetWrap_("selectNextFrame"),
          this.resetWrap_("selectPreviousFrame"),
          this.resetWrap_("setCurrentLayerIndex"),
          this.resetWrap_("selectLayer"),
          this.saveWrap_("renameLayerAt", !1),
          this.saveWrap_("removeCurrentLayer", !0),
          this.saveWrap_("addFrame", !0),
          this.saveWrap_("addFrameAtCurrentIndex", !0),
          this.saveWrap_("addFrameAt", !0),
          this.saveWrap_("removeFrameAt", !0),
          this.saveWrap_("duplicateCurrentFrame", !0),
          this.saveWrap_("duplicateFrameAt", !0),
          this.saveWrap_("moveFrame", !0),
          this.saveWrap_("createLayer", !0),
          this.saveWrap_("mergeDownLayerAt", !0),
          this.saveWrap_("moveLayerUp", !0),
          this.saveWrap_("moveLayerDown", !0),
          this.saveWrap_("removeCurrentLayer", !0),
          this.saveWrap_("setLayerOpacityAt", !0);
        var a = pskl.service.keyboard.Shortcuts;
        pskl.app.shortcutService.registerShortcut(a.MISC.PREVIOUS_FRAME, this.selectPreviousFrame.bind(this)),
          pskl.app.shortcutService.registerShortcut(a.MISC.NEXT_FRAME, this.selectNextFrame.bind(this)),
          pskl.app.shortcutService.registerShortcut(a.MISC.NEW_FRAME, this.addFrameAtCurrentIndex.bind(this)),
          pskl.app.shortcutService.registerShortcut(a.MISC.DUPLICATE_FRAME, this.duplicateCurrentFrame.bind(this));
      }),
      (a.PublicPiskelController.prototype.getWrappedPiskelController = function () {
        return this.piskelController;
      }),
      (a.PublicPiskelController.prototype.setPiskel = function (a, b) {
        this.piskelController.setPiskel(a, b), $.publish(Events.FRAME_SIZE_CHANGED), $.publish(Events.PISKEL_RESET), $.publish(Events.PISKEL_SAVE_STATE, { type: pskl.service.HistoryService.SNAPSHOT });
      }),
      (a.PublicPiskelController.prototype.resetWrap_ = function (a) {
        this[a] = function () {
          this.piskelController[a].apply(this.piskelController, arguments), $.publish(Events.PISKEL_RESET);
        };
      }),
      (a.PublicPiskelController.prototype.saveWrap_ = function (a, b) {
        this[a] = b
          ? function () {
              var b = this.getStateInfo_();
              this.piskelController[a].apply(this.piskelController, arguments), this.raiseSaveStateEvent_(this.piskelController[a], arguments, b), $.publish(Events.PISKEL_RESET);
            }
          : function () {
              var b = this.getStateInfo_();
              this.piskelController[a].apply(this.piskelController, arguments), this.raiseSaveStateEvent_(this.piskelController[a], arguments, b);
            };
      }),
      (a.PublicPiskelController.prototype.getStateInfo_ = function () {
        return { frameIndex: this.piskelController.currentFrameIndex, layerIndex: this.piskelController.currentLayerIndex };
      }),
      (a.PublicPiskelController.prototype.raiseSaveStateEvent_ = function (a, b, c) {
        $.publish(Events.PISKEL_SAVE_STATE, { type: pskl.service.HistoryService.REPLAY, scope: this, replay: { fn: a, args: b }, state: c });
      }),
      (a.PublicPiskelController.prototype.replay = function (a, b) {
        b.fn.apply(this.piskelController, b.args);
      });
  })(),
  (function () {
    var a = $.namespace("pskl.controller");
    (a.CursorCoordinatesController = function (a) {
      (this.piskelController = a), (this.origin = null), (this.coordinates = { x: -1, y: -1 });
    }),
      (a.CursorCoordinatesController.prototype.init = function () {
        (this.coordinatesContainer = document.querySelector(".cursor-coordinates")),
          $.subscribe(Events.CURSOR_MOVED, this.onCursorMoved_.bind(this)),
          $.subscribe(Events.DRAG_START, this.onDragStart_.bind(this)),
          $.subscribe(Events.DRAG_END, this.onDragEnd_.bind(this)),
          $.subscribe(Events.FRAME_SIZE_CHANGED, this.redraw.bind(this)),
          this.redraw();
      }),
      (a.CursorCoordinatesController.prototype.redraw = function () {
        var a = "";
        this.origin && (a += this.origin.x + ":" + this.origin.y + " to ");
        var b = this.coordinates.x,
          c = this.coordinates.y;
        this.piskelController.getCurrentFrame().containsPixel(b, c) && ((a += b + ":" + c), this.origin) && (a += " (" + (Math.abs(b - this.origin.x) + 1) + "x" + (Math.abs(c - this.origin.y) + 1) + ")");
        this.coordinatesContainer.innerHTML = this.getFrameSizeHTML_() + a;
      }),
      (a.CursorCoordinatesController.prototype.getFrameSizeHTML_ = function () {
        return "[" + this.piskelController.getWidth() + "x" + this.piskelController.getHeight() + "] ";
      }),
      (a.CursorCoordinatesController.prototype.onCursorMoved_ = function (a, b, c) {
        (this.coordinates = { x: b, y: c }), this.redraw();
      }),
      (a.CursorCoordinatesController.prototype.onDragStart_ = function (a, b, c) {
        (this.origin = { x: b, y: c }), this.redraw();
      }),
      (a.CursorCoordinatesController.prototype.onDragEnd_ = function (a) {
        (this.origin = null), this.redraw();
      });
  })(),
  (function () {
    var a = $.namespace("pskl.controller");
    (a.DrawingController = function (b, c) {
      (this.piskelController = b), (this.dragHandler = new a.drawing.DragHandler(this)), (this.overlayFrame = pskl.model.Frame.createEmptyFromFrame(b.getCurrentFrame())), (this.container = c);
      var d = { zoom: this.calculateZoom_(), supportGridRendering: !0, height: this.getContainerHeight_(), width: this.getContainerWidth_(), xOffset: 0, yOffset: 0 };
      (this.overlayRenderer = new pskl.rendering.frame.CachedFrameRenderer(this.container, d, ["canvas-overlay"])),
        (this.renderer = new pskl.rendering.frame.CachedFrameRenderer(this.container, d, ["drawing-canvas"])),
        (this.onionSkinRenderer = pskl.rendering.OnionSkinRenderer.createInContainer(this.container, d, b)),
        (this.layersRenderer = new pskl.rendering.layer.LayersRenderer(this.container, d, b)),
        (this.compositeRenderer = new pskl.rendering.CompositeRenderer()),
        this.compositeRenderer.add(this.overlayRenderer).add(this.renderer).add(this.layersRenderer).add(this.onionSkinRenderer),
        (this.isClicked = !1),
        (this.previousMousemoveTime = 0),
        (this.currentToolBehavior = null);
    }),
      (a.DrawingController.prototype.init = function () {
        this.initMouseBehavior(),
          $.subscribe(
            Events.TOOL_SELECTED,
            $.proxy(function (a, b) {
              (this.currentToolBehavior = b), this.overlayFrame.clear();
            }, this)
          ),
          $(window).resize($.proxy(this.startResizeTimer_, this)),
          $.subscribe(Events.USER_SETTINGS_CHANGED, this.onUserSettingsChange_.bind(this)),
          $.subscribe(Events.FRAME_SIZE_CHANGED, this.onFrameSizeChange_.bind(this));
        var a = pskl.service.keyboard.Shortcuts;
        pskl.app.shortcutService.registerShortcut(a.MISC.RESET_ZOOM, this.resetZoom_.bind(this)),
          pskl.app.shortcutService.registerShortcut(a.MISC.INCREASE_ZOOM, this.updateZoom_.bind(this, 1)),
          pskl.app.shortcutService.registerShortcut(a.MISC.DECREASE_ZOOM, this.updateZoom_.bind(this, -1)),
          window.setTimeout(
            function () {
              this.afterWindowResize_(), this.resetZoom_();
            }.bind(this),
            100
          );
      }),
      (a.DrawingController.prototype.initMouseBehavior = function () {
        var a = $("body");
        this.container.mousedown($.proxy(this.onMousedown_, this)),
          pskl.utils.UserAgent.isChrome || pskl.utils.UserAgent.isIE11 ? this.container.on("mousewheel", $.proxy(this.onMousewheel_, this)) : this.container.on("wheel", $.proxy(this.onMousewheel_, this)),
          window.addEventListener("mouseup", this.onMouseup_.bind(this)),
          window.addEventListener("mousemove", this.onMousemove_.bind(this)),
          window.addEventListener("keyup", this.onKeyup_.bind(this)),
          window.addEventListener("touchstart", this.onTouchstart_.bind(this)),
          window.addEventListener("touchmove", this.onTouchmove_.bind(this)),
          window.addEventListener("touchend", this.onTouchend_.bind(this)),
          a.contextmenu(this.onCanvasContextMenu_);
      }),
      (a.DrawingController.prototype.startResizeTimer_ = function () {
        this.resizeTimer && window.clearInterval(this.resizeTimer), (this.resizeTimer = window.setTimeout($.proxy(this.afterWindowResize_, this), 200));
      }),
      (a.DrawingController.prototype.afterWindowResize_ = function () {
        var a = this.compositeRenderer.getDisplaySize().width;
        this.compositeRenderer.setDisplaySize(this.getContainerWidth_(), this.getContainerHeight_()), this.centerColumnWrapperHorizontally_();
        var b = this.compositeRenderer.getDisplaySize().width / a,
          c = b * this.compositeRenderer.getZoom();
        this.compositeRenderer.setZoom(c), $.publish(Events.ZOOM_CHANGED);
      }),
      (a.DrawingController.prototype.onUserSettingsChange_ = function (a, b, c) {
        b == pskl.UserSettings.SHOW_GRID
          ? console.warn("DrawingController:onUserSettingsChange_ not implemented !")
          : (b != pskl.UserSettings.ONION_SKIN && b != pskl.UserSettings.LAYER_PREVIEW) || (this.onionSkinRenderer.clear(), this.onionSkinRenderer.flush(), this.layersRenderer.clear(), this.layersRenderer.flush(), this.render());
      }),
      (a.DrawingController.prototype.onFrameSizeChange_ = function () {
        this.compositeRenderer.setDisplaySize(this.getContainerWidth_(), this.getContainerHeight_()),
          this.centerColumnWrapperHorizontally_(),
          this.compositeRenderer.setZoom(this.calculateZoom_()),
          this.compositeRenderer.setOffset(0, 0),
          $.publish(Events.ZOOM_CHANGED);
      }),
      (a.DrawingController.prototype.onTouchstart_ = function (a) {
        this.onMousedown_(a);
      }),
      (a.DrawingController.prototype.onTouchmove_ = function (a) {
        this.onMousemove_(a), a.preventDefault();
      }),
      (a.DrawingController.prototype.onTouchend_ = function (a) {
        this.onMouseup_(a);
      }),
      (a.DrawingController.prototype.onMousedown_ = function (a) {
        $.publish(Events.MOUSE_EVENT, [a, this]);
        var b = this.piskelController.getCurrentFrame(),
          c = this.getSpriteCoordinates(a.clientX, a.clientY);
        a.changedTouches && a.changedTouches[0] && (c = this.getSpriteCoordinates(a.changedTouches[0].clientX, a.changedTouches[0].clientY)),
          (this.isClicked = !0),
          a.button === Constants.MIDDLE_BUTTON
            ? this.dragHandler.startDrag(a.clientX, a.clientY)
            : a.altKey && !this.currentToolBehavior.supportsAlt()
            ? (this.currentToolBehavior.hideHighlightedPixel(this.overlayFrame), (this.isPickingColor = !0))
            : (this.currentToolBehavior.hideHighlightedPixel(this.overlayFrame), $.publish(Events.TOOL_PRESSED), this.currentToolBehavior.applyToolAt(c.x, c.y, b, this.overlayFrame, a));
      }),
      (a.DrawingController.prototype.onMousemove_ = function (a) {
        (this._clientX = a.clientX), (this._clientY = a.clientY), a.changedTouches && a.changedTouches[0] && ((this._clientX = a.changedTouches[0].clientX), (this._clientY = a.changedTouches[0].clientY));
        var b = new Date().getTime();
        b - this.previousMousemoveTime > Constants.MOUSEMOVE_THROTTLING && (this.moveTool_(this._clientX, this._clientY, a), (this.previousMousemoveTime = b));
      }),
      (a.DrawingController.prototype.onKeyup_ = function (a) {
        this.moveTool_(this._clientX, this._clientY, a);
      }),
      (a.DrawingController.prototype.moveTool_ = function (a, b, c) {
        var d = this.getSpriteCoordinates(a, b),
          e = this.piskelController.getCurrentFrame();
        this.isClicked
          ? pskl.app.mouseStateService.isMiddleButtonPressed()
            ? this.dragHandler.updateDrag(a, b)
            : this.isPickingColor || ($.publish(Events.MOUSE_EVENT, [c, this]), this.currentToolBehavior.moveToolAt(0 | d.x, 0 | d.y, e, this.overlayFrame, c))
          : this.currentToolBehavior.moveUnactiveToolAt(d.x, d.y, e, this.overlayFrame, c),
          $.publish(Events.CURSOR_MOVED, [d.x, d.y]);
      }),
      (a.DrawingController.prototype.onMousewheel_ = function (a) {
        var b,
          c = a.originalEvent;
        (b = pskl.utils.UserAgent.isIE11 ? c.wheelDelta : pskl.utils.UserAgent.isFirefox ? -40 * c.deltaY : c.wheelDeltaY), (b = b || 0);
        var d = b / 120;
        (pskl.utils.UserAgent.isMac ? c.metaKey : c.ctrlKey) && ((d *= 5), c.preventDefault());
        var e = this.getSpriteCoordinates(c.clientX, c.clientY);
        this.updateZoom_(d, e);
      }),
      (a.DrawingController.prototype.updateZoom_ = function (a, b) {
        if (0 !== a) {
          var c = this.getOffset(),
            d = this.getContainerWidth_() / this.renderer.getZoom(),
            e = this.getContainerHeight_() / this.renderer.getZoom(),
            f = a * this.getZoomStep_();
          if ((this.setZoom_(this.renderer.getZoom() + f), "object" == typeof b)) {
            var g = (b.x - c.x) / d,
              h = (b.y - c.y) / e,
              i = this.getContainerWidth_() / this.renderer.getZoom(),
              j = this.getContainerHeight_() / this.renderer.getZoom();
            this.setOffset(c.x - (i - d) * g, c.y - (j - e) * h);
          }
        }
      }),
      (a.DrawingController.prototype.onMouseup_ = function (a) {
        if (this.isClicked) {
          var b = this.getSpriteCoordinates(a.clientX, a.clientY);
          a.changedTouches && a.changedTouches[0] && (b = this.getSpriteCoordinates(a.changedTouches[0].clientX, a.changedTouches[0].clientY)), (this.isClicked = !1);
          var c = pskl.app.mouseStateService.isMiddleButtonPressed(),
            d = c && !this.dragHandler.isDragging(),
            e = c && this.dragHandler.isDragging();
          this.isPickingColor || d
            ? (this.pickColorAt_(b), (this.isPickingColor = !1))
            : e
            ? this.dragHandler.stopDrag()
            : (this.currentToolBehavior.releaseToolAt(b.x, b.y, this.piskelController.getCurrentFrame(), this.overlayFrame, a), $.publish(Events.TOOL_RELEASED)),
            $.publish(Events.MOUSE_EVENT, [a, this]);
        }
      }),
      (a.DrawingController.prototype.pickColorAt_ = function (a) {
        var b = this.piskelController.getCurrentFrame();
        if (b.containsPixel(a.x, a.y)) {
          var c = pskl.utils.intToColor(b.getPixel(a.x, a.y)),
            d = pskl.app.mouseStateService.isRightButtonPressed(),
            e = d ? Events.SELECT_SECONDARY_COLOR : Events.SELECT_PRIMARY_COLOR;
          $.publish(e, [c]);
        }
      }),
      (a.DrawingController.prototype.getSpriteCoordinates = function (a, b) {
        return this.renderer.getCoordinates(a, b);
      }),
      (a.DrawingController.prototype.getScreenCoordinates = function (a, b) {
        return this.renderer.reverseCoordinates(a, b);
      }),
      (a.DrawingController.prototype.onCanvasContextMenu_ = function (a) {
        if ($(a.target).closest("#drawing-canvas-container").length) return a.preventDefault(), a.stopPropagation(), (a.cancelBubble = !0), !1;
      }),
      (a.DrawingController.prototype.render = function () {
        var a = this.piskelController.getCurrentFrame();
        a.isSameSize(this.overlayFrame) || (this.overlayFrame = pskl.model.Frame.createEmptyFromFrame(a)),
          pskl.UserSettings.get(pskl.UserSettings.ONION_SKIN) && this.onionSkinRenderer.render(),
          pskl.UserSettings.get(pskl.UserSettings.LAYER_PREVIEW) && this.layersRenderer.render(),
          this.renderer.render(a),
          this.overlayRenderer.render(this.overlayFrame);
      }),
      (a.DrawingController.prototype.calculateZoom_ = function () {
        var a = this.piskelController.getCurrentFrame().getHeight(),
          b = this.piskelController.getCurrentFrame().getWidth();
        return Math.min(this.getAvailableWidth_() / b, this.getAvailableHeight_() / a);
      }),
      (a.DrawingController.prototype.getAvailableHeight_ = function () {
        return $("#main-wrapper").height();
      }),
      (a.DrawingController.prototype.getAvailableWidth_ = function () {
        var a = $(".left-column").outerWidth(!0),
          b = $(".right-column").outerWidth(!0),
          c = $("#tool-section").outerWidth(!0),
          d = $("#application-action-section").outerWidth(!0),
          e = a + b + c + d;
        return $("#main-wrapper").width() - e - 10;
      }),
      (a.DrawingController.prototype.getContainerHeight_ = function () {
        return this.getAvailableHeight_();
      }),
      (a.DrawingController.prototype.getContainerWidth_ = function () {
        return this.getAvailableWidth_();
      }),
      (a.DrawingController.prototype.centerColumnWrapperHorizontally_ = function () {
        var a = this.getContainerHeight_(),
          b = Math.floor(($("#main-wrapper").height() - a) / 2);
        $("#column-wrapper").css({ top: b + "px" });
      }),
      (a.DrawingController.prototype.getRenderer = function () {
        return this.compositeRenderer;
      }),
      (a.DrawingController.prototype.getOffset = function () {
        return this.compositeRenderer.getOffset();
      }),
      (a.DrawingController.prototype.setOffset = function (a, b) {
        this.compositeRenderer.setOffset(a, b), $.publish(Events.ZOOM_CHANGED);
      }),
      (a.DrawingController.prototype.resetZoom_ = function () {
        this.setZoom_(this.calculateZoom_());
      }),
      (a.DrawingController.prototype.getZoomStep_ = function () {
        return Math.max(0.1, this.renderer.getZoom() / 15);
      }),
      (a.DrawingController.prototype.setZoom_ = function (a) {
        this.compositeRenderer.setZoom(a), $.publish(Events.ZOOM_CHANGED);
      });
  })(),
  (function () {
    var a = $.namespace("pskl.controller.drawing");
    (a.DragHandler = function (a) {
      (this.drawingController = a), (this.isDragging_ = !1), this.updateOrigin_(-1, -1);
    }),
      (a.DragHandler.prototype.startDrag = function (a, b) {
        var c = this.drawingController.getSpriteCoordinates(a, b);
        this.updateOrigin_(c.x, c.y);
      }),
      (a.DragHandler.prototype.updateDrag = function (a, b) {
        var c = this.drawingController.getOffset(),
          d = this.calculateOffset_(a, b);
        if (c.y !== d.y || c.x !== d.x) {
          (this.isDragging_ = !0), this.drawingController.setOffset(d.x, d.y);
          var e = this.drawingController.getSpriteCoordinates(a, b);
          this.updateOrigin_(e.x, e.y);
        }
      }),
      (a.DragHandler.prototype.stopDrag = function () {
        (this.isDragging_ = !1), (this.origin = null);
      }),
      (a.DragHandler.prototype.isDragging = function () {
        return this.isDragging_;
      }),
      (a.DragHandler.prototype.calculateOffset_ = function (a, b) {
        var c = this.drawingController.getSpriteCoordinates(a, b),
          d = this.drawingController.getOffset();
        return { x: d.x - 2 * (c.x - this.origin.x), y: d.y - 2 * (c.y - this.origin.y) };
      }),
      (a.DragHandler.prototype.updateOrigin_ = function (a, b) {
        (this.origin = this.origin || {}), (this.origin.x = a), (this.origin.y = b);
      });
  })(),
  (function () {
    var a = $.namespace("pskl.controller"),
      b = { SELECT: "select", CLONE: "clone", DELETE: "delete", NEW_FRAME: "newframe" };
    (a.FramesListController = function (a, b) {
      (this.piskelController = a),
        (this.container = b),
        (this.previewList = b.querySelector("#preview-list")),
        this.refreshZoom_(),
        (this.redrawFlag = !0),
        (this.regenerateDomFlag = !0),
        (this.justDropped = !1),
        (this.cachedFrameProcessor = new pskl.model.frame.CachedFrameProcessor()),
        this.cachedFrameProcessor.setFrameProcessor(this.frameToPreviewCanvas_.bind(this)),
        this.cachedFrameProcessor.setOutputCloner(this.clonePreviewCanvas_.bind(this)),
        this.initDragndropBehavior_();
    }),
      (a.FramesListController.prototype.init = function () {
        $.subscribe(Events.TOOL_RELEASED, this.flagForRedraw_.bind(this)),
          $.subscribe(Events.PISKEL_RESET, this.flagForRedraw_.bind(this, !0)),
          $.subscribe(Events.USER_SETTINGS_CHANGED, this.flagForRedraw_.bind(this)),
          $.subscribe(Events.PISKEL_RESET, this.refreshZoom_.bind(this)),
          (this.previewListScroller = document.querySelector("#preview-list-scroller")),
          this.previewListScroller.addEventListener("scroll", this.updateScrollerOverflows.bind(this)),
          this.container.addEventListener("click", this.onContainerClick_.bind(this)),
          this.updateScrollerOverflows();
      }),
      (a.FramesListController.prototype.flagForRedraw_ = function (a) {
        (this.redrawFlag = !0), a && (this.regenerateDomFlag = !0);
      }),
      (a.FramesListController.prototype.refreshZoom_ = function () {
        this.zoom = this.calculateZoom_();
      }),
      (a.FramesListController.prototype.render = function () {
        this.redrawFlag && (this.regenerateDomFlag && ((this.tiles = []), (this.addFrameTile = null), this.createPreviews_(), (this.regenerateDomFlag = !1)), this.updatePreviews_(), (this.redrawFlag = !1));
      }),
      (a.FramesListController.prototype.updateScrollerOverflows = function () {
        var a = this.previewListScroller,
          b = a.offsetHeight,
          c = a.scrollTop,
          d = this.previewList.offsetHeight,
          e = this.container.querySelector(".top-overflow").offsetHeight,
          f = !1,
          g = !1;
        if (b < d) {
          c > e && (f = !0);
          d - c - b > e && (g = !0);
        }
        this.container.classList.toggle("top-overflow-visible", f), this.container.classList.toggle("bottom-overflow-visible", g);
      }),
      (a.FramesListController.prototype.onContainerClick_ = function (a) {
        var c = pskl.utils.Dom.getParentWithData(a.target, "tileAction");
        if (c) {
          var d = c.dataset.tileAction,
            e = parseInt(c.dataset.tileNumber, 10);
          if (d === b.CLONE) {
            this.piskelController.duplicateFrameAt(e);
            var f = this.createPreviewTile_(e + 1);
            this.previewList.insertBefore(f, this.tiles[e].nextSibling), this.tiles.splice(e, 0, f), this.updateScrollerOverflows();
          } else if (d === b.DELETE) this.piskelController.removeFrameAt(e), this.previewList.removeChild(this.tiles[e]), this.tiles.splice(e, 1), this.updateScrollerOverflows();
          else if (d !== b.SELECT || this.justDropped) {
            if (d === b.NEW_FRAME) {
              this.piskelController.addFrame();
              var g = this.createPreviewTile_(this.tiles.length);
              this.tiles.push(g), this.previewList.insertBefore(g, this.addFrameTile), this.updateScrollerOverflows();
            }
          } else this.piskelController.setCurrentFrameIndex(e);
          this.flagForRedraw_();
        }
      }),
      (a.FramesListController.prototype.updatePreviews_ = function () {
        var a, b;
        for (a = 0, b = this.tiles.length; a < b; a++) {
          this.tiles[a].classList.remove("selected"), this.tiles[a].setAttribute("data-tile-number", a), (this.tiles[a].querySelector(".tile-count").innerHTML = a + 1);
          var c = this.piskelController.getCurrentLayer().getFrameAt(a).getHash();
          this.tiles[a].getAttribute("data-tile-hash") !== c &&
            (this.tiles[a].querySelector("canvas")
              ? this.tiles[a].querySelector(".canvas-container").replaceChild(this.getCanvasForFrame(this.piskelController.getCurrentLayer().getFrameAt(a)), this.tiles[a].querySelector("canvas"))
              : this.tiles[a].querySelector(".canvas-container").appendChild(this.getCanvasForFrame(this.piskelController.getCurrentLayer().getFrameAt(a))));
        }
        var d = this.container.querySelectorAll(".delete-frame-action, .dnd-action"),
          e = this.piskelController.getFrameCount() > 1 ? "block" : "none";
        for (a = 0, b = d.length; a < b; a++) d[a].style.display = e;
        this.tiles[this.piskelController.getCurrentFrameIndex()].classList.add("selected");
      }),
      (a.FramesListController.prototype.createPreviews_ = function () {
        (this.previewList.innerHTML = ""), $(".tooltip").remove();
        for (var a = this.piskelController.getFrameCount(), c = 0; c < a; c++) {
          var d = this.createPreviewTile_(c);
          this.previewList.appendChild(d), (this.tiles[c] = d);
        }
        var e = document.createElement("div");
        (e.id = "add-frame-action"),
          (e.className = "add-frame-action"),
          e.setAttribute("data-tile-action", b.NEW_FRAME),
          (e.innerHTML = '<div class="add-frame-action-icon icon-frame-plus-white"></div><div class="label">Add new frame</div>'),
          this.previewList.appendChild(e),
          (this.addFrameTile = e),
          this.updateScrollerOverflows();
      }),
      (a.FramesListController.prototype.initDragndropBehavior_ = function () {
        $(this.previewList).sortable({
          placeholder: "preview-tile preview-tile-drop-proxy",
          update: $.proxy(this.onUpdate_, this),
          stop: $.proxy(this.onSortableStop_, this),
          items: ".preview-tile",
          axis: "y",
          tolerance: "pointer",
        }),
          $(this.previewList).disableSelection();
      }),
      (a.FramesListController.prototype.onUpdate_ = function (a, b) {
        var c = parseInt(b.item.data("tile-number"), 10),
          d = $(".preview-tile").index(b.item);
        this.piskelController.moveFrame(c, d), this.piskelController.setCurrentFrameIndex(d);
        var e = this.tiles.splice(c, 1)[0];
        this.tiles.splice(d, 0, e), this.flagForRedraw_();
      }),
      (a.FramesListController.prototype.onSortableStop_ = function (a, b) {
        (this.justDropped = !0),
          (this.resizeTimer = window.setTimeout(
            $.proxy(function () {
              this.justDropped = !1;
            }, this),
            200
          ));
      }),
      (a.FramesListController.prototype.createPreviewTile_ = function (a) {
        var c = this.piskelController.getCurrentLayer().getFrameAt(a),
          d = document.createElement("li");
        d.setAttribute("data-tile-number", a),
          d.setAttribute("data-tile-hash", c.getHash()),
          d.setAttribute("data-tile-action", b.SELECT),
          d.classList.add("preview-tile"),
          this.piskelController.getCurrentFrame() == c && d.classList.add("selected");
        var e = document.createElement("div");
        e.classList.add("canvas-container", pskl.UserSettings.get(pskl.UserSettings.CANVAS_BACKGROUND));
        var f = this.zoom * this.piskelController.getCurrentFrame().getHeight(),
          g = (Constants.PREVIEW_FILM_SIZE - f) / 2;
        e.style.marginTop = g + "px";
        var h = this.zoom * this.piskelController.getCurrentFrame().getWidth(),
          i = (Constants.PREVIEW_FILM_SIZE - h) / 2;
        (e.style.marginLeft = i + "px"), (e.style.marginRight = i + "px");
        var j = document.createElement("div");
        (j.className = "canvas-background"), e.appendChild(j), e.appendChild(this.getCanvasForFrame(c)), d.appendChild(e);
        var k = document.createElement("button");
        k.setAttribute("rel", "tooltip"),
          k.setAttribute("data-placement", "right"),
          k.setAttribute("data-tile-number", a),
          k.setAttribute("data-tile-action", b.CLONE),
          k.setAttribute("title", "Duplicate this frame"),
          (k.className = "tile-overlay duplicate-frame-action icon-frame-duplicate-white"),
          d.appendChild(k);
        var l = document.createElement("button");
        l.setAttribute("rel", "tooltip"),
          l.setAttribute("data-placement", "right"),
          l.setAttribute("title", "Delete this frame"),
          l.setAttribute("data-tile-number", a),
          l.setAttribute("data-tile-action", b.DELETE),
          (l.className = "tile-overlay delete-frame-action icon-frame-recyclebin-white"),
          d.appendChild(l);
        var m = document.createElement("div");
        (m.className = "tile-overlay dnd-action icon-frame-dragndrop-white"), d.appendChild(m);
        var n = document.createElement("div");
        return (n.className = "tile-overlay tile-count"), (n.innerHTML = a + 1), d.appendChild(n), d;
      }),
      (a.FramesListController.prototype.getCanvasForFrame = function (a) {
        return this.cachedFrameProcessor.get(a, this.zoom);
      }),
      (a.FramesListController.prototype.frameToPreviewCanvas_ = function (a) {
        var b = new pskl.rendering.CanvasRenderer(a, this.zoom);
        b.drawTransparentAs(Constants.TRANSPARENT_COLOR);
        var c = b.render();
        return c.classList.add("tile-view", "canvas"), c;
      }),
      (a.FramesListController.prototype.clonePreviewCanvas_ = function (a) {
        var b = pskl.utils.CanvasUtils.clone(a);
        return b.classList.add("tile-view", "canvas"), b;
      }),
      (a.FramesListController.prototype.calculateZoom_ = function () {
        var a = this.piskelController.getCurrentFrame(),
          b = Math.max(a.getHeight(), a.getWidth());
        return Constants.PREVIEW_FILM_SIZE / b;
      });
  })(),
  (function () {
    var a = $.namespace("pskl.controller");
    (a.HeaderController = function (a, b) {
      (this.piskelController = a), (this.savedStatusService = b);
    }),
      (a.HeaderController.prototype.init = function () {
        (this.piskelName_ = document.querySelector(".piskel-name")),
          $.subscribe(Events.BEFORE_SAVING_PISKEL, this.onBeforeSavingPiskelEvent_.bind(this)),
          $.subscribe(Events.AFTER_SAVING_PISKEL, this.onAfterSavingPiskelEvent_.bind(this)),
          $.subscribe(Events.PISKEL_DESCRIPTOR_UPDATED, this.updateHeader_.bind(this)),
          $.subscribe(Events.PISKEL_RESET, this.updateHeader_.bind(this)),
          $.subscribe(Events.PISKEL_SAVED_STATUS_UPDATE, this.updateHeader_.bind(this)),
          this.updateHeader_();
      }),
      (a.HeaderController.prototype.updateHeader_ = function () {
        try {
          var a = this.piskelController.getPiskel().getDescriptor().name;
          this.savedStatusService.isDirty() && (a += " *"), this.piskelName_ && (this.piskelName_.textContent = a);
        } catch (a) {
          console.warn("Could not update header : " + a.message);
        }
      }),
      (a.HeaderController.prototype.onBeforeSavingPiskelEvent_ = function () {
        this.piskelName_ && this.piskelName_.classList.add("piskel-name-saving");
      }),
      (a.HeaderController.prototype.onAfterSavingPiskelEvent_ = function () {
        this.piskelName_ && this.piskelName_.classList.remove("piskel-name-saving");
      });
  })(),
  (function () {
    var a = $.namespace("pskl.controller");
    (a.LayersListController = function (a) {
      (this.piskelController = a), (this.layerPreviewShortcut = pskl.service.keyboard.Shortcuts.MISC.LAYER_PREVIEW);
    }),
      (a.LayersListController.prototype.init = function () {
        (this.layerItemTemplate_ = pskl.utils.Template.get("layer-item-template")),
          (this.rootEl = document.querySelector(".layers-list-container")),
          (this.layersListEl = document.querySelector(".layers-list")),
          (this.toggleLayerPreviewEl = document.querySelector(".layers-toggle-preview")),
          this.rootEl.addEventListener("click", this.onClick_.bind(this)),
          this.toggleLayerPreviewEl.addEventListener("click", this.toggleLayerPreview_.bind(this)),
          this.initToggleLayerPreview_(),
          this.renderLayerList_(),
          this.updateToggleLayerPreview_(),
          $.subscribe(Events.PISKEL_RESET, this.renderLayerList_.bind(this)),
          $.subscribe(Events.USER_SETTINGS_CHANGED, $.proxy(this.onUserSettingsChange_, this));
      }),
      (a.LayersListController.prototype.renderLayerList_ = function () {
        var a = this.layersListEl.scrollTop;
        (this.layersListEl.innerHTML = ""), this.piskelController.getLayers().forEach(this.addLayerItem.bind(this)), this.updateButtonStatus_(), (this.layersListEl.scrollTop = a);
        var b = this.layersListEl.querySelector(".current-layer-item");
        b && b.scrollIntoViewIfNeeded(!1);
      }),
      (a.LayersListController.prototype.initToggleLayerPreview_ = function () {
        var a = [{ description: "Opacity defined in PREFERENCES" }];
        pskl.app.shortcutService.registerShortcut(this.layerPreviewShortcut, this.toggleLayerPreview_.bind(this));
        var b = pskl.utils.TooltipFormatter.format("Preview all layers", this.layerPreviewShortcut, a);
        this.toggleLayerPreviewEl.setAttribute("title", b);
      }),
      (a.LayersListController.prototype.updateButtonStatus_ = function () {
        var a = this.piskelController.getLayers(),
          b = (this.piskelController.getCurrentLayer(), this.piskelController.getCurrentLayerIndex()),
          c = 0 === b,
          d = 1 === a.length,
          e = b === a.length - 1;
        this.toggleButtonDisabledState_("up", e), this.toggleButtonDisabledState_("down", c), this.toggleButtonDisabledState_("merge", c), this.toggleButtonDisabledState_("delete", d);
      }),
      (a.LayersListController.prototype.toggleButtonDisabledState_ = function (a, b) {
        var c = document.querySelector('.layers-button[data-action="' + a + '"]');
        b ? (c.setAttribute("disabled", "disabled"), c.blur()) : c.removeAttribute("disabled");
      }),
      (a.LayersListController.prototype.updateToggleLayerPreview_ = function () {
        pskl.UserSettings.get(pskl.UserSettings.LAYER_PREVIEW) ? this.toggleLayerPreviewEl.classList.add("layers-toggle-preview-enabled") : this.toggleLayerPreviewEl.classList.remove("layers-toggle-preview-enabled");
      }),
      (a.LayersListController.prototype.onUserSettingsChange_ = function (a, b, c) {
        b == pskl.UserSettings.LAYER_PREVIEW && this.updateToggleLayerPreview_();
      }),
      (a.LayersListController.prototype.addLayerItem = function (a, b) {
        var c = this.piskelController.getCurrentLayer() === a,
          d = pskl.utils.Template.replace(this.layerItemTemplate_, { layername: a.getName(), layerindex: b, "isselected:current-layer-item": c, opacity: a.getOpacity() }),
          e = pskl.utils.Template.createFromHTML(d);
        this.layersListEl.insertBefore(e, this.layersListEl.firstChild), e.offsetWidth < e.scrollWidth && $(e).find(".layer-name").addClass("overflowing-name").attr("title", a.getName()).tooltip();
      }),
      (a.LayersListController.prototype.onClick_ = function (a) {
        var b,
          c = a.target || a.srcElement;
        if (c.classList.contains("button")) this.onButtonClick_(c);
        else if (c.classList.contains("layer-name")) (b = pskl.utils.Dom.getData(c, "layerIndex")), this.piskelController.setCurrentLayerIndex(parseInt(b, 10));
        else if (c.classList.contains("layer-item-opacity")) {
          b = pskl.utils.Dom.getData(c, "layerIndex");
          var d = this.piskelController.getLayerAt(parseInt(b, 10)),
            e = window.prompt("Set layer opacity (value between 0 and 1)", d.getOpacity());
          this.piskelController.setLayerOpacityAt(b, e);
        }
      }),
      (a.LayersListController.prototype.renameCurrentLayer_ = function () {
        var a = this.piskelController.getCurrentLayer(),
          b = window.prompt("Please enter the layer name", a.getName());
        if (b) {
          var c = this.piskelController.getCurrentLayerIndex();
          this.piskelController.renameLayerAt(c, b), this.renderLayerList_();
        }
      }),
      (a.LayersListController.prototype.mergeDownCurrentLayer_ = function () {
        var a = this.piskelController.getCurrentLayerIndex();
        this.piskelController.mergeDownLayerAt(a), this.renderLayerList_();
      }),
      (a.LayersListController.prototype.onButtonClick_ = function (a) {
        var b = a.getAttribute("data-action");
        "up" == b
          ? this.piskelController.moveLayerUp()
          : "down" == b
          ? this.piskelController.moveLayerDown()
          : "add" == b
          ? this.piskelController.createLayer()
          : "delete" == b
          ? this.piskelController.removeCurrentLayer()
          : "merge" == b
          ? this.mergeDownCurrentLayer_()
          : "edit" == b && this.renameCurrentLayer_();
      }),
      (a.LayersListController.prototype.toggleLayerPreview_ = function () {
        var a = pskl.UserSettings.get(pskl.UserSettings.LAYER_PREVIEW),
          b = pskl.UserSettings.get(pskl.UserSettings.LAYER_OPACITY),
          c = !a;
        pskl.UserSettings.set(pskl.UserSettings.LAYER_PREVIEW, c), c && 0 === b && pskl.UserSettings.set(pskl.UserSettings.LAYER_OPACITY, Constants.DEFAULT.LAYER_OPACITY);
      });
  })(),
  (function () {
    var a = $.namespace("pskl.controller.preview");
    (a.PopupPreviewController = function (a) {
      (this.piskelController = a), (this.popup = null), (this.renderer = null), (this.renderFlag = !1);
    }),
      (a.PopupPreviewController.prototype.init = function () {
        pskl.utils.Event.addEventListener(window, "unload", this.onMainWindowUnload_, this);
      }),
      (a.PopupPreviewController.prototype.isOpen = function () {
        return !!this.popup;
      }),
      (a.PopupPreviewController.prototype.open = function () {
        this.isOpen() ? this.popup.focus() : ((this.popup = window.open("about:blank", "", "width=320,height=320")), window.setTimeout(this.onPopupLoaded.bind(this), 500));
      }),
      (a.PopupPreviewController.prototype.onPopupLoaded = function () {
        (this.popup.document.title = "Piskel - preview"),
          (this.popup.document.body.innerHTML = pskl.utils.Template.get("popup-preview-partial")),
          pskl.utils.Event.addEventListener(this.popup, "resize", this.onWindowResize_, this),
          pskl.utils.Event.addEventListener(this.popup, "unload", this.onPopupClosed_, this);
        var a = this.popup.document.querySelector(".preview-container");
        (this.renderer = new pskl.rendering.frame.BackgroundImageFrameRenderer($(a))), this.updateZoom_(), (this.renderFlag = !0);
      }),
      (a.PopupPreviewController.prototype.render = function (a) {
        this.isOpen() && this.renderer && (this.renderer.render(a), (this.renderFlag = !1));
      }),
      (a.PopupPreviewController.prototype.onWindowResize_ = function (a) {
        this.updateZoom_(), (this.renderFlag = !0);
      }),
      (a.PopupPreviewController.prototype.updateZoom_ = function () {
        var a = this.popup.document.documentElement,
          b = a.clientWidth / this.piskelController.getWidth(),
          c = a.clientHeight / this.piskelController.getHeight(),
          d = Math.min(b, c);
        this.renderer.setZoom(d);
        var e = this.piskelController.getHeight() * d,
          f = this.piskelController.getWidth() * d,
          g = this.popup.document.querySelector(".preview-container");
        (g.style.height = e + "px"), (g.style.width = f + "px");
        var h = (a.clientHeight - e) / 2;
        (g.style.marginTop = h + "px"), (g.style.marginBottom = h + "px");
        var i = (a.clientWidth - f) / 2;
        (g.style.marginLeft = i + "px"), (g.style.marginRight = i + "px");
      }),
      (a.PopupPreviewController.prototype.onPopupClosed_ = function () {
        this.popup;
        this.popup = null;
      }),
      (a.PopupPreviewController.prototype.onMainWindowUnload_ = function () {
        this.isOpen() && this.popup.close();
      });
  })(),
  (function () {
    var a = $.namespace("pskl.controller.preview");
    (a.PreviewController = function (b, c) {
      (this.piskelController = b),
        (this.container = c),
        (this.elapsedTime = 0),
        (this.currentIndex = 0),
        (this.onionSkinShortcut = pskl.service.keyboard.Shortcuts.MISC.ONION_SKIN),
        (this.lastRenderTime = 0),
        (this.renderFlag = !0),
        (this.fpsRangeInput = document.querySelector("#preview-fps")),
        (this.fpsCounterDisplay = document.querySelector("#display-fps")),
        (this.openPopupPreview = document.querySelector(".open-popup-preview-button")),
        (this.previewSizeDropdown = document.querySelector(".preview-drop-down")),
        (this.previewSizes = {
          original: { button: document.querySelector(".original-size-button"), shortcut: pskl.service.keyboard.Shortcuts.MISC.X1_PREVIEW, tooltip: "Original size preview" },
          best: { button: document.querySelector(".best-size-button"), shortcut: pskl.service.keyboard.Shortcuts.MISC.BEST_PREVIEW, tooltip: "Best size preview" },
          full: { button: document.querySelector(".full-size-button"), shortcut: pskl.service.keyboard.Shortcuts.MISC.FULL_PREVIEW, tooltip: "Full size preview" },
        }),
        (this.toggleOnionSkinButton = document.querySelector(".preview-toggle-onion-skin")),
        (this.renderer = new pskl.rendering.frame.BackgroundImageFrameRenderer(this.container)),
        (this.popupPreviewController = new a.PopupPreviewController(b));
    }),
      (a.PreviewController.prototype.init = function () {
        this.fpsRangeInput.addEventListener("change", this.onFpsRangeInputUpdate_.bind(this)),
          this.fpsRangeInput.addEventListener("input", this.onFpsRangeInputUpdate_.bind(this)),
          (document.querySelector(".right-column").style.width = Constants.ANIMATED_PREVIEW_WIDTH + "px");
        var a = pskl.utils.Event.addEventListener;
        a(this.toggleOnionSkinButton, "click", this.toggleOnionSkin_, this), a(this.openPopupPreview, "click", this.onOpenPopupPreviewClick_, this);
        var b = pskl.app.shortcutService.registerShortcut.bind(pskl.app.shortcutService);
        b(this.onionSkinShortcut, this.toggleOnionSkin_.bind(this));
        var c = pskl.utils.TooltipFormatter.format("Toggle onion skin", this.onionSkinShortcut);
        this.toggleOnionSkinButton.setAttribute("title", c);
        for (var d in this.previewSizes)
          if (this.previewSizes.hasOwnProperty(d)) {
            var e = this.previewSizes[d];
            a(e.button, "click", this.onChangePreviewSize_, this, d), b(e.shortcut, this.onChangePreviewSize_.bind(this, d));
            var f = pskl.utils.TooltipFormatter.format(e.tooltip, e.shortcut);
            e.button.setAttribute("title", f);
          }
        $.subscribe(Events.FRAME_SIZE_CHANGED, this.onFrameSizeChange_.bind(this)),
          $.subscribe(Events.USER_SETTINGS_CHANGED, $.proxy(this.onUserSettingsChange_, this)),
          $.subscribe(Events.PISKEL_SAVE_STATE, this.setRenderFlag_.bind(this, !0)),
          $.subscribe(Events.FPS_CHANGED, this.updateFPS_.bind(this)),
          $.subscribe(Events.PISKEL_RESET, this.setRenderFlag_.bind(this, !0)),
          $.subscribe(Events.PISKEL_RESET, this.updateFPS_.bind(this)),
          this.updatePreviewSizeButtons_(),
          this.popupPreviewController.init(),
          this.updateZoom_(),
          this.updateOnionSkinPreview_(),
          this.selectPreviewSizeButton_(),
          this.updateFPS_(),
          this.updateMaxFPS_(),
          this.updateContainerDimensions_();
      }),
      (a.PreviewController.prototype.updatePreviewSizeButtons_ = function () {
        var a,
          b = this.calculateZoom_(),
          c = Math.floor(b),
          d = pskl.UserSettings.get(pskl.UserSettings.SEAMLESS_MODE);
        b < 1
          ? (this.disablePreviewSizeWidget_("No other option available"), (a = ["full"]))
          : 1 === b
          ? (this.disablePreviewSizeWidget_("No other option available"), (a = ["original"]))
          : d
          ? (this.disablePreviewSizeWidget_("Disabled in seamless mode"), (a = ["original"]))
          : (this.enablePreviewSizeWidget_(), (a = b === c ? ["original", "best"] : 1 === c ? ["full", "original"] : ["full", "original", "best"])),
          (this.previewSizes.best.button.textContent = Math.floor(b) + "x");
        for (var e in this.previewSizes)
          if (this.previewSizes.hasOwnProperty(e)) {
            var f = this.previewSizes[e],
              g = -1 != a.indexOf(e);
            g ? f.button.classList.remove("preview-contextual-action-hidden") : f.button.classList.add("preview-contextual-action-hidden");
          }
        var h = pskl.UserSettings.get(pskl.UserSettings.PREVIEW_SIZE);
        -1 === a.indexOf(h) && this.onChangePreviewSize_(a[0]);
      }),
      (a.PreviewController.prototype.enablePreviewSizeWidget_ = function () {
        this.previewSizeDropdown.classList.remove("preview-drop-down-disabled");
      }),
      (a.PreviewController.prototype.disablePreviewSizeWidget_ = function (a) {
        document.querySelector(".preview-disable-overlay").setAttribute("data-original-title", a), this.previewSizeDropdown.classList.add("preview-drop-down-disabled");
      }),
      (a.PreviewController.prototype.onOpenPopupPreviewClick_ = function () {
        this.popupPreviewController.open();
      }),
      (a.PreviewController.prototype.onChangePreviewSize_ = function (a) {
        !this.previewSizes[a].button.classList.contains("preview-contextual-action-hidden") && pskl.UserSettings.set(pskl.UserSettings.PREVIEW_SIZE, a);
      }),
      (a.PreviewController.prototype.onUserSettingsChange_ = function (a, b, c) {
        b == pskl.UserSettings.ONION_SKIN
          ? this.updateOnionSkinPreview_()
          : b == pskl.UserSettings.MAX_FPS
          ? this.updateMaxFPS_()
          : b === pskl.UserSettings.SEAMLESS_MODE
          ? this.onFrameSizeChange_()
          : (this.updateZoom_(), this.selectPreviewSizeButton_(), this.updateContainerDimensions_());
      }),
      (a.PreviewController.prototype.updateOnionSkinPreview_ = function () {
        pskl.UserSettings.get(pskl.UserSettings.ONION_SKIN) ? this.toggleOnionSkinButton.classList.add("preview-toggle-onion-skin-enabled") : this.toggleOnionSkinButton.classList.remove("preview-toggle-onion-skin-enabled");
      }),
      (a.PreviewController.prototype.selectPreviewSizeButton_ = function () {
        var a = document.querySelector(".size-button-selected");
        a && a.classList.remove("size-button-selected");
        var b = pskl.UserSettings.get(pskl.UserSettings.PREVIEW_SIZE);
        this.previewSizes[b].button.classList.add("size-button-selected");
      }),
      (a.PreviewController.prototype.updateMaxFPS_ = function () {
        var a = pskl.UserSettings.get(pskl.UserSettings.MAX_FPS);
        this.fpsRangeInput.setAttribute("max", a), this.piskelController.setFPS(Math.min(a, this.piskelController.getFPS()));
      }),
      (a.PreviewController.prototype.updateZoom_ = function () {
        var a,
          b = pskl.UserSettings.get(pskl.UserSettings.PREVIEW_SIZE);
        "original" === b ? (a = 1) : "best" === b ? (a = Math.floor(this.calculateZoom_())) : "full" === b && (a = this.calculateZoom_()), this.renderer.setZoom(a), this.setRenderFlag_(!0);
      }),
      (a.PreviewController.prototype.getZoom = function () {
        return this.calculateZoom_();
      }),
      (a.PreviewController.prototype.getCoordinates = function (a, b) {
        var c = this.container.offset();
        (a -= c.left), (b -= c.top);
        var d = this.getZoom();
        return { x: Math.floor(a / d), y: Math.floor(b / d) };
      }),
      (a.PreviewController.prototype.onFpsRangeInputUpdate_ = function (a) {
        var b = parseInt(this.fpsRangeInput.value, 10);
        this.piskelController.setFPS(b), "change" === a.type && this.fpsRangeInput.blur();
      }),
      (a.PreviewController.prototype.updateFPS_ = function () {
        var a = this.piskelController.getFPS();
        a !== this.fps && ((this.fps = a), (this.fpsRangeInput.value = 0), (this.fpsRangeInput.value = this.fps), (this.fpsCounterDisplay.innerHTML = this.fps + " FPS"));
      }),
      (a.PreviewController.prototype.render = function (a) {
        this.elapsedTime += a;
        var b = this.getNextIndex_(a);
        if (this.shouldRender_() || this.currentIndex != b) {
          this.currentIndex = b;
          var c = pskl.utils.LayerUtils.mergeFrameAt(this.piskelController.getLayers(), b);
          this.renderer.render(c), (this.renderFlag = !1), (this.lastRenderTime = Date.now()), this.popupPreviewController.render(c);
        }
      }),
      (a.PreviewController.prototype.getNextIndex_ = function (a) {
        if (0 === this.fps) return this.piskelController.getCurrentFrameIndex();
        var b = Math.floor(this.elapsedTime / (1e3 / this.fps));
        return this.piskelController.hasFrameAt(b) || ((this.elapsedTime = 0), (b = 0)), b;
      }),
      (a.PreviewController.prototype.calculateZoom_ = function () {
        var a = this.piskelController.getCurrentFrame(),
          b = 200 / a.getHeight(),
          c = 200 / a.getWidth();
        return Math.min(b, c);
      }),
      (a.PreviewController.prototype.onFrameSizeChange_ = function () {
        this.updateZoom_(), this.updateContainerDimensions_(), this.updatePreviewSizeButtons_();
      }),
      (a.PreviewController.prototype.updateContainerDimensions_ = function () {
        var a = pskl.UserSettings.get(pskl.UserSettings.SEAMLESS_MODE);
        this.renderer.setRepeated(a);
        var b, c;
        if (a) (b = 200), (c = 200);
        else {
          var d = this.getZoom(),
            e = this.piskelController.getCurrentFrame();
          (b = e.getHeight() * d), (c = e.getWidth() * d);
        }
        var f = this.container.get(0);
        (f.style.height = b + "px"), (f.style.width = c + "px");
        var g = (200 - b) / 2;
        (f.style.marginTop = g + "px"), (f.style.marginBottom = g + "px");
        var h = (200 - c) / 2;
        (f.style.marginLeft = h + "px"), (f.style.marginRight = h + "px");
      }),
      (a.PreviewController.prototype.setRenderFlag_ = function (a) {
        this.renderFlag = a;
      }),
      (a.PreviewController.prototype.shouldRender_ = function () {
        return (this.renderFlag || this.popupPreviewController.renderFlag) && Date.now() - this.lastRenderTime > 300;
      }),
      (a.PreviewController.prototype.toggleOnionSkin_ = function () {
        var a = pskl.UserSettings.get(pskl.UserSettings.ONION_SKIN);
        pskl.UserSettings.set(pskl.UserSettings.ONION_SKIN, !a);
      });
  })(),
  (function () {
    var a = $.namespace("pskl.controller");
    (a.MinimapController = function (a, b, c, d) {
      (this.piskelController = a), (this.previewController = b), (this.drawingController = c), (this.container = d), (this.isClicked = !1), (this.isVisible = !1);
    }),
      (a.MinimapController.prototype.init = function () {
        (this.minimapEl = document.createElement("DIV")),
          (this.minimapEl.className = "minimap-crop-frame"),
          (this.minimapEl.style.display = "none"),
          $(this.container).append(this.minimapEl),
          $(this.container).mousedown(this.onMinimapMousedown_.bind(this)),
          $("body").mousemove(this.onMinimapMousemove_.bind(this)),
          $("body").mouseup(this.onMinimapMouseup_.bind(this)),
          $.subscribe(Events.ZOOM_CHANGED, $.proxy(this.renderMinimap_, this));
      }),
      (a.MinimapController.prototype.renderMinimap_ = function () {
        var a = this.getVerticalRatio_(),
          b = this.getHorizontalRatio_();
        a > 1 || b > 1 ? this.displayMinimap_() : this.hideMinimap_();
      }),
      (a.MinimapController.prototype.displayMinimap_ = function () {
        var a = this.getMinimapSize_(),
          b = this.getPreviewSize_(),
          c = this.container.height(),
          d = this.container.width(),
          e = this.drawingController.getRenderer().getOffset(),
          f = (d - Math.max(a.width, b.width)) / 2,
          g = e.x * this.previewController.getZoom(),
          h = f + g,
          i = (c - Math.max(a.height, b.height)) / 2,
          j = e.y * this.previewController.getZoom(),
          k = i + j;
        (this.minimapEl.style.display = "block"),
          (this.minimapEl.style.width = Math.min(a.width, d) + "px"),
          (this.minimapEl.style.height = Math.min(a.height, c) + "px"),
          (this.minimapEl.style.left = Math.max(0, h) + "px"),
          (this.minimapEl.style.top = Math.max(0, k) + "px"),
          (this.isVisible = !0);
      }),
      (a.MinimapController.prototype.getMinimapSize_ = function () {
        var a = this.drawingController.getRenderer().getZoom(),
          b = this.previewController.getZoom(),
          c = a / b,
          d = this.drawingController.getRenderer().getDisplaySize();
        return { width: d.width / c, height: d.height / c };
      }),
      (a.MinimapController.prototype.getPreviewSize_ = function () {
        var a = this.piskelController.getCurrentFrame();
        return { width: a.getWidth() * this.previewController.getZoom(), height: a.getHeight() * this.previewController.getZoom() };
      }),
      (a.MinimapController.prototype.hideMinimap_ = function () {
        (this.minimapEl.style.display = "none"), (this.isVisible = !1);
      }),
      (a.MinimapController.prototype.onMinimapMousemove_ = function (a) {
        if (this.isVisible && this.isClicked) {
          var b = this.getCoordinatesCenteredAround_(a.clientX, a.clientY);
          this.drawingController.setOffset(b.x, b.y);
        }
      }),
      (a.MinimapController.prototype.onMinimapMousedown_ = function (a) {
        this.isClicked = !0;
      }),
      (a.MinimapController.prototype.onMinimapMouseup_ = function (a) {
        this.isClicked = !1;
      }),
      (a.MinimapController.prototype.getCoordinatesCenteredAround_ = function (a, b) {
        var c = this.previewController.getCoordinates(a, b),
          d = this.piskelController.getCurrentFrame().getWidth(),
          e = this.piskelController.getCurrentFrame().getHeight(),
          f = d / this.getHorizontalRatio_(),
          g = e / this.getVerticalRatio_();
        return { x: c.x - f / 2, y: c.y - g / 2 };
      }),
      (a.MinimapController.prototype.getVerticalRatio_ = function () {
        var a = this.drawingController.getRenderer().getZoom();
        return (this.piskelController.getCurrentFrame().getHeight() * a) / this.drawingController.getRenderer().getDisplaySize().height;
      }),
      (a.MinimapController.prototype.getHorizontalRatio_ = function () {
        var a = this.drawingController.getRenderer().getZoom();
        return (this.piskelController.getCurrentFrame().getWidth() * a) / this.drawingController.getRenderer().getDisplaySize().width;
      });
  })(),
  (function () {
    var a = $.namespace("pskl.controller");
    (a.ToolController = function () {
      (this.tools = [
        new pskl.tools.drawing.SimplePen(),
        new pskl.tools.drawing.VerticalMirrorPen(),
        new pskl.tools.drawing.PaintBucket(),
        new pskl.tools.drawing.ColorSwap(),
        new pskl.tools.drawing.Eraser(),
        new pskl.tools.drawing.Stroke(),
        new pskl.tools.drawing.Rectangle(),
        new pskl.tools.drawing.Circle(),
        new pskl.tools.drawing.Move(),
        new pskl.tools.drawing.selection.ShapeSelect(),
        new pskl.tools.drawing.selection.RectangleSelect(),
        new pskl.tools.drawing.selection.LassoSelect(),
        new pskl.tools.drawing.Lighten(),
        new pskl.tools.drawing.DitheringTool(),
        new pskl.tools.drawing.ColorPicker(),
      ]),
        (this.toolIconBuilder = new pskl.tools.ToolIconBuilder());
    }),
      (a.ToolController.prototype.init = function () {
        this.createToolsDom_(),
          this.addKeyboardShortcuts_(),
          this.selectTool_(this.tools[0]),
          $("#tool-section").mousedown($.proxy(this.onToolIconClicked_, this)),
          $.subscribe(Events.SELECT_TOOL, this.onSelectToolEvent_.bind(this)),
          $.subscribe(Events.SHORTCUTS_CHANGED, this.createToolsDom_.bind(this));
      }),
      (a.ToolController.prototype.activateToolOnStage_ = function (a) {
        var b = $("body"),
          c = b.data("selected-tool-class");
        c && (b.removeClass(c), b.removeClass(pskl.tools.drawing.Move.TOOL_ID)), b.addClass(a.toolId), b.data("selected-tool-class", a.toolId);
      }),
      (a.ToolController.prototype.onSelectToolEvent_ = function (a, b) {
        var c = this.getToolById_(b);
        c && this.selectTool_(c);
      }),
      (a.ToolController.prototype.selectTool_ = function (a) {
        (this.currentSelectedTool = a), this.activateToolOnStage_(this.currentSelectedTool);
        var b = $("#tool-section .tool-icon.selected"),
          c = $("[data-tool-id=" + a.toolId + "]");
        b.removeClass("selected"), c.addClass("selected"), $.publish(Events.TOOL_SELECTED, [a]);
      }),
      (a.ToolController.prototype.onToolIconClicked_ = function (a) {
        var b = $(a.target),
          c = b.closest(".tool-icon");
        if (c.length) {
          var d = c.data().toolId,
            e = this.getToolById_(d);
          e && this.selectTool_(e);
        }
      }),
      (a.ToolController.prototype.onKeyboardShortcut_ = function (a, b) {
        var c = this.getToolById_(a);
        null !== c && this.selectTool_(c);
      }),
      (a.ToolController.prototype.getToolById_ = function (a) {
        return pskl.utils.Array.find(this.tools, function (b) {
          return b.toolId == a;
        });
      }),
      (a.ToolController.prototype.createToolsDom_ = function () {
        for (var a = "", b = 0; b < this.tools.length; b++) {
          var c = this.tools[b];
          a += this.toolIconBuilder.createIcon(c);
        }
        $("#tools-container").html(a);
      }),
      (a.ToolController.prototype.addKeyboardShortcuts_ = function () {
        for (var a = 0; a < this.tools.length; a++) {
          var b = this.tools[a];
          pskl.app.shortcutService.registerShortcut(b.shortcut, this.onKeyboardShortcut_.bind(this, b.toolId));
        }
      });
  })(),
  (function () {
    var a = $.namespace("pskl.controller");
    (a.PaletteController = function () {}),
      (a.PaletteController.prototype.init = function () {
        $.subscribe(Events.SELECT_PRIMARY_COLOR, this.onColorSelected_.bind(this, { isPrimary: !0 })), $.subscribe(Events.SELECT_SECONDARY_COLOR, this.onColorSelected_.bind(this, { isPrimary: !1 }));
        var a = pskl.service.keyboard.Shortcuts;
        pskl.app.shortcutService.registerShortcut(a.COLOR.SWAP, this.swapColors.bind(this)), pskl.app.shortcutService.registerShortcut(a.COLOR.RESET, this.resetColors.bind(this));
        var b = {
            showPalette: !0,
            showButtons: !1,
            showInput: !0,
            palette: [["rgba(0,0,0,0)"]],
            clickoutFiresChange: !0,
            beforeShow: function (a) {
              a.setAlpha(1);
            },
          },
          c = $("#color-picker");
        c.spectrum($.extend({ color: Constants.DEFAULT_PEN_COLOR }, b)), c.change({ isPrimary: !0 }, $.proxy(this.onPickerChange_, this)), this.setTitleOnPicker_(Constants.DEFAULT_PEN_COLOR, c);
        var d = $("#secondary-color-picker");
        d.spectrum($.extend({ color: Constants.TRANSPARENT_COLOR }, b)),
          d.change({ isPrimary: !1 }, $.proxy(this.onPickerChange_, this)),
          this.setTitleOnPicker_(Constants.TRANSPARENT_COLOR, d),
          $(".swap-colors-button").click(this.swapColors.bind(this));
      }),
      (a.PaletteController.prototype.onPickerChange_ = function (a, b) {
        var c = $(a.target),
          d = c.val();
        d != Constants.TRANSPARENT_COLOR && (d = window.tinycolor(d).toHexString()), a.data.isPrimary ? this.setPrimaryColor_(d) : this.setSecondaryColor_(d);
      }),
      (a.PaletteController.prototype.onColorSelected_ = function (a, b, c) {
        $(b.target);
        a.isPrimary ? this.setPrimaryColor_(c) : this.setSecondaryColor_(c);
      }),
      (a.PaletteController.prototype.setPrimaryColor_ = function (a) {
        this.updateColorPicker_(a, $("#color-picker")), $.publish(Events.PRIMARY_COLOR_SELECTED, [a]);
      }),
      (a.PaletteController.prototype.setSecondaryColor_ = function (a) {
        this.updateColorPicker_(a, $("#secondary-color-picker")), $.publish(Events.SECONDARY_COLOR_SELECTED, [a]);
      }),
      (a.PaletteController.prototype.swapColors = function () {
        var a = pskl.app.selectedColorsService.getPrimaryColor();
        this.setPrimaryColor_(pskl.app.selectedColorsService.getSecondaryColor()), this.setSecondaryColor_(a);
      }),
      (a.PaletteController.prototype.resetColors = function () {
        this.setPrimaryColor_(Constants.DEFAULT_PEN_COLOR), this.setSecondaryColor_(Constants.TRANSPARENT_COLOR);
      }),
      (a.PaletteController.prototype.updateColorPicker_ = function (a, b) {
        a == Constants.TRANSPARENT_COLOR ? (b.spectrum("set", Constants.TRANSPARENT_COLOR), b.val(Constants.TRANSPARENT_COLOR)) : b.spectrum("set", a), this.setTitleOnPicker_(a, b);
      }),
      (a.PaletteController.prototype.setTitleOnPicker_ = function (a, b) {
        var c = b.parent();
        (a = c.data("initial-title") + "<br/>" + a), c.attr("data-original-title", a);
      });
  })(),
  (function () {
    var a = $.namespace("pskl.controller");
    (a.PalettesListController = function (a) {
      (this.usedColorService = a), (this.paletteService = pskl.app.paletteService);
    }),
      (a.PalettesListController.prototype.init = function () {
        (this.paletteColorTemplate_ = pskl.utils.Template.get("palette-color-template")),
          (this.colorListContainer_ = document.querySelector(".palettes-list-colors")),
          (this.colorPaletteSelect_ = document.querySelector(".palettes-list-select"));
        var a = document.querySelector(".create-palette-button"),
          b = document.querySelector(".edit-palette-button");
        this.colorPaletteSelect_.addEventListener("change", this.onPaletteSelected_.bind(this)),
          this.colorListContainer_.addEventListener("mouseup", this.onColorContainerMouseup.bind(this)),
          this.colorListContainer_.addEventListener("contextmenu", this.onColorContainerContextMenu.bind(this)),
          a.addEventListener("click", this.onCreatePaletteClick_.bind(this)),
          b.addEventListener("click", this.onEditPaletteClick_.bind(this)),
          $.subscribe(Events.PALETTE_LIST_UPDATED, this.onPaletteListUpdated.bind(this)),
          $.subscribe(Events.CURRENT_COLORS_UPDATED, this.fillColorListContainer.bind(this)),
          $.subscribe(Events.PRIMARY_COLOR_SELECTED, this.highlightSelectedColors.bind(this)),
          $.subscribe(Events.SECONDARY_COLOR_SELECTED, this.highlightSelectedColors.bind(this)),
          $.subscribe(Events.USER_SETTINGS_CHANGED, $.proxy(this.onUserSettingsChange_, this));
        var c = pskl.service.keyboard.Shortcuts;
        pskl.app.shortcutService.registerShortcut(c.COLOR.PREVIOUS_COLOR, this.selectPreviousColor_.bind(this)),
          pskl.app.shortcutService.registerShortcut(c.COLOR.NEXT_COLOR, this.selectNextColor_.bind(this)),
          pskl.app.shortcutService.registerShortcut(c.COLOR.SELECT_COLOR, this.selectColorForKey_.bind(this)),
          this.fillPaletteList(),
          this.updateFromUserSettings(),
          this.fillColorListContainer();
      }),
      (a.PalettesListController.prototype.fillPaletteList = function () {
        var a = this.paletteService.getPalettes(),
          b = a
            .map(function (a) {
              return pskl.utils.Template.replace('<option value="{{id}}">{{name}}</option>', a);
            })
            .join("");
        this.colorPaletteSelect_.innerHTML = b;
      }),
      (a.PalettesListController.prototype.fillColorListContainer = function () {
        var a = this.getSelectedPaletteColors_();
        if (a.length > 0) {
          var b = a
            .map(
              function (a, b) {
                return pskl.utils.Template.replace(this.paletteColorTemplate_, { color: a, index: b });
              }.bind(this)
            )
            .join("");
          (this.colorListContainer_.innerHTML = b), this.highlightSelectedColors();
        } else this.colorListContainer_.innerHTML = pskl.utils.Template.get("palettes-list-no-colors-partial");
      }),
      (a.PalettesListController.prototype.selectPalette = function (a) {
        pskl.UserSettings.set(pskl.UserSettings.SELECTED_PALETTE, a);
      }),
      (a.PalettesListController.prototype.getSelectedPaletteColors_ = function () {
        var a = [],
          b = this.getSelectedPalette_();
        return b && (a = b.getColors()), a.length > Constants.MAX_PALETTE_COLORS && (a = a.slice(0, Constants.MAX_PALETTE_COLORS)), a;
      }),
      (a.PalettesListController.prototype.getSelectedPalette_ = function () {
        var a = pskl.UserSettings.get(pskl.UserSettings.SELECTED_PALETTE);
        return this.paletteService.getPaletteById(a);
      }),
      (a.PalettesListController.prototype.selectNextColor_ = function () {
        this.selectColor_(this.getCurrentColorIndex_() + 1);
      }),
      (a.PalettesListController.prototype.selectPreviousColor_ = function () {
        this.selectColor_(this.getCurrentColorIndex_() - 1);
      }),
      (a.PalettesListController.prototype.getCurrentColorIndex_ = function () {
        var a = 0,
          b = document.querySelector(".palettes-list-primary-color");
        return b && (a = parseInt(b.dataset.colorIndex, 10)), a;
      }),
      (a.PalettesListController.prototype.selectColorForKey_ = function (a) {
        var b = parseInt(a, 10);
        (b = (b + 9) % 10), this.selectColor_(b);
      }),
      (a.PalettesListController.prototype.selectColor_ = function (a) {
        var b = this.getSelectedPaletteColors_(),
          c = b[a];
        c && $.publish(Events.SELECT_PRIMARY_COLOR, [c]);
      }),
      (a.PalettesListController.prototype.onUserSettingsChange_ = function (a, b, c) {
        b == pskl.UserSettings.SELECTED_PALETTE && this.updateFromUserSettings();
      }),
      (a.PalettesListController.prototype.updateFromUserSettings = function () {
        var a = pskl.UserSettings.get(pskl.UserSettings.SELECTED_PALETTE);
        this.fillColorListContainer(), (this.colorPaletteSelect_.value = a);
      }),
      (a.PalettesListController.prototype.onPaletteSelected_ = function (a) {
        var b = this.colorPaletteSelect_.value;
        this.selectPalette(b), this.colorPaletteSelect_.blur();
      }),
      (a.PalettesListController.prototype.onCreatePaletteClick_ = function (a) {
        $.publish(Events.DIALOG_SHOW, { dialogId: "create-palette" });
      }),
      (a.PalettesListController.prototype.onEditPaletteClick_ = function (a) {
        var b = this.colorPaletteSelect_.value;
        $.publish(Events.DIALOG_SHOW, { dialogId: "create-palette", initArgs: b });
      }),
      (a.PalettesListController.prototype.onColorContainerContextMenu = function (a) {
        a.preventDefault();
      }),
      (a.PalettesListController.prototype.onColorContainerMouseup = function (a) {
        var b = a.target,
          c = b.dataset.color;
        c && (a.button == Constants.LEFT_BUTTON ? $.publish(Events.SELECT_PRIMARY_COLOR, [c]) : a.button == Constants.RIGHT_BUTTON && $.publish(Events.SELECT_SECONDARY_COLOR, [c]));
      }),
      (a.PalettesListController.prototype.highlightSelectedColors = function () {
        this.removeClass_("palettes-list-primary-color"), this.removeClass_("palettes-list-secondary-color");
        var a = this.getColorContainer_(pskl.app.selectedColorsService.getSecondaryColor());
        a && (a.classList.remove("palettes-list-primary-color"), a.classList.add("palettes-list-secondary-color")),
          (a = this.getColorContainer_(pskl.app.selectedColorsService.getPrimaryColor())) && (a.classList.remove("palettes-list-secondary-color"), a.classList.add("palettes-list-primary-color"));
      }),
      (a.PalettesListController.prototype.getColorContainer_ = function (a) {
        return this.colorListContainer_.querySelector('.palettes-list-color[data-color="' + a + '"]');
      }),
      (a.PalettesListController.prototype.removeClass_ = function (a) {
        var b = document.querySelector("." + a);
        b && b.classList.remove(a);
      }),
      (a.PalettesListController.prototype.onPaletteListUpdated = function () {
        this.fillPaletteList(), this.updateFromUserSettings();
      });
  })(),
  (function () {
    var a = $.namespace("pskl.controller");
    (a.PenSizeController = function () {}),
      (a.PenSizeController.prototype.init = function () {
        (this.container = document.querySelector(".pen-size-container")),
          pskl.utils.Event.addEventListener(this.container, "click", this.onPenSizeOptionClick_, this),
          $.subscribe(Events.PEN_SIZE_CHANGED, this.onPenSizeChanged_.bind(this)),
          this.updateSelectedOption_();
      }),
      (a.PenSizeController.prototype.onPenSizeOptionClick_ = function (a) {
        var b = a.target.dataset.size;
        isNaN(b) || ((b = parseInt(b, 10)), pskl.app.penSizeService.setPenSize(b));
      }),
      (a.PenSizeController.prototype.onPenSizeChanged_ = function (a) {
        this.updateSelectedOption_();
      }),
      (a.PenSizeController.prototype.updateSelectedOption_ = function () {
        pskl.utils.Dom.removeClass("labeled", this.container), pskl.utils.Dom.removeClass("selected", this.container);
        var a,
          b = pskl.app.penSizeService.getPenSize();
        b <= 4 ? (a = this.container.querySelector('[data-size="' + b + '"]')) : ((a = this.container.querySelector('[data-size="4"]')), a.classList.add("labeled"), a.setAttribute("real-pen-size", b)), a && a.classList.add("selected");
      });
  })(),
  (function () {
    var a = $.namespace("pskl.controller");
    (a.ProgressBarController = function () {
      (this.template = pskl.utils.Template.get("progress-bar-template")), (this.progressBar = null), (this.progressBarStatus = null), (this.showProgressTimer_ = 0);
    }),
      (a.ProgressBarController.prototype.init = function () {
        $.subscribe(Events.SHOW_PROGRESS, $.proxy(this.showProgress_, this)), $.subscribe(Events.UPDATE_PROGRESS, $.proxy(this.updateProgress_, this)), $.subscribe(Events.HIDE_PROGRESS, $.proxy(this.hideProgress_, this));
      }),
      (a.ProgressBarController.prototype.showProgress_ = function (a, b) {
        this.removeProgressBar_(), (this.showProgressTimer_ = window.setTimeout(this.onTimerExpired_.bind(this, b), 300));
      }),
      (a.ProgressBarController.prototype.onTimerExpired_ = function (a) {
        var b = pskl.utils.Template.replace(this.template, { name: a.name, status: 0 }),
          c = pskl.utils.Template.createFromHTML(b);
        document.body.appendChild(c), (this.progressBar = document.querySelector(".progress-bar")), (this.progressBarStatus = document.querySelector(".progress-bar-status"));
      }),
      (a.ProgressBarController.prototype.updateProgress_ = function (a, b) {
        if (this.progressBar && this.progressBarStatus) {
          var c = b.progress,
            d = this.progressBar.offsetWidth,
            e = d - (c * d) / 100;
          (this.progressBar.style.backgroundPosition = -e + "px 0"), (this.progressBarStatus.innerHTML = c + "%");
        }
      }),
      (a.ProgressBarController.prototype.hideProgress_ = function (a, b) {
        this.showProgressTimer_ && window.clearTimeout(this.showProgressTimer_), this.removeProgressBar_();
      }),
      (a.ProgressBarController.prototype.removeProgressBar_ = function () {
        var a = document.querySelector(".progress-bar-container");
        a && (a.parentNode.removeChild(a), (this.progressBar = null), (this.progressBarStatus = null));
      });
  })(),
  (function () {
    var a = $.namespace("pskl.controller");
    (a.NotificationController = function () {}),
      (a.NotificationController.prototype.init = function () {
        $.subscribe(Events.SHOW_NOTIFICATION, $.proxy(this.displayMessage_, this)), $.subscribe(Events.HIDE_NOTIFICATION, $.proxy(this.removeMessage_, this));
      }),
      (a.NotificationController.prototype.displayMessage_ = function (a, b) {
        this.removeMessage_();
        var c = document.createElement("div");
        (c.id = "user-message"),
          (c.className = "user-message"),
          (c.innerHTML = b.content),
          (c.innerHTML = c.innerHTML + '<div title="Close message" class="close">x</div>'),
          document.body.appendChild(c),
          c.querySelector(".close").addEventListener("click", this.removeMessage_.bind(this)),
          b.hideDelay && window.setTimeout(this.removeMessage_.bind(this), b.hideDelay);
      }),
      (a.NotificationController.prototype.removeMessage_ = function (a) {
        var b = $("#user-message");
        b.length && b.remove();
      });
  })(),
  (function () {
    var a = $.namespace("pskl.controller");
    (a.TransformationsController = function () {
      (this.tools = [new pskl.tools.transform.Flip(), new pskl.tools.transform.Rotate(), new pskl.tools.transform.Clone(), new pskl.tools.transform.Center()]), (this.toolIconBuilder = new pskl.tools.ToolIconBuilder());
    }),
      (a.TransformationsController.prototype.init = function () {
        var a = document.querySelector(".transformations-container");
        (this.toolsContainer = a.querySelector(".tools-wrapper")), a.addEventListener("click", this.onTransformationClick_.bind(this)), this.createToolsDom_();
      }),
      (a.TransformationsController.prototype.applyTool = function (a, b) {
        this.tools.forEach(
          function (c) {
            c.toolId === a && ($.publish(Events.TRANSFORMATION_EVENT, [a, b]), c.applyTransformation(b));
          }.bind(this)
        );
      }),
      (a.TransformationsController.prototype.onTransformationClick_ = function (a) {
        var b = a.target.dataset.toolId;
        this.applyTool(b, a);
      }),
      (a.TransformationsController.prototype.createToolsDom_ = function () {
        var a = this.tools.reduce(
          function (a, b) {
            return a + this.toolIconBuilder.createIcon(b, "left");
          }.bind(this),
          ""
        );
        this.toolsContainer.innerHTML = a;
      });
  })(),
  (function () {
    var a = $.namespace("pskl.controller");
    (a.CanvasBackgroundController = function () {
      this.body = document.body;
    }),
      (a.CanvasBackgroundController.prototype.init = function () {
        $.subscribe(Events.USER_SETTINGS_CHANGED, this.onUserSettingsChange_.bind(this)), this.updateBackgroundClass_(pskl.UserSettings.get(pskl.UserSettings.CANVAS_BACKGROUND));
      }),
      (a.CanvasBackgroundController.prototype.onUserSettingsChange_ = function (a, b, c) {
        b == pskl.UserSettings.CANVAS_BACKGROUND && this.updateBackgroundClass_(c);
      }),
      (a.CanvasBackgroundController.prototype.updateBackgroundClass_ = function (a) {
        var b = this.body.dataset.currentBackgroundClass;
        b && this.body.classList.remove(b), this.body.classList.add(a), (this.body.dataset.currentBackgroundClass = a);
      });
  })(),
  (function () {
    var a = $.namespace("pskl.controller");
    (a.UserWarningController = function (a, b) {
      (this.piskelController = a), (this.currentColorsService = b);
    }),
      (a.UserWarningController.showPerformanceInfoDialog = function () {
        $.publish(Events.DIALOG_SHOW, { dialogId: "performance-info" });
      }),
      (a.UserWarningController.prototype.init = function () {
        $.subscribe(Events.PERFORMANCE_REPORT_CHANGED, this.onPerformanceReportChanged_.bind(this)),
          (this.performanceLinkEl = document.querySelector(".performance-link")),
          pskl.utils.Event.addEventListener(this.performanceLinkEl, "click", a.UserWarningController.showPerformanceInfoDialog, this);
      }),
      (a.UserWarningController.prototype.destroy = function () {
        pskl.utils.Event.removeAllEventListeners(this), (this.performanceLinkEl = null);
      }),
      (a.UserWarningController.prototype.onPerformanceReportChanged_ = function (a, b) {
        var c = b.hasProblem(),
          d = this.performanceLinkEl.classList.contains("visible");
        c ? this.performanceLinkEl.classList.add("visible") : this.performanceLinkEl.classList.remove("visible"),
          c &&
            !d &&
            $.publish(Events.SHOW_NOTIFICATION, [{ content: 'Performance problem detected, <a href="#" style="color:red;"onclick="pskl.controller.UserWarningController.showPerformanceInfoDialog()">learn more?</a>', hideDelay: 5e3 }]);
      });
  })(),
  (function () {
    var a = $.namespace("pskl.controller.settings");
    (a.AbstractSettingController = function () {}),
      (a.AbstractSettingController.prototype.addEventListener = function (a, b, c) {
        pskl.utils.Event.addEventListener(a, b, c, this);
      }),
      (a.AbstractSettingController.prototype.destroy = function () {
        pskl.utils.Event.removeAllEventListeners(this), this.nullifyDomReferences_();
      }),
      (a.AbstractSettingController.prototype.nullifyDomReferences_ = function () {
        for (var a in this)
          if (this.hasOwnProperty(a)) {
            var b = this[a] && this[a].nodeName;
            b && (this[a] = null);
          }
      });
  })(),
  (function () {
    var a = $.namespace("pskl.controller.settings");
    (a.ApplicationSettingsController = function () {}),
      pskl.utils.inherit(a.ApplicationSettingsController, pskl.controller.settings.AbstractSettingController),
      (a.ApplicationSettingsController.prototype.init = function () {
        (this.backgroundContainer = document.querySelector(".background-picker-wrapper")), this.addEventListener(this.backgroundContainer, "click", this.onBackgroundClick_);
        var a = pskl.UserSettings.get(pskl.UserSettings.CANVAS_BACKGROUND),
          b = this.backgroundContainer.querySelector("[data-background=" + a + "]");
        b && b.classList.add("selected");
        var c = pskl.UserSettings.get(pskl.UserSettings.GRID_WIDTH),
          d = document.querySelector(".grid-width-select"),
          e = d.querySelector('option[value="' + c + '"]');
        e && e.setAttribute("selected", "selected"), this.addEventListener(d, "change", this.onGridWidthChange_);
        var f = pskl.UserSettings.get(pskl.UserSettings.SEAMLESS_MODE),
          g = document.querySelector(".seamless-mode-checkbox");
        f && g.setAttribute("checked", f), this.addEventListener(g, "change", this.onSeamlessModeChange_);
        var h = document.querySelector(".max-fps-input");
        (h.value = pskl.UserSettings.get(pskl.UserSettings.MAX_FPS)), this.addEventListener(h, "change", this.onMaxFpsChange_);
        var i = pskl.UserSettings.get(pskl.UserSettings.COLOR_FORMAT),
          j = document.querySelector(".color-format-select"),
          k = j.querySelector('option[value="' + i + '"]');
        k && k.setAttribute("selected", "selected"), this.addEventListener(j, "change", this.onColorFormatChange_);
        var l = document.querySelector(".layer-opacity-input");
        (l.value = pskl.UserSettings.get(pskl.UserSettings.LAYER_OPACITY)),
          this.addEventListener(l, "change", this.onLayerOpacityChange_),
          this.addEventListener(l, "input", this.onLayerOpacityChange_),
          this.updateLayerOpacityText_(l.value);
        var m = document.querySelector(".seamless-opacity-input");
        (m.value = pskl.UserSettings.get(pskl.UserSettings.SEAMLESS_OPACITY)),
          this.addEventListener(m, "change", this.onSeamlessOpacityChange_),
          this.addEventListener(m, "input", this.onSeamlessOpacityChange_),
          this.updateSeamlessOpacityText_(m.value),
          (this.applicationSettingsForm = document.querySelector('[name="application-settings-form"]')),
          this.addEventListener(this.applicationSettingsForm, "submit", this.onFormSubmit_);
      }),
      (a.ApplicationSettingsController.prototype.onGridWidthChange_ = function (a) {
        var b = parseInt(a.target.value, 10);
        pskl.UserSettings.set(pskl.UserSettings.GRID_WIDTH, b);
      }),
      (a.ApplicationSettingsController.prototype.onColorFormatChange_ = function (a) {
        pskl.UserSettings.set(pskl.UserSettings.COLOR_FORMAT, a.target.value);
      }),
      (a.ApplicationSettingsController.prototype.onSeamlessModeChange_ = function (a) {
        pskl.UserSettings.set(pskl.UserSettings.SEAMLESS_MODE, a.currentTarget.checked);
      }),
      (a.ApplicationSettingsController.prototype.onBackgroundClick_ = function (a) {
        var b = a.target,
          c = b.dataset.background;
        if (c) {
          pskl.UserSettings.set(pskl.UserSettings.CANVAS_BACKGROUND, c);
          var d = this.backgroundContainer.querySelector(".selected");
          d && d.classList.remove("selected"), b.classList.add("selected");
        }
      }),
      (a.ApplicationSettingsController.prototype.onMaxFpsChange_ = function (a) {
        var b = a.target,
          c = parseInt(b.value, 10);
        c && !isNaN(c) ? pskl.UserSettings.set(pskl.UserSettings.MAX_FPS, c) : (b.value = pskl.UserSettings.get(pskl.UserSettings.MAX_FPS));
      }),
      (a.ApplicationSettingsController.prototype.onLayerOpacityChange_ = function (a) {
        var b = a.target,
          c = parseFloat(b.value);
        isNaN(c)
          ? (b.value = pskl.UserSettings.get(pskl.UserSettings.LAYER_OPACITY))
          : (pskl.UserSettings.set(pskl.UserSettings.LAYER_OPACITY, c), pskl.UserSettings.set(pskl.UserSettings.LAYER_PREVIEW, 0 !== c), this.updateLayerOpacityText_(c));
      }),
      (a.ApplicationSettingsController.prototype.onSeamlessOpacityChange_ = function (a) {
        var b = a.target,
          c = parseFloat(b.value);
        isNaN(c) ? (b.value = pskl.UserSettings.get(pskl.UserSettings.SEAMLESS_OPACITY)) : (pskl.UserSettings.set(pskl.UserSettings.SEAMLESS_OPACITY, c), this.updateSeamlessOpacityText_(c));
      }),
      (a.ApplicationSettingsController.prototype.updateLayerOpacityText_ = function (a) {
        document.querySelector(".layer-opacity-text").innerHTML = a;
      }),
      (a.ApplicationSettingsController.prototype.updateSeamlessOpacityText_ = function (a) {
        document.querySelector(".seamless-opacity-text").innerHTML = a;
      }),
      (a.ApplicationSettingsController.prototype.onFormSubmit_ = function (a) {
        a.preventDefault(), $.publish(Events.CLOSE_SETTINGS_DRAWER);
      });
  })(),
  (function () {
    var a = $.namespace("pskl.controller.settings.exportimage");
    (a.GifExportController = function (a, b) {
      (this.piskelController = a), (this.exportController = b);
    }),
      pskl.utils.inherit(a.GifExportController, pskl.controller.settings.AbstractSettingController),
      (a.GifExportController.prototype.init = function () {
        (this.uploadStatusContainerEl = document.querySelector(".gif-upload-status")),
          (this.previewContainerEl = document.querySelector(".gif-export-preview")),
          (this.uploadButton = document.querySelector(".gif-upload-button")),
          (this.downloadButton = document.querySelector(".gif-download-button")),
          this.addEventListener(this.uploadButton, "click", this.onUploadButtonClick_),
          this.addEventListener(this.downloadButton, "click", this.onDownloadButtonClick_);
      }),
      (a.GifExportController.prototype.getZoom_ = function () {
        return this.exportController.getExportZoom();
      }),
      (a.GifExportController.prototype.onUploadButtonClick_ = function (a) {
        a.preventDefault();
        var b = this.getZoom_(),
          c = this.piskelController.getFPS();
        this.renderAsImageDataAnimatedGIF(b, c, this.uploadImageData_.bind(this));
      }),
      (a.GifExportController.prototype.onDownloadButtonClick_ = function (a) {
        var b = this.getZoom_(),
          c = this.piskelController.getFPS();
        this.renderAsImageDataAnimatedGIF(b, c, this.downloadImageData_.bind(this));
      }),
      (a.GifExportController.prototype.downloadImageData_ = function (a) {
        var b = this.piskelController.getPiskel().getDescriptor().name + ".gif";
        pskl.utils.BlobUtils.dataToBlob(a, "image/gif", function (a) {
          pskl.utils.FileUtils.downloadAsFile(a, b);
        });
      }),
      (a.GifExportController.prototype.uploadImageData_ = function (a) {
        this.updatePreview_(a), this.previewContainerEl.classList.add("preview-upload-ongoing"), pskl.app.imageUploadService.upload(a, this.onImageUploadCompleted_.bind(this), this.onImageUploadFailed_.bind(this));
      }),
      (a.GifExportController.prototype.onImageUploadCompleted_ = function (a) {
        this.updatePreview_(a), this.updateStatus_(a), this.previewContainerEl.classList.remove("preview-upload-ongoing");
      }),
      (a.GifExportController.prototype.onImageUploadFailed_ = function (a, b) {
        500 === b.status && $.publish(Events.SHOW_NOTIFICATION, [{ content: "Upload failed : " + b.responseText, hideDelay: 5e3 }]);
      }),
      (a.GifExportController.prototype.updatePreview_ = function (a) {
        this.previewContainerEl.innerHTML = '<div><img style="max-width:32px;" src="' + a + '"/></div>';
      }),
      (a.GifExportController.prototype.renderAsImageDataAnimatedGIF = function (a, b, c) {
        var d,
          e,
          f = pskl.app.currentColorsService.getCurrentColors(),
          g = this.piskelController.getLayers(),
          h = g.some(function (a) {
            return a.isTransparent();
          }),
          i = !h && f.length < 256;
        i ? ((d = this.getTransparentColor(f)), (e = parseInt(d.substring(1), 16))) : ((d = "#FFFFFF"), (e = null));
        var j = this.piskelController.getWidth(),
          k = this.piskelController.getHeight(),
          l = new window.GIF({ workers: 5, quality: 1, width: j * a, height: k * a, preserveColors: i, transparent: e }),
          m = pskl.utils.CanvasUtils.createCanvas(j, k),
          n = m.getContext("2d");
        n.fillStyle = d;
        for (var o = 0; o < this.piskelController.getFrameCount(); o++) {
          var p = this.piskelController.renderFrameAt(o, !0);
          n.clearRect(0, 0, j, k), n.fillRect(0, 0, j, k), n.drawImage(p, 0, 0, j, k);
          var q = pskl.utils.ImageResizer.scale(m, a);
          l.addFrame(q.getContext("2d"), { delay: 1e3 / b });
        }
        $.publish(Events.SHOW_PROGRESS, [{ name: "Building animated GIF ..." }]),
          l.on(
            "progress",
            function (a) {
              $.publish(Events.UPDATE_PROGRESS, [{ progress: (100 * a).toFixed(1) }]);
            }.bind(this)
          ),
          l.on(
            "finished",
            function (a) {
              $.publish(Events.HIDE_PROGRESS), pskl.utils.FileUtils.readFile(a, c);
            }.bind(this)
          ),
          l.render();
      }),
      (a.GifExportController.prototype.getTransparentColor = function (a) {
        var b = pskl.utils.ColorUtils.getUnusedColor(a);
        return b || (console.error("Unable to find unused color to use as transparent color in the current sprite"), (b = "#FF00FF")), b;
      }),
      (a.GifExportController.prototype.updateStatus_ = function (a, b) {
        if (a) {
          var c = pskl.utils.Template.replace('<a class="highlight" href="{{link}}" target="_blank">{{shortLink}}</a>', { link: a, shortLink: this.shorten_(a, 30, "...") });
          this.uploadStatusContainerEl.innerHTML = "Your image is now available at : " + c;
        }
      }),
      (a.GifExportController.prototype.shorten_ = function (a, b, c) {
        if (a.length > b) {
          var d = Math.round((b - c.length) / 2);
          a = a.substring(0, d) + c + a.substring(a.length - d, a.length);
        }
        return a;
      });
  })(),
  (function () {
    var a = $.namespace("pskl.controller.settings.exportimage"),
      b = pskl.utils.Template.replace,
      c = function (a, b) {
        return 1 === b ? "1 " + a : b + " " + a + "s";
      };
    (a.PngExportController = function (a, b) {
      (this.piskelController = a), (this.exportController = b), (this.onScaleChanged_ = this.onScaleChanged_.bind(this));
    }),
      pskl.utils.inherit(a.PngExportController, pskl.controller.settings.AbstractSettingController),
      (a.PngExportController.prototype.init = function () {
        (this.layoutContainer = document.querySelector(".png-export-layout-section")),
          (this.dimensionInfo = document.querySelector(".png-export-dimension-info")),
          (this.rowsInput = document.querySelector("#png-export-rows")),
          (this.columnsInput = document.querySelector("#png-export-columns"));
        var a = document.querySelector(".png-download-button"),
          b = document.querySelector(".png-pixi-download-button"),
          c = document.querySelector(".datauri-open-button");
        this.initLayoutSection_(),
          this.updateDimensionLabel_(),
          this.addEventListener(this.columnsInput, "input", this.onColumnsInput_),
          this.addEventListener(a, "click", this.onDownloadClick_),
          this.addEventListener(b, "click", this.onPixiDownloadClick_),
          this.addEventListener(c, "click", this.onDataUriClick_),
          $.subscribe(Events.EXPORT_SCALE_CHANGED, this.onScaleChanged_);
      }),
      (a.PngExportController.prototype.destroy = function () {
        $.unsubscribe(Events.EXPORT_SCALE_CHANGED, this.onScaleChanged_), this.superclass.destroy.call(this);
      }),
      (a.PngExportController.prototype.initLayoutSection_ = function () {
        var a = this.piskelController.getFrameCount();
        1 === a ? (this.layoutContainer.style.display = "none") : (this.columnsInput.setAttribute("max", a), (this.columnsInput.value = this.getBestFit_()), this.onColumnsInput_());
      }),
      (a.PngExportController.prototype.updateDimensionLabel_ = function () {
        var a = this.exportController.getExportZoom(),
          d = this.piskelController.getFrameCount(),
          e = this.piskelController.getWidth() * a,
          f = this.piskelController.getHeight() * a,
          g = this.getColumns_(),
          h = this.getRows_();
        (e *= g), (f *= h), (this.dimensionInfo.innerHTML = b("{{width}} x {{height}} px, {{frames}}<br/>{{columns}}, {{rows}}.", { width: e, height: f, rows: c("row", h), columns: c("column", g), frames: c("frame", d) }));
      }),
      (a.PngExportController.prototype.getColumns_ = function () {
        return parseInt(this.columnsInput.value || 1, 10);
      }),
      (a.PngExportController.prototype.getRows_ = function () {
        return parseInt(this.rowsInput.value || 1, 10);
      }),
      (a.PngExportController.prototype.getBestFit_ = function () {
        var a = this.piskelController.getWidth() / this.piskelController.getHeight(),
          b = this.piskelController.getFrameCount(),
          c = Math.round(Math.sqrt(b / a));
        return pskl.utils.Math.minmax(c, 1, b);
      }),
      (a.PngExportController.prototype.onScaleChanged_ = function () {
        this.updateDimensionLabel_();
      }),
      (a.PngExportController.prototype.onColumnsInput_ = function () {
        var a = this.columnsInput.value;
        "" !== a &&
          ((a = parseInt(a, 10)),
          isNaN(a) && (a = 1),
          (a = pskl.utils.Math.minmax(a, 1, this.piskelController.getFrameCount())),
          (this.columnsInput.value = a),
          (this.rowsInput.value = Math.ceil(this.piskelController.getFrameCount() / a)),
          this.updateDimensionLabel_());
      }),
      (a.PngExportController.prototype.createPngSpritesheet_ = function () {
        var a = new pskl.rendering.PiskelRenderer(this.piskelController),
          b = a.renderAsCanvas(this.getColumns_(), this.getRows_()),
          c = b.width,
          d = b.height,
          e = this.exportController.getExportZoom();
        return 1 != e && (b = pskl.utils.ImageResizer.resize(b, c * e, d * e, !1)), b;
      }),
      (a.PngExportController.prototype.onDownloadClick_ = function (a) {
        var b = this.createPngSpritesheet_();
        this.downloadCanvas_(b);
      }),
      (a.PngExportController.prototype.downloadCanvas_ = function (a) {
        var b = this.piskelController.getPiskel().getDescriptor().name,
          c = b + ".png";
        pskl.utils.BlobUtils.canvasToBlob(a, function (a) {
          pskl.utils.FileUtils.downloadAsFile(a, c);
        });
      }),
      (a.PngExportController.prototype.onPixiDownloadClick_ = function () {
        var a = new window.JSZip(),
          b = this.createPngSpritesheet_(),
          c = this.piskelController.getPiskel().getDescriptor().name;
        a.file(c + ".png", pskl.utils.CanvasUtils.getBase64FromCanvas(b) + "\n", { base64: !0 });
        for (var d = b.width / this.getColumns_(), e = b.height / this.getRows_(), f = this.piskelController.getFrameCount(), g = {}, h = 0; h < f; h++) {
          var i = h % this.getColumns_(),
            j = (h - i) / this.getColumns_(),
            k = { frame: { x: d * i, y: e * j, w: d, h: e }, rotated: !1, trimmed: !1, spriteSourceSize: { x: 0, y: 0, w: d, h: e }, sourceSize: { w: d, h: e } };
          g[c + h + ".png"] = k;
        }
        var l = { frames: g, meta: { app: "https://github.com/juliandescottes/piskel/", version: "1.0", image: c + ".png", format: "RGBA8888", size: { w: b.width, h: b.height } } };
        a.file(c + ".json", JSON.stringify(l));
        var m = a.generate({ type: "blob" });
        pskl.utils.FileUtils.downloadAsFile(m, c + ".zip");
      }),
      (a.PngExportController.prototype.onDataUriClick_ = function (a) {
        window.open(this.createPngSpritesheet_().toDataURL("image/png"));
      });
  })(),
  (function () {
    var a = $.namespace("pskl.controller.settings.exportimage");
    (a.ZipExportController = function (a, b) {
      (this.piskelController = a), (this.exportController = b);
    }),
      pskl.utils.inherit(a.ZipExportController, pskl.controller.settings.AbstractSettingController),
      (a.ZipExportController.prototype.init = function () {
        (this.pngFilePrefixInput = document.querySelector(".zip-prefix-name")), (this.pngFilePrefixInput.value = "sprite_"), (this.splitByLayersCheckbox = document.querySelector(".zip-split-layers-checkbox"));
        var a = document.querySelector(".zip-generate-button");
        this.addEventListener(a, "click", this.onZipButtonClick_);
      }),
      (a.ZipExportController.prototype.onZipButtonClick_ = function () {
        var a = new window.JSZip();
        this.splitByLayersCheckbox.checked ? this.splittedExport_(a) : this.mergedExport_(a);
        var b = this.getPiskelName_() + ".zip",
          c = a.generate({ type: "blob" });
        pskl.utils.FileUtils.downloadAsFile(c, b);
      }),
      (a.ZipExportController.prototype.mergedExport_ = function (a) {
        for (var b = ("" + this.piskelController.getFrameCount()).length, c = this.exportController.getExportZoom(), d = 0; d < this.piskelController.getFrameCount(); d++) {
          var e = this.piskelController.renderFrameAt(d, !0),
            f = pskl.utils.ImageResizer.scale(e, c),
            g = this.pngFilePrefixInput.value,
            h = pskl.utils.StringUtils.leftPad(d, b, "0"),
            i = g + h + ".png";
          a.file(i, pskl.utils.CanvasUtils.getBase64FromCanvas(f) + "\n", { base64: !0 });
        }
      }),
      (a.ZipExportController.prototype.splittedExport_ = function (a) {
        for (var b = this.piskelController.getLayers(), c = ("" + this.piskelController.getFrameCount()).length, d = ("" + b.length).length, e = this.exportController.getExportZoom(), f = 0; this.piskelController.hasLayerAt(f); f++)
          for (var g = this.piskelController.getLayerAt(f), h = pskl.utils.StringUtils.leftPad(f, d, "0"), i = 0; i < this.piskelController.getFrameCount(); i++) {
            var j = pskl.utils.LayerUtils.renderFrameAt(g, i, !0),
              k = pskl.utils.ImageResizer.scale(j, e),
              l = this.pngFilePrefixInput.value,
              m = pskl.utils.StringUtils.leftPad(i + 1, c, "0"),
              n = "l" + h + "_" + l + m + ".png";
            a.file(n, pskl.utils.CanvasUtils.getBase64FromCanvas(k) + "\n", { base64: !0 });
          }
      }),
      (a.ZipExportController.prototype.getPiskelName_ = function () {
        return this.piskelController.getPiskel().getDescriptor().name;
      });
  })(),
  (function () {
    var a = $.namespace("pskl.controller.settings.exportimage");
    (a.MiscExportController = function (a) {
      this.piskelController = a;
    }),
      pskl.utils.inherit(a.MiscExportController, pskl.controller.settings.AbstractSettingController),
      (a.MiscExportController.prototype.init = function () {
        var a = document.querySelector(".c-download-button");
        this.addEventListener(a, "click", this.onDownloadCFileClick_);
        var b = document.querySelector(".selected-frame-download-button");
        this.addEventListener(b, "click", this.onDownloadSelectedFrameClick_);
      }),
      (a.MiscExportController.prototype.onDownloadCFileClick_ = function (a) {
        var b = this.getPiskelName_() + ".c",
          c = this.getPiskelName_().replace(" ", "_"),
          d = this.piskelController.getWidth(),
          e = this.piskelController.getHeight(),
          f = this.piskelController.getFrameCount(),
          g = "#include <stdint.h>\n\n";
        (g += "#define " + c.toUpperCase() + "_FRAME_COUNT " + this.piskelController.getFrameCount() + "\n"),
          (g += "#define " + c.toUpperCase() + "_FRAME_WIDTH " + d + "\n"),
          (g += "#define " + c.toUpperCase() + "_FRAME_HEIGHT " + e + "\n\n"),
          (g += '/* Piskel data for "' + this.getPiskelName_() + '" */\n\n'),
          (g += "static const uint32_t " + c.toLowerCase()),
          (g += "_data[" + f + "][" + d * e + "] = {\n");
        for (var h = 0; h < f; h++) {
          var i = this.piskelController.renderFrameAt(h, !0),
            j = i.getContext("2d"),
            k = j.getImageData(0, 0, d, e),
            l = k.data;
          g += "{\n";
          for (var m = 0; m < l.length; m += 4) (g += this.rgbToCHex(l[m], l[m + 1], l[m + 2], l[m + 3])), m != l.length - 4 && (g += ", "), (m + 4) % (4 * d) == 0 && (g += "\n");
          g += h != f - 1 ? "},\n" : "}\n";
        }
        (g += "};\n"),
          pskl.utils.BlobUtils.stringToBlob(
            g,
            function (a) {
              pskl.utils.FileUtils.downloadAsFile(a, b);
            }.bind(this),
            "application/text"
          );
      }),
      (a.MiscExportController.prototype.getPiskelName_ = function () {
        return this.piskelController.getPiskel().getDescriptor().name;
      }),
      (a.MiscExportController.prototype.rgbToCHex = function (a, b, c, d) {
        var e = "0x";
        return (e += ("00" + d.toString(16)).substr(-2)), (e += ("00" + c.toString(16)).substr(-2)), (e += ("00" + b.toString(16)).substr(-2)), (e += ("00" + a.toString(16)).substr(-2));
      }),
      (a.MiscExportController.prototype.onDownloadSelectedFrameClick_ = function (a) {
        var b = this.piskelController.getCurrentFrameIndex(),
          c = this.getPiskelName_() + "-" + (b + 1) + ".png",
          d = this.piskelController.renderFrameAt(b, !0);
        pskl.utils.BlobUtils.canvasToBlob(d, function (a) {
          pskl.utils.FileUtils.downloadAsFile(a, c);
        });
      });
  })(),
  (function () {
    var a = $.namespace("pskl.controller.settings.exportimage"),
      b = {
        png: { template: "templates/settings/export/png.html", controller: a.PngExportController },
        gif: { template: "templates/settings/export/gif.html", controller: a.GifExportController },
        zip: { template: "templates/settings/export/zip.html", controller: a.ZipExportController },
        misc: { template: "templates/settings/export/misc.html", controller: a.MiscExportController },
      };
    (a.ExportController = function (a) {
      (this.piskelController = a), (this.onSizeInputChange_ = this.onSizeInputChange_.bind(this));
    }),
      pskl.utils.inherit(a.ExportController, pskl.controller.settings.AbstractSettingController),
      (a.ExportController.prototype.init = function () {
        (this.scaleInput = document.querySelector(".export-scale .scale-input")),
          this.addEventListener(this.scaleInput, "change", this.onScaleChange_),
          this.addEventListener(this.scaleInput, "input", this.onScaleChange_),
          (this.widthInput = document.querySelector(".export-resize .resize-width")),
          (this.heightInput = document.querySelector(".export-resize .resize-height"));
        var a = pskl.UserSettings.get(pskl.UserSettings.EXPORT_SCALE);
        (this.sizeInputWidget = new pskl.widgets.SizeInput({
          widthInput: this.widthInput,
          heightInput: this.heightInput,
          initWidth: this.piskelController.getWidth() * a,
          initHeight: this.piskelController.getHeight() * a,
          onChange: this.onSizeInputChange_,
        })),
          this.onSizeInputChange_(),
          (this.exportPanel = document.querySelector(".export-panel")),
          (this.exportTabs = document.querySelector(".export-tabs")),
          this.addEventListener(this.exportTabs, "click", this.onTabsClicked_);
        var b = pskl.UserSettings.get(pskl.UserSettings.EXPORT_TAB);
        this.selectTab(b);
      }),
      (a.ExportController.prototype.destroy = function () {
        this.sizeInputWidget.destroy(), this.currentController.destroy(), this.superclass.destroy.call(this);
      }),
      (a.ExportController.prototype.selectTab = function (a) {
        if (b[a] && this.currentTab != a) {
          this.currentController && this.currentController.destroy(),
            (this.exportPanel.innerHTML = pskl.utils.Template.get(b[a].template)),
            (this.currentController = new b[a].controller(this.piskelController, this)),
            this.currentController.init(),
            (this.currentTab = a),
            pskl.UserSettings.set(pskl.UserSettings.EXPORT_TAB, a);
          var c = this.exportTabs.querySelector(".selected");
          c && c.classList.remove("selected"), this.exportTabs.querySelector('[data-tab-id="' + a + '"]').classList.add("selected");
        }
      }),
      (a.ExportController.prototype.onTabsClicked_ = function (a) {
        var b = pskl.utils.Dom.getData(a.target, "tabId");
        this.selectTab(b);
      }),
      (a.ExportController.prototype.onScaleChange_ = function () {
        var a = parseFloat(this.scaleInput.value);
        isNaN(a) || (Math.round(this.getExportZoom()) != a && this.sizeInputWidget.setWidth(this.piskelController.getWidth() * a), pskl.UserSettings.set(pskl.UserSettings.EXPORT_SCALE, a));
      }),
      (a.ExportController.prototype.updateScaleText_ = function (a) {
        (a = a.toFixed(1)), (document.querySelector(".export-scale .scale-text").innerHTML = a + "x");
      }),
      (a.ExportController.prototype.onSizeInputChange_ = function () {
        var a = this.getExportZoom();
        isNaN(a) || (this.updateScaleText_(a), $.publish(Events.EXPORT_SCALE_CHANGED), (this.scaleInput.value = Math.round(a)), a >= 1 && a <= 32 && this.onScaleChange_());
      }),
      (a.ExportController.prototype.getExportZoom = function () {
        return parseInt(this.widthInput.value, 10) / this.piskelController.getWidth();
      });
  })(),
  (function () {
    var a = $.namespace("pskl.controller.settings.resize");
    (a.ResizeController = function (b) {
      (this.piskelController = b), (this.container = document.querySelector(".resize-canvas"));
      var c = this.container.querySelector(".resize-anchor-container");
      (this.anchorWidget = new pskl.widgets.AnchorWidget(c)), (this.defaultSizeController = new a.DefaultSizeController(b));
    }),
      pskl.utils.inherit(a.ResizeController, pskl.controller.settings.AbstractSettingController),
      (a.ResizeController.prototype.init = function () {
        (this.widthInput = this.container.querySelector('[name="resize-width"]')),
          (this.heightInput = this.container.querySelector('[name="resize-height"]')),
          (this.resizeForm = this.container.querySelector("form")),
          (this.resizeContentCheckbox = this.container.querySelector(".resize-content-checkbox")),
          (this.maintainRatioCheckbox = this.container.querySelector(".resize-ratio-checkbox")),
          (this.sizeInputWidget = new pskl.widgets.SizeInput({ widthInput: this.widthInput, heightInput: this.heightInput, initWidth: this.piskelController.getWidth(), initHeight: this.piskelController.getHeight() }));
        var a = pskl.UserSettings.get("RESIZE_SETTINGS"),
          b = pskl.widgets.AnchorWidget.ORIGIN[a.origin] || "TOPLEFT";
        this.anchorWidget.setOrigin(b),
          a.resizeContent && ((this.resizeContentCheckbox.checked = !0), this.anchorWidget.disable()),
          a.maintainRatio ? (this.maintainRatioCheckbox.checked = !0) : this.sizeInputWidget.disableSync(),
          this.addEventListener(this.resizeForm, "submit", this.onResizeFormSubmit_),
          this.addEventListener(this.resizeContentCheckbox, "change", this.onResizeContentChange_),
          this.addEventListener(this.maintainRatioCheckbox, "change", this.onMaintainRatioChange_),
          this.defaultSizeController.init();
      }),
      (a.ResizeController.prototype.destroy = function () {
        this.updateUserPreferences_(), this.anchorWidget.destroy(), this.sizeInputWidget.destroy(), this.superclass.destroy.call(this);
      }),
      (a.ResizeController.prototype.onResizeFormSubmit_ = function (a) {
        a.preventDefault();
        var b = this.piskelController.getPiskel(),
          c = pskl.utils.ResizeUtils.resizePiskel(b, {
            width: parseInt(this.widthInput.value, 10),
            height: parseInt(this.heightInput.value, 10),
            origin: this.anchorWidget.getOrigin(),
            resizeContent: this.resizeContentCheckbox.checked,
          });
        pskl.app.piskelController.setPiskel(c, !0), $.publish(Events.CLOSE_SETTINGS_DRAWER);
      }),
      (a.ResizeController.prototype.onResizeContentChange_ = function (a) {
        a.target.checked ? this.anchorWidget.disable() : this.anchorWidget.enable();
      }),
      (a.ResizeController.prototype.onMaintainRatioChange_ = function (a) {
        a.target.checked ? this.sizeInputWidget.enableSync() : this.sizeInputWidget.disableSync();
      }),
      (a.ResizeController.prototype.updateUserPreferences_ = function () {
        pskl.UserSettings.set("RESIZE_SETTINGS", { origin: this.anchorWidget.getOrigin(), resizeContent: !!this.resizeContentCheckbox.checked, maintainRatio: !!this.maintainRatioCheckbox.checked });
      });
  })(),
  (function () {
    var a = $.namespace("pskl.controller.settings.resize");
    (a.DefaultSizeController = function (a) {
      this.piskelController = a;
    }),
      pskl.utils.inherit(a.DefaultSizeController, pskl.controller.settings.AbstractSettingController),
      (a.DefaultSizeController.prototype.init = function () {
        this.container = document.querySelector(".settings-default-size");
        var a = pskl.UserSettings.get(pskl.UserSettings.DEFAULT_SIZE);
        (this.widthInput = this.container.querySelector('[name="default-width"]')),
          (this.heightInput = this.container.querySelector('[name="default-height"]')),
          (this.widthInput.value = a.width),
          (this.heightInput.value = a.height),
          (this.defaultSizeForm = this.container.querySelector("form")),
          this.addEventListener(this.defaultSizeForm, "submit", this.onFormSubmit_);
      }),
      (a.DefaultSizeController.prototype.onFormSubmit_ = function (a) {
        a.preventDefault();
        var b = pskl.UserSettings.get(pskl.UserSettings.DEFAULT_SIZE),
          c = this.toNumber_(this.widthInput.value, b.width),
          d = this.toNumber_(this.heightInput.value, b.height);
        pskl.UserSettings.set(pskl.UserSettings.DEFAULT_SIZE, { width: c, height: d }), $.publish(Events.CLOSE_SETTINGS_DRAWER);
      }),
      (a.DefaultSizeController.prototype.toNumber_ = function (a, b) {
        var c = parseInt(a, 10);
        return (0 === c || isNaN(c)) && (c = b), c;
      });
  })(),
  (function () {
    var a = $.namespace("pskl.controller.settings"),
      b = { DESKTOP: "save-desktop-partial", GALLERY: "save-gallery-partial", GALLERY_UNAVAILABLE: "save-gallery-unavailable-partial", LOCALSTORAGE: "save-localstorage-partial", FILEDOWNLOAD: "save-file-download-partial" };
    (a.SaveController = function (a) {
      this.piskelController = a;
    }),
      pskl.utils.inherit(a.SaveController, pskl.controller.settings.AbstractSettingController),
      (a.SaveController.prototype.init = function () {
        (this.saveForm = document.querySelector(".save-form")),
          this.insertSavePartials_(),
          (this.piskelName = document.querySelector(".piskel-name")),
          (this.descriptionInput = document.querySelector("#save-description")),
          (this.nameInput = document.querySelector("#save-name")),
          (this.isPublicCheckbox = document.querySelector("input[name=save-public-checkbox]")),
          this.updateDescriptorInputs_(),
          (this.saveLocalStorageButton = document.querySelector("#save-localstorage-button")),
          (this.saveGalleryButton = document.querySelector("#save-gallery-button")),
          (this.saveDesktopButton = document.querySelector("#save-desktop-button")),
          (this.saveDesktopAsNewButton = document.querySelector("#save-desktop-as-new-button")),
          (this.saveFileDownloadButton = document.querySelector("#save-file-download-button")),
          this.safeAddEventListener_(this.saveLocalStorageButton, "click", this.saveToLocalStorage_),
          this.safeAddEventListener_(this.saveGalleryButton, "click", this.saveToGallery_),
          this.safeAddEventListener_(this.saveDesktopButton, "click", this.saveToDesktop_),
          this.safeAddEventListener_(this.saveDesktopAsNewButton, "click", this.saveToDesktopAsNew_),
          this.safeAddEventListener_(this.saveFileDownloadButton, "click", this.saveToFileDownload_),
          this.addEventListener(this.saveForm, "submit", this.onSaveFormSubmit_),
          pskl.app.storageService.isSaving() && this.disableSaveButtons_(),
          this.updateSaveToGalleryMessage_(),
          $.subscribe(Events.BEFORE_SAVING_PISKEL, this.disableSaveButtons_.bind(this)),
          $.subscribe(Events.AFTER_SAVING_PISKEL, this.enableSaveButtons_.bind(this));
      }),
      (a.SaveController.prototype.updateSaveToGalleryMessage_ = function (a) {
        var b = document.querySelector(".save-online-status");
        if (b && pskl.app.performanceReportService.hasProblem()) {
          var c = pskl.utils.Template.get("save-gallery-warning-partial");
          b.innerHTML = c;
        }
      }),
      (a.SaveController.prototype.insertSavePartials_ = function () {
        this.getPartials_().forEach(
          function (a) {
            this.saveForm.insertAdjacentHTML("beforeend", pskl.utils.Template.get(a));
          }.bind(this)
        );
      }),
      (a.SaveController.prototype.getPartials_ = function () {
        return pskl.utils.Environment.detectNodeWebkit() ? [b.DESKTOP, b.LOCALSTORAGE, b.GALLERY_UNAVAILABLE] : pskl.app.isLoggedIn() ? [b.GALLERY, b.LOCALSTORAGE, b.FILEDOWNLOAD] : [b.FILEDOWNLOAD, b.LOCALSTORAGE, b.GALLERY_UNAVAILABLE];
      }),
      (a.SaveController.prototype.updateDescriptorInputs_ = function (a) {
        var b = this.piskelController.getPiskel().getDescriptor();
        if (((this.descriptionInput.value = b.description), (this.nameInput.value = b.name), b.isPublic && this.isPublicCheckbox.setAttribute("checked", !0), !pskl.app.isLoggedIn())) {
          document.querySelector(".save-public-section").style.display = "none";
        }
      }),
      (a.SaveController.prototype.onSaveFormSubmit_ = function (a) {
        a.preventDefault(), a.stopPropagation(), pskl.app.isLoggedIn() ? this.saveToGallery_() : this.saveToLocalStorage_();
      }),
      (a.SaveController.prototype.saveToFileDownload_ = function () {
        this.saveTo_("saveToFileDownload", !1);
      }),
      (a.SaveController.prototype.saveToGallery_ = function () {
        this.saveTo_("saveToGallery", !1);
      }),
      (a.SaveController.prototype.saveToLocalStorage_ = function () {
        this.saveTo_("saveToLocalStorage", !1);
      }),
      (a.SaveController.prototype.saveToDesktop_ = function () {
        this.saveTo_("saveToDesktop", !1);
      }),
      (a.SaveController.prototype.saveToDesktopAsNew_ = function () {
        this.saveTo_("saveToDesktop", !0);
      }),
      (a.SaveController.prototype.saveTo_ = function (a, b) {
        var c = this.piskelController.getPiskel();
        c.setDescriptor(this.getDescriptor_()), pskl.app.storageService[a](c, !!b).then(this.onSaveSuccess_);
      }),
      (a.SaveController.prototype.getDescriptor_ = function () {
        var a = this.nameInput.value,
          b = this.descriptionInput.value;
        return new pskl.model.piskel.Descriptor(a, b, this.isPublic_());
      }),
      (a.SaveController.prototype.isPublic_ = function () {
        return !this.isPublicCheckbox || !!this.isPublicCheckbox.checked;
      }),
      (a.SaveController.prototype.onSaveSuccess_ = function () {
        $.publish(Events.CLOSE_SETTINGS_DRAWER);
      }),
      (a.SaveController.prototype.disableSaveButtons_ = function () {
        this.setDisabled_(this.saveLocalStorageButton, !0),
          this.setDisabled_(this.saveGalleryButton, !0),
          this.setDisabled_(this.saveDesktopButton, !0),
          this.setDisabled_(this.saveDesktopAsNewButton, !0),
          this.setDisabled_(this.saveFileDownloadButton, !0);
      }),
      (a.SaveController.prototype.enableSaveButtons_ = function () {
        this.setDisabled_(this.saveLocalStorageButton, !1),
          this.setDisabled_(this.saveGalleryButton, !1),
          this.setDisabled_(this.saveDesktopButton, !1),
          this.setDisabled_(this.saveDesktopAsNewButton, !1),
          this.setDisabled_(this.saveFileDownloadButton, !1);
      }),
      (a.SaveController.prototype.setDisabled_ = function (a, b) {
        a && (b ? a.setAttribute("disabled", "disabled") : a.removeAttribute("disabled"));
      }),
      (a.SaveController.prototype.safeAddEventListener_ = function (a, b, c) {
        a && this.addEventListener(a, b, c);
      });
  })(),
  (function () {
    var a = $.namespace("pskl.controller.settings");
    (a.ImportController = function (a) {
      this.piskelController = a;
    }),
      pskl.utils.inherit(a.ImportController, pskl.controller.settings.AbstractSettingController),
      (a.ImportController.prototype.init = function () {
        (this.hiddenFileInput = document.querySelector('[name="file-upload-input"]')),
          this.addEventListener(this.hiddenFileInput, "change", this.onFileUploadChange_),
          (this.hiddenOpenPiskelInput = document.querySelector('[name="open-piskel-input"]')),
          this.addEventListener(".browse-local-button", "click", this.onBrowseLocalClick_),
          this.addEventListener(".file-input-button", "click", this.onFileInputClick_),
          pskl.utils.Environment.detectNodeWebkit()
            ? this.addEventListener(".open-piskel-button", "click", this.openPiskelDesktop_)
            : (this.addEventListener(this.hiddenOpenPiskelInput, "change", this.onOpenPiskelChange_), this.addEventListener(".open-piskel-button", "click", this.onOpenPiskelClick_)),
          this.initRestoreSession_();
      }),
      (a.ImportController.prototype.initRestoreSession_ = function () {
        var a = document.querySelector(".previous-session"),
          b = pskl.app.backupService.getPreviousPiskelInfo();
        if (b) {
          var c = pskl.utils.Template.get("previous-session-info-template"),
            d = pskl.utils.DateUtils.format(b.date, "{{H}}:{{m}} - {{Y}}/{{M}}/{{D}}");
          (a.innerHTML = pskl.utils.Template.replace(c, { name: b.name, date: d })), this.addEventListener(".restore-session-button", "click", this.onRestorePreviousSessionClick_);
        } else a.innerHTML = "No piskel backup was found on this browser.";
      }),
      (a.ImportController.prototype.closeDrawer_ = function () {
        $.publish(Events.CLOSE_SETTINGS_DRAWER);
      }),
      (a.ImportController.prototype.onFileUploadChange_ = function (a) {
        this.importPictureFromFile_();
      }),
      (a.ImportController.prototype.onFileInputClick_ = function (a) {
        this.hiddenFileInput.click();
      }),
      (a.ImportController.prototype.onOpenPiskelChange_ = function (a) {
        var b = this.hiddenOpenPiskelInput.files;
        1 == b.length && this.openPiskelFile_(b[0]);
      }),
      (a.ImportController.prototype.openPiskelDesktop_ = function (a) {
        this.closeDrawer_(), pskl.app.desktopStorageService.openPiskel();
      }),
      (a.ImportController.prototype.onOpenPiskelClick_ = function (a) {
        this.hiddenOpenPiskelInput.click();
      }),
      (a.ImportController.prototype.onBrowseLocalClick_ = function (a) {
        $.publish(Events.DIALOG_SHOW, { dialogId: "browse-local" }), this.closeDrawer_();
      }),
      (a.ImportController.prototype.openPiskelFile_ = function (a) {
        this.isPiskel_(a) ? ($.publish(Events.DIALOG_SHOW, { dialogId: "import", initArgs: { rawFiles: [a] } }), this.closeDrawer_()) : (this.closeDrawer_(), console.error("The selected file is not a piskel file"));
      }),
      (a.ImportController.prototype.importPictureFromFile_ = function () {
        var a = this.hiddenFileInput.files;
        Array.prototype.every.call(a, function (a) {
          return 0 === a.type.indexOf("image");
        })
          ? ($.publish(Events.DIALOG_SHOW, { dialogId: "import", initArgs: { rawFiles: a } }), this.closeDrawer_())
          : (this.closeDrawer_(), console.error("Some files are not images"));
      }),
      (a.ImportController.prototype.isPiskel_ = function (a) {
        return /\.piskel$/.test(a.name);
      }),
      (a.ImportController.prototype.onRestorePreviousSessionClick_ = function () {
        window.confirm("This will erase your current workspace. Continue ?") && (pskl.app.backupService.load(), $.publish(Events.CLOSE_SETTINGS_DRAWER));
      });
  })(),
  (function () {
    var a = $.namespace("pskl.controller.settings"),
      b = {
        user: { template: "templates/settings/application.html", controller: a.ApplicationSettingsController },
        resize: { template: "templates/settings/resize.html", controller: a.resize.ResizeController },
        export: { template: "templates/settings/export.html", controller: a.exportimage.ExportController },
        import: { template: "templates/settings/import.html", controller: a.ImportController },
        localstorage: { template: "templates/settings/localstorage.html", controller: a.LocalStorageController },
        save: { template: "templates/settings/save.html", controller: a.SaveController },
      };
    (a.SettingsController = function (a) {
      (this.piskelController = a),
        (this.closeDrawerShortcut = pskl.service.keyboard.Shortcuts.MISC.CLOSE_POPUP),
        (this.settingsContainer = document.querySelector("[data-pskl-controller=settings]")),
        (this.drawerContainer = document.getElementById("drawer-container")),
        (this.isExpanded = !1),
        (this.currentSetting = null);
    }),
      (a.SettingsController.prototype.init = function () {
        pskl.utils.Event.addEventListener(this.settingsContainer, "click", this.onSettingsContainerClick_, this),
          pskl.utils.Event.addEventListener(document.body, "click", this.onBodyClick_, this),
          $.subscribe(Events.CLOSE_SETTINGS_DRAWER, this.closeDrawer_.bind(this));
      }),
      (a.SettingsController.prototype.onSettingsContainerClick_ = function (a) {
        var b = pskl.utils.Dom.getData(a.target, "setting");
        b && (this.currentSetting != b ? this.loadSetting_(b) : this.closeDrawer_(), a.stopPropagation(), a.preventDefault());
      }),
      (a.SettingsController.prototype.onBodyClick_ = function (a) {
        var b = a.target,
          c = pskl.utils.Dom.isParent(b, this.drawerContainer),
          d = b.dataset.setting,
          e = c || d;
        this.isExpanded && !e && this.closeDrawer_();
      }),
      (a.SettingsController.prototype.loadSetting_ = function (a) {
        (this.drawerContainer.innerHTML = pskl.utils.Template.get(b[a].template)),
          this.destroyCurrentController_(),
          (this.currentSetting = a),
          (this.currentController = new b[a].controller(this.piskelController)),
          this.currentController.init(),
          pskl.app.shortcutService.registerShortcut(this.closeDrawerShortcut, this.closeDrawer_.bind(this)),
          pskl.utils.Dom.removeClass("has-expanded-drawer");
        var c = document.querySelector("[data-setting=" + a + "]");
        c && c.classList.add("has-expanded-drawer"), this.settingsContainer.classList.add("expanded"), (this.isExpanded = !0);
      }),
      (a.SettingsController.prototype.closeDrawer_ = function () {
        pskl.utils.Dom.removeClass("has-expanded-drawer"), this.settingsContainer.classList.remove("expanded"), (this.isExpanded = !1), (this.currentSetting = null), document.activeElement.blur(), this.destroyCurrentController_();
      }),
      (a.SettingsController.prototype.destroyCurrentController_ = function () {
        this.currentController && (pskl.app.shortcutService.unregisterShortcut(this.closeDrawerShortcut), this.currentController.destroy && (this.currentController.destroy(), (this.currentController = null)));
      });
  })(),
  (function () {
    var a = $.namespace("pskl.controller.dialogs");
    (a.AbstractDialogController = function () {}),
      (a.AbstractDialogController.prototype.init = function () {
        var a = document.querySelector(".dialog-close");
        this.addEventListener(a, "click", this.closeDialog);
      }),
      (a.AbstractDialogController.prototype.addEventListener = function (a, b, c) {
        pskl.utils.Event.addEventListener(a, b, c, this);
      }),
      (a.AbstractDialogController.prototype.destroy = function () {
        pskl.utils.Event.removeAllEventListeners(this);
      }),
      (a.AbstractDialogController.prototype.closeDialog = function () {
        $.publish(Events.DIALOG_HIDE);
      }),
      (a.AbstractDialogController.prototype.setTitle = function (a) {
        var b = document.querySelector(".dialog-title");
        b && (b.innerText = a);
      });
  })(),
  (function () {
    var a = $.namespace("pskl.controller.dialogs");
    (a.CreatePaletteController = function (a) {
      (this.paletteService = pskl.app.paletteService), (this.paletteImportService = pskl.app.paletteImportService);
    }),
      pskl.utils.inherit(a.CreatePaletteController, a.AbstractDialogController),
      (a.CreatePaletteController.prototype.init = function (a) {
        this.superclass.init.call(this), (this.hiddenFileInput = document.querySelector(".create-palette-import-input")), (this.nameInput = document.querySelector('input[name="palette-name"]'));
        var b = document.querySelector(".create-palette-actions"),
          c = document.querySelector(".create-palette-delete"),
          d = document.querySelector(".create-palette-download-button"),
          e = document.querySelector(".create-palette-import-button");
        this.addEventListener(this.nameInput, "input", this.onNameInputChange_),
          this.addEventListener(this.hiddenFileInput, "change", this.onFileInputChange_),
          this.addEventListener(b, "click", this.onButtonClick_),
          this.addEventListener(d, "click", this.onDownloadButtonClick_),
          this.addEventListener(e, "click", this.onImportFileButtonClick_);
        var f = document.querySelector(".colors-container");
        this.colorsListWidget = new pskl.widgets.ColorsList(f);
        var g,
          h = a == Constants.CURRENT_COLORS_PALETTE_ID;
        if (a && !h) {
          (e.style.display = "none"), this.setTitle("Edit Palette");
          var i = this.paletteService.getPaletteById(a);
          g = pskl.model.Palette.fromObject(i);
        } else {
          (d.style.display = "none"), (c.style.display = "none"), this.setTitle("Create Palette");
          var j = pskl.utils.Uuid.generate();
          g = h ? new pskl.model.Palette(j, "Current colors clone", this.getCurrentColors_()) : new pskl.model.Palette(j, "New palette", []);
        }
        this.setPalette_(g);
      }),
      (a.CreatePaletteController.prototype.getCurrentColors_ = function () {
        return this.paletteService.getPaletteById(Constants.CURRENT_COLORS_PALETTE_ID).getColors();
      }),
      (a.CreatePaletteController.prototype.setPalette_ = function (a) {
        (this.palette = a), (this.nameInput.value = pskl.utils.unescapeHtml(a.name)), this.colorsListWidget.setColors(a.getColors());
      }),
      (a.CreatePaletteController.prototype.destroy = function () {
        this.colorsListWidget.destroy(), this.superclass.destroy.call(this), (this.nameInput = null), (this.hiddenFileInput = null);
      }),
      (a.CreatePaletteController.prototype.onButtonClick_ = function (a) {
        var b = a.target;
        "submit" === b.dataset.action ? this.saveAndSelectPalette_() : "cancel" === b.dataset.action ? this.closeDialog() : "delete" === b.dataset.action && this.deletePalette_();
      }),
      (a.CreatePaletteController.prototype.saveAndSelectPalette_ = function () {
        this.palette.setColors(this.colorsListWidget.getColors()), this.paletteService.savePalette(this.palette), pskl.UserSettings.set(pskl.UserSettings.SELECTED_PALETTE, this.palette.id), this.closeDialog();
      }),
      (a.CreatePaletteController.prototype.deletePalette_ = function () {
        window.confirm("Are you sure you want to delete palette " + this.palette.name) &&
          (this.paletteService.deletePaletteById(this.palette.id), pskl.UserSettings.set(pskl.UserSettings.SELECTED_PALETTE, Constants.CURRENT_COLORS_PALETTE_ID), this.closeDialog());
      }),
      (a.CreatePaletteController.prototype.onDownloadButtonClick_ = function () {
        var a = new pskl.service.palette.PaletteGplWriter(this.palette),
          b = a.write();
        pskl.utils.BlobUtils.stringToBlob(
          b,
          function (a) {
            pskl.utils.FileUtils.downloadAsFile(a, this.palette.name + ".gpl");
          }.bind(this),
          "application/json"
        );
      }),
      (a.CreatePaletteController.prototype.onImportFileButtonClick_ = function () {
        this.hiddenFileInput.click();
      }),
      (a.CreatePaletteController.prototype.onFileInputChange_ = function (a) {
        var b = this.hiddenFileInput.files;
        1 == b.length && this.paletteImportService.read(b[0], this.setPalette_.bind(this), this.displayErrorMessage_.bind(this));
      }),
      (a.CreatePaletteController.prototype.displayErrorMessage_ = function (a) {
        (a = "Could not import palette : " + a), $.publish(Events.SHOW_NOTIFICATION, [{ content: a }]), window.setTimeout($.publish.bind($, Events.HIDE_NOTIFICATION), 2e3);
      }),
      (a.CreatePaletteController.prototype.onNameInputChange_ = function (a) {
        this.palette.name = pskl.utils.escapeHtml(this.nameInput.value);
      });
  })(),
  (function () {
    var a = $.namespace("pskl.controller.dialogs");
    (a.BrowseLocalController = function (a) {}),
      pskl.utils.inherit(a.BrowseLocalController, a.AbstractDialogController),
      (a.BrowseLocalController.prototype.init = function () {
        this.superclass.init.call(this),
          (this.localStorageItemTemplate_ = pskl.utils.Template.get("local-storage-item-template")),
          (this.service_ = pskl.app.localStorageService),
          (this.piskelList = $(".local-piskel-list")),
          (this.prevSessionContainer = $(".previous-session")),
          this.fillLocalPiskelsList_(),
          this.piskelList.click(this.onPiskelsListClick_.bind(this));
      }),
      (a.BrowseLocalController.prototype.onPiskelsListClick_ = function (a) {
        var b = a.target.getAttribute("data-action"),
          c = a.target.getAttribute("data-name");
        "load" === b
          ? window.confirm("This will erase your current piskel. Continue ?") && (this.service_.load(c), this.closeDialog())
          : "delete" === b && window.confirm("This will permanently DELETE this piskel from your computer. Continue ?") && (this.service_.remove(c), this.fillLocalPiskelsList_());
      }),
      (a.BrowseLocalController.prototype.fillLocalPiskelsList_ = function () {
        var a = "",
          b = this.service_.getKeys();
        b.sort(function (a, b) {
          return a.date < b.date ? 1 : a.date > b.date ? -1 : 0;
        }),
          b.forEach(
            function (b) {
              var c = pskl.utils.DateUtils.format(b.date, "{{Y}}/{{M}}/{{D}} {{H}}:{{m}}");
              a += pskl.utils.Template.replace(this.localStorageItemTemplate_, { name: b.name, date: c });
            }.bind(this)
          ),
          (this.piskelList.get(0).tBodies[0].innerHTML = a);
      });
  })(),
  (function () {
    var a = $.namespace("pskl.controller.dialogs");
    (a.CheatsheetController = function () {}),
      pskl.utils.inherit(a.CheatsheetController, a.AbstractDialogController),
      (a.CheatsheetController.prototype.init = function () {
        this.superclass.init.call(this),
          (this.cheatsheetEl = document.getElementById("cheatsheetContainer")),
          (this.eventTrapInput = document.getElementById("cheatsheetEventTrap")),
          this.addEventListener(".cheatsheet-restore-defaults", "click", this.onRestoreDefaultsClick_),
          this.addEventListener(this.cheatsheetEl, "click", this.onCheatsheetClick_),
          this.addEventListener(this.eventTrapInput, "keydown", this.onEventTrapKeydown_),
          (this.onShortcutsChanged_ = this.onShortcutsChanged_.bind(this)),
          $.subscribe(Events.SHORTCUTS_CHANGED, this.onShortcutsChanged_),
          this.initMarkup_(),
          document.querySelector(".cheatsheet-helptext").setAttribute("title", this.getHelptextTitle_());
      }),
      (a.CheatsheetController.prototype.destroy = function () {
        this.eventTrapInput.blur(), $.unsubscribe(Events.SHORTCUTS_CHANGED, this.onShortcutsChanged_), (this.cheatsheetEl = null), this.superclass.destroy.call(this);
      }),
      (a.CheatsheetController.prototype.onRestoreDefaultsClick_ = function () {
        window.confirm("Replace all custom shortcuts by the default Piskel shortcuts ?") && pskl.app.shortcutService.restoreDefaultShortcuts();
      }),
      (a.CheatsheetController.prototype.onShortcutsChanged_ = function () {
        this.initMarkup_();
      }),
      (a.CheatsheetController.prototype.onCheatsheetClick_ = function (a) {
        var b = pskl.utils.Dom.getParentWithData(a.target, "shortcutId");
        if (!b) return void pskl.utils.Dom.removeClass("cheatsheet-shortcut-editing");
        var c = b.dataset.shortcutId,
          d = pskl.app.shortcutService.getShortcutById(c);
        b.classList.contains("cheatsheet-shortcut-editing")
          ? (pskl.utils.Dom.removeClass("cheatsheet-shortcut-editing"), this.eventTrapInput.blur())
          : d.isEditable() && (pskl.utils.Dom.removeClass("cheatsheet-shortcut-editing"), b.classList.add("cheatsheet-shortcut-editing"), this.eventTrapInput.focus());
      }),
      (a.CheatsheetController.prototype.onEventTrapKeydown_ = function (a) {
        var b = document.querySelector(".cheatsheet-shortcut-editing");
        if (b) {
          var c = pskl.service.keyboard.KeyUtils.createKeyFromEvent(a);
          if (c) {
            var d = pskl.service.keyboard.KeyUtils.stringify(c),
              e = b.dataset.shortcutId,
              f = pskl.app.shortcutService.getShortcutById(e);
            pskl.app.shortcutService.updateShortcut(f, d), b.classList.remove("cheatsheet-shortcut-editing"), this.eventTrapInput.blur(), a.preventDefault();
          }
        }
      }),
      (a.CheatsheetController.prototype.initMarkup_ = function () {
        this.initMarkupForCategory_("TOOL", ".cheatsheet-tool-shortcuts", this.getToolIconClass_),
          this.initMarkupForCategory_("MISC", ".cheatsheet-misc-shortcuts"),
          this.initMarkupForCategory_("COLOR", ".cheatsheet-color-shortcuts"),
          this.initMarkupForCategory_("SELECTION", ".cheatsheet-selection-shortcuts"),
          this.initMarkupForCategory_("STORAGE", ".cheatsheet-storage-shortcuts");
      }),
      (a.CheatsheetController.prototype.getToolIconClass_ = function (a) {
        return "tool-icon cheatsheet-icon-" + a.getId();
      }),
      (a.CheatsheetController.prototype.initMarkupForCategory_ = function (a, b, c) {
        var d = pskl.service.keyboard.Shortcuts[a],
          e = Object.keys(d).map(
            function (a) {
              return this.toDescriptor_(d[a], c);
            }.bind(this)
          );
        this.initMarkupForDescriptors_(e, b);
      }),
      (a.CheatsheetController.prototype.toDescriptor_ = function (a, b) {
        return { shortcut: a, iconClass: "function" == typeof b ? b(a) : "" };
      }),
      (a.CheatsheetController.prototype.initMarkupForDescriptors_ = function (a, b) {
        var c = document.querySelector(b);
        if (c) {
          var d = a.map(this.getMarkupForDescriptor_.bind(this));
          c.innerHTML = d.join("");
        }
      }),
      (a.CheatsheetController.prototype.getMarkupForDescriptor_ = function (a) {
        var b = pskl.utils.Template.get("cheatsheet-shortcut-template"),
          c = a.shortcut,
          d = c.isCustom() ? c.getDescription() + " *" : c.getDescription(),
          e = [];
        c.isUndefined() && e.push("cheatsheet-shortcut-undefined"), c.isEditable() && e.push("cheatsheet-shortcut-editable");
        var f = c.isEditable() ? "Click to edit the key" : "Shortcut cannot be remapped";
        return pskl.utils.Template.replace(b, { id: c.getId(), title: f, icon: a.iconClass, description: d, "!key!": this.formatKey_(c.getDisplayKey()), className: e.join(" ") });
      }),
      (a.CheatsheetController.prototype.formatKey_ = function (a) {
        return (
          pskl.utils.UserAgent.isMac && ((a = a.replace("ctrl", "cmd")), (a = a.replace("alt", "option"))),
          (a = a.replace(/left/i, "&larr;")),
          (a = a.replace(/up/i, "&uarr;")),
          (a = a.replace(/right/i, "&rarr;")),
          (a = a.replace(/down/i, "&darr;")),
          (a = a.replace(/>/g, "&gt;")),
          (a = a.replace(/</g, "&lt;")),
          (a = a.replace(/([^ ])\+([^ ])/g, "$1 + $2"))
        );
      }),
      (a.CheatsheetController.prototype.getHelptextTitle_ = function () {
        var a = [
            "Click on a shortcut to change the key.",
            "When the shortcut blinks, press the key on your keyboard to assign it.",
            "White shortcuts can not be edited.",
            "Click on 'Restore default shortcuts' to erase all custom shortcuts.",
          ],
          b = a.reduce(function (a, b) {
            return a + '<div class="cheatsheet-helptext-tooltip-item">' + b + "</div>";
          }, "");
        return (b = '<div class="cheatsheet-helptext-tooltip">' + b + "</div>");
      });
  })(),
  (function () {
    var a = $.namespace("pskl.controller.dialogs.importwizard.steps");
    (a.AbstractImportStep = function (a, b, c) {
      (this.piskelController = a), (this.container = c), (this.importController = b), (this.mergeData = this.importController.mergeData);
    }),
      (a.AbstractImportStep.prototype.init = function () {
        (this.nextButton = this.container.querySelector(".import-next-button")),
          (this.backButton = this.container.querySelector(".import-back-button")),
          this.addEventListener(this.nextButton, "click", this.onNextClick),
          this.addEventListener(this.backButton, "click", this.onBackClick);
      }),
      (a.AbstractImportStep.prototype.addEventListener = function (a, b, c) {
        pskl.utils.Event.addEventListener(a, b, c, this);
      }),
      (a.AbstractImportStep.prototype.destroy = function () {
        this.framePickerWidget && this.framePickerWidget.destroy(), pskl.utils.Event.removeAllEventListeners(this);
      }),
      (a.AbstractImportStep.prototype.onNextClick = function () {
        this.importController.next(this);
      }),
      (a.AbstractImportStep.prototype.onBackClick = function () {
        this.importController.back(this);
      }),
      (a.AbstractImportStep.prototype.onShow = function () {
        var a = this.mergeData.mergePiskel;
        if (a) {
          if (this.framePickerWidget) this.framePickerWidget.piskel != a && ((this.framePickerWidget.piskel = a), this.framePickerWidget.setFrameIndex(1));
          else {
            var b = this.container.querySelector(".import-preview");
            (this.framePickerWidget = new pskl.widgets.FramePicker(a, b)), this.framePickerWidget.init();
          }
          var c = pskl.utils.Template.getAndReplace("import-meta-content", {
            name: a.getDescriptor().name,
            dimensions: pskl.utils.StringUtils.formatSize(a.getWidth(), a.getHeight()),
            frames: a.getFrameCount(),
            layers: a.getLayers().length,
          });
          this.container.querySelector(".import-meta").innerHTML = c;
        }
      });
  })(),
  (function () {
    var a = $.namespace("pskl.controller.dialogs.importwizard.steps");
    (a.AdjustSize = function (a, b, c) {
      this.superclass.constructor.apply(this, arguments);
    }),
      (a.AdjustSize.OPTIONS = { KEEP: "keep", EXPAND: "expand" }),
      pskl.utils.inherit(a.AdjustSize, a.AbstractImportStep),
      (a.AdjustSize.prototype.init = function () {
        this.superclass.init.call(this);
        var b = this.container.querySelector(".import-resize-anchor-container");
        (this.anchorWidget = new pskl.widgets.AnchorWidget(b, this.onAnchorChange_.bind(this))),
          this.anchorWidget.setOrigin("TOPLEFT"),
          (this.resizeInfoContainer = this.container.querySelector(".import-resize-info")),
          this.addEventListener(this.resizeInfoContainer, "change", this.onResizeOptionChange_),
          (this.mergeData.resize = a.AdjustSize.OPTIONS.EXPAND);
      }),
      (a.AdjustSize.prototype.destroy = function () {
        this.anchorWidget.destroy(), this.superclass.destroy.call(this);
      }),
      (a.AdjustSize.prototype.onShow = function () {
        this.refresh_(), this.superclass.onShow.call(this);
      }),
      (a.AdjustSize.prototype.refresh_ = function () {
        var b,
          c = this.isImportedPiskelBigger_(),
          d = this.mergeData.resize === a.AdjustSize.OPTIONS.KEEP,
          e = this.formatPiskelSize_(this.piskelController.getPiskel()),
          f = this.formatPiskelSize_(this.mergeData.mergePiskel);
        (b = c
          ? pskl.utils.Template.getAndReplace("import-resize-bigger-partial", { size: e, newSize: f, keepChecked: d ? 'checked="checked"' : "", expandChecked: d ? "" : 'checked="checked"' })
          : pskl.utils.Template.getAndReplace("import-resize-smaller-partial", { size: e, newSize: f })),
          (this.resizeInfoContainer.innerHTML = b),
          this.mergeData.origin && this.anchorWidget.setOrigin(this.mergeData.origin);
        var g = this.container.querySelector(".import-resize-anchor-info");
        g.innerHTML =
          c && d
            ? ['<span class="import-resize-warning">', "Imported content will be cropped!", "</span>", " ", "Select crop origin"].join("")
            : c
            ? "Select the anchor for resizing the canvas"
            : "Select where the import should be positioned";
      }),
      (a.AdjustSize.prototype.onAnchorChange_ = function (a) {
        this.mergeData.origin = a;
      }),
      (a.AdjustSize.prototype.onResizeOptionChange_ = function () {
        var a = this.resizeInfoContainer.querySelector(":checked").value;
        this.mergeData.resize != a && ((this.mergeData.resize = a), this.refresh_());
      }),
      (a.AdjustSize.prototype.isImportedPiskelBigger_ = function () {
        var a = this.mergeData.mergePiskel;
        return !!a && (a.width > this.piskelController.getWidth() || a.height > this.piskelController.getHeight());
      }),
      (a.AdjustSize.prototype.formatPiskelSize_ = function (a) {
        return pskl.utils.StringUtils.formatSize(a.width, a.height);
      });
  })(),
  (function () {
    var a = $.namespace("pskl.controller.dialogs.importwizard.steps");
    (a.ImageImport = function (a, b, c) {
      this.superclass.constructor.apply(this, arguments), (this.importedImage_ = null), (this.file_ = null);
    }),
      pskl.utils.inherit(a.ImageImport, a.AbstractImportStep),
      (a.ImageImport.prototype.init = function (a) {
        this.superclass.init.call(this),
          (this.file_ = this.mergeData.rawFiles[0]),
          (this.importPreview = this.container.querySelector(".import-section-preview")),
          (this.fileNameContainer = this.container.querySelector(".import-image-file-name")),
          (this.singleImportType = this.container.querySelector("[name=import-type][value=single]")),
          (this.sheetImportType = this.container.querySelector("[name=import-type][value=sheet]")),
          (this.resizeWidth = this.container.querySelector("[name=resize-width]")),
          (this.resizeHeight = this.container.querySelector("[name=resize-height]")),
          (this.smoothResize = this.container.querySelector("[name=smooth-resize-checkbox]")),
          (this.frameSizeX = this.container.querySelector("[name=frame-size-x]")),
          (this.frameSizeY = this.container.querySelector("[name=frame-size-y]")),
          (this.frameOffsetX = this.container.querySelector("[name=frame-offset-x]")),
          (this.frameOffsetY = this.container.querySelector("[name=frame-offset-y]")),
          this.addEventListener(this.singleImportType, "change", this.onImportTypeChange_),
          this.addEventListener(this.sheetImportType, "change", this.onImportTypeChange_),
          this.addEventListener(this.resizeWidth, "keyup", this.onResizeInputKeyUp_),
          this.addEventListener(this.resizeHeight, "keyup", this.onResizeInputKeyUp_),
          this.addEventListener(this.frameSizeX, "keyup", this.onFrameInputKeyUp_),
          this.addEventListener(this.frameSizeY, "keyup", this.onFrameInputKeyUp_),
          this.addEventListener(this.frameOffsetX, "keyup", this.onFrameInputKeyUp_),
          this.addEventListener(this.frameOffsetY, "keyup", this.onFrameInputKeyUp_),
          pskl.utils.FileUtils.readImageFile(this.file_, this.onImageLoaded_.bind(this));
      }),
      (a.ImageImport.prototype.onNextClick = function () {
        this.container.classList.add("import-image-loading"),
          this.createPiskelFromImage()
            .then(
              function (a) {
                (this.mergeData.mergePiskel = a), this.superclass.onNextClick.call(this);
              }.bind(this)
            )
            .catch(function (a) {
              console.error(a);
            });
      }),
      (a.ImageImport.prototype.onShow = function () {
        this.container.classList.remove("import-image-loading");
      }),
      (a.ImageImport.prototype.createPiskelFromImage = function () {
        var a = this.extractFileNameFromPath_(this.file_.name);
        a = a.replace(/\.[a-zA-Z]+$/, "");
        var b = Q.defer();
        return (
          pskl.app.importService.newPiskelFromImage(
            this.importedImage_,
            {
              importType: this.getImportType_(),
              frameSizeX: "single" === this.getImportType_() ? this.resizeWidth.value : this.sanitizeInputValue_(this.frameSizeX, 1),
              frameSizeY: "single" === this.getImportType_() ? this.resizeHeight.value : this.sanitizeInputValue_(this.frameSizeY, 1),
              frameOffsetX: this.sanitizeInputValue_(this.frameOffsetX, 0),
              frameOffsetY: this.sanitizeInputValue_(this.frameOffsetY, 0),
              smoothing: !!this.smoothResize.checked,
              name: a,
            },
            b.resolve
          ),
          b.promise
        );
      }),
      (a.ImageImport.prototype.onImportTypeChange_ = function (a) {
        if ("single" === this.getImportType_()) this.hideFrameGrid_();
        else {
          var b = this.sanitizeInputValue_(this.frameOffsetX, 0),
            c = this.sanitizeInputValue_(this.frameOffsetY, 0),
            d = this.sanitizeInputValue_(this.frameSizeX, 1),
            e = this.sanitizeInputValue_(this.frameSizeY, 1);
          this.drawFrameGrid_(b, c, d, e);
        }
      }),
      (a.ImageImport.prototype.onResizeInputKeyUp_ = function (a) {
        var b = a.target.getAttribute("name");
        this.importedImage_ && this.synchronizeResizeFields_(a.target.value, b);
      }),
      (a.ImageImport.prototype.onFrameInputKeyUp_ = function (a) {
        this.importedImage_ && this.synchronizeFrameFields_(a.target.value);
      }),
      (a.ImageImport.prototype.synchronizeResizeFields_ = function (a, b) {
        (a = parseInt(a, 10)), isNaN(a) && (a = 0);
        var c = this.importedImage_.height,
          d = this.importedImage_.width;
        (this.singleImportType.checked = !0), "resize-width" === b ? (this.resizeHeight.value = Math.round((a * c) / d)) : (this.resizeWidth.value = Math.round((a * d) / c));
      }),
      (a.ImageImport.prototype.synchronizeFrameFields_ = function (a) {
        (a = parseInt(a, 10)), isNaN(a) && (a = 0);
        var b = this.sanitizeInputValue_(this.frameSizeX, 1),
          c = this.sanitizeInputValue_(this.frameSizeY, 1),
          d = this.sanitizeInputValue_(this.frameOffsetX, 0),
          e = this.sanitizeInputValue_(this.frameOffsetY, 0);
        (this.sheetImportType.checked = !0), this.drawFrameGrid_(d, e, b, c);
      }),
      (a.ImageImport.prototype.sanitizeInputValue_ = function (a, b) {
        var c = parseInt(a.value, 10);
        return (c <= b || isNaN(c)) && ((a.value = b), (c = b)), c;
      }),
      (a.ImageImport.prototype.getImportType_ = function () {
        if (this.singleImportType.checked) return this.singleImportType.value;
        if (this.sheetImportType.checked) return this.sheetImportType.value;
        throw "Could not find the currently selected import type";
      }),
      (a.ImageImport.prototype.onImageLoaded_ = function (a) {
        this.importedImage_ = a;
        var b = this.importedImage_.width,
          c = this.importedImage_.height;
        this.importedImage_.onload = function () {};
        var d = this.extractFileNameFromPath_(this.file_.name);
        (this.fileNameContainer.textContent = d),
          this.fileNameContainer.setAttribute("title", d),
          (this.resizeWidth.value = b),
          (this.resizeHeight.value = c),
          (this.frameSizeX.value = b),
          (this.frameSizeY.value = c),
          (this.frameOffsetX.value = 0),
          (this.frameOffsetY.value = 0),
          (this.importPreview.innerHTML = ""),
          this.importPreview.appendChild(this.createImagePreview_());
      }),
      (a.ImageImport.prototype.createImagePreview_ = function () {
        var a = document.createElement("IMG");
        return (a.src = this.importedImage_.src), a;
      }),
      (a.ImageImport.prototype.extractFileNameFromPath_ = function (a) {
        var b = [];
        return (b = -1 !== a.indexOf("/") ? a.split("/") : -1 !== a.indexOf("\\") ? a.split("\\") : [a]), b[b.length - 1];
      }),
      (a.ImageImport.prototype.drawFrameGrid_ = function (a, b, c, d) {
        if (this.importedImage_) {
          var e = this.importedImage_.width,
            f = this.importedImage_.height,
            g = this.importPreview.querySelector("img"),
            h = g.offsetWidth,
            i = g.offsetHeight,
            j = this.importPreview.querySelector("canvas");
          j || ((j = pskl.utils.CanvasUtils.createCanvas(h + 1, i + 1)), this.importPreview.appendChild(j));
          var k = j.getContext("2d");
          k.clearRect(0, 0, j.width, j.height), k.beginPath();
          var l = Math.floor((e - a) / c),
            m = Math.floor((f - b) / d);
          if (l > 0 && m > 0) {
            for (var n = h / e, o = i / f, p = l * c + a, q = m * d + b, r = a + 0.5; r < p + 1 && r < e + 1; r += c) k.moveTo(r * n, b * o), k.lineTo(r * n, q * o);
            for (var s = b + 0.5; s < q + 1 && s < f + 1; s += d) k.moveTo(a * n, s * o), k.lineTo(p * n, s * o);
            (k.lineWidth = 1), (k.strokeStyle = "gold"), k.stroke(), (j.style.display = "block");
          } else this.hideFrameGrid_();
        }
      }),
      (a.ImageImport.prototype.hideFrameGrid_ = function () {
        var a = this.importPreview.querySelector("canvas");
        a && (a.style.display = "none");
      });
  })(),
  (function () {
    var a = $.namespace("pskl.controller.dialogs.importwizard.steps");
    (a.InsertLocation = function () {
      this.superclass.constructor.apply(this, arguments);
    }),
      (a.InsertLocation.MODES = { ADD: "add", INSERT: "insert" }),
      pskl.utils.inherit(a.InsertLocation, a.AbstractImportStep),
      (a.InsertLocation.prototype.init = function () {
        this.superclass.init.call(this),
          (this.framePreview = this.container.querySelector(".insert-frame-preview")),
          (this.currentPiskelFramePickerWidget = new pskl.widgets.FramePicker(this.piskelController.getPiskel(), this.framePreview)),
          (this.insertModeContainer = this.container.querySelector(".insert-mode-container")),
          this.addEventListener(this.insertModeContainer, "change", this.onInsertModeChange_),
          (this.mergeData.insertMode = a.InsertLocation.MODES.ADD);
      }),
      (a.InsertLocation.prototype.onInsertModeChange_ = function () {
        var b = this.insertModeContainer.querySelector(":checked").value;
        (this.mergeData.insertMode = b), this.mergeData.insertMode === a.InsertLocation.MODES.ADD ? this.currentPiskelFramePickerWidget.setFirstFrameIndex(0) : this.currentPiskelFramePickerWidget.setFirstFrameIndex(1);
      }),
      (a.InsertLocation.prototype.onShow = function () {
        this.currentPiskelFramePickerWidget.init();
        var a = this.piskelController.getCurrentFrameIndex();
        this.currentPiskelFramePickerWidget.setFrameIndex(a + 1), this.currentPiskelFramePickerWidget.setFirstFrameIndex(0), this.superclass.onShow.call(this);
      }),
      (a.InsertLocation.prototype.onNextClick = function () {
        var a = this.currentPiskelFramePickerWidget.getFrameIndex();
        (this.mergeData.insertIndex = a), this.superclass.onNextClick.call(this);
      }),
      (a.InsertLocation.prototype.destroy = function () {
        this.currentPiskelFramePickerWidget.destroy(), this.superclass.destroy.call(this);
      });
  })(),
  (function () {
    var a = $.namespace("pskl.controller.dialogs.importwizard.steps");
    (a.SelectMode = function (a, b, c) {
      this.superclass.constructor.apply(this, arguments);
    }),
      (a.SelectMode.MODES = { REPLACE: "replace", MERGE: "merge" }),
      pskl.utils.inherit(a.SelectMode, a.AbstractImportStep),
      (a.SelectMode.prototype.init = function () {
        this.superclass.init.call(this);
        var a = this.container.querySelector(".import-mode-replace-button"),
          b = this.container.querySelector(".import-mode-merge-button");
        this.addEventListener(a, "click", this.onReplaceButtonClick_), this.addEventListener(b, "click", this.onMergeButtonClick_);
      }),
      (a.SelectMode.prototype.onShow = function () {
        this.superclass.onShow.call(this);
      }),
      (a.SelectMode.prototype.destroy = function () {
        this.superclass.destroy.call(this);
      }),
      (a.SelectMode.prototype.onReplaceButtonClick_ = function () {
        (this.mergeData.importMode = a.SelectMode.MODES.REPLACE), this.onNextClick();
      }),
      (a.SelectMode.prototype.onMergeButtonClick_ = function () {
        (this.mergeData.importMode = a.SelectMode.MODES.MERGE), this.onNextClick();
      });
  })(),
  (function () {
    var a = $.namespace("pskl.controller.dialogs.importwizard"),
      b = {
        IMAGE_IMPORT: { controller: a.steps.ImageImport, template: "import-image-import" },
        ADJUST_SIZE: { controller: a.steps.AdjustSize, template: "import-adjust-size" },
        INSERT_LOCATION: { controller: a.steps.InsertLocation, template: "import-insert-location" },
        SELECT_MODE: { controller: a.steps.SelectMode, template: "import-select-mode" },
      };
    (a.ImportWizard = function (a, b) {
      (this.piskelController = a), (this.mergeData = { rawFiles: [], mergePiskel: null, origin: null, resize: null, insertIndex: null, insertMode: null });
    }),
      pskl.utils.inherit(a.ImportWizard, pskl.controller.dialogs.AbstractDialogController),
      (a.ImportWizard.prototype.init = function (a) {
        this.superclass.init.call(this), (this.mergeData.rawFiles = a.rawFiles), (this.steps = this.createSteps_());
        var b = document.querySelector(".import-wizard-container");
        (this.wizard = new pskl.widgets.Wizard(this.steps, b)),
          this.wizard.init(),
          this.hasSingleImage_()
            ? this.wizard.goTo("IMAGE_IMPORT")
            : this.hasSinglePiskelFile_()
            ? pskl.utils.PiskelFileUtils.loadFromFile(
                this.mergeData.rawFiles[0],
                function (a) {
                  (this.mergeData.mergePiskel = a), this.wizard.goTo("SELECT_MODE");
                }.bind(this),
                function (a) {
                  this.closeDialog(), $.publish(Events.PISKEL_FILE_IMPORT_FAILED, [a]);
                }.bind(this)
              )
            : (console.error("Unsupported import. Only single piskel or single image are supported at the moment."), this.closeDialog());
      }),
      (a.ImportWizard.prototype.back = function () {
        this.wizard.back(), this.wizard.getCurrentStep().instance.onShow();
      }),
      (a.ImportWizard.prototype.next = function () {
        var b = this.wizard.getCurrentStep();
        "IMAGE_IMPORT" === b.name
          ? this.wizard.goTo("SELECT_MODE")
          : "SELECT_MODE" === b.name
          ? this.mergeData.importMode === a.steps.SelectMode.MODES.REPLACE
            ? this.finalizeImport_()
            : this.hasSameSize_()
            ? this.wizard.goTo("INSERT_LOCATION")
            : this.wizard.goTo("ADJUST_SIZE")
          : "ADJUST_SIZE" === b.name
          ? this.wizard.goTo("INSERT_LOCATION")
          : "INSERT_LOCATION" === b.name && this.finalizeImport_();
      }),
      (a.ImportWizard.prototype.destroy = function (a) {
        Object.keys(this.steps).forEach(
          function (a) {
            var b = this.steps[a];
            b.instance.destroy(), (b.instance = null), (b.el = null);
          }.bind(this)
        ),
          this.superclass.destroy.call(this);
      }),
      (a.ImportWizard.prototype.createSteps_ = function () {
        var a = this.hasSingleImage_(),
          c = {};
        return (
          Object.keys(b).forEach(
            function (d) {
              if ("IMAGE_IMPORT" !== d || a) {
                var e = b[d],
                  f = pskl.utils.Template.getAsHTML(e.template),
                  g = new e.controller(this.piskelController, this, f);
                g.init(), (c[d] = { name: d, el: f, instance: g });
              }
            }.bind(this)
          ),
          a ? c.IMAGE_IMPORT.el.classList.add("import-first-step") : c.SELECT_MODE.el.classList.add("import-first-step"),
          c
        );
      }),
      (a.ImportWizard.prototype.finalizeImport_ = function () {
        var b = this.mergeData.mergePiskel,
          c = this.mergeData.importMode;
        if (c === a.steps.SelectMode.MODES.REPLACE) {
          window.confirm("This will replace your current animation, are you sure you want to continue?") && (this.piskelController.setPiskel(b), this.closeDialog());
        } else if (c === a.steps.SelectMode.MODES.MERGE) {
          var d = pskl.utils.MergeUtils.merge(this.piskelController.getPiskel(), b, { insertIndex: this.mergeData.insertIndex, insertMode: this.mergeData.insertMode, origin: this.mergeData.origin, resize: this.mergeData.resize });
          this.piskelController.setPiskel(d);
          var e = b.getLayers().length,
            f = this.piskelController.getLayers().length;
          this.piskelController.setCurrentLayerIndex(f - e), this.closeDialog();
        }
      }),
      (a.ImportWizard.prototype.hasSameSize_ = function () {
        var a = this.mergeData.mergePiskel;
        return !!a && a.width === this.piskelController.getWidth() && a.height === this.piskelController.getHeight();
      }),
      (a.ImportWizard.prototype.hasSingleImage_ = function () {
        return 1 === this.mergeData.rawFiles.length && 0 === this.mergeData.rawFiles[0].type.indexOf("image");
      }),
      (a.ImportWizard.prototype.hasSinglePiskelFile_ = function () {
        return 1 === this.mergeData.rawFiles.length && /\.piskel$/.test(this.mergeData.rawFiles[0].name);
      });
  })(),
  (function () {
    var a = $.namespace("pskl.controller.dialogs");
    (a.PerformanceInfoController = function () {}),
      pskl.utils.inherit(a.PerformanceInfoController, a.AbstractDialogController),
      (a.PerformanceInfoController.prototype.init = function () {
        this.superclass.init.call(this);
      });
  })(),
  (function () {
    var a = $.namespace("pskl.controller.dialogs");
    (a.UnsupportedBrowserController = function () {}),
      pskl.utils.inherit(a.UnsupportedBrowserController, a.AbstractDialogController),
      (a.UnsupportedBrowserController.prototype.init = function () {
        this.superclass.init.call(this), (document.querySelector("#current-user-agent").innerText = pskl.utils.UserAgent.getDisplayName());
      });
  })(),
  (function () {
    var a = $.namespace("pskl.controller.dialogs"),
      b = {
        cheatsheet: { template: "templates/dialogs/cheatsheet.html", controller: a.CheatsheetController },
        "create-palette": { template: "templates/dialogs/create-palette.html", controller: a.CreatePaletteController },
        "browse-local": { template: "templates/dialogs/browse-local.html", controller: a.BrowseLocalController },
        import: { template: "templates/dialogs/import.html", controller: a.importwizard.ImportWizard },
        "performance-info": { template: "templates/dialogs/performance-info.html", controller: a.PerformanceInfoController },
        "unsupported-browser": { template: "templates/dialogs/unsupported-browser.html", controller: a.UnsupportedBrowserController },
      };
    (a.DialogsController = function (a) {
      (this.piskelController = a), (this.closePopupShortcut = pskl.service.keyboard.Shortcuts.MISC.CLOSE_POPUP), (this.currentDialog_ = null);
    }),
      (a.DialogsController.prototype.init = function () {
        (this.dialogContainer_ = document.getElementById("dialog-container")),
          (this.dialogWrapper_ = document.getElementById("dialog-container-wrapper")),
          $.subscribe(Events.DIALOG_SHOW, this.onDialogDisplayEvent_.bind(this)),
          $.subscribe(Events.DIALOG_HIDE, this.hideDialog.bind(this));
        var a = pskl.service.keyboard.Shortcuts.COLOR.CREATE_PALETTE;
        pskl.app.shortcutService.registerShortcut(a, this.onCreatePaletteShortcut_.bind(this));
        var b = pskl.service.keyboard.Shortcuts.MISC.CHEATSHEET;
        pskl.app.shortcutService.registerShortcut(b, this.onCheatsheetShortcut_.bind(this)),
          pskl.utils.Event.addEventListener(".cheatsheet-link", "click", this.onCheatsheetShortcut_, this),
          this.dialogWrapper_.classList.add("animated"),
          pskl.utils.Event.addEventListener(this.dialogWrapper_, "click", this.onWrapperClicked_, this);
      }),
      (a.DialogsController.prototype.onCreatePaletteShortcut_ = function () {
        this.toggleDialog_("create-palette");
      }),
      (a.DialogsController.prototype.onCheatsheetShortcut_ = function () {
        this.toggleDialog_("cheatsheet");
      }),
      (a.DialogsController.prototype.toggleDialog_ = function (a) {
        this.isDisplayingDialog_() ? this.getCurrentDialogId_() === a && this.hideDialog() : this.showDialog(a);
      }),
      (a.DialogsController.prototype.onDialogDisplayEvent_ = function (a, b) {
        this.showDialog(b.dialogId, b.initArgs);
      }),
      (a.DialogsController.prototype.onWrapperClicked_ = function (a) {
        a.target === this.dialogWrapper_ && this.hideDialog();
      }),
      (a.DialogsController.prototype.showDialog = function (a, c) {
        if (!this.isDisplayingDialog_()) {
          var d = b[a];
          if (!d) return void console.error("Could not find dialog configuration for dialogId : " + a);
          this.dialogContainer_.classList.add(a), (this.dialogContainer_.innerHTML = pskl.utils.Template.get(d.template));
          var e = new d.controller(this.piskelController);
          e.init(c), (this.currentDialog_ = { id: a, controller: e }), pskl.app.shortcutService.registerShortcut(this.closePopupShortcut, this.hideDialog.bind(this)), this.dialogWrapper_.classList.add("show");
        }
      }),
      (a.DialogsController.prototype.hideDialog = function () {
        !this.isHiding_ &&
          this.isDisplayingDialog_() &&
          (pskl.app.shortcutService.unregisterShortcut(this.closePopupShortcut), this.dialogWrapper_.classList.remove("show"), window.setTimeout(this.cleanupDialogContainer_.bind(this), 500), (this.isHiding_ = !0));
      }),
      (a.DialogsController.prototype.cleanupDialogContainer_ = function () {
        this.dialogContainer_.classList.remove(this.currentDialog_.id), this.currentDialog_.controller.destroy(), (this.currentDialog_ = null), (this.dialogContainer_.innerHTML = ""), (this.isHiding_ = !1);
      }),
      (a.DialogsController.prototype.isDisplayingDialog_ = function () {
        return null !== this.currentDialog_;
      }),
      (a.DialogsController.prototype.getCurrentDialogId_ = function () {
        return this.currentDialog_ ? this.currentDialog_.id : null;
      });
  })(),
  (function () {
    var a = $.namespace("pskl.widgets");
    (a.AnchorWidget = function (a, b) {
      (this.onChangeCallback = b),
        (this.wrapper = document.createElement("div")),
        this.wrapper.classList.add("anchor-wrapper"),
        (this.wrapper.innerHTML =
          '<div class="anchor-option"  title="top left"      data-origin="TOPLEFT"></div><div class="anchor-option"  title="top"           data-origin="TOP"></div><div class="anchor-option"  title="top right"     data-origin="TOPRIGHT"></div><div class="anchor-option"  title="middle left"   data-origin="MIDDLELEFT"></div><div class="anchor-option"  title="middle"        data-origin="MIDDLE"></div><div class="anchor-option"  title="middle right"  data-origin="MIDDLERIGHT"></div><div class="anchor-option"  title="bottom left"   data-origin="BOTTOMLEFT"></div><div class="anchor-option"  title="bottom"        data-origin="BOTTOM"></div><div class="anchor-option"  title="bottom right"  data-origin="BOTTOMRIGHT"></div>'),
        (a.innerHTML = ""),
        a.appendChild(this.wrapper),
        (this.disabled = !1),
        pskl.utils.Event.addEventListener(this.wrapper, "click", this.onResizeOriginClick_, this);
    }),
      (a.AnchorWidget.ORIGIN = { TOPLEFT: "TOPLEFT", TOP: "TOP", TOPRIGHT: "TOPRIGHT", MIDDLELEFT: "MIDDLELEFT", MIDDLE: "MIDDLE", MIDDLERIGHT: "MIDDLERIGHT", BOTTOMLEFT: "BOTTOMLEFT", BOTTOM: "BOTTOM", BOTTOMRIGHT: "BOTTOMRIGHT" }),
      (a.AnchorWidget.prototype.destroy = function (a) {
        pskl.utils.Event.removeAllEventListeners(this), (this.wrapper = null);
      }),
      (a.AnchorWidget.prototype.onResizeOriginClick_ = function (b) {
        var c = b.target.dataset.origin;
        c && a.AnchorWidget.ORIGIN[c] && !this.disabled && this.setOrigin(c);
      }),
      (a.AnchorWidget.prototype.setOrigin = function (a) {
        this.origin = a;
        var b = this.wrapper.querySelector(".anchor-option.selected");
        b && b.classList.remove("selected");
        var c = this.wrapper.querySelector('.anchor-option[data-origin="' + a + '"]');
        c && (c.classList.add("selected"), this.refreshNeighbors_(c)), "function" == typeof this.onChangeCallback && this.onChangeCallback(a);
      }),
      (a.AnchorWidget.prototype.getOrigin = function () {
        return this.origin;
      }),
      (a.AnchorWidget.prototype.disable = function () {
        (this.disabled = !0), this.wrapper.classList.add("transition"), this.wrapper.classList.add("disabled");
      }),
      (a.AnchorWidget.prototype.enable = function () {
        (this.disabled = !1), this.wrapper.classList.remove("disabled"), window.setTimeout(this.wrapper.classList.remove.bind(this.wrapper.classList, "transition"), 250);
      }),
      (a.AnchorWidget.prototype.refreshNeighbors_ = function (a) {
        for (var b = this.wrapper.querySelectorAll(".anchor-option"), c = 0; c < b.length; c++) b[c].removeAttribute("data-neighbor");
        var d = Array.prototype.indexOf.call(b, a);
        this.setNeighborhood_(b[d - 1], "left"), this.setNeighborhood_(b[d + 1], "right"), this.setNeighborhood_(b[d - 3], "top"), this.setNeighborhood_(b[d + 3], "bottom");
      }),
      (a.AnchorWidget.prototype.setNeighborhood_ = function (a, b) {
        -1 === this.origin.toLowerCase().indexOf(b) && a.setAttribute("data-neighbor", b);
      });
  })(),
  (function () {
    var a = $.namespace("pskl.widgets");
    (a.ColorsList = function (a) {
      (this.selectedIndex = -1),
        (this.palette = new pskl.model.Palette("tmp", "tmp", [])),
        (this.container = a),
        (this.colorsList = this.container.querySelector(".colors-list")),
        (this.colorPreviewEl = this.container.querySelector(".color-preview")),
        $(a).sortable({ placeholder: "colors-list-drop-proxy", update: this.onColorDrop_.bind(this), items: ".create-palette-color" }),
        pskl.utils.Event.addEventListener(this.colorsList, "click", this.onColorContainerClick_, this);
      var b = a.querySelector(".color-picker-container");
      (this.hslRgbColorPicker = new pskl.widgets.HslRgbColorPicker(b, this.onColorUpdated_.bind(this))), this.hslRgbColorPicker.init();
    }),
      (a.ColorsList.prototype.setColors = function (a) {
        0 === a.length && a.push("#000000"), this.palette.setColors(a), this.selectColor_(0), this.refresh_();
      }),
      (a.ColorsList.prototype.getColors = function () {
        return this.palette.getColors();
      }),
      (a.ColorsList.prototype.destroy = function () {
        pskl.utils.Event.removeAllEventListeners(this), $(this.container).sortable("destroy"), this.hslRgbColorPicker.destroy(), (this.container = null), (this.colorsList = null), (this.colorPreviewEl = null);
      }),
      (a.ColorsList.prototype.refreshColorElement_ = function (a) {
        var b = this.palette.get(this.selectedIndex),
          c = document.querySelector('[data-palette-index="' + a + '"]');
        c && ((c.style.background = b), c.classList.toggle("light-color", this.isLight_(b)));
      }),
      (a.ColorsList.prototype.onColorContainerClick_ = function (a) {
        var b = a.target;
        b.classList.contains("create-palette-color")
          ? this.onPaletteColorClick_(a, b)
          : b.classList.contains("create-palette-new-color")
          ? this.onNewColorClick_(a, b)
          : b.classList.contains("create-palette-remove-color") && this.onRemoveColorClick_(a, b),
          this.refresh_();
      }),
      (a.ColorsList.prototype.onColorUpdated_ = function (a) {
        var b = a.toHexString();
        (this.colorPreviewEl.style.background = b), this.palette && (this.palette.set(this.selectedIndex, b), this.refreshColorElement_(this.selectedIndex));
      }),
      (a.ColorsList.prototype.onPaletteColorClick_ = function (a, b) {
        var c = parseInt(b.dataset.paletteIndex, 10);
        this.selectColor_(c);
      }),
      (a.ColorsList.prototype.onRemoveColorClick_ = function (a, b) {
        var c = b.parentNode,
          d = parseInt(c.dataset.paletteIndex, 10);
        this.removeColor_(d);
      }),
      (a.ColorsList.prototype.onNewColorClick_ = function (a, b) {
        var c = this.palette.get(this.selectedIndex) || "#000000";
        this.palette.add(c), this.selectColor_(this.palette.size() - 1);
      }),
      (a.ColorsList.prototype.refresh_ = function () {
        var a = "",
          b = pskl.utils.Template.get("create-palette-color-template");
        this.palette.getColors().forEach(
          function (c, d) {
            var e = d === this.selectedIndex;
            a += pskl.utils.Template.replace(b, { color: c, index: d, ":selected": e, ":light-color": this.isLight_(c) });
          }.bind(this)
        ),
          (a += '<li class="create-palette-new-color">+</li>'),
          (this.colorsList.innerHTML = a);
      }),
      (a.ColorsList.prototype.selectColor_ = function (a) {
        (this.selectedIndex = a), this.hslRgbColorPicker.setColor(this.palette.get(a));
      }),
      (a.ColorsList.prototype.removeColor_ = function (a) {
        this.palette.removeAt(a), this.refresh_();
      }),
      (a.ColorsList.prototype.isLight_ = function (a) {
        var b = window.tinycolor(a).toRgb();
        return b.r + b.b + b.g > 384;
      }),
      (a.ColorsList.prototype.onColorDrop_ = function (a, b) {
        var c = b.item.get(0),
          d = parseInt(c.dataset.paletteIndex, 10),
          e = $(".create-palette-color").index(b.item);
        this.palette.move(d, e), (this.selectedIndex = e), this.refresh_();
      });
  })(),
  (function () {
    var a = $.namespace("pskl.widgets");
    (a.FramePicker = function (a, b) {
      (this.piskel = a),
        (this.container = b),
        (this.firstFrameIndex = 1),
        (this.wrapper = document.createElement("div")),
        (this.wrapper.innerHTML =
          '<div class="frame-viewer"></div><div class="frame-nav"><button class="button frame-nav-first">&lt;&lt;</button><button class="button frame-nav-previous">&lt;</button><input class="textfield frame-nav-input" type="text"><button class="button frame-nav-next">&gt;</button><button class="button frame-nav-last">&gt;&gt;</button></div>'),
        this.wrapper.classList.add("frame-picker-wrapper"),
        (this.frameViewer = this.wrapper.querySelector(".frame-viewer")),
        (this.firstButton = this.wrapper.querySelector(".frame-nav-first")),
        (this.previousButton = this.wrapper.querySelector(".frame-nav-previous")),
        (this.nextButton = this.wrapper.querySelector(".frame-nav-next")),
        (this.lastButton = this.wrapper.querySelector(".frame-nav-last")),
        (this.input = this.wrapper.querySelector(".frame-nav-input"));
    }),
      (a.FramePicker.prototype.init = function () {
        this.container.appendChild(this.wrapper),
          this.addEventListener(this.firstButton, "click", this.onFirstClicked_),
          this.addEventListener(this.previousButton, "click", this.onPreviousClicked_),
          this.addEventListener(this.nextButton, "click", this.onNextClicked_),
          this.addEventListener(this.lastButton, "click", this.onLastClicked_),
          this.addEventListener(this.input, "change", this.onInputChange_),
          this.setFrameIndex(1);
      }),
      (a.FramePicker.prototype.setFirstFrameIndex = function (a) {
        (this.firstFrameIndex = a), this.setFrameIndex(this.currentFrameIndex);
      }),
      (a.FramePicker.prototype.destroy = function () {
        this.wrapper.parentNode && this.wrapper.parentNode.removeChild(this.wrapper), pskl.utils.Event.removeAllEventListeners(this);
      }),
      (a.FramePicker.prototype.onFirstClicked_ = function () {
        this.setFrameIndex(this.firstFrameIndex);
      }),
      (a.FramePicker.prototype.onPreviousClicked_ = function () {
        this.setFrameIndex(this.currentFrameIndex - 1);
      }),
      (a.FramePicker.prototype.onNextClicked_ = function () {
        this.setFrameIndex(this.currentFrameIndex + 1);
      }),
      (a.FramePicker.prototype.onLastClicked_ = function () {
        this.setFrameIndex(this.piskel.getFrameCount());
      }),
      (a.FramePicker.prototype.onInputChange_ = function () {
        var a = parseInt(this.input.value, 10);
        if (isNaN(a)) return void (this.input.value = 1);
        (a = Math.max(this.firstFrameIndex, a)), (a = Math.min(this.getFrameCount_(), a)) !== this.currentFrameIndex && this.setFrameIndex(a);
      }),
      (a.FramePicker.prototype.getFrameCount_ = function () {
        return this.piskel.getLayerAt(0).getFrames().length;
      }),
      (a.FramePicker.prototype.addEventListener = function (a, b, c) {
        pskl.utils.Event.addEventListener(a, b, c, this);
      }),
      (a.FramePicker.prototype.getFrameIndex = function () {
        return this.currentFrameIndex;
      }),
      (a.FramePicker.prototype.setFrameIndex = function (a) {
        (a = Math.max(this.firstFrameIndex, a)), (a = Math.min(this.getFrameCount_(), a)), (this.currentFrameIndex = a), (this.input.value = a);
        var b = this.getFrameAsImage_(a);
        b.classList.add("canvas-background"), (this.frameViewer.innerHTML = ""), this.frameViewer.appendChild(b);
        var c = this.getFrameCount_();
        this.setEnabled_(this.firstButton, a !== this.firstFrameIndex),
          this.setEnabled_(this.previousButton, a !== this.firstFrameIndex),
          this.setEnabled_(this.nextButton, a !== c),
          this.setEnabled_(this.lastButton, a !== c),
          0 === a && (this.previousButton.setAttribute("disabled", !0), this.firstButton.setAttribute("disabled", !0));
      }),
      (a.FramePicker.prototype.getFrameAsImage_ = function (a) {
        if (0 === a) return new Image();
        var b = pskl.utils.LayerUtils.mergeFrameAt(this.piskel.getLayers(), a - 1),
          c = this.getZoomLevel_();
        return pskl.utils.FrameUtils.toImage(b, c);
      }),
      (a.FramePicker.prototype.getZoomLevel_ = function () {
        var a = this.frameViewer.offsetWidth,
          b = this.frameViewer.offsetHeight,
          c = a / this.piskel.width,
          d = b / this.piskel.height;
        return Math.min(d, c);
      }),
      (a.FramePicker.prototype.setEnabled_ = function (a, b) {
        b ? a.removeAttribute("disabled") : a.setAttribute("disabled", !0);
      });
  })(),
  (function () {
    var a = $.namespace("pskl.widgets");
    (a.HslRgbColorPicker = function (a, b) {
      (this.container = a), (this.colorUpdatedCallback = b), (this.tinyColor = null), (this.hsvColor = null), (this.rgbColor = null), (this.lastInputTimestamp_ = 0);
    }),
      (a.HslRgbColorPicker.prototype.init = function () {
        var a = pskl.utils.UserAgent.isFirefox,
          b = pskl.utils.UserAgent.isChrome,
          c = b || a ? "input" : "change";
        pskl.utils.Event.addEventListener(this.container, c, this.onPickerChange_, this),
          pskl.utils.Event.addEventListener(this.container, "keydown", this.onPickerChange_, this),
          (this.onBlur_ = this.onBlur_.bind(this)),
          this.container.addEventListener("blur", this.onBlur_, !0),
          (this.spectrumEl = this.container.querySelector(".color-picker-spectrum")),
          $(this.spectrumEl).spectrum({ flat: !0, showButtons: !1, move: this.setColor.bind(this), change: this.setColor.bind(this) }),
          this.setColor("#000000");
      }),
      (a.HslRgbColorPicker.prototype.destroy = function () {
        pskl.utils.Event.removeAllEventListeners(this), this.container.removeEventListener("blur", this.onBlur_, !0), $(this.spectrumEl).spectrum("destroy"), (this.container = null), (this.spectrumEl = null);
      }),
      (a.HslRgbColorPicker.prototype.onPickerChange_ = function (a) {
        var b = a.target;
        if (b.dataset.dimension) {
          var c = b.dataset.model,
            d = b.dataset.dimension,
            e = b.value;
          this.updateColor_(e, c, d);
        }
      }),
      (a.HslRgbColorPicker.prototype.onKeydown_ = function (a) {
        var b = a.target;
        if ("text" === b.getAttribute("type").toLowerCase() && b.dataset.dimension) {
          var c = b.dataset.model;
          if ("rgb" === c || "hsv" === c) {
            var d = this.getIncrement_(a);
            if (d) {
              var e = b.dataset.dimension,
                f = parseInt(b.value, 10);
              this.updateColor_(f + d, c, e);
            }
          }
        }
      }),
      (a.HslRgbColorPicker.prototype.getIncrement_ = function (a) {
        var b = 0,
          c = pskl.service.keyboard.KeycodeTranslator.toChar(a.keyCode);
        return "up" === c ? (b = 1) : "down" === c && (b = -1), a.shiftKey && (b *= 5), b;
      }),
      (a.HslRgbColorPicker.prototype.updateColor_ = function (a, b, c) {
        var d = this.toModelValue_(a, b, c);
        if ("hsv" === b || "rgb" === b) {
          if (!isNaN(d)) {
            var e = this.getColor_(b);
            (e[c] = this.normalizeDimension_(d, c)), this.setColor(e);
          }
        } else "hex" === b && /^#([a-f0-9]{3}){1,2}$/i.test(d) && this.setColor(d);
      }),
      (a.HslRgbColorPicker.prototype.onBlur_ = function (a) {
        var b = a.target;
        if ("text" === b.getAttribute("type").toLowerCase() && b.dataset.dimension) {
          var c = b.dataset.model,
            d = b.dataset.dimension;
          b.value = this.toInputValue_(c, d);
        }
      }),
      (a.HslRgbColorPicker.prototype.setColor = function (a) {
        this.unplugged ||
          ((this.unplugged = !0),
          (this.hsvColor = this.toHsvColor_(a)),
          (this.tinyColor = this.toTinyColor_(a)),
          (this.rgbColor = this.tinyColor.toRgb()),
          this.updateInputs(),
          $(".color-picker-spectrum").spectrum("set", this.tinyColor),
          this.colorUpdatedCallback(this.tinyColor),
          (this.unplugged = !1));
      }),
      (a.HslRgbColorPicker.prototype.updateInputs = function () {
        for (var a = this.container.querySelectorAll("input"), b = 0; b < a.length; b++) {
          var c = a[b],
            d = c.dataset.dimension,
            e = c.dataset.model,
            f = this.toInputValue_(e, d);
          c.value != f && (c.value = f), "range" === c.getAttribute("type") && this.updateSliderBackground(c);
        }
      }),
      (a.HslRgbColorPicker.prototype.toInputValue_ = function (a, b) {
        var c;
        if ("rgb" === a || "hsv" === a) {
          (c = this.getColor_(a)[b]), ("v" !== b && "s" !== b) || (c *= 100), (c = Math.round(c));
        } else "hex" === a && (c = this.tinyColor.toHexString(!0));
        return c;
      }),
      (a.HslRgbColorPicker.prototype.toModelValue_ = function (a, b, c) {
        var d;
        return "rgb" === b || "hsv" === b ? ((d = parseInt(a, 10)), ("v" !== c && "s" !== c) || (d /= 100)) : "hex" === b && (d = a), d;
      }),
      (a.HslRgbColorPicker.prototype.toTinyColor_ = function (a) {
        return "object" == typeof a && a.hasOwnProperty("_tc_id") ? a : window.tinycolor(pskl.utils.copy(a));
      }),
      (a.HslRgbColorPicker.prototype.toHsvColor_ = function (a) {
        return ["h", "s", "v"].every(a.hasOwnProperty.bind(a)) ? { h: this.normalizeDimension_(a.h, "h"), s: this.normalizeDimension_(a.s, "s"), v: this.normalizeDimension_(a.v, "v") } : this.toTinyColor_(a).toHsv();
      }),
      (a.HslRgbColorPicker.prototype.normalizeDimension_ = function (a, b) {
        var c = this.getDimensionRange_(b);
        return Math.max(c[0], Math.min(c[1], a));
      }),
      (a.HslRgbColorPicker.prototype.updateSliderBackground = function (a) {
        var b = a.dataset.dimension,
          c = a.dataset.model;
        if ("h" !== b) {
          var d = this.getSliderBackgroundColors_(c, b);
          a.style.backgroundImage = "linear-gradient(to right, " + d.start + " 0, " + d.end + " 100%)";
        }
      }),
      (a.HslRgbColorPicker.prototype.getSliderBackgroundColors_ = function (a, b) {
        var c = this.getColor_(a),
          d = pskl.utils.copy(c),
          e = pskl.utils.copy(c),
          f = this.getDimensionRange_(b);
        return (d[b] = f[0]), (e[b] = f[1]), { start: window.tinycolor(d).toRgbString(), end: window.tinycolor(e).toRgbString() };
      }),
      (a.HslRgbColorPicker.prototype.getDimensionRange_ = function (a) {
        return "h" === a ? [0, 359] : "s" === a || "v" === a ? [0, 1] : "r" === a || "g" === a || "b" === a ? [0, 255] : void 0;
      }),
      (a.HslRgbColorPicker.prototype.getColor_ = function (a) {
        var b;
        return "hsv" === a ? (b = this.hsvColor) : "rgb" === a && (b = this.rgbColor), b;
      });
  })(),
  (function () {
    var a = $.namespace("pskl.widgets");
    (a.SizeInput = function (b) {
      (this.widthInput = b.widthInput),
        (this.heightInput = b.heightInput),
        (this.initWidth = b.initWidth),
        (this.initHeight = b.initHeight),
        (this.onChange = b.onChange),
        (this.synchronizedInputs = new a.SynchronizedInputs({ leftInput: this.widthInput, rightInput: this.heightInput, synchronize: this.synchronize_.bind(this) })),
        (this.disableSync = this.synchronizedInputs.disableSync.bind(this.synchronizedInputs)),
        (this.enableSync = this.synchronizedInputs.enableSync.bind(this.synchronizedInputs)),
        (this.widthInput.value = this.initWidth),
        (this.heightInput.value = this.initHeight);
    }),
      (a.SizeInput.prototype.destroy = function () {
        this.synchronizedInputs.destroy(), (this.widthInput = null), (this.heightInput = null);
      }),
      (a.SizeInput.prototype.setWidth = function (a) {
        (this.widthInput.value = a), this.synchronize_(this.widthInput);
      }),
      (a.SizeInput.prototype.setHeight = function (a) {
        (this.heightInput.value = a), this.synchronize_(this.heightInput);
      }),
      (a.SizeInput.prototype.synchronize_ = function (a) {
        var b = parseInt(a.value, 10);
        isNaN(b) && (b = 0),
          a === this.widthInput ? (this.heightInput.value = Math.round((b * this.initHeight) / this.initWidth)) : a === this.heightInput && (this.widthInput.value = Math.round((b * this.initWidth) / this.initHeight)),
          this.onChange && this.onChange();
      });
  })(),
  (function () {
    var a = $.namespace("pskl.widgets");
    (a.SynchronizedInputs = function (a) {
      (this.leftInput = a.leftInput),
        (this.rightInput = a.rightInput),
        (this.synchronize = a.synchronize),
        (this.syncEnabled = !0),
        (this.lastInput = this.leftInput),
        pskl.utils.Event.addEventListener(this.leftInput, "input", this.onInput_, this),
        pskl.utils.Event.addEventListener(this.rightInput, "input", this.onInput_, this);
    }),
      (a.SynchronizedInputs.prototype.destroy = function () {
        pskl.utils.Event.removeAllEventListeners(this), (this.leftInput = null), (this.rightInput = null), (this.lastInput = null);
      }),
      (a.SynchronizedInputs.prototype.enableSync = function () {
        (this.syncEnabled = !0), this.synchronize(this.lastInput);
      }),
      (a.SynchronizedInputs.prototype.disableSync = function () {
        this.syncEnabled = !1;
      }),
      (a.SynchronizedInputs.prototype.onInput_ = function (a) {
        var b = a.target;
        this.syncEnabled && this.synchronize(b), (this.lastInput = b);
      });
  })(),
  (function () {
    var a = $.namespace("pskl.widgets");
    (a.Wizard = function (a, b) {
      (this.steps = a), (this.container = b), (this.wrapper = document.createElement("div")), this.wrapper.classList.add("wizard-wrapper"), (this.currentStep = null), (this.previousSteps = []);
    }),
      (a.Wizard.prototype.init = function () {
        Object.keys(this.steps).forEach(
          function (a) {
            var b = this.steps[a];
            b.el.classList.add("wizard-step"), this.wrapper.appendChild(b.el);
          }.bind(this)
        ),
          this.container.appendChild(this.wrapper);
      }),
      (a.Wizard.prototype.getStep = function (a) {
        return this.steps[a];
      }),
      (a.Wizard.prototype.getCurrentStep = function () {
        return this.currentStep;
      }),
      (a.Wizard.prototype.goTo = function (a) {
        var b = this.steps[a];
        if (!b) return void console.error("Wizard could not go to unknown step: " + a);
        var c = this.currentStep;
        (this.currentStep = b),
          this.currentStep.instance.onShow(),
          c
            ? (this.previousSteps.push(c),
              this.currentStep.el.classList.add("current-step-in"),
              window.setTimeout(
                function () {
                  this.currentStep.el.classList.remove("current-step-in"), c.el.classList.remove("current-step"), this.currentStep.el.classList.add("current-step");
                }.bind(this),
                200
              ))
            : this.currentStep.el.classList.add("current-step");
      }),
      (a.Wizard.prototype.back = function () {
        var a = this.previousSteps.pop();
        if (!a) return void console.error("Wizard has no previous step to go to.");
        var b = this.currentStep;
        b || console.error("Wizard is in an invalid state"),
          (this.currentStep = a),
          b.el.classList.add("current-step-out"),
          b.el.classList.remove("current-step"),
          this.currentStep.el.classList.add("current-step"),
          window.setTimeout(
            function () {
              b.el.classList.remove("current-step-out");
            }.bind(this),
            200
          );
      });
  })(),
  (function () {
    var a = $.namespace("pskl.service.storage");
    (a.StorageService = function (a) {
      (this.piskelController = a), (this.savingFlag_ = !1), (this.onSaveSuccess_ = this.onSaveSuccess_.bind(this)), (this.onSaveError_ = this.onSaveError_.bind(this));
    }),
      (a.StorageService.prototype.init = function () {
        var a = pskl.service.keyboard.Shortcuts;
        pskl.app.shortcutService.registerShortcut(a.STORAGE.OPEN, this.onOpenKey_.bind(this)),
          pskl.app.shortcutService.registerShortcut(a.STORAGE.SAVE, this.onSaveKey_.bind(this)),
          pskl.app.shortcutService.registerShortcut(a.STORAGE.SAVE_AS, this.onSaveAsKey_.bind(this)),
          $.subscribe(Events.BEFORE_SAVING_PISKEL, this.setSavingFlag_.bind(this, !0)),
          $.subscribe(Events.AFTER_SAVING_PISKEL, this.setSavingFlag_.bind(this, !1));
      }),
      (a.StorageService.prototype.isSaving = function () {
        return this.savingFlag_;
      }),
      (a.StorageService.prototype.saveToGallery = function (a) {
        return this.delegateSave_(pskl.app.galleryStorageService, a);
      }),
      (a.StorageService.prototype.saveToLocalStorage = function (a) {
        return this.delegateSave_(pskl.app.localStorageService, a);
      }),
      (a.StorageService.prototype.saveToFileDownload = function (a) {
        return this.delegateSave_(pskl.app.fileDownloadStorageService, a);
      }),
      (a.StorageService.prototype.saveToDesktop = function (a, b) {
        return this.delegateSave_(pskl.app.desktopStorageService, a, b);
      }),
      (a.StorageService.prototype.delegateSave_ = function (a, b, c) {
        return this.savingFlag_ ? Q.reject("Already saving") : ($.publish(Events.BEFORE_SAVING_PISKEL), a.save(b, c).then(this.onSaveSuccess_, this.onSaveError_));
      }),
      (a.StorageService.prototype.onOpenKey_ = function () {
        pskl.utils.Environment.detectNodeWebkit() && pskl.app.desktopStorageService.openPiskel();
      }),
      (a.StorageService.prototype.onSaveKey_ = function (a) {
        this.piskelController.getPiskel();
        pskl.app.isLoggedIn()
          ? this.saveToGallery(this.piskelController.getPiskel())
          : pskl.utils.Environment.detectNodeWebkit()
          ? this.saveToDesktop(this.piskelController.getPiskel())
          : window.setTimeout(
              function () {
                this.saveToLocalStorage(this.piskelController.getPiskel());
              }.bind(this),
              0
            );
      }),
      (a.StorageService.prototype.onSaveAsKey_ = function () {
        pskl.utils.Environment.detectNodeWebkit() && this.saveToDesktop(this.piskelController.getPiskel(), !0);
      }),
      (a.StorageService.prototype.onSaveSuccess_ = function () {
        $.publish(Events.SHOW_NOTIFICATION, [{ content: "Successfully saved !", hideDelay: 3e3 }]), $.publish(Events.PISKEL_SAVED), this.afterSaving_();
      }),
      (a.StorageService.prototype.onSaveError_ = function (a) {
        var b = "Saving failed";
        return a && (b += " : " + a), $.publish(Events.SHOW_NOTIFICATION, [{ content: b, hideDelay: 1e4 }]), this.afterSaving_(), Q.reject(a);
      }),
      (a.StorageService.prototype.afterSaving_ = function () {
        $.publish(Events.AFTER_SAVING_PISKEL);
      }),
      (a.StorageService.prototype.setSavingFlag_ = function (a) {
        this.savingFlag_ = a;
      });
  })(),
  (function () {
    var a = $.namespace("pskl.service.storage");
    (a.FileDownloadStorageService = function () {}),
      (a.FileDownloadStorageService.prototype.init = function () {}),
      (a.FileDownloadStorageService.prototype.save = function (a) {
        var b = pskl.utils.serialization.Serializer.serialize(a),
          c = Q.defer();
        return (
          pskl.utils.BlobUtils.stringToBlob(
            b,
            function (b) {
              var d = a.getDescriptor().name,
                e = pskl.utils.DateUtils.format(new Date(), "{{Y}}{{M}}{{D}}-{{H}}{{m}}{{s}}"),
                f = d + "-" + e + ".piskel";
              try {
                pskl.utils.FileUtils.downloadAsFile(b, f), c.resolve();
              } catch (a) {
                c.reject(a.message);
              }
            }.bind(this),
            "application/piskel+json"
          ),
          c.promise
        );
      });
  })(),
  (function () {
    var a = $.namespace("pskl.service.storage");
    (a.LocalStorageService = function (a) {
      if (void 0 === a) throw "Bad LocalStorageService initialization: <undefined piskelController>";
      this.piskelController = a;
    }),
      (a.LocalStorageService.prototype.init = function () {}),
      (a.LocalStorageService.prototype.save = function (a) {
        var b = a.getDescriptor().name,
          c = a.getDescriptor().description,
          d = pskl.utils.serialization.Serializer.serialize(a);
        if (pskl.app.localStorageService.getPiskel(b)) {
          if (!window.confirm("There is already a piskel saved as " + b + ". Overwrite ?")) return Q.reject('Cancelled by user, "' + b + '" already exists');
        }
        try {
          return this.removeFromKeys_(b), this.addToKeys_(b, c, Date.now()), window.localStorage.setItem("piskel." + b, d), Q.resolve();
        } catch (a) {
          return Q.reject(a.message);
        }
      }),
      (a.LocalStorageService.prototype.load = function (a) {
        var b = this.getPiskel(a);
        this.getKey_(a);
        pskl.utils.serialization.Deserializer.deserialize(JSON.parse(b), function (a) {
          pskl.app.piskelController.setPiskel(a);
        });
      }),
      (a.LocalStorageService.prototype.remove = function (a) {
        this.removeFromKeys_(a), window.localStorage.removeItem("piskel." + a);
      }),
      (a.LocalStorageService.prototype.saveKeys_ = function (a) {
        window.localStorage.setItem("piskel.keys", JSON.stringify(a));
      }),
      (a.LocalStorageService.prototype.removeFromKeys_ = function (a) {
        var b = this.getKeys(),
          c = b.filter(function (b) {
            return b.name !== a;
          });
        this.saveKeys_(c);
      }),
      (a.LocalStorageService.prototype.getKey_ = function (a) {
        var b = this.getKeys().filter(function (b) {
          return b.name === a;
        });
        return b.length > 0 ? b[0] : null;
      }),
      (a.LocalStorageService.prototype.addToKeys_ = function (a, b, c) {
        var d = this.getKeys();
        d.push({ name: a, description: b, date: c }), this.saveKeys_(d);
      }),
      (a.LocalStorageService.prototype.getPiskel = function (a) {
        return window.localStorage.getItem("piskel." + a);
      }),
      (a.LocalStorageService.prototype.getKeys = function (a) {
        var b = window.localStorage.getItem("piskel.keys");
        return JSON.parse(b) || [];
      });
  })(),
  (function () {
    var a = $.namespace("pskl.service.storage");
    (a.GalleryStorageService = function (a) {
      this.piskelController = a;
    }),
      (a.GalleryStorageService.prototype.init = function () {}),
      (a.GalleryStorageService.prototype.save = function (a) {
        var b = a.getDescriptor(),
          c = Q.defer(),
          d = pskl.utils.serialization.Serializer.serialize(a),
          e = {
            framesheet: d,
            fps: this.piskelController.getFPS(),
            name: b.name,
            description: b.description,
            frames: this.piskelController.getFrameCount(),
            first_frame_as_png: pskl.app.getFirstFrameAsPng(),
            framesheet_as_png: pskl.app.getFramesheetAsPng(),
          };
        d.length > Constants.APPENGINE_SAVE_LIMIT && c.reject("This sprite is too big to be saved on the gallery. Try saving it as a .piskel file."), b.isPublic && (e.public = !0);
        var f = function (a) {
            c.resolve();
          },
          g = function (a) {
            c.reject(this.getErrorMessage_(a));
          };
        return pskl.utils.Xhr.post(Constants.APPENGINE_SAVE_URL, e, f, g.bind(this)), c.promise;
      }),
      (a.GalleryStorageService.prototype.getErrorMessage_ = function (a) {
        return 401 === a.status
          ? "Session expired, please log in again."
          : 403 === a.status
          ? "Unauthorized action, this sprite belongs to another account."
          : 500 === a.status
          ? "Unexpected server error, please contact us on Github (piskel) or Twitter (@piskelapp)"
          : "Unknown error";
      });
  })(),
  (function () {
    var a = $.namespace("pskl.service.storage");
    (a.DesktopStorageService = function (a) {
      (this.piskelController = a || pskl.app.piskelController), (this.hideNotificationTimeoutID = 0);
    }),
      (a.DesktopStorageService.prototype.init = function () {}),
      (a.DesktopStorageService.prototype.save = function (a, b) {
        if (a.savePath && !b) return this.saveAtPath_(a, a.savePath);
        var c = a.getDescriptor().name;
        return pskl.utils.FileUtilsDesktop.chooseFilenameDialog(c, ".piskel").then(this.saveAtPath_.bind(this, a));
      }),
      (a.DesktopStorageService.prototype.saveAtPath_ = function (a, b) {
        if (!b) return Q.reject("Invalid file name");
        var c = pskl.utils.serialization.Serializer.serialize(a);
        return (b = this.addExtensionIfNeeded_(b)), (a.savePath = b), a.setName(this.extractFilename_(b)), pskl.utils.FileUtilsDesktop.saveToFile(c, b);
      }),
      (a.DesktopStorageService.prototype.openPiskel = function () {
        return pskl.utils.FileUtilsDesktop.chooseFilenameDialog().then(this.load);
      }),
      (a.DesktopStorageService.prototype.load = function (a) {
        pskl.utils.FileUtilsDesktop.readFile(a).then(function (b) {
          pskl.utils.PiskelFileUtils.decodePiskelFile(b, function (b) {
            (b.savePath = a), pskl.app.piskelController.setPiskel(b);
          });
        });
      }),
      (a.DesktopStorageService.prototype.addExtensionIfNeeded_ = function (a) {
        return ".piskel" === a.substr(-".piskel".length) ? a : a + ".piskel";
      }),
      (a.DesktopStorageService.prototype.extractFilename_ = function (a) {
        var b = /[\/\\]([^\/\\]*)\.piskel$/gi.exec(a);
        if (b && b[1]) return b[1];
      });
  })(),
  (function () {
    var a = $.namespace("pskl.service");
    (a.BackupService = function (a) {
      (this.piskelController = a), (this.lastHash = null);
    }),
      (a.BackupService.prototype.init = function () {
        var a = window.localStorage.getItem("bkp.next.piskel"),
          b = window.localStorage.getItem("bkp.next.info");
        a && b && this.savePiskel_("prev", a, b), window.setInterval(this.backup.bind(this), 6e4);
      }),
      (a.BackupService.prototype.backup = function () {
        var a = this.piskelController.getPiskel(),
          b = a.getDescriptor(),
          c = a.getHash(),
          d = { name: b.name, description: b.info, date: Date.now(), hash: c };
        if (c !== this.lastHash) {
          this.lastHash = c;
          var e = pskl.utils.serialization.Serializer.serialize(a);
          this.savePiskel_("next", e, JSON.stringify(d));
        }
      }),
      (a.BackupService.prototype.getPreviousPiskelInfo = function () {
        var a = window.localStorage.getItem("bkp.prev.info");
        if (a) return JSON.parse(a);
      }),
      (a.BackupService.prototype.load = function () {
        var a = window.localStorage.getItem("bkp.prev.piskel");
        (a = JSON.parse(a)),
          pskl.utils.serialization.Deserializer.deserialize(a, function (a) {
            pskl.app.piskelController.setPiskel(a);
          });
      }),
      (a.BackupService.prototype.savePiskel_ = function (a, b, c) {
        try {
          window.localStorage.setItem("bkp." + a + ".piskel", b), window.localStorage.setItem("bkp." + a + ".info", c);
        } catch (a) {
          console.error("Could not save piskel backup in localStorage.", a);
        }
      });
  })(),
  (function () {
    var a = $.namespace("pskl.service");
    (a.BeforeUnloadService = function (a) {
      this.piskelController = a;
    }),
      (a.BeforeUnloadService.prototype.init = function () {
        if (pskl.utils.Environment.detectNodeWebkit()) {
          var a = require("nw.gui").Window.get();
          a.on("close", this.onNwWindowClose.bind(this, a));
        }
        window.addEventListener("beforeunload", this.onBeforeUnload.bind(this));
      }),
      (a.BeforeUnloadService.prototype.onNwWindowClose = function (a) {
        var b = this.onBeforeUnload();
        if (b && !window.confirm(b)) return !1;
        a.close(!0);
      }),
      (a.BeforeUnloadService.prototype.onBeforeUnload = function (a) {
        if ((pskl.app.backupService.backup(), pskl.app.savedStatusService.isDirty())) {
          return (a = a || window.event), a && (a.returnValue = "Your Piskel seems to have unsaved changes"), "Your Piskel seems to have unsaved changes";
        }
      });
  })(),
  (function () {
    var a = $.namespace("pskl.service");
    (a.HistoryService = function (a, b, c, d) {
      (this.piskelController = a.getWrappedPiskelController()),
        (this.shortcutService = b || pskl.app.shortcutService),
        (this.deserializer = c || pskl.utils.serialization.arraybuffer.ArrayBufferDeserializer),
        (this.serializer = d || pskl.utils.serialization.arraybuffer.ArrayBufferSerializer),
        (this.stateQueue = []),
        (this.currentIndex = -1),
        (this.lastLoadState = -1);
    }),
      (a.HistoryService.SNAPSHOT = "SNAPSHOT"),
      (a.HistoryService.REPLAY = "REPLAY"),
      (a.HistoryService.SNAPSHOT_PERIOD = 50),
      (a.HistoryService.LOAD_STATE_INTERVAL = 50),
      (a.HistoryService.MAX_SAVED_STATES = 500),
      (a.HistoryService.prototype.init = function () {
        $.subscribe(Events.PISKEL_SAVE_STATE, this.onSaveStateEvent.bind(this));
        var b = pskl.service.keyboard.Shortcuts;
        this.shortcutService.registerShortcut(b.MISC.UNDO, this.undo.bind(this)), this.shortcutService.registerShortcut(b.MISC.REDO, this.redo.bind(this)), this.saveState({ type: a.HistoryService.SNAPSHOT });
      }),
      (a.HistoryService.prototype.onSaveStateEvent = function (a, b) {
        this.saveState(b);
      }),
      (a.HistoryService.prototype.saveState = function (b) {
        (this.stateQueue = this.stateQueue.slice(0, this.currentIndex + 1)), (this.currentIndex = this.currentIndex + 1);
        var c = {
            action: b,
            frameIndex: b.state ? b.state.frameIndex : this.piskelController.currentFrameIndex,
            layerIndex: b.state ? b.state.layerIndex : this.piskelController.currentLayerIndex,
            fps: this.piskelController.getFPS(),
            uuid: pskl.utils.Uuid.generate(),
          },
          d = b.type === a.HistoryService.SNAPSHOT,
          e = this.currentIndex % a.HistoryService.SNAPSHOT_PERIOD == 0;
        if (d || e) {
          var f = this.piskelController.getPiskel();
          c.piskel = this.serializer.serialize(f);
        }
        if (this.stateQueue.length > a.HistoryService.MAX_SAVED_STATES) {
          var g = this.getNextSnapshotIndex_(1);
          this.stateQueue.splice(0, g), (this.currentIndex = this.currentIndex - g);
        }
        this.stateQueue.push(c), $.publish(Events.HISTORY_STATE_SAVED);
      }),
      (a.HistoryService.prototype.getCurrentStateId = function () {
        var a = this.stateQueue[this.currentIndex];
        return !!a && a.uuid;
      }),
      (a.HistoryService.prototype.undo = function () {
        this.loadState(this.currentIndex - 1);
      }),
      (a.HistoryService.prototype.redo = function () {
        this.loadState(this.currentIndex + 1);
      }),
      (a.HistoryService.prototype.isLoadStateAllowed_ = function (b) {
        var c = Date.now() - this.lastLoadState > a.HistoryService.LOAD_STATE_INTERVAL,
          d = b >= 0 && b < this.stateQueue.length;
        return c && d;
      }),
      (a.HistoryService.prototype.getPreviousSnapshotIndex_ = function (a) {
        for (; this.stateQueue[a] && !this.stateQueue[a].piskel; ) a -= 1;
        return a;
      }),
      (a.HistoryService.prototype.getNextSnapshotIndex_ = function (a) {
        for (; this.stateQueue[a] && !this.stateQueue[a].piskel; ) a += 1;
        return a;
      }),
      (a.HistoryService.prototype.loadState = function (a) {
        try {
          if (this.isLoadStateAllowed_(a)) {
            this.lastLoadState = Date.now();
            var b = this.getPreviousSnapshotIndex_(a);
            if (b < 0) throw "Could not find previous SNAPSHOT saved in history stateQueue";
            var c = this.getSnapshotFromState_(b),
              d = this.onPiskelLoaded_.bind(this, a, b);
            this.deserializer.deserialize(c, d);
          }
        } catch (a) {
          console.error("[CRITICAL ERROR] : Unable to load a history state."), this.logError_(a), (this.stateQueue = []), (this.currentIndex = -1);
        }
      }),
      (a.HistoryService.prototype.logError_ = function (a) {
        "string" == typeof a ? console.error(a) : (console.error(a.message), console.error(a.stack));
      }),
      (a.HistoryService.prototype.getSnapshotFromState_ = function (a) {
        var b = this.stateQueue[a],
          c = b.piskel;
        return (b.piskel = c), c;
      }),
      (a.HistoryService.prototype.onPiskelLoaded_ = function (a, b, c) {
        var d = this.getPiskelSize_();
        c.setDescriptor(this.piskelController.piskel.getDescriptor()), (c.savePath = this.piskelController.piskel.savePath), this.piskelController.setPiskel(c);
        for (var e = b + 1; e <= a; e++) {
          var f = this.stateQueue[e];
          this.setupState(f), this.replayState(f);
        }
        var g = this.stateQueue[a + 1];
        g && this.setupState(g), (this.currentIndex = a), $.publish(Events.PISKEL_RESET), $.publish(Events.HISTORY_STATE_LOADED), d !== this.getPiskelSize_() && $.publish(Events.FRAME_SIZE_CHANGED);
      }),
      (a.HistoryService.prototype.getPiskelSize_ = function () {
        return this.piskelController.getWidth() + "x" + this.piskelController.getHeight();
      }),
      (a.HistoryService.prototype.setupState = function (a) {
        this.piskelController.setCurrentFrameIndex(a.frameIndex), this.piskelController.setCurrentLayerIndex(a.layerIndex), this.piskelController.setFPS(a.fps);
      }),
      (a.HistoryService.prototype.replayState = function (a) {
        var b = a.action,
          c = (b.type, this.piskelController.getLayerAt(a.layerIndex)),
          d = c.getFrameAt(a.frameIndex);
        b.scope.replay(d, b.replay);
      });
  })(),
  (function () {
    for (var a = $.namespace("pskl.service.color"), b = [], c = 0; c < 10; c++) b.push(36 * c);
    (a.ColorSorter = function () {
      this.colorsHslMap_ = {};
    }),
      (a.ColorSorter.prototype.sort = function (a) {
        (this.colorsHslMap_ = {}),
          a.forEach(
            function (a) {
              this.colorsHslMap_[a] = window.tinycolor(a).toHsl();
            }.bind(this)
          );
        var c = a.filter(
            function (a) {
              return this.colorsHslMap_[a].l <= 0.1;
            }.bind(this)
          ),
          d = a.filter(
            function (a) {
              return this.colorsHslMap_[a].l >= 0.9;
            }.bind(this)
          ),
          e = a
            .filter(function (a) {
              return -1 === d.indexOf(a) && -1 === c.indexOf(a);
            })
            .filter(
              function (a) {
                return this.colorsHslMap_[a].s <= 0.1;
              }.bind(this)
            );
        (c = this.sortOnHslProperty_(c, "l")), (d = this.sortOnHslProperty_(d, "l")), (e = this.sortOnHslProperty_(e, "h"));
        var f = c.concat(d, e),
          g = a.filter(function (a) {
            return -1 === f.indexOf(a);
          }),
          h = b.map(
            function (a) {
              var b = g.filter(
                function (b) {
                  var c = this.colorsHslMap_[b];
                  return c.h >= a && c.h < a + 36;
                }.bind(this)
              );
              return this.sortRegularColors_(b);
            }.bind(this)
          );
        return Array.prototype.concat.apply(f, h);
      }),
      (a.ColorSorter.prototype.sortRegularColors_ = function (a) {
        return a.sort(
          function (a, b) {
            var c = this.colorsHslMap_[a],
              d = this.colorsHslMap_[b],
              e = Math.abs(c.h - d.h),
              f = Math.abs(c.s - d.s),
              g = Math.abs(c.l - d.l);
            return e < 10 ? (f > g ? this.compareValues_(c.s, d.s) : this.compareValues_(c.l, d.l)) : this.compareValues_(c.h, d.h);
          }.bind(this)
        );
      }),
      (a.ColorSorter.prototype.sortOnHslProperty_ = function (a, b) {
        return a.sort(
          function (a, c) {
            var d = this.colorsHslMap_[a],
              e = this.colorsHslMap_[c];
            return this.compareValues_(d[b], e[b]);
          }.bind(this)
        );
      }),
      (a.ColorSorter.prototype.compareValues_ = function (a, b) {
        return a > b ? 1 : a < b ? -1 : 0;
      });
  })(),
  (function () {
    var a = $.namespace("pskl.service.palette");
    (a.CurrentColorsPalette = function () {
      (this.name = "Current colors"), (this.id = Constants.CURRENT_COLORS_PALETTE_ID), (this.colorSorter = new pskl.service.color.ColorSorter());
    }),
      (a.CurrentColorsPalette.prototype.getColors = function () {
        var a = pskl.app.currentColorsService.getCurrentColors();
        return (a = a.slice(0, Constants.MAX_PALETTE_COLORS)), this.colorSorter.sort(a);
      });
  })(),
  (function () {
    var a = $.namespace("pskl.service.palette");
    (a.PaletteService = function () {
      (this.dynamicPalettes = []), (this.localStorageService = window.localStorage);
    }),
      (a.PaletteService.prototype.getPalettes = function () {
        var a = this.localStorageService.getItem("piskel.palettes"),
          b = JSON.parse(a) || [];
        return (
          (b = b.map(function (a) {
            return pskl.model.Palette.fromObject(a);
          })),
          this.dynamicPalettes.concat(b)
        );
      }),
      (a.PaletteService.prototype.getPaletteById = function (a) {
        var b = this.getPalettes();
        return this.findPaletteInArray_(a, b);
      }),
      (a.PaletteService.prototype.savePalette = function (a) {
        var b = this.getPalettes(),
          c = this.findPaletteInArray_(a.id, b);
        if (c) {
          var d = b.indexOf(c);
          b.splice(d, 1, a);
        } else b.push(a);
        this.savePalettes_(b), $.publish(Events.SHOW_NOTIFICATION, [{ content: "Palette " + a.name + " successfully saved !" }]), window.setTimeout($.publish.bind($, Events.HIDE_NOTIFICATION), 2e3);
      }),
      (a.PaletteService.prototype.addDynamicPalette = function (a) {
        this.dynamicPalettes.push(a);
      }),
      (a.PaletteService.prototype.deletePaletteById = function (a) {
        var b = this.getPalettes(),
          c = b.filter(function (b) {
            return b.id !== a;
          });
        this.savePalettes_(c);
      }),
      (a.PaletteService.prototype.savePalettes_ = function (a) {
        (a = a.filter(
          function (a) {
            return -1 === this.dynamicPalettes.indexOf(a);
          }.bind(this)
        )),
          this.localStorageService.setItem("piskel.palettes", JSON.stringify(a)),
          $.publish(Events.PALETTE_LIST_UPDATED);
      }),
      (a.PaletteService.prototype.findPaletteInArray_ = function (a, b) {
        var c = null;
        return (
          b.forEach(function (b) {
            b.id === a && (c = b);
          }),
          c
        );
      });
  })(),
  (function () {
    var a = $.namespace("pskl.service.palette");
    (a.PaletteGplWriter = function (a) {
      this.palette = a;
    }),
      (a.PaletteGplWriter.prototype.write = function () {
        var a = [];
        return (
          a.push("GIMP Palette"),
          a.push("Name: " + this.palette.name),
          a.push("Columns: 0"),
          a.push("#"),
          this.palette.getColors().forEach(
            function (b) {
              a.push(this.writeColorLine(b));
            }.bind(this)
          ),
          a.push("\r\n"),
          a.join("\r\n")
        );
      }),
      (a.PaletteGplWriter.prototype.writeColorLine = function (a) {
        var b = window.tinycolor(a),
          c = b.toRgb(),
          d = [];
        return d.push(this.padString(c.r, 3)), d.push(this.padString(c.g, 3)), d.push(this.padString(c.b, 3)), d.push("Untitled"), d.join(" ");
      }),
      (a.PaletteGplWriter.prototype.padString = function (a, b) {
        return (a = a.toString()), new Array(1 + b - a.length).join(" ") + a;
      });
  })(),
  (function () {
    var a = $.namespace("pskl.service.palette.reader");
    (a.AbstractPaletteFileReader = function (a, b, c, d) {
      (this.file = a), (this.onSuccess = b), (this.onError = c), (this.colorLineRegexp = d);
    }),
      (a.AbstractPaletteFileReader.prototype.extractColorFromLine = Constants.ABSTRACT_FUNCTION),
      (a.AbstractPaletteFileReader.prototype.read = function () {
        pskl.utils.FileUtils.readFile(this.file, this.onFileLoaded_.bind(this));
      }),
      (a.AbstractPaletteFileReader.prototype.onFileLoaded_ = function (a) {
        var b = pskl.utils.Base64.toText(a),
          c = b.match(/[^\r\n]+/g),
          d = c.filter(
            function (a) {
              return this.colorLineRegexp.test(a);
            }.bind(this)
          ),
          e = d.map(this.extractColorFromLine.bind(this));
        if (e.length) {
          var f = pskl.utils.Uuid.generate(),
            g = new pskl.model.Palette(f, this.file.name, e);
          this.onSuccess(g);
        } else this.onError();
      });
  })(),
  (function () {
    var a = $.namespace("pskl.service.palette.reader");
    (a.PaletteGplReader = function (a, b, c) {
      this.superclass.constructor.call(this, a, b, c, /^(\s*\d{1,3})(\s*\d{1,3})(\s*\d{1,3})/);
    }),
      pskl.utils.inherit(a.PaletteGplReader, a.AbstractPaletteFileReader),
      (a.PaletteGplReader.prototype.extractColorFromLine = function (a) {
        var b = a.match(/^(\s*\d{1,3})(\s*\d{1,3})(\s*\d{1,3})/);
        return window.tinycolor({ r: parseInt(b[1], 10), g: parseInt(b[2], 10), b: parseInt(b[3], 10) }).toHexString();
      });
  })(),
  (function () {
    var a = $.namespace("pskl.service.palette.reader");
    (a.PaletteImageReader = function (a, b, c) {
      (this.file = a), (this.onSuccess = b), (this.onError = c), (this.colorSorter_ = new pskl.service.color.ColorSorter());
    }),
      (a.PaletteImageReader.prototype.read = function () {
        pskl.utils.FileUtils.readImageFile(this.file, this.onImageLoaded_.bind(this));
      }),
      (a.PaletteImageReader.prototype.onImageLoaded_ = function (a) {
        var b = new pskl.worker.imageprocessor.ImageProcessor(a, this.onWorkerSuccess_.bind(this), this.onWorkerStep_.bind(this), this.onWorkerError_.bind(this));
        $.publish(Events.SHOW_PROGRESS, [{ name: "Processing image colors ..." }]), b.process();
      }),
      (a.PaletteImageReader.prototype.onWorkerSuccess_ = function (a) {
        var b = a.data,
          c = b.colorsMap,
          d = Object.keys(c);
        if (d.length > Constants.MAX_PALETTE_COLORS) this.onError("Too many colors : " + d.length);
        else {
          var e = pskl.utils.Uuid.generate(),
            f = this.colorSorter_.sort(d),
            g = new pskl.model.Palette(e, this.file.name + " palette", f);
          this.onSuccess(g);
        }
        $.publish(Events.HIDE_PROGRESS);
      }),
      (a.PaletteImageReader.prototype.onWorkerStep_ = function (a) {
        var b = a.data.progress;
        $.publish(Events.UPDATE_PROGRESS, [{ progress: b }]);
      }),
      (a.PaletteImageReader.prototype.onWorkerError_ = function (a) {
        $.publish(Events.HIDE_PROGRESS), this.onError("Unable to process the image : " + a.data.message);
      });
  })(),
  (function () {
    var a = $.namespace("pskl.service.palette.reader");
    (a.PalettePalReader = function (a, b, c) {
      this.superclass.constructor.call(this, a, b, c, /^(\d{1,3})\s+(\d{1,3})\s+(\d{1,3})/);
    }),
      pskl.utils.inherit(a.PalettePalReader, a.AbstractPaletteFileReader),
      (a.PalettePalReader.prototype.extractColorFromLine = function (a) {
        var b = a.match(/^(\d{1,3})\s+(\d{1,3})\s+(\d{1,3})/),
          c = "rgb(" + b[1] + "," + b[2] + "," + b[3] + ")";
        return window.tinycolor(c).toHexString();
      });
  })(),
  (function () {
    var a = $.namespace("pskl.service.palette.reader"),
      b = /^[A-F0-9]{2}([A-F0-9]{2})([A-F0-9]{2})([A-F0-9]{2})/;
    (a.PaletteTxtReader = function (a, c, d) {
      this.superclass.constructor.call(this, a, c, d, b);
    }),
      pskl.utils.inherit(a.PaletteTxtReader, a.AbstractPaletteFileReader),
      (a.PaletteTxtReader.prototype.extractColorFromLine = function (a) {
        var c = a.match(b);
        return ("#" + c[1] + c[2] + c[3]).toLowerCase();
      });
  })(),
  (function () {
    var a = $.namespace("pskl.service.palette"),
      b = { gpl: a.reader.PaletteGplReader, pal: a.reader.PalettePalReader, txt: a.reader.PaletteTxtReader, img: a.reader.PaletteImageReader };
    (a.PaletteImportService = function () {}),
      (a.PaletteImportService.prototype.init = function () {}),
      (a.PaletteImportService.prototype.read = function (a, b, c) {
        var d = this.getReader_(a, b, c);
        d ? d.read() : console.error("Could not find reader for file : %s", a.name);
      }),
      (a.PaletteImportService.prototype.isImage_ = function (a) {
        return 0 === a.type.indexOf("image");
      }),
      (a.PaletteImportService.prototype.getReader_ = function (a, b, c) {
        var d = this.getReaderClass_(a);
        return d ? new d(a, b, c) : null;
      }),
      (a.PaletteImportService.prototype.getReaderClass_ = function (a) {
        var c;
        if (this.isImage_(a)) c = b.img;
        else {
          var d = this.getExtension_(a);
          c = b[d];
        }
        return c;
      }),
      (a.PaletteImportService.prototype.getExtension_ = function (a) {
        var b = a.name.split(".");
        return b[b.length - 1].toLowerCase();
      });
  })(),
  (function () {
    var a = $.namespace("pskl.service.pensize");
    (a.PenSizeService = function () {
      this.size = 1;
    }),
      (a.PenSizeService.prototype.init = function () {
        this.size = pskl.UserSettings.get(pskl.UserSettings.PEN_SIZE);
        var a = pskl.service.keyboard.Shortcuts;
        pskl.app.shortcutService.registerShortcut(a.MISC.INCREASE_PENSIZE, this.increasePenSize_.bind(this)), pskl.app.shortcutService.registerShortcut(a.MISC.DECREASE_PENSIZE, this.decreasePenSize_.bind(this));
      }),
      (a.PenSizeService.prototype.increasePenSize_ = function () {
        this.setPenSize(this.size + 1);
      }),
      (a.PenSizeService.prototype.decreasePenSize_ = function () {
        this.setPenSize(this.size - 1);
      }),
      (a.PenSizeService.prototype.getPenSize = function () {
        return this.size;
      }),
      (a.PenSizeService.prototype.setPenSize = function (a) {
        this.isPenSizeValid_(a) && a != this.size && ((this.size = a), pskl.UserSettings.set(pskl.UserSettings.PEN_SIZE, a), $.publish(Events.PEN_SIZE_CHANGED));
      }),
      (a.PenSizeService.prototype.isPenSizeValid_ = function (a) {
        return !isNaN(a) && a >= 1 && a <= 32;
      });
  })(),
  (function () {
    var a = $.namespace("pskl.service");
    (a.SavedStatusService = function (a, b) {
      (this.piskelController = a), (this.historyService = b), (this.lastSavedStateIndex = ""), (this.publishStatusUpdateEvent_ = this.publishStatusUpdateEvent_.bind(this));
    }),
      (a.SavedStatusService.prototype.init = function () {
        $.subscribe(Events.TOOL_RELEASED, this.publishStatusUpdateEvent_),
          $.subscribe(Events.PISKEL_RESET, this.publishStatusUpdateEvent_),
          $.subscribe(Events.PISKEL_SAVED, this.onPiskelSaved.bind(this)),
          (this.lastSavedStateIndex = this.historyService.getCurrentStateId());
      }),
      (a.SavedStatusService.prototype.onPiskelSaved = function () {
        (this.lastSavedStateIndex = this.historyService.getCurrentStateId()), this.publishStatusUpdateEvent_();
      }),
      (a.SavedStatusService.prototype.publishStatusUpdateEvent_ = function () {
        $.publish(Events.PISKEL_SAVED_STATUS_UPDATE);
      }),
      (a.SavedStatusService.prototype.isDirty = function () {
        return this.lastSavedStateIndex != this.historyService.getCurrentStateId();
      });
  })(),
  (function () {
    var a = { 8: "back", 13: "enter", 27: "esc", 37: "left", 38: "up", 39: "right", 40: "down", 46: "del", 189: "-", 109: "-", 173: "-", 187: "+", 107: "+", 61: "+", 188: "<", 190: ">", 191: "?", 219: "[", 221: "]" };
    $.namespace("pskl.service.keyboard").KeycodeTranslator = {
      toChar: function (b) {
        return b >= 48 && b <= 57 ? b - 48 + "" : b >= 96 && b <= 105 ? b - 96 + "" : b >= 65 && b <= 90 ? (b - 65 + 10).toString(36) : a[b];
      },
    };
  })(),
  (function () {
    var a = $.namespace("pskl.service.keyboard");
    a.KeyUtils = {
      createKeyFromString: function (a) {
        a = a.toLowerCase();
        var b = { alt: -1 != a.indexOf("alt+"), shift: -1 != a.indexOf("shift+"), ctrl: -1 != a.indexOf("ctrl+") },
          c = a.split(/\+(?!$)/);
        return { key: c[c.length - 1].toUpperCase(), modifiers: b };
      },
      createKeyFromEvent: function (b) {
        var c = b.which,
          d = a.KeycodeTranslator.toChar(c);
        return d ? { key: d.toUpperCase(), modifiers: { alt: b.altKey, shift: b.shiftKey, ctrl: a.KeyUtils.isCtrlKeyPressed_(b) } } : null;
      },
      equals: function (b, c) {
        return (
          (b = "string" == typeof b ? a.KeyUtils.createKeyFromString(b) : b),
          (c = "string" == typeof c ? a.KeyUtils.createKeyFromString(c) : c),
          b.key === c.key && b.modifiers.alt === c.modifiers.alt && b.modifiers.shift === c.modifiers.shift && b.modifiers.ctrl === c.modifiers.ctrl
        );
      },
      stringify: function (b) {
        var c = a.KeyUtils.getModifiersString(b.modifiers);
        return c ? c + "+" + b.key : b.key;
      },
      getModifiersString: function (a) {
        var b = [];
        return a.alt && b.push("alt"), a.ctrl && b.push("ctrl"), a.shift && b.push("shift"), b.join("+");
      },
      isCtrlKeyPressed_: function (a) {
        return pskl.utils.UserAgent.isMac ? a.metaKey : a.ctrlKey;
      },
    };
  })(),
  (function () {
    var a = $.namespace("pskl.service.keyboard");
    (a.Shortcut = function (a, b, c, d) {
      (this.id_ = a), (this.description_ = b), "string" == typeof c && (c = [c]), (this.defaultKeys_ = c), (this.displayKey_ = d);
    }),
      (a.Shortcut.USER_SETTINGS_PREFIX = "shortcut."),
      (a.Shortcut.prototype.getId = function () {
        return this.id_;
      }),
      (a.Shortcut.prototype.getDescription = function () {
        return this.description_;
      }),
      (a.Shortcut.prototype.getKeys = function () {
        var a = pskl.UserSettings.get(this.getLocalStorageKey_()) || this.defaultKeys_;
        return "string" == typeof a ? [a] : Array.isArray(a) ? a : [];
      }),
      (a.Shortcut.prototype.isEditable = function () {
        return 0 === this.getKeys().length || (1 === this.getKeys().length && -1 === a.Shortcuts.FORBIDDEN_KEYS.indexOf(this.getKeys()[0]));
      }),
      (a.Shortcut.prototype.isCustom = function () {
        var b = this.getKeys();
        return (
          b.length !== this.defaultKeys_.length ||
          this.defaultKeys_.some(function (c) {
            return !b.some(function (b) {
              return a.KeyUtils.equals(b, c);
            });
          })
        );
      }),
      (a.Shortcut.prototype.isUndefined = function () {
        return 0 === this.getKeys().length;
      }),
      (a.Shortcut.prototype.getDisplayKey = function () {
        return this.isUndefined() ? "???" : this.displayKey_ ? this.displayKey_ : this.getKeys()[0];
      }),
      (a.Shortcut.prototype.restoreDefault = function (a) {
        pskl.UserSettings.set(this.getLocalStorageKey_(), "");
      }),
      (a.Shortcut.prototype.updateKeys = function (a) {
        pskl.UserSettings.set(this.getLocalStorageKey_(), a);
      }),
      (a.Shortcut.prototype.removeKeys = function (b) {
        if (this.isEditable()) {
          var c = this.getKeys(),
            d = c.filter(function (c) {
              return !b.some(function (b) {
                return a.KeyUtils.equals(c, b);
              });
            });
          return d.length !== c.length && (this.updateKeys(d), !0);
        }
      }),
      (a.Shortcut.prototype.getLocalStorageKey_ = function () {
        return a.Shortcut.USER_SETTINGS_PREFIX + this.id_;
      });
  })(),
  (function () {
    var a = $.namespace("pskl.service.keyboard"),
      b = function (b, c, d, e) {
        return new a.Shortcut(b, c, d, e);
      };
    a.Shortcuts = {
      FORBIDDEN_KEYS: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "?", "shift+?", "DEL", "BACK", "ENTER", "ctrl+Y", "ctrl+shift+Z"],
      TOOL: {
        PEN: b("tool-pen", "Pen tool", "P"),
        MIRROR_PEN: b("tool-vertical-mirror-pen", "Vertical mirror pen tool", "V"),
        PAINT_BUCKET: b("tool-paint-bucket", "Paint bucket tool", "B"),
        COLORSWAP: b("tool-colorswap", "Magic bucket tool", "A"),
        ERASER: b("tool-eraser", "Eraser pen tool", "E"),
        STROKE: b("tool-stroke", "Stroke tool", "L"),
        RECTANGLE: b("tool-rectangle", "Rectangle tool", "R"),
        CIRCLE: b("tool-circle", "Circle tool", "C"),
        MOVE: b("tool-move", "Move tool", "M"),
        SHAPE_SELECT: b("tool-shape-select", "Shape selection", "Z"),
        RECTANGLE_SELECT: b("tool-rectangle-select", "Rectangle selection", "S"),
        LASSO_SELECT: b("tool-lasso-select", "Lasso selection", "H"),
        LIGHTEN: b("tool-lighten", "Lighten tool", "U"),
        DITHERING: b("tool-dithering", "Dithering tool", "T"),
        COLORPICKER: b("tool-colorpicker", "Color picker", "O"),
      },
      SELECTION: {
        CUT: b("selection-cut", "Cut selection", "ctrl+X"),
        COPY: b("selection-copy", "Copy selection", "ctrl+C"),
        PASTE: b("selection-paste", "Paste selection", "ctrl+V"),
        DELETE: b("selection-delete", "Delete selection", ["DEL", "BACK"]),
        COMMIT: b("selection-commit", "Commit selection", ["ENTER"]),
      },
      MISC: {
        RESET_ZOOM: b("reset-zoom", "Reset zoom level", "0"),
        INCREASE_ZOOM: b("increase-zoom", "Increase zoom level", "+"),
        DECREASE_ZOOM: b("decrease-zoom", "Decrease zoom level", "-"),
        INCREASE_PENSIZE: b("increase-pensize", "Increase pen size", "]"),
        DECREASE_PENSIZE: b("decrease-pensize", "Decrease pen size", "["),
        UNDO: b("undo", "Undo", "ctrl+Z"),
        REDO: b("redo", "Redo", ["ctrl+Y", "ctrl+shift+Z"]),
        PREVIOUS_FRAME: b("previous-frame", "Select previous frame", "up"),
        NEXT_FRAME: b("next-frame", "Select next frame", "down"),
        NEW_FRAME: b("new-frame", "Create new empty frame", "N"),
        DUPLICATE_FRAME: b("duplicate-frame", "Duplicate selected frame", "shift+N"),
        CHEATSHEET: b("cheatsheet", "Open the keyboard shortcut cheatsheet", ["?", "shift+?"]),
        X1_PREVIEW: b("x1-preview", "Select original size preview", "alt+1"),
        BEST_PREVIEW: b("best-preview", "Select best size preview", "alt+2"),
        FULL_PREVIEW: b("full-preview", "Select full size preview", "alt+3"),
        ONION_SKIN: b("onion-skin", "Toggle onion skin", "alt+O"),
        LAYER_PREVIEW: b("layer-preview", "Toggle layer preview", "alt+L"),
        MERGE_ANIMATION: b("import-animation", "Open merge animation popup", "ctrl+shift+M"),
        CLOSE_POPUP: b("close-popup", "Close an opened popup", "ESC"),
      },
      STORAGE: { SAVE: b("save", "Save the current sprite", "ctrl+S"), OPEN: b("open", "(desktop) Open a .piskel file", "ctrl+O"), SAVE_AS: b("save-as", "(desktop) Save as new", "ctrl+shift+S") },
      COLOR: {
        SWAP: b("swap-colors", "Swap primary/secondary colors", "X"),
        RESET: b("reset-colors", "Reset default colors", "D"),
        CREATE_PALETTE: b("create-palette", "Open the palette creation popup", "alt+P"),
        PREVIOUS_COLOR: b("previous-color", "Select the previous color in the current palette", "<"),
        NEXT_COLOR: b("next-color", "Select the next color in the current palette", ">"),
        SELECT_COLOR: b("select-color", "Select a palette color in the current palette", "123456789".split(""), "1 to 9"),
      },
      CATEGORIES: ["TOOL", "SELECTION", "MISC", "STORAGE", "COLOR"],
    };
  })(),
  (function () {
    var a = $.namespace("pskl.service.keyboard");
    (a.ShortcutService = function () {
      this.shortcuts_ = [];
    }),
      (a.ShortcutService.prototype.init = function () {
        $(document.body).keydown($.proxy(this.onKeyDown_, this));
      }),
      (a.ShortcutService.prototype.registerShortcut = function (b, c) {
        if (!(b instanceof a.Shortcut)) throw "Invalid shortcut argument, please use instances of pskl.service.keyboard.Shortcut";
        if ("function" != typeof c) throw "Invalid callback argument, please provide a function";
        this.shortcuts_.push({ shortcut: b, callback: c });
      }),
      (a.ShortcutService.prototype.unregisterShortcut = function (a) {
        var b = -1;
        this.shortcuts_.forEach(function (c, d) {
          c.shortcut === a && (b = d);
        }),
          -1 != b && this.shortcuts_.splice(b, 1);
      }),
      (a.ShortcutService.prototype.onKeyDown_ = function (b) {
        var c = a.KeyUtils.createKeyFromEvent(b);
        !this.isInInput_(b) &&
          c &&
          this.shortcuts_.forEach(
            function (d) {
              d.shortcut.getKeys().forEach(
                function (e) {
                  if (a.KeyUtils.equals(e, c)) {
                    !0 !== d.callback(c.key) && b.preventDefault(), $.publish(Events.KEYBOARD_EVENT, [b]);
                  }
                }.bind(this)
              );
            }.bind(this)
          );
      }),
      (a.ShortcutService.prototype.isInInput_ = function (a) {
        var b = a.target.nodeName.toUpperCase();
        return "INPUT" === b || "TEXTAREA" === b;
      }),
      (a.ShortcutService.prototype.getShortcutById = function (a) {
        return pskl.utils.Array.find(this.getShortcuts(), function (b) {
          return b.getId() === a;
        });
      }),
      (a.ShortcutService.prototype.getShortcuts = function () {
        var b = [];
        return (
          a.Shortcuts.CATEGORIES.forEach(function (c) {
            var d = a.Shortcuts[c];
            Object.keys(d).forEach(function (a) {
              b.push(d[a]);
            });
          }),
          b
        );
      }),
      (a.ShortcutService.prototype.updateShortcut = function (b, c) {
        var d = c.replace(/\s/g, "");
        -1 != a.Shortcuts.FORBIDDEN_KEYS.indexOf(d)
          ? $.publish(Events.SHOW_NOTIFICATION, [{ content: "Key cannot be remapped (" + c + ")", hideDelay: 5e3 }])
          : (this.removeKeyFromAllShortcuts_(d), b.updateKeys([d]), $.publish(Events.SHORTCUTS_CHANGED));
      }),
      (a.ShortcutService.prototype.removeKeyFromAllShortcuts_ = function (a) {
        this.getShortcuts().forEach(function (b) {
          b.removeKeys([a]) && $.publish(Events.SHOW_NOTIFICATION, [{ content: "Shortcut key removed for " + b.getId(), hideDelay: 5e3 }]);
        });
      }),
      (a.ShortcutService.prototype.restoreDefaultShortcuts = function () {
        this.getShortcuts().forEach(function (a) {
          a.restoreDefault();
        }),
          $.publish(Events.SHORTCUTS_CHANGED);
      });
  })(),
  (function () {
    var a = $.namespace("pskl.service");
    (a.ImportService = function (a) {
      this.piskelController_ = a;
    }),
      (a.ImportService.prototype.init = function () {
        $.subscribe(Events.PISKEL_FILE_IMPORT_FAILED, this.onPiskelFileImportFailed_);
      }),
      (a.ImportService.prototype.onPiskelFileImportFailed_ = function (a, b) {
        $.publish(Events.SHOW_NOTIFICATION, [{ content: "Piskel file import failed (" + b + ")", hideDelay: 1e4 }]);
      }),
      (a.ImportService.prototype.newPiskelFromImage = function (a, b, c) {
        c = c || Constants.EMPTY_FUNCTION;
        var d = b.importType,
          e = b.name,
          f = b.smoothing,
          g = b.frameSizeX,
          h = b.frameSizeY,
          i = b.frameOffsetX,
          j = b.frameOffsetY,
          k = new window.SuperGif({ gif: a });
        k.load({
          success: function () {
            var a,
              b = k.getFrames().map(function (a) {
                return pskl.utils.CanvasUtils.createFromImageData(a.data);
              });
            if ("single" === d || b.length > 1) a = this.createPiskelFromImages_(b, e, g, h, f);
            else {
              var l = this.createImagesFromSheet_(b[0], g, h, i, j);
              a = this.createPiskelFromImages_(l, e, g, h, f);
            }
            c(a);
          }.bind(this),
          error: function () {
            var b;
            if ("single" === d) b = this.createPiskelFromImages_([a], e, g, h, f);
            else {
              var k = this.createImagesFromSheet_(a, g, h, i, j);
              b = this.createPiskelFromImages_(k, e, g, h, f);
            }
            c(b);
          }.bind(this),
        });
      }),
      (a.ImportService.prototype.createImagesFromSheet_ = function (a, b, c, d, e) {
        return pskl.utils.CanvasUtils.createFramesFromImage(a, d, e, b, c, !0, !0);
      }),
      (a.ImportService.prototype.createPiskelFromImages_ = function (a, b, c, d, e) {
        b = b || "Imported piskel";
        var f = this.createFramesFromImages_(a, c, d, e),
          g = pskl.model.Layer.fromFrames("Layer 1", f),
          h = new pskl.model.piskel.Descriptor(b, "");
        return pskl.model.Piskel.fromLayers([g], Constants.DEFAULT.FPS, h);
      }),
      (a.ImportService.prototype.createFramesFromImages_ = function (a, b, c, d) {
        return a.map(function (a) {
          var e = pskl.utils.ImageResizer.resize(a, b, c, d);
          return pskl.utils.FrameUtils.createFromImage(e);
        });
      });
  })(),
  (function () {
    var a = $.namespace("pskl.service");
    (a.ImageUploadService = function () {}),
      (a.ImageUploadService.prototype.init = function () {}),
      (a.ImageUploadService.prototype.upload = function (a, b, c) {
        var d = { data: a },
          e = function (a) {
            b(Constants.IMAGE_SERVICE_GET_URL + a.responseText);
          };
        pskl.utils.Xhr.post(Constants.IMAGE_SERVICE_UPLOAD_URL, d, e, c);
      });
  })(),
  (function () {
    var a = $.namespace("pskl.service");
    (a.CurrentColorsService = function (a) {
      (this.piskelController = a),
        (this.cache = {}),
        (this.currentColors = []),
        (this.cachedFrameProcessor = new pskl.model.frame.AsyncCachedFrameProcessor()),
        this.cachedFrameProcessor.setFrameProcessor(this.getFrameColors_.bind(this)),
        (this.throttledUpdateCurrentColors_ = pskl.utils.FunctionUtils.throttle(this.updateCurrentColors_.bind(this), 1e3)),
        (this.paletteService = pskl.app.paletteService);
    }),
      (a.CurrentColorsService.prototype.init = function () {
        $.subscribe(Events.HISTORY_STATE_SAVED, this.throttledUpdateCurrentColors_), $.subscribe(Events.HISTORY_STATE_LOADED, this.loadColorsFromCache_.bind(this));
      }),
      (a.CurrentColorsService.prototype.getCurrentColors = function () {
        return this.currentColors;
      }),
      (a.CurrentColorsService.prototype.setCurrentColors = function (a) {
        var b = pskl.app.historyService.currentIndex;
        (this.cache[b] = a), a.join("") !== this.currentColors.join("") && ((this.currentColors = a), $.publish(Events.CURRENT_COLORS_UPDATED));
      }),
      (a.CurrentColorsService.prototype.isCurrentColorsPaletteSelected_ = function () {
        var a = pskl.UserSettings.get(pskl.UserSettings.SELECTED_PALETTE);
        return this.paletteService.getPaletteById(a).id === Constants.CURRENT_COLORS_PALETTE_ID;
      }),
      (a.CurrentColorsService.prototype.loadColorsFromCache_ = function () {
        var a = pskl.app.historyService.currentIndex,
          b = this.cache[a];
        b ? this.setCurrentColors(b) : this.updateCurrentColors_();
      });
    var b = function (a, b) {
      var c = [];
      for (a = a.slice(0); a.length; ) c.push(a.splice(0, 10));
      var d = Q([]);
      return (
        c.forEach(function (a) {
          d = d.then(function (c) {
            return Q.all(a.map(b)).then(function (a) {
              return c.concat(a);
            });
          });
        }),
        d
      );
    };
    (a.CurrentColorsService.prototype.updateCurrentColors_ = function () {
      var a = this.piskelController.getLayers(),
        c = a
          .map(function (a) {
            return a.getFrames();
          })
          .reduce(function (a, b) {
            return a.concat(b);
          });
      b(
        c,
        function (a) {
          return this.cachedFrameProcessor.get(a);
        }.bind(this)
      ).then(
        function (a) {
          var b = {};
          a.forEach(function (a) {
            Object.keys(a).forEach(function (a) {
              b[a] = !0;
            });
          }),
            delete b[pskl.utils.colorToInt(Constants.TRANSPARENT_COLOR)];
          var c = Object.keys(b).map(function (a) {
            return pskl.utils.intToHex(a);
          });
          this.setCurrentColors(c);
        }.bind(this)
      );
    }),
      (a.CurrentColorsService.prototype.isCurrentColorsPaletteSelected_ = function () {
        var a = pskl.UserSettings.get(pskl.UserSettings.SELECTED_PALETTE),
          b = this.paletteService.getPaletteById(a);
        return b && b.id === Constants.CURRENT_COLORS_PALETTE_ID;
      }),
      (a.CurrentColorsService.prototype.loadColorsFromCache_ = function () {
        var a = pskl.app.historyService.currentIndex,
          b = this.cache[a];
        b && this.setCurrentColors(b);
      }),
      (a.CurrentColorsService.prototype.getFrameColors_ = function (a, b) {
        new pskl.worker.framecolors.FrameColors(
          a,
          function (a) {
            b(a.data.colors);
          },
          function () {},
          function (a) {
            b({});
          }
        ).process();
      });
  })(),
  (function () {
    var a = $.namespace("pskl.service");
    (a.FileDropperService = function (a) {
      (this.piskelController = a), (this.dropPosition_ = null);
    }),
      (a.FileDropperService.prototype.init = function () {
        document.body.addEventListener("drop", this.onFileDrop.bind(this), !1), document.body.addEventListener("dragover", this.onFileDragOver.bind(this), !1);
      }),
      (a.FileDropperService.prototype.onFileDragOver = function (a) {
        a.stopPropagation(), a.preventDefault(), (a.dataTransfer.dropEffect = "copy");
      }),
      (a.FileDropperService.prototype.onFileDrop = function (a) {
        a.preventDefault(), a.stopPropagation(), (this.dropPosition_ = { x: a.clientX, y: a.clientY });
        var b = a.dataTransfer.files;
        this.isMultipleFiles_ = b.length > 1;
        for (var c = 0; c < b.length; c++) {
          var d = b[c],
            e = 0 === d.type.indexOf("image"),
            f = /\.piskel$/i.test(d.name),
            g = /\.(gpl|txt|pal)$/i.test(d.name);
          e
            ? $.publish(Events.DIALOG_SHOW, { dialogId: "import", initArgs: { rawFiles: [d] } })
            : f
            ? pskl.utils.PiskelFileUtils.loadFromFile(d, this.onPiskelFileLoaded_, this.onPiskelFileError_)
            : g && pskl.app.paletteImportService.read(d, this.onPaletteLoaded_.bind(this));
        }
      }),
      (a.FileDropperService.prototype.onPaletteLoaded_ = function (a) {
        pskl.app.paletteService.savePalette(a), pskl.UserSettings.set(pskl.UserSettings.SELECTED_PALETTE, a.id);
      }),
      (a.FileDropperService.prototype.onPiskelFileLoaded_ = function (a) {
        window.confirm("This will replace your current animation") && pskl.app.piskelController.setPiskel(a);
      }),
      (a.FileDropperService.prototype.onPiskelFileError_ = function (a) {
        $.publish(Events.PISKEL_FILE_IMPORT_FAILED, [a]);
      }),
      (a.FileDropperService.prototype.onImageLoaded_ = function (a) {
        this.isMultipleFiles_ && (this.piskelController.addFrameAtCurrentIndex(), this.piskelController.selectNextFrame());
        var b = this.piskelController.getCurrentFrame(),
          c = pskl.app.drawingController.getSpriteCoordinates(this.dropPosition_.x, this.dropPosition_.y),
          d = c.x,
          e = c.y;
        pskl.utils.FrameUtils.addImageToFrame(b, a, d, e), $.publish(Events.PISKEL_RESET), $.publish(Events.PISKEL_SAVE_STATE, { type: pskl.service.HistoryService.SNAPSHOT });
      });
  })(),
  (function () {
    var a = $.namespace("pskl.service");
    (a.SelectedColorsService = function () {
      (this.primaryColor_ = Constants.DEFAULT_PEN_COLOR), (this.secondaryColor_ = Constants.TRANSPARENT_COLOR);
    }),
      (a.SelectedColorsService.prototype.init = function () {
        $.subscribe(Events.PRIMARY_COLOR_SELECTED, this.onPrimaryColorUpdate_.bind(this)), $.subscribe(Events.SECONDARY_COLOR_SELECTED, this.onSecondaryColorUpdate_.bind(this));
      }),
      (a.SelectedColorsService.prototype.getPrimaryColor = function () {
        return this.primaryColor_;
      }),
      (a.SelectedColorsService.prototype.getSecondaryColor = function () {
        return this.secondaryColor_;
      }),
      (a.SelectedColorsService.prototype.onPrimaryColorUpdate_ = function (a, b) {
        this.primaryColor_ = b;
      }),
      (a.SelectedColorsService.prototype.onSecondaryColorUpdate_ = function (a, b) {
        this.secondaryColor_ = b;
      });
  })(),
  (function () {
    var a = $.namespace("pskl.service");
    (a.MouseStateService = function () {
      this.lastButtonPressed_ = null;
    }),
      (a.MouseStateService.prototype.init = function () {
        $.subscribe(Events.MOUSE_EVENT, this.onMouseEvent_.bind(this));
      }),
      (a.MouseStateService.prototype.isLeftButtonPressed = function () {
        return this.isMouseButtonPressed_(Constants.LEFT_BUTTON);
      }),
      (a.MouseStateService.prototype.isRightButtonPressed = function () {
        return this.isMouseButtonPressed_(Constants.RIGHT_BUTTON);
      }),
      (a.MouseStateService.prototype.isMiddleButtonPressed = function () {
        return this.isMouseButtonPressed_(Constants.MIDDLE_BUTTON);
      }),
      (a.MouseStateService.prototype.isMouseButtonPressed_ = function (a) {
        return null != this.lastButtonPressed_ && this.lastButtonPressed_ == a;
      }),
      (a.MouseStateService.prototype.onMouseEvent_ = function (a, b) {
        "mousedown" == b.type ? (this.lastButtonPressed_ = b.button) : "mouseup" == b.type && (this.lastButtonPressed_ = null);
      });
  })(),
  (function () {
    var a = $.namespace("pskl.service.performance");
    (a.PerformanceReport = function (a, b) {
      var c = a.getWidth() * a.getHeight();
      this.resolution = c > 25e4;
      var d = a.getLayers().length;
      this.layers = d > 25;
      var e = a.getLayerAt(0).size();
      (this.frames = e > 100), (this.colors = b > 100);
      var f = c / 2500 + 4 * d + e + b;
      this.overall = f > 100;
    }),
      (a.PerformanceReport.prototype.equals = function (b) {
        return b instanceof a.PerformanceReport && this.resolution == b.resolution && this.layers == b.layers && this.frames == b.frames && this.colors == b.colors && this.overall == b.overall;
      }),
      (a.PerformanceReport.prototype.hasProblem = function () {
        return this.resolution || this.layers || this.frames || this.colors || this.overall;
      });
  })(),
  (function () {
    var a = $.namespace("pskl.service.performance");
    (a.PerformanceReportService = function (a, b) {
      (this.piskelController = a), (this.currentColorsService = b), (this.currentReport = null);
    }),
      (a.PerformanceReportService.prototype.init = function () {
        $.subscribe(Events.HISTORY_STATE_SAVED, this.createReport_.bind(this));
      }),
      (a.PerformanceReportService.prototype.createReport_ = function () {
        var b = new a.PerformanceReport(this.piskelController.getPiskel(), this.currentColorsService.getCurrentColors().length);
        b.equals(this.currentReport) || ($.publish(Events.PERFORMANCE_REPORT_CHANGED, [b]), (this.currentReport = b));
      }),
      (a.PerformanceReportService.prototype.hasProblem = function () {
        return this.currentReport && this.currentReport.hasProblem();
      });
  })();
var ns = $.namespace("pskl.tools");
(ns.ToolsHelper = {
  getTargetFrames: function (a, b) {
    var c = pskl.app.piskelController.getCurrentFrameIndex();
    return (a ? pskl.app.piskelController.getLayers() : [pskl.app.piskelController.getCurrentLayer()]).reduce(function (a, d) {
      var e = b ? d.getFrames() : [d.getFrameAt(c)];
      return a.concat(e);
    }, []);
  },
}),
  (function () {
    var a = $.namespace("pskl.tools");
    (a.Tool = function () {
      (this.toolId = "tool"), (this.helpText = "Abstract tool"), (this.tooltipDescriptors = []);
    }),
      (a.Tool.prototype.getHelpText = function () {
        return this.helpText;
      }),
      (a.Tool.prototype.getId = function () {
        return this.toolId;
      }),
      (a.Tool.prototype.raiseSaveStateEvent = function (a) {
        $.publish(Events.PISKEL_SAVE_STATE, { type: pskl.service.HistoryService.REPLAY, scope: this, replay: a });
      });
  })(),
  (function () {
    var a = $.namespace("pskl.tools");
    (a.ToolIconBuilder = function () {}),
      (a.ToolIconBuilder.prototype.createIcon = function (a, b) {
        b = b || "right";
        var c = pskl.utils.Template.get("drawingTool-item-template");
        return pskl.utils.Template.replace(c, { cssclass: ["tool-icon", "icon-" + a.toolId].join(" "), toolid: a.toolId, title: this.getTooltipText(a), tooltipposition: b });
      }),
      (a.ToolIconBuilder.prototype.getTooltipText = function (a) {
        var b = a.tooltipDescriptors;
        return pskl.utils.TooltipFormatter.format(a.getHelpText(), a.shortcut, b);
      });
  })(),
  (function () {
    var a = $.namespace("pskl.tools.drawing");
    (a.BaseTool = function () {
      pskl.tool.Tool.call(this), (this.toolId = "tool-base");
    }),
      pskl.utils.inherit(a.BaseTool, pskl.tools.Tool),
      (a.BaseTool.prototype.applyToolAt = function (a, b, c, d, e) {}),
      (a.BaseTool.prototype.moveToolAt = function (a, b, c, d, e) {}),
      (a.BaseTool.prototype.replay = Constants.ABSTRACT_FUNCTION),
      (a.BaseTool.prototype.supportsDynamicPenSize = function () {
        return !1;
      }),
      (a.BaseTool.prototype.getToolColor = function () {
        return pskl.app.mouseStateService.isRightButtonPressed() ? pskl.app.selectedColorsService.getSecondaryColor() : pskl.app.selectedColorsService.getPrimaryColor();
      }),
      (a.BaseTool.prototype.moveUnactiveToolAt = function (a, b, c, d, e) {
        d.containsPixel(a, b) ? this.updateHighlightedPixel(c, d, a, b) : this.hideHighlightedPixel(d);
      }),
      (a.BaseTool.prototype.updateHighlightedPixel = function (a, b, c, d) {
        isNaN(this.highlightedPixelCol) || isNaN(this.highlightedPixelRow) || (this.highlightedPixelRow == d && this.highlightedPixelCol == c) || b.clear();
        var e = pskl.utils.intToColor(a.getPixel(c, d)),
          f = this.getHighlightColor_(e),
          g = this.supportsDynamicPenSize() ? pskl.app.penSizeService.getPenSize() : 1;
        pskl.PixelUtils.resizePixel(c, d, g).forEach(function (a) {
          b.setPixel(a[0], a[1], f);
        }),
          (this.highlightedPixelCol = c),
          (this.highlightedPixelRow = d);
      }),
      (a.BaseTool.prototype.getHighlightColor_ = function (a) {
        return a ? (window.tinycolor(a).toHsl().l > 0.5 ? Constants.TOOL_HIGHLIGHT_COLOR_DARK : Constants.TOOL_HIGHLIGHT_COLOR_LIGHT) : Constants.TOOL_HIGHLIGHT_COLOR_DARK;
      }),
      (a.BaseTool.prototype.hideHighlightedPixel = function (a) {
        null !== this.highlightedPixelRow && null !== this.highlightedPixelCol && (a.clear(), (this.highlightedPixelRow = null), (this.highlightedPixelCol = null));
      }),
      (a.BaseTool.prototype.releaseToolAt = function (a, b, c, d, e) {}),
      (a.BaseTool.prototype.supportsAlt = function () {
        return !1;
      });
  })(),
  (function () {
    var a = $.namespace("pskl.tools.drawing");
    (a.ShapeTool = function () {
      (this.startCol = null), (this.startRow = null), (this.tooltipDescriptors = [{ key: "shift", description: "Keep 1 to 1 ratio" }]);
    }),
      pskl.utils.inherit(a.ShapeTool, a.BaseTool),
      (a.ShapeTool.prototype.supportsDynamicPenSize = function () {
        return !0;
      }),
      (a.ShapeTool.prototype.applyToolAt = function (a, b, c, d, e) {
        $.publish(Events.DRAG_START, [a, b]), (this.startCol = a), (this.startRow = b);
        var f = pskl.app.penSizeService.getPenSize();
        this.draw(a, b, this.getToolColor(), d, f);
      }),
      (a.ShapeTool.prototype.moveToolAt = function (a, b, c, d, e) {
        var f = this.getCoordinates_(a, b, e);
        $.publish(Events.CURSOR_MOVED, [f.col, f.row]), d.clear();
        var g = this.getToolColor();
        g == Constants.TRANSPARENT_COLOR && (g = Constants.SELECTION_TRANSPARENT_COLOR);
        var h = pskl.app.penSizeService.getPenSize();
        this.draw(f.col, f.row, g, d, h);
      }),
      (a.ShapeTool.prototype.releaseToolAt = function (a, b, c, d, e) {
        d.clear();
        var f = this.getCoordinates_(a, b, e),
          g = this.getToolColor(),
          h = pskl.app.penSizeService.getPenSize();
        this.draw(f.col, f.row, g, c, h), $.publish(Events.DRAG_END), this.raiseSaveStateEvent({ col: f.col, row: f.row, startCol: this.startCol, startRow: this.startRow, color: g, penSize: h });
      }),
      (a.ShapeTool.prototype.replay = function (a, b) {
        (this.startCol = b.startCol), (this.startRow = b.startRow), this.draw(b.col, b.row, b.color, a, b.penSize);
      }),
      (a.ShapeTool.prototype.getCoordinates_ = function (a, b, c) {
        return c.shiftKey ? this.getScaledCoordinates_(a, b) : { col: a, row: b };
      }),
      (a.ShapeTool.prototype.getScaledCoordinates_ = function (a, b) {
        var c = this.startCol - a,
          d = Math.abs(c),
          e = this.startRow - b,
          f = Math.abs(e),
          g = Math.min(d, f);
        return (b = this.startRow - (e / f) * g), (a = this.startCol - (c / d) * g), { col: a, row: b };
      }),
      (a.ShapeTool.prototype.draw = Constants.ABSTRACT_FUNCTION);
  })(),
  (function () {
    var a = $.namespace("pskl.tools.drawing");
    (a.SimplePen = function () {
      (this.toolId = "tool-pen"), (this.helpText = "Pen tool"), (this.shortcut = pskl.service.keyboard.Shortcuts.TOOL.PEN), (this.previousCol = null), (this.previousRow = null), (this.pixels = []);
    }),
      pskl.utils.inherit(a.SimplePen, a.BaseTool),
      (a.SimplePen.prototype.supportsDynamicPenSize = function () {
        return !0;
      }),
      (a.SimplePen.prototype.applyToolAt = function (a, b, c, d, e) {
        (this.previousCol = a), (this.previousRow = b);
        var f = this.getToolColor();
        this.drawUsingPenSize(f, a, b, c, d);
      }),
      (a.SimplePen.prototype.drawUsingPenSize = function (a, b, c, d, e) {
        var f = pskl.app.penSizeService.getPenSize();
        pskl.PixelUtils.resizePixel(b, c, f).forEach(
          function (b) {
            this.draw(a, b[0], b[1], d, e);
          }.bind(this)
        );
      }),
      (a.SimplePen.prototype.draw = function (a, b, c, d, e) {
        e.setPixel(b, c, a), a === Constants.TRANSPARENT_COLOR && d.setPixel(b, c, a), this.pixels.push({ col: b, row: c, color: a });
      }),
      (a.SimplePen.prototype.moveToolAt = function (a, b, c, d, e) {
        if (Math.abs(a - this.previousCol) > 1 || Math.abs(b - this.previousRow) > 1)
          for (var f = pskl.PixelUtils.getLinePixels(a, this.previousCol, b, this.previousRow), g = 0, h = f.length; g < h; g++) {
            var i = f[g];
            this.applyToolAt(i.col, i.row, c, d, e);
          }
        else this.applyToolAt(a, b, c, d, e);
        (this.previousCol = a), (this.previousRow = b);
      }),
      (a.SimplePen.prototype.releaseToolAt = function (a, b, c, d, e) {
        this.setPixelsToFrame_(c, this.pixels), this.raiseSaveStateEvent({ pixels: this.pixels.slice(0), color: this.getToolColor() }), this.resetUsedPixels_();
      }),
      (a.SimplePen.prototype.replay = function (a, b) {
        this.setPixelsToFrame_(a, b.pixels, b.color);
      }),
      (a.SimplePen.prototype.setPixelsToFrame_ = function (a, b, c) {
        b.forEach(function (b) {
          a.setPixel(b.col, b.row, b.color);
        });
      }),
      (a.SimplePen.prototype.resetUsedPixels_ = function () {
        this.pixels = [];
      });
  })(),
  (function () {
    var a = $.namespace("pskl.tools.drawing");
    (a.Lighten = function () {
      this.superclass.constructor.call(this),
        (this.toolId = "tool-lighten"),
        (this.helpText = "Lighten"),
        (this.shortcut = pskl.service.keyboard.Shortcuts.TOOL.LIGHTEN),
        (this.tooltipDescriptors = [
          { key: "ctrl", description: "Darken" },
          { key: "shift", description: "Apply only once per pixel" },
        ]);
    }),
      pskl.utils.inherit(a.Lighten, a.SimplePen),
      (a.Lighten.prototype.applyToolAt = function (a, b, c, d, e) {
        (this.previousCol = a), (this.previousRow = b);
        var f = pskl.app.penSizeService.getPenSize();
        pskl.PixelUtils.resizePixel(a, b, f).forEach(
          function (a) {
            var b = this.getModifiedColor_(a[0], a[1], c, d, e);
            this.draw(b, a[0], a[1], c, d);
          }.bind(this)
        );
      }),
      (a.Lighten.prototype.getModifiedColor_ = function (a, b, c, d, e) {
        var f = d.getPixel(a, b),
          g = c.getPixel(a, b),
          h = f !== pskl.utils.colorToInt(Constants.TRANSPARENT_COLOR),
          i = h ? f : g;
        if (i === pskl.utils.colorToInt(Constants.TRANSPARENT_COLOR)) return Constants.TRANSPARENT_COLOR;
        var j = e.shiftKey;
        if (j && h) return i;
        var k,
          l = j ? 6 : 3,
          m = pskl.utils.UserAgent.isMac ? e.metaKey : e.ctrlKey;
        return (k = m ? window.tinycolor.darken(pskl.utils.intToColor(i), l) : window.tinycolor.lighten(pskl.utils.intToColor(i), l)), k.toHexString();
      });
  })(),
  (function () {
    var a = $.namespace("pskl.tools.drawing");
    (a.VerticalMirrorPen = function () {
      this.superclass.constructor.call(this),
        (this.toolId = "tool-vertical-mirror-pen"),
        (this.helpText = "Vertical Mirror pen"),
        (this.shortcut = pskl.service.keyboard.Shortcuts.TOOL.MIRROR_PEN),
        (this.tooltipDescriptors = [
          { key: "ctrl", description: "Use horizontal axis" },
          { key: "shift", description: "Use horizontal and vertical axis" },
        ]);
    }),
      pskl.utils.inherit(a.VerticalMirrorPen, a.SimplePen),
      (a.VerticalMirrorPen.prototype.applyToolAt = function (a, b, c, d, e) {
        var f = this.getToolColor();
        this.drawUsingPenSize(f, a, b, c, d);
        var g = this.getSymmetricCol_(a, c),
          h = this.getSymmetricRow_(b, c),
          i = pskl.utils.UserAgent.isMac ? e.metaKey : e.ctrlKey;
        i || this.drawUsingPenSize(f, g, b, c, d), (e.shiftKey || i) && this.drawUsingPenSize(f, a, h, c, d), e.shiftKey && this.drawUsingPenSize(f, g, h, c, d), (this.previousCol = a), (this.previousRow = b);
      }),
      (a.VerticalMirrorPen.prototype.getSymmetricCol_ = function (a, b) {
        return b.getWidth() - a - 1;
      }),
      (a.VerticalMirrorPen.prototype.getSymmetricRow_ = function (a, b) {
        return b.getHeight() - a - 1;
      });
  })(),
  (function () {
    var a = $.namespace("pskl.tools.drawing");
    (a.Eraser = function () {
      this.superclass.constructor.call(this), (this.toolId = "tool-eraser"), (this.helpText = "Eraser tool"), (this.shortcut = pskl.service.keyboard.Shortcuts.TOOL.ERASER);
    }),
      pskl.utils.inherit(a.Eraser, a.SimplePen),
      (a.Eraser.prototype.getToolColor = function () {
        return Constants.TRANSPARENT_COLOR;
      });
  })(),
  (function () {
    var a = $.namespace("pskl.tools.drawing");
    (a.Stroke = function () {
      (this.toolId = "tool-stroke"),
        (this.helpText = "Stroke tool"),
        (this.shortcut = pskl.service.keyboard.Shortcuts.TOOL.STROKE),
        (this.tooltipDescriptors = [{ key: "shift", description: "Hold shift to draw straight lines" }]),
        (this.startCol = null),
        (this.startRow = null);
    }),
      pskl.utils.inherit(a.Stroke, a.BaseTool),
      (a.Stroke.prototype.supportsDynamicPenSize = function () {
        return !0;
      }),
      (a.Stroke.prototype.applyToolAt = function (a, b, c, d, e) {
        (this.startCol = a), (this.startRow = b), d.setPixel(a, b, this.getToolColor());
      }),
      (a.Stroke.prototype.moveToolAt = function (a, b, c, d, e) {
        d.clear();
        var f = pskl.app.penSizeService.getPenSize(),
          g = e.shiftKey,
          h = this.getToolColor();
        h == Constants.TRANSPARENT_COLOR && (h = Constants.SELECTION_TRANSPARENT_COLOR), this.draw_(a, b, h, d, f, g);
      }),
      (a.Stroke.prototype.releaseToolAt = function (a, b, c, d, e) {
        var f = pskl.app.penSizeService.getPenSize(),
          g = e.shiftKey,
          h = this.getToolColor();
        this.draw_(a, b, h, c, f, g), d.clear(), this.raiseSaveStateEvent({ col: a, row: b, startCol: this.startCol, startRow: this.startRow, color: h, penSize: f, isStraight: g });
      }),
      (a.Stroke.prototype.draw_ = function (a, b, c, d, e, f) {
        var g;
        (g = f ? pskl.PixelUtils.getUniformLinePixels(this.startCol, a, this.startRow, b) : pskl.PixelUtils.getLinePixels(a, this.startCol, b, this.startRow)),
          pskl.PixelUtils.resizePixels(g, e).forEach(function (a) {
            d.setPixel(a[0], a[1], c);
          });
      }),
      (a.Stroke.prototype.replay = function (a, b) {
        (this.startCol = b.startCol), (this.startRow = b.startRow), this.draw_(b.col, b.row, b.color, a, b.penSize, b.isStraight);
      });
  })(),
  (function () {
    var a = $.namespace("pskl.tools.drawing");
    (a.PaintBucket = function () {
      (this.toolId = "tool-paint-bucket"), (this.helpText = "Paint bucket tool"), (this.shortcut = pskl.service.keyboard.Shortcuts.TOOL.PAINT_BUCKET);
    }),
      pskl.utils.inherit(a.PaintBucket, a.BaseTool),
      (a.PaintBucket.prototype.applyToolAt = function (a, b, c, d, e) {
        var f = this.getToolColor();
        pskl.PixelUtils.paintSimilarConnectedPixelsFromFrame(c, a, b, f), this.raiseSaveStateEvent({ col: a, row: b, color: f });
      }),
      (a.PaintBucket.prototype.replay = function (a, b) {
        pskl.PixelUtils.paintSimilarConnectedPixelsFromFrame(a, b.col, b.row, b.color);
      });
  })(),
  (function () {
    var a = $.namespace("pskl.tools.drawing");
    (a.Rectangle = function () {
      a.ShapeTool.call(this), (this.toolId = "tool-rectangle"), (this.helpText = "Rectangle tool"), (this.shortcut = pskl.service.keyboard.Shortcuts.TOOL.RECTANGLE);
    }),
      pskl.utils.inherit(a.Rectangle, a.ShapeTool),
      (a.Rectangle.prototype.draw = function (a, b, c, d, e) {
        for (var f = pskl.PixelUtils.getOrderedRectangleCoordinates(this.startCol, this.startRow, a, b), g = f.x0; g <= f.x1; g++)
          for (var h = f.y0; h <= f.y1; h++) (g > f.x1 - e || g < f.x0 + e || h > f.y1 - e || h < f.y0 + e) && d.setPixel(g, h, c);
      });
  })(),
  (function () {
    var a = $.namespace("pskl.tools.drawing");
    (a.Circle = function () {
      a.ShapeTool.call(this), (this.toolId = "tool-circle"), (this.helpText = "Circle tool"), (this.shortcut = pskl.service.keyboard.Shortcuts.TOOL.CIRCLE);
    }),
      pskl.utils.inherit(a.Circle, a.ShapeTool),
      (a.Circle.prototype.draw = function (a, b, c, d, e) {
        this.getCirclePixels_(this.startCol, this.startRow, a, b, e).forEach(function (a) {
          d.setPixel(a[0], a[1], c);
        });
      }),
      (a.Circle.prototype.getCirclePixels_ = function (a, b, c, d, e) {
        var f,
          g,
          h,
          i,
          j = pskl.PixelUtils.getOrderedRectangleCoordinates(a, b, c, d),
          k = [],
          l = Math.round((j.x0 + j.x1) / 2),
          m = Math.round((j.y0 + j.y1) / 2),
          n = (j.x0 + j.x1) % 2,
          o = (j.y0 + j.y1) % 2,
          p = j.x1 - l,
          q = j.y1 - m;
        if (1 == e) {
          for (f = j.x0; f <= l; f++) (h = Math.acos((f - l) / p)), (g = Math.round(q * Math.sin(h) + m)), k.push([f - n, g]), k.push([f - n, 2 * m - g - o]), k.push([2 * l - f, g]), k.push([2 * l - f, 2 * m - g - o]);
          for (g = j.y0; g <= m; g++) (h = Math.asin((g - m) / q)), (f = Math.round(p * Math.cos(h) + l)), k.push([f, g - o]), k.push([2 * l - f - n, g - o]), k.push([f, 2 * m - g]), k.push([2 * l - f - n, 2 * m - g]);
          return k;
        }
        var r = p - e,
          s = q - e;
        for (r < 0 && (r = 0), s < 0 && (s = 0), f = 0; f <= p; f++)
          for (g = 0; g <= q; g++)
            (h = Math.atan(g / f)),
              (i = Math.sqrt(f * f + g * g)),
              (p <= e || q <= e || i > (r * s) / Math.sqrt(s * s * Math.pow(Math.cos(h), 2) + r * r * Math.pow(Math.sin(h), 2)) + 0.5) &&
                i < (p * q) / Math.sqrt(q * q * Math.pow(Math.cos(h), 2) + p * p * Math.pow(Math.sin(h), 2)) + 0.5 &&
                (k.push([l + f, m + g]), k.push([l - f - n, m + g]), k.push([l + f, m - g - o]), k.push([l - f - n, m - g - o]));
        return k;
      });
  })(),
  (function () {
    var a = $.namespace("pskl.tools.drawing");
    (a.Move = function () {
      (this.toolId = a.Move.TOOL_ID),
        (this.helpText = "Move tool"),
        (this.shortcut = pskl.service.keyboard.Shortcuts.TOOL.MOVE),
        (this.tooltipDescriptors = [
          { key: "ctrl", description: "Apply to all layers" },
          { key: "shift", description: "Apply to all frames" },
          { key: "alt", description: "Wrap canvas borders" },
        ]),
        (this.startCol = null),
        (this.startRow = null);
    }),
      (a.Move.TOOL_ID = "tool-move"),
      pskl.utils.inherit(a.Move, a.BaseTool),
      (a.Move.prototype.applyToolAt = function (a, b, c, d, e) {
        (this.startCol = a), (this.startRow = b), (this.currentFrame = c), (this.currentFrameClone = c.clone());
      }),
      (a.Move.prototype.moveToolAt = function (a, b, c, d, e) {
        var f = a - this.startCol,
          g = b - this.startRow;
        this.shiftFrame(f, g, c, this.currentFrameClone, e);
      }),
      (a.Move.prototype.shiftFrame = function (a, b, c, d, e) {
        for (var f, g = c.getWidth(), h = c.getHeight(), i = 0; i < g; i++)
          for (var j = 0; j < h; j++) {
            var k = i - a,
              l = j - b;
            e.altKey && ((k = (k + g) % g), (l = (l + h) % h)), (f = d.containsPixel(k, l) ? d.getPixel(k, l) : Constants.TRANSPARENT_COLOR), c.setPixel(i, j, f);
          }
      }),
      (a.Move.prototype.releaseToolAt = function (a, b, c, d, e) {
        var f = a - this.startCol,
          g = b - this.startRow,
          h = pskl.utils.UserAgent.isMac ? e.metaKey : e.ctrlKey;
        pskl.tools.ToolsHelper.getTargetFrames(h, e.shiftKey).forEach(
          function (a) {
            var b = this.currentFrame == a ? this.currentFrameClone : a.clone();
            this.shiftFrame(f, g, a, b, e);
          }.bind(this)
        ),
          this.raiseSaveStateEvent({ colDiff: f, rowDiff: g, ctrlKey: h, altKey: e.altKey, shiftKey: e.shiftKey });
      }),
      (a.Move.prototype.replay = function (a, b) {
        var c = { shiftKey: b.shiftKey, altKey: b.altKey, ctrlKey: b.ctrlKey };
        pskl.tools.ToolsHelper.getTargetFrames(c.ctrlKey, c.shiftKey).forEach(
          function (a) {
            this.shiftFrame(b.colDiff, b.rowDiff, a, a.clone(), c);
          }.bind(this)
        );
      }),
      (a.Move.prototype.supportsAlt = function () {
        return !0;
      });
  })(),
  (function () {
    var a = $.namespace("pskl.tools.drawing.selection");
    (a.BaseSelect = function () {
      (this.secondaryToolId = pskl.tools.drawing.Move.TOOL_ID),
        (this.bodyRoot = $("body")),
        (this.startCol = null),
        (this.startRow = null),
        (this.lastMoveCol = null),
        (this.lastMoveRow = null),
        (this.selection = null),
        (this.hasSelection = !1),
        (this.tooltipDescriptors = [
          { description: "Drag the selection to move it. You may switch to other layers and frames." },
          { key: "ctrl+c", description: "Copy the selected area" },
          { key: "ctrl+v", description: "Paste the copied area" },
          { key: "shift", description: "Hold to move the content" },
        ]);
    }),
      pskl.utils.inherit(a.BaseSelect, pskl.tools.drawing.BaseTool),
      (a.BaseSelect.prototype.applyToolAt = function (a, b, c, d, e) {
        (this.startCol = a),
          (this.startRow = b),
          (this.lastMoveCol = a),
          (this.lastMoveRow = b),
          this.isInSelection(a, b)
            ? ((this.mode = "moveSelection"), e.shiftKey && !this.isMovingContent_ && ((this.isMovingContent_ = !0), $.publish(Events.SELECTION_CUT), this.drawSelectionOnOverlay_(d)), this.onSelectionMoveStart_(a, b, c, d))
            : ((this.mode = "select"), this.onSelectStart_(a, b, c, d));
      }),
      (a.BaseSelect.prototype.moveToolAt = function (a, b, c, d, e) {
        "select" == this.mode ? this.onSelect_(a, b, c, d) : "moveSelection" == this.mode && this.onSelectionMove_(a, b, c, d);
      }),
      (a.BaseSelect.prototype.releaseToolAt = function (a, b, c, d, e) {
        "select" == this.mode ? this.onSelectEnd_(a, b, c, d) : "moveSelection" == this.mode && this.onSelectionMoveEnd_(a, b, c, d);
      }),
      (a.BaseSelect.prototype.moveUnactiveToolAt = function (a, b, c, d, e) {
        d.containsPixel(a, b) && (this.isInSelection(a, b) ? (this.bodyRoot.addClass(this.secondaryToolId), this.bodyRoot.removeClass(this.toolId)) : (this.bodyRoot.addClass(this.toolId), this.bodyRoot.removeClass(this.secondaryToolId))),
          this.hasSelection || pskl.tools.drawing.BaseTool.prototype.moveUnactiveToolAt.apply(this, arguments);
      }),
      (a.BaseSelect.prototype.isInSelection = function (a, b) {
        return (
          this.selection &&
          this.selection.pixels.some(function (c) {
            return c.col === a && c.row === b;
          })
        );
      }),
      (a.BaseSelect.prototype.commitSelection = function (a) {
        this.isMovingContent_ && ($.publish(Events.SELECTION_PASTE), (this.isMovingContent_ = !1)), $.publish(Events.SELECTION_DISMISSED), a.clear(), (this.hasSelection = !1);
      }),
      (a.BaseSelect.prototype.drawSelectionOnOverlay_ = function (a) {
        for (var b = this.selection.pixels, c = 0, d = b.length; c < d; c++) {
          var e = b[c],
            f = e.color && e.color !== Constants.TRANSPARENT_COLOR,
            g = f ? this.getTransparentVariant_(e.color) : Constants.SELECTION_TRANSPARENT_COLOR;
          a.setPixel(b[c].col, b[c].row, g);
        }
      }),
      (a.BaseSelect.prototype.getTransparentVariant_ = pskl.utils.FunctionUtils.memo(function (a) {
        var b = window.tinycolor(a);
        return (b = window.tinycolor.lighten(b, 10)), b.setAlpha(0.5), b.toRgbString();
      }, {})),
      (a.BaseSelect.prototype.onSelectStart_ = function (a, b, c, d) {}),
      (a.BaseSelect.prototype.onSelect_ = function (a, b, c, d) {}),
      (a.BaseSelect.prototype.onSelectEnd_ = function (a, b, c, d) {}),
      (a.BaseSelect.prototype.onSelectionMoveStart_ = function (a, b, c, d) {}),
      (a.BaseSelect.prototype.onSelectionMove_ = function (a, b, c, d) {
        var e = a - this.lastMoveCol,
          f = b - this.lastMoveRow;
        this.startCol, this.startRow;
        this.selection.move(e, f), d.clear(), this.drawSelectionOnOverlay_(d), (this.lastMoveCol = a), (this.lastMoveRow = b);
      }),
      (a.BaseSelect.prototype.onSelectionMoveEnd_ = function (a, b, c, d) {
        this.onSelectionMove_(a, b, c, d);
      });
  })(),
  (function () {
    var a = $.namespace("pskl.tools.drawing.selection");
    (a.AbstractDragSelect = function () {
      a.BaseSelect.call(this);
    }),
      pskl.utils.inherit(a.AbstractDragSelect, a.BaseSelect),
      (a.AbstractDragSelect.prototype.onSelectStart_ = function (a, b, c, d) {
        this.hasSelection ? ((this.hasSelection = !1), this.commitSelection(d)) : ((this.hasSelection = !0), this.onDragSelectStart_(a, b), d.setPixel(a, b, this.getTransparentVariant_(Constants.SELECTION_TRANSPARENT_COLOR)));
      }),
      (a.AbstractDragSelect.prototype.onSelect_ = function (a, b, c, d) {
        this.hasSelection || (this.startCol === a && this.startRow === b) || ((this.hasSelection = !0), this.onDragSelectStart_(a, b)), this.hasSelection && this.onDragSelect_(a, b, c, d);
      }),
      (a.AbstractDragSelect.prototype.onSelectEnd_ = function (a, b, c, d) {
        this.hasSelection && this.onDragSelectEnd_(a, b, c, d);
      }),
      (a.AbstractDragSelect.prototype.startDragSelection_ = function (a, b, c) {
        (this.hasSelection = !0), this.onDragSelectStart_(a, b), c.setPixel(a, b, this.getTransparentVariant_(Constants.SELECTION_TRANSPARENT_COLOR));
      }),
      (a.AbstractDragSelect.prototype.onDragSelectStart_ = function (a, b, c, d) {}),
      (a.AbstractDragSelect.prototype.onDragSelect_ = function (a, b, c, d) {}),
      (a.AbstractDragSelect.prototype.onDragSelectEnd_ = function (a, b, c, d) {});
  })(),
  (function () {
    var a = $.namespace("pskl.tools.drawing.selection");
    (a.LassoSelect = function () {
      a.AbstractDragSelect.call(this), (this.toolId = "tool-lasso-select"), (this.helpText = "Lasso selection"), (this.shortcut = pskl.service.keyboard.Shortcuts.TOOL.LASSO_SELECT);
    }),
      pskl.utils.inherit(a.LassoSelect, a.AbstractDragSelect),
      (a.LassoSelect.prototype.onDragSelectStart_ = function (a, b) {
        (this.pixels = [{ col: a, row: b }]), (this.startCol = a), (this.startRow = b), (this.previousCol = a), (this.previousRow = b), $.publish(Events.DRAG_START, [a, b]);
      }),
      (a.LassoSelect.prototype.onDragSelect_ = function (a, b, c, d) {
        this.addPixel_(a, b, c);
        var e = new pskl.selection.ShapeSelection(this.getLassoPixels_());
        this.setSelection_(e, d);
      }),
      (a.LassoSelect.prototype.onDragSelectEnd_ = function (a, b, c, d) {
        this.addPixel_(a, b, c);
        var e = new pskl.selection.LassoSelection(this.getLassoPixels_(), c);
        this.setSelection_(e, d), $.publish(Events.DRAG_END);
      }),
      (a.LassoSelect.prototype.getLassoPixels_ = function () {
        var a = pskl.PixelUtils.getLinePixels(this.previousCol, this.startCol, this.previousRow, this.startRow);
        return this.pixels.concat(a);
      }),
      (a.LassoSelect.prototype.addPixel_ = function (a, b, c) {
        (a = pskl.utils.Math.minmax(a, 0, c.getWidth() - 1)), (b = pskl.utils.Math.minmax(b, 0, c.getHeight() - 1));
        var d = pskl.PixelUtils.getLinePixels(a, this.previousCol, b, this.previousRow);
        (this.pixels = this.pixels.concat(d)), (this.previousCol = a), (this.previousRow = b);
      }),
      (a.LassoSelect.prototype.setSelection_ = function (a, b) {
        (this.selection = a), $.publish(Events.SELECTION_CREATED, [this.selection]), b.clear(), this.drawSelectionOnOverlay_(b);
      });
  })(),
  (function () {
    var a = $.namespace("pskl.tools.drawing.selection");
    (a.RectangleSelect = function () {
      a.AbstractDragSelect.call(this), (this.toolId = "tool-rectangle-select"), (this.helpText = "Rectangle selection"), (this.shortcut = pskl.service.keyboard.Shortcuts.TOOL.RECTANGLE_SELECT);
    }),
      pskl.utils.inherit(a.RectangleSelect, a.AbstractDragSelect),
      (a.RectangleSelect.prototype.onDragSelectStart_ = function (a, b) {
        $.publish(Events.DRAG_START, [a, b]);
      }),
      (a.RectangleSelect.prototype.onDragSelect_ = function (a, b, c, d) {
        d.clear(), (this.selection = new pskl.selection.RectangularSelection(this.startCol, this.startRow, a, b)), $.publish(Events.SELECTION_CREATED, [this.selection]), this.drawSelectionOnOverlay_(d);
      }),
      (a.RectangleSelect.prototype.onDragSelectEnd_ = function (a, b, c, d) {
        this.onSelect_(a, b, c, d), $.publish(Events.DRAG_END);
      });
  })(),
  (function () {
    var a = $.namespace("pskl.tools.drawing.selection");
    (a.ShapeSelect = function () {
      a.BaseSelect.call(this), (this.toolId = "tool-shape-select"), (this.helpText = "Shape selection"), (this.shortcut = pskl.service.keyboard.Shortcuts.TOOL.SHAPE_SELECT);
    }),
      pskl.utils.inherit(a.ShapeSelect, a.BaseSelect),
      (a.ShapeSelect.prototype.onSelectStart_ = function (a, b, c, d) {
        if (this.hasSelection) (this.hasSelection = !1), this.commitSelection(d);
        else {
          this.hasSelection = !0;
          var e = pskl.PixelUtils.getSimilarConnectedPixelsFromFrame(c, a, b);
          (this.selection = new pskl.selection.ShapeSelection(e)), $.publish(Events.SELECTION_CREATED, [this.selection]), this.drawSelectionOnOverlay_(d);
        }
      });
  })(),
  (function () {
    var a = $.namespace("pskl.tools.drawing");
    (a.ColorPicker = function () {
      (this.toolId = "tool-colorpicker"), (this.helpText = "Color picker"), (this.shortcut = pskl.service.keyboard.Shortcuts.TOOL.COLORPICKER);
    }),
      pskl.utils.inherit(a.ColorPicker, a.BaseTool),
      (a.ColorPicker.prototype.applyToolAt = function (a, b, c, d, e) {
        if (c.containsPixel(a, b)) {
          var f = pskl.utils.intToColor(c.getPixel(a, b));
          pskl.app.mouseStateService.isLeftButtonPressed() ? $.publish(Events.SELECT_PRIMARY_COLOR, [f]) : pskl.app.mouseStateService.isRightButtonPressed() && $.publish(Events.SELECT_SECONDARY_COLOR, [f]);
        }
      });
  })(),
  (function () {
    var a = $.namespace("pskl.tools.drawing");
    (a.ColorSwap = function () {
      (this.toolId = "tool-colorswap"),
        (this.helpText = "Paint all pixels of the same color"),
        (this.shortcut = pskl.service.keyboard.Shortcuts.TOOL.COLORSWAP),
        (this.tooltipDescriptors = [
          { key: "ctrl", description: "Apply to all layers" },
          { key: "shift", description: "Apply to all frames" },
        ]);
    }),
      pskl.utils.inherit(a.ColorSwap, a.BaseTool),
      (a.ColorSwap.prototype.applyToolAt = function (a, b, c, d, e) {
        if (c.containsPixel(a, b)) {
          var f = c.getPixel(a, b),
            g = this.getToolColor(),
            h = pskl.utils.UserAgent.isMac ? e.metaKey : e.ctrlKey,
            i = e.shiftKey;
          this.swapColors_(f, g, h, i), this.raiseSaveStateEvent({ allLayers: h, allFrames: i, oldColor: f, newColor: g });
        }
      }),
      (a.ColorSwap.prototype.replay = function (a, b) {
        this.swapColors_(b.oldColor, b.newColor, b.allLayers, b.allFrames);
      }),
      (a.ColorSwap.prototype.swapColors_ = function (a, b, c, d) {
        var e = pskl.app.piskelController.getCurrentFrameIndex();
        (c ? pskl.app.piskelController.getLayers() : [pskl.app.piskelController.getCurrentLayer()]).forEach(
          function (c) {
            (d ? c.getFrames() : [c.getFrameAt(e)]).forEach(
              function (c) {
                this.applyToolOnFrame_(c, a, b);
              }.bind(this)
            );
          }.bind(this)
        );
      }),
      (a.ColorSwap.prototype.applyToolOnFrame_ = function (a, b, c) {
        (b = pskl.utils.colorToInt(b)),
          (c = pskl.utils.colorToInt(c)),
          a.forEachPixel(function (d, e, f) {
            null !== d && d == b && a.setPixel(e, f, c);
          });
      });
  })(),
  (function () {
    var a = $.namespace("pskl.tools.drawing");
    (a.DitheringTool = function () {
      a.SimplePen.call(this), (this.toolId = "tool-dithering"), (this.helpText = "Dithering tool"), (this.shortcut = pskl.service.keyboard.Shortcuts.TOOL.DITHERING);
    }),
      pskl.utils.inherit(a.DitheringTool, a.SimplePen),
      (a.DitheringTool.prototype.supportsDynamicPenSize = function () {
        return !0;
      }),
      (a.DitheringTool.prototype.applyToolAt = function (a, b, c, d, e) {
        (this.previousCol = a), (this.previousRow = b);
        var f = pskl.app.penSizeService.getPenSize();
        pskl.PixelUtils.resizePixel(a, b, f).forEach(
          function (a) {
            this.applyToolOnPixel(a[0], a[1], c, d, e);
          }.bind(this)
        );
      }),
      (a.DitheringTool.prototype.applyToolOnPixel = function (a, b, c, d, e) {
        var f = (a + b) % 2;
        pskl.app.mouseStateService.isRightButtonPressed() && (f = !f);
        var g = f ? pskl.app.selectedColorsService.getPrimaryColor() : pskl.app.selectedColorsService.getSecondaryColor();
        this.draw(g, a, b, c, d);
      });
  })(),
  (function () {
    var a = $.namespace("pskl.tools.transform");
    (a.AbstractTransformTool = function () {}),
      pskl.utils.inherit(a.AbstractTransformTool, pskl.tools.Tool),
      (a.AbstractTransformTool.prototype.applyTransformation = function (a) {
        var b = a.shiftKey,
          c = pskl.utils.UserAgent.isMac ? a.metaKey : a.ctrlKey;
        this.applyTool_(a.altKey, b, c), $.publish(Events.PISKEL_RESET), this.raiseSaveStateEvent({ altKey: a.altKey, allFrames: b, allLayers: c });
      }),
      (a.AbstractTransformTool.prototype.applyTool_ = function (a, b, c) {
        var d = pskl.app.piskelController.getCurrentFrameIndex();
        (c ? pskl.app.piskelController.getLayers() : [pskl.app.piskelController.getCurrentLayer()]).forEach(
          function (c) {
            (b ? c.getFrames() : [c.getFrameAt(d)]).forEach(
              function (b) {
                this.applyToolOnFrame_(b, a);
              }.bind(this)
            );
          }.bind(this)
        );
      }),
      (a.AbstractTransformTool.prototype.replay = function (a, b) {
        this.applyTool_(b.altKey, b.allFrames, b.allLayers);
      });
  })(),
  (function () {
    var a = $.namespace("pskl.tools.transform");
    (a.Center = function () {
      (this.toolId = "tool-center"),
        (this.helpText = "Align image to the center"),
        (this.tooltipDescriptors = [
          { key: "ctrl", description: "Apply to all layers" },
          { key: "shift", description: "Apply to all frames" },
        ]);
    }),
      pskl.utils.inherit(a.Center, a.AbstractTransformTool),
      (a.Center.prototype.applyToolOnFrame_ = function (b) {
        a.TransformUtils.center(b);
      });
  })(),
  (function () {
    var a = $.namespace("pskl.tools.transform");
    (a.Clone = function () {
      (this.toolId = "tool-clone"), (this.helpText = "Clone current layer to all frames"), (this.tooltipDescriptors = []);
    }),
      pskl.utils.inherit(a.Clone, a.AbstractTransformTool),
      (a.Clone.prototype.applyTool_ = function (a, b, c) {
        var d = pskl.app.piskelController.getCurrentFrame();
        pskl.app.piskelController
          .getCurrentLayer()
          .getFrames()
          .forEach(function (a) {
            a !== d && a.setPixels(d.getPixels());
          });
      });
  })(),
  (function () {
    var a = $.namespace("pskl.tools.transform");
    (a.Flip = function () {
      (this.toolId = "tool-flip"),
        (this.helpText = "Flip vertically"),
        (this.tooltipDescriptors = [
          { key: "alt", description: "Flip horizontally" },
          { key: "ctrl", description: "Apply to all layers" },
          { key: "shift", description: "Apply to all frames" },
        ]);
    }),
      pskl.utils.inherit(a.Flip, a.AbstractTransformTool),
      (a.Flip.prototype.applyToolOnFrame_ = function (b, c) {
        var d;
        (d = c ? a.TransformUtils.HORIZONTAL : a.TransformUtils.VERTICAL), a.TransformUtils.flip(b, d);
      });
  })(),
  (function () {
    var a = $.namespace("pskl.tools.transform");
    (a.Rotate = function () {
      (this.toolId = "tool-rotate"),
        (this.helpText = "Counter-clockwise rotation"),
        (this.tooltipDescriptors = [
          { key: "alt", description: "Clockwise rotation" },
          { key: "ctrl", description: "Apply to all layers" },
          { key: "shift", description: "Apply to all frames" },
        ]);
    }),
      pskl.utils.inherit(a.Rotate, a.AbstractTransformTool),
      (a.Rotate.prototype.applyToolOnFrame_ = function (b, c) {
        var d;
        (d = c ? a.TransformUtils.CLOCKWISE : a.TransformUtils.COUNTERCLOCKWISE), a.TransformUtils.rotate(b, d);
      });
  })(),
  (function () {
    var a = $.namespace("pskl.tools.transform");
    a.TransformUtils = {
      VERTICAL: "VERTICAL",
      HORIZONTAL: "HORIZONTAL",
      flip: function (b, c) {
        var d = b.clone(),
          e = b.getWidth(),
          f = b.getHeight();
        return (
          d.forEachPixel(function (d, g, h) {
            c === a.TransformUtils.VERTICAL ? (g = e - g - 1) : c === a.TransformUtils.HORIZONTAL && (h = f - h - 1), b.setPixel(g, h, d);
          }),
          b
        );
      },
      CLOCKWISE: "clockwise",
      COUNTERCLOCKWISE: "counterclockwise",
      rotate: function (b, c) {
        var d = b.clone(),
          e = b.getWidth(),
          f = b.getHeight(),
          g = Math.max(e, f),
          h = Math.ceil((g - e) / 2),
          i = Math.ceil((g - f) / 2);
        return (
          b.forEachPixel(function (e, f, j) {
            var k = f,
              l = j;
            (f += h), (j += i);
            var m = f,
              n = j;
            c === a.TransformUtils.CLOCKWISE ? ((f = n), (j = g - 1 - m)) : c === a.TransformUtils.COUNTERCLOCKWISE && ((j = m), (f = g - 1 - n)),
              (f -= h),
              (j -= i),
              d.containsPixel(f, j) ? b.setPixel(k, l, d.getPixel(f, j)) : b.setPixel(k, l, Constants.TRANSPARENT_COLOR);
          }),
          b
        );
      },
      center: function (a) {
        var b = a.width,
          c = a.height,
          d = 0,
          e = 0,
          f = pskl.utils.colorToInt(Constants.TRANSPARENT_COLOR);
        a.forEachPixel(function (a, g, h) {
          a !== f && ((b = Math.min(b, g)), (d = Math.max(d, g)), (c = Math.min(c, h)), (e = Math.max(e, h)));
        });
        var g = (d - b + 1) / 2,
          h = (e - c + 1) / 2,
          i = a.width / 2,
          j = a.height / 2,
          k = Math.floor(i - g - b),
          l = Math.floor(j - h - c),
          m = a.clone();
        return (
          a.forEachPixel(function (b, c, d) {
            var e = c,
              f = d;
            (c -= k), (d -= l), m.containsPixel(c, d) ? a.setPixel(e, f, m.getPixel(c, d)) : a.setPixel(e, f, Constants.TRANSPARENT_COLOR);
          }),
          a
        );
      },
    };
  })(),
  (function () {
    var a = $.namespace("pskl.worker.framecolors");
    if ("rgba(0, 0, 0, 0)" !== Constants.TRANSPARENT_COLOR) throw "Constants.TRANSPARENT_COLOR, please update FrameColorsWorker";
    a.FrameColorsWorker = function () {
      var a = function (a) {
        for (var b = {}, c = this.TRANSPARENT_COLOR, d = 0, e = 0, f = a.length; e < f && d < this.MAX_WORKER_COLORS; e++) {
          var g = a[e];
          g !== c && (b[g] || ((b[g] = !0), d++));
        }
        return b;
      };
      this.onmessage = function (b) {
        try {
          (this.TRANSPARENT_COLOR = b.data[0]), (this.MAX_WORKER_COLORS = b.data[1]);
          var c = b.data[2],
            d = a(c);
          this.postMessage({ type: "SUCCESS", colors: d });
        } catch (a) {
          this.postMessage({ type: "ERROR", message: a.message });
        }
      };
    };
  })(),
  (function () {
    var a = $.namespace("pskl.worker.framecolors");
    (a.FrameColors = function (b, c, d, e) {
      (this.pixels = b.pixels),
        (this.onStep = d),
        (this.onSuccess = c),
        (this.onError = e),
        (this.worker = pskl.utils.WorkerUtils.createWorker(a.FrameColorsWorker, "frame-colors")),
        (this.worker.onmessage = this.onWorkerMessage.bind(this));
    }),
      (a.FrameColors.prototype.process = function () {
        this.worker.postMessage([pskl.utils.colorToInt(Constants.TRANSPARENT_COLOR), Constants.MAX_WORKER_COLORS, this.pixels]);
      }),
      (a.FrameColors.prototype.onWorkerMessage = function (a) {
        "STEP" === a.data.type ? this.onStep(a) : "SUCCESS" === a.data.type ? (this.onSuccess(a), this.worker.terminate()) : "ERROR" === a.data.type && (this.onError(a), this.worker.terminate());
      });
  })(),
  (function () {
    $.namespace("pskl.worker.hash").HashWorker = function () {
      var a = function (a) {
        var b = 0;
        if (0 !== a.length)
          for (var c = 0, d = a.length; c < d; c++) {
            var e = a.charCodeAt(c);
            (b = (b << 5) - b + e), (b |= 0);
          }
        return b;
      };
      this.onmessage = function (b) {
        try {
          var c = b.data,
            d = c.str,
            e = a(d);
          this.postMessage({ type: "SUCCESS", hash: e });
        } catch (a) {
          this.postMessage({ type: "ERROR", message: a.message });
        }
      };
    };
  })(),
  (function () {
    var a = $.namespace("pskl.worker.hash");
    (a.Hash = function (b, c, d, e) {
      (this.str = b), (this.onStep = d), (this.onSuccess = c), (this.onError = e), (this.worker = pskl.utils.WorkerUtils.createWorker(a.HashWorker, "hash")), (this.worker.onmessage = this.onWorkerMessage.bind(this));
    }),
      (a.Hash.prototype.process = function () {
        this.worker.postMessage({ str: this.str });
      }),
      (a.Hash.prototype.onWorkerMessage = function (a) {
        "STEP" === a.data.type ? this.onStep(a) : "SUCCESS" === a.data.type ? (this.onSuccess(a), this.worker.terminate()) : "ERROR" === a.data.type && (this.onError(a), this.worker.terminate());
      });
  })(),
  (function () {
    $.namespace("pskl.worker.imageprocessor").ImageProcessorWorker = function () {
      var a,
        b,
        c,
        d = function (d) {
          (a = 0), (b = 0), (c = d);
        },
        e = function () {
          a += 1;
          var d = ((a / c) * 100).toFixed(1);
          d != b && ((b = d), this.postMessage({ type: "STEP", progress: b, currentStep: a, total: c }));
        },
        f = function (a) {
          var b = a.toString(16);
          return 1 == b.length ? "0" + b : b;
        },
        g = function (a, b, c) {
          return "#" + f(a) + f(b) + f(c);
        },
        h = function (a, b, c, d) {
          for (var f = [], h = 0; h < b; h++) {
            (f[h] = []), e();
            for (var i = 0; i < c; i++) {
              var j = 4 * (i * b + h),
                k = a[j],
                l = a[j + 1],
                m = a[j + 2],
                n = a[j + 3];
              f[h][i] = n < 125 ? d : g(k, l, m);
            }
          }
          return f;
        },
        i = function (a, b, c) {
          for (var d = h(a, b, c, "transparent"), f = {}, g = 0; g < d.length; g++) {
            e();
            for (var i = 0; i < d[g].length; i++) {
              var j = d[g][i];
              "transparent" != j && (f[j] = !0);
            }
          }
          return f;
        };
      this.onmessage = function (a) {
        try {
          var b = a.data;
          d(2 * b.width);
          var c = i(b.imageData, b.width, b.height);
          this.postMessage({ type: "SUCCESS", colorsMap: c });
        } catch (a) {
          this.postMessage({ type: "ERROR", message: a.message });
        }
      };
    };
  })(),
  (function () {
    var a = $.namespace("pskl.worker.imageprocessor");
    (a.ImageProcessor = function (b, c, d, e) {
      (this.image = b),
        (this.onStep = d),
        (this.onSuccess = c),
        (this.onError = e),
        (this.worker = pskl.utils.WorkerUtils.createWorker(a.ImageProcessorWorker, "image-colors-processor")),
        (this.worker.onmessage = this.onWorkerMessage.bind(this));
    }),
      (a.ImageProcessor.prototype.process = function () {
        var a = pskl.utils.CanvasUtils.createFromImage(this.image),
          b = pskl.utils.CanvasUtils.getImageDataFromCanvas(a);
        this.worker.postMessage({ imageData: b, width: this.image.width, height: this.image.height });
      }),
      (a.ImageProcessor.prototype.onWorkerMessage = function (a) {
        "STEP" === a.data.type ? this.onStep(a) : "SUCCESS" === a.data.type ? (this.onSuccess(a), this.worker.terminate()) : "ERROR" === a.data.type && (this.onError(a), this.worker.terminate());
      });
  })(),
  (function () {
    $.namespace("pskl").app = {
      init: function () {
        (this.isAppEngineVersion = !!pskl.appEngineToken_), (this.shortcutService = new pskl.service.keyboard.ShortcutService()), this.shortcutService.init();
        var a = pskl.UserSettings.get(pskl.UserSettings.DEFAULT_SIZE),
          b = Constants.DEFAULT.FPS,
          c = new pskl.model.piskel.Descriptor("New Piskel", ""),
          d = new pskl.model.Piskel(a.width, a.height, b, c),
          e = new pskl.model.Layer("Layer 1"),
          f = new pskl.model.Frame(a.width, a.height);
        e.addFrame(f),
          d.addLayer(e),
          (this.corePiskelController = new pskl.controller.piskel.PiskelController(d)),
          this.corePiskelController.init(),
          (this.piskelController = new pskl.controller.piskel.PublicPiskelController(this.corePiskelController)),
          this.piskelController.init(),
          (this.paletteImportService = new pskl.service.palette.PaletteImportService()),
          this.paletteImportService.init(),
          (this.paletteService = new pskl.service.palette.PaletteService()),
          this.paletteService.addDynamicPalette(new pskl.service.palette.CurrentColorsPalette()),
          (this.selectedColorsService = new pskl.service.SelectedColorsService()),
          this.selectedColorsService.init(),
          (this.mouseStateService = new pskl.service.MouseStateService()),
          this.mouseStateService.init(),
          (this.paletteController = new pskl.controller.PaletteController()),
          this.paletteController.init(),
          (this.currentColorsService = new pskl.service.CurrentColorsService(this.piskelController)),
          this.currentColorsService.init(),
          (this.palettesListController = new pskl.controller.PalettesListController(this.currentColorsService)),
          this.palettesListController.init(),
          (this.cursorCoordinatesController = new pskl.controller.CursorCoordinatesController(this.piskelController)),
          this.cursorCoordinatesController.init(),
          (this.drawingController = new pskl.controller.DrawingController(this.piskelController, $("#drawing-canvas-container"))),
          this.drawingController.init(),
          (this.previewController = new pskl.controller.preview.PreviewController(this.piskelController, $("#animated-preview-canvas-container"))),
          this.previewController.init(),
          (this.minimapController = new pskl.controller.MinimapController(this.piskelController, this.previewController, this.drawingController, $(".minimap-container"))),
          this.minimapController.init(),
          (this.framesListController = new pskl.controller.FramesListController(this.piskelController, $("#preview-list-wrapper").get(0))),
          this.framesListController.init(),
          (this.layersListController = new pskl.controller.LayersListController(this.piskelController)),
          this.layersListController.init(),
          (this.settingsController = new pskl.controller.settings.SettingsController(this.piskelController)),
          this.settingsController.init(),
          (this.dialogsController = new pskl.controller.dialogs.DialogsController(this.piskelController)),
          this.dialogsController.init(),
          (this.toolController = new pskl.controller.ToolController()),
          this.toolController.init(),
          (this.selectionManager = new pskl.selection.SelectionManager(this.piskelController)),
          this.selectionManager.init(),
          (this.historyService = new pskl.service.HistoryService(this.piskelController)),
          this.historyService.init(),
          (this.notificationController = new pskl.controller.NotificationController()),
          this.notificationController.init(),
          (this.transformationsController = new pskl.controller.TransformationsController()),
          this.transformationsController.init(),
          (this.progressBarController = new pskl.controller.ProgressBarController()),
          this.progressBarController.init(),
          (this.canvasBackgroundController = new pskl.controller.CanvasBackgroundController()),
          this.canvasBackgroundController.init(),
          (this.localStorageService = new pskl.service.storage.LocalStorageService(this.piskelController)),
          this.localStorageService.init(),
          (this.fileDownloadStorageService = new pskl.service.storage.FileDownloadStorageService(this.piskelController)),
          this.fileDownloadStorageService.init(),
          (this.desktopStorageService = new pskl.service.storage.DesktopStorageService(this.piskelController)),
          this.desktopStorageService.init(),
          (this.galleryStorageService = new pskl.service.storage.GalleryStorageService(this.piskelController)),
          this.galleryStorageService.init(),
          (this.storageService = new pskl.service.storage.StorageService(this.piskelController)),
          this.storageService.init(),
          (this.importService = new pskl.service.ImportService(this.piskelController)),
          this.importService.init(),
          (this.imageUploadService = new pskl.service.ImageUploadService()),
          this.imageUploadService.init(),
          (this.savedStatusService = new pskl.service.SavedStatusService(this.piskelController, this.historyService)),
          this.savedStatusService.init(),
          (this.backupService = new pskl.service.BackupService(this.piskelController)),
          this.backupService.init(),
          (this.beforeUnloadService = new pskl.service.BeforeUnloadService(this.piskelController)),
          this.beforeUnloadService.init(),
          (this.headerController = new pskl.controller.HeaderController(this.piskelController, this.savedStatusService)),
          this.headerController.init(),
          (this.penSizeService = new pskl.service.pensize.PenSizeService()),
          this.penSizeService.init(),
          (this.penSizeController = new pskl.controller.PenSizeController()),
          this.penSizeController.init(),
          (this.fileDropperService = new pskl.service.FileDropperService(this.piskelController)),
          this.fileDropperService.init(),
          (this.userWarningController = new pskl.controller.UserWarningController(this.piskelController)),
          this.userWarningController.init(),
          (this.performanceReportService = new pskl.service.performance.PerformanceReportService(this.piskelController, this.currentColorsService)),
          this.performanceReportService.init(),
          (this.drawingLoop = new pskl.rendering.DrawingLoop()),
          this.drawingLoop.addCallback(this.render, this),
          this.drawingLoop.start(),
          this.initTooltips_();
        var g = this.getPiskelInitData_();
        if ((g && g.piskel && this.loadPiskel_(g), pskl.devtools && pskl.devtools.init(), pskl.utils.Environment.detectNodeWebkit() && pskl.utils.UserAgent.isMac)) {
          var h = require("nw.gui"),
            i = new h.Menu({ type: "menubar" });
          i.createMacBuiltin("Piskel"), (h.Window.get().menu = i);
        }
        !pskl.utils.Environment.isIntegrationTest() && pskl.utils.UserAgent.isUnsupported() && $.publish(Events.DIALOG_SHOW, { dialogId: "unsupported-browser" });
      },
      loadPiskel_: function (a) {
        var b = a.piskel;
        pskl.utils.serialization.Deserializer.deserialize(b, function (b) {
          pskl.app.piskelController.setPiskel(b), $.publish(Events.PISKEL_SAVED), a.descriptor && b.setDescriptor(a.descriptor);
        });
      },
      getPiskelInitData_: function () {
        return pskl.appEnginePiskelData_;
      },
      isLoggedIn: function () {
        var a = this.getPiskelInitData_();
        return a && a.isLoggedIn;
      },
      initTooltips_: function () {
        $("body").tooltip({ selector: "[rel=tooltip]" });
      },
      render: function (a) {
        this.drawingController.render(a), this.previewController.render(a), this.framesListController.render(a);
      },
      getFirstFrameAsPng: function () {
        var a,
          b = pskl.utils.LayerUtils.mergeFrameAt(this.piskelController.getLayers(), 0);
        return (a = b instanceof pskl.model.frame.RenderedFrame ? pskl.utils.CanvasUtils.createFromImage(b.getRenderedFrame()) : pskl.utils.FrameUtils.toImage(b)), a.toDataURL("image/png");
      },
      getFramesheetAsPng: function () {
        return new pskl.rendering.PiskelRenderer(this.piskelController).renderAsCanvas().toDataURL("image/png");
      },
    };
  })();
