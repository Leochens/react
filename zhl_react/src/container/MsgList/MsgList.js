import React, { Component } from 'react';
import './MsgList.css'
import MsgItem from '../../components/MsgItem/MsgItem'
import { connect } from 'react-redux'
import ITEM from '../../actions/itemControlAction';



class MsgList extends Component {

    _renderMsgs = () => {
        const { messages } = this.props;
        return messages.map((item, idx) => {
            return <MsgItem
                {...this.props}
                id={idx} item={item} key={idx} />
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


//in
const mapStateToProps = (state) => {
    return {
        messages: state.itemControl.messages,
        currentItem: state.itemControl.currentItem,
        itemPanelIsActive: state.itemControl.itemPanelIsActive
    }
}

//out
const mapDispatchToProps = (dispatch) => {
    return {

        onToggleItemPanel: () => dispatch(ITEM.ACTION.actionToggleItemPanel()),
        onSetCurrentItem: (currentItem) => dispatch(ITEM.ACTION.actionSetCurrentItem(currentItem))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MsgList)

