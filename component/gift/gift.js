// component/gift/gift.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    bColor:{
      type:'String',
      value:'#f9f9f9'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 优惠券
    discount: [
      { iconText: '', content: '到店领取情侣对戒一枚' },
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 显示预约弹框
    showDialog: function () {
      this.appointment = this.selectComponent("#appointment");
      this.appointment.showDialog();
    },
  }
})
