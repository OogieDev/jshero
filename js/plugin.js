// >> Типы данных
// ======== Примитивные ========
// --\
// --| String 'Hello', "Hello"
// --| Number 20, 8.5
// --| Boolean true, false
// --| Null - null
// --| Undefined - undefined
// --| Symbol

// ========= Сложные ==========
// --\
// --| Object { name: 'Vadim' } 
// --| Array [ 1, 2, 3 ]
// --| Function
// --| Date

// >> Переменные var, let, const
// var userName = "Vadim";
// var userName = "Den"; // <-- проблема с var(можно еще раз объявить переменную)
// userName = "Den"; 

// const PI = 3.14;

// const OBJ = { name: 'Vadim' }
// OBJ.age = 28;

// console.log(OBJ);


// >> Строки
let str = 'Hello world';
let value;
let userName = 'Vadim';
let userAge = 28;

value = str.length;
value = str[0];
value = str[str.length - 1]
// Методы работы со строкама, не изменяющие исходную строку
value = str.toUpperCase();


value = str.indexOf('world', 1); // поиск подстроки
// Возворащает индекс символа первого вхождения указанной подстроки
// Второй параметр указывает с какого индекса начинать поиск
// возвращает -1 если подстрока не найдена

// Вырезать кусок строки (substr, substing, slice)
value = str.slice(4, -2); // 2 параметра
// 1 - с какого индекса начинать (обязательный)
// 2 - конечный индекс не включая его (необязательный)

value = str.substring(4, 6) // тоже самое, что и slice, но только без возможности
// передавать отрицательные значения

value = str.substr(0, 8) // первый параметр указывает с какого индекса
// второй параметр - сколько символов

value = 'Hello' + ' ' + 'world';
value = `My name is ${userName}. I'm ${userAge}`;

// Методы преобразования числа в строку
// 1) функция String
// 2) 2 + ''
// 3) (2).toString()

// console.log(value);


// >> Number
let number = 20;
let num;

// NaN - Not a Number
num = 1 - 'sjs';
// console.log(isNan(num));
num = parseFloat("20px");
num = Math.round(5.4);
num = Math.round(Math.random() * 20);
num = (23.123423321).toFixed(2);

// console.log(num);

// >> Boolean
let bool = true;

bool = !true;
bool = !'sfd';
bool = Boolean(undefined);
bool = Boolean('');
bool = Boolean(0);

// console.log(bool);

// >> Object

let user = {
	name: 'Vadim',
	age: 20,
	work: 'Magnetika',
	more: {
		value: 100,
		city: 'New york'
	}
};

let prop = 'work';
let obj;

obj = user.name;
obj = user[prop];

user.name = 'Maliken';
user.info = 'Web developer';

obj = user.more.value;
obj = user['more']['value'];
obj = user['more'].value;

// user.wallet.balance = 20; // cannot set at undefined

// console.log(obj);
// console.log(user);


// >> Array

let arr = [1, 2, 3];
let el = arr[0];
arr[1] = 'two';

el = arr.length;

// >> typeof

// typeof 10 // number

console.log(el);





