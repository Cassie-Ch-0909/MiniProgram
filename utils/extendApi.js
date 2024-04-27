/* 
    封装toast方法提示用户信息
    在使用toast方法时，可以传入参数，也可以不传入参数
    如果需要传入参数，要传入对象作为参数
    const toast = (options = {}) => {}

    如果用户传入了对象作为参数
    在形参位置通过解构的方式获取用户传入的参数，同时设置默认值
*/
const toast =
  ({
    title = '数据加载中...',
    icon = 'none',
    duration = 2000,
    mask = true
  } = {}) => {
    wx.showToast({
      title,
      icon,
      duration,
      mask
    })
  }

/* 
    封装一个模态对话框model函数
    在调用model方法时，可以传递参数，也可以不传递参数
    如果不传递参数，默认值就是空对象
    如果传递参数，参数需要是一个对象，对象中的属性需要和wx.showModal参数保持一致
*/
const modal = (options = {}) => {
  // 在方法内部需要通过 Promise 返回用户的操作
  // 如果用户点击了确定，需要通过resolve返回true
  // 如果用户点击了取消，需要通过resolve返回false
  return new Promise((resolve) => {
    // 默认的参数
    const defaultOpt = {
      title: "提示",
      content: "您去也定执行该操作吗",
      confirmColor: '#FF3474'
    }
    // 通过Object.assign 方法将参数进行合并
    // 需要使用传入的参数覆盖默认的参数
    // 为了不影响默认的参数，需要将合并以后的参数赋值给一个空对象
    const opts = Object.assign({}, defaultOpt, options)
    wx.showModal({
      // 将合并以后的参数通过展开运算符赋值给wx.showModal对象
      ...opts,
      complete({ confirm, cancel }) {
        confirm && resolve(true)
        cancel && resolve(false)
      }
    })
  })
}


/* 
    如果有很多.js文件，都需要调用toast方法
    每次使用都需要导入toast，然后进行调用，太麻烦
    可以将toast方法挂载到wx全局对象身上
    如果想挂载到wx全局对象上这种写法生效，需要让当前文件执行一次
*/
wx.toast = toast
wx.modal = modal

/* 
    如果其他.js文件，需要使用toast，需要先导入toast,然后进行调用才可以
*/
export { toast, modal }