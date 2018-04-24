<template>
    <div class="headBar">
        <span v-on:click="backPage()"> < </span>
    </div>
</template>

<script> 
export default{
    data(){
        return{

        }
    },
    methods:{
        backPage:function(){
            history.go(-1);
        }
    }
}
</script>

<style lang="less" scoped>
@import '../assets/styles/color.less';
.headBar{
    padding-left:10px;
    padding-bottom:10px;
    padding-top:5px;
	span{
	    color:white;
	    background-color:@headBarColor;
	    font-size:50px;
	    border-radius:50px;
	    display:block;
	    width:100px;
	    height:100px;
	    line-height:100px;
	    text-align:center;
	}
}
</style>