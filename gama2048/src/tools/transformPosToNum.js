// 将二维坐标转换为一个整数的一种计算法则
const transformPosToNum = (row, col, len = 4) => ((row === 0 ? 0 : row) * len + col + 1);

export default transformPosToNum;
