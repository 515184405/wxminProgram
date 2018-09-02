// pages/department/department.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    footer:{},
    // 推荐套系
    recommend: [],
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.footer(this);
    this.getClass();
    this.setData({
      theme:app.globalData.theme
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //html转小程序代码
    // this.recommend = this.selectComponent("#recommend");
    // this.recommend.wxParseData();
    // this.recommend2 = this.selectComponent("#recommend2");
    // this.recommend2.wxParseData();
    // this.recommend3 = this.selectComponent("#recommend3");
    // this.recommend3.wxParseData();
   
  },
  recommend:function(type){
    var that = this;
    app._Get('index/get_data', 'm/taoxi/f/id,title,price,img,ext_param/w__type/'+type, function (data) {
      var rec = 'recommend['+type+']';
      that.setData({ [rec]: data });
    })
  },
  getClass: function () {
    var that = this;
    app._Get('index/config', 'f/jingxuan_class', function (data) {
      that.setData({ class_data: data.jingxuan_class});
      for (var i in data.jingxuan_class){
        that.recommend(data.jingxuan_class[i].id);
      }
     
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})