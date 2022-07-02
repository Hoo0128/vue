<template>
  <div>
    <h1>{{obj.a}}</h1>
    <button @click="change">改变</button>
    <h1>{{obj1 && obj1.a}}</h1>
    <button @click="change1">改变</button>
  </div>
</template>

<script>
// 响应式
// 数据变化 ==》 视图直接更新
// 视图 ==》数据更新
export default {
  data() {
    return {
      obj: {
        b: 10,
        c: 12,
      },
      obj1: {},
    };
  },
  methods: {
    change() {
 
      this.$set(this.obj, "a", 10);
      console.log("===", this.obj);
    },
    change1() {
      this.obj1 = {
        a: 10,
      };
    },
  },
};
</script>

<style>

</style>