"use strict";

const numberConstant=12;
const strictConstant='двенадцать';
const booleanConstant=true;
const someNullConstant=null;
const undefinedConstant=undefined;


let numberVariable=9;
let strictVariable='девять';
strictVariable=true;
let booleanVariable=false;
let someNullVariable=null;
let undefiendVariable=undefined;

console.log(numberConstant+'; '+strictConstant +'; '+booleanConstant + '; '+someNullConstant+'; '+undefinedConstant );



console.log(numberVariable + ' - '+typeof numberVariable + '; '+strictVariable +' - ' + typeof strictVariable+
	'; '+booleanVariable +' - ' + typeof booleanVariable+ '; '+someNullVariable +' - ' + typeof someNullVariable+
	'; '+undefiendVariable +' - ' + typeof undefiendVariable);

//Результатом вызова typeof null является "object". Это официально признанная ошибка в typeof, ведущая начало
// с времён создания JavaScript и сохранённая для совместимости. Конечно, null не является объектом.
// Это специальное значение с отдельным типом.
