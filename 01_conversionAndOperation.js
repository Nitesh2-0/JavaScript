let score = "hitesh"; 
// NaN :- Not a number ye undefined aur mixture string dene se milta hai

console.log(typeof score);
console.log(typeof (score));

let valInNumber = Number(score)

console.log(valInNumber);
console.log(typeof valInNumber);


/**
 * "33" => 33
 * "33abc" => NaN but type number
 * true => 1, false => 0
 * undefined => NaN
 */

let isLoggedIn = "oplk"
let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(isLoggedIn);
console.log(booleanIsLoggedIn);


/**
 * 1 => true; 0 => false
 * "" => false
 * "name" => true
 */

let someNumber = 33; 
let StringNumber = String(someNumber); 

console.log(StringNumber);
console.log(typeof StringNumber);

// *************** Operations ********************
let value = 3
let negValue = -value
console.log(negValue);

console.log(2**3);

let str1 = "hello"
let str2 = "hitesh"

let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 1); // 121
console.log(1 + 2 + "3"); // 33

console.log(+true); // 1
//console.log(true+);// it not allowed

let num1 , num2, num3
num1 = num2 = num3 = 2+2; 

let gameCounter = 100; 
gameCounter++; 
console.log(gameCounter); // 101
++gameCounter; 
console.log(gameCounter); // 102