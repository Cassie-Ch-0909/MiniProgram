// pages/ticketHolder/ticketHolder.js
import instance from '../../utils/request'
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

    const res = await instance.get('/index/findBanner', { test: 111 }, { timeout: 20000 })
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