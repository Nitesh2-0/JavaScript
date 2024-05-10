let myName = 'Hitesh   '
let chai = 'chai    '
// console.log(myName.truelength);
/** i want to make method */

let myHero = ["thor","spiderman"]
let heroPower = {
  thor:"hammer",
  spiderman:"sling",

  getSpiderPower: function (){
    console.log(`Spidy power is ${this.spiderman}`);
  }
}

Object.prototype.Nitesh = function(){
  console.log('Nitesh Present in all object');
}

Array.prototype.heyNitesh = function(){
  console.log('Nitesh Say Hey');
}

// heroPower.Nitesh()
// myHero.Nitesh()
// myHero.heyNitesh()


const user = {
  name:"chai",
  email:"google.com"
}

const Teacher = {
  makeVideo : true,
}

const TeachingSupport = {
  isAvilable : false
}

const TASupport = {
  makeAssignement : 'JS assignment',
  fullTime : true,
  __proto__: TeachingSupport // inheritance
}

Teacher.__proto__ = user

// mordern way

Object.setPrototypeOf(TeachingSupport, Teacher) // prototypal inheritance


let anotherUserName = "cahaiOrCode      "
String.prototype.trueLength = function(){
  console.log(`${this.name}`);
  console.log(`${this}`);
  console.log(`True length is ${this.trim().length}`);
}

anotherUserName.trueLength()
"Nitesh".trueLength()
"iceTea".trueLength()