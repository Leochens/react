import React, { Component } from 'react';
import { Icon } from 'antd';
import './ReplyBox.css'

export default class ReplyBox extends Component {

    callBack = (id) => {
        const { action } = this.props;
        console.log('func?', action);
        action(id);
    }
    render() {
        const { text, editCLassId } = this.props;
        console.log('状态', text);
        return (
            <div onClick={this.callBack.bind(this, editCLassId)}>
                {text ?
                    <div>已回复</div> :
                    <div className="need-reply">待回复 <Icon type="mail" /> </div>
                }
            </div>
        )
    }
}