//app.js
var Config = require('/utils/config.js');

Config.globalData.suid = 1;
Config.globalData.wxapp_id = 1;
Config.globalData.store_id = 1;
Config.globalData.store_name = '加载中...';
Config.globalData.versions = "V1.0.11";
Config.globalData.safe = 'asDfe';
Config.globalData.api = 'https://wxapp.035k.com/api.php';
Config.globalData.userInfo = null;
Config.globalData.theme = '#f37d91'; //主题色
Config.globalData.loading = 'http://img.lanrentuku.com/img/allimg/1212/5-121204193951.gif';
Config.globalData.indexAuthority = true;//首页是否需要授权
Config.globalData.isSelectStore = true; //是否需要设置门店
Config.globalData.store = [];
Config.globalData.host_model = 'sheying';//小程序调用模块
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
  return {
     'w__store_id': this.globalData.store_id,
     'store_id': this.globalData.store_id
  }
}

//存储所有门店信息
Config.baseData = function (data) {
  var store = data.store;
  for(var i in store){
    store[i].stroeName = store[i].title;
    store[i].dress = store[i].address;
  }
  
  this.globalData.store = store;
  this.globalData.store_name = data.store_name;
  var pages = getCurrentPages();
  pages[0].setData({ store_name: data.store_name })
}
//精品套系
Config.recommend = function(_this) {
  var that = this;
  if (this.globalData.recommend != undefined) {
    _this.setData({ recommend: this.globalData.recommend })
    return;
  }

  this._Get('index/get_data', 'm/taoxi/f/id,title,price,img,ext_param/w__is_index/1/o/sort@asc/l/3', function (data) {
    that.globalData.recommend = data;
    _this.setData({ recommend: data })
  })
}
//代金券
Config.discount = function(_this){
  var that = this;
  if (this.globalData.discount != undefined) {
    _this.setData({ discount: this.globalData.discount })
    return;
  }

  this._Get('index/get_data', 'm/quan/f/title,type', function (data) {
    for(var i in data){
      data[i].content = data[i].title;
      data[i].iconText = data[i].type;
    }
    that.globalData.discount = data;
    _this.setData({ discount: data })
  })
}

//推荐客服
Config.defualt_kefu = function(_this){
  var that = this;
  if (this.globalData.defualt_kefu != undefined) {
    _this.setData({ footerBar: this.globalData.footerBar })
    return;
  }

  this._Get('index/get_data', 'm/kefu/f/tel/w__is_index/1', function (data) {
    that.globalData.footerBar = data[0];
    _this.setData({ footerBar: data[0] })
  })
}

Config.clearCache = function(){
  this.globalData.defualt_kefu = undefined;
  this.globalData.discount = undefined;
  this.globalData.recommend = undefined;
  this.globalData.footer = undefined;
}
App(Config);