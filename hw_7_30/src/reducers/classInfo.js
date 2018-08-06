import ACTION_TYPES from '../const';
import message from '../tools/messageTools';
import { combineReducers } from 'redux';

export const headReducer = (state = {
    headLoading: false,
    userInfo: {
        // nick: '',
        // hurl: "",
        // history_pay: '',
        // tel: '',
        // enterDate: '',
        // lastLoginDate: '',
        learningLesson: [],
        // remark: '',
        // totalLearningDays: '',
        // weiChatCode: '',
        //mid:''
    },
    dynamicInfoEditMap: {
        tel: false,
        weiChatCode: false,
        remark: false
    }
}, action) => {
    switch (action.type) {
        case ACTION_TYPES.INPUT_ACTIONS.TOGGLE_DYNAMIC_EDIT: {
            const headData = { ...state };
            headData.dynamicInfoEditMap[action.id] = !headData.dynamicInfoEditMap[action.id];
            return headData;
        }
        case ACTION_TYPES.INPUT_ACTIONS.CHANGE_DYNAMIC_DATA: {
            const headData = { ...state };
            headData.userInfo[action.item_id] = action.newContent;
            headData.dynamicInfoEditMap[action.item_id] = false;
            return headData;
        }
        case `${ACTION_TYPES.SERVER_ACTIONS.FETCH_USER_INFO}_REQ`: {
            message.info("发起拉取学生信息请求");
            const headData = { ...state };
            headData.headLoading = true;
            return headData;

        }
        case `${ACTION_TYPES.SERVER_ACTIONS.FETCH_USER_INFO}_SUC`: {
            message.success("拉取学生信息请求成功");
            const headData = { ...state };
            const { res } = action;
            headData.headLoading = false;
            headData.userInfo = { ...res };
            return headData;
        }
        case `${ACTION_TYPES.SERVER_ACTIONS.FETCH_USER_INFO}_FAI`: {
            message.error("拉取学生信息请求失败");

            return state;
        }
        default: return state;
    }
}
export const lessonReducer = (state = {
    lessonEntities: {}, //对象
    classEntities: {},
    teacherEntities: {},
    currentLessonIds: [],
    historyLessonIds: []
}, action) => {
    switch (action.type) {
        case `${ACTION_TYPES.SERVER_ACTIONS.FETCH_LESSON_INFO}_REQ`: {
            return state;
        }
        case `${ACTION_TYPES.SERVER_ACTIONS.FETCH_LESSON_INFO}_SUC`: {

            const { res } = action;
            const newState = {
                ...state,
                lessonEntities: {
                    ...state.lessonEntities,
                    ...res.currentLessonsList.entities.lesson,
                    ...res.historyLessonsList.entities.lesson,
                },
                currentLessonIds: [
                    // ...state.currentLessonIds,            
                    ...res.currentLessonsList.result,
                ],
                historyLessonIds: [
                    // ...state.historyLessonIds,
                    ...res.historyLessonsList.result,
                ],
                classEntities: {
                    ...state.classEntities,
                    ...res.historyLessonsList.entities.classes,
                    ...res.currentLessonsList.entities.classes,
                },
                teacherEntities: {
                    ...state.teacherEntities,
                    ...res.currentLessonsList.entities.teachers,
                    ...res.historyLessonsList.entities.teachers,
                }
            }
            return newState;
        }
        case `${ACTION_TYPES.SERVER_ACTIONS.FETCH_LESSON_INFO}_FAI`: {
            return state;
        }
        default: return state;
    }
}

export const satisfiedReducer = (state = {
    classEntities: {},
    teacherEntities: {},
    satisfiedEntities: {},
    timeList: []
}, action) => {
    switch (action.type) {
        case `${ACTION_TYPES.SERVER_ACTIONS.FETCH_SATISFIED_LIST}_SUC`: {
            const { entities, result } = action.res;
            return {
                ...state,
                classEntities: {
                    ...state.classEntities,
                    ...entities.classes,
                },
                teacherEntities: {
                    ...state.teacherEntities,
                    ...entities.teachers
                },
                satisfiedEntities: {
                    ...state.satisfiedEntities,
                    ...entities.satisfied
                },
                timeList: [
                    // ...state.timeList,
                    ...result
                ]
            }
        }
        case `${ACTION_TYPES.TABLE_ACTIONS.TOGGLE_REPLY}`: {
            // console.log('进入处理reply函数', action.time);    //time
            const { time } = action;
            return {
                ...state,
                satisfiedEntities: {
                    ...state.satisfiedEntities,
                    [time]: {
                        ...state.satisfiedEntities[time],
                        reply_status: true
                    }
                }
            }
        }
        default: return state;
    }
}

const classInfoReducer = combineReducers({
    headReducer,
    lessonReducer,
    satisfiedReducer
})

export default classInfoReducer