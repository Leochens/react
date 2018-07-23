import React, { Component } from 'react'
import '../App.css'
import ACTIONS from '../constants';
import { connect } from 'react-redux'
import ITEM from '../actions/itemControlAction';
class AddPanel extends Component {


    //关闭面板
    handleClosePanel = () => {
        const { close } = this.props
        close && close()
    }
    //添加新item
    handleAddNewItem = () => {
        const { handleAddMsg } = this.props;

        const newItem = {
            title: this.refs.title.value,
            description: this.refs.decription.value,
            time: this.refs.time.defaultValue
        }

        if (!newItem.title || !newItem.description || !newItem.time) {
            alert("数据输入错误,请各数据段是否填写");
            this.handleClosePanel()
            return null;
        }
        handleAddMsg && handleAddMsg(newItem);
        this.handleClosePanel()
    }

    //获得当前时间
    getTime = () => {
        const date = new Date();
        const h = date.getHours();
        const m = date.getMinutes();
        return h + ":" + m;
    }

    render() {
        const { isActive } = this.props
        if (isActive !== ACTIONS.SHOW_ADD_PANEL) { return null }
        return (
            <div className="panel" >
                <button className="btn btn-close" onClick={this.handleClosePanel}>close</button>
                <div className="panel-content">
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
        isActive: state.panelControl.addIsActive
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleAddMsg: (item) => dispatch(ITEM.ACTION.addMsg(item)),
        close: () => dispatch({ type: ITEM.TYPE.hideAllPanel })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPanel)