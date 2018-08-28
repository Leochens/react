import { combineReducers } from 'redux-immutable';
import crossReducer from './cross';
import entities from './entities';
import musicManage from './musicManage';
import login from './login';
import ui from './ui';
import audio from './audio';

const combineReducer = combineReducers({
  entities,
  musicManage,
  login,
  ui,
  audio
});

const RootReducer = (state, action) => {
  const tempState = combineReducer(state, action);
  const finalState = crossReducer(tempState, action);
  return finalState;
};


export default RootReducer;
