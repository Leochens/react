import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
export default class _TabBar extends Component {
    render() {
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                <TabBar tabBarPosition="bottom">
                    <TabBar.Item
                        icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                        title="My"
                    >
                    </TabBar.Item>
                </TabBar>
            </div>
        )
    }
}