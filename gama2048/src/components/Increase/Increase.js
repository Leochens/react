import React, { Component } from 'react';
import './Increase.css';
import './animate.css'



export default class Increase extends Component {







    


    state = {
        animationList: [
            'bounceOutUp',
            'bounceOutDown',
            'bounceOutLeft',
            'bounceOutRight'
        ]
    }
    getAnimateClass = () => {
        const { increaseNum } = this.props;
        const { animationList } = this.state;
        if (increaseNum !== 0) {
            return 'increase animated '+animationList[~~(Math.random()*animationList.length)]
        } else {
            return 'hide'
        }
    }
    render() {
        const { increaseNum } = this.props;
        return (
            <div 
                style={{
                    
                }}
            className={this.getAnimateClass()}>
                + {increaseNum}
            </div>
        )
    }
}