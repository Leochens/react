import React ,{ Component } from 'react';
import ItemControlPanleView from '../components/ItemControlPanel'
import '../App.css';



export default class MsgItem extends Component{   //defualt  just only one

    constructor(props)
    {
        super(props);
        this.state={
            itemCtrlIsActive:false,
          
        }
        const {isUp,item} = this.props

    }
    onMsgClick=()=>{
        const {item} = this.props;
        console.log(item)
    }
    itemControl=()=>{
        this.showItemCtrlPanel();
    }
    showItemCtrlPanel=()=>{
        this.setState({itemCtrlIsActive:!this.state.itemCtrlIsActive})
      }

    delMsg=()=>{
        console.log("delMsg in MsgItem");
        const {item,delMsg} = this.props;
        if(delMsg)  delMsg(item.id);       //传递给父组件App 调用App的删除函数删除 state里 
    }
    upMsg=()=>{
        console.log("upMsg in MsgItem");
        const {item,upMsg} = this.props;
        if(upMsg)  upMsg(item.id);  //传递给父组件App
    }

    getRadio(id){
        const {delectDelIsActive} = this.props;
        if(delectDelIsActive)  return (
            <input className="m_radio" id={id}  type="radio" />
        )
    }
    //多级调用

    delSelectMsg=(id)=>{
        console.log("delSelectMsg in MsgItem");
        const {delectDelIsActive,showRadios} = this.props;
        if(showRadios) showRadios();
    }

    render(){
        const {isUp,item} = this.props
        let upClass ='';
        if(isUp)
            upClass = 'isUp '
        console.log(this.isUp)
        return  (
                <li className={"list_item "+upClass} onClick={this.onMsgClick}>
                {this.getRadio(item.id)}
                  <span className="photo">
                      <img className="pic" src={item.icon} alt=""/>
                  </span>
                  <ul className="info">
                      <li className="user_name">{item.title}</li>
                      <li className="content">{item.description}</li>
                  </ul>
                  <span className="msg-more" onClick={this.itemControl}>more</span>
                  <span className="time">{item.time}</span>
                  <ItemControlPanleView 
                    isActive={this.state.itemCtrlIsActive} 
                    onClick={this.showItemCtrlPanel} 
                    delMsg={this.delMsg}
                    upMsg={this.upMsg}  
                    delSelectMsg = {this.delSelectMsg}> 
                   </ItemControlPanleView>
                </li>

        )
    }
}