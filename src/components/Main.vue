<template>
  <div>
    <table cellpadding="0" cellspacing="0">
      <tr>
        <th>序号</th>
        <th>书名</th>
        <th>作者</th>
        <th>出版社</th>
        <th>操作</th>
      </tr>
      <tr v-for="item in data" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.bookname }}</td>
        <td>{{ item.author }}</td>
        <td>{{ item.publisher }}</td>
        <td>
          <a href="javascript:;" @click="del(item.id)">删除</a>
          <a href="javascript:;" @click="detail(item.id)">详情</a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    // 删除按钮
    del(id) {
      this.$emit('del', id);
    },
    // 详情按钮
    detail(id) {
      this.$emit('detail', id);
    },
  },
};
</script>

<style scoped>
table,
th,
td {
  border-collapse: collapse;
  border: 1px solid #dbdfe8;
  padding: 10px;
  margin-bottom: 20px;
}
table {
  width: 100%;
}
th {
  font-size: 20px;
  border-bottom: 2px solid black;
}
td {
  text-align: center;
}
a {
  margin: 20px;
}
</style>