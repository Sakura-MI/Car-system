// pages/searchCar/searchCar.js
const api = require("../../config/api")


Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue:"",
    user_name:"",
    avatar:"",
    id:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   

  },
  handleSearch:function(e){
    var that = this;
    this.setData({
      inputValue:e.detail
    })
    wx.request({
      url: api.FindUserByCar,
      data:{
        search_car_number:this.data.inputValue,
      },
      header: {
        "Context-Type": "application/json",
        "Authorization": wx.getStorageSync('token'),
      },
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success:function(res){
        console.log("1",res.data)
        console.log("2",res.data.data.user_name)
        
        if (res.data.status == 200){
          that.setData({
            user_name: res.data.data.user_name,
            avatar:res.data.data.avatar,
            id:res.data.data.id,
            })
          }
      }
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