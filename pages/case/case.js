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
    classify1:[
      { 
        id: 1,
        title: '婚纱'
      },
      {
        id:2,
        title:'写真'
      },
      {
        id:3,
        title:'儿童'
      },
      {
        id: 4,
        title: '其他'
      }
    ],
    // 附筛选条件
    classify2:[
      { id: '1', title: '唯美' },
      { id: '2', title: '复古' },
      { id: '3', title: '故事' },
      { id: '4', title: '另类' },
      { id: '5', title: '大气' },
      { id: '6', title: '爱情' },
      { id: '7', title: '个性' },
    ],
    // 客片信息
    scene: [
      {
        title: '时光邂逅--客片欣赏 冯先生&赵女士',
        dress: '3699taoxi',
        price: '',
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
        price: '',
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
        price: '',
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
        price: '',
        image:[
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
    scenePage:1,
    sceneCount:3,
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
  },
  // 提交按钮功能
  submitFun: function () {
    let strfilter = 'filterData.filter';    
    this.setData({
      [strfilter]: false,
    })
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
  loadImages: function () {
    let images = [
      { pic: 'http://img2.imgtn.bdimg.com/it/u=286677759,1556790083&fm=26&gp=0.jpg', height: 0 },
      { pic: 'http://img1.imgtn.bdimg.com/it/u=1054017249,1476043288&fm=26&gp=0.jpg', height: 0 },
      { pic: 'http://img4.imgtn.bdimg.com/it/u=2684238956,2434316358&fm=26&gp=0.jpg', height: 0 },
      { pic: 'http://img3.imgtn.bdimg.com/it/u=4192590352,1079796267&fm=26&gp=0.jpg', height: 0 },
      { pic: 'http://img4.imgtn.bdimg.com/it/u=1990083140,1871542088&fm=26&gp=0.jpg', height: 0 },
      { pic: 'http://img1.imgtn.bdimg.com/it/u=3141573913,443875710&fm=26&gp=0.jpg', height: 0 },
      { pic: 'http://img3.imgtn.bdimg.com/it/u=3003797967,4242511948&fm=26&gp=0.jpg', height: 0 },
      { pic: 'http://img5.imgtn.bdimg.com/it/u=2326877116,2718696881&fm=26&gp=0.jpg', height: 0 },
      { pic: 'http://img0.imgtn.bdimg.com/it/u=1586298711,2677183515&fm=26&gp=0.jpg', height: 0 },
      { pic: 'http://img4.imgtn.bdimg.com/it/u=927024874,3409247806&fm=11&gp=0.jpg', height: 0 },
      { pic: 'http://img0.imgtn.bdimg.com/it/u=678917998,1986864878&fm=26&gp=0.jpg', height: 0 },
      { pic: 'http://img2.imgtn.bdimg.com/it/u=863334768,3951465678&fm=26&gp=0.jpg', height: 0 },
      { pic: 'http://img4.imgtn.bdimg.com/it/u=1480732384,790274052&fm=26&gp=0.jpg', height: 0 },
      { pic: 'http://img1.imgtn.bdimg.com/it/u=731299135,4028385160&fm=26&gp=0.jpg', height: 0 },
      { pic: 'http://img3.imgtn.bdimg.com/it/u=2836557333,2058143530&fm=26&gp=0.jpg', height: 0 },
      { pic: 'http://img5.imgtn.bdimg.com/it/u=4003118724,494246661&fm=26&gp=0.jpg', height: 0 },
      { pic: 'http://img4.imgtn.bdimg.com/it/u=2724163625,2768374455&fm=26&gp=0.jpg', height: 0 },
      { pic: 'http://img1.imgtn.bdimg.com/it/u=758291606,1456528031&fm=26&gp=0.jpg', height: 0 },
      { pic: 'http://img1.imgtn.bdimg.com/it/u=2123654397,634665358&fm=26&gp=0.jpg', height: 0 },
      { pic: 'http://img5.imgtn.bdimg.com/it/u=1101351412,621663631&fm=26&gp=0.jpg', height: 0 },
      { pic: 'http://img0.imgtn.bdimg.com/it/u=1159806221,2260067311&fm=26&gp=0.jpg', height: 0 },
      { pic: 'http://img2.imgtn.bdimg.com/it/u=3477704411,772244421&fm=26&gp=0.jpg', height: 0 },
      { pic: 'http://img4.imgtn.bdimg.com/it/u=3754638307,4051770475&fm=26&gp=0.jpg', height: 0 },
    ];

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
    // 执行代码
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('case');    
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

        //加载首组图片
        this.loadImages();
      }
    })
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