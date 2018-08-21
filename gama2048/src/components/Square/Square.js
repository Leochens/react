import React, { Component } from 'react';
import './Square.css';

const getColor = num => {
  let squareColor = '';
  switch (num) {
    case 2: squareColor = 'rgb(237, 228, 219)'; break;
    case 4: squareColor = 'rgb(235, 223, 201)'; break;
    case 8: squareColor = 'rgb(233, 178, 128)'; break;
    case 16: squareColor = 'rgb(232, 153, 108)'; break;
    case 32: squareColor = 'rgb(230, 132, 105)'; break;
    case 64: squareColor = '#FF4500'; break;
    case 128: squareColor = '#DC143C'; break;
    case 256: squareColor = '#8F0923'; break;
    case 512: squareColor = '#8B0000'; break;
    case 1024: squareColor = '#ADFF2F'; break;
    case 2048: squareColor = '#FFD700'; break;
    default: break;
  }
  return squareColor;
};
let triggerSameNumAndSamePos = 0;
let triggerSameNumAndIsNew = 0;

// 每一个小方格
export default class Square extends Component {
  state = {
    animationClass: 'square'
  }

  // 使用标志位触发器来保持连续动画
  componentWillReceiveProps(nextProps) {
    let animationClass = 'square';
    if (nextProps.isChange) {
      if (nextProps.num === this.props.num) {
        animationClass = triggerSameNumAndSamePos ? 'square animated jello3 ' : 'square animated jello4';
      } else {
        animationClass = triggerSameNumAndSamePos ? 'square animated jello ' : 'square animated jello2';
      }
      triggerSameNumAndSamePos = !triggerSameNumAndSamePos;
    } else if (nextProps.isNew) {
      if (nextProps.num === this.props.num) {
        animationClass = triggerSameNumAndIsNew ? 'square animated jackInTheBox3 ' : 'square animated jackInTheBox4';
      } else {
        animationClass = triggerSameNumAndIsNew ? 'square animated jackInTheBox ' : 'square animated jackInTheBox2';
        triggerSameNumAndIsNew = !triggerSameNumAndIsNew;
      }
    }
    this.setState({
      animationClass
    });
  }


  render() {
    const { num } = this.props;
    const squareStyle = {
      backgroundColor: getColor(num)
    };
    return (
      <div className="square-warp">
        <span
          style={squareStyle}
          className={this.state.animationClass}
        >
          {
            num === 0 ? <span>&nbsp;</span> : num
          }
        </span>
      </div>
    );
  }
}
