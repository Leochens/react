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

const swap = (map, { curRow, curCol }, { preRow, preCol }) => {
    const tmp = map[curRow][curCol];
    map[curRow][curCol] = map[preRow][preCol];
    map[preRow][preCol] = tmp;
}
const stackByDirections = (map, direction, wantMerge = 0) => {

    const len = 4;
    let initRowId = 0;
    let initColId = 0;
    let rowIdWillPlus = true;
    let colIdWillPlus = true;
    let prePos = {};
    const getPrePos = (preRow = -1, preCol = -1) => {
        prePos.preRow = preRow;
        prePos.preCol = preCol
    }
    switch (direction) {
        case 'up':
            initColId = len - 1;
            colIdWillPlus = false;
            initRowId = len - 1;
            rowIdWillPlus = false;
            break;
        case 'left':
            initColId = len - 1;
            colIdWillPlus = false;
            break
        case 'down':


            break;
        case 'right':
            initRowId = len - 1;
            rowIdWillPlus = false;
            break
        default: break;
    }
    for (let rowId = initRowId; rowIdWillPlus ? rowId < len - 1 : rowId >= 0; rowIdWillPlus ? rowId++ : rowId--) {
        for (let colId = initColId; colIdWillPlus ? colId < len : colId >= 0; colIdWillPlus ? colId++ : colId--) {
            switch (direction) {
                case 'left':
                    getPrePos(rowId, colId - 1)
                    break;
                case 'right':
                    getPrePos(rowId, colId + 1)
                    break;
                case 'up':
                    getPrePos(rowId - 1, colId)
                    break;
                case 'down':
                    getPrePos(rowId + 1, colId)
                    break;
                default: break;
            }
            const { preRow, preCol } = prePos;
            const pre = map[preRow][preCol];
            const cur = map[rowId][colId];
            if (cur != 0 && pre === 0) {
                map[preRow][preCol] = cur
                map[rowId][colId] = 0;
            } else if (wantMerge && cur !== 0 && cur === pre) {     //保存下要改变的位置
                map[preRow][preCol] = pre * 2;
                map[rowId][colId] = 0;
            } else continue
        }
    }
}

const moveLeft = (oldMap) => {
    const newMap = copyMap(oldMap);
    let flag = 0;
    for (let r = 0; r < 4; r++) {
        let i, nextI, len, m;
        len = 4;
        for (i = 0; i < len; i += 1) {
            //先找nextI
            nextI = -1;
            for (m = i + 1; m < len; m++) {
                if (newMap[r][m] !== 0) {
                    nextI = m;
                    break;
                }
            }
            if (nextI !== -1) {
                //存在下个不为0的位置
                if (newMap[r][i] === 0) {
                    newMap[r][i] = newMap[r][nextI];
                    newMap[r][nextI] = 0;
                    i -= 1;
                    flag = 1;
                } else if (newMap[r][i] === newMap[r][nextI]) {
                    newMap[r][i] = newMap[r][i] * 2;
                    newMap[r][nextI] = 0;
                    flag = 1;
                }
            }
        }
    }


    let increaseNum = 0;
    const { row, col } = getNextPos(oldMap);
    if (isGameOver({ row, col })) {
        return {
            newMap,
            increaseNum: 0
        };
    }
    if (flag) {
        newMap[row][col] = getRandomNumber();
    }

    console.log('left');
    return {
        newMap,
        increaseNum
    }
}



const moveUp = (oldMap) => {
    const newMap = copyMap(oldMap);
    let increaseNum = 0;
    let flag = 0;
    for (let r = 0; r < 4; r++) {
        let i, nextI, len, m;
        len = 4;
        for (i = 0; i < len; i += 1) {
            //先找nextI
            nextI = -1;
            for (m = i + 1; m < len; m++) {
                if (newMap[m][r] !== 0) {
                    nextI = m;
                    break;
                }
            }
            if (nextI !== -1) {
                //存在下个不为0的位置
                if (newMap[i][r] === 0) {
                    newMap[i][r] = newMap[nextI][r];
                    newMap[nextI][r] = 0;
                    i -= 1;
                    flag = 1;
                } else if (newMap[i][r] === newMap[nextI][r]) {
                    newMap[i][r] = newMap[i][r] * 2;
                    newMap[nextI][r] = 0;
                    flag = 1;
                }
            }
        }
    }

    const { row, col } = getNextPos(oldMap);
    if (isGameOver({ row, col })) {
        return {
            newMap,
            increaseNum: 0
        };
    }
    if (flag) {
        newMap[row][col] = getRandomNumber();
    }

    console.log('up');
    return {
        newMap,
        increaseNum
    }
}

const moveRight = (oldMap) => {
    const newMap = copyMap(oldMap);
    let increaseNum = 0;
    let flag = 0;
    for (let r = 0; r < 4; r++) {
        let i, nextI, len, m;
        len = 4;
        for (i = len - 1; i >= 0; i--) {
            //先找nextI
            nextI = -1;
            for (m = i - 1; m >= 0; m--) {
                if (newMap[r][m] !== 0) {
                    nextI = m;
                    break;
                }
            }
            if (nextI !== -1) {
                //存在下个不为0的位置
                if (newMap[r][i] === 0) {
                    newMap[r][i] = newMap[r][nextI];
                    newMap[r][nextI] = 0;
                    i -= 1;
                    flag = 1;
                } else if (newMap[r][i] === newMap[r][nextI]) {
                    newMap[r][i] = newMap[r][i] * 2;
                    newMap[r][nextI] = 0;
                    flag = 1;
                }
            }
        }
    }
    const { row, col } = getNextPos(oldMap);
    if (isGameOver({ row, col })) {
        return {
            newMap,
            increaseNum: 0
        };
    }
    if (flag) {
        newMap[row][col] = getRandomNumber();
    }

    console.log('right');

    return {
        newMap,
        increaseNum
    }

}
const moveDowm = (oldMap) => {
    const newMap = copyMap(oldMap);
    let increaseNum = 0;
    let flag = 0;
    const len = 4;
    for (let r = len-1; r >= 0 ; r --) {
        let i, nextI, m;
        for (i = len - 1; i >= 0; i--) {
            //先找nextI
            nextI = -1;
            for (m = i - 1; m >= 0; m--) {
                if (newMap[m][r] !== 0) {
                    nextI = m;
                    break;
                }
            }
            if (nextI !== -1) {
                //存在下个不为0的位置
                if (newMap[i][r] === 0) {
                    newMap[i][r] = newMap[nextI][r];
                    newMap[nextI][r] = 0;
                    i -= 1;
                    flag = 1;
                } else if (newMap[i][r] === newMap[nextI][r]) {
                    newMap[i][r] = newMap[i][r] * 2;
                    newMap[nextI][r] = 0;
                    flag = 1;
                }
            }
        }
    }
    const { row, col } = getNextPos(oldMap);
    if (isGameOver({ row, col })) {
        return {
            newMap,
            increaseNum: 0
        };
    }
    if (flag) {
        newMap[row][col] = getRandomNumber();
    }

    console.log('dowm');

    return {
        newMap,
        increaseNum
    }

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
        default: return {
            newMap: oldMap,
            increaseNum: 0
        }
    }

}

