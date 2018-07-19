import React ,{ Component } from 'react';
import ItemControlPanleView from '../components/ItemControlPanel'
import '../App.css';



export default class MsgItem extends Component{   //defualt  just only one

    constructor()
    {
        super();
        this.state={
            itemCtrlIsActive:false
        }
    }
    onMsgClick=()=>{
        const {item} = this.props;
        console.log(item)
    }
    itemControl=()=>{
        const {itemControl}=this.props;
        this.showItemCtrlPanel();
    }
    showItemCtrlPanel=()=>{
        this.setState({itemCtrlIsActive:!this.state.itemCtrlIsActive})
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
                  <span className="msg-more" onClick={this.itemControl}>more</span>
                  <span className="time">{item.time}</span>
                  <ItemControlPanleView isActive={this.state.itemCtrlIsActive} onClick={this.showItemCtrlPanel}> </ItemControlPanleView>
                </li>

        )
    }
}