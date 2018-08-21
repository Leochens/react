import React, { Component } from 'react';
import Dialog from './Dialog';
const btnStyle = {
    border: 'none',
    backgroundColor: '#eee',
    borderRadius: '6px',
    margin: 15,
    padding: 15
}
export default class TestDialog extends Component {

    state = {
        isActive: false,
        type: 'ios'
    }
    handleOk = () => {
        console.log('ok');
        this.handleCloseDialog()

    }
    handleCancel = () => {
        console.log('cancel');
        this.handleCloseDialog()

    }
    handleCloseDialog = () => {
        this.setState({
            isActive: false
        })
    }

    openIosDialog = () => {
        this.setState({
            type: 'ios',
            isActive: true
        })
    }
    openAndroidDialog = () => {
        this.setState({
            type: 'android',
            isActive: true
        })
    }
    render() {
        return (
            <div style={{
                padding: 25
            }}>
                <button
                    style={btnStyle}
                    onClick={this.openAndroidDialog}>android dialog</button>
                <button
                    style={btnStyle}
                    onClick={this.openIosDialog}>ios dialog</button>
                <Dialog
                    type={this.state.type}       // 显示类型：iOS or Android（参看weui: https://weui.io/#dialog）
                    isActive={this.state.isActive}   // 控制显示与否
                    title={'标题文字'}      // title文字
                    renderBody={() =>
                        <div>
                            弹窗内容，告知当前状态、
                            信息和解决方法，描述文字尽量控制在三行内
                        </div>} // 中间body区域的渲染函数
                    okText={'主操作'}     // 可定制，默认值为“确定”
                    cancelText={'辅助操作'} // 可定制，默认值为“取消”
                    onOk={this.handleOk}       // 确定（主操作）回调
                    onCancel={this.handleCancel}   // 取消（辅操作）回调
                />
            </div>
        )
    }
}