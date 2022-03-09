/*
直接更新state的各个方法对象
*/
import {SEARCH_USERS_RESULT,SET_PROBLEM} from './mutation-types'

export default {
    [SEARCH_USERS_RESULT](state,{users}){
        state.searchResult = users
    },

    [SET_PROBLEM](state,{item}){
        state.problems.push(item)
    }
}
