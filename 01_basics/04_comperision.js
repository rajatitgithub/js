console.log(2 > 1)           // op:- true
console.log(2 < 1)           // op:- false
console.log(2 >= 1)          // op:- true
console.log(2 <= 1)          // op:- false
console.log(2 == 1)          // op:- false
console.log(2 != 1)          // op:- true

console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);       // op:- false
console.log(null == 0);      // op:- false
console.log(null >= 0);      // op:- true
console.log(null != 0);      // op:- true
console.log(null <= 0);      // op:- true


console.log(undefined > 0);       // op:- false
console.log(undefined == 0);      // op:- false
console.log(undefined >= 0);      // op:- false
console.log(undefined != 0);      // op:- true
console.log(undefined <= 0);      // op:- false


// strict check "===" :- isme check karte hai ki datatype same hai ki nahi

console.log("2" === 2);     // op = false
