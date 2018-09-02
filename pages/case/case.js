// pages/case/case.js

const app = getApp();
let col1H = 0;
let col2H = 0;
let imgSrcArr = [];
let prevScrollTop = 0;
let timer = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //主筛选条件
    classify:[
      {id:1,title:'最新客片'},
      {id:2,title:'精选样片'}
    ],
    classify1:[],
    // 附筛选条件
    classify2:[],
    // 客片信息
    scene: [],
    scenePage:1,
    sceneCount:3,
    sceneEndStatus:false,
    filterData:{
      filter: false, //是否显示筛选内容
      filterIfShow: 0,//显示当前的全部筛选条件
    },
    searchClass:'',//search-show
    scrollTopShow:'',//scrollTop-show
    scrollTop:0,//置顶
    // 搜索内容
    searchVal:'',
    //tab切换
    currentTab:0,
    // 图片懒加载模块
    loadImagesEndStatus:false,
    loadImagesPage: 1,
    loadImagesCount: 10,
    imgLoadData:{
      scrollH: 0,
      imgWidth: 0,
      loadingCount: 0,
      images: [],
      col1: [],
      col2: []
    }
  },
  // 显示筛选模块
  showFilter: function () {
    let strfilter = 'filterData.filter';
    this.setData({
      [strfilter]: true,
    })
  },
  // 隐藏筛选模块
  hideFilter: function () {
    let strfilter = 'filterData.filter';
    this.setData({
      [strfilter]: false,
    })
  },
  //条件筛选
  setFilterFun: function (e) {
    //学科筛选
    let strtype = 'filterData.type';
    let strstyle = 'filterData.style';
    if (e.currentTarget.dataset.key == 'type') {
      this.setData({
        [strtype]: e.currentTarget.dataset.value
      })
    }
    //省份筛选
    if (e.currentTarget.dataset.key == 'style') {
      this.setData({
        [strstyle]: e.currentTarget.dataset.value
      })
    }

    
  },
  //是否显示当前的全部筛选条件
  tabFilterIf: function (event) {
    var index = event.currentTarget.dataset.index;
    var filterifshow = this.data.filterData.filterIfShow == index ? 0 : index;
    let strfilterIfShow = 'filterData.filterIfShow';
    console.log(filterifshow)
      this.setData({
        [strfilterIfShow]: filterifshow
      })
  }, 
  // 重置按钮功能
  resetFun: function () {
    let strtype = 'filterData.type';
    let strstyle = 'filterData.style';
    let strfilter = 'filterData.filter';
    this.setData({
      [strtype] : 0,
      [strstyle] : 0,
      [strfilter]: false,
    })

    //清除原有的精选样片数据
    let imgLoadData = { scrollH: 0, imgWidth: 0, loadingCount: 0, images: [], col1: [], col2: [] };
    this.setData({ imgLoadData: imgLoadData, loadImagesEndStatus: false, loadImagesPage: 1 });
    this.loadImages(true);
  },
  // 提交按钮功能
  submitFun: function () {
    let strfilter = 'filterData.filter';    
    this.setData({
      [strfilter]: false,
    })

    //清除原有的精选样片数据
    let imgLoadData = { scrollH: 0, imgWidth: 0, loadingCount: 0, images: [], col1: [], col2: [] };
    this.setData({ imgLoadData: imgLoadData, loadImagesEndStatus: false, loadImagesPage: 1 });
    this.loadImages(true);
  },
  // tab切换方法
  tabNavFun:function(e){
    var index = e.currentTarget.dataset.index;
    this.setData({
      currentTab:index,
      style: "color:" + this.data.theme + ";border-bottom:1px solid" + this.data.theme
    })
  },
  swiperTab:function(e){
    var that = this;
    that.setData({ currentTab: e.detail.current });
  },
  // 图片查看器
  wxParseImgTap : function(e) {
    var that = this;
    var nowImgUrl = e.target.dataset.src;
    console.log(nowImgUrl)
    wx.previewImage({
      current: nowImgUrl, // 当前显示图片的http链接
      urls: that.data.imgLoadData.imgSrcArr // 需要预览的图片http链接列表
    })
  },
  //置顶
  goTop:function(){
    this.setData({
      scrollTop : 0,
    })
  },
  // 瀑布流代码
  onImageLoad: function (e) {
    let imageId = e.currentTarget.id;
    let oImgW = e.detail.width;         //图片原始宽度
    let oImgH = e.detail.height;        //图片原始高度
    let imgSrc = e.target.dataset.src;
    let imgWidth = this.data.imgWidth;  //图片设置的宽度
    let scale = imgWidth / oImgW;        //比例计算
    let imgHeight = oImgH * scale;      //自适应高度
    imgSrcArr.push(imgSrc);

    let images = this.data.imgLoadData.images;
    let imageObj = null;

    for (let i = 0; i < images.length; i++) {
      let img = images[i];
      if (img.id === imageId) {
        imageObj = img;
        break;
      }
    }

    imageObj.height = imgHeight;
    let loadingCount = this.data.imgLoadData.loadingCount - 1;
    let col1 = this.data.imgLoadData.col1;
    let col2 = this.data.imgLoadData.col2;

    //判断当前图片添加到左列还是右列
    if (col1H <= col2H) {
      col1H += imgHeight;
      col1.push(imageObj);
    } else {
      col2H += imgHeight;
      col2.push(imageObj);
    }
    var strloadingCount = 'imgLoadData.loadingCount',
        strcol1 = 'imgLoadData.col1',
        strcol2 = 'imgLoadData.col2',
        strimgSrcArr = 'imgLoadData.imgSrcArr',
        strimages = 'imgLoadData.images';

    //当前这组图片已加载完毕，则清空图片临时加载区域的内容
    if (!loadingCount) {
      this.setData({
        [strimages] : []
      });
    }

    this.setData({
      [strloadingCount]: loadingCount,
      [strcol1]: col1,
      [strcol2]: col2,
      [strimgSrcArr]:imgSrcArr,
    });
  },
  // 滚动方法
  scrollFun:function(e){
    var that = this;
    var scrollTop = e.detail.scrollTop;
    if (timer) {
      clearTimeout(timer);
      timer = 0;
    }
    timer = setTimeout(function () {

      var searchClass = (scrollTop > prevScrollTop && scrollTop > 100) ? 'search-show' : '';
      var scrollTopShow = scrollTop > 500 ? 'scrollTop-show' : '';
      that.setData({
        searchClass: searchClass,
        scrollTopShow: scrollTopShow,
      })
      prevScrollTop = scrollTop;
    },20)
  },
  //下拉加载
  parseImages: function (images) {
    // let images = [
    //   { pic: 'http://img2.imgtn.bdimg.com/it/u=286677759,1556790083&fm=26&gp=0.jpg', height: 0 },
    //   { pic: 'http://img1.imgtn.bdimg.com/it/u=1054017249,1476043288&fm=26&gp=0.jpg', height: 0 },
    //   { pic: 'http://img4.imgtn.bdimg.com/it/u=2684238956,2434316358&fm=26&gp=0.jpg', height: 0 },
    //   { pic: 'http://img3.imgtn.bdimg.com/it/u=4192590352,1079796267&fm=26&gp=0.jpg', height: 0 },
    //   { pic: 'http://img4.imgtn.bdimg.com/it/u=1990083140,1871542088&fm=26&gp=0.jpg', height: 0 },
    //   { pic: 'http://img1.imgtn.bdimg.com/it/u=3141573913,443875710&fm=26&gp=0.jpg', height: 0 },
    //   { pic: 'http://img3.imgtn.bdimg.com/it/u=3003797967,4242511948&fm=26&gp=0.jpg', height: 0 },
    //   { pic: 'http://img5.imgtn.bdimg.com/it/u=2326877116,2718696881&fm=26&gp=0.jpg', height: 0 },
    //   { pic: 'http://img0.imgtn.bdimg.com/it/u=1586298711,2677183515&fm=26&gp=0.jpg', height: 0 },
    //   { pic: 'http://img4.imgtn.bdimg.com/it/u=927024874,3409247806&fm=11&gp=0.jpg', height: 0 },
    //   { pic: 'http://img0.imgtn.bdimg.com/it/u=678917998,1986864878&fm=26&gp=0.jpg', height: 0 },
    //   { pic: 'http://img2.imgtn.bdimg.com/it/u=863334768,3951465678&fm=26&gp=0.jpg', height: 0 },
    //   { pic: 'http://img4.imgtn.bdimg.com/it/u=1480732384,790274052&fm=26&gp=0.jpg', height: 0 },
    //   { pic: 'http://img1.imgtn.bdimg.com/it/u=731299135,4028385160&fm=26&gp=0.jpg', height: 0 },
    //   { pic: 'http://img3.imgtn.bdimg.com/it/u=2836557333,2058143530&fm=26&gp=0.jpg', height: 0 },
    //   { pic: 'http://img5.imgtn.bdimg.com/it/u=4003118724,494246661&fm=26&gp=0.jpg', height: 0 },
    //   { pic: 'http://img4.imgtn.bdimg.com/it/u=2724163625,2768374455&fm=26&gp=0.jpg', height: 0 },
    //   { pic: 'http://img1.imgtn.bdimg.com/it/u=758291606,1456528031&fm=26&gp=0.jpg', height: 0 },
    //   { pic: 'http://img1.imgtn.bdimg.com/it/u=2123654397,634665358&fm=26&gp=0.jpg', height: 0 },
    //   { pic: 'http://img5.imgtn.bdimg.com/it/u=1101351412,621663631&fm=26&gp=0.jpg', height: 0 },
    //   { pic: 'http://img0.imgtn.bdimg.com/it/u=1159806221,2260067311&fm=26&gp=0.jpg', height: 0 },
    //   { pic: 'http://img2.imgtn.bdimg.com/it/u=3477704411,772244421&fm=26&gp=0.jpg', height: 0 },
    //   { pic: 'http://img4.imgtn.bdimg.com/it/u=3754638307,4051770475&fm=26&gp=0.jpg', height: 0 },
    // ];
    console.log(images);
    let baseId = "img-" + (+new Date());

    for (let i = 0; i < images.length; i++) {
      images[i].id = baseId + "-" + i;
    }
    var strloadingCount = 'imgLoadData.loadingCount',
        strimages = 'imgLoadData.images';
    this.setData({
      [strloadingCount]: images.length,
      [strimages]: images
    });
  },
  // 样片搜索内容
  searchContent:function(e){
    var searchVal = e.detail.searchVal;
    console.log(searchVal);
  },
  // 客片下拉加载更多
  addSceneArr:function(){
    var that = this;
    // 懒加载内容模块
    this.scene()
    // 执行代码
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.scene();  
    //加载首组图片
    this.loadImages();
    this.getClass();  //获取分类风格列表
    this.setData({
      theme:app.globalData.theme, //设置主题
      style: "color:" + app.globalData.theme + ";border-bottom:1px solid" + app.globalData.theme //设置当前tab选中样式
    })

    // 获取设备信息
    wx.getSystemInfo({
      success: (res) => {
        let ww = res.windowWidth;
        let wh = res.windowHeight;
        let imgWidth = ww * 0.48;
        let scrollH = wh;

        this.setData({
          scrollH: scrollH,
          imgWidth: imgWidth,
          winWidth: wh,
        });

        
      }
    })
  },
  //场景案例
  scene: function () {
    var that = this;
    //已经到底啦
    if (this.data.sceneEndStatus === true){
      return;
    }
    var page = this.data.scenePage,count = this.data.sceneCount,start = (page-1)*count;
    this.setData({ scenePage:++page});
    app._Get('index/get_data', 'm/anli/f/id,title,price,imgs,remark as dress/o/sort@asc/l/'+start+","+count, function (data) {
      var scene = that.data.scene;
      if (!data.length){
        that.data.sceneEndStatus = true;
        that.endMessage();
        return;
      }
      scene = scene.concat(data);
      that.setData({ scene: scene })
    })
  },
  //场景案例
  loadImages: function () {
    
    var that = this;
    //已经到底啦
    if (this.data.loadImagesEndStatus === true) {
      return;
    }
    var page = this.data.loadImagesPage, count = this.data.loadImagesCount, start = (page - 1) * count;
    this.setData({ loadImagesPage: ++page });
    var param = 'm/jingxuan/f/image/o/sort@asc/l/' + start + "," + count;
    //判断分类条件
    if (this.data.filterData.type !== undefined && this.data.filterData.type){
      param += "/w__class/" + this.data.filterData.type;
    }
    //判断风格条件
    if (this.data.filterData.style !== undefined && this.data.filterData.style) {
      param += "/w__fengge/" + this.data.filterData.style;
    }

    app._Get('index/get_data',param, function (data) {
     console.log(data);
      if (!data.length) {
        that.data.loadImagesEndStatus = true;
        that.endMessage();
        return;
      }

      let images = [];
      for(var i in data){
        images[i] = { pic: data[i].image, height:0} ;
      }
      that.parseImages(images);
    })
  },
  getClass:function(){
    var that = this;
    app._Get('index/config','f/jingxuan_class,jingxuan_fengge', function (data) {
      that.setData({ classify1: data.jingxuan_class, classify2: data.jingxuan_fengge})
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  endMessage:function(){
    wx.showToast({
      title: '我是有底线的',
      icon: 'none',
      duration: 2000
    })
  }
})