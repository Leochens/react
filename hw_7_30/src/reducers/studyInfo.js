// import React from 'react';
import ActionTypes from '../const/';
const initState = {
    basic_info: {
        real_teacher: {},
        virtual_teacher: {}
    },
    studyInfoEntities: {},
    studyInfoIds: []

}
export const studyInfoReducer = (state = initState, action) => {

    switch (action.type) {
        case `${ActionTypes.SERVER_ACTIONS.FETCH_CLASS_INFO}_REQ`: {
            // console.log('发起 到了FETCH_CLASS_INFO的reducer里了，数据如下');
            return state;
        }
        case `${ActionTypes.SERVER_ACTIONS.FETCH_CLASS_INFO}_SUC`: {
            // console.log('成功 到了FETCH_CLASS_INFO的reducer里了，数据如下');
            // console.log(action.res);
            const { res } = action;
            const tmp = {
                basic_info: {
                    ...state.basic_info,
                    ...res.basic_info
                },
                studyInfoEntities: {
                    ...state.studyInfoEntities,
                    ...res.studyInfoList.entities.studyInfo
                },
                studyInfoIds: [
                    ...state.studyInfoIds,
                    ...res.studyInfoList.result
                ]
            }
            console.log('studyInfo ',tmp);

            return tmp;
        }
        case `${ActionTypes.SERVER_ACTIONS.FETCH_CLASS_INFO}_FAI`: {
            // console.log('失败 到了FETCH_CLASS_INFO的reducer里了，数据如下');
            // console.log(action.err);
            return state;
        }


        default: return state;
    }
}

export default studyInfoReducer