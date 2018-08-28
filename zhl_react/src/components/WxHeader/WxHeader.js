import React, { Component } from 'react';
import './WxHeader.css';

const search = require('./img/search.png')
const more = require('./img/Add.png')

 class WxHeader extends Component {


    render() {
        const { allActions } = this.props;
        return (
        <header>
            <span className="title">
                微信
            </span>
            <div className="wraper">
                <span className="search">
                    <img src={search} alt="" />
                </span>
                <span className="more" onClick={allActions.actionToggleAddPanel}>
                    <img src={more} alt="" />
                </span>
            </div>
        </header>
        )
    }
}

export default WxHeader;
