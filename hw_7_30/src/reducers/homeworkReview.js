import ACTION_TYPES from '../const';

export const homeworkReviewReducer = (state = [], action) => {

    switch (action.type) {
        case `${ACTION_TYPES.SERVER_ACTIONS.FETCH_HOMEWORK_LIST}_REQ`: {
            return state;
        }
        case `${ACTION_TYPES.SERVER_ACTIONS.FETCH_HOMEWORK_LIST}_SUC`: {
            return [...action.res.result];
        }
        case `${ACTION_TYPES.SERVER_ACTIONS.FETCH_HOMEWORK_LIST}_FAI`: {
            return state;
        }
        // case `${ACTION_TYPES.SEARCH_ACTIONS.FILTER_HOMEWORK_BY_MID}`:{
        //     if(!action.mid) {
        //         return state
        //     }
        //     return [state[action.mid]];
        // }
        default: return state;

    }
}

export default homeworkReviewReducer;