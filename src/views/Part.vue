<template>
  <div>
    <p>关注明星</p>
    <p>发现精彩</p>
    <p>寻找伙伴{{$route.query.age}}</p>
    <p>加入我们{{$route.query.id}}</p>
    <p>人名: --{{$route.params.username}}</p>
    <p>id{{$route.params.age}}</p>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
