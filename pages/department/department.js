// pages/department/department.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 推荐套系
    recommend: [
      { title: '情人节专属套餐情人节专属套餐', image: 'http://images.xfwed.com/shop/photo/221/2216184.jpg', price: '4588', desc: '造型：14套 | 拍摄：210张 | 精修：70张', activity: '此活动赠送冰箱一台此活动赠送冰箱一台此活动赠送冰箱一台' },
      { title: '特惠套装特惠套装特惠套装特惠套装', image: 'http://images.xfwed.com/shop/photo/221/2216185.jpg', price: '2588', desc: '造型：7套 | 拍摄：150张 | 精修：70张' },
    ],
    recommend2: [
      { title: '情人节闺蜜写真', image: 'http://images.xfwed.com/shop/photo/221/2216184.jpg', price: '1588', desc: '造型：6套 | 拍摄：100张 | 精修：50张',activity:'此活动赠送精美钥匙扣一个' },
      { title: '情人节专属套餐情人节专属套餐', image: 'http://images.xfwed.com/shop/photo/221/2216184.jpg', price: '4588', desc: '造型：14套 | 拍摄：210张 | 精修：70张',activity:'此活动赠送冰箱一台此活动赠送冰箱一台此活动赠送冰箱一台' },
      { title: '情人节情侣写真', image: 'http://images.xfwed.com/shop/photo/221/2216185.jpg', price: '1888', desc: '造型：5套 | 拍摄：100张 | 精修：70张',activity:'此活动赠送情侣戒指一对' },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      theme:app.globalData.theme
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //html转小程序代码
    this.recommend = this.selectComponent("#recommend");
    this.recommend.wxParseData();
    this.recommend2 = this.selectComponent("#recommend2");
    this.recommend2.wxParseData();
    this.recommend3 = this.selectComponent("#recommend3");
    this.recommend3.wxParseData();
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