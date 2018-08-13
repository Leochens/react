import React, { Component } from 'react';
import './TopicTabs.less';

let id = 8001;
export default class TopicTabs extends Component {

    handleTabAction = (tab) => {
        const { action } = tab;
        const { topicId, topicAuthorId } = this.props;
        const newComment = {
            id,
            commentator: 1,
            comment_content: '这是一条直接评论',
            comment_time: '6:22'
        }
        action && action(topicId,newComment);
    }

    renderTabs = () => {
        const { tabs } = this.props;
        return tabs.map((item, idx) => {
            return (
                <span 
                key={idx} 
                className="topic-tabs-item"
                onClick={() => this.handleTabAction(item)}>
                    {item.title}
                </span>
            )
        })
    }
    render() {
        return (
            <div className="topic-tabs">
                {this.renderTabs()}
            </div>
        )
    }
}