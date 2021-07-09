let src = window.location.host;
let token = '0000';
let hasEnter = false;
let serverSrc = 'http://fawapartment.haoweisys.com/api';
if (src == 'localhost:8088') {
	serverSrc = '/fawapi2';
} else {
	serverSrc = 'http://fawapartment.haoweisys.com/api';
}

//挂载到Vue实例上面
Vue.prototype.GLOBAL = {
	token, //用户token身份
	serverSrc, //服务器地址
	hasEnter, //用户登录状态
}
Vue.use(httpVueLoader); //使用http-vue-loader来运行.vue格式的文件
// Vue.use(VueRouter); //使用VueRouter
var app = new Vue({
	el: '#app',
	data: {},
	components: {
		'hello-word': 'url:./components/HelloWord.vue',
	},
	created() {

	},
	mounted: function() {
		const _this = this;
		// axios.post(`${_this.GLOBAL.serverSrc}/screen/index/num`, {

		// 	})
		// 	.then(function(response) {

		// 	})
		// 	.catch(function(error) {
		// 		console.log(error);
		// 	});
	},
	methods: {
		Message(msg) {
			let _this = this;
			if ($('.modal').length > 0) {
				$('.modal').remove();
			}
			clearTimeout(_this.timeout);
			let modal_dom = $(`<div  class="modal animated fadeInDown">${msg}</div>`);
			$('body').append(modal_dom);
			_this.timeout = setTimeout(() => {
				$('.modal').fadeOut();
			}, 1500);
		},
	}
})
