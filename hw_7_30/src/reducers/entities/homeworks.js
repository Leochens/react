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
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    isExcellent: !state[action.id].isExcellent
                }
            }
        }
        default: return state;
    }
}

export default homeworks;