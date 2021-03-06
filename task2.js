// Написати розв’язок нижче описаного завдання за допомогою function expression:
// Створіть функцію, яка обраховує суму чисел геометричної прогресії,
// в якій першим числом є 1. 
// Інформація про геометричну прогресію знаходиться тут:

// 	https://uk.wikipedia.org/wiki/Геометрична _прогресія
// 	http://ua.onlinemschool.com/math/formula/geometric_sequence/

// Функція приймає два аргументи: кількість чисел прогресії і
// її знаменник . 
// Наприклад, в прогресії типу 1,2,4,8,16 кількість чисел - 5, 
// а знаменник – 2 (тому що кожне наступне число прогресії 
// домножується на 2). Результат, який має повернути функція 
// для даної прогресії 31.

// Функцію  потрібно написати двома способами:
// 	З використанням циклу
// 	З використанням формули знаходження суми геометричної 
// прогресії:
// S_n=b_1*(1-q^n)/(1-q),
// де b1 – перший елемент прогресії (в даному завданні це 1),
// q – знаменник,
// n – кількість елементів прогресії

// Приклад роботи:
// f(5,2) – має повернути 1+2+4+8+16=31
// f(4,3) – має повернути 1+3+9+27=40


// const func = function(n,q) {
//    let b1 = 1;
//    if (n < 1) return 1;
//    return b1 * (1-q**n)/(1-q)
// }
// console.log(func(5, 2))


// const func = function(n, q) {
//    let b1 = 1;
//    let sum = 0;
//    let str = '';
//    for (let i = 0; i < n; i++) {
//        sum += b1;
//        str += b1 + ' ';
//        b1 *= q;
//    }
//    console.log(str);
//    return sum;
// }
// console.log(func(5, 2));
