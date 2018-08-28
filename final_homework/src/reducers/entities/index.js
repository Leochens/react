import { combineReducers } from 'redux-immutable';
import musics from './musics';

const entities = combineReducers({
  musics
});

export default entities;
