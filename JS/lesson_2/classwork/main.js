//- Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
// let a = +prompt('Введіть перше число');
// let b = +prompt('Введіть друге число');
// if (a > b) {
//     console.log(a);
// } else if (b > a) {
//     console.log(b);
// } else if (a === b) {
//     console.log('Числа рівні')
// }

// // - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// // Користувач вводить номер квартири просто в змінні або через prompt('') .
// // Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
//
// let apartmentNumber = +prompt('Введіть номер квартири')
// if (apartmentNumber >= 1 && apartmentNumber <= 20) {
//     console.log('Дана квартира знаходиться у першому під\'їзді')
// } else if (apartmentNumber >= 21 && apartmentNumber <= 48) {
//     console.log('Дана квартира знаходиться у другому під\'їзді')
// } else if (apartmentNumber >= 49 && apartmentNumber <= 90) {
//     console.log('Дана квартира знаходиться у третьому під\'їзді')
// } else {
//     console.log('У даному будинку є три під\'їзди з кількістю у 90 квартир ')
// }

// //- Ми маємо змінну number в яку користувач задає числове значення,
// // якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
// let number = +prompt('задаєйте числове значення')
// if (number === 10) {
//     console.log('ВІРНО');
// } else {
//     console.log('НЕВІРНО')
// }

// //- Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
// // якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 4.
// // якщо в змінну записали щось інше, спрацьовує else
//
// let x = {};
// if (typeof x === "number") {
//     console.log(1)
// } else if (typeof x === 'string') {
//     console.log(2)
// } else if (typeof x === "boolean") {
//     console.log(3)
// } else if (typeof x === "object") {
//     console.log(4)
// } else {
//     console.log('error')
// }

// //- Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
// // Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
// // Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
// let t = +prompt('Чи ми йдемо сьогодні в OKTEN на навчання? Яка сьогодні температура?')
// if (t >= 10 && t <= 22) {
//     console.log('Ми йдемо ВЧИТИСЯ')
// } else if (t < 10 && t > 22){
//     console.log('Сидимо вдома і вчимося ОНЛАЙН')
// }

// // - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
// // числа нам дається приз. (Авто, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .
// let a = +prompt('Введіть число від 1 до 5')
//
// switch (a){
//     case 1:
//         console.log('Дається приз авто');
//         break;
//     case 2:
//         console.log('Дається приз мото');
//         break;
//     case 3:
//         console.log('Дається приз телефон')
//         break;
//     case 4:
//         console.log('Дається приз планшет');
//         break;
//     case 5:
//         console.log('Дається приз безпровідні навушники')
//         break;
//     default:
//         console.log('число не вірне ...')
//
// }