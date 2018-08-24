import * as ActionTypes from '../../contants/ActionTypes';

const audio = (state, action) => {
  console.log('audio', state);
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