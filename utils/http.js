import WxRequest from './request'
// 对WxRequest进行实例化
// 现在会执行 constructor 中的代码
const instance = new WxRequest({
  baseURL: 'https://gmall-prod.atguigu.cn/mall-api',
  timeout: 15000
})

// 配置请求拦截器
instance.interceptors.request = (config) => {
  // 在请求发送之前做点什么......
  return config
}

// 配置响应拦截器
instance.interceptors.response = (response) => {
  // 从response中解构isSuccess
  const { isSuccess,data } = response
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