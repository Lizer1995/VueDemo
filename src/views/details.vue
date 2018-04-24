<template>
    <div class="detail">
        <div class="img p-r" v-bind:style="{'background-image':'url('+this.src+')'}">
            <head-bar></head-bar>
            <p class="litile-img-p p-a">喜欢 <span class="litile-img" v-on:click="clickFun()" v-bind:class="{active: isActive,noactive:isNoactive}">&nbsp;</span></p>
        </div>
        <div class="content">
            <div class="borderBottom p-r">
                <p class="name">{{name}}</p>
                <p class="describe">{{describe}}</p>
                <span class="mark p-a">评分：<i class="p-mark">{{mark}}</i></span>
            </div>
            <list-two v-bind:list="list" v-on:show="showBooking"></list-two>
        </div>
        <booking v-bind:class="{none:isNone}" v-bind:content="content" v-on:cancel="cancel"></booking>
    </div>
</template>

<script>
import ListTwo from '../components/listtwo.vue';
import HeadBar from '../components/headbar.vue';
import Booking from '../components/booking.vue';

export default{
	data(){
	    return{
	        name:this.$route.query.name,
	        src:this.$route.query.imgurl,
	        describe:this.$route.query.describe,
            mark:this.$route.query.mark,
            isActive:false,
            isNoactive:true,
            isNone:true,
            list:[],
            content:{name:'',price:''}
	    }
	},
    components:{
        ListTwo:ListTwo,
        HeadBar:HeadBar,
        Booking:Booking
    },
    methods:{
        getData:function(url){
            this.$http.get(url).then((response)=>{
                this.list = response.data;
            })
        },
        clickFun:function(){
            this.isActive = !this.isActive;
            this.isNoactive = !this.isNoactive;
        },
        showBooking:function(name,price){
            this.isNone = false;
            this.content.name = name;
            this.content.price = price;
        },
        cancel:function(){
            this.isNone = true;
        }
    },
    mounted(){ 
        this.getData('static/data/detailsList.json');
    }
}
</script>

<style lang="less" scoped>
@import '../assets/styles/color.less';
.detail{
	.img{
        width:100%;
        height:0;
        padding-bottom:50%;
        background-size:100% 100%;
        background-repeat:no-repeat;
        .litile-img-p{
            right:5px;
            top:5px;
            font-size:0.8rem;
        }
        .litile-img{
            padding:15px 35px 15px 35px;
            margin-right:5px;
            background-size:100% 100%;
            background-repeat:no-repeat;
        }
    }
    .content{
        margin:0px 10px 80px 10px;
    }
    .describe{
        color:@describeColor;
        font-size:0.9rem;
        margin:20px 0 35px 0;
        padding:0;
    }
    .borderBottom{
	    border-bottom:2px solid @borderColor;
    }
    .mark{
        color:@priceColor;
        top:0px;
        right:10px;
        .p-mark{
            font-size:2rem;
        }
    }
    .name{
        font-size:1.3rem;
        margin:20px 0 10px 0;
        padding:0;
    }
}

.active{
    background-image:url('../assets/images/love.png');
}
.noactive{
    background-image:url('../assets/images/darklove.png');
}
.none{
    display:none;
}
</style>