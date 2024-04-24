/*
 * 
 * Memory are two types: 
 * Stack :: it used for primitive data type
 * Heap :: non primitive keliye hota hai 
 * jabi value decalre hoti hai primitive to o stack me chal jati hai aor ohaha se hmko  compy milta hai jab value heap me jati hai to refrence milta hai iska mtlab kuch bhi
 * agr change karenge data me to actual value me bhi hoga.
 * 
 */

let myChannerl = "Nitesh Kuamr"
let anotherName = myChannerl; 

anotherName = "chai aour code"

console.log(myChannerl); 
console.log(anotherName); // ye primitive data type isliye iska copy me change hoga actual value me nahi.

let userOne ={
  email:"user@gmail.com",
  upi:"ueri@ybl"
}

let userTwo = userOne;
userTwo.email = "nitesh@gmail.com"; 

console.log(userOne); // pass by refrence hoga kuki ye heap me store karta hai 
console.log(userTwo); // mtlab ki aap chnage karenge to aap ko original me bhi change hoga.

/**
 * Stack me primitive data type ki value store hota hai jo hmko uski value ka copy deta hai.
 * mtlab ki aap dusari value me change karenge to uska koi effect original me nahi hoga. jabki
 * heap me non-primitive datatype ka value store hot hai jo hmko pass by refrence deta hai 
 * mtlab agr aap secondme bhi cnge karenge to uska effect original me bhi hoga.
 */