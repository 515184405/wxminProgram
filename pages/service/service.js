// pages/service/service.js

const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    aboutme_bg:'http://pic.58pic.com/58pic/13/10/21/04958PICCy5_1024.jpg',
    service:[],
    about:{}
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('user');
    this.setData({
      theme:app.globalData.theme
    })
    this.service();
    this.about();
    app.footer(this);
  },
  service:function(){
    var that = this;
    app._Get('index/get_data', 'm/kefu/f/name,tel,headpic,flat/u/headpic', function (data) {
      for(var i in data){
        data[i].avatar = data[i].headpic;
      }
      that.setData({ service: data })
    })
  },
  about: function () {
    var that = this;
    app._Get('index/get_data', 'm/about/l/1/o/id@desc/f/email,imgs,map,map_address,qq,tel/u/imgs', function (data) {
       that.setData({ about: data[0] })
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})