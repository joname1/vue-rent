<template>
  <div>
  	<div class="header-imgs">
  	<a href="#"><img class="goback" src="static/arrow.svg"></a>
  	<swiper loop :aspect-ratio="251/375" dots-position="center">
      <swiper-item class="swiper_img" v-for="(item,index) in imgs_list" :key="index">
        <p class="swiper-mask"></p>
        <img :src="item.house_pics_pic">
      </swiper-item>
    </swiper>
    </div>

    <div class="header-info">
	    <div class="info-title">
	    	<span>{{this.house_detail.house_title}}</span>
	    </div>
	    <div class="info-releasetime">
	    	<span>{{this.house_detail.house_releasetime}} &nbsp;&nbsp; 浏览{{this.house_detail.house_browsenum}}次</span>
	    </div>
	    <div class="info-condition">
	    	<span v-for="item in house_conditions">{{item}}</span>
	    </div>
  	</div>
  	
  	<div class="blank"></div>

  </div>
</template>

<script>
import axios from 'axios'
import { Swiper,SwiperItem,XHeader } from 'vux'

export default {
	data(){
		return {
			house_detail: [],
			house_conditions: [],
			imgs_list: []
  		}
	},
	components:{
		Swiper,SwiperItem,XHeader
	},
	mounted(){
		this._getDetails()
	},
	methods:{
		_getDetails(){
			axios.get('http://app.mxzlw.cn/qiu/page/details.php?houseID=136').then((res) => {
				this.house_detail = res.data.msg.house
				let info = res.data.msg.house.house_pics
				for (let i = 0; i < info.length; i++) {
					this.imgs_list.push(info[i])
				}

				let origin = res.data.msg.house.house_params
				let normal = origin.split(",")
				for (let j = 0; j < normal.length; j++) {
				 	this.house_conditions.push(normal[j])
				 }
			})
		}
	}

}
</script>

<style scoped>
.swiper_img img {
  width: 100%;
}
.goback{
	width: 23px;
	height: 23px;
	margin: 15px;
	position: absolute;
	z-index: 999;
}
.swiper-mask{
    position: absolute;
    height: 1.4em;
    padding: 20px 50px 12px 13px;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.7) 100%);
}
.header-info{
	padding: 15px;
}
.info-title{
	padding-bottom: 10px;
	font-size: 15px;
	line-height: 20px;
}
.info-releasetime{
	padding-bottom: 10px;
	font-size: 12px;
	color: #a0a0a0;
}
.info-condition span{
	background-color: #f1f1f1;
	color: #81879a;
	padding: 0.02rem 0.05rem;
	margin-right: 0.05rem;
	margin-bottom: 0.05rem;
	display: inline-block;
}
.blank{
	height: 0.1rem;
	background-color: #eee;
}
</style>