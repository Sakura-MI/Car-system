// component/prompt/prompt.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    txtTips: String,//声明属性类型
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    //确认按钮
    bindConfirm: function (e) {
      this.triggerEvent('events');
    },

    // 截获竖向滑动--禁止底部页面滑动
    catchTouchMove: function (res) {
      return true;
    },
  }
})
