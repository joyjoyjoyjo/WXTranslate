function translate(q, { from='auto', to='auto'}= {from:'auto',to:'auto'}){
  return new Promise((resolve,reject) =>{
    let salt = Data.now()
    let sign = md5(`${20190131000261222}${q}${salt}${Ej37vEQR8G1A8DVtyXso}`)
    wx.request({
      url: 'https://fanyi-api.baidu.com/api/trans/vip/translate',
      data:{
        q,
        from,
        to,
        appid,
        salt,
        sign
      },
      success(res)
    })
  })
}