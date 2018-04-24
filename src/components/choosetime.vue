<template>
    <div class="choosetime p-f">
        <div class="div1">
            <p align="center">选择时间：</p>
            <datepicker v-on:picked="picked"></datepicker>
        </div>
    </div>  
</template>

<script> 
import Datepicker from './datepicker.vue'
export default{
    data(){
        return{
            
        }
    },
    methods: {
        picked(year, month, date) {
            console.warn(`你选择了${year}年${month}月${date}日`)
        }
    },
    components:{
        Datepicker:Datepicker 
    }
}
</script>

<style lang="less" scoped>
@import '../assets/styles/color.less';
.choosetime{
	top:0;
    left:0;
    width:100%;
    height:100%;
    .div1{
        height:50%;
    }
}
</style>