<template>
  <div>
    <!-- <div class="title">
      <h2 class="active">手机注册</h2>
      <h2>邮箱注册</h2>
    </div> -->
    <div class="from">
      <p>选择所在地(实名认证主体所在地)<span></span></p>
      <el-radio v-model="radio" label="1">中国香港</el-radio>
      <el-radio v-model="radio" label="2">中国大陆</el-radio>
    </div>
    <div class="demo-input-suffix">
      手机号码：
      <div class="phonenumber">
        <span class="sj">+86</span>
        <el-input
          placeholder="请输入手机号"
          prefix-icon="el-icon-d-caret"
          v-model="input1"
          class="input1"
        >
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
        placeholder="请再次输入密码"
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
      input1: '',
      input: '',
    };
  },
};
</script>

<style>
p {
  color: #95979c;
  font-size: 14px;
}
.from {
  margin-bottom: 20px;
}
.demo-input-suffix {
  position: relative;
  font-size: 17px;
  color: #95979c;
  margin-bottom: 20px;
}
.input1 {
  margin: 20px 0;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.phonenumber {
  display: flex;
}
.phonenumber .el-input__inner {
  text-indent: 30px;
}
.phonenumber .el-input__icon {
  position: absolute;
  left: 30px;
}
.phonenumber > .sj {
  position: absolute;
  top: 52px;
  left: 6px;
  z-index: 999;
}
.yz {
  display: flex;
}
.yz .btn {
  margin-left: 30px;
}
</style>