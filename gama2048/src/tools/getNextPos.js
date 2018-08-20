// 在没有被填的方格中随机选一个

const getNextPos = currentMap => {
  // 针对没有参数的调用 默认返回一个随机的位置
  if (!currentMap) {
    const col = ~~(Math.random() * 4);
    const row = ~~(Math.random() * 4);
    return {
      row,
      col
    };
  }
  const res = [];
  currentMap.forEach((row, rowId) => {
    row.forEach((col, colId) => {
      if (currentMap[rowId][colId] === 0) {
        res.push({ rowId, colId });
      }
    });
  });
  if (!res.length) {
    return {
      row: -1,
      col: -1
    };
  }
  const rand = ~~(Math.random() * res.length);
  // console.log(rand);
  const { rowId: row, colId: col } = res[rand];
  return {
    row,
    col
  };
};

export default getNextPos;
