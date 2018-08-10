import React, { Component } from 'react';
import './style.css';
export default class Slider extends Component {
    static defaultProps = {
        defaultValue: 0,
        showValue: true,
        barColor: '',
        headerColor: '',
        startPos: null,
        onChange: () => { },
        getValue: () => { }
    }
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.defaultValue,
        }
    }
    handleStartSlider = (e) => {
        this.setState({
            startPos: e.touches[0].pageX
        })
    }
    handleMoveSlider = (e) => { //处理坐标位置
        const allWidth = window.outerWidth
        const pageX = e.touches[0].pageX;
        console.log('start', this.state.startPos);
        console.log('pageX', pageX);
        console.log('差',pageX - this.state.startPos);
        console.log('百分比',(pageX - this.state.startPos));
        const v = (pageX / allWidth) * 100;
        let pos = 0;
        if (v > 100) pos = 100;
        else if (v < 0) pos = 0;
        else pos = parseInt(v);
        this.setState({
            value: pos,
            startPos: pageX
        })
        const { onChange } = this.props;
        onChange && onChange(pos);
    }

    render() {

        return (
            <div
                style={{
                    width: '40%'
                }}
                className="slider-wraper">
                <div style={{
                    width: `${this.state.value}%`,
                    backgroundColor: this.props.barColor
                }}
                    ref="track"
                    className="slider-value">
                    <span
                        style={{
                            backgroundColor: this.props.headerColor
                        }}
                        className="slider-btn"
                        onTouchStart={this.handleStartSlider}
                        onTouchMove={this.handleMoveSlider}

                    >
                        {this.props.showValue
                            ? this.state.value
                            : null}
                    </span>
                </div>

            </div>
        )
    }
}