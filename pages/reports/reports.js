// pages/reports/reports.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    header:{
      homeCapsule: false,
      title: '问题反馈',
      fontColor: "#000",
      fontSize: '100rpx',
      headerbg: '#f40',
      hiddenBlock: false,
      slot: false
    },
    isShowPromptComponent:false,
    imageList: [],
    options: {
      type: Array,
      value: ["反馈1","评论反馈"]
    },
    resetData: function () {
      this.setData({
        imageList: [],
      });
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: api.UserInfo,
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      header: {
        "Authorization": wx.getStorageSync('token'),
      },
      success: (res) => {
        console.log(res)
        this.setData({
          user_id:res.data.id
        })
      }
    })
  },
  bindEjectComponent:function(e){
    var that = this;
    that.setData({
      isShowPromptComponent: true,
      txtTips:"您的反馈已提交成功，我们会尽快答复您，请及时查收邮件"
    })
  },
  //提示组件确认事件
  bindPromptConfirm: function (e) {
    var that = this;
    that.setData({
      isShowPromptComponent: false,
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
  onShareAppMessage: function () {},
  uploadImage: function () {
    // 选择图片并上传
    wx.chooseImage({
      count: 9,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: res => {
        var oldLength = parseInt(this.data.imageList.length);
        // 最多上传9张
        let totalCount = res.tempFiles.length + this.data.imageList.length;
        if (totalCount > 9) {
          wx.showToast({
            title: '图片最多选择9张',
            icon: 'none'
          });
          return
        };
        console.log(this.data.imageList.concat(res.tempFiles));
        // 本地图片在页面预览
        this.setData({
          imageList: this.data.imageList.concat(res.tempFiles)
        });
        // 上传新挑选的图片（原图片无需再上传）
        for (var index in res.tempFiles) {
          let imageFilePath = res.tempFiles[index].path;
          var filePathSplit = imageFilePath.split('.');
          var ext = filePathSplit[filePathSplit.length - 1];
          // 创建随机字符串
          let randowString = Math.random().toString(36).slice(-8) + String(new Date().getTime());
          var fileKey = randowString + "." + ext;
          var targetIndex = parseInt(oldLength) + parseInt(index);
          this.setData({
            ["imageList[" + targetIndex + "].key"]: fileKey
          });


        }
      }
    })
  },
  removeImage: function (event) {
    // 判断是否正在上传，如果正在上传就终止，否则就删除；
    // 删除图片，终止 & 删除
    var index = event.currentTarget.dataset['index'];
    var item = event.currentTarget.dataset['item'];
    if (item.percent == 100) {
      cos.deleteObject({
        Bucket: "mini-1251317460",
        Region: "ap-chengdu",
        Key: item.key
      }, (err, data) => {
        if (err) {
          wx.showToast({
            title: '删除失败',
            icon: 'none'
          });
        } else {
          var imageList = this.data.imageList;
          imageList.splice(index, 1);
          this.setData({
            imageList: imageList
          });
        }
      });
    }


  },
  getLocation: function () {
    wx.chooseLocation({
      success: res => {
        this.setData({
          address: res.address
        })
      }
    });
  },
  
  bindContentInput: function (e) {
    this.setData({
      content: e.detail.value
    });
  },
  publishReport: function () {

    //发布至少需要一张图片
    /*  if (this.data.imageList.length < 1) {
      wx.showToast({
        title: '至少选择一张图片',
        icon: 'none'
      });
      return
    }*/
    // 发布内容不能为空
    if (this.data.content.length < 1) {
      wx.showToast({
        title: '内容不能为空',
        icon: 'none'
      });
      return
    }

    wx.showLoading({
      title: '发布中...',
      duration: 2000,
    })
    var content = this.data.content
    wx.uploadFile({
      method:"POST",
      url: api.report+content,
      filePath:this.data.imageList[0].path ,
      name: 'file',   // 和后端沟通好 接收文件的name
      header: {
        "Authorization": wx.getStorageSync('token'),
        user_id: this.data.userInfo.id,
        category_id: this.data.idx,
      },
      success: function (res) {
       var data = JSON.parse(res.data)
        console.log(data)
        if(data.status == 200){
          wx.showToast({
            title: '绑定成功',
            duration: 2000,
          })
          wx.navigateTo({
            url: '/pages/publishSuccess/publishSuccess',
          })
        }else{
          wx.showToast({
            title: '绑定失败',
            duration: 2000,
          })
        }
      },
      fail: function (err) {
        console.log(err)
      }
    });








    
  }


})