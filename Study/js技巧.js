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


