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
    import city from '@/components/locselect'
    import citydata from 'static/citydata'
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

                this.city.cityData = citydata;
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
        padding: 12px;
        border-right: solid 1px #e5e5e5;
        border-bottom: solid 1px #efeff4;
        background: #efeff4;
        text-align: center;
        color: black;
        float: left;
        width: 15%;
    }
</style>
