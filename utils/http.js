import WxRequest from './request'
import { getStorage } from './storage'
// 对WxRequest进行实例化
// 现在会执行 constructor 中的代码
const instance = new WxRequest({
  baseURL: 'https://gmall-prod.atguigu.cn/mall-api',
  timeout: 15000
})

// 配置请求拦截器
instance.interceptors.request = (config) => {
  // 在请求发送之前做点什么......

  // 在发送请求之前,需要先判断本地是否存在访问令牌 token
  const token = getStorage('token')
  // 如果存在token,就需要在请求头中添加token字段
  if (token) {
    // 这里的['token']是一个属性访问器的语法，它允许你使用字符串作为键（key）来访问或设置对象的属性。
    config.header['token'] = token
  }
  return config
}

// 配置响应拦截器
instance.interceptors.response = (response) => {
  // 从response中解构isSuccess
  const { isSuccess, data } = response
  // 如果isSuccess为false,说明执行了fail回调函数
  // 这时候就说明网络异常,需要给用户提示网络异常
  if (!isSuccess) {
    wx.showToast({
      title: '网络异常请重试',
      icon: 'error'
    })
    return response
  }
  // 对服务器响应数据做点什么......
  // console.log(response)
  // 如果网络请求执行成功到这里,那么我们直接把data进行返回即可
  // return response
  return data
}

// 将WxRequest实例暴露出去，方便在其他文件中进行使用
export default instance