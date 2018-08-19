// pages/system_detail/system_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 优惠券
    discount:[
      { iconText: '优惠券', content: '订购送200元抵扣券' },
      { iconText: '到店礼', content:'到店即送精美水杯一个'},
    ],
    // 推荐套系
    recommend:[
      { title: '情人节专属套餐', price: '4588', desc: '造型：14套 | 拍摄：210张 | 精修：70张' },
      {title:'特惠套装',price:'2588',desc:'造型：7套 | 拍摄：150张 | 精修：70张'},
    ],
    scene: 
      {
        title: '时光邂逅',
        dress: '马路牙子',
        price: '1888',
        image: [
          { imgsrc: "http://images.xfwed.com/shop/photo/221/2216184.jpg", loading: false },
          { imgsrc: "http://images.xfwed.com/shop/photo/221/2216185.jpg", loading: false },
          { imgsrc: "http://images.xfwed.com/shop/photo/221/2216186.jpg", loading: false },
          { imgsrc: "http://images.xfwed.com/shop/photo/221/2216187.jpg", loading: false },
          { imgsrc: "http://images.xfwed.com/shop/photo/221/2216188.jpg", loading: false },
          { imgsrc: "http://images.xfwed.com/shop/photo/221/2216189.jpg", loading: false },
          { imgsrc: "http://images.xfwed.com/shop/photo/221/2216190.jpg", loading: false },
          { imgsrc: "http://images.xfwed.com/shop/photo/221/2216191.jpg", loading: false },
          { imgsrc: "http://images.xfwed.com/shop/photo/221/2216192.jpg", loading: false },
        ]
      },
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.imageArr();
    // this.wxParseData();
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