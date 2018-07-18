import React ,{ Component } from 'react';
import './App.css';



export default class MsgItem extends Component{   //defualt  just only one

    onMsgClick=()=>{
        const {item} = this.props
        console.log(item)
    }
    render(){
        const {item} = this.props
        
        return  (
                <li className="list_item" onClick={this.onMsgClick}>
                  <span className="photo">
                      <img className="pic" src={item.icon} alt=""/>
                  </span>
                  <ul className="info">
                      <li className="user_name">{item.title}</li>
                      <li className="content">{item.description}</li>
                  </ul>
                  <span className="time">{item.time}</span>
                </li>
        )
    }
}