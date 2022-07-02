<template>
  <div></div>
</template>

<script>
const obj = {
  a: 10,
  b: 20,
  c: [1, 2, 3, 4, 5],
  d: '123123',
  e: {
    a: 10,
    b: [[13, 353, 5676]],
    c: {
      v: {
        n: 345,
      },
      h: 'zxc',
    },
  },
};
// 1.请补全JavaScript代码，要求实现对象参数的深拷贝并返回拷贝之后的新对象
const _completeDeepClone = (target, map = new Map()) => {
  // 补全代码
  for (let k in map) {
    let item = map[k];
    if (item instanceof Array) {
      target[k] = [];
      _completeDeepClone(target[k], item);
    } else if (item instanceof Object) {
      target[k] = {};
      _completeDeepClone(target[k], item);
    } else {
      target[k] = item;
    }
  }
};
let o = {};
_completeDeepClone(o, obj);
console.log(o);
export default {};
</script>

<style></style>