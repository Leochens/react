import React, { Component } from 'react';
import { TAB_BAR } from '../../constants';
import './Tabs.css';
const _wx = require('./img/wx.png');
const phone = require('./img/phone-number.png');
const find = require('./img/find.png');
const _me = require('./img/me.png');




export default class Tabs extends Component {

    renderTabs = () => {
        const tabs = [
            {
                icon: _wx,
                key: 'wx'
            },
            {
                icon: phone,
                key: 'txl'
            },
            {
                icon: find,
                key: 'fx'
            },
            {
                icon: _me,
                key: 'me'
            }
        ];

        const { tabbarMap } = this.props;

        return tabs.map((item,idx) => {
            return(
            <li key={idx} className={"tab_item " + tabbarMap[item.key] + '-tab'}>
                <div>
                    <img src={item.icon} alt="" />
                </div>
                {TAB_BAR[item.key]}
            </li>)
        })

    }

    render() {

        return (
            <footer>
                <ul className="tab">
                    {this.renderTabs()}
                </ul>
            </footer>
        )
    }
}