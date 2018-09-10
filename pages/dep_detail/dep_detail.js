
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
    //详情
    depObj : {},
  },
  // 显示预约弹框
  showDialog: function () {
    this.appointment.showDialog();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
    this.setData({
      theme: app.globalData.theme
    })
    app.discount(this);
    app.recommend(this);
    this.get_info(id);
    app.footer(this);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.appointment = this.selectComponent("#appointment");
  },
  get_info:function(id){
    var that = this;
    app._Get('index/get_data', 'm/taoxi/u/img/w__id/'+id, function (data) {
        console.log(data);
      data.image = data.img;
      data.cust_price = data.y_price;
      data.price = data.price;
      that.setData({ depObj: data })
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})