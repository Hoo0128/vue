<template>
  <div>
 
    <div class="nav_main">
      <router-link to="/find/recommend">首页</router-link>
      <router-link to="/find/ranking">分类</router-link>
      <router-link to="/find/songlist">订单</router-link>
     <router-link to="/user">我的</router-link>
    <h3>显示路由切换的页面↓</h3>
    </div>

   
      <router-view></router-view>
    
  </div>
</template>

<script>
export default {};
</script>

 <style scoped>
.nav_main {
  /* background-color: red; */
  /* color: white; */
  padding: 10px 0;
}
.nav_main a {
  text-align: center;
  text-decoration: none;
  /* color: white; */
  font-size: 30x;
  margin: 7px 17px 0;
  padding: 0px 15px 2px 15px;
  height: 20px;
  display: inline-block;
  line-height: 20px;
  border-radius: 20px;
}
/* .nav_main a:hover {
  background-color: brown;
}
.nav_main .router-link-active{
  background-color: brown;
} --> */
</style>