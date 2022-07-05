<template>
  <div id="main">
    <Header @search="searchFn"></Header>
    <Main :data="list" @del="delFn" @detail="detailFn"></Main>
    <div id="foolter">
      <Footer @add="addFn" ref="myFooter"></Footer>
      <Detail :book="book"></Detail>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';
import Detail from './components/Detail.vue';
export default {
  data() {
    return {
      list: [],
      book: [],
    };
  },
  // 挂载后自动调用该方法
  mounted() {
    this.getBook();
  },
  methods: {
    // 获取数据
    getBook() {
      this.$axios({
        method: 'GET',
        url: '/api/getbooks',
      }).then((res) => {
        const { data } = res;
        this.list = data.data;
      });
    },
    // 根据搜索框获取书籍
    searchFn(val) {
      this.$axios({
        method: 'GET',
        url: '/api/getbooks',
        params: {
          bookname: val,
        },
      }).then((res) => {
        const { data } = res;
        if (data.status !== 200) {
          return alert('没有该书籍');
        }
        this.list = data.data;
      });
    },
    // 新增数据
    addFn(val) {
      this.$axios({
        method: 'POST',
        url: '/api/addbook',
        data: { ...val },
      }).then((res) => {
        const { data } = res;
        if (data.status == 502) return alert(data.msg);
        alert(data.msg);
        this.$refs.myFooter.$refs.myBtn.removeAttribute('disabled');
        this.getBook();
      });
    },
    // 删除按钮
    delFn(id) {
      // console.log(id);
      this.$axios({
        method: 'GET',
        url: '/api/delbook',
        params: { id },
      }).then((res) => {
        const { data } = res;
        alert(data.msg);
        this.getBook();
      });
    },
    // 详情按钮
    detailFn(id) {
      this.$axios({
        method: 'GET',
        url: '/api/getbooks',
        params: { id },
      }).then((res) => {
        const { data } = res;
        if (data.status !== 200) return alert('获取图书信息失败!');
        this.book = data.data;
      });
    },
  },
  components: {
    Header,
    Main,
    Footer,
    Detail,
  },
};
</script>

<style>
#main {
  padding: 100px;
}
#foolter {
  display: flex;
  justify-content: space-between;
}
</style>