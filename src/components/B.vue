<template>
  <div>我是组件 B 来自a:{{ formA }}</div>
</template>

<script>
import EventBus from "../EventBus";
export default {
  data() {
    return {
      formA: "",
    };
  },
  created() {
    EventBus.$on("sendMsg", (val) => (this.formA = val));
  },
  methods: {},
};
</script>
