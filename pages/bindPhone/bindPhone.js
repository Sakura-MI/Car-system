var api = require("../../config/api.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    header:{
      homeCapsule: false,
      title: '绑定手机',
      fontColor: "#000",
      fontSize: '100rpx',
      headerbg: '#f40',
      hiddenBlock: false,
      slot: false
    },
    phone: "",
    SeeTheCode: false,
    code: "",
    phoneTemp: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this
    wx.request({
      url: api.UserInfo,
      method: "GET",
      header: {
        Authorization: wx.getStorageSync('token'),
      },
      success: function (res) {
        console.log(res)
        if (res.data.status == 200) {
          wx.setStorage({
            data: res.data.data,
            key: 'userInfo',
          })
          that.setData({
            phone: res.data.data.phone,
          })
        }
      }
    })

    /* if (options.phone != null) {
      var phone = options.phone
    }
    this.setData({
      phone:phone
    })
    console.log(phone) */
  },


  watchPhone: function (e) {
    var phone = e.detail.value;
    //  console.log(phone)
    this.setData({
      phoneTemp: phone
    })
  },
  watchCode: function (e) {
    var code = e.detail.value
    this.setData({
      code: code
    })
  },

  bindCode: function(){
    var phone = this.data.phoneTemp
    // console.log(phone)
    this.setData({
      SeeTheCode: true
    })
    wx.request({
      url: api.GetCode,
      data: {
        phone: phone,
      },
      success: function (res) {
        console.log("CodeRes")
        console.log(res)
      }
    })
  },

  bindPhone: function () {
    var that = this
    var phone = this.data.phoneTemp
    var code = this.data.code
    wx.request({
      method: "POST",
      url: api.BindPhone,
      data: {
        phone: phone,
        "operation_type":1,
        code:code,
      },
      header: {
        //1:绑定，2:解绑
        "Authorization": wx.getStorageSync('token'),
        
        'content-type': 'application/json',
      },
      success: function (res) {
        if (res.data.status == 200) {
          wx.showToast({
            title: '绑定成功',
            duration: 2000,
            icon: "success",
          })
          wx.navigateTo({
            url: "/pages/user/user",
          })
        } else if (res.data.status == 30001) {
          that.GetToken()
        } else {
          wx.showToast({
            title: '绑定失败',
            duration: 2000
          })
          that.onLoad()
        }
      }
    })

  },
  
  onReady: function () {

  },

  GetToken() {
    wx.login({
      success: res => {
        wx.request({
          url: api.Login, //登陆注册请求
          method: "POST",
          header: {
            "AuthCode": res.code,
          },
          success: (res) => {
            if (res.data.status == 200) {
              wx.setStorageSync('token', res.data.data.token)
              this.onLoad()
            } else {
              console.log(res)
            }
          }
        })
      }
    })
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