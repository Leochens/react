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
const tableState = {
    dataList: [],
    historyList: []
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
            headData.userInfo = { ...res.data.data };
            return headData;
        }
        case `${ACTION_TYPES.SERVER_ACTIONS.FETCH_USER_INFO}_FAI`: {
            // console.log('fetch user info 请求失败');
            return state;
        }
        default: return state;


    }


}
export const tableReducer = (state = tableState, action) => {

    switch (action.type) {

        case `${ACTION_TYPES.SERVER_ACTIONS.FETCH_LESSON_INFO}_REQ`: {
            // console.log('fetch LESSON info 发起请求');
            return state;
        }
        case `${ACTION_TYPES.SERVER_ACTIONS.FETCH_LESSON_INFO}_SUC`: {
            // console.log('fetch LESSON info 请求成功');
            const tableData = { ...state };

            const { res } = action;

            tableData.dataList = res.data.data.currentLessonsList;
            tableData.historyList = res.data.data.historyLessonsList;

            return tableData;
        }
        case `${ACTION_TYPES.SERVER_ACTIONS.FETCH_LESSON_INFO}_FAI`: {
            // console.log('fetch LESSON info 请求失败');
            return state;
        }
        default: return state;
    }
}
const satisfiedList = [];
export const satisfiedReducer = (state = satisfiedList, action) => {
    switch (action.type) {
        case `${ACTION_TYPES.SERVER_ACTIONS.FETCH_SATISFIED_LIST}_SUC`: {
            console.log('收到满意度列表', action.res.data.data.list);
            const { list } = action.res.data.data;
            return list
        }
        case `${ACTION_TYPES.TABLE_ACTIONS.TOGGLE_REPLY}`: {
            console.log('进入处理reply函数', action.id);
            const  list  = state.slice();
            list.forEach(item => {
                if(item.class_info.id == action.id){
                    item.reply_status=!item.reply_status;
                }
            })
            return list
        }
        default: return state;
    }
}