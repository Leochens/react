import React, { Component } from 'react';
import {connect} from 'react-redux'
import ITEM from '../actions/itemControlAction'

class ItemPanel extends Component{

    render(){
        return (
        <div className="panel" >
            <button className="btn btn-close" onClick={this.close}>close</button>
            <div className="panel-content">
                <button className="btn panel-btn" onClick={}>置顶</button>
                <button className="btn panel-btn" onClick={}>删除</button>
                <button className="btn panel-btn" onClick={}>多选删除</button>
            </div>
        </div>
        )
    }
}


