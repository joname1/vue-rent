<template>
  <div>
    <swiper loop auto :aspect-ratio="248/621">
      <swiper-item class="swiper_img" v-for="(item,index) in banner_list" :key="index">
        <img :src="item.banner_pic">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, GroupTitle, SwiperItem, XButton, Divider } from 'vux'
import axios from 'axios'

export default {
  components: {
    Swiper,
    SwiperItem,
    GroupTitle,
    XButton,
    Divider
  },
  data () {
    return {
      banner_list: ''
    }
  },
  mounted(){
    this._getbanner();
  },
  methods: {
    _getbanner(){
        axios.get('http://app.mxzlw.cn/qiu/page/main.php?showRented=0').then((res) =>{
        this.banner_list = res.data.msg.banner
        })
      }
  }  
}
</script>

<style scoped>
.swiper_img img {
  width: 100%;
}
</style>