import React, { Component } from 'react'
import './App.css'

const wx = require('./img/wx.png')
const phone = require('./img/phone-number.png')
const find = require('./img/find.png')
const me = require('./img/me.png')

export default class Tabs extends Component {

    render() {

        return (
            <footer> 
                <ul className="tab">
                    <li  className="tab_item">
                        <div>
                            <img src={wx} alt="" />
                        </div>
                        微信
            </li>
                    <li className="tab_item">
                        <div>
                            <img src={phone} alt="" />
                        </div>
                        通讯录
            </li>
                    <li className="tab_item">
                        <div>
                            <img src={find} alt="" />
                        </div>
                        发现
            </li>
                    <li className="tab_item">
                        <div>
                            <img src={me} alt="" />
                        </div>
                        我
            </li>
                </ul>
            </footer>
        )
    }


}