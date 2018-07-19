import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
import '../App.css'

export default class Panel extends Component {

    onClick = () => {
        const { onClick } = this.props;
        // console.log("edjb");
        if (onClick) {
            onClick();
        }
    }
    addMsgOnClick=()=>{
        const newTitle = this.refs.title.value;   //取得值
        const newDescript = this.refs.decription.value;
        const newTime = this.refs.time.defaultValue;
        const {onClick,unshiftMsg} = this.props;
        if(!newTitle||!newDescript||!newTime)
        {
            alert("数据输入错误,请各数据段是否填写");
            if(onClick)
            {
                onClick();
            }
            return null;
        }
        // console.log(newTitle+' '+newDescript)
        if(unshiftMsg)
        {
            unshiftMsg(newTitle,newDescript,newTime);
        }
        if(onClick)
        {
            onClick();
        }
    }
    getTime=()=>{
        const date = new Date();
        const h = date.getHours();
        const m = date.getMinutes();
        return h+":"+m;
    }
    render() {
        const { isActive } = this.props
        if (!isActive) { return null }
        return (
            <div className="panel" >
                <button className="btn btn-close" onClick={this.onClick}>close</button>
                <div className="panel-content">
                    <input ref="title" className="panel-input" placeholder="Title"></input>
                    <input ref="decription" className="panel-input" placeholder="Description"></input>
                    <input ref="time" className="panel-input" defaultValue={this.getTime()} ></input>
                    <input ref="sub" type="submit" className=" panel-input" value="OK" onClick={this.addMsgOnClick}></input>
                </div>
                
            </div>
        );
    }

}