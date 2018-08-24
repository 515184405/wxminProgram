// component/recommend/recommend.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    discount: {
      type: "Array",
      value: "",
      observer: function (news, olds, path) {
        // console.log(news, olds)
      }
    },
    rightIcon:{
      type:"Boolean",
      value:true,
      observer: function (news, olds, path) {
        // console.log(news, olds)
      }
    }
  },
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    wxParseData: function () {
      console.log(111)
    },
    showDialog:function(){
      this.triggerEvent("showDialog")
    }
  }
})