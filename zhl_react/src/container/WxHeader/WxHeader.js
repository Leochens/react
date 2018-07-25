import React, { Component } from 'react';
import './WxHeader.css';
import {connect} from 'react-redux'
import ITEM from '../../actions/itemControlAction';
const search = require('./img/search.png')
const more = require('./img/Add.png')

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
                <span className="more" onClick={this.props.onToggleAddPanel}>
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
    
    return {onToggleAddPanel:()=>dispatch(ITEM.ACTION.actionToggleAddPanel())}
}
export default connect(mapStateToProps,mapDispatchToProps)(WxHeader)
