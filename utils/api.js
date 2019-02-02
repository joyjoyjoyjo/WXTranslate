import md5 from './md5.js'

const appid = '20190131000261222'
const key = 'Ej37vEQR8G1A8DVtyXso'


function translate(q, { from='auto', to='auto'}= {from:'auto',to:'auto'}){
  return new Promise((resolve,reject) =>{
    let salt = Data.now()
    let sign = md5(`${appid}${q}${salt}${key}`)
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
      success(res){
        if(res.data && res.data.trans_reslut) {
          resolve(res.data)
        }else{
          reject({ status:'error',msg:'翻译失败'})
          wx.showToast({
            title: '翻译失败',
            icon:'none',
            duration:3000
          })
        }
      },
      fail(){
        reject({status:'error',msg:'翻译失败'})
        wx.showToast({
          title: '网络异常',
          icon:'none',
          duration:3000
        })
      }
    })
  })
}
module.exports.translate = translate