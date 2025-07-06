let score = undefined

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


// 33 => number , "33" => number
// "33abc" => NaN  (Not a Number) , "Name" => NaN , basically String response is NaN
// null => 0
// true = 1 , false = 0
// undefined => NaN

// *******************************************************

let isLoggedIn = undefined;

let booleanLoggedIn = Boolean(isLoggedIn)
// console.log(booleanLoggedIn);

// 1 => true , 0 => false , less than 0 or greater than 0 par output true dega
// "" => false , "Rajat" => true
// null => false  , undefined => false

// *******************************************************

let someNum = true;
let stringNum = String(someNum);
// console.log(stringNum);
// console.log(typeof stringNum);

// 33 => 33 , convert in  string
// null => null
// undefined => undefined
// true => true , false => false

// ****************  operations  **********************************

let num = 13
let negNum = -num

// console.log(negNum);

// Arithmetic operations

// console.log(2+2);   //add 
// console.log(2-7);   //sub 
// console.log(2*2);   //multiply 
// console.log(2**3);  //power
// console.log(2/3);   //devide
// console.log(2%3);   //reminder 

let str1 = "Hello"
let str2 = " Daddy "
// console.log(str1 + str2);

// console.log("1" + 2);       // here it is following ToPremitive concept where first value decide
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");


//  // prefix or postfix increment
// let gameCounter = 100;
// ++gameCounter;
// gameCounter++;
// console.log(gameCounter);

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"


//https://tc39.es/ecma262/#sec-toprimitive
