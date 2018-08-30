// component/list_1/list_1.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    scene:{
      type:"Array",
      value:[],
      observer: function (news, olds, path) {
      }
    },
    types:{
      type:'Number',
      value:3 //1,2,3,6,9款样式
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 图片加载
    imageLoad: function (e) {
      let index = e.target.dataset.index;
      let imgData = e.target.dataset.data + '.loading';
      var that = this;
      that.setData({
        [imgData]: true
      })
    },
    // 图片查看器
    wxParseImgTap: function (e) {
      var that = this;
      var nowImgUrl = e.currentTarget.dataset.src;
      var index = e.currentTarget.dataset.index;
      var keyindex = e.currentTarget.dataset.keyindex;
      if(keyindex == (this.data.types - 1)) return false;
      var arr = this.data.scene[index].image;
      var len = arr.length;
      var arrBigImg = [];
      for(var i = 0; i < len;i++){
        arrBigImg.push(arr[i].imgsrc);
      }
      wx.previewImage({
        current: nowImgUrl, // 当前显示图片的http链接
        urls: arrBigImg // 需要预览的图片http链接列表
      })
    },
  }
})
