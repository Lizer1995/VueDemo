<template>
    <div class="order">
        <div class="apptitle p-f">
            <app-title v-bind:data="data"></app-title>
        </div>
        <div class="main">
            <order-list v-bind:list="list"></order-list>
        </div>
    </div>
</template>

<script>
import Title from '../components/title.vue';
import OrderList from '../components/orderlist.vue';

export default{
    data(){
        return{
            data:{
	            title:'我的订单'
	        },
	        list:[]
        }
    },
    components:{
        AppTitle:Title,
        OrderList:OrderList
	},
	methods:{
	    getData:function(url){
	        this.$http.get(url).then((response)=>{
                this.list = response.data;
	        })
	    }
	},
	mounted(){ 
	    this.getData('static/data/orderList.json')
	}
}
</script>

<style lang="less" scoped>
.order{
	.apptitle{
	    top:0;
        left:0;
        width:100%;
        z-index:1001;
	}
	.main{
	    margin-top:100px;
	    margin-bottom:140px;
	}
}
</style>