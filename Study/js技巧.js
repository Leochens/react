function getRating(rating) {
    if (rating > 5 || rating < 0) throw new Error('数字不在范围内');
    return '★★★★★☆☆☆☆☆'.substring(5 - rating, 10 - rating);
}

//打印五星评价


// 输出n个`abc`拼接的字符串
var str = new Array(n + 1).join('abc');



//类数组型的对象 转成数组
//1
var nodeArr = [].slice.call(nodes);
//2
var nodeArr = Array.from(nodes);
Array.isArray(nodeArr); // => true


//？
function escapeHTML(s) {
    return new Option(s).innerHTML;
}

// 对象深拷贝还有一种骚操作
// 使用JSON.stringify把对象转换为字符串赋值给临时变量tmp，
// 然后使用JSON.parse转化临时变量并赋值给新变量就可以啦


//数组去重
const x = [1, 1, 1, 1, 2, 3, 3, 2, 3, 23, 5, 65, 8]
const set = new Set(x)  //默认是对象形式 Set(7) {1, 2, 3, 23, 5, …}
Array.from(set)  //(7) [1, 2, 3, 23, 5, 65, 8] 可以转成数组

//使用Boolean过滤数组中的假值
const x = [0, 0, null, '', undefined, 545, 78, 0, 12]
x.filter(Boolean);//(3) [545, 78, 12]


//string转数字
const x = '1'
const y = x * 1
console.log(typeof y); //number

'32' * 1            // 32
'ds' * 1            // NaN
null * 1            // 0
undefined * 1    // NaN
1 * { valueOf: () => '3' }        // 3
    //也可用+号
    + '123'            // 123
    + 'ds'               // NaN
    + ''                    // 0
    + null              // 0
    + undefined    // NaN
    + { valueOf: () => '3' }    // 3

//正数向下取整 只适用于正数
Math.floor(4.8) //4
~~4.8           //4


//&1判断奇偶 正负皆可
4 & 1 // 0 偶数
5 & 1 // 1 奇数

// |0 取整 正负皆可
5.3 | 0 //5


//解构 交换参数值
let param1 = 1;
let param2 = 2;
[param1, param2] = [param2, param1];
console.log(param1) // 2
console.log(param2) // 1




//转换为bool值
!!'text' //true