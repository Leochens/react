import React, { Component } from 'react';
import { Modal } from "antd";
export default class ViewLargerImg extends Component {

    render() {
        const {
            visible,
            src,
            toggle
        } = this.props;
        return (
            <div>
                <Modal
                    width={800}
                    visible={visible}
                    onOk={toggle}
                    onCancel={toggle}
                    okText="确认"
                    cancelText="取消"
                >
                    <div style={{
                        overflow: "auto"
                    }}>
                        <img src={src} />
                    </div>
                </Modal>
            </div>
        )
    }


} 