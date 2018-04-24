import Vue from 'vue';
import App from './app.vue';
import router from './router/routers.js';
import axios from 'axios';

Vue.prototype.$http = axios; //修改原型链，使能够直接在组件的methods中使用$http命令

import './assets/styles/index.less'

const root = document.createElement('div')
document.body.appendChild(root)

//移动端自适应
//rem用法:给根元素设定一个字体大小，其他元素的字体大小和边距根据它进行相应的变化
//根元素大小一般设置为屏幕宽度除以10
document.getElementsByTagName('html')[0].style.fontSize = window.screen.width/10 +'px';

new Vue({
	router,
	render:(h) => h(App)
}).$mount(root)