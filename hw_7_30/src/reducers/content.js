import React from 'react';
import { Icon } from 'antd';
import ACTION_TYPES from '../const';
import { TABLE_HEAD } from '../const/config'

//type 1 —> 分数 2 -> 百分数 
const calcColor = (text, type) => {
    switch (type) {
        case 1: {
            const x = text.split('/');
            const a = parseInt(x[0], 10);
            const b = parseInt(x[1], 10);
            const res = a / b;
            if (res > 0.95) {
                return <div style={{ color: 'orange', fontWeight: 600 }}>{text}</div>
            } else if (res < 0.80) {
                return <div style={{ color: 'red', fontWeight: 600 }}>{text}</div>
            } else {
                return <div>{text}</div>
            }
        }
        case 2: {
            const percent = (parseFloat(text) * 100).toFixed(2);
            if (percent > 95) {
                return <div style={{ color: 'orange', fontWeight: 600 }}>{percent + '%'}</div>
            } else if (percent < 80) {
                return <div style={{ color: 'red', fontWeight: 600 }}>{percent + '%'}</div>
            } else {
                return <div>{percent + '%'}</div>
            }
        }
        default: return null;
    }
}

const initState = {
    flag: false,
    headData: {
        headLoading: false,
        userInfo: {
            nick: '',
            hurl: "",
            history_pay: '',
            tel: '',
            learningLesson: '',
            enterDate: '',
            lastLoginDate: '',
            learningLesson: [],
            remark: '',
            totalLearningDays: '',
            weiChatCode: ''
        },
        dynamicInfosMap: {
            phoneNumber: {
                content: '手机号码',
                edit: false
            },
            wxId: {
                content: '微信号码',
                edit: false
            },
            remarks: {
                content: '备注',
                edit: false
            },
        },
        dynamicInfos: {
            phoneNumber: '18332518328',
            wxId: 'zhllc999',
            remarks: '暂无备注',
        }
    },
    tableData: {
        headList: [
            {
                title: TABLE_HEAD.CLASS,
                dataIndex: 'classInfo',
                key: 'classInfo',
                render: text => <div><Icon type="exclamation-circle" /> {text.name}</div>
            },
            {
                title: TABLE_HEAD.LESSON_STATUS,
                dataIndex: 'status',
                key: 'status',
                render: text => text?'进行中':'已结束'
            },
            {
                title: TABLE_HEAD.START_TIME,
                dataIndex: 'startTime',
                key: 'startTime'
            },
            {
                title: TABLE_HEAD.TEACHER_NAME,
                dataIndex: 'teacherInfo',
                key: 'teacherInfo',
                render: text => <div><Icon type="user" /> {text.nick}</div>
            },
            {
                title: TABLE_HEAD.ENTER_RATE,
                dataIndex: 'enterRate',
                key: 'enterRate',
                render: text => calcColor(text,1)
            },
            {
                title: TABLE_HEAD.HOMEWORK_SUBMIT_RATE,
                dataIndex: 'homeworkSubmitRate',
                key: 'homeworkSubmitRate',
                render: text => calcColor(text,2)

            },
            {
                title: TABLE_HEAD.BE_COMMENTED_RATE,
                dataIndex: 'beCommenttedRate',
                key: 'beCommenttedRate',
                render: text => calcColor(text,2)

            },
            {
                title: TABLE_HEAD.SIGN_RATE,
                dataIndex: 'signRate',
                key: 'signRate',
                render: text => calcColor(text,1)
            },
            {
                title: TABLE_HEAD.SATISFY_RATE,
                dataIndex: 'satisfyRate',
                key: 'satisfyRate',
                render: text => calcColor(text,2)
            }],
        dataList: [],
        historyList: []
    }
}

const contentReducer = (state = initState, action) => {

    switch (action.type) {
        case ACTION_TYPES.INPUT_ACTIONS.TOGGLE_DYNAMIC_EDIT: {
            const headData = { ...state.headData };
            headData.dynamicInfosMap[action.id].edit = !headData.dynamicInfosMap[action.id].edit;
            return Object.assign({}, state, {
                headData
            });
        }
        case ACTION_TYPES.INPUT_ACTIONS.CHANGE_DYNAMIC_DATA: {
            const headData = { ...state.headData };
            headData.dynamicInfos[action.item_id] = action.newContent;
            headData.dynamicInfosMap[action.item_id].edit = false;
            console.log(action.item_id);
            return Object.assign({}, state, {
                headData
            });
        }
        case `${ACTION_TYPES.API_ACTIONS.FETCH_USER_INFO}_REQ`: {
            console.log('fetch user info 发起请求');
            const { headData } = state;
            headData.headLoading = true;
            return Object.assign({}, state, {
                headData
            });

        }
        case `${ACTION_TYPES.API_ACTIONS.FETCH_USER_INFO}_SUC`: {
            console.log('fetch user info 请求成功 |');
            const { headData } = state;
            const { res } = action;
            headData.headLoading = false;
            headData.userInfo = { ...res.data.data };
            console.log('user data', headData.userInfo);
            return Object.assign({}, state, {
                headData
            });
        }
        case `${ACTION_TYPES.API_ACTIONS.FETCH_USER_INFO}_FAI`: {
            console.log('fetch user info 请求失败');
            return state;
        }

        case `${ACTION_TYPES.API_ACTIONS.FETCH_LESSON_INFO}_REQ`: {
            console.log('fetch LESSON info 发起请求');
            return state;
        }
        case `${ACTION_TYPES.API_ACTIONS.FETCH_LESSON_INFO}_SUC`: {
            console.log('fetch LESSON info 请求成功');
            const { res } = action;
            console.log(res.data);
            const { tableData } = state;
            tableData.dataList = res.data.data.currentLessonsList;
            tableData.historyList= res.data.data.historyLessonsList;
            return Object.assign({}, state, {
                tableData
            });
        }
        case `${ACTION_TYPES.API_ACTIONS.FETCH_LESSON_INFO}_FAI`: {
            console.log('fetch LESSON info 请求失败');
            return state;
        }
        case 'LOADING_DONE': {
            const { headData } = state;
            headData.headLoading = false;
            console.log('dddd');
            return Object.assign({}, state, {
                headData
            });
        }
        default: return state;
    }
}

export default contentReducer;
