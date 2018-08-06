// import React from 'react';
import ActionTypes from '../const/';
const initState = {
    isSearching: false,
    searchResult: [],
    studentEntitis: {},
    studentIds: []
}
export const studentListReducer = (state = initState, action) => {
    switch (action.type) {
        case `${ActionTypes.SERVER_ACTIONS.FETCH_STUDENT_LIST}_REQ`: {
            return state;
        }
        case `${ActionTypes.SERVER_ACTIONS.FETCH_STUDENT_LIST}_SUC`: {
            const { res } = action;
            return {
                ...state,
                studentEntitis: {
                    ...state.studentEntitis,
                    ...res.entities.students
                },
                studentIds: [
                    // ...state.studentIds,
                    ...res.result
                ]
            };
        }
        case `${ActionTypes.SERVER_ACTIONS.FETCH_STUDENT_LIST}_FAI`: {
            return state;
        }
        case ActionTypes.SEARCH_ACTIONS.SET_SEARCH_RESULT: {
            const { mid } = action;
            if (!mid) {                     //如果输入框为空 默认是不搜索 返回全部list
                return {
                    ...state,
                    isSearching: false
                };
            }
            const { studentEntitis } = state;
            const res = studentEntitis[mid];
            return Object.assign({}, state, { //显示搜索列表
                searchResult: res ? [res] : [],
                isSearching: true
            })
        }

        default: return state;
    }
}

export default studentListReducer