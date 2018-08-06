import React, { Component } from 'react';
import { Icon } from 'antd';
import './ReplyBox.css'

export default class ReplyBox extends Component {

    callBack = () => {
        const { action, editCLassId } = this.props; 
        console.log('func?', action);
        action(editCLassId);
    }
    render() {
        const { text } = this.props;
        return (
            <div onClick={this.callBack}>
                {text ?
                    <div>已回复</div> :
                    <div className="need-reply">待回复 <Icon type="mail" /> </div>
                }
            </div>
        )
    }
}