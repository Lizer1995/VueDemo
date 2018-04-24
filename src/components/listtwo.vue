<template>
    <div class="listTwo">
        <ul>
            <li v-for="item in list">
                <div class="p-r" :key="item.id" v-on:click="clickFun(item.name,item.price)">
                    <div class="img f-l" v-bind:style="{'background-image':'url('+item.src+')'}"></div>
                    <div class="desc f-l">
                        <p class="p-name">{{item.name}}</p>
                        <p class="p-describe">{{item.describe}}</p>
                    </div>
                    <div class="p-a">
                        <span class="span1">¥{{item.price}}</span>
                        <span class="span2">订</span>
                    </div>
                    <div class="clear"></div>
                </div>
            </li>
        </ul>
    </div>  
</template>

<script> 
export default{
    props:["list"],
    data(){
        return{
            
        }
    },
    methods:{
        clickFun:function(name,price){
            this.$emit('show',name,price);/*显示确认预定的组件*/
        }
    }
}
</script>

<style lang="less" scoped>
@import '../assets/styles/color.less';
.listTwo{
    .img{
        width:20%;
        height:0;
        padding-bottom:20%;
        background-size:100% 100%;
        background-repeat:no-repeat;
        border-radius:10px;
        margin-right:10px;
    }
    ul{
        margin:0;
        padding:15px 0 15px 0;
    }
    .p-name{
        font-size:1.1rem;
        padding-bottom:0;
        margin-bottom:0;
    }
    .p-describe{
        color:@describeColor;
        font-size:0.9rem;
        padding-top:0;
        margin-top:15px;
    }
    .p-a{
        right:0;
        top:20%;
        font-size:1.6rem;
    }
    .p-r{
        border-bottom:2px solid @borderColor;
        padding-bottom:5px;
        margin-bottom:10px;
    }
    .span1{
        color:@roomPriceColor;
    }
    .span2{
        color:white;
        background-color:@roomPriceColor;
        padding:0 10px 0 10px;
        border-radius:10px;
    }
}

</style>