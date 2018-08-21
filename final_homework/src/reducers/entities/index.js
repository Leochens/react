import { combineReducers } from 'redux';
import users from './users';
import musics from './musics';

const entities = combineReducers({
  users,
  musics
});

export default entities;
