<template>
  <div>
    <FormInfo>
      <template v-slot:uname="scope">{{ scope.row.name }}</template>
      <template v-slot:age="scope">{{ scope.row.age }}</template>
      <template v-slot:img="scope">
        <img :src="scope.row.headImgUrl" alt="" v-if="scope.row.type == 1" />
        <a :href="scope.row.headImgUrl" v-else-if="scope.row.type == 0">{{
          scope.row.headImgUrl
        }}</a>
        <span v-else>{{ scope.row.headImgUrl }}</span>
      </template>
    </FormInfo>
  </div>
</template>

<script>
import FormInfo from '../components/FormInfo.vue';
export default {
  components: {
    FormInfo,
  },
};
</script>

<style></style>