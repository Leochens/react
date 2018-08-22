import { combineReducers } from 'redux';
import *  as ActionTypes from '../contants/ActionTypes';
import entities from './entities';
import musicManage from './musicManage';
import login from './login';
import toolBar from './toolBar';
import ui from './ui';


const crossReducer = (state, action) => {

  console.log('全部的State', state);

  switch (action.type) {

    // 检测是否有推荐音乐 有的话 就不能显示删除
    case ActionTypes.UPDATE_TOOL_STATE:
    case ActionTypes.SET_MULTIPLE_SELECTED_MUSIC_IDS: {
      const {
        musicManage: {
          currentMultipleSelectedMusicIds: cIds,
          recommendMusicIds: rIds
        }
      } = state;
      let flag = true;
      for (let i = 0; i < cIds.length; i++) {
        if (rIds.includes(cIds[i])) {
          console.log('关了吗');
          flag = false;
          break;
        }
      }
      return {
        ...state,
        ui: {
          ...state.ui,
          delete: flag
        }
      }
    }
    default: return state;
  }

}

const combineReducer = combineReducers({
  entities,
  musicManage,
  toolBar,
  login,
  ui
});

const RootReducer = (state, action) => {
  const tempState = combineReducer(state, action);
  const finalState = crossReducer(tempState, action);
  return finalState;
}


export default RootReducer;
