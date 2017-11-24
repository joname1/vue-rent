<template>
  <div>
    <van-search placeholder="请输入区域或商圈" v-model="value" />
    <!-- <search @on-submit="onSubmit" :auto-fixed="autoFixed" @on-focus="onFocus" @on-cancel="onCancel"></search> -->
  </div>
</template>

<script>
//import { Search, Divider } from 'vux'
import { Search } from 'vant'
export default {
  components: {
    [Search.name]:Search
  },
  methods: {
    // resultClick (item) {
    //   console.log('you click the result item: ' + JSON.stringify(item))
    // },
    // getResult (val) {
    //   this.results = val ? getResult(this.value) : []
    // },
    // onSubmit (val) {
    //   //console.log('on submit' + val)
    // },
    // onCancel () {
    //   //console.log('on cancel')
    // },
    // onFocus () {
    //   //console.log('on focus')
    // }
  },
  data () {
    return {
      //results: [],
      //autoFixed: false,
      value: '',
    }
  }
}
</script>

<style scoped>
p {
  padding: 10px 15px;
  font-size: 14px;
  color: #888;
}
</style>