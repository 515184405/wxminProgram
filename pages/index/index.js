//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // 推荐套系
    recommend: [],
    navArr:[], 
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
    this.daohang();
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
    app._Get('index/get_data', 'm/lunbo/f/img/u/img',function(data){
      
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
    app._Get('index/get_data', 'm/anli/w__is_index/1/f/id,title,price,imgs,remark as dress/o/sort@asc/l/3/u/imgs', function (data) {
    
      for(var i in data){
        var imgs = data[i].imgs;
        data[i].image = app.parseImg(imgs);
      }
      
      that.setData({ scene: data })
    })
  },
  //导航
  daohang: function () {
    var that = this;
    app._Get('index/get_data', 'm/daohang/f/id,title,url,img/u/img', function (data) {
       for(var i in data){
         var k = data[i].url.split("@");
         data[i].url = k[0];
         data[i].openType = k[1];
         data[i].image = data[i].img;
       }
        // console.log(data);
      that.setData({ navArr: data })
    })
  },
  goto:function(e){
    console.log(e);
    app.goto(e.currentTarget.dataset);
  }
})
