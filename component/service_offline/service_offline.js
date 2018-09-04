// component/service_offline/service_offline.js
const app = getApp();

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    service:{
      type:"Array",
      value:[],
    },
    types:{
      type:"Number",
      value:3
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    theme:(function(){
      return app.globalData.theme
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
  }
})
