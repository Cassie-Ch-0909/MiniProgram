// modules/goodModule/pages/goodsDetail/goodsDetails.js
import { getGoodsInfoByIdAPI } from '../../../../api/home'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 选中的城市站台
    activeCityPlatform: 0,
    // 城市数组
    cityPlatformList: [
      {
        place: '福州站',
        time: '05.16-05.19'
      },
      {
        place: '福州站',
        time: '05.16-05.19'
      },
      {
        place: '福州站',
        time: '05.16-05.19'
      },
      {
        place: '福州站',
        time: '05.16-05.19'
      },
      {
        place: '福州站',
        time: '05.16-05.19'
      }
    ],
    // 本页商品详情信息对象
    goodsDetailObj: {}
  },

  /* 
      点击选择哪个城市站
  */
  changeActiveCityPlatform(e) {
    //  console.log(e.currentTarget.dataset.indexvalue)
    this.setData({
      activeCityPlatform: e.currentTarget.dataset.indexvalue
    })
  },

  /* 
      调用接口根据商品Id查询商品详情
  */
  async getGoodsInfoById(goodsId) {
    const res = await getGoodsInfoByIdAPI(goodsId)
    console.log(res)
    this.setData({
      goodsDetailObj: res.data
    }, () => {
      // console.log(this.data.goodsDetailObj)
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 打印传递过来的参数  
    // console.log(options);
    this.getGoodsInfoById(options.goodsId)
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