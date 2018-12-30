
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
           
            <el-table :data="tableData" style="width: 100%">
               <!-- 编号 -->
              <el-table-column label="编号" width="180">
                <template slot-scope="scope">
                  {{ scope.row.userid }}
                </template>
              </el-table-column>

              <!-- 账号 -->
              <el-table-column label="账号" width="180">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top">
                    {{ scope.username }}
                  </el-popover>
                </template>
              </el-table-column>
               <!-- 日期 -->
              <el-table-column label="添加日期" width="180">
                <template slot-scope="scope">
                  <i class="el-icon-time"></i>
                  <span style="margin-left: 10px">{{ scope.row.addDate | foramtData }}</span>
                </template>
              </el-table-column>
              <!-- 用户组 -->
              <el-table-column label="用户组" width="180">
                <template slot-scope="scope">
                    {{ scope.row.usergroup }}
                </template>
              </el-table-column>
              <el-table-column label="管理">
                <template slot-scope="scope">
                  <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">
                    <i class="el-icon-edit"></i>
                    编辑
                  </el-button>
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)"
                  >
                    <i class="el-icon-delete"></i>
                    删除
                  </el-button>
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
import LeftMenu from "../components/leftMenu";
import rightTop from "../components/rightTop";
import rightButton from "../components/rightButton";

// 引入moentjs
import moment from 'moment';


export default {
  //引入组件
  components: {
    //注册组件
    LeftMenu,
    rightTop,
    rightButton
  },
  data() {
    return {
      tableData: []
    };
  },
     methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  },
  //组件实例化之后执行钩子
  created(){
    this.axios.get("http://127.0.0.1:9090/user/getusers").then(result=>{
     console.log("后端返回的数据",result.data);
     this.tableData=result.data;//把返回数据赋值表格数据属性
     
  }).catch(err=>{
    console.log(err.message);
  });
  
},
filters:{
  foramData(oldDate){
    return moment(oldData).format("YYYY年MM月DD日");
  },
},
}
</script>

<style>
</style>


