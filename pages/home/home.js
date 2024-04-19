// pages/home/home.js
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navBarHeight: app.globalData.navBarHeight,//导航栏高度
    menuBotton: app.globalData.menuBotton,//导航栏距离顶部距离
    menuHeight: app.globalData.menuHeight, //导航栏高度
    // 抢票播报站
    broadcasts: [
      { watchCount: "14万", activityName: "张学友重庆" },
      { watchCount: "22.9万", activityName: "梦想未来•闪" },
      { watchCount: "9.4万", activityName: "全国热抢演出" },
      { watchCount: "6.3万", activityName: "潘玮柏上海开" },
      { watchCount: "今天17:17", activityName: "薛之谦太原开" },
    ],
    // 今日秒杀数组
    imageList: [
      {
        img:"https://gw.alicdn.com/bao/uploaded/i3/2251059038/O1CN01tcNq1I2GdSaXaCVsI_!!0-item_pic.jpg_q60.jpg",
        type:"演唱会"
      },
      {
        img:"https://gw.alicdn.com/bao/uploaded/https:img.alicd…/O1CN012K2mOx2GdSaEwon0z_!!2251059038.jpg_q60.jpg",
        type:"音乐节"
      },
      {
        img:"https://gw.alicdn.com/bao/uploaded/i3/2251059038/O1CN01fNGpi12GdSaZkAQPd_!!0-item_pic.jpg_q60.jpg",
        type:"音乐节"
      },
    ],
    // 扁平轮播图数组
    swiperList:[
      "https://gw.alicdn.com/imgextra/i4/O1CN01fqjSXd1GaFbTrTk4A_!!6000000000638-0-tps-1404-320.jpg_Q30.jpg",
      "https://gw.alicdn.com/imgextra/i4/O1CN01YdrGu21ehcn37DlV3_!!6000000003903-0-tps-1404-320.jpg_Q30.jpg",
      "https://gw.alicdn.com/imgextra/i4/O1CN01fqjSXd1GaFbTrTk4A_!!6000000000638-0-tps-1404-320.jpg_Q30.jpg",
      "https://gw.alicdn.com/imgextra/i1/O1CN0105shrH1t9161vfSNn_!!6000000005858-0-tps-1404-320.jpg_Q30.jpg",
      "https://gw.alicdn.com/imgextra/i1/O1CN01MjBW8c1E4WxjP1bS2_!!6000000000298-0-tps-1404-320.jpg_Q30.jpg",
      "https://gw.alicdn.com/imgextra/i4/O1CN01LyqLy61FocRfBnh3I_!!6000000000534-0-tps-1404-320.jpg_Q30.jpg",
    ]
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