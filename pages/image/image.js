// pages/image/image.js
Page({
  data:{
    imagePath: ''
  },
  handleChoose(){
    const _this = this
    wx.chooseImage({
      success: function(res){
        const path = res.tempFilePaths[0]
        _this.setData({
          imagePath: path
        })
        console.log(_this.data.imagePath)
      }
    })

  }
})