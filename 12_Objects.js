// singleton -> koi bhi constructor se banate hai to o singleton hota hai
// jabi literal se define karte hai to singleton nahi banta hai.
// constructor se banega to singleton banega

// Object Literals
// Object.create() -> singleton keliye

const mySym = Symbol("Key1");

const JsUser = {
  name:"Hitesh",
  "full name":"Hitesh Cahudhary",
  [mySym]:"mykey1", // how to use symbol in object
  age:18,
  location:"jaipur",
  email:'hitesh@gmail.com',
  isLoggedIn : false,
  lastLogin : ['Monday','Saturday']
}

console.log(JsUser.email);
console.log(JsUser["full_name"]); // problem hoga
console.log(JsUser["email"]);
console.log(JsUser[mySym]);

JsUser.email = 'nitesh@gmail.com'
// Object.freeze(JsUser)
JsUser.email = 'Nitesh@gmail.com'
console.log(JsUser);

JsUser.greeting = function(){
  console.log(`Hello Js Good Night,${this.name}`);
}

JsUser.greetingTwo = function(){
  console.log(`Hello Js Good Night,${this.name}`);
}

console.log(JsUser.greeting()); // function ka reference aaya hai execute nahi huaa hai
console.log(JsUser.greetingTwo());