// JavaScript is a dynamically typed language, meaning that the
// -type of a variable is determined at runtime based on the value assigned to it.

// primitive datatype

// 7 types:- string , number , boolean , null , undefined , symbol , BigInt
const score = 89;
const scoreValue = 100.3;
const isLoggedIn = true;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);  // op: false

const BigNumber = 792686086743843847n;

console.log(typeof BigNumber); // op: BigInt


// Reference (Non primitive) datatype

// Array , Objects , functions

const arr = [23,89,78];

let myObj = {
    name:"Rajat",
    age: 21
}

const myFunc = function() {
    console.log("Hello World!");
    
}