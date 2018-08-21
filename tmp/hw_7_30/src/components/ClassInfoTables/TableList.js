import React from 'react';
import { Icon, Popover } from 'antd';
import { TABLE_HEAD, BASIC_INFO } from '../../config';
import { ColorText } from '../../tools/colorTools';
import {Link} from 'react-router'
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
const TeacherInfo = (teacher) => {
    const content = <div>
        <p>{BASIC_INFO.TEACHER} : {teacher.nick}/
            {BASIC_INFO.PERSON_ID} :{teacher.id}/
            {BASIC_INFO.WX_CODE} : {teacher.wxCode}</p>
        <p>{BASIC_INFO.STAFF} : {teacher.realName}/
            {BASIC_INFO.PERSON_ID} :{teacher.mid}/
            {BASIC_INFO.WX_CODE} : {teacher.wxCode}</p>
    </div>
    return (
        <div>
            <Popover
                // trigger='click'
                content={content}>
                <Icon type="user" />
            </Popover>
            <span>{teacher.nick}</span>
        </div>
    )
}
export const TableList = [
    {
        title: TABLE_HEAD.CLASS,
        dataIndex: 'classInfo',
        key: 'classInfo',
        render: text => {
            return (
                <div>
                    <Icon type="exclamation-circle" />
                   &nbsp;
                        {text.name}
                </div >
            )
        }
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
        render: text => TeacherInfo(text)
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