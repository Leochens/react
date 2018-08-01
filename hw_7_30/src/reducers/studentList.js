import React from 'react';
import ActionTypes from '../const/';
const initState = []
export const studentListReducer = (state = initState, action) => {
    switch (action.type) {
        case `${ActionTypes.SERVER_ACTIONS.FETCH_STUDENT_LIST}_REQ`: {
            console.log('发起 到了FETCH_STUDENT_LIST的reducer里了，数据如下');
            return state;
        }
        case `${ActionTypes.SERVER_ACTIONS.FETCH_STUDENT_LIST}_SUC`: {
            console.log('成功 到了FETCH_STUDENT_LIST的reducer里了，数据如下');
            console.log(action.res);
            return action.res.data.data;
        }
        case `${ActionTypes.SERVER_ACTIONS.FETCH_STUDENT_LIST}_FAI`: {
            console.log('失败 到了FETCH_STUDENT_LIST的reducer里了，数据如下');
            console.log(action.res);
            return state;
        }
        default: return state;
    }
}