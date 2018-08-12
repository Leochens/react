import React, { Component } from 'react';
import './TopicTabs.less'
export default class TopicTabs extends Component {
    renderTabs = () => {
        const { tabs } = this.props;
        return tabs.map((item, idx) => {
            return (
                <span key={idx} className="topic-tabs-item">
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