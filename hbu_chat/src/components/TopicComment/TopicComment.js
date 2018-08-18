import React, { Component } from 'react';
import './TopicComment.less';
// import { Icon } from 'antd-mobile';
let id = 7001;
export default class TopicComment extends Component {
    static defaultProps = {
        comments: []
    }
    handleCommentTopic = (receiverId) => {
        const {
            topicId,
            topicAuthorId,
            TopicActions: {
                actionCommentTopic
            }
        } = this.props;
        const newComment = {
            id,
            commentator: 2,
            comment_content: '这是一条测试的评论',
            to: receiverId,
            comment_time: '8:55'
        }
        actionCommentTopic && actionCommentTopic(topicId, newComment);
        id++;
    }
    renderComments = () => {
        const { comments } = this.props;
        return comments.map((item, id) => {
            return (
                <div className="topic-comment-items"
                    key={id}>
                    <span className="topic-commentor"
                        onClick={() => this.handleCommentTopic(item.commentator.id)}
                    >{item.commentator.nick}</span>
                    {
                        item.to
                            ? <span> 回复 <span className="topic-commentor"
                                onClick={() => this.handleCommentTopic(item.to.id)}
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
            </div>
        )
    }
}