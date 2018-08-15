// 在没有被填的方格中随机选一个
export const getNextPos = (currentMap) => {
    let res = [];
    currentMap.forEach((row, rowId) => {
        row.forEach((col, colId) => {
            currentMap[rowId][colId] === 0
                ? res.push({ rowId, colId }) : null
        })
    })
    if (!res.length) {
        return {
            row: -1,
            col: -1
        }
    }
    const rand = ~~(Math.random() * res.length)
    console.log(rand);
    const { rowId: row, colId: col } = res[rand];
    return {
        row,
        col
    }
}
export const getRandomNumber = (numbers = [2, 4]) => {
    return numbers[~~(Math.random() * numbers.length)]
} 