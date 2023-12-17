// Навчання
// ==============================================================
//                           Змінні
/*
let dynamicVar = 'Im let';
const staticVar = 'Im const';
var oldVar = 'Im var';

console.log(dynamicVar);
console.log(staticVar);
console.log(oldVar);
*/
// Відмінність const i let полягає в тому, що const забороняє
// повторне надання змінній будь-якого значення.
// Потрібно використовувати const за замовчуванням,
// проте коли точно знаємо що змінній треба буде надати інше значення
// в процесі виконання коду - використовувати let
// ==============================================================
//                      Як називати змінні?
// ==============================================================
//                      Строкові змінні (String)
// В найменуванні строкових змінних використовують ІМЕННИК
// ==============================================================
//                      Числові змінні (Number)
// Для найменувань діють наступні правила:
// • кількість - count
// • код чогось - code
// • розмір - size/length
// • номер - number
// Змінні з кількох слів пишуться разом
// ==============================================================
//                      Верблюжа нотація - camelCase
// camelCase - загальноприйнятий стандарт найменування змінних
// суть полягає в тому, що перше слово зі сполучення пишеться з малої букви
// а всі наступні - з великої
/*
const borderLeftWidth;
*/
// ==============================================================
//                      Булеве значення (Boolean)
// Назви булевих змінних мають бути питаннями з відповіддю так чи ні
// • містить - has/contain
// • це - is
// • може - can
// • повинен - should
// • можливість - able
// ==============================================================
// ==============================================================
//                      Властивість
//
// У даних є характеристики, наприклад у рядка є властивість довжини
// Синтаксис звернення до властивості дуже простий:
//  сутність.імя_властивості
/*
string.length
object.propertyName
*/
// ==============================================================
//                         Метод
// Метод - це виклик певної дії, активна операція.
// Наприклад можна додати або видалити елементи з колекції,
// перевести рядок в різний регістр тощо.
// Синтаксис виклику схожий на звернення до Властивості,
// проте в кінці треба додатки пару дужок ()
//  сутність.імя_методу()
/*
string.toLowerCase();
string.toUpperCase();
*/
// ==============================================================
// ==============================================================
//                         Типи даних
// ==============================================================
// У JavaScript є 8 основних типів даних:
//
// • Number(число)
// • String(рядок)
// • Boolean(булевий або логічний тип)
// • Symbol(символ)
// • BigInt(великі числа)
// • Null(порожнє значення)
// • Undefined(відсутність значення)
// • Object(об'єкт)
//
// Окремо по кожному:
// 1. Number
//  Цілі числа та числа з плаваючою комою. Після оголошення змінної можна
//  ініціалізувати її числовим значенням.
// 2. String
//  Рядки або просто текст. Рядок починається і закінчується:
//   • одиночною лапкою - '
//   • подвійними лапками - "
// 3. Boolean
//  Логічний тип даних, прапори стану. Має два значення: true i false
// 4. Symbol
//  Символ являє собою унікальний ідентифікатор. Створити символ можна
//  за допомогою Symbol(). Навіть якщо ми створимо багато символів
//  з однаковим описом, вони будуть мати різні значення.
// 5. BigInt
//  Числа > за (253-1) та < за (-253-1).
//  Тип Number має технічні обмеження і не може містити такі числа.
//  Використовуються для криптографії або мікросекундних часових міток.
// 6. Null
//  Особливе значення, яке означає НІЩО.
//  Використовується в ситуаціях, коли необхідно явно вказати відсутність значення
// 7. Undefined
//  Ще одне спеціальне значення. За умовчанням, коли змінна оголошується
//  але не ініціалізується(її значення не визначено), їй присвоюється
//  невизначений тип - undefined.
// 8. Object
//  Особливий тип. Усі інші називаються Примітивами, адже можуть містити
//  тільки 1 елемент.
//  В об'єктах зберігаються колекції даних і більш складні структури.
// ==============================================================
// ==============================================================
//                         Оператори
// ==============================================================
//                      Оператор typeof
//  Для отримання типу значення змінної використовується
//  оператор типу typeof, який повертає на місце свого
//  виклику тип значення змінної вказаного після нього.
//  Значення, що повертається - простий рядок(String), в якому вказаний тип.
/*
const b = null;
console.log(typeof b); // "object"
const c = 5;
console.log(typeof c); // "number"
const d = 'JavaScript is Awesome!';
console.log(typeof d); // "string"
const e = false;
console.log(typeof e); // "boolean"
*/
// ==============================================================
//                    Вивід даних/Ввід даних
// Взаємодія: alert, prompt, confirm.
// --------------------------------------------------------------
// • alert
//  Функція показує повідомлення та чекає доки користувач
//  не натисне кнопку "ОК"
/*
alert("Привіт"); 
*/
// --------------------------------------------------------------
// • prompt
//  Функція prompt показуэ модальне вікно з текстовим повідомленням,
//  полем, куди відвідувач може ввести текст, та кнопками ОК/Скасувати
/*
let age = prompt('Скільки вам років?');
*/
// --------------------------------------------------------------
// • confirm
//  Функція confirm показує модальне вікно з питанням question
//  та двома кнопками: OK та Скасувати
//  Результат буде true, якщо натиснути кнопку ОК,
//  інакше - false
/*
const question = 'Are you ge?';
let result = confirm(question);
*/
// ==============================================================
// ==============================================================
//       Вирішення логічних задач та побудова алгоритмів
// ==============================================================
//                   Математичні оператори
// Нічим не відрізняються від шкільного курсу математики.
// Оператори повертають значення в місце операції.
// Порядок обчислення математичних виразів це звична алгебра.
// Але важливо запам'ятати найменування складових:
// +-*/% називають операторами,
// а те, на чому їх застосовують - операндами.
/*
const x = 10;
const y = 5;
console.log(x + y); // 15
console.log(x - y); // 5
console.log(x * y); // 50
console.log(x / y); // 2
console.log(x % y); // 0
*/
// ==============================================================
//                   Оператори порівняння
// Використовуються для порівняння значень.
// Результатом свого виконання повертать bool'и - true або false
/*
const a = 10;
const b = 5;
console.log(a > b);   // true
console.log(a < b);   // false
console.log(a >= b);  // true
console.log(a <= b);  // false
console.log(a == b);  // false
console.log(a != b);  // true
console.log(a === b); // false
console.log(a !== b); // true
*/
// ==============================================================
//                       == або ===
// Завжди використовуйте строгу рівність === і строгу нерівність !==
// Оператори == і != виконують перетворення типів порівнюваних значень,
// що може призвести до помилок.
// ==============================================================
//                    Логічні оператори
// В JavaScript існує 4 логічні оператори:
// • ||(АБО)
// • &&(І)
// • !(НЕ)
// • ??(оператор null-об'єднання)
// --------------------------------------------------------------
// ||(АБО)
//  Оператор АБО представлений двома символами вертикальної лінії
//  Логічний оператор АБО призначений для маніпулювання лише булевими значеннями
//  Якщо будь-який з його аргументів означає true - повертається true,
//  інакше повертається false
/*
const a = true;
const b = false;
let result = a || b;
console.log(result); // "true"
*/
// --------------------------------------------------------------
// &&(І)
//  Оператор І представлений двома амперсандами &&
//  Повертає true, якщо обидва оператори є правдивими,
//  і false в іншому випадку.
/*
const a = true;
const b = false;
let result = a && b;
console.log(result); // "false"
*/
// --------------------------------------------------------------
// !(НЕ)
//  Булевий Оператор НЕ представлений знаком оклику !
//  Оператор приймає один аргумент і виконує наступне:
//  Перетворює операнд на булевий тип : true/false
//  Повертає зворотнє значення.
/*
const value = true;
let result = !value;
console.log(result); // "false"
console.log(!result); // "true"
*/
//  Подвійний НЕ !! іноді використовується для перетворення
//  значення в булевий тип
//  Тобто, перший !(НЕ) перетворює значення на булеве і повертає зворотнє,
//  а другий !(НЕ) інвертує його знову
/*
console.log(!!'не пустий рядок'); // true
console.log(!!null); // false
*/
// ==============================================================
// ==============================================================
//               Умовні розгалуження if-else
// ==============================================================
//                     Інструкція if
// Інструкція if(...) обчислює умову в дужках і,
// якщо результат умови true, виконує блок коду.
/*
if (5 * 5 === 25) {
	console.log('Виведе в консоль цей рядок');
}
*/
// --------------------------------------------------------------
//                      Блок else
// Вираз if може містити необов'язковий блок else(інакше).
// Він виконується коли умова є хибною
/*
if (5 * 5 === 24) {
	console.log('1');
} else {
	console.log('2');
}
*/
// --------------------------------------------------------------
//                   Декілька умов - else if
// Іноді ми хотіли б перевірити кілька варіантів умови.
// Блок else if дозволяє нам це зробити.
/*
if (5 + 5 === 20) {
	console.log('5+5===20');
} else if (2 + 2 === 4) {
	console.log('2+2===4');
} else console.log('no');
*/
// ==============================================================
//              Умовний оператор ? (тернарний оператор)
// Умовний оператор ?(тернарний оператор) дає нам зробити порівняння
// ще в більш короткій і простій формі.
// Оператор представлений знаком питання ?
// Його називають тернарним, оскільки оператор має три операнди
// Синтаксис:
// let result = умова ? значення1(якщо умова true) : значення2(якщо умова false)
/*
2 + 2 === 4 ? console.log('true') : console.log('false');
5 * 5 === 24 ? console.log('true') : console.log('false');
*/
// ==============================================================
//                    Конструкція switch
// Конструкція switch може замінит кілька if
// Вона дає можлиаість більш наочного способу порівняння
// значення відразу з кількома варіантами
// Конструкція switch має один або більше case блоків
// та необов'язковий блок default
/*
let x = 'value3';

switch (x) {
	case 'value1': //if(x==="value1")
		console.log('Its value1');
		break;
	case 'value2': //if(x==="value2")
		console.log('Its value2');
		break;
	default:
		console.log('its nichego');
}
*/
// Значення змінної х перевіряється на строгу рівність (===) значень
// із першого блоку case("value1"),
// потім значенню із другого блоку case("value2") і так далі
// Якщо строго рівне значення знайдено, то switch починає виконання
// коду із відповідного case до найближчого break
// або до кінця конструкції switch(якщо break немає)
// ==============================================================
// ==============================================================
//                          Масиви
// Масив - структура даних для зберігання та маніпулювання
// колекцією індексованих значень. Використовуються для
// зберігання впорядкованих колекцій даних, наприклад,
// списку курортів, товарів, клієнтів у готелі тощо.
// Синтаксис для створення нового масиву - квадратні дужки []
// зі списком елементів розділених комами.
// У масиві може зберігатися будь-яка кількість елементів
// будь-якого типу.
//
// Оголошення
// Існує два типи синтаксису для створення порожнього масиву:
// • let arr = new Array();
// • let arr = [];
// Майже завжди використовують другий тип синтаксису.
// Елементи масиву нумеруються починаючи з нуля.
// Можна отримати елемент масиву вказавши його номер у квадратних дужках []
// Ми можемо вказати початкові елементи масиву у квадратних дужках:
/*
let fruits = ['Apple', 'Orange', 'Plum'];
console.log(fruits[0]); // "Apple"
*/
// ==============================================================
//                      Перевизначення
// Елементи масиву можна замінювати та додавати,
// звертаючись до елемента масиву за індексом
// fruits[2] = 'Pear'
// Та додовати новий:
// fruits[3] = 'Lemon'
//
// Загальна кількість елементів масиву зберігається
// у його властивості length:
/*
let fruits = ['Apple', 'Orange', 'Plum'];
console.log(fruits.length);  // 3
*/
//
// У масивах можуть зберігатись елементи будь-якого типу:
/*
let arr = ['Apple', { name: 'John' }, true, function () {}];
console.log(arr);
*/
// ==============================================================
//                        Методи масиву
// 1. Методи push(), pop(), shift(), unshift()
// --------------------------------------------------------------
// • push() - дозволяє додати один або кілька елементів до кінця масиву.
//   Метод повертає значення властивості length, що визначає кількість елементів у масиві
/*
arr.push('Lemon');
console.log(arr); // (5) ['Apple', {…}, true, ƒ, 'Lemon']
console.log(arr.push()); // 5
*/
// --------------------------------------------------------------
// • pop() - видаляє елемент із кінця масиву
//   Метод повертає значення видаленого елементу
/*
console.log(arr.pop()); // f () {}
console.log(arr.pop()); // true
*/
// --------------------------------------------------------------
// • shift() - видаляє елемент із початку масиву.
//   Метод повертає значення видаленого елементу
/*
console.log(arr.shift()); // "Apple"
console.log(arr.shift()); // {name: 'John'}
*/
// --------------------------------------------------------------
// • unshift() - додає елемент на початок масиву
// Метод повертає значення властивості length, що визначає кількість елементів у масиві
/*
console.log(arr.unshift('Lemon')); // 5
console.log(arr); //(5) ['Lemon', 'Apple', {…}, true, ƒ]
*/
// ==============================================================
// 2. Метод splice()
// splice() - це універсальний "швейцарський ніж" для роботи з масивами
// Вміє все: додавати, видаляти і замінювати елементи
// Синтаксис:
// arr.splice(position, num)
//   • position - вказує позицію(індекс) першого елемента видалення
//   • num - визначає кількість елементів, що видаляються
// Метод splice() змінює вихідний масив та повертає масив, що містить видалені елементи
/*
arr.splice(1, 2);
console.log(arr); // (2) ['Apple', ƒ]
*/
// ==============================================================
// 3. Метод slice()
// Синтаксис методу slice() однаковий для рядків та масивів.
// Його просто запам'ятати:
// Він дозволяє витягувати елементи підмножини масиву і додавати в новий масив.
// Найчастіше використовується для створення копії частини або цілого вихідного масиву
// arr.slice(begin, end) - копіює елементи від begin до, але не включаючи, end.
//   • begin - визначає індекс з якого слід розпочати вилученння
//   • end - визначає індекс, на якому слід закінчити вилучення.
//     Метод slice() не включає елемент з індексом end у вилучення.
// Обидва параметри begin та end не обов`язкові, якщо вони не вказані
// тоді копіюватись буде увесь масив.
// Якщо не вказати лише параметр end - метод використає довжину масиву(length)
// для параметра end
// Метод slice() не змінює вихідний масив, а повертає новий масив,
// що містить копію елементів вихідного.
/*
arr.slice(1, 3);
console.log(arr); // Не зміниться

let newArr = arr.slice(1, 3);
console.log(newArr); // Поверне новий масив - (2) [{…}, true]
*/
// ==============================================================
// 4. Метод concat()
// Метод concat() створює новий масив, в який копіює дані з інших масивів та додаткові значення
// arr.concat(arg1, arg2...)
// Метод приймає будь-яку кількість аргументів - масивів чи значень.
// Результатом є новий масив, що містить елементи з arr,
// потім arg1, arg2 тощо.
// Якщо аргумент argN є масивом, то всі його елементи копіюються.
// В іншому випадку буде скопійовано сам аргумент.
/*
const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Monkong', 'Singu'];
const allClients = oldClients.concat(newClients);
console.log(allClients); // (6) ['Mango', 'Ajax', 'Poly', 'Kiwi', 'Monkong', 'Singu']
*/
// ==============================================================
// 5. Методи indexOf(), lastIndexOf(), includes()
// Методи indexOf(), lastIndexOf(), includes() мають однаковий
// синтаксис і роблять по суті те ж саме, що і їх рядкові аналоги,
// але працюють з елементами замість символів.
// --------------------------------------------------------------
// • indexOf(item, from) - шукає item починаючи з індексу from,
//   і повертає індекс, на якому був знайдений шуканий елемент,
//   в іншому випадку повертає значення -1
/*
let arr = ['Apple', { name: 'John' }, true, function () {}];
console.log(arr.indexOf(true, 0)); // 2 (0,1,2)
*/
// --------------------------------------------------------------
// • lastIndexOf(item, from) - те ж саме, але шукає з кінця.
/*
let arr = ['Apple', { name: 'John' }, true, function () {}];
console.log(arr.lastIndexOf(true, -1)); // 2 (-1,3,2)
*/
// --------------------------------------------------------------
// • includes(item, from) - шукає item, починаючи з індексу from,
//   і повертає true, якщо пошук успішний
/*
let arr = ['Apple', { name: 'John' }, true, function () {}];
console.log(arr.includes(true, 0)); // true
*/
// ==============================================================
// ==============================================================
//                        Цикли
// ==============================================================
// Цикл - конструкція, що управляє, у високорівневих мовах програмування
// призначена для організації багаторазового виконання набору інструкцій
//
// Тіло циклу - послідовність інструкцій, призначена для багаторазового виконання
//
// Ітерація - одиничне виконання тіла циклу
//
// Умова виходу - вираз, що визначає чи буде в черговий раз
// виконуватися ітерація чи цикл завершиться
//
// Лічильник - змінна, що зберігає поточний номер ітерації.
// Цикл необов'язково містить лічильник, і не повинен бути один,
// умова виходу з циклу може залежати від кількох змінних у циклі.
//
// Виконання будь-якого циклу включає
//  • початкову ініціалізацію змінних циклу
//  • перевірку умови виходу
//  • виконання тіла циклу
//  • оновлення змінних циклу на кожній ітерації
// ==============================================================
//                    Цикл "while"
// Цикл while має наступний синтаксис:
//  while (умова){
//    // код
//    // "тіло циклу"
//  }
// Доки умова є вірною, виконуєтсья код із тіла циклу
// Наприклад, цикл нижче виводить i поки i < 3
/*
    let i = 0;
    while (i < 3) {
      console.log(i);
      i++;
    }
*/
// --------------------------------------------------------------
//                   Цикл "do...while"
// Перевірка умови може бути переміщена нижче тіла циклу використовуючи
// do...while синтаксис:
//  do {
//    // тіло циклу
//  } while(умова)
// Цикл спочатку виконує тіло, а потім перевіряє умову,
// і поки умова є true, цикл виконується знову і знову
// Наприклад:
/*
    let i = 0;
    do {
      console.log(i);
      i++;
    } while (i < 3);
 */
// --------------------------------------------------------------
//                      Цикл for
// Цикл із лічильником - цикл, у якому деяка змінна змінює
// своє значення від заданого початкового до кінцевого значення,
// з деяким кроком, і кожного значення цієї змінної тіло
// циклу виконується один раз.
//
// У більшості процедурних мов програмування реалізується
// оператором for, у якому вказується лічильник, необхідну кількість
// ітерацій так крок, з яким змінюється лічильник
//
// Алгоритм виконання циклу for:
// • Ініціалізація(initialization) - вираз ініціалізації виконується
//   один раз, коли починається цикл. Використовується для ініціалізації
//   змінної - лічильника. Якщо використовується ключове слово let,
//   зміна лічильника є локальною для циклу.
// • Умова(condition,test) - вираз, що оцінюється перед кожною ітерацією
//   циклу. Тіло циклу виконується лише тоді, коли вираз умови набуває значення
//   true. Цикл завершується, якщо значення буде false.
// • Тіло(statements) - виконується у разі задоволення умови
// • Пост-вираз(post-expression) - виконується після тіла кожної ітерації
//   циклу, але перед перевіркою умови.
//   Використовується для оновлення лічильника.
/*
    const max = 10;

    for (let i = 0; i < max; i++) {
      console.log(i);
    }
*/
// ==============================================================
//                  Переривання циклу: break
// Зазвичай цикл завершується, коли умова стає false.
// Але ми можемо в будь-який момент вийти з циклу,
// використавши спеціальну директиву break
/*
    for (let i = 0; i < 10; i++) {
      if (i === 5) {
        console.log('5 ітерація!');
        break;
      }
    }
*/
// --------------------------------------------------------------
//          Продовження з наступної ітерації: continue
// Директива continue - це "полегшена версія" break
// Вона не зупиняє весь цикл.
// Натомість вона зупиняє поточну ітерацію і починає виконання циклу
// спочатку з наступної ітерації(якщо умова циклу досі вірна)
//
// Її зручно використовувати коли закінчили з поточною операцією
// і хочемо продовжити з наступної
//
// Цикл нижче використовує continue щоб вивести лише непарні значення
/*
    for (let i = 0; i < 10; i++) {
      // якщо умова справджується - починаємо з наступної ітерації
      if (i % 2 === 0) continue;
      console.log(i); // 1, 3, 5, 7, 9
    }
*/
// ==============================================================
//                   Області видимості
// Область видимості змінних(variable scope) - доступність змінних
// у певному місці коду. Є кілька областей видимості:
// • Глобальна
// • Блокова
// • Eval
// • Функції
//
// Глобальна область видимості використовується за замовчуванням.
// Усі і всі мають доступ до змінних оголошених у ній.
// Змінні оголошені у глобальній області видимості вразливі,
// оскільки може змінити будь-яку ділянку коду.
//
// Будь-яка конструкція, що використовує фігурні дужки {}
// (умови, цикли, функції тощо) створює нову локальну область видимості,
// і змінні, оголошені в цій області видимості, використовуючи
// let або const, не доступні поза цим блоком.
// ==============================================================
// ==============================================================
//                         Функції
// Функції - це основні "будівельні блоки" програми.
// Вони дозволяють робити однакові дії багато разів без повторення коду
//
// Функції можна уявити як чорну скриньку, вони отримують
// щось на вході(дані) і віддають щось на виході(результат виконання всередині функції)
//
// Функції є інструментом структурування великих програм,
// зменшення повторень та ізолювання коду.
// --------------------------------------------------------------
//                        Параметри
// Ми можемо передати в функцію довільні дані використовуючи Параметри
// В наступному прикладі функція має 2 параметри: from i text
/*
    function showMessage(from, text) {
      console.log(`${from} + ${text}`);
    }

    showMessage('Anna', 'Hey!'); // Anna + Hey!
*/
// Якщо викликати функцію без аргументів, тоді відпоідні значення стануть undefined
// --------------------------------------------------------------
//                      Function Declaration
// Function Declaration(оголошення функції) - починається з ключового слова
// function, за яким може йти необов`язкове ім`я функції.
//
// У круглих дужках йдуть параметри - перерахування даних, які функція
// буде отримувати ззовні. Параметрів може бути кілька
// або взагалі не бути. Тоді записуються порожні круглі дужки.
//
// Далі йде тіло функції укладене у фігурні дужки {},
// що містить інструкції, які необхідно виконати при виклику функції.
// Тіло функції завжди укладають в фігурні дужки, навіть якщо воно складається з
// однієї інструкції.
//
// Ім'я функції - дієслово, що починається з маленької літери,
// що відповідає на питання "Що зробити?"
//
// Наприклад: findSmallestNumber, fetchUserInfo, validateInput
//
// Оператор return визначає значення, що повертається.
// Коли інтерпретатор доходить до return, він відразу ж виходить з функції,
// і повертає це значення в місце коду, де функція була викликана.
//
// Оператор return без виразу повертає значення undefined
// При відсутності обороту в тілі функції вона все одно поверне
// значення undefined.
//
// Потім, коли необхідно, функція викликається за допомогою імені та
// круглих дужок (), усередині яких можуть бути передані аругменти.
//
// Аргументи - цей термін використовується під час виклику функції,
// коли ми передаємо якісь значення в функцію
//
// Параметри - цей термін використовується при оголошенні функції,
// це ті локальні змінні всередині функції, в які будуть записані
// значення аргументів під час її виклику.
//
// В JavaScript важливий порядок оголшення параметрів функції
// Немає ніякого іншого механізму пояснити інтерпретатору як значення
// аргументів функції під час виклику пов'язані з параметрами.
//
// Порядок оголошення параметрів відповідає порядку передачі аргументів
// під час виклику функції: значення першого аргументу буде присвоєно першому параметру,
// другого аргументу - другому параметру і так далі.
// Якщо параметрів буде менше ніж аргументів, то параметрам без значень буде присвоєно undefined
// --------------------------------------------------------------
//                     Functional expression
// Functional expression(функціональний вираз) - звичайне оголошення
// змінної, значення якої буде функцією.
//
// Оголосимо змінну add і надамо їй функцію, що приймає 3 значення
// і повертає результат складання цих значень
/*
    const add = function (a, b, c) {
      return a + b + c;
    };
*/
// --------------------------------------------------------------
//                       Arrow functions
// Arrow functions(стрілкові функції) - ще один простіший та коротший синтаксис
// для створення функції, який часто доцільніше використовувати замість Функціонального виразу
// Виглядають вони так:
/*
    let func = (arg1, arg2, ..., argN) => expression;
*/
// Цей код створить функцію func з аргументами arg1...argN, що обчислює expression
// з правого боку (використовуючи ці аргументи) та повертає його результат.
// Іншими словами, це те ж саме, що і:
/*
    let func = function(arg1,arg2,...,argN){
      return expression;
    }
*/
// --------------------------------------------------------------
//          Callback functions(функції зворотнього виклику)