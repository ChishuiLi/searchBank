/*
配置router相关
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Search from "@/pages/Search";

//声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:'/search',
            component:Search
        }
    ]
})