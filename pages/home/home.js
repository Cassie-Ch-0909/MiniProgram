// pages/home/home.js
let app = getApp();
import { getGoodsInfoListAPI } from '../../api/home'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navBarHeight: app.globalData.navBarHeight,//导航栏高度
    menuBotton: app.globalData.menuBotton,//导航栏距离顶部距离
    menuHeight: app.globalData.menuHeight, //导航栏高度
    // 头部搜索框的高度
    searchHeight: 0,
    // 真正需要滚动的高度
    reallyHeight: 0,
    // 筛选条是否粘性定位
    targetElementFixed: false,// 初始状态下 targetElement 不是 fixed
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
      { text: '全部', value: 0 },
      { text: '新款商品', value: 1 },
      { text: '活动商品', value: 2 },
    ],
    // 排序的值
    recommendSortOptions: [
      { text: '推荐排序', value: '推荐排序' },
      { text: '热度排序', value: '热度排序' },
      { text: '开演时间', value: '开演时间' },
    ],
    // 品类标题
    selectTypeTitle: "品类",
    // 时间标题
    selectTimePeriod: "全部时间",
    // 排序标题
    recommendSortValue: '推荐排序',
    // 复选框选中的值
    checkBoxresult: [],
    // 日历的值
    date: '',
    // 服务/折扣选中的索引
    activeServiceDiscountIndex: -1,
    // 选中价格的索引
    activeSelectPriceIndex: -1,
    // ticketList
    ticketList: [
      {
        img: "https://img.alicdn.com/bao/uploaded/i1/2251059038/O1CN01SwGBKy2GdSaQ78f78_!!0-item_pic.jpg",
        title: "棱镜「多少年·多少面」2024巡回演唱会—北京站",
        position: "华熙LIVE·五棵松",
        price: "380",
        time: "2024.05.11 周六 19:30"
      },
      {
        img: "https://img.alicdn.com/bao/uploaded/https://img.al…51059038/O1CN01aZ35xy2GdSabqhDh8_!!2251059038.jpg",
        title: "2024北京无限音乐节",
        position: "北京通州区城市绿心森林公园南门(绿创空间对面)",
        price: "380",
        time: "2024.05.11 周六 19:30"
      },
      {
        img: "https://img.alicdn.com/bao/uploaded/https://img.al…51059038/O1CN01hFwRF32GdSaOCEPTm_!!2251059038.png",
        title: "苏有朋在多重宇宙中遇见你演唱会-北京站",
        position: "首都体育馆",
        price: "380",
        time: "2024.05.11 周六 19:30"
      },
      {
        img: "https://img.alicdn.com/bao/uploaded/https://img.al…51059038/O1CN01MV6J3g2GdSZ4qiOyn_!!2251059038.png",
        title: "2024中超联赛天津津门虎主场赛事（年票）",
        position: "天津泰达足球场",
        price: "680",
        time: "2024.05.11 周六 19:30"
      },
      {
        img: "https://img.alicdn.com/bao/uploaded/i3/2251059038/O1CN01FT1QXb2GdSZujlBWG_!!2-item_pic.png",
        title: "2023-2024WCBA 山西竹叶青女篮季后赛（套票）",
        position: "山西体育中心体育馆",
        price: "179",
        time: "2024.05.11 周六 19:30"
      },
      {
        img: "https://img.alicdn.com/bao/uploaded/i1/2251059038/O1CN01SwGBKy2GdSaQ78f78_!!0-item_pic.jpg",
        title: "棱镜「多少年·多少面」2024巡回演唱会—北京站",
        position: "华熙LIVE·五棵松",
        price: "380",
        time: "2024.05.11 周六 19:30"
      },
      {
        img: "https://img.alicdn.com/bao/uploaded/https://img.al…51059038/O1CN01aZ35xy2GdSabqhDh8_!!2251059038.jpg",
        title: "2024北京无限音乐节",
        position: "北京通州区城市绿心森林公园南门(绿创空间对面)",
        price: "380",
        time: "2024.05.11 周六 19:30"
      },
      {
        img: "https://img.alicdn.com/bao/uploaded/https://img.al…51059038/O1CN01hFwRF32GdSaOCEPTm_!!2251059038.png",
        title: "苏有朋在多重宇宙中遇见你演唱会-北京站",
        position: "首都体育馆",
        price: "380",
        time: "2024.05.11 周六 19:30"
      },
      {
        img: "https://img.alicdn.com/bao/uploaded/https://img.al…51059038/O1CN01MV6J3g2GdSZ4qiOyn_!!2251059038.png",
        title: "2024中超联赛天津津门虎主场赛事（年票）",
        position: "天津泰达足球场",
        price: "680",
        time: "2024.05.11 周六 19:30"
      },
      {
        img: "https://img.alicdn.com/bao/uploaded/i3/2251059038/O1CN01FT1QXb2GdSZujlBWG_!!2-item_pic.png",
        title: "2023-2024WCBA 山西竹叶青女篮季后赛（套票）",
        position: "山西体育中心体育馆",
        price: "179",
        time: "2024.05.11 周六 19:30"
      },
      {
        img: "https://img.alicdn.com/bao/uploaded/i3/2251059038/O1CN01FT1QXb2GdSZujlBWG_!!2-item_pic.png",
        title: "2023-2024WCBA 山西竹叶青女篮季后赛（套票）",
        position: "山西体育中心体育馆",
        price: "179",
        time: "2024.05.11 周六 19:30"
      },
      {
        img: "https://img.alicdn.com/bao/uploaded/i3/2251059038/O1CN01FT1QXb2GdSZujlBWG_!!2-item_pic.png",
        title: "2023-2024WCBA 山西竹叶青女篮季后赛（套票）",
        position: "山西体育中心体育馆",
        price: "179",
        time: "2024.05.11 周六 19:30"
      },
      {
        img: "https://img.alicdn.com/bao/uploaded/i3/2251059038/O1CN01FT1QXb2GdSZujlBWG_!!2-item_pic.png",
        title: "2023-2024WCBA 山西竹叶青女篮季后赛（套票）",
        position: "山西体育中心体育馆",
        price: "179",
        time: "2024.05.11 周六 19:30"
      },

    ]
  },

  onDropdownOpen: function () {
    // 调用 wx.pageScrollTo 方法滚动到指定高度
    // console.log(this.data.reallyHeight,)
  },

  /* 
      当滚动距离大于筛选条所在位置时，筛选条要固定在页面
  */
  onScrollViewScroll: function (event) {
    // 滚动事件处理逻辑
    // console.log(event.detail.scrollTop)
    // console.log("23", 680 - this.data.navBarHeight)
    if (event.detail.scrollTop > this.data.reallyHeight) {
      // console.log("到啦！！！！！！！！！！！！！！")
      this.setData({
        targetElementFixed: true
      })
    } else {
      this.setData({
        targetElementFixed: false
      })
    }
  },

  /* 
      获取滚动到筛选框时距离顶部的距离，并给reallyHeight赋值
  */
  getScrollToElementTop: function () {
    var that = this;
    return new Promise((resolve, reject) => {
      wx.createSelectorQuery().selectViewport().scrollOffset(function (res) {
        wx.createSelectorQuery().select('.target-element').boundingClientRect(function (rect) {
          if (rect) {
            var distanceTop = rect.top + res.scrollTop - that.data.navBarHeight - that.data.searchHeight
            that.setData({
              reallyHeight: distanceTop
            }, () => {
              // console.log(that.data.reallyHeight); // 在 setData 回调中输出 searchHeight 的值
              resolve(); // 数据更新完成，执行 resolve
            });
          } else {
            console.error('未找到指定元素或位置信息不可用');
          }
        }).exec();
      }).exec();
    });
  },

  /* 
      获取页面中顶部搜索框的高度，并给searchHeight赋值
      在此处调用getScrollToElementTop函数
  */
  getScrollToElementTopForSearch: function () {
    var that = this;
    return new Promise((resolve, reject) => {
      wx.createSelectorQuery().selectViewport().scrollOffset(function (res) {
        wx.createSelectorQuery().select('.search666').boundingClientRect(function (rect) {
          if (rect) {
            // console.log(rect.height, '00000')
            that.setData({
              searchHeight: rect.height
            }, () => {
              // console.log(that.data.searchHeight); // 在 setData 回调中输出 searchHeight 的值
              resolve(); // 数据更新完成，执行 resolve
              that.getScrollToElementTop()
            });
          } else {
            console.error('未找到指定元素或位置信息不可用');
            reject(new Error('未找到指定元素或位置信息不可用'));
          }
        }).exec();
      }).exec();
    });
  },

  /* 
      选择品类
  */
  onChange(event) {
    // console.log(event.detail);
    // 如果你想要在 setData 生效后获取更新后的值，可以在 setData 的回调函数中进行操作
    this.setData({
      checkBoxResult: event.detail,
      selectTypeTitle: event.detail
    }, () => {
      console.log(this.data.checkBoxResult);
    });
  },


  /* 
      在日历上选择日期
  */
  formatDate(date) {
    date = new Date(date);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  },
  onConfirm(event) {
    const [start, end] = event.detail;
    this.setData({
      date: `${this.formatDate(start)} - ${this.formatDate(end)}`,
      selectTimePeriod: `${this.formatDate(start)} - ${this.formatDate(end)}`
    });
    console.log(this.data.date)
  },

  /* 
      选择以什么方式排序
  */
  handleSortChange(event) {
    // 处理选择值的变化
    console.log('选择的值是：', event.detail);
    this.setData({
      recommendSortValue: event.detail
    });
  },

  /* 
      选择服务/折扣
  */
  selectServiceAndDiscount(event) {
    const index = event.currentTarget.dataset.index;
    console.log(index)
    this.setData({
      activeServiceDiscountIndex: index
    }, () => {
      // console.log(this.data.activeServiceDiscountIndex);
    });
  },

  /* 
      选择价格
  */
  selectPrice(event) {
    const index = event.currentTarget.dataset.index;
    // console.log(index)
    this.setData({
      activeSelectPriceIndex: index
    }, () => {
      // console.log(this.data.activeSelectPriceIndex);
    });
  },

  /* 
      调用接口条件查询商品列表
  */
  async getGoodsInfoList(data) {
    const res = await getGoodsInfoListAPI(data)
    console.log(res.data)
    this.setData({
      ticketList: res.data
    })
  },

  /* 
      点击首页某个商品携带商品id跳转到商品详情页面
  */
  gotoGoodsDetails(e) {
    console.log(e.currentTarget.dataset.id)
    wx.navigateTo({  
      url: `/modules/goodModule/pages/goodsDetail/goodsDetails?goodsId=${e.currentTarget.dataset.id}`
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // this.getScrollToElementTop()
    this.getGoodsInfoList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    this.getScrollToElementTopForSearch()
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
    // console.log("监听用户上拉加载");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  /* 
    分享到朋友圈
  */
  onShareTimeline() {

  }
})