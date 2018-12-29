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
   
                <el-select v-model="form.region" placeholder="----选择分类----">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                 </el-select>
                <el-form-item
    v-for="(domain, index) in dynamicValidateForm.domains"
    :label="'关键字' + index"
    :key="domain.key"
    :prop="'domains.' + index + '.value'"
    :rules="{
      required: true, message: '域名不能为空', trigger: 'blur'
    }"
  >
    <el-input v-model="domain.value"></el-input><el-button @click.prevent="removeDomain(domain)">删除</el-button>
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
 data(){
   return{
     form:{
   region:'',
       dynamicValidateForm: {
          domains: [{
            value: ''
          }],
         
        }
    
        
   },
   }
 }
    
}
</script>

<style>

</style>


