import React, { Component } from 'react';
import './style.css';
export default class Dialog extends Component {
    static defaultProps = {
        type: 'ios',
        isActive: false,
        title: '',
        renderBody: '',
        okText: 'ok',
        cancelText: 'cancel',
        onOk: () => { },
        onCancel: () => { }
    }
    getDialogClass = () => {
        const { isActive } = this.props;
        return isActive
            ? 'show-dialog'
            : 'hide-dialog'
    }
    render() {
        const {
            title,
            type,
            renderBody,
            okText,
            cancelText,
            onOk,
            onCancel
        } = this.props;
        return (
            <div className="dialog-wrapper">
                <div
                    className={`${this.getDialogClass()} dialog-mask`}
                    onClick={onCancel}>
                    <div className={`${type}-dialog-content`}>
                        {title.length === 0
                            ? null
                            : <div className={`${type}-dialog-title`}>{title}</div>
                        }
                        <div className="render-body">
                            {renderBody()}
                        </div>
                        <div className={`${type}-dialog-btns divider-top`}>
                            <button
                                className="dialog-btn-ok divider-right"
                                onClick={onOk}
                            >{okText}</button>
                            <button
                                className="dialog-btn-cancel divider-left"
                                onClick={onCancel}>{cancelText}</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}