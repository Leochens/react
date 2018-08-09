import React, { Component } from 'react';
import Switch from './Switch';
export default class TestSwitch extends Component {
    state = {
        checked: false
    }

    handleOnChange = () => {
        console.log('handleOnChange');
    }
    render() {
        return (
            <div style={{
                padding: 25
            }}>
                <Switch
                    checked={this.state.checked}    // 是否选中
                    onChange={this.handleOnChange}   // 改变switch的回调函数，回调状态
                />

            </div>
        )
    }
}