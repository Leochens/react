import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
export default class _TabBar extends Component {
    render() {
        return (
            <div style={{ position: 'fixed', width:'100%' ,bottom: 0 }}>
                <TabBar tabBarPosition="bottom">
                    <TabBar.Item
                        icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                        title="My">
                        
                    </TabBar.Item>
                </TabBar>
            </div>
        )
    }
}