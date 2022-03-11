/*
直接更新state的各个方法对象
*/
import {SEARCH_USERS_RESULT,SET_PROBLEM,REMOVE_ONE} from './mutation-types'

export default {
    [SEARCH_USERS_RESULT](state,{users}){
        state.searchResult = users
    },

    [SET_PROBLEM](state,{item}){
        state.problems.push(item)
    },

    [REMOVE_ONE](state,id){
        console.log('触发了mutations')
        //利用过滤器，过滤掉与传入id相等的pro
        state.problems = state.problems.filter((pro)=>{
            console.log('触发了过滤')
            return pro.id !== id
        })
        /*
        let arr = []
        this.state.problems.forEach(function (item){

            if(item.id !== id){
                arr.push(item)
            }
        })
        state.problems = arr*/
    }
}
