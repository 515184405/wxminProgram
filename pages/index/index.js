//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // 推荐套系
    recommend: [
      { title: '情人节专属套餐情人节专属套餐', image: 'http://images.xfwed.com/shop/photo/221/2216184.jpg', price: '4588', desc: '造型：14套 | 拍摄：210张 | 精修：70张', activity: '此活动赠送冰箱一台此活动赠送冰箱一台此活动赠送冰箱一台' },
      { title: '特惠套装特惠套装特惠套装特惠套装', image: 'http://images.xfwed.com/shop/photo/221/2216185.jpg', price: '2588', desc: '造型：7套 | 拍摄：150张 | 精修：70张' },
    ],
    // 优惠券
    discount: [
      { iconText: '', content: '到店领取情侣对戒一枚' },
    ],
    navArr:[
      { title: "客 照", image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4236226554,3005486819&fm=27&gp=0.jpg',openType:'switchTab',url:'/pages/case/case' },
      { title: '套 系', image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3931882706,576426697&fm=27&gp=0.jpg', openType: 'navigate', url: '/pages/department/department'},
      { title: '活 动', image: 'http://m.only1314.com/uploadfile/2018/0815/20180815012601292.jpg', openType: 'navigate', url: '/pages/activity/activity' },
      { title: '我 们', image: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1610349391,986729414&fm=27&gp=0.jpg', openType: 'navigate', url: '/pages/aboutUs/aboutUs' },
    ], 
    scene: [
      {
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
      },
      {
        title: '碧海蓝天',
        dress: '秦皇岛北戴河',
        price: '2388',
        image: [
          { imgsrc: 'http://img0.imgtn.bdimg.com/it/u=2548319164,1078741400&fm=26&gp=0.jpg', loading: false },
          { imgsrc: 'http://img4.imgtn.bdimg.com/it/u=1888978533,3210951581&fm=26&gp=0.jpg', loading: false },
          { imgsrc: 'http://img3.imgtn.bdimg.com/it/u=1271903594,4287480683&fm=26&gp=0.jpg', loading: false },
          { imgsrc: 'http://img5.imgtn.bdimg.com/it/u=4155514796,2768838487&fm=26&gp=0.jpg', loading: false },
          { imgsrc: 'http://img3.imgtn.bdimg.com/it/u=2274601529,2539830836&fm=26&gp=0.jpg', loading: false },
          { imgsrc: 'http://img1.imgtn.bdimg.com/it/u=3102191596,1107181335&fm=26&gp=0.jpg', loading: false },
          { imgsrc: 'http://img2.imgtn.bdimg.com/it/u=1420021963,3360030047&fm=26&gp=0.jpg', loading: false },
          { imgsrc: 'http://img1.imgtn.bdimg.com/it/u=4017693518,1626260265&fm=26&gp=0.jpg', loading: false },
          { imgsrc: 'http://img2.imgtn.bdimg.com/it/u=1013534295,3369857523&fm=26&gp=0.jpg', loading: false },
          { imgsrc: 'http://img4.imgtn.bdimg.com/it/u=2162474254,2757256366&fm=26&gp=0.jpg', loading: false },
        ]
      },
      {
        title: '花海 - 爱你的季节',
        dress: '秦皇岛北戴河',
        price: '1888',
        image: [
          { imgsrc: 'http://img1.imgtn.bdimg.com/it/u=573902861,2632632308&fm=26&gp=0.jpg', loading: false },
          { imgsrc: 'http://img5.imgtn.bdimg.com/it/u=1917150572,2134166181&fm=26&gp=0.jpg', loading: false },
          { imgsrc: 'http://img4.imgtn.bdimg.com/it/u=1469945670,3754862906&fm=26&gp=0.jpg', loading: false },
          { imgsrc: 'http://img5.imgtn.bdimg.com/it/u=1448446140,2230553981&fm=26&gp=0.jpg', loading: false },
          { imgsrc: 'http://img4.imgtn.bdimg.com/it/u=3703244151,2628636191&fm=26&gp=0.jpg', loading: false },
          { imgsrc: 'http://img1.imgtn.bdimg.com/it/u=2399700224,2583561969&fm=26&gp=0.jpg', loading: false },
          { imgsrc: 'http://img5.imgtn.bdimg.com/it/u=2762344903,1439268382&fm=26&gp=0.jpg', loading: false },
          { imgsrc: 'http://img4.imgtn.bdimg.com/it/u=166885346,1996468304&fm=26&gp=0.jpg', loading: false },
          { imgsrc: 'http://img3.imgtn.bdimg.com/it/u=2999788056,3431819161&fm=26&gp=0.jpg', loading: false },
          { imgsrc: 'http://img3.imgtn.bdimg.com/it/u=2417802683,1714474120&fm=26&gp=0.jpg', loading: false },
        ]
      },
      {
        title: '礼堂 - 爱的庄严',
        dress: '秦皇岛北戴河摄影基地',
        price: '3288',
        image: [
          { imgsrc: 'http://img5.imgtn.bdimg.com/it/u=2940298191,2980428066&fm=15&gp=0.jpg', loading: false },
          { imgsrc: 'http://img1.imgtn.bdimg.com/it/u=3719030059,3704280778&fm=15&gp=0.jpg', loading: false },
          { imgsrc: 'http://img2.imgtn.bdimg.com/it/u=2019171211,3766696415&fm=15&gp=0.jpg', loading: false },
          { imgsrc: 'http://img5.imgtn.bdimg.com/it/u=621161743,3590281198&fm=15&gp=0.jpg', loading: false },
          { imgsrc: 'http://img4.imgtn.bdimg.com/it/u=3307691358,317754040&fm=15&gp=0.jpg', loading: false },
          { imgsrc: 'http://img5.imgtn.bdimg.com/it/u=1254507308,159084273&fm=15&gp=0.jpg', loading: false },
          { imgsrc: 'http://img1.imgtn.bdimg.com/it/u=2946128382,1351554149&fm=15&gp=0.jpg', loading: false },
          { imgsrc: 'http://img1.imgtn.bdimg.com/it/u=1031653249,2705637294&fm=15&gp=0.jpg', loading: false },
          { imgsrc: 'http://img2.imgtn.bdimg.com/it/u=1003612578,403292786&fm=15&gp=0.jpg', loading: false },
          { imgsrc: 'http://img2.imgtn.bdimg.com/it/u=2950769225,3573438163&fm=15&gp=0.jpg', loading: false },
          { imgsrc: 'http://img4.imgtn.bdimg.com/it/u=2836995741,1948957127&fm=15&gp=0.jpg', loading: false },
          { imgsrc: 'http://img5.imgtn.bdimg.com/it/u=640422490,2267755867&fm=15&gp=0.jpg', loading: false },
          { imgsrc: 'http://img0.imgtn.bdimg.com/it/u=1009686827,2625811213&fm=15&gp=0.jpg', loading: false },
        ]
      }
    ],
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
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
    // this.recommend = this.selectComponent("#recommend");
    // this.recommend.wxParseData();
  }
})
