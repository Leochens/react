import React, { Component } from 'react';
import './TopicHeader.less';
import { Icon } from 'antd-mobile';

export default class TopicHeader extends Component {
    render() {
        const {
            userPhoto,
            userNick,
            publicTime
        } = this.props;
        return (
            <div className="topic-header">
                <span className="user-photo">
                    <img src={userPhoto} alt="" />
                </span>
                <div className="header-content">
                    <div className="user-nick">{userNick}</div>
                    <div className="public-time">{publicTime}</div>
                </div>
                <div className="more">
                    <Icon type="ellipsis" />
                </div>
            </div>
        )
    }
}