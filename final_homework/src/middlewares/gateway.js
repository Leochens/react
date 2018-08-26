const waitActionQueue = [];

export default store => next => action => {
  if (!action.SERVER_API) {
    return next(action);
  }
  const {
    params,
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

  if (IS_LOGIN) {
    console.log(waitActionQueue);
    waitActionQueue.forEach(waitingAction => {
      waitingAction.SERVER_API.params.token = action.response.token;
      store.dispatch(waitingAction);
    }
    );
    waitActionQueue.length = 0;
  }
}