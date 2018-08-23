// pages/selectStore/selectStore.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    store:[
      { id: 1, stroeName: '北京石景山古城店', dress: '北京市石景山区古城大街',tel:'010-68278242'},
      { id: 2, stroeName: '北京市通州区西门店', dress: '北京市通州区新华大街256号', tel:'010-69512449' },
      { id: 3, stroeName: '北京市顺义区顺义店', dress: '北京市顺义区站前北街13号', tel:'010-81484180'},
      { id: 4, stroeName: '北京市通州区金鼎店', dress: '北京市通州区新华大街43号',tel:'010-69528600' },
      { id: 5, stroeName: '北京市门头沟区门城店', dress:'北京市门头沟区城子东街1号',tel:'010-69838141'},
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  setStore:function(e){
    var id = e.currentTarget.dataset.id;
    wx.setStorage({
      key: "store",
      data: id,
      success: function () {
        wx.switchTab({
          url: '/pages/index/index'
        })
      }
    })
  },
  // 绑定门店地址
  bindStore:function(e){
    var that = this;
    var storeId = '';
    // 获取storage是否已存在门店
    wx.getStorage({
      key: 'store',
      success: function (res) {
        if(res.data != ''){
          wx.showModal({
            title: '温馨提示',
            content: '确认切换？切换成功后下次登陆或十分钟后生效',
            success: function (res) {
              if (res.confirm) {
                //存门店
                that.setStore(e);
              }
            }
          })
        }
      },
      fail:function(){
        //存门店
        that.setStore(e);
      }
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