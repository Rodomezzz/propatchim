"use strict";
// let firstNumber = prompt('Введите число');
// console.log(firstNumber, typeof firstNumber);
// while (firstNumber === false){
// 	alert ('Необходимо ввести число');
// 	firstNumber = prompt('Введите число');
// }

// let firstOperand = Number(firstNumber);
// console.log(firstOperand, typeof firstOperand);
// while (firstOperand === false && !firstOperand && isNaN(firstOperand)) {
// 	alert ('Необходимо ввести число');
// 	firstNumber = prompt('Введите число');
// }

let firstOperand = Number(prompt('Введите число'));
console.log(firstOperand, typeof firstOperand);
while (firstOperand === false && !firstOperand && isNaN(firstOperand)) {
	alert ('Необходимо ввести число');
	firstOperand = Number(prompt('Введите число'));
}

let operator = prompt('Введите один из операторов: +, -, *, /');
console.log(operator, typeof operator);

while (operator === false && operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/') {
	console.log(operator);
	alert ('Необходимо ввести оператор');
	operator = prompt('Введите один из операторов: +, -, *, /');
}


let secondOperand = Number(prompt('Введите число'));
console.log(secondOperand, typeof secondOperand);
while (secondOperand === false && isNaN(secondOperand)) {
	alert ('Необходимо ввести число');
	secondOperand=Number(prompt('Введите число'));
}
while (operator === '/' && secondOperand === 0 ){
	alert ('На ноль делить нельзя (хотя это и JS, но калькулятор мой)');
	secondOperand=Number(prompt('Введите число'));
}
const calculator = function (firstOperand,secondOperand, operator){
	if(operator === '+'){
		return firstOperand + secondOperand;
		}if (operator === '-'){
			return firstOperand - secondOperand;
			}if (operator === '*'){
				return firstOperand * secondOperand;
					}if (operator === '/'){
						return  firstOperand / secondOperand;
						}
}

console.log(calculator(firstOperand, secondOperand, operator));

// let a = null;
// console.log(typeof a);
// let b = Number(a);
// console.log(b, typeof b);
//
// let c = undefined;
// console.log(c, typeof c);
//
// let d = Number(c);
// console.log(d, typeof d);


