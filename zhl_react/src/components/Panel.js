import React, { Component } from 'react'
import '../App.css'

export default class Panel extends Component {

    onClick = () => {
        const { onClick } = this.props;
        if (onClick) {
            onClick();
        }
    }
    render() {
        const { isActive } = this.props
        if (!isActive) { return null }
        return (
            <div onClick={this.onClick}>This is Panel</div>
        );
    }

}