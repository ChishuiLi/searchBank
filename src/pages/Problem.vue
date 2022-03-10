<template>
  <div>
    <Header :title="title"/>
    <div class="center">
      <form role="form" @submit="setPro">
        <div class="form-group">
          <label>题目</label>
          <input type="text" class="form-control" v-model="problem.text"/>
        </div>
        <div class="form-group">
          <label>选项A</label>
          <input type="text" class="form-control" v-model="problem.answer.A"/>
        </div>
        <div class="form-group">
          <label>选项B</label>
          <input type="text" class="form-control" v-model="problem.answer.B"/>
        </div>
        <div class="form-group">
          <label>选项C</label>
          <input type="text" class="form-control" v-model="problem.answer.C"/>
        </div>
        <div class="form-group">
          <label>选项D</label>
          <input type="text" class="form-control" v-model="problem.answer.D"/>
        </div>
        正确选项:<input type="text" v-model="problem.rightAnswer">
        <div class="checkbox">
          <label><input type="checkbox" />Check me out</label>
        </div>
        <button class="btn btn-default" >确定</button>
      </form>
    </div>
  </div>
</template>

<script>
import Header from "@/components/MyHeader";
import {mapActions} from 'vuex'
import {nanoid} from 'nanoid'
export default {
  name: "Problem",
  components:{
    Header
  },
  data(){
    return{
      title:'题卷',
      problem:{
        id:'', //题目编号
        text:'', //题目内容
        answer:{ //设置选项
          A:'',
          B:'',
          C:'',
          D:''
        },
        rightAnswer:'', //正确答案选项
      }
    }
  },
  methods:{
    ...mapActions(['setProblem']),
    setPro(){
      const problem = this.problem
      problem.id = nanoid()  //设置唯一的id
      this.setProblem(problem)
    }
  },
}
</script>

<style scoped>
.center{
  background-color: #e6fffc;
  width: 100%;
}
</style>
