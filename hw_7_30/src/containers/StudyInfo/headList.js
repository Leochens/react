import React from 'react';
import { Icon } from 'antd';
import { TABLE_HEAD } from '../../const/config';
import { ColorText } from '../../tools/colorTools';
const transformIcon = (text) => {
    switch (text) {
        case 1: return <Icon style={{ fontWeight: 700, fontSize: 25 }} type="check" />;
        case 0: return <Icon style={{ fontWeight: 700, fontSize: 25, color: 'red' }} type="close" />;
        case -1: return <Icon style={{ fontWeight: 700, fontSize: 25 }} type="minus" />;
        default: return null;
    }
}
const headList = [
    {
        title: TABLE_HEAD.COURSE_NAME,
        dataIndex: 'course_name',
        key: 'course_name',
        align: 'center',
        // render: text
    },
    {
        title: TABLE_HEAD.TIME,
        dataIndex: 'time',
        key: 'time',
        align: 'center',
        // render: text
    },
    {
        title: TABLE_HEAD.ENTER_STATUS,
        dataIndex: 'enter_status',
        key: 'enter_status',
        align: 'center',
        render: text => transformIcon(text)
    },
    {
        title: TABLE_HEAD.HOMEWORK_STATUS,
        dataIndex: 'homework_status',
        key: 'homework_status',
        align: 'center',
        render: text => transformIcon(text)

    },
    {
        title: TABLE_HEAD.REVIEW_STATUS,
        dataIndex: 'review_status',
        key: 'review_status',
        align: 'center',
        render: text => transformIcon(text)

    },
    {
        title: TABLE_HEAD.CLOCK_IN_STATUS,
        dataIndex: 'clockin_status',
        key: 'clockin_status',
        align: 'center',
        render: text => transformIcon(text)
    },
    {
        title: TABLE_HEAD.SATISFIED_SCORE,
        dataIndex: 'satisfied_score',
        key: 'satisfied_score',
        align: 'center',
        render: text => {
            return text<=4 ? <ColorText text={text} type="warning"/>:text 
        }
    },

]

export default headList;

