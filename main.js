// const fibonacci = require('./lib/fibonacci')
// console.log(fibonacci(1));

// 判断闰年
// function isLeapYear(n){
//     if(n%400===0){
//         return true
//     }
//     if(n%100===0){
//         return false
//     }
//     if(n%4===0){
//         return true
//     }
//    return false 
// }

// console.log("2000:"+isLeapYear(2000));
// console.log("1900:"+isLeapYear(1900));
// console.log("2008:"+isLeapYear(2008));
// console.log("2009:"+isLeapYear(2009));

// function fibonacci(n){
//     if(n>2){
//         return fibonacci(n-2)+fibonacci(n-1);
//     }
//     return 1;
// }

const fibonacci = require('./lib/fibonacci')
const anagram=require('./lib/anagram')

for(var i=1;i<20;i++){
    console.log(fibonacci(i));
}
