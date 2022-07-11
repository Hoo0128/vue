<template>
  <div class="home-container">
    <!-- 推荐歌单 -->
    <van-cell class="title" title="推荐歌单" />
    <van-grid :border="false" :column-num="3">
      <van-grid-item v-for="item in list" :key="item.id">
        <van-image width="100" height="100" :src="item.picUrl" />
        <p class="music-name van-multi-ellipsis--l2">{{ item.name }}</p>
      </van-grid-item>
      <van-cell title="最佳匹配" class="title"/>
      <van-cell
        :label="`${
    (item.song && 
    item.song.artists[0]  &&
    item.song.artists[0].name) ||
    '未知公司'
    }-${item.name}`"
        :title="item.name"
        v-for="item in newList"
        :key="item.id"
      >
        <template>
          <van-icon color="#000" name="play-circle-o" size="28" />
        </template>
      </van-cell>
    </van-grid>
  </div>
</template>

<script>
import { getRecommendListApi, getSearchListApi } from '@/apis';

export default {
  name: 'Vue-mIndex',
  data() {
    return {
      list: [],
      newList: [],
    };
  },
  mounted() {
    this.getList();
    this.getNewsongList();
  },
  methods: {
    async getList() {
      try {
        const res = await getRecommendListApi({
          limit: 6,
        });
        console.log(res);
        this.list = res.data.result;
      } catch (e) {
        console.log('e', e);
      }
    },
    async getNewsongList() {
      try {
        const res = await getSearchListApi();
        this.newList = res.data.result;
      } catch (e) {
        console.log('e', e);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.home-container {
  .title {
    background-color: #c71d24;
    color: #fff;
  }

  .music-name {
    font-size: 12px;
    text-align: left;
    line-height: 20px;
    width: 100%;
    padding: 0 5px;
    box-sizing: border-box;
    height: 37px;
  }

  /deep/.van-grid-item__content {
    padding: 10px 0px;
  }
  .van-cell_value {
    padding: 9px;
    flex: 0 0 30px;
  }
}
</style>
