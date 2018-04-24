<template>
    <div class="choosePrice">
        <ul>
            <li v-for="item in list" v-on:click="childFun(item,tag)" v-bind:value="list.item">{{item}}</li>
        </ul>
    </div>
</template>

<script> 
export default{
    props:["list","tag"],
    data(){
        return{
            
        }
    },
    methods:{
        childFun:function(value,tag){
            this.$emit('tempFun',value,tag);/*触发父组件事件，使价格/类型变为自己选择的项，并过滤酒店列表*/
        }
    }
}
</script>

<style lang="less" scoped>
@import '../assets/styles/color.less';
.choosePrice{
    ul{
        margin:0;
        padding:0 30px 0 30px;
        li{
            padding:10px;
            border-bottom:@borderColor 1px solid;
        }
    }
	background-color:white;
	text-align:center;
}
</style>