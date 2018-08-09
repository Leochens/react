import React, { Component } from 'react';
import Switch from './Switch';
export default class TestSwitch extends Component {
    state = {
        checked: false
    }
    handleOnChange = (check) => {
        console.log('handleOnChange', check);
        this.setState({
            checked: check
        })
    }
    render() {
        return (
            <div style={{
                padding: 25
            }}>
                <Switch
                    checked={this.state.checked}
                    onChange={this.handleOnChange}
                />
                <Switch
                    checked={this.state.checked}
                    onChange={this.handleOnChange}
                />
                <Switch
                    checked={this.state.checked}
                    onChange={this.handleOnChange}
                />
                <Switch
                    checked={this.state.checked}
                    onChange={this.handleOnChange}
                />
            </div>
        )
    }
}