
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 优惠券
    discount: [
      { iconText: '优惠券', content: '订购送200元抵扣券' },
      { iconText: '到店礼', content: '到店即送精美水杯一个' },
    ],
    // 推荐套系
    recommend: [
      { title: '情人节专属套餐情人节专属套餐', image: 'http://images.xfwed.com/shop/photo/221/2216184.jpg', price: '4588', desc: '造型：14套 | 拍摄：210张 | 精修：70张', activity: '此活动赠送冰箱一台此活动赠送冰箱一台此活动赠送冰箱一台' },
      { title: '特惠套装特惠套装特惠套装特惠套装', image: 'http://images.xfwed.com/shop/photo/221/2216185.jpg', price: '2588', desc: '造型：7套 | 拍摄：150张 | 精修：70张' },
    ],
    //详情
    depObj : {
      title: '情人节专属套餐情人节专属套餐', image: 'http://images.xfwed.com/shop/photo/221/2216184.jpg', price: '4588',cust_price:'5388', desc: '造型：14套 | 拍摄：210张 | 精修：70张', activity: '此活动赠送冰箱一台此活动赠送冰箱一台此活动赠送冰箱一台' },
    dep_desc:`
      <p class="clearfix" style="margin-top: 0px; margin-bottom: 0px; padding: 10px 0px 0px; -webkit-tap-highlight-color: transparent; color: rgb(51, 51, 51); position: relative; font-family: &quot;hiragino sans gb&quot;, 微软雅黑, &quot;microsoft yahei&quot;, Arial, Helvetica, sans-serif, 宋体; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);">
    <p class="clearfix" style="margin-top: 0px; margin-bottom: 0px; padding: 10px 0px 0px; -webkit-tap-highlight-color: transparent; color: rgb(51, 51, 51); position: relative; font-family: &quot;hiragino sans gb&quot;, 微软雅黑, &quot;microsoft yahei&quot;, Arial, Helvetica, sans-serif, 宋体; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);">
        <span style="margin: 0px; padding: 0px; color: rgb(166, 166, 166); text-align: right; position: absolute; left: 0px; width: 60px;">相册数量</span><span style="margin: 0px 0px 0px 70px; padding: 0px; display: block; color: rgb(0, 0, 0);">2本</span>
    </p>
    <p class="clearfix" style="margin-top: 0px; margin-bottom: 0px; padding: 10px 0px 0px; -webkit-tap-highlight-color: transparent; color: rgb(51, 51, 51); position: relative; font-family: &quot;hiragino sans gb&quot;, 微软雅黑, &quot;microsoft yahei&quot;, Arial, Helvetica, sans-serif, 宋体; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);">
        <span style="margin: 0px; padding: 0px; color: rgb(166, 166, 166); text-align: right; position: absolute; left: 0px; width: 60px;">相册说明</span><span style="margin: 0px 0px 0px 70px; padding: 0px; display: block; color: rgb(0, 0, 0);">18寸双面水晶数码一体相册一本（内配数码满版设计10P）<br style="margin: 0px; padding: 0px;"/><br style="margin: 0px; padding: 0px;"/>12寸双面水晶数码一体相册一本（内配数码满版设计10P）<br style="margin: 0px; padding: 0px;"/><br style="margin: 0px; padding: 0px;"/>赠送册配套高档精致皮箱一个和3D电子影集一份</span>
    </p>
    <p class="clearfix" style="margin-top: 0px; margin-bottom: 0px; padding: 10px 0px 0px; -webkit-tap-highlight-color: transparent; color: rgb(51, 51, 51); position: relative; font-family: &quot;hiragino sans gb&quot;, 微软雅黑, &quot;microsoft yahei&quot;, Arial, Helvetica, sans-serif, 宋体; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);">
        <span style="margin: 0px; padding: 0px; color: rgb(166, 166, 166); text-align: right; position: absolute; left: 0px; width: 60px;">相框数量</span><span style="margin: 0px 0px 0px 70px; padding: 0px; display: block; color: rgb(0, 0, 0);">5个</span>
    </p>
    <p class="clearfix" style="margin-top: 0px; margin-bottom: 0px; padding: 10px 0px 0px; -webkit-tap-highlight-color: transparent; color: rgb(51, 51, 51); position: relative; font-family: &quot;hiragino sans gb&quot;, 微软雅黑, &quot;microsoft yahei&quot;, Arial, Helvetica, sans-serif, 宋体; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);">
        <span style="margin: 0px; padding: 0px; color: rgb(166, 166, 166); text-align: right; position: absolute; left: 0px; width: 60px;">相框说明</span><span style="margin: 0px 0px 0px 70px; padding: 0px; display: block; color: rgb(0, 0, 0);">80寸巨幅炫彩水晶挂轴一幅（配：专属80寸挂轴）<br style="margin: 0px; padding: 0px;"/><br style="margin: 0px; padding: 0px;"/>40寸经典至尊框放大片一幅（配：专属高档贵族经典油画框）<br style="margin: 0px; padding: 0px;"/><br style="margin: 0px; padding: 0px;"/>24寸冰雕琥珀放大照片一幅（配：专属韩式精美水晶工艺摆件一幅）<br style="margin: 0px; padding: 0px;"/><br style="margin: 0px; padding: 0px;"/>10寸冰雕琥珀放大片一幅（配：专属韩式精美水晶工艺摆件一幅）<br style="margin: 0px; padding: 0px;"/><br style="margin: 0px; padding: 0px;"/>10寸冰雕琥珀放大片一幅（配：专属韩式精美水晶工艺摆件一幅）</span>
    </p><span style="margin: 0px; padding: 0px; color: rgb(166, 166, 166); text-align: right; position: absolute; left: 0px; width: 60px;"><br/></span>
</p>
<p>
    <br/>
</p>
    `
  },
  // 显示预约弹框
  showDialog: function () {
    this.appointment.showDialog();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      theme: app.globalData.theme
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.appointment = this.selectComponent("#appointment");
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