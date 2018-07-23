import React, { Component } from 'react';
import '../App.css'
import MsgItem from './MsgItem'
export default class List extends Component {
    renderMsgs = () => {
        console.log(this.props.messages)
        const messageViews = this.props.messages.map((item, id) => {
          return (
          <div key={id} onClick={this.props.renderDialog}>  
            <MsgItem key={id}  delectDelIsActive={this.props.delectDelIsActive}
            item={item}  ref="msg"
            delMsg={this.props.delMsg} 
            upMsg={this.props.upMsg}
            />
          </div>)
        })

        return messageViews
    
      }
      renderUpMsg=()=>{
        const upMsgs = this.props.upMsgs.map((item, id) => {
          return (
            <div key={id} onClick={this.props.renderDialog}> 
            
            <MsgItem isUp={true} 
             key={id}  
             delectDelIsActive={this.props.delectDelIsActive}
            item={item}  ref="msg"
            delMsg={this.props.delMsg} 
            upMsg={this.props.upMsg}
            />
          </div>)
        })
        return upMsgs;
      }
    render() {
        return (
            <div className="main">
                <ul className="list" ref="msgList">
                    {this.renderUpMsg()}
                    {this.renderMsgs()}
                </ul>
            </div>
        )
    }
}