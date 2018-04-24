<template>
    <div class="title">{{data.title}}</div>  
</template>

<script> 
export default{
    props:['data'],
    data(){
        return{
            
        }
    }
}
</script>

<style lang="less" scoped>
@import '../assets/styles/color.less';
.title{
	background-color:@backgroundColor;
	text-align:center;
	color:white;
	line-height:80px;
	height:80px;
}
</style>