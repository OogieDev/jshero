// let num;
// let str = 'Hello';

// num = +'20';
// // num = -'20';
// num = 10;
// num += 20;
// str += ' world';

// num = 5 % 2;

// let user = {
// 	name: 'Vadim',
// 	age: 28,
// }

// let userName = user.name || 'Default user';

// user.fullInfo = Boolean(user.name) && Boolean(user.age);

// // console.log(user);
// // console.log( !5 );


// // >> if else
 
// let a = 21;

// if (a >= 1 && a <= 9) {
// 	console.log('a >= 1')
// } else if (a > 10) {
// 	console.log('a > 10')
// } else {
// 	console.log('a < 1');
// }

// let name = undefined;

// if (!name) {
// 	console.log('userName is undefined');
// }

// if (name) {
// 	console.log(`Hello ${name}`);
// } else {
// 	console.log(`Hello user`);
// }

// let arr = [1, 2, 3]

// if (arr.length) {
// 	console.log(arr);
// } else {
// 	console.log('array is empty');
// }


// let name = 'Vadim';

// console.log(name ? `Hello ${name}` : 'Hello user');

// let a = 7;

// a >= 1 && a <= 9 ? console.log('a >= 1') : a > 10 ? console.log('a > 10') : console.log('a <= 1');


// // switch case

// let value = 1;
// switch(value) {
// 	case 1: console.log(1); break;
// 	case 12: console.log(2); break;
// 	case 3: console.log(3); break;
// }


// >> Type conversion

// let a = 20,
// 	b = 19;

// // to string
// let string = '' + c + b;
// console.log()
// console.log('2' == 2)
// При сравнении строки преобразуются к числам

// При арифметических действиях (кроме +) со строкой, строка приводится к числу


// >> Цыклы
// while, do while, for, for in, for of
// итератор i
// условие i < 10
// i++

let i = 0;

while(++i < 20) {
	// console.log(i);
}


let obj = {
	name: 'Vadim',
	age: 28
}

for (let key in obj) {
	console.log(key, obj[key]);
}

console.log('===========================');

let colors = ['white', 'green', 'blue']

for (let value of colors) {
	console.log(value);
}

