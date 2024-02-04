//***1***
// Робота зі змінними
// Оголосіть дві змінні: name та city.
// Присвойте значення "Іван" змінній name.
// Скопіюйте значення зі змінної name в city.
// Виведіть значення змінної city, використовуючи функцію console.log (яка повинна показати “Іван”).

// let name = "Іван";
// let city = name;
// console.log(city)

// ***2***
// Який буде результат виконання скрипта?

// let name = "Olga";
// console.log(`привіт ${1}`); //
// console.log(`привіт ${"name"}`); //
// console.log(`привіт ${name}`); // ?

//***3***
//Видобути число зі змінних
// let a = "5";
// let b = "13cvb";
// let c = "12.9sxdcfgv";
// вивести в консоль тип
// console.log(typeof a);
// console.log(typeof parseInt(b));
// console.log(typeof parseFloat(c));

//***4***
//Зробіть, щоб 0.1 + 0.2 = 0.3

// console.log((0.1*10 + 0.2*10)/10);

//***5**
//Поверніть найбільше число с набору 20, 10, 50, 40

// console.log(Math.max(20,10,50,40));

//***6**
//Поверніть випадкове число в діапазоні від 2 до 4

// console.log(Math.random()*(4-2)+2);

//***7**
//дізнатись довжину message
// const message = 'Welcome to Bahamas!';
// console.log(message.length)

//***8**
//вивести в консоль message великими літерами
// console.log(message.toUpperCase());

//***9**
// створити пустий об*єкт
// додати туди ім*я, вік і місто
// вивести результат в консоль
// видалити місто
// додати буль з ключем: like flowers
// вивести результат в консоль

// let obj = {};
// obj.name = 'Denys';
// obj.age = 24;
// obj.city = 'Khmelnytskyi';
// delete obj.city;
// obj['like flowers'] = true;

// console.log(obj);

//***10**
// За допомогою циклу “for…in” вивести в консоль ключі і значення об*єкта

// for (key in obj){
//     console.log(key);
//     console.log(obj[key]);
// }

// let value;

// String
// value = false;
// console.log(typeof value);
// const newValue = String(value);
// console.log(typeof newValue);
// console.log(newValue);

// Number
// value = '123';
// console.log(typeof value);
// const newValue = Number(value);
// console.log(newValue);
// console.log(typeof newValue);

// Boolean
// console.log(Boolean(1))
// console.log(Boolean(0))

// console.log(Boolean('stroka'))
// console.log(Boolean(''))

// console.log(Boolean(NaN));
// console.log(Boolean(undefined));
// console.log(Boolean(null));

// Ternary operator

// 2+2 === 5 ? console.log('good') : console.log('not good');

// let leng = "hu";
// if (leng === "ua") {
//     console.log('ponedilok')
// } else if (leng === "en"){
//     console.log('monday');
// } else {
//     console.log('not found');
// }

// let num = prompt("enter value");

// switch (num) {
//     case 0 :console.log(0);
//     break;
//     case 1 : console.log (1);
//     break;
//     case 2 : console.log (2);
//     break;
//     case 5 : num = 10;
//     break;
//     case 10 : console.log (10);
//     break;
//     case 9 : console.log (9);
//     break;
// }

// let cost;
// const sub = "premium";

// switch(sub){
//     case "free":
//         cost = 0;
//         break;
//     case "pro":
//         cost = 100;
//         break;
//     case "premium":
//         cost = 500;
// }

// const min = prompt('enter minutes');

// if (min >=0 && min <= 14) {
//     console.log('1st quarter');
// } else if(min>=15 && min<= 29){
//     console.log('2nd quarter');
// } else if(min>=30 && min<=44){
//     console.log('3rd quarter');
// } else if(min>=45 && min<=59){
//     (console.log('4th quarter'));
// } else (console.log('There is not such a minute'));

// const value = prompt('enter good name').toLowerCase();
// let cost;

// switch(value){
//     case "yabluko" : cost = 15;
//     console.log(`${value} costs ${cost} UAH`);
//     break;
//     case "grusha" : cost = 25;
//     console.log(`${value} costs ${cost} UAH`);
//     break;
//     case "vishnya" : cost = 45;
//     console.log(`${value} costs ${cost} UAH`);
//     break;
//     default : alert(`no goods with name ${value}`);
// }

// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах 1, 0, -3.

// let cost = -3;
// if (cost>0){
//     console.log(true);
// } else {
//     console.log(false);
// }

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах 'test',"qwerty", true

// let value = true;
// if(value ==="test"){
//     console.log(true);
// } else {
//     console.log(false);
// }

// Якщо змінна більше 10 - відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах 1, 10, 13.

// let value = 13;
// if(value > 10){
//     value -=5;
//     console.log(value);
// } else {
//     value +=5;
//     console.log(value);
// }

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// let value = prompt('enter a value from 1 to 12');
// let month;
// switch(value){
//     case "1" : month = 'january';
//     console.log(month);
//     break;
//     case "2" : month = 'february';
//     console.log(month);
//     break;
//     case '3' : month = 'march';
//     console.log(month);
//     break;
//     case '4' : month = 'april';
//     console.log(month);
//     break;
//     case '5' : month = 'may';
//     console.log(month);
//     break;
//     case '6' : month = 'june';
//     console.log(month);
//     break;
//     case "7" : month = 'july';
//     console.log(month);
//     break;
//     case '8' : month = 'august';
//     console.log(month);
//     break;
//     case '9' : month = 'september';
//     console.log(month);
//     break;
//     case "10" : month = 'october';
//     console.log(month);
//     break;
//     case "11" : month = 'november';
//     console.log(month);
//     break;
//     case "12" : month = 'december';
//     console.log(month);
//     break;
// }

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// let value = prompt('enter 3valued number');
// let result;

// if(value.length === 3){
//     result = Number(value[0]) + Number(value[1]) + Number(value[2]);

// } else {
//     console.log('not correct')
// }

// console.log(result)

// Array

// let arr = ['Apple', 'Orange', 'Banana'];

// console.log(arr[0]);

// arr[2] = 'Lemon';
// console.log(arr[2]);

// arr[3] = 'Banana';
// console.log(arr.length);

// arr2 = [1, 'hello', {key: ''}]

// arr.push('Tomato')
// console.log(arr);

// arr.pop();

// console.log(arr);

// arr.shift();
// console.log(arr);

// arr.unshift("Cherry");
// console.log(arr);

// for (let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// for (let item of arr){
//     console.log(item);
// }

// for (let item in arr){
//     console.log(arr[item]);
// }

// let matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];
// console.log(matrix[1][1])  // 5

// Arr methods

// let arr = [1, 2, 3, 4, 5];

// arr.splice(1,2 );
// console.log(arr)  // 1,4,5;

// console.log(arr.slice(1,3));

// let a = [6,7,8];

// console.log(arr.concat(a))

// console.log(arr.indexOf(2)); //1

// console.log(arr.includes(2))  // true

// const fruits = [
// 	{ id: 0, name: 'Apple' },
// 	{ id: 1, name: 'Tomato' },
// 	{ id: 2, name: 'Cherry' },
// 	{ id: 3, name: 'Orange' },
// ];

// console.log(fruits.find((item) => item.id === 2));

// console.log(fruits.filter((item) => item.name === 'Tomato'));

// MAP

// let result = fruits.map((item) => item.name.length);
// console.log(result);

// SPLIT

// let names = 'Оля, Юля, Аня, Петя';

// let arr = names.split(', ');

// let newString = arr.join(', ');

// console.log(newString);

// let arr = [1, 2, 3, 4, 5];

// let red = arr.reduce((sum, item) => sum + item);

// console.log(red);

// let arr = [23, 45, 30];
// let summ = arr.reduce((sum, item) => sum + item) / arr.length;

// console.log(summ);

// -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.
// const fruts = [
// 	{ id: 0, name: 'Apple' },
// 	{ id: 1, name: 'Tomat' },
// 	{ id: 2, name: 'Cherry' },
// 	{ id: 3, name: 'Orange' },
// ];

// let names = [];
// for (item of fruts) {
// 	names.push(item.name);
// }
// console.log(names);

// -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.

// for (let i = 2; i <= 10; i++) {
// 	if (i % 2 === 1) continue;
// 	console.log(i);
// }

// -- 3 --
//Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
// 	console.log(`цифра ${i}!`);
// }

// let i = 0;
// while (i < 5) {
// 	console.log(`цифра ${i}!`);
// 	i++;
// }

// -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.
// let i = 0;
// do {
// 	let a = prompt('Enter a number >100');
// 	i = a;
// 	console.log(i);
// } while (i < 100);

// -- 5 --
// Вирахуйте середній вік
// const girls = [
// 	{ age: 23, name: 'Оля' },
// 	{ age: 29, name: 'Аня' },
// 	{ age: 10, name: 'Юля' },
// 	{ age: 20, name: 'Катя' },
// ];

// let ageCount = [];
// for (item of girls) {
// 	ageCount.push(item.age);
// }
// console.log(ageCount);

// let red = ageCount.reduce((sum, item) => sum + item) / ageCount.length;

// console.log(red);

// Function expression

// const userName = 'Ann';

// const sayHi = function () {
// 	let message = 'Hello, my name ';
// 	console.log(message + userName);
// };

// sayHi();

// Function declaration

// function sum(a, b) {
// 	let c = a + b;
// 	return c;
// }

// let result = sum(2, 3);
// console.log(result);

// const testFunc = function (a, b) {
// 	console.log('a:', a);
// 	console.log('b:', b);
// 	return;
// };

// testFunc(5, 6);

// arguments and rest

// const addName = function () {
// 	const arg = Array.from(arguments);
// 	console.log(arguments);
// 	console.log(arg);
// };

// addName(1, 3, 4, 5);

// rest = ...
// const addName = function (...arg) {
// 	console.log(arg);
// };

// addName(1, 3, 5);

//callback

// function ask(question, yes, no) {
// 	if (confirm(question)) {
// 		yes();
// 	} else {
// 		no();
// 	}
// }

// function showOk() {
// 	console.log('You say ok');
// }

// function showCancel() {
// 	console.log('You say No');
// }

// ask('Yes or no?', showOk, showCancel);

//high order function

// const sayHello = function (name) {
// 	console.log(`Hello ${name}`);
// };

// const searchName = function (callback) {
// 	const name = 'Denys';
// 	callback(name);
// };

// searchName(sayHello);

// function checkAge(age) {
// 	if (age > 18) {
// 		return console.log('Hello');
// 	}
// 	return console.log('Good Bye');
// }
// checkAge(21);

// function showMovie(age) {
// 	if (age < 21) {
// 		return;
// 	}
// 	return console.log('Go to movie!');
// }

// showMovie(21);

// Arrow Function
// const showMovie = (age) => {
// 	if (age > 21) {
// 		return console.log('hello');
// 	}
// 	return console.log('Bye!');
// };

// showMovie(20);

// const a = () => {
// 	console.log('a');
// };

// const b = () => {
// 	console.log('b');
// };

// const c = () => {
// 	console.log('c');
// 	a();
// 	b();
// };

// c();

// const addNumber = (number) => {
// 	let suum = Number(number) + 10;
// 	return console.log(suum);
// };

// const numberRef = document.querySelector('input[name="number"]');

// const buttonRef = document.querySelector('button');

// buttonRef.addEventListener('click', () => addNumber(numberRef.value));

// ---1---
// Перепишіть функцію, використовуючи '?' або '||'
// function checkAge(age) {
// 	age > 18 ? true : confirm('Батьки дозволили?');
// }

// checkAge(19);

// ---2---
// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.

// const minOfTwo = (a, b) => {
// 	if (a > b) {
// 		return b;
// 	}
// 	return a;
// };

// console.log(minOfTwo(666, 999));

// ---3---
// Перепишіть з використанням стрілкових функцій
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:
// const ask = (question, yes, no) => {
// 	if (confirm(question)) yes();
// 	else no();
// };
// ask(
// 	'Ви згодні?',
// 	function () {
// 		alert('Ви погодились.');
// 	},
// 	function () {
// 		alert('Ви скасували виконання.');
// 	},
// );

//L25 - Замикання, this

// function createNewSum(num) {
// 	return function () {
// 		console.log(10 * num);
// 	};
// }

// const calc = createNewSum(5);

// calc();

// function createNewNumber(n) {
// 	return function (num) {
// 		return n + num;
// 	};
// }

// const addFive = createNewNumber(5);

// console.log(addFive(10));

// function createUrl(domain) {
// 	return function (url) {
// 		return `https://${url}.${domain}`;
// 	};
// }

// const comUrl = createUrl('com');
// console.log(comUrl('google'));

// _______________________________ //
// _______________________________ //
//this

// function hello() {
// 	console.log('hello', this);
// }

// hello();

// const user = {
// 	name: 'Ivan',
// 	city: 'Odessa',
// 	sayHello: hello,
// };

// user.sayHello();

// function abc() {
// 	console.log('В функції');
// 	console.log(this);
// }

// abc();

// document.querySelector('p').onclick = abc;

// function changeColor() {
// 	this.style.background = 'green';
// 	this.style.color = 'white';
// }

// document.querySelector('div').onclick = changeColor;

// let user = document.querySelectorAll('div');

// user.forEach(function (element) {
// 	element.onclick = changeColor;
// });

// const showList = () => {
// 	console.log(this);
// };

// showList();

// const list = {
// 	names: ['Ann', 'Olga', 'Ivan'],
// 	showList: showList,
// };

// list.showList();

// function hello() {
// 	console.log(this);
// }

// const user = {
// 	name: 'Ivan',
// 	age: 30,
// 	hello: hello,
// 	sayHelloWindow: hello.bind(window),
// 	info: function (city) {
// 		console.log(`Name is ${this.name}`);
// 		console.log(`Age is ${this.age}`);
// 		console.log(`City is ${city}`);
// 	},
// };

// user.info();

// const Ann = {
// 	name: 'Anna',
// 	age: 23,
// };

// const Nata = {
// 	name: 'Nata',
// 	age: 18,
// };

// user.info.bind(Ann, 'Kyiv')();
// user.info.bind(Nata, 'Khmelnytskyi')();

// ================ call

// const userInfo = {
// 	name: 'name',
// 	age: 98,
// 	logInfo: function (job) {
// 		console.group(`${this.name} info:`);
// 		console.log(`Name is : ${this.name}`);
// 		console.log(`Age is : ${this.age}`);
// 		console.log(`Job is : ${job}`);
// 		console.groupEnd();
// 	},
// };

// const Vano = {
// 	name: 'Ivan',
// 	age: 45,
// };

// userInfo.logInfo.call(Vano, 'santehnik');

// ================ apply

// const showUserInfo = {
// 	name: name,
// 	age: 97,
// 	logInfo: function (job, city) {
// 		console.group(`${this.name} info:`);
// 		console.log(`Name is : ${this.name}`);
// 		console.log(`Age is : ${this.age}`);
// 		console.log(`Job is : ${job}`);
// 		console.log(`City is : ${city}`);
// 		console.groupEnd();
// 	},
// };

// const Vano = {
// 	name: 'Ivan',
// 	age: 45,
// };

// showUserInfo.logInfo.apply(Vano, ['santehnik', 'Lviv']);

//////////////////////////////////////////////
//////////////////////////////////////////////

// const message1 = function (name, stars) {
// 	console.log(`${name}, Welcome to ${this.hotel}, stars ${stars}`);
// };

// const Bukovel = { hotel: 'Bukovel' };
// const Turist = { hotel: 'Turist' };

// message1.call(Bukovel, 'Ivan', '5');
// message1.call(Turist, 'Ivan', '3');

// message1.apply(Bukovel, ['Ivan', '5']);
// message1.apply(Turist, ['Ivan', '3']);

// message1.bind(Bukovel, 'Ivan', '5')();
// message1.bind(Turist, 'Ivan', '3')();

// const cart = {
// 	showItems() {
// 		console.log('В корзині: ', this.items);
// 	},
// };

// const woman = {
// 	items: ['dress', 'tyfli'],
// };

// const man = {
// 	items: ['suit', 'shirt'],
// };

// const kid = {
// 	items: ['t-shirt', 'pants'],
// };

// document
// 	.querySelector('#wom')
// 	.addEventListener('click', cart.showItems.bind(woman));

// document
// 	.querySelector('#man')
// 	.addEventListener('click', cart.showItems.bind(man));

// document
// 	.querySelector('#kid')
// 	.addEventListener('click', cart.showItems.bind(kid));

// const infoCar = {
// 	name: 'BMW',
// 	model: 'M7',
// 	color: 'white',
// 	showInfo: function () {
// 		console.log(
// 			`Car ${this.name}, model ${this.model}, color ${this.color}`,
// 		);
// 	},
// };

// infoCar.showInfo();

// car2 = {
// 	name: 'OPEL',
// 	model: 'XXX',
// 	color: 'red',
// };

// // infoCar.showInfo.bind(car2)();

// infoCar.showInfo.call(car2);

// infoCar.showInfo.apply(car2);

// const studentObject = {
// 	name: 'name',
// 	speciality: 'speciality',
// 	avgMark: 1,
// 	countMissedLectures: 1,
// 	studentInfo: function () {
// 		console.log(`Student name is ${this.name}`);
// 		console.log(`Student speciality is ${this.speciality}`);
// 		console.log(`Student average Mark is ${this.avgMark}`);
// 		console.log(`Student has missed ${this.countMissedLectures} lectures`);
// 	},
// };

// const student1 = {
// 	name: 'Ivan',
// 	speciality: 'Svarshik',
// 	avgMark: 5,
// 	countMissedLectures: 15,
// };

// const student2 = {
// 	name: 'Sasha',
// 	speciality: 'Elektrik',
// 	avgMark: 3,
// 	countMissedLectures: 25,
// };

// const student3 = {
// 	name: 'Nata',
// 	speciality: 'Teacher',
// 	avgMark: 12,
// 	countMissedLectures: 0,
// };

// studentObject.studentInfo.bind(student1)();

// ============================

// const shopCalc = function (name, price, amount) {
// 	let cost = amount * price;
// 	console.log(`You buying ${name}, it will cost you ${cost} griven`);
// };

// shopCalc('banana', 30, 4.5);
// shopCalc('cherry', 58, 1.3);

// ============================

// const isLang = {
// 	showLang() {
// 		console.log('Мова програмування: ', this.name);
// 	},
// };

// const htmlcont = {
// 	name: 'HTML',
// };

// const csscont = {
// 	name: 'CSS',
// };

// document
// 	.querySelector('#html')
// 	.addEventListener('click', isLang.showLang.bind(htmlcont));

// document
// 	.querySelector('#css')
// 	.addEventListener('click', isLang.showLang.bind(csscont));

// JS L26

// Процедурне програмування

// const summ = 20000;
// const month = 12;
// const p = 1000;

// const credit = (sum, date, p) => {
// 	return sum + p * date;
// };

// console.log(credit(summ, month, p));

// ООП - об'єктно-орієнтоване програмування

// const credit = {
// 	summ: 20000,
// 	month: 12,
// 	p: 1000,
// 	result() {
// 		return this.summ + this.p * this.month;
// 	},
// };

// console.log(credit.result());

// Класи

// class Bank {
// 	static type = 'Privat';
// 	constructor(options) {
// 		this.summ = options.summ;
// 		this.month = options.month;
// 		this.p = options.p;
// 	}
// 	credit() {
// 		return console.log('i am privat');
// 	}
// }

// const userBank = new Bank({ summ: 30000, month: 5, p: 500 });

// userBank.credit();
// console.log(Bank.type);

// class NewBank extends Bank {
// 	constructor(options) {
// 		super(options);
// 		this.card = options.card;
// 	}
// 	credit() {
// 		super.credit();
// 		return console.log('i am aval');
// 	}
// }

// const aval = new NewBank({
// 	summ: 30000,
// 	month: 5,
// 	p: 500,
// 	card: true,
// });

// console.log(aval.credit());

// get & set

// class User {
// 	constructor(props) {
// 		this.name = props.name;
// 	}
// 	firstName = '';
// 	lastName = '';
// 	age = '';
// 	city = '';

// 	set name(newName) {
// 		const nameRow = newName.split(' ');
// 		this.firstName = nameRow[0];
// 		this.lastName = nameRow[1];
// 	}

// 	get name() {
// 		return `First Name: ${this.firstName} last name: ${this.lastName}`;
// 	}
// }

// const Kris = new User({
// 	name: 'Kristina Malitowska',
// });

// console.log(Kris);

// Prototypes

// const a = [1, 2, 3];
// console.log(a);

// const a = {
// 	x: 1,
// 	y: 2,
// };

// const b = Object.create(a);

// console.log(b.hasOwnProperty('x'));

// const Manager = function (name, sales) {
// 	this.name = name;
// 	this.sales = sales;
// };

// const ann = new Manager('Anna', 5);
// const den = new Manager('Denchik', 99);

// Manager.prototype.sale = function () {
// 	this.sales += 1;
// };

// ann.sale();
// console.log(ann.sales);

// console.dir(Manager);

// class CoffeeMachine {
// 	_water = 0;
// 	#waterLimit = 500;
// 	constructor(power) {
// 		this.power = power;
// 	}
// 	set waterAmount(value) {
// 		if (value < 0) {
// 			value = 0;
// 		}
// 		this._water = value;
// 	}
// }

// let coffeeMachine = new CoffeeMachine(100);

// coffeeMachine.waterAmount = -20;

// console.log(coffeeMachine);

// function validatePIN(pin) {
// 	if (
// 		(pin.length === 4 || pin.length === 6) &&
// 		!/^[0-9]+$/.test(pin) === false
// 	) {
// 		return true;
// 	}
// 	return false;
// }

// // console.log(validatePIN('1234'));
// // console.log(validatePIN('555567'));
// console.log(validatePIN('1234'));

// console.log(!/^[0-9]+$/.test('1234'));

// class CoffeeMachine {
// 	_water = 0;
// 	#waterLimit = 500;
// 	constructor(power) {
// 		this.power = power;
// 	}
// 	set waterAmount(value) {
// 		if (value < 0) {
// 			value = 0;
// 		}
// 		this._water = value;
// 	}
// }

// class Abonent {
// 	name = 'name';
// 	number = 0;
// 	constructor(phone) {
// 		this.phone = phone;
// 	}
// 	set phoneAndNumber(value) {
// 		this.phone = phone;
// 		this.number = number;
// 	}

// 	get;
// }

// class CircleBox {
// 	constructor(selector) {
// 		this.$el = document.querySelector(selector);
// 	}

// 	hide() {
// 		this.$el.style.display = 'none';
// 	}

// 	show() {
// 		this.$el.style.display = 'block';
// 	}
// }

// class CircleItem extends CircleBox {
// 	constructor(options) {
// 		super(options.selector);
// 		this.$el.style.width = options.size + 'px';
// 		this.$el.style.height = options.size + 'px';
// 		this.$el.style.borderRadius = '50%';
// 		this.$el.style.background = options.color;
// 	}
// }

// const CircleRed = new CircleItem({
// 	selector: '#circleRed',
// 	color: 'red',
// 	size: 50,
// });

// const CircleYellow = new CircleItem({
// 	selector: '#circleYellow',
// 	color: 'yellow',
// 	size: 70,
// });

// const CircleGreen = new CircleItem({
// 	selector: '#circleGreen',
// 	color: 'green',
// 	size: 30,
// });

// function Car(name, color) {
// 	this.name = name;
// 	this.color = color;
// }

// Car.prototype.message = function () {
// 	console.log(`${this.name} is ${this.color} color `);
// };

// Car.prototype.start = function () {
// 	console.log(`${this.name} is wroom wroom ${this.color}!`);
// };

// const BMW = new Car('BMW', 'RED');
// const OPEL = new Car('Opel', 'BLUE');

//
// Array1
// const myArray = ['Pasta', 'Deryni', 'Grenki'];
// myArray[0] = 'Pizza';
// myArray[1] = 'Sushi';
// myArray.unshift('Pasta');
// console.log(myArray);

// Array2
// let myString = 'Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri';
// let myArray = myString.split('+');
// let arrayLength = myArray.length;
// let lastItem = myArray[arrayLength - 1];
// console.log(lastItem);

// Array3
// let myArray = ['Ryu', 'Ken', 'Chun-Li', 'Cammy', 'Guile', 'Sakura', 'Sagat', 'Juri'];
// myArray.pop();
// myArray.push('Olya', 'Denys');
// let finalArray = [];
// myArray.forEach((myArr, i) => {
// 	let newArr = `${myArr} (${i})`;
// 	finalArray.push(newArr);
// 	console.log(newArr);
// });

// let finalString = finalArray.join('-');

// Array4
//
// const birds = ['Parrots', 'Falcons', 'Eagles', 'Emus', 'Caracaras', 'Egrets'];
// let indexOfEagles = birds.indexOf('Eagles', 0);
// birds.splice(indexOfEagles, 1);

// const filterValue = 'E';
// const eBirds = birds.filter((option) => option.startsWith(filterValue));

// let elem = document.getElementById('ELEM');

// elem.style.background = 'green';

// let elements = document.querySelectorAll('ul>li:last-child');

// for (element of elements) {
//     console.log(element);
// }

// let element = document.querySelector('li');
// console.log(element);

// let element = document.getElementsByTagName('div');
// console.log(element);

// let textHidden = document.getElementById('textHidden');
// textHidden.hidden = false;

// let message = document.getElementById('message');
// console.log(message.value);

// let text = document.querySelector('.text-message');
// // console.log(text.textContent);

// text.textContent = 'Hello, Krasavchik';

// let btn = document.querySelector('.button');
// btn.style.backgroundColor = 'green';

// let text = document.querySelector('#p_text');

// text.classList.remove('red');

// console.log(text.classList.contains('red'));

// text.classList.add('yellow');

// console.log(text.classList.contains('yellow'));

// let image = document.querySelector('.image');
// console.log(image.hasAttribute('src'));

// const item = document.createElement('a');

// item.href = '#';
// item.classList.add('btn');
// item.textContent = '3';

// const nav = document.querySelector('.nav');
// nav.appendChild(item);

// const heading = document.createElement('h1');
// heading.textContent = 'Hello';
// heading.style.size = '160px';

// const container = document.querySelector('.container');
// container.insertBefore(heading, nav);

// const text = document.querySelector('.text');
// const parent = document.querySelector('.parent');

// const clone = text.cloneNode(true);
// parent.appendChild(clone);

// const container = document.querySelector('.container');
// const text = `<p>Sorry</p>`;

// container.innerHTML += text;

// const list = document.querySelector('.list');

// list.insertAdjacentHTML('beforeEnd', '<p>afterEnd</p>');

// const getElement = document.querySelector('[data-widget-name]');
// let attr = getElement.textContent;
// alert(attr);

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// function filtering(arr) {
//     let filteredArr = [];
//     arr.map((num) => (num % 2 == 0 ? filteredArr.push(num) : null));
//     return filteredArr;
// }

// alert(filtering(arr));

function squareNum(arr) {
    for (num of arr) {
        num **= 2;
        alert(num);
    }
    return;
}

squareNum(arr);
