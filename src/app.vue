<template>
    <div id="main-div" class="mp0">
        <div>
            <router-view></router-view>
        </div>
        <div class="footer p-f" :style="{display:activeDisplay}">
            <router-link class="route-class" to="/" tag="li"><img src='./assets/images/page.png' />首页</router-link>
            <router-link class="route-class" to="/order" tag="li"><img src='./assets/images/order.png' />订单</router-link>
            <router-link class="route-class" to="/me" tag="li"><img src='./assets/images/me.png' />我</router-link>
        </div>
    </div>
</template>

<script>

export default{
	data(){
	    return{
            activeDisplay:'block'
	    }
	},
    watch:{
        $route(to,from){
            if(to.path === "/details" || to.path === "/favorite" || to.path === "/choosecity"){
                this.activeDisplay = 'none';
            }else{
                this.activeDisplay = 'block';
            }
        }
    }
}
</script>

<style lang="less" scoped>
@import './assets/styles/color.less';

#main-div{
    width:100%;
    .footer{
        z-index:1002;
        width:100%;
        background-color:@backgroundColor;
        bottom:0;
        img{
            width:45px;
            height:60px;
            display:block;
            margin:0 auto;
        }
        .route-class{
            width:32%;
            display:inline-block;
            text-align:center;
            text-decoration:none;
            color:white;
            padding-top:3px;
        }
    }
}
</style>