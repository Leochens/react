import React ,{ Component } from 'react';
import '../App.css';



export default class ItemControlPanel extends Component{   //defualt  just only one

    onClick = () => {
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
            <button className="btn btn-close" onClick={this.onClick}>close</button>
            <div className="panel-content">
               <button className="btn panel-btn">置顶</button>
               <button className="btn panel-btn">删除</button>
               <button className="btn panel-btn">多选删除</button>
            </div>
            
        </div>
        )
    }
}