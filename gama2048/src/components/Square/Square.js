import React, { Component } from 'react';
import './Square.css';
import { Button } from 'antd';

const getColor = (num) => {
    let squareColor = '';
    switch(num) {
        case 2: squareColor = 'rgb(237, 228, 219)';break;
        case 4: squareColor = 'rgb(235, 223, 201)';break;
        case 8: squareColor = 'rgb(233, 178, 128)';break;
        case 16: squareColor = 'rgb(232, 153, 108)';break;
        case 32: squareColor = 'rgb(230, 132, 105)';break;
        case 64: squareColor = '#FF4500';break;
        case 128: squareColor = '#DC143C';break;
        case 256: squareColor = '#8F0923';break;
        case 512: squareColor = '#8B0000';break;
        case 1024: squareColor = '#ADFF2F';break;
        case 2048: squareColor = '#FFD700';break;
        default:break;
    }
    return squareColor;
}

export default class Square extends Component {
    render() {
        const { num } = this.props;
        const squareStyle = {
            width: 60, height: 60,color:'#000',fontWeight:800,
            backgroundColor: getColor(num)
        }
        return (
            <span>
                <Button style={squareStyle}>{
                    num === 0 ? <span>&nbsp;</span> : num
                }</Button>
            </span>
        )
    }
}