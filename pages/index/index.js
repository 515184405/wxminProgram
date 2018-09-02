//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // 推荐套系
    recommend: [],
    navArr:[
      { title: "客 照", image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4236226554,3005486819&fm=27&gp=0.jpg',openType:'switchTab',url:'/pages/case/case' },
      { title: '套 系', image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3931882706,576426697&fm=27&gp=0.jpg', openType: 'navigateTo', url: '/pages/department/department'},
      { title: '活 动', image: 'http://m.only1314.com/uploadfile/2018/0815/20180815012601292.jpg', openType: 'navigateTo', url: '/pages/activity/activity' },
      { title: '我 们', image: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1610349391,986729414&fm=27&gp=0.jpg', openType: 'navigateTo', url: '/pages/aboutUs/aboutUs' }
    ], 
    scene: [],
    imgUrls: [],
    footer:{},
    indicatorDots: true,
    autoplay: true,
    circular:true,
    interval: 5000,
    duration: 1000
  },

  onLoad: function () {
    
    var that = this;
    this.setData({ store_name: app.globalData.store_name })
    this.getimgUrls();
    this.scene();
    app.recommend(this);
    app.footer(this);
  
    // 判断首页是否需要授权
    if (app.globalData.indexAuthority && !app.globalData.userInfo) {
      // 查看是否授权
      wx.getSetting({
        success: function (res) {
          if (!res.authSetting['scope.userInfo']) {
            var page = getCurrentPages();
            var route = page.pop().__route__;
            wx.redirectTo({
              url: '/pages/login/login?route=' + route,
            })
          }
        }
      })
    }    

    (app.globalData.scope || !app.globalData.indexAuthority) && app.setStore();

    this.setData({
      theme:app.globalData.theme,//主题色
      loading:app.globalData.loading,//默认加载图片
      isSelectStore : app.globalData.isSelectStore,//是否需要门店选择
    })
  },
  onReady:function(){
    //html转小程序代码
    // this.recommend = this.selectComponent("#recommend");
    // this.recommend.wxParseData();
  },
  // 轮播
  getimgUrls:function(){
   var that = this;
    app._Get('index/get_data', 'm/lunbo/f/img',function(data){
      
      var imgUrls = new Array();
      for(var i in data){
        imgUrls[i] = data[i].img; 
      }
      that.setData({ imgUrls: imgUrls})
    })
  },
  //场景案例
  scene: function () {
    var that = this;
    app._Get('index/get_data', 'm/anli/w__is_index/1/f/id,title,price,imgs,remark as dress/o/sort@asc/l/3', function (data) {
      //   console.log(data);
      that.setData({ scene: data })
    })
  },
  goto:function(e){
    console.log(e);
    app.goto(e.currentTarget.dataset);
  }
})
