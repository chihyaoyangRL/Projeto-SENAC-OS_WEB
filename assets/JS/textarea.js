/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.0.7 (2019-06-05)
 */
! function(j) { "use strict"; var i = function() {},
        q = function(n, r) { return function() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]; return n(r.apply(null, e)) } },
        $ = function(e) { return function() { return e } },
        W = function(e) { return e };

    function d(r) { for (var o = [], e = 1; e < arguments.length; e++) o[e - 1] = arguments[e]; return function() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]; var n = o.concat(e); return r.apply(null, n) } } var e, t, n, r, o, a, u, s, l, c, f, h, m, g, p, v, y, b = function(n) { return function() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]; return !n.apply(null, e) } },
        C = function(e) { return function() { throw new Error(e) } },
        w = $(!1),
        x = $(!0),
        z = w,
        N = x,
        E = function() { return S },
        S = (r = { fold: function(e, t) { return e() }, is: z, isSome: z, isNone: N, getOr: n = function(e) { return e }, getOrThunk: t = function(e) { return e() }, getOrDie: function(e) { throw new Error(e || "error: getOrDie called on none.") }, getOrNull: function() { return null }, getOrUndefined: function() { return undefined }, or: n, orThunk: t, map: E, ap: E, each: function() {}, bind: E, flatten: E, exists: z, forall: N, filter: E, equals: e = function(e) { return e.isNone() }, equals_: e, toArray: function() { return [] }, toString: $("none()") }, Object.freeze && Object.freeze(r), r),
        k = function(n) { var e = function() { return n },
                t = function() { return o },
                r = function(e) { return e(n) },
                o = { fold: function(e, t) { return t(n) }, is: function(e) { return n === e }, isSome: N, isNone: z, getOr: e, getOrThunk: e, getOrDie: e, getOrNull: e, getOrUndefined: e, or: t, orThunk: t, map: function(e) { return k(e(n)) }, ap: function(e) { return e.fold(E, function(e) { return k(e(n)) }) }, each: function(e) { e(n) }, bind: r, flatten: e, exists: r, forall: r, filter: function(e) { return e(n) ? o : S }, equals: function(e) { return e.is(n) }, equals_: function(e, t) { return e.fold(z, function(e) { return t(n, e) }) }, toArray: function() { return [n] }, toString: function() { return "some(" + n + ")" } }; return o },
        T = { some: k, none: E, from: function(e) { return null === e || e === undefined ? S : k(e) } },
        A = function(t) { return function(e) { return function(e) { if (null === e) return "null"; var t = typeof e; return "object" === t && Array.prototype.isPrototypeOf(e) ? "array" : "object" === t && String.prototype.isPrototypeOf(e) ? "string" : t }(e) === t } },
        K = A("string"),
        M = A("object"),
        R = A("array"),
        D = A("null"),
        B = A("boolean"),
        O = A("function"),
        H = A("number"),
        _ = Array.prototype.slice,
        P = (o = Array.prototype.indexOf) === undefined ? function(e, t) { return te(e, t) } : function(e, t) { return o.call(e, t) },
        L = function(e, t) { var n = P(e, t); return -1 === n ? T.none() : T.some(n) },
        V = function(e, t) { return -1 < P(e, t) },
        I = function(e, t) { return ee(e, t).isSome() },
        X = function(e, t) { for (var n = e.length, r = new Array(n), o = 0; o < n; o++) { var i = e[o];
                r[o] = t(i, o, e) } return r },
        F = function(e, t) { for (var n = 0, r = e.length; n < r; n++) t(e[n], n, e) },
        U = function(e, t) { for (var n = e.length - 1; 0 <= n; n--) t(e[n], n, e) },
        Y = function(e, t) { for (var n = [], r = [], o = 0, i = e.length; o < i; o++) { var a = e[o];
                (t(a, o, e) ? n : r).push(a) } return { pass: n, fail: r } },
        G = function(e, t) { for (var n = [], r = 0, o = e.length; r < o; r++) { var i = e[r];
                t(i, r, e) && n.push(i) } return n },
        J = function(e, t, n) { return U(e, function(e) { n = t(n, e) }), n },
        Q = function(e, t, n) { return F(e, function(e) { n = t(n, e) }), n },
        Z = function(e, t) { for (var n = 0, r = e.length; n < r; n++) { var o = e[n]; if (t(o, n, e)) return T.some(o) } return T.none() },
        ee = function(e, t) { for (var n = 0, r = e.length; n < r; n++)
                if (t(e[n], n, e)) return T.some(n);
            return T.none() },
        te = function(e, t) { for (var n = 0, r = e.length; n < r; ++n)
                if (e[n] === t) return n;
            return -1 },
        ne = Array.prototype.push,
        re = function(e) { for (var t = [], n = 0, r = e.length; n < r; ++n) { if (!Array.prototype.isPrototypeOf(e[n])) throw new Error("Arr.flatten item " + n + " was not an array, input: " + e);
                ne.apply(t, e[n]) } return t },
        oe = function(e, t) { var n = X(e, t); return re(n) },
        ie = function(e, t) { for (var n = 0, r = e.length; n < r; ++n)
                if (!0 !== t(e[n], n, e)) return !1;
            return !0 },
        ae = function(e) { var t = _.call(e, 0); return t.reverse(), t },
        ue = function(e, t) { return G(e, function(e) { return !V(t, e) }) },
        se = function(e, t) { for (var n = {}, r = 0, o = e.length; r < o; r++) { var i = e[r];
                n[String(i)] = t(i, r) } return n },
        le = function(e, t) { var n = _.call(e, 0); return n.sort(t), n },
        ce = function(e) { return 0 === e.length ? T.none() : T.some(e[0]) },
        fe = function(e) { return 0 === e.length ? T.none() : T.some(e[e.length - 1]) },
        de = O(Array.from) ? Array.from : function(e) { return _.call(e) },
        he = "undefined" != typeof j.window ? j.window : Function("return this;")(),
        me = function(e, t) { return function(e, t) { for (var n = t !== undefined && null !== t ? t : he, r = 0; r < e.length && n !== undefined && null !== n; ++r) n = n[e[r]]; return n }(e.split("."), t) },
        ge = { getOrDie: function(e, t) { var n = me(e, t); if (n === undefined || null === n) throw e + " not available on this browser"; return n } },
        pe = function() { return ge.getOrDie("URL") },
        ve = function(e) { return pe().createObjectURL(e) },
        ye = function(e) { pe().revokeObjectURL(e) },
        be = j.navigator,
        Ce = be.userAgent,
        we = function(e) { return "matchMedia" in j.window && j.matchMedia(e).matches };
    m = /Android/.test(Ce), u = (u = !(a = /WebKit/.test(Ce)) && /MSIE/gi.test(Ce) && /Explorer/gi.test(be.appName)) && /MSIE (\w+)\./.exec(Ce)[1], s = -1 !== Ce.indexOf("Trident/") && (-1 !== Ce.indexOf("rv:") || -1 !== be.appName.indexOf("Netscape")) && 11, l = -1 !== Ce.indexOf("Edge/") && !u && !s && 12, u = u || s || l, c = !a && !s && /Gecko/.test(Ce), f = -1 !== Ce.indexOf("Mac"), h = /(iPad|iPhone)/.test(Ce), g = "FormData" in j.window && "FileReader" in j.window && "URL" in j.window && !!ve, p = we("only screen and (max-device-width: 480px)") && (m || h), v = we("only screen and (min-width: 800px)") && (m || h), y = -1 !== Ce.indexOf("Windows Phone"), l && (a = !1); var xe, ze, Ne, Ee, Se, ke, Te, Ae, Me, Re, De, Be, Oe, He, _e, Pe, Le, Ve, Ie, Fe = { opera: !1, webkit: a, ie: u, gecko: c, mac: f, iOS: h, android: m, contentEditable: !h || g || 534 <= parseInt(Ce.match(/AppleWebKit\/(\d*)/)[1], 10), transparentSrc: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", caretAfter: 8 !== u, range: j.window.getSelection && "Range" in j.window, documentMode: u && !l ? j.document.documentMode || 7 : 10, fileApi: g, ceFalse: !1 === u || 8 < u, cacheSuffix: null, container: null, experimentalShadowDom: !1, canHaveCSP: !1 === u || 11 < u, desktop: !p && !v, windowsPhone: y },
        Ue = window.Promise ? window.Promise : function() {
            function r(e, t) { return function() { e.apply(t, arguments) } } var e = Array.isArray || function(e) { return "[object Array]" === Object.prototype.toString.call(e) },
                i = function(e) { if ("object" != typeof this) throw new TypeError("Promises must be constructed via new"); if ("function" != typeof e) throw new TypeError("not a function");
                    this._state = null, this._value = null, this._deferreds = [], c(e, r(o, this), r(u, this)) },
                t = i.immediateFn || "function" == typeof j.setImmediate && j.setImmediate || function(e) { j.setTimeout(e, 1) };

            function a(r) { var o = this;
                null !== this._state ? t(function() { var e = o._state ? r.onFulfilled : r.onRejected; if (null !== e) { var t; try { t = e(o._value) } catch (n) { return void r.reject(n) }
                        r.resolve(t) } else(o._state ? r.resolve : r.reject)(o._value) }) : this._deferreds.push(r) }

            function o(e) { try { if (e === this) throw new TypeError("A promise cannot be resolved with itself."); if (e && ("object" == typeof e || "function" == typeof e)) { var t = e.then; if ("function" == typeof t) return void c(r(t, e), r(o, this), r(u, this)) }
                    this._state = !0, this._value = e, s.call(this) } catch (n) { u.call(this, n) } }

            function u(e) { this._state = !1, this._value = e, s.call(this) }

            function s() { for (var e = 0, t = this._deferreds.length; e < t; e++) a.call(this, this._deferreds[e]);
                this._deferreds = null }

            function l(e, t, n, r) { this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.resolve = n, this.reject = r }

            function c(e, t, n) { var r = !1; try { e(function(e) { r || (r = !0, t(e)) }, function(e) { r || (r = !0, n(e)) }) } catch (o) { if (r) return;
                    r = !0, n(o) } } return i.prototype["catch"] = function(e) { return this.then(null, e) }, i.prototype.then = function(n, r) { var o = this; return new i(function(e, t) { a.call(o, new l(n, r, e, t)) }) }, i.all = function() { var s = Array.prototype.slice.call(1 === arguments.length && e(arguments[0]) ? arguments[0] : arguments); return new i(function(o, i) { if (0 === s.length) return o([]); var a = s.length;

                    function u(t, e) { try { if (e && ("object" == typeof e || "function" == typeof e)) { var n = e.then; if ("function" == typeof n) return void n.call(e, function(e) { u(t, e) }, i) }
                            s[t] = e, 0 == --a && o(s) } catch (r) { i(r) } } for (var e = 0; e < s.length; e++) u(e, s[e]) }) }, i.resolve = function(t) { return t && "object" == typeof t && t.constructor === i ? t : new i(function(e) { e(t) }) }, i.reject = function(n) { return new i(function(e, t) { t(n) }) }, i.race = function(o) { return new i(function(e, t) { for (var n = 0, r = o.length; n < r; n++) o[n].then(e, t) }) }, i }(),
        je = function(e, t) { return "number" != typeof t && (t = 0), j.setTimeout(e, t) },
        qe = function(e, t) { return "number" != typeof t && (t = 1), j.setInterval(e, t) },
        $e = function(n, r) { var o, e; return (e = function() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                j.clearTimeout(o), o = je(function() { n.apply(this, e) }, r) }).stop = function() { j.clearTimeout(o) }, e },
        We = { requestAnimationFrame: function(e, t) { xe ? xe.then(e) : xe = new Ue(function(e) { t || (t = j.document.body),
                        function(e, t) { var n, r = j.window.requestAnimationFrame,
                                o = ["ms", "moz", "webkit"]; for (n = 0; n < o.length && !r; n++) r = j.window[o[n] + "RequestAnimationFrame"];
                            r || (r = function(e) { j.window.setTimeout(e, 0) }), r(e, t) }(e, t) }).then(e) }, setTimeout: je, setInterval: qe, setEditorTimeout: function(e, t, n) { return je(function() { e.removed || t() }, n) }, setEditorInterval: function(e, t, n) { var r; return r = qe(function() { e.removed ? j.clearInterval(r) : t() }, n) }, debounce: $e, throttle: $e, clearInterval: function(e) { return j.clearInterval(e) }, clearTimeout: function(e) { return j.clearTimeout(e) } },
        Ke = /^(?:mouse|contextmenu)|click/,
        Xe = { keyLocation: 1, layerX: 1, layerY: 1, returnValue: 1, webkitMovementX: 1, webkitMovementY: 1, keyIdentifier: 1 },
        Ye = function() { return !1 },
        Ge = function() { return !0 },
        Je = function(e, t, n, r) { e.addEventListener ? e.addEventListener(t, n, r || !1) : e.attachEvent && e.attachEvent("on" + t, n) },
        Qe = function(e, t, n, r) { e.removeEventListener ? e.removeEventListener(t, n, r || !1) : e.detachEvent && e.detachEvent("on" + t, n) },
        Ze = function(e, t) { var n, r, o = t || {}; for (n in e) Xe[n] || (o[n] = e[n]); if (o.target || (o.target = o.srcElement || j.document), Fe.experimentalShadowDom && (o.target = function(e, t) { if (e.composedPath) { var n = e.composedPath(); if (n && 0 < n.length) return n[0] } return t }(e, o.target)), e && Ke.test(e.type) && e.pageX === undefined && e.clientX !== undefined) { var i = o.target.ownerDocument || j.document,
                    a = i.documentElement,
                    u = i.body;
                o.pageX = e.clientX + (a && a.scrollLeft || u && u.scrollLeft || 0) - (a && a.clientLeft || u && u.clientLeft || 0), o.pageY = e.clientY + (a && a.scrollTop || u && u.scrollTop || 0) - (a && a.clientTop || u && u.clientTop || 0) } return o.preventDefault = function() { o.isDefaultPrevented = Ge, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1) }, o.stopPropagation = function() { o.isPropagationStopped = Ge, e && (e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0) }, !(o.stopImmediatePropagation = function() { o.isImmediatePropagationStopped = Ge, o.stopPropagation() }) == ((r = o).isDefaultPrevented === Ge || r.isDefaultPrevented === Ye) && (o.isDefaultPrevented = Ye, o.isPropagationStopped = Ye, o.isImmediatePropagationStopped = Ye), "undefined" == typeof o.metaKey && (o.metaKey = !1), o },
        et = function(e, t, n) { var r = e.document,
                o = { type: "ready" }; if (n.domLoaded) t(o);
            else { var i = function() { return "complete" === r.readyState || "interactive" === r.readyState && r.body },
                    a = function() { Qe(e, "DOMContentLoaded", a), Qe(e, "load", a), n.domLoaded || (n.domLoaded = !0, t(o)) },
                    u = function() { i() && (Qe(r, "readystatechange", u), a()) },
                    s = function() { try { r.documentElement.doScroll("left") } catch (e) { return void We.setTimeout(s) }
                        a() };!r.addEventListener || Fe.ie && Fe.ie < 11 ? (Je(r, "readystatechange", u), r.documentElement.doScroll && e.self === e.top && s()) : i() ? a() : Je(e, "DOMContentLoaded", a), Je(e, "load", a) } },
        tt = function() {
            function e() { this.domLoaded = !1, this.events = {}, this.count = 1, this.expando = "mce-data-" + (+new Date).toString(32), this.hasMouseEnterLeave = "onmouseenter" in j.document.documentElement, this.hasFocusIn = "onfocusin" in j.document.documentElement, this.count = 1 } return e.prototype.bind = function(e, t, n, r) { var o, i, a, u, s, l, c, f = this,
                    d = j.window,
                    h = function(e) { f.executeHandlers(Ze(e || d.event), o) }; if (e && 3 !== e.nodeType && 8 !== e.nodeType) { e[f.expando] ? o = e[f.expando] : (o = f.count++, e[f.expando] = o, f.events[o] = {}), r = r || e; var m = t.split(" "); for (a = m.length; a--;) l = h, s = c = !1, "DOMContentLoaded" === (u = m[a]) && (u = "ready"), f.domLoaded && "ready" === u && "complete" === e.readyState ? n.call(r, Ze({ type: u })) : (f.hasMouseEnterLeave || (s = f.mouseEnterLeave[u]) && (l = function(e) { var t, n; if (t = e.currentTarget, (n = e.relatedTarget) && t.contains) n = t.contains(n);
                        else
                            for (; n && n !== t;) n = n.parentNode;
                        n || ((e = Ze(e || d.event)).type = "mouseout" === e.type ? "mouseleave" : "mouseenter", e.target = t, f.executeHandlers(e, o)) }), f.hasFocusIn || "focusin" !== u && "focusout" !== u || (c = !0, s = "focusin" === u ? "focus" : "blur", l = function(e) {
                        (e = Ze(e || d.event)).type = "focus" === e.type ? "focusin" : "focusout", f.executeHandlers(e, o) }), (i = f.events[o][u]) ? "ready" === u && f.domLoaded ? n(Ze({ type: u })) : i.push({ func: n, scope: r }) : (f.events[o][u] = i = [{ func: n, scope: r }], i.fakeName = s, i.capture = c, i.nativeHandler = l, "ready" === u ? et(e, l, f) : Je(e, s || u, l, c))); return e = i = 0, n } }, e.prototype.unbind = function(e, t, n) { var r, o, i, a, u, s; if (!e || 3 === e.nodeType || 8 === e.nodeType) return this; if (r = e[this.expando]) { if (s = this.events[r], t) { var l = t.split(" "); for (i = l.length; i--;)
                            if (o = s[u = l[i]]) { if (n)
                                    for (a = o.length; a--;)
                                        if (o[a].func === n) { var c = o.nativeHandler,
                                                f = o.fakeName,
                                                d = o.capture;
                                            (o = o.slice(0, a).concat(o.slice(a + 1))).nativeHandler = c, o.fakeName = f, o.capture = d, s[u] = o }
                                n && 0 !== o.length || (delete s[u], Qe(e, o.fakeName || u, o.nativeHandler, o.capture)) } } else { for (u in s) o = s[u], Qe(e, o.fakeName || u, o.nativeHandler, o.capture);
                        s = {} } for (u in s) return this;
                    delete this.events[r]; try { delete e[this.expando] } catch (h) { e[this.expando] = null } } return this }, e.prototype.fire = function(e, t, n) { var r; if (!e || 3 === e.nodeType || 8 === e.nodeType) return this; var o = Ze(null, n); for (o.type = t, o.target = e;
                    (r = e[this.expando]) && this.executeHandlers(o, r), (e = e.parentNode || e.ownerDocument || e.defaultView || e.parentWindow) && !o.isPropagationStopped();); return this }, e.prototype.clean = function(e) { var t, n; if (!e || 3 === e.nodeType || 8 === e.nodeType) return this; if (e[this.expando] && this.unbind(e), e.getElementsByTagName || (e = e.document), e && e.getElementsByTagName)
                    for (this.unbind(e), t = (n = e.getElementsByTagName("*")).length; t--;)(e = n[t])[this.expando] && this.unbind(e); return this }, e.prototype.destroy = function() { this.events = {} }, e.prototype.cancel = function(e) { return e && (e.preventDefault(), e.stopImmediatePropagation()), !1 }, e.prototype.executeHandlers = function(e, t) { var n, r, o, i, a = this.events[t]; if (n = a && a[e.type])
                    for (r = 0, o = n.length; r < o; r++)
                        if ((i = n[r]) && !1 === i.func.call(i.scope, e) && e.preventDefault(), e.isImmediatePropagationStopped()) return }, e.Event = new e, e }(),
        nt = "sizzle" + -new Date,
        rt = j.window.document,
        ot = 0,
        it = 0,
        at = Lt(),
        ut = Lt(),
        st = Lt(),
        lt = function(e, t) { return e === t && (Be = !0), 0 },
        ct = typeof undefined,
        ft = {}.hasOwnProperty,
        dt = [],
        ht = dt.pop,
        mt = dt.push,
        gt = dt.push,
        pt = dt.slice,
        vt = dt.indexOf || function(e) { for (var t = 0, n = this.length; t < n; t++)
                if (this[t] === e) return t;
            return -1 },
        yt = "[\\x20\\t\\r\\n\\f]",
        bt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        Ct = "\\[" + yt + "*(" + bt + ")(?:" + yt + "*([*^$|!~]?=)" + yt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + bt + "))|)" + yt + "*\\]",
        wt = ":(" + bt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + Ct + ")*)|.*)\\)|)",
        xt = new RegExp("^" + yt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + yt + "+$", "g"),
        zt = new RegExp("^" + yt + "*," + yt + "*"),
        Nt = new RegExp("^" + yt + "*([>+~]|" + yt + ")" + yt + "*"),
        Et = new RegExp("=" + yt + "*([^\\]'\"]*?)" + yt + "*\\]", "g"),
        St = new RegExp(wt),
        kt = new RegExp("^" + bt + "$"),
        Tt = { ID: new RegExp("^#(" + bt + ")"), CLASS: new RegExp("^\\.(" + bt + ")"), TAG: new RegExp("^(" + bt + "|[*])"), ATTR: new RegExp("^" + Ct), PSEUDO: new RegExp("^" + wt), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + yt + "*(even|odd|(([+-]|)(\\d*)n|)" + yt + "*(?:([+-]|)" + yt + "*(\\d+)|))" + yt + "*\\)|)", "i"), bool: new RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$", "i"), needsContext: new RegExp("^" + yt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + yt + "*((?:-\\d)?\\d*)" + yt + "*\\)|)(?=[^-]|$)", "i") },
        At = /^(?:input|select|textarea|button)$/i,
        Mt = /^h\d$/i,
        Rt = /^[^{]+\{\s*\[native \w/,
        Dt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        Bt = /[+~]/,
        Ot = /'|\\/g,
        Ht = new RegExp("\\\\([\\da-f]{1,6}" + yt + "?|(" + yt + ")|.)", "ig"),
        _t = function(e, t, n) { var r = "0x" + t - 65536; return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320) }; try { gt.apply(dt = pt.call(rt.childNodes), rt.childNodes), dt[rt.childNodes.length].nodeType } catch (xN) { gt = { apply: dt.length ? function(e, t) { mt.apply(e, pt.call(t)) } : function(e, t) { for (var n = e.length, r = 0; e[n++] = t[r++];);
                e.length = n - 1 } } } var Pt = function(e, t, n, r) { var o, i, a, u, s, l, c, f, d, h; if ((t ? t.ownerDocument || t : rt) !== He && Oe(t), n = n || [], !e || "string" != typeof e) return n; if (1 !== (u = (t = t || He).nodeType) && 9 !== u) return []; if (Pe && !r) { if (o = Dt.exec(e))
                if (a = o[1]) { if (9 === u) { if (!(i = t.getElementById(a)) || !i.parentNode) return n; if (i.id === a) return n.push(i), n } else if (t.ownerDocument && (i = t.ownerDocument.getElementById(a)) && Ie(t, i) && i.id === a) return n.push(i), n } else { if (o[2]) return gt.apply(n, t.getElementsByTagName(e)), n; if ((a = o[3]) && Ne.getElementsByClassName) return gt.apply(n, t.getElementsByClassName(a)), n }
            if (Ne.qsa && (!Le || !Le.test(e))) { if (f = c = nt, d = t, h = 9 === u && e, 1 === u && "object" !== t.nodeName.toLowerCase()) { for (l = Te(e), (c = t.getAttribute("id")) ? f = c.replace(Ot, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", s = l.length; s--;) l[s] = f + Wt(l[s]);
                    d = Bt.test(e) && qt(t.parentNode) || t, h = l.join(",") } if (h) try { return gt.apply(n, d.querySelectorAll(h)), n } catch (m) {} finally { c || t.removeAttribute("id") } } } return Me(e.replace(xt, "$1"), t, n, r) };

    function Lt() { var n = []; return function r(e, t) { return n.push(e + " ") > Ee.cacheLength && delete r[n.shift()], r[e + " "] = t } }

    function Vt(e) { return e[nt] = !0, e }

    function It(e, t) { var n = t && e,
            r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31); if (r) return r; if (n)
            for (; n = n.nextSibling;)
                if (n === t) return -1;
        return e ? 1 : -1 }

    function Ft(t) { return function(e) { return "input" === e.nodeName.toLowerCase() && e.type === t } }

    function Ut(n) { return function(e) { var t = e.nodeName.toLowerCase(); return ("input" === t || "button" === t) && e.type === n } }

    function jt(a) { return Vt(function(i) { return i = +i, Vt(function(e, t) { for (var n, r = a([], e.length, i), o = r.length; o--;) e[n = r[o]] && (e[n] = !(t[n] = e[n])) }) }) }

    function qt(e) { return e && typeof e.getElementsByTagName !== ct && e } for (ze in Ne = Pt.support = {}, ke = Pt.isXML = function(e) { var t = e && (e.ownerDocument || e).documentElement; return !!t && "HTML" !== t.nodeName }, Oe = Pt.setDocument = function(e) { var t, s = e ? e.ownerDocument || e : rt,
                n = s.defaultView; return s !== He && 9 === s.nodeType && s.documentElement ? (_e = (He = s).documentElement, Pe = !ke(s), n && n !== function r(e) { try { return e.top } catch (t) {} return null }(n) && (n.addEventListener ? n.addEventListener("unload", function() { Oe() }, !1) : n.attachEvent && n.attachEvent("onunload", function() { Oe() })), Ne.attributes = !0, Ne.getElementsByTagName = !0, Ne.getElementsByClassName = Rt.test(s.getElementsByClassName), Ne.getById = !0, Ee.find.ID = function(e, t) { if (typeof t.getElementById !== ct && Pe) { var n = t.getElementById(e); return n && n.parentNode ? [n] : [] } }, Ee.filter.ID = function(e) { var t = e.replace(Ht, _t); return function(e) { return e.getAttribute("id") === t } }, Ee.find.TAG = Ne.getElementsByTagName ? function(e, t) { if (typeof t.getElementsByTagName !== ct) return t.getElementsByTagName(e) } : function(e, t) { var n, r = [],
                    o = 0,
                    i = t.getElementsByTagName(e); if ("*" !== e) return i; for (; n = i[o++];) 1 === n.nodeType && r.push(n); return r }, Ee.find.CLASS = Ne.getElementsByClassName && function(e, t) { if (Pe) return t.getElementsByClassName(e) }, Ve = [], Le = [], Ne.disconnectedMatch = !0, Le = Le.length && new RegExp(Le.join("|")), Ve = Ve.length && new RegExp(Ve.join("|")), t = Rt.test(_e.compareDocumentPosition), Ie = t || Rt.test(_e.contains) ? function(e, t) { var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode; return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))) } : function(e, t) { if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1 }, lt = t ? function(e, t) { if (e === t) return Be = !0, 0; var n = !e.compareDocumentPosition - !t.compareDocumentPosition; return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !Ne.sortDetached && t.compareDocumentPosition(e) === n ? e === s || e.ownerDocument === rt && Ie(rt, e) ? -1 : t === s || t.ownerDocument === rt && Ie(rt, t) ? 1 : De ? vt.call(De, e) - vt.call(De, t) : 0 : 4 & n ? -1 : 1) } : function(e, t) { if (e === t) return Be = !0, 0; var n, r = 0,
                    o = e.parentNode,
                    i = t.parentNode,
                    a = [e],
                    u = [t]; if (!o || !i) return e === s ? -1 : t === s ? 1 : o ? -1 : i ? 1 : De ? vt.call(De, e) - vt.call(De, t) : 0; if (o === i) return It(e, t); for (n = e; n = n.parentNode;) a.unshift(n); for (n = t; n = n.parentNode;) u.unshift(n); for (; a[r] === u[r];) r++; return r ? It(a[r], u[r]) : a[r] === rt ? -1 : u[r] === rt ? 1 : 0 }, s) : He }, Pt.matches = function(e, t) { return Pt(e, null, null, t) }, Pt.matchesSelector = function(e, t) { if ((e.ownerDocument || e) !== He && Oe(e), t = t.replace(Et, "='$1']"), Ne.matchesSelector && Pe && (!Ve || !Ve.test(t)) && (!Le || !Le.test(t))) try { var n = (void 0).call(e, t); if (n || Ne.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n } catch (xN) {}
            return 0 < Pt(t, He, null, [e]).length }, Pt.contains = function(e, t) { return (e.ownerDocument || e) !== He && Oe(e), Ie(e, t) }, Pt.attr = function(e, t) {
            (e.ownerDocument || e) !== He && Oe(e); var n = Ee.attrHandle[t.toLowerCase()],
                r = n && ft.call(Ee.attrHandle, t.toLowerCase()) ? n(e, t, !Pe) : undefined; return r !== undefined ? r : Ne.attributes || !Pe ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null }, Pt.error = function(e) { throw new Error("Syntax error, unrecognized expression: " + e) }, Pt.uniqueSort = function(e) { var t, n = [],
                r = 0,
                o = 0; if (Be = !Ne.detectDuplicates, De = !Ne.sortStable && e.slice(0), e.sort(lt), Be) { for (; t = e[o++];) t === e[o] && (r = n.push(o)); for (; r--;) e.splice(n[r], 1) } return De = null, e }, Se = Pt.getText = function(e) { var t, n = "",
                r = 0,
                o = e.nodeType; if (o) { if (1 === o || 9 === o || 11 === o) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) n += Se(e) } else if (3 === o || 4 === o) return e.nodeValue } else
                for (; t = e[r++];) n += Se(t); return n }, (Ee = Pt.selectors = { cacheLength: 50, createPseudo: Vt, match: Tt, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(e) { return e[1] = e[1].replace(Ht, _t), e[3] = (e[3] || e[4] || e[5] || "").replace(Ht, _t), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || Pt.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && Pt.error(e[0]), e }, PSEUDO: function(e) { var t, n = !e[6] && e[2]; return Tt.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && St.test(n) && (t = Te(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } }, filter: { TAG: function(e) { var t = e.replace(Ht, _t).toLowerCase(); return "*" === e ? function() { return !0 } : function(e) { return e.nodeName && e.nodeName.toLowerCase() === t } }, CLASS: function(e) { var t = at[e + " "]; return t || (t = new RegExp("(^|" + yt + ")" + e + "(" + yt + "|$)")) && at(e, function(e) { return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== ct && e.getAttribute("class") || "") }) }, ATTR: function(n, r, o) { return function(e) { var t = Pt.attr(e, n); return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === o : "!=" === r ? t !== o : "^=" === r ? o && 0 === t.indexOf(o) : "*=" === r ? o && -1 < t.indexOf(o) : "$=" === r ? o && t.slice(-o.length) === o : "~=" === r ? -1 < (" " + t + " ").indexOf(o) : "|=" === r && (t === o || t.slice(0, o.length + 1) === o + "-")) } }, CHILD: function(h, e, t, m, g) { var p = "nth" !== h.slice(0, 3),
                        v = "last" !== h.slice(-4),
                        y = "of-type" === e; return 1 === m && 0 === g ? function(e) { return !!e.parentNode } : function(e, t, n) { var r, o, i, a, u, s, l = p !== v ? "nextSibling" : "previousSibling",
                            c = e.parentNode,
                            f = y && e.nodeName.toLowerCase(),
                            d = !n && !y; if (c) { if (p) { for (; l;) { for (i = e; i = i[l];)
                                        if (y ? i.nodeName.toLowerCase() === f : 1 === i.nodeType) return !1;
                                    s = l = "only" === h && !s && "nextSibling" } return !0 } if (s = [v ? c.firstChild : c.lastChild], v && d) { for (u = (r = (o = c[nt] || (c[nt] = {}))[h] || [])[0] === ot && r[1], a = r[0] === ot && r[2], i = u && c.childNodes[u]; i = ++u && i && i[l] || (a = u = 0) || s.pop();)
                                    if (1 === i.nodeType && ++a && i === e) { o[h] = [ot, u, a]; break } } else if (d && (r = (e[nt] || (e[nt] = {}))[h]) && r[0] === ot) a = r[1];
                            else
                                for (;
                                    (i = ++u && i && i[l] || (a = u = 0) || s.pop()) && ((y ? i.nodeName.toLowerCase() !== f : 1 !== i.nodeType) || !++a || (d && ((i[nt] || (i[nt] = {}))[h] = [ot, a]), i !== e));); return (a -= g) === m || a % m == 0 && 0 <= a / m } } }, PSEUDO: function(e, i) { var t, a = Ee.pseudos[e] || Ee.setFilters[e.toLowerCase()] || Pt.error("unsupported pseudo: " + e); return a[nt] ? a(i) : 1 < a.length ? (t = [e, e, "", i], Ee.setFilters.hasOwnProperty(e.toLowerCase()) ? Vt(function(e, t) { for (var n, r = a(e, i), o = r.length; o--;) e[n = vt.call(e, r[o])] = !(t[n] = r[o]) }) : function(e) { return a(e, 0, t) }) : a } }, pseudos: { not: Vt(function(e) { var r = [],
                        o = [],
                        u = Ae(e.replace(xt, "$1")); return u[nt] ? Vt(function(e, t, n, r) { for (var o, i = u(e, null, r, []), a = e.length; a--;)(o = i[a]) && (e[a] = !(t[a] = o)) }) : function(e, t, n) { return r[0] = e, u(r, null, n, o), !o.pop() } }), has: Vt(function(t) { return function(e) { return 0 < Pt(t, e).length } }), contains: Vt(function(t) { return t = t.replace(Ht, _t),
                        function(e) { return -1 < (e.textContent || e.innerText || Se(e)).indexOf(t) } }), lang: Vt(function(n) { return kt.test(n || "") || Pt.error("unsupported lang: " + n), n = n.replace(Ht, _t).toLowerCase(),
                        function(e) { var t;
                            do { if (t = Pe ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-") } while ((e = e.parentNode) && 1 === e.nodeType); return !1 } }), target: function(e) { var t = j.window.location && j.window.location.hash; return t && t.slice(1) === e.id }, root: function(e) { return e === _e }, focus: function(e) { return e === He.activeElement && (!He.hasFocus || He.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) }, enabled: function(e) { return !1 === e.disabled }, disabled: function(e) { return !0 === e.disabled }, checked: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected }, selected: function(e) { return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected }, empty: function(e) { for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0 }, parent: function(e) { return !Ee.pseudos.empty(e) }, header: function(e) { return Mt.test(e.nodeName) }, input: function(e) { return At.test(e.nodeName) }, button: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t }, text: function(e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) }, first: jt(function() { return [0] }), last: jt(function(e, t) { return [t - 1] }), eq: jt(function(e, t, n) { return [n < 0 ? n + t : n] }), even: jt(function(e, t) { for (var n = 0; n < t; n += 2) e.push(n); return e }), odd: jt(function(e, t) { for (var n = 1; n < t; n += 2) e.push(n); return e }), lt: jt(function(e, t, n) { for (var r = n < 0 ? n + t : n; 0 <= --r;) e.push(r); return e }), gt: jt(function(e, t, n) { for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r); return e }) } }).pseudos.nth = Ee.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) Ee.pseudos[ze] = Ft(ze); for (ze in { submit: !0, reset: !0 }) Ee.pseudos[ze] = Ut(ze);

    function $t() {}

    function Wt(e) { for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value; return r }

    function Kt(a, e, t) { var u = e.dir,
            s = t && "parentNode" === u,
            l = it++; return e.first ? function(e, t, n) { for (; e = e[u];)
                if (1 === e.nodeType || s) return a(e, t, n) } : function(e, t, n) { var r, o, i = [ot, l]; if (n) { for (; e = e[u];)
                    if ((1 === e.nodeType || s) && a(e, t, n)) return !0 } else
                for (; e = e[u];)
                    if (1 === e.nodeType || s) { if ((r = (o = e[nt] || (e[nt] = {}))[u]) && r[0] === ot && r[1] === l) return i[2] = r[2]; if ((o[u] = i)[2] = a(e, t, n)) return !0 } } }

    function Xt(o) { return 1 < o.length ? function(e, t, n) { for (var r = o.length; r--;)
                if (!o[r](e, t, n)) return !1;
            return !0 } : o[0] }

    function Yt(e, t, n, r, o) { for (var i, a = [], u = 0, s = e.length, l = null != t; u < s; u++)(i = e[u]) && (n && !n(i, r, o) || (a.push(i), l && t.push(u))); return a }

    function Gt(m, g, p, v, y, e) { return v && !v[nt] && (v = Gt(v)), y && !y[nt] && (y = Gt(y, e)), Vt(function(e, t, n, r) { var o, i, a, u = [],
                s = [],
                l = t.length,
                c = e || function h(e, t, n) { for (var r = 0, o = t.length; r < o; r++) Pt(e, t[r], n); return n }(g || "*", n.nodeType ? [n] : n, []),
                f = !m || !e && g ? c : Yt(c, u, m, n, r),
                d = p ? y || (e ? m : l || v) ? [] : t : f; if (p && p(f, d, n, r), v)
                for (o = Yt(d, s), v(o, [], n, r), i = o.length; i--;)(a = o[i]) && (d[s[i]] = !(f[s[i]] = a)); if (e) { if (y || m) { if (y) { for (o = [], i = d.length; i--;)(a = d[i]) && o.push(f[i] = a);
                        y(null, d = [], o, r) } for (i = d.length; i--;)(a = d[i]) && -1 < (o = y ? vt.call(e, a) : u[i]) && (e[o] = !(t[o] = a)) } } else d = Yt(d === t ? d.splice(l, d.length) : d), y ? y(null, t, d, r) : gt.apply(t, d) }) }

    function Jt(e) { for (var r, t, n, o = e.length, i = Ee.relative[e[0].type], a = i || Ee.relative[" "], u = i ? 1 : 0, s = Kt(function(e) { return e === r }, a, !0), l = Kt(function(e) { return -1 < vt.call(r, e) }, a, !0), c = [function(e, t, n) { return !i && (n || t !== Re) || ((r = t).nodeType ? s(e, t, n) : l(e, t, n)) }]; u < o; u++)
            if (t = Ee.relative[e[u].type]) c = [Kt(Xt(c), t)];
            else { if ((t = Ee.filter[e[u].type].apply(null, e[u].matches))[nt]) { for (n = ++u; n < o && !Ee.relative[e[n].type]; n++); return Gt(1 < u && Xt(c), 1 < u && Wt(e.slice(0, u - 1).concat({ value: " " === e[u - 2].type ? "*" : "" })).replace(xt, "$1"), t, u < n && Jt(e.slice(u, n)), n < o && Jt(e = e.slice(n)), n < o && Wt(e)) }
                c.push(t) }
        return Xt(c) }
    $t.prototype = Ee.filters = Ee.pseudos, Ee.setFilters = new $t, Te = Pt.tokenize = function(e, t) { var n, r, o, i, a, u, s, l = ut[e + " "]; if (l) return t ? 0 : l.slice(0); for (a = e, u = [], s = Ee.preFilter; a;) { for (i in n && !(r = zt.exec(a)) || (r && (a = a.slice(r[0].length) || a), u.push(o = [])), n = !1, (r = Nt.exec(a)) && (n = r.shift(), o.push({ value: n, type: r[0].replace(xt, " ") }), a = a.slice(n.length)), Ee.filter) Ee.filter.hasOwnProperty(i) && (!(r = Tt[i].exec(a)) || s[i] && !(r = s[i](r)) || (n = r.shift(), o.push({ value: n, type: i, matches: r }), a = a.slice(n.length))); if (!n) break } return t ? a.length : a ? Pt.error(e) : ut(e, u).slice(0) }, Ae = Pt.compile = function(e, t) { var n, r = [],
            o = [],
            i = st[e + " "]; if (!i) { for (t || (t = Te(e)), n = t.length; n--;)(i = Jt(t[n]))[nt] ? r.push(i) : o.push(i);
            (i = st(e, function a(p, v) { var y = 0 < v.length,
                    b = 0 < p.length,
                    e = function(e, t, n, r, o) { var i, a, u, s = 0,
                            l = "0",
                            c = e && [],
                            f = [],
                            d = Re,
                            h = e || b && Ee.find.TAG("*", o),
                            m = ot += null == d ? 1 : Math.random() || .1,
                            g = h.length; for (o && (Re = t !== He && t); l !== g && null != (i = h[l]); l++) { if (b && i) { for (a = 0; u = p[a++];)
                                    if (u(i, t, n)) { r.push(i); break }
                                o && (ot = m) }
                            y && ((i = !u && i) && s--, e && c.push(i)) } if (s += l, y && l !== s) { for (a = 0; u = v[a++];) u(c, f, t, n); if (e) { if (0 < s)
                                    for (; l--;) c[l] || f[l] || (f[l] = ht.call(r));
                                f = Yt(f) }
                            gt.apply(r, f), o && !e && 0 < f.length && 1 < s + v.length && Pt.uniqueSort(r) } return o && (ot = m, Re = d), c }; return y ? Vt(e) : e }(o, r))).selector = e } return i }, Me = Pt.select = function(e, t, n, r) { var o, i, a, u, s, l = "function" == typeof e && e,
            c = !r && Te(e = l.selector || e); if (n = n || [], 1 === c.length) { if (2 < (i = c[0] = c[0].slice(0)).length && "ID" === (a = i[0]).type && Ne.getById && 9 === t.nodeType && Pe && Ee.relative[i[1].type]) { if (!(t = (Ee.find.ID(a.matches[0].replace(Ht, _t), t) || [])[0])) return n;
                l && (t = t.parentNode), e = e.slice(i.shift().value.length) } for (o = Tt.needsContext.test(e) ? 0 : i.length; o-- && (a = i[o], !Ee.relative[u = a.type]);)
                if ((s = Ee.find[u]) && (r = s(a.matches[0].replace(Ht, _t), Bt.test(i[0].type) && qt(t.parentNode) || t))) { if (i.splice(o, 1), !(e = r.length && Wt(i))) return gt.apply(n, r), n; break } } return (l || Ae(e, c))(r, t, !Pe, n, Bt.test(e) && qt(t.parentNode) || t), n }, Ne.sortStable = nt.split("").sort(lt).join("") === nt, Ne.detectDuplicates = !!Be, Oe(), Ne.sortDetached = !0; var Qt = Array.isArray,
        Zt = function(e, t, n) { var r, o; if (!e) return 0; if (n = n || e, e.length !== undefined) { for (r = 0, o = e.length; r < o; r++)
                    if (!1 === t.call(n, e[r], r, e)) return 0 } else
                for (r in e)
                    if (e.hasOwnProperty(r) && !1 === t.call(n, e[r], r, e)) return 0; return 1 },
        en = function(e, t, n) { var r, o; for (r = 0, o = e.length; r < o; r++)
                if (t.call(n, e[r], r, e)) return r;
            return -1 },
        tn = { isArray: Qt, toArray: function(e) { var t, n, r = e; if (!Qt(e))
                    for (r = [], t = 0, n = e.length; t < n; t++) r[t] = e[t]; return r }, each: Zt, map: function(n, r) { var o = []; return Zt(n, function(e, t) { o.push(r(e, t, n)) }), o }, filter: function(n, r) { var o = []; return Zt(n, function(e, t) { r && !r(e, t, n) || o.push(e) }), o }, indexOf: function(e, t) { var n, r; if (e)
                    for (n = 0, r = e.length; n < r; n++)
                        if (e[n] === t) return n;
                return -1 }, reduce: function(e, t, n, r) { var o = 0; for (arguments.length < 3 && (n = e[0]); o < e.length; o++) n = t.call(r, n, e[o], o); return n }, findIndex: en, find: function(e, t, n) { var r = en(e, t, n); return -1 !== r ? e[r] : undefined }, last: function(e) { return e[e.length - 1] } },
        nn = /^\s*|\s*$/g,
        rn = function(e) { return null === e || e === undefined ? "" : ("" + e).replace(nn, "") },
        on = function(e, t) { return t ? !("array" !== t || !tn.isArray(e)) || typeof e === t : e !== undefined },
        an = function(e, n, r, o) { o = o || this, e && (r && (e = e[r]), tn.each(e, function(e, t) { if (!1 === n.call(o, e, t, r)) return !1;
                an(e, n, r, o) })) },
        un = { trim: rn, isArray: tn.isArray, is: on, toArray: tn.toArray, makeMap: function(e, t, n) { var r; for (t = t || ",", "string" == typeof(e = e || []) && (e = e.split(t)), n = n || {}, r = e.length; r--;) n[e[r]] = {}; return n }, each: tn.each, map: tn.map, grep: tn.filter, inArray: tn.indexOf, hasOwn: function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, extend: function(e, t) { for (var n, r, o, i = [], a = 2; a < arguments.length; a++) i[a - 2] = arguments[a]; var u, s = arguments; for (n = 1, r = s.length; n < r; n++)
                    for (o in t = s[n]) t.hasOwnProperty(o) && (u = t[o]) !== undefined && (e[o] = u); return e }, create: function(e, t, n) { var r, o, i, a, u, s = this,
                    l = 0; if (e = /^((static) )?([\w.]+)(:([\w.]+))?/.exec(e), i = e[3].match(/(^|\.)(\w+)$/i)[2], !(o = s.createNS(e[3].replace(/\.\w+$/, ""), n))[i]) { if ("static" === e[2]) return o[i] = t, void(this.onCreate && this.onCreate(e[2], e[3], o[i]));
                    t[i] || (t[i] = function() {}, l = 1), o[i] = t[i], s.extend(o[i].prototype, t), e[5] && (r = s.resolve(e[5]).prototype, a = e[5].match(/\.(\w+)$/i)[1], u = o[i], o[i] = l ? function() { return r[a].apply(this, arguments) } : function() { return this.parent = r[a], u.apply(this, arguments) }, o[i].prototype[i] = o[i], s.each(r, function(e, t) { o[i].prototype[t] = r[t] }), s.each(t, function(e, t) { r[t] ? o[i].prototype[t] = function() { return this.parent = r[t], e.apply(this, arguments) } : t !== i && (o[i].prototype[t] = e) })), s.each(t["static"], function(e, t) { o[i][t] = e }) } }, walk: an, createNS: function(e, t) { var n, r; for (t = t || j.window, e = e.split("."), n = 0; n < e.length; n++) t[r = e[n]] || (t[r] = {}), t = t[r]; return t }, resolve: function(e, t) { var n, r; for (t = t || j.window, n = 0, r = (e = e.split(".")).length; n < r && (t = t[e[n]]); n++); return t }, explode: function(e, t) { return !e || on(e, "array") ? e : tn.map(e.split(t || ","), rn) }, _addCacheSuffix: function(e) { var t = Fe.cacheSuffix; return t && (e += (-1 === e.indexOf("?") ? "?" : "&") + t), e } },
        sn = j.document,
        ln = Array.prototype.push,
        cn = Array.prototype.slice,
        fn = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        dn = tt.Event,
        hn = un.makeMap("children,contents,next,prev"),
        mn = function(e) { return void 0 !== e },
        gn = function(e) { return "string" == typeof e },
        pn = function(e, t) { var n, r, o; for (o = (t = t || sn).createElement("div"), n = t.createDocumentFragment(), o.innerHTML = e; r = o.firstChild;) n.appendChild(r); return n },
        vn = function(e, t, n, r) { var o; if (gn(t)) t = pn(t, Rn(e[0]));
            else if (t.length && !t.nodeType) { if (t = Un.makeArray(t), r)
                    for (o = t.length - 1; 0 <= o; o--) vn(e, t[o], n, r);
                else
                    for (o = 0; o < t.length; o++) vn(e, t[o], n, r); return e } if (t.nodeType)
                for (o = e.length; o--;) n.call(e[o], t); return e },
        yn = function(e, t) { return e && t && -1 !== (" " + e.className + " ").indexOf(" " + t + " ") },
        bn = function(e, t, n) { var r, o; return t = Un(t)[0], e.each(function() { var e = this;
                n && r === e.parentNode || (r = e.parentNode, o = t.cloneNode(!1), e.parentNode.insertBefore(o, e)), o.appendChild(e) }), e },
        Cn = un.makeMap("fillOpacity fontWeight lineHeight opacity orphans widows zIndex zoom", " "),
        wn = un.makeMap("checked compact declare defer disabled ismap multiple nohref noshade nowrap readonly selected", " "),
        xn = { "for": "htmlFor", "class": "className", readonly: "readOnly" },
        zn = { "float": "cssFloat" },
        Nn = {},
        En = {},
        Sn = function(e, t) { return new Un.fn.init(e, t) },
        kn = /^\s*|\s*$/g,
        Tn = function(e) { return null === e || e === undefined ? "" : ("" + e).replace(kn, "") },
        An = function(e, t) { var n, r, o, i; if (e)
                if ((n = e.length) === undefined) { for (r in e)
                        if (e.hasOwnProperty(r) && (i = e[r], !1 === t.call(i, r, i))) break } else
                    for (o = 0; o < n && (i = e[o], !1 !== t.call(i, o, i)); o++);
            return e },
        Mn = function(e, n) { var r = []; return An(e, function(e, t) { n(t, e) && r.push(t) }), r },
        Rn = function(e) { return e ? 9 === e.nodeType ? e : e.ownerDocument : sn };
    Sn.fn = Sn.prototype = { constructor: Sn, selector: "", context: null, length: 0, init: function(e, t) { var n, r, o = this; if (!e) return o; if (e.nodeType) return o.context = o[0] = e, o.length = 1, o; if (t && t.nodeType) o.context = t;
            else { if (t) return Un(e).attr(t);
                o.context = t = j.document } if (gn(e)) { if (!(n = "<" === (o.selector = e).charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : fn.exec(e))) return Un(t).find(e); if (n[1])
                    for (r = pn(e, Rn(t)).firstChild; r;) ln.call(o, r), r = r.nextSibling;
                else { if (!(r = Rn(t).getElementById(n[2]))) return o; if (r.id !== n[2]) return o.find(e);
                    o.length = 1, o[0] = r } } else this.add(e, !1); return o }, toArray: function() { return un.toArray(this) }, add: function(e, t) { var n, r, o = this; if (gn(e)) return o.add(Un(e)); if (!1 !== t)
                for (n = Un.unique(o.toArray().concat(Un.makeArray(e))), o.length = n.length, r = 0; r < n.length; r++) o[r] = n[r];
            else ln.apply(o, Un.makeArray(e)); return o }, attr: function(t, n) { var e, r = this; if ("object" == typeof t) An(t, function(e, t) { r.attr(e, t) });
            else { if (!mn(n)) { if (r[0] && 1 === r[0].nodeType) { if ((e = Nn[t]) && e.get) return e.get(r[0], t); if (wn[t]) return r.prop(t) ? t : undefined;
                        null === (n = r[0].getAttribute(t, 2)) && (n = undefined) } return n }
                this.each(function() { var e; if (1 === this.nodeType) { if ((e = Nn[t]) && e.set) return void e.set(this, n);
                        null === n ? this.removeAttribute(t, 2) : this.setAttribute(t, n, 2) } }) } return r }, removeAttr: function(e) { return this.attr(e, null) }, prop: function(e, t) { var n = this; if ("object" == typeof(e = xn[e] || e)) An(e, function(e, t) { n.prop(e, t) });
            else { if (!mn(t)) return n[0] && n[0].nodeType && e in n[0] ? n[0][e] : t;
                this.each(function() { 1 === this.nodeType && (this[e] = t) }) } return n }, css: function(n, r) { var e, o, i = this,
                t = function(e) { return e.replace(/-(\D)/g, function(e, t) { return t.toUpperCase() }) },
                a = function(e) { return e.replace(/[A-Z]/g, function(e) { return "-" + e }) }; if ("object" == typeof n) An(n, function(e, t) { i.css(e, t) });
            else if (mn(r)) n = t(n), "number" != typeof r || Cn[n] || (r = r.toString() + "px"), i.each(function() { var e = this.style; if ((o = En[n]) && o.set) o.set(this, r);
                else { try { this.style[zn[n] || n] = r } catch (t) {}
                    null !== r && "" !== r || (e.removeProperty ? e.removeProperty(a(n)) : e.removeAttribute(n)) } });
            else { if (e = i[0], (o = En[n]) && o.get) return o.get(e); if (!e.ownerDocument.defaultView) return e.currentStyle ? e.currentStyle[t(n)] : ""; try { return e.ownerDocument.defaultView.getComputedStyle(e, null).getPropertyValue(a(n)) } catch (u) { return undefined } } return i }, remove: function() { for (var e, t = this.length; t--;) e = this[t], dn.clean(e), e.parentNode && e.parentNode.removeChild(e); return this }, empty: function() { for (var e, t = this.length; t--;)
                for (e = this[t]; e.firstChild;) e.removeChild(e.firstChild); return this }, html: function(e) { var t, n = this; if (mn(e)) { t = n.length; try { for (; t--;) n[t].innerHTML = e } catch (r) { Un(n[t]).empty().append(e) } return n } return n[0] ? n[0].innerHTML : "" }, text: function(e) { var t, n = this; if (mn(e)) { for (t = n.length; t--;) "innerText" in n[t] ? n[t].innerText = e : n[0].textContent = e; return n } return n[0] ? n[0].innerText || n[0].textContent : "" }, append: function() { return vn(this, arguments, function(e) {
                (1 === this.nodeType || this.host && 1 === this.host.nodeType) && this.appendChild(e) }) }, prepend: function() { return vn(this, arguments, function(e) {
                (1 === this.nodeType || this.host && 1 === this.host.nodeType) && this.insertBefore(e, this.firstChild) }, !0) }, before: function() { return this[0] && this[0].parentNode ? vn(this, arguments, function(e) { this.parentNode.insertBefore(e, this) }) : this }, after: function() { return this[0] && this[0].parentNode ? vn(this, arguments, function(e) { this.parentNode.insertBefore(e, this.nextSibling) }, !0) : this }, appendTo: function(e) { return Un(e).append(this), this }, prependTo: function(e) { return Un(e).prepend(this), this }, replaceWith: function(e) { return this.before(e).remove() }, wrap: function(e) { return bn(this, e) }, wrapAll: function(e) { return bn(this, e, !0) }, wrapInner: function(e) { return this.each(function() { Un(this).contents().wrapAll(e) }), this }, unwrap: function() { return this.parent().each(function() { Un(this).replaceWith(this.childNodes) }) }, clone: function() { var e = []; return this.each(function() { e.push(this.cloneNode(!0)) }), Un(e) }, addClass: function(e) { return this.toggleClass(e, !0) }, removeClass: function(e) { return this.toggleClass(e, !1) }, toggleClass: function(o, i) { var e = this; return "string" != typeof o || (-1 !== o.indexOf(" ") ? An(o.split(" "), function() { e.toggleClass(this, i) }) : e.each(function(e, t) { var n, r;
                (r = yn(t, o)) !== i && (n = t.className, r ? t.className = Tn((" " + n + " ").replace(" " + o + " ", " ")) : t.className += n ? " " + o : o) })), e }, hasClass: function(e) { return yn(this[0], e) }, each: function(e) { return An(this, e) }, on: function(e, t) { return this.each(function() { dn.bind(this, e, t) }) }, off: function(e, t) { return this.each(function() { dn.unbind(this, e, t) }) }, trigger: function(e) { return this.each(function() { "object" == typeof e ? dn.fire(this, e.type, e) : dn.fire(this, e) }) }, show: function() { return this.css("display", "") }, hide: function() { return this.css("display", "none") }, slice: function() { return new Un(cn.apply(this, arguments)) }, eq: function(e) { return -1 === e ? this.slice(e) : this.slice(e, +e + 1) }, first: function() { return this.eq(0) }, last: function() { return this.eq(-1) }, find: function(e) { var t, n, r = []; for (t = 0, n = this.length; t < n; t++) Un.find(e, this[t], r); return Un(r) }, filter: function(n) { return Un("function" == typeof n ? Mn(this.toArray(), function(e, t) { return n(t, e) }) : Un.filter(n, this.toArray())) }, closest: function(n) { var r = []; return n instanceof Un && (n = n[0]), this.each(function(e, t) { for (; t;) { if ("string" == typeof n && Un(t).is(n)) { r.push(t); break } if (t === n) { r.push(t); break }
                    t = t.parentNode } }), Un(r) }, offset: function(e) { var t, n, r, o, i = 0,
                a = 0; return e ? this.css(e) : ((t = this[0]) && (r = (n = t.ownerDocument).documentElement, t.getBoundingClientRect && (i = (o = t.getBoundingClientRect()).left + (r.scrollLeft || n.body.scrollLeft) - r.clientLeft, a = o.top + (r.scrollTop || n.body.scrollTop) - r.clientTop)), { left: i, top: a }) }, push: ln, sort: Array.prototype.sort, splice: Array.prototype.splice }, un.extend(Sn, { extend: un.extend, makeArray: function(e) { return (t = e) && t === t.window || e.nodeType ? [e] : un.toArray(e); var t }, inArray: function(e, t) { var n; if (t.indexOf) return t.indexOf(e); for (n = t.length; n--;)
                if (t[n] === e) return n;
            return -1 }, isArray: un.isArray, each: An, trim: Tn, grep: Mn, find: Pt, expr: Pt.selectors, unique: Pt.uniqueSort, text: Pt.getText, contains: Pt.contains, filter: function(e, t, n) { var r = t.length; for (n && (e = ":not(" + e + ")"); r--;) 1 !== t[r].nodeType && t.splice(r, 1); return t = 1 === t.length ? Un.find.matchesSelector(t[0], e) ? [t[0]] : [] : Un.find.matches(e, t) } }); var Dn = function(e, t, n) { var r = [],
                o = e[t]; for ("string" != typeof n && n instanceof Un && (n = n[0]); o && 9 !== o.nodeType;) { if (n !== undefined) { if (o === n) break; if ("string" == typeof n && Un(o).is(n)) break }
                1 === o.nodeType && r.push(o), o = o[t] } return r },
        Bn = function(e, t, n, r) { var o = []; for (r instanceof Un && (r = r[0]); e; e = e[t])
                if (!n || e.nodeType === n) { if (r !== undefined) { if (e === r) break; if ("string" == typeof r && Un(e).is(r)) break }
                    o.push(e) }
            return o },
        On = function(e, t, n) { for (e = e[t]; e; e = e[t])
                if (e.nodeType === n) return e;
            return null };
    An({ parent: function(e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(e) { return Dn(e, "parentNode") }, next: function(e) { return On(e, "nextSibling", 1) }, prev: function(e) { return On(e, "previousSibling", 1) }, children: function(e) { return Bn(e.firstChild, "nextSibling", 1) }, contents: function(e) { return un.toArray(("iframe" === e.nodeName ? e.contentDocument || e.contentWindow.document : e).childNodes) } }, function(r, o) { Sn.fn[r] = function(t) { var n = [];
            this.each(function() { var e = o.call(n, this, t, n);
                e && (Un.isArray(e) ? n.push.apply(n, e) : n.push(e)) }), 1 < this.length && (hn[r] || (n = Un.unique(n)), 0 === r.indexOf("parents") && (n = n.reverse())); var e = Un(n); return t ? e.filter(t) : e } }), An({ parentsUntil: function(e, t) { return Dn(e, "parentNode", t) }, nextUntil: function(e, t) { return Bn(e, "nextSibling", 1, t).slice(1) }, prevUntil: function(e, t) { return Bn(e, "previousSibling", 1, t).slice(1) } }, function(o, i) { Sn.fn[o] = function(t, e) { var n = [];
            this.each(function() { var e = i.call(n, this, t, n);
                e && (Un.isArray(e) ? n.push.apply(n, e) : n.push(e)) }), 1 < this.length && (n = Un.unique(n), 0 !== o.indexOf("parents") && "prevUntil" !== o || (n = n.reverse())); var r = Un(n); return e ? r.filter(e) : r } }), Sn.fn.is = function(e) { return !!e && 0 < this.filter(e).length }, Sn.fn.init.prototype = Sn.fn, Sn.overrideDefaults = function(n) { var r, o = function(e, t) { return r = r || n(), 0 === arguments.length && (e = r.element), t || (t = r.context), new o.fn.init(e, t) }; return Un.extend(o, this), o }; var Hn = function(n, r, e) { An(e, function(e, t) { n[e] = n[e] || {}, n[e][r] = t }) };
    Fe.ie && Fe.ie < 8 && (Hn(Nn, "get", { maxlength: function(e) { var t = e.maxLength; return 2147483647 === t ? undefined : t }, size: function(e) { var t = e.size; return 20 === t ? undefined : t }, "class": function(e) { return e.className }, style: function(e) { var t = e.style.cssText; return 0 === t.length ? undefined : t } }), Hn(Nn, "set", { "class": function(e, t) { e.className = t }, style: function(e, t) { e.style.cssText = t } })), Fe.ie && Fe.ie < 9 && (zn["float"] = "styleFloat", Hn(En, "set", { opacity: function(e, t) { var n = e.style;
            null === t || "" === t ? n.removeAttribute("filter") : (n.zoom = 1, n.filter = "alpha(opacity=" + 100 * t + ")") } })), Sn.attrHooks = Nn, Sn.cssHooks = En; var _n, Pn, Ln, Vn, In, Fn, Un = Sn,
        jn = function(e, t) { var n = function(e, t) { for (var n = 0; n < e.length; n++) { var r = e[n]; if (r.test(t)) return r } return undefined }(e, t); if (!n) return { major: 0, minor: 0 }; var r = function(e) { return Number(t.replace(n, "$" + e)) }; return $n(r(1), r(2)) },
        qn = function() { return $n(0, 0) },
        $n = function(e, t) { return { major: e, minor: t } },
        Wn = { nu: $n, detect: function(e, t) { var n = String(t).toLowerCase(); return 0 === e.length ? qn() : jn(e, n) }, unknown: qn },
        Kn = "Firefox",
        Xn = function(e, t) { return function() { return t === e } },
        Yn = function(e) { var t = e.current; return { current: t, version: e.version, isEdge: Xn("Edge", t), isChrome: Xn("Chrome", t), isIE: Xn("IE", t), isOpera: Xn("Opera", t), isFirefox: Xn(Kn, t), isSafari: Xn("Safari", t) } },
        Gn = { unknown: function() { return Yn({ current: undefined, version: Wn.unknown() }) }, nu: Yn, edge: $("Edge"), chrome: $("Chrome"), ie: $("IE"), opera: $("Opera"), firefox: $(Kn), safari: $("Safari") },
        Jn = "Windows",
        Qn = "Android",
        Zn = "Solaris",
        er = "FreeBSD",
        tr = function(e, t) { return function() { return t === e } },
        nr = function(e) { var t = e.current; return { current: t, version: e.version, isWindows: tr(Jn, t), isiOS: tr("iOS", t), isAndroid: tr(Qn, t), isOSX: tr("OSX", t), isLinux: tr("Linux", t), isSolaris: tr(Zn, t), isFreeBSD: tr(er, t) } },
        rr = { unknown: function() { return nr({ current: undefined, version: Wn.unknown() }) }, nu: nr, windows: $(Jn), ios: $("iOS"), android: $(Qn), linux: $("Linux"), osx: $("OSX"), solaris: $(Zn), freebsd: $(er) },
        or = function(e, t) { var n = String(t).toLowerCase(); return Z(e, function(e) { return e.search(n) }) },
        ir = function(e, n) { return or(e, n).map(function(e) { var t = Wn.detect(e.versionRegexes, n); return { current: e.name, version: t } }) },
        ar = function(e, n) { return or(e, n).map(function(e) { var t = Wn.detect(e.versionRegexes, n); return { current: e.name, version: t } }) },
        ur = function(e, t) { return -1 !== e.indexOf(t) },
        sr = function(e) { return e.replace(/^\s+|\s+$/g, "") },
        lr = function(e) { return e.replace(/\s+$/g, "") },
        cr = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
        fr = function(t) { return function(e) { return ur(e, t) } },
        dr = [{ name: "Edge", versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/], search: function(e) { return ur(e, "edge/") && ur(e, "chrome") && ur(e, "safari") && ur(e, "applewebkit") } }, { name: "Chrome", versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/, cr], search: function(e) { return ur(e, "chrome") && !ur(e, "chromeframe") } }, { name: "IE", versionRegexes: [/.*?msie\ ?([0-9]+)\.([0-9]+).*/, /.*?rv:([0-9]+)\.([0-9]+).*/], search: function(e) { return ur(e, "msie") || ur(e, "trident") } }, { name: "Opera", versionRegexes: [cr, /.*?opera\/([0-9]+)\.([0-9]+).*/], search: fr("opera") }, { name: "Firefox", versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/], search: fr("firefox") }, { name: "Safari", versionRegexes: [cr, /.*?cpu os ([0-9]+)_([0-9]+).*/], search: function(e) { return (ur(e, "safari") || ur(e, "mobile/")) && ur(e, "applewebkit") } }],
        hr = [{ name: "Windows", search: fr("win"), versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/] }, { name: "iOS", search: function(e) { return ur(e, "iphone") || ur(e, "ipad") }, versionRegexes: [/.*?version\/\ ?([0-9]+)\.([0-9]+).*/, /.*cpu os ([0-9]+)_([0-9]+).*/, /.*cpu iphone os ([0-9]+)_([0-9]+).*/] }, { name: "Android", search: fr("android"), versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/] }, { name: "OSX", search: fr("os x"), versionRegexes: [/.*?os\ x\ ?([0-9]+)_([0-9]+).*/] }, { name: "Linux", search: fr("linux"), versionRegexes: [] }, { name: "Solaris", search: fr("sunos"), versionRegexes: [] }, { name: "FreeBSD", search: fr("freebsd"), versionRegexes: [] }],
        mr = { browsers: $(dr), oses: $(hr) },
        gr = function(e) { var t, n, r, o, i, a, u, s, l, c, f, d = mr.browsers(),
                h = mr.oses(),
                m = ir(d, e).fold(Gn.unknown, Gn.nu),
                g = ar(h, e).fold(rr.unknown, rr.nu); return { browser: m, os: g, deviceType: (n = m, r = e, o = (t = g).isiOS() && !0 === /ipad/i.test(r), i = t.isiOS() && !o, a = t.isAndroid() && 3 === t.version.major, u = t.isAndroid() && 4 === t.version.major, s = o || a || u && !0 === /mobile/i.test(r), l = t.isiOS() || t.isAndroid(), c = l && !s, f = n.isSafari() && t.isiOS() && !1 === /safari/i.test(r), { isiPad: $(o), isiPhone: $(i), isTablet: $(s), isPhone: $(c), isTouch: $(l), isAndroid: t.isAndroid, isiOS: t.isiOS, isWebView: $(f) }) } },
        pr = { detect: (_n = function() { var e = j.navigator.userAgent; return gr(e) }, Ln = !1, function() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]; return Ln || (Ln = !0, Pn = _n.apply(null, e)), Pn }) },
        vr = function(e) { if (null === e || e === undefined) throw new Error("Node cannot be null or undefined"); return { dom: $(e) } },
        yr = { fromHtml: function(e, t) { var n = (t || j.document).createElement("div"); if (n.innerHTML = e, !n.hasChildNodes() || 1 < n.childNodes.length) throw j.console.error("HTML does not have a single root node", e), new Error("HTML must have a single root node"); return vr(n.childNodes[0]) }, fromTag: function(e, t) { var n = (t || j.document).createElement(e); return vr(n) }, fromText: function(e, t) { var n = (t || j.document).createTextNode(e); return vr(n) }, fromDom: vr, fromPoint: function(e, t, n) { var r = e.dom(); return T.from(r.elementFromPoint(t, n)).map(vr) } },
        br = (j.Node.ATTRIBUTE_NODE, j.Node.CDATA_SECTION_NODE, j.Node.COMMENT_NODE, j.Node.DOCUMENT_NODE),
        Cr = (j.Node.DOCUMENT_TYPE_NODE, j.Node.DOCUMENT_FRAGMENT_NODE, j.Node.ELEMENT_NODE),
        wr = j.Node.TEXT_NODE,
        xr = (j.Node.PROCESSING_INSTRUCTION_NODE, j.Node.ENTITY_REFERENCE_NODE, j.Node.ENTITY_NODE, j.Node.NOTATION_NODE, function(e) { return e.dom().nodeName.toLowerCase() }),
        zr = function(t) { return function(e) { return e.dom().nodeType === t } },
        Nr = zr(Cr),
        Er = zr(wr),
        Sr = Object.keys,
        kr = Object.hasOwnProperty,
        Tr = function(e, t) { for (var n = Sr(e), r = 0, o = n.length; r < o; r++) { var i = n[r];
                t(e[i], i, e) } },
        Ar = function(e, r) { return Mr(e, function(e, t, n) { return { k: t, v: r(e, t, n) } }) },
        Mr = function(r, o) { var i = {}; return Tr(r, function(e, t) { var n = o(e, t, r);
                i[n.k] = n.v }), i },
        Rr = function(e, n) { var r = {},
                o = {}; return Tr(e, function(e, t) {
                (n(e, t) ? r : o)[t] = e }), { t: r, f: o } },
        Dr = function(e, t) { return Br(e, t) ? T.from(e[t]) : T.none() },
        Br = function(e, t) { return kr.call(e, t) },
        Or = function(e, t, n) { if (!(K(n) || B(n) || H(n))) throw j.console.error("Invalid call to Attr.set. Key ", t, ":: Value ", n, ":: Element ", e), new Error("Attribute value was not simple");
            e.setAttribute(t, n + "") },
        Hr = function(e, t, n) { Or(e.dom(), t, n) },
        _r = function(e, t) { var n = e.dom();
            Tr(t, function(e, t) { Or(n, t, e) }) },
        Pr = function(e, t) { var n = e.dom().getAttribute(t); return null === n ? undefined : n },
        Lr = function(e, t) { e.dom().removeAttribute(t) },
        Vr = function(e, t) { var n, r, o = e.dom(),
                i = j.window.getComputedStyle(o).getPropertyValue(t),
                a = "" !== i || (r = Er(n = e) ? n.dom().parentNode : n.dom()) !== undefined && null !== r && r.ownerDocument.body.contains(r) ? i : Ir(o, t); return null === a ? undefined : a },
        Ir = function(e, t) { return e.style !== undefined ? e.style.getPropertyValue(t) : "" },
        Fr = function(e, t) { var n = e.dom(),
                r = Ir(n, t); return T.from(r).filter(function(e) { return 0 < e.length }) },
        Ur = function() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]; return function() { for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e]; if (t.length !== n.length) throw new Error('Wrong number of arguments to struct. Expected "[' + t.length + ']", got ' + n.length + " arguments"); var r = {}; return F(t, function(e, t) { r[e] = $(n[t]) }), r } },
        jr = function(e, t) { for (var n = [], r = function(e) { return n.push(e), t(e) }, o = t(e);
                (o = o.bind(r)).isSome();); return n },
        qr = function() { return ge.getOrDie("Node") },
        $r = function(e, t, n) { return 0 != (e.compareDocumentPosition(t) & n) },
        Wr = function(e, t) { return $r(e, t, qr().DOCUMENT_POSITION_CONTAINED_BY) },
        Kr = Cr,
        Xr = br,
        Yr = function(e, t) { var n = e.dom(); if (n.nodeType !== Kr) return !1; if (n.matches !== undefined) return n.matches(t); if (n.msMatchesSelector !== undefined) return n.msMatchesSelector(t); if (n.webkitMatchesSelector !== undefined) return n.webkitMatchesSelector(t); if (n.mozMatchesSelector !== undefined) return n.mozMatchesSelector(t); throw new Error("Browser lacks native selectors") },
        Gr = function(e) { return e.nodeType !== Kr && e.nodeType !== Xr || 0 === e.childElementCount },
        Jr = function(e, t) { var n = t === undefined ? j.document : t.dom(); return Gr(n) ? [] : X(n.querySelectorAll(e), yr.fromDom) },
        Qr = function(e, t) { return e.dom() === t.dom() },
        Zr = pr.detect().browser.isIE() ? function(e, t) { return Wr(e.dom(), t.dom()) } : function(e, t) { var n = e.dom(),
                r = t.dom(); return n !== r && n.contains(r) },
        eo = function(e) { return yr.fromDom(e.dom().ownerDocument) },
        to = function(e) { var t = e.dom(); return T.from(t.parentNode).map(yr.fromDom) },
        no = function(e, t) { for (var n = O(t) ? t : $(!1), r = e.dom(), o = []; null !== r.parentNode && r.parentNode !== undefined;) { var i = r.parentNode,
                    a = yr.fromDom(i); if (o.push(a), !0 === n(a)) break;
                r = i } return o },
        ro = function(e) { var t = e.dom(); return T.from(t.previousSibling).map(yr.fromDom) },
        oo = function(e) { var t = e.dom(); return T.from(t.nextSibling).map(yr.fromDom) },
        io = function(e) { return ae(jr(e, ro)) },
        ao = function(e) { return jr(e, oo) },
        uo = function(e) { var t = e.dom(); return X(t.childNodes, yr.fromDom) },
        so = function(e, t) { var n = e.dom().childNodes; return T.from(n[t]).map(yr.fromDom) },
        lo = function(e) { return so(e, 0) },
        co = function(e) { return so(e, e.dom().childNodes.length - 1) },
        fo = (Ur("element", "offset"), pr.detect().browser),
        ho = function(e) { return Z(e, Nr) },
        mo = function(e, t) { return e.children && V(e.children, t) },
        go = { getPos: function(e, t, n) { var r, o, i, a = 0,
                    u = 0,
                    s = e.ownerDocument; if (n = n || e, t) { if (n === e && t.getBoundingClientRect && "static" === Vr(yr.fromDom(e), "position")) return { x: a = (o = t.getBoundingClientRect()).left + (s.documentElement.scrollLeft || e.scrollLeft) - s.documentElement.clientLeft, y: u = o.top + (s.documentElement.scrollTop || e.scrollTop) - s.documentElement.clientTop }; for (r = t; r && r !== n && r.nodeType && !mo(r, n);) a += r.offsetLeft || 0, u += r.offsetTop || 0, r = r.offsetParent; for (r = t.parentNode; r && r !== n && r.nodeType && !mo(r, n);) a -= r.scrollLeft || 0, u -= r.scrollTop || 0, r = r.parentNode;
                    u += (i = yr.fromDom(t), fo.isFirefox() && "table" === xr(i) ? ho(uo(i)).filter(function(e) { return "caption" === xr(e) }).bind(function(o) { return ho(ao(o)).map(function(e) { var t = e.dom().offsetTop,
                                n = o.dom().offsetTop,
                                r = o.dom().offsetHeight; return t <= n ? -r : 0 }) }).getOr(0) : 0) } return { x: a, y: u } } },
        po = function(e) { var n = T.none(),
                t = [],
                r = function(e) { o() ? a(e) : t.push(e) },
                o = function() { return n.isSome() },
                i = function(e) { F(e, a) },
                a = function(t) { n.each(function(e) { j.setTimeout(function() { t(e) }, 0) }) }; return e(function(e) { n = T.some(e), i(t), t = [] }), { get: r, map: function(n) { return po(function(t) { r(function(e) { t(n(e)) }) }) }, isReady: o } },
        vo = { nu: po, pure: function(t) { return po(function(e) { e(t) }) } },
        yo = function(t) { var e = function(e) { var r;
                    t((r = e, function() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]; var n = this;
                        j.setTimeout(function() { r.apply(n, e) }, 0) })) },
                n = function() { return vo.nu(e) }; return { map: function(r) { return yo(function(n) { e(function(e) { var t = r(e);
                            n(t) }) }) }, bind: function(n) { return yo(function(t) { e(function(e) { n(e).get(t) }) }) }, anonBind: function(n) { return yo(function(t) { e(function(e) { n.get(t) }) }) }, toLazy: n, toCached: function() { var t = null; return yo(function(e) { null === t && (t = n()), t.get(e) }) }, get: e } },
        bo = { nu: yo, pure: function(t) { return yo(function(e) { e(t) }) } },
        Co = function(a, e) { return e(function(r) { var o = [],
                    i = 0;
                0 === a.length ? r([]) : F(a, function(e, t) { var n;
                    e.get((n = t, function(e) { o[n] = e, ++i >= a.length && r(o) })) }) }) },
        wo = function(e) { return Co(e, bo.nu) },
        xo = function(n) { return { is: function(e) { return n === e }, isValue: x, isError: w, getOr: $(n), getOrThunk: $(n), getOrDie: $(n), or: function(e) { return xo(n) }, orThunk: function(e) { return xo(n) }, fold: function(e, t) { return t(n) }, map: function(e) { return xo(e(n)) }, mapError: function(e) { return xo(n) }, each: function(e) { e(n) }, bind: function(e) { return e(n) }, exists: function(e) { return e(n) }, forall: function(e) { return e(n) }, toOption: function() { return T.some(n) } } },
        zo = function(n) { return { is: w, isValue: w, isError: x, getOr: W, getOrThunk: function(e) { return e() }, getOrDie: function() { return C(String(n))() }, or: function(e) { return e }, orThunk: function(e) { return e() }, fold: function(e, t) { return e(n) }, map: function(e) { return zo(n) }, mapError: function(e) { return zo(e(n)) }, each: i, bind: function(e) { return zo(n) }, exists: w, forall: x, toOption: T.none } },
        No = { value: xo, error: zo, fromOption: function(e, t) { return e.fold(function() { return zo(t) }, xo) } },
        Eo = function(t) { return function(e) { return !!e && e.nodeType === t } },
        So = Eo(1),
        ko = function(e) { var r = e.toLowerCase().split(" "); return function(e) { var t, n; if (e && e.nodeType)
                    for (n = e.nodeName.toLowerCase(), t = 0; t < r.length; t++)
                        if (n === r[t]) return !0;
                return !1 } },
        To = function(t) { return function(e) { if (So(e)) { if (e.contentEditable === t) return !0; if (e.getAttribute("data-mce-contenteditable") === t) return !0 } return !1 } },
        Ao = Eo(3),
        Mo = Eo(8),
        Ro = Eo(9),
        Do = Eo(11),
        Bo = ko("br"),
        Oo = To("true"),
        Ho = To("false"),
        _o = { isText: Ao, isElement: So, isComment: Mo, isDocument: Ro, isDocumentFragment: Do, isBr: Bo, isContentEditableTrue: Oo, isContentEditableFalse: Ho, isRestrictedNode: function(e) { return !!e && !Object.getPrototypeOf(e) }, matchNodeNames: ko, hasPropValue: function(t, n) { return function(e) { return So(e) && e[t] === n } }, hasAttribute: function(t, e) { return function(e) { return So(e) && e.hasAttribute(t) } }, hasAttributeValue: function(t, n) { return function(e) { return So(e) && e.getAttribute(t) === n } }, matchStyleValues: function(r, e) { var o = e.toLowerCase().split(" "); return function(e) { var t; if (So(e))
                        for (t = 0; t < o.length; t++) { var n = e.ownerDocument.defaultView.getComputedStyle(e, null); if ((n ? n.getPropertyValue(r) : null) === o[t]) return !0 }
                    return !1 } }, isBogus: function(e) { return So(e) && e.hasAttribute("data-mce-bogus") }, isBogusAll: function(e) { return So(e) && "all" === e.getAttribute("data-mce-bogus") }, isTable: function(e) { return So(e) && "TABLE" === e.tagName } },
        Po = function() {
            function e(e, t) { this.node = e, this.rootNode = t, this.current = this.current.bind(this), this.next = this.next.bind(this), this.prev = this.prev.bind(this), this.prev2 = this.prev2.bind(this) } return e.prototype.current = function() { return this.node }, e.prototype.next = function(e) { return this.node = this.findSibling(this.node, "firstChild", "nextSibling", e), this.node }, e.prototype.prev = function(e) { return this.node = this.findSibling(this.node, "lastChild", "previousSibling", e), this.node }, e.prototype.prev2 = function(e) { return this.node = this.findPreviousNode(this.node, "lastChild", "previousSibling", e), this.node }, e.prototype.findSibling = function(e, t, n, r) { var o, i; if (e) { if (!r && e[t]) return e[t]; if (e !== this.rootNode) { if (o = e[n]) return o; for (i = e.parentNode; i && i !== this.rootNode; i = i.parentNode)
                            if (o = i[n]) return o } } }, e.prototype.findPreviousNode = function(e, t, n, r) { var o, i, a; if (e) { if (o = e[n], this.rootNode && o === this.rootNode) return; if (o) { if (!r)
                            for (a = o[t]; a; a = a[t])
                                if (!a[t]) return a;
                        return o } if ((i = e.parentNode) && i !== this.rootNode) return i } }, e }(),
        Lo = function(t) { var n; return function(e) { return (n = n || se(t, $(!0))).hasOwnProperty(xr(e)) } },
        Vo = Lo(["h1", "h2", "h3", "h4", "h5", "h6"]),
        Io = Lo(["article", "aside", "details", "div", "dt", "figcaption", "footer", "form", "fieldset", "header", "hgroup", "html", "main", "nav", "section", "summary", "body", "p", "dl", "multicol", "dd", "figure", "address", "center", "blockquote", "h1", "h2", "h3", "h4", "h5", "h6", "listing", "xmp", "pre", "plaintext", "menu", "dir", "ul", "ol", "li", "hr", "table", "tbody", "thead", "tfoot", "th", "tr", "td", "caption"]),
        Fo = function(e) { return Nr(e) && !Io(e) },
        Uo = function(e) { return Nr(e) && "br" === xr(e) },
        jo = Lo(["h1", "h2", "h3", "h4", "h5", "h6", "p", "div", "address", "pre", "form", "blockquote", "center", "dir", "fieldset", "header", "footer", "article", "section", "hgroup", "aside", "nav", "figure"]),
        qo = Lo(["ul", "ol", "dl"]),
        $o = Lo(["li", "dd", "dt"]),
        Wo = Lo(["area", "base", "basefont", "br", "col", "frame", "hr", "img", "input", "isindex", "link", "meta", "param", "embed", "source", "wbr", "track"]),
        Ko = Lo(["thead", "tbody", "tfoot"]),
        Xo = Lo(["td", "th"]),
        Yo = Lo(["pre", "script", "textarea", "style"]),
        Go = function(e) { return e && "SPAN" === e.tagName && "bookmark" === e.getAttribute("data-mce-type") },
        Jo = function(e, t) { var n, r = t.childNodes; if (!_o.isElement(t) || !Go(t)) { for (n = r.length - 1; 0 <= n; n--) Jo(e, r[n]); if (!1 === _o.isDocument(t)) { if (_o.isText(t) && 0 < t.nodeValue.length) { var o = un.trim(t.nodeValue).length; if (e.isBlock(t.parentNode) || 0 < o) return; if (0 === o && (a = (i = t).previousSibling && "SPAN" === i.previousSibling.nodeName, u = i.nextSibling && "SPAN" === i.nextSibling.nodeName, a && u)) return } else if (_o.isElement(t) && (1 === (r = t.childNodes).length && Go(r[0]) && t.parentNode.insertBefore(r[0], t), r.length || Wo(yr.fromDom(t)))) return;
                    e.remove(t) } var i, a, u; return t } },
        Qo = { trimNode: Jo },
        Zo = un.makeMap,
        ei = /[&<>\"\u0060\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        ti = /[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        ni = /[<>&\"\']/g,
        ri = /&#([a-z0-9]+);?|&([a-z0-9]+);/gi,
        oi = { 128: "\u20ac", 130: "\u201a", 131: "\u0192", 132: "\u201e", 133: "\u2026", 134: "\u2020", 135: "\u2021", 136: "\u02c6", 137: "\u2030", 138: "\u0160", 139: "\u2039", 140: "\u0152", 142: "\u017d", 145: "\u2018", 146: "\u2019", 147: "\u201c", 148: "\u201d", 149: "\u2022", 150: "\u2013", 151: "\u2014", 152: "\u02dc", 153: "\u2122", 154: "\u0161", 155: "\u203a", 156: "\u0153", 158: "\u017e", 159: "\u0178" };
    In = { '"': "&quot;", "'": "&#39;", "<": "&lt;", ">": "&gt;", "&": "&amp;", "`": "&#96;" }, Fn = { "&lt;": "<", "&gt;": ">", "&amp;": "&", "&quot;": '"', "&apos;": "'" }; var ai = function(e, t) { var n, r, o, i = {}; if (e) { for (e = e.split(","), t = t || 10, n = 0; n < e.length; n += 2) r = String.fromCharCode(parseInt(e[n], t)), In[r] || (o = "&" + e[n + 1] + ";", i[r] = o, i[o] = r); return i } };
    Vn = ai("50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro", 32); var ui = function(e, t) { return e.replace(t ? ei : ti, function(e) { return In[e] || e }) },
        si = function(e, t) { return e.replace(t ? ei : ti, function(e) { return 1 < e.length ? "&#" + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ";" : In[e] || "&#" + e.charCodeAt(0) + ";" }) },
        li = function(e, t, n) { return n = n || Vn, e.replace(t ? ei : ti, function(e) { return In[e] || n[e] || e }) },
        ci = { encodeRaw: ui, encodeAllRaw: function(e) { return ("" + e).replace(ni, function(e) { return In[e] || e }) }, encodeNumeric: si, encodeNamed: li, getEncodeFunc: function(e, t) { var n = ai(t) || Vn,
                    r = Zo(e.replace(/\+/g, ",")); return r.named && r.numeric ? function(e, t) { return e.replace(t ? ei : ti, function(e) { return In[e] !== undefined ? In[e] : n[e] !== undefined ? n[e] : 1 < e.length ? "&#" + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ";" : "&#" + e.charCodeAt(0) + ";" }) } : r.named ? t ? function(e, t) { return li(e, t, n) } : li : r.numeric ? si : ui }, decode: function(e) { return e.replace(ri, function(e, t) { return t ? 65535 < (t = "x" === t.charAt(0).toLowerCase() ? parseInt(t.substr(1), 16) : parseInt(t, 10)) ? (t -= 65536, String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t))) : oi[t] || String.fromCharCode(t) : Fn[e] || Vn[e] || (n = e, (r = yr.fromTag("div").dom()).innerHTML = n, r.textContent || r.innerText || n); var n, r }) } },
        di = {},
        hi = {},
        mi = un.makeMap,
        pi = un.each,
        vi = un.extend,
        yi = un.explode,
        bi = un.inArray,
        Ci = function(e, t) { return (e = un.trim(e)) ? e.split(t || " ") : [] },
        wi = function(e) { var u, t, n, r, o, i, s = {},
                a = function(e, t, n) { var r, o, i, a = function(e, t) { var n, r, o = {}; for (n = 0, r = e.length; n < r; n++) o[e[n]] = t || {}; return o }; for (t = t || "", "string" == typeof(n = n || []) && (n = Ci(n)), r = (e = Ci(e)).length; r--;) i = { attributes: a(o = Ci([u, t].join(" "))), attributesOrder: o, children: a(n, hi) }, s[e[r]] = i },
                l = function(e, t) { var n, r, o, i; for (n = (e = Ci(e)).length, t = Ci(t); n--;)
                        for (r = s[e[n]], o = 0, i = t.length; o < i; o++) r.attributes[t[o]] = {}, r.attributesOrder.push(t[o]) }; return di[e] ? di[e] : (u = "id accesskey class dir lang style tabindex title role", t = "address blockquote div dl fieldset form h1 h2 h3 h4 h5 h6 hr menu ol p pre table ul", n = "a abbr b bdo br button cite code del dfn em embed i iframe img input ins kbd label map noscript object q s samp script select small span strong sub sup textarea u var #text #comment", "html4" !== e && (u += " contenteditable contextmenu draggable dropzone hidden spellcheck translate", t += " article aside details dialog figure main header footer hgroup section nav", n += " audio canvas command datalist mark meter output picture progress time wbr video ruby bdi keygen"), "html5-strict" !== e && (u += " xml:lang", n = [n, i = "acronym applet basefont big font strike tt"].join(" "), pi(Ci(i), function(e) { a(e, "", n) }), t = [t, o = "center dir isindex noframes"].join(" "), r = [t, n].join(" "), pi(Ci(o), function(e) { a(e, "", r) })), r = r || [t, n].join(" "), a("html", "manifest", "head body"), a("head", "", "base command link meta noscript script style title"), a("title hr noscript br"), a("base", "href target"), a("link", "href rel media hreflang type sizes hreflang"), a("meta", "name http-equiv content charset"), a("style", "media type scoped"), a("script", "src async defer type charset"), a("body", "onafterprint onbeforeprint onbeforeunload onblur onerror onfocus onhashchange onload onmessage onoffline ononline onpagehide onpageshow onpopstate onresize onscroll onstorage onunload", r), a("address dt dd div caption", "", r), a("h1 h2 h3 h4 h5 h6 pre p abbr code var samp kbd sub sup i b u bdo span legend em strong small s cite dfn", "", n), a("blockquote", "cite", r), a("ol", "reversed start type", "li"), a("ul", "", "li"), a("li", "value", r), a("dl", "", "dt dd"), a("a", "href target rel media hreflang type", n), a("q", "cite", n), a("ins del", "cite datetime", r), a("img", "src sizes srcset alt usemap ismap width height"), a("iframe", "src name width height", r), a("embed", "src type width height"), a("object", "data type typemustmatch name usemap form width height", [r, "param"].join(" ")), a("param", "name value"), a("map", "name", [r, "area"].join(" ")), a("area", "alt coords shape href target rel media hreflang type"), a("table", "border", "caption colgroup thead tfoot tbody tr" + ("html4" === e ? " col" : "")), a("colgroup", "span", "col"), a("col", "span"), a("tbody thead tfoot", "", "tr"), a("tr", "", "td th"), a("td", "colspan rowspan headers", r), a("th", "colspan rowspan headers scope abbr", r), a("form", "accept-charset action autocomplete enctype method name novalidate target", r), a("fieldset", "disabled form name", [r, "legend"].join(" ")), a("label", "form for", n), a("input", "accept alt autocomplete checked dirname disabled form formaction formenctype formmethod formnovalidate formtarget height list max maxlength min multiple name pattern readonly required size src step type value width"), a("button", "disabled form formaction formenctype formmethod formnovalidate formtarget name type value", "html4" === e ? r : n), a("select", "disabled form multiple name required size", "option optgroup"), a("optgroup", "disabled label", "option"), a("option", "disabled label selected value"), a("textarea", "cols dirname disabled form maxlength name readonly required rows wrap"), a("menu", "type label", [r, "li"].join(" ")), a("noscript", "", r), "html4" !== e && (a("wbr"), a("ruby", "", [n, "rt rp"].join(" ")), a("figcaption", "", r), a("mark rt rp summary bdi", "", n), a("canvas", "width height", r), a("video", "src crossorigin poster preload autoplay mediagroup loop muted controls width height buffered", [r, "track source"].join(" ")), a("audio", "src crossorigin preload autoplay mediagroup loop muted controls buffered volume", [r, "track source"].join(" ")), a("picture", "", "img source"), a("source", "src srcset type media sizes"), a("track", "kind src srclang label default"), a("datalist", "", [n, "option"].join(" ")), a("article section nav aside main header footer", "", r), a("hgroup", "", "h1 h2 h3 h4 h5 h6"), a("figure", "", [r, "figcaption"].join(" ")), a("time", "datetime", n), a("dialog", "open", r), a("command", "type label icon disabled checked radiogroup command"), a("output", "for form name", n), a("progress", "value max", n), a("meter", "value min max low high optimum", n), a("details", "open", [r, "summary"].join(" ")), a("keygen", "autofocus challenge disabled form keytype name")), "html5-strict" !== e && (l("script", "language xml:space"), l("style", "xml:space"), l("object", "declare classid code codebase codetype archive standby align border hspace vspace"), l("embed", "align name hspace vspace"), l("param", "valuetype type"), l("a", "charset name rev shape coords"), l("br", "clear"), l("applet", "codebase archive code object alt name width height align hspace vspace"), l("img", "name longdesc align border hspace vspace"), l("iframe", "longdesc frameborder marginwidth marginheight scrolling align"), l("font basefont", "size color face"), l("input", "usemap align"), l("select", "onchange"), l("textarea"), l("h1 h2 h3 h4 h5 h6 div p legend caption", "align"), l("ul", "type compact"), l("li", "type"), l("ol dl menu dir", "compact"), l("pre", "width xml:space"), l("hr", "align noshade size width"), l("isindex", "prompt"), l("table", "summary width frame rules cellspacing cellpadding align bgcolor"), l("col", "width align char charoff valign"), l("colgroup", "width align char charoff valign"), l("thead", "align char charoff valign"), l("tr", "align char charoff valign bgcolor"), l("th", "axis align char charoff valign nowrap bgcolor width height"), l("form", "accept"), l("td", "abbr axis scope align char charoff valign nowrap bgcolor width height"), l("tfoot", "align char charoff valign"), l("tbody", "align char charoff valign"), l("area", "nohref"), l("body", "background bgcolor text link vlink alink")), "html4" !== e && (l("input button select textarea", "autofocus"), l("input textarea", "placeholder"), l("a", "download"), l("link script img", "crossorigin"), l("iframe", "sandbox seamless allowfullscreen")), pi(Ci("a form meter progress dfn"), function(e) { s[e] && delete s[e].children[e] }), delete s.caption.children.table, delete s.script, di[e] = s) },
        xi = function(e, n) { var r; return e && (r = {}, "string" == typeof e && (e = { "*": e }), pi(e, function(e, t) { r[t] = r[t.toUpperCase()] = "map" === n ? mi(e, /[, ]/) : yi(e, /[, ]/) })), r };

    function zi(i) { var e, t, n, r, o, a, u, s, l, c, f, d, h, z = {},
            m = {},
            N = [],
            g = {},
            p = {},
            v = function(e, t, n) { var r = i[e]; return r ? r = mi(r, /[, ]/, mi(r.toUpperCase(), /[, ]/)) : (r = di[e]) || (r = mi(t, " ", mi(t.toUpperCase(), " ")), r = vi(r, n), di[e] = r), r };
        n = wi((i = i || {}).schema), !1 === i.verify_html && (i.valid_elements = "*[*]"), e = xi(i.valid_styles), t = xi(i.invalid_styles, "map"), s = xi(i.valid_classes, "map"), r = v("whitespace_elements", "pre script noscript style textarea video audio iframe object code"), o = v("self_closing_elements", "colgroup dd dt li option p td tfoot th thead tr"), a = v("short_ended_elements", "area base basefont br col frame hr img input isindex link meta param embed source wbr track"), u = v("boolean_attributes", "checked compact declare defer disabled ismap multiple nohref noresize noshade nowrap readonly selected autoplay loop controls"), c = v("non_empty_elements", "td th iframe video audio object script pre code", a), f = v("move_caret_before_on_enter_elements", "table", c), d = v("text_block_elements", "h1 h2 h3 h4 h5 h6 p div address pre form blockquote center dir fieldset header footer article section hgroup aside main nav figure"), l = v("block_elements", "hr table tbody thead tfoot th tr td li ol ul caption dl dt dd noscript menu isindex option datalist select optgroup figcaption details summary", d), h = v("text_inline_elements", "span strong b em i font strike u var cite dfn code mark q sup sub samp"), pi((i.special || "script noscript noframes noembed title style textarea xmp").split(" "), function(e) { p[e] = new RegExp("</" + e + "[^>]*>", "gi") }); var E = function(e) { return new RegExp("^" + e.replace(/([?+*])/g, ".$1") + "$") },
            y = function(e) { var t, n, r, o, i, a, u, s, l, c, f, d, h, m, g, p, v, y, b, C = /^([#+\-])?([^\[!\/]+)(?:\/([^\[!]+))?(?:(!?)\[([^\]]+)\])?$/,
                    w = /^([!\-])?(\w+[\\:]:\w+|[^=:<]+)?(?:([=:<])(.*))?$/,
                    x = /[*?+]/; if (e)
                    for (e = Ci(e, ","), z["@"] && (p = z["@"].attributes, v = z["@"].attributesOrder), t = 0, n = e.length; t < n; t++)
                        if (i = C.exec(e[t])) { if (m = i[1], l = i[2], g = i[3], s = i[5], a = { attributes: d = {}, attributesOrder: h = [] }, "#" === m && (a.paddEmpty = !0), "-" === m && (a.removeEmpty = !0), "!" === i[4] && (a.removeEmptyAttrs = !0), p) { for (y in p) d[y] = p[y];
                                h.push.apply(h, v) } if (s)
                                for (r = 0, o = (s = Ci(s, "|")).length; r < o; r++)
                                    if (i = w.exec(s[r])) { if (u = {}, f = i[1], c = i[2].replace(/[\\:]:/g, ":"), m = i[3], b = i[4], "!" === f && (a.attributesRequired = a.attributesRequired || [], a.attributesRequired.push(c), u.required = !0), "-" === f) { delete d[c], h.splice(bi(h, c), 1); continue }
                                        m && ("=" === m && (a.attributesDefault = a.attributesDefault || [], a.attributesDefault.push({ name: c, value: b }), u.defaultValue = b), ":" === m && (a.attributesForced = a.attributesForced || [], a.attributesForced.push({ name: c, value: b }), u.forcedValue = b), "<" === m && (u.validValues = mi(b, "?"))), x.test(c) ? (a.attributePatterns = a.attributePatterns || [], u.pattern = E(c), a.attributePatterns.push(u)) : (d[c] || h.push(c), d[c] = u) }
                            p || "@" !== l || (p = d, v = h), g && (a.outputName = l, z[g] = a), x.test(l) ? (a.pattern = E(l), N.push(a)) : z[l] = a } },
            b = function(e) { z = {}, N = [], y(e), pi(n, function(e, t) { m[t] = e.children }) },
            C = function(e) { var a = /^(~)?(.+)$/;
                e && (di.text_block_elements = di.block_elements = null, pi(Ci(e, ","), function(e) { var t = a.exec(e),
                        n = "~" === t[1],
                        r = n ? "span" : "div",
                        o = t[2]; if (m[o] = m[r], g[o] = r, n || (l[o.toUpperCase()] = {}, l[o] = {}), !z[o]) { var i = z[r];
                        delete(i = vi({}, i)).removeEmptyAttrs, delete i.removeEmpty, z[o] = i }
                    pi(m, function(e, t) { e[r] && (m[t] = e = vi({}, m[t]), e[o] = e[r]) }) })) },
            w = function(e) { var o = /^([+\-]?)(\w+)\[([^\]]+)\]$/;
                di[i.schema] = null, e && pi(Ci(e, ","), function(e) { var t, n, r = o.exec(e);
                    r && (n = r[1], t = n ? m[r[2]] : m[r[2]] = { "#comment": {} }, t = m[r[2]], pi(Ci(r[3], "|"), function(e) { "-" === n ? delete t[e] : t[e] = {} })) }) },
            x = function(e) { var t, n = z[e]; if (n) return n; for (t = N.length; t--;)
                    if ((n = N[t]).pattern.test(e)) return n }; return i.valid_elements ? b(i.valid_elements) : (pi(n, function(e, t) { z[t] = { attributes: e.attributes, attributesOrder: e.attributesOrder }, m[t] = e.children }), "html5" !== i.schema && pi(Ci("strong/b em/i"), function(e) { e = Ci(e, "/"), z[e[1]].outputName = e[0] }), pi(Ci("ol ul sub sup blockquote span font a table tbody tr strong em b i"), function(e) { z[e] && (z[e].removeEmpty = !0) }), pi(Ci("p h1 h2 h3 h4 h5 h6 th td pre div address caption li"), function(e) { z[e].paddEmpty = !0 }), pi(Ci("span"), function(e) { z[e].removeEmptyAttrs = !0 })), C(i.custom_elements), w(i.valid_children), y(i.extended_valid_elements), w("+ol[ul|ol],+ul[ul|ol]"), pi({ dd: "dl", dt: "dl", li: "ul ol", td: "tr", th: "tr", tr: "tbody thead tfoot", tbody: "table", thead: "table", tfoot: "table", legend: "fieldset", area: "map", param: "video audio object" }, function(e, t) { z[t] && (z[t].parentsRequired = Ci(e)) }), i.invalid_elements && pi(yi(i.invalid_elements), function(e) { z[e] && delete z[e] }), x("span") || y("span[!data-mce-type|*]"), { children: m, elements: z, getValidStyles: function() { return e }, getValidClasses: function() { return s }, getBlockElements: function() { return l }, getInvalidStyles: function() { return t }, getShortEndedElements: function() { return a }, getTextBlockElements: function() { return d }, getTextInlineElements: function() { return h }, getBoolAttrs: function() { return u }, getElementRule: x, getSelfClosingElements: function() { return o }, getNonEmptyElements: function() { return c }, getMoveCaretBeforeOnEnterElements: function() { return f }, getWhiteSpaceElements: function() { return r }, getSpecialElements: function() { return p }, isValidChild: function(e, t) { var n = m[e.toLowerCase()]; return !(!n || !n[t.toLowerCase()]) }, isValid: function(e, t) { var n, r, o = x(e); if (o) { if (!t) return !0; if (o.attributes[t]) return !0; if (n = o.attributePatterns)
                        for (r = n.length; r--;)
                            if (n[r].pattern.test(e)) return !0 } return !1 }, getCustomElements: function() { return g }, addValidElements: y, setValidElements: b, addCustomElements: C, addValidChildren: w } } var Ni, Ei = function(e, t, n, r) { var o = function(e) { return 1 < (e = parseInt(e, 10).toString(16)).length ? e : "0" + e }; return "#" + o(t) + o(n) + o(r) },
        Si = function(b, e) { var C, t, l, c, w = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi,
                x = /(?:url(?:(?:\(\s*\"([^\"]+)\"\s*\))|(?:\(\s*\'([^\']+)\'\s*\))|(?:\(\s*([^)\s]+)\s*\))))|(?:\'([^\']+)\')|(?:\"([^\"]+)\")/gi,
                z = /\s*([^:]+):\s*([^;]+);?/g,
                N = /\s+$/,
                E = {},
                S = "\ufeff"; for (b = b || {}, e && (l = e.getValidStyles(), c = e.getInvalidStyles()), t = ("\\\" \\' \\; \\: ; : " + S).split(" "), C = 0; C < t.length; C++) E[t[C]] = S + C, E[S + C] = t[C]; return { toHex: function(e) { return e.replace(w, Ei) }, parse: function(e) { var t, n, r, o, i, a, u, s, l = {},
                        c = b.url_converter,
                        f = b.url_converter_scope || this,
                        d = function(e, t, n) { var r, o, i, a; if ((r = l[e + "-top" + t]) && (o = l[e + "-right" + t]) && (i = l[e + "-bottom" + t]) && (a = l[e + "-left" + t])) { var u = [r, o, i, a]; for (C = u.length - 1; C-- && u[C] === u[C + 1];); - 1 < C && n || (l[e + t] = -1 === C ? u[0] : u.join(" "), delete l[e + "-top" + t], delete l[e + "-right" + t], delete l[e + "-bottom" + t], delete l[e + "-left" + t]) } },
                        h = function(e) { var t, n = l[e]; if (n) { for (t = (n = n.split(" ")).length; t--;)
                                    if (n[t] !== n[0]) return !1;
                                return l[e] = n[0], !0 } },
                        m = function(e) { return o = !0, E[e] },
                        g = function(e, t) { return o && (e = e.replace(/\uFEFF[0-9]/g, function(e) { return E[e] })), t || (e = e.replace(/\\([\'\";:])/g, "$1")), e },
                        p = function(e) { return String.fromCharCode(parseInt(e.slice(1), 16)) },
                        v = function(e) { return e.replace(/\\[0-9a-f]+/gi, p) },
                        y = function(e, t, n, r, o, i) { if (o = o || i) return "'" + (o = g(o)).replace(/\'/g, "\\'") + "'"; if (t = g(t || n || r), !b.allow_script_urls) { var a = t.replace(/[\s\r\n]+/g, ""); if (/(java|vb)script:/i.test(a)) return ""; if (!b.allow_svg_data_urls && /^data:image\/svg/i.test(a)) return "" } return c && (t = c.call(f, t, "style")), "url('" + t.replace(/\'/g, "\\'") + "')" }; if (e) { for (e = (e = e.replace(/[\u0000-\u001F]/g, "")).replace(/\\[\"\';:\uFEFF]/g, m).replace(/\"[^\"]+\"|\'[^\']+\'/g, function(e) { return e.replace(/[;:]/g, m) }); t = z.exec(e);)
                            if (z.lastIndex = t.index + t[0].length, n = t[1].replace(N, "").toLowerCase(), r = t[2].replace(N, ""), n && r) { if (n = v(n), r = v(r), -1 !== n.indexOf(S) || -1 !== n.indexOf('"')) continue; if (!b.allow_script_urls && ("behavior" === n || /expression\s*\(|\/\*|\*\//.test(r))) continue; "font-weight" === n && "700" === r ? r = "bold" : "color" !== n && "background-color" !== n || (r = r.toLowerCase()), r = (r = r.replace(w, Ei)).replace(x, y), l[n] = o ? g(r, !0) : r }
                        d("border", "", !0), d("border", "-width"), d("border", "-color"), d("border", "-style"), d("padding", ""), d("margin", ""), i = "border", u = "border-style", s = "border-color", h(a = "border-width") && h(u) && h(s) && (l[i] = l[a] + " " + l[u] + " " + l[s], delete l[a], delete l[u], delete l[s]), "medium none" === l.border && delete l.border, "none" === l["border-image"] && delete l["border-image"] } return l }, serialize: function(i, e) { var t, n, r, o, a, u = "",
                        s = function(e) { var t, n, r, o; if (t = l[e])
                                for (n = 0, r = t.length; n < r; n++) e = t[n], (o = i[e]) && (u += (0 < u.length ? " " : "") + e + ": " + o + ";") }; if (e && l) s("*"), s(e);
                    else
                        for (t in i) !(n = i[t]) || c && (r = t, o = e, a = void 0, (a = c["*"]) && a[r] || (a = c[o]) && a[r]) || (u += (0 < u.length ? " " : "") + t + ": " + n + ";"); return u } } },
        ki = un.each,
        Ti = un.grep,
        Ai = Fe.ie,
        Mi = /^([a-z0-9],?)+$/i,
        Ri = /^[ \t\r\n]*$/,
        Di = function(n, r, o) { var i = r.keep_values,
                e = { set: function(e, t, n) { r.url_converter && (t = r.url_converter.call(r.url_converter_scope || o(), t, n, e[0])), e.attr("data-mce-" + n, t).attr(n, t) }, get: function(e, t) { return e.attr("data-mce-" + t) || e.attr(t) } },
                t = { style: { set: function(e, t) { null === t || "object" != typeof t ? (i && e.attr("data-mce-style", t), e.attr("style", t)) : e.css(t) }, get: function(e) { var t = e.attr("data-mce-style") || e.attr("style"); return t = n.serialize(n.parse(t), e[0].nodeName) } } }; return i && (t.href = t.src = e), t },
        Bi = function(e, t) { var n = t.attr("style"),
                r = e.serialize(e.parse(n), t[0].nodeName);
            r || (r = null), t.attr("data-mce-style", r) },
        Oi = function(e, t) { var n, r, o = 0; if (e)
                for (n = e.nodeType, e = e.previousSibling; e; e = e.previousSibling) r = e.nodeType, (!t || 3 !== r || r !== n && e.nodeValue.length) && (o++, n = r); return o };

    function Hi(a, u) { var s, l = this;
        void 0 === u && (u = {}); var r = {},
            c = j.window,
            o = {},
            t = 0,
            e = function U(m, g) { void 0 === g && (g = {}); var p, v = 0,
                    y = {};
                p = g.maxLoadTime || 5e3; var b = function(e) { m.getElementsByTagName("head")[0].appendChild(e) },
                    n = function(e, t, n) { var o, r, i, a, u = function(e) { a.status = e, a.passed = [], a.failed = [], o && (o.onload = null, o.onerror = null, o = null) },
                            s = function() { for (var e = a.passed, t = e.length; t--;) e[t]();
                                u(2) },
                            l = function() { for (var e = a.failed, t = e.length; t--;) e[t]();
                                u(3) },
                            c = function(e, t) { e() || ((new Date).getTime() - i < p ? We.setTimeout(t) : l()) },
                            f = function() { c(function() { for (var e, t, n = m.styleSheets, r = n.length; r--;)
                                        if ((t = (e = n[r]).ownerNode ? e.ownerNode : e.owningElement) && t.id === o.id) return s(), !0 }, f) },
                            d = function() { c(function() { try { var e = r.sheet.cssRules; return s(), !!e } catch (t) {} }, d) }; if (e = un._addCacheSuffix(e), y[e] ? a = y[e] : (a = { passed: [], failed: [] }, y[e] = a), t && a.passed.push(t), n && a.failed.push(n), 1 !== a.status)
                            if (2 !== a.status)
                                if (3 !== a.status) { if (a.status = 1, (o = m.createElement("link")).rel = "stylesheet", o.type = "text/css", o.id = "u" + v++, o.async = !1, o.defer = !1, i = (new Date).getTime(), g.contentCssCors && (o.crossOrigin = "anonymous"), "onload" in o && !((h = j.navigator.userAgent.match(/WebKit\/(\d*)/)) && parseInt(h[1], 10) < 536)) o.onload = f, o.onerror = l;
                                    else { if (0 < j.navigator.userAgent.indexOf("Firefox")) return (r = m.createElement("style")).textContent = '@import "' + e + '"', d(), void b(r);
                                        f() } var h;
                                    b(o), o.href = e } else l();
                        else s() },
                    t = function(t) { return bo.nu(function(e) { n(t, q(e, $(No.value(t))), q(e, $(No.error(t)))) }) },
                    o = function(e) { return e.fold(W, W) }; return { load: n, loadAll: function(e, n, r) { wo(X(e, t)).get(function(e) { var t = Y(e, function(e) { return e.isValue() });
                            0 < t.fail.length ? r(t.fail.map(o)) : n(t.pass.map(o)) }) } } }(a, { contentCssCors: u.contentCssCors }),
            f = [],
            d = u.schema ? u.schema : zi({}),
            i = Si({ url_converter: u.url_converter, url_converter_scope: u.url_converter_scope }, u.schema),
            h = u.ownEvents ? new tt : tt.Event,
            n = d.getBlockElements(),
            m = Un.overrideDefaults(function() { return { context: a, element: F.getRoot() } }),
            g = function(e) { if (e && a && "string" == typeof e) { var t = a.getElementById(e); return t && t.id !== e ? a.getElementsByName(e)[1] : t } return e },
            p = function(e) { return "string" == typeof e && (e = g(e)), m(e) },
            v = function(e, t, n) { var r, o, i = p(e); return i.length && (o = (r = s[t]) && r.get ? r.get(i, t) : i.attr(t)), void 0 === o && (o = n || ""), o },
            y = function(e) { var t = g(e); return t ? t.attributes : [] },
            b = function(e, t, n) { var r, o; "" === n && (n = null); var i = p(e);
                r = i.attr(t), i.length && ((o = s[t]) && o.set ? o.set(i, n, t) : i.attr(t, n), r !== n && u.onSetAttrib && u.onSetAttrib({ attrElm: i, attrName: t, attrValue: n })) },
            C = function() { return u.root_element || a.body },
            w = function(e, t) { return go.getPos(a.body, g(e), t) },
            x = function(e, t, n) { var r = p(e); return n ? r.css(t) : ("float" === (t = t.replace(/-(\D)/g, function(e, t) { return t.toUpperCase() })) && (t = Fe.ie && Fe.ie < 12 ? "styleFloat" : "cssFloat"), r[0] && r[0].style ? r[0].style[t] : undefined) },
            z = function(e) { var t, n; return e = g(e), t = x(e, "width"), n = x(e, "height"), -1 === t.indexOf("px") && (t = 0), -1 === n.indexOf("px") && (n = 0), { w: parseInt(t, 10) || e.offsetWidth || e.clientWidth, h: parseInt(n, 10) || e.offsetHeight || e.clientHeight } },
            N = function(e, t) { var n; if (!e) return !1; if (!Array.isArray(e)) { if ("*" === t) return 1 === e.nodeType; if (Mi.test(t)) { var r = t.toLowerCase().split(/,/),
                            o = e.nodeName.toLowerCase(); for (n = r.length - 1; 0 <= n; n--)
                            if (r[n] === o) return !0;
                        return !1 } if (e.nodeType && 1 !== e.nodeType) return !1 } var i = Array.isArray(e) ? e : [e]; return 0 < Pt(t, i[0].ownerDocument || i[0], null, i).length },
            E = function(e, t, n, r) { var o, i = [],
                    a = g(e); for (r = r === undefined, n = n || ("BODY" !== C().nodeName ? C().parentNode : null), un.is(t, "string") && (t = "*" === (o = t) ? function(e) { return 1 === e.nodeType } : function(e) { return N(e, o) }); a && a !== n && a.nodeType && 9 !== a.nodeType;) { if (!t || "function" == typeof t && t(a)) { if (!r) return [a];
                        i.push(a) }
                    a = a.parentNode } return r ? i : null },
            S = function(e, t, n) { var r = t; if (e)
                    for ("string" == typeof t && (r = function(e) { return N(e, t) }), e = e[n]; e; e = e[n])
                        if ("function" == typeof r && r(e)) return e;
                return null },
            k = function(e, n, r) { var o, t = "string" == typeof e ? g(e) : e; if (!t) return !1; if (un.isArray(t) && (t.length || 0 === t.length)) return o = [], ki(t, function(e, t) { e && ("string" == typeof e && (e = g(e)), o.push(n.call(r, e, t))) }), o; var i = r || l; return n.call(i, t) },
            T = function(e, t) { p(e).each(function(e, n) { ki(t, function(e, t) { b(n, t, e) }) }) },
            A = function(e, r) { var t = p(e);
                Ai ? t.each(function(e, t) { if (!1 !== t.canHaveHTML) { for (; t.firstChild;) t.removeChild(t.firstChild); try { t.innerHTML = "<br>" + r, t.removeChild(t.firstChild) } catch (n) { Un("<div></div>").html("<br>" + r).contents().slice(1).appendTo(t) } return r } }) : t.html(r) },
            M = function(e, n, r, o, i) { return k(e, function(e) { var t = "string" == typeof n ? a.createElement(n) : n; return T(t, r), o && ("string" != typeof o && o.nodeType ? t.appendChild(o) : "string" == typeof o && A(t, o)), i ? t : e.appendChild(t) }) },
            R = function(e, t, n) { return M(a.createElement(e), e, t, n, !0) },
            D = ci.decode,
            B = ci.encodeAllRaw,
            O = function(e, t) { var n = p(e); return t ? n.each(function() { for (var e; e = this.firstChild;) 3 === e.nodeType && 0 === e.data.length ? this.removeChild(e) : this.parentNode.insertBefore(e, this) }).remove() : n.remove(), 1 < n.length ? n.toArray() : n[0] },
            H = function(e, t, n) { p(e).toggleClass(t, n).each(function() { "" === this.className && Un(this).attr("class", null) }) },
            _ = function(t, e, n) { return k(e, function(e) { return un.is(e, "array") && (t = t.cloneNode(!0)), n && ki(Ti(e.childNodes), function(e) { t.appendChild(e) }), e.parentNode.replaceChild(t, e) }) },
            P = function() { return a.createRange() },
            L = function(e, t, n, r) { if (un.isArray(e)) { for (var o = e.length, i = []; o--;) i[o] = L(e[o], t, n, r); return i } return !u.collect || e !== a && e !== c || f.push([e, t, n, r]), h.bind(e, t, n, r || F) },
            V = function(e, t, n) { var r; if (un.isArray(e)) { r = e.length; for (var o = []; r--;) o[r] = V(e[r], t, n); return o } if (f && (e === a || e === c))
                    for (r = f.length; r--;) { var i = f[r];
                        e !== i[0] || t && t !== i[1] || n && n !== i[2] || h.unbind(i[0], i[1], i[2]) }
                return h.unbind(e, t, n) },
            I = function(e) { if (e && _o.isElement(e)) { var t = e.getAttribute("data-mce-contenteditable"); return t && "inherit" !== t ? t : "inherit" !== e.contentEditable ? e.contentEditable : null } return null },
            F = { doc: a, settings: u, win: c, files: o, stdMode: !0, boxModel: !0, styleSheetLoader: e, boundEvents: f, styles: i, schema: d, events: h, isBlock: function(e) { if ("string" == typeof e) return !!n[e]; if (e) { var t = e.nodeType; if (t) return !(1 !== t || !n[e.nodeName]) } return !1 }, $: m, $$: p, root: null, clone: function(t, e) { if (!Ai || 1 !== t.nodeType || e) return t.cloneNode(e); if (e) return null; var n = a.createElement(t.nodeName); return ki(y(t), function(e) { b(n, e.nodeName, v(t, e.nodeName)) }), n }, getRoot: C, getViewPort: function(e) { var t = e || c,
                        n = t.document.documentElement; return { x: t.pageXOffset || n.scrollLeft, y: t.pageYOffset || n.scrollTop, w: t.innerWidth || n.clientWidth, h: t.innerHeight || n.clientHeight } }, getRect: function(e) { var t, n; return e = g(e), t = w(e), n = z(e), { x: t.x, y: t.y, w: n.w, h: n.h } }, getSize: z, getParent: function(e, t, n) { var r = E(e, t, n, !1); return r && 0 < r.length ? r[0] : null }, getParents: E, get: g, getNext: function(e, t) { return S(e, t, "nextSibling") }, getPrev: function(e, t) { return S(e, t, "previousSibling") }, select: function(e, t) { return Pt(e, g(t) || u.root_element || a, []) }, is: N, add: M, create: R, createHTML: function(e, t, n) { var r, o = ""; for (r in o += "<" + e, t) t.hasOwnProperty(r) && null !== t[r] && "undefined" != typeof t[r] && (o += " " + r + '="' + B(t[r]) + '"'); return void 0 !== n ? o + ">" + n + "</" + e + ">" : o + " />" }, createFragment: function(e) { var t, n = a.createElement("div"),
                        r = a.createDocumentFragment(); for (e && (n.innerHTML = e); t = n.firstChild;) r.appendChild(t); return r }, remove: O, setStyle: function(e, t, n) { var r = K(t) ? p(e).css(t, n) : p(e).css(t);
                    u.update_styles && Bi(i, r) }, getStyle: x, setStyles: function(e, t) { var n = p(e).css(t);
                    u.update_styles && Bi(i, n) }, removeAllAttribs: function(e) { return k(e, function(e) { var t, n = e.attributes; for (t = n.length - 1; 0 <= t; t--) e.removeAttributeNode(n.item(t)) }) }, setAttrib: b, setAttribs: T, getAttrib: v, getPos: w, parseStyle: function(e) { return i.parse(e) }, serializeStyle: function(e, t) { return i.serialize(e, t) }, addStyle: function(e) { var t, n; if (F !== Hi.DOM && a === j.document) { if (r[e]) return;
                        r[e] = !0 }(n = a.getElementById("mceDefaultStyles")) || ((n = a.createElement("style")).id = "mceDefaultStyles", n.type = "text/css", (t = a.getElementsByTagName("head")[0]).firstChild ? t.insertBefore(n, t.firstChild) : t.appendChild(n)), n.styleSheet ? n.styleSheet.cssText += e : n.appendChild(a.createTextNode(e)) }, loadCSS: function(e) { var n;
                    F === Hi.DOM || a !== j.document ? (e || (e = ""), n = a.getElementsByTagName("head")[0], ki(e.split(","), function(e) { var t;
                        e = un._addCacheSuffix(e), o[e] || (o[e] = !0, t = R("link", { rel: "stylesheet", href: e }), n.appendChild(t)) })) : Hi.DOM.loadCSS(e) }, addClass: function(e, t) { p(e).addClass(t) }, removeClass: function(e, t) { H(e, t, !1) }, hasClass: function(e, t) { return p(e).hasClass(t) }, toggleClass: H, show: function(e) { p(e).show() }, hide: function(e) { p(e).hide() }, isHidden: function(e) { return "none" === p(e).css("display") }, uniqueId: function(e) { return (e || "mce_") + t++ }, setHTML: A, getOuterHTML: function(e) { var t = "string" == typeof e ? g(e) : e; return _o.isElement(t) ? t.outerHTML : Un("<div></div>").append(Un(t).clone()).html() }, setOuterHTML: function(e, t) { p(e).each(function() { try { if ("outerHTML" in this) return void(this.outerHTML = t) } catch (e) {}
                        O(Un(this).html(t), !0) }) }, decode: D, encode: B, insertAfter: function(e, t) { var r = g(t); return k(e, function(e) { var t, n; return t = r.parentNode, (n = r.nextSibling) ? t.insertBefore(e, n) : t.appendChild(e), e }) }, replace: _, rename: function(t, e) { var n; return t.nodeName !== e.toUpperCase() && (n = R(e), ki(y(t), function(e) { b(n, e.nodeName, v(t, e.nodeName)) }), _(n, t, !0)), n || t }, findCommonAncestor: function(e, t) { for (var n, r = e; r;) { for (n = t; n && r !== n;) n = n.parentNode; if (r === n) break;
                        r = r.parentNode } return !r && e.ownerDocument ? e.ownerDocument.documentElement : r }, toHex: function(e) { return i.toHex(un.trim(e)) }, run: k, getAttribs: y, isEmpty: function(e, t) { var n, r, o, i, a = 0; if (e = e.firstChild) { var u = new Po(e, e.parentNode),
                            s = d ? d.getWhiteSpaceElements() : {};
                        t = t || (d ? d.getNonEmptyElements() : null);
                        do { if (o = e.nodeType, _o.isElement(e)) { var l = e.getAttribute("data-mce-bogus"); if (l) { e = u.next("all" === l); continue } if (i = e.nodeName.toLowerCase(), t && t[i]) { if ("br" !== i) return !1;
                                    a++, e = u.next(); continue } for (n = (r = y(e)).length; n--;)
                                    if ("name" === (i = r[n].nodeName) || "data-mce-bookmark" === i) return !1 } if (8 === o) return !1; if (3 === o && !Ri.test(e.nodeValue)) return !1; if (3 === o && e.parentNode && s[e.parentNode.nodeName] && Ri.test(e.nodeValue)) return !1;
                            e = u.next() } while (e) } return a <= 1 }, createRng: P, nodeIndex: Oi, split: function(e, t, n) { var r, o, i, a = P(); if (e && t) return a.setStart(e.parentNode, Oi(e)), a.setEnd(t.parentNode, Oi(t)), r = a.extractContents(), (a = P()).setStart(t.parentNode, Oi(t) + 1), a.setEnd(e.parentNode, Oi(e) + 1), o = a.extractContents(), (i = e.parentNode).insertBefore(Qo.trimNode(F, r), e), n ? i.insertBefore(n, e) : i.insertBefore(t, e), i.insertBefore(Qo.trimNode(F, o), e), O(e), n || t }, bind: L, unbind: V, fire: function(e, t, n) { return h.fire(e, t, n) }, getContentEditable: I, getContentEditableParent: function(e) { for (var t = C(), n = null; e && e !== t && null === (n = I(e)); e = e.parentNode); return n }, destroy: function() { if (f)
                        for (var e = f.length; e--;) { var t = f[e];
                            h.unbind(t[0], t[1], t[2]) }
                    Pt.setDocument && Pt.setDocument() }, isChildOf: function(e, t) { for (; e;) { if (t === e) return !0;
                        e = e.parentNode } return !1 }, dumpRng: function(e) { return "startContainer: " + e.startContainer.nodeName + ", startOffset: " + e.startOffset + ", endContainer: " + e.endContainer.nodeName + ", endOffset: " + e.endOffset } }; return s = Di(i, u, function() { return F }), F }(Ni = Hi || (Hi = {})).DOM = Ni(j.document), Ni.nodeIndex = Oi; var _i = Hi,
        Pi = _i.DOM,
        Li = un.each,
        Vi = un.grep,
        Ii = function() {
            function e() { this.states = {}, this.queue = [], this.scriptLoadedCallbacks = {}, this.queueLoadedCallbacks = [], this.loading = 0 } return e.prototype.loadScript = function(e, t, n) { var r, o, i = Pi;
                o = i.uniqueId(), (r = j.document.createElement("script")).id = o, r.type = "text/javascript", r.src = un._addCacheSuffix(e), r.onload = function() { i.remove(o), r && (r.onreadystatechange = r.onload = r = null), t() }, r.onerror = function() { O(n) ? n() : "undefined" != typeof j.console && j.console.log && j.console.log("Failed to load script: " + e) }, (j.document.getElementsByTagName("head")[0] || j.document.body).appendChild(r) }, e.prototype.isDone = function(e) { return 2 === this.states[e] }, e.prototype.markDone = function(e) { this.states[e] = 2 }, e.prototype.add = function(e, t, n, r) { this.states[e] === undefined && (this.queue.push(e), this.states[e] = 0), t && (this.scriptLoadedCallbacks[e] || (this.scriptLoadedCallbacks[e] = []), this.scriptLoadedCallbacks[e].push({ success: t, failure: r, scope: n || this })) }, e.prototype.load = function(e, t, n, r) { return this.add(e, t, n, r) }, e.prototype.remove = function(e) { delete this.states[e], delete this.scriptLoadedCallbacks[e] }, e.prototype.loadQueue = function(e, t, n) { this.loadScripts(this.queue, e, t, n) }, e.prototype.loadScripts = function(n, e, t, r) { var o, i = this,
                    a = [],
                    u = function(t, e) { Li(i.scriptLoadedCallbacks[e], function(e) { O(e[t]) && e[t].call(e.scope) }), i.scriptLoadedCallbacks[e] = undefined };
                i.queueLoadedCallbacks.push({ success: e, failure: r, scope: t || this }), (o = function() { var e = Vi(n); if (n.length = 0, Li(e, function(e) { 2 !== i.states[e] ? 3 !== i.states[e] ? 1 !== i.states[e] && (i.states[e] = 1, i.loading++, i.loadScript(e, function() { i.states[e] = 2, i.loading--, u("success", e), o() }, function() { i.states[e] = 3, i.loading--, a.push(e), u("failure", e), o() })) : u("failure", e) : u("success", e) }), !i.loading) { var t = i.queueLoadedCallbacks.slice(0);
                        i.queueLoadedCallbacks.length = 0, Li(t, function(e) { 0 === a.length ? O(e.success) && e.success.call(e.scope) : O(e.failure) && e.failure.call(e.scope, a) }) } })() }, e.ScriptLoader = new e, e }(),
        Fi = function() { return (Fi = Object.assign || function(e) { for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]); return e }).apply(this, arguments) };

    function Ui(e, t) { var n = {}; for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]); if (null != e && "function" == typeof Object.getOwnPropertySymbols) { var o = 0; for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && (n[r[o]] = e[r[o]]) } return n }(function zN(e, t) {
        function n() { this.constructor = e }
        Xh(e, t), e.prototype = null === t ? Object.create(t) : (t.prototype, new n) }),
    function NN(e, t, n, r) { var o, i = arguments.length,
            a = i < 3 ? t : null === r ? Object.getOwnPropertyDescriptor(t, n) : r; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) Reflect.decorate(e, t, n, r);
        else
            for (var u = e.length - 1; 0 <= u; u--) e[u] && (i < 3 ? o(a) : 3 < i ? o(t, n, a) : o(t, n)); return 3 < i && a && Object.defineProperty(t, n, a), a },
    function EN(n, r) { return function(e, t) { r(e, t, n) } },
    function SN(e, t) { if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t) },
    function kN(i, a, u, s) { return new(u || Promise)(function(e, t) {
            function n(e) { try { o(s.next(e)) } catch (xN) { t(xN) } }

            function r(e) { try { o(s["throw"](e)) } catch (xN) { t(xN) } }

            function o(t) { t.done ? e(t.value) : new u(function(e) { e(t.value) }).then(n, r) }
            o(s.apply(i, a || []).next()) }) },
    function TN(r, o) { var i, a, u, e, s = { label: 0, sent: function() { if (1 & u[0]) throw u[1]; return u[1] }, trys: [], ops: [] }; return t(0), t(1), t(2), "function" == typeof Symbol && (e[Symbol.iterator] = function() { return this }), e;

        function t(n) { return function(e) { return function t(e) { if (i) throw new TypeError("Generator is already executing."); for (; s;) try { if (a && (2 & e[0] ? a["return"] : e[0] ? a["throw"] || (a["return"] && u.call(a), 0) : a.next) && !u.call(a, e[1]).done) return u; switch (u && (e[0], u.value), e[0]) {
                            case 0:
                            case 1:
                                break;
                            case 4:
                                return s.label++, { value: e[1], done: !1 };
                            case 5:
                                s.label++, e[1]; continue;
                            case 7:
                                s.ops.pop(), s.trys.pop(); continue;
                            default:
                                if (!(0 < s.trys.length && u[u.length - 1] || 6 !== e[0] && 2 !== e[0])) continue; if (3 === e[0] && (!u || e[1] > u[0] && e[1] < u[3])) { s.label = e[1]; break } if (6 === e[0] && s.label < u[1]) { s.label = u[1]; break } if (u && s.label < u[2]) { s.label = u[2], s.ops.push(e); break }
                                u[2] && s.ops.pop(), s.trys.pop(); continue }
                        o.call(r, s) } catch (xN) {}
                    if (5 & e[0]) throw e[1]; return { value: e[0] ? e[1] : void 0, done: !0 } }([n, e]) } } },
    function AN(e, t) { for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]) },
    function MN() { for (var e = [], t = 0; t < arguments.length; t++) e.concat(gi(arguments[t])); return e },
    function RN(e, t, n) { if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined."); var o, i = n.apply(e, t || []),
            a = []; return r("next"), r("throw"), r("return"), o[Symbol.asyncIterator] = function() { return this }, o;

        function r(r) { i[r] && (o[r] = function(n) { return new Promise(function(e, t) { 1 < a.push([r, n, e, t]) || u(r, n) }) }) }

        function u(e, t) { try {! function n(e) { e.value instanceof ii ? Promise.resolve(e.value.v).then(s, l) : c(a[0][2], e) }(i[e](t)) } catch (xN) { c(a[0][3], xN) } }

        function s(e) { u("next", e) }

        function l(e) { u("throw", e) }

        function c(e, t) { e(t), a.shift(), a.length && u(a[0][0], a[0][1]) } },
    function DN(r) { var e, o; return t("next"), t("throw", function(e) { throw e }), t("return"), e[Symbol.iterator] = function() { return this }, e;

        function t(t, n) { e[t] = r[t] ? function(e) { return o ? n ? n(e) : e : { value: ii(r[t](e)), done: "return" === t } } : n } },
    function BN(i) { if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined."); var e, t = i[Symbol.asyncIterator]; return t ? t.call(i) : (fi(), n("next"), n("throw"), n("return"), e[Symbol.asyncIterator] = function() { return this }, e);

        function n(r) { e[r] = i[r] && function(n) { return new Promise(function(e, t) {! function o(t, e, n, r) { Promise.resolve(r).then(function(e) { t({ value: e, done: n }) }, e) }(e, t, i[r](n).done, n.value) }) } } },
    function ON(e, t) { return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : e.raw = t, e },
    function HN(e) { if (e && e.__esModule) return e; var t = {}; if (null != e)
            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]); return t["default"] = e, t },
    function _N(e) { return e && e.__esModule ? e : { "default": e } }; var ji, qi = function(e) { var t = e,
                n = function() { return t }; return { get: n, set: function(e) { t = e }, clone: function() { return qi(n()) } } },
        $i = {},
        Wi = qi("en"),
        Ki = { getData: function() { return Ar($i, function(e) { return Fi({}, e) }) }, setCode: function(e) { e && Wi.set(e) }, getCode: function() { return Wi.get() }, add: function(e, t) { var n = $i[e]; for (var r in n || ($i[e] = n = {}), t) n[r.toLowerCase()] = t[r] }, translate: function(e) { var t, n, r = $i[Wi.get()] || {},
                    o = function(e) { return O(e) ? Object.prototype.toString.call(e) : i(e) ? "" : "" + e },
                    i = function(e) { return "" === e || null === e || e === undefined },
                    a = function(e) { var t = o(e),
                            n = t.toLowerCase(); return Br(r, n) ? o(r[n]) : t },
                    u = function(e) { return e.replace(/{context:\w+}$/, "") },
                    s = function(e) { return e }; if (i(e)) return s(""); if (M(t = e) && Br(t, "raw")) return s(o(e.raw)); if (R(n = e) && 1 < n.length) { var l = e.slice(1); return s(u(a(e[0]).replace(/\{([0-9]+)\}/g, function(e, t) { return Br(l, t) ? o(l[t]) : e }))) } return s(u(a(e))) }, isRtl: function() { return Dr($i, Wi.get()).bind(function(e) { return Dr(e, "_dir") }).exists(function(e) { return "rtl" === e }) }, hasCode: function(e) { return Br($i, e) } },
        Xi = un.each;

    function Yi() { var r = this,
            o = [],
            a = {},
            u = {},
            i = [],
            s = function(e) { var t; return u[e] && (t = u[e].dependencies), t || [] },
            l = function(e, t) { return "object" == typeof t ? t : "string" == typeof e ? { prefix: "", resource: t, suffix: "" } : { prefix: e.prefix, resource: t, suffix: e.suffix } },
            c = function(e, n, t, r) { var o = s(e);
                Xi(o, function(e) { var t = l(n, e);
                    f(t.resource, t, undefined, undefined) }), t && (r ? t.call(r) : t.call(Ii)) },
            f = function(e, t, n, r, o) { if (!a[e]) { var i = "string" == typeof t ? t : t.prefix + t.resource + t.suffix;
                    0 !== i.indexOf("/") && -1 === i.indexOf("://") && (i = Yi.baseURL + "/" + i), a[e] = i.substring(0, i.lastIndexOf("/")), u[e] ? c(e, t, n, r) : Ii.ScriptLoader.add(i, function() { return c(e, t, n, r) }, r, o) } }; return { items: o, urls: a, lookup: u, _listeners: i, get: function(e) { return u[e] ? u[e].instance : undefined }, dependencies: s, requireLangPack: function(e, t) { var n = Ki.getCode(); if (n && !1 !== Yi.languageLoad) { if (t)
                        if (-1 !== (t = "," + t + ",").indexOf("," + n.substr(0, 2) + ",")) n = n.substr(0, 2);
                        else if (-1 === t.indexOf("," + n + ",")) return;
                    Ii.ScriptLoader.add(a[e] + "/langs/" + n + ".js") } }, add: function(t, e, n) { o.push(e), u[t] = { instance: e, dependencies: n }; var r = Y(i, function(e) { return e.name === t }); return i = r.fail, Xi(r.pass, function(e) { e.callback() }), e }, remove: function(e) { delete a[e], delete u[e] }, createUrl: l, addComponents: function(e, t) { var n = r.urls[e];
                Xi(t, function(e) { Ii.ScriptLoader.add(n + "/" + e) }) }, load: f, waitFor: function(e, t) { u.hasOwnProperty(e) ? t() : i.push({ name: e, callback: t }) } } }(ji = Yi || (Yi = {})).PluginManager = ji(), ji.ThemeManager = ji(); var Gi = Yi,
        Ji = function(t, n) { to(t).each(function(e) { e.dom().insertBefore(n.dom(), t.dom()) }) },
        Qi = function(e, t) { oo(e).fold(function() { to(e).each(function(e) { ea(e, t) }) }, function(e) { Ji(e, t) }) },
        Zi = function(t, n) { lo(t).fold(function() { ea(t, n) }, function(e) { t.dom().insertBefore(n.dom(), e.dom()) }) },
        ea = function(e, t) { e.dom().appendChild(t.dom()) },
        ta = function(t, e) { F(e, function(e) { ea(t, e) }) },
        na = function(e) { e.dom().textContent = "", F(uo(e), function(e) { ra(e) }) },
        ra = function(e) { var t = e.dom();
            null !== t.parentNode && t.parentNode.removeChild(t) },
        oa = function(e) { var t, n = uo(e);
            0 < n.length && (t = e, F(n, function(e) { Ji(t, e) })), ra(e) },
        ia = function(n, r) { var o = null; return { cancel: function() { null !== o && (j.clearTimeout(o), o = null) }, throttle: function() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    null === o && (o = j.setTimeout(function() { n.apply(null, e), o = null }, r)) } } },
        aa = function(e, t) { var n = Pr(e, t); return n === undefined || "" === n ? [] : n.split(" ") },
        ua = function(e) { return e.dom().classList !== undefined },
        sa = function(e) { return aa(e, "class") },
        la = function(e, t) { return o = t, i = aa(n = e, r = "class").concat([o]), Hr(n, r, i.join(" ")), !0; var n, r, o, i },
        ca = function(e, t) { return o = t, 0 < (i = G(aa(n = e, r = "class"), function(e) { return e !== o })).length ? Hr(n, r, i.join(" ")) : Lr(n, r), !1; var n, r, o, i },
        fa = function(e, t) { ua(e) ? e.dom().classList.add(t) : la(e, t) },
        da = function(e, t) { var n;
            ua(e) ? e.dom().classList.remove(t) : ca(e, t), 0 === (ua(n = e) ? n.dom().classList : sa(n)).length && Lr(n, "class") },
        ha = function(e, t) { return ua(e) && e.dom().classList.contains(t) },
        ma = function(e, t) { var n = []; return F(uo(e), function(e) { t(e) && (n = n.concat([e])), n = n.concat(ma(e, t)) }), n },
        ga = function(e, t) { return Jr(t, e) };

    function pa(e, t, n, r, o) { return e(n, r) ? T.some(n) : O(o) && o(n) ? T.none() : t(n, r, o) } var va, ya = function(e, t, n) { for (var r = e.dom(), o = O(n) ? n : $(!1); r.parentNode;) { r = r.parentNode; var i = yr.fromDom(r); if (t(i)) return T.some(i); if (o(i)) break } return T.none() },
        ba = function(e, t, n) { return pa(function(e) { return t(e) }, ya, e, t, n) },
        Ca = function(e, t, n) { return ya(e, function(e) { return Yr(e, t) }, n) },
        wa = function(e, t) { return n = t, o = (r = e) === undefined ? j.document : r.dom(), Gr(o) ? T.none() : T.from(o.querySelector(n)).map(yr.fromDom); var n, r, o },
        xa = function(e, t, n) { return pa(Yr, Ca, e, t, n) },
        za = $("mce-annotation"),
        Na = $("data-mce-annotation"),
        Ea = $("data-mce-annotation-uid"),
        Sa = function(r, e) { var t = r.selection.getRng(),
                n = yr.fromDom(t.startContainer),
                o = yr.fromDom(r.getBody()),
                i = e.fold(function() { return "." + za() }, function(e) { return "[" + Na() + '="' + e + '"]' }),
                a = so(n, t.startOffset).getOr(n),
                u = xa(a, i, function(e) { return Qr(e, o) }),
                s = function(e, t) { return n = t, (r = e.dom()) && r.hasAttribute && r.hasAttribute(n) ? T.some(Pr(e, t)) : T.none(); var n, r }; return u.bind(function(e) { return s(e, "" + Ea()).bind(function(n) { return s(e, "" + Na()).map(function(e) { var t = ka(r, n); return { uid: n, name: e, elements: t } }) }) }) },
        ka = function(e, t) { var n = yr.fromDom(e.getBody()); return ga(n, "[" + Ea() + '="' + t + '"]') },
        Ta = function(n, e) { var r, o, i, a = qi({}),
                l = function(e, t) { u(e, function(e) { return t(e), e }) },
                u = function(e, t) { var n = a.get(),
                        r = t(n.hasOwnProperty(e) ? n[e] : { listeners: [], previous: qi(T.none()) });
                    n[e] = r, a.set(n) },
                t = (r = function() { var e = a.get(),
                        t = le(Sr(e));
                    F(t, function(e) { u(e, function(u) { var s = u.previous.get(); return Sa(n, T.some(e)).fold(function() { var t;
                                s.isSome() && (l(t = e, function(e) { F(e.listeners, function(e) { return e(!1, t) }) }), u.previous.set(T.none())) }, function(e) { var t, n, r, o = e.uid,
                                    i = e.name,
                                    a = e.elements;
                                s.is(o) || (n = o, r = a, l(t = i, function(e) { F(e.listeners, function(e) { return e(!0, t, { uid: n, nodes: X(r, function(e) { return e.dom() }) }) }) }), u.previous.set(T.some(o))) }), { previous: u.previous, listeners: u.listeners } }) }) }, o = 30, i = null, { cancel: function() { null !== i && (j.clearTimeout(i), i = null) }, throttle: function() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        null !== i && j.clearTimeout(i), i = j.setTimeout(function() { r.apply(null, e), i = null }, o) } }); return n.on("remove", function() { t.cancel() }), n.on("NodeChange", function() { t.throttle() }), { addListener: function(e, t) { u(e, function(e) { return { previous: e.previous, listeners: e.listeners.concat([t]) } }) } } },
        Aa = function(e, n) { e.on("init", function() { e.serializer.addNodeFilter("span", function(e) { F(e, function(t) { var e;
                        (e = t, T.from(e.attr(Na())).bind(n.lookup)).each(function(e) {!1 === e.persistent && t.unwrap() }) }) }) }) },
        Ma = 0,
        Ra = function(e, t) { return yr.fromDom(e.dom().cloneNode(t)) },
        Da = function(e) { return Ra(e, !1) },
        Ba = function(e) { return Ra(e, !0) },
        Oa = function(e, t) { var n, r, o = eo(e).dom(),
                i = yr.fromDom(o.createDocumentFragment()),
                a = (n = t, (r = (o || j.document).createElement("div")).innerHTML = n, uo(yr.fromDom(r)));
            ta(i, a), na(e), ea(e, i) },
        Ha = "\ufeff",
        _a = function(e) { return e === Ha },
        Pa = Ha,
        La = function(e) { return e.replace(new RegExp(Ha, "g"), "") },
        Va = _o.isElement,
        Ia = _o.isText,
        Fa = function(e) { return Ia(e) && (e = e.parentNode), Va(e) && e.hasAttribute("data-mce-caret") },
        Ua = function(e) { return Ia(e) && _a(e.data) },
        ja = function(e) { return Fa(e) || Ua(e) },
        qa = function(e) { return e.firstChild !== e.lastChild || !_o.isBr(e.firstChild) },
        $a = function(e, t) { var n, r, o; if (r = e.ownerDocument.createTextNode(Pa), o = e.parentNode, t) { if (n = e.previousSibling, Ia(n)) { if (ja(n)) return n; if (Ga(n)) return n.splitText(n.data.length - 1) }
                o.insertBefore(r, e) } else { if (n = e.nextSibling, Ia(n)) { if (ja(n)) return n; if (Ya(n)) return n.splitText(1), n }
                e.nextSibling ? o.insertBefore(r, e.nextSibling) : o.appendChild(r) } return r },
        Wa = function(e) { var t = e.container(); return !(!e || !_o.isText(t)) && (t.data.charAt(e.offset()) === Pa || e.isAtStart() && Ua(t.previousSibling)) },
        Ka = function(e) { var t = e.container(); return !(!e || !_o.isText(t)) && (t.data.charAt(e.offset() - 1) === Pa || e.isAtEnd() && Ua(t.nextSibling)) },
        Xa = function(e, t, n) { var r, o, i; return (r = t.ownerDocument.createElement(e)).setAttribute("data-mce-caret", n ? "before" : "after"), r.setAttribute("data-mce-bogus", "all"), r.appendChild(((i = j.document.createElement("br")).setAttribute("data-mce-bogus", "1"), i)), o = t.parentNode, n ? o.insertBefore(r, t) : t.nextSibling ? o.insertBefore(r, t.nextSibling) : o.appendChild(r), r },
        Ya = function(e) { return Ia(e) && e.data[0] === Pa },
        Ga = function(e) { return Ia(e) && e.data[e.data.length - 1] === Pa },
        Ja = function(e) { return e && e.hasAttribute("data-mce-caret") ? (t = e.getElementsByTagName("br"), n = t[t.length - 1], _o.isBogus(n) && n.parentNode.removeChild(n), e.removeAttribute("data-mce-caret"), e.removeAttribute("data-mce-bogus"), e.removeAttribute("style"), e.removeAttribute("_moz_abspos"), e) : null; var t, n },
        Qa = function(e) { return Fa(e.startContainer) },
        Za = _o.isContentEditableTrue,
        eu = _o.isContentEditableFalse,
        tu = _o.isBr,
        nu = _o.isText,
        ru = _o.matchNodeNames("script style textarea"),
        ou = _o.matchNodeNames("img input textarea hr iframe video audio object"),
        iu = _o.matchNodeNames("table"),
        au = ja,
        uu = function(e) { return !au(e) && (nu(e) ? !ru(e.parentNode) : ou(e) || tu(e) || iu(e) || su(e)) },
        su = function(e) { return !1 === (t = e, _o.isElement(t) && "true" === t.getAttribute("unselectable")) && eu(e); var t },
        lu = function(e, t) { return uu(e) && function(e, t) { for (e = e.parentNode; e && e !== t; e = e.parentNode) { if (su(e)) return !1; if (Za(e)) return !0 } return !0 }(e, t) },
        cu = Math.round,
        fu = function(e) { return e ? { left: cu(e.left), top: cu(e.top), bottom: cu(e.bottom), right: cu(e.right), width: cu(e.width), height: cu(e.height) } : { left: 0, top: 0, bottom: 0, right: 0, width: 0, height: 0 } },
        du = function(e, t) { return e = fu(e), t || (e.left = e.left + e.width), e.right = e.left, e.width = 0, e },
        hu = function(e, t, n) { return 0 <= e && e <= Math.min(t.height, n.height) / 2 },
        mu = function(e, t) { return e.bottom - e.height / 2 < t.top || !(e.top > t.bottom) && hu(t.top - e.bottom, e, t) },
        gu = function(e, t) { return e.top > t.bottom || !(e.bottom < t.top) && hu(t.bottom - e.top, e, t) },
        pu = function(e) { var t = e.startContainer,
                n = e.startOffset; return t.hasChildNodes() && e.endOffset === n + 1 ? t.childNodes[n] : null },
        vu = function(e, t) { return 1 === e.nodeType && e.hasChildNodes() && (t >= e.childNodes.length && (t = e.childNodes.length - 1), e = e.childNodes[t]), e },
        yu = new RegExp("[\u0300-\u036f\u0483-\u0487\u0488-\u0489\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7\u0610-\u061a\u064b-\u065f\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7-\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08e3-\u0902\u093a\u093c\u0941-\u0948\u094d\u0951-\u0957\u0962-\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2-\u09e3\u0a01-\u0a02\u0a3c\u0a41-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51\u0a70-\u0a71\u0a75\u0a81-\u0a82\u0abc\u0ac1-\u0ac5\u0ac7-\u0ac8\u0acd\u0ae2-\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62-\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c00\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56\u0c62-\u0c63\u0c81\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc-\u0ccd\u0cd5-\u0cd6\u0ce2-\u0ce3\u0d01\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62-\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb-\u0ebc\u0ec8-\u0ecd\u0f18-\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86-\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039-\u103a\u103d-\u103e\u1058-\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085-\u1086\u108d\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752-\u1753\u1772-\u1773\u17b4-\u17b5\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927-\u1928\u1932\u1939-\u193b\u1a17-\u1a18\u1a1b\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1ab0-\u1abd\u1abe\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80-\u1b81\u1ba2-\u1ba5\u1ba8-\u1ba9\u1bab-\u1bad\u1be6\u1be8-\u1be9\u1bed\u1bef-\u1bf1\u1c2c-\u1c33\u1c36-\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1cf4\u1cf8-\u1cf9\u1dc0-\u1df5\u1dfc-\u1dff\u200c-\u200d\u20d0-\u20dc\u20dd-\u20e0\u20e1\u20e2-\u20e4\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302d\u302e-\u302f\u3099-\u309a\ua66f\ua670-\ua672\ua674-\ua67d\ua69e-\ua69f\ua6f0-\ua6f1\ua802\ua806\ua80b\ua825-\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\ua9e5\uaa29-\uaa2e\uaa31-\uaa32\uaa35-\uaa36\uaa43\uaa4c\uaa7c\uaab0\uaab2-\uaab4\uaab7-\uaab8\uaabe-\uaabf\uaac1\uaaec-\uaaed\uaaf6\uabe5\uabe8\uabed\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\uff9e-\uff9f]"),
        bu = function(e) { return "string" == typeof e && 768 <= e.charCodeAt(0) && yu.test(e) },
        Cu = function(e, t) { for (var n = [], r = 0; r < e.length; r++) { var o = e[r]; if (!o.isSome()) return T.none();
                n.push(o.getOrDie()) } return T.some(t.apply(null, n)) },
        wu = [].slice,
        xu = function() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]; var n = wu.call(arguments); return function(e) { for (var t = 0; t < n.length; t++)
                    if (!n[t](e)) return !1;
                return !0 } },
        zu = function() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]; var n = wu.call(arguments); return function(e) { for (var t = 0; t < n.length; t++)
                    if (n[t](e)) return !0;
                return !1 } },
        Nu = _o.isElement,
        Eu = uu,
        Su = _o.matchStyleValues("display", "block table"),
        ku = _o.matchStyleValues("float", "left right"),
        Tu = xu(Nu, Eu, b(ku)),
        Au = b(_o.matchStyleValues("white-space", "pre pre-line pre-wrap")),
        Mu = _o.isText,
        Ru = _o.isBr,
        Du = _i.nodeIndex,
        Bu = vu,
        Ou = function(e) { return "createRange" in e ? e.createRange() : _i.DOM.createRng() },
        Hu = function(e) { return e && /[\r\n\t ]/.test(e) },
        _u = function(e) { return !!e.setStart && !!e.setEnd },
        Pu = function(e) { var t, n = e.startContainer,
                r = e.startOffset; return !!(Hu(e.toString()) && Au(n.parentNode) && _o.isText(n) && (t = n.data, Hu(t[r - 1]) || Hu(t[r + 1]))) },
        Lu = function(e) { return 0 === e.left && 0 === e.right && 0 === e.top && 0 === e.bottom },
        Vu = function(e) { var t, n, r, o, i, a, u, s; return t = 0 < (n = e.getClientRects()).length ? fu(n[0]) : fu(e.getBoundingClientRect()), !_u(e) && Ru(e) && Lu(t) ? (i = (r = e).ownerDocument, a = Ou(i), u = i.createTextNode("\xa0"), (s = r.parentNode).insertBefore(u, r), a.setStart(u, 0), a.setEnd(u, 1), o = fu(a.getBoundingClientRect()), s.removeChild(u), o) : Lu(t) && _u(e) ? function(e) { var t = e.startContainer,
                    n = e.endContainer,
                    r = e.startOffset,
                    o = e.endOffset; if (t === n && _o.isText(n) && 0 === r && 1 === o) { var i = e.cloneRange(); return i.setEndAfter(n), Vu(i) } return null }(e) : t },
        Iu = function(e, t) { var n = du(e, t); return n.width = 1, n.right = n.left + 1, n },
        Fu = function(e) { var t, n, r = [],
                o = function(e) { var t, n;
                    0 !== e.height && (0 < r.length && (t = e, n = r[r.length - 1], t.left === n.left && t.top === n.top && t.bottom === n.bottom && t.right === n.right) || r.push(e)) },
                i = function(e, t) { var n = Ou(e.ownerDocument); if (t < e.data.length) { if (bu(e.data[t])) return r; if (bu(e.data[t - 1]) && (n.setStart(e, t), n.setEnd(e, t + 1), !Pu(n))) return o(Iu(Vu(n), !1)), r }
                    0 < t && (n.setStart(e, t - 1), n.setEnd(e, t), Pu(n) || o(Iu(Vu(n), !1))), t < e.data.length && (n.setStart(e, t), n.setEnd(e, t + 1), Pu(n) || o(Iu(Vu(n), !0))) }; if (Mu(e.container())) return i(e.container(), e.offset()), r; if (Nu(e.container()))
                if (e.isAtEnd()) n = Bu(e.container(), e.offset()), Mu(n) && i(n, n.data.length), Tu(n) && !Ru(n) && o(Iu(Vu(n), !1));
                else { if (n = Bu(e.container(), e.offset()), Mu(n) && i(n, 0), Tu(n) && e.isAtEnd()) return o(Iu(Vu(n), !1)), r;
                    t = Bu(e.container(), e.offset() - 1), Tu(t) && !Ru(t) && (Su(t) || Su(n) || !Tu(n)) && o(Iu(Vu(t), !1)), Tu(n) && o(Iu(Vu(n), !0)) }
            return r };

    function Uu(t, n, e) { var r = function() { return e || (e = Fu(Uu(t, n))), e }; return { container: $(t), offset: $(n), toRange: function() { var e; return (e = Ou(t.ownerDocument)).setStart(t, n), e.setEnd(t, n), e }, getClientRects: r, isVisible: function() { return 0 < r().length }, isAtStart: function() { return Mu(t), 0 === n }, isAtEnd: function() { return Mu(t) ? n >= t.data.length : n >= t.childNodes.length }, isEqual: function(e) { return e && t === e.container() && n === e.offset() }, getNode: function(e) { return Bu(t, e ? n - 1 : n) } } }(va = Uu || (Uu = {})).fromRangeStart = function(e) { return va(e.startContainer, e.startOffset) }, va.fromRangeEnd = function(e) { return va(e.endContainer, e.endOffset) }, va.after = function(e) { return va(e.parentNode, Du(e) + 1) }, va.before = function(e) { return va(e.parentNode, Du(e)) }, va.isAbove = function(e, t) { return Cu([ce(t.getClientRects()), fe(e.getClientRects())], mu).getOr(!1) }, va.isBelow = function(e, t) { return Cu([fe(t.getClientRects()), ce(e.getClientRects())], gu).getOr(!1) }, va.isAtStart = function(e) { return !!e && e.isAtStart() }, va.isAtEnd = function(e) { return !!e && e.isAtEnd() }, va.isTextPosition = function(e) { return !!e && _o.isText(e.container()) }, va.isElementPosition = function(e) { return !1 === va.isTextPosition(e) }; var ju, qu, $u = Uu,
        Wu = _o.isText,
        Ku = _o.isBogus,
        Xu = _i.nodeIndex,
        Yu = function(e) { var t = e.parentNode; return Ku(t) ? Yu(t) : t },
        Gu = function(e) { return e ? tn.reduce(e.childNodes, function(e, t) { return Ku(t) && "BR" !== t.nodeName ? e = e.concat(Gu(t)) : e.push(t), e }, []) : [] },
        Ju = function(t) { return function(e) { return t === e } },
        Qu = function(e) { var t, r, n, o; return (Wu(e) ? "text()" : e.nodeName.toLowerCase()) + "[" + (r = Gu(Yu(t = e)), n = tn.findIndex(r, Ju(t), t), r = r.slice(0, n + 1), o = tn.reduce(r, function(e, t, n) { return Wu(t) && Wu(r[n - 1]) && e++, e }, 0), r = tn.filter(r, _o.matchNodeNames(t.nodeName)), (n = tn.findIndex(r, Ju(t), t)) - o) + "]" },
        Zu = function(e, t) { var n, r, o, i, a, u = []; return n = t.container(), r = t.offset(), Wu(n) ? o = function(e, t) { for (;
                    (e = e.previousSibling) && Wu(e);) t += e.data.length; return t }(n, r) : (r >= (i = n.childNodes).length ? (o = "after", r = i.length - 1) : o = "before", n = i[r]), u.push(Qu(n)), a = function(e, t, n) { var r = []; for (t = t.parentNode; !(t === e || n && n(t)); t = t.parentNode) r.push(t); return r }(e, n), a = tn.filter(a, b(_o.isBogus)), (u = u.concat(tn.map(a, function(e) { return Qu(e) }))).reverse().join("/") + "," + o },
        es = function(e, t) { var n, r, o; return t ? (t = (n = t.split(","))[0].split("/"), o = 1 < n.length ? n[1] : "before", (r = tn.reduce(t, function(e, t) { return (t = /([\w\-\(\)]+)\[([0-9]+)\]/.exec(t)) ? ("text()" === t[1] && (t[1] = "#text"), n = e, r = t[1], o = parseInt(t[2], 10), i = Gu(n), i = tn.filter(i, function(e, t) { return !Wu(e) || !Wu(i[t - 1]) }), (i = tn.filter(i, _o.matchNodeNames(r)))[o]) : null; var n, r, o, i }, e)) ? Wu(r) ? function(e, t) { for (var n, r = e, o = 0; Wu(r);) { if (n = r.data.length, o <= t && t <= o + n) { e = r, t -= o; break } if (!Wu(r.nextSibling)) { e = r, t = n; break }
                    o += n, r = r.nextSibling } return Wu(e) && t > e.data.length && (t = e.data.length), $u(e, t) }(r, parseInt(o, 10)) : (o = "after" === o ? Xu(r) + 1 : Xu(r), $u(r.parentNode, o)) : null) : null },
        ts = function(e, t) { _o.isText(t) && 0 === t.data.length && e.remove(t) },
        ns = function(e, t, n) { var r, o, i, a, u, s, l;
            _o.isDocumentFragment(n) ? (i = e, a = t, u = n, s = T.from(u.firstChild), l = T.from(u.lastChild), a.insertNode(u), s.each(function(e) { return ts(i, e.previousSibling) }), l.each(function(e) { return ts(i, e.nextSibling) })) : (r = e, o = n, t.insertNode(o), ts(r, o.previousSibling), ts(r, o.nextSibling)) },
        rs = _o.isContentEditableFalse,
        os = function(e, t, n, r, o) { var i, a = r[o ? "startContainer" : "endContainer"],
                u = r[o ? "startOffset" : "endOffset"],
                s = [],
                l = 0,
                c = e.getRoot(); for (_o.isText(a) ? s.push(n ? function(e, t, n) { var r, o; for (o = e(t.data.slice(0, n)).length, r = t.previousSibling; r && _o.isText(r); r = r.previousSibling) o += e(r.data).length; return o }(t, a, u) : u) : (u >= (i = a.childNodes).length && i.length && (l = 1, u = Math.max(0, i.length - 1)), s.push(e.nodeIndex(i[u], n) + l)); a && a !== c; a = a.parentNode) s.push(e.nodeIndex(a, n)); return s },
        is = function(e, t, n) { var r = 0; return un.each(e.select(t), function(e) { if ("all" !== e.getAttribute("data-mce-bogus")) return e !== n && void r++ }), r },
        as = function(e, t) { var n, r, o, i = t ? "start" : "end";
            n = e[i + "Container"], r = e[i + "Offset"], _o.isElement(n) && "TR" === n.nodeName && (n = (o = n.childNodes)[Math.min(t ? r : r - 1, o.length - 1)]) && (r = t ? 0 : n.childNodes.length, e["set" + (t ? "Start" : "End")](n, r)) },
        us = function(e) { return as(e, !0), as(e, !1), e },
        ss = function(e, t) { var n; if (_o.isElement(e) && (e = vu(e, t), rs(e))) return e; if (ja(e)) { if (_o.isText(e) && Fa(e) && (e = e.parentNode), n = e.previousSibling, rs(n)) return n; if (n = e.nextSibling, rs(n)) return n } },
        ls = function(e, t, n) { var r = n.getNode(),
                o = r ? r.nodeName : null,
                i = n.getRng(); if (rs(r) || "IMG" === o) return { name: o, index: is(n.dom, o, r) }; var a, u, s, l, c, f, d, h = ss((a = i).startContainer, a.startOffset) || ss(a.endContainer, a.endOffset); return h ? { name: o = h.tagName, index: is(n.dom, o, h) } : (u = e, l = t, c = i, f = (s = n).dom, (d = {}).start = os(f, u, l, c, !0), s.isCollapsed() || (d.end = os(f, u, l, c, !1)), d) },
        cs = function(e, t, n) { var r = { "data-mce-type": "bookmark", id: t, style: "overflow:hidden;line-height:0px" }; return n ? e.create("span", r, "&#xFEFF;") : e.create("span", r) },
        fs = function(e, t) { var n = e.dom,
                r = e.getRng(),
                o = n.uniqueId(),
                i = e.isCollapsed(),
                a = e.getNode(),
                u = a.nodeName; if ("IMG" === u) return { name: u, index: is(n, u, a) }; var s = us(r.cloneRange()); if (!i) { s.collapse(!1); var l = cs(n, o + "_end", t);
                ns(n, s, l) }(r = us(r)).collapse(!0); var c = cs(n, o + "_start", t); return ns(n, r, c), e.moveToBookmark({ id: o, keep: 1 }), { id: o } },
        ds = { getBookmark: function(e, t, n) { return 2 === t ? ls(La, n, e) : 3 === t ? (o = (r = e).getRng(), { start: Zu(r.dom.getRoot(), $u.fromRangeStart(o)), end: Zu(r.dom.getRoot(), $u.fromRangeEnd(o)) }) : t ? { rng: e.getRng() } : fs(e, !1); var r, o }, getUndoBookmark: d(ls, W, !0), getPersistentBookmark: fs },
        hs = "_mce_caret",
        ms = function(e) { return _o.isElement(e) && e.id === hs },
        gs = function(e, t) { for (; t && t !== e;) { if (t.id === hs) return t;
                t = t.parentNode } return null },
        ps = _o.isElement,
        vs = _o.isText,
        ys = function(e) { var t = e.parentNode;
            t && t.removeChild(e) },
        bs = function(e, t) { 0 === t.length ? ys(e) : e.nodeValue = t },
        Cs = function(e) { var t = La(e); return { count: e.length - t.length, text: t } },
        ws = function(e, t) { return Ns(e), t },
        xs = function(e, t) { return vs(e) && t.container() === e ? (r = t, o = Cs((n = e).data.substr(0, r.offset())), i = Cs(n.data.substr(r.offset())), 0 < (a = o.text + i.text).length ? (bs(n, a), $u(n, r.offset() - o.count)) : r) : ws(e, t); var n, r, o, i, a },
        zs = function(e, t) { return t.container() === e.parentNode ? (n = e, o = (r = t).container(), i = L(de(o.childNodes), n).map(function(e) { return e < r.offset() ? $u(o, r.offset() - 1) : r }).getOr(r), Ns(n), i) : ws(e, t); var n, r, o, i },
        Ns = function(e) { if (ps(e) && ja(e) && (qa(e) ? e.removeAttribute("data-mce-caret") : ys(e)), vs(e)) { var t = La(function(e) { try { return e.nodeValue } catch (t) { return "" } }(e));
                bs(e, t) } },
        Es = { removeAndReposition: function(e, t) { return $u.isTextPosition(t) ? xs(e, t) : zs(e, t) }, remove: Ns },
        Ss = pr.detect().browser,
        ks = _o.isContentEditableFalse,
        Ts = function(e, t, n) { var r, o, i, a, u, s = du(t.getBoundingClientRect(), n); return i = "BODY" === e.tagName ? (r = e.ownerDocument.documentElement, o = e.scrollLeft || r.scrollLeft, e.scrollTop || r.scrollTop) : (u = e.getBoundingClientRect(), o = e.scrollLeft - u.left, e.scrollTop - u.top), s.left += o, s.right += o, s.top += i, s.bottom += i, s.width = 1, 0 < (a = t.offsetWidth - t.clientWidth) && (n && (a *= -1), s.left += a, s.right += a), s },
        As = function(a, u, e) { var t, s, l = qi(T.none()),
                c = function() {! function(e) { var t, n, r, o, i; for (t = Un("*[contentEditable=false]", e), o = 0; o < t.length; o++) r = (n = t[o]).previousSibling, Ga(r) && (1 === (i = r.data).length ? r.parentNode.removeChild(r) : r.deleteData(i.length - 1, 1)), r = n.nextSibling, Ya(r) && (1 === (i = r.data).length ? r.parentNode.removeChild(r) : r.deleteData(0, 1)) }(a), s && (Es.remove(s), s = null), l.get().each(function(e) { Un(e.caret).remove(), l.set(T.none()) }), We.clearInterval(t) },
                f = function() { t = We.setInterval(function() { e() ? Un("div.mce-visual-caret", a).toggleClass("mce-visual-caret-hidden") : Un("div.mce-visual-caret", a).addClass("mce-visual-caret-hidden") }, 500) }; return { show: function(t, e) { var n, r, o; if (c(), o = e, _o.isElement(o) && /^(TD|TH)$/i.test(o.tagName)) return null; if (!u(e)) return s = $a(e, t), r = e.ownerDocument.createRange(), ks(s.nextSibling) ? (r.setStart(s, 0), r.setEnd(s, 0)) : (r.setStart(s, 1), r.setEnd(s, 1)), r;
                    s = Xa("p", e, t), n = Ts(a, e, t), Un(s).css("top", n.top); var i = Un('<div class="mce-visual-caret" data-mce-bogus="all"></div>').css(n).appendTo(a)[0]; return l.set(T.some({ caret: i, element: e, before: t })), l.get().each(function(e) { t && Un(e.caret).addClass("mce-visual-caret-before") }), f(), (r = e.ownerDocument.createRange()).setStart(s, 0), r.setEnd(s, 0), r }, hide: c, getCss: function() { return ".mce-visual-caret {position: absolute;background-color: black;background-color: currentcolor;}.mce-visual-caret-hidden {display: none;}*[data-mce-caret] {position: absolute;left: -1000px;right: auto;top: 0;margin: 0;padding: 0;}" }, reposition: function() { l.get().each(function(e) { var t = Ts(a, e.element, e.before);
                        Un(e.caret).css(Fi({}, t)) }) }, destroy: function() { return We.clearInterval(t) } } },
        Ms = function() { return Ss.isIE() || Ss.isEdge() || Ss.isFirefox() },
        Rs = function(e) { return ks(e) || _o.isTable(e) && Ms() },
        Ds = _o.isContentEditableFalse,
        Bs = _o.matchStyleValues("display", "block table table-cell table-caption list-item"),
        Os = ja,
        Hs = Fa,
        _s = _o.isElement,
        Ps = uu,
        Ls = function(e) { return 0 < e },
        Vs = function(e) { return e < 0 },
        Is = function(e, t) { for (var n; n = e(t);)
                if (!Hs(n)) return n;
            return null },
        Fs = function(e, t, n, r, o) { var i = new Po(e, r); if (Vs(t)) { if ((Ds(e) || Hs(e)) && n(e = Is(i.prev, !0))) return e; for (; e = Is(i.prev, o);)
                    if (n(e)) return e } if (Ls(t)) { if ((Ds(e) || Hs(e)) && n(e = Is(i.next, !0))) return e; for (; e = Is(i.next, o);)
                    if (n(e)) return e } return null },
        Us = function(e, t) { for (; e && e !== t;) { if (Bs(e)) return e;
                e = e.parentNode } return null },
        js = function(e, t, n) { return Us(e.container(), n) === Us(t.container(), n) },
        qs = function(e, t) { var n, r; return t ? (n = t.container(), r = t.offset(), _s(n) ? n.childNodes[r + e] : null) : null },
        $s = function(e, t) { var n = t.ownerDocument.createRange(); return e ? (n.setStartBefore(t), n.setEndBefore(t)) : (n.setStartAfter(t), n.setEndAfter(t)), n },
        Ws = function(e, t, n) { var r, o, i, a; for (o = e ? "previousSibling" : "nextSibling"; n && n !== t;) { if (r = n[o], Os(r) && (r = r[o]), Ds(r)) { if (a = n, Us(r, i = t) === Us(a, i)) return r; break } if (Ps(r)) break;
                n = n.parentNode } return null },
        Ks = d($s, !0),
        Xs = d($s, !1),
        Ys = function(e, t, n) { var r, o, i, a, u = d(Ws, !0, t),
                s = d(Ws, !1, t); if (o = n.startContainer, i = n.startOffset, Fa(o)) { if (_s(o) || (o = o.parentNode), "before" === (a = o.getAttribute("data-mce-caret")) && (r = o.nextSibling, Rs(r))) return Ks(r); if ("after" === a && (r = o.previousSibling, Rs(r))) return Xs(r) } if (!n.collapsed) return n; if (_o.isText(o)) { if (Os(o)) { if (1 === e) { if (r = s(o)) return Ks(r); if (r = u(o)) return Xs(r) } if (-1 === e) { if (r = u(o)) return Xs(r); if (r = s(o)) return Ks(r) } return n } if (Ga(o) && i >= o.data.length - 1) return 1 === e && (r = s(o)) ? Ks(r) : n; if (Ya(o) && i <= 1) return -1 === e && (r = u(o)) ? Xs(r) : n; if (i === o.data.length) return (r = s(o)) ? Ks(r) : n; if (0 === i) return (r = u(o)) ? Xs(r) : n } return n },
        Gs = function(e, t) { return T.from(qs(e ? 0 : -1, t)).filter(Ds) },
        Js = function(e, t, n) { var r = Ys(e, t, n); return -1 === e ? Uu.fromRangeStart(r) : Uu.fromRangeEnd(r) },
        Qs = function(e) { return T.from(e.getNode()).map(yr.fromDom) },
        Zs = function(e, t) { for (; t = e(t);)
                if (t.isVisible()) return t;
            return t },
        el = function(e, t) { var n = js(e, t); return !(n || !_o.isBr(e.getNode())) || n };
    (qu = ju || (ju = {}))[qu.Backwards = -1] = "Backwards", qu[qu.Forwards = 1] = "Forwards"; var tl = _o.isContentEditableFalse,
        nl = _o.isText,
        rl = _o.isElement,
        ol = _o.isBr,
        il = uu,
        al = function(e) { return ou(e) || !!su(t = e) && !0 !== Q(de(t.getElementsByTagName("*")), function(e, t) { return e || Za(t) }, !1); var t },
        ul = lu,
        sl = function(e, t) { return e.hasChildNodes() && t < e.childNodes.length ? e.childNodes[t] : null },
        ll = function(e, t) { if (Ls(e)) { if (il(t.previousSibling) && !nl(t.previousSibling)) return $u.before(t); if (nl(t)) return $u(t, 0) } if (Vs(e)) { if (il(t.nextSibling) && !nl(t.nextSibling)) return $u.after(t); if (nl(t)) return $u(t, t.data.length) } return Vs(e) ? ol(t) ? $u.before(t) : $u.after(t) : $u.before(t) },
        cl = function(e, t, n) { var r, o, i, a, u; if (!rl(n) || !t) return null; if (t.isEqual($u.after(n)) && n.lastChild) { if (u = $u.after(n.lastChild), Vs(e) && il(n.lastChild) && rl(n.lastChild)) return ol(n.lastChild) ? $u.before(n.lastChild) : u } else u = t; var s, l, c, f = u.container(),
                d = u.offset(); if (nl(f)) { if (Vs(e) && 0 < d) return $u(f, --d); if (Ls(e) && d < f.length) return $u(f, ++d);
                r = f } else { if (Vs(e) && 0 < d && (o = sl(f, d - 1), il(o))) return !al(o) && (i = Fs(o, e, ul, o)) ? nl(i) ? $u(i, i.data.length) : $u.after(i) : nl(o) ? $u(o, o.data.length) : $u.before(o); if (Ls(e) && d < f.childNodes.length && (o = sl(f, d), il(o))) return ol(o) ? (s = n, (c = (l = o).nextSibling) && il(c) ? nl(c) ? $u(c, 0) : $u.before(c) : cl(ju.Forwards, $u.after(l), s)) : !al(o) && (i = Fs(o, e, ul, o)) ? nl(i) ? $u(i, 0) : $u.before(i) : nl(o) ? $u(o, 0) : $u.after(o);
                r = o || u.getNode() } return (Ls(e) && u.isAtEnd() || Vs(e) && u.isAtStart()) && (r = Fs(r, e, $(!0), n, !0), ul(r, n)) ? ll(e, r) : (o = Fs(r, e, ul, n), !(a = tn.last(G(function(e, t) { for (var n = []; e && e !== t;) n.push(e), e = e.parentNode; return n }(f, n), tl))) || o && a.contains(o) ? o ? ll(e, o) : null : u = Ls(e) ? $u.after(a) : $u.before(a)) },
        fl = function(t) { return { next: function(e) { return cl(ju.Forwards, e, t) }, prev: function(e) { return cl(ju.Backwards, e, t) } } },
        dl = function(e) { return $u.isTextPosition(e) ? 0 === e.offset() : uu(e.getNode()) },
        hl = function(e) { if ($u.isTextPosition(e)) { var t = e.container(); return e.offset() === t.data.length } return uu(e.getNode(!0)) },
        ml = function(e, t) { return !$u.isTextPosition(e) && !$u.isTextPosition(t) && e.getNode() === t.getNode(!0) },
        gl = function(e, t, n) { return e ? !ml(t, n) && (r = t, !(!$u.isTextPosition(r) && _o.isBr(r.getNode()))) && hl(t) && dl(n) : !ml(n, t) && dl(t) && hl(n); var r },
        pl = function(e, t, n) { var r = fl(t); return T.from(e ? r.next(n) : r.prev(n)) },
        vl = function(t, n, r) { return pl(t, n, r).bind(function(e) { return js(r, e, n) && gl(t, r, e) ? pl(t, n, e) : T.some(e) }) },
        yl = function(t, n, e, r) { return vl(t, n, e).bind(function(e) { return r(e) ? yl(t, n, e, r) : T.some(e) }) },
        bl = function(e, t) { var n, r, o, i, a, u = e ? t.firstChild : t.lastChild; return _o.isText(u) ? T.some($u(u, e ? 0 : u.data.length)) : u ? uu(u) ? T.some(e ? $u.before(u) : (a = u, _o.isBr(a) ? $u.before(a) : $u.after(a))) : (r = t, o = u, i = (n = e) ? $u.before(o) : $u.after(o), pl(n, r, i)) : T.none() },
        Cl = d(pl, !0),
        wl = d(pl, !1),
        xl = { fromPosition: pl, nextPosition: Cl, prevPosition: wl, navigate: vl, navigateIgnore: yl, positionIn: bl, firstPositionIn: d(bl, !0), lastPositionIn: d(bl, !1) },
        zl = function(e, t) { return !e.isBlock(t) || t.innerHTML || Fe.ie || (t.innerHTML = '<br data-mce-bogus="1" />'), t },
        Nl = function(e, t) { return xl.lastPositionIn(e).fold(function() { return !1 }, function(e) { return t.setStart(e.container(), e.offset()), t.setEnd(e.container(), e.offset()), !0 }) },
        El = function(e, t, n) { return !(!1 !== t.hasChildNodes() || !gs(e, t) || (o = n, i = (r = t).ownerDocument.createTextNode(Pa), r.appendChild(i), o.setStart(i, 0), o.setEnd(i, 0), 0)); var r, o, i },
        Sl = function(e, t, n, r) { var o, i, a, u, s = n[t ? "start" : "end"],
                l = e.getRoot(); if (s) { for (a = s[0], i = l, o = s.length - 1; 1 <= o; o--) { if (u = i.childNodes, El(l, i, r)) return !0; if (s[o] > u.length - 1) return !!El(l, i, r) || Nl(i, r);
                    i = u[s[o]] }
                3 === i.nodeType && (a = Math.min(s[0], i.nodeValue.length)), 1 === i.nodeType && (a = Math.min(s[0], i.childNodes.length)), t ? r.setStart(i, a) : r.setEnd(i, a) } return !0 },
        kl = function(e) { return _o.isText(e) && 0 < e.data.length },
        Tl = function(e, t, n) { var r, o, i, a, u, s, l = e.get(n.id + "_" + t),
                c = n.keep; if (l) { if (r = l.parentNode, o = "start" === t ? c ? l.hasChildNodes() ? (r = l.firstChild, 1) : kl(l.nextSibling) ? (r = l.nextSibling, 0) : kl(l.previousSibling) ? (r = l.previousSibling, l.previousSibling.data.length) : (r = l.parentNode, e.nodeIndex(l) + 1) : e.nodeIndex(l) : c ? l.hasChildNodes() ? (r = l.firstChild, 1) : kl(l.previousSibling) ? (r = l.previousSibling, l.previousSibling.data.length) : (r = l.parentNode, e.nodeIndex(l)) : e.nodeIndex(l), u = r, s = o, !c) { for (a = l.previousSibling, i = l.nextSibling, un.each(un.grep(l.childNodes), function(e) { _o.isText(e) && (e.nodeValue = e.nodeValue.replace(/\uFEFF/g, "")) }); l = e.get(n.id + "_" + t);) e.remove(l, !0);
                    a && i && a.nodeType === i.nodeType && _o.isText(a) && !Fe.opera && (o = a.nodeValue.length, a.appendData(i.nodeValue), e.remove(i), u = a, s = o) } return T.some($u(u, s)) } return T.none() },
        Al = function(e, t) { var n, r, o, i, a, u, s, l, c, f, d, h, m, g, p, v, y = e.dom; if (t) { if (v = t, un.isArray(v.start)) return g = t, p = (m = y).createRng(), Sl(m, !0, g, p) && Sl(m, !1, g, p) ? T.some(p) : T.none(); if ("string" == typeof t.start) return T.some((f = t, d = (c = y).createRng(), h = es(c.getRoot(), f.start), d.setStart(h.container(), h.offset()), h = es(c.getRoot(), f.end), d.setEnd(h.container(), h.offset()), d)); if (t.hasOwnProperty("id")) return s = Tl(o = y, "start", i = t), l = Tl(o, "end", i), Cu([s, (a = l, u = s, a.isSome() ? a : u)], function(e, t) { var n = o.createRng(); return n.setStart(zl(o, e.container()), e.offset()), n.setEnd(zl(o, t.container()), t.offset()), n }); if (t.hasOwnProperty("name")) return n = y, r = t, T.from(n.select(r.name)[r.index]).map(function(e) { var t = n.createRng(); return t.selectNode(e), t }); if (t.hasOwnProperty("rng")) return T.some(t.rng) } return T.none() },
        Ml = function(e, t, n) { return ds.getBookmark(e, t, n) },
        Rl = function(t, e) { Al(t, e).each(function(e) { t.setRng(e) }) },
        Dl = function(e) { return _o.isElement(e) && "SPAN" === e.tagName && "bookmark" === e.getAttribute("data-mce-type") },
        Bl = function(e) { return e && /^(IMG)$/.test(e.nodeName) },
        Ol = function(e) { return e && 3 === e.nodeType && /^([\t \r\n]+|)$/.test(e.nodeValue) },
        Hl = function(e, t, n) { return "color" !== n && "backgroundColor" !== n || (t = e.toHex(t)), "fontWeight" === n && 700 === t && (t = "bold"), "fontFamily" === n && (t = t.replace(/[\'\"]/g, "").replace(/,\s+/g, ",")), "" + t },
        _l = { isInlineBlock: Bl, moveStart: function(e, t, n) { var r, o, i, a = n.startOffset,
                    u = n.startContainer; if ((n.startContainer !== n.endContainer || !Bl(n.startContainer.childNodes[n.startOffset])) && 1 === u.nodeType)
                    for (a < (i = u.childNodes).length ? (u = i[a], r = new Po(u, e.getParent(u, e.isBlock))) : (u = i[i.length - 1], (r = new Po(u, e.getParent(u, e.isBlock))).next(!0)), o = r.current(); o; o = r.next())
                        if (3 === o.nodeType && !Ol(o)) return n.setStart(o, 0), void t.setRng(n) }, getNonWhiteSpaceSibling: function(e, t, n) { if (e)
                    for (t = t ? "nextSibling" : "previousSibling", e = n ? e : e[t]; e; e = e[t])
                        if (1 === e.nodeType || !Ol(e)) return e }, isTextBlock: function(e, t) { return t.nodeType && (t = t.nodeName), !!e.schema.getTextBlockElements()[t.toLowerCase()] }, isValid: function(e, t, n) { return e.schema.isValidChild(t, n) }, isWhiteSpaceNode: Ol, replaceVars: function(e, n) { return "string" != typeof e ? e = e(n) : n && (e = e.replace(/%(\w+)/g, function(e, t) { return n[t] || e })), e }, isEq: function(e, t) { return t = t || "", e = "" + ((e = e || "").nodeName || e), t = "" + (t.nodeName || t), e.toLowerCase() === t.toLowerCase() }, normalizeStyleValue: Hl, getStyle: function(e, t, n) { return Hl(e, e.getStyle(t, n), n) }, getTextDecoration: function(t, e) { var n; return t.getParent(e, function(e) { return (n = t.getStyle(e, "text-decoration")) && "none" !== n }), n }, getParents: function(e, t, n) { return e.getParents(t, n, e.getRoot()) } },
        Pl = Dl,
        Ll = _l.getParents,
        Vl = _l.isWhiteSpaceNode,
        Il = _l.isTextBlock,
        Fl = function(e, t) { for (void 0 === t && (t = 3 === e.nodeType ? e.length : e.childNodes.length); e && e.hasChildNodes();)(e = e.childNodes[t]) && (t = 3 === e.nodeType ? e.length : e.childNodes.length); return { node: e, offset: t } },
        Ul = function(e, t) { for (var n = t; n;) { if (1 === n.nodeType && e.getContentEditable(n)) return "false" === e.getContentEditable(n) ? n : t;
                n = n.parentNode } return t },
        jl = function(e, t, n, r) { var o, i, a = n.nodeValue; return void 0 === r && (r = e ? a.length : 0), e ? (o = a.lastIndexOf(" ", r), -1 !== (o = (i = a.lastIndexOf("\xa0", r)) < o ? o : i) && !t && (o < r || !e) && o <= a.length && o++) : (o = a.indexOf(" ", r), i = a.indexOf("\xa0", r), o = -1 !== o && (-1 === i || o < i) ? o : i), o },
        ql = function(e, t, n, r, o, i) { var a, u, s; if (3 === n.nodeType) { if (-1 !== (u = jl(o, i, n, r))) return { container: n, offset: u };
                s = n } for (var l = new Po(n, e.getParent(n, e.isBlock) || t); a = l[o ? "prev" : "next"]();)
                if (3 !== a.nodeType || Pl(a.parentNode)) { if (e.isBlock(a) || _l.isEq(a, "BR")) break } else if (-1 !== (u = jl(o, i, s = a))) return { container: a, offset: u }; if (s) return { container: s, offset: r = o ? 0 : s.length } },
        $l = function(e, t, n, r, o) { var i, a, u, s; for (3 === r.nodeType && 0 === r.nodeValue.length && r[o] && (r = r[o]), i = Ll(e, r), a = 0; a < i.length; a++)
                for (u = 0; u < t.length; u++)
                    if (!("collapsed" in (s = t[u]) && s.collapsed !== n.collapsed) && e.is(i[a], s.selector)) return i[a];
            return r },
        Wl = function(t, e, n, r) { var o, i = t.dom,
                a = i.getRoot(); if (e[0].wrapper || (o = i.getParent(n, e[0].block, a)), !o) { var u = i.getParent(n, "LI,TD,TH");
                o = i.getParent(3 === n.nodeType ? n.parentNode : n, function(e) { return e !== a && Il(t, e) }, u) } if (o && e[0].wrapper && (o = Ll(i, o, "ul,ol").reverse()[0] || o), !o)
                for (o = n; o[r] && !i.isBlock(o[r]) && (o = o[r], !_l.isEq(o, "br"));); return o || n },
        Kl = function(e, t, n, r, o, i, a) { var u, s, l, c, f, d; if (u = s = a ? n : o, c = a ? "previousSibling" : "nextSibling", f = e.getRoot(), 3 === u.nodeType && !Vl(u) && (a ? 0 < r : i < u.nodeValue.length)) return u; for (;;) { if (!t[0].block_expand && e.isBlock(s)) return s; for (l = s[c]; l; l = l[c])
                    if (!Pl(l) && !Vl(l) && ("BR" !== (d = l).nodeName || !d.getAttribute("data-mce-bogus") || d.nextSibling)) return s;
                if (s === f || s.parentNode === f) { u = s; break }
                s = s.parentNode } return u },
        Xl = function(e, t, n, r) { var o, i = t.startContainer,
                a = t.startOffset,
                u = t.endContainer,
                s = t.endOffset,
                l = e.dom; return 1 === i.nodeType && i.hasChildNodes() && 3 === (i = vu(i, a)).nodeType && (a = 0), 1 === u.nodeType && u.hasChildNodes() && 3 === (u = vu(u, t.collapsed ? s : s - 1)).nodeType && (s = u.nodeValue.length), i = Ul(l, i), u = Ul(l, u), (Pl(i.parentNode) || Pl(i)) && (i = Pl(i) ? i : i.parentNode, 3 === (i = t.collapsed ? i.previousSibling || i : i.nextSibling || i).nodeType && (a = t.collapsed ? i.length : 0)), (Pl(u.parentNode) || Pl(u)) && (u = Pl(u) ? u : u.parentNode, 3 === (u = t.collapsed ? u.nextSibling || u : u.previousSibling || u).nodeType && (s = t.collapsed ? 0 : u.length)), t.collapsed && ((o = ql(l, e.getBody(), i, a, !0, r)) && (i = o.container, a = o.offset), (o = ql(l, e.getBody(), u, s, !1, r)) && (u = o.container, s = o.offset)), n[0].inline && (u = r ? u : function(e, t) { var n = Fl(e, t); if (n.node) { for (; n.node && 0 === n.offset && n.node.previousSibling;) n = Fl(n.node.previousSibling);
                    n.node && 0 < n.offset && 3 === n.node.nodeType && " " === n.node.nodeValue.charAt(n.offset - 1) && 1 < n.offset && (e = n.node).splitText(n.offset - 1) } return e }(u, s)), (n[0].inline || n[0].block_expand) && (n[0].inline && 3 === i.nodeType && 0 !== a || (i = Kl(l, n, i, a, u, s, !0)), n[0].inline && 3 === u.nodeType && s !== u.nodeValue.length || (u = Kl(l, n, i, a, u, s, !1))), n[0].selector && !1 !== n[0].expand && !n[0].inline && (i = $l(l, n, t, i, "previousSibling"), u = $l(l, n, t, u, "nextSibling")), (n[0].block || n[0].selector) && (i = Wl(e, n, i, "previousSibling"), u = Wl(e, n, u, "nextSibling"), n[0].block && (l.isBlock(i) || (i = Kl(l, n, i, a, u, s, !0)), l.isBlock(u) || (u = Kl(l, n, i, a, u, s, !1)))), 1 === i.nodeType && (a = l.nodeIndex(i), i = i.parentNode), 1 === u.nodeType && (s = l.nodeIndex(u) + 1, u = u.parentNode), { startContainer: i, startOffset: a, endContainer: u, endOffset: s } },
        Yl = un.each,
        Gl = function(e, t, o) { var n, r, i, a, u, s, l, c = t.startContainer,
                f = t.startOffset,
                d = t.endContainer,
                h = t.endOffset; if (0 < (l = e.select("td[data-mce-selected],th[data-mce-selected]")).length) Yl(l, function(e) { o([e]) });
            else { var m, g, p, v = function(e) { var t; return 3 === (t = e[0]).nodeType && t === c && f >= t.nodeValue.length && e.splice(0, 1), t = e[e.length - 1], 0 === h && 0 < e.length && t === d && 3 === t.nodeType && e.splice(e.length - 1, 1), e },
                    y = function(e, t, n) { for (var r = []; e && e !== n; e = e[t]) r.push(e); return r },
                    b = function(e, t) { do { if (e.parentNode === t) return e;
                            e = e.parentNode } while (e) },
                    C = function(e, t, n) { var r = n ? "nextSibling" : "previousSibling"; for (u = (a = e).parentNode; a && a !== t; a = u) u = a.parentNode, (s = y(a === e ? a : a[r], r)).length && (n || s.reverse(), o(v(s))) }; if (1 === c.nodeType && c.hasChildNodes() && (c = c.childNodes[f]), 1 === d.nodeType && d.hasChildNodes() && (g = h, p = (m = d).childNodes, --g > p.length - 1 ? g = p.length - 1 : g < 0 && (g = 0), d = p[g] || m), c === d) return o(v([c])); for (n = e.findCommonAncestor(c, d), a = c; a; a = a.parentNode) { if (a === d) return C(c, n, !0); if (a === n) break } for (a = d; a; a = a.parentNode) { if (a === c) return C(d, n); if (a === n) break }
                r = b(c, n) || c, i = b(d, n) || d, C(c, r, !0), (s = y(r === c ? r : r.nextSibling, "nextSibling", i === d ? i.nextSibling : i)).length && o(v(s)), C(d, i) } },
        Jl = function PN(n, r) { var t = function(e) { return n(e) ? T.from(e.dom().nodeValue) : T.none() },
                e = pr.detect().browser,
                o = e.isIE() && 10 === e.version.major ? function(e) { try { return t(e) } catch (xN) { return T.none() } } : t; return { get: function(e) { if (!n(e)) throw new Error("Can only get " + r + " value of a " + r + " node"); return o(e).getOr("") }, getOption: o, set: function(e, t) { if (!n(e)) throw new Error("Can only set raw " + r + " value of a " + r + " node");
                    e.dom().nodeValue = t } } }(Er, "text"),
        Ql = function(e) { return Jl.get(e) },
        Zl = function(r, o, i, a) { return to(o).fold(function() { return "skipping" }, function(e) { return "br" === a || Er(n = o) && "\ufeff" === Ql(n) ? "valid" : Nr(t = o) && ha(t, za()) ? "existing" : ms(o) ? "caret" : _l.isValid(r, i, a) && _l.isValid(r, xr(e), i) ? "valid" : "invalid-child"; var t, n }) },
        ec = function(e, t, n, r) { var o, i, a = t.uid,
                u = void 0 === a ? (o = "mce-annotation", i = (new Date).getTime(), o + "_" + Math.floor(1e9 * Math.random()) + ++Ma + String(i)) : a,
                s = Ui(t, ["uid"]),
                l = yr.fromTag("span", e);
            fa(l, za()), Hr(l, "" + Ea(), u), Hr(l, "" + Na(), n); var c, f = r(u, s),
                d = f.attributes,
                h = void 0 === d ? {} : d,
                m = f.classes,
                g = void 0 === m ? [] : m; return _r(l, h), c = l, F(g, function(e) { fa(c, e) }), l },
        tc = function(i, e, t, n, r) { var a = [],
                u = ec(i.getDoc(), r, t, n),
                s = qi(T.none()),
                l = function() { s.set(T.none()) },
                c = function(e) { F(e, o) },
                o = function(e) { var t, n; switch (Zl(i, e, "span", xr(e))) {
                        case "invalid-child":
                            l(); var r = uo(e);
                            c(r), l(); break;
                        case "valid":
                            var o = s.get().getOrThunk(function() { var e = Da(u); return a.push(e), s.set(T.some(e)), e });
                            Ji(t = e, n = o), ea(n, t) } }; return Gl(i.dom, e, function(e) { var t;
                l(), t = X(e, yr.fromDom), c(t) }), a },
        nc = function(s, l, c, f) { s.undoManager.transact(function() { var e, t, n, r, o = s.selection.getRng(); if (o.collapsed && (r = Xl(e = s, t = o, [{ inline: !0 }], 3 === (n = t).startContainer.nodeType && n.startContainer.nodeValue.length >= n.startOffset && "\xa0" === n.startContainer.nodeValue[n.startOffset]), t.setStart(r.startContainer, r.startOffset), t.setEnd(r.endContainer, r.endOffset), e.selection.setRng(t)), s.selection.getRng().collapsed) { var i = ec(s.getDoc(), f, l, c.decorate);
                    Oa(i, "\xa0"), s.selection.getRng().insertNode(i.dom()), s.selection.select(i.dom()) } else { var a = ds.getPersistentBookmark(s.selection, !1),
                        u = s.selection.getRng();
                    tc(s, u, l, c.decorate, f), s.selection.moveToBookmark(a) } }) },
        rc = function(u) { var n, r = (n = {}, { register: function(e, t) { n[e] = { name: e, settings: t } }, lookup: function(e) { return n.hasOwnProperty(e) ? T.from(n[e]).map(function(e) { return e.settings }) : T.none() } });
            Aa(u, r); var o = Ta(u); return { register: function(e, t) { r.register(e, t) }, annotate: function(t, n) { r.lookup(t).each(function(e) { nc(u, t, e, n) }) }, annotationChanged: function(e, t) { o.addListener(e, t) }, remove: function(e) { Sa(u, T.some(e)).each(function(e) { var t = e.elements;
                        F(t, oa) }) }, getAll: function(e) { var t, n, r, o, i, a = (t = u, n = e, r = yr.fromDom(t.getBody()), o = ga(r, "[" + Na() + '="' + n + '"]'), i = {}, F(o, function(e) { var t = Pr(e, Ea()),
                            n = i.hasOwnProperty(t) ? i[t] : [];
                        i[t] = n.concat([e]) }), i); return Ar(a, function(e) { return X(e, function(e) { return e.dom() }) }) } } },
        oc = /^[ \t\r\n]*$/,
        ic = { "#text": 3, "#comment": 8, "#cdata": 4, "#pi": 7, "#doctype": 10, "#document-fragment": 11 },
        ac = function(e, t, n) { var r, o, i = n ? "lastChild" : "firstChild",
                a = n ? "prev" : "next"; if (e[i]) return e[i]; if (e !== t) { if (r = e[a]) return r; for (o = e.parent; o && o !== t; o = o.parent)
                    if (r = o[a]) return r } },
        uc = function() {
            function a(e, t) { this.name = e, 1 === (this.type = t) && (this.attributes = [], this.attributes.map = {}) } return a.create = function(e, t) { var n, r; if (n = new a(e, ic[e] || 1), t)
                    for (r in t) n.attr(r, t[r]); return n }, a.prototype.replace = function(e) { return e.parent && e.remove(), this.insert(e, this), this.remove(), this }, a.prototype.attr = function(e, t) { var n, r; if ("string" != typeof e) { for (r in e) this.attr(r, e[r]); return this } if (n = this.attributes) { if (t === undefined) return n.map[e]; if (null === t) { if (e in n.map)
                            for (delete n.map[e], r = n.length; r--;)
                                if (n[r].name === e) return n = n.splice(r, 1), this;
                        return this } if (e in n.map) { for (r = n.length; r--;)
                            if (n[r].name === e) { n[r].value = t; break } } else n.push({ name: e, value: t }); return n.map[e] = t, this } }, a.prototype.clone = function() { var e, t, n, r, o, i = new a(this.name, this.type); if (n = this.attributes) { for ((o = []).map = {}, e = 0, t = n.length; e < t; e++) "id" !== (r = n[e]).name && (o[o.length] = { name: r.name, value: r.value }, o.map[r.name] = r.value);
                    i.attributes = o } return i.value = this.value, i.shortEnded = this.shortEnded, i }, a.prototype.wrap = function(e) { return this.parent.insert(e, this), e.append(this), this }, a.prototype.unwrap = function() { var e, t; for (e = this.firstChild; e;) t = e.next, this.insert(e, this, !0), e = t;
                this.remove() }, a.prototype.remove = function() { var e = this.parent,
                    t = this.next,
                    n = this.prev; return e && (e.firstChild === this ? (e.firstChild = t) && (t.prev = null) : n.next = t, e.lastChild === this ? (e.lastChild = n) && (n.next = null) : t.prev = n, this.parent = this.next = this.prev = null), this }, a.prototype.append = function(e) { var t; return e.parent && e.remove(), (t = this.lastChild) ? ((t.next = e).prev = t, this.lastChild = e) : this.lastChild = this.firstChild = e, e.parent = this, e }, a.prototype.insert = function(e, t, n) { var r; return e.parent && e.remove(), r = t.parent || this, n ? (t === r.firstChild ? r.firstChild = e : t.prev.next = e, e.prev = t.prev, (e.next = t).prev = e) : (t === r.lastChild ? r.lastChild = e : t.next.prev = e, e.next = t.next, (e.prev = t).next = e), e.parent = r, e }, a.prototype.getAll = function(e) { var t, n = []; for (t = this.firstChild; t; t = ac(t, this)) t.name === e && n.push(t); return n }, a.prototype.empty = function() { var e, t, n; if (this.firstChild) { for (e = [], n = this.firstChild; n; n = ac(n, this)) e.push(n); for (t = e.length; t--;)(n = e[t]).parent = n.firstChild = n.lastChild = n.next = n.prev = null } return this.firstChild = this.lastChild = null, this }, a.prototype.isEmpty = function(e, t, n) { var r, o, i = this.firstChild; if (t = t || {}, i)
                    do { if (1 === i.type) { if (i.attr("data-mce-bogus")) continue; if (e[i.name]) return !1; for (r = i.attributes.length; r--;)
                                if ("name" === (o = i.attributes[r].name) || 0 === o.indexOf("data-mce-bookmark")) return !1 } if (8 === i.type) return !1; if (3 === i.type && !oc.test(i.value)) return !1; if (3 === i.type && i.parent && t[i.parent.name] && oc.test(i.value)) return !1; if (n && n(i)) return !1 } while (i = ac(i, this)); return !0 }, a.prototype.walk = function(e) { return ac(this, null, e) }, a }(),
        sc = function(e, t, n) { var r, o, i, a, u = 1; for (a = e.getShortEndedElements(), (i = /<([!?\/])?([A-Za-z0-9\-_\:\.]+)((?:\s+[^"\'>]+(?:(?:"[^"]*")|(?:\'[^\']*\')|[^>]*))*|\/|\s+)>/g).lastIndex = r = n; o = i.exec(t);) { if (r = i.lastIndex, "/" === o[1]) u--;
                else if (!o[1]) { if (o[2] in a) continue;
                    u++ } if (0 === u) break } return r },
        lc = function(e, t) { var n = e.exec(t); if (n) { var r = n[1],
                    o = n[2]; return "string" == typeof r && "data-mce-bogus" === r.toLowerCase() ? o : null } return null };

    function cc(V, I) { void 0 === I && (I = zi()); var e = function() {};!1 !== (V = V || {}).fix_self_closing && (V.fix_self_closing = !0); var F = V.comment ? V.comment : e,
            U = V.cdata ? V.cdata : e,
            j = V.text ? V.text : e,
            q = V.start ? V.start : e,
            $ = V.end ? V.end : e,
            W = V.pi ? V.pi : e,
            K = V.doctype ? V.doctype : e; return { parse: function(e) { var t, n, r, d, o, i, a, h, u, s, m, l, g, c, f, p, v, y, b, C, w, x, z, N, E, S, k, T, A, M = 0,
                    R = [],
                    D = 0,
                    B = ci.decode,
                    O = un.makeMap("src,href,data,background,formaction,poster,xlink:href"),
                    H = /((java|vb)script|mhtml):/i,
                    _ = function(e) { var t, n; for (t = R.length; t-- && R[t].name !== e;); if (0 <= t) { for (n = R.length - 1; t <= n; n--)(e = R[n]).valid && $(e.name);
                            R.length = t } },
                    P = function(e, t, n, r, o) { var i, a, u, s, l; if (n = (t = t.toLowerCase()) in m ? t : B(n || r || o || ""), g && !h && 0 == (0 === (u = t).indexOf("data-") || 0 === u.indexOf("aria-"))) { if (!(i = y[t]) && b) { for (a = b.length; a-- && !(i = b[a]).pattern.test(t);); - 1 === a && (i = null) } if (!i) return; if (i.validValues && !(n in i.validValues)) return } if (O[t] && !V.allow_script_urls) { var c = n.replace(/[\s\u0000-\u001F]+/g, ""); try { c = decodeURIComponent(c) } catch (f) { c = unescape(c) } if (H.test(c)) return; if (l = c, !(s = V).allow_html_data_urls && (/^data:image\//i.test(l) ? !1 === s.allow_svg_data_urls && /^data:image\/svg\+xml/i.test(l) : /^data:/i.test(l))) return }
                        h && (t in O || 0 === t.indexOf("on")) || (d.map[t] = n, d.push({ name: t, value: n })) }; for (E = new RegExp("<(?:(?:!--([\\w\\W]*?)--\x3e)|(?:!\\[CDATA\\[([\\w\\W]*?)\\]\\]>)|(?:!DOCTYPE([\\w\\W]*?)>)|(?:\\?([^\\s\\/<>]+) ?([\\w\\W]*?)[?/]>)|(?:\\/([A-Za-z][A-Za-z0-9\\-_\\:\\.]*)>)|(?:([A-Za-z][A-Za-z0-9\\-_\\:\\.]*)((?:\\s+[^\"'>]+(?:(?:\"[^\"]*\")|(?:'[^']*')|[^>]*))*|\\/|\\s+)>))", "g"), S = /([\w:\-]+)(?:\s*=\s*(?:(?:\"((?:[^\"])*)\")|(?:\'((?:[^\'])*)\')|([^>\s]+)))?/g, s = I.getShortEndedElements(), N = V.self_closing_elements || I.getSelfClosingElements(), m = I.getBoolAttrs(), g = V.validate, u = V.remove_internals, A = V.fix_self_closing, k = I.getSpecialElements(), z = e + ">"; t = E.exec(z);) { if (M < t.index && j(B(e.substr(M, t.index - M))), n = t[6]) ":" === (n = n.toLowerCase()).charAt(0) && (n = n.substr(1)), _(n);
                    else if (n = t[7]) { if (t.index + t[0].length > e.length) { j(B(e.substr(t.index))), M = t.index + t[0].length; continue } ":" === (n = n.toLowerCase()).charAt(0) && (n = n.substr(1)), l = n in s, A && N[n] && 0 < R.length && R[R.length - 1].name === n && _(n); var L = lc(S, t[8]); if (null !== L) { if ("all" === L) { M = sc(I, e, E.lastIndex), E.lastIndex = M; continue }
                            f = !1 } if (!g || (c = I.getElementRule(n))) { if (f = !0, g && (y = c.attributes, b = c.attributePatterns), (v = t[8]) ? ((h = -1 !== v.indexOf("data-mce-type")) && u && (f = !1), (d = []).map = {}, v.replace(S, P)) : (d = []).map = {}, g && !h) { if (C = c.attributesRequired, w = c.attributesDefault, x = c.attributesForced, c.removeEmptyAttrs && !d.length && (f = !1), x)
                                    for (o = x.length; o--;) a = (p = x[o]).name, "{$uid}" === (T = p.value) && (T = "mce_" + D++), d.map[a] = T, d.push({ name: a, value: T }); if (w)
                                    for (o = w.length; o--;)(a = (p = w[o]).name) in d.map || ("{$uid}" === (T = p.value) && (T = "mce_" + D++), d.map[a] = T, d.push({ name: a, value: T })); if (C) { for (o = C.length; o-- && !(C[o] in d.map);); - 1 === o && (f = !1) } if (p = d.map["data-mce-bogus"]) { if ("all" === p) { M = sc(I, e, E.lastIndex), E.lastIndex = M; continue }
                                    f = !1 } }
                            f && q(n, d, l) } else f = !1; if (r = k[n]) { r.lastIndex = M = t.index + t[0].length, M = (t = r.exec(e)) ? (f && (i = e.substr(M, t.index - M)), t.index + t[0].length) : (i = e.substr(M), e.length), f && (0 < i.length && j(i, !0), $(n)), E.lastIndex = M; continue }
                        l || (v && v.indexOf("/") === v.length - 1 ? f && $(n) : R.push({ name: n, valid: f })) } else(n = t[1]) ? (">" === n.charAt(0) && (n = " " + n), V.allow_conditional_comments || "[if" !== n.substr(0, 3).toLowerCase() || (n = " " + n), F(n)) : (n = t[2]) ? U(n.replace(/<!--|-->/g, "")) : (n = t[3]) ? K(n) : (n = t[4]) && W(n, t[5]);
                    M = t.index + t[0].length } for (M < e.length && j(B(e.substr(M))), o = R.length - 1; 0 <= o; o--)(n = R[o]).valid && $(n.name) } } }(cc || (cc = {})).findEndTag = sc; var fc = cc,
        dc = function(e, t) { var n, r, o, i, a, u, s, l, c = t,
                f = /<(\w+) [^>]*data-mce-bogus="all"[^>]*>/g,
                d = e.schema; for (u = e.getTempAttrs(), s = c, l = new RegExp(["\\s?(" + u.join("|") + ')="[^"]+"'].join("|"), "gi"), c = s.replace(l, ""), a = d.getShortEndedElements(); i = f.exec(c);) r = f.lastIndex, o = i[0].length, n = a[i[1]] ? r : fc.findEndTag(d, c, r), c = c.substring(0, r - o) + c.substring(n), f.lastIndex = r - o; return La(c) },
        hc = { trimExternal: dc, trimInternal: dc },
        mc = function(e, t, n) { var r = e.getParam(t, n); if (-1 === r.indexOf("=")) return r; var o = e.getParam(t, "", "hash"); return o.hasOwnProperty(e.id) ? o[e.id] : n },
        gc = function(e) { return e.getParam("iframe_attrs", {}) },
        pc = function(e) { return e.getParam("doctype", "<!DOCTYPE html>") },
        vc = function(e) { return e.getParam("document_base_url", "") },
        yc = function(e) { return mc(e, "body_id", "tinymce") },
        bc = function(e) { return mc(e, "body_class", "") },
        Cc = function(e) { return e.getParam("content_security_policy", "") },
        wc = function(e) { return e.getParam("br_in_pre", !0) },
        xc = function(e) { if (e.getParam("force_p_newlines", !1)) return "p"; var t = e.getParam("forced_root_block", "p"); return !1 === t ? "" : !0 === t ? "p" : t },
        zc = function(e) { return e.getParam("forced_root_block_attrs", {}) },
        Nc = function(e) { return e.getParam("br_newline_selector", ".mce-toc h2,figcaption,caption") },
        Ec = function(e) { return e.getParam("no_newline_selector", "") },
        Sc = function(e) { return e.getParam("keep_styles", !0) },
        kc = function(e) { return e.getParam("end_container_on_empty_block", !1) },
        Tc = function(e) { return un.explode(e.getParam("font_size_style_values", "xx-small,x-small,small,medium,large,x-large,xx-large")) },
        Ac = function(e) { return un.explode(e.getParam("font_size_classes", "")) },
        Mc = function(e) { return e.getParam("icons", "", "string") },
        Rc = function(e) { return e.getParam("icons_url", "", "string") },
        Dc = function(e) { return e.getParam("images_dataimg_filter", $(!0), "function") },
        Bc = function(e) { return e.getParam("automatic_uploads", !0, "boolean") },
        Oc = function(e) { return e.getParam("images_reuse_filename", !1, "boolean") },
        Hc = function(e) { return e.getParam("images_replace_blob_uris", !0, "boolean") },
        _c = function(e) { return e.getParam("images_upload_url", "", "string") },
        Pc = function(e) { return e.getParam("images_upload_base_path", "", "string") },
        Lc = function(e) { return e.getParam("images_upload_credentials", !1, "boolean") },
        Vc = function(e) { return e.getParam("images_upload_handler", null, "function") },
        Ic = function(e) { return e.getParam("content_css_cors", !1, "boolean") },
        Fc = function(e) { return e.getParam("language", "en", "string") },
        Uc = function(e) { return e.getParam("language_url", "", "string") },
        jc = function(e) { return e.getParam("indent_use_margin", !1) },
        qc = function(e) { return e.getParam("indentation", "40px", "string") },
        $c = function(e) { var t = e.settings.content_css; return K(t) ? X(t.split(","), sr) : R(t) ? t : !1 === t || e.inline ? [] : ["default"] },
        Wc = function(e) { return e.getParam("directionality", Ki.isRtl() ? "rtl" : undefined) },
        Kc = function(e) { return e.getParam("inline_boundaries_selector", "a[href],code,.mce-annotation", "string") },
        Xc = function(e, t, n) { var r, o, i, a, u; if (t.format = t.format ? t.format : "html", t.get = !0, t.getInner = !0, t.no_events || e.fire("BeforeGetContent", t), "raw" === t.format) r = un.trim(hc.trimExternal(e.serializer, n.innerHTML));
            else if ("text" === t.format) r = La(n.innerText || n.textContent);
            else { if ("tree" === t.format) return e.serializer.serialize(n, t);
                i = (o = e).serializer.serialize(n, t), a = xc(o), u = new RegExp("^(<" + a + "[^>]*>(&nbsp;|&#160;|\\s|\xa0|<br \\/>|)<\\/" + a + ">[\r\n]*|<br \\/>[\r\n]*)$"), r = i.replace(u, "") } return "text" === t.format || Yo(yr.fromDom(n)) ? t.content = r : t.content = un.trim(r), t.no_events || e.fire("GetContent", t), t.content },
        Yc = un.makeMap,
        Gc = function(e) { var u, s, l, c, f, d = []; return u = (e = e || {}).indent, s = Yc(e.indent_before || ""), l = Yc(e.indent_after || ""), c = ci.getEncodeFunc(e.entity_encoding || "raw", e.entities), f = "html" === e.element_format, { start: function(e, t, n) { var r, o, i, a; if (u && s[e] && 0 < d.length && 0 < (a = d[d.length - 1]).length && "\n" !== a && d.push("\n"), d.push("<", e), t)
                        for (r = 0, o = t.length; r < o; r++) i = t[r], d.push(" ", i.name, '="', c(i.value, !0), '"');
                    d[d.length] = !n || f ? ">" : " />", n && u && l[e] && 0 < d.length && 0 < (a = d[d.length - 1]).length && "\n" !== a && d.push("\n") }, end: function(e) { var t;
                    d.push("</", e, ">"), u && l[e] && 0 < d.length && 0 < (t = d[d.length - 1]).length && "\n" !== t && d.push("\n") }, text: function(e, t) { 0 < e.length && (d[d.length] = t ? e : c(e)) }, cdata: function(e) { d.push("<![CDATA[", e, "]]>") }, comment: function(e) { d.push("\x3c!--", e, "--\x3e") }, pi: function(e, t) { t ? d.push("<?", e, " ", c(t), "?>") : d.push("<?", e, "?>"), u && d.push("\n") }, doctype: function(e) { d.push("<!DOCTYPE", e, ">", u ? "\n" : "") }, reset: function() { d.length = 0 }, getContent: function() { return d.join("").replace(/\n$/, "") } } },
        Jc = function(t, m) { void 0 === m && (m = zi()); var g = Gc(t); return (t = t || {}).validate = !("validate" in t) || t.validate, { serialize: function(e) { var f, d;
                    d = t.validate, f = { 3: function(e) { g.text(e.value, e.raw) }, 8: function(e) { g.comment(e.value) }, 7: function(e) { g.pi(e.name, e.value) }, 10: function(e) { g.doctype(e.value) }, 4: function(e) { g.cdata(e.value) }, 11: function(e) { if (e = e.firstChild)
                                for (; h(e), e = e.next;); } }, g.reset(); var h = function(e) { var t, n, r, o, i, a, u, s, l, c = f[e.type]; if (c) c(e);
                        else { if (t = e.name, n = e.shortEnded, r = e.attributes, d && r && 1 < r.length && ((a = []).map = {}, l = m.getElementRule(e.name))) { for (u = 0, s = l.attributesOrder.length; u < s; u++)(o = l.attributesOrder[u]) in r.map && (i = r.map[o], a.map[o] = i, a.push({ name: o, value: i })); for (u = 0, s = r.length; u < s; u++)(o = r[u].name) in a.map || (i = r.map[o], a.map[o] = i, a.push({ name: o, value: i }));
                                r = a } if (g.start(e.name, r, n), !n) { if (e = e.firstChild)
                                    for (; h(e), e = e.next;);
                                g.end(t) } } }; return 1 !== e.type || t.inner ? f[11](e) : h(e), g.getContent() } } },
        Qc = function(e, t) { t(e), e.firstChild && Qc(e.firstChild, t), e.next && Qc(e.next, t) },
        Zc = function(e, t, n) { var r = function(e, n, t) { var r = {},
                    o = {},
                    i = []; for (var a in t.firstChild && Qc(t.firstChild, function(t) { F(e, function(e) { e.name === t.name && (r[e.name] ? r[e.name].nodes.push(t) : r[e.name] = { filter: e, nodes: [t] }) }), F(n, function(e) { "string" == typeof t.attr(e.name) && (o[e.name] ? o[e.name].nodes.push(t) : o[e.name] = { filter: e, nodes: [t] }) }) }), r) r.hasOwnProperty(a) && i.push(r[a]); for (var a in o) o.hasOwnProperty(a) && i.push(o[a]); return i }(e, t, n);
            F(r, function(t) { F(t.filter.callbacks, function(e) { e(t.nodes, t.filter.name, {}) }) }) },
        ef = function(e) { var t = eo(e).dom(); return e.dom() === t.activeElement },
        tf = function(t) { return (e = eo(t), n = e !== undefined ? e.dom() : j.document, T.from(n.activeElement).map(yr.fromDom)).filter(function(e) { return t.dom().contains(e.dom()) }); var e, n },
        nf = function(a) { if (!R(a)) throw new Error("cases must be an array"); if (0 === a.length) throw new Error("there must be at least one case"); var u = [],
                n = {}; return F(a, function(e, r) { var t = Sr(e); if (1 !== t.length) throw new Error("one and only one name per case"); var o = t[0],
                    i = e[o]; if (n[o] !== undefined) throw new Error("duplicate key detected:" + o); if ("cata" === o) throw new Error("cannot have a case named cata (sorry)"); if (!R(i)) throw new Error("case arguments must be an array");
                u.push(o), n[o] = function() { var e = arguments.length; if (e !== i.length) throw new Error("Wrong number of arguments to case " + o + ". Expected " + i.length + " (" + i + "), got " + e); for (var n = new Array(e), t = 0; t < n.length; t++) n[t] = arguments[t]; return { fold: function() { if (arguments.length !== a.length) throw new Error("Wrong number of arguments to fold. Expected " + a.length + ", got " + arguments.length); return arguments[r].apply(null, n) }, match: function(e) { var t = Sr(e); if (u.length !== t.length) throw new Error("Wrong number of arguments to match. Expected: " + u.join(",") + "\nActual: " + t.join(",")); if (!ie(u, function(e) { return V(t, e) })) throw new Error("Not all branches were specified when using match. Specified: " + t.join(", ") + "\nRequired: " + u.join(", ")); return e[o].apply(null, n) }, log: function(e) { j.console.log(e, { constructors: u, constructor: o, params: n }) } } } }), n },
        rf = (nf([{ before: ["element"] }, { on: ["element", "offset"] }, { after: ["element"] }]), nf([{ domRange: ["rng"] }, { relative: ["startSitu", "finishSitu"] }, { exact: ["start", "soffset", "finish", "foffset"] }]), Ur("start", "soffset", "finish", "foffset")),
        of = pr.detect().browser,
        af = function(e, t) { var n = Er(t) ? Ql(t).length : uo(t).length + 1; return n < e ? n : e < 0 ? 0 : e },
        uf = function(e) { return rf(e.start(), af(e.soffset(), e.start()), e.finish(), af(e.foffset(), e.finish())) },
        sf = function(e, t) { return !_o.isRestrictedNode(t.dom()) && (Zr(e, t) || Qr(e, t)) },
        lf = function(t) { return function(e) { return sf(t, e.start()) && sf(t, e.finish()) } },
        cf = function(e) { return !0 === e.inline || of.isIE() },
        ff = function(e) { return rf(yr.fromDom(e.startContainer), e.startOffset, yr.fromDom(e.endContainer), e.endOffset) },
        df = function(e) { var t = e.getSelection(); return (t && 0 !== t.rangeCount ? T.from(t.getRangeAt(0)) : T.none()).map(ff) },
        hf = function(e) { var t, n = (t = e.dom().ownerDocument.defaultView, yr.fromDom(t)); return df(n.dom()).filter(lf(e)) },
        mf = function(e, t) { return T.from(t).filter(lf(e)).map(uf) },
        gf = function(e) { var t = j.document.createRange(); try { return t.setStart(e.start().dom(), e.soffset()), t.setEnd(e.finish().dom(), e.foffset()), T.some(t) } catch (n) { return T.none() } },
        pf = function(e) { return (e.bookmark ? e.bookmark : T.none()).bind(d(mf, yr.fromDom(e.getBody()))).bind(gf) },
        vf = function(e) { var t = cf(e) ? hf(yr.fromDom(e.getBody())) : T.none();
            e.bookmark = t.isSome() ? t : e.bookmark },
        yf = function(t) { pf(t).each(function(e) { t.selection.setRng(e) }) },
        bf = pf,
        Cf = function(t, e) { return (n = e, n.collapsed ? T.from(vu(n.startContainer, n.startOffset)).map(yr.fromDom) : T.none()).bind(function(e) { return Ko(e) ? T.some(e) : !1 === Zr(t, e) ? T.some(t) : T.none() }); var n },
        wf = function(t, e) { Cf(yr.fromDom(t.getBody()), e).bind(function(e) { return xl.firstPositionIn(e.dom()) }).fold(function() { t.selection.normalize() }, function(e) { return t.selection.setRng(e.toRange()) }) },
        xf = function(e) { if (e.setActive) try { e.setActive() } catch (t) { e.focus() } else e.focus() },
        zf = function(e) { var t, n = e.getBody(); return n && (t = yr.fromDom(n), ef(t) || tf(t).isSome()) },
        Nf = function(e) { return e.inline ? zf(e) : (t = e).iframeElement && ef(yr.fromDom(t.iframeElement)); var t },
        Ef = function(e) { return e.editorManager.setActive(e) },
        Sf = function(e, t) { e.removed || (t ? Ef(e) : function(t) { var e = t.selection,
                    n = t.getBody(),
                    r = e.getRng();
                t.quirks.refreshContentEditable(); var o, i, a = (o = t, i = e.getNode(), o.dom.getParent(i, function(e) { return "true" === o.dom.getContentEditable(e) })); if (t.$.contains(n, a)) return xf(a), wf(t, r), Ef(t);
                t.bookmark !== undefined && !1 === Nf(t) && bf(t).each(function(e) { t.selection.setRng(e), r = e }), t.inline || (Fe.opera || xf(n), t.getWin().focus()), (Fe.gecko || t.inline) && (xf(n), wf(t, r)), Ef(t) }(e)) },
        kf = Nf,
        Tf = function(e) { return e instanceof uc },
        Af = function(e, t) { var r;
            e.dom.setHTML(e.getBody(), t), kf(r = e) && xl.firstPositionIn(r.getBody()).each(function(e) { var t = e.getNode(),
                    n = _o.isTable(t) ? xl.firstPositionIn(t).getOr(e) : e;
                r.selection.setRng(n.toRange()) }) },
        Mf = function(u, s, l) { return void 0 === l && (l = {}), l.format = l.format ? l.format : "html", l.set = !0, l.content = Tf(s) ? "" : s, Tf(s) || l.no_events || (u.fire("BeforeSetContent", l), s = l.content), T.from(u.getBody()).fold($(s), function(e) { return Tf(s) ? function(e, t, n, r) { Zc(e.parser.getNodeFilters(), e.parser.getAttributeFilters(), n); var o = Jc({ validate: e.validate }, e.schema).serialize(n); return r.content = Yo(yr.fromDom(t)) ? o : un.trim(o), Af(e, r.content), r.no_events || e.fire("SetContent", r), n }(u, e, s, l) : (t = u, n = e, o = l, 0 === (r = s).length || /^\s+$/.test(r) ? (a = '<br data-mce-bogus="1">', "TABLE" === n.nodeName ? r = "<tr><td>" + a + "</td></tr>" : /^(UL|OL)$/.test(n.nodeName) && (r = "<li>" + a + "</li>"), (i = xc(t)) && t.schema.isValidChild(n.nodeName.toLowerCase(), i.toLowerCase()) ? (r = a, r = t.dom.createHTML(i, t.settings.forced_root_block_attrs, r)) : r || (r = '<br data-mce-bogus="1">'), Af(t, r), t.fire("SetContent", o)) : ("raw" !== o.format && (r = Jc({ validate: t.validate }, t.schema).serialize(t.parser.parse(r, { isRootContent: !0, insert: !0 }))), o.content = Yo(yr.fromDom(n)) ? r : un.trim(r), Af(t, o.content), o.no_events || t.fire("SetContent", o)), o.content); var t, n, r, o, i, a }) },
        Rf = function(e, t) { return e.fire("PreProcess", t) },
        Df = function(e, t) { return e.fire("PostProcess", t) },
        Bf = function(e) { return e.fire("remove") },
        Of = function(e) { return e.fire("detach") },
        Hf = function(e, t) { return e.fire("SwitchMode", { mode: t }) },
        _f = function(e, t, n, r) { e.fire("ObjectResizeStart", { target: t, width: n, height: r }) },
        Pf = function(e, t, n, r) { e.fire("ObjectResized", { target: t, width: n, height: r }) },
        Lf = _i.DOM,
        Vf = function(e) { return T.from(e).each(function(e) { return e.destroy() }) },
        If = function(e) { if (!e.removed) { var t = e._selectionOverrides,
                    n = e.editorUpload,
                    r = e.getBody(),
                    o = e.getElement();
                r && e.save({ is_removing: !0 }), e.removed = !0, e.unbindAllNativeEvents(), e.hasHiddenInput && o && Lf.remove(o.nextSibling), Bf(e), e.editorManager.remove(e), !e.inline && r && (i = e, Lf.setStyle(i.id, "display", i.orgDisplay)), Of(e), Lf.remove(e.getContainer()), Vf(t), Vf(n), e.destroy() } var i },
        Ff = function(e, t) { var n, r, o, i = e.selection,
                a = e.dom;
            e.destroyed || (t || e.removed ? (t || (e.editorManager.off("beforeunload", e._beforeUnload), e.theme && e.theme.destroy && e.theme.destroy(), Vf(i), Vf(a)), (r = (n = e).formElement) && (r._mceOldSubmit && (r.submit = r._mceOldSubmit, r._mceOldSubmit = null), Lf.unbind(r, "submit reset", n.formEventDelegate)), (o = e).contentAreaContainer = o.formElement = o.container = o.editorContainer = null, o.bodyElement = o.contentDocument = o.contentWindow = null, o.iframeElement = o.targetElm = null, o.selection && (o.selection = o.selection.win = o.selection.dom = o.selection.dom.doc = null), e.destroyed = !0) : e.remove()) },
        Uf = Ur("sections", "settings"),
        jf = pr.detect(),
        qf = jf.deviceType.isTouch(),
        $f = jf.deviceType.isPhone(),
        Wf = ["lists", "autolink", "autosave"],
        Kf = $f ? { theme: "mobile" } : {},
        Xf = function(e) { var t = R(e) ? e.join(" ") : e,
                n = X(K(t) ? t.split(" ") : [], sr); return G(n, function(e) { return 0 < e.length }) },
        Yf = function(e, t, n, r) { var o, i, a = Xf(n.forced_plugins),
                u = Xf(r.plugins),
                s = e && (o = "mobile", t.sections().hasOwnProperty(o)) ? G(u, d(V, Wf)) : u,
                l = (i = s, [].concat(Xf(a)).concat(Xf(i))); return un.extend(r, { plugins: l.join(" ") }) },
        Gf = function(e, t, n, r) { var o, i, a, u, s, l, c, f, d, h, m, g = (o = ["mobile"], i = Rr(r, function(e, t) { return V(o, t) }), Uf(i.t, i.f)),
                p = un.extend(t, n, g.settings(), (h = e, m = g.settings().inline, h && !m ? (l = "mobile", c = Kf, f = g.sections(), d = f.hasOwnProperty(l) ? f[l] : {}, un.extend({}, c, d)) : {}), { validate: !0, external_plugins: (a = n, u = g.settings(), s = u.external_plugins ? u.external_plugins : {}, a && a.external_plugins ? un.extend({}, a.external_plugins, s) : s) }); return Yf(e, g, n, p) },
        Jf = function(e, t, n) { return T.from(t.settings[n]).filter(e) },
        Qf = function(e, t, n, r) { var o, i, a, u = t in e.settings ? e.settings[t] : n; return "hash" === r ? (a = {}, "string" == typeof(i = u) ? F(0 < i.indexOf("=") ? i.split(/[;,](?![^=;,]*(?:[;,]|$))/) : i.split(","), function(e) { var t = e.split("=");
                1 < t.length ? a[un.trim(t[0])] = un.trim(t[1]) : a[un.trim(t[0])] = un.trim(t[0]) }) : a = i, a) : "string" === r ? Jf(K, e, t).getOr(n) : "number" === r ? Jf(H, e, t).getOr(n) : "boolean" === r ? Jf(B, e, t).getOr(n) : "object" === r ? Jf(M, e, t).getOr(n) : "array" === r ? Jf(R, e, t).getOr(n) : "string[]" === r ? Jf((o = K, function(e) { return R(e) && ie(e, o) }), e, t).getOr(n) : "function" === r ? Jf(O, e, t).getOr(n) : u },
        Zf = function(e, t) { return t.dom()[e] },
        ed = function(e, t) { return parseInt(Vr(t, e), 10) },
        td = d(Zf, "clientWidth"),
        nd = d(Zf, "clientHeight"),
        rd = d(ed, "margin-top"),
        od = d(ed, "margin-left"),
        id = function(e, t, n) { var r, o, i, a, u, s, l, c, f, d, h, m = yr.fromDom(e.getBody()),
                g = e.inline ? m : (r = m, yr.fromDom(r.dom().ownerDocument.documentElement)),
                p = (o = e.inline, a = t, u = n, s = (i = g).dom().getBoundingClientRect(), { x: a - (o ? s.left + i.dom().clientLeft + od(i) : 0), y: u - (o ? s.top + i.dom().clientTop + rd(i) : 0) }); return c = p.x, f = p.y, d = td(l = g), h = nd(l), 0 <= c && 0 <= f && c <= d && f <= h },
        ad = function(e) { var t, n = e.inline ? e.getBody() : e.getContentAreaContainer(); return (t = n, T.from(t).map(yr.fromDom)).map(function(e) { return Zr(eo(e), e) }).getOr(!1) };

    function ud(n) { var t, o = [],
            i = function() { var e = n.theme; return e && e.getNotificationManagerImpl ? e.getNotificationManagerImpl() : function t() { var e = function() { throw new Error("Theme did not provide a NotificationManager implementation.") }; return { open: e, close: e, reposition: e, getArgs: e } }() },
            a = function() { 0 < o.length && i().reposition(o) },
            u = function(t) { ee(o, function(e) { return e === t }).each(function(e) { o.splice(e, 1) }) },
            r = function(r) { if (!n.removed && ad(n)) return Z(o, function(e) { return t = i().getArgs(e), n = r, !(t.type !== n.type || t.text !== n.text || t.progressBar || t.timeout || n.progressBar || n.timeout); var t, n }).getOrThunk(function() { n.editorManager.setActive(n); var e, t = i().open(r, function() { u(t), a() }); return e = t, o.push(e), a(), t }) }; return (t = n).on("SkinLoaded", function() { var e = t.settings.service_message;
            e && r({ text: e, type: "warn", timeout: 0 }) }), t.on("ResizeEditor ResizeWindow NodeChange", function() { We.requestAnimationFrame(a) }), t.on("remove", function() { F(o.slice(), function(e) { i().close(e) }) }), { open: r, close: function() { T.from(o[0]).each(function(e) { i().close(e), u(e), a() }) }, getNotifications: function() { return o } } } var sd, ld = function(n) { var r = [],
                o = function() { var e = n.theme; return e && e.getWindowManagerImpl ? e.getWindowManagerImpl() : function t() { var e = function() { throw new Error("Theme did not provide a WindowManager implementation.") }; return { open: e, openUrl: e, alert: e, confirm: e, close: e, getParams: e, setParams: e } }() },
                i = function(e, t) { return function() { return t ? t.apply(e, arguments) : undefined } },
                a = function(e) { var t;
                    r.push(e), t = e, n.fire("OpenWindow", { dialog: t }) },
                u = function(t) { var e;
                    e = t, n.fire("CloseWindow", { dialog: e }), 0 === (r = G(r, function(e) { return e !== t })).length && n.focus() },
                s = function(e) { n.editorManager.setActive(n), vf(n); var t = e(); return a(t), t }; return n.on("remove", function() { F(r, function(e) { o().close(e) }) }), { open: function(e, t) { return s(function() { return o().open(e, t, u) }) }, openUrl: function(e) { return s(function() { return o().openUrl(e, u) }) }, alert: function(e, t, n) { o().alert(e, i(n || this, t)) }, confirm: function(e, t, n) { o().confirm(e, i(n || this, t)) }, close: function() { T.from(r[r.length - 1]).each(function(e) { o().close(e), u(e) }) } } },
        cd = function(e, t) { e.notificationManager.open({ type: "error", text: t }) },
        fd = function(e, t) { e._skinLoaded ? cd(e, t) : e.on("SkinLoaded", function() { cd(e, t) }) },
        dd = function(e) { j.console.error(e) },
        hd = function(e, t, n) { return n ? "Failed to load " + e + ": " + n + " from url " + t : "Failed to load " + e + " url: " + t },
        md = function(e) { for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]; var r = j.window.console;
            r && (r.error ? r.error.apply(r, arguments) : r.log.apply(r, arguments)) },
        gd = { pluginLoadError: function(e, t) { dd(hd("plugin", e, t)) }, iconsLoadError: function(e, t) { dd(hd("icons", e, t)) }, languageLoadError: function(e, t) { dd(hd("language", e, t)) }, pluginInitError: function(e, t, n) { var r = Ki.translate(["Failed to initialize plugin: {0}", t]);
                md(r, n), fd(e, r) }, uploadError: function(e, t) { fd(e, Ki.translate(["Failed to upload image: {0}", t])) }, displayError: fd, initError: md },
        pd = (sd = {}, { add: function(e, t) { sd[e] = t }, get: function(e) { return sd[e] ? sd[e] : { icons: {} } }, has: function(e) { return Br(sd, e) } }),
        vd = Gi.PluginManager,
        yd = Gi.ThemeManager;

    function bd() { return new(ge.getOrDie("XMLHttpRequest")) }

    function Cd(u, s) { var r = {},
            n = function(e, r, o, t) { var i, n;
                (i = bd()).open("POST", s.url), i.withCredentials = s.credentials, i.upload.onprogress = function(e) { t(e.loaded / e.total * 100) }, i.onerror = function() { o("Image upload failed due to a XHR Transport error. Code: " + i.status) }, i.onload = function() { var e, t, n;
                    i.status < 200 || 300 <= i.status ? o("HTTP Error: " + i.status) : (e = JSON.parse(i.responseText)) && "string" == typeof e.location ? r((t = s.basePath, n = e.location, t ? t.replace(/\/$/, "") + "/" + n.replace(/^\//, "") : n)) : o("Invalid JSON: " + i.responseText) }, (n = new j.FormData).append("file", e.blob(), e.filename()), i.send(n) },
            l = function(e, t) { return { url: t, blobInfo: e, status: !0 } },
            c = function(e, t) { return { url: "", blobInfo: e, status: !1, error: t } },
            f = function(e, t) { un.each(r[e], function(e) { e(t) }), delete r[e] },
            o = function(e, n) { return e = un.grep(e, function(e) { return !u.isUploaded(e.blobUri()) }), Ue.all(un.map(e, function(e) { return u.isPending(e.blobUri()) ? (t = e.blobUri(), new Ue(function(e) { r[t] = r[t] || [], r[t].push(e) })) : (o = e, i = s.handler, a = n, u.markPending(o.blobUri()), new Ue(function(t) { var n; try { var r = function() { n && n.close() };
                            i(o, function(e) { r(), u.markUploaded(o.blobUri(), e), f(o.blobUri(), l(o, e)), t(l(o, e)) }, function(e) { r(), u.removeFailed(o.blobUri()), f(o.blobUri(), c(o, e)), t(c(o, e)) }, function(e) { e < 0 || 100 < e || (n || (n = a()), n.progressBar.value(e)) }) } catch (e) { t(c(o, e.message)) } })); var o, i, a, t })) }; return !1 === O(s.handler) && (s.handler = n), { upload: function(e, t) { return s.url || s.handler !== n ? o(e, t) : new Ue(function(e) { e([]) }) } } } var wd = function(e) { return ge.getOrDie("atob")(e) },
        xd = function(e) { var t, n, r = decodeURIComponent(e).split(","); return (n = /data:([^;]+)/.exec(r[0])) && (t = n[1]), { type: t, data: r[1] } },
        zd = function(a) { return new Ue(function(e) { var t, n, r, o = xd(a); try { t = wd(o.data) } catch (xN) { return void e(new j.Blob([])) } for (n = function i(e) { return new(ge.getOrDie("Uint8Array"))(e) }(t.length), r = 0; r < n.length; r++) n[r] = t.charCodeAt(r);
                e(new j.Blob([n], { type: o.type })) }) },
        Nd = function(e) { return 0 === e.indexOf("blob:") ? (i = e, new Ue(function(e, t) { var n = function() { t("Cannot convert " + i + " to Blob. Resource might not exist or is inaccessible.") }; try { var r = bd();
                    r.open("GET", i, !0), r.responseType = "blob", r.onload = function() { 200 === this.status ? e(this.response) : n() }, r.onerror = n, r.send() } catch (o) { n() } })) : 0 === e.indexOf("data:") ? zd(e) : null; var i },
        Ed = function(r) { return new Ue(function(e) { var t = function n() { return new(ge.getOrDie("FileReader")) }();
                t.onloadend = function() { e(t.result) }, t.readAsDataURL(r) }) },
        Sd = xd,
        kd = 0,
        Td = function(e) { return (e || "blobid") + kd++ };

    function Ad(i, l) { var a = {}; return { findAll: function(e, n) { var t, r;
                n || (n = $(!0)), t = G((r = e) ? de(r.getElementsByTagName("img")) : [], function(e) { var t = e.src; return !!Fe.fileApi && !e.hasAttribute("data-mce-bogus") && !e.hasAttribute("data-mce-placeholder") && !(!t || t === Fe.transparentSrc) && (0 === t.indexOf("blob:") ? !i.isUploaded(t) && n(e) : 0 === t.indexOf("data:") && n(e)) }); var o = X(t, function(s) { if (a[s.src]) return new Ue(function(t) { a[s.src].then(function(e) { if ("string" == typeof e) return e;
                            t({ image: s, blobInfo: e.blobInfo }) }) }); var e = new Ue(function(e, t) { var n, r, o, i, a, u;
                        n = l, o = e, i = t, 0 !== (r = s).src.indexOf("blob:") ? (a = Sd(r.src).data, (u = n.findFirst(function(e) { return e.base64() === a })) ? o({ image: r, blobInfo: u }) : Nd(r.src).then(function(e) { u = n.create(Td(), e, a), n.add(u), o({ image: r, blobInfo: u }) }, function(e) { i(e) })) : (u = n.getByUri(r.src)) ? o({ image: r, blobInfo: u }) : Nd(r.src).then(function(t) { Ed(t).then(function(e) { a = Sd(e).data, u = n.create(Td(), t, a), n.add(u), o({ image: r, blobInfo: u }) }) }, function(e) { i(e) }) }).then(function(e) { return delete a[e.image.src], e })["catch"](function(e) { return delete a[s.src], e }); return a[s.src] = e }); return Ue.all(o) } } } var Md, Rd, Dd = 0,
        Bd = function(e) { return e + Dd++ + (t = function() { return Math.round(4294967295 * Math.random()).toString(36) }, "s" + (new Date).getTime().toString(36) + t() + t() + t()); var t },
        Od = function(o) { var n, i, t, e, a, r, u = (n = [], i = function(e) { var t, n, r; if (!e.blob || !e.base64) throw new Error("blob and base64 representations of the image are required for BlobInfo to be created"); return t = e.id || Bd("blobid"), n = e.name || t, { id: $(t), name: $(n), filename: $(n + "." + (r = e.blob.type, { "image/jpeg": "jpg", "image/jpg": "jpg", "image/gif": "gif", "image/png": "png" }[r.toLowerCase()] || "dat")), blob: $(e.blob), base64: $(e.base64), blobUri: $(e.blobUri || ve(e.blob)), uri: $(e.uri) } }, { create: function(e, t, n, r) { if (K(e)) return i({ id: e, name: r, blob: t, base64: n }); if (M(e)) return i(e); throw new Error("Unknown input type") }, add: function(e) { t(e.id()) || n.push(e) }, get: t = function(t) { return e(function(e) { return e.id() === t }) }, getByUri: function(t) { return e(function(e) { return e.blobUri() === t }) }, findFirst: e = function(e) { return G(n, e)[0] }, removeByUri: function(t) { n = G(n, function(e) { return e.blobUri() !== t || (ye(e.blobUri()), !1) }) }, destroy: function() { F(n, function(e) { ye(e.blobUri()) }), n = [] } }),
                s = function w() { var n = {},
                        r = function(e, t) { return { status: e, resultUri: t } },
                        t = function(e) { return e in n }; return { hasBlobUri: t, getResultUri: function(e) { var t = n[e]; return t ? t.resultUri : null }, isPending: function(e) { return !!t(e) && 1 === n[e].status }, isUploaded: function(e) { return !!t(e) && 2 === n[e].status }, markPending: function(e) { n[e] = r(1, null) }, markUploaded: function(e, t) { n[e] = r(2, t) }, removeFailed: function(e) { delete n[e] }, destroy: function() { n = {} } } }(),
                l = [],
                c = function(t) { return function(e) { return o.selection ? t(e) : [] } },
                f = function(e, t, n) { for (var r = 0; - 1 !== (r = e.indexOf(t, r)) && (e = e.substring(0, r) + n + e.substr(r + t.length), r += n.length - t.length + 1), -1 !== r;); return e },
                d = function(e, t, n) { return e = f(e, 'src="' + t + '"', 'src="' + n + '"'), e = f(e, 'data-mce-src="' + t + '"', 'data-mce-src="' + n + '"') },
                h = function(t, n) { F(o.undoManager.data, function(e) { "fragmented" === e.type ? e.fragments = X(e.fragments, function(e) { return d(e, t, n) }) : e.content = d(e.content, t, n) }) },
                m = function() { return o.notificationManager.open({ text: o.translate("Image uploading..."), type: "info", timeout: -1, progressBar: !0 }) },
                g = function(e, t) { u.removeByUri(e.src), h(e.src, t), o.$(e).attr({ src: Oc(o) ? t + "?" + (new Date).getTime() : t, "data-mce-src": o.convertURL(t, "src") }) },
                p = function(n) { return a || (a = Cd(s, { url: _c(o), basePath: Pc(o), credentials: Lc(o), handler: Vc(o) })), b().then(c(function(r) { var e; return e = X(r, function(e) { return e.blobInfo }), a.upload(e, m).then(c(function(e) { var t = X(e, function(e, t) { var n = r[t].image; return e.status && Hc(o) ? g(n, e.url) : e.error && gd.uploadError(o, e.error), { element: n, status: e.status } }); return n && n(t), t })) })) },
                v = function(e) { if (Bc(o)) return p(e) },
                y = function(t) { return !1 !== ie(l, function(e) { return e(t) }) && (0 !== t.getAttribute("src").indexOf("data:") || Dc(o)(t)) },
                b = function() { return r || (r = Ad(s, u)), r.findAll(o.getBody(), y).then(c(function(e) { return e = G(e, function(e) { return "string" != typeof e || (gd.displayError(o, e), !1) }), F(e, function(e) { h(e.image.src, e.blobInfo.blobUri()), e.image.src = e.blobInfo.blobUri(), e.image.removeAttribute("data-mce-src") }), e })) },
                C = function(e) { return e.replace(/src="(blob:[^"]+)"/g, function(e, n) { var t = s.getResultUri(n); if (t) return 'src="' + t + '"'; var r = u.getByUri(n); return r || (r = Q(o.editorManager.get(), function(e, t) { return e || t.editorUpload && t.editorUpload.blobCache.getByUri(n) }, null)), r ? 'src="data:' + r.blob().type + ";base64," + r.base64() + '"' : e }) }; return o.on("SetContent", function() { Bc(o) ? v() : b() }), o.on("RawSaveContent", function(e) { e.content = C(e.content) }), o.on("GetContent", function(e) { e.source_view || "raw" === e.format || (e.content = C(e.content)) }), o.on("PostRender", function() { o.parser.addNodeFilter("img", function(e) { F(e, function(e) { var t = e.attr("src"); if (!u.getByUri(t)) { var n = s.getResultUri(t);
                            n && e.attr("src", n) } }) }) }), { blobCache: u, addFilter: function(e) { l.push(e) }, uploadImages: p, uploadImagesAuto: v, scanForImages: b, destroy: function() { u.destroy(), s.destroy(), r = a = null } } },
        Hd = function(e, t, n) { return Zr(t, e) ? no(e, function(e) { return n(e) || Qr(e, t) }).slice(0, -1) : [] },
        _d = function(e, t) { return Hd(e, t, $(!1)) },
        Pd = _d,
        Ld = function(e, t) { return [e].concat(_d(e, t)) },
        Vd = function(e, t) { return e.hasOwnProperty(t.nodeName) },
        Id = function(e, t) { if (_o.isText(t)) { if (0 === t.nodeValue.length) return !0; if (/^\s+$/.test(t.nodeValue) && (!t.nextSibling || Vd(e, t.nextSibling))) return !0 } return !1 },
        Fd = function(e) { var t, n, r, o, i, a, u, s, l, c, f = e.dom,
                d = e.selection,
                h = e.schema,
                m = h.getBlockElements(),
                g = d.getStart(),
                p = e.getBody(),
                v = xc(e); if (g && _o.isElement(g) && v && (c = p.nodeName.toLowerCase(), h.isValidChild(c, v.toLowerCase()) && (y = m, b = p, C = g, !I(Pd(yr.fromDom(C), yr.fromDom(b)), function(e) { return Vd(y, e.dom()) })))) { var y, b, C, w, x; for (n = (t = d.getRng()).startContainer, r = t.startOffset, o = t.endContainer, i = t.endOffset, l = kf(e), g = p.firstChild; g;)
                    if (w = m, x = g, _o.isText(x) || _o.isElement(x) && !Vd(w, x) && !Dl(x)) { if (Id(m, g)) { g = (u = g).nextSibling, f.remove(u); continue }
                        a || (a = f.create(v, zc(e)), g.parentNode.insertBefore(a, g), s = !0), g = (u = g).nextSibling, a.appendChild(u) } else a = null, g = g.nextSibling;
                s && l && (t.setStart(n, r), t.setEnd(o, i), d.setRng(t), e.nodeChanged()) } },
        Ud = function(e) { xc(e) && e.on("NodeChange", d(Fd, e)) },
        jd = function(e, t) { return e && t && e.startContainer === t.startContainer && e.startOffset === t.startOffset && e.endContainer === t.endContainer && e.endOffset === t.endOffset },
        qd = function(t) { return lo(t).fold($([t]), function(e) { return [t].concat(qd(e)) }) },
        $d = function(t) { return co(t).fold($([t]), function(e) { return "br" === xr(e) ? ro(e).map(function(e) { return [t].concat($d(e)) }).getOr([]) : [t].concat($d(e)) }) },
        Wd = function(o, e) { return Cu([(i = e, a = i.startContainer, u = i.startOffset, _o.isText(a) ? 0 === u ? T.some(yr.fromDom(a)) : T.none() : T.from(a.childNodes[u]).map(yr.fromDom)), (t = e, n = t.endContainer, r = t.endOffset, _o.isText(n) ? r === n.data.length ? T.some(yr.fromDom(n)) : T.none() : T.from(n.childNodes[r - 1]).map(yr.fromDom))], function(e, t) { var n = Z(qd(o), d(Qr, e)),
                    r = Z($d(o), d(Qr, t)); return n.isSome() && r.isSome() }).getOr(!1); var t, n, r, i, a, u },
        Kd = function(e, t, n, r) { var o = n,
                i = new Po(n, o),
                a = e.schema.getNonEmptyElements();
            do { if (3 === n.nodeType && 0 !== un.trim(n.nodeValue).length) return void(r ? t.setStart(n, 0) : t.setEnd(n, n.nodeValue.length)); if (a[n.nodeName] && !/^(TD|TH)$/.test(n.nodeName)) return void(r ? t.setStartBefore(n) : "BR" === n.nodeName ? t.setEndBefore(n) : t.setEndAfter(n)); if (Fe.ie && Fe.ie < 11 && e.isBlock(n) && e.isEmpty(n)) return void(r ? t.setStart(n, 0) : t.setEnd(n, 0)) } while (n = r ? i.next() : i.prev()); "BODY" === o.nodeName && (r ? t.setStart(o, 0) : t.setEnd(o, o.childNodes.length)) },
        Xd = function(e) { var t = e.selection.getSel(); return t && 0 < t.rangeCount },
        Yd = function() {
            function e(r) { var o;
                this.lastPath = [], this.editor = r; var t = this; "onselectionchange" in r.getDoc() || r.on("NodeChange click mouseup keyup focus", function(e) { var t, n;
                    n = { startContainer: (t = r.selection.getRng()).startContainer, startOffset: t.startOffset, endContainer: t.endContainer, endOffset: t.endOffset }, "nodechange" !== e.type && jd(n, o) || r.fire("SelectionChange"), o = n }), r.on("contextmenu", function() { r.fire("SelectionChange") }), r.on("SelectionChange", function() { var e = r.selection.getStart(!0);!e || !Fe.range && r.selection.isCollapsed() || Xd(r) && !t.isSameElementPath(e) && r.dom.isChildOf(e, r.getBody()) && r.nodeChanged({ selectionChange: !0 }) }), r.on("mouseup", function(e) {!e.isDefaultPrevented() && Xd(r) && ("IMG" === r.selection.getNode().nodeName ? We.setEditorTimeout(r, function() { r.nodeChanged() }) : r.nodeChanged()) }) } return e.prototype.nodeChanged = function(e) { var t, n, r, o = this.editor.selection;
                this.editor.initialized && o && !this.editor.settings.disable_nodechange && !this.editor.readonly && (r = this.editor.getBody(), (t = o.getStart(!0) || r).ownerDocument === this.editor.getDoc() && this.editor.dom.isChildOf(t, r) || (t = r), n = [], this.editor.dom.getParent(t, function(e) { if (e === r) return !0;
                    n.push(e) }), (e = e || {}).element = t, e.parents = n, this.editor.fire("NodeChange", e)) }, e.prototype.isSameElementPath = function(e) { var t, n; if ((n = this.editor.$(e).parentsUntil(this.editor.getBody()).add(e)).length === this.lastPath.length) { for (t = n.length; 0 <= t && n[t] === this.lastPath[t]; t--); if (-1 === t) return this.lastPath = n, !0 } return this.lastPath = n, !1 }, e }(),
        Gd = function(e) { var t, n, r, o; return o = e.getBoundingClientRect(), n = (t = e.ownerDocument).documentElement, r = t.defaultView, { top: o.top + r.pageYOffset - n.clientTop, left: o.left + r.pageXOffset - n.clientLeft } },
        Jd = function(e, t) { return n = (u = e).inline ? Gd(u.getBody()) : { left: 0, top: 0 }, a = (i = e).getBody(), r = i.inline ? { left: a.scrollLeft, top: a.scrollTop } : { left: 0, top: 0 }, { pageX: (o = function(e, t) { if (t.target.ownerDocument === e.getDoc()) return { left: t.pageX, top: t.pageY }; var n, r, o, i, a, u = Gd(e.getContentAreaContainer()),
                        s = (r = (n = e).getBody(), o = n.getDoc().documentElement, i = { left: r.scrollLeft, top: r.scrollTop }, a = { left: r.scrollLeft || o.scrollLeft, top: r.scrollTop || o.scrollTop }, n.inline ? i : a); return { left: t.pageX - u.left + s.left, top: t.pageY - u.top + s.top } }(e, t)).left - n.left + r.left, pageY: o.top - n.top + r.top }; var n, r, o, i, a, u },
        Qd = _o.isContentEditableFalse,
        Zd = _o.isContentEditableTrue,
        eh = function(e) { e && e.parentNode && e.parentNode.removeChild(e) },
        th = function(u, s) { return function(e) { if (0 === e.button) { var t = Z(s.dom.getParents(e.target), zu(Qd, Zd)).getOr(null); if (i = s.getBody(), Qd(a = t) && a !== i) { var n = s.dom.getPos(t),
                            r = s.getBody(),
                            o = s.getDoc().documentElement;
                        u.element = t, u.screenX = e.screenX, u.screenY = e.screenY, u.maxX = (s.inline ? r.scrollWidth : o.offsetWidth) - 2, u.maxY = (s.inline ? r.scrollHeight : o.offsetHeight) - 2, u.relX = e.pageX - n.x, u.relY = e.pageY - n.y, u.width = t.offsetWidth, u.height = t.offsetHeight, u.ghost = function(e, t, n, r) { var o = t.cloneNode(!0);
                            e.dom.setStyles(o, { width: n, height: r }), e.dom.setAttrib(o, "data-mce-selected", null); var i = e.dom.create("div", { "class": "mce-drag-container", "data-mce-bogus": "all", unselectable: "on", contenteditable: "false" }); return e.dom.setStyles(i, { position: "absolute", opacity: .5, overflow: "hidden", border: 0, padding: 0, margin: 0, width: n, height: r }), e.dom.setStyles(o, { margin: 0, boxSizing: "border-box" }), i.appendChild(o), i }(s, t, u.width, u.height) } } var i, a } },
        nh = function(c, f) { return function(e) { if (c.dragging && (s = (i = f).selection, l = s.getSel().getRangeAt(0).startContainer, a = 3 === l.nodeType ? l.parentNode : l, u = c.element, a !== u && !i.dom.isChildOf(a, u) && !Qd(a))) { var t = (r = c.element, (o = r.cloneNode(!0)).removeAttribute("data-mce-selected"), o),
                        n = f.fire("drop", { targetClone: t, clientX: e.clientX, clientY: e.clientY });
                    n.isDefaultPrevented() || (t = n.targetClone, f.undoManager.transact(function() { eh(c.element), f.insertContent(f.dom.getOuterHTML(t)), f._selectionOverrides.hideFakeCaret() })) } var r, o, i, a, u, s, l;
                rh(c) } },
        rh = function(e) { e.dragging = !1, e.element = null, eh(e.ghost) },
        oh = function(e) { var t, n, r, o, i, a, g, p, v, u, s, l = {};
            t = _i.DOM, a = j.document, n = th(l, e), g = l, p = e, v = We.throttle(function(e, t) { p._selectionOverrides.hideFakeCaret(), p.selection.placeCaretAt(e, t) }, 0), r = function(e) { var t, n, r, o, i, a, u, s, l, c, f, d, h = Math.max(Math.abs(e.screenX - g.screenX), Math.abs(e.screenY - g.screenY)); if (g.element && !g.dragging && 10 < h) { if (p.fire("dragstart", { target: g.element }).isDefaultPrevented()) return;
                    g.dragging = !0, p.focus() } if (g.dragging) { var m = (f = g, { pageX: (d = Jd(p, e)).pageX - f.relX, pageY: d.pageY + 5 });
                    l = g.ghost, c = p.getBody(), l.parentNode !== c && c.appendChild(l), t = g.ghost, n = m, r = g.width, o = g.height, i = g.maxX, a = g.maxY, s = u = 0, t.style.left = n.pageX + "px", t.style.top = n.pageY + "px", n.pageX + r > i && (u = n.pageX + r - i), n.pageY + o > a && (s = n.pageY + o - a), t.style.width = r - u + "px", t.style.height = o - s + "px", v(e.clientX, e.clientY) } }, o = nh(l, e), u = l, i = function() { u.dragging && s.fire("dragend"), rh(u) }, (s = e).on("mousedown", n), e.on("mousemove", r), e.on("mouseup", o), t.bind(a, "mousemove", r), t.bind(a, "mouseup", i), e.on("remove", function() { t.unbind(a, "mousemove", r), t.unbind(a, "mouseup", i) }) },
        ih = function(e) { var n;
            oh(e), (n = e).on("drop", function(e) { var t = "undefined" != typeof e.clientX ? n.getDoc().elementFromPoint(e.clientX, e.clientY) : null;
                (Qd(t) || Qd(n.dom.getContentEditableParent(t))) && e.preventDefault() }) },
        ah = function(e) { return Q(e, function(e, t) { return e.concat(function(t) { var e = function(e) { return X(e, function(e) { return (e = fu(e)).node = t, e }) }; if (_o.isElement(t)) return e(t.getClientRects()); if (_o.isText(t)) { var n = t.ownerDocument.createRange(); return n.setStart(t, 0), n.setEnd(t, t.data.length), e(n.getClientRects()) } }(t)) }, []) };
    (Rd = Md || (Md = {}))[Rd.Up = -1] = "Up", Rd[Rd.Down = 1] = "Down"; var uh, sh, lh, ch = function(o, i, a, e, u, t) { var n, s, l = 0,
                c = [],
                r = function(e) { var t, n, r; for (r = ah([e]), -1 === o && (r = r.reverse()), t = 0; t < r.length; t++)
                        if (n = r[t], !a(n, s)) { if (0 < c.length && i(n, tn.last(c)) && l++, n.line = l, u(n)) return !0;
                            c.push(n) } }; return (s = tn.last(t.getClientRects())) && (r(n = t.getNode()), function(e, t, n, r) { for (; r = Fs(r, e, lu, t);)
                    if (n(r)) return }(o, e, r, n)), c },
        fh = d(ch, Md.Up, mu, gu),
        dh = d(ch, Md.Down, gu, mu),
        hh = function(n) { return function(e) { return t = n, e.line > t; var t } },
        mh = function(n) { return function(e) { return t = n, e.line === t; var t } },
        gh = _o.isContentEditableFalse,
        ph = Fs,
        vh = function(e, t) { return Math.abs(e.left - t) },
        yh = function(e, t) { return Math.abs(e.right - t) },
        bh = function(e, t) { return e >= t.left && e <= t.right },
        Ch = function(e, o) { return tn.reduce(e, function(e, t) { var n, r; return n = Math.min(vh(e, o), yh(e, o)), r = Math.min(vh(t, o), yh(t, o)), bh(o, t) ? t : bh(o, e) ? e : r === n && gh(t.node) ? t : r < n ? t : e }) },
        wh = function(e, t, n, r) { for (; r = ph(r, e, lu, t);)
                if (n(r)) return },
        xh = function(e, t, n) { var r, o, i, a, u, s, l, c = ah(G(de(e.getElementsByTagName("*")), Rs)),
                f = G(c, function(e) { return n >= e.top && n <= e.bottom }); return (r = Ch(f, t)) && (r = Ch((a = e, l = function(t, e) { var n; return n = G(ah([e]), function(e) { return !t(e, u) }), s = s.concat(n), 0 === n.length }, (s = []).push(u = r), wh(Md.Up, a, d(l, mu), u.node), wh(Md.Down, a, d(l, gu), u.node), s), t)) && Rs(r.node) ? (i = t, { node: (o = r).node, before: vh(o, i) < yh(o, i) }) : null },
        zh = function(i, a, e) { return !e.collapsed && Q(e.getClientRects(), function(e, t) { return e || (o = a, (r = i) >= (n = t).left && r <= n.right && o >= n.top && o <= n.bottom); var n, r, o }, !1) },
        Nh = _o.isContentEditableTrue,
        Eh = _o.isContentEditableFalse,
        Sh = function(e, t, n, r, o) { return t._selectionOverrides.showCaret(e, n, r, o) },
        kh = function(e, t) { var n, r; return e.fire("BeforeObjectSelected", { target: t }).isDefaultPrevented() ? null : ((r = (n = t).ownerDocument.createRange()).selectNode(n), r) },
        Th = function(e, t, n) { var r = Ys(1, e.getBody(), t),
                o = $u.fromRangeStart(r),
                i = o.getNode(); if (Eh(i)) return Sh(1, e, i, !o.isAtEnd(), !1); var a = o.getNode(!0); if (Eh(a)) return Sh(1, e, a, !1, !1); var u = e.dom.getParent(o.getNode(), function(e) { return Eh(e) || Nh(e) }); return Eh(u) ? Sh(1, e, u, !1, n) : null },
        Ah = function(e, t, n) { if (!t || !t.collapsed) return t; var r = Th(e, t, n); return r || t },
        Mh = function(t) { var e = ia(function() { if (!t.removed && t.getBody().contains(j.document.activeElement) && t.selection.getRng().collapsed) { var e = Ah(t, t.selection.getRng(), !1);
                    t.selection.setRng(e) } }, 0);
            t.on("focus", function() { e.throttle() }), t.on("blur", function() { e.cancel() }) },
        Rh = { BACKSPACE: 8, DELETE: 46, DOWN: 40, ENTER: 13, LEFT: 37, RIGHT: 39, SPACEBAR: 32, TAB: 9, UP: 38, END: 35, HOME: 36, modifierPressed: function(e) { return e.shiftKey || e.ctrlKey || e.altKey || this.metaKeyPressed(e) }, metaKeyPressed: function(e) { return Fe.mac ? e.metaKey : e.ctrlKey && !e.altKey } },
        Dh = (uh = "\xa0", function(e) { return uh === e }),
        Bh = function(e) { return /^[\r\n\t ]$/.test(e) },
        Oh = function(e) { return !Bh(e) && !Dh(e) },
        Hh = function(n, r, o) { return T.from(o.container()).filter(_o.isText).exists(function(e) { var t = n ? 0 : -1; return r(e.data.charAt(o.offset() + t)) }) },
        _h = d(Hh, !0, Bh),
        Ph = d(Hh, !1, Bh),
        Lh = function(e) { var t = e.container(); return _o.isText(t) && 0 === t.data.length },
        Vh = function(t, n) { return function(e) { return T.from(qs(t ? 0 : -1, e)).filter(n).isSome() } },
        Ih = function(e) { return "IMG" === e.nodeName && "block" === Vr(yr.fromDom(e), "display") },
        Fh = function(e) { return _o.isContentEditableFalse(e) && !_o.isBogusAll(e) },
        Uh = Vh(!0, Ih),
        jh = Vh(!1, Ih),
        qh = Vh(!0, _o.isTable),
        $h = Vh(!1, _o.isTable),
        Wh = Vh(!0, Fh),
        Kh = Vh(!1, Fh),
        Yh = _o.isContentEditableTrue,
        Gh = _o.isContentEditableFalse,
        Jh = function(e, t) { for (var n = e.getBody(); t && t !== n;) { if (Yh(t) || Gh(t)) return t;
                t = t.parentNode } return null },
        Qh = function(m) { var g, a = m.getBody(),
                o = As(m.getBody(), function(e) { return m.dom.isBlock(e) }, function() { return kf(m) }),
                p = "sel-" + m.dom.uniqueId(),
                u = function(e) { e && m.selection.setRng(e) },
                s = function() { return m.selection.getRng() },
                v = function(e, t, n, r) { return void 0 === r && (r = !0), m.fire("ShowCaret", { target: t, direction: e, before: n }).isDefaultPrevented() ? null : (r && m.selection.scrollIntoView(t, -1 === e), o.show(n, t)) },
                y = function(e, t) { return t = Ys(e, a, t), -1 === e ? $u.fromRangeStart(t) : $u.fromRangeEnd(t) },
                t = function(e) { return ja(e) || Ya(e) || Ga(e) },
                b = function(e) { return t(e.startContainer) || t(e.endContainer) },
                l = function(e, t) { var n, r, o, i, a, u, s, l, c, f, d = m.$,
                        h = m.dom; if (!e) return null; if (e.collapsed) { if (!b(e))
                            if (!1 === t) { if (l = y(-1, e), Rs(l.getNode(!0))) return v(-1, l.getNode(!0), !1, !1); if (Rs(l.getNode())) return v(-1, l.getNode(), !l.isAtEnd(), !1) } else { if (l = y(1, e), Rs(l.getNode())) return v(1, l.getNode(), !l.isAtEnd(), !1); if (Rs(l.getNode(!0))) return v(1, l.getNode(!0), !1, !1) }
                        return null } return i = e.startContainer, a = e.startOffset, u = e.endOffset, 3 === i.nodeType && 0 === a && Gh(i.parentNode) && (i = i.parentNode, a = h.nodeIndex(i), i = i.parentNode), 1 !== i.nodeType ? null : (u === a + 1 && (n = i.childNodes[a]), Gh(n) ? (c = f = n.cloneNode(!0), (s = m.fire("ObjectSelected", { target: n, targetClone: c })).isDefaultPrevented() ? null : (r = wa(yr.fromDom(m.getBody()), "#" + p).fold(function() { return d([]) }, function(e) { return d([e.dom()]) }), c = s.targetClone, 0 === r.length && (r = d('<div data-mce-bogus="all" class="mce-offscreen-selection"></div>').attr("id", p)).appendTo(m.getBody()), e = m.dom.createRng(), c === f && Fe.ie ? (r.empty().append('<p style="font-size: 0" data-mce-bogus="all">\xa0</p>').append(c), e.setStartAfter(r[0].firstChild.firstChild), e.setEndAfter(c)) : (r.empty().append("\xa0").append(c).append("\xa0"), e.setStart(r[0].firstChild, 1), e.setEnd(r[0].lastChild, 0)), r.css({ top: h.getPos(n, m.getBody()).y }), r[0].focus(), (o = m.selection.getSel()).removeAllRanges(), o.addRange(e), F(ga(yr.fromDom(m.getBody()), "*[data-mce-selected]"), function(e) { Lr(e, "data-mce-selected") }), n.setAttribute("data-mce-selected", "1"), g = n, C(), e)) : null) },
                c = function() { g && (g.removeAttribute("data-mce-selected"), wa(yr.fromDom(m.getBody()), "#" + p).each(ra), g = null), wa(yr.fromDom(m.getBody()), "#" + p).each(ra), g = null },
                C = function() { o.hide() }; return Fe.ceFalse && function() { m.on("mouseup", function(e) { var t = s();
                    t.collapsed && id(m, e.clientX, e.clientY) && u(Th(m, t, !1)) }), m.on("click", function(e) { var t;
                    (t = Jh(m, e.target)) && (Gh(t) && (e.preventDefault(), m.focus()), Yh(t) && m.dom.isChildOf(t, m.selection.getNode()) && c()) }), m.on("blur NewBlock", function() { c() }), m.on("ResizeWindow FullscreenStateChanged", function() { return o.reposition() }); var n, r, i = function(e, t) { var n, r, o = m.dom.getParent(e, m.dom.isBlock),
                        i = m.dom.getParent(t, m.dom.isBlock); return !(!o || !m.dom.isChildOf(o, i) || !1 !== Gh(Jh(m, o))) || o && (n = o, r = i, !(m.dom.getParent(n, m.dom.isBlock) === m.dom.getParent(r, m.dom.isBlock))) && function(e) { var t = fl(e); if (!e.firstChild) return !1; var n = $u.before(e.firstChild),
                            r = t.next(n); return r && !Wh(r) && !Kh(r) }(o) };
                r = !1, (n = m).on("touchstart", function() { r = !1 }), n.on("touchmove", function() { r = !0 }), n.on("touchend", function(e) { var t = Jh(n, e.target);
                    Gh(t) && (r || (e.preventDefault(), l(kh(n, t)))) }), m.on("mousedown", function(e) { var t, n = e.target; if ((n === a || "HTML" === n.nodeName || m.dom.isChildOf(n, a)) && !1 !== id(m, e.clientX, e.clientY))
                        if (t = Jh(m, n)) Gh(t) ? (e.preventDefault(), l(kh(m, t))) : (c(), Yh(t) && e.shiftKey || zh(e.clientX, e.clientY, m.selection.getRng()) || (C(), m.selection.placeCaretAt(e.clientX, e.clientY)));
                        else if (!1 === Rs(n)) { c(), C(); var r = xh(a, e.clientX, e.clientY); if (r && !i(e.target, r.node)) { e.preventDefault(); var o = v(1, r.node, r.before, !1);
                            m.getBody().focus(), u(o) } } }), m.on("keypress", function(e) { Rh.modifierPressed(e) || (e.keyCode, Gh(m.selection.getNode()) && e.preventDefault()) }), m.on("GetSelectionRange", function(e) { var t = e.range; if (g) { if (!g.parentNode) return void(g = null);
                        (t = t.cloneRange()).selectNode(g), e.range = t } }), m.on("SetSelectionRange", function(e) { var t;
                    (t = l(e.range, e.forward)) && (e.range = t) }), m.on("AfterSetSelectionRange", function(e) { var t, n = e.range;
                    b(n) || "mcepastebin" === n.startContainer.parentNode.id || C(), t = n.startContainer.parentNode, m.dom.hasClass(t, "mce-offscreen-selection") || c() }), m.on("copy", function(e) { var t, n = e.clipboardData; if (!e.isDefaultPrevented() && e.clipboardData && !Fe.ie) { var r = (t = m.dom.get(p)) ? t.getElementsByTagName("*")[0] : t;
                        r && (e.preventDefault(), n.clearData(), n.setData("text/html", r.outerHTML), n.setData("text/plain", r.outerText)) } }), ih(m), Mh(m) }(), { showCaret: v, showBlockCaretContainer: function(e) { e.hasAttribute("data-mce-caret") && (Ja(e), u(s()), m.selection.scrollIntoView(e[0])) }, hideFakeCaret: C, destroy: function() { o.destroy(), g = null } } },
        Zh = 0,
        em = 2,
        tm = 1,
        nm = function(m, g) { var e = m.length + g.length + 2,
                p = new Array(e),
                v = new Array(e),
                l = function(e, t, n, r, o) { var i = c(e, t, n, r); if (null === i || i.start === t && i.diag === t - r || i.end === e && i.diag === e - n)
                        for (var a = e, u = n; a < t || u < r;) a < t && u < r && m[a] === g[u] ? (o.push([0, m[a]]), ++a, ++u) : r - n < t - e ? (o.push([2, m[a]]), ++a) : (o.push([1, g[u]]), ++u);
                    else { l(e, i.start, n, i.start - i.diag, o); for (var s = i.start; s < i.end; ++s) o.push([0, m[s]]);
                        l(i.end, t, i.end - i.diag, r, o) } },
                y = function(e, t, n, r) { for (var o = e; o - t < r && o < n && m[o] === g[o - t];) ++o; return { start: e, end: o, diag: t } },
                c = function(e, t, n, r) { var o = t - e,
                        i = r - n; if (0 === o || 0 === i) return null; var a, u, s, l, c, f = o - i,
                        d = i + o,
                        h = (d % 2 == 0 ? d : d + 1) / 2; for (p[1 + h] = e, v[1 + h] = t + 1, a = 0; a <= h; ++a) { for (u = -a; u <= a; u += 2) { for (s = u + h, u === -a || u !== a && p[s - 1] < p[s + 1] ? p[s] = p[s + 1] : p[s] = p[s - 1] + 1, c = (l = p[s]) - e + n - u; l < t && c < r && m[l] === g[c];) p[s] = ++l, ++c; if (f % 2 != 0 && f - a <= u && u <= f + a && v[s - f] <= p[s]) return y(v[s - f], u + e - n, t, r) } for (u = f - a; u <= f + a; u += 2) { for (s = u + h - f, u === f - a || u !== f + a && v[s + 1] <= v[s - 1] ? v[s] = v[s + 1] - 1 : v[s] = v[s - 1], c = (l = v[s] - 1) - e + n - u; e <= l && n <= c && m[l] === g[c];) v[s] = l--, c--; if (f % 2 == 0 && -a <= u && u <= a && v[s] <= p[s + f]) return y(v[s], u + e - n, t, r) } } },
                t = []; return l(0, m.length, 0, g.length, t), t },
        rm = function(e) { return _o.isElement(e) ? e.outerHTML : _o.isText(e) ? ci.encodeRaw(e.data, !1) : _o.isComment(e) ? "\x3c!--" + e.data + "--\x3e" : "" },
        om = function(e, t, n) { var r = function(e) { var t, n, r; for (r = j.document.createElement("div"), t = j.document.createDocumentFragment(), e && (r.innerHTML = e); n = r.firstChild;) t.appendChild(n); return t }(t); if (e.hasChildNodes() && n < e.childNodes.length) { var o = e.childNodes[n];
                o.parentNode.insertBefore(r, o) } else e.appendChild(r) },
        im = function(e) { return G(X(de(e.childNodes), rm), function(e) { return 0 < e.length }) },
        am = function(e, t) { var n, r, o, i = X(de(t.childNodes), rm); return n = nm(i, e), r = t, o = 0, F(n, function(e) { e[0] === Zh ? o++ : e[0] === tm ? (om(r, e[1], o), o++) : e[0] === em && function(e, t) { if (e.hasChildNodes() && t < e.childNodes.length) { var n = e.childNodes[t];
                        n.parentNode.removeChild(n) } }(r, o) }), t },
        um = qi(T.none()),
        sm = function(e) { return { type: "fragmented", fragments: e, content: "", bookmark: null, beforeBookmark: null } },
        lm = function(e) { return { type: "complete", fragments: null, content: e, bookmark: null, beforeBookmark: null } },
        cm = function(e) { return "fragmented" === e.type ? e.fragments.join("") : e.content },
        fm = function(e) { var t = yr.fromTag("body", um.get().getOrThunk(function() { var e = j.document.implementation.createHTMLDocument("undo"); return um.set(T.some(e)), e })); return Oa(t, cm(e)), F(ga(t, "*[data-mce-bogus]"), oa), t.dom().innerHTML },
        dm = function(n) { var e, t, r; return e = im(n.getBody()), -1 !== (t = (r = oe(e, function(e) { var t = hc.trimInternal(n.serializer, e); return 0 < t.length ? [t] : [] })).join("")).indexOf("</iframe>") ? sm(r) : lm(t) },
        hm = function(e, t, n) { "fragmented" === t.type ? am(t.fragments, e.getBody()) : e.setContent(t.content, { format: "raw" }), e.selection.moveToBookmark(n ? t.beforeBookmark : t.bookmark) },
        mm = function(e, t) { return !(!e || !t) && (r = t, cm(e) === cm(r) || (n = t, fm(e) === fm(n))); var n, r },
        gm = function(u) { var s, r, o = this,
                l = 0,
                c = [],
                t = 0,
                f = function() { return 0 === t },
                i = function(e) { f() && (o.typing = e) },
                d = function(e) { u.setDirty(e) },
                a = function(e) { i(!1), o.add({}, e) },
                n = function() { o.typing && (i(!1), o.add()) }; return u.on("init", function() { o.add() }), u.on("BeforeExecCommand", function(e) { var t = e.command; "Undo" !== t && "Redo" !== t && "mceRepaint" !== t && (n(), o.beforeChange()) }), u.on("ExecCommand", function(e) { var t = e.command; "Undo" !== t && "Redo" !== t && "mceRepaint" !== t && a(e) }), u.on("ObjectResizeStart cut", function() { o.beforeChange() }), u.on("SaveContent ObjectResized blur", a), u.on("dragend", a), u.on("keyup", function(e) { var t = e.keyCode;
                e.isDefaultPrevented() || ((33 <= t && t <= 36 || 37 <= t && t <= 40 || 45 === t || e.ctrlKey) && (a(), u.nodeChanged()), 46 !== t && 8 !== t || u.nodeChanged(), r && o.typing && !1 === mm(dm(u), c[0]) && (!1 === u.isDirty() && (d(!0), u.fire("change", { level: c[0], lastLevel: null })), u.fire("TypingUndo"), r = !1, u.nodeChanged())) }), u.on("keydown", function(e) { var t = e.keyCode; if (!e.isDefaultPrevented())
                    if (33 <= t && t <= 36 || 37 <= t && t <= 40 || 45 === t) o.typing && a(e);
                    else { var n = e.ctrlKey && !e.altKey || e.metaKey;!(t < 16 || 20 < t) || 224 === t || 91 === t || o.typing || n || (o.beforeChange(), i(!0), o.add({}, e), r = !0) } }), u.on("mousedown", function(e) { o.typing && a(e) }), u.on("input", function(e) { var t;
                e.inputType && ("insertReplacementText" === e.inputType || "insertText" === (t = e).inputType && null === t.data) && a(e) }), u.addShortcut("meta+z", "", "Undo"), u.addShortcut("meta+y,meta+shift+z", "", "Redo"), u.on("AddUndo Undo Redo ClearUndos", function(e) { e.isDefaultPrevented() || u.nodeChanged() }), o = { data: c, typing: !1, beforeChange: function() { f() && (s = ds.getUndoBookmark(u.selection)) }, add: function(e, t) { var n, r, o, i = u.settings; if (o = dm(u), e = e || {}, e = un.extend(e, o), !1 === f() || u.removed) return null; if (r = c[l], u.fire("BeforeAddUndo", { level: e, lastLevel: r, originalEvent: t }).isDefaultPrevented()) return null; if (r && mm(r, e)) return null; if (c[l] && (c[l].beforeBookmark = s), i.custom_undo_redo_levels && c.length > i.custom_undo_redo_levels) { for (n = 0; n < c.length - 1; n++) c[n] = c[n + 1];
                        c.length--, l = c.length }
                    e.bookmark = ds.getUndoBookmark(u.selection), l < c.length - 1 && (c.length = l + 1), c.push(e), l = c.length - 1; var a = { level: e, lastLevel: r, originalEvent: t }; return u.fire("AddUndo", a), 0 < l && (d(!0), u.fire("change", a)), e }, undo: function() { var e; return o.typing && (o.add(), o.typing = !1, i(!1)), 0 < l && (e = c[--l], hm(u, e, !0), d(!0), u.fire("Undo", { level: e })), e }, redo: function() { var e; return l < c.length - 1 && (e = c[++l], hm(u, e, !1), d(!0), u.fire("Redo", { level: e })), e }, clear: function() { c = [], l = 0, o.typing = !1, o.data = c, u.fire("ClearUndos") }, reset: function() { o.clear(), o.add() }, hasUndo: function() { return 0 < l || o.typing && c[0] && !mm(dm(u), c[0]) }, hasRedo: function() { return l < c.length - 1 && !o.typing }, transact: function(e) { return n(), o.beforeChange(), o.ignore(e), o.add() }, ignore: function(e) { try { t++, e() } finally { t-- } }, extra: function(e, t) { var n, r;
                    o.transact(e) && (r = c[l].bookmark, n = c[l - 1], hm(u, n, !0), o.transact(t) && (c[l - 1].beforeBookmark = r)) } } },
        pm = function(e) { var t = ga(e, "br"),
                n = G(function(e) { for (var t = [], n = e.dom(); n;) t.push(yr.fromDom(n)), n = n.lastChild; return t }(e).slice(-1), Uo);
            t.length === n.length && F(n, ra) },
        vm = function(e) { na(e), ea(e, yr.fromHtml('<br data-mce-bogus="1">')) },
        ym = function(n) { co(n).each(function(t) { ro(t).each(function(e) { Io(n) && Uo(t) && Io(e) && ra(t) }) }) },
        bm = _l.isEq,
        Cm = function(e, t, n) { var r = e.formatter.get(n); if (r)
                for (var o = 0; o < r.length; o++)
                    if (!1 === r[o].inherit && e.dom.is(t, r[o].selector)) return !0;
            return !1 },
        wm = function(t, e, n, r) { var o = t.dom.getRoot(); return e !== o && (e = t.dom.getParent(e, function(e) { return !!Cm(t, e, n) || e.parentNode === o || !!Nm(t, e, n, r, !0) }), Nm(t, e, n, r)) },
        xm = function(e, t, n) { return !!bm(t, n.inline) || !!bm(t, n.block) || (n.selector ? 1 === t.nodeType && e.is(t, n.selector) : void 0) },
        zm = function(e, t, n, r, o, i) { var a, u, s, l = n[r]; if (n.onmatch) return n.onmatch(t, n, r); if (l)
                if ("undefined" == typeof l.length) { for (a in l)
                        if (l.hasOwnProperty(a)) { if (u = "attributes" === r ? e.getAttrib(t, a) : _l.getStyle(e, t, a), o && !u && !n.exact) return; if ((!o || n.exact) && !bm(u, _l.normalizeStyleValue(e, _l.replaceVars(l[a], i), a))) return } } else
                    for (s = 0; s < l.length; s++)
                        if ("attributes" === r ? e.getAttrib(t, l[s]) : _l.getStyle(e, t, l[s])) return n;
            return n },
        Nm = function(e, t, n, r, o) { var i, a, u, s, l = e.formatter.get(n),
                c = e.dom; if (l && t)
                for (a = 0; a < l.length; a++)
                    if (i = l[a], xm(e.dom, t, i) && zm(c, t, i, "attributes", o, r) && zm(c, t, i, "styles", o, r)) { if (s = i.classes)
                            for (u = 0; u < s.length; u++)
                                if (!e.dom.hasClass(t, s[u])) return;
                        return i } },
        Em = { matchNode: Nm, matchName: xm, match: function(e, t, n, r) { var o; return r ? wm(e, r, t, n) : (r = e.selection.getNode(), !!wm(e, r, t, n) || !((o = e.selection.getStart()) === r || !wm(e, o, t, n))) }, matchAll: function(r, o, i) { var e, a = [],
                    u = {}; return e = r.selection.getStart(), r.dom.getParent(e, function(e) { var t, n; for (t = 0; t < o.length; t++) n = o[t], !u[n] && Nm(r, e, n, i) && (u[n] = !0, a.push(n)) }, r.dom.getRoot()), a }, canApply: function(e, t) { var n, r, o, i, a, u = e.formatter.get(t),
                    s = e.dom; if (u)
                    for (n = e.selection.getStart(), r = _l.getParents(s, n), i = u.length - 1; 0 <= i; i--) { if (!(a = u[i].selector) || u[i].defaultBlock) return !0; for (o = r.length - 1; 0 <= o; o--)
                            if (s.is(r[o], a)) return !0 }
                return !1 }, matchesUnInheritedFormatSelector: Cm },
        Sm = function(e, t) { return e.splitText(t) },
        km = function(e) { var t = e.startContainer,
                n = e.startOffset,
                r = e.endContainer,
                o = e.endOffset; return t === r && _o.isText(t) ? 0 < n && n < t.nodeValue.length && (t = (r = Sm(t, n)).previousSibling, n < o ? (t = r = Sm(r, o -= n).previousSibling, o = r.nodeValue.length, n = 0) : o = 0) : (_o.isText(t) && 0 < n && n < t.nodeValue.length && (t = Sm(t, n), n = 0), _o.isText(r) && 0 < o && o < r.nodeValue.length && (o = (r = Sm(r, o).previousSibling).nodeValue.length)), { startContainer: t, startOffset: n, endContainer: r, endOffset: o } },
        Tm = function(e, t, n) { if (0 !== n) { var r, o, i, a = e.data.slice(t, t + n),
                    u = t + n >= e.data.length,
                    s = 0 === t;
                e.replaceData(t, n, (o = s, i = u, Q((r = a).split(""), function(e, t) { return -1 !== " \f\n\r\t\x0B".indexOf(t) || "\xa0" === t ? e.previousCharIsSpace || "" === e.str && o || e.str.length === r.length - 1 && i ? { previousCharIsSpace: !1, str: e.str + "\xa0" } : { previousCharIsSpace: !0, str: e.str + " " } : { previousCharIsSpace: !1, str: e.str + t } }, { previousCharIsSpace: !1, str: "" }).str)) } },
        Am = function(e, t) { var n, r = e.data.slice(t),
                o = r.length - (n = r, n.replace(/^\s+/g, "")).length; return Tm(e, t, o) },
        Mm = function(e, t) { var n, r, o, i = yr.fromDom(e),
                a = yr.fromDom(t); return n = a, r = "pre,code", o = d(Qr, i), Ca(n, r, o).isSome() },
        Rm = function(e, t) { return uu(t) && !1 === (r = e, o = t, _o.isText(o) && /^[ \t\r\n]*$/.test(o.data) && !1 === Mm(r, o)) || (n = t, _o.isElement(n) && "A" === n.nodeName && n.hasAttribute("name")) || Dm(t); var n, r, o },
        Dm = _o.hasAttribute("data-mce-bookmark"),
        Bm = _o.hasAttribute("data-mce-bogus"),
        Om = _o.hasAttributeValue("data-mce-bogus", "all"),
        Hm = function(e) { return function(e) { var t, n = 0; if (Rm(e, e)) return !1; if (!(t = e.firstChild)) return !0; var r = new Po(t, e);
                do { if (Om(t)) t = r.next(!0);
                    else if (Bm(t)) t = r.next();
                    else if (_o.isBr(t)) n++, t = r.next();
                    else { if (Rm(e, t)) return !1;
                        t = r.next() } } while (t); return n <= 1 }(e.dom()) },
        _m = function(e, t) { return r = e, o = (n = t).container(), i = n.offset(), !1 === $u.isTextPosition(n) && o === r.parentNode && i > $u.before(r).offset() ? $u(t.container(), t.offset() - 1) : t; var n, r, o, i },
        Pm = function(e) { return uu(e.previousSibling) ? T.some((t = e.previousSibling, _o.isText(t) ? $u(t, t.data.length) : $u.after(t))) : e.previousSibling ? xl.lastPositionIn(e.previousSibling) : T.none(); var t },
        Lm = function(e) { return uu(e.nextSibling) ? T.some((t = e.nextSibling, _o.isText(t) ? $u(t, 0) : $u.before(t))) : e.nextSibling ? xl.firstPositionIn(e.nextSibling) : T.none(); var t },
        Vm = function(r, o) { return Pm(o).orThunk(function() { return Lm(o) }).orThunk(function() { return e = r, t = o, n = $u.before(t.previousSibling ? t.previousSibling : t.parentNode), xl.prevPosition(e, n).fold(function() { return xl.nextPosition(e, $u.after(t)) }, T.some); var e, t, n }) },
        Im = function(n, r) { return Lm(r).orThunk(function() { return Pm(r) }).orThunk(function() { return e = n, t = r, xl.nextPosition(e, $u.after(t)).fold(function() { return xl.prevPosition(e, $u.before(t)) }, T.some); var e, t }) },
        Fm = function(e, t, n) { return (r = e, o = t, i = n, r ? Im(o, i) : Vm(o, i)).map(d(_m, n)); var r, o, i },
        Um = function(t, n, e) { e.fold(function() { t.focus() }, function(e) { t.selection.setRng(e.toRange(), n) }) },
        jm = function(e, t) { return t && e.schema.getBlockElements().hasOwnProperty(xr(t)) },
        qm = function(e) { if (Hm(e)) { var t = yr.fromHtml('<br data-mce-bogus="1">'); return na(e), ea(e, t), T.some($u.before(t.dom())) } return T.none() },
        $m = function(e, t, c) { var n = ro(e).filter(function(e) { return _o.isText(e.dom()) }),
                r = oo(e).filter(function(e) { return _o.isText(e.dom()) }); return ra(e), Cu([n, r, t], function(e, t, n) { var r, o, i, a, u = e.dom(),
                    s = t.dom(),
                    l = u.data.length; return o = s, i = c, a = lr((r = u).data).length, r.appendData(o.data), ra(yr.fromDom(o)), i && Am(r, a), n.container() === s ? $u(u, l) : n }).orThunk(function() { return c && (n.each(function(e) { return t = e.dom(), n = e.dom().length, r = t.data.slice(0, n), o = r.length - lr(r).length, Tm(t, n - o, o); var t, n, r, o }), r.each(function(e) { return Am(e.dom(), 0) })), t }) },
        Wm = function(t, n, e, r) { void 0 === r && (r = !0); var o, i, a = Fm(n, t.getBody(), e.dom()),
                u = ya(e, d(jm, t), (o = t.getBody(), function(e) { return e.dom() === o })),
                s = $m(e, a, (i = e, Br(t.schema.getTextInlineElements(), xr(i))));
            t.dom.isEmpty(t.getBody()) ? (t.setContent(""), t.selection.setCursorLocation()) : u.bind(qm).fold(function() { r && Um(t, n, s) }, function(e) { r && Um(t, n, T.some(e)) }) },
        Km = Pa,
        Xm = "_mce_caret",
        Ym = function(e) { return 0 < function(e) { for (var t = []; e;) { if (3 === e.nodeType && e.nodeValue !== Km || 1 < e.childNodes.length) return [];
                    1 === e.nodeType && t.push(e), e = e.firstChild } return t }(e).length },
        Gm = function(e) { if (e) { var t = new Po(e, e); for (e = t.current(); e; e = t.next())
                    if (3 === e.nodeType) return e } return null },
        Jm = function(e) { var t = yr.fromTag("span"); return _r(t, { id: Xm, "data-mce-bogus": "1", "data-mce-type": "format-caret" }), e && ea(t, yr.fromText(Km)), t },
        Qm = function(e, t, n) { void 0 === n && (n = !0); var r, o = e.dom,
                i = e.selection; if (Ym(t)) Wm(e, !1, yr.fromDom(t), n);
            else { var a = i.getRng(),
                    u = o.getParent(t, o.isBlock),
                    s = ((r = Gm(t)) && r.nodeValue.charAt(0) === Km && r.deleteData(0, 1), r);
                a.startContainer === s && 0 < a.startOffset && a.setStart(s, a.startOffset - 1), a.endContainer === s && 0 < a.endOffset && a.setEnd(s, a.endOffset - 1), o.remove(t, !0), u && o.isEmpty(u) && vm(yr.fromDom(u)), i.setRng(a) } },
        Zm = function(e, t, n) { void 0 === n && (n = !0); var r = e.dom,
                o = e.selection; if (t) Qm(e, t, n);
            else if (!(t = gs(e.getBody(), o.getStart())))
                for (; t = r.get(Xm);) Qm(e, t, !1) },
        eg = function(e, t, n) { var r = e.dom,
                o = r.getParent(n, d(_l.isTextBlock, e));
            o && r.isEmpty(o) ? n.parentNode.replaceChild(t, n) : (pm(yr.fromDom(n)), r.isEmpty(n) ? n.parentNode.replaceChild(t, n) : r.insertAfter(t, n)) },
        tg = function(e, t) { return e.appendChild(t), t },
        ng = function(e, t) { var n = J(e, function(e, t) { return tg(e, t.cloneNode(!1)) }, t); return tg(n, n.ownerDocument.createTextNode(Km)) },
        rg = function(i) { i.on("mouseup keydown", function(e) { var t, n, r, o;
                t = i, n = e.keyCode, r = t.selection, o = t.getBody(), Zm(t, null, !1), 8 !== n && 46 !== n || !r.isCollapsed() || r.getStart().innerHTML !== Km || Zm(t, gs(o, r.getStart())), 37 !== n && 39 !== n || Zm(t, gs(o, r.getStart())) }) },
        og = function(e, t) { return e.schema.getTextInlineElements().hasOwnProperty(xr(t)) && !ms(t.dom()) && !_o.isBogus(t.dom()) },
        ig = {},
        ag = tn.filter,
        ug = tn.each;
    lh = function(e) { var t, n, r = e.selection.getRng();
        t = _o.matchNodeNames("pre"), r.collapsed || (n = e.selection.getSelectedBlocks(), ug(ag(ag(n, t), function(e) { return t(e.previousSibling) && -1 !== tn.indexOf(n, e.previousSibling) }), function(e) { var t, n;
            t = e.previousSibling, Un(n = e).remove(), Un(t).append("<br><br>").append(n.childNodes) })) }, ig[sh = "pre"] || (ig[sh] = []), ig[sh].push(lh); var sg, lg = function(e, t) { ug(ig[e], function(e) { e(t) }) },
        cg = un.each,
        fg = function(o) { this.compare = function(e, t) { if (e.nodeName !== t.nodeName) return !1; var n = function(n) { var r = {}; return cg(o.getAttribs(n), function(e) { var t = e.nodeName.toLowerCase();
                            0 !== t.indexOf("_") && "style" !== t && 0 !== t.indexOf("data-") && (r[t] = o.getAttrib(n, t)) }), r },
                    r = function(e, t) { var n, r; for (r in e)
                            if (e.hasOwnProperty(r)) { if (void 0 === (n = t[r])) return !1; if (e[r] !== n) return !1;
                                delete t[r] }
                        for (r in t)
                            if (t.hasOwnProperty(r)) return !1;
                        return !0 }; return !(!r(n(e), n(t)) || !r(o.parseStyle(o.getAttrib(e, "style")), o.parseStyle(o.getAttrib(t, "style"))) || Dl(e) || Dl(t)) } },
        dg = /^(src|href|style)$/,
        hg = un.each,
        mg = _l.isEq,
        gg = function(e, t, n) { return e.isChildOf(t, n) && t !== n && !e.isBlock(n) },
        pg = function(e, t, n) { var r, o, i; return r = t[n ? "startContainer" : "endContainer"], o = t[n ? "startOffset" : "endOffset"], _o.isElement(r) && (i = r.childNodes.length - 1, !n && o && o--, r = r.childNodes[i < o ? i : o]), _o.isText(r) && n && o >= r.nodeValue.length && (r = new Po(r, e.getBody()).next() || r), _o.isText(r) && !n && 0 === o && (r = new Po(r, e.getBody()).prev() || r), r },
        vg = function(e, t, n, r) { var o = e.create(n, r); return t.parentNode.insertBefore(o, t), o.appendChild(t), o },
        yg = function(e, t, n, r, o) { var i = yr.fromDom(t),
                a = yr.fromDom(e.create(r, o)),
                u = n ? ao(i) : io(i); return ta(a, u), n ? (Ji(i, a), Zi(a, i)) : (Qi(i, a), ea(a, i)), a.dom() },
        bg = function(e, t, n, r) { return !(t = _l.getNonWhiteSpaceSibling(t, n, r)) || "BR" === t.nodeName || e.isBlock(t) },
        Cg = function(e, n, r, o, i) { var t, a, u, s, l, c, f, d, h, m, g, p, v, y, b = e.dom; if (l = b, !(mg(c = o, (f = n).inline) || mg(c, f.block) || (f.selector ? _o.isElement(c) && l.is(c, f.selector) : void 0) || (s = o, n.links && "A" === s.tagName))) return !1; if ("all" !== n.remove)
                for (hg(n.styles, function(e, t) { e = _l.normalizeStyleValue(b, _l.replaceVars(e, r), t), "number" == typeof t && (t = e, i = 0), (n.remove_similar || !i || mg(_l.getStyle(b, i, t), e)) && b.setStyle(o, t, ""), u = 1 }), u && "" === b.getAttrib(o, "style") && (o.removeAttribute("style"), o.removeAttribute("data-mce-style")), hg(n.attributes, function(e, t) { var n; if (e = _l.replaceVars(e, r), "number" == typeof t && (t = e, i = 0), !i || mg(b.getAttrib(i, t), e)) { if ("class" === t && (e = b.getAttrib(o, t)) && (n = "", hg(e.split(/\s+/), function(e) { /mce\-\w+/.test(e) && (n += (n ? " " : "") + e) }), n)) return void b.setAttrib(o, t, n); "class" === t && o.removeAttribute("className"), dg.test(t) && o.removeAttribute("data-mce-" + t), o.removeAttribute(t) } }), hg(n.classes, function(e) { e = _l.replaceVars(e, r), i && !b.hasClass(i, e) || b.removeClass(o, e) }), a = b.getAttribs(o), t = 0; t < a.length; t++) { var C = a[t].nodeName; if (0 !== C.indexOf("_") && 0 !== C.indexOf("data-")) return !1 }
            return "none" !== n.remove ? (d = e, m = n, p = (h = o).parentNode, v = d.dom, y = xc(d), m.block && (y ? p === v.getRoot() && (m.list_block && mg(h, m.list_block) || hg(un.grep(h.childNodes), function(e) { _l.isValid(d, y, e.nodeName.toLowerCase()) ? g ? g.appendChild(e) : (g = vg(v, e, y), v.setAttribs(g, d.settings.forced_root_block_attrs)) : g = 0 })) : v.isBlock(h) && !v.isBlock(p) && (bg(v, h, !1) || bg(v, h.firstChild, !0, 1) || h.insertBefore(v.create("br"), h.firstChild), bg(v, h, !0) || bg(v, h.lastChild, !1, 1) || h.appendChild(v.create("br")))), m.selector && m.inline && !mg(m.inline, h) || v.remove(h, 1), !0) : void 0 },
        wg = Cg,
        xg = function(s, l, c, e, f) { var t, n, d = s.formatter.get(l),
                h = d[0],
                a = !0,
                u = s.dom,
                r = s.selection,
                i = function(e) { var n, t, r, o, i, a, u = (n = s, t = e, r = l, o = c, i = f, hg(_l.getParents(n.dom, t.parentNode).reverse(), function(e) { var t;
                        a || "_start" === e.id || "_end" === e.id || (t = Em.matchNode(n, e, r, o, i)) && !1 !== t.split && (a = e) }), a); return function(e, t, n, r, o, i, a, u) { var s, l, c, f, d, h, m = e.dom; if (n) { for (h = n.parentNode, s = r.parentNode; s && s !== h; s = s.parentNode) { for (l = m.clone(s, !1), d = 0; d < t.length; d++)
                                    if (Cg(e, t[d], u, l, l)) { l = 0; break }
                                l && (c && l.appendChild(c), f || (f = l), c = l) }!i || a.mixed && m.isBlock(n) || (r = m.split(n, r)), c && (o.parentNode.insertBefore(c, o), f.appendChild(o)) } return r }(s, d, u, e, e, !0, h, c) },
                m = function(e) { var t, n, r, o, i; if (_o.isElement(e) && u.getContentEditable(e) && (o = a, a = "true" === u.getContentEditable(e), i = !0), t = un.grep(e.childNodes), a && !i)
                        for (n = 0, r = d.length; n < r && !Cg(s, d[n], c, e, e); n++); if (h.deep && t.length) { for (n = 0, r = t.length; n < r; n++) m(t[n]);
                        i && (a = o) } },
                g = function(e) { var t, n = u.get(e ? "_start" : "_end"),
                        r = n[e ? "firstChild" : "lastChild"]; return Dl(t = r) && _o.isElement(t) && ("_start" === t.id || "_end" === t.id) && (r = r[e ? "firstChild" : "lastChild"]), _o.isText(r) && 0 === r.data.length && (r = e ? n.previousSibling || n.nextSibling : n.nextSibling || n.previousSibling), u.remove(n, !0), r },
                o = function(e) { var t, n, r = e.commonAncestorContainer; if (e = Xl(s, e, d, !0), h.split) { if (e = km(e), (t = pg(s, e, !0)) !== (n = pg(s, e))) { if (/^(TR|TH|TD)$/.test(t.nodeName) && t.firstChild && (t = "TR" === t.nodeName ? t.firstChild.firstChild || t : t.firstChild || t), r && /^T(HEAD|BODY|FOOT|R)$/.test(r.nodeName) && /^(TH|TD)$/.test(n.nodeName) && n.firstChild && (n = n.firstChild || n), gg(u, t, n)) { var o = T.from(t.firstChild).getOr(t); return i(yg(u, o, !0, "span", { id: "_start", "data-mce-type": "bookmark" })), void g(!0) } if (gg(u, n, t)) return o = T.from(n.lastChild).getOr(n), i(yg(u, o, !1, "span", { id: "_end", "data-mce-type": "bookmark" })), void g(!1);
                            t = vg(u, t, "span", { id: "_start", "data-mce-type": "bookmark" }), n = vg(u, n, "span", { id: "_end", "data-mce-type": "bookmark" }), i(t), i(n), t = g(!0), n = g() } else t = n = i(t);
                        e.startContainer = t.parentNode ? t.parentNode : t, e.startOffset = u.nodeIndex(t), e.endContainer = n.parentNode ? n.parentNode : n, e.endOffset = u.nodeIndex(n) + 1 }
                    Gl(u, e, function(e) { hg(e, function(e) { m(e), _o.isElement(e) && "underline" === s.dom.getStyle(e, "text-decoration") && e.parentNode && "underline" === _l.getTextDecoration(u, e.parentNode) && Cg(s, { deep: !1, exact: !0, inline: "span", styles: { textDecoration: "underline" } }, null, e) }) }) }; if (e) e.nodeType ? ((n = u.createRng()).setStartBefore(e), n.setEndAfter(e), o(n)) : o(e);
            else if ("false" !== u.getContentEditable(r.getNode())) r.isCollapsed() && h.inline && !u.select("td[data-mce-selected],th[data-mce-selected]").length ? function(e, t, n, r) { var o, i, a, u, s, l, c, f = e.dom,
                    d = e.selection,
                    h = [],
                    m = d.getRng(); for (o = m.startContainer, i = m.startOffset, 3 === (s = o).nodeType && (i !== o.nodeValue.length && (u = !0), s = s.parentNode); s;) { if (Em.matchNode(e, s, t, n, r)) { l = s; break }
                    s.nextSibling && (u = !0), h.push(s), s = s.parentNode } if (l)
                    if (u) { a = d.getBookmark(), m.collapse(!0); var g = Xl(e, m, e.formatter.get(t), !0);
                        g = km(g), e.formatter.remove(t, n, g), d.moveToBookmark(a) } else { c = gs(e.getBody(), l); var p = Jm(!1).dom(),
                            v = ng(h, p);
                        eg(e, p, c || l), Qm(e, c, !1), d.setCursorLocation(v, 1), f.isEmpty(l) && f.remove(l) } }(s, l, c, f) : (t = ds.getPersistentBookmark(s.selection, !0), o(r.getRng()), r.moveToBookmark(t), h.inline && Em.match(s, l, c, r.getStart()) && _l.moveStart(u, r, r.getRng()), s.nodeChanged());
            else { e = r.getNode(); for (var p = 0, v = d.length; p < v && (!d[p].ceFalseOverride || !Cg(s, d[p], c, e, e)); p++); } },
        zg = un.each,
        Ng = function(e) { return e && 1 === e.nodeType && !Dl(e) && !ms(e) && !_o.isBogus(e) },
        Eg = function(e, t) { var n; for (n = e; n; n = n[t]) { if (3 === n.nodeType && 0 !== n.nodeValue.length) return e; if (1 === n.nodeType && !Dl(n)) return n } return e },
        Sg = function(e, t, n) { var r, o, i = new fg(e); if (t && n && (t = Eg(t, "previousSibling"), n = Eg(n, "nextSibling"), i.compare(t, n))) { for (r = t.nextSibling; r && r !== n;) r = (o = r).nextSibling, t.appendChild(o); return e.remove(n), un.each(un.grep(n.childNodes), function(e) { t.appendChild(e) }), t } return n },
        kg = function(e, t, n) { zg(e.childNodes, function(e) { Ng(e) && (t(e) && n(e), e.hasChildNodes() && kg(e, t, n)) }) },
        Tg = function(n, e) { return d(function(e, t) { return !(!t || !_l.getStyle(n, t, e)) }, e) },
        Ag = function(r, e, t) { return d(function(e, t, n) { r.setStyle(n, e, t), "" === n.getAttribute("style") && n.removeAttribute("style"), Mg(r, n) }, e, t) },
        Mg = function(e, t) { "SPAN" === t.nodeName && 0 === e.getAttribs(t).length && e.remove(t, !0) },
        Rg = function(e, t) { var n;
            1 === t.nodeType && t.parentNode && 1 === t.parentNode.nodeType && (n = _l.getTextDecoration(e, t.parentNode), e.getStyle(t, "color") && n ? e.setStyle(t, "text-decoration", n) : e.getStyle(t, "text-decoration") === n && e.setStyle(t, "text-decoration", null)) },
        Dg = function(n, e, r, o) { zg(e, function(t) { zg(n.dom.select(t.inline, o), function(e) { Ng(e) && wg(n, t, r, e, t.exact ? e : null) }),
                    function(r, e, t) { if (e.clear_child_styles) { var n = e.links ? "*:not(a)" : "*";
                            zg(r.select(n, t), function(n) { Ng(n) && zg(e.styles, function(e, t) { r.setStyle(n, t, "") }) }) } }(n.dom, t, o) }) },
        Bg = function(e, t, n, r) {
            (t.styles.color || t.styles.textDecoration) && (un.walk(r, d(Rg, e), "childNodes"), Rg(e, r)) },
        Og = function(e, t, n, r) { t.styles && t.styles.backgroundColor && kg(r, Tg(e, "fontSize"), Ag(e, "backgroundColor", _l.replaceVars(t.styles.backgroundColor, n))) },
        Hg = function(e, t, n, r) { "sub" !== t.inline && "sup" !== t.inline || (kg(r, Tg(e, "fontSize"), Ag(e, "fontSize", "")), e.remove(e.select("sup" === t.inline ? "sub" : "sup", r), !0)) },
        _g = function(e, t, n, r) { r && !1 !== t.merge_siblings && (r = Sg(e, _l.getNonWhiteSpaceSibling(r), r), r = Sg(e, r, _l.getNonWhiteSpaceSibling(r, !0))) },
        Pg = function(t, n, r, o, i) { Em.matchNode(t, i.parentNode, r, o) && wg(t, n, o, i) || n.merge_with_parents && t.dom.getParent(i.parentNode, function(e) { if (Em.matchNode(t, e, r, o)) return wg(t, n, o, i), !0 }) },
        Lg = function(a) { var u = $u.fromRangeStart(a),
                s = $u.fromRangeEnd(a),
                l = a.commonAncestorContainer; return xl.fromPosition(!1, l, s).map(function(e) { return !js(u, s, l) && js(u, e, l) ? (t = u.container(), n = u.offset(), r = e.container(), o = e.offset(), (i = j.document.createRange()).setStart(t, n), i.setEnd(r, o), i) : a; var t, n, r, o, i }).getOr(a) },
        Vg = function(e) { return e.collapsed ? e : Lg(e) },
        Ig = un.each,
        Fg = function(m, g, p, r) { var e, t, v = m.formatter.get(g),
                y = v[0],
                o = !r && m.selection.isCollapsed(),
                i = m.dom,
                n = m.selection,
                b = function(n, e) { if (e = e || y, n) { if (e.onformat && e.onformat(n, e, p, r), Ig(e.styles, function(e, t) { i.setStyle(n, t, _l.replaceVars(e, p)) }), e.styles) { var t = i.getAttrib(n, "style");
                            t && n.setAttribute("data-mce-style", t) }
                        Ig(e.attributes, function(e, t) { i.setAttrib(n, t, _l.replaceVars(e, p)) }), Ig(e.classes, function(e) { e = _l.replaceVars(e, p), i.hasClass(n, e) || i.addClass(n, e) }) } },
                C = function(e, t) { var n = !1; return !!y.selector && (Ig(e, function(e) { if (!("collapsed" in e && e.collapsed !== o)) return i.is(t, e.selector) && !ms(t) ? (b(t, e), !(n = !0)) : void 0 }), n) },
                a = function(s, e, t, l) { var c, f, d = [],
                        h = !0;
                    c = y.inline || y.block, f = s.create(c), b(f), Gl(s, e, function(e) { var a, u = function(e) { var t, n, r, o; if (o = h, t = e.nodeName.toLowerCase(), n = e.parentNode.nodeName.toLowerCase(), 1 === e.nodeType && s.getContentEditable(e) && (o = h, h = "true" === s.getContentEditable(e), r = !0), _l.isEq(t, "br")) return a = 0, void(y.block && s.remove(e)); if (y.wrapper && Em.matchNode(m, e, g, p)) a = 0;
                            else { if (h && !r && y.block && !y.wrapper && _l.isTextBlock(m, t) && _l.isValid(m, n, c)) return e = s.rename(e, c), b(e), d.push(e), void(a = 0); if (y.selector) { var i = C(v, e); if (!y.inline || i) return void(a = 0) }!h || r || !_l.isValid(m, c, t) || !_l.isValid(m, n, c) || !l && 3 === e.nodeType && 1 === e.nodeValue.length && 65279 === e.nodeValue.charCodeAt(0) || ms(e) || y.inline && s.isBlock(e) ? (a = 0, Ig(un.grep(e.childNodes), u), r && (h = o), a = 0) : (a || (a = s.clone(f, !1), e.parentNode.insertBefore(a, e), d.push(a)), a.appendChild(e)) } };
                        Ig(e, u) }), !0 === y.links && Ig(d, function(e) { var t = function(e) { "A" === e.nodeName && b(e, y), Ig(un.grep(e.childNodes), t) };
                        t(e) }), Ig(d, function(e) { var t, n, r, o, i, a = function(e) { var n = !1; return Ig(e.childNodes, function(e) { if ((t = e) && 1 === t.nodeType && !Dl(t) && !ms(t) && !_o.isBogus(t)) return n = e, !1; var t }), n };
                        n = 0, Ig(e.childNodes, function(e) { _l.isWhiteSpaceNode(e) || Dl(e) || n++ }), t = n, !(1 < d.length) && s.isBlock(e) || 0 !== t ? (y.inline || y.wrapper) && (y.exact || 1 !== t || ((o = a(r = e)) && !Dl(o) && Em.matchName(s, o, y) && (i = s.clone(o, !1), b(i), s.replace(i, r, !0), s.remove(o, 1)), e = i || r), Dg(m, v, p, e), Pg(m, y, g, p, e), Og(s, y, p, e), Hg(s, y, p, e), _g(s, y, p, e)) : s.remove(e, 1) }) }; if ("false" !== i.getContentEditable(n.getNode())) { if (y) { if (r) r.nodeType ? C(v, r) || ((t = i.createRng()).setStartBefore(r), t.setEndAfter(r), a(i, Xl(m, t, v), 0, !0)) : a(i, r, 0, !0);
                    else if (o && y.inline && !i.select("td[data-mce-selected],th[data-mce-selected]").length) ! function(e, t, n) { var r, o, i, a, u, s, l = e.selection;
                        a = (r = l.getRng()).startOffset, s = r.startContainer.nodeValue, (o = gs(e.getBody(), l.getStart())) && (i = Gm(o)); var c, f, d = /[^\s\u00a0\u00ad\u200b\ufeff]/;
                        s && 0 < a && a < s.length && d.test(s.charAt(a)) && d.test(s.charAt(a - 1)) ? (u = l.getBookmark(), r.collapse(!0), r = Xl(e, r, e.formatter.get(t)), r = km(r), e.formatter.apply(t, n, r), l.moveToBookmark(u)) : (o && i.nodeValue === Km || (c = e.getDoc(), f = Jm(!0).dom(), i = (o = c.importNode(f, !0)).firstChild, r.insertNode(o), a = 1), e.formatter.apply(t, n, o), l.setCursorLocation(i, a)) }(m, g, p);
                    else { var u = m.selection.getNode();
                        m.settings.forced_root_block || !v[0].defaultBlock || i.getParent(u, i.isBlock) || Fg(m, v[0].defaultBlock), m.selection.setRng(Vg(m.selection.getRng())), e = ds.getPersistentBookmark(m.selection, !0), a(i, Xl(m, n.getRng(), v)), y.styles && Bg(i, y, p, u), n.moveToBookmark(e), _l.moveStart(i, n, n.getRng()), m.nodeChanged() }
                    lg(g, m) } } else { r = n.getNode(); for (var s = 0, l = v.length; s < l; s++)
                    if (v[s].ceFalseOverride && i.is(r, v[s].selector)) return void b(r, v[s]) } },
        Ug = { applyFormat: Fg },
        jg = function(r, e, t, n) { var o = Sr(t.get()),
                i = {},
                a = {},
                u = G(_l.getParents(r.dom, e), function(e) { return 1 === e.nodeType && !e.getAttribute("data-mce-bogus") });
            Tr(n, function(e, n) { un.each(u, function(t) { return r.formatter.matchNode(t, n, {}, e.similar) ? (-1 === o.indexOf(n) && (F(e.callbacks, function(e) { e(!0, { node: t, format: n, parents: u }) }), i[n] = e.callbacks), a[n] = e.callbacks, !1) : !Em.matchesUnInheritedFormatSelector(r, t, n) && void 0 }) }); var s = qg(t.get(), a, e, u);
            t.set(Fi({}, i, s)) },
        qg = function(e, n, r, o) { return Rr(e, function(e, t) { return !!Br(n, t) || (F(e, function(e) { e(!1, { node: r, format: t, parents: o }) }), !1) }).t },
        $g = function(e, o, i, a, t) { var n, r, u, s, l, c, f, d; return null === o.get() && (n = o, r = e, u = qi({}), n.set({}), r.on("NodeChange", function(e) { jg(r, e.element, u, n.get()) })), l = i, c = a, f = t, d = (s = o).get(), F(l.split(","), function(e) { d[e] || (d[e] = { similar: f, callbacks: [] }), d[e].callbacks.push(c) }), s.set(d), { unbind: function() { return t = i, n = a, r = (e = o).get(), F(t.split(","), function(e) { r[e].callbacks = G(r[e].callbacks, function(e) { return e !== n }), 0 === r[e].callbacks.length && delete r[e] }), void e.set(r); var e, t, n, r } } },
        Wg = function(r) { var t = { valigntop: [{ selector: "td,th", styles: { verticalAlign: "top" } }], valignmiddle: [{ selector: "td,th", styles: { verticalAlign: "middle" } }], valignbottom: [{ selector: "td,th", styles: { verticalAlign: "bottom" } }], alignleft: [{ selector: "figure.image", collapsed: !1, classes: "align-left", ceFalseOverride: !0, preview: "font-family font-size" }, { selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li", styles: { textAlign: "left" }, inherit: !1, preview: !1, defaultBlock: "div" }, { selector: "img,table", collapsed: !1, styles: { "float": "left" }, preview: "font-family font-size" }], aligncenter: [{ selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li", styles: { textAlign: "center" }, inherit: !1, preview: "font-family font-size", defaultBlock: "div" }, { selector: "figure.image", collapsed: !1, classes: "align-center", ceFalseOverride: !0, preview: "font-family font-size" }, { selector: "img", collapsed: !1, styles: { display: "block", marginLeft: "auto", marginRight: "auto" }, preview: !1 }, { selector: "table", collapsed: !1, styles: { marginLeft: "auto", marginRight: "auto" }, preview: "font-family font-size" }], alignright: [{ selector: "figure.image", collapsed: !1, classes: "align-right", ceFalseOverride: !0, preview: "font-family font-size" }, { selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li", styles: { textAlign: "right" }, inherit: !1, preview: "font-family font-size", defaultBlock: "div" }, { selector: "img,table", collapsed: !1, styles: { "float": "right" }, preview: "font-family font-size" }], alignjustify: [{ selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li", styles: { textAlign: "justify" }, inherit: !1, defaultBlock: "div", preview: "font-family font-size" }], bold: [{ inline: "strong", remove: "all" }, { inline: "span", styles: { fontWeight: "bold" } }, { inline: "b", remove: "all" }], italic: [{ inline: "em", remove: "all" }, { inline: "span", styles: { fontStyle: "italic" } }, { inline: "i", remove: "all" }], underline: [{ inline: "span", styles: { textDecoration: "underline" }, exact: !0 }, { inline: "u", remove: "all" }], strikethrough: [{ inline: "span", styles: { textDecoration: "line-through" }, exact: !0 }, { inline: "strike", remove: "all" }], forecolor: { inline: "span", styles: { color: "%value" }, links: !0, remove_similar: !0, clear_child_styles: !0 }, hilitecolor: { inline: "span", styles: { backgroundColor: "%value" }, links: !0, remove_similar: !0, clear_child_styles: !0 }, fontname: { inline: "span", toggle: !1, styles: { fontFamily: "%value" }, clear_child_styles: !0 }, fontsize: { inline: "span", toggle: !1, styles: { fontSize: "%value" }, clear_child_styles: !0 }, fontsize_class: { inline: "span", attributes: { "class": "%value" } }, blockquote: { block: "blockquote", wrapper: !0, remove: "all" }, subscript: { inline: "sub" }, superscript: { inline: "sup" }, code: { inline: "code" }, link: { inline: "a", selector: "a", remove: "all", split: !0, deep: !0, onmatch: function() { return !0 }, onformat: function(n, e, t) { un.each(t, function(e, t) { r.setAttrib(n, t, e) }) } }, removeformat: [{ selector: "b,strong,em,i,font,u,strike,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del,ins", remove: "all", split: !0, expand: !1, block_expand: !0, deep: !0 }, { selector: "span", attributes: ["style", "class"], remove: "empty", split: !0, expand: !1, deep: !0 }, { selector: "*", attributes: ["style", "class"], split: !1, expand: !1, deep: !0 }] }; return un.each("p h1 h2 h3 h4 h5 h6 div address pre div dt dd samp".split(/\s/), function(e) { t[e] = { block: e, remove: "all" } }), t },
        Kg = un.each,
        Xg = _i.DOM,
        Yg = function(e, t) { var n, o, r, h = t && t.schema || zi({}),
                m = function(e) { var t, n, r; return o = "string" == typeof e ? { name: e, classes: [], attrs: {} } : e, t = Xg.create(o.name), n = t, (r = o).classes.length && Xg.addClass(n, r.classes.join(" ")), Xg.setAttribs(n, r.attrs), t },
                g = function(n, e, t) { var r, o, i, a, u, s, l, c, f = 0 < e.length && e[0],
                        d = f && f.name; if (u = d, s = "string" != typeof(a = n) ? a.nodeName.toLowerCase() : a, l = h.getElementRule(s), i = !(!(c = l && l.parentsRequired) || !c.length) && (u && -1 !== un.inArray(c, u) ? u : c[0])) d === i ? (o = e[0], e = e.slice(1)) : o = i;
                    else if (f) o = e[0], e = e.slice(1);
                    else if (!t) return n; return o && (r = m(o)).appendChild(n), t && (r || (r = Xg.create("div")).appendChild(n), un.each(t, function(e) { var t = m(e);
                        r.insertBefore(t, n) })), g(r, e, o && o.siblings) }; return e && e.length ? (o = e[0], n = m(o), (r = Xg.create("div")).appendChild(g(n, e.slice(1), o.siblings)), r) : "" },
        Gg = function(e) { var t, a = { classes: [], attrs: {} }; return "*" !== (e = a.selector = un.trim(e)) && (t = e.replace(/(?:([#\.]|::?)([\w\-]+)|(\[)([^\]]+)\]?)/g, function(e, t, n, r, o) { switch (t) {
                    case "#":
                        a.attrs.id = n; break;
                    case ".":
                        a.classes.push(n); break;
                    case ":":
                        -1 !== un.inArray("checked disabled enabled read-only required".split(" "), n) && (a.attrs[n] = n) } if ("[" === r) { var i = o.match(/([\w\-]+)(?:\=\"([^\"]+))?/);
                    i && (a.attrs[i[1]] = i[2]) } return "" })), a.name = t || "div", a },
        Jg = function(e) { return e && "string" == typeof e ? (e = (e = e.split(/\s*,\s*/)[0]).replace(/\s*(~\+|~|\+|>)\s*/g, "$1"), un.map(e.split(/(?:>|\s+(?![^\[\]]+\]))/), function(e) { var t = un.map(e.split(/(?:~\+|~|\+)/), Gg),
                    n = t.pop(); return t.length && (n.siblings = t), n }).reverse()) : [] },
        Qg = function(n, e) { var t, r, o, i, a, u, s = ""; if (!1 === (u = n.settings.preview_styles)) return ""; "string" != typeof u && (u = "font-family font-size font-weight font-style text-decoration text-transform color background-color border border-radius outline text-shadow"); var l = function(e) { return e.replace(/%(\w+)/g, "") }; if ("string" == typeof e) { if (!(e = n.formatter.get(e))) return;
                e = e[0] } return "preview" in e && !1 === (u = e.preview) ? "" : (t = e.block || e.inline || "span", r = (i = Jg(e.selector)).length ? (i[0].name || (i[0].name = t), t = e.selector, Yg(i, n)) : Yg([t], n), o = Xg.select(t, r)[0] || r.firstChild, Kg(e.styles, function(e, t) {
                (e = l(e)) && Xg.setStyle(o, t, e) }), Kg(e.attributes, function(e, t) {
                (e = l(e)) && Xg.setAttrib(o, t, e) }), Kg(e.classes, function(e) { e = l(e), Xg.hasClass(o, e) || Xg.addClass(o, e) }), n.fire("PreviewFormats"), Xg.setStyles(r, { position: "absolute", left: -65535 }), n.getBody().appendChild(r), a = Xg.getStyle(n.getBody(), "fontSize", !0), a = /px$/.test(a) ? parseInt(a, 10) : 0, Kg(u.split(" "), function(e) { var t = Xg.getStyle(o, e, !0); if (!("background-color" === e && /transparent|rgba\s*\([^)]+,\s*0\)/.test(t) && (t = Xg.getStyle(n.getBody(), e, !0), "#ffffff" === Xg.toHex(t).toLowerCase()) || "color" === e && "#000000" === Xg.toHex(t).toLowerCase())) { if ("font-size" === e && /em|%$/.test(t)) { if (0 === a) return;
                        t = parseFloat(t) / (/%$/.test(t) ? 100 : 1) * a + "px" } "border" === e && t && (s += "padding:0 2px;"), s += e + ":" + t + ";" } }), n.fire("AfterPreviewFormats"), Xg.remove(r), s) },
        Zg = function(e, t, n, r, o) { var i = t.get(n);!Em.match(e, n, r, o) || "toggle" in i[0] && !i[0].toggle ? Ug.applyFormat(e, n, r, o) : xg(e, n, r, o) },
        ep = function(e) { e.addShortcut("meta+b", "", "Bold"), e.addShortcut("meta+i", "", "Italic"), e.addShortcut("meta+u", "", "Underline"); for (var t = 1; t <= 6; t++) e.addShortcut("access+" + t, "", ["FormatBlock", !1, "h" + t]);
            e.addShortcut("access+7", "", ["FormatBlock", !1, "p"]), e.addShortcut("access+8", "", ["FormatBlock", !1, "div"]), e.addShortcut("access+9", "", ["FormatBlock", !1, "address"]) },
        tp = function(e) { var t = function o(e) { var n = {},
                        r = function(e, t) { e && ("string" != typeof e ? un.each(e, function(e, t) { r(t, e) }) : (R(t) || (t = [t]), un.each(t, function(e) { "undefined" == typeof e.deep && (e.deep = !e.selector), "undefined" == typeof e.split && (e.split = !e.selector || e.inline), "undefined" == typeof e.remove && e.selector && !e.inline && (e.remove = "none"), e.selector && e.inline && (e.mixed = !0, e.block_expand = !0), "string" == typeof e.classes && (e.classes = e.classes.split(/\s+/)) }), n[e] = t)) }; return r(Wg(e.dom)), r(e.settings.formats), { get: function(e) { return e ? n[e] : n }, has: function(e) { return Br(n, e) }, register: r, unregister: function(e) { return e && n[e] && delete n[e], n } } }(e),
                n = qi(null); return ep(e), rg(e), { get: t.get, has: t.has, register: t.register, unregister: t.unregister, apply: d(Ug.applyFormat, e), remove: d(xg, e), toggle: d(Zg, e, t), match: d(Em.match, e), matchAll: d(Em.matchAll, e), matchNode: d(Em.matchNode, e), canApply: d(Em.canApply, e), formatChanged: d($g, e, n), getCssText: d(Qg, e) } },
        np = Object.prototype.hasOwnProperty,
        rp = (sg = function(e, t) { return t }, function() { for (var e = new Array(arguments.length), t = 0; t < e.length; t++) e[t] = arguments[t]; if (0 === e.length) throw new Error("Can't merge zero objects"); for (var n = {}, r = 0; r < e.length; r++) { var o = e[r]; for (var i in o) np.call(o, i) && (n[i] = sg(n[i], o[i])) } return n }),
        op = function(t, s, l) { t.addAttributeFilter("data-mce-tabindex", function(e, t) { for (var n, r = e.length; r--;)(n = e[r]).attr("tabindex", n.attr("data-mce-tabindex")), n.attr(t, null) }), t.addAttributeFilter("src,href,style", function(e, t) { for (var n, r, o = e.length, i = "data-mce-" + t, a = s.url_converter, u = s.url_converter_scope; o--;)(r = (n = e[o]).attr(i)) !== undefined ? (n.attr(t, 0 < r.length ? r : null), n.attr(i, null)) : (r = n.attr(t), "style" === t ? r = l.serializeStyle(l.parseStyle(r), n.name) : a && (r = a.call(u, r, t, n.name)), n.attr(t, 0 < r.length ? r : null)) }), t.addAttributeFilter("class", function(e) { for (var t, n, r = e.length; r--;)(n = (t = e[r]).attr("class")) && (n = t.attr("class").replace(/(?:^|\s)mce-item-\w+(?!\S)/g, ""), t.attr("class", 0 < n.length ? n : null)) }), t.addAttributeFilter("data-mce-type", function(e, t, n) { for (var r, o = e.length; o--;) "bookmark" !== (r = e[o]).attr("data-mce-type") || n.cleanup || (T.from(r.firstChild).exists(function(e) { return !_a(e.value) }) ? r.unwrap() : r.remove()) }), t.addNodeFilter("noscript", function(e) { for (var t, n = e.length; n--;)(t = e[n].firstChild) && (t.value = ci.decode(t.value)) }), t.addNodeFilter("script,style", function(e, t) { for (var n, r, o, i = e.length, a = function(e) { return e.replace(/(<!--\[CDATA\[|\]\]-->)/g, "\n").replace(/^[\r\n]*|[\r\n]*$/g, "").replace(/^\s*((<!--)?(\s*\/\/)?\s*<!\[CDATA\[|(<!--\s*)?\/\*\s*<!\[CDATA\[\s*\*\/|(\/\/)?\s*<!--|\/\*\s*<!--\s*\*\/)\s*[\r\n]*/gi, "").replace(/\s*(\/\*\s*\]\]>\s*\*\/(-->)?|\s*\/\/\s*\]\]>(-->)?|\/\/\s*(-->)?|\]\]>|\/\*\s*-->\s*\*\/|\s*-->\s*)\s*$/g, "") }; i--;) r = (n = e[i]).firstChild ? n.firstChild.value : "", "script" === t ? ((o = n.attr("type")) && n.attr("type", "mce-no/type" === o ? null : o.replace(/^mce\-/, "")), "xhtml" === s.element_format && 0 < r.length && (n.firstChild.value = "// <![CDATA[\n" + a(r) + "\n// ]]>")) : "xhtml" === s.element_format && 0 < r.length && (n.firstChild.value = "\x3c!--\n" + a(r) + "\n--\x3e") }), t.addNodeFilter("#comment", function(e) { for (var t, n = e.length; n--;) 0 === (t = e[n]).value.indexOf("[CDATA[") ? (t.name = "#cdata", t.type = 4, t.value = t.value.replace(/^\[CDATA\[|\]\]$/g, "")) : 0 === t.value.indexOf("mce:protected ") && (t.name = "#text", t.type = 3, t.raw = !0, t.value = unescape(t.value).substr(14)) }), t.addNodeFilter("xml:namespace,input", function(e, t) { for (var n, r = e.length; r--;) 7 === (n = e[r]).type ? n.remove() : 1 === n.type && ("input" !== t || n.attr("type") || n.attr("type", "text")) }), t.addAttributeFilter("data-mce-type", function(e) { F(e, function(e) { "format-caret" === e.attr("data-mce-type") && (e.isEmpty(t.schema.getNonEmptyElements()) ? e.remove() : e.unwrap()) }) }), t.addAttributeFilter("data-mce-src,data-mce-href,data-mce-style,data-mce-selected,data-mce-expando,data-mce-type,data-mce-resize", function(e, t) { for (var n = e.length; n--;) e[n].attr(t, null) }) },
        ip = function(e) { var t, n, r = function(e) { return e && "br" === e.name };
            r(t = e.lastChild) && r(n = t.prev) && (t.remove(), n.remove()) },
        ap = function(e, t, n) { return f = n, (c = e) && c.hasEventListeners("PreProcess") && !f.no_events ? (o = t, i = n, l = (r = e).dom, o = o.cloneNode(!0), (a = j.document.implementation).createHTMLDocument && (u = a.createHTMLDocument(""), un.each("BODY" === o.nodeName ? o.childNodes : [o], function(e) { u.body.appendChild(u.importNode(e, !0)) }), o = "BODY" !== o.nodeName ? u.body.firstChild : u.body, s = l.doc, l.doc = u), Rf(r, rp(i, { node: o })), s && (l.doc = s), o) : t; var r, o, i, a, u, s, l, c, f },
        up = function(e, a, u) { e.addNodeFilter("font", function(e) { F(e, function(e) { var t, n = a.parse(e.attr("style")),
                        r = e.attr("color"),
                        o = e.attr("face"),
                        i = e.attr("size");
                    r && (n.color = r), o && (n["font-family"] = o), i && (n["font-size"] = u[parseInt(e.attr("size"), 10) - 1]), e.name = "span", e.attr("style", a.serialize(n)), t = e, F(["color", "face", "size"], function(e) { t.attr(e, null) }) }) }) },
        sp = function(e, t) { var n, r = Si();
            t.convert_fonts_to_spans && up(e, r, un.explode(t.font_size_legacy_values)), n = r, e.addNodeFilter("strike", function(e) { F(e, function(e) { var t = n.parse(e.attr("style"));
                    t["text-decoration"] = "line-through", e.name = "span", e.attr("style", n.serialize(t)) }) }) },
        lp = function(e, t) { t.inline_styles && sp(e, t) },
        cp = function(e, t, n, r) {
            (e.padd_empty_with_br || t.insert) && n[r.name] ? r.empty().append(new uc("br", 1)).shortEnded = !0 : r.empty().append(new uc("#text", 3)).value = "\xa0" },
        fp = function(e, t) { return e && e.firstChild && e.firstChild === e.lastChild && e.firstChild.name === t },
        dp = function(r, e, t, n) { return n.isEmpty(e, t, function(e) { return t = e, (n = r.getElementRule(t.name)) && n.paddEmpty; var t, n }) },
        hp = un.makeMap,
        mp = un.each,
        gp = un.explode,
        pp = un.extend,
        vp = function(T, A) { void 0 === A && (A = zi()); var M = {},
                R = [],
                D = {},
                B = {};
            (T = T || {}).validate = !("validate" in T) || T.validate, T.root_name = T.root_name || "body"; var e, g, p, O = function(e) { var t, n, r;
                    (n = e.name) in M && ((r = D[n]) ? r.push(e) : D[n] = [e]), t = R.length; for (; t--;)(n = R[t].name) in e.attributes.map && ((r = B[n]) ? r.push(e) : B[n] = [e]); return e },
                t = { schema: A, addAttributeFilter: function(e, n) { mp(gp(e), function(e) { var t; for (t = 0; t < R.length; t++)
                                if (R[t].name === e) return void R[t].callbacks.push(n);
                            R.push({ name: e, callbacks: [n] }) }) }, getAttributeFilters: function() { return [].concat(R) }, addNodeFilter: function(e, n) { mp(gp(e), function(e) { var t = M[e];
                            t || (M[e] = t = []), t.push(n) }) }, getNodeFilters: function() { var e = []; for (var t in M) M.hasOwnProperty(t) && e.push({ name: t, callbacks: M[t] }); return e }, filterNode: O, parse: function(e, u) { var t, n, r, o, i, a, s, l, c, f, d, h = [];
                        u = u || {}, D = {}, B = {}, c = pp(hp("script,style,head,html,body,title,meta,param"), A.getBlockElements()); var m, g = A.getNonEmptyElements(),
                            p = A.children,
                            v = T.validate,
                            y = "forced_root_block" in u ? u.forced_root_block : T.forced_root_block,
                            b = !1 === (m = y) ? "" : !0 === m ? "p" : m,
                            C = A.getWhiteSpaceElements(),
                            w = /^[ \t\r\n]+/,
                            x = /[ \t\r\n]+$/,
                            z = /[ \t\r\n]+/g,
                            N = /^[ \t\r\n]+$/;
                        f = C.hasOwnProperty(u.context) || C.hasOwnProperty(T.root_name); var E = function(e, t) { var n, r = new uc(e, t); return e in M && ((n = D[e]) ? n.push(r) : D[e] = [r]), r },
                            S = function(e) { var t, n, r, o, i = A.getBlockElements(); for (t = e.prev; t && 3 === t.type;) { if (0 < (r = t.value.replace(x, "")).length) return void(t.value = r); if (n = t.next) { if (3 === n.type && n.value.length) { t = t.prev; continue } if (!i[n.name] && "script" !== n.name && "style" !== n.name) { t = t.prev; continue } }
                                    o = t.prev, t.remove(), t = o } };
                        t = fc({ validate: v, allow_script_urls: T.allow_script_urls, allow_conditional_comments: T.allow_conditional_comments, self_closing_elements: function(e) { var t, n = {}; for (t in e) "li" !== t && "p" !== t && (n[t] = e[t]); return n }(A.getSelfClosingElements()), cdata: function(e) { d.append(E("#cdata", 4)).value = e }, text: function(e, t) { var n, r, o;
                                f || (e = e.replace(z, " "), r = d.lastChild, o = c, r && (o[r.name] || "br" === r.name) && (e = e.replace(w, ""))), 0 !== e.length && ((n = E("#text", 3)).raw = !!t, d.append(n).value = e) }, comment: function(e) { d.append(E("#comment", 8)).value = e }, pi: function(e, t) { d.append(E(e, 7)).value = t, S(d) }, doctype: function(e) { d.append(E("#doctype", 10)).value = e, S(d) }, start: function(e, t, n) { var r, o, i, a, u; if (i = v ? A.getElementRule(e) : {}) { for ((r = E(i.outputName || e, 1)).attributes = t, r.shortEnded = n, d.append(r), (u = p[d.name]) && p[r.name] && !u[r.name] && h.push(r), o = R.length; o--;)(a = R[o].name) in t.map && ((s = B[a]) ? s.push(r) : B[a] = [r]);
                                    c[e] && S(r), n || (d = r), !f && C[e] && (f = !0) } }, end: function(e) { var t, n, r, o, i, a; if (n = v ? A.getElementRule(e) : {}) { if (c[e] && !f) { if ((t = d.firstChild) && 3 === t.type)
                                            if (0 < (r = t.value.replace(w, "")).length) t.value = r, t = t.next;
                                            else
                                                for (o = t.next, t.remove(), t = o; t && 3 === t.type;) r = t.value, o = t.next, (0 === r.length || N.test(r)) && (t.remove(), t = o), t = o;
                                        if ((t = d.lastChild) && 3 === t.type)
                                            if (0 < (r = t.value.replace(x, "")).length) t.value = r, t = t.prev;
                                            else
                                                for (o = t.prev, t.remove(), t = o; t && 3 === t.type;) r = t.value, o = t.prev, (0 === r.length || N.test(r)) && (t.remove(), t = o), t = o } if (f && C[e] && (f = !1), n.removeEmpty && dp(A, g, C, d) && !d.attr("name") && !d.attr("id")) return i = d.parent, c[d.name] ? d.empty().remove() : d.unwrap(), void(d = i);
                                    n.paddEmpty && (fp(a = d, "#text") && "\xa0" === a.firstChild.value || dp(A, g, C, d)) && cp(T, u, c, d), d = d.parent } } }, A); var k = d = new uc(u.context || T.root_name, 11); if (t.parse(e), v && h.length && (u.context ? u.invalid = !0 : function(e) { var t, n, r, o, i, a, u, s, l, c, f, d, h, m, g, p; for (d = hp("tr,td,th,tbody,thead,tfoot,table"), c = A.getNonEmptyElements(), f = A.getWhiteSpaceElements(), h = A.getTextBlockElements(), m = A.getSpecialElements(), t = 0; t < e.length; t++)
                                    if ((n = e[t]).parent && !n.fixed)
                                        if (h[n.name] && "li" === n.parent.name) { for (g = n.next; g && h[g.name];) g.name = "li", g.fixed = !0, n.parent.insert(g, n.parent), g = g.next;
                                            n.unwrap(n) } else { for (o = [n], r = n.parent; r && !A.isValidChild(r.name, n.name) && !d[r.name]; r = r.parent) o.push(r); if (r && 1 < o.length) { for (o.reverse(), i = a = O(o[0].clone()), l = 0; l < o.length - 1; l++) { for (A.isValidChild(a.name, o[l].name) ? (u = O(o[l].clone()), a.append(u)) : u = a, s = o[l].firstChild; s && s !== o[l + 1];) p = s.next, u.append(s), s = p;
                                                    a = u }
                                                dp(A, c, f, i) ? r.insert(n, o[0], !0) : (r.insert(i, o[0], !0), r.insert(n, i)), r = o[0], (dp(A, c, f, r) || fp(r, "br")) && r.empty().remove() } else if (n.parent) { if ("li" === n.name) { if ((g = n.prev) && ("ul" === g.name || "ul" === g.name)) { g.append(n); continue } if ((g = n.next) && ("ul" === g.name || "ul" === g.name)) { g.insert(n, g.firstChild, !0); continue }
                                                    n.wrap(O(new uc("ul", 1))); continue }
                                                A.isValidChild(n.parent.name, "div") && A.isValidChild("div", n.name) ? n.wrap(O(new uc("div", 1))) : m[n.name] ? n.empty().remove() : n.unwrap() } } }(h)), b && ("body" === k.name || u.isRootContent) && function() { var e, t, n = k.firstChild,
                                    r = function(e) { e && ((n = e.firstChild) && 3 === n.type && (n.value = n.value.replace(w, "")), (n = e.lastChild) && 3 === n.type && (n.value = n.value.replace(x, ""))) }; if (A.isValidChild(k.name, b.toLowerCase())) { for (; n;) e = n.next, 3 === n.type || 1 === n.type && "p" !== n.name && !c[n.name] && !n.attr("data-mce-type") ? (t || ((t = E(b, 1)).attr(T.forced_root_block_attrs), k.insert(t, n)), t.append(n)) : (r(t), t = null), n = e;
                                    r(t) } }(), !u.invalid) { for (l in D)
                                if (D.hasOwnProperty(l)) { for (s = M[l], i = (n = D[l]).length; i--;) n[i].parent || n.splice(i, 1); for (r = 0, o = s.length; r < o; r++) s[r](n, l, u) }
                            for (r = 0, o = R.length; r < o; r++)
                                if ((s = R[r]).name in B) { for (i = (n = B[s.name]).length; i--;) n[i].parent || n.splice(i, 1); for (i = 0, a = s.callbacks.length; i < a; i++) s.callbacks[i](n, s.name, u) } } return k } }; return p = (e = t).schema, (g = T).remove_trailing_brs && e.addNodeFilter("br", function(e, t, n) { var r, o, i, a, u, s, l, c, f = e.length,
                    d = un.extend({}, p.getBlockElements()),
                    h = p.getNonEmptyElements(),
                    m = p.getNonEmptyElements(); for (d.body = 1, r = 0; r < f; r++)
                    if (i = (o = e[r]).parent, d[o.parent.name] && o === i.lastChild) { for (u = o.prev; u;) { if ("span" !== (s = u.name) || "bookmark" !== u.attr("data-mce-type")) { if ("br" !== s) break; if ("br" === s) { o = null; break } }
                            u = u.prev }
                        o && (o.remove(), dp(p, h, m, i) && (l = p.getElementRule(i.name)) && (l.removeEmpty ? i.remove() : l.paddEmpty && cp(g, n, d, i))) } else { for (a = o; i && i.firstChild === a && i.lastChild === a && !d[(a = i).name];) i = i.parent;
                        a === i && !0 !== g.padd_empty_with_br && ((c = new uc("#text", 3)).value = "\xa0", o.replace(c)) } }), e.addAttributeFilter("href", function(e) { var t, n, r, o = e.length; if (!g.allow_unsafe_link_target)
                    for (; o--;) "a" === (t = e[o]).name && "_blank" === t.attr("target") && t.attr("rel", (n = t.attr("rel"), r = n ? un.trim(n) : "", /\b(noopener)\b/g.test(r) ? r : r.split(" ").filter(function(e) { return 0 < e.length }).concat(["noopener"]).sort().join(" "))) }), g.allow_html_in_named_anchor || e.addAttributeFilter("id,name", function(e) { for (var t, n, r, o, i = e.length; i--;)
                    if ("a" === (o = e[i]).name && o.firstChild && !o.attr("href"))
                        for (r = o.parent, t = o.lastChild; n = t.prev, r.insert(t, o), t = n;); }), g.fix_list_elements && e.addNodeFilter("ul,ol", function(e) { for (var t, n, r = e.length; r--;)
                    if ("ul" === (n = (t = e[r]).parent).name || "ol" === n.name)
                        if (t.prev && "li" === t.prev.name) t.prev.append(t);
                        else { var o = new uc("li", 1);
                            o.attr("style", "list-style-type: none"), t.wrap(o) } }), g.validate && p.getValidClasses() && e.addAttributeFilter("class", function(e) { for (var t, n, r, o, i, a, u, s = e.length, l = p.getValidClasses(); s--;) { for (n = (t = e[s]).attr("class").split(" "), i = "", r = 0; r < n.length; r++) o = n[r], u = !1, (a = l["*"]) && a[o] && (u = !0), a = l[t.name], !u && a && a[o] && (u = !0), u && (i && (i += " "), i += o);
                    i.length || (i = null), t.attr("class", i) } }), lp(t, T), t },
        yp = function(e, t, n) {-1 === un.inArray(t, n) && (e.addAttributeFilter(n, function(e, t) { for (var n = e.length; n--;) e[n].attr(t, null) }), t.push(n)) },
        bp = function(e, t, n, r, o) { var i, a, u, s, l = (i = r, Jc(t, n).serialize(i)); return a = e, s = l, (u = o).no_events || !a ? s : Df(a, rp(u, { content: s })).content },
        Cp = function(g, p) { var v, y, b, e = ["data-mce-selected"]; return v = p && p.dom ? p.dom : _i.DOM, y = p && p.schema ? p.schema : zi(g), g.entity_encoding = g.entity_encoding || "named", g.remove_trailing_brs = !("remove_trailing_brs" in g) || g.remove_trailing_brs, b = vp(g, y), op(b, g, v), { schema: y, addNodeFilter: b.addNodeFilter, addAttributeFilter: b.addAttributeFilter, serialize: function(e, t) { var n, r, o, i, a, u, s, l, c, f = rp({ format: "html" }, t || {}),
                        d = ap(p, e, f),
                        h = (n = v, r = d, i = La((o = f).getInner ? r.innerHTML : n.getOuterHTML(r)), o.selection || Yo(yr.fromDom(r)) ? i : un.trim(i)),
                        m = (a = b, u = h, l = (s = f).selection ? rp({ forced_root_block: !1 }, s) : s, c = a.parse(u, l), ip(c), c); return "tree" === f.format ? m : bp(p, g, y, m, f) }, addRules: function(e) { y.addValidElements(e) }, setRules: function(e) { y.setValidElements(e) }, addTempAttr: d(yp, b, e), getTempAttrs: function() { return e } } },
        wp = function(e, t) { var n = Cp(e, t); return { schema: n.schema, addNodeFilter: n.addNodeFilter, addAttributeFilter: n.addAttributeFilter, serialize: n.serialize, addRules: n.addRules, setRules: n.setRules, addTempAttr: n.addTempAttr, getTempAttrs: n.getTempAttrs } };

    function xp(e) { return { getBookmark: d(Ml, e), moveToBookmark: d(Rl, e) } }(xp || (xp = {})).isBookmarkNode = Dl; var zp, Np, Ep = xp,
        Sp = _o.isContentEditableFalse,
        kp = _o.isContentEditableTrue,
        Tp = function(r, a) { var u, s, l, c, f, d, h, m, g, p, v, y, i, b, C, w, x, z = a.dom,
                N = un.each,
                E = a.getDoc(),
                S = j.document,
                k = Math.abs,
                T = Math.round,
                A = a.getBody();
            c = { nw: [0, 0, -1, -1], ne: [1, 0, 1, -1], se: [1, 1, 1, 1], sw: [0, 1, -1, 1] }; var M = function(e) { return e && ("IMG" === e.nodeName || a.dom.is(e, "figure.image")) },
                e = function(e) { var t, n, r = e.target;
                    t = e, n = a.selection.getRng(), !M(t.target) || zh(t.clientX, t.clientY, n) || e.isDefaultPrevented() || (e.preventDefault(), a.selection.select(r)) },
                R = function(e) { return a.dom.is(e, "figure.image") ? e.querySelector("img") : e },
                D = function(e) { var t = a.settings.object_resizing; return !1 !== t && !Fe.iOS && ("string" != typeof t && (t = "table,img,figure.image,div"), "false" !== e.getAttribute("data-mce-resize") && e !== a.getBody() && Yr(yr.fromDom(e), t)) },
                B = function(e) { var t, n, r, o;
                    t = e.screenX - d, n = e.screenY - h, b = t * f[2] + p, C = n * f[3] + v, b = b < 5 ? 5 : b, C = C < 5 ? 5 : C, (M(u) && !1 !== a.settings.resize_img_proportional ? !Rh.modifierPressed(e) : Rh.modifierPressed(e) || M(u) && f[2] * f[3] != 0) && (k(t) > k(n) ? (C = T(b * y), b = T(C / y)) : (b = T(C / y), C = T(b * y))), z.setStyles(R(s), { width: b, height: C }), r = 0 < (r = f.startPos.x + t) ? r : 0, o = 0 < (o = f.startPos.y + n) ? o : 0, z.setStyles(l, { left: r, top: o, display: "block" }), l.innerHTML = b + " &times; " + C, f[2] < 0 && s.clientWidth <= b && z.setStyle(s, "left", m + (p - b)), f[3] < 0 && s.clientHeight <= C && z.setStyle(s, "top", g + (v - C)), (t = A.scrollWidth - w) + (n = A.scrollHeight - x) != 0 && z.setStyles(l, { left: r - t, top: o - n }), i || (_f(a, u, p, v), i = !0) },
                O = function() { i = !1; var e = function(e, t) { t && (u.style[e] || !a.schema.isValid(u.nodeName.toLowerCase(), e) ? z.setStyle(R(u), e, t) : z.setAttrib(R(u), e, t)) };
                    e("width", b), e("height", C), z.unbind(E, "mousemove", B), z.unbind(E, "mouseup", O), S !== E && (z.unbind(S, "mousemove", B), z.unbind(S, "mouseup", O)), z.remove(s), z.remove(l), o(u), Pf(a, u, b, C), z.setAttrib(u, "style", z.getAttrib(u, "style")), a.nodeChanged() },
                o = function(e) { var t, r, o, n, i;
                    H(), P(), t = z.getPos(e, A), m = t.x, g = t.y, i = e.getBoundingClientRect(), r = i.width || i.right - i.left, o = i.height || i.bottom - i.top, u !== e && (u = e, b = C = 0), n = a.fire("ObjectSelected", { target: e }), D(e) && !n.isDefaultPrevented() ? N(c, function(n, e) { var t;
                        (t = z.get("mceResizeHandle" + e)) && z.remove(t), t = z.add(A, "div", { id: "mceResizeHandle" + e, "data-mce-bogus": "all", "class": "mce-resizehandle", unselectable: !0, style: "cursor:" + e + "-resize; margin:0; padding:0" }), 11 === Fe.ie && (t.contentEditable = !1), z.bind(t, "mousedown", function(e) { var t;
                            e.stopImmediatePropagation(), e.preventDefault(), d = (t = e).screenX, h = t.screenY, p = R(u).clientWidth, v = R(u).clientHeight, y = v / p, (f = n).startPos = { x: r * n[0] + m, y: o * n[1] + g }, w = A.scrollWidth, x = A.scrollHeight, s = u.cloneNode(!0), z.addClass(s, "mce-clonedresizable"), z.setAttrib(s, "data-mce-bogus", "all"), s.contentEditable = !1, s.unSelectabe = !0, z.setStyles(s, { left: m, top: g, margin: 0 }), s.removeAttribute("data-mce-selected"), A.appendChild(s), z.bind(E, "mousemove", B), z.bind(E, "mouseup", O), S !== E && (z.bind(S, "mousemove", B), z.bind(S, "mouseup", O)), l = z.add(A, "div", { "class": "mce-resize-helper", "data-mce-bogus": "all" }, p + " &times; " + v) }), n.elm = t, z.setStyles(t, { left: r * n[0] + m - t.offsetWidth / 2, top: o * n[1] + g - t.offsetHeight / 2 }) }) : H(), u.setAttribute("data-mce-selected", "1") },
                H = function() { var e, t; for (e in P(), u && u.removeAttribute("data-mce-selected"), c)(t = z.get("mceResizeHandle" + e)) && (z.unbind(t), z.remove(t)) },
                n = function(e) { var t, n = function(e, t) { if (e)
                            do { if (e === t) return !0 } while (e = e.parentNode) };
                    i || a.removed || (N(z.select("img[data-mce-selected],hr[data-mce-selected]"), function(e) { e.removeAttribute("data-mce-selected") }), t = "mousedown" === e.type ? e.target : r.getNode(), n(t = z.$(t).closest("table,img,figure.image,hr")[0], A) && (L(), n(r.getStart(!0), t) && n(r.getEnd(!0), t)) ? o(t) : H()) },
                _ = function(e) { return Sp(function(e, t) { for (; t && t !== e;) { if (kp(t) || Sp(t)) return t;
                            t = t.parentNode } return null }(a.getBody(), e)) },
                P = function() { for (var e in c) { var t = c[e];
                        t.elm && (z.unbind(t.elm), delete t.elm) } },
                L = function() { try { a.getDoc().execCommand("enableObjectResizing", !1, !1) } catch (e) {} }; return a.on("init", function() { L(), Fe.ie && 11 <= Fe.ie && (a.on("mousedown click", function(e) { var t = e.target,
                        n = t.nodeName;
                    i || !/^(TABLE|IMG|HR)$/.test(n) || _(t) || (2 !== e.button && a.selection.select(t, "TABLE" === n), "mousedown" === e.type && a.nodeChanged()) }), a.dom.bind(A, "mscontrolselect", function(e) { var t = function(e) { We.setEditorTimeout(a, function() { a.selection.select(e) }) }; if (_(e.target)) return e.preventDefault(), void t(e.target); /^(TABLE|IMG|HR)$/.test(e.target.nodeName) && (e.preventDefault(), "IMG" === e.target.tagName && t(e.target)) })); var t = We.throttle(function(e) { a.composing || n(e) });
                a.on("nodechange ResizeEditor ResizeWindow drop FullscreenStateChanged", t), a.on("keyup compositionend", function(e) { u && "TABLE" === u.nodeName && t(e) }), a.on("hide blur", H), a.on("contextmenu", e) }), a.on("remove", P), { isResizable: D, showResizeRect: o, hideResizeRect: H, updateResizeRect: n, destroy: function() { u = s = null } } },
        Ap = function(e) { for (var t = 0, n = 0, r = e; r && r.nodeType;) t += r.offsetLeft || 0, n += r.offsetTop || 0, r = r.offsetParent; return { x: t, y: n } },
        Mp = function(e, t, n) { var r, o, i, a, u, s = e.dom,
                l = s.getRoot(),
                c = 0; if (u = { elm: t, alignToTop: n }, e.fire("ScrollIntoView", u), !u.isDefaultPrevented() && _o.isElement(t)) { if (!1 === n && (c = t.offsetHeight), "BODY" !== l.nodeName) { var f = e.selection.getScrollContainer(); if (f) return r = Ap(t).y - Ap(f).y + c, a = f.clientHeight, void((r < (i = f.scrollTop) || i + a < r + 25) && (f.scrollTop = r < i ? r : r - a + 25)) }
                o = s.getViewPort(e.getWin()), r = s.getPos(t).y + c, i = o.y, a = o.h, (r < o.y || i + a < r + 25) && e.getWin().scrollTo(0, r < i ? r : r - a + 25) } },
        Rp = function(d, e) { ce(Uu.fromRangeStart(e).getClientRects()).each(function(e) { var t, n, r, o, i, a, u, s, l, c = function(e) { if (e.inline) return e.getBody().getBoundingClientRect(); var t = e.getWin(); return { left: 0, right: t.innerWidth, top: 0, bottom: t.innerHeight, width: t.innerWidth, height: t.innerHeight } }(d),
                    f = { x: (i = t = c, a = n = e, a.left > i.left && a.right < i.right ? 0 : a.left < i.left ? a.left - i.left : a.right - i.right), y: (r = t, o = n, o.top > r.top && o.bottom < r.bottom ? 0 : o.top < r.top ? o.top - r.top : o.bottom - r.bottom) };
                s = 0 !== f.x ? 0 < f.x ? f.x + 4 : f.x - 4 : 0, l = 0 !== f.y ? 0 < f.y ? f.y + 4 : f.y - 4 : 0, (u = d).inline ? (u.getBody().scrollLeft += s, u.getBody().scrollTop += l) : u.getWin().scrollBy(s, l) }) },
        Dp = function(e) { return _o.isContentEditableTrue(e) || _o.isContentEditableFalse(e) },
        Bp = function(e, t, n) { var r, o, i, a, u, s = n; if (s.caretPositionFromPoint)(o = s.caretPositionFromPoint(e, t)) && ((r = n.createRange()).setStart(o.offsetNode, o.offset), r.collapse(!0));
            else if (n.caretRangeFromPoint) r = n.caretRangeFromPoint(e, t);
            else if (s.body.createTextRange) { r = s.body.createTextRange(); try { r.moveToPoint(e, t), r.collapse(!0) } catch (l) { r = function(e, n, t) { var r, o, i; if (r = t.elementFromPoint(e, n), o = t.body.createTextRange(), r && "HTML" !== r.tagName || (r = t.body), o.moveToElementText(r), 0 < (i = (i = un.toArray(o.getClientRects())).sort(function(e, t) { return (e = Math.abs(Math.max(e.top - n, e.bottom - n))) - (t = Math.abs(Math.max(t.top - n, t.bottom - n))) })).length) { n = (i[0].bottom + i[0].top) / 2; try { return o.moveToPoint(e, n), o.collapse(!0), o } catch (a) {} } return null }(e, t, n) } return i = r, a = n.body, u = i && i.parentElement ? i.parentElement() : null, _o.isContentEditableFalse(function(e, t, n) { for (; e && e !== t;) { if (n(e)) return e;
                        e = e.parentNode } return null }(u, a, Dp)) ? null : i } return r },
        Op = function(n, e) { return X(e, function(e) { var t = n.fire("GetSelectionRange", { range: e }); return t.range !== e ? t.range : e }) },
        Hp = function(e, t) { var n = (t || j.document).createDocumentFragment(); return F(e, function(e) { n.appendChild(e.dom()) }), yr.fromDom(n) },
        _p = Ur("element", "width", "rows"),
        Pp = Ur("element", "cells"),
        Lp = Ur("x", "y"),
        Vp = function(e, t) { var n = parseInt(Pr(e, t), 10); return isNaN(n) ? 1 : n },
        Ip = function(e) { return Q(e, function(e, t) { return t.cells().length > e ? t.cells().length : e }, 0) },
        Fp = function(e, t) { for (var n = e.rows(), r = 0; r < n.length; r++)
                for (var o = n[r].cells(), i = 0; i < o.length; i++)
                    if (Qr(o[i], t)) return T.some(Lp(i, r));
            return T.none() },
        Up = function(e, t, n, r, o) { for (var i = [], a = e.rows(), u = n; u <= o; u++) { var s = a[u].cells(),
                    l = t < r ? s.slice(t, r + 1) : s.slice(r, t + 1);
                i.push(Pp(a[u].element(), l)) } return i },
        jp = function(e) { var o = _p(Da(e), 0, []); return F(ga(e, "tr"), function(n, r) { F(ga(n, "td,th"), function(e, t) {! function(e, t, n, r, o) { for (var i = Vp(o, "rowspan"), a = Vp(o, "colspan"), u = e.rows(), s = n; s < n + i; s++) { u[s] || (u[s] = Pp(Ba(r), [])); for (var l = t; l < t + a; l++) u[s].cells()[l] = s === n && l === t ? o : Da(o) } }(o, function(e, t, n) { for (; r = t, o = n, i = void 0, ((i = e.rows())[o] ? i[o].cells() : [])[r];) t++; var r, o, i; return t }(o, t, r), r, n, e) }) }), _p(o.element(), Ip(o.rows()), o.rows()) },
        qp = function(e) { return n = X((t = e).rows(), function(e) { var t = X(e.cells(), function(e) { var t = Ba(e); return Lr(t, "colspan"), Lr(t, "rowspan"), t }),
                    n = Da(e.element()); return ta(n, t), n }), r = Da(t.element()), o = yr.fromTag("tbody"), ta(o, n), ea(r, o), r; var t, n, r, o },
        $p = function(c, e, t) { return Fp(c, e).bind(function(l) { return Fp(c, t).map(function(e) { return t = c, r = e, o = (n = l).x(), i = n.y(), a = r.x(), u = r.y(), s = i < u ? Up(t, o, i, a, u) : Up(t, o, u, a, i), _p(t.element(), Ip(s), s); var t, n, r, o, i, a, u, s }) }) },
        Wp = function(e) { var t = []; if (e)
                for (var n = 0; n < e.rangeCount; n++) t.push(e.getRangeAt(n)); return t },
        Kp = Wp,
        Xp = function(e) { return oe(e, function(e) { var t = pu(e); return t ? [yr.fromDom(t)] : [] }) },
        Yp = function(e) { return 1 < Wp(e).length },
        Gp = function(e) { return G(Xp(e), Xo) },
        Jp = function(e) { return ga(e, "td[data-mce-selected],th[data-mce-selected]") },
        Qp = function(e, t) { var n = Jp(t),
                r = Gp(e); return 0 < n.length ? n : r },
        Zp = Qp,
        ev = function(e) { return Qp(Kp(e.selection.getSel()), yr.fromDom(e.getBody())) },
        tv = function(n, t) { return Z(n, function(e) { return "li" === xr(e) && Wd(e, t) }).fold($([]), function(e) { return (t = n, Z(t, function(e) { return "ul" === xr(e) || "ol" === xr(e) })).map(function(e) { return [yr.fromTag("li"), yr.fromTag(xr(e))] }).getOr([]); var t }) },
        nv = function(e, t) { var n, r = yr.fromDom(t.commonAncestorContainer),
                o = Ld(r, e),
                i = G(o, function(e) { return Fo(e) || Vo(e) }),
                a = tv(o, t),
                u = i.concat(a.length ? a : $o(n = r) ? to(n).filter(qo).fold($([]), function(e) { return [n, e] }) : qo(n) ? [n] : []); return X(u, Da) },
        rv = function() { return Hp([]) },
        ov = function(e, t) { return n = yr.fromDom(t.cloneContents()), r = nv(e, t), o = Q(r, function(e, t) { return ea(t, e), t }, n), 0 < r.length ? Hp([o]) : o; var n, r, o },
        iv = function(e, o) { return (t = e, n = o[0], Ca(n, "table", d(Qr, t))).bind(function(e) { var t = o[0],
                    n = o[o.length - 1],
                    r = jp(e); return $p(r, t, n).map(function(e) { return Hp([qp(e)]) }) }).getOrThunk(rv); var t, n },
        av = function(e, t) { var n, r, o = Zp(t, e); return 0 < o.length ? iv(e, o) : (n = e, 0 < (r = t).length && r[0].collapsed ? rv() : ov(n, r[0])) },
        uv = function(e, t) { if (void 0 === t && (t = {}), t.get = !0, t.format = t.format || "html", t.selection = !0, (t = e.fire("BeforeGetContent", t)).isDefaultPrevented()) return e.fire("GetContent", t), t.content; if ("text" === t.format) return l = e, T.from(l.selection.getRng()).map(function(e) { var t = l.dom.add(l.getBody(), "div", { "data-mce-bogus": "all", style: "overflow: hidden; opacity: 0;" }, e.cloneContents()),
                    n = La(t.innerText); return l.dom.remove(t), n }).getOr("");
            t.getInner = !0; var n, r, o, i, a, u, s, l, c = (r = t, i = (n = e).selection.getRng(), a = n.dom.create("body"), u = n.selection.getSel(), s = Op(n, Kp(u)), (o = r.contextual ? av(yr.fromDom(n.getBody()), s).dom() : i.cloneContents()) && a.appendChild(o), n.selection.serializer.serialize(a, r)); return "tree" === t.format ? c : (t.content = e.selection.isCollapsed() ? "" : c, e.fire("GetContent", t), t.content) },
        sv = function(e, t, n) { return null !== function(e, t, n) { for (; e && e !== t;) { if (n(e)) return e;
                    e = e.parentNode } return null }(e, t, n) },
        lv = function(e, t, n) { return sv(e, t, function(e) { return e.nodeName === n }) },
        cv = function(e) { return e && "TABLE" === e.nodeName },
        fv = function(e, t, n) { for (var r = new Po(t, e.getParent(t.parentNode, e.isBlock) || e.getRoot()); t = r[n ? "prev" : "next"]();)
                if (_o.isBr(t)) return !0 },
        dv = function(e, t, n, r, o) { var i, a, u = e.getRoot(),
                s = e.schema.getNonEmptyElements(),
                l = e.getParent(o.parentNode, e.isBlock) || u; if (r && _o.isBr(o) && t && e.isEmpty(l)) return T.some(Uu(o.parentNode, e.nodeIndex(o))); for (var c, f, d = new Po(o, l); a = d[r ? "prev" : "next"]();) { if ("false" === e.getContentEditableParent(a) || (f = u, ja(c = a) && !1 === sv(c, f, ms))) return T.none(); if (_o.isText(a) && 0 < a.nodeValue.length) return !1 === lv(a, u, "A") ? T.some(Uu(a, r ? a.nodeValue.length : 0)) : T.none(); if (e.isBlock(a) || s[a.nodeName.toLowerCase()]) return T.none();
                i = a } return n && i ? T.some(Uu(i, 0)) : T.none() },
        hv = function(e, t, n, r) { var o, i, a, u, s, l, c, f, d, h = e.getRoot(),
                m = !1; if (o = r[(n ? "start" : "end") + "Container"], i = r[(n ? "start" : "end") + "Offset"], l = _o.isElement(o) && i === o.childNodes.length, u = e.schema.getNonEmptyElements(), s = n, ja(o)) return T.none(); if (_o.isElement(o) && i > o.childNodes.length - 1 && (s = !1), _o.isDocument(o) && (o = h, i = 0), o === h) { if (s && (a = o.childNodes[0 < i ? i - 1 : 0])) { if (ja(a)) return T.none(); if (u[a.nodeName] || cv(a)) return T.none() } if (o.hasChildNodes()) { if (i = Math.min(!s && 0 < i ? i - 1 : i, o.childNodes.length - 1), o = o.childNodes[i], i = _o.isText(o) && l ? o.data.length : 0, !t && o === h.lastChild && cv(o)) return T.none(); if (function(e, t) { for (; t && t !== e;) { if (_o.isContentEditableFalse(t)) return !0;
                                t = t.parentNode } return !1 }(h, o) || ja(o)) return T.none(); if (o.hasChildNodes() && !1 === cv(o)) { var g = new Po(a = o, h);
                        do { if (_o.isContentEditableFalse(a) || ja(a)) { m = !1; break } if (_o.isText(a) && 0 < a.nodeValue.length) { i = s ? 0 : a.nodeValue.length, o = a, m = !0; break } if (u[a.nodeName.toLowerCase()] && (!(c = a) || !/^(TD|TH|CAPTION)$/.test(c.nodeName))) { i = e.nodeIndex(a), o = a.parentNode, s || i++, m = !0; break } } while (a = s ? g.next() : g.prev()) } } } return t && (_o.isText(o) && 0 === i && dv(e, l, t, !0, o).each(function(e) { o = e.container(), i = e.offset(), m = !0 }), _o.isElement(o) && ((a = o.childNodes[i]) || (a = o.childNodes[i - 1]), !a || !_o.isBr(a) || (d = "A", (f = a).previousSibling && f.previousSibling.nodeName === d) || fv(e, a, !1) || fv(e, a, !0) || dv(e, l, t, !0, a).each(function(e) { o = e.container(), i = e.offset(), m = !0 }))), s && !t && _o.isText(o) && i === o.nodeValue.length && dv(e, l, t, !1, o).each(function(e) { o = e.container(), i = e.offset(), m = !0 }), m ? T.some(Uu(o, i)) : T.none() },
        mv = function(e, t) { var n = t.collapsed,
                r = t.cloneRange(),
                o = Uu.fromRangeStart(t); return hv(e, n, !0, r).each(function(e) { n && Uu.isAbove(o, e) || r.setStart(e.container(), e.offset()) }), n || hv(e, n, !1, r).each(function(e) { r.setEnd(e.container(), e.offset()) }), n && r.collapse(!0), jd(t, r) ? T.none() : T.some(r) },
        gv = function(e) { return 0 === e.dom().length ? (ra(e), T.none()) : T.some(e) },
        pv = function(e, t, n) { var r, o; if (o = t, (r = (r = n) || { format: "html" }).set = !0, r.selection = !0, r.content = o, (n = r).no_events || !(n = e.fire("BeforeSetContent", n)).isDefaultPrevented()) { var i = e.selection.getRng();! function(r, e) { var t = T.from(e.firstChild).map(yr.fromDom),
                        n = T.from(e.lastChild).map(yr.fromDom);
                    r.deleteContents(), r.insertNode(e); var o = t.bind(ro).filter(Er).bind(gv),
                        i = n.bind(oo).filter(Er).bind(gv);
                    Cu([o, t.filter(Er)], function(e, t) { var n, r;
                        n = t.dom(), r = e.dom().data, n.insertData(0, r), ra(e) }), Cu([i, n.filter(Er)], function(e, t) { var n = t.dom().length;
                        t.dom().appendData(e.dom().data), r.setEnd(t.dom(), n), ra(e) }), r.collapse(!1) }(i, i.createContextualFragment(n.content)), e.selection.setRng(i), Rp(e, i), n.no_events || e.fire("SetContent", n) } else e.fire("SetContent", n) },
        vv = function(e, t, n, r, o) { var i = n ? t.startContainer : t.endContainer,
                a = n ? t.startOffset : t.endOffset; return T.from(i).map(yr.fromDom).map(function(e) { return r && t.collapsed ? e : so(e, o(e, a)).getOr(e) }).bind(function(e) { return Nr(e) ? T.some(e) : to(e) }).map(function(e) { return e.dom() }).getOr(e) },
        yv = function(e, t, n) { return vv(e, t, !0, n, function(e, t) { return Math.min(e.dom().childNodes.length, t) }) },
        bv = function(e, t, n) { return vv(e, t, !1, n, function(e, t) { return 0 < t ? t - 1 : t }) },
        Cv = function(e, t) { for (var n = e; e && _o.isText(e) && 0 === e.length;) e = t ? e.nextSibling : e.previousSibling; return e || n },
        wv = function(e, t, n) { if (e && e.hasOwnProperty(t)) { var r = G(e[t], function(e) { return e !== n });
                0 === r.length ? delete e[t] : e[t] = r } },
        xv = function(e) { return !!e.select },
        zv = function(e) { return !(!e || !e.ownerDocument) && Zr(yr.fromDom(e.ownerDocument), yr.fromDom(e)) },
        Nv = function(u, s, e, l) { var n, t, c, f, r = function p(i, n) { var a, u; return { selectorChangedWithUnbind: function(e, t) { return a || (a = {}, u = {}, n.on("NodeChange", function(e) { var n = e.element,
                                    r = i.getParents(n, null, i.getRoot()),
                                    o = {};
                                un.each(a, function(e, n) { un.each(r, function(t) { if (i.is(t, n)) return u[n] || (un.each(e, function(e) { e(!0, { node: t, selector: n, parents: r }) }), u[n] = e), o[n] = e, !1 }) }), un.each(u, function(e, t) { o[t] || (delete u[t], un.each(e, function(e) { e(!1, { node: n, selector: t, parents: r }) })) }) })), a[e] || (a[e] = []), a[e].push(t), { unbind: function() { wv(a, e, t), wv(u, e, t) } } } } }(u, l).selectorChangedWithUnbind,
                o = function(e, t) { return pv(l, e, t) },
                i = function(e) { var t = h();
                    t.collapse(!!e), a(t) },
                d = function() { return s.getSelection ? s.getSelection() : s.document.selection },
                h = function() { var e, t, n, r, o = function(e, t, n) { try { return t.compareBoundaryPoints(e, n) } catch (r) { return -1 } }; if (!s) return null; if (null == (r = s.document)) return null; if (l.bookmark !== undefined && !1 === kf(l)) { var i = bf(l); if (i.isSome()) return i.map(function(e) { return Op(l, [e])[0] }).getOr(r.createRange()) } try {
                        (e = d()) && !_o.isRestrictedNode(e.anchorNode) && (t = 0 < e.rangeCount ? e.getRangeAt(0) : e.createRange ? e.createRange() : r.createRange()) } catch (a) {} return (t = Op(l, [t])[0]) || (t = r.createRange ? r.createRange() : r.body.createTextRange()), t.setStart && 9 === t.startContainer.nodeType && t.collapsed && (n = u.getRoot(), t.setStart(n, 0), t.setEnd(n, 0)), c && f && (0 === o(t.START_TO_START, t, c) && 0 === o(t.END_TO_END, t, c) ? t = f : f = c = null), t },
                a = function(e, t) { var n, r; if ((o = e) && (xv(o) || zv(o.startContainer) && zv(o.endContainer))) { var o, i = xv(e) ? e : null; if (i) { f = null; try { i.select() } catch (a) {} } else { if (n = d(), e = l.fire("SetSelectionRange", { range: e, forward: t }).range, n) { f = e; try { n.removeAllRanges(), n.addRange(e) } catch (a) {}!1 === t && n.extend && (n.collapse(e.endContainer, e.endOffset), n.extend(e.startContainer, e.startOffset)), c = 0 < n.rangeCount ? n.getRangeAt(0) : null }
                            e.collapsed || e.startContainer !== e.endContainer || !n.setBaseAndExtent || Fe.ie || e.endOffset - e.startOffset < 2 && e.startContainer.hasChildNodes() && (r = e.startContainer.childNodes[e.startOffset]) && "IMG" === r.tagName && (n.setBaseAndExtent(e.startContainer, e.startOffset, e.endContainer, e.endOffset), n.anchorNode === e.startContainer && n.focusNode === e.endContainer || n.setBaseAndExtent(r, 0, r, 1)), l.fire("AfterSetSelectionRange", { range: e, forward: t }) } } },
                m = function() { var e, t, n = d(); return !(n && n.anchorNode && n.focusNode) || ((e = u.createRng()).setStart(n.anchorNode, n.anchorOffset), e.collapse(!0), (t = u.createRng()).setStart(n.focusNode, n.focusOffset), t.collapse(!0), e.compareBoundaryPoints(e.START_TO_START, t) <= 0) },
                g = { bookmarkManager: null, controlSelection: null, dom: u, win: s, serializer: e, editor: l, collapse: i, setCursorLocation: function(e, t) { var n = u.createRng();
                        e ? (n.setStart(e, t), n.setEnd(e, t), a(n), i(!1)) : (Kd(u, n, l.getBody(), !0), a(n)) }, getContent: function(e) { return uv(l, e) }, setContent: o, getBookmark: function(e, t) { return n.getBookmark(e, t) }, moveToBookmark: function(e) { return n.moveToBookmark(e) }, select: function(e, t) { var r, n, o; return (r = u, n = e, o = t, T.from(n).map(function(e) { var t = r.nodeIndex(e),
                                n = r.createRng(); return n.setStart(e.parentNode, t), n.setEnd(e.parentNode, t + 1), o && (Kd(r, n, e, !0), Kd(r, n, e, !1)), n })).each(a), e }, isCollapsed: function() { var e = h(),
                            t = d(); return !(!e || e.item) && (e.compareEndPoints ? 0 === e.compareEndPoints("StartToEnd", e) : !t || e.collapsed) }, isForward: m, setNode: function(e) { return o(u.getOuterHTML(e)), e }, getNode: function() { return e = l.getBody(), (t = h()) ? (r = t.startContainer, o = t.endContainer, i = t.startOffset, a = t.endOffset, n = t.commonAncestorContainer, !t.collapsed && (r === o && a - i < 2 && r.hasChildNodes() && (n = r.childNodes[i]), 3 === r.nodeType && 3 === o.nodeType && (r = r.length === i ? Cv(r.nextSibling, !0) : r.parentNode, o = 0 === a ? Cv(o.previousSibling, !1) : o.parentNode, r && r === o)) ? r : n && 3 === n.nodeType ? n.parentNode : n) : e; var e, t, n, r, o, i, a }, getSel: d, setRng: a, getRng: h, getStart: function(e) { return yv(l.getBody(), h(), e) }, getEnd: function(e) { return bv(l.getBody(), h(), e) }, getSelectedBlocks: function(e, t) { return function(e, t, n, r) { var o, i, a = []; if (i = e.getRoot(), n = e.getParent(n || yv(i, t, t.collapsed), e.isBlock), r = e.getParent(r || bv(i, t, t.collapsed), e.isBlock), n && n !== i && a.push(n), n && r && n !== r)
                                for (var u = new Po(o = n, i);
                                    (o = u.next()) && o !== r;) e.isBlock(o) && a.push(o); return r && n !== r && r !== i && a.push(r), a }(u, h(), e, t) }, normalize: function() { var e = h(),
                            t = d(); if (Yp(t) || !Xd(l)) return e; var n = mv(u, e); return n.each(function(e) { a(e, m()) }), n.getOr(e) }, selectorChanged: function(e, t) { return r(e, t), g }, selectorChangedWithUnbind: r, getScrollContainer: function() { for (var e, t = u.getRoot(); t && "BODY" !== t.nodeName;) { if (t.scrollHeight > t.clientHeight) { e = t; break }
                            t = t.parentNode } return e }, scrollIntoView: function(e, t) { return Mp(l, e, t) }, placeCaretAt: function(e, t) { return a(Bp(e, t, l.getDoc())) }, getBoundingClientRect: function() { var e = h(); return e.collapsed ? $u.fromRangeStart(e).getClientRects()[0] : e.getBoundingClientRect() }, destroy: function() { s = c = f = null, t.destroy() } }; return n = Ep(g), t = Tp(g, l), g.bookmarkManager = n, g.controlSelection = t, g },
        Ev = _o.isText,
        Sv = function(e) { return Ev(e) && e.data[0] === Pa },
        kv = function(e) { return Ev(e) && e.data[e.data.length - 1] === Pa },
        Tv = function(e) { return e.ownerDocument.createTextNode(Pa) },
        Av = function(e, t) { return e ? function(e) { if (Ev(e.previousSibling)) return kv(e.previousSibling) || e.previousSibling.appendData(Pa), e.previousSibling; if (Ev(e)) return Sv(e) || e.insertData(0, Pa), e; var t = Tv(e); return e.parentNode.insertBefore(t, e), t }(t) : function(e) { if (Ev(e.nextSibling)) return Sv(e.nextSibling) || e.nextSibling.insertData(0, Pa), e.nextSibling; if (Ev(e)) return kv(e) || e.appendData(Pa), e; var t = Tv(e); return e.nextSibling ? e.parentNode.insertBefore(t, e.nextSibling) : e.parentNode.appendChild(t), t }(t) },
        Mv = d(Av, !0),
        Rv = d(Av, !1),
        Dv = function(e, t) { return _o.isText(e.container()) ? Av(t, e.container()) : Av(t, e.getNode()) },
        Bv = function(e, t) { var n = t.get(); return n && e.container() === n && Ua(n) },
        Ov = function(n, e) { return e.fold(function(e) { Es.remove(n.get()); var t = Mv(e); return n.set(t), T.some($u(t, t.length - 1)) }, function(e) { return xl.firstPositionIn(e).map(function(e) { if (Bv(e, n)) return $u(n.get(), 1);
                    Es.remove(n.get()); var t = Dv(e, !0); return n.set(t), $u(t, 1) }) }, function(e) { return xl.lastPositionIn(e).map(function(e) { if (Bv(e, n)) return $u(n.get(), n.get().length - 1);
                    Es.remove(n.get()); var t = Dv(e, !1); return n.set(t), $u(t, t.length - 1) }) }, function(e) { Es.remove(n.get()); var t = Rv(e); return n.set(t), T.some($u(t, 1)) }) },
        Hv = /[\u0591-\u07FF\uFB1D-\uFDFF\uFE70-\uFEFC]/,
        _v = function(e, t) { if (!t) return t; var n = t.container(),
                r = t.offset(); return e ? Ua(n) ? _o.isText(n.nextSibling) ? $u(n.nextSibling, 0) : $u.after(n) : Wa(t) ? $u(n, r + 1) : t : Ua(n) ? _o.isText(n.previousSibling) ? $u(n.previousSibling, n.previousSibling.data.length) : $u.before(n) : Ka(t) ? $u(n, r - 1) : t },
        Pv = { isInlineTarget: function(e, t) { return Yr(yr.fromDom(t), Kc(e)) }, findRootInline: function(e, t, n) { var r, o, i, a = (r = e, o = t, i = n, G(_i.DOM.getParents(i.container(), "*", o), r)); return T.from(a[a.length - 1]) }, isRtl: function(e) { return "rtl" === _i.DOM.getStyle(e, "direction", !0) || (t = e.textContent, Hv.test(t)); var t }, isAtZwsp: function(e) { return Wa(e) || Ka(e) }, normalizePosition: _v, normalizeForwards: d(_v, !0), normalizeBackwards: d(_v, !1), hasSameParentBlock: function(e, t, n) { var r = Us(t, e),
                    o = Us(n, e); return r && r === o } },
        Lv = function(e, t) { for (var n = 0; n < e.length; n++) { var r = e[n].apply(null, t); if (r.isSome()) return r } return T.none() },
        Vv = nf([{ before: ["element"] }, { start: ["element"] }, { end: ["element"] }, { after: ["element"] }]),
        Iv = function(e, t) { var n = Us(t, e); return n || e },
        Fv = function(e, t, n) { var r = Pv.normalizeForwards(n),
                o = Iv(t, r.container()); return Pv.findRootInline(e, o, r).fold(function() { return xl.nextPosition(o, r).bind(d(Pv.findRootInline, e, o)).map(function(e) { return Vv.before(e) }) }, T.none) },
        Uv = function(e, t) { return null === gs(e, t) },
        jv = function(e, t, n) { return Pv.findRootInline(e, t, n).filter(d(Uv, t)) },
        qv = function(e, t, n) { var r = Pv.normalizeBackwards(n); return jv(e, t, r).bind(function(e) { return xl.prevPosition(e, r).isNone() ? T.some(Vv.start(e)) : T.none() }) },
        $v = function(e, t, n) { var r = Pv.normalizeForwards(n); return jv(e, t, r).bind(function(e) { return xl.nextPosition(e, r).isNone() ? T.some(Vv.end(e)) : T.none() }) },
        Wv = function(e, t, n) { var r = Pv.normalizeBackwards(n),
                o = Iv(t, r.container()); return Pv.findRootInline(e, o, r).fold(function() { return xl.prevPosition(o, r).bind(d(Pv.findRootInline, e, o)).map(function(e) { return Vv.after(e) }) }, T.none) },
        Kv = function(e) { return !1 === Pv.isRtl(Yv(e)) },
        Xv = function(e, t, n) { return Lv([Fv, qv, $v, Wv], [e, t, n]).filter(Kv) },
        Yv = function(e) { return e.fold(W, W, W, W) },
        Gv = function(e) { return e.fold($("before"), $("start"), $("end"), $("after")) },
        Jv = function(e) { return e.fold(Vv.before, Vv.before, Vv.after, Vv.after) },
        Qv = function(n, e, r, t, o, i) { return Cu([Pv.findRootInline(e, r, t), Pv.findRootInline(e, r, o)], function(e, t) { return e !== t && Pv.hasSameParentBlock(r, e, t) ? Vv.after(n ? e : t) : i }).getOr(i) },
        Zv = function(e, r) { return e.fold($(!0), function(e) { return n = r, !(Gv(t = e) === Gv(n) && Yv(t) === Yv(n)); var t, n }) },
        ey = function(e, t) { return e ? t.fold(q(T.some, Vv.start), T.none, q(T.some, Vv.after), T.none) : t.fold(T.none, q(T.some, Vv.before), T.none, q(T.some, Vv.end)) },
        ty = function(a, u, s, l) { var e = Pv.normalizePosition(a, l),
                c = Xv(u, s, e); return Xv(u, s, e).bind(d(ey, a)).orThunk(function() { return t = a, n = u, r = s, o = c, e = l, i = Pv.normalizePosition(t, e), xl.fromPosition(t, r, i).map(d(Pv.normalizePosition, t)).fold(function() { return o.map(Jv) }, function(e) { return Xv(n, r, e).map(d(Qv, t, n, r, i, e)).filter(d(Zv, o)) }).filter(Kv); var t, n, r, o, e, i }) },
        ny = Xv,
        ry = ty,
        oy = (d(ty, !1), d(ty, !0), Jv),
        iy = function(e) { return e.fold(Vv.start, Vv.start, Vv.end, Vv.end) },
        ay = function(e) { return O(e.selection.getSel().modify) },
        uy = function(e, t, n) { var r = e ? 1 : -1; return t.setRng($u(n.container(), n.offset() + r).toRange()), t.getSel().modify("move", e ? "forward" : "backward", "word"), !0 },
        sy = function(e, t) { var n = t.selection.getRng(),
                r = e ? $u.fromRangeEnd(n) : $u.fromRangeStart(n); return !!ay(t) && (e && Wa(r) ? uy(!0, t.selection, r) : !(e || !Ka(r)) && uy(!1, t.selection, r)) },
        ly = function(e, t) { var n = e.dom.createRng();
            n.setStart(t.container(), t.offset()), n.setEnd(t.container(), t.offset()), e.selection.setRng(n) },
        cy = function(e) { return !1 !== e.settings.inline_boundaries },
        fy = function(e, t) { e ? t.setAttribute("data-mce-selected", "inline-boundary") : t.removeAttribute("data-mce-selected") },
        dy = function(t, e, n) { return Ov(e, n).map(function(e) { return ly(t, e), n }) },
        hy = function(e, t, n) { return function() { return !!cy(t) && sy(e, t) } },
        my = { move: function(a, u, s) { return function() { return !!cy(a) && (t = a, n = u, e = s, r = t.getBody(), o = $u.fromRangeStart(t.selection.getRng()), i = d(Pv.isInlineTarget, t), ry(e, i, r, o).bind(function(e) { return dy(t, n, e) })).isSome(); var t, n, e, r, o, i } }, moveNextWord: d(hy, !0), movePrevWord: d(hy, !1), setupSelectedState: function(a) { var u = qi(null),
                    s = d(Pv.isInlineTarget, a); return a.on("NodeChange", function(e) { var t, n, r, o, i;
                    cy(a) && (t = s, n = a.dom, r = e.parents, o = G(n.select('*[data-mce-selected="inline-boundary"]'), t), i = G(r, t), F(ue(o, i), d(fy, !1)), F(ue(i, o), d(fy, !0)), function(e, t) { if (e.selection.isCollapsed() && !0 !== e.composing && t.get()) { var n = $u.fromRangeStart(e.selection.getRng());
                            $u.isTextPosition(n) && !1 === Pv.isAtZwsp(n) && (ly(e, Es.removeAndReposition(t.get(), n)), t.set(null)) } }(a, u), function(n, r, o, e) { if (r.selection.isCollapsed()) { var t = G(e, n);
                            F(t, function(e) { var t = $u.fromRangeStart(r.selection.getRng());
                                ny(n, r.getBody(), t).bind(function(e) { return dy(r, o, e) }) }) } }(s, a, u, e.parents)) }), u }, setCaretPosition: ly };
    (Np = zp || (zp = {}))[Np.Br = 0] = "Br", Np[Np.Block = 1] = "Block", Np[Np.Wrap = 2] = "Wrap", Np[Np.Eol = 3] = "Eol"; var gy, py, vy, yy, by = function(e, t) { return e === ju.Backwards ? t.reverse() : t },
        Cy = function(e, t, n, r) { for (var o, i, a, u, s, l, c = fl(n), f = r, d = []; f && (s = c, l = f, o = t === ju.Forwards ? s.next(l) : s.prev(l));) { if (_o.isBr(o.getNode(!1))) return t === ju.Forwards ? { positions: by(t, d).concat([o]), breakType: zp.Br, breakAt: T.some(o) } : { positions: by(t, d), breakType: zp.Br, breakAt: T.some(o) }; if (o.isVisible()) { if (e(f, o)) { var h = (i = t, a = f, u = o, _o.isBr(u.getNode(i === ju.Forwards)) ? zp.Br : !1 === js(a, u) ? zp.Block : zp.Wrap); return { positions: by(t, d), breakType: h, breakAt: T.some(o) } }
                    d.push(o), f = o } else f = o } return { positions: by(t, d), breakType: zp.Eol, breakAt: T.none() } },
        wy = function(n, r, o, e) { return r(o, e).breakAt.map(function(e) { var t = r(o, e).positions; return n === ju.Backwards ? t.concat(e) : [e].concat(t) }).getOr([]) },
        xy = function(e, i) { return Q(e, function(e, o) { return e.fold(function() { return T.some(o) }, function(r) { return Cu([ce(r.getClientRects()), ce(o.getClientRects())], function(e, t) { var n = Math.abs(i - e.left); return Math.abs(i - t.left) <= n ? o : r }).or(e) }) }, T.none()) },
        zy = function(t, e) { return ce(e.getClientRects()).bind(function(e) { return xy(t, e.left) }) },
        Ny = d(Cy, Uu.isAbove, -1),
        Ey = d(Cy, Uu.isBelow, 1),
        Sy = d(wy, -1, Ny),
        ky = d(wy, 1, Ey),
        Ty = _o.isContentEditableFalse,
        Ay = pu,
        My = function(e, t, n, r) { var o, i, a, u, s, l, c, f, d; if (d = Ay(r), o = Js(e, t.getBody(), r), i = n(t.getBody(), hh(1), o), a = G(i, mh(1)), s = tn.last(o.getClientRects()), (Wh(o) || qh(o)) && (d = o.getNode()), (Kh(o) || $h(o)) && (d = o.getNode(!0)), !s) return null; if (l = s.left, (u = Ch(a, l)) && Ty(u.node)) return c = Math.abs(l - u.left), f = Math.abs(l - u.right), Sh(e, t, u.node, c < f, !0); if (d) { var h = function(e, t, n, r) { var o, i, a, u, s, l, c = fl(t),
                        f = [],
                        d = 0,
                        h = function(e) { return tn.last(e.getClientRects()) };
                    l = h(u = 1 === e ? (o = c.next, i = gu, a = mu, $u.after(r)) : (o = c.prev, i = mu, a = gu, $u.before(r)));
                    do { if (u.isVisible() && !a(s = h(u), l)) { if (0 < f.length && i(s, tn.last(f)) && d++, (s = fu(s)).position = u, s.line = d, n(s)) return f;
                            f.push(s) } } while (u = o(u)); return f }(e, t.getBody(), hh(1), d); if (u = Ch(G(h, mh(1)), l)) return Ah(t, u.position.toRange(), !0); if (u = tn.last(G(h, mh(0)))) return Ah(t, u.position.toRange(), !0) } },
        Ry = function(e, t, n) { var r, o, i, a, u = fl(e.getBody()),
                s = d(Zs, u.next),
                l = d(Zs, u.prev); if (n.collapsed && e.settings.forced_root_block) { if (!(r = e.dom.getParent(n.startContainer, "PRE"))) return;
                (1 === t ? s($u.fromRangeStart(n)) : l($u.fromRangeStart(n))) || (a = (i = e).dom.create(xc(i)), (!Fe.ie || 11 <= Fe.ie) && (a.innerHTML = '<br data-mce-bogus="1">'), o = a, 1 === t ? e.$(r).after(o) : e.$(r).before(o), e.selection.select(o, !0), e.selection.collapse()) } },
        Dy = function(e, t) { var n, r = fl(e.getBody()),
                o = d(Zs, r.next),
                i = d(Zs, r.prev),
                a = t ? ju.Forwards : ju.Backwards,
                u = t ? o : i,
                s = e.selection.getRng(); return (n = function(e, t, n, r) { var o = e === ju.Forwards,
                    i = o ? Wh : Kh; if (!r.collapsed) { var a = Ay(r); if (Ty(a)) return Sh(e, t, a, e === ju.Backwards, !0) } var u = Qa(r),
                    s = Js(e, t.getBody(), r); if (i(s)) return kh(t, s.getNode(!o)); var l = Pv.normalizePosition(o, n(s)); if (!l) return u ? r : null; if (i(l)) return Sh(e, t, l.getNode(!o), o, !0); var c = n(l); return c && i(c) && el(l, c) ? Sh(e, t, c.getNode(!o), o, !0) : u ? Ah(t, l.toRange(), !0) : null }(a, e, u, s)) ? n : (n = Ry(e, a, s)) || null },
        By = function(t, n) { return function() { var e = Dy(t, n); return !!e && (t.selection.setRng(e), !0) } },
        Oy = function(u, s) { return function() { var e, t, n, r, o, i, a = (r = (t = s) ? 1 : -1, o = t ? dh : fh, i = (e = u).selection.getRng(), (n = My(r, e, o, i)) ? n : (n = Ry(e, r, i)) || null); return !!a && (u.selection.setRng(a), !0) } },
        Hy = function(r, o) { return function() { var t, e = o ? $u.fromRangeEnd(r.selection.getRng()) : $u.fromRangeStart(r.selection.getRng()),
                    n = o ? Ey(r.getBody(), e) : Ny(r.getBody(), e); return (o ? fe(n.positions) : ce(n.positions)).filter((t = o, function(e) { return t ? Kh(e) : Wh(e) })).fold($(!1), function(e) { return r.selection.setRng(e.toRange()), !0 }) } },
        _y = function(e, t, n, r, o) { var i, a, u, s, l = ga(yr.fromDom(n), "td,th,caption").map(function(e) { return e.dom() }),
                c = G((i = e, oe(l, function(e) { var t, n, r = (t = fu(e.getBoundingClientRect()), n = -1, { left: t.left - n, top: t.top - n, right: t.right + 2 * n, bottom: t.bottom + 2 * n, width: t.width + n, height: t.height + n }); return [{ x: r.left, y: i(r), cell: e }, { x: r.right, y: i(r), cell: e }] })), function(e) { return t(e, o) }); return (a = c, u = r, s = o, Q(a, function(e, r) { return e.fold(function() { return T.some(r) }, function(e) { var t = Math.sqrt(Math.abs(e.x - u) + Math.abs(e.y - s)),
                        n = Math.sqrt(Math.abs(r.x - u) + Math.abs(r.y - s)); return T.some(n < t ? r : e) }) }, T.none())).map(function(e) { return e.cell }) },
        Py = d(_y, function(e) { return e.bottom }, function(e, t) { return e.y < t }),
        Ly = d(_y, function(e) { return e.top }, function(e, t) { return e.y > t }),
        Vy = function(t, n) { return ce(n.getClientRects()).bind(function(e) { return Py(t, e.left, e.top) }).bind(function(e) { return zy((t = e, xl.lastPositionIn(t).map(function(e) { return Ny(t, e).positions.concat(e) }).getOr([])), n); var t }) },
        Iy = function(t, n) { return fe(n.getClientRects()).bind(function(e) { return Ly(t, e.left, e.top) }).bind(function(e) { return zy((t = e, xl.firstPositionIn(t).map(function(e) { return [e].concat(Ey(t, e).positions) }).getOr([])), n); var t }) },
        Fy = function(e, t) { e.selection.setRng(t), Rp(e, t) },
        Uy = function(e, t, n) { var r, o, i, a, u = e(t, n); return (a = u).breakType === zp.Wrap && 0 === a.positions.length || !_o.isBr(n.getNode()) && (i = u).breakType === zp.Br && 1 === i.positions.length ? (r = e, o = t, !u.breakAt.map(function(e) { return r(o, e).breakAt.isSome() }).getOr(!1)) : u.breakAt.isNone() },
        jy = d(Uy, Ny),
        qy = d(Uy, Ey),
        $y = function(e, t, n, r) { var o, i, a, u, s = e.selection.getRng(),
                l = t ? 1 : -1; if (Ms() && (o = t, i = s, a = n, u = $u.fromRangeStart(i), xl.positionIn(!o, a).map(function(e) { return e.isEqual(u) }).getOr(!1))) { var c = Sh(l, e, n, !t, !0); return Fy(e, c), !0 } return !1 },
        Wy = function(e, t) { var n = t.getNode(e); return _o.isElement(n) && "TABLE" === n.nodeName ? T.some(n) : T.none() },
        Ky = function(u, s, l) { var e = Wy(!!s, l),
                t = !1 === s;
            e.fold(function() { return Fy(u, l.toRange()) }, function(a) { return xl.positionIn(t, u.getBody()).filter(function(e) { return e.isEqual(l) }).fold(function() { return Fy(u, l.toRange()) }, function(e) { return n = s, o = a, t = l, void((i = xc(r = u)) ? r.undoManager.transact(function() { var e = yr.fromTag(i);
                        _r(e, zc(r)), ea(e, yr.fromTag("br")), n ? Qi(yr.fromDom(o), e) : Ji(yr.fromDom(o), e); var t = r.dom.createRng();
                        t.setStart(e.dom(), 0), t.setEnd(e.dom(), 0), Fy(r, t) }) : Fy(r, t.toRange())); var n, r, o, t, i }) }) },
        Xy = function(e, t, n, r) { var o, i, a, u, s, l, c = e.selection.getRng(),
                f = $u.fromRangeStart(c),
                d = e.getBody(); if (t || !jy(r, f)) return !(!t || !qy(r, f)) && (o = d, h = Iy(i = n, a = f).orThunk(function() { return ce(a.getClientRects()).bind(function(e) { return xy(ky(o, $u.after(i)), e.left) }) }).getOr($u.after(i)), Ky(e, t, h), !0); var h = (u = d, Vy(s = n, l = f).orThunk(function() { return ce(l.getClientRects()).bind(function(e) { return xy(Sy(u, $u.before(s)), e.left) }) }).getOr($u.before(s))); return Ky(e, t, h), !0 },
        Yy = function(t, n) { return function() { return T.from(t.dom.getParent(t.selection.getNode(), "td,th")).bind(function(e) { return T.from(t.dom.getParent(e, "table")).map(function(e) { return $y(t, n, e) }) }).getOr(!1) } },
        Gy = function(n, r) { return function() { return T.from(n.dom.getParent(n.selection.getNode(), "td,th")).bind(function(t) { return T.from(n.dom.getParent(t, "table")).map(function(e) { return Xy(n, r, e, t) }) }).getOr(!1) } },
        Jy = function(e) { return V(["figcaption"], xr(e)) },
        Qy = function(e) { var t = j.document.createRange(); return t.setStartBefore(e.dom()), t.setEndBefore(e.dom()), t },
        Zy = function(e, t, n) { n ? ea(e, t) : Zi(e, t) },
        eb = function(e, t, n, r) { return "" === t ? (c = e, f = r, d = yr.fromTag("br"), Zy(c, d, f), Qy(d)) : (o = e, i = r, a = t, u = n, s = yr.fromTag(a), l = yr.fromTag("br"), _r(s, u), ea(s, l), Zy(o, s, i), Qy(l)); var o, i, a, u, s, l, c, f, d },
        tb = function(e, t, n) { return t ? (o = e.dom(), Ey(o, n).breakAt.isNone()) : (r = e.dom(), Ny(r, n).breakAt.isNone()); var r, o },
        nb = function(t, n) { var e, r, o, i = yr.fromDom(t.getBody()),
                a = $u.fromRangeStart(t.selection.getRng()),
                u = xc(t),
                s = zc(t); return (e = a, r = i, o = d(Qr, r), ba(yr.fromDom(e.container()), Io, o).filter(Jy)).exists(function() { if (tb(i, n, a)) { var e = eb(i, u, s, n); return t.selection.setRng(e), !0 } return !1 }) },
        rb = function(e, t) { return function() { return !!e.selection.isCollapsed() && nb(e, t) } },
        ob = function(e, r) { return oe(X(e, function(e) { return rp({ shiftKey: !1, altKey: !1, ctrlKey: !1, metaKey: !1, keyCode: 0, action: i }, e) }), function(e) { return t = e, (n = r).keyCode === t.keyCode && n.shiftKey === t.shiftKey && n.altKey === t.altKey && n.ctrlKey === t.ctrlKey && n.metaKey === t.metaKey ? [e] : []; var t, n }) },
        ib = function(e) { for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]; var r = Array.prototype.slice.call(arguments, 1); return function() { return e.apply(null, r) } },
        ab = function(e, t) { return Z(ob(e, t), function(e) { return e.action() }) },
        ub = function(i, a) { i.on("keydown", function(e) { var t, n, r, o;!1 === e.isDefaultPrevented() && (t = i, n = a, r = e, o = pr.detect().os, ab([{ keyCode: Rh.RIGHT, action: By(t, !0) }, { keyCode: Rh.LEFT, action: By(t, !1) }, { keyCode: Rh.UP, action: Oy(t, !1) }, { keyCode: Rh.DOWN, action: Oy(t, !0) }, { keyCode: Rh.RIGHT, action: Yy(t, !0) }, { keyCode: Rh.LEFT, action: Yy(t, !1) }, { keyCode: Rh.UP, action: Gy(t, !1) }, { keyCode: Rh.DOWN, action: Gy(t, !0) }, { keyCode: Rh.RIGHT, action: my.move(t, n, !0) }, { keyCode: Rh.LEFT, action: my.move(t, n, !1) }, { keyCode: Rh.RIGHT, ctrlKey: !o.isOSX(), altKey: o.isOSX(), action: my.moveNextWord(t, n) }, { keyCode: Rh.LEFT, ctrlKey: !o.isOSX(), altKey: o.isOSX(), action: my.movePrevWord(t, n) }, { keyCode: Rh.UP, action: rb(t, !1) }, { keyCode: Rh.DOWN, action: rb(t, !0) }], r).each(function(e) { r.preventDefault() })) }) },
        sb = function(e, t) { return Zr(e, t) ? ba(t, function(e) { return jo(e) || $o(e) }, (n = e, function(e) { return Qr(n, yr.fromDom(e.dom().parentNode)) })) : T.none(); var n },
        lb = function(e) { var t, n, r;
            e.dom.isEmpty(e.getBody()) && (e.setContent(""), n = (t = e).getBody(), r = n.firstChild && t.dom.isBlock(n.firstChild) ? n.firstChild : n, t.selection.setCursorLocation(r, 0)) },
        cb = function(i, a, u) { return Cu([xl.firstPositionIn(u), xl.lastPositionIn(u)], function(e, t) { var n = Pv.normalizePosition(!0, e),
                    r = Pv.normalizePosition(!1, t),
                    o = Pv.normalizePosition(!1, a); return i ? xl.nextPosition(u, o).map(function(e) { return e.isEqual(r) && a.isEqual(n) }).getOr(!1) : xl.prevPosition(u, o).map(function(e) { return e.isEqual(n) && a.isEqual(r) }).getOr(!1) }).getOr(!0) },
        fb = Ur("block", "position"),
        db = Ur("from", "to"),
        hb = function(e, t) { var n = yr.fromDom(e),
                r = yr.fromDom(t.container()); return sb(n, r).map(function(e) { return fb(e, t) }) },
        mb = function(o, i, e) { var t = hb(o, $u.fromRangeStart(e)),
                n = t.bind(function(e) { return xl.fromPosition(i, o, e.position()).bind(function(e) { return hb(o, e).map(function(e) { return t = o, n = i, r = e, _o.isBr(r.position().getNode()) && !1 === Hm(r.block()) ? xl.positionIn(!1, r.block().dom()).bind(function(e) { return e.isEqual(r.position()) ? xl.fromPosition(n, t, e).bind(function(e) { return hb(t, e) }) : T.some(r) }).getOr(r) : r; var t, n, r }) }) }); return Cu([t, n], db).filter(function(e) { return !1 === Qr((r = e).from().block(), r.to().block()) && to((n = e).from().block()).bind(function(t) { return to(n.to().block()).filter(function(e) { return Qr(t, e) }) }).isSome() && (t = e, !1 === _o.isContentEditableFalse(t.from().block()) && !1 === _o.isContentEditableFalse(t.to().block())); var t, n, r }) },
        gb = function(e, t, n) { return n.collapsed ? mb(e, t, n) : T.none() },
        pb = function(e) { var t, n = (t = uo(e), ee(t, Io).fold(function() { return t }, function(e) { return t.slice(0, e) })); return F(n, ra), n },
        vb = function(e, t) { var n = Ld(t, e); return Z(n.reverse(), Hm).each(ra) },
        yb = function(e, t, n, r) { if (Hm(n)) return vm(n), xl.firstPositionIn(n.dom());
            0 === G(io(r), function(e) { return !Hm(e) }).length && Hm(t) && Ji(r, yr.fromTag("br")); var o = xl.prevPosition(n.dom(), $u.before(r.dom())); return F(pb(t), function(e) { Ji(r, e) }), vb(e, t), o },
        bb = function(e, t, n) { if (Hm(n)) return ra(n), Hm(t) && vm(t), xl.firstPositionIn(t.dom()); var r = xl.lastPositionIn(n.dom()); return F(pb(t), function(e) { ea(n, e) }), vb(e, t), r },
        Cb = function(e, t) { return Zr(t, e) ? (n = Ld(e, t), T.from(n[n.length - 1])) : T.none(); var n },
        wb = function(e, t) { xl.positionIn(e, t.dom()).map(function(e) { return e.getNode() }).map(yr.fromDom).filter(Uo).each(ra) },
        xb = function(e, t, n) { return wb(!0, t), wb(!1, n), Cb(t, n).fold(d(bb, e, t, n), d(yb, e, t, n)) },
        zb = function(e, t, n, r) { return t ? xb(e, r, n) : xb(e, n, r) },
        Nb = function(t, n) { var e, r = yr.fromDom(t.getBody()); return (e = gb(r.dom(), n, t.selection.getRng()).bind(function(e) { return zb(r, n, e.from().block(), e.to().block()) })).each(function(e) { t.selection.setRng(e.toRange()) }), e.isSome() },
        Eb = function(e, t) { var n = yr.fromDom(t),
                r = d(Qr, e); return ya(n, Xo, r).isSome() },
        Sb = function(e, t) { var n, r, o = xl.prevPosition(e.dom(), $u.fromRangeStart(t)).isNone(),
                i = xl.nextPosition(e.dom(), $u.fromRangeEnd(t)).isNone(); return !(Eb(n = e, (r = t).startContainer) || Eb(n, r.endContainer)) && o && i },
        kb = function(e) { var n, r, o, t, i = yr.fromDom(e.getBody()),
                a = e.selection.getRng(); return Sb(i, a) ? ((t = e).setContent(""), t.selection.setCursorLocation(), !0) : (n = i, r = e.selection, o = r.getRng(), Cu([sb(n, yr.fromDom(o.startContainer)), sb(n, yr.fromDom(o.endContainer))], function(e, t) { return !1 === Qr(e, t) && (o.deleteContents(), zb(n, !0, e, t).each(function(e) { r.setRng(e.toRange()) }), !0) }).getOr(!1)) },
        Tb = function(e, t) { return !e.selection.isCollapsed() && kb(e) },
        Ab = function(e) { return Qs(e).exists(Uo) },
        Mb = function(e, t, n) { var r = G(Ld(yr.fromDom(n.container()), t), Io),
                o = ce(r).getOr(t); return xl.fromPosition(e, o.dom(), n).filter(Ab) },
        Rb = function(e, t) { return Qs(t).exists(Uo) || Mb(!0, e, t).isSome() },
        Db = function(e, t) { return (n = t, T.from(n.getNode(!0)).map(yr.fromDom)).exists(Uo) || Mb(!1, e, t).isSome(); var n },
        Bb = d(Mb, !1),
        Ob = d(Mb, !0),
        Hb = nf([{ remove: ["element"] }, { moveToElement: ["element"] }, { moveToPosition: ["position"] }]),
        _b = function(e, t, n, r) { var o = r.getNode(!1 === t); return sb(yr.fromDom(e), yr.fromDom(n.getNode())).map(function(e) { return Hm(e) ? Hb.remove(e.dom()) : Hb.moveToElement(o) }).orThunk(function() { return T.some(Hb.moveToElement(o)) }) },
        Pb = function(u, s, l) { return xl.fromPosition(s, u, l).bind(function(e) { return a = e.getNode(), Xo(yr.fromDom(a)) || $o(yr.fromDom(a)) ? T.none() : (t = u, o = e, i = function(e) { return Fo(yr.fromDom(e)) && !js(r, o, t) }, Gs(!(n = s), r = l).fold(function() { return Gs(n, o).fold($(!1), i) }, i) ? T.none() : s && _o.isContentEditableFalse(e.getNode()) ? _b(u, s, l, e) : !1 === s && _o.isContentEditableFalse(e.getNode(!0)) ? _b(u, s, l, e) : s && Kh(l) ? T.some(Hb.moveToPosition(e)) : !1 === s && Wh(l) ? T.some(Hb.moveToPosition(e)) : T.none()); var t, n, r, o, i, a }) },
        Lb = function(r, e, o) { return i = e, a = o.getNode(!1 === i), u = i ? "after" : "before", _o.isElement(a) && a.getAttribute("data-mce-caret") === u ? (t = e, n = o.getNode(!1 === e), t && _o.isContentEditableFalse(n.nextSibling) ? T.some(Hb.moveToElement(n.nextSibling)) : !1 === t && _o.isContentEditableFalse(n.previousSibling) ? T.some(Hb.moveToElement(n.previousSibling)) : T.none()).fold(function() { return Pb(r, e, o) }, T.some) : Pb(r, e, o).bind(function(e) { return t = r, n = o, e.fold(function(e) { return T.some(Hb.remove(e)) }, function(e) { return T.some(Hb.moveToElement(e)) }, function(e) { return js(n, e, t) ? T.none() : T.some(Hb.moveToPosition(e)) }); var t, n }); var t, n, i, a, u },
        Vb = function(a, u) { var e, t, n, r, o, i; return (e = a.getBody(), t = u, n = a.selection.getRng(), r = Ys(t ? 1 : -1, e, n), o = $u.fromRangeStart(r), i = yr.fromDom(e), !1 === t && Kh(o) ? T.some(Hb.remove(o.getNode(!0))) : t && Wh(o) ? T.some(Hb.remove(o.getNode())) : !1 === t && Wh(o) && Db(i, o) ? Bb(i, o).map(function(e) { return Hb.remove(e.getNode()) }) : t && Kh(o) && Rb(i, o) ? Ob(i, o).map(function(e) { return Hb.remove(e.getNode()) }) : Lb(e, t, o)).map(function(e) { return e.fold((o = a, i = u, function(e) { return o._selectionOverrides.hideFakeCaret(), Wm(o, i, yr.fromDom(e)), !0 }), (n = a, r = u, function(e) { var t = r ? $u.before(e) : $u.after(e); return n.selection.setRng(t.toRange()), !0 }), (t = a, function(e) { return t.selection.setRng(e.toRange()), !0 })); var t, n, r, o, i }).getOr(!1) },
        Ib = function(e, t) { var n, r = e.selection.getNode(); return !!_o.isContentEditableFalse(r) && (n = yr.fromDom(e.getBody()), F(ga(n, ".mce-offscreen-selection"), ra), Wm(e, t, yr.fromDom(e.selection.getNode())), lb(e), !0) },
        Fb = function(e, t) { return e.selection.isCollapsed() ? Vb(e, t) : Ib(e, t) },
        Ub = function(e) { var t, n = function(e, t) { for (; t && t !== e;) { if (_o.isContentEditableTrue(t) || _o.isContentEditableFalse(t)) return t;
                    t = t.parentNode } return null }(e.getBody(), e.selection.getNode()); return _o.isContentEditableTrue(n) && e.dom.isBlock(n) && e.dom.isEmpty(n) && (t = e.dom.create("br", { "data-mce-bogus": "1" }), e.dom.setHTML(n, ""), n.appendChild(t), e.selection.setRng($u.before(t).toRange())), !0 },
        jb = function(e, t, n, r, o, i) { var a, u, s = Sh(r, e, i.getNode(!o), o, !0); if (t.collapsed) { var l = t.cloneRange();
                o ? l.setEnd(s.startContainer, s.startOffset) : l.setStart(s.endContainer, s.endOffset), l.deleteContents() } else t.deleteContents(); return e.selection.setRng(s), a = e.dom, u = n, _o.isText(u) && 0 === u.data.length && a.remove(u), !0 },
        qb = function(e, t) { return function(e, t) { var n = e.selection.getRng(); if (!_o.isText(n.commonAncestorContainer)) return !1; var r = t ? ju.Forwards : ju.Backwards,
                    o = fl(e.getBody()),
                    i = d(Zs, o.next),
                    a = d(Zs, o.prev),
                    u = t ? i : a,
                    s = t ? Wh : Kh,
                    l = Js(r, e.getBody(), n),
                    c = Pv.normalizePosition(t, u(l)); if (!c) return !1; if (s(c)) return jb(e, n, l.getNode(), r, t, c); var f = u(c); return !!(f && s(f) && el(c, f)) && jb(e, n, l.getNode(), r, t, f) }(e, t) },
        $b = function(t, n) { return function(e) { return Ov(n, e).map(function(e) { return my.setCaretPosition(t, e), !0 }).getOr(!1) } },
        Wb = function(r, o, i, a) { var u = r.getBody(),
                s = d(Pv.isInlineTarget, r);
            r.undoManager.ignore(function() { var e, t, n;
                r.selection.setRng((e = i, t = a, (n = j.document.createRange()).setStart(e.container(), e.offset()), n.setEnd(t.container(), t.offset()), n)), r.execCommand("Delete"), ny(s, u, $u.fromRangeStart(r.selection.getRng())).map(iy).map($b(r, o)) }), r.nodeChanged() },
        Kb = function(n, r, i, o) { var e, t, a = (e = n.getBody(), t = o.container(), Us(t, e) || e),
                u = d(Pv.isInlineTarget, n),
                s = ny(u, a, o); return s.bind(function(e) { return i ? e.fold($(T.some(iy(e))), T.none, $(T.some(oy(e))), T.none) : e.fold(T.none, $(T.some(oy(e))), T.none, $(T.some(iy(e)))) }).map($b(n, r)).getOrThunk(function() { var t = xl.navigate(i, a, o),
                    e = t.bind(function(e) { return ny(u, a, e) }); return s.isSome() && e.isSome() ? Pv.findRootInline(u, a, o).map(function(e) { return o = e, !!Cu([xl.firstPositionIn(o), xl.lastPositionIn(o)], function(e, t) { var n = Pv.normalizePosition(!0, e),
                            r = Pv.normalizePosition(!1, t); return xl.nextPosition(o, n).map(function(e) { return e.isEqual(r) }).getOr(!0) }).getOr(!0) && (Wm(n, i, yr.fromDom(e)), !0); var o }).getOr(!1) : e.bind(function(e) { return t.map(function(e) { return i ? Wb(n, r, o, e) : Wb(n, r, e, o), !0 }) }).getOr(!1) }) },
        Xb = function(e, t, n) { if (e.selection.isCollapsed() && !1 !== e.settings.inline_boundaries) { var r = $u.fromRangeStart(e.selection.getRng()); return Kb(e, t, n, r) } return !1 },
        Yb = function(e) { return 1 === uo(e).length },
        Gb = function(e, t, n, r) { var o, i, a, u, s = d(og, t),
                l = X(G(r, s), function(e) { return e.dom() }); if (0 === l.length) Wm(t, e, n);
            else { var c = (o = n.dom(), i = l, a = Jm(!1), u = ng(i, a.dom()), Ji(yr.fromDom(o), a), ra(yr.fromDom(o)), $u(u, 0));
                t.selection.setRng(c.toRange()) } },
        Jb = function(r, o) { var t, e = yr.fromDom(r.getBody()),
                n = yr.fromDom(r.selection.getStart()),
                i = G((t = Ld(n, e), ee(t, Io).fold($(t), function(e) { return t.slice(0, e) })), Yb); return fe(i).map(function(e) { var t, n = $u.fromRangeStart(r.selection.getRng()); return !(!cb(o, n, e.dom()) || ms((t = e).dom()) && Ym(t.dom()) || (Gb(o, r, e, i), 0)) }).getOr(!1) },
        Qb = function(e, t) { return !!e.selection.isCollapsed() && Jb(e, t) },
        Zb = Ur("start", "end"),
        eC = Ur("rng", "table", "cells"),
        tC = nf([{ removeTable: ["element"] }, { emptyCells: ["cells"] }]),
        nC = function(e, t) { return xa(yr.fromDom(e), "td,th", t) },
        rC = function(e, t) { return Ca(e, "table", t) },
        oC = function(e) { return !1 === Qr(e.start(), e.end()) },
        iC = function(e, n) { return rC(e.start(), n).bind(function(t) { return rC(e.end(), n).bind(function(e) { return Qr(t, e) ? T.some(t) : T.none() }) }) },
        aC = function(e) { return ga(e, "td,th") },
        uC = function(r, e) { var t = nC(e.startContainer, r),
                n = nC(e.endContainer, r); return e.collapsed ? T.none() : Cu([t, n], Zb).fold(function() { return t.fold(function() { return n.bind(function(t) { return rC(t, r).bind(function(e) { return ce(aC(e)).map(function(e) { return Zb(e, t) }) }) }) }, function(t) { return rC(t, r).bind(function(e) { return fe(aC(e)).map(function(e) { return Zb(t, e) }) }) }) }, function(e) { return sC(r, e) ? T.none() : (n = r, rC((t = e).start(), n).bind(function(e) { return fe(aC(e)).map(function(e) { return Zb(t.start(), e) }) })); var t, n }) },
        sC = function(e, t) { return iC(t, e).isSome() },
        lC = function(e, t) { var n, r, o, i, a = d(Qr, e); return (n = t, r = a, o = nC(n.startContainer, r), i = nC(n.endContainer, r), Cu([o, i], Zb).filter(oC).filter(function(e) { return sC(r, e) }).orThunk(function() { return uC(r, n) })).bind(function(e) { return iC(t = e, a).map(function(e) { return eC(t, e, aC(e)) }); var t }) },
        cC = function(e, t) { return ee(e, function(e) { return Qr(e, t) }) },
        fC = function(n) { return (r = n, Cu([cC(r.cells(), r.rng().start()), cC(r.cells(), r.rng().end())], function(e, t) { return r.cells().slice(e, t + 1) })).map(function(e) { var t = n.cells(); return e.length === t.length ? tC.removeTable(n.table()) : tC.emptyCells(e) }); var r },
        dC = function(e, t) { return lC(e, t).bind(fC) },
        hC = function(e, t) { return F(t, vm), e.selection.setCursorLocation(t[0].dom(), 0), !0 },
        mC = function(e, t) { return Wm(e, !1, t), !0 },
        gC = function(n, e, r, t) { return vC(e, t).fold(function() { return t = n, dC(e, r).map(function(e) { return e.fold(d(mC, t), d(hC, t)) }); var t }, function(e) { return yC(n, e) }).getOr(!1) },
        pC = function(e, t) { return Z(Ld(t, e), Xo) },
        vC = function(e, t) { return Z(Ld(t, e), function(e) { return "caption" === xr(e) }) },
        yC = function(e, t) { return vm(t), e.selection.setCursorLocation(t.dom(), 0), T.some(!0) },
        bC = function(u, s, l, c, f) { return xl.navigate(l, u.getBody(), f).bind(function(e) { return r = c, o = l, i = f, a = e, xl.firstPositionIn(r.dom()).bind(function(t) { return xl.lastPositionIn(r.dom()).map(function(e) { return o ? i.isEqual(t) && a.isEqual(e) : i.isEqual(e) && a.isEqual(t) }) }).getOr(!0) ? yC(u, c) : (t = c, n = e, vC(s, yr.fromDom(n.getNode())).map(function(e) { return !1 === Qr(e, t) })); var t, n, r, o, i, a }).or(T.some(!0)) },
        CC = function(a, u, s, e) { var l = $u.fromRangeStart(a.selection.getRng()); return pC(s, e).bind(function(e) { return Hm(e) ? yC(a, e) : (t = a, n = s, r = u, o = e, i = l, xl.navigate(r, t.getBody(), i).bind(function(e) { return pC(n, yr.fromDom(e.getNode())).map(function(e) { return !1 === Qr(e, o) }) })); var t, n, r, o, i }).getOr(!1) },
        wC = function(e, t) { return e ? qh(t) : $h(t) },
        xC = function(a, u, r) { var s = yr.fromDom(a.getBody()); return vC(s, r).fold(function() { return CC(a, u, s, r) || (e = a, t = u, n = $u.fromRangeStart(e.selection.getRng()), wC(t, n) || xl.fromPosition(t, e.getBody(), n).map(function(e) { return wC(t, e) }).getOr(!1)); var e, t, n }, function(e) { return (t = a, n = u, r = s, o = e, i = $u.fromRangeStart(t.selection.getRng()), Hm(o) ? yC(t, o) : bC(t, r, n, o, i)).getOr(!1); var t, n, r, o, i }) },
        zC = function(e, t) { var n, r, o, i, a, u = yr.fromDom(e.selection.getStart(!0)),
                s = ev(e); return e.selection.isCollapsed() && 0 === s.length ? xC(e, t, u) : (n = e, r = u, o = yr.fromDom(n.getBody()), i = n.selection.getRng(), 0 !== (a = ev(n)).length ? hC(n, a) : gC(n, o, i, r)) },
        NC = function(e, t) { return !!e.selection.isCollapsed() && (n = e, r = t, o = $u.fromRangeStart(n.selection.getRng()), xl.fromPosition(r, n.getBody(), o).filter(function(e) { return r ? Uh(e) : jh(e) }).bind(function(e) { return T.from(qs(r ? 0 : -1, e)) }).map(function(e) { return n.selection.select(e), !0 }).getOr(!1)); var n, r, o },
        EC = function(o, i) { o.on("keydown", function(e) { var t, n, r;!1 === e.isDefaultPrevented() && (t = o, n = i, r = e, ab([{ keyCode: Rh.BACKSPACE, action: ib(Fb, t, !1) }, { keyCode: Rh.DELETE, action: ib(Fb, t, !0) }, { keyCode: Rh.BACKSPACE, action: ib(qb, t, !1) }, { keyCode: Rh.DELETE, action: ib(qb, t, !0) }, { keyCode: Rh.BACKSPACE, action: ib(Xb, t, n, !1) }, { keyCode: Rh.DELETE, action: ib(Xb, t, n, !0) }, { keyCode: Rh.BACKSPACE, action: ib(zC, t, !1) }, { keyCode: Rh.DELETE, action: ib(zC, t, !0) }, { keyCode: Rh.BACKSPACE, action: ib(NC, t, !1) }, { keyCode: Rh.DELETE, action: ib(NC, t, !0) }, { keyCode: Rh.BACKSPACE, action: ib(Tb, t, !1) }, { keyCode: Rh.DELETE, action: ib(Tb, t, !0) }, { keyCode: Rh.BACKSPACE, action: ib(Nb, t, !1) }, { keyCode: Rh.DELETE, action: ib(Nb, t, !0) }, { keyCode: Rh.BACKSPACE, action: ib(Qb, t, !1) }, { keyCode: Rh.DELETE, action: ib(Qb, t, !0) }], r).each(function(e) { r.preventDefault() })) }), o.on("keyup", function(e) { var t, n;!1 === e.isDefaultPrevented() && (t = o, n = e, ab([{ keyCode: Rh.BACKSPACE, action: ib(Ub, t) }, { keyCode: Rh.DELETE, action: ib(Ub, t) }], n)) }) },
        SC = function(e) { return T.from(e.dom.getParent(e.selection.getStart(!0), e.dom.isBlock)) },
        kC = function(e, t) { var n, r, o = t,
                i = e.dom,
                a = e.schema.getMoveCaretBeforeOnEnterElements(); if (t) { if (/^(LI|DT|DD)$/.test(t.nodeName)) { var u = function(e) { for (; e;) { if (1 === e.nodeType || 3 === e.nodeType && e.data && /[\r\n\s]/.test(e.data)) return e;
                            e = e.nextSibling } }(t.firstChild);
                    u && /^(UL|OL|DL)$/.test(u.nodeName) && t.insertBefore(i.doc.createTextNode("\xa0"), t.firstChild) } if (r = i.createRng(), t.normalize(), t.hasChildNodes()) { for (var s = new Po(t, t); n = s.current();) { if (_o.isText(n)) { r.setStart(n, 0), r.setEnd(n, 0); break } if (a[n.nodeName.toLowerCase()]) { r.setStartBefore(n), r.setEndBefore(n); break }
                        o = n, n = s.next() }
                    n || (r.setStart(o, 0), r.setEnd(o, 0)) } else _o.isBr(t) ? t.nextSibling && i.isBlock(t.nextSibling) ? (r.setStartBefore(t), r.setEndBefore(t)) : (r.setStartAfter(t), r.setEndAfter(t)) : (r.setStart(t, 0), r.setEnd(t, 0));
                e.selection.setRng(r), e.selection.scrollIntoView(t) } },
        TC = function(e, t) { var n, r, o = e.getRoot(); for (n = t; n !== o && "false" !== e.getContentEditable(n);) "true" === e.getContentEditable(n) && (r = n), n = n.parentNode; return n !== o ? r : o },
        AC = SC,
        MC = function(e) { return SC(e).fold($(""), function(e) { return e.nodeName.toUpperCase() }) },
        RC = function(e) { return SC(e).filter(function(e) { return $o(yr.fromDom(e)) }).isSome() },
        DC = function(e, t) { return e && e.parentNode && e.parentNode.nodeName === t },
        BC = function(e) { return e && /^(OL|UL|LI)$/.test(e.nodeName) },
        OC = function(e) { var t = e.parentNode; return /^(LI|DT|DD)$/.test(t.nodeName) ? t : e },
        HC = function(e, t, n) { for (var r = e[n ? "firstChild" : "lastChild"]; r && !_o.isElement(r);) r = r[n ? "nextSibling" : "previousSibling"]; return r === t },
        _C = function(e, t, n, r, o) { var i = e.dom,
                a = e.selection.getRng(); if (n !== e.getBody()) { var u;
                BC(u = n) && BC(u.parentNode) && (o = "LI"); var s, l, c = o ? t(o) : i.create("BR"); if (HC(n, r, !0) && HC(n, r, !1)) DC(n, "LI") ? i.insertAfter(c, OC(n)) : i.replace(c, n);
                else if (HC(n, r, !0)) DC(n, "LI") ? (i.insertAfter(c, OC(n)), c.appendChild(i.doc.createTextNode(" ")), c.appendChild(n)) : n.parentNode.insertBefore(c, n);
                else if (HC(n, r, !1)) i.insertAfter(c, OC(n));
                else { n = OC(n); var f = a.cloneRange();
                    f.setStartAfter(r), f.setEndAfter(n); var d = f.extractContents(); "LI" === o && (l = "LI", (s = d).firstChild && s.firstChild.nodeName === l) ? (c = d.firstChild, i.insertAfter(d, n)) : (i.insertAfter(d, n), i.insertAfter(c, n)) }
                i.remove(r), kC(e, c) } },
        PC = function(e) { e.innerHTML = '<br data-mce-bogus="1">' },
        LC = function(e, t) { return e.nodeName === t || e.previousSibling && e.previousSibling.nodeName === t },
        VC = function(e, t) { return t && e.isBlock(t) && !/^(TD|TH|CAPTION|FORM)$/.test(t.nodeName) && !/^(fixed|absolute)/i.test(t.style.position) && "true" !== e.getContentEditable(t) },
        IC = function(e, t, n) { return !1 === _o.isText(t) ? n : e ? 1 === n && t.data.charAt(n - 1) === Pa ? 0 : n : n === t.data.length - 1 && t.data.charAt(n) === Pa ? t.data.length : n },
        FC = function(e, t) { var n, r, o = e.getRoot(); for (n = t; n !== o && "false" !== e.getContentEditable(n);) "true" === e.getContentEditable(n) && (r = n), n = n.parentNode; return n !== o ? r : o },
        UC = function(e, t) { var n = xc(e);
            n && n.toLowerCase() === t.tagName.toLowerCase() && e.dom.setAttribs(t, zc(e)) },
        jC = function(a, e) { var t, u, s, i, l, n, r, o, c, f, d, h, m, g = a.dom,
                p = a.schema,
                v = p.getNonEmptyElements(),
                y = a.selection.getRng(),
                b = function(e) { var t, n, r, o = s,
                        i = p.getTextInlineElements(); if (e || "TABLE" === f || "HR" === f ? (t = g.create(e || h), UC(a, t)) : t = l.cloneNode(!1), r = t, !1 === Sc(a)) g.setAttrib(t, "style", null), g.setAttrib(t, "class", null);
                    else
                        do { if (i[o.nodeName]) { if (ms(o) || Dl(o)) continue;
                                n = o.cloneNode(!1), g.setAttrib(n, "id", ""), t.hasChildNodes() ? n.appendChild(t.firstChild) : r = n, t.appendChild(n) } } while ((o = o.parentNode) && o !== u); return PC(r), t },
                C = function(e) { var t, n, r = IC(e, s, i); if (_o.isText(s) && (e ? 0 < r : r < s.nodeValue.length)) return !1; if (s.parentNode === l && m && !e) return !0; if (e && _o.isElement(s) && s === l.firstChild) return !0; if (LC(s, "TABLE") || LC(s, "HR")) return m && !e || !m && e; var o = new Po(s, l); for (_o.isText(s) && (e && 0 === r ? o.prev() : e || r !== s.nodeValue.length || o.next()); t = o.current();) { if (_o.isElement(t)) { if (!t.getAttribute("data-mce-bogus") && (n = t.nodeName.toLowerCase(), v[n] && "br" !== n)) return !1 } else if (_o.isText(t) && !/^[ \t\r\n]*$/.test(t.nodeValue)) return !1;
                        e ? o.prev() : o.next() } return !0 },
                w = function() { r = /^(H[1-6]|PRE|FIGURE)$/.test(f) && "HGROUP" !== d ? b(h) : b(), kc(a) && VC(g, c) && g.isEmpty(l) ? r = g.split(c, l) : g.insertAfter(r, l), kC(a, r) };
            mv(g, y).each(function(e) { y.setStart(e.startContainer, e.startOffset), y.setEnd(e.endContainer, e.endOffset) }), s = y.startContainer, i = y.startOffset, h = xc(a), n = !(!e || !e.shiftKey); var x, z, N, E, S, k, T = !(!e || !e.ctrlKey);
            _o.isElement(s) && s.hasChildNodes() && (m = i > s.childNodes.length - 1, s = s.childNodes[Math.min(i, s.childNodes.length - 1)] || s, i = m && _o.isText(s) ? s.nodeValue.length : 0), (u = FC(g, s)) && ((h && !n || !h && n) && (s = function(e, t, n, r, o) { var i, a, u, s, l, c, f, d = t || "P",
                    h = e.dom,
                    m = FC(h, r); if (!(a = h.getParent(r, h.isBlock)) || !VC(h, a)) { if (c = (a = a || m) === e.getBody() || (f = a) && /^(TD|TH|CAPTION)$/.test(f.nodeName) ? a.nodeName.toLowerCase() : a.parentNode.nodeName.toLowerCase(), !a.hasChildNodes()) return i = h.create(d), UC(e, i), a.appendChild(i), n.setStart(i, 0), n.setEnd(i, 0), i; for (s = r; s.parentNode !== a;) s = s.parentNode; for (; s && !h.isBlock(s);) s = (u = s).previousSibling; if (u && e.schema.isValidChild(c, d.toLowerCase())) { for (i = h.create(d), UC(e, i), u.parentNode.insertBefore(i, u), s = u; s && !h.isBlock(s);) l = s.nextSibling, i.appendChild(s), s = l;
                        n.setStart(r, o), n.setEnd(r, o) } } return r }(a, h, y, s, i)), l = g.getParent(s, g.isBlock), c = l ? g.getParent(l.parentNode, g.isBlock) : null, f = l ? l.nodeName.toUpperCase() : "", "LI" !== (d = c ? c.nodeName.toUpperCase() : "") || T || (c = (l = c).parentNode, f = d), /^(LI|DT|DD)$/.test(f) && g.isEmpty(l) ? _C(a, b, c, l, h) : h && l === a.getBody() || (h = h || "P", Fa(l) ? (r = Ja(l), g.isEmpty(l) && PC(l), kC(a, r)) : C() ? w() : C(!0) ? (r = l.parentNode.insertBefore(b(), l), kC(a, LC(l, "HR") ? r : l)) : ((t = (S = y, k = S.cloneRange(), k.setStart(S.startContainer, IC(!0, S.startContainer, S.startOffset)), k.setEnd(S.endContainer, IC(!1, S.endContainer, S.endOffset)), k).cloneRange()).setEndAfter(l), o = t.extractContents(), E = o, F(ma(yr.fromDom(E), Er), function(e) { var t = e.dom();
                t.nodeValue = La(t.nodeValue) }), function(e) { for (; _o.isText(e) && (e.nodeValue = e.nodeValue.replace(/^[\r\n]+/, "")), e = e.firstChild;); }(o), r = o.firstChild, g.insertAfter(o, l), function(e, t, n) { var r, o = n,
                    i = []; if (o) { for (; o = o.firstChild;) { if (e.isBlock(o)) return;
                        _o.isElement(o) && !t[o.nodeName.toLowerCase()] && i.push(o) } for (r = i.length; r--;) !(o = i[r]).hasChildNodes() || o.firstChild === o.lastChild && "" === o.firstChild.nodeValue ? e.remove(o) : (a = e, (u = o) && "A" === u.nodeName && a.isEmpty(u) && e.remove(o)); var a, u } }(g, v, r), x = g, (z = l).normalize(), (N = z.lastChild) && !/^(left|right)$/gi.test(x.getStyle(N, "float", !0)) || x.add(z, "br"), g.isEmpty(l) && PC(l), r.normalize(), g.isEmpty(r) ? (g.remove(r), w()) : kC(a, r)), g.setAttrib(r, "id", ""), a.fire("NewBlock", { newBlock: r }))) },
        qC = function(e, t, n) { var r = e.create("span", {}, "&nbsp;");
            n.parentNode.insertBefore(r, n), t.scrollIntoView(r), e.remove(r) },
        $C = function(e, t, n, r) { var o = e.createRng();
            r ? (o.setStartBefore(n), o.setEndBefore(n)) : (o.setStartAfter(n), o.setEndAfter(n)), t.setRng(o) },
        WC = function(e, t) { var n, r, o = e.selection,
                i = e.dom,
                a = o.getRng();
            mv(i, a).each(function(e) { a.setStart(e.startContainer, e.startOffset), a.setEnd(e.endContainer, e.endOffset) }); var u = a.startOffset,
                s = a.startContainer; if (1 === s.nodeType && s.hasChildNodes()) { var l = u > s.childNodes.length - 1;
                s = s.childNodes[Math.min(u, s.childNodes.length - 1)] || s, u = l && 3 === s.nodeType ? s.nodeValue.length : 0 } var c = i.getParent(s, i.isBlock),
                f = c ? i.getParent(c.parentNode, i.isBlock) : null,
                d = f ? f.nodeName.toUpperCase() : "",
                h = !(!t || !t.ctrlKey); "LI" !== d || h || (c = f), s && 3 === s.nodeType && u >= s.nodeValue.length && (function(e, t, n) { for (var r, o = new Po(t, n), i = e.getNonEmptyElements(); r = o.next();)
                    if (i[r.nodeName.toLowerCase()] || 0 < r.length) return !0 }(e.schema, s, c) || (n = i.create("br"), a.insertNode(n), a.setStartAfter(n), a.setEndAfter(n), r = !0)), n = i.create("br"), ns(i, a, n), qC(i, o, n), $C(i, o, n, r), e.undoManager.add() },
        KC = function(e, t) { var n = yr.fromTag("br");
            Ji(yr.fromDom(t), n), e.undoManager.add() },
        XC = function(e, t) { YC(e.getBody(), t) || Qi(yr.fromDom(t), yr.fromTag("br")); var n = yr.fromTag("br");
            Qi(yr.fromDom(t), n), qC(e.dom, e.selection, n.dom()), $C(e.dom, e.selection, n.dom(), !1), e.undoManager.add() },
        YC = function(e, t) { return n = $u.after(t), !!_o.isBr(n.getNode()) || xl.nextPosition(e, $u.after(t)).map(function(e) { return _o.isBr(e.getNode()) }).getOr(!1); var n },
        GC = function(e) { return e && "A" === e.nodeName && "href" in e },
        JC = function(e) { return e.fold($(!1), GC, GC, $(!1)) },
        QC = function(e, t) { t.fold(i, d(KC, e), d(XC, e), i) },
        ZC = function(e, t) { var n, r, o, i = (n = e, r = d(Pv.isInlineTarget, n), o = $u.fromRangeStart(n.selection.getRng()), ny(r, n.getBody(), o).filter(JC));
            i.isSome() ? i.each(d(QC, e)) : WC(e, t) },
        ew = function(e, t) { return AC(e).filter(function(e) { return 0 < t.length && Yr(yr.fromDom(e), t) }).isSome() },
        tw = function(e) { return ew(e, Nc(e)) },
        nw = function(e) { return ew(e, Ec(e)) },
        rw = nf([{ br: [] }, { block: [] }, { none: [] }]),
        ow = function(e, t) { return nw(e) },
        iw = function(n) { return function(e, t) { return "" === xc(e) === n } },
        aw = function(n) { return function(e, t) { return RC(e) === n } },
        uw = function(n, r) { return function(e, t) { return MC(e) === n.toUpperCase() === r } },
        sw = function(e) { return uw("pre", e) },
        lw = function(n) { return function(e, t) { return wc(e) === n } },
        cw = function(e, t) { return tw(e) },
        fw = function(e, t) { return t },
        dw = function(e) { var t = xc(e),
                n = TC(e.dom, e.selection.getStart()); return n && e.schema.isValidChild(n.nodeName, t || "P") },
        hw = function(e, t) { return function(n, r) { return Q(e, function(e, t) { return e && t(n, r) }, !0) ? T.some(t) : T.none() } },
        mw = function(e, t) { return Lv([hw([ow], rw.none()), hw([uw("summary", !0)], rw.br()), hw([sw(!0), lw(!1), fw], rw.br()), hw([sw(!0), lw(!1)], rw.block()), hw([sw(!0), lw(!0), fw], rw.block()), hw([sw(!0), lw(!0)], rw.br()), hw([aw(!0), fw], rw.br()), hw([aw(!0)], rw.block()), hw([iw(!0), fw, dw], rw.block()), hw([iw(!0)], rw.br()), hw([cw], rw.br()), hw([iw(!1), fw], rw.br()), hw([dw], rw.block())], [e, !(!t || !t.shiftKey)]).getOr(rw.none()) },
        gw = function(e, t) { mw(e, t).fold(function() { ZC(e, t) }, function() { jC(e, t) }, i) },
        pw = function(o) { o.on("keydown", function(e) { var t, n, r;
                e.keyCode === Rh.ENTER && (t = o, (n = e).isDefaultPrevented() || (n.preventDefault(), (r = t.undoManager).typing && (r.typing = !1, r.add()), t.undoManager.transact(function() {!1 === t.selection.isCollapsed() && t.execCommand("Delete"), gw(t, n) }))) }) },
        vw = function(n, r) { var e = r.container(),
                t = r.offset(); return _o.isText(e) ? (e.insertData(t, n), T.some(Uu(e, t + n.length))) : Qs(r).map(function(e) { var t = yr.fromText(n); return r.isAtEnd() ? Qi(e, t) : Ji(e, t), Uu(t.dom(), n.length) }) },
        yw = d(vw, "\xa0"),
        bw = d(vw, " "),
        Cw = function(e, t, n) { return xl.navigateIgnore(e, t, n, Lh) },
        ww = function(t, n, r) { var e = G(Ld(yr.fromDom(r.container()), n), Io); return ce(e).fold(function() { return Cw(t, n.dom(), r).forall(function(e) { return !1 === js(e, r, n.dom()) }) }, function(e) { return Cw(t, e.dom(), r).isNone() }) },
        xw = d(ww, !1),
        zw = d(ww, !0),
        Nw = function(e) { return Uu.isTextPosition(e) && !e.isAtStart() && !e.isAtEnd() },
        Ew = function(e, t) { var n = G(Ld(yr.fromDom(t.container()), e), Io); return ce(n).getOr(e) },
        Sw = function(e, t) { return Nw(t) ? Ph(t) : Ph(t) || xl.prevPosition(Ew(e, t).dom(), t).exists(Ph) },
        kw = function(e, t) { return Nw(t) ? _h(t) : _h(t) || xl.nextPosition(Ew(e, t).dom(), t).exists(_h) },
        Tw = function(e) { return Qs(e).bind(function(e) { return ba(e, Nr) }).exists(function(e) { return t = Vr(e, "white-space"), V(["pre", "pre-wrap"], t); var t }) },
        Aw = function(e, t) { return o = e, i = t, xl.prevPosition(o.dom(), i).isNone() || (n = e, r = t, xl.nextPosition(n.dom(), r).isNone()) || xw(e, t) || zw(e, t) || Db(e, t) || Rb(e, t); var n, r, o, i },
        Mw = function(e, t) { var n, r, o, i = (r = (n = t).container(), o = n.offset(), _o.isText(r) && o < r.data.length ? Uu(r, o + 1) : n); return !Tw(i) && (zw(e, i) || Rb(e, i) || kw(e, i)) },
        Rw = function(e, t) { return n = e, !Tw(r = t) && (xw(n, r) || Db(n, r) || Sw(n, r)) || Mw(e, t); var n, r },
        Dw = function(e, t) { return Dh(e.charAt(t)) },
        Bw = function(e) { var t = e.container(); return _o.isText(t) && ur(t.data, "\xa0") },
        Ow = function(e) { var t = e.data,
                n = X(t.split(""), function(e, t, n) { return Dh(e) && 0 < t && t < n.length - 1 && Oh(n[t - 1]) && Oh(n[t + 1]) ? " " : e }).join(""); return n !== t && (e.data = n, !0) },
        Hw = function(c, e) { return T.some(e).filter(Bw).bind(function(e) { var t, n, r, o, i, a, u, s, l = e.container(); return i = c, u = (a = l).data, s = Uu(a, 0), Dw(u, 0) && !Rw(i, s) && (a.data = " " + u.slice(1), 1) || Ow(l) || (t = c, r = (n = l).data, o = Uu(n, r.length - 1), Dw(r, r.length - 1) && !Rw(t, o) && (n.data = r.slice(0, -1) + " ", 1)) ? T.some(e) : T.none() }) },
        _w = function(t) { var e = yr.fromDom(t.getBody());
            t.selection.isCollapsed() && Hw(e, Uu.fromRangeStart(t.selection.getRng())).each(function(e) { t.selection.setRng(e.toRange()) }) },
        Pw = function(r, o) { return function(e) { return t = r, !Tw(n = e) && (Aw(t, n) || Sw(t, n) || kw(t, n)) ? yw(o) : bw(o); var t, n } },
        Lw = function(e) { var t, n, r = $u.fromRangeStart(e.selection.getRng()),
                o = yr.fromDom(e.getBody()); if (e.selection.isCollapsed()) { var i = d(Pv.isInlineTarget, e),
                    a = $u.fromRangeStart(e.selection.getRng()); return ny(i, e.getBody(), a).bind((n = o, function(e) { return e.fold(function(e) { return xl.prevPosition(n.dom(), $u.before(e)) }, function(e) { return xl.firstPositionIn(e) }, function(e) { return xl.lastPositionIn(e) }, function(e) { return xl.nextPosition(n.dom(), $u.after(e)) }) })).bind(Pw(o, r)).exists((t = e, function(e) { return t.selection.setRng(e.toRange()), t.nodeChanged(), !0 })) } return !1 },
        Vw = function(r) { r.on("keydown", function(e) { var t, n;!1 === e.isDefaultPrevented() && (t = r, n = e, ab([{ keyCode: Rh.SPACEBAR, action: ib(Lw, t) }], n).each(function(e) { n.preventDefault() })) }) },
        Iw = function(e, t) { var n;
            t.hasAttribute("data-mce-caret") && (Ja(t), (n = e).selection.setRng(n.selection.getRng()), e.selection.scrollIntoView(t)) },
        Fw = function(e, t) { var n, r = (n = e, wa(yr.fromDom(n.getBody()), "*[data-mce-caret]").fold($(null), function(e) { return e.dom() })); if (r) return "compositionstart" === t.type ? (t.preventDefault(), t.stopPropagation(), void Iw(e, r)) : void(qa(r) && (Iw(e, r), e.undoManager.add())) },
        Uw = function(e) { e.on("keyup compositionstart", d(Fw, e)) },
        jw = pr.detect().browser,
        qw = function(t) { var e, n;
            e = t, n = ia(function() { e.composing || _w(e) }, 0), jw.isIE() && (e.on("keypress", function(e) { n.throttle() }), e.on("remove", function(e) { n.cancel() })), t.on("input", function(e) {!1 === e.isComposing && _w(t) }) },
        $w = function(r) { r.on("keydown", function(e) { var t, n;!1 === e.isDefaultPrevented() && (t = r, n = e, ab([{ keyCode: Rh.END, action: Hy(t, !0) }, { keyCode: Rh.HOME, action: Hy(t, !1) }], n).each(function(e) { n.preventDefault() })) }) },
        Ww = function(e) { var t = my.setupSelectedState(e);
            Uw(e), ub(e, t), EC(e, t), pw(e), Vw(e), qw(e), $w(e) },
        Kw = function(u) { var s, n, r, o = un.each,
                l = Rh.BACKSPACE,
                c = Rh.DELETE,
                f = u.dom,
                d = u.selection,
                e = u.settings,
                t = u.parser,
                i = Fe.gecko,
                a = Fe.ie,
                h = Fe.webkit,
                m = "data:text/mce-internal,",
                g = a ? "Text" : "URL",
                p = function(e, t) { try { u.getDoc().execCommand(e, !1, t) } catch (n) {} },
                v = function(e) { return e.isDefaultPrevented() },
                y = function() { u.shortcuts.add("meta+a", null, "SelectAll") },
                b = function() { u.on("keydown", function(e) { if (!v(e) && e.keyCode === l && d.isCollapsed() && 0 === d.getRng().startOffset) { var t = d.getNode().previousSibling; if (t && t.nodeName && "table" === t.nodeName.toLowerCase()) return e.preventDefault(), !1 } }) },
                C = function() { u.inline || (u.contentStyles.push("body {min-height: 150px}"), u.on("click", function(e) { var t; if ("HTML" === e.target.nodeName) { if (11 < Fe.ie) return void u.getBody().focus();
                            t = u.selection.getRng(), u.getBody().focus(), u.selection.setRng(t), u.selection.normalize(), u.nodeChanged() } })) }; return u.on("keydown", function(e) { var t, n, r, o, i; if (!v(e) && e.keyCode === Rh.BACKSPACE && (n = (t = d.getRng()).startContainer, r = t.startOffset, o = f.getRoot(), i = n, t.collapsed && 0 === r)) { for (; i && i.parentNode && i.parentNode.firstChild === i && i.parentNode !== o;) i = i.parentNode; "BLOCKQUOTE" === i.tagName && (u.formatter.toggle("blockquote", null, i), (t = f.createRng()).setStart(n, 0), t.setEnd(n, 0), d.setRng(t)) } }), s = function(e) { var t = f.create("body"),
                    n = e.cloneContents(); return t.appendChild(n), d.serializer.serialize(t, { format: "html" }) }, u.on("keydown", function(e) { var t, n, r, o, i, a = e.keyCode; if (!v(e) && (a === c || a === l)) { if (t = u.selection.isCollapsed(), n = u.getBody(), t && !f.isEmpty(n)) return; if (!t && (r = u.selection.getRng(), o = s(r), (i = f.createRng()).selectNode(u.getBody()), o !== s(i))) return;
                    e.preventDefault(), u.setContent(""), n.firstChild && f.isBlock(n.firstChild) ? u.selection.setCursorLocation(n.firstChild, 0) : u.selection.setCursorLocation(n, 0), u.nodeChanged() } }), Fe.windowsPhone || u.on("keyup focusin mouseup", function(e) { Rh.modifierPressed(e) || d.normalize() }, !0), h && (u.inline || f.bind(u.getDoc(), "mousedown mouseup", function(e) { var t; if (e.target === u.getDoc().documentElement)
                    if (t = d.getRng(), u.getBody().focus(), "mousedown" === e.type) { if (ja(t.startContainer)) return;
                        d.placeCaretAt(e.clientX, e.clientY) } else d.setRng(t) }), u.on("click", function(e) { var t = e.target; /^(IMG|HR)$/.test(t.nodeName) && "false" !== f.getContentEditableParent(t) && (e.preventDefault(), u.selection.select(t), u.nodeChanged()), "A" === t.nodeName && f.hasClass(t, "mce-item-anchor") && (e.preventDefault(), d.select(t)) }), e.forced_root_block && u.on("init", function() { p("DefaultParagraphSeparator", xc(u)) }), u.on("init", function() { u.dom.bind(u.getBody(), "submit", function(e) { e.preventDefault() }) }), b(), t.addNodeFilter("br", function(e) { for (var t = e.length; t--;) "Apple-interchange-newline" === e[t].attr("class") && e[t].remove() }), Fe.iOS ? (u.inline || u.on("keydown", function() { j.document.activeElement === j.document.body && u.getWin().focus() }), C(), u.on("click", function(e) { var t = e.target;
                do { if ("A" === t.tagName) return void e.preventDefault() } while (t = t.parentNode) }), u.contentStyles.push(".mce-content-body {-webkit-touch-callout: none}")) : y()), 11 <= Fe.ie && (C(), b()), Fe.ie && (y(), p("AutoUrlDetect", !1), u.on("dragstart", function(e) { var t, n, r;
                (t = e).dataTransfer && (u.selection.isCollapsed() && "IMG" === t.target.tagName && d.select(t.target), 0 < (n = u.selection.getContent()).length && (r = m + escape(u.id) + "," + escape(n), t.dataTransfer.setData(g, r))) }), u.on("drop", function(e) { if (!v(e)) { var t = (i = e).dataTransfer && (a = i.dataTransfer.getData(g)) && 0 <= a.indexOf(m) ? (a = a.substr(m.length).split(","), { id: unescape(a[0]), html: unescape(a[1]) }) : null; if (t && t.id !== u.id) { e.preventDefault(); var n = Bp(e.x, e.y, u.getDoc());
                        d.setRng(n), r = t.html, o = !0, u.queryCommandSupported("mceInsertClipboardContent") ? u.execCommand("mceInsertClipboardContent", !1, { content: r, internal: o }) : u.execCommand("mceInsertContent", !1, r) } } var r, o, i, a })), i && (u.on("keydown", function(e) { if (!v(e) && e.keyCode === l) { if (!u.getBody().getElementsByTagName("hr").length) return; if (d.isCollapsed() && 0 === d.getRng().startOffset) { var t = d.getNode(),
                            n = t.previousSibling; if ("HR" === t.nodeName) return f.remove(t), void e.preventDefault();
                        n && n.nodeName && "hr" === n.nodeName.toLowerCase() && (f.remove(n), e.preventDefault()) } } }), j.Range.prototype.getClientRects || u.on("mousedown", function(e) { if (!v(e) && "HTML" === e.target.nodeName) { var t = u.getBody();
                    t.blur(), We.setEditorTimeout(u, function() { t.focus() }) } }), n = function() { var e = f.getAttribs(d.getStart().cloneNode(!1)); return function() { var t = d.getStart();
                    t !== u.getBody() && (f.setAttrib(t, "style", null), o(e, function(e) { t.setAttributeNode(e.cloneNode(!0)) })) } }, r = function() { return !d.isCollapsed() && f.getParent(d.getStart(), f.isBlock) !== f.getParent(d.getEnd(), f.isBlock) }, u.on("keypress", function(e) { var t; if (!v(e) && (8 === e.keyCode || 46 === e.keyCode) && r()) return t = n(), u.getDoc().execCommand("delete", !1, null), t(), e.preventDefault(), !1 }), f.bind(u.getDoc(), "cut", function(e) { var t;!v(e) && r() && (t = n(), We.setEditorTimeout(u, function() { t() })) }), e.readonly || u.on("BeforeExecCommand mousedown", function() { p("StyleWithCSS", !1), p("enableInlineTableEditing", !1), e.object_resizing || p("enableObjectResizing", !1) }), u.on("SetContent ExecCommand", function(e) { "setcontent" !== e.type && "mceInsertLink" !== e.command || o(f.select("a"), function(e) { var t = e.parentNode,
                        n = f.getRoot(); if (t.lastChild === e) { for (; t && !f.isBlock(t);) { if (t.parentNode.lastChild !== t || t === n) return;
                            t = t.parentNode }
                        f.add(t, "br", { "data-mce-bogus": 1 }) } }) }), u.contentStyles.push("img:-moz-broken {-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}"), Fe.mac && u.on("keydown", function(e) {!Rh.metaKeyPressed(e) || e.shiftKey || 37 !== e.keyCode && 39 !== e.keyCode || (e.preventDefault(), u.selection.getSel().modify("move", 37 === e.keyCode ? "backward" : "forward", "lineboundary")) }), b()), { refreshContentEditable: function() {}, isHidden: function() { var e; return !(!i || u.removed || (e = u.selection.getSel()) && e.rangeCount && 0 !== e.rangeCount) } } },
        Xw = function(e) { return _o.isElement(e) && jo(yr.fromDom(e)) },
        Yw = function(t) { t.on("click", function(e) { 3 <= e.detail && function(e) { var t = e.selection.getRng(),
                        n = Uu.fromRangeStart(t),
                        r = Uu.fromRangeEnd(t); if (Uu.isElementPosition(n)) { var o = n.container();
                        Xw(o) && xl.firstPositionIn(o).each(function(e) { return t.setStart(e.container(), e.offset()) }) }
                    Uu.isElementPosition(r) && (o = n.container(), Xw(o) && xl.lastPositionIn(o).each(function(e) { return t.setEnd(e.container(), e.offset()) })), e.selection.setRng(Vg(t)) }(t) }) },
        Gw = function(e) { var t, n;
            (t = e).on("click", function(e) { t.dom.getParent(e.target, "details") && e.preventDefault() }), (n = e).parser.addNodeFilter("details", function(e) { F(e, function(e) { e.attr("data-mce-open", e.attr("open")), e.attr("open", "open") }) }), n.serializer.addNodeFilter("details", function(e) { F(e, function(e) { var t = e.attr("data-mce-open");
                    e.attr("open", K(t) ? t : null), e.attr("data-mce-open", null) }) }) },
        Jw = _i.DOM,
        Qw = function(e) { var t;
            e.bindPendingEventDelegates(), e.initialized = !0, e.fire("init"), e.focus(!0), e.nodeChanged({ initial: !0 }), e.execCallback("init_instance_callback", e), (t = e).settings.auto_focus && We.setEditorTimeout(t, function() { var e;
                (e = !0 === t.settings.auto_focus ? t : t.editorManager.get(t.settings.auto_focus)).destroyed || e.focus() }, 100) },
        Zw = function(t, e) { var n, r, u, o, i = t.settings,
                a = t.getElement(),
                s = t.getDoc();
            i.inline || (t.getElement().style.visibility = t.orgVisibility), e || t.inline || (s.open(), s.write(t.iframeHTML), s.close()), t.inline && (t.on("remove", function() { var e = this.getBody();
                Jw.removeClass(e, "mce-content-body"), Jw.removeClass(e, "mce-edit-focus"), Jw.setAttrib(e, "contentEditable", null) }), Jw.addClass(a, "mce-content-body"), t.contentDocument = s = j.document, t.contentWindow = j.window, t.bodyElement = a, t.contentAreaContainer = a, i.root_name = a.nodeName.toLowerCase()), (n = t.getBody()).disabled = !0, t.readonly = i.readonly, t.readonly || (t.inline && "static" === Jw.getStyle(n, "position", !0) && (n.style.position = "relative"), n.contentEditable = t.getParam("content_editable_state", !0)), n.disabled = !1, t.editorUpload = Od(t), t.schema = zi(i), t.dom = _i(s, { keep_values: !0, url_converter: t.convertURL, url_converter_scope: t, hex_colors: i.force_hex_style_colors, update_styles: !0, root_element: t.inline ? t.getBody() : null, collect: function() { return t.inline }, schema: t.schema, contentCssCors: Ic(t), onSetAttrib: function(e) { t.fire("SetAttrib", e) } }), t.parser = ((o = vp((u = t).settings, u.schema)).addAttributeFilter("src,href,style,tabindex", function(e, t) { for (var n, r, o, i = e.length, a = u.dom; i--;)
                    if (r = (n = e[i]).attr(t), o = "data-mce-" + t, !n.attr(o)) { if (0 === r.indexOf("data:") || 0 === r.indexOf("blob:")) continue; "style" === t ? ((r = a.serializeStyle(a.parseStyle(r), n.name)).length || (r = null), n.attr(o, r), n.attr(t, r)) : "tabindex" === t ? (n.attr(o, r), n.attr(t, null)) : n.attr(o, u.convertURL(r, t, n.name)) } }), o.addNodeFilter("script", function(e) { for (var t, n, r = e.length; r--;) 0 !== (n = (t = e[r]).attr("type") || "no/type").indexOf("mce-") && t.attr("type", "mce-" + n) }), o.addNodeFilter("#cdata", function(e) { for (var t, n = e.length; n--;)(t = e[n]).type = 8, t.name = "#comment", t.value = "[CDATA[" + t.value + "]]" }), o.addNodeFilter("p,h1,h2,h3,h4,h5,h6,div", function(e) { for (var t, n = e.length, r = u.schema.getNonEmptyElements(); n--;)(t = e[n]).isEmpty(r) && 0 === t.getAll("br").length && (t.append(new uc("br", 1)).shortEnded = !0) }), o), t.serializer = wp(i, t), t.selection = Nv(t.dom, t.getWin(), t.serializer, t), t.annotator = rc(t), t.formatter = tp(t), t.undoManager = gm(t), t._nodeChangeDispatcher = new Yd(t), t._selectionOverrides = Qh(t), Gw(t), Yw(t), Ww(t), Ud(t), t.fire("PreInit"), i.browser_spellcheck || i.gecko_spellcheck || (s.body.spellcheck = !1, Jw.setAttrib(n, "spellcheck", "false")), t.quirks = Kw(t), t.fire("PostRender"); var l, c, f, d, h, m = Wc(t);
            m !== undefined && (n.dir = m), i.protect && t.on("BeforeSetContent", function(t) { un.each(i.protect, function(e) { t.content = t.content.replace(e, function(e) { return "\x3c!--mce:protected " + escape(e) + "--\x3e" }) }) }), t.on("SetContent", function() { t.addVisual(t.getBody()) }), t.load({ initial: !0, format: "html" }), t.startContent = t.getContent({ format: "raw" }), t.on("compositionstart compositionend", function(e) { t.composing = "compositionstart" === e.type }), 0 < t.contentStyles.length && (r = "", un.each(t.contentStyles, function(e) { r += e + "\r\n" }), t.dom.addStyle(r)), (l = t, l.inline ? Jw.styleSheetLoader : l.dom.styleSheetLoader).loadAll(t.contentCSS, function(e) { Qw(t) }, function(e) { Qw(t) }), i.content_style && (c = t, f = i.content_style, d = yr.fromDom(c.getDoc().head), h = yr.fromTag("style"), Hr(h, "type", "text/css"), ea(h, yr.fromText(f)), ea(d, h)) },
        ex = _i.DOM,
        tx = function(e, t) { var n, r, o, i, a = e.editorManager.translate("Rich Text Area. Press ALT-0 for help."),
                u = (n = e.id, r = a, t.height, o = gc(e), i = yr.fromTag("iframe"), _r(i, o), _r(i, { id: n + "_ifr", frameBorder: "0", allowTransparency: "true", title: r }), fa(i, "tox-edit-area__iframe"), i).dom();
            u.onload = function() { u.onload = null, e.fire("load") }; var s, l, c, f, d = function(e, t) { if (j.document.domain !== j.window.location.hostname && Fe.ie && Fe.ie < 12) { var n = Bd("mce");
                    e[n] = function() { Zw(e) }; var r = 'javascript:(function(){document.open();document.domain="' + j.document.domain + '";var ed = window.parent.tinymce.get("' + e.id + '");document.write(ed.iframeHTML);document.close();ed.' + n + "(true);})()"; return ex.setAttrib(t, "src", r), !0 } return !1 }(e, u); return e.contentAreaContainer = t.iframeContainer, e.iframeElement = u, e.iframeHTML = (f = pc(s = e) + "<html><head>", vc(s) !== s.documentBaseUrl && (f += '<base href="' + s.documentBaseURI.getURI() + '" />'), f += '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />', l = yc(s), c = bc(s), Cc(s) && (f += '<meta http-equiv="Content-Security-Policy" content="' + Cc(s) + '" />'), f += '</head><body id="' + l + '" class="mce-content-body ' + c + '" data-id="' + s.id + '"><br></body></html>'), ex.add(t.iframeContainer, u), d },
        nx = function(e, t) { var n = tx(e, t);
            t.editorContainer && (ex.get(t.editorContainer).style.display = e.orgDisplay, e.hidden = ex.isHidden(t.editorContainer)), e.getElement().style.display = "none", ex.setAttrib(e.id, "aria-hidden", "true"), n || Zw(e) },
        rx = function(e) { var t, n, r, o, i;
            e.contentCSS = e.contentCSS.concat((n = $c(t = e), r = t.editorManager.baseURL + "/skins/content", o = "content" + t.editorManager.suffix + ".css", i = !0 === t.inline, X(n, function(e) { return /^[a-z0-9\-]+$/i.test(e) && !i ? r + "/" + e + "/" + o : t.documentBaseURI.toAbsolute(e) }))) },
        ox = _i.DOM,
        ix = function(t, n, e) { var r = vd.get(e),
                o = vd.urls[e] || t.documentBaseUrl.replace(/\/$/, ""); if (e = un.trim(e), r && -1 === un.inArray(n, e)) { if (un.each(vd.dependencies(e), function(e) { ix(t, n, e) }), t.plugins[e]) return; try { var i = new r(t, o, t.$);
                    (t.plugins[e] = i).init && (i.init(t, o), n.push(e)) } catch (xN) { gd.pluginInitError(t, e, xN) } } },
        ax = function(e) { return e.replace(/^\-/, "") },
        ux = function(e) { return { editorContainer: e, iframeContainer: e } },
        sx = function(e) { var t, n, r = e.getElement(); return e.inline ? ux(null) : (t = r, n = ox.create("div"), ox.insertAfter(n, t), ux(n)) },
        lx = function(e) { var n, t, r, o, i, a;
            e.fire("ScriptsLoaded"), n = e, t = un.trim(n.settings.icons), r = n.ui.registry.getAll().icons, o = Fi({}, { "accessibility-check": '<svg width="24" height="24"><path d="M12 2a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2c0-1.1.9-2 2-2zm8 7h-5v12c0 .6-.4 1-1 1a1 1 0 0 1-1-1v-5c0-.6-.4-1-1-1a1 1 0 0 0-1 1v5c0 .6-.4 1-1 1a1 1 0 0 1-1-1V9H4a1 1 0 1 1 0-2h16c.6 0 1 .4 1 1s-.4 1-1 1z" fill-rule="nonzero"/></svg>', "align-center": '<svg width="24" height="24"><path d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 1 1 0-2zm3 4h8c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 1 1 0-2zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 0 1 0-2zm-3-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2z" fill-rule="evenodd"/></svg>', "align-justify": '<svg width="24" height="24"><path d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 1 1 0-2zm0 4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 1 1 0-2zm0 4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2zm0 4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2z" fill-rule="evenodd"/></svg>', "align-left": '<svg width="24" height="24"><path d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 1 1 0-2zm0 4h8c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 1 1 0-2zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2zm0-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2z" fill-rule="evenodd"/></svg>', "align-none": '<svg width="24" height="24"><path d="M14.2 5L13 7H5a1 1 0 1 1 0-2h9.2zm4 0h.8a1 1 0 0 1 0 2h-2l1.2-2zm-6.4 4l-1.2 2H5a1 1 0 0 1 0-2h6.8zm4 0H19a1 1 0 0 1 0 2h-4.4l1.2-2zm-6.4 4l-1.2 2H5a1 1 0 0 1 0-2h4.4zm4 0H19a1 1 0 0 1 0 2h-6.8l1.2-2zM7 17l-1.2 2H5a1 1 0 0 1 0-2h2zm4 0h8a1 1 0 0 1 0 2H9.8l1.2-2zm5.2-13.5l1.3.7-9.7 16.3-1.3-.7 9.7-16.3z" fill-rule="evenodd"/></svg>', "align-right": '<svg width="24" height="24"><path d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 1 1 0-2zm6 4h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2zm-6-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2z" fill-rule="evenodd"/></svg>', "arrow-left": '<svg width="24" height="24"><path d="M5.6 13l12 6a1 1 0 0 0 1.4-1V6a1 1 0 0 0-1.4-.9l-12 6a1 1 0 0 0 0 1.8z" fill-rule="evenodd"/></svg>', "arrow-right": '<svg width="24" height="24"><path d="M18.5 13l-12 6A1 1 0 0 1 5 18V6a1 1 0 0 1 1.4-.9l12 6a1 1 0 0 1 0 1.8z" fill-rule="evenodd"/></svg>', bold: '<svg width="24" height="24"><path d="M7.8 19c-.3 0-.5 0-.6-.2l-.2-.5V5.7c0-.2 0-.4.2-.5l.6-.2h5c1.5 0 2.7.3 3.5 1 .7.6 1.1 1.4 1.1 2.5a3 3 0 0 1-.6 1.9c-.4.6-1 1-1.6 1.2.4.1.9.3 1.3.6s.8.7 1 1.2c.4.4.5 1 .5 1.6 0 1.3-.4 2.3-1.3 3-.8.7-2.1 1-3.8 1H7.8zm5-8.3c.6 0 1.2-.1 1.6-.5.4-.3.6-.7.6-1.3 0-1.1-.8-1.7-2.3-1.7H9.3v3.5h3.4zm.5 6c.7 0 1.3-.1 1.7-.4.4-.4.6-.9.6-1.5s-.2-1-.7-1.4c-.4-.3-1-.4-2-.4H9.4v3.8h4z" fill-rule="evenodd"/></svg>', bookmark: '<svg width="24" height="24"><path d="M6 4v17l6-4 6 4V4c0-.6-.4-1-1-1H7a1 1 0 0 0-1 1z" fill-rule="nonzero"/></svg>', "border-width": '<svg width="24" height="24"><path d="M5 14.8h14a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2zm-.5 3.7h15c.3 0 .5.2.5.5s-.2.5-.5.5h-15a.5.5 0 1 1 0-1zm.5-8.3h14c.6 0 1 .4 1 1v1c0 .5-.4 1-1 1H5a1 1 0 0 1-1-1v-1c0-.6.4-1 1-1zm0-5.7h14c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1H5a1 1 0 0 1-1-1v-2c0-.6.4-1 1-1z" fill-rule="evenodd"/></svg>', brightness: '<svg width="24" height="24"><path d="M12 17c.3 0 .5.1.7.3.2.2.3.4.3.7v1c0 .3-.1.5-.3.7a1 1 0 0 1-.7.3 1 1 0 0 1-.7-.3 1 1 0 0 1-.3-.7v-1c0-.3.1-.5.3-.7.2-.2.4-.3.7-.3zm0-10a1 1 0 0 1-.7-.3A1 1 0 0 1 11 6V5c0-.3.1-.5.3-.7.2-.2.4-.3.7-.3.3 0 .5.1.7.3.2.2.3.4.3.7v1c0 .3-.1.5-.3.7a1 1 0 0 1-.7.3zm7 4c.3 0 .5.1.7.3.2.2.3.4.3.7 0 .3-.1.5-.3.7a1 1 0 0 1-.7.3h-1a1 1 0 0 1-.7-.3 1 1 0 0 1-.3-.7c0-.3.1-.5.3-.7.2-.2.4-.3.7-.3h1zM7 12c0 .3-.1.5-.3.7a1 1 0 0 1-.7.3H5a1 1 0 0 1-.7-.3A1 1 0 0 1 4 12c0-.3.1-.5.3-.7.2-.2.4-.3.7-.3h1c.3 0 .5.1.7.3.2.2.3.4.3.7zm10 3.5l.7.8c.2.1.3.4.3.6 0 .3-.1.6-.3.8a1 1 0 0 1-.8.3 1 1 0 0 1-.6-.3l-.8-.7a1 1 0 0 1-.3-.8c0-.2.1-.5.3-.7a1 1 0 0 1 1.4 0zm-10-7l-.7-.8a1 1 0 0 1-.3-.6c0-.3.1-.6.3-.8.2-.2.5-.3.8-.3.2 0 .5.1.7.3l.7.7c.2.2.3.5.3.8 0 .2-.1.5-.3.7a1 1 0 0 1-.7.3 1 1 0 0 1-.8-.3zm10 0a1 1 0 0 1-.8.3 1 1 0 0 1-.7-.3 1 1 0 0 1-.3-.7c0-.3.1-.6.3-.8l.8-.7c.1-.2.4-.3.6-.3.3 0 .6.1.8.3.2.2.3.5.3.8 0 .2-.1.5-.3.7l-.7.7zm-10 7c.2-.2.5-.3.8-.3.2 0 .5.1.7.3a1 1 0 0 1 0 1.4l-.8.8a1 1 0 0 1-.6.3 1 1 0 0 1-.8-.3 1 1 0 0 1-.3-.8c0-.2.1-.5.3-.6l.7-.8zM12 8a4 4 0 0 1 3.7 2.4 4 4 0 0 1 0 3.2A4 4 0 0 1 12 16a4 4 0 0 1-3.7-2.4 4 4 0 0 1 0-3.2A4 4 0 0 1 12 8zm0 6.5c.7 0 1.3-.2 1.8-.7.5-.5.7-1.1.7-1.8s-.2-1.3-.7-1.8c-.5-.5-1.1-.7-1.8-.7s-1.3.2-1.8.7c-.5.5-.7 1.1-.7 1.8s.2 1.3.7 1.8c.5.5 1.1.7 1.8.7z" fill-rule="evenodd"/></svg>', browse: '<svg width="24" height="24"><path d="M19 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4v-2h4V8H5v10h4v2H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h14zm-8 9.4l-2.3 2.3a1 1 0 1 1-1.4-1.4l4-4a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1-1.4 1.4L13 13.4V20a1 1 0 0 1-2 0v-6.6z" fill-rule="nonzero"/></svg>', cancel: '<svg width="24" height="24"><path d="M12 4.6a7.4 7.4 0 1 1 0 14.8 7.4 7.4 0 0 1 0-14.8zM12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm0 8L14.8 8l1 1.1-2.7 2.8 2.7 2.7-1.1 1.1-2.7-2.7-2.7 2.7-1-1.1 2.6-2.7-2.7-2.7 1-1.1 2.8 2.7z" fill-rule="nonzero"/></svg>', "change-case": '<svg width="24" height="24"><path d="M18.4 18.2v-.6c-.5.8-1.3 1.2-2.4 1.2-2.2 0-3.3-1.6-3.3-4.8 0-3.1 1-4.7 3.3-4.7 1.1 0 1.8.3 2.4 1.1v-.6c0-.5.4-.8.8-.8s.8.3.8.8v8.4c0 .5-.4.8-.8.8a.8.8 0 0 1-.8-.8zm-2-7.4c-1.3 0-1.8.9-1.8 3.2 0 2.4.5 3.3 1.7 3.3 1.3 0 1.8-.9 1.8-3.2 0-2.4-.5-3.3-1.7-3.3zM10 15.7H5.5l-.8 2.6a1 1 0 0 1-1 .7h-.2a.7.7 0 0 1-.7-1l4-12a1 1 0 1 1 2 0l4 12a.7.7 0 0 1-.8 1h-.2a1 1 0 0 1-1-.7l-.8-2.6zm-.3-1.5l-2-6.5-1.9 6.5h3.9z" fill-rule="evenodd"/></svg>', "character-count": '<svg width="24" height="24"><path d="M4 11.5h16v1H4v-1zm4.8-6.8V10H7.7V5.8h-1v-1h2zM11 8.3V9h2v1h-3V7.7l2-1v-.9h-2v-1h3v2.4l-2 1zm6.3-3.4V10h-3.1V9h2.1V8h-2.1V6.8h2.1v-1h-2.1v-1h3.1zM5.8 16.4c0-.5.2-.8.5-1 .2-.2.6-.3 1.2-.3l.8.1c.2 0 .4.2.5.3l.4.4v2.8l.2.3H8.2v-.1-.2l-.6.3H7c-.4 0-.7 0-1-.2a1 1 0 0 1-.3-.9c0-.3 0-.6.3-.8.3-.2.7-.4 1.2-.4l.6-.2h.3v-.2l-.1-.2a.8.8 0 0 0-.5-.1 1 1 0 0 0-.4 0l-.3.4h-1zm2.3.8h-.2l-.2.1-.4.1a1 1 0 0 0-.4.2l-.2.2.1.3.5.1h.4l.4-.4v-.6zm2-3.4h1.2v1.7l.5-.3h.5c.5 0 .9.1 1.2.5.3.4.5.8.5 1.4 0 .6-.2 1.1-.5 1.5-.3.4-.7.6-1.3.6l-.6-.1-.4-.4v.4h-1.1v-5.4zm1.1 3.3c0 .3 0 .6.2.8a.7.7 0 0 0 1.2 0l.2-.8c0-.4 0-.6-.2-.8a.7.7 0 0 0-.6-.3l-.6.3-.2.8zm6.1-.5c0-.2 0-.3-.2-.4a.8.8 0 0 0-.5-.2c-.3 0-.5.1-.6.3l-.2.9c0 .3 0 .6.2.8.1.2.3.3.6.3.2 0 .4 0 .5-.2l.2-.4h1.1c0 .5-.3.8-.6 1.1a2 2 0 0 1-1.3.4c-.5 0-1-.2-1.3-.6a2 2 0 0 1-.5-1.4c0-.6.1-1.1.5-1.5.3-.4.8-.5 1.4-.5.5 0 1 0 1.2.3.4.3.5.7.5 1.2h-1v-.1z" fill-rule="evenodd"/></svg>', "checklist-rtl": '<svg width="24" height="24"><path d="M5 17h8c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 1 1 0-2zm14.2 11c.2-.4.6-.5.9-.3.3.2.4.6.2 1L18 20c-.2.3-.7.4-1 0l-1.3-1.3a.7.7 0 0 1 0-1c.3-.2.7-.2 1 0l.7.9 1.7-2.8zm0-6c.2-.4.6-.5.9-.3.3.2.4.6.2 1L18 14c-.2.3-.7.4-1 0l-1.3-1.3a.7.7 0 0 1 0-1c.3-.2.7-.2 1 0l.7.9 1.7-2.8zm0-6c.2-.4.6-.5.9-.3.3.2.4.6.2 1L18 8c-.2.3-.7.4-1 0l-1.3-1.3a.7.7 0 0 1 0-1c.3-.2.7-.2 1 0l.7.9 1.7-2.8z" fill-rule="evenodd"/></svg>', checklist: '<svg width="24" height="24"><path d="M11 17h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2zm0-6h8a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2zM7.2 16c.2-.4.6-.5.9-.3.3.2.4.6.2 1L6 20c-.2.3-.7.4-1 0l-1.3-1.3a.7.7 0 0 1 0-1c.3-.2.7-.2 1 0l.7.9 1.7-2.8zm0-6c.2-.4.6-.5.9-.3.3.2.4.6.2 1L6 14c-.2.3-.7.4-1 0l-1.3-1.3a.7.7 0 0 1 0-1c.3-.2.7-.2 1 0l.7.9 1.7-2.8zm0-6c.2-.4.6-.5.9-.3.3.2.4.6.2 1L6 8c-.2.3-.7.4-1 0L3.8 6.9a.7.7 0 0 1 0-1c.3-.2.7-.2 1 0l.7.9 1.7-2.8z" fill-rule="evenodd"/></svg>', checkmark: '<svg width="24" height="24"><path d="M18.2 5.4a1 1 0 0 1 1.6 1.2l-8 12a1 1 0 0 1-1.5.1l-5-5a1 1 0 1 1 1.4-1.4l4.1 4.1 7.4-11z" fill-rule="nonzero"/></svg>', "chevron-down": '<svg width="10" height="10"><path d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 0 1 0-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z" fill-rule="nonzero"/></svg>', "chevron-left": '<svg width="10" height="10"><path d="M7.8 1.3L4 5l3.8 3.7c.3.3.3.8 0 1-.4.4-.9.4-1.2 0L2.2 5.7a.8.8 0 0 1 0-1.2L6.6.2C7 0 7.4 0 7.8.2c.3.3.3.8 0 1.1z" fill-rule="nonzero"/></svg>', "chevron-right": '<svg width="10" height="10"><path d="M2.2 1.3a.8.8 0 0 1 0-1c.4-.4.9-.4 1.2 0l4.4 4.1c.3.4.3.9 0 1.2L3.4 9.8c-.3.3-.8.3-1.2 0a.8.8 0 0 1 0-1.1L6 5 2.2 1.3z" fill-rule="nonzero"/></svg>', "chevron-up": '<svg width="10" height="10"><path d="M8.7 7.8L5 4 1.3 7.8c-.3.3-.8.3-1 0a.8.8 0 0 1 0-1.2l4.1-4.4c.3-.3.9-.3 1.2 0l4.2 4.4c.3.3.3.9 0 1.2-.3.3-.8.3-1.1 0z" fill-rule="nonzero"/></svg>', close: '<svg width="24" height="24"><path d="M17.3 8.2L13.4 12l3.9 3.8a1 1 0 0 1-1.5 1.5L12 13.4l-3.8 3.9a1 1 0 0 1-1.5-1.5l3.9-3.8-3.9-3.8a1 1 0 0 1 1.5-1.5l3.8 3.9 3.8-3.9a1 1 0 0 1 1.5 1.5z" fill-rule="evenodd"/></svg>', "code-sample": '<svg width="24" height="26"><path d="M7.1 11a2.8 2.8 0 0 1-.8 2 2.8 2.8 0 0 1 .8 2v1.7c0 .3.1.6.4.8.2.3.5.4.8.4.3 0 .4.2.4.4v.8c0 .2-.1.4-.4.4-.7 0-1.4-.3-2-.8-.5-.6-.8-1.3-.8-2V15c0-.3-.1-.6-.4-.8-.2-.3-.5-.4-.8-.4a.4.4 0 0 1-.4-.4v-.8c0-.2.2-.4.4-.4.3 0 .6-.1.8-.4.3-.2.4-.5.4-.8V9.3c0-.7.3-1.4.8-2 .6-.5 1.3-.8 2-.8.3 0 .4.2.4.4v.8c0 .2-.1.4-.4.4-.3 0-.6.1-.8.4-.3.2-.4.5-.4.8V11zm9.8 0V9.3c0-.3-.1-.6-.4-.8-.2-.3-.5-.4-.8-.4a.4.4 0 0 1-.4-.4V7c0-.2.1-.4.4-.4.7 0 1.4.3 2 .8.5.6.8 1.3.8 2V11c0 .3.1.6.4.8.2.3.5.4.8.4.2 0 .4.2.4.4v.8c0 .2-.2.4-.4.4-.3 0-.6.1-.8.4-.3.2-.4.5-.4.8v1.7c0 .7-.3 1.4-.8 2-.6.5-1.3.8-2 .8a.4.4 0 0 1-.4-.4v-.8c0-.2.1-.4.4-.4.3 0 .6-.1.8-.4.3-.2.4-.5.4-.8V15a2.8 2.8 0 0 1 .8-2 2.8 2.8 0 0 1-.8-2zm-3.3-.4c0 .4-.1.8-.5 1.1-.3.3-.7.5-1.1.5-.4 0-.8-.2-1.1-.5-.4-.3-.5-.7-.5-1.1 0-.5.1-.9.5-1.2.3-.3.7-.4 1.1-.4.4 0 .8.1 1.1.4.4.3.5.7.5 1.2zM12 13c.4 0 .8.1 1.1.5.4.3.5.7.5 1.1 0 1-.1 1.6-.5 2a3 3 0 0 1-1.1 1c-.4.3-.8.4-1.1.4a.5.5 0 0 1-.5-.5V17a3 3 0 0 0 1-.2l.6-.6c-.6 0-1-.2-1.3-.5-.2-.3-.3-.7-.3-1 0-.5.1-1 .5-1.2.3-.4.7-.5 1.1-.5z" fill-rule="evenodd"/></svg>', "color-levels": '<svg width="24" height="24"><path d="M17.5 11.4A9 9 0 0 1 18 14c0 .5 0 1-.2 1.4 0 .4-.3.9-.5 1.3a6.2 6.2 0 0 1-3.7 3 5.7 5.7 0 0 1-3.2 0A5.9 5.9 0 0 1 7.6 18a6.2 6.2 0 0 1-1.4-2.6 6.7 6.7 0 0 1 0-2.8c0-.4.1-.9.3-1.3a13.6 13.6 0 0 1 2.3-4A20 20 0 0 1 12 4a26.4 26.4 0 0 1 3.2 3.4 18.2 18.2 0 0 1 2.3 4zm-2 4.5c.4-.7.5-1.4.5-2a7.3 7.3 0 0 0-1-3.2c.2.6.2 1.2.2 1.9a4.5 4.5 0 0 1-1.3 3 5.3 5.3 0 0 1-2.3 1.5 4.9 4.9 0 0 1-2 .1 4.3 4.3 0 0 0 2.4.8 4 4 0 0 0 2-.6 4 4 0 0 0 1.5-1.5z" fill-rule="evenodd"/></svg>', "color-picker": '<svg width="24" height="24"><path d="M12 3a9 9 0 0 0 0 18 1.5 1.5 0 0 0 1.1-2.5c-.2-.3-.4-.6-.4-1 0-.8.7-1.5 1.5-1.5H16a5 5 0 0 0 5-5c0-4.4-4-8-9-8zm-5.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" fill-rule="nonzero"/></svg>', "color-swatch-remove-color": '<svg width="24" height="24"><path stroke="#000" stroke-width="2" d="M21 3L3 21" fill-rule="evenodd"/></svg>', "color-swatch": '<svg width="24" height="24"><rect x="3" y="3" width="18" height="18" rx="1" fill-rule="evenodd"/></svg>', "comment-add": '<svg width="24" height="24"><g fill-rule="nonzero"><path d="M9 19l3-2h7c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1H5a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h4v2zm-2 4v-4H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-6.4L7 23z"/><path d="M13 10h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2V8a1 1 0 0 1 2 0v2z"/></g></svg>', comment: '<svg width="24" height="24"><path fill-rule="nonzero" d="M9 19l3-2h7c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1H5a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h4v2zm-2 4v-4H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-6.4L7 23z"/></svg>', contrast: '<svg width="24" height="24"><path d="M12 4a7.8 7.8 0 0 1 5.7 2.3A8 8 0 1 1 12 4zm-6 8a6 6 0 0 0 6 6V6a6 6 0 0 0-6 6z" fill-rule="evenodd"/></svg>', copy: '<svg width="24" height="24"><path d="M16 3H6a2 2 0 0 0-2 2v11h2V5h10V3zm1 4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V9c0-1.2.9-2 2-2h7zm0 12V9h-7v10h7z" fill-rule="nonzero"/></svg>', crop: '<svg width="24" height="24"><path d="M17 8v7h2c.6 0 1 .4 1 1s-.4 1-1 1h-2v2c0 .6-.4 1-1 1a1 1 0 0 1-1-1v-2H7V9H5a1 1 0 1 1 0-2h2V5c0-.6.4-1 1-1s1 .4 1 1v2h7l3-3 1 1-3 3zM9 9v5l5-5H9zm1 6h5v-5l-5 5z" fill-rule="evenodd"/></svg>', cut: '<svg width="24" height="24"><path d="M18 15c.6.7 1 1.4 1 2.3 0 .8-.2 1.5-.7 2l-.8.5-1 .2c-.4 0-.8 0-1.2-.3a3.9 3.9 0 0 1-2.1-2.2c-.2-.5-.3-1-.2-1.5l-1-1-1 1c0 .5 0 1-.2 1.5-.1.5-.4 1-.9 1.4-.3.4-.7.6-1.2.8l-1.2.3c-.4 0-.7 0-1-.2-.3 0-.6-.3-.8-.5-.5-.5-.8-1.2-.7-2 0-.9.4-1.6 1-2.2A3.7 3.7 0 0 1 8.6 14H9l1-1-4-4-.5-1a3.3 3.3 0 0 1 0-2c0-.4.3-.7.5-1l6 6 6-6 .5 1a3.3 3.3 0 0 1 0 2c0 .4-.3.7-.5 1l-4 4 1 1h.5c.4 0 .8 0 1.2.3.5.2.9.4 1.2.8zm-8.5 2.2l.1-.4v-.3-.4a1 1 0 0 0-.2-.5 1 1 0 0 0-.4-.2 1.6 1.6 0 0 0-.8 0 2.6 2.6 0 0 0-.8.3 2.5 2.5 0 0 0-.9 1.1l-.1.4v.7l.2.5.5.2h.7a2.5 2.5 0 0 0 .8-.3 2.8 2.8 0 0 0 1-1zm2.5-2.8c.4 0 .7-.1 1-.4.3-.3.4-.6.4-1s-.1-.7-.4-1c-.3-.3-.6-.4-1-.4s-.7.1-1 .4c-.3.3-.4.6-.4 1s.1.7.4 1c.3.3.6.4 1 .4zm5.4 4l.2-.5v-.4-.3a2.6 2.6 0 0 0-.3-.8 2.4 2.4 0 0 0-.7-.7 2.5 2.5 0 0 0-.8-.3 1.5 1.5 0 0 0-.8 0 1 1 0 0 0-.4.2 1 1 0 0 0-.2.5 1.5 1.5 0 0 0 0 .7v.4l.3.4.3.4a2.8 2.8 0 0 0 .8.5l.4.1h.7l.5-.2z" fill-rule="evenodd"/></svg>', "document-properties": '<svg width="24" height="24"><path d="M14.4 3H7a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V7.6L14.4 3zM17 19H7V5h6v4h4v10z" fill-rule="nonzero"/></svg>', drag: '<svg width="24" height="24"><path d="M13 5h2v2h-2V5zm0 4h2v2h-2V9zM9 9h2v2H9V9zm4 4h2v2h-2v-2zm-4 0h2v2H9v-2zm0 4h2v2H9v-2zm4 0h2v2h-2v-2zM9 5h2v2H9V5z" fill-rule="evenodd"/></svg>', duplicate: '<svg width="24" height="24"><g fill-rule="nonzero"><path d="M16 3v2H6v11H4V5c0-1.1.9-2 2-2h10zm3 8h-2V9h-7v10h9a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V9c0-1.2.9-2 2-2h7a2 2 0 0 1 2 2v2z"/><path d="M17 14h1a1 1 0 0 1 0 2h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1z"/></g></svg>', "edit-block": '<svg width="24" height="24"><path fill-rule="nonzero" d="M19.8 8.8l-9.4 9.4c-.2.2-.5.4-.9.4l-5.4 1.2 1.2-5.4.5-.8 9.4-9.4c.7-.7 1.8-.7 2.5 0l2.1 2.1c.7.7.7 1.8 0 2.5zm-2-.2l1-.9v-.3l-2.2-2.2a.3.3 0 0 0-.3 0l-1 1L18 8.5zm-1 1l-2.5-2.4-6 6 2.5 2.5 6-6zm-7 7.1l-2.6-2.4-.3.3-.1.2-.7 3 3.1-.6h.1l.4-.5z"/></svg>', "edit-image": '<svg width="24" height="24"><path d="M18 16h2V7a2 2 0 0 0-2-2H7v2h11v9zM6 17h15a1 1 0 0 1 0 2h-1v1a1 1 0 0 1-2 0v-1H6a2 2 0 0 1-2-2V7H3a1 1 0 1 1 0-2h1V4a1 1 0 1 1 2 0v13zm3-5.3l1.3 2 3-4.7 3.7 6H7l2-3.3z" fill-rule="nonzero"/></svg>', "embed-page": '<svg width="24" height="24"><path d="M19 6V5H5v14h2A13 13 0 0 1 19 6zm0 1.4c-.8.8-1.6 2.4-2.2 4.6H19V7.4zm0 5.6h-2.4c-.4 1.8-.6 3.8-.6 6h3v-6zm-4 6c0-2.2.2-4.2.6-6H13c-.7 1.8-1.1 3.8-1.1 6h3zm-4 0c0-2.2.4-4.2 1-6H9.6A12 12 0 0 0 8 19h3zM4 3h16c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V4c0-.6.4-1 1-1zm11.8 9c.4-1.9 1-3.4 1.8-4.5a9.2 9.2 0 0 0-4 4.5h2.2zm-3.4 0a12 12 0 0 1 2.8-4 12 12 0 0 0-5 4h2.2z" fill-rule="nonzero"/></svg>', embed: '<svg width="24" height="24"><path d="M4 3h16c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V4c0-.6.4-1 1-1zm1 2v14h14V5H5zm4.8 2.6l5.6 4a.5.5 0 0 1 0 .8l-5.6 4A.5.5 0 0 1 9 16V8a.5.5 0 0 1 .8-.4z" fill-rule="nonzero"/></svg>', emoji: '<svg width="24" height="24"><path d="M9 11c.6 0 1-.4 1-1s-.4-1-1-1a1 1 0 0 0-1 1c0 .6.4 1 1 1zm6 0c.6 0 1-.4 1-1s-.4-1-1-1a1 1 0 0 0-1 1c0 .6.4 1 1 1zm-3 5.5c2.1 0 4-1.5 4.4-3.5H7.6c.5 2 2.3 3.5 4.4 3.5zM12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 14.5a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13z" fill-rule="nonzero"/></svg>', fill: '<svg width="24" height="26"><path d="M16.6 12l-9-9-1.4 1.4 2.4 2.4-5.2 5.1c-.5.6-.5 1.6 0 2.2L9 19.6a1.5 1.5 0 0 0 2.2 0l5.5-5.5c.5-.6.5-1.6 0-2.2zM5.2 13L10 8.2l4.8 4.8H5.2zM19 14.5s-2 2.2-2 3.5c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.3-2-3.5-2-3.5z" fill-rule="nonzero"/></svg>', "flip-horizontally": '<svg width="24" height="24"><path d="M14 19h2v-2h-2v2zm4-8h2V9h-2v2zM4 7v10c0 1.1.9 2 2 2h3v-2H6V7h3V5H6a2 2 0 0 0-2 2zm14-2v2h2a2 2 0 0 0-2-2zm-7 16h2V3h-2v18zm7-6h2v-2h-2v2zm-4-8h2V5h-2v2zm4 12a2 2 0 0 0 2-2h-2v2z" fill-rule="nonzero"/></svg>', "flip-vertically": '<svg width="24" height="24"><path d="M5 14v2h2v-2H5zm8 4v2h2v-2h-2zm4-14H7a2 2 0 0 0-2 2v3h2V6h10v3h2V6a2 2 0 0 0-2-2zm2 14h-2v2a2 2 0 0 0 2-2zM3 11v2h18v-2H3zm6 7v2h2v-2H9zm8-4v2h2v-2h-2zM5 18c0 1.1.9 2 2 2v-2H5z" fill-rule="nonzero"/></svg>', "format-painter": '<svg width="24" height="24"><path d="M18 5V4c0-.5-.4-1-1-1H5a1 1 0 0 0-1 1v4c0 .6.5 1 1 1h12c.6 0 1-.4 1-1V7h1v4H9v9c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-7h8V5h-3z" fill-rule="nonzero"/></svg>', fullscreen: '<svg width="24" height="24"><path d="M15.3 10l-1.2-1.3 2.9-3h-2.3a.9.9 0 1 1 0-1.7H19c.5 0 .9.4.9.9v4.4a.9.9 0 1 1-1.8 0V7l-2.9 3zm0 4l3 3v-2.3a.9.9 0 1 1 1.7 0V19c0 .5-.4.9-.9.9h-4.4a.9.9 0 1 1 0-1.8H17l-3-2.9 1.3-1.2zM10 15.4l-2.9 3h2.3a.9.9 0 1 1 0 1.7H5a.9.9 0 0 1-.9-.9v-4.4a.9.9 0 1 1 1.8 0V17l2.9-3 1.2 1.3zM8.7 10L5.7 7v2.3a.9.9 0 0 1-1.7 0V5c0-.5.4-.9.9-.9h4.4a.9.9 0 0 1 0 1.8H7l3 2.9-1.3 1.2z" fill-rule="nonzero"/></svg>', gallery: '<svg width="24" height="24"><path fill-rule="nonzero" d="M5 15.7l2.3-2.2c.3-.3.7-.3 1 0L11 16l5.1-5c.3-.4.8-.4 1 0l2 1.9V8H5v7.7zM5 18V19h3l1.8-1.9-2-2L5 17.9zm14-3l-2.5-2.4-6.4 6.5H19v-4zM4 6h16c.6 0 1 .4 1 1v13c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V7c0-.6.4-1 1-1zm6 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM4.5 4h15a.5.5 0 1 1 0 1h-15a.5.5 0 0 1 0-1zm2-2h11a.5.5 0 1 1 0 1h-11a.5.5 0 0 1 0-1z"/></svg>', gamma: '<svg width="24" height="24"><path d="M4 3h16c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V4c0-.6.4-1 1-1zm1 2v14h14V5H5zm6.5 11.8V14L9.2 8.7a5.1 5.1 0 0 0-.4-.8l-.1-.2H8 8v-1l.3-.1.3-.1h.7a1 1 0 0 1 .6.5l.1.3a8.5 8.5 0 0 1 .3.6l1.9 4.6 2-5.2a1 1 0 0 1 1-.6.5.5 0 0 1 .5.6L13 14v2.8a.7.7 0 0 1-1.4 0z" fill-rule="nonzero"/></svg>', help: '<svg width="24" height="24"><g fill-rule="evenodd"><path d="M12 5.5a6.5 6.5 0 0 0-6 9 6.3 6.3 0 0 0 1.4 2l1 1a6.3 6.3 0 0 0 3.6 1 6.5 6.5 0 0 0 6-9 6.3 6.3 0 0 0-1.4-2l-1-1a6.3 6.3 0 0 0-3.6-1zM12 4a7.8 7.8 0 0 1 5.7 2.3A8 8 0 1 1 12 4z"/><path d="M9.6 9.7a.7.7 0 0 1-.7-.8c0-1.1 1.5-1.8 3.2-1.8 1.8 0 3.2.8 3.2 2.4 0 1.4-.4 2.1-1.5 2.8-.2 0-.3.1-.3.2a2 2 0 0 0-.8.8.8.8 0 0 1-1.4-.6c.3-.7.8-1 1.3-1.5l.4-.2c.7-.4.8-.6.8-1.5 0-.5-.6-.9-1.7-.9-.5 0-1 .1-1.4.3-.2 0-.3.1-.3.2v-.2c0 .4-.4.8-.8.8z" fill-rule="nonzero"/><circle cx="12" cy="16" r="1"/></g></svg>', "highlight-bg-color": '<svg width="24" height="24"><g fill-rule="evenodd"><path id="tox-icon-highlight-bg-color__color" d="M3 18h18v3H3z"/><path fill-rule="nonzero" d="M7.7 16.7H3l3.3-3.3-.7-.8L10.2 8l4 4.1-4 4.2c-.2.2-.6.2-.8 0l-.6-.7-1.1 1.1zm5-7.5L11 7.4l3-2.9a2 2 0 0 1 2.6 0L18 6c.7.7.7 2 0 2.7l-2.9 2.9-1.8-1.8-.5-.6"/></g></svg>', home: '<svg width="24" height="24"><path fill-rule="nonzero" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>', "horizontal-rule": '<svg width="24" height="24"><path d="M4 11h16v2H4z" fill-rule="evenodd"/></svg>', "image-options": '<svg width="24" height="24"><path d="M6 10a2 2 0 0 0-2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2 2 2 0 0 0-2-2zm12 0a2 2 0 0 0-2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2 2 2 0 0 0-2-2zm-6 0a2 2 0 0 0-2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2 2 2 0 0 0-2-2z" fill-rule="nonzero"/></svg>', image: '<svg width="24" height="24"><path d="M5 15.7l3.3-3.2c.3-.3.7-.3 1 0L12 15l4.1-4c.3-.4.8-.4 1 0l2 1.9V5H5v10.7zM5 18V19h3l2.8-2.9-2-2L5 17.9zm14-3l-2.5-2.4-6.4 6.5H19v-4zM4 3h16c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V4c0-.6.4-1 1-1zm6 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill-rule="nonzero"/></svg>', indent: '<svg width="24" height="24"><path d="M7 5h12c.6 0 1 .4 1 1s-.4 1-1 1H7a1 1 0 1 1 0-2zm5 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 0 1 0-2zm0 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 0 1 0-2zm-5 4h12a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2zm-2.6-3.8L6.2 12l-1.8-1.2a1 1 0 0 1 1.2-1.6l3 2a1 1 0 0 1 0 1.6l-3 2a1 1 0 1 1-1.2-1.6z" fill-rule="evenodd"/></svg>', info: '<svg width="24" height="24"><path d="M12 4a7.8 7.8 0 0 1 5.7 2.3A8 8 0 1 1 12 4zm-1 3v2h2V7h-2zm3 10v-1h-1v-5h-3v1h1v4h-1v1h4z" fill-rule="evenodd"/></svg>', "insert-character": '<svg width="24" height="24"><path d="M15 18h4l1-2v4h-6v-3.3l1.4-1a6 6 0 0 0 1.8-2.9 6.3 6.3 0 0 0-.1-4.1 5.8 5.8 0 0 0-3-3.2c-.6-.3-1.3-.5-2.1-.5a5.1 5.1 0 0 0-3.9 1.8 6.3 6.3 0 0 0-1.3 6 6.2 6.2 0 0 0 1.8 3l1.4.9V20H4v-4l1 2h4v-.5l-2-1L5.4 15A6.5 6.5 0 0 1 4 11c0-1 .2-1.9.6-2.7A7 7 0 0 1 6.3 6C7.1 5.4 8 5 9 4.5c1-.3 2-.5 3.1-.5a8.8 8.8 0 0 1 5.7 2 7 7 0 0 1 1.7 2.3 6 6 0 0 1 .2 4.8c-.2.7-.6 1.3-1 1.9a7.6 7.6 0 0 1-3.6 2.5v.5z" fill-rule="evenodd"/></svg>', "insert-time": '<svg width="24" height="24"><g fill-rule="nonzero"><path d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm0 2a9 9 0 1 1 0-18 9 9 0 0 1 0 18z"/><path d="M16 12h-3V7c0-.6-.4-1-1-1a1 1 0 0 0-1 1v7h5c.6 0 1-.4 1-1s-.4-1-1-1z"/></g></svg>', invert: '<svg width="24" height="24"><path d="M18 19.3L16.5 18a5.8 5.8 0 0 1-3.1 1.9 6.1 6.1 0 0 1-5.5-1.6A5.8 5.8 0 0 1 6 14v-.3l.1-1.2A13.9 13.9 0 0 1 7.7 9l-3-3 .7-.8 2.8 2.9 9 8.9 1.5 1.6-.7.6zm0-5.5v.3l-.1 1.1-.4 1-1.2-1.2a4.3 4.3 0 0 0 .2-1v-.2c0-.4 0-.8-.2-1.3l-.5-1.4a14.8 14.8 0 0 0-3-4.2L12 6a26.1 26.1 0 0 0-2.2 2.5l-1-1a20.9 20.9 0 0 1 2.9-3.3L12 4l1 .8a22.2 22.2 0 0 1 4 5.4c.6 1.2 1 2.4 1 3.6z" fill-rule="evenodd"/></svg>', italic: '<svg width="24" height="24"><path d="M16.7 4.7l-.1.9h-.3c-.6 0-1 0-1.4.3-.3.3-.4.6-.5 1.1l-2.1 9.8v.6c0 .5.4.8 1.4.8h.2l-.2.8H8l.2-.8h.2c1.1 0 1.8-.5 2-1.5l2-9.8.1-.5c0-.6-.4-.8-1.4-.8h-.3l.2-.9h5.8z" fill-rule="evenodd"/></svg>', line: '<svg width="24" height="24"><path d="M15 9l-8 8H4v-3l8-8 3 3zm1-1l-3-3 1-1h1c-.2 0 0 0 0 0l2 2s0 .2 0 0v1l-1 1zM4 18h16v2H4v-2z" fill-rule="evenodd"/></svg>', link: '<svg width="24" height="24"><path d="M6.2 12.3a1 1 0 0 1 1.4 1.4l-2.1 2a2 2 0 1 0 2.7 2.8l4.8-4.8a1 1 0 0 0 0-1.4 1 1 0 1 1 1.4-1.3 2.9 2.9 0 0 1 0 4L9.6 20a3.9 3.9 0 0 1-5.5-5.5l2-2zm11.6-.6a1 1 0 0 1-1.4-1.4l2-2a2 2 0 1 0-2.6-2.8L11 10.3a1 1 0 0 0 0 1.4A1 1 0 1 1 9.6 13a2.9 2.9 0 0 1 0-4L14.4 4a3.9 3.9 0 0 1 5.5 5.5l-2 2z" fill-rule="nonzero"/></svg>', "list-bull-circle": '<svg width="48" height="48"><g fill-rule="evenodd"><path d="M11 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 1 0-6 3 3 0 0 1 0 6zM11 26a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 1 0-6 3 3 0 0 1 0 6zM11 36a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" fill-rule="nonzero"/><path opacity=".2" d="M18 12h22v4H18zM18 22h22v4H18zM18 32h22v4H18z"/></g></svg>', "list-bull-default": '<svg width="48" height="48"><g fill-rule="evenodd"><circle cx="11" cy="14" r="3"/><circle cx="11" cy="24" r="3"/><circle cx="11" cy="34" r="3"/><path opacity=".2" d="M18 12h22v4H18zM18 22h22v4H18zM18 32h22v4H18z"/></g></svg>', "list-bull-square": '<svg width="48" height="48"><g fill-rule="evenodd"><path d="M8 11h6v6H8zM8 21h6v6H8zM8 31h6v6H8z"/><path opacity=".2" d="M18 12h22v4H18zM18 22h22v4H18zM18 32h22v4H18z"/></g></svg>', "list-num-default-rtl": '<svg width="48" height="48"><g fill-rule="evenodd"><path opacity=".2" d="M8 12h22v4H8zM8 22h22v4H8zM8 32h22v4H8z"/><path d="M37.4 17v-4.8l-1.6 1v-1.1l1.6-1h1.2V17zM33.3 17.1c-.5 0-.8-.3-.8-.7 0-.4.3-.7.8-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7zm1.7 5.7c0-1.2 1-2 2.2-2 1.3 0 2.1.8 2.1 1.8 0 .7-.3 1.2-1.3 2.2l-1.2 1v.2h2.6v1h-4.3v-.9l2-1.9c.8-.8 1-1.1 1-1.5 0-.5-.4-.8-1-.8-.5 0-.9.3-.9.9H35zm-1.7 4.3c-.5 0-.8-.3-.8-.7 0-.4.3-.7.8-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7zm3.2 7.3v-1h.7c.6 0 1-.3 1-.8 0-.4-.4-.7-1-.7s-1 .3-1 .8H35c0-1.1 1-1.8 2.2-1.8 1.2 0 2.1.6 2.1 1.6 0 .7-.4 1.2-1 1.3v.1c.7.1 1.3.7 1.3 1.4 0 1-1 1.9-2.4 1.9-1.3 0-2.2-.8-2.3-2h1.2c0 .6.5 1 1.1 1 .6 0 1-.4 1-1 0-.5-.3-.8-1-.8h-.7zm-3.3 2.7c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7.5 0 .8.3.8.7 0 .4-.3.7-.8.7z"/></g></svg>', "list-num-default": '<svg width="48" height="48"><g fill-rule="evenodd"><path opacity=".2" d="M18 12h22v4H18zM18 22h22v4H18zM18 32h22v4H18z"/><path d="M10 17v-4.8l-1.5 1v-1.1l1.6-1h1.2V17h-1.2zm3.6.1c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7.5 0 .7.3.7.7 0 .4-.2.7-.7.7zm-5 5.7c0-1.2.8-2 2.1-2s2.1.8 2.1 1.8c0 .7-.3 1.2-1.4 2.2l-1.1 1v.2h2.6v1H8.6v-.9l2-1.9c.8-.8 1-1.1 1-1.5 0-.5-.4-.8-1-.8-.5 0-.9.3-.9.9H8.5zm6.3 4.3c-.5 0-.7-.3-.7-.7 0-.4.2-.7.7-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7zM10 34.4v-1h.7c.6 0 1-.3 1-.8 0-.4-.4-.7-1-.7s-1 .3-1 .8H8.6c0-1.1 1-1.8 2.2-1.8 1.3 0 2.1.6 2.1 1.6 0 .7-.4 1.2-1 1.3v.1c.8.1 1.3.7 1.3 1.4 0 1-1 1.9-2.4 1.9-1.3 0-2.2-.8-2.3-2h1.2c0 .6.5 1 1.1 1 .7 0 1-.4 1-1 0-.5-.3-.8-1-.8h-.7zm4.7 2.7c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7.5 0 .8.3.8.7 0 .4-.3.7-.8.7z"/></g></svg>', "list-num-lower-alpha-rtl": '<svg width="48" height="48"><g fill-rule="evenodd"><path opacity=".2" d="M8 12h22v4H8zM8 22h22v4H8zM8 32h22v4H8z"/><path d="M36.5 16c-.9 0-1.5-.5-1.5-1.3s.6-1.3 1.8-1.4h1v-.4c0-.4-.2-.6-.7-.6-.4 0-.7.1-.8.4h-1.1c0-.8.8-1.4 2-1.4S39 12 39 13V16h-1.2v-.6c-.3.4-.8.7-1.4.7zm.4-.8c.6 0 1-.4 1-.9V14h-1c-.5.1-.7.3-.7.6 0 .4.3.6.7.6zM33.1 16.1c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7.5 0 .8.3.8.7 0 .4-.3.7-.8.7zM37.7 26c-.7 0-1.2-.2-1.5-.7v.7H35v-6.3h1.2v2.5c.3-.5.8-.9 1.5-.9 1.1 0 1.8 1 1.8 2.4 0 1.5-.7 2.4-1.8 2.4zm-.5-3.6c-.6 0-1 .5-1 1.3s.4 1.4 1 1.4c.7 0 1-.6 1-1.4 0-.8-.3-1.3-1-1.3zM33.2 26.1c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7.5 0 .8.3.8.7 0 .4-.3.7-.8.7zm6 7h-1c-.1-.5-.4-.8-1-.8s-1 .5-1 1.4c0 1 .4 1.4 1 1.4.5 0 .9-.2 1-.7h1c0 1-.8 1.7-2 1.7-1.4 0-2.2-.9-2.2-2.4s.8-2.4 2.2-2.4c1.2 0 2 .7 2 1.7zm-6.1 3c-.5 0-.7-.3-.7-.7 0-.4.2-.7.7-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7z"/></g></svg>', "list-num-lower-alpha": '<svg width="48" height="48"><g fill-rule="evenodd"><path opacity=".2" d="M18 12h22v4H18zM18 22h22v4H18zM18 32h22v4H18z"/><path d="M10.3 15.2c.5 0 1-.4 1-.9V14h-1c-.5.1-.8.3-.8.6 0 .4.3.6.8.6zm-.4.9c-1 0-1.5-.6-1.5-1.4 0-.8.6-1.3 1.7-1.4h1.1v-.4c0-.4-.2-.6-.7-.6-.5 0-.8.1-.9.4h-1c0-.8.8-1.4 2-1.4 1.1 0 1.8.6 1.8 1.6V16h-1.1v-.6h-.1c-.2.4-.7.7-1.3.7zm4.6 0c-.5 0-.7-.3-.7-.7 0-.4.2-.7.7-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7zm-3.2 10c-.6 0-1.2-.3-1.4-.8v.7H8.5v-6.3H10v2.5c.3-.5.8-.9 1.4-.9 1.2 0 1.9 1 1.9 2.4 0 1.5-.7 2.4-1.9 2.4zm-.4-3.7c-.7 0-1 .5-1 1.3s.3 1.4 1 1.4c.6 0 1-.6 1-1.4 0-.8-.4-1.3-1-1.3zm4 3.7c-.5 0-.7-.3-.7-.7 0-.4.2-.7.7-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7zm-2.2 7h-1.2c0-.5-.4-.8-.9-.8-.6 0-1 .5-1 1.4 0 1 .4 1.4 1 1.4.5 0 .8-.2 1-.7h1c0 1-.8 1.7-2 1.7-1.4 0-2.2-.9-2.2-2.4s.8-2.4 2.2-2.4c1.2 0 2 .7 2 1.7zm1.8 3c-.5 0-.8-.3-.8-.7 0-.4.3-.7.8-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7z"/></g></svg>', "list-num-lower-greek-rtl": '<svg width="48" height="48"><g fill-rule="evenodd"><path opacity=".2" d="M8 12h22v4H8zM8 22h22v4H8zM8 32h22v4H8z"/><path d="M37.4 16c-1.2 0-2-.8-2-2.3 0-1.5.8-2.4 2-2.4.6 0 1 .4 1.3 1v-.9H40v3.2c0 .4.1.5.4.5h.2v.9h-.6c-.6 0-1-.2-1-.7h-.2c-.2.4-.7.8-1.3.8zm.3-1c.6 0 1-.5 1-1.3s-.4-1.3-1-1.3-1 .5-1 1.3.4 1.4 1 1.4zM33.3 16.1c-.5 0-.8-.3-.8-.7 0-.4.3-.7.8-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7zM36 21.9c0-1.5.8-2.3 2.1-2.3 1.2 0 2 .6 2 1.6 0 .6-.3 1-.9 1.3.9.3 1.3.8 1.3 1.7 0 1.2-.7 1.9-1.8 1.9-.6 0-1.1-.3-1.4-.8v2.2H36V22zm1.8 1.2v-1h.3c.5 0 .9-.2.9-.7 0-.5-.3-.8-.9-.8-.5 0-.8.3-.8 1v2.2c0 .8.4 1.3 1 1.3s1-.4 1-1-.4-1-1.2-1h-.3zM33.3 26.1c-.5 0-.8-.3-.8-.7 0-.4.3-.7.8-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7zM37.1 34.6L34.8 30h1.4l1.7 3.5 1.7-3.5h1.1l-2.2 4.6v.1c.5.8.7 1.4.7 1.8 0 .4-.2.8-.4 1-.2.2-.6.3-1 .3-.9 0-1.3-.4-1.3-1.2 0-.5.2-1 .5-1.7l.1-.2zm.7 1a2 2 0 0 0-.4.9c0 .3.1.4.4.4.3 0 .4-.1.4-.4 0-.2-.1-.6-.4-1zM33.3 36.1c-.5 0-.8-.3-.8-.7 0-.4.3-.7.8-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7z"/></g></svg>', "list-num-lower-greek": '<svg width="48" height="48"><g fill-rule="evenodd"><path opacity=".2" d="M18 12h22v4H18zM18 22h22v4H18zM18 32h22v4H18z"/><path d="M10.5 15c.7 0 1-.5 1-1.3s-.3-1.3-1-1.3c-.5 0-.9.5-.9 1.3s.4 1.4 1 1.4zm-.3 1c-1.1 0-1.8-.8-1.8-2.3 0-1.5.7-2.4 1.8-2.4.7 0 1.1.4 1.3 1h.1v-.9h1.2v3.2c0 .4.1.5.4.5h.2v.9h-.6c-.6 0-1-.2-1.1-.7h-.1c-.2.4-.7.8-1.4.8zm5 .1c-.5 0-.8-.3-.8-.7 0-.4.3-.7.7-.7.5 0 .8.3.8.7 0 .4-.3.7-.8.7zm-4.9 7v-1h.3c.6 0 1-.2 1-.7 0-.5-.4-.8-1-.8-.5 0-.8.3-.8 1v2.2c0 .8.4 1.3 1.1 1.3.6 0 1-.4 1-1s-.5-1-1.3-1h-.3zM8.6 22c0-1.5.7-2.3 2-2.3 1.2 0 2 .6 2 1.6 0 .6-.3 1-.8 1.3.8.3 1.3.8 1.3 1.7 0 1.2-.8 1.9-1.9 1.9-.6 0-1.1-.3-1.3-.8v2.2H8.5V22zm6.2 4.2c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7.5 0 .7.3.7.7 0 .4-.2.7-.7.7zm-4.5 8.5L8 30h1.4l1.7 3.5 1.7-3.5h1.1l-2.2 4.6v.1c.5.8.7 1.4.7 1.8 0 .4-.1.8-.4 1-.2.2-.6.3-1 .3-.9 0-1.3-.4-1.3-1.2 0-.5.2-1 .5-1.7l.1-.2zm.7 1a2 2 0 0 0-.4.9c0 .3.1.4.4.4.3 0 .4-.1.4-.4 0-.2-.1-.6-.4-1zm4.5.5c-.5 0-.8-.3-.8-.7 0-.4.3-.7.8-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7z"/></g></svg>', "list-num-lower-roman-rtl": '<svg width="48" height="48"><g fill-rule="evenodd"><path opacity=".2" d="M8 12h22v4H8zM8 22h22v4H8zM8 32h22v4H8z"/><path d="M32.9 16v-1.2h-1.3V16H33zm0 10v-1.2h-1.3V26H33zm0 10v-1.2h-1.3V36H33z"/><path fill-rule="nonzero" d="M36 21h-1.5v5H36zM36 31h-1.5v5H36zM39 21h-1.5v5H39zM39 31h-1.5v5H39zM42 31h-1.5v5H42zM36 11h-1.5v5H36zM36 19h-1.5v1H36zM36 29h-1.5v1H36zM39 19h-1.5v1H39zM39 29h-1.5v1H39zM42 29h-1.5v1H42zM36 9h-1.5v1H36z"/></g></svg>', "list-num-lower-roman": '<svg width="48" height="48"><g fill-rule="evenodd"><path opacity=".2" d="M18 12h22v4H18zM18 22h22v4H18zM18 32h22v4H18z"/><path d="M15.1 16v-1.2h1.3V16H15zm0 10v-1.2h1.3V26H15zm0 10v-1.2h1.3V36H15z"/><path fill-rule="nonzero" d="M12 21h1.5v5H12zM12 31h1.5v5H12zM9 21h1.5v5H9zM9 31h1.5v5H9zM6 31h1.5v5H6zM12 11h1.5v5H12zM12 19h1.5v1H12zM12 29h1.5v1H12zM9 19h1.5v1H9zM9 29h1.5v1H9zM6 29h1.5v1H6zM12 9h1.5v1H12z"/></g></svg>', "list-num-upper-alpha-rtl": '<svg width="48" height="48"><g fill-rule="evenodd"><path opacity=".2" d="M8 12h22v4H8zM8 22h22v4H8zM8 32h22v4H8z"/><path d="M39.3 17l-.5-1.4h-2l-.5 1.4H35l2-6h1.6l2 6h-1.3zm-1.6-4.7l-.7 2.3h1.6l-.8-2.3zM33.4 17c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7.5 0 .7.3.7.7 0 .4-.2.7-.7.7zm4.7 9.9h-2.7v-6H38c1.2 0 1.9.6 1.9 1.5 0 .6-.5 1.2-1 1.3.7.1 1.3.7 1.3 1.5 0 1-.8 1.7-2 1.7zm-1.4-5v1.5h1c.6 0 1-.3 1-.8 0-.4-.4-.7-1-.7h-1zm0 4h1.1c.7 0 1.1-.3 1.1-.8 0-.6-.4-.9-1.1-.9h-1.1V26zM33 27.1c-.5 0-.8-.3-.8-.7 0-.4.3-.7.8-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7zm4.9 10c-1.8 0-2.8-1.1-2.8-3.1s1-3.1 2.8-3.1c1.4 0 2.5.9 2.6 2.2h-1.3c0-.7-.6-1.1-1.3-1.1-1 0-1.6.7-1.6 2s.6 2 1.6 2c.7 0 1.2-.4 1.4-1h1.2c-.1 1.3-1.2 2.2-2.6 2.2zm-4.5 0c-.5 0-.8-.3-.8-.7 0-.4.3-.7.8-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7z"/></g></svg>', "list-num-upper-alpha": '<svg width="48" height="48"><g fill-rule="evenodd"><path opacity=".2" d="M18 12h22v4H18zM18 22h22v4H18zM18 32h22v4H18z"/><path d="M12.6 17l-.5-1.4h-2L9.5 17H8.3l2-6H12l2 6h-1.3zM11 12.3l-.7 2.3h1.6l-.8-2.3zm4.7 4.8c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7.5 0 .7.3.7.7 0 .4-.2.7-.7.7zM11.4 27H8.7v-6h2.6c1.2 0 1.9.6 1.9 1.5 0 .6-.5 1.2-1 1.3.7.1 1.3.7 1.3 1.5 0 1-.8 1.7-2 1.7zM10 22v1.5h1c.6 0 1-.3 1-.8 0-.4-.4-.7-1-.7h-1zm0 4H11c.7 0 1.1-.3 1.1-.8 0-.6-.4-.9-1.1-.9H10V26zm5.4 1.1c-.5 0-.8-.3-.8-.7 0-.4.3-.7.8-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7zm-4.1 10c-1.8 0-2.8-1.1-2.8-3.1s1-3.1 2.8-3.1c1.4 0 2.5.9 2.6 2.2h-1.3c0-.7-.6-1.1-1.3-1.1-1 0-1.6.7-1.6 2s.6 2 1.6 2c.7 0 1.2-.4 1.4-1h1.2c-.1 1.3-1.2 2.2-2.6 2.2zm4.5 0c-.5 0-.8-.3-.8-.7 0-.4.3-.7.8-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7z"/></g></svg>', "list-num-upper-roman-rtl": '<svg width="48" height="48"><g fill-rule="evenodd"><path opacity=".2" d="M8 12h22v4H8zM8 22h22v4H8zM8 32h22v4H8z"/><path d="M31.6 17v-1.2H33V17h-1.3zm0 10v-1.2H33V27h-1.3zm0 10v-1.2H33V37h-1.3z"/><path fill-rule="nonzero" d="M34.5 20H36v7h-1.5zM34.5 30H36v7h-1.5zM37.5 20H39v7h-1.5zM37.5 30H39v7h-1.5zM40.5 30H42v7h-1.5zM34.5 10H36v7h-1.5z"/></g></svg>', "list-num-upper-roman": '<svg width="48" height="48"><g fill-rule="evenodd"><path opacity=".2" d="M18 12h22v4H18zM18 22h22v4H18zM18 32h22v4H18z"/><path d="M15.1 17v-1.2h1.3V17H15zm0 10v-1.2h1.3V27H15zm0 10v-1.2h1.3V37H15z"/><path fill-rule="nonzero" d="M12 20h1.5v7H12zM12 30h1.5v7H12zM9 20h1.5v7H9zM9 30h1.5v7H9zM6 30h1.5v7H6zM12 10h1.5v7H12z"/></g></svg>', lock: '<svg width="24" height="24"><path d="M16.3 11c.2 0 .3 0 .5.2l.2.6v7.4c0 .3 0 .4-.2.6l-.6.2H7.8c-.3 0-.4 0-.6-.2a.7.7 0 0 1-.2-.6v-7.4c0-.3 0-.4.2-.6l.5-.2H8V8c0-.8.3-1.5.9-2.1.6-.6 1.3-.9 2.1-.9h2c.8 0 1.5.3 2.1.9.6.6.9 1.3.9 2.1v3h.3zM10 8v3h4V8a1 1 0 0 0-.3-.7A1 1 0 0 0 13 7h-2a1 1 0 0 0-.7.3 1 1 0 0 0-.3.7z" fill-rule="evenodd"/></svg>', ltr: '<svg width="24" height="24"><path d="M11 5h7a1 1 0 0 1 0 2h-1v11a1 1 0 0 1-2 0V7h-2v11a1 1 0 0 1-2 0v-6c-.5 0-1 0-1.4-.3A3.4 3.4 0 0 1 7.8 10a3.3 3.3 0 0 1 0-2.8 3.4 3.4 0 0 1 1.8-1.8L11 5zM4.4 16.2L6.2 15l-1.8-1.2a1 1 0 0 1 1.2-1.6l3 2a1 1 0 0 1 0 1.6l-3 2a1 1 0 1 1-1.2-1.6z" fill-rule="evenodd"/></svg>', "more-drawer": '<svg width="24" height="24"><path d="M6 10a2 2 0 0 0-2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2 2 2 0 0 0-2-2zm12 0a2 2 0 0 0-2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2 2 2 0 0 0-2-2zm-6 0a2 2 0 0 0-2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2 2 2 0 0 0-2-2z" fill-rule="nonzero"/></svg>', "new-document": '<svg width="24" height="24"><path d="M14.4 3H7a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V7.6L14.4 3zM17 19H7V5h6v4h4v10z" fill-rule="nonzero"/></svg>', "new-tab": '<svg width="24" height="24"><path d="M15 13l2-2v8H5V7h8l-2 2H7v8h8v-4zm4-8v5.5l-2-2-5.6 5.5H10v-1.4L15.5 7l-2-2H19z" fill-rule="evenodd"/></svg>', "non-breaking": '<svg width="24" height="24"><path d="M11 11H8a1 1 0 1 1 0-2h3V6c0-.6.4-1 1-1s1 .4 1 1v3h3c.6 0 1 .4 1 1s-.4 1-1 1h-3v3c0 .6-.4 1-1 1a1 1 0 0 1-1-1v-3zm10 4v5H3v-5c0-.6.4-1 1-1s1 .4 1 1v3h14v-3c0-.6.4-1 1-1s1 .4 1 1z" fill-rule="evenodd"/></svg>', notice: '<svg width="24" height="24"><path d="M17.8 9.8L15.4 4 20 8.5v7L15.5 20h-7L4 15.5v-7L8.5 4h7l2.3 5.8zm0 0l2.2 5.7-2.3-5.8zM13 17v-2h-2v2h2zm0-4V7h-2v6h2z" fill-rule="evenodd"/></svg>', "ordered-list-rtl": '<svg width="24" height="24"><path d="M6 17h8a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2zm0-6h8a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2zm0-6h8a1 1 0 0 1 0 2H6a1 1 0 1 1 0-2zm13-1v3.5a.5.5 0 1 1-1 0V5h-.5a.5.5 0 1 1 0-1H19zm-1 8.8l.2.2h1.3a.5.5 0 1 1 0 1h-1.6a1 1 0 0 1-.9-1V13c0-.4.3-.8.6-1l1.2-.4.2-.3a.2.2 0 0 0-.2-.2h-1.3a.5.5 0 0 1-.5-.5c0-.3.2-.5.5-.5h1.6c.5 0 .9.4.9 1v.1c0 .4-.3.8-.6 1l-1.2.4-.2.3zm2 4.2v2c0 .6-.4 1-1 1h-1.5a.5.5 0 0 1 0-1h1.2a.3.3 0 1 0 0-.6h-1.3a.4.4 0 1 1 0-.8h1.3a.3.3 0 0 0 0-.6h-1.2a.5.5 0 1 1 0-1H19c.6 0 1 .4 1 1z" fill-rule="evenodd"/></svg>', "ordered-list": '<svg width="24" height="24"><path d="M10 17h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 1 1 0-2zM6 4v3.5c0 .3-.2.5-.5.5a.5.5 0 0 1-.5-.5V5h-.5a.5.5 0 0 1 0-1H6zm-1 8.8l.2.2h1.3c.3 0 .5.2.5.5s-.2.5-.5.5H4.9a1 1 0 0 1-.9-1V13c0-.4.3-.8.6-1l1.2-.4.2-.3a.2.2 0 0 0-.2-.2H4.5a.5.5 0 0 1-.5-.5c0-.3.2-.5.5-.5h1.6c.5 0 .9.4.9 1v.1c0 .4-.3.8-.6 1l-1.2.4-.2.3zM7 17v2c0 .6-.4 1-1 1H4.5a.5.5 0 0 1 0-1h1.2c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3H4.4a.4.4 0 1 1 0-.8h1.3c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3H4.5a.5.5 0 1 1 0-1H6c.6 0 1 .4 1 1z" fill-rule="evenodd"/></svg>', orientation: '<svg width="24" height="24"><path d="M7.3 6.4L1 13l6.4 6.5 6.5-6.5-6.5-6.5zM3.7 13l3.6-3.7L11 13l-3.7 3.7-3.6-3.7zM12 6l2.8 2.7c.3.3.3.8 0 1-.3.4-.9.4-1.2 0L9.2 5.7a.8.8 0 0 1 0-1.2L13.6.2c.3-.3.9-.3 1.2 0 .3.3.3.8 0 1.1L12 4h1a9 9 0 1 1-4.3 16.9l1.5-1.5A7 7 0 1 0 13 6h-1z" fill-rule="nonzero"/></svg>', outdent: '<svg width="24" height="24"><path d="M7 5h12c.6 0 1 .4 1 1s-.4 1-1 1H7a1 1 0 1 1 0-2zm5 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 0 1 0-2zm0 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 0 1 0-2zm-5 4h12a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2zm1.6-3.8a1 1 0 0 1-1.2 1.6l-3-2a1 1 0 0 1 0-1.6l3-2a1 1 0 0 1 1.2 1.6L6.8 12l1.8 1.2z" fill-rule="evenodd"/></svg>', "page-break": '<svg width="24" height="24"><g fill-rule="evenodd"><path d="M5 11c.6 0 1 .4 1 1s-.4 1-1 1a1 1 0 0 1 0-2zm3 0h1c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 0 1 0-2zm4 0c.6 0 1 .4 1 1s-.4 1-1 1a1 1 0 0 1 0-2zm3 0h1c.6 0 1 .4 1 1s-.4 1-1 1h-1a1 1 0 0 1 0-2zm4 0c.6 0 1 .4 1 1s-.4 1-1 1a1 1 0 0 1 0-2zM7 3v5h10V3c0-.6.4-1 1-1s1 .4 1 1v7H5V3c0-.6.4-1 1-1s1 .4 1 1zM6 22a1 1 0 0 1-1-1v-7h14v7c0 .6-.4 1-1 1a1 1 0 0 1-1-1v-5H7v5c0 .6-.4 1-1 1z"/></g></svg>', paragraph: '<svg width="24" height="24"><path d="M10 5h7a1 1 0 0 1 0 2h-1v11a1 1 0 0 1-2 0V7h-2v11a1 1 0 0 1-2 0v-6c-.5 0-1 0-1.4-.3A3.4 3.4 0 0 1 6.8 10a3.3 3.3 0 0 1 0-2.8 3.4 3.4 0 0 1 1.8-1.8L10 5z" fill-rule="evenodd"/></svg>', "paste-text": '<svg width="24" height="24"><path d="M18 9V5h-2v1c0 .6-.4 1-1 1H9a1 1 0 0 1-1-1V5H6v13h3V9h9zM9 20H6a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.2A3 3 0 0 1 12 1a3 3 0 0 1 2.8 2H18a2 2 0 0 1 2 2v4h1v12H9v-1zm1.5-9.5v9h9v-9h-9zM12 3a1 1 0 0 0-1 1c0 .5.4 1 1 1s1-.5 1-1-.4-1-1-1zm0 9h6v2h-.5l-.5-1h-1v4h.8v1h-3.6v-1h.8v-4h-1l-.5 1H12v-2z" fill-rule="nonzero"/></svg>', paste: '<svg width="24" height="24"><path d="M18 9V5h-2v1c0 .6-.4 1-1 1H9a1 1 0 0 1-1-1V5H6v13h3V9h9zM9 20H6a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.2A3 3 0 0 1 12 1a3 3 0 0 1 2.8 2H18a2 2 0 0 1 2 2v4h1v12H9v-1zm1.5-9.5v9h9v-9h-9zM12 3a1 1 0 0 0-1 1c0 .5.4 1 1 1s1-.5 1-1-.4-1-1-1z" fill-rule="nonzero"/></svg>', "permanent-pen": '<svg width="24" height="24"><path d="M10.5 17.5L8 20H3v-3l3.5-3.5a2 2 0 0 1 0-3L14 3l1 1-7.3 7.3a1 1 0 0 0 0 1.4l3.6 3.6c.4.4 1 .4 1.4 0L20 9l1 1-7.6 7.6a2 2 0 0 1-2.8 0l-.1-.1z" fill-rule="nonzero"/></svg>', plus: '<svg width="24" height="24"><g fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke="#000" stroke-width="2"><path d="M12 5v14M5 12h14"/></g></svg>', preferences: '<svg width="24" height="24"><path d="M20.1 13.5l-1.9.2a5.8 5.8 0 0 1-.6 1.5l1.2 1.5c.4.4.3 1 0 1.4l-.7.7a1 1 0 0 1-1.4 0l-1.5-1.2a6.2 6.2 0 0 1-1.5.6l-.2 1.9c0 .5-.5.9-1 .9h-1a1 1 0 0 1-1-.9l-.2-1.9a5.8 5.8 0 0 1-1.5-.6l-1.5 1.2a1 1 0 0 1-1.4 0l-.7-.7a1 1 0 0 1 0-1.4l1.2-1.5a6.2 6.2 0 0 1-.6-1.5l-1.9-.2a1 1 0 0 1-.9-1v-1c0-.5.4-1 .9-1l1.9-.2a5.8 5.8 0 0 1 .6-1.5L5.2 7.3a1 1 0 0 1 0-1.4l.7-.7a1 1 0 0 1 1.4 0l1.5 1.2a6.2 6.2 0 0 1 1.5-.6l.2-1.9c0-.5.5-.9 1-.9h1c.5 0 1 .4 1 .9l.2 1.9a5.8 5.8 0 0 1 1.5.6l1.5-1.2a1 1 0 0 1 1.4 0l.7.7c.3.4.4 1 0 1.4l-1.2 1.5a6.2 6.2 0 0 1 .6 1.5l1.9.2c.5 0 .9.5.9 1v1c0 .5-.4 1-.9 1zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" fill-rule="evenodd"/></svg>', preview: '<svg width="24" height="24"><path d="M3.5 12.5c.5.8 1.1 1.6 1.8 2.3 2 2 4.2 3.2 6.7 3.2s4.7-1.2 6.7-3.2a16.2 16.2 0 0 0 2.1-2.8 15.7 15.7 0 0 0-2.1-2.8c-2-2-4.2-3.2-6.7-3.2a9.3 9.3 0 0 0-6.7 3.2A16.2 16.2 0 0 0 3.2 12c0 .2.2.3.3.5zm-2.4-1l.7-1.2L4 7.8C6.2 5.4 8.9 4 12 4c3 0 5.8 1.4 8.1 3.8a18.2 18.2 0 0 1 2.8 3.7v1l-.7 1.2-2.1 2.5c-2.3 2.4-5 3.8-8.1 3.8-3 0-5.8-1.4-8.1-3.8a18.2 18.2 0 0 1-2.8-3.7 1 1 0 0 1 0-1zm12-3.3a2 2 0 1 0 2.7 2.6 4 4 0 1 1-2.6-2.6z" fill-rule="nonzero"/></svg>', print: '<svg width="24" height="24"><path d="M18 8H6a3 3 0 0 0-3 3v6h2v3h14v-3h2v-6a3 3 0 0 0-3-3zm-1 10H7v-4h10v4zm.5-5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm.5-8H6v2h12V5z" fill-rule="nonzero"/></svg>', quote: '<svg width="24" height="24"><path d="M7.5 17h.9c.4 0 .7-.2.9-.6L11 13V8c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v4c0 .6.4 1 1 1h2l-1.3 2.7a1 1 0 0 0 .8 1.3zm8 0h.9c.4 0 .7-.2.9-.6L19 13V8c0-.6-.4-1-1-1h-4a1 1 0 0 0-1 1v4c0 .6.4 1 1 1h2l-1.3 2.7a1 1 0 0 0 .8 1.3z" fill-rule="nonzero"/></svg>', redo: '<svg width="24" height="24"><path d="M17.6 10H12c-2.8 0-4.4 1.4-4.9 3.5-.4 2 .3 4 1.4 4.6a1 1 0 1 1-1 1.8c-2-1.2-2.9-4.1-2.3-6.8.6-3 3-5.1 6.8-5.1h5.6l-3.3-3.3a1 1 0 1 1 1.4-1.4l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 0 1-1.4-1.4l3.3-3.3z" fill-rule="nonzero"/></svg>', reload: '<svg width="24" height="24"><g fill-rule="nonzero"><path d="M5 22.1l-1.2-4.7v-.2a1 1 0 0 1 1-1l5 .4a1 1 0 1 1-.2 2l-2.2-.2a7.8 7.8 0 0 0 8.4.2 7.5 7.5 0 0 0 3.5-6.4 1 1 0 1 1 2 0 9.5 9.5 0 0 1-4.5 8 9.9 9.9 0 0 1-10.2 0l.4 1.4a1 1 0 1 1-2 .5zM13.6 7.4c0-.5.5-1 1-.9l2.8.2a8 8 0 0 0-9.5-1 7.5 7.5 0 0 0-3.6 7 1 1 0 0 1-2 0 9.5 9.5 0 0 1 4.5-8.6 10 10 0 0 1 10.9.3l-.3-1a1 1 0 0 1 2-.5l1.1 4.8a1 1 0 0 1-1 1.2l-5-.4a1 1 0 0 1-.9-1z"/></g></svg>', "remove-formatting": '<svg width="24" height="24"><path d="M13.2 6a1 1 0 0 1 0 .2l-2.6 10a1 1 0 0 1-1 .8h-.2a.8.8 0 0 1-.8-1l2.6-10H8a1 1 0 1 1 0-2h9a1 1 0 0 1 0 2h-3.8zM5 18h7a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2zm13 1.5L16.5 18 15 19.5a.7.7 0 0 1-1-1l1.5-1.5-1.5-1.5a.7.7 0 0 1 1-1l1.5 1.5 1.5-1.5a.7.7 0 0 1 1 1L17.5 17l1.5 1.5a.7.7 0 0 1-1 1z" fill-rule="evenodd"/></svg>', remove: '<svg width="24" height="24"><path d="M16 7h3a1 1 0 0 1 0 2h-1v9a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9H5a1 1 0 1 1 0-2h3V6a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v1zm-2 0V6c0-.6-.4-1-1-1h-2a1 1 0 0 0-1 1v1h4zm2 2H8v9c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V9zm-7 3a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0v-4zm4 0a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0v-4z" fill-rule="nonzero"/></svg>', "resize-handle": '<svg width="10" height="10"><g fill-rule="nonzero"><path d="M8.1 1.1A.5.5 0 1 1 9 2l-7 7A.5.5 0 1 1 1 8l7-7zM8.1 5.1A.5.5 0 1 1 9 6l-3 3A.5.5 0 1 1 5 8l3-3z"/></g></svg>', resize: '<svg width="24" height="24"><path d="M4 5c0-.3.1-.5.3-.7.2-.2.4-.3.7-.3h6c.3 0 .5.1.7.3.2.2.3.4.3.7 0 .3-.1.5-.3.7a1 1 0 0 1-.7.3H7.4L18 16.6V13c0-.3.1-.5.3-.7.2-.2.4-.3.7-.3.3 0 .5.1.7.3.2.2.3.4.3.7v6c0 .3-.1.5-.3.7a1 1 0 0 1-.7.3h-6a1 1 0 0 1-.7-.3 1 1 0 0 1-.3-.7c0-.3.1-.5.3-.7.2-.2.4-.3.7-.3h3.6L6 7.4V11c0 .3-.1.5-.3.7a1 1 0 0 1-.7.3 1 1 0 0 1-.7-.3A1 1 0 0 1 4 11V5z" fill-rule="evenodd"/></svg>', "restore-draft": '<svg width="24" height="24"><g fill-rule="evenodd"><path d="M17 13c0 .6-.4 1-1 1h-4V8c0-.6.4-1 1-1s1 .4 1 1v4h2c.6 0 1 .4 1 1z"/><path d="M4.7 10H9a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1V5a1 1 0 1 1 2 0v3l2.5-2.4a9.2 9.2 0 0 1 10.8-1.5A9 9 0 0 1 13.4 21c-2.4.1-4.7-.7-6.5-2.2a1 1 0 1 1 1.3-1.5 7.2 7.2 0 0 0 11.6-3.7 7 7 0 0 0-3.5-7.7A7.2 7.2 0 0 0 8 7L4.7 10z" fill-rule="nonzero"/></g></svg>', "rotate-left": '<svg width="24" height="24"><path d="M4.7 10H9a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1V5a1 1 0 1 1 2 0v3l2.5-2.4a9.2 9.2 0 0 1 10.8-1.5A9 9 0 0 1 13.4 21c-2.4.1-4.7-.7-6.5-2.2a1 1 0 1 1 1.3-1.5 7.2 7.2 0 0 0 11.6-3.7 7 7 0 0 0-3.5-7.7A7.2 7.2 0 0 0 8 7L4.7 10z" fill-rule="nonzero"/></svg>', "rotate-right": '<svg width="24" height="24"><path d="M20 8V5a1 1 0 0 1 2 0v6c0 .6-.4 1-1 1h-6a1 1 0 0 1 0-2h4.3L16 7A7.2 7.2 0 0 0 7.7 6a7 7 0 0 0 3 13.1c1.9.1 3.7-.5 5-1.7a1 1 0 0 1 1.4 1.5A9.2 9.2 0 0 1 2.2 14c-.9-3.9 1-8 4.5-9.9 3.5-1.9 8-1.3 10.8 1.5L20 8z" fill-rule="nonzero"/></svg>', rtl: '<svg width="24" height="24"><path d="M8 5h8v2h-2v12h-2V7h-2v12H8v-7c-.5 0-1 0-1.4-.3A3.4 3.4 0 0 1 4.8 10a3.3 3.3 0 0 1 0-2.8 3.4 3.4 0 0 1 1.8-1.8L8 5zm12 11.2a1 1 0 1 1-1 1.6l-3-2a1 1 0 0 1 0-1.6l3-2a1 1 0 1 1 1 1.6L18.4 15l1.8 1.2z" fill-rule="evenodd"/></svg>', save: '<svg width="24" height="24"><path d="M5 16h14a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2zm0 2v2h14v-2H5zm10 0h2v2h-2v-2zm-4-6.4L8.7 9.3a1 1 0 1 0-1.4 1.4l4 4c.4.4 1 .4 1.4 0l4-4a1 1 0 1 0-1.4-1.4L13 11.6V4a1 1 0 0 0-2 0v7.6z" fill-rule="nonzero"/></svg>', search: '<svg width="24" height="24"><path d="M16 17.3a8 8 0 1 1 1.4-1.4l4.3 4.4a1 1 0 0 1-1.4 1.4l-4.4-4.3zm-5-.3a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" fill-rule="nonzero"/></svg>', "select-all": '<svg width="24" height="24"><path d="M3 5h2V3a2 2 0 0 0-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2a2 2 0 0 0-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8a2 2 0 0 0 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2zM7 17h10V7H7v10zm2-8h6v6H9V9z" fill-rule="nonzero"/></svg>', selected: '<svg width="24" height="24"><path fill-rule="nonzero" d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2zm3.6 10.9L7 12.3a.7.7 0 0 0-1 1L9.6 17 18 8.6a.7.7 0 0 0 0-1 .7.7 0 0 0-1 0l-7.4 7.3z"/></svg>', settings: '<svg width="24" height="24"><path d="M11 6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8v.3c0 .2 0 .3-.2.5l-.6.2H7.8c-.3 0-.4 0-.6-.2a.7.7 0 0 1-.2-.6V8H5a1 1 0 1 1 0-2h2v-.3c0-.2 0-.3.2-.5l.5-.2h2.5c.3 0 .4 0 .6.2l.2.5V6zM8 8h2V6H8v2zm9 2.8v.2h2c.6 0 1 .4 1 1s-.4 1-1 1h-2v.3c0 .2 0 .3-.2.5l-.6.2h-2.4c-.3 0-.4 0-.6-.2a.7.7 0 0 1-.2-.6V13H5a1 1 0 0 1 0-2h8v-.3c0-.2 0-.3.2-.5l.6-.2h2.4c.3 0 .4 0 .6.2l.2.6zM14 13h2v-2h-2v2zm-3 2.8v.2h8c.6 0 1 .4 1 1s-.4 1-1 1h-8v.3c0 .2 0 .3-.2.5l-.6.2H7.8c-.3 0-.4 0-.6-.2a.7.7 0 0 1-.2-.6V18H5a1 1 0 0 1 0-2h2v-.3c0-.2 0-.3.2-.5l.5-.2h2.5c.3 0 .4 0 .6.2l.2.6zM8 18h2v-2H8v2z" fill-rule="evenodd"/></svg>', sharpen: '<svg width="24" height="24"><path d="M16 6l4 4-8 9-8-9 4-4h8zm-4 10.2l5.5-6.2-.1-.1H12v-.3h5.1l-.2-.2H12V9h4.6l-.2-.2H12v-.3h4.1l-.2-.2H12V8h3.6l-.2-.2H8.7L6.5 10l.1.1H12v.3H6.9l.2.2H12v.3H7.3l.2.2H12v.3H7.7l.3.2h4v.3H8.2l.2.2H12v.3H8.6l.3.2H12v.3H9l.3.2H12v.3H9.5l.2.2H12v.3h-2l.2.2H12v.3h-1.6l.2.2H12v.3h-1.1l.2.2h.9v.3h-.7l.2.2h.5v.3h-.3l.3.2z" fill-rule="evenodd"/></svg>', sourcecode: '<svg width="24" height="24"><g fill-rule="nonzero"><path d="M9.8 15.7c.3.3.3.8 0 1-.3.4-.9.4-1.2 0l-4.4-4.1a.8.8 0 0 1 0-1.2l4.4-4.2c.3-.3.9-.3 1.2 0 .3.3.3.8 0 1.1L6 12l3.8 3.7zM14.2 15.7c-.3.3-.3.8 0 1 .4.4.9.4 1.2 0l4.4-4.1c.3-.3.3-.9 0-1.2l-4.4-4.2a.8.8 0 0 0-1.2 0c-.3.3-.3.8 0 1.1L18 12l-3.8 3.7z"/></g></svg>', "spell-check": '<svg width="24" height="24"><path d="M6 8v3H5V5c0-.3.1-.5.3-.7.2-.2.4-.3.7-.3h2c.3 0 .5.1.7.3.2.2.3.4.3.7v6H8V8H6zm0-3v2h2V5H6zm13 0h-3v5h3v1h-3a1 1 0 0 1-.7-.3 1 1 0 0 1-.3-.7V5c0-.3.1-.5.3-.7.2-.2.4-.3.7-.3h3v1zm-5 1.5l-.1.7c-.1.2-.3.3-.6.3.3 0 .5.1.6.3l.1.7V10c0 .3-.1.5-.3.7a1 1 0 0 1-.7.3h-3V4h3c.3 0 .5.1.7.3.2.2.3.4.3.7v1.5zM13 10V8h-2v2h2zm0-3V5h-2v2h2zm3 5l1 1-6.5 7L7 15.5l1.3-1 2.2 2.2L16 12z" fill-rule="evenodd"/></svg>', "strike-through": '<svg width="24" height="24"><g fill-rule="evenodd"><path d="M15.6 8.5c-.5-.7-1-1.1-1.3-1.3-.6-.4-1.3-.6-2-.6-2.7 0-2.8 1.7-2.8 2.1 0 1.6 1.8 2 3.2 2.3 4.4.9 4.6 2.8 4.6 3.9 0 1.4-.7 4.1-5 4.1A6.2 6.2 0 0 1 7 16.4l1.5-1.1c.4.6 1.6 2 3.7 2 1.6 0 2.5-.4 3-1.2.4-.8.3-2-.8-2.6-.7-.4-1.6-.7-2.9-1-1-.2-3.9-.8-3.9-3.6C7.6 6 10.3 5 12.4 5c2.9 0 4.2 1.6 4.7 2.4l-1.5 1.1z"/><path d="M5 11h14a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2z" fill-rule="nonzero"/></g></svg>', subscript: '<svg width="24" height="24"><path d="M10.4 10l4.6 4.6-1.4 1.4L9 11.4 4.4 16 3 14.6 7.6 10 3 5.4 4.4 4 9 8.6 13.6 4 15 5.4 10.4 10zM21 19h-5v-1l1-.8 1.7-1.6c.3-.4.5-.8.5-1.2 0-.3 0-.6-.2-.7-.2-.2-.5-.3-.9-.3a2 2 0 0 0-.8.2l-.7.3-.4-1.1 1-.6 1.2-.2c.8 0 1.4.3 1.8.7.4.4.6.9.6 1.5s-.2 1.1-.5 1.6a8 8 0 0 1-1.3 1.3l-.6.6h2.6V19z" fill-rule="nonzero"/></svg>', superscript: '<svg width="24" height="24"><path d="M15 9.4L10.4 14l4.6 4.6-1.4 1.4L9 15.4 4.4 20 3 18.6 7.6 14 3 9.4 4.4 8 9 12.6 13.6 8 15 9.4zm5.9 1.6h-5v-1l1-.8 1.7-1.6c.3-.5.5-.9.5-1.3 0-.3 0-.5-.2-.7-.2-.2-.5-.3-.9-.3l-.8.2-.7.4-.4-1.2c.2-.2.5-.4 1-.5.3-.2.8-.2 1.2-.2.8 0 1.4.2 1.8.6.4.4.6 1 .6 1.6 0 .5-.2 1-.5 1.5l-1.3 1.4-.6.5h2.6V11z" fill-rule="nonzero"/></svg>', "table-cell-properties": '<svg width="24" height="24"><path d="M4 5h16v14H4V5zm10 10h-4v3h4v-3zm0-8h-4v3h4V7zM9 7H5v3h4V7zm-4 4v3h4v-3H5zm10 0v3h4v-3h-4zm0-1h4V7h-4v3zM5 15v3h4v-3H5zm10 3h4v-3h-4v3z" fill-rule="evenodd"/></svg>', "table-cell-select-all": '<svg width="24" height="24"><path d="M12.5 5.5v6h6v-6h-6zm-1 0h-6v6h6v-6zm1 13h6v-6h-6v6zm-1 0v-6h-6v6h6zm-7-14h15v15h-15v-15z" fill-rule="nonzero"/></svg>', "table-cell-select-inner": '<svg width="24" height="24"><g fill-rule="nonzero"><path d="M5.5 5.5v13h13v-13h-13zm-1-1h15v15h-15v-15z" opacity=".2"/><path d="M11.5 11.5v-7h1v7h7v1h-7v7h-1v-7h-7v-1h7z"/></g></svg>', "table-delete-column": '<svg width="24" height="24"><path d="M9 11.2l1 1v.2l-1 1v-2.2zm5 1l1-1v2.2l-1-1v-.2zM20 5v14H4V5h16zm-1 2h-4v.8l-.2-.2-.8.8V7h-4v1.4l-.8-.8-.2.2V7H5v11h4v-1.8l.5.5.5-.4V18h4v-1.8l.8.8.2-.3V18h4V7zm-3.9 3.4l-1.8 1.9 1.8 1.9c.4.3.4.9 0 1.2-.3.3-.8.3-1.2 0L12 13.5l-1.8 1.9a.8.8 0 0 1-1.2 0 .9.9 0 0 1 0-1.2l1.8-1.9-1.9-2a.9.9 0 0 1 1.2-1.2l2 2 1.8-1.8c.3-.4.9-.4 1.2 0a.8.8 0 0 1 0 1.1z" fill-rule="evenodd"/></svg>', "table-delete-row": '<svg width="24" height="24"><path d="M16.7 8.8l1.1 1.2-2.4 2.5L18 15l-1.2 1.2-2.5-2.5-2.4 2.5-1.3-1.2 2.5-2.5-2.5-2.5 1.2-1.3 2.6 2.6 2.4-2.5zM4 5h16v14H4V5zm15 5V7H5v3h4.8l1 1H5v3h5.8l-1 1H5v3h14v-3h-.4l-1-1H19v-3h-1.3l1-1h.3z" fill-rule="evenodd"/></svg>', "table-delete-table": '<svg width="24" height="26"><path d="M4 6h16v14H4V6zm1 2v11h14V8H5zm11.7 8.7l-1.5 1.5L12 15l-3.3 3.2-1.4-1.5 3.2-3.2-3.3-3.2 1.5-1.5L12 12l3.2-3.2 1.5 1.5-3.2 3.2 3.2 3.2z" fill-rule="evenodd"/></svg>', "table-insert-column-after": '<svg width="24" height="24"><path d="M14.3 9c.4 0 .7.3.7.6v2.2h2.1c.4 0 .7.3.7.7 0 .4-.3.7-.7.7H15v2.2c0 .3-.3.6-.7.6a.7.7 0 0 1-.6-.6v-2.2h-2.2a.7.7 0 0 1 0-1.4h2.2V9.6c0-.3.3-.6.6-.6zM4 5h16v14H4V5zm5 13v-3H5v3h4zm0-4v-3H5v3h4zm0-4V7H5v3h4zm10 8V7h-9v11h9z" fill-rule="evenodd"/></svg>', "table-insert-column-before": '<svg width="24" height="24"><path d="M9.7 16a.7.7 0 0 1-.7-.6v-2.2H6.9a.7.7 0 0 1 0-1.4H9V9.6c0-.3.3-.6.7-.6.3 0 .6.3.6.6v2.2h2.2c.4 0 .8.3.8.7 0 .4-.4.7-.8.7h-2.2v2.2c0 .3-.3.6-.6.6zM4 5h16v14H4V5zm10 13V7H5v11h9zm5 0v-3h-4v3h4zm0-4v-3h-4v3h4zm0-4V7h-4v3h4z" fill-rule="evenodd"/></svg>', "table-insert-row-above": '<svg width="24" height="24"><path d="M14.8 10.5c0 .3-.2.5-.5.5h-1.8v1.8c0 .3-.2.5-.5.5a.5.5 0 0 1-.5-.6V11H9.7a.5.5 0 0 1 0-1h1.8V8.3c0-.3.2-.6.5-.6s.5.3.5.6V10h1.8c.3 0 .5.2.5.5zM4 5h16v14H4V5zm5 13v-3H5v3h4zm5 0v-3h-4v3h4zm5 0v-3h-4v3h4zm0-4V7H5v7h14z" fill-rule="evenodd"/></svg>', "table-insert-row-after": '<svg width="24" height="24"><path d="M9.2 14.5c0-.3.2-.5.5-.5h1.8v-1.8c0-.3.2-.5.5-.5s.5.2.5.6V14h1.8c.3 0 .5.2.5.5s-.2.5-.5.5h-1.8v1.7c0 .3-.2.6-.5.6a.5.5 0 0 1-.5-.6V15H9.7a.5.5 0 0 1-.5-.5zM4 5h16v14H4V5zm6 2v3h4V7h-4zM5 7v3h4V7H5zm14 11v-7H5v7h14zm0-8V7h-4v3h4z" fill-rule="evenodd"/></svg>', "table-left-header": '<svg width="24" height="24"><path d="M4 5h16v13H4V5zm10 12v-3h-4v3h4zm0-4v-3h-4v3h4zm0-4V6h-4v3h4zm5 8v-3h-4v3h4zm0-4v-3h-4v3h4zm0-4V6h-4v3h4z" fill-rule="evenodd"/></svg>', "table-merge-cells": '<svg width="24" height="24"><path d="M4 5h16v14H4V5zm6 13h9v-7h-9v7zm4-11h-4v3h4V7zM9 7H5v3h4V7zm-4 4v3h4v-3H5zm10-1h4V7h-4v3zM5 15v3h4v-3H5z" fill-rule="evenodd"/></svg>', "table-row-properties": '<svg width="24" height="24"><path d="M4 5h16v14H4V5zm10 10h-4v3h4v-3zm0-8h-4v3h4V7zM9 7H5v3h4V7zm6 3h4V7h-4v3zM5 15v3h4v-3H5zm10 3h4v-3h-4v3z" fill-rule="evenodd"/></svg>', "table-split-cells": '<svg width="24" height="24"><path d="M4 5h16v14H4V5zm6 2v3h4V7h-4zM9 18v-3H5v3h4zm0-4v-3H5v3h4zm0-4V7H5v3h4zm10 8v-7h-9v7h9zm0-8V7h-4v3h4zm-3.5 4.5l1.5 1.6c.3.2.3.7 0 1-.2.2-.7.2-1 0l-1.5-1.6-1.6 1.5c-.2.3-.7.3-1 0a.7.7 0 0 1 0-1l1.6-1.5-1.5-1.6a.7.7 0 0 1 1-1l1.5 1.6 1.6-1.5c.2-.3.7-.3 1 0 .2.2.2.7 0 1l-1.6 1.5z" fill-rule="evenodd"/></svg>', "table-top-header": '<svg width="24" height="24"><path d="M4 5h16v13H4V5zm5 12v-3H5v3h4zm0-4v-3H5v3h4zm5 4v-3h-4v3h4zm0-4v-3h-4v3h4zm5 4v-3h-4v3h4zm0-4v-3h-4v3h4z" fill-rule="evenodd"/></svg>', table: '<svg width="24" height="24"><path d="M4 5h16v14H4V5zm6 9h4v-3h-4v3zm4 1h-4v3h4v-3zm0-8h-4v3h4V7zM9 7H5v3h4V7zm-4 4v3h4v-3H5zm10 0v3h4v-3h-4zm0-1h4V7h-4v3zM5 15v3h4v-3H5zm10 3h4v-3h-4v3z" fill-rule="evenodd"/></svg>', template: '<svg width="24" height="24"><path d="M19 19v-1H5v1h14zM9 16v-4a5 5 0 1 1 6 0v4h4a2 2 0 0 1 2 2v3H3v-3c0-1.1.9-2 2-2h4zm4 0v-5l.8-.6a3 3 0 1 0-3.6 0l.8.6v5h2z" fill-rule="nonzero"/></svg>', "temporary-placeholder": '<svg width="24" height="24"><g fill-rule="evenodd"><path d="M9 7.6V6h2.5V4.5a.5.5 0 1 1 1 0V6H15v1.6a8 8 0 1 1-6 0zm-2.6 5.3a.5.5 0 0 0 .3.6c.3 0 .6 0 .6-.3l.1-.2a5 5 0 0 1 3.3-2.8c.3-.1.4-.4.4-.6-.1-.3-.4-.5-.6-.4a6 6 0 0 0-4.1 3.7z"/><circle cx="14" cy="4" r="1"/><circle cx="12" cy="2" r="1"/><circle cx="10" cy="4" r="1"/></g></svg>', "text-color": '<svg width="24" height="24"><g fill-rule="evenodd"><path id="tox-icon-text-color__color" d="M3 18h18v3H3z"/><path d="M8.7 16h-.8a.5.5 0 0 1-.5-.6l2.7-9c.1-.3.3-.4.5-.4h2.8c.2 0 .4.1.5.4l2.7 9a.5.5 0 0 1-.5.6h-.8a.5.5 0 0 1-.4-.4l-.7-2.2c0-.3-.3-.4-.5-.4h-3.4c-.2 0-.4.1-.5.4l-.7 2.2c0 .3-.2.4-.4.4zm2.6-7.6l-.6 2a.5.5 0 0 0 .5.6h1.6a.5.5 0 0 0 .5-.6l-.6-2c0-.3-.3-.4-.5-.4h-.4c-.2 0-.4.1-.5.4z"/></g></svg>', toc: '<svg width="24" height="24"><path d="M5 5c.6 0 1 .4 1 1s-.4 1-1 1a1 1 0 1 1 0-2zm3 0h11c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 1 1 0-2zm-3 8c.6 0 1 .4 1 1s-.4 1-1 1a1 1 0 0 1 0-2zm3 0h11c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 0 1 0-2zm0-4c.6 0 1 .4 1 1s-.4 1-1 1a1 1 0 1 1 0-2zm3 0h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2zm-3 8c.6 0 1 .4 1 1s-.4 1-1 1a1 1 0 0 1 0-2zm3 0h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2z" fill-rule="evenodd"/></svg>', translate: '<svg width="24" height="24"><path d="M12.7 14.3l-.3.7-.4.7-2.2-2.2-3.1 3c-.3.4-.8.4-1 0a.7.7 0 0 1 0-1l3.1-3A12.4 12.4 0 0 1 6.7 9H8a10.1 10.1 0 0 0 1.7 2.4c.5-.5 1-1.1 1.4-1.8l.9-2H4.7a.7.7 0 1 1 0-1.5h4.4v-.7c0-.4.3-.8.7-.8.4 0 .7.4.7.8v.7H15c.4 0 .8.3.8.7 0 .4-.4.8-.8.8h-1.4a12.3 12.3 0 0 1-1 2.4 13.5 13.5 0 0 1-1.7 2.3l1.9 1.8zm4.3-3l2.7 7.3a.5.5 0 0 1-.4.7 1 1 0 0 1-1-.7l-.6-1.5h-3.4l-.6 1.5a1 1 0 0 1-1 .7.5.5 0 0 1-.4-.7l2.7-7.4a1 1 0 1 1 2 0zm-2.2 4.4h2.4L16 12.5l-1.2 3.2z" fill-rule="evenodd"/></svg>', underline: '<svg width="24" height="24"><path d="M16 5c.6 0 1 .4 1 1v5.5a4 4 0 0 1-.4 1.8l-1 1.4a5.3 5.3 0 0 1-5.5 1 5 5 0 0 1-1.6-1c-.5-.4-.8-.9-1.1-1.4a4 4 0 0 1-.4-1.8V6c0-.6.4-1 1-1s1 .4 1 1v5.5c0 .3 0 .6.2 1l.6.7a3.3 3.3 0 0 0 2.2.8 3.4 3.4 0 0 0 2.2-.8c.3-.2.4-.5.6-.8l.2-.9V6c0-.6.4-1 1-1zM8 17h8c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 0 1 0-2z" fill-rule="evenodd"/></svg>', undo: '<svg width="24" height="24"><path d="M6.4 8H12c3.7 0 6.2 2 6.8 5.1.6 2.7-.4 5.6-2.3 6.8a1 1 0 0 1-1-1.8c1.1-.6 1.8-2.7 1.4-4.6-.5-2.1-2.1-3.5-4.9-3.5H6.4l3.3 3.3a1 1 0 1 1-1.4 1.4l-5-5a1 1 0 0 1 0-1.4l5-5a1 1 0 0 1 1.4 1.4L6.4 8z" fill-rule="nonzero"/></svg>', unlink: '<svg width="24" height="24"><path d="M6.2 12.3a1 1 0 0 1 1.4 1.4l-2 2a2 2 0 1 0 2.6 2.8l4.8-4.8a1 1 0 0 0 0-1.4 1 1 0 1 1 1.4-1.3 2.9 2.9 0 0 1 0 4L9.6 20a3.9 3.9 0 0 1-5.5-5.5l2-2zm11.6-.6a1 1 0 0 1-1.4-1.4l2.1-2a2 2 0 1 0-2.7-2.8L11 10.3a1 1 0 0 0 0 1.4A1 1 0 1 1 9.6 13a2.9 2.9 0 0 1 0-4L14.4 4a3.9 3.9 0 0 1 5.5 5.5l-2 2zM7.6 6.3a.8.8 0 0 1-1 1.1L3.3 4.2a.7.7 0 1 1 1-1l3.2 3.1zM5.1 8.6a.8.8 0 0 1 0 1.5H3a.8.8 0 0 1 0-1.5H5zm5-3.5a.8.8 0 0 1-1.5 0V3a.8.8 0 0 1 1.5 0V5zm6 11.8a.8.8 0 0 1 1-1l3.2 3.2a.8.8 0 0 1-1 1L16 17zm-2.2 2a.8.8 0 0 1 1.5 0V21a.8.8 0 0 1-1.5 0V19zm5-3.5a.7.7 0 1 1 0-1.5H21a.8.8 0 0 1 0 1.5H19z" fill-rule="nonzero"/></svg>', unlock: '<svg width="24" height="24"><path d="M16 5c.8 0 1.5.3 2.1.9.6.6.9 1.3.9 2.1v3h-2V8a1 1 0 0 0-.3-.7A1 1 0 0 0 16 7h-2a1 1 0 0 0-.7.3 1 1 0 0 0-.3.7v3h.3c.2 0 .3 0 .5.2l.2.6v7.4c0 .3 0 .4-.2.6l-.6.2H4.8c-.3 0-.4 0-.6-.2a.7.7 0 0 1-.2-.6v-7.4c0-.3 0-.4.2-.6l.5-.2H11V8c0-.8.3-1.5.9-2.1.6-.6 1.3-.9 2.1-.9h2z" fill-rule="evenodd"/></svg>', "unordered-list": '<svg width="24" height="24"><path d="M11 5h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2zm0 6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2zm0 6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2zM4.5 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1zm0 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1zm0 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1z" fill-rule="evenodd"/></svg>', unselected: '<svg width="24" height="24"><path fill-rule="nonzero" d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2zm0 1a1 1 0 0 0-1 1v12c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1H6z"/></svg>', upload: '<svg width="24" height="24"><path d="M18 19v-2a1 1 0 0 1 2 0v3c0 .6-.4 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 2 0v2h12zM11 6.4L8.7 8.7a1 1 0 0 1-1.4-1.4l4-4a1 1 0 0 1 1.4 0l4 4a1 1 0 1 1-1.4 1.4L13 6.4V16a1 1 0 0 1-2 0V6.4z" fill-rule="nonzero"/></svg>', user: '<svg width="24" height="24"><path d="M12 24a12 12 0 1 1 0-24 12 12 0 0 1 0 24zm-8.7-5.3a11 11 0 0 0 17.4 0C19.4 16.3 14.6 15 12 15c-2.6 0-7.4 1.3-8.7 3.7zM12 13c2.2 0 4-2 4-4.5S14.2 4 12 4 8 6 8 8.5 9.8 13 12 13z" fill-rule="nonzero"/></svg>', warning: '<svg width="24" height="24"><path d="M19.8 18.3c.2.5.3.9 0 1.2-.1.3-.5.5-1 .5H5.2c-.5 0-.9-.2-1-.5-.3-.3-.2-.7 0-1.2L11 4.7l.5-.5.5-.2c.2 0 .3 0 .5.2.2 0 .3.3.5.5l6.8 13.6zM12 18c.3 0 .5-.1.7-.3.2-.2.3-.4.3-.7a1 1 0 0 0-.3-.7 1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3 1 1 0 0 0-.3.7c0 .3.1.5.3.7.2.2.4.3.7.3zm.7-3l.3-4a1 1 0 0 0-.3-.7 1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3 1 1 0 0 0-.3.7l.3 4h1.4z" fill-rule="evenodd"/></svg>', "zoom-in": '<svg width="24" height="24"><path d="M16 17.3a8 8 0 1 1 1.4-1.4l4.3 4.4a1 1 0 0 1-1.4 1.4l-4.4-4.3zm-5-.3a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm-1-9a1 1 0 0 1 2 0v6a1 1 0 0 1-2 0V8zm-2 4a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2H8z" fill-rule="nonzero"/></svg>', "zoom-out": '<svg width="24" height="24"><path d="M16 17.3a8 8 0 1 1 1.4-1.4l4.3 4.4a1 1 0 0 1-1.4 1.4l-4.4-4.3zm-5-.3a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm-3-5a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2H8z" fill-rule="nonzero"/></svg>' }, pd.get(t).icons), Tr(o, function(e, t) { Br(r, t) || n.ui.registry.addIcon(t, e) }),
                function(e) { var t = e.settings.theme; if (K(t)) { e.settings.theme = ax(t); var n = yd.get(t);
                        e.theme = new n(e, yd.urls[t]), e.theme.init && e.theme.init(e, yd.urls[t] || e.documentBaseUrl.replace(/\/$/, ""), e.$) } else e.theme = {} }(e), i = e, a = [], un.each(i.settings.plugins.split(/[ ,]/), function(e) { ix(i, a, ax(e)) }); var u, s, l, c, f, d = (f = (u = e).getElement(), u.orgDisplay = f.style.display, K(u.settings.theme) ? u.theme.renderUI() : O(u.settings.theme) ? (l = (s = u).getElement(), (c = (0, s.settings.theme)(s, l)).editorContainer.nodeType && (c.editorContainer.id = c.editorContainer.id || s.id + "_parent"), c.iframeContainer && c.iframeContainer.nodeType && (c.iframeContainer.id = c.iframeContainer.id || s.id + "_iframecontainer"), c.height = c.iframeHeight ? c.iframeHeight : l.offsetHeight, c) : sx(u)); return e.editorContainer = d.editorContainer ? d.editorContainer : null, rx(e), e.inline ? Zw(e) : nx(e, d) },
        cx = _i.DOM,
        fx = function(e) { return "-" === e.charAt(0) },
        dx = function(t, e) { var n;
            (n = e, T.from(Rc(n)).filter(function(e) { return 0 < e.length }).map(function(e) { return { url: e, name: T.none() } })).orThunk(function() { return t = e, T.from(Mc(t)).filter(function(e) { return 0 < e.length && !pd.has(e) }).map(function(e) { return { url: t.editorManager.baseURL + "/icons/" + e + "/icons.js", name: T.some(e) } }); var t }).each(function(e) { t.add(e.url, i, undefined, function() { gd.iconsLoadError(e.url, e.name.getOrUndefined()) }) }) },
        hx = function(e, t) { var o = Ii.ScriptLoader;! function(e, t, n, r) { var o = t.settings,
                    i = o.theme; if (K(i)) { if (!fx(i) && !yd.urls.hasOwnProperty(i)) { var a = o.theme_url;
                        a ? yd.load(i, t.documentBaseURI.toAbsolute(a)) : yd.load(i, "themes/" + i + "/theme" + n + ".js") }
                    e.loadQueue(function() { yd.waitFor(i, r) }) } else r() }(o, e, t, function() { var n, r;! function(e, t) { var n = Fc(t),
                        r = Uc(t); if (!1 === Ki.hasCode(n) && "en" !== n) { var o = "" !== r ? r : t.editorManager.baseURL + "/langs/" + n + ".js";
                        e.add(o, i, undefined, function() { gd.languageLoadError(o, n) }) } }(o, e), dx(o, e), n = e.settings, r = t, R(n.plugins) && (n.plugins = n.plugins.join(" ")), un.each(n.external_plugins, function(e, t) { vd.load(t, e, i, undefined, function() { gd.pluginLoadError(t, e) }), n.plugins += " " + t }), un.each(n.plugins.split(/[ ,]/), function(e) { if ((e = un.trim(e)) && !vd.urls[e])
                        if (fx(e)) { e = e.substr(1, e.length); var t = vd.dependencies(e);
                            un.each(t, function(e) { var t = { prefix: "plugins/", resource: e, suffix: "/plugin" + r + ".js" };
                                e = vd.createUrl(t, e), vd.load(e.resource, e, i, undefined, function() { gd.pluginLoadError(e.prefix + e.resource + e.suffix, e.resource) }) }) } else { var n = { prefix: "plugins/", resource: e, suffix: "/plugin" + r + ".js" };
                            vd.load(e, n, i, undefined, function() { gd.pluginLoadError(n.prefix + n.resource + n.suffix, e) }) } }), o.loadQueue(function() { e.removed || lx(e) }, e, function() { e.removed || lx(e) }) }) },
        mx = function(t) { var e = t.settings,
                n = t.id;
            Ki.setCode(Fc(t)); var r = function() { cx.unbind(j.window, "ready", r), t.render() }; if (tt.Event.domLoaded) { if (t.getElement() && Fe.contentEditable) { e.inline ? t.inline = !0 : (t.orgVisibility = t.getElement().style.visibility, t.getElement().style.visibility = "hidden"); var o = t.getElement().form || cx.getParent(n, "form");
                    o && (t.formElement = o, e.hidden_input && !/TEXTAREA|INPUT/i.test(t.getElement().nodeName) && (cx.insertAfter(cx.create("input", { type: "hidden", name: n }), n), t.hasHiddenInput = !0), t.formEventDelegate = function(e) { t.fire(e.type, e) }, cx.bind(o, "submit reset", t.formEventDelegate), t.on("reset", function() { t.resetContent() }), !e.submit_patch || o.submit.nodeType || o.submit.length || o._mceOldSubmit || (o._mceOldSubmit = o.submit, o.submit = function() { return t.editorManager.triggerSave(), t.setDirty(!1), o._mceOldSubmit(o) })), t.windowManager = ld(t), t.notificationManager = ud(t), "xml" === e.encoding && t.on("GetContent", function(e) { e.save && (e.content = cx.encode(e.content)) }), e.add_form_submit_trigger && t.on("submit", function() { t.initialized && t.save() }), e.add_unload_trigger && (t._beforeUnload = function() {!t.initialized || t.destroyed || t.isHidden() || t.save({ format: "raw", no_events: !0, set_dirty: !1 }) }, t.editorManager.on("BeforeUnload", t._beforeUnload)), t.editorManager.add(t), hx(t, t.suffix) } } else cx.bind(j.window, "ready", r) },
        gx = "data-mce-contenteditable",
        px = function(e, t, n) { try { e.getDoc().execCommand(t, !1, n) } catch (r) {} },
        vx = function(e, t) { e.dom().contentEditable = t ? "true" : "false" },
        yx = function(e, t) { var n, r, o, i, a, u = yr.fromDom(e.getBody());
            o = t, ha(n = u, r = "mce-content-readonly") && !1 === o ? da(n, r) : o && fa(n, r), t ? (e.selection.controlSelection.hideResizeRect(), e._selectionOverrides.hideFakeCaret(), a = e, T.from(a.selection.getNode()).each(function(e) { e.removeAttribute("data-mce-selected") }), e.readonly = !0, vx(u, !1), F(ga(u, '*[contenteditable="true"]'), function(e) { Hr(e, gx, "true"), vx(e, !1) })) : (e.readonly = !1, vx(u, !0), F(ga(u, "*[" + gx + '="true"]'), function(e) { Lr(e, gx), vx(e, !0) }), px(e, "StyleWithCSS", !1), px(e, "enableInlineTableEditing", !1), px(e, "enableObjectResizing", !1), e.focus(), (i = e).selection.setRng(i.selection.getRng()), e.nodeChanged()) },
        bx = function(e) { return !0 === e.readonly },
        Cx = function(t) { t.parser.addAttributeFilter("contenteditable", function(e) { bx(t) && F(e, function(e) { e.attr(gx, e.attr("contenteditable")), e.attr("contenteditable", "false") }) }), t.serializer.addAttributeFilter(gx, function(e) { bx(t) && F(e, function(e) { e.attr("contenteditable", e.attr(gx)) }) }), t.serializer.addTempAttr(gx) },
        wx = ["design", "readonly"],
        xx = function(e, t, n, r) { var o = n[t.get()],
                i = n[r]; try { i.activate() } catch (xN) { return void j.console.error("problem while activating editor mode " + r + ":", xN) }
            o.deactivate(), o.editorReadOnly !== i.editorReadOnly && yx(e, i.editorReadOnly), t.set(r), Hf(e, r) },
        zx = function(t) { var e, n, r = qi("design"),
                o = qi({ design: { activate: i, deactivate: i, editorReadOnly: !1 }, readonly: { activate: i, deactivate: i, editorReadOnly: !0 } }); return (e = t).serializer ? Cx(e) : e.on("PreInit", function() { Cx(e) }), (n = t).on("ShowCaret", function(e) { bx(n) && e.preventDefault() }), n.on("ObjectSelected", function(e) { bx(n) && e.preventDefault() }), { isReadOnly: function() { return bx(t) }, set: function(e) { return function(e, t, n, r) { if (r !== n.get()) { if (!Br(t, r)) throw new Error("Editor mode '" + r + "' is invalid");
                            e.initialized ? xx(e, n, t, r) : e.on("init", function() { return xx(e, n, t, r) }) } }(t, o.get(), r, e) }, get: function() { return r.get() }, register: function(e, t) { o.set(function(e, t, n) { var r; if (V(wx, t)) throw new Error("Cannot override default mode " + t); return Fi({}, e, ((r = {})[t] = Fi({}, n, { deactivate: function() { try { n.deactivate() } catch (xN) { j.console.error("problem while deactivating editor mode " + t + ":"), j.console.error(xN) } } }), r)) }(o.get(), e, t)) } } },
        Nx = function(e) { return un.grep(e.childNodes, function(e) { return "LI" === e.nodeName }) },
        Ex = function(e) { return e && e.firstChild && e.firstChild === e.lastChild && ("\xa0" === (t = e.firstChild).data || _o.isBr(t)); var t },
        Sx = function(e) { return 0 < e.length && (!(t = e[e.length - 1]).firstChild || Ex(t)) ? e.slice(0, -1) : e; var t },
        kx = function(e, t) { var n = e.getParent(t, e.isBlock); return n && "LI" === n.nodeName ? n : null },
        Tx = function(e, t) { var n = $u.after(e),
                r = fl(t).prev(n); return r ? r.toRange() : null },
        Ax = function(t, e, n) { var r, o, i, a, u = t.parentNode; return un.each(e, function(e) { u.insertBefore(e, t) }), r = t, o = n, i = $u.before(r), (a = fl(o).next(i)) ? a.toRange() : null },
        Mx = function(e, t) { var n, r, o, i, a, u, s = t.firstChild,
                l = t.lastChild; return s && "meta" === s.name && (s = s.next), l && "mce_marker" === l.attr("id") && (l = l.prev), r = l, u = (n = e).getNonEmptyElements(), r && (r.isEmpty(u) || (o = r, n.getBlockElements()[o.name] && (a = o).firstChild && a.firstChild === a.lastChild && ("br" === (i = o.firstChild).name || "\xa0" === i.value))) && (l = l.prev), !(!s || s !== l || "ul" !== s.name && "ol" !== s.name) },
        Rx = function(e, o, i, t) { var n, r, a, u, s, l, c, f, d, h, m, g, p, v, y, b, C, w, x, z = (n = o, r = t, l = e.serialize(r), c = n.createFragment(l), u = (a = c).firstChild, s = a.lastChild, u && "META" === u.nodeName && u.parentNode.removeChild(u), s && "mce_marker" === s.id && s.parentNode.removeChild(s), a),
                N = kx(o, i.startContainer),
                E = Sx(Nx(z.firstChild)),
                S = o.getRoot(),
                k = function(e) { var t = $u.fromRangeStart(i),
                        n = fl(o.getRoot()),
                        r = 1 === e ? n.prev(t) : n.next(t); return !r || kx(o, r.getNode()) !== N }; return k(1) ? Ax(N, E, S) : k(2) ? (f = N, d = E, h = S, o.insertAfter(d.reverse(), f), Tx(d[0], h)) : (g = E, p = S, v = m = N, b = (y = i).cloneRange(), C = y.cloneRange(), b.setStartBefore(v), C.setEndAfter(v), w = [b.cloneContents(), C.cloneContents()], (x = m.parentNode).insertBefore(w[0], m), un.each(g, function(e) { x.insertBefore(e, m) }), x.insertBefore(w[1], m), x.removeChild(m), Tx(g[g.length - 1], p)) },
        Dx = function(e, t) { return !!kx(e, t) },
        Bx = _o.matchNodeNames("td th"),
        Ox = function(e, t) { var n, r, o = e.selection.getRng(),
                i = o.startContainer,
                a = o.startOffset;
            o.collapsed && (n = i, r = a, _o.isText(n) && "\xa0" === n.nodeValue[r - 1]) && _o.isText(i) && (i.insertData(a - 1, " "), i.deleteData(a, 1), o.setStart(i, a), o.setEnd(i, a), e.selection.setRng(o)), e.selection.setContent(t) },
        Hx = function(e, t, n) { var r, o, i, a, u, s, l, c, f, d, h, m = e.selection,
                g = e.dom; if (/^ | $/.test(t) && (t = function(e, t) { var n, r;
                    n = e.startContainer, r = e.startOffset; var o = function(e) { return n[e] && 3 === n[e].nodeType }; return 3 === n.nodeType && (0 < r ? t = t.replace(/^&nbsp;/, " ") : o("previousSibling") || (t = t.replace(/^ /, "&nbsp;")), r < n.length ? t = t.replace(/&nbsp;(<br>|)$/, " ") : o("nextSibling") || (t = t.replace(/(&nbsp;| )(<br>|)$/, "&nbsp;"))), t }(m.getRng(), t)), r = e.parser, h = n.merge, o = Jc({ validate: e.settings.validate }, e.schema), d = '<span id="mce_marker" data-mce-type="bookmark">&#xFEFF;&#x200B;</span>', s = { content: t, format: "html", selection: !0, paste: n.paste }, (s = e.fire("BeforeSetContent", s)).isDefaultPrevented()) e.fire("SetContent", { content: s.content, format: "html", selection: !0, paste: n.paste });
            else {-1 === (t = s.content).indexOf("{$caret}") && (t += "{$caret}"), t = t.replace(/\{\$caret\}/, d); var p, v, y, b, C, w, x = (c = m.getRng()).startContainer || (c.parentElement ? c.parentElement() : null),
                    z = e.getBody();
                x === z && m.isCollapsed() && g.isBlock(z.firstChild) && (p = e, (v = z.firstChild) && !p.schema.getShortEndedElements()[v.nodeName]) && g.isEmpty(z.firstChild) && ((c = g.createRng()).setStart(z.firstChild, 0), c.setEnd(z.firstChild, 0), m.setRng(c)), m.isCollapsed() || (e.selection.setRng(Vg(e.selection.getRng())), e.getDoc().execCommand("Delete", !1, null), y = e.selection.getRng(), b = t, C = y.startContainer, w = y.startOffset, 3 === C.nodeType && y.collapsed && ("\xa0" === C.data[w] ? (C.deleteData(w, 1), /[\u00a0| ]$/.test(b) || (b += " ")) : "\xa0" === C.data[w - 1] && (C.deleteData(w - 1, 1), /[\u00a0| ]$/.test(b) || (b = " " + b))), t = b); var N, E, S, k = { context: (i = m.getNode()).nodeName.toLowerCase(), data: n.data, insert: !0 }; if (u = r.parse(t, k), !0 === n.paste && Mx(e.schema, u) && Dx(g, i)) return c = Rx(o, g, e.selection.getRng(), u), e.selection.setRng(c), void e.fire("SetContent", s); if (function(e) { for (var t = e; t = t.walk();) 1 === t.type && t.attr("data-mce-fragment", "1") }(u), "mce_marker" === (f = u.lastChild).attr("id"))
                    for (f = (l = f).prev; f; f = f.walk(!0))
                        if (3 === f.type || !g.isBlock(f.name)) { e.schema.isValidChild(f.parent.name, "span") && f.parent.insert(l, f, "br" === f.name); break }
                if (e._selectionOverrides.showBlockCaretContainer(i), k.invalid) { for (Ox(e, d), i = m.getNode(), a = e.getBody(), 9 === i.nodeType ? i = f = a : f = i; f !== a;) f = (i = f).parentNode;
                    t = i === a ? a.innerHTML : g.getOuterHTML(i), t = o.serialize(r.parse(t.replace(/<span (id="mce_marker"|id=mce_marker).+?<\/span>/i, function() { return o.serialize(u) }))), i === a ? g.setHTML(a, t) : g.setOuterHTML(i, t) } else ! function(e, t, n) { if ("all" === n.getAttribute("data-mce-bogus")) n.parentNode.insertBefore(e.dom.createFragment(t), n);
                    else { var r = n.firstChild,
                            o = n.lastChild;!r || r === o && "BR" === r.nodeName ? e.dom.setHTML(n, t) : Ox(e, t) } }(e, t = o.serialize(u), i);! function(e, t) { var n = e.schema.getTextInlineElements(),
                        r = e.dom; if (t) { var o = e.getBody(),
                            i = new fg(r);
                        un.each(r.select("*[data-mce-fragment]"), function(e) { for (var t = e.parentNode; t && t !== o; t = t.parentNode) n[e.nodeName.toLowerCase()] && i.compare(t, e) && r.remove(e, !0) }) } }(e, h),
                function(n, e) { var t, r, o, i, a, u = n.dom,
                        s = n.selection; if (e) { if (n.selection.scrollIntoView(e), t = function(e) { for (var t = n.getBody(); e && e !== t; e = e.parentNode)
                                    if ("false" === n.dom.getContentEditable(e)) return e;
                                return null }(e)) return u.remove(e), s.select(t); var l = u.createRng();
                        (i = e.previousSibling) && 3 === i.nodeType ? (l.setStart(i, i.nodeValue.length), Fe.ie || (a = e.nextSibling) && 3 === a.nodeType && (i.appendData(a.data), a.parentNode.removeChild(a))) : (l.setStartBefore(e), l.setEndBefore(e)), r = u.getParent(e, u.isBlock), u.remove(e), r && u.isEmpty(r) && (n.$(r).empty(), l.setStart(r, 0), l.setEnd(r, 0), Bx(r) || r.getAttribute("data-mce-fragment") || !(o = function(e) { var t = $u.fromRangeStart(e); if (t = fl(n.getBody()).next(t)) return t.toRange() }(l)) ? u.add(r, u.create("br", { "data-mce-bogus": "1" })) : (l = o, u.remove(r))), s.setRng(l) } }(e, g.get("mce_marker")), N = e.getBody(), un.each(N.getElementsByTagName("*"), function(e) { e.removeAttribute("data-mce-fragment") }), E = e.dom, S = e.selection.getStart(), T.from(E.getParent(S, "td,th")).map(yr.fromDom).each(ym), e.fire("SetContent", s), e.addVisual() } },
        _x = function(e, t) { var n, r, o = "string" != typeof(n = t) ? (r = un.extend({ paste: n.paste, data: { paste: n.paste } }, n), { content: n.content, details: r }) : { content: n, details: {} };
            Hx(e, o.content, o.details) },
        Px = function(e, t) { e.getDoc().execCommand(t, !1, null) },
        Lx = function(e) { Fb(e, !1) || qb(e, !1) || Xb(e, !1) || Nb(e, !1) || zC(e) || Tb(e, !1) || Qb(e, !1) || (Px(e, "Delete"), lb(e)) },
        Vx = function(e) { Fb(e, !0) || qb(e, !0) || Xb(e, !0) || Nb(e, !0) || zC(e) || Tb(e, !0) || Qb(e, !0) || Px(e, "ForwardDelete") },
        Ix = function(s) { return function(u, e) { return T.from(e).map(yr.fromDom).filter(Nr).bind(function(e) { return (r = s, o = u, i = e.dom(), a = function(e) { return Fr(e, r) }, ba(yr.fromDom(i), function(e) { return a(e).isSome() }, function(e) { return Qr(yr.fromDom(o), e) }).bind(a)).or((t = s, n = e.dom(), T.from(_i.DOM.getStyle(n, t, !0)))); var t, n, r, o, i, a }).getOr("") } },
        Fx = { getFontSize: Ix("font-size"), getFontFamily: q(function(e) { return e.replace(/[\'\"\\]/g, "").replace(/,\s+/g, ",") }, Ix("font-family")), toPt: function(e, t) { return /[0-9.]+px$/.test(e) ? (n = 72 * parseInt(e, 10) / 96, r = t || 0, o = Math.pow(10, r), Math.round(n * o) / o + "pt") : e; var n, r, o } },
        Ux = function(e) { return xl.firstPositionIn(e.getBody()).map(function(e) { var t = e.container(); return _o.isText(t) ? t.parentNode : t }) },
        jx = function(o) { return T.from(o.selection.getRng()).bind(function(e) { var t, n, r = o.getBody(); return n = r, (t = e).startContainer === n && 0 === t.startOffset ? T.none() : T.from(o.selection.getStart(!0)) }) },
        qx = function(e, t) { if (/^[0-9\.]+$/.test(t)) { var n = parseInt(t, 10); if (1 <= n && n <= 7) { var r = Tc(e),
                        o = Ac(e); return o ? o[n - 1] || t : r[n - 1] || t } return t } return t },
        $x = function(e) { var t = parseInt(e, 10); return isNaN(t) ? 0 : t },
        Wx = function(e, t) { return (e || "table" === xr(t) ? "margin" : "padding") + ("rtl" === Vr(t, "direction") ? "-right" : "-left") },
        Kx = function(e) { var r, t = Yx(e); return !0 !== e.readonly && (1 < t.length || (r = e, ie(t, function(e) { var t = Wx(jc(r), e),
                    n = Fr(e, t).map($x).getOr(0); return "false" !== r.dom.getContentEditable(e.dom()) && 0 < n }))) },
        Xx = function(e) { return qo(e) || $o(e) },
        Yx = function(e) { return G(X(e.selection.getSelectedBlocks(), yr.fromDom), function(e) { return !Xx(e) && !to(e).map(Xx).getOr(!1) && ba(e, function(e) { return _o.isContentEditableTrue(e.dom()) || _o.isContentEditableFalse(e.dom()) }).exists(function(e) { return _o.isContentEditableTrue(e.dom()) }) }) },
        Gx = function(e, t) { var n = e.dom,
                r = e.selection,
                o = e.formatter,
                i = qc(e),
                a = /[a-z%]+$/i.exec(i)[0],
                u = parseInt(i, 10),
                s = jc(e),
                l = xc(e);
            e.queryCommandState("InsertUnorderedList") || e.queryCommandState("InsertOrderedList") || "" !== l || n.getParent(r.getNode(), n.isBlock) || o.apply("div"), F(Yx(e), function(e) {! function(e, t, n, r, o, i) { var a = Wx(n, yr.fromDom(i)); if ("outdent" === t) { var u = Math.max(0, $x(i.style[a]) - r);
                        e.setStyle(i, a, u ? u + o : "") } else u = $x(i.style[a]) + r + o, e.setStyle(i, a, u) }(n, t, s, u, a, e.dom()) }) },
        Jx = un.each,
        Qx = un.map,
        Zx = un.inArray,
        ez = function() {
            function e(e) { this.commands = { state: {}, exec: {}, value: {} }, this.editor = e, this.setupCommands(e) } return e.prototype.execCommand = function(t, n, r, e) { var o, i, a = !1,
                    u = this; if (!u.editor.removed) { if (/^(mceAddUndoLevel|mceEndUndoLevel|mceBeginUndoLevel|mceRepaint)$/.test(t) || e && e.skip_focus ? yf(u.editor) : u.editor.focus(), (e = u.editor.fire("BeforeExecCommand", { command: t, ui: n, value: r })).isDefaultPrevented()) return !1; if (i = t.toLowerCase(), o = u.commands.exec[i]) return o(i, n, r), u.editor.fire("ExecCommand", { command: t, ui: n, value: r }), !0; if (Jx(this.editor.plugins, function(e) { if (e.execCommand && e.execCommand(t, n, r)) return u.editor.fire("ExecCommand", { command: t, ui: n, value: r }), !(a = !0) }), a) return a; if (u.editor.theme && u.editor.theme.execCommand && u.editor.theme.execCommand(t, n, r)) return u.editor.fire("ExecCommand", { command: t, ui: n, value: r }), !0; try { a = u.editor.getDoc().execCommand(t, n, r) } catch (s) {} return !!a && (u.editor.fire("ExecCommand", { command: t, ui: n, value: r }), !0) } }, e.prototype.queryCommandState = function(e) { var t; if (!this.editor.quirks.isHidden() && !this.editor.removed) { if (e = e.toLowerCase(), t = this.commands.state[e]) return t(e); try { return this.editor.getDoc().queryCommandState(e) } catch (n) {} return !1 } }, e.prototype.queryCommandValue = function(e) { var t; if (!this.editor.quirks.isHidden() && !this.editor.removed) { if (e = e.toLowerCase(), t = this.commands.value[e]) return t(e); try { return this.editor.getDoc().queryCommandValue(e) } catch (n) {} } }, e.prototype.addCommands = function(e, n) { var r = this;
                n = n || "exec", Jx(e, function(t, e) { Jx(e.toLowerCase().split(","), function(e) { r.commands[n][e] = t }) }) }, e.prototype.addCommand = function(e, o, i) { var a = this;
                e = e.toLowerCase(), this.commands.exec[e] = function(e, t, n, r) { return o.call(i || a.editor, t, n, r) } }, e.prototype.queryCommandSupported = function(e) { if (e = e.toLowerCase(), this.commands.exec[e]) return !0; try { return this.editor.getDoc().queryCommandSupported(e) } catch (t) {} return !1 }, e.prototype.addQueryStateHandler = function(e, t, n) { var r = this;
                e = e.toLowerCase(), this.commands.state[e] = function() { return t.call(n || r.editor) } }, e.prototype.addQueryValueHandler = function(e, t, n) { var r = this;
                e = e.toLowerCase(), this.commands.value[e] = function() { return t.call(n || r.editor) } }, e.prototype.hasCustomCommand = function(e) { return e = e.toLowerCase(), !!this.commands.exec[e] }, e.prototype.execNativeCommand = function(e, t, n) { return t === undefined && (t = !1), n === undefined && (n = null), this.editor.getDoc().execCommand(e, t, n) }, e.prototype.isFormatMatch = function(e) { return this.editor.formatter.match(e) }, e.prototype.toggleFormat = function(e, t) { this.editor.formatter.toggle(e, t ? { value: t } : undefined), this.editor.nodeChanged() }, e.prototype.storeSelection = function(e) { this.selectionBookmark = this.editor.selection.getBookmark(e) }, e.prototype.restoreSelection = function() { this.editor.selection.moveToBookmark(this.selectionBookmark) }, e.prototype.setupCommands = function(i) { var a = this;
                this.addCommands({ "mceResetDesignMode,mceBeginUndoLevel": function() {}, "mceEndUndoLevel,mceAddUndoLevel": function() { i.undoManager.add() }, "Cut,Copy,Paste": function(e) { var t, n = i.getDoc(); try { a.execNativeCommand(e) } catch (o) { t = !0 } if ("paste" !== e || n.queryCommandEnabled(e) || (t = !0), t || !n.queryCommandSupported(e)) { var r = i.translate("Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.");
                            Fe.mac && (r = r.replace(/Ctrl\+/g, "\u2318+")), i.notificationManager.open({ text: r, type: "error" }) } }, unlink: function() { if (i.selection.isCollapsed()) { var e = i.dom.getParent(i.selection.getStart(), "a");
                            e && i.dom.remove(e, !0) } else i.formatter.remove("link") }, "JustifyLeft,JustifyCenter,JustifyRight,JustifyFull,JustifyNone": function(e) { var t = e.substring(7); "full" === t && (t = "justify"), Jx("left,center,right,justify".split(","), function(e) { t !== e && i.formatter.remove("align" + e) }), "none" !== t && a.toggleFormat("align" + t) }, "InsertUnorderedList,InsertOrderedList": function(e) { var t, n;
                        a.execNativeCommand(e), (t = i.dom.getParent(i.selection.getNode(), "ol,ul")) && (n = t.parentNode, /^(H[1-6]|P|ADDRESS|PRE)$/.test(n.nodeName) && (a.storeSelection(), i.dom.split(n, t), a.restoreSelection())) }, "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": function(e) { a.toggleFormat(e) }, "ForeColor,HiliteColor": function(e, t, n) { a.toggleFormat(e, n) }, FontName: function(e, t, n) { var r, o;
                        o = n, (r = i).formatter.toggle("fontname", { value: qx(r, o) }), r.nodeChanged() }, FontSize: function(e, t, n) { var r, o;
                        o = n, (r = i).formatter.toggle("fontsize", { value: qx(r, o) }), r.nodeChanged() }, RemoveFormat: function(e) { i.formatter.remove(e) }, mceBlockQuote: function() { a.toggleFormat("blockquote") }, FormatBlock: function(e, t, n) { return a.toggleFormat(n || "p") }, mceCleanup: function() { var e = i.selection.getBookmark();
                        i.setContent(i.getContent()), i.selection.moveToBookmark(e) }, mceRemoveNode: function(e, t, n) { var r = n || i.selection.getNode();
                        r !== i.getBody() && (a.storeSelection(), i.dom.remove(r, !0), a.restoreSelection()) }, mceSelectNodeDepth: function(e, t, n) { var r = 0;
                        i.dom.getParent(i.selection.getNode(), function(e) { if (1 === e.nodeType && r++ === n) return i.selection.select(e), !1 }, i.getBody()) }, mceSelectNode: function(e, t, n) { i.selection.select(n) }, mceInsertContent: function(e, t, n) { _x(i, n) }, mceInsertRawHTML: function(e, t, n) { i.selection.setContent("tiny_mce_marker"); var r = i.getContent();
                        i.setContent(r.replace(/tiny_mce_marker/g, function() { return n })) }, mceInsertNewLine: function(e, t, n) { gw(i, n) }, mceToggleFormat: function(e, t, n) { a.toggleFormat(n) }, mceSetContent: function(e, t, n) { i.setContent(n) }, "Indent,Outdent": function(e) { Gx(i, e) }, mceRepaint: function() {}, InsertHorizontalRule: function() { i.execCommand("mceInsertContent", !1, "<hr />") }, mceToggleVisualAid: function() { i.hasVisual = !i.hasVisual, i.addVisual() }, mceReplaceContent: function(e, t, n) { i.execCommand("mceInsertContent", !1, n.replace(/\{\$selection\}/g, i.selection.getContent({ format: "text" }))) }, mceInsertLink: function(e, t, n) { var r; "string" == typeof n && (n = { href: n }), r = i.dom.getParent(i.selection.getNode(), "a"), n.href = n.href.replace(/ /g, "%20"), r && n.href || i.formatter.remove("link"), n.href && i.formatter.apply("link", n, r) }, selectAll: function() { var e = i.dom.getParent(i.selection.getStart(), _o.isContentEditableTrue); if (e) { var t = i.dom.createRng();
                            t.selectNodeContents(e), i.selection.setRng(t) } }, "delete": function() { Lx(i) }, forwardDelete: function() { Vx(i) }, mceNewDocument: function() { i.setContent("") }, InsertLineBreak: function(e, t, n) { return ZC(i, n), !0 } }); var e = function(n) { return function() { var e = i.selection.isCollapsed() ? [i.dom.getParent(i.selection.getNode(), i.dom.isBlock)] : i.selection.getSelectedBlocks(),
                            t = Qx(e, function(e) { return !!i.formatter.matchNode(e, n) }); return -1 !== Zx(t, !0) } };
                a.addCommands({ JustifyLeft: e("alignleft"), JustifyCenter: e("aligncenter"), JustifyRight: e("alignright"), JustifyFull: e("alignjustify"), "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": function(e) { return a.isFormatMatch(e) }, mceBlockQuote: function() { return a.isFormatMatch("blockquote") }, Outdent: function() { return Kx(i) }, "InsertUnorderedList,InsertOrderedList": function(e) { var t = i.dom.getParent(i.selection.getNode(), "ul,ol"); return t && ("insertunorderedlist" === e && "UL" === t.tagName || "insertorderedlist" === e && "OL" === t.tagName) } }, "state"), a.addCommands({ Undo: function() { i.undoManager.undo() }, Redo: function() { i.undoManager.redo() } }), a.addQueryValueHandler("FontName", function() { return jx(t = i).fold(function() { return Ux(t).map(function(e) { return Fx.getFontFamily(t.getBody(), e) }).getOr("") }, function(e) { return Fx.getFontFamily(t.getBody(), e) }); var t }, this), a.addQueryValueHandler("FontSize", function() { return jx(t = i).fold(function() { return Ux(t).map(function(e) { return Fx.getFontSize(t.getBody(), e) }).getOr("") }, function(e) { return Fx.getFontSize(t.getBody(), e) }); var t }, this) }, e }(),
        tz = un.makeMap("focus blur focusin focusout click dblclick mousedown mouseup mousemove mouseover beforepaste paste cut copy selectionchange mouseout mouseenter mouseleave wheel keydown keypress keyup input contextmenu dragstart dragend dragover draggesture dragdrop drop drag submit compositionstart compositionend compositionupdate touchstart touchmove touchend", " "),
        nz = function() {
            function e(e) { this.bindings = {}, this.settings = e || {}, this.scope = this.settings.scope || this, this.toggleEvent = this.settings.toggleEvent || w } return e.isNative = function(e) { return !!tz[e.toLowerCase()] }, e.prototype.fire = function(e, t) { var n, r, o, i; if (e = e.toLowerCase(), (t = t || {}).type = e, t.target || (t.target = this.scope), t.preventDefault || (t.preventDefault = function() { t.isDefaultPrevented = x }, t.stopPropagation = function() { t.isPropagationStopped = x }, t.stopImmediatePropagation = function() { t.isImmediatePropagationStopped = x }, t.isDefaultPrevented = w, t.isPropagationStopped = w, t.isImmediatePropagationStopped = w), this.settings.beforeFire && this.settings.beforeFire(t), n = this.bindings[e])
                    for (r = 0, o = n.length; r < o; r++) { if ((i = n[r]).once && this.off(e, i.func), t.isImmediatePropagationStopped()) return t.stopPropagation(), t; if (!1 === i.func.call(this.scope, t)) return t.preventDefault(), t }
                return t }, e.prototype.on = function(e, t, n, r) { var o, i, a; if (!1 === t && (t = w), t) { var u = { func: t }; for (r && un.extend(u, r), a = (i = e.toLowerCase().split(" ")).length; a--;) e = i[a], (o = this.bindings[e]) || (o = this.bindings[e] = [], this.toggleEvent(e, !0)), n ? o.unshift(u) : o.push(u) } return this }, e.prototype.off = function(e, t) { var n, r, o, i, a; if (e)
                    for (n = (i = e.toLowerCase().split(" ")).length; n--;) { if (e = i[n], r = this.bindings[e], !e) { for (o in this.bindings) this.toggleEvent(o, !1), delete this.bindings[o]; return this } if (r) { if (t)
                                for (a = r.length; a--;) r[a].func === t && (r = r.slice(0, a).concat(r.slice(a + 1)), this.bindings[e] = r);
                            else r.length = 0;
                            r.length || (this.toggleEvent(e, !1), delete this.bindings[e]) } } else { for (e in this.bindings) this.toggleEvent(e, !1);
                        this.bindings = {} }
                return this }, e.prototype.once = function(e, t, n) { return this.on(e, t, n, { once: !0 }) }, e.prototype.has = function(e) { return e = e.toLowerCase(), !(!this.bindings[e] || 0 === this.bindings[e].length) }, e }(),
        rz = function(n) { return n._eventDispatcher || (n._eventDispatcher = new nz({ scope: n, toggleEvent: function(e, t) { nz.isNative(e) && n.toggleNativeEvent && n.toggleNativeEvent(e, t) } })), n._eventDispatcher },
        oz = { fire: function(e, t, n) { if (this.removed && "remove" !== e && "detach" !== e) return t; var r = rz(this).fire(e, t); if (!1 !== n && this.parent)
                    for (var o = this.parent(); o && !r.isPropagationStopped();) o.fire(e, r, !1), o = o.parent(); return r }, on: function(e, t, n) { return rz(this).on(e, t, n) }, off: function(e, t) { return rz(this).off(e, t) }, once: function(e, t) { return rz(this).once(e, t) }, hasEventListeners: function(e) { return rz(this).has(e) } },
        iz = _i.DOM,
        az = function(e, t) { return "selectionchange" === t ? e.getDoc() : !e.inline && /^mouse|touch|click|contextmenu|drop|dragover|dragend/.test(t) ? e.getDoc().documentElement : e.settings.event_root ? (e.eventRoot || (e.eventRoot = iz.select(e.settings.event_root)[0]), e.eventRoot) : e.getBody() },
        uz = function(e, t, n) { var r, o, i;
            (i = e).hidden || bx(i) ? bx(e) && (o = (r = n).target, "click" === r.type && "A" === o.tagName && r.preventDefault()) : e.fire(t, n) },
        sz = function(i, a) { var e, t; if (i.delegates || (i.delegates = {}), !i.delegates[a] && !i.removed)
                if (e = az(i, a), i.settings.event_root) { if (gy || (gy = {}, i.editorManager.on("removeEditor", function() { var e; if (!i.editorManager.activeEditor && gy) { for (e in gy) i.dom.unbind(az(i, e));
                                gy = null } })), gy[a]) return;
                    t = function(e) { for (var t = e.target, n = i.editorManager.get(), r = n.length; r--;) { var o = n[r].getBody();
                            (o === t || iz.isChildOf(t, o)) && uz(n[r], a, e) } }, gy[a] = t, iz.bind(e, a, t) } else t = function(e) { uz(i, a, e) }, iz.bind(e, a, t), i.delegates[a] = t },
        lz = Fi({}, oz, { bindPendingEventDelegates: function() { var t = this;
                un.each(t._pendingNativeEvents, function(e) { sz(t, e) }) }, toggleNativeEvent: function(e, t) { var n = this; "focus" !== e && "blur" !== e && (t ? n.initialized ? sz(n, e) : n._pendingNativeEvents ? n._pendingNativeEvents.push(e) : n._pendingNativeEvents = [e] : n.initialized && (n.dom.unbind(az(n, e), e, n.delegates[e]), delete n.delegates[e])) }, unbindAllNativeEvents: function() { var e, t = this,
                    n = t.getBody(),
                    r = t.dom; if (t.delegates) { for (e in t.delegates) t.dom.unbind(az(t, e), e, t.delegates[e]);
                    delete t.delegates }!t.inline && n && r && (n.onload = null, r.unbind(t.getWin()), r.unbind(t.getDoc())), r && (r.unbind(n), r.unbind(t.getContainer())) } }),
        cz = un.each,
        fz = un.explode,
        dz = { f1: 112, f2: 113, f3: 114, f4: 115, f5: 116, f6: 117, f7: 118, f8: 119, f9: 120, f10: 121, f11: 122, f12: 123 },
        hz = un.makeMap("alt,ctrl,shift,meta,access"),
        mz = function() {
            function e(e) { this.shortcuts = {}, this.pendingPatterns = [], this.editor = e; var n = this;
                e.on("keyup keypress keydown", function(t) {!n.hasModifier(t) && !n.isFunctionKey(t) || t.isDefaultPrevented() || (cz(n.shortcuts, function(e) { if (n.matchShortcut(t, e)) return n.pendingPatterns = e.subpatterns.slice(0), "keydown" === t.type && n.executeShortcutAction(e), !0 }), n.matchShortcut(t, n.pendingPatterns[0]) && (1 === n.pendingPatterns.length && "keydown" === t.type && n.executeShortcutAction(n.pendingPatterns[0]), n.pendingPatterns.shift())) }) } return e.prototype.add = function(e, n, r, o) { var t, i = this; return "string" == typeof(t = r) ? r = function() { i.editor.execCommand(t, !1, null) } : un.isArray(t) && (r = function() { i.editor.execCommand(t[0], t[1], t[2]) }), cz(fz(un.trim(e.toLowerCase())), function(e) { var t = i.createShortcut(e, n, r, o);
                    i.shortcuts[t.id] = t }), !0 }, e.prototype.remove = function(e) { var t = this.createShortcut(e); return !!this.shortcuts[t.id] && (delete this.shortcuts[t.id], !0) }, e.prototype.parseShortcut = function(e) { var t, n, r = {}; for (n in cz(fz(e, "+"), function(e) { e in hz ? r[e] = !0 : /^[0-9]{2,}$/.test(e) ? r.keyCode = parseInt(e, 10) : (r.charCode = e.charCodeAt(0), r.keyCode = dz[e] || e.toUpperCase().charCodeAt(0)) }), t = [r.keyCode], hz) r[n] ? t.push(n) : r[n] = !1; return r.id = t.join(","), r.access && (r.alt = !0, Fe.mac ? r.ctrl = !0 : r.shift = !0), r.meta && (Fe.mac ? r.meta = !0 : (r.ctrl = !0, r.meta = !1)), r }, e.prototype.createShortcut = function(e, t, n, r) { var o; return (o = un.map(fz(e, ">"), this.parseShortcut))[o.length - 1] = un.extend(o[o.length - 1], { func: n, scope: r || this.editor }), un.extend(o[0], { desc: this.editor.translate(t), subpatterns: o.slice(1) }) }, e.prototype.hasModifier = function(e) { return e.altKey || e.ctrlKey || e.metaKey }, e.prototype.isFunctionKey = function(e) { return "keydown" === e.type && 112 <= e.keyCode && e.keyCode <= 123 }, e.prototype.matchShortcut = function(e, t) { return !!t && t.ctrl === e.ctrlKey && t.meta === e.metaKey && t.alt === e.altKey && t.shift === e.shiftKey && !!(e.keyCode === t.keyCode || e.charCode && e.charCode === t.charCode) && (e.preventDefault(), !0) }, e.prototype.executeShortcutAction = function(e) { return e.func ? e.func.call(e.scope) : null }, e }(),
        gz = un.each,
        pz = un.trim,
        vz = "source protocol authority userInfo user password host port relative path directory file query anchor".split(" "),
        yz = { ftp: 21, http: 80, https: 443, mailto: 25 },
        bz = function() {
            function s(e, t) { e = pz(e), this.settings = t || {}; var n = this.settings.base_uri,
                    r = this; if (/^([\w\-]+):([^\/]{2})/i.test(e) || /^\s*#/.test(e)) r.source = e;
                else { var o = 0 === e.indexOf("//"); if (0 !== e.indexOf("/") || o || (e = (n && n.protocol || "http") + "://mce_host" + e), !/^[\w\-]*:?\/\//.test(e)) { var i = this.settings.base_uri ? this.settings.base_uri.path : new s(j.document.location.href).directory; if ("" == this.settings.base_uri.protocol) e = "//mce_host" + r.toAbsPath(i, e);
                        else { var a = /([^#?]*)([#?]?.*)/.exec(e);
                            e = (n && n.protocol || "http") + "://mce_host" + r.toAbsPath(i, a[1]) + a[2] } }
                    e = e.replace(/@@/g, "(mce_at)"); var u = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*):?([^:@\/]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(e);
                    gz(vz, function(e, t) { var n = u[t];
                        n && (n = n.replace(/\(mce_at\)/g, "@@")), r[e] = n }), n && (r.protocol || (r.protocol = n.protocol), r.userInfo || (r.userInfo = n.userInfo), r.port || "mce_host" !== r.host || (r.port = n.port), r.host && "mce_host" !== r.host || (r.host = n.host), r.source = ""), o && (r.protocol = "") } } return s.parseDataUri = function(e) { var t, n = decodeURIComponent(e).split(","),
                    r = /data:([^;]+)/.exec(n[0]); return r && (t = r[1]), { type: t, data: n[1] } }, s.getDocumentBaseUrl = function(e) { var t; return t = 0 !== e.protocol.indexOf("http") && "file:" !== e.protocol ? e.href : e.protocol + "//" + e.host + e.pathname, /^[^:]+:\/\/\/?[^\/]+\//.test(t) && (t = t.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, ""), /[\/\\]$/.test(t) || (t += "/")), t }, s.prototype.setPath = function(e) { var t = /^(.*?)\/?(\w+)?$/.exec(e);
                this.path = t[0], this.directory = t[1], this.file = t[2], this.source = "", this.getURI() }, s.prototype.toRelative = function(e) { var t; if ("./" === e) return e; var n = new s(e, { base_uri: this }); if ("mce_host" !== n.host && this.host !== n.host && n.host || this.port !== n.port || this.protocol !== n.protocol && "" !== n.protocol) return n.getURI(); var r = this.getURI(),
                    o = n.getURI(); return r === o || "/" === r.charAt(r.length - 1) && r.substr(0, r.length - 1) === o ? r : (t = this.toRelPath(this.path, n.path), n.query && (t += "?" + n.query), n.anchor && (t += "#" + n.anchor), t) }, s.prototype.toAbsolute = function(e, t) { var n = new s(e, { base_uri: this }); return n.getURI(t && this.isSameOrigin(n)) }, s.prototype.isSameOrigin = function(e) { if (this.host == e.host && this.protocol == e.protocol) { if (this.port == e.port) return !0; var t = yz[this.protocol]; if (t && (this.port || t) == (e.port || t)) return !0 } return !1 }, s.prototype.toRelPath = function(e, t) { var n, r, o, i = 0,
                    a = "",
                    u = e.substring(0, e.lastIndexOf("/")).split("/"); if (n = t.split("/"), u.length >= n.length)
                    for (r = 0, o = u.length; r < o; r++)
                        if (r >= n.length || u[r] !== n[r]) { i = r + 1; break }
                if (u.length < n.length)
                    for (r = 0, o = n.length; r < o; r++)
                        if (r >= u.length || u[r] !== n[r]) { i = r + 1; break }
                if (1 === i) return t; for (r = 0, o = u.length - (i - 1); r < o; r++) a += "../"; for (r = i - 1, o = n.length; r < o; r++) a += r !== i - 1 ? "/" + n[r] : n[r]; return a }, s.prototype.toAbsPath = function(e, t) { var n, r, o, i = 0,
                    a = [];
                r = /\/$/.test(t) ? "/" : ""; var u = e.split("/"),
                    s = t.split("/"); for (gz(u, function(e) { e && a.push(e) }), u = a, n = s.length - 1, a = []; 0 <= n; n--) 0 !== s[n].length && "." !== s[n] && (".." !== s[n] ? 0 < i ? i-- : a.push(s[n]) : i++); return 0 !== (o = (n = u.length - i) <= 0 ? a.reverse().join("/") : u.slice(0, n).join("/") + "/" + a.reverse().join("/")).indexOf("/") && (o = "/" + o), r && o.lastIndexOf("/") !== o.length - 1 && (o += r), o }, s.prototype.getURI = function(e) { var t; return void 0 === e && (e = !1), this.source && !e || (t = "", e || (this.protocol ? t += this.protocol + "://" : t += "//", this.userInfo && (t += this.userInfo + "@"), this.host && (t += this.host), this.port && (t += ":" + this.port)), this.path && (t += this.path), this.query && (t += "?" + this.query), this.anchor && (t += "#" + this.anchor), this.source = t), this.source }, s }(),
        Cz = function() { var e, t, n, r, o, i, a, u, s = (t = {}, n = {}, r = {}, o = {}, i = {}, a = {}, { addButton: (u = function(n, r) { return function(e, t) { return n[e.toLowerCase()] = rp({ type: r }, t) } })(e = {}, "button"), addToggleButton: u(e, "togglebutton"), addMenuButton: u(e, "menubutton"), addSplitButton: u(e, "splitbutton"), addMenuItem: u(t, "menuitem"), addNestedMenuItem: u(t, "nestedmenuitem"), addToggleMenuItem: u(t, "togglemenuitem"), addAutocompleter: u(n, "autocompleter"), addContextMenu: u(o, "contextmenu"), addContextToolbar: u(i, "contexttoolbar"), addContextForm: u(i, "contextform"), addSidebar: u(a, "sidebar"), addIcon: function(e, t) { return r[e.toLowerCase()] = t }, getAll: function() { return { buttons: e, menuItems: t, icons: r, popups: n, contextMenus: o, contextToolbars: i, sidebars: a } } }); return { addAutocompleter: s.addAutocompleter, addButton: s.addButton, addContextForm: s.addContextForm, addContextMenu: s.addContextMenu, addContextToolbar: s.addContextToolbar, addIcon: s.addIcon, addMenuButton: s.addMenuButton, addMenuItem: s.addMenuItem, addNestedMenuItem: s.addNestedMenuItem, addSidebar: s.addSidebar, addSplitButton: s.addSplitButton, addToggleButton: s.addToggleButton, addToggleMenuItem: s.addToggleMenuItem, getAll: s.getAll } },
        wz = _i.DOM,
        xz = un.extend,
        zz = un.each,
        Nz = un.resolve,
        Ez = Fe.ie,
        Sz = function() {
            function e(e, t, n) { var r, o, i, a, u, s, l, c = this;
                this.plugins = {}, this.contentCSS = [], this.contentStyles = [], this.loadedCSS = {}, this.isNotDirty = !1, this.editorManager = n, this.documentBaseUrl = n.documentBaseURL, this.baseUri = n.baseURI, xz(this, lz), this.settings = (o = e, i = (r = this).documentBaseUrl, a = n.defaultSettings, u = t, l = { id: o, theme: "silver", plugins: "", document_base_url: i, add_form_submit_trigger: !0, submit_patch: !0, add_unload_trigger: !0, convert_urls: !0, relative_urls: !0, remove_script_host: !0, object_resizing: !0, doctype: "<!DOCTYPE html>", visual: !0, font_size_legacy_values: "xx-small,small,medium,large,x-large,xx-large,300%", forced_root_block: "p", hidden_input: !0, inline_styles: !0, convert_fonts_to_spans: !0, indent: !0, indent_before: "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist", indent_after: "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist", entity_encoding: "named", url_converter: (s = r).convertURL, url_converter_scope: s }, Gf(qf, l, a, u)), Gi.languageLoad = this.settings.language_load, Gi.baseURL = n.baseURL, this.id = e, this.setDirty(!1), this.documentBaseURI = new bz(this.settings.document_base_url, { base_uri: this.baseUri }), this.baseURI = this.baseUri, this.inline = this.settings.inline, this.suffix = n.suffix, this.shortcuts = new mz(this), this.editorCommands = new ez(this), this.settings.cache_suffix && (Fe.cacheSuffix = this.settings.cache_suffix.replace(/^[\?\&]+/, "")), this.ui = { registry: Cz() }; var f = zx(this);
                this.mode = f, this.setMode = f.set, n.fire("SetupEditor", { editor: this }), this.execCallback("setup", this), this.$ = Un.overrideDefaults(function() { return { context: c.inline ? c.getBody() : c.getDoc(), element: c.getBody() } }) } return e.prototype.render = function() { mx(this) }, e.prototype.focus = function(e) { Sf(this, e) }, e.prototype.hasFocus = function() { return kf(this) }, e.prototype.execCallback = function(e) { for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]; var r, o = this.settings[e]; if (o) return this.callbackLookup && (r = this.callbackLookup[e]) && (o = r.func, r = r.scope), "string" == typeof o && (r = (r = o.replace(/\.\w+$/, "")) ? Nz(r) : 0, o = Nz(o), this.callbackLookup = this.callbackLookup || {}, this.callbackLookup[e] = { func: o, scope: r }), o.apply(r || this, Array.prototype.slice.call(arguments, 1)) }, e.prototype.translate = function(e) { return Ki.translate(e) }, e.prototype.getParam = function(e, t, n) { return Qf(this, e, t, n) }, e.prototype.nodeChanged = function(e) { this._nodeChangeDispatcher.nodeChanged(e) }, e.prototype.addCommand = function(e, t, n) { this.editorCommands.addCommand(e, t, n) }, e.prototype.addQueryStateHandler = function(e, t, n) { this.editorCommands.addQueryStateHandler(e, t, n) }, e.prototype.addQueryValueHandler = function(e, t, n) { this.editorCommands.addQueryValueHandler(e, t, n) }, e.prototype.addShortcut = function(e, t, n, r) { this.shortcuts.add(e, t, n, r) }, e.prototype.execCommand = function(e, t, n, r) { return this.editorCommands.execCommand(e, t, n, r) }, e.prototype.queryCommandState = function(e) { return this.editorCommands.queryCommandState(e) }, e.prototype.queryCommandValue = function(e) { return this.editorCommands.queryCommandValue(e) }, e.prototype.queryCommandSupported = function(e) { return this.editorCommands.queryCommandSupported(e) }, e.prototype.show = function() { this.hidden && (this.hidden = !1, this.inline ? this.getBody().contentEditable = "true" : (wz.show(this.getContainer()), wz.hide(this.id)), this.load(), this.fire("show")) }, e.prototype.hide = function() { var e = this,
                    t = e.getDoc();
                e.hidden || (Ez && t && !e.inline && t.execCommand("SelectAll"), e.save(), e.inline ? (e.getBody().contentEditable = "false", e === e.editorManager.focusedEditor && (e.editorManager.focusedEditor = null)) : (wz.hide(e.getContainer()), wz.setStyle(e.id, "display", e.orgDisplay)), e.hidden = !0, e.fire("hide")) }, e.prototype.isHidden = function() { return !!this.hidden }, e.prototype.setProgressState = function(e, t) { this.fire("ProgressState", { state: e, time: t }) }, e.prototype.load = function(e) { var t, n = this.getElement(); if (this.removed) return ""; if (n) {
                    (e = e || {}).load = !0; var r = n.value; return t = this.setContent(r !== undefined ? r : n.innerHTML, e), e.element = n, e.no_events || this.fire("LoadContent", e), e.element = n = null, t } }, e.prototype.save = function(e) { var t, n, r = this,
                    o = r.getElement(); if (o && r.initialized && !r.removed) return (e = e || {}).save = !0, e.element = o, e.content = r.getContent(e), e.no_events || r.fire("SaveContent", e), "raw" === e.format && r.fire("RawSaveContent", e), t = e.content, /TEXTAREA|INPUT/i.test(o.nodeName) ? o.value = t : (!e.is_removing && r.inline || (o.innerHTML = t), (n = wz.getParent(r.id, "form")) && zz(n.elements, function(e) { if (e.name === r.id) return e.value = t, !1 })), e.element = o = null, !1 !== e.set_dirty && r.setDirty(!1), t }, e.prototype.setContent = function(e, t) { return Mf(this, e, t) }, e.prototype.getContent = function(e) { return t = this, void 0 === (n = e) && (n = {}), T.from(t.getBody()).fold($("tree" === n.format ? new uc("body", 11) : ""), function(e) { return Xc(t, n, e) }); var t, n }, e.prototype.insertContent = function(e, t) { t && (e = xz({ content: e }, t)), this.execCommand("mceInsertContent", !1, e) }, e.prototype.resetContent = function(e) { e === undefined ? Mf(this, this.startContent, { format: "raw" }) : Mf(this, e), this.undoManager.reset(), this.setDirty(!1), this.nodeChanged() }, e.prototype.isDirty = function() { return !this.isNotDirty }, e.prototype.setDirty = function(e) { var t = !this.isNotDirty;
                this.isNotDirty = !e, e && e !== t && this.fire("dirty") }, e.prototype.getContainer = function() { return this.container || (this.container = wz.get(this.editorContainer || this.id + "_parent")), this.container }, e.prototype.getContentAreaContainer = function() { return this.contentAreaContainer }, e.prototype.getElement = function() { return this.targetElm || (this.targetElm = wz.get(this.id)), this.targetElm }, e.prototype.getWin = function() { var e; return this.contentWindow || (e = this.iframeElement) && (this.contentWindow = e.contentWindow), this.contentWindow }, e.prototype.getDoc = function() { var e; return this.contentDocument || (e = this.getWin()) && (this.contentDocument = e.document), this.contentDocument }, e.prototype.getBody = function() { var e = this.getDoc(); return this.bodyElement || (e ? e.body : null) }, e.prototype.convertURL = function(e, t, n) { var r = this.settings; return r.urlconverter_callback ? this.execCallback("urlconverter_callback", e, n, !0, t) : !r.convert_urls || n && "LINK" === n.nodeName || 0 === e.indexOf("file:") || 0 === e.length ? e : r.relative_urls ? this.documentBaseURI.toRelative(e) : e = this.documentBaseURI.toAbsolute(e, r.remove_script_host) }, e.prototype.addVisual = function(e) { var n, r = this,
                    o = r.settings,
                    i = r.dom;
                e = e || r.getBody(), r.hasVisual === undefined && (r.hasVisual = o.visual), zz(i.select("table,a", e), function(e) { var t; switch (e.nodeName) {
                        case "TABLE":
                            return n = o.visual_table_class || "mce-item-table", void((t = i.getAttrib(e, "border")) && "0" !== t || !r.hasVisual ? i.removeClass(e, n) : i.addClass(e, n));
                        case "A":
                            return void(i.getAttrib(e, "href") || (t = i.getAttrib(e, "name") || e.id, n = o.visual_anchor_class || "mce-item-anchor", t && r.hasVisual ? i.addClass(e, n) : i.removeClass(e, n))) } }), r.fire("VisualAid", { element: e, hasVisual: r.hasVisual }) }, e.prototype.remove = function() { If(this) }, e.prototype.destroy = function(e) { Ff(this, e) }, e.prototype.uploadImages = function(e) { return this.editorUpload.uploadImages(e) }, e.prototype._scanForImages = function() { return this.editorUpload.scanForImages() }, e.prototype.addButton = function() { throw new Error("editor.addButton has been removed in tinymce 5x, use editor.ui.registry.addButton or editor.ui.registry.addToggleButton or editor.ui.registry.addSplitButton instead") }, e.prototype.addSidebar = function() { throw new Error("editor.addSidebar has been removed in tinymce 5x, use editor.ui.registry.addSidebar instead") }, e.prototype.addMenuItem = function() { throw new Error("editor.addMenuItem has been removed in tinymce 5x, use editor.ui.registry.addMenuItem instead") }, e.prototype.addContextToolbar = function() { throw new Error("editor.addContextToolbar has been removed in tinymce 5x, use editor.ui.registry.addContextToolbar instead") }, e }(),
        kz = { isEditorUIElement: function(e) { return -1 !== e.className.toString().indexOf("tox-") || -1 !== e.className.toString().indexOf("mce-") } },
        Tz = function(n, e) { var t, r;
            pr.detect().browser.isIE() ? (r = n).on("focusout", function() { vf(r) }) : (t = e, n.on("mouseup touchend", function(e) { t.throttle() })), n.on("keyup NodeChange", function(e) { var t; "nodechange" === (t = e).type && t.selectionChange || vf(n) }) },
        Az = function(e) { var t, n, r, o = ia(function() { vf(e) }, 0);
            e.inline && (t = e, n = o, r = function() { n.throttle() }, _i.DOM.bind(j.document, "mouseup", r), t.on("remove", function() { _i.DOM.unbind(j.document, "mouseup", r) })), e.on("init", function() { Tz(e, o) }), e.on("remove", function() { o.cancel() }) },
        Mz = _i.DOM,
        Rz = function(e) { return kz.isEditorUIElement(e) },
        Dz = function(t, e) { var n = t ? t.settings.custom_ui_selector : ""; return null !== Mz.getParent(e, function(e) { return Rz(e) || !!n && t.dom.is(e, n) }) },
        Bz = function(r, e) { var t = e.editor;
            Az(t), t.on("focusin", function() { var e = r.focusedEditor;
                e !== this && (e && e.fire("blur", { focusedEditor: this }), r.setActive(this), (r.focusedEditor = this).fire("focus", { blurredEditor: e }), this.focus(!0)) }), t.on("focusout", function() { var t = this;
                We.setEditorTimeout(t, function() { var e = r.focusedEditor;
                    Dz(t, function() { try { return j.document.activeElement } catch (e) { return j.document.body } }()) || e !== t || (t.fire("blur", { focusedEditor: null }), r.focusedEditor = null) }) }), py || (py = function(e) { var t, n = r.activeEditor;
                t = e.target, n && t.ownerDocument === j.document && (t === j.document.body || Dz(n, t) || r.focusedEditor !== n || (n.fire("blur", { focusedEditor: null }), r.focusedEditor = null)) }, Mz.bind(j.document, "focusin", py)) },
        Oz = function(e, t) { e.focusedEditor === t.editor && (e.focusedEditor = null), e.activeEditor || (Mz.unbind(j.document, "focusin", py), py = null) },
        Hz = function(e) { e.on("AddEditor", d(Bz, e)), e.on("RemoveEditor", d(Oz, e)) },
        _z = _i.DOM,
        Pz = un.explode,
        Lz = un.each,
        Vz = un.extend,
        Iz = 0,
        Fz = !1,
        Uz = [],
        jz = [],
        qz = function(t) { var n = t.type;
            Lz(Kz.get(), function(e) { switch (n) {
                    case "scroll":
                        e.fire("ScrollWindow", t); break;
                    case "resize":
                        e.fire("ResizeWindow", t) } }) },
        $z = function(e) { e !== Fz && (e ? Un(window).on("resize scroll", qz) : Un(window).off("resize scroll", qz), Fz = e) },
        Wz = function(t) { var e = jz;
            delete Uz[t.id]; for (var n = 0; n < Uz.length; n++)
                if (Uz[n] === t) { Uz.splice(n, 1); break }
            return jz = G(jz, function(e) { return t !== e }), Kz.activeEditor === t && (Kz.activeEditor = 0 < jz.length ? jz[0] : null), Kz.focusedEditor === t && (Kz.focusedEditor = null), e.length !== jz.length },
        Kz = Fi({}, oz, { baseURI: null, baseURL: null, defaultSettings: {}, documentBaseURL: null, suffix: null, $: Un, majorVersion: "5", minorVersion: "0.7", releaseDate: "2019-06-05", editors: Uz, i18n: Ki, activeEditor: null, focusedEditor: null, settings: {}, setup: function() { var e, t, n, r, o = ""; if (t = bz.getDocumentBaseUrl(j.document.location), /^[^:]+:\/\/\/?[^\/]+\//.test(t) && (t = t.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, ""), /[\/\\]$/.test(t) || (t += "/")), n = window.tinymce || window.tinyMCEPreInit) e = n.base || n.baseURL, o = n.suffix;
                else { for (var i = j.document.getElementsByTagName("script"), a = 0; a < i.length; a++) { var u = (r = i[a].src).substring(r.lastIndexOf("/")); if (/tinymce(\.full|\.jquery|)(\.min|\.dev|)\.js/.test(r)) {-1 !== u.indexOf(".min") && (o = ".min"), e = r.substring(0, r.lastIndexOf("/")); break } }!e && j.document.currentScript && (-1 !== (r = j.document.currentScript.src).indexOf(".min") && (o = ".min"), e = r.substring(0, r.lastIndexOf("/"))) }
                this.baseURL = new bz(t).toAbsolute(e), this.documentBaseURL = t, this.baseURI = new bz(this.baseURL), this.suffix = o, Hz(this) }, overrideDefaults: function(e) { var t, n;
                (t = e.base_url) && (this.baseURL = new bz(this.documentBaseURL).toAbsolute(t.replace(/\/+$/, "")), this.baseURI = new bz(this.baseURL)), n = e.suffix, e.suffix && (this.suffix = n); var r = (this.defaultSettings = e).plugin_base_urls; for (var o in r) Gi.PluginManager.urls[o] = r[o] }, init: function(r) { var n, u, s = this;
                u = un.makeMap("area base basefont br col frame hr img input isindex link meta param embed source wbr track colgroup option table tbody tfoot thead tr th td script noscript style textarea video audio iframe object menu", " "); var l = function(e) { var t = e.id; return t || (t = (t = e.name) && !_z.get(t) ? e.name : _z.uniqueId(), e.setAttribute("id", t)), t },
                    c = function(e, t) { return t.constructor === RegExp ? t.test(e.className) : _z.hasClass(e, t) },
                    f = function(e) { n = e },
                    e = function() { var o, i = 0,
                            a = [],
                            n = function(e, t, n) { var r = new Sz(e, t, s);
                                a.push(r), r.on("init", function() {++i === o.length && f(a) }), r.targetElm = r.targetElm || n, r.render() };
                        _z.unbind(window, "ready", e),
                            function(e) { var t = r[e];
                                t && t.apply(s, Array.prototype.slice.call(arguments, 2)) }("onpageload"), o = Un.unique(function(t) { var e, n = []; if (Fe.ie && Fe.ie < 11) return gd.initError("TinyMCE does not support the browser you are using. For a list of supported browsers please see: https://www.tinymce.com/docs/get-started/system-requirements/"), []; if (t.types) return Lz(t.types, function(e) { n = n.concat(_z.select(e.selector)) }), n; if (t.selector) return _z.select(t.selector); if (t.target) return [t.target]; switch (t.mode) {
                                    case "exact":
                                        0 < (e = t.elements || "").length && Lz(Pz(e), function(t) { var e;
                                            (e = _z.get(t)) ? n.push(e): Lz(j.document.forms, function(e) { Lz(e.elements, function(e) { e.name === t && (t = "mce_editor_" + Iz++, _z.setAttrib(e, "id", t), n.push(e)) }) }) }); break;
                                    case "textareas":
                                    case "specific_textareas":
                                        Lz(_z.select("textarea"), function(e) { t.editor_deselector && c(e, t.editor_deselector) || t.editor_selector && !c(e, t.editor_selector) || n.push(e) }) } return n }(r)), r.types ? Lz(r.types, function(t) { un.each(o, function(e) { return !_z.is(e, t.selector) || (n(l(e), Vz({}, r, t), e), !1) }) }) : (un.each(o, function(e) { var t;
                                (t = s.get(e.id)) && t.initialized && !(t.getContainer() || t.getBody()).parentNode && (Wz(t), t.unbindAllNativeEvents(), t.destroy(!0), t.removed = !0, t = null) }), 0 === (o = un.grep(o, function(e) { return !s.get(e.id) })).length ? f([]) : Lz(o, function(e) { var t;
                                t = e, r.inline && t.tagName.toLowerCase() in u ? gd.initError("Could not initialize inline editor on invalid inline target element", e) : n(l(e), r, e) })) }; return s.settings = r, _z.bind(window, "ready", e), new Ue(function(t) { n ? t(n) : f = function(e) { t(e) } }) }, get: function(t) { return 0 === arguments.length ? jz.slice(0) : K(t) ? Z(jz, function(e) { return e.id === t }).getOr(null) : H(t) && jz[t] ? jz[t] : null }, add: function(e) { var n = this; return Uz[e.id] === e || (null === n.get(e.id) && ("length" !== e.id && (Uz[e.id] = e), Uz.push(e), jz.push(e)), $z(!0), n.activeEditor = e, n.fire("AddEditor", { editor: e }), vy || (vy = function(e) { var t = n.fire("BeforeUnload"); if (t.returnValue) return e.preventDefault(), e.returnValue = t.returnValue, t.returnValue }, window.addEventListener("beforeunload", vy))), e }, createEditor: function(e, t) { return this.add(new Sz(e, t, this)) }, remove: function(e) { var t, n, r = this; if (e) { if (!K(e)) return n = e, D(r.get(n.id)) ? null : (Wz(n) && r.fire("RemoveEditor", { editor: n }), 0 === jz.length && window.removeEventListener("beforeunload", vy), n.remove(), $z(0 < jz.length), n);
                    Lz(_z.select(e), function(e) {
                        (n = r.get(e.id)) && r.remove(n) }) } else
                    for (t = jz.length - 1; 0 <= t; t--) r.remove(jz[t]) }, execCommand: function(e, t, n) { var r = this.get(n); switch (e) {
                    case "mceAddEditor":
                        return this.get(n) || new Sz(n, this.settings, this).render(), !0;
                    case "mceRemoveEditor":
                        return r && r.remove(), !0;
                    case "mceToggleEditor":
                        return r ? r.isHidden() ? r.show() : r.hide() : this.execCommand("mceAddEditor", 0, n), !0 } return !!this.activeEditor && this.activeEditor.execCommand(e, t, n) }, triggerSave: function() { Lz(jz, function(e) { e.save() }) }, addI18n: function(e, t) { Ki.add(e, t) }, translate: function(e) { return Ki.translate(e) }, setActive: function(e) { var t = this.activeEditor;
                this.activeEditor !== e && (t && t.fire("deactivate", { relatedTarget: e }), e.fire("activate", { relatedTarget: t })), this.activeEditor = e } });

    function Xz(n) { return { walk: function(e, t) { return Gl(n, e, t) }, split: km, normalize: function(t) { return mv(n, t).fold($(!1), function(e) { return t.setStart(e.startContainer, e.startOffset), t.setEnd(e.endContainer, e.endOffset), !0 }) } } }
    Kz.setup(), (yy = Xz || (Xz = {})).compareRanges = jd, yy.getCaretRangeFromPoint = Bp, yy.getSelectedNode = pu, yy.getNode = vu; var Yz, Gz, Jz = Xz,
        Qz = Math.min,
        Zz = Math.max,
        eN = Math.round,
        tN = function(e, t, n) { var r, o, i, a, u, s; return r = t.x, o = t.y, i = e.w, a = e.h, u = t.w, s = t.h, "b" === (n = (n || "").split(""))[0] && (o += s), "r" === n[1] && (r += u), "c" === n[0] && (o += eN(s / 2)), "c" === n[1] && (r += eN(u / 2)), "b" === n[3] && (o -= a), "r" === n[4] && (r -= i), "c" === n[3] && (o -= eN(a / 2)), "c" === n[4] && (r -= eN(i / 2)), nN(r, o, i, a) },
        nN = function(e, t, n, r) { return { x: e, y: t, w: n, h: r } },
        rN = { inflate: function(e, t, n) { return nN(e.x - t, e.y - n, e.w + 2 * t, e.h + 2 * n) }, relativePosition: tN, findBestRelativePosition: function(e, t, n, r) { var o, i; for (i = 0; i < r.length; i++)
                    if ((o = tN(e, t, r[i])).x >= n.x && o.x + o.w <= n.w + n.x && o.y >= n.y && o.y + o.h <= n.h + n.y) return r[i];
                return null }, intersect: function(e, t) { var n, r, o, i; return n = Zz(e.x, t.x), r = Zz(e.y, t.y), o = Qz(e.x + e.w, t.x + t.w), i = Qz(e.y + e.h, t.y + t.h), o - n < 0 || i - r < 0 ? null : nN(n, r, o - n, i - r) }, clamp: function(e, t, n) { var r, o, i, a, u, s, l, c, f, d; return u = e.x, s = e.y, l = e.x + e.w, c = e.y + e.h, f = t.x + t.w, d = t.y + t.h, r = Zz(0, t.x - u), o = Zz(0, t.y - s), i = Zz(0, l - f), a = Zz(0, c - d), u += r, s += o, n && (l += r, c += o, u -= i, s -= a), nN(u, s, (l -= i) - u, (c -= a) - s) }, create: nN, fromClientRect: function(e) { return nN(e.left, e.top, e.width, e.height) } },
        oN = un.each,
        iN = un.extend,
        aN = function() {};
    aN.extend = Yz = function(n) { var e, t, r, o = this.prototype,
            i = function() { var e, t, n; if (!Gz && (this.init && this.init.apply(this, arguments), t = this.Mixins))
                    for (e = t.length; e--;)(n = t[e]).init && n.init.apply(this, arguments) },
            a = function() { return this },
            u = function(n, r) { return function() { var e, t = this._super; return this._super = o[n], e = r.apply(this, arguments), this._super = t, e } }; for (t in Gz = !0, e = new this, Gz = !1, n.Mixins && (oN(n.Mixins, function(e) { for (var t in e) "init" !== t && (n[t] = e[t]) }), o.Mixins && (n.Mixins = o.Mixins.concat(n.Mixins))), n.Methods && oN(n.Methods.split(","), function(e) { n[e] = a }), n.Properties && oN(n.Properties.split(","), function(e) { var t = "_" + e;
                n[e] = function(e) { return e !== undefined ? (this[t] = e, this) : this[t] } }), n.Statics && oN(n.Statics, function(e, t) { i[t] = e }), n.Defaults && o.Defaults && (n.Defaults = iN({}, o.Defaults, n.Defaults)), n) "function" == typeof(r = n[t]) && o[t] ? e[t] = u(t, r) : e[t] = r; return i.prototype = e, (i.constructor = i).extend = Yz, i }; var uN, sN, lN, cN, fN = Math.min,
        dN = Math.max,
        hN = Math.round,
        mN = { serialize: function(e) { var t = JSON.stringify(e); return K(t) ? t.replace(/[\u0080-\uFFFF]/g, function(e) { var t = e.charCodeAt(0).toString(16); return "\\u" + "0000".substring(t.length) + t }) : t }, parse: function(e) { try { return JSON.parse(e) } catch (t) {} } },
        gN = { callbacks: {}, count: 0, send: function(t) { var n = this,
                    r = _i.DOM,
                    o = t.count !== undefined ? t.count : n.count,
                    i = "tinymce_jsonp_" + o;
                n.callbacks[o] = function(e) { r.remove(i), delete n.callbacks[o], t.callback(e) }, r.add(r.doc.body, "script", { id: i, src: t.url, type: "text/javascript" }), n.count++ } },
        pN = Fi({}, oz, { send: function(e) { var t, n = 0,
                    r = function() {!e.async || 4 === t.readyState || 1e4 < n++ ? (e.success && n < 1e4 && 200 === t.status ? e.success.call(e.success_scope, "" + t.responseText, t, e) : e.error && e.error.call(e.error_scope, 1e4 < n ? "TIMED_OUT" : "GENERAL", t, e), t = null) : We.setTimeout(r, 10) }; if (e.scope = e.scope || this, e.success_scope = e.success_scope || e.scope, e.error_scope = e.error_scope || e.scope, e.async = !1 !== e.async, e.data = e.data || "", pN.fire("beforeInitialize", { settings: e }), t = bd()) { if (t.overrideMimeType && t.overrideMimeType(e.content_type), t.open(e.type || (e.data ? "POST" : "GET"), e.url, e.async), e.crossDomain && (t.withCredentials = !0), e.content_type && t.setRequestHeader("Content-Type", e.content_type), e.requestheaders && un.each(e.requestheaders, function(e) { t.setRequestHeader(e.key, e.value) }), t.setRequestHeader("X-Requested-With", "XMLHttpRequest"), (t = pN.fire("beforeSend", { xhr: t, settings: e }).xhr).send(e.data), !e.async) return r();
                    We.setTimeout(r, 10) } } }),
        vN = un.extend,
        yN = function() {
            function t(e) { this.settings = vN({}, e), this.count = 0 } return t.sendRPC = function(e) { return (new t).send(e) }, t.prototype.send = function(e) { var n = e.error,
                    r = e.success,
                    o = vN(this.settings, e);
                o.success = function(e, t) { void 0 === (e = mN.parse(e)) && (e = { error: "JSON Parse error." }), e.error ? n.call(o.error_scope || o.scope, e.error, t) : r.call(o.success_scope || o.scope, e.result) }, o.error = function(e, t) { n && n.call(o.error_scope || o.scope, e, t) }, o.data = mN.serialize({ id: e.id || "c" + this.count++, method: e.method, params: e.params }), o.content_type = "application/json", pN.send(o) }, t }(); try { uN = j.window.localStorage } catch (xN) { sN = {}, lN = [], cN = { getItem: function(e) { var t = sN[e]; return t || null }, setItem: function(e, t) { lN.push(e), sN[e] = String(t) }, key: function(e) { return lN[e] }, removeItem: function(t) { lN = lN.filter(function(e) { return e === t }), delete sN[t] }, clear: function() { lN = [], sN = {} }, length: 0 }, Object.defineProperty(cN, "length", { get: function() { return lN.length }, configurable: !1, enumerable: !1 }), uN = cN } var bN, CN = { geom: { Rect: rN }, util: { Promise: Ue, Delay: We, Tools: un, VK: Rh, URI: bz, Class: aN, EventDispatcher: nz, Observable: oz, I18n: Ki, XHR: pN, JSON: mN, JSONRequest: yN, JSONP: gN, LocalStorage: uN, Color: function(e) { var n = {},
                        u = 0,
                        s = 0,
                        l = 0,
                        t = function(e) { var t; return "object" == typeof e ? "r" in e ? (u = e.r, s = e.g, l = e.b) : "v" in e && function(e, t, n) { var r, o, i, a; if (e = (parseInt(e, 10) || 0) % 360, t = parseInt(t, 10) / 100, n = parseInt(n, 10) / 100, t = dN(0, fN(t, 1)), n = dN(0, fN(n, 1)), 0 !== t) { switch (r = e / 60, i = (o = n * t) * (1 - Math.abs(r % 2 - 1)), a = n - o, Math.floor(r)) {
                                        case 0:
                                            u = o, s = i, l = 0; break;
                                        case 1:
                                            u = i, s = o, l = 0; break;
                                        case 2:
                                            u = 0, s = o, l = i; break;
                                        case 3:
                                            u = 0, s = i, l = o; break;
                                        case 4:
                                            u = i, s = 0, l = o; break;
                                        case 5:
                                            u = o, s = 0, l = i; break;
                                        default:
                                            u = s = l = 0 }
                                    u = hN(255 * (u + a)), s = hN(255 * (s + a)), l = hN(255 * (l + a)) } else u = s = l = hN(255 * n) }(e.h, e.s, e.v) : (t = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)[^\)]*\)/gi.exec(e)) ? (u = parseInt(t[1], 10), s = parseInt(t[2], 10), l = parseInt(t[3], 10)) : (t = /#([0-F]{2})([0-F]{2})([0-F]{2})/gi.exec(e)) ? (u = parseInt(t[1], 16), s = parseInt(t[2], 16), l = parseInt(t[3], 16)) : (t = /#([0-F])([0-F])([0-F])/gi.exec(e)) && (u = parseInt(t[1] + t[1], 16), s = parseInt(t[2] + t[2], 16), l = parseInt(t[3] + t[3], 16)), u = u < 0 ? 0 : 255 < u ? 255 : u, s = s < 0 ? 0 : 255 < s ? 255 : s, l = l < 0 ? 0 : 255 < l ? 255 : l, n }; return e && t(e), n.toRgb = function() { return { r: u, g: s, b: l } }, n.toHsv = function() { return e = u, t = s, n = l, o = 0, (i = fN(e /= 255, fN(t /= 255, n /= 255))) === (a = dN(e, dN(t, n))) ? { h: 0, s: 0, v: 100 * (o = i) } : (r = (a - i) / a, { h: hN(60 * ((e === i ? 3 : n === i ? 1 : 5) - (e === i ? t - n : n === i ? e - t : n - e) / ((o = a) - i))), s: hN(100 * r), v: hN(100 * o) }); var e, t, n, r, o, i, a }, n.toHex = function() { var e = function(e) { return 1 < (e = parseInt(e, 10).toString(16)).length ? e : "0" + e }; return "#" + e(u) + e(s) + e(l) }, n.parse = t, n } }, dom: { EventUtils: tt, Sizzle: Pt, DomQuery: Un, TreeWalker: Po, DOMUtils: _i, ScriptLoader: Ii, RangeUtils: Jz, Serializer: wp, ControlSelection: Tp, BookmarkManager: Ep, Selection: Nv, Event: tt.Event }, html: { Styles: Si, Entities: ci, Node: uc, Schema: zi, SaxParser: fc, DomParser: vp, Writer: Gc, Serializer: Jc }, Env: Fe, AddOnManager: Gi, Annotator: rc, Formatter: tp, UndoManager: gm, EditorCommands: ez, WindowManager: ld, NotificationManager: ud, EditorObservable: lz, Shortcuts: mz, Editor: Sz, FocusManager: kz, EditorManager: Kz, DOM: _i.DOM, ScriptLoader: Ii.ScriptLoader, PluginManager: Gi.PluginManager, ThemeManager: Gi.ThemeManager, IconManager: pd, trim: un.trim, isArray: un.isArray, is: un.is, toArray: un.toArray, makeMap: un.makeMap, each: un.each, map: un.map, grep: un.grep, inArray: un.inArray, extend: un.extend, create: un.create, walk: un.walk, createNS: un.createNS, resolve: un.resolve, explode: un.explode, _addCacheSuffix: un._addCacheSuffix, isOpera: Fe.opera, isWebKit: Fe.webkit, isIE: Fe.ie, isGecko: Fe.gecko, isMac: Fe.mac },
        wN = un.extend(Kz, CN);
    bN = wN, window.tinymce = bN, window.tinyMCE = bN,
        function(e) { if ("object" == typeof module) try { module.exports = e } catch (t) {} }(wN) }(window);

/* Ephox Fluffy plugin
 *
 * Copyright 2010-2016 Ephox Corporation.  All rights reserved.
 *
 * Version: 2.3.0-10
 */

! function(a) { "use strict"; var n, t, r, e, i, u = void 0 !== a.window ? a.window : Function("return this;")(),
        o = function(n, t) { return { isRequired: n, applyPatch: t } },
        f = function(i, o) { return function() { for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t]; var r = o.apply(this, n),
                    e = void 0 === r ? n : r; return i.apply(this, e) } },
        c = function(n, t) { if (n)
                for (var r = 0; r < t.length; r++) t[r].isRequired(n) && t[r].applyPatch(n); return n },
        l = function(n) { return function() { return n } },
        s = l(!1),
        p = l(!0),
        g = s,
        d = p,
        h = function() { return v },
        v = (e = { fold: function(n, t) { return n() }, is: g, isSome: g, isNone: d, getOr: r = function(n) { return n }, getOrThunk: t = function(n) { return n() }, getOrDie: function(n) { throw new Error(n || "error: getOrDie called on none.") }, getOrNull: function() { return null }, getOrUndefined: function() {}, or: r, orThunk: t, map: h, ap: h, each: function() {}, bind: h, flatten: h, exists: g, forall: d, filter: h, equals: n = function(n) { return n.isNone() }, equals_: n, toArray: function() { return [] }, toString: l("none()") }, Object.freeze && Object.freeze(e), e),
        y = function(r) { var n = function() { return r },
                t = function() { return i },
                e = function(n) { return n(r) },
                i = { fold: function(n, t) { return t(r) }, is: function(n) { return r === n }, isSome: d, isNone: g, getOr: n, getOrThunk: n, getOrDie: n, getOrNull: n, getOrUndefined: n, or: t, orThunk: t, map: function(n) { return y(n(r)) }, ap: function(n) { return n.fold(h, function(n) { return y(n(r)) }) }, each: function(n) { n(r) }, bind: e, flatten: n, exists: e, forall: e, filter: function(n) { return n(r) ? i : v }, equals: function(n) { return n.is(r) }, equals_: function(n, t) { return n.fold(g, function(n) { return t(r, n) }) }, toArray: function() { return [r] }, toString: function() { return "some(" + r + ")" } }; return i },
        m = h,
        w = function(n) { return null == n ? v : y(n) },
        O = function(t) { return function(n) { return function(n) { if (null === n) return "null"; var t = typeof n; return "object" === t && Array.prototype.isPrototypeOf(n) ? "array" : "object" === t && String.prototype.isPrototypeOf(n) ? "string" : t }(n) === t } },
        b = O("object"),
        j = O("array"),
        A = O("undefined"),
        x = O("function"),
        E = void 0 === (i = Array.prototype.indexOf) ? function(n, t) { return M(n, t) } : function(n, t) { return i.call(n, t) },
        M = function(n, t) { for (var r = 0, e = n.length; r < e; ++r)
                if (n[r] === t) return r;
            return -1 },
        S = Array.prototype.push,
        _ = function(n, t) { return function(n) { for (var t = [], r = 0, e = n.length; r < e; ++r) { if (!Array.prototype.isPrototypeOf(n[r])) throw new Error("Arr.flatten item " + r + " was not an array, input: " + n);
                    S.apply(t, n[r]) } return t }(function(n, t) { for (var r = n.length, e = new Array(r), i = 0; i < r; i++) { var o = n[i];
                    e[i] = t(o, i, n) } return e }(n, t)) },
        P = (Array.prototype.slice, x(Array.from) && Array.from, Object.prototype.hasOwnProperty),
        D = function(u) { return function() { for (var n = new Array(arguments.length), t = 0; t < n.length; t++) n[t] = arguments[t]; if (0 === n.length) throw new Error("Can't merge zero objects"); for (var r = {}, e = 0; e < n.length; e++) { var i = n[e]; for (var o in i) P.call(i, o) && (r[o] = u(r[o], i[o])) } return r } },
        U = D(function(n, t) { return b(n) && b(t) ? U(n, t) : t }),
        N = D(function(n, t) { return t }),
        R = Object.keys,
        T = Object.hasOwnProperty,
        q = function(n, t) { for (var r = R(n), e = 0, i = r.length; e < i; e++) { var o = r[e];
                t(n[o], o, n) } },
        C = function(n, t) { return I(n, t) ? w(n[t]) : m() },
        I = function(n, t) { return T.call(n, t) },
        k = function(n) { if (A(n) || "" === n) return []; var t = j(n) ? _(n, function(n) { return n.split(" ") }) : n.split(" "); return _(t, function(n) { return 0 < n.length ? [n.trim()] : [] }) },
        L = function(n, t) { var r, e, i, o = U(n, t),
                u = k(t.plugins),
                a = C(o, "custom_plugin_urls").getOr({}),
                f = (r = function(n, t) { return -1 < E(u, t) }, e = {}, i = {}, q(a, function(n, t) {
                    (r(n, t) ? e : i)[t] = n }), { t: e, f: i }),
                c = C(o, "external_plugins").getOr({}),
                l = {};
            q(f.t, function(n, t) { l[t] = n }); var s = N(l, c); return N(t, 0 === R(s).length ? {} : { external_plugins: s }) },
        z = { getCustomPluginUrls: L, patch: o(function() { return !0 }, function(t) { t.EditorManager.init = f(t.EditorManager.init, function(n) { return [L(t.defaultSettings, n)] }) }) },
        V = function(n, t) { return function(n, t) { for (var r = null != t ? t : u, e = 0; e < n.length && null != r; ++e) r = r[n[e]]; return r }(n.split("."), t) },
        B = function(n) { return parseInt(n, 10) },
        F = function(n, t, r) { return { major: n, minor: t, patch: r } },
        $ = function(n) { var t = /([0-9]+)\.([0-9]+)\.([0-9]+)(?:(\-.+)?)/.exec(n); return t ? F(B(t[1]), B(t[2]), B(t[3])) : F(0, 0, 0) },
        G = function(n, t) { var r = n - t; return 0 === r ? 0 : 0 < r ? 1 : -1 },
        H = function(n, t) { return !!n && -1 === function(n, t) { var r = G(n.major, t.major); if (0 !== r) return r; var e = G(n.minor, t.minor); if (0 !== e) return e; var i = G(n.patch, t.patch); return 0 !== i ? i : 0 }($([(r = n).majorVersion, r.minorVersion].join(".").split(".").slice(0, 3).join(".")), $(t)); var r },
        J = { patch: o(function(n) { return H(n, "4.7.0") }, function(n) { var o;
                n.EditorManager.init = f(n.EditorManager.init, (o = n.EditorManager, function(n) { var t = V("tinymce.util.Tools", u),
                        r = k(n.plugins),
                        e = o.defaultSettings.forced_plugins || [],
                        i = 0 < e.length ? r.concat(e) : r; return [t.extend({}, n, { plugins: i })] })) }) },
        K = function() { return (new Date).getTime() },
        Q = function(n, t, r, e, i) { var o, u = K();
            o = a.setInterval(function() { n() && (a.clearInterval(o), t()), K() - u > i && (a.clearInterval(o), r()) }, e) },
        W = function(i) { return function() { var n, t, r, e = (n = i, t = "position", r = n.currentStyle ? n.currentStyle[t] : a.window.getComputedStyle(n, null)[t], r || "").toLowerCase(); return "absolute" === e || "fixed" === e } },
        X = function(n) { n.parentNode.removeChild(n) },
        Y = function(n, t) { var r, e = ((r = a.document.createElement("div")).style.display = "none", r.className = "mce-floatpanel", r);
            a.document.body.appendChild(e), Q(W(e), function() { X(e), n() }, function() { X(e), t() }, 10, 5e3) },
        Z = function(n, t) { n.notificationManager ? n.notificationManager.open({ text: t, type: "warning", timeout: 0, icon: "" }) : n.windowManager.alert(t) },
        nn = function(n) { n.EditorManager.on("AddEditor", function(n) { var t = n.editor,
                    r = t.settings.service_message;
                r && Y(function() { Z(t, t.settings.service_message) }, function() { a.alert(r) }) }) },
        tn = function(n) { var t, r, e = V("tinymce.util.URI", u);
            (t = n.base_url) && (this.baseURL = new e(this.documentBaseURL).toAbsolute(t.replace(/\/+$/, "")), this.baseURI = new e(this.baseURL)), r = n.suffix, n.suffix && (this.suffix = r), this.defaultSettings = n },
        rn = function(n) { return [V("tinymce.util.Tools", u).extend({}, this.defaultSettings, n)] },
        en = { patch: o(function(n) { return "function" != typeof n.overrideDefaults }, function(n) { nn(n), n.overrideDefaults = tn, n.EditorManager.init = f(n.EditorManager.init, rn) }) },
        on = { patch: o(function(n) { return H(n, "4.5.0") }, function(n) { var e;
                n.overrideDefaults = f(n.overrideDefaults, (e = n, function(n) { var t = n.plugin_base_urls; for (var r in t) e.PluginManager.urls[r] = t[r] })) }) },
        un = function(n) { c(n, [en.patch, on.patch, J.patch, z.patch]) };
    un(u.tinymce) }(window);

(function(cloudSettings) {
    tinymce.overrideDefaults(cloudSettings);
})({ "imagetools_proxy": "https://imageproxy.tiny.cloud/2/image", "suffix": ".min", "linkchecker_service_url": "https://hyperlinking.tiny.cloud", "spellchecker_rpc_url": "https://spelling.tiny.cloud", "spellchecker_api_key": "no-api-key", "tinydrive_service_url": "https://catalog.tiny.cloud", "api_key": "no-api-key", "imagetools_api_key": "no-api-key", "tinydrive_api_key": "no-api-key", "rain_rainmaker_service_url": "https://rainmaker.tiny.cloud", "forced_plugins": ["chiffer", "rain"], "content_css_cors": true, "custom_plugin_urls": {}, "chiffer_snowplow_service_url": "https://sp.tinymce.com/i", "mediaembed_api_key": "no-api-key", "linkchecker_api_key": "no-api-key", "mediaembed_service_url": "https://hyperlinking.tiny.cloud", "service_message": "This domain is not registered with TinyMCE Cloud. \u003ca target=\"_blank\" href=\"https://apps.tiny.cloud/?add-to-cart=197933\"\u003eStart a free trial\u003c/a\u003e to discover our premium cloud services and pro support." });
tinymce.baseURL = "https://cdn.tiny.cloud/1/no-api-key/tinymce/5.0.7-44"

/* Ephox chiffer plugin
 *
 * Copyright 2010-2017 Ephox Corporation.  All rights reserved.
 *
 * Version: 1.4.0-7
 */

! function() { "use strict"; for (var n, e, o, w, i, t = function(n) { return function() { return n } }, d = t(!1), r = t(!0), a = d, l = r, s = function() { return u }, u = (w = { fold: function(n, e) { return n() }, is: a, isSome: a, isNone: l, getOr: o = function(n) { return n }, getOrThunk: e = function(n) { return n() }, getOrDie: function(n) { throw new Error(n || "error: getOrDie called on none.") }, getOrNull: function() { return null }, getOrUndefined: function() {}, or: o, orThunk: e, map: s, ap: s, each: function() {}, bind: s, flatten: s, exists: a, forall: l, filter: s, equals: n = function(n) { return n.isNone() }, equals_: n, toArray: function() { return [] }, toString: t("none()") }, Object.freeze && Object.freeze(w), w), c = function(o) { var n = function() { return o },
                e = function() { return i },
                w = function(n) { return n(o) },
                i = { fold: function(n, e) { return e(o) }, is: function(n) { return o === n }, isSome: l, isNone: a, getOr: n, getOrThunk: n, getOrDie: n, getOrNull: n, getOrUndefined: n, or: e, orThunk: e, map: function(n) { return c(n(o)) }, ap: function(n) { return n.fold(s, function(n) { return c(n(o)) }) }, each: function(n) { n(o) }, bind: w, flatten: n, exists: w, forall: w, filter: function(n) { return n(o) ? i : u }, equals: function(n) { return n.is(o) }, equals_: function(n, e) { return n.fold(a, function(n) { return e(o, n) }) }, toArray: function() { return [o] }, toString: function() { return "some(" + o + ")" } }; return i }, m = { some: c, none: s, from: function(n) { return null == n ? u : c(n) } }, S = (i = "function", function(n) { return function(n) { if (null === n) return "null"; var e = typeof n; return "object" === e && Array.prototype.isPrototypeOf(n) ? "array" : "object" === e && String.prototype.isPrototypeOf(n) ? "string" : e }(n) === i }), E = (Array.prototype.slice, S(Array.from) && Array.from, window.ANGLE_instanced_arrays, window.AbortController, window.AbortSignal, window.AnalyserNode, window.Animation, window.AnimationEvent, window.AnimationPlaybackEvent, window.ApplicationCache, window.Attr, window.AudioBuffer, window.AudioBufferSourceNode, window.AudioContext, window.AudioDestinationNode, window.AudioListener, window.AudioNode, window.AudioParam, window.AudioProcessingEvent, window.AudioTrack, window.AudioTrackList, window.BarProp, window.BeforeUnloadEvent, window.BhxBrowser, window.BiquadFilterNode, window.Blob, window.BroadcastChannel, window.ByteLengthQueuingStrategy, window.CDATASection, window.CSS, window.CSSConditionRule, window.CSSFontFaceRule, window.CSSGroupingRule, window.CSSImportRule, window.CSSKeyframeRule, window.CSSKeyframesRule, window.CSSMediaRule, window.CSSNamespaceRule, window.CSSPageRule, window.CSSRule, window.CSSRuleList, window.CSSStyleDeclaration, window.CSSStyleRule, window.CSSStyleSheet, window.CSSSupportsRule, window.Cache, window.CacheStorage, window.CanvasGradient, window.CanvasPattern, window.CanvasRenderingContext2D, window.ChannelMergerNode, window.ChannelSplitterNode, window.CharacterData, window.ClientRect, window.ClientRectList, window.ClipboardEvent, window.CloseEvent, window.Comment, window.CompositionEvent, window.Console, window.ContentScriptGlobalScope, window.ConvolverNode, window.Coordinates, window.CountQueuingStrategy, window.Crypto, window.CryptoKey, window.CryptoKeyPair, window.CustomEvent, window.DOMError, window.DOMException, window.DOMImplementation, window.DOMParser, window.DOMRect, window.DOMRectReadOnly, window.DOMSettableTokenList, window.DOMStringList, window.DOMStringMap, window.DOMTokenList, window.DataCue, window.DataTransfer, window.DataTransferItem, window.DataTransferItemList, window.DeferredPermissionRequest, window.DelayNode, window.DeviceAcceleration, window.DeviceLightEvent, window.DeviceMotionEvent, window.DeviceOrientationEvent, window.DeviceRotationRate, window.Document, window.DocumentFragment, window.DocumentType, window.DragEvent, window.DynamicsCompressorNode, window.EXT_texture_filter_anisotropic, window.Element, window.ErrorEvent, window.Event, window.EventSource, window.EventTarget, window.ExtensionScriptApis, window.External, window.File, window.FileList, window.FileReader, window.FocusEvent, window.FocusNavigationEvent, window.FormData, window.GainNode, window.Gamepad, window.GamepadButton, window.GamepadEvent, window.GamepadHapticActuator, window.GamepadPose, window.Geolocation, window.HTMLAllCollection, window.HTMLAnchorElement, window.HTMLAppletElement, window.HTMLAreaElement, window.HTMLAreasCollection, window.HTMLAudioElement, window.HTMLBRElement, window.HTMLBaseElement, window.HTMLBaseFontElement, window.HTMLBodyElement, window.HTMLButtonElement, window.HTMLCanvasElement, window.HTMLCollection, window.HTMLDListElement, window.HTMLDataElement, window.HTMLDataListElement, window.HTMLDetailsElement, window.HTMLDialogElement, window.HTMLDirectoryElement, window.HTMLDivElement, window.HTMLDocument, window.HTMLElement, window.HTMLEmbedElement, window.HTMLFieldSetElement, window.HTMLFontElement, window.HTMLFormControlsCollection, window.HTMLFormElement, window.HTMLFrameElement, window.HTMLFrameSetElement, window.HTMLHRElement, window.HTMLHeadElement, window.HTMLHeadingElement, window.HTMLHtmlElement, window.HTMLIFrameElement, window.HTMLImageElement, window.HTMLInputElement, window.HTMLLIElement, window.HTMLLabelElement, window.HTMLLegendElement, window.HTMLLinkElement, window.HTMLMainElement, window.HTMLMapElement, window.HTMLMarqueeElement, window.HTMLMediaElement, window.HTMLMenuElement, window.HTMLMetaElement, window.HTMLMeterElement, window.HTMLModElement, window.HTMLOListElement, window.HTMLObjectElement, window.HTMLOptGroupElement, window.HTMLOptionElement, window.HTMLOptionsCollection, window.HTMLOutputElement, window.HTMLParagraphElement, window.HTMLParamElement, window.HTMLPictureElement, window.HTMLPreElement, window.HTMLProgressElement, window.HTMLQuoteElement, window.HTMLScriptElement, window.HTMLSelectElement, window.HTMLSourceElement, window.HTMLSpanElement, window.HTMLStyleElement, window.HTMLSummaryElement, window.HTMLTableCaptionElement, window.HTMLTableCellElement, window.HTMLTableColElement, window.HTMLTableDataCellElement, window.HTMLTableElement, window.HTMLTableHeaderCellElement, window.HTMLTableRowElement, window.HTMLTableSectionElement, window.HTMLTemplateElement, window.HTMLTextAreaElement, window.HTMLTimeElement, window.HTMLTitleElement, window.HTMLTrackElement, window.HTMLUListElement, window.HTMLUnknownElement, window.HTMLVideoElement, window.HTMLegendElement, window.HashChangeEvent, window.Headers, window.History, window.IDBCursor, window.IDBCursorWithValue, window.IDBDatabase, window.IDBFactory, window.IDBIndex, window.IDBKeyRange, window.IDBObjectStore, window.IDBOpenDBRequest, window.IDBRequest, window.IDBTransaction, window.IDBVersionChangeEvent, window.IIRFilterNode, window.ImageData, window.IntersectionObserver, window.IntersectionObserverEntry, window.KeyboardEvent, window.ListeningStateChangedEvent, window.Location, window.MSAssertion, window.MSBlobBuilder, window.MSCredentials, window.MSDCCEvent, window.MSDSHEvent, window.MSFIDOCredentialAssertion, window.MSFIDOSignature, window.MSFIDOSignatureAssertion, window.MSGesture, window.MSGestureEvent, window.MSGraphicsTrust, window.MSInputMethodContext, window.MSMediaKeyError, window.MSMediaKeyMessageEvent, window.MSMediaKeyNeededEvent, window.MSMediaKeySession, window.MSMediaKeys, window.MSPointerEvent, window.MSStream, window.MSStreamReader, window.MediaDeviceInfo, window.MediaDevices, window.MediaElementAudioSourceNode, window.MediaEncryptedEvent, window.MediaError, window.MediaKeyMessageEvent, window.MediaKeySession, window.MediaKeyStatusMap, window.MediaKeySystemAccess, window.MediaKeys, window.MediaList, window.MediaQueryList, window.MediaSource, window.MediaStream, window.MediaStreamAudioSourceNode, window.MediaStreamError, window.MediaStreamErrorEvent, window.MediaStreamEvent, window.MediaStreamTrack, window.MediaStreamTrackEvent, window.MessageChannel, window.MessageEvent, window.MessagePort, window.MimeType, window.MimeTypeArray, window.MouseEvent, window.MutationEvent, window.MutationObserver, window.MutationRecord, window.NamedNodeMap, window.Navigator, window.Node, window.NodeFilter, window.NodeIterator, window.NodeList, window.Notification, window.OES_element_index_uint, window.OES_standard_derivatives, window.OES_texture_float, window.OES_texture_float_linear, window.OES_texture_half_float, window.OES_texture_half_float_linear, window.OfflineAudioCompletionEvent, window.OfflineAudioContext, window.OscillatorNode, window.OverflowEvent, window.PageTransitionEvent, window.PannerNode, window.Path2D, window.PaymentAddress, window.PaymentRequest, window.PaymentRequestUpdateEvent, window.PaymentResponse, window.PerfWidgetExternal, window.Performance, window.PerformanceEntry, window.PerformanceMark, window.PerformanceMeasure, window.PerformanceNavigation, window.PerformanceNavigationTiming, window.PerformanceResourceTiming, window.PerformanceTiming, window.PeriodicWave, window.PermissionRequest, window.PermissionRequestedEvent, window.Plugin, window.PluginArray, window.PointerEvent, window.PopStateEvent, window.Position, window.PositionError, window.ProcessingInstruction, window.ProgressEvent, window.PushManager, window.PushSubscription, window.PushSubscriptionOptions, window.RTCDTMFToneChangeEvent, window.RTCDtlsTransport, window.RTCDtlsTransportStateChangedEvent, window.RTCDtmfSender, window.RTCIceCandidate, window.RTCIceCandidatePairChangedEvent, window.RTCIceGatherer, window.RTCIceGathererEvent, window.RTCIceTransport, window.RTCIceTransportStateChangedEvent, window.RTCPeerConnection, window.RTCPeerConnectionIceEvent, window.RTCRtpReceiver, window.RTCRtpSender, window.RTCSessionDescription, window.RTCSrtpSdesTransport, window.RTCSsrcConflictEvent, window.RTCStatsProvider, window.RandomSource, window.Range, window.ReadableStream, window.ReadableStreamReader, window.Request, window.Response, window.SVGAElement, window.SVGAngle, window.SVGAnimatedAngle, window.SVGAnimatedBoolean, window.SVGAnimatedEnumeration, window.SVGAnimatedInteger, window.SVGAnimatedLength, window.SVGAnimatedLengthList, window.SVGAnimatedNumber, window.SVGAnimatedNumberList, window.SVGAnimatedPreserveAspectRatio, window.SVGAnimatedRect, window.SVGAnimatedString, window.SVGAnimatedTransformList, window.SVGCircleElement, window.SVGClipPathElement, window.SVGComponentTransferFunctionElement, window.SVGDefsElement, window.SVGDescElement, window.SVGElement, window.SVGElementInstance, window.SVGElementInstanceList, window.SVGEllipseElement, window.SVGFEBlendElement, window.SVGFEColorMatrixElement, window.SVGFEComponentTransferElement, window.SVGFECompositeElement, window.SVGFEConvolveMatrixElement, window.SVGFEDiffuseLightingElement, window.SVGFEDisplacementMapElement, window.SVGFEDistantLightElement, window.SVGFEFloodElement, window.SVGFEFuncAElement, window.SVGFEFuncBElement, window.SVGFEFuncGElement, window.SVGFEFuncRElement, window.SVGFEGaussianBlurElement, window.SVGFEImageElement, window.SVGFEMergeElement, window.SVGFEMergeNodeElement, window.SVGFEMorphologyElement, window.SVGFEOffsetElement, window.SVGFEPointLightElement, window.SVGFESpecularLightingElement, window.SVGFESpotLightElement, window.SVGFETileElement, window.SVGFETurbulenceElement, window.SVGFilterElement, window.SVGForeignObjectElement, window.SVGGElement, window.SVGGradientElement, window.SVGGraphicsElement, window.SVGImageElement, window.SVGLength, window.SVGLengthList, window.SVGLineElement, window.SVGLinearGradientElement, window.SVGMarkerElement, window.SVGMaskElement, window.SVGMatrix, window.SVGMetadataElement, window.SVGNumber, window.SVGNumberList, window.SVGPathElement, window.SVGPathSeg, window.SVGPathSegArcAbs, window.SVGPathSegArcRel, window.SVGPathSegClosePath, window.SVGPathSegCurvetoCubicAbs, window.SVGPathSegCurvetoCubicRel, window.SVGPathSegCurvetoCubicSmoothAbs, window.SVGPathSegCurvetoCubicSmoothRel, window.SVGPathSegCurvetoQuadraticAbs, window.SVGPathSegCurvetoQuadraticRel, window.SVGPathSegCurvetoQuadraticSmoothAbs, window.SVGPathSegCurvetoQuadraticSmoothRel, window.SVGPathSegLinetoAbs, window.SVGPathSegLinetoHorizontalAbs, window.SVGPathSegLinetoHorizontalRel, window.SVGPathSegLinetoRel, window.SVGPathSegLinetoVerticalAbs, window.SVGPathSegLinetoVerticalRel, window.SVGPathSegList, window.SVGPathSegMovetoAbs, window.SVGPathSegMovetoRel, window.SVGPatternElement, window.SVGPoint, window.SVGPointList, window.SVGPolygonElement, window.SVGPolylineElement, window.SVGPreserveAspectRatio, window.SVGRadialGradientElement, window.SVGRect, window.SVGRectElement, window.SVGSVGElement, window.SVGScriptElement, window.SVGStopElement, window.SVGStringList, window.SVGStylable, window.SVGStyleElement, window.SVGSwitchElement, window.SVGSymbolElement, window.SVGTSpanElement, window.SVGTextContentElement, window.SVGTextElement, window.SVGTextPathElement, window.SVGTextPositioningElement, window.SVGTitleElement, window.SVGTransform, window.SVGTransformList, window.SVGUnitTypes, window.SVGUseElement, window.SVGViewElement, window.SVGZoomAndPan, window.SVGZoomEvent, window.ScopedCredential, window.ScopedCredentialInfo, window.Screen, window.ScriptProcessorNode, window.SecurityPolicyViolationEvent, window.Selection, window.ServiceUIFrameContext, window.ServiceWorker, window.ServiceWorkerContainer, window.ServiceWorkerMessageEvent, window.ServiceWorkerRegistration, window.SourceBuffer, window.SourceBufferList, window.SpeechSynthesis, window.SpeechSynthesisEvent, window.SpeechSynthesisUtterance, window.SpeechSynthesisVoice, window.StereoPannerNode, window.Storage, window.StorageEvent, window.StyleMedia, window.StyleSheet, window.StyleSheetList, window.SubtleCrypto, window.SyncManager, window.Text, window.TextDecoder, window.TextEncoder, window.TextEvent, window.TextMetrics, window.TextTrack, window.TextTrackCue, window.TextTrackCueList, window.TextTrackList, window.TimeRanges, window.Touch, window.TouchEvent, window.TouchList, window.TrackEvent, window.TransitionEvent, window.TreeWalker, window.UIEvent, window.URL, window.URLSearchParams, window.VRDisplay, window.VRDisplayCapabilities, window.VRDisplayEvent, window.VREyeParameters, window.VRFieldOfView, window.VRFrameData, window.VRPose, window.ValidityState, window.VideoPlaybackQuality, window.VideoTrack, window.VideoTrackList, window.WEBGL_compressed_texture_s3tc, window.WEBGL_debug_renderer_info, window.WEBGL_depth_texture, window.WaveShaperNode, window.WebAuthentication, window.WebAuthnAssertion, window.WebGLActiveInfo, window.WebGLBuffer, window.WebGLContextEvent, window.WebGLFramebuffer, window.WebGLObject, window.WebGLProgram, window.WebGLRenderbuffer, window.WebGLRenderingContext, window.WebGLShader, window.WebGLShaderPrecisionFormat, window.WebGLTexture, window.WebGLUniformLocation, window.WebKitCSSMatrix, window.WebKitDirectoryEntry, window.WebKitDirectoryReader, window.WebKitEntry, window.WebKitFileEntry, window.WebKitFileSystem, window.WebKitPoint, window.WebSocket, window.WheelEvent, window.Window, window.Worker, window.WritableStream, window.WritableStreamDefaultController, window.WritableStreamDefaultWriter, window.XMLDocument, window.XMLHttpRequest, window.XMLHttpRequestUpload, window.XMLSerializer, window.XPathEvaluator, window.XPathExpression, window.XPathNSResolver, window.XPathResult, window.XSLTProcessor, window.webkitRTCPeerConnection, window.Audio, window.Image, window.Option, window.applicationCache, window.caches, window.clientInformation, window.closed, window.crypto, window.customElements, window.defaultStatus, window.devicePixelRatio, window.doNotTrack, window.document), p = (window.event, window.external, window.frameElement, window.frames, window.history, window.innerHeight, window.innerWidth, window.isSecureContext, window.length, window.location, window.locationbar, window.menubar, window.msContentScript, window.msCredentials, window.name, window.navigator, window.offscreenBuffering, window.onabort, window.onafterprint, window.onbeforeprint, window.onbeforeunload, window.onblur, window.oncanplay, window.oncanplaythrough, window.onchange, window.onclick, window.oncompassneedscalibration, window.oncontextmenu, window.ondblclick, window.ondevicelight, window.ondevicemotion, window.ondeviceorientation, window.ondrag, window.ondragend, window.ondragenter, window.ondragleave, window.ondragover, window.ondragstart, window.ondrop, window.ondurationchange, window.onemptied, window.onended, window.onerror, window.onfocus, window.onhashchange, window.oninput, window.oninvalid, window.onkeydown, window.onkeypress, window.onkeyup, window.onload, window.onloadeddata, window.onloadedmetadata, window.onloadstart, window.onmessage, window.onmousedown, window.onmouseenter, window.onmouseleave, window.onmousemove, window.onmouseout, window.onmouseover, window.onmouseup, window.onmousewheel, window.onmsgesturechange, window.onmsgesturedoubletap, window.onmsgestureend, window.onmsgesturehold, window.onmsgesturestart, window.onmsgesturetap, window.onmsinertiastart, window.onmspointercancel, window.onmspointerdown, window.onmspointerenter, window.onmspointerleave, window.onmspointermove, window.onmspointerout, window.onmspointerover, window.onmspointerup, window.onoffline, window.ononline, window.onorientationchange, window.onpagehide, window.onpageshow, window.onpause, window.onplay, window.onplaying, window.onpopstate, window.onprogress, window.onratechange, window.onreadystatechange, window.onreset, window.onresize, window.onscroll, window.onseeked, window.onseeking, window.onselect, window.onstalled, window.onstorage, window.onsubmit, window.onsuspend, window.ontimeupdate, window.ontouchcancel, window.ontouchend, window.ontouchmove, window.ontouchstart, window.onunload, window.onvolumechange, window.onvrdisplayactivate, window.onvrdisplayblur, window.onvrdisplayconnect, window.onvrdisplaydeactivate, window.onvrdisplaydisconnect, window.onvrdisplayfocus, window.onvrdisplaypointerrestricted, window.onvrdisplaypointerunrestricted, window.onvrdisplaypresentchange, window.onwaiting, window.opener, window.orientation, window.outerHeight, window.outerWidth, window.pageXOffset, window.pageYOffset, window.parent, window.performance, window.personalbar, window.screen, window.screenLeft, window.screenTop, window.screenX, window.screenY, window.scrollX, window.scrollY, window.scrollbars, window.self, window.speechSynthesis, window.status, window.statusbar, window.styleMedia, window.toolbar, window.top, window.window, window.alert, window.blur, window.cancelAnimationFrame, window.captureEvents, window.close, window.confirm, window.createImageBitmap, window.departFocus, window.focus, window.getComputedStyle, window.getMatchedCSSRules, window.getSelection, window.matchMedia, window.moveBy, window.moveTo, window.msWriteProfilerMark, window.open, window.postMessage, window.print, window.prompt, window.releaseEvents, window.requestAnimationFrame, window.resizeBy, window.resizeTo, window.scroll, window.scrollBy, window.scrollTo, window.stop, window.webkitCancelAnimationFrame, window.webkitConvertPointFromNodeToPage, window.webkitConvertPointFromPageToNode, window.webkitRequestAnimationFrame, window.toString, window.dispatchEvent, window.clearInterval, window.clearTimeout, window.setInterval, window.setTimeout), f = (window.clearImmediate, window.setImmediate, window.sessionStorage, window.localStorage, window.console, window.onpointercancel, window.onpointerdown, window.onpointerenter, window.onpointerleave, window.onpointermove, window.onpointerout, window.onpointerover, window.onpointerup, window.onwheel, window.indexedDB, window.atob, window.btoa, window.fetch, window.addEventListener, window.removeEventListener, function(n) { var o = m.none(),
                e = [],
                w = function(n) { i() ? d(n) : e.push(n) },
                i = function() { return o.isSome() },
                t = function(n) {! function(n, e) { for (var o = 0, w = n.length; o < w; o++) e(n[o], o, n) }(n, d) },
                d = function(e) { o.each(function(n) { p(function() { e(n) }, 0) }) }; return n(function(n) { o = m.some(n), t(e), e = [] }), { get: w, map: function(o) { return f(function(e) { w(function(n) { e(o(n)) }) }) }, isReady: i } }), M = { nu: f, pure: function(e) { return f(function(n) { n(e) }) } }, T = function(e) { var n = function(n) { var w;
                    e((w = n, function() { for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e]; var o = this;
                        p(function() { w.apply(o, n) }, 0) })) },
                o = function() { return M.nu(n) }; return { map: function(w) { return T(function(o) { n(function(n) { var e = w(n);
                            o(e) }) }) }, bind: function(o) { return T(function(e) { n(function(n) { o(n).get(e) }) }) }, anonBind: function(o) { return T(function(e) { n(function(n) { o.get(e) }) }) }, toLazy: o, toCached: function() { var e = null; return T(function(n) { null === e && (e = o()), e.get(n) }) }, get: n } }, g = { nu: T, pure: function(e) { return T(function(n) { n(e) }) } }, v = function() { return (new Date).getTime() }, L = function(n) { return m.from(n.api_key) }, G = function(n) { return n.chiffer_snowplow_service_url }, h = [], C = 0; C < 256; ++C) h[C] = (C + 256).toString(16).substr(1); var V = function() { var n, e, o, w = function() { for (var n = new Array(16), e = 0, o = 0; o < 16; o++) 0 == (3 & o) && (e = 4294967296 * Math.random()), n[o] = e >>> ((3 & o) << 3) & 255; return n }(); return w[6] = 15 & w[6] | 64, w[8] = 63 & w[8] | 128, e = 0, (o = h)[(n = w)[e++]] + o[n[e++]] + o[n[e++]] + o[n[e++]] + "-" + o[n[e++]] + o[n[e++]] + "-" + o[n[e++]] + o[n[e++]] + "-" + o[n[e++]] + o[n[e++]] + "-" + o[n[e++]] + o[n[e++]] + o[n[e++]] + o[n[e++]] + o[n[e++]] + o[n[e++]] },
        y = function(n, e) { var t, d, o, w = (t = n, d = e, { send: function(n, e) { var o, i, w = (o = "?aid=${aid}&tna=${tna}&p=${p}&dtm=${dtm}&stm=${stm}&tz=${tz}&e=${e}&se_ca=${se_ca}&eid=${eid}&fp=${fp}&tv=${tv}", i = { aid: d, tna: "tinymce_cloud", p: "web", dtm: e, stm: v(), tz: "undefined" != typeof Intl ? encodeURIComponent(Intl.DateTimeFormat().resolvedOptions().timeZone) : "N%2FA", e: "se", eid: V(), se_ca: n, fp: "none", tv: "js-2.6.1" }, o.replace(/\$\{([^{}]*)\}/g, function(n, e) { var o, w = i[e]; return "string" == (o = typeof w) || "number" === o ? w.toString() : n })); return g.nu(function(n) { var e = E.createElement("img");
                        e.src = G(t) + w, e.onload = function() { n(!0) }, e.onerror = function() { n(!1) } }) } }); return o = w, { sendStat: function(e) { return function() { var n = v();
                        o.send(e, n).get(function() {}) } } } }; return function() { var o = tinymce.defaultSettings,
            n = L(o).fold(function() { return function() {} }, function(n) { var e = y(o, n); return e.sendStat("script_load")(),
                    function(n) { n.once("init", e.sendStat("init")), n.once("focus", e.sendStat("focus")) } });
        tinymce.PluginManager.add("chiffer", n) } }()();

/* Ephox rain plugin
 *
 * Copyright 2010-2018 Ephox Corporation.  All rights reserved.
 *
 * Version: 1.0.0-44
 */
! function() {! function() { "use strict"; var a = function() {},
            b = function(a) { return function() { return a() } },
            c = function(a, b) { return function() { return a(b.apply(null, arguments)) } },
            d = function(a) { return function() { return a } },
            e = function(a) { return a },
            f = function(a, b) { return a === b },
            g = function(a) { for (var b = new Array(arguments.length - 1), c = 1; c < arguments.length; c++) b[c - 1] = arguments[c]; return function() { for (var c = new Array(arguments.length), d = 0; d < c.length; d++) c[d] = arguments[d]; var e = b.concat(c); return a.apply(null, e) } },
            h = function(a) { return function() { return !a.apply(null, arguments) } },
            i = function(a) { return function() { throw new Error(a) } },
            j = function(a) { return a() },
            k = function(a) { a() },
            l = d(!1),
            m = d(!0),
            n = { noop: a, noarg: b, compose: c, constant: d, identity: e, tripleEquals: f, curry: g, not: h, die: i, apply: j, call: k, never: l, always: m },
            o = n.never,
            p = n.always,
            q = function() { return r },
            r = function() { var a = function(a) { return a.isNone() },
                    b = function(a) { return a() },
                    c = function(a) { return a },
                    d = function() {},
                    e = { fold: function(a, b) { return a() }, is: o, isSome: o, isNone: p, getOr: c, getOrThunk: b, getOrDie: function(a) { throw new Error(a || "error: getOrDie called on none.") }, or: c, orThunk: b, map: q, ap: q, each: d, bind: q, flatten: q, exists: o, forall: p, filter: q, equals: a, equals_: a, toArray: function() { return [] }, toString: n.constant("none()") }; return Object.freeze && Object.freeze(e), e }(),
            s = function(a) { var b = function() { return a },
                    c = function() { return f },
                    d = function(b) { return s(b(a)) },
                    e = function(b) { return b(a) },
                    f = { fold: function(b, c) { return c(a) }, is: function(b) { return a === b }, isSome: p, isNone: o, getOr: b, getOrThunk: b, getOrDie: b, or: c, orThunk: c, map: d, ap: function(b) { return b.fold(q, function(b) { return s(b(a)) }) }, each: function(b) { b(a) }, bind: e, flatten: b, exists: e, forall: e, filter: function(b) { return b(a) ? f : r }, equals: function(b) { return b.is(a) }, equals_: function(b, c) { return b.fold(o, function(b) { return c(a, b) }) }, toArray: function() { return [a] }, toString: function() { return "some(" + a + ")" } }; return f },
            t = function(a) { return null === a || void 0 === a ? r : s(a) },
            u = { some: s, none: q, from: t },
            v = function() { var a = Array.prototype.indexOf,
                    b = function(b, c) { return a.call(b, c) },
                    c = function(a, b) { return L(a, b) }; return void 0 === a ? c : b }(),
            w = function(a, b) { var c = v(a, b); return -1 === c ? u.none() : u.some(c) },
            x = function(a, b) { return v(a, b) > -1 },
            y = function(a, b) { return K(a, b).isSome() },
            z = function(a, b) { for (var c = [], d = 0; d < a; d++) c.push(b(d)); return c },
            A = function(a, b) { for (var c = [], d = 0; d < a.length; d += b) { var e = a.slice(d, d + b);
                    c.push(e) } return c },
            B = function(a, b) { for (var c = a.length, d = new Array(c), e = 0; e < c; e++) { var f = a[e];
                    d[e] = b(f, e, a) } return d },
            C = function(a, b) { for (var c = 0, d = a.length; c < d; c++) { b(a[c], c, a) } },
            D = function(a, b) { for (var c = a.length - 1; c >= 0; c--) { b(a[c], c, a) } },
            E = function(a, b) { for (var c = [], d = [], e = 0, f = a.length; e < f; e++) { var g = a[e];
                    (b(g, e, a) ? c : d).push(g) } return { pass: c, fail: d } },
            F = function(a, b) { for (var c = [], d = 0, e = a.length; d < e; d++) { var f = a[d];
                    b(f, d, a) && c.push(f) } return c },
            G = function(a, b) { if (0 === a.length) return []; for (var c = b(a[0]), d = [], e = [], f = 0, g = a.length; f < g; f++) { var h = a[f],
                        i = b(h);
                    i !== c && (d.push(e), e = []), c = i, e.push(h) } return 0 !== e.length && d.push(e), d },
            H = function(a, b, c) { return D(a, function(a) { c = b(c, a) }), c },
            I = function(a, b, c) { return C(a, function(a) { c = b(c, a) }), c },
            J = function(a, b) { for (var c = 0, d = a.length; c < d; c++) { var e = a[c]; if (b(e, c, a)) return u.some(e) } return u.none() },
            K = function(a, b) { for (var c = 0, d = a.length; c < d; c++) { if (b(a[c], c, a)) return u.some(c) } return u.none() },
            L = function(a, b) { for (var c = 0, d = a.length; c < d; ++c)
                    if (a[c] === b) return c;
                return -1 },
            M = Array.prototype.push,
            N = function(a) { for (var b = [], c = 0, d = a.length; c < d; ++c) { if (!Array.prototype.isPrototypeOf(a[c])) throw new Error("Arr.flatten item " + c + " was not an array, input: " + a);
                    M.apply(b, a[c]) } return b },
            O = function(a, b) { var c = B(a, b); return N(c) },
            P = function(a, b) { for (var c = 0, d = a.length; c < d; ++c) { if (!0 !== b(a[c], c, a)) return !1 } return !0 },
            Q = function(a, b) { return a.length === b.length && P(a, function(a, c) { return a === b[c] }) },
            R = Array.prototype.slice,
            S = function(a) { var b = R.call(a, 0); return b.reverse(), b },
            T = function(a, b) { return F(a, function(a) { return !x(b, a) }) },
            U = function(a, b) { for (var c = {}, d = 0, e = a.length; d < e; d++) { var f = a[d];
                    c[String(f)] = b(f, d) } return c },
            V = function(a) { return [a] },
            W = function(a, b) { var c = R.call(a, 0); return c.sort(b), c },
            X = function(a) { return 0 === a.length ? u.none() : u.some(a[0]) },
            Y = function(a) { return 0 === a.length ? u.none() : u.some(a[a.length - 1]) },
            Z = { map: B, each: C, eachr: D, partition: E, filter: F, groupBy: G, indexOf: w, foldr: H, foldl: I, find: J, findIndex: K, flatten: N, bind: O, forall: P, exists: y, contains: x, equal: Q, reverse: S, chunk: A, difference: T, mapToObject: U, pure: V, sort: W, range: z, head: X, last: Y },
            $ = function(a) { return u.from(a.api_key) },
            _ = function(a) { return u.from(a.rain_rainmaker_service_url).filter(function(a) { return a.length > 0 }) },
            aa = { getApiKey: $, getServiceUrl: _ },
            ba = tinymce.util,
            ca = ba.JSON,
            da = ba.URI,
            ea = ba.XHR,
            fa = function(a, b) { var c = -1 === a.indexOf("?") ? "?" : "&",
                    d = c + "apiKey=" + encodeURIComponent(b); return "string" == typeof b ? a + d : a }; return function() { var a = function(a, b) { aa.getApiKey(a.settings).bind(function(b) { return aa.getServiceUrl(a.settings).map(function(a) { return fa(a + "/1/messages", b) }) }).each(function(c) { var d = { url: new da(b).toAbsolute(c), type: "get", content_type: "application/json", success: function(b) { var c = ca.parse(b);
                            c && Z.each(c.messages, function(b) { a.notificationManager.open({ type: "info", text: b }) }) }, error: function() {} };
                    ea.send(d) }) }; return tinymce.PluginManager.add("rain", a),
                function() {} } }()() }();