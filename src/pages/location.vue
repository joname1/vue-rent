<template>
    <div class="location">
		<div class="choice" @click="choiceCity()">{{youChoiceCityName}}</div>
        <city
            :is-show.sync='city.isShow'
            :on-choose='city.onChoose'
            :city-data='city.cityData'
            :local-city='city.localCity'
            :star-city='city.starCity'
			:close="close"
            ></city>
    </div>
</template>

<script>
    import city from '@/components/locselect';
    export default {
        data(){
            return {
                youChoiceCityName: '南宁',
                city: {
                    isShow: false,
                    cityData: [],
                    onChoose: null,
                    localCity: {},
                    starCity: []
                }
            }
        },
        components: {
            city
        },
        mounted(){
            let _this = this;
            this.getCityInfo();
            this.city.onChoose = function(res){
                //ToDo: 选完城市后......
                console.log(res);
				_this.city.isShow = false;
                _this.youChoiceCityName = res.cityName;
            }
        },
        methods: {
            getCityInfo: function(){
                this.city.localCity = {
                       cityId: 450100,
                       cityName: "南宁",
                       citySpell: "NANNING",
                       cityFirstLetter: "N",
                    }
                this.city.starCity = [
                    {
                       cityId: 450100,
                       cityName: "南宁",
                       citySpell: "NANNING",
                       cityFirstLetter: "N",
                    },{
                        cityId: 450200,
                        cityName: "柳州",
                        citySpell: "LIUZHOU",
                        cityFirstLetter: "L",
                    },{
                        cityId: 450300,
                        cityName: "桂林",
                        citySpell: "GUILIN",
                        cityFirstLetter: "G",
                    }
                ]

                this.city.cityData = [
                    {
                        cityId: 513200,
                        cityName: "阿坝州",
                        citySpell: "ABAZHOU",
                        cityFirstLetter: "A",
                    },  {
                        cityId: 610300,
                        cityName: "宝鸡",
                        citySpell: "BAOJI",
                        cityFirstLetter: "B"
                    }, 
                    {
                        cityId: 130900,
                        cityName: "沧州",
                        citySpell: "CANGZHOU",
                        cityFirstLetter: "C",
                    },
                    {
                        cityId: 210600,
                        cityName: "丹东",
                        citySpell: "DANDONG",
                        cityFirstLetter: "D",
                    },
                    {
                        cityId: 150600,
                        cityName: "鄂尔多斯",
                        citySpell: "EERDUOSI",
                        cityFirstLetter: "E",
                    },
                    {
                        cityId: 450600,
                        cityName: "防城港",
                        citySpell: "FANGCHENGGANG",
                        cityFirstLetter: "F",
                    },
                    {
                        cityId: 623000,
                        cityName: "甘南州",
                        citySpell: "GANNANZHOU",
                        cityFirstLetter: "G",
                    },
                    {
                        cityId: 230100,
                        cityName: "哈尔滨",
                        citySpell: "HAERBIN",
                        cityFirstLetter: "H",
                    },
                    {
                        cityId: 230800,
                        cityName: "佳木斯",
                        citySpell: "JIAMUSI",
                        cityFirstLetter: "J",
                    },
                    {
                        cityId: 410200,
                        cityName: "开封",
                        citySpell: "KAIFENG",
                        cityFirstLetter: "K",
                    },
                    {
                        cityId: 451300,
                        cityName: "来宾",
                        citySpell: "LAIBIN",
                        cityFirstLetter: "L",
                    },
                    {
                        cityId: 340500,
                        cityName: "马鞍山",
                        citySpell: "MAANSHAN",
                        cityFirstLetter: "M",
                    },
                    {
                        cityId: 320100,
                        cityName: "南京",
                        citySpell: "NANJING",
                        cityFirstLetter: "N",
                    },
                    {
                        cityId: 211100,
                        cityName: "盘锦",
                        citySpell: "PANJIN",
                        cityFirstLetter: "P",
                    },
                    {
                        cityId: 522600,
                        cityName: "黔东南州",
                        citySpell: "QIANDONGNANZHOU",
                        cityFirstLetter: "Q",
                    },
                    {
                        cityId: 371100,
                        cityName: "日照",
                        citySpell: "RIZHAO",
                        cityFirstLetter: "R",
                    },
                    {
                        cityId: 460200,
                        cityName: "三亚",
                        citySpell: "SANYA",
                        cityFirstLetter: "S",
                    },
                    {
                        cityId: 370900,
                        cityName: "泰安",
                        citySpell: "TAIAN",
                        cityFirstLetter: "T",
                    },
                    {
                        cityId: 371000,
                        cityName: "威海",
                        citySpell: "WEIHAI",
                        cityFirstLetter: "W",
                    },
                    {
                        cityId: 350200,
                        cityName: "厦门",
                        citySpell: "XIAMEN",
                        cityFirstLetter: "X",
                    },
                    {
                        cityId: 640100,
                        cityName: "银川",
                        citySpell: "YINCHUAN",
                        cityFirstLetter: "Y",
                    },
                    {
                        cityId: 430800,
                        cityName: "张家界",
                        citySpell: "ZHANGJIAJIE",
                        cityFirstLetter: "Z",
                    }
                ];
            },
            choiceCity: function(){
                this.city.isShow = true;
            },
			close(){
				this.city.isShow = false;
			}
        }
    }
</script>

<style lang="less">
    .choice{
        font-size: 11px;
        padding: 13px;
        border-right: solid 1px #e5e5e5;
        border-bottom: solid 1px #efeff4;
        background: #efeff4;
        text-align: center;
        color: black;
        float: left;
        width: 15%;
    }
</style>
