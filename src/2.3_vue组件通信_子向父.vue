<!-- <template>
  <div>
    <MyProduct 
    v-for="item in list"
    :key="item.id"
   :obj="item"></MyProduct>
  </div>
</template>

<script>
import MyProduct from "./components/MyProduct1";
export default {
  data(){
    return{
msg:"口水鸡",
list: [
    { id: 1, proname: "超级好吃的棒棒糖", proprice: 18.8, info: '开业大酬宾, 全场8折' },
    { id: 2, proname: "超级好吃的大鸡腿", proprice: 34.2, info: '好吃不腻, 快来买啊' },
    { id: 3, proname: "超级无敌的冰激凌", proprice: 14.2, info: '炎热的夏天, 来个冰激凌了' },
],
    }
  },
components:{
MyProduct,
}

  }


</script>

<style>

</style> -->



<template>
  <div>
    <MyProduct v-for="(item,index) in list"
    :key="item.id"
    :title="item.proname"
    :price="item.proprice"
    :info="item.info"
     :index="index"
    v-on:del="delFn"></MyProduct>
  </div>
</template>

<script>

import MyProduct from "./components/MyProduct.vue";
export default {
  data(){
    return{
msg:"口水鸡",
list: [
    { id: 1, proname: "超级好吃的棒棒糖", proprice: 18.8, info: '开业大酬宾, 全场8折' },
    { id: 2, proname: "超级好吃的大鸡腿", proprice: 34.2, info: '好吃不腻, 快来买啊' },
    { id: 3, proname: "超级无敌的冰激凌", proprice: 14.2, info: '炎热的夏天, 来个冰激凌了' },
],
    }
  },
components:{
MyProduct,
},
methods:{
  delFn(val,index){
    this.list[index].proprice = (this.list[index].proprice - val).toFixed(1);

    // console.log("===",val);
    
  }
}

  }


</script>

<style>

</style>