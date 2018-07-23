import React ,{ Component } from 'react';
import ItemControlPanleView from '../components/ItemControlPanel'
import '../App.css';
import ACTIONS from '../constants';



export default class MsgItem extends Component{   //defualt  just only one

    constructor()
    {
        super();
        this.state={
            itemCtrlIsActive:ACTIONS.HIDE_ALL_PANEL,
        }
    }
    handleClickMsg=()=>{
        const {item} = this.props;
        console.log(item)
    }
    itemControl=()=>{
        this.showItemCtrlPanel();
    }
    showItemCtrlPanel=()=>{
        this.setState({itemCtrlIsActive:ACTIONS.SHOW_ITEM_CTRL})
      }
    handleClosePanel=()=>{
        this.setState({itemCtrlIsActive:ACTIONS.HIDE_ALL_PANEL})
    }
    handleDelMsg=()=>{
        const {id,handleDelMsg} = this.props;
        if(handleDelMsg)  handleDelMsg(id);       //传递给父组件App 调用App的删除函数删除 state里 
    }
    handleUpMsg=()=>{
        const {item,handleUpMsg,id} = this.props;
        if(handleUpMsg)  handleUpMsg(item,id);  //传递给父组件App
    }

    getRadio(id){
        const {delectDelIsActive} = this.props;
        if(delectDelIsActive)  return (
            <input className="m_radio" id={id}  type="radio" />
        )
    }
    //多级调用

    handleDelSelectMsg=(id)=>{
        const {showRadios} = this.props;
        if(showRadios) showRadios();
    }

    render(){
        const {item} = this.props

        return  (
                <li className={"list_item "} onClick={this.handleClickMsg}>
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
                    close={this.handleClosePanel} 
                    handleDelMsg={this.handleDelMsg}
                    handleUpMsg={this.handleUpMsg}  
                    handleDelSelectMsg = {this.handleDelSelectMsg}> 
                   </ItemControlPanleView>
                </li>

        )
    }
}