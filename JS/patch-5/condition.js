"use strict";

const string='0.5';
const random=Math.random();

console.log(random);

//reverse значения, что означает: если переменная "тру", то при отрицательном зачении
//будет запрашиваться ,что "при значении не "тру", т.е фолс"
if(!string){
	console.log('фолс');
}   else{
	console.log('тру');
}
//неявный способ приведения к boolean значению
const bool = !!string;


// тернарный оператор

//самый простой вариант с орлом и решкой
// if(random>0.5){
// 	console.log('Орёл');
// } else{
// 	  console.log('Решка');
// }

//ветвление условия
if(string==0.5) {
	console.log('НЕ строгое равенство в действии');
}    else if(random>0.5)    {
	            console.log('Решка');
}         else{
				console.log('Шмешка');
}

console.log('Код, который исполнится в любом случае');

