<template>
  <div id="app">
    <transition :name="transition" mode="out-in">
      <router-view class="child-view"/>
    </transition>
    <van-tabbar v-model="active">
      <van-tabbar-item v-for="item in tagItem" :key="item.link" :icon="item.icon" @click="() => handlerGotoRoute(item)">{{item.title}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { SET_LIST, GET_LIST } from './store/types'
import { mapActions, mapGetters } from 'vuex'
import { Tabbar, TabbarItem } from 'vant'

export default {
  name: 'App',
  data: () => ({
    transition: 'slide-left',
    active: 0,
    tagItem: [
      { icon: 'home-o', link: '/', title: '标签' },
      { icon: 'search', link: '/about', title: '标签' },
      { icon: 'friends-o', link: '/friends', title: '标签' },
      { icon: 'setting-o', link: '/setting', title: '标签' }
    ]
  }),
  components: {
    VanTabbar: Tabbar,
    VanTabbarItem: TabbarItem
  },
  computed: { ...mapGetters([...GET_LIST]) },
  created () {
  },
  methods: {
    ...mapActions([...SET_LIST]),
    handlerGotoRoute ({ link }) {
      const { path } = this.$route
      path !== link && this.$router.push(link)
    }
  },
  watch: {
    '$route' (to, from) {
      const findIndex = this.tagItem.findIndex(x => x.link === to.path)
      this.active = findIndex
      this.SET_TAB_BAR_ACTIVE(findIndex)
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transition = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  }
}
</script>

<style lang="less">
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s ease;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0;
  }

  .child-view {
    transition: all .5s cubic-bezier(.55, 0, .1, 1);
  }

  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(30px, 0);
    transform: translate(30px, 0);
  }

  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-30px, 0);
    transform: translate(-30px, 0);
  }
</style>
