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
console.log(stringNum);
console.log(typeof stringNum);

// 33 => 33 , convert in  string
// null => null
// undefined => undefined
// true => true , false => false