
<template>
  <el-container id="home">
    <!-- 左侧 -->
    <LeftMenu></LeftMenu>
    <!-- 右侧  -->
    
    <el-container id="mainContent">
      <!-- 头部 -->
   <right-top></right-top>
      <el-main>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <h3>系统信息</h3>
          </div>
          <div>
            <el-alert title="商品总数：5。  已经销售的总金额：890.00。库存商品总价格：1325.82" type="info" show-icon></el-alert>
            <el-alert title="导入数据" type="success" show-icon></el-alert>
          </div>
          <el-row :gutter="40">
            <!-- 左边 -->
            <el-col :span="12">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>销售排行</span>
                </div>
                <el-table :data="tableData" stripe style="width: 100%">
                  <el-table-column prop="goodsname" label="商品名称"></el-table-column>
                  <el-table-column prop="salenum" label="销量"></el-table-column>
                </el-table>
              </el-card>
            </el-col>
            <!-- 右边 -->
            <el-col :span="12">
                <el-card class="box-card">
                  <div slot="header" class="clearfix">
                    <span>缺货的商品</span>
                  </div>
                  <el-table :data="tableData2" stripe style="width: 100%">
                  <el-table-column prop="goodsname" label="缺货商品"></el-table-column>
                  <el-table-column prop="salenum" label="库存"></el-table-column>
                  <el-table-column prop="salenum" label="操作"></el-table-column>
                </el-table>
                </el-card>
              </el-col>
          
          </el-row>
        </el-card>
        
      </el-main>
      <!-- 底部 -->
     <right-button></right-button>
    </el-container>
  </el-container>
</template>

<script>
//引入导航组件
import LeftMenu from '../components/leftMenu';
import rightTop from '../components/rightTop.vue';
import rightButton from '../components/rightButton.vue';
export default {
  components: {},
  data(){
    return{
        tableData: [
    { goodsname: "海飞丝去屑洗发水", salenum: "8" },
    { goodsname: "茅台酒", salenum: "8" },
    {goodsname: "龙凤呈祥", salenum: "5" },
    { goodsname: "龙凤呈祥2", salenum: "2" }
   
  ],
      tableData2: [
    { goodsname: "我的优乐美", salenum: "8"},
  
   
  ]
    };
  },
   components: {
    //注册组件
    LeftMenu,
    rightTop,
    rightButton 

   
  }


 
};
</script>

<style>
</style>
