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
//判断是否死亡
export const isGameOver = ({ col, row }) => {
    if (col === -1 && row === -1) {
        alert('你输了,重新来吧');
        return 1;
    }
    return 0;
}
const copyMap = (oldMap) => oldMap.slice();
// const swap = (map)
const moveLeft = (oldMap) => {
    const newMap = copyMap(oldMap);
    // -x
    // 向左看 如果是0 那么就和0换位置 不是0 判断一下是否和自己相等
    // 相等就*2 只保留左边的哪个数

    const len = 4;
    for (let rowId = len - 1; rowId >= 0; rowId--) {
        for (let colId = len - 1; colId >= 0; colId--) {
            const pre = newMap[rowId][colId - 1];
            const cur = newMap[rowId][colId];
            if (cur === 0) {
                continue
            }
            if (cur != 0 && pre === 0) {
                const tmp = pre;
                newMap[rowId][colId - 1] = cur;
                newMap[rowId][colId] = tmp;
            }
        }
    }
    for (let rowId = len - 1; rowId >= 0; rowId--) {
        for (let colId = len - 1; colId >= 0; colId--) {
            const pre = newMap[rowId][colId - 1];
            const cur = newMap[rowId][colId];
            if (cur !== 0 && cur === pre) {      //找到相等
                console.log('相等啦');
                newMap[rowId][colId - 1] = pre * 2;
                newMap[rowId][colId] = 0;
                break;
            }
            else continue;

        }
    }
    for (let rowId = len - 1; rowId >= 0; rowId--) {
        for (let colId = len - 1; colId >= 0; colId--) {
            const pre = newMap[rowId][colId - 1];
            const cur = newMap[rowId][colId];
            if (cur === 0) {
                continue
            }
            if (cur != 0 && pre === 0) {
                const tmp = pre;
                newMap[rowId][colId - 1] = cur;
                newMap[rowId][colId] = tmp;
            }
        }
    }
    const { row, col } = getNextPos(oldMap);
    if (isGameOver({ row, col })) {
        return newMap;
    }
    newMap[row][col] = getRandomNumber();
    console.log('left');
    return newMap;
}
const moveUp = (oldMap) => {
    const newMap = copyMap(oldMap);
    const len = 4;
    for (let rowId = len - 1; rowId > 0; rowId--) {
        for (let colId = len - 1; colId >= 0; colId--) {
            const pre = newMap[rowId - 1][colId];
            const cur = newMap[rowId][colId];
            if (cur === 0) {
                continue
            }
            if (cur != 0 && pre === 0) {
                const tmp = pre;
                newMap[rowId - 1][colId] = cur;
                newMap[rowId][colId] = tmp;
            } else if (cur === pre) {      //找到相等
                console.log('相等啦');
                newMap[rowId - 1][colId] = pre * 2;
                newMap[rowId][colId] = 0;
                break;
            }
        }
    }
    const { row, col } = getNextPos(oldMap);
    if (isGameOver({ row, col })) {
        return newMap;
    }
    newMap[row][col] = getRandomNumber();
    console.log('up');
    return newMap;

}
const moveRight = (oldMap) => {
    const newMap = copyMap(oldMap);
    const len = 4;
    for (let rowId = len - 1; rowId > 0; rowId--) {
        for (let colId = 0; colId < 4; colId++) {
            const pre = newMap[rowId][colId + 1];
            const cur = newMap[rowId][colId];
            if (cur === 0) {
                continue
            }
            if (cur != 0 && pre === 0) {
                const tmp = pre;
                newMap[rowId][colId + 1] = cur;
                newMap[rowId][colId] = tmp;
            } else if (cur === pre) {      //找到相等
                console.log('相等啦');
                newMap[rowId][colId + 1] = pre * 2;
                newMap[rowId][colId] = 0;
                break;
            }
        }
    }
    const { row, col } = getNextPos(oldMap);
    if (isGameOver({ row, col })) {
        return newMap;
    }
    newMap[row][col] = getRandomNumber();
    console.log('right');

    return newMap;

}
const moveDowm = (oldMap) => {
    const newMap = copyMap(oldMap);
    const len = 4;
    for (let rowId = 0; rowId < len - 1; rowId++) {
        for (let colId = 0; colId < 4; colId++) {
            const after = newMap[rowId + 1][colId];
            const cur = newMap[rowId][colId];
            if (cur === 0) {
                continue
            }
            if (cur != 0 && after === 0) {
                const tmp = after;
                newMap[rowId + 1][colId] = cur;
                newMap[rowId][colId] = tmp;
            } else if (cur === after) {      //找到相等
                console.log('相等啦');
                newMap[rowId + 1][colId] = after * 2;
                newMap[rowId][colId] = 0;
                break;
            }
        }
    }
    const { row, col } = getNextPos(oldMap);
    if (isGameOver({ row, col })) {
        return newMap;
    }
    newMap[row][col] = getRandomNumber();
    console.log('dowm');

    return newMap;

}
export const handlePressKeyboard = (key, oldMap) => {
    switch (key) {
        case 65:
        case 37:
            return moveLeft(oldMap);
        case 87:
        case 38:
            return moveUp(oldMap);
        case 68:
        case 39:
            return moveRight(oldMap);
        case 83:
        case 40:
            return moveDowm(oldMap);
        default: return oldMap;
    }

}

