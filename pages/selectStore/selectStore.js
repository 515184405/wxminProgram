// pages/selectStore/selectStore.js
const app = getApp();
var timer = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    store:[],
    storeArr : []
  },
  //获取门店信息数据
  getStoreArr:function(){
    var that = this;
    that.setData({
      storeArr: that.data.store
    })
  },
  // 设置门店信息
  setStore: function (e) {
    var id = e.currentTarget.dataset.id;
    var name = e.currentTarget.dataset.name;
    var oldStoreId = app.globalData.store_id;
    app.globalData.store_id = id;
    app.globalData.store_name = name;
    wx.showToast({
      title: '切换成功',
      duration: 2000,
      icon: 'none'
    })

    if (oldStoreId != id){
      //清除之前的门店缓存
      app.clearCache();
    }
    
    setTimeout(function () {
      wx.reLaunch({
        url: '/pages/index/index'
      })
    }, 1000)
   
  },

  // 输入门店名搜索
  searchContent: function (e) {
    var that = this;
    var searchVal = e.detail.searchVal;
    if (timer) {
      clearTimeout(timer);
      timer = 0;
    }
    timer = setTimeout(function () {
      var len = that.data.store.length;
      that.data.storeArr = [];
      for (var i = 0; i < len; i++) {
        if (that.data.store[i].stroeName.indexOf(searchVal) != -1) {
          that.data.storeArr.push(that.data.store[i]);
        }
      }
      that.setData({
        storeArr: that.data.storeArr
      })
    }, 500)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取门店数据
    var store = app.globalData.store;
    this.setData({ store: store})
    this.getStoreArr();
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