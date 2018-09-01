var Request = require('request.js');
var Md5 = require('md5.js');
var Strings = require('trim.js');

//引入公共请求
const requestHandler = require('sendRequest.js');

module.exports = {

  //请求
  _Get: function (request_url, param, fun, method) {
    var that = this;
    if (method == undefined) {
      method = "GET";
    }

    //构建基础参数
    var globalData = this.globalData;
    if (!globalData.host) {
      setTimeout(function () {
        that._Get(request_url, param, fun, method);
      }, 100);
      return false;
    }


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
    param = Object.assign(param,extra_param);
    param.time = Date.parse(new Date()) / 1000 + this.globalData.diff_time;
    var safe = this.globalData.safe;
    //console.log(safe + Md5.objOurl(param));
    console.log(param);
    var sign = Md5.hex_md5(safe + Md5.objOurl(param));
    param.sign = sign;
    var url = globalData.host + request_url;
    //获取额外参数
    Request._Get(url, fun, "POST", param);

  },
  //  var time = Date.now();
  _Post: function (request_url, param, fun) {
    wx.showLoading({ title: '发送中..' });
    var time = Date.now();
    this._Get(request_url, param, function (res) {
      if (typeof fun != 'function') {
        return;
      }

      if (Date.now() - time < 1000) {
        setTimeout(function () {
          wx.hideLoading();
          wx.showToast({ title: res, icon: 'success', duration: 2000 })
          fun(res);
        }, 1000)
        return;
      }
      wx.hideLoading()
      wx.showToast({ title: res.data.data, icon: 'success', duration: 0 })
      fun(res);
    })
  },
  set_globalData: function (_this) {
    _this.setData({
      technical_support: this.globalData.technical_support,
      versions: '版本号：' + this.globalData.versions,
    })

  },
  //关闭加载
  colse_load: function (_this) {
    _this.setData({ load_status: false });
    this.set_globalData(_this);
    this.get_base_image_url(_this);
  },
  // 获取图片路径
  get_base_image_url: function (_this) {
    _this.setData({ base_image_url: this.globalData.base_image_url });

  },
  get_api_config: function () {
    var _this = this;
    wx.login({
      success: function (res) {
        //动态更换域名
        requestHandler.httpsPromisify(wx.request)({
          url: _this.globalData.api + '/index/index/suid/' + _this.globalData.suid + '/wxapp_id/' + _this.globalData.wxapp_id + "/code/" + res.code + "/versions/" + _this.globalData.versions,
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
          _this.globalData.base_image_url = res.data.data.base_image_url;
          _this.globalData.base_video_url = res.data.data.base_video_url;

          // 是否显示底部
          _this.globalData.is_show_bottom = res.data.data.is_show_bottom;
          // 底部信息
          _this.globalData.technical_support = res.data.data.technical_support;
          if (res.data.data.api) {
            _this.globalData.host = res.data.data.api;
          }
          _this.globalData.openid = res.data.data.openid;

        })

      }
    });
  },
  //解析图片
  get_img_url: function (data, keys) {

    var keysArr = keys.split(',');
    for (var i in data) {

      if (typeof data[i] == 'string') {
        for (var key in keysArr) {

          if (i == keysArr[key]) {

            if (data[i].indexOf('xwUploads') > 0) {
              data[i] = this.globalData.base_image_url + data[i];
            } else if (data[i].indexOf('snapshot') > 0) {
              data[i] = this.globalData.base_video_url + data[i];
            } else {
              data[i] = this.globalData.host + data[i];
            }

          }
        }
      } else if (typeof data[i] == 'object') {
        data[i] = this.get_img_url(data[i], keys);
      }
    }
    return data;
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
    api: 'https://api.xiaowei.035k.com/',
    base_image_url: '',
    base_video_url: '',
    project_id: 0,
    versions: "",
    safe: '',
    api_url: {},
    footer:'',
    diff_time: 0//手机时间与服务器时间只差
  },
  extra_param:function(){
    return {}
  },
  footer:function(_this){
    var that = this;
   
    if (this.globalData.footer){
      _this.setData({ footer: this.globalData.footer })
      return ;
    }
    this._Get('index/footer', '', function (data) {
      that.globalData.footer = data;
      _this.setData({ footer: data })
    })
  }
};
