import React from 'react';
import { USER_INFO } from '../../const/config';
import { Avatar } from 'antd'
const urlToAvatar = (url, shape, size) => {
    return <Avatar src={url} shape={shape} size={size} />
}
const arrayTransform = text => {
    if (Array.isArray(text) && text.length === 0){
        return <span>{'无'}</span>
    }else{
        return <span>{text.toString()}</span>;
    }
}
const headList = [
    {
        title: ' ',
        dataIndex: 'hurl',
        key: 'hurl',
        render: text => urlToAvatar(text, 'square', 'small')
    },
    {
        title: USER_INFO.NICK,
        dataIndex: 'nick',
        key: 'nick',
        // render: text => 
    },
    {
        title: USER_INFO.ID,
        dataIndex: 'mid',
        key: 'mid',
        // render: text => 
    },
    {
        title: USER_INFO.ENTER_DATE,
        dataIndex: 'enter_time',
        key: 'enter_time',
        // render: text => 
    },
    {
        title: USER_INFO.START_TIME,
        dataIndex: 'start_time',
        key: 'start_time',
        // render: text => 
    },
    {
        title: USER_INFO.LEARNING_LESSON,
        dataIndex: 'learning_lessons',
        key: 'learning_lessons',
        render: text => arrayTransform(text) 
    },
    {
        title: USER_INFO.TEACHERS,
        dataIndex: 'teachers',
        key: 'teachers',
        render: text => arrayTransform(text) 
    },
]

export default headList;

