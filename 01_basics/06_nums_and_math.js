// +++++++++++++++++++++  Numbers  +++++++++++++++++++++++++++++++

const score = 400
console.log(score);
console.log(typeof score);


const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.8933;
console.log(otherNumber.toPrecision(3));

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++++++++++  Maths  +++++++++++++++++++++++++++++++


console.log(Math);

console.log(Math.abs(-13));         
console.log(Math.round(5.519));
console.log(Math.floor(5.519));
console.log(Math.ceil(5.519));
console.log(Math.sqrt(2).toFixed(3));
console.log(Math.max(5,4,1,9,23));
console.log(Math.min(5,4,1,9,23));

// output
// 13
// 6
// 5
// 6
// 1.414
// 23
// 1

console.log(Math.random());  // output value always come between 0 and 1
// op:- 0.3764441142694084 its is always give different values

console.log(Math.random()*10); // range 0 to 9 in float integer number
console.log((Math.random()*10)+1); // range 1 to 10 in float integer number
console.log(Math.floor(Math.random()*10)+1);  // range 1 to 10 in int integer number

const min = 10;
const max = 20;
console.log(Math.floor((Math.random())*(max - min + 1))+min);
