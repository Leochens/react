import React, { Component } from 'react';
import './Power.css';

export default class Power extends Component {




    render() {
        const winScore = 2000;
        const { currentScore } = this.props;
        if( currentScore === winScore ){
            // 奖励措施
        }
        return (
            <div className="power-wrap">
                <div 
                    style={{
                        height: ((currentScore / winScore) * 500)
                    }}
                className="power-content"></div>
            </div>
        )
    }
}