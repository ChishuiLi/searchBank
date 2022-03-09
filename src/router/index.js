/*
配置router相关
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Search from "@/pages/Search";
import Problem from "@/pages/Problem";
import showProblem from "@/pages/showProblem";

//声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:'/search',
            component:Search
        },
        {
            path:'/problem',
            component:Problem
        },
        {
            path:'/showProblem',
            component:showProblem
        }
    ]
})
