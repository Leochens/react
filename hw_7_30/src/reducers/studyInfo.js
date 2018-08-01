// import React from 'react';
import ActionTypes from '../const/';
const initState = {
    basic_info: {
        real_teacher:{},
        virtual_teacher:{}
    },
    list: []
}
export const studyInfoReducer = (state = initState, action) => {

    switch (action.type) {
        case `${ActionTypes.SERVER_ACTIONS.FETCH_CLASS_INFO}_REQ`: {
            console.log('发起 到了FETCH_CLASS_INFO的reducer里了，数据如下');
            return state;
        }
        case `${ActionTypes.SERVER_ACTIONS.FETCH_CLASS_INFO}_SUC`: {
            console.log('成功 到了FETCH_CLASS_INFO的reducer里了，数据如下');
            console.log(action.res);
            return {
                ...state,
                ...action.res.data.data
            }
        }
        case `${ActionTypes.SERVER_ACTIONS.FETCH_CLASS_INFO}_FAI`: {
            console.log('失败 到了FETCH_CLASS_INFO的reducer里了，数据如下');
            console.log(action.err);
            return state;
        }


        default: return state;
    }
}