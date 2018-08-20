import React, { Component } from 'react';
import './Props.css';
import './animate.css';

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
      return null;
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
