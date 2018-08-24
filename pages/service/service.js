// pages/service/service.js

const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    aboutme_bg:'http://pic.58pic.com/58pic/13/10/21/04958PICCy5_1024.jpg',
    service:[
      { name: '张三', desc: '漂亮大方', avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2537627520,3119182571&fm=27&gp=0.jpg', tel: 15321353313 },
      { name: '李四', desc: '漂亮大方', avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2537627520,3119182571&fm=27&gp=0.jpg', tel: 15321353314 },
      { name: '王二麻子', desc: '漂亮大方', avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2537627520,3119182571&fm=27&gp=0.jpg', tel: 15321353315 },
      { name: '赵武', desc: '漂亮大方', avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2537627520,3119182571&fm=27&gp=0.jpg', tel: 15321353316 },
    ]
  },
  makePhoneCalls:function(e){
    var tel = e.currentTarget.dataset.tel+'';
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('user');
    this.setData({
      theme:app.globalData.theme
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
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