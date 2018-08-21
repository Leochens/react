// import React from 'react';
import ActionTypes from '../const/';
const initState = {
    studentIds: [],
    searchResultIds: [],
    isSearching: false
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
                studentIds: [
                    ...res.result
                ]
            };
        }
        case `${ActionTypes.SERVER_ACTIONS.FETCH_STUDENT_LIST}_FAI`: {
            return state;
        }
        case ActionTypes.SEARCH_ACTIONS.SET_SEARCH_RESULT: {
            const { mid } = action;
            if (!mid) {
                return {
                    ...state,
                    isSearching:false
                }
            }
            const searchResultIds = state.studentIds.filter(id => id.toString() === mid)
            return {
                ...state,
                searchResultIds,
                isSearching: true
            }
        }
        default: return state;
    }
}

export default studentListReducer