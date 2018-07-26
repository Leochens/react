import React, { Component } from 'react';
import './ItemPanel.css';

export default class ItemPanel extends Component {
    renderSetTop = () => {
        const { allActions } = this.props;
        const { item } = this.props.currentItem;
        if (item.isTop) {
            return (<button className="panel-btn" onClick={allActions.actionCancelSetTopMsg}>取消置顶</button>)
        } else {
            return (<button className="panel-btn" onClick={allActions.actionSetTopMsg}>置顶</button>)
        }
    }
    render() {
        const { itemPanelIsActive, allActions } = this.props;
        if (!itemPanelIsActive) { return null }
        return (
            <div className="panel" onClick={allActions.actionToggleItemPanel}>
                {/* <button className="item-panel-btn-close"
                    onClick={allActions.actionToggleItemPanel}>close</button> */}
                <div className="panel-content">
                    {this.renderSetTop()}
                    <button className="panel-btn"
                        onClick={allActions.actionDeleteMsg}>删除</button>
                    <button className="panel-btn"
                        onClick={allActions.actionToggleMultiDelButton}>多选删除</button>
                </div>
            </div>
        )
    }
}
