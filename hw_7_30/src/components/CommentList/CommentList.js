import React, { Component } from 'react';
import { List, Modal, Input } from 'antd'
import "./CommentList.css";
import { getLocalTime } from '../../tools/dateTools';
//评论列表
class Item extends Component {
    onRejectComment = () => {
        const {
            toggleModal,
            setCommentId,
            record: {
                id
            }
        } = this.props;
        setCommentId && setCommentId(id);
        toggleModal && toggleModal();
    }
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
                            <div className="reject-comment"
                                onClick={this.onRejectComment}
                            >
                                退回
                            </div>
                    }
                </div>
            )

        }
    }

}


export default class CommentList extends Component {

    state = {
        rejectModalStatus: false,
        rejectReason: '',
        commentId:null
    }
    setCommentId = (id) => {
        this.setState({
            commentId: id
        })
    }
    handleInputChange = (e) => {
        this.setState({
            rejectReason: e.target.value
        })
    }
    handleCancel = () => {
        this.handleToggleModal();
        this.setState({
            rejectReason: ''
        })
    }
    handleOk = () => {
        const {
            commentActions: {
                actionRejectComment
            }
        } = this.props;
        const { commentId, rejectReason } = this.state;
        actionRejectComment(commentId, rejectReason);

        this.handleToggleModal();
        this.setState({
            rejectReason:''
        })
    }
    handleToggleModal = () => {
        this.setState({
            rejectModalStatus: !this.state.rejectModalStatus
        })
    }
    render() {
        const { data,
            commentActions
        } = this.props;
        console.log('in CommentList reject =>', commentActions);
        return (
            <div>
                <List
                    className="comment-list"
                    size="small"
                    bordered
                    dataSource={data}
                    renderItem={item => <Item
                        record={item}
                        reject={commentActions.actionRejectComment}
                        toggleModal={this.handleToggleModal}
                        setCommentId={this.setCommentId} />}
                />
                <Modal
                    title="点评退回"
                    visible={this.state.rejectModalStatus}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Input
                        onChange={this.handleInputChange}
                        value={this.state.rejectReason} 
                        placeholder="请输入退回原因"/>
                </Modal>
            </div>
        )
    }
}
