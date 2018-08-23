
/**
 * 判断元素是否在数组里并删除
 * 适用于纯数字的数组
 * @param {arr} 待删除数组   
 * @param {item} 待删除项 
 * @param {*} 删除个数 
 */
export const deleteArrayItem = (arr, item, step = 1) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return 0;
  }
  if (arr.includes(item)) {
    arr.splice(arr.indexOf(item), step)
  }
  return 1;
}

/**
 * 给定秒数返回分钟数
 * @param {秒数} seconds 
 */
export const secondToMinutes = seconds => {
  return seconds;
}
