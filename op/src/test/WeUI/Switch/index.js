import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.css';
export default class Switch extends Component {

    static defaultProps = {
        checked: false,
        onChange: () => { },
        color: ''
    }
    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.checked
        }
    }
    toggleSwitch = () => {
        this.setState({
            checked: !this.state.checked
        });
    }
    onSwitchChange = () => {
        const { onChange } = this.props;
        onChange && onChange(!this.state.checked);
        this.toggleSwitch();

    }
    getSwitchClassName = () => {
        const { checked } = this.state;
        if (checked) {
            return 'checked'
        } else {
            return null
        }
    }
    render() {
        return (
            <div
                onClick={this.onSwitchChange}
                className={"switch-box " + this.getSwitchClassName()}
               >
                <div className="switch-ball"></div>
            </div>
        )
    }
}