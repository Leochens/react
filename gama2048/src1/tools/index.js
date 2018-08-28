
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
    arr.splice(arr.indexOf(item), step);
  }
  return 1;
};

/**
 * 给定秒数返回分钟数
 * @param {秒数} seconds
 */
export const secondToMinutes = seconds => {
  return `${~~(seconds / 60)}:${~~(seconds % 60)}`;
};
/**
 * 补零函数
 * @param {数字} num
 */
export const addPreZero = num => {
  return (`00${num}`).slice(-2);
};

export const getFormatTime = seconds => {
  const [min, sec] = secondToMinutes(seconds).split(':');
  const _min = addPreZero(min);
  const _sec = addPreZero(sec);
  return `${_min}:${_sec}`;
};

/**
 * 01:25 => 85
 */
export const timeStringToSeconds = timeString => {
  const [minutes, seconds] = timeString.split(':');
  return minutes * 60 + seconds * 1;
};
