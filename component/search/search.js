// pages/components/search/search.js
var timer = 0;
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    text:{
      type:'String',
      value:'', 
    },
    value:{
      type: 'String',
      value: '',
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
    searchContent:function(e){
      var that = this;
      var val = e.detail.value.replace(/\s/g, "");
      if (timer) {
        clearTimeout(timer);
        timer = 0;
      }
      console.log(11);
      timer = setTimeout(function () {
        that.triggerEvent("searchContent", { searchVal: val });
      },500)
    }
  },
})
