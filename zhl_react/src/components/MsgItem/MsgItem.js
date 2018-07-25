import React ,{ Component } from 'react';
import './MsgItem.css';



export default class MsgItem extends Component{   //defualt  just only one

    handleMoreBtnOnClick=()=>{
        const {item,onToggleItemPanel,id,onSetCurrentItem} = this.props;
        const currentItem = {
            id,item
        }
        onToggleItemPanel && onToggleItemPanel();           //item控制面板
        onSetCurrentItem && onSetCurrentItem(currentItem);       //获取到是哪个item被操作
    }

    render(){
        const {item} = this.props;

        const topFlag = item.isTop?" isTop":""; 
        return  (
                <li className={"list_item "+topFlag}  
                    onTouchStart={this.show}
                    onTouchEnd={this.hide}>
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

