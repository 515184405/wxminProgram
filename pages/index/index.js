//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // 推荐套系
    recommend: [
      { title: '情人节专属套餐情人节专属套餐', image: 'http://images.xfwed.com/shop/photo/221/2216184.jpg', price: '4588', desc: '<p>造型：14套 | 拍摄：210张 | 精修：70张</p><p>此活动赠送冰箱一台此活动赠送冰箱一台此活动赠送冰箱一台</p>' },
      { title: '特惠套装特惠套装特惠套装特惠套装', image: 'http://images.xfwed.com/shop/photo/221/2216185.jpg', price: '2588', desc: '<p>造型：7套 | 拍摄：150张 | 精修：70张</p>' },
    ],
    // 优惠券
    discount: [
      { iconText: '', content: '到店领取情侣对戒一枚' },
    ],
    navArr:[
      { title: "客 照", image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4236226554,3005486819&fm=27&gp=0.jpg',openType:'switchTab',url:'/pages/case/case' },
      { title: '样 照', image: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1610349391,986729414&fm=27&gp=0.jpg', openType: 'switchTab', url: '/pages/case/case'  },
      { title: '套 系', image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3931882706,576426697&fm=27&gp=0.jpg'},
      { title: '活 动', image: 'http://m.only1314.com/uploadfile/2018/0815/20180815012601292.jpg' },
    ],
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    scene:[
      {
        title:'时光邂逅',
        dress:'马路牙子',
        price:'1888',
        image:[
          { imgsrc:"http://images.xfwed.com/shop/photo/221/2216184.jpg",loading:false},
          { imgsrc:"http://images.xfwed.com/shop/photo/221/2216185.jpg",loading: false},
          { imgsrc:"http://images.xfwed.com/shop/photo/221/2216186.jpg", loading: false},
          { imgsrc:"http://images.xfwed.com/shop/photo/221/2216187.jpg", loading: false},
          { imgsrc:"http://images.xfwed.com/shop/photo/221/2216188.jpg", loading: false},
          { imgsrc:"http://images.xfwed.com/shop/photo/221/2216189.jpg", loading: false},
          { imgsrc:"http://images.xfwed.com/shop/photo/221/2216190.jpg", loading: false},
          { imgsrc:"http://images.xfwed.com/shop/photo/221/2216191.jpg", loading: false},
          { imgsrc:"http://images.xfwed.com/shop/photo/221/2216192.jpg", loading: false},
        ]
      },
      {
        title: '碧海蓝天',
        dress: '秦皇岛北戴河',
        price: '2388',
        image: [
          { imgsrc:"http://images.xfwed.com/shop/photo/221/2216686.jpg",loading:false},
          { imgsrc:"http://images.xfwed.com/shop/photo/221/2216687.jpg",loading:false},
          { imgsrc:"http://images.xfwed.com/shop/photo/221/2216688.jpg",loading:false},
          { imgsrc:"http://images.xfwed.com/shop/photo/221/2216689.jpg",loading:false},
          { imgsrc:"http://images.xfwed.com/shop/photo/221/2216690.jpg",loading:false},
          { imgsrc:"http://images.xfwed.com/shop/photo/221/2216691.jpg",loading:false},
          { imgsrc:"http://images.xfwed.com/shop/photo/221/2216692.jpg",loading:false},
          { imgsrc:"http://images.xfwed.com/shop/photo/221/2216693.jpg",loading:false},
          { imgsrc:"http://images.xfwed.com/shop/photo/221/2216694.jpg",loading:false},
          { imgsrc:"http://images.xfwed.com/shop/photo/221/2216695.jpg",loading:false},
          { imgsrc:"http://images.xfwed.com/shop/photo/221/2216696.jpg",loading:false},
          { imgsrc:"http://images.xfwed.com/shop/photo/221/2216697.jpg",loading:false},        
        ]
      },
      {
        title: '花海 - 爱你的季节',
        dress: '秦皇岛北戴河',
        price: '1588',
        image: [
          { imgsrc:"http://images.xfwed.com/shop/photo/221/2216678.jpg",loading:false},
          { imgsrc:"http://images.xfwed.com/shop/photo/221/2216679.jpg",loading:false},
          { imgsrc:"http://images.xfwed.com/shop/photo/221/2216680.jpg",loading:false},
          { imgsrc:"http://images.xfwed.com/shop/photo/221/2216681.jpg",loading:false},
          { imgsrc:"http://images.xfwed.com/shop/photo/221/2216682.jpg",loading:false},
          { imgsrc:"http://images.xfwed.com/shop/photo/221/2216683.jpg",loading:false},
          { imgsrc:"http://images.xfwed.com/shop/photo/221/2216684.jpg",loading:false},
          { imgsrc:"http://images.xfwed.com/shop/photo/221/2216685.jpg",loading:false},        
        ]
      },
    ],
    indicatorDots: true,
    autoplay: true,
    circular:true,
    interval: 5000,
    duration: 1000
  },
  // 显示预约弹框
  showDialog: function () {
    this.appointment = this.selectComponent("#appointment");
    this.appointment.showDialog();
    console.log(111)
  },
  onLoad: function () {
    this.setData({
      theme:app.globalData.theme,//主题色
      loading:app.globalData.loading,//默认加载图片
    })
  },
  onReady:function(){
    //html转小程序代码
    this.recommend = this.selectComponent("#recommend");
    this.recommend.wxParseData();
  }
})
