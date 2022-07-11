<template>
  <div>
    <van-search v-model="value" placeholder="请输入搜索关键词" />
<template v-if="serachList.length==0">
      <van-cell title="热门搜索" />

    <div style="padding: 10px 16px">
      <van-tag
        color="#ccc"
        text-color="#000"
        size="large"
        plain
        round
        type="primary"
        v-for="(item, index) in tags"
        :key="index"
        style="margin-right: 6px"
        @click="clickFn(item.first)"
        >{{ item.first }}
      </van-tag>
    </div>
</template>
    <van-cell title="最佳匹配" />

 <template >
     <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell
        v-for="item in serachList"
        :key="item.id"
        :title="item.name"
        :label="`${item.ar[0].name}-${item.name}`"
      />
    </van-list>
 </template>
  </div>
</template>

<script>
import { getSearchTagApi, getSearchListApi } from '@/apis';
// import { log } from 'console';

// 热搜关键字
export default {
  data() {
    return {
      tags: [],
      value: '',
      serachList: [],
      loading: false,
      finished: true,
    };
  },
  created() {
    this.getTagList();
  },
  methods: {
    async getTagList() {
      try {
        const res = await getSearchTagApi();
        console.log(res);
        this.tags = res.data.result.hots;
      } catch (e) {
        console.log(e);
      }
    },
    async clickFn(val) {
      this.value = val;
      try{
      const res = await getSearchListApi({
        keywords: this.value,
      });
      this.serachList = res.data.result.songs;
      this.$toast.success("成功文案")
      // console.log(this.serachList);
    } catch (e){
      this.$toast.fail("失败文案")
    }
    },
    onLoad() {},
  
  
}
}
</script>

<style></style>
