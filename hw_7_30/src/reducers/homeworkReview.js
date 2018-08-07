import ACTION_TYPES from '../const';

export const homeworkReviewReducer = (state = {
    userUnreview: [],
    userReviewed: [],
    allUnreview: [],
    allReviewed: []
}, action) => {

    switch (action.type) {
        case `${ACTION_TYPES.SERVER_ACTIONS.FETCH_HOMEWORK_LIST}_REQ`: {
            return state;
        }
        case `${ACTION_TYPES.SERVER_ACTIONS.FETCH_HOMEWORK_LIST_USER_UNREVIEW}_SUC`: {
            return {
                ...state,
                userUnreview: action.res.result
            }
        }
        case `${ACTION_TYPES.SERVER_ACTIONS.FETCH_HOMEWORK_LIST_USER_REVIEWED}_SUC`: {
            return {
                ...state,
                userReviewed: action.res.result
            }
        }
        case `${ACTION_TYPES.SERVER_ACTIONS.FETCH_HOMEWORK_LIST_ALL_UNREVIEW}_SUC`: {
            return {
                ...state,
                allUnreview: action.res.result
            }
        }
        case `${ACTION_TYPES.SERVER_ACTIONS.FETCH_HOMEWORK_LIST_ALL_REVIEWED}_SUC`: {
            return {
                ...state,
                allReviewed: action.res.result
            }
        }
        case `${ACTION_TYPES.SERVER_ACTIONS.FETCH_HOMEWORK_LIST}_FAI`: {
            return state;
        }
        case ACTION_TYPES.SEARCH_ACTIONS.FILTER_HOMEWORK_BY_MID: {
            const { mid } = action;
            return state;
        }
        default: return state;

    }
}

export default homeworkReviewReducer;