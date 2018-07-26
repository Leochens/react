import React, { Component } from 'react';
import MsgItem from '../MsgItem/MsgItem'
import './MsgList.css'

export default class MsgList extends Component {

    _renderMsgs = () => {
        const { messages, allActions } = this.props;
        return messages.map((item, idx) => {
            return <MsgItem
                onToggleItemPanel={allActions.actionToggleItemPanel}
                onSetCurrentItem={allActions.actionSetCurrentItem}
                allActions={allActions}
                multiDeleteIsActive = {this.props.multiDeleteIsActive}
                deleteQueue = {this.props.deleteQueue}
                id={idx} 
                item={item} 
                key={idx} />
        })
    }
    render() {
        return (
            <section className="main">
                <ul className="list" ref="msgList">
                    {this._renderMsgs()}
                </ul>
            </section>
        )
    }
}


