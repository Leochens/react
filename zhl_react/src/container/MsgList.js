import React, { Component } from 'react';
import MsgItem from '../components/MsgItem'
import { connect } from 'react-redux'

import '../App.css'


class MsgList extends Component {
    _renderMsgs = () => {
        const { messages } = this.props;
        return messages.map((item, idx) => {            //渲染输出列表项
            return <MsgItem id={idx} item={item} key={idx} />
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


const mapStateToProps = (state) => {
    return {
        messages: state.itemControl.messages
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MsgList)

