"use strict";

/*
let random = Math.random();

while (random > 0.5){
	console.log(random);
	random = Math.random();
}

цикл с условиями

while (1 > 2){
	console.log('Hello from while');
}

do{
	console.log('Hello from do...while')
}while (1 > 2)*/


//цик for
// for (let i=0; i < 11; i++){
// 	console.log(i);
// }


let anon=5;
for (; anon < 2005; anon*=3) {
	console.log(anon);

}
console.log('После цикла, ', anon);

let newAnon = 3;
for (;newAnon < 6600; newAnon**=2) {
	console.log(newAnon);
	if (newAnon > 80){
		break;
	}
}

console.log(newAnon);