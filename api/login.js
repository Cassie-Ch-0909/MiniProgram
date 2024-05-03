// 导入封装的网络请求模块实例
import http from '../utils/http'

/* 
    获取短信验证码
*/
export const getMessageCodeAPI = () => {
  return http.get('/verifyCode/getMsgCode')
}

/* 
    用户登录
*/
export const loginAPI = (data) => {
  return http.post('/user/login', data)
}