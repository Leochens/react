import React from 'react';
import PropTypes from 'prop-types';
import './Slider.less';

export default class Slider extends React.Component {
  static propTypes = {
    defaultValue: PropTypes.number.isRequired,
    showValue: PropTypes.bool,
    onChange: PropTypes.func.isRequired
  }

  static defaultProps = {
    showValue: false
  };

  constructor(props) {
    super(props);
    this.state = {
      flag: 0
    };
  }

  handleTouchStart = () => {
    this.setState({
      flag: 1
    });
  }

  setSliderStyle = (e, type = 'touch') => {
    const pageX = type === 'touch' ? e.changedTouches[0].pageX : e.pageX;
    this.sliderHandler.style.left = `${pageX - this.slideInner.offsetLeft}px`;
    this.sliderTrack.style.width = `${pageX - this.slideInner.offsetLeft}px`;
    let Innerwidth = document.defaultView.getComputedStyle(this.slideInner, null).width;
    let handlLeft = this.sliderTrack.style.width;
    Innerwidth = parseInt(Innerwidth, 10);
    handlLeft = parseInt(handlLeft, 10);
    const value = Number.parseInt(handlLeft / Innerwidth * 100, 10);
    if (value >= 100 || value <= 0) {
      this.setState({
        flag: 0,
        value: Math.max(0, Math.min(100, value))
      });
      return value;
    }
    this.setState({
      value
    });
    return value;
  }

  handleClickSliderInner = e => {
    const { onChange } = this.props;
    const value = this.setSliderStyle(e, 'click');
    onChange && onChange(value);
  }

  handleTouchmove = e => {
    const { flag } = this.state;
    if (!flag) {
      return;
    }
    this.setSliderStyle(e, 'touch');
  }

  handleTouchEnd = () => {
    const { onChange } = this.props;
    // console.log('value change ',this.state.value);
    onChange && onChange(this.state.value);
  }

  renderSlicer = () => {
    const {
      begin, end, showSliceStartFlag, showSliceEndFlag
    } = this.props;
    return (
      <div>
        {showSliceStartFlag
          ? (
            <div
              style={{
                left: `${begin.pos}%`
              }}
              className="begin"
            >
              <img src={begin.icon} alt="" />
            </div>
          )
          : null
        }
        {
          showSliceEndFlag
            ? (
              <div
                style={{
                  left: `${end.pos}%`
                }}
                className="end"
              >
                <img src={end.icon} alt="" />
              </div>
            )
            : null
        }
        <div
          style={{ width: `${begin.pos}%` }}
          className="faker"
        />
      </div>
    );
  }

  render() {
    const { disabled } = this.props;
    return (
      <div className="sliderWrapper">
        <div className="slider">
          <div
            className="sliderInner"
            ref={self => { this.slideInner = self; }}
            onClick={!disabled ? this.handleClickSliderInner : null}
          >
            <div
              ref={self => { this.sliderTrack = self; }}
              style={{ width: `${this.props.defaultValue}%` }}
              className="sliderTrack"
            />

            <div
              ref={self => { this.sliderHandler = self; }}
              style={{ left: `${this.props.defaultValue}%` }}
              className="sliderHandler"
              onTouchStart={!disabled ? this.handleTouchStart : null}
              onTouchMove={!disabled ? this.handleTouchmove : null}
              onTouchEnd={!disabled ? this.handleTouchEnd : null}
            />
            {this.renderSlicer()}
          </div>
        </div>
        {this.props.showValue ? <div id="sliderValue" className="sliderWrapperValue">{this.props.defaultValue}</div> : ''}
      </div>
    );
  }
}
