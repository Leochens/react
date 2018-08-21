import React, { Component } from 'react';
import Progress from './Progress';
const btnStyle = {
    border: 'none',
    backgroundColor: '#eee',
    borderRadius: '6px',
    margin: 15,
    padding: 15
}
export default class TestProgress extends Component {
    state = {
        value: 35,
        showCancel: false,
    }
    handleStart = () => {
        this.setState({
            value: 100
        })
    }
    handleOnCancel = () => {
        console.log('handleOnCancel');
    }
    render() {
        return (
            <div style={{
                padding:25
            }}>
                <Progress       
                    value={this.state.value}     
                    showCancel={true} 
                    onCancel={this.handleOnCancel}  
                />
                <Progress       
                    value={this.state.value}     
                    showCancel={false} 
                    onCancel={this.handleOnCancel}  
                />
                <button 
                style={btnStyle}
                onClick={this.handleStart}>上传</button>
            </div>
        )
    }
}