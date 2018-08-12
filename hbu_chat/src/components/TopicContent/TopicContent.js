import React, { Component } from 'react';
import './TopicContent.less';
import { Grid } from 'antd-mobile';
export default class TopicContent extends Component {
    render() {
        const { content, pics } = this.props;

        return (
            <div className="topic-content">
                <p className="topic-text">
                    {content}
                </p>
                <div className="topic-pics">
                    <Grid data={pics} columnNum={3}
                        renderItem={item => {
                            return <div className="topic-pics-item">
                                <img src={item.icon} />
                            </div>
                        }}
                        itemStyle={{ margin: '    ' }}
                        hasLine={false}
                    />
                </div>
            </div>
        )
    }
}