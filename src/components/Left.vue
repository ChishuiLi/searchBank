<template>
  <el-container style="border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '3']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-search"></i>搜索</template>

          <el-submenu index="1-1">
            <template slot="title">GitHub</template>
            <router-link to="/search">
              <el-menu-item index="1-1-1">用户搜索</el-menu-item>
            </router-link>
            <el-menu-item index="1-1-2">其他搜索</el-menu-item>
          </el-submenu>

          <el-submenu index="1-2">
            <template slot="title">Music</template>
            <el-menu-item index="1-2-1">1-2-1搜索</el-menu-item>
            <el-menu-item index="1-2-2">1-2-2搜索</el-menu-item>
          </el-submenu>
          <el-submenu index="1-3">
            <template slot="title">BaiDu</template>
            <el-menu-item index="1-3-1">1-3-1搜索</el-menu-item>
            <el-menu-item index="1-3-2">1-3-2搜索</el-menu-item>
          </el-submenu>
        </el-submenu>

      </el-menu>
      <el-menu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-search"></i>题</template>

          <el-submenu index="2-1">
            <template slot="title">设置题目</template>
            <router-link to="/problem">
              <el-menu-item index="2-1-1">设置题目</el-menu-item>
            </router-link>
            <router-link to="/showProblem">
              <el-menu-item index="2-1-2">展示题目</el-menu-item>
            </router-link>
          </el-submenu>

        </el-submenu>
      </el-menu>

    </el-aside>
  </el-container>
</template>

<script>
export default {
  name: "Left"
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
