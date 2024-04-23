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