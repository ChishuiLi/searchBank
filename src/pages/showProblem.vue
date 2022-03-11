<template>
  <div>
    <Header :title="title"/>
    <ul class="todo-main">
      <problemItem v-for="item in problems" :key="item.id" :item="item"/>
    </ul>
  </div>


</template>

<script>
import Header from "@/components/MyHeader";
import {mapState} from 'vuex'
import problemItem from "@/components/problemItem";
export default {
  name: "showProblem",
  data(){
    return{
      title:'题目展示'
    }
  },
  components:{
    Header,
    problemItem
  },
  computed:{
    ...mapState(['problems'])
  }
}
</script>

<style scoped>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
