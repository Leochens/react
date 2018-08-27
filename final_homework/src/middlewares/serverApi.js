import axios from 'axios';

const API_DOMAIN = 'http://xly-wkop.xiaoniangao.cn';

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
  const token = store.getState().login.token;
  
  if (afterLogin) {
    if (!token) {
      waitActionQueue.push(action);
      return;
    } else {
      params.token = token;
    }
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
        }
        );
        waitActionQueue.length = 0;
      }
    }).catch(err => {
      next({
        type: `${type}_FAI`,
        errMsg: err.errMsg
      });
    });
};
