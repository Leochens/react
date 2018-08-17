import judgeDie from './judgeDie';
import getNextPos from './getNextPos';
import moveByDirections from './moveByDirections';
import transformPosToNum from './transformPosToNum';
export const getRandomNumber = (numbers = [2, 4]) => {
    return numbers[~~(Math.random() * numbers.length)]
}
export const clearSquare = () => [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
]

const tools = {
    judgeDie,
    getNextPos,
    moveByDirections,
    getRandomNumber,
    clearSquare,
    transformPosToNum
}

export default tools;