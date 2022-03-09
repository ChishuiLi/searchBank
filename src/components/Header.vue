<template>
  <!--
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>
  -->
  <div class="header">
    <h3 style="text-align: center">{{ title }}</h3>
  </div>
</template>

<script>
export default {
  name: "Header",
  props:{
    title:String
  }
}
</script>

<style scoped >
.header{
  background-color: skyblue;
  flex :auto;
  height :50px;
  width :90%
}
</style>
