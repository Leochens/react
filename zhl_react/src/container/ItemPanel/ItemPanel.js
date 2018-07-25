import React, { Component } from 'react';
import './ItemPanel.css';
import { connect } from 'react-redux'
import ITEM from '../../actions/itemControlAction';


class ItemPanel extends Component {



    render() {
        const { itemPanelIsActive,
                onToggleItemPanel,
                onSetTopMsg,
                onDeleteMsg,
                onDeleteSelectMsg } = this.props;

        console.log("ITEM_APNEL");
        console.log(itemPanelIsActive)

        if (!itemPanelIsActive) {return null}

        return (
            <div className="panel" >
                <button className="item-panel-btn-close" onClick={onToggleItemPanel}>close</button>
                <div className="panel-content">
                    <button className="panel-btn" onClick={onSetTopMsg}>置顶</button>
                    <button className="panel-btn" onClick={onDeleteMsg}>删除</button>
                    <button className="panel-btn" onClick={onDeleteSelectMsg}>多选删除</button>
                </div>
            </div>
        )
    }
}
const mapStateToProp = state => {
    return {
        itemPanelIsActive: state.itemControl.itemPanelIsActive
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onToggleItemPanel: () => dispatch(ITEM.ACTION.actionToggleItemPanel()),
        onSetTopMsg: () => dispatch(ITEM.ACTION.actionSetTopMsg()),
        onDeleteMsg: () => dispatch(ITEM.ACTION.actionDeleteMsg()),
        onDeleteSelectMsg: () => dispatch(ITEM.ACTION.actionDeleteSelectMsg())
    }
}
export default connect(mapStateToProp, mapDispatchToProps)(ItemPanel)