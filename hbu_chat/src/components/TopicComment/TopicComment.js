import React, { Component } from 'react';
import './TopicComment.less';
import CommentInput from '../CommentInput/CommentInput';
// import { Icon } from 'antd-mobile';
let id = 7001;
export default class TopicComment extends Component {
    static defaultProps = {
        comments: []
    }
    state = {
        commentInputIsActive: false,
        receiver: null,
        commentator: 2
    }

    handleShowCommentInput = () => {
        this.setState({
            commentInputIsActive: true
        })
    }
    handleHideCommentInput = () => {
        this.setState({
            commentInputIsActive: false
        }) 
    }
    
    handleReplyComment = (receiver) => {
        this.handleShowCommentInput();
        this.setState({
            receiver
        })
    }
    renderCommentInput = () => {
        const { 
            commentInputIsActive, 
            receiver 
        } = this.state;
        if(commentInputIsActive){
            return <CommentInput 
            topicId = {this.props.topicId}
            TopicActions = { this.props.TopicActions}
            receiver={receiver}
            placeholder = {`回复 ${receiver.nick}:`}
            onHideInput = { this.handleHideCommentInput }
            />
        }else return null;
    }
    renderComments = () => {
        const { comments } = this.props;
        return comments.map((item, id) => {
            return (
                <div className="topic-comment-items"
                    key={id}>
                    <span className="topic-commentor"
                        onClick={() => this.handleReplyComment(item.commentator)}
                    >{item.commentator.nick}</span>
                    {
                        item.to
                            ? <span> 回复 <span className="topic-commentor"
                                onClick={() => this.handleReplyComment(item.to)}
                            >{item.to.nick}</span> </span>
                            : null
                    }
                    : <span >{item.comment_content}</span>
                    {/* <span className="comment_time">{item.comment_time}</span> */}
                </div>
            )
        })
    }
    render() {
        const { comments } = this.props;
        if (Array.isArray(comments) && comments.length === 0) {
            return null;
        }
        return (
            <div className="topic-comments">
                {this.renderComments()}
                {this.renderCommentInput()}
            </div>
        )
    }
}