// pages/ticketHolder/ticketHolder.js
import instance from '../../utils/http'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  async handler() {
    // 第一种调用方法，.then的方式进行调用
    // instance.request({
    //   url: 'https://gmall-prod.atguigu.cn/mall-api/index/findBanner',
    //   method: "GET"
    // }).then((res) => {
    //   console.log(res)
    // })

    // 第二种调用方式，async和await的方式进行调用
    // const res = await instance.request({
    //   url: '/index/findBanner',
    //   method: "GET"
    // })
    // console.log(res)

    // const res = await instance.get('/cart/getCartList')
    // console.log(res)
    // instance.get('/cart/getCartList').then(()=>{
    //   instance.get('/cart/getCartList').then(()=>{})
    // })

    // const res = await instance.get('/index/findBanner', null, {
    //   isLoading: true
    // })
    // console.log(res)

    const res = await reqSwiperData()
    console.log(res)
  },

  // handler1() {
  //   wx.request({
  //     url: 'https://gmall-prod.atguigu.cn/mall-api/index/findBanner',
  //     method: 'GET',
  //     success: (res) => {
  //       // 在使用wx.request发送请求时，只要成功接收到服务器返回的结果
  //       // 无论statusCode状态码是多少，都会执行success
  //       // 开发者需要根据业务逻辑，自己来进行相关的判断处理
  //       console.log(res)
  //     },
  //     // 一般在网络出现异常时(网络超时)，就会执行fail
  //     fail: (err) => {
  //       console.log(err)
  //     }
  //   })
  // },

  async allHandler() {
    // 演示通过async和await方式同时发起多个请求
    // async和await能够控制异步任务以同步的流程来执行
    // await instance.get('/index/findBanner')
    // await instance.get('/index/findCategory1')
    // await instance.get('/index/findBanner')
    // await instance.get('/index/findCategory1')

    // 演示通过Promise.all同时发起多个请求
    // Promise.all 能够将多个请求同时进行发送
    // await Promise.all([instance.get('/index/findBanner'),instance.get('/index/findCategory1'),instance.get('/index/findBanner'),instance.get('/index/findCategory1')])
    const res = await instance.all(instance.get('/index/findBanner'), instance.get('/index/findCategory1'), instance.get('/index/findBanner'), instance.get('/index/findCategory1'))
    console.log(res)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})