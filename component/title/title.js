// component/service_title/service_title.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title_cn:{
      type:"String",
      value:{}
    },
    title_en: {
      type: "String",
      value: {}
    },
    types:{
      type:"Number",
      value:1
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    theme:(function(){
      return app.globalData.theme
    })()
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
