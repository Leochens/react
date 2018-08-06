import ACTION_TYPES from '../const';

const headState = {
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
}


export const headReducer = (state = headState, action) => {
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
            // console.log(action.item_id);
            return headData;
        }
        case `${ACTION_TYPES.SERVER_ACTIONS.FETCH_USER_INFO}_REQ`: {
            // console.log('fetch user info 发起请求');
            const headData = { ...state };
            headData.headLoading = true;
            return headData;

        }
        case `${ACTION_TYPES.SERVER_ACTIONS.FETCH_USER_INFO}_SUC`: {
            // console.log('fetch user info 请求成功');
            // console.log(action.res);
            const headData = { ...state };
            const { res } = action;
            headData.headLoading = false;
            headData.userInfo = { ...res};
            return headData;
        }
        case `${ACTION_TYPES.SERVER_ACTIONS.FETCH_USER_INFO}_FAI`: {
            // console.log('fetch user info 请求失败');
            return state;
        }
        default: return state;


    }


}
const LessonState = {
    lessonEntities: {}, //对象
    classEntities: {}, 
    teacherEntities: {}, 
    currentLessonIds: [],
    historyLessonIds: []
}
export const tableReducer = (state = LessonState, action) => {
    switch (action.type) {
        case `${ACTION_TYPES.SERVER_ACTIONS.FETCH_LESSON_INFO}_REQ`: {
            // console.log('fetch LESSON info 发起请求');
            return state;
        }
        case `${ACTION_TYPES.SERVER_ACTIONS.FETCH_LESSON_INFO}_SUC`: {
            // console.log('fetch LESSON info 请求成功');
            // console.log('扁平化数据进入reducer:', action.res);
            const { res } = action;
            const newState = {
                ...state,
                lessonEntities: {
                    ...state.lessonEntities,
                    ...res.currentLessonsList.entities.lesson,
                    ...res.historyLessonsList.entities.lesson,
                },
                currentLessonIds: [
                    ...state.currentLessonIds,
                    ...res.currentLessonsList.result,
                ],
                historyLessonIds: [
                    ...state.historyLessonIds,
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
            // console.log('newState: ', newState);
            return newState;
        }
        case `${ACTION_TYPES.SERVER_ACTIONS.FETCH_LESSON_INFO}_FAI`: {
            // console.log('fetch LESSON info 请求失败');
            return state;
        }
        default: return state;
    }
}
const satisfiedList = {
    classEntities: {},
    teacherEntities: {},
    satisfiedEntities: {},
    timeList: [] 
};
export const satisfiedReducer = (state = satisfiedList, action) => {
    switch (action.type) {
        case `${ACTION_TYPES.SERVER_ACTIONS.FETCH_SATISFIED_LIST}_SUC`: {
            console.log('收到满意度列表', action.res);
            const { entities,result } = action.res;
            return {
                ...state,
                classEntities:{
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
                timeList:[
                    ...state.timeList,
                    ...result
                ]
            }
        }
        case `${ACTION_TYPES.TABLE_ACTIONS.TOGGLE_REPLY}`: {
            console.log('进入处理reply函数', action.id);//time
            // const list = state.slice();
            // list.forEach(item => {
            //     if (item.class_info.id == action.id) {
            //         item.reply_status = !item.reply_status;
            //     }
            // })
            return state
        }
        default: return state;
    }
}
