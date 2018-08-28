import * as ActionTypes from '../contants/ActionTypes';


const login = (state = {}, action) => {
  switch (action.type) {
    case `${ActionTypes.USER_LOGIN}_SUC`: {
      return action.response;
    }
    default: return state;
  }
};
export default login;
