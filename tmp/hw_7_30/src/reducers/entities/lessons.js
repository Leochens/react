import ActionTypes from '../../const';


const lessons = (state = {}, action)=>{
    switch(action.type){
        case `${ActionTypes.SERVER_ACTIONS.FETCH_LESSON_INFO}_SUC`: {
            console.log('进入lessons实体');
            return {
                ...state,
                ...action.res.currentLessonsList.entities.lesson,
                ...action.res.historyLessonsList.entities.lesson
            }
        }
        default: return state;
    }
}
export default lessons;
