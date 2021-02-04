export default function request(options){
  return new Promise((resolve, reject) => {
    wx.request({
      url: options.url,
      method: options.method || 'get',
      data: options.data || {},
      success: function(res) {
        console.log(res)
        resolve(res)
      },
      fail: function(res) {
        reject(res)
      }
    })
  })
}


// 因为resolve和reject本来就是函数，所以可以直接赋值给success和fail
// export default function request(options){
//   return new Promise((resolve, reject) => {
//     wx.request({
//       url: options.url,
//       method: options.method || 'get',
//       data: options.data || {},
//       success: resolve(res),
//       fail: reject(res)
//     })
//   })
// }