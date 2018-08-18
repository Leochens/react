import React, { Component } from 'react';
import './CommentInput.less';
const id = new Date().getTime();    //临时时间戳id 与后台同步时调用
export default class CommentInput extends Component {
    state={
        inputValue: ''
    }
    handleInputChange = (v) => {
        this.setState({
            inputValue: v.target.value
        })
    }
    handleCommentTopic = () => {
        const {
            topicId,
            TopicActions: {
                actionCommentTopic
            },
            onHideInput,
            receiver
        } = this.props;
        const newComment = {
            id,
            commentator: 1,
            comment_content: this.state.inputValue,
            comment_time: '6:22',
            to: receiver ? receiver.id : null
        }
        actionCommentTopic && actionCommentTopic(topicId, newComment);
        onHideInput && onHideInput();
        this.setState({
            inputValue: ''
        })
    }
    render() {
        const { placeholder } = this.props;
        return (
            <div className="topic-comment-input">
                <input
                    placeholder={placeholder ? placeholder : "写点评论吧~"}
                    onChange={this.handleInputChange}

                    //监听回车事件  提交评论内容
                    onKeyDown={e => e.which === 13 ? this.handleCommentTopic() : null}
                />
                <span className="ok" onClick={this.handleCommentTopic}>写好啦</span>
            </div>
        )
    }
}