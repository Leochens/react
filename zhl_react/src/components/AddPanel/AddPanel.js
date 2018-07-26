import React, { Component } from 'react'
import './AddPanel'
import './AddPanel.css'
const icon4 = require('../../img/u2.jpg')

export default class AddPanel extends Component {

    //添加新item
    handleAddNewItem = () => {
        const { allActions } = this.props;
        console.log(allActions);
        const newItem = {
            icon: icon4,
            title: this.refs.title.value,
            description: this.refs.decription.value,
            time: this.refs.time.value,
            isTop: false
        }

        if (!newItem.title || !newItem.description || !newItem.time) {
            alert("数据输入错误,请各数据段是否填写");
            return null;
        }
        allActions.actionAddMsg && allActions.actionAddMsg(newItem);    //添加
        allActions.actionToggleAddPanel && allActions.actionToggleAddPanel(); //关闭面板
    }

    //获得当前时间
    getTime = () => {
        const date = new Date();
        return date.getHours() + ":" + date.getMinutes();
    }

    render() {
        const { addPanelIsActive, allActions} = this.props;
        if (!addPanelIsActive) { return null }
        return (
            <div className="panel" >
                <button className="btn btn-close" onClick={allActions.actionToggleAddPanel}>X</button>
                <div className="add-panel-content">
                    <input ref="title" className="panel-input" placeholder="Title"></input>
                    <input ref="decription" className="panel-input" placeholder="Description"></input>
                    <input ref="time" className="panel-input" defaultValue={this.getTime()} ></input>
                    <input ref="sub" type="submit" className=" panel-input" value="OK" onClick={this.handleAddNewItem}></input>
                </div>

            </div>
        );
    }
}



