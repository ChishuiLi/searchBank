/*
通过mutations间接更新state的多个方法对象
*/
import {reqSearch} from '../api/index'
import {SEARCH_USERS_RESULT,SET_PROBLEM} from './mutation-types'

export default {
    async getUsers({commit},keyword){
        //异步发送ajax请求
        const result = await reqSearch(keyword)
        if(result.total_count){
            const users = result.items
            commit(SEARCH_USERS_RESULT,{users})
        }
    },

    setProblem({commit},item){
        commit(SET_PROBLEM,{item})
    }
}
