
export const array2set = (arr) => {
    if(!Array.isArray(arr)){
        console.error('去重工具err:参数不是数组');
    }

    const set = new Set(arr);
    return Array.from(set);
}