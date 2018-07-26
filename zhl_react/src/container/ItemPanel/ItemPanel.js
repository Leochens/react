import React, { Component } from 'react';
import './ItemPanel.css';
import { connect } from 'react-redux'
import {
    actionSetTopMsg,
    actionCancelSetTopMsg,
    actionDeleteMsg,
    actionDeleteSelectMsg,
    actionToggleItemPanel,
} from '../../actions/itemControlAction';


class ItemPanel extends Component {


    renderSetTop = () => {
        const { currentItem, onSetTopMsg, onCancelSetTopMsg } = this.props;
        const { item } = currentItem;

        if (item.isTop) {
            return (<button className="panel-btn" onClick={onCancelSetTopMsg}>取消置顶</button>)
        } else {
            return (<button className="panel-btn" onClick={onSetTopMsg}>置顶</button>)
        }
    }
    render() {
        const { itemPanelIsActive,
            onToggleitemPanel,
            onDeleteMsg,
            onDeleteSelectMsg } = this.props;

        if (!itemPanelIsActive) { return null }

        return (
            <div className="panel" >
                <button className="item-panel-btn-close" onClick={onToggleitemPanel}>close</button>
                <div className="panel-content">
                    {this.renderSetTop()}
                    <button className="panel-btn" onClick={onDeleteMsg}>删除</button>
                    <button className="panel-btn" onClick={onDeleteSelectMsg}>多选删除</button>
                </div>
            </div>
        )
    }
}
const mapStateToProp = state => {
    return {
        itemPanelIsActive: state.itemControl.itemPanelIsActive,
        currentItem: state.itemControl.currentItem
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onToggleitemPanel: () => dispatch(actionToggleItemPanel()),
        onSetTopMsg: () => dispatch(actionSetTopMsg()),
        onDeleteMsg: () => dispatch(actionDeleteMsg()),
        onDeleteSelectMsg: () => dispatch(actionDeleteSelectMsg()),
        onCancelSetTopMsg: () => dispatch(actionCancelSetTopMsg())
    }
}
export default connect(mapStateToProp, mapDispatchToProps)(ItemPanel)