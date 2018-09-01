//app.js
var Config = require('/utils/config.js');

Config.globalData.suid = 1;
Config.globalData.wxapp_id = 1;
Config.globalData.store_id = 1;
Config.globalData.versions = "V1.0.11";
Config.globalData.safe = 'asDfe';
Config.globalData.api = 'http://www.do.cn/api.php/sheying/';
Config.globalData.userInfo = null;
Config.globalData.theme = '#f37d91'; //主题色
Config.globalData.loading = 'http://img.lanrentuku.com/img/allimg/1212/5-121204193951.gif';
Config.globalData.indexAuthority = true;//首页是否需要授权
Config.globalData.isSelectStore = true; //是否需要设置门店
 // 设置门店
Config.setStore = function () {
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
}
Config.onLaunch = function () {
  this.get_api_config();
  this.globalData.userInfo && this.logining();
}

Config.logining =  function() {
  // 登录
  wx.login({
    success: res => {
      console.log(res);
      // 发送 res.code 到后台换取 openId, sessionKey, unionId
    }
  })
}
Config.extra_param =  function() {
  return { 'w__store_id': this.globalData.store_id}
}
//精品套系
Config.recommend = function(_this) {
  var that = this;
  if (this.globalData.recommend != undefined) {
    _this.setData({ recommend: this.globalData.recommend })
    return;
  }

  this._Get('index/get_data', 'm/taoxi/f/title,price,img,ext_param/w__is_index/1/o/sort@asc/l/3', function (data) {
    that.globalData.recommend = data;
    _this.setData({ recommend: data })
  })
}
App(Config);