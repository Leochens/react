const judgeDie = (gameMap) => {
    const len = gameMap.length;
    // 横向
    let isDie = 1;
    for (let r = 0; r < len; r++) {
      for (let c = 0; c < len; c++) {
        //四个角不用检查
        if ((r === 0 && c === 0) ||
          (r === 0 && c === len - 1) ||
          (r === len - 1 && c === 0) ||
          (r === len - 1 && c === len - 1)) {
          continue;
        }
        const cur = gameMap[r][c];
        if (r === 0) {
          const left = gameMap[r][c - 1];
          const right = gameMap[r][c + 1];
          const down = gameMap[r + 1][c];
  
          if (cur === left || cur === right || cur === down) {
            isDie = 0;
            break;
          }
        } else if (r === len - 1) {
          const left = gameMap[r][c - 1];
          const right = gameMap[r][c + 1];
          const up = gameMap[r - 1][c];
          if (cur === left || cur === right || cur === up) {
            isDie = 0;
            break;
          }
        } else if (c === 0) {
          const right = gameMap[r][c + 1];
          const up = gameMap[r - 1][c];
          const down = gameMap[r + 1][c];
          if (cur === up || cur === right || cur === down) {
            isDie = 0;
            break;
          }
        } else if (c === len - 1) {
          const left = gameMap[r][c - 1];
          const up = gameMap[r - 1][c];
          const down = gameMap[r + 1][c];
          if (cur === up || cur === left || cur === down) {
            isDie = 0;
            break;
          }
        } else {
        };
      }
    }
    return isDie;
  }

  export default judgeDie