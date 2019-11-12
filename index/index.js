const moduleFunc = require('./js/module')
const app = getApp()

Page({
  data: {
    time:(new Date()),
    array: [1, 2, 3],
    isShow: false,    //测试wx:if
    arr: ["林俊杰", "周杰伦", "王力宏"],
    dataObj:{
      name: "测试加载数据"
    },      //测试加载模板数据
    global: app.global
  },
  onLoad() {
    wx = this;
    moduleFunc("我是模块化调用的方法")
    setInterval(() =>{
      this.time = new Date()
    },1000)
  },
  clickMe() {
    this.setData({ msg: "Hello World" })
  },
})
