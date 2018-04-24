<template>
    <div class="orderList">
        <ul>
            <li v-for="item in list" :key="item.id">
                <router-link class="p-r div" tag="div" :key="item.id" :to="{path:'details',query:{id:item.id,name:item.name,imgurl:item.src,mark:item.mark,describe:item.describe}}">
                    <p class="p-name">{{item.name}}</p>
                    <p class="room-name">房型：{{item.roomName}}</p>
                    <p class="p-time">入住时间：<span class="in-time">{{item.inTime}}</span></p>
                    <p class="p-time">离店时间：<span class="leave-time">{{item.leaveTime}}</span></p>
                    <p class="p-person">入住人：<span>{{item.person}}</span></p>
                    <div class="p-a">¥{{item.price}} 预定成功</div>
                </router-link>
            </li>
        </ul>
    </div>  
</template>

<script> 
export default{
    props:['list'],
    data(){
        return{
            
        }
    }
}
</script>

<style lang="less" scoped>
@import '../assets/styles/color.less';
.orderList{
    ul{
        padding:0 20px 0 20px;
        margin:0;
    }
    .div{
        border-bottom:2px solid black;
    }
    .p-name{
        font-size:1.2rem;
        margin-bottom:0;
        padding-bottom:0;
    }
    .p-time{
        color:@describeColor;
        font-size:0.9rem;
        padding:0;
        margin:0;
    }
    .p-person{
        color:@describeColor;
        font-size:0.9rem;
        padding:0;
        margin:0 0 25px 0;
    } 
    .room-name{
        font-size:0.9rem;
        margin-top:0;
        padding-top:0;
    }
    .p-a{
        top:60px;
        right:0;
        color:@backgroundColor;
        font-size:1.1rem;
    }
}
</style>