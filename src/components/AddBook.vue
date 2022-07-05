<template>
  <div style="width: 400px">
    <form class="form-inline">
      <div class="form-group">
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="书名"
            v-model="obj.bookname"
          />
        </div>
      </div>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <div class="form-group">
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="作者"
            v-model="obj.author"
          />
        </div>
      </div>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <div class="form-group">
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="出版社"
            v-model="obj.publisher"
          />
        </div>
      </div>
      <button
        class="btn btn-primary"
        style="margin-top: 20px"
        @click.prevent="add"
        :disabled="disabled"
      >
        确定新增
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "MytestAddBook",

  data() {
    return {
      obj: {
        bookname: "",
        author: "",
        publisher: "",
      },
      disabled: false,
    };
  },

  mounted() {},

  methods: {
    add() {
      if (
        !this.obj.bookname.trim() ||
        !this.obj.author.trim() ||
        !this.obj.publisher.trim()
      ) {
        return alert("Please enter a book message");
      }
      this.$emit("add", this.obj);
    },
    clear() {
      this.obj.bookname = "";
      this.obj.author = "";
      this.obj.publisher = "";
    },
  },
};
</script>

<style scoped></style>
