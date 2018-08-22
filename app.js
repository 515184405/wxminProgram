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
  globalData: {
    userInfo: null,
    theme:'#f37d91', //主题色
    loading:'http://img.lanrentuku.com/img/allimg/1212/5-121204193951.gif',
    indexAuthority: true,//首页是否需要授权
    //userAuthority:true,//个人中心是否需要授权
  }
})