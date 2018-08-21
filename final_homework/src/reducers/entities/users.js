import * as ActionTypes from '../../contants/ActionTypes';


const users = (state = {}, action) => {
  switch (action.type) {
    case `${ActionTypes.USER_LOGIN}_SUC`: {
      console.log('登录成功', action.response.entities.users);
      const { users } = action.response.entities;
      return {
        ...state,
        ...users
      };
    }
    default: return state;
  }
};

export default users;
