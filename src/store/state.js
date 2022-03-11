/*
状态对象
 */
export default {
    searchResult:[], //搜索结果

    //题目数组，浏览器本地存储，在开始时读取浏览器本地存储，若有，则展示；若无则为空数组
    problems:JSON.parse(localStorage.getItem('problems')) || [],
}
