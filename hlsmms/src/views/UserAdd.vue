<template>
 <el-container id="home">
    <!-- 左侧 -->
    <LeftMenu></LeftMenu>
    <!-- 右侧  -->
    
    <el-container id="mainContent">
      <!-- 头部 -->
   <right-top></right-top>
   <!-- 中间 -->
      <el-main>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <h3>添加管理账号</h3>
            
          </div> 
            <div class="text item">
             <!-- 模板的内容 -->
                 <el-form
            :model="ruleForm2"
            status-icon
            :rules="rules2"
            ref="ruleForm2"
            label-width="100px"         
            class="demo-ruleForm"
            label-position="top"
          >
            <!-- 用户名 -->
            <el-form-item label="用户名" prop="username">
              <el-input v-model.number="ruleForm2.username"></el-input>
            </el-form-item>
            <!-- 密码 -->
            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
            </el-form-item>
             <!-- 确认密码 -->
            <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
             </el-form-item>
              <el-form-item label="添加账号" prop="usergroup">
              <el-select v-model="ruleForm2.usergroup" placeholder="请选择用户组">
                <el-option label="超级账号" value="超级账号"></el-option>
                <el-option label="普通账号" value="普通账号"></el-option>
              </el-select>
            </el-form-item>  
             <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm2')">添加</el-button>
              
            </el-form-item> 
          </el-form>
          </div>
        </el-card>
      </el-main>
      <!-- 底部 -->
     <right-button></right-button>
    </el-container>
  </el-container>
</template>
<script>
import LeftMenu from '../components/leftMenu';
import rightTop from '../components/rightTop';
import rightButton from '../components/rightButton';


export default {
//引入组件
 components:{
     //注册组件
     LeftMenu,
     rightTop,
     rightButton
 },
  data() {
    var validatepassword = (rule,value,callback)=>{
      if(value !== this.ruleForm2.pass){
        callback(new Error('两次输入密码不一致'));
      }else{
        callback();
      }
    };
      return{
      //数据对象
      ruleForm2: {
        username: "",
        pass: "",
        checkPass:"",
        usergroup:"",

      },
      rules2: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
          { min: 6, max: 18, message: "长度在 6 到 18 个字符", trigger: "blur" }
        ],
        pass: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 18, message: "长度在 6 到 18 个字符", trigger: "blur" }
        ],
        checkPass:[
          {required: true,message:"请输入确认密码",trigger:"blur"},
          { min: 6, max: 18, message: "长度在 6 到 18 个字符", trigger: "blur" }
        ],
        usergroup:[
          {required:true,message:"change",message:"请输入用户组"}
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          //alert（表单验证成功）
          //发起ajax请求后去后端数据添加数据用户
          //1获取用户数据
          console.log(this.ruleForm2);
          //使用axios发送请求后到后端api：
          this.axios.post("http://127.0.0.1:9090/user/useradd",
          this.qs.stringify(this.ruleForm2)//使用qs参数处理post发送
          ).then(result=>{
            console.log("服务器返回成功的结果",result); 
            if(result.data.isOk){
              //添加成功
              this.$message({
                message: result.data.msg,
              type:'success' 
              });
              setTimeout(()=>{
                this.$router.push("/userlist");
              },1000);
             

            }else{
              //添加失败
              this.$message.error(result.data.msg);

            }
          }).catch(err=>{
            console.log("服务器返回错误的信息",err);
            
          })

          // 根据返回结果处理业务逻辑
          

       
        } else {
          console.log("登录失败!!");
          return false;
        }
      });
    },
    //重置表单的方法
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
    
};
</script>

<style>
 .tianJia{
  font-size: 12px;
  text-align: center
} 
.tianJia span{
  margin: 0 10px;
}
.el-card__header h3{
  width: 300px;
 font-size: 24px;
}
</style>


