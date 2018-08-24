// component/appointment/appointment.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    discount: {
      type: "Array",
      value: "",
      observer: function (news, olds, path) {
        // console.log(news, olds)
      }
    },
    rightIcon:{
      type: "Boolean",
      value: true,
      observer: function (news, olds, path) {
        // console.log(news, olds)
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 弹窗显示控制
    isShow: false,
    inputVal:'',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindKeyInput: function (e) {
      this.setData({
        inputVal: e.detail.value
      })
    },
    //隐藏弹框
    hideDialog() {
      this.setData({
        isShow: false
      })
    },
    showDialog() {
      this.setData({
        isShow: true
      })
    },
    /*
    * 内部私有方法建议以下划线开头
    * triggerEvent 用于触发事件
    */
    confirmEvent() {
      var regTel = /^1[3,4,5,7,8]\d{9}$/;
      if (!regTel.test(this.data.inputVal)) {
        wx.showToast({
          title: '请正确输入手机号码',
          icon: 'none',
          duration: 2000,
        })
      }else{
        wx.showToast({
          title: '预约成功',
          icon: 'none',
          duration: 2000,
        })
        this.hideDialog();
      }
      //触发成功回调
      //this.triggerEvent("confirmEvent");
    }
  }
})
