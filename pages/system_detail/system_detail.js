// pages/system_detail/system_detail.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //footerBar数据 
    footerBar:{
      tel:'',
    },
    // 优惠券
    discount:[],
    // 推荐套系
    recommend:[],
    scene: {}
  },
  // 生成图片数组
  imageArr : function(){
    var len = this.data.scene.image.length;
    var imageArr = [];
    for(var i = 0; i < len; i++){
      imageArr.push(this.data.scene.image[i].imgsrc);
    }
    this.setData({
      imageArr:imageArr
    })
  },
  // 图片查看器
  wxParseImgTap: function (e) {
    var that = this;
    var nowImgUrl = e.target.dataset.src;
    wx.previewImage({
      current: nowImgUrl, // 当前显示图片的http链接
      urls: that.data.imageArr // 需要预览的图片http链接列表
    })
  }, 

  // 显示预约弹框
  showDialog:function(){
    this.appointment.showDialog();
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
    app.recommend(this);
    app.discount(this);
    this.scene(id);
    app.defualt_kefu(this);
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //html转小程序代码
    // this.recommend = this.selectComponent("#recommend");
    // this.recommend.wxParseData();

    this.appointment = this.selectComponent("#appointment");
  },
  scene: function (id) {
    var that = this;
    app._Get('index/get_data', 'm/anli/w__id/' + id +'/f/title,price,imgs,remark as dress', function (data) {
      //   console.log(data);
      that.setData({ scene: data })
      that.imageArr();
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})