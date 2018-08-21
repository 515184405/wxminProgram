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
    },
    titleShow:{
      type:'Boolean',
      value:'true',
    },
    titleText:{
      type:"String",
      value:"套餐推荐"
    },
    titleStyle: {
      type: "String",
      value: ""
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
      var that = this, len = this.data.recommend.length;
      for (let i = 0; i < len; i++) {
        WxParse.wxParse('reply' + i, 'html', this.data.recommend[i].desc, that);
        if (i === len - 1) {
          WxParse.wxParseTemArray("replyTemArray", 'reply', len, that)
        }
      }
    }
  },
})
