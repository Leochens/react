import React ,{ Component } from 'react';
import ItemControlPanel from '../components/ItemControlPanel'
import '../App.css';
import ACTIONS from '../constants';
import { connect } from 'react-redux'

import ITEM from '../actions/itemControlAction'


class MsgItem extends Component{   //defualt  just only one

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
        const {id,handleDeleteMsg} = this.props;
        if(handleDeleteMsg)  handleDeleteMsg(id);       //传递给父组件App 调用App的删除函数删除 state里 
    }
    handleUpMsg=()=>{
        const {handleSetTopMsg,id} = this.props;
        if(handleSetTopMsg)  handleSetTopMsg(id);  //传递给父组件App
    }

    // getRadio(id){
    //     const {delectDelIsActive} = this.props;
    //     if(delectDelIsActive)  return (
    //         <input className="m_radio" id={id}  type="radio" />
    //     )
    // }
    //多级调用

    // handleDelSelectMsg=(id)=>{
    //     const {showRadios} = this.props;
    //     if(showRadios) showRadios();
    // }

    render(){
        const {item} = this.props

        return  (
                <li className={"list_item "} onClick={this.handleClickMsg}>
                {/* {this.getRadio(item.id)} */}
                  <span className="photo">
                      <img className="pic" src={item.icon} alt=""/>
                  </span>
                  <ul className="info">
                      <li className="user_name">{item.title}</li>
                      <li className="content">{item.description}</li>
                  </ul>
                  <span className="msg-more" onClick={this.itemControl}>more</span>
                  <span className="time">{item.time}</span>

                  <ItemControlPanel 
                    isActive={this.state.itemCtrlIsActive} 
                    close={this.handleClosePanel} 
                    handleDelMsg={this.handleDelMsg}
                    handleUpMsg={this.handleUpMsg}  
                    handleDelSelectMsg = {this.handleDelSelectMsg}/> 
                </li>

        )
    }
}

const mapStateToProps =(state)=>{
    return {
        itemPanelIsActive:state.panelControl.itemPanelIsActive
    }
}
const mapDispatchToProps =(dispatch)=>{
    return {
        handleSetTopMsg:id=>dispatch(ITEM.ACTION.setTopMsg(id)),
        handleDeleteMsg : id=>dispatch(ITEM.ACTION.deleteMsg(id)),
        handleDeleteSelectMsg:ids=>dispatch(ITEM.ACTION.deleteSelectMsg(ids))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MsgItem)

