
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
            <h3>账户管理</h3>
          </div> 
            <div class="text item">
             <!-- 模板的内容 -->
              <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="用户名称"
      width="180">
      <template slot-scope="scope">
        

        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="用户组"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>管理组: {{ scope.row.name }}</p>
          <p>添加时间: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="管理">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">
          <i class="el-icon-edit"></i>
          编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">
          <i class="el-icon-delete"></i>
          删除</el-button>
      </template>
    </el-table-column>
  </el-table>
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
        tableData: [{
          date: 'admin',
          name: '超级管理员',
          address: '2018/12/29'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
   
  }
    
};

    
  
</script>

<style>

</style>


