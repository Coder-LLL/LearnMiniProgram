// pages/home/home.js
import request from '../../service/network'

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 原生网络请求
    // wx.request({
    //   url: 'http://152.136.185.210:7878/api/m5/recommend',
    //   success: function(res){
    //     console.log(res)
    //   }
    // })


    // 通过request发送网络请求
    // request({
    //   url: 'http://152.136.185.210:7878/api/m5/recommend'
    // }).then(res => {
    //   console.log(res)
    // })
    
  },
  handleShowToast(){
    wx.showToast({
      title: '我是toast',
      duration: 3000,
      icon: 'loading'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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