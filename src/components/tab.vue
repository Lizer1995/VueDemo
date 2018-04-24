<template>
    <div class="tab">
        <div class="tab-ul">
            <ul>
                <router-link tag="li" class="f-l" to="/choosecity">{{city}}</router-link>
                <li class="f-l" v-on:click="priceClick">{{price}}</li>
                <li class="f-l" v-on:click="typeClick">{{type}}</li>
            </ul>
        </div>
        <transition name="fade">
            <choose v-on:tempFun="chooseFun" v-if="isDisplay" v-bind:list="list" v-bind:tag="tag"></choose>
        </transition>
    </div>  
</template>

<script> 
import Choose from '../components/choose.vue';

export default{
    props:["cityQuery"],
    data(){
        return{
            price:'价格',
            type:'类型',
            isDisplay:false,
            list:[],
            tag:'price',/*此参数告诉子组件Choose显示选择价格列表还是显示选择类型列表*/
            city:'城市'
        }
    },
    components:{
        Choose:Choose
    },
    methods:{
        chooseFun:function(item,t){
            if(t === 'price'){
                this.price = item;
                this.isDisplay = false;
                this.$emit('getF',item,t);/*将所选的价格范围传给父组件*/
            }
            if(t === 'type'){
                this.type = item;
                this.isDisplay = false;
                this.$emit('getF',item,t);/*将所选的类型传给父组件*/
            }
        },
        priceClick:function(){
            this.list = ['0~100','100~500','500~1000','所有价格'];
            if(this.tag === 'type'){
                this.tag = 'price';
                this.isDisplay = true;
            }else{
                this.isDisplay = !this.isDisplay;
            }
        },
        typeClick:function(){
            this.list = ['酒店','酒店式公寓','客栈/民宿','青年旅社','全部类型'];
            if(this.tag === 'price'){
                this.tag = 'type';
                this.isDisplay = true;
            }else{
                this.isDisplay = !this.isDisplay;
            }
        }
    },
    mounted(){ 
        /*判断，如果cityQuery存在，说明用户选择了城市，tab显示所选城市名*/
        if(this.cityQuery){
            this.city = this.cityQuery;
        }
    }
}
</script>

<style lang="less" scoped>
@import '../assets/styles/color.less';
.tab{
    .tab-ul{
        background-color:@tabBgColor;
        width:100%;
        height:70px;
        ul{
            margin:0;
            padding:0;
            li{
                width:33%;
                text-align:center;
                line-height:70px;
            }
        }
    }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>