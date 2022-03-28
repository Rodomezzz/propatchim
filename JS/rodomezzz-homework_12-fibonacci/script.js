"use strict";


function makeFibonacciFunction (){

    let a = 0;
    let b = 1;
    let c= 1;

     return function getNextFibonacciNumber() {

            c = a+b;
            a = b;
            b = c;
         console.log(c);
    }

}

let getFibNmb = makeFibonacciFunction();
getFibNmb();
getFibNmb();
getFibNmb();
getFibNmb();
getFibNmb();
getFibNmb();
getFibNmb();
getFibNmb();
getFibNmb();


