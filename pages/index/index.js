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
          "http://images.xfwed.com/shop/photo/221/2216184.jpg",
          "http://images.xfwed.com/shop/photo/221/2216185.jpg",
          "http://images.xfwed.com/shop/photo/221/2216186.jpg",
          "http://images.xfwed.com/shop/photo/221/2216187.jpg",
          "http://images.xfwed.com/shop/photo/221/2216188.jpg",
          "http://images.xfwed.com/shop/photo/221/2216189.jpg",
          "http://images.xfwed.com/shop/photo/221/2216190.jpg",
          "http://images.xfwed.com/shop/photo/221/2216191.jpg",
          "http://images.xfwed.com/shop/photo/221/2216192.jpg"
        ]
      },
      {
        title: '碧海蓝天',
        dress: '秦皇岛北戴河',
        price: '2388',
        image: [
          "http://images.xfwed.com/shop/photo/221/2216686.jpg",
          "http://images.xfwed.com/shop/photo/221/2216687.jpg",
          "http://images.xfwed.com/shop/photo/221/2216688.jpg",
          "http://images.xfwed.com/shop/photo/221/2216689.jpg",
          "http://images.xfwed.com/shop/photo/221/2216690.jpg",
          "http://images.xfwed.com/shop/photo/221/2216691.jpg",
          "http://images.xfwed.com/shop/photo/221/2216692.jpg",
          "http://images.xfwed.com/shop/photo/221/2216693.jpg",
          "http://images.xfwed.com/shop/photo/221/2216694.jpg",
          "http://images.xfwed.com/shop/photo/221/2216695.jpg",
          "http://images.xfwed.com/shop/photo/221/2216696.jpg",
          "http://images.xfwed.com/shop/photo/221/2216697.jpg"
        ]
      },
      {
        title: '花海 - 爱你的季节',
        dress: '秦皇岛北戴河',
        price: '1588',
        image: [
          "http://images.xfwed.com/shop/photo/221/2216678.jpg",
          "http://images.xfwed.com/shop/photo/221/2216679.jpg",
          "http://images.xfwed.com/shop/photo/221/2216680.jpg",
          "http://images.xfwed.com/shop/photo/221/2216681.jpg",
          "http://images.xfwed.com/shop/photo/221/2216682.jpg",
          "http://images.xfwed.com/shop/photo/221/2216683.jpg",
          "http://images.xfwed.com/shop/photo/221/2216684.jpg",
          "http://images.xfwed.com/shop/photo/221/2216685.jpg"
        ]
      },
    ],
    indicatorDots: true,
    autoplay: true,
    circular:true,
    interval: 5000,
    duration: 1000
  },
  onLoad: function () {
    this.setData({
      theme:app.globalData.theme,//主题色
    })
  },
})
