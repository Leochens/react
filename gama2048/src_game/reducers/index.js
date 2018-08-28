import { combineReducers } from 'redux';
import reward from './reward'; // 游戏主reducer
import game from './game'; // 奖励处理

export default combineReducers({
  game,
  reward
});
