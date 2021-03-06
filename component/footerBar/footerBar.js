// component/footerBar/footerBar.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    'footerBar':{
      type:'String',
      value:'',
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    Tel:''
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
    showDialog:function(){
      this.triggerEvent("showDialog")
    }
  }
})
