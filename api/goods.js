// 导入封装的网络请求模块实例
import http from '../utils/http'

/* 
    条件查询商品列表
    (什么都不传的时候是获取全部商品列表)
*/
export const getGoodsInfoListAPI = (data) => {
  return http.post('/goods/getGoodsInfoList', data)
}

/* 
    根据商品Id查询商品详情
*/
export const getGoodsInfoByIdAPI = (goodsId) => {
  return http.get(`/goods/getGoodsInfoById?goodsId=${goodsId}`)
}