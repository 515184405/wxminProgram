const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    starPosition:[],
  },
  // 生成星星坐标
  createPosition:function(){
    this.data.starPosition = [];
    for(var i = 0; i < 15; i++){
      var positionX = Math.floor(Math.random() * this.data.imgWidth);
      var positionY = Math.floor(Math.random() * 200 * this.data.unit);
      var opacity = Math.random() * 0.5;
      this.data.starPosition.push({ x: positionX, y: positionY, opacity: opacity});
    }
    this.setData({
      starPosition:this.data.starPosition
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log('user');
    that.setData({
      isSelectStore: app.globalData.isSelectStore,
      theme:app.globalData.theme
    })
    //获取设备的宽高
    wx.getSystemInfo({
      success: (res) => {
        let ww = res.windowWidth;
        let wh = res.windowHeight;
        let unit = ww/750;

        this.setData({
          imgWidth: ww,
          imgHeight:wh,
          unit:unit
        });
      }
    })
    //生成星星坐标
    that.createPosition();
    setInterval(function(){
      that.createPosition();
    },5000)
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