import judgeDie from './judgeDie';
import getNextPos from './getNextPos';
import moveByDirections from './moveByDirections';
import transformPosToNum from './transformPosToNum';

// 获得 2, 4 中随机一个数字 在游戏一开始的时候和生成新方块时调用
const getRandomNumber = (numbers = [2, 4]) => numbers[~~(Math.random() * numbers.length)];
// 清空 | 初始化 地图
const clearSquare = () => [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
];

const tools = {
  judgeDie,
  getNextPos,
  moveByDirections,
  getRandomNumber,
  clearSquare,
  transformPosToNum
};

export default tools;
