<template>
  <button @click="sendMsg">发送MsgA</button>
</template>

<script>
import EventBus from "../EventBus";
export default {
  data() {
    return {
      MsgA: "A组件中的Msg",
    };
  },
  methods: {
    sendMsg() {
      EventBus.$emit("sendMsg", this.MsgA);
    },
  },
};
</script>
