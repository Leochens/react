import { combineReducers } from 'redux';
import entities from './entities';
import musicManage from './musicManage';
import login from './login';

const RootReducer = combineReducers({
  entities,
  musicManage,
  login
});

export default RootReducer;
