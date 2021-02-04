const TOKEN = 'token'
App({
  globalData: {
    token:''
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {

    // 1.在登陆之前先从缓存中取出token，看看需不需要重新登录
    const token = wx.getStorageSync(TOKEN)
    // 2.判断token是否有值
    if( token && token.length !== 0) {
      // 有token的情况下要验证token是否过期
      this.check_token(token)
    }else {
      // 没有token的情况，则进行登录
      this.login()
    }

  },
  check_token(token){
    console.log("执行token操作")
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method:"post",
      header:{
        token
      },
      success: (res) => {
        // 没有传入token则错误码为1001
        // 传入错误的token则错误码为1002
        // token过期则错误码为1003
        if(!res.data.errCode) {
          console.log("token有效")
          this.globalData.token = token
        }else {
          this.login()
        }
      },
      fail: function(err){
        console.log(err)
      }
    })
  },
  login(){
    console.log("执行login操作")
    // 登陆操作(注意两次success回调用的都是箭头函数，如果不用箭头函数，注意this的问题)
    wx.login({
      // code只有五分钟的有效期
      success: (res) => {
        // 1.获取code
        const code = res.code
        console.log(code)

        // 2.将我们的code发送给我们的服务器
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method:"post",
          data: {
            code: code 
          },
          success: (res) => {
            // 1.取出token
            const token = res.data.token
    
            // 2.将token保存在golbalData中
            this.globalData.token = token
    
            // 3.进行本地存储
            wx.setStorageSync(TOKEN, token)
            console.log(res)
          }
        })

      }
    })
  },
  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})
