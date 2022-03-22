"use strict";
let firstOperand = prompt('Введите число');
console.log(firstOperand, typeof firstOperand);
while (firstOperand === null || firstOperand ==='' || isNaN(firstOperand)){
	alert ('Введите число правильно');
	firstOperand = prompt('Введите число');
}

let operator = prompt('Введите один из операторов: +, -, *, /');
console.log(operator, typeof operator);

while (operator === null || operator ==='' || operator !== '+' &&
operator !== '-' && operator !== '*' && operator !== '/') {
	alert ('Введите оператор правильно');
	operator = prompt('Введите один из операторов: +, -, *, /');
}

let secondOperand = prompt('Введите число');
console.log(secondOperand, typeof secondOperand);
while (secondOperand === null || secondOperand ==='' || isNaN(secondOperand)){
	alert ('Необходимо ввести число');
	secondOperand = prompt('Введите число');
}
//не понял почему этот код получился невалидный
/*while (secondOperand === 0 &&  operator === '/'){
	alert ('На ноль делить нельзя (хотя это и JS, но калькулятор мой)');
	secondOperand=prompt('Введите число');
}*/

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




