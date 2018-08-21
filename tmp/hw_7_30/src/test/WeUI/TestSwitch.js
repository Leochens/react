import React, { Component } from 'react';
import Switch from './Switch';
export default class TestSwitch extends Component {
    state = {
        checked: false
    }
    handleOnChange = (check) => {
        console.log('handleOnChange', check);
       
    }
    render() {
        return (
            <div style={{
                padding: 25
            }}>
                <Switch
                    checked={true}
                    onChange={this.handleOnChange}
                />
                <Switch
                    checked={false}
                    onChange={this.handleOnChange}
                />
               
            </div>
        )
    }
}