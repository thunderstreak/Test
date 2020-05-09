<template>
  <div class="home">
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
import { NavBar, Toast } from 'vant'
export default {
  name: 'Home',
  components: {
    // HelloWorld
    'van-nav-bar': NavBar
  },
  methods: {
    onClickLeft () {
      Toast('返回')
      this.$router.push({ name: 'About' })
    },
    onClickRight () {
      Toast('按钮')
    }
  }
}
</script>
