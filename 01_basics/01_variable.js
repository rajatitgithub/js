const accountId = 123456;
let accountEmail = "rajat@google.com"
var accountPassword = "1234"
accountCity = "Noida"

// accountId = 34;   //TypeError: Assignment to constant variable.

accountEmail = "hc@google.com"
accountPassword = "789076"
accountCity = "Bengaluru"
let accountState;

// console.log(accountId);

/*
prefer not to use var
because of issue in block scope and function scope
*/

console.table([accountId , accountEmail , accountPassword , accountCity , accountState]);


