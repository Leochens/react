import React ,{ Component } from 'react';
import '../App.css';



export default class ItemControlPanel extends Component{   //defualt  just only one

    
    delMsg=()=>{
        console.log("delMsg in ItemControlPanel");
        const {delMsg} = this.props;
        if(delMsg)  delMsg();  //传递给父组件MsgItems 
        this.close();
    }
    upMsg=()=>{
        console.log("upMsg in ItemControlPanel");
        const {upMsg} = this.props;
        if(upMsg)  upMsg();  //传递给父组件MsgItems 
        this.close();
    }
    
    selectDel=()=>{
        const {delSelectMsg} = this.props;
        console.log("selectDel in ItemControlPanel")
        if(delSelectMsg)
        { delSelectMsg() }
        this.close();
    }
    close=()=>{
        const { onClick } = this.props;
        if (onClick) {
            onClick();
        }
    }
    render(){
        const {isActive} = this.props;
        if(!isActive)   return null; 
        return  (
            <div className="panel" >
            <button className="btn btn-close" onClick={this.close}>close</button>
            <div className="panel-content">
               <button className="btn panel-btn" onClick={this.upMsg}>置顶</button>
               <button className="btn panel-btn" onClick={this.delMsg}>删除</button>
               <button className="btn panel-btn" onClick={this.selectDel}>多选删除</button>
            </div>
            
        </div>
        )
    }
}