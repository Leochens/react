import React, { Component } from 'react';
import Progress from './Progress';
export default class TestProgress extends Component {
    state = {
        value: 25,
        showCancel: true,
    }
    handleStart = () => {
        this.setState({
            value: 100
        })
    }
    handleOnCancel = () => {
        console.log('handleOnCancel');
    }
    render() {
        return (
            <div style={{
                padding:25
            }}>
                <Progress       // 参看weui：https://weui.io/#progress    0-100
                    value={this.state.value}      // 进度条的当前值
                    showCancel={this.state.showCancel} // 是否展示cancel图标按钮
                    onCancel={this.handleOnCancel}   // 点击cancel按钮的回调
                />

                <button onClick={this.handleStart}>上传</button>
            </div>
        )
    }
}