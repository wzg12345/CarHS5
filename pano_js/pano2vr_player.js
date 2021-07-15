//////////////////////////////////////////////////////////////////////
// Pano2VR 6.0.6/17336 HTML5/CSS3 & WebGL Panorama Player           //
// License: BKYM.COM                                                //
// (c) 2019, Garden Gnome Software, http://ggnome.com               //
//////////////////////////////////////////////////////////////////////

var G = "function" == typeof Object.defineProperties ? Object.defineProperty : function(r, n, m) {
		r != Array.prototype && r != Object.prototype && (r[n] = m.value)
	},
	N = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ?
	global : this;

function O(r, n) {
	if (n) {
		var m = N;
		r = r.split(".");
		for (var e = 0; e < r.length - 1; e++) {
			var c = r[e];
			c in m || (m[c] = {});
			m = m[c]
		}
		r = r[r.length - 1];
		e = m[r];
		n = n(e);
		n != e && null != n && G(m, r, {
			configurable: !0,
			writable: !0,
			value: n
		})
	}
}
var P;
if ("function" == typeof Object.setPrototypeOf) P = Object.setPrototypeOf;
else {
	var Q;
	a: {
		var R = {
				an: !0
			},
			S = {};
		try {
			S.__proto__ = R;
			Q = S.an;
			break a
		} catch (r) {}
		Q = !1
	}
	P = Q ? function(r, n) {
		r.__proto__ = n;
		if (r.__proto__ !== n) throw new TypeError(r + " is not extensible");
		return r
	} : null
}
var T = P;
O("Object.setPrototypeOf", function(r) {
	return r || T
});
O("Array.prototype.fill", function(r) {
	return r ? r : function(n, m, e) {
		var c = this.length || 0;
		0 > m && (m = Math.max(0, c + m));
		if (null == e || e > c) e = c;
		e = Number(e);
		0 > e && (e = Math.max(0, c + e));
		for (m = Number(m || 0); m < e; m++) this[m] = n;
		return this
	}
});
var __extends = this && this.__extends || function() {
	function r(n, m) {
		r = Object.setPrototypeOf || {
			__proto__: []
		}
		instanceof Array && function(e, c) {
			e.__proto__ = c
		} || function(e, c) {
			for (var a in c) c.hasOwnProperty(a) && (e[a] = c[a])
		};
		return r(n, m)
	}
	return function(n, m) {
		function e() {
			this.constructor = n
		}
		r(n, m);
		n.prototype = null === m ? Object.create(m) : (e.prototype = m.prototype, new e)
	}
}();

function U() {
	var r = "perspective",
		n = ["Webkit", "Moz", "O", "ms", "Ms"],
		m;
	for (m = 0; m < n.length; m++) "undefined" !== typeof document.documentElement.style[n[m] + "Perspective"] && (r =
		n[m] + "Perspective");
	"undefined" !== typeof document.documentElement.style[r] ? "webkitPerspective" in document.documentElement.style ? (
		r = document.createElement("style"), n = document.createElement("div"), m = document.head || document
		.getElementsByTagName("head")[0], r.textContent = "@media (-webkit-transform-3d) {#ggswhtml5{height:5px}}",
		m.appendChild(r),
		n.id = "ggswhtml5", document.documentElement.appendChild(n), m = 5 === n.offsetHeight, r.parentNode
		.removeChild(r), n.parentNode.removeChild(n)) : m = !0 : m = !1;
	return m
}

function V() {
	var r;
	if (r = !!window.WebGLRenderingContext) try {
		var n = document.createElement("canvas");
		n.width = 100;
		n.height = 100;
		var m = n.getContext("webgl");
		m || (m = n.getContext("experimental-webgl"));
		r = !!m
	} catch (e) {
		r = !1
	}
	return r
}
var ggP2VR;
(function(r) {
	var n = function() {
		function e(c) {
			this.g = null;
			this.lg = this.jl = this.gb = !1;
			this.hb = !0;
			this.nb = this.Ea = this.xa = 0;
			this.f = 70;
			this.Va = 0;
			this.autoplay = this.qg = !1;
			this.id = "";
			this.i = this.pan = 0;
			this.g = c;
			this.ed = this.Jc = 100;
			this.xd = 1
		}
		e.prototype.Rb = function(c) {
			var a;
			if (a = c.getAttributeNode("id")) this.id = a.nodeValue.toString();
			if (a = c.getAttributeNode("pan")) this.pan = Number(a.nodeValue);
			if (a = c.getAttributeNode("tilt")) this.i = Number(a.nodeValue)
		};
		e.prototype.Fm = function(c) {
			var a = "",
				b = this.g,
				d = !0;
			if (b.Kh) {
				var f =
					new r.ya(0, 0, -100);
				f.xa(-this.i * Math.PI / 180);
				f.Ea(this.pan * Math.PI / 180);
				f.Ea(-b.pan.c * Math.PI / 180);
				f.xa(b.i.c * Math.PI / 180);
				f.nb(b.O.c * Math.PI / 180);
				.01 <= f.z && (d = !1)
			}
			b.Bc && (a += "perspective(" + c + "px) ");
			a = a + ("translate3d(0px,0px," + c + "px) ") + ("rotateZ(" + b.O.c.toFixed(10) + "deg) ");
			a += "rotateX(" + b.i.c.toFixed(10) + "deg) ";
			a += "rotateY(" + (-b.pan.c).toFixed(10) + "deg) ";
			a += "rotateY(" + this.pan.toFixed(10) + "deg) ";
			a += "rotateX(" + (-this.i).toFixed(10) + "deg) ";
			c = 1E4;
			f = this.b.videoWidth;
			var g = this.b.videoHeight;
			if (0 ==
				f || 0 == g) f = 640, g = 480;
			0 < this.Jc && (f = this.Jc);
			0 < this.ed && (g = this.ed);
			0 < f && 0 < g && (this.b.width = f, this.b.height = g, this.b.style.width = f + "px", this.b
				.style.height = g + "px");
			0 < this.f && (c = f / (2 * Math.tan(this.f / 2 * Math.PI / 180)));
			a += "translate3d(0px,0px," + (-c).toFixed(10) + "px) ";
			a += "rotateZ(" + this.nb.toFixed(10) + "deg) ";
			a += "rotateY(" + (-this.Ea).toFixed(10) + "deg) ";
			a += "rotateX(" + this.xa.toFixed(10) + "deg) ";
			this.xd && 1 != this.xd && (a += "scaleY(" + this.xd + ") ");
			a += "translate3d(" + -f / 2 + "px," + -g / 2 + "px,0px) ";
			this.b.style[b.Sa +
				"Origin"] = "0% 0%";
			this.gb && (a = "", 1 == this.Va && (a += "scale(" + Math.min(b.o.width / f, b.o.height / g) +
				") "), a += "translate3d(" + -f / 2 + "px," + -g / 2 + "px,0px) ");
			this.Bo != a && (this.Bo = a, this.b.style[b.Sa] = a, this.b.style.visibility = d && this.hb ?
				"visible" : "hidden", this.lg && this.jl == this.gb && (this.b.style[b.cd] =
					"all 0s linear 0s"), this.jl = this.gb)
		};
		e.prototype.Cf = function(c) {
			this.b && (this.b.style.visibility = c ? "visible" : "hidden")
		};
		e.prototype.Ne = function() {
			var c = this.g;
			c.Z ? (this.b.style.left = c.o.width / 2 + "px", this.b.style.top =
				c.o.height / 2 + "px") : (this.b.style.left = c.margin.left + c.o.width / 2 + "px", this
				.b.style.top = c.margin.top + c.o.height / 2 + "px")
		};
		return e
	}();
	r.Eq = n;
	var m = function(e) {
		function c(a) {
			a = e.call(this, a) || this;
			a.la = !1;
			a.rm = !1;
			a.Ol = !1;
			a.If = !1;
			a.bj = !1;
			a.Cj = !1;
			a.Oe = !1;
			a.Vb = null;
			a.qh = null;
			a.Ug = 0;
			a.ze = 0;
			a.rf = !1;
			a.lp = !1;
			a.stopped = !1;
			a.url = [];
			a.loop = 0;
			a.level = 1;
			a.gc = 0;
			a.mode = 1;
			a.yh = 10;
			a.ub = 0;
			a.Hf = 0;
			a.ka = 1;
			a.Uc = 0;
			a.Ec = 0;
			a.Fc = 0;
			a.Vc = 0;
			a.ai = -1;
			return a
		}
		__extends(c, e);
		c.prototype.Yj = function() {
			var a = this,
				b = a.b.play();
			if (void 0 !==
				b) b.then(function() {
				a.Fi()
			})["catch"](function() {
				a.b.pause();
				a.rm && (a.b.muted = !0, a.b.play())
			})
		};
		c.prototype.nm = function() {
			this.la && this.stopped ? this.stopped = !1 : 0 == this.loop ? this.la ? (this.Vb = null, this
				.Md()) : this.b.play() : 0 < this.$c ? (this.$c--, this.la || (this.b.currentTime = 0),
				this.bj && (this.xc && 0 == this.xc.gain.value || 0 == this.Ib.gain.value && 0 == this
					.Lb.gain.value && 0 == this.Jb.gain.value && 0 == this.Kb.gain.value) || (this.la ?
					(this.Vb = null, this.Md()) : this.b.play())) : this.la && (this.Vb = null, this
				.rf = !1)
		};
		c.prototype.Fi =
			function() {
				this.Oe = !1;
				var a = this.g.qa;
				a && (this.la || (this.source = a.createMediaElementSource(this.b)), 2 == this.mode || 3 == this
					.mode || 5 == this.mode ? (this.ud = a.createChannelSplitter(2), this.Ib = a
						.createGain(), this.Jb = a.createGain(), this.Kb = a.createGain(), this.Lb = a
						.createGain(), this.Wf = a.createChannelMerger(2), this.la || this.source.connect(
							this.ud), this.ud.connect(this.Ib, 0), this.ud.connect(this.Jb, 0), this.ud
						.connect(this.Kb, 1), this.ud.connect(this.Lb, 1), this.Ib.connect(this.Wf, 0, 0),
						this.Jb.connect(this.Wf,
							0, 1), this.Kb.connect(this.Wf, 0, 0), this.Lb.connect(this.Wf, 0, 1), this.Wf
						.connect(a.destination), 1 == this.ai && this.tm()) : (this.xc = a.createGain(),
						this.la || this.source.connect(this.xc), this.xc.connect(a.destination)))
			};
		c.prototype.tm = function() {
			1 != this.ai || this.Oe || !this.ud || 2 != this.mode && 3 != this.mode && 5 != this.mode || (
				this.ud.connect(this.Kb, 0), this.ud.connect(this.Lb, 0))
		};
		c.prototype.Rg = function() {
			var a = this.g.qa;
			this.gb || this.Cj || (this.Ib.gain.setValueAtTime(this.Uc, a.currentTime), this.Lb.gain
				.setValueAtTime(this.Vc,
					a.currentTime), this.Jb.gain.setValueAtTime(this.Ec, a.currentTime), this.Kb.gain
				.setValueAtTime(this.Fc, a.currentTime))
		};
		c.prototype.Ai = function() {
			if (!this.Oe || 4 == this.mode || 6 == this.mode) {
				var a = this.g,
					b = this.g.qa;
				if (this.b || this.la) {
					var d, f = this.pan - a.pan.c;
					for (d = this.i - a.i.c; - 180 > f;) f += 360;
					for (; 180 < f;) f -= 360;
					var g = this.gc,
						h = this.yh;
					0 == h && (h = .01);
					0 > h && (h = a.f.c);
					this.Ub || (this.Ub = new r.ya, this.Ub.Mk(this.pan, this.i));
					0 != this.mode && 1 != this.mode || !b || this.xc && this.xc.gain.setValueAtTime(this
						.level * a.V *
						this.ka, b.currentTime);
					if (2 == this.mode && b) {
						var l = .5 * Math.cos(f * Math.PI / 180) + .5;
						this.Uc = Math.sqrt(l) * this.ka * this.level * a.V;
						this.Vc = Math.sqrt(l) * this.ka * this.level * a.V;
						this.Ec = Math.sqrt(1 - l) * this.ka * this.level * a.V;
						this.Fc = Math.sqrt(1 - l) * this.ka * this.level * a.V;
						this.Rg()
					}
					if (3 == this.mode) {
						0 > f ? f < -this.ub ? f += this.ub : f = 0 : f = f > this.ub ? f - this.ub : 0;
						var k = this.level;
						d = Math.abs(d);
						d = d < this.Hf ? 0 : d - this.Hf;
						var q = 1 - d / h;
						if (Math.abs(f) > h || 0 > q) l = k * g * a.V, b ? (this.Uc = l * this.ka, this.Vc =
								l * this.ka, this.Fc = this.Ec = 0, this.Rg()) :
							this.b.volume = k * g * a.V;
						else if (l = 1 - Math.abs(f / h), b) {
							var p = k * (g + (1 - g) * q * l) * a.V;
							l = k * g * a.V;
							0 <= f ? (this.Uc = p * this.ka, this.Vc = l * this.ka) : (this.Uc = l * this
								.ka, this.Vc = p * this.ka);
							2 * Math.abs(f) < h ? (l = 1 - Math.abs(2 * f) / h, p = k * (g + (1 - g) * q *
								l) * a.V, l = .5 * k * (1 - g) * q * (1 - l) * a.V, 0 <= f ? (this
								.Vc = p * this.ka, this.Fc = l * this.ka, this.Ec = 0) : (this.Uc =
								p * this.ka, this.Ec = l * this.ka, this.Fc = 0)) : (l = 1 - (Math.abs(
								2 * f) - h) / h, p = .5 * k * (1 - g) * q * l * a.V, 0 <= f ? (this
								.Fc = p * this.ka, this.Ec = 0) : (this.Ec = p * this.ka, this.Fc =
								0));
							this.Rg()
						} else this.b.volume = k * (g + (1 -
							g) * q * l) * a.V
					}
					4 == this.mode && (Math.abs(f) < this.ub && Math.abs(d) < this.Hf ? this.If || (this
						.If = !0, this.$c = this.loop - 1, a.bf || (this.b.play(), this.Oe && this
							.Fi())) : this.If = !1);
					5 == this.mode && (d = 180 * Math.acos(a.Vi.ei(this.Ub)) / Math.PI, d < this.ub ? b ? (
						this.Uc = this.level * a.V * this.ka, this.Vc = this.level * a.V * this.ka,
						this.Fc = this.Ec = 0, this.Rg()) : this.b.volume = this.level * a.V : b ? (
						d < this.ub + h ? (0 > f ? f = f > -this.ub ? 0 : f + this.ub : f = f < this
							.ub ? 0 : f - this.ub, p = 1 - Math.max(d - this.ub, 0) / h, l = Math
							.max(1 - Math.abs(f) * Math.cos(this.i * Math.PI / 180) /
								h, 0), 0 < f ? (this.Uc = this.level * (p * (1 - this.gc) + this
									.gc) * a.V * this.ka, this.Vc = this.level * (p * l * (1 - this
									.gc) + this.gc) * a.V * this.ka, this.Ec = 0, this.Fc = this
								.level * p * (1 - l) * a.V * this.ka) : (this.Uc = this.level * (p *
									l * (1 - this.gc) + this.gc) * a.V * this.ka, this.Vc = this
								.level * (p * (1 - this.gc) + this.gc) * a.V * this.ka, this.Ec =
								this.level * p * (1 - l) * a.V * this.ka, this.Fc = 0)) : (p = this
							.level * this.gc * a.V, this.Uc = p * this.ka, this.Vc = p * this.ka,
							this.Fc = this.Ec = 0), this.Rg()) : (d -= this.ub, d < h && 0 < h ? (
						l = 1 - Math.abs(d / h), this.b.volume = this.level * (g + (1 - g) *
							l) * a.V) : this.b.volume = g * a.V));
					6 == this.mode && (d = 180 * Math.acos(a.Vi.ei(this.Ub)) / Math.PI, Math.abs(d) < this
						.ub ? this.If || (this.If = !0, this.$c = this.loop - 1, this.la ? this.rf ||
							this.Md() : this.b.play()) : this.If = !1)
				}
			}
		};
		c.prototype.xn = function() {
			var a = this;
			a.Vb = this.g.qa.createBufferSource();
			a.Vb.addEventListener("ended", function() {
				a.nm()
			}, !1);
			2 == a.mode || 3 == a.mode || 5 == a.mode ? a.Vb.connect(a.ud) : a.Vb.connect(a.xc)
		};
		c.prototype.Md = function() {
			var a = this.g.qa,
				b = this.ze;
			this.qh ? (null == this.Vb && (this.xn(), this.Vb.buffer =
					this.qh), this.Ug = a.currentTime - b, this.ze = 0, this.rf = !0, this.stopped = !1,
				this.Vb.start(0, b), this.g.M("buffer Source started")) : (this.g.M(
				"bufferSoundPlay() -> no audio buffer -> playWhenReady"), this.lp = !0)
		};
		c.prototype.Mi = function() {
			var a = this.g.qa.currentTime - this.Ug;
			this.We();
			this.ze = a
		};
		c.prototype.We = function() {
			this.Vb && this.rf && (this.stopped = !0, this.Vb.disconnect(), this.Vb.stop(0), this.Vb =
				null);
			this.Ug = this.ze = 0;
			this.rf = !1
		};
		c.prototype.ln = function() {
			var a = this.g.qa;
			return this.ze ? this.ze : this.Ug ?
				a.currentTime - this.Ug : 0
		};
		c.prototype.mn = function(a) {
			this.We();
			this.ze = a;
			this.Md()
		};
		c.prototype.addElement = function() {
			var a = -1,
				b = this,
				d = this.g,
				f = this.g.qa;
			try {
				for (var g = !1, h = 0; h < d.N.length; h++) d.N[h].id == b.id && (a = h, null == d.N[h]
					.b && !d.N[h].la || d.N[h].url.join() != b.url.join() || d.N[h].loop != b.loop || d
					.N[h].mode != b.mode || (g = !0, d.N[h].pan = b.pan, d.N[h].i = b.i, d.N[h].level =
						b.level, d.N[h].gc = b.gc, d.N[h].yh = b.yh, d.N[h].ub = b.ub, d.N[h].Hf = b.Hf)
				);
				if (g) d.M("Keep playing " + b.id);
				else {
					if (0 <= a) {
						var l = d.N[a];
						if (null !=
							l.b || l.la)
							if (f && d.La.enabled) d.La.Yg.push(l), 1 != d.B.Oa && 2 != d.B.Oa && d.La.Jk(
								l);
							else {
								try {
									l.la ? l.Mi() : l.b.pause()
								} catch (q) {
									d.M(q)
								}
								try {
									l.Be()
								} catch (q) {
									d.M(q)
								}
							}
					}
					f && (this.Oe = !0);
					b.b = document.createElement("audio");
					b.b.crossOrigin = d.crossOrigin;
					b.b.setAttribute("class", "ggmedia");
					d.jf && b.b.setAttribute("id", d.jf + b.id);
					for (h = 0; h < b.url.length; h++) g = void 0, g = document.createElement("source"),
						"" != b.url[h] && "#" != b.url[h] && (g.crossOrigin = d.crossOrigin, g.setAttribute(
							"src", d.oc(b.url[h])), b.b.appendChild(g));
					b.b.volume =
						b.level * d.V;
					if (0 < b.b.childNodes.length && (d.T.appendChild(b.b), b.b.addEventListener("ended",
							function() {
								b.nm()
							}, !1), f)) {
						b.bj = !1;
						0 == b.loop && b.source && b.source.mediaElement && (b.source.mediaElement.loop = !
							0);
						var k = new XMLHttpRequest;
						k.open("GET", d.oc(b.url[0]), !0);
						k.responseType = "arraybuffer";
						k.onload = function() {
							f.decodeAudioData(k.response, function(q) {
								b.ai = q.numberOfChannels;
								1 == b.ai && b.tm()
							})
						};
						k.send()
					}
					1 <= b.loop && (b.$c = b.loop - 1);
					0 <= a ? d.N[a] = b : d.N.push(b);
					b.Ai(); - 1 != this.g.Qc.indexOf(b.id) || -1 != this.g.Qc.indexOf("_main") &&
						-1 == this.g.ce.indexOf(b.id) || (1 != b.mode && 2 != b.mode && 3 != b.mode && 5 !=
							b.mode || !(0 <= b.loop) || f && d.La.enabled || (b.la || (b.b.autoplay = !0, b
								.Yj()), b.autoplay = !0), 0 == b.mode && 0 <= b.loop && (b.autoplay = !0, b
								.Yj()))
				}
			} catch (q) {
				this.g.M(q)
			}
		};
		c.prototype.Be = function() {
			try {
				this.g.M("Remove Snd:" + this.id), this.la || (this.g.T.removeChild(this.b), this.b = null)
			} catch (a) {
				this.g.M(a)
			}
		};
		c.prototype.Rb = function(a) {
			e.prototype.Rb.call(this, a);
			var b;
			(b = a.getAttributeNode("url")) && this.url.push(b.nodeValue.toString());
			if (b = a.getAttributeNode("level")) this.level =
				Number(b.nodeValue);
			if (b = a.getAttributeNode("loop")) this.loop = Number(b.nodeValue);
			if (b = a.getAttributeNode("mode")) this.mode = Number(b.nodeValue);
			if (b = a.getAttributeNode("nodechangekeep")) this.Ol = 1 == Number(b.nodeValue);
			if (b = a.getAttributeNode("field")) this.yh = Number(b.nodeValue);
			if (b = a.getAttributeNode("ambientlevel")) this.gc = Number(b.nodeValue);
			if (b = a.getAttributeNode("pansize")) this.ub = Number(b.nodeValue);
			if (b = a.getAttributeNode("tiltsize")) this.Hf = Number(b.nodeValue);
			for (a = a.firstChild; a;) "source" ==
				a.nodeName && (b = a.getAttributeNode("url")) && this.url.push(b.nodeValue.toString()), a =
				a.nextSibling
		};
		return c
	}(n);
	r.Zm = m;
	m = function(e) {
		function c(a) {
			a = e.call(this, a) || this;
			a.poster = "";
			a.xa = 0;
			a.Ea = 0;
			a.nb = 0;
			a.f = 50;
			a.Va = 0;
			a.qg = !1;
			a.ld = !1;
			return a
		}
		__extends(c, e);
		c.prototype.re = function() {
			1 != this.Va && 4 != this.Va || this.mg(!this.gb);
			2 == this.Va && this.g.Tl(this.id)
		};
		c.prototype.mg = function(a) {
			var b = this.g,
				d = b.qa;
			if (1 == this.Va || 4 == this.Va)
				if (this.gb = a, this.g.Fb)(b = b.ia) && b.activateSound(this.id, this.gb ? 1 : 0);
				else {
					if (this.gb) this.b.style.pointerEvents =
						"auto", this.b.style.cursor = "pointer", this.b.style.zIndex = (b.jh + 8E4)
						.toString(), this.b.style[this.g.cd] = "all 1s ease 0s", this.g.Yb(this.id) || b.Ae(
							this.id);
					else {
						this.b.style.pointerEvents = "none";
						this.b.style.cursor = "default";
						this.b.style.zIndex = b.jh.toString();
						this.b.style[this.g.cd] = "all 1s ease 0s";
						this.g.Yb(this.id) && b.si(this.id);
						this.Cj = !0;
						var f = this;
						setTimeout(function() {
							f.Cj = !1
						}, 1E3)
					}
					if (d && (2 == this.mode || 3 == this.mode || 5 == this.mode) && (d = d.currentTime,
							this.Ib && this.Lb && this.Jb.gain && this.Jb && this.Kb)) {
						var g =
							this.Ib.gain.value,
							h = this.Lb.gain.value,
							l = this.Jb.gain.value,
							k = this.Kb.gain.value;
						this.gb ? (this.Ib.gain.linearRampToValueAtTime(g, d), this.Ib.gain
							.linearRampToValueAtTime(this.level * b.V, d + 1), this.Lb.gain
							.linearRampToValueAtTime(h, d), this.Lb.gain.linearRampToValueAtTime(this
								.level * b.V, d + 1), this.Jb.gain.linearRampToValueAtTime(l, d), this
							.Jb.gain.linearRampToValueAtTime(0, d + 1), this.Kb.gain
							.linearRampToValueAtTime(k, d), this.Kb.gain.linearRampToValueAtTime(0, d +
								1)) : (this.Ib.gain.linearRampToValueAtTime(g,
								d), this.Ib.gain.linearRampToValueAtTime(this.Uc, d + 1), this.Lb.gain
							.linearRampToValueAtTime(h, d), this.Lb.gain.linearRampToValueAtTime(this
								.Vc, d + 1), this.Jb.gain.linearRampToValueAtTime(l, d), this.Jb.gain
							.linearRampToValueAtTime(this.Ec, d + 1), this.Kb.gain
							.linearRampToValueAtTime(k, d), this.Kb.gain.linearRampToValueAtTime(this
								.Fc, d + 1))
					}
					this.lg = !0;
					this.g.Gm()
				} 2 == this.Va && (a ? this.g.Ae(this.id) : this.g.Bj(this.id))
		};
		c.prototype.ng = function() {
			this.lg = !1;
			this.b.style[this.g.cd] = "none"
		};
		c.prototype.vq = function() {
			0 ==
				this.loop ? this.b.play() : 0 < this.$c ? (this.$c--, this.b.currentTime = 0, this.b
					.play()) : this.xl = !1
		};
		c.prototype.Rb = function(a) {
			e.prototype.Rb.call(this, a);
			var b;
			if (b = a.getAttributeNode("poster")) this.poster = String(b.nodeValue);
			if (b = a.getAttributeNode("rotx")) this.xa = Number(b.nodeValue);
			if (b = a.getAttributeNode("roty")) this.Ea = Number(b.nodeValue);
			if (b = a.getAttributeNode("rotz")) this.nb = Number(b.nodeValue);
			if (b = a.getAttributeNode("fov")) this.f = Number(b.nodeValue);
			if (b = a.getAttributeNode("width")) this.Jc = Number(b.nodeValue);
			if (b = a.getAttributeNode("height")) this.ed = Number(b.nodeValue);
			this.xd = (b = a.getAttributeNode("stretch")) ? Number(b.nodeValue) : 1;
			if (b = a.getAttributeNode("clickmode")) this.Va = Number(b.nodeValue);
			if (b = a.getAttributeNode("handcursor")) this.qg = 1 == Number(b.nodeValue);
			if (b = a.getAttributeNode("startmutedmobile")) this.rm = 1 == Number(b.nodeValue)
		};
		c.prototype.addElement = function() {
			var a = this,
				b = this.g,
				d = this.g.qa;
			try {
				a.b = document.createElement("video");
				a.b.setAttribute("class", "ggmedia");
				a.b.crossOrigin = b.crossOrigin;
				a.b.hidden = !0;
				a.b.addEventListener("click", function(h) {
					h.stopPropagation()
				});
				b.jf && a.b.setAttribute("id", b.jf + a.id);
				if (b.eh) a.b.setAttribute("playsinline", "playsinline"), a.b.setAttribute("style",
					"display: none; max-width:none;");
				else if (a.b.setAttribute("style", "max-width:none;pointer-events:none;"), a.b.setAttribute(
						"playsinline", "playsinline"), 1 == a.Va || 4 == a.Va) a.b.addEventListener(b.Om(),
					function() {
						a.ng()
					}, !1), a.b.addEventListener("transitionend", function() {
					a.ng()
				}, !1);
				var f = void 0;
				for (f = 0; f < a.url.length; f++) {
					var g =
						void 0;
					g = document.createElement("source");
					g.crossOrigin = b.crossOrigin;
					g.setAttribute("src", b.oc(a.url[f]));
					a.b.appendChild(g)
				}
				"" != a.poster && (a.b.poster = b.oc(a.poster), 0 > a.loop && (a.b.preload = "none"));
				a.b.volume = a.level * b.V;
				1 <= a.loop && (a.$c = a.loop - 1);
				d && (this.Oe = !0);
				(1 == a.mode || 2 == a.mode || 3 == a.mode || 5 == a.mode) && 0 <= a.loop && (a.b
					.autoplay = !0, a.xl = !0, a.autoplay = !0, a.Yj());
				b.I.push(this);
				b.eh ? b.T.appendChild(a.b) : (a.b.style.position = "absolute", a.Jc && (a.b.width = a.Jc),
					a.ed && (a.b.height = a.ed), b.D.appendChild(a.b));
				a.b.addEventListener("ended", function() {
					a.vq()
				}, !1)
			} catch (h) {
				b.M(h)
			}
		};
		c.prototype.registerElement = function(a, b) {
			this.ld = !0;
			this.b = b;
			this.id = a;
			this.level = 1;
			this.g.I.push(this)
		};
		c.prototype.Be = function() {
			var a = this.g;
			a.eh && (a.H.deleteTexture(this.sc), this.sc = 0, a.T.removeChild(this.b));
			a.Hm && a.D.removeChild(this.b);
			this.b = null
		};
		return c
	}(m);
	r.kk = m;
	m = function(e) {
		function c(a) {
			a = e.call(this, a) || this;
			a.url = "";
			a.xa = 0;
			a.Ea = 0;
			a.nb = 0;
			a.f = 50;
			a.Va = 0;
			a.qg = !1;
			a.Jc = 100;
			a.ed = 100;
			a.xd = 1;
			return a
		}
		__extends(c, e);
		c.prototype.Rb =
			function(a) {
				e.prototype.Rb.call(this, a);
				var b;
				if (b = a.getAttributeNode("url")) this.url = b.nodeValue.toString();
				if (b = a.getAttributeNode("rotx")) this.xa = Number(b.nodeValue);
				if (b = a.getAttributeNode("roty")) this.Ea = Number(b.nodeValue);
				if (b = a.getAttributeNode("rotz")) this.nb = Number(b.nodeValue);
				if (b = a.getAttributeNode("fov")) this.f = Number(b.nodeValue);
				if (b = a.getAttributeNode("width")) this.Jc = Number(b.nodeValue);
				if (b = a.getAttributeNode("height")) this.ed = Number(b.nodeValue);
				this.xd = (b = a.getAttributeNode("stretch")) ?
					Number(b.nodeValue) : 1;
				if (b = a.getAttributeNode("clickmode")) this.Va = Number(b.nodeValue);
				if (b = a.getAttributeNode("handcursor")) this.qg = 1 == Number(b.nodeValue);
				for (a = a.firstChild; a;) "source" == a.nodeName && (b = a.getAttributeNode("url")) && (this
					.url = b.nodeValue.toString()), a = a.nextSibling
			};
		c.prototype.ng = function() {
			this.lg = !1;
			this.b.style[this.g.cd] = "none"
		};
		c.prototype.re = function() {
			1 !== this.Va && 4 !== this.Va || this.mg(!this.gb)
		};
		c.prototype.mg = function(a) {
			var b = this.g;
			if (1 === this.Va || 4 === this.Va) this.gb = a, this.g.Fb ?
				(a = this.g.ia) && a.activateSound(this.id, this.gb ? 1 : 0) : (this.gb ? (this.b.style
						.pointerEvents = "auto", this.b.style.cursor = "pointer", this.b.style.zIndex = (b
							.jh + 8E4).toString()) : (this.b.style.pointerEvents = "none", this.b.style
						.cursor = "default", this.b.style.zIndex = b.jh.toString()), this.b.style[b.cd] =
					"all 1s ease 0s", this.lg = !0, b.Bm())
		};
		c.prototype.addElement = function() {
			var a = this,
				b = this.g;
			try {
				a.b = document.createElement("img");
				a.b.setAttribute("style", "-webkit-user-drag:none; max-width:none; pointer-events:none;");
				a.b.setAttribute("class", "ggmedia");
				a.b.hidden = !0;
				a.b.addEventListener("click", function(d) {
					d.stopPropagation()
				});
				b.jf && a.b.setAttribute("id", b.jf + a.id);
				a.b.ondragstart = function() {
					return !1
				};
				if (1 === a.Va || 4 === a.Va) a.b.addEventListener(b.Om(), function() {
					a.ng()
				}, !1), a.b.addEventListener("transitionend", function() {
					a.ng()
				}, !1);
				a.b.setAttribute("src", b.oc(a.url));
				a.Jc && (a.b.width = a.Jc);
				a.ed && (a.b.height = a.ed);
				b.Ta.push(a);
				a.b.style.position = "absolute";
				b.D.appendChild(a.b)
			} catch (d) {
				b.M("Error addimage:" + d)
			}
		};
		c.prototype.Be = function() {
			this.g.D.removeChild(this.b);
			this.b = null
		};
		return c
	}(n);
	r.Xm = m;
	n = function(e) {
		function c(a) {
			a = e.call(this, a) || this;
			a.rk = 50;
			a.alpha = 50;
			a.type = 0;
			a.color = 16777215;
			return a
		}
		__extends(c, e);
		c.prototype.Rb = function(a) {
			e.prototype.Rb.call(this, a);
			var b;
			if (b = a.getAttributeNode("blinding")) this.rk = Number(b.nodeValue);
			if (b = a.getAttributeNode("alpha")) this.alpha = Number(b.nodeValue);
			if (b = a.getAttributeNode("type")) this.type = Number(b.nodeValue);
			if (b = a.getAttributeNode("color")) this.color =
				Number(b.nodeValue)
		};
		return c
	}(n);
	r.Ym = n;
	n = function() {
		function e(c) {
			this.type = "empty";
			this.Pj = this.id = this.target = this.description = this.title = this.url = "";
			this.ih = 100;
			this.pg = 20;
			this.Di = !1;
			this.b = null;
			this.vb = this.Qb = this.bb = this.ra = this.i = this.pan = 0;
			this.visible = !0;
			this.lc = c.A.lc;
			this.ic = c.A.ic;
			this.kc = c.A.kc;
			this.hc = c.A.hc;
			this.ff = c.A.ff;
			this.Nf = []
		}
		e.prototype.af = function() {
			this.id = this.id;
			this.pan = this.pan;
			this.tilt = this.i;
			this.url = this.url;
			this.target = this.target;
			this.title = this.title;
			this.description =
				this.description;
			this.skinid = this.Pj;
			this.obj = this.b
		};
		e.prototype.Rb = function(c) {
			var a;
			if (a = c.getAttributeNode("url")) this.url = a.nodeValue.toString();
			if (a = c.getAttributeNode("target")) this.target = a.nodeValue.toString();
			if (a = c.getAttributeNode("title")) this.title = a.nodeValue.toString();
			if (a = c.getAttributeNode("description")) this.description = a.nodeValue.toString();
			if (a = c.getAttributeNode("id")) this.id = a.nodeValue.toString();
			if (a = c.getAttributeNode("skinid")) this.Pj = a.nodeValue.toString();
			if (a = c.getAttributeNode("width")) this.ih =
				Number(a.nodeValue);
			if (a = c.getAttributeNode("height")) this.pg = Number(a.nodeValue);
			if (a = c.getAttributeNode("wordwrap")) this.Di = 1 == Number(a.nodeValue);
			this.pan = (a = c.getAttributeNode("pan")) ? Number(a.nodeValue) : 0;
			this.i = (a = c.getAttributeNode("tilt")) ? Number(a.nodeValue) : 0;
			if (a = c.getAttributeNode("bordercolor")) this.lc = Number(a.nodeValue);
			if (a = c.getAttributeNode("backgroundcolor")) this.ic = Number(a.nodeValue);
			if (a = c.getAttributeNode("borderalpha")) this.kc = Number(a.nodeValue);
			if (a = c.getAttributeNode("backgroundalpha")) this.hc =
				Number(a.nodeValue);
			if (a = c.getAttributeNode("handcursor")) this.ff = 1 == Number(a.nodeValue);
			for (c = c.firstChild; c;) {
				if ("polystring" == c.nodeName) {
					a = c.textContent.toString().split("|");
					for (var b = 0; b < a.length; b++) {
						var d = a[b].split("/");
						if (2 == d.length) {
							var f = {
								pan: 0,
								i: 0
							};
							f.pan = Number(d[0]);
							f.i = Number(d[1]);
							this.Nf.push(f)
						}
					}
				}
				"vertex" == c.nodeName && (f = {
						pan: 0,
						i: 0
					}, a = c.getAttributeNode("pan"), f.pan = a ? Number(a.nodeValue) : 0, a = c
					.getAttributeNode("tilt"), f.i = a ? Number(a.nodeValue) : 0, this.Nf.push(f));
				c = c.nextSibling
			}
			this.af()
		};
		return e
	}();
	r.mh = n
})(ggP2VR || (ggP2VR = {}));
(function(r) {
	var n = function() {
		function m(e, c) {
			this.x = e;
			this.y = c
		}
		m.prototype.$a = function(e, c) {
			this.x = e;
			this.y = c
		};
		m.prototype.zd = function(e, c, a) {
			var b = c.y - e.y;
			this.x = e.x + (c.x - e.x) * a;
			this.y = e.y + b * a
		};
		m.prototype.kn = function(e, c, a, b, d) {
			var f = new m;
			f.zd(e, a, d);
			e = new m;
			e.zd(a, b, d);
			a = new m;
			a.zd(b, c, d);
			c = new m;
			c.zd(f, e, d);
			f = new m;
			f.zd(e, a, d);
			e = new m;
			e.zd(c, f, d);
			this.x = e.x;
			this.y = e.y
		};
		m.prototype.Ji = function(e, c, a, b, d) {
			var f = new m,
				g = .5,
				h = .25;
			do {
				f.kn(e, c, a, b, g);
				var l = f.x - d;
				g = 0 < l ? g - h : g + h;
				h /= 2
			} while (.01 < Math.abs(l));
			this.x = f.x;
			this.y = f.y
		};
		return m
	}();
	r.vc = n
})(ggP2VR || (ggP2VR = {}));
(function(r) {
	var n = function() {
		function m(e, c, a, b, d) {
			this.x = e;
			this.y = c;
			this.z = a;
			this.sd = b;
			this.Ub = d
		}
		m.prototype.$a = function(e, c, a) {
			this.x = e;
			this.y = c;
			this.z = a;
			this.Ub = this.sd = void 0
		};
		m.prototype.toString = function() {
			return "(" + this.x + "," + this.y + "," + this.z + ") - (" + this.sd + "," + this.Ub + ")"
		};
		m.prototype.xa = function(e) {
			var c = Math.sin(e);
			e = Math.cos(e);
			var a = this.y,
				b = this.z;
			this.y = e * a - c * b;
			this.z = c * a + e * b
		};
		m.prototype.rp = function() {
			var e = this.y;
			this.y = -this.z;
			this.z = e
		};
		m.prototype.qp = function() {
			var e = this.y;
			this.y =
				this.z;
			this.z = -e
		};
		m.prototype.Ea = function(e) {
			var c = Math.sin(e);
			e = Math.cos(e);
			var a = this.x,
				b = this.z;
			this.x = e * a + c * b;
			this.z = -c * a + e * b
		};
		m.prototype.sp = function() {
			var e = this.x;
			this.x = -this.z;
			this.z = e
		};
		m.prototype.nb = function(e) {
			var c = Math.sin(e);
			e = Math.cos(e);
			var a = this.x,
				b = this.y;
			this.x = e * a - c * b;
			this.y = c * a + e * b
		};
		m.prototype.em = function() {
			var e = this.x;
			this.x = -this.y;
			this.y = e
		};
		m.prototype.Fd = function(e) {
			this.xa(e * Math.PI / 180)
		};
		m.prototype.Ce = function(e) {
			this.Ea(e * Math.PI / 180)
		};
		m.prototype.De = function(e) {
			this.nb(e *
				Math.PI / 180)
		};
		m.prototype.clone = function() {
			return new m(this.x, this.y, this.z, this.sd, this.Ub)
		};
		m.prototype.length = function() {
			return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
		};
		m.prototype.normalize = function() {
			var e = this.length();
			0 < e && (e = 1 / e, this.x *= e, this.y *= e, this.z *= e)
		};
		m.prototype.ei = function(e) {
			return this.x * e.x + this.y * e.y + this.z * e.z
		};
		m.prototype.Mk = function(e, c) {
			var a = Math.cos(c * Math.PI / 180);
			this.x = a * Math.sin(e * Math.PI / 180);
			this.y = Math.sin(c * Math.PI / 180);
			this.z = a * Math.cos(e * Math.PI /
				180)
		};
		m.prototype.fn = function() {
			return 180 * Math.atan2(-this.x, -this.z) / Math.PI
		};
		m.prototype.gn = function() {
			return 180 * Math.asin(this.y / this.length()) / Math.PI
		};
		m.prototype.zd = function(e, c, a) {
			this.x = e.x * a + c.x * (1 - a);
			this.y = e.y * a + c.y * (1 - a);
			this.z = e.z * a + c.z * (1 - a);
			this.sd = e.sd * a + c.sd * (1 - a);
			this.Ub = e.Ub * a + c.Ub * (1 - a)
		};
		return m
	}();
	r.ya = n
})(ggP2VR || (ggP2VR = {}));
(function(r) {
	var n = function() {
		function m() {
			this.im()
		}
		m.prototype.im = function() {
			this.Zb = 1;
			this.pc = this.$b = this.Db = 0;
			this.ac = 1;
			this.bc = this.Nb = this.qc = 0;
			this.Ob = 1
		};
		m.prototype.clone = function(e) {
			this.Zb = e.Zb;
			this.Db = e.Db;
			this.$b = e.$b;
			this.pc = e.pc;
			this.ac = e.ac;
			this.qc = e.qc;
			this.Nb = e.Nb;
			this.bc = e.bc;
			this.Ob = e.Ob
		};
		m.prototype.Gp = function(e) {
			var c = Math.cos(e);
			e = Math.sin(e);
			this.Zb = 1;
			this.pc = this.$b = this.Db = 0;
			this.ac = c;
			this.qc = -e;
			this.Nb = 0;
			this.bc = e;
			this.Ob = c
		};
		m.prototype.Hp = function(e) {
			var c = Math.cos(e);
			e = Math.sin(e);
			this.Zb = c;
			this.Db = 0;
			this.$b = e;
			this.pc = 0;
			this.ac = 1;
			this.qc = 0;
			this.Nb = -e;
			this.bc = 0;
			this.Ob = c
		};
		m.prototype.Ip = function(e) {
			var c = Math.cos(e);
			e = Math.sin(e);
			this.Zb = c;
			this.Db = -e;
			this.$b = 0;
			this.pc = e;
			this.ac = c;
			this.bc = this.Nb = this.qc = 0;
			this.Ob = 1
		};
		m.prototype.Dp = function(e) {
			this.Gp(e * Math.PI / 180)
		};
		m.prototype.Ep = function(e) {
			this.Hp(e * Math.PI / 180)
		};
		m.prototype.Fp = function(e) {
			this.Ip(e * Math.PI / 180)
		};
		m.prototype.Fd = function(e) {
			this.Oc || (this.Oc = new m, this.Td = new m);
			this.Oc.Dp(e);
			this.Td.clone(this);
			this.multiply(this.Oc, this.Td)
		};
		m.prototype.Ce = function(e) {
			this.Oc || (this.Oc = new m, this.Td = new m);
			this.Oc.Ep(e);
			this.Td.clone(this);
			this.multiply(this.Oc, this.Td)
		};
		m.prototype.De = function(e) {
			this.Oc || (this.Oc = new m, this.Td = new m);
			this.Oc.Fp(e);
			this.Td.clone(this);
			this.multiply(this.Oc, this.Td)
		};
		m.prototype.multiply = function(e, c) {
			this.Zb = e.Zb * c.Zb + e.Db * c.pc + e.$b * c.Nb;
			this.Db = e.Zb * c.Db + e.Db * c.ac + e.$b * c.bc;
			this.$b = e.Zb * c.$b + e.Db * c.qc + e.$b * c.Ob;
			this.pc = e.pc * c.Zb + e.ac * c.pc + e.qc * c.Nb;
			this.ac = e.pc * c.Db +
				e.ac * c.ac + e.qc * c.bc;
			this.qc = e.pc * c.$b + e.ac * c.qc + e.qc * c.Ob;
			this.Nb = e.Nb * c.Zb + e.bc * c.pc + e.Ob * c.Nb;
			this.bc = e.Nb * c.Db + e.bc * c.ac + e.Ob * c.bc;
			this.Ob = e.Nb * c.$b + e.bc * c.qc + e.Ob * c.Ob
		};
		m.prototype.So = function(e) {
			var c = e.x;
			var a = e.y;
			var b = e.z;
			e.x = c * this.Zb + a * this.Db + b * this.$b;
			e.y = c * this.pc + a * this.ac + b * this.qc;
			e.z = c * this.Nb + a * this.bc + b * this.Ob
		};
		return m
	}();
	r.hk = n
})(ggP2VR || (ggP2VR = {}));
(function(r) {
	r.aa = {
		create: function(n) {
			var m;
			"undefined" != typeof Float32Array ? m = new Float32Array(16) : m = Array(16);
			n && (m[0] = n[0], m[1] = n[1], m[2] = n[2], m[3] = n[3], m[4] = n[4], m[5] = n[5], m[6] = n[6],
				m[7] = n[7], m[8] = n[8], m[9] = n[9], m[10] = n[10], m[11] = n[11], m[12] = n[12], m[
					13] = n[13], m[14] = n[14], m[15] = n[15]);
			return m
		},
		set: function(n, m) {
			m[0] = n[0];
			m[1] = n[1];
			m[2] = n[2];
			m[3] = n[3];
			m[4] = n[4];
			m[5] = n[5];
			m[6] = n[6];
			m[7] = n[7];
			m[8] = n[8];
			m[9] = n[9];
			m[10] = n[10];
			m[11] = n[11];
			m[12] = n[12];
			m[13] = n[13];
			m[14] = n[14];
			m[15] = n[15];
			return m
		},
		te: function(n) {
			n[0] =
				1;
			n[1] = 0;
			n[2] = 0;
			n[3] = 0;
			n[4] = 0;
			n[5] = 1;
			n[6] = 0;
			n[7] = 0;
			n[8] = 0;
			n[9] = 0;
			n[10] = 1;
			n[11] = 0;
			n[12] = 0;
			n[13] = 0;
			n[14] = 0;
			n[15] = 1;
			return n
		},
		multiply: function(n, m, e) {
			e || (e = n);
			var c = n[0],
				a = n[1],
				b = n[2],
				d = n[3],
				f = n[4],
				g = n[5],
				h = n[6],
				l = n[7],
				k = n[8],
				q = n[9],
				p = n[10],
				t = n[11],
				u = n[12],
				w = n[13],
				v = n[14];
			n = n[15];
			var y = m[0],
				A = m[1],
				x = m[2],
				B = m[3],
				z = m[4],
				C = m[5],
				D = m[6],
				F = m[7],
				E = m[8],
				H = m[9],
				I = m[10],
				J = m[11],
				K = m[12],
				L = m[13],
				M = m[14];
			m = m[15];
			e[0] = y * c + A * f + x * k + B * u;
			e[1] = y * a + A * g + x * q + B * w;
			e[2] = y * b + A * h + x * p + B * v;
			e[3] = y * d + A * l + x * t + B * n;
			e[4] = z * c + C * f + D * k +
				F * u;
			e[5] = z * a + C * g + D * q + F * w;
			e[6] = z * b + C * h + D * p + F * v;
			e[7] = z * d + C * l + D * t + F * n;
			e[8] = E * c + H * f + I * k + J * u;
			e[9] = E * a + H * g + I * q + J * w;
			e[10] = E * b + H * h + I * p + J * v;
			e[11] = E * d + H * l + I * t + J * n;
			e[12] = K * c + L * f + M * k + m * u;
			e[13] = K * a + L * g + M * q + m * w;
			e[14] = K * b + L * h + M * p + m * v;
			e[15] = K * d + L * l + M * t + m * n;
			return e
		},
		translate: function(n, m, e) {
			var c = m[0],
				a = m[1];
			m = m[2];
			if (!e || n == e) return n[12] = n[0] * c + n[4] * a + n[8] * m + n[12], n[13] = n[1] * c + n[
					5] * a + n[9] * m + n[13], n[14] = n[2] * c + n[6] * a + n[10] * m + n[14], n[15] =
				n[
					3] * c + n[7] * a + n[11] * m + n[15], n;
			var b = n[0],
				d = n[1],
				f = n[2],
				g = n[3],
				h = n[4],
				l = n[5],
				k = n[6],
				q = n[7],
				p = n[8],
				t = n[9],
				u = n[10],
				w = n[11];
			e[0] = b;
			e[1] = d;
			e[2] = f;
			e[3] = g;
			e[4] = h;
			e[5] = l;
			e[6] = k;
			e[7] = q;
			e[8] = p;
			e[9] = t;
			e[10] = u;
			e[11] = w;
			e[12] = b * c + h * a + p * m + n[12];
			e[13] = d * c + l * a + t * m + n[13];
			e[14] = f * c + k * a + u * m + n[14];
			e[15] = g * c + q * a + w * m + n[15];
			return e
		},
		scale: function(n, m, e) {
			var c = m[0],
				a = m[1];
			m = m[2];
			if (!e || n == e) return n[0] *= c, n[1] *= c, n[2] *= c, n[3] *= c, n[4] *= a, n[5] *= a, n[
				6] *= a, n[7] *= a, n[8] *= m, n[9] *= m, n[10] *= m, n[11] *= m, n;
			e[0] = n[0] * c;
			e[1] = n[1] * c;
			e[2] = n[2] * c;
			e[3] = n[3] * c;
			e[4] = n[4] * a;
			e[5] = n[5] * a;
			e[6] = n[6] * a;
			e[7] = n[7] * a;
			e[8] =
				n[8] * m;
			e[9] = n[9] * m;
			e[10] = n[10] * m;
			e[11] = n[11] * m;
			e[12] = n[12];
			e[13] = n[13];
			e[14] = n[14];
			e[15] = n[15];
			return e
		},
		rotate: function(n, m, e, c) {
			var a = e[0],
				b = e[1];
			e = e[2];
			var d = Math.sqrt(a * a + b * b + e * e);
			if (!d) return null;
			1 != d && (d = 1 / d, a *= d, b *= d, e *= d);
			var f = Math.sin(m),
				g = Math.cos(m),
				h = 1 - g;
			m = n[0];
			d = n[1];
			var l = n[2],
				k = n[3],
				q = n[4],
				p = n[5],
				t = n[6],
				u = n[7],
				w = n[8],
				v = n[9],
				y = n[10],
				A = n[11],
				x = a * a * h + g,
				B = b * a * h + e * f,
				z = e * a * h - b * f,
				C = a * b * h - e * f,
				D = b * b * h + g,
				F = e * b * h + a * f,
				E = a * e * h + b * f;
			a = b * e * h - a * f;
			b = e * e * h + g;
			c ? n != c && (c[12] = n[12], c[13] = n[13], c[14] = n[14],
				c[15] = n[15]) : c = n;
			c[0] = m * x + q * B + w * z;
			c[1] = d * x + p * B + v * z;
			c[2] = l * x + t * B + y * z;
			c[3] = k * x + u * B + A * z;
			c[4] = m * C + q * D + w * F;
			c[5] = d * C + p * D + v * F;
			c[6] = l * C + t * D + y * F;
			c[7] = k * C + u * D + A * F;
			c[8] = m * E + q * a + w * b;
			c[9] = d * E + p * a + v * b;
			c[10] = l * E + t * a + y * b;
			c[11] = k * E + u * a + A * b;
			return c
		},
		In: function(n, m, e, c, a, b, d) {
			d || (d = r.aa.create());
			var f = m - n,
				g = c - e,
				h = b - a;
			d[0] = 2 * a / f;
			d[1] = 0;
			d[2] = 0;
			d[3] = 0;
			d[4] = 0;
			d[5] = 2 * a / g;
			d[6] = 0;
			d[7] = 0;
			d[8] = (m + n) / f;
			d[9] = (c + e) / g;
			d[10] = -(b + a) / h;
			d[11] = -1;
			d[12] = 0;
			d[13] = 0;
			d[14] = -(b * a * 2) / h;
			d[15] = 0;
			return d
		},
		perspective: function(n, m, e, c, a) {
			n =
				e * Math.tan(n * Math.PI / 360);
			m = n * m;
			return r.aa.In(-m, m, -n, n, e, c, a)
		},
		Hq: function(n, m, e, c, a, b, d) {
			d || (d = r.aa.create());
			var f = m - n,
				g = c - e,
				h = b - a;
			d[0] = 2 / f;
			d[1] = 0;
			d[2] = 0;
			d[3] = 0;
			d[4] = 0;
			d[5] = 2 / g;
			d[6] = 0;
			d[7] = 0;
			d[8] = 0;
			d[9] = 0;
			d[10] = -2 / h;
			d[11] = 0;
			d[12] = -(n + m) / f;
			d[13] = -(c + e) / g;
			d[14] = -(b + a) / h;
			d[15] = 1;
			return d
		}
	}
})(ggP2VR || (ggP2VR = {}));
(function(r) {
	var n = function() {
		function m(e) {
			this.na = r.aa.create();
			this.tb = r.aa.create();
			this.fd = 0;
			this.Wa = [];
			this.ug = !1;
			this.Tj = this.ej = this.Gj = 1;
			this.Ye = 1E6;
			this.th = [!1, !1, !1, !1, !1, !1];
			this.ri = !1;
			this.Zi = [];
			this.ik = 8;
			this.Lo = new r.hk;
			this.Pd = [];
			this.g = e;
			if (e.Sd || e.sg) e.Wg = 2
		}
		m.prototype.rg = function() {
			var e = this.g.H;
			if (e) {
				var c = e.createShader(e.FRAGMENT_SHADER);
				e.shaderSource(c,
					"#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif\nvarying vec2 vTextureCoord;\n\t\t\t\t\tuniform sampler2D uSampler;\n\t\t\t\t\tvoid main(void) {\n\t\t\t\t\t\tgl_FragColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));\n\t\t\t\t\t}"
				);
				e.compileShader(c);
				e.getShaderParameter(c, e.COMPILE_STATUS) || (console && console.log(e.getShaderInfoLog(c)),
					alert(e.getShaderInfoLog(c)), c = null);
				var a = e.createShader(e.VERTEX_SHADER);
				this.Ic(a,
					"#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif\nattribute vec3 aVertexPosition;\n\t\t\t\tattribute vec2 aTextureCoord;\n\t\t\t\tuniform mat4 uMVMatrix;\n\t\t\t\tuniform mat4 uPMatrix;\n\t\t\t\tuniform float uZoffset;\n\t\t\t\tvarying vec2 vTextureCoord;\n\t\t\t\tvoid main(void) {\n\t\t\t\t\tgl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n\t\t\t\t\tgl_Position.z += uZoffset;\n\t\t\t\t\tvTextureCoord = aTextureCoord;\n\t\t\t\t}"
				);
				this.F = e.createProgram();
				this.nf(this.F, a, c);
				this.F.$ = e.getAttribLocation(this.F, "aVertexPosition");
				e.enableVertexAttribArray(this.F.$);
				this.F.Ca = e.getAttribLocation(this.F, "aTextureCoord");
				e.enableVertexAttribArray(this.F.Ca);
				this.F.Vd = e.getUniformLocation(this.F, "uPMatrix");
				this.F.Ig = e.getUniformLocation(this.F, "uMVMatrix");
				this.F.zf = e.getUniformLocation(this.F, "uSampler");
				this.F.Ei = e.getUniformLocation(this.F, "uZoffset");
				c = e.createShader(e.VERTEX_SHADER);
				this.Ic(c,
					"#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif\nattribute vec3 aVertexPosition;\n\t\t\t\tuniform vec2 uCanvasDimensions;\n\t\t\t\tvoid main(void) {\n\t\t\t\t\tvec2 pointNorm = (aVertexPosition.xy / uCanvasDimensions) * 2.0 - vec2(1.0, 1.0);\n\t\t\t\t\tgl_Position = vec4(pointNorm.x, pointNorm.y * -1.0, 0.0, 1.0);\n\t\t\t\t}"
				);
				a = e.createShader(e.FRAGMENT_SHADER);
				this.Ic(a,
					"#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif\nuniform vec3 uColor;\n\t\t\t\tuniform float uAlpha;\n\t\t\t\tvoid main(void) {\n\t\t\t\t\tgl_FragColor = vec4(uColor, uAlpha);\n\t\t\t\t}"
				);
				this.Dd = e.createProgram();
				this.nf(this.Dd, c, a);
				this.Dd.$ = e.getAttribLocation(this.Dd, "aVertexPosition");
				e.enableVertexAttribArray(this.Dd.$);
				a = e.createShader(e.VERTEX_SHADER);
				this.Ic(a,
					"precision highp float;\n\t\t\t\tattribute vec3 aVertexPosition;\n\t\t\t\tvarying vec2 vTextureCoord;\n\t\t\t\tuniform vec2 uCanvasDimensions;\n\t\t\t\tuniform vec4 uRect;\n\t\t\t\tvoid main(void) {\n\t\t\t\t\tvec2 pos = vec2(uRect.x + uRect.z*aVertexPosition.x,uRect.y + uRect.w*aVertexPosition.y);\n\t\t\t\t\tvec2 pointNorm = (pos / uCanvasDimensions) * 2.0 - vec2(1.0, 1.0);\n\t\t\t\t\tgl_Position = vec4(pointNorm.x, pointNorm.y * -1.0, 1.0, 1.0);\n\t\t\t\t\tvTextureCoord.s=aVertexPosition.x;\n\t\t\t\t\tvTextureCoord.t=1.0-aVertexPosition.y;\n\t\t\t\t}"
				);
				c = e.createShader(e.FRAGMENT_SHADER);
				this.Ic(c,
					"#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif\nvarying vec2 vTextureCoord;\n\t\t\t\tuniform sampler2D uSampler;\n\t\t\t\tvoid main(void) {\n\t\t\t\t\tgl_FragColor = texture2D(uSampler,vTextureCoord);\n\t\t\t\t}"
				);
				this.dg = e.createProgram();
				this.nf(this.dg, a, c)
			}
		};
		m.prototype.Ih = function() {
			var e = this.g,
				c = e.H;
			if (c) {
				var a = c.createShader(c.FRAGMENT_SHADER);
				var b = this.jj(13);
				this.Ic(a, b);
				b = c.createShader(c.VERTEX_SHADER);
				this.Ic(b,
					"precision highp float;\nattribute vec3 aVertexPosition;\nuniform vec2 uCanvasDimensions;\nvarying vec2 dst;\nuniform vec2 dstSize;\nuniform float zOffset;\nvoid main(void) {\n vec2 pointNorm = (aVertexPosition.xy / uCanvasDimensions) * 2.0 - vec2(1.0, 1.0);\n gl_Position = vec4(pointNorm.x, pointNorm.y * -1.0, zOffset, 1.0);\n dst.x= -1.0 + 2.0*((aVertexPosition.x + 0.5) / uCanvasDimensions.x);\n dst.y= (-1.0 * uCanvasDimensions.y + 2.0*(aVertexPosition.y + 0.5)) / uCanvasDimensions.x;\n}\n"
				);
				this.Zl = c.createProgram();
				this.nf(this.Zl, b, a);
				a = c.createShader(c.FRAGMENT_SHADER);
				b = this.jj(4);
				this.Ic(a, b);
				b = c.createShader(c.VERTEX_SHADER);
				this.Ic(b,
					"precision highp float;\nattribute vec3 aVertexPosition;\nuniform vec2 uCanvasDimensions;\nvarying vec2 dst;\nuniform vec2 dstSize;\nuniform float zOffset;\nvoid main(void) {\n vec2 pointNorm = (aVertexPosition.xy / uCanvasDimensions) * 2.0 - vec2(1.0, 1.0);\n gl_Position = vec4(pointNorm.x, pointNorm.y * -1.0, zOffset, 1.0);\n dst.x= -1.0 + 2.0*((aVertexPosition.x + 0.5) / uCanvasDimensions.x);\n dst.y= (-1.0 * uCanvasDimensions.y + 2.0*(aVertexPosition.y + 0.5)) / uCanvasDimensions.x;\n}\n"
				);
				this.$l = c.createProgram();
				this.nf(this.$l, b, a);
				a = c.createShader(c.FRAGMENT_SHADER);
				b = this.jj(e.s.format);
				this.Ic(a, b);
				b = c.createShader(c.VERTEX_SHADER);
				this.Ic(b,
					"precision highp float;\nattribute vec3 aVertexPosition;\nuniform vec2 uCanvasDimensions;\nvarying vec2 dst;\nuniform vec2 dstSize;\nvoid main(void) {\n vec2 pointNorm = (aVertexPosition.xy / uCanvasDimensions) * 2.0 - vec2(1.0, 1.0);\n gl_Position = vec4(pointNorm.x, pointNorm.y * -1.0, 0.0, 1.0);\n dst.x= -1.0 + 2.0*((aVertexPosition.x + 0.5) / uCanvasDimensions.x);\n dst.y= (-1.0 * uCanvasDimensions.y + 2.0*(aVertexPosition.y + 0.5)) / uCanvasDimensions.x;\n}\n"
				);
				this.am = c.createProgram();
				this.nf(this.am, b, a);
				this.gi || (this.gi = c.createBuffer())
			} else this.g.M("No WebGL to initRemapShader!")
		};
		m.prototype.Ic = function(e, c) {
			var a = this.g.H;
			a.shaderSource(e, c);
			a.compileShader(e);
			a.getShaderParameter(e, a.COMPILE_STATUS) || (console && console.log(a.getShaderInfoLog(e)),
				W && alert(a.getShaderInfoLog(e)))
		};
		m.prototype.nf = function(e, c, a) {
			var b = this.g.H;
			b.attachShader(e, c);
			b.attachShader(e, a);
			b.linkProgram(e);
			b.getProgramParameter(e, b.LINK_STATUS) || (alert("Could not initialise shader program"),
				console && console.log(b.getError()));
			b.useProgram(e)
		};
		m.prototype.jj = function(e) {
			var c = this.g;
			var a =
				"#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif\n#define M_PI 3.14159265358979323846\nvarying vec2 dst;\nuniform vec2 srcScale;\nuniform vec2 srcOffset;\nuniform float rectDstDistance;\nuniform float fisheyeDistance;\nuniform float stereoDistance;\nuniform float directionBlend;\nuniform mat4 matRotate; // = mat4( 1.0,0.0,0.0,0.0, 0.0,1.0,0.0,0.0, 0.0,0.0,1.0,0.0, 0.0,0.0,0.0,1.0 );\nconst float rectSrcDistance = 1.0;\nuniform vec2 tonemap;\n";
			a = (13 == e ? a + "uniform samplerCube cubeTexture;" : a +
				"uniform sampler2D tileTexture;\n") + "void main()\n{\n";
			a += "vec4 direction;\n";
			a += "vec2 src;\n";
			a += "vec2 srcCord;\n";
			a += "vec2 texc;\n";
			var b = this.el(c.ta());
			c.ta() != c.rc && 0 != c.rc ? (c = this.el(c.rc), a += "vec4 direction1,direction2;\n", a += b
				.replace("direction=", "direction1="), a += c.replace("direction=", "direction2="), a +=
				"direction=normalize(mix(direction1, direction2,1.0-directionBlend));\n") : a += b;
			a += "direction=direction*matRotate;\n";
			13 == e && (a += "direction.z=-direction.z;",
				a += "gl_FragColor = textureCube(cubeTexture, direction.xyz);");
			4 == e && (a += "float iz=1.0/(direction.z * rectSrcDistance);\n", a +=
				"src.x=-direction.x*iz;\n", a += "src.y= direction.y*iz;\n", a +=
				"texc=src * srcScale + srcOffset;\n", a += "if (", a += "(direction.z<0.0) && ", a +=
				"(texc.x>=0.0) && (texc.x<=1.0) && (texc.y>=0.0) && (texc.y<=1.0)) {\n", a +=
				"  gl_FragColor = texture2D(tileTexture, texc);\n", a += "} else {\n", a +=
				"  discard;\n", a += "}\n");
			1 == e && (a += "src.x=atan(float(-direction.x), float(-direction.z));", a +=
				"src.y=asin(direction.y);\n", a += "texc=src * srcScale + srcOffset;\n", a +=
				"gl_FragColor = texture2D(tileTexture, texc);\n");
			14 == e && (a += "vec2 cf;\n", a +=
				"if ((direction.z<0.0) && (direction.z<=-abs(direction.x)) && (direction.z<=-abs(direction.y))) {\n",
				a += "  src.x=-direction.x/direction.z;\n", a += "  src.y=+direction.y/direction.z;\n",
				a += "  cf.x=1.0;cf.y=3.0;\n", a += "}\n", a +=
				"if ((direction.x>=0.0) && (direction.x>=abs(direction.y)) && (direction.x>=abs(direction.z))) {\n",
				a += "  src.x=+direction.z/direction.x;\n",
				a += "  src.y=-direction.y/direction.x;\n", a += "  cf.x=3.0;cf.y=3.0;\n", a += "}\n",
				a +=
				"if ((direction.z>=0.0) && (direction.z>=abs(direction.x)) && (direction.z>=abs(direction.y))) {\n",
				a += "  src.x=-direction.x/direction.z;\n", a += "  src.y=-direction.y/direction.z;\n",
				a += "  cf.x=5.0;cf.y=3.0;\n", a += "}\n", a +=
				"if ((direction.x<=0.0) && (direction.x<=-abs(direction.y)) && (direction.x<=-abs(direction.z))) {\n",
				a += "  src.x=+direction.z/direction.x;\n", a += "  src.y=+direction.y/direction.x;\n",
				a += "  cf.x=1.0;cf.y=1.0;\n",
				a += "}\n", a +=
				"if ((direction.y>=0.0) && (direction.y>=abs(direction.x)) && (direction.y>=abs(direction.z))) {\n",
				a += "  src.x=+direction.x/direction.y;\n", a += "  src.y=-direction.z/direction.y;\n",
				a += "  cf.x=5.0;cf.y=1.0;\n", a += "}\n", a +=
				"if ((direction.y<=0.0) && (direction.y<=-abs(direction.x)) && (direction.y<=-abs(direction.z))) {\n",
				a += "  src.x=-direction.x/direction.y;\n", a += "  src.y=-direction.z/direction.y;\n",
				a += "  cf.x=3.0;cf.y=1.0;\n", a += "}\n", a +=
				"texc.x=(cf.x+src.x*srcScale.x) / 6.0;\n", a +=
				"texc.y=(cf.y+src.y*srcScale.y) / 4.0;\n", a +=
				"gl_FragColor = texture2D(tileTexture, texc);\n");
			return a += "}\n"
		};
		m.prototype.el = function(e) {
			var c = "";
			switch (e) {
				case 4:
					c +=
						"direction.x=dst.x*rectDstDistance;\ndirection.y=dst.y*rectDstDistance;\ndirection.z=-1.0;\n";
					break;
				case 12:
					c +=
						"float r,ph,ro;\nr=length(dst.xy)*0.5;\nro=atan(float(dst.x),float(-dst.y));\nph=r / fisheyeDistance;\ndirection.x= sin(ph) * sin(ro);\ndirection.y=-sin(ph) * cos(ro);\ndirection.z=-cos(ph);\n";
					break;
				case 9:
					c += "float n;\nvec2 ind;\nind=dst*stereoDistance;\nn=1.0 + ind.x*ind.x + ind.y*ind.y;\ndirection.x=2.0*ind.x/n;\ndirection.y=2.0*ind.y/n;\ndirection.z=(n-2.0)/n;\n"
			}
			return c +
				"direction.w=0.0;\ndirection=normalize(direction);\n"
		};
		m.prototype.pl = function(e) {
			var c, a, b = this.g,
				d = this.g.H;
			this.Ui = d.createBuffer();
			d.bindBuffer(d.ARRAY_BUFFER, this.Ui);
			var f = [-1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1];
			for (c = 0; 12 > c; c++) 2 > c % 3 && (f[c] *= e);
			d.bufferData(d.ARRAY_BUFFER, new Float32Array(f), d.STATIC_DRAW);
			this.je = d.createBuffer();
			d.bindBuffer(d.ARRAY_BUFFER, this.je);
			var g = [1, 0, 0, 0, 0, 1, 1, 1];
			d.bufferData(d.ARRAY_BUFFER, new Float32Array(g), d.STATIC_DRAW);
			this.Zc = d.createBuffer();
			d.bindBuffer(d.ELEMENT_ARRAY_BUFFER,
				this.Zc);
			var h = [0, 1, 2, 0, 2, 3];
			d.bufferData(d.ELEMENT_ARRAY_BUFFER, new Uint16Array(h), d.STATIC_DRAW);
			f = [];
			h = [];
			g = [];
			var l = new r.ya;
			for (e = 0; 6 > e; e++) {
				var k = e % 3;
				var q = 3 > e ? 1 : 0;
				for (a = 0; 4 > a; a++) {
					l.x = -1;
					l.y = -1;
					l.z = 1;
					for (c = 0; c < a; c++) l.em();
					g.push((0 > l.x ? .33 : 0) + .33 * k, (0 > l.y ? 0 : .5) + .5 * q);
					if (4 > e)
						for (c = 0; c < e; c++) l.sp();
					else 5 == e ? l.rp() : l.qp();
					f.push(l.x, l.y, l.z)
				}
				c = 4 * e;
				h.push(c, 1 + c, 2 + c, c, 2 + c, 3 + c)
			}
			b.s.dk = d.createBuffer();
			d.bindBuffer(d.ARRAY_BUFFER, b.s.dk);
			d.bufferData(d.ARRAY_BUFFER, new Float32Array(f), d.STATIC_DRAW);
			b.s.ti = d.createBuffer();
			d.bindBuffer(d.ARRAY_BUFFER, b.s.ti);
			d.bufferData(d.ARRAY_BUFFER, new Float32Array(g), d.STATIC_DRAW);
			b.s.oj = d.createBuffer();
			d.bindBuffer(d.ELEMENT_ARRAY_BUFFER, b.s.oj);
			d.bufferData(d.ELEMENT_ARRAY_BUFFER, new Uint16Array(h), d.STATIC_DRAW);
			this.Do = d.createBuffer();
			this.Co = d.createBuffer()
		};
		m.prototype.kj = function(e) {
			var c = this;
			return function() {
				try {
					if (e.Wo) return;
					var a = c.g.H;
					a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL, 1);
					var b = !1;
					null != e.ve && e.ve.complete ? e.kl || (a.bindTexture(a.TEXTURE_2D,
						e), a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, a.RGBA, a.UNSIGNED_BYTE, e
						.ve), b = e.kl = !0) : null != e.tf && e.tf.complete && (a.bindTexture(a
						.TEXTURE_2D, e), a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, a.RGBA, a
						.UNSIGNED_BYTE, e.tf), b = !0);
					b && (e.loaded = !0);
					a.bindTexture(a.TEXTURE_2D, null);
					a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL, 0)
				} catch (d) {
					c.g.M(d)
				}
				c.g.update(2)
			}
		};
		m.prototype.ql = function() {
			var e = this.g,
				c = e.H;
			if (this.Wa)
				for (; 0 < this.Wa.length;) c.deleteTexture(this.Wa.pop());
			this.Wa = [];
			for (var a = 0; 6 > a; a++) {
				var b = c.createTexture();
				this.fd++;
				b.tf = null;
				b.ve = null;
				b.kl = !1;
				c.bindTexture(c.TEXTURE_2D, b);
				c.texImage2D(c.TEXTURE_2D, 0, c.RGB, 1, 1, 0, c.RGB, c.UNSIGNED_BYTE, null);
				c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER, c.LINEAR);
				c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_S, c.CLAMP_TO_EDGE);
				c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_T, c.CLAMP_TO_EDGE);
				if (e.Ze[a]) {
					var d = new Image;
					d.crossOrigin = e.crossOrigin;
					d.src = e.oc(e.Ze[a]);
					b.tf = d;
					d.addEventListener && d.addEventListener("load", this.kj(b), !1);
					e.Wb.push(d)
				}
				this.Wa.push(b)
			}
			for (a = 0; 6 > a; a++) e.uh[a] &&
				(d = new Image, d.crossOrigin = e.crossOrigin, d.src = e.oc(e.uh[a]), d.addEventListener ? d
					.addEventListener("load", this.kj(this.Wa[a]), !1) : d.onload = this.kj(this.Wa[a]),
					this.Wa[a].ve = d, e.Wb.push(d));
			for (a = 0; a < e.I.length; a++) e.I[a].ld || (e.I[a].sc = c.createTexture(), e.fd++, c
				.bindTexture(c.TEXTURE_2D, e.I[a].sc), c.texImage2D(c.TEXTURE_2D, 0, c.RGB, 1, 1, 0, c
					.RGB, c.UNSIGNED_BYTE, null), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER, c
					.LINEAR), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_S, c.CLAMP_TO_EDGE), c
				.texParameteri(c.TEXTURE_2D,
					c.TEXTURE_WRAP_T, c.CLAMP_TO_EDGE));
			e.s.sc = c.createTexture();
			e.fd++;
			c.bindTexture(c.TEXTURE_2D, e.s.sc);
			c.texImage2D(c.TEXTURE_2D, 0, c.RGB, 1, 1, 0, c.RGB, c.UNSIGNED_BYTE, null);
			c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER, c.LINEAR);
			c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_S, c.CLAMP_TO_EDGE);
			c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_T, c.CLAMP_TO_EDGE);
			c.bindTexture(c.TEXTURE_2D, null)
		};
		m.prototype.Bq = function() {
			var e = this.g;
			if (e.o.width != e.D.offsetWidth || e.o.height != e.D.offsetHeight) e.o.width = e.D.offsetWidth,
				e.o.height = e.D.offsetHeight;
			e.ne && (e.Kc(0), e.Sc());
			if (e.H) {
				var c = e.H;
				this.yi();
				c.clear(c.DEPTH_BUFFER_BIT);
				c.useProgram(this.F);
				this.Df(0);
				c.uniform1i(this.F.zf, 0);
				c.enableVertexAttribArray(this.F.$);
				c.enableVertexAttribArray(this.F.Ca);
				c.bindBuffer(c.ARRAY_BUFFER, this.je);
				c.vertexAttribPointer(this.F.Ca, 2, c.FLOAT, !1, 0, 0);
				c.activeTexture(c.TEXTURE0);
				c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, this.Zc);
				c.uniform1f(this.F.Ei, 1E-4);
				c.vertexAttribPointer(this.F.$, 3, c.FLOAT, !1, 0, 0);
				r.aa.te(this.tb);
				r.aa.perspective(e.Mb(),
					e.sb.width / e.sb.height, .1, 100, this.tb);
				c.uniformMatrix4fv(this.F.Vd, !1, this.tb);
				for (e = 0; 6 > e; e++) this.Df(e), c.bindBuffer(c.ARRAY_BUFFER, this.Ui), c
					.vertexAttribPointer(this.F.$, 3, c.FLOAT, !1, 0, 0), c.bindBuffer(c.ARRAY_BUFFER, this
						.je), c.vertexAttribPointer(this.F.Ca, 2, c.FLOAT, !1, 0, 0), 6 <= this.Wa.length &&
					this.Wa[e].loaded && (c.activeTexture(c.TEXTURE0), c.bindTexture(c.TEXTURE_2D, this.Wa[
							e]), c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, this.Zc), c.uniform1i(this.F.zf, 0), c
						.uniformMatrix4fv(this.F.Ig, !1, this.na), c.uniformMatrix4fv(this.F.Vd,
							!1, this.tb), c.drawElements(c.TRIANGLES, 6, c.UNSIGNED_SHORT, 0))
			}
		};
		m.prototype.yi = function() {
			var e = this.g;
			if (e.h.vf && 6 < e.h.vf.length) {
				var c = parseInt(e.h.vf);
				e.H.clearColor((c >> 16 & 255) / 255, (c >> 8 & 255) / 255, (c >> 0 & 255) / 255, 1)
			}
		};
		m.prototype.Df = function(e, c) {
			void 0 === c && (c = 1);
			var a = this.g;
			r.aa.te(this.na);
			r.aa.rotate(this.na, c * -a.O.c * Math.PI / 180, [0, 0, 1]);
			r.aa.rotate(this.na, c * -a.i.c * Math.PI / 180, [1, 0, 0]); - 1 == c ? r.aa.rotate(this.na, -a
				.pan.c * Math.PI / 180, [0, 1, 0]) : r.aa.rotate(this.na, (180 - a.pan.c) * Math.PI /
				180, [0,
					1, 0
				]);
			a.ab && (r.aa.rotate(this.na, -a.ab.pitch * Math.PI / 180, [1, 0, 0]), r.aa.rotate(this.na, a.ab
				.O * Math.PI / 180, [0, 0, 1]));
			4 > e ? r.aa.rotate(this.na, -Math.PI / 2 * e, [0, 1, 0]) : r.aa.rotate(this.na, Math.PI / 2 * (
				5 == e ? 1 : -1), [1, 0, 0])
		};
		m.prototype.eq = function(e) {
			var c = this;
			return function() {
				c.Zi.push(e)
			}
		};
		m.prototype.Bn = function(e) {
			this.g.Da = !0;
			this.g.ad = !0;
			e.loaded = !0;
			e.Hj = 0;
			e.Xd = 0;
			var c = this.g.H;
			this.Ek();
			c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL, 1);
			if (null != e.h && e.h.complete) {
				e.ib = c.createTexture();
				this.g.fd++;
				c.bindTexture(c.TEXTURE_2D,
					e.ib);
				try {
					c.texImage2D(c.TEXTURE_2D, 0, c.RGBA, c.RGBA, c.UNSIGNED_BYTE, e.h)
				} catch (a) {
					c.texImage2D(c.TEXTURE_2D, 0, c.RGBA, 1, 1, 0, c.RGBA, c.UNSIGNED_BYTE, new Uint8Array([
						128, 128, 128, 250
					])), this.g.M(a)
				}
			}
			this.g.update(2)
		};
		m.prototype.Ek = function() {
			this.g.Tb && this.g.Tb--
		};
		m.prototype.Cn = function() {
			if (0 < this.Zi.length) {
				var e = this.Zi.shift();
				this.Bn(e)
			}
		};
		m.prototype.To = function(e) {
			var c = this;
			return function() {
				c.g.Da = !0;
				c.g.ad = !0;
				var a = c.g.h;
				try {
					if (null != e && e.complete) {
						var b = a.J[a.J.length - 1],
							d = a.Ja;
						b.height = b.width =
							e.width - 2 * d;
						b.L = b.fa = 1;
						for (var f = 0; 6 > f; f++) {
							var g = new r.Id;
							g.K = document.createElement("canvas");
							c.g.Z ? (g.K.width = b.width + 2 * d, g.K.height = b.height + 2 * d) : (g.K
								.width = a.G + 2 * d, g.K.height = a.G + 2 * d);
							g.Qa = g.K.getContext("2d");
							g.K.style[c.g.Sa + "Origin"] = "0% 0%";
							g.K.style.overflow = "hidden";
							g.K.style.position = "absolute";
							g.h = e;
							var h = b.width + 2 * d,
								l = b.height + 2 * d;
							g.Qa && g.Qa.drawImage(e, 0, f * l, h, l, 0, 0, h, l);
							if (c.g.Z && c.g.H) {
								var k = c.g.H;
								k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL, 1);
								g.ib = k.createTexture();
								c.g.fd++;
								k.bindTexture(k.TEXTURE_2D,
									g.ib);
								try {
									k.texImage2D(k.TEXTURE_2D, 0, k.RGBA, k.RGBA, k.UNSIGNED_BYTE, g.K)
								} catch (q) {
									c.g.M(q)
								}
								k.bindTexture(k.TEXTURE_2D, null);
								k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL, 0)
							}
							c.g.Tc && (g.K.Rd = -1, c.g.D.insertBefore(g.K, c.g.D.firstChild));
							b.U[f] = g
						}
						b.loaded = !0
					}
				} catch (q) {
					c.g.M(q)
				}
				c.g.update(2)
			}
		};
		m.prototype.xm = function(e) {
			var c = this;
			return function() {
				c.g.Da = !0;
				c.g.ad = !0;
				c.Ek();
				e.h = null
			}
		};
		m.prototype.zq = function() {
			var e = this.g,
				c = e.h,
				a = e.h.J;
			e.ne && (e.Kc(0), e.Sc());
			if (e.H) {
				var b = e.H;
				b.useProgram(this.F);
				this.yi();
				b.clear(b.DEPTH_BUFFER_BIT);
				b.enable(b.DEPTH_TEST);
				r.aa.te(this.tb);
				r.aa.perspective(e.Mb(), e.sb.width / e.sb.height, .1, 100, this.tb);
				b.uniformMatrix4fv(this.F.Vd, !1, this.tb);
				e.Dm();
				e.vj();
				var d = e.cj();
				var f = a.length - 1;
				for (e.tc = 0; f >= d;) {
					var g = a[f],
						h = 1;
					f == a.length - 1 && 0 == c.Ja && (h = c.G / (c.G - .5));
					for (var l = 0; 6 > l; l++) {
						var k = e.qb.fb[l];
						var q = k.qf;
						if (k.hb && 0 < q.Mf && 0 < q.hh && 0 < q.scale || g.cache) {
							k.Da = !1;
							k.Ve[f] || (k.Ve[f] = {
								Za: 0,
								zb: 0,
								Bb: 0,
								Cb: 0
							});
							var p = k.Ve[f];
							g.cache ? (p.Za = 0, p.zb = 0, p.Bb = g.L - 1, p.Cb = g.fa - 1) : e.fl(g, q, p);
							q = !0;
							for (var t = p.zb; t <=
								p.Cb; t++)
								for (var u = p.Za; u <= p.Bb; u++) {
									var w = u + t * g.L + l * g.L * g.fa,
										v = g.U[w];
									v || (v = g.U[w] = new r.Id);
									this.xh() ? v.h || (v.Xd ? v.Xd-- : (this.Sh(v, g, e.Ke(l, f, u, t)), e
										.Da = !0)) : e.tc++;
									if (v.ib) {
										if (!v.ef) {
											w = .5 * f + 1;
											v.ef = b.createBuffer();
											b.bindBuffer(b.ARRAY_BUFFER, v.ef);
											var y = [-1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1];
											y[3] = u * c.G - c.Ja;
											y[0] = Math.min((u + 1) * c.G, g.width) + c.Ja;
											y[7] = t * c.G - c.Ja;
											y[1] = Math.min((t + 1) * c.G, g.height) + c.Ja;
											y[4] = y[1];
											y[6] = y[3];
											y[9] = y[0];
											y[10] = y[7];
											for (var A = 0; 12 > A; A++) y[A] = 0 == A % 3 ? h * w * (-2 *
													y[A] / g.width + 1) : 1 == A % 3 ?
												h * w * (-2 * y[A] / g.height + 1) : w;
											b.bufferData(b.ARRAY_BUFFER, new Float32Array(y), b.STATIC_DRAW)
										}
									} else q = !1;
									v.visible = k.hb
								}
							p.tj = q
						}
					}
					f--
				}
				for (l = 0; 6 > l; l++)
					if (k = e.qb.fb[l], k.hb)
						for (q = k.qf, this.Df(l), b.uniform1i(this.F.zf, 0), b.uniformMatrix4fv(this.F.Vd,
								!1, this.tb), b.uniformMatrix4fv(this.F.Ig, !1, this.na), b
							.enableVertexAttribArray(this.F.$), b.enableVertexAttribArray(this.F.Ca), b
							.bindBuffer(b.ARRAY_BUFFER, this.je), b.vertexAttribPointer(this.F.Ca, 2, b
								.FLOAT, !1, 0, 0), b.activeTexture(b.TEXTURE0), b.bindBuffer(b
								.ELEMENT_ARRAY_BUFFER,
								this.Zc), b.useProgram(this.F), f = d; f <= a.length - 1;) {
							g = a[f];
							if (k.hb && 0 < q.Mf && k.Ve[f] && 0 <= k.Ve[f].Za) {
								p = k.Ve[f];
								for (t = p.zb; t <= p.Cb; t++)
									for (u = p.Za; u <= p.Bb; u++) w = u + t * g.L + l * g.L * g.fa, (v = g
										.U[w]) && v.ib && (b.uniform1f(this.F.Ei, 1E-4 * (u % 2 + t %
											2 * 2)), b.bindBuffer(b.ARRAY_BUFFER, v.ef), b
										.vertexAttribPointer(this.F.$, 3, b.FLOAT, !1, 0, 0), b
										.bindTexture(b.TEXTURE_2D, v.ib), b.texParameteri(b.TEXTURE_2D,
											b.TEXTURE_MAG_FILTER, b.LINEAR), b.texParameteri(b
											.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.LINEAR), b
										.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S,
											b.CLAMP_TO_EDGE), b.texParameteri(b.TEXTURE_2D, b
											.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE), b.drawElements(b
											.TRIANGLES, 6, b.UNSIGNED_SHORT, 0)), v.visible = k.hb;
								p.tj && (f = a.length)
							}
							f++
						}
				this.Ij();
				e.ad = !1
			}
		};
		m.prototype.xh = function() {
			return this.g.Tb < this.g.Wg
		};
		m.prototype.Sh = function(e, c, a) {
			var b = this.g;
			b.nj++;
			e.h = new Image;
			e.Hj++;
			e.Xd = 1 << e.Hj;
			e.h.onload = this.eq(e);
			e.h.onerror = this.xm(e);
			e.h.onabort = this.xm(e);
			e.h.crossOrigin = b.crossOrigin;
			e.h.setAttribute("src", a);
			b.M("load " + a);
			c.cache && b.Wb.push(e.h);
			b.Tb++
		};
		m.prototype.Nm =
			function() {
				var e = this.g,
					c = e.h;
				e.ne && (e.Kc(0), e.Sc());
				if (e.H) {
					var a = e.H;
					this.yi();
					W && a.clearColor(.2, 0, 0, 1);
					a.clear(a.DEPTH_BUFFER_BIT);
					a.disable(a.DEPTH_TEST);
					a.disable(a.CULL_FACE);
					a.bindBuffer(a.ARRAY_BUFFER, this.gi);
					var b = [0, 0];
					b[2] = e.o.width;
					b[3] = 0;
					b[4] = e.o.width;
					b[5] = e.o.height;
					b[6] = 0;
					b[7] = e.o.height;
					a.bufferData(a.ARRAY_BUFFER, new Float32Array(b), a.STATIC_DRAW);
					this.g.tc = 0;
					if (!this.yc || this.ug) 0 < c.J.length ? this.zn() : this.An();
					e.s.hd ? this.cp() : (a.enable(a.DEPTH_TEST), a.depthRange(0, 1), a.depthFunc(a.LESS),
						this.ri = !1, 0 < c.J.length && this.Aq(), this.yc && !this.ri && this.bp())
				}
			};
		m.prototype.Qp = function(e, c, a, b, d, f, g) {
			var h = this.g,
				l = h.h,
				k = h.o,
				q = a * l.G / c.width,
				p = (a + 1) * l.G / c.width;
			a = b * l.G / c.height;
			c = (b + 1) * l.G / c.height;
			1 < p && (d *= 2, p = 1);
			1 < c && (d *= 2, c = 1);
			d = Math.min(this.ik, d);
			p = (p - q) / d;
			var t = (c - a) / d;
			b = c = 0;
			l = {
				x: 0,
				y: 0
			};
			var u = {
					x: 0,
					y: 0
				},
				w = 0;
			e.Gh = 0;
			var v = h.Jg,
				y = new r.ya,
				A = this.Lo;
			A.im();
			4 > f ? A.Ce(-90 * f) : A.Fd(5 == f ? 90 : -90);
			h.ab && (A.De(h.ab.O), A.Fd(-h.ab.pitch));
			A.Ce(-h.pan.c);
			A.Fd(h.i.c);
			A.De(h.O.c);
			for (f = 0; f <= d; f++)
				for (var x =
						0; x <= d; x++) {
					var B = 2 * (q + x * p) - 1;
					var z = 2 * (a + f * t) - 1;
					y.x = 1 * B;
					y.y = 1 * z;
					y.z = -1;
					y.normalize();
					A.So(y);
					B = this.bl(y, l, h.ta());
					0 != h.rc && 1 > v && (B = B && this.bl(y, u, h.rc), l.x = l.x * v + u.x * (1 - v), l
						.y = l.y * v + u.y * (1 - v));
					B ? -1E10 < l.x && 1E10 > l.x && -1E10 < l.y && 1E10 > l.y ? -2 < l.x && 2 > l.x && -2 <
						l.y && 2 > l.y && (c += l.x, b += l.y, w++) : l.x = NaN : l.x = NaN;
					e.gd[e.Gh++] = l.x;
					e.gd[e.Gh++] = l.y
				}
			0 < w ? (c /= w, b /= w) : g = 0;
			for (a = 0; a < e.Gh; a += 2) l.x = e.gd[a], l.y = e.gd[a + 1], h = l.x - c, q = l.y - b, l.x +=
				h * g, l.y += q * g, e.gd[a] = k.width / 2 + l.x * k.width / 2, e.gd[a + 1] = k.height / 2 -
				l.y * k.width /
				2;
			this.Rp(e, d)
		};
		m.prototype.bl = function(e, c, a) {
			var b = !0;
			switch (a) {
				case 0:
				case 4:
					a = 1 / (e.z * this.Gj);
					c.x = -e.x * a;
					c.y = e.y * a;
					0 < e.z && (b = !1);
					break;
				case 9:
					1 == e.z && (b = !1);
					a = 1 / ((1 - e.z) * this.Tj);
					c.x = e.x * a;
					c.y = -e.y * a;
					break;
				case 12:
					if (a = Math.sqrt(e.x * e.x + e.y * e.y), 0 == a) c.x = 0, c.y = 0;
					else {
						var d = 2 * this.ej * Math.acos(-e.z) / a;
						if (2 < a) return !1;
						c.x = d * e.x;
						c.y = -d * e.y
					}
			}
			return b
		};
		m.prototype.Rp = function(e, c) {
			for (var a = this.g, b = [], d, f = e.yd = 0; f < c; f++)
				for (var g = 0; g < c; g++) {
					b[0] = f + g * (c + 1);
					b[1] = f + 1 + g * (c + 1);
					b[2] = f + (g + 1) * (c + 1);
					b[3] =
						f + 1 + (g + 1) * (c + 1);
					d = !0;
					for (var h = 0; 4 > h; h++) isNaN(e.gd[2 * b[0]]) && (d = !1);
					if (d) {
						var l = !1,
							k = !1,
							q = !1,
							p = !1;
						for (h = 0; 4 > h; h++) {
							var t = e.gd[2 * b[h]];
							t < a.o.width && (k = !0);
							0 <= t && (l = !0);
							t = e.gd[2 * b[h] + 1];
							t < a.o.height && (q = !0);
							0 <= t && (p = !0)
						}
						if (d = d && k && l && q && p) e.se[e.yd++] = b[0], e.se[e.yd++] = b[3], e.se[e
							.yd++] = b[2], e.se[e.yd++] = b[0], e.se[e.yd++] = b[1], e.se[e.yd++] = b[3]
					}
				}
		};
		m.prototype.Aq = function() {
			var e = this.g,
				c = e.h,
				a = e.h.J;
			e.ne && (e.Kc(0), e.Sc());
			if (e.H) {
				var b = e.H,
					d = this.$l;
				b.useProgram(d);
				this.$j(d);
				b.enable(b.CULL_FACE);
				b.cullFace(b.FRONT);
				b.enable(b.DEPTH_TEST);
				r.aa.te(this.tb);
				r.aa.perspective(e.Mb(), e.sb.width / e.sb.height, .1, 100, this.tb);
				b.uniformMatrix4fv(b.getUniformLocation(d, "uPMatrix"), !1, this.tb);
				this.g.tc = 0;
				e.vj();
				var f = e.cj(),
					g = 0;
				var h = a.length - 1;
				for (var l = {}, k = a[h]; k.uf && 0 < h;) h--, k = a[h];
				for (var q = h, p = q, t = 0; 6 > t; t++)
					for (var u = 0; u < k.fa; u++)
						for (var w = 0; w < k.L; w++) {
							var v = w + u * k.L + t * k.L * k.fa;
							l[v] = 1
						}
				for (; h >= f;) {
					var y = {};
					k = a[h];
					var A = null;
					0 < h && (A = a[h - 1]);
					var x = !0;
					for (var B in l)
						if (l.hasOwnProperty(B)) {
							v = Number(B);
							var z = k.U[v];
							t = Number(Math.floor(v / (k.L * k.fa)));
							u = Math.floor((v - t * k.L * k.fa) / k.L);
							w = Math.floor(v - (u * k.L + t * k.L * k.fa));
							if (6 <= t) console.log("Grrr...");
							else {
								var C = this.g.qb.fb[t];
								C.Da = !1;
								z || (z = k.U[v] = new r.Id, e.M("create " + v));
								this.Qp(z, k, w, u, Math.max(1, this.ik >> q - h), t, -(0 != e.rc) ? .3 :
									.1);
								z.visible = 0 < z.yd || k.cache;
								z.Oh = 3;
								z.yg = Date.now();
								z.visible && !z.ib && (x = !1, this.xh() ? z.h || (z.Xd ? z.Xd-- : (this.Sh(
									z, k, e.Ke(t, h, w, u)), e.Da = !0)) : this.g.tc++);
								if (A && (z.visible || A.cache)) {
									z = (w * c.G + 1) / k.width;
									w = Math.min(1, ((w + 1) *
										c.G - 1) / k.width);
									var D = (u * c.G + 1) / k.height;
									u = Math.min(1, ((u + 1) * c.G - 1) / k.height);
									v = c.G / A.width;
									C = c.G / A.height;
									var F = D;
									D = Math.floor(D * A.height / c.G);
									do {
										var E = z,
											H = Math.floor(z * A.width / c.G);
										do {
											var I = H + D * A.L + t * A.L * A.fa;
											H < A.L && D < A.fa ? y[I] = 1 : e.M("Grrrr");
											H++;
											E += v
										} while (E < w);
										D++;
										F += C
									} while (F < u)
								}
							}
						} x && (p = h, 20 > e.f.c && h < this.Ye && (this.ri = !0));
					l = y;
					h--
				}
				this.Ij();
				b.uniform1i(b.getUniformLocation(d, "tileTexture"), 0);
				b.activeTexture(b.TEXTURE0);
				h = f;
				for (f = -1; h <= Math.min(p, this.Ye - 1);) {
					k = a[h];
					for (B in k.U)
						if (k.U.hasOwnProperty(B)) {
							l =
								Number(B);
							z = k.U[l];
							t = Math.floor(l / (k.L * k.fa));
							u = Math.floor((l - t * k.L * k.fa) / k.L);
							w = Math.floor(l - (u * k.L + t * k.L * k.fa));
							f != t && (f = t, this.zi(t, d));
							if (g > e.we) {
								e.M("Excided painted tiles");
								this.ri = !1;
								break
							}
							z.ib && (l = t = c.G, w == k.L - 1 && (t = k.width - c.G * w), u == k.fa - 1 &&
								(l = k.height - c.G * u), t = (t + 2 * c.Ja) / c.G, l = (l + 2 * c.Ja) /
								c.G, b.bindTexture(b.TEXTURE_2D, z.ib), b.uniform2f(b
									.getUniformLocation(d, "uCanvasDimensions"), e.o.width, e.o.height),
								q = b.getUniformLocation(d, "srcScale"), b.uniform2f(q, .5 * k.width / c
									.G / t, .5 * k.height / c.G / l),
								q = b.getUniformLocation(d, "srcOffset"), b.uniform2f(q, (.5 * k.width +
										c.Ja - c.G * w) / c.G / t, -(.5 * k.height + c.Ja - c.G * u) / c
									.G / l + 1), q = b.getUniformLocation(d, "zOffset"), b.uniform1f(q,
									(h + 1) / (a.length + 5)), t = b.getAttribLocation(d,
									"aVertexPosition"), b.disableVertexAttribArray(0), b
								.disableVertexAttribArray(1), b.disableVertexAttribArray(2), b
								.enableVertexAttribArray(t), b.activeTexture(b.TEXTURE0), b
								.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, b.LINEAR), b
								.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.LINEAR), b
								.texParameteri(b.TEXTURE_2D,
									b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE), b.texParameteri(b.TEXTURE_2D, b
									.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE), b.bindBuffer(b.ARRAY_BUFFER, this
									.Do), b.vertexAttribPointer(t, 2, b.FLOAT, !1, 0, 0), b.bufferData(b
									.ARRAY_BUFFER, new Float32Array(z.gd), b.DYNAMIC_DRAW), b
								.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.Co), b.bufferData(b
									.ELEMENT_ARRAY_BUFFER, new Uint16Array(z.se), b.DYNAMIC_DRAW), b
								.drawElements(b.TRIANGLES, z.yd, b.UNSIGNED_SHORT, 0), g++)
						} h++
				}
				b.disable(b.CULL_FACE);
				b.cullFace(b.FRONT_AND_BACK);
				e.ad = !1
			}
		};
		m.prototype.zi = function(e,
			c) {
			var a = this.g.H;
			r.aa.te(this.na);
			this.Df(e, -1);
			a.uniformMatrix4fv(a.getUniformLocation(c, "matRotate"), !1, this.na)
		};
		m.prototype.cp = function() {
			var e = this.g;
			if (e.H) {
				var c = e.H,
					a = this.am;
				c.useProgram(a);
				this.zi(0, a);
				c.uniform2f(c.getUniformLocation(a, "uCanvasDimensions"), e.o.width, e.o.height);
				if (1 == e.s.format) {
					var b = c.getUniformLocation(a, "srcScale");
					c.uniform2f(b, -.5 / Math.PI, (e.s.gj ? -1 : 1) / Math.PI)
				}
				14 == e.s.format && (b = c.getUniformLocation(a, "srcScale"), c.uniform2f(b, 1 - 2 * e.s
					.Te / (e.s.width / 3), 1 - 2 * e.s.Te /
					(e.s.height / 2)));
				b = c.getUniformLocation(a, "srcOffset");
				c.uniform2f(b, .5, .5);
				this.$j(a);
				b = c.getUniformLocation(a, "cubeTexture");
				c.uniform1i(b, 0);
				b = c.getAttribLocation(a, "aVertexPosition");
				c.disableVertexAttribArray(0);
				c.disableVertexAttribArray(1);
				c.disableVertexAttribArray(2);
				c.enableVertexAttribArray(b);
				c.bindBuffer(c.ARRAY_BUFFER, this.gi);
				c.vertexAttribPointer(b, 2, c.FLOAT, !1, 0, 0);
				c.activeTexture(c.TEXTURE0);
				c.bindTexture(c.TEXTURE_2D, e.s.sc);
				c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_S, c.CLAMP_TO_EDGE);
				c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_T, c.CLAMP_TO_EDGE);
				c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER, c.LINEAR);
				c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MAG_FILTER, c.LINEAR);
				c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, this.Zc);
				c.drawElements(c.TRIANGLES, 6, c.UNSIGNED_SHORT, 0)
			}
		};
		m.prototype.$j = function(e) {
			var c = this.g,
				a = c.H,
				b = this.g.o,
				d = b.width / b.height;
			switch (c.f.mode) {
				case 1:
					d = 1;
					break;
				case 2:
					d = b.width / Math.sqrt(b.width * b.width + b.height * b.height);
					break;
				case 3:
					4 * b.height / 3 < b.width && (d = 4 / 3)
			}
			b = a.getUniformLocation(e,
				"rectDstDistance");
			this.Gj = Math.tan(Math.min(c.f.c, 179) / 2 * Math.PI / 180) * d;
			a.uniform1f(b, this.Gj);
			b = a.getUniformLocation(e, "fisheyeDistance");
			this.ej = 180 / (c.f.c * Math.PI * d);
			a.uniform1f(b, this.ej);
			b = a.getUniformLocation(e, "stereoDistance");
			this.Tj = Math.tan(Math.min(c.f.c, 359) / 4 * Math.PI / 180) * d;
			a.uniform1f(b, this.Tj);
			b = a.getUniformLocation(e, "directionBlend");
			a.uniform1f(b, c.Jg)
		};
		m.prototype.bp = function() {
			var e = this.g,
				c = e.H,
				a = this.Zl;
			c.useProgram(a);
			c.enable(c.DEPTH_TEST);
			this.zi(0, a);
			c.uniform2f(c.getUniformLocation(a,
				"uCanvasDimensions"), e.o.width, e.o.height);
			e = c.getUniformLocation(a, "srcScale");
			c.uniform2f(e, 1, 1);
			e = c.getUniformLocation(a, "srcOffset");
			c.uniform2f(e, 0, 0);
			e = c.getUniformLocation(a, "zOffset");
			c.uniform1f(e, .9999);
			this.$j(a);
			this.zi(0, a);
			e = c.getUniformLocation(a, "cubeTexture");
			c.uniform1i(e, 0);
			a = c.getAttribLocation(a, "aVertexPosition");
			c.disableVertexAttribArray(0);
			c.disableVertexAttribArray(1);
			c.disableVertexAttribArray(2);
			c.enableVertexAttribArray(a);
			c.bindBuffer(c.ARRAY_BUFFER, this.gi);
			c.vertexAttribPointer(a,
				2, c.FLOAT, !1, 0, 0);
			c.activeTexture(c.TEXTURE0);
			c.bindTexture(c.TEXTURE_CUBE_MAP, this.yc);
			c.texParameteri(c.TEXTURE_CUBE_MAP, c.TEXTURE_WRAP_S, c.CLAMP_TO_EDGE);
			c.texParameteri(c.TEXTURE_CUBE_MAP, c.TEXTURE_WRAP_T, c.CLAMP_TO_EDGE);
			c.texParameteri(c.TEXTURE_CUBE_MAP, c.TEXTURE_MIN_FILTER, c.LINEAR);
			c.texParameteri(c.TEXTURE_CUBE_MAP, c.TEXTURE_MAG_FILTER, c.LINEAR);
			c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, this.Zc);
			c.drawElements(c.TRIANGLES, 6, c.UNSIGNED_SHORT, 0)
		};
		m.prototype.An = function() {
			for (var e = this.g, c = e.H,
					a = [1, 3, 5, 4, 0, 2], b = !0, d = !0, f = !1, g = 0; 6 > g; g++) this.Wa[g].ve
				.complete ? this.th[g] || (f = !0) : b = !1, this.Wa[g].tf.complete || (d = !1);
			if (d || b)
				if (!d || b || !this.yc || f) {
					g = Math.round(e.uc / e.Gf);
					d = (e.uc - g) / 2;
					e.M("paint cube single - isMain: " + b + " overlap: " + d);
					this.Ye = 0;
					this.yc || (this.yc = c.createTexture());
					e.fd++;
					c.bindTexture(c.TEXTURE_CUBE_MAP, this.yc);
					c.texParameteri(c.TEXTURE_CUBE_MAP, c.TEXTURE_WRAP_S, c.CLAMP_TO_EDGE);
					c.texParameteri(c.TEXTURE_CUBE_MAP, c.TEXTURE_WRAP_T, c.CLAMP_TO_EDGE);
					c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL,
						1);
					f = document.createElement("canvas");
					f.width = g;
					f.height = g;
					var h = f.getContext("2d");
					for (g = 0; 6 > g; g++) {
						var l = a[g];
						this.Wa[l].ve.complete ? this.th[l] || (h.drawImage(this.Wa[l].ve, -d, -d), c
							.texImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X + g, 0, c.RGBA, c.RGBA, c
								.UNSIGNED_BYTE, f), this.th[l] = !0) : (h.drawImage(this.Wa[l].tf, -d, -
							d, e.uc, e.uc), c.texImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X + g, 0, c
							.RGBA, c.RGBA, c.UNSIGNED_BYTE, f))
					}
					this.ug = !b
				}
		};
		m.prototype.zn = function() {
			var e = this.g,
				c = this.g.h,
				a = e.h.J,
				b = e.H,
				d;
			var f = a.length - 1;
			if (!(0 >
					f)) {
				a[f].uf && f--;
				var g = 512;
				e.tg && (g = 256);
				!e.yf && 2 <= e.devicePixelRatio && (g = 512);
				for ((d = b.getParameter(b.MAX_CUBE_MAP_TEXTURE_SIZE)) && d < g && (g = d); 0 < f && a[f -
						1].width <= g;) f--;
				g = a[f];
				if (0 != g.L) {
					d = f;
					var h = this.vn(f);
					this.ug && h && (this.ug = !1);
					h || (f = a.length - 1, g = a[f], h || (g.uf ? (h = g.loaded, this.uj(f - 1) && (--f,
						h = !0)) : h = this.uj(f)), this.ug = !0);
					this.uj(d);
					if (h && this.Ye > f) {
						g = a[f];
						e.M("paint cube level " + f);
						this.Ye = f;
						a = e.h.Ja;
						f = 0 < a || 1 < g.L || 1 < g.fa;
						h = d = void 0;
						f && (h = document.createElement("canvas"), h.width = g.width, h.height =
							g.height, 2048 > g.width && (1500 < g.width ? (h.width = 2048, h.height =
								2048) : 700 < g.width ? (h.width = 1024, h.height = 1024) : (h
								.width = 512, h.height = 512)), d = h.getContext("2d"));
						this.yc = b.createTexture();
						e.fd++;
						b.bindTexture(b.TEXTURE_CUBE_MAP, this.yc);
						b.texParameteri(b.TEXTURE_CUBE_MAP, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE);
						b.texParameteri(b.TEXTURE_CUBE_MAP, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE);
						b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, 1);
						var l = [1, 3, 5, 4, 0, 2];
						c = c.G;
						for (var k = 0; 6 > k; k++) {
							for (var q = 0; q < g.fa; q++)
								for (var p = 0; p < g.L; p++) {
									var t =
										p + q * g.L + l[k] * g.L * g.fa,
										u = g.U[t],
										w = u.h;
									u.K && (w = u.K);
									w ? f ? (t = h.width / g.width, d.drawImage(w, t * (p * c - a), t * (q *
										c - a), t * w.width, t * w.height)) : b.texImage2D(b
										.TEXTURE_CUBE_MAP_POSITIVE_X + k, 0, b.RGBA, b.RGBA, b
										.UNSIGNED_BYTE, w) : (e.M("WTF?!"), e.M(t), e.M(u))
								}
							f && b.texImage2D(b.TEXTURE_CUBE_MAP_POSITIVE_X + k, 0, b.RGBA, b.RGBA, b
								.UNSIGNED_BYTE, h)
						}
					}
				}
			}
		};
		m.prototype.uj = function(e) {
			var c = this.g,
				a = c.h.J[e];
			if (0 == a.L) return !1;
			var b = !0;
			a.cache = !0;
			for (var d = 0; 6 > d; d++)
				for (var f = 0; f < a.fa; f++)
					for (var g = 0; g < a.L; g++) {
						var h = g + f * a.L + d * a.L *
							a.fa,
							l = a.U[h];
						l || (l = a.U[h] = new r.Id);
						this.xh() ? l.h || (l.Xd ? l.Xd-- : (this.Sh(l, a, c.Ke(d, e, g, f)), c.Da = !0)) :
							this.g.tc++;
						l.ib || (b = !1, c.Da = !0)
					}
			b && (a.loaded = !0);
			return b
		};
		m.prototype.vn = function(e) {
			e = this.g.h.J[e];
			if (0 == e.L) return !1;
			for (var c = 0; 6 > c; c++)
				for (var a = 0; a < e.fa; a++)
					for (var b = 0; b < e.L; b++) {
						var d = e.U[b + a * e.L + c * e.L * e.fa];
						if (!d || !d.ib) return !1
					}
			return e.loaded = !0
		};
		m.prototype.ready = function() {
			return null != this.yc
		};
		m.prototype.Ij = function() {
			for (var e = this.g, c = e.h.J, a = e.H, b = Date.now(), d = c.length - 1; 0 <= d; d--) {
				var f =
					c[d];
				if (!f.cache)
					for (var g in f.U)
						if (f.U.hasOwnProperty(g)) {
							var h = f.U[g];
							0 < h.Oh && h.Oh--;
							h.visible || 0 < h.Oh ? (h.visible && (h.yg = b), h = this.Pd.indexOf(h), -1 !==
								h && this.Pd.splice(h, 1)) : -1 === this.Pd.indexOf(h) && (h.level = f,
								this.Pd.push(h))
						}
			}
			if (this.Pd.length > 1.1 * e.vm)
				for (this.Pd.sort(function(l, k) {
						return k.yg - l.yg
					}); this.Pd.length > e.vm;) h = this.Pd.pop(), h.ib && (a.deleteTexture(h.ib), e.fd--, h
						.ib = 0), h.h = null, h.ef && (a.deleteBuffer(h.ef), h.ef = 0), g = h.level.U
					.indexOf(h), e.M("delete " + g + " " + (b - h.yg)), delete h.level.U[g]
		};
		m.prototype.tq = function() {
			var e = this.g;
			if (e.H) {
				var c = this.g.H;
				c.disable(c.DEPTH_TEST);
				var a;
				for (a = 0; a < e.I.length; a++) {
					var b = e.I[a];
					if (!b.ld) {
						r.aa.te(this.na);
						r.aa.rotate(this.na, -e.O.c * Math.PI / 180, [0, 0, 1]);
						r.aa.rotate(this.na, -e.i.c * Math.PI / 180, [1, 0, 0]);
						r.aa.rotate(this.na, (180 - e.pan.c) * Math.PI / 180, [0, 1, 0]);
						r.aa.rotate(this.na, b.pan * Math.PI / 180, [0, 1, 0]);
						r.aa.rotate(this.na, -b.i * Math.PI / 180, [1, 0, 0]);
						r.aa.translate(this.na, [0, 0, 1]);
						r.aa.rotate(this.na, b.nb * Math.PI / 180, [0, 0, 1]);
						r.aa.rotate(this.na, -b.Ea *
							Math.PI / 180, [0, 1, 0]);
						r.aa.rotate(this.na, b.xa * Math.PI / 180, [1, 0, 0]);
						var d = Math.tan(b.f / 2 * Math.PI / 180),
							f = b.ee;
						f || (f = 16 / 9);
						r.aa.scale(this.na, [d, d / f, 1]);
						r.aa.translate(this.na, [0, 0, -1]);
						c.bindBuffer(c.ARRAY_BUFFER, this.Ui);
						c.vertexAttribPointer(this.F.$, 3, c.FLOAT, !1, 0, 0);
						c.bindBuffer(c.ARRAY_BUFFER, this.je);
						c.vertexAttribPointer(this.F.Ca, 2, c.FLOAT, !1, 0, 0);
						c.activeTexture(c.TEXTURE0);
						c.bindTexture(c.TEXTURE_2D, b.sc);
						c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MAG_FILTER, c.LINEAR);
						c.texParameteri(c.TEXTURE_2D,
							c.TEXTURE_MIN_FILTER, c.LINEAR);
						c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_S, c.CLAMP_TO_EDGE);
						c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_T, c.CLAMP_TO_EDGE);
						c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, this.Zc);
						c.uniform1i(this.F.zf, 0);
						c.uniformMatrix4fv(this.F.Ig, !1, this.na);
						c.uniformMatrix4fv(this.F.Vd, !1, this.tb);
						c.drawElements(c.TRIANGLES, 6, c.UNSIGNED_SHORT, 0)
					}
				}
				c.enable(c.DEPTH_TEST)
			}
		};
		m.prototype.sq = function() {
			var e = this.g,
				c;
			if (e.o.width != e.D.offsetWidth || e.o.height != e.D.offsetHeight) e.o.width = e.D.offsetWidth,
				e.o.height = e.D.offsetHeight;
			e.ne && (e.Kc(0), e.Sc());
			if (e.H) {
				var a = e.H;
				a.useProgram(this.F);
				r.aa.te(this.tb);
				r.aa.perspective(e.Mb(), e.sb.width / e.sb.height, .1, 100, this.tb);
				a.uniformMatrix4fv(this.F.Vd, !1, this.tb);
				this.Df(0);
				a.uniform1i(this.F.zf, 0);
				a.uniformMatrix4fv(this.F.Vd, !1, this.tb);
				a.uniformMatrix4fv(this.F.Ig, !1, this.na);
				a.enableVertexAttribArray(this.F.$);
				a.enableVertexAttribArray(this.F.Ca);
				a.bindBuffer(a.ARRAY_BUFFER, this.je);
				a.vertexAttribPointer(this.F.Ca, 2, a.FLOAT, !1, 0, 0);
				a.activeTexture(a.TEXTURE0);
				a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.Zc);
				a.uniform1f(this.F.Ei, 1E-4);
				a.vertexAttribPointer(this.F.$, 3, a.FLOAT, !1, 0, 0);
				a.bindTexture(a.TEXTURE_2D, e.s.sc);
				for (c = 0; 1 > c; c++) this.Df(0), a.bindBuffer(a.ARRAY_BUFFER, e.s.dk), a
					.vertexAttribPointer(this.F.$, 3, a.FLOAT, !1, 0, 0), a.bindBuffer(a.ARRAY_BUFFER, e.s
						.ti), a.vertexAttribPointer(this.F.Ca, 2, a.FLOAT, !1, 0, 0), a.activeTexture(a
						.TEXTURE0), a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, e.s.oj), a.uniform1i(this.F.zf, 0),
					a.uniformMatrix4fv(this.F.Ig, !1, this.na), a.uniformMatrix4fv(this.F.Vd,
						!1, this.tb), a.drawElements(a.TRIANGLES, 36, a.UNSIGNED_SHORT, 0)
			}
		};
		m.prototype.rq = function() {
			var e = this.g,
				c = e.H,
				a = e.s;
			if (0 < e.I.length)
				for (var b = 0; b < e.I.length; b++) {
					var d = e.I[b];
					if (!d.ld && d.xl && d.Fh != d.b.currentTime && (d.Fh = d.b.currentTime, !d.ee && 0 < d
							.b.videoHeight && (d.ee = d.b.videoWidth / d.b.videoHeight), e.eh)) try {
						d.sc && (c.bindTexture(c.TEXTURE_2D, d.sc), c.texImage2D(c.TEXTURE_2D, 0, c.RGB,
							c.RGB, c.UNSIGNED_BYTE, d.b), e.update())
					} catch (g) {
						e.M(g)
					}
				}
			if (a.b && (b = Number(a.b.currentTime), a.Fh != b)) {
				a.Fh = b;
				try {
					var f =
						0 < a.b.readyState;
					e.Kh && a.hd && (f = f && 0 < a.b.currentTime);
					a.sc && a.Mh && f && (a.hd = !0, a.width = a.b.videoWidth, a.height = a.b.videoHeight, c
						.pixelStorei(c.UNPACK_FLIP_Y_WEBGL, e.s.gj), c.bindTexture(c.TEXTURE_2D, a.sc),
						c.texImage2D(c.TEXTURE_2D, 0, c.RGB, c.RGB, c.UNSIGNED_BYTE, a.b), a.um = !0, e
						.update())
				} catch (g) {
					e.M(g)
				}
			}
		};
		m.prototype.Pl = function() {
			var e, c, a = this.g,
				b = this.g.H;
			a.za.style.visibility = "hidden";
			a.A.wg != a.A.mode && (a.A.wg = a.A.mode);
			if ((0 <= a.A.mode || 0 < a.A.ob.length) && !a.B.Xg) {
				var d = 1;
				0 >= a.A.mode && (d = 0);
				3 == a.A.mode &&
					(d = a.A.ra);
				for (e = 0; e < a.R.length; e++) {
					var f = a.R[e];
					if ("poly" == f.type) {
						var g = f.Wd,
							h = d;
						2 == a.A.mode && (h = f.ra);
						var l = a.A.ob.indexOf(f.id); - 1 != l && (h = a.A.Sb[l]);
						if (0 < g.length) {
							l = [];
							for (c = 0; c < g.length; c++) l.push(g[c].Qb), l.push(g[c].vb), l.push(0);
							b.useProgram(this.Dd);
							b.enable(b.BLEND);
							b.blendFuncSeparate(b.SRC_ALPHA, b.ONE_MINUS_SRC_ALPHA, b.SRC_ALPHA, b.ONE);
							b.disable(b.DEPTH_TEST);
							g = b.createBuffer();
							b.bindBuffer(b.ARRAY_BUFFER, g);
							b.bufferData(b.ARRAY_BUFFER, new Float32Array(l), b.STATIC_DRAW);
							b.uniform2f(b.getUniformLocation(this.Dd,
								"uCanvasDimensions"), a.o.width, a.o.height);
							g = b.getUniformLocation(this.Dd, "uColor");
							c = f.lc;
							b.uniform3f(g, (c >> 16 & 255) / 255, (c >> 8 & 255) / 255, (c & 255) / 255);
							var k = b.getUniformLocation(this.Dd, "uAlpha");
							b.uniform1f(k, f.kc * h);
							b.vertexAttribPointer(this.Dd.$, 3, b.FLOAT, !1, 0, 0);
							b.drawArrays(b.LINE_LOOP, 0, l.length / 3);
							c = f.ic;
							b.uniform3f(g, (c >> 16 & 255) / 255, (c >> 8 & 255) / 255, (c & 255) / 255);
							b.uniform1f(k, f.hc * h);
							b.enable(b.STENCIL_TEST);
							b.clearStencil(0);
							b.clear(b.STENCIL_BUFFER_BIT);
							b.colorMask(!1, !1, !1, !1);
							b.stencilFunc(b.ALWAYS,
								1, 1);
							b.stencilOp(b.INCR, b.INCR, b.INCR);
							b.drawArrays(b.TRIANGLE_FAN, 0, l.length / 3);
							b.colorMask(!0, !0, !0, !0);
							b.stencilFunc(b.EQUAL, 1, 1);
							b.stencilOp(b.ZERO, b.ZERO, b.ZERO);
							b.drawArrays(b.TRIANGLE_FAN, 0, l.length / 3);
							b.disable(b.BLEND);
							b.enable(b.DEPTH_TEST);
							b.disable(b.STENCIL_TEST);
							b.useProgram(this.F)
						}
					}
				}
			}
		};
		m.prototype.Zj = function() {
			var e = this.g,
				c = e.h;
			if (e.o.width != e.D.offsetWidth || e.o.height != e.D.offsetHeight) e.o.width = e.D.offsetWidth,
				e.o.height = e.D.offsetHeight;
			e.ne && (e.Kc(0), e.Sc());
			if (e.H) {
				var a = e.H;
				this.yi();
				a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT);
				a.disable(a.DEPTH_TEST);
				a.disable(a.CULL_FACE);
				a.useProgram(this.dg);
				var b = a.getUniformLocation(this.dg, "uRect");
				a.uniform2f(a.getUniformLocation(this.dg, "uCanvasDimensions"), e.o.width, e.o.height);
				a.activeTexture(a.TEXTURE0);
				a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.Zc);
				var d = a.getAttribLocation(this.dg, "aVertexPosition");
				a.disableVertexAttribArray(0);
				a.disableVertexAttribArray(1);
				a.disableVertexAttribArray(2);
				a.enableVertexAttribArray(d);
				a.bindBuffer(a.ARRAY_BUFFER,
					this.je);
				a.vertexAttribPointer(d, 2, a.FLOAT, !1, 0, 0);
				e.tc = 0;
				var f = 100 / e.f.c;
				var g = c.width / c.height;
				d = e.o.height * f * g;
				f *= e.o.height;
				g = (e.pan.c / 100 / g - .5) * d + e.o.width / 2;
				for (var h = (e.i.c / 100 - .5) * f + e.o.height / 2, l, k, q, p = 0; c.J.length >= p + 2 &&
					c.J[p + 1].width > d;) p++;
				var t;
				var u = [];
				for (t = c.J.length - 1; t >= p;) {
					var w = c.J[t];
					if (w.cache) {
						var v = {
							Za: 0,
							zb: 0
						};
						v.Bb = w.L - 1;
						v.Cb = w.fa - 1
					} else {
						v = {};
						l = -h / f * (w.height / e.h.G);
						k = (-g + e.o.width) / d * (w.width / e.h.G);
						var y = (-h + e.o.height) / f * (w.height / e.h.G);
						v.Za = Math.min(Math.max(0, Math.floor(-g /
							d * (w.width / e.h.G))), w.L - 1);
						v.zb = Math.min(Math.max(0, Math.floor(l)), w.fa - 1);
						v.Bb = Math.min(Math.max(0, Math.floor(k)), w.L - 1);
						v.Cb = Math.min(Math.max(0, Math.floor(y)), w.fa - 1)
					}
					u[t] = v;
					var A = !0;
					for (k = v.zb; k <= v.Cb; k++)
						for (l = v.Za; l <= v.Bb; l++) q = l + k * w.L, y = w.U[q], y || (y = new r.Id, w.U[
								q] = y), this.xh() ? y.h || (this.Sh(y, w, e.Ke(0, t, l, k)), e.Da = !0) :
							this.g.tc++, y.h && y.h.complete || (A = !1), y.visible = !0;
					v.tj = A;
					t--
				}
				for (t = c.J.length - 1; t >= p;) {
					w = c.J[t];
					if (u[t] && 0 <= u[t].Za)
						for (v = u[t], k = v.zb; k <= v.Cb; k++)
							for (l = v.Za; l <= v.Bb; l++) q = l +
								k * w.L, (y = w.U[q]) && y.h && y.h.complete && (e = g + (-c.Ja + c.G * l) *
									d / w.width, a.uniform4f(b, e, h + (-c.Ja + c.G * k) * f / w.height, y.h
										.width * d / w.width, y.h.height * f / w.height), y && y.ib && (a
										.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.Zc), a.bindTexture(a
											.TEXTURE_2D, y.ib), a.texParameteri(a.TEXTURE_2D, a
											.TEXTURE_MAG_FILTER, a.LINEAR), a.texParameteri(a.TEXTURE_2D, a
											.TEXTURE_MIN_FILTER, a.LINEAR), a.texParameteri(a.TEXTURE_2D, a
											.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE), a.texParameteri(a.TEXTURE_2D,
											a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE), a.drawElements(a.TRIANGLES,
											6, a.UNSIGNED_SHORT, 0)));
					t--
				}
				this.Ij()
			}
		};
		m.prototype.hi = function() {
			var e = this.g.H;
			if (e && this.Wa)
				for (; 0 < this.Wa.length;) {
					var c = this.Wa.pop();
					c.Wo = !0;
					e.deleteTexture(c)
				}
			this.yc && (e.deleteTexture(this.yc), this.yc = null);
			this.Ye = 1E6;
			this.th = [!1, !1, !1, !1, !1, !1]
		};
		return m
	}();
	r.$m = n
})(ggP2VR || (ggP2VR = {}));
(function(r) {
	var n = function() {
			return function() {
				this.qf = {
					fg: 1,
					gg: 1,
					Dg: 0,
					Eg: 0,
					Mf: 0,
					hh: 0,
					scale: 1
				};
				this.hb = !0;
				this.Ve = []
			}
		}(),
		m = function() {
			function e() {
				var c;
				this.fb = Array(6);
				for (c = 0; 6 > c; c++) this.fb[c] = new n
			}
			e.prototype.wn = function(c, a, b, d) {
				for (var f = 0; 6 > f; f++) {
					var g;
					if (g = this.fb[f]) {
						var h = [];
						h.push(new r.ya(-1, -1, -1, 0, 0));
						h.push(new r.ya(1, -1, -1, 1, 0));
						h.push(new r.ya(1, 1, -1, 1, 1));
						h.push(new r.ya(-1, 1, -1, 0, 1));
						for (var l = 0; l < h.length; l++) 4 > f ? h[l].Ea(-Math.PI / 2 * f) : h[l].xa(Math.PI /
								2 * (4 === f ? -1 : 1)), d && (h[l].nb(d.O *
								Math.PI / 180), h[l].xa(-d.pitch * Math.PI / 180)), h[l].Ea(-c * Math.PI / 180),
							h[l].xa(a * Math.PI / 180), h[l].nb(b * Math.PI / 180);
						g.hb = 0 < h.length
					}
				}
			};
			return e
		}();
	r.Wm = m
})(ggP2VR || (ggP2VR = {}));
(function(r) {
	r.Vm = function() {
		return function() {
			this.J = [];
			this.vf = "0x000000";
			this.Ul = !1;
			this.Il = this.Hl = .4;
			this.G = 512;
			this.Ja = 1;
			this.sj = 0;
			this.Jl = "";
			this.cm = this.height = this.width = 0
		}
	}();
	r.jk = function() {
		return function() {
			this.height = this.width = 0;
			this.uf = this.cache = !1;
			this.fa = this.L = 0;
			this.loaded = !1;
			this.U = []
		}
	}();
	r.Id = function() {
		return function() {
			this.loaded = this.visible = !1;
			this.Xd = this.Hj = 0;
			this.gd = [];
			this.Gh = 0;
			this.se = [];
			this.Oh = this.yg = this.yd = 0
		}
	}()
})(ggP2VR || (ggP2VR = {}));
(function(r) {
	r.Rm = function() {
		return function(n, m) {
			this.g = n;
			this.ua = m;
			var e = this.__div = document.createElement("div");
			var c = document.createElement("img");
			c.setAttribute("src",
				"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA5xJREFUeNqclmlIVFEUx997TjrplFQW2WKBBSYtRFlpWUILSSsRZRQIBdGHCFqIoKIvQRsUFRJC9LEgaSFbMMpcWi1pLzOLsjItKms0U5t5/c/wH7nc5o2jF374xrv87z33nHOPaRsRtbFgDpgJxoD+wATfwDNQDK6CyrCr5OcbhgiGIRsUAZt4QTWoIFXgp9JfAhY7rgdBl8NeBoLDYBloA+dBOagFTcDHcVEgDgwBGWA+OAcugvXgvb5wKMGJoAAMp9BpUA96EBf/Btsf8BI8AWfAErAcpHHDZeriliY2AVwDg8AucAQ0Ag+I4XhTm2Oxz8PT46KMbTx5EZjuJDgAnAVusJUm9DhYwalFcc59sIXXIaceFkowDySBPTRPL20xm+b7zYXa+N3CPrWJ6GuwGySA40HLBHc/GywFhbS5R1lEBrZy7FQwiSaX9pmnqeAYt+KUcew7BVZw/QKTq0ocpYPVvDOXItZCk2xgDIZqL8BR8Ab0VDbr4yZOgLeIwzQx6WiQxcCt1+6sld66L4yYtFSwF4yg2dU7/cEwGW9YVkAwmycp1dzdpvgm0DcCh4kHmxWzBls0uBX4qqmZJ4KzePm1IeJLgjmlC16aDKZpp5Q168B3o6wsSwTHgU+MIUs74RSj6y1d+212HKimJlUE+tFRfJpYtOKNXWmJTASqWf2Bu/R6+4TKHOrOzG4IhptjWgHbGkZvepQ6SQK7oRuCXzjX1DJavBEX1ygfT8FgBqpfm1zRDcEKbR2bsZlkJCdXieB1ZhZ5YtqVgXIPN+m9kbY6hpdb+d9fPncJRmZmqQheZkemJmgxyxykl3XWJEkcAl7N21s7PDcl5ZJ0PAa3wVwmWtVbZafPwQ7wLozYB7ATPNJO56d/LAikP9u+66KNJS1d4IOZp7wU0hfLukUyzgwm70T2N/DOxIy/eFdqawa5DL2NEGwP5k15Ja4woz9glvcomd9NzyvkFcQo5gomaLfm5c0svnKZ2k7q7+FauvR2MJKZR3+sY5WgtvkdG6JyELGhNHMTXyGfLviRJ5Tcd4Dlhle7086Sgp8CqVxDkn4OqHaqacr5ekjy3Q/W0FRNNGmoMtamdzdxsytZC0lqXKhEgWPVVgImg2NgFT1MHOoOk3yLEtgWN5TEOYvoIFI1rGM19//2wpAD7imF7lfwENwAxaASNCj90pcLLKdC2Iyw1M9gnEplMEp5kOU1f8WwKGJm8oUr9f8JMAAVMDM6HSDa9QAAAABJRU5ErkJggg%3D%3D"
			);
			c.setAttribute("style",
				"position: absolute;width: 28px; height: 28px;top: -14px;left: -14px; " + n.Ia +
				"user-select: none;");
			c.ondragstart = function() {
				return !1
			};
			e.appendChild(c);
			c = "position:absolute;" + (n.Ia + "user-select: none;");
			c += n.Ia + "touch-callout: none;";
			c += n.Ia + "tap-highlight-color: rgba(0,0,0,0);";
			n.Lc && !n.Z && (c += n.Ia + "transform: translateZ(9999999px);");
			e.setAttribute("style", c);
			e.onclick = function() {
				n.Af(m);
				n.Aj(m.url, m.target);
				n.ba && n.ba.hotspotProxyClick && n.ba.hotspotProxyClick(m.id, m.url)
			};
			e.ondblclick = function() {
				n.ba && n.ba.hotspotProxyDoubleClick && n.ba.hotspotProxyDoubleClick(m.id, m.url)
			};
			var a = n.A.Wj;
			if (a.enabled) {
				var b = document.createElement("div");
				c = "position:absolute;top:\t 20px;";
				c = a.Di ? c + "white-space: pre-wrap;" : c + "white-space: nowrap;";
				c += n.Ia + "transform-origin: 50% 50%;";
				b.setAttribute("style", c +
					"visibility: hidden;overflow: hidden;padding: 0px 1px 0px 1px;font-size: 13px;");
				b.style.color = this.g.ga(a.Xj, a.Vj);
				a.background ? b.style.backgroundColor = this.g.ga(a.ic, a.hc) : b.style.backgroundColor =
					"transparent";
				b.style.border = "solid " + this.g.ga(a.lc, a.kc) + " " + a.Li + "px";
				b.style.borderRadius = a.Ki + "px";
				b.style.textAlign = "center";
				0 < a.width ? (b.style.left = -a.width / 2 + "px", b.style.width = a.width + "px") : b.style
					.width = "auto";
				b.style.height = 0 < a.height ? a.height + "px" : "auto";
				b.style.overflow = "hidden";
				b.innerHTML = m.title;
				e.onmouseover = function() {
					0 == a.width && (b.style.left = -b.offsetWidth / 2 + "px");
					b.style.visibility = "inherit";
					n.ba && n.ba.hotspotProxyOver && n.ba.hotspotProxyOver(m.id, m.url)
				};
				e.onmouseout = function() {
					b.style.visibility =
						"hidden";
					n.ba && n.ba.hotspotProxyOut && n.ba.hotspotProxyOut(m.id, m.url)
				};
				e.appendChild(b)
			}
		}
	}()
})(ggP2VR || (ggP2VR = {}));
(function(r) {
	r.Gc = function() {
		return function() {
			this.value = this.time = 0;
			this.ck = "";
			this.ie = this.he = this.Wc = this.ge = this.mb = this.type = this.xb = 0;
			this.nh = ""
		}
	}();
	r.gk = function() {
		return function() {
			this.lq = this.en = this.length = 0
		}
	}();
	r.fk = function() {
		return function() {}
	}()
})(ggP2VR || (ggP2VR = {}));
(function(r) {
	var n = function() {
		function m(e) {
			this.g = e;
			this.enabled = !1;
			this.Tf = 1;
			this.Ue = 0;
			this.type = "crossdissolve";
			this.fc = this.Oa = this.Dc = 0;
			this.Of = 5;
			this.de = 1;
			this.Pf = !1;
			this.Je = this.Ie = this.Sj = 0;
			this.Hd = 70;
			this.Qm = 0;
			this.yb = this.Pm = 1;
			this.lh = this.kh = .5;
			this.fe = this.Ci = this.Vh = this.Nh = !1;
			this.Xi = 1
		}
		m.prototype.rg = function() {
			var e = this.g.H,
				c = e.createShader(e.VERTEX_SHADER);
			e.shaderSource(c,
				"attribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nvarying vec2 vTextureCoord;\nuniform bool uZoomIn;\nuniform float uZoomFactor;\nuniform vec2 uZoomCenter;\nvoid main(void) {\n\t gl_Position = vec4(aVertexPosition, 1.0);\n\t if(!uZoomIn) {\n\t \n\t   vTextureCoord = aTextureCoord;\n\t }\n\t else {\n\t   vTextureCoord = (aTextureCoord - vec2(0.5, 0.5)) * (1.0/uZoomFactor) + uZoomCenter;\n\t }\n}\n"
			);
			e.compileShader(c);
			e.getShaderParameter(c, e.COMPILE_STATUS) || (alert(e.getShaderInfoLog(c)), c = null);
			var a = e.createShader(e.FRAGMENT_SHADER);
			e.shaderSource(a,
				"#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif\nvarying vec2 vTextureCoord;\nuniform float uAlpha;\nuniform sampler2D uSampler;\nvoid main(void) {\n vec4 textureColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));\n gl_FragColor = vec4(textureColor.x, textureColor.y, textureColor.z, uAlpha);\n}\n"
			);
			e.compileShader(a);
			e.getShaderParameter(a, e.COMPILE_STATUS) || (alert(e.getShaderInfoLog(a)), a = null);
			this.pa = e.createProgram();
			e.attachShader(this.pa, c);
			e.attachShader(this.pa, a);
			e.linkProgram(this.pa);
			e.getProgramParameter(this.pa, e.LINK_STATUS) || alert("Could not initialise shaders");
			this.pa.$ = e.getAttribLocation(this.pa, "aVertexPosition");
			e.enableVertexAttribArray(this.pa.$);
			this.pa.Ca = e.getAttribLocation(this.pa, "aTextureCoord");
			e.enableVertexAttribArray(this.pa.Ca);
			a = e.createShader(e.FRAGMENT_SHADER);
			e.shaderSource(a,
				"#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif\nvarying vec2 vTextureCoord;\nuniform float uColorPercent;\nuniform float uAlpha;\nuniform vec3 uDipColor;\nuniform sampler2D uSampler;\nvoid main(void) {\n vec4 textureColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));\n gl_FragColor = vec4(textureColor.x * (1.0 - uColorPercent) + uDipColor.x * uColorPercent, textureColor.y * (1.0 - uColorPercent) + uDipColor.y * uColorPercent, textureColor.z * (1.0 - uColorPercent) + uDipColor.z * uColorPercent, uAlpha);\n}\n"
			);
			e.compileShader(a);
			e.getShaderParameter(a, e.COMPILE_STATUS) || (alert(e.getShaderInfoLog(a)), a = null);
			this.Ua = e.createProgram();
			e.attachShader(this.Ua, c);
			e.attachShader(this.Ua, a);
			e.linkProgram(this.Ua);
			e.getProgramParameter(this.Ua, e.LINK_STATUS) || alert("Could not initialise shaders");
			this.Ua.$ = e.getAttribLocation(this.Ua, "aVertexPosition");
			e.enableVertexAttribArray(this.Ua.$);
			this.Ua.Ca = e.getAttribLocation(this.Ua, "aTextureCoord");
			e.enableVertexAttribArray(this.Ua.Ca);
			a = e.createShader(e.FRAGMENT_SHADER);
			e.shaderSource(a,
				"#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif\nvarying vec2 vTextureCoord;\nuniform bool uRound;\nuniform float uRadius;\nuniform vec2 uRectDim;\nuniform vec2 uIrisCenter;\nuniform float uSoftEdge;\nuniform sampler2D uSampler;\nvoid main(void) {\n float alpha = 0.0;\n vec4 textureColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));\n if (uRound) {\n\t  vec2 diff = uIrisCenter - gl_FragCoord.xy;\n\t   float distFromCenter = sqrt( (diff.x * diff.x) + (diff.y * diff.y) );\n\t   if (distFromCenter > uRadius) {\n      alpha = 1.0;\n    } else {\n      alpha = 1.0 - ((uRadius - distFromCenter) / uSoftEdge);\n    };\n }\n else {\n    float alphaFromLeft = 1.0 - ((gl_FragCoord.x -(uIrisCenter.x - uRectDim.x)) / uSoftEdge);\n    float alphaFromRight = 1.0 - (((uIrisCenter.x + uRectDim.x) - gl_FragCoord.x) / uSoftEdge);\n    float alphaFromTop = 1.0 - ((gl_FragCoord.y -(uIrisCenter.y - uRectDim.y)) / uSoftEdge);\n    float alphaFromBottom = 1.0 - (((uIrisCenter.y + uRectDim.y) - gl_FragCoord.y) / uSoftEdge);\n    alpha = max(max(alphaFromLeft, alphaFromRight), max(alphaFromTop, alphaFromBottom));\n }\n gl_FragColor = vec4(textureColor.x, textureColor.y, textureColor.z, alpha);\n}\n"
			);
			e.compileShader(a);
			e.getShaderParameter(a, e.COMPILE_STATUS) || (alert(e.getShaderInfoLog(a)), a = null);
			this.Ha = e.createProgram();
			e.attachShader(this.Ha, c);
			e.attachShader(this.Ha, a);
			e.linkProgram(this.Ha);
			e.getProgramParameter(this.Ha, e.LINK_STATUS) || alert("Could not initialise shaders");
			this.Ha.$ = e.getAttribLocation(this.Ha, "aVertexPosition");
			e.enableVertexAttribArray(this.Ha.$);
			this.Ha.Ca = e.getAttribLocation(this.Ha, "aTextureCoord");
			e.enableVertexAttribArray(this.Ha.Ca);
			a = e.createShader(e.FRAGMENT_SHADER);
			e.shaderSource(a,
				"#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif\nvarying vec2 vTextureCoord;\nuniform float uPercent;\nuniform int uDirection;\nuniform vec2 uCanvasDimensions;\nuniform float uSoftEdge;\nuniform sampler2D uSampler;\nvoid main(void) {\n vec4 textureColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));\n float alpha = 0.0;\n if (uDirection == 1) {\n\t if (gl_FragCoord.x > uPercent) {\n    alpha = 1.0; \n  } else {\n    alpha = 1.0 - ((uPercent - gl_FragCoord.x) / uSoftEdge);\n  }\n }\n if (uDirection == 2) {\n\t if (gl_FragCoord.x < uCanvasDimensions.x - uPercent) {\n    alpha = 1.0; \n  } else {\n    alpha = 1.0 - ((gl_FragCoord.x - (uCanvasDimensions.x - uPercent)) / uSoftEdge);\n  }\n }\n if (uDirection == 3) {\n\t if (gl_FragCoord.y < uCanvasDimensions.y - uPercent) {\n    alpha = 1.0; \n  } else {\n    alpha = 1.0 - ((gl_FragCoord.y - (uCanvasDimensions.y - uPercent)) / uSoftEdge);\n  }\n }\n if (uDirection == 4) {\n\t if (gl_FragCoord.y > uPercent) {\n    alpha = 1.0; \n  } else {\n    alpha = 1.0 - ((uPercent - gl_FragCoord.y) / uSoftEdge);\n  }\n }\n gl_FragColor = vec4(textureColor.x, textureColor.y, textureColor.z, alpha);\n}\n"
			);
			e.compileShader(a);
			e.getShaderParameter(a, e.COMPILE_STATUS) || (alert(e.getShaderInfoLog(a)), a = null);
			this.Na = e.createProgram();
			e.attachShader(this.Na, c);
			e.attachShader(this.Na, a);
			e.linkProgram(this.Na);
			e.getProgramParameter(this.Na, e.LINK_STATUS) || alert("Could not initialise shaders");
			this.Na.$ = e.getAttribLocation(this.Na, "aVertexPosition");
			e.enableVertexAttribArray(this.Na.$);
			this.Na.Ca = e.getAttribLocation(this.Na, "aTextureCoord");
			e.enableVertexAttribArray(this.Na.Ca)
		};
		m.prototype.Kc = function() {
			var e =
				this.g.H;
			if (!e) return !1;
			if (this.ec = e.createFramebuffer()) {
				e.bindFramebuffer(e.FRAMEBUFFER, this.ec);
				this.ec.width = 1024;
				this.ec.height = 1024;
				this.Me = e.createTexture();
				e.bindTexture(e.TEXTURE_2D, this.Me);
				e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR);
				e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR);
				e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, this.ec.width, this.ec.height, 0, e.RGBA, e
					.UNSIGNED_BYTE, null);
				var c = e.createRenderbuffer();
				e.bindRenderbuffer(e.RENDERBUFFER, c);
				e.renderbufferStorage(e.RENDERBUFFER,
					e.DEPTH_COMPONENT16, this.ec.width, this.ec.height);
				e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, this.Me, 0);
				e.framebufferRenderbuffer(e.FRAMEBUFFER, e.DEPTH_ATTACHMENT, e.RENDERBUFFER, c);
				e.bindTexture(e.TEXTURE_2D, null);
				e.bindRenderbuffer(e.RENDERBUFFER, null);
				e.bindFramebuffer(e.FRAMEBUFFER, null);
				this.lb = e.createBuffer();
				e.bindBuffer(e.ARRAY_BUFFER, this.lb);
				e.bufferData(e.ARRAY_BUFFER, new Float32Array([-1, -1, 0, 1, -1, 0, -1, 1, 0, 1, 1, 0]), e
					.STATIC_DRAW);
				this.lb.Mc = 3;
				this.lb.Ud = 4;
				this.wf =
					e.createBuffer();
				e.bindBuffer(e.ARRAY_BUFFER, this.wf);
				e.bufferData(e.ARRAY_BUFFER, new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]), e.STATIC_DRAW);
				return !0
			}
			return !1
		};
		m.prototype.Ql = function(e) {
			var c = this.g.H,
				a = this.g.sb;
			if (this.rd) {
				c.useProgram(this.pa);
				c.bindBuffer(c.ARRAY_BUFFER, this.lb);
				c.vertexAttribPointer(this.pa.$, this.lb.Mc, c.FLOAT, !1, 0, 0);
				c.bindBuffer(c.ARRAY_BUFFER, this.wf);
				c.vertexAttribPointer(this.pa.Ca, 2, c.FLOAT, !1, 0, 0);
				c.enableVertexAttribArray(this.pa.$);
				c.enableVertexAttribArray(this.pa.Ca);
				c.activeTexture(c.TEXTURE0);
				c.bindTexture(c.TEXTURE_2D, this.Me);
				a = 1 + (this.yb - 1) * e;
				var b = c.getUniformLocation(this.pa, "uAlpha");
				c.uniform1f(b, 1);
				b = c.getUniformLocation(this.pa, "uZoomIn");
				c.uniform1i(b, 1);
				b = c.getUniformLocation(this.pa, "uZoomCenter");
				var d = .5 + (this.kh - .5) * Math.sqrt(e),
					f = .5 + (this.lh - .5) * Math.sqrt(e);
				0 > d - .5 / a && (d = .5 / a);
				0 > f - .5 / a && (f = .5 / a);
				1 < d + .5 / a && (d = 1 - .5 / a);
				1 < f + .5 / a && (f = 1 - .5 / a);
				c.uniform2f(b, d, f);
				d = c.getUniformLocation(this.pa, "uZoomFactor");
				c.uniform1f(d, a);
				c.uniform1i(c.getUniformLocation(this.pa, "uSampler"),
					0);
				c.drawArrays(c.TRIANGLE_STRIP, 0, this.lb.Ud);
				c.useProgram(this.g.oa.F)
			} else {
				this.g.$g();
				c.blendFuncSeparate(c.SRC_ALPHA, c.ONE_MINUS_SRC_ALPHA, c.SRC_ALPHA, c.ONE);
				c.enable(c.BLEND);
				c.disable(c.DEPTH_TEST);
				d = .5 + (this.kh - .5);
				f = .5 + (this.lh - .5);
				0 > d - .5 / this.yb && (d = .5 / this.yb);
				0 > f - .5 / this.yb && (f = .5 / this.yb);
				1 < d + .5 / this.yb && (d = 1 - .5 / this.yb);
				1 < f + .5 / this.yb && (f = 1 - .5 / this.yb);
				if ("crossdissolve" == this.type) c.useProgram(this.pa), c.bindBuffer(c.ARRAY_BUFFER, this
						.lb), c.vertexAttribPointer(this.pa.$, this.lb.Mc,
						c.FLOAT, !1, 0, 0), c.bindBuffer(c.ARRAY_BUFFER, this.wf), c.vertexAttribPointer(
						this.pa.Ca, 2, c.FLOAT, !1, 0, 0), c.activeTexture(c.TEXTURE0), c.bindTexture(c
						.TEXTURE_2D, this.Me), b = c.getUniformLocation(this.pa, "uAlpha"), c.uniform1f(b,
						1 - e), b = c.getUniformLocation(this.pa, "uZoomIn"), c.uniform1i(b, 1 == this.Oa ||
						2 == this.Oa ? 1 : 0), b = c.getUniformLocation(this.pa, "uZoomCenter"), c
					.uniform2f(b, d, f), d = c.getUniformLocation(this.pa, "uZoomFactor"), c.uniform1f(d,
						this.yb), c.uniform1i(c.getUniformLocation(this.pa, "uSampler"), 0);
				else if ("diptocolor" == this.type) c.useProgram(this.Ua), c.bindBuffer(c.ARRAY_BUFFER, this
						.lb), c.vertexAttribPointer(this.Ua.$, this.lb.Mc, c.FLOAT, !1, 0, 0), c.bindBuffer(
						c.ARRAY_BUFFER, this.wf), c.vertexAttribPointer(this.Ua.Ca, 2, c.FLOAT, !1, 0, 0), c
					.activeTexture(c.TEXTURE0), c.bindTexture(c.TEXTURE_2D, this.Me), c.uniform1f(c
						.getUniformLocation(this.Ua, "uColorPercent"), Math.min(2 * e, 1)), b = c
					.getUniformLocation(this.Ua, "uAlpha"), c.uniform1f(b, 1 - Math.max(2 * (e - .5), 0)), c
					.uniform3f(c.getUniformLocation(this.Ua, "uDipColor"),
						(this.Ue >> 16 & 255) / 255, (this.Ue >> 8 & 255) / 255, (this.Ue & 255) / 255), b =
					c.getUniformLocation(this.Ua, "uZoomIn"), c.uniform1i(b, 1 == this.Oa || 2 == this.Oa ?
						1 : 0), b = c.getUniformLocation(this.Ua, "uZoomCenter"), c.uniform2f(b, d, f), d =
					c.getUniformLocation(this.Ua, "uZoomFactor"), c.uniform1f(d, this.yb), c.uniform1i(c
						.getUniformLocation(this.Ua, "uSampler"), 0);
				else if ("irisround" == this.type || "irisroundcenter" == this.type || "irisrectangular" ==
					this.type || "irisrectangularcenter" == this.type) {
					c.useProgram(this.Ha);
					c.bindBuffer(c.ARRAY_BUFFER,
						this.lb);
					c.vertexAttribPointer(this.Ha.$, this.lb.Mc, c.FLOAT, !1, 0, 0);
					c.bindBuffer(c.ARRAY_BUFFER, this.wf);
					c.vertexAttribPointer(this.Ha.Ca, 2, c.FLOAT, !1, 0, 0);
					c.activeTexture(c.TEXTURE0);
					c.bindTexture(c.TEXTURE_2D, this.Me);
					if (1 == this.Oa || 2 == this.Oa || "irisroundcenter" == this.type ||
						"irisrectangularcenter" == this.type) var g = b = .5;
					else b = this.kh, g = this.lh;
					var h = b * a.width,
						l = g * a.height;
					h = Math.max(h, a.width - h);
					l = Math.max(l, a.height - l);
					"irisround" == this.type || "irisroundcenter" == this.type ? c.uniform1f(c
						.getUniformLocation(this.Ha,
							"uRadius"), (Math.sqrt(h * h + l * l) + this.Dc) * e) : (h > l ? (l = a
						.height / a.width * h + this.Dc, h += this.Dc) : (h = a.width / a.height *
						l + this.Dc, l += this.Dc), c.uniform2f(c.getUniformLocation(this.Ha,
						"uRectDim"), h * e, l * e));
					e = c.getUniformLocation(this.Ha, "uSoftEdge");
					c.uniform1f(e, this.Dc);
					c.uniform1i(c.getUniformLocation(this.Ha, "uRound"), "irisround" == this.type ||
						"irisroundcenter" == this.type ? 1 : 0);
					c.uniform2f(c.getUniformLocation(this.Ha, "uIrisCenter"), b * a.width, g * a.height);
					b = c.getUniformLocation(this.Ha, "uZoomIn");
					c.uniform1i(b,
						1 == this.Oa || 2 == this.Oa ? 1 : 0);
					b = c.getUniformLocation(this.Ha, "uZoomCenter");
					c.uniform2f(b, d, f);
					d = c.getUniformLocation(this.Ha, "uZoomFactor");
					c.uniform1f(d, this.yb);
					c.uniform1i(c.getUniformLocation(this.Ha, "uSampler"), 0)
				} else if ("wipeleftright" == this.type || "wiperightleft" == this.type ||
					"wipetopbottom" == this.type || "wipebottomtop" == this.type || "wiperandom" == this
					.type) c.useProgram(this.Na), c.bindBuffer(c.ARRAY_BUFFER, this.lb), c
					.vertexAttribPointer(this.Na.$, this.lb.Mc, c.FLOAT, !1, 0, 0), c.bindBuffer(c
						.ARRAY_BUFFER,
						this.wf), c.vertexAttribPointer(this.Na.Ca, 2, c.FLOAT, !1, 0, 0), c.activeTexture(c
						.TEXTURE0), c.bindTexture(c.TEXTURE_2D, this.Me), c.uniform1f(c.getUniformLocation(
						this.Na, "uPercent"), 3 > this.Xi ? e * (a.width + this.Dc) : e * (a.height +
						this.Dc)), e = c.getUniformLocation(this.Na, "uSoftEdge"), c.uniform1f(e, this.Dc),
					c.uniform1i(c.getUniformLocation(this.Na, "uDirection"), this.Xi), c.uniform2f(c
						.getUniformLocation(this.Na, "uCanvasDimensions"), a.width, a.height), b = c
					.getUniformLocation(this.Na, "uZoomIn"), c.uniform1i(b, 1 == this.Oa ||
						2 == this.Oa ? 1 : 0), b = c.getUniformLocation(this.Na, "uZoomCenter"), c
					.uniform2f(b, d, f), d = c.getUniformLocation(this.Na, "uZoomFactor"), c.uniform1f(d,
						this.yb), c.uniform1i(c.getUniformLocation(this.Na, "uSampler"), 0);
				c.drawArrays(c.TRIANGLE_STRIP, 0, this.lb.Ud);
				c.useProgram(this.g.oa.F);
				c.disable(c.BLEND);
				c.enable(c.DEPTH_TEST)
			}
		};
		return m
	}();
	r.Tm = n
})(ggP2VR || (ggP2VR = {}));
(function(r) {
	var n = function() {
		function m(e) {
			this.Yg = [];
			this.g = e;
			this.enabled = !1;
			this.xb = 2;
			this.Bk = !1
		}
		m.prototype.Jk = function(e) {
			if (2 == e.mode || 3 == e.mode || 5 == e.mode) {
				var c = this.g.qa.currentTime;
				if (e.Ib && e.Ib.gain && e.Lb && e.Jb && e.Kb) {
					var a = e.Lb.gain.value,
						b = e.Jb.gain.value,
						d = e.Kb.gain.value;
					e.Ib.gain.linearRampToValueAtTime(e.Ib.gain.value, c);
					e.Ib.gain.linearRampToValueAtTime(0, c + this.xb);
					e.Lb.gain.linearRampToValueAtTime(a, c);
					e.Lb.gain.linearRampToValueAtTime(0, c + this.xb);
					e.Jb.gain.linearRampToValueAtTime(b,
						c);
					e.Jb.gain.linearRampToValueAtTime(0, c + this.xb);
					e.Kb.gain.linearRampToValueAtTime(d, c);
					e.Kb.gain.linearRampToValueAtTime(0, c + this.xb)
				}
			} else c = this.g.qa.currentTime, e.xc && e.xc.gain && (e.xc.gain.linearRampToValueAtTime(e.xc
				.gain.value, c), e.xc.gain.linearRampToValueAtTime(0, c + this.xb));
			e.bj = !0;
			setTimeout(function() {
				e.Be()
			}, 1E3 * this.xb + 5)
		};
		m.prototype.$p = function() {
			for (var e = 0; e < this.g.N.length; e++) {
				var c = this.g.N[e]; - 1 == this.g.Qc.indexOf(c.id) && (-1 == this.g.Qc.indexOf("_main") ||
						-1 != this.g.ce.indexOf(c.id)) &&
					!this.g.Yb(c.id) && -1 < c.loop && 4 != c.mode && 6 != c.mode && (c.la ? c.Md() : (c.b
						.play(), c.b.currentTime = 0))
			}
		};
		m.prototype.Gn = function() {
			var e = (this.g.qa.currentTime - this.Wp) / this.xb;
			e = Math.min(1, e);
			for (var c = 0; c < this.g.N.length; c++) {
				var a = this.g.N[c];
				this.g.Yb(a.id) && 1 > a.ka && (a.ka = e)
			}
			1 == e && clearInterval(this.Vp)
		};
		return m
	}();
	r.Um = n
})(ggP2VR || (ggP2VR = {}));
(function(r) {
	var n = function() {
		function m(e) {
			this.Cg = [];
			this.Yc = null;
			this.cc = [];
			this.Xb = [];
			this.dc = [];
			this.Oj = !0;
			this.g = e;
			this.yn()
		}
		m.prototype.rg = function() {
			var e = this.g.H,
				c = e.createShader(e.VERTEX_SHADER);
			e.shaderSource(c,
				"attribute vec3 aVertexPosition;\nvoid main(void) {\n gl_Position = vec4(aVertexPosition, 1.0);\n}\n"
			);
			e.compileShader(c);
			e.getShaderParameter(c, e.COMPILE_STATUS) || (alert(e.getShaderInfoLog(c)), c = null);
			var a = e.createShader(e.FRAGMENT_SHADER);
			e.shaderSource(a,
				"#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif\nvarying vec4 vColor;\nuniform vec2 uCanvasDimensions;\nuniform vec2 uFlareCenterPosition;\nuniform float uBlindingValue;\nuniform float uAspectRatio;\nvoid main(void) {\n float canvasDiag = sqrt( (uCanvasDimensions.x * uCanvasDimensions.x) + (uCanvasDimensions.y * uCanvasDimensions.y) );\n vec2 diff = uFlareCenterPosition - gl_FragCoord.xy;\n diff.y = diff.y * uAspectRatio;\n float distFromFlarePoint = sqrt( (diff.x * diff.x) + (diff.y * diff.y) );\n float factor = (distFromFlarePoint / canvasDiag) / 10.0;\n gl_FragColor = vec4(1.0, 1.0, 1.0, pow(((1.0 - factor) * 0.8) * uBlindingValue, 2.0));\n}\n"
			);
			e.compileShader(a);
			e.getShaderParameter(a, e.COMPILE_STATUS) || (alert(e.getShaderInfoLog(a)), a = null);
			this.jc = e.createProgram();
			e.attachShader(this.jc, c);
			e.attachShader(this.jc, a);
			e.linkProgram(this.jc);
			e.getProgramParameter(this.jc, e.LINK_STATUS) || alert("Could not initialise shaders");
			this.jc.$ = e.getAttribLocation(this.jc, "aVertexPosition");
			e.enableVertexAttribArray(this.jc.$);
			a = e.createShader(e.VERTEX_SHADER);
			c = e.createShader(e.VERTEX_SHADER);
			e.shaderSource(a,
				"#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif\nattribute vec3 aVertexPosition;\nvarying vec4 vColor;\nuniform vec2 uCirclePosition;\nuniform float uCircleRadius;\nuniform vec2 uCanvasDimensions2;\nuniform float uAspectRatio;\nvoid main(void) {\n vec2 circleOnScreen = aVertexPosition.xy * uCircleRadius + uCirclePosition;\n circleOnScreen.y = circleOnScreen.y / uAspectRatio;\n vec2 circleNorm = (circleOnScreen / uCanvasDimensions2) * 2.0 - vec2(1.0, 1.0);\n gl_Position = vec4(circleNorm.x, circleNorm.y, 0.0, 1.0);\n}\n"
			);
			e.compileShader(a);
			e.getShaderParameter(a, e.COMPILE_STATUS) || (alert(e.getShaderInfoLog(a)), a = null);
			e.shaderSource(c,
				"#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif\nattribute vec3 aVertexPosition;\nvarying vec4 vColor;\nuniform vec2 uCirclePosition;\nuniform float uCircleRadius;\nuniform vec2 uCanvasDimensions2;\nuniform float uAspectRatio;\nvoid main(void) {\n vec2 circleOnScreen = aVertexPosition.xy * uCircleRadius + uCirclePosition;\n circleOnScreen.y = circleOnScreen.y / uAspectRatio;\n vec2 circleNorm = (circleOnScreen / uCanvasDimensions2) * 2.0 - vec2(1.0, 1.0);\n gl_Position = vec4(circleNorm.x, circleNorm.y, 0.0, 1.0);\n}\n"
			);
			e.compileShader(c);
			e.getShaderParameter(c, e.COMPILE_STATUS) || (alert(e.getShaderInfoLog(c)), a = null);
			var b = e.createShader(e.FRAGMENT_SHADER);
			e.shaderSource(b,
				"#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif\nvarying vec4 vColor;\nuniform vec2 uCircleTexturePosition;\nuniform vec3 uCircleColor;\nuniform float uCircleRadius;\nuniform float uCircleAlpha;\nuniform float uCircleSoftness;\nuniform float uAspectRatio;\nvoid main(void) {\n vec2 diff = uCircleTexturePosition - gl_FragCoord.xy;\n diff.y = diff.y * uAspectRatio;\n float distFromCircleCenter = sqrt( (diff.x * diff.x) + (diff.y * diff.y) );\n float softnessDistance = uCircleRadius * (1.0 - uCircleSoftness);\n if (distFromCircleCenter > uCircleRadius)\n {\n\t  gl_FragColor = vec4(uCircleColor, 0.0);\n }\n else if (distFromCircleCenter <= (softnessDistance))\n {\n\t  float factor = distFromCircleCenter / softnessDistance;\n\t  gl_FragColor = vec4(uCircleColor, pow((1.0 - (0.2 * factor)) * uCircleAlpha, 1.8));\n }\n else\n {\n\t  float factor = (distFromCircleCenter - softnessDistance) / (uCircleRadius - softnessDistance);\n\t  gl_FragColor = vec4(uCircleColor, pow((0.8 - (0.8 * factor)) * uCircleAlpha, 1.8));\n }\n}\n"
			);
			e.compileShader(b);
			e.getShaderParameter(b, e.COMPILE_STATUS) || (alert(e.getShaderInfoLog(b)), b = null);
			this.sa = e.createProgram();
			e.attachShader(this.sa, a);
			e.attachShader(this.sa, b);
			e.linkProgram(this.sa);
			e.getProgramParameter(this.sa, e.LINK_STATUS) || alert("Could not initialise shaders");
			this.sa.$ = e.getAttribLocation(this.sa, "aVertexPosition");
			e.enableVertexAttribArray(this.sa.$);
			a = e.createShader(e.FRAGMENT_SHADER);
			e.shaderSource(a,
				"#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif\nvarying vec4 vColor;\nuniform vec2 uRingTexturePosition;\nuniform float uRingRadius;\nuniform float uRingAlpha;\nuniform float uAspectRatio;\nuniform sampler2D uSampler;\nvoid main(void) {\n vec2 diff = uRingTexturePosition - gl_FragCoord.xy;\n diff.y = diff.y * uAspectRatio;\n float distFromRingCenter = sqrt( (diff.x * diff.x) + (diff.y * diff.y) );\n float factor = distFromRingCenter / uRingRadius;\n if (distFromRingCenter > uRingRadius)\n {\n\t gl_FragColor = vec4(1.0, 1.0, 1.0, 0.0);\n }\n else\n {\n vec4 textureColor = texture2D(uSampler, vec2(factor / uAspectRatio, 0.5));\n gl_FragColor = vec4(textureColor.x, textureColor.y, textureColor.z, uRingAlpha);\n }\n}\n"
			);
			e.compileShader(a);
			e.getShaderParameter(a, e.COMPILE_STATUS) || (alert(e.getShaderInfoLog(a)), a = null);
			this.wb = e.createProgram();
			e.attachShader(this.wb, c);
			e.attachShader(this.wb, a);
			e.linkProgram(this.wb);
			e.getProgramParameter(this.wb, e.LINK_STATUS) || alert("Could not initialise shaders");
			this.wb.$ = e.getAttribLocation(this.wb, "aVertexPosition")
		};
		m.prototype.Kc = function() {
			var e = this.g.H;
			this.wd = e.createBuffer();
			e.bindBuffer(e.ARRAY_BUFFER, this.wd);
			e.bufferData(e.ARRAY_BUFFER, new Float32Array([-1, -1, 0, 1,
				-1, 0, 1, 1, 0, -1, 1, 0
			]), e.STATIC_DRAW);
			this.wd.Mc = 3;
			this.wd.Ud = 4;
			this.cf = e.createBuffer();
			e.bindBuffer(e.ARRAY_BUFFER, this.cf);
			for (var c = [0, 0, 0], a = 2 * Math.PI / 6, b = Math.PI / 180 * 35, d = 1, f = b; f <= b + 2 *
				Math.PI; f += a) c.push(Math.sin(f)), c.push(-Math.cos(f)), c.push(0), d++;
			e.bufferData(e.ARRAY_BUFFER, new Float32Array(c), e.STATIC_DRAW);
			this.cf.Mc = 3;
			this.cf.Ud = d;
			this.dm = e.createTexture();
			e.bindTexture(e.TEXTURE_2D, this.dm);
			e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR);
			e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER,
				e.LINEAR);
			e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE);
			e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE);
			c = document.createElement("canvas");
			c.width = 100;
			c.height = 1;
			a = c.getContext("2d");
			a.width = 100;
			a.height = 1;
			b = a.createLinearGradient(0, 0, 100, 0);
			b.addColorStop(0, this.g.ga(16777215, 0));
			b.addColorStop(.88, this.g.ga(0, 0));
			b.addColorStop(.9, this.g.ga(16654848, 1));
			b.addColorStop(.92, this.g.ga(16776448, 1));
			b.addColorStop(.94, this.g.ga(4849466, 1));
			b.addColorStop(.96, this.g.ga(131071,
				1));
			b.addColorStop(.98, this.g.ga(8190, 1));
			b.addColorStop(1, this.g.ga(0, 0));
			a.fillStyle = b;
			a.fillRect(0, 0, 100, 1);
			e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, c)
		};
		m.prototype.op = function() {
			for (; 0 < this.Cg.length;) this.Cg.pop()
		};
		m.prototype.yn = function() {
			var e = [],
				c = [],
				a = [];
			var b = {
				m: 14,
				alpha: .2,
				color: 11390415,
				j: .27
			};
			e.push(b);
			b = {
				m: 20,
				alpha: .25,
				color: 11390415,
				j: .4
			};
			e.push(b);
			b = {
				m: 10,
				alpha: .2,
				color: 12442332,
				j: .6
			};
			e.push(b);
			b = {
				m: 15,
				alpha: .2,
				color: 11390415,
				j: .8
			};
			e.push(b);
			b = {
				m: 10,
				alpha: .2,
				color: 12442332,
				j: 1.5
			};
			e.push(b);
			b = {
				m: 15,
				alpha: .2,
				color: 11390415,
				j: 1.8
			};
			e.push(b);
			b = {
				m: 8,
				alpha: .2,
				color: 12575203,
				v: .8,
				j: .7
			};
			c.push(b);
			b = {
				m: 7,
				alpha: .4,
				color: 12575203,
				v: .5,
				j: 1.6
			};
			c.push(b);
			b = {
				m: 5,
				alpha: .4,
				color: 12575203,
				v: .6,
				j: .9
			};
			c.push(b);
			b = {
				m: 8,
				alpha: .3,
				color: 12575203,
				v: .4,
				j: 1.1
			};
			c.push(b);
			this.cc.push(e);
			this.Xb.push(c);
			this.dc.push(a);
			e = [];
			c = [];
			a = [];
			b = {
				m: 30,
				alpha: .3,
				color: 11390415,
				j: .5
			};
			e.push(b);
			b = {
				m: 10,
				alpha: .3,
				color: 11390415,
				j: 1
			};
			e.push(b);
			b = {
				m: 20,
				alpha: .3,
				color: 11390415,
				j: 1.3
			};
			e.push(b);
			b = {
				m: 10,
				alpha: .3,
				color: 11390415,
				j: 1.5
			};
			e.push(b);
			b = {
				m: 15,
				alpha: .3,
				color: 11390415,
				j: 1.8
			};
			e.push(b);
			b = {
				m: 10,
				alpha: .3,
				color: 15506856,
				v: .8,
				j: .7
			};
			c.push(b);
			b = {
				m: 20,
				alpha: .5,
				color: 15506856,
				v: .5,
				j: 1.6
			};
			c.push(b);
			b = {
				m: 5,
				alpha: .5,
				color: 15506856,
				v: .6,
				j: .9
			};
			c.push(b);
			b = {
				m: 60,
				alpha: .4,
				color: 15506856,
				v: .2,
				j: 1.1
			};
			c.push(b);
			a.push({
				m: 220,
				alpha: .035,
				j: 2
			});
			this.cc.push(e);
			this.Xb.push(c);
			this.dc.push(a);
			e = [];
			c = [];
			a = [];
			b = {
				m: 30,
				alpha: .5,
				color: 15465727,
				j: .5
			};
			e.push(b);
			b = {
				m: 40,
				alpha: .28,
				color: 15726842,
				j: .8
			};
			e.push(b);
			b = {
				m: 25,
				alpha: .32,
				color: 15726842,
				j: 1.1
			};
			e.push(b);
			b = {
				m: 15,
				alpha: .25,
				color: 15726842,
				j: 1.35
			};
			e.push(b);
			b = {
				m: 10,
				alpha: .28,
				color: 15465727,
				j: 1.65
			};
			e.push(b);
			b = {
				m: 10,
				alpha: .45,
				color: 15465727,
				v: .8,
				j: .7
			};
			c.push(b);
			b = {
				m: 7,
				alpha: .5,
				color: 15465727,
				v: .4,
				j: .9
			};
			c.push(b);
			b = {
				m: 40,
				alpha: .4,
				color: 15465727,
				v: .3,
				j: .38
			};
			c.push(b);
			b = {
				m: 50,
				alpha: .4,
				color: 15465727,
				v: .5,
				j: 1.25
			};
			c.push(b);
			b = {
				m: 18,
				alpha: .2,
				color: 15465727,
				v: .5,
				j: 1.25
			};
			c.push(b);
			b = {
				m: 10,
				alpha: .34,
				color: 15726842,
				v: .8,
				j: 1.5
			};
			c.push(b);
			b = {
				m: 38,
				alpha: .37,
				color: 15465727,
				v: .3,
				j: -.5
			};
			c.push(b);
			this.cc.push(e);
			this.Xb.push(c);
			this.dc.push(a);
			e = [];
			c = [];
			a = [];
			b = {
				m: 16,
				alpha: .5,
				color: 16363159,
				j: .1
			};
			e.push(b);
			b = {
				m: 26,
				alpha: .3,
				color: 16091819,
				j: .32
			};
			e.push(b);
			b = {
				m: 29,
				alpha: .2,
				color: 16091819,
				j: 1.32
			};
			e.push(b);
			b = {
				m: 20,
				alpha: .18,
				color: 16363159,
				j: 1.53
			};
			e.push(b);
			b = {
				m: 27,
				alpha: .13,
				color: 16425092,
				j: 1.6
			};
			e.push(b);
			b = {
				m: 20,
				alpha: .1,
				color: 16091819,
				j: 1.75
			};
			e.push(b);
			b = {
				m: 12,
				alpha: .45,
				color: 16312238,
				v: .45,
				j: .2
			};
			c.push(b);
			b = {
				m: 8,
				alpha: .25,
				color: 16434209,
				v: .7,
				j: .33
			};
			c.push(b);
			b = {
				m: 9,
				alpha: .25,
				color: 16091819,
				v: .4,
				j: .7
			};
			c.push(b);
			b = {
				m: 7,
				alpha: .2,
				color: 16091819,
				v: .4,
				j: .85
			};
			c.push(b);
			b = {
				m: 60,
				alpha: .23,
				color: 16091819,
				v: .55,
				j: 1.05
			};
			c.push(b);
			b = {
				m: 37,
				alpha: .1,
				color: 16091819,
				v: .55,
				j: 1.22
			};
			c.push(b);
			b = {
				m: 10,
				alpha: .25,
				color: 16363159,
				v: .65,
				j: 1.38
			};
			c.push(b);
			b = {
				m: 7,
				alpha: .2,
				color: 16434209,
				v: .5,
				j: 1.45
			};
			c.push(b);
			b = {
				m: 3,
				alpha: .2,
				color: 16416033,
				v: .5,
				j: 1.78
			};
			c.push(b);
			b = {
				m: 6,
				alpha: .18,
				color: 16434209,
				v: .45,
				j: 1.9
			};
			c.push(b);
			b = {
				m: 4,
				alpha: .14,
				color: 16766514,
				v: .45,
				j: 2.04
			};
			c.push(b);
			b = {
				m: 30,
				alpha: .14,
				color: 16766514,
				v: .8,
				j: .04
			};
			c.push(b);
			this.cc.push(e);
			this.Xb.push(c);
			this.dc.push(a);
			e = [];
			c = [];
			a = [];
			b = {
				m: 9,
				alpha: .3,
				color: 14346999,
				v: .3,
				j: .3
			};
			c.push(b);
			b = {
				m: 5,
				alpha: .5,
				color: 14148072,
				v: .8,
				j: .6
			};
			c.push(b);
			b = {
				m: 3,
				alpha: .37,
				color: 14346999,
				v: .66,
				j: .8
			};
			c.push(b);
			b = {
				m: 45,
				alpha: .2,
				color: 14346999,
				v: .36,
				j: 1.2
			};
			c.push(b);
			b = {
				m: 13,
				alpha: .2,
				color: 14346999,
				v: .36,
				j: 1.23
			};
			c.push(b);
			b = {
				m: 11,
				alpha: .2,
				color: 14148072,
				v: .36,
				j: 1.28
			};
			c.push(b);
			b = {
				m: 27,
				alpha: .16,
				color: 14346999,
				v: .36,
				j: 1.55
			};
			c.push(b);
			b = {
				m: 6,
				alpha: .36,
				color: 14148072,
				v: .8,
				j: 1.7
			};
			c.push(b);
			this.cc.push(e);
			this.Xb.push(c);
			this.dc.push(a);
			e = [];
			c = [];
			a = [];
			b = {
				m: 24,
				alpha: .2,
				color: 15186464,
				j: .2
			};
			e.push(b);
			b = {
				m: 7,
				alpha: .26,
				color: 15186464,
				j: .35
			};
			e.push(b);
			b = {
				m: 23,
				alpha: .18,
				color: 15186464,
				j: .65
			};
			e.push(b);
			b = {
				m: 13,
				alpha: .2,
				color: 15186464,
				j: .8
			};
			e.push(b);
			b = {
				m: 11,
				alpha: .15,
				color: 15186464,
				j: 1.4
			};
			e.push(b);
			b = {
				m: 15,
				alpha: .11,
				color: 15451904,
				j: 1.6
			};
			e.push(b);
			b = {
				m: 6,
				alpha: .45,
				color: 15579138,
				v: .45,
				j: .22
			};
			c.push(b);
			b = {
				m: 3,
				alpha: .3,
				color: 15451904,
				v: .25,
				j: .4
			};
			c.push(b);
			b = {
				m: 4,
				alpha: .2,
				color: 15451904,
				v: .25,
				j: .45
			};
			c.push(b);
			b = {
				m: 65,
				alpha: .17,
				color: 15186464,
				v: .25,
				j: .5
			};
			c.push(b);
			b = {
				m: 5,
				alpha: .45,
				color: 15579138,
				v: .45,
				j: .88
			};
			c.push(b);
			b = {
				m: 140,
				alpha: .18,
				color: 15579138,
				v: .32,
				j: .95
			};
			c.push(b);
			b = {
				m: 12,
				alpha: .22,
				color: 15579138,
				v: .32,
				j: 1.1
			};
			c.push(b);
			b = {
				m: 8,
				alpha: .32,
				color: 15451904,
				v: .72,
				j: 1.2
			};
			c.push(b);
			b = {
				m: 55,
				alpha: .2,
				color: 15451904,
				v: .45,
				j: 1.33
			};
			c.push(b);
			b = {
				m: 4,
				alpha: .3,
				color: 15451904,
				v: .25,
				j: 1.42
			};
			c.push(b);
			this.cc.push(e);
			this.Xb.push(c);
			this.dc.push(a);
			e = [];
			c = [];
			a = [];
			b = {
				m: 16,
				alpha: .4,
				color: 10933495,
				j: .32
			};
			e.push(b);
			b = {
				m: 14,
				alpha: .3,
				color: 11007484,
				j: .36
			};
			e.push(b);
			b = {
				m: 10,
				alpha: .3,
				color: 4037331,
				j: .58
			};
			e.push(b);
			b = {
				m: 14,
				alpha: .22,
				color: 8835068,
				j: .68
			};
			e.push(b);
			b = {
				m: 10,
				alpha: .27,
				color: 11007484,
				j: .82
			};
			e.push(b);
			b = {
				m: 11,
				alpha: .27,
				color: 10867450,
				j: 1
			};
			e.push(b);
			b = {
				m: 9,
				alpha: .2,
				color: 6158332,
				j: 1.05
			};
			e.push(b);
			b = {
				m: 10,
				alpha: .17,
				color: 10867450,
				j: 1.78
			};
			e.push(b);
			b = {
				m: 10,
				alpha: .3,
				color: 4037331,
				j: -.23
			};
			e.push(b);
			b = {
				m: 8,
				alpha: .45,
				color: 8835068,
				v: .45,
				j: .175
			};
			c.push(b);
			b = {
				m: 7,
				alpha: .4,
				color: 12574715,
				v: .55,
				j: .46
			};
			c.push(b);
			b = {
				m: 3,
				alpha: .3,
				color: 10867450,
				v: .35,
				j: .5
			};
			c.push(b);
			b = {
				m: 60,
				alpha: .37,
				color: 4031699,
				v: .75,
				j: .75
			};
			c.push(b);
			b = {
				m: 3,
				alpha: .25,
				color: 4031699,
				v: .25,
				j: .75
			};
			c.push(b);
			b = {
				m: 3,
				alpha: .2,
				color: 6158332,
				v: .25,
				j: .9
			};
			c.push(b);
			b = {
				m: 7,
				alpha: .45,
				color: 8835068,
				v: .45,
				j: 1.3
			};
			c.push(b);
			b = {
				m: 32,
				alpha: .22,
				color: 8835068,
				v: .75,
				j: 1.62
			};
			c.push(b);
			b = {
				m: 9,
				alpha: .45,
				color: 4031699,
				v: .65,
				j: 1.6
			};
			c.push(b);
			b = {
				m: 8,
				alpha: .25,
				color: 4031699,
				v: .65,
				j: 1.83
			};
			c.push(b);
			b = {
				m: 7,
				alpha: .4,
				color: 12574715,
				v: .55,
				j: -.18
			};
			c.push(b);
			this.cc.push(e);
			this.Xb.push(c);
			this.dc.push(a);
			e = [];
			c = [];
			a = [];
			b = {
				m: 16,
				alpha: .4,
				color: 16389120,
				j: .32
			};
			e.push(b);
			b = {
				m: 26,
				alpha: .22,
				color: 16389120,
				j: .4
			};
			e.push(b);
			b = {
				m: 26,
				alpha: .25,
				color: 16389120,
				j: .65
			};
			e.push(b);
			b = {
				m: 18,
				alpha: .3,
				color: 16389120,
				j: 1.23
			};
			e.push(b);
			b = {
				m: 14,
				alpha: .26,
				color: 16389120,
				j: 1.33
			};
			e.push(b);
			b = {
				m: 17,
				alpha: .18,
				color: 16389120,
				j: 1.7
			};
			e.push(b);
			b = {
				m: 30,
				alpha: .16,
				color: 16389120,
				j: 2.15
			};
			e.push(b);
			b = {
				m: 100,
				alpha: .25,
				color: 16389120,
				v: .22,
				j: 1.45
			};
			c.push(b);
			b = {
				m: 7,
				alpha: .5,
				color: 15628151,
				v: .3,
				j: 1.5
			};
			c.push(b);
			b = {
				m: 3,
				alpha: .5,
				color: 15628151,
				v: .3,
				j: 1.52
			};
			c.push(b);
			b = {
				m: 4,
				alpha: .5,
				color: 16389120,
				v: .3,
				j: 1.745
			};
			c.push(b);
			b = {
				m: 9,
				alpha: .22,
				color: 16389120,
				v: .3,
				j: 1.8
			};
			c.push(b);
			this.cc.push(e);
			this.Xb.push(c);
			this.dc.push(a);
			e = [];
			c = [];
			a = [];
			b = {
				m: 16,
				alpha: .4,
				color: 10933495,
				j: .32
			};
			e.push(b);
			b = {
				m: 14,
				alpha: .3,
				color: 11007484,
				j: .36
			};
			e.push(b);
			b = {
				m: 10,
				alpha: .3,
				color: 4037331,
				j: .58
			};
			e.push(b);
			b = {
				m: 14,
				alpha: .22,
				color: 8835068,
				j: .68
			};
			e.push(b);
			b = {
				m: 10,
				alpha: .27,
				color: 11007484,
				j: .82
			};
			e.push(b);
			b = {
				m: 11,
				alpha: .27,
				color: 10867450,
				j: 1
			};
			e.push(b);
			b = {
				m: 9,
				alpha: .2,
				color: 6158332,
				j: 1.05
			};
			e.push(b);
			b = {
				m: 10,
				alpha: .17,
				color: 10867450,
				j: 1.78
			};
			e.push(b);
			b = {
				m: 10,
				alpha: .3,
				color: 4037331,
				j: -.23
			};
			e.push(b);
			b = {
				m: 8,
				alpha: .45,
				color: 8835068,
				v: .45,
				j: .175
			};
			c.push(b);
			b = {
				m: 7,
				alpha: .4,
				color: 12574715,
				v: .55,
				j: .46
			};
			c.push(b);
			b = {
				m: 3,
				alpha: .3,
				color: 10867450,
				v: .35,
				j: .5
			};
			c.push(b);
			b = {
				m: 60,
				alpha: .37,
				color: 4031699,
				v: .75,
				j: .75
			};
			c.push(b);
			b = {
				m: 3,
				alpha: .25,
				color: 4031699,
				v: .25,
				j: .75
			};
			c.push(b);
			b = {
				m: 3,
				alpha: .2,
				color: 6158332,
				v: .25,
				j: .9
			};
			c.push(b);
			b = {
				m: 7,
				alpha: .45,
				color: 8835068,
				v: .45,
				j: 1.3
			};
			c.push(b);
			b = {
				m: 32,
				alpha: .22,
				color: 8835068,
				v: .75,
				j: 1.62
			};
			c.push(b);
			b = {
				m: 9,
				alpha: .45,
				color: 4031699,
				v: .65,
				j: 1.6
			};
			c.push(b);
			b = {
				m: 8,
				alpha: .25,
				color: 4031699,
				v: .65,
				j: 1.83
			};
			c.push(b);
			b = {
				m: 7,
				alpha: .4,
				color: 12574715,
				v: .55,
				j: -.18
			};
			c.push(b);
			this.cc.push(e);
			this.Xb.push(c);
			this.dc.push(a);
			e = [];
			c = [];
			a = [];
			b = {
				m: 16,
				alpha: .4,
				color: 16389120,
				j: .32
			};
			e.push(b);
			b = {
				m: 26,
				alpha: .22,
				color: 16389120,
				j: .4
			};
			e.push(b);
			b = {
				m: 26,
				alpha: .25,
				color: 16389120,
				j: .65
			};
			e.push(b);
			b = {
				m: 18,
				alpha: .3,
				color: 16389120,
				j: 1.23
			};
			e.push(b);
			b = {
				m: 14,
				alpha: .26,
				color: 16389120,
				j: 1.33
			};
			e.push(b);
			b = {
				m: 17,
				alpha: .18,
				color: 16389120,
				j: 1.7
			};
			e.push(b);
			b = {
				m: 30,
				alpha: .16,
				color: 16389120,
				j: 2.15
			};
			e.push(b);
			b = {
				m: 100,
				alpha: .25,
				color: 16389120,
				v: .22,
				j: 1.45
			};
			c.push(b);
			b = {
				m: 7,
				alpha: .5,
				color: 15628151,
				v: .3,
				j: 1.5
			};
			c.push(b);
			b = {
				m: 3,
				alpha: .5,
				color: 15628151,
				v: .3,
				j: 1.52
			};
			c.push(b);
			b = {
				m: 4,
				alpha: .5,
				color: 16389120,
				v: .3,
				j: 1.745
			};
			c.push(b);
			b = {
				m: 9,
				alpha: .22,
				color: 16389120,
				v: .3,
				j: 1.8
			};
			c.push(b);
			this.cc.push(e);
			this.Xb.push(c);
			this.dc.push(a);
			e = [];
			c = [];
			a = [];
			b = {
				m: 24,
				alpha: .2,
				color: 15186464,
				j: .2
			};
			e.push(b);
			b = {
				m: 7,
				alpha: .26,
				color: 15186464,
				j: .35
			};
			e.push(b);
			b = {
				m: 23,
				alpha: .18,
				color: 15186464,
				j: .65
			};
			e.push(b);
			b = {
				m: 13,
				alpha: .2,
				color: 15186464,
				j: .8
			};
			e.push(b);
			b = {
				m: 11,
				alpha: .15,
				color: 15186464,
				j: 1.4
			};
			e.push(b);
			b = {
				m: 15,
				alpha: .11,
				color: 15451904,
				j: 1.6
			};
			e.push(b);
			b = {
				m: 6,
				alpha: .45,
				color: 15579138,
				v: .45,
				j: .22
			};
			c.push(b);
			b = {
				m: 3,
				alpha: .3,
				color: 15451904,
				v: .25,
				j: .4
			};
			c.push(b);
			b = {
				m: 4,
				alpha: .2,
				color: 15451904,
				v: .25,
				j: .45
			};
			c.push(b);
			b = {
				m: 65,
				alpha: .17,
				color: 15186464,
				v: .25,
				j: .5
			};
			c.push(b);
			b = {
				m: 5,
				alpha: .45,
				color: 15579138,
				v: .45,
				j: .88
			};
			c.push(b);
			b = {
				m: 140,
				alpha: .18,
				color: 15579138,
				v: .32,
				j: .95
			};
			c.push(b);
			b = {
				m: 12,
				alpha: .22,
				color: 15579138,
				v: .32,
				j: 1.1
			};
			c.push(b);
			b = {
				m: 8,
				alpha: .32,
				color: 15451904,
				v: .72,
				j: 1.2
			};
			c.push(b);
			b = {
				m: 55,
				alpha: .2,
				color: 15451904,
				v: .45,
				j: 1.33
			};
			c.push(b);
			b = {
				m: 4,
				alpha: .3,
				color: 15451904,
				v: .25,
				j: 1.42
			};
			c.push(b);
			this.cc.push(e);
			this.Xb.push(c);
			this.dc.push(a)
		};
		m.prototype.$o = function() {
			if (this.Oj) {
				var e = this.g.H,
					c, a = new r.ya(0, 0, -100),
					b = this.g.dd(),
					d = 0,
					f = 0,
					g = !1;
				if (this.g.Z) {
					var h = this.g.sb.width;
					var l = this.g.sb.height;
					this.g.B.Xg && (h = this.g.B.ec.width, l = this.g.B.ec.height)
				} else {
					this.S || (this.S = this.Yc.getContext("2d"));
					if (this.S.width !== this.g.o.width || this.S.height !== this.g.o.height) this.S.width =
						this.g.o.width, this.S.height = this.g.o.height;
					this.S.clear ? this.S.clear() : this.S.clearRect(0, 0, this.Yc.width, this.Yc.height);
					h = this.S.width;
					l = this.S.height
				}
				var k = Math.sqrt(h * h + l * l),
					q = k / 800;
				for (c = 0; c < this.Cg.length; c++) {
					var p = this.Cg[c];
					a.$a(0, 0, -100);
					a.xa(-p.i * Math.PI / 180);
					a.Ea(p.pan * Math.PI / 180);
					a.Ea(-this.g.pan.c * Math.PI /
						180);
					a.xa(this.g.i.c * Math.PI / 180);
					a.nb(this.g.O.c * Math.PI / 180);
					if (-.01 > a.z) {
						f = -b / a.z;
						d = a.x * f;
						f *= a.y;
						var t = Math.max(h, l);
						Math.abs(d) < t / 2 + 100 && Math.abs(f) < t / 2 + 100 && (g = !0, d += h / 2, f +=
							l / 2)
					}
					if (g) {
						this.g.Z && (e.blendFunc(e.SRC_ALPHA, e.DST_ALPHA), e.enable(e.BLEND), e.disable(e
							.DEPTH_TEST));
						t = h / 2;
						var u = l / 2;
						var w = Math.sqrt((t - d) * (t - d) + (u - f) * (u - f));
						var v = k / 2;
						u = h > l ? h : l;
						t = p.rk / 100 * ((v - w) / v);
						0 > t && (t = 0);
						if (this.g.Z) {
							e.useProgram(this.jc);
							e.bindBuffer(e.ARRAY_BUFFER, this.g.B.lb);
							e.vertexAttribPointer(this.jc.$, this.g.B.lb.Mc,
								e.FLOAT, !1, 0, 0);
							var y = e.getUniformLocation(this.jc, "uCanvasDimensions");
							e.uniform2f(y, e.drawingBufferWidth, e.drawingBufferHeight);
							e.uniform2f(e.getUniformLocation(this.jc, "uFlareCenterPosition"), e
								.drawingBufferWidth / h * d, l - e.drawingBufferHeight / l * f);
							e.uniform1f(e.getUniformLocation(this.jc, "uBlindingValue"), t);
							y = e.getUniformLocation(this.jc, "uAspectRatio");
							e.uniform1f(y, this.g.B.Xg ? e.drawingBufferWidth / e.drawingBufferHeight : e
								.drawingBufferWidth / e.drawingBufferHeight / (h / l));
							e.drawArrays(e.TRIANGLE_STRIP,
								0, this.g.B.lb.Ud)
						} else y = this.S.createRadialGradient(d, f, 1, d, f, u), y.addColorStop(0,
								"rgba(255, 255, 255, " + t + ")"), y.addColorStop(.5,
								"rgba(255, 255, 255, " + .8 * t + ")"), y.addColorStop(1,
								"rgba(255, 255, 255, " + .6 * t + ")"), this.S.fillStyle = y, this.S
							.fillRect(0, 0, this.S.width, this.S.height);
						if (0 != Number(p.type) && !this.g.B.Xg) {
							t = h / 2 - d;
							u = l / 2 - f;
							var A = 1,
								x = Number(p.type) - 1;
							w < .35 * v && (A = w / (.35 * v), A *= A);
							w > .7 * v && (A = (v - w) / (.3 * v));
							A *= p.alpha / 100;
							if (0 < this.cc[x].length)
								for (w = 0; w < this.cc[x].length; w++) {
									var B = this.cc[x][w];
									v = B.m * q;
									var z = B.alpha * A;
									0 > z && (z = 0);
									var C = B.color;
									if (8 == x || 9 == x || 10 == x) C = p.color;
									if (this.g.Z) e.useProgram(this.sa), e.bindBuffer(e.ARRAY_BUFFER, this
											.cf), e.vertexAttribPointer(this.sa.$, this.cf.Mc, e.FLOAT, !1,
											0, 0), y = e.getUniformLocation(this.sa, "uCanvasDimensions2"),
										e.uniform2f(y, e.drawingBufferWidth, e.drawingBufferHeight), e
										.uniform2f(e.getUniformLocation(this.sa, "uCirclePosition"), e
											.drawingBufferWidth / h * (d + t * B.j), e.drawingBufferWidth /
											h * (l - (f + u * B.j))), e.uniform2f(e.getUniformLocation(this
												.sa, "uCircleTexturePosition"),
											e.drawingBufferWidth / h * (d + t * B.j), l - (f + u * B.j)), e
										.uniform1f(e.getUniformLocation(this.sa, "uCircleRadius"), v), e
										.uniform3f(e.getUniformLocation(this.sa, "uCircleColor"), (C >> 16 &
											255) / 255, (C >> 8 & 255) / 255, (C & 255) / 255), e.uniform1f(
											e.getUniformLocation(this.sa, "uCircleAlpha"), z), e.uniform1f(e
											.getUniformLocation(this.sa, "uCircleSoftness"), .1), y = e
										.getUniformLocation(this.sa, "uAspectRatio"), e.uniform1f(y, e
											.drawingBufferWidth / e.drawingBufferHeight / (h / l)), e
										.drawArrays(e.TRIANGLE_FAN, 0, this.cf.Ud);
									else {
										this.S.save();
										this.S.translate(d + t * B.j, f + u * B.j);
										y = this.S.createRadialGradient(0, 0, 1, 0, 0, 1.1 * v);
										y.addColorStop(0, this.g.ga(C, z));
										y.addColorStop(.65, this.g.ga(C, .9 * z));
										y.addColorStop(.8, this.g.ga(C, .7 * z));
										y.addColorStop(1, this.g.ga(C, .2 * z));
										this.S.beginPath();
										C = 2 * Math.PI / 6;
										B = Math.PI / 180 * 35;
										var D = !0;
										for (z = B; z <= B + 2 * Math.PI; z += C) D ? (this.S.moveTo(v *
											Math.sin(z), v * Math.cos(z)), D = !1) : this.S.lineTo(v *
											Math.sin(z), v * Math.cos(z));
										this.S.closePath();
										this.S.fillStyle = y;
										this.S.fill();
										this.S.restore()
									}
								}
							if (0 < this.Xb[x].length)
								for (w =
									0; w < this.Xb[x].length; w++) {
									B = this.Xb[x][w];
									v = B.m * q;
									z = B.alpha * A;
									0 > z && (z = 0);
									C = B.color;
									if (8 == x || 9 == x || 10 == x) C = p.color;
									this.g.Z ? (e.useProgram(this.sa), e.bindBuffer(e.ARRAY_BUFFER, this
											.wd), e.vertexAttribPointer(this.sa.$, this.wd.Mc, e.FLOAT,
											!1,
											0, 0), y = e.getUniformLocation(this.sa,
											"uCanvasDimensions2"), e.uniform2f(y, e.drawingBufferWidth,
											e.drawingBufferHeight), y = e.getUniformLocation(this.sa,
											"uCirclePosition"), e.uniform2f(y, e.drawingBufferWidth /
											h * (d + t * B.j), e.drawingBufferWidth / h * (l - (f + u *
												B.j))), y = e.getUniformLocation(this.sa,
											"uCircleTexturePosition"), e.uniform2f(y, e
											.drawingBufferWidth / h * (d + t * B.j), l - (f + u * B.j)),
										y = e.getUniformLocation(this.sa, "uCircleRadius"), e.uniform1f(
											y, v), e.uniform3f(e.getUniformLocation(this.sa,
												"uCircleColor"), (C >> 16 & 255) / 255, (C >> 8 & 255) /
											255, (C & 255) / 255), e.uniform1f(e.getUniformLocation(this
											.sa, "uCircleAlpha"), z), e.uniform1f(e.getUniformLocation(
											this.sa, "uCircleSoftness"), B.v), y = e.getUniformLocation(
											this.sa, "uAspectRatio"), e.uniform1f(y, e
											.drawingBufferWidth / e.drawingBufferHeight / (h / l)), e
										.drawArrays(e.TRIANGLE_FAN,
											0, this.wd.Ud)) : (this.S.save(), this.S.translate(d + t * B
											.j, f + u * B.j), y = this.S.createRadialGradient(0, 0, 1,
											0, 0, v), y.addColorStop(0, this.g.ga(C, z)), y
										.addColorStop(1 - B.v, this.g.ga(C, .8 * z)), y.addColorStop(1,
											this.g.ga(C, 0)), this.S.beginPath(), this.S.arc(0, 0, v, 0,
											2 * Math.PI, !1), this.S.closePath(), this.S.fillStyle = y,
										this.S.fill(), this.S.restore())
								}
							if (0 < this.dc[x].length)
								for (w = 0; w < this.dc[x].length; w++) p = this.dc[x][w], v = p.m * q, z =
									p.alpha * A, 0 > z && (z = 0), this.g.Z ? (e.useProgram(this.wb), e
										.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D,
											this.dm), e.bindBuffer(e.ARRAY_BUFFER, this.wd), e
										.vertexAttribPointer(this.wb.$, this.wd.Mc, e.FLOAT, !1, 0, 0), y =
										e.getUniformLocation(this.wb, "uCanvasDimensions2"), e.uniform2f(y,
											h, l), y = e.getUniformLocation(this.wb, "uCirclePosition"), e
										.uniform2f(y, d + t * p.j, l - (f + u * p.j)), y = e
										.getUniformLocation(this.wb, "uRingTexturePosition"), e.uniform2f(y,
											e.drawingBufferWidth / h * (d + t * p.j), l - (f + u * p.j)),
										y = e.getUniformLocation(this.wb, "uCircleRadius"), e.uniform1f(y,
											v), e.uniform2f(e.getUniformLocation(this.wb, "uRingPosition"),
											d +
											t * p.j, l - (f + u * p.j)), e.uniform1f(e.getUniformLocation(
											this.wb, "uRingRadius"), v), e.uniform1f(e.getUniformLocation(
											this.wb, "uRingAlpha"), z), y = e.getUniformLocation(this.wb,
											"uAspectRatio"), e.uniform1f(y, e.drawingBufferWidth / e
											.drawingBufferHeight / (h / l)), e.uniform1i(e
											.getUniformLocation(this.wb, "uSampler"), 0), e.drawArrays(e
											.TRIANGLE_FAN, 0, this.wd.Ud)) : (this.S.save(), this.S
										.translate(d + t * p.j, f + u * p.j), y = this.S
										.createRadialGradient(0, 0, 0, 0, 0, v), y.addColorStop(0, this.g
											.ga(16777215, 0)), y.addColorStop(.88, this.g.ga(0,
											0)), y.addColorStop(.9, this.g.ga(16654848, z)), y.addColorStop(
											.92, this.g.ga(16776448, z)), y.addColorStop(.94, this.g.ga(
											4849466, z)), y.addColorStop(.96, this.g.ga(131071, z)), y
										.addColorStop(.98, this.g.ga(8190, z)), y.addColorStop(1, this.g.ga(
											0, 0)), this.S.beginPath(), this.S.arc(0, 0, v, 0, 2 * Math.PI,
											!1), this.S.closePath(), this.S.fillStyle = y, this.S.fill(),
										this.S.restore())
						}
						this.g.Z && (e.useProgram(this.g.oa.F), e.disable(e.BLEND), e.enable(e.DEPTH_TEST))
					}
				}
			}
		};
		return m
	}();
	r.Sm = n
})(ggP2VR || (ggP2VR = {}));
var W = !1;
(function(r) {
	var n = function() {
			return function() {
				this.f = this.i = this.pan = 0
			}
		}(),
		m = function() {
			return function() {
				this.Si = -1E7
			}
		}(),
		e = function() {
			function c(a, b) {
				this.Jo = "TGljZW5zZTogQktZTS5DT00=";
				this.pan = {
					c: 0,
					Ra: 0,
					min: 0,
					max: 360,
					d: 0,
					zj: 0,
					Hc: 0
				};
				this.i = {
					c: 0,
					Ra: 0,
					min: -90,
					max: 90,
					d: 0,
					Hc: 0
				};
				this.O = {
					c: 0,
					Ra: 0,
					min: -180,
					max: 180,
					d: 0
				};
				this.wc = {
					pan: 0,
					i: -90,
					O: 0,
					f: 170,
					Eb: 9
				};
				this.f = {
					c: 70,
					Ra: 70,
					min: 1,
					Gg: 0,
					max: 170,
					wj: 360,
					xj: 270,
					sf: 0,
					d: 0,
					mode: 0,
					pm: 0,
					Dk: 0
				};
				this.ab = {
					O: 0,
					pitch: 0
				};
				this.o = {
					width: 10,
					height: 10
				};
				this.kb = 0;
				this.Vi = new r.ya;
				this.crossOrigin =
					"anonymous";
				this.Ka = this.ci = 4;
				this.fd = this.jh = this.Jg = this.rc = 0;
				this.Mm = {};
				this.X = {
					start: {
						x: 0,
						y: 0
					},
					ea: {
						x: 0,
						y: 0
					},
					Cd: {
						x: 0,
						y: 0
					},
					c: {
						x: 0,
						y: 0
					},
					da: {
						x: 0,
						y: 0
					}
				};
				this.P = {
					Ya: !1,
					Lk: 0,
					startTime: 0,
					start: {
						x: 0,
						y: 0
					},
					ea: {
						x: 0,
						y: 0
					},
					Cd: {
						x: 0,
						y: 0
					},
					c: {
						x: 0,
						y: 0
					},
					da: {
						x: 0,
						y: 0
					},
					Lg: !1
				};
				this.bf = !0;
				this.Ba = {
					enabled: !0,
					ea: {
						x: 0,
						y: 0
					},
					da: {
						x: 0,
						y: 0
					},
					Jj: 0,
					f: {
						active: !1,
						nc: 0
					}
				};
				this.jb = {
					alpha: 0,
					beta: 0,
					gamma: 0,
					orientation: 0,
					Rl: 0,
					ji: !0,
					cg: 0
				};
				this.og = {
					alpha: 0,
					beta: 0,
					gamma: 0,
					orientation: 0
				};
				this.s = {
					src: [],
					Te: 4,
					width: 640,
					height: 480,
					hd: !1,
					Mh: !1,
					Rj: !0,
					qm: !1,
					me: "loop",
					b: HTMLVideoElement = null,
					um: !1,
					sc: WebGLTexture = null,
					dk: WebGLBuffer = null,
					ti: WebGLBuffer = null,
					oj: WebGLBuffer = null,
					format: 1,
					Fh: 0,
					gj: 1
				};
				this.Ph = 0;
				this.ia = this.za = this.Fa = this.T = this.mc = this.cb = this.D = null;
				this.oe = "pano";
				this.fj = "flashcontainer";
				this.Wi = "";
				this.control = null;
				this.Wb = [];
				this.Da = !1;
				this.$f = 1;
				this.ja = null;
				this.Jd = this.Qe = this.gf = !1;
				this.Qf = 0;
				this.td = .02;
				this.Hi = 0;
				this.Ii = !1;
				this.Gi = this.oh = this.Rf = this.Pe = this.qk = 0;
				this.pk = -1;
				this.Pb = "";
				this.xf = this.Bc = !1;
				this.di = 0;
				this.uh = [];
				this.Ze = [];
				this.Gf = this.uc = 1;
				this.Uf = 1024;
				this.yf = !1;
				this.we = 200;
				this.Tb = 0;
				this.Wg = 5;
				this.tc = 0;
				this.vm = 50;
				this.nj = this.wm = 0;
				this.l = {
					enabled: !1,
					timeout: 5,
					active: !1,
					Vg: !1,
					speed: .4,
					vi: 0,
					$h: 0,
					yj: !0,
					fh: !1,
					Kf: !1,
					ph: "",
					Kd: "Animation01",
					Se: !1,
					Wh: !1,
					Uj: !1,
					startTime: 0,
					jd: 0,
					eg: !1,
					vh: !1,
					Rh: 0,
					Bd: 0,
					Ag: 0,
					Bg: 0,
					zg: 0,
					Fl: 0
				};
				this.u = {
					active: !1,
					aborted: !1,
					speed: .1,
					pan: 0,
					i: 0,
					O: 0,
					f: 70,
					Hd: 70,
					Ag: 0,
					Bg: 0,
					Gl: 0,
					zg: 0,
					Eb: 0,
					Ng: 0,
					rj: 0,
					bk: !1,
					Hg: !1,
					nk: 0,
					mk: 0,
					Hh: !1
				};
				this.mf = {
					pan: -1,
					i: -1,
					f: -1
				};
				this.Dl = 0;
				this.ba = null;
				this.Lf = {};
				this.gh = {};
				this.Od = [];
				this.Uh = {};
				this.Ac = {};
				this.pf = {};
				this.A = {
					mode: 1,
					wg: -1,
					ra: 0,
					bb: 0,
					Xc: .05,
					lc: 255,
					kc: 1,
					ic: 255,
					hc: .3,
					ff: !0,
					Wj: {
						enabled: !0,
						width: 180,
						height: 20,
						Xj: 0,
						Vj: 1,
						background: !0,
						ic: 16777215,
						hc: 1,
						lc: 0,
						kc: 1,
						Ki: 3,
						Li: 1,
						Di: !0
					},
					ob: [],
					Sb: [],
					Pc: [],
					pi: []
				};
				this.Aa = null;
				this.R = [];
				this.N = [];
				this.I = [];
				this.Ta = [];
				this.Le = [];
				this.Ma = [];
				this.ma = [];
				this.Qc = [];
				this.ce = [];
				this.He = [];
				this.V = 1;
				this.oa = this.md = this.Gb = this.Nd = null;
				this.ag = {};
				this.pd = {};
				this.h = new r.Vm;
				this.Zo = {
					target: 0,
					current: 0,
					Xc: .01,
					delay: 2,
					$i: 0,
					wh: !1,
					jn: !1
				};
				this.margin = {
					left: 0,
					top: 0,
					right: 0,
					bottom: 0
				};
				this.C = {
					ue: !1,
					Ko: !1,
					Ab: !1,
					kd: !1,
					Ad: !0,
					rl: !1,
					om: 1,
					fm: !1,
					Yi: !0,
					Zf: !0,
					sh: !1,
					hf: !1,
					gm: !0,
					sensitivity: 8
				};
				this.Fg = [];
				this.ad = !0;
				this.va = {
					x: 0,
					y: 0
				};
				this.eh = this.Fb = this.ah = this.Tc = this.Z = !1;
				this.Bi = this.Hm = !0;
				this.mj = !1;
				this.ne = !0;
				this.bh = this.lj = !1;
				this.Im = !0;
				this.Ia = this.Ld = "";
				this.cd = "transition";
				this.Sa = "transform";
				this.vd = "perspective";
				this.Gk =
					"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYBgeACDAAADIAAE3iTbkAAAAAElFTkSuQmCC";
				this.sb = {
					width: 0,
					height: 0
				};
				this.Pk = new r.ya;
				this.Ok = new r.ya;
				this.Qk = new r.ya;
				this.Rk = new r.ya;
				this.Nk = new r.ya;
				this.kf = !1;
				this.El = this.Xa = "";
				this.ek = [];
				this.xi = [];
				this.tg = this.tl = this.sg = this.ul = this.Sd = this.pj = this.Kj = this.Lc = this.Kh = this.sl =
					this.qj = this.vl = this.wl = this.zl = !1;
				this.dh = !0;
				this.ii = this.Jh = !1;
				this.nl = [];
				this.devicePixelRatio = 1;
				this.ha = this.B = null;
				this.Vf = !1;
				this.La = null;
				this.rb = {
					enabled: !1,
					speed: 1,
					nd: !1,
					dj: !0
				};
				this.Nl = !1;
				this.Th = "<<LOG>>";
				this.qb = new r.Wm;
				this.ak = !1;
				this.Yf = function(f,
					g) {
					if (0 == f.length) return f;
					var h;
					var l = [];
					var k = g.ei(f[0]) - 0;
					for (h = 0; h < f.length; h++) {
						var q = h;
						var p = h + 1;
						p == f.length && (p = 0);
						var t = g.ei(f[p]) - 0;
						if (0 <= k && 0 <= t) l.push(f[q]);
						else if (0 <= k || 0 <= t) {
							var u = t / (t - k);
							0 > u && (u = 0);
							1 < u && (u = 1);
							var w = new r.ya;
							w.zd(f[q], f[p], u);
							0 > k || l.push(f[q]);
							l.push(w)
						}
						k = t
					}
					return l
				};
				this.Vl = new n;
				this.Qj = 0;
				this.Qh = -1;
				this.jg = function(f) {
					return f ? f.pageX || f.pageY ? {
						x: f.pageX,
						y: f.pageY
					} : f.clientX || f.clientY ? {
						x: f.clientX + document.body.scrollLeft + document.documentElement.scrollLeft,
						y: f.clientY +
							document.body.scrollTop + document.documentElement.scrollTop
					} : f.touches && f.touches[0] ? {
						x: f.touches[0].pageX,
						y: f.touches[0].pageY
					} : {
						x: 0,
						y: 0
					} : {
						x: 0,
						y: 0
					}
				};
				this.Yh = 1;
				this.Hn = this.Bh = this.Bl = this.aj = this.Fj = this.fi = 0;
				this.Cl = !1;
				this.Qd = !0;
				this.eb = new r.mh(this);
				this.eb.ff = !1;
				this.Fk();
				if (7 < this.Th.length) {
					var d = c.Sf("bG9n");
					window[c.Sf("Y29uc29sZQ==")][d](c.sk(this.Th))
				}
				this.Af(this.eb);
				this.checkLoaded = this.Wb;
				this.isLoaded = !1;
				b && b.hasOwnProperty("useFlash") && b.useFlash && (this.Fb = !0, this.Z = this.Tc = !1, b
					.hasOwnProperty("flashPlayerId") ?
					this.oe = b.flashPlayerId : this.oe = "pano", b.hasOwnProperty("flashContainerId") ? this
					.fj = b.flashContainerId : this.fj = a + "flash");
				b && b.hasOwnProperty("webGLFlags") && b.webGLFlags && (this.Mm = b.webGLFlags);
				this.wa();
				this.Fb || (this.Ga = new r.Sm(this));
				this.Ak(a);
				this.hn();
				this.userdata = this.Lf = this.bg();
				this.emptyHotspot = this.eb;
				this.mouse = this.va;
				this.B = new r.Tm(this);
				this.La = new r.Um(this);
				this.oa = new r.$m(this);
				this.Sc()
			}
			c.prototype.hl = function(a) {
				return -99991 === a ? this.Jo : "6.0.6/17336"
			};
			c.prototype.Ti =
				function() {
					this.B.enabled = this.ha.enabled;
					this.B.type = this.ha.type;
					this.B.Oa = this.ha.zoomin;
					this.B.fc = this.ha.zoomout;
					this.B.Tf = this.ha.blendtime;
					this.B.Pf = this.ha.zoomoutpause;
					this.B.Of = this.ha.zoomfov;
					this.B.de = this.ha.zoomspeed;
					this.B.Ue = this.ha.blendcolor;
					this.B.Dc = this.ha.softedge;
					this.ha = null
				};
			c.prototype.Lp = function(a) {
				this.ha = {};
				this.ha.enabled = !0;
				this.ha.type = this.B.type;
				this.ha.zoomin = this.B.Oa;
				this.ha.zoomout = this.B.fc;
				this.ha.blendtime = this.B.Tf;
				this.ha.zoomoutpause = this.B.Pf;
				this.ha.zoomfov =
					this.B.Of;
				this.ha.zoomspeed = this.B.de;
				this.ha.blendcolor = this.B.Ue;
				this.ha.softedge = this.B.Dc;
				if (a.hasOwnProperty("type")) {
					var b = a.type;
					if ("cut" == b || "crossdissolve" == b || "diptocolor" == b || "irisround" == b ||
						"irisrectangular" == b || "wipeleftright" == b || "wiperightleft" == b ||
						"wipetopbottom" == b || "wipebottomtop" == b || "wiperandom" == b) this.ha.type = b
				}
				a.hasOwnProperty("before") && (b = Number(a.before), 0 == b || 2 == b) && (this.ha.zoomin = b);
				a.hasOwnProperty("after") && (b = Number(a.after), 0 == b || 2 == b || 3 == b || 4 == b) && (
					this.ha.zoomout =
					b);
				a.hasOwnProperty("transitiontime") && (b = Number(a.transitiontime), 0 <= b && 50 >= b && (this
					.ha.blendtime = b));
				a.hasOwnProperty("waitfortransition") && (this.ha.zoomoutpause = 1 == a.waitfortransition);
				a.hasOwnProperty("zoomedfov") && (b = Number(a.zoomedfov), .01 <= b && 50 >= b && (this.ha
					.zoomfov = b));
				a.hasOwnProperty("zoomspeed") && (b = Number(a.zoomspeed), .01 <= b && 99 >= b && (this.ha
					.zoomspeed = b));
				a.hasOwnProperty("dipcolor") && (this.ha.blendcolor = a.dipcolor);
				a.hasOwnProperty("softedge") && (a = Number(a.softedge), 0 <= a && 1E3 >= a && (this.ha
					.softedge =
					a));
				this.Vf || this.Ti()
			};
			c.prototype.Cc = function(a, b, d) {
				var f = b ? Number(b) : 0;
				if (0 != a && 4 != a && 12 != a && 9 != a) this.Nc("Unsupported projection type: " + a);
				else if (b && 0 !== f && 4 !== f && 12 !== f && 9 !== f) this.Nc(
					"Unsupported projection2 type: " + f);
				else if (a == f && (f = 0), this.Jg = d ? Number(d) : 1, this.Ka != a || this.rc != f) this.Ka =
					a, this.rc = f, this.oa.Ih()
			};
			c.prototype.ta = function() {
				return 0 == this.Ka ? 4 : this.Ka
			};
			c.prototype.Pi = function(a, b) {
				if (0 != a && 4 != a && 12 != a && 9 != a) this.Nc("Unsupported projection type: " + a);
				else if (this.Z || 0 == a ||
					4 == a || this.Nc("Projection changes require WebGL!"), this.ta() != a) {
					var d = {};
					d.pan = this.pan.c;
					d.tilt = this.i.c;
					d.fov = this.f.c;
					d.projection = a;
					d.timingFunction = 3;
					d.speed = b;
					a = this.ig(a);
					d.fov = Math.min(a, d.fov);
					this.Xh(d)
				}
			};
			c.prototype.addListener = function(a, b) {
				(this.ag[a] = this.ag[a] || []).push(b)
			};
			c.prototype.Y = function(a, b) {
				if (a = this.ag[a])
					for (var d = a.length, f = 0; f < d; f++) try {
						a[f].apply(null, [b])
					} catch (g) {
						this.Nc(g)
					}
			};
			c.prototype.removeEventListener = function(a, b) {
				var d = this.ag[a];
				if (d) {
					var f;
					var g = 0;
					for (f =
						d.length; g < f; g++)
						if (d[g] === b) {
							1 === f ? delete this.ag[a] : d.splice(g, 1);
							break
						}
				}
			};
			c.prototype.pp = function() {
				this.Da = !0
			};
			c.prototype.Ao = function() {
				return this.H
			};
			c.prototype.dn = function(a, b, d, f) {
				if (!this.pd.hasOwnProperty(a)) {
					var g = new m;
					this.pd[a] = g;
					g.type = b;
					"undefined" !== typeof d && this.Zd(a, d);
					"object" === typeof f && this.km(a, f);
					return !0
				}
				return !1
			};
			c.prototype.km = function(a, b) {
				if (this.pd.hasOwnProperty(a) && "object" === typeof b) {
					var d = this.pd[a];
					b.hasOwnProperty("cookiePath") && (d.yk = String(b.cookiePath));
					b.hasOwnProperty("cookieExpireDays") && (d.Si = parseFloat(b.cookieExpireDays));
					if (b.hasOwnProperty("keep") && (d.Al = !!b.keep, d.Al)) {
						var f = "ggvar_" + a;
						0 < document.cookie.length && (b = document.cookie.indexOf(f + "="), -1 != b && (b = b +
							f.length + 1, f = document.cookie.indexOf(";", b), -1 == f && (f = document
								.cookie.length), b = decodeURIComponent(document.cookie.substring(b,
								f)), 0 == d.type && this.Zd(a, b), 1 == d.type && this.Zd(a, parseFloat(
								b)),
							2 == d.type && this.Zd(a, "true" == b)))
					}
					return !0
				}
				return !1
			};
			c.prototype.Zd = function(a, b) {
				if (this.pd.hasOwnProperty(a)) {
					var d =
						this.pd[a];
					if (0 == d.type && "string" === typeof b || 1 == d.type && "number" === typeof b || 2 == d
						.type && "boolean" === typeof b) {
						if (d.Al) {
							var f = "ggvar_" + a + "=" + encodeURIComponent(b.toString()); - 1 <= d.Si && (f +=
								"; max-age=" + 86400 * d.Si);
							d.yk && (f += "; path=" + d.yk);
							document.cookie = f
						}
						d.value != b && (d.value = b, this.Y("varchanged_" + a, {
							value: b
						}));
						return !0
					}
				}
				return !1
			};
			c.prototype.uo = function(a) {
				if (this.pd.hasOwnProperty(a)) return this.pd[a].value
			};
			c.Sf = function(a) {
				var b = "",
					d = 0;
				a = a.replace(/[^A-Za-z0-9\+\/=]/g, "");
				do {
					var f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a
						.charAt(d++));
					var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a
						.charAt(d++));
					var h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a
						.charAt(d++));
					var l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a
						.charAt(d++));
					f = f << 2 | g >> 4;
					g = (g & 15) << 4 | h >> 2;
					var k = (h & 3) << 6 | l;
					b += String.fromCharCode(f);
					64 != h && (b += String.fromCharCode(g));
					64 != l && (b += String.fromCharCode(k))
				} while (d < a.length);
				return b
			};
			c.Fn = function(a) {
				for (var b = [1, 1, 1, 1, 2, 2,
						3, 0
					], d = a.length, f = "", g = 0; g < d;) {
					var h = a.charCodeAt(g++);
					if (h & 128) {
						var l = b[h >> 3 & 7];
						if (!(h & 64 && l) || g + l > d) return null;
						for (h &= 63 >> l; 0 < l; --l) {
							var k = a.charCodeAt(g++);
							if (128 != (k & 192)) return null;
							h = h << 6 | k & 63
						}
					}
					f += String.fromCharCode(h)
				}
				return f
			};
			c.sk = function(a) {
				return c.Fn(c.Sf(a))
			};
			c.prototype.Fk = function() {
				this.devicePixelRatio = window.devicePixelRatio || 1;
				this.zl = !!navigator.userAgent.match(/(Windows|Win)/g);
				this.wl = !!navigator.userAgent.match(/(Mac|Macintosh|Mac_powerpc)/g);
				this.vl = !!navigator.userAgent.match(/(Linux|Ubuntu)/g);
				this.qj = !!navigator.userAgent.match(/(MSIE)/g);
				this.sl = !!navigator.userAgent.match(/(Edge|EdgA)/g);
				this.Kh = !!navigator.userAgent.match(/(Firefox)/g);
				if (this.Lc = !!navigator.userAgent.match(/(Safari)/g)) {
					var a = navigator.userAgent.indexOf("Safari");
					this.od = navigator.userAgent.substring(a + 7);
					a = navigator.userAgent.indexOf("Version"); - 1 != a && (this.od = navigator.userAgent
						.substring(a + 8));
					this.od = this.od.substring(0, this.od.indexOf(" "));
					this.od = this.od.substring(0, this.od.indexOf("."));
					this.Kj = !0
				}
				if (this.pj = !!navigator.userAgent.match(/(Chrome)/g)) this.Lc = !1;
				this.Sd = !!navigator.userAgent.match(/(iPad|iPhone|iPod)/g);
				this.ul = !!navigator.userAgent.match(/(iPhone|iPod)/g);
				this.sg = !!navigator.userAgent.match(/(android)/i);
				this.tl = !!navigator.userAgent.match(/(IEMobile)/i);
				this.tg = this.Sd || this.sg || this.tl;
				/iP(hone|od|ad)/.test(navigator.platform) && (a = navigator.appVersion.match(
					/OS (\d+)_(\d+)_?(\d+)?/), this.nl = [parseInt(a[1], 10), parseInt(a[2], 10),
					parseInt(a[3] || "0", 10)
				]);
				this.Jh = !window.requestAnimationFrame;
				a = ["Webkit", "Moz", "O", "ms", "Ms"];
				this.Ia = "";
				this.cd = "transition";
				this.Sa = "transform";
				this.vd = "perspective";
				for (var b = 0; b < a.length; b++) "undefined" !== typeof document.documentElement.style[a[b] +
					"Transform"] && (this.Ia = "-" + a[b].toLowerCase() + "-", this.cd = a[b] +
					"Transition", this.Sa = a[b] + "Transform", this.vd = a[b] + "Perspective");
				this.mj = U();
				this.Z = V();
				this.Tc = this.mj;
				this.Z && (this.Tc = !1);
				this.Bc = !0;
				this.xf = !1;
				if (this.Sd || this.sg) this.jm(80), this.Wg = 2;
				this.Nc("Pano2VR player " + this.hl() + " - Prefix:" + this.Ia +
					", " + (this.mj ? "CSS 3D available" : "CSS 3D not available") + ", " + (this.Z ?
						"WebGL available" : "WebGL not available"));
				W && this.M("Pano2VR Debug version!");
				try {
					window.AudioContext = window.AudioContext || window.webkitAudioContext, this.qa =
						new AudioContext
				} catch (d) {
					this.qa = null
				}
				this.Lc && (!this.Kj || 9 > Number(this.od)) && (this.qa = null);
				this.Lc && !this.Sd && 12 <= Number(this.od) && (this.qa = null);
				this.dh = this.ul ? this.Lc && this.Kj && 10 <= Number(this.od) ? !0 : !1 : !0
			};
			c.prototype.M = function(a) {
				if (W) {
					var b = document.getElementById("gg_debug");
					b && (b.innerHTML = a.toString() + "<br />");
					window.console && window.console.log(a)
				}
			};
			c.prototype.Nc = function(a) {
				var b = document.getElementById("gg_debug");
				b && (b.innerHTML = a + "<br />");
				window.console && window.console.log(a)
			};
			c.prototype.jm = function(a) {
				this.we = a
			};
			c.prototype.up = function(a) {
				this.crossOrigin = a
			};
			c.prototype.wp = function(a) {
				this.jf = a
			};
			c.prototype.mo = function() {
				return this.di
			};
			c.prototype.tp = function(a) {
				this.Ld = a
			};
			c.prototype.Ln = function() {
				return this.Ld
			};
			c.prototype.Un = function() {
				return this.tg
			};
			c.prototype.Vn = function() {
				return this.kf
			};
			c.prototype.Rn = function() {
				return this.l.active
			};
			c.prototype.xp = function(a) {
				this.tg = !!a
			};
			c.prototype.Ch = function() {
				return this.isLoaded
			};
			c.prototype.Tn = function() {
				return !this.isLoaded
			};
			c.prototype.dd = function() {
				return Number(this.o.height) / (2 * Math.tan(Math.PI / 180 * (this.Mb() / 2)))
			};
			c.prototype.lm = function(a, b) {
				this.isFullscreen && (a = window.innerWidth, b = window.innerHeight);
				var d = a - this.margin.left - this.margin.right,
					f = b - this.margin.top - this.margin.bottom;
				if (!(10 >
						d || 10 > f)) {
					var g = window.devicePixelRatio || 1;
					this.yf && (g = 1);
					this.D.style.width = d + "px";
					this.D.style.height = f + "px";
					this.D.style.left = this.margin.left + "px";
					this.D.style.top = this.margin.top + "px";
					if (this.Z) try {
						this.cb && (this.cb.style.position = "absolute", this.cb.style.display = "inline",
							this.cb.style.width = d + "px", this.cb.style.height = f + "px", this.cb
							.width = d * g, this.cb.height = f * g), this.H && (this.sb.width = d * g,
							this.sb.height = f * g, this.H.viewport(0, 0, this.H.drawingBufferWidth,
								this.H.drawingBufferHeight))
					} catch (h) {
						alert(h)
					}
					this.mc &&
						(this.mc.style.width = a + "px", this.mc.style.height = b + "px", this.mc.width = a,
							this.mc.height = b);
					this.Fa && (this.Fa.style.width = a + "px", this.Fa.style.height = b + "px", this.za.style
						.width = a + "px", this.za.style.height = b + "px", this.za.width = a, this.za
						.height = b, this.za.style.left = this.margin.left + "px", this.za.style.top = this
						.margin.top + "px", this.ja && this.ja != this.Fa && (this.ja.style.width = a +
							"px", this.ja.style.height = b + "px"));
					this.Ga && (d = this.Ga.Yc, d.style.width = a + "px", d.style.height = b + "px", d.width =
						a, d.height = b, d.style.left =
						this.margin.left + "px", d.style.top = this.margin.top + "px");
					this.gf && (this.Da = !0);
					d = this.D.offsetWidth;
					f = this.D.offsetHeight;
					if (this.o.width != d || this.o.height != f) this.o.width = d, this.o.height = f;
					this.uq();
					this.ja && this.ja.ggUpdateSize && this.ja.ggUpdateSize(a, b);
					this.Y("sizechanged", {
						ih: a,
						pg: b
					})
				}
			};
			c.prototype.Ne = function() {
				this.ak = !0
			};
			c.prototype.Sc = function() {
				this.lm(this.Nd.offsetWidth, this.Nd.offsetHeight)
			};
			c.prototype.zo = function() {
				var a = {
					width: 0,
					height: 0
				};
				a.width = this.o.width;
				a.height = this.o.height;
				return a
			};
			c.prototype.qe = function() {
				var a = {
						x: 0,
						y: 0
					},
					b = this.D;
				if (b.offsetParent) {
					do a.x += b.offsetLeft, a.y += b.offsetTop, b = b.offsetParent; while (b)
				}
				return a
			};
			c.prototype.Jp = function(a) {
				this.ba = a
			};
			c.prototype.zp = function(a, b, d, f) {
				this.margin.left = a;
				this.margin.top = b;
				this.margin.right = d;
				this.margin.bottom = f;
				this.ba = this.skinObj;
				this.Ne()
			};
			c.prototype.sn = function(a) {
				0 == a && (this.C.Ad = !1);
				1 == a && (this.C.Ad = !0);
				2 == a && (this.C.Ad = !this.C.Ad);
				this.Y("viewmodechanged", {})
			};
			c.prototype.xo = function() {
				return 1 == this.C.Ad ?
					1 : 0
			};
			c.prototype.wk = function(a, b) {
				this.A.mode = 1 == b && 0 < this.A.mode ? 0 : Math.round(a);
				this.update();
				this.ia && (this.ia.changePolygonMode(a, b), this.ia.update());
				this.Y("polymodechanged", {})
			};
			c.prototype.mm = function(a) {
				var b = this.A.ob.indexOf(a); - 1 == b ? (this.A.ob.push(a), this.A.Sb.push(0), this.A.Pc.push(
					1)) : this.A.Pc[b] = 1;
				this.update()
			};
			c.prototype.ll = function(a) {
				var b = this.A.ob.indexOf(a); - 1 != b && (this.A.Pc[b] = 0, this.A.pi.push(a), this.update())
			};
			c.prototype.gq = function(a) {
				var b = this.A.ob.indexOf(a); - 1 == b ||
					-1 != b && 0 == this.A.Pc[b] ? this.mm(a) : this.ll(a);
				this.update()
			};
			c.prototype.qn = function(a, b, d, f, g) {
				for (var h = 0; h < this.R.length; h++) {
					var l = this.R[h];
					"poly" != l.type || l.id != a && "" != a || (l.ic = b, l.hc = d, l.lc = f, l.kc = g)
				}
				"" == a && (this.A.ic = b, this.A.hc = d, this.A.lc = f, this.A.kc = g);
				this.update()
			};
			c.prototype.nn = function(a) {
				this.Ga && (this.Ga.Oj = 0 == a ? !0 : 1 == a ? !1 : !this.Ga.Oj, this.update())
			};
			c.prototype.oo = function() {
				return this.A.mode
			};
			c.prototype.tn = function() {
				this.Y("viewstatechanged", {})
			};
			c.prototype.yo = function() {
				return 0
			};
			c.prototype.ao = function(a) {
				return (a = this.Uh[a]) ? a.type : "web"
			};
			c.prototype.$n = function(a) {
				return (a = this.Uh[a]) ? a : {}
			};
			c.prototype.ho = function(a, b) {
				var d = [];
				a || (a = this.Xa);
				var f = this.Od[a];
				f && (a = f);
				"" === a && 0 < Object.keys(this.Ac).length && (a = Object.keys(this.Ac)[0]);
				this.Ac[a] && this.Ac[a][b] && (d.push(this.Ac[a][b].y), d.push(this.Ac[a][b].x));
				return d
			};
			c.prototype.io = function(a, b) {
				var d = [];
				a || (a = this.Xa);
				var f = this.Od[a];
				f && (a = f);
				"" === a && 0 < Object.keys(this.Ac).length && (a = Object.keys(this.Ac)[0]);
				this.pf[a] &&
					this.pf[a][b] && (d.push(this.pf[a][b].x), d.push(this.pf[a][b].y));
				return d
			};
			c.prototype.Zn = function(a) {
				var b = this.Od[a];
				b && (a = b);
				b = [];
				for (var d in this.Uh) b.push(d);
				for (d = 0; d < b.length; d++)
					if (this.Ac[a][b[d]]) return b[d];
				return ""
			};
			c.prototype.ol = function(a, b, d) {
				a = Math.atan2(a + 1, d);
				var f = Math.atan2(b + 1, d);
				b = Math.sin(a);
				d = Math.sin(f);
				a = Math.cos(a);
				f = Math.cos(f);
				this.Pk.$a(0, 0, -1);
				this.Ok.$a(a, 0, -b);
				this.Qk.$a(-a, 0, -b);
				this.Rk.$a(0, f, -d);
				this.Nk.$a(0, -f, -d)
			};
			c.prototype.Ri = function(a) {
				a = this.Yf(a, this.Pk);
				a = this.Yf(a, this.Ok);
				a = this.Yf(a, this.Qk);
				a = this.Yf(a, this.Rk);
				return a = this.Yf(a, this.Nk)
			};
			c.prototype.Am = function(a) {
				if (!this.Bc && this.Io != a) {
					this.Io = a;
					var b = this.margin.left + this.o.width / 2 + "px ";
					b += this.margin.top + this.o.height / 2 + "px ";
					this.Fa.style[this.vd] = a + "px";
					this.Fa.style[this.vd + "Origin"] = b;
					this.D.style[this.vd] = a + "px";
					this.D.style[this.vd + "Origin"] = b
				}
			};
			c.prototype.Wk = function() {
				return this.B.be || this.B.rd || this.Z && (4 != this.Ka || 0 != this.rc) ? !1 : !0
			};
			c.prototype.Zg = function() {
				var a = new r.ya(0,
						0, -100),
					b = this.dd();
				var d = 100 / this.f.c;
				var f = this.h.width / this.h.height;
				var g = this.o.height * d * f;
				d *= this.o.height;
				for (var h = this.Wk(), l = 0; l < this.R.length; l++) {
					var k = this.R[l];
					if ("point" == k.type) {
						var q = !1;
						if (2 == this.kb) {
							var p = (this.pan.c - k.pan) / 100 / f * g;
							var t = (this.i.c - k.i) / 100 * d;
							Math.abs(p) < this.o.width / 2 + 500 && Math.abs(t) < this.o.height / 2 + 500 && (
								q = !0)
						} else a.$a(0, 0, -100), a.xa(-k.i * Math.PI / 180), a.Ea(k.pan * Math.PI / 180), a.Ea(-
								this.pan.c * Math.PI / 180), a.xa(this.i.c * Math.PI / 180), a.nb(this.O.c *
								Math.PI / 180),
							.01 > a.z ? (t = -b / a.z, p = a.x * t, t *= a.y, Math.abs(p) < this.o.width / 2 +
								500 && Math.abs(t) < this.o.height / 2 + 500 && (q = !0)) : t = p = 0;
						k.Qb = p + this.o.width / 2;
						k.vb = t + this.o.height / 2;
						k.visible = q;
						k.px = k.Qb;
						k.py = k.vb;
						k.visible = k.visible;
						if (k.b && k.b.onUpdatePosition) k.b.onUpdatePosition(this, k);
						else k.b && k.b.__div && ("none" != k.b.__div.style[this.cd] && (k.b.__div.style[this
							.cd] = "none"), k.b.ggUse3d ? (this.Bc || this.Am(b), 2 == this.kb ? (k.b
							.__div.style[this.Sa] = "scale(" + (100 / this.f.c * 500 / k.b
								.gg3dDistance).toFixed(10) + ")", k.b.__div.style.left =
							this.margin.left + p + this.o.width / 2 + "px", k.b.__div.style.top =
							this.margin.top + t + this.o.height / 2 + "px") : (k.b.__div.style
							.width = "1px", k.b.__div.style.height = "1px", p = "", this.Bc && (p +=
								"perspective(" + b + "px) "), p += "translate3d(0px,0px," + b +
							"px) ", p += "rotateZ(" + this.O.c.toFixed(10) + "deg) ", p +=
							"rotateX(" + this.i.c.toFixed(10) + "deg) ", p += "rotateY(" + (-this
								.pan.c).toFixed(10) + "deg) ", p += "rotateY(" + k.pan.toFixed(10) +
							"deg) ", p += "rotateX(" + (-k.i).toFixed(10) + "deg) ", p +=
							"translate3d(0px,0px," + (-1 * k.b.gg3dDistance).toFixed(10) +
							"px) ", k.b.__div.style[this.Sa + "Origin"] = "0% 0%", k.b.__div.style[
								this.Sa] = p, k.b.__div.style.left = this.margin.left + this.o
							.width / 2 + "px", k.b.__div.style.top = this.margin.top + this.o
							.height / 2 + "px")) : q && h ? (k.b.__div.style.left = this.margin.left +
							p + this.o.width / 2 + "px", k.b.__div.style.top = this.margin.top + t +
							this.o.height / 2 + "px") : (k.b.__div.style.left = "-1000px", k.b.__div
							.style.top = "-1000px"))
					}
					if ("poly" == k.type) {
						var u = [];
						if (2 == this.kb)
							for (k.Wd = [], q = 0; q < k.Nf.length; q++) t = k.Nf[q], p = (this.pan.c - t.pan) /
								100 / f * g, t = (this.i.c -
									t.i) / 100 * d, p += this.margin.left + this.o.width / 2, t += this.margin
								.top + this.o.height / 2, k.Wd.push({
									Qb: p,
									vb: t
								});
						else {
							for (q = 0; q < k.Nf.length; q++) t = k.Nf[q], a.$a(0, 0, -100), a.xa(-t.i * Math
									.PI / 180), a.Ea(t.pan * Math.PI / 180), a.Ea(-this.pan.c * Math.PI / 180),
								a.xa(this.i.c * Math.PI / 180), a.nb(this.O.c * Math.PI / 180), u.push(a
									.clone());
							u = this.Ri(u);
							if (0 < u.length)
								for (q = 0; q < u.length; q++) a = u[q], .1 > a.z ? (t = -b / a.z, p = this.o
										.width / 2 + a.x * t, t = this.o.height / 2 + a.y * t) : t = p = 0, a
									.Qb = p, a.vb = t;
							k.Wd = u
						}
					}
				}
			};
			c.prototype.Nn = function() {
				for (var a = [],
						b = 0; b < this.R.length; b++) {
					var d = this.R[b];
					"point" == d.type && d.b && d.b.__div && a.push(d.b.__div)
				}
				return a
			};
			c.prototype.ga = function(a, b) {
				a = Number(a);
				isNaN(b) && (b = 0);
				0 > b && (b = 0);
				1 < b && (b = 1);
				return "rgba(" + (a >> 16 & 255) + "," + (a >> 8 & 255) + "," + (a & 255) + "," + b + ")"
			};
			c.prototype.ap = function() {
				var a;
				if (this.za && (this.A.wg != this.A.mode && (this.A.wg = this.A.mode, this.za.style.visibility =
						0 < this.A.mode ? "inherit" : "hidden"), 0 <= this.A.mode || 0 < this.A.ob.length)) {
					this.ca || (this.ca = this.za.getContext("2d"));
					if (this.ca.width != this.o.width ||
						this.ca.height != this.o.height) this.ca.width = this.o.width, this.ca.height = this.o
						.height;
					this.ca.clear ? this.ca.clear() : this.ca.clearRect(0, 0, this.za.width, this.za.height);
					var b = 1;
					0 >= this.A.mode && (b = 0);
					3 == this.A.mode && (b = this.A.ra);
					for (a = 0; a < this.R.length; a++) {
						var d = this.R[a];
						var f = b;
						if ("poly" == d.type) {
							var g = d.Wd;
							2 == this.A.mode && (f = d.ra);
							var h = this.A.ob.indexOf(d.id); - 1 != h && (f = this.A.Sb[h]);
							this.ca.fillStyle = this.ga(d.ic, d.hc * f);
							this.ca.strokeStyle = this.ga(d.lc, d.kc * f);
							if (0 < g.length) {
								this.ca.beginPath();
								for (d = 0; d < g.length; d++) f = g[d], 0 == d ? this.ca.moveTo(f.Qb, f.vb) :
									this.ca.lineTo(f.Qb, f.vb);
								this.ca.closePath();
								this.ca.stroke();
								this.ca.fill()
							}
						}
					}
				}
			};
			c.prototype.ml = function(a, b, d) {
				var f, g = !1;
				var h = 0;
				for (f = a.length - 1; h < a.length; f = h++) {
					var l = a[h];
					f = a[f];
					l.vb > d != f.vb > d && b < (f.Qb - l.Qb) * (d - l.vb) / (f.vb - l.vb) + l.Qb && (g = !g)
				}
				return g
			};
			c.prototype.rh = function(a, b) {
				var d = -1;
				if ((0 <= this.A.mode || 0 < this.A.ob.length) && this.Fo())
					for (var f = 0; f < this.R.length; f++) {
						var g = this.R[f];
						"poly" == g.type && g.Wd && 0 < g.Wd.length && (-1 !=
							this.A.mode || -1 != this.A.ob.indexOf(g.id)) && this.ml(g.Wd, a, b) && (d = f,
							g.Qb = a, g.vb = b)
					}
				return 0 <= d ? this.R[d] : !1
			};
			c.prototype.Fo = function() {
				return 4 == this.ta() && 0 == this.rc
			};
			c.prototype.Mb = function() {
				var a = 0,
					b = this.ta(),
					d = this.o;
				switch (this.f.mode) {
					case 0:
						a = this.f.c / 2;
						break;
					case 1:
						a = 4 == b ? 180 * Math.atan(d.height / d.width * Math.tan(this.f.c / 2 * Math.PI /
							180)) / Math.PI : d.height / d.width * this.f.c / 2;
						break;
					case 2:
						a = Math.sqrt(d.width * d.width + d.height * d.height);
						a = 4 == b ? 180 * Math.atan(d.height / a * Math.tan(this.f.c / 2 * Math.PI /
							180)) / Math.PI : d.height / a * this.f.c / 2;
						break;
					case 3:
						a = 4 * d.height / 3 > d.width ? this.f.c / 2 : 4 == b ? 180 * Math.atan(4 * d.height /
								(3 * d.width) * Math.tan(this.f.c / 2 * Math.PI / 180)) / Math.PI : 4 * d
							.height / (3 * d.width) * (this.f.c / 2)
				}
				return 2 * a
			};
			c.prototype.Pn = function(a, b) {
				a || (a = this.Mb());
				b || (b = this.ta());
				return 4 == b ? 180 * Math.atan(this.ee() * Math.tan(a / 2 * Math.PI / 180)) / Math.PI : a *
					this.ee()
			};
			c.prototype.ee = function() {
				return this.o.width / this.o.height
			};
			c.prototype.tk = function(a) {
				var b = this.f.c;
				a /= 2;
				var d = this.ta();
				switch (this.f.mode) {
					case 0:
						b =
							2 * a;
						break;
					case 1:
						a = 4 == d ? 180 * Math.atan(this.o.width / this.o.height * Math.tan(a * Math.PI /
							180)) / Math.PI : this.o.width / this.o.height * a;
						b = 2 * a;
						break;
					case 2:
						b = Math.sqrt(this.o.width * this.o.width + this.o.height * this.o.height);
						a = 4 == d ? 180 * Math.atan(b / this.o.height * Math.tan(a * Math.PI / 180)) / Math
							.PI : b / this.o.height * a;
						b = 2 * a;
						break;
					case 3:
						4 * this.o.height / 3 > this.o.width ? b = 2 * a : (b = 3 * this.o.width / (4 * this.o
								.height), a = 4 == d ? 180 * Math.atan(b * Math.tan(a * Math.PI / 180)) /
							Math.PI : b * a, b = 2 * a)
				}
				return b
			};
			c.prototype.ni = function(a) {
				this.f.c =
					this.tk(a)
			};
			c.prototype.Xf = function() {
				var a = this.Vl;
				a.pan = this.pan.c;
				a.i = this.i.c;
				a.f = this.f.c;
				this.Xe(a);
				this.Xe(a);
				this.Xe(a);
				this.pan.c = a.pan;
				this.i.c = a.i;
				this.f.c = a.f
			};
			c.prototype.Xe = function(a) {
				var b = this.o.width / this.o.height;
				if (2 == this.kb) {
					if (0 < this.f.Gg) {
						var d = this.uc;
						this.h.J && 0 < this.h.J.length && (d = this.h.J[0].height);
						this.f.min = 100 * this.o.height / (d * this.f.Gg)
					}
					var f = a.f / 2;
					d = f * b;
					var g = this.h.width / this.h.height * 50;
					b = this.C.gm ? 2 * Math.min(50, g / b) : 2 * Math.max(50, g / b);
					a.f < this.f.min && (a.f = this.f.min);
					a.f > b && (a.f = b);
					50 < f ? a.i = 0 : (50 < a.i + f && (a.i = 50 - f), -50 > a.i - f && (a.i = -50 + f));
					d > g ? a.pan = 0 : (a.pan + d > g && (a.pan = g - d, this.l.active && (this.l.speed = -this
						.l.speed, this.pan.d = 0)), a.pan - d < -g && (a.pan = -g + d, this.l.active &&
						(this.l.speed = -this.l.speed, this.pan.d = 0)))
				} else {
					0 < this.f.Gg && (d = this.uc, this.h.J && 0 < this.h.J.length && (d = this.h.J[0].height),
						this.f.min = 360 * Math.atan2(this.o.height / 2, d / 2 * this.f.Gg) / Math.PI);
					a.f < this.f.min && (a.f = this.f.min);
					g = this.f.max;
					var h = 179;
					f = this.Mb() / 2;
					d = b * f;
					4 == this.ta() ? d = 180 * Math.atan(b *
							Math.tan(f * Math.PI / 180)) / Math.PI : 9 == this.ta() ? (g = this.f.xj, h = 355) :
						12 == this.ta() && (g = this.f.wj, h = 360);
					this.Z || (g = Math.max(160, g));
					a.f > g && (a.f = g);
					12 == this.ta() && (2 * d > h && (a.f = h / b), f = this.Mb() / 2, 2 * f > h && (a.f = h),
						f = this.Mb() / 2, d = b * f);
					2 * f > this.i.max - this.i.min && 180 > this.i.max - this.i.min && (f = (this.i.max - this
						.i.min) / 2, a.f = this.tk(2 * f));
					90 > this.i.max ? a.i + f > this.i.max && (a.i = this.i.max - f) : a.i > this.i.max && (a
						.i = this.i.max); - 90 < this.i.min ? a.i - f < this.i.min && (a.i = this.i.min + f) : a
						.i < this.i.min && (a.i = this.i.min);
					b = this.pan.max -
						this.pan.min;
					if (359.99 > b) {
						g = 90;
						h = Math.tan(f * Math.PI / 180);
						var l = Math.tan((Math.abs(a.i) + f) * Math.PI / 180);
						l = Math.sqrt(l * l + 1) / Math.sqrt(h * h + 1);
						f = 180 * Math.atan(l * Math.tan(d * Math.PI / 180)) / Math.PI;
						2 * f > b && (l = Math.tan(b * Math.PI / 360) / Math.tan(d * Math.PI / 180), b = l *
							Math.sqrt(h * h + 1), l = Math.sqrt(b * b - 1), g = 180 / Math.PI * Math.atan(l)
						);
						a.pan + f > this.pan.max && (a.pan = this.pan.max - f, this.l.active && (this.l
							.speed = -this.l.speed, this.pan.d = 0));
						a.pan - f < this.pan.min && (a.pan = this.pan.min + f, this.l.active && (this.l
							.speed = -this.l.speed,
							this.pan.d = 0));
						a.i + d > g && (a.i = g - d);
						a.i - d < -g && (a.i = -g + d)
					}
				}
			};
			c.prototype.update = function(a) {
				void 0 === a && (a = 0);
				this.Da = !0;
				a && (this.$f = Math.max(1 * a, this.$f))
			};
			c.prototype.Xk = function() {
				return this.ia ? !!this.ia.isTileLoading : 0 < this.Tb || 0 < this.tc
			};
			c.prototype.$g = function() {
				var a = Date.now();
				if (this.Fb) {
					if (this.ia)
						if (this.nq(), 2 === this.kb) this.Xf(), this.Zg();
						else if (0 === this.kb) {
						var b = this.dd();
						this.ol(this.o.width / 2, this.o.height / 2, b);
						this.Zg()
					}
				} else 2 === this.kb ? (this.Zg(), this.Z ? (this.oa.Zj(), this.oa.Pl()) :
					this.Zj()) : 0 === this.kb && (!this.Z || 4 == this.Ka && 0 == this.rc ? (b = this.dd(),
					this.ol(this.o.width / 2, this.o.height / 2, b), this.Zg(), this.eh ? this.oa.tq() :
					this.Hm && this.Gm(), this.Bm(), this.Z ? (this.s.hd ? 14 == this.s.format ? this.oa
						.sq() : this.oa.Nm() : 0 < this.h.J.length ? this.oa.zq() : this.oa.Bq(), this
						.oa.Pl()) : (this.Tc ? 0 < this.h.J.length ? this.qq() : this.pq() : this.ah &&
						this.mq(), this.ap()), this.Ga && this.Ga.$o()) : (this.oa.Nm(), this.Zg(), this
					.Eo()));
				b = Date.now();
				50 < b - a ? (this.M("Time between frames: " + (b - a)), this.yf || (2 < this.Qj ?
						(this.yf = !0, this.M("disabling HighDPI rendering"), this.Sc()) : this.Qj++)) : this
					.Qj = 0;
				this.gf && this.h.cm++
			};
			c.prototype.pq = function() {
				var a = !1;
				if (this.o.width != this.D.offsetWidth || this.o.height != this.D.offsetHeight) this.o.width =
					this.D.offsetWidth, this.o.height = this.D.offsetHeight, this.D.style[this.Sa + "OriginX"] =
					this.o.width / 2 + "px", this.D.style[this.Sa + "OriginY"] = this.o.height / 2 + "px", a = !
					0;
				var b = Math.round(this.dd());
				this.xg == b && !a || this.Bc || (this.xg = b, this.D.style[this.vd] = b + "px");
				this.qb.wn(this.pan.c,
					this.i.c, this.O.c, this.ab);
				for (a = 0; 6 > a; a++) {
					var d;
					if (d = this.qb.fb[a]) {
						var f = "";
						this.Bc ? (f += "translate3d(" + this.o.width / 2 + "px," + this.o.height / 2 +
								"px,0px) ", f += "perspective(" + b + "px) ", f += "translate3d(0px,0px," + b +
								"px) ") : f += "translate3d(" + this.o.width / 2 + "px," + this.o.height / 2 +
							"px," + b + "px) ";
						f += "rotateZ(" + Number(this.O.c).toFixed(10) + "deg) ";
						f += "rotateX(" + Number(this.i.c).toFixed(10) + "deg) ";
						f += "rotateY(" + Number(-this.pan.c).toFixed(10) + "deg) ";
						d.il && (f += d.il, d.hb || (f = "translate3d(-10px,-10px,0px) scale(0.001,0.001)"),
							d.K.style[this.Sa] = f)
					}
				}
			};
			c.prototype.mq = function() {
				this.Xf();
				var a;
				this.mc && (a = this.mc.getContext("2d"));
				if (this.o.width !== this.D.offsetWidth || this.o.height !== this.D.offsetHeight) this.o.width =
					this.D.offsetWidth, this.o.height = this.D.offsetHeight;
				if (a) {
					var b = a.canvas.width / 2,
						d = a.canvas.height / 2,
						f = a.createRadialGradient(b, d, 5, b, d, Math.max(b, d));
					f.addColorStop(0, "#333");
					f.addColorStop(1, "#fff");
					a.rect(0, 0, a.canvas.width, a.canvas.height);
					a.fillStyle = f;
					a.fill();
					a.fillStyle = "#f00";
					a.font = "20px Helvetica";
					a.textAlign = "center";
					a.fillText("Pan: " + this.pan.c.toFixed(1), b, d - 60);
					a.fillText("Tilt: " + this.i.c.toFixed(1), b, d - 30);
					a.fillText("Fov: " + this.f.c.toFixed(1), b, d);
					a.fillText("Node: " + this.Vk(), b, d + 30);
					a.fillText("Title: " + this.Lf.title, b, d + 60)
				}
			};
			c.prototype.nq = function() {
				this.Xf();
				if (this.o.width !== this.D.offsetWidth || this.o.height !== this.D.offsetHeight) this.o.width =
					this.D.offsetWidth, this.o.height = this.D.offsetHeight;
				this.ia && this.ia.setPan && (this.ia.setPan(this.pan.c), this.ia.setTilt(this.i.c), this.ia
					.setFov(this.f.c))
			};
			c.prototype.Zj = function() {
				this.za.style.visibility = "inherit";
				this.ca || (this.ca = this.za.getContext("2d"));
				if (this.ca.width != this.o.width || this.ca.height != this.o.height) this.ca.width = this.o
					.width, this.ca.height = this.o.height;
				this.ca.clear ? this.ca.clear() : this.ca.clearRect(0, 0, this.za.width, this.za.height);
				this.tc = 0;
				var a = 100 / this.f.c;
				var b = this.h.width / this.h.height;
				var d = this.o.height * a * b;
				a *= this.o.height;
				var f = (this.pan.c / 100 / b - .5) * d + this.o.width / 2;
				for (var g = (this.i.c / 100 - .5) * a + this.o.height / 2, h,
						l, k, q, p = 0; this.h.J.length >= p + 2 && this.h.J[p + 1].width > d;) p++;
				var t;
				var u = [];
				for (t = this.h.J.length - 1; t >= p;) {
					b = this.h.J[t];
					if (b.cache) {
						var w = {
							Za: 0,
							zb: 0
						};
						w.Bb = b.L - 1;
						w.Cb = b.fa - 1
					} else {
						w = {};
						var v = -g / a * (b.height / this.h.G);
						h = (-f + this.o.width) / d * (b.width / this.h.G);
						l = (-g + this.o.height) / a * (b.height / this.h.G);
						w.Za = Math.min(Math.max(0, Math.floor(-f / d * (b.width / this.h.G))), b.L - 1);
						w.zb = Math.min(Math.max(0, Math.floor(v)), b.fa - 1);
						w.Bb = Math.min(Math.max(0, Math.floor(h)), b.L - 1);
						w.Cb = Math.min(Math.max(0, Math.floor(l)),
							b.fa - 1)
					}
					u[t] = w;
					var y = !0;
					for (l = w.zb; l <= w.Cb; l++)
						for (h = w.Za; h <= w.Bb; h++) q = h + l * b.L, v = b.U[q], v || (v = new r.Id, b.U[q] =
							v), this.Tb < this.Wg ? v.h || (this.nj++, v.h = new Image, v.h.onload = this
							.cq(), v.h.onerror = this.ui(v), v.h.onabort = this.ui(v), v.h.crossOrigin =
							this.crossOrigin, v.h.setAttribute("src", this.Ke(0, t, h, l)), b.cache && this
							.Wb.push(v.h), this.Tb++, this.Da = !0) : this.tc++, v.h && v.h.complete || (
							y = !1), v.visible = !0;
					w.tj = y;
					t--
				}
				for (t = this.h.J.length - 1; t >= p;) {
					b = this.h.J[t];
					if (u[t] && 0 <= u[t].Za)
						for (w = u[t], l = w.zb; l <= w.Cb; l++)
							for (h =
								w.Za; h <= w.Bb; h++) q = h + l * b.L, (v = b.U[q]) || (v = b.U[q] = new r.Id),
								v.h && v.h.complete && (q = f + (-this.h.Ja + this.h.G * h) * d / b.width, this
									.ca.drawImage(v.h, q, g + (-this.h.Ja + this.h.G * l) * a / b.height, v.h
										.width * d / b.width, v.h.height * a / b.height)), v.visible = !0;
					t--
				}
				for (d = 0; d < this.h.J.length; d++)
					if (b = this.h.J[d], !b.cache)
						for (k in b.U) b.U.hasOwnProperty(k) && (v = b.U[k], v.visible || (v.h = null, delete b
							.U[k]));
				if (0 <= this.A.mode || 0 < this.A.ob.length)
					for (d = 1, 0 >= this.A.mode && (d = 0), 3 == this.A.mode && (d = this.A.ra), k = 0; k <
						this.R.length; k++)
						if (b =
							this.R[k], f = d, "poly" == b.type && (a = b.Wd, 2 == this.A.mode && (f = b.ra), g =
								this.A.ob.indexOf(b.id), -1 != g && (f = this.A.Sb[g]), 0 < a.length)) {
							this.ca.fillStyle = this.ga(b.ic, b.hc * f);
							this.ca.strokeStyle = this.ga(b.lc, b.kc * f);
							this.ca.beginPath();
							for (b = 0; b < a.length; b++) f = a[b], 0 == b ? this.ca.moveTo(f.Qb, f.vb) : this
								.ca.lineTo(f.Qb, f.vb);
							this.ca.closePath();
							this.ca.stroke();
							this.ca.fill()
						} this.ad = !1
			};
			c.prototype.bq = function(a) {
				var b = this;
				return function() {
					b.update();
					b.ad = !0;
					a.loaded = !0;
					a.h && !a.K && b.D.appendChild(a.h);
					b.Tb &&
						b.Tb--;
					a.h && a.Qa && (a.Qa.drawImage(a.h, 0, 0), a.h = null)
				}
			};
			c.prototype.cq = function() {
				var a = this;
				return function() {
					a.Da = !0;
					a.ad = !0;
					a.Tb && a.Tb--
				}
			};
			c.prototype.ui = function(a) {
				var b = this;
				return function() {
					b.Da = !0;
					b.ad = !0;
					b.Tb && b.Tb--;
					a.h = null
				}
			};
			c.prototype.fl = function(a, b, d) {
				d.Za = a.width / this.h.G * b.fg;
				d.zb = a.height / this.h.G * b.gg;
				d.Bb = a.width / this.h.G * b.Dg;
				d.Cb = a.height / this.h.G * b.Eg;
				d.Za = Math.min(Math.max(0, Math.floor(d.Za)), a.L - 1);
				d.zb = Math.min(Math.max(0, Math.floor(d.zb)), a.fa - 1);
				d.Bb = Math.min(Math.max(0,
					Math.floor(d.Bb)), a.L - 1);
				d.Cb = Math.min(Math.max(0, Math.floor(d.Cb)), a.fa - 1)
			};
			c.prototype.Cp = function(a) {
				a = Math.round(a);
				this.Bc = 0 < (a & 1);
				this.xf = 0 < (a & 2);
				this.Bi = 0 < (a & 4);
				this.yf = 0 < (a & 8);
				4096 <= a && (this.Tc = 0 < (a & 4096), this.Z = 0 < (a & 8192), this.ah = 0 < (a & 32768))
			};
			c.prototype.ro = function() {
				var a = 0;
				this.Bc && (a |= 1);
				this.xf && (a |= 2);
				this.Bi && (a |= 4);
				this.Tc && (a |= 4096);
				this.Z && (a |= 8192);
				this.ah && (a |= 32768);
				return a
			};
			c.prototype.Dm = function() {
				if (!(6 > this.qb.fb.length))
					for (var a = 0; 6 > a; a++) {
						var b = this.qb.fb[a];
						var d = [];
						d.push(new r.ya(-1, -1, -1, 0, 0));
						d.push(new r.ya(1, -1, -1, 1, 0));
						d.push(new r.ya(1, 1, -1, 1, 1));
						d.push(new r.ya(-1, 1, -1, 0, 1));
						for (var f = 0; 4 > f; f++) 4 > a ? d[f].Ea(-Math.PI / 2 * a) : d[f].xa(Math.PI / 2 * (
							4 == a ? -1 : 1)), this.ab && (d[f].nb(this.ab.O * Math.PI / 180), d[f].xa(-this
							.ab.pitch * Math.PI / 180)), d[f].Ce(-this.pan.c), d[f].Fd(this.i.c), d[f].De(
							this.O.c);
						d = this.Ri(d);
						b.hb = 0 < d.length;
						if (b.hb) {
							b = b.qf;
							b.fg = d[0].sd;
							b.Dg = d[0].sd;
							b.gg = d[0].Ub;
							b.Eg = d[0].Ub;
							for (f = 1; f < d.length; f++) b.fg = Math.min(b.fg, d[f].sd), b.Dg = Math.max(b.Dg,
								d[f].sd), b.gg = Math.min(b.gg, d[f].Ub), b.Eg = Math.max(b.Eg, d[f].Ub);
							b.Mf = b.Dg - b.fg;
							b.hh = b.Eg - b.gg;
							b.scale = Math.max(b.Mf, b.hh)
						} else b.qf.Mf = -1, b.qf.hh = -1
					}
			};
			c.prototype.vj = function() {
				for (var a = 0; a < this.h.J.length; a++) {
					var b = this.h.J[a],
						d;
					for (d in b.U) b.U.hasOwnProperty(d) && (b.U[d].visible = !1)
				}
			};
			c.prototype.cj = function() {
				var a = 0,
					b = Math.tan(Math.min(this.Mb(), 175) * Math.PI / 360),
					d = this.o.height / (2 * b);
				d *= 1 + this.o.width / this.o.height * b / 2;
				for (d *= Math.pow(2, 1 < this.devicePixelRatio ? this.h.Il : this.h.Hl); this.h.J.length >=
					a + 2 && !this.h.J[a + 1].uf && this.h.J[a + 1].width > d;) a++;
				return a
			};
			c.prototype.qq = function() {
				var a = !1,
					b, d, f;
				if (this.o.width !== this.D.offsetWidth || this.o.height !== this.D.offsetHeight) this.o.width =
					this.D.offsetWidth, this.o.height = this.D.offsetHeight, this.D.style[this.Sa + "OriginX"] =
					this.o.width / 2 + "px", this.D.style[this.Sa + "OriginY"] = this.o.height / 2 + "px", a = !
					0;
				var g = Math.round(this.dd());
				if (this.xg != g || a) this.xg = g, this.Bc || (this.D.style[this.vd] = g + "px", this.D.style[
					this.vd + "Origin"] = "50% 50%");
				this.tc = 0;
				if (0 <
					this.h.J.length) {
					this.Dm();
					this.vj();
					var h = "";
					for (b = 0; 6 > b; b++) {
						var l = this.qb.fb[b];
						l.hb && (h = h + b + ",")
					}
					h = this.cj();
					var k;
					for (k = this.h.J.length - 1; k >= h;) {
						a = this.h.J[k];
						var q = 1;
						k == this.h.J.length - 1 && 0 == this.h.Ja && (q = this.h.G / (this.h.G - 2));
						for (b = 0; 6 > b; b++) {
							l = this.qb.fb[b];
							var p = l.qf;
							if (l.hb && 0 < p.Mf && 0 < p.hh && 0 < p.scale || a.cache) {
								l.Da = !1;
								var t = {};
								a.cache ? (t.Za = 0, t.zb = 0, t.Bb = a.L - 1, t.Cb = a.fa - 1) : this.fl(a, p,
									t);
								for (f = t.zb; f <= t.Cb; f++)
									for (d = t.Za; d <= t.Bb; d++) {
										var u = d + f * a.L + b * a.L * a.fa;
										(p = a.U[u]) || (p = a.U[u] = new r.Id);
										if (!p.K && this.Tb < this.Wg) {
											if (0 < this.xi.length) {
												p.K = this.xi.shift();
												for (u = this.D.firstChild; u && u.Rd && (-1 == u.Rd || u.Rd >=
														k);) u = u.nextSibling;
												this.D.insertBefore(p.K, u);
												p.Qa = p.K.getContext("2d")
											} else if (this.wm < this.we) {
												this.wm++;
												p.K = document.createElement("canvas");
												p.K.width = this.h.G + 2 * this.h.Ja;
												p.K.height = this.h.G + 2 * this.h.Ja;
												p.Qa = p.K.getContext("2d");
												p.K.style[this.Sa + "Origin"] = "0% 0%";
												p.K.style.overflow = "hidden";
												p.K.style.position = "absolute";
												for (u = this.D.firstChild; u && u.Rd && (-1 == u.Rd || u.Rd >=
														k);) u =
													u.nextSibling;
												this.D.insertBefore(p.K, u)
											}
											p.K && (this.nj++, p.h = new Image, p.h.crossOrigin = this
												.crossOrigin, p.h.style[this.Sa + "Origin"] = "0% 0%", p.h
												.style.position = "absolute", p.h.style.overflow = "hidden",
												p.K.Rd = k, p.h.onload = this.bq(p), p.h.onerror = this.ui(
													p), p.h.onabort = this.ui(p), p.h.setAttribute("src",
													this.Ke(b, k, d, f)), a.cache && this.Wb.push(p.h), this
												.Tb++, this.Da = !0)
										} else this.tc++;
										if (p.K) {
											u = "";
											this.Bc ? (u += "translate3d(" + this.o.width / 2 + "px," + this.o
													.height / 2 + "px,0px) ", u += " perspective(" + g + "px) ",
													u += "translate3d(0px,0px," +
													g + "px) ") : u += "translate3d(" + this.o.width / 2 +
												"px," + this.o.height / 2 + "px," + g + "px) ";
											u += "rotateZ(" + Number(this.O.c).toFixed(10) + "deg) ";
											u += "rotateX(" + Number(this.i.c).toFixed(10) + "deg) ";
											u += "rotateY(" + Number(-this.pan.c).toFixed(10) + "deg) ";
											this.ab && (u += "rotateX(" + Number(-this.ab.pitch).toFixed(10) +
												"deg) ", u += "rotateZ(" + Number(this.ab.O).toFixed(10) +
												"deg) ");
											u = 4 > b ? u + ("rotateY(" + -90 * b + "deg) ") : u + ("rotateX(" +
												(4 == b ? -90 : 90) + "deg) ");
											if (this.xf) {
												var w = this.h.G / a.width * (2 * k + 1) * (this.Uf / this.h.G);
												w = this.Lc ? 2 /
													Math.tan(this.f.c * Math.PI / 360) * w : 2 * w;
												u += " scale(" + w * q * q + ")"
											} else w = 1 / (q * q);
											u += " translate3d(" + (1 / q * d * this.h.G - this.h.Ja - a.width /
												2) + "px,";
											u += 1 / q * f * this.h.G - this.h.Ja - a.width / 2 + "px,";
											u += -a.width * w / 2 + "px)";
											l.hb && (p.visible = !0, p.K ? p.K.style[this.Sa] = u : p.h && (p.h
												.style[this.Sa] = u))
										}
									}
							}
						}
						k--
					}
					for (g = 0; g < this.h.J.length; g++) {
						a = this.h.J[g];
						for (var v in a.U) a.U.hasOwnProperty(v) && (p = a.U[v], !p.visible && p.K && (a.cache ?
							p.K ? p.K.style[this.Sa] =
							"translate3d(-10px,-10px,0px) scale(0.001,0.001)" : p.h && (p.h.style[this
									.Sa] =
								"") : (p.Qa && p.Qa.clearRect(0, 0, p.Qa.canvas.width, p.Qa.canvas
									.height), this.xi.push(p.K), p.K ? (h =
									"translate3d(-10px,-10px,0px) scale(0.001,0.001)", p.K.style[this
										.Sa] = h, p.K.Rd = -1) : p.loaded && this.D.removeChild(p.h), p
								.K = null, p.h = null, p.Qa = null, delete a.U[v])))
					}
					this.ad = !1
				}
			};
			c.prototype.Bm = function() {
				var a = Math.round(this.dd());
				this.Bc || this.Am(a);
				for (var b = 0; b < this.Ta.length; b++) {
					var d = this.Ta[b];
					d.Fm(a);
					d.b.hidden = !1
				}
			};
			c.prototype.Gm = function() {
				for (var a = Math.round(this.dd()), b = 0; b < this.I.length; b++) {
					var d =
						this.I[b];
					d.ld || (d.Fm(a), d.b.hidden = !1)
				}
			};
			c.prototype.Eo = function() {
				for (var a = 0; a < this.Ta.length; a++) {
					var b = this.Ta[a];
					b.Cf(!1)
				}
				for (a = 0; a < this.I.length; a++) b = this.I[a], b.ld || b.Cf(!1)
			};
			c.prototype.uq = function() {
				for (var a = 0; a < this.I.length; a++) {
					var b = this.I[a];
					b.ld || b.Ne()
				}
				for (a = 0; a < this.Ta.length; a++) b = this.Ta[a], b.Ne()
			};
			c.prototype.Kc = function(a) {
				this.ne = !1;
				try {
					a ? this.cb = a : this.cb = document.createElement("canvas");
					var b = this.Nd.offsetWidth - this.margin.left - this.margin.right,
						d = this.Nd.offsetHeight -
						this.margin.top - this.margin.bottom;
					if (100 > b || 100 > d) d = b = 100;
					var f = window.devicePixelRatio || 1;
					this.yf && (f = 1);
					this.D.style.width = b + "px";
					this.D.style.height = d + "px";
					this.cb.style.width = b + "px";
					this.cb.style.height = d + "px";
					this.cb.width = b * f;
					this.cb.height = d * f;
					this.cb.style.display = "none";
					this.cb.style.touchAction = "none";
					this.D.insertBefore(this.cb, this.D.firstChild);
					var g = this.Mm;
					g.stencil = !0;
					g.depth = !0;
					g.alpha = this.Lc ? !0 : !1;
					this.Sd && 10 <= this.nl[0] && (g.antialias = !1, g.alpha = !1);
					this.H = this.cb.getContext("webgl",
						g);
					this.H || (this.H = this.cb.getContext("experimental-webgl", g));
					if (this.H) {
						var h = this.H;
						this.sb.width = b * f;
						this.sb.height = d * f;
						h.clearColor(0, 0, 0, 0);
						h.enable(this.H.DEPTH_TEST);
						h.viewport(0, 0, 500, 500);
						h.clear(h.COLOR_BUFFER_BIT | h.DEPTH_BUFFER_BIT);
						4096 <= h.getParameter(h.MAX_TEXTURE_SIZE) && !this.tg && (this.we = 1 < f ? 4 * this
							.we : 2 * this.we);
						this.M("Max tile cnt: " + this.we);
						this.oa.rg();
						this.oa.Ih();
						this.oa.pl(this.Gf);
						this.oa.ql();
						this.B && (this.B.rg(), this.B.Kc());
						this.Ga && (this.Ga.rg(), this.Ga.Kc())
					}
				} catch (l) {
					this.M(l)
				}
				this.H ?
					(this.Z = !0, this.Y("webglready", {
						gl: this.H
					})) : alert("Could not initialise WebGL!")
			};
			c.prototype.oc = function(a) {
				return a ? "{" == a.charAt(0) || "/" == a.charAt(0) || 0 < a.indexOf("://") || 0 == a.indexOf(
					"javascript:") ? a : this.Ld + a : this.Ld
			};
			c.prototype.Yd = function(a, b, d) {
				var f = (new RegExp("%0*" + b, "i")).exec(a.toString());
				if (f) {
					f = f.toString();
					var g = d.toString();
					for (f.charAt(f.length - 1) != b && (g = (1 + d).toString()); g.length < f.length - 1;) g =
						"0" + g;
					a = a.replace(f, g)
				}
				return a
			};
			c.prototype.Ke = function(a, b, d, f) {
				var g = this.h.sj -
					1 - b,
					h = this.h.Jl,
					l = "x";
				switch (a) {
					case 0:
						l = "f";
						break;
					case 1:
						l = "r";
						break;
					case 2:
						l = "b";
						break;
					case 3:
						l = "l";
						break;
					case 4:
						l = "u";
						break;
					case 5:
						l = "d"
				}
				for (var k = 0; 3 > k; k++) h = this.Yd(h, "c", a), h = this.Yd(h, "s", l), h = this.Yd(h, "r",
					b), h = this.Yd(h, "l", g), h = this.Yd(h, "x", d), h = this.Yd(h, "y", f), h = this.Yd(
					h, "v", f), h = this.Yd(h, "h", d);
				return this.oc(h)
			};
			c.prototype.kg = function() {
				return this.pan.c
			};
			c.prototype.lo = function() {
				return this.u.pan
			};
			c.prototype.$k = function() {
				for (var a = this.pan.c; - 180 > a;) a += 360;
				for (; 180 < a;) a -= 360;
				return a
			};
			c.prototype.pe = function() {
				for (var a = this.pan.c - this.pan.zj; - 180 > a;) a += 360;
				for (; 180 < a;) a -= 360;
				return a
			};
			c.prototype.Fe = function(a) {
				this.wa();
				isNaN(a) || (this.pan.c = Number(a));
				this.update()
			};
			c.prototype.Lj = function(a) {
				this.wa();
				isNaN(a) || (this.pan.c = Number(a) + this.pan.zj);
				this.update()
			};
			c.prototype.vk = function(a, b) {
				isNaN(a) || (this.Fe(this.kg() + a), b && (this.pan.d = a))
			};
			c.prototype.pn = function(a, b) {
				this.vk(a * this.Ah(), b)
			};
			c.prototype.Eh = function() {
				return this.i.c
			};
			c.prototype.so = function() {
				return this.u.i
			};
			c.prototype.Ge = function(a) {
				this.wa();
				isNaN(a) || (this.i.c = Number(a));
				this.update()
			};
			c.prototype.xk = function(a, b) {
				this.Ge(this.Eh() + a);
				b && (this.i.d = a)
			};
			c.prototype.rn = function(a, b) {
				this.xk(a * this.Ah(), b)
			};
			c.prototype.Mj = function(a) {
				this.wa();
				isNaN(a) || (this.O.c = Number(a));
				this.update()
			};
			c.prototype.cl = function() {
				return this.O.c
			};
			c.prototype.hj = function() {
				return this.f.c
			};
			c.prototype.On = function() {
				return this.u.Hd
			};
			c.prototype.Ee = function(a) {
				this.wa();
				switch (this.ta()) {
					case 4:
						var b = 170;
						break;
					case 12:
						b =
							360;
						break;
					case 9:
						b = 355;
						break;
					default:
						b = 170
				}
				2 == this.kb && (b = 9999999999);
				!isNaN(a) && 0 < a && a < b && (b = this.f.c, this.f.c = 1 * a, b != this.f.c && this.update())
			};
			c.prototype.uk = function(a, b) {
				this.Ee(this.hj() + a);
				b && (this.f.d = a)
			};
			c.prototype.Oi = function(a, b) {
				if (!isNaN(a)) {
					var d = a / 90 * Math.cos(Math.min(this.f.c, 90) * Math.PI / 360);
					d = this.f.c * Math.exp(d);
					this.Ee(d);
					b && (this.f.d = a)
				}
			};
			c.prototype.Bp = function(a, b) {
				this.wa();
				isNaN(a) || (this.pan.c = a);
				isNaN(b) || (this.i.c = b);
				this.update()
			};
			c.prototype.li = function(a, b, d) {
				this.wa();
				isNaN(a) || (this.pan.c = a);
				isNaN(b) || (this.i.c = b);
				isNaN(d) || this.Ee(d);
				this.update()
			};
			c.prototype.vp = function() {
				this.li(this.pan.Ra, this.i.Ra, this.f.Ra)
			};
			c.prototype.yp = function(a) {
				this.Pg(a);
				this.Qg(a);
				this.Og(a)
			};
			c.prototype.Pg = function(a) {
				this.C.Ab = a
			};
			c.prototype.Og = function(a) {
				this.C.ue = a
			};
			c.prototype.Yn = function() {
				return this.C.ue
			};
			c.prototype.Qg = function(a) {
				this.C.kd = a
			};
			c.prototype.Mp = function(a, b) {
				void 0 === b && (b = !0);
				this.Im = b;
				this.bh == !a && ((this.bh = !!a) ? this.jb.ji = !0 : this.O.c = 0, this.Y("gyrochanged", {}))
			};
			c.prototype.to = function() {
				return this.bh
			};
			c.prototype.ko = function() {
				return this.sg ? 5 : this.Sd ? 4 : this.zl ? 1 : this.wl ? 2 : this.vl ? 3 : 0
			};
			c.prototype.Mn = function() {
				return this.qj ? 5 : this.sl ? 4 : this.Kh ? 2 : this.Lc ? 3 : this.pj ? 1 : 0
			};
			c.prototype.moveTo = function(a, b, d, f, g, h) {
				this.wa();
				if ("_blank" !== a && "" !== a) {
					this.u.active = !0;
					this.u.aborted = !1;
					this.u.bk = !1;
					var l = a.toString().split("/");
					1 < l.length && (a = Number(l[0]), f = Number(b), b = Number(l[1]), 2 < l.length && (d =
						Number(l[2])));
					isNaN(a) ? this.u.pan = this.pan.c : this.u.pan =
						Number(a);
					isNaN(b) ? this.u.i = this.i.c : this.u.i = Number(b);
					!isNaN(d) && 0 < d && 180 > d ? this.u.f = Number(d) : this.u.f = this.f.c;
					this.u.speed = !isNaN(f) && 0 < f ? Number(f) : 1;
					isNaN(g) ? this.u.O = this.O.c : this.u.O = Number(g);
					void 0 !== h ? !a || 4 != h && 12 != h && 9 != h || (this.u.Eb = h) : this.u.Eb = this.Ka
				}
			};
			c.prototype.Xh = function(a) {
				this.wa();
				var b = 0,
					d = 0,
					f = 70,
					g = 4,
					h = 0,
					l = 1;
				a.hasOwnProperty("pan") && (b = Number(a.pan), this.u.pan = b);
				a.hasOwnProperty("tilt") && (d = Number(a.tilt), this.u.i = d);
				a.hasOwnProperty("fov") && (f = Number(a.fov), this.u.f = f);
				a.hasOwnProperty("projection") && (g = Number(a.projection), this.u.Eb = g);
				a.hasOwnProperty("timingFunction") && (h = Number(a.timingFunction));
				a.hasOwnProperty("speed") && (l = Number(a.speed));
				0 >= l ? (this.li(b, d, f), this.Cc(g)) : (a = new r.fk, a.Pa = "__AutoMove", a.Ef = this.$k(),
					a.Tg = this.i.c, a.Gd = this.f.c, a.Sg = this.Ka, a.Rc = b, a.$d = d, a.Ff = f, a.qd =
					g, a.$e = !1, a.ke = !1, a.le = !1, 0 == h && (a.ke = !0), 1 == h && (a.$e = !0, a
						.ke = !0), 2 == h && (a.le = !0), a.speed = l, this.u.mk = this.w, this.w = this.Sk(
						a), this.u.nk = (new Date).getTime(), this.u.bk = !0, this.u.active = !0, this.u
					.aborted = !1, this.u.pan = b, this.u.i = d, this.u.f = f, this.Jd = !1)
			};
			c.prototype.Po = function(a) {
				this.moveTo(this.pan.Ra, this.i.Ra, this.f.Ra, a)
			};
			c.prototype.Qo = function(a, b) {
				var d = {};
				d.pan = this.pan.Ra;
				d.tilt = this.i.Ra;
				d.fov = this.f.Ra;
				d.projection = this.ci;
				d.timingFunction = b;
				d.speed = a;
				this.Xh(d)
			};
			c.prototype.cn = function(a, b, d, f) {
				var g = new r.mh(this);
				g.type = "point";
				g.pan = b;
				g.i = d;
				g.id = a;
				g.b = {};
				g.b.player = this;
				g.af();
				g.b.hotspot = g;
				g.b.__div = document.createElement("div");
				g.b.__div.appendChild(f);
				this.R.push(g);
				g.b.__div.style.position = "absolute";
				g.b.__div.style.left = "-1000px";
				g.b.__div.style.top = "-1000px";
				this.Fa.insertBefore(g.b.__div, this.Fa.firstChild);
				this.Da = !0
			};
			c.prototype.oq = function(a, b, d) {
				for (var f = 0; f < this.R.length; f++) {
					var g = this.R[f];
					g.id == a && (g.pan = b, g.i = d, g.af())
				}
				this.Da = !0
			};
			c.prototype.np = function(a) {
				for (var b = -1, d, f = 0; f < this.R.length; f++) d = this.R[f], d.id == a && (b = f); - 1 <
					b && (d = this.R.splice(b, 1).pop(), d.b && d.b.__div && this.Fa.removeChild(d.b.__div))
			};
			c.prototype.no = function() {
				for (var a = [], b =
						0; b < this.R.length; b++) {
					var d = this.R[b];
					"point" == d.type && a.push(String(d.id))
				}
				return a
			};
			c.prototype.Qn = function(a) {
				for (var b = 0; b < this.R.length; b++) {
					var d = this.R[b];
					if (d.id == a) return b = {}, b.id = a, b.pan = d.pan, b.tilt = d.i, b.url = d.url, b
						.target = d.target, b.title = d.title, b.description = d.description, b.skinid = d
						.Pj, d.b && d.b.__div && (b.div = d.b.__div), b
				}
			};
			c.prototype.Lm = function(a, b) {
				this.X.start.x = a;
				this.X.start.y = b;
				this.X.ea.x = a;
				this.X.ea.y = b;
				this.Ba.ea.x = a;
				this.Ba.ea.y = b;
				this.Fj++;
				this.pan.Hc = this.pan.c;
				this.i.Hc =
					this.i.c
			};
			c.prototype.Jm = function(a, b) {
				var d = this.Mb();
				this.pan.Hc += a * d / this.o.height;
				this.i.Hc += b * d / this.o.height;
				this.pan.c = this.pan.Hc;
				this.i.c = this.i.Hc
			};
			c.prototype.Km = function(a, b) {
				this.X.c.x = a;
				this.X.c.y = b;
				this.X.da.x = this.X.c.x - this.X.ea.x;
				this.X.da.y = this.X.c.y - this.X.ea.y;
				this.C.Ad && (this.X.ea.x = this.X.c.x, this.X.ea.y = this.X.c.y, this.update())
			};
			c.prototype.wa = function() {
				this.l.active && (this.l.active = !1, this.Y("autorotatechanged", {}), this.pan.d = 0, this.i
					.d = 0, this.f.d = 0);
				this.u.active && (this.u.active = !1, this.pan.d = 0, this.i.d = 0, this.f.d = 0);
				this.Qe = this.u.aborted = !1;
				this.l.Wh = !1;
				this.td = .02;
				this.Qf = 0;
				this.l.Kf && (this.l.enabled = this.l.Se);
				this.lf = (new Date).getTime()
			};
			c.prototype.Wn = function() {
				return this.lf
			};
			c.prototype.al = function(a, b) {
				a || (a = this.va.x, b = this.va.y);
				var d = this.o.height / (2 * Math.tan(this.f.c * Math.PI / 360));
				a -= this.o.width / 2;
				b -= this.o.height / 2;
				var f = {};
				f.pan = 180 * Math.atan(a / d) / Math.PI;
				f.tilt = 180 * Math.atan(-b / Math.sqrt(a * a + d * d)) / Math.PI;
				return f
			};
			c.prototype.po = function(a, b) {
				a || (a = this.va.x,
					b = this.va.y);
				if (2 === this.kb) {
					var d = this.f.c / this.o.height;
					a = -(a - this.o.width / 2) * d + this.pan.c;
					b = -(b - this.o.height / 2) * d + this.i.c
				} else {
					d = new r.ya(0, 0, 1);
					a = this.al(a, b);
					d.Fd(-a.tilt);
					d.Ce(a.pan);
					d.Fd(-this.i.c);
					d.Ce(-this.pan.c);
					d.Fd(-this.ab.pitch);
					d.De(this.ab.O);
					for (a = d.fn() - 180; - 180 > a;) a += 360;
					b = d.gn()
				}
				d = {};
				d.pan = a;
				d.tilt = b;
				return d
			};
			c.prototype.zc = function(a) {
				return a == this.control || a && void 0 !== a.ggPermeableMap && 1 == a.ggPermeableMap ? !0 :
					a && void 0 !== a.ggPermeable && 0 == a.ggPermeable ? !1 : a && a.ggType && ("container" ==
						a.ggType || "cloner" == a.ggType || "timer" == a.ggType) ? !0 : !1
			};
			c.prototype.Qi = function(a, b) {
				var d = this.dd(),
					f, g;
				for (f = 0; f < this.I.length + this.Ta.length; f++) {
					var h = f < this.I.length ? this.I[f] : this.Ta[f - this.I.length];
					if (h.gb) return h
				}
				for (f = 0; f < this.I.length + this.Ta.length; f++)
					if (h = f < this.I.length ? this.I[f] : this.Ta[f - this.I.length], !h.ld) {
						var l = [],
							k = new r.ya,
							q;
						var p = g = void 0;
						0 < h.f && (g = Math.tan(h.f / 2 * Math.PI / 180), p = 0 < h.Jc ? g * h.ed / h.Jc : g, h
							.xd && 1 != h.xd && (p *= h.xd));
						for (q = 0; 4 > q; q++) {
							switch (q) {
								case 0:
									k.$a(-g, -p, 0);
									break;
								case 1:
									k.$a(g, -p, 0);
									break;
								case 2:
									k.$a(g, p, 0);
									break;
								case 3:
									k.$a(-g, p, 0)
							}
							k.xa(h.xa * Math.PI / 180);
							k.Ea(-h.Ea * Math.PI / 180);
							k.nb(h.nb * Math.PI / 180);
							k.z = k.z - 1;
							k.xa(-h.i * Math.PI / 180);
							k.Ea(h.pan * Math.PI / 180);
							k.Ea(-this.pan.c * Math.PI / 180);
							k.xa(this.i.c * Math.PI / 180);
							k.nb(this.O.c * Math.PI / 180);
							l.push(k.clone())
						}
						l = this.Ri(l);
						if (0 < l.length) {
							for (q = 0; q < l.length; q++) k = l[q], .1 > k.z ? (p = -d / k.z, g = this.o
									.width / 2 + k.x * p, p = this.o.height / 2 + k.y * p) : p = g = 0, k.Qb =
								g, k.vb = p;
							if (this.ml(l, a, b)) return h
						}
					} return null
			};
			c.prototype.Lh =
				function() {
					return document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement &&
						null != document.msFullscreenElement || document.fullScreen
				};
			c.prototype.Oo = function(a) {
				this.Cm(a);
				if (this.bd) this.bd.onclick();
				this.bf && this.zh();
				this.Gb = null;
				if (!this.C.Ab) {
					a = a ? a : window.event;
					if (a.which || 0 == a.which || 1 == a.which) {
						var b = (new Date).getTime();
						if (this.md) {
							this.Gb = this.md;
							this.P.Ya = !0;
							this.P.startTime = b;
							a.stopPropagation();
							return
						}
						if (this.zc(a.target)) {
							var d;
							(d = this.Qi(this.va.x, this.va.y)) &&
							d.re && (this.Gb = d);
							this.Lm(a.pageX, a.pageY);
							this.P.Ya = !0;
							this.P.startTime = b;
							a.preventDefault();
							this.wa()
						}
					}
					this.X.da.x = 0;
					this.X.da.y = 0
				}
			};
			c.prototype.Jf = function(a, b) {
				var d = this.A.Wj;
				d.enabled && (this.ua != this.eb && 0 <= a && 0 <= b && "" != this.ua.title ? (this.Aa
					.innerHTML = this.ua.title, this.Aa.style.color = this.ga(d.Xj, d.Vj), d
					.background ? this.Aa.style.backgroundColor = this.ga(d.ic, d.hc) : this.Aa.style
					.backgroundColor = "transparent", this.Aa.style.border = "solid " + this.ga(d.lc, d
						.kc) + " " + d.Li + "px", this.Aa.style.borderRadius =
					d.Ki + "px", this.Aa.style.textAlign = "center", 0 < d.width ? (this.Aa.style.left =
						a - d.width / 2 + this.margin.left + "px", this.Aa.style.width = d.width + "px"
					) : (this.Aa.style.width = "auto", this.Aa.style.left = a - this.Aa
						.offsetWidth / 2 + this.margin.left + "px"), this.Aa.style.height = 0 < d
					.height ? d.height + "px" : "auto", this.Aa.style.top = b + 25 + +this.margin.top +
					"px", this.Aa.style.visibility = "inherit", this.Aa.style.overflow = "hidden") : (
					this.Aa.style.visibility = "hidden", this.Aa.innerHTML = ""))
			};
			c.prototype.Cm = function(a) {
				var b = this.qe();
				this.Lh() ? (this.va.x = a.pageX - this.margin.left, this.va.y = a.pageY - this.margin.top) : (
					this.va.x = a.pageX - b.x, this.va.y = a.pageY - b.y);
				return b
			};
			c.prototype.Af = function(a) {
				a && null !== a && "object" == typeof a ? this.ua = a : this.ua = this.eb;
				this.ua == this.eb && (a = this.rh(this.va.x, this.va.y)) && (a.bb = 0);
				this.ua.af && this.ua.af();
				this.hotspot = this.ua
			};
			c.prototype.No = function(a) {
				a = a ? a : window.event;
				var b = this.Cm(a);
				if (!this.C.Ab && !this.md) {
					this.l.active && (this.l.Rh = (new Date).getTime());
					this.P.Ya && (a.preventDefault(), (a.which ||
						0 == a.which || 1 == a.which) && this.Km(a.pageX, a.pageY), this.wa());
					var d = !1;
					if (this.ua == this.eb || "poly" == this.ua.type) {
						var f = this.eb;
						0 < this.R.length && this.zc(a.target) && (f = this.rh(this.va.x, this.va.y));
						this.ki(f);
						this.Jf(a.pageX - b.x, a.pageY - b.y);
						0 != f && f != this.eb && (d = !0)
					}
					b = null;
					!d && this.zc(a.target) && (b = this.Qi(this.va.x, this.va.y));
					this.l.vh && (this.l.vh = !1);
					this.Fa.style.cursor = this.ua != this.eb && this.ua.ff && d || b && b.qg ? "pointer" :
						"default"
				}
			};
			c.prototype.ki = function(a) {
				!1 === a && (a = this.eb);
				this.ua != a && (this.ua !=
					this.eb && (0 < this.A.mode && (this.ua.bb = 0), this.ba && this.ba.hotspotProxyOut &&
						this.ba.hotspotProxyOut(this.ua.id, this.ua.url)), a != this.eb ? (this.Af(a), this
						.ba && this.ba.hotspotProxyOver && this.ba.hotspotProxyOver(this.ua.id, this.ua
							.url), 0 < this.A.mode && (this.A.bb = 1, this.ua.bb = 1)) : (this.Af(this.eb),
						0 <
						this.A.mode && (this.A.bb = 0)), this.ia && this.ia.changeCurrentHotspot(this.ua.id)
				)
			};
			c.prototype.Mo = function(a) {
				a = a ? a : window.event;
				this.Qh = -1;
				this.bf && this.zh();
				if (!this.C.Ab && (this.Gb && (this.Gb.re(), this.Gb.gb ? this.md =
						this.Gb : this.md = null), this.P.Ya)) {
					this.wa();
					a.preventDefault();
					this.P.Ya = !1;
					a = (new Date).getTime();
					var b = Math.abs(this.X.start.x - this.X.ea.x) + Math.abs(this.X.start.y - this.X.ea.y);
					if (400 > a - this.P.startTime && 0 <= b && 20 > b) {
						var d = this.rh(this.va.x, this.va.y);
						d && this.ym(d);
						b = Math.abs(this.X.Cd.x - this.X.ea.x) + Math.abs(this.X.Cd.y - this.X.ea.y);
						700 > a - this.vg && 0 <= b && 20 > b ? (d ? this.zm(d) : this.C.Yi && this.wi(), this
							.vg = 0) : this.vg = a;
						this.X.Cd.x = this.X.ea.x;
						this.X.Cd.y = this.X.ea.y
					}
				}
			};
			c.prototype.Kl = function(a) {
				if (!this.C.kd &&
					(a = a ? a : window.event, this.zc(a.target))) {
					var b = a.detail ? -1 * a.detail : a.wheelDelta / 40;
					this.C.rl && (b = -b);
					a.axis && (-1 == this.Qh ? this.Qh = a.axis : this.Qh != a.axis && (b = 0));
					var d = 0 < b ? 1 : -1;
					a.wheelDeltaX && a.wheelDeltaY && Math.abs(a.wheelDeltaX) > Math.abs(a.wheelDeltaY) && (b =
						0);
					0 != b && (this.Oi(d * this.C.om, !0), this.update());
					a.preventDefault();
					this.wa()
				}
			};
			c.prototype.kq = function(a) {
				a || (a = window.event);
				var b = a.touches,
					d = this.qe();
				this.va.x = b[0].pageX - d.x;
				this.va.y = b[0].pageY - d.y;
				this.ae = this.Gb = null;
				this.bf && this.zh();
				if (!this.C.Ab) {
					var f = (new Date).getTime();
					if (this.md) this.Gb = this.md, this.P.Ya = !0, this.P.startTime = f, a.preventDefault(),
						this.P.Lg = !0;
					else {
						if (!this.P.Ya && b[0]) {
							this.P.startTime = f;
							this.P.start.x = b[0].pageX;
							this.P.start.y = b[0].pageY;
							this.P.ea.x = b[0].pageX;
							this.P.ea.y = b[0].pageY;
							this.pb = b[0].target;
							if (this.zc(this.pb)) {
								(f = this.Qi(this.va.x, this.va.y)) && f.re && (this.Gb = f);
								if (f = this.rh(this.va.x, this.va.y)) this.M(f), this.ae = f, this.ki(f), f =
									this.jg(a), this.Jf(f.x - d.x, f.y - d.y);
								this.Lm(b[0].pageX, b[0].pageY);
								this.P.Lk = b[0].identifier;
								this.P.Ya = !0;
								a.preventDefault();
								this.P.Lg = !0;
								this.wa()
							}
							if (this.pb) {
								d = this.pb;
								for (f = !1; d && d != this.control;) {
									if (d.onmouseover) d.onmouseover();
									d.onmousedown && !f && (d.onmousedown(), f = !0);
									d = d.parentNode
								}
								f && (a.preventDefault(), this.P.Lg = !0)
							}
						}
						1 < b.length && (this.P.Ya = !1);
						!this.lj && 2 == b.length && b[0] && b[1] && this.zc(this.pb) && (a = b[0].pageX - b[1]
							.pageX, b = b[0].pageY - b[1].pageY, this.f.pm = Math.sqrt(a * a + b * b), this
							.f.sf = this.f.c);
						this.X.da.x = 0;
						this.X.da.y = 0
					}
				}
			};
			c.prototype.zh = function() {
				try {
					this.dh &&
						this.s.b && (!this.s.hd && this.s.Rj && this.s.b.play(), this.s.b.muted = !1);
					if (this.qa && (this.qa.resume(), "suspended" == this.qa.state)) return;
					if (this.Sd && this.qa && this.qa.createOscillator) {
						var a = this.qa.createOscillator(),
							b = this.qa.createGain();
						a.frequency.value = 30;
						a.type = "sine";
						a.connect(b);
						b.connect(this.qa.destination);
						b.gain.value = .01;
						a.start(0);
						setTimeout(function() {
							a.stop()
						}, 1E4)
					}
					for (b = 0; b < this.N.length; b++) {
						var d = this.N[b];
						(!this.Yb(d.id) || d.la) && 0 <= d.loop && d.autoplay && (d.la && d.We(), this.Ae(d.id,
							d.loop))
					}
					for (b =
						0; b < this.I.length; b++) {
						var f = this.I[b];
						!this.Yb(f.id) && f.autoplay && this.dh && this.Ae(f.id, f.loop);
						this.Yb(f.id) && f.autoplay && this.dh && (f.b.muted = !1)
					}
					this.bf = !1
				} catch (g) {
					this.M(g)
				}
			};
			c.prototype.jq = function(a) {
				a || (a = window.event);
				var b = a.touches,
					d = this.qe();
				this.va.x = b[0].pageX - d.x;
				this.va.y = b[0].pageY - d.y;
				if (this.C.Ab)(this.B.rd || this.B.be) && a.preventDefault();
				else {
					b[0] && (this.P.ea.x = b[0].pageX, this.P.ea.y = b[0].pageY);
					// if (this.pb) {
					// 	for (var f = this.pb, g = !1; f && f != this.control && !g;) "scrollarea" == f.ggType &&
					// 		(g = !0), "map" == f.ggType && (g = !0), "text" == f.ggType && (g = !0), f = f
					// 		.parentNode;
					// 	g || a.preventDefault()
					// }
					if (this.P.Ya) {
						a.preventDefault();
						for (f = 0; f < b.length; f++)
							if (b[f].identifier == this.P.Lk) {
								this.Km(b[f].pageX, b[f].pageY);
								break
							} this.ae && (f = this.jg(a), this.Jf(f.x - d.x, f.y - d.y));
						this.wa()
					}
					2 == b.length && b[0] && b[1] && (this.P.Ya = !1, !this.lj && this.zc(this.pb) && (this.C
						.kd || (d = b[0].pageX - b[1].pageX, b = b[0].pageY - b[1].pageY, this.f.Dk =
							Math.sqrt(d * d + b * b), this.Ba.f.active = !0, this.Ba.f.nc = this.f.sf *
							Math.sqrt(this.f.pm / this.f.Dk),
							4 == this.ta() && this.Ba.f.nc > this.f.max && (this.Ba.f.nc = this.f.max),
							this.Ba.f.nc < this.f.min && (this.Ba.f.nc = this.f.min)), this.wa(), a
						.preventDefault()))
				}
			};
			c.prototype.iq = function(a) {
				this.P.Lg && (this.P.Lg = !1, a.preventDefault());
				var b = this.qe(),
					d = !1;
				this.bf && this.zh();
				if (this.zc(this.pb)) {
					var anim = document.getElementsByClassName('anim')[0];
					if (typeof anim != 'undefined') {
						anim.parentNode.removeChild(anim);
					}
				}
				if (!this.C.Ab) {
					this.P.Ya && (a.preventDefault(), this.wa());
					var f = (new Date).getTime();
					var g = void 0;
					var h = !1;
					g = Math.abs(this.P.start.x - this.P.ea.x) + Math.abs(this.P.start.y - this.P.ea.y);
					if (0 <= g && 20 > g) {
						d = !0;
						this.zc(this.pb) && (a.preventDefault(),
							this.Gb && (this.Gb.re(), this.Gb.gb ? this.md = this.Gb : this.md = null));
						if (this.pb) {
							for (g = this.pb; g && g != this.control;) g.onclick && (g.onclick(), h = !0, d = !
								1), g = g.parentNode;
							h && a.preventDefault()
						}
						g = Math.abs(this.P.Cd.x - this.P.ea.x) + Math.abs(this.P.Cd.y - this.P.ea.y);
						if (700 > f - this.vg && 0 <= g && 20 > g) {
							if (this.zc(this.pb))
								if (a.preventDefault(), this.ae) this.zm(this.ae);
								else if (this.C.Yi) {
								var l = this;
								setTimeout(function() {
									l.wi()
								}, 1)
							}
							if (this.pb) {
								for (g = this.pb; g && g != this.control;) g.ondblclick && (g.ondblclick(),
										h = !0, d = !1), g =
									g.parentNode;
								h && a.preventDefault()
							}
							this.vg = 0
						} else this.vg = f;
						this.P.Cd.x = this.P.ea.x;
						this.P.Cd.y = this.P.ea.y
					}
					if (this.pb)
						for (g = this.pb; g && g != this.control;) {
							if (g.onmouseout) g.onmouseout();
							if (g.onmouseup) g.onmouseup();
							g = g.parentNode
						}
					a = this.jg(a);
					this.Jf(a.x - b.x, a.y - b.y);
					this.ae && d && this.ym(this.ae);
					this.pb = null;
					this.P.Ya = !1;
					this.ki(this.eb);
					this.ae = null
				}
			};
			c.prototype.hq = function(a) {
				var b = this.qe();
				this.C.Ab || (this.P.Ya = !1);
				this.ae = null;
				this.ki(this.eb);
				a = this.jg(a);
				this.Jf(a.x - b.x, a.y - b.y)
			};
			c.prototype.yl =
				function() {
					return null != this.pb || this.P.Ya
				};
			c.prototype.Ll = function(a) {
				!this.xe && window.MSGesture && (this.M("setup gesture"), this.xe = new MSGesture, this.xe
					.target = this.control);
				this.xe && this.xe.addPointer(a.pointerId)
			};
			c.prototype.Uk = function(a) {
				this.lj = !0;
				this.Yh = 1;
				this.C.Ab || this.C.kd || (a.touches ? (this.pb = a.touches.target, this.zc(a.target) && (a
					.preventDefault(), this.f.sf = this.f.c, this.wa())) : (a.preventDefault(), this.f
					.sf = this.f.c, this.wa()))
			};
			c.prototype.Jn = function(a) {
				this.C.Ab || this.C.kd || !this.zc(a.target) ||
					(a.preventDefault(), this.Ba.f.active = !0, this.Ba.f.nc = this.f.sf / Math.sqrt(a.scale),
						4 == this.ta() && this.Ba.f.nc > this.f.max && (this.Ba.f.nc = this.f.max), this
						.update(), this.wa())
			};
			c.prototype.Ro = function(a) {
				this.C.Ab || this.C.kd || (a.preventDefault(), 1 != a.scale && (this.Ba.f.active = !0, this
					.Yh *= a.scale, this.Ba.f.nc = this.f.sf / Math.sqrt(this.Yh), 4 == this.ta() &&
					this.Ba.f.nc > this.f.max && (this.Ba.f.nc = this.f.max), this.update(), this.wa()))
			};
			c.prototype.Tk = function(a) {
				this.C.Ab || this.C.kd || (this.Ba.f.active = !1, a.preventDefault(),
					this.wa(), this.xe && this.xe.reset && this.xe.reset())
			};
			c.prototype.Go = function(a) {
				this.C.ue || (this.isFullscreen && a.preventDefault(), this.Ph = a.keyCode, this.wa())
			};
			c.prototype.Ho = function(a) {
				this.Ph && (this.Ph = 0, a.preventDefault())
			};
			c.prototype.Xo = function() {
				this.Ph = 0
			};
			c.prototype.bi = function() {
				this.isFullscreen && (this.Lh() || this.exitFullscreen(), this.Lh() && (this.T.style.left =
					"0px", this.T.style.top = "0px"))
			};
			c.prototype.Yo = function(a, b, d, f) {
				f ? (this.og.alpha = a, this.og.beta = b, this.og.gamma = d, this.og.gamma +=
					90) : (this.jb.alpha = a, this.jb.beta = b, this.jb.gamma = d, this.jb.gamma += 90);
				this.jb.orientation = window.orientation ? parseInt("" + window.orientation, 10) : 0;
				d = new r.hk;
				a = this.jb;
				d.Ce(-a.alpha);
				d.De(-a.beta);
				d.Fd(-a.gamma);
				d.De(90 - a.orientation);
				1 > d.Db ? -1 < d.Db ? (b = 180 / Math.PI * Math.asin(-d.Db), a = 180 / Math.PI * Math.atan2(d
					.bc, d.ac), d = 180 / Math.PI * Math.atan2(d.$b, d.Zb)) : (b = 0, a = 90, d = -180 /
					Math.PI * Math.atan2(-d.Nb, d.Ob)) : (b = 0, a = -90, d = 180 / Math.PI * Math.atan2(-d
					.Nb, d.Ob));
				if (this.bh)
					if (this.yl() || this.u.Hh || this.jb.ji) this.jb.Rl =
						this.kg() + d, this.jb.cg = 0, this.jb.ji = !1;
					else {
						f = this.u.active;
						var g = 1;
						10 > this.jb.cg && (this.jb.cg += 1, g = .1 * this.jb.cg);
						d = -d + this.jb.Rl;
						this.Fe(g * d + (1 - g) * this.kg());
						this.Ge(g * a + (1 - g) * this.Eh());
						this.Im ? this.Mj(g * b + (1 - g) * this.cl()) : this.Mj(0);
						this.Xf();
						this.u.active = f
					}
			};
			c.prototype.ym = function(a) {
				this.ba && this.ba.hotspotProxyClick && this.ba.hotspotProxyClick(a.id, a.url);
				"" != a.url && (this.Aj(a.url, a.target), this.Jf(-1, -1))
			};
			c.prototype.zm = function(a) {
				this.ba && this.ba.hotspotProxyDoubleClick && this.ba.hotspotProxyDoubleClick(a.id,
					a.url)
			};
			c.prototype.Ah = function() {
				return Math.min(1, 2 * Math.tan(Math.PI * Math.min(this.f.c, 90) / 360))
			};
			c.prototype.Sl = function() {
				var a = this;
				setTimeout(function() {
					a.Sl()
				}, 100);
				9 != a.fi || a.Jh || window.requestAnimationFrame(function() {
					a.Kg();
					a.Nc("restart recover timer")
				});
				10 < a.fi && 1 < a.Fj && (a.Nc("recover timer - disabling requestAnimationFrame"), a.Jh = !0, a
					.Kg());
				a.fi++
			};
			c.prototype.oi = function(a) {
				var b = {
						Dq: {
							value: 0,
							name: "pan"
						},
						Fq: {
							value: 1,
							name: "tilt"
						},
						Cq: {
							value: 2,
							name: "fov"
						}
					},
					d = 0,
					f = 0,
					g = 0,
					h;
				for (h in b) {
					for (var l =
							b[h], k, q = Math.floor(a); !this.df(q, l.value) && 0 < q;) q--;
					q = this.df(q, l.value);
					var p = this.co(q);
					if (p) {
						k = new r.vc(q.time, q.value);
						var t = new r.vc(p.time, p.value),
							u = (a - q.time) / (p.time - q.time);
						if (0 != q.type || 0 != p.type && 3 != p.type)
							if (3 == q.type) k = q.value;
							else {
								u = new r.vc;
								var w = new r.vc,
									v = p.time - q.time;
								0 == q.type ? w.$a(q.time + .3 * v, q.value) : w.$a(q.he, q.ie);
								0 == p.type || 3 == p.type ? u.$a(p.time - .3 * v, p.value) : u.$a(p.ge, p.Wc);
								p = new r.vc;
								p.Ji(k, t, w, u, a);
								k = p.y
							}
						else p = new r.vc, p.zd(k, t, u), k = p.y
					} else k = q.value;
					switch (l.value) {
						case 0:
							l =
								this.pan.c;
							if (this.Jd && 3 != q.type) {
								if (2 != this.kb) {
									for (; 360 < k;) k -= 360;
									for (; - 360 > k;) k += 360
								}
								d = k - l;
								2 != this.kb && (180 < d && (d -= 360), -180 > d && (d += 360));
								this.pan.c = this.pan.c + d * this.td
							} else this.pan.c = k;
							this.l.Ag = this.pan.c;
							break;
						case 1:
							l = this.i.c;
							this.Jd && 3 != q.type ? (f = k - l, this.i.c = this.i.c + f * this.td) : this.i.c =
								k;
							this.l.Bg = this.i.c;
							break;
						case 2:
							l = this.f.c, this.Jd && 3 != q.type ? (g = k - l, this.f.c = this.f.c + g * this
								.td) : this.f.c = k, this.l.zg = this.f.c
					}
				}
				b = this.ta();
				for (h = Math.floor(a); !this.df(h, 3) && 0 < h;) h--;
				h = this.df(h, 3);
				q = a - h.time;
				this.Jd && -1 != this.Rf && this.oh + this.Gi > a ? (b = this.ig(this.Rf), this.f.c > b ? this
					.oh = a : (q = (a - this.oh) / this.Gi, q = Math.min(1, q), this.Cc(this.Ka, this.Rf,
						1 - q))) : (0 == h.xb || q > h.xb - .3 ? this.Cc(h.value) : (q /= h.xb, this.Cc(b, h
					.value, 1 - q)), this.l.Fl = h.value);
				this.Jd && (d = Math.sqrt(d * d + f * f + g * g), .3 > d && (this.Jd = !1, this.td = .02, this
					.Qf = 0), 0 < this.Qf && d > this.Qf && (this.td += .01, this.td = Math.min(this.td,
					1)), this.Qf = d);
				h = Math.floor(a);
				if (h != this.pk)
					for (this.pk = h, a = this.Kn(h), d = 0; d < a.length; d++) f = a[d], g = f.nh, this.pd
						.hasOwnProperty(g) &&
						(b = this.pd[g].type, 0 == b ? this.Zd(g, f.ck) : 1 == b ? this.Zd(g, f.value) : 2 ==
							b && this.Zd(g, "true" == f.ck));
				this.update()
			};
			c.prototype.ep = function(a) {
				var b = this.u.speed;
				this.u.rj && (b = b * (a.getTime() - this.u.rj) / 60, 5 < b && (b = 5), .2 > b && (b = .2));
				this.u.rj = a.getTime();
				this.l.eg && (this.oa.ready() || 4 == this.Ka) && this.Ch() && (this.l.eg = !1, this.l
					.active = !0, this.rb.nd = !0, this.rb.dj = !1);
				if (this.u.active || 0 != this.u.Eb && this.oa.ready()) {
					if (this.u.bk && "__AutoMove" == this.w.Pa) {
						var d = a.getTime() - this.u.nk;
						b = d / 100;
						if (b >= this.w.length) {
							if (this.oi(this.w.length),
								this.ma.splice(this.ma.indexOf(this.w), 1), this.u.active = !1, this.w = this.u
								.mk, this.u.Eb = 0, this.li(this.u.pan, this.u.i, this.u.f), this.pan.Hc = this
								.u.pan, this.i.Hc = this.u.i, this.u.Hg && (this.u.Hg = !1, this.l.Wh = !0, this
									.l.active = !0, this.Y("autorotatechanged", {})), this.onMoveComplete) this
								.onMoveComplete()
						} else this.oi(b)
					} else {
						this.pan.d = this.u.pan - this.pan.c;
						if (360 == this.pan.max - this.pan.min) {
							for (; - 180 > this.pan.d;) this.pan.d += 360;
							for (; 180 < this.pan.d;) this.pan.d -= 360
						}
						this.i.d = this.u.i - this.i.c;
						this.O.d = this.u.O -
							this.O.c;
						this.f.d = this.u.f - this.f.c;
						d = b * this.Ah();
						var f = Math.sqrt(this.pan.d * this.pan.d + this.i.d * this.i.d + this.O.d * this.O.d +
								this.f.d * this.f.d),
							g = this.pan.c - this.u.Ag,
							h = this.i.c - this.u.Bg,
							l = this.O.c - this.u.Gl,
							k = this.f.c - this.u.zg;
						100 * Math.sqrt(g * g + h * h + l * l + k * k) < d && 0 == this.u.Eb && (this.u
							.aborted = !0);
						this.u.Ag = this.pan.c;
						this.u.Bg = this.i.c;
						this.u.Gl = this.O.c;
						this.u.zg = this.f.c;
						if (100 * f < d || this.u.aborted) {
							if (this.pan.d = 0, this.i.d = 0, this.O.d = 0, this.f.d = 0, this.u.active && (this
									.u.active = !1, this.pan.c = this.u.pan,
									this.i.c = this.u.i, this.O.c = this.u.O, this.f.c = this.u.f, this
									.onMoveComplete)) this.onMoveComplete()
						} else f = f > 5 * d ? d / f : .2, this.pan.d *= f, this.i.d *= f, this.f.d *= f;
						this.pan.c += this.pan.d;
						this.i.c += this.i.d;
						this.O.c += this.O.d;
						this.f.c += this.f.d;
						0 != this.u.Eb && (this.u.Eb != this.Ka ? (b = this.ig(this.u.Eb), this.hj() > b ? (this
							.f.c += -Math.max((2.5 - 1.7 * Math.min(Math.sqrt(this.pan.d * this.pan
									.d + this.i.d * this.i.d + this.O.d * this.O.d) / d, 1)) * d,
								this.f.d) - this.f.d, this.u.f = this.f.c) : (this.rc = this.Ka,
							this.Ka = this.u.Eb, this.M("New projection from Target:" +
								this.Ka), this.Jg = this.u.Ng = 0, this.oa.Ih())) : 1 > this.u.Ng ? (
							this.u.Ng = Math.min(1, this.u.Ng + .05 * b), this.Jg = this.u.Ng) : (this
							.rc = 0, this.u.Eb = 0, this.oa.Ih()))
					}
					this.lf = a.getTime();
					this.update()
				} else if (this.l.active) {
					d = a.getTime() - this.l.startTime;
					this.l.Rh < this.l.startTime && (this.l.Rh = this.l.startTime);
					if ((this.l.Kf || this.rb.nd) && 0 < this.ma.length) {
						b = d / 100;
						f = !1;
						if (this.Pb != this.w.Pa || "" != this.w.Re && this.l.Kd != this.w.Re) {
							for (d = 0; d < this.ma.length; d++)
								if ("" == this.Pb && this.ma[d].Re == this.l.Kd || "" != this.Pb && this.ma[d]
									.Pa ==
									this.Pb && this.ma[d].Re == this.l.Kd) {
									f = !0;
									this.w = this.ma[d];
									this.Pb = this.w.Pa;
									break
								}! f && 0 < this.ma.length && this.ma[0].Re == this.l.Kd && (f = !0, this.w =
								this.ma[0], this.Pb = this.w.Pa)
						} else f = !0;
						if (f)
							if (d = (g = this.s.b && this.s.hd) && this.l.Uj && !this.rb.nd, this.Qe) {
								f = b;
								if (d)
									for (this.s.b.currentTime < this.qk && this.Ii && (this.Hi++, this.Ii = !1),
										f = 10 * (this.Hi * this.s.b.duration + this.s.b.currentTime), this.qk =
										this.s.b.currentTime, .05 > this.s.b.duration - this.s.b.currentTime &&
										(this.Ii = !0); f >= 10 * this.Pe;) f -= 10 * this.Pe;
								if (!g &&
									b >= this.w.length || g && !d && b >= this.w.length || g && d && (this.w
										.Pa != this.w.Ml || this.w.Zh != this.Xa) && b >= this.w.length) {
									this.oi(this.w.length);
									this.l.Bd = 0;
									this.Qe = !1;
									if (this.rb.nd) {
										this.hm();
										return
									}
									this.Pb = this.w.Ml;
									if (this.Pb == this.w.Pa && this.Xa == this.w.Zh) {
										if (1 < this.Ma.length && 0 < this.l.$h) {
											if (this.l.yj) {
												d = 1E3;
												do b = this.Ma[Math.floor(Math.random() * this.Ma
													.length)]; while (d-- && b == this.Xa)
											} else b = this.Zk();
											this.ye("{" + b + "}");
											this.l.startTime = a.getTime();
											this.Qe = !1;
											this.l.active = !0;
											this.B.fe = !0
										}
									} else this.kf &&
										this.w.Zh != this.Xa && (this.ye("{" + this.w.Zh + "}", this.w.Uo), this
											.B.enabled ? (this.l.active = !1, this.B.fe = !0) : this.l
											.active = !0), this.l.startTime = a.getTime()
								} else this.oi(f), this.l.Bd = f
							} else if (b = this.w.W[0], f = this.w.W[1], g = this.w.W[2], h = this.w.W[3], 3 !=
							h.mb && (h = 0), this.l.Wh || this.u.aborted || this.rb.nd || d) {
							if (this.Qe = !0, 0 < this.l.Bd ? this.l.startTime = a.getTime() - 100 * this.l.Bd :
								this.l.startTime = a.getTime(), this.Jd = d) {
								for (this.Pe = this.Hi = 0; this.Pe < this.w.length / 10;) this.Pe += this.s.b
									.duration;
								f = 10 * this.s.b.currentTime;
								for (d = Math.floor(f); !this.df(d, 3) && 0 < d;) d--;
								d = this.df(d, 3);
								d.value == this.Ka ? this.Rf = -1 : (this.Rf = d.value, this.oh = f, this.Gi =
									Math.max(5, d.time + d.xb - f))
							}
						} else {
							d = {};
							if (0 < this.l.Bd) d.pan = this.l.Ag, d.tilt = this.l.Bg, d.fov = this.l.zg, d
								.projection = this.l.Fl;
							else {
								for (d.pan = b.value; 360 < d.pan;) d.pan -= 360;
								for (; - 360 > d.pan;) d.pan += 360;
								d.tilt = f.value;
								d.fov = g.value;
								d.projection = h ? h.value : 4
							}
							d.timingFunction = 3;
							d.speed = 1;
							this.u.Hg = !0;
							this.Xh(d);
							this.l.active = !0
						}
					} else if (0 < this.l.$h && this.kf && d >= 1E3 * this.l.$h) {
						if (1 < this.Ma.length) {
							if (this.l.yj) {
								d =
									1E3;
								do b = this.Ma[Math.floor(Math.random() * this.Ma.length)]; while (d-- && b ==
									this.Xa)
							} else d = this.Ma.indexOf(this.Xa), d++, d >= this.Ma.length && (d = 0), b = this
								.Ma[d];
							this.l.startTime = a.getTime();
							this.l.jd = a.getTime();
							this.l.timeout = 0;
							this.ye("{" + b + "}");
							this.l.active = !0;
							this.B.fe = !0
						}
					} else d = a.getTime(), f = b = 1E3 / 60, 0 != this.l.jd && (f = d - this.l.jd), this.i.d =
						this.l.vi * (0 - this.i.c) / 100, this.f.d = this.l.vi * (this.f.Ra - this.f.c) / 100,
						this.pan.d = .95 * this.pan.d + -this.l.speed * this.Ah() * .05, b = f / b, this.pan
						.c += this.pan.d * b, this.i.c +=
						this.i.d * b, this.f.c += this.f.d * b, this.l.jd = d, this.update();
					3E3 < a.getTime() - this.l.Rh && !this.l.vh && (this.Fa.style.cursor = "none", this.l.vh = !
						0)
				} else !this.rb.dj && 1E3 < a.getTime() - this.lf && (this.ma.splice(this.ma.indexOf(this.w),
						1), this.w = this.hg(!1), this.Pb = this.w.Pa, this.l.active = !1, this.l.eg = !0), this
					.l.enabled && !this.P.Ya && a.getTime() - this.lf > 1E3 * this.l.timeout && !this.l.eg && (
						this.l.Vg && this.Ch() || !this.l.Vg) && (this.l.active = !0, this.l.startTime = a
						.getTime(), this.l.jd = 0, this.Y("autorotatechanged", {}), this.pan.d =
						0, this.i.d = 0, this.f.d = 0), !this.Ba.enabled || this.P.Ya || 0 == this.pan.d && 0 ==
					this.i.d && 0 == this.f.d || (this.u.Hh = !0, this.pan.d *= .9, this.i.d *= .9, this.f.d *=
						.9, this.pan.c += this.pan.d, this.i.c += this.i.d, this.Oi(this.f.d), 1E-4 > this.pan
						.d * this.pan.d + this.i.d * this.i.d + this.f.d * this.f.d && (this.pan.d = 0, this.i
							.d = 0, this.f.d = 0), this.update())
			};
			c.prototype.gp = function(a) {
				var b = this.B;
				if (b.rd) {
					var d = a.getTime() - b.Qm;
					d /= 1E3 * b.Pm;
					1 <= d ? (b.rd = !1, this.Kk(), b.Sj = a.getTime(), this.sm(), b.be = !0, 0 == b.fc || b
						.Pf || (4 == b.fc ? (this.w =
							this.hg(!0, b.Ie, b.Je, b.Hd), this.Pb = this.w.Pa, this.l.active = !0, this
							.rb.nd = !0) : this.moveTo(b.Ie, b.Je, b.Hd, b.de, 0, b.qd))) : b.Ql(d)
				} else b.be && (d = a.getTime() - b.Sj, d /= 1E3 * b.Tf, 1 <= d ? (b.be = !1, this.lf = a
					.getTime(), this.update(), 0 != b.fc && b.Pf && (4 == b.fc ? (this.w = this.hg(!0, b
							.Ie, b.Je, b.Hd), this.Pb = this.w.Pa, this.l.active = !0, this.rb
						.nd = !0) : this.moveTo(b.Ie, b.Je, b.Hd, b.de, 0, b.qd)), 4 != b.fc && (this
						.Pg(b.Vh), this.Qg(b.Ci), this.Og(b.Nh), this.l.active = b.fe, this.Y(
							"autorotatechanged", {}), b.fe = !1), this.l.jd = 0, this.ha && this.Ti(),
					this.Vf = !1) : b.Ql(d));
				b = this.Zo;
				b.jn && (b.wh ? a.getTime() - b.$i >= 1E3 * b.delay && (b.wh = !1) : (b.current += b.Xc, 0 > b
					.current && (b.current = 0, b.Xc = -b.Xc, b.wh = !0, b.$i = a.getTime()), 1 < b
					.current && (b.current = 1, b.Xc = -b.Xc, b.wh = !0, b.$i = a.getTime())))
			};
			c.prototype.jp = function() {
				var a, b = this.A;
				if (0 < b.ob.length) {
					for (a = 0; a < b.ob.length; a++) b.Pc[a] != b.Sb[a] && (b.Pc[a] > b.Sb[a] ? (b.Sb[a] +=
						.05, b.Pc[a] < b.Sb[a] && (b.Sb[a] = b.Pc[a])) : (b.Sb[a] -= .05, b.Pc[a] > b
						.Sb[a] && (b.Sb[a] = b.Pc[a], -1 != b.pi.indexOf(b.ob[a]) && (b.pi.splice(b.pi
							.indexOf(b.ob[a]),
							1), b.ob.splice(a, 1), b.Pc.splice(a, 1), b.Sb.splice(a, 1)))));
					this.update()
				}
				if (2 == b.mode)
					for (a = 0; a < this.R.length; a++) {
						var d = this.R[a];
						"poly" == d.type && d.bb != d.ra && (d.bb > d.ra ? (d.ra += b.Xc, d.bb < d.ra && (d.ra =
							d.bb)) : (d.ra -= b.Xc, d.bb > d.ra && (d.ra = d.bb)), this.update())
					}
				3 == b.mode && b.bb != b.ra && (b.bb > b.ra ? (b.ra += b.Xc, b.bb < b.ra && (b.ra = b.bb)) : (b
					.ra -= b.Xc, b.bb > b.ra && (b.ra = b.bb)), this.update())
			};
			c.prototype.ip = function() {
				var a = this.Ba;
				this.P.Ya && (this.C.Ad ? (a.da.x = .4 * (this.X.ea.x - a.ea.x), a.da.y = .4 * (this.X.ea.y - a
						.ea.y),
					a.ea.x += a.da.x, a.ea.y += a.da.y) : (a.da.x = .1 * -this.X.da.x * this.C
					.sensitivity / 8, a.da.y = .1 * -this.X.da.y * this.C.sensitivity / 8), this.Jm(a.da
					.x, a.da.y), this.update());
				a.f.active && (this.uk(.4 * (a.f.nc - this.f.c)), .001 > Math.abs(a.f.nc - this.f.c) / this.f
					.c && (a.f.active = !1), this.update());
				if (a.enabled && (0 != a.da.x || 0 != a.da.y) && !this.P.Ya) {
					var b = .9 * (1 - a.Jj);
					a.da.x = b * a.da.x;
					a.da.y = b * a.da.y;
					this.u.Hh = !0;
					.01 > a.da.x * a.da.x + a.da.y * a.da.y ? (a.da.x = 0, a.da.y = 0) : (this.Jm(a.da.x, a.da
						.y), this.update())
				}
			};
			c.prototype.fp = function() {
				if (this.C.fm &&
					this.C.Ad) {
					var a = this.Vl;
					a.pan = this.pan.c;
					a.i = this.i.c;
					a.f = this.f.c;
					this.Xe(a);
					this.Xe(a);
					this.Xe(a);
					var b = a.pan - this.pan.c,
						d = a.i - this.i.c;
					a = a.f - this.f.c;
					if (0 != b || 0 != d || 0 != a) {
						var f = .2 + .9 * Math.min((Math.abs(b) + Math.abs(d) + Math.abs(a)) / Math.abs(Math
							.min(this.f.c, 90)) * .3, 1);
						this.pan.c += b * f;
						this.i.c += d * f;
						this.f.c += a * f;
						this.Ba.Jj = .3;
						this.update()
					} else this.Ba.Jj = 0
				} else this.Xf();
				if (2 != this.kb) {
					for (; 360 < this.pan.c;) this.pan.c -= 360;
					for (; - 360 > this.pan.c;) this.pan.c += 360
				}
			};
			c.prototype.hp = function() {
				if (!this.Ch() &&
					this.gf && 5 < this.h.cm) {
					var a, b = 0,
						d = this.Wb.length;
					if (this.ah) d = 50, this.aj < d && this.aj++, b = this.aj;
					else
						for (a = 0; a < d; a++)(this.Wb[a].complete && this.Wb[a].src != this.Gk || "" == this
							.Wb[a].src) && b++;
					b == d ? (this.di = 1, this.isLoaded = !0, this.ja && this.ja.ggLoaded && this.ja
						.ggLoaded(), this.Y("imagesready", {}), this.l.Vg && this.l.enabled && !this.u
						.active &&
						!this.B.rd && (this.l.active = !0, this.l.startTime = (new Date).getTime(), this.l
							.jd = 0)) : this.di = b / (1 * d)
				}
			};
			c.prototype.Kg = function() {
				var a = this;
				a.ii || (a.Jh ? setTimeout(function() {
					a.ii = !1;
					a.Kg()
				}, 1E3 / 60) : window.requestAnimationFrame(function() {
					a.ii = !1;
					a.Kg()
				}));
				a.ii = !0;
				this.Fj = this.fi = 0;
				a.u.Hh = !1;
				var b = new Date;
				this.Bh++;
				120 <= this.Bh && (this.M("F/s: " + Math.round(1E3 * this.Bh / (b.getTime() - this.Bl))), this
					.Bl = b.getTime(), this.Bh = 0);
				this.Y("timer", {});
				this.Z && this.oa.Cn();
				this.Fb && "" !== this.oe && !this.ia && document.hasOwnProperty(this.oe) && document[this.oe]
					.setPan && 0 == this.Hn-- && (this.ia = document[this.oe], this.Tc = this.Z = !1, this.za &&
						(this.za.style.visibility = "hidden"), this.ia.setLocked(!0),
						this.ia.setSlaveMode(!0), this.ia.readConfigString(this.Wi), this.Nc("Flash player '" +
							this.oe + "' connected."));
				this.ak && (this.Sc(), this.ak = !1);
				this.ip();
				this.hp();
				this.ep(b);
				this.fp();
				this.gp(b);
				this.oa.rq();
				(0 <= this.A.mode || 0 < this.A.ob.length) && this.jp();
				this.Ai();
				if (this.mf.pan != this.pan.c || this.mf.i != this.i.c || this.mf.f != this.f.c) this.mf.pan =
					this.pan.c, this.mf.i = this.i.c, this.mf.f = this.f.c, this.Y("positionchanged", {});
				this.Dl != this.Ka && (this.Dl = this.Ka, this.Y("projectionchanged", {}));
				this.Da && (0 <
					this.$f ? this.$f-- : (this.Da = !1, this.$f = 0), this.B.be || this.B.rd || (this.$g(),
						this.Y("renderframe", {})), this.Y("repaint", {}));
				b = this.Xk();
				b != this.Cl && (b ? (this.ja && this.ja.ggReLoadedLevels && this.ja.ggReLoadedLevels(), this.Y(
					"tilesrequested", {})) : (a.ja && a.ja.ggLoadedLevels && a.ja.ggLoadedLevels(), this
					.Y("tilesready", {})), this.Cl = b)
			};
			c.prototype.ig = function(a) {
				switch (a) {
					case 4:
						a = Math.min(110, this.f.max);
						break;
					case 12:
						a = Math.min(270, this.f.wj);
						a = Math.min(360 * this.ee(), a);
						a = Math.min(360 / this.ee(), a);
						break;
					case 9:
						a = Math.min(270, this.f.xj);
						break;
					default:
						a = 90
				}
				return a
			};
			c.prototype.Em = function() {
				var a = this;
				setTimeout(function() {
					a.Bf(!1)
				}, 10);
				setTimeout(function() {
					a.Bf(!1)
				}, 100)
			};
			c.prototype.Ai = function() {
				this.Vi.Mk(this.pan.c, this.i.c);
				for (var a = 0; a < this.N.length + this.I.length; a++) {
					if (a < this.N.length) var b = this.N[a];
					else if (b = this.I[a - this.N.length], b.ld) continue;
					b.Ai()
				}
			};
			c.prototype.Sp = function(a, b) {
				var d = this;
				var f = "<<L>>" + String(d.Ia);
				f = f.toUpperCase();
				"U" != f.charAt(2) && (d.C.hf = !1);
				if (0 != d.Fg.length ||
					!d.C.hf || d.C.Zf || d.C.sh)
					if (d.bd) d.T.removeChild(d.bd), d.bd = null;
					else {
						d.bd = document.createElement("div");
						var g = d.bd;
						f = "left: " + a + "px;" + ("top:\t " + b + "px;") + "z-index: 32000;";
						f += "position:relative;";
						f += "display: table;";
						f += "color: black;";
						f += "background-color: white;";
						f += "border: 1px solid lightgray;";
						f += "box-shadow: 1px 1px 3px #333;";
						f += "font-family: Verdana, Arial, Helvetica, sans-serif;";
						f += "font-size: 9pt;";
						f += "opacity : 0.95;";
						g.setAttribute("style", f);
						g.setAttribute("class", "gg_contextmenu");
						f = document.createElement("style");
						a = document.createTextNode(".gg_context_row:hover { background-color: #3399FF }");
						f.type = "text/css";
						f.styleSheet ? f.styleSheet.cssText = a.nodeValue : f.appendChild(a);
						g.appendChild(f);
						for (a = 0; a < d.Fg.length; a++) {
							b = d.Fg[a];
							var h = document.createElement("div");
							f = "text-align: left;";
							f += "margin: 0;";
							f += "padding: 5px 20px;";
							f += "vertical-align: left;";
							h.setAttribute("style", f);
							h.setAttribute("class", "gg_context_row");
							f = document.createElement("a");
							f.href = b.url;
							f.target = "_blank";
							f.innerHTML = b.text;
							f.setAttribute("style", "color: black; text-decoration: none;");
							h.appendChild(f);
							g.appendChild(h)
						}
						0 < d.Fg.length && (!d.C.hf || d.C.Zf || d.C.sh) && g.appendChild(document
							.createElement("hr"));
						if (d.C.sh && d.Z) {
							b = [];
							b.push({
								text: "Rectilinear Projection",
								Mg: 4
							});
							b.push({
								text: "Stereographic Projection",
								Mg: 9
							});
							b.push({
								text: "Fisheye Projection",
								Mg: 12
							});
							for (a = 0; a < b.length; a++) {
								h = b[a];
								var l = document.createElement("div");
								l.setAttribute("class", "gg_context_row");
								f = "text-align: left;";
								f += "margin: 0;";
								f = d.Ka == h.Mg ? f + "padding: 5px 20px 5px 7px;" : f + "padding: 5px 20px;";
								f += "vertical-align: left;";
								f += "cursor: pointer;";
								l.setAttribute("style", f);
								l.onclick = function(k) {
									return function() {
										d.Pi(k, 1);
										d.update()
									}
								}(h.Mg);
								d.Ka == h.Mg ? l.innerHTML = "&#10687; " + h.text : l.innerHTML = h.text;
								g.appendChild(l)
							}
							d.C.hf && !d.C.Zf || g.appendChild(document.createElement("hr"))
						}
						d.C.Zf && (a = document.createElement("div"), a.setAttribute("class", "gg_context_row"),
							f = "text-align: left;margin: 0;padding: 5px 20px;", f +=
							"vertical-align: left;",
							f += "cursor: pointer;", a.setAttribute("style", f), a.onclick = function() {
								d.wi()
							}, a.innerHTML = d.Lh() ? "Exit Fullscreen" : "Enter Fullscreen", g.appendChild(
								a));
						d.C.hf || (a = document.createElement("div"), f =
							"text-align: left;margin: 0;padding: 5px 20px;", f += "vertical-align: left;", a
							.setAttribute("style", f), a.setAttribute("class", "gg_context_row"), f =
							document.createElement("a"), f.href = c.Sf("aHR0cDovL3Bhbm8ydnIuY29tLw=="), f
							.target = "_blank", f.innerHTML = c.Sf("Q3JlYXRlZCB3aXRoIFBhbm8yVlI="), 7 < this
							.Th.length && (f.innerHTML +=
								"<br/>" + c.sk(this.Th).replace(/./gm, function(k) {
									return "&#" + k.charCodeAt(0) + ";"
								})), f.setAttribute("style", "color: black; text-decoration: none;"), a
							.appendChild(f), g.appendChild(a));
						d.T.insertBefore(d.bd, d.T.firstChild);
						g.onclick = function() {
							d.bd && (d.T.removeChild(d.bd), d.bd = null)
						};
						g.oncontextmenu = g.onclick
					}
			};
			c.prototype.hn = function() {
				var a = this;
				var b = a.Fa;
				a.control = b;
				a.control = b;
				a.Em();
				setTimeout(function() {
					a.Kg()
				}, 10);
				setTimeout(function() {
					a.Sl()
				}, 200);
				setTimeout(function() {
					a.Ne();
					a.$g()
				}, 10);
				b.addEventListener &&
					(b.addEventListener("touchstart", function(d) {
						a.kq(d)
					}, !1), b.addEventListener("touchmove", function(d) {
						a.jq(d)
					}, !1), b.addEventListener("touchend", function(d) {
						a.iq(d)
					}, !1), b.addEventListener("touchcancel", function(d) {
						a.hq(d)
					}, !1), b.addEventListener("pointerdown", function(d) {
						a.Ll(d)
					}, !1), b.addEventListener("MSPointerDown", function(d) {
						a.Ll(d)
					}, !1), b.addEventListener("MSGestureStart", function(d) {
						a.Uk(d)
					}, !1), b.addEventListener("MSGestureEnd", function(d) {
						a.Tk(d)
					}, !1), b.addEventListener("MSGestureChange",
						function(d) {
							a.Ro(d)
						}, !1), b.addEventListener("gesturestart", function(d) {
						a.Uk(d)
					}, !1), b.addEventListener("gesturechange", function(d) {
						a.Jn(d)
					}, !1), b.addEventListener("gestureend", function(d) {
						a.Tk(d)
					}, !1), b.addEventListener("mousedown", function(d) {
						a.Oo(d)
					}, !1), b.addEventListener("mousemove", function(d) {
						a.No(d)
					}, !1), document.addEventListener("mouseup", function(d) {
						a.Mo(d)
					}, !1), b.addEventListener("mousewheel", function(d) {
						a.Kl(d)
					}, !1), b.addEventListener("DOMMouseScroll", function(d) {
						a.Kl(d)
					}, !1), document.addEventListener("keydown",
						function(d) {
							a.Go(d)
						}, !1), document.addEventListener("keyup", function(d) {
						a.Ho(d)
					}, !1), window.addEventListener("orientationchange", function() {
						a.Em()
					}, !1), window.addEventListener("resize", function() {
						a.Ne()
					}, !1), window.addEventListener("blur", function() {
						a.Xo()
					}, !1), a.T.addEventListener("webkitfullscreenchange", function() {
						a.bi()
					}, !1), document.addEventListener("mozfullscreenchange", function() {
						a.bi()
					}, !1), window.addEventListener("webkitfullscreenchange", function() {
						a.bi()
					}, !1), document.addEventListener("MSFullscreenChange",
						function() {
							a.bi()
						}, !1));
				b.oncontextmenu = function(d) {
					void 0 === d && (d = window.event);
					if (d.target && !a.zc(d.target)) return !0;
					if (!d.ctrlKey) {
						d = a.jg(d);
						var f = a.qe();
						a.Sp(d.x - f.x, d.y - f.y);
						return !1
					}
					return !0
				};
				window.addEventListener("deviceorientation", function(d) {
					a.Yo(d.alpha, d.beta, d.gamma, d.absolute)
				})
			};
			c.prototype.lk = function() {
				for (var a = 0; a < this.R.length; a++)
					if ("point" == this.R[a].type && (this.ba && this.ba.addSkinHotspot ? (this.R[a].af(), this
								.R[a].b = new this.ba.addSkinHotspot(this.R[a])) : this.R[a].b = new r.Rm(this,
								this.R[a]), this.R[a].b.__div.style.left = "-1000px", this.R[a].b.__div.style
							.top = "-1000px", this.R[a].b && this.R[a].b.__div)) {
						var b = this.Fa.firstChild;
						b ? this.Fa.insertBefore(this.R[a].b.__div, b) : this.Fa.appendChild(this.R[a].b.__div)
					}
			};
			c.prototype.Om = function() {
				var a, b = document.createElement("fakeelement"),
					d = {
						OTransition: "oTransitionEnd",
						MSTransition: "msTransitionEnd",
						MozTransition: "transitionend",
						WebkitTransition: "webkitTransitionEnd",
						transition: "transitionEnd"
					};
				for (a in d)
					if (void 0 !== b.style[a]) return d[a]
			};
			c.prototype.Hb = function(a) {
				var b = [];
				"#" == a.substr(0, 1) ? a = a.substr(1) : a = "^" + a + "$";
				a = new RegExp(a, "");
				for (var d = 0; d < this.N.length; d++) a.test(this.N[d].id) && b.push(this.N[d]);
				for (d = 0; d < this.I.length; d++) a.test(this.I[d].id) && b.push(this.I[d]);
				for (d = 0; d < this.Ta.length; d++) a.test(this.Ta[d].id) && b.push(this.Ta[d]);
				return b
			};
			c.prototype.bo = function(a) {
				if ("_videopanorama" == a) return this.s.b;
				a = this.Hb(a);
				return 0 < a.length ? a[0].b : null
			};
			c.prototype.Yl = function(a, b) {
				var d = this;
				b.addEventListener("ended", function(g) {
					d.Y("videoended", {
						video: g.target
					})
				});
				b.addEventListener("pause", function(g) {
					d.Y("videopaused", {
						video: g.target
					})
				});
				b.addEventListener("play", function(g) {
					d.Y("videostarted", {
						video: g.target
					})
				});
				for (var f = 0; f < this.I.length; f++)
					if (this.I[f].id == a) return this.I[f].b = b, this.I[f];
				f = new r.kk(this);
				f.registerElement(a, b);
				return f
			};
			c.prototype.Yb = function(a) {
				if (this.Fb) {
					var b = this.ia;
					if (b) return b.isPlaying(a)
				} else {
					if ("_main" === a) return !0;
					a = this.Hb(a);
					if (0 < a.length) return a[0].la ? a[0].rf : !a[0].b.ended && !a[0].b.paused
				}
				return !1
			};
			c.prototype.Ae = function(a, b) {
				if (this.Fb) {
					var d = this.ia;
					d && d.playSound(a, b)
				} else try {
					d = this.Hb(a);
					for (var f = 0; f < d.length; f++) {
						var g = d[f];
						g.$c = b && !isNaN(Number(b)) ? Number(b) - 1 : g.loop - 1; - 1 == g.$c && (g.$c =
							1E7);
						this.M(g.b);
						this.Yb(a) && this.si(a);
						g.la ? g.Md() : (g.b.play(), g.Oe && g.Fi());
						this.Kp(g.id)
					}
				} catch (h) {
					this.M(h)
				}
			};
			c.prototype.Tl = function(a, b) {
				a = this.Hb(a);
				for (var d = 0; d < a.length; d++) {
					var f = a[d];
					this.Yb(f.id) ? this.Bj(f.id) : this.Ae(f.id, b)
				}
			};
			c.prototype.kp = function(a, b) {
				a = this.Hb(a);
				for (var d = 0; d < a.length; d++) {
					var f =
						a[d];
					this.Yb(f.id) ? this.si(f.id) : this.Ae(f.id, b)
				}
			};
			c.prototype.Bj = function(a) {
				if (this.Fb) {
					var b = this.ia;
					b && b.pauseSound(a)
				} else try {
					if (b = void 0, "_main" == a) {
						this.mi(a);
						for (b = 0; b < this.N.length; b++) this.N[b].la ? this.N[b].Mi() : this.N[b].b
							.pause();
						for (b = 0; b < this.I.length; b++) this.I[b].b.pause()
					} else {
						var d = this.Hb(a);
						for (b = 0; b < d.length; b++) {
							var f = d[b];
							this.mi(f.id);
							f.la ? f.Mi() : f.b.pause()
						}
					}
				} catch (g) {
					this.M(g)
				}
			};
			c.prototype.bn = function(a, b) {
				a = this.Hb(a);
				for (var d = 0; d < a.length; d++) {
					var f = a[d];
					0 == b || 1 == b ?
						f.mg && f.mg(1 == b) : 2 == b && f.re && f.re();
					!f.gb || -1 == this.Ta.indexOf(f) && -1 == this.I.indexOf(f) || (this.Gb = this.md = f)
				}
			};
			c.prototype.si = function(a) {
				var b;
				if (this.Fb)(b = this.ia) && b.stopSound(a);
				else try {
					if ("_main" === a) {
						this.mi(a);
						for (b = 0; b < this.N.length; b++) this.N[b].la ? this.N[b].We() : (this.N[b].b
							.pause(), this.N[b].b.currentTime = 0);
						for (b = 0; b < this.I.length; b++) this.I[b].b.pause(), this.I[b].b.currentTime = 0
					} else {
						var d = this.Hb(a);
						for (b = 0; b < d.length; b++) {
							var f = d[b];
							this.mi(f.id);
							f.la ? f.We() : f.b && f.b.pause && (f.b.pause(),
								f.b.currentTime = 0)
						}
					}
				} catch (g) {
					this.M(g)
				}
			};
			c.prototype.mi = function(a) {
				-1 == this.Qc.indexOf(a) && this.Qc.push(a);
				var b = this.ce.indexOf(a); - 1 != b && this.ce.splice(b, 1);
				"_main" == a && (this.ce = [])
			};
			c.prototype.Kp = function(a) {
				-1 != this.Qc.indexOf("_main") && -1 == this.ce.indexOf(a) && this.ce.push(a);
				a = this.Qc.indexOf(a); - 1 != a && this.Qc.splice(a, 1)
			};
			c.prototype.Tp = function(a) {
				a = this.Hb(a);
				return 0 < a.length ? (a = a[0], a.la ? a.ln() : a.b ? a.b.currentTime : 0) : 0
			};
			c.prototype.Up = function(a, b) {
				a = this.Hb(a);
				0 < a.length && (a = a[0], a.la ?
					(0 > b && (b = 0), b > a.qh.duration && (b = a.qh.duration - .1), a.mn(b)) : a.b && (0 >
						b && (b = 0), b > a.b.duration && (b = a.b.duration - .1), a.b.currentTime = b))
			};
			c.prototype.Pp = function(a, b) {
				if (this.Fb) {
					var d = this.ia;
					d && d.setVolume(a, b)
				} else try {
					d = void 0;
					var f = Number(b);
					1 < f && (f = 1);
					0 > f && (f = 0);
					"_videopanorama" === a && this.s.b && (this.s.b.volume = f);
					if ("_main" === a) {
						this.V = f;
						for (d = 0; d < this.N.length; d++) this.N[d].b.volume = this.N[d].level * this.V;
						for (d = 0; d < this.I.length; d++) this.I[d].b.volume = this.I[d].level * this.V;
						this.s.b && (this.s.b.volume =
							this.V)
					} else {
						var g = this.Hb(a);
						this.M(g);
						for (d = 0; d < g.length; d++) {
							var h = g[d];
							h.b && null != h.b.volume && (h.b.volume = f * this.V);
							h.level = f
						}
					}
				} catch (l) {
					this.M(l)
				}
			};
			c.prototype.un = function(a, b) {
				if (this.Fb) {
					var d = this.ia;
					d && d.changeVolume(a, b)
				} else try {
					var f = d = void 0;
					"_videopanorama" === a && this.s.b && (this.s.b.volume = this.s.b.volume + Number(b));
					if ("_main" === a) {
						d = this.V;
						d += Number(b);
						1 < d && (d = 1);
						0 > d && (d = 0);
						this.V = d;
						for (f = 0; f < this.N.length; f++) this.N[f].b.volume = this.N[f].level * this.V;
						for (f = 0; f < this.I.length; f++) this.I[f].b.volume =
							this.I[f].level * this.V;
						this.s.b && (this.s.b.volume = this.V)
					} else {
						var g = this.Hb(a);
						for (f = 0; f < g.length; f++) {
							var h = g[f];
							d = h.level;
							d += Number(b);
							1 < d && (d = 1);
							0 > d && (d = 0);
							h.level = d;
							h.b && null != h.b.volume && (h.b.volume = d * this.V)
						}
					}
				} catch (l) {
					this.M(l)
				}
			};
			c.prototype.Ap = function(a, b) {
				a = this.Hb(a);
				for (var d = 0; d < a.length; d++) {
					var f = a[d];
					0 == b ? (f.Cf(!1), f.hb = !1) : 1 == b ? (f.Cf(!0), f.hb = !0) : 2 == b && f.b && (
						"visible" == f.b.style.visibility ? (f.Cf(!1), f.hb = !1) : (f.Cf(!0), f.hb = !0))
				}
			};
			c.prototype.sm = function() {
				try {
					for (var a = this, b = !1,
							d = !1, f = 0; f < this.N.length; f++) {
						var g = this.N[f];
						if (-1 != g.loop && !this.Yb(g.id) && -1 == this.Qc.indexOf(g.id) && (-1 == this.Qc
								.indexOf("_main") || -1 != this.ce.indexOf(g.id)))
							if (this.qa && this.La.enabled && 4 != g.mode && 6 != g.mode)
								if (this.La.Bk) {
									if (g.la) g.Md();
									else {
										var h = g.b.play();
										if (void 0 !== h) h.then(function() {})["catch"](function() {});
										g.b.currentTime = 0
									}
									g.ka = 0;
									d = !0
								} else b = !0;
						else if (4 != g.mode && 6 != g.mode && ("_background" != g.id || !this.Yb(g.id)))
							if (g.la) g.Md();
							else {
								h = g.b.play();
								if (void 0 !== h) h.then(function() {})["catch"](function() {});
								g.b.currentTime && (g.b.currentTime = 0)
							}
					}
					b && setTimeout(function() {
						a.La.$p()
					}, 1E3 * this.La.xb);
					d && (this.La.Wp = this.qa.currentTime, this.La.Vp = setInterval(function() {
						a.La.Gn()
					}, 10))
				} catch (l) {
					this.M(l)
				}
			};
			c.prototype.Kk = function() {
				for (var a = 0; a < this.La.Yg.length; a++) this.La.Jk(this.La.Yg[a])
			};
			c.prototype.bm = function() {
				for (var a; 0 < this.R.length;) a = this.R.pop(), a.b && (this.Fa.removeChild(a.b.__div),
					delete a.b), a.b = null;
				this.Y("hotspotsremoved", {})
			};
			c.prototype.Nj = function(a) {
				this.jh = a;
				0 != a ? this.T.style.zIndex =
					a.toString() : this.T.style.zIndex = "auto";
				this.Ga && this.Ga.Yc && (this.Ga.Yc.zIndex = (a + 4).toString());
				this.Fa.style.zIndex = (a + 4).toString();
				this.za.style.zIndex = (a + 3).toString();
				this.Aa.style.zIndex = (a + 5).toString();
				for (var b = 0; b < this.I.length + this.Ta.length; b++) {
					var d = b < this.I.length ? this.I[b] : this.Ta[b - this.I.length];
					d.b && (d.b.style.zIndex = (a + (d.gb ? 8E4 : 0)).toString())
				}
			};
			c.prototype.Bf = function(a) {
				var b = this.isFullscreen !== a;
				this.isFullscreen !== a && (this.isFullscreen = a, this.update(100));
				if (this.isFullscreen) {
					if (this.Bi) try {
						this.T.webkitRequestFullScreen ?
							this.T.webkitRequestFullScreen() : this.T.mozRequestFullScreen ? this.T
							.mozRequestFullScreen() : this.T.msRequestFullscreen ? this.T
							.msRequestFullscreen() : this.T.requestFullScreen ? this.T.requestFullScreen() :
							this.T.requestFullscreen && this.T.requestFullscreen()
					} catch (d) {
						this.M(d)
					}
					this.T.style.position = "absolute";
					a = this.qe();
					this.T.style.left = window.pageXOffset - a.x + this.margin.left + "px";
					this.T.style.top = window.pageYOffset - a.y + this.margin.top + "px";
					this.Nj(10);
					document.body.style.overflow = "hidden";
					b && (this.ja &&
						this.ja.ggEnterFullscreen && this.ja.ggEnterFullscreen(), this.Y(
							"fullscreenenter", {}))
				} else {
					if (this.Bi) try {
						document.webkitIsFullScreen ? document.webkitCancelFullScreen() : document
							.mozFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen ?
							document.msExitFullscreen() : document.fullScreen && (document
								.cancelFullScreen ? document.cancelFullScreen() : document.exitFullscreen &&
								document.exitFullscreen())
					} catch (d) {
						this.M(d)
					}
					this.T.style.position = "relative";
					this.T.style.left = "0px";
					this.T.style.top = "0px";
					this.Nj(0);
					document.body.style.overflow = "";
					b && (this.ja && this.ja.ggExitFullscreen && this.ja.ggExitFullscreen(), this.Y(
						"fullscreenexit", {}))
				}
				this.Ne()
			};
			c.prototype.wi = function() {
				this.Bf(!this.isFullscreen)
			};
			c.prototype.En = function() {
				this.Bf(!0)
			};
			c.prototype.exitFullscreen = function() {
				this.Bf(!1)
			};
			c.prototype.Sn = function() {
				return this.isFullscreen
			};
			c.prototype.Yp = function(a, b, d) {
				this.l.Kd = this.l.ph;
				this.l.Kf = this.l.fh;
				this.l.enabled = !0;
				this.l.Se = this.l.enabled;
				this.l.active = !0;
				this.l.jd = 0;
				var f = new Date;
				this.l.Bd = 0;
				this.l.startTime = f.getTime();
				a && 0 != a && (this.l.speed = a);
				b && (this.l.timeout = b);
				d && (this.l.vi = d);
				this.Y("autorotatechanged", {})
			};
			c.prototype.aq = function() {
				this.l.active = !1;
				this.l.enabled = !1;
				this.l.Se = this.l.enabled;
				this.Qe = this.l.Wh = !1;
				this.u.active && this.u.Hg && (this.u.active = !1, this.u.Hg = !1, this.u.Eb = 0);
				this.Y("autorotatechanged", {})
			};
			c.prototype.fq = function() {
				this.l.enabled = !this.l.active;
				this.l.Se = this.l.enabled;
				this.l.active = this.l.enabled;
				this.l.jd = 0;
				if (this.l.enabled) {
					var a = new Date;
					this.l.Bd = 0;
					this.l.startTime = a.getTime();
					this.l.Kd = this.l.ph;
					this.l.Kf = this.l.fh
				}
				this.Y("autorotatechanged", {})
			};
			c.prototype.Xp = function(a) {
				this.rb.nd && this.hm();
				this.Pb = "";
				a && "" != a && (this.l.Kd = a);
				this.l.Se = this.l.enabled;
				this.l.Kf = !0;
				this.l.enabled = !0;
				this.l.active = !0;
				this.l.jd = 0;
				a = new Date;
				this.l.Bd = 0;
				this.l.startTime = a.getTime();
				this.Y("autorotatechanged", {})
			};
			c.prototype.hm = function() {
				this.rb.nd = !1;
				this.rb.dj = !0;
				this.l.active = this.B.fe;
				this.ma.splice(this.ma.indexOf(this.w), 1);
				0 < this.ma.length &&
					(this.w = this.ma[0]);
				this.Pb = "";
				this.Pg(this.B.Vh);
				this.Qg(this.B.Ci);
				this.Og(this.B.Nh);
				this.B.fe = !1;
				this.lf = (new Date).getTime()
			};
			c.prototype.Ak = function(a) {
				if (this.Nd = document.getElementById(a)) {
					this.Nd.innerHTML = "";
					this.T = document.createElement("div");
					this.T.onselectstart = function() {
						return !1
					};
					W && this.T.setAttribute("id", "viewport");
					a = "top:\t0px;left: 0px;position:relative;-ms-touch-action: none;touch-action: none;text-align: left;" +
						(this.Ia + "user-select: none;");
					this.T.setAttribute("style", a);
					this.Nd.appendChild(this.T);
					this.D = document.createElement("div");
					a = "top:\t0px;left: 0px;width:  100px;height: 100px;overflow: hidden;position:absolute;-ms-touch-action: none;touch-action: none;" +
						(this.Ia + "user-select: none;");
					W && this.D.setAttribute("id", "viewer");
					this.D.setAttribute("style", a);
					this.T.appendChild(this.D);
					if (this.Fb) {
						var b = document.createElement("div");
						a = "top:\t0px;left: 0px;width:  100%;height: 100%;overflow: hidden;position:absolute;-ms-touch-action: none;touch-action: none;" +
							(this.Ia +
								"user-select: none;");
						b.setAttribute("id", this.fj);
						b.setAttribute("style", a);
						this.D.appendChild(b)
					}
					this.Ga && (this.Ga.Yc = document.createElement("canvas"), W && this.Ga.Yc.setAttribute(
							"id", "lensflarecanvas"), a =
						"top:\t0px;left: 0px;width:  100px;height: 100px;overflow: hidden;position:absolute;" +
						(this.Ia + "user-select: none;"), a += this.Ia + "pointer-events: none;", this.Ga.Yc
						.setAttribute("style", a), this.T.appendChild(this.Ga.Yc));
					this.Fa = document.createElement("div");
					W && this.Fa.setAttribute("id", "hotspots");
					a = "top:\t0px;left: 0px;width:  100px;height: 100px;overflow: hidden;position:absolute;";
					this.qj && (a +=
						"background-image: url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7);"
					);
					this.Lc && !this.Z && (a += this.Ia + "transform: translateZ(9999999px);");
					a += this.Ia + "user-select: none;";
					this.Fa.setAttribute("style", a);
					this.T.appendChild(this.Fa);
					this.za = document.createElement("canvas");
					W && this.za.setAttribute("id", "hotspotcanvas");
					a = "top:\t0px;left: 0px;width:  100px;height: 100px;overflow: hidden;position:absolute;" +
						(this.Ia + "user-select: none;");
					a += this.Ia + "pointer-events: none;";
					this.za.setAttribute("style", a);
					this.T.appendChild(this.za);
					this.Aa = document.createElement("div");
					W && this.Aa.setAttribute("id", "hotspottext");
					this.Aa.setAttribute("style",
						"top:\t0px;left: 0px;position:absolute;padding: 3px;visibility: hidden;");
					this.Aa.innerHTML = " Hotspot text!";
					this.T.appendChild(this.Aa);
					this.divSkin = this.ja = this.Fa;
					this.Nj(0)
				} else alert("container not found!")
			};
			c.prototype.Ck = function(a) {
				this.Da = !0;
				return function() {
					a.Qa &&
						(a.h && a.h.complete ? (a.loaded = !0, a.Qa.drawImage(a.h, 0, 0, a.width, a.height),
							a.h = null, a.Ed = null) : a.Ed && a.Ed.complete && !a.loaded && (a.Qa
							.drawImage(a.Ed, 0, 0, a.width, a.height), a.Ed = null))
				}
			};
			c.prototype.zk = function(a) {
				var b, d = 128;
				this.h.vf && (this.D.style.backgroundColor = this.h.vf.replace("0x", "#"));
				a ? (d = this.Uf, this.Gf = 1) : this.uc > d && (d = this.uc);
				for (b = 0; 6 > b; b++) {
					var f = this.qb.fb[b];
					a ? (f.width = this.Uf, f.height = this.Uf) : (f.K = document.createElement("canvas"), f.K
						.width = this.uc, f.K.height = this.uc, f.width = this.uc,
						f.height = this.uc, f.Qa = f.K.getContext("2d"));
					var g = "position:absolute;";
					g += "left: 0px;";
					g += "top: 0px;";
					g += "width: " + d + "px;";
					g += "height: " + d + "px;";
					a && (g += "outline: 1px solid transparent;");
					g += this.Ia + "transform-origin: 0% 0%;";
					g += "-webkit-user-select: none;";
					g += this.Ia + "transform: ";
					var h = "";
					var l = 1;
					this.xf && (l = 100);
					h = 4 > b ? h + ("rotateY(" + -90 * b + "deg)") : h + ("rotateX(" + (4 == b ? -90 : 90) +
						"deg)");
					this.xf && (h += " scale(" + l + ")");
					h += " translate3d(" + -d / 2 + "px," + -d / 2 + "px," + -d * l / (2 * this.Gf) + "px)";
					g += h + ";";
					f.il = h;
					a || (f.K.setAttribute("style",
						g), this.D.insertBefore(f.K, this.D.firstChild))
				}
				if (!a) {
					for (b = 0; 6 > b; b++) f = this.qb.fb[b], "" != this.Ze[b] && (f.Ed = new Image, f.Ed
						.crossOrigin = this.crossOrigin, f.Ed.onload = this.Ck(f), f.Ed.setAttribute("src",
							this.oc(this.Ze[b])), this.Wb.push(f.Ed));
					for (b = 0; 6 > b; b++) f = this.qb.fb[b], f.loaded = !1, f.h = new Image, f.h.crossOrigin =
						this.crossOrigin, f.h.onload = this.Ck(f), f.h.setAttribute("src", this.oc(this.uh[b])),
						this.Wb.push(f.h)
				}
			};
			c.prototype.hi = function() {
				var a;
				this.Ba.da.x = 0;
				this.Ba.da.y = 0;
				if (this.Tc) {
					for (a = 0; a <
						this.qb.fb.length; a++) this.qb.fb[a].K && this.qb.fb[a].K.setAttribute && (this.qb.fb[
						a].K.setAttribute("src", this.Gk), this.D.removeChild(this.qb.fb[a].K));
					if (this.h.J) {
						for (a = 0; a < this.h.J.length; a++) {
							var b = this.h.J[a];
							for (f in b.U)
								if (b.U.hasOwnProperty(f)) {
									var d = b.U[f];
									d.visible = !1;
									d.K && (d.Qa && d.Qa.clearRect(0, 0, d.Qa.canvas.width, d.Qa.canvas.height),
										this.xi.push(d.K));
									d.h && delete d.h;
									d.ib && (this.H.deleteTexture(d.ib), this.fd--);
									d.Qa = null;
									d.K = null;
									d.h = null
								} delete b.U
						}
						delete this.h.J;
						this.h.J = null
					}
				}
				this.oa.hi();
				var f = [];
				for (a = 0; a < this.I.length; a++) b = this.I[a], b.ld ? f.push(b) : b.Be();
				for (a = 0; a < this.Ta.length; a++) this.Ta[a].Be();
				this.A.wg = -1;
				this.za.style.visibility = "hidden";
				this.kb = 0;
				this.He = [];
				this.La.Yg = [];
				for (a = 0; a < this.N.length; a++) b = this.N[a], 0 == b.mode || b.Ol || this.He.push(b);
				this.I = f;
				this.Ta = [];
				this.s.b && (this.T.removeChild(this.s.b), this.s.b = null, a = this.Hb("_videopanorama"), 0 < a
					.length && (a[0].b = null));
				this.s.hd = !1;
				this.s.Mh = !1
			};
			c.prototype.dl = function() {
				var a = 1,
					b = -1 != navigator.userAgent.indexOf("Mac");
				window.devicePixelRatio && b && (a = window.devicePixelRatio);
				return {
					ih: screen.width * a,
					pg: screen.height * a
				}
			};
			c.prototype.Yk = function() {
				var a = this.dl();
				return a.ih > a.pg ? a.ih : a.pg
			};
			c.prototype.Ej = function(a, b) {
				var d = (new DOMParser).parseFromString(a, "text/xml");
				this.Wi = a;
				this.Xl(d, b);
				this.ia && (this.M("Apply to Flash player"), this.ia.readConfigString(this.Wi), this.ia
					.setLocked(!0), this.ia.setSlaveMode(!0))
			};
			c.prototype.Wl = function(a, b, d) {
				try {
					var f = void 0;
					f = new XMLHttpRequest;
					f.open("GET", a, !1);
					f.send(null);
					if (f.responseXML) {
						var g = a.lastIndexOf("/");
						0 <= g && (this.Ld = a.substr(0, g + 1));
						2 <= arguments.length && null != b && (this.Ld = b);
						this.Ej(f.responseText, d)
					} else alert("Error loading panorama XML")
				} catch (h) {
					alert("Error:" + h)
				}
			};
			c.prototype.mp = function(a, b, d, f) {
				var g = new XMLHttpRequest;
				var h = this;
				g.onload = function(l) {
					if (4 <= g.readyState)
						if (g.responseXML) {
							var k = a.lastIndexOf("/");
							0 <= k && (h.Ld = a.substr(0, k + 1));
							3 <= arguments.length && null != d && (h.Ld = d);
							h.Ej(g.responseText, f);
							b && b()
						} else alert("Error loading panorama XML");
					else console.error("Wrong state loading XML:" + g.statusText)
				};
				g.onerror = function() {
					console.error("Error loading XML:" + g.statusText)
				};
				g.open("GET", a, !0);
				g.send(null)
			};
			c.prototype.Ni = function(a) {
				var b = "";
				"{" == a.charAt(0) && (b = a.substr(1, a.length - 2));
				(a = this.Od[b]) && (b = a);
				a = {
					oldNodeId: this.Xa,
					nodeId: b
				};
				this.Y("beforechangenodeid", a);
				"" != this.Xa && -1 == this.ek.indexOf(this.Xa) && this.ek.push(this.Xa);
				this.El = this.Xa;
				this.Xa = b;
				this.M("change active node: " + b);
				this.ba && this.ba.changeActiveNode && this.ba.changeActiveNode("{" +
					b + "}");
				this.Y("changenodeid", a)
			};
			c.prototype.Vk = function() {
				return this.Xa
			};
			c.prototype.Zk = function() {
				if (0 < this.Ma.length) {
					var a = this.Ma.indexOf(this.Xa);
					a++;
					a >= this.Ma.length && (a = 0);
					return this.Ma[a]
				}
				return ""
			};
			c.prototype.qo = function() {
				if (0 < this.Ma.length) {
					var a = this.Ma.indexOf(this.Xa);
					a--;
					0 > a && (a = this.Ma.length - 1);
					return this.Ma[a]
				}
				return ""
			};
			c.prototype.Xn = function() {
				return this.El
			};
			c.prototype.Vo = function(a) {
				return -1 != this.ek.indexOf(a)
			};
			c.prototype.Xl = function(a, b) {
				var d = a.firstChild;
				this.Le = [];
				this.Ma = [];
				this.Od = [];
				for (a = d.firstChild; a;) {
					if ("map" == a.nodeName) {
						var f = {},
							g = a.getAttributeNode("title");
						g && (f.title = g.nodeValue.toString());
						g = a.getAttributeNode("type");
						f.type = g.nodeValue.toString();
						"web" == f.type ? (g = a.getAttributeNode("mapprovider"), f.mapprovider = g.nodeValue
							.toString(), (g = a.getAttributeNode("mapstyle")) && (f.mapstyle = g.nodeValue
								.toString()), (g = a.getAttributeNode("googlecustomstylecode")) && (f
								.googlecustomstylecode = g.nodeValue.toString()), (g = a.getAttributeNode(
								"mapurltemplate")) &&
							(f.mapurltemplate = g.nodeValue.toString()), (g = a.getAttributeNode(
								"mapmaxzoom")) && (f.mapmaxzoom = Number(g.nodeValue)), (g = a
								.getAttributeNode("mapkey")) && (f.mapkey = g.nodeValue.toString()), (g = a
								.getAttributeNode("styleurl")) && (f.styleurl = g.nodeValue.toString())) : (
							g = a.getAttributeNode("width"), f.width = Number(g.nodeValue), g = a
							.getAttributeNode("height"), f.height = Number(g.nodeValue), g = a
							.getAttributeNode("zoomlevels"), f.zoomlevels = Number(g.nodeValue), g = a
							.getAttributeNode("tileformat"), f.tileformat = g.nodeValue.toString(),
							g = a.getAttributeNode("bgcolor"), f.bgcolor = g.nodeValue.toString(), g = a
							.getAttributeNode("transparent"), f.transparent = 1 == g.nodeValue, g = a
							.getAttributeNode("floorplannorth"), f.floorplannorth = Number(g.nodeValue));
						g = a.getAttributeNode("id");
						this.Uh[g.nodeValue.toString()] = f
					}
					a = a.nextSibling
				}
				if ("tour" == d.nodeName) {
					this.kf = !0;
					a = "";
					(g = d.getAttributeNode("start")) && (a = g.nodeValue.toString());
					this.hasOwnProperty("startNode") && this.startNode && (a = String(this.startNode), this
						.startNode = "");
					this.hasOwnProperty("startView") &&
						this.startView && ("object" === typeof this.startView && null !== this.startView ? b =
							this.startView : "" != this.startView && (b = String(this.startView)), this
							.startView = "");
					f = d.firstChild;
					var h = "";
					for (d = ""; f;) {
						if ("panorama" == f.nodeName) {
							if (g = f.getAttributeNode("id")) h = g.nodeValue.toString(), "" == a && (a = h),
								"" == d && (d = h), this.Le[h] = f, this.Ma.push(h);
							for (g = f.firstChild; g;) {
								if ("userdata" == g.nodeName) {
									var l = this.bg(g);
									this.gh[h] = l;
									h == a && (this.gh._first = l);
									l.customnodeid && (this.Od[l.customnodeid] = h);
									this.Ac[h] = this.Hk(g);
									this.pf[h] = this.Ik(g)
								}
								g = g.nextSibling
							}
						}
						if ("masternode" == f.nodeName)
							for (g = f.firstChild; g;) "userdata" == g.nodeName && (l = this.bg(g), this.gh
								._master = l), g = g.nextSibling;
						f = f.nextSibling
					}
					this.Le.hasOwnProperty(a) || (g = this.Od[a]) && (a = g);
					this.Le.hasOwnProperty(a) || (this.Nc("Start node " + a + " not found!"), a = d);
					this.Dj(this.Le[a], b);
					this.Ni("{" + a + "}");
					this.Xa = a
				} else this.kf = !1, this.Dj(d, b), this.Ni(""), this.Ma.push("");
				this.Y("configloaded", {});
				this.Y("changenode", {})
			};
			c.prototype.Dj = function(a, b) {
				var d = this;
				this.bm();
				this.Ga && this.Ga.op();
				this.Af(this.eb);
				this.hi();
				this.xg = 0;
				for (var f = a.firstChild, g, h, l = 0; f;) {
					if ("view" == f.nodeName) {
						if (g = f.getAttributeNode("fovmode")) this.f.mode = Number(g.nodeValue);
						g = f.getAttributeNode("pannorth");
						this.pan.zj = 1 * (g ? g.nodeValue : 0);
						for (var k = f.firstChild; k;) {
							"start" == k.nodeName && (g = k.getAttributeNode("pan"), this.pan.c = Number(g ? g
									.nodeValue : 0), this.pan.Ra = this.pan.c, g = k.getAttributeNode(
									"tilt"), this.i.c = Number(g ? g.nodeValue : 0), this.i.Ra = this.i.c,
								g = k.getAttributeNode("roll"), this.O.c =
								Number(g ? g.nodeValue : 0), this.O.Ra = this.O.c, g = k.getAttributeNode(
									"fov"), this.f.c = Number(g ? g.nodeValue : 70), this.f.Ra = this.f.c,
								g = k.getAttributeNode("projection"), this.ci = Number(g ? g.nodeValue : 4),
								this.Cc(this.ci));
							"min" == k.nodeName && (g = k.getAttributeNode("pan"), this.pan.min = 1 * (g ? g
									.nodeValue : 0), g = k.getAttributeNode("tilt"), this.i.min = 1 * (g ? g
									.nodeValue : -90), g = k.getAttributeNode("fov"), this.f.min = 1 * (g ?
									g.nodeValue : 5), 1E-20 > this.f.min && (this.f.min = 1E-20), g = k
								.getAttributeNode("fovpixel"), this.f.Gg = 1 * (g ? g.nodeValue :
									0));
							if ("max" == k.nodeName) {
								g = k.getAttributeNode("pan");
								this.pan.max = 1 * (g ? g.nodeValue : 0);
								g = k.getAttributeNode("tilt");
								this.i.max = 1 * (g ? g.nodeValue : 90);
								g = k.getAttributeNode("fov");
								this.f.max = 1 * (g ? g.nodeValue : 120);
								180 <= this.f.max && (this.f.max = 179.9);
								if (g = k.getAttributeNode("fovstereographic")) this.f.xj = 1 * g.nodeValue;
								if (g = k.getAttributeNode("fovfisheye")) this.f.wj = 1 * g.nodeValue;
								if (g = k.getAttributeNode("scaletofit")) this.C.gm = 1 == g.nodeValue
							}
							if ("flyin" == k.nodeName) {
								if (g = k.getAttributeNode("projection")) this.wc.Eb =
									Number(g.nodeValue);
								if (g = k.getAttributeNode("pan")) this.wc.pan = parseFloat(g.nodeValue);
								if (g = k.getAttributeNode("tilt")) this.wc.i = parseFloat(g.nodeValue);
								if (g = k.getAttributeNode("fov")) this.wc.f = parseFloat(g.nodeValue)
							}
							k = k.nextSibling
						}
					}
					if ("autorotate" == f.nodeName) {
						if (g = f.getAttributeNode("speed")) this.l.speed = 1 * g.nodeValue;
						if (g = f.getAttributeNode("delay")) this.l.timeout = 1 * g.nodeValue;
						if (g = f.getAttributeNode("returntohorizon")) this.l.vi = 1 * g.nodeValue;
						if (g = f.getAttributeNode("nodedelay")) this.l.$h = 1 *
							g.nodeValue;
						if (g = f.getAttributeNode("noderandom")) this.l.yj = 1 == g.nodeValue;
						this.Qd && (this.l.enabled = !0, this.l.Se = !0, this.l.active = !1);
						this.l.Bd = 0;
						if (g = f.getAttributeNode("startloaded")) this.l.Vg = 1 == g.nodeValue, this.l.Vg && (
							this.l.active = !1);
						if (g = f.getAttributeNode("useanimation")) this.l.fh = 1 == g.nodeValue, this.l.Kf =
							this.l.fh;
						if (g = f.getAttributeNode("syncanimationwithvideo")) this.l.Uj = 1 == g.nodeValue
					}
					if ("animation" == f.nodeName) {
						if (g = f.getAttributeNode("syncanimationwithvideo")) this.l.Uj = 1 == g.nodeValue;
						if (g = f.getAttributeNode("useinautorotation")) this.l.fh = 1 == g.nodeValue;
						if (g = f.getAttributeNode("animsequence")) this.l.ph = g.nodeValue, this.Qd && (this.l
							.Kd = this.l.ph);
						this.ma = [];
						for (k = f.firstChild; k;) {
							if ("clip" == k.nodeName) {
								this.w = new r.gk;
								if (g = k.getAttributeNode("animtitle")) this.w.Re = g.nodeValue.toString();
								if (g = k.getAttributeNode("cliptitle")) this.w.Pa = g.nodeValue.toString();
								if (g = k.getAttributeNode("nodeid")) this.w.Gq = g.nodeValue.toString();
								if (g = k.getAttributeNode("length")) this.w.length = Number(g.nodeValue);
								if (g = k.getAttributeNode("animtype")) this.w.en = Number(g.nodeValue);
								if (g = k.getAttributeNode("nextcliptitle")) this.w.Ml = g.nodeValue.toString();
								if (g = k.getAttributeNode("nextclipnodeid")) this.w.Zh = g.nodeValue
									.toString();
								if (g = k.getAttributeNode("nextclipstartview")) this.w.Uo = g.nodeValue
									.toString();
								if (g = k.getAttributeNode("transitiontype")) this.w.lq = Number(g.nodeValue);
								var q = k.firstChild;
								for (this.w.W = []; q;) {
									if ("keyframe" == q.nodeName) {
										var p = new r.Gc;
										if (g = q.getAttributeNode("time")) p.time = Number(g.nodeValue);
										if (g = q.getAttributeNode("value")) p.value = Number(g.nodeValue);
										if (g = q.getAttributeNode("valuestring")) p.ck = g.nodeValue
											.toString();
										if (g = q.getAttributeNode("transitiontime")) p.xb = Number(g
											.nodeValue);
										g = q.getAttributeNode("type");
										var t = 0;
										g && (p.type = Number(g.nodeValue), t = Number(g.nodeValue));
										if (g = q.getAttributeNode("property")) p.mb = Number(g.nodeValue);
										if (g = q.getAttributeNode("additionaltrackid")) p.nh = g.nodeValue
											.toString();
										if (1 == t || 2 == t) {
											if (g = q.getAttributeNode("bezierintime")) p.ge = Number(g
												.nodeValue);
											if (g =
												q.getAttributeNode("bezierinvalue")) p.Wc = Number(g.nodeValue);
											if (g = q.getAttributeNode("bezierouttime")) p.he = Number(g
												.nodeValue);
											if (g = q.getAttributeNode("bezieroutvalue")) p.ie = Number(g
												.nodeValue)
										}
										this.w.W.push(p)
									}
									q = q.nextSibling
								}
								this.ma.push(this.w)
							}
							k = k.nextSibling
						}
					}
					"input" == f.nodeName && (h || (h = f));
					if (h)
						for (q = 0; 6 > q; q++) g = h.getAttributeNode("prev" + q + "url"), this.Ze[q] = g ?
							String(g.nodeValue) : "";
					"altinput" == f.nodeName && (k = 0, (g = f.getAttributeNode("screensize")) && (k = 1 * g
						.nodeValue), 0 < k && k <= this.Yk() && k > l && (l =
						k, h = f));
					if ("control" == f.nodeName && this.Qd) {
						if (g = f.getAttributeNode("simulatemass")) this.Ba.enabled = 1 == g.nodeValue;
						if (g = f.getAttributeNode("rubberband")) this.C.fm = 1 == g.nodeValue;
						if (g = f.getAttributeNode("locked")) this.C.Ab = 1 == g.nodeValue;
						g && (this.C.ue = 1 == g.nodeValue);
						if (g = f.getAttributeNode("lockedmouse")) this.C.Ab = 1 == g.nodeValue;
						if (g = f.getAttributeNode("lockedkeyboard")) this.C.ue = 1 == g.nodeValue;
						if (g = f.getAttributeNode("lockedkeyboardzoom")) this.C.Ko = 1 == g.nodeValue;
						if (g = f.getAttributeNode("lockedwheel")) this.C.kd =
							1 == g.nodeValue;
						if (g = f.getAttributeNode("invertwheel")) this.C.rl = 1 == g.nodeValue;
						if (g = f.getAttributeNode("speedwheel")) this.C.om = 1 * g.nodeValue;
						if (g = f.getAttributeNode("invertcontrol")) this.C.Ad = 1 == g.nodeValue;
						if (g = f.getAttributeNode("sensitivity")) this.C.sensitivity = 1 * g.nodeValue, 1 >
							this.C.sensitivity && (this.C.sensitivity = 1);
						if (g = f.getAttributeNode("dblclickfullscreen")) this.C.Yi = 1 == g.nodeValue;
						if (g = f.getAttributeNode("contextfullscreen")) this.C.Zf = 1 == g.nodeValue;
						if (g = f.getAttributeNode("contextprojections")) this.C.sh =
							1 == g.nodeValue;
						if (g = f.getAttributeNode("hideabout")) this.C.hf = 1 == g.nodeValue;
						for (k = f.firstChild; k;) "menulink" == k.nodeName && (q = {
							text: "",
							url: ""
						}, g = k.getAttributeNode("text"), q.text = g.nodeValue, g = k.getAttributeNode(
							"url"), q.url = g.nodeValue, this.Fg.push(q)), k = k.nextSibling
					}
					if ("transition" == f.nodeName && this.Qd) {
						if (g = f.getAttributeNode("enabled")) this.B.enabled = 1 == g.nodeValue;
						if (g = f.getAttributeNode("blendtime")) this.B.Tf = 1 * g.nodeValue;
						if (g = f.getAttributeNode("blendcolor")) this.B.Ue = g.nodeValue.toString();
						if (g = f.getAttributeNode("type")) this.B.type = g.nodeValue.toString();
						if (g = f.getAttributeNode("softedge")) this.B.Dc = 1 * g.nodeValue;
						if (g = f.getAttributeNode("zoomin")) this.B.Oa = 1 * g.nodeValue;
						if (g = f.getAttributeNode("zoomout")) this.B.fc = 1 * g.nodeValue;
						if (g = f.getAttributeNode("zoomfov")) this.B.Of = 1 * g.nodeValue;
						if (g = f.getAttributeNode("zoomspeed")) this.B.de = 1 * g.nodeValue;
						if (g = f.getAttributeNode("zoomoutpause")) this.B.Pf = 1 == g.nodeValue;
						"cut" == this.B.type && (this.B.Tf = 0)
					}
					if ("soundstransition" == f.nodeName) {
						if (g =
							f.getAttributeNode("enabled")) this.La.enabled = 1 == g.nodeValue;
						if (g = f.getAttributeNode("transitiontime")) this.La.xb = 1 * g.nodeValue;
						if (g = f.getAttributeNode("crossfade")) this.La.Bk = 1 == g.nodeValue
					}
					if ("flyintransition" == f.nodeName) {
						if (g = f.getAttributeNode("enabled")) this.rb.enabled = 1 == g.nodeValue && this.Z;
						if (g = f.getAttributeNode("speed")) this.rb.speed = 1 * g.nodeValue
					}
					"userdata" == f.nodeName && (this.userdata = this.Lf = this.bg(f), this.Ac[a.id] || (this
						.Ac[a.id] = this.Hk(f), this.pf[a.id] = this.Ik(f)));
					if ("hotspots" ==
						f.nodeName)
						for (k = f.firstChild; k;) {
							if ("label" == k.nodeName && this.Qd) {
								q = this.A.Wj;
								if (g = k.getAttributeNode("enabled")) q.enabled = 1 == g.nodeValue;
								if (g = k.getAttributeNode("width")) q.width = 1 * g.nodeValue;
								if (g = k.getAttributeNode("height")) q.height = 1 * g.nodeValue;
								if (g = k.getAttributeNode("textcolor")) q.Xj = 1 * g.nodeValue;
								if (g = k.getAttributeNode("textalpha")) q.Vj = 1 * g.nodeValue;
								if (g = k.getAttributeNode("background")) q.background = 1 == g.nodeValue;
								if (g = k.getAttributeNode("backgroundalpha")) q.hc = 1 * g.nodeValue;
								if (g = k.getAttributeNode("backgroundcolor")) q.ic =
									1 * g.nodeValue;
								if (g = k.getAttributeNode("border")) q.Li = 1 * g.nodeValue;
								if (g = k.getAttributeNode("bordercolor")) q.lc = 1 * g.nodeValue;
								if (g = k.getAttributeNode("borderalpha")) q.kc = 1 * g.nodeValue;
								if (g = k.getAttributeNode("borderradius")) q.Ki = 1 * g.nodeValue;
								if (g = k.getAttributeNode("wordwrap")) q.Di = 1 == g.nodeValue
							}
							if ("polystyle" == k.nodeName && this.Qd) {
								if (g = k.getAttributeNode("mode")) this.A.mode = 1 * g.nodeValue;
								if (g = k.getAttributeNode("bordercolor")) this.A.lc = 1 * g.nodeValue;
								if (g = k.getAttributeNode("backgroundcolor")) this.A.ic =
									1 * g.nodeValue;
								if (g = k.getAttributeNode("borderalpha")) this.A.kc = 1 * g.nodeValue;
								if (g = k.getAttributeNode("backgroundalpha")) this.A.hc = 1 * g.nodeValue;
								if (g = k.getAttributeNode("handcursor")) this.A.ff = 1 == g.nodeValue
							}
							g = void 0;
							"hotspot" == k.nodeName && (g = new r.mh(this), g.type = "point", g.Rb(k), this.R
								.push(g));
							"polyhotspot" == k.nodeName && (g = new r.mh(this), g.type = "poly", g.Rb(k), this.R
								.push(g));
							k = k.nextSibling
						}
					if ("sounds" == f.nodeName || "media" == f.nodeName)
						for (k = f.firstChild; k;) {
							if ("sound" == k.nodeName && !this.Nl)
								for (g =
									new r.Zm(this), g.Rb(k), this.Fb || g.addElement(), q = 0; q < this.He
									.length; q++) g.id == this.He[q].id && (this.He.splice(q, 1), q--);
							"video" == k.nodeName && (g = new r.kk(this), g.Rb(k), this.Fb || g.addElement());
							"image" == k.nodeName && (g = new r.Xm(this), g.Rb(k), this.Fb || g.addElement());
							"lensflare" == k.nodeName && this.Ga && (g = new r.Ym(this), g.Rb(k), this.Ga.Cg
								.push(g));
							k = k.nextSibling
						}
					f = f.nextSibling
				}
				for (q = 0; q < this.He.length; q++) {
					a = this.He[q];
					if (this.qa && this.La.enabled && this.Yb(a.id)) this.La.Yg.push(a);
					else {
						try {
							a.la ? a.We() :
								a.b.pause()
						} catch (w) {
							this.M(w)
						}
						a.Be()
					}
					this.N.splice(this.N.indexOf(a), 1)
				}
				1 != this.B.Oa && 2 != this.B.Oa && this.Kk();
				this.jb.ji = !0;
				b && ("object" === typeof b && null !== b ? (b.hasOwnProperty("pan") && this.Fe(Number(b.pan)),
					b.hasOwnProperty("tilt") && this.Ge(Number(b.tilt)), b.hasOwnProperty("fov") && this
					.Ee(Number(b.fov)), b.hasOwnProperty("projection") && this.Cc(Number(b.projection))
				) : "" != b && (b = b.toString().split("/"), 4 < b.length && this.Cc(Number(b[4])),
					0 < b.length && (g = String(b[0]), "N" == g.charAt(0) ? this.Lj(Number(g.substr(
							1))) :
						"S" == g.charAt(0) ? this.Lj(-180 + Number(g.substr(1))) : this.Fe(Number(g))),
					1 < b.length && this.Ge(Number(b[1])), 2 < b.length && this.Ee(Number(b[2]))));
				if (h) {
					for (q = 0; 6 > q; q++)(g = h.getAttributeNode("tile" + q + "url")) && (this.uh[q] = String(
						g.nodeValue)), g = h.getAttributeNode("tile" + q + "url1");
					for (q = 0; 6 > q; q++)(g = h.getAttributeNode("prev" + q + "url")) && (this.Ze[q] = String(
						g.nodeValue));
					if (g = h.getAttributeNode("tilesize")) this.uc = 1 * g.nodeValue;
					if (g = h.getAttributeNode("canvassize")) this.Uf = Number(g.nodeValue);
					if (g = h.getAttributeNode("tilescale")) this.Gf =
						1 * g.nodeValue;
					if (g = h.getAttributeNode("leveltileurl")) this.h.Jl = g.nodeValue;
					if (g = h.getAttributeNode("leveltilesize")) this.h.G = Number(g.nodeValue);
					if (g = h.getAttributeNode("levelbias")) this.h.Hl = Number(g.nodeValue);
					if (g = h.getAttributeNode("levelbiashidpi")) this.h.Il = Number(g.nodeValue);
					g = h.getAttributeNode("overlap");
					this.ab.O = 0;
					this.ab.pitch = 0;
					g && (this.h.Ja = Number(g.nodeValue));
					if (g = h.getAttributeNode("levelingroll")) this.ab.O = Number(g.nodeValue);
					if (g = h.getAttributeNode("levelingpitch")) this.ab.pitch =
						Number(g.nodeValue);
					this.kb = 0;
					(g = h.getAttributeNode("flat")) && 1 == g.nodeValue && (this.kb = 2);
					g = h.getAttributeNode("width");
					this.h.width = 1 * (g ? g.nodeValue : 1);
					g = h.getAttributeNode("height");
					this.h.height = 1 * (g ? g.nodeValue : this.h.width);
					this.s.src = [];
					this.h.J = [];
					for (k = h.firstChild; k;) {
						if ("preview" == k.nodeName) {
							if (g = k.getAttributeNode("color")) this.h.vf = g.nodeValue;
							if (g = k.getAttributeNode("strip")) this.h.Ul = 1 == g.nodeValue
						}
						if ("video" == k.nodeName) {
							if (g = k.getAttributeNode("format")) "3x2" == g.nodeValue && (this.s.format =
								14), "equirectangular" == g.nodeValue && (this.s.format = 1);
							if (g = k.getAttributeNode("flipy")) this.s.gj = Number(g.nodeValue);
							if (g = k.getAttributeNode("startonload")) this.s.Rj = 1 == g.nodeValue;
							if (g = k.getAttributeNode("startmutedmobile")) this.s.qm = 1 == g.nodeValue;
							if (g = k.getAttributeNode("bleed")) this.s.Te = Number(g.nodeValue);
							if (g = k.getAttributeNode("endaction")) this.s.me = String(g.nodeValue);
							if (g = k.getAttributeNode("width")) this.s.width = Number(g.nodeValue);
							if (g = k.getAttributeNode("height")) this.s.height = Number(g.nodeValue);
							for (q = k.firstChild; q;) "source" == q.nodeName && (g = q.getAttributeNode(
								"url")) && this.s.src.push(g.nodeValue.toString()), q = q.nextSibling
						}
						if ("level" == k.nodeName) {
							h = new r.jk;
							g = k.getAttributeNode("width");
							h.width = 1 * (g ? g.nodeValue : 1);
							g = k.getAttributeNode("height");
							h.height = 1 * (g ? g.nodeValue : h.width);
							if (g = k.getAttributeNode("preload")) h.cache = 1 == g.nodeValue;
							if (g = k.getAttributeNode("preview")) h.uf = 1 == g.nodeValue;
							h.L = Math.floor((h.width + this.h.G - 1) / this.h.G);
							h.fa = Math.floor((h.height + this.h.G - 1) / this.h.G);
							this.h.J.push(h)
						}
						k =
							k.nextSibling
					}
					this.h.sj = this.h.J.length
				}
				this.gf = !0;
				this.ah && (this.Z = this.Tc = !1, this.mc || (this.M("dummy rendering"), this.mc = document
					.createElement("canvas"), this.mc.width = 100, this.mc.height = 100, this.mc.id =
					"dummycanvas", this.D.appendChild(this.mc)), this.Sc());
				this.Z && this.H && (this.oa.pl(this.Gf), this.oa.ql());
				this.Tc && (0 < this.h.J.length ? this.zk(!0) : this.zk(!1), this.xg = 0);
				var u = this;
				0 < this.h.J.length && this.h.Ul && 0 == this.kb && (b = new Image, h = new r.jk, h.uf = !0, h
					.cache = !0, h.L = h.fa = 0, h.height = h.width = 0, this.h.J.push(h),
					b.crossOrigin = this.crossOrigin, b.onload = this.oa.To(b), b.setAttribute("src", this
						.Ke(6, this.h.sj - 1, 0, 0)));
				if (0 < this.s.src.length && this.Z)
					if (this.dh) {
						this.s.b = document.createElement("video");
						this.s.b.crossOrigin = this.crossOrigin;
						this.s.b.setAttribute("style", "display:none; max-width:none;");
						this.s.b.setAttribute("playsinline", "playsinline");
						this.s.b.preload = !0;
						this.s.b.volume = this.V;
						this.T.appendChild(this.s.b);
						this.s.hd = !1;
						this.s.um = !1;
						this.s.b.oncanplay = function() {
							if (!u.s.hd) {
								u.s.Mh = !0;
								var w, v, y = [],
									A = new r.ya,
									x = u.H,
									B = u.s.b.videoWidth / 3;
								u.s.width = u.s.b.videoWidth;
								u.s.height = u.s.b.videoHeight;
								for (w = 0; 6 > w; w++) {
									var z = w % 3 * B + u.s.Te;
									var C = z + B - 2 * u.s.Te;
									var D = 4;
									3 > w && (D += B);
									var F = D + B - 2 * u.s.Te;
									for (v = 0; 4 > v; v++) {
										A.x = -1;
										A.y = -1;
										A.z = 1;
										for (var E = 0; E < v; E++) A.em();
										y.push((0 < A.x ? z : C) / (3 * B), (0 < A.y ? F : D) / (2 * B))
									}
								}
								x.bindBuffer(x.ARRAY_BUFFER, u.s.ti);
								x.bufferData(x.ARRAY_BUFFER, new Float32Array(y), x.STATIC_DRAW)
							}
						};
						"exit" == this.s.me ? this.s.b.onended = function() {
								u.s.Mh = !1;
								u.s.hd = !1;
								u.T.removeChild(u.s.b);
								u.s.b = null;
								u.update()
							} :
							"stop" == this.s.me ? u.s.b.onended = function() {
								u.update()
							} : "{" == this.s.me.charAt(0) ? this.s.b.onended = function() {
								u.ye(u.s.me, "$fwd")
							} : this.s.b.loop = !0;
						for (q = 0; q < this.s.src.length; q++) h = document.createElement("source"), h
							.setAttribute("src", this.oc(this.s.src[q])), this.s.b.appendChild(h);
						h = this.Hb("_videopanorama");
						0 < h.length ? h[0].b = this.s.b : this.Yl("_videopanorama", this.s.b);
						if (this.s.Rj && (h = this.s.b.play(), void 0 !== h)) h.then(function() {})["catch"](
							function() {
								d.s.qm && (d.s.b.muted = !0, d.s.b.play())
							})
					} else "{" ==
						this.s.me.charAt(0) && u.ye(u.s.me, "$fwd");
				this.lk();
				this.B.rd || this.sm();
				this.update();
				this.Qd && (this.Qd = !1, this.ja && this.ja.ggViewerInit && this.ja.ggViewerInit(), this.rb
					.enabled && 0 == this.kb && this.Z && (this.Cc(9), this.pan.c = this.wc.pan, this.i.c =
						this.wc.i, this.f.c = this.wc.f, this.Ka = this.wc.Eb, this.w = this.hg(!1), this
						.pan.c = this.w.W[0].value, this.i.c = this.w.W[1].value, this.f.c = this.w.W[2]
						.value, 3 == this.w.W[3].mb && this.Cc(this.w.W[3].value), this.Pb = this.w.Pa, this
						.B.Vh = this.C.Ab, this.B.Ci = this.C.kd, this.B.Nh =
						this.C.ue, this.l.active = !1, this.l.eg = !0));
				this.Sc()
			};
			c.prototype.Aj = function(a, b) {
				0 < a.length && (".xml" == a.substr(a.length - 4) || ".swf" == a.substr(a.length - 4) || "{" ==
					a.charAt(0) ? this.ye(this.oc(a), b) : window.open(this.oc(a), b))
			};
			c.prototype.Zp = function() {
				this.gf = this.isLoaded = !1;
				this.checkLoaded = this.Wb = [];
				this.di = 0;
				this.ja && this.ja.ggReLoaded && this.ja.ggReLoaded();
				this.Y("beforechangenode", {})
			};
			c.prototype.ye = function(a, b) {
				if ("" != a && "{}" != a) {
					this.Zp();
					this.ba && this.ba.hotspotProxyOut && this.ba.hotspotProxyOut(this.ua.id,
						this.ua.url);
					".swf" == a.substr(a.length - 4) && (a = a.substr(0, a.length - 4) + ".xml");
					var d = "",
						f = null;
					"object" === typeof b && null !== b ? f = b : b && (d = b.toString());
					d = d.replace("$cur", this.pan.c + "/" + this.i.c + "/" + this.f.c + "//" + this.ta());
					d = d.replace("$(cur)", this.pan.c + "/" + this.i.c + "/" + this.f.c + "//" + this.ta());
					d = d.replace("$fwd", "N" + this.pe() + "/" + this.i.c + "/" + this.f.c + "//" + this.ta());
					d = d.replace("$(fwd)", "N" + this.pe() + "/" + this.i.c + "/" + this.f.c + "//" + this
						.ta());
					d = d.replace("$bwd", "S" + this.pe() + "/" + this.i.c + "/" + this.f.c +
						"//" + this.ta());
					d = d.replace("$(bwd)", "S" + this.pe() + "/" + this.i.c + "/" + this.f.c + "//" + this
						.ta());
					d = d.replace("$ap", String(this.pan.c));
					d = d.replace("$(ap)", String(this.pan.c));
					d = d.replace("$an", String(this.pe()));
					d = d.replace("$(an)", String(this.pe()));
					d = d.replace("$at", String(this.i.c));
					d = d.replace("$(at)", String(this.i.c));
					d = d.replace("$af", String(this.f.c));
					d = d.replace("$(af)", String(this.f.c));
					d = d.replace("$ar", String(this.ta()));
					d = d.replace("$(ar)", String(this.ta()));
					"" != d && (b = d.split("/"), 3 < b.length &&
						"" != b[3] && (this.startNode = b[3]));
					b = null !== f ? f : d;
					this.wa();
					if ("{" == a.charAt(0)) {
						var g = a.substr(1, a.length - 2);
						if (this.Xa == g && this.Vf) return;
						(f = this.Od[g]) && (g = f);
						f = this.B;
						var h = this.H;
						if (this.Le[g]) {
							this.Vf = !0;
							if (this.B.enabled && this.Z && this.B.ec) {
								f.be || f.rd || (f.Vh = this.C.Ab, f.Ci = this.C.kd, f.Nh = this.C.ue, this.Pg(!
									0), this.Qg(!0), this.Og(!0));
								var l = void 0;
								"wipeleftright" == f.type ? l = 1 : "wiperightleft" == f.type ? l = 2 :
									"wipetopbottom" == f.type ? l = 3 : "wipebottomtop" == f.type ? l = 4 :
									"wiperandom" == f.type && (l = Math.ceil(4 *
										Math.random()));
								f.Xi = l;
								h.bindFramebuffer(h.FRAMEBUFFER, f.ec);
								h.viewport(0, 0, f.ec.width, f.ec.height);
								h.clear(h.COLOR_BUFFER_BIT | h.DEPTH_BUFFER_BIT);
								f.Xg = !0;
								this.$g();
								f.Xg = !1;
								h.bindFramebuffer(h.FRAMEBUFFER, null);
								h.viewport(0, 0, this.sb.width, this.sb.height);
								h = new Date;
								this.ua != this.eb ? (f.kh = this.ua.Qb / this.o.width, f.lh = 1 - this.ua.vb /
									this.o.height) : (f.kh = .5, f.lh = .5);
								1 != f.Oa && 2 != f.Oa ? (f.Sj = h.getTime(), f.be = !0) : (f.Qm = h.getTime(),
									f.rd = !0, f.yb = Math.sin(this.Mb() / 2 * Math.PI / 180) / Math.sin(f
										.Of / 2 * Math.PI / 180),
									f.yb = Math.max(f.yb, 1), f.Pm = 1 / f.de * f.yb * .3)
							}
							this.Dj(this.Le[g], b);
							this.Ni(a);
							if (f.enabled && this.Z && 0 != f.fc) {
								f.Ie = this.kg();
								f.Je = this.Eh();
								f.Hd = this.Mb();
								f.qd = this.ta();
								if (1 == f.fc || 3 == f.fc) this.ni(f.Of);
								else if (2 == f.fc) this.ni(this.Mb() + f.Of);
								else if (4 == f.fc) {
									for (g = b = 0; g < this.ma.length; g++) this.ma[g].Pa && 0 == this.ma[g].Pa
										.indexOf("__FlyIn") && (b = this.ma[g]);
									0 != b ? (this.Cc(this.Dh(3, b).value), this.Fe(this.Dh(0, b).value), this
										.Ge(this.Dh(1, b).value), this.Ee(this.Dh(2, b).value)) : (this.Cc(
											this.wc.Eb), this.Fe(this.wc.pan),
										this.Ge(this.wc.i), this.ni(this.wc.f))
								}
								f.Pf || 1 == f.Oa || 2 == f.Oa || (4 == f.fc ? (this.w = this.hg(!0, f.Ie, f.Je,
										f.Hd), this.Pb = this.w.Pa, this.l.active = !0, this.rb.nd = !0) :
									this.moveTo(f.Ie, f.Je, f.Hd, f.de, 0, f.qd))
							}
							this.ia && this.ia.openNext(a, d);
							this.B.rd || this.B.be || (this.ha && this.Ti(), this.Vf = !1)
						} else {
							this.Nc("invalid node id: " + g);
							return
						}
					} else this.Wl(a, null, b);
					this.Y("changenode", {});
					this.update(5)
				}
			};
			c.prototype.eo = function() {
				return this.gf ? this.kf ? this.Ma.slice(0) : [""] : []
			};
			c.prototype.bg = function(a) {
				var b;
				var d = {
					title: "",
					description: "",
					author: "",
					datetime: "",
					copyright: "",
					source: "",
					information: "",
					comment: "",
					latitude: 0,
					longitude: 0,
					customnodeid: "",
					tags: []
				};
				if (a && ((b = a.getAttributeNode("title")) && (d.title = b.nodeValue.toString()), (b = a
							.getAttributeNode("description")) && (d.description = b.nodeValue.toString()), (b =
							a.getAttributeNode("author")) && (d.author = b.nodeValue.toString()), (b = a
							.getAttributeNode("datetime")) && (d.datetime = b.nodeValue.toString()), (b = a
							.getAttributeNode("copyright")) && (d.copyright = b.nodeValue.toString()),
						(b = a.getAttributeNode("source")) && (d.source = b.nodeValue.toString()), (b = a
							.getAttributeNode("info")) && (d.information = b.nodeValue.toString()), (b = a
							.getAttributeNode("comment")) && (d.comment = b.nodeValue.toString()), (b = a
							.getAttributeNode("latitude")) && (d.latitude = Number(b.nodeValue)), (b = a
							.getAttributeNode("longitude")) && (d.longitude = Number(b.nodeValue)), (b = a
							.getAttributeNode("customnodeid")) && (d.customnodeid = b.nodeValue.toString()), b =
						a.getAttributeNode("tags"))) {
					a = b.nodeValue.toString().split("|");
					for (b =
						0; b < a.length; b++) "" == a[b] && (a.splice(b, 1), b--);
					d.tags = a
				}
				return d
			};
			c.prototype.Hk = function(a) {
				for (var b = {}, d = a.firstChild; d;) {
					if ("mapcoords" == d.nodeName) {
						var f = {
							x: 0,
							y: 0
						};
						a = d.getAttributeNode("x");
						f.x = Number(a.nodeValue);
						a = d.getAttributeNode("y");
						f.y = Number(a.nodeValue);
						a = d.getAttributeNode("mapid");
						b[a.nodeValue.toString()] = f
					}
					d = d.nextSibling
				}
				return b
			};
			c.prototype.Ik = function(a) {
				for (var b = {}, d = a.firstChild; d;) {
					if ("mapcoords" == d.nodeName) {
						var f = {
							x: 0,
							y: 0
						};
						a = d.getAttributeNode("x_floorplan_percent");
						f.x =
							Number(a.nodeValue);
						a = d.getAttributeNode("y_floorplan_percent");
						f.y = Number(a.nodeValue);
						a = d.getAttributeNode("mapid");
						b[a.nodeValue.toString()] = f
					}
					d = d.nextSibling
				}
				return b
			};
			c.prototype.ij = function(a) {
				return a ? this.gh[a] ? this.gh[a] : this.bg() : this.Lf
			};
			c.prototype.fo = function(a) {
				a = this.ij(a);
				var b = [];
				"" != a.latitude && 0 != a.latitude && 0 != a.longitude && (b.push(a.latitude), b.push(a
					.longitude));
				return b
			};
			c.prototype.jo = function(a) {
				return this.ij(a).title
			};
			c.prototype.df = function(a, b) {
				var d;
				for (d = 0; d < this.w.W.length; d++)
					if (this.w.W[d].time ==
						a && this.w.W[d].mb == b) return this.w.W[d];
				return !1
			};
			c.prototype.Dh = function(a, b) {
				var d;
				for (d = 0; d < b.W.length; d++)
					if (0 == b.W[d].time && b.W[d].mb == a) return b.W[d];
				return !1
			};
			c.prototype.co = function(a) {
				var b, d = 1E5,
					f = a,
					g = !1;
				for (b = 0; b < this.w.W.length; b++) this.w.W[b].mb == a.mb && this.w.W[b].time > a.time &&
					this.w.W[b].time < d && (f = this.w.W[b], d = f.time, g = !0);
				return g ? f : !1
			};
			c.prototype.Kn = function(a) {
				for (var b = [], d = 0; d < this.w.W.length; d++)
					if (this.w.W[d].time <= a && 4 == this.w.W[d].mb) {
						for (var f = !1, g = 0; g < b.length; g++)
							if (b[g].nh ==
								this.w.W[d].nh) {
								b[g].time < this.w.W[d].time ? b.splice(g, 1) : f = !0;
								break
							} f || b.push(this.w.W[d])
					} return b
			};
			c.prototype.hg = function(a, b, d, f) {
				for (var g = 0; g < this.ma.length; g++)
					if (this.ma[g].Pa && 0 == this.ma[g].Pa.indexOf("__FlyIn")) return this.ma[g];
				g = new r.fk;
				g.Pa = "__FlyIn";
				g.Ef = this.pan.c;
				g.Tg = this.i.c;
				g.Gd = this.f.c;
				g.Sg = this.Ka;
				g.qd = this.ci;
				a ? (g.$e = !1, g.ke = !1, g.speed = this.B.de, g.Rc = b, g.$d = d, g.Ff = f) : (g.$e = !0, g
					.ke = !0, g.speed = this.rb.speed, g.Rc = this.pan.Ra, g.$d = this.i.Ra, g.Ff = this.f
					.Ra);
				return this.Sk(g)
			};
			c.prototype.Sk =
				function(a) {
					var b = new r.gk;
					b.Pa = a.Pa;
					b.Re = "";
					b.W = [];
					for (var d = a.Sg != a.qd && -1 != a.qd; - 180 > a.Rc;) a.Rc = a.Rc + 360;
					for (; 180 < a.Rc;) a.Rc = a.Rc - 360;
					var f = a.Rc - a.Ef;
					if (360 == this.pan.max - this.pan.min) {
						for (; - 180 > f;) f += 360;
						for (; 180 < f;) f -= 360
					}
					var g = a.$d - a.Tg,
						h = a.Ff - a.Gd,
						l = Math.round(Math.sqrt(f * f + g * g + h * h) / a.speed * .33);
					d && (l = Math.max(10, l));
					b.length = l;
					if (a.le) {
						var k = Math.ceil(.7 * l);
						k = Math.min(15, k);
						k = Math.max(5, k);
						b.length = l + k;
						var q = .33 * k
					}
					var p = a.Ff,
						t = l,
						u = 0,
						w = l - 1;
					if (d) {
						var v = a.Gd,
							y = void 0;
						4 == a.qd ? y = 120 : y = this.ig(a.qd);
						var A = a.Ff;
						h = A - a.Gd;
						var x = new r.vc(0, a.Gd),
							B = new r.vc(l, A),
							z = new r.vc,
							C = new r.vc;
						C.$a(l / 3, a.Gd + h / 3);
						z.$a(2 * l / 3, A - h / 3);
						if (v > y)
							for (; u <= l && v > y;) v = new r.vc, v.Ji(x, B, C, z, u), v = v.y, u++;
						else u = 1;
						u >= .8 * l && (t = u = Math.round(.8 * l));
						0 == u && (u = 1);
						y = void 0;
						4 == a.Sg ? y = 120 : y = this.ig(a.Sg);
						v = a.Ff;
						if (v > y)
							for (; w > u && v > y;) v = new r.vc, v.Ji(x, B, C, z, w), v = v.y, w--
					}
					x = new r.Gc;
					x.time = 0;
					x.mb = 0;
					x.value = a.Ef;
					x.type = 1;
					x.he = l / 3;
					x.ie = a.$e ? a.Ef : a.Ef + f / 3;
					b.W.push(x);
					x = new r.Gc;
					x.time = 0;
					x.mb = 1;
					x.value = a.Tg;
					x.type = 1;
					x.he = l / 3;
					x.ie = a.$e ? a.Tg :
						a.Tg + g / 3;
					b.W.push(x);
					x = new r.Gc;
					x.time = 0;
					x.mb = 2;
					x.value = a.Gd;
					x.type = 1;
					x.he = l / 3;
					x.ie = a.$e ? a.Gd : a.Gd + h / 3;
					b.W.push(x);
					x = new r.Gc;
					x.time = 0;
					x.mb = 3;
					x.value = a.Sg;
					x.type = 0;
					x.xb = 0;
					b.W.push(x);
					d && (x = new r.Gc, x.time = u, x.mb = 3, x.value = a.qd, x.type = 0, x.xb = w - u, b.W.push(
						x));
					x = new r.Gc;
					x.time = l;
					x.mb = 0;
					x.value = a.Ef + f;
					x.type = 1;
					x.ge = 2 * l / 3;
					a.ke && !a.le ? x.Wc = x.value : x.Wc = x.value - f / 3;
					a.le && (x.he = l + q, x.ie = x.value + q / l * f);
					b.W.push(x);
					x = new r.Gc;
					x.time = l;
					x.mb = 1;
					x.value = a.$d;
					x.type = 1;
					x.ge = 2 * l / 3;
					a.ke && !a.le ? x.Wc = a.$d : x.Wc = a.$d -
						g / 3;
					a.le && (x.he = l + q, x.ie = x.value + q / l * g);
					b.W.push(x);
					x = new r.Gc;
					x.time = t;
					x.mb = 2;
					x.value = p;
					x.type = 1;
					x.ge = 2 * t / 3;
					a.ke ? x.Wc = p : x.Wc = p - h / 3;
					b.W.push(x);
					a.le && (x = new r.Gc, x.time = l + k, x.mb = 0, x.value = a.Rc, x.type = 1, x.ge = l + k - q, x
						.Wc = a.Rc, b.W.push(x), x = new r.Gc, x.time = l + k, x.mb = 1, x.value = a.$d, x
						.type = 1, x.ge = l + k - q, x.Wc = a.$d, b.W.push(x));
					this.ma.push(b);
					return b
				};
			c.prototype.xq = function() {
				this.s.b && this.s.b.play()
			};
			c.prototype.yq = function() {
				this.s.b && (this.s.b.pause(), this.s.b.currentTime = 0)
			};
			c.prototype.wq = function() {
				this.s.b &&
					this.s.b.pause()
			};
			c.prototype.Op = function(a) {
				this.s.b && (0 > a && (a = 0), a > this.s.b.duration && (a = this.s.b.duration - .1), this.s.b
					.currentTime = a, this.update())
			};
			c.prototype.wo = function() {
				return this.s.b ? this.s.b.currentTime : 0
			};
			c.prototype.vo = function() {
				if (this.s.b) return this.s.b
			};
			c.prototype.Np = function(a) {
				if (this.s.b) {
					var b = !this.s.b.paused && !this.s.b.ended,
						d = this.s.b.currentTime;
					this.s.b.pause();
					isNaN(parseInt(a, 10)) ? this.s.b.src = String(a) : this.s.b.src = this.s.src[parseInt(a,
						10)];
					b && (this.s.b.onloadedmetadata =
						function() {
							this.currentTime = d;
							this.play();
							this.onloadedmetadata = null
						});
					this.s.b.currentTime = d
				}
			};
			c.prototype.Dn = function() {
				this.Nl = !0
			};
			return c
		}();
	r.a = e
})(ggP2VR || (ggP2VR = {}));
window.ggHasHtml5Css3D = U;
window.ggHasWebGL = V;
window.pano2vrPlayer = ggP2VR.a;
ggP2VR.a.prototype.getVersion = ggP2VR.a.prototype.hl;
ggP2VR.a.prototype.readConfigString = ggP2VR.a.prototype.Ej;
ggP2VR.a.prototype.readConfigUrl = ggP2VR.a.prototype.Wl;
ggP2VR.a.prototype.readConfigUrlAsync = ggP2VR.a.prototype.mp;
ggP2VR.a.prototype.readConfigXml = ggP2VR.a.prototype.Xl;
ggP2VR.a.prototype.openUrl = ggP2VR.a.prototype.Aj;
ggP2VR.a.prototype.openNext = ggP2VR.a.prototype.ye;
ggP2VR.a.prototype.setMargins = ggP2VR.a.prototype.zp;
ggP2VR.a.prototype.addListener = ggP2VR.a.prototype.addListener;
ggP2VR.a.prototype.on = ggP2VR.a.prototype.addListener;
ggP2VR.a.prototype.removeEventListener = ggP2VR.a.prototype.removeEventListener;
ggP2VR.a.prototype.off = ggP2VR.a.prototype.removeEventListener;
ggP2VR.a.prototype.detectBrowser = ggP2VR.a.prototype.Fk;
ggP2VR.a.prototype.initWebGL = ggP2VR.a.prototype.Kc;
ggP2VR.a.prototype.getPercentLoaded = ggP2VR.a.prototype.mo;
ggP2VR.a.prototype.setBasePath = ggP2VR.a.prototype.tp;
ggP2VR.a.prototype.getBasePath = ggP2VR.a.prototype.Ln;
ggP2VR.a.prototype.setViewerSize = ggP2VR.a.prototype.lm;
ggP2VR.a.prototype.getViewerSize = ggP2VR.a.prototype.zo;
ggP2VR.a.prototype.setSkinObject = ggP2VR.a.prototype.Jp;
ggP2VR.a.prototype.changeViewMode = ggP2VR.a.prototype.sn;
ggP2VR.a.prototype.getViewMode = ggP2VR.a.prototype.xo;
ggP2VR.a.prototype.changePolygonMode = ggP2VR.a.prototype.wk;
ggP2VR.a.prototype.setPolygonMode = ggP2VR.a.prototype.wk;
ggP2VR.a.prototype.getPolygonMode = ggP2VR.a.prototype.oo;
ggP2VR.a.prototype.showOnePolyHotspot = ggP2VR.a.prototype.mm;
ggP2VR.a.prototype.hideOnePolyHotspot = ggP2VR.a.prototype.ll;
ggP2VR.a.prototype.changePolyHotspotColor = ggP2VR.a.prototype.qn;
ggP2VR.a.prototype.toggleOnePolyHotspot = ggP2VR.a.prototype.gq;
ggP2VR.a.prototype.changeViewState = ggP2VR.a.prototype.tn;
ggP2VR.a.prototype.getViewState = ggP2VR.a.prototype.yo;
ggP2VR.a.prototype.setRenderFlags = ggP2VR.a.prototype.Cp;
ggP2VR.a.prototype.getRenderFlags = ggP2VR.a.prototype.ro;
ggP2VR.a.prototype.setMaxTileCount = ggP2VR.a.prototype.jm;
ggP2VR.a.prototype.getVFov = ggP2VR.a.prototype.Mb;
ggP2VR.a.prototype.setVFov = ggP2VR.a.prototype.ni;
ggP2VR.a.prototype.getHFov = ggP2VR.a.prototype.Pn;
ggP2VR.a.prototype.updatePanorama = ggP2VR.a.prototype.$g;
ggP2VR.a.prototype.isTouching = ggP2VR.a.prototype.yl;
ggP2VR.a.prototype.getIsMobile = ggP2VR.a.prototype.Un;
ggP2VR.a.prototype.setIsMobile = ggP2VR.a.prototype.xp;
ggP2VR.a.prototype.getIsTour = ggP2VR.a.prototype.Vn;
ggP2VR.a.prototype.getIsAutorotating = ggP2VR.a.prototype.Rn;
ggP2VR.a.prototype.getIsLoading = ggP2VR.a.prototype.Tn;
ggP2VR.a.prototype.getIsLoaded = ggP2VR.a.prototype.Ch;
ggP2VR.a.prototype.getIsTileLoading = ggP2VR.a.prototype.Xk;
ggP2VR.a.prototype.getLastActivity = ggP2VR.a.prototype.Wn;
ggP2VR.a.prototype.getPan = ggP2VR.a.prototype.kg;
ggP2VR.a.prototype.getPanNorth = ggP2VR.a.prototype.pe;
ggP2VR.a.prototype.getPanDest = ggP2VR.a.prototype.lo;
ggP2VR.a.prototype.getPanN = ggP2VR.a.prototype.$k;
ggP2VR.a.prototype.setPan = ggP2VR.a.prototype.Fe;
ggP2VR.a.prototype.setPanNorth = ggP2VR.a.prototype.Lj;
ggP2VR.a.prototype.changePan = ggP2VR.a.prototype.vk;
ggP2VR.a.prototype.changePanLog = ggP2VR.a.prototype.pn;
ggP2VR.a.prototype.getTilt = ggP2VR.a.prototype.Eh;
ggP2VR.a.prototype.getTiltDest = ggP2VR.a.prototype.so;
ggP2VR.a.prototype.setTilt = ggP2VR.a.prototype.Ge;
ggP2VR.a.prototype.changeTilt = ggP2VR.a.prototype.xk;
ggP2VR.a.prototype.changeTiltLog = ggP2VR.a.prototype.rn;
ggP2VR.a.prototype.getFov = ggP2VR.a.prototype.hj;
ggP2VR.a.prototype.getFovDest = ggP2VR.a.prototype.On;
ggP2VR.a.prototype.setFov = ggP2VR.a.prototype.Ee;
ggP2VR.a.prototype.changeFov = ggP2VR.a.prototype.uk;
ggP2VR.a.prototype.changeFovLog = ggP2VR.a.prototype.Oi;
ggP2VR.a.prototype.getRoll = ggP2VR.a.prototype.cl;
ggP2VR.a.prototype.setRoll = ggP2VR.a.prototype.Mj;
ggP2VR.a.prototype.setPanTilt = ggP2VR.a.prototype.Bp;
ggP2VR.a.prototype.setPanTiltFov = ggP2VR.a.prototype.li;
ggP2VR.a.prototype.setDefaultView = ggP2VR.a.prototype.vp;
ggP2VR.a.prototype.setLocked = ggP2VR.a.prototype.yp;
ggP2VR.a.prototype.setLockedMouse = ggP2VR.a.prototype.Pg;
ggP2VR.a.prototype.setLockedKeyboard = ggP2VR.a.prototype.Og;
ggP2VR.a.prototype.getLockedKeyboard = ggP2VR.a.prototype.Yn;
ggP2VR.a.prototype.setLockedWheel = ggP2VR.a.prototype.Qg;
ggP2VR.a.prototype.moveTo = ggP2VR.a.prototype.moveTo;
ggP2VR.a.prototype.moveToEx = ggP2VR.a.prototype.Xh;
ggP2VR.a.prototype.moveToDefaultView = ggP2VR.a.prototype.Po;
ggP2VR.a.prototype.moveToDefaultViewEx = ggP2VR.a.prototype.Qo;
ggP2VR.a.prototype.addHotspotElements = ggP2VR.a.prototype.lk;
ggP2VR.a.prototype.playSound = ggP2VR.a.prototype.Ae;
ggP2VR.a.prototype.playPauseSound = ggP2VR.a.prototype.Tl;
ggP2VR.a.prototype.playStopSound = ggP2VR.a.prototype.kp;
ggP2VR.a.prototype.pauseSound = ggP2VR.a.prototype.Bj;
ggP2VR.a.prototype.activateSound = ggP2VR.a.prototype.bn;
ggP2VR.a.prototype.soundGetTime = ggP2VR.a.prototype.Tp;
ggP2VR.a.prototype.soundSetTime = ggP2VR.a.prototype.Up;
ggP2VR.a.prototype.setMediaVisibility = ggP2VR.a.prototype.Ap;
ggP2VR.a.prototype.isPlaying = ggP2VR.a.prototype.Yb;
ggP2VR.a.prototype.stopSound = ggP2VR.a.prototype.si;
ggP2VR.a.prototype.setVolume = ggP2VR.a.prototype.Pp;
ggP2VR.a.prototype.changeVolume = ggP2VR.a.prototype.un;
ggP2VR.a.prototype.removeHotspots = ggP2VR.a.prototype.bm;
ggP2VR.a.prototype.getHotspotsVisible = ggP2VR.a.prototype.Wk;
ggP2VR.a.prototype.getCurrentPerspective = ggP2VR.a.prototype.dd;
ggP2VR.a.prototype.addHotspot = ggP2VR.a.prototype.cn;
ggP2VR.a.prototype.updateHotspot = ggP2VR.a.prototype.oq;
ggP2VR.a.prototype.removeHotspot = ggP2VR.a.prototype.np;
ggP2VR.a.prototype.setActiveHotspot = ggP2VR.a.prototype.Af;
ggP2VR.a.prototype.getPointHotspotIds = ggP2VR.a.prototype.no;
ggP2VR.a.prototype.getHotspot = ggP2VR.a.prototype.Qn;
ggP2VR.a.prototype.setFullscreen = ggP2VR.a.prototype.Bf;
ggP2VR.a.prototype.toggleFullscreen = ggP2VR.a.prototype.wi;
ggP2VR.a.prototype.enterFullscreen = ggP2VR.a.prototype.En;
ggP2VR.a.prototype.exitFullscreen = ggP2VR.a.prototype.exitFullscreen;
ggP2VR.a.prototype.getIsFullscreen = ggP2VR.a.prototype.Sn;
ggP2VR.a.prototype.startAutorotate = ggP2VR.a.prototype.Yp;
ggP2VR.a.prototype.stopAutorotate = ggP2VR.a.prototype.aq;
ggP2VR.a.prototype.toggleAutorotate = ggP2VR.a.prototype.fq;
ggP2VR.a.prototype.startAnimation = ggP2VR.a.prototype.Xp;
ggP2VR.a.prototype.createLayers = ggP2VR.a.prototype.Ak;
ggP2VR.a.prototype.removePanorama = ggP2VR.a.prototype.hi;
ggP2VR.a.prototype.getScreenResolution = ggP2VR.a.prototype.dl;
ggP2VR.a.prototype.getMaxScreenResolution = ggP2VR.a.prototype.Yk;
ggP2VR.a.prototype.getNodeIds = ggP2VR.a.prototype.eo;
ggP2VR.a.prototype.getNodeUserdata = ggP2VR.a.prototype.ij;
ggP2VR.a.prototype.getNodeLatLng = ggP2VR.a.prototype.fo;
ggP2VR.a.prototype.getNodeTitle = ggP2VR.a.prototype.jo;
ggP2VR.a.prototype.getCurrentNode = ggP2VR.a.prototype.Vk;
ggP2VR.a.prototype.getNextNode = ggP2VR.a.prototype.Zk;
ggP2VR.a.prototype.getPrevNode = ggP2VR.a.prototype.qo;
ggP2VR.a.prototype.getLastVisitedNode = ggP2VR.a.prototype.Xn;
ggP2VR.a.prototype.getCurrentPointHotspots = ggP2VR.a.prototype.Nn;
ggP2VR.a.prototype.getPositionAngles = ggP2VR.a.prototype.po;
ggP2VR.a.prototype.getPositionRawAngles = ggP2VR.a.prototype.al;
ggP2VR.a.prototype.nodeVisited = ggP2VR.a.prototype.Vo;
ggP2VR.a.prototype.setElementIdPrefix = ggP2VR.a.prototype.wp;
ggP2VR.a.prototype.videoPanoPlay = ggP2VR.a.prototype.xq;
ggP2VR.a.prototype.videoPanoStop = ggP2VR.a.prototype.yq;
ggP2VR.a.prototype.videoPanoPause = ggP2VR.a.prototype.wq;
ggP2VR.a.prototype.getVideoPanoTime = ggP2VR.a.prototype.wo;
ggP2VR.a.prototype.setVideoPanoTime = ggP2VR.a.prototype.Op;
ggP2VR.a.prototype.getVideoPanoObject = ggP2VR.a.prototype.vo;
ggP2VR.a.prototype.setVideoPanoSource = ggP2VR.a.prototype.Np;
ggP2VR.a.prototype.getMediaObject = ggP2VR.a.prototype.bo;
ggP2VR.a.prototype.registerVideoElement = ggP2VR.a.prototype.Yl;
ggP2VR.a.prototype.disableSoundLoading = ggP2VR.a.prototype.Dn;
ggP2VR.a.prototype.setCrossOrigin = ggP2VR.a.prototype.up;
ggP2VR.a.prototype.setProjection = ggP2VR.a.prototype.Cc;
ggP2VR.a.prototype.getProjection = ggP2VR.a.prototype.ta;
ggP2VR.a.prototype.changeProjection = ggP2VR.a.prototype.Pi;
ggP2VR.a.prototype.changeProjectionEx = ggP2VR.a.prototype.Pi;
ggP2VR.a.prototype.changeLensflares = ggP2VR.a.prototype.nn;
ggP2VR.a.prototype.setTransition = ggP2VR.a.prototype.Lp;
ggP2VR.a.prototype.getMapType = ggP2VR.a.prototype.ao;
ggP2VR.a.prototype.getMapDetails = ggP2VR.a.prototype.$n;
ggP2VR.a.prototype.getNodeMapCoords = ggP2VR.a.prototype.ho;
ggP2VR.a.prototype.getNodeMapCoordsInPercent = ggP2VR.a.prototype.io;
ggP2VR.a.prototype.getMapContainingNode = ggP2VR.a.prototype.Zn;
ggP2VR.a.prototype.addVariable = ggP2VR.a.prototype.dn;
ggP2VR.a.prototype.setVariableOptions = ggP2VR.a.prototype.km;
ggP2VR.a.prototype.setVariableValue = ggP2VR.a.prototype.Zd;
ggP2VR.a.prototype.getVariableValue = ggP2VR.a.prototype.uo;
ggP2VR.a.prototype.setUseGyro = ggP2VR.a.prototype.Mp;
ggP2VR.a.prototype.getUseGyro = ggP2VR.a.prototype.to;
ggP2VR.a.prototype.getOS = ggP2VR.a.prototype.ko;
ggP2VR.a.prototype.getBrowser = ggP2VR.a.prototype.Mn;
ggP2VR.a.prototype.triggerEvent = ggP2VR.a.prototype.Y;
ggP2VR.a.prototype.requestRedraw = ggP2VR.a.prototype.pp;
ggP2VR.a.prototype.getWebGlContext = ggP2VR.a.prototype.Ao;
