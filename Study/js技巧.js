function getRating(rating) {
    if(rating > 5 || rating < 0) throw new Error('数字不在范围内');
    return '★★★★★☆☆☆☆☆'.substring(5 - rating, 10 - rating );
}

//打印五星评价


// 输出n个`abc`拼接的字符串
var str = new Array(n+1).join('abc');



//类数组型的对象 转成数组
//1
var nodeArr = [].slice.call(nodes);
//2
var nodeArr = Array.from(nodes);
Array.isArray(nodeArr); // => true


//？
function escapeHTML (s) {
    return new Option(s).innerHTML;
}

// 对象深拷贝还有一种骚操作
// 使用JSON.stringify把对象转换为字符串赋值给临时变量tmp，
// 然后使用JSON.parse转化临时变量并赋值给新变量就可以啦


//数组去重
const x = [1,1,1,1,2,3,3,2,3,23,5,65,8]
const set = new Set(x)  //默认是对象形式 Set(7) {1, 2, 3, 23, 5, …}
Array.from(set)  //(7) [1, 2, 3, 23, 5, 65, 8] 可以转成数组