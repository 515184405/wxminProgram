// component/about/about.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showImage:{
      type:"Boolean",
      value:true,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
    ],
    indicatorDots: false,
    autoplay: true,
    circular: true,
    interval: 3000,
    duration: 1000,
    items:3,
    // 主题色
    theme:(function(){
      return app.globalData.theme;
    })()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    makePhoneCalls: function (e) {
      var tel = e.currentTarget.dataset.tel + '';
      console.log(tel);
      wx.makePhoneCall({
        phoneNumber: tel,
        success: function () {
          console.log("成功拨打电话")
        },
        fail: function () {
          console.log("拨打电话失败！")
        }
      })
    },
    // 图片查看器
    wxParseImgTap: function (e) {
      var that = this;
      var nowImgUrl = e.target.dataset.src;
      wx.previewImage({
        current: nowImgUrl, // 当前显示图片的http链接
        urls: that.data.imgUrls // 需要预览的图片http链接列表
      })
    },
    // 导航
    mapLine:function(){
      wx.openLocation({
        latitude: 40.33349,
        longitude: 120.347382,
        scale: 15 ,
        name: '绥中纳尼亚',
        address: '辽宁省葫芦岛市绥中县绥中镇新兴街二段10-3号'
      })
    }
  }
})
