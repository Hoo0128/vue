<!-- <template>
  <div id="app">
    <div>
      <span>姓名:</span>
      <input type="text" placeholder="请输入姓名" v-model.trim="name" />
    </div>
    <div>
      <span>年龄:</span>
      <input type="number" placeholder="请输入年龄" v-model.trim.number="age" />
    </div>
    <div>
      <span>性别:</span>
      <select v-model="sex">
        <option value="1">男</option>
        <option value="0">女</option>
      </select>
    </div>
    <div>
      <button @click="fn">{{ isEdit ? "修改" : "添加"}}</button>
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
          <td>{{  { 0: "女", 1: "男" }[item.sex] }}</td>
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
          sex: '1',
        },
        {
          id: 2,
          name: 'jone',
          age: 21,
          sex: '0',
        },
      ],
      name: '',
      age: '',
      sex: '0',
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
</script> -->


<template>
  <div id="app">
    <div>
      <span>姓名:</span>
      <input type="text" placeholder="请输入姓名" v-model.trim="name" />
    </div>
    <div>
      <span>年龄:</span>
      <input type="number" placeholder="请输入年龄" v-model.trim="age" />
    </div>
    <div>
      <span>性别:</span>
      <select v-model="sex">
        <option :value="1">男</option>
        <option :value="0">女</option>
      </select>
    </div>
    <div>
      <button @click="addFn">{{ isEdit ? "修改" : "添加" }}</button>
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
        <tr v-for="item in list" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ { 0: "女", 1: "男" }[item.sex] }}</td>
          <td>
            <button>删除</button>
            <button @click="editFn(item)">编辑</button>
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
      list: [
        {
          id: 100,
          age: 18,
          name: "章三",
          sex: 1, // 1男 0女
        },
        {
          id: 101,
          age: 18,
          name: "章三三",
          sex: 0, // 1男 0女
        },
      ],
      name: "",
      age: "",
      sex: 0, // 1男 0女
      isEdit: false, // false 代表没有处于编辑  true  代表处于编辑
      currentId: "",
    };
  },
  methods: {
    addFn() {
      if (this.isEdit) {
        // 说明处于编辑状态
        // 改完之后的数据保存进去
        // 当前这个数据的id
        const index = this.list.findIndex((ele) => ele.id == this.currentId);
        this.list[index].name = this.name;
        this.list[index].age = this.age;
        this.list[index].sex = this.sex;
        this.currentId = "";
        this.isEdit = false; //再次便会添加
        this.clearFn();
        alert("修改完成");
        return;
      }
      if (this.name == "" || this.age == "") {
        return alert("Please enter a name,age");
      }
      const id = this.list[this.list.length - 1]
        ? this.list[this.list.length - 1].id + 1
        : 100;
      this.list.push({
        id,
        name: this.name,
        age: this.age,
        sex: this.sex,
      });
      this.clearFn();
      alert("添加完成");
    },
    editFn(data) {
      this.isEdit = true;
      console.log(data);
      this.name = data.name;
      this.age = data.age;
      this.sex = data.sex;
      // 当前这个数据的id 要保存下来
      this.currentId = data.id;
    },
    clearFn() {
      this.name = "";
      this.age = "";
      this.sex = 0;
    },
  },
};
</script>
