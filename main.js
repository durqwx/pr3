'use strict'
// pr1

let a = prompt('Стоимость товара:')
let b = prompt('Количество денег клиента:')

if (a > 0 && b > 0) {
    if (a == b) {
        alert('Покупка совершена');
    } else if (a > b) {
        alert(`Для покупки не хватает ${a - b} р.`);
    } else if (a < b) {
        alert(`Покупка совершена. Сдача ${b - a} р.`);
    }
} else {
    alert('Неверный формат ввода!');
}

// pr2

let num = prompt('Введите число'); 
if (a > 0) { 
    alert(`1`); 
} else if (a < 0) { 
    alert(`-1`); 
} else if (a == 0) { 
    alert(`0`); 
}

// pr3

let num1 = +prompt('Введите число:'); 
let num2 = +prompt('Введите число:'); 
let result = (num1 + num2 < 4) ? 'Мало' : 'Много'; 
alert(result);

// pr4

let login = prompt('Введите логин');
let message = login == 'Сотрудник' ? 'Привет' :
    login == 'Директор' ? 'Здравствуйте' :
    login == '' ? 'Нет логина' : '';
alert(message);

// pr5

let log = prompt("Введите логин");
if (log == "Админ") {
    let pass = prompt("Введите пароль");
    if (pass == "Я главный") {
        alert(`Здравствуйте!`);
    } else if (pass === null || pass === ''){
        alert(`Отменено`);
    } else {
        alert(`Не верный пароль`);
    }
} else if(log === "" || log === null) {
    alert(`Отменено`);
} else {
    alert(`Я вас не знаю`);
}
