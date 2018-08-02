import React, { Component } from 'react';
import './ButtonBox.css';
import { Button } from 'antd';
import { BUTTONS } from '../../const/config';
import {Link,Router} from 'react-router'
export default class ButtonBox extends Component {
    
    render() {
    // console.log('btn',this.props);

        return (
            <div className="button-box-wrapper">
                <div className="left-buttons">
                    <Button className="test-button" style={{ marginRight: 20 }}>{BUTTONS.ALL}</Button>
                    <Button style={{ backgroundColor: 'grey', color: 'white', marginRight: 20 }}>{BUTTONS.PHOTOGRAPHY}</Button>
                    <Button style={{ marginRight: 20 }}>{BUTTONS.PAINTING}</Button>
                </div>
                <div className="right-buttons">
                    <Button onClick={this.props.back}>{BUTTONS.BACK}</Button>
                </div>
            </div>
        )
    }
}
