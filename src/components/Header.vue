<template>
  <div>
    <input
      type="text"
      placeholder="搜索-书本名称"
      @keyup.enter="keyUp"
      v-model.trim="val"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      val: '',
    };
  },
  methods: {
    // 键盘回车事件
    keyUp() {
      if (this.val.length == 0) {
        return alert('请输入书本信息');
      }
      this.$emit('search', this.val);
      this.val = '';
    },
  },
};
</script>

<style scoped>
input {
  width: 200px;
  height: 35px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding-left: 10px;
  margin-bottom: 10px;
}
input::placeholder {
  font-size: 15px;
}
</style>