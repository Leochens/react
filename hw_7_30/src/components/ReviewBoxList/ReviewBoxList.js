import React, { Component } from 'react';
import './ReviewBoxList.css'
import { List } from "antd";
import ReviewBox from '../ReviewBox/ReviewBox';
export default class ReviewBoxList extends Component {
    componentDidMount() {
        const { serverActions, filterRules } = this.props;
        serverActions.actionFetchHomeworkList(filterRules)
    }
    render() {
        const { data, serverActions , switchActions} = this.props;
        return (
            <div>
                <List
                    size="small"
                    bordered
                    dataSource={data}
                    renderItem={item =>
                        <ReviewBox
                            serverActions={serverActions}
                            switchActions={switchActions}
                            data={item} />}
                />
            </div>
        )
    }
}

