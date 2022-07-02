<template>
  <div>
    <div>
      <span>姓:</span>
      <input type="text" v-model="firstName" />
      <br />
      <span>名:</span>
      <input type="text" v-model="secName" />
      <br />
      <span>全称:</span>
      <input type="text" v-model="fullName" />
    </div>
  </div>
</template>

<script>
// 问题: 给计算属性赋值 - 需要setter
// 解决:
/*
    完整语法:
    computed: {
        "计算属性名" (){},
        "计算属性名": {
            set(值){

            },
            get(){
                return 值
            }
        }
    }
*/
export default {
  data() {
    return {
      firstName: "",
      secName: "",
    };
  },
  // 输入姓， 输入名  形成姓名 张.三
  // 输入全名  拆解 姓 名
  computed: {
    // fullName() {
    //   return this.firstName + " " + this.secName;
    // }
    fullName:{
      set(val){
        const arr = val.split(".");
        this.firstName = arr[0] || "";
        this.secName = arr[1] || "";

      },
      get(){
        return this.firstName ? this.firstName + "." + this.secName: "";
      }
    }
  },
};
</script>

<style>
</style>