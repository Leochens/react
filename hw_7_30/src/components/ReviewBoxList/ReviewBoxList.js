import React, { Component } from 'react';
import './ReviewBoxList.css'
import { List } from "antd";
const Item = List.Item

export default class ReviewBoxList extends Component {
    componentDidMount() {
        const { serverActions,filterRules } = this.props;
        serverActions.actionFetchHomeworkList(filterRules)
    }
    render() {
        console.log('data here => ',this.props.data);
        return (
            <div>
                ReviewBoxList
            </div>
        )
    }
}

