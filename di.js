/**
 * Created by happyhou on 10/01/2018.
 */
webpackJsonp([0], {
    0: function(t, e, n) {
        "use strict";
        function a(t, e) {
            var n = 1e3 / (e || 60)
                , a = 1e3 * t;
            return Math.ceil(a / n)
        }
        function i(t, e) {
            var n = {
                attr: e
            };
            return n.node = t,
                n
        }
        function r(t, e) {
            return t && e && t.parentNode ? t.nodeName.toLowerCase() === e.toLowerCase() ? t : r(t.parentNode, e) : null
        }
        function o(t, e, n) {
            if (!t || !e || !t.parentNode)
                return null;
            if (n) {
                if (t.className.split(" ").includes(e))
                    return t
            } else if (t.className.indexOf(e) > -1)
                return t;
            return o(t.parentNode, e, n)
        }
        function c(t, e, n) {
            return t && e && t.parentNode ? (n ? null !== t.getAttribute(e) : t.getAttribute(e)) ? i(t, t.getAttribute(e)) : c(t.parentNode, e) : null
        }
        function s(t) {
            return [].slice.apply(t)
        }
        function u(t) {
            if (void 0 != t) {
                var e = "string" == typeof t ? t.toLowerCase().replace(/\s/g, "") : t.toString().toLowerCase().replace(/\s/g, "")
                    , n = "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
                    , a = void 0
                    , i = void 0
                    , r = void 0
                    , o = void 0
                    , c = void 0
                    , s = void 0;
                return /e[+-]/.test(e) ? (i = /\+/.test(e),
                    r = e.split("e"),
                    a = /\-/.test(r[0].toString()) ? "-0." : "0.",
                    r[0] = r[0].replace("-", ""),
                    o = r[0].split(".")[1] ? r[0].split(".")[1].length : 0,
                    c = r[1],
                    s = c.split(i ? "+" : "-")[1],
                    r = r[0].replace(".", ""),
                    i ? r + n.substring(0, s - o) : a + n.substring(0, s - 1) + r) : e + ""
            }
        }
        function l(t, e, n, a) {
            var i = void 0;
            if (null != t) {
                if (!~Object.prototype.toString.call(t).indexOf("number") && t != 1 * t)
                    return t;
                var r = u(t)
                    , o = r.indexOf(".")
                    , c = 0
                    , s = 0;
                if (isNaN(parseFloat(r)))
                    s = 0;
                else if (isNaN(r))
                    s = parseFloat(r);
                else if (void 0 !== e)
                    if (e = ("" + e).split(":"),
                            i = e[1] || "floor",
                            e = e[0],
                            e = 1 * e || 0,
                        o >= 0) {
                        if ((c = r.substring(o + 1, r.length).length) < e) {
                            for (var l = 0; l < e - c; l++)
                                r += "0";
                            s = 0 === o ? "0" + r : r
                        } else
                            s = D[i] ? D[i](e, r, o) : D.floor(e, r, o);
                        e <= 0 && (s = parseInt(t, 10))
                    } else if (e > 0) {
                        r += ".";
                        for (var d = 0; d < e; d++)
                            r += "0";
                        s = r
                    } else
                        e <= 0 && (s = r);
                else
                    s = Number(r);
                return s = n ? function(t, e, n) {
                    for (var a = t.split("."), i = "", r = 0, o = a[0].length; o--; )
                        i = r % e || !r ? a[0].charAt(o) + i : a[0].charAt(o) + n + i,
                            r++;
                    return a[1] ? i + "." + a[1] : i
                }(s, n, a || ",") : s
            }
        }
        function d(t) {
            return t > 9 ? t : "0" + t
        }
        function p(t, e) {
            var n = t < Math.pow(10, 11) ? new Date(1e3 * t) : new Date(t)
                , a = n.getFullYear()
                , i = d(n.getMonth() + 1)
                , r = d(n.getDate())
                , o = d(n.getHours())
                , c = d(n.getMinutes())
                , s = d(n.getSeconds());
            return e ? e.toLowerCase().replace("y", a).replace("m", i).replace("d", r).replace("h", o).replace("i", c).replace("s", s) : a + "-" + i + "-" + r + " " + o + ":" + c + ":" + s
        }
        function f(t, e) {
            var n = new Date(1e3 * t)
                , a = e || "YYYY-MM-DD";
            return Date.prototype.Format = function(t) {
                var e = {
                    "M+": this.getMonth() + 1,
                    "D+": this.getDate(),
                    "h+": this.getHours(),
                    "m+": this.getMinutes(),
                    "s+": this.getSeconds(),
                    "q+": Math.floor((this.getMonth() + 3) / 3),
                    "S+": this.getMilliseconds()
                };
                /(Y+)/.test(t) && (t = t.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
                for (var n in e)
                    new RegExp("(" + n + ")").test(t) && (t = t.replace(RegExp.$1, 1 === RegExp.$1.length ? e[n] : ("00" + e[n]).substr(("" + e[n]).length)));
                return t
            }
                ,
                n.Format(a)
        }
        function m(t) {
            var e = void 0;
            if (!window.getSearchParameters) {
                e = location.search.replace("?", "").split("&"),
                    window.getSearchParameters = {};
                for (var n, a = 0, i = e.length; a < i; a++)
                    n = e[a].split("="),
                        getSearchParameters[n[0]] = decodeURIComponent(n[1])
            }
            return getSearchParameters[t]
        }
        function g(t) {
            return t.replace(/^\s+/, "").replace(/\s+$/, "")
        }
        function _(t, e) {
            var n = /\W/.test(t) ? new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);},__data = obj;with(obj){p.push('" + t.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : H[t] = H[t] || _(document.getElementById(t).innerHTML);
            return e ? n(e) : n
        }
        function b(t) {
            if ("object" !== (void 0 === t ? "undefined" : M()(t)))
                return t;
            if (null === t)
                return t;
            var e = new Object;
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = b(t[n]));
            return e
        }
        function y(t) {
            t = t || {};
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                if (n)
                    for (var a in n)
                        n.hasOwnProperty(a) && ("object" === M()(n[a]) ? t[a] = y(t[a], n[a]) : t[a] = n[a])
            }
            return t
        }
        function h(t, e) {
            if ("string" == typeof t) {
                G[t] = G[t] || document.querySelectorAll(t) || [];
                for (var n = 0; n < G[t].length; n++)
                    G[t][n] && (G[t][n].innerHTML = e)
            } else
                t.innerHTML = e
        }
        function v(t, e, n) {
            var a = document.getElementById(t)
                , i = void 0;
            if (!a)
                return void console.error("Unfound element id:", t);
            j[t] && !n || (i = a.querySelector("script"),
                j[t] = n || i.innerHTML),
                a.innerHTML = _(j[t], e || {})
        }
        function k(t) {
            for (var e, n, a, i = {}, r = {}, o = [], c = t.length; c--; )
                e = t[c],
                    n = t[c].getAttribute("name"),
                    a = e.type,
                n && ("text" === a || "password" === a || "hidden" === a || a.indexOf("select") > -1 || "textarea" === a ? (i[n] = e.value,
                    r[n] = e) : "checkbox" === a ? (i[n] = i[n] || [],
                    r[n] = r[n] || [],
                    r[n].push(e),
                !0 === e.checked && i[n].push(e.value)) : "radio" === a && (r[n] = e,
                !0 === e.checked && (i[n] = e.value)),
                    o.unshift({
                        name: n,
                        value: i[n],
                        type: a
                    }));
            return [i, r, o]
        }
        function w(t) {
            var e = new RegExp("(^|&)" + t + "=([^&]*)(&|$)")
                , n = window.location.search.substr(1).match(e);
            return null != n ? decodeURI(n[2]) : null
        }
        function T() {
            var t = [].slice.apply(arguments);
            return t.length ? t.shift().replace(/\{([^\}]+)\}/gi, function(e) {
                return e = e.replace(/[\{\}]/g, "").split("||"),
                    void 0 !== t[e[0].replace(/\s/g, "")] ? t[e[0].replace(/\s/g, "")] : (e[1] ? e[1] : e[0]).replace(/(^\s+)|(\s+$)/g, "")
            }) : ""
        }
        function E() {
            function t(t) {
                n = t || {}
            }
            function e(t) {
                return n[t] || t
            }
            var n = {};
            return {
                getLang: e,
                _keys: t,
                lib: function() {
                    return n
                }
            }
        }
        function S(t) {
            for (var e, n = t.replace(/<block[\s]*name=["'\w\d-_]+>([\S\s\t]*?)<\/block>/g, ""), a = t.match(/<block[\s]*name=["'\w\d-_]+>([\S\s\t]*?)<\/block>/g) || [], i = {}, r = a.length; r--; )
                (e = /<block[\s]*name=(["'\w\d-_]+)>([\S\s\t]*?)<\/block>/.exec(a[r])) && (i[e[1].replace(/['"]/g, "")] = e[2]);
            return {
                html: n,
                block: i,
                blockLength: a.length
            }
        }
        function L() {
            var t = [].slice.apply(arguments);
            if (!(t.length < 2))
                return t.shift().apply(t.shift(), t)
        }
        function x(t) {
            function e() {
                t(),
                    n(e)
            }
            var n = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                        window.setTimeout(t, 1e3 / 60)
                    }
                ;
            n(e)
        }
        function A(t, e) {
            function n(t) {
                return t.replace(/^\w/, function(t) {
                    return t.toUpperCase()
                })
            }
            var a = t.split(e)
                , i = a[0];
            return a.forEach(function(t, e) {
                e && (i += n(t))
            }),
                i
        }
        function O() {
            return (navigator.languages ? navigator.languages[0] : navigator.language || navigator.userLanguage).toLowerCase()
        }
        function C(t) {
            var e = t.getBoundingClientRect()
                , n = document.documentElement.clientTop
                , a = document.documentElement.clientLeft;
            return {
                top: e.top - n + (window.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: e.left - a + (window.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }
        }
        function I(t, e) {
            var n = e || 4;
            return new RegExp("^(([0-9]{1}\\d*)|([0]{1}))(\\.(\\d){0," + n + "})?$").test(t)
        }
        function q(t, e) {
            var n = F;
            return isNaN(+t) ? void 0 === n && (n = "") : ("" === t || I(t, e)) && (n = t),
                F = n,
                void 0 === n ? "" : n
        }
        n.d(e, "D", function() {
            return a
        }),
            n.d(e, "s", function() {
                return s
            }),
            n.d(e, "r", function() {
                return x
            }),
            n.d(e, "g", function() {
                return L
            }),
            n.d(e, "n", function() {
                return S
            }),
            n.d(e, "m", function() {
                return E
            }),
            n.d(e, "b", function() {
                return l
            }),
            n.d(e, "x", function() {
                return f
            }),
            n.d(e, "c", function() {
                return p
            }),
            n.d(e, "a", function() {
                return m
            }),
            n.d(e, "e", function() {
                return N
            }),
            n.d(e, "t", function() {
                return g
            }),
            n.d(e, "d", function() {
                return _
            }),
            n.d(e, "u", function() {
                return b
            }),
            n.d(e, "i", function() {
                return y
            }),
            n.d(e, "y", function() {
                return r
            }),
            n.d(e, "f", function() {
                return c
            }),
            n.d(e, "j", function() {
                return R
            }),
            n.d(e, "C", function() {
                return h
            }),
            n.d(e, "k", function() {
                return v
            }),
            n.d(e, "h", function() {
                return U
            }),
            n.d(e, "v", function() {
                return k
            }),
            n.d(e, "z", function() {
                return w
            }),
            n.d(e, "w", function() {
                return T
            }),
            n.d(e, "p", function() {
                return u
            }),
            n.d(e, "B", function() {
                return A
            }),
            n.d(e, "A", function() {
                return O
            }),
            n.d(e, "l", function() {
                return o
            }),
            n.d(e, "q", function() {
                return C
            }),
            n.d(e, "o", function() {
                return q
            });
        var P = n(10)
            , M = n.n(P)
            , B = n(61)
            , D = (n.n(B),
            function() {
                function t(t, e, n) {
                    return (0 === n ? "0" : "") + e.substring(0, t + 1 + n)
                }
                function e(e, n, a) {
                    var i = t(e, n, a);
                    return 1 * i == 1 * n ? i : (1 * i + 7 / Math.pow(10, 1 * e + 1)).toFixed(e)
                }
                function n(t, e, n) {
                    return (1 * e).toFixed(t)
                }
                return {
                    floor: t,
                    ceil: e,
                    rounding: n
                }
            }())
            , N = {
            add: document.addEventListener ? function(t, e, n) {
                "mousewheel" === e && void 0 !== document.mozFullScreen && (e = "DOMMouseScroll"),
                    t.addEventListener(e, n, !1)
            }
                : function(t, e, n) {
                t.attachEvent("on" + e, n)
            }
            ,
            remove: document.removeEventListener ? function(t, e, n) {
                t.removeEventListener(e, n, !1)
            }
                : function(t, e, n) {
                t.detachEvent("on" + e, n)
            }
            ,
            target: function(t) {
                return t.target ? t.target : window.event.srcElement
            },
            delta: function(t) {
                var e = t || window.event;
                return e.wheelDelta / -120 || e.detail / 3
            },
            stop: function(t) {
                t && t.stopPropagation ? (t.stopPropagation(),
                    t.preventDefault()) : (window.event.cancelBubble = !0,
                    window.event.returnValue = !1)
            },
            mouse: function(t) {
                return {
                    x: t.pageX || t.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft),
                    y: t.pageY || t.clientY + (document.documentElement.scrollTop || document.body.scrollTop)
                }
            },
            trigger: function(t, e, n) {
                var a = document.createEvent("HTMLEvents");
                a.initEvent(e, !0, !1),
                    a.info = n,
                    t.dispatchEvent(a)
            },
            on: function(t, e, n) {
                var a = t[this.myEvent._nEid] || (t[this.myEvent._nEid] = this.myEvent._guid++);
                if (this.myEvent._cache[a] || (this.myEvent._cache[a] = {
                        elem: t,
                        listener: this.myEvent._create(a),
                        events: {}
                    }),
                    e && !this.myEvent._cache[a].events[e] && (this.myEvent._cache[a].events[e] = [],
                        this.add(t, e, this.myEvent._cache[a].listener)),
                        !n)
                    return this.myEvent._cache[a];
                n[this.myEvent._nFid] || (n[this.myEvent._nFid] = this.myEvent._fid++),
                    this.myEvent._cache[a].events[e].push(n)
            },
            off: function(t, e, n) {
                var a = void 0
                    , i = void 0
                    , r = void 0
                    , o = t[this.myEvent._nEid]
                    , c = this.myEvent._cache[o];
                if (c)
                    if (a = c.events,
                            n) {
                        if (!(r = a[e]))
                            return;
                        for (i = 0; i < r.length; i++)
                            r[i][this.myEvent._nFid] === n[this.myEvent._nFid] && r.splice(i--, 1);
                        if (0 === r.length)
                            return this.off(t, e)
                    } else if (e)
                        delete a[e],
                            this.remove(t, e, c.listener);
                    else {
                        for (i in a)
                            this.remove(t, i, c.listener);
                        delete this.myEvent._cache[o]
                    }
            },
            myEvent: {
                _fid: 1,
                _guid: 1,
                _nEid: "{$huobi-eid}" + (new Date).getTime(),
                _nFid: "{$huobi-fid}" + (new Date).getTime(),
                _create: function(t) {
                    return function(e) {
                        e = N.fix(e || window.event);
                        for (var n = 0, a = (e || (e = document.event)).type, i = N.myEvent._cache[t].elem, r = arguments, o = N.myEvent._cache[t].events[a]; n < o.length; n++)
                            null === o[n].apply(i, r) && e.preventDefault()
                    }
                },
                _cache: {}
            },
            fix: function(t) {
                if (document.addEventListener)
                    return t;
                var e = void 0
                    , n = {};
                for (e in t)
                    n[e] = t[e];
                return n
            }
        }
            , H = {}
            , R = function() {
            var t = document.documentElement.classList
                , e = {
                hasClass: function(e, n) {
                    return t ? e.classList.contains(n) : new RegExp("(^|\\s)" + n + "(\\s|$)").test(e.className)
                },
                addClass: function(n, a) {
                    t ? n.classList.add(a) : e.hasClass(n, a) || (n.className = n.className + " " + a)
                },
                removeClass: function(n, a) {
                    t ? n.classList.remove(a) : e.hasClass(n, a) && (n.className = n.className.replace(new RegExp("(^|\\s)*" + a + "(\\s|$)*","g"), ""))
                },
                getPosition: function(t, e) {
                    var n, a, i, r = t, o = 0, c = 0;
                    if (t.nodeName) {
                        for (; r && ("body" == r.nodeName.toLowerCase() && (a = 1),
                            i = r.currentStyle ? r.currentStyle : document.defaultView.getComputedStyle(r),
                            o += r.offsetLeft + (parseInt(i.borderLeftWidth) ? parseInt(i.borderLeftWidth) : 0) - (a ? 0 : r.scrollLeft),
                            c += r.offsetTop + (parseInt(i.borderTopWidth) ? parseInt(i.borderTopWidth) : 0) - (a ? 0 : r.scrollTop),
                            n = r.offsetParent ? r.offsetParent : r,
                            r = r.offsetParent,
                            !(e & e === r)); )
                            ;
                        return {
                            x: o,
                            y: c,
                            element: r,
                            forefather: e || n
                        }
                    }
                }
            };
            return e
        }()
            , G = {}
            , j = {}
            , U = function() {
            function t(t) {
                var e = document.cookie.match("(?:^|;)\\s*" + t + "=([^;]*)");
                return e ? decodeURIComponent(e[1]) : null
            }
            function e(t) {
                var e = t.name + "=" + encodeURIComponent(t.value);
                if (t.domain && (e += "; domain=" + t.domain),
                    t.path && (e += "; path=" + t.path),
                        t.time) {
                    var n = new Date;
                    n.setTime(n.getTime() + 1e3 * t.time),
                        e += "; expires=" + n.toGMTString()
                }
                document.cookie = e
            }
            function n(n, a) {
                var i = (t(n),
                a || {});
                i.name = n,
                    i.value = "",
                    i.time = -1,
                    e(i)
            }
            return {
                get: t,
                set: e,
                del: n
            }
        }();
        window.$_GET = w;
        var F = void 0
    },
    1: function(t, e, n) {
        "use strict";
        function a(t) {
            var e = t.split("-");
            return e[0].toLowerCase() + "-" + (e[1] || e[0]).toUpperCase()
        }
        function i(t, e, n) {
            var a = {
                base: g,
                HBBase: _,
                uc: b
            }
                , i = t.replace("{{", "").split("}}")[0];
            n = n || {},
                n.method = e,
                n.url = r(t, n.path);
            var o = a[i](n);
            return o.option = n,
                o
        }
        function r(t, e) {
            var n = p.c.rest
                , a = p.c.main
                , i = p.c.uc
                , r = t || "";
            Math.random().toString(36).substr(2);
            r = r.replace(new RegExp("{{(base)}}","ig"), n),
                r = r.replace(new RegExp("{{(HBBase)}}","ig"), a),
                r = r.replace(new RegExp("{{(uc)}}","ig"), i);
            for (var o in e)
                r = r.replace(new RegExp("{{(" + o + ")}}","ig"), e[o]);
            return r
        }
        function o(t) {
            return t.driver = "PRO",
                n.i(d.b)(f.a.__resInterceptors, t),
                t
        }
        function c(t) {
            return t.driver = "HB",
                n.i(d.b)(f.a.__resInterceptors, t),
                t
        }
        function s(t) {
            return t.driver = "UC",
                n.i(d.b)(f.a.__resInterceptors, t),
                t
        }
        function u(t, e) {
            var n = {};
            l.h.get(t) ? (n[t] = l.h.get(t),
                e.setHeaders(n)) : e.delHeaders(t)
        }
        n.d(e, "c", function() {
            return y
        }),
            n.d(e, "d", function() {
                return h
            }),
            n.d(e, "n", function() {
                return v
            }),
            n.d(e, "m", function() {
                return k
            }),
            n.d(e, "a", function() {
                return w
            }),
            n.d(e, "g", function() {
                return T
            }),
            n.d(e, "_42", function() {
                return E
            }),
            n.d(e, "_43", function() {
                return S
            }),
            n.d(e, "_7", function() {
                return L
            }),
            n.d(e, "_8", function() {
                return x
            }),
            n.d(e, "_5", function() {
                return A
            }),
            n.d(e, "_6", function() {
                return O
            }),
            n.d(e, "_19", function() {
                return C
            }),
            n.d(e, "_20", function() {
                return I
            }),
            n.d(e, "b", function() {
                return q
            }),
            n.d(e, "s", function() {
                return P
            }),
            n.d(e, "r", function() {
                return M
            }),
            n.d(e, "_17", function() {
                return B
            }),
            n.d(e, "_15", function() {
                return D
            }),
            n.d(e, "_41", function() {
                return N
            }),
            n.d(e, "_30", function() {
                return H
            }),
            n.d(e, "_29", function() {
                return R
            }),
            n.d(e, "H", function() {
                return G
            }),
            n.d(e, "_36", function() {
                return j
            }),
            n.d(e, "_35", function() {
                return U
            }),
            n.d(e, "D", function() {
                return F
            }),
            n.d(e, "_34", function() {
                return Q
            }),
            n.d(e, "_33", function() {
                return z
            }),
            n.d(e, "_31", function() {
                return K
            }),
            n.d(e, "_38", function() {
                return Y
            }),
            n.d(e, "_32", function() {
                return V
            }),
            n.d(e, "I", function() {
                return W
            }),
            n.d(e, "_37", function() {
                return $
            }),
            n.d(e, "_39", function() {
                return Z
            }),
            n.d(e, "_40", function() {
                return J
            }),
            n.d(e, "G", function() {
                return X
            }),
            n.d(e, "E", function() {
                return tt
            }),
            n.d(e, "_25", function() {
                return et
            }),
            n.d(e, "_12", function() {
                return nt
            }),
            n.d(e, "_13", function() {
                return at
            }),
            n.d(e, "_14", function() {
                return it
            }),
            n.d(e, "_27", function() {
                return rt
            }),
            n.d(e, "_28", function() {
                return ot
            }),
            n.d(e, "i", function() {
                return ct
            }),
            n.d(e, "j", function() {
                return st
            }),
            n.d(e, "k", function() {
                return ut
            }),
            n.d(e, "Q", function() {
                return lt
            }),
            n.d(e, "l", function() {
                return dt
            }),
            n.d(e, "f", function() {
                return pt
            }),
            n.d(e, "_11", function() {
                return ft
            }),
            n.d(e, "P", function() {
                return mt
            }),
            n.d(e, "x", function() {
                return gt
            }),
            n.d(e, "y", function() {
                return _t
            }),
            n.d(e, "R", function() {
                return bt
            }),
            n.d(e, "Y", function() {
                return yt
            }),
            n.d(e, "z", function() {
                return ht
            }),
            n.d(e, "t", function() {
                return vt
            }),
            n.d(e, "J", function() {
                return kt
            }),
            n.d(e, "O", function() {
                return wt
            }),
            n.d(e, "_24", function() {
                return Tt
            }),
            n.d(e, "M", function() {
                return Et
            }),
            n.d(e, "N", function() {
                return St
            }),
            n.d(e, "K", function() {
                return Lt
            }),
            n.d(e, "L", function() {
                return xt
            }),
            n.d(e, "p", function() {
                return At
            }),
            n.d(e, "q", function() {
                return Ot
            }),
            n.d(e, "_2", function() {
                return Ct
            }),
            n.d(e, "S", function() {
                return It
            }),
            n.d(e, "_3", function() {
                return qt
            }),
            n.d(e, "_4", function() {
                return Pt
            }),
            n.d(e, "Z", function() {
                return Mt
            }),
            n.d(e, "U", function() {
                return Bt
            }),
            n.d(e, "W", function() {
                return Dt
            }),
            n.d(e, "V", function() {
                return Nt
            }),
            n.d(e, "T", function() {
                return Ht
            }),
            n.d(e, "_0", function() {
                return Rt
            }),
            n.d(e, "_10", function() {
                return Gt
            }),
            n.d(e, "X", function() {
                return jt
            }),
            n.d(e, "_1", function() {
                return Ut
            }),
            n.d(e, "B", function() {
                return Ft
            }),
            n.d(e, "A", function() {
                return Qt
            }),
            n.d(e, "_46", function() {
                return zt
            }),
            n.d(e, "_45", function() {
                return Kt
            }),
            n.d(e, "_47", function() {
                return Yt
            }),
            n.d(e, "o", function() {
                return Vt
            }),
            n.d(e, "_9", function() {
                return Wt
            }),
            n.d(e, "_26", function() {
                return $t
            }),
            n.d(e, "_22", function() {
                return Zt
            }),
            n.d(e, "u", function() {
                return Jt
            }),
            n.d(e, "_23", function() {
                return Xt
            }),
            n.d(e, "e", function() {
                return te
            }),
            n.d(e, "w", function() {
                return ee
            }),
            n.d(e, "v", function() {
                return ne
            }),
            n.d(e, "_21", function() {
                return ae
            }),
            n.d(e, "F", function() {
                return ie
            }),
            n.d(e, "_18", function() {
                return re
            }),
            n.d(e, "_44", function() {
                return oe
            }),
            n.d(e, "C", function() {
                return g
            }),
            n.d(e, "_16", function() {
                return _
            }),
            n.d(e, "h", function() {
                return b
            });
        var l = n(0)
            , d = n(2)
            , p = n(3)
            , f = n(8)
            , m = n(27)
            , g = n.i(m.a)({
            headers: {
                "Accept-Language": localStorage.lang && a(localStorage.lang)
            }
        })
            , _ = n.i(m.a)({
            headers: {
                "Accept-Language": localStorage.lang && a(localStorage.lang)
            }
        })
            , b = n.i(m.a)({
            option: {
                withCredentials: !0
            },
            headers: {
                "Accept-Language": localStorage.lang && a(localStorage.lang)
            }
        })
            , y = function(t) {
            return i("{{base}}/account/accounts", "get", t)
        }
            , h = function(t) {
            return i("{{base}}/account/accounts/{{account-id}}/balance", "get", t)
        }
            , v = function(t) {
            return i("{{base}}/users/login", "post", t)
        }
            , k = function(t) {
            return i("{{base}}/users/logout", "post", t)
        }
            , w = function(t) {
            return i("{{base}}/users/user", "get", t)
        }
            , T = function(t) {
            return i("{{base}}/users/token/verify", "post", t)
        }
            , E = function(t) {
            return i("{{base}}/order/orders", "post", t)
        }
            , S = function(t) {
            return i("{{base}}/order/orders/{{order-id}}/place", "post", t)
        }
            , L = function(t) {
            return i("{{base}}/order/orders/{{order-id}}/submitcancel", "post", t)
        }
            , x = function(t) {
            return i("{{base}}/order/orders/{{order-id}}/matchresults", "get", t)
        }
            , A = function(t) {
            return i("{{base}}/order/orders/", "get", t)
        }
            , O = function(t) {
            return i("{{base}}/order/matchresults/", "get", t)
        }
            , C = function(t) {
            return i("{{base}}/query/finances/", "get", t)
        }
            , I = function(t) {
            return i("{{base}}/dw/withdraw-virtual/{{withdraw-id}}/cancel", "post", t)
        }
            , q = function(t) {
            return i("{{base}}/users/auth/check", "get", t)
        }
            , P = function(t) {
            return i("{{HBBase}}/api/user_auth.php", "post", t)
        }
            , M = function(t) {
            return i("{{HBBase}}/api/uc.php", "post", t)
        }
            , B = function(t) {
            return i("{{HBBase}}/p/api/activity/pro/yd_time", "get", t)
        }
            , D = function(t) {
            return i("{{HBBase}}/p/api/activity/pro/yd_join", "post", t)
        }
            , N = function(t) {
            return i("{{base}}/common/exchange", "get", t)
        }
            , H = function(t) {
            return i("{{base}}/dw/deposit-virtual/addresses", "get", t)
        }
            , R = function(t) {
            return i("{{base}}/dw/deposit-virtual/sharedAddressWithTag", "get", t)
        }
            , G = function(t) {
            return i("{{base}}/dw/withdraw-virtual/addresses", "get", t)
        }
            , j = function(t) {
            return i("{{base}}/dw/withdraw-virtual/{{withdraw-id}}/place", "post", t)
        }
            , U = function(t) {
            return i("{{base}}/dw/withdraw/create", "post", t)
        }
            , F = function(t) {
            return i("{{base}}/dw/withdraw/addresses", "post", t)
        }
            , Q = function(t) {
            return i("{{base}}/dw/withdraw/check-amount", "get", t)
        }
            , z = function(t) {
            return i("{{base}}/query/dw/withdraw-virtual/limitdetails", "get", t)
        }
            , K = function(t) {
            return i("{{base}}/dw/withdraw-virtual/fee", "get", t)
        }
            , Y = function(t) {
            var e = t || {};
            e.withCredentials = !1,
                e.headers = {};
            return i("{{base}}/rate/usd_cny_rate", "get", e)
        }
            , V = function(t) {
            return i("{{base}}/dw/withdraw-virtual/fee-range", "get", t)
        }
            , W = function(t) {
            return i("{{base}}/dw/withdraw/addresses/{{address-id}}/delete", "post", t)
        }
            , $ = function(t) {
            return i("{{base}}/dw/withdraw/audit-check", "get", t)
        }
            , Z = function(t) {
            return i("{{base}}/dw/withdraw/verify-identity", "post", t)
        }
            , J = function(t) {
            return i("{{base}}/settings/fee", "get", t)
        }
            , X = function(t) {
            return i("{{base}}/settings/currencys", "get", t)
        }
            , tt = function(t) {
            return i("{{base}}/settings/symbols", "get", t)
        }
            , et = function(t) {
            return i("{{HBBase}}/p/api/contents/publicizeWidely", "get", t)
        }
            , nt = function(t) {
            return i("{{HBBase}}/p/api/contents/pro/top_notice", "get", t)
        }
            , at = function(t) {
            return i("{{HBBase}}/p/api/contents/pro/list_notice", "get", t)
        }
            , it = function(t) {
            return i("{{HBBase}}/p/api/contents/pro/notice/{{id}}", "get", t)
        }
            , rt = function(t) {
            return i("{{HBBase}}/p/api/contents/pro/helps", "get", t)
        }
            , ot = function(t) {
            return i("{{HBBase}}/p/api/contents/pro/help_get", "get", t)
        }
            , ct = function(t) {
            return i("{{uc}}/open/login", "post", t)
        }
            , st = function(t) {
            return i("{{uc}}/open/ga/login", "post", t)
        }
            , ut = function(t) {
            return i("{{uc}}/open/risk/control", "post", t)
        }
            , lt = function(t) {
            return i("{{uc}}/open/risk/control", "post", t)
        }
            , dt = function(t) {
            return i("{{uc}}/open/logout", "get", t)
        }
            , pt = function(t) {
            return i("{{uc}}/open/ticket/get?ts=" + 1 * new Date, "get", t)
        }
            , ft = function(t) {
            return i("{{uc}}/open/register", "post", t)
        }
            , mt = function(t) {
            return i("{{uc}}/open/captcha_code/send", "get", t)
        }
            , gt = function(t) {
            return i("{{uc}}/open/sms_code/send", "post", t)
        }
            , _t = function(t) {
            return i("{{uc}}/open/email_code/send", "post", t)
        }
            , bt = function(t) {
            return i("{{uc}}/open/country/list", "get", t)
        }
            , yt = function(t) {
            return i("{{uc}}/open/security/get", "get", t)
        }
            , ht = function(t) {
            return i("{{uc}}/open/security/strategy/verify", "post", t)
        }
            , vt = function(t) {
            return i("{{uc}}/open/security/strategy/get", "get", t)
        }
            , kt = function(t) {
            return i("{{uc}}/open/login_password/change", "post", t)
        }
            , wt = function(t) {
            return i("{{uc}}/open/login_password/reset", "post", t)
        }
            , Tt = function(t) {
            return i("{{uc}}/open/2fa/login", "post", t)
        }
            , Et = function(t) {
            return i("{{uc}}/open/login_password_reset/account_verify", "post", t)
        }
            , St = function(t) {
            return i("{{uc}}/open/login_password_reset/security_verify", "post", t)
        }
            , Lt = function(t) {
            return i("{{uc}}/open/ga/generate", "get", t)
        }
            , xt = function(t) {
            return i("{{uc}}/open/asset_ga/bind", "post", t)
        }
            , At = function(t) {
            return i("{{uc}}/open/license/agree", "post", t)
        }
            , Ot = function(t) {
            return i("{{uc}}/open/license/state", "get", t)
        }
            , Ct = function(t) {
            return i("{{uc}}/open/phone/bind", "post", t)
        }
            , It = function(t) {
            return i("{{uc}}/open/sms_code/verify", "post", t)
        }
            , qt = function(t) {
            return i("{{uc}}/open/email_code/verify", "post", t)
        }
            , Pt = function(t) {
            return i("{{uc}}/open/email/bind", "post", t)
        }
            , Mt = function(t) {
            return i("{{uc}}/open/login_log/list", "get", t)
        }
            , Bt = function(t) {
            return i("{{uc}}/open/ga/generate_for_change", "get", t)
        }
            , Dt = function(t) {
            return i("{{uc}}/open/asset_ga/change", "post", t)
        }
            , Nt = function(t) {
            return i("{{uc}}/open/ga_code/verify", "post", t)
        }
            , Ht = function(t) {
            return i("{{uc}}/open/phone/rebind", "post", t)
        }
            , Rt = function(t) {
            return i("{{uc}}/open/operation_log/list", "get", t)
        }
            , Gt = function(t) {
            return i("{{uc}}/open/country_id/get", "get", t)
        }
            , jt = function(t) {
            return i("{{uc}}/open/security/strategy/enable", "post", t)
        }
            , Ut = function(t) {
            return i("{{uc}}/open/security/strategy/disable", "post", t)
        }
            , Ft = function(t) {
            return i("{{base}}/dw/transfer-in/fork", "post", t)
        }
            , Qt = function(t) {
            return i("{{base}}/dw/transfer-out/fork", "post", t)
        }
            , zt = function(t) {
            return i("{{uc}}/open/trading_pair/add", "post", t)
        }
            , Kt = function(t) {
            return i("{{uc}}/open/trading_pair/cancel", "post", t)
        }
            , Yt = function(t) {
            return i("{{uc}}/open/trading_pair/list", "get", t)
        }
            , Vt = function(t) {
            return i("{{uc}}/open/user/get", "get", t)
        }
            , Wt = function(t) {
            return i("{{HBBase}}/p/api/contents/pro/single_page/{{id}}", "get", t)
        }
            , $t = function(t) {
            return i("{{HBBase}}/p/api/app/last/version?agent=android", "get", t)
        }
            , Zt = function(t) {
            return i("{{base}}/margin/orders", "post", t)
        }
            , Jt = function(t) {
            return i("{{base}}/margin/orders/{{order-id}}/repay", "post", t)
        }
            , Xt = function(t) {
            return i("{{base}}/margin/loan-orders", "get", t)
        }
            , te = function(t) {
            return i("{{base}}/margin/accounts/balance", "get", t)
        }
            , ee = function(t) {
            return i("{{base}}/dw/transfer-out/margin", "post", t)
        }
            , ne = function(t) {
            return i("{{base}}/dw/transfer-in/margin", "post", t)
        }
            , ae = function(t) {
            return i("{{base}}/margin/settings", "get", t)
        }
            , ie = function(t) {
            return i("{{base}}/margin/symbols", "get", t)
        }
            , re = function(t) {
            return i("{{base}}/margin/finances/", "get", t)
        }
            , oe = function(t) {
            return i("{{HBBase}}/p/api/contents/pro/currency_introduction", "get", t)
        };
        g.interceptors.response.use(o),
            _.interceptors.response.use(c),
            b.interceptors.response.use(s),
            g.interceptors.request.use(function(t) {
                return u("HB-PRO-TOKEN", g),
                ~t.url.indexOf("usd_cny_rate") && (t.headers = {}),
                    t
            }),
            _.interceptors.request.use(function(t) {
                return u("HB-OLD-TOKEN", _),
                    t
            }),
            b.interceptors.request.use(function(t) {
                return u("HB-UC-TOKEN", b),
                    t
            }),
            u("HB-PRO-TOKEN", g),
            u("HB-OLD-TOKEN", _),
            u("HB-UC-TOKEN", b)
    },
    11: function(t, e, n) {
        "use strict";
        function a() {
            function t(t) {
                components = t
            }
            var e = this
                , n = "input" == e.nodeName.toLowerCase() ? e.parentNode.parentNode.querySelector(".pro_warning") : e.parentNode.querySelector(".error_notice");
            if (n)
                return e.timer = null,
                    e.focusTimer = null,
                    e.error = function(t, n) {
                        return void c.Show(e, t)
                    }
                    ,
                    r.e.add(e, "focus", function() {
                        e.timer && clearTimeout(e.timer),
                            e.timer = null,
                            e.clear(),
                            e.autocheckVal()
                    }),
                    e.clear = function(t) {
                        c.Hide()
                    }
                    ,
                    r.e.add(e, "blur", function() {
                        e.focusTimer && clearTimeout(e.focusTimer),
                            e.focusTimer = null,
                            c.Hide()
                    }),
                    r.e.add(window, "scroll", function() {
                        c.Hide()
                    }),
                    e.autocheckVal = function() {
                        e.focusTimer && clearTimeout(e.focusTimer),
                            e.focusTimer = null,
                            e.focusTimer = setTimeout(e.autocheckVal, 100)
                    }
                    ,
                    t
        }
        function i(t) {
            for (var e = {}, n = {}, a = t.length; a--; )
                t[a].getAttribute("pro_name") && ("text" == t[a].type || "password" == t[a].type || "hidden" == t[a].type ? (e[t[a].getAttribute("pro_name")] = t[a].value,
                    n[t[a].getAttribute("pro_name")] = t[a]) : 1 == t[a].checked ? (e[t[a].getAttribute("pro_name")] = t[a].value,
                    n[t[a].getAttribute("pro_name")] = t[a]) : "radio" === t[a].type && "checkbox" === t[a].type || (n[t[a].getAttribute("pro_name")] = t[a]));
            return {
                data: e,
                dom: n
            }
        }
        n.d(e, "a", function() {
            return a
        }),
            n.d(e, "b", function() {
                return i
            });
        var r = n(0)
            , o = n(14)
            , c = new o.a
    },
    13: function(t, e, n) {
        "use strict";
        function a(t) {
            var e = this;
            return e.apiAccount = "",
                e.apiBalance = "",
                e.GetAccount = function(t, a) {
                    n.i(r.c)().then(function(n) {
                        e.GetAccountThen && e.GetAccountThen(n);
                        var i = n.data;
                        "ok" === i.status && (e.accounts = i,
                        t && t(i, a))
                    })
                }
                ,
                e.GetBalance = function(a, i) {
                    n.i(r.d)({
                        path: {
                            "account-id": e.accounts.data[t].id
                        }
                    }).then(function(t) {
                        var n = t.data;
                        "ok" === n.status && e.Then && e.Then(n.data, i)
                    })
                }
                ,
                e.Get = function(t) {
                    e.accounts ? e.GetBalance("fucker", t) : e.GetAccount(e.GetBalance, t)
                }
                ,
                e
        }
        function i() {
            var t = this;
            t.Get = function(e) {
                n.i(r.e)({
                    params: {
                        symbol: e
                    }
                }).then(function(e) {
                    var n = e.data;
                    "ok" === n.status && t.Then && t.Then(n.data)
                })
            }
        }
        n.d(e, "a", function() {
            return a
        }),
            n.d(e, "b", function() {
                return i
            });
        var r = n(1)
    },
    14: function(t, e, n) {
        "use strict";
        function a(t) {
            var e = this;
            e.Init = function() {
                e.tips = new o.b(r.a,"body"),
                    e.elemIcon = e.tips.querySelector(".icon"),
                    e.elemMsg = e.tips.querySelector(".msg"),
                    e.Hide()
            }
                ,
                e.Show = function(t, a) {
                    var i = n.i(c.q)(t)
                        , r = (t.offsetHeight,
                        t.offsetWidth)
                        , o = void 0
                        , s = void 0;
                    e.elem = t,
                        e.msg = a,
                        e.visibility = 1,
                        e.elemMsg.innerHTML = a,
                        e.tips.style.visibility = "visible",
                        o = e.tips.offsetHeight,
                        s = e.tips.offsetWidth,
                        e.tips.style.top = i.top - o - 3 + "px",
                        e.tips.style.left = i.left + r / 2 - s / 2 + "px"
                }
                ,
                c.e.add(window, "resize", function() {
                    e.visibility && e.Show(e.elem, e.msg)
                }),
                e.Hide = function() {
                    e.tips.style.visibility = "hidden",
                        e.tips.style.top = "-999px",
                        e.visibility = 0
                }
                ,
                e.Init()
        }
        var i = n(33)
            , r = n.n(i)
            , o = n(5)
            , c = n(0)
            , s = n(32);
        n.n(s);
        e.a = a
    },
    151: function(t, e, n) {
        "use strict";
        function a() {
            var t;
            return "margin" === TRADE_TYPE ? t = STORE.marginBalance["account-id"] : STORE.account.forEach(function(e) {
                "spot" === e.type && (t = e.id)
            }),
                t
        }
        function i(t) {
            y.buyMarketPrecision = t
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            n.d(e, "setBuyMarketPrecision", function() {
                return i
            }),
            n.d(e, "QueryOrderList", function() {
                return S
            }),
            n.d(e, "QueryHistoryOrderList", function() {
                return L
            }),
            n.d(e, "QueryResultsList", function() {
                return x
            }),
            n.d(e, "getListData", function() {
                return A
            });
        var r = n(12)
            , o = n.n(r)
            , c = n(5)
            , s = n(0)
            , u = n(1)
            , l = n(24)
            , d = n(4)
            , p = n(61)
            , f = n.n(p)
            , m = (n(35),
            new c.a)
            , g = new d.a
            , _ = window.PAGE_QUOTE || ""
            , b = window.PAGE_COIN || ""
            , y = {
            openOrders: {
                page: 0,
                md5: "",
                screen: "",
                states: "submitted,partial-filled",
                type: "openOrders",
                id: "open_orders_body",
                list: "open_orders_list"
            },
            orderHistory: {
                page: 0,
                md5: "",
                screen: "",
                states: "partial-canceled,filled,canceled",
                type: "orderHistory",
                id: "order_history_body",
                list: "order_history_list"
            },
            tradeHistory: {
                page: 0,
                md5: "",
                screen: "",
                states: "",
                type: "tradeHistory",
                id: "trade_history_body",
                list: "trade_history_list"
            }
        }
            , h = {}
            , v = function(t) {
            return f()(t + "hello, moto")
        }
            , k = function(t, e) {
            h.symbol = t.symbol || "",
                h.size = t.size || 11,
                h.from = t.from || "",
                h.direct = t.direct || "",
                h.quote = t.quote || "",
                h.coin = t.coin || "",
                y[e].screen = t.types || "";
            var n = {
                symbol: h.symbol,
                size: h.size,
                states: y[e].states,
                from: h.from,
                direct: h.direct,
                types: y[e].screen,
                quote: h.quote,
                coin: h.coin
            };
            for (var a in n)
                "" == n[a] && delete n[a];
            return n
        }
            , w = function(t) {
            return t.getBoundingClientRect().top + (document.body.scrollTop || document.documentElement.scrollTop)
        }
            , T = function(t) {
            var e = "openOrders" == t ? "open_orders" : "order_history"
                , n = m.querySelector("." + e);
            n && (document.documentElement.scrollTop = w(n),
                document.body.scrollTop = w(n))
        }
            , E = function(t, e) {
            var a = t.data
                , i = a.data
                , r = {}
                , c = h.size
                , u = []
                , d = o()(i)
                , p = v(d)
                , f = function(t) {
                if (m.getElementById(y[e].id)) {
                    var n = m.getElementById(y[e].id)
                        , a = n.querySelector(".l_transac_list")
                        , i = n.querySelector(".l_paging")
                        , r = i && i.querySelector("ul")
                        , o = n.querySelector(".J_list_prompt_search")
                        , c = n.querySelector(".J_list_prompt");
                    if (n.parentNode.querySelector(".loading").style.display = "none",
                        h.search && (a.style.display = "none",
                        r && (r.style.display = "none")),
                        o && (o.style.display = "none"),
                        c && (c.style.display = "none"),
                        0 == t.length)
                        return void (h.search ? o.style.display = "block" : c.style.display = "block");
                    a.style.display = "block",
                    r && (r.style.display = "block")
                }
            };
            if (y[e].md5 == p)
                return void f(i);
            if ("ok" === a.status) {
                for (var g = i.length < c ? i.length : i.length - 1, _ = i.length && i[0].id, b = i.length && i.length >= c && i[g].id, k = 0; k < g; k++) {
                    var w = i[k].symbol
                        , T = top.window.SYMBOLDATA.accuracy[w]
                        , E = T ? T.fee : 8
                        , S = T ? T.amount : 8
                        , L = T ? T.price : 8
                        , x = T ? T.total : 8
                        , A = {
                        id: i[k].id,
                        data: n.i(s.c)(i[k]["created-at"]),
                        pairs: top.window.SYMBOLDATA[w],
                        source: i[k].source,
                        type: i[k].type.indexOf("buy") >= 0 ? {
                            class: "up",
                            value: "BUY"
                        } : {
                            class: "down",
                            value: "SELL"
                        },
                        price: n.i(s.b)(i[k].price, L),
                        market: 0
                    };
                    "openOrders" != e && "orderHistory" != e || (A.amount = n.i(s.b)(i[k].amount, S),
                        A.total = n.i(s.b)(n.i(l.b)(i[k].price, i[k].amount), x),
                        A.executed = n.i(s.b)(i[k]["field-amount"], S),
                        A.unexecuted = n.i(s.b)(n.i(l.c)(i[k].amount, i[k]["field-amount"]), S)),
                    "openOrders" == e && ("buy-market" == i[k].type && (A.price = "市价"),
                    "buy-market" == i[k].type && (A.amount = "---"),
                    "buy-market" == i[k].type && (A.market = 1),
                    "buy-market" == i[k].type && (A.total = n.i(s.b)(i[k].amount, y.buyMarketPrecision)),
                    "buy-market" == i[k].type && (A.unexecuted = n.i(s.b)(n.i(l.c)(i[k].amount, i[k]["field-amount"]), y.buyMarketPrecision)),
                    "sell-market" == i[k].type && (A.price = "市价"),
                    "sell-market" == i[k].type && (A.total = "---"),
                    "sell-market" == i[k].type && (A.market = 1)),
                    "orderHistory" == e && (A.unexecuted = n.i(s.b)(i[k]["field-amount"], S),
                        A.averageprice = n.i(s.b)(n.i(l.d)(i[k]["field-cash-amount"], i[k]["field-amount"]), L),
                        A.status = i[k].state,
                    "buy-market" != i[k].type && "sell-market" != i[k].type || (A.price = "市价"),
                    "buy-market" == i[k].type && (A.amount = n.i(s.b)(i[k].amount, y.buyMarketPrecision))),
                    "tradeHistory" == e && (A.amount = n.i(s.b)(i[k]["filled-amount"], S),
                        A.total = n.i(s.b)(n.i(l.b)(i[k].price, i[k]["filled-amount"]), x),
                        A.fee = n.i(s.b)(i[k]["filled-fees"], E),
                    "buy-market" == i[k].type && (A.amount = n.i(s.b)(i[k]["filled-amount"], y.buyMarketPrecision))),
                        u.push(A)
                }
                h.direct ? "next" == h.direct ? y[e].page++ : --y[e].page <= 0 && (y[e].page = 0) : y[e].page = 0,
                    y[e].page,
                    y[e].md5 = v(d),
                    r = {
                        prev: _,
                        next: b,
                        active: y[e].page,
                        data: u,
                        quote: h.quote,
                        coin: h.coin
                    },
                    document.getElementById(y[e].id).innerHTML = n.i(s.d)(y[e].list, r),
                    f(u)
            } else
                f([])
        }
            , S = function t(e) {
            var i = y.openOrders.type
                , r = k(e, i);
            if ("margin" === TRADE_TYPE && !STORE.marginBalance["account-id"] || "exchange" === TRADE_TYPE && !STORE.account.length)
                return setTimeout(function() {
                    t(e)
                }, 200);
            "transac" !== window.PAGE_NAME && (r["account-id"] = a()),
                n.i(u._5)({
                    params: r
                }).then(function(t) {
                    E(t, i)
                })
        }
            , L = function t(e) {
            var i = y.orderHistory.type
                , r = k(e, i);
            if ("margin" === TRADE_TYPE && !STORE.marginBalance["account-id"] || "exchange" === TRADE_TYPE && !STORE.account.length)
                return setTimeout(function() {
                    t(e)
                }, 200);
            "transac" !== window.PAGE_NAME && (r["account-id"] = a()),
                n.i(u._5)({
                    params: r
                }).then(function(t) {
                    E(t, i)
                })
        }
            , x = function t(e) {
            var i = y.tradeHistory.type
                , r = k(e, i);
            if ("margin" === TRADE_TYPE && !STORE.marginBalance["account-id"] || "exchange" === TRADE_TYPE && !STORE.account.length)
                return setTimeout(function() {
                    t(e)
                }, 200);
            "transac" !== window.PAGE_NAME && (r["account-id"] = a()),
                n.i(u._6)({
                    params: r
                }).then(function(t) {
                    E(t, i)
                })
        }
            , A = function(t) {
            S(t),
                L(t),
                x(t),
                h = t
        }
            , O = function(t) {
            n.i(u._7)({
                path: {
                    "order-id": t
                }
            }).then(function(t) {
                var e = t.data
                    , a = null;
                if ("ok" === e.status) {
                    var i = n.i(s.f)(m.getElementById("open_orders_body").querySelectorAll(".btn_cancel")[0], "data-id")
                        , r = i && i.attr;
                    g.Show(window.LANG.dialog["撤单申请成功"], 1500),
                        clearTimeout(a),
                        a = setTimeout(function() {
                            clearTimeout(a),
                                S({
                                    symbol: h.symbol,
                                    size: h.size,
                                    types: y.openOrders.screen,
                                    from: r,
                                    quote: _,
                                    coin: b
                                })
                        }, 2e3)
                } else
                    g.Error(e["err-msg"], 3e3)
            })
        }
            , C = function(t, e, a) {
            var i = t.attr
                , r = e.attr;
            n.i(u._8)({
                path: {
                    "order-id": i
                }
            }).then(function(t) {
                var e = t.data
                    , i = e.data
                    , o = [];
                if ("ok" === e.status) {
                    for (var c = 0, u = i.length; c < u; c++) {
                        var d = i[c].symbol
                            , p = top.window.SYMBOLDATA.accuracy[d]
                            , f = p ? p.fee : 8
                            , m = p ? p.amount : 8
                            , _ = p ? p.price : 8
                            , b = p ? p.total : 8
                            , y = {
                            id: i[c].id,
                            data: n.i(s.c)(i[c]["created-at"]),
                            price: n.i(s.b)(i[c].price, _),
                            amount: n.i(s.b)(i[c]["filled-amount"], m),
                            total: n.i(s.b)(n.i(l.b)(i[c].price, i[c]["filled-amount"]), b),
                            fee: n.i(s.b)(i[c]["filled-fees"], f),
                            feetype: i[c].type.indexOf("buy") >= 0 ? r.split("/")[0] : r.split("/")[1]
                        };
                        o.push(y)
                    }
                    "function" == typeof a && a(o)
                } else
                    g.Error(e["err-msg"], 3e3)
            })
        }
            , I = function(t, e) {
            var a = s.e.target(t)
                , i = n.i(s.f)(a, "data-drop-down")
                , r = n.i(s.y)(a, "div")
                , o = (m.getElementById(e).querySelectorAll(".l_drop_down_box"),
                r.querySelector(".l_drop_down_box"))
                , c = r.querySelector(".l_drop_down_list")
                , u = c.offsetHeight;
            i && (o.offsetHeight ? o.style.height = "0px" : (o.style.height = u + "px",
                o.querySelector(".drop_down_scroll").scrollTop = 0))
        }
            , q = function(t, e) {
            var a = n.i(s.f)(t, "data-page-id")
                , i = n.i(s.f)(t, "data-page-type")
                , r = this.querySelector(".loading")
                , o = {
                symbol: h.symbol,
                size: h.size,
                types: y[e].screen,
                from: a && a.attr,
                direct: i && i.attr,
                quote: _,
                coin: b
            };
            a && a.attr && (r.style.display = "block",
            "openOrders" == e && S(o),
            "orderHistory" == e && L(o),
            "tradeHistory" == e && x(o),
                T(e))
        };
        m.Ready(function() {
            top.window.PAGECONFIG = y,
            m.getElementById("open_orders") && s.e.add(m.getElementById("open_orders"), "click", function(t) {
                var e = s.e.target(t)
                    , a = n.i(s.f)(e, "data-id")
                    , i = a && a.attr;
                i && O(i),
                    q.call(this, e, y.openOrders.type)
            }),
            m.getElementById("order_history") && s.e.add(m.getElementById("order_history"), "click", function(t) {
                var e = s.e.target(t)
                    , a = n.i(s.f)(e, "data-drop-down")
                    , i = n.i(s.f)(e, "data-drop-pair")
                    , r = n.i(s.y)(e, "div")
                    , o = r.querySelector(".drop_down_body")
                    , c = (m.getElementById("order_history").querySelectorAll(".l_tr"),
                    void 0);
                a && a.attr && (c = a.node.querySelector("span"),
                !s.j.hasClass(r, "z_active") && (c.style.display = "block"),
                    C(a, i, function(e) {
                        for (var n = "", a = 0, i = e.length; a < i; a++)
                            n += '<div class="drop_down_tr_hover"><ul class="drop_down_tr"><li>' + e[a].data + "</li><li>" + e[a].price + "</li><li>" + e[a].amount + "</li><li>" + e[a].total + "</li><li>" + e[a].fee + " " + e[a].feetype + "</li></ul></div>";
                        o.innerHTML = n,
                            c.style.display = "none",
                            s.j.hasClass(r, "z_active") ? s.j.removeClass(r, "z_active") : s.j.addClass(r, "z_active"),
                            I(t, "order_history")
                    })),
                    q.call(this, e, y.orderHistory.type)
            }),
            m.getElementById("trade_history") && s.e.add(m.getElementById("trade_history"), "click", function(t) {
                var e = s.e.target(t);
                q.call(this, e, y.tradeHistory.type)
            })
        })
    },
    16: function(t, e, n) {
        "use strict";
        function a(t) {
            var e = this
                , n = t || {}
                , a = n.tryVoice;
            return i.a.call(e, t),
                e.tryVoice = a,
                e.btn = n.button,
                e.btnText = n.btnText || [],
                e.retryNum = 0,
                e.api = n.api || e.api,
                e.Callback = function(t) {
                    e.btn && (t <= 0 ? (e.btn.disabled = !1,
                    t < 0 && (e.retryNum = e.retryNum > e.tryVoice ? 0 : e.retryNum,
                        e.btn.innerHTML = e.tryVoice && e.retryNum >= e.tryVoice ? e.btnText[3] : e.btnText[2],
                    e.ResetCallback && e.ResetCallback())) : e.btn.innerHTML = e.btnText[1].replace("$", t))
                }
                ,
                e.Send = function(t) {
                    if (e.count < e.countTime)
                        return void console.log("正在获取中请稍后..");
                    e.ToSend(t),
                        e.btn.disabled = !0
                }
                ,
                e.ToSend = function(t) {
                    void 0 === t.voice && (t.voice = e.tryVoice && e.retryNum >= e.tryVoice),
                        e.postData = t || {};
                    var n = {
                        data: e.postData
                    };
                    e.api(n).then(function(t) {
                        var n = t.data;
                        if (e.Then && e.Then(t),
                            "ok" !== n.status && !n.success)
                            return e.Reset();
                        e.retryNum++,
                            e.RemainTime()
                    })
                }
                ,
                e.fire = function() {
                    e.RemainTime()
                }
                ,
                e.trySMS = function(t) {
                    t.voice = !1,
                        e.Send(t)
                }
                ,
                e.tryAudio = function(t) {
                    t.voice = !0,
                        e.Send(t)
                }
                ,
                this
        }
        var i = n(34);
        e.a = a
    },
    19: function(t, e, n) {
        "use strict";
        function a(t, e) {
            var n = localStorage.getItem(t + "HuobiProList");
            n = n ? JSON.parse(n) : [],
                g.a[t + "Ready"] = 1,
                g.a[t + "DataObj"] = {},
                g.a[t + "DataArr"] = [],
                n.forEach(function(n) {
                    "symbol" == e && (n[e] = n["base-currency"] + n["quote-currency"]),
                        g.a[t + "DataArr"].push(n[e]),
                        g.a[t + "DataObj"][n[e].toLowerCase()] = n
                }),
                g.a[t + "Data"] = n
        }
        function i(t, e) {
            t && (e && e.checked ? setTimeout(function() {
                i(t, e)
            }, 100) : t())
        }
        function r() {
            g.a.symbolReady && g.a.marginReady && g.a.marginDataArr.forEach(function(t) {
                g.a.symbolDataObj[t]
            })
        }
        function o() {}
        var c = n(12)
            , s = n.n(c)
            , u = n(18)
            , l = n.n(u)
            , d = n(17)
            , p = n.n(d)
            , f = n(63)
            , m = (n.n(f),
            n(1))
            , g = n(6)
            , _ = function() {
            var t = p()(l.a.mark(function t(e) {
                var n;
                return l.a.wrap(function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                            case 0:
                                if (n = !!localStorage.getItem("symbolHuobiProList")) {
                                    t.next = 4;
                                    break
                                }
                                return t.next = 4,
                                    h(m.E, "symbol");
                            case 4:
                                a("symbol", "symbol"),
                                    g.a.InitSymbol(),
                                    r(),
                                n && i(function() {
                                    h(m.E, "symbol")
                                }, e);
                            case 8:
                            case "end":
                                return t.stop()
                        }
                }, t, this)
            }));
            return function(e) {
                return t.apply(this, arguments)
            }
        }()
            , b = function() {
            var t = p()(l.a.mark(function t(e) {
                var n;
                return l.a.wrap(function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                            case 0:
                                if (n = !!localStorage.getItem("marginHuobiProList")) {
                                    t.next = 4;
                                    break
                                }
                                return t.next = 4,
                                    h(m.F, "margin");
                            case 4:
                                a("margin", "symbol"),
                                    r(),
                                n && i(function() {
                                    h(m.F, "margin")
                                }, e);
                            case 7:
                            case "end":
                                return t.stop()
                        }
                }, t, this)
            }));
            return function(e) {
                return t.apply(this, arguments)
            }
        }()
            , y = function() {
            var t = p()(l.a.mark(function t(e) {
                var n, r, o;
                return l.a.wrap(function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                            case 0:
                                if (n = (localStorage.getItem("lang") || "en-us").replace("_", "-"),
                                        r = !!localStorage.getItem("currencyHuobiProList"),
                                        o = {
                                            params: {}
                                        },
                                        n = n.split("-"),
                                        o.params.language = n[0] + "-" + (n[1] || n[0]).toUpperCase(),
                                        r) {
                                    t.next = 8;
                                    break
                                }
                                return t.next = 8,
                                    h(m.G, "currency", o);
                            case 8:
                                a("currency", "name"),
                                r && i(function() {
                                    h(m.G, "currency", o)
                                }, e);
                            case 10:
                            case "end":
                                return t.stop()
                        }
                }, t, this)
            }));
            return function(e) {
                return t.apply(this, arguments)
            }
        }()
            , h = function() {
            var t = p()(l.a.mark(function t(e, n, a) {
                var i, r, o, c;
                return l.a.wrap(function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                            case 0:
                                return i = !!localStorage.getItem(n + "HuobiProList"),
                                    t.next = 3,
                                    e(a || {});
                            case 3:
                                if (r = t.sent,
                                        o = r.data,
                                        c = void 0 === o ? {} : o,
                                        c.data) {
                                    t.next = 8;
                                    break
                                }
                                return t.abrupt("return", setTimeout(function() {
                                    h(e, n, a)
                                }, 5e3));
                            case 8:
                                return c.data.sort(function(t, e) {
                                    return 1 * e.weight - 1 * t.weight
                                }),
                                    localStorage.setItem(n + "HuobiProList", s()(c.data)),
                                    t.abrupt("return", c);
                            case 11:
                            case "end":
                                return t.stop()
                        }
                }, t, this)
            }));
            return function(e, n, a) {
                return t.apply(this, arguments)
            }
        }();
        e.a = {
            symbols: _,
            margin: b,
            currencyinfo: y,
            cuff: o
        }
    },
    191: function(t, e, n) {
        "use strict";
        function a(t) {
            var e = this;
            e.wrap = t,
                e.ele = new c.b(n.i(s.d)(o.a, u)),
                e.pageNow = 0,
                e.prevPage = 0,
                e.nextPage = 0,
                e.setDelay = 0,
                e.delayState = !0,
                e.delay = function() {
                    e.setDelay && e.delayState && (e.delayState = !1,
                        setTimeout(function() {
                            e.delayState = !0
                        }, e.setDelay))
                }
                ,
                e.loadState = function(t) {
                    e.isLoad = !!t
                }
                ,
                e.Init = function(t, a) {
                    e.wrap = t || e.wrap,
                        e.wrap.appendChild(e.ele),
                        s.e.add(e.ele, "click", function(t) {
                            if (e.delayState && !e.isLoad) {
                                e.delay();
                                var i = s.e.target(t)
                                    , r = n.i(s.f)(i, "data-direction")
                                    , o = void 0;
                                r = r && r.node,
                                r && (o = r.getAttribute("data-direction"),
                                e.Stop || ("next" === o ? e.pageNow++ : e.pageNow--),
                                    e.direction = o,
                                    e.View(),
                                r && e.Then && e.Then(o, e.pageNow),
                                r && a && a(o, e.pageNow))
                            }
                        }),
                        e.btns = e.ele.getElementsByTagName("button"),
                        e.prevBtn = e.btns[0],
                        e.nextBtn = e.btns[1],
                        e.View()
                }
                ,
                e.Set = function(t) {
                    var n = t || {};
                    e.pageNow = void 0 !== n.pageNow ? n.pageNow : e.pageNow,
                        e.prevPage = void 0 !== n.prvePage ? n.prvePage : e.prevPage,
                        e.nextPage = void 0 !== n.nextPage ? n.nextPage : e.nextPage
                }
                ,
                e.View = function() {
                    e.pageNow || e.prevPage ? e.BtnView("prev", "inline-block") : e.BtnView("prev", "none"),
                        e.nextPage ? e.BtnView("next", "inline-block") : e.BtnView("next", "none")
                }
                ,
                e.BtnView = function(t, n) {
                    e[t + "Btn"] && (e[t + "Btn"].style.display = n)
                }
        }
        var i = n(243)
            , r = (n.n(i),
            n(249))
            , o = n.n(r)
            , c = n(5)
            , s = n(0)
            , u = {
            lang: n.i(s.i)({
                prev: "prev",
                next: "next"
            }, window.LANG.pagination)
        };
        e.a = a
    },
    192: function(t, e, n) {
        "use strict";
        function a() {
            function t(t, e) {
                var n, a, i, r = t, o = 0, c = 0;
                if (t.nodeName) {
                    for (; r && ("body" == r.nodeName.toLowerCase() && (a = 1),
                        i = r.currentStyle ? r.currentStyle : document.defaultView.getComputedStyle(r),
                        o += r.offsetLeft + (parseInt(i.borderLeftWidth) ? parseInt(i.borderLeftWidth) : 0) - (a ? 0 : r.scrollLeft),
                        c += r.offsetTop + (parseInt(i.borderTopWidth) ? parseInt(i.borderTopWidth) : 0) - (a ? 0 : r.scrollTop),
                        n = r.offsetParent ? r.offsetParent : r,
                        r = r.offsetParent,
                        !(e & e === r)); )
                        ;
                    return {
                        x: o,
                        y: c,
                        element: r,
                        forefather: e || n
                    }
                }
            }
            function e(t, e, n) {
                (document.addEventListener ? function(a, i, r) {
                        t.addEventListener(e, n, !1)
                    }
                        : function(a, i, r) {
                        t.attachEvent("on" + e, n)
                    }
                )(t, e, n)
            }
            function n(t) {
                t && t.stopPropagation ? (t.stopPropagation(),
                    t.preventDefault()) : (window.event.cancelBubble = !0,
                    window.event.returnValue = !1)
            }
            function a(t) {
                return {
                    x: t.pageX || t.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft),
                    y: t.pageY || t.clientY + (document.documentElement.scrollTop || document.body.scrollTop)
                }
            }
            function i(t, e) {
                A[t] = e
            }
            function r(t) {
                delete A[t]
            }
            function o(t, e) {
                if (t < 0 && (t = 0),
                    t > 100 && (t = 100),
                    x !== t) {
                    x = t,
                        u(t);
                    for (var n in A)
                        "function" == typeof A[n] && A[n](t, e)
                }
            }
            function c(t, e) {
                o(t, e || "data")
            }
            function s(t) {
                o(100 * t / S, "event")
            }
            function u(t, e) {
                e && g(),
                    b.style.left = t * S / 100 - (L ? 0 : v / 2) + "px",
                    b.x = ~~(t * S / 100)
            }
            function l() {
                setTimeout(function() {
                    w = 0
                }, 20)
            }
            function d(t) {
                k = 1,
                    T = a(t).x,
                    E = b.x,
                    g()
            }
            function p(t) {
                f(t, 1),
                    k = 0
            }
            function f(t, e) {
                k && (n(t),
                w && !e || (w = 1,
                    l(),
                    s(E + a(t).x - T)))
            }
            function m(e) {
                var n = a(e).x
                    , i = t(y).x;
                g(),
                    s(n - i - (L ? v : 0) / 2)
            }
            function g() {
                v = b.offsetWidth,
                    S = y.offsetWidth - (L ? v : 0)
            }
            function _(t, n) {
                h = "string" == typeof t ? document.querySelector("#" + t.replace("#", "")) : t,
                    b = document.createElement("i"),
                    y = document.createElement("i"),
                    b.className = "drag_bar",
                    y.className = "drag_track",
                    h.appendChild(b),
                    h.appendChild(y),
                    L = n,
                    v = b.offsetWidth,
                    S = y.offsetWidth - (L ? v : 0),
                    e(b, "mousedown", d),
                    e(y, "click", m),
                    e(document, "mousemove", f),
                    e(document, "mouseup", p),
                    c(0)
            }
            var b, y, h, v, k, w, T, E, S, L, x, A = {};
            return {
                bindCallback: i,
                unbindCallback: r,
                redrag: c,
                init: _,
                setInit: g,
                resetPos: u
            }
        }
        e.a = a
    },
    193: function(t, e, n) {
        "use strict";
        function a(t) {
            function e() {
                for (var t = void 0, e = void 0, n = 0; n < p; n++)
                    t = document.createElement("i"),
                        t.className = "point",
                        e = 100 / (p - 1) * n,
                        l && n === p - 1 ? t.style.right = 0 : (t.style.left = e + "%",
                            t.style.transform = "translateX(" + -e + "%)"),
                        t.setAttribute("data-point", e),
                        m.push(t),
                        o.appendChild(t)
            }
            function a(t, e) {
                t && (t.appendChild(o),
                e || (d.init(o, 1),
                    u.e.add(window, "resize", function(t) {
                        d.resetPos(d.num, !0)
                    }),
                    u.e.add(o, "click", function(t) {
                        var e = u.e.target(t)
                            , a = n.i(u.f)(e, "data-point");
                        a && d.redrag(a.attr, "point_event")
                    }),
                    u.e.add(o, "keyup", function(t) {
                        switch (t.which) {
                            case 37:
                                d.num--,
                                    d.redrag(d.num, "keyup");
                                break;
                            case 39:
                                d.num++,
                                    d.redrag(d.num, "keyup");
                                break;
                            default:
                                return
                        }
                    })))
            }
            var i = t || {}
                , o = new s.b(c.a)
                , l = !0
                , d = n.i(r.a)()
                , p = i.point || 5
                , f = o.querySelector(".progress")
                , m = [];
            return d.bindCallback("fn1", function(t, e) {
                var n = t / (100 / (p - 1));
                n = n > p - 1 ? p - 1 : n,
                    f.style.width = t + "%",
                    d.num = t,
                    1 * t ? u.j.addClass(o, "focus") : u.j.removeClass(o, "focus"),
                    m.forEach(function(t, e) {
                        m[e].className = e <= n ? "point cur" : "point"
                    })
            }),
                function() {
                    l || u.j.addClass(o, "overflew"),
                    i.class && u.j.addClass(o, i.class),
                        e()
                }(),
                {
                    Drag: d,
                    Init: a,
                    Then: d.bindCallback
                }
        }
        var i = n(244)
            , r = (n.n(i),
            n(192))
            , o = n(250)
            , c = n.n(o)
            , s = n(5)
            , u = n(0);
        e.a = a
    },
    196: function(t, e, n) {
        "use strict";
        var a = n(251)
            , i = n.n(a)
            , r = n(245)
            , o = (n.n(r),
            n(5))
            , c = n(0)
            , s = n(3)
            , u = n(9)
            , l = new o.a
            , d = {
            mgtLang: s.a,
            userLang: localStorage.lang.toLowerCase() || s.b,
            browserLang: n.i(c.A)()
        };
        l.Ready(function() {
            l.selectLang = new o.b(n.i(c.d)(i.a, d),"select_lang"),
                l.selectLangDT = l.selectLang.querySelector("dt"),
                l.selectLangDD = l.selectLang.querySelector("dd"),
                c.e.add(l.selectLang, "click", function(t) {
                    var e = c.e.target(t)
                        , a = n.i(c.y)(e, "p");
                    n.i(c.y)(e, "dt") && (c.j.hasClass(l.selectLang, "open") ? c.j.removeClass(l.selectLang, "open") : c.j.addClass(l.selectLang, "open")),
                    a && (l.selectLangDT.innerHTML = a.innerHTML,
                        l.selectLangDD.style.display = "none",
                        location.href = n.i(u.d)(a.getAttribute("data-lang").toLowerCase()))
                }),
                c.e.add(l.selectLang, "blur", function() {
                    c.j.removeClass(l.selectLang, "open")
                })
        })
    },
    2: function(t, e, n) {
        "use strict";
        function a(t, e) {
            var n = document.createEvent("HTMLEvents");
            return n.initEvent(t, !1, !1),
                n.localSync = e,
                n
        }
        function i(t, e) {
            if (!t || "object" !== (void 0 === t ? "undefined" : d()(t)))
                return void console.error("Publish: action is not defined", "action:", t);
            t.info = e,
                t.version = (new Date).getTime(),
            t.localSync && localStorage.setItem(t.type, u()({
                version: t.version,
                data: t.info
            })),
            p && console.log("%c ↙ publish:" + t.type, "color:green"),
                document.dispatchEvent(t)
        }
        function r(t) {
            var e = t.key
                , n = (t.newValue,
                t.oldValue,
                b(e, t));
            n && (n.source = "storage",
            p && console.log("%c ↗ subscribe(storage):" + e, "color:sienna"))
        }
        function o(t) {
            var e = t.type;
            t.info,
                t.version;
            b(e, t),
            p && console.log("%c ↗ subscribe(document):" + e, "color:sienna")
        }
        function c(t, e) {
            if (!t)
                return void console.error("Subscribe: action is not defined");
            var n = _(t, e);
            f.bind(window, "storage", r),
            "storage" !== n.source && (document.addEventListener(t, o),
                n.source = "document")
        }
        n.d(e, "c", function() {
            return a
        }),
            n.d(e, "b", function() {
                return i
            }),
            n.d(e, "a", function() {
                return c
            });
        var s = n(12)
            , u = n.n(s)
            , l = n(10)
            , d = n.n(l)
            , p = !1
            , f = {
            bind: document.addEventListener ? function(t, e, n) {
                t.addEventListener(e, n, !1)
            }
                : function(t, e, n) {
                t.attachEvent("on" + e, n)
            }
        }
            , m = {}
            , g = {}
            , _ = function(t, e) {
            return m[t] = m[t] || {},
                g[t] = g[t] || [],
            e && g[t].push(e),
                m[t].callback = g[t],
                m[t]
        }
            , b = function(t, e) {
            if (m[t]) {
                var n = m[t].callback
                    , a = (e.key,
                    e.newValue)
                    , i = (e.oldValue,
                    a ? JSON.parse(a) : {})
                    , r = i.version
                    , o = i.data;
                e.info = e.info || o,
                    e.version = e.version || r,
                    m[t].version = e.version;
                for (var c = 0; c < n.length; c++)
                    n[c] && n[c](e);
                return m[t]
            }
        }
    },
    20: function(t, e, n) {
        "use strict";
        function a(t) {
            S.a.uc_token = t.data.uc_token,
                S.a.ticket = t.data.ticket,
                w.h.defaults.headers.common["HB-UC-TOKEN"] = S.a.uc_token,
                v.h.set({
                    name: "HB-UC-TOKEN",
                    value: S.a.uc_token,
                    domain: n.i(T.b)(),
                    path: "/"
                }),
                n.i(w.f)().then(function(t) {
                    var e = t.data;
                    e.success ? u(e.data.ticket) : (C.Error(e.message, 5e3),
                        setTimeout(function() {
                            10096 === e.code && (location.href = "/user_center/uc_set_ga/"),
                            10098 === e.code && (location.href = "/user_center/uc_open_ga/")
                        }, 3e3))
                })
        }
        function i(t, e) {
            return n.i(w.i)({
                data: t
            }).then(function(t) {
                var i = t.data;
                return i.success ? a(i) : e && e(),
                    n.i(y.b)(h.a.__ucLogin, i),
                    i
            })
        }
        function r(t) {
            return n.i(w.j)({
                data: t
            }).then(function(t) {
                var e = t.data;
                return e.success && (e.isGa = !0,
                    a(e)),
                    n.i(y.b)(h.a.__ucLogin, e),
                    e
            })
        }
        function o(t, e) {
            var a = $_GET("backUrl") || $_GET("backurl");
            n.i(E.a)(t, {}, "callback", function(t) {
                v.h.set({
                    name: "HBP_NEKOT",
                    value: t.data.AUTHTOKEN,
                    domain: n.i(T.b)(),
                    path: "/"
                }),
                (I += 1) >= 2 && l(a)
            })
        }
        function c() {
            var t = 0;
            n.i(w.l)().then(function(e) {
                var a = e.data;
                n.i(E.a)(k.c.main + "/p/user/uc_logout", {}, "callback", function(e) {
                    (t += 1) >= 2 && n.i(y.b)(h.a.__ucLogout, a)
                }),
                    n.i(w.m)().then(function(e) {
                        var a = e.data;
                        (t += 1) >= 2 && n.i(y.b)(h.a.__ucLogout, a)
                    })
            })
        }
        function s(t) {
            var e = decodeURIComponent(t) || ""
                , n = void 0;
            return ~e.indexOf("http") && (n = e.replace("http://", "").replace("https://", ""),
            0 === n.indexOf("www.huobi.com")) ? location.protocol + "//www.huobi.com" : (e = e.replace("http://", "").replace("https://", ""),
            "/" + (e = e.replace(/^\/+/, "")))
        }
        function u(t, e) {
            var a = $_GET("backUrl") || $_GET("backurl");
            n.i(w.n)({
                data: {
                    ticket: t
                }
            }).then(function(t) {
                var i = t.data;
                "ok" == i.status && (v.h.set({
                    name: "HB-PRO-TOKEN",
                    value: i.data.token,
                    domain: n.i(T.b)(),
                    path: "/"
                }),
                (I += 1) >= 2 && l(a, e))
            })
        }
        function l(t, e) {
            null === n.i(T.e)("login") && (location.href = e || (t ? s(t) : "/"))
        }
        function d() {
            n.i(w.o)().then(function(t) {
                var e = t.data;
                e.success && (S.a.userInfo = e.data),
                    n.i(y.b)(h.a.__ucGetUserInfo, e)
            })
        }
        function p() {
            var t = n.i(T.b)();
            v.h.del("AUTHTOKEN", {
                domain: t,
                path: "/"
            }),
                v.h.del("HBP_AGREE", {
                    domain: t,
                    path: "/"
                }),
                v.h.del("HB-PRO-TOKEN", {
                    domain: t,
                    path: "/"
                }),
                v.h.del("HB-OLD-TOKEN", {
                    domain: t,
                    path: "/"
                }),
                v.h.del("HB-UC-TOKEN", {
                    domain: t,
                    path: "/"
                }),
                S.a.authTicket = "",
                S.a.token = "",
                S.a.uc_token = "",
                localStorage.removeItem("huobi_pro_eyes")
        }
        function f() {
            for (var t = ["login", "reg", "bindmail", "bindga", "bindmobile", "resetpwd", "modifypwd"], e = t.length; e--; )
                v.h.del("OTC_ACTION_" + t[e], {
                    domain: n.i(T.b)(),
                    path: "/"
                })
        }
        n.d(e, "i", function() {
            return a
        }),
            n.d(e, "d", function() {
                return f
            }),
            n.d(e, "g", function() {
                return i
            }),
            n.d(e, "h", function() {
                return r
            }),
            n.d(e, "f", function() {
                return o
            }),
            n.d(e, "c", function() {
                return c
            }),
            n.d(e, "b", function() {
                return d
            }),
            n.d(e, "e", function() {
                return O
            }),
            n.d(e, "a", function() {
                return p
            });
        var m = n(18)
            , g = n.n(m)
            , _ = n(17)
            , b = n.n(_)
            , y = n(2)
            , h = n(8)
            , v = n(0)
            , k = n(3)
            , w = n(1)
            , T = n(9)
            , E = n(30)
            , S = n(6)
            , L = (n(13),
            n(15))
            , x = (n.n(L),
            n(4))
            , A = function() {
            var t = b()(g.a.mark(function t(e) {
                var a;
                return g.a.wrap(function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                            case 0:
                                return a = $_GET("backUrl") || $_GET("backurl"),
                                    t.abrupt("return", n.i(w.f)().then(function(t) {
                                        var n = t.data;
                                        n.success && u(n.data.ticket, e)
                                    }));
                            case 2:
                            case "end":
                                return t.stop()
                        }
                }, t, this)
            }));
            return function(e) {
                return t.apply(this, arguments)
            }
        }()
            , O = function() {
            var t = b()(g.a.mark(function t(e) {
                var a, i, r;
                return g.a.wrap(function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                            case 0:
                                if (a = v.h.get("HB-PRO-TOKEN"),
                                        i = v.h.get("HB-UC-TOKEN"),
                                        r = !!a,
                                        S.a.authTicket = e,
                                        S.a.isLikeLogin = !!a,
                                        S.a.token = a,
                                        S.a.uc_token = i,
                                        !r) {
                                    t.next = 12;
                                    break
                                }
                                return t.next = 8,
                                    n.i(w.g)().then(function(t) {
                                        var e = t.data;
                                        (r = "ok" === e.status) || console.warn("tokenVerify:", e)
                                    });
                            case 8:
                                if (!e || r) {
                                    t.next = 10;
                                    break
                                }
                                return t.abrupt("return", A(location.href));
                            case 10:
                                t.next = 13;
                                break;
                            case 12:
                                A(location.href);
                            case 13:
                                n.i(y.b)(h.a.__userIsLogin, r),
                                    n.i(y.b)(h.a.__ucIsLogin, i);
                            case 15:
                            case "end":
                                return t.stop()
                        }
                }, t, this)
            }));
            return function(e) {
                return t.apply(this, arguments)
            }
        }()
            , C = new x.a
            , I = 0
    },
    22: function(t, e, n) {
        "use strict";
        var a = n(49)
            , i = (n.n(a),
            n(57))
            , r = n.n(i)
            , o = n(7)
            , c = n(0)
            , s = n(3)
            , u = n(1)
            , l = n(16)
            , d = n(4)
            , p = n(11)
            , f = n.i(c.m)()
            , m = n.i(c.n)(r.a)
            , g = void 0
            , _ = void 0
            , b = {
            btc: "/index.php?a=btc_",
            ltc: "/index.php?a=ltc_"
        }
            , y = new d.a
            , h = void 0
            , v = void 0
            , k = void 0
            , w = new l.a({
            tryVoice: 3,
            countTime: 60,
            api: u.x
        })
            , T = new l.a({
            countTime: 60,
            api: u.y
        });
        e.a = function() {
            function t(t, e) {
                return C = e,
                t && t(g.dialog),
                    g.Open(),
                    g
            }
            function e(t) {
                return g && g.Close(t),
                    g
            }
            function a(t) {
                var e = t.block || "loading"
                    , a = {
                    PHONE: "关闭手机验证后24小时内禁止提币。",
                    EMAIL: "关闭邮箱验证后24小时内禁止提币。",
                    GA: "关闭谷歌验证器验证后24小时内禁止提币。"
                };
                S = t,
                    f._keys(t.lang),
                    h = null,
                    k = 0;
                var l = {
                    lang: f.getLang,
                    item: S.item,
                    currency: t.currency,
                    page: {
                        title: f.getLang(t.title),
                        titleMore: "disable" == S.action ? f.getLang(a[S.itemkey]) : ""
                    },
                    huobifinance: b[t.currency] ? s.c.main + "/" + e.replace("gohuobi", "") + b[t.currency] + e.replace("gohuobi", "") : s.c.main + "/finance/innovate/",
                    btn: !!t.btn && (1 == t.btn ? {
                        submit: f.getLang("确定")
                    } : {
                        cancel: f.getLang("取消"),
                        submit: f.getLang("确定")
                    }),
                    option: t
                };
                return g = g || new o.a({
                        html: n.i(c.d)(n.i(o.b)(m.html).html, l)
                    }),
                _ && (g.dialog.innerHTML = n.i(c.d)(n.i(o.b)(m.html).fc, l)),
                    O = g.dialog.querySelector("#dia_close"),
                    O.style.display = S.hiddenClose ? "none" : "",
                    q = g.dialog.querySelector(".dia_submit"),
                    q.style.display = S.hiddenFoot ? "none" : "",
                    g.dialog.querySelector('[block="content"]').innerHTML = n.i(c.d)(m.block[e], S.content || l),
                !_ && !S.stopEvent && c.e.add(g.dialog, "click", i),
                    g.callback(u),
                    _ = 1,
                    L = n.i(c.s)(g.dialog.querySelectorAll("input")).concat(n.i(c.s)(g.dialog.querySelectorAll("button"))),
                    L.forEach(function(t) {
                        "pro_dia_address_amount" === t.getAttribute("pro_name") && (c.e.add(t, "keydown", function() {
                            g.dialog.querySelector('[amout="out_amount"]').innerHTML = Num(1 * t.value ? 1 * t.value : 0, STORE.currencyDataObj[S.currency]["show-precision"])
                        }),
                            c.e.add(t, "keyup", function() {
                                g.dialog.querySelector('[amout="out_amount"]').innerHTML = Num(1 * t.value ? 1 * t.value : 0, STORE.currencyDataObj[S.currency]["show-precision"])
                            })),
                            n.i(c.g)(p.a, t)
                    }),
                    I = g.dialog.querySelector("#agreeAgt"),
                !v && n.i(c.r)(r),
                    g
            }
            function i(t) {
                var e = c.e.target(t)
                    , a = n.i(c.f)(e, "action");
                n.i(c.f)(e, "stop") && c.e.stop(t),
                a && E[a.attr] && E[a.attr](a.node, e, g.dialog)
            }
            function r() {
                I && (I.parentNode.parentNode.querySelector("button").disabled = !I.checked)
            }
            function u(t) {
                var a = {};
                if (!k) {
                    if ("submit" == t.type) {
                        if (h = n.i(p.b)(L),
                            !x && h.dom.sms_code)
                            return h.dom.sms_code.error(f.getLang("请先获取短信验证码"));
                        if (!h.data.sms_code && h.dom.sms_code)
                            return h.dom.sms_code.error(f.getLang("短信验证码没有填写"));
                        if (!A && h.dom.email_code)
                            return h.dom.email_code.error(f.getLang("请先获取邮箱验证码"));
                        if (!h.data.email_code && h.dom.email_code)
                            return h.dom.email_code.error(f.getLang("请输入邮箱验证码"));
                        if (!h.data.ga_code && h.dom.ga_code)
                            return h.dom.ga_code.error(f.getLang("谷歌验证码没有填写"));
                        h.data.sms_code && (a.sms_code = h.data.sms_code),
                        h.data.ga_code && (a.ga_code = h.data.ga_code),
                        h.data.email_code && (a.email_code = h.data.email_code),
                            k = 1,
                        S.success && S.success(a, g, function(t) {
                            k = 0,
                            t || (x = 0,
                                A = 0,
                                e())
                        })
                    }
                    "close" == t.type && (w.Reset(),
                        T.Reset())
                }
            }
            function l() {
                var t = this;
                t.udesk = d,
                    t.close = e,
                    t.btn_submit = function(t) {
                        C && C(g, t, S)
                    }
                    ,
                    t.getSms = function(t) {
                        var e = !!t.dataset.voice;
                        w.btn = g.dialog.querySelector('[act="sms_btn_wrap"]'),
                            w.btnText = ['<a href="" action="getSms" stop="1">' + f.getLang("点击获取") + "</a>", "<span>$" + f.getLang("秒后重试") + "</span>", '<a href="" action="getSms" stop="1">' + f.getLang("重新获取") + "</a>", '<a href="" action="getSms" stop="1">' + f.getLang("重新获取") + "</a> " + f.getLang("或者试试") + ' <a href="" action="getSms" stop="1" data-voice="1">' + f.getLang("语音验证码") + "</a>"],
                            w.Send({
                                use_type: "VERIFY_SETTING_POLICY",
                                voice: e
                            })
                    }
                    ,
                    t.getEmail = function(t) {
                        T.btn = g.dialog.querySelector('[act="email_btn_wrap"]'),
                            T.btnText = ['<a href="" action="getEmail" stop="1">' + f.getLang("点击获取") + "</a>", "<span>$" + f.getLang("秒后重试") + "</span>", '<a href="" action="getEmail" stop="1">' + f.getLang("重新获取") + "</a>", '<a href="" action="getEmail" stop="1">' + f.getLang("重新获取") + "</a>"],
                            T.Send({
                                use_type: "VERIFY_SETTING_POLICY"
                            })
                    }
                    ,
                    T.Then = function(t) {
                        var e = t.data;
                        e.success ? (A = 1,
                        h && h.dom.email_code.clear()) : y.Error(e.message)
                    }
                    ,
                    w.Then = function(t) {
                        var e = t.data;
                        e.success ? (x = 1,
                        h && h.dom.sms_code.clear()) : y.Error(e.message)
                    }
            }
            function d() {
                var t = window.screenTop + (window.outerHeight - 500 - 51) / 2
                    , e = window.screenLeft + (window.outerWidth - 520) / 2
                    , n = "width=520,height=500,top=" + t + ",left=" + e;
                window.open("http: //huobi.udesk.cn/im_client?cur_url=" + encodeURIComponent(location.href) + "&pre_url=" + encodeURIComponent(document.referrer), "udesk_im", n)
            }
            var E = {}
                , S = void 0
                , L = void 0
                , x = void 0
                , A = void 0
                , O = void 0
                , C = void 0
                , I = void 0
                , q = void 0;
            return n.i(c.g)(l, E),
                {
                    open: t,
                    close: e,
                    construct: a
                }
        }()
    },
    23: function(t, e, n) {
        t.exports = n.p + "assets/fonts/loading.svg"
    },
    24: function(t, e, n) {
        "use strict";
        function a(t, e) {
            var a = 0
                , r = 0
                , o = n.i(i.p)(t)
                , c = n.i(i.p)(e);
            if (!(1 * c))
                return "0";
            try {
                a = o.toString().split(".")[1].length
            } catch (t) {
                console.log(t)
            }
            try {
                r = c.toString().split(".")[1].length
            } catch (t) {
                console.log(t)
            }
            return Number(t.toString().replace(".", "")) / Number(e.toString().replace(".", "")) * Math.pow(10, r - a)
        }
        n.d(e, "a", function() {
            return g
        }),
            n.d(e, "c", function() {
                return _
            }),
            n.d(e, "b", function() {
                return b
            }),
            n.d(e, "d", function() {
                return y
            });
        var i = n(0)
            , r = function(t) {
            var e = {};
            return function() {
                var n = Array.prototype.slice.call(arguments).toString();
                return n in e ? e[n] : e[n] = t.apply(this, arguments)
            }
        }
            , o = r(function(t, e) {
            return t.length < e ? o("0" + t, e) : t
        })
            , c = r(function(t, e) {
            return t.length < e ? c(t + "0", e) : t
        })
            , s = r(function(t) {
            return "0" === t.substr(0, 1) && "0." !== t.substr(0, 2) ? s(t.substr(1)) : t
        })
            , u = r(function(t) {
            return t.match(/[\.]$/) ? u(t.replace(/[\.]$/, "")) : t
        })
            , l = function(t, e) {
            var a = !1
                , r = n.i(i.p)(t)
                , s = n.i(i.p)(e)
                , u = r.substr(0, 1).match(/^\D/) ? 1 : 0
                , l = s.substr(0, 1).match(/^\D/) ? 1 : 0
                , d = u ? r.substr(1).split(".") : r.split(".")
                , p = l ? s.substr(1).split(".") : s.split(".")
                , f = Math.max(d[0].length, p[0].length)
                , m = Math.max(d[1] ? d[1].length : 0, p[1] ? p[1].length : 0)
                , g = o(d[0], f)
                , _ = o(p[0], f);
            d[1] = d[1] ? d[1] : "",
                p[1] = p[1] ? p[1] : "";
            var b = d[1] || p[1] ? c(d[1], m) : ""
                , y = d[1] || p[1] ? c(p[1], m) : "";
            d = ("0" + g + b).split(""),
                p = ("0" + _ + y).split("");
            for (var h = d.length + 1; !a && h--; ) {
                var v = d.length - h;
                if (d[v] - p[v] > 0)
                    break;
                a = d[v] - p[v] < 0
            }
            return a ? {
                intMax: f,
                floatMax: m,
                needSwap: a,
                arrA: p.reverse(),
                arrB: d.reverse(),
                symbol: parseInt(l + "" + u, 2)
            } : {
                intMax: f,
                floatMax: m,
                needSwap: a,
                arrA: d.reverse(),
                arrB: p.reverse(),
                symbol: parseInt(u + "" + l, 2)
            }
        }
            , d = function(t, e) {
            switch (e) {
                case 0:
                    if ("add" == t)
                        return 0;
                    if ("sub" == t)
                        return 0;
                    break;
                case 1:
                case 2:
                    if ("add" == t)
                        return 1;
                    if ("sub" == t)
                        return 0;
                    break;
                case 3:
                    if ("add" == t)
                        return 0;
                    if ("sub" == t)
                        return 0
            }
        }
            , p = function(t, e, a) {
            t = n.i(i.p)(t),
                e = n.i(i.p)(e);
            var a = a || l(t, e);
            if (d("add", a.symbol))
                return f(t, e, a);
            var r = [0];
            return a.arrA.forEach(function(t, e) {
                r[e] += 1 * t + 1 * a.arrB[e],
                    r[e] > 9 ? (r[e] -= 10,
                        r[e + 1] = 1) : r[e + 1] = 0
            }),
                r.splice(a.floatMax, 0, "."),
                r = u(s(r.reverse().toString().replace(/,/g, ""))),
                "." === r.replace(/0/g, "") ? "0" : (!a.needSwap && 2 == a.symbol || 3 == a.symbol ? "-" : "") + r
        }
            , f = function(t, e, n) {
            var n = n || l(t, e);
            if (d("sub", n.symbol))
                return p(t, e, n);
            var a = [0];
            return n.arrA.forEach(function(t, e) {
                a[e] += 1 * t - 1 * n.arrB[e],
                    a[e] < 0 ? (a[e] += 10,
                        a[e + 1] = -1) : a[e + 1] = 0
            }),
                a.splice(n.floatMax, 0, "."),
                a = u(s(a.reverse().toString().replace(/,/g, ""))),
                "." === a.replace(/0/g, "") ? "0" : (n.symbol > 1 ? "-" : "") + a
        }
            , m = function(t, e) {
            var n = n || l(t, e)
                , a = [0];
            return n.arrB.forEach(function(t, e) {
                n.arrA.forEach(function(n, i) {
                    a[i + e] += n * t;
                    var r = Math.floor(a[i + e] / 10);
                    a[i + e] %= 10,
                        a[i + e + 1] = a[i + e + 1] ? a[i + e + 1] + r : r
                })
            }),
                a.splice(2 * n.floatMax, 0, "."),
                a = u(s(a.reverse().toString().replace(/,/g, ""))),
            (2 == n.symbol || 1 == n.symbol ? "-" : "") + a
        }
            , g = (function() {
            function t() {
                var t = [].slice.apply(arguments)
                    , e = this
                    , n = t.shift();
                return function() {
                    return n = e.apply(this, [n, t.shift()]),
                        t.length ? arguments.callee.apply(this, arguments) : n
                }()
            }
            function e() {
                return t.apply(p, arguments)
            }
            function n() {
                return t.apply(f, arguments)
            }
            function a() {
                return t.apply(m, arguments)
            }
        }(),
            p)
            , _ = f
            , b = m
            , y = a
    },
    243: function(t, e) {},
    244: function(t, e) {},
    245: function(t, e) {},
    248: function(t, e) {},
    249: function(t, e) {
        t.exports = '<div class="pagination">\n    <button data-direction="prev"><%=lang[\'prev\']%></button>\n    <button data-direction="next"><%=lang[\'next\']%></button>\n</div>'
    },
    250: function(t, e) {
        t.exports = '<div class="range" tabindex="0">\n    <div class="progress"></div>\n    <div class="path"></div>\n</div>'
    },
    251: function(t, e) {
        t.exports = "<dl class=\"select_lang\" tabindex=\"0\">\n    <dt><span><%=__data['mgtLang'][__data['userLang']]%></span></dt>\n    <dd>\n        <%\n        for(var i in __data['mgtLang']){\n        %>\n        <p data-lang=\"<%= i %>\">\n            <%=__data['mgtLang'][i]%>\n        </p>\n        <%\n        }\n        %>\n    </dd>\n</dl>"
    },
    26: function(t, e, n) {
        "use strict";
        function a(t, e) {
            e(),
                O.construct(t),
                O.open()
        }
        function i(t, e, n) {
            e(),
                t.goback = n,
                v.a.construct(t),
                v.a.open(e)
        }
        function r(t, e) {
            h.a.construct(t),
                h.a.open(e)
        }
        function o(t, e) {
            b.a.construct(t),
                b.a.open(e)
        }
        function c(t, e) {
            _.a.construct(t),
                _.a.open(e)
        }
        function s(t, e) {
            k.a.construct(t),
                k.a.open(e)
        }
        function u(t, e) {
            t.title = v.a.title(t.currency, A),
                t.action = "add_address",
            e && delete t.next,
                t.callback = function(t, n, a) {
                    "pass" == t && i(n, a, "function" == typeof e && e)
                }
                ,
                t.lang = A,
                y.a.construct(t),
                y.a.open()
        }
        function l(t) {
            t.title = b.a.title(t.currency, A),
                t.action = t.action || "withdraw",
                t.next = o,
                t.lang = A,
                y.a.construct(t),
                y.a.open()
        }
        function d(t) {
            t.title = _.a.title(t, A),
                t.action = "marginTransfer",
                t.next = c,
                t.lang = A,
                t.currencys = L,
                y.a.construct(t),
                y.a.open()
        }
        function p(t) {
            t.title = k.a.title(t.currency, A),
                t.action = "repay",
                t.next = s,
                t.lang = A,
                t.currencys = L,
                y.a.construct(t),
                y.a.open()
        }
        function f(t) {
            t.title = h.a.title(t.currency, A),
                t.action = "conver",
                t.next = r,
                t.lang = A,
                t.currencys = L,
                t.currency_obj = x,
                t.currencyData = L,
                y.a.construct(t),
                y.a.open()
        }
        function m(t) {
            t.title = t.title,
                t.action = t.action,
                t.block = t.block,
                t.next = a,
                t.lang = A,
                y.a.construct(t),
                y.a.open()
        }
        function g(t) {
            t.title = "提升额度",
                t.action = "withdraw_big",
                t.lang = A,
                t.currency_obj = x,
                t.currencyData = L,
                y.a.construct(t),
                y.a.open()
        }
        n.d(e, "e", function() {
            return d
        }),
            n.d(e, "c", function() {
                return l
            }),
            n.d(e, "a", function() {
                return u
            }),
            n.d(e, "g", function() {
                return f
            }),
            n.d(e, "b", function() {
                return O
            }),
            n.d(e, "d", function() {
                return m
            }),
            n.d(e, "h", function() {
                return g
            }),
            n.d(e, "f", function() {
                return p
            });
        var _ = n(45)
            , b = n(40)
            , y = n(44)
            , h = n(41)
            , v = n(39)
            , k = n(42)
            , w = n(0)
            , T = n(2)
            , E = n(6)
            , S = n(22)
            , L = []
            , x = {}
            , A = n.i(w.i)(window.LANG.dialog)
            , O = function() {
            function t(t) {
                n.i(w.i)(t.lang, A),
                    S.a.construct(t)
            }
            function e(t, e) {
                S.a.open(t, e)
            }
            function a() {
                S.a.close()
            }
            return {
                construct: t,
                open: e,
                close: a
            }
        }();
        n.i(T.a)("__ready", function(t) {
            var e = E.a.currencyData;
            E.a.symbolData;
            e.forEach(function(t) {
                L.push(t.name),
                    x[t.name] = t
            })
        })
    },
    261: function(t, e, n) {
        "use strict";
        var a = n(25)
            , i = n.n(a)
            , r = function(t, e) {
            function n(t) {
                var e = t || E.theme;
                i()(T["hb-day"]).forEach(function(t) {
                    E[t] = T[e][t]
                })
            }
            function a(t) {
                var e = C.getBoundingClientRect();
                return {
                    x: (t.clientX - e.left) * N,
                    y: (t.clientY - e.top) * N
                }
            }
            function r(t, e) {
                if ("bids" === e) {
                    var n = x.map(function(e) {
                        return Math.abs(e[0] - t)
                    });
                    return x[n.indexOf(Math.min.apply(null, n))][1]
                }
                var a = L.map(function(e) {
                    return Math.abs(e[0] - t)
                });
                return L[a.indexOf(Math.min.apply(null, a))][1]
            }
            function o(t, e, n) {
                if (b(D),
                        M = !1,
                    t > Q - N)
                    return void (M = !0);
                for (var a = B.getImageData(t, 0, 1, z - 1 * N), i = 0; i < a.height; i++) {
                    var r = a.data[4 * i * a.width]
                        , o = a.data[4 * i * a.width + 1];
                    if (r || o)
                        return s(t, i, o < 120 ? "asks" : "bids"),
                            void (M = !0)
                }
                M = !0
            }
            function c(t, e, n) {
                D.beginPath(),
                    D.arc(t, e, 10 * N, 0, 2 * Math.PI),
                    D.closePath(),
                    D.fillStyle = E.dotColor.replace("1)", ".3)"),
                    D.fill(),
                    D.beginPath(),
                    D.arc(t, e, 5 * N, 0, 2 * Math.PI),
                    D.closePath(),
                    D.fillStyle = E.dotColor,
                    D.fill()
            }
            function s(t, e, n) {
                CanvasRenderingContext2D.prototype.roundRect = function(t, e, n, a, i) {
                    var r = Math.min(n, a);
                    return i > r / 2 && (i = r / 2),
                        this.beginPath(),
                        this.moveTo(t + i, e),
                        this.arcTo(t + n, e, t + n, e + a, i),
                        this.arcTo(t + n, e + a, t, e + a, i),
                        this.arcTo(t, e + a, t, e, i),
                        this.arcTo(t, e, t + n, e, i),
                        this.closePath(),
                        this
                }
                ;
                var a = 150 * N
                    , i = 80 * N
                    , o = 18 * N;
                D.shadowBlur = 4 * N,
                    D.shadowOffsetY = 2 * N;
                var s = t - a > D.shadowBlur ? t - a : D.shadowBlur
                    , u = e - i - o > D.shadowBlur ? e - i - o : e + o
                    , l = y()
                    , d = l.pTick * t + l.pMin
                    , p = r(d, n);
                D.shadowColor = "rgba(0,0,0,.25)",
                    D.fillStyle = E.bgColor,
                    D.roundRect(s, u, a, i, 3 * N),
                    D.fill(),
                    D.shadowBlur = 0,
                    D.shadowOffsetY = 0,
                    D.fillStyle = E.tipColor,
                    D.font = 12 * N + "px Arial",
                    D.fillText(S[E.lang]["委托价"], s + 16 * N, u + 30 * N),
                    D.fillText(d.toFixed(E.priceFix), s + 72 * N, u + 30 * N),
                    D.fillText(S[E.lang]["累计"], s + 16 * N, u + 56 * N),
                    D.fillText(p.toFixed(E.amountFix), s + 72 * N, u + 56 * N),
                    c(t, e, n)
            }
            function u() {
                B.strokeStyle = E.axisColor,
                    B.lineWidth = ~~(1.5 * N),
                    B.beginPath(),
                    B.moveTo(g(0), g(z)),
                    B.lineTo(g(Q), g(z)),
                    B.lineTo(g(Q), g(0)),
                    B.stroke(),
                    B.closePath()
            }
            function l(t) {
                var e = []
                    , n = [];
                t.asks.forEach(function(t, n) {
                    var a = [];
                    a.push(t[0]),
                        n - 1 > -1 ? a.push(1 * t[1] + 1 * e[n - 1][1]) : a.push(t[1]),
                        e.push(a)
                });
                var a = e[e.length - 1] ? e[e.length - 1][1] : 0;
                t.bids.forEach(function(t, e) {
                    var a = [];
                    a.push(t[0]),
                        e - 1 > -1 ? a.push(1 * t[1] + 1 * n[e - 1][1]) : a.push(t[1]),
                        n.push(a)
                });
                var i = n[n.length - 1] ? n[n.length - 1][1] : 0;
                A = Math.max(i, a),
                    L = e,
                    x = n.reverse()
            }
            function d() {
                B.strokeStyle = E.bidsLineColor,
                    B.lineWidth = ~~(1.5 * N),
                    B.beginPath();
                for (var t = x.sort(function(t, e) {
                    return t[0] - e[0]
                }), e = Q / t.length / 2, n = 0; n < t.length; n++)
                    0 === n && B.moveTo(g(n * e), g(_(t[n][1]))),
                        B.lineTo(g(n * e), g(_(t[n][1]))),
                    n === t.length - 1 && B.lineTo(g(n * e), g(z - N));
                B.stroke(),
                    B.lineTo(g(0), g(z)),
                    B.lineTo(g(0), g(0)),
                    B.closePath(),
                    B.fillStyle = E.bidsFillColor,
                    B.fill()
            }
            function p() {
                B.strokeStyle = E.asksLineColor,
                    B.beginPath();
                for (var t = L.sort(function(t, e) {
                    return t[0] - e[0]
                }), e = Q / t.length / 2, n = Q / 2 + 2 * N, a = 0; a < t.length; a++)
                    0 === a && B.lineTo(g(n), g(z - N)),
                        B.lineTo(g(a * e + n), g(_(t[a][1]))),
                    a === t.length - 1 && B.lineTo(g(Q), g(_(t[a][1])));
                B.stroke(),
                    B.lineTo(g(Q), g(z - N)),
                    B.lineTo(g(n), g(z - N)),
                    B.closePath(),
                    B.fillStyle = E.asksFillColor,
                    B.fill()
            }
            function f() {
                for (var t = 32 * N, e = 16 * N, n = ~~(H / 100) - 1, a = 1 + ~~(R / 100), i = (Q - 2 * t) / n, r = (z - 2 * e) / a, o = [], c = [], s = [], u = [], l = 0, d = [], p = [], f = y(), g = t; g < Q; g += i)
                    o.push(g),
                        c.push(f.pMin + g * f.pTick);
                for (var _ = z - N; _ > 0; _ -= r)
                    s.push(_),
                        u.push((z - N - _) * f.aTick);
                u.forEach(function(t, e) {
                    l += t,
                        d.push(E.noAmountTick * e),
                        p.push(e)
                }),
                A < 5 && 0 !== l && (u = p,
                    A = (F - r * a - 1) / r + 5),
                0 === l && (u = d),
                    u[0] = 0,
                    m(o, c, "x"),
                    m(s, u, "y")
            }
            function m(t, e, n) {
                B.lineWidth = ~~(1.5 * N),
                    B.strokeStyle = E.axisColor,
                    B.font = 12 * N + "px Arial",
                    B.fillStyle = E.color,
                    B.textAlign = "x" === n ? "center" : "left";
                var a = N;
                "x" === n ? t.forEach(function(t, n) {
                    B.beginPath(),
                        B.lineTo(g(t), z + a),
                        B.lineTo(g(t), (R + 4) * N + a),
                        B.stroke(),
                        B.closePath(),
                        B.fillText(e[n].toFixed(E.priceFix), g(t), (R + 20) * N + a)
                }) : t.forEach(function(t, n) {
                    B.beginPath(),
                        B.lineTo(Q + a, g(t + a)),
                        B.lineTo((H + 4) * N + a, g(t + a)),
                        B.stroke(),
                        B.fillText(e[n].toFixed(0), (H + 8) * N + a, g(t + 4 * N)),
                        B.closePath()
                })
            }
            function g(t) {
                return .5 + ~~t
            }
            function _(t) {
                if (0 === t)
                    return z - N;
                var e = F - F * t / A + j;
                return e - z < ~~(B.lineWidth * N) ? e - ~~(B.lineWidth * N) : e
            }
            function b(t) {
                t.clearRect(0, 0, I * N, q * N)
            }
            function y() {
                var t = x[0] && x[0][0] || 0
                    , e = L[L.length - 1] && L[L.length - 1][0] || 0;
                return {
                    pMin: 1 * t,
                    pMax: 1 * e,
                    pTick: (e - t) / Q,
                    aTick: A / F
                }
            }
            function h(t) {
                b(B),
                    l(t),
                    u(),
                    f(),
                    d(),
                    p()
            }
            function v() {
                b(B),
                    u(),
                    f(),
                    d(),
                    p()
            }
            function k() {
                w(),
                    b(D),
                    v()
            }
            function w() {
                I = O.offsetWidth - 2,
                    q = O.offsetHeight - 2,
                    C.width = P.width = I * N,
                    C.height = P.height = q * N,
                    H = I - E.ruleWidth,
                    R = q - E.ruleHeight,
                    G = ~~(q * E.paddingTop / 100),
                    j = G * N,
                    U = R - G,
                    F = U * N,
                    Q = H * N,
                    z = R * N,
                    M = !0
            }
            !function(t) {
                t.getContext = function(t) {
                    return function(e) {
                        var n, a, i = t.call(this, e);
                        return "2d" === e && (n = i.backingStorePixelRatio || i.webkitBackingStorePixelRatio || i.mozBackingStorePixelRatio || i.msBackingStorePixelRatio || i.oBackingStorePixelRatio || i.backingStorePixelRatio || 1,
                        (a = (window.devicePixelRatio || 1) / n) > 1 && (this.style.height = this.height + "px",
                            this.style.width = this.width + "px",
                            this.width *= a,
                            this.height *= a)),
                            i
                    }
                }(t.getContext)
            }(HTMLCanvasElement.prototype);
            var T = {
                "hb-night": {
                    bidsLineColor: e && e.bidsLineColor || "rgba(88, 144, 101, 0)",
                    asksLineColor: e && e.asksLineColor || "rgba(190, 67, 79, 0)",
                    bidsFillColor: e && e.bidsLineColor || "rgba(88, 144, 101, .2)",
                    asksFillColor: e && e.asksLineColor || "rgba(190, 67, 79, .2)",
                    axisColor: e && e.axisColor || "rgba(97, 104, 138, .3)",
                    color: e && e.color || "#61688A",
                    bgColor: "#262A42",
                    dotColor: "rgba(122, 152, 247, 1)",
                    tipColor: "#C7CCE6"
                },
                "hb-day": {
                    bidsLineColor: e && e.bidsLineColor || "rgba(3, 192, 135, 0)",
                    asksLineColor: e && e.asksLineColor || "rgba(231, 109, 66, 0)",
                    bidsFillColor: e && e.bidsLineColor || "rgba(3, 192, 135, .1)",
                    asksFillColor: e && e.asksLineColor || "rgba(231, 109, 66, .1)",
                    axisColor: e && e.axisColor || "rgba(180, 188, 227, .3)",
                    color: e && e.color || "#232A4A",
                    bgColor: "#ffffff",
                    dotColor: "rgba(21, 180, 241, 1)",
                    tipColor: "#61688A"
                }
            }
                , E = {
                theme: e && e.theme || "hb-night",
                ruleHeight: e && e.ruleHeight || 30,
                ruleWidth: e && e.ruleWidth || 50,
                priceFix: e && e.priceFix || 2,
                amountFix: e && e.amountFix || 0,
                paddingTop: e && e.paddingTop || 15,
                noAmountTick: e && e.noAmountTick || 500,
                lang: e && e.lang || "en-us"
            };
            n();
            var S = {
                "zh-cn": {
                    "委托价": "委托价",
                    "累计": "累计"
                },
                "zh-hk": {
                    "委托价": "委託價",
                    "累计": "累計"
                },
                "en-us": {
                    "委托价": "Price",
                    "累计": "Sum"
                },
                "de-de": {
                    "委托价": "Preis",
                    "累计": "Total"
                },
                "ru-ru": {
                    "委托价": "Цена",
                    "累计": "Объём"
                },
                "ja-jp": {
                    "委托价": "価格",
                    "累计": "累計"
                },
                "ko-kr": {
                    "委托价": "위탁단가",
                    "累计": "누적량"
                },
                "fr-fr": {
                    "委托价": "Prix",
                    "累计": "Somme"
                },
                "es-es": {
                    "委托价": "Precio",
                    "累计": "Suma"
                }
            }
                , L = []
                , x = []
                , A = 0
                , O = "string" == typeof t ? document.querySelector("#" + t.replace("#", "")) : t || document.querySelector("#chart")
                , C = document.createElement("canvas")
                , I = O.offsetWidth - 2
                , q = O.offsetHeight - 2
                , P = document.createElement("canvas")
                , M = !0;
            C.width = P.width = I,
                C.height = P.height = q,
                C.style.position = P.style.position = "absolute",
                O.style.position = "relative",
                O.appendChild(C),
                O.appendChild(P);
            var B = C.getContext("2d")
                , D = P.getContext("2d")
                , N = function(t) {
                return (window.devicePixelRatio || 1) / (t.backingStorePixelRatio || t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1)
            }(B)
                , H = I - E.ruleWidth
                , R = q - E.ruleHeight
                , G = ~~(q * E.paddingTop / 100)
                , j = G * N
                , U = R - G
                , F = U * N
                , Q = H * N
                , z = R * N;
            return P.addEventListener("mousemove", function(t) {
                var e = a(t);
                M && o(e.x, e.y)
            }, !1),
                P.addEventListener("mouseout", function(t) {
                    setTimeout(function() {
                        return b(D)
                    }, 500)
                }, !1),
                {
                    update: v,
                    putData: h,
                    forceUpdate: k,
                    initTheme: n
                }
        };
        e.a = r
    },
    27: function(t, e, n) {
        "use strict";
        function a(t) {
            var e = t || {}
                , n = u.a.create(e.option || {});
            return function() {
                var t = this;
                this.setHeaders = function(e) {
                    var n = {};
                    c()(t.defaults.headers.common).forEach(function(e) {
                        n[e] = t.defaults.headers.common[e]
                    }),
                        c()(e).forEach(function(t) {
                            e[t] && (n[t] = e[t])
                        }),
                        r()(t.defaults, {
                            headers: {
                                common: n
                            }
                        })
                }
                    ,
                    this.delHeaders = function(e) {
                        delete t.defaults.headers.common[e]
                    }
            }
                .apply(n),
                n.setHeaders(t.headers || {}),
                n
        }
        var i = n(62)
            , r = n.n(i)
            , o = n(25)
            , c = n.n(o)
            , s = n(15)
            , u = n.n(s);
        e.a = a
    },
    28: function(t, e) {},
    3: function(t, e, n) {
        "use strict";
        function a(t) {
            var e = [].concat(o);
            return e[0] = t,
                e.join(".")
        }
        n.d(e, "f", function() {
            return h
        }),
            n.d(e, "c", function() {
                return g
            }),
            n.d(e, "d", function() {
                return _
            }),
            n.d(e, "e", function() {
                return b
            }),
            n.d(e, "a", function() {
                return y
            }),
            n.d(e, "b", function() {
                return v
            });
        var i = n(12)
            , r = n.n(i)
            , o = location.hostname.split(".")
            , c = "https:" === window.location.protocol ? "wss:" : "ws:"
            , s = /pro_dev/.test(location.hostname) ? "pro-web--dev-1.huobiapps.com" : location.hostname
            , u = /-dev-/.test(s) ? "dev" : "prd"
            , l = "dev" === u ? s : a("api")
            , d = "dev" === u ? s.replace("-web-", "-api-") : a("api")
            , p = "dev" === u ? s.replace("pro-web-", "api-") : "api.huobi.com"
            , f = "dev" === u ? s.replace("pro-web", "www") : "www.huobi.com"
            , m = "dev" === u ? s.replace("pro-web--dev", "uc.dev") : "uc-cn.huobi.com"
            , g = {
            http: "//" + l,
            rest: "//" + d + "/v1",
            uc: "//" + m + "/uc",
            ws: c + "//" + d + "/ws",
            hbws: c + "//" + p + "/ws",
            main: "//" + f,
            type: "prd"
        }
            , _ = ["btc", "bcc", "eth", "ltc", "etc"]
            , b = {
            eth: "",
            etc: ""
        }
            , y = {
            "en-us": "English",
            "zh-cn": "简体中文",
            "zh-hk": "繁體中文",
            "ko-kr": "한국어",
            "ja-jp": "日本語",
            "ru-ru": "Русский",
            "de-de": "Deutsch",
            "fr-fr": "Français",
            "es-es": "Español"
        }
            , h = {
            trade: {},
            frozen: {},
            loan: {},
            interest: {},
            "transfer-out-available": {},
            "loan-available": {},
            "risk-rate": 2,
            "fl-price": "0",
            "fl-type": "safe",
            state: ""
        }
            , v = "zh-cn";
        window.API_ENV = g,
            localStorage.languages = r()(y),
            localStorage.defaultLang = v
    },
    30: function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return r
        });
        var a = n(10)
            , i = n.n(a)
            , r = function(t, e, n, a) {
            t = t || "",
                e = e || {},
                n = n || "",
                a = a || function() {}
            ;
            if ("object" == (void 0 === e ? "undefined" : i()(e))) {
                for (var r = "", o = function(t) {
                    var e = [];
                    for (var n in t)
                        t.hasOwnProperty(n) && e.push(n);
                    return e
                }(e), c = 0; c < o.length; c++)
                    r += encodeURIComponent(o[c]) + "=" + encodeURIComponent(e[o[c]]),
                    c != o.length - 1 && (r += "&");
                r && (t += (t.indexOf("?") > -1 ? "&" : "?") + r)
            } else
                "function" == typeof e && (n = e,
                    a = n);
            "function" == typeof n && (a = n,
                n = "callback"),
            Date.now || (Date.now = function() {
                    return (new Date).getTime()
                }
            );
            var s = Date.now()
                , u = "jsonp" + Math.round(s + 1000001 * Math.random());
            window[u] = function(t) {
                a(t);
                try {
                    delete window[u]
                } catch (t) {
                    window[u] = void 0
                }
            }
                ,
                -1 === t.indexOf("?") ? t += "?" : t += "&";
            var l = document.createElement("script");
            l.setAttribute("src", t + n + "=" + u),
                document.getElementsByTagName("head")[0].appendChild(l)
        }
    },
    31: function(t, e, n) {
        "use strict";
        function a() {
            l || (l = 1,
                s.Ready(function() {
                    var t = document.createElement("iframe")
                        , e = document.querySelector("body");
                    t.style.cssText = "display:none;position:absolute;top:-99999px;",
                        e.appendChild(t),
                        t.src = "/user_center/uc_ticket/?backUrl=" + location.pathname
                }))
        }
        var i = n(2)
            , r = n(5)
            , o = n(6)
            , c = n(20)
            , s = (n(9),
            new r.a)
            , u = {
            resInterceptorsCode: {
                "login-required": !0,
                "token-not-valid": !0,
                512: !0,
                403: !0
            }
        }
            , l = 0;
        n.i(i.a)("__resInterceptors", function(t) {
            var e = t.info
                , i = e.data
                , r = e.config
                , s = e.driver
                , l = r.url;
            if (!(location.href.indexOf("/login/") > 0) && !i.success && "ok" !== i.status && (u.resInterceptorsCode[i["err-code"]] || u.resInterceptorsCode[i.code])) {
                if ("UC" !== s)
                    return a();
                if (o.a.authTicket)
                    return setTimeout(function() {
                        n.i(c.a)(),
                            location.href = "/login/?backurl=" + location.href
                    }, 300);
                o.a.authTicket && console.warn("__resInterceptors logout", l, i)
            }
        }),
            n.i(i.a)("__ready", function(t) {
                var e = t.info
                    , a = void 0 === e ? {} : e
                    , i = a.needTicket;
                o.a.needTicket = i,
                    n.i(c.e)(i)
            })
    },
    32: function(t, e) {},
    33: function(t, e) {
        t.exports = '<div class="component_tips">\n    <i class="icon"></i>\n    <div class="msg"></div>\n</div>'
    },
    339: function(t, e, n) {
        "use strict";
        function a(t, e) {
            var n = e || 0
                , i = [1e3, 3e3, 1e4];
            i[n] && setTimeout(function() {
                t(),
                    a(t, ++n)
            }, i[n])
        }
        function i() {
            n.i(R.e)().then(function(t) {
                var e = t.data
                    , n = 2;
                "ok" === e.status && (D.a.marginBalanceTotal = {},
                    e.data.forEach(function(t) {
                        t.symbol === PAGE_COIN + PAGE_QUOTE && (D.a.marginBalance = r(t),
                            n = 1 * D.a.marginBalance["risk-rate"] || 2),
                        t && t.list.forEach(function(t) {
                            D.a.marginBalanceTotal[t.currency] = D.a.marginBalanceTotal[t.currency] || 0,
                                ["trade", "loan", "frozen", "interest"].forEach(function(e) {
                                    t.type == e && (D.a.marginBalanceTotal[t.currency] += 1 * t.balance)
                                })
                        })
                    }),
                    gt = 0,
                n < 1.1 && (n = 1.1),
                n > 2 && (n = 2),
                    n = 3 + 7 * (1 - (2 - n) / .9),
                    setTimeout(i, 1e3 * n))
            })
        }
        function r(t) {
            var e = J.f;
            return t ? (e["fl-price"] = t["fl-price"],
                e["account-id"] = t.id,
                e["risk-rate"] = t["risk-rate"] >= 2 ? 2 : t["risk-rate"],
                e.state = t.state,
                t.list.forEach(function(t) {
                    e[t.type][t.currency] = t.balance
                })) : [PAGE_COIN, PAGE_QUOTE].forEach(function(t) {
                e.trade[t] = 0,
                    e.frozen[t] = 0,
                    e.loan[t] = 0,
                    e.interest[t] = 0,
                    e["loan-available"][t] = 0,
                    e["transfer-out-available"][t] = 0
            }),
                e
        }
        function o() {
            for (var t = navigator.userAgent, e = new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod","rv:1.2.3.4","windows mobile","midp"), n = !0, a = 0; a < e.length; a++)
                if (t.indexOf(e[a]) > 0) {
                    n = !1;
                    break
                }
            return n
        }
        function c() {
            var t = this;
            t.deposit = function(t) {
                location.href = t.dataset.path + "?action=deposit&coin=" + t.dataset.coin
            }
                ,
                t.activeChart = function(t) {
                    if (o()) {
                        document.querySelector("#chartMask").style.display = "none"
                    }
                }
                ,
                t.showChartMask = function() {
                    if (o()) {
                        document.querySelector("#chartMask").style.display = "block"
                    }
                }
                ,
                t.locationgo = function(t) {
                    var e = t.dataset.path;
                    location.href = e + "?symbol=" + PAGE_COIN + PAGE_QUOTE
                }
                ,
                t.marginTransfer = function(t, e) {
                    n.i(K.e)({
                        quote: PAGE_QUOTE,
                        base: PAGE_COIN,
                        currency: e || PAGE_COIN,
                        type: "in",
                        success: function() {
                            a(i),
                                Q.a.Get([])
                        }
                    })
                }
        }
        function s(t) {
            return t > .01 ? 2 : t.toString().match(/[^\.0]/) ? t.toString().match(/[^\.0]/).index + 1 : void 0
        }
        function u() {
            var t = document.querySelectorAll("[lazyfill]");
            [].forEach.call(t, l)
        }
        function l(t) {
            var e = t.getAttribute("lazyfill")
                , a = {
                base: PAGE_COIN,
                quote: PAGE_QUOTE
            };
            "attr" == e ? t.setAttribute(t.dataset.attr, n.i(H.d)(t.dataset.template || e, a)) : t.innerHTML = n.i(H.d)(t.dataset.template || e, a)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var d = n(18)
            , p = n.n(d)
            , f = n(197)
            , m = n.n(f)
            , g = n(12)
            , _ = n.n(g)
            , b = n(10)
            , y = n.n(b)
            , h = n(64)
            , v = n.n(h)
            , k = n(423)
            , w = n.n(k)
            , T = n(25)
            , E = n.n(T)
            , S = n(17)
            , L = n.n(S)
            , x = n(92)
            , A = (n(38),
            n(705))
            , O = (n.n(A),
            n(196),
            n(409))
            , C = n(261)
            , I = n(408)
            , q = n(248)
            , P = (n.n(q),
            n(19))
            , M = n(8)
            , B = n(2)
            , D = n(6)
            , N = n(5)
            , H = n(0)
            , R = n(1)
            , G = n(24)
            , j = n(4)
            , U = n(399)
            , F = n(193)
            , Q = n(9)
            , z = n(37)
            , K = (n(402),
            n(26))
            , Y = (n(35),
            n(729))
            , V = n.n(Y)
            , W = n(151)
            , $ = n(14)
            , Z = n(97)
            , J = n(3)
            , X = n(15)
            , tt = (n.n(X),
            n(400),
            n(407))
            , et = n(404)
            , nt = function() {
            var t = L()(p.a.mark(function t() {
                var e, r, l, d, f, g, b, h, k, T, S, L, A, q, N, K, $, X, et, nt, rt, ot, bt, yt, ht, vt, kt, wt, Tt, Et, St, Lt, xt, At, Ot, Ct, It, qt, Pt, Mt, Bt, Dt, Nt, Ht, Rt, Gt, jt, Ut, Ft, Qt, zt, Kt, Yt, Vt, Wt, $t, Zt;
                return p.a.wrap(function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                            case 0:
                                return Zt = function() {
                                    _t.Ready(function() {
                                        var t = S.market.ticker.close
                                            , e = (S.coin + "/" + S.quote).toUpperCase();
                                        t = n.i(H.b)(t, X.precision.price || 0);
                                        var a = t + " " + e + " " + mt;
                                        document.title = a
                                    })
                                }
                                    ,
                                    $t = function(t, e) {
                                        var a = t * pt;
                                        pt && (a ? (e.style.cssText = "",
                                            e.innerHTML = "≈ " + n.i(H.b)(a, s(a)) + " CNY") : (e.style.height = "0",
                                            e.innerHTML = ""))
                                    }
                                    ,
                                    Vt = function t() {
                                        if (!S.market.ticker.close)
                                            return setTimeout(t, 200);
                                        var e = _()(S.market.ticker)
                                            , a = JSON.parse(e);
                                        a.close = n.i(H.b)(a.close, X.precision.price),
                                            a.high = n.i(H.b)(a.high, X.precision.price),
                                            a.low = n.i(H.b)(a.low, X.precision.price),
                                            a.amount = n.i(H.b)(a.amount, 0),
                                            a.myRate = ut.rate,
                                            a.symbol = (S.coin + "/" + S.quote).toUpperCase(),
                                            a.coin = S.coin.toUpperCase(),
                                            _t.Ready(function() {
                                                _t.getElementById("tickerClose").innerHTML = a.close || "---",
                                                    n.i(H.k)("ticker_wrap", a),
                                                Yt() && a.close && Kt(a.close)
                                            })
                                    }
                                    ,
                                    Yt = function() {
                                        return "object" === ("undefined" == typeof localStorage ? "undefined" : y()(localStorage)) && localStorage.lang && ("zh-cn" === localStorage.lang || "zh-hk" === localStorage.lang)
                                    }
                                    ,
                                    Kt = function t(e) {
                                        if (!Qt)
                                            return setTimeout(function() {
                                                return t(e)
                                            }, 300);
                                        if ("usdt" === S.quote)
                                            pt = Qt;
                                        else {
                                            if (!D.a.symbolDataObj[S.quote + "usdt"])
                                                return;
                                            if (!S.market.AllSymbolTicker[S.quote + "usdt"] || !S.market.AllSymbolTicker[S.quote + "usdt"].close)
                                                return setTimeout(function() {
                                                    return t(e)
                                                }, 300);
                                            pt = Qt * S.market.AllSymbolTicker[S.quote + "usdt"].close
                                        }
                                        var a = n.i(H.b)(n.i(G.b)(e, pt), s(n.i(G.b)(e, pt)));
                                        _t.getElementById("tickerCny").innerHTML = "≈ " + a + " CNY",
                                            _t.getElementById("tickerCny_ticker_bar").innerHTML = "≈ " + a + " CNY",
                                        _t.formSellLimit && H.e.trigger(_t.formSellLimit.price, "input"),
                                        _t.formSellLimit && H.e.trigger(_t.formBuyLimit.price, "input")
                                    }
                                    ,
                                    zt = function t() {
                                        var e = localStorage.getItem("usdrate");
                                        if (e && (e = e.split("/"),
                                            1 * e[0] && 1 * e[1] && 1 * new Date - (e[1] || 0) < 864e5))
                                            return Qt = e[0],
                                                setTimeout(t, 6e4);
                                        n.i(R._38)().then(function(e) {
                                            var n = e.data;
                                            "ok" === n.status ? (Ft = 1,
                                                Qt = n.data,
                                                localStorage.setItem("usdrate", Qt + "/" + 1 * new Date),
                                                setTimeout(t, 6e4)) : (Ft += 1,
                                                setTimeout(t, 1e3 * Ft))
                                        })
                                    }
                                    ,
                                    Ut = function(t) {
                                        n.i(R._41)({
                                            params: {
                                                symbol: t
                                            }
                                        }).then(function(t) {
                                            var n = t.data;
                                            "ok" === n.status ? _t.Ready(function() {
                                                X.limit.buyLimit.price.less = n.data["buy-limit-must-less-than"],
                                                    X.limit.buyLimit.amount.min = n.data["limit-order-must-greater-than"],
                                                    X.limit.buyLimit.amount.mgtMax = n.data["limit-order-must-less-than"],
                                                    X.limit.sellLimit.price.greater = n.data["sell-limit-must-greater-than"],
                                                    X.limit.sellLimit.amount.min = n.data["limit-order-must-greater-than"],
                                                    X.limit.sellLimit.amount.mgtMax = n.data["limit-order-must-less-than"],
                                                    X.limit.buyMarket.amount.min = n.data["market-buy-order-must-greater-than"],
                                                    X.limit.buyMarket.amount.mgtMax = n.data["market-buy-order-must-less-than"],
                                                    X.limit.sellMarket.amount.min = n.data["market-sell-order-must-greater-than"],
                                                    X.limit.sellMarket.amount.mgtMax = n.data["market-sell-order-must-less-than"],
                                                    _t.modTrade = _t.getElementById("mod_trade"),
                                                    _t.formTradeButton = _t.modTrade.querySelectorAll('button[type="submit"]'),
                                                    _t.formTradeButton.forEach(function(t) {
                                                        t.disabled = !1
                                                    })
                                            }) : "base-symbol-error" === n["err-code"] && (e.Error(n["err-msg"], 3e4),
                                                _t.Ready(function() {
                                                    _t.formTradeButton.forEach(function(t) {
                                                        t.disabled = !0
                                                    })
                                                }))
                                        })
                                    }
                                    ,
                                    jt = function(t, e, a, i) {
                                        t.value = 1 * a && 1 * (1 * e).toFixed(void 0 === i ? X.precision.amount : i) ? n.i(H.b)(n.i(G.b)(e, a / 100), void 0 === i ? X.precision.amount : i) : "",
                                            H.e.trigger(t, "input", "range")
                                    }
                                    ,
                                    Gt = function(t, e) {
                                        return t && e ? n.i(G.b)(t, e) : 0
                                    }
                                    ,
                                    Ot = function(t, e) {
                                        var n = e || 4;
                                        return new RegExp("^(([0-9]{1}\\d*)|([0]{1}))(\\.(\\d){0," + n + "})?$").test(t)
                                    }
                                    ,
                                    At = function(t, e, n) {
                                        t.Drag.redrag(1 * n && 1 * e ? n / e * 100 : 0)
                                    }
                                    ,
                                    xt = function(t, r, o) {
                                        var c = {
                                            exchange: S.account.id,
                                            margin: D.a.marginBalance["account-id"]
                                        }
                                            , s = {
                                            exchange: "web",
                                            margin: "margin-web"
                                        };
                                        if (!c[at])
                                            return void console.warn("get account error");
                                        void 0 !== t.data.price && (t.data.price = n.i(H.b)(t.data.price, X.precision.price)),
                                            t.data["account-id"] = c[at],
                                            t.data.source = s[at],
                                            o.disabled = !0,
                                            n.i(R._42)(t).then(function(t) {
                                                var c = t.data
                                                    , s = c.data;
                                                "ok" === c.status ? n.i(R._43)({
                                                    path: {
                                                        "order-id": s
                                                    }
                                                }).then(function(t) {
                                                    var s = t.data;
                                                    s.data;
                                                    "ok" === s.status ? (e.Show(window.LANG.exchange["委托成功"] || "委托成功", 2e3),
                                                        r.amount.value = "",
                                                        H.e.trigger(r.amount, "input"),
                                                        Q.a.Get(D.a.currencyDataArr),
                                                        n.i(W.QueryOrderList)(X.queryOrderList, "openOrders"),
                                                        n.i(W.QueryHistoryOrderList)(X.queryHistoryOrderList, "orderHistory"),
                                                        ht("trade"),
                                                    "margin" === at && a(i)) : e.Error(c["err-msg"], 3e3),
                                                        o.disabled = !1
                                                }) : e.Error(c["err-msg"], 3e3),
                                                    o.disabled = !1
                                            })
                                    }
                                    ,
                                    Lt = function() {
                                        var t = this;
                                        t.AuthNow = function(e) {
                                            if ("price" === e || "amount" === e)
                                                return function(a, i) {
                                                    return function(r, o, c) {
                                                        var s = void 0
                                                            , u = n.i(H.B)(c.FormDataCommon.type, "-")
                                                            , l = c.FormDataCommon.type.split("-")
                                                            , d = o.msg.errorMsg.split("|")
                                                            , p = a[u]
                                                            , f = void 0
                                                            , m = void 0
                                                            , g = void 0
                                                            , _ = void 0;
                                                        return "buy" === l[0] && ("price" === e && (f = p.price.min,
                                                            m = n.i(H.b)(p.price.less * i.close, X.precision.price),
                                                            g = parseInt(100 * p.price.less) + "%"),
                                                        "amount" === e && (f = p.amount.min,
                                                            m = Math.min(p.amount.max, p.amount.mgtMax))),
                                                        "sell" === l[0] && ("price" === e && (f = n.i(H.b)(p.price.greater * i.close, X.precision.price),
                                                            m = p.price.max,
                                                            _ = parseInt(100 * p.price.greater) + "%"),
                                                        "amount" === e && (f = p.amount.min,
                                                            m = Math.min(p.amount.max, p.amount.mgtMax))),
                                                            r ? (f = n.i(H.b)(f, t.AuthInput.dataset.precision ? et(t.AuthInput.dataset.precision) : X.precision[e]),
                                                                m = n.i(H.b)(m, t.AuthInput.dataset.precision ? et(t.AuthInput.dataset.precision) : X.precision[e]),
                                                            1 * r < 1 * f && (t.Msg = d[1].replace("%s", "sell" === l[0] ? _ || f : f),
                                                                s = 3),
                                                            1 * r > 1 * m && (t.Msg = d[0].replace("%s", "buy" === l[0] ? g || m : m),
                                                                s = 3)) : s = 1,
                                                            s
                                                    }
                                                }(X.limit, S.market.ticker)
                                        }
                                            ,
                                            t.Then = function(e, n) {
                                                X.precision.price;
                                                S.SubmitFormData = {},
                                                    "submit" === n.type ? (S.SubmitFormData = n.formData,
                                                        S.SubmitFormInputs = n.inputs,
                                                        S.SubmitFormButton = n.button,
                                                        xt({
                                                            data: n.formData
                                                        }, n.inputs, n.button)) : (dt.Show(n.ele, '<i class="huobi_pro_warning"></i> ' + t.Msg),
                                                        n.ele.focus(),
                                                        H.j.addClass(n.ele, "input_error"),
                                                    n.ele.getAttribute("isBind") && H.e.add(n.ele, "input", function() {
                                                        dt.Hide(),
                                                            H.j.removeClass(n.ele, "input_error")
                                                    }),
                                                        H.e.add(n.ele, "blur", function() {
                                                            dt.Hide(),
                                                                H.j.removeClass(n.ele, "input_error")
                                                        }),
                                                        n.ele.setAttribute("isBind", 1))
                                            }
                                    }
                                    ,
                                    St = function t() {
                                        var e = "exchange" == at ? D.a.balance : D.a.marginBalance;
                                        if ("exchange" == at && !D.a.balance.trade || "margin" == at && (!D.a.marginBalance || !D.a.marginBalance.trade))
                                            return setTimeout(t, 100);
                                        S.formData.buyLimit.price ? X.limit.buyLimit.amount.max = +e.trade[S.quote.toLowerCase()] ? n.i(H.b)(e.trade[S.quote.toLowerCase()] / S.formData.buyLimit.price, X.precision.amount) : 0 : X.limit.buyLimit.amount.max = n.i(H.b)(0, X.precision.amount),
                                            X.limit.sellLimit.amount.max = n.i(H.b)(e.trade[S.coin], X.precision.amount),
                                            X.limit.buyMarket.amount.max = n.i(H.b)(n.i(H.b)(e.trade[S.quote.toLowerCase()], D.a.currencyDataObj[PAGE_QUOTE]["show-precision"]), et("volumes")),
                                            X.limit.sellMarket.amount.max = n.i(H.b)(e.trade[S.coin], X.precision.amount),
                                            _t.Ready(function() {
                                                _t.formBuyLimit.querySelector(".max_num").innerHTML = n.i(H.b)(X.limit.buyLimit.amount.max, X.precision.amount),
                                                    _t.formSellLimit.querySelector(".max_num").innerHTML = n.i(H.b)(X.limit.sellLimit.amount.max, X.precision.amount),
                                                    _t.formBuyMarket.querySelector(".max_num").innerHTML = n.i(H.b)(X.limit.buyMarket.amount.max, et("volumes")),
                                                    _t.formSellMarket.querySelector(".max_num").innerHTML = n.i(H.b)(X.limit.sellMarket.amount.max, X.precision.amount),
                                                    At(Dt, X.limit.buyLimit.amount.max, S.formData.buyLimit.amount),
                                                    At(Nt, X.limit.sellLimit.amount.max, S.formData.sellLimit.amount)
                                            })
                                    }
                                    ,
                                    Et = function() {
                                        _t.Ready(function() {
                                            var t = _t.getElementById("otcGuide");
                                            t && "object" === ("undefined" == typeof localStorage ? "undefined" : y()(localStorage)) && localStorage.lang && "zh-cn" === localStorage.lang && (t.style.display = "block")
                                        })
                                    }
                                    ,
                                    wt = function(t) {
                                        t.subbed || n.i(B.b)(M.a.__tickerSub, t)
                                    }
                                    ,
                                    kt = function(t) {
                                        var e = t.info;
                                        S.market.ticker = e.tick,
                                            Vt(),
                                            Zt()
                                    }
                                    ,
                                    vt = function() {
                                        f.plugin(n.i(Z.b)({
                                            symbol: (S.coin + S.quote).toLowerCase()
                                        }).sub().ticker(), wt)
                                    }
                                    ,
                                    ht = function(t) {
                                        n.i(R.b)({
                                            params: {
                                                authType: t.toUpperCase()
                                            }
                                        }).then(function(e) {
                                            var n = e.data;
                                            S.auth[t] = n.data || {}
                                        })
                                    }
                                    ,
                                    et = function(t) {
                                        var e = lt[(PAGE_COIN + PAGE_QUOTE).toLowerCase()] || v.a;
                                        return Math.min(e, X.precision[t])
                                    }
                                    ,
                                    k = function(t) {
                                        var e = document.querySelector("#depth_chart")
                                            , a = H.j.hasClass(document.querySelector("html"), "hb-night") ? "hb-night" : "hb-day";
                                        t.subbed || (h || (e.innerHTML = "",
                                            h = n.i(C.a)("depth_chart", {
                                                priceFix: D.a.symbolDataObj[g]["trade-price-precision"],
                                                amountFix: D.a.symbolDataObj[g]["trade-amount-precision"],
                                                lang: localStorage.lang.toLowerCase(),
                                                theme: a
                                            })),
                                            h.putData(t.tick))
                                    }
                                    ,
                                    t.next = 23,
                                    P.a.symbols(it);
                            case 23:
                                return t.next = 25,
                                    P.a.margin(it);
                            case 25:
                                return t.next = 27,
                                    P.a.currencyinfo(it);
                            case 27:
                                e = new j.a,
                                    r = D.a.symbolDataObj["exchange" == at ? D.a.symbolDataArr[0] : D.a.marginDataArr[0]],
                                    l = "exchange" == at ? D.a.symbolDataObj : D.a.marginDataObj,
                                    d = localStorage[ct] ? localStorage[ct].split("_") : null,
                                    PAGE_SYMBOL_ARR[0] && PAGE_SYMBOL_ARR[1] ? (window.PAGE_COIN = PAGE_SYMBOL_ARR[0].toLowerCase(),
                                        window.PAGE_QUOTE = PAGE_SYMBOL_ARR[1].toLowerCase()) : (window.PAGE_COIN = d ? d[0] : r["base-currency"],
                                        window.PAGE_QUOTE = d ? d[1] : r["quote-currency"],
                                    l[window.PAGE_COIN + window.PAGE_QUOTE] || (window.PAGE_COIN = r["base-currency"],
                                        window.PAGE_QUOTE = r["quote-currency"]),
                                        window.location.hash = "#" + window.PAGE_COIN + "_" + window.PAGE_QUOTE),
                                    _t.Ready(u),
                                    f = Z.a.handsup(J.c.ws),
                                    g = (PAGE_COIN + PAGE_QUOTE).toLowerCase(),
                                    b = n.i(Z.b)({
                                        symbol: g
                                    }).sub().depth({
                                        step: "percent10"
                                    }),
                                    h = null,
                                    T = !E()("exchange" == at ? D.a.symbolDataObj : D.a.marginDataObj).filter(function(t) {
                                        return !("exchange" == at ? D.a.symbolDataObj : D.a.marginDataObj)[t].delist
                                    }).includes((PAGE_COIN + PAGE_QUOTE).toLowerCase()),
                                    T ? window.location.href = "/" : localStorage.setItem(ct, PAGE_COIN + "_" + PAGE_QUOTE),
                                    _t.Ready(function() {
                                        H.e.add(window, "resize", function() {
                                            return h && h.forceUpdate()
                                        }),
                                            n.i(B.a)("__changeTheme", function(t) {
                                                h && h.initTheme(t.info),
                                                h && h.forceUpdate()
                                            }),
                                            f.plugin(b, k)
                                    }),
                                    S = {
                                        symbol_config: D.a.symbolDataObj[(PAGE_COIN + PAGE_QUOTE).toLowerCase()],
                                        imgCaptcha: {},
                                        loginData: {},
                                        loginControl: {},
                                        account: {},
                                        quote: PAGE_QUOTE,
                                        coin: PAGE_COIN,
                                        orderList: [],
                                        auth: {
                                            trade: {}
                                        },
                                        formData: {
                                            buyLimit: {},
                                            sellLimit: {},
                                            buyMarket: {},
                                            sellMarket: {}
                                        },
                                        formCache: {
                                            buyLimit: {},
                                            sellLimit: {},
                                            buyMarket: {},
                                            sellMarket: {},
                                            buy: {},
                                            sell: {}
                                        },
                                        market: {
                                            AllSymbolTicker: {},
                                            depth: {},
                                            ticker: {}
                                        },
                                        SubmitFormData: {}
                                    },
                                    L = Y.huobiResolution.get(),
                                    A = w()(L, 2),
                                    q = A[0],
                                    N = void 0 === q ? "15min" : q,
                                    K = A[1],
                                    $ = void 0 === K ? 1 : K,
                                    _t.Ready(function() {
                                        window.tvWidget = new V.a({
                                            ws: f.info,
                                            base: top.PAGE_COIN,
                                            quote: top.PAGE_QUOTE,
                                            period: N,
                                            chartType: $,
                                            props: {
                                                library_path: "/charting_library/",
                                                fullscreen: !1,
                                                width: "100%",
                                                height: 480
                                            },
                                            cssfile: "hb-night" === n.i(z.b)() ? "/charting_library/static/night.css" : "/charting_library/static/day.css",
                                            themeName: n.i(z.b)(),
                                            symbols: [S.symbol_config],
                                            lang: localStorage.getItem("lang").substr(0, 2)
                                        })
                                    }),
                                    X = {
                                        precision: {
                                            price: S.symbol_config["trade-price-precision"],
                                            amount: S.symbol_config["trade-amount-precision"],
                                            volumes: S.symbol_config["trade-total-precision"],
                                            fee: S.symbol_config["fee-precision"]
                                        },
                                        range: {
                                            buyLimit: 0,
                                            sellLimit: 0,
                                            buyMarket: 0,
                                            sellMarket: 0
                                        },
                                        queryOrderList: {
                                            size: 11,
                                            symbol: S.coin + S.quote,
                                            states: "submitted,partial-filled",
                                            types: "",
                                            quote: S.quote,
                                            coin: S.coin
                                        },
                                        queryHistoryOrderList: {
                                            size: 11,
                                            symbol: S.coin + S.quote,
                                            states: "partial-canceled,filled,canceled",
                                            types: "",
                                            quote: S.quote,
                                            coin: S.coin
                                        },
                                        symbol: PAGE_COIN + PAGE_QUOTE,
                                        size: 11
                                    },
                                    X.limit = {
                                        buyLimit: {
                                            price: {
                                                min: 1 * n.i(H.b)(Math.pow(.1, X.precision.price), X.precision.price),
                                                less: 1.1
                                            },
                                            amount: {
                                                min: .001,
                                                max: 1e4,
                                                mgtMax: 1e4
                                            }
                                        },
                                        sellLimit: {
                                            price: {
                                                greater: .9,
                                                max: 99999
                                            },
                                            amount: {
                                                min: .001,
                                                max: 1e4,
                                                mgtMax: 1e4
                                            }
                                        },
                                        buyMarket: {
                                            amount: {
                                                min: 1 * n.i(H.b)(Math.pow(.1, X.precision.price), X.precision.price),
                                                max: 1e3,
                                                mgtMax: 1e4
                                            }
                                        },
                                        sellMarket: {
                                            amount: {
                                                min: .001,
                                                max: 1e4,
                                                mgtMax: 1e4
                                            }
                                        },
                                        circuitBreak: {
                                            less: 10,
                                            greater: 100,
                                            rate: 0
                                        }
                                    },
                                    n.i(W.setBuyMarketPrecision)(et("volumes")),
                                    top.window.SYMBOLDATA = {
                                        accuracy: {}
                                    },
                                    n.i(B.a)("__getUserAccount", function(t) {
                                        S.account = D.a.account[D.a.useAccountId]
                                    }),
                                    n.i(B.a)("__getUserBalance", function(t) {
                                        var e = t.info
                                            , a = !1;
                                        _t.Ready(function() {
                                            n.i(H.C)(".buy_available", n.i(H.b)(e.trade[S.quote], D.a.currencyDataObj[PAGE_QUOTE]["show-precision"])),
                                                n.i(H.C)(".sell_available", n.i(H.b)(e.trade[S.coin], D.a.currencyDataObj[PAGE_COIN]["show-precision"]))
                                        });
                                        for (var i in e.total)
                                            1 * e.total[i] && (a = !0);
                                        a || "exchange" !== TRADE_TYPE || H.h.get("otc_login_guide") || Et(),
                                            St()
                                    }),
                                    n.i(B.a)("__allSymbolTicker", function(t) {
                                        var e = t.info.ch.split(".")[1];
                                        S.market.AllSymbolTicker[e] = S.market.AllSymbolTicker[e] ? S.market.AllSymbolTicker[e] : {},
                                            S.market.AllSymbolTicker[e] = t.info.tick
                                    }),
                                    n.i(B.a)("__allSymbolDayKline", function(t) {
                                        var e = t.info
                                            , a = e.ch.split(".")[1];
                                        S.market.AllSymbolTicker[a] = S.market.AllSymbolTicker[a] ? S.market.AllSymbolTicker[a] : {},
                                            S.market.AllSymbolTicker[a] = e.tick;
                                        var i = (e.tick.close - e.tick.open) / e.tick.open * 100
                                            , r = 1 * n.i(H.b)(i, 2) ? n.i(H.b)(i, 2) : n.i(H.b)(0, 2)
                                            , o = (1 * r > 0 ? "+" : "") + r
                                            , c = o + "%";
                                        a == PAGE_COIN + PAGE_QUOTE && (ut.rate = {
                                            showRate: c,
                                            rate: 1 * r
                                        },
                                            Vt())
                                    }),
                                    n.i(B.a)("__userIsLogin", function(t) {
                                        t.info ? (ot(),
                                            ht("trade"),
                                            Ut(S.coin + S.quote),
                                            nt(!0)) : nt()
                                    }),
                                    nt = function(t) {
                                        _t.Ready(function() {
                                            var e = _t.getElementById("open_orders_scroll")
                                                , n = _t.getElementById("order_history_scroll");
                                            t ? (e && (e.style.display = "block"),
                                            n && (n.style.display = "block")) : (e && (e.style.display = "none"),
                                            n && (n.style.display = "none"))
                                        })
                                    }
                                    ,
                                    rt = function(t, e) {
                                        return t.currentStyle ? t.currentStyle[e] : window.getComputedStyle(t, null)[e]
                                    }
                                    ,
                                    ot = function() {
                                        for (var t = D.a.symbolData, e = 0, n = t.length; e < n; e++) {
                                            var a = t[e]["symbol-name"].replace("/", "").toLowerCase();
                                            top.window.SYMBOLDATA[a] = t[e]["symbol-name"],
                                                top.window.SYMBOLDATA.accuracy[a.toLowerCase()] = {
                                                    fee: t[e]["fee-precision"],
                                                    amount: t[e]["trade-amount-precision"],
                                                    price: t[e]["trade-price-precision"],
                                                    total: t[e]["trade-total-precision"]
                                                }
                                        }
                                        yt()
                                    }
                                    ,
                                    bt = void 0,
                                    yt = function(t) {
                                        n.i(W.QueryOrderList)(X.queryOrderList, "openOrders"),
                                            n.i(W.QueryHistoryOrderList)(X.queryHistoryOrderList, "orderHistory"),
                                            bt = setInterval(function() {
                                                0 == top.window.PAGECONFIG.openOrders.page && (delete X.queryOrderList.from,
                                                    delete X.queryOrderList.direct,
                                                    n.i(W.QueryOrderList)(X.queryOrderList, "openOrders")),
                                                0 == top.window.PAGECONFIG.orderHistory.page && (delete X.queryHistoryOrderList.from,
                                                    delete X.queryHistoryOrderList.direct,
                                                    n.i(W.QueryHistoryOrderList)(X.queryHistoryOrderList, "orderHistory"))
                                            }, 5e3)
                                    }
                                    ,
                                    n.i(B.a)("__tickerSub", kt),
                                    vt(),
                                    Tt = function t(e) {
                                        var n, a = "[object Array]" === Object.prototype.toString.call(e) ? [] : {};
                                        if ("object" === (void 0 === e ? "undefined" : y()(e))) {
                                            if (window.JSON)
                                                n = _()(e),
                                                    a = JSON.parse(n);
                                            else
                                                for (var i in e)
                                                    a[i] = "object" === y()(e[i]) ? t(e[i]) : e[i];
                                            return a
                                        }
                                    }
                                    ,
                                    Ct = new x.a,
                                    It = new x.a,
                                    It.Then = function(t) {
                                        dt.Hide(),
                                            Ht.Drag.setInit(),
                                            Rt.Drag.setInit(),
                                            Dt.Drag.redrag(0, "reset"),
                                            Nt.Drag.redrag(0, "reset"),
                                            Ht.Drag.redrag(0, "reset"),
                                            Rt.Drag.redrag(0, "reset"),
                                        t && _t.formBuyLimit.price && _t.formBuyLimit.price.setAttribute("force", 1)
                                    }
                                    ,
                                    qt = n.i(F.a)(),
                                    Pt = n.i(F.a)(),
                                    Mt = n.i(F.a)(),
                                    Bt = n.i(F.a)(),
                                    Dt = n.i(F.a)(),
                                    Nt = n.i(F.a)(),
                                    Ht = n.i(F.a)(),
                                    Rt = n.i(F.a)(),
                                    Ft = 1,
                                    Qt = null,
                                    zt(),
                                    _t.Ready(function() {
                                        if (!o()) {
                                            document.querySelector("#chartMask").style.display = "none"
                                        }
                                        _t.sbq = _t.querySelectorAll('span[unit="show_buy_quote"]');
                                        var t = !0
                                            , e = !1
                                            , n = void 0;
                                        try {
                                            for (var a, i = m()(_t.sbq); !(t = (a = i.next()).done); t = !0) {
                                                a.value.innerHTML = S.quote
                                            }
                                        } catch (t) {
                                            e = !0,
                                                n = t
                                        } finally {
                                            try {
                                                !t && i.return && i.return()
                                            } finally {
                                                if (e)
                                                    throw n
                                            }
                                        }
                                        _t.ssq = _t.querySelectorAll('span[unit="show_sell_quote"]');
                                        var r = !0
                                            , c = !1
                                            , s = void 0;
                                        try {
                                            for (var u, l = m()(_t.ssq); !(r = (u = l.next()).done); r = !0) {
                                                u.value.innerHTML = S.quote
                                            }
                                        } catch (t) {
                                            c = !0,
                                                s = t
                                        } finally {
                                            try {
                                                !r && l.return && l.return()
                                            } finally {
                                                if (c)
                                                    throw s
                                            }
                                        }
                                        _t.sbq_logout = _t.querySelectorAll('span[unit="show_buy_quote_logout"]');
                                        var d = !0
                                            , p = !1
                                            , f = void 0;
                                        try {
                                            for (var g, _ = m()(_t.sbq_logout); !(d = (g = _.next()).done); d = !0) {
                                                g.value.innerHTML = S.quote
                                            }
                                        } catch (t) {
                                            p = !0,
                                                f = t
                                        } finally {
                                            try {
                                                !d && _.return && _.return()
                                            } finally {
                                                if (p)
                                                    throw f
                                            }
                                        }
                                        _t.ssq_logout = _t.querySelectorAll('span[unit="show_sell_quote_logout"]');
                                        var b = !0
                                            , y = !1
                                            , h = void 0;
                                        try {
                                            for (var v, k = m()(_t.ssq_logout); !(b = (v = k.next()).done); b = !0) {
                                                v.value.innerHTML = S.quote
                                            }
                                        } catch (t) {
                                            y = !0,
                                                h = t
                                        } finally {
                                            try {
                                                !b && k.return && k.return()
                                            } finally {
                                                if (y)
                                                    throw h
                                            }
                                        }
                                    }),
                                    _t.Ready(function() {
                                        function t(t, e) {
                                            var n = {
                                                buyLimit: {
                                                    price: "price",
                                                    amount: "amount"
                                                },
                                                sellLimit: {
                                                    price: "price",
                                                    amount: "amount"
                                                },
                                                buyMarket: {
                                                    amount: "volumes"
                                                },
                                                sellMarket: {
                                                    amount: "amount"
                                                }
                                            };
                                            return "volumes" == n[t][e] ? et("volumes") : X.precision[n[t][e]]
                                        }
                                        function e(e, a) {
                                            var i = t(e, a)
                                                , r = S.formData[e][a] + ""
                                                , o = r.split(".")
                                                , c = o[1] ? o[1].length : 0
                                                , s = void 0;
                                            return s = isNaN(S.formData[e][a]) ? S.formCache[e][a] || "" : c > i ? n.i(H.b)(S.formData[e][a], i) : S.formData[e][a],
                                                S.formCache[e][a] = s,
                                                S.formData[e][a] = s,
                                                s
                                        }
                                        function a(t, e) {
                                            t.querySelector("span").innerHTML = n.i(H.b)(e, et("volumes")) + " " + S.quote.toUpperCase()
                                        }
                                        It.Init(document.getElementById("mod_trade")),
                                            Ct.Init(document.getElementById("mod_trade_logout")),
                                            _t.formBuyLimit = _t.getElementById("form_buy_limit"),
                                            _t.formSellLimit = _t.getElementById("form_sell_limit"),
                                            _t.formBuyMarket = _t.getElementById("form_buy_market"),
                                            _t.formSellMarket = _t.getElementById("form_sell_market"),
                                            _t.marginAccount = _t.querySelector("#margin_account"),
                                            _t.marginHbQuote = _t.querySelector("#margin_hb_quote"),
                                            _t.marginHbBase = _t.querySelector("#margin_hb_base"),
                                            _t.marginHbQuote1 = _t.querySelector("#margin_hb_quote1"),
                                            _t.marginHbBase1 = _t.querySelector("#margin_hb_base1"),
                                            _t.marginAccounts = {
                                                coin: n.i(H.s)(_t.marginAccount.querySelectorAll("span")),
                                                percent: _t.marginAccount.querySelector("p.percent"),
                                                riskVal: _t.marginAccount.querySelector("i.risk_val"),
                                                fire: _t.marginAccount.querySelector("b")
                                            },
                                            _t.formPrice = _t.querySelectorAll("input[name='price']"),
                                            _t.depositLimitQuote = _t.querySelector("#deposit_limit_quote"),
                                            _t.depositLimitCoin = _t.querySelector("#deposit_limit_coin"),
                                            _t.depositMarketQuote = _t.querySelector("#deposit_market_quote"),
                                            _t.depositMarketCoin = _t.querySelector("#deposit_market_coin"),
                                            _t.totalBalance = _t.querySelector("#total_balance"),
                                            _t.totalBalanceToLogin = _t.querySelector("#total_balance_to_login"),
                                            _t.buyLimitMathPrice = _t.querySelector("#buy_limit_math_price"),
                                            _t.sellLimitMathPrice = _t.querySelector("#sell_limit_math_price"),
                                        "margin" == at && getCookie("HB-PRO-TOKEN") && (_t.marginAccount.style.display = "block",
                                            _t.marginHbQuote.style.display = "none",
                                            _t.marginHbBase.style.display = "none",
                                            _t.marginHbQuote1.style.display = "none",
                                            _t.marginHbBase1.style.display = "none"),
                                        D.a.currencyDataObj[PAGE_COIN]["deposit-enabled"] && (_t.depositLimitCoin.style.display = "",
                                            _t.depositMarketCoin.style.display = ""),
                                        D.a.currencyDataObj[PAGE_QUOTE]["deposit-enabled"] && (_t.depositLimitQuote.style.display = "",
                                            _t.depositMarketQuote.style.display = ""),
                                            getCookie("HB-PRO-TOKEN") ? _t.totalBalance.style.display = "" : _t.totalBalanceToLogin.style.display = "";
                                        var i = new U.a({
                                            form: _t.formBuyLimit
                                        })
                                            , r = new U.a({
                                            form: _t.formSellLimit
                                        })
                                            , o = new U.a({
                                            form: _t.formBuyMarket
                                        })
                                            , c = new U.a({
                                            form: _t.formSellMarket
                                        });
                                        Lt.call(i),
                                            Lt.call(r),
                                            Lt.call(o),
                                            Lt.call(c),
                                            H.e.add(_t.formBuyLimit, "input", function(t) {
                                                S.formData.buyLimit = i.GetData(i.Inputs)[0],
                                                t.info || (_t.formBuyLimit.price.value = e("buyLimit", "price"),
                                                    _t.formBuyLimit.amount.value = e("buyLimit", "amount"),
                                                    At(Dt, X.limit.buyLimit.amount.max, S.formData.buyLimit.amount)),
                                                    St(),
                                                    $t(_t.formBuyLimit.price.value, _t.buyLimitMathPrice),
                                                    a(_t.getElementById("buy_total"), Gt(S.formData.buyLimit.price, S.formData.buyLimit.amount))
                                            }),
                                            H.e.add(_t.formSellLimit, "input", function(t) {
                                                S.formData.sellLimit = r.GetData(r.Inputs)[0],
                                                t.info || (_t.formSellLimit.price.value = e("sellLimit", "price"),
                                                    _t.formSellLimit.amount.value = e("sellLimit", "amount"),
                                                    At(Nt, X.limit.sellLimit.amount.max, S.formData.sellLimit.amount)),
                                                    $t(_t.formSellLimit.price.value, _t.sellLimitMathPrice),
                                                    a(_t.getElementById("sell_total"), Gt(S.formData.sellLimit.price, S.formData.sellLimit.amount))
                                            }),
                                            H.e.add(_t.formBuyMarket, "input", function(t) {
                                                S.formData.buyMarket = o.GetData(o.Inputs)[0],
                                                t.info || (_t.formBuyMarket.amount.value = e("buyMarket", "amount"),
                                                    At(Ht, X.limit.buyMarket.amount.max, S.formData.buyMarket.amount))
                                            }),
                                            H.e.add(_t.formSellMarket, "input", function(t) {
                                                S.formData.sellMarket = c.GetData(c.Inputs)[0],
                                                t.info || (_t.formSellMarket.amount.value = e("sellMarket", "amount"),
                                                    At(Rt, X.limit.sellMarket.amount.max, S.formData.sellMarket.amount))
                                            }),
                                            qt.Init(_t.querySelector(".logout_limit_buy"), !0),
                                            Pt.Init(_t.querySelector(".logout_limit_sell"), !0),
                                            Mt.Init(_t.querySelector(".logout_market_buy"), !0),
                                            Bt.Init(_t.querySelector(".logout_market_sell"), !0),
                                            Dt.Init(_t.formBuyLimit.querySelector(".input_range")),
                                            Dt.Then("fn_buyLimitRange", function(t, e) {
                                                X.range.buyLimit = t,
                                                "data" !== e && jt(_t.formBuyLimit.amount, X.limit.buyLimit.amount.max, t)
                                            }),
                                            Nt.Init(_t.formSellLimit.querySelector(".input_range")),
                                            Nt.Then("fn_sellLimitRange", function(t, e) {
                                                X.range.sellLimit = t,
                                                "data" !== e && jt(_t.formSellLimit.amount, X.limit.sellLimit.amount.max, t)
                                            }),
                                            Ht.Init(_t.formBuyMarket.querySelector(".input_range")),
                                            Ht.Then("fn_buyMarketRange", function(t, e) {
                                                X.range.buyMarket = t,
                                                "data" !== e && jt(_t.formBuyMarket.amount, X.limit.buyMarket.amount.max, t, et("volumes"))
                                            }),
                                            Rt.Init(_t.formSellMarket.querySelector(".input_range")),
                                            Rt.Then("fn_sellMarketRange", function(t, e) {
                                                X.range.sellMarket = t,
                                                "data" !== e && jt(_t.formSellMarket.amount, X.limit.sellMarket.amount.max, t)
                                            })
                                    }),
                                    _t.Ready(function() {
                                        for (var t = _t.querySelectorAll(".l_show_btn"), e = (_t.querySelectorAll(".l_show_box"),
                                            _t.querySelectorAll(".l_tab_transac")), a = 0, i = t.length; a < i; a++)
                                            t[a].index = a,
                                                H.e.add(t[a], "click", function(t) {
                                                    var e = this
                                                        , n = (e.index,
                                                        e.parentNode);
                                                    H.j.hasClass(n, "z_active") ? H.j.removeClass(n, "z_active") : H.j.addClass(n, "z_active")
                                                });
                                        for (var a = 0, i = e.length; a < i; a++)
                                            e[a].index = a,
                                                H.e.add(e[a], "click", function(t) {
                                                    var e = H.e.target(t)
                                                        , a = n.i(H.f)(e, "data-type")
                                                        , i = this
                                                        , r = i.index
                                                        , o = i.querySelectorAll("li")
                                                        , c = a && "all" == a.attr ? "" : a && "buy" == a.attr ? "buy-market,buy-limit" : "sell-market,sell-limit";
                                                    if (a && a.attr) {
                                                        for (var s = 0, u = o.length; s < u; s++)
                                                            H.j.removeClass(o[s], "z_active");
                                                        H.j.addClass(a.node, "z_active"),
                                                            r ? (X.queryHistoryOrderList.types = c,
                                                                n.i(W.QueryHistoryOrderList)({
                                                                    symbol: X.symbol,
                                                                    size: X.size,
                                                                    types: c,
                                                                    quote: S.quote,
                                                                    coin: S.coin
                                                                }, "orderHistory")) : (X.queryOrderList.types = c,
                                                                n.i(W.QueryOrderList)({
                                                                    symbol: X.symbol,
                                                                    size: X.size,
                                                                    types: c,
                                                                    quote: S.quote,
                                                                    coin: S.coin
                                                                }, "openOrders"))
                                                    }
                                                });
                                        _t.getElementById("order_history").style.display = "block";
                                        var r = _t.getElementById("notice_top");
                                        n.i(R._12)({
                                            params: {
                                                language: localStorage.lang ? "ko-kr" === localStorage.lang.toLowerCase() ? "en-us" : localStorage.lang.toLowerCase() : "en-us"
                                            }
                                        }).then(function(t) {
                                            var e = t.data
                                                , a = _t.getElementById("notice_top_box");
                                            e.success && (e.data ? a.innerHTML = n.i(H.d)("notice_tmp", {
                                                topId: e.data.id,
                                                topTitle: e.data.title,
                                                topTime: n.i(H.c)(e.data.created),
                                                link: !1
                                            }) : a.innerHTML = n.i(H.d)("notice_tmp", {
                                                link: !0
                                            }))
                                        }),
                                        r && H.e.add(r, "click", function(t) {
                                            var e = H.e.target(t)
                                                , a = n.i(H.f)(e, "data-close");
                                            a && a.attr && this.parentNode.removeChild(this)
                                        });
                                        var o = _t.getElementById("coin_detail_in");
                                        n.i(R._44)({
                                            params: {
                                                currency: S.coin,
                                                lang: localStorage.lang || "en-us"
                                            }
                                        }).then(function(t) {
                                            var e = t.data;
                                            e.success && e.data && (o.innerHTML = n.i(H.d)("coin_detail_tmp", {
                                                fullName: e.data.fullName,
                                                summary: e.data.summary,
                                                publishTime: e.data.publishTime,
                                                publishVolume: e.data.publishVolume,
                                                circulateVolume: e.data.circulateVolume,
                                                crowdfundingPrice: e.data.crowdfundingPrice,
                                                whitePaper: e.data.whitePaper,
                                                officialWebsite: e.data.officialWebsite,
                                                blockQuery: e.data.blockQuery
                                            }))
                                        })
                                    }),
                                    _t.Ready(function() {
                                        ft || (ft = n.i(tt.a)({
                                            key: localStorage.getItem(st)
                                        }))
                                    }),
                                    _t.Ready(function() {
                                        n.i(I.a)(),
                                            n.i(O.a)(),
                                        "exchange" !== TRADE_TYPE || H.h.get("HB-PRO-TOKEN") || H.h.get("otc_guide") || Et(),
                                            [].forEach.call(_t.querySelectorAll(".mod_show_btn"), function(t) {
                                                var e = 0;
                                                H.e.add(t, "click", function(t) {
                                                    var a = H.e.target(t)
                                                        , i = n.i(H.l)(a, "mod", !0);
                                                    e = e || i.offsetHeight,
                                                        i.style.height = e + "px",
                                                        H.j.hasClass(i, "hide") ? H.j.removeClass(i, "hide") : H.j.addClass(i, "hide"),
                                                        setTimeout(function() {
                                                            return i.style.height = ""
                                                        }, 150)
                                                })
                                            })
                                    }),
                                    Wt = {},
                                    n.i(H.g)(c, Wt),
                                    H.e.add(document, "click", function(t) {
                                        var e = H.e.target(t)
                                            , a = n.i(H.f)(e, "action")
                                            , i = n.i(H.f)(e, "stop")
                                            , r = n.i(H.f)(e, "data-currency");
                                        i && H.e.stop(t),
                                        a && Wt[a.attr] && Wt[a.attr](a.node, r && r.attr),
                                        !a && Wt.showChartMask()
                                    }),
                                    H.e.add(document, "click", function(t) {
                                        var e = H.e.target(t)
                                            , n = e.dataset.action
                                            , a = location.pathname;
                                        n && H.e.stop(t),
                                        "go_login" == n && (location.href = "/login?backUrl=" + a),
                                        "go_register" == n && (location.href = "/register?backUrl=" + a)
                                    }),
                                    n.i(H.r)(function() {
                                        if (ft && Qt && (ft.usdrate = Qt),
                                            "margin" == at && _t.marginAccounts) {
                                            if (gt++ % n.i(H.D)(10))
                                                return;
                                            St(),
                                                _t.marginAccounts.coin[0].innerHTML = D.a.marginBalance.trade ? n.i(H.b)(D.a.marginBalance.trade[PAGE_QUOTE], D.a.currencyDataObj[PAGE_QUOTE]["show-precision"]) : n.i(H.b)(0, D.a.currencyDataObj[PAGE_QUOTE]["show-precision"]),
                                                _t.marginAccounts.coin[1].innerHTML = D.a.marginBalance.trade ? n.i(H.b)(D.a.marginBalance.trade[PAGE_COIN], D.a.currencyDataObj[PAGE_COIN]["show-precision"]) : n.i(H.b)(0, D.a.currencyDataObj[PAGE_COIN]["show-precision"]);
                                            var t;
                                            t = !D.a.marginBalance["fl-price"] || 1 * D.a.marginBalance.loan[PAGE_COIN] == 0 && 1 * D.a.marginBalance.loan[PAGE_QUOTE] == 0 ? _t.marginAccounts.coin[2].dataset.text : 1 * D.a.marginBalance["fl-price"] == 0 ? 0 : n.i(H.b)(D.a.marginBalance["fl-price"], X.precision.price),
                                                _t.marginAccounts.coin[2].innerHTML = t,
                                                D.a.marginBalance["risk-rate"] ? D.a.marginFlState[D.a.marginBalance.state] ? (_t.marginAccounts.percent.style.display = "none",
                                                    _t.marginAccounts.fire.style.display = "block") : (_t.marginAccounts.percent.style.display = "",
                                                    _t.marginAccounts.fire.style.display = "none",
                                                    D.a.marginBalance["risk-rate"] >= 1.1 ? _t.marginAccounts.percent.style.width = (D.a.marginBalance["risk-rate"] - 1.1) / .9 * 100 + "%" : _t.marginAccounts.percent.style.width = 0,
                                                    _t.marginAccounts.riskVal.innerHTML = D.a.marginBalance["risk-rate"] >= 2 ? _t.marginAccounts.riskVal.dataset.text : n.i(H.b)(100 * D.a.marginBalance["risk-rate"], 0) + "%") : (_t.marginAccounts.percent.style.display = "",
                                                    _t.marginAccounts.fire.style.display = "none",
                                                    _t.marginAccounts.percent.style.width = "100%",
                                                    _t.marginAccounts.riskVal.innerHTML = _t.marginAccounts.riskVal.dataset.text)
                                        }
                                    }),
                                    St(),
                                    n.i(B.b)(M.a.__ready, {
                                        needTicket: !1
                                    });
                            case 86:
                            case "end":
                                return t.stop()
                        }
                }, t, this)
            }));
            return function() {
                return t.apply(this, arguments)
            }
        }()
            , at = window.PAGE_NAME || "exchange"
            , it = {
            checked: 1
        };
        window.zEmbed = 1;
        var rt = {
            margin: {
                cookies_hash: "HBP_MARGIN_SYMBOLS_HASH",
                cookies_filter: "HBP_MARGIN_SYMBOLS_FILTER"
            },
            exchange: {
                cookies_hash: "HBP_SYMBOLS_HASH",
                cookies_filter: "HBP_SYMBOLS_FILTER"
            }
        }
            , ot = {
            innovation: "NEW_ZONE",
            profession: "PRO_ZONE",
            bifurcation: "FORK_ZONE"
        }
            , ct = rt[at].cookies_hash
            , st = rt[at].cookies_filter
            , ut = {
            rate: "---"
        }
            , lt = {
            ethbtc: 6,
            etcbtc: 6,
            ltcbtc: 6,
            bccbtc: 6
        }
            , dt = (Z.a.handsup(J.c.ws),
            new $.a)
            , pt = void 0
            , ft = void 0
            , mt = document.title
            , gt = 0;
        n.i(B.a)("__userIsLogin", function(t) {
            function e() {
                n = setTimeout(function() {
                    Q.a.Get([]),
                        e()
                }, 2e4)
            }
            it.checked = 0;
            var n = void 0;
            t.info && (Q.a.Get([]),
            "margin" === at && i(),
                e())
        }),
            n.i(B.a)("__ucGetUserInfo", function(t) {
                var e = t.info
                    , a = PAGE_COIN + PAGE_QUOTE
                    , r = D.a.symbolDataObj[a]["symbol-partition"]
                    , o = ot[r];
                "margin" === at ? (i(),
                    !function(t) {
                        if (t) {
                            var e = [183];
                            return t.filter(function(t) {
                                return e.includes(t)
                            }).length
                        }
                    }(e.data.country_id) ? n.i(et.a)("MARGIN") : n.i(K.d)({
                        lang: {},
                        title: "提示",
                        block: "disable_margin",
                        btn: 0
                    })) : o && n.i(et.a)(o)
            }),
            n.i(B.a)("__changeTheme", function(t) {
                var e = t.info;
                tvWidget.setTheme(e)
            });
        var _t = new N.a;
        nt()
    },
    34: function(t, e, n) {
        "use strict";
        function a(t) {
            var e = this
                , n = t || {};
            return n.countTime = n.countTime || 60,
                e.option = n,
                e.countTime = n.countTime,
                e.count = n.countTime,
                e.RemainTime = function() {
                    if (e.ClearRemainTime(),
                            e.count--,
                        e.Callback && e.Callback(e.count),
                        e.count <= 0)
                        return void e.Reset();
                    e.SetRemainTime = setTimeout(e.RemainTime, 1e3)
                }
                ,
                e.Reset = function() {
                    e.count = n.countTime,
                        e.ClearRemainTime(),
                    e.Callback && e.Callback(-1)
                }
                ,
                e.ClearRemainTime = function() {
                    clearTimeout(e.SetRemainTime),
                        e.SetRemainTime = null
                }
                ,
                e
        }
        e.a = a
    },
    35: function(t, e, n) {
        "use strict";
        function a(t) {
            var e = r.e.target(t)
                , a = n.i(r.f)(e, "publicaction");
            n.i(r.f)(e, "stop") && r.e.stop(t),
            a && u[a.attr] && u[a.attr](a.node, t)
        }
        function i() {
            var t = this;
            t.dwcookie = function(t, e) {
                if ("a" == t.nodeName.toLowerCase()) {
                    var a = {
                        name: t.dataset.key,
                        value: t.dataset.value,
                        domain: n.i(c.b)(),
                        path: "/"
                    };
                    t.dataset.time && (a.time = t.dataset.time),
                        r.h.set(a)
                }
            }
                ,
                t.exchange_url = function(t, e) {
                    var n = localStorage.getItem("HBP_EXCHANGE_PATH");
                    n && (r.e.stop(e),
                        location.href = t.dataset.path.replace("[base_quote]", n))
                }
                ,
                t.margin_url = function(t, e) {
                    var n = localStorage.getItem("HBP_MARGIN_PATH");
                    n && (r.e.stop(e),
                        location.href = t.dataset.path.replace("[base_quote]", n))
                }
        }
        var r = n(0)
            , o = n(5)
            , c = n(9)
            , s = new o.a
            , u = {};
        s.Ready(function() {
            !window.publicEventBinded && r.e.add(document, "click", a),
                window.publicEventBinded = 1
        }),
            n.i(r.g)(i, u)
    },
    36: function(t, e, n) {
        "use strict";
        function a(t) {
            var e = t.querySelector("div")
                , n = t.querySelector("div.dia_cont");
            !l && u.e.add(n, "scroll", function() {
                n.scrollTop > 0 ? n.parentNode.querySelector("div").style.display = "block" : n.parentNode.querySelector("div").style.display = "none"
            }),
                e.style.cssText = ";width:560px;height:600px;",
                e.querySelector(".dia_content").style.cssText = ";height:480px;max-height:480px;overflow:hidden;",
                l = 1
        }
        function i(t, e, a) {
            var i = t.dialog.querySelector("div");
            e.disabled || n.i(c.p)({
                data: {
                    type: "PRO"
                }
            }).then(function(e) {
                e.data.success && (i.style.cssText = "",
                    t.Close())
            })
        }
        function r(t) {
            if (!(location.href.indexOf("about") > -1) && t.info) {
                var e = t.info.data;
                n.i(c.q)({
                    params: {
                        type: "PRO"
                    }
                }).then(function(t) {
                    var n = t
                        , r = n.data;
                    r.success && !r.data.state && e.gmt_created < 15054912e5 && (s.b.construct({
                        lang: {},
                        title: "开通火币全球专业站",
                        hiddenClose: 1,
                        block: "fireGlobal"
                    }),
                        s.b.open(a, i))
                })
            }
        }
        var o = n(2)
            , c = n(1)
            , s = n(26)
            , u = n(0)
            , l = void 0;
        n.i(o.a)("__getUserInfo", r),
            n.i(o.a)("__ucGetUserInfo", r)
    },
    37: function(t, e, n) {
        "use strict";
        n.d(e, "b", function() {
            return u
        }),
            n.d(e, "a", function() {
                return d
            });
        var a = n(0)
            , i = n(2)
            , r = n(8)
            , o = document.querySelector("html")
            , c = function() {
            a.j.removeClass(o, "hb-day"),
                a.j.addClass(o, "hb-night"),
                l("hb-night")
        }
            , s = function() {
            a.j.removeClass(o, "hb-night"),
                a.j.addClass(o, "hb-day"),
                l("hb-day")
        }
            , u = function() {
            var t = null;
            try {
                t = localStorage.getItem("theme")
            } catch (e) {
                t = a.j.hasClass(o, "hb-night") ? "hb-night" : "hb-day"
            } finally {
                t = t || (a.j.hasClass(o, "hb-night") ? "hb-night" : "hb-day")
            }
            return t
        }
            , l = function(t, e) {
            if (!t)
                return !1;
            try {
                localStorage.setItem("theme", t),
                    localStorage.getItem("theme")
            } catch (t) {
                console.warn("Theme cannot save")
            }
            if (e) {
                var c = function() {
                    return "hb-night" === t ? ["hb-day", "hb-night"] : ["hb-night", "hb-day"]
                };
                a.j.removeClass(o, c()[0]).addClass(o, c()[1])
            }
            n.i(i.b)(r.a.__changeTheme, t)
        }
            , d = function() {
            return a.j.hasClass(o, "hb-night") ? s() : c()
        }
    },
    38: function(t, e, n) {
        "use strict";
        function a(t, e) {
            E.Ready(function() {
                t ? (h.j.addClass(E.body, "user_is_login"),
                    h.j.removeClass(E.body, "user_not_login")) : (h.j.removeClass(E.body, "user_is_login"),
                    h.j.addClass(E.body, "user_not_login"),
                    n.i(b.a)(),
                e && n.i(_.c)())
            })
        }
        function i(t) {
            n.i(h.k)("head_nav", s()({
                isLogin: t,
                LangPath: _.d
            }, T)),
                r(),
                y.a.cuff(),
                function() {
                    var t = document.querySelectorAll("a")
                        , e = location.hostname.split(".");
                    e.shift();
                    for (var n = t.length; n--; )
                        /otc.huobi.pro/.test(t[n].href) && (t[n].href = t[n].href.replace("otc.huobi.pro", "otc." + e.join(".")))
                }()
        }
        function r() {
            if (E.otc_info_box = E.getElementById("otcGuide"),
                E.otc_info_box && E.getElementById("go-otc")) {
                var t = function() {
                    E.otc_info_box.style.display = "none",
                        h.h.set({
                            name: h.h.get("HB-PRO-TOKEN") ? "otc_login_guide" : "otc_guide",
                            value: !0,
                            domain: n.i(_.b)(),
                            path: "/"
                        })
                };
                h.e.add(E.getElementById("go-otc"), "click", function(e) {
                    t()
                }),
                    h.e.add(E.otc_info_box, "click", function(e) {
                        e.target.className.indexOf("remove-guide") > -1 && t(),
                        "A" === e.target.parentNode.nodeName && t()
                    })
            }
        }
        function o(t) {
            i(t),
                E.selectLang = null,
                E.changeTheme = null,
                h.e.add(document, "click", function(t) {
                    var e = h.e.target(t)
                        , a = n.i(h.l)(e, "select_lang")
                        , i = n.i(h.l)(e, "change_theme")
                        , r = n.i(h.l)(e, "btn_logout")
                        , o = n.i(h.f)(e, "data-lang");
                    if (a ? (E.selectLang = a,
                            h.j.hasClass(a, "open") ? h.j.removeClass(a, "open") : h.j.addClass(a, "open")) : E.selectLang && h.j.removeClass(E.selectLang, "open"),
                            i) {
                        var c = i.querySelector("i").className;
                        i.querySelector("i").className = "hb_icon_day" === c ? "hb_icon_night" : "hb_icon_day",
                            n.i(v.a)()
                    }
                    r && (n.i(b.c)(),
                        n.i(b.d)(),
                        h.e.stop(t)),
                    o && (location.href = n.i(_.d)(o.attr.toLowerCase()))
                })
        }
        var c = n(29)
            , s = n.n(c)
            , u = n(65)
            , l = n.n(u)
            , d = n(25)
            , p = n.n(d)
            , f = n(5)
            , m = n(2)
            , g = (n(8),
            n(3))
            , _ = (n(31),
            n(9))
            , b = n(20)
            , y = n(19)
            , h = n(0)
            , v = n(37)
            , k = n(15)
            , w = (n.n(k),
            n(36),
        localStorage.lang && localStorage.lang.toLowerCase())
            , T = {
            langList: p()(g.a),
            langListText: l()(g.a),
            langText: g.a[w || g.b],
            lang: w,
            userInfo: "",
            currencyArr: [],
            theme: function(t) {
                var e = void 0;
                try {
                    e = localStorage.getItem(t)
                } catch (t) {
                    e = ""
                }
                return e
            }("theme") || "hb-night",
            page: window.PAGE_NAME
        }
            , E = new f.a;
        n.i(m.a)("__userIsLogin", function(t) {
            var e = t.info
                , r = t.type;
            e ? ("__userIsLogin" === r && n.i(b.b)(),
                a(!0)) : STORE.needTicket ? a(!1, !0) : a(!1),
                E.Ready(function() {
                    i(e)
                })
        }),
            n.i(m.a)("__ucGetUserInfo", function(t) {
                var e = t.info;
                e.success && E.Ready(function() {
                    T.userInfo = e.data.phone || e.data.email,
                        i(!0)
                })
            }),
            n.i(m.a)("__ucLogout", function(t) {
                t.info;
                a(!1, !0),
                    setTimeout(function() {
                        location.reload()
                    }, 80)
            }),
            E.Ready(function() {
                o(!1)
            })
    },
    39: function(t, e, n) {
        "use strict";
        var a = n(12)
            , i = n.n(a)
            , r = n(46)
            , o = (n.n(r),
            n(54))
            , c = n.n(o)
            , s = n(15)
            , u = (n.n(s),
            n(7))
            , l = n(0)
            , d = n(11)
            , p = n(1)
            , f = n(4)
            , m = n(3)
            , g = n(16)
            , _ = new g.a({
            tryVoice: 3,
            countTime: 60,
            api: p.x
        })
            , b = new g.a({
            countTime: 60,
            api: p.y
        })
            , y = n.i(l.m)()
            , h = n.i(l.n)(c.a)
            , v = void 0
            , k = void 0
            , w = new f.a;
        e.a = function() {
            function t(t) {
                return t && t(),
                    v.Open(),
                    v
            }
            function e(t) {
                g = t,
                    y._keys(t.lang),
                    E = 0,
                    A = 0;
                var e = {
                    lang: y.getLang,
                    currency: t.currency,
                    action_type: t.action,
                    page: {
                        title: t.title
                    },
                    resetPwd: m.c.main + "/p/user/securityCenter/resetAssetPwd",
                    btn: {
                        submit: y.getLang("确定")
                    },
                    UI: window.UI,
                    no_verify: t.no_verify,
                    addr_tag: t.addr_tag,
                    address: t.no_verify && t.address
                };
                v = v || new u.a({
                        html: n.i(l.d)(n.i(u.b)(h.html).html, e)
                    }),
                    x = null,
                k && (v.dialog.innerHTML = n.i(l.d)(n.i(u.b)(h.html).fc, e)),
                    L = n.i(l.s)(v.dialog.querySelectorAll("input")).concat(n.i(l.s)(v.dialog.querySelectorAll("button"))),
                    L.forEach(function(t) {
                        n.i(l.g)(d.a, t)
                    }),
                !k && l.e.add(v.dialog, "click", c),
                !k && v.callback(a),
                    k = 1,
                    x = n.i(d.b)(L),
                    x.dom.pro_dia_address_address.disabled = !0,
                    x.dom.pro_dia_address_address.value = e.no_verify && e.address ? e.address : ""
            }
            function a(t) {
                var e = {};
                if (!A) {
                    if ("submit" == t.type) {
                        if (x = n.i(d.b)(L),
                            !x.data.pro_dia_address_address && x.dom.pro_dia_address_address)
                            return x.dom.pro_dia_address_address.error(g.currency.toUpperCase() + " " + y.getLang("提币地址没有填写"));
                        if (!x.data.pro_dia_address_alias && x.dom.pro_dia_address_alias)
                            return x.dom.pro_dia_address_alias.error(y.getLang("名称没有填写"));
                        if (!x.data.sms_code && x.dom.sms_code)
                            return x.dom.sms_code.error(y.getLang("短信验证码没有填写"));
                        if (!S && x.dom.email_code)
                            return x.dom.email_code.error(y.getLang("请先获取邮箱验证码"));
                        if (!x.data.email_code && x.dom.email_code)
                            return x.dom.email_code.error(y.getLang("请输入邮箱验证码"));
                        if (!x.data.ga_code && x.dom.ga_code)
                            return x.dom.ga_code.error(y.getLang("谷歌验证码没有填写"));
                        x.data.sms_code && (e.smsCode = x.data.sms_code),
                        x.data.ga_code && (e.gaCode = x.data.ga_code),
                        x.data.email_code && (e.emailCode = x.data.email_code),
                            g.no_verify ? delete p.C.defaults.headers.common.authData : p.C.defaults.headers.common.authData = encodeURIComponent(i()(e)),
                            A = 1,
                            "add_address" == g.action ? n.i(p.D)({
                                data: {
                                    address: x.data.pro_dia_address_address,
                                    tag: g.addr_tag || null,
                                    alias: x.data.pro_dia_address_alias,
                                    currency: g.currency,
                                    level: "default"
                                }
                            }).then(function(t) {
                                var e = t.data;
                                A = 0,
                                    "ok" === e.status ? (v.Close(),
                                    g.goback && g.goback()) : w.Error(t.data["err-msg"])
                            }) : g.goback && g.goback(x, function() {
                                A = 0
                            }, v.Close)
                    }
                    "close" == t.type && (_.Reset(),
                        b.Reset())
                }
            }
            function r() {}
            function o() {}
            function c(t) {
                var e = l.e.target(t)
                    , a = n.i(l.f)(e, "action");
                n.i(l.f)(e, "stop") && l.e.stop(t),
                a && T[a.attr] && T[a.attr](a.node, e, v.dialog)
            }
            function s() {
                var t = this;
                t.getSms = function(t) {
                    t.dataset.voice;
                    _.btn = v.dialog.querySelector('[act="sms_btn_wrap"]'),
                        _.btnText = ['<a href="" action="getSms" stop="1">' + y.getLang("点击获取") + "</a>", "<span>$" + y.getLang("秒后重试") + "</span>", '<a href="" action="getSms" stop="1">' + y.getLang("重新获取") + "</a>", '<a href="" action="getSms" stop="1">' + y.getLang("重新获取") + "</a> " + y.getLang("或者试试") + ' <a href="" action="getSms" stop="1" data-voice="1">' + y.getLang("语音验证码") + "</a>"],
                        _.Send({
                            use_type: "VERIFY_SETTING_POLICY"
                        })
                }
                    ,
                    t.getEmail = function(t) {
                        b.btn = v.dialog.querySelector('[act="email_btn_wrap"]'),
                            b.btnText = ['<a href="" action="getEmail" stop="1">' + y.getLang("点击获取") + "</a>", "<span>$" + y.getLang("秒后重试") + "</span>", '<a href="" action="getEmail" stop="1">' + y.getLang("重新获取") + "</a>", '<a href="" action="getEmail" stop="1">' + y.getLang("重新获取") + "</a>"],
                            b.Send({
                                use_type: "VERIFY_SETTING_POLICY"
                            })
                    }
                    ,
                    b.Then = function(t) {
                        var e = t.data;
                        e.success ? (S = 1,
                        x && x.dom.email_code.clear()) : w.Error(e.message)
                    }
                    ,
                    _.Then = function(t) {
                        var e = t.data;
                        e.success ? (E = 1,
                        x && x.dom.sms_code.clear()) : w.Error(e.message)
                    }
            }
            function f(t, e, n) {
                return y._keys(e),
                {
                    del: y.getLang("删除安全地址")
                }[n] || y.getLang("添加提币地址")
            }
            var g = void 0
                , T = {}
                , E = void 0
                , S = void 0
                , L = void 0
                , x = void 0
                , A = void 0;
            return n.i(l.g)(s, T),
                {
                    open: t,
                    title: f,
                    construct: e,
                    updateData: r,
                    callUpdate: o
                }
        }()
    },
    399: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        function GetData(t) {
            for (var e = {}, n = {}, a = [], i = void 0, r = void 0, o = void 0, c = t.length; c--; )
                i = t[c],
                    r = t[c].getAttribute("name"),
                    o = i.type,
                    i.isHidden = IsHidden(i),
                r && ("text" === o || "password" === o || "hidden" === o || o.indexOf("select") > -1 || "textarea" === o || "file" === o ? (e[r] = Trim(i.value),
                    n[r] = i) : "checkbox" === o ? (e[r] = e[r] || [],
                    n[r] = n[r] || [],
                    n[r].push(i),
                !0 === i.checked && e[r].push(i.value)) : "radio" === o && (n[r] = i,
                !0 === i.checked && (e[r] = i.value)),
                    a.unshift({
                        name: r,
                        value: e[r],
                        type: o
                    }));
            return [e, n, a]
        }
        function Trim(t) {
            return t.replace(/^\s+/, "").replace(/\s+$/, "")
        }
        function FilterEmpty(t) {
            for (var e in t)
                !t[e] && delete t[e];
            return t
        }
        function IsHidden(t) {
            return null === t.offsetParent
        }
        function FormValidator(option) {
            function Mode(dataType) {
                function matchOption(t) {
                    return _this.RegList[t]
                }
                function matchMode(t, e) {
                    var n = t.match(e);
                    return n.shift(),
                        n
                }
                var _modes = {
                    regExp: {
                        code: 2,
                        reg: /\/.+\//g
                    },
                    extend: {
                        code: 3,
                        reg: /^(.+?){(\d+),(\d+)}$/
                    },
                    and: {
                        code: 4,
                        reg: /^(.+?)\&\&(.+?)$/
                    },
                    or: {
                        code: 5,
                        reg: /^(.+?)\|\|(.+?)$/
                    }
                }
                    , _mode = {};
                return !!dataType && (_mode = matchOption(dataType) ? {
                        code: 1,
                        reg: [dataType]
                    } : _modes.regExp.reg.test(dataType) ? {
                        code: _modes.regExp.code,
                        reg: [eval(dataType)]
                    } : _modes.extend.reg.test(dataType) ? {
                        code: _modes.extend.code,
                        reg: matchMode(dataType, _modes.extend.reg)
                    } : _modes.or.reg.test(dataType) ? {
                        code: _modes.or.code,
                        reg: matchMode(dataType, _modes.or.reg)
                    } : _modes.and.reg.test(dataType) ? {
                        code: _modes.and.code,
                        reg: matchMode(dataType, _modes.and.reg)
                    } : {
                        code: 0
                    })
            }
            var _this = this
                , _op = option || {};
            return _op.ignoreHidden = void 0 === _op.ignoreHidden || _op.ignoreHidden,
                _this.option = _op,
                _this.Form = _op.form,
                _this.MsgTip = _op.formTip,
                _this.RegList = {
                    "*": /[\w\W]+/,
                    p: /^[0-9]{5,11}$/,
                    pwd: /(?!\d+$)[\dA-Za-z\W]{8,20}$/,
                    passport: /^(?!_\-)(?!.*?_$)([a-zA-Z0-9\s\,\'.]){5,20}$/,
                    pinyin: /[A-Za-z]$/,
                    e: /^[\.a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
                    compare: function(t, e) {
                        var n = e.compare;
                        return t ? t === _this.FormDataCommon[n] ? 0 : 2 : 1
                    }
                },
                _this.Trim = Trim,
                _this.GetData = GetData,
                _this.Inputs = _this.Form.querySelectorAll("input,select,textarea"),
                _this.GetFormData = function() {
                    _this.Inputs = _this.option.dynamicNode ? _this.Form.querySelectorAll("input,select,textarea") : _this.Inputs,
                        _this._formData = _this.GetData(_this.Inputs),
                        _this.FormData = _this._formData[2],
                        _this.FormDataCommon = _this._formData[0]
                }
                ,
                _this.GetFormInput = function() {
                    _this.FormInput = _this._formData[1],
                        _this.FormButton = _this.Form.querySelector('[type="submit"]')
                }
                ,
                _this.GetInputInfo = function() {
                    var t = {}
                        , e = {}
                        , n = {}
                        , a = void 0;
                    for (var i in _this.FormInput)
                        _this.FormInput.hasOwnProperty(i) && (a = isDOM(_this.FormInput[i]) ? _this.FormInput[i] : _this.FormInput[i][0],
                            n[i] = {
                                dataType: a.getAttribute("data-datatype"),
                                msg: {
                                    nullMsg: a.getAttribute("data-msg-null"),
                                    errorMsg: a.getAttribute("data-msg-error")
                                },
                                dataNumMin: a.getAttribute("data-num-min"),
                                dataNumMax: a.getAttribute("data-num-max"),
                                compare: a.getAttribute("data-compare"),
                                ele: a,
                                form: _this.Form,
                                mode: Mode(a.getAttribute("data-datatype"))
                            },
                            t[i] = n[i].dataType,
                            e[i] = n[i].msg);
                    _this.MsgList = e,
                        _this.TypeList = t,
                        _this.InputInfo = n
                }
                ,
                _this.qualified = !0,
                _this.Auth = function() {
                    function t(t) {
                        return _this.RegList[t]
                    }
                    function e(t, e, n, a, i) {
                        var r = void 0 === t ? "undefined" : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(t);
                        return "function" === r ? t(o, n, a) : e && _this.Trim(e) && _this.RegList["*"].test(e) ? t.test(e) ? 0 : 2 : 1
                    }
                    function n(t, e, n) {
                        return t && _this.Trim(t) && _this.RegList["*"].test(t) ? t.length >= e && t.length <= n ? 0 : 2 : 1
                    }
                    for (var a = void 0, i = void 0, r = void 0, o = void 0, c = void 0, s = void 0, u = 0, l = _this.FormData.length, d = l; u < l; u++) {
                        if (d--,
                                r = _this.FormData[u].name,
                                i = _this.FormInput[r],
                                o = "object" === __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(_this.FormData[u].value) ? _this.FormData[u].value[0] : _this.FormData[u].value,
                                c = _this.AuthNow && _this.AuthNow(r),
                                _this.AuthInput = i,
                                s = c ? {
                                    code: 9,
                                    reg: c
                                } : _this.InputInfo[r].mode)
                            switch (s.code) {
                                case 1:
                                    a = e(t(s.reg[0]), o, _this.InputInfo[r], _this);
                                    break;
                                case 2:
                                    a = e(s.reg[0], o, _this.InputInfo[r], _this);
                                    break;
                                case 3:
                                    a = 0 === n(o, s.reg[1], s.reg[2]) ? e(t(s.reg[0]), o, _this.InputInfo[r], _this) : n(o, s.reg[1], s.reg[2]);
                                    break;
                                case 4:
                                    for (var p = 0; p < s.reg.length; p++) {
                                        var f = e(t(s.reg[p]), o, _this.InputInfo[r], _this);
                                        if (f > 0) {
                                            a = f;
                                            break
                                        }
                                        a = 0
                                    }
                                    break;
                                case 5:
                                    for (var m = 0; m < s.reg.length && 0 !== (a = e(t(s.reg[m]), o, _this.InputInfo[r], _this)); m++)
                                        ;
                                    break;
                                case 9:
                                    a = e(s.reg, o, _this.InputInfo[r], _this);
                                    break;
                                default:
                                    console.warn("未匹配到校验规则", _this.InputInfo[r])
                            }
                        if (_op.ignoreHidden && i.isHidden && (a = 0),
                                a) {
                            _this.qualified = !1,
                                _this.MsgShow(i, r, a);
                            break
                        }
                        d || (_this.qualified = !0)
                    }
                    _this.qualified && _this.SubmitForm()
                }
                ,
                _this.MsgShow = function(t, e, n) {
                    var a = _this.MsgList[e];
                    switch (n) {
                        case 1:
                            _this.Msg = a.nullMsg;
                            break;
                        case 2:
                            _this.Msg = a.errorMsg
                    }
                    _this.Then && _this.Then(_this.Form, {
                        type: "showMsg",
                        resultCode: n,
                        msgList: a,
                        msgNow: _this.Msg,
                        authInput: _this.AuthInput,
                        ele: _this.FormInput[e],
                        inputs: _this.FormInput,
                        button: _this.FormButton
                    }, _this),
                    _this.MsgTip && (_this.MsgTip.innerHTML = _this.Msg)
                }
                ,
                _this.SubmitForm = function() {
                    _this.qualified && _this.Then && _this.Then(_this.Form, {
                        type: "submit",
                        formDataSerialize: _this.FormData,
                        formData: _this.option.filterEmpty ? FilterEmpty(_this.FormDataCommon) : _this.FormDataCommon,
                        authInput: _this.AuthInput,
                        resultCode: 0,
                        inputs: _this.FormInput,
                        button: _this.FormButton
                    }, _this)
                }
                ,
                function() {
                    _this.Form.addEventListener("submit", function(t) {
                        _this.GetFormData(),
                            _this.GetFormInput(),
                            _this.GetInputInfo(),
                            _this.Auth(),
                            t.stopPropagation(),
                            t.preventDefault()
                    })
                }(),
                _this
        }
        __webpack_require__.d(__webpack_exports__, "a", function() {
            return FormValidator
        });
        var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(10)
            , __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__)
            , isDOM = "object" === ("undefined" == typeof HTMLElement ? "undefined" : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(HTMLElement)) ? function(t) {
            return t instanceof HTMLElement
        }
            : function(t) {
            return t && "object" === (void 0 === t ? "undefined" : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(t)) && 1 === t.nodeType && "string" == typeof t.nodeName
        }
    },
    4: function(t, e, n) {
        "use strict";
        function a() {
            var t = this;
            t.isInit = !1,
                t.Show = function(e, n, a) {
                    t.isInit || t.CreateBox(),
                        t.contentIn.innerHTML = e,
                        t.AutoHide(n);
                    var i = a || "ok";
                    t.contentIcon.className = "ok" === i ? "hb_icon_toast_success" : "hb_icon_toast_failed"
                }
                ,
                t.Error = function(e, n) {
                    t.Show(e, n, "error")
                }
                ,
                t.Hide = function() {
                    t.toastBox && (t.toastBox.remove ? t.toastBox.remove() : t.toastBox.parentNode.removeChild(t.toastBox),
                        t.isInit = !1)
                }
                ,
                t.CreateBox = function() {
                    var e = document.body;
                    t.toastBox = document.createElement("div"),
                        t.toastContent = document.createElement("div"),
                        t.contentIn = document.createElement("p"),
                        t.contentIcon = document.createElement("i"),
                        t.toastBox.className = "com_toast",
                        t.toastContent.className = "toast_content",
                        t.toastContent.appendChild(t.contentIcon),
                        t.toastContent.appendChild(t.contentIn),
                        t.toastBox.appendChild(t.toastContent),
                        e.appendChild(t.toastBox),
                        t.InitEvent(),
                        t.isInit = !0
                }
                ,
                t.AutoHide = function(e) {
                    t.autoHide && clearTimeout(t.autoHide),
                        t.autoHide = setTimeout(function() {
                            t.Hide()
                        }, e || 5e3)
                }
                ,
                t.InitEvent = function() {
                    t.toastBox.onclick = function(e) {
                        "toast_close" === e.target.className && t.Hide()
                    }
                }
        }
        n.d(e, "a", function() {
            return a
        });
        var i = n(28);
        n.n(i)
    },
    40: function(t, e, n) {
        "use strict";
        var a = n(29)
            , i = n.n(a)
            , r = n(47)
            , o = (n.n(r),
            n(55))
            , c = n.n(o)
            , s = n(7)
            , u = n(0)
            , l = n(3)
            , d = n(1)
            , p = n(16)
            , f = n(4)
            , m = n(11)
            , g = n.i(u.m)()
            , _ = n.i(u.n)(c.a)
            , b = void 0
            , y = void 0
            , h = {
            btc: "/index.php?a=btc_",
            ltc: "/index.php?a=ltc_"
        }
            , v = new f.a
            , k = void 0
            , w = void 0
            , T = new p.a({
            tryVoice: 3,
            countTime: 60,
            api: d.x
        })
            , E = new p.a({
            countTime: 60,
            api: d.y
        });
        e.a = function() {
            function t(t, e) {
                return C = e,
                t && t(b.dialog),
                    b.Open(),
                    b
            }
            function e(t) {
                return b.Close(t),
                    b
            }
            function a(t) {
                var e = t.block || "loading"
                    , a = {
                    PHONE: "关闭手机验证后24小时内禁止提币。",
                    EMAIL: "关闭邮箱验证后24小时内禁止提币。",
                    GA: "关闭谷歌验证器验证后24小时内禁止提币。"
                };
                S = t,
                    g._keys(t.lang),
                    k = null,
                    w = 0;
                var i = {
                    lang: g.getLang,
                    item: S.item,
                    data: S.data,
                    currency: t.currency,
                    page: {
                        title: g.getLang(t.title),
                        titleMore: "disable" == S.action ? g.getLang(a[S.itemkey]) : ""
                    },
                    huobifinance: h[t.currency] ? l.c.main + "/" + e.replace("gohuobi", "") + h[t.currency] + e.replace("gohuobi", "") : l.c.main + "/finance/innovate/",
                    btn: !!t.btn && (1 == t.btn ? {
                        submit: g.getLang("确定")
                    } : {
                        cancel: g.getLang("取消"),
                        submit: g.getLang("确定")
                    })
                };
                return b = b || new s.a({
                        html: n.i(u.d)(n.i(s.b)(_.html).html, i)
                    }),
                y && (b.dialog.innerHTML = n.i(u.d)(n.i(s.b)(_.html).fc, i)),
                    O = b.dialog.querySelector("#dia_close"),
                    O.style.display = S.hiddenClose ? "none" : "",
                    b.dialog.querySelector('[block="content"]').innerHTML = n.i(u.d)(_.block[e], S.content || i),
                !y && !S.stopEvent && u.e.add(b.dialog, "click", r),
                    b.callback(o),
                    y = 1,
                    L = n.i(u.s)(b.dialog.querySelectorAll("input")).concat(n.i(u.s)(b.dialog.querySelectorAll("button"))),
                    L.forEach(function(t) {
                        "pro_dia_address_amount" === t.getAttribute("pro_name") && (u.e.add(t, "keydown", function() {
                            b.dialog.querySelector('[amout="out_amount"]').innerHTML = Num(1 * t.value ? 1 * t.value : 0, STORE.currencyDataObj[S.currency]["show-precision"])
                        }),
                            u.e.add(t, "keyup", function() {
                                b.dialog.querySelector('[amout="out_amount"]').innerHTML = Num(1 * t.value ? 1 * t.value : 0, STORE.currencyDataObj[S.currency]["show-precision"])
                            })),
                            n.i(u.g)(m.a, t)
                    }),
                    T.btn = b.dialog.querySelector('[act="sms_btn_wrap"]'),
                    T.btnText = ['<a href="" action="getSms" stop="1">' + g.getLang("点击获取") + "</a>", "<span>$" + g.getLang("秒后重试") + "</span>", '<a href="" action="getSms" stop="1">' + g.getLang("重新获取") + "</a>", '<a href="" action="getSms" stop="1">' + g.getLang("重新获取") + "</a> " + g.getLang("或者试试") + ' <a href="" action="getSms" stop="1" data-voice="1">' + g.getLang("语音验证码") + "</a>"],
                    E.btn = b.dialog.querySelector('[act="email_btn_wrap"]'),
                    E.btnText = ['<a href="" action="getEmail" stop="1">' + g.getLang("点击获取") + "</a>", "<span>$" + g.getLang("秒后重试") + "</span>", '<a href="" action="getEmail" stop="1">' + g.getLang("重新获取") + "</a>", '<a href="" action="getEmail" stop="1">' + g.getLang("重新获取") + "</a>"],
                S.fired && (E.fire(),
                    T.fire()),
                    b
            }
            function r(t) {
                var e = u.e.target(t)
                    , a = n.i(u.f)(e, "action");
                n.i(u.f)(e, "stop") && u.e.stop(t),
                a && f[a.attr] && f[a.attr](a.node, e, b.dialog)
            }
            function o(t) {
                var a = {};
                if (!w) {
                    if ("submit" == t.type) {
                        if (k = n.i(m.b)(L),
                            !x && k.dom.sms_code)
                            return k.dom.sms_code.error(g.getLang("请先获取短信验证码"));
                        if (!k.data.sms_code && k.dom.sms_code)
                            return k.dom.sms_code.error(g.getLang("短信验证码没有填写"));
                        if (!A && k.dom.email_code)
                            return k.dom.email_code.error(g.getLang("请先获取邮箱验证码"));
                        if (!k.data.email_code && k.dom.email_code)
                            return k.dom.email_code.error(g.getLang("请输入邮箱验证码"));
                        if (!k.data.ga_code && k.dom.ga_code)
                            return k.dom.ga_code.error(g.getLang("谷歌验证码没有填写"));
                        if (!k.data.auth_code && k.dom.auth_code)
                            return k.dom.auth_code.error(g.getLang("验证码没有填写"));
                        k.data.sms_code && (a.sms_code = k.data.sms_code),
                        k.data.ga_code && (a.ga_code = k.data.ga_code),
                        k.data.email_code && (a.email_code = k.data.email_code),
                        k.data.auth_code && (a.auth_code = k.data.auth_code),
                            w = 1,
                            "verify" === S.action ? n.i(d.z)({
                                data: i()({
                                    use_type: S.use_type
                                }, a)
                            }).then(function(t) {
                                var n = t.data;
                                n.success ? (S.success && S.success(n.data, b, a),
                                    e()) : (w = 0,
                                    v.Error(n.message))
                            }) : S.success && S.success(i()({
                                use_type: S.use_type || "VERIFY_SETTING_POLICY"
                            }, a), b, function(t) {
                                w = 0,
                                !t && e()
                            })
                    }
                    "close" == t.type && (T.Reset(),
                        E.Reset(),
                    S.dialogCloseAfter && S.dialogCloseAfter())
                }
            }
            function c() {
                var t = this;
                t.close = e,
                    t.btn_submit = function() {
                        C && C(b)
                    }
                    ,
                    t.getSms = function(t) {
                        var e = !!t.dataset.voice
                            , n = {
                            use_type: S.use_type || "VERIFY_SETTING_POLICY",
                            voice: e
                        };
                        "LOGIN" === S.use_type && (n.token = S.data.token),
                            T.Send(n)
                    }
                    ,
                    t.getEmail = function(t) {
                        var e = {
                            use_type: S.use_type || "VERIFY_SETTING_POLICY"
                        };
                        "LOGIN" === S.use_type && (e.token = S.data.token),
                            E.Send(e)
                    }
                    ,
                    E.Then = function(t) {
                        var e = t.data;
                        e.success ? (A = 1,
                        k && k.dom.email_code.clear()) : v.Error(e.message)
                    }
                    ,
                    T.Then = function(t) {
                        var e = t.data;
                        e.success ? (x = 1,
                        k && k.dom.sms_code.clear()) : v.Error(e.message)
                    }
            }
            function p(t, e) {
                return g._keys(e),
                    g.getLang("安全验证")
            }
            var f = {}
                , S = void 0
                , L = void 0
                , x = void 0
                , A = void 0
                , O = void 0
                , C = void 0;
            return n.i(u.g)(c, f),
                {
                    title: p,
                    open: t,
                    close: e,
                    construct: a
                }
        }()
    },
    400: function(t, e, n) {
        "use strict"
    },
    402: function(t, e, n) {
        "use strict";
        n(0),
            n(191),
            n(5),
            n(4)
    },
    404: function(t, e, n) {
        "use strict";
        function a(t, e) {
            if (t) {
                p = e;
                var u = d[t]
                    , l = {
                    hiddenClose: 1,
                    hiddenFoot: 1,
                    block: "agreement",
                    agree: u.key
                };
                return n.i(s.i)(l, u, {
                    lang: LANG.dialog
                }),
                    n.i(o.q)({
                        params: {
                            type: u.key
                        }
                    }).then(function(t) {
                        var e = t.data;
                        e.success && (e.data.state ? p && a(p) : (c.b.construct(l),
                            c.b.open(i, r)))
                    }),
                    c.b
            }
        }
        function i(t) {
            var e = t.querySelector("div")
                , n = t.querySelector("div.dia_cont");
            !m && s.e.add(n, "scroll", function() {
                n.scrollTop > 0 ? n.parentNode.querySelector("div").style.display = "block" : n.parentNode.querySelector("div").style.display = "none"
            }),
                e.style.cssText = ";width:560px;height:auto;",
                e.querySelector(".dia_content").style.cssText = ";height:auto;max-height:none;overflow:hidden;",
                m = 1
        }
        function r(t, e, i) {
            var r = t.dialog.querySelector("div");
            if (!e.disabled) {
                var c = t.dialog.querySelector('[name="agree"]');
                if (i.dia_checkbox && !c.checked)
                    return void f.Error(LANG.dialog["请勾选用户协议"], 1e3);
                n.i(o.p)({
                    data: {
                        type: i.agree
                    }
                }).then(function(e) {
                    e.data.success && (r.style.cssText = "",
                        t.Close(),
                    p && a(p))
                })
            }
        }
        var o = n(1)
            , c = n(26)
            , s = n(0)
            , u = n(14)
            , l = n(4)
            , d = {
            PRO: {
                key: "PRO",
                value: "PRO",
                title: "Pro站协议",
                dia_content: "",
                dia_button: "我已阅读并同意上述协议"
            },
            SEGWIT2X: {
                key: "SEGWIT2X",
                title: "SegWit2X分叉协议",
                dia_content: "",
                dia_button: "我已了解上述风险"
            },
            MARGIN: {
                key: "MARGIN",
                title: "杠杆交易协议",
                dia_content: "P_dialog_agreement_margin",
                dia_button: "我已阅读并同意上述协议"
            },
            MAIN_ZONE: {
                key: "MAIN_ZONE",
                title: "开通主区交易",
                dia_content: "P_dialog_agreement_main",
                dia_button: "同意开通",
                dia_checkbox: "我已了解并自愿承担上述风险"
            },
            NEW_ZONE: {
                key: "NEW_ZONE",
                title: "开通创新区交易",
                dia_content: "P_dialog_agreement_new",
                dia_button: "同意开通",
                dia_checkbox: "我已了解并自愿承担上述风险"
            },
            PRO_ZONE: {
                key: "PRO_ZONE",
                title: "开通专业区交易",
                dia_content: "P_dialog_agreement_pro",
                dia_button: "同意开通",
                dia_checkbox: "我已了解并自愿承担上述风险"
            },
            FORK_ZONE: {
                key: "FORK_ZONE",
                title: "开通分叉区交易",
                dia_content: "P_dialog_agreement_fork",
                dia_button: "同意开通",
                dia_checkbox: "我已了解并自愿承担上述风险"
            }
        }
            , p = void 0
            , f = (new u.a,
            new l.a)
            , m = void 0;
        e.a = a
    },
    405: function(t, e, n) {
        "use strict";
        function a(t) {
            return t.rep || t.subbed || t.ch || ""
        }
        function i(t, e) {
            var n = void 0;
            if (!t)
                return void console.error("MateSymbol: ChannelId is not defined");
            for (var a in e)
                if (e.hasOwnProperty(a) && t.indexOf(e[a]) > -1) {
                    n = e[a];
                    break
                }
            return n
        }
        n.d(e, "a", function() {
            return a
        }),
            n.d(e, "b", function() {
                return i
            })
    },
    407: function(t, e, n) {
        "use strict";
        function a() {
            function t(t, e) {
                var i = n.i(m.y)(t, "dl");
                delete a[e][t.dataset.symbol],
                "marked" == a.filterKey && (i.parentNode.removeChild(i),
                a.coin_list_dom.querySelector("dl") || a.render()),
                    t.dataset.marked = 0
            }
            function e(t, e) {
                a[e][t.dataset.symbol] = "marked",
                    t.dataset.marked = 1
            }
            var a = this;
            a.usersort = function(t) {
                t.dataset.sortKey;
                a.sort = a.sortKey == t.dataset.sortKey ? !a.sort : 1,
                    a.sortKey = t.dataset.sortKey,
                    a.sortNode = t.querySelector("i"),
                    a.render()
            }
                ,
                a.clear_key = function() {
                    a.search_keyword.value = ""
                }
                ,
                a.switch_quote = function(t) {
                    a.priceQuote = "btc" == a.priceQuote ? "cny" : "btc",
                        a.setPriceQuote(),
                        a.render()
                }
                ,
                a.userfilter = function(t) {
                    a.filterKey = t.dataset.filterKey,
                        localStorage.setItem(x, a.filterKey),
                        a.setFilter(),
                        a.render()
                }
                ,
                a.showmarked = function(t) {
                    a.filterKey = "marked",
                        localStorage.setItem(x, a.filterKey),
                        a.setFilter(),
                        a.render()
                }
                ,
                a.gourl = function(t) {
                    location.href = localStorage.root + t.dataset.symbolPath + "/" + window.TRADE_TYPE.toLowerCase() + "/"
                }
                ,
                a.mark = function(n) {
                    var i = 1 * n.dataset.marked ? k._45 : k._46
                        , r = 1 * n.dataset.marked ? t : e;
                    n.className = "hb_icon_marked breathe",
                        a.isLogin ? i({
                            data: {
                                trading_pair: n.dataset.symbol,
                                website: "PRO"
                            }
                        }).then(function(t) {
                            t.data.success ? r(n, "coinList") : E.Show(t.data.message, 3e3),
                                n.className = 1 * n.dataset.marked ? "hb_icon_marked" : "hb_icon_unmarked"
                        }) : (r(n, "localData"),
                            n.className = 1 * n.dataset.marked ? "hb_icon_marked" : "hb_icon_unmarked",
                            localStorage.setItem("mark_symbol", f()(a.localData)))
                }
        }
        function i() {
            function t(t) {
                return (1 * t).toString()
            }
            var e = this;
            e.setPriceQuote = function() {
                localStorage.setItem("priceQuote", e.priceQuote),
                    e.switchQuote.className = "cny" === e.priceQuote ? e.switchQuote.className.replace(/\sswitch_wrap_cur/g, "") + " switch_wrap_cur" : e.switchQuote.className.replace(/\sswitch_wrap_cur/g, ""),
                    e.new_price_dom.innerHTML = e.new_price_dom.dataset.text + ("cny" !== e.priceQuote || "zh-cn" != localStorage.lang && "zh-hk" != localStorage.lang ? "" : "(CNY)"),
                    e.render()
            }
                ,
                e.filter = function(t) {
                    var n = []
                        , a = []
                        , i = []
                        , r = []
                        , o = e.coinList || e.localData
                        , c = {
                        price: "cny" !== e.priceQuote || "zh-cn" != localStorage.lang && "zh-hk" != localStorage.lang ? "close" : "cnyClose",
                        rate: "rate"
                    };
                    if (e.resetSort(),
                        !e.inited && ("marked" === e.filterKey && !o[(PAGE_COIN + PAGE_QUOTE).toLowerCase()] || "marked" !== e.filterKey && e.filterKey !== PAGE_QUOTE.toLowerCase()) && (e.filterKey = PAGE_QUOTE.toLowerCase(),
                            e.setFilter()),
                            t.forEach(function(t) {
                                b.a[L.obj][t.symbol] && ("marked" != e.filterKey ? t["quote-currency"] === e.filterKey && (n.push(t),
                                    a.push(t["base-currency"] + t["quote-currency"])) : o[t.symbol] && (n.push(t),
                                    a.push(t["base-currency"] + t["quote-currency"])))
                            }),
                        "mgt" == e.sortKey) {
                        for (var s = 0, u = e.symbolDataArr.length; s < u; s++)
                            for (var l = 0, d = n.length; l < d; l++)
                                n[l].symbol === e.symbolDataArr[s] && r.push(n[l]);
                        n = r
                    } else
                        "coin" == e.sortKey ? (a.sort(),
                        e.sort && a.reverse(),
                            a.forEach(function(t) {
                                n.forEach(function(e) {
                                    t == e["base-currency"] + e["quote-currency"] && i.push(e)
                                })
                            }),
                            n = i) : (a = [],
                            i = [],
                            n.forEach(function(t) {
                                e.ticker[t.symbol] && void 0 !== e.ticker[t.symbol][c[e.sortKey]] ? i.push(t) : a.push(t)
                            }),
                        e.orderBy[e.sortKey] && i.sort(e.orderBy[e.sortKey]),
                            n = i.concat(a));
                    return n
                }
                ,
                e.render = function() {
                    if (e.isLogin && !e.coinList)
                        return setTimeout(e.render, 200);
                    e.coin_list_dom.innerHTML = n.i(m.d)(e.coin_list_html, {
                        symbol: e.symbolData,
                        option: e,
                        markArr: e.coinList || e.localData
                    }),
                        setTimeout(function() {
                            e.coin_list_dom.querySelector(".cur") && e.coin_list_dom.querySelector(".cur").offsetTop > e.coin_list_dom.clientHeight && (e.coin_list_dom.scrollTop = e.coin_list_dom.querySelector(".cur").offsetTop)
                        }, 200),
                        e.updateHtml(),
                        e.inited = 1
                }
                ,
                e.resetSort = function() {
                    for (var t = e.sort_dom.length; t--; )
                        e.sort_dom[t].querySelector("i").className = "";
                    e.sortNode && (e.sortNode.className = e.sort ? "desc" : "asc")
                }
                ,
                e.setFilter = function() {
                    for (var t = e.filter_dom.length; t--; )
                        e.filter_dom[t].className = e.filter_dom[t].dataset.filterKey == e.filterKey ? "cur" : "";
                    e.filter_dom_mark.className = "marked" === e.filterKey ? "cur" : "",
                        e.sortKey = "mgt",
                        e.sortNode = null
                }
                ,
                e.orderBy = function() {
                    function t(t, n) {
                        return e.ticker[n] && e.ticker[n][t] ? e.ticker[n][t] : 0
                    }
                    return {
                        price: function(n, a) {
                            var i = "cny" !== e.priceQuote || "zh-cn" != localStorage.lang && "zh-hk" != localStorage.lang ? "close" : "cnyClose";
                            return e.sort ? t(i, a.symbol) - t(i, n.symbol) : t(i, n.symbol) - t(i, a.symbol)
                        },
                        rate: function(n, a) {
                            return e.sort ? t("rate", a.symbol) - t("rate", n.symbol) : t("rate", n.symbol) - t("rate", a.symbol)
                        }
                    }
                }(),
                e.getUcData = function() {
                    if (!e.isLogin)
                        return setTimeout(e.getUcData, 200);
                    e.isLogin && n.i(k._47)({
                        params: {
                            website: "PRO"
                        }
                    }).then(function(t) {
                        e.coinList = {},
                            t.data.data.forEach(function(t) {
                                e.coinList[t] = "marked"
                            })
                    })
                }
                ,
                e.updateHtml = function() {
                    var a = [].slice.apply(e.coin_list_dom.querySelectorAll("dl"))
                        , i = [].slice.apply(e.coin_list_dom.querySelectorAll(".market_category"))
                        , r = [];
                    r[10] = "color-buy",
                        r[1] = "color-sell",
                        a.forEach(function(a) {
                            e.ticker[a.dataset.symbol] && ("cny" != e.priceQuote || "zh-cn" != localStorage.lang && "zh-hk" != localStorage.lang ? a.querySelector("span[price]").innerHTML = e.ticker[a.dataset.symbol].close ? n.i(m.b)(e.ticker[a.dataset.symbol].close, b.a.symbolDataObj[a.dataset.symbol]["trade-price-precision"]) : "---" : a.querySelector("span[price]").innerHTML = e.ticker[a.dataset.symbol].cnyClose ? e.ticker[a.dataset.symbol].cnyClose : "---",
                                a.querySelector("span[rate]").innerHTML = e.ticker[a.dataset.symbol].showRate || "---",
                            e.ticker[a.dataset.symbol].showRate && (a.querySelector("span[rate]").className = r[1 * (t(e.ticker[a.dataset.symbol].rate > 0) + t(e.ticker[a.dataset.symbol].rate < 0))]))
                        }),
                        i.forEach(function(t) {
                            var n = "partition" + t.dataset.partition;
                            e.info && e.info[n] && (t.querySelector("i").style.visibility = "visible")
                        })
                }
        }
        function r(t) {
            function e() {
                d.isLogin = !!m.h.get("HB-PRO-TOKEN"),
                    setTimeout(e, 1e3)
            }
            function r() {
                var t = this;
                t.getUcData(),
                    t.localData = JSON.parse(localStorage.getItem("mark_symbol") || "{}"),
                    t.coin_list_dom = t.wrap.querySelector(".coin_list"),
                    t.coin_list_html = t.coin_list_dom.querySelector("script").innerHTML,
                    t.filter_dom = t.wrap.querySelectorAll('span[action="userfilter"]'),
                    t.filter_dom_mark = t.wrap.querySelector('b[action="showmarked"]'),
                    t.sort_dom = t.wrap.querySelectorAll('span[action="usersort"]'),
                    t.total_dom = document.querySelector("#total_balance").querySelector("b"),
                    t.total_about_dom = document.querySelector("#total_balance").querySelector("span"),
                    t.search_keyword = t.wrap.querySelector("#search_keyword"),
                    t.switchQuote = t.wrap.querySelector('div[action="switch_quote"]'),
                    t.new_price_dom = t.wrap.querySelector("#new_price"),
                    t.clear_key_dom = t.wrap.querySelector('[action="clear_key"]'),
                    t.search_sign_dom = t.wrap.querySelector('[flag="search_sign"]'),
                    t.symbolData = b.a.symbolData,
                    t.symbolDataArr = b.a.symbolDataArr,
                    t.symbolDataObj = b.a.symbolDataObj,
                    n.i(m.g)(a, t),
                    t.setFilter(),
                    t.render(),
                    t.setPriceQuote(),
                    m.e.add(t.wrap, "click", function(e) {
                        var a = m.e.target(e)
                            , i = n.i(m.f)(a, "action")
                            , r = n.i(m.f)(a, "stop")
                            , o = n.i(m.f)(a, "stop_prop");
                        r && m.e.stop(e),
                        o && (e && e.stopPropagation ? e.stopPropagation() : window.event.cancelBubble = !0),
                        i && t[i.attr] && t[i.attr](i.node)
                    }),
                    e(),
                    n.i(m.r)(s)
            }
            function s() {
                d.search_keyword.value ? (d.clear_key_dom.style.display = "inline-block",
                    d.search_sign_dom.style.display = "none") : (d.clear_key_dom.style.display = "none",
                    d.search_sign_dom.style.display = ""),
                d.keys !== d.search_keyword.value && (d.symbolDataObj = {},
                    d.symbolDataArr = [],
                    d.symbolData = u(b.a.symbolData, d.search_keyword.value),
                    d.symbolData.forEach(function(t) {
                        t.delist || (d.symbolDataArr.push(t.symbol),
                            d.symbolDataObj[t.symbol.toLowerCase()] = t)
                    }),
                    d.keys = d.search_keyword.value,
                    d.render())
            }
            function u(t, e) {
                var n = []
                    , a = e || "";
                return t.forEach(function(t) {
                    ~t["base-currency"].toLowerCase().indexOf(a.toLowerCase()) && n.push(t)
                }),
                    n
            }
            var l = t || {}
                , d = {
                wrap: document.querySelector("#drawer"),
                filterKey: l.key || localStorage.getItem(x) || "usdt",
                sortKey: "mgt",
                ticker: {},
                isLogin: !!m.h.get("HB-PRO-TOKEN"),
                keys: "init",
                inited: 0,
                priceQuote: localStorage.getItem("priceQuote") || "btc"
            };
            return n.i(m.g)(o, d),
                n.i(m.g)(i, d),
                n.i(m.g)(r, d),
                n.i(m.g)(c, d),
                d
        }
        function o(t) {
            function e(t) {
                var e = 0
                    , n = {};
                for (var a in t)
                    !function(t, e, a) {
                        "btc" === t["base-currency"] ? n[a] = 1 / e.close : "btc" === t["quote-currency"] && (n[a] = e.close)
                    }(t[a], i.ticker[t[a].symbol], a);
                for (var a in t)
                    e += 1 * function(t, e, a) {
                            return "btc" !== t["base-currency"] && "btc" !== t["quote-currency"] ? t["base-currency"] === a ? i.balance[a] * e.close * n[t["quote-currency"]] || 0 : t["quote-currency"] === a ? i.balance[a] * (1 / e.close) * n[t["base-currency"]] || 0 : 0 : i.balance[a] * n[a] || 0
                        }(t[a], i.ticker[t[a].symbol], a);
                return e
            }
            function a(t) {
                for (var e, n = b.a.symbolData, a = 0, i = n.length; a < i; a++)
                    if (n[a]["base-currency"] === t && "btc" === n[a]["quote-currency"] || n[a]["quote-currency"] === t && "btc" === n[a]["base-currency"]) {
                        e = n[a];
                        break
                    }
                if (!e)
                    for (var a = 0, i = n.length; a < i; a++)
                        if (n[a]["base-currency"] === t && "usdt" === n[a]["quote-currency"] || n[a]["quote-currency"] === t && "usdt" === n[a]["base-currency"]) {
                            e = n[a];
                            break
                        }
                if (!e)
                    for (var a = 0, i = n.length; a < i; a++)
                        if (n[a]["base-currency"] === t || n[a]["quote-currency"] === t) {
                            e = n[a];
                            break
                        }
                return e
            }
            var i = this;
            i.renderBalance = function() {
                var t, r = {}, o = 1;
                if (!b.a.currencyReady || !b.a.symbolReady || "exchange" == window.TRADE_TYPE && !i.balance || "margin" == window.TRADE_TYPE && !b.a.marginBalanceTotal || !i.ticker)
                    return setTimeout(i.renderBalance, 300);
                "margin" == window.TRADE_TYPE && (i.balance = b.a.marginBalanceTotal);
                for (var c in i.balance)
                    "btc" !== c && b.a.symbolData.forEach(function(t) {
                        t["base-currency"] !== c && t["quote-currency"] !== c || (r[c] = a(c))
                    });
                r.bt2 && delete r.bt2,
                r.bt1 && delete r.bt1;
                for (var s in r)
                    o = o && i.ticker[r[s].symbol] && i.ticker[r[s].symbol].close;
                t = o && e(r),
                    t || 0 === t ? t += 1 * i.balance.btc ? 1 * i.balance.btc : 0 : t = "---",
                    i.total_dom.innerHTML = n.i(m.b)(t, 1 * b.a.currencyDataObj.btc["show-precision"]),
                i.usdrate && i.ticker.btcusdt && "---" != t && (i.total_about_dom.innerHTML = " ≈ " + n.i(m.b)(i.usdrate * n.i(m.b)(t, 1 * b.a.currencyDataObj.btc["show-precision"]) * i.ticker.btcusdt.close, 2) + " CNY")
            }
        }
        function c() {
            function t() {
                v.info || (v.info = {}),
                    n.i(k._9)({
                        path: {
                            id: ""
                        },
                        params: {
                            lang: localStorage.lang || "",
                            pageType: 1
                        }
                    }).then(function(n) {
                        n.data.success ? e(n.data.data) : setTimeout(t, 5e3)
                    })
            }
            function e(t) {
                t.forEach(function(t) {
                    v.info[t.pageIdentifier] = {
                        title: t.title,
                        content: t.summary
                    }
                }),
                    v.updateHtml()
            }
            function a(t) {
                t.filter(function(t) {
                    return t.pageIdentifier.toLowerCase().match("partition")
                }).forEach(function(t) {
                    v.info[t.pageIdentifier.toLowerCase()] = {
                        title: t.title,
                        content: t.summary
                    }
                }),
                    v.updateHtml()
            }
            function i(t) {
                t.subbed || n.i(_.b)(g.a.__allSymbolTicker, t)
            }
            function r(t) {
                t.subbed || n.i(_.b)(g.a.__allSymbolDayKline, t)
            }
            function o(t) {
                return t > .01 ? 2 : t.toString().match(/[^\.0]/) ? t.toString().match(/[^\.0]/).index + 1 : void 0
            }
            function c(t, e) {
                var a, i = b.a.symbolDataObj[e], r = v.usdrate;
                if (i) {
                    if (!r)
                        return setTimeout(function() {
                            return c(t, e)
                        }, 300);
                    if ("usdt" === i["quote-currency"])
                        a = r;
                    else if (b.a.symbolDataObj[i["quote-currency"] + "usdt"]) {
                        if (!v.ticker[i["quote-currency"] + "usdt"] || !v.ticker[i["quote-currency"] + "usdt"].close)
                            return setTimeout(function() {
                                return c(t, e)
                            }, 300);
                        a = r * v.ticker[i["quote-currency"] + "usdt"].close
                    } else
                        v.ticker[e].cnyClose = "---";
                    if (!t || !a)
                        return setTimeout(function() {
                            return c(t, e)
                        }, 300);
                    $_GET.debuger && console.log(t, a),
                        v.ticker[e].cnyClose = n.i(m.b)(n.i(h.b)(t, a), o(n.i(h.b)(t, a))),
                        v.updateHtml(),
                        v.renderBalance()
                }
            }
            function s(t) {
                t.forEach(function(t) {
                    var e = {
                        info: {
                            tick: t,
                            ch: "overview." + t.symbol
                        }
                    };
                    PAGE_COIN + PAGE_QUOTE != t.symbol && (n.i(_.b)(g.a.__allSymbolTicker, e.info),
                        n.i(_.b)(g.a.__allSymbolDayKline, e.info))
                })
            }
            function l(t) {
                var e = t.info.ch.split(".")[1];
                v.ticker[e] = v.ticker[e] ? v.ticker[e] : {},
                    v.ticker[e].close = t.info.tick.close,
                    c(t.info.tick.close, e),
                    v.updateHtml(),
                    v.renderBalance()
            }
            function p(t) {
                var e = t.info
                    , a = e.ch.split(".")[1]
                    , i = (e.tick.close - e.tick.open) / e.tick.open * 100
                    , r = 1 * n.i(m.b)(i, 2) ? n.i(m.b)(i, 2) : n.i(m.b)(0, 2)
                    , o = (1 * r > 0 ? "+" : "") + r
                    , c = o + "%";
                v.ticker[a] = v.ticker[a] ? v.ticker[a] : {},
                    v.ticker[a].showRate = c,
                    v.ticker[a].rate = 1 * r,
                    v.updateHtml()
            }
            var f = function() {
                var t = d()(u.a.mark(function t() {
                    var e, i;
                    return u.a.wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                                case 0:
                                    return v.info || (v.info = {}),
                                        t.next = 3,
                                        n.i(k._9)({
                                            path: {
                                                id: ""
                                            },
                                            params: {
                                                lang: localStorage.lang || "",
                                                pageType: 2
                                            }
                                        });
                                case 3:
                                    e = t.sent,
                                        i = e.data,
                                        i.success ? a(i.data) : setTimeout(f, 5e3);
                                case 6:
                                case "end":
                                    return t.stop()
                            }
                    }, t, this)
                }));
                return function() {
                    return t.apply(this, arguments)
                }
            }()
                , v = this;
            n.i(_.a)("__allSymbolTicker", l),
                n.i(_.a)("__allSymbolDayKline", p),
                n.i(_.a)("__getUserBalance", function(t) {
                    var e = t.info;
                    v.balance = {};
                    for (var n in e.total)
                        1 * e.total[n] && (v.balance[n] = e.total[n]);
                    v.renderBalance()
                }),
                t(),
                f(),
                function() {
                    T.plugin(n.i(y.b)().sub().overview(), function(t) {
                        t.ch && "market.overview" === t.ch && s(t.data)
                    }),
                        T.plugin(n.i(y.b)({
                            symbol: PAGE_COIN + PAGE_QUOTE
                        }).sub().ticker(), i),
                        T.plugin(n.i(y.b)({
                            symbol: PAGE_COIN + PAGE_QUOTE,
                            period: "1day"
                        }).sub().kline(), r)
                }()
        }
        n.d(e, "a", function() {
            return r
        });
        var s = n(18)
            , u = n.n(s)
            , l = n(17)
            , d = n.n(l)
            , p = n(12)
            , f = n.n(p)
            , m = n(0)
            , g = n(8)
            , _ = n(2)
            , b = n(6)
            , y = n(97)
            , h = n(24)
            , v = n(3)
            , k = n(1)
            , w = n(4)
            , T = y.a.handsup(v.c.ws)
            , E = new w.a
            , S = {
            margin: {
                ready: "marginReady",
                data: "marginData",
                obj: "marginDataObj",
                arr: "marginDataArr",
                cookies_filter: "HBP_MARGIN_SYMBOLS_FILTER"
            },
            exchange: {
                ready: "symbolReady",
                data: "symbolData",
                obj: "symbolDataObj",
                arr: "symbolDataArr",
                cookies_filter: "HBP_SYMBOLS_FILTER"
            }
        }
            , L = S[(window.TRADE_TYPE || "exchange").toLowerCase()]
            , x = L.cookies_filter
    },
    408: function(t, e, n) {
        "use strict";
        function a(t) {
            var e = l.a.symbolDataObj[_]["trade-price-precision"]
                , a = l.a.symbolDataObj[_]["trade-amount-precision"];
            return t.map(function(t) {
                return u()({}, t, {
                    time: n.i(p.c)(t.ts, "h:i:s"),
                    type: "sell" === t.direction ? "down" : "up",
                    price: n.i(p.b)(t.price, e),
                    amount: n.i(p.b)(t.amount, a)
                })
            })
        }
        function i(t) {
            y = a(t.data),
                o(),
                b = n.i(m.b)({
                    symbol: _
                }).sub().trade(),
                g.plugin(b, r)
        }
        function r(t) {
            if (!t.subbed) {
                var e = t.tick.data.length
                    , n = y.slice(0, e).map(function(t) {
                    return t.id
                })
                    , i = t.tick.data.reduce(function(t, e) {
                    return t.concat(n.includes(e.id) ? [] : e)
                }, []);
                y = a(i).concat(y).slice(0, 100)
            }
            o()
        }
        function o() {
            n.i(p.k)("market_trades_list", {
                list: y
            })
        }
        function c() {
            _ = PAGE_COIN + PAGE_QUOTE,
                b = n.i(m.b)({
                    symbol: _
                }).req().trade(),
                y = [],
                g.plugin(b, i)
        }
        n.d(e, "a", function() {
            return c
        });
        var s = n(29)
            , u = n.n(s)
            , l = n(6)
            , d = (n(19),
            n(261),
            n(3))
            , p = n(0)
            , f = n(5)
            , m = n(97)
            , g = m.a.handsup(d.c.ws)
            , _ = (new f.a,
            void 0)
            , b = void 0
            , y = void 0
    },
    409: function(t, e, n) {
        "use strict";
        function a(t) {
            var e = t.info;
            m = f,
                f = e.tick.close
        }
        function i() {
            function t() {
                t.price && t.price.getAttribute("force") && (m.writeDepth = !1,
                    t.price.removeAttribute("force"),
                    a(1)),
                    setTimeout(t, 100)
            }
            function e(t) {
                if (t && t.length) {
                    var e = 0;
                    return t.forEach(function(t, n) {
                        e < +t[1] && n < 7 && (e = +t[1])
                    }),
                        e
                }
            }
            function a(e) {
                var i = m.depths
                    , r = u.getElementsByName("price");
                if (!(i.bids[0] && i.asks[0] || f))
                    return setTimeout(function() {
                        a(e)
                    }, 200);
                r && (m.writeDepth || (t.price = r[0],
                ("" == r[1].value || e) && (r[1].value = n.i(c.b)(i.bids[0] ? i.bids[0][0] : f || 0, g.precision.price),
                    c.e.trigger(r[1], "input")),
                ("" == r[0].value || e) && (r[0].value = n.i(c.b)(i.asks[0] ? i.asks[0][0] : f || 0, i.floatLength),
                    c.e.trigger(r[0], "input")),
                    m.writeDepth = !0))
            }
            function i(t) {
                var i = n.i(o.a)(t)
                    , r = n.i(o.b)(i, d.a.symbolDataArr);
                t.tick && (t.tick.asksMaxVal = e(t.tick.asks),
                    t.tick.bidsMaxVal = e(t.tick.bids),
                    m.market.depth[r] = t.tick,
                    m.market.depth[r].symbol = [m.coin, m.quote],
                    m.market.depth[r].floatLength = g.precision.price,
                    m.market.depth[r].amountFloatLength = g.precision.amount,
                    m.market.depth[r].quote_currency = m.quote.toUpperCase(),
                    n.i(c.k)("market_depth", m.market.depth[r], u.depthListHtml),
                    m.depths = m.market.depth[r],
                    a())
            }
            var u = new l.a
                , m = {
                symbol_config: d.a.symbolDataObj[(PAGE_COIN + PAGE_QUOTE).toLowerCase()],
                coin: PAGE_COIN,
                quote: PAGE_QUOTE,
                account: {},
                market: {
                    depth: {},
                    ticker: {}
                },
                depths: {},
                writeDepth: !1
            }
                , g = {
                precision: {
                    price: m.symbol_config["trade-price-precision"],
                    amount: m.symbol_config["trade-amount-precision"],
                    volumes: m.symbol_config["trade-total-precision"],
                    fee: m.symbol_config["fee-precision"]
                },
                depthApi: {
                    symbol: m.coin + m.quote,
                    step: "step0"
                },
                depthApiPick: {
                    pick: ["bids.7", "asks.7"]
                }
            };
            t(),
                n.i(r.a)("__marketDay", function(t) {
                    var e = t.info
                        , n = e[m.coin + m.quote];
                    m.market.ticker = n ? n.ticker : {},
                        m.ticker_version = 1 * new Date
                }),
                n.i(r.a)("__marketTicker", function(t) {
                    var e = t.info
                        , n = e[m.coin + m.quote];
                    m.market.ticker = n ? n.ticker : {},
                        m.ticker_version = 1 * new Date
                }),
                function(t) {
                    t.Num = c.b,
                        p.plugin(n.i(s.b)(g.depthApi).sub(g.depthApiPick).depth(), i)
                }(window),
                u.Ready(function() {
                    u.depthSelect = u.getElementById("depth_select"),
                        u.depthList = u.getElementById("market_depth"),
                        u.depthStep = u.getElementById("depth_step"),
                        u.depthListHtml = u.depthList.querySelector("script[name='normal']").innerHTML,
                        n.i(c.k)("market_depth", {
                            quote_currency: m.quote.toUpperCase()
                        }, u.depthListHtml),
                        c.e.add(u, "click", function(t) {
                            c.j.removeClass(u.depthSelect, "slide_down")
                        }),
                        c.e.add(u.depthSelect, "click", function(t) {
                            t.stopPropagation(),
                                c.j.hasClass(u.depthSelect, "slide_down") ? c.j.removeClass(u.depthSelect, "slide_down") : c.j.addClass(u.depthSelect, "slide_down");
                            var e = c.e.target(t)
                                , a = n.i(c.f)(e, "data-depth")
                                , r = void 0
                                , o = void 0
                                , l = void 0;
                            a && (r = a.node,
                                o = r.getAttribute("data-depth"),
                                l = r.innerText,
                                u.depthStep.innerText = l,
                                c.j.removeClass(u.depthSelect, "slide_down"),
                                c.j.removeClass(u.depthSelect.querySelector(".active"), "active"),
                                c.j.addClass(r, "active"),
                                p.unplug(n.i(s.b)(g.depthApi).sub().depth(), i),
                                g.depthApi.step = "step" + o,
                                p.plugin(n.i(s.b)(g.depthApi).sub().depth(), i))
                        });
                    var t = void 0;
                    c.e.add(u.depthList, "click", function(e) {
                        var a = c.e.target(e)
                            , i = n.i(c.f)(a, "data-info");
                        i && i.attr && (u.formPrice[0].value = i.attr,
                            u.formPrice[1].value = i.attr,
                            u.formPrice[0].className = "focus",
                            u.formPrice[1].className = "focus",
                            c.e.trigger(u.formPrice[0], "input"),
                            c.e.trigger(u.formPrice[1], "input")),
                        t && clearTimeout(t),
                            t = null,
                            t = setTimeout(function() {
                                u.formPrice[0].className = "",
                                    u.formPrice[1].className = ""
                            }, 300)
                    })
                })
        }
        n.d(e, "a", function() {
            return i
        });
        var r = (n(8),
            n(2))
            , o = n(405)
            , c = n(0)
            , s = n(97)
            , u = n(3)
            , l = n(5)
            , d = (n(19),
            n(6))
            , p = s.a.handsup(u.c.ws)
            , f = void 0
            , m = void 0;
        n.i(r.a)("__tickerSub", a)
    },
    41: function(t, e, n) {
        "use strict";
        var a = n(64)
            , i = n.n(a)
            , r = n(48)
            , o = (n.n(r),
            n(56))
            , c = n.n(o)
            , s = n(7)
            , u = n(0)
            , l = n(2)
            , d = (n(3),
            n(1))
            , p = n(9)
            , f = n(11)
            , m = n(4)
            , g = void 0
            , _ = n.i(u.m)()
            , b = new m.a
            , y = n.i(u.n)(c.a)
            , h = void 0
            , v = void 0
            , k = {
            "en-us": "/notice_detail/?id=647",
            "zh-cn": "/zh-cn/notice_detail/?id=648"
        };
        e.a = function() {
            function t(t) {
                T(),
                t && t(),
                    g.Open()
            }
            function e(t) {
                E = t,
                    A = {
                        currency: {},
                        scoin: []
                    },
                    v = 0,
                    _._keys(t.lang),
                    A.currency = {
                        coin: t.currency,
                        amount: null
                    },
                t.scoin && t.scoin.forEach(function(t) {
                    A.scoin.push({
                        coin: t,
                        amount: null
                    })
                });
                var e = localStorage.getItem("lang") || "en-us"
                    , a = k["zh-cn" === e || "en-us" === e ? e : "en-us"]
                    , i = {
                    currency: t.currency,
                    scoin: t.scoin,
                    act: x,
                    amount: 0,
                    lang: _.getLang,
                    page: {
                        title: t.title,
                        titleExt: '<a class="help_link" href="' + a + '" target="_blank">' + _.getLang("了解更多？") + "</a>"
                    },
                    btn: {
                        cancel: _.getLang("取消"),
                        submit: _.getLang("转换")
                    }
                };
                h = t.currencys || h,
                    g = g || new s.a({
                            html: n.i(u.d)(n.i(s.b)(y.html).html, i)
                        }),
                S && (g.dialog.innerHTML = n.i(u.d)(n.i(s.b)(y.html).fc, i)),
                    I = g.dialog.querySelectorAll("dl"),
                    C = g.dialog.querySelectorAll("em"),
                    O = n.i(u.s)(g.dialog.querySelectorAll("input")).concat(n.i(u.s)(g.dialog.querySelectorAll("button"))),
                    O.forEach(function(t) {
                        n.i(u.g)(f.a, t)
                    });
                var o = n.i(f.b)(O)
                    , l = i.amount
                    , d = i.currency.toUpperCase()
                    , b = i.scoin.map(function(t) {
                    return l + " " + t.toUpperCase()
                }).join(" + ");
                l && (x ? (o.dom.pro_dia_from.value = l + " " + d,
                    o.dom.pro_dia_to.value = b) : (o.dom.pro_dia_from.value = b,
                    o.dom.pro_dia_to.value = l + " " + d)),
                !S && u.e.add(g.dialog, "click", r),
                !S && n.i(u.r)(c),
                    S = 1,
                    g.callback(m),
                    p.a.Get(h)
            }
            function a() {
                if (!E || null === A.currency.amount)
                    return setTimeout(a, 200);
                C[0].innerHTML = n.i(u.b)(A.min, E.currency_obj[A.currency.coin]["show-precision"]),
                    C[1].innerHTML = n.i(u.b)(A.currency.amount, E.currency_obj[A.currency.coin]["show-precision"])
            }
            function r(t) {
                var e = u.e.target(t)
                    , a = n.i(u.f)(e, "action");
                n.i(u.f)(e, "stop") && u.e.stop(t),
                a && L[a.attr] && L[a.attr](a.node, e, g.dialog)
            }
            function o() {
                var t = this;
                t.switch_dir = function(t, e, n) {
                    var a = [I[0].className, I[1].className];
                    I[0].className = a[1],
                        I[1].className = a[0],
                        x = !x,
                        O[0].value = ""
                }
                    ,
                    t.allIn = function(t, e, a) {
                        1 * n.i(u.b)(x ? A.currency.amount : A.min, E.currency_obj[A.currency.coin]["show-precision"]) && (O[0].value = n.i(u.b)(x ? A.currency.amount : A.min, E.currency_obj[A.currency.coin]["show-precision"]))
                    }
            }
            function c() {
                var t = {
                    currency: E.currency,
                    scoin: E.scoin,
                    act: x,
                    amount: 1 * O[0].value || 0
                }
                    , e = n.i(f.b)(O)
                    , a = t.amount
                    , i = t.currency.toUpperCase()
                    , r = t.scoin.map(function(t) {
                    return a + " " + t.toUpperCase()
                }).join(" + ");
                a ? x ? (e.dom.pro_dia_from.value = a + " " + i,
                    e.dom.pro_dia_to.value = r) : (e.dom.pro_dia_from.value = r,
                    e.dom.pro_dia_to.value = a + " " + i) : (e.dom.pro_dia_from.value = "",
                    e.dom.pro_dia_to.value = "")
            }
            function m(t) {
                if (!v && "submit" == t.type) {
                    var e = n.i(f.b)(O)
                        , a = x ? d.A : d.B;
                    if (!e.data.pro_dia_amount)
                        return e.dom.pro_dia_amount.error(_.getLang("请先输入数量"));
                    v = 1,
                        a({
                            data: {
                                amount: e.data.pro_dia_amount,
                                currency: E.currency
                            }
                        }).then(function(t) {
                            return v = 0,
                                "ok" === t.data.status ? (O[0].value = "",
                                    g.Close(),
                                    setTimeout(function() {
                                        getPageCallback("updateFinanceList") && getPageCallback("updateFinanceList")()
                                    }, 500),
                                    b.Show(_.getLang("分叉转币成功"))) : b.Error(t.data["err-msg"])
                        })
                }
            }
            function w(t, e) {
                return _._keys(e),
                    _.getLang("分叉币转换_title")
            }
            function T() {
                var t = document.querySelector(".dia_ticket");
                t && (t.parentElement.style.overflow = "visible")
            }
            var E = void 0
                , S = void 0
                , L = {}
                , x = 1
                , A = {
                currency: {},
                scoin: []
            }
                , O = void 0
                , C = void 0
                , I = void 0;
            return n.i(u.g)(o, L),
                n.i(l.a)("__getUserBalance", function(t) {
                    var e = t.info
                        , n = i.a;
                    e && (e = e.trade,
                        A.currency.amount = 1 * e[A.currency.coin],
                        A.scoin.forEach(function(t) {
                            n = Math.min(n, 1 * e[t.coin]),
                                t.amount = 1 * e[t.coin]
                        }),
                        A.min = n,
                        a())
                }),
                {
                    open: t,
                    title: w,
                    construct: e
                }
        }()
    },
    42: function(t, e, n) {
        "use strict";
        var a = n(50)
            , i = (n.n(a),
            n(58))
            , r = n.n(i)
            , o = n(7)
            , c = n(0)
            , s = n(24)
            , u = n(1)
            , l = n(4)
            , d = n(14)
            , p = new d.a
            , f = new l.a
            , m = void 0
            , g = n.i(c.m)()
            , _ = n.i(c.n)(r.a)
            , b = void 0
            , y = void 0
            , h = void 0
            , v = void 0
            , k = void 0
            , w = void 0
            , T = {};
        e.a = function() {
            function t(e) {
                v ? (e && e(),
                    m.Open()) : setTimeout(function() {
                    t(e)
                }, 100)
            }
            function e(t) {
                w = 0,
                    t.order = JSON.parse(t.order),
                    b = t,
                    g._keys(t.lang),
                    y = {
                        cash: T,
                        lang: g.getLang,
                        add: s.a,
                        order: t.order,
                        symbols: STORE.symbolDataObj[t.order.symbol]["symbol-name"],
                        page: {
                            title: t.title
                        },
                        btn: {
                            cancel: g.getLang("取消"),
                            submit: g.getLang("确定")
                        }
                    },
                    m = m || new o.a({
                            html: n.i(c.d)(n.i(o.b)(_.html).html, y)
                        }),
                    a(),
                !h && c.e.add(m.dialog, "click", r),
                    h = 1,
                    m.callback(d)
            }
            function a() {
                n.i(u.e)({
                    params: {
                        symbol: b.order.symbol
                    }
                }).then(function(t) {
                    var e = t.data;
                    "ok" === e.status && i(e.data[0])
                })
            }
            function i(t) {
                t ? t.list.forEach(function(t) {
                    T[t.currency] = "trade" === t.type ? t.balance : T[t.currency]
                }) : (T[b.quote] = 0,
                    T[b.base] = 0),
                    v = 1,
                    m.dialog.innerHTML = n.i(c.d)(n.i(o.b)(_.html).fc, y),
                    k = m.dialog.querySelector('input[flag="amt"]'),
                    c.e.add(k, "input", function() {
                        k.value = n.i(c.o)(k.value, 8)
                    })
            }
            function r(t) {
                var e = c.e.target(t)
                    , a = n.i(c.f)(e, "action");
                n.i(c.f)(e, "stop") && c.e.stop(t),
                a && L[a.attr] && L[a.attr]()
            }
            function l() {
                this.allIn = function() {
                    var t = Math.min(1 * T[b.order.currency], n.i(s.a)(1 * b.order["loan-balance"], 1 * b.order["interest-balance"]));
                    k.value = n.i(c.b)(t, "8"),
                        c.e.trigger(k, "input")
                }
            }
            function d(t) {
                if (!w)
                    if (p.Hide(),
                        "submit" == t.type) {
                        if (!k.value)
                            return p.Show(k, g.getLang("请先输入数量"));
                        w = 1,
                            n.i(u.u)({
                                path: {
                                    "order-id": b.order.id
                                },
                                data: {
                                    amount: k.value
                                }
                            }).then(function(t) {
                                var e = t.data;
                                return w = 0,
                                    "ok" === e.status ? (k.value = "",
                                        m.Close(),
                                    b.success && b.success(t),
                                        f.Show(g.getLang("操作成功"))) : f.Error(e["err-msg"])
                            })
                    } else
                        "open" == t.type ? c.e.add(document, "mousewheel", E) : "close" == t.type && c.e.remove(document, "mousewheel", E)
            }
            function E(t) {
                c.e.stop(t)
            }
            function S(t, e) {
                return g._keys(e),
                    g.getLang("归还借贷")
            }
            var L = {};
            return n.i(c.g)(l, L),
                {
                    open: t,
                    title: S,
                    construct: e
                }
        }()
    },
    43: function(t, e, n) {
        "use strict";
        function a(t) {
            n.i(p.f)().then(function(e) {
                var a = e.data;
                a.success && n.i(p.r)({
                    data: {
                        method: "login",
                        ticket: a.data.ticket
                    }
                }).then(function(e) {
                    var n = e.data;
                    "ok" == n.status && (g.h.set({
                        name: "HB-OLD-TOKEN",
                        value: n.data.token,
                        domain: GetHost(),
                        path: "/"
                    }),
                    t && t())
                })
            })
        }
        function i(t) {
            function e(t) {
                x = t,
                    _._keys(t.lang),
                    O()
            }
            function i(t, e) {
                for (var n in e)
                    t[n] = e[n];
                return t
            }
            function o() {
                m.a.construct({
                    lang: x.lang,
                    currency: x.currency,
                    title: x.title,
                    page: {
                        title: x.title
                    },
                    hiddenClose: !0
                }),
                    m.a.open().callback(function(t) {}),
                    s()
            }
            function s() {
                function t() {
                    n.i(p.s)({
                        data: {
                            method: "get_auth_info"
                        }
                    }).then(function(n) {
                        var r = n.data;
                        "ok" === r.status ? (I = i(I, i(i(i(r.data.auth_info, r.data.force_info), r.data.user_info), d.a.userInfo)),
                            c += 1,
                            e()) : 555 === r["err-code"] && a(t)
                    })
                }
                function e(t) {
                    if (!(A || c < 2)) {
                        var e = t || T(x.action, o);
                        window.UI = window.UI || I,
                        !r && window.UI && (r = setTimeout(function() {
                            delete window.UI,
                                r = null
                        }, 1 * $_GET("refresh_time") || 18e5)),
                        "actions" != e && ("pass" == e ? x.next && x.next(x, m.a.close) : (m.a.close(),
                            S(e)),
                        x.callback && x.callback(e, x, m.a.close, C))
                    }
                }
                var o = {
                    withdraw_big: {
                        "0001": ["verify", "prokyc"],
                        "0010": ["verify", "prokyc"],
                        "0011": ["verify", "prokyc"],
                        "0100": ["verify", "prokyc"],
                        "0101": ["verify", "prokyc"],
                        "0110": ["verify", "prokyc"],
                        "0111": ["verify", "prokyc"],
                        1001: ["verify", "prokyc"],
                        1010: ["verify", "prokyc"],
                        1100: ["verify", "prokyc"],
                        1101: ["verify", "prokyc"],
                        1110: ["verify", "prokyc"],
                        1111: ["verify", "prokyc"]
                    }
                }
                    , c = 0;
                if (!o[x.action] && window.UI || window.skipTaskHall)
                    return c = 2,
                        e("pass");
                t(),
                    function() {
                        n.i(p.t)().then(function(t) {
                            var n = t.data
                                , a = 0;
                            if (n.success) {
                                for (var r in n.data.setting)
                                    n.data.setting[r] && ++a;
                                n.data.setting.bigman = a,
                                    I = i(I, n.data),
                                    c += 1,
                                    e()
                            }
                        })
                    }()
            }
            function y() {
                return (1 * I.pro_status == 2 ? 1 : 0).toString()
            }
            function h() {
                return (1 * I.setting.verify_phone).toString()
            }
            function v() {
                return (1 * I.setting.verify_ga).toString()
            }
            function k() {
                return (1 * I.setting.verify_email).toString()
            }
            function w() {
                return (1 * I.c1_status == 2 || 1 * I.u_status == 2 ? 1 : 0).toString()
            }
            function T(t, e) {
                function a(t) {
                    if ("verify" === t)
                        return I.setting.bigman > 1 ? 2 : 0
                }
                var i = {
                    verify: {
                        index: 0,
                        title: _.getLang("至少开启2项双重身份验证"),
                        keys: "verify",
                        status: 0,
                        actionUrl: localStorage.root + "user_center/uc_info/",
                        actionName: _.getLang("立即开启")
                    },
                    prokyc: {
                        index: 0,
                        title: _.getLang("身份认证"),
                        keys: "pro_status",
                        status: 0,
                        actionUrl: localStorage.root + "user_center/uc_auth/",
                        actionName: _.getLang("立即认证")
                    }
                }
                    , r = []
                    , o = y() + h() + k() + v()
                    , c = {}
                    , s = 1;
                return n.i(g.g)(E, c),
                    "transfer" === t ? 1 * w() ? "pass" : [{
                        index: 0,
                        title: _.getLang("实名认证"),
                        keys: "c1_status",
                        status: 0,
                        actionUrl: f.c.main + "/account/auth.php?a=real_name_auth&auth_level=C1",
                        actionName: _.getLang("立即认证")
                    }] : e[t] ? "string" == typeof e[t][o] && c[e[t][o]] && c[e[t][o]]() ? "actions" : (e[t][o].forEach(function(t) {
                        r.push(i[t])
                    }),
                        r.forEach(function(t) {
                            var e = [t.actionName, _.getLang("待审核"), _.getLang("已完成"), _.getLang("审核未通过")]
                                , n = "number" == typeof I[t.keys] ? I[t.keys] : a(t.keys);
                            t.status = 2 == n ? 1 : 0,
                                t.index = n,
                                t.actionName = e[n],
                                s = s && t.status
                        }),
                        r.length && !s ? r : "pass") : "pass"
            }
            function E() {
                this.stop = function() {
                    return "stop"
                }
            }
            function S(t) {
                x.task = t,
                    C.construct(x),
                    C.open()
            }
            function L() {}
            var x, A, O = function() {
                var t = u()(c.a.mark(function t() {
                    return c.a.wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                        l.a.currencyinfo();
                                case 2:
                                    d.a.currencyData.forEach(function(t) {
                                        b.pro[t.name] = "1"
                                    });
                                case 3:
                                case "end":
                                    return t.stop()
                            }
                    }, t, this)
                }));
                return function() {
                    return t.apply(this, arguments)
                }
            }(), C = t, I = {};
            return {
                open: o,
                close: L,
                construct: e
            }
        }
        var r, o = n(18), c = n.n(o), s = n(17), u = n.n(s), l = n(19), d = n(6), p = n(1), f = n(3), m = n(22), g = n(0), _ = n.i(g.m)();
        window.lang = _;
        var b = {
            pro: {},
            huobi: {}
        };
        f.d.forEach(function(t) {
            b.huobi[t] = "1"
        }),
            e.a = i
    },
    44: function(t, e, n) {
        "use strict";
        var a = n(51)
            , i = (n.n(a),
            n(59))
            , r = n.n(i)
            , o = n(43)
            , c = n(7)
            , s = n(4)
            , u = n(0)
            , l = n.i(u.m)()
            , d = n.i(u.n)(r.a)
            , p = void 0
            , f = void 0;
        new s.a;
        e.a = n.i(o.a)(function() {
            function t() {
                return p.Open(),
                    p
            }
            function e(t) {
                m = t,
                    l._keys(t.lang);
                var e = {
                    lang: l.getLang,
                    currency: t.currency,
                    page: {
                        title: t.title
                    },
                    btn: !1
                };
                p = p || new c.a({
                        html: n.i(u.d)(n.i(c.b)(d.html).html, e)
                    }),
                f && (p.dialog.innerHTML = n.i(u.d)(n.i(c.b)(d.html).fc, e)),
                    s = document.querySelector("[block='task_list']"),
                    s.innerHTML = n.i(u.d)(d.block.task_list, {
                        lang: l.getLang,
                        task: t.task
                    }),
                    p.callback(function() {}),
                !f && u.e.add(p.dialog, "click", r),
                    f = 1
            }
            function a() {}
            function i() {}
            function r(t) {
                var e = u.e.target(t)
                    , a = n.i(u.f)(e, "action");
                n.i(u.f)(e, "stop") && u.e.stop(t),
                a && g[a.attr] && g[a.attr](a.node, e, p.dialog)
            }
            function o() {}
            var s = void 0
                , m = void 0
                , g = {};
            return n.i(u.g)(o, g),
                {
                    open: t,
                    construct: e,
                    updateData: a,
                    callUpdate: i,
                    myDialog: function() {
                        return p
                    }
                }
        }())
    },
    45: function(t, e, n) {
        "use strict";
        var a = n(52)
            , i = (n.n(a),
            n(60))
            , r = n.n(i)
            , o = n(7)
            , c = n(0)
            , s = n(1)
            , u = n(4)
            , l = n(14)
            , d = (n(2),
            new l.a)
            , p = void 0
            , f = {}
            , m = {}
            , g = void 0
            , _ = void 0
            , b = void 0
            , y = new u.a
            , h = n.i(c.m)()
            , v = n.i(c.n)(r.a)
            , k = void 0
            , w = void 0
            , T = void 0;
        e.a = function() {
            function t(e) {
                b ? (e && e(),
                    p.Open()) : setTimeout(function() {
                    t(e)
                }, 100)
            }
            function e(t) {
                M = 0,
                    k = t,
                    g = t.type ? "in" == t.type ? 0 : 1 : 0,
                    _ = t.currency ? t.currency : k.base,
                    h._keys(t.lang),
                    b = null,
                    w = {
                        cash: m,
                        wallet: f,
                        base: t.base,
                        quote: t.quote,
                        lang: h.getLang,
                        currency: t.currency,
                        page: {
                            title: t.title
                        },
                        btn: {
                            cancel: h.getLang("取消"),
                            submit: h.getLang("确定")
                        }
                    },
                    p = p || new o.a({
                            html: n.i(c.d)(n.i(o.b)(v.html).html, w)
                        }),
                    a(),
                !T && c.e.add(p.dialog, "click", r),
                !T && n.i(c.r)(l),
                    T = 1,
                    p.callback(S)
            }
            function a() {
                n.i(s.e)({
                    params: {
                        symbol: k.base + k.quote
                    }
                }).then(function(t) {
                    var e = t.data;
                    "ok" === e.status && i(e.data[0])
                })
            }
            function i(t) {
                t ? t.list.forEach(function(t) {
                    m[t.currency] = "transfer-out-available" === t.type ? t.balance : m[t.currency]
                }) : (m[k.quote] = 0,
                    m[k.base] = 0),
                    f[k.base] = STORE.balance.trade[k.base],
                    f[k.quote] = STORE.balance.trade[k.quote],
                    b = 1,
                T && (p.dialog.innerHTML = n.i(c.d)(n.i(o.b)(v.html).fc, w)),
                    A = p.dialog.querySelector('[flag="dir"]'),
                    B = p.dialog.querySelector('[flag="tips"]'),
                    C = p.dialog.querySelector('[flag="ava"]'),
                    P = p.dialog.querySelector('[flag="inputFlag"]'),
                    I = n.i(c.s)(p.dialog.querySelector('[flag="filter"]').querySelectorAll("span")),
                    O = p.dialog.querySelector("b"),
                    q = p.dialog.querySelector("input"),
                q.getAttribute("bindEvent") || (q.setAttribute("bindEvent", "bindEvent"),
                    c.e.add(q, "blur", function() {
                        d.Hide()
                    }),
                    c.e.add(q, "focus", function() {
                        d.Hide()
                    }),
                    c.e.add(q, "input", function() {
                        d.Hide(),
                            q.value = n.i(c.o)(q.value, STORE.currencyDataObj[_]["show-precision"])
                    })),
                    u()
            }
            function r(t) {
                var e = c.e.target(t)
                    , a = n.i(c.f)(e, "action");
                n.i(c.f)(e, "stop") && c.e.stop(t),
                a && D[a.attr] && D[a.attr](a.node)
            }
            function u() {
                D.ver = 1 * new Date
            }
            function l() {
                var t = 1 * g;
                H[k.base] = 0,
                    H[k.quote] = 1,
                D.ver !== N && (N = D.ver,
                    P.innerHTML = _,
                    A.className = H.className[t],
                    B.className = H.tips[t],
                    O.innerHTML = h.getLang(H.title[t]),
                    C.innerHTML = n.i(c.b)(H.money[t][_], STORE.currencyDataObj[_]["show-precision"]) + " " + _,
                    q.value = "",
                D.oldTab && (D.oldTab.className = ""),
                    I[H[_]].className = "cur",
                    D.oldTab = I[H[_]])
            }
            function E() {
                var t = this;
                t.changeDirection = function() {
                    g = !g,
                        u()
                }
                    ,
                    t.changeFilter = function(t) {
                        _ = t.dataset.filter,
                            u()
                    }
                    ,
                    t.allIn = function(t) {
                        var e = 1 * g;
                        q.value = n.i(c.b)(H.money[e][_], STORE.currencyDataObj[_]["show-precision"])
                    }
            }
            function S(t) {
                var e = 1 * g;
                if (!M)
                    if (d.Hide(),
                        "submit" == t.type) {
                        if (!q.value)
                            return d.Show(q, h.getLang("请先输入数量"));
                        M = 1,
                            H.fn[e]({
                                data: {
                                    amount: q.value,
                                    currency: _,
                                    symbol: k.base + k.quote
                                }
                            }).then(function(t) {
                                var e = t.data;
                                return M = 0,
                                    "ok" === e.status ? (q.value = "",
                                        p.Close(),
                                    k.success && k.success(t),
                                        y.Show(h.getLang("操作成功"))) : y.Error(e["err-msg"])
                            })
                    } else
                        "open" == t.type ? c.e.add(document, "mousewheel", L) : "close" == t.type && c.e.remove(document, "mousewheel", L)
            }
            function L(t) {
                c.e.stop(t)
            }
            function x(t, e) {
                var n = t.type ? "in" == t.type ? 0 : 1 : 0
                    , a = [h.getLang("转入本金"), h.getLang("转出本金")];
                return h._keys(e),
                    a[n]
            }
            var A, O, C, I, q, P, M, B, D = {
                ver: 0
            }, N = 0, H = {
                className: ["tio_in", "tio_out"],
                money: [f, m],
                title: ["转入本金", "转出本金"],
                fn: [s.v, s.w],
                tips: ["hb_icon_tip hide", "hb_icon_tip"]
            };
            return n.i(c.g)(E, D),
                {
                    open: t,
                    title: x,
                    construct: e
                }
        }()
    },
    46: function(t, e) {},
    47: function(t, e) {},
    48: function(t, e) {},
    49: function(t, e) {},
    5: function(t, e, n) {
        "use strict";
        function a() {
            var t = document;
            return t.dom = document,
                t.__queue = t.__queue || [],
                t.ExeQueue = function() {
                    var e = t.__queue.shift();
                    e && e(),
                    t.__queue.length && t.ExeQueue()
                }
                ,
                t.Ready = this.Ready = function(e) {
                    t.isInteractive || t.isComplete ? e && e() : t.__queue.push(e)
                }
                ,
                t
        }
        function i(t, e, n) {
            var i = this
                , r = document.createElement("div")
                , c = void 0
                , s = void 0;
            return r.innerHTML = t,
                s = r.firstElementChild || r.children[0],
                s.wrap = r,
                a.call(i),
            e && i.Ready(function() {
                (c = "object" === (void 0 === e ? "undefined" : o()(e)) ? e : document[e] || document.getElementById(e)) && (n && (c.innerHTML = ""),
                    s = c.appendChild(s))
            }),
                s
        }
        n.d(e, "a", function() {
            return a
        }),
            n.d(e, "b", function() {
                return i
            });
        var r = n(10)
            , o = n.n(r);
        document.onreadystatechange = function() {
            switch (document.readyState) {
                case "loading":
                    document.loading && document.loading();
                    break;
                case "interactive":
                    document.isInteractive = !0,
                    document.Interactive && document.Interactive(),
                    document.ExeQueue && document.ExeQueue();
                    break;
                case "complete":
                    document.isComplete = !0,
                    document.complete && document.complete(),
                    document.isInteractive || document.ExeQueue && document.ExeQueue()
            }
        }
    },
    50: function(t, e) {},
    51: function(t, e) {},
    52: function(t, e) {},
    53: function(t, e) {
        t.exports = '<%\n\tvar lang = __data.lang ||new Function,\n\t\tbtn = __data.btn ||{},\n\t\tpage = __data.page||{};\n%>\n<div class="dialog">\n\t<div class="dia_tit">\n\t\t<div><b><%=lang(page.title)%><%= page.titleExt ? lang(page.titleExt) : ""%></b><span class="close" id="dia_close">×</span>\n\t\t</div>\n\t\t<p  data="dia_title" class="dia_tit_more"><%= page.titleMore ? lang(page.titleMore) : ""%></p>\n\t</div>\n\t<div class="dia_content">block_dia_content</div>\n\n\t<% if(btn && typeof btn == "object"){ %>\n\t\t<div class="dia_submit">\n\t\t\t<span class="error_notice"></span>\n\t\t\t<% if(btn.cancel) { %>\n\t\t\t\t<button class="btn_cancel" pro_name="btn_cancel">\n\t\t\t\t\t<%=lang(btn.cancel)%>\n\t\t\t\t</button>\n\t\t\t<% }%>\n\t\t\t<% if(btn.submit) { %>\n\t\t\t\t<button class="btn btn_submit btn-primary" pro_name="btn_submit">\n\t\t\t\t\t<%=lang(btn.submit)%>\n\t\t\t\t</button>\n\t\t\t<% }%>\n\t\t</div>\n\t\t<% }else if(typeof btn == "string") {%>\n\t\t\t<%=btn%>\n\t\t\t\t<% }%>\n\n</div>\n<div class="dialog_extra"></div>\n'
    },
    54: function(t, e) {
        t.exports = '<div class="dia_add_address">\n    <div class="dia_input">\n        <div class="input_top">\n            <b><i class="upper"><%=currency%></i> <%=lang("地址")%></b>\n            <p class="pro_warning"></p>\n        </div>\n        <div class="input_middle">\n            <input class="input_text" type="text" pro_name="pro_dia_address_address">\n        </div>\n    </div>\n    <% if (addr_tag){ %>\n    <div class="dia_input">\n        <div class="input_top">\n            <b><%=lang("标签")%></b>\n            <p class="pro_warning"></p>\n        </div>\n        <div class="input_middle">\n            <input class="input_text" type="text" pro_name="pro_dia_address_tag" disabled value="<%=addr_tag%>">\n        </div>\n    </div>\n    <% } %>\n    <div class="dia_input">\n        <div class="input_top">\n            <b><%=lang("备注")%></b>\n            <p class="pro_warning"></p>\n        </div>\n        <div class="input_middle">\n            <input class="input_text" type="text" pro_name="pro_dia_address_alias">\n        </div>\n    </div>\n    <% if (!no_verify) { %>\n    <% if(UI.setting.verify_phone){ %>\n    <div class="dia_input">\n        <div class="input_top">\n            <b><%=lang("短信验证码")%></b>\n            <p class="pro_warning"></p>\n        </div>\n        <div class="input_middle">\n            <input class="input_text" type="text" pro_name="sms_code" maxlength="6">\n            <span class="input_text_right sms_verify" act="sms_btn_wrap">\n            <a href="" action="getSms" stop="1"><%=lang("点击获取")%></a>\n        </span>\n        </div>\n        <p class="input_bottom">\n            <%=lang("手机号")%> <b class="color_master"><%=UI.phone%></b>\n        </p>\n    </div>\n    <% } %>\n    <% if(UI.setting.verify_email){ %>\n    <div class="dia_input">\n        <div class="input_top">\n            <b><%=lang("邮箱验证码")%></b>\n            <p class="pro_warning"></p>\n        </div>\n        <div class="input_middle">\n            <input class="input_text" type="text" pro_name="email_code" verify="1" maxlength="6">\n            <span class="input_text_right sms_verify" act="email_btn_wrap">\n            <a href="" action="getEmail" stop="1"><%=lang("点击获取")%></a>\n        </span>\n        </div>\n        <p class="input_bottom">\n            <%=lang("邮箱")%> <b class="color_master"><%=UI.email%></b>\n        </p>\n    </div>\n    <% } %>\n    <% if(UI.setting.verify_ga){ %>\n    <div class="dia_input">\n        <div class="input_top">\n            <b><%=lang("谷歌验证码")%></b>\n            <p class="pro_warning"></p>\n        </div>\n        <div class="input_middle">\n            <input class="input_text" type="text" pro_name="ga_code">\n        </span>\n        </div>\n    </div>\n    <% } %>\n    <% } %>\n</div>\n'
    },
    55: function(t, e, n) {
        t.exports = '<div block="content"></div>\n<block name="loading">\n\t<div class="dia_loading" style="text-align: center"><img class="dia_wd_address_loading" src="' + n(23) + '"/></div>\n</block>\n<block name="content">\n\t<%=content%>\n</block>\n\n<block name="login_verify_setting">\n\t\t<% if(item === "PHONE"){ %>\n\t\t\t<div class="dia_input">\n\t\t\t\t<div class="input_top">\n\t\t\t\t\t<b>\n\t\t\t\t\t\t<%=lang("手机号")%>\n\t\t\t\t\t</b>\n\t\t\t\t\t<p class="pro_warning"></p>\n\t\t\t\t</div>\n\t\t\t\t<div class="input_middle">\n\t\t\t\t\t<input class="input_text" type="text" disabled value="<%=data.phone%>">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="dia_input">\n\t\t\t\t<div class="input_top">\n\t\t\t\t\t<b>\n\t\t\t\t\t\t<%=lang("短信验证码")%>\n\t\t\t\t\t</b>\n\t\t\t\t\t<p class="pro_warning"></p>\n\t\t\t\t</div>\n\t\t\t\t<div class="input_middle">\n\t\t\t\t\t<input class="input_text" type="text" pro_name="auth_code" maxlength="6">\n\t\t\t\t\t<span class="input_text_right sms_verify" act="sms_btn_wrap">\n\t\t\t\t\t\t<a href="" action="getSms" stop="1">\n\t\t\t\t\t\t\t<%=lang("点击获取")%>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t    <% } %>\n\t\t<% if(item === "EMAIL"){ %>\n\t\t\t<div class="dia_input">\n\t\t\t\t<div class="input_top">\n\t\t\t\t\t<b>\n\t\t\t\t\t\t<%=lang("邮箱")%>\n\t\t\t\t\t</b>\n\t\t\t\t\t<p class="pro_warning"></p>\n\t\t\t\t</div>\n\t\t\t\t<div class="input_middle">\n\t\t\t\t\t<input class="input_text" type="text" disabled value="<%=data.email%>">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="dia_input">\n\t\t\t\t<div class="input_top">\n\t\t\t\t\t<b>\n\t\t\t\t\t\t<%=lang("邮箱验证码")%>\n\t\t\t\t\t</b>\n\t\t\t\t\t<p class="pro_warning"></p>\n\t\t\t\t</div>\n\t\t\t\t<div class="input_middle">\n\t\t\t\t\t<input class="input_text" type="text" pro_name="auth_code" verify="1" maxlength="6">\n\t\t\t\t\t<span class="input_text_right sms_verify" act="email_btn_wrap">\n\t\t\t\t\t\t<a href="" action="getEmail" stop="1">\n\t\t\t\t\t\t\t<%=lang("点击获取")%>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t    <% } %>\n\t    <% if(item === "GA"){ %>\n\t    <div class="dia_input">\n\t        <div class="input_top">\n\t            <b><%=lang("谷歌验证码")%></b>\n\t            <p class="pro_warning"></p>\n\t        </div>\n\t        <div class="input_middle">\n\t            <input class="input_text" type="text" pro_name="auth_code">\n\t        </span>\n\t        </div>\n\t    </div>\n\t    <% } %>\n</block>\n\n<block name="verify_setting">\n\t<% if(UI.setting.verify_phone || item === "PHONE"){ %>\n\t\t<div class="dia_input">\n\t\t\t<div class="input_top">\n\t\t\t\t<b>\n\t\t\t\t\t<%=lang("手机号")%>\n\t\t\t\t</b>\n\t\t\t\t<p class="pro_warning"></p>\n\t\t\t</div>\n\t\t\t<div class="input_middle">\n\t\t\t\t<input class="input_text" type="text" disabled value="<%=UI.phone%>">\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="dia_input">\n\t\t\t<div class="input_top">\n\t\t\t\t<b>\n\t\t\t\t\t<%=lang("短信验证码")%>\n\t\t\t\t</b>\n\t\t\t\t<p class="pro_warning"></p>\n\t\t\t</div>\n\t\t\t<div class="input_middle">\n\t\t\t\t<input class="input_text" type="text" pro_name="sms_code" maxlength="6">\n\t\t\t\t<span class="input_text_right sms_verify" act="sms_btn_wrap">\n\t\t\t\t\t<a href="" action="getSms" stop="1">\n\t\t\t\t\t\t<%=lang("点击获取")%>\n\t\t\t\t\t</a>\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</div>\n\t<% } %>\n\t<% if(UI.setting.verify_email || item === "EMAIL"){ %>\n\t\t<div class="dia_input">\n\t\t\t<div class="input_top">\n\t\t\t\t<b>\n\t\t\t\t\t<%=lang("邮箱")%>\n\t\t\t\t</b>\n\t\t\t\t<p class="pro_warning"></p>\n\t\t\t</div>\n\t\t\t<div class="input_middle">\n\t\t\t\t<input class="input_text" type="text" disabled value="<%=UI.email%>">\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="dia_input">\n\t\t\t<div class="input_top">\n\t\t\t\t<b>\n\t\t\t\t\t<%=lang("邮箱验证码")%>\n\t\t\t\t</b>\n\t\t\t\t<p class="pro_warning"></p>\n\t\t\t</div>\n\t\t\t<div class="input_middle">\n\t\t\t\t<input class="input_text" type="text" pro_name="email_code" verify="1" maxlength="6">\n\t\t\t\t<span class="input_text_right sms_verify" act="email_btn_wrap">\n\t\t\t\t\t<a href="" action="getEmail" stop="1">\n\t\t\t\t\t\t<%=lang("点击获取")%>\n\t\t\t\t\t</a>\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</div>\n\t<% } %>\n\t<% if(UI.setting.verify_ga || item === "GA"){ %>\n\t<div class="dia_input">\n\t\t<div class="input_top">\n\t\t\t<b><%=lang("谷歌验证码")%></b>\n\t\t\t<p class="pro_warning"></p>\n\t\t</div>\n\t\t<div class="input_middle">\n\t\t\t<input class="input_text" type="text" pro_name="ga_code" maxlength="6">\n\t\t</span>\n\t\t</div>\n\t</div>\n\t<% } %>\n</block>'
    },
    56: function(t, e) {
        t.exports = '<div class="dia_ticket">\n\t<div class="dia_ticket_head">\n\t\t<dl class="<%if(act){%>dia_ticket_to<%}else{%>dia_ticket_from<%}%>">\n\t\t\t<dt class="upper"><%=scoin.join("+")%></dt>\n\t\t\t<dd><%=lang("可转换")%><em>---</em><span class="huobi_pro_info"><div class="dia_tips"><div><%=lang("1 BT1 + 1 BT2 = 1 BTC，因此BT1、BT2可用余额中的较小值为最大可转换数额")%></div><i>█</i></div>\n        </span></dd>\n\t\t</dl>\n\t\t<dl class="<%if(!act){%>dia_ticket_to<%}else{%>dia_ticket_from<%}%>">\n\t\t\t<dt class="upper"><%= currency %></dt>\n\t\t\t<dd><%=lang("可转换")%><em>---</em></dd>\n\t\t</dl>\n\t\t<b action="switch_dir"><i class="hb_icon_split_coin"></i><em><%=lang("点击切换")%></em></b>\n\t</div>\n\t<div class="dia_ticket_data">\n\t    <div class="dia_input">\n\t        <div class="input_top">\n\t            <b><%=lang("转换数量")%></b>\n\t            <p class="pro_warning"><%=lang("分叉币无需手续费，支持实时到账。")%></p>\n\t        </div>\n\t        <div class="input_middle">\n\t            <input class="input_text" type="text" pro_name="pro_dia_amount" maxlength="20">\n\t            <span class="input_text_right tio_all_in">|<b action="allIn"><%=lang("全部转换")%></b></span>\n\t        </div>\n\t        <p class="input_bottom align_left">\n\t        </p>\n\t    </div>\n\t</div>\n\t<div class="dia_ticket_ouput">\n\t\t<div class="dia_input">\n\t\t\t<div class="input_top">\n\t\t\t\t<b>\n\t\t\t\t\t<%=lang("将消耗")%>\n\t\t\t\t</b>\n\t\t\t\t<p class="pro_warning"></p>\n\t\t\t</div>\n\t\t\t<div class="input_middle">\n\t\t\t\t<input class="input_text" disabled type="text" pro_name="pro_dia_from">\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="dia_input">\n\t\t\t<div class="input_top">\n\t\t\t\t<b>\n\t\t\t\t\t<%=lang("将生成")%>\n\t\t\t\t</b>\n\t\t\t\t<p class="pro_warning"></p>\n\t\t\t</div>\n\t\t\t<div class="input_middle">\n\t\t\t\t<input class="input_text" disabled type="text" pro_name="pro_dia_to">\n\t\t\t</div>\n\t\t</div>\n\t\t\x3c!-- <dl>\n\t\t\t<dt><%=lang("将消耗")%></dt>\n\t\t\t<dd><%=lang("将生成")%></dd>\n\t\t</dl> --\x3e\n\t\t\x3c!-- <dl block="result" class="upper"></dl> --\x3e\n\t</div>\n</div>\n<block name="result">\n\t<% if(!act){%>\n\t<dt>\n\t\t<% for(var i = 0; i < scoin.length; i ++){%>\n\t\t\t<%if(i){%><b>+</b><%}%><em><%=amount%></em><%=scoin[i]%>\n\t\t<% } %>\n\t</dt>\n\t<dd><em><%=amount%></em><%= currency %></dd>\n\t<% } else {%>\n\t<dt><em><%=amount%></em><%= currency %></dt>\n\t<dd>\n\t\t<% for(var i = 0; i < scoin.length; i ++){%>\n\t\t\t<%if(i){%><b>+</b><%}%><em><%=amount%></em><%=scoin[i]%>\n\t\t<% } %>\n\t</dd>\n\t<% }%>\n</block>'
    },
    57: function(t, e, n) {
        t.exports = '<div block="content"></div>\n<block name="loading">\n\t<div class="dia_loading" style="text-align: center"><img class="dia_wd_address_loading" style="width:32px;" src="' + n(23) + '"/></div>\n</block>\n<block name="wegwit2x">\n\t<div class="arg_content">\n\t\t<div class="dia_top_mask" style="display:none"></div>\n\t\t<div class="dia_bottom_mask"></div>\n\t\t<div class="dia_cont"><%=lang(\'P_dialog_segwit2x_agreement\')%></div>\n\t</div>\n\t<div class="dia_arg_btn btn_segwit2x">\n\t\t<button class="btn btn_submit btn-primary" action="btn_submit"><%=lang("我已阅读并同意上述协议")%></button>\n\t</div>\n</block>\n<block name="agreement_margin">\n\t<div class="arg_content">\n\t\t<div class="dia_top_mask" style="display:none"></div>\n\t\t<div class="dia_bottom_mask"></div>\n\t\t<div class="dia_cont"><%=lang(\'P_dialog_agreement_margin\')%></div>\n\t</div>\n\t<div class="dia_arg_btn btn_margin" style="margin-top: 20px">\n\t\t<button class="btn btn_submit btn-primary" action="btn_submit"><%=lang("我已阅读并同意上述协议")%></button>\n\t</div>\n</block>\n\n<block name="agreement">\n\t<div class="arg_content">\n\t\t<div class="dia_top_mask" style="display:none"></div>\n\t\t<div class="dia_bottom_mask"></div>\n\t\t<div class="dia_cont"><%= lang(option.dia_content) %></div>\n\t</div>\n\t<%if(option.dia_checkbox){%>\n\t<div class="dia_arg_btn dia_global_btn" style="padding-top: 10px">\n\t\t<label>\n\t\t\t<input type="checkbox" name="agree" checked="checked"> <%=lang(option.dia_checkbox)%>\n\t\t</label>\n\t</div>\n\t<%}%>\n\t<div class="dia_arg_btn btn_margin" style="margin-top: 20px">\n\t\t<button class="btn btn_submit btn-primary" action="btn_submit"><%=lang(option.dia_button)%></button>\n\t</div>\n</block>\n\n<block name="fireGlobal">\n\t<div class="arg_content dia_global_content">\n\t\t<div class="dia_top_mask" style="display:none"></div>\n\t\t<div class="dia_bottom_mask"></div>\n\t\t<div class="dia_cont dia_global">\n<p><%=lang("尊敬的用户您好：")%></p>\n<p><%=lang("欢迎您选择火币全球专业站（www.huobi.pro）（以下简称“专业站”）。为了您使用方便，您在火币网（www.huobi.com）的账户信息可以通过开通操作后在专业站使用，但前提是您必须同意下列条件，如您不同意下列任一条件，请您停止下一步操作并立即退出本页面：")%></p>\n<p><%=lang("1. 同意火币全球专业站的《用户协议》（包括但不限于正文、《隐私条款》、《了解你的客户和反洗钱政策》等）的内容，请您务必仔细阅读并了解相关内容，详见链接")%>(<a href=\'<%=location.protocol%>//<%=location.hostname%><%=lang("ROOT")%>about/agreement\' target="_blank"><%=location.protocol%>//<%=location.hostname%><%=lang("ROOT")%>about/agreement</a>);</p>\n<p><%=lang("2. 如您点击“开通”，即视为: 您已经仔细阅读并完全理解且同意了《用户协议》等内容，并同意受到《用户协议》的约束和管辖；且您已经授权专业站访问您在火币网的账户信息，包括但不限于注册信息、认证信息等。")%></p>\n\t\t</div>\n\t</div>\n\t<div class="dia_arg_btn dia_global_btn">\n\t\t<p><input type="checkbox" chekced="" id="agreeAgt" name="" style="margin-right:10px;"><label for="agreeAgt"><%=lang("开通后表明您已同意以上授权说明及")%><a href=\'<%=location.protocol%>//<%=location.hostname%><%=lang("ROOT")%>about/agreement\' target="_blank" class="main_link"><%=lang("《用户协议》")%></a></label></p>\n\t\t<button class="btn btn_submit btn-primary" action="btn_submit"><%=lang("开通火币全球专业站")%></button>\n\t</div>\n</block>\n\n<block name="content">\n\t<%=content%>\n</block>\n<block name="verify_setting">\n\t\t<% if((option.action !== "enable" && UI.setting.verify_phone) || item === "PHONE"){ %>\n\t\t\t<div class="dia_input">\n\t\t\t\t<div class="input_top">\n\t\t\t\t\t<b>\n\t\t\t\t\t\t<%=lang("手机号")%>\n\t\t\t\t\t</b>\n\t\t\t\t\t<p class="pro_warning"></p>\n\t\t\t\t</div>\n\t\t\t\t<div class="input_middle">\n\t\t\t\t\t<input class="input_text" type="text" disabled value="<%=UI.phone%>">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="dia_input">\n\t\t\t\t<div class="input_top">\n\t\t\t\t\t<b>\n\t\t\t\t\t\t<%=lang("短信验证码")%>\n\t\t\t\t\t</b>\n\t\t\t\t\t<p class="pro_warning"></p>\n\t\t\t\t</div>\n\t\t\t\t<div class="input_middle">\n\t\t\t\t\t<input class="input_text" type="text" pro_name="sms_code" maxlength="6">\n\t\t\t\t\t<span class="input_text_right sms_verify" act="sms_btn_wrap">\n\t\t\t\t\t\t<a href="" action="getSms" stop="1">\n\t\t\t\t\t\t\t<%=lang("点击获取")%>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t    <% } %>\n\t\t<% if((option.action !== "enable" && UI.setting.verify_email) || item === "EMAIL"){ %>\n\t\t\t<div class="dia_input">\n\t\t\t\t<div class="input_top">\n\t\t\t\t\t<b>\n\t\t\t\t\t\t<%=lang("邮箱")%>\n\t\t\t\t\t</b>\n\t\t\t\t\t<p class="pro_warning"></p>\n\t\t\t\t</div>\n\t\t\t\t<div class="input_middle">\n\t\t\t\t\t<input class="input_text" type="text" disabled value="<%=UI.email%>">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="dia_input">\n\t\t\t\t<div class="input_top">\n\t\t\t\t\t<b>\n\t\t\t\t\t\t<%=lang("邮箱验证码")%>\n\t\t\t\t\t</b>\n\t\t\t\t\t<p class="pro_warning"></p>\n\t\t\t\t</div>\n\t\t\t\t<div class="input_middle">\n\t\t\t\t\t<input class="input_text" type="text" pro_name="email_code" verify="1" maxlength="6">\n\t\t\t\t\t<span class="input_text_right sms_verify" act="email_btn_wrap">\n\t\t\t\t\t\t<a href="" action="getEmail" stop="1">\n\t\t\t\t\t\t\t<%=lang("点击获取")%>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t    <% } %>\n\t    <% if((option.action !== "enable" && UI.setting.verify_ga) || item === "GA"){ %>\n\t    <div class="dia_input">\n\t        <div class="input_top">\n\t            <b><%=lang("谷歌验证码")%></b>\n\t            <p class="pro_warning"></p>\n\t        </div>\n\t        <div class="input_middle">\n\t            <input class="input_text" type="text" pro_name="ga_code">\n\t        </span>\n\t        </div>\n\t    </div>\n\t    <% } %>\n</block>\n<block name="disable_margin">\n\t<p><%=lang("您所在的国家或地区暂不支持杠杆功能")%></p>\n</block>'
    },
    58: function(t, e) {
        t.exports = '<div class="repay_content">\n    <div class="dia_input">\n        <div class="input_top">\n           <%=lang("杠杆账户")%>\n        </div>\n        <div class="input_middle">\n            <input class="input_text font_16 uppercase" type="text" disabled="disabled" value="<%=symbols%>">\n        </div>\n    </div>\n    <div class="dia_input">\n        <div class="input_top">\n            <%=lang("应还数量")%>\n        </div>\n        <div class="input_middle">\n            <p class="font_24"><%=Num(add(order["loan-balance"]*1 , order["interest-balance"]*1),"8")%> <em class="uppercase"><%=order.currency%></em></p>\n        </div>\n    </div>\n    <div class="dia_input">\n        <div class="left_amount">\n            <div class="input_top">\n                <%=lang("借贷数量")%>\n                <em class="uppercase"><%=Num(order["loan-balance"],"8")%> <%=order.currency%></em>\n            </div>\n        </div>\n        <div class="left_amount">\n            <div class="input_top">\n                <%=lang("利息")%>\n                <em class="uppercase"><%=Num(order["interest-balance"],"8")%> <%=order.currency%></em>\n            </div>\n        </div>\n    </div>\n    <div class="dia_input">\n        <div class="input_top">\n            <b><%=lang("归还数量")%></b>\n            <p class="avail_able">\n                <%=lang("可用")%> <%=Num(cash[order.currency],STORE.currencyDataObj[order.currency]["show-precision"])%> <em class="uppercase"><%=order.currency%></em>\n            </p>\n        </div>\n        <div class="input_middle">\n            <input flag="amt" class="input_text" type="text">\n            <span class="input_text_right tio_all_in"><em class="uppercase"><%=order.currency%></em> <s></s><b action="allIn"><%=lang("全部")%></b></span>\n        </div>\n    </div>\n</div>'
    },
    59: function(t, e) {
        t.exports = '<div class="lead_dialog">\n\t<p><%=lang("请您先完成如下操作")%>：</p>\n\t<ul block="task_list"></ul>\n</div>\n<block name="task_list">\n\t<%for(var i = 0,l = task.length; i < l; i++){%>\n\n\t\t<li class="<%=task[i].index ? \'complete\' : \'\'%>">\n\t\t\t<i class="<%=task[i].status ? \'hb_icon_toast_success\' : \'hb_icon_toast_failed\'%>"></i>\n\t\t\t<span><%=task[i].title%></span>\n\t\t\t<a href="<%=task[i].actionUrl%>" target="_blank" <%if(task[i].index){%>stop="1"<%}%>><%= lang(task[i].status ? "已完成" : task[i].actionName)%></a>\n\t\t</li>\n\t\t<%}%>\n</block>'
    },
    6: function(t, e, n) {
        "use strict";
        function a() {
            var t = i.symbolDataArr
                , e = i.symbolDataObj
                , n = {
                overview: {},
                depth: {},
                trade: {},
                marketSymbols: t
            }
                , a = void 0;
            if (t)
                for (var r = 0; r < t.length; r++)
                    a = t[r],
                        n.overview[a] = {
                            ticker: {},
                            day: {},
                            symbol: [e[a]["base-currency"], e[a]["quote-currency"]],
                            rate: "",
                            direction: "",
                            oldPrice: ""
                        },
                        n.depth[a] = {},
                        n.trade[a] = {};
            return n
        }
        var i = top.window.STORE || {
                market: {},
                userInfo: {},
                token: "",
                ticket: "",
                account: [],
                balance: {},
                marginBalance: {},
                marginBalanceTotal: null,
                useAccountId: 0,
                interceptor: !1,
                authTicket: !1,
                lang: localStorage.lang || "en_us",
                currencyReady: !1,
                currencyData: [],
                currencyDataObj: {},
                currencyDataArr: [],
                symbolReady: !1,
                symbolData: [],
                symbolDataObj: {},
                symbolDataArr: [],
                marginReady: !1,
                marginData: [],
                marginDataObj: {},
                marginDataArr: [],
                marginFlState: {
                    "fl-sys": 1,
                    "fl-mgt": 1,
                    "fl-end": 1
                }
            };
        i.InitSymbol = function() {
            i.market = a()
        }
            ,
            window.STORE = i,
            e.a = i
    },
    60: function(t, e) {
        t.exports = '<div class="transfer_content">\n    <dl class="tio_form_view">\n        <dt><%=lang("从")%><i class="hb_icon_split_coin" action="changeDirection"></i><%=lang("到")%></dt>\n        <dd flag="dir">\n            <div class="account1"><%=lang("交易账户")%></div>\n            <div class="account2"><span class="uppercase"><%=base%>/<%=quote%></span><%=lang("杠杆账户")%></div>\n        </dd>\n    </dl>\n    <div class="dia_input">\n        <div class="input_top">\n            <b><%=lang("币种")%></b>\n        </div>\n        <div class="input_middle input_margin_select uppercase" flag="filter">\n            <span action="changeFilter" data-filter="<%=base%>"><%=base%><i></i></span><span action="changeFilter" data-filter="<%=quote%>"><%=quote%><i></i></span>\n        </div>\n\n    </div>\n    <div class="dia_input">\n        <div class="input_top">\n            <b><%=lang("数量")%></b>\n            <p class="avail_able">\n                <%=lang("可转")%> <i flag="ava" class="uppercase">---</i>\n                <i class="hb_icon_tip" flag="tips">\n                    <em><%=lang("杠杆账户的风险率高于200%部分的资金可转出")%></em>\n                </i>\n            </p>\n        </div>\n        <div class="input_middle">\n            <input class="input_text" type="text" pro_name="pro_dia_amount" maxlength="20">\n            <span class="input_text_right tio_all_in"><em class="uppercase" flag="inputFlag"><%=currency%></em> <s></s><b action="allIn"><%=lang("全部")%></b></span>\n        </div>\n\n    </div>\n</div>'
    },
    7: function(t, e, n) {
        "use strict";
        function a(t) {
            var e = this;
            return e.html = t.html,
                e.state = "close",
                e.Open = function() {
                    e.dialog.style.display = "block",
                        e.state = "open",
                    e.Then && e.Then({
                        type: "open"
                    })
                }
                ,
                e.Close = function(t) {
                    e.dialog.style.display = "none",
                        e.state = "close",
                    e.Then && e.Then({
                        type: "close",
                        driver: t ? "inhuman" : "unhuman"
                    })
                }
                ,
                e.Submit = function() {
                    e.Then && e.Then({
                        type: "submit"
                    })
                }
                ,
                e.dialog = new r.b(e.html,"body"),
                e.dialog.style.display = "none",
                e.closeBtn = e.dialog.querySelector(".close"),
                o.e.add(e.dialog, "click", function(t) {
                    var n = o.e.target(t);
                    (n.className.toString().indexOf("close") > -1 || n.className.toString().indexOf("cancel") > -1) && e.Close(1),
                    n.className.toString().indexOf("btn_submit") > -1 && e.Submit()
                }),
                e.callback = function(t) {
                    e.Then = t
                }
                ,
                e
        }
        function i(t) {
            var e = s.a.split("block_dia_content");
            return {
                fc: e[0] + t + e[1],
                html: '<div class="dialog_wrap">' + e[0] + t + e[1] + "</div>"
            }
        }
        n.d(e, "a", function() {
            return a
        }),
            n.d(e, "b", function() {
                return i
            });
        var r = n(5)
            , o = n(0)
            , c = n(53)
            , s = n.n(c)
    },
    705: function(t, e) {},
    770: function(t, e, n) {
        t.exports = n(339)
    },
    8: function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return i
        });
        var a = n(2)
            , i = {
            __ready: n.i(a.c)("__ready"),
            __ajaxState: n.i(a.c)("__ajaxState"),
            __getUserInfo: n.i(a.c)("__getUserInfo"),
            __userLogin: n.i(a.c)("__userLogin"),
            __userLogout: n.i(a.c)("__userLogout"),
            __userIsLogin: n.i(a.c)("__userIsLogin"),
            __getImgCaptcha: n.i(a.c)("__getImgCaptcha"),
            __getUserLoginErrNum: n.i(a.c)("__getUserLoginErrNum"),
            __formLoginVerify: n.i(a.c)("__formLoginVerify"),
            __formRegisterVerify: n.i(a.c)("__formRegisterVerify"),
            __verifyToken: n.i(a.c)("__verifyToken"),
            __marketTicker: n.i(a.c)("__marketTicker"),
            __marketDay: n.i(a.c)("__marketDay"),
            __marketDepth: n.i(a.c)("__marketDepth"),
            __getNotice: n.i(a.c)("__getNotice"),
            __getUserAccount: n.i(a.c)("__getUserAccount"),
            __getUserBalance: n.i(a.c)("__getUserBalance"),
            __getUserMarginBalance: n.i(a.c)("__getUserMarginBalance"),
            __getEquivalent: n.i(a.c)("__getEquivalent"),
            __getAuthCheck: n.i(a.c)("__getAuthCheck"),
            __resInterceptors: n.i(a.c)("__resInterceptors"),
            __ucLoginControl: n.i(a.c)("__ucLoginControl"),
            __ucLogin: n.i(a.c)("__ucLogin"),
            __ucIsLogin: n.i(a.c)("__ucIsLogin"),
            __ucLogout: n.i(a.c)("__ucLogout", !0),
            __ucGetUserInfo: n.i(a.c)("__ucGetUserInfo"),
            __changeTheme: n.i(a.c)("__changeTheme"),
            __tickerSub: n.i(a.c)("__tickerSub"),
            __dayKlineSub: n.i(a.c)("__dayKlineSub"),
            __allSymbolTicker: n.i(a.c)("__allSymbolTicker"),
            __allSymbolDayKline: n.i(a.c)("__allSymbolDayKline"),
            __loginDisplayToggle: n.i(a.c)("__loginDisplayToggle"),
            __userRegister: n.i(a.c)("__userRegister")
        }
    },
    9: function(t, e, n) {
        "use strict";
        function a(t) {
            for (var e = {
                trade: {},
                frozen: {},
                credit: {},
                total: {}
            }, n = t, a = 0; a < n.length; a++)
                "trade" === n[a].type && (e.trade[n[a].currency] = n[a].balance,
                    e.total[n[a].currency] = e.total[n[a].currency] || 0,
                    e.total[n[a].currency] = 1 * e.total[n[a].currency] + 1 * n[a].balance),
                "frozen" === n[a].type && (e.frozen[n[a].currency] = n[a].balance,
                    e.total[n[a].currency] = e.total[n[a].currency] || 0,
                    e.total[n[a].currency] = 1 * e.total[n[a].currency] + 1 * n[a].balance),
                "credit" === n[a].type && (e.credit[n[a].currency] = n[a].balance);
            return e
        }
        function i(t) {
            function e(t) {
                var e = {};
                return t.forEach(function(t, n) {
                    e[t.type] = e[t.type] || {},
                        e[t.type][t.currency] = t.balance
                }),
                    e
            }
            var n = t || []
                , a = {};
            return n.forEach(function(t, n) {
                a[t.symbol] = e(t.list),
                    a[t.symbol]["risk-rate"] = t["risk-rate"],
                    a[t.symbol]["fl-price"] = t["fl-price"],
                    a[t.symbol]["fl-type"] = t["fl-type"],
                    a[t.symbol].state = t.state
            }),
                a
        }
        function r(t) {
            g.a.balance = a(t.list),
                n.i(l.b)(d.a.__getUserBalance, g.a.balance)
        }
        function o() {
            var t = location.hostname.split(".");
            return t.shift(),
                t.join(".")
        }
        function c(t) {
            var e = location.pathname
                , n = e.split("/")
                , a = t || localStorage.lang
                , i = location.search
                , r = location.hash
                , o = !0;
            return p.a[n[1]] && (o = !1),
                a === p.b ? o || n.splice(1, 1) : o ? n.splice(1, 0, a) : n.splice(1, 1, a),
                localStorage.lang = t,
            n.join("/") + i + r
        }
        function s(t) {
            var e = location.pathname
                , n = location.search
                , a = e.split("/")
                , i = void 0;
            i = a[1] === p.b ? "/login/" : p.a[a[1]] ? "/" + a[1] + "/login/" : "/login/",
            a.indexOf("login") < 0 && (t || !!a[1]) && function() {
                setTimeout(function() {
                    location.href = i + "?backUrl=" + e + n
                }, 50)
            }()
        }
        function u(t) {
            var e = "OTC_ACTION_" + t
                , n = f.h.get(e);
            return n ? (f.h.del(e, {
                domain: o(),
                path: "/"
            }),
                location.href = location.protocol + "//otc.huobi.pro/" + decodeURIComponent(n)) : null
        }
        n.d(e, "e", function() {
            return u
        }),
            n.d(e, "b", function() {
                return o
            }),
            n.d(e, "a", function() {
                return b
            }),
            n.d(e, "f", function() {
                return y
            }),
            n.d(e, "d", function() {
                return c
            }),
            n.d(e, "c", function() {
                return s
            });
        var l = n(2)
            , d = n(8)
            , p = n(3)
            , f = n(0)
            , m = (n(1),
            n(13))
            , g = n(6)
            , _ = n(13)
            , b = new m.a(g.a.useAccountId);
        b.Then = r,
            b.GetAccountThen = function(t) {
                var e = t.data;
                "ok" === e.status && (g.a.account = e.data,
                    n.i(l.b)(d.a.__getUserAccount, e))
            }
        ;
        var y = new _.b;
        y.Then = function(t) {
            g.a.marginBalance = n.i(f.i)(g.a.marginBalance, i(t)),
                n.i(l.b)(d.a.__getUserMarginBalance, g.a.marginBalance)
        }
    },
    92: function(t, e, n) {
        "use strict";
        function a(t) {
            function e(t) {
                var e = t.length;
                if (!(e < 1))
                    for (var a = 0; a < e; a++)
                        t[a].index = a,
                            n(t[a])
            }
            function n(t) {
                i.e.add(t, a.op.eventType, function(t) {
                    var e = t.target
                        , n = e.index;
                    n === a.cur && o || (a.ShowBox(n),
                    a.Then && a.Then(n))
                })
            }
            var a = this
                , r = t || {}
                , o = r.one;
            r.eventType = r.eventType || "click",
                a.op = r,
                a.Init = function(t) {
                    t && (a.Box = t,
                        a.childrens = [],
                        [].slice.apply(t.childNodes).forEach(function(t) {
                            1 === t.nodeType && a.childrens.push(t)
                        }),
                        a.hd = a.childrens[0],
                        a.cur = 0,
                        a.tab = a.hd.getElementsByTagName("li"),
                        e(a.tab))
                }
                ,
                a.ShowBox = function(t) {
                    a.HideBox(),
                        a.cur = 1 * t,
                        a.tab[t].className = "cur",
                        a.childrens[a.cur + 1].style.display = "block"
                }
                ,
                a.HideBox = function() {
                    a.tab[a.cur].className = "",
                        a.childrens[a.cur + 1].style.display = "none"
                }
        }
        var i = n(0);
        e.a = a
    },
    97: function(t, e, n) {
        "use strict";
        function a(t) {
            function e(t, e) {
                for (var n in e)
                    t[n] = e[n];
                return t
            }
            function n(t, n) {
                var a = e(n || {})
                    , i = {
                    kline: {},
                    trade: {},
                    depth: {},
                    ticker: {},
                    overview: {}
                };
                for (var r in i)
                    !function(n) {
                        i[n] = function(i) {
                            var r = {};
                            return r[t] = o[n](i),
                                e(r, a)
                        }
                    }(r);
                return i
            }
            var t = t || {}
                , a = t.symbol || "btccny"
                , i = t.period || "1min"
                , r = t.step || "step0"
                , o = {
                kline: function(t) {
                    var t = t || {};
                    return "market." + (t.symbol || a) + ".kline." + (t.period || i)
                },
                trade: function(t) {
                    var t = t || {};
                    return "market." + (t.symbol || a) + ".trade.detail"
                },
                ticker: function(t) {
                    var t = t || {};
                    return "market." + (t.symbol || a) + ".detail"
                },
                depth: function(t) {
                    var t = t || {};
                    return "market." + (t.symbol || a) + ".depth." + (t.step || r)
                },
                overview: function(t) {
                    return "market.overview"
                }
            };
            return {
                req: function(t) {
                    return n("req", t)
                },
                sub: function(t) {
                    return n("sub", t)
                },
                unsub: function(t) {
                    return n("unsub", t)
                }
            }
        }
        n.d(e, "a", function() {
            return u
        }),
            n.d(e, "b", function() {
                return a
            });
        var i = n(12)
            , r = n.n(i)
            , o = n(187)
            , c = n.n(o)
            , s = [];
        s[1] = "req",
            s[2] = "sub",
            s[4] = "unsub",
            top.window.api = top.window.api = a;
        var u = function() {
            function t() {
                function t(t) {
                    t.onerror = e,
                        t.onclose = n,
                        t.msg = p,
                        t.onmessage = i,
                        t.onopen = d
                }
                function e(t) {
                    top.window.debug_is_open && console.error(g + "::WebSocket on error ====>", t)
                }
                function n(e) {
                    top.window.debug_is_open && console.warn(g + "::WebSocket on close ====>", e),
                        o[g] = new WebSocket(g),
                        o[g].ts = 1 * new Date,
                        o[g].isOpen = 0,
                        t(o[g])
                }
                function a(t, e, n) {
                    var i = new FileReader;
                    if (n)
                        i.addEventListener("loadend", function() {
                            for (var t = "", n = new Uint8Array(i.result), a = n.byteLength, r = 0; r < a; r++)
                                t += String.fromCharCode(n[r]);
                            e(t)
                        }),
                            i.readAsArrayBuffer(t);
                    else {
                        i.addEventListener("loadend", function() {
                            e(i.result)
                        });
                        try {
                            i.readAsBinaryString(t)
                        } catch (n) {
                            a(t, e, !0)
                        }
                    }
                }
                function i(t) {
                    var e;
                    new FileReader;
                    try {
                        e = JSON.parse(t.data),
                            u(e)
                    } catch (n) {
                        if ("string" == typeof t.data)
                            return;
                        a(t.data, function(t) {
                            e = JSON.parse(c.a.inflate(t, {
                                to: "string"
                            })),
                                u(e)
                        })
                    }
                }
                function u(t) {
                    var e = t.rep ? "rep" : t.unsubbed ? "unsubbed" : "ch"
                        , n = t.rep || t.unsubbed || t.subbed || t.ch || t.ping
                        , a = _.callback[e] ? _.callback[e][n] : null;
                    if (top.window.unzip_is_open && console.warn(g + "::WebSocket on message ====>", t, _.callback[e]),
                        "error" != t.status)
                        return t.ping ? f(t.ping) : a ? ("unsubbed" == e && (delete _.callback.ch[n],
                            l(4, "unsub." + n, n)),
                        "unsubbed" == e && delete _.callback[e][n],
                        "rep" == e && (delete _.callback[e][n],
                            l(1, "req." + n, n)),
                            void a(t, e, n)) : void 0
                }
                function l(t, e, n) {
                    if (1 == t)
                        return delete _.msgList[e];
                    4 == t && (delete _.msgList[e],
                        delete _.msgList["sub." + n])
                }
                function d() {
                    o[g].isOpen = 1;
                    for (var t in _.msgList)
                        o[g].send(_.msgList[t])
                }
                function p(t, e) {
                    var n = parseInt([~~!!t.unsub, ~~!!t.sub, ~~!!t.req].join(""), 2)
                        , a = "";
                    a = s[n] + "." + (t.req || t.sub || t.unsub),
                        _.msgList[a] = r()(t),
                    o[g].isOpen && o[g].send(_.msgList[a]),
                    e && m && m(t, e)
                }
                function f(t) {
                    o[g].send(r()({
                        pong: t
                    }))
                }
                function m(t, e) {
                    var n = s[parseInt([~~!!t.unsub, ~~!!t.sub, ~~!!t.req].join(""), 2)]
                        , a = t[n];
                    _.callback[b[n]] || (_.callback[b[n]] = {}),
                        _.callback[b[n]][a] = e
                }
                var g = this.host
                    , _ = this
                    , b = {
                    req: "rep",
                    sub: "ch",
                    unsub: "unsubbed"
                };
                if (_.msgList = {},
                        _.callback = {},
                        g)
                    return o[g] ? function() {
                        return o[g]
                    }
                        : (o[g] = new WebSocket(g),
                            o[g].ts = 1 * new Date,
                            t(o[g]),
                            function() {
                                return o[g]
                            }
                    )
            }
            function e(t) {
                var e;
                if (!top.window.getSearchParameters) {
                    e = location.search.replace("?", "").split("&"),
                        top.window.getSearchParameters = {};
                    for (var n, a = 0, i = e.length; a < i; a++)
                        n = e[a].split("="),
                            top.window.getSearchParameters[n[0]] = decodeURIComponent(n[1])
                }
                return top.window.getSearchParameters[t]
            }
            function n() {
                var t, e = [].slice.apply(arguments);
                if (!(e.length < 2))
                    return e.shift().apply(t = e.shift(), e.length ? e : [t])
            }
            function a() {
                function t(t, e) {
                    var o = 1 * new Date + ~~(1e5 * Math.random())
                        , c = parseInt([~~!!t.unsub, ~~!!t.sub, ~~!!t.req].join(""), 2)
                        , u = s[c] + "." + (t.req || t.sub || t.unsub);
                    a[u] || (a[u] = [],
                        i[u] = 0),
                        a[u].push(e),
                        e.alias = "fn_" + o.toString(o % 16 + 20),
                        e.msg = u,
                        e.bodywords = e.toString().replace(/[^\d\w]/g, ""),
                    !i[u] && r().msg(t, n) && (i[u] = 1)
                }
                function e(t, e, i) {
                    var o = parseInt([~~!!t.unsub, ~~!!t.sub, ~~!!t.req].join(""), 2)
                        , c = s[o] + "." + (t.req || t.sub || t.unsub)
                        , u = c.replace(/^unsub/, "sub")
                        , l = c.replace(/^sub/, "unsub")
                        , d = {
                        unsub: l.replace("unsub.", "")
                    }
                        , p = a[u];
                    if ("req" != s[o] && p) {
                        for (var f = p.length; f--; ) {
                            if (e.alias && p[f].alias === e.alias) {
                                p.splice(f, 1),
                                i && i(0);
                                break
                            }
                            if (!e.alias && p[f].bodywords == e.toString().replace(/[^\d\w]/g, "")) {
                                e.name || console.warn("匿名函数有可能导致移除错误!"),
                                    p.splice(f, 1),
                                i && i(0);
                                break
                            }
                        }
                        p.length || (delete a[u],
                            r().msg(d, function(t) {
                                n(t, i)
                            }))
                    }
                }
                function n(t, e) {
                    var n = parseInt([~~!!t.unsubbed, ~~!!t.subbed || ~~!!t.ch, ~~!!t.rep].join(""), 2)
                        , i = s[n] + "." + (t.rep || t.subbed || t.ch || t.unsubbed);
                    if (a[i])
                        for (var r = a[i].length; r--; )
                            a[i][r](t);
                    1 == n && delete a[i],
                    t.unsubbed && e && e(1)
                }
                var a = {}
                    , i = {}
                    , r = this;
                return {
                    plugin: t,
                    unplug: e,
                    info: r()
                }
            }
            function i(e) {
                if (e)
                    return top.window["__operator" + e] ? top.window["__operator" + e] : top.window["__operator" + e] = n(a, n(t, {
                        host: e
                    }))
            }
            var o = {};
            return top.window.debug_is_open = e("debug_is_open"),
                top.window.unzip_is_open = e("unzip_is_open"),
                {
                    handsup: i
                }
        }();
        top.window.operator = top.window.operator || u
    }
}, [770]);

