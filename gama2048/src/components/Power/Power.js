import React from 'react';
import './Power.css';
// 能量条
const getWinScore = winScoreLevel => {
  switch (winScoreLevel) {
    case 1: return 500;
    case 2: return 1000;
    case 3: return 2000;
    case 4: return 3000;
    case 5: return 5000;
    case 6: return 7000;
    case 7: return 10000;
    case 8: return 20000;
    case 9: return 30000;
    case 10: return 50000;
    default: return 99999;
  }
};

const Power = props => {
  const {
    currentScore,
    level: winScoreLevel,
    actionIncreaseLevel,
    actionResetLevel
  } = props;
  if (currentScore === 0) {
    actionResetLevel && actionResetLevel();
  }
  const winScore = getWinScore(winScoreLevel);
  if (currentScore >= winScore) {
    // 奖励措施
    alert(`你闯过了第${winScoreLevel}关`);
    actionIncreaseLevel && actionIncreaseLevel();
  }
  return (
    <div className="power-wrap">
      <div className="maxScore">{winScore}</div>
      <div
        style={{
          height: `${(currentScore / winScore) * 100}%`// 红条的高度
        }}
        className="power-content"
      />
    </div>
  );
};

export default Power;
