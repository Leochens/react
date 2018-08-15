import React, { Component } from 'react';
import Slider from './Slider';
export default class TestSlider extends Component {
    state = {
        value: 25,
    }

    handleOnChange = (v) => {
        // console.log('handleOnChange value is',v);
        this.setState({
            value: v
        })
    }
    render() {
        return (
            <div >
                <div style={{
                    padding: 35
                }}>
                    <Slider             
                        defaultValue={this.state.value}   
                        showValue={true}    
                        onChange={this.handleOnChange}     
                    />
                </div>
                <div style={{
                    padding: 35
                }}>
                    <Slider             
                        defaultValue={this.state.value}   
                        showValue={false}    
                        onChange={this.handleOnChange}     
                        barColor={'rgb(26, 173, 25)'}
                        headerColor={'#eee'}
                    />
                </div >
                <h2
                    style={{
                        textAlign: 'center',
                        marginTop: 20
                    }}
                >{this.state.value}</h2>
            </div>
        )
    }
}