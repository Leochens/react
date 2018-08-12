import React, { Component } from 'react';
import './TopicComment.less';
// import { Icon } from 'antd-mobile';

export default class TopicComment extends Component {

    static defaultProps = {
        comments: []
    }

    render() {
        const {
            comments
        } = this.props;
        return (
            <div className="topic-comments">
                <div>
                    <div className="topic-comment-items">
                        <span className="topic-commentor"></span>
                    </div>
                </div>
            </div>
        )
    }
}