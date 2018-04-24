<template>
    <div class="favorite">
        <head-bar></head-bar>
        <p class="p-a my-f"><span class="img">&nbsp;</span>我喜欢的</p>
        <ul>
            <li v-for="item in list" :key="item.id" class="li-b">
                <div class="p-r">
                    <router-link class="img f-l" tag="div" :key="item.id" :to="{path:'details',query:{id:item.id,name:item.name,imgurl:item.src,mark:item.mark,describe:item.describe}}" v-bind:style="{'background-image':'url('+item.src+')'}"></router-link>
                    <div class="desc f-l">
                        <router-link tag="p" class="p-name" :key="item.id" :to="{path:'details',query:{id:item.id,name:item.name,imgurl:item.src,mark:item.mark,describe:item.describe}}">{{item.name}}</router-link>
                        <p class="p-describe">评分：{{item.mark}} {{item.describe}}</p>
                    </div>
                    <div class="clear"></div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import HeadBar from '../components/headbar.vue';
export default{
    data(){
	    return{
            list:[]
	    }
	},
	components:{
	    HeadBar:HeadBar
	},
	methods:{
	    getData:function(url){
	        this.$http.get(url).then((response)=>{
                this.list = response.data;
	        })
	    }
	},
	mounted(){ 
	    this.getData('static/data/favoriteList.json')
	}
}
</script>

<style lang="less" scoped>
@import '../assets/styles/color.less';
.favorite{
	.img{
	    width:20%;
        height:0;
        padding-bottom:20%;
        background-size:100% 100%;
        background-repeat:no-repeat;
        border-radius:10px;
        margin-right:10px;
	}
	.p-name{
        font-size:1.2rem;
        padding-bottom:0;
        margin-bottom:0;
	}
	.p-describe{
	    color:@describeColor;
        font-size:0.9rem;
        padding-top:0;
        margin-top:15px;
	}
	.del{
	    top:0;
	    right:20px;
	    background-color:@backgroundColor;
	    font-size:0.9rem;
	    color:white;
	    padding:5px;
	}
	.my-f{
	    right:20px;
	    top:0;
	    .img{
	        padding:10px 30px 10px 30px;
	        margin-right:5px;
	        background-size:100% 100%;
            background-repeat:no-repeat;
	        background-image:url('../assets/images/love.png')
	    }
	}
	.li-b{
	    border-top:@borderColor 2px solid;
	    border-bottom:@borderColor 2px solid;
	    padding:10px 0 10px 0;
	}
}
</style>