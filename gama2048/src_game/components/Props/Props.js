import React, { Component } from 'react';
import './Props.css';
// 道具
export default class Props extends Component {
  state = {};

  handleClickBomb = () => {
    const {
      actionDestroySquare,
      bombCount
    } = this.props;
    if (bombCount > 0) {
      actionDestroySquare && actionDestroySquare();
    }
  }

  render() {
    const {
      bombCount
    } = this.props;
    if (bombCount === 0) {
      return (
        <div className="Props animated flipInX">
          <div className="props-box">
          暂无道具
          </div>
        </div>
      );
    }
    return (
      <div className="Props animated flipInX">
        <div
          className="props-box"
          onClick={this.handleClickBomb}
        >
          Bomb
          <div className="bomb-cnt">{bombCount}</div>
        </div>
      </div>
    );
  }
}
