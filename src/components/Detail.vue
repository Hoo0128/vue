<template>
  <div id="detail" v-if="isShow">
    <div v-for="item in book" :key="item.id">
      <h1>书籍详情</h1>
      <h2>书名:{{ item.bookname }}</h2>
      <div id="author">
        <span>作者:{{ item.author }}</span>
        <span>出版社:{{ item.publisher }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
  props: {
    book: {
      type: Array,
      defualt: () => [],
    },
  },
  watch: {
    book(val) {
      if (val) {
        this.isShow = true;
      }
    },
  },
};
</script>

<style scoped>
#detail {
  width: 600px;
  height: 200px;
  padding: 0 30px;
  border-radius: 20px;
  color: #fff;
  background-color: yellowgreen;
  text-align: center;
}
#author {
  display: flex;
  justify-content: space-around;
}
</style>