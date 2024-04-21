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
        img: "https://gw.alicdn.com/bao/uploaded/i3/2251059038/O1CN01tcNq1I2GdSaXaCVsI_!!0-item_pic.jpg_q60.jpg",
        type: "演唱会"
      },
      {
        img: "https://gw.alicdn.com/bao/uploaded/https:img.alicd…/O1CN012K2mOx2GdSaEwon0z_!!2251059038.jpg_q60.jpg",
        type: "音乐节"
      },
      {
        img: "https://gw.alicdn.com/bao/uploaded/i3/2251059038/O1CN01fNGpi12GdSaZkAQPd_!!0-item_pic.jpg_q60.jpg",
        type: "音乐节"
      },
    ],
    // 扁平轮播图数组
    swiperList: [
      "https://gw.alicdn.com/imgextra/i4/O1CN01fqjSXd1GaFbTrTk4A_!!6000000000638-0-tps-1404-320.jpg_Q30.jpg",
      "https://gw.alicdn.com/imgextra/i4/O1CN01YdrGu21ehcn37DlV3_!!6000000003903-0-tps-1404-320.jpg_Q30.jpg",
      "https://gw.alicdn.com/imgextra/i4/O1CN01fqjSXd1GaFbTrTk4A_!!6000000000638-0-tps-1404-320.jpg_Q30.jpg",
      "https://gw.alicdn.com/imgextra/i1/O1CN0105shrH1t9161vfSNn_!!6000000005858-0-tps-1404-320.jpg_Q30.jpg",
      "https://gw.alicdn.com/imgextra/i1/O1CN01MjBW8c1E4WxjP1bS2_!!6000000000298-0-tps-1404-320.jpg_Q30.jpg",
      "https://gw.alicdn.com/imgextra/i4/O1CN01LyqLy61FocRfBnh3I_!!6000000000534-0-tps-1404-320.jpg_Q30.jpg",
    ],
    // 本周演出scroll-x的数组
    thisWeekScrollXList: [
      {
        img: "https://img.alicdn.com/bao/uploaded/i1/2251059038/O1CN01SwGBKy2GdSaQ78f78_!!0-item_pic.jpg",
        info: "棱镜「多少年·多少面」2024巡回演唱会—北京站",
        position: "华熙LIVE·五棵松",
        price: "380"
      },
      {
        img: "https://img.alicdn.com/bao/uploaded/https://img.al…51059038/O1CN01aZ35xy2GdSabqhDh8_!!2251059038.jpg",
        info: "2024北京无限音乐节",
        position: "北京通州区城市绿心森林公园南门(绿创空间对面)",
        price: "380"
      },
      {
        img: "https://img.alicdn.com/bao/uploaded/https://img.al…51059038/O1CN01hFwRF32GdSaOCEPTm_!!2251059038.png",
        info: "苏有朋在多重宇宙中遇见你演唱会-北京站",
        position: "首都体育馆",
        price: "380"
      },
      {
        img: "https://img.alicdn.com/bao/uploaded/https://img.al…51059038/O1CN01MV6J3g2GdSZ4qiOyn_!!2251059038.png",
        info: "2024中超联赛天津津门虎主场赛事（年票）",
        position: "天津泰达足球场",
        price: "680"
      },
      {
        img: "https://img.alicdn.com/bao/uploaded/i3/2251059038/O1CN01FT1QXb2GdSZujlBWG_!!2-item_pic.png",
        info: "2023-2024WCBA 山西竹叶青女篮季后赛（套票）",
        position: "山西体育中心体育馆",
        price: "179"
      },
      {
        img: "https://img.alicdn.com/bao/uploaded/i1/2251059038/O1CN01SwGBKy2GdSaQ78f78_!!0-item_pic.jpg",
        info: "棱镜「多少年·多少面」2024巡回演唱会—北京站",
        position: "华熙LIVE·五棵松",
        price: "380"
      },
      {
        img: "https://img.alicdn.com/bao/uploaded/https://img.al…51059038/O1CN01aZ35xy2GdSabqhDh8_!!2251059038.jpg",
        info: "2024北京无限音乐节",
        position: "北京通州区城市绿心森林公园南门(绿创空间对面)",
        price: "380"
      },
      {
        img: "https://img.alicdn.com/bao/uploaded/https://img.al…51059038/O1CN01hFwRF32GdSaOCEPTm_!!2251059038.png",
        info: "苏有朋在多重宇宙中遇见你演唱会-北京站",
        position: "首都体育馆",
        price: "380"
      },
      {
        img: "https://img.alicdn.com/bao/uploaded/https://img.al…51059038/O1CN01MV6J3g2GdSZ4qiOyn_!!2251059038.png",
        info: "2024中超联赛天津津门虎主场赛事（年票）",
        position: "天津泰达足球场",
        price: "680"
      },
      {
        img: "https://img.alicdn.com/bao/uploaded/i3/2251059038/O1CN01FT1QXb2GdSZujlBWG_!!2-item_pic.png",
        info: "2023-2024WCBA 山西竹叶青女篮季后赛（套票）",
        position: "山西体育中心体育馆",
        price: "179"
      },
    ],
    option1: [
      { text: '全部商品', value: 0 },
      { text: '新款商品', value: 1 },
      { text: '活动商品', value: 2 },
    ],
    option2: [
      { text: '默认排序', value: 'a' },
      { text: '好评排序', value: 'b' },
      { text: '销量排序', value: 'c' },
    ],
    value1: 0,
    value2: 'a',
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
    // 当用户上拉加载更多以后，如果用户进行了下拉刷新
    // 需要将数据进行重置

    // this.setData({
    //   numList:[1,2,3]
    // })
    // 在下拉刷新后，loading效果有可能不会回弹回去
    // if (this.data.numList.length === 3) {
    //   wx.stopPullDownRefresh()
    // }
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    console.log("监听用户上拉加载");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})