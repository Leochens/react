import transformPosToNum from './transformPosToNum';

// TODO 把四个函数写成一个
const move = (oldMap, direct) => {
  const newMap = [...oldMap];
  let willGenerateNew = 0;
  let increaseNum = 0;
  const changedSquares = [];

}


const moveLeft = oldMap => {
  const newMap = [...oldMap];
  let willGenerateNew = 0;
  let increaseNum = 0;
  const changedSquares = [];
  for (let r = 0; r < 4; r++) {
    // const arr = newMap[r];
    const len = newMap[r].length;
    let i,
      nextNoZeroPos,
      m;

    for (i = 0; i < len; i += 1) {
      // 找到 不为零的元素 nextNoZeroPos
      nextNoZeroPos = -1;
      for (m = i + 1; m < len; m++) {
        if (newMap[r][m] !== 0) {
          nextNoZeroPos = m;
          break;
        }
      }
      if (nextNoZeroPos !== -1) {
        // 存在下个不为0的位置
        // 只要有以下两个操作都证明是地图已经发生了改变 那么就要生长新的方块 willGenerateNew = 1
        if (newMap[r][i] === 0) {
          newMap[r][i] = newMap[r][nextNoZeroPos];
          newMap[r][nextNoZeroPos] = 0;
          i -= 1;
          willGenerateNew = 1;
        } else if (newMap[r][i] === newMap[r][nextNoZeroPos]) {
          newMap[r][i] *= 2;
          increaseNum += newMap[r][i];
          newMap[r][nextNoZeroPos] = 0;
          willGenerateNew = 1;
          changedSquares.push(transformPosToNum(r, i));
        }
      }
    }
  }
  return {
    newMap,
    increaseNum,
    willGenerateNew,
    changedSquares
  };
};

const moveUp = oldMap => {
  const newMap = [...oldMap];
  let increaseNum = 0;
  let willGenerateNew = 0;
  const changedSquares = [];
  for (let r = 0; r < 4; r++) {
    let i,
      pos,
      m;
    const len = 4;
    for (i = 0; i < len; i += 1) {
      // 找到 不为零的元素 pos
      pos = -1;
      for (m = i + 1; m < len; m++) {
        if (newMap[m][r] !== 0) {
          pos = m;
          break;
        }
      }
      if (pos !== -1) {
        // 存在下个不为0的位置
        if (newMap[i][r] === 0) {
          newMap[i][r] = newMap[pos][r];
          newMap[pos][r] = 0;
          i -= 1;
          willGenerateNew = 1;
        } else if (newMap[i][r] === newMap[pos][r]) {
          newMap[i][r] *= 2;
          increaseNum += newMap[i][r];
          newMap[pos][r] = 0;
          changedSquares.push(transformPosToNum(i, r));
          willGenerateNew = 1;
        }
      }
    }
  }

  return {
    newMap,
    increaseNum,
    willGenerateNew,
    changedSquares
  };
};

const moveRight = oldMap => {
  const newMap = [...oldMap];
  let increaseNum = 0;
  let willGenerateNew = 0;
  const changedSquares = [];
  const len = 4;
  for (let r = 0; r < len; r++) {
    let i,
      nextNoZeroPos,
      m;
    // const arr = newMap[r];
    const len = newMap[r].length;
    for (i = len - 1; i > 0; i--) {
      // 找到 不为零的元素 nextNoZeroPos
      nextNoZeroPos = -1;
      for (m = i - 1; m >= 0; m--) {
        if (newMap[r][m] !== 0) {
          nextNoZeroPos = m;
          break;
        }
      }
      if (nextNoZeroPos !== -1) {
        // 存在下个不为0的位置
        if (newMap[r][i] === 0) {
          newMap[r][i] = newMap[r][nextNoZeroPos];
          newMap[r][nextNoZeroPos] = 0;
          i += 1;
          willGenerateNew = 1;
        } else if (newMap[r][i] === newMap[r][nextNoZeroPos]) {
          newMap[r][i] *= 2;
          increaseNum += newMap[r][i];
          newMap[r][nextNoZeroPos] = 0;
          changedSquares.push(transformPosToNum(r, i));
          willGenerateNew = 1;
        }
      }
    }
  }


  return {
    newMap,
    increaseNum,
    willGenerateNew,
    changedSquares
  };
};

const moveDowm = oldMap => {
  const newMap = [...oldMap];
  let increaseNum = 0;
  let willGenerateNew = 0;
  const changedSquares = [];
  const len = 4;
  for (let r = len - 1; r >= 0; r--) {
    let i,
      pos,
      m;
    for (i = len - 1; i >= 0; i--) {
      // 找到 不为零的元素 pos
      pos = -1;
      for (m = i - 1; m >= 0; m--) {
        if (newMap[m][r] !== 0) {
          pos = m;
          break;
        }
      }
      if (pos !== -1) {
        // 存在下个不为0的位置
        if (newMap[i][r] === 0) {
          newMap[i][r] = newMap[pos][r];
          newMap[pos][r] = 0;
          i += 1;
          willGenerateNew = 1;
        } else if (newMap[i][r] === newMap[pos][r]) {
          newMap[i][r] *= 2;
          increaseNum += newMap[i][r];
          newMap[pos][r] = 0;
          willGenerateNew = 1;
          changedSquares.push(transformPosToNum(i, r));
        }
      }
    }
  }

  return {
    newMap,
    increaseNum,
    willGenerateNew,
    changedSquares
  };
};

const moveByDirections = (key, oldMap) => {
  switch (key) {
    case 'left':
      return moveLeft(oldMap);
    case 'up':
      return moveUp(oldMap);
    case 'right':
      return moveRight(oldMap);
    case 'down':
      return moveDowm(oldMap);
    default: return {
      newMap: oldMap,
      increaseNum: 0,
      newPos: {
        col: -1,
        row: -1
      }
    };
  }
};


export default moveByDirections;
