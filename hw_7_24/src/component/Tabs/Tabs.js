import React, { Component } from 'react';
import './Tabs.css'
const _wx = require('./img/wx.png')
const phone = require('./img/phone-number.png')
const find = require('./img/find.png')
const _me = require('./img/me.png')


export default class  Tabs extends Component{
    
    constructor(props){
        super(props);
    }

    render(){
        const {titlesOrder} = this.props;

        const wx = titlesOrder.filter((item,idx)=>{
            return item.title==='微信'
        })[0].colorsOrder[0]+"-tab";
        const txl = titlesOrder.filter((item,idx)=>{
            return item.title==='通讯录'
        })[0].colorsOrder[0]+"-tab";
        const fx = titlesOrder.filter((item,idx)=>{
            return item.title==='发现'
        })[0].colorsOrder[0]+"-tab";
        const me = titlesOrder.filter((item,idx)=>{
            return item.title==='我'
        })[0].colorsOrder[0]+"-tab";

        // console.log(wx+txl+fx+me)
        return(
            <footer> 
            <ul className="tab">
                <li  className={"tab_item "+wx}>
                    <div>
                        <img src={_wx} alt="" />
                    </div>
                    微信
        </li>
                <li className={"tab_item "+txl}>
                    <div>
                        <img src={phone} alt="" />
                    </div>
                    通讯录
        </li>
                <li className={"tab_item "+fx}>
                    <div>
                        <img src={find} alt="" />
                    </div>
                    发现
        </li>
                <li className={"tab_item "+me}>
                    <div>
                        <img src={_me} alt="" />
                    </div>
                    我
        </li>
            </ul>
        </footer>
        )
    }
}