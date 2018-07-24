import React, { Component } from 'react';
import { WX, TXL, FX, ME } from '../../constants';
import './Tabs.css';
const _wx = require('./img/wx.png');
const phone = require('./img/phone-number.png');
const find = require('./img/find.png');
const _me = require('./img/me.png');




export default class Tabs extends Component {


    render() {
        const { titlesOrder } = this.props;

        const wx = titlesOrder.filter(item => {
            return item.title === WX;
        })[0].colorsOrder[0] + "-tab";
        const txl = titlesOrder.filter(item => {
            return item.title === TXL;
        })[0].colorsOrder[0] + "-tab";
        const fx = titlesOrder.filter(item => {
            return item.title === FX;
        })[0].colorsOrder[0] + "-tab";
        const me = titlesOrder.filter(item => {
            return item.title === ME;
        })[0].colorsOrder[0] + "-tab";

        // console.log(wx+txl+fx+me)
        return (
            <footer>
                <ul className="tab">
                    <li className={"tab_item " + wx}>
                        <div>
                            <img src={_wx} alt="" />
                        </div>
                        {WX}
                    </li>
                    <li className={"tab_item " + txl}>
                        <div>
                            <img src={phone} alt="" />
                        </div>
                        {TXL}
                    </li>
                    <li className={"tab_item " + fx}>
                        <div>
                            <img src={find} alt="" />
                        </div>
                        {FX}
                    </li>
                    <li className={"tab_item " + me}>
                        <div>
                            <img src={_me} alt="" />
                        </div>
                        {ME}
                    </li>
                </ul>
            </footer>
        )
    }
}