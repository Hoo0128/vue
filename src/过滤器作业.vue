<template>
  <div>
    <div>
      <h1>使用同一个过滤器处理1876986粉丝数量</h1>
      <span>国内网站:粉丝数量:{{ msg | num(3, '万') }}</span>
      <br />
      <span>国外网站:粉丝数量:{{ msg | num(2, '千') }}</span>
    </div>
    <div>
      <h1>使用同一个过滤器处理1636450540055时间戳</h1>
      <span>{{ time | getTime('YYYY-MM-DD HH:mm:ss') }}</span>
      <br />
      <span>{{ time | getTime('YYYY/MM/DD HH:mm:ss') }}</span>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  data() {
    return {
      msg: '1876986',
      time: 1636450540055,
    };
  },
  filters: {
    num(val, index, str) {
      const arr = val.split('');
      arr.splice(arr.length - 1 - index, 0, '.');
      arr.push(str);
      return arr.join('');
    },
    getTime(val, layout) {
      return moment(val).format(layout);
    },
  },
};
</script>

<style></style>