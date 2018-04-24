<template>
    <div class="firstview">
        <div class="apptitle p-f">
            <app-title v-bind:data="data"></app-title>
            <tab v-on:getF="getF" v-bind:cityQuery="cityQuery"></tab>
        </div>
        <div class="main">
            <list-one v-bind:list="list"></list-one>
        </div>
    </div>
</template>

<script> 
import Title from '../components/title.vue';
import Tab from '../components/tab.vue';
import ListOne from '../components/listone.vue'

export default{
	data(){
	    return{
	        data:{
	            title:'首页'
	        },
	        cityQuery:this.$route.query.cityQuery,/*这是从城市选择页面跳转过来时带过来的参数*/
	        list:[],
	        _list:[]
	    }
	},
	components:{
        AppTitle:Title,
        Tab:Tab,
        ListOne:ListOne
	},
	methods:{
	    getData:function(url){
	        var _this = this;/*axios中this为undefined，可将this保存在_this中，再在函数中使用*/
	        this.$http.get(url).then((response)=>{
                this.list = this._list = response.data;
                if(this.cityQuery){//是否需要按照城市进行过滤
                    this.list = this.list.filter(function (value) {
                        /*返回指定城市的项*/
                        return (value.city === _this.cityQuery);
                    })
                    this._list = this.list;
                }
	        })
	    },
	    getF:function(item,t){
	        if(t === "price"){//通过价格过滤
	            if(item === "0~100"){
	                this.list = this._list.filter(function (value) {
                        /*返回价格区间为0～100的项*/
                        return (parseInt(value.price) >= 0 && parseInt(value.price) < 100);
                    })
	            }else if(item === "100~500"){
                    this.list = this._list.filter(function (value) {
                        /*返回价格区间为100~500的项*/
                        return (parseInt(value.price) >= 100 && parseInt(value.price) < 500);
                    })
	            }else if(item === "500~1000"){
                    this.list = this._list.filter(function (value) {
                        /*返回价格区间为500~1000的项*/
                        return (parseInt(value.price) >= 500 && parseInt(value.price) < 1000);
                    })
	            }else if(item === "所有价格"){
                    this.list = this._list;
	            }
	        }else if(t === "type"){//通过类型过滤
                if(item !== "全部类型"){
	                this.list = this._list.filter(function (value) {
                        return (value.type === item);
                    })
	            }else if(item === "全部类型"){
                    this.list = this._list;
	            }
	        }
	    }
	},
	mounted(){ 
	    this.getData('static/data/mainList.json');
	}
}
</script>

<style lang="less" scoped>
.firstview{
	.apptitle{
        top:0;
        left:0;
        width:100%;
        z-index:1001;
	}
	.main{
	    margin-top:160px;
	    margin-bottom:140px;
	}
}
</style>