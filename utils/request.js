
function _Get(url, fun, method,data){
  if (method == undefined){
    method = "GET";
  }

  var header = { 'content-type': 'application/x-www-form-urlencoded' };
  if (data == undefined) {
    var header = { 'content-type': 'application/json' };
    data = {};
  }

  wx.request({
    url: url,
    method: method,
    data: data,
    header: header,
    success: function (res) {
     
      if(res.data.code != 200){
        wx.showToast({
          title: res.data.msg,
          icon: 'none',
          duration: 5000
        })
        return;
      }
      if (typeof fun == 'function'){
          fun(res.data.data,res.data.code);
 
      }
    }
  })
}

module.exports = {
  _Get: _Get
}
