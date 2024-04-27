//app.js
// import { toast } from './utils/extendApi'
import './utils/extendApi'
App({
  onLaunch: function () {
    this.setNavBarInfo()
  },

  /* 
      全局共享的数据
  */
  globalData: {
    //全局数据管理
    navBarHeight: 0, // 导航栏高度
    menuBotton: 0, // 胶囊距底部间距（保持底部间距一致）
    menuRight: 0, // 胶囊距右方间距（方保持左、右间距一致）
    menuHeight: 0, // 胶囊高度（自定义内容可与胶囊高度保证一致）
  },

  /**
   * @description 设置导航栏信息
   */
  setNavBarInfo() {
    // 获取系统信息
    const systemInfo = wx.getSystemInfoSync();
    // 胶囊按钮位置信息
    const menuButtonInfo = wx.getMenuButtonBoundingClientRect();
    // 导航栏高度 = 状态栏到胶囊的间距（胶囊距上距离-状态栏高度） * 2 + 胶囊高度 + 状态栏高度
    this.globalData.navBarHeight = (menuButtonInfo.top - systemInfo.statusBarHeight) * 2 + menuButtonInfo.height + systemInfo.statusBarHeight;
    this.globalData.menuBotton = menuButtonInfo.top - systemInfo.statusBarHeight;
    this.globalData.menuRight = systemInfo.screenWidth - menuButtonInfo.right;
    this.globalData.menuHeight = menuButtonInfo.height;
  },

  /* 
      全局共享方法
  */
  setToken(token) {
    // 如果想获取token，可以使用this的方式进行获取
    this.globalData.token = token
  },

  async onShow() {
    // wx.showToast({
    //   // 提示的内容
    //   title: "消息提示框",
    //   // 提示的图标
    //   // success成功 error失败 loading加载 none不显示任何图标
    //   icon: 'success',
    //   // 提示延迟的时间
    //   duration: 2000,
    //   // 是否显示透明蒙层，防止触摸穿透
    //   mask: true
    // })

    //  ***********************
    // wx.toast({
    //   title: "数据加载完毕...",
    //   icon: "success"
    // })

    const res = await wx.modal({
      title: "新的提示",
      // showCancel: false
    })
    console.log(res)
  }
})
