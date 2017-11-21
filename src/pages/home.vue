<template>
    <div class="home">
        <Location></Location>
        <Search></Search>
        <swiper loop auto :aspect-ratio="248/621">
            <swiper-item class="swiper_img" v-for="(item,index) in banner_list" :key="index">
                <img :src="item.banner_pic">
            </swiper-item>
        </swiper>
        <div class="mod-con0">
            <div class="mod-in">
                <div class="mod-nav0 mod-nav0-col4">
                    <div class="opt opt0">
                        <a href="#">
                            <span class="pic"></span>
                            <span class="txt">公寓</span>
                        </a>
                    </div>
                    <div class="opt opt1">
                        <a href="#">
                            <span class="pic"></span>
                            <span class="txt">短租</span>
                        </a>
                    </div>
                    <div class="opt opt2">
                        <a href="#">
                            <span class="pic"></span>
                            <span class="txt">会议室</span>
                        </a>
                    </div>
                    <div class="opt opt3">
                        <a href="#">
                            <span class="pic"></span>
                            <span class="txt">办公室</span>
                        </a>
                    </div>
                    <div class="opt opt4">
                        <a href="#">
                            <span class="pic"></span>
                            <span class="txt">商铺</span>
                        </a>
                    </div>
                    <div class="opt opt5">
                        <a href="#">
                            <span class="pic"></span>
                            <span class="txt">车位</span>
                        </a>
                    </div>
                    <div class="opt opt6">
                        <a href="#">
                            <span class="pic"></span>
                            <span class="txt">仓库</span>
                        </a>
                    </div>
                    <div class="opt opt7">
                        <a href="#">
                            <span class="pic"></span>
                            <span class="txt">维修与服务</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    <div style="margin-bottom: 50px;">
       <tab v-model="index">
        <tab-item class="vux-center" v-for="(item, index) in list" :key="index">{{item}}</tab-item>
      </tab>
          
            <div style="margin: 10px;overflow: hidden;" v-for="item in recommand_list" v-show="index==0" @click="details(item.house_id)">
                <masker style="border-radius: 2px;">
                    <div class="m-img" :style="{backgroundImage: 'url(' + item.house_pic + ')'}"></div>
                    <div slot="content" class="m-title">{{item.house_title}}
                        <br/>
                        <span class="m-time">¥ {{item.house_rent}}/天</span>
                    </div>
                </masker>
            </div>
        <div v-show="index==1">
          <div class="tab-swiper vux-center">暂无数据</div>
        </div>

    </div>
    </div>
</template>
<script>
import axios from 'axios'
import Search from '@/pages/search'
import Location from '@/pages/location'
import { Tab,TabItem,Swiper,SwiperItem,Masker,Scroller,Flexbox,FlexboxItem } from 'vux'
const list = () => ['房屋推荐', '托管出租']

export default {
    components: {
        Search,Location,Tab,TabItem,Swiper,SwiperItem,Masker,Scroller,Flexbox,FlexboxItem
    },
    data() {
        return {
            index: 0,
            list: list(),
            recommand_list: [],
            banner_list: []
        }
    },
    mounted: function() {
        this._getrecommand();
    },
    methods: {
        _getrecommand(){
            axios.get('http://app.mxzlw.cn/qiu/page/main.php?showRented=0').then((res) => {
                this.banner_list = res.data.msg.banner
                this.recommand_list = res.data.msg.house
            })
        },
        details(id){
            this.$router.push('/houseDetails?id='+id)
        }
    }
}
</script>
<style lang="less" scoped>
.swiper_img img {
  width: 100%;
}
.flex-demo {
    text-align: center;
    color: black;
    margin-bottom: 10px;
    span {
        white-space: nowrap;
        display: block;
        overflow: hidden;
        font-size: 11px;
    }
}

.applists {
    margin-bottom: 50px;
}

.mod-nav0 {
    overflow: hidden;
    padding-top: 10px;
    border-top: 1px solid #e6e6e6;
}

.mod-nav0 .opt {
    width: 33.3%;
    display: block;
    float: left;
    padding: 10px 0 2px;
    cursor: pointer;
}

.mod-nav0 .opt .pic {
    display: block;
    width: 40px;
    height: 40px;
    margin: auto;
    background: url(../../static/sprite.png) no-repeat 0 0;
    opacity: 1;
}

.mod-nav0 .opt .txt {
    display: block;
    font-size: 13px;
    color: #4c4c4c;
    line-height: 32px;
    width: 100%;
    text-align: center;
}

.mod-nav0 .opt:hover .pic,
.mod-nav0 .opt:active .pic,
.mod-nav0 a.on .opt .pic {
    opacity: 0.6;
}

.mod-nav0 .opt0 .pic {
    background-position: 0 0;
}

.mod-nav0 .opt1 .pic {
    background-position: -50px 0;
}

.mod-nav0 .opt2 .pic {
    background-position: 0px -50px;
}

.mod-nav0 .opt3 .pic {
    background-position: -50px -50px;
}

.mod-nav0 .opt4 .pic {
    background-position: -100px 0;
}

.mod-nav0 .opt5 .pic {
    background-position: -100px -50px;
}

.mod-nav0 .opt6 .pic {
    background-position: 0 -100px;
}

.mod-nav0 .opt7 .pic {
    background-position: -50px -100px;
}

.mod-nav0-col3 .opt {
    width: 33.3%;
}

.mod-nav0-col4 .opt {
    width: 24.9%;
}

.weui-media-box__des {
    color: #999;
    font-size: 13px;
    overflow: hidden;
    text-overflow: ellipsis;
}

.weui-cell__ft {
    color: #0080fc;
}
.m-img {
  padding-bottom: 33%;
  display: block;
  position: relative;
  max-width: 100%;
  background-size: cover;
  background-position: center center;
  cursor: pointer;
  border-radius: 2px;
}
.m-title {
  color: #fff;
  text-align: center;
  text-shadow: 0 0 2px rgba(0, 0, 0, .5);
  font-weight: 500;
  font-size: 16px;
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
}
.m-time {
  font-size: 12px;
  padding-top: 4px;
  border-top: 1px solid #f0f0f0;
  display: inline-block;
  margin-top: 5px;
}
</style>
