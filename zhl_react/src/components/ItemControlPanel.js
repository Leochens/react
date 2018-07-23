import React, { Component } from 'react';
import '../App.css';
import ACTIONS from '../constants';



export default class ItemControlPanel extends Component {

    handleDelMsg = () => {
        const { handleDelMsg } = this.props;
        handleDelMsg && handleDelMsg();   
        this.close();
    }

    handleUpMsg = () => {
        const { handleUpMsg } = this.props;
        handleUpMsg && handleUpMsg();  
        this.close();
    }

    handleDelSelectMsg = () => {
        const { handleDelSelectMsg } = this.props;
        handleDelSelectMsg && handleDelSelectMsg()
        this.close();
    }

    close = () => {
        const { close } = this.props;
        close && close()
    }

    render() {
        const { isActive } = this.props;
        if (isActive !== ACTIONS.SHOW_ITEM_CTRL) return null;
        return (
            <div className="panel" >
                <button className="btn btn-close" onClick={this.close}>close</button>
                <div className="panel-content">
                    <button className="btn panel-btn" onClick={this.handleUpMsg}>置顶</button>
                    <button className="btn panel-btn" onClick={this.handleDelMsg}>删除</button>
                    <button className="btn panel-btn" onClick={this.handleDelSelectMsg}>多选删除</button>
                </div>

            </div>
        )
    }
}