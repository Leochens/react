import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './MessageList.less'
import MessageItem from '../../components/MessageItem/MessageItem';


class MessageList extends Component {
    render() {
        return (
            <div className="msg-list">
                <MessageItem></MessageItem>
                <MessageItem></MessageItem>
                <MessageItem></MessageItem>
                <MessageItem></MessageItem>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);


