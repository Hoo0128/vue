<template>
  <div id="app">
    <div>
      <span>姓名:</span>
      <input type="text" v-model.trim="name" />
    </div>
    <div>
      <span>年龄:</span>
      <input type="number" v-model.trim.number="age" />
    </div>
    <div>
      <span>性别:</span>
      <select v-model="sex">
        <option value="男">男</option>
        <option value="女">女</option>
      </select>
    </div>
    <div>
      <button @click="fn">添加/修改</button>
    </div>
    <div>
      <table border="1" cellpadding="10" cellspacing="0">
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>性别</th>
          <th>操作</th>
        </tr>
        <tr v-for="item in arr" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.sex }}</td>
          <td>
            <button @click="del(item.id)">删除</button>
            <button @click="del1(item.id)">编辑</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [
        {
          id: 1,
          name: 'tom',
          age: 19,
          sex: '男',
        },
        {
          id: 2,
          name: 'jone',
          age: 21,
          sex: '女',
        },
      ],
      name: '',
      age: '',
      sex: '',
    };
  },
  methods: {
    fn() {
      if (this.name == '' || this.age == '' || this.sex == '')
        return alert('请填写必填项');
      this.arr.push({
        id: this.arr[this.arr.length - 1].id + 1,
        name: this.name,
        age: this.age,
        sex: this.sex,
      });
    },
    del(val) {
      const index = this.arr.findIndex((ele) => ele.id == val);
      this.arr.splice(index, 1);
      //  this.arr.id=val;
      //  this.arr.splice(val,1)
    },
    del1(id) {
      const idd = this.arr.findIndex((ele) => ele.id == id);
      this.name = this.arr[idd].name; 
      this.age = this.arr[idd].age;
      this.sex = this.arr[idd].sex;
    },
   
  },  
};
</script>
