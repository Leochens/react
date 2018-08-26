import * as ActionTypes from '../contants/ActionTypes';

const audio = (state, action, extra) => {
  console.log('audio', state);
  console.log('extra', extra);
  const {
    entities: {
      musics
    },
    musicManage: {
      currentSingleSelectedId: sId
    }
  } = state;
  const ownState = { ...musics[sId] };

  switch (action.type) {

    default: return ownState;
  }
}

export default audio;
