"use strict";

// let firstNumber=prompt('Введите число', [213]);
//
// console.log('Ты ввёл только что число' + ' ' + firstNumber+ ' ' + ', какой молодец!');
//
// console.log(`Ты ввёл в строку ${firstNumber}`);
//
// alert('Ты ввёл только что число' + ' ' + firstNumber+ ' ' + ', какой молодец!');
//
// let whoIsBoss = confirm('ТЫ БОСС?');
//
// alert(whoIsBoss);
//
// let whatIsYourName = prompt('Как Тебя зовут?', ['Хуан']);
//
// alert('Какое прекрасное имя' + ' ' + whatIsYourName);

// let value=true;
// alert(typeof value);
//
// value=String('pipec');
//
// console.log(typeof value);
// alert(value);

const fNumber = prompt('Введите первое число');

const firstNumber = number(fNumber);
if(NaN){
	 alert('Ты чего число не ввёл?!')
} ;

const sighn = prompt('Введите оператор:+  -  *  /');


const sNumber = prompt('Введите второе число');
const secondNumer=number(sNumber);
if(NaN) {  alert('Ты чего число не ввёл?!')};

let mathResult = firstNumber+sighn+secondNumer;
alert(mathResult);



