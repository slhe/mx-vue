import Mock from 'mockjs'
import nodeAPI from './node'
import menuAPI from './menu'
import loginAPI from './login'
// 登录相关
//Mock.mock(/\/console\/node/, 'get', nodeAPI.node)
Mock.mock(/\/console\/admin\/userInfo/, 'post', loginAPI.getUserInfo)
Mock.mock(/\/console\/admin\/role/, 'get', menuAPI.menuList)
Mock.mock(/\/console\/admin\/login/, 'post', loginAPI.login)
export default Mock
