// pages/system_detail/system_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //footerBar数据 
    footerBar:{
      tel:15321353313,
    },
    // 优惠券
    discount:[
      { iconText: '优惠券', content: '订购送200元抵扣券' },
      { iconText: '到店礼', content:'到店即送精美水杯一个'},
    ],
    // 推荐套系
    recommend:[
      { title: '情人节专属套餐情人节专属套餐', image: 'http://images.xfwed.com/shop/photo/221/2216184.jpg', price: '4588', desc: '<p>造型：14套 | 拍摄：210张 | 精修：70张</p><p>此活动赠送冰箱一台此活动赠送冰箱一台此活动赠送冰箱一台</p>' },
      { title: '特惠套装特惠套装特惠套装特惠套装', image:'http://images.xfwed.com/shop/photo/221/2216185.jpg', price: '2588', desc:'<p>造型：7套 | 拍摄：150张 | 精修：70张</p>'},
    ],
    scene: {
        title: '时光邂逅--客片欣赏 冯先生&赵女士',
        dress: '3699taoxi',
        price: '2888',
        image: [
          { imgsrc: 'http://img2.imgtn.bdimg.com/it/u=286677759,1556790083&fm=26&gp=0.jpg', loading: false },
          { imgsrc: 'http://img1.imgtn.bdimg.com/it/u=1054017249,1476043288&fm=26&gp=0.jpg', loading: false },
          { imgsrc: 'http://img4.imgtn.bdimg.com/it/u=2684238956,2434316358&fm=26&gp=0.jpg', loading: false },
          { imgsrc: 'http://img3.imgtn.bdimg.com/it/u=4192590352,1079796267&fm=26&gp=0.jpg', loading: false },
          { imgsrc: 'http://img4.imgtn.bdimg.com/it/u=1990083140,1871542088&fm=26&gp=0.jpg', loading: false },
          { imgsrc: 'http://img1.imgtn.bdimg.com/it/u=3141573913,443875710&fm=26&gp=0.jpg', loading: false },
          { imgsrc: 'http://img3.imgtn.bdimg.com/it/u=3003797967,4242511948&fm=26&gp=0.jpg', loading: false },
          { imgsrc: 'http://img5.imgtn.bdimg.com/it/u=2326877116,2718696881&fm=26&gp=0.jpg', loading: false },
          { imgsrc: 'http://img0.imgtn.bdimg.com/it/u=1586298711,2677183515&fm=26&gp=0.jpg', loading: false },
        ]
      }
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
    this.imageArr();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //html转小程序代码
    this.recommend = this.selectComponent("#recommend");
    this.recommend.wxParseData();

    this.appointment = this.selectComponent("#appointment");
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