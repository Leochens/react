import React, { Component } from 'react';
import './MessageItem.less';

export default class MessageItem extends Component {
    render() {
        return (
            <div className="msg-item-wraper">
                <div className="msg-item-header">
                    <span className="msg-item-header-photo"><img src="" alt=""/></span>
                    <div className="msg-item-header-content">
                        <div ></div>
                    </div>
                </div>
            </div>
        )
    }
}