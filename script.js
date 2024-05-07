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
console.group('возведение в степень в JS 26')
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
console.log('ПЕРЕСМОТРЕТЬ ТЕМУ ПО ДРУГИМ ИСТОЧНИКАМ!!!');
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
























































































console.groupEnd();
console.groupEnd();


























console.groupEnd();