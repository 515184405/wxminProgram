// component/recommend/recommend.js
var WxParse = require('../../utils/wxParse/wxParse.js');
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    recommend: {
      type: "Array",
      value: "",
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
    wxParseData:function(){
      console.log(111)
    }
  },
})
