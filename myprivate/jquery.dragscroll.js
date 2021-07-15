;
(function(factory) {
	if (typeof define === 'function' && define.amd) {
		define(['jquery'], factory);
	} else if (typeof exports !== 'undefined') {
		module.exports = factory(require('jquery'));
	} else {
		factory(jQuery);
	}
}(function($) {
	var methods = {
		init: function(options) {
			var defaults = {
				direction: null,
				onStart: function($this) {},
				onMove: function($this) {},
				onEnd: function($this) {}
			};
			var opt = $.extend({}, defaults, options);
			return this.each(function() {
				var $this = $(this);
				var _dir = opt.direction;
				var _onStart = opt.onStart;
				var _onMove = opt.onMove;
				var _onEnd = opt.onEnd;
				var left0, top0, x0, y0, flag = false;
				$this.on('mousedown', function(e) {
					e.preventDefault();
					var e = e || window.event;
					flag = true;
					x0 = e.clientX;
					y0 = e.clientY;
					left0 = $(this).parent().scrollLeft();
					top0 = $(this).parent().scrollTop();
					_onStart && _onStart.call(this, $this);
				});
				$this.on('mousemove', function(e) {
					e.preventDefault();
					var e = e || window.event;
					if (flag) {
						setTimeout(function() {
							var moveX = e.clientX - x0;
							var moveY = e.clientY - y0;
							if (_dir == 'scrollLeft') {
								$this.parent().scrollLeft(left0 - moveX);
							} else if (_dir == 'scrollTop') {
								$this.parent().scrollTop(top0 - moveY);
							} else {
								$this.parent().scrollLeft(left0 - moveX);
								$this.parent().scrollTop(top0 - moveY);
							}
						}, 10);
						_onMove && _onMove.call(this, $this);
					}
				});
				$this.on('mouseup mouseleave', function() {
					if (flag) {
						_onEnd && _onEnd.call(this, $this);
					}
					flag = false;
				});
				$this.on('touchstart', function(e) {
					var e = e.originalEvent.targetTouches[0];
					flag = true;
					x0 = e.clientX;
					y0 = e.clientY;
					left0 = $(this).parent().scrollLeft();
					top0 = $(this).parent().scrollTop();
					_onStart && _onStart.call(this, $this);
				});
				$this.on('touchmove', function(e) {
					e.stopPropagation();
					var e = e.originalEvent.targetTouches[0];
					if (flag) {
						setTimeout(function() {
							var moveX = e.clientX - x0;
							var moveY = e.clientY - y0;
							if (_dir == 'scrollLeft') {
								$this.parent().scrollLeft(left0 - moveX);
							} else if (_dir == 'scrollTop') {
								$this.parent().scrollTop(top0 - moveY);
							} else {
								$this.parent().scrollLeft(left0 - moveX);
								$this.parent().scrollTop(top0 - moveY);
							}
						}, 10);
						_onMove && _onMove.call(this, $this);
					}
				});
				$this.on('touchend', function(e) {
					if (flag) {
						_onEnd && _onEnd.call(this, $this);
					}
					flag = false;
				});
			});
		},
		destroy: function() {
			return $(this).each(function() {
				var $this = $(this);
				$this.off('mousedown mousemove mouseup mouseleave');
				$this.off('touchstart touchmove touchend')
			});
		}
	};
	$.fn.dragscroll = function(method) {
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('method ' + method + ' does not exist on jquery.dragscroll.js');
		}
	}
}));
