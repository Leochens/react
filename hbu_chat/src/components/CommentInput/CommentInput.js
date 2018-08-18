import React, { Component } from 'react';
import './CommentInput.less';
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
        const id = new Date().getTime();
        const {
            topicId,
            TopicActions: {
                actionCommentTopic
            },
            onHideInput
        } = this.props;
        const newComment = {
            id,
            commentator: 1,
            comment_content: this.state.inputValue,
            comment_time: '6:22'
        }
        actionCommentTopic && actionCommentTopic(topicId, newComment);
        onHideInput && onHideInput();
        // this.setState({
        //     inputValue: ''
        // })
    }
    render() {
        return (
            <div className="topic-comment-input">
                <input
                    placeholder="写点评论吧~"
                    onChange={this.handleInputChange}
                />
                <span className="ok" onClick={this.handleCommentTopic}>写好啦</span>
            </div>
        )
    }
}