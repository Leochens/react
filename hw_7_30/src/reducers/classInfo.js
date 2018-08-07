import ACTION_TYPES from '../const';
import message from '../tools/messageTools';
import { combineReducers } from 'redux';
import {array2set} from '../tools/array2setTool';
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
    const headData = { ...state };
    switch (action.type) {
        case ACTION_TYPES.INPUT_ACTIONS.TOGGLE_DYNAMIC_EDIT: {
            headData.dynamicInfoEditMap[action.id] = !headData.dynamicInfoEditMap[action.id];
            return headData;
        }
        case ACTION_TYPES.INPUT_ACTIONS.CHANGE_DYNAMIC_DATA: {
            headData.userInfo[action.item_id] = action.newContent;
            headData.dynamicInfoEditMap[action.item_id] = false;
            return headData;
        }
        case `${ACTION_TYPES.SERVER_ACTIONS.FETCH_USER_INFO}_REQ`: {
            message.info("发起拉取学生信息请求");
            headData.headLoading = true;
            return headData;

        }
        case `${ACTION_TYPES.SERVER_ACTIONS.FETCH_USER_INFO}_SUC`: {
            message.success("拉取学生信息请求成功");
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
    currentLessonIds: [],
    historyLessonIds: []
}, action) => {
    switch (action.type) {
        case `${ACTION_TYPES.SERVER_ACTIONS.FETCH_LESSON_INFO}_REQ`: {
            return state;
        }
        case `${ACTION_TYPES.SERVER_ACTIONS.FETCH_LESSON_INFO}_SUC`: {
            const { res } = action;
            return {
                ...state,
                currentLessonIds: array2set([
                     ...state.currentLessonIds,            
                    ...res.currentLessonsList.result,
                ]),
                historyLessonIds: array2set([
                    ...state.historyLessonIds,
                    ...res.historyLessonsList.result,
                ]),
            }
        }
        case `${ACTION_TYPES.SERVER_ACTIONS.FETCH_LESSON_INFO}_FAI`: {
            return state;
        }

        default: return state;
    }
}

export const satisfiedReducer = (state = {
    timeList: []
}, action) => {
    switch (action.type) {
        case `${ACTION_TYPES.SERVER_ACTIONS.FETCH_SATISFIED_LIST}_SUC`: {
            const { result } = action.res;
            return {
                ...state,
                timeList: array2set([
                     ...state.timeList,
                    ...result
                ])
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