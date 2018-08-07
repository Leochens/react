import React, { Component } from 'react';
import './ReviewBox.css'
export default class ReviewBox extends Component {
    componentDidMount() {
        const { serverActions,filterRules } = this.props;
        serverActions.actionFetchHomeworkList(filterRules)
    }
    render() {
        return (
            <div>
                ReviewBox
            </div>
        )
    }
}

