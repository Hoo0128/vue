<template>
  <div>
    <form action="">
      <input type="text" placeholder="作者" v-model.trim="bookObj.author" />
      <br />
      <input type="text" placeholder="书名" v-model.trim="bookObj.bookname" />
      <br />
      <input
        type="text"
        placeholder="出版社"
        v-model.trim="bookObj.publisher"
      />
      <br />
      <button @click.prevent="addFn" ref="myBtn">新增</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookObj: {
        bookname: '',
        author: '',
        publisher: '',
      },
    };
  },
  methods: {
    // 添加书籍
    addFn() {
      if (
        this.bookObj.bookname == '' ||
        this.bookObj.author == '' ||
        this.bookObj.publisher == ''
      ) {
        return alert('请输入书籍信息');
      }
      this.$refs.myBtn.setAttribute('disabled', true);
      this.$emit('add', this.bookObj);
      this.$nextTick(() => {
        for (let k in this.bookObj) {
          this.bookObj[k] = '';
        }
      });
    },
  },
};
</script>

<style scoped>
input {
  width: 400px;
  height: 35px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding-left: 10px;
  margin-bottom: 10px;
}
button {
  width: 60px;
  height: 35px;
  border: 0;
  border-radius: 4px;
  background-color: #306cf4;
  font-weight: 700;
  color: #fff;
  font-size: 16px;
}
</style>