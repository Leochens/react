import {
  ADD,
  MINUS
} from '../constants/counter'
import Taro from '@tarojs/taro';

export const add = () => {
  return {
    type: ADD
  }
}
export const minus = () => {
  return {
    type: MINUS
  }
}

// 异步的action
export function asyncAdd() {
  return dispatch => {
    Taro.request({
      method:"POST",
      url: 'http://localhost:3001/chats/chats',
      data: {
       
      },
      header: {
        'content-type': 'application/json'
      }
    })
      .then(res => console.log('成功', res.data))
      .catch(err => console.log('失败', err))

  }
}
