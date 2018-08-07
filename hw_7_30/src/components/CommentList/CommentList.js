import React, { Component } from 'react';
import { List } from 'antd'
import "./CommentList.css";
import { getLocalTime } from '../../tools/dateTools';
//评论列表

class Item extends Component {

    render() {
        const { record } = this.props;
        if (record.from === 'author') {   //学生
            return (
                <div className="comment-list-item">
                    <div>{record.nick} mid: {record.mid}
                        <span className='comment-time'>{getLocalTime(record.time)}</span>
                    </div>
                    <div className="comment-content">{record.content}</div>
                </div>
            )
        } else { //老师
            return (

                <div className="comment-list-item">
                    {record.nick} ({record.commentator.role} {record.commentator.nick})
                        <span className='comment-time'>{getLocalTime(record.time)}</span>
                    <div className="comment-content">{record.content}</div>
                    {
                        record.status === 'reject' ?
                            <div className="reject-reason">(消息被退回，退回原因: {record.reason})</div> :
                            null
                    }
                </div>
            )

        }
    }

}

export default class CommentList extends Component {

    render() {

        const { data } = this.props;

        return (
            <div>
                <List
                    className="comment-list"
                    size="small"
                    bordered
                    dataSource={data}
                    renderItem={item => <Item record={item} />}
                />
            </div>
        )
    }
}
