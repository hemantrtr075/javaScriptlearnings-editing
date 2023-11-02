"use strict";
// undefined 
// null 

// let firstName ;
// console.log(firstName); // undefined
// const firstName;
// console.log(firstName); // Missing initializer 
// in const declaration , error

// let firstName = "sanju";
// console.log(typeof firstName , firstName);//string sanju

//let myVariable = null;
//console.log(typeof myVariable, myVariable);// object null
//console.log(typeof null);   // object
// ^ this is a bug , error of javascrpt

//BigInt
let myNumber = BigInt(12);
let sameMynumber = 123n;
// console.log(myNumber);
// console.log(Number.MAX_SAFE_INTEGER);
console.log(myNumber + sameMynumber);

