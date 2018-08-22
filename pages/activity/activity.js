// pages/activity/activity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 优惠券
    discount: [
      { iconText: '优惠券', content: '订购送200元抵扣券' },
      { iconText: '到店礼', content: '到店即送精美水杯一个' },
    ],
    // 推荐套系
    recommend: [
      { title: '情人节专属套餐情人节专属套餐', image: 'http://images.xfwed.com/shop/photo/221/2216184.jpg', price: '4588', desc: '造型：14套 | 拍摄：210张 | 精修：70张', activity: '此活动赠送冰箱一台此活动赠送冰箱一台此活动赠送冰箱一台' },
      { title: '特惠套装特惠套装特惠套装特惠套装', image: 'http://images.xfwed.com/shop/photo/221/2216185.jpg', price: '2588', desc: '造型：7套 | 拍摄：150张 | 精修：70张' },
    ],
  },
  // 显示预约弹框
  showDialog: function () {
    this.appointment.showDialog();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.appointment = this.selectComponent("#appointment");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})