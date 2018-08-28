import axios from 'axios';

const API_DOMAIN = 'http://xly-wkop.xiaoniangao.cn';
// 登录action拥有特殊字段 LOGIN
// 需要登录后在dispatch的action有AFTER_LOGIN 字段
// 普通action什么特殊字段都没有 next就好
// 如果此时发来的是LOGIN action 那么就执行
// 如果不是 那么就放入等待队列
// 等待LOGIN结束并成功后再发起 拉取其他需登录后拉取的数据

const waitActionQueue = [];
const callServerApi = (endpoint, params, normalizeFunc) => new Promise((resolve, reject) => {
  axios({
    method: 'POST',
    url: API_DOMAIN + endpoint,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: params
  }).then(res => {
    if (res.data.ret === 1) {
      return resolve(normalizeFunc ? normalizeFunc(res.data.data) : res.data.data);
    }
    return reject(new Error(res.data.errMsg));
  }).catch(err => reject(err));
});

/* eslint-disable no-unused-vars */
export default store => next => action => {
  if (!action.SERVER_API) {
    return next(action);
  }
  const {
    type,
    endpoint,
    params,
    normalizeFunc,
    afterLogin,
    IS_LOGIN
  } = action.SERVER_API;
  const { token } = store.getState().toJS().login;

  if (afterLogin) {
    if (!token) {
      waitActionQueue.push(action);
      return null;
    }
    params.token = token;
  }

  if (typeof type !== 'string') {
    throw new Error('type shoudle be a string');
  }
  if (typeof endpoint !== 'string') {
    throw new Error('endpoint shoudle be a string');
  }
  if (typeof params !== 'object') {
    throw new Error('params shoudle be a object');
  }

  next({
    type: `${type}_REQ`
  });

  return callServerApi(endpoint, params, normalizeFunc)
    .then(response => {
      next({
        type: `${type}_SUC`,
        response
      });
      if (IS_LOGIN) {
        // console.log(waitActionQueue);
        waitActionQueue.forEach(action => {
          action.SERVER_API.params.token = response.token;
          store.dispatch(action);
        });
        waitActionQueue.length = 0;
      }
    }).catch(err => {
      next({
        type: `${type}_FAI`,
        errMsg: err.errMsg
      });
    });
};
