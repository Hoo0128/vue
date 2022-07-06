<template>
  <div>
    <Login></Login>
    <FormIn></FormIn>
  </div>
</template>

<script>
import Login from './views/LoginIn.vue';
import FormIn from './views/FormIn.vue';
export default {
  components: {
    Login,
    FormIn,
  },
};
</script>

<style>
body {
  background-color: #f9f9f9;
}
</style>