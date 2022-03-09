/*
接口请求函数
 */
import ajax from './ajax'

//获取搜索结果
export const reqSearch = (keyword) => ajax('https://api.github.com/search/users?q='+ keyword)