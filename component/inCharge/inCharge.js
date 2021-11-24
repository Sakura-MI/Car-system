// component/inCharge/inCharge.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    buildNum:{
      type:String,//传值的类型
      value:"",//默认值
    },
    num:{
      type:String,//传值的类型
      value:"",//默认值
    },
    socketNum:{
      type:String,//传值的类型
      value:"",//默认值
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isShowPromptComponent: false//是否显示提示控件组件
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //点击弹出自定义组件
    bindEjectComponent:function(e){
      var that = this;
      that.setData({
        isShowPromptComponent: true,
        txtTips:"空闲口：插座1，插座3，插座6",
      })
    },
    //提示组件确认事件
    bindPromptConfirm: function (e) {
      var that = this;
      that.setData({
        isShowPromptComponent: false,
      })
    },

  }
})
