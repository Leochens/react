
// 登录action拥有特殊字段 LOGIN
// 需要登录后在dispatch的action有AFTER_LOGIN 字段
// 普通action什么特殊字段都没有 next就好 
// 如果此时发来的是LOGIN action 那么就执行
// 如果不是 那么就放入等待队列 
// 等待LOGIN结束并成功后再发起 拉取其他需登录后拉取的数据


// const waitingActions = [];
// export default store => next => action => {

//   const token  = store.getState();
//   // if(!)
//   console.log('token',token);
//   if (!action.LOGIN && !action.AFTER_LOGIN) {
//     next(action);
//   }
//   if (action.LOGIN) {
//     console.log('拦截LOGIN Action');
//   }
// }

function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }
 
    return next(action);
  };
}
 
const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;
 
export default thunk;
