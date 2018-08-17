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
      style: "font-weight:bold;color:" + this.data.theme + ";border-bottom:1px solid" + this.data.theme
    })
  },
  // 图片查看器
  wxParseImgTap : function(e) {
    var that = this;
    var nowImgUrl = e.target.dataset.src;
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
      { pic: "http://images.xfwed.com/shop/photo/221/2216184.jpg", height: 0 },
      { pic: "http://images.xfwed.com/shop/photo/221/2216185.jpg", height: 0 },
      { pic: "http://images.xfwed.com/shop/photo/221/2216186.jpg", height: 0 },
      { pic: "http://images.xfwed.com/shop/photo/221/2216187.jpg", height: 0 },
      { pic: "http://images.xfwed.com/shop/photo/221/2216188.jpg", height: 0 },
      { pic: "http://images.xfwed.com/shop/photo/221/2216189.jpg", height: 0 },
      { pic: "http://images.xfwed.com/shop/photo/221/2216190.jpg", height: 0 },
      { pic: "http://images.xfwed.com/shop/photo/221/2216191.jpg", height: 0 },
      { pic: "http://images.xfwed.com/shop/photo/221/2216192.jpg", height: 0 },      
      // { pic: "../../images/4.png", height: 0 },
      // { pic: "../../images/5.png", height: 0 },
      // { pic: "../../images/6.png", height: 0 },
      // { pic: "../../images/7.png", height: 0 },
      // { pic: "../../images/8.png", height: 0 },
      // { pic: "../../images/9.png", height: 0 },
      // { pic: "../../images/10.png", height: 0 },
      // { pic: "../../images/11.png", height: 0 },
      // { pic: "../../images/12.png", height: 0 },
      // { pic: "../../images/13.png", height: 0 },
      // { pic: "../../images/14.png", height: 0 }
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      theme:app.globalData.theme, //设置主题
      style: "font-weight:bold;color:" + app.globalData.theme + ";border-bottom:1px solid" + app.globalData.theme //设置当前tab选中样式
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
          imgWidth: imgWidth
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