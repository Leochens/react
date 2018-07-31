import React, { Component } from 'react';
import { Tabs } from 'antd';
import { TABS }from '../../const/config';
import ButtonBox from '../ButtonBox/ButtonBox';
import Tables from '../Tables/Tables';
import './Tabs.css'
const TabPane = Tabs.TabPane;

export default class _Tabs extends Component {

    render() {
        const {
            headList,
            dataList,
            historyList,
        } = this.props.tableData;

        return (
            <div className="Tabs">
                <Tabs
                    defaultActiveKey="1">
                    <TabPane tab={TABS.LESSON_INFO} key="1">
                        <ButtonBox />
                        <h3 className="tabs-title">在学课程</h3>
                        <Tables
                            headList={headList}
                            dataList={dataList} />
                        <h3 className="tabs-title">历史数据</h3>
                        <Tables
                            headList={headList}
                            dataList={historyList} />
                    </TabPane>
                    <TabPane tab={TABS.SATIFY_FEED} key="2">暂无数据</TabPane>
                </Tabs>
            </div>
        )
    }
}
