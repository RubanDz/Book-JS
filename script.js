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
console.group('Строки в JS 28')



console.groupEnd();
console.groupEnd();
console.groupEnd();


























console.groupEnd();