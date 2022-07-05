<template>
  <div id="app">
    <div style="margin: 40px auto">
      <input
        type="text"
        class="form-control"
        style="width: 220px"
        placeholder="搜索-书本名称"
        @keydown.enter="enterFn"
        v-model="bookname"
      />

      <button
        class="btn btn-primary"
        style="margin-top: 20px"
        @click="isShow = !isShow"
      >
        新增({{ isShow ? "隐藏" : "显示" }})
      </button>
      <AddBook v-if="isShow" @add="addFn" ref="addbook"></AddBook>
    </div>

    <MyTable :list="list" @del="delFn" @detail="detailFn"></MyTable>
  </div>
</template>

<script>
import MyTable from "./components/Table.vue";
import AddBook from "./components/AddBook.vue";

export default {
  name: "App",
  data() {
    return {
      list: [],
      bookname: "",
      isShow: false,
    };
  },
  components: {
    MyTable,
    AddBook,
  },
  created() {
    this.getList();
  },
  methods: {
    enterFn() {
      const params = {};
      this.bookname ? (params.bookname = this.bookname) : "";
      this.getList(params);
    },
    getList(params = {}) {
      this.$axios({
        url: "/api/getbooks",
        params: params,
      }).then((res) => {
        this.list = res.data.data;
      });
    },
    delFn(id) {
      this.$axios({
        url: "/api/delbook",
        params: { id },
      }).then(() => {
        this.getList();
      });
    },
    addFn(obj) {
      this.$refs.addbook.disabled = true;
      this.$axios({
        url: "/api/addbook",
        method: "POST",
        data: {
          ...obj,
          appkey: "7250d3eb-18e1-41bc-8bb2-11483665535a",
        },
      }).then((res) => {
        this.$refs.addbook.disabled = false;
        this.$refs.addbook.clear();
        alert(res.data.msg);
        if (res.data.status == 200 || res.data.status == 201) {
          this.getList();
        }
      });
    },
    detailFn(id) {
      this.$axios({
        url: "/api/getbooks",
        params: { id },
      }).then((res) => {
        const info = res.data.data && res.data.data[0];
        alert(
          `作者：${info.author}; 出版社：${info.publisher}; 书名：${info.bookname}`
        );
      });
    },
  },
};
</script>

<style></style>
