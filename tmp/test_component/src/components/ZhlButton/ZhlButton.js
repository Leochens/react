import React, { Component } from 'react';
export default class ZhlButton extends Component {
    render() {
        const text = this.props.text || 'Hello ZHL'
        return (
            <div>
                <button>{text}</button>
            </div>
        )
    }
}