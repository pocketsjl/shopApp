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
            <h3>系统信息</h3>
          </div> 
            <div class="text item">
             <!-- 模板的内容 -->
             <el-form ref="form" :model="form" label-width="80px" label-position="top">
               <el-form-item label="所属分类">
                <el-select v-model="form.region" placeholder="----顶级分类----">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
                 
              </el-form-item>
              <el-form :model="formLabelAlign" :rules="rules2" prop="fenlei">
               <el-form-item label="分类名称">
                    <el-input v-model="formLabelAlign.name"></el-input>
                  </el-form-item>
                  </el-form>
              <el-form :model="formLabelAlign" :rules="rules2" prop="fenlei">
               <el-form-item label="状态：">
                   <el-radio v-model="radio" label="1">启用</el-radio>
                    <el-radio v-model="radio" label="2">禁用</el-radio>
                  
                  </el-form-item>
                   <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm2')">添加</el-button>
              
            </el-form-item> 
                  </el-form>
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
    data(){
   return {
   form:{
      region: '',
     
        
   },
    radio:"1",
   formLabelAlign: {
          name: '',        
   },
   rules2:{
      fenlei:[
  { required: true, message: "此处不能为空", trigger: "blur" },
],
      
   },
   
 }
 
 },
  resetForm(formName) {
      this.$refs[formName].resetFields();
    }
}
</script>

<style>
.el-input--suffix{
  width: 70%;
}

</style>


