import React, { Component } from 'react';
import './style.css';
export default class Progress extends Component {

    static defaultProps = {
        value: 0,
        showCancel: true,
        onCancel: () => { }
    }
    render() {
        const { value, showCancel, onCancel } = this.props;
        return (
            <div className="progress-box">
                <div className="progress-wraper">
                    <div style={{
                        width: `${value}%`
                    }} className="progress-value">
                        {showCancel
                            ? <div onClick={onCancel} className="btn-cancel"> </div>
                            : null
                        }
                    </div>
                </div>
            </div>
        )
    }
}