//SCOPE

//What is scope in JavaScript MDN? 
//The current context of execution. The context in which values and expressions are "visible" or can be referenced. 
//If a variable or other expression is not "in the current scope," then it is unavailable for use
//were we have access to over variable

//Three types of scope

//1.global 2.function 3.block

//Global Scope

// const name = 'jhone'

// const logName = () => {
//   console.log(name)
// }
// logName()

//Function Scope

// const logName = () => {

//     let age=20; //form Function or Local Scope

//   console.log("akash"+age)
// }
// logName(age)

//block scope

//Example
//=> When you use loop
//=> When you use coditional statement

// (function run(){
//     for(var i=0; i<5; i++){
//         setTimeout(function logValue(){
//             console.log(i);         //5
//         }, 100);
//     }
// })(); //IIFE

//using Let

// (function run(){
//     for(let i=0; i<5; i++){
//       setTimeout(function log(){
//         console.log(i); //0 1 2 3 4
//       }, 100);
//     }
//   })();

// Lexical Scope
//=>Lexical scope is the ability of the inner function to access the outer scope in which it is defined.

//Hoisting in JavaScript
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

//Example

// console.log(age)
// var age = 20

// function hoist() {
//   console.log(message)

//   var message = 'test'
// }
// hoist()

// hoist()
// function hoist() {
//   var message = 'test'
//   console.log(message)
// }

// hoist()
// const hoist = () => {
//   var message = 'test'
//   console.log(message)
// }
//Give reference Error

//Closures in JavaScript

//a closure gives you access to an outer function's scope from an inner function.

// const outer = () => {
//   const outerVar = 'Hello!'
//   function inner() {
//     const innerVar = 'Hi!'
//     console.log(outerVar, innerVar)
//   }
//   return inner
// }

// outer()() //IIFE

// const init = () => {
//   const hobby = 'Learning JS'
//   const displayHobby = () => {
//     console.log(hobby)
//   }
//   displayHobby()
// }
// init()

// global scope
// var e = 10;
// function sum(a){
//   return function(b){
//     return function(c){
//       // outer functions scope
//       return function(d){
//         // local scope
//         return a + b + c + d + e;
//       }
//     }
//   }
// }

// console.log(sum(1)(2)(3)(4)); // log 20