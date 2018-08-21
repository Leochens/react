import React, { Component } from 'react';
import { Input, Icon, } from "antd";
import Message from '../../tools/messageTools';
import './CommentInputBox.css';
import { MESSAGES } from '../../config'
let id = 0;     //临时comment id
export default class CommentInputBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: ''
        }
    }
    getInputValue = (e) => {
        this.setState({
            comment: e.target.value
        })
    }
    onCommentHomework = () => {
        
        const { commentActions, homeworkId } = this.props;
        if(!this.state.comment) {
            Message.error(MESSAGES.COMMENT_NEED_CONTENT);
            return null;
        }
        debugger
        const comment = {
            id,
            commentator: {
                role: '点评老师',
                nick: '小林老师'
            },
            content: this.state.comment,
            from: 'teacher',
            status: 'unrevised',
            reason: '',
            nick: '小庄老师',
            time: 1533362538734
        }
        this.setState({
            comment: ''
        })
        commentActions.actionCommentHomework(homeworkId, comment);
        id++;
        Message.success(MESSAGES.COMMENT_SUC)
    }

    render() {
        return (
            <div>
                <Input
                    onChange={this.getInputValue}
                    onPressEnter={this.onCommentHomework}
                    value={this.state.comment}
                    placeholder="请输入你的点评"
                    addonAfter={<div onClick={this.onCommentHomework}><Icon type="check-circle-o" /> 发送</div>} />
            </div>
        )
    }
}