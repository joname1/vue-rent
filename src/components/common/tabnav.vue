<template>
  <div>
    <tabbar>
      <tabbar-item selected link="/">
        <img slot="icon" src="static/home.svg">
        <img slot="icon-active" src="static/home-focus.svg">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/share">
        <img slot="icon" src="static/share.svg">
        <img slot="icon-active" src="static/share-focus.svg">
        <span slot="label">分享</span>
      </tabbar-item>
      <tabbar-item link="/user">
        <img slot="icon" src="static/user.svg">
        <img slot="icon-active" src="static/user-focus.svg">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Group, Cell } from 'vux'
export default {
  components: {
    Tabbar,TabbarItem,Group,Cell
  }
}
</script>
<style scoped>
  .weui-tabbar{position: fixed;}
</style>