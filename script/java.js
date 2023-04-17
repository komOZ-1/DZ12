//Задача 1
console.log('Задача 1')
let str1 = 'aaa@bbb@ccc'
console.log(str1.replace(/@/g, '!'));



//Задача 2
console.log('Задача 2')
let date = '2025-12-31';
//date = date.replace(/2025-12-31/, 31 + '/' + 12 + '/' + 2025);
date = date.replace(/(2025)-(12)-(31)/, '$3/$2/$1');
console.log(date)



//Задача 3
console.log('Задача 3')
let str3 = 'Я учу javascript!';

console.log(str3.substr(6, 17));
console.log(str3.substring(6, 17));
console.log(str3.slice(6, 17));



//Задача 4
console.log('Задача 4')
let arr4 = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;
    for (i = 0; i < arr4.length; i++) {
        sum += Math.pow(arr4[i], 3)
    }
    console.log(Math.sqrt(sum));



//Задача 5
console.log('Задача 5')
/*let a = 6,
    b = 1,
    c;
if (a - b > 0) {
    c = a - b
} else {
    c = b - a;
}

console.log(c)*/
let a = 3;
let b = 5;
let c = Math.abs(a-b);//Результатом всегда является положительное число или 0.
console.log(c);



//Задача 6
console.log('Задача 6')


let dateNow = new Date();
let times = addZero(dateNow.getDate()) + '.' + addZero(dateNow.getMonth() + 1) + '.' + dateNow.getFullYear();
let numbers = addZero(dateNow.getHours()) + ':' + addZero(dateNow.getMinutes()) + ':' + addZero(dateNow.getSeconds());
console.log(numbers + ' ' + times);
function addZero (num) {
    if (num <= 9) {
        return num = '0' + num;
    } else {
        return num;
    }
}

//Задача 7
console.log('Задача 7')
function Str7(str){
    let a7 = /ab+a/gim;

    return str.match(a7).join(' ');
}
console.log(Str7('aa aba abba abbba abca abea'));

//Задача 8
console.log('Задача 8')
function tel8() {
    let userInput = prompt('Введите номер телефона в \n' +
        'международном формате');
    let regExp8 = /^[\d\+][\d\(\)\ -]{4,14}\d$/gi;
    let valid = regExp8.test(userInput);
   return valid;

}
console.log(tel8());

//Задача 9
console.log('Задача 9')
function tel9() {
    let userInput9 = prompt('Введите ваш email');
    let regExp9 = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/gi;
    let valid = regExp9.test(userInput9);
    return valid;

}
console.log(tel9());

//Задача 10
console.log('Задача 10')
function url(){
let link = 'https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3';
let res2 = link.split(/:\/\/(.[^/]+)/);

    let arr10 = [res2[1]];
console.log(arr10);
}
url();


