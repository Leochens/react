import React, { Component } from 'react';
import '../App.css';
import {connect} from 'react-redux'
import ITEM from '../actions/itemControlAction';
const search = require('../img/search.png')
const more = require('../img/Add.png')

 class WxHeader extends Component {


    render() {
        
        return (
        <header>
            <span className="title">
                微信
            </span>
            <div className="wraper">
                <span className="search">
                    <img src={search} alt="" />
                </span>
                <span className="more" onClick={this.props.showAddPanel}>
                    <img src={more} alt="" />
                </span>
            </div>
        </header>
        )
    }
}
const mapStateToProps=()=>{
    return {}
}   
const mapDispatchToProps=(dispatch)=>{
    
    return {showAddPanel:()=>dispatch({type:ITEM.TYPE.showAddPanel})}
}
export default connect(mapStateToProps,mapDispatchToProps)(WxHeader)
