/* 
    存储数据
    key 本地缓存中指定的key
    value 需要缓存的数据
*/
export const setStorage = (key, value) => {
  try {
    wx.setStorageSync(key, value)
  } catch (error) {
    console.error(`存储指定${key}数据发生了异常`, error)
  }
}

/* 
    从本地读取指定key的数据
*/
export const getStorage = (key) => {
  try {
    const value = wx.getStorageSync(key)
    if (value) {
      return value
    }
  } catch (error) {
    console.error(`存储指定${key}数据发生了异常`, error)
  }
}

/* 
    从本地移除指定key的数据
*/
export const removeStorage = (key) => {
  try {
    wx.removeStorageSync(key)
  } catch (error) {
    console.error(`存储指定${key}数据发生了异常`, error)
  }
}

/* 
    从本地移除、清空全部的数据
*/
export const clearStorage = () => {
  try {
    wx.clearStorageSync()
  } catch (error) {
    console.error(`清除数据发生了异常`, error)
  }
}

/* 
    异步将数据存储到本地
    key 本地缓存中指定的key
    data 需要缓存的数据
*/
export const asyncSetStorage = (key, data) => {
  return new Promise((resolve) => {
    wx.setStorage({
      key,
      data,
      complete(res) {
        resolve(res)
      }
    })
  })
}

/* 
    异步从本地获取指定key的数据
*/
export const asyncGetStorage = (key) => {
  return new Promise((resolve) => {
    wx.getStorage({
      key,
      complete(res) {
        resolve(res)
      }
    })
  })
}

/* 
    异步从本地移除指定key的数据
*/
export const asyncRemoveStorage = (key) => {
  return new Promise((resolve) => {
    wx.removeStorage({
      key,
      complete(res) {
        resolve(res)
      }
    })
  })
}

/* 
    异步从本地清除全部的数据
*/
export const asyncClearStorage = (key) => {
  return new Promise((resolve) => {
    wx.clearStorage({
      complete(res) {
        resolve(res)
      }
    })
  })
}