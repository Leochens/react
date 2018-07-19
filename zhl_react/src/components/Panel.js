import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
import '../App.css'

export default class Panel extends Component {

    onClick = () => {
        const { onClick } = this.props;
        if (onClick) {
            onClick();
        }
    }
    addMsgOnClick=()=>{
        const newTitle = this.refs.title.value;   //取得值
        const newDescript = this.refs.decription.value;
        const {unshiftMsg} = this.props;
        // console.log(newTitle+' '+newDescript)
        if(unshiftMsg)
        {
            unshiftMsg(newTitle,newDescript)
        }
        
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
                    <input ref="sub" type="submit" className=" panel-input" value="OK" onClick={this.addMsgOnClick}></input>
                </div>
                
            </div>
        );
    }

}