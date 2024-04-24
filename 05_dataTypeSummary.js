// Primitive

// 7 types : call by value 
// => String, Number, Boolean, null, undefined, symbol, BigInt

// Reference Type :: Non-Primitive => reference directly allocate kiya ja sakta hai 
// Array, Objects, Functions

/**
 * JavaScript :: JavaScript is a dynamically typed language.
 */

const score = 100
const scoreValue = 100.03
const isLoggedIn = false
const outsideTemp = null
let userEmail ;


// How to defined symboll
const id = Symbol('123')
const anotherId = Symbol('123')

const bigNumber = 54545544444444444n

console.log(id);
console.log(anotherId);
console.log(id === anotherId);


const heros = ["saktiman","naagraj","doga"]
let myObj = {
  name:"Nitesh",
  age:22,

}

const myFunction = function(){
  console.log("Hello World");
}

console.log(typeof bigNumber)