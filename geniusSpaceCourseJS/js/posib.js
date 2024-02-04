// Змінні
//
// Task #1
// let admin;
// let name = 'Ivan';
// admin = name;
// alert(admin);
//
// Task #2
// let ourPlanetName;
// let currentUserName;
//
// Task #3
// const BIRTHDAY = '18.04.1982';
// const age = someCode(BIRTHDAY);
// ==============================================================
// Перетворення типу
// //
// '' + 1 + 0; // 10
// '' - 1 + 0; // -1
// true + false; // 1
// 6 / '3'; // 2
// '2' * '3'; // 6
// 4 + 5 + 'px'; // 9px
// '$' + 4 + 5; // $45
// '4' - 2; // 2
// '4px' - 2; // nan
// '    -9     ' + 5; // -95
// '    -9     ' - 5; // -14
// null + 1; // 1
// undefined + 1; // nan
// ' \t \n ' - 2; // -2
// ==============================================================
// Оператори порівняння
//
// Task #1
// 5 > 4; // true
// 'ананас' > 'яблуко'; // false
// '2' > '12'; // true
// undefined == null; // true
// undefined === null; // false
// null == '\n0\n'; // false
// null === +'\n0\n'; // false
// ==============================================================
// Умовні розгалуження
//
// Task #2
// let question = prompt('Яка “офіційна” назва JavaScript?');

// if (question.toLowerCase() === 'ecmascript') {
// 	alert('Correct!');
// } else {
// 	alert('No, its not..');
// }
//
// Task #3
// let receivedNumber = prompt('Enter an a number', '');

// if (receivedNumber > 0) {
// 	alert(1);
// } else if (receivedNumber < 0) {
// 	alert(-1);
// } else {
// 	alert(0);
// }
//
// Task #4
// let result = a + b < 4 ? 'Lower' : 'Higher';
//
// Task #5
// let message = login == 'Worker' ? 'Hello!' : (login = 'Chief') ? 'Greetings!' : (login = '') ? 'No login' : '';
// ==============================================================
// Логічні Оператори
//
// Task #1
// alert( null || 2 || undefined ); // 2 - перше правдиве
//
// Task #2
// alert(alert(1) || 2 || alert(3)); // 1, 2 - спершу alert(1) виводить 1 і повертає undefined, АБО йде далі
//
// Task #3
// alert( 1 && null && 2 ); // null - перше хибне
//
// Task #4
// alert( alert(1) && alert(2) ); // 1, undefined
//
// Task #5
// alert(null || (2 && 3) || 4); // 3 - спершу обчислюється І(&&), вираз стає null || 3 || 4 - і повертається перше правдиве
//
// Task #6
// if (age >= 14 && age < 90) {
// 	alert(true);
// }
//
// Task #7
// if (age < 14 || age > 90) {
// }
// if (!(age >= 14 && age < 90)) {
// }
//
// Task #9
// let askLogin = prompt('Enter your login', '');
// if (askLogin === 'Admin') {
// 	let askPassword = prompt('Enter your password');
// 	if (askPassword === '123') {
// 		alert('Welcome, dungeon master!');
// 	} else if (askPassword === '' || askPassword === null) {
// 		alert('Canceled');
// 	} else {
// 		alert('Wrong password');
// 	}
// } else if (askLogin === '' || askLogin === null) {
// 	alert('Canceled');
// } else {
// 	alert('Who are you?');
// }
// ==============================================================
// While i For
//
// Task #3
// for (let i = 2; i <= 10; i++) {
// 	if (i % 2 != 0) continue;
// 	alert(i);
// }
//
// Task #4
// let i = 0;
// while (i < 3) {
// 	alert(`number ${i}!`);
// 	i++;
// }
//
// Task #5
// let number = 0;
// do {
// 	number = +prompt('Enter a number', '');
// } while (number < 100 && number);
//
// Task #6
// let n = 10;
// nextPrime: for (let i = 2; i <= n; i++) {
// 	for (let j = 2; j < i; j++) {
// 		// шукаємо дільник..
// 		if (i % j == 0) continue nextPrime; // не просте, беремо наступне i
// 	}
// 	alert(i); // просте число
// }
// ==============================================================
// Конструкція switch
//
// Task #1
// if (browser === 'Edge') {
// 	alert("You've got the Edge!");
// } else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
// 	alert('Ми підтримуємо і ці браузери');
// } else {
// 	alert('Маємо надію, що ця сторінка виглядає добре!');
// }
//
// Task #2
// let a = +prompt('a?', '');
//
// switch (a) {
// 	case 0:
// 		alert(0);
// 		break;
// 	case 1:
// 		alert(1);
// 		break;
// 	case 2:
// 	case 3:
// 		alert('2,3');
// 		break;
// }
//
// ==============================================================
// Функції
//
// Task #2
// function checkAge(age) {
// 	return age > 18 ? true : confirm('Parents allowed1?');
// }
//
// function checkAge(age) {
// 	return age > 18 || confirm('Parents allowed2?');
// }
//
// checkAge(17);
//
// Task #3
// function min(a, b) {
// return a > b ? b : a;
// }
//
// alert(min(4, 3));
//
// Task #4
// function pow(x, n) {
//     return x * n;
// }

// function getX() {
//     let x = prompt('Enter x', '');
//     return x;
// }

// function getN() {
//     let n = prompt('Enter n', '');
//     return n;
// }

// alert(pow(getX(), getN()));
// ==============================================================
// Стрілкові функції, основи
//
// Task #1
// let ask = (question, yes, no) => {
// 	if (confirm(question)) yes();
// 	else no();
// };

// ask(
// 	'Are you ok?',
// 	() => alert('You are ok'),
// 	() => alert('You are not ok'),
// );

// function pow(x, n) {
//     let result = 1;
//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }
//     return result;
// }

// let x = prompt('x?', ''),
//     n = prompt('n?', '');
// if (n <= 0) {
//     alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
// } else {
//     alert(pow(x, n));
// }
// ==============================================================
// Об'єкти
//
// Task #1
// let user = {
//     name: 'Ivan',
//     surname: 'Smith',
// };

// user.name = 'Petro';

// delete user.name;
//
// Task #2
// function isEmpty(obj) {
//     for (let key in obj) {
//         return false;
//     }
//     return true;
// }

// let schedule = {};

// alert(isEmpty(schedule)); // true

// schedule['8:30'] = 'Вставай';
// alert(isEmpty(schedule));
//
// Task #3
// function calcSalary(obj) {
//     let sum = 0;
//     for (let key in obj) {
//         sum += obj[key];
//     }
//     return sum;
// }

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// };

// alert(calcSalary(salaries));
//
// Task #4
// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] === 'number') {
//             obj[key] *= 2;
//         } else continue;
//     }
// }

// let menu = {
//     width: 200,
//     title: 'Моє меню',
//     height: 300,
// };

// multiplyNumeric(menu);

// alert(menu.width);
// ==============================================================
// Методи об'єкта, this
//
// Task #2
// let calculator = {
//     read() {
//         (this.a = Number(prompt('value 1'))), (this.b = Number(prompt('value 2')));
//     },
//     sum() {
//         return this.a + this.b;
//     },
//     mul() {
//         return this.a * this.b;
//     },
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());
//
// Task #3
// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         return this;
//     },
//     down() {
//         this.step--;
//         return this;
//     },
//     showStep: function () {
//         // показує поточний крок
//         alert(this.step);
//         return this;
//     },
// };

// ladder.up().up().down().showStep().down().showStep();
// ==============================================================
// Конструктори, оператор "new"
//
// Task #2
// function Calculator() {
//     this.read = function () {
//         this.a = +prompt('value 1', 0);
//         this.b = +prompt('value 2', 0);
//     };
//     this.sum = function () {
//         return this.a + this.b;
//     };
//     this.mul = function () {
//         return this.a * this.b;
//     };
// }

// let calculator = new Calculator();
// calculator.read();

// alert('Sum=' + calculator.sum());
// alert('Mul=' + calculator.mul());
//
// Task #3
// function Accumulator(startingValue) {
//     this.value = startingValue;
//     this.read = function () {
//         this.value += +prompt('value 1', 0);
//     };
// }
// let accumulator = new Accumulator(1); // початкове значення 1

// accumulator.read(); // додає введене користувачем значення
// accumulator.read(); // додає введене користувачем значення

// alert(accumulator.value); // показує суму цих значень
// ==============================================================
// Числа
//
// Task #1
// let num1 = +prompt('Enter a num1', '');
// let num2 = +prompt('Enter a num2', '');

// alert(num1 + num2);
//
// Task #2
// let num = 6.35;
// alert(Math.round(num * 10) / 10);
//
// Task #3
// function readNumber() {
//     let num;
//     do {
//         num = prompt('Enter a number', '');
//     } while (!isFinite(num));
//     if (num === 'null' || num === '') {
//         return null;
//     }
//     return +num;
// }

// alert(readNumber(1));
//
// Task #4
// let i = 0;
// while (i != 10) {
//     i += 2;
//     alert(i);
// }
//
// Task #5
// function random(min, max) {
//     return min + Math.random() * (max - min);
// }
// alert(random(1, 5));
//
// Task #6
// function randomInteger(min, max) {
//     // тепер rand від min до (max+1)
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
// }

// alert(randomInteger(1, 3));
// ==============================================================
// Рядки
//
// Task #1
// function ucFirst(str) {
//     if (!str) return str;
//     return str[0].toUpperCase() + str.slice(1);
// }

// alert(ucFirst('василь'));
//
// Task #2
// function checkSpam(str) {
//     if (str.toLowerCase().includes('viagra') || str.toUpperCase().includes('XXX')) {
//         return true;
//     }
//     return false;
// }

// alert(checkSpam('buy ViAgRA now'));
// alert(checkSpam('free xxxxx'));
// alert(checkSpam('innocent rabbit'));
//
// Task #3
// function truncate(str, maxlength) {
//     if (str.length > maxlength) {
//         return str.slice(0, maxlength - 1) + '...';
//     }
//     return str;
// }

// alert(truncate('Що я хотів би розповісти на цю тему:', 20));

// alert(truncate('Всім привіт!', 20));
//
// Task #4
// function extractCurrencyValue(str) {
//     return +str.slice(1);
// }
// alert(extractCurrencyValue('$120') === 120);
// ==============================================================
// Масиви

// Task #2
// let styles = ['Jazz', 'Blues'];
// styles.push('Rock-n-roll');
// styles[Math.floor((styles.length - 1) / 2)] = 'Classics';
// styles.shift();
// styles.unshift('Rap', 'Raggae');

// Task #4
// function sumInput() {
//     let arr = [];
//     while (true) {
//         let value = prompt('Enter an a value', 0);
//         if (value === '' || value === undefined || !isFinite(value)) break;
//         arr.push(+value);
//     }
//     let sum = 0;
//     for (number of arr) {
//         sum += number;
//     }
//     return sum;
// }

// alert(sumInput());

// Task #5
// function getMaxSubSum(arr) {
//     let maxSum = 0;
//     let partialSum = 0;

//     for (let item of arr) {
//         // for each item of arr
//         partialSum += item; // add it to partialSum
//         maxSum = Math.max(maxSum, partialSum); // remember the maximum
//         if (partialSum < 0) partialSum = 0; // zero if negative
//     }

//     return maxSum;
// }

// alert(getMaxSubSum([-1, 2, 3, -9])); // 5
// alert(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
// alert(getMaxSubSum([-2, -1, 1, 2])); // 3
// alert(getMaxSubSum([100, -9, 2, -3, 5])); // 100
// alert(getMaxSubSum([1, 2, 3])); // 6
// alert(getMaxSubSum([-1, -2, -3])); // 0
// ==============================================================
// Методи масивів

// Task #1
// function camelize(str) {
//     return str
//         .split('-')
//         .map((word, index) => (index == 0 ? word : word[0].toUpperCase() + word.slice(1)))
//         .join('');
// }
// alert(camelize('background-color'));

// Task #2
// function filterRange(arr, a, b) {
//     return arr.filter((item) => item >= a && item <= b);
// }

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert(filtered); // 3,1 (відфільтровані значення)

// alert(arr); // 5,3,8,1 (не змінюється)

// Task #3
// function filterRangeInPlace(arr, a, b) {
//     for (let i = 0; i < arr.length; i++) {
//         let val = arr[i];

//         // видаляти, якщо не у вказаному діапазоні
//         if (val < a || val > b) {
//             arr.splice(i, 1);
//             i--;
//         }
//     }
// }

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // видаляє всі числа крім тих, що в діапазоні від 1 до 4

// alert(arr); // [3, 1]

// Task #4
// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a);

// alert(arr);

// ==============================================================
// Object.keys, values, entries

// Task #1
// function sumSalaries(salaries) {
//     let sum = 0;
//     for (let value of Object.values(salaries)) {
//         return (sum += value);
//     }
//     return sum;
// }

// Task #2
// function count(obj) {
//     return Object.values(obj).length;
// }
// let user = {
//     name: 'Іван',
//     age: 30,
// };

// alert(count(user)); // 2
// ==============================================================
// Деструктуроване присвоєння

// Task #1
// let user = {
//     name: 'Іван',
//     years: 30,
// };

// let { name, years: age, isAdmin = false } = user;
// alert(name); // Іван
// alert(age); // 30
// alert(isAdmin); // false

// Task #2
// let salaries = {
//     Іван: 100,
//     Петро: 300,
//     Марія: 250,
// };

// function topSalary(salaries) {
//     let maxSalary = 0;
//     let maxName = null;

//     for (const [name, salary] of Object.entries(salaries)) {
//         if (maxSalary < salary) {
//             maxSalary = salary;
//             maxName = name;
//         }
//     }

//     return maxName;
// }

// alert(topSalary(salaries));
// ==============================================================
// Рекурсія та стек

// Task #1
// 1
// function sumTo(n) {
//     return n === 1 ? n : (n += sumTo(n - 1));
// }
// 2
// function sumTo(n) {
//     let sum = 0;
//     for (let i = 0; i < n; i++) {
//         sum += i;
//     }
//     return sum;
// }

// Task #2
// function factorial(n) {
//     return n != 1 ? n * factorial(n - 1) : 1;
// }

// alert(factorial(5)); // 120

// Task #3
// function fib(n) {
//     let a = 1;
//     let b = 1;
//     for (let i = 3; i <= n; i++) {
//         let c = a + b;
//         a = b;
//         b = c;
//     }
//     return b;
// }
// alert(fib(3)); // 2
// alert(fib(7)); // 13
// alert(fib(77)); // 5527939700884757
// ==============================================================
// Область видимої змінної, замикання

// Task #1
// function sum(a) {
//     return function (b) {
//         return a + b;
//     };
// }

// alert(sum(1)(2));

// Task #2
// function inBetween(a, b) {
//     return function (x) {
//         return x >= a && x <= b;
//     };
// }
// let arr = [1, 2, 3, 4, 5, 6, 7];
// alert(arr.filter(inBetween(3, 6)));

// function inArray(arr) {
//     return function (x) {
//         return arr.includes(x);
//     };
// }

// Task #3
// let users = [
//     { name: 'Іван', age: 20, surname: 'Іванов' },
//     { name: 'Петро', age: 18, surname: 'Петров' },
//     { name: 'Енн', age: 19, surname: 'Гетевей' },
// ];

// function byField(fieldName) {
//     return (a, b) => (a[fieldName] > b[fieldName] ? 1 : -1);
// }

// alert(users.sort(byField('name')));
// users.sort(byField('age'));

// Task #4
// function makeArmy() {
//     let shooters = [];

//     let i = 0;
//     while (i < 10) {
//         let j = i;
//         let shooter = function () {
//             // створюємо функцію стрільця,
//             alert(j); // що має показувати свій номер
//         };
//         shooters.push(shooter); // додаємо її до масиву
//         i++;
//     }

//     // ...і повертаємо масив стрільців
//     return shooters;
// }

// let army = makeArmy();

// // всі стрільці показують 10 замість своїх номерів 0, 1, 2, 3...
// army[0](); // 10 від стрільця за номером 0
// army[1](); // 10 від стрільця за номером 1
// army[2]();
// ==============================================================
// Об'єкт функції, NFE

// Task #1
// function makeCounter() {
//     let count = 0;

//     function counter() {
//         return count++;
//     }

//     counter.set = (value) => (count = value);

//     counter.decrease = () => count--;

//     return counter;
// }

// let counter = makeCounter();

// alert(counter()); // 0
// alert(counter()); // 1

// counter.set(10); // set the new count

// alert(counter()); // 10

// counter.decrease(); // decrease the count by 1

// alert(counter()); // 10 (instead of 11)

// Task #2
// function sum(val) {
//     let count = val;
//     function f(b) {
//         count += b;
//         return f;
//     }

//     f.toString = function () {
//         return count;
//     };

//     return f;
// }

// alert(sum(1)(2)); // 3
// alert(sum(5)(-1)(2)); // 6
// alert(sum(6)(-1)(-2)(-3)); // 0
// alert(sum(0)(1)(2)(3)(4)(5)); // 15
// ==============================================================
// Планування: setTimeout та setInterval

// Task #1
// function printNumbers(from, to) {
//     let current = from;

//     setTimeout(function go() {
//         alert(current);
//         if (current < to) {
//             setTimeout(go, 1000);
//         }
//         current++;
//     }, 1000);
// }

// // використання:
// printNumbers(5, 10);
// ==============================================================
// Успадкування через прототипи

// Task #2
// let head = {
//     glasses: 1,
// };

// let table = {
//     pen: 3,
//     __proto__: head,
// };

// let bed = {
//     sheet: 1,
//     pillow: 2,
//     __proto__: table,
// };

// let pockets = {
//     money: 2000,
//     __proto__: bed,
// };

// alert(pockets.pen);
// alert(bed.glasses);

// ==============================================================
// Вбудовані прототипи

// Task #1
// function f() {
//     alert('Привіт!');
// }

// Function.prototype.defer = f;

// f.defer(1000); // показує "Привіт!" через 1 секунду

// ==============================================================
// Нестандартні помилки, розширення помилок

// Task #1
// class FormatError extends SyntaxError {
//     constructor(message) {
//         super(message);
//         this.name = this.constructor.name;
//     }
// }
// let err = new FormatError('formatting error');

// alert(err.message); // formatting error
// alert(err.name); // FormatError
// alert(err.stack); // stack

// alert(err instanceof FormatError); // true
// alert(err instanceof SyntaxError); // true (оскільки успадковується від SyntaxError)

// ==============================================================
// Проміси

// Task #1
// function delay(ms) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(resolve, ms);
//     });
// }
// delay(3000).then(() => alert('виконалось через 3 секунди'));

// ==============================================================
// Async/await

// Task #2
// class HttpError extends Error {
//     constructor(response) {
//         super(`${response.status} for ${response.url}`);
//         this.name = 'HttpError';
//         this.response = response;
//     }
// }

// async function loadJson(url) {
//     let response = await fetch(url);

//     if (response.status == 200) {
//         return response.json();
//     } else {
//         throw new HttpError(response);
//     }
// }

// // Запитуйте ім’я користувача, поки github не поверне дійсного користувача
// async function demoGithubUser() {
//     let user;
//     while (true) {
//         let name = prompt('Введіть ім’я?', 'iliakan');

//         try {
//             user = await loadJson(`https://api.github.com/users/${name}`);
//             break; // помилки немає, виходимо з циклу
//         } catch (err) {
//             if (err instanceof HttpError && err.response.status == 404) {
//                 // цикл продовжиться після сповіщення
//                 alert('Такого користувача не існує, будь ласка, введіть ще раз.');
//             } else {
//                 // невідома помилка, перепрокидуємо її
//                 throw err;
//             }
//         }
//     }

//     alert(`Ім’я та прізвище: ${user.name}.`);
//     return user;
// }

// demoGithubUser();
