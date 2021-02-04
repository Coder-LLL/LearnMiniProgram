// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles: ['衣服','裤子','鞋子'],
    counter: 0
  },
  viewClick(event){
    console.log(event)
  },
  innerviewClick(event){
    console.log(event)
    console.log("currentTarget中的id表示的是触发事件的id，而target中的id记录的是产生事件的id")
  },
  handleItemClick(event ,index , item){
    console.log(event)
    const dataset = event.target.dataset
    console.log(dataset.index,dataset.item)
  },
  increment(){
    console.log(22)
    this.setData({
      counter: this.data.counter+1
    })
  },
  itemClick(event){
    console.log(event.detail)
  },
  inreament(){
    // 通过selectComponent获取到某个组件，然后调用组件的方法或者数据
    const my_sel = this.selectComponent('#my_sel')
    // 一般外界修改组件数据的时候，不是直接修改的，而是通过组件的方法去修改的，所以组件要定义一个修改自己数据的方法，外界调用这个方法而不是直接修改数据
    my_sel.increamentCounter()
  }
})