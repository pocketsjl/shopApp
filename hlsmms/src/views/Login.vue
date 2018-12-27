<template>
  <div class="_box">
    <div id="loginbox">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <h2>用户名</h2>
          <hr>

          <el-form
            :model="ruleForm2"
            status-icon
            :rules="rules2"
            ref="ruleForm2"
            label-width="100px"
            class="demo-ruleForm"
          >
            <!-- 用户名 -->
            <el-form-item label="用户名" prop="username">
              <el-input v-model.number="ruleForm2.username"></el-input>
            </el-form-item>
            <!-- 密码 -->
            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
              <el-button @click="resetForm('ruleForm2')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
//暴露一个模块 ：登录组件
export default {
  data() {
    return {
      ruleForm2: {
        username: "",
        pass: ""
      },
      rules2: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
          { min: 6, max: 18, message: "长度在 6 到 18 个字符", trigger: "blur" }
        ],
        pass: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 18, message: "长度在 6 到 18 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("登录成功！");
          this.$router.push("/");
        } else {
          console.log("登录失败!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style>
#loginbox {
  width: 600px;
  height: 300px;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  position: absolute;
  margin: auto;
  padding: 0px;
  background: url(./timg.jpg);
  background-size: 100% 100%;
  z-index: 10;
}
#loginbox h2 {
  font-size: 26px;
}
._box {
  height: 100%;
  background: url(./timg.jpg);
  background-size: 100% 100%;
}
._box:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: inherit;
  filter: blur(2px);
}
</style>

