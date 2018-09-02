var Request = require('request.js');
var Md5 = require('md5.js');
var Strings = require('trim.js');

//引入公共请求
const requestHandler = require('sendRequest.js');

module.exports = {

  //请求
  _Get: function (request_url, param, fun) {
    var that = this;
  
    if (!this.globalData.host) {
      setTimeout(function () {
        that._Get(request_url, param, fun);
      }, 100);
      return false;
    }

    //解析请求地址和参数
    var data = this.set_data_param(request_url, param);

    Request._Get(data.url, function (res){
      if (typeof fun == 'function') {
        fun(res.data.data);
      }
    }, "GET", data.param);

  },
  //  var time = Date.now();
  _Post: function (request_url, param, fun) {
    wx.showLoading({ title: '发送中..' });
    //解析请求地址和参数
    var data = this.set_data_param(request_url, param);
    Request._Get(data.url,  function (res) {
      if (typeof fun != 'function') {
        wx.hideLoading()
        return;
      }
      wx.showToast({ title: res.data.msg, icon: 'success', duration: 3000 })
      fun(res.data);
    }, "POST", data.param)
  },
  //解析请求参数
  set_data_param: function (request_url, param){
    if (param == undefined || param == '') {
      param = {};
    }
    if (typeof param == 'string') {
      param = Strings.parseString(param);
    }

    param.suid = this.globalData.suid;
    param.wxapp_id = this.globalData.wxapp_id;
    param.openid = this.globalData.openid;
    //获取额外参数
    var extra_param = this.extra_param();
    //合并参数
    param = Object.assign(param, extra_param);
    param.time = Date.parse(new Date()) / 1000 + this.globalData.diff_time;
    var safe = this.globalData.safe;
    //console.log(safe + Md5.objOurl(param));
    console.log(param);
    var sign = Md5.hex_md5(safe + Md5.objOurl(param));
    param.sign = sign;
    //检查s参数是否全
    request_url = this.parse_model(request_url);
    var url = this.globalData.host + "?s=" + request_url;
    return {url:url,param:param}
  },
  //进入小程序第一次请求，获取相应的配置参数
  get_api_config: function () {
    var _this = this;
    wx.login({
      success: function (res) {
        var param = {
          suid: _this.globalData.suid,
          wxapp_id:_this.globalData.wxapp_id,
          code: res.code,
          versions: _this.globalData.versions
        }

        //获取额外参数
        var extra_param = _this.extra_param();
        //合并参数
        param = Object.assign(param, extra_param);
        //动态更换域名
        requestHandler.httpsPromisify(wx.request)({
          url: _this.globalData.api + '?s=/sheying/index/index',
          data:param,
          method: "GET",
          header: { 'content-type': 'application/json' }
        }).then(function (res) {
          if (res.data.code != 200) {
            wx.showToast({
              title: res.data.msg,
              icon: 'none',
              duration: 5000
            })
            return;
          }
         
          //时间差
          _this.globalData.diff_time = Date.parse(new Date()) / 1000 - res.data.data.time;
          console.log(_this.globalData.diff_time);
   
          // 是否显示底部
          _this.globalData.is_show_bottom = res.data.data.is_show_bottom;
          // 底部信息
          _this.globalData.technical_support = res.data.data.technical_support;
          if (res.data.data.api) {
            _this.globalData.host = res.data.data.api;
          }
          _this.globalData.openid = res.data.data.openid;
          _this.baseData(res.data.data);
        })

      }
    });
  },
 
  onLaunch: function () {
    //获取api所有接口地址
    this.globalData.api_url = this.api;
    //获取api的host域名及图片地址等信息
    this.get_api_config();
    var SystemInfo = wx.getSystemInfoSync();
    this.globalData.width = SystemInfo.windowWidth * (750 / SystemInfo.windowWidth);
    this.globalData.height = SystemInfo.windowHeight * (750 / SystemInfo.windowWidth);
  },
  globalData : {
    suid: 0,
    api: '',
    project_id: 0,
    versions: "",
    safe: '',
    footer:'',
    diff_time: 0//手机时间与服务器时间只差
  },
  footer:function(_this){
    var that = this;
   
    if (this.globalData.footer){
      _this.setData({ footer: this.globalData.footer })
      return ;
    }
    this._Get('index/footer', '', function (data) {
      data.version = that.globalData.versions;
      that.globalData.footer = data;
      _this.setData({ footer: data })
    })
  },
  //调整
  goto:function(data){
      switch(data.type){
        case 'reLaunch':
          wx.reLaunch({url: data.url});break;
        case 'switchTab':
          wx.switchTab({ url: data.url }); break;
        case 'redirectTo':
          wx.redirectTo({ url: data.url }); break;
        case 'navigateTo':
          wx.navigateTo({ url: data.url }); break;
      }
  },
    //api请求额外参数，放到app.js里面
  extra_param: function () {
    return {}
  },
  //base接口返回参数额外处理方法，放到app.js里面
  baseData: function (data) {},
  //解析模块参数
  parse_model:function(data){
    data = Strings.trim(data,'/');
    var param = data.split('/');
    if (param.length == 2){
      data = this.globalData.host_model+'/'+data;
    }
    return data;
  }

};
