const transformPosToNum = (row, col, len = 4) => ((row === 0 ? 0 : row) * len + col + 1);

export default transformPosToNum;
