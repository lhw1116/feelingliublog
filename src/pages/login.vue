<template>
  <div class="login-page">
    <div class="contain">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <div class="login-botton">
            <el-button type="primary" @click="submitForm('ruleForm')" round>登录</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>


<script>
export default {
  name: "login",
  data() {
    return {
      ruleForm: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
<style lang="scss">
.login-page {
  background: rgb(0, 0, 0);
  .contain {
    margin-top: 300px;
    width: 400px;
    padding-top: 40px;
    padding-bottom: 10px;
    margin-left: 700px;
    margin-right: 700px;
    .login-botton {
      margin-left: 100px;
    }
  }
}
</style>