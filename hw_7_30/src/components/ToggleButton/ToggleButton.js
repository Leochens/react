import React, { Component } from 'react';
import { Button } from 'antd';
export default class ToggleButton extends Component {

    state = {
        active: false
    }
    handleClick = () => {
        this.setState({
            active:!this.state.active
        })
        // const { action } = this.props;
        // action && action()
    }
    render() {
        return (
            <Button 
            className={this.props.className}
            onClick={this.handleClick}
            disabled = {this.props.disabled}
            style={
                {
                    backgroundColor: this.state.active? '#ddd':null
                }
            }>{this.props.children}</Button>
        )
    }
}