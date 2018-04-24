<template>
    <div class="booking p-a">
        <div id="main" class="p-r" align="center">
            <div class="cancel p-a" v-on:click="cancel">
                <span> X </span>
            </div>
            <p class="roomType" style="padding-top:30px;">房型：{{content.name}}</p>
            <p>价格：{{content.price}}/天</p>
            <p>入住时间：<a v-on:click="start" id="chooseStartTime">选择</a></p>
            <p>离店时间：<a v-on:click="end" id="chooseEndTime">选择</a></p>
            <p>预定人：<input type="text" v-model="person"/></p>
            <p>联系电话：<input type="text" v-model="phone"/></p>
            <button v-on:click="booking">预定</button>
        </div>
        <div v-bind:class="{none:isNone}">
            <p align="center">选择时间：</p>
            <datepicker v-on:picked="picked"></datepicker>
        </div>
        <p id="notice"></p>
        <p id="yes"></p>
    </div>  
</template>

<script> 
import Datepicker from './datepicker.vue'
export default{
    props:["content"],
    data(){
        return{
            timeTag:'',
            isNone:true,
            person:'',
            phone:''
        }
    },
    methods: {
        start:function(){
            this.timeTag = 'start';
            this.isNone = false;
        },
        end:function(){
            this.timeTag = 'end';
            this.isNone = false;
        },
        picked(year, month, date) {
            if(this.timeTag === "start"){
                var t = year+"年"+month+"月"+date+"日";
                document.getElementById('chooseStartTime').innerHTML = t;
            }else if(this.timeTag === "end"){
                var t = year+"年"+month+"月"+date+"日";
                document.getElementById('chooseEndTime').innerHTML = t;
            }
            this.isNone = true;
        },
        cancel:function(){
            this.$emit('cancel');
        },
        booking:function(){
            var _this = this;
            if(_this.person === ''){
                document.getElementById('notice').innerHTML = '请填写预定人！';
                setTimeout(function(){
                    document.getElementById('notice').innerHTML = '';
                },2000);
            }else if(_this.phone === ''){
                document.getElementById('notice').innerHTML = '请填写联系电话！';
                setTimeout(function(){
                    document.getElementById('notice').innerHTML = '';
                },2000);
            }else if(document.getElementById('chooseStartTime').innerHTML === "选择"){
                document.getElementById('notice').innerHTML = '请选择入住时间！';
                setTimeout(function(){
                    document.getElementById('notice').innerHTML = '';
                },2000);
            }else if(document.getElementById('chooseEndTime').innerHTML === "选择"){
                document.getElementById('notice').innerHTML = '请选择离店时间！';
                setTimeout(function(){
                    document.getElementById('notice').innerHTML = '';
                },2000);
            }else{
                document.getElementById('yes').innerHTML = '预定成功,正在返回！';
                setTimeout(function(){
                    document.getElementById('yes').innerHTML = '';
                    _this.cancel();
                },2000);
            }
        }
    },
    components:{
        Datepicker:Datepicker
    }
}
</script>

<style lang="less" scoped>
@import '../assets/styles/color.less';
.booking{
    font-size:1.2rem;
	top:0;
    left:0;
    width:100%;
    height:100%;
    background-color:@tabBgColor;
    .roomType{
        margin-top:0;
    }
    .cancel{
        right:0;
        background-color:white;
        margin:0;
        padding:5px 10px 0 0;
        span{
            color:white;
            background-color:@headBarColor;
            font-size:40px;
            border-radius:40px;
            display:block;
            width:80px;
            height:80px;
            line-height:80px;
            text-align:center;
        }
    }
    #main{
        margin:0;
        padding:0;
        width:100%;
        font-size:1.2rem;
        background-color:white;
        a{
            color:blue;
        }
        p{
            padding:0 30px 0 30px;
        }
        button{
            background-color:rgb(250,128,10);
            width:100%;
            text-align:center;
            margin:0;
            font-size:1.2rem;
            border:0;
            color:white;
            padding:20px;
        }
        input{
            font-size:1.2rem;
            width:500px;
            height:70px;
            border-radius:15px;
            border:black 1px solid;
        }
    }
    .none{
        display:none;
    }
    #notice{
        text-align:center;
        color:red;
    }
    #yes{
        text-align:center;
        color:@backgroundColor;
    }
}
</style>