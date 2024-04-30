// 创建WxRequest类
// 通过类的方式来进行封装，会让代码更加具有复用性
// 也可以方便添加新的属性和方法
class WxRequest {

  // 定义实例属性，用来设置默认请求参数
  defaults = {
    // 请求基地址
    baseURL: '',
    // 请求路径
    url: '',
    // 请求参数
    data: null,
    // 默认的请求方法
    method: 'GET',
    // 请求头
    header: {
      // 设置数据的交互格式
      'Content-type': 'application/json'
    },
    // 默认的超时时长，小程序默认的超时时长是1分钟
    timeout: 60000
  }

  // 用于创建和初始化类的属性和方法
  // 在实例化时传入的参数，会被constructor形参进行接收
  constructor(params = {}) {
    // 从右往左 params覆盖this.defaults，再将this.defaults和{}进行合并
    // 通过Object.assign方法合并请求参数 注意：需要传入的参数，覆盖默认的参数，因此传入的参数需要放到最后
    this.defaults = Object.assign({}, this.defaults, params)
  }
  // request 实例方法接收一个对象类型的参数
  // 属性值和wx.request方法调用时传递的参数保持一致
  request(options) {

    // 注意：需要先合并完成的请求地址 baseURL+url
    options.url = this.defaults.baseURL + options.url

    // 合并请求参数
    options = { ...this.defaults, ...options }

    console.log(options)

    // 需要使用Promise封装wx.request处理异步请求
    return new Promise((resolve, reject) => {
      wx.request({
        // ...options 是 ES6 的扩展运算符，它将 options 对象的所有属性展开并传递给 wx.request
        ...options,
        // 当接口调用成功时会触发success回调函数, 使用 resolve 返回成功的结果
        success: (res) => {
          resolve(res)
        },
        // 当接口调用失败时会触发fail回调函数, 使用 reject 返回错误信息。
        fail: (err) => {
          reject(err)
        }
      })
    })
  }

  /* 
      封装GET实例方法
  */
  get(url, data = {}, config = {}) {
    // 需要调用request请求方法发送请求，只需要组织好参数，传递给request请求方法即可
    //  当调用get方法时，需要将request方法的返回值return出去
    return this.request(Object.assign({ url, data, method: 'GET' }, config))
  }

  /* 
      封装POST实例方法
  */
  post(url, data = {}, config = {}) {
    return this.request(Object.assign({ url, data, method: 'POST' }, config))
  }

  /* 
      封装DELETE实例方法
  */
  delete(url, data = {}, config = {}) {
    return this.request(Object.assign({ url, data, method: 'DELETE' }, config))
  }

  /* 
    封装PUT实例方法
  */
  put(url, data = {}, config = {}) {
    return this.request(Object.assign({ url, data, method: 'PUT' }, config))
  }
}

// 对WxRequest进行实例化
// 现在会执行 constructor 中的代码
const instance = new WxRequest({
  baseURL: 'https://gmall-prod.atguigu.cn/mall-api',
  timeout: 15000
})
// 将WxRequest实例暴露出去，方便在其他文件中进行使用
export default instance