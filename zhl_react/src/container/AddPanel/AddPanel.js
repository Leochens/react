import React, { Component } from 'react'
import './AddPanel'
import './AddPanel.css'
import { connect } from 'react-redux'
import ITEM from '../../actions/itemControlAction';
const icon4 = require('../../img/u4.jpg')

class AddPanel extends Component {

    //添加新item
    handleAddNewItem = () => {
        const { onAddMsg } = this.props;

        const newItem = {
            icon: icon4,
            title: this.refs.title.value,
            description: this.refs.decription.value,
            time: this.refs.time.defaultValue,
            isTop: false
        }

        if (!newItem.title || !newItem.description || !newItem.time) {
            alert("数据输入错误,请各数据段是否填写");
            return null;
        }
        onAddMsg && onAddMsg(newItem);
    }

    //获得当前时间
    getTime = () => {
        const date = new Date();
        return date.getHours() + ":" + date.getMinutes();
    }

    render() {
        const { addPanelIsActive } = this.props;
        if (!addPanelIsActive) { return null }
        return (
            <div className="panel" >
                <button className="btn btn-close" onClick={this.props.onToggleAddPanel}>X</button>
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



const mapStateToProps = (state) => {
    return {
        addPanelIsActive: state.itemControl.addPanelIsActive
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onAddMsg: (item) => dispatch(ITEM.ACTION.actionAddMsg(item)),
        onToggleAddPanel: () => dispatch(ITEM.ACTION.actionToggleAddPanel())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPanel)