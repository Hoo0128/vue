<template>
  <footer class="footer">
    <span class="todo-count"
      >剩余<strong>{{ count }}</strong></span
    >
    <ul class="filters">
      <li>
        <a
          :class="{ selected: isSel == 'all' }"
          href="javascript:;"
          @click="change('all')"
          >全部</a
        >
      </li>
      <li>
        <a
          :class="{ selected: isSel == 'no' }"
          href="javascript:;"
          @click="change('no')"
          >未完成</a
        >
      </li>
      <li>
        <a
          :class="{ selected: isSel == 'yes' }"
          href="javascript:;"
          @click="change('yes')"
          >已完成</a
        >
      </li>
    </ul>
    <button class="clear-completed" @click="clear">清除已完成</button>
  </footer>
</template>

<script>
export default {
  props: ["count"],
  data() {
    return {
      isSel: "all", // all 全部 no 未完成 yes 已完成
    };
  },
  // 1. 点击 状态 实现样式的切换
  methods: {
    change(val) {
      this.isSel = val;
      // 2. 列表展示的切换
      this.$emit("fliterdata", val);
    },
    clear() {
      this.$emit("clear");
    },
  },
};
</script>
