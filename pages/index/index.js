//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
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
  // 图片加载
  imageLoad:function(e){
    let index = e.target.dataset.index;
    let imgData = e.target.dataset.data+'.loading';
    var that = this;
    setTimeout(function(){
      that.setData({
        [imgData]: true
      })
      console.log(11)
    },1000)
  },
  onLoad: function () {
    this.setData({
      theme:app.globalData.theme,//主题色
      loading:app.globalData.loading,//默认加载图片
    })
  },
})
