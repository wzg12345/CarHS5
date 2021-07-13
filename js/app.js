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
};
Vue.use(httpVueLoader); //使用http-vue-loader来运行.vue格式的文件



// Vue.use(VueRouter); //使用VueRouter

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是 通过 Vue.extend()
//  创建的组件构造器， 或者，只是一个组件配置对象.
const routes = [
	//车型概览
	{
		path: '/',
		component: httpVueLoader('./components/overView.vue')
	},
	//快速入门
	{
		path: '/manage',
		component: httpVueLoader('./components/Manage.vue')
	},
	//车型亮点
	{
		path: '/carwindow',
		component: httpVueLoader('./components/carWindow.vue')
	},
	//手册
	{
		path: '/handbook',
		component: httpVueLoader('./components/handBook.vue')
	},
	//手册
	{
		path: '/search',
		component: httpVueLoader('./components/search.vue')
	},
];

// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
	routes // （缩写）相当于 routes: routes
});

// 4. 创建和挂载根实例。
// 要通过 router 配置参数注入路由，从而让整个应用都有路由功能
const app = new Vue({
	el:'#app',
	router,
}).$mount('#app');//el是自动挂载，mount是手动挂载（延时）




