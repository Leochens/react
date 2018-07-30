import React, { Component } from 'react';
import './ButtonBox.css';
import { Button } from 'antd';

export default class ButtonBox extends Component {

    render() {
        
        return (
            <div className="button-box-wrapper">
                <div className="left-buttons">
                    <Button>汇总</Button>
                    <Button className="grey-button" style={{backgroundColor:'grey',color:'white'}}>摄影课</Button>
                    <Button>绘画课</Button>
                </div>
                <div className="right-buttons">
                    <Button>返回</Button>
                </div>
            </div>
        )
    }
}
