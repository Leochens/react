import React, { Component } from 'react';
import './TopicComment.less';
// import { Icon } from 'antd-mobile';

export default class TopicComment extends Component {

    static defaultProps = {
        comments: []
    }
    renderComments = () => {
        const {
            comments
        } = this.props;
        return comments.map((item, id) => {
            return (
                <div className="topic-comment-items"
                    key={id}>
                    <span className="topic-commentor">{item.commentator.nick}</span> : 
                    <span >{item.comment_content}</span>
                </div>
            )
        })
    }
    render() {

        return (
            <div className="topic-comments">
                {this.renderComments()}
            </div>
        )
    }
}