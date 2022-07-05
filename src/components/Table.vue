<template>
  <div id="app">
    <div class="container">
      <table class="table table-bordered table-hover mt-2">
        <thead>
          <tr>
            <th>序号</th>
            <th>书名</th>
            <th>作者</th>
            <th>出版商</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="obj in list" :key="obj.id">
            <td>{{ obj.id }}</td>
            <td>{{ obj.bookname }}</td>
            <td>{{ obj.author }}</td>
            <td>{{ obj.publisher }}</td>
            <td>
              <a href="#" @click="del(obj.id)">删除</a
              ><a href="#" @click="detail(obj.id)">详情</a>
            </td>
          </tr>
        </tbody>

        <tfoot v-if="list.length <= 0">
          <tr>
            <td colspan="5" style="text-align: center">暂无数据</td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    del(id) {
      this.$emit("del", id);
    },
    detail(id) {
      this.$emit("detail", id);
    },
  },
};
</script>
