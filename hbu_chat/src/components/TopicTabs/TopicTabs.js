import React, { Component } from 'react';
import './TopicTabs.less';

let id = 8001;
export default class TopicTabs extends Component {

    handleCommentTopic = () => {
        const {
            topicId,
            TopicActions: {
                actionCommentTopic
            }
        } = this.props;
        const newComment = {
            id,
            commentator: 1,
            comment_content: '这是一条直接评论',
            comment_time: '6:22'
        }
        actionCommentTopic && actionCommentTopic(topicId, newComment);
    }
    handleHitTopic = () => {
        const {
            topicId,
            TopicActions: {
                actionHitTopic
            }
        } = this.props;
        const who = 1;
        actionHitTopic && actionHitTopic(topicId, who);

    }
    render() {
        return (
            <div className="topic-tabs">
                <span
                    className="topic-tabs-item"
                >
                    分享
                </span>
                <span
                    className="topic-tabs-item"
                    onClick={this.handleCommentTopic}>
                    评论
                </span>
                <span
                    className="topic-tabs-item"
                    onClick = {this.handleHitTopic}
                >
                    赞
                </span>




            </div>
        )
    }
}