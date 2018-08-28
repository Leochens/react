import React, { Component } from 'react';
import { Button } from 'antd';
export default class ToggleButton extends Component {

    constructor(props) {
        super(props);
        console.log('def active ', this.props.defaultActive);
        this.state = {
            active: this.props.defaultActive
        }
    }
    handleClick = () => {
        this.setState({
            active: !this.state.active
        })
    }
    renderStyle = () => {
        return {
            backgroundColor: this.state.active
                ? '#ddd'
                : null
        }
    }
    render() {
        return (
            <Button
                className={this.props.className}
                onClick={this.handleClick}
                disabled={this.props.disabled}
                // style={this.renderStyle()}
                >{this.props.children}
                </Button>
        )
    }
}