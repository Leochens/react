import ActionTypes from '../../const';


const homeworks = (state = {}, action) => {
    const { res } = action;
    switch (action.type) {
        case `${ActionTypes.SERVER_ACTIONS.FETCH_HOMEWORK_LIST_ALL_REVIEWED}_SUC`:
        case `${ActionTypes.SERVER_ACTIONS.FETCH_HOMEWORK_LIST_ALL_UNREVIEW}_SUC`:
        case `${ActionTypes.SERVER_ACTIONS.FETCH_HOMEWORK_LIST_USER_REVIEWED}_SUC`:
        case `${ActionTypes.SERVER_ACTIONS.FETCH_HOMEWORK_LIST_USER_UNREVIEW}_SUC`:{
            return {
                ...state,
                ...res.entities.homeworks
            }
        }
        case ActionTypes.SWITCH_ACTIONS.TOGGLE_EXCELLENT: {

            // const newItem :
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    isExcellent: !state[action.id].isExcellent
                }
            }
        }
        case ActionTypes.COMMENT_ACTIONS.COMMENT_HOMEWORK: { //被点评的作业的comment更新
            const { 
                homeworkId,
                comment: {
                    id
                }
             } = action;
            return {
                ...state,
                [homeworkId]: {
                    ...state[homeworkId],
                    comments: [id].concat(state[homeworkId].comments)
                }
            } 
        } 
        default: return state;
    }
}

export default homeworks;