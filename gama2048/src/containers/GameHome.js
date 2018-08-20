import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../actions';
import Header from '../components/Header/Header';
import DieMessage from '../components/DieMessage/DieMessage';
import GameMap from '../components/GameMap/GameMap';
import './GameHome.css';
import './animate.css';

// 纯函数组件
const GameHome = props => (
  <div>
    <div className="game-wraper">
      <div className="game-main">
        <Header
          currentScore={props.currentScore}
          increaseNum={props.increaseNum}
          restartAction={props.Actions.actionInitSquareMap}
          maxScore={props.maxScore}
          level={props.level}
        />
        <GameMap // 游戏地图 用到大部分props
          {...props}
        />
        <DieMessage
          isDie={props.isDie}
          level={props.level}
          haveBomb={props.bombCount > 0}
        />
      </div>
    </div>
  </div>
);

const mapStateToProps = state => ({
  currentScore: state.Game.currentScore,
  squareMap: state.Game.squareMap,
  increaseNum: state.Game.increaseNum,
  newPos: state.Game.newPos,
  changedSquares: state.Game.changedSquares,
  maxScore: state.Game.maxScore,
  isDie: state.Game.isDie,
  level: state.reward.level,
  bombCount: state.reward.bombCount

});

const mapDispatchToProps = dispatch => ({
  Actions: bindActionCreators(ActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(GameHome);
