const judgeDie = gameMap => {
  const len = gameMap.length;
  // 除四个角落外 要检查其余各个方块是否和邻近的方块num相等
  let isDie = 1;
  console.log('isdie222', isDie);
  for (let r = 0; r < len; r++) {
    for (let c = 0; c < len; c++) {
      // 四个角不用检查
      if ((r === 0 && c === 0)
        || (r === 0 && c === len - 1)
        || (r === len - 1 && c === 0)
        || (r === len - 1 && c === len - 1)
      ) break;
      const cur = gameMap[r][c];

      // 第一行
      if (r === 0) {
        const left = gameMap[r][c - 1];
        const right = gameMap[r][c + 1];
        const down = gameMap[r + 1][c];

        if (cur === left || cur === right || cur === down) {
          isDie = 0;
          break;
        }
        // 最后一行
      } else if (r === len - 1) {
        const left = gameMap[r][c - 1];
        const right = gameMap[r][c + 1];
        const up = gameMap[r - 1][c];
        if (cur === left || cur === right || cur === up) {
          isDie = 0;
          break;
        }
        // 第一列
      } else if (c === 0) {
        const right = gameMap[r][c + 1];
        const up = gameMap[r - 1][c];
        const down = gameMap[r + 1][c];
        if (cur === up || cur === right || cur === down) {
          isDie = 0;
          break;
        }
        // 最后一列
      } else if (c === len - 1) {
        const left = gameMap[r][c - 1];
        const up = gameMap[r - 1][c];
        const down = gameMap[r + 1][c];
        if (cur === up || cur === left || cur === down) {
          isDie = 0;
          break;
        }
      } else break;
    }
  }
  console.log('isdie', isDie);
  return isDie;
};

export default judgeDie;
