<template>
  <div>
    <div class="footer_wrap">
      
    </div>
    <div class="top">
      <!-- 7. 设置挂载点-当url的hash值路径切换, 显示规则里对应的组件到这 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    btn(val, name) {
      this.$router.push({
        path: val,
        name: name,
        query: {
          id: 'hu',
          age: 18,
        },
    
      });
    },
  },
};
</script>

<style scoped>
.footer_wrap {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  text-align: center;
  background-color: #333;
  color: #ccc;
}
.footer_wrap span {
  flex: 1;
  text-decoration: none;
  padding: 20px 0;
  line-height: 20px;
  background-color: #333;
  color: #ccc;
  border: 1px solid black;
}
.footer_wrap span:hover {
  background-color: #555;
}
.top {
  padding-top: 62px;
}
/* .footer_wrap .router-link-active{
 color: white;
  background: black;
} */
</style>
