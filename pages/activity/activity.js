// pages/activity/activity.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 优惠券
    discount: [],
    // 推荐套系
    recommend: [],
  },
  // 显示预约弹框
  showDialog: function () {
    this.appointment.showDialog();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.recommend(this);
    app.footer(this);
    app.discount(this);
    this.getActivity();
    this.setData({theme:app.globalData.theme})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.appointment = this.selectComponent("#appointment");
  },

  getActivity:function(){
    var that = this;
    app._Get('index/get_data', 'm/huodong/f/title,content', function (data) {
      if(data.length){
        that.setData({ content: data[0].content,title:data[0].title })
      }
      
     
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})