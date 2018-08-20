import React, { Component } from 'react';
import './DieMessage.css';

export default class DieMessage extends Component {
  state = {};

  render() {
    const { isDie, level, havaBomb } = this.props;
    return (
      <div>
        {isDie
          ? (
            <div className="game-die">
              GAME OVER 你停在了第
              {level}
              关
              {
                havaBomb
                  ? '你还可以使用炸弹'
                  : '你真的输了，重新来吧'
                }
            </div>
          )
          : null
        }
      </div>
    );
  }
}
