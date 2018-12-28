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
            <h3>添加用户</h3>
          </div> 
            <div class="text item">
             <!-- 模板的内容 -->
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
 }
    
}
</script>

<style>

</style>


