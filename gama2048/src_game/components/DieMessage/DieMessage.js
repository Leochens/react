import React from 'react';
import './DieMessage.css';

// 玩家输了的时候显示的文字提示
const DieMessage = props => (
  <div>
    {props.isDie
      ? (
        <div className="game-die">
          GAME OVER 你停在了第
          {props.level}
          关
          {
          props.haveBomb
            ? '你还可以使用炸弹'
            : '你真的输了，重新来吧'
        }
        </div>
      )
      : null
    }
  </div>
);
export default DieMessage;
