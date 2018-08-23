//app.js
App({
  onLaunch: function () {
    this.globalData.userInfo && this.logining();
  },
  logining:function(){
    // 登录
    wx.login({
      success: res => {
        console.log(res);
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  // 设置门店
  setStore: function () {
    //在已授权的情况下判断是否需要门店选择
    if (this.globalData.isSelectStore && (this.globalData.scope || !this.globalData.indexAuthority )) {
      wx.getStorage({
        key: 'store',
        success: function (res) {
          console.log(res.data)
        },
        fail: function (res) {
          wx.redirectTo({
            url: '/pages/selectStore/selectStore',
          })
        }
      })
    }
  },
  globalData: {
    userInfo: null,
    theme:'#f37d91', //主题色
    loading:'http://img.lanrentuku.com/img/allimg/1212/5-121204193951.gif',
    indexAuthority: true,//首页是否需要授权
    isSelectStore:true, //是否需要设置门店
  }
})