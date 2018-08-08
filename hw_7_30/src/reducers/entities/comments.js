import ActionTypes from '../../const';


const comments = (state = {}, action) => {

    const { res } = action;
    switch (action.type) {

        case `${ActionTypes.SERVER_ACTIONS.FETCH_HOMEWORK_LIST_ALL_REVIEWED}_SUC`:
        case `${ActionTypes.SERVER_ACTIONS.FETCH_HOMEWORK_LIST_ALL_UNREVIEW}_SUC`:
        case `${ActionTypes.SERVER_ACTIONS.FETCH_HOMEWORK_LIST_USER_REVIEWED}_SUC`:
        case `${ActionTypes.SERVER_ACTIONS.FETCH_HOMEWORK_LIST_USER_UNREVIEW}_SUC`: {
            return {
                ...state,
                ...res.entities.comments
            }
        }
        case ActionTypes.COMMENT_ACTIONS.REJECT_COMMENT: {
            const { id, reason } = action;
            return {
                ...state,
                [id]: {
                    ...state[id],
                    reason,
                    status: 'reject'
                }
            }
        }
        case ActionTypes.COMMENT_ACTIONS.COMMENT_HOMEWORK: {
            const { comment } = action;
            return {
                ...state,
                [comment.id]: comment
            }
        }
        default: return state;
    }
}

export default comments;