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
const moveLeft = (oldMap) => {
    const newMap = copyMap(oldMap);
    const len = 4;
    const willLeftMerge = [];
    const leftStack = (wantSetMergeList = 1) => {
        for (let rowId = len - 1; rowId >= 0; rowId--) {
            for (let colId = len - 1; colId >= 0; colId--) {
                const pre = newMap[rowId][colId - 1];
                const cur = newMap[rowId][colId];
                if (cur != 0 && pre === 0) {
                    newMap[rowId][colId - 1] = cur
                    newMap[rowId][colId] = 0;
                } else if (wantSetMergeList && cur !== 0 && cur === pre) {     //保存下要改变的位置
                    willLeftMerge.push({
                        rowId, colId
                    })
                } else continue
            }
        }
    }
    //先做预判堆叠
    leftStack();
    //通过遍历预判列表中的待融合元素 得到融合后的map
    willLeftMerge.forEach((pos) => {
        const { rowId, colId } = pos;
        newMap[rowId][colId - 1] *= 2;
        newMap[rowId][colId] = 0;
    })
    // 不预判堆叠
    leftStack(0);

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
    const willUpMerge = [];
    const upStack = (wantSetMergeList = 1) => {
        for (let rowId = len - 1; rowId > 0; rowId--) {
            for (let colId = len - 1; colId >= 0; colId--) {
                const pre = newMap[rowId - 1][colId];
                const cur = newMap[rowId][colId];
                if (cur != 0 && pre === 0) {
                    newMap[rowId - 1][colId] = cur;
                    newMap[rowId][colId] = 0;
                } else if (wantSetMergeList && cur !== 0 && cur === pre) {     //保存下要改变的位置
                    willUpMerge.push({
                        rowId, colId
                    })
                } else continue
            }
        }
    }
    upStack();
    willUpMerge.forEach((pos) => {
        const { rowId, colId } = pos;
        newMap[rowId-1][colId] *= 2;
        newMap[rowId][colId] = 0;
    })
    upStack(0);
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
    const willRightMerge = [];
    const rightStack = (wantSetMergeList = 1) => {
        for (let rowId = len - 1; rowId > 0; rowId--) {
            for (let colId = 0; colId < 4; colId++) {
                const pre = newMap[rowId][colId + 1];
                const cur = newMap[rowId][colId];
                if (cur != 0 && pre === 0) {
                    newMap[rowId][colId + 1] = cur;
                    newMap[rowId][colId] = 0;
                } else if (wantSetMergeList && cur !== 0 && cur === pre) {     //保存下要改变的位置
                    willRightMerge.push({
                        rowId, colId
                    })
                } else continue
            }
        }
    }

    rightStack();
    willRightMerge.forEach((pos) => {
        const { rowId, colId } = pos;
        newMap[rowId][colId + 1] *= 2;
        newMap[rowId][colId] = 0;
    })
    rightStack(0);

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
    const willDownMerge = [];
    const downStack = (wantSetMergeList = 1) => {
        for (let rowId = 0; rowId < len - 1; rowId++) {
            for (let colId = 0; colId < 4; colId++) {
                const pre = newMap[rowId + 1][colId];
                const cur = newMap[rowId][colId];
                if (cur != 0 && pre === 0) {
                    newMap[rowId + 1][colId] = cur;
                    newMap[rowId][colId] = 0;
                } else if (wantSetMergeList && cur !== 0 && cur === pre) {     //保存下要改变的位置
                    willDownMerge.push({
                        rowId, colId
                    })
                } else continue
            }
        }
    }
    downStack();
    willDownMerge.forEach((pos) => {
        const { rowId, colId } = pos;
        newMap[rowId + 1][colId] *= 2;
        newMap[rowId][colId] = 0;
    })
    downStack(0);
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

