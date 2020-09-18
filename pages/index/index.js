//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    template: {
      bgUrl: '/image/bg.png',
      logo: '/image/logo.png',
      name: '机器猫',
      work_no: 102356356,
      template_name: '安徽银通物联大学',
      qrcode:'/image/qrcode.png'
    }
  },
  myBill: function () {//跳转到我的账单
    wx.navigateTo({
      url: ''
    })
  },
  recharge: function () {//跳转到银通校园
    wx.navigateTo({
      url: ''
    })
  },
  pay: function () {//跳转到缴费
    wx.navigateTo({
      url: ''
    })
  },
  invite: function () {//跳转到邀请好友
    wx.navigateTo({
      url: '/pages/others/invite/invite'
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  
  // 用户点击右上角分享 
  onShareAppMessage: function () {
    return {
      title: '银通物联',
      path: '/pages/index/index'
    }
  }
})
