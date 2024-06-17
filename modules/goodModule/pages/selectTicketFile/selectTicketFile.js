// modules/goodModule/pages/selectTicketFile/selectTicketFile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 选中的场次
    activeSelectSessionIndex: 0,
    // 场次列表
    selectSession: [
      {
        time: '2024年-05-01 周三 15：30'
      },
      {
        time: '2024年-05-01 周三 15：30'
      },
      {
        time: '2024年-05-01 周三 15：30'
      },
    ],
    // 选中的票档
    activeSelectTicketFileIndex: 0,
    // 票档列表
    ticketFileList: [
      {
        value: "看台380元"
      },
      {
        value: "看台380元"
      },
      {
        value: "看台380元"
      },
      {
        value: "看台380元"
      },
      {
        value: "看台380元"
      },
    ]
  },

  changeActiveSelectSessionIndex(e) {
    // console.log(e.currentTarget.dataset.id)
    this.setData({
      activeSelectSessionIndex: e.currentTarget.dataset.id
    })
  },

  changeActiveSelectTicketFileIndex(e) {
    // console.log(e.currentTarget.dataset.id)
    this.setData({
      activeSelectTicketFileIndex: e.currentTarget.dataset.id
    })
  },

  gotoSelectSeat() {
    wx.navigateTo({
      url: '/modules/goodModule/pages/confirmOrderInfo/confirmOrderInfo' // 目标页面的路径  
    });
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