import { combineReducers } from 'redux';
import entities from './entities';
import musicManage from './musicManage';

const RootReducer = combineReducers({
  entities,
  musicManage
});

export default RootReducer;
