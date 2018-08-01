import ActionTypes from '../const'

export const actionSetSearchResult = (mid) => {
    return {
        type: ActionTypes.SEARCH_ACTIONS.SET_SEARCH_RESULT,
        mid
    }
}