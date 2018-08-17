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
export const clearedSquare = () => [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
]

export const copyMap = (oldMap) => oldMap.slice();

export const getSingleNumberPos = (row, col, len = 4) => {
    return ((row === 0 ? 0 : row) * len + col + 1)
}
const moveLeft = (oldMap) => {
    const newMap = copyMap(oldMap);
    let willGenerateNew = 0;
    let increaseNum = 0;
    const changedSquares = [];
    for (let r = 0; r < 4; r++) {
        let i, nextNoZeroPos, len, m;
        const arr = newMap[r];
        len = arr.length;
        for (i = 0; i < len; i += 1) {
            //找到 不为零的元素 nextNoZeroPos
            nextNoZeroPos = -1;
            for (m = i + 1; m < len; m++) {
                if (arr[m] !== 0) {
                    nextNoZeroPos = m;
                    break;
                }
            }
            if (nextNoZeroPos !== -1) {
                //存在下个不为0的位置
                if (arr[i] === 0) {
                    arr[i] = arr[nextNoZeroPos];
                    arr[nextNoZeroPos] = 0;
                    i -= 1;
                    willGenerateNew = 1;
                } else if (arr[i] === arr[nextNoZeroPos]) {
                    increaseNum += arr[i] = arr[i] * 2;
                    arr[nextNoZeroPos] = 0;
                    willGenerateNew = 1;
                    changedSquares.push(getSingleNumberPos(r,i));
                }
            }
        }
    }
    console.log('left');
    return {
        newMap,
        increaseNum,
        willGenerateNew,
        changedSquares
    }
}



const moveUp = (oldMap) => {
    const newMap = copyMap(oldMap);
    let increaseNum = 0;
    let willGenerateNew = 0;
    const changedSquares = [];
    for (let r = 0; r < 4; r++) {
        let i, pos, len, m;
        len = 4;
        for (i = 0; i < len; i += 1) {
            //找到 不为零的元素 pos
            pos = -1;
            for (m = i + 1; m < len; m++) {
                if (newMap[m][r] !== 0) {
                    pos = m;
                    break;
                }
            }
            if (pos !== -1) {
                //存在下个不为0的位置
                if (newMap[i][r] === 0) {
                    newMap[i][r] = newMap[pos][r];
                    newMap[pos][r] = 0;
                    i -= 1;
                    willGenerateNew = 1;
                } else if (newMap[i][r] === newMap[pos][r]) {
                    increaseNum += newMap[i][r] = newMap[i][r] * 2;
                    newMap[pos][r] = 0;
                    changedSquares.push(getSingleNumberPos(i,r));
                    willGenerateNew = 1;
                }
            }
        }
    }

    console.log('up');
    return {
        newMap,
        increaseNum,
        willGenerateNew,
        changedSquares
    }
}

const moveRight = (oldMap) => {
    const newMap = copyMap(oldMap);
    let increaseNum = 0;
    let willGenerateNew = 0;
    const changedSquares = [];
    const len = 4;
    for (let r = 0; r < len; r++) {
        let i, nextNoZeroPos, len, m;
        const arr = newMap[r];
        len = arr.length;
        for (i = len - 1; i > 0; i--) {
            //找到 不为零的元素 nextNoZeroPos
            nextNoZeroPos = -1;
            for (m = i - 1; m >= 0; m--) {
                if (arr[m] !== 0) {
                    nextNoZeroPos = m;
                    break;
                }
            }
            if (nextNoZeroPos !== -1) {
                //存在下个不为0的位置
                if (arr[i] === 0) {
                    arr[i] = arr[nextNoZeroPos];
                    arr[nextNoZeroPos] = 0;
                    i += 1;
                    willGenerateNew = 1;
                } else if (arr[i] === arr[nextNoZeroPos]) {
                    increaseNum += arr[i] = arr[i] * 2;
                    arr[nextNoZeroPos] = 0;
                    changedSquares.push(getSingleNumberPos(r,i))
                    willGenerateNew = 1;
                }
            }
        }
    }

    console.log('right');

    return {
        newMap,
        increaseNum,
        willGenerateNew,
        changedSquares
    }

}
const moveDowm = (oldMap) => {
    const newMap = copyMap(oldMap);
    let increaseNum = 0;
    let willGenerateNew = 0;
    const changedSquares = [];
    const len = 4;
    for (let r = len - 1; r >= 0; r--) {
        let i, pos, m;
        for (i = len - 1; i >= 0; i--) {
            //找到 不为零的元素 pos
            pos = -1;
            for (m = i - 1; m >= 0; m--) {
                if (newMap[m][r] !== 0) {
                    pos = m;
                    break;
                }
            }
            if (pos !== -1) {
                //存在下个不为0的位置
                if (newMap[i][r] === 0) {
                    newMap[i][r] = newMap[pos][r];
                    newMap[pos][r] = 0;
                    i += 1;
                    willGenerateNew = 1;
                } else if (newMap[i][r] === newMap[pos][r]) {
                    increaseNum += newMap[i][r] = newMap[i][r] * 2;
                    newMap[pos][r] = 0;
                    willGenerateNew = 1;
                    changedSquares.push(getSingleNumberPos(i,r))
                }
            }
        }
    }
    console.log('dowm');

    return {
        newMap,
        increaseNum,
        willGenerateNew,
        changedSquares
    }

}
export const handlePressKeyboard = (key, oldMap) => {
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
        }
    }
}

