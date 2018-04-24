<template>
    <div class="chooseCity">
        <div id="head" align="center" class="p-f">
            <head-bar class="p-a"></head-bar>
            <router-link tag="div" class="all p-a" :to="{path:'/',query:{}}">全部城市</router-link>
            <div align="center" class="title">城市列表</div>
            <input id="citySearch" type="text" placeholder="请输入城市名称" class="inputClass" v-model="search"/>
            <p id="searchResult"></p>
        </div>
        <div id="main">
            <div v-for="item in showCity">
                <div class="leterDiv"><a v-bind:id="item.letter">{{item.letter}}</a></div>
                <router-link tag="div" v-for="i in item.citylist" :to="{path:'/',query:{cityQuery:i}}" class="cityDiv">{{i}}</router-link>
            </div>
        </div>
        <aside class="letter-aside p-f">
            <ul>
                <li v-for="item in showCity"><a v-on:click="nev(item.letter)">{{item.letter}}</a></li>
            </ul>
        </aside>
    </div>
</template>

<script> 
import HeadBar from '../components/headbar.vue';
var pinyin = require("pinyin");//引入拼音转化插件

export default{
    data(){
        return{
            cityData:[],
            letter:[],
            showCity:[],
            showCityTemp:[],
            search:''
        }
    },
    components:{
        HeadBar:HeadBar
    },
    methods:{
        getFirstLetter: function (str) {/*取到城市的第一个字的首字母*/
            return pinyin(str)[0][0].charAt(0).toUpperCase();
        },
        buildLetter: function () { /*组装数组，数组项形如{letter:首字母,citylist:城市名称数组}*/
            for (var i = 0; i < 26; i++) {
                var obj = {};
                obj.letter = String.fromCharCode((65 + i));
                obj.citylist = [];
                this.letter.push(obj);
            }
        },
        buildItemInfo: function () {  /*首次进入页面调用的方法*/
            this.buildLetter();
            this.$http.get('static/data/city.json').then((response)=>{/*请求数据*/
                this.cityData = response.data;
                for (var i = 0; i < this.cityData.length; i++) {
                    var _index = this.getFirstLetter(this.cityData[i]).charCodeAt() - 65;
                    /*按首字母分类push到相应的数组中去*/
                    if (_index >= 0 && _index < 26) {
                        this.letter[_index].citylist.push(this.cityData[i])
                    }
                }
                /*过滤，当首字母下有城市时，才返回*/
                this.showCity = this.showCityTemp = this.letter.filter(function (value) {
                    var len = value.citylist.length;
                    return len > 0;
                })
            })
        },
        buildItem: function (cityNamesFilter) {  /*输入框输入城市名查询时需调用的方法*/
            this.letter = [];/*清空letter*/
            this.buildLetter();/*重新组装数组*/
            for (var i = 0; i < cityNamesFilter.length; i++) {
                var _index = this.getFirstLetter(cityNamesFilter[i]).charCodeAt() - 65;
                if (_index >= 0 && _index < 26) {
                    this.letter[_index].citylist.push(cityNamesFilter[i])
                }
            }
            /*过滤，当首字母下有城市时，才返回*/
            this.showCity = this.showCityTemp = this.letter.filter(function (value) {
                var len = value.citylist.length;
                return len > 0;
            })
        },
        nev: function (id) {
            /*点击右边首字母项时，滚动条滚动到相应的位置*/
            var obj = document.getElementById(id);
            var oPos = obj.offsetTop;
            return window.scrollTo(0, oPos-160)
        },
        cityFilter: function (city) { /*输入框输入城市名查询时调用*/
            this.buildItem(this.cityData);  /*将cityData传入buildItem，重新组装新的完整的数据*/
            var showCityList;
            var showCityListTemp;
            this.showCity = this.showCity.filter(function (value) {
                showCityList = value.citylist;
                showCityListTemp = showCityList.filter(function (val) {  /*通过输入的城市名过滤*/
                    return (val.indexOf(city) > -1) 
                })
                value.citylist = showCityListTemp;
                /*字母项下的城市项长度不为0时才返回*/
                return value.citylist.length > 0;
            })
            if (this.showCity.length === 0) {
                var _showCityContent = document.getElementById('searchResult');
                _showCityContent.innerHTML = '查询不到结果！';
            }else{
                var _showCityContent = document.getElementById('searchResult');
                _showCityContent.innerHTML = '';
            }
        }
    },
    mounted(){ 
        this.buildItemInfo();
    },
    watch: {
        search: function (newCitySearch) { 
            this.cityFilter(newCitySearch);
        }
    }
}
</script>

<style lang="less" scoped>
@import '../assets/styles/color.less';
.chooseCity{
    font-size:1.4rem;
    background-color:white;
    .title{
        border-bottom:2px solid @backgroundColor;
        width:50%;
        padding:20px 0 10px 0;
        margin-bottom:20px;
    }
    .all{
        right:20px;
        color:blue;
        font-size:1.2rem;
        top:20px;
    }
    .leterDiv{
        background-color:@borderColor;
        padding-left:50px;
    }
    .cityDiv{
        padding-left:50px;
        font-size:1.4rem;
    }
    .letter-aside{
        top:200px;
        right:20px;
        font-size:1.3rem;
    }
    .inputClass{
        width:50%;
        height:70px;
        border-radius:15px;
        border:@describeColor 1px solid;
        font-size:1.3rem;
    }
    #head{
        width:100%;
        top:0;
        left:0;
        background-color:white;
    }
    #main{
        padding-top:230px;
    }
}
</style>