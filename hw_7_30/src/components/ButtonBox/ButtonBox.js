import React, { Component } from 'react';
import './ButtonBox.css';
import { Button } from 'antd';

export default class ButtonBox extends Component {

    render() {
        
        return (
            <div className="button-box-wrapper">
                <div className="left-buttons">
                    <Button style={{marginRight:20}}>汇总</Button>
                    <Button style={{backgroundColor:'grey',color:'white',marginRight:20}}>摄影课</Button>
                    <Button  style={{marginRight:20}}>绘画课</Button>
                </div>
                <div className="right-buttons">
                    <Button>返回</Button>
                </div>
            </div>
        )
    }
}
