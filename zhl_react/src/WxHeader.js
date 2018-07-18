import React, { Component } from 'react';
import './App.css';

const search = require('./img/search.png')
const more = require('./img/Add.png')

export default class WxHeader extends Component {
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
                <span className="more">
                    <img src={more} alt="" />
                </span>
            </div>
        </header>
        )
    }
}
