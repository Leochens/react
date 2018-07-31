import React, { Component } from 'react';
import './ButtonBox.css';
import { Button } from 'antd';
import { BUTTONS } from '../../const/config';
export default class ButtonBox extends Component {
    render() {
        return (
            <div className="button-box-wrapper">
                <div className="left-buttons">
                    <Button className="test-button" style={{ marginRight: 20 }}>{BUTTONS.ALL}</Button>
                    <Button style={{ backgroundColor: 'grey', color: 'white', marginRight: 20 }}>{BUTTONS.PHOTOGRAPHY}</Button>
                    <Button style={{ marginRight: 20 }}>{BUTTONS.PAINTING}</Button>
                </div>
                <div className="right-buttons">
                    <Button>{BUTTONS.BACK}</Button>
                </div>
            </div>
        )
    }
}
