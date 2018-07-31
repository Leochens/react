import React from 'react';
import { Icon } from 'antd';
import { TABLE_HEAD } from '../../const/config';
import { ColorText } from '../../tools/colorTools';
//type 1 —> 分数 2 -> 百分数 
const calcColor = (text, type) => {
    switch (type) {
        case 1: {
            const x = text.split('/');
            const a = parseInt(x[0], 10);
            const b = parseInt(x[1], 10);
            const res = a / b;

            const type = (res > 0.95) ? 'great' : res < 0.80 ? 'warning' : 'default';
            return (<ColorText type={type} text={text} />)
        }
        case 2: {
            const percent = (parseFloat(text) * 100).toFixed(2);
            const type = (percent > 95) ? 'great' : percent < 80 ? 'warning' : 'default';
            return (<ColorText type={type} text={`${percent}%`} />)
        }
        default: return null;

    }
}
export const TableList = [
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
        render: text => text ? '进行中' : '已结束'
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
        render: text => calcColor(text, 1)
    },
    {
        title: TABLE_HEAD.HOMEWORK_SUBMIT_RATE,
        dataIndex: 'homeworkSubmitRate',
        key: 'homeworkSubmitRate',
        render: text => calcColor(text, 2)

    },
    {
        title: TABLE_HEAD.BE_COMMENTED_RATE,
        dataIndex: 'beCommenttedRate',
        key: 'beCommenttedRate',
        render: text => calcColor(text, 2)

    },
    {
        title: TABLE_HEAD.SIGN_RATE,
        dataIndex: 'signRate',
        key: 'signRate',
        render: text => calcColor(text, 1)
    },
    {
        title: TABLE_HEAD.SATISFY_RATE,
        dataIndex: 'satisfyRate',
        key: 'satisfyRate',
        render: text => calcColor(text, 2)
    }]

export default TableList;