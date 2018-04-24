<template>
    <div class="me">
        <div class="headDiv p-r">
            <div class="img" v-bind:style="{'background-image':'url('+userData.userImg+')'}"></div>
            <span class="p-a">{{userData.userName}}</span>
        </div>
        <div>
            <router-link to="/order" class="myOrder p-r" tag="div">
                <span class="span1">订</span>我的订单
                <span class="span2 p-a"> > </span>
            </router-link>
            <router-link to="/favorite" tag="div" class="myLove p-r">
                <span class="img">&nbsp;</span>我喜欢的
                <span class="span2 p-a"> > </span>
            </router-link>
        </div>
    </div>
</template>

<script>
export default{
	data(){
	    return{
	        userData:{}
	    }
	},
	components:{

	},
	methods:{
	    getData:function(url){
	        this.$http.get(url).then((response)=>{
                this.userData = response.data;
	        })
	    }
	},
	mounted(){ 
	    this.getData('static/data/userData.json')
	}
}
</script>

<style lang="less" scoped>
@import '../assets/styles/color.less';
.me{
	.headDiv{
	    background-color:@backgroundColor;
	    padding:20px;
	    .img{
	        width:20%;
            height:0;
            padding-bottom:20%;
            background-size:100% 100%;
            background-repeat:no-repeat;
            border-radius:50%;
	    }
	    span{
	        top:40%;
            left:25%;
            font-size:1.2rem;
            color:white;
	    }
	}
	.myOrder{
	    padding:50px;
	    font-size:1.2rem;
	    border-bottom:@borderColor 2px solid;
	    .span1{
	        color:white;
            background-color:@roomPriceColor;
            padding:0 10px 0 10px;
            border-radius:50%;
            font-size:1.6rem;
            margin-right:20px;
	    }
	    .span2{
            right:30px;
            font-size:1.4rem;
            color:@describeColor;
	    }
	}
	.myLove{
	    padding:50px;
	    font-size:1.2rem;
	    border-bottom:@borderColor 2px solid;
	    .img{
	        padding:10px 30px 10px 30px;
	        margin-right:20px;
	        background-size:100% 100%;
            background-repeat:no-repeat;
	        background-image:url('../assets/images/love.png')
	    }
	    .span2{
            right:30px;
            font-size:1.4rem;
            color:@describeColor;
	    }
	}
}
</style>