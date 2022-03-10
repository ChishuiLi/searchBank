<template>
  <li>
    <label>
      <span>{{item.text}}</span><br>
      <input type="checkbox"/>A、{{item.answer.A}}
      <input type="checkbox"/>B、{{item.answer.B}}
      <input type="checkbox"/>C、{{item.answer.C}}
      <input type="checkbox"/>D、{{item.answer.D}}
    </label>
    <button class="btn btn-danger" @click="removeOne(item.id)">删除</button>
  </li>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: "problemItem",
  props:['item'],
  methods:{
    ...mapActions(['removeOne']),

    //删除一个题目
    removeOne(id){
      //if(confirm('确定删除该题目？')){
      //  this.removeOne(id)
      //}
      this.removeOne(id)

    }
  }
}
</script>

<style scoped>
li {
  list-style: none;
  height: 80px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover button{
  display: block;
}

li:hover{
  background-color: #dddddd;
}

input{
  margin-left: 30px;
}

</style>