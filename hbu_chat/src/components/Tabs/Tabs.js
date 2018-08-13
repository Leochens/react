import React, { Component } from 'react';
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import './Tabs.less'

const tabs2 = [
    { title: '树洞', sub: '1' },
    { title: '发帖', sub: '2' },
    { title: '我', sub: '3' },
];

export default class _Tabs extends Component {
    render() {
        return (
            <div className="tab-fixed-bottom">
                <Tabs tabs={tabs2}
                    initialPage={1}
                    tabBarPosition="bottom"
                    renderTab={tab => <span>{tab.title}</span>}
                >
                    {this.props.children}
                </Tabs>
            </div>
        )
    }
}
