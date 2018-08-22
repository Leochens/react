import { combineReducers } from 'redux';
import entities from './entities';
import musicManage from './musicManage';
import login from './login';
import toolBar from './toolBar';
import ui from './ui';


const RootReducer = combineReducers({
  entities,
  musicManage,
  toolBar,
  login,
  ui
});

export default RootReducer;
