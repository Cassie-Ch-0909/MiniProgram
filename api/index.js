// 导入封装的网络请求模块实例
import http from '../utils/http'
export const reqSwiperData = () => {
  return http.get('/index/findBanner')
}