import { combineReducers } from 'redux';
import crossReducer from './cross';
import entities from './entities';
import musicManage from './musicManage';
import login from './login';
import ui from './ui';


const combineReducer = combineReducers({
  entities,
  musicManage,
  login,
  ui,
  audio: () => { return {}}
});

const RootReducer = (state, action) => {
  const tempState = combineReducer(state, action);
  const finalState = crossReducer(tempState, action);
  return finalState;
}


export default RootReducer;
