// 创建WxRequest类
// 通过类的方式来进行封装，会让代码更加具有复用性
// 也可以方便添加新的属性和方法
class WxRequest {

  // 定义实例属性，用来设置默认请求参数
  defaults = {
    // 请求及地址
    baseURL: '',
    // 接口的请求路径
    url: '',
    // 请求参数
    data: null,
    // 默认的请求方法
    method: 'GET',
    // 请求头
    header: {
      'Content-type': 'application/json' // 设置数据的交互格式
    },
    // 默认的超时时长，小程序默认的超时时长是1分钟
    timeout: 60000
  }

  // 用于创建和初始化类的属性以及方法
  // 在实例化时传入的参数，会被constructor形参进行接收
  constructor(params = {}) {
    // 通过Object.assign方法合并请求参数
    // 注意：需要传入的参数，覆盖默认的参数，因此传入的参数要放到最后
    this.defaults = Object.assign({}, this.defaults, params)
  }
  // request实例方法接受一个对象类型的参数
  // 属性值和wx.request方法调用时传递的参数保持一致
  request(options) {

    // 注意：需要先和并完成的请求地址(baseURL+url)
    options.url = this.defaults.baseURL + options.url
    // 合并请求参数
    options = {...this.defaults,...options}

    // 需要使用promise封装wx.request，处理异步请求
    // resolve() 和 reject() 是 Promise 对象中的两个重要方法，它们用于改变 Promise 对象的状态并传递相应的结果或错误信息。
    /* 
        resolve() 的作用是将 Promise 对象的状态从“未完成”（pending）变为“成功”（fulfilled）。
        通常，你会将异步操作的结果作为参数传递给 resolve()，这样，在 Promise 对象的 .then() 方法中就可以访问到这个结果。
        reject() 的作用是将 Promise 对象的状态从“未完成”（pending）变为“失败”（rejected）。
        与 resolve() 类似，你通常会将异步操作报出的错误作为参数传递给 reject()，这样，在 Promise 对象的 .catch() 方法中就可以捕获并处理这个错误。
    */
    return new Promise((resolve, reject) => {
      wx.request({
        ...options,
        // 当接口调用成功时会触发success函数
        success: (res) => {
          resolve(res)
        },
        // 当接口调用失败时会触发fail函数
        fail: (err) => {
          reject(err)
        }
      })
    })
  }
}

// -----------------以下是实例化的代码-----------------
// 目前写到同一个文件中们是为了方便进行测试，以后会提取成多个文件
// 对WxRequest进行实例化
const instance = new WxRequest({
  baseURL: 'https://gmall-prod.atguigu.cn/mall-api',
  timeout: 15000
})
// 将WxRequest实例进行暴露出去，方便在其他文件进行使用
export default instance