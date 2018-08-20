import * as ActionTypes from '../const/ActionTypes';


const reward = (state = {
  level: 1
}, action) => {
  switch (action.type) {
    case ActionTypes.INCREASE_LEVEL: {
      return {
        ...state,
        level: state.level + 1
      };
    }
    case ActionTypes.RESET_LEVEL: {
      return {
        ...state,
        level: 1
      };
    }
    default: return state;
  }
};

export default reward;
