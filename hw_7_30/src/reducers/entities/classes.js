import ActionTypes from '../../const';


const classes = (state = {}, action)=>{
    const { res } = action;

    switch(action.type) {
        case `${ActionTypes.SERVER_ACTIONS.FETCH_LESSON_INFO}_SUC`: {
            console.log('进入classes实体');
            return {
                ...state,
                ...action.res.currentLessonsList.entities.classes,
                ...action.res.historyLessonsList.entities.classes
            }
        }
        case `${ActionTypes.SERVER_ACTIONS.FETCH_SATISFIED_LIST}_SUC`: {
            return {
                ...state,
                ...res.entities.classes
            }
        }
        case `${ActionTypes.SERVER_ACTIONS.FETCH_HOMEWORK_LIST_ALL_REVIEWED}_SUC`:
        case `${ActionTypes.SERVER_ACTIONS.FETCH_HOMEWORK_LIST_ALL_UNREVIEW}_SUC`:
        case `${ActionTypes.SERVER_ACTIONS.FETCH_HOMEWORK_LIST_USER_REVIEWED}_SUC`:
        case `${ActionTypes.SERVER_ACTIONS.FETCH_HOMEWORK_LIST_USER_UNREVIEW}_SUC`:
         {
            return {
                ...state,
                ...res.entities.classes
            }
        }
        default: return state;
    }
}

export default classes;