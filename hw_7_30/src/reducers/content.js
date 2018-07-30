import React from 'react';
import { Icon } from 'antd';
import ACTION_TYPES from '../const';

const calcColor = (text) => {
    const x = text.split('/');
    const a = parseInt(x[0],2);
    const b = parseInt(x[1],2);
    const res = a/b;
    if(res>0.95){
        return <div style={{color:'orange',fontWeight:600}}>{text}</div>
    }else if(res<0.80)
    {
        return <div style={{color:'red',fontWeight:600}}>{text}</div>
    }else{
        return <div>{text}</div>
    }
}
const calcColor2 = text => {
    const percent = text * 100;
    if (percent > 95) {
        return <div style={{ color: 'orange',fontWeight:600 }}>{percent + '%'}</div>
    } else if (percent < 80) {
        return <div style={{ color: 'red' ,fontWeight:600}}>{percent + '%'}</div>
    } else {
        return <div>{percent + '%'}</div>
    }
}
const initState = {
    flag:false,
    headData: {
        staticInfosMap: {
            id: '学员编号',
            currentCourse: '在学课程',
            EnrolmentTime: '入学时间',
            paysHistoy: '历史付费额',
            studyDays: '累计学习天数',
            lastLoginTime: '最后登录时间'
        },
        staticInfos: {
            id: '001',
            paysHistoy: 987,
            currentCourse: '摄影课 绘画课',
            studyDays: '876天',
            EnrolmentTime: '2018-3-20',
            lastLoginTime: '2018-3-30'
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
                title: '班级',
                dataIndex: 'class',
                key: 'class',
                render: text => <div><Icon type="exclamation-circle" /> {text}</div>

            },
            {
                title: '课程状态',
                dataIndex: 'courseState',
                key: 'courseState'
            },
            {
                title: '开课时间',
                dataIndex: 'beginTime',
                key: 'beginTime'
            },
            {
                title: '老师',
                dataIndex: 'teacher',
                key: 'teacher',
                render: text => <div><Icon type="user" /> {text}</div>
            },
            {
                title: '上课率',
                dataIndex: 'studyRate',
                key: 'studyRate',
                render:text =>calcColor(text)
            },
            {
                title: '作业提交率',
                dataIndex: 'commitRate',
                key: 'commitRate',
                render: text => calcColor2(text)

            },
            {
                title: '被点评情况',
                dataIndex: 'Comment',
                key: 'Comment',
                render: text => calcColor2(text)

            },
            {
                title: '打卡率',
                dataIndex: 'clocks',
                key: 'clocks',
                render:text =>calcColor(text)
            },
            {
                title: '满意度',
                dataIndex: 'satisfyRate',
                key: 'satisfyRate',
                render: text => calcColor2(text)
            }],
        dataList: [
            {
                key: '1',
                class: '高级班',
                courseState: '进行中',
                beginTime: '2018-3-20',
                teacher: '小白老师',
                studyRate: '3/21',
                commitRate: 0.3669,
                Comment: 0.9716,
                clocks: '20/21',
                satisfyRate: 0.9523
            }, {
                key: '2',
                class: '高级班',
                courseState: '进行中',
                beginTime: '2018-3-20',
                teacher: '小白老师',
                studyRate: '3/21',
                commitRate: 0.8731,
                Comment: 0.8136,
                clocks: '3/21',
                satisfyRate: 0.8101
            }, {
                key: '3',
                class: '高级班',
                courseState: '进行中',
                beginTime: '2018-3-20',
                teacher: '小白老师',
                studyRate: '3/21',
                commitRate: 0.3669,
                Comment: 0.8136,
                clocks: '3/21',
                satisfyRate: 0.4514
            }, {
                key: '4',
                class: '高级班',
                courseState: '进行中',
                beginTime: '2018-3-20',
                teacher: '小白老师',
                studyRate: '18/21',
                commitRate: 0.3669,
                Comment: 0.8136,
                clocks: '3/21',
                satisfyRate: 0.9523
            }, {
                key: '5',
                class: '高级班',
                courseState: '进行中',
                beginTime: '2018-3-20',
                teacher: '小白老师',
                studyRate: '21/21',
                commitRate: 0.3669,
                Comment: 0.8136,
                clocks: '3/21',
                satisfyRate: 0.9523
            },
        ]
        ,
        historyList: [
            {
                key: '1',
                class: '高级班',
                courseState: '已结束',
                beginTime: '2018-3-20',
                teacher: '小白老师',
                studyRate: '3/21',
                commitRate: 0.3669,
                Comment: 0.8136,
                clocks: '3/21',
                satisfyRate: 0.9523
            }
        ]
    }
}

const contentReducer = (state = initState, action) => {

    switch(action.type) {
        case ACTION_TYPES.INPUT_ACTIONS.TOGGLE_DYNAMIC_EDIT:{
            const headData = {...state.headData};
            
            headData.dynamicInfosMap[action.id].edit = !headData.dynamicInfosMap[action.id].edit;
            return Object.assign({},state,{
                headData
            });
        }
        case ACTION_TYPES.INPUT_ACTIONS.CHANGE_DYNAMIC_DATA: {
            const headData = {...state.headData};
            headData.dynamicInfos[action.item_id] = action.newContent;
            headData.dynamicInfosMap[action.item_id].edit=false;
            console.log(action.item_id);
            return Object.assign({},state,{
                headData
            });
        }
        default: return state;
    }
}

export default contentReducer;
