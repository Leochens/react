import * as ActionTypes from '../contants/ActionTypes';
import Immutable from 'immutable';

const initState = Immutable.fromJS({});
const login = (state = initState, action) => {
  switch (action.type) {
    case `${ActionTypes.USER_LOGIN}_SUC`: {
      return Immutable.fromJS(action.response);
    }
    default: return state;
  }
};
export default login;
