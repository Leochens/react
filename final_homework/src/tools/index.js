
// 适用于纯数字的数组

export const deleteArrayItem = (arr, item, step = 1) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return 0;
  }
  if (arr.includes(item)) {
    arr.splice(arr.indexOf(item), step)
  }
  return 1;
}