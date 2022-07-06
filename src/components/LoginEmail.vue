<template>
  <div>
    <div class="from">
      <p>选择所在地(实名认证主体所在地)<span></span></p>
      <el-radio v-model="radio" label="1">中国香港</el-radio>
      <el-radio v-model="radio" label="2">中国大陆</el-radio>
    </div>
    <div class="demo-input-suffix">
      手机号码：
      <div class="phonenumber1">
        <el-input placeholder="请输入邮箱"  v-model="input1" class="input1">
        </el-input>
      </div>
      <div class="yz">
        <el-input placeholder="输入验证码" v-model="input" clearable>
        </el-input>
        <el-button class="btn" type="primary">发送验证码</el-button>
      </div>
    </div>
    <div class="pass demo-input-suffix">
      登录密码:
      <el-input
        placeholder="请输入密码"
        v-model="input"
        show-password
        class="input1"
      ></el-input
      ><el-input
        placeholder="再次输入登录密码"
        v-model="input"
        show-password
        class="input1"
      ></el-input>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: '2',
      input: '',
      input1: '',
    };
  },
};
</script>

<style scoped>
.login {
  margin: 100px auto;
  padding: 0 50px;
  width: 400px;
  height: 600px;
  background-color: #fff;
}
.title {
  display: flex;
  justify-content: space-evenly;
}
.active {
  color: #5a9cf8;
  border-bottom: 3px solid #5a9cf8;
}
h2 {
  padding: 10px;
}
p {
  color: #95979c;
  font-size: 14px;
}
.from {
  margin-bottom: 20px;
}
.demo-input-suffix {
  font-size: 17px;
  color: #95979c;
  margin-bottom: 20px;
}
.input1 {
  margin: 20px 0;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.phonenumber1 {
  display: flex;
}
.yz {
  display: flex;
}
.yz .btn {
  margin-left: 30px;
}
</style>