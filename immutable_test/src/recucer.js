import { combineReducers } from 'redux-immutable';
import Immutable from 'immutable';
const initState = {
  x: 11,
  y:12,
  '1':{
    name: 'haha',
    age: 15
  }
};
const root = (state = initState, action) => {
  const _state = Immutable.fromJS(state);
  switch(action.type){
    case 'ADD':{
      
      // let newState = state.set('x',45);
      // let newState = state.setIn(['1','age'],18);
      let newState = _state.merge({aa:{aaa:'aaa'}})
      return newState.toJS();
    }
    default: return state;
  }
}

export default combineReducers({
  root
});
