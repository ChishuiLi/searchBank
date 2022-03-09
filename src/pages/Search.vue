<template>
  <div>
      <el-container >
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

        <el-main>
          <input type="text" class="input" placeholder="输入查找用户名" v-model="keyword">
          <el-button type="primary" icon="el-icon-search" @click="send">搜索</el-button>
          <div class="card" v-for="(user,index) in searchResult" :key="index">
            <a :href="user.html_url" target="_blank">
              <img :src="user.avatar_url" style='width: 100px'/>
            </a>
            <p class="card-text">{{ user.login }}</p>
          </div>
        </el-main>
      </el-container>
  </div>

</template>

<script>
import {mapActions,mapState} from 'vuex'
export default {
  name: "Main",
  data() {
    return {
      keyword:''
    }
  },
  methods:{
    ...mapActions(['getUsers']),
    send(){
      this.getUsers(this.keyword)
    }
  },
  computed:{
    ...mapState(['searchResult'])
  }
}
</script>

<style scoped>
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}

.input {
  height: 40px;
  width: 80%;
  flex: auto;
}

.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>