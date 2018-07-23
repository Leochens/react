import React, { Component } from 'react';
import ItemControlPanel from '../components/ItemControlPanel'
import '../App.css';
import ACTIONS from '../constants';
import { connect } from 'react-redux'

import ITEM from '../actions/itemControlAction'


class MsgItem extends Component {   //defualt  just only one

    constructor() {
        super();
        this.state = {
            itemCtrlIsActive: ACTIONS.HIDE_ALL_PANEL,
        }
    }

    showItemCtrlPanel = () => {
        this.setState({ itemCtrlIsActive: ACTIONS.SHOW_ITEM_CTRL })
    }
    handleClickMsg = () => {
        const { item } = this.props;
        console.log(item)
    }
    hideItemCtrlPanel = () => {
        this.setState({ itemCtrlIsActive: ACTIONS.HIDE_ALL_PANEL })
    }
    handleDelMsg = () => {
        const { id, handleDeleteMsg } = this.props;
        if (handleDeleteMsg) handleDeleteMsg(id);
    }
    handleUpMsg = () => {
        const { handleSetTopMsg, id } = this.props;
        if (handleSetTopMsg) handleSetTopMsg(id);
    }


    render() {
        const { item } = this.props

        return (
            <li className={"list_item"} onClick={this.handleClickMsg}>
                <span className="photo">
                    <img className="pic" src={item.icon} alt="" />
                </span>
                <ul className="info">
                    <li className="user_name">{item.title}</li>
                    <li className="content">{item.description}</li>
                </ul>
                <span className="msg-more" onClick={this.showItemCtrlPanel}>more</span>
                <span className="time">{item.time}</span>

                <ItemControlPanel
                    isActive={this.state.itemCtrlIsActive}
                    close={this.hideItemCtrlPanel}
                    handleDelMsg={this.handleDelMsg}
                    handleUpMsg={this.handleUpMsg}
                    handleDelSelectMsg={this.handleDelSelectMsg} />
            </li>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        itemPanelIsActive: state.panelControl.itemPanelIsActive
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleSetTopMsg: id => dispatch(ITEM.ACTION.setTopMsg(id)),
        handleDeleteMsg: id => dispatch(ITEM.ACTION.deleteMsg(id)),
        handleDeleteSelectMsg: ids => dispatch(ITEM.ACTION.deleteSelectMsg(ids))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MsgItem)

