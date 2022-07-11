<template>
  <div style="padding-bottom:48px">
    <van-nav-bar :title="title" />

    <router-view></router-view>
    <van-tabbar route>
      <van-tabbar-item to="/layout/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/layout/search" icon="search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Vue-mIndex',

  data() {
    return {
      title: '',
    };
  },

  mounted() {
    console.log(this.$route.meta);
    this.title = this.$route.meta.title;
  },
  methods: {},
  watch: {
    $route(newval) {
      this.title = newval.meta.title;
    },
  },
};
</script>

<style></style>
