import React, { Component } from 'react';
import { Tabs, Table, Popover, Icon} from 'antd';
import { TABS } from '../../const/config';
import ButtonBox from '../ButtonBox/ButtonBox';
import Tables from '../Tables/Tables';
import './Tabs.css'
import { TABLE_HEAD, BASIC_INFO } from '../../const/config';
import { ColorText } from '../../tools/colorTools';
import ReplyBox from '../ReplyBox/ReplyBox';
const TabPane = Tabs.TabPane;
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
                trigger='click'
                content={content}>
                <Icon style={{fontWeight:600}} type="user" /> 
            </Popover>
                <span>{teacher.nick}</span>
        </div>
    )
}

export default class _Tabs extends Component {

    render() {
        const {
            headList,
            dataList,
            historyList
        } = this.props.tableData;
        const {
            satisfiedList,
            tableAction
        } = this.props;
        const columns = [
            {
                title: TABLE_HEAD.COURSE_NAME,
                key: 'course_name',
                dataIndex: 'course_name',
                // render:''
            },
            {
                title: TABLE_HEAD.START_TIME,
                key: 'time',
                dataIndex: 'time',
                // render:''
            }, {
                title: TABLE_HEAD.TEACHER_NAME,
                key: 'teacher_info',
                dataIndex: 'teacher_info',
                render: text => TeacherInfo(text)
            }, {
                title: TABLE_HEAD.SATISFIED_SCORE,
                key: 'satisfied_score',
                dataIndex: 'satisfied_score',
                render: text => text <= 4 ? <ColorText text={text} type={'warning'} /> : text
            }, {
                title: TABLE_HEAD.SATISFIED_DETAIL,
                key: 'satisfied_detail',
                dataIndex: 'satisfied_detail',
            }, {
                title: TABLE_HEAD.OPERATE,
                key: 'reply_status',
                dataIndex: 'reply_status',
                render: (text, record) => <ReplyBox
                    text={text}
                    editCLassId={record.class_info.id}
                    action={tableAction.actionToggleReply} />
            },
        ]

        console.log('tabs', this.props);
        return (
            <div className="Tabs">
                <Tabs
                    defaultActiveKey="1">
                    <TabPane tab={TABS.LESSON_INFO} key="1">
                        <ButtonBox
                            back={this.props.back} />
                        <h3 className="tabs-title">在学课程</h3>
                        <Tables
                            headList={headList}
                            dataList={dataList} />
                        <h3 className="tabs-title">历史数据</h3>
                        <Tables
                            headList={headList}
                            dataList={historyList} />
                    </TabPane>
                    <TabPane tab={TABS.SATIFY_FEED} key="2">
                        <Table
                            columns={columns}
                            dataSource={satisfiedList}
                        />
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}
