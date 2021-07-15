(function() {
	//判断全景图加载完毕 执行自己的代码
	pano.on("imagesready", function() {
		var loading = setTimeout(function() {
			$('.loding').hide()
			console.log("clearTimeout");
			clearTimeout(loading)
		}, 2000)
		myprivate()
		console.log("Panorama imagesready!");
	});

	// console.log(pano.getIsLoaded())
	// 位置改变时
	pano.on("positionchanged", function() {
		// pano.getPan()
		// console.log(pano.isTouching())//当前是否在移动设备上触摸了全景播放器
		// console.log(pano.getLastVisitedNode())
		// $('.loding').hide()
	});


	function myprivate() {
		var style_color, //换肤主题
		    list_child_color; //换肤文字颜色
		function getQueryString(name) {
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
			var r = window.location.search.substr(1).match(reg);
			if (r != null) return unescape(r[2]);
			return null;
		}
		style_color = getQueryString('style');
		if (style_color != null) {
			style_color.toLowerCase()
		} else {
			style_color = 'sp';
		}

		if (style_color == 'sp') {
			list_child_color = 'list_child_color_sp'; //换肤颜色class
		} else if (style_color == 'sm') {
			list_child_color = 'list_child_color_sm'; //换肤颜色class
		} else if (style_color == 'si') {
			list_child_color = 'list_child_color_si'; //换肤颜色class
		} else {
			style_color = 'sp';
			list_child_color = 'list_child_color_sp'; //换肤颜色class
		}



		//车门
		var host_1 = document.getElementsByClassName('host_1')[0];
		host_1.onclick = function(e) {
			if (e && e.stopPropagation) { //因此它支持W3C的stopPropagation()方法
				e.stopPropagation();
			} else {
				//否则，我们需要使用IE的方式来取消事件冒泡
				window.event.cancelBubble = true;
			}
			var anim = document.getElementsByClassName('anim')[0];
			// console.log(typeof anim)
			if (typeof anim == 'undefined') {
				//热点名称
				var host_list = [{
					'text': '智能进入和起动',
					'id': '69'
				}];
				host_main(host_1, host_list, style_color)

			} else {
				anim.parentNode.removeChild(anim);
				return
			}
			var list_class = document.getElementsByClassName('list_class');
			for (var i = 0; i < list_class.length; i++) {
				list_class[i].index = i;
				list_class[i].onclick = function() {
					var host_id = this.getAttribute('data-id')
					// console.log(host_id)
					$(this).addClass(list_child_color).siblings().removeClass(list_child_color);
					doJsTest(host_id)

				}
			}
		}
		//转向灯手柄
		var host_2 = document.getElementsByClassName('host_2')[0];
		host_2.onclick = function(e) {
			if (e && e.stopPropagation) { //因此它支持W3C的stopPropagation()方法
				e.stopPropagation();
			} else {
				//否则，我们需要使用IE的方式来取消事件冒泡
				window.event.cancelBubble = true;
			}
			var anim = document.getElementsByClassName('anim')[0];
			// console.log(typeof anim)
			if (typeof anim == 'undefined') {
				//热点名称
				var host_list = [{
					'text': '高级巡航',
					'id': '70'
				}];
				host_main(host_2, host_list, style_color)
			} else {
				anim.parentNode.removeChild(anim);
				return
			}

			var list_class = document.getElementsByClassName('list_class');
			for (var i = 0; i < list_class.length; i++) {
				// list_class[i].index = i;
				list_class[i].onclick = function() {
					var host_id = this.getAttribute('data-id')
					// console.log(host_id)
					$(this).addClass(list_child_color).siblings().removeClass(list_child_color);
					doJsTest(host_id)

				}
			}
		}
		//座椅
		var host_3 = document.getElementsByClassName('host_3')[0];
		host_3.onclick = function(e) {
			if (e && e.stopPropagation) { //因此它支持W3C的stopPropagation()方法
				e.stopPropagation();
			} else {
				//否则，我们需要使用IE的方式来取消事件冒泡
				window.event.cancelBubble = true;
			}
			var anim = document.getElementsByClassName('anim')[0];
			// console.log(typeof anim)
			if (typeof anim == 'undefined') {
				//热点名称
				var host_list = [{
					'text': '座椅记忆',
					'id': '71'
				}];
				host_main(host_3, host_list, style_color)
			} else {
				anim.parentNode.removeChild(anim);
				return
			}

			var list_class = document.getElementsByClassName('list_class');
			for (var i = 0; i < list_class.length; i++) {
				// list_class[i].index = i;
				list_class[i].onclick = function() {
					var host_id = this.getAttribute('data-id')
					// console.log(host_id)
					$(this).addClass(list_child_color).siblings().removeClass(list_child_color);
					doJsTest(host_id)

				}
			}
		}
		//音响系统
		var host_4 = document.getElementsByClassName('host_4')[0];
		host_4.onclick = function(e) {
			if (e && e.stopPropagation) { //因此它支持W3C的stopPropagation()方法
				e.stopPropagation();
			} else {
				//否则，我们需要使用IE的方式来取消事件冒泡
				window.event.cancelBubble = true;
			}

			var anim = document.getElementsByClassName('anim')[0];
			// console.log(typeof anim)
			if (typeof anim == 'undefined') {

				//热点名称
				var host_list = [{
					'text': '语音识别',
					'id': '72'
				}];
				host_main(host_4, host_list, style_color)
			} else {
				anim.parentNode.removeChild(anim);
				return
			}

			var list_class = document.getElementsByClassName('list_class');
			for (var i = 0; i < list_class.length; i++) {
				// list_class[i].index = i;
				list_class[i].onclick = function() {
					var host_id = this.getAttribute('data-id')
					// console.log(host_id)
					$(this).addClass(list_child_color).siblings().removeClass(list_child_color);
					doJsTest(host_id)

				}
			}
		}
		//组合仪表
		var host_5 = document.getElementsByClassName('host_5')[0];
		host_5.onclick = function(e) {
			if (e && e.stopPropagation) { //因此它支持W3C的stopPropagation()方法
				e.stopPropagation();
			} else {
				//否则，我们需要使用IE的方式来取消事件冒泡
				window.event.cancelBubble = true;
			}
			var anim = document.getElementsByClassName('anim')[0];
			// console.log(typeof anim)
			if (typeof anim == 'undefined') {
				//热点名称
				var host_list = [{
					'text': '前碰撞预警',
					'id': '76'
				}];
				host_main(host_5, host_list, style_color)
			} else {
				anim.parentNode.removeChild(anim);
				return
			}

			var list_class = document.getElementsByClassName('list_class');
			for (var i = 0; i < list_class.length; i++) {
				// list_class[i].index = i;
				list_class[i].onclick = function() {
					var host_id = this.getAttribute('data-id')
					// console.log(host_id)
					$(this).addClass(list_child_color).siblings().removeClass(list_child_color);
					doJsTest(host_id)

				}
			}
		}
		//副仪表板
		var host_6 = document.getElementsByClassName('host_6')[0];
		host_6.onclick = function(e) {
			if (e && e.stopPropagation) { //因此它支持W3C的stopPropagation()方法
				e.stopPropagation();
			} else {
				//否则，我们需要使用IE的方式来取消事件冒泡
				window.event.cancelBubble = true;
			}
			var anim = document.getElementsByClassName('anim')[0];
			// console.log(typeof anim)
			if (typeof anim == 'undefined') {
				//热点名称
				var host_list = [{
					'text': '驾驶模式',
					'id': '73'
				}, {
					'text': '自动泊车',
					'id': '74'
				}, {
					'text': '盲区探测',
					'id': '75'
				}];
				host_main(host_6, host_list, style_color)
			} else {
				anim.parentNode.removeChild(anim);
				return
			}

			var list_class = document.getElementsByClassName('list_class');
			for (var i = 0; i < list_class.length; i++) {
				// list_class[i].index = i;
				list_class[i].onclick = function() {
					var host_id = this.getAttribute('data-id')
					// console.log(host_id)
					$(this).addClass(list_child_color).siblings().removeClass(list_child_color);
					doJsTest(host_id)

				}
			}
		}
		//安卓ios传数据
		function doJsTest(type) {
			var u = navigator.userAgent,
				app = navigator.appVersion;
			var isXiaomi = u.indexOf('XiaoMi') > -1; // 小米手机
			var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; // 其它安卓
			var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios
			console.log(type)
			console.log(u)
			if (isIOS) {
				//JS给OC传值。'JsTest'为双方自定义的统一方法名；'type'为要传的值； response为OC收到后给JS的回调
				// bridge.callHandler('JsTest', type)
				//  "objc://"为自定义协议头;
				window.location.href = "objc://JsTest=" + type;
			} else {
				// 安卓
				window.Android.JsTest(type)
			}
		}

		//安卓端传数据
		// function doJsTest(type) {
		// 	console.log(type)
		// 	if (isIos()) {
		// 		//JS给OC传值。'JsTest'为双方自定义的统一方法名；'type'为要传的值； response为OC收到后给JS的回调
		// 		// bridge.callHandler('JsTest', type)
		// 		//  "objc://"为自定义协议头;
		// 		window.location.href = "objc://JsTest=" + type;
		// 	} else {
		// 		window.Android.JsTest(type)
		// 	}
		// }

		// // 判断安卓
		// function isAndroid() {
		// 	var u = navigator.userAgent;
		// 	if (u.indexOf("Android") > -1 || u.indexOf("Linux") > -1) {
		// 		if (window.ShowFitness !== undefined) return true;
		// 	}
		// 	return false;
		// }
		// // 判断设备为 ios
		// function isIos() {
		// 	var u = navigator.userAgent;
		// 	if (u.indexOf("iPhone") > -1 || u.indexOf("iOS") > -1) {
		// 		return true;
		// 	}
		// 	return false;
		// }
	}



	//热点弹窗
	function host_main(doc, text, type) {
		var host_wrapper = document.createElement("div"); //热点容器
		var host_line = document.createElement("div"); //热点弹出的线
		var host_line_d = document.createElement("div"); //热点线定位
		var host_list = document.createElement("div"); //热点的弹出框
		host_wrapper.classList.add('anim');
		host_line.classList.add('line');
		host_line_d.classList.add('line_d');
		host_list.classList.add('list');
		host_list.classList.add('animated');
		//判断主题type
		if (type == 'sp') {
			host_line.classList.add('line_sp');
			host_list.classList.add('list_sp');
		} else if (type == 'sm') {
			host_line.classList.add('line_sm');
			host_list.classList.add('list_sm');
		} else if (type == 'si') {
			host_line.classList.add('line_si');
			host_list.classList.add('list_si');
		}
		// 判断热点位置调整弹窗位置
		var position_t = doc.getBoundingClientRect().top;
		var position_l = doc.getBoundingClientRect().left;
		var position_window_h = document.body.clientHeight;
		var position_window_w = document.body.clientWidth;

		if (position_t > position_window_h / 2 && position_l > position_window_w / 2) {
			//热点在右下
			host_wrapper.style.transform = 'scale(1) rotateY(180deg) rotateX(0deg)';
			host_list.style.transform = 'scale(1) rotateY(180deg) rotateX(0deg) translateY(-50%)';
		} else if (position_t < position_window_h / 2 && position_l > position_window_w / 2) {
			//热点在右上
			host_wrapper.style.transform = 'scale(1) rotateY(180deg) rotateX(180deg)';
			host_list.style.transform = 'scale(1) rotateY(180deg) rotateX(180deg) translateY(50%)';
		} else if (position_t < position_window_h / 2 && position_l < position_window_w / 2) {
			//热点在左上
			host_wrapper.style.transform = 'scale(1) rotateY(0deg) rotateX(180deg)';
			host_list.style.transform = 'scale(1) rotateY(0deg) rotateX(180deg) translateY(50%)';
		} else if (position_t > position_window_h / 2 && position_l < position_window_w / 2) {
			//热点在左下
			host_wrapper.style.transform = 'scale(1) rotateY(0deg) rotateX(0deg)';
			host_list.style.transform = 'scale(1) rotateY(0deg) rotateX(0deg) translateY(-50%)';
		}
		var x_list_li = ''
		var x_list_li_text = text;
		for (var i = 0; i < x_list_li_text.length; i++) {
			x_list_li += `<li class="list_class" data-id="${x_list_li_text[i].id}">${x_list_li_text[i].text}</li>`;
		}
		var x_list = `<ul>${x_list_li}</ul>`
		host_list.innerHTML = x_list;
		host_wrapper.appendChild(host_line)
		host_line.appendChild(host_line_d)
		host_line_d.appendChild(host_list)
		doc.after(host_wrapper);

		//热点线动画 和弹窗动画
		$('.line').animate({
			width: "1rem"
		}, function() {
			$('.list').fadeIn()
		});
	}
})()
