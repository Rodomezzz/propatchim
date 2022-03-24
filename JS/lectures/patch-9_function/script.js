"use strict";

//function declaration
writeHelloWorldMessagePart2('Rodomezzz hoisting');


function writeHelloWorldMessage (name){
    console.log('Hello world', name)
}

function writeHelloWorldMessagePart2 (name){
    console.log('Hello world', name);
    innerFunction()
    function innerFunction(){
        console.log('inner function');
    }
}

// writeHelloWorldMessage(name);

//function expression
//стрелочная функция сохраняет контекст при вызове, а обычная функция нет

const sayHello = function (name) {
    console.log('Hello', name);
    return 'Hello, ' +name;
}

//function expression arrow

const sayHello2 = () => {
        console.log('Hello moto');
}

//IIFE - Immediately Invoked Function Expression

(function (name){
    console.log('Hello', name);
    return 'Hello, ' +name;
})('Rodomezzz')

const result = (function (name){
    console.log('(console.log(Hello))', name);
    return 'Hello, ' +name;
})('Aleksei')

console.log(result);

//Hoisting - поднятие(всплытие) объявлений вверх. ПОзволяет вызвать функцию, до её объявления