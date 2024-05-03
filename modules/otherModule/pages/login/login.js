// modules/otherModule/pages/login/login.js
import { getMessageCodeAPI } from '../../../../api/login'
import { toast } from '../../../../utils/extendApi'
let timeNum = 6 //60秒倒计时
let countDownTime = timeNum
let timer; //计时器
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogin: true,
    // 手机号输入框的值
    phoneNumber: '',
    // 短信验证码输入框的值
    messageCode: '',
    // 正确的短信验证码
    rightMessageCode: '',
    // 获取验证码按钮的字体颜色
    codeColor: "#FF3474",
    // 获取验证码按钮的文字
    codeText: "获取验证码"
  },

  /* 
      调用接口获取短信验证码
  */
  async getMessageCode() {
    const res = await getMessageCodeAPI()
    // console.log(res)
    this.setData({
      rightMessageCode: res.data
    }, () => {
      // console.log(this.data.rightMessageCode)
      // 提示用户短信验证码
      toast({
        title: '发送成功',
        icon: 'success'
      })
    })
  },

  // 点击获取验证码按钮倒计时开始
  getCode() {
    if (countDownTime == timeNum) {
      this.getMessageCode()
      this.setInterval()
      this.setData({
        codeColor: "#2E2E2E",
        codeText: countDownTime + "s秒后重新获取"
      })
    } else {
      wx.showToast({
        title: '请等待验证码',
        icon: "none"
      })
    }
  },

  // 验证码计时器
  setInterval: function () {
    const that = this
    timer = setInterval(function () { // 设置定时器
      countDownTime--
      if (countDownTime < 1) {
        clearInterval(timer)
        that.setData({
          codeColor: "#FF3474",
          codeText: "获取验证码"
        })
        countDownTime = timeNum
      } else {
        that.setData({
          codeColor: "#2E2E2E",
          codeText: countDownTime + "s秒后重新获取"
        })
      }
      // console.log(countDownTime + "s")
    }, 1000)
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