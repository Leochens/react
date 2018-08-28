import React, { Component } from 'react';
import './HomeworkDetails.css';
import { Avatar, Switch, } from "antd";
import Message from '../../tools/messageTools';
import { getLocalTime } from '../../tools/dateTools';
import { MESSAGES } from '../../config'

export default class HomeworkDetails extends Component {
    handleToggleExcellent = () => {
        const { switchActions, data: {
            id,
            isExcellent
        } } = this.props;
        switchActions.actionToggleExcellent(id);
        Message.success(isExcellent ?
            `${id}号作业${MESSAGES.UNSET_EXCELENT}` :
            `${id}号作业${MESSAGES.SET_EXCELENT}`)
    }
    render() {
        const { data } = this.props;
        return (
            <div className="studentInfo">
                <span>NO.{data.id}</span> <Avatar
                    src={'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533645592226&di=fd7a29a40669186b181b222c70081836&imgtype=0&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F267f9e2f07082838304837cfb499a9014d08f1a0.jpg'}
                    size="default" shape="square"
                    style={{ margin: '0 5px' }} />
                <div className="homework-info">
                    <div>作业: {data.description}</div>
                    <div>{data.author.nick} &nbsp;
                mid: {data.author.mid} {data.classInfo.name}|{data.teacherInfo.nick}&nbsp;
                点评人: {data.commentator} &nbsp;
                提交时间: {getLocalTime(data.time)}
                    </div>
                </div>
                <span className="excellent">
                    佳作 <Switch
                        onChange={this.handleToggleExcellent}
                        checked={data.isExcellent} />

                </span>
            </div>
        )
    }
}