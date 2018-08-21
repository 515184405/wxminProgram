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
        console.log(news, olds)
      }
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
      setTimeout(function () {
        that.setData({
          [imgData]: true
        })
      }, 1000)
    },
  }
})
