// Завдання 3

// Написати розв’язок нижче описаного завдання за допомогою function expression or arrow:
// 1.	Створіть функцію, в яку передається 2 параметри, 
// які користувач вводить через вікно prompt(). 
// 2.	Потрібно щоб функція виводила діапазон тільки простих чисел
//  console.log(), між тими які ввів користувач.
// Приклад роботи:
// simpleNumber(10,15) – має повернути 11, 13
// simpleNumber (2,20) – має повернути 2,3,5,7,11,13,17,19

// let min = prompt(parseInt('Enter start number'));
// let max = prompt(parseInt('Enter end number'));

// const isPrime = num => {
//    let str = '';
//    let count = 2;
//    while (count < (num / 2) + 1) {
//        if (num % count !== 0) {
//            count++;
//            continue;
//        }
//        return false;
//    }
//    return true;
// }
// const primeBetween = (a, b) => {
//    let count = 0;
//    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
//        if (isPrime(i)) {
//            count++;
//        }
//    }
//    return count;
// }
// console.log(primeBetween(1, 2));
   