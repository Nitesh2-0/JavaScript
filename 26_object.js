function userDetails(username, age){
  this.username = username
  this.age = age
}

userDetails.prototype.increment = function(){
  this.age++
}

userDetails.prototype.printMe = function (){
  console.log(`Age is ${this.age}`);
}

const chai = new userDetails("chai", 25); // agar nahi new lagate to can't reading null property
const tea  = new userDetails("tea", 27);


/** prototype aap mt kijiye hse javascript  karlega internaly*/
chai.printMe()