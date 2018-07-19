import React, { Component } from 'react';
import '../App.css';

const search = require('../img/search.png')
const more = require('../img/Add.png')

export default class WxHeader extends Component {

    onClick=()=>{
        const {onClick}=this.props;
        if(onClick)
        {
            onClick();
        }
    }
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
                <span className="more" onClick={this.onClick}>
                    <img src={more} alt="" />
                </span>
            </div>
        </header>
        )
    }
}
