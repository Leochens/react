import ActionTypes from '../../const';


const teachers = (state = {}, action)=>{

    const { res } = action;
    switch(action.type){
        case `${ActionTypes.SERVER_ACTIONS.FETCH_LESSON_INFO}_SUC`: {
            console.log('进入teachers实体');
            return {
                ...state,
                ...res.currentLessonsList.entities.teachers,
                ...res.historyLessonsList.entities.teachers
            }
        }
        case `${ActionTypes.SERVER_ACTIONS.FETCH_SATISFIED_LIST}_SUC`: {
            return {
                ...state,
                ...res.entities.teachers
            }
        }
        case `${ActionTypes.SERVER_ACTIONS.FETCH_HOMEWORK_LIST_ALL_REVIEWED}_SUC`:
        case `${ActionTypes.SERVER_ACTIONS.FETCH_HOMEWORK_LIST_ALL_UNREVIEW}_SUC`:
        case `${ActionTypes.SERVER_ACTIONS.FETCH_HOMEWORK_LIST_USER_REVIEWED}_SUC`:
        case `${ActionTypes.SERVER_ACTIONS.FETCH_HOMEWORK_LIST_USER_UNREVIEW}_SUC`: {
            return {
                ...state,
                ...res.entities.teachers
            }
        }
        default: return state;
    }
}

export default teachers;