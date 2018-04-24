<template>
    <div class="listOne">
        <ul>
            <li v-for="item in list">
                <router-link class="p-r" tag="div" :key="item.id" :to="{path:'details',query:{id:item.id,name:item.name,imgurl:item.src,mark:item.mark,describe:item.describe}}">
                    <div class="img p-r" v-bind:style="{'background-image':'url('+item.src+')'}">
                    </div>
                    <p class="pName">{{item.name}}</p>
                    <p class="pMark">{{item.mark}}分</p>
                    <p class="pDescribe">{{item.describe}}</p>
                    <span class="pPrice p-a">¥{{item.price}}</span>
                </router-link>
            </li>
        </ul>
    </div>  
</template>

<script> 
import Details from '../views/details.vue'
export default{
    props:["list"],
    data(){
        return{

        }
    }
}
</script>

<style lang="less" scoped>
@import '../assets/styles/color.less';
.listOne{
    ul{
        padding:0;
        li{
            margin:10px;
            display:block;
            .img{
                width:100%;
                height:0;
                padding-bottom:50%;
                background-size:100% 100%;
                background-repeat:no-repeat;
                border-radius:15px;
            }
            .pName{
                font-size:1.5rem;
                margin:10px 0 0 0;
            }
            .pMark{
                color:@backgroundColor;
                margin:10px 0 0 0;
            }
            .pDescribe{
                color:@describeColor;
                font-size:0.9rem;
                margin:10px 0 25px 0;
            }
            .pPrice{
                right:0;
                bottom:30px;
                font-size:2rem;
                color:@priceColor;
            }
        }
    }
}
</style>