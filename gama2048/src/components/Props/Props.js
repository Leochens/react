import React, { Component } from 'react';
import './Props.css';

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
    return (
      <div className="Props">
        <div
          className="props-box"
          onClick={this.handleClickBomb}
        >
          Bomb
          <span>{bombCount}</span>
        </div>
      </div>
    );
  }
}
