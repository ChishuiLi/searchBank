/*
vuex最核心的管理对象store
*/
import Vue from "vue";
import Vuex from 'vuex'
import actions from '@/store/actions'
import mutations from '@/store/mutations'
import state from '@/store/state'
import getter from '@/store/getter'

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getter
})