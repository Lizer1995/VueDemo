import Vue from 'vue';
import Router from 'vue-router';
import Firstview from '../views/firstview.vue';
import Me from '../views/me.vue';
import Order from '../views/order.vue';
import Details from '../views/details.vue';
import Favorite from '../views/favorite.vue';
import ChooseCity from '../views/choosecity.vue';

Vue.use(Router)//安装路由功能

export default new Router({//使用export default命令，为模块指定默认输出
	routes:[
        {
        	path:'/',//首页
        	component:Firstview
        },
        {
        	path:'/order',//订单
        	component:Order
        },
        {
        	path:'/me',//我
        	component:Me
        },
        {
                path:'/details',//酒店详情页
                component:Details
        },
        {
                path:'/favorite',//我喜欢的
                component:Favorite
        }
        ,{
                path:'/choosecity',//选择城市
                component:ChooseCity
        }
	]
})