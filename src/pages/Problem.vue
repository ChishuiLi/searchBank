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
import {mapActions,mapState} from 'vuex'
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
      let pro = {
        id : nanoid(),
        text : this.problem.text,
        answer: {
          A:this.problem.answer.A,
          B:this.problem.answer.B,
          C:this.problem.answer.C,
          D:this.problem.answer.D,
        },
        rightAnswer: this.problem.rightAnswer
      }
      this.setProblem(pro)
      /*const problem = this.problem
      problem.id = nanoid()  //设置唯一的id
      this.setProblem(problem)*/
    }
  },
  computed:{
    ...mapState(['problems'])
  },
  watch:{
    problems:{
      deep:true,  //深度监视，检测problems里的值是否变化
      handler(value){
        localStorage.setItem('problems',JSON.stringify(value))
      }
    }
  }
}
</script>

<style scoped>
.center{
  background-color: #e6fffc;
  width: 100%;
}
</style>
