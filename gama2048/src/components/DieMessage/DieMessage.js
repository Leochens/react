import React from 'react';
import './DieMessage.css';

const DieMessage = props => (
  <div>
    {props.isDie
      ? (
        <div className="game-die">
          GAME OVER 你停在了第
          {props.level}
          关
          {
          props.havaBomb
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
