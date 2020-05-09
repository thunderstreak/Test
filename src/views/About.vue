<template>
  <div class="about">
    <h1 class="about-title">This is an about page</h1>
    <van-tabs v-model="active" swipeable>
      <van-tab title="标签 1">内容 1</van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { Tab, Tabs } from 'vant'

export default {
  name: 'about',
  data: () => ({
    name: 'about_name',
    active: 2
  }),
  components: {
    VanTab: Tab,
    'van-tabs': Tabs
  },
  created () {
  },
  mounted () {
    this.$http({
      url: '/api/v1',
      method: 'get'
    }).then(res => {
      // console.log(res)
    })
  },
  methods: {}
}
</script>
