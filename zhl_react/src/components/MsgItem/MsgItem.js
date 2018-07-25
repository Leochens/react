import React ,{ Component } from 'react';
import './animate.css'
import './MsgItem.css';



export default class MsgItem extends Component{   //defualt  just only one


    handleMoreBtnOnClick=()=>{
        const {onToggleItemPanel,id,onSetCurrentItemId} = this.props;
        console.log(this.props.id);
        onToggleItemPanel && onToggleItemPanel();           //item控制面板
        onSetCurrentItemId && onSetCurrentItemId(id);       //获取到是哪个item被操作
    }
    show=()=>{
        console.log("move");
        
    }
    render(){
        const {item} = this.props
        const topFlag = item.isTop?" isTop":""; 
        return  (
                <li className={"list_item "+topFlag }  onTouchMove={this.show}>

                  <span className="photo">
                      <img className="pic" src={item.icon} alt=""/>
                  </span>
                  <ul className="info">
                      <li className="user_name">{item.title}</li>
                      <li className="content">{item.description}</li>
                  </ul>
                  <span className="msg-more" onClick={this.handleMoreBtnOnClick}>more</span>
                  <span className="time">{item.time}</span>
                </li>

        )
    }
}

