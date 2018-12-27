<template>
<el-container id="home">
  <!-- 左侧 -->
  <el-aside>
       <div class="herder">
         <h1>华联超市管理系统</h1>
         <span>您好！amdin</span><br>
         <span>管理首页|退出系统</span>
       </div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :unique-opened="true"
      >
        <!-- 分类管理导航2 -->
      <el-submenu index="1">
        <template slot="title">
        
          <span>分类管理</span>
        </template>
        <el-menu-item index="1-1">分类管理</el-menu-item>
          <el-menu-item index="1-2">添加分类</el-menu-item>
      
      </el-submenu>
      <!-- 商品管理导航2 -->
         <el-submenu index="2">
        <template slot="title">
         
          <span>商品管理</span>
        </template>
        <el-menu-item index="1-1">商品管理</el-menu-item>
          <el-menu-item index="1-2">添加商品</el-menu-item>
      
      </el-submenu>
      <!-- 进货管理导航3 -->
         <el-submenu index="3">
        <template slot="title">
        
          <span>进货管理</span>
        </template>
        <el-menu-item index="1-1">库存管理</el-menu-item>
          <el-menu-item index="1-2">添加库存</el-menu-item>
      
      </el-submenu>
      <!-- 出货管理导航4 -->
         <el-submenu index="4">
        <template slot="title">
         
          <span>出货管理</span>
        </template>
        <el-menu-item index="1-1">销售列表</el-menu-item>
          <el-menu-item index="1-2">商品出库</el-menu-item>
             <el-menu-item index="1-1">商品退货</el-menu-item>
          
      
      
      </el-submenu>
        <!-- 统计管理导航5 -->
         <el-submenu index="5">
        <template slot="title">
        
          <span>统计管理</span>
        </template>
        <el-menu-item index="1-1">销售统计</el-menu-item>
          <el-menu-item index="1-2">进货统计</el-menu-item>
      
      </el-submenu>
  <!-- 账号管理导航6 -->
         <el-submenu index="6">
        <template slot="title">
         
          <span>账号管理</span>
        </template>
        <el-menu-item index="1-1">账号管理</el-menu-item>
          <el-menu-item index="1-2">添加账号</el-menu-item>
          <el-menu-item index="1-2">密码修改</el-menu-item>
      
      </el-submenu>
       <!-- 会员管理导航6 -->
         <el-submenu index="7">
        <template slot="title">
         
          <span>会员管理</span>
        </template>
        <el-menu-item index="1-1">账号管理</el-menu-item>
          <el-menu-item index="1-2">添加账号</el-menu-item>
      
      </el-submenu>
       <!-- 系统管理导航6 -->
         <el-submenu index="8">
        <template slot="title">
         
          <span>系统管理</span>
        </template>
        <el-menu-item index="1-1">系统信息</el-menu-item>
          <el-menu-item index="1-2">系统配置</el-menu-item>
          <el-menu-item index="1-1">权限管理</el-menu-item>
          <el-menu-item index="1-2">添加管理组</el-menu-item>
      
      </el-submenu>


      
     
    </el-menu>
    </el-aside>
   <!-- 右侧  -->
  <el-container>
    <!-- 头部 -->
    <el-header>
      <h2>欢迎您admin</h2>
      <span>查看详细信息</span>
    </el-header>
    <el-main>
     <p>商品总数：5。  已经销售的总金额：890.00。库存商品总价格：1325.82</p>
     <p>导入数据</p>
     <div>
       <div>
       <h3>销售排行</h3>
       <p>商品名称<span>销量</span></p>
       <p>海飞丝去屑洗发水<span>8</span></p>
       <p>茅台酒<span>6</span></p>
       <p>龙凤呈祥<span>5</span></p>
       </div>
       <div>
         <h3>缺货的商品</h3>
         <p>商品名称<span>库存</span><span>操作</span></p>
         <p>我的优乐美<span>0</span><span>入库</span></p>
       </div>
     </div>
     




    </el-main>
    <el-footer>Foote
      Copynight 2018 华联超市管理系统
    </el-footer>
  </el-container>
</el-container>

</template>

<script>


export default {

  components: {
   
  },
  // 菜单展开和收起
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
 
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    width: 240px;

  }
  .el-submenu{
    width: 240px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    *color: #333;
    text-align: center;
    line-height: 160px;
    
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  .herder{
    height: 200px;
    width: 240px;
  }


</style>
