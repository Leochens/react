// import React from 'react';
import ActionTypes from '../const/';
const initState = {
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
                studentIds: [
                    ...res.result
                ]
            };
        }
        case `${ActionTypes.SERVER_ACTIONS.FETCH_STUDENT_LIST}_FAI`: {
            return state;
        }

        default: return state;
    }
}

export default studentListReducer