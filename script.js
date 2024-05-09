'use  strict';
console.group('Основной учебник JS');
console.group('Основы 1-67');
console.group('Введение в JS 1');
//JS оживляет Web-страницы
console.groupEnd();
console.group('Запуск JS 2')
//тег script в HTML можно размещать в любом месте страницы
console.groupEnd();
console.group('Первая программа на JS 3')
// alert('06.05.2024 начинаю повторять JS с самого начала по структуре данной книги')
console.groupEnd();
console.group('Разбор кода первой программы 4')
// alert() - это функция, по имени alert, в () пишем параметры
console.groupEnd();
console.group('Дальнейшие примеры 5')
// alert('Привет, Мир!')
console.groupEnd();
console.group('Подключение файла со скриптами 6')
// <script src="./script.js"></script>
console.groupEnd();
console.group('Несколько файлов со скриптами JS 7')
// без проблем, сколько нужно, столько и подключай
console.groupEnd();
console.group('Особенности тега script в JS 8')
// в теге script либо пишем код, либо подключаем внешний файл, по другому не работает
console.groupEnd();
console.group('Кеширование JS файлов браузером 9')
// браузер кеширует (сохраняет) подключенные JS файлы для повышения скорости загрузки сайта
//  <script src="./script.js?v=1"></script>, "?v=1" затем меняем цифру
console.groupEnd();
console.group('Строгий режим 10')
// 'use strict';
// alert('Text')
console.groupEnd();
console.group('Комментарии в JS 11')
// alert('Привет, мир!') // однострочный комментарий
/*
многострочный комментарий
*/
// alert('Привет, мир!')
console.groupEnd();
console.group('Переменные в JS 12')
// переменная - это контейнер в котором мы можем хранить какие либо данные
console.groupEnd();
console.group('Использование переменных 13')
// let a = 3;
// alert(a)
// let a;
// a = 3;
// alert(a)
// let num;
// num = 123;
// alert(num)
console.groupEnd();
console.group('Обьявление нескольких переменных в JS 14')
// let a = 1;
// let b = 2;
// let c = 3;
// let a = 1, b = 2, c = 3;
// let a, b , c;
// a = 1;
// b = 2;
// c = 3;
console.groupEnd();
console.group('Изменение значений переменных 15')
// let a;
// a = 1;
// alert(a)
// a = 2;
// alert(a)
// let a;
// a = 10;
// alert(a)
// a = 20;
// alert(a)
console.groupEnd();
console.group('Несколько let для одной переменной 16')
// let a = 1;
// alert(a)
// let a = 2;
// alert(a)
// let a = 1;
// alert(a)
// let b = 2;
// alert(b)
// let a;
// a = 1;
// alert(a)
// a = 2;
// alert(a)
console.groupEnd();
console.group('Математические операции с числами в JS 17')
// let a = 1 + 2;
// alert(a)
// let b = 3 - 2;
// alert(b)
// let c = 3 * 2
// alert(c)
// let d = 4 / 2
// alert(d)
// let a = 1 + 2 + 3;
// alert(a)
console.groupEnd();
console.group('Математические операции с переменными в JS 18')
// let a = 1;
// let b = 2;
// alert(a + b)
// let a = 1;
// let b = 2
// let c = a + b
// alert(c)
// let a = 10
// let b = 2
// alert(a + b)
// alert(a - b)
// alert(a % b)
// let c = 10
// let d = 5
// let result = c + d
// alert(result)
// let a = 1;
// let b = 2;
// let c = 3;
// let result = a + b + c
// alert(result)
// let a = 10
// let b = 5
// let c = a - b
// let d = 7
// let result = c + d
// alert(result)
console.groupEnd();
console.group('Приоритет математических операций в JS 19')
// let a = 2 * 2 + 3
// alert(a)
// let a = 5 + 5 * 3
// alert(a)
// let a = 5 + 5 * 3 + 3
// alert(a)
// let a = 8 / 2 + 2
// alert(a)
// let a = 8 + 2 / 2
// alert(a)
console.groupEnd();
console.group('Равный приоритет математических операций в JS 20')
// let a = 8 / 2 * 4
// alert(a)
// let a = 8 * 2 / 4
// alert(a)
// let a = 16 / 2 / 2 / 2
// alert(a)
// let a = 8 / 2 * 2
// alert(a)
// let a = 8 * 4 / 2 / 2
// alert(a)
console.groupEnd();
console.group('Группирующие скобки в JS 21')
// let a = 2 * (2 + 3)
// alert(a)
// let a = 2 * (2 + 4 * (3 + 1))
// alert(a)
// let a = (2 * 2) + 3
// alert(a)
// let a = (8 / 2) * 4
// alert(a)
// let a = (2 + 3) * (2 + 3)
// alert(a)
// let a = (2 + 3) * 2 + 3
// alert(a)
// let a = 2 * (2 + 4 * (3 + 1))
// alert(a)
// let a = 2 * 8 / 4
// alert(a)
// let a = (2 * 8) / 4
// alert(a)
// let a = 2 * (8 / 4)
// alert(a)
console.groupEnd();
console.group('Дроби в JS 22')
// let a = 0.5
// alert(a)
// let a = 0.5 + 0.5
// alert(a)
// let a = 1.5
// let b = 0.75
// let result = a + b
// alert(result)
console.groupEnd();
console.group('Отрицательные числа в JS 23')
// let a = -1
// alert(a)
// let a = 1
// let b = -a
// alert(b)
// let a = 1;
// alert(-a)
// let a = -100
// alert(a)
// let b = 200
// alert(-b)
console.groupEnd();
console.group('Плюс перед числами в JS 24')
// let a = +1
// alert(a)
console.groupEnd();
console.group('Остаток от деления в JS 25')
// alert(10 % 3)
// alert(10 % 2)
// let a = 10
// let b = 3
// alert(a % b)
// let a = 13
// let b = 5
// alert(a % b)
console.groupEnd();
console.group('Возведение в степень в JS 26')
// alert(10 ** 3)
// let a = 10
// alert(a ** 3)
// let a = 10
// let b = 3
// alert (a ** b)
// let a = 2
// let b = 10
// alert(a ** b)
console.groupEnd();
console.group('Приоритет возведения в степень 27')
// alert(2 * 2 ** 3)
// let a = 3 * 2 ** 3
// alert(a)
// let a = (3 * 2) ** 3
// alert(a)
// let a = 3 * 2 **(3+ 1)
// alert(a)
// let a = 2 ** 3 * 3
// alert(a)
// let a = 3 * 2 ** 3 * 3
// alert(a)
console.groupEnd();
console.group('Строки в JS 28');
// let str = 'abc';
// alert(str)
// let strName = 'Dima'
// let strSurname = 'Ruban'
// alert(strName + ' ' + strSurname)
console.groupEnd();
console.group('Сложение строк в JS 29')
// let str = 'abc' + 'def'
// alert(str)
// let str1 = 'abc'
// let str2 = 'def'
// alert(str1 + str2)
// let str1 = 'abc'
// let str2 = 'def'
// alert(str1 + '!!!' + str2)
// alert(str1 + ' ' + str2)
// let str = 'abc'
// alert(str + '' + 'def')
// alert(str + ' def')
// let str = '!!!'
// alert(str)
// let str = 'java'
// let str2 = 'script'
// alert(str + str2)
// let str = 'hello'
// let str2 = 'word'
// alert(str + ' ' + str2)
console.groupEnd();
console.group('Длина строки в JS 30')
// let str = 'abcde'
// alert(str.length)
// alert('abcdefg'.length)
// alert('abvc jfh f'.length)
// let str = 'Я повторяю javaScript с самого начала'
// alert(str.length)
console.groupEnd();
console.group('Шаблонные строки в JS 31')
// let str = `abc`
// alert(str)
// let str = 'xxx'
// let txt = 'aaa ' + str + ' bbb'
// let txt = `aaa ${str} bbb`
// alert(txt);
// let str1 = 'xxx'
// let str2 = 'yyy'
// let txt = `aaa ${str1} bbb ${str2} ccc`
// alert(txt)
console.groupEnd();
console.group('Многострочность 32')
// let str = `abc
// def`
// alert(str)
// let str = `a
// b
// c`
// alert(str)
console.groupEnd();
console.group('Специальные значения в JS 33')
// undefined
// null
// true
// false
// NaN
// Infinity
// -Infinity
console.groupEnd();
console.group('Значение undefined 34')
// undefined - неопределенность
// let a;
// alert(a)
// let a = undefined;
// alert(a)
// let b;
// alert(b)
console.groupEnd();
console.group('Значение null 35')
// let a = null;
// alert(a)
// let b = null
// alert(b)
console.groupEnd();
console.group('Значение true and false 36')
// let a = true;
// alert(a)
// let b = false
// alert(b)
console.groupEnd();
console.group('Значение NaN 37')
//Not - A  - Number (не
// alert(NaN + 1)
// let str = 'aaa'
// let str2 = 'bbb'
// alert(str * str2)
console.groupEnd();
console.group('Infinity и -Infinity в JS 38')
// alert(-1 / 0)
// let a = 10 / 0
// alert(a)
// let a = -10 / 0
// alert(a)
console.groupEnd()
console.group('Работа с консолью в JS 39')
// console.log(123)
// let num = 123
// console.log(num);
// let num = 123
// let num2 = 456
// console.log(num);
// console.log(num2);
// let str = '12345'
// console.log(str);
// let num1 = 20
// let num2 = 30
// let num3 = 40
// console.log(num1);
// console.log(num2);
// console.log(num3);
console.groupEnd()
console.group('Тип данных в консоли JS 40')
// console.log(123); // синий цвет
// console.log('123'); // просто белый цвет
// console.log('123');
// console.log(123);
// console.log(BigInt(2));
// console.log(Boolean(true));
// console.log(Boolean(false));
// console.log(Object({}));
// console.log(Array([]));
// console.log(function() {});
// console.log(Symbol(7));
// console.log(null);
// console.log(undefined);
console.groupEnd()
console.group('Ошибки в консоли JS 41')
// alert(qqq)
// let c = 0;
// alert(c)
console.groupEnd()
console.group('Константы в JS 42')
// const pi = 3.14
// console.log(pi);
// const PI = 3.14
// PI = 3
// const PI = 3.14
// let radius = 12
// let l = 2 * PI * radius
// console.log(l);
console.groupEnd()
console.group('Автоматическое преобразование типов данных 43')
// let a = '123'
// alert('2' * '3')
// alert('2' * '12a')
// let a = '1' + '2'
// alert(a)
// let a = 1 + '2'
// alert(a)
// let a = '1' + (2 + 3)
// alert(a)
// let a = '1' + 2 + 3
// alert(a)
// let a = 2 + 3 + '1'
// alert(a)
// alert('5' + '2')
// alert('5' + 2)
// alert(5 + '2')
// alert(5 + 2)
// alert('5' * '2')
// alert('5' - '2')
// alert('5' / '2')
// alert('5' % '2')
// alert('5s' * '2')
// alert('5s' + '2')
// alert((-'5') + (-'2'))
// alert('5' * 1 + '2' * 1)
// alert('5' * '1' + '2' * '1')
// alert('' + 3 + 1)
console.groupEnd()
console.group('Преобразование к числу вJS 44')
// let a = '2'
// let b = '3'
// alert(a + b)
// alert(Number(a) + Number(b))
// alert(+a + +b)
// let a = Number('2')
// let b = Number('3')
// alert(a + b)
// let a = '10'
// let b = '20'
// alert(Number(a) + Number(b))
// alert(+a + +b)
// alert(Number('2') + Number('3'))
// alert(2 + Number('3'))
// alert('2' + Number('3'))
console.groupEnd()
console.group('Сокращенное преобразование к числу в JS 45')
// let a = +'2'
// let b = +'3'
// alert(a + b)
// let a = '2'
// let b = +a
// let a = '2'
// let b = '3'
// alert(+a + +b)
// let a = '2'
// let b = '3'
// alert(+a + +b)
console.groupEnd()
console.group('Преобразование некорректных чисел в JS 46')
// alert(Number('2s'))
// alert(+'2s')
console.groupEnd()
console.group('Выделение чисел в JS 47')
// let num = parseInt('12px')
// alert(num)
// let num = parseInt('12.6px')
// alert(num)
// let num = parseFloat('12.3px')
// alert(num)
// let num = parseFloat('11px')
// alert(num)
// let pixels = '5px'
// let pixels2 = '6px'
// console.log(parseInt(pixels) + parseInt(pixels2) + 'px');
// let pixels = '5.5px'
// let pixels2 = '6.25px'
// console.log(parseFloat(pixels) + parseFloat(pixels2) + 'px');
console.groupEnd()
console.group('Преобразование к строке в JS 48')
// let str = String(123)
// let num1 = 1
// let num2 = 2
// alert(String(num1) + String(num2))
// let num1 = '123'
// let num2 = '123'
// console.log(String(num1) + String(num2));
console.groupEnd()
console.group('Применение преобразования к строкам в JS 49')
// let num = 12345
// alert(String(num).length)
// let num = 123456789
// alert(String(num).length)
// let num1 = 12345
// let num2 = 67891
// console.log(String(num1).length + String(num2).length);
console.groupEnd()
console.group('Преобразование логического типа в JS 50')
// alert(String(true))
// alert(String(false))
// alert('a' + true)
// alert(Number(true))
// alert(Number(false))
// console.log(true + 1);
// console.log(true + true);
// alert(true + 3)
// alert(true + true)
// alert(true - true)
// alert(true + false)
// alert('1' + true)
// alert(String(true) + 1)
// alert(String(true) + Number(true))
console.groupEnd()
console.group('Преобразование к логическому типу в JS 51')
// console.log(Boolean(0));
// console.log(Boolean(-0));
// console.log(Boolean(+0));
// console.log(Boolean(null));
// console.log(Boolean(false));
// console.log(Boolean(NaN));
// console.log(Boolean(undefined));
// console.log(Boolean(''));
// console.log(Boolean(-1));
// console.log(Boolean(-Infinity));
// console.log(Boolean('0'));
// console.log(Boolean('false'));
// console.log(Boolean('NaN'));
// console.log(Boolean('null'));
// console.log(Boolean('undefined'));
// console.log(Boolean(3));
// console.log(Boolean(0));
// console.log(Boolean(-1));
// console.log(Boolean(-0));
// console.log(Boolean(+0));
// console.log(Boolean('abc'));
// console.log(Boolean(''));
// console.log(Boolean('0'));
// console.log(Boolean(true));
// console.log(Boolean(false));
// console.log(Boolean('true'));
// console.log(Boolean('false'));
// console.log(Boolean(null));
// console.log(Boolean('null'));
// console.log(Boolean(undefined));
// console.log(Boolean('undefined'));
// console.log(Boolean(NaN));
// console.log(Boolean('NaN'));
// console.log(Boolean(3 * 'abc'));
// console.log(Boolean(Infinity));
// console.log(Boolean(1/0));
console.groupEnd()
console.group('Получение символов строки на JS 52')
// let str = 'abcde'
// alert(str[0])
// alert(str[1])
// alert(str[2])
// let num = 3
// alert(str[num])
// let str = 'abcde'
// console.log(str[0]);
// console.log(str[2]);
// console.log(str[4]);
// let str = 'abcde'
// console.log(str[4] + str[3] + str[2] + str[1] + str[0]);
// let str = 'abcde'
// let num = 2
// console.log(str[num]);
console.groupEnd()
console.group('Неизменяемость строк в JS 53')
// 'use strict'
// let str = 'abcde'
// str[2] = 'w'
// console.log(str);
console.groupEnd()
console.group('Последний символ строки в JS 54')
// let str = 'abcdejgjjjg'
// let last = str.length - 1
// console.log(last);
// let str = 'abcde'
// let last = str.length - 1
// alert(str[last])
// let str = 'Я люблю JS!'
// let last = str.length -1
// let last2 = str.length -2
// let last3 = str.length -3
// console.log(str[last]);
// console.log(str[last2]);
// console.log(str[last3]);
console.groupEnd()
console.group('Строки с цифрами в JS 55')
// let test = '12345'
// alert(test[0] + test[1])
// alert(Number(test[0]) + Number(test[1]))
// let str = '12345'
// console.log(Number(str[0]) + Number(str[1]) + Number(str[2]) + Number(str[3]) + Number(str[4]) );
console.groupEnd()
console.group('Обращение к цифрам числа JS 56')
// let test = String(12345)
// alert(Number(test[0]) + Number(test[1]))
// alert(Number(test[1]) * Number(test[2]))
// let num = 12345
// num = String(num)
// console.log(Number(num[0]) + Number(num[1]) + Number(num[2]) + Number(num[3]) + Number(num[4]));
// let num = 12345
// num = String(num)
// console.log(num[0] * num[1] * num[2] * num[3] * num[4]);
// let num = 12345
// num = String(num)
// let num2 = num[4] + num[3] + num[2] + num[1] + num[0]
// console.log(num2);
console.groupEnd()
console.group('Операции для изменения переменной в JS 57')
// let num = 1
// num = num + 2
// alert(num)
// let num = 1
// num = num + 1
// num = num + 1
// alert(num)
// let num = 1
// num = num + 2
// num = num + 3
// alert(num)
console.groupEnd()
console.group('Сокращенные операции в JS 58')
// let num = 1;
// num += 3
// console.log(num);
// let num = 2
// num -= 3
// console.log(num);
// let num = 2
// num *=3
// console.log(num);
// let num = 2
// num /= 3
// console.log(num);
// let num = 47
// num += 7
// num -= 18
// num *= 10
// num /= 15
// alert(num)
console.groupEnd()
console.group('Операция инкремента и декремента в JS 59')
// let num = 0
// num = num + 1
// alert(num)
// let num = 0
// num += 1
// alert(num)
// let num = 0
// num++
// console.log(num);
// let num = 0
// num--
// console.log(num);
// let num =10
// num++
// console.log(num);
// num++
// console.log(num);
// num--
// console.log(num);
console.groupEnd()
console.group('Префиксный и постфиксный тип в JS 60') 
//TODO! ПЕРЕСМОТРЕТЬ ТЕМУ ПО ДРУГИМ ИСТОЧНИКАМ!!!
console.log('GPT');
// let num = 0
// alert(num++)
// alert(num)
// alert(++num)
// let num = 0
// let num2 = ++num1
// alert(num2)
// alert(num1)
// ++num
// num++
// alert(num)
// let num = 3
// alert(num--)
// let num1 = 3
// let num2 = num1--
// console.log(num1);
// console.log(num2);
// let num1 = 3
// num1++
// let num2 = num1--
// alert(num1++)
// alert(--num2)
// TODO! GPT
// let x = 5
// let y = ++x
// console.log(x);
// console.log(y);
// let a = 10
// let b = a++
// console.log(a);
// console.log(b);
// используется втч со строками
// let str = 'abc'
// let result = ++str
// console.log(str);
// console.log(result);
console.groupEnd()
console.group('Неточные вычисления в JS 61')
// let a = 0.1 + 0.2
// console.log(+a.toFixed(2));
// console.log(+(0.1 * 0.2).toFixed(2));
// console.log(+(0.3 - 0.1).toFixed(2));
console.groupEnd()
console.group('Функция prompt в JS 62')
// prompt('Ваше имя?')
// let name = prompt('Ваше имя?')
// alert('Ваше имя: ' + name)
// alert('Ваше имя: ' + prompt('Ваше имя?'))
// let age = prompt('Сколько Вам лет?')
// alert('Вам: ' + age + ' лет')
console.groupEnd()
console.group('Проблема с типами в функции prompt в JS 63')
// let num1 = prompt('Введите первое число:')
// let num2 = prompt('Введите второе число:')
// console.log(+num1 + +num2);
// let square = prompt('Сторона квадрата?')
// let s = square * square
// alert('Площать квадрата: ' + s)
// let num1 = prompt('Сторона прямоугольника 1: ?')
// let num2 = prompt('Сторона прямоугольника 2: ?')
// alert((2 * +num1) + (2 * +num2))
console.groupEnd()
console.group('Вывод текста в документ JS 64')
// document.write(123)
// document.write('text')
// document.write('<b>text</b>')
// let str = 'stroka text'
// document.write(str)
// document.write('<b>' + str + '</b>')
// document.write('text1<br>')
// document.write('text2<br>')
// document.write('text3<br>')
// document.write('text')
// document.write('<br>')
// document.write('text')
// let str = 'text'
// document.write('<i>' + str + '</i>')
// let str = '12345'
// document.write(str[0])
// document.write('<br>')
// document.write(str[1])
// document.write('<br>')
// document.write(str[2])
// document.write('<br>')
// document.write(str[3])
// document.write('<br>')
// document.write(str[4])
console.groupEnd()
console.group('Поиск ошибок в коде 65')
// let num1 = 1
// let num2 = 2
// console.log('сумма: ' + (num1 + num2));
// let a = 1
// let b = 2
// let c = null
// console.log(a + b + c);
// let num = '123'
// let sum = +num[0] + +num[1] + +num[2]
// console.log(sum);
// let num = 123
// num = String(num)
// console.log(num[0]);
// let a = 0
// console.log(++a);
// let num = 123
// num = String(num)
// console.log(num.length);
// let a = 24 * 60 * 60
// console.log(a);
// let num = 123
// let str = String(num)
// console.log(str.length);
// let num = 123
// let str = String(num)
// console.log(str[str.length - 1]);
// let num = 123
// let str = String(num)
// console.log(str.length);
// let num = 123
// let str = String(num)
// console.log(str[str.length -1]);
// let a = '123'
// let b = '456'
// let s = Number(a) + Number(b)
// console.log(s);
// let aaa = 1
// let bbb = 2
// let ccc = 3
// console.log( (aaa + bbb + ccc));
console.groupEnd()
console.group('Практика на операции в JS 66')
// alert(24 * 60 * 60)
// alert(30 * 24 * 60 * 60)
// alert(24 * 60)
// alert(365 * 24 * 60)
// alert(1024 * 1024)
// alert(1024 * 1024 * 1024)
// alert((1024 * 1024 * 1024 * 10) * 10)
// alert(10224 * 1024 * 1024 * 1024)
// alert(1024 * 1024)
console.groupEnd()
console.group('Практика на формулы в JS 67')
// let r = 10;
// const PI = 3.14;
// let s = PI * r  ** 2
// alert(s)
// let a = 5;
// let s = 5 * 5;
// alert(s)
// let a = 5
// let b = 10
// let s = a * b
// alert(s)
// let a = 5
// let b = 10
// let p = 2 * a + 2 * b
// alert(p)
// let tc = 36.6
// let faringeit = (9 / 5) * tc + 32
// alert(faringeit)
// let tf = 97.88
// let tc = (5 / 9) * (tf - 32)
// alert(tc)
console.groupEnd()
console.groupEnd();
console.group('Массивы в JS 68 - 79')
console.group('Введение в массива 68')
//Массив это специальный тип данных, который представляет собой переменную, в которой в упорядоченном виде можно хранить целый набор каких либо значений
// let arr = [];
// console.log(arr);
// alert(arr)
// let arr = [
//     'a',
//     'b',
//     'c'
// ]
// let arr2 = [
//     1,
//     2,
//     3
// ]
// let arr3 = [
//     1,
//     2,
//     'a',
//     'b',
//     null,
//     true,
//     false
// ]
// console.log(arr3);
// alert(arr3)
// let arr = [1, 2, 3, 4, 5, 6]
// console.log(arr);
// alert(arr)
// let str = [
//     'hello', 'world', 'computer', 'Dzmitry', 12, '12'
// ]
// console.log(str);
// alert(str)
console.groupEnd()
console.group('Получение элементов массивов в JS 69')
// let arr = ['a', 'b', 'c']
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// let arrNumber = [1, 2, 3]
// console.log(arrNumber[0]);
// console.log(arrNumber[1]);
// console.log(arrNumber[2]);
// let arr = [1, 2, 3]
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// let arr = [1, 2, 3]
// console.log(arr[0] + arr[1] + arr[2]);
// let arr = ['a', 'b', 'c', 'd']
// console.log(arr[0] + '+' + arr[1] + '+' + arr[2] + '+' + arr[3]);
console.groupEnd()
console.group('Длина массива в JS 70')
// let arr = ['a', 'b', 'c']
// console.log(arr.length);
// let arr = ['a', 'b', 'c']
// console.log(arr[arr.length - 1]);
// let arr = ['a', null, Infinity, ['1', 6]]
// alert(arr.length)
// console.log(arr[arr.length-1]);
console.groupEnd()
console.group('Изменение элементов массива в JS 71')
//элементы массивов можно изменять
// let arr = ['a', 'b', 'c']
// arr[0] = '!'
// console.log(arr);
// let arr = ['a', 'b', 'c']
// console.log(arr);
// arr[0] = 1
// arr[1] = 2
// arr[2] = 3
// arr[3] = 5
// console.log(arr);
console.groupEnd()
console.group('Перезапись элементов массива в JS 72')
// let arr = ['a', 'b', 'c']
// arr[0] = arr[0] + '!'
// arr[1] = arr[1] + '!'
// arr[2] = arr[2] + '!'
// arr[0] += '!'
// arr[1] += '!'
// arr[2] += '!'
// console.log(arr);
// let num = [1, 1, 1, 1, 1, 1]
// num[0] += 3
// num[1] += 3
// num[2] += 3
// num[3] += 3
// num[4] += 3
// num[5] += 3
// num[6] += 3
// console.log(num);
console.groupEnd()
console.group('Инкремент и декремент элементов массива в JS 73')
// let arr = [1, 2, 3, 4]
// arr[0]++
// ++arr[1]
// arr[2]--
// --arr[3]
// console.log(arr);
// let arr = [1, 2, 3]
// ++arr[0]
// ++arr[1]
// ++arr[2]
// console.log(arr);
console.groupEnd()
console.group('Добавление элементов по ключам JS 74')
// let arr = []
// arr[0] = 'a'
// arr[1] = 'b'
// arr[2] = 'c'
// console.log(arr);
// let arr = ['a', 'b', 'c']
// arr[3] = 'd'
// console.log(arr);
// let arr = []
// arr[0] = 1
// arr[1] = 2
// arr[2] = 3
// console.log(arr);
// let arr = [1, 2, 3]
// arr[3] = 4
// arr[4] = 5
// console.log(arr);
console.groupEnd()
console.group('Разреженные массивы в JS 75')
// let arr = ['a', 'b', 'c']
// arr[4] = '!'
// console.log(arr.length);
// let arr = []
// arr[3] = 'a'
// arr[8] = 'b'
// console.log(arr.length);
console.groupEnd()
console.group('Добавление элементов через push в JS 76')
// let arr = []
// arr.push('a')
// arr.push('b')
// arr.push('c')
// console.log(arr);
// let num = []
// num.push(1)
// num.push(2)
// num.push(3)
// console.log(num);
// let arr = [1, 2, 3]
// arr.push(4)
// arr.push(5)
// console.log(arr);
console.groupEnd()
console.group('Ключи массивов из переменных в JS 77')
// let arr = ['a', 'b', 'c']
// console.log(arr[0]);
// let key = 0
// console.log(arr[key]);
// let arr = ['a', 'b', 'c']
// let key = 2
// console.log(arr[key]);
// let arr = [1, 2, 3, 4, 5]
// let key1 = 1
// let key2 = 2
// console.log(arr[key1] + arr[key2]);
console.groupEnd()
console.group('Оператор delete в массивах в JS 78')
// let arr = ['a', 'b', 'c']
// delete arr[1]
// console.log(arr);
// let arr = ['a', 'b', 'c', 'd', 'e']
// delete arr[0]
// delete arr[1]
// console.log(arr.length);
// После удаления элемента массива, длина не меняется [пусто]
console.groupEnd()
console.group('Поиск ошибок в коде с массивами JS 79')
// let arr = [1, 2, 3, 4, 5]
// console.log(arr[arr.length - 1]);
// let arr = [1, 2, 3, 4, 5]
// console.log(arr[0] + arr[1] + arr[2] + arr[3] + arr[4]);
// let arr = [1, 2, 3, 4, 5]
// console.log(arr.length);
console.groupEnd()
console.groupEnd();
console.group('Объекты в JS 80 - 103')
console.group('Введение в объекты 80')
// let obj = {}
// alert(obj)
// let obj = {
//     1: 'a',
//     2: 'b',
//     3: 'c'
// }
// console.log(obj[1]);
// let obj = {
//     1: 'понедельник',
//     2: 'вторник',
//     3: 'среда',
//     4: 'четверг',
//     5: 'пятница',
//     6: 'суббота',
//     7: 'воскресенье',
// }
// console.log(obj);
console.groupEnd()
console.group('Вывод всего объекта в JS 81')
// let obj = {
//     1: 'a',
//     2: 'b',
//     3: 'c'
// }
// alert(obj)
// let obj = {
//     1: 'январь',
//     2: 'февраль',
//     3: 'март',
//     4: 'апрель',
//     5: 'май',
//     6: 'июнь',
//     7: 'июль',
//     8: 'август',
//     9: 'сенябрь',
//     10: 'октябрь',
//     11: 'ноябрь',
//     12: 'декабрь',
// }
// console.log(obj);
console.groupEnd()
console.group('Строковые ключи объектов в JS 82')
// let obj = {
//     'a': 1,
//     'b': 2,
//     'c': 3
// }
// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// console.log(obj['a']);
// let user = {
//     'name': 'Dzmitry',
//     'surname': 'Ruban',
//     'patronymic': 'Ivanovich'
// }
// console.log(user['surname'] + ' ' + user['name'] + ' ' + user['patronymic']);
console.groupEnd()
console.group('Свойство объектов в JS 83')
// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// console.log(obj.a);
// let date = {
//     year: '2024',
//     month: 'май',
//     day: 'четверг'
// }
// alert(date.year + ' ' + date.month + ' ' + date.day)
console.groupEnd()
console.group('Ограничения на ключи объектов JS 84')
// let obj = {
//     '1key': 'a',
//     'key-2': 'b',
//     key3: 'c'
// }
// console.log(obj['1key']);
// console.log(obj['key-2']);
// console.log(obj['key3']);
// console.log(obj["key-2"]);
// console.log(obj["1key"]);
// let obj = {
//     '1a': 1,
//     'b2': 2,
//     'c-c': 3,
//     'd 4': 4,
//     'e5': 5
// }
// console.log(obj["1a"]);
// console.log(obj.b2);
// console.log(obj["c-c"]);
// console.log(obj["d 4"]);
// console.log(obj.e5);
console.groupEnd()
console.group('Изменение элементов в JS 85')
// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// obj['a'] = '!'
// obj.b = '!'
// console.log(obj);
// let obj = {
//     w: 1,
//     y: 2,
//     z: 3
// }
// console.log(obj.w ** 2);
// console.log(obj.y ** 2);
// console.log(obj.z ** 2);
console.groupEnd()
console.group('Добавление элементов в объекты в JS')
// let obj = {}
// obj['a'] = 1
// obj['b'] = 2
// obj['c'] = 3
// console.log(obj);
let obj = {}
obj['a'] = 1
obj['b'] = 2
obj['c'] = 3
obj['d'] = 4
obj['e'] = 5
obj['f'] = 6
obj['g'] = 7
obj['h'] = 8
console.log(obj);












































































































console.groupEnd();
console.groupEnd();
















































































































console.groupEnd();