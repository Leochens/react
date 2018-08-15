import ActionTypes from '../const'

export const actionSetSearchResult = (mid) => {
    return {
        type: ActionTypes.SEARCH_ACTIONS.SET_SEARCH_RESULT,
        mid
    }
}

export const actionFilterHomeworkByMid = (mid) => {
    return {
        type: ActionTypes.SEARCH_ACTIONS.FILTER_HOMEWORK_BY_MID,
        mid
    }
}