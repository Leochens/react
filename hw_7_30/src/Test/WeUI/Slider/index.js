import React, { Component } from 'react';
import './style.css';
export default class Slider extends Component {
    static defaultProps = {
        defaultValue: 0,
        showValue: true,
        barColor: '',
        headerColor: '',
        onChange: () => { },
        getValue: () => { }
    }
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.defaultValue,
        }
    }
    handleMoveSlider = (e) => { //处理坐标位置
        const allWidth = window.outerWidth
        const pageX = e.touches[0].pageX
        const v = (pageX / allWidth) * 100;
        let pos = 0;
        if (v > 100) pos = 100;
        else if (v < 0) pos = 0;
        else pos = parseInt(v);
        this.setState({
            value: pos
        })
        const { onChange } = this.props;
        onChange && onChange(pos);
    }

    handleShowTip = () => {
        this.setState({
            tipIsActive: true
        })
    }

    render() {

        return (
            <div className="slider-wraper">
                <div style={{
                    width: `${this.state.value}%`,
                    backgroundColor: this.props.barColor
                }} className="slider-value">
                    <span
                        style={{
                            backgroundColor: this.props.headerColor
                        }}
                        className="slider-btn"
                        onTouchMove={this.handleMoveSlider}
                        onMouseOver={this.handleShowTip}
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