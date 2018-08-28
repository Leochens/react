import transformPosToNum from './transformPosToNum';


const moveLeft = oldMap => {
  const newMap = [...oldMap];
  let willGenerateNew = 0;
  let increaseNum = 0;
  const changedSquares = [];
  for (let r = 0; r < 4; r++) {
    // const arr = newMap[r];
    const len = newMap[r].length;
    let c,
      nextNoZeroPos,
      m;

    for (c = 0; c < len; c += 1) {
      // 找到 不为零的元素 nextNoZeroPos
      nextNoZeroPos = -1;
      for (m = c + 1; m < len; m++) {
        if (newMap[r][m] !== 0) {
          nextNoZeroPos = m;
          break;
        }
      }
      if (nextNoZeroPos !== -1) {
        // 存在下个不为0的位置
        // 只要有以下两个操作都证明是地图已经发生了改变 那么就要生长新的方块 willGenerateNew = 1
        if (newMap[r][c] === 0) {
          newMap[r][c] = newMap[r][nextNoZeroPos];
          newMap[r][nextNoZeroPos] = 0;
          c -= 1;
          willGenerateNew = 1;
        } else if (newMap[r][c] === newMap[r][nextNoZeroPos]) {
          newMap[r][c] *= 2;
          increaseNum += newMap[r][c];
          newMap[r][nextNoZeroPos] = 0;
          willGenerateNew = 1;
          changedSquares.push(transformPosToNum(r, c));
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
    let c,
      nextNoZeroPos,
      m;
    const len = 4;
    for (c = 0; c < len; c += 1) {
      // 找到 不为零的元素 nextNoZeroPos
      nextNoZeroPos = -1;
      for (m = c + 1; m < len; m++) {
        if (newMap[m][r] !== 0) {
          nextNoZeroPos = m;
          break;
        }
      }
      if (nextNoZeroPos !== -1) {
        // 存在下个不为0的位置
        if (newMap[c][r] === 0) {
          newMap[c][r] = newMap[nextNoZeroPos][r];
          newMap[nextNoZeroPos][r] = 0;
          c -= 1;
          willGenerateNew = 1;
        } else if (newMap[c][r] === newMap[nextNoZeroPos][r]) {
          newMap[c][r] *= 2;
          increaseNum += newMap[c][r];
          newMap[nextNoZeroPos][r] = 0;
          changedSquares.push(transformPosToNum(c, r));
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
  for (let r = len - 1; r >= 0; r--) {
    let c,
      nextNoZeroPos,
      m;
    // const arr = newMap[r];
    const len = newMap[r].length;
    for (c = len - 1; c > 0; c--) {
      // 找到 不为零的元素 nextNoZeroPos
      nextNoZeroPos = -1;
      for (m = c - 1; m >= 0; m--) {
        if (newMap[r][m] !== 0) {
          nextNoZeroPos = m;
          break;
        }
      }
      if (nextNoZeroPos !== -1) {
        // 存在下个不为0的位置
        if (newMap[r][c] === 0) {
          newMap[r][c] = newMap[r][nextNoZeroPos];
          newMap[r][nextNoZeroPos] = 0;
          c += 1;
          willGenerateNew = 1;
        } else if (newMap[r][c] === newMap[r][nextNoZeroPos]) {
          newMap[r][c] *= 2;
          increaseNum += newMap[r][c];
          newMap[r][nextNoZeroPos] = 0;
          changedSquares.push(transformPosToNum(r, c));
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
    let c,
      nextNoZeroPos,
      m;
    for (c = len - 1; c >= 0; c--) {
      // 找到 不为零的元素 nextNoZeroPos
      nextNoZeroPos = -1;
      for (m = c - 1; m >= 0; m--) {
        if (newMap[m][r] !== 0) {
          nextNoZeroPos = m;
          break;
        }
      }
      if (nextNoZeroPos !== -1) {
        // 存在下个不为0的位置
        if (newMap[c][r] === 0) {
          newMap[c][r] = newMap[nextNoZeroPos][r];
          newMap[nextNoZeroPos][r] = 0;
          c += 1;
          willGenerateNew = 1;
        } else if (newMap[c][r] === newMap[nextNoZeroPos][r]) {
          newMap[c][r] *= 2;
          increaseNum += newMap[c][r];
          newMap[nextNoZeroPos][r] = 0;
          willGenerateNew = 1;
          changedSquares.push(transformPosToNum(c, r));
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

// TODO 把四个函数写成一个
// 事实证明写成一个后并没有很简单 反而变得更加复杂 并且每次还要做很多多余的判断 放弃
// const move = (oldMap, direct) => {
//   const newMap = [...oldMap];
//   const changedSquares = [];
//   const len = 4;
//   let increaseNum = 0;
//   let willGenerateNew = 0;
//   let initR = 0;
//   let initC = 0;
//   switch (direct) {
//     case 'left':
//     case 'up':
//       break;
//     case 'down':
//     case 'right':
//       initR = len - 1;
//       initC = len - 1;
//       break;
//     default: break;
//   }

//   for (let r = initR; initR ? r >= 0 : r < len; initR ? r-- : r++) {
//     let nextNoZeroPos = -1;
//     for (let c = initC; initC ? c >= 0 : c < len; initC ? c-- : c++) {
//       nextNoZeroPos = -1;
//       for (let p = initC ? c - 1 : c + 1; initC ? p >= 0 : p < len; initC ? p-- : p++) {
//         if (['left', 'up'].includes(direct) && newMap[r][p] !== 0) {
//           nextNoZeroPos = p;
//           break;
//         } else if (['right', 'down'].includes(direct) && newMap[p][r] !== 0) {
//           nextNoZeroPos = p;
//           break;
//         }
//         if (nextNoZeroPos !== -1) {
//           if (['left', 'right'].includes(direct)) {
//             if (newMap[r][c] === 0) {
//               newMap[r][c] = newMap[r][nextNoZeroPos];
//               newMap[r][nextNoZeroPos] = 0;
//               direct === 'left' ? c -= 1 : c += 1;
//               willGenerateNew = 1;
//             } else if (newMap[r][c] === newMap[r][nextNoZeroPos]) {
//               newMap[r][c] *= 2;
//               increaseNum += newMap[r][c];
//               newMap[r][nextNoZeroPos] = 0;
//               willGenerateNew = 1;
//               changedSquares.push(transformPosToNum(r, c));
//             }
//           } else if (['up', 'down'].includes(direct)) {
//             if (newMap[c][r] === 0) {
//               newMap[c][r] = newMap[nextNoZeroPos][r];
//               newMap[nextNoZeroPos][r] = 0;
//               direct === 'up' ? c -= 1 : c += 1;
//               willGenerateNew = 1;
//             } else if (newMap[c][r] === newMap[nextNoZeroPos][r]) {
//               newMap[c][r] *= 2;
//               increaseNum += newMap[c][r];
//               newMap[nextNoZeroPos][r] = 0;
//               willGenerateNew = 1;
//               changedSquares.push(transformPosToNum(r, c));
//             }
//           }
//         }
//       }
//     }
//   }


//   return {
//     newMap,
//     increaseNum,
//     willGenerateNew,
//     changedSquares
//   };
// };
