import React from 'react';
import PropTypes from 'prop-types';
import './Slider.less';

export default class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: 0
    };
  }

  static defaultProps = {
    defaultValue: 50,
    showValue: false
  };

  static propTypes = {
    defaultValue: PropTypes.number.isRequired,
    showValue: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
  }
  handleTouchStart = () => {
    this.setState({
      flag: 1
    });
  }

  handleTouchmove = (e) => {
    const { flag } = this.state;
    if (!flag) {
      return;
    }
    this.sliderHandler.style.left = e.changedTouches[0].pageX - this.slideInner.offsetLeft + 'px';
    this.sliderTrack.style.width = e.changedTouches[0].pageX - this.slideInner.offsetLeft + 'px';
    let Innerwidth = document.defaultView.getComputedStyle(this.slideInner, null)['width']
    let handlLeft = this.sliderTrack.style.width;
    Innerwidth = parseInt(Innerwidth, 10);
    handlLeft = parseInt(handlLeft, 10);
    let value = Number.parseInt(handlLeft / Innerwidth * 100, 10)
    
    if (value >= 100 || value <= 0) {

      this.setState({
        flag: 0
      })
    }
  }


  render() {
    return (
      <div className="sliderWrapper" >
        <div className="slider">
          <div
            className="sliderInner"
            ref={self => this.slideInner = self}
          >
            <div
              ref={self => this.sliderTrack = self}
              style={{ width: this.props.defaultValue + '%' }}
              className="sliderTrack"
            ></div>
            <div
              ref={self => this.sliderHandler = self}
              style={{ left: this.props.defaultValue + '%' }}
              className="sliderHandler"
              onTouchStart={this.handleTouchStart}
              onTouchMove={this.handleTouchmove}
            ></div>
          </div>
        </div>
        {this.props.showValue ? <div id="sliderValue" className="sliderWrapperValue">{this.props.defaultValue}</div> : ''}
      </div>
    );
  }
}